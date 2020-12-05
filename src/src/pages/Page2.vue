<template>
  <v-app id="inspire">
    <Header/>

    <v-main>
      <v-container>
      <div class="text-start">
      <h1>Image Inpainting</h1><br>

        1.<a href="#whatis">What is Image inpainting</a>  <br>
        2.<a href="#techniques">Techniques of Image Restoration</a>  <br>
        3.<a href="#tree">Image Inpainting Datasets</a>  <br>
        4.<a href="#example">an example of image inpaining</a>  <br>
        <p></p>
       <h3 id = "whatis"> What is Image Restoration</h3>
       <p id="para1"> Image restoration is the operation of taking a corrupt/noisy image and estimating the clean, original image. 
            Corruption may come in many forms such as motion blur, noise and camera mis-focus. Image restoration is performed by 
            reversing the process that blurred the image and such is performed by imaging a point source and use the point source image, 
            which is called the Point Spread Function (PSF) to restore the image information lost to the blurring process.</p>

        <p> Image restoration is different from image enhancement in that the latter is designed to emphasize features of the image that make the 
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

        <img src="../assets/images/image inpainting.png">
        <p>Figure 1. kinds of images inpainting</p>
        <br>
        <img src="../assets/images/修复前.png" width="200" height="320">
        <img src="../assets/images/修复后.png" width="200" height="320">
        
       <h2 id="techniques"> 2.Techniques of Image Restoration</h2>
        
            
        
          <img src="../assets/images/新的.png" >

          <h4>2.1Sequential-Based Methods</h4>
          <p>Approaches related to images inpainting can be classified into two categories: patch-based
            and diffusion-based methods.</p>
            <p>Patch-based methods are based on techniques that fill in the missing region patch-bypatch by searching for well-matching replacement patches (i.e., candidate patches) in the
                undamaged part of the image and copying them to corresponding locations. Many methods
                have been proposed for image inpainting using patch-based method. Ruži´c and Pi˘zurica [15]
                proposed a patch-based method consisting of searching the well-matched patch in the texture component using Markov random field (MRF). Jin and Ye [16] proposed a patch-based
                approach based on annihilation property filter and low rank structured matrix. In order to
                remove an object from an image, Kawai et al. [17] proposed an approach based on selecting the target object and limiting the search around the target by the background. Using
                two-stage low rank approximation (TSLRA) [18] and gradient-based low rank approximation [19], authors proposed patch-based methods for recovering the corrupted block in the
                image. On RGB-D images full of noise and text, Xue et al. [20] proposed a depth image
                inpainting method based on Low Gradient Regularizatio n. Liu et al. [21] used the statistical
                regularization and similarity between regions to extract dominant linear structures of target
                regions followed by repairing the missing regions using Markov random field model (MRF).
                Ding et al. [22] proposed a patch-based method for image inpainting using Nonlocal Texture
                Matching and Nonlinear Filtering (Alpha-trimmed mean filter). Duan et al. [23] proposed an
                image inpainting approach based on the Non-Local Mumford–Shah model (NL–MS). Fan
                and Zhang [24] proposed another image inpainting method based on measuring the similarity between patches using the Sum of Squared Differences (SSD). In order to remove
                blocks from an image, Jiang [25] proposed a method for image compression. Using Singular
                value decomposition and an approximation matrix, Alilou and Yaghmaee [26] proposed an
                approach to reconstruct the missing regions. Other notable research includes using texture
                analysis on Thangka images to recover missing block in an image [27] and using the structure information of images [28,29]. In the same context, Zeng et al. [30] proposed the use
                of Saliency Map and Gray entropy. Zhang et al. [31] proposed an image inpainting method
                using a joint probability density matrix (JPDM) for object removal from images.</p>


                <p>Wali et al. [32] proposed a denoising and inpainting method using total generalized variation (TGV). The authors analyze three types of distortion including text, noise, masks. In the
                    same context, Zhang et al. [33] proposed an example-based image inpainting approach based
                    on color distribution by restoring the missed regions using the neighboring regions. This work
                    analyses the many types of distortions including objects, text, and scratch. The multiscale
                    graph cuts technique is used for inpainting images in [34] by analyzing different types of
                    distortion. In [35] the authors proposed a novel joint data-hiding and compression scheme
                    for digital images using side match vector quantization (SMVQ) and image inpainting. The
                    proposed approach is tested on six grayscale recognized images including Lena, airplane,
                    peppers, sailboat, lake, and Tiffany. In order to preserving the texture consistency and structure coherence, the authors in [36] remove the added objects in the images using multiple
                    pyramids method, local patch statistics and geometric feature-based sparse representation.
                    For 3D stacked image sensor the authors in [37] proposed an image inpainting method using
                    discrete wavelet transform (DWT). In order to fill the missed region, the authors in [38]
                    proposed a patch-based method by search and fills-in these regions with the best matching
                    information surrounding it. In the goal to reconstruct the Borehole images the authors in
                    [39] proposed a method by analyzing the texture and structure component of the images.
                    Helmholtz equation is used for inpainting images in [40], after the inpainting of the missed
                    region the authors proposed a method for enhancing the quality of the images.</p>
                    <p>
                        <img src="../assets/images/CNN网络结构.png" width="800" height="300"> <br>
                        Diffusion-based methods fill in the missing region (i.e. hole), by smoothly propagating
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
                        cover a large region in the images, searching for similar patch can be difficult.</p>
          <h4>2.2Convolutional-Neural-Network-Based Methods</h4>
          <p>
            Recently, the strong potential of deep convolutional networks (CNNs) is being exhibited in
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
            inpainting. Zhu et al. [51] proposed a patch-based inpainting method for forensics images.
            Using the same technique of encoder-decoder network, Sidorov and Hardeberg [52] proposed an architecture for denoising, inpainting, and super-resolution for noised, inpainted
            and low-resolution images, respectively. Zeng et al. [53] built a pyramidal-context architecture called PEN-NET for high-quality image inpainting. Liu et al. [54] proposed a layer
            to the encoder-decoder network called coherent semantic attention (SCA) layer for image
            inpainting method. This proposed architecture is presented in Fig. 3. Further, Pathak et al.
            [55] proposed encoder-decoder model for image inpainting. In order to fill the gap between
            lines drawing in an image, Sasaki et al. [56] used an encoder-decoder-based model. This
            work can be helpful for scanned data that can miss some parts. For the UAV data that can
            be affected in terms of resolution or containing some blindspots, Hsu et al. [57] proposed a
            solution using VGG architecture. Also, for removing some text from the images Nakamura
            et al. [58] proposed a text erasing method using CNN. In order to enhance the images of the
            damaged artwork, Xiang et al. [59] also proposed a CNN-based method. In the same context
            as [59] and using GRNN neural network, Alilou and Yaghmaee [60] proposed a non-texture image inpainting method. Unlike the previous methods, Liao et al. [61] proposed a method
            called Artist-Net for image inpainting. The same goal is reached by Cai et al. [62] who proposed a semantic object removal approach using CNN architecture. In order to remove motifs
            from single images, Hertz et al. [63] proposed a CNN-based approach. Table 2 summarizes
            the CNN-based methods with a description of the type of data used for image inpainting.
            For the same purpose of image inpainting, but for replacing a region of an image by
            another region from another image, the authors in [64] based on VGG model trained their
            own model. In order to mitigate the effect of the gradient disappearance, the authors in [65] introduce a dense block for U-Net architecture that is used for inpainting the images. For
                medical purposes, the authors in [67] attempted to denoising the medical images using the
            principle of image inpainting using Residual U-Net architecture. To address the blurring and
            color discrepancy problems for image inpainting the authors in [66] proposed a method for
            missed region reconstruction using region-wise convolutions. As the authors in [68] add some
            layers named Interleaved Zooming Block in the encoder-decoder architecture for impainting
            the images. The authors in [69] Proposed a full-resolution residual block (FRRB) with an
            encoder-decoder model for the same purpose.
          </p>

          <h4> 2.3GAN-Based Methods</h4>
          <p>
            The much-used technique nowadays, was introduced for image generation in 2014 in [70].
            Generative adversarial networks (GANs) are a framework which contains two feed-forward
            networks, a generator G and a discriminator D. The generative network, G, is trained to
            create a new image which is indistinguishable from real images, whereas a discriminative
            network, D is trained to differentiate between real and generated images. This relation can
            be considered as a two-player min-max game in which G and D compete. To this end, the G
            (D) tries to minimize (maximize) the loss function, i.e. adversarial loss, as follows:
          </p>
          <img src="../assets/images/GAN损失函数.png" > <br>
          

          <p>
            where z and x denote a random noise vector and a real image sampled from the noise Pz(z) and
            real data distribution Pdata(x), respectively. Recently, the GAN has been applied to several
            semantic inpainting techniques in order to complete the hole region naturally.
          </p>
            <img src="../assets/images/GAN.jpg" width="700" height="320">
          <p>
            GANs are a framework that contains two feed-forward networks, a generator G and a
            discriminator D, as shown in Fig. 4. The generator takes random noise z as input and
            generates some fake samples similar to real ones; while the discriminator has to learn to
            determine whether samples are real or fake. At present, Generative Adversarial Network
            (GAN) becomes the most used technique in all computer vision applications. GAN-based
            approaches use a coarse-to-fine network and contextual attention module gives good performance and is proven to be helpful for inpainting [71–75]. Existing image inpainting methods
            based on GAN are generally a few. Out of these, we find that in [71], Chen and Hu proposed a
            GAN-based semantic image inpainting method, named progressive inpainting, where a pyramid strategy from a low-resolution image to a higher one is performed for repairing the image.
            For handwritten images, Li et al. [72] proposed a method for inpainting and recognition of
            occluded characters. The methods use improved GoogLeNet and deep convolutional generative adversarial network (DCGAN). In an image inpainting method named PEPSI [76] the
            authors unify the two-stage cascade network of the coarse-to-fine network into a single-stage
            encoder-decoder network. Where PEPSI++ is the extended version of PEPSI [73]. In [74]
            the authors used Encoder-decoder network and multi-scale GAN for image inpainting. The
            same combination is used in [75] for image inpainting and image-to-image transformation
            purposes. On the RBG-D images, Dhamo et al. [77] used CNN and GAN model to generate
            the background of a scene by removing the object in the foreground image as performed by
            many methods of motion detection using background subtraction [78,79]. In order to complete the missing regions in the image, Vitoria et al. [80] proposed an improved version of the
            Wasserstein GAN with the incorporation of Discriminator and Generator architecture. In the
            same context, but on sea surface temperature (SST) images, the Dong et al. [81] proposed a
            deep convolutional generative adversarial network (DCGAN) for filing the missing parts of
            the images. Also, Lou et al. [82] exploit a modifier GAN architecture for image inpainting
          </p>

          <p>
            whereas, Salem et al. [83] proposed a semantic image inpainting method using adversarial
            loss and self-learning encoder-decoder model. A good image restoration method requires
            preserving structural consistency and texture clarity. For this reason, Liu et al. [84] proposed
            a GAN-based method for image inpainting on face images. FiNet [85] is another approach
            found in the literature for fashion image inpainting that consists of completing the missing
            parts in fashion images.
          </p>

          <p>
            Recently, several approaches are proposed by combining some additional techniques
            (GAN, CNN,…) for inpainting the images. Jiao et al. [86] combined an encoder-decoder,
            multi-layer convolutions layers and GAN for restoring the images. The authors in [87] proposed a two-stage adversarial model named EdgeConnect by providing a generator for edge
            followed by an image inpainting model. The first model attempt to provide an edge completion component and the second one, inpaint the RGB image. According to the fact that
            GAN-based image inpainting models do not care out to the consistency of the structural
            and textural values between the inpainted region and their neighboring, the authors in [88]
            attempts to handle this limitation by providing a GAN model for learning the alignment
            between the block around the restored region and the original region. For the same reason
            as [88], taking into consideration the semantic consistency between restored images and
            original images, Li et al. [89] provided a boosted GAN model comprising an inpainting network and a discriminative network. When the inpainting network discovers the segmentation
            information of the input images, the discriminative network discovers the regularizations of
            the overall realness and segmentation consistency with the originals images. In the same
            context and using GAN-based models for images inpainting, each work provides some prior
            processing on GAN networks to get the best inpainting results for different types of images
            including medical images [90], face images [91] or scenes images [92].

          </p>

            <p>
            The GAN-based methods give a good addition to the performance of image inpainting
            algorithms, but the speed of training is lower and needs very good performance machines,
            and this is due to computational resources requirements including network parameters and
            convolution operations.
</p>

          <p>There are many articles about application of Image Restoration
            <a href="oldman.html" target="_blank">相关论文</a> You can have a look!</p>
          
              
        <h2 id="tree">3.Image Inpainting Datasets</h2>
        
            <p>Technique 1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <p>Technique 2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <p>Technique 3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <p>Technique 4 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>

        <img src="../assets/images/最后一张.png" width="580" height="320">


        <h2 id="example">4.example of Image Inpainting</h2>
        
        <p>For more information <a href="https://en.wikipedia.org/wiki/Image_restoration" target="_blank">Visit Wikipedia!</a> </p>


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