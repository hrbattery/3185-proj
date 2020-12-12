<template>
  <v-app id="inspire">
    <Header/>

    <v-main>
      <v-container>
      <div class="text-start">
      <h1>Neural Style Transfer</h1>
      <h1>
            Introduction<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607695806074&di=edeca600ac58f0726e080b4f0a5830b9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3Db3a28171a4ec08fa260013af69ec3d4d%2Fbb54c1cec3fdfc03d6e4c676d03f8794a6c22683.jpg" width="70" height="70"/>
        </h1>
        <p>
            <b>Style transfer is a computer vision technique that allows us to recompose the content of an image in the style of another. If you've ever imagined what a photo might look like if it were painted by a famous artist, then style transfer is the computer vision technique that turns this into a reality.</b>
        </p>
        <p><img src="../assets/images/Style1.png" width="100%" height="100%"/></p>
        <p>
            <em>You may have a try on the following website(It may cost you 2-5 minutes to wait for the result from this website, please be patient):</em>
        </p>
        <iframe src="https://demo.aizoo.com/style-transfer.html" name="f" width="100%" height=800></iframe>
        <p>
            But how does style transfer actually work? What are the different approaches, what are its potential benefits and limitations, and how might you use it in your business?
        </p>
        <p>
            In this guide, you'll find answers to all of those questions and more. Whether you're an experienced machine learning engineer considering implementation, a developer wanting to learn more, or a product manager looking to explore what's possible with computer vision and style transfer, this guide is for you.
        </p>
        <p>
            Here's a look at what we'll cover:
        </p>
        <h4>Part 1: Style transfer – the basics</h4>
        <p>
            (1)What is style transfer?<br>
            (2)Modes and types of style transfer<br>
            (3)Why is style transfer important?<br>
        </p>
        <h4>Part 2: How does style transfer work?</h4>
        <p>
            (1)Inputs and outputs<br>
            (2)Basic structure<br>
            (3)Model architecture overview<br>
            (4)How style transfer works on the edge<br>
        </p>
        <h4>Part 3: Use cases and applications</h4>
        <p> 
            (1)Photo and video editing<br>
            (2)Commercial art<br>
            (3)Gaming<br>
            (4)Virtual reality<br>
        </p>
        <h4>Part 4: Resources</h4>
        <p>
            (1)Getting started<br>
            (2)Tutorials<br>
            (3)Literature review<br>
            (4)Datasets available<br>
        </p>
        <h1>Part 1: Style transfer – the basics</h1>
        <h3>What is style transfer?</h3>
        <p>
            Style transfer is a computer vision technique that takes two images—a content image and a style reference image—and blends them together so that the resulting output image retains the core elements of the content image, but appears to be “painted” in the style of the style reference image.

            A selfie, for example, would supply the image content, and the van Gogh painting would be the style reference image. The output result would be a self-portrait that looks like a van Gogh original!
        </p>
        <h3>Modes and types of style transfer</h3>
        <p>
            Style transfer is an example of image stylization, an image processing and manipulation technique that's been studied for several decades within the broader field of non-photorealistic rendering.

            If we think about solving this task via a traditional supervised learning approach, learned style transfer requires a pair of input images—both an original image and an artistic representation of that original image. From there, a machine learning model learns the transformation and can apply it to new original images.

            Unfortunately, this approach is largely impractical, as these kinds of image pairs rarely exist. In recent years, a new approach, neural style transfer (NST), has changed what's possible. NST employs deep neural networks to power these transformations. Neural networks are used to extract statistical features of images related to content and style so that we can quantify how well the style transfer is working without the explicit image pairs. With this improved approach, only a single style reference image is needed for the neural network to apply it to original content images.

            Early versions of NST, however, were not without shortcomings. They treated the task as an optimization problem, requiring hundreds or thousands of iterations to perform style transfer on a single image. To tackle this inefficiency, researchers developed what's referred to as fast neural style transfer. Fast style transfer also uses deep neural networks but trains a standalone model to transform any image in a single, feed-forward pass. Trained models can stylize any image with just one iteration through the network, rather than thousands.

            State-of-the-art style transfer models can even learn to imprint multiple styles via the same model so that a single input content image can be edited in any number of creative ways.

            For the rest of this guide, we'll use the term “style transfer” as a stand-in for current and state-of-the-art approaches to NST.
        </p>
        <h3>Why is style transfer important?</h3>
        <p>
            If we're being honest with ourselves, not everyone is born an artist. Some are more adept at language or other tactile tasks. But with recent advances in technologies like style transfer, almost anyone can enjoy the pleasure that comes along with creating and sharing an artistic masterpiece.

            This is where the transformative power of style transfer lies. Artists can easily lend their creative aesthetic to others, allowing new and innovative representations of artistic styles to live alongside original masterpieces.

            In addition to empowering people all around the world to experiment with their own creativity, we see the importance of style transfer playing out in the commercial art world. In recent months, Christie's featured AI artwork that sold at one of their auctions for more than $430,000.

            And with the continued improvement of AI-accelerated hardware, both in the cloud and on the edge, style transfer can now be applied to captured and live video. This new capability opens up endless doors in design, content generation, and the development of creativity tools.

            Given this evolution, we can see how style transfer can be applied in a number of ways:

            (1)Photo and video editors<br>
            (2)Artist-Community engagement<br>
            (3)Commercial art<br>
            (4)Gaming<br>
            (5)Virtual Reality<br>
            
            Of course, this isn't an exhaustive list, but it includes some of the primary ways in which style transfer is shaping our future.
        </p>
        <h1>Part 2: How does style transfer work?</h1>
        <p>
            Now that we know a bit about what style transfer is, the distinctions between different types of style transfer, and what it can be used for, let's explore in more depth how it actually works.

            In this section, we'll look at several deep learning-based approaches to style transfer and assess their advantages and limitations. While there are a number of traditional methods – including the ones mentioned above – for the purposes of this overview, we're going to look at the approaches that use neural networks, which have become the state-of-the-art methods for style transfer.

            In general, deep learning architectures suitable for style transfer are based on variations of convolutional neural networks (CNNs). For a gentle introduction to CNNs, check out this overview.

            Tracing the evolution of style transfer research is a helpful way to make key distinctions between approaches. From single- and multiple-style model methods to arbitrary-style model approaches, examining the continued development of these techniques and optimizations can help us understand what's possible with style transfer.
        </p>
        <h3>Basic structure</h3>
        <p>
            Training a style transfer model requires two networks: a pre-trained feature extractor and a transfer network. The pre-trained feature extractor is used to avoid having to us paired training data. It's usefulness arises from the curious tendency for individual layers of deep convolutional neural networks trained for image classification to specialize in understanding specific features of an image.
        </p>
        <p><img src="https://www.fritz.ai/images/neural_network_feature_visualization.jpg" width="100%" height="100%"></p>
        <p>
            Some layers learn to extract the content of an image (the shape of a dog or the position of a car), while others learn to focus on texture (the small brush strokes of a painter or the fractal patterns of nature). Style transfer exploits this by running two images through a pre-trained neural network, looking at the pre-trained network's output at multiple layers, and comparing their similarity. Images that produce similar outputs at one layer of the pre-trained model likely have similar content, while matching outputs at another layer signals similar style.
        </p>
        <p><img src="https://www.fritz.ai/images/fast_style_transfer_arch.jpg" width="100%" height="100%"></p>
        <p>
            The pre-trained model enables us to compare the content and style of two images, but it doesn't actually help us create the stylized image. That's the job of a second neural network, which we'll call the transfer network. The transfer network is an image translation network that takes one image as input and outputs another image. Transfer networks typically have an encode-decoder architecture.

            At the beginning of training, one or more style images are run through the pre-trained feature extractor, and the outputs at various style layers are saved for later comparison. Content images are then fed into the system. Each content image passes through the pre-trained feature extractor, where outputs at various content layers are saved. The content image then passes through the transfer network, which outputs a stylized image. The stylized image is also run through the feature extractor, and outputs at both the content and style layers are saved.

            The quality of the stylized image is defined by a custom loss function that has terms for both content and style. The extracted content features of the stylized image are compared to the original content image, while the extracted style features are compared to those from the reference style image(s). After each step, only the transfer network is updated. The weights of the pre-trained feature extractor remain fixed throughout. By weighting the different terms of the loss function, we can train models to produce output images with lighter or heavier stylization.
        </p>
        <h3>Model architecture overview</h3>
        <p>
            There are too many specific neural network architectures to cover them all here, but there we'll highlight a few robust, reliable ones that make good places to start.
        </p>
        <h5>Single style per model</h5>
        <p>
            A 2016 paper by Johnson et al was the first to train an independent neural network to stylize images in a single, feed-forward pass. Large VGG16 models pre-trained on ImageNet are used for feature extractors, and a relatively small encoder-decoder network serves as the transfer network. In this approach, a single transfer network is trained for each desired style.
        </p>
        <h5>Multiple styles per model</h5>
        <p>
            In 2017, a year after the original fast style transfer technique was published, researchers at Google extended the technique to allow a single transfer network to produce images in multiple styles and even blend more than one style together. Their main contribution was the inclusion of “conditional instance normalization” layers within the network so that the stylized image produced could be conditioned on an additional model input.

            These networks take a content image as input, along with an additional vector telling the network how much of each style to apply to the image. So for example, a model could be trained on a van Gogh, Picasso, and Matisse painting. When it's time to stylize an image, the user can input [1, 0, 0] for van Gogh, [0, 1, 0] for Picasso], or [0.33, 0.33, 0.33] for a blend of all three. This is a nice approach because it removes the need to train and store multiple models for multiple styles, and it provides creative freedom by letting users mix and match a continuum of styles.
        </p>
        <h5>Arbitrary styles per model</h5>
        <p>
            A common characteristic of both single and multi-style transfer models is that they can only produce images in styles that they've seen during training. A model trained on van Gogh's work cannot produce images like Picasso without retraining the entire network. Arbitrary style transfer by Huang et al changes that. Arbitrary style transfer models take a content image and a style image as input and perform style transfer in a single, feed-forward pass. In essence, the model learns to extract and apply any style to an image in one fell swoop.
        </p>
        <h5>Style transfer optimizations and extensions</h5>
        <p>
            Finally, there are a few optimization and extensions of style transfer that are worth mentioning.

            The first is stable style transfer. If one were to train a style transfer model and then apply that model to frames of a video, they would find that the result contains a fair amount of flickering. Even small changes and noise from frame to frame in a video can be enough to introduce distracting temporal inconsistencies. For example, a soccer ball may change color mid flight. To solve this, stable style transfer models introduce a new loss term related to “temporal coherence”, where two sequential frames are stylized and compared so that the model learns to produce the same stylization for an object as it moves through the frame.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ITGp7-NFX_U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>
            Another extension of style transfer is color preservation. In some cases, we may want to transfer the brush strokes of an artist to an image, but preserve the colors of the original palette. This can be done in a number of ways, including changing the input image representation from RGB to a different color space and applying style transfer only to the luminance channel only, or by applying a color transfer algorithm to the final stylized image.

            Finally, while most style transfer use cases mentioned thus far have applied an artistic style to a photo image, it is possible to transfer other heuristics between two photorealistic images, such as weather or time of day. Photorealistic style transfer typically requires modifications to the encoder-decoder transfer network to reduce artifacting that's introduced by deep convolution and upsampling layers.
        </p>
        <h3>How style transfer works on the edge</h3>
        <p>
            If your use case requires that style transfer work in real-time, without internet connectivity, or on private data, you might be considering running your style transfer model directly on an edge device like a mobile phone or IoT board.

            In those cases, you'll need to choose specific model architectures to make sure everything runs smoothly on these lower power devices. Here are a few tips and tricks to ensure your models are ready for edge deployment:

            (1)Prune your network to include fewer convolution blocks. Most papers use network architectures that are not constrained by compute or memory resources. This leads to networks with far more layers and parameters than are required to generate good styles.<br>
            (2)Add a width multiplier to your model so you can adjust the number of parameters in your network to meet your computation and memory constraints. The number of filters in a convolution layer, for example, greatly impacts the overall size of your model. Many papers and open-source implementations will treat this number as a fixed constant, but most of these models were never intended for mobile use. Adding a parameter that multiplies the base number of filters by a constant fraction allows you to modulate the model architecture to fit the constraints of your device. For some tasks, you can create much, much smaller networks that perform just as well as large ones.<br>
            (3)Shrink models with quantization, but beware of accuracy drops. Quantizing model weights can save a bunch of space, often reducing the size of a model by a factor of 4 or more. However, accuracy will suffer. Make sure you test quantized models rigorously to determine if they meet your needs.<br>
            (4)Input and output sizes can be smaller than you think! If you're designing a photo editing app, it's tempting to think that your style transfer model needs to be able to accept full resolution photos as an input. In most cases, edge devices won't have nearly enough processing power to handle this. Instead, it's common to train style transfer models at modest resolutions, then apply them higher resolution images or upscale outputs after styles have been applied.<br>
            
            To see just how small you can make these networks with good results, check out this post on creating a tiny style transfer model for mobile devices.
        </p>
        <h1>Part 3: Use cases and applications</h1>
        <p>
            In this section, we'll provide an overview of real-world use cases for style transfer. We've mentioned several of them in previous sections, but here we'll dive a bit deeper and explore the impact this computer vision technique can have across industries.
        </p>
        <h3>Photo and video editors</h3>
        <p>
            One of the most clear applications of style transfer is in photo and video editing software. From sharing stylized selfies to augmenting user-generated music videos, and beyond, the ability to add famous art styles to images and video clips promises to add unprecedented power to these kinds of creativity tools.

            And given the flexibility and performance of current deep learning approaches, style transfer models can easily be embedded on edge devices—for instance, mobile phones—allowing for applications that can process and transform images and video in real-time. This means that professional-quality photo and video editing tools can become more widely accessible and easier to use than ever before.

            There are already a number of incredible tools that employ style transfer as part of their toolkits. Here are a few fun projects, apps, and demos to play with:

            (1)Video Star (Art Studio, iOS)<br>
            (2)Painter's Lens (iOS)<br>
            (3)Looq (iOS)<br>
            (4)Instapainting's AI Painter (Desktop)<br>
            (5)Arbitrary Style Transfer in the Browser (Desktop)<br>
        </p>
        <h3>Commercial art</h3>
        <p>
            From poetry to artwork to music, we've only just entered the era of AI creations. And style transfer is one of the computer vision techniques making this wave of AI-powered artwork possible.

            Whether it's artwork sold at a high-end auction or up-and-coming artists finding new ways to share their aesthetic with the world, style transfer promises to change the ways we think about art, what originality means, and how we present art in the real world.

            We could also imagine style transfer being used to create reproducible, high-quality prints for office buildings, or for large-scale advertising campaigns. These are just a few possible ways in which style transfer could change how we view the commercial impacts of art.
        </p>
        <h3>Gaming</h3>
        <p>
            At a press conference during the 2019 Game Developers Conference, Google introduced Stadia, it's cloud-powered video game streaming service. And one of the primary features included in that demo was an in-game style transfer feature that automatically recomposes the virtual world with textures and color palettes from a potentially limitless range of art styles.

            Google noted that efforts like these are intended to “empower the artist inside of every developer.” This implies that gaming, much like other applications of style transfer, will broaden the accessibility of artistic creation to those who we might not traditionally see as artists.
        </p>
        <h3>Virtual reality</h3>
        <p>
            Much like gaming, where immersive virtual worlds represent the anchor of the user experience, virtual reality has also had its share of interest in exploring what's possible with style transfer.

            While the applications with style transfer in VR are still largely in the research phase, the possibilities are exciting and promising. Facebook touts the potential of style transfer to radically alter the ways VR developers tell visual stories through their applications, games, films, and more.
            
            And there are some early demos that show how style transfer could help augment the immersiveness of worlds created for virtual reality. Here's one example:
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pkgMUfNeUCQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h1>Part 4: Resources</h1>
        <p>
            We hope the above overview was helpful in understanding the basics of style transfer and how it can be used in the real world. But with all things, more answers lead to more questions.

            This final section will provide a series of organized resources to help you take the next step in learning all there is to know about style transfer.
            
            In the interest of keeping this list relatively accessible, we've curated our top resources for each of the following areas:
            
            (1)Getting started<br>
            (2)Tutorials<br>
            (3)Literature review<br>
            (4)Available datasets<br>
        </p>
        <h5>Getting started</h5>
        <p>
            <a href="https://en.wikipedia.org/wiki/Neural_Style_Transfer" target="_blank">Neural Style Transfer - Wikipedia</a><br>
            <a href="https://towardsdatascience.com/a-brief-introduction-to-neural-style-transfer-d05d0403901d" target="_blank">A brief introduction to neural style transfer</a><br>
            <a href="https://ndres.me/post/machine-learning-with-gifs-style-transfer/" target="_blank">Machine learning explained with gifs: Style transfer</a><br>
        </p>
        <h5>Tutorials</h5>
        <p>
            <a href="https://heartbeat.fritz.ai/neural-style-transfer-with-pytorch-49e7c1fe3bea" target="_blank">Neural Style Transfer with PyTorch</a><br>
            <a href="https://heartbeat.fritz.ai/real-time-style-transfer-for-ios-transform-your-photos-and-videos-into-masterpieces-f04111fcd2ff" target="_blank">Real-time style transfer for iOS</a><br>
            <a href="https://heartbeat.fritz.ai/real-time-style-transfer-for-android-6a9d238dfdb5" target="_blank">On-device style transfer for Android</a><br>
            <a href="https://shafeentejani.github.io/2017-01-03/fast-style-transfer/" target="_blank">Style Transfer in Real-Time</a><br>
            <a href="https://www.datacamp.com/community/tutorials/implementing-neural-style-transfer-using-tensorflow" target="_blank">Implementing Neural Style Transfer Using TensorFlow 2.0</a><br>
            <a href="https://harishnarayanan.org/writing/artistic-style-transfer/" target="_blank">Convolutional neural networks for artistic style transfer</a><br>
        </p>
        <h5>Literature review</h5>
        <p>
            <a href="https://arxiv.org/abs/1705.04058" target="_blank">Neural Style Transfer: A Review</a><br>
            <a href="https://github.com/ycjing/Neural-Style-Transfer-Papers" target="_blank">[GitHub] ycjing / Neural-Style-Transfer-Papers</a><br>
            <a href="https://paperswithcode.com/task/style-transfer" target="_blank">Papers with Code: Style Transfer</a><br>
        </p>
        <h5>Datasets available</h5>
        <p>
            <a href="http://cocodataset.org/#download" target="_blank">COCO dataset</a><br>
            <a href="http://www.image-net.org/" target="_blank">ImageNet</a><br>
        </p>
        <h3>Style transfer on mobile</h3>
        <p>
            The benefits of using style transfer aren't limited to applications that run on servers or in the cloud.

            In fact, style transfer models can be made small and fast enough to run directly on mobile devices, opening up a range of possibilities, including powerful image and video editors, creativity tools, and more.

            From brand loyalty, to user engagement and retention, and beyond, implementing style transfer on-device has the potential to delight users in new and lasting ways, all while reducing cloud costs and keeping user data private.

            Fritz AI is the machine learning platform that makes it easy to teach devices how to see, hear, sense, and think. To learn more about how Fritz AI can help you build amazing style filters, powerful photo and video editors, and more, check out our Style Transfer API.

            For more inspiration, check out our tutorials for creating masterpieces in real-time on iOS and for transforming a city square to a van Gogh painting on Android. And if you need help implementing style transfer on-device, reach out and we'll help you get started.
        </p>
        <p> <a href="#top">Back to top</a> <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607696209141&di=f09ce145423c830eea62b5569b24d4ba&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F10429984112%2F0.jpg" width="70" height="70"/></p>
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