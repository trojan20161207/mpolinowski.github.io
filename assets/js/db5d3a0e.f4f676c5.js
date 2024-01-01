"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[91089],{350788:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=i(785893),s=i(603905);const r={sidebar_position:4600,slug:"2023-02-27",title:"Tensorflow 2 - Neural Network Classification",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Working with a non-linear dataset and activation functions"},t="Tensorflow Neural Network Classification",o={id:"IoT-and-Machine-Learning/ML/2023-02-27-tensorflow-neural-network-classification/index",title:"Tensorflow 2 - Neural Network Classification",description:"Working with a non-linear dataset and activation functions",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-02-27-tensorflow-neural-network-classification/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-02-27-tensorflow-neural-network-classification",slug:"/IoT-and-Machine-Learning/ML/2023-02-27-tensorflow-neural-network-classification/2023-02-27",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-27-tensorflow-neural-network-classification/2023-02-27",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-02-27-tensorflow-neural-network-classification/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4600,frontMatter:{sidebar_position:4600,slug:"2023-02-27",title:"Tensorflow 2 - Neural Network Classification",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Working with a non-linear dataset and activation functions"},sidebar:"tutorialSidebar",previous:{title:"Tensorflow 2 - Neural Network Classification",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-28-tensorflow-neural-network-classification-model-evaluation/2023-02-28"},next:{title:"Tensorflow 2 - Neural Network Regression",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/2023-02-26"}},l={},c=[{value:"Classification Problems",id:"classification-problems",level:2},{value:"Working with Non-Linear Datasets",id:"working-with-non-linear-datasets",level:2},{value:"Building the Model",id:"building-the-model",level:2},{value:"Why it Fails",id:"why-it-fails",level:3},{value:"Non Linearity",id:"non-linearity",level:2},{value:"Non-linear Activation Functions",id:"non-linear-activation-functions",level:2},{value:"Linear Activation Function",id:"linear-activation-function",level:3},{value:"Sigmoid Activation Function",id:"sigmoid-activation-function",level:3},{value:"reLU Activation Function",id:"relu-activation-function",level:3}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.ah)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"TST, Hong Kong",src:i(943487).Z+"",width:"1500",height:"557"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"#tensorflow-neural-network-classification",children:"Tensorflow Neural Network Classification"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"#classification-problems",children:"Classification Problems"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"#working-with-non-linear-datasets",children:"Working with Non-Linear Datasets"})}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"#building-the-model",children:"Building the Model"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"#why-it-fails",children:"Why it Fails"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"#non-linearity",children:"Non Linearity"})}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"#non-linear-activation-functions",children:"Non-linear Activation Functions"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"#linear-activation-function",children:"Linear Activation Function"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"#sigmoid-activation-function",children:"Sigmoid Activation Function"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"#relu-activation-function",children:"reLU Activation Function"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/mpolinowski/tf-2023",children:"Github Repository"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.em,{children:"See also:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Fun, fun, tensors: ",(0,a.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-19-tensorflow-introduction/2023-02-19",children:"Tensor Constants, Variables and Attributes"}),", ",(0,a.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-21-tensorflow-tensors-2/2023-02-21",children:"Tensor Indexing, Expanding and Manipulations"}),", ",(0,a.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3/2023-02-22",children:"Matrix multiplications, Squeeze, One-hot and Numpy"})]}),"\n",(0,a.jsxs)(e.li,{children:["Tensorflow 2 - Neural Network Regression: ",(0,a.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression/2023-02-23",children:"Building a Regression Model"}),", ",(0,a.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-24-tensorflow-neural-network-regression-evaluation/2023-02-24",children:"Model Evaluation"}),", ",(0,a.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/2023-02-25",children:"Model Optimization"}),", ",(0,a.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/2023-02-26",children:'Working with a "Real" Dataset'}),", ",(0,a.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/2023-02-26",children:"Feature Scaling"})]}),"\n",(0,a.jsxs)(e.li,{children:["Tensorflow 2 - Neural Network Classification: ",(0,a.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-27-tensorflow-neural-network-classification/2023-02-27",children:"Non-linear Data and Activation Functions"}),", ",(0,a.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-28-tensorflow-neural-network-classification-model-evaluation/2023-02-28",children:"Model Evaluation and Performance Improvement"}),", ",(0,a.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-02-tensorflow-neural-network-multi-classification/2023-03-02",children:"Multiclass Classification Problems"})]}),"\n",(0,a.jsxs)(e.li,{children:["Tensorflow 2 - Convolutional Neural Networks: ",(0,a.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-03-tensorflow-convolutional-neural-network-binary-classifications/2023-03-03",children:"Binary Image Classification"}),", ",(0,a.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-05-tensorflow-convolutional-neural-network-multiclass-classifications/2023-03-05",children:"Multiclass Image Classification"})]}),"\n",(0,a.jsxs)(e.li,{children:["Tensorflow 2 - Transfer Learning: ",(0,a.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-06-tensorflow-transfer-learning-feature-extraction/2023-03-06",children:"Feature Extraction"}),", ",(0,a.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-11-tensorflow-transfer-learning-fine-tuning/2023-03-11",children:"Fine-Tuning"}),", ",(0,a.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-16-tensorflow-transfer-learning-scaling/2023-03-16",children:"Scaling"})]}),"\n",(0,a.jsxs)(e.li,{children:["Tensorflow 2 - Unsupervised Learning: ",(0,a.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-24-tensorflow-unsupervised-learning-autoencoders/2023-03-24",children:"Autoencoder Feature Detection"}),", ",(0,a.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-autoencoders-super-resolution/2023-03-26",children:"Autoencoder Super-Resolution"}),", ",(0,a.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-generative-adversial-networks/2023-03-26",children:"Generative Adverserial Networks"})]}),"\n"]}),"\n",(0,a.jsx)(e.h1,{id:"tensorflow-neural-network-classification",children:"Tensorflow Neural Network Classification"}),"\n",(0,a.jsx)(e.h2,{id:"classification-problems",children:"Classification Problems"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Binary Classifications"}),"\n",(0,a.jsx)(e.li,{children:"Multiclass Classifications"}),"\n",(0,a.jsx)(e.li,{children:"Multilabel Classifications"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import tensorflow as tf\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport pandas as pd\nfrom sklearn.datasets import make_circles\n"})}),"\n",(0,a.jsx)(e.h2,{id:"working-with-non-linear-datasets",children:"Working with Non-Linear Datasets"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# creating data\nn_samples = 1000\nX, y = make_circles(n_samples,\n                   noise=0.03,\n                   random_state=42)\n\n# check features and labels\nX, y\n\n# (array([[ 0.75424625,  0.23148074],\n#         [-0.75615888,  0.15325888],\n#         [-0.81539193,  0.17328203],\n#         ...,\n#         [-0.13690036, -0.81001183],\n#         [ 0.67036156, -0.76750154],\n#         [ 0.28105665,  0.96382443]]),\n#  array([1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0,\n#         0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1,\n#         0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1,\n#         1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1,\n#         1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1,\n#         1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1,\n#         0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0,\n#         1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,\n#         0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,\n#         1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1,\n#         0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,\n#         1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0,\n#         0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1,\n#         0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1,\n#         1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0,\n#         1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0,\n#         1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0,\n#         0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0,\n#         0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1,\n#         1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,\n#         0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,\n#         1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0,\n#         1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1,\n#         1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0,\n#         1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0,\n#         0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0,\n#         1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1,\n#         1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1,\n#         1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1,\n#         0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,\n#         0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1,\n#         1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1,\n#         1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0,\n#         0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1,\n#         1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0,\n#         1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1,\n#         1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1,\n#         1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1,\n#         1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0,\n#         0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0,\n#         0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1,\n#         0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1,\n#         0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1,\n#         1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0,\n#         0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,\n#         0, 1, 0, 1, 0, 0, 0, 1, 0, 0]))\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'# the dataset has two labels 1 & 0 for datapoints\n# of the inner and outer circle generated by Scikit-Learn\n\ncircles = pd.DataFrame({"X0":X[:,0], "X1": X[:, 1], "label":y})\ncircles, X.shape, y.shape\n\n# (           X0        X1  label\n#  0    0.754246  0.231481      1\n#  1   -0.756159  0.153259      1\n#  2   -0.815392  0.173282      1\n#  3   -0.393731  0.692883      1\n#  4    0.442208 -0.896723      0\n#  ..        ...       ...    ...\n#  995  0.244054  0.944125      0\n#  996 -0.978655 -0.272373      0\n#  997 -0.136900 -0.810012      1\n#  998  0.670362 -0.767502      0\n#  999  0.281057  0.963824      0\n \n#  [1000 rows x 3 columns],\n#  (1000, 2),\n#  (1000,))\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# we can visualize them in a scatter plot\nplt.scatter(X[:, 0], X[:, 1], c=y, cmap=plt.cm.RdYlBu)\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Tensorflow - Classification Problems",src:i(702560).Z+"",width:"559",height:"413"})}),"\n",(0,a.jsx)(e.h2,{id:"building-the-model",children:"Building the Model"}),"\n",(0,a.jsx)(e.p,{children:"We can now build a neural network that allows us to do a binary classification between datapoints that belong to the blue and red circle."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'tf.random.set_seed(42)\n\nmodel_circles = tf.keras.Sequential([\n    tf.keras.layers.Dense(1, name="input_layer")\n], name="model_circles")\n\nmodel_circles.compile(\n    loss=tf.keras.losses.BinaryCrossentropy(),\n    optimizer=tf.keras.optimizers.Adam(learning_rate=0.01),\n    metrics=["accuracy"])\n\n# earlystop_callback = tf.keras.callbacks.EarlyStopping(\n#   monitor=\'val_loss\', min_delta=0.00001,\n#   patience=100, restore_best_weights=True)\n\nmodel_circles.fit(X, y, epochs=10) # callbacks=[earlystop_callback]\nmodel_circles.evaluate(X, y)\n\n# 32/32 [==============================] - 0s 1ms/step - loss: 0.7405 - accuracy: 0.5050\n# [0.7405271530151367, 0.5049999952316284\n#\n# currently the model only predicts with a 45% accuracy... worse than pure guessing with a binary choice\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'# adding complexity + activation functions\ntf.random.set_seed(42)\n\nmodel_circles_1 = tf.keras.Sequential([\n    tf.keras.layers.Dense(8, activation="relu", name="input_layer"),\n    tf.keras.layers.Dense(16, activation="relu", name="dense_layer1"),\n    tf.keras.layers.Dense(8, activation="relu", name="dense_layer2"),\n    tf.keras.layers.Dense(1, activation="relu", name="output_layer")\n], name="model_circles_1")\n\nmodel_circles_1.compile(\n    loss=tf.keras.losses.BinaryCrossentropy(),\n    optimizer=tf.keras.optimizers.Adam(learning_rate=0.0001),\n    metrics=["accuracy"])\n\nhistory_1 = model_circles_1.fit(X, y, epochs=100, verbose=0)\nmodel_circles.evaluate(X, y)\n\n# 32/32 [==============================] - 0s 1ms/step - loss: 0.7405 - accuracy: 0.5050\n# [0.7405271530151367, 0.5049999952316284]\n\n# not much better...\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'# history plot\npd.DataFrame(history_1.history).plot()\nplt.ylabel("loss")\nplt.xlabel("epochs")\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Tensorflow - Classification Problems",src:i(777271).Z+"",width:"567",height:"432"})}),"\n",(0,a.jsx)(e.h3,{id:"why-it-fails",children:"Why it Fails"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# visualize predictions\n# https://cs231n.github.io/neural-networks-case-study/\n\ndef decision_boundray(model, X, y):\n    \n    # define axis boundries for features and labels\n    x_min, x_max = X[:, 0].min() - 0.1, X[:, 0].max() + 0.1\n    y_min, y_max = X[:, 1].min() - 0.1, X[:, 1].max() + 0.1\n    \n    # create meshgrid within boundries (fresh data to run predictions on)\n    xx, yy = np.meshgrid(np.linspace(x_min, x_max, 100),\n                        np.linspace(y_min, y_max, 100))\n    \n    # stack both mesh arrays together\n    x_in = np.c_[xx.ravel(), yy.ravel()]\n    \n    # make predictions using the trained model\n    y_pred = model.predict(x_in)\n    \n    # check for multiclass-classification \n    if len(y_pred[0]) > 1:\n        # reshape predictions\n        y_pred = np.argmax(y_pred, axis=1).reshape(xx.shape)\n    else:\n        y_pred = np.round(y_pred).reshape(xx.shape)\n        \n    # plot decision boundry\n    plt.contourf(xx, yy, y_pred, cmap=plt.cm.RdYlBu, alpha=0.7)\n    plt.scatter(X[:, 0], X[:, 1], c=y, s=40, cmap=plt.cm.RdYlBu)\n    plt.xlim(xx.min(), xx.max())\n    plt.ylim(yy.min(), yy.max())\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"decision_boundray(model=model_circles_1, X=X, y=y)\n# the model is trying to draw a straight line through the dataset to differentiate between both classes\n# it then expands this line and tries to divide both classes - and fails with a circular dataset.\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Tensorflow - Classification Problems",src:i(159841).Z+"",width:"559",height:"413"})}),"\n",(0,a.jsx)(e.h2,{id:"non-linearity",children:"Non Linearity"}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.p,{children:["Experimenting with the ",(0,a.jsx)(e.a,{href:"https://playground.tensorflow.org/#activation=linear&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.001&regularizationRate=0&noise=0&networkShape=1&seed=0.14938&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false",children:"Tensorflow Playground"})," to find a model that works for the non-linear classification problem."]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"A model useable for linear problems will remain stuck at an accuracy around 50% - purely guessing when predicting:"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Tensorflow - Classification Problems",src:i(348097).Z+"",width:"1259",height:"673"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'# rebuilding the model (above)\ntf.random.set_seed(42)\n\nmodel_circles_2 = tf.keras.Sequential([\n    tf.keras.layers.Dense(1, activation="linear", name="input_layer")\n])\n\nmodel_circles_2.compile(loss="binary_crossentropy",\n                       optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),\n                       metrics=["accuracy"])\n\nhistory_2 = model_circles_2.fit(X, y, epochs=150, verbose=0)\nmodel_circles_2.evaluate(X, y)\n\n# 32/32 [==============================] - 0s 1ms/step - loss: 0.7222 - accuracy: 0.4590\n# [0.7222346067428589, 0.45899999141693115]\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"decision_boundray(model=model_circles_2, X=X, y=y)\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Tensorflow - Classification Problems",src:i(272744).Z+"",width:"559",height:"413"})}),"\n",(0,a.jsx)(e.p,{children:"I am starting to get a good separation with the following setup after approx. 2000 epochs:"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Tensorflow - Classification Problems",src:i(865954).Z+"",width:"1291",height:"679"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'# rebuilding the model (above)\ntf.random.set_seed(42)\n\nmodel_circles_3 = tf.keras.Sequential([\n    tf.keras.layers.Dense(4, activation="relu")\n])\n\nmodel_circles_3.compile(loss="binary_crossentropy",\n                       optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),\n                       metrics=["accuracy"])\n\nhistory_3 = model_circles_3.fit(X, y, epochs=2000, verbose=0)\nmodel_circles_3.evaluate(X, y)\n\n# 32/32 [==============================] - 0s 1ms/step - loss: 0.6932 - accuracy: 0.5000\n# [0.693161129951477, 0.5]\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"decision_boundray(model=model_circles_3, X=X, y=y)\n# well, that isn't good...\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'# rebuilding the model (2nd attempt)\n# adding an output layer with a single neuron for the binary classification\n\ntf.random.set_seed(42)\n\nmodel_circles_4 = tf.keras.Sequential([\n    tf.keras.layers.Dense(4, activation="relu", name="input_layer"),\n    tf.keras.layers.Dense(1, name="output_layer")\n])\n\nmodel_circles_4.compile(loss="binary_crossentropy",\n                       optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),\n                       metrics=["accuracy"])\n\nhistory_4 = model_circles_4.fit(X, y, epochs=2000, verbose=0)\nmodel_circles_4.evaluate(X, y)\n\n# 32/32 [==============================] - 0s 2ms/step - loss: 0.3404 - accuracy: 0.8320\n# [0.34036046266555786, 0.8320000171661377]\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"decision_boundray(model=model_circles_4, X=X, y=y)\n# much better - but not as good as the example from the tf.playground\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'# rebuilding the model (2nd attempt)\n# adding an "sigmoid" activation for the output layer\n\ntf.random.set_seed(42)\n\nmodel_circles_6 = tf.keras.Sequential([\n    tf.keras.layers.Dense(4, activation="relu", name="input_layer"),\n    tf.keras.layers.Dense(1, activation="sigmoid", name="output_layer")\n])\n\nmodel_circles_6.compile(loss="binary_crossentropy",\n                       optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),\n                       metrics=["accuracy"])\n\nmodel_circles_6.fit(X, y, epochs=2000, verbose=0)\nmodel_circles_6.evaluate(X, y)\n32/32 [==============================] - 0s 1ms/step - loss: 0.0241 - accuracy: 1.0000\n[0.0241051334887743, 1.0]\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"decision_boundray(model=model_circles_6, X=X, y=y)\n# there you go...\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Tensorflow - Classification Problems",src:i(822490).Z+"",width:"559",height:"413"})}),"\n",(0,a.jsx)(e.h2,{id:"non-linear-activation-functions",children:"Non-linear Activation Functions"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# create a input tensor\ninput_linear = tf.cast(tf.range(-10, 10), tf.float32)\n\n# visualize the tensor\nplt.plot(input_linear)\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Tensorflow - Classification Problems",src:i(912768).Z+"",width:"568",height:"413"})}),"\n",(0,a.jsx)(e.h3,{id:"linear-activation-function",children:"Linear Activation Function"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# replicating the linear activation function linear(x) = x\ndef linear(X):\n    return X\n\nlinear(input_linear)\n\n# <tf.Tensor: shape=(20,), dtype=float32, numpy=\n# array([-10.,  -9.,  -8.,  -7.,  -6.,  -5.,  -4.,  -3.,  -2.,  -1.,   0.,\n#          1.,   2.,   3.,   4.,   5.,   6.,   7.,   8.,   9.],\n#       dtype=float32)>\n\nplt.plot(linear(input_linear))\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Tensorflow - Classification Problems",src:i(407250).Z+"",width:"568",height:"413"})}),"\n",(0,a.jsx)(e.h3,{id:"sigmoid-activation-function",children:"Sigmoid Activation Function"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# replicating the sigmoid activation function sigmoid(x) = 1 / (1 + exp(-x))\ndef sigmoid(X):\n    return 1/(1 + tf.exp(-X))\n\nsigmoid(input_linear)\n\n# <tf.Tensor: shape=(20,), dtype=float32, numpy=\n# array([4.5397868e-05, 1.2339458e-04, 3.3535014e-04, 9.1105117e-04,\n#        2.4726230e-03, 6.6928510e-03, 1.7986210e-02, 4.7425874e-02,\n#        1.1920292e-01, 2.6894143e-01, 5.0000000e-01, 7.3105854e-01,\n#        8.8079703e-01, 9.5257413e-01, 9.8201376e-01, 9.9330717e-01,\n#        9.9752742e-01, 9.9908900e-01, 9.9966466e-01, 9.9987662e-01],\n#       dtype=float32)>\n\nplt.plot(sigmoid(input_linear))\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Tensorflow - Classification Problems",src:i(616599).Z+"",width:"547",height:"413"})}),"\n",(0,a.jsx)(e.h3,{id:"relu-activation-function",children:"reLU Activation Function"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# replicating the reLU function f(x) = 0 for x<0 and x for x>0\ndef relu(X):\n    return tf.maximum(0, X)\n\nrelu(input_linear)\n# <tf.Tensor: shape=(20,), dtype=float32, numpy=\n# array([0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 1., 2., 3., 4., 5., 6.,\n#        7., 8., 9.], dtype=float32)>\n\nplt.plot(relu(input_linear))\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Tensorflow - Classification Problems",src:i(344058).Z+"",width:"534",height:"413"})})]})}function h(n={}){const{wrapper:e}={...(0,s.ah)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},603905:(n,e,i)=>{i.d(e,{ah:()=>c});var a=i(667294);function s(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function r(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.push.apply(i,a)}return i}function t(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){s(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}function o(n,e){if(null==n)return{};var i,a,s=function(n,e){if(null==n)return{};var i,a,s={},r=Object.keys(n);for(a=0;a<r.length;a++)i=r[a],e.indexOf(i)>=0||(s[i]=n[i]);return s}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)i=r[a],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(s[i]=n[i])}return s}var l=a.createContext({}),c=function(n){var e=a.useContext(l),i=e;return n&&(i="function"==typeof n?n(e):t(t({},e),n)),i},d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(n,e){var i=n.components,s=n.mdxType,r=n.originalType,l=n.parentName,h=o(n,["components","mdxType","originalType","parentName"]),f=c(i),p=s,u=f["".concat(l,".").concat(p)]||f[p]||d[p]||r;return i?a.createElement(u,t(t({ref:e},h),{},{components:i})):a.createElement(u,t({ref:e},h))}));h.displayName="MDXCreateElement"},702560:(n,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/02_Tensorflow_Classifications_01-7d4303118a38e88c31150f32bd7db815.png"},777271:(n,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/02_Tensorflow_Classifications_02-82df8ca8603d8fea74b87e029e385b49.png"},159841:(n,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/02_Tensorflow_Classifications_03-3c890f0dcb016a44976f8e30c7f1facb.png"},348097:(n,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/02_Tensorflow_Classifications_04-3110b111f2daf856c13dbd7a92b1e29a.png"},272744:(n,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/02_Tensorflow_Classifications_05-92fb5dc94aee60065f00a8f870084444.png"},865954:(n,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/02_Tensorflow_Classifications_06-3f94f22bbef4861407abde9a714e6746.png"},822490:(n,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/02_Tensorflow_Classifications_06b-0ca646892c6f20b52b761986336b2b84.png"},912768:(n,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/02_Tensorflow_Classifications_07-96c3036f1636282bcb62e10a2a6f7334.png"},407250:(n,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/02_Tensorflow_Classifications_08-96c3036f1636282bcb62e10a2a6f7334.png"},616599:(n,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/02_Tensorflow_Classifications_09-59ab6f0e8981887ef514a86e7b5e7afc.png"},344058:(n,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/02_Tensorflow_Classifications_10-de5741270d7d3aa57356e98728e2cfc5.png"},943487:(n,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-f22d43080f9f8a797542a918e9317e01.jpg"}}]);