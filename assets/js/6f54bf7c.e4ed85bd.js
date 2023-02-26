"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[75671],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6243:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={sidebar_position:4650,slug:"2023-02-23",title:"Tensorflow 2 - Neural Network Regression",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Building a Regression Model and Improving it's Performance"},i=void 0,l={unversionedId:"IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression/index",id:"IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression/index",title:"Tensorflow 2 - Neural Network Regression",description:"Building a Regression Model and Improving it's Performance",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression",slug:"/IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression/2023-02-23",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression/2023-02-23",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4650,frontMatter:{sidebar_position:4650,slug:"2023-02-23",title:"Tensorflow 2 - Neural Network Regression",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Building a Regression Model and Improving it's Performance"},sidebar:"tutorialSidebar",previous:{title:"Tensorflow 2 - Neural Network Regression",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-24-tensorflow-neural-network-regression-evaluation/2023-02-24"},next:{title:"Tensorflow 2 - An (Re)Introduction 2023 (3)",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3/2023-02-22"}},s={},p=[{value:"Create a Dataset",id:"create-a-dataset",level:2},{value:"Input and Output Shapes",id:"input-and-output-shapes",level:2},{value:"Building the Model",id:"building-the-model",level:2},{value:"Making Predictions",id:"making-predictions",level:3},{value:"Improving the Model",id:"improving-the-model",level:2},{value:"Making Predictions",id:"making-predictions-1",level:3}],d={toc:p};function c(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Guangzhou, China",src:t(94298).Z,width:"2830",height:"1272"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tensorflow-neural-network-regression"},"Tensorflow Neural Network Regression"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-a-dataset"},"Create a Dataset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#input-and-output-shapes"},"Input and Output Shapes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#building-the-model"},"Building the Model"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#making-predictions"},"Making Predictions")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#improving-the-model"},"Improving the Model"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#making-predictions-1"},"Making Predictions"))))))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See also:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fun, fun, tensors: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-19-tensorflow-introduction/2023-02-19"},"1"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-21-tensorflow-tensors-2/2023-02-21"},"2"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3/2023-02-22"},"3")),(0,r.kt)("li",{parentName:"ul"},"Tensorflow 2 - Neural Network Regression: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression/2023-02-23"},"Building a Regression Model"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-24-tensorflow-neural-network-regression-evaluation/2023-02-24"},"Model Evaluation"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/2023-02-25"},"Model Optimization"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/2023-02-26"},'Working with a "Real" Dataset'),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/2023-02-26"},"Feature Scaling"))),(0,r.kt)("h1",{id:"tensorflow-neural-network-regression"},"Tensorflow Neural Network Regression"),(0,r.kt)("p",null,"Using Tensorflow to predict a numerical variable based on other combination of variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import tensorflow as tf\n# print(tf.__version__)\n# 2.11.0\nfrom tensorflow.keras import Sequential, layers, optimizers\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nimport matplotlib.pyplot as plt\n")),(0,r.kt)("h2",{id:"create-a-dataset"},"Create a Dataset"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"## create features\nX = np.array([-140., -110., -80., -50., -20., 10., 40., 70., 100., 130., 160., 190., 220., 250,])\n## create labels\ny = np.array([1., 4., 7., 10., 13., 16., 19., 22., 25., 28., 31., 34., 37., 40,])\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"## visualize dataset\nplt.scatter(X, y)\nplt.show\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Neural Network Regression",src:t(11832).Z,width:"543",height:"413"})),(0,r.kt)("h2",{id:"input-and-output-shapes"},"Input and Output Shapes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# create tensors from np arrays\nX = tf.cast(tf.constant(X), dtype=tf.float32)\ny = tf.cast(tf.constant(y), dtype=tf.float32)\n\n# test shape\ninput_shape = X.shape\noutput_shape = y.shape\ninput_shape, output_shape\n## (TensorShape([8]), TensorShape([8]))\n")),(0,r.kt)("h2",{id:"building-the-model"},"Building the Model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# set random seed\ntf.random.set_seed(42)\n\n# build a sequential model with Keras\nmodel = Sequential([\n    layers.Dense(1)\n])\n\n# compile the model\nmodel.compile(\n    loss="mae",\n    optimizer="sgd",\n    metrics=["mae"])\n\n# model training\n## error message: "Input 0 of layer "dense_3" is incompatible with the layer: expected min_ndim=2, found ndim=1. Full shape received: (None,)"\n# => needed to expand input shape\nmodel.fit(tf.expand_dims(X, axis=-1), y, epochs=99)\n## Epoch 99/99\n## 1/1 [==============================] - 0s 4ms/step - loss: 14.8669 - mae: 14.8669\n')),(0,r.kt)("h3",{id:"making-predictions"},"Making Predictions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model.predict([70.])\n# a X value of 100 would correspond to a y value of 25.0\n# with an mae: 17.4613 we can expect to be around 17.5 points of with our prediction:\n## array([[29.203451]], dtype=float32)\n# we get 29.2 instead of the expected 25.0\n")),(0,r.kt)("h2",{id:"improving-the-model"},"Improving the Model"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Creation"),": add more layers / change activation function / prevent overfitting with dropouts"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Compilation"),": change optimization function / adjusting the learning rate"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Fitting"),": add more epochs / add more data / training-testing split validation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# train / test split\nX_Split = np.array_split(X,2)\nX_train = tf.cast(tf.constant(X_Split[0]), dtype=tf.float32)\nx_test = tf.cast(tf.constant(X_Split[1]), dtype=tf.float32)\n\nY_Split = np.array_split(y,2)\nY_train = tf.cast(tf.constant(Y_Split[0]), dtype=tf.float32)\ny_test = tf.cast(tf.constant(Y_Split[1]), dtype=tf.float32)\n\nX_train.shape, x_test.shape\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# set random seed\ntf.random.set_seed(42)\n\n# build a sequential model with Keras\nmodel_improved = Sequential([\n    layers.Dense(128, activation="relu"),\n    layers.Dense(128, activation="relu"),\n    layers.Dropout(.2),\n    layers.Dense(64, activation="relu"),\n    layers.Dense(1)\n])\n\n# compile the model\nmodel_improved.compile(\n    loss="mae",\n    optimizer=optimizers.Adam(learning_rate=0.01),\n    metrics=["mae"])\n\n# model training\nmodel_improved.fit(tf.expand_dims(X_train, axis=-1), Y_Split, validation_data=(x_test, y_test), epochs=99)\n# Epoch 99/99\n# 1/1 [==============================] - 0s 27ms/step - loss: 4.0467 - mae: 4.0467 - val_loss: 2.8862 - val_mae: 2.8862\n')),(0,r.kt)("h3",{id:"making-predictions-1"},"Making Predictions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model_improved.predict([160.])\n# expected y=31 for X value of 160 and got:\n## array([[28.041351]], dtype=float32)\n")))}c.isMDXComponent=!0},11832:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/01a_Tensorflow_Regressions_01-4f2f97075ffa23e79537e07c5f0d6194.png"},94298:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-f80e63ee872dae25129198058ac93b4e.jpg"}}]);