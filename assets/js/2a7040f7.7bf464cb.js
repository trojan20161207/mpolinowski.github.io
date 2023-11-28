"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[10601],{456185:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(785893),s=a(603905);const i={sidebar_position:4620,slug:"2023-02-26",title:"Tensorflow 2 - Neural Network Regression",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Working with the medical cost dataset"},t="Tensorflow Neural Network Regression",o={id:"IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/index",title:"Tensorflow 2 - Neural Network Regression",description:"Working with the medical cost dataset",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset",slug:"/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/2023-02-26",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/2023-02-26",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4620,frontMatter:{sidebar_position:4620,slug:"2023-02-26",title:"Tensorflow 2 - Neural Network Regression",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Working with the medical cost dataset"},sidebar:"tutorialSidebar",previous:{title:"Tensorflow 2 - Neural Network Regression",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/2023-02-26"},next:{title:"Tensorflow 2 - Neural Network Regression",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/2023-02-25"}},l={},c=[{value:"Medical Cost Dataset",id:"medical-cost-dataset",level:2},{value:"Model Building",id:"model-building",level:3},{value:"Improving the Model",id:"improving-the-model",level:3},{value:"When to stop training?",id:"when-to-stop-training",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Mong Kok, Hong Kong",src:a(660248).Z+"",width:"2830",height:"1272"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#tensorflow-neural-network-regression",children:"Tensorflow Neural Network Regression"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#medical-cost-dataset",children:"Medical Cost Dataset"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#model-building",children:"Model Building"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#improving-the-model",children:"Improving the Model"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#when-to-stop-training",children:"When to stop training?"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/mpolinowski/tf-2023",children:"Github Repository"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"See also:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Fun, fun, tensors: ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-19-tensorflow-introduction/2023-02-19",children:"Tensor Constants, Variables and Attributes"}),", ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-21-tensorflow-tensors-2/2023-02-21",children:"Tensor Indexing, Expanding and Manipulations"}),", ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3/2023-02-22",children:"Matrix multiplications, Squeeze, One-hot and Numpy"})]}),"\n",(0,r.jsxs)(n.li,{children:["Tensorflow 2 - Neural Network Regression: ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression/2023-02-23",children:"Building a Regression Model"}),", ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-24-tensorflow-neural-network-regression-evaluation/2023-02-24",children:"Model Evaluation"}),", ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/2023-02-25",children:"Model Optimization"}),", ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/2023-02-26",children:'Working with a "Real" Dataset'}),", ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/2023-02-26",children:"Feature Scaling"})]}),"\n",(0,r.jsxs)(n.li,{children:["Tensorflow 2 - Neural Network Classification: ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-27-tensorflow-neural-network-classification/2023-02-27",children:"Non-linear Data and Activation Functions"}),", ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-28-tensorflow-neural-network-classification-model-evaluation/2023-02-28",children:"Model Evaluation and Performance Improvement"}),", ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-02-tensorflow-neural-network-multi-classification/2023-03-02",children:"Multiclass Classification Problems"})]}),"\n",(0,r.jsxs)(n.li,{children:["Tensorflow 2 - Convolutional Neural Networks: ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-03-tensorflow-convolutional-neural-network-binary-classifications/2023-03-03",children:"Binary Image Classification"}),", ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-05-tensorflow-convolutional-neural-network-multiclass-classifications/2023-03-05",children:"Multiclass Image Classification"})]}),"\n",(0,r.jsxs)(n.li,{children:["Tensorflow 2 - Transfer Learning: ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-06-tensorflow-transfer-learning-feature-extraction/2023-03-06",children:"Feature Extraction"}),", ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-11-tensorflow-transfer-learning-fine-tuning/2023-03-11",children:"Fine-Tuning"}),", ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-16-tensorflow-transfer-learning-scaling/2023-03-16",children:"Scaling"})]}),"\n",(0,r.jsxs)(n.li,{children:["Tensorflow 2 - Unsupervised Learning: ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-24-tensorflow-unsupervised-learning-autoencoders/2023-03-24",children:"Autoencoder Feature Detection"}),", ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-autoencoders-super-resolution/2023-03-26",children:"Autoencoder Super-Resolution"}),", ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-generative-adversial-networks/2023-03-26",children:"Generative Adverserial Networks"})]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"tensorflow-neural-network-regression",children:"Tensorflow Neural Network Regression"}),"\n",(0,r.jsx)(n.h2,{id:"medical-cost-dataset",children:"Medical Cost Dataset"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://github.com/mpolinowski/Machine-Learning-with-R-datasets",children:"Medical Cost Dataset"})," investigates if you can accurately predict insurance costs based on:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"age"}),": age of primary beneficiary"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"sex"}),": insurance contractor gender, female, male"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"bmi"}),": Body mass index, providing an understanding of body, weights that are relatively high or low relative to height, objective index of body weight (",(0,r.jsx)(n.code,{children:"kg / m ^ 2"}),") using the ratio of height to weight, ideally ",(0,r.jsx)(n.code,{children:"18.5"})," to ",(0,r.jsx)(n.code,{children:"24.9"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"children"}),": Number of children covered by health insurance / Number of dependents"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"smoker"}),": Smoking"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"region"}),": the beneficiary's residential area in the US, northeast, southeast, southwest, northwest."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"charges"}),": Individual medical costs billed by health insurance"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# get insurance dataset\ninsurance_data = pd.read_csv('https://raw.githubusercontent.com/mpolinowski/Machine-Learning-with-R-datasets/master/insurance.csv')\ninsurance_data\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Tensorflow Neural Network Regression",src:a(866064).Z+"",width:"465",height:"351"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# shuffle dataframe to prevent bias\ninsurance_data_random = insurance_data.sample(frac=1)\ninsurance_data_random\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Tensorflow Neural Network Regression",src:a(799).Z+"",width:"456",height:"349"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# creating numerical labels for strings\n# convert categorical variables into indicator variables with pandas get_dummies\ninsurance_one_hot = pd.get_dummies(insurance_data_random)\ninsurance_one_hot.head()\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:a(596182).Z+"",width:"982",height:"154"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# create features and labels\n# we need to predict "charges" - so drop this column from features\nX = insurance_one_hot.drop("charges", axis=1)\ny = insurance_one_hot["charges"]\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# training and testing data split using scikit-learn\n# this function actually randomizes the dataset for us\n# we did not need to shuffle the dataframe before - doesn't hurt, though\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.20, random_state=42)\n\nX_train\n# 80% => 1070 rows \xd7 11 columns\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Tensorflow Neural Network Regression",src:a(67234).Z+"",width:"938",height:"350"})}),"\n",(0,r.jsx)(n.h3,{id:"model-building",children:"Model Building"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'tf.random.set_seed(42)\n\n# building the model (based on the "best model" above)\ninsurance_model = tf.keras.Sequential([\n    layers.Dense(10, input_shape=[11], name="input_layer"),\n    layers.Dense(16, activation="relu", name="dense_layer1"),\n    layers.Dense(8, activation="relu", name="dense_layer2"),\n    layers.Dense(1, name="output_layer")\n], name="insurance_model")\n\ninsurance_model.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.001),\n    metrics="mae")\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# model training\ninsurance_model.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=500)\n# Epoch 500/500\n# 34/34 [==============================] - 0s 3ms/step - loss: 2702.7041 - mae: 2702.7041 - val_loss: 2433.1829 - val_mae: 2433.1829\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# we have an average absolute validation error of val_mae: `2433.1829`\ny_train.median(), y_train.mean()\n# (9373.744050000001, 13240.898205242056)\n\n# the arithmetic average is of medical charges is `13240.898` => 18.4% off\n"})}),"\n",(0,r.jsx)(n.h3,{id:"improving-the-model",children:"Improving the Model"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# since the model was still improving I will extend the training\ninsurance_model.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=5000)\n# I am still seeing improvements after 5000 epochs\n\n# Epoch 5000/5000\n# 34/34 [==============================] - 0s 3ms/step - loss: 1498.0355 - mae: 1498.0355 - val_loss: 1543.5344 - val_mae: 1543.5344\n\n# the error is now down to 11% from 18% before\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# since before removing complexity actually improved the model\n# removing one dense layer\ninsurance_model_1 = tf.keras.Sequential([\n    layers.Dense(10, input_shape=[11], name="input_layer"),\n    layers.Dense(8, activation="relu", name="dense_layer"),\n    layers.Dense(1, name="output_layer")\n], name="insurance_model_1")\n\ninsurance_model_1.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.001),\n    metrics="mae")\n\ninsurance_model_1.summary()\n\n# Model: "insurance_model_1"\n# _________________________________________________________________\n#  Layer (type)                Output Shape              Param #   \n# =================================================================\n#  input_layer (Dense)         (None, 10)                120       \n                                                                 \n#  dense_layer (Dense)         (None, 8)                 88        \n                                                                 \n#  output_layer (Dense)        (None, 1)                 9         \n                                                                 \n# =================================================================\n# Total params: 217\n# Trainable params: 217\n# Non-trainable params: 0\n# _________________________________________________________________\n\ninsurance_model_1.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=500)\n\n# this decreased the performance with the error after 500 cycles\n# Epoch 500/500\n# 34/34 [==============================] - 0s 3ms/step - loss: 3530.7039 - mae: 3530.7039 - val_loss: 3634.2502 - val_mae: 3634.2502\n\n# mae `2433.1829`  => mae `3634.2502`\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'tf.random.set_seed(42)\n\n# back to the initial model but with a larger learning rate\ninsurance_model_2 = tf.keras.Sequential([\n    layers.Dense(8, input_shape=[11], name="input_layer"),\n    layers.Dense(16, activation="relu", name="dense_layer1"),\n    layers.Dense(8, activation="relu", name="dense_layer2"),\n    layers.Dense(1, name="output_layer")\n], name="insurance_model_2")\n\ninsurance_model_2.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.01),\n    metrics="mae")\n\ninsurance_model_2.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=500)\n# Epoch 500/500\n# 34/34 [==============================] - 0s 3ms/step - loss: 2059.1406 - mae: 2059.1406 - val_loss: 2059.2986 - val_mae: 2059.2986\n\n# mae `2433.1829`  => mae `2059.2986`\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'tf.random.set_seed(42)\n\n# increase number of units\ninsurance_model_3 = tf.keras.Sequential([\n    layers.Dense(8, input_shape=[11], name="input_layer"),\n    layers.Dense(32, activation="relu", name="dense_layer1"),\n    layers.Dense(8, activation="relu", name="dense_layer2"),\n    layers.Dense(1, name="output_layer")\n], name="insurance_model_3")\n\ninsurance_model_3.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.01),\n    metrics="mae")\n\nhistory = insurance_model_3.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=500)\n\n# Epoch 500/500\n# 34/34 [==============================] - 0s 3ms/step - loss: 2110.4812 - mae: 2110.4812 - val_loss: 1937.2085 - val_mae: 1937.2085\n\n# even better\n# mae `2433.1829`  => mae `1937.2085`\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# history plot\npd.DataFrame(history.history).plot()\nplt.ylabel("loss")\nplt.xlabel("epochs")\n\n# the improvements keep creeping in slowly.\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Tensorflow Neural Network Regression",src:a(109105).Z+"",width:"589",height:"432"})}),"\n",(0,r.jsx)(n.h3,{id:"when-to-stop-training",children:"When to stop training?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# a way to keep training until a minimum of\n# improvement is reached you can use the \n# `EarlyStopping()` callback\n\n# stop when loss stops improving min 0.0001\n# over 10 cycles\nearlystop_callback = tf.keras.callbacks.EarlyStopping(\n  monitor='val_loss', min_delta=0.0001,\n  patience=10, restore_best_weights=True)\n\nhistory = insurance_model_3.fit(X_train, y_train,\n                                validation_data=(X_test, y_test),\n                                epochs=5000, callbacks=[earlystop_callback])\n\n# since the model is already trained it won't run for long now before the callback is triggered:\n# Epoch 21/5000\n# 34/34 [==============================] - 0s 3ms/step - loss: 1843.7740 - mae: 1843.7740 - val_loss: 1802.4473 - val_mae: 1802.4473\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},603905:(e,n,a)=>{a.d(n,{ah:()=>c});var r=a(667294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function t(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,s=function(e,n){if(null==e)return{};var a,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=r.createContext({}),c=function(e){var n=r.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):t(t({},n),e)),a},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),_=c(a),u=s,m=_["".concat(l,".").concat(u)]||_[u]||d[u]||i;return a?r.createElement(m,t(t({ref:n},h),{},{components:a})):r.createElement(m,t({ref:n},h))}));h.displayName="MDXCreateElement"},866064:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/01a_Tensorflow_Regressions_15-43febb02670ff5c9c452a9730c829c9f.png"},799:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/01a_Tensorflow_Regressions_16-8b901ecaf9c64fe4216d3f94446c45f2.png"},596182:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/01a_Tensorflow_Regressions_17-2ea88e362a91f5ecbc03ac60bcaeea39.png"},67234:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/01a_Tensorflow_Regressions_18-043c9bd6e68ab1294e7b870309566af0.png"},109105:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/01a_Tensorflow_Regressions_19-7a8889645efbc4dc0bb8fa750af9f674.png"},660248:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-f80e63ee872dae25129198058ac93b4e.jpg"}}]);