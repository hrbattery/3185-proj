(function(i){function e(e){for(var t,o,a=e[0],l=e[1],d=e[2],c=0,m=[];c<a.length;c++)o=a[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(i[t]=l[t]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var i,e=0;e<s.length;e++){for(var n=s[e],t=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(t=!1)}t&&(s.splice(e--,1),i=o(o.s=n[0]))}return i}var t={},r={app:0},s=[];function o(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return i[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=i,o.c=t,o.d=function(i,e,n){o.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:n})},o.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},o.t=function(i,e){if(1&e&&(i=o(i)),8&e)return i;if(4&e&&"object"===typeof i&&i&&i.__esModule)return i;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var t in i)o.d(n,t,function(e){return i[e]}.bind(null,t));return n},o.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return o.d(e,"a",e),e},o.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(i,e,n){i.exports=n("56d7")},"034f":function(i,e,n){"use strict";n("85ec")},"1fc3":function(i,e,n){i.exports=n.p+"img/Style Transfer.e7bc31c8.jpg"},"56d7":function(i,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("2b0e"),r=n("8c4f"),s=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a={name:"App"},l=a,d=(n("034f"),n("2877")),u=Object(d["a"])(l,s,o,!1,null,null,null),c=u.exports,m=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-app",{attrs:{id:"inspire"}},[t("v-app-bar",{attrs:{app:""}},[t("v-toolbar-title",[t("v-btn",{attrs:{icon:""}},[t("router-link",{attrs:{to:"/"}},[t("v-icon",[i._v("mdi-home")])],1)],1)],1),t("v-spacer"),t("v-btn",{attrs:{icon:""}},[t("router-link",{attrs:{to:"about"}},[t("v-icon",[i._v("mdi-information")])],1)],1),t("v-btn",{attrs:{icon:""}},[t("v-icon",{on:{click:i.darkModeTrigger}},[i._v("mdi-theme-light-dark")])],1)],1),t("transition",{attrs:{name:"fade"}},[i.displayBackground?t("div",{style:i.backgroundStyle,attrs:{id:"background"}}):i._e()]),t("v-main",{attrs:{id:"main"}},[t("h1",[i._v("Title for our Project")]),t("v-container",{staticStyle:{width:"40%"},attrs:{"align-center":""}},[t("v-row",i._l(4,(function(e){return t("v-col",{key:e,ref:"cards",refInFor:!0,attrs:{cols:"6"}},[t("router-link",{attrs:{to:"p"+e}},[t("v-card",{attrs:{hover:!0},on:{mouseover:function(n){return i.mouseover(e)},mouseleave:function(e){return i.mouseleave()}}},[t("v-card-text",[i._v(" "+i._s(i.headerTitles[e-1])+" ")]),t("v-img",{attrs:{src:n("b5a1")("./"+i.headerTitles[e-1]+".jpg"),"aspect-ratio":16/9,alt:""}})],1)],1)],1)})),1)],1)],1)],1)},p=[],h={data:function(){return{headerTitles:["Introduction","Image Restoration","Style Transfer","Motion Detection"],displayBackground:!1,backgroundStyle:{backgroundImage:""}}},methods:{darkModeTrigger:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark},mouseover:function(i){this.$data.backgroundStyle.backgroundImage="url("+encodeURI(n("b5a1")("./".concat(this.$data.headerTitles[i-1],".jpg")))+")",this.$data.displayBackground=!0},mouseleave:function(){this.$data.displayBackground=!1}},mounted:function(){}},g=h,f=(n("89f1"),Object(d["a"])(g,m,p,!1,null,null,null)),y=f.exports,v=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("Header"),n("v-main",[n("v-container",[n("div",{staticClass:"text-start"},[n("h1",[i._v("Titile for our Page 1")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("div",{staticStyle:{position:"relative",padding:"30% 45%"}},[n("iframe",{staticStyle:{position:"absolute",width:"100%",height:"100%",left:"0",top:"0"},attrs:{src:"//player.bilibili.com/player.html?aid=63317234&bvid=BV174411Q7ct&cid=109958403&page=1&high_quality=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}})])])])],1)],1)},_=[],b=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("v-toolbar",{attrs:{"max-height":"64px"}},[n("v-toolbar-title",[n("v-btn",{attrs:{icon:""}},[n("router-link",{attrs:{to:"/"}},[n("v-icon",[i._v("mdi-home")])],1)],1)],1),n("v-toolbar-items",i._l(i.headerTitles,(function(e){return n("v-btn",{key:e,attrs:{text:""}},[n("router-link",{attrs:{to:"p"+(i.headerTitles.indexOf(e)+1)}},[i._v(i._s(e))])],1)})),1),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("router-link",{attrs:{to:"about"}},[n("v-icon",[i._v("mdi-information")])],1)],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",{on:{click:i.darkModeTrigger}},[i._v("mdi-theme-light-dark")])],1)],1)},S=[],M={data:function(){return{headerTitles:["Introduction","Image restoration","Style Transfer","Motion detection"]}},methods:{darkModeTrigger:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},I=M,A=Object(d["a"])(I,b,S,!1,null,null,null),P=A.exports,w={data:function(){return{headerTitles:["Page1","Page2","Page3","Page4"]}},methods:{test:function(){}},components:{Header:P},mounted:function(){}},N=w,L=Object(d["a"])(N,v,_,!1,null,null,null),z=L.exports,q=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("Header"),n("v-main",[n("v-container",[n("div",{staticClass:"text-start"},[n("h1",[i._v("Titile for our Page 2")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")])])])],1)],1)},O=[],T={data:function(){return{headerTitles:["Page1","Page2","Page3","Page4"]}},methods:{test:function(){}},components:{Header:P},mounted:function(){}},k=T,R=Object(d["a"])(k,q,O,!1,null,null,null),x=R.exports,C=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("Header"),n("v-main",[n("v-container",[n("div",{staticClass:"text-start"},[n("h1",[i._v("Titile for our Page 3")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")])])])],1)],1)},j=[],E={data:function(){return{headerTitles:["Page1","Page2","Page3","Page4"]}},methods:{test:function(){}},components:{Header:P},mounted:function(){}},D=E,W=Object(d["a"])(D,C,j,!1,null,null,null),B=W.exports,H=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("Header"),n("v-main",[n("v-container",[n("div",{staticClass:"text-start"},[n("h1",[i._v("Titile for our Page 4")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("div",[n("markdown-it-vue",{attrs:{content:i.markdown}})],1)])])],1)],1)},$=[],U=n("87a8"),G=n.n(U),F=n("48cd"),Z=n.n(F),J=(n("f417"),{data:function(){return{headerTitles:["Page1","Page2","Page3","Page4"],markdown:G.a}},methods:{test:function(){}},components:{Header:P,MarkdownItVue:Z.a},mounted:function(){}}),K=J,V=Object(d["a"])(K,H,$,!1,null,null,null),Q=V.exports,X=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("Header"),n("v-main",[n("v-container",[n("div",{staticClass:"text-start"},[n("h1",[i._v("Titile for our About")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")]),n("p",[i._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")])])])],1)],1)},Y=[],ii={data:function(){return{headerTitles:["Page1","Page2","Page3","Page4"]}},methods:{test:function(){}},components:{Header:P},mounted:function(){}},ei=ii,ni=Object(d["a"])(ei,X,Y,!1,null,null,null),ti=ni.exports,ri=[{path:"/",component:y},{path:"/home",name:"home",component:y},{path:"/p1",name:"page1",component:z},{path:"/p2",name:"page2",component:x},{path:"/p3",name:"page3",component:B},{path:"/p4",name:"page4",component:Q},{path:"/about",name:"about",component:ti}],si=ri,oi=n("ce5b"),ai=n.n(oi);n("bf40"),n("5363");t["default"].use(ai.a);var li=new ai.a({icons:{iconfont:"mdi"}});t["default"].config.productionTip=!1,t["default"].use(r["a"]),t["default"].use(li);var di=new r["a"]({mode:"history",routes:si});new t["default"]({router:di,vuetify:li,render:function(i){return i(c)}}).$mount("#app")},"6d61d":function(i,e,n){i.exports=n.p+"img/Introduction.2cc1ad35.jpg"},"85ec":function(i,e,n){},"87a8":function(i,e){i.exports='# CSC4005 Distributed and Parallel Computing\n\n### Project 1 Parallel Odd-Even Transposition Sort\n\n#### Zeng Lewei (117010366) 2019-10-06\n\n\n\n##### Introduction\n\nIn this project, a parallel odd-even transposition sort is implemented with MPI. A ordinary odd-even transposition sort is performed as follow:\n\n- Compare the odd element with next even element in odd iteration, or the even element with next odd element in even iteration respectively. Swap the elements if the previous one is larger.\n\n- Repeat the operation until the numbers are sorted.\n\nIn the parallel version, it works as follow:\n\n(Initially, m numbers are distributed to n processes, respectively.)\n$$\na\\cdot c = \\gamma\n$$\n\n\n- Divide the array into subarrays, and each process do the first step of ordinary odd-even transposition sort.\n- If the current process rank is P, and there some elements that are left over\n  for comparison in step 1, compare the boundary elements with process with\n  rank P-1 and P+1. If the posterior element is smaller, swaps them.\n- Repeat the operations until the number are sorted.\n\nThe parallel odd-even transposition sort will broaden the bandwidth of sort algorithm, but will bring extra communication time between processes. We will see both effect of them in the report.\n\n\n\n##### Design\n\nFirst, the design for sequential version of odd-even transposition sort is simple.\n\nThe thought is basically following the principle of odd-even transposition sort, which repeating the odd iteration and even iteration, and export the sorted array when after an iteration, the order of all the elements in the array do not change.\n\n```c++\nvoid oddEvenSort(int* array, int arraySize, int oddEvenSign, int &swapSign) {\n    swapSign = 0;\n    for (int i = oddEvenSign; i < arraySize-1; i += 2) {\n        if (array[i] > array[i+1]) {\n            std::swap(array[i], array[i+1]);\n            swapSign = 1;\n        }\n    }\n}\n\nint main(int argv, char* argc[]) {\n    const int mainArraySize = 15000;\n    const int randomRange = 20000;\n    int mainArray[mainArraySize];\n    for (int i = 0; i < mainArraySize; i++) {\n        mainArray[i] = random(randomRange);\n        std::cout << mainArray[i] << " " ;\n    }\n    int sortSign = 0; // 0 = odd, 1 = even\n    int changeSign = 1; // 0 = array no changed, 1 = array changed\n    while (changeSign) {\n        changeSign = 0;\n        if (sortSign == 0) {\n            oddEvenSort(mainArray, mainArraySize, 0, changeSign);\n        }\n        else {\n            oddEvenSort(mainArray, mainArraySize, 1, changeSign);\n        }\n        sortSign = !sortSign;\n    }\n    for (int i = 0; i < mainArraySize; i++) {\n        std::cout << mainArray[i] << " " ;\n    }\n    std::cout << "\\n";\n}\n```\n\nThen, base on the same principle, here is the design of parallel odd-even transposition sort. \n\n1. Divide the main array into several subarrays. The last process would receive more numbers if m does not divide n, and other processes would receive numbers in number m/n. Using `MPI_Send()` to send subarray to all process.\n\n   ```c++\n   const int mainArraySize = 20;\n   const int randomRange = 20000;\n   double start_time, end_time;\n   \n   // initialize MPI processes\n   int rank, size;\n   MPI_Init(&argv, &argc);\n   MPI_Comm_rank(MPI_COMM_WORLD, &rank);\n   MPI_Comm_size(MPI_COMM_WORLD, &size);\n   \n   // master process create main array\n   int mainArray[mainArraySize];\n   if (rank == 0) {\n       for (int i = 0; i < mainArraySize; i++) {\n           mainArray[i] = random(randomRange);\n       }\n       start_time = MPI_Wtime();\n       for (int i = 1; i < size; i++) {\n           MPI_Send(mainArray, mainArraySize, MPI_INT, i, 0, MPI_COMM_WORLD);\n       }\n   }\n   else {\n       MPI_Recv(mainArray, mainArraySize, MPI_INT, 0, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);\n   }\n   \n   // create subarray of each process\n   int subArraySize = mainArraySize / size + 1;\n   int subArray[subArraySize];\n   int indexHead = rank * (subArraySize - 1);\n   if (rank != size -1) {\n       for (int i = 0; i < subArraySize; i++) {\n           subArray[i] = mainArray[i+indexHead];\n       }\n   }\n   else {\n       subArraySize = mainArraySize - (size - 1) * (subArraySize - 1);\n       for (int i = 0; i < subArraySize; i++) {\n           subArray[i] = mainArray[i+indexHead];\n       }\n   }\n   ```\n\n   \n\n2. implement sequential odd-even transposition sort on all the processes. Here, there are two methods to implement the sort. The first method is treating all the subarrays as several individual arrays, and the second method is still treating subarrays as a part of main arrays. The difference between these two method is, for the first method, all the process will do odd iteration at the same time, and then do even iteration at the same time. But for the second method, some do odd iteration and some might do even iteration at the same time.\n\n   In this program, I choose the second method. The actual implementation of method 2 is making the actual size array equals to m/n+1. After the swap between different processes, the last element of subarray in process K always equals to the first element of subarray in process K+1. After each iteration of all processes, the root process will use `MPI_Allreduce()` to determine that the whole array is sorted or not, and give back a signal to tell other processes to continue the while loop or not.\n\n```c++\nvoid oddEvenSort(int* array, int arraySize, int oddEvenSign, int &swapSign, int &headChangeSign) {\n    swapSign = 0;\n    for (int i = oddEvenSign; i < arraySize-1; i += 2) {\n        if (array[i] > array[i+1]) {\n            std::swap(array[i], array[i+1]);\n            swapSign = 1;\n            if (i == 0) {\n                headChangeSign = 1;\n            }\n        }\n    }\n}\n\n...\n    \n// sorting\n    int sortSign = 0; // 0 = odd, 1 = even\n    int swapSign = 1; // 0 = array no changed, 1 = array changed\n    int swapBuf = 0; // buffer for swap signal\n    int recieveBuf; // buffer for swapped element from previous process; \n    int headChangeSign; // signal that indicate the head on this process was changed or not\n    while (swapSign) {\n        swapSign = 0;\n        headChangeSign = 0;\n        if ((sortSign == 0 && (indexHead % 2 == 0)) || (sortSign == 1 && (indexHead % 2 != 0))) {\n            oddEvenSort(subArray, subArraySize, 0, swapSign, headChangeSign);\n        }\n        else {\n            oddEvenSort(subArray, subArraySize, 1, swapSign, headChangeSign);\n        }\n        if (rank != size - 1) {\n            MPI_Send(&subArray[subArraySize-1], 1, MPI_INT, rank+1, 1, MPI_COMM_WORLD);\n        }\n        if (rank != 0) {\n            MPI_Recv(&recieveBuf, 1, MPI_INT, rank-1, 1, MPI_COMM_WORLD, MPI_STATUS_IGNORE);\n            if ((recieveBuf != subArray[0]) && headChangeSign != 1) {\n\t\t        subArray[0] = recieveBuf;\n                swapSign = 1;\n            }\n            MPI_Send(&subArray[0], 1, MPI_INT, rank-1, 2, MPI_COMM_WORLD);\n        }\n        if (rank != size - 1) {\n            MPI_Recv(&recieveBuf, 1, MPI_INT, rank+1, 2, MPI_COMM_WORLD, MPI_STATUS_IGNORE);\n            subArray[subArraySize-1] = recieveBuf;\n        }\n        MPI_Allreduce(&swapSign, &swapBuf, 1, MPI_INT, MPI_LOR, MPI_COMM_WORLD);\n        swapSign = swapBuf;\n        sortSign = !sortSign;\n    }\n```\n\n3. After the whole array is sorted, collected all the subarrays into root process.\n\n   ```c++\n   if (rank != 0) {\n           MPI_Send(subArray, subArraySize, MPI_INT, 0, 3, MPI_COMM_WORLD);\n       }\n       else {\n           int subBuf[mainArraySize - (size - 1) * (subArraySize - 1)];\n           for (int i = 0; i < subArraySize-1; i++) {\n               mainArray[i] = subArray[i];\n           }\n           for (int i = 1; i < size-1; i++) {\n               MPI_Recv(subArray, subArraySize, MPI_INT, i, 3, MPI_COMM_WORLD, MPI_STATUS_IGNORE);\n               for (int j = 0; j < subArraySize-1; j++) {\n                   mainArray[j+i*(subArraySize - 1)] = subArray[j];\n               }\n           }\n           MPI_Recv(subBuf, mainArraySize - (size - 1) * (subArraySize - 1), MPI_INT, size-1, 3, MPI_COMM_WORLD, MPI_STATUS_IGNORE);\n           for (int j = 0; j < mainArraySize - (size - 1) * (subArraySize - 1); j++) {\n               mainArray[j+(size-1)*(subArraySize - 1)] = subBuf[j];\n           }\n           end_time = MPI_Wtime();\n           for (int i = 0; i < mainArraySize; i++) {\n               std::cout << mainArray[i] << " " ;//for test\n           }\n           std::cout << "\\n";//for test\n   \n           // auther declaration\n           printf("Name: Zeng Lewei\\n");\n           printf("student ID: 117010366\\n");\n           printf("Assignment 1: Parallel Odd-Even Transposition Sort\\n");\n           printf("Execute time: %.2lf seconds\\n", end_time - start_time);\n       }\n   \n       MPI_Finalize();\n   \n   \treturn 0;\n   }   \n   ```\n\n##### Result\n\n##### Performance\n\nThe program runs on Ubuntu 18.04.1 LTS, implemented on virtual machine on Windows 10. The computer is equipped with an AMD Ryzen 5 2600X CPU, which is a 6 core 12 thread processor. I adjusted the main index size to 15000, random number range to 0 ~ 50000, using different parameters setting from -n 2 to -n 10. Here is the result. \n\n| time(s) | sequential | -n 2 | -n 3 | -n 4 | -n 5 | -n 6 | -n 7   | -n 8   | -n 9   | -n 10  |\n| ------- | ---------- | ---- | ---- | ---- | ---- | ---- | ------ | ------ | ------ | ------ |\n| 1st     | 0.92       | 0.5  | 0.38 | 0.33 | 0.33 | 0.3  | 254.02 | 348.75 | 448.32 | 507.89 |\n| 2nd     | 0.93       | 0.5  | 0.38 | 0.32 | 0.33 | 0.29 | 248.37 | 342.62 | 441.28 | 507.33 |\n| 3rd     | 0.93       | 0.51 | 0.45 | 0.32 | 0.3  | 0.3  | 248.43 | 343.11 | 441.33 | 506.92 |\n| Avg     | 0.927      | 0.50 | 0.40 | 0.32 | 0.32 | 0.3  | 250.27 | 344.83 | 443.64 | 507.38 |\n\nIn fact, the original thought is to test from -n 2 to -n 16. However, a bottleneck occurs at -n 7. When using   -n 10, the running time is more than 500 seconds, so I think it is meaningless to test the remain options.\n\nThe reason for the phenomenon is when the process number is larger than the number of core of processor, at least one core must handle more than one process. And in reality, this parallel sort method has the same time complexity (O(n^2)) as sequential version. When a core handle more than one process, it must execute them sequentially, and for other processes, they must wait for the processes haven\'t be executed. This resulting a worse performance.\n\nOf course, when using less than or equal to 6 processes, the performance for parallel sorting is better than sequential sorting. During each round of sorting, each process must block and wait for swapping element with another process, and it takes communication time. But the two method has the same time complexity, and for each processes in parallel sorting, the number of elements n is much smaller than the sequential one. The time complexity for communication between process is O(n), which is better than O(n^2), and this is the reason for the result.\n\n##### Conclusion\n\nIn this experiment, the parallel sort is successfully implemented using MPI. The performance of parallel sort is much better than sequential sort when the data is large and the number of processes is more than 2 and less than the number of core of processor.\n\n##### Experience\n\nIt is important to know the MPI functions, including the block mode of send and receive messages and the work principle of collective communications like `MPI_Reduce()` and `MPI_Allreduce()`, but the most important is to think with parallel thought. With MPI, only one part can implement parallel computing, and I can\'t using MPI functions after `MPI_Finalize()`. Therefore, I have to consider about what things have to be done in the parallel part. In the other hand, to consider about communication between processes is difficult. I have to consider about what messages must be sent and what are not necessary, which will help saving execution time.\n\n##### Source Code\n\n```c++\n#include "mpi.h"\n#include <iostream>\n#include <cstdio>\n#include <cstdlib>\n#include <unistd.h>\n#define random(x) (rand()%x) \n\nvoid oddEvenSort(int* array, int arraySize, int oddEvenSign, int &swapSign, int &headChangeSign) {\n    swapSign = 0;\n    for (int i = oddEvenSign; i < arraySize-1; i += 2) {\n        if (array[i] > array[i+1]) {\n            std::swap(array[i], array[i+1]);\n            swapSign = 1;\n            if (i == 0) {\n                headChangeSign = 1;\n            }\n        }\n    }\n}\n\nint main(int argv, char* argc[]) {\n    const int mainArraySize = 20;\n    const int randomRange = 20000;\n\tdouble start_time, end_time;\n    // initialize MPI processes\n    int rank, size;\n    MPI_Init(&argv, &argc);\n    MPI_Comm_rank(MPI_COMM_WORLD, &rank);\n\tMPI_Comm_size(MPI_COMM_WORLD, &size);\n    // master process create main array\n    int mainArray[mainArraySize];\n    if (rank == 0) {\n        for (int i = 0; i < mainArraySize; i++) {\n            mainArray[i] = random(randomRange);\n        }\n        start_time = MPI_Wtime();\n        for (int i = 1; i < size; i++) {\n            MPI_Send(mainArray, mainArraySize, MPI_INT, i, 0, MPI_COMM_WORLD);\n        }\n    }\n    else {\n        MPI_Recv(mainArray, mainArraySize, MPI_INT, 0, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);\n    }\n\n    // create subarray of each process\n    int subArraySize = mainArraySize / size + 1;\n    int subArray[subArraySize];\n    int indexHead = rank * (subArraySize - 1);\n    if (rank != size -1) {\n        for (int i = 0; i < subArraySize; i++) {\n            subArray[i] = mainArray[i+indexHead];\n        }\n    }\n    else {\n        subArraySize = mainArraySize - (size - 1) * (subArraySize - 1);\n        for (int i = 0; i < subArraySize; i++) {\n            subArray[i] = mainArray[i+indexHead];\n        }\n    }\n\n    // sorting\n    int sortSign = 0; // 0 = odd, 1 = even\n    int swapSign = 1; // 0 = array no changed, 1 = array changed\n    int swapBuf = 0; // buffer for swap signal\n    int recieveBuf; // buffer for swapped element from previous process; \n    int headChangeSign; // signal that indicate the head on this process was changed or not\n    while (swapSign) {\n        swapSign = 0;\n        headChangeSign = 0;\n        if ((sortSign == 0 && (indexHead % 2 == 0)) || (sortSign == 1 && (indexHead % 2 != 0))) {\n            oddEvenSort(subArray, subArraySize, 0, swapSign, headChangeSign);\n        }\n        else {\n            oddEvenSort(subArray, subArraySize, 1, swapSign, headChangeSign);\n        }\n        if (rank != size - 1) {\n            MPI_Send(&subArray[subArraySize-1], 1, MPI_INT, rank+1, 1, MPI_COMM_WORLD);\n        }\n        if (rank != 0) {\n            MPI_Recv(&recieveBuf, 1, MPI_INT, rank-1, 1, MPI_COMM_WORLD, MPI_STATUS_IGNORE);\n            if ((recieveBuf != subArray[0]) && headChangeSign != 1) {\n\t\t        subArray[0] = recieveBuf;\n                swapSign = 1;\n            }\n            MPI_Send(&subArray[0], 1, MPI_INT, rank-1, 2, MPI_COMM_WORLD);\n        }\n        if (rank != size - 1) {\n            MPI_Recv(&recieveBuf, 1, MPI_INT, rank+1, 2, MPI_COMM_WORLD, MPI_STATUS_IGNORE);\n            subArray[subArraySize-1] = recieveBuf;\n        }\n        MPI_Allreduce(&swapSign, &swapBuf, 1, MPI_INT, MPI_LOR, MPI_COMM_WORLD);\n        swapSign = swapBuf;\n        sortSign = !sortSign;\n    }\n    MPI_Barrier(MPI_COMM_WORLD);\n\n    if (rank != 0) {\n        MPI_Send(subArray, subArraySize, MPI_INT, 0, 3, MPI_COMM_WORLD);\n    }\n    else {\n        int subBuf[mainArraySize - (size - 1) * (subArraySize - 1)];\n        for (int i = 0; i < subArraySize-1; i++) {\n            mainArray[i] = subArray[i];\n        }\n        for (int i = 1; i < size-1; i++) {\n            MPI_Recv(subArray, subArraySize, MPI_INT, i, 3, MPI_COMM_WORLD, MPI_STATUS_IGNORE);\n            for (int j = 0; j < subArraySize-1; j++) {\n                mainArray[j+i*(subArraySize - 1)] = subArray[j];\n            }\n        }\n        MPI_Recv(subBuf, mainArraySize - (size - 1) * (subArraySize - 1), MPI_INT, size-1, 3, MPI_COMM_WORLD, MPI_STATUS_IGNORE);\n        for (int j = 0; j < mainArraySize - (size - 1) * (subArraySize - 1); j++) {\n            mainArray[j+(size-1)*(subArraySize - 1)] = subBuf[j];\n        }\n        end_time = MPI_Wtime();\n        for (int i = 0; i < mainArraySize; i++) {\n            std::cout << mainArray[i] << " " ;\n        }\n        std::cout << "\\n";\n\n        // auther declaration\n        printf("Name: Zeng Lewei\\n");\n        printf("student ID: 117010366\\n");\n        printf("Assignment 1: Parallel Odd-Even Transposition Sort\\n");\n        printf("Execute time: %.2lf seconds\\n", end_time - start_time);\n    }\n\n    MPI_Finalize();\n\n\treturn 0;\n}   \n```\n\n'},"89f1":function(i,e,n){"use strict";n("fca2")},a17d:function(i,e,n){i.exports=n.p+"img/Motion Detection.4c19dcd4.jpg"},b5a1:function(i,e,n){var t={"./Image Restoration.jpg":"b713","./Introduction.jpg":"6d61d","./Motion Detection.jpg":"a17d","./Style Transfer.jpg":"1fc3"};function r(i){var e=s(i);return n(e)}function s(i){if(!n.o(t,i)){var e=new Error("Cannot find module '"+i+"'");throw e.code="MODULE_NOT_FOUND",e}return t[i]}r.keys=function(){return Object.keys(t)},r.resolve=s,i.exports=r,r.id="b5a1"},b713:function(i,e,n){i.exports=n.p+"img/Image Restoration.00483c7b.jpg"},fca2:function(i,e,n){}});
//# sourceMappingURL=app.b8973a9a.js.map