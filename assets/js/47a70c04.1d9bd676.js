"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[87656],{583212:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=a(785893),r=a(603905);const s={sidebar_position:4900,slug:"2022-12-19",title:"Tensorflow Hub",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"TensorFlow Hub is a repository of trained machine learning models."},i=void 0,o={id:"IoT-and-Machine-Learning/ML/2022-12-19-tf-hub/index",title:"Tensorflow Hub",description:"TensorFlow Hub is a repository of trained machine learning models.",source:"@site/docs/IoT-and-Machine-Learning/ML/2022-12-19-tf-hub/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2022-12-19-tf-hub",slug:"/IoT-and-Machine-Learning/ML/2022-12-19-tf-hub/2022-12-19",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-19-tf-hub/2022-12-19",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2022-12-19-tf-hub/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4900,frontMatter:{sidebar_position:4900,slug:"2022-12-19",title:"Tensorflow Hub",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"TensorFlow Hub is a repository of trained machine learning models."},sidebar:"tutorialSidebar",previous:{title:"Tensorflow Representation Learning",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-20-tf-representation/2022-12-19"},next:{title:"Tensorflow Transfer Learning",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-18-tf-transfer-learning/2022-12-18"}},l={},d=[{value:"The MobileNet v2 Model",id:"the-mobilenet-v2-model",level:2},{value:"Test the Pre-trained Model on an random Image",id:"test-the-pre-trained-model-on-an-random-image",level:3},{value:"Test the Model on the Flower Dataset",id:"test-the-model-on-the-flower-dataset",level:3},{value:"Model Building and Training",id:"model-building-and-training",level:2},{value:"Evaluation",id:"evaluation",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Guangzhou, China",src:a(503151).Z+"",width:"1500",height:"383"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#the-mobilenet-v2-model",children:"The MobileNet v2 Model"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#test-the-pre-trained-model-on-an-random-image",children:"Test the Pre-trained Model on an random Image"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#test-the-model-on-the-flower-dataset",children:"Test the Model on the Flower Dataset"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#model-building-and-training",children:"Model Building and Training"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#evaluation",children:"Evaluation"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/mpolinowski/tf-flowers",children:"Github"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In the previous tutorial I used the ",(0,t.jsx)(n.a,{href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2022-12-18-tf-transfer-learning/2022-12-18",children:"ResNet50"})," pre-trained model to help me with a binary image classification task - dogs or cats."]}),"\n",(0,t.jsxs)(n.p,{children:["Tensorflow offers a large variety of pre-trained models that we can use on it's hub. ",(0,t.jsx)(n.a,{href:"https://www.tensorflow.org/hub",children:"TensorFlow Hub"})," is a repository of trained machine learning models ready for fine-tuning and deployable anywhere."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Tensorflow Transfer Learning",src:a(229962).Z+"",width:"1288",height:"536"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install --upgrade tensorflow_hub\n"})}),"\n",(0,t.jsx)(n.h2,{id:"the-mobilenet-v2-model",children:"The MobileNet v2 Model"}),"\n",(0,t.jsxs)(n.p,{children:["From the ",(0,t.jsx)(n.a,{href:"https://tfhub.dev/s?tf-version=tf2",children:"available collection of models"})," we can choose ",(0,t.jsx)(n.a,{href:"https://tfhub.dev/google/tf2-preview/mobilenet_v2/classification/2",children:"MobileNet v2"}),". MobileNet V2 is a family of neural network architectures for efficient on-device image classification and related tasks, originally published by"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Mark Sandler"}),", ",(0,t.jsx)(n.strong,{children:"Andrew Howard"}),", ",(0,t.jsx)(n.strong,{children:"Menglong Zhu"}),", ",(0,t.jsx)(n.strong,{children:"Andrey Zhmoginov"}),", ",(0,t.jsx)(n.strong,{children:"Liang-Chieh Chen"}),": ",(0,t.jsx)(n.a,{href:"https://arxiv.org/abs/1801.04381",children:"Inverted Residuals and Linear Bottlenecks: Mobile Networks for Classification, Detection and Segmentation"}),", 2018."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# import mobile net with trained weights\nTrained_MobileNet_url ="https://tfhub.dev/google/tf2-preview/mobilenet_v2/classification/4"\n\nTrained_MobileNet = tf.keras.Sequential([\n    hub.KerasLayer(Trained_MobileNet_url, input_shape=(224,224,3))])\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Side note"}),": ",(0,t.jsx)(n.code,{children:"OSError: https://tfhub.dev/google/tf2-preview/mobilenet_v2/classification/4 does not appear to be a valid module."})," means you do not have a connection to the server. I was able to open this page and download the model manually but the Hub download here refused to do that. China network issue... switching to another VPN server solved it."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"test-the-pre-trained-model-on-an-random-image",children:"Test the Pre-trained Model on an random Image"}),"\n",(0,t.jsxs)(n.p,{children:["Just like with the ",(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2022-12-18-tf-transfer-learning/2022-12-18",children:"ResNet50 model"})," we can use the MobileNet model out-of-the-box to classify images it has already been trained on."]}),"\n",(0,t.jsx)(n.p,{children:"Before feeding it a test image we first have to preprocess the image - identical to the ResNet50 example before:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# test the raw mobilenet model\nsample_image = tf.keras.preprocessing.image.load_img(r'./test_images/watch.png', target_size = (224, 224))\n\nsample_image = np.array(sample_image)/255.0\npredicted_class = Trained_MobileNet.predict(np.expand_dims(sample_image, axis = 0))\npredicted_class = np.argmax(predicted_class)\n"})}),"\n",(0,t.jsx)(n.p,{children:"The MobileNet classes are identical to the 1000 ImageNet labels it has been trained against and have to be downloaded manually this time:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"labels_path = tf.keras.utils.get_file('ImageNetLabels.txt','https://storage.googleapis.com/download.tensorflow.org/data/ImageNetLabels.txt')\nimagenet_labels = np.array(open(labels_path).read().splitlines())\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now we can run our prediction on our random image - the model will return a number label that we can assign an ImageNet label to using the downloaded file above:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# show image with predicted class\nplt.imshow(sample_image)\npredicted_class_name = imagenet_labels[predicted_class]\nplt.title("Prediction: " + predicted_class_name.title())\nplt.show()\n'})}),"\n",(0,t.jsx)(n.p,{children:"And we get a magnetic compass... oh well..."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Tensorflow Transfer Learning",src:a(412257).Z+"",width:"980",height:"517"})}),"\n",(0,t.jsx)(n.p,{children:"But as they say, when things start to fail, go with cats - excellent :thumbsup:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Tensorflow Transfer Learning",src:a(893221).Z+"",width:"1010",height:"492"})}),"\n",(0,t.jsx)(n.h3,{id:"test-the-model-on-the-flower-dataset",children:"Test the Model on the Flower Dataset"}),"\n",(0,t.jsx)(n.p,{children:"We can use the flower dataset provided by Tensorflow to train our model:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# download and process training dataset\n# specify path of the flowers dataset\nflowers_data_url = tf.keras.utils.get_file(\n  'flower_photos','https://storage.googleapis.com/download.tensorflow.org/example_images/flower_photos.tgz',\n   untar=True)\n# preprocessing\nimage_generator = tf.keras.preprocessing.image.ImageDataGenerator(rescale=1/255)\nflowers_data = image_generator.flow_from_directory(str(flowers_data_url), target_size=(224,224), batch_size = 64, shuffle = True)\n"})}),"\n",(0,t.jsx)(n.p,{children:"The dataset consists of 3670 pictures in 5 classes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'for flowers_data_input_batch, flowers_data_label_batch in flowers_data:\n  print("Image batch shape: ", flowers_data_input_batch.shape)\n  print("Label batch shape: ", flowers_data_label_batch.shape)\n  break\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Found 3670 images belonging to 5 classes.\nImage batch shape:  (64, 224, 224, 3)\nLabel batch shape:  (64, 5)\n"})}),"\n",(0,t.jsx)(n.p,{children:"We can now run a prediction on the first batch (64 images) of the flower dataset:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"predictions_batch = Trained_MobileNet.predict(flowers_data_input_batch)\n# We have a batch size of 64 with 1000 classes\n# print(predictions_batch.shape)\n# get classnames for imagenet classes\npredicted_class_names = imagenet_labels[np.argmax(predictions_batch, axis=-1)]\n# print(predicted_class_names)\n\n# print all 64 images\n# and add predicted class\nplt.figure(figsize=(15,15))\n\nfor n in range(64):\n  plt.subplot(8,8,n+1)\n  plt.tight_layout()\n  plt.imshow(flowers_data_input_batch[n])\n  plt.title(predicted_class_names[n])\n  plt.axis('off')\n\nplt.show()\n"})}),"\n",(0,t.jsx)(n.p,{children:"We can see that the model performed poorly without prior training with our dataset:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Tensorflow Transfer Learning",src:a(105918).Z+"",width:"1447",height:"971"})}),"\n",(0,t.jsx)(n.h2,{id:"model-building-and-training",children:"Model Building and Training"}),"\n",(0,t.jsx)(n.p,{children:"To improve the performance of our model we can download the feature extraction layer from MobileNet only and freeze it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# download the MobileNet without the classification head\nMobileNet_feature_extractor_url = "https://tfhub.dev/google/tf2-preview/mobilenet_v2/feature_vector/2"\nMobileNet_feature_extractor_layer = hub.KerasLayer(MobileNet_feature_extractor_url, input_shape=(224, 224, 3))\n# freeze the feature extraction layer from mobilenet\nMobileNet_feature_extractor_layer.trainable = False\n'})}),"\n",(0,t.jsx)(n.p,{children:"Again, we will need to download our dataset and preprocess it for consumption by our neural network:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# download and process training dataset\n# specify path of the flowers dataset\nflowers_data_url = tf.keras.utils.get_file(\n  'flower_photos','https://storage.googleapis.com/download.tensorflow.org/example_images/flower_photos.tgz',\n   untar=True)\n# pre-processing data\nimage_generator = tf.keras.preprocessing.image.ImageDataGenerator(rescale=1/255)\nflowers_data = image_generator.flow_from_directory(str(flowers_data_url), target_size=(224,224), batch_size = 64, shuffle = True)\n\n# create input batches from flower data\nfor flowers_data_input_batch, flowers_data_label_batch in flowers_data:\n  break\n"})}),"\n",(0,t.jsx)(n.p,{children:"But instead of feeding the data directly into MobileNet we now need to build our own model - based on the locked feature detection layer from MobileNet and an additional dense that we can train with our dataset:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# build new model out of feature extraction layer\n# and a fresh dense layer for us to train\nmodel = tf.keras.Sequential([\n  MobileNet_feature_extractor_layer,\n  tf.keras.layers.Dense(flowers_data.num_classes, activation='softmax')\n])\n"})}),"\n",(0,t.jsx)(n.p,{children:"We can now build the model and train it's dense layer using the flower dataset:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# build the model\nmodel.compile(optimizer=tf.keras.optimizers.Adam(), loss='categorical_crossentropy', metrics=['accuracy'])\n# and train it with flower dataset\nhistory = model.fit_generator(flowers_data, epochs=50)\n"})}),"\n",(0,t.jsx)(n.p,{children:"And again, after a very short training we are already at an accuracy closing in to 100%:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Epoch 50/50\n58/58 [==============================] - 6s 104ms/step - loss: 0.0212 - accuracy: 0.9984\n"})}),"\n",(0,t.jsx)(n.h3,{id:"evaluation",children:"Evaluation"}),"\n",(0,t.jsx)(n.p,{children:"To test our model we can first extract the classification labels from our dataset:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# evaluate the model\n## get classification labels from dataset\nclass_names = sorted(flowers_data.class_indices.items(), key=lambda pair:pair[1])\nclass_names = np.array([key.title() for key, value in class_names])\nprint(class_names)\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["The dataset uses the following labels and image that go along with them ",(0,t.jsx)(n.code,{children:"['Daisy' 'Dandelion' 'Roses' 'Sunflowers' 'Tulips']"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# now we can feed a fresh batch of images to the trained model\npredicted_batch = model.predict(flowers_data_input_batch)\n# predict labels for each image inside the batch\npredicted_id = np.argmax(predicted_batch, axis=-1)\npredicted_label_batch = class_names[predicted_id]\n\nlabel_id = np.argmax(flowers_data_input_batch, axis=-1)\n\n# show images with labels\nplt.figure(figsize=(10,9))\nplt.subplots_adjust(hspace=0.5)\n\nfor n in range(64):\n  plt.subplot(8,8,n+1)\n  plt.tight_layout()\n  plt.imshow(flowers_data_input_batch[n])\n  # color = "green" if predicted_id[n] == label_id[n] else "red"\n  color = "black"\n  plt.title(predicted_label_batch[n].title(), color=color)\n  plt.axis(\'off\')\n\nplt.show()\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Tensorflow Transfer Learning",src:a(58750).Z+"",width:"995",height:"895"})})]})}function h(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},603905:(e,n,a)=>{a.d(n,{ah:()=>d});var t=a(667294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),d=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=d(a),g=r,f=p["".concat(l,".").concat(g)]||p[g]||c[g]||s;return a?t.createElement(f,i(i({ref:n},h),{},{components:a})):t.createElement(f,i({ref:n},h))}));h.displayName="MDXCreateElement"},229962:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/Tensorflow_Transfer_Learning_01-da7b26e0a598dda265be40c96433386c.png"},412257:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/Tensorflow_Transfer_Learning_02-89f2c48f2b6bab91a0b5de23b0527204.png"},893221:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/Tensorflow_Transfer_Learning_03-06f2c531495e29eed45b8f30c9ebdafb.png"},105918:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/Tensorflow_Transfer_Learning_04-bd3e77079d561c75026689e3e1489c07.png"},58750:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/Tensorflow_Transfer_Learning_05-a678dd04ed9b3570dc23afd1009f8b5d.png"},503151:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-918471126c0472aad97358a725e1a399.jpg"}}]);