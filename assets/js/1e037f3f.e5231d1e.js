"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[80082],{190168:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=a(785893),r=a(603905);const i={sidebar_position:4720,slug:"2023-02-16",title:"Keras for Tensorflow - Artificial Neural Networks",authors:"mpolinowski",tags:["Python","Machine Learning","Keras","Tensorflow"],description:"Building a deep neural network using the MNIST dataset."},t=void 0,o={id:"IoT-and-Machine-Learning/ML/2023-02-16-keras-introduction-ann/index",title:"Keras for Tensorflow - Artificial Neural Networks",description:"Building a deep neural network using the MNIST dataset.",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-02-16-keras-introduction-ann/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-02-16-keras-introduction-ann",slug:"/IoT-and-Machine-Learning/ML/2023-02-16-keras-introduction-ann/2023-02-16",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-16-keras-introduction-ann/2023-02-16",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-02-16-keras-introduction-ann/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Keras",permalink:"/docs/tags/keras"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4720,frontMatter:{sidebar_position:4720,slug:"2023-02-16",title:"Keras for Tensorflow - Artificial Neural Networks",authors:"mpolinowski",tags:["Python","Machine Learning","Keras","Tensorflow"],description:"Building a deep neural network using the MNIST dataset."},sidebar:"tutorialSidebar",previous:{title:"Keras for Tensorflow - Convolutional Neural Networks",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-17-keras-introduction-cnn/2023-02-17"},next:{title:"YOLOv8 with AS-One",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-15-as-one-yolo-object-tracking/2023-02-15"}},l={},c=[{value:"MNIST Datasets",id:"mnist-datasets",level:2},{value:"Data Pre-Processing",id:"data-pre-processing",level:2},{value:"Building the Model",id:"building-the-model",level:2},{value:"Training the Model",id:"training-the-model",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Guangzhou, China",src:a(660189).Z+"",width:"2830",height:"1272"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#mnist-datasets",children:"MNIST Datasets"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#data-pre-processing",children:"Data Pre-Processing"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#building-the-model",children:"Building the Model"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#training-the-model",children:"Training the Model"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mpolinowski/tf-keras-2023",children:"Github Repository"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://keras.io/getting_started/",children:"Keras"})," is built on top of TensorFlow 2 and provides an API designed for human beings. Keras follows best practices for reducing cognitive load: it offers consistent & simple APIs, it minimizes the number of user actions required for common use cases, and it provides clear & actionable error messages."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"See also:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-14-keras-introduction/2023-02-14",children:"Keras for Tensorflow - An (Re)Introduction 2023"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-16-keras-introduction-ann/2023-02-16",children:"Keras for Tensorflow - Artificial Neural Networks"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-17-keras-introduction-cnn/2023-02-17",children:"Keras for Tensorflow - Convolutional Neural Networks"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-18-keras-introduction-vgg16/2023-02-18",children:"Keras for Tensorflow - VGG16 Network Architecture"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-18-keras-introduction-rnn/2023-02-18",children:"Keras for Tensorflow - Recurrent Neural Networks"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"mnist-datasets",children:"MNIST Datasets"}),"\n",(0,s.jsx)(n.p,{children:"Keras gives us access to several datasets that we can use to train our models - for example MNIST:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"import numpy as np\nimport matplotlib.pyplot as plt\n\nfrom keras.datasets import mnist\nfrom keras.models import Sequential\nfrom keras.layers import Dense\nfrom keras.utils import to_categorical\n\n# using the mnist dataset\n(x_train, y_train), (x_test, y_test) = mnist.load_data()\n"})}),"\n",(0,s.jsx)(n.p,{children:"We can print the shape of the dataset to see that we have 60k training images and 10k images for validation - all 28x28 pixel in size. We can also use Matplotlib to display a sample image:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"print(x_train.shape, x_test.shape)\n# (60000, 28, 28) (10000, 28, 28)\n\nplt.imshow(x_train[666])\nplt.show()\n"})}),"\n",(0,s.jsx)(n.p,{children:"To check the assigned label we can run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"print(y_train[666])\n# 0\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The image shows the number ",(0,s.jsx)(n.code,{children:"0"})," and this is also the assigned label for it:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Keras for Tensorflow - Artificial Neural Networks",src:a(134281).Z+"",width:"1132",height:"540"})}),"\n",(0,s.jsx)(n.h2,{id:"data-pre-processing",children:"Data Pre-Processing"}),"\n",(0,s.jsxs)(n.p,{children:["The features inside our image are represented with a number range of ",(0,s.jsx)(n.code,{children:"0"})," - ",(0,s.jsx)(n.code,{children:"255"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"# data pre-processing\n## normalize training images\n## start by creating a single column 28x28=>784\nx_train = x_train.reshape(60000, 784)\nx_test = x_test.reshape(10000, 784)\n\nx_train = x_train.astype('float32')\nx_test = x_test.astype('float32')\n\nprint(x_train[666])\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[  ...\n   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.\n  50. 237. 203.  75.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.  37.\n 232. 254. 254. 244.  15.   0.   0.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   9. 156.\n 254. 209. 250. 254. 131.   0.   0.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.  31. 233.\n 163.  11. 143. 254. 233.  25.   0.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   9. 164. 192.\n  11.   0.  74. 253. 254.  89.   0.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   3. 122. 254. 195.\n   0.   0.   0.  95. 254.  89.   0.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   9. 254. 231.  44.\n   0.   0.   0. 127. 254. 146.   0.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0.   0.   0.  11. 192. 254.  95.   0.\n   0.   0.   0.  65. 254. 207.   0.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0.   0.   0. 127. 254. 220.  35.   0.\n   0.   0.   0.  12. 254. 237.  45.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0.   0.  21. 233. 253.  86.   0.   0.\n   0.   0.   0.  12. 255. 254.  71.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0.   0. 181. 254. 249.   0.   0.   0.\n   0.   0.   0.  12. 254. 254.  71.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0.   0. 208. 254. 148.   0.   0.   0.\n   0.   0.   0. 113. 254. 237.  45.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0. 119. 250. 254. 129.   0.   0.   0.\n   0.   0.   0. 183. 254. 207.   0.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0. 190. 254. 254.  13.   0.   0.   0.\n   0.   0. 112. 254. 254.  91.   0.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0. 190. 254. 192.   5.   0.   0.   0.\n   0.  12. 185. 254. 251.  78.   0.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0. 190. 254. 147.   0.   0.   0.   0.\n   0. 173. 254. 252. 128.   0.   0.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0. 190. 254. 225.  40.  66.  25.  16.\n 102. 243. 254. 212.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0.  96. 254. 254. 230. 254. 221. 214.\n 254. 254. 217.  28.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0.  10. 167. 254. 254. 254. 254. 254.\n 254. 217.  86.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0.   0.   6.  67. 194. 254. 254. 227.\n 100.  11.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.\n   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.   0.\n   ...\n   ]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We have to normalize them to range between ",(0,s.jsx)(n.code,{children:"0"})," and ",(0,s.jsx)(n.code,{children:"1"})," by dividing their values by ",(0,s.jsx)(n.code,{children:"255"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"x_train /=255\nx_test /=255\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now we have to represent the labels as vectors - so turning our ",(0,s.jsx)(n.code,{children:"0"})," label into ",(0,s.jsx)(n.code,{children:"[1. 0. 0. 0. 0. 0. 0. 0. 0. 0.]"}),". And Keras provides us with the right utility to do that - ",(0,s.jsx)(n.code,{children:"to_categorical()"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"# vectorize labels for the 10 categories from 0-9\ny_train = to_categorical(y_train, 10)\ny_test = to_categorical(y_test, 10)\nprint(y_train[666])\n# [1. 0. 0. 0. 0. 0. 0. 0. 0. 0.]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"building-the-model",children:"Building the Model"}),"\n",(0,s.jsxs)(n.p,{children:["We need to build a sequential model with two dense layers. The first one receives our preprocessed images that have a shape of ",(0,s.jsx)(n.code,{children:"28x28=784"}),". In the second layer the input shape is given by the previous layer and does not need to be defined. The output uses a ",(0,s.jsx)(n.code,{children:"softmax"})," activation - so all label will receive a probability and in the end we will pick the one that has the highest to be our predicted label:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://keras.io/api/layers/activations/",children:"Activation Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"relu function: Rectified linear unit activation function"}),"\n",(0,s.jsxs)(n.li,{children:["sigmoid function: For ",(0,s.jsx)(n.strong,{children:"binary classifications"})]}),"\n",(0,s.jsxs)(n.li,{children:["softmax function: For ",(0,s.jsx)(n.strong,{children:"multi-label classifications"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"# building the model\nmodel = Sequential()\n\nmodel.add(Dense(128, activation='relu', input_shape=(784, )))\nmodel.add(Dense(128, activation='relu'))\n\nmodel.add(Dense(10, activation='softmax'))\n\nmodel.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])\nmodel.summary()\n"})}),"\n",(0,s.jsx)(n.p,{children:"The compiled model now looks like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Model: "sequential"\n_________________________________________________________________\n Layer (type)                Output Shape              Param #   \n=================================================================\n dense (Dense)               (None, 128)               100480    \n                                                                 \n dense_1 (Dense)             (None, 128)               16512     \n                                                                 \n dense_2 (Dense)             (None, 10)                1290      \n                                                                 \n=================================================================\nTotal params: 118,282\nTrainable params: 118,282\nNon-trainable params: 0\n_________________________________________________________________\n'})}),"\n",(0,s.jsx)(n.h2,{id:"training-the-model",children:"Training the Model"}),"\n",(0,s.jsx)(n.p,{children:"Now we have our data and a model. Next step is to fit the model to our training data and see if we can start making label predictions based off our validation data. Let's start by running a 10 epochs long training cycle using 128 images per batch:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"# fitting the model\nmodel.fit(x_train, y_train, batch_size=128, epochs=10)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"469/469 [==============================] - 4s 2ms/step - loss: 0.3179 - accuracy: 0.9097\nEpoch 2/10\n469/469 [==============================] - 1s 2ms/step - loss: 0.1278 - accuracy: 0.9620\nEpoch 3/10\n469/469 [==============================] - 1s 2ms/step - loss: 0.0882 - accuracy: 0.9731\nEpoch 4/10\n469/469 [==============================] - 1s 2ms/step - loss: 0.0646 - accuracy: 0.9803\nEpoch 5/10\n469/469 [==============================] - 1s 2ms/step - loss: 0.0497 - accuracy: 0.9851\nEpoch 6/10\n469/469 [==============================] - 1s 2ms/step - loss: 0.0403 - accuracy: 0.9875\nEpoch 7/10\n469/469 [==============================] - 1s 2ms/step - loss: 0.0323 - accuracy: 0.9902\nEpoch 8/10\n469/469 [==============================] - 1s 2ms/step - loss: 0.0263 - accuracy: 0.9915\nEpoch 9/10\n469/469 [==============================] - 1s 2ms/step - loss: 0.0220 - accuracy: 0.9929\nEpoch 10/10\n469/469 [==============================] - 1s 2ms/step - loss: 0.0197 - accuracy: 0.9936\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We can see the accuracy increasing from ",(0,s.jsx)(n.code,{children:"0.9097"})," to ",(0,s.jsx)(n.code,{children:"0.9936"})," and the loss decreasing from ",(0,s.jsx)(n.code,{children:"0.3179"})," to ",(0,s.jsx)(n.code,{children:"0.0197"}),". To evaluate the fitted model we can now use our validation dataset and see how accurate it can classify those images:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"# validation run\nval_loss, val_score = model.evaluate(x_test, y_test)\nprint(val_loss, val_score)\n# 0.07639817893505096 0.9789999723434448\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now it is time to run a prediction with our model:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"# run prediction\npred = model.predict(x_test)\n\n## show prediction probabilities\nprint(pred[666])\n## print label with highest probability\npred_max = np.argmax(pred, axis=1)\nprint(pred_max[666])\n\n## show corresponding image\n## reshaping data 784 => 28x28\n## to be able to show the image\nx = x_test[666].reshape(28, 28)\nplt.imshow(x)\nplt.show()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The image looks like a ",(0,s.jsx)(n.code,{children:"7"})," and the prediction also assigns ",(0,s.jsx)(n.code,{children:"7"})," by far the highest probability ","\ud83d\udc4d"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# prediction probabilities\n[8.6091750e-10 4.5242775e-08 6.5181263e-07 1.2005190e-06 1.4038225e-11\n 1.9814760e-10 3.8750800e-15 9.9999774e-01 4.4739803e-09 3.6081954e-07]\n# predicted label with highest probability\n7\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Keras for Tensorflow - Artificial Neural Networks",src:a(178262).Z+"",width:"1354",height:"445"})})]})}function h(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},603905:(e,n,a)=>{a.d(n,{ah:()=>c});var s=a(667294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,s)}return a}function t(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,s,r=function(e,n){if(null==e)return{};var a,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)a=i[s],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=s.createContext({}),c=function(e){var n=s.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):t(t({},n),e)),a},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},h=s.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,_=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return a?s.createElement(_,t(t({ref:n},h),{},{components:a})):s.createElement(_,t({ref:n},h))}));h.displayName="MDXCreateElement"},134281:(e,n,a)=>{a.d(n,{Z:()=>s});const s=a.p+"assets/images/Keras_Introduction_MNIST_Model_Training_01-1685dd47eac76a7d0f4b5e4793abe6a5.png"},178262:(e,n,a)=>{a.d(n,{Z:()=>s});const s=a.p+"assets/images/Keras_Introduction_MNIST_Model_Training_02-d1e5e3375effe244b26c277508c63e6b.png"},660189:(e,n,a)=>{a.d(n,{Z:()=>s});const s=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-f80e63ee872dae25129198058ac93b4e.jpg"}}]);