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
        <!--iframe src="https://xbeibeix.com/api/bilibili/biliplayer/?url=BV174411Q7ct" frameBorder=0 marginwidth=0 marginheight=0 height=100% width=100% ALLOWTRANSPARENCY="true"/-->
        <!--div style="position: relative; padding: 30% 45%;">
          <iframe src="//player.bilibili.com/player.html?aid=63317234&bvid=BV174411Q7ct&cid=109958403&page=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"> </iframe>
        </！div-->
          <h1>Introduction</h1>
          <p>Computer vision is an interdisciplinary field that deals with how computers can be made to gain high-level understanding from digital images or videos. From the perspective of engineering, it seeks to automate tasks that the human visual system can do. &quot;Computer vision is concerned with the automatic extraction, analysis and understanding of useful information from a single image or a sequence of images. It involves the development of a theoretical and algorithmic basis to achieve automatic visual understanding.&quot; As a scientific discipline, computer vision is concerned with the theory behind artificial systems that extract information from images. The image data can take many forms, such as video sequences, views from multiple cameras, or multi-dimensional data from a medical scanner. As a technological discipline, computer vision seeks to apply its theories and models for the construction of computer vision systems.</p>
          <p> </p>
          <p><img :src="require('../assets/images/ComputerVision.png')" referrerpolicy="no-referrer" alt="img"> </p>
          <p> </p>
          <h3>History:</h3>
          <p>In the late 1960s, computer vision began at universities which were pioneering artificial intelligence. It was meant to mimic the human visual system, as a stepping stone to endowing robots with intelligent behavior. In 1966, it was believed that this could be achieved through a summer project, by attaching a camera to a computer and having it &quot;describe what it saw&quot;.</p>
          <p> </p>
          <p>What distinguished computer vision from the prevalent field of digital image processing at that time was a desire to extract three-dimensional structure from images with the goal of achieving full scene understanding. Studies in the 1970s formed the early foundations for many of the computer vision algorithms that exist today, including extraction of edges from images, labeling of lines, non-polyhedral and polyhedral modeling, representation of objects as interconnections of smaller structures, optical flow, and motion estimation.</p>
          <p> </p>
          <p>By the 1990s, some of the previous research topics became more active than the others. Research in projective 3-D reconstructions led to better understanding of camera calibration. With the advent of optimization methods for camera calibration, it was realized that a lot of the ideas were already explored in bundle adjustment theory from the field of photogrammetry. This led to methods for sparse 3-D reconstructions of scenes from multiple images. Progress was made on the dense stereo correspondence problem and further multi-view stereo techniques. At the same time, variations of graph cut were used to solve image segmentation. This decade also marked the first time statistical learning techniques were used in practice to recognize faces in images. </p>
          <p>Toward the end of the 1990s, a significant change came about with the increased interaction between the fields of computer graphics and computer vision. This included image-based rendering, image morphing, view interpolation, panoramic image stitching and early light-field rendering.</p>
          <p> </p>
          <p>Recent work has seen the resurgence of feature-based methods, used in conjunction with machine learning techniques and complex optimization frameworks. The advancement of Deep Learning techniques has brought further life to the field of computer vision. The accuracy of deep learning algorithms on several benchmark computer vision data sets for tasks ranging from classification, segmentation and optical flow has surpassed prior methods.</p>
          <p> </p>
          <p> </p>
          <h3>Applications:</h3>
          <p>Applications range from tasks such as industrial machine vision systems which, say, inspect bottles speeding by on a production line, to research into artificial intelligence and computers or robots that can comprehend the world around them. The computer vision and machine vision fields have significant overlap. Computer vision covers the core technology of automated image analysis which is used in many fields. Machine vision usually refers to a process of combining automated image analysis with other methods and technologies to provide automated inspection and robot guidance in industrial applications. In many computer-vision applications, the computers are pre-programmed to solve a particular task, but methods based on learning are now becoming increasingly common. Examples of applications of computer vision include systems for:</p>
          <p> </p>
          <ul>
            <li>Learning 3D shapes has been a challenging task in computer vision. Recent advances in deep learning has enabled researchers to build models that are able to generate and reconstruct 3D shapes from single or multi-view depth maps or silhouettes seamlessly and efficiently</li>
            <li>Automatic inspection, e.g., in manufacturing applications;</li>
            <li>Assisting humans in identification tasks, e.g., a species identification system;</li>
            <li>Controlling processes, e.g., an industrial robot;</li>
            <li>Detecting events, e.g., for visual surveillance or people counting, e.g., in the restaurant industry;</li>
            <li>Interaction, e.g., as the input to a device for computer-human interaction;</li>
            <li>Modeling objects or environments, e.g., medical image analysis or topographical modeling;</li>
            <li>Navigation, e.g., by an autonomous vehicle or mobile robot; and</li>
            <li>Organizing information, e.g., for indexing databases of images and image sequences.</li>
          </ul>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Header from '@/components/Header'
  const synth = window.speechSynthesis;
  const msg = new SpeechSynthesisUtterance();
  import text from '!raw-loader!../assets/1.txt';

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
</style>