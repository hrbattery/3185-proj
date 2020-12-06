# CSC4005 Distributed and Parallel Computing

### Project 1 Parallel Odd-Even Transposition Sort

#### Zeng Lewei (117010366) 2019-10-06



##### Introduction

In this project, a parallel odd-even transposition sort is implemented with MPI. A ordinary odd-even transposition sort is performed as follow:

- Compare the odd element with next even element in odd iteration, or the even element with next odd element in even iteration respectively. Swap the elements if the previous one is larger.

- Repeat the operation until the numbers are sorted.

In the parallel version, it works as follow:

(Initially, m numbers are distributed to n processes, respectively.)
$$
a\cdot c = \gamma
$$


- Divide the array into subarrays, and each process do the first step of ordinary odd-even transposition sort.
- If the current process rank is P, and there some elements that are left over
  for comparison in step 1, compare the boundary elements with process with
  rank P-1 and P+1. If the posterior element is smaller, swaps them.
- Repeat the operations until the number are sorted.

The parallel odd-even transposition sort will broaden the bandwidth of sort algorithm, but will bring extra communication time between processes. We will see both effect of them in the report.



##### Design

First, the design for sequential version of odd-even transposition sort is simple.

The thought is basically following the principle of odd-even transposition sort, which repeating the odd iteration and even iteration, and export the sorted array when after an iteration, the order of all the elements in the array do not change.

```c++
void oddEvenSort(int* array, int arraySize, int oddEvenSign, int &swapSign) {
    swapSign = 0;
    for (int i = oddEvenSign; i < arraySize-1; i += 2) {
        if (array[i] > array[i+1]) {
            std::swap(array[i], array[i+1]);
            swapSign = 1;
        }
    }
}

int main(int argv, char* argc[]) {
    const int mainArraySize = 15000;
    const int randomRange = 20000;
    int mainArray[mainArraySize];
    for (int i = 0; i < mainArraySize; i++) {
        mainArray[i] = random(randomRange);
        std::cout << mainArray[i] << " " ;
    }
    int sortSign = 0; // 0 = odd, 1 = even
    int changeSign = 1; // 0 = array no changed, 1 = array changed
    while (changeSign) {
        changeSign = 0;
        if (sortSign == 0) {
            oddEvenSort(mainArray, mainArraySize, 0, changeSign);
        }
        else {
            oddEvenSort(mainArray, mainArraySize, 1, changeSign);
        }
        sortSign = !sortSign;
    }
    for (int i = 0; i < mainArraySize; i++) {
        std::cout << mainArray[i] << " " ;
    }
    std::cout << "\n";
}
```

Then, base on the same principle, here is the design of parallel odd-even transposition sort. 

1. Divide the main array into several subarrays. The last process would receive more numbers if m does not divide n, and other processes would receive numbers in number m/n. Using `MPI_Send()` to send subarray to all process.

   ```c++
   const int mainArraySize = 20;
   const int randomRange = 20000;
   double start_time, end_time;
   
   // initialize MPI processes
   int rank, size;
   MPI_Init(&argv, &argc);
   MPI_Comm_rank(MPI_COMM_WORLD, &rank);
   MPI_Comm_size(MPI_COMM_WORLD, &size);
   
   // master process create main array
   int mainArray[mainArraySize];
   if (rank == 0) {
       for (int i = 0; i < mainArraySize; i++) {
           mainArray[i] = random(randomRange);
       }
       start_time = MPI_Wtime();
       for (int i = 1; i < size; i++) {
           MPI_Send(mainArray, mainArraySize, MPI_INT, i, 0, MPI_COMM_WORLD);
       }
   }
   else {
       MPI_Recv(mainArray, mainArraySize, MPI_INT, 0, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
   }
   
   // create subarray of each process
   int subArraySize = mainArraySize / size + 1;
   int subArray[subArraySize];
   int indexHead = rank * (subArraySize - 1);
   if (rank != size -1) {
       for (int i = 0; i < subArraySize; i++) {
           subArray[i] = mainArray[i+indexHead];
       }
   }
   else {
       subArraySize = mainArraySize - (size - 1) * (subArraySize - 1);
       for (int i = 0; i < subArraySize; i++) {
           subArray[i] = mainArray[i+indexHead];
       }
   }
   ```

   

2. implement sequential odd-even transposition sort on all the processes. Here, there are two methods to implement the sort. The first method is treating all the subarrays as several individual arrays, and the second method is still treating subarrays as a part of main arrays. The difference between these two method is, for the first method, all the process will do odd iteration at the same time, and then do even iteration at the same time. But for the second method, some do odd iteration and some might do even iteration at the same time.

   In this program, I choose the second method. The actual implementation of method 2 is making the actual size array equals to m/n+1. After the swap between different processes, the last element of subarray in process K always equals to the first element of subarray in process K+1. After each iteration of all processes, the root process will use `MPI_Allreduce()` to determine that the whole array is sorted or not, and give back a signal to tell other processes to continue the while loop or not.

```c++
void oddEvenSort(int* array, int arraySize, int oddEvenSign, int &swapSign, int &headChangeSign) {
    swapSign = 0;
    for (int i = oddEvenSign; i < arraySize-1; i += 2) {
        if (array[i] > array[i+1]) {
            std::swap(array[i], array[i+1]);
            swapSign = 1;
            if (i == 0) {
                headChangeSign = 1;
            }
        }
    }
}

...
    
// sorting
    int sortSign = 0; // 0 = odd, 1 = even
    int swapSign = 1; // 0 = array no changed, 1 = array changed
    int swapBuf = 0; // buffer for swap signal
    int recieveBuf; // buffer for swapped element from previous process; 
    int headChangeSign; // signal that indicate the head on this process was changed or not
    while (swapSign) {
        swapSign = 0;
        headChangeSign = 0;
        if ((sortSign == 0 && (indexHead % 2 == 0)) || (sortSign == 1 && (indexHead % 2 != 0))) {
            oddEvenSort(subArray, subArraySize, 0, swapSign, headChangeSign);
        }
        else {
            oddEvenSort(subArray, subArraySize, 1, swapSign, headChangeSign);
        }
        if (rank != size - 1) {
            MPI_Send(&subArray[subArraySize-1], 1, MPI_INT, rank+1, 1, MPI_COMM_WORLD);
        }
        if (rank != 0) {
            MPI_Recv(&recieveBuf, 1, MPI_INT, rank-1, 1, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
            if ((recieveBuf != subArray[0]) && headChangeSign != 1) {
		        subArray[0] = recieveBuf;
                swapSign = 1;
            }
            MPI_Send(&subArray[0], 1, MPI_INT, rank-1, 2, MPI_COMM_WORLD);
        }
        if (rank != size - 1) {
            MPI_Recv(&recieveBuf, 1, MPI_INT, rank+1, 2, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
            subArray[subArraySize-1] = recieveBuf;
        }
        MPI_Allreduce(&swapSign, &swapBuf, 1, MPI_INT, MPI_LOR, MPI_COMM_WORLD);
        swapSign = swapBuf;
        sortSign = !sortSign;
    }
```

3. After the whole array is sorted, collected all the subarrays into root process.

   ```c++
   if (rank != 0) {
           MPI_Send(subArray, subArraySize, MPI_INT, 0, 3, MPI_COMM_WORLD);
       }
       else {
           int subBuf[mainArraySize - (size - 1) * (subArraySize - 1)];
           for (int i = 0; i < subArraySize-1; i++) {
               mainArray[i] = subArray[i];
           }
           for (int i = 1; i < size-1; i++) {
               MPI_Recv(subArray, subArraySize, MPI_INT, i, 3, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
               for (int j = 0; j < subArraySize-1; j++) {
                   mainArray[j+i*(subArraySize - 1)] = subArray[j];
               }
           }
           MPI_Recv(subBuf, mainArraySize - (size - 1) * (subArraySize - 1), MPI_INT, size-1, 3, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
           for (int j = 0; j < mainArraySize - (size - 1) * (subArraySize - 1); j++) {
               mainArray[j+(size-1)*(subArraySize - 1)] = subBuf[j];
           }
           end_time = MPI_Wtime();
           for (int i = 0; i < mainArraySize; i++) {
               std::cout << mainArray[i] << " " ;//for test
           }
           std::cout << "\n";//for test
   
           // auther declaration
           printf("Name: Zeng Lewei\n");
           printf("student ID: 117010366\n");
           printf("Assignment 1: Parallel Odd-Even Transposition Sort\n");
           printf("Execute time: %.2lf seconds\n", end_time - start_time);
       }
   
       MPI_Finalize();
   
   	return 0;
   }   
   ```

##### Result

##### Performance

The program runs on Ubuntu 18.04.1 LTS, implemented on virtual machine on Windows 10. The computer is equipped with an AMD Ryzen 5 2600X CPU, which is a 6 core 12 thread processor. I adjusted the main index size to 15000, random number range to 0 ~ 50000, using different parameters setting from -n 2 to -n 10. Here is the result. 

| time(s) | sequential | -n 2 | -n 3 | -n 4 | -n 5 | -n 6 | -n 7   | -n 8   | -n 9   | -n 10  |
| ------- | ---------- | ---- | ---- | ---- | ---- | ---- | ------ | ------ | ------ | ------ |
| 1st     | 0.92       | 0.5  | 0.38 | 0.33 | 0.33 | 0.3  | 254.02 | 348.75 | 448.32 | 507.89 |
| 2nd     | 0.93       | 0.5  | 0.38 | 0.32 | 0.33 | 0.29 | 248.37 | 342.62 | 441.28 | 507.33 |
| 3rd     | 0.93       | 0.51 | 0.45 | 0.32 | 0.3  | 0.3  | 248.43 | 343.11 | 441.33 | 506.92 |
| Avg     | 0.927      | 0.50 | 0.40 | 0.32 | 0.32 | 0.3  | 250.27 | 344.83 | 443.64 | 507.38 |

In fact, the original thought is to test from -n 2 to -n 16. However, a bottleneck occurs at -n 7. When using   -n 10, the running time is more than 500 seconds, so I think it is meaningless to test the remain options.

The reason for the phenomenon is when the process number is larger than the number of core of processor, at least one core must handle more than one process. And in reality, this parallel sort method has the same time complexity (O(n^2)) as sequential version. When a core handle more than one process, it must execute them sequentially, and for other processes, they must wait for the processes haven't be executed. This resulting a worse performance.

Of course, when using less than or equal to 6 processes, the performance for parallel sorting is better than sequential sorting. During each round of sorting, each process must block and wait for swapping element with another process, and it takes communication time. But the two method has the same time complexity, and for each processes in parallel sorting, the number of elements n is much smaller than the sequential one. The time complexity for communication between process is O(n), which is better than O(n^2), and this is the reason for the result.

##### Conclusion

In this experiment, the parallel sort is successfully implemented using MPI. The performance of parallel sort is much better than sequential sort when the data is large and the number of processes is more than 2 and less than the number of core of processor.

##### Experience

It is important to know the MPI functions, including the block mode of send and receive messages and the work principle of collective communications like `MPI_Reduce()` and `MPI_Allreduce()`, but the most important is to think with parallel thought. With MPI, only one part can implement parallel computing, and I can't using MPI functions after `MPI_Finalize()`. Therefore, I have to consider about what things have to be done in the parallel part. In the other hand, to consider about communication between processes is difficult. I have to consider about what messages must be sent and what are not necessary, which will help saving execution time.

##### Source Code

```c++
#include "mpi.h"
#include <iostream>
#include <cstdio>
#include <cstdlib>
#include <unistd.h>
#define random(x) (rand()%x) 

void oddEvenSort(int* array, int arraySize, int oddEvenSign, int &swapSign, int &headChangeSign) {
    swapSign = 0;
    for (int i = oddEvenSign; i < arraySize-1; i += 2) {
        if (array[i] > array[i+1]) {
            std::swap(array[i], array[i+1]);
            swapSign = 1;
            if (i == 0) {
                headChangeSign = 1;
            }
        }
    }
}

int main(int argv, char* argc[]) {
    const int mainArraySize = 20;
    const int randomRange = 20000;
	double start_time, end_time;
    // initialize MPI processes
    int rank, size;
    MPI_Init(&argv, &argc);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
	MPI_Comm_size(MPI_COMM_WORLD, &size);
    // master process create main array
    int mainArray[mainArraySize];
    if (rank == 0) {
        for (int i = 0; i < mainArraySize; i++) {
            mainArray[i] = random(randomRange);
        }
        start_time = MPI_Wtime();
        for (int i = 1; i < size; i++) {
            MPI_Send(mainArray, mainArraySize, MPI_INT, i, 0, MPI_COMM_WORLD);
        }
    }
    else {
        MPI_Recv(mainArray, mainArraySize, MPI_INT, 0, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
    }

    // create subarray of each process
    int subArraySize = mainArraySize / size + 1;
    int subArray[subArraySize];
    int indexHead = rank * (subArraySize - 1);
    if (rank != size -1) {
        for (int i = 0; i < subArraySize; i++) {
            subArray[i] = mainArray[i+indexHead];
        }
    }
    else {
        subArraySize = mainArraySize - (size - 1) * (subArraySize - 1);
        for (int i = 0; i < subArraySize; i++) {
            subArray[i] = mainArray[i+indexHead];
        }
    }

    // sorting
    int sortSign = 0; // 0 = odd, 1 = even
    int swapSign = 1; // 0 = array no changed, 1 = array changed
    int swapBuf = 0; // buffer for swap signal
    int recieveBuf; // buffer for swapped element from previous process; 
    int headChangeSign; // signal that indicate the head on this process was changed or not
    while (swapSign) {
        swapSign = 0;
        headChangeSign = 0;
        if ((sortSign == 0 && (indexHead % 2 == 0)) || (sortSign == 1 && (indexHead % 2 != 0))) {
            oddEvenSort(subArray, subArraySize, 0, swapSign, headChangeSign);
        }
        else {
            oddEvenSort(subArray, subArraySize, 1, swapSign, headChangeSign);
        }
        if (rank != size - 1) {
            MPI_Send(&subArray[subArraySize-1], 1, MPI_INT, rank+1, 1, MPI_COMM_WORLD);
        }
        if (rank != 0) {
            MPI_Recv(&recieveBuf, 1, MPI_INT, rank-1, 1, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
            if ((recieveBuf != subArray[0]) && headChangeSign != 1) {
		        subArray[0] = recieveBuf;
                swapSign = 1;
            }
            MPI_Send(&subArray[0], 1, MPI_INT, rank-1, 2, MPI_COMM_WORLD);
        }
        if (rank != size - 1) {
            MPI_Recv(&recieveBuf, 1, MPI_INT, rank+1, 2, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
            subArray[subArraySize-1] = recieveBuf;
        }
        MPI_Allreduce(&swapSign, &swapBuf, 1, MPI_INT, MPI_LOR, MPI_COMM_WORLD);
        swapSign = swapBuf;
        sortSign = !sortSign;
    }
    MPI_Barrier(MPI_COMM_WORLD);

    if (rank != 0) {
        MPI_Send(subArray, subArraySize, MPI_INT, 0, 3, MPI_COMM_WORLD);
    }
    else {
        int subBuf[mainArraySize - (size - 1) * (subArraySize - 1)];
        for (int i = 0; i < subArraySize-1; i++) {
            mainArray[i] = subArray[i];
        }
        for (int i = 1; i < size-1; i++) {
            MPI_Recv(subArray, subArraySize, MPI_INT, i, 3, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
            for (int j = 0; j < subArraySize-1; j++) {
                mainArray[j+i*(subArraySize - 1)] = subArray[j];
            }
        }
        MPI_Recv(subBuf, mainArraySize - (size - 1) * (subArraySize - 1), MPI_INT, size-1, 3, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
        for (int j = 0; j < mainArraySize - (size - 1) * (subArraySize - 1); j++) {
            mainArray[j+(size-1)*(subArraySize - 1)] = subBuf[j];
        }
        end_time = MPI_Wtime();
        for (int i = 0; i < mainArraySize; i++) {
            std::cout << mainArray[i] << " " ;
        }
        std::cout << "\n";

        // auther declaration
        printf("Name: Zeng Lewei\n");
        printf("student ID: 117010366\n");
        printf("Assignment 1: Parallel Odd-Even Transposition Sort\n");
        printf("Execute time: %.2lf seconds\n", end_time - start_time);
    }

    MPI_Finalize();

	return 0;
}   
```

