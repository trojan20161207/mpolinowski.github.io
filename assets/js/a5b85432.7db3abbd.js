"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[58365],{885173:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var i=s(785893),a=s(603905);const r={sidebar_position:4510,slug:"2023-03-26",title:"Tensorflow 2 - Unsupervised Learning",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Use Autoencoders to Increase Feature Resolution"},o="Tensorflow Unsupervised Learning",t={id:"IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-autoencoders-super-resolution/index",title:"Tensorflow 2 - Unsupervised Learning",description:"Use Autoencoders to Increase Feature Resolution",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-autoencoders-super-resolution/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-autoencoders-super-resolution",slug:"/IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-autoencoders-super-resolution/2023-03-26",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-autoencoders-super-resolution/2023-03-26",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-autoencoders-super-resolution/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4510,frontMatter:{sidebar_position:4510,slug:"2023-03-26",title:"Tensorflow 2 - Unsupervised Learning",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Use Autoencoders to Increase Feature Resolution"},sidebar:"tutorialSidebar",previous:{title:"Tensorflow 2 - Unsupervised Learning",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-generative-adversial-networks/2023-03-26"},next:{title:"Tensorflow 2 - Unsupervised Learning",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-03-24-tensorflow-unsupervised-learning-autoencoders/2023-03-24"}},l={},c=[{value:"Autoencoder Super-Resolution",id:"autoencoder-super-resolution",level:2},{value:"Load and Preprocess the Dataset",id:"load-and-preprocess-the-dataset",level:2},{value:"Build the Autoencoder",id:"build-the-autoencoder",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Victoria Harbour, Hongkong",src:s(803551).Z+"",width:"2385",height:"1054"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#tensorflow-unsupervised-learning",children:"Tensorflow Unsupervised Learning"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#autoencoder-super-resolution",children:"Autoencoder Super-Resolution"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#load-and-preprocess-the-dataset",children:"Load and Preprocess the Dataset"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#build-the-autoencoder",children:"Build the Autoencoder"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#re-run-with-a-lower-compression-factor",children:"Re-run with a lower Compression Factor"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/mpolinowski/tf-2023",children:"Github Repository"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"See also:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fun, fun, tensors: ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-19-tensorflow-introduction/2023-02-19",children:"Tensor Constants, Variables and Attributes"}),", ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-21-tensorflow-tensors-2/2023-02-21",children:"Tensor Indexing, Expanding and Manipulations"}),", ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3/2023-02-22",children:"Matrix multiplications, Squeeze, One-hot and Numpy"})]}),"\n",(0,i.jsxs)(n.li,{children:["Tensorflow 2 - Neural Network Regression: ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression/2023-02-23",children:"Building a Regression Model"}),", ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-24-tensorflow-neural-network-regression-evaluation/2023-02-24",children:"Model Evaluation"}),", ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/2023-02-25",children:"Model Optimization"}),", ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/2023-02-26",children:'Working with a "Real" Dataset'}),", ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/2023-02-26",children:"Feature Scaling"})]}),"\n",(0,i.jsxs)(n.li,{children:["Tensorflow 2 - Neural Network Classification: ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-27-tensorflow-neural-network-classification/2023-02-27",children:"Non-linear Data and Activation Functions"}),", ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-28-tensorflow-neural-network-classification-model-evaluation/2023-02-28",children:"Model Evaluation and Performance Improvement"}),", ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-02-tensorflow-neural-network-multi-classification/2023-03-02",children:"Multiclass Classification Problems"})]}),"\n",(0,i.jsxs)(n.li,{children:["Tensorflow 2 - Convolutional Neural Networks: ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-03-tensorflow-convolutional-neural-network-binary-classifications/2023-03-03",children:"Binary Image Classification"}),", ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-05-tensorflow-convolutional-neural-network-multiclass-classifications/2023-03-05",children:"Multiclass Image Classification"})]}),"\n",(0,i.jsxs)(n.li,{children:["Tensorflow 2 - Transfer Learning: ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-06-tensorflow-transfer-learning-feature-extraction/2023-03-06",children:"Feature Extraction"}),", ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-11-tensorflow-transfer-learning-fine-tuning/2023-03-11",children:"Fine-Tuning"}),", ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-16-tensorflow-transfer-learning-scaling/2023-03-16",children:"Scaling"})]}),"\n",(0,i.jsxs)(n.li,{children:["Tensorflow 2 - Unsupervised Learning: ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-24-tensorflow-unsupervised-learning-autoencoders/2023-03-24",children:"Autoencoder Feature Detection"}),", ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-autoencoders-super-resolution/2023-03-26",children:"Autoencoder Super-Resolution"}),", ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-generative-adversial-networks/2023-03-26",children:"Generative Adverserial Networks"})]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"tensorflow-unsupervised-learning",children:"Tensorflow Unsupervised Learning"}),"\n",(0,i.jsx)(n.h2,{id:"autoencoder-super-resolution",children:"Autoencoder Super-Resolution"}),"\n",(0,i.jsxs)(n.p,{children:["Train an ",(0,i.jsx)(n.a,{href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-03-24-tensorflow-unsupervised-learning-autoencoders/2023-03-24",children:"Autoencoder Convolutional Network"})," to upscale noisy, compressed images."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import cv2\nimport glob\nimport matplotlib.image as mpimg\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport os\nimport pathlib\nimport random\nimport shutil\nfrom sklearn.model_selection import train_test_split\nimport tensorflow as tf\nfrom tensorflow.keras.layers import Conv2D, MaxPool2D, UpSampling2D, Dropout\nfrom tensorflow.keras.models import Model\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'BATCH_SIZE = 32\nSEED = 42\nIMAGE_SIZE = 250\nDATA_DIR = "../datasets/Labeled_Faces_in_the_Wild_Home/lfw"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Download the ",(0,i.jsx)(n.a,{href:"https://vis-www.cs.umass.edu/lfw/",children:"Labeled Faces in the Wild"})," Dataset"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"wget http://vis-www.cs.umass.edu/lfw/lfw.tgz"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"load-and-preprocess-the-dataset",children:"Load and Preprocess the Dataset"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# inspect a few images\ndef view_random_image(target_dir):\n    target_folder = str(target_dir)\n    random_image = random.sample(os.listdir(target_folder), 1)\n    \n    img = mpimg.imread(target_folder + "/" + random_image[0])\n    plt.imshow(img)\n    plt.title(str(img.shape))\n    plt.axis("off")\n    \n    return tf.constant(img)\n\nfig = plt.figure(figsize=(12, 6))\nplot1 = fig.add_subplot(1, 3, 1)\nimage_0 = view_random_image(target_dir = DATA_DIR)\nplot2 = fig.add_subplot(1, 3, 2)\nimage_1 = view_random_image(target_dir = DATA_DIR)\nplot2 = fig.add_subplot(1, 3, 3)\nimage_2 = view_random_image(target_dir = DATA_DIR)\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Autoencoder Super-Resolution",src:s(531097).Z+"",width:"950",height:"315"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# since we are not going to classify this dataset\n# we can copy all files into the same folder\ndataset = glob.glob(DATA_DIR+'/**/*.jpg') #returns path of images\nprint(len(dataset), dataset[:1])\n# 13233 ['../datasets/Labeled_Faces_in_the_Wild_Home/lfw/Aaron_Eckhart/Aaron_Eckhart_0001.jpg']\n\nfor file in dataset:\n    shutil.move(file, DATA_DIR)\n\nimages = glob.glob(DATA_DIR+'/*.jpg')\nprint(len(images), images[:1])\n# 13233 ['../datasets/Labeled_Faces_in_the_Wild_Home/lfw/Aaron_Eckhart_0001.jpg']\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# now with the images in place we can split them\nimages = glob.glob(DATA_DIR+'/*.jpg')\n\ntrain_X, val_X = train_test_split(images, test_size=0.2, random_state=SEED)\nprint(len(train_X), len(val_X))\n# 10586 2647\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# the dataset now needs to be split into\n# a set of the source images and a set of\n# low resolution versions of those images\ndef get_training_data_48(images_location):\n  y_source_image = []\n  X_lowres_image = []\n\n  for img in os.listdir(images_location):\n    try:\n      image = cv2.imread(f"{images_location}/{img}", cv2.IMREAD_UNCHANGED)\n      reshaped_image = cv2.resize(image, (144, 144))\n      image_rgb = cv2.cvtColor(reshaped_image, cv2.COLOR_BGR2RGB)\n      if reshaped_image.shape[-1] == 3:\n        y_source_image.append(image_rgb)\n\n      image = cv2.resize(image, (48, 48))\n      reshaped_image = cv2.resize(image, (144, 144))\n      image_rgb = cv2.cvtColor(reshaped_image, cv2.COLOR_BGR2RGB)\n      if reshaped_image.shape[-1] == 3:\n        X_lowres_image.append(image_rgb)\n\n    except Exception as e:\n      # print(str(e))\n      pass\n      \n\n  return (np.array(X_lowres_image), np.array(y_source_image))\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"lowres_images, source_images = get_training_data_48(DATA_DIR)\nprint(lowres_images.shape, source_images.shape)\n# (13233, 144, 144, 3) (13233, 144, 144, 3)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'plt.figure(figsize=(12, 6))\n\nplt.subplot(1, 2, 1)\nplt.title("Original Image")\nplt.axis(False)\nplt.imshow(source_images[13131])\n\nplt.subplot(1, 2, 2)\nplt.title("Low-res Image")\nplt.axis(False)\nplt.imshow(lowres_images[13131])\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Autoencoder Super-Resolution",src:s(279427).Z+"",width:"950",height:"465"})}),"\n",(0,i.jsx)(n.h2,{id:"build-the-autoencoder",children:"Build the Autoencoder"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"input_img = tf.keras.layers.Input(shape=(144, 144, 3))\n\nl1 = Conv2D(64, (3, 3), padding='same', kernel_initializer='he_uniform', activation='relu', activity_regularizer=tf.keras.regularizers.l1(10e-10))(input_img)\nl2 = Conv2D(64, (3, 3), padding='same', kernel_initializer='he_uniform', activation='relu', activity_regularizer=tf.keras.regularizers.l1(10e-10))(l1)\nl3 = MaxPool2D(padding='same')(l2)\n\nl4 = Conv2D(128, (3, 3), padding='same', kernel_initializer='he_uniform', activation='relu', activity_regularizer=tf.keras.regularizers.l1(10e-10))(l3)\nl5 = Conv2D(128, (3, 3), padding='same', kernel_initializer='he_uniform', activation='relu', activity_regularizer=tf.keras.regularizers.l1(10e-10))(l4)\nl6 = MaxPool2D(padding='same')(l5)\n\nl7 = Conv2D(256, (3, 3), padding='same', kernel_initializer='he_uniform', activation='relu', activity_regularizer=tf.keras.regularizers.l1(10e-10))(l6)\n\nl8 = UpSampling2D()(l7)\nl9 = Conv2D(128, (3, 3), padding='same', kernel_initializer='he_uniform', activation='relu', activity_regularizer=tf.keras.regularizers.l1(10e-10))(l8)\nl10 = Conv2D(128, (3, 3), padding='same', kernel_initializer='he_uniform', activation='relu', activity_regularizer=tf.keras.regularizers.l1(10e-10))(l9)\n\nl11 = tf.keras.layers.add([l10, l5])\n\nl12 = UpSampling2D()(l11)\nl13 = Conv2D(64, (3, 3), padding='same', kernel_initializer='he_uniform', activation='relu', activity_regularizer=tf.keras.regularizers.l1(10e-10))(l12)\nl14 = Conv2D(64, (3, 3), padding='same', kernel_initializer='he_uniform', activation='relu', activity_regularizer=tf.keras.regularizers.l1(10e-10))(l13)\n\nl15 = tf.keras.layers.add([l14, l2])\n\ndecoded_image = Conv2D(3, (3, 3), padding='same', kernel_initializer='he_uniform', activation='relu', activity_regularizer=tf.keras.regularizers.l1(10e-10))(l15)\n\nauto_encoder = Model(inputs=(input_img), outputs=decoded_image)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"tf.random.set_seed=SEED\nauto_encoder.compile(optimizer='adadelta', loss='mean_squared_error')\nauto_encoder.summary()\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"auto_encoder.fit(lowres_images,\n                 source_images,\n                 epochs=25,\n                 batch_size=BATCH_SIZE,\n                 shuffle=True)\n\n# Epoch 1/5\n# 229s 525ms/step - loss: 6488.4028\n# Epoch 2/25\n# 213s 514ms/step - loss: 4692.7637\n# Epoch 3/25\n# 211s 511ms/step - loss: 1421.0702\n# Epoch 4/25\n# 211s 510ms/step - loss: 543.7433\n# Epoch 5/25\n# 211s 509ms/step - loss: 414.3141\n# Epoch 6/25\n# 194s 468ms/step - loss: 357.2447\n# Epoch 7/25\n# 194s 467ms/step - loss: 320.0330\n# Epoch 8/25\n# 193s 467ms/step - loss: 294.0082\n# Epoch 9/25\n# 193s 467ms/step - loss: 274.6338\n# Epoch 10/25\n# 193s 467ms/step - loss: 259.9402\n# Epoch 11/25\n# 193s 467ms/step - loss: 248.2195\n# Epoch 12/25\n# 193s 467ms/step - loss: 238.6665\n# Epoch 13/25\n# 193s 467ms/step - loss: 230.7052\n# Epoch 14/25\n# 193s 467ms/step - loss: 224.1879\n# Epoch 15/25\n# 193s 467ms/step - loss: 218.4927\n# Epoch 16/25\n# 193s 467ms/step - loss: 213.6586\n# Epoch 17/25\n# 193s 467ms/step - loss: 209.4044\n# Epoch 18/25\n# 193s 467ms/step - loss: 205.5302\n# Epoch 19/25\n# 193s 467ms/step - loss: 202.2275\n# Epoch 20/25\n# 193s 467ms/step - loss: 199.2723\n# Epoch 21/25\n# 193s 467ms/step - loss: 196.5294\n# Epoch 22/25\n# 193s 467ms/step - loss: 187.7074\n# Epoch 23/25\n# 193s 467ms/step - loss: 171.8884\n# Epoch 24/25\n# 193s 467ms/step - loss: 169.2720\n# Epoch 25/25\n# 193s 467ms/step - loss: 167.2259\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"upscaled_images = auto_encoder.predict(lowres_images[0:9])\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# plot results\nplt.figure(figsize=(12, 12))\n# ROW 1\nplt.subplot(3, 3, 1)\nplt.title("Original Image")\nplt.axis(False)\nplt.imshow(source_images[3])\nplt.subplot(3, 3, 2)\nplt.title("Low-Res Image")\nplt.axis(False)\nplt.imshow(lowres_images[3])\nplt.subplot(3, 3, 3)\nplt.title("Upscaled Image")\nplt.axis(False)\nplt.imshow(upscaled_images[3]/255)\n# ROW 2\nplt.subplot(3, 3, 4)\nplt.title("Original Image")\nplt.axis(False)\nplt.imshow(source_images[4])\nplt.subplot(3, 3, 5)\nplt.title("Low-Res Image")\nplt.axis(False)\nplt.imshow(lowres_images[4])\nplt.subplot(3, 3, 6)\nplt.title("Upscaled Image")\nplt.axis(False)\nplt.imshow(upscaled_images[4]/255)\n# ROW 3\nplt.subplot(3, 3, 7)\nplt.title("Original Image")\nplt.axis(False)\nplt.imshow(source_images[5])\nplt.subplot(3, 3, 8)\nplt.title("Low-Res Image")\nplt.axis(False)\nplt.imshow(lowres_images[5])\nplt.subplot(3, 3, 9)\nplt.title("Upscaled Image")\nplt.axis(False)\nplt.imshow(upscaled_images[5]/255)\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Autoencoder Super-Resolution",src:s(603546).Z+"",width:"948",height:"966"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Autoencoder Super-Resolution",src:s(910142).Z+"",width:"948",height:"966"})}),"\n",(0,i.jsx)(n.h1,{id:"re-run-with-a-lower-compression-factor",children:"Re-run with a lower Compression Factor"}),"\n",(0,i.jsx)(n.p,{children:"In this example the reconstructed image looks very close to the low-resolution input image - which is already impressive knowing how much this information has been condensed. The original paper this is based on used larger 224x224px input images with a lower compression factor than the example above:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"144x144px input images"}),"\n",(0,i.jsx)(n.li,{children:"Compressed to 48x48px"}),"\n",(0,i.jsx)(n.li,{children:"Inflated back to 144x144px"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["I cannot go higher with the resolution of the input image since this makes my graphic card very unhappy :(. But I can decrease the compression factor to give my model more details to work with - ",(0,i.jsx)(n.code,{children:"144"})," -> ",(0,i.jsx)(n.code,{children:"72"})," -> ",(0,i.jsx)(n.code,{children:"144"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def get_training_data_72(images_location):\n  y_source_image = []\n  X_lowres_image = []\n\n  for img in os.listdir(images_location):\n    try:\n      image = cv2.imread(f"{images_location}/{img}", cv2.IMREAD_UNCHANGED)\n      reshaped_image = cv2.resize(image, (144, 144))\n      image_rgb = cv2.cvtColor(reshaped_image, cv2.COLOR_BGR2RGB)\n      if reshaped_image.shape[-1] == 3:\n        y_source_image.append(image_rgb)\n\n      image = cv2.resize(image, (72, 72))\n      reshaped_image = cv2.resize(image, (144, 144))\n      image_rgb = cv2.cvtColor(reshaped_image, cv2.COLOR_BGR2RGB)\n      if reshaped_image.shape[-1] == 3:\n        X_lowres_image.append(image_rgb)\n\n    except Exception as e:\n      # print(str(e))\n      pass\n      \n\n  return (np.array(X_lowres_image), np.array(y_source_image))\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"lowres_images_72, source_images_72 = get_training_data_72(DATA_DIR)\nprint(lowres_images_72.shape, source_images_72.shape)\n# (13233, 144, 144, 3) (13233, 144, 144, 3)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'plt.figure(figsize=(12, 6))\n\nplt.subplot(1, 2, 1)\nplt.title("Original Image")\nplt.axis(False)\nplt.imshow(source_images_72[13131])\n\nplt.subplot(1, 2, 2)\nplt.title("Low-res Image")\nplt.axis(False)\nplt.imshow(lowres_images_72[13131])\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Autoencoder Super-Resolution",src:s(102475).Z+"",width:"950",height:"465"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"auto_encoder.fit(lowres_images_72,\n                 source_images_72,\n                 epochs=25,\n                 batch_size=BATCH_SIZE,\n                 shuffle=True)\n\n# Epoch 1/25\n# 262s 633ms/step - loss: 103.1866\n# Epoch 2/25\n# 229s 553ms/step - loss: 97.3206\n# Epoch 3/25\n# 229s 553ms/step - loss: 93.4157\n# Epoch 4/25\n# 229s 553ms/step - loss: 90.4040\n# Epoch 5/25\n# 232s 560ms/step - loss: 87.6966\n# Epoch 6/25\n# 261s 631ms/step - loss: 85.4864\n# Epoch 7/25\n# 244s 589ms/step - loss: 83.4865\n# Epoch 8/25\n# 230s 555ms/step - loss: 81.8133\n# Epoch 9/25\n# 230s 556ms/step - loss: 80.1447\n# Epoch 10/25\n# 228s 550ms/step - loss: 78.6784\n# Epoch 11/25\n# 232s 560ms/step - loss: 77.3202\n# Epoch 12/25\n# 223s 538ms/step - loss: 76.0533\n# Epoch 13/25\n# 222s 536ms/step - loss: 74.9465\n# Epoch 14/25\n# 212s 512ms/step - loss: 73.8465\n# Epoch 15/25\n# 228s 552ms/step - loss: 72.7948\n# Epoch 16/25\n# 256s 618ms/step - loss: 71.9504\n# Epoch 17/25\n# 240s 579ms/step - loss: 71.0116\n# Epoch 18/25\n# 252s 608ms/step - loss: 70.2642\n# Epoch 19/25\n# 270s 652ms/step - loss: 69.4523\n# Epoch 20/25\n# 266s 642ms/step - loss: 68.6822\n# Epoch 21/25\n# 262s 632ms/step - loss: 67.9245\n# Epoch 22/25\n# 321s 776ms/step - loss: 67.3510\n# Epoch 23/25\n# 325s 784ms/step - loss: 66.6649\n# Epoch 24/25\n# 260s 627ms/step - loss: 66.0176\n# Epoch 25/25\n# 273s 660ms/step - loss: 65.4639\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"upscaled_images_72 = auto_encoder.predict(lowres_images_72[0:9])\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# plot results\nplt.figure(figsize=(12, 12))\n# ROW 1\nplt.subplot(3, 3, 1)\nplt.title("Original Image")\nplt.axis(False)\nplt.imshow(source_images_72[0])\nplt.subplot(3, 3, 2)\nplt.title("Low-Res Image")\nplt.axis(False)\nplt.imshow(lowres_images_72[0])\nplt.subplot(3, 3, 3)\nplt.title("Upscaled Image")\nplt.axis(False)\nplt.imshow(upscaled_images_72[0]/255)\n# ROW 2\nplt.subplot(3, 3, 4)\nplt.title("Original Image")\nplt.axis(False)\nplt.imshow(source_images_72[1])\nplt.subplot(3, 3, 5)\nplt.title("Low-Res Image")\nplt.axis(False)\nplt.imshow(lowres_images_72[1])\nplt.subplot(3, 3, 6)\nplt.title("Upscaled Image")\nplt.axis(False)\nplt.imshow(upscaled_images_72[1]/255)\n# ROW 3\nplt.subplot(3, 3, 7)\nplt.title("Original Image")\nplt.axis(False)\nplt.imshow(source_images_72[2])\nplt.subplot(3, 3, 8)\nplt.title("Low-Res Image")\nplt.axis(False)\nplt.imshow(lowres_images_72[2])\nplt.subplot(3, 3, 9)\nplt.title("Upscaled Image")\nplt.axis(False)\nplt.imshow(upscaled_images_72[2]/255)\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Autoencoder Super-Resolution",src:s(708829).Z+"",width:"948",height:"966"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Autoencoder Super-Resolution",src:s(801570).Z+"",width:"948",height:"966"})}),"\n",(0,i.jsx)(n.p,{children:"Now this does look a lot better. There is a clear improvement over the low-resolution image. But it is not yet directly compareable in details to the source image."})]})}function d(e={}){const{wrapper:n}={...(0,a.ah)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},603905:(e,n,s)=>{s.d(n,{ah:()=>c});var i=s(667294);function a(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function r(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,i)}return s}function o(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?r(Object(s),!0).forEach((function(n){a(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function t(e,n){if(null==e)return{};var s,i,a=function(e,n){if(null==e)return{};var s,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)s=r[i],n.indexOf(s)>=0||(a[s]=e[s]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)s=r[i],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),s=n;return e&&(s="function"==typeof e?e(n):o(o({},n),e)),s},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var s=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=t(e,["components","mdxType","originalType","parentName"]),g=c(s),h=a,u=g["".concat(l,".").concat(h)]||g[h]||p[h]||r;return s?i.createElement(u,o(o({ref:n},d),{},{components:s})):i.createElement(u,o({ref:n},d))}));d.displayName="MDXCreateElement"},531097:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/05_Tensorflow_Unsupervised_Learning_12-703c6cbbb9e96d542e0b92abebb9366f.png"},279427:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/05_Tensorflow_Unsupervised_Learning_13-d6100fe4b7ebe256dde206c7ed78fe98.png"},603546:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/05_Tensorflow_Unsupervised_Learning_14-537f26f6d49163fdaf7d502c2b91a39f.png"},910142:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/05_Tensorflow_Unsupervised_Learning_15-0367b99b6d517e5f31e1ea20ef87dfc9.png"},102475:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/05_Tensorflow_Unsupervised_Learning_16-050375e1850251760aae918d9f8372c8.png"},708829:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/05_Tensorflow_Unsupervised_Learning_17-73d5a5ed69a32e574060560961587779.png"},801570:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/05_Tensorflow_Unsupervised_Learning_18-1d6db270b7d3491f12e4fe127ec512e1.png"},803551:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-da0f4433cfd061cf6ed148c34ca4eb14.jpg"}}]);