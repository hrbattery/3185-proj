<template>
  <v-app id="inspire">
    <Header/>
    <v-main>
      <v-container>
      <div class="text-start">
        



      <h1>Image Inpainting    <img src="../assets/images/Hello.gif" width="200" height="80"></h1> <br>

        <a href="#whatis">1. What is Image inpainting</a>  <br>
        <a href="#techniques">2. Techniques of Image Restoration</a>  <br>
        <a href="#tree">3. Image Inpainting Datasets</a>  <br>
        <a href="#eval">4. Evaluation of Performance</a>  <br>
        <a href="#example">5. An Example of Image Inpaining</a>  <br> <br> 
        
       <h3 id = "whatis"> 1. What is Image Restoration</h3><br>
       <p id="para1"><b> Image restoration</b> is the operation of taking a corrupt/noisy image and estimating the clean, original image. 
            Corruption may come in many forms such as motion blur, noise and camera mis-focus. Image restoration is performed by 
            reversing the process that blurred the image and such is performed by imaging a point source and use the point source image, 
            which is called the Point Spread Function (PSF) to restore the image information lost to the blurring process.</p>
        <p> <b>Image restoration</b> is different from <b>image enhancement</b> in that the latter is designed to emphasize features of the image that make the 
            image more pleasing to the observer, but not necessarily to produce realistic data from a scientific point of view. Image enhancement techniques 
            (like contrast stretching or de-blurring by a nearest neighbor procedure) provided by imaging packages 
            use no a priori model of the process that created the image.</p>
        <p> With image enhancement noise can effectively be removed by sacrificing some resolution, but this is not acceptable in many applications. 
            In a fluorescence microscope, resolution in the z-direction is bad as it is. 
            More advanced image processing techniques must be applied to recover the object.</p>
        <p> The objective of image restoration techniques is to reduce noise and recover resolution loss Image processing techniques 
            are performed either in the image domain or the frequency domain. The most straightforward 
            and a conventional technique for image restoration is deconvolution, which is performed in the frequency domain 
            and after computing the Fourier transform of both the image and the PSF and undo the resolution loss caused by the blurring factors. 
            This deconvolution technique, because of its direct inversion of the PSF which typically has poor matrix condition number, 
            amplifies noise and creates an imperfect deblurred image. Also, conventionally the blurring process is assumed to be shift-invariant. 
            Hence more sophisticated techniques, such as regularized deblurring, have been developed 
            to offer robust recovery under different types of noises and blurring functions. 
            It is of 3 types: 1. Geometric correction 2. radiometric correction 3. noise removal</p>
            
      <img  src="../assets/images/image inpainting.png"  width="700" height="400" > <br><br>
        <p>Figure 1. kinds of images inpainting</p>
        <br>
       
        <!-- <img  src="../assets/images/微信图片_20201210135429.png" style="float:center"   width="700" height="400" >
        <p>Figure 2. </p> -->

        
       
        <p>Here is the video for image inpainting using Deep Learning </p>
        <iframe width="956" height="538" src="https://www.youtube.com/embed/kbwfYMlVCps" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br><br>
       <h2 id="techniques"> 2. Image inpainting applications and the purposes of each category</h2> <br>
        
            
        
          

          <h3>2.1 Sequential-Based Methods</h3> <br>
          <p>Approaches related to images inpainting can be classified into two categories: <b>patch-based</b>
            and <b>diffusion-based methods</b>.</p>
            <p><b>Patch-based methods</b> are based on techniques that fill in the missing region patch-bypatch by searching for well-matching replacement patches (i.e., candidate patches) in the
                undamaged part of the image and copying them to corresponding locations. Many methods
                have been proposed for image inpainting using patch-based method. Ruži´c and Pi˘zurica [15]
                proposed a patch-based method consisting of searching the well-matched patch in the texture component using Markov random field (MRF). Jin and Ye [16] proposed a patch-based
                approach based on annihilation property filter and low rank structured matrix. In order to
                remove an object from an image, Kawai et al. [17] proposed an approach based on selecting the target object and limiting the search around the target by the background. Using
                two-stage low rank approximation (TSLRA) [18] and gradient-based low rank approximation [19], authors proposed patch-based methods for recovering the corrupted block in the
                image. </p>


                <p><b>Diffusion-based methods</b> fill in the missing region (i.e. hole), by smoothly propagating
image content from the boundary to the interior of the missing region. For that, Li et al.
[41] proposed a diffusion-based method for image inpainting by localizing the diffusion of
inpainted regions followed by the construction of a feature set based on the intra-channel
and inter-channel local variances of the changes to identify the inpainted regions. Another
diffusion-based method of image inpainting proposed by the same authors in a later research
[42] involves exploiting diffusion coefficients which were computed using the distance and
direction between the damaged pixel and its neighborhood pixel. Sridevi et al. [43] proposed
another diffusion-based image inpainting method based on Fractional-order derivative and
Fourier transform. Table 1 depicts a summary of patch-based and diffusion-based sequential
methods for image inpainting.</p>
                    
                    
                    <p>
                        
                        <!--  Diffusion-based methods fill in the missing region (i.e. hole), by smoothly propagating
                        image content from the boundary to the interior of the missing region. For that, Li et al.
                        [41] proposed a diffusion-based method for image inpainting by localizing the diffusion of
                        inpainted regions followed by the construction of a feature set based on the intra-channel
                        and inter-channel local variances of the changes to identify the inpainted regions. Another
                        diffusion-based method of image inpainting proposed by the same authors in a later research
                        [42] involves exploiting diffusion coefficients which were computed using the distance and
                        direction between the damaged pixel and its neighborhood pixel. Sridevi et al. [43] proposed
                        another diffusion-based image inpainting method based on Fractional-order derivative and
                        Fourier transform. Table 1 depicts a summary of patch-based and diffusion-based sequential
                        methods for image inpainting.
                    </p>
                    <p>Jin et al. [44] proposed an approach called sparsity-based image inpainting detection
                        based on canonical correlation analysis (CCA). Mo and Zhou [45] present a research-based
                        on dictionary learning using sparse representation. These methods are robust for simple
                        images, but when the image is complex like contains a lot of texture and object or the object
                        cover a large region in the images, searching for similar patch can be difficult.</p> -->

                          <p>You can search more papers for sequential-based method in image inpainting in <a href="https://scholar.google.com/    " target="_blank">Google Scholar                       </a> 
          <img src="../assets/images/熊本熊.gif" width="100" height="50">
          </p>

<br> 

          <h3>2.2 Convolutional-Neural-Network-Based Methods</h3><br> 
          <p>
            Recently, the strong potential of <b>deep convolutional networks (CNNs)</b> is being exhibited in
            all computer vision tasks, especially in image inpainting. CNNs are used specifically in order
            to improve the expected results in this field using large-scale training data. The sequentialbased methods succeed in some parts of image inpainting like filling texture details with
            promising results, yet the problem of capturing the global structure is still a challenging
            task [46]. Several methods have been proposed for image inpainting using convolutional
            neural networks (CNNs) or encoder-decoder network based on CNN. Shift-Net based on
            U-Net architecture is one of these methods that recover the missing block with good accuracy in terms of structure and fine-detailed texture [46]. In the same context, Weerasekera
            et al. [47] use depth map of the image as input of the CNN architecture, whereas Zhao et
            al. [48] use the proposed architecture for inpainting X-ray medical images. VORNet [49] is
            another CNN-based approach for video inpainting for object removal. Most image inpainting methods know the reference of damaged pixels of blocks. Cai et al. [50] proposed a
            blind image inpainting method named (BICNN). Based on convolutional neural networks
            (CNNs) using encoder-decoder network structure many works have been proposed for image
            inpainting. In order to mitigate the effect of the gradient disappearance, the authors in [65] introduce a dense block for U-Net architecture that is used for inpainting the images. For
                medical purposes, the authors in [67] attempted to denoising the medical images using the
            principle of image inpainting using Residual U-Net architecture. To address the blurring and
            color discrepancy problems for image inpainting the authors in [66] proposed a method for
            missed region reconstruction using region-wise convolutions. As the authors in [68] add some
            layers named Interleaved Zooming Block in the encoder-decoder architecture for impainting
            the images. The authors in [69] Proposed a full-resolution residual block (FRRB) with an
            encoder-decoder model for the same purpose.
          </p>
          <img src="../assets/images/CNN网络结构.jpg" width="800" height="300" > <br>
                    <p> Figure 2. architecture of CNN network for image inpainting</p>
          <p>You can search more papers for CNN in image inpainting in <a href="https://scholar.google.com/    " target="_blank">Google Scholar                       </a> 
          <img src="../assets/images/熊本熊.gif" width="100" height="50" align="middle">
          </p>

          <h3> 2.3 GAN-Based Methods</h3><br> 
          <p>
          
            <b>Generative adversarial networks (GANs)</b> are a framework which contains two feed-forward
            networks, a generator G and a discriminator D. The generative network, G, is trained to
            create a new image which is indistinguishable from real images, whereas a discriminative
            network, D is trained to differentiate between real and generated images. This relation can
            be considered as a two-player min-max game in which G and D compete. To this end, the G
            (D) tries to minimize (maximize) the loss function, i.e. adversarial loss. Recently, the GAN has been applied to several
            semantic inpainting techniques in order to complete the hole region naturally.<br><br>


          <img src="../assets/images/GAN.jpg" width="700" height="320"  align="middle"><br><br>
            Figure 3. architecture of GAN network<br>
            
          </p>

            <p>
              Here is the video that introduce using GAN for image inpainting from youtube.
            </p>
            
            
            <iframe width="956" height="538" src="https://www.youtube.com/embed/w3D9uk-Ky5I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
          <p>
            GANs are a framework that contains two feed-forward networks, a generator G and a
            discriminator D, as shown in Fig. 4. The generator takes random noise z as input and
            generates some fake samples similar to real ones; while the discriminator has to learn to
            determine whether samples are real or fake. At present, Generative Adversarial Network
            (GAN) becomes the most used technique in all computer vision applications. GAN-based
            approaches use a coarse-to-fine network and contextual attention module gives good performance and is proven to be helpful for inpainting [71–75]. Existing image inpainting methods
            based on GAN are generally a few. 
          </p>

         <!--   <p>
            whereas, Salem et al. [83] proposed a semantic image inpainting method using adversarial
            loss and self-learning encoder-decoder model. A good image restoration method requires
            preserving structural consistency and texture clarity. For this reason, Liu et al. [84] proposed
            a GAN-based method for image inpainting on face images. FiNet [85] is another approach
            found in the literature for fashion image inpainting that consists of completing the missing
            parts in fashion images.
          </p>
        -->
          
          
            <p>
            The GAN-based methods give a good addition to the performance of image inpainting
            algorithms, but the speed of training is lower and needs very good performance machines,
            and this is due to computational resources requirements including network parameters and
            convolution operations.
</p>

         
          <p>You can search more papers for GAN in image inpainting in <a href="https://scholar.google.com/    " target="_blank">Google Scholar    </a> 
          <img src="../assets/images/熊本熊.gif" width="100" height="50" align="middle">
          </p>
              
        <h2 id="tree">3. Image Inpainting Datasets</h2> <br>
        
            <p>
<b>Image inpainting methods</b> use well known and large datasets for evaluating their algorithms
and comparing the performance. The categories of images determine the effectiveness of each
proposed method. These categories include natural images, artificial images, face images,
and many other categories. 
            </p>

            <p>• Paris StreetView [93] is collected from Google StreetView and represents a large-scale
dataset containing street images for several cities around the world. The Paris StreetView
comprises 15,000 images. The resolution of images is 936 × 537 pixels.</p>
            <p>• Places1 [94] dataset is built for human visual cognition and visual understanding purposes.
The dataset contains many scene categories such as bedrooms, streets, synagogue, canyon,
and others. The dataset is composed of 10 million images including 400+ images for each
scene category. It allows the deep learning methods to train their architecture with large-scale
data.</p>
            <p>• A depth image dataset2 is introduced by Xue et al. [20] for evaluating depth image
inpainting methods. The dataset is composed of two types of images: RGB-D images and
grayscale depth images. Also, 14 scene categories are included such as Adirondack, Jade
plant, Motorcycle, Piano, Playable and others. The masks for damaged images are created
including textual makes (text in the images) and random missing masks.</p>
            <p>• Foreground-aware dataset [95] is different from the other datasets. It contains the masks
that can be added to any image for damaging it. It is named an irregular hole mask dataset
for image inpainting. Foreground-aware datasets contain 100,000 masks with irregular holes
for training, and 10,000 masks for testing. Each mask is a 256 × 256 gray image with 255
indicating the hole pixels and 0 indicating the valid pixels. The masks can be added to any
image for damaging it, which can be used for creating a large dataset of damaged images.</p><br>

        
       <!-- <img src="../assets/images/image_inpainting_dataset.png" wide = 1000 height = 370 > <br><br>
        <p>Figure 3. famous dataset for image inpainting</p> -->
        <img src="../assets/images/image_inpaintingdataset.png" wide = 1000 height = 370 >
        <p>Figure 4. famous dataset for image inpainting</p>
<br> 
      <h2 id="eval">4.Evaluation of performance</h2><br> 
      <p>
          Due to the unavailability of a large dataset of damaged painting images and the novelty
of the image inpainting topic, researchers find it difficult to obtain datasets for training
their methods [107]. For that, most researchers use existing datasets like USC-SIPI, Paris
StreetView, Places, ImageNet and others, and damage a set of images from these datasets for
training their models and algorithms. The available methods in literature generate their own
image inpainting datasets by adding some artificial distortion including noise [20], text [24],
scratch [30], objects (shapes) [93], masks [95,97].
The evaluation metrics for image inpainting algorithms differ according to the using
technique. In order to evaluate the efficiency of the proposed methods, researchers use some
evaluation measures including mean squared error (MSE), Peak Signal to Noise Ratio (PSNR)
and Structural Similarity Index (SSIM) [108]. 
        
      </p>
  <p>
    With <b>deep learning techniques</b>, any task in computer vision can be performed with automatic learning using different unsupervised features, unlike the sequential-based method. The
learning is made using convolutional neural networks (CNNs) that makes several computer
vision tasks more improved in terms of robustness and most simple in terms of features suitable for each task. For image inpainting methods that use CNN, as described in the previous
section, the effectiveness of each approach is related to the size and type of the data used and
the architecture implemented. The evaluation of these methods is the same as for sequentialbased methods. PSNR (the distance at the pixel level) and SSIM (similarity between two
images) are used for evaluating the robustness of repairing damaged images under different
categories of distortion including scratch, text, noise or random region (Blocks) added to the image.  It is obvious that the performance of such methods is related
to the type of distortion. For example, images damaged by blocks are less accurate in terms
of PSNR values. 

As montioned above, the unavailability of the datasets for image inpainting make the
comparison between these methods difficult. Also, each author uses different masks and type
of distortion.
  </p>
<h3 >4.1 computational time</h3><br>

<p>
  <b>Computational time</b> represents a challenge for many tasks in computer vision, especially for
real-time applications. Also with the speed of development of deep learning methods (i.e.
from CNN to GAN), the training time, training speed, inference time, becomes a concern for
image/video processing methods. For the image inpainting which presents a new challenge in
computer vision, the computational time, or the other term related to it, is not much analyzed
by the authors in the state-of-the-art methods except some of them. The existing methods
describe either the time of training, interference or the training speed for inpainting an image.
By the following, each one of the methods that considers the concept of time is presented:
</p>



<p>
• Running time. In [51] the authors compute the average running time of each tested image
with a resolution of 256×256. Where the results are 2 s for each image. in [54] the
proposed architecture takes 0.82 s per image because of the use of a CSA layer that
increases the computational time.
</p>

<p>
• Training speed. The training speed is the evaluation time metric presented in [49] for
describing the computational cost of the proposed architecture for training which was 7
fps (frame per second).
</p>

<p>
• Running time. In [51] the authors compute the average running time of each tested image
with a resolution of 256×256. Where the results are 2 s for each image. in [54] the
proposed architecture takes 0.82 s per image because of the use of a CSA layer that
increases the computational time.
</p>

<p>
• Inference time. The inference time is presented in [47] for each inpainting the RGB-D
images using different Dept sensor including ORB-SLAM and Kinect depth map, and
LIDAR depth map. For ORB-SLAM and Kinect depth map the inference time is about
30ms where the resolution of the images is 147×109 and about 200ms for the full image
resolution of 640×480. For the LIDAR depth map, the inference time is about 100ms at
608×160 image resolution. In the same context, the inference time takes 38 s to complete
the image inpainting in [71].
</p>

<p>
• Training time. In some works, the authors declare the time needed for training their
model. for example, in [71] the training process costs 169m for CelebA dataset and 66m
for Stanford Cars dataset where the architecture is implemented on an NVIDIA GTX
1080Ti GPU. The same architecture is trained on a CPU (i5-7400, 3.00GHz) and the
process takes about 42 h.
</p>
<!--  

      <p>Table 1. sequential-based method performance</p>
      <img src="../assets/images/sequential_time.png" align="middle"> <br>
      <p>Table 2. CNN method performance</p>
      <img src="../assets/images/CNN_performance.png" align="middle"> <br>
      <p>Table 3. GAN method performance</p>
      <img src="../assets/images/GAN_performance.png" align="middle"> <br><br>

-->

        <h2 id="example">5. Example of Image Inpainting</h2><br>
        <p>
          Here we introduce the paper of<a href="https://link.springer.com/chapter/10.1007/978-3-319-67389-9_39 " target="_blank"><i> Neural Network Convolution (NNC) for Converting Ultra-Low-Dose to Virtual High-Dose CT Images.</i> </a> 
          In this paper,<i> Kenji Suzuki</i> et al designed a neural network convolution to denosing CT with low quality.

        </p>
        
        
        <p>
          CT is responsible for the 2% of the tumour in America for its radiation.
        low dose CT is good for the health of patients. However, low dose CT suffers from noise and artifact. Improving the quality of low dose CT is important.

        To reduce radiation dose in CT, scientists developed a novel deep-learning
technique, neural network convolution (NNC), for converting ultra-low-dose
(ULD) to “virtual” high-dose (HD) CT images with less noise or artifact. NNC
is a supervised image-based machine-learning (ML) technique consisting of a
neural network regression model. Unlike other typical deep learning, NNC can
learn thus output desired images, as opposed to class labels. Scientists trained our
NNC with ULDCT (0.1 mSv) and corresponding “teaching” HDCT (5.7 mSv)
of an anthropomorphic chest phantom. Once trained, our NNC no longer require
HDCT, and it provides “virtual” HDCT where noise and artifact are substantially reduced. To test their NNC, scientists collected ULDCT (0.1 mSv) of 12 patients
with 3 different vendor CT scanners. To determine a dose reduction rate of our
NNC, scientists acquired 6 CT scans of the anthropomorphic chest phantom at 6
different radiation doses (0.1–3.0 mSv). Their NNC reduced noise and streak
artifacts in ULDCT substantially, while maintaining anatomic structures and
pathologies such as vessels and nodules. With our NNC, the image quality of
ULDCT (0.1 mSv) images was improved at the level equivalent to 1.1 mSv CT
images, which corresponds to 91% dose reduction.
        </p>
      <p>
        Here is the training step and testing step of the network.

      </p>
      
      <img src="../assets/images/微信截图_20201210133627.png" width="800" height="600"> <br>
      <p>Figure 5. Schematic diagrams of proposed radiation dose reduction technology based on our
original deep-learning model, NNC.</p><br>


      <p>
        Here is the performance of the denoising low dose CT compared to different dose of CT. The performance of the low dose CT
        is equivalent to CT with dose 1.1 mSv.

      </p>
<img src="../assets/images/Performance.png" > <br>
      <p>Figure 6. Estimation for equivalent effective dose from SSIM for our virtual HDCT of CT scans of
an anthropomorphic chest phantom.</p>


    <h4> Here is the end of the introduce of image inpainting, thank you very much!</h4>
        <p>To learn more <a href="https://en.wikipedia.org/wiki/Image_restoration" target="_blank">Visit Wikipedia!</a> 
        <img src="../assets/images/20190822430970_QAhEPK.gif" width="100" height="80">
        </p>
        

      </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    data() {
      return {
        headerTitles: [
          'Page1',
          'Page2',
          'Page3',
          'Page4'
        ]
      }
    },
    methods: {
      test() {
        // this.$refs.cards["1"].text = "Topic 1";
      }
    },
    components: {
      Header,
    },
    mounted () {
      // console.log(this.$refs.cards['1'])
      // this.$refs.cards["1"].text = "Topic 1";
    }
  }
</script>