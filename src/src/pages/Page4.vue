<template>
  <v-app id="inspire">
    <Header @enable-sidebar="isOpeningSidebar=true"/>

    <v-main>
      <div ref="top"></div>
      <v-fab-transition>
      <v-btn
        fab
        fixed
        bottom
        left
        class="v-btn--example"
        @click="playVoice"
      >
        <v-icon>{{voiceIcon}}</v-icon>
      </v-btn>
      </v-fab-transition>
      <v-fab-transition>
      <v-btn
        fab
        fixed
        bottom
        right
        class="v-btn--example"
        @click="backToTop"
        v-if = "showTop"
      >
        <v-icon>mdi-arrow-up-bold</v-icon>
      </v-btn>
      </v-fab-transition>
      <v-container>
        <!-- Sidebar drawer-->
        <v-navigation-drawer
          v-model="isOpeningSidebar"
          absolute
          right
          temporary
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Choose accent</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list>
            <v-list-item
              v-for="n in accents.length"
              :key="n"
              @click="handleAccent(n)"
            >
            {{accentNames[n-1]}}
            </v-list-item>
          </v-list>

        </v-navigation-drawer>

        <div class="text-start">
          <h1>Moving object detection</h1>
          <p>Moving object detection is a technique used in computer vision and image processing. Multiple consecutive frames from a video are compared by various methods to determine if any moving object is detected.</p>
          <p>Moving objects detection has been used for wide range of applications like video surveillance, activity recognition, road condition monitoring, airport safety, monitoring of protection along marine border, etc.</p>
          <ol>
            <li><a href="#Definition">Definition</a></li>
            <li><a href="#Object">Object Detection</a></li>
            <li><a href="#Video">Video Tracking</a></li>
            <li><a href="#Motion">Motion Estimation</a></li>
            <li><a href="#Methods">Methods of Moving Objects Detection</a></li>
          </ol>
          <h2 id="Definition">Definition</h2>
          <p>Moving object detection is to recognize the physical movement of an object in a given place or region. By acting segmentation among moving objects and stationary area or region, the moving objects motion could be tracked and thus could be analyzed later. To achieve this, consider a video is a structure built upon single frames, moving object detection is to find the foreground moving target(s), either in each video frame or only when the moving target show the first appearance in the video.</p>
          <h2 id="Object">Object Detection</h2>
          <img src="https://www.upgrad.com/blog/wp-content/uploads/2020/07/1024px-Detected-with-YOLO-Schreibtisch-mit-Objekten-768x494.jpg">
          <p class="annotation">Objects detected with OpenCV's Deep Neural Network module (DNN) by using a YOLOv3 model trained on COCO dataset capable to detect objects of 80 common classes.</p>
          <p>Object detection is a computer technology related to computer vision and image processing that deals with detecting instances of semantic objects of a certain class (such as humans, buildings, or cars) in digital images and videos. Well-researched domains of object detection include face detection and pedestrian detection. Object detection has applications in many areas of computer vision, including image retrieval and video surveillance.</p>
          <h3>Uses</h3>
          <p>It is widely used in computer vision tasks such as image annotation, activity recognition, face detection, face recognition, video object co-segmentation. It is also used in tracking objects, for example tracking a ball during a football match, tracking movement of a cricket bat, or tracking a person in a video.</p>
          <h3>Concept</h3>
          <p>Every object class has its own special features that helps in classifying the class – for example all circles are round. Object class detection uses these special features. For example, when looking for circles, objects that are at a particular distance from a point (i.e. the center) are sought. Similarly, when looking for squares, objects that are perpendicular at corners and have equal side lengths are needed. A similar approach is used for face identification where eyes, nose, and lips can be found and features like skin color and distance between eyes can be found.</p>
          <h3>Methods</h3>
          <img src="https://pic2.zhimg.com/v2-7582d95700db11870d9850a6b4abff8d_r.jpg">
          <p class="annotation">Comparison of speed and accuracy of various detectors on Microsoft COCO testdev dataset http://mscoco.org (All values are found in https://arxiv.org articles by the authors of these algorithms)</p>
          <p>Methods for object detection generally fall into either machine learning-based approaches or deep learning-based approaches. For Machine Learning approaches, it becomes necessary to first define features using one of the methods below, then using a technique such as support vector machine (SVM) to do the classification. On the other hand, deep learning techniques are able to do end-to-end object detection without specifically defining features, and are typically based on convolutional neural networks (CNN).</p>
          <ul>
            <li>Machine learning approaches:</li>
            <ul>
              <li>Viola–Jones object detection framework based on Haar features</li>
              <li>Scale-invariant feature transform (SIFT)</li>
              <li>Histogram of oriented gradients (HOG) features</li>
            </ul>
            <li>Deep learning approaches:</li>
            <ul>
              <li>Region Proposals (R-CNN, Fast R-CNN, Faster R-CNN, cascade R-CNN.)</li>
              <li>Single Shot MultiBox Detector (SSD) </li>
              <li>You Only Look Once (YOLO) </li>
              <li>Single-Shot Refinement Neural Network for Object Detection (RefineDet) </li>
              <li>Retina-Net</li>
              <li>Deformable convolutional networks</li>
            </ul>
          </ul>
          <h2 id="Video">Video Tracking</h2>
          <p>Video tracking is the process of locating a moving object (or multiple objects) over time using a camera. It has a variety of uses, some of which are: human-computer interaction, security and surveillance, video communication and compression, augmented reality, traffic control, medical imaging and video editing. Video tracking can be a time-consuming process due to the amount of data that is contained in video. Adding further to the complexity is the possible need to use object recognition techniques for tracking, a challenging problem in its own right.</p>
          <h3>Objective</h3>
          <p>The objective of video tracking is to associate target objects in consecutive video frames. The association can be especially difficult when the objects are moving fast relative to the frame rate. Another situation that increases the complexity of the problem is when the tracked object changes orientation over time. For these situations video tracking systems usually employ a motion model which describes how the image of the target might change for different possible motions of the object.</p>
          <p>Examples of simple motion models are:</p>
          <ul>
            <li>When tracking planar objects, the motion model is a 2D transformation (affine transformation or homography) of an image of the object (e.g. the initial frame).</li>
            <li>When the target is a rigid 3D object, the motion model defines its aspect depending on its 3D position and orientation.</li>
            <li>For video compression, key frames are divided into macroblocks. The motion model is a disruption of a key frame, where each macroblock is translated by a motion vector given by the motion parameters.</li>
            <li>The image of deformable objects can be covered with a mesh, the motion of the object is defined by the position of the nodes of the mesh.</li>
          </ul>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/2uFwlaqz4vQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h3>Algorithms</h3>
          <p>To perform video tracking an algorithm analyzes sequential video frames and outputs the movement of targets between the frames. There are a variety of algorithms, each having strengths and weaknesses. Considering the intended use is important when choosing which algorithm to use. There are two major components of a visual tracking system: target representation and localization, as well as filtering and data association.</p>
          <p>Target representation and localization is mostly a bottom-up process. These methods give a variety of tools for identifying the moving object. Locating and tracking the target object successfully is dependent on the algorithm. For example, using blob tracking is useful for identifying human movement because a person's profile changes dynamically. Typically the computational complexity for these algorithms is low. The following are some common target representation and localization algorithms:</p>
          <ul>
            <li>Kernel-based tracking (mean-shift tracking): an iterative localization procedure based on the maximization of a similarity measure (Bhattacharyya coefficient).</li>
            <li>Contour tracking: detection of object boundary (e.g. active contours or Condensation algorithm). Contour tracking methods iteratively evolve an initial contour initialized from the previous frame to its new position in the current frame. This approach to contour tracking directly evolves the contour by minimizing the contour energy using gradient descent.</li>
          </ul>
          <p>Filtering and data association is mostly a top-down process, which involves incorporating prior information about the scene or object, dealing with object dynamics, and evaluation of different hypotheses. These methods allow the tracking of complex objects along with more complex object interaction like tracking objects moving behind obstructions. Additionally the complexity is increased if the video tracker (also named TV tracker or target tracker) is not mounted on rigid foundation (on-shore) but on a moving ship (off-shore), where typically an inertial measurement system is used to pre-stabilize the video tracker to reduce the required dynamics and bandwidth of the camera system. The computational complexity for these algorithms is usually much higher. The following are some common filtering algorithms:</p>
          <ul>
            <li>Kalman filter: an optimal recursive Bayesian filter for linear functions subjected to Gaussian noise. It is an algorithm that uses a series of measurements observed over time, containing noise (random variations) and other inaccuracies, and produces estimates of unknown variables that tend to be more precise than those based on a single measurement alone.</li>
            <li>Particle filter: useful for sampling the underlying state-space distribution of nonlinear and non-Gaussian processes.</li>
          </ul>
          <h2 id="Motion">Motion estimation</h2>
          <p>Motion estimation is the process of determining motion vectors that describe the transformation from one 2D image to another; usually from adjacent frames in a video sequence. It is an ill-posed problem as the motion is in three dimensions but the images are a projection of the 3D scene onto a 2D plane. The motion vectors may relate to the whole image (global motion estimation) or specific parts, such as rectangular blocks, arbitrary shaped patches or even per pixel. The motion vectors may be represented by a translational model or many other models that can approximate the motion of a real video camera, such as rotation and translation in all three dimensions and zoom.</p>
          <div style="position: relative; padding: 30% 45%;">
            <iframe src="http://demo.ipol.im/demo/26/" height="100%" width="100%" style="position: absolute; left: 0; top: 0;"></iframe>
          </div>
          <p class="annotation">A test demo page for Optical Flow Estimation.</p>
          <h3>Related terms</h3>
          <p>More often than not, the term motion estimation and the term optical flow are used interchangeably. It is also related in concept to image registration and stereo correspondence. In fact all of these terms refer to the process of finding corresponding points between two images or video frames. The points that correspond to each other in two views (images or frames) of a real scene or object are "usually" the same point in that scene or on that object. Before we do motion estimation, we must define our measurement of correspondence, i.e., the matching metric, which is a measurement of how similar two image points are. There is no right or wrong here; the choice of matching metric is usually related to what the final estimated motion is used for as well as the optimisation strategy in the estimation process.</p>
          <h3>Algorithms</h3>
          <p>The methods for finding motion vectors can be categorised into pixel based methods ("direct") and feature based methods ("indirect"). A famous debate resulted in two papers from the opposing factions being produced to try to establish a conclusion.</p>
          <h4>Direct methods</h4>
          <ul>
            <li>Block-matching algorithm</li>
            <li>Phase correlation and frequency domain methods</li>
            <li>Pixel recursive algorithms</li>
            <li>Optical flow</li>
          </ul>
          <img src="https://miro.medium.com/max/2400/1*dp-UtdZaOIgPDKgmFEAfyg.png" width="50%" height="50%">
          <p class="annotation">Motion vectors that result from a movement into the z-plane of the image, combined with a lateral movement to the lower-right. This is a visualization of the motion estimation performed in order to compress an MPEG movie.</p>
          <h4>Indirect methods</h4>
          <p>Indirect methods use features, such as corner detection, and match corresponding features between frames, usually with a statistical function applied over a local or global area. The purpose of the statistical function is to remove matches that do not correspond to the actual motion.</p>
          <p>Statistical functions that have been successfully used include RANSAC.</p>
          <h4>Additional note on the categorization</h4>
          <p>It can be argued that almost all methods require some kind of definition of the matching criteria. The difference is only whether you summarise over a local image region first and then compare the summarisation (such as feature based methods), or you compare each pixel first (such as squaring the difference) and then summarise over a local image region (block base motion and filter based motion). An emerging type of matching criteria summarises a local image region first for every pixel location (through some feature transform such as Laplacian transform), compares each summarised pixel and summarises over a local image region again. Some matching criteria have the ability to exclude points that do not actually correspond to each other albeit producing a good matching score, others do not have this ability, but they are still matching criteria.</p>
          <h3>Applications</h3>
          <h4>Video coding</h4>
          <p>Applying the motion vectors to an image to synthesize the transformation to the next image is called motion compensation. It is most easily applied to discrete cosine transform (DCT) based video coding standards, because the coding is performed in blocks.</p>
          <p>As a way of exploiting temporal redundancy, motion estimation and compensation are key parts of video compression. Almost all video coding standards use block-based motion estimation and compensation such as the MPEG series including the most recent HEVC.</p>
          <h4>3D reconstruction</h4>
          <p>In simultaneous localization and mapping, a 3D model of a scene is reconstructed using images from a moving camera.</p>
          <h2 id="Methods">Methods of Moving Objects Detection</h2>
          <h3>Traditional Methods</h3>
          <p>Among all the traditional moving object detection methods, we could categorize them into four major approaches: Background subtraction, Frame differencing, Temporal Differencing, and Optical Flow.</p>
          <h4>Frame Differencing</h4>
          <p>Instead of using traditional approach, to use image subtraction operator by subtracting second and images afterwards, frame differencing method make comparisons between two successive frames to detect moving targets.</p>
          <h4>Temporal Differencing</h4>
          <p>Temporal differencing method identifies the moving object by applying pixel-wise difference method with two or three consecutive frames.</p>
        </div>
      </v-container>
      
    </v-main>
  </v-app>
</template>

<script>
  import Header from '@/components/Header'
  const synth = window.speechSynthesis;
  const msg = new SpeechSynthesisUtterance();
  import text from '!raw-loader!../assets/4.txt';

  export default {
    data() {
      return {
        headerTitles: [
          'Page1',
          'Page2',
          'Page3',
          'Page4'
        ],
        accents: [
          'en-GB',
          'en-US',
          'en-CA',
          'en-IN',
          'en-AU',
          'en-NZ',
          'en-ZA',
        ],
        accentNames: [
          'British',
          'American',
          'Canadian',
          'Indian',
          'Australian',
          'New Zealand',
          'South African',
        ],
        isReading: false,
        isOpeningSidebar: false,
        msgConfig: {
          text: text,
          lang: "en-GB",
          volume: 1,
          rate: 1,
          pitch: 1, 
        },
        voiceIcon: "mdi-account-tie-voice",
        showTop: false
      }
    },
    methods: {
      playVoice() {
        if (this.$data.isReading) {
          this.$data.voiceIcon = "mdi-account-tie-voice"
          this.handleStop();
        }
        else {
          this.$data.voiceIcon = "mdi-account-tie-voice-off"
          this.handleSpeak();
        }
        this.$data.isReading = !this.$data.isReading
      },
      handleAccent(n) {
        this.$data.msgConfig.lang = this.$data.accents[n-1];
        this.$data.isOpeningSidebar = false;
      },
      handleSpeak() {
        let config = this.$data.msgConfig;
        msg.text = config.text;
        msg.lang = config.lang;
        msg.voice = config.voice;
        msg.volume = config.volume;
        msg.pitch = config.pitch;
        synth.speak(msg);
      },
      handleStop() {
        synth.cancel(msg);
      },
      scrollToTop() { 
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let browserHeight = window.outerHeight;
        if (scrollTop > browserHeight) {
          this.$data.showTop = true
        } else {
          this.$data.showTop = false
        }
      },
      backToTop() {
        this.$refs.top.scrollIntoView({behavior: "smooth"});
      }
    },
    components: {
      Header,
      // MarkdownItVue
    },
    mounted () {
      window.addEventListener('scroll', this.scrollToTop)
    }
  }
</script>

<style>
.v-btn--example {
  bottom: 0;
  margin: 0 0 16px 16px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.annotation{
  color:gray;
  font-size: 0.75rem
}
</style>