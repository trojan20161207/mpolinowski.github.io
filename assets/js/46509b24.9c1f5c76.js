"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[12421],{3905:(A,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(A,e,n){return e in A?Object.defineProperty(A,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):A[e]=n,A}function t(A,e){var n=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),n.push.apply(n,a)}return n}function o(A){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?t(Object(n),!0).forEach((function(e){r(A,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(n,e))}))}return A}function s(A,e){if(null==A)return{};var n,a,r=function(A,e){if(null==A)return{};var n,a,r={},t=Object.keys(A);for(a=0;a<t.length;a++)n=t[a],e.indexOf(n)>=0||(r[n]=A[n]);return r}(A,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);for(a=0;a<t.length;a++)n=t[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(A,n)&&(r[n]=A[n])}return r}var i=a.createContext({}),l=function(A){var e=a.useContext(i),n=e;return A&&(n="function"==typeof A?A(e):o(o({},e),A)),n},c=function(A){var e=l(A.components);return a.createElement(i.Provider,{value:e},A.children)},u={inlineCode:"code",wrapper:function(A){var e=A.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(A,e){var n=A.components,r=A.mdxType,t=A.originalType,i=A.parentName,c=s(A,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||t;return n?a.createElement(m,o(o({ref:e},c),{},{components:n})):a.createElement(m,o({ref:e},c))}));function d(A,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var t=n.length,o=new Array(t);o[0]=p;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=A,s.mdxType="string"==typeof A?A:r,o[1]=s;for(var l=2;l<t;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95959:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const t={sidebar_position:4610,slug:"2023-02-26",title:"Tensorflow 2 - Neural Network Regression",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Data pre-processing - normalization and feature-scaling"},o=void 0,s={unversionedId:"IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/index",id:"IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/index",title:"Tensorflow 2 - Neural Network Regression",description:"Data pre-processing - normalization and feature-scaling",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing",slug:"/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/2023-02-26",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/2023-02-26",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4610,frontMatter:{sidebar_position:4610,slug:"2023-02-26",title:"Tensorflow 2 - Neural Network Regression",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Data pre-processing - normalization and feature-scaling"},sidebar:"tutorialSidebar",previous:{title:"Machine Learning",permalink:"/docs/category/machine-learning"},next:{title:"Tensorflow 2 - Neural Network Regression",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/2023-02-26"}},i={},l=[{value:"Preprocessing Data",id:"preprocessing-data",level:2},{value:"Normalization &amp; Standardization",id:"normalization--standardization",level:3},{value:"Feature Scaling with SciKit",id:"feature-scaling-with-scikit",level:4},{value:"Model Training",id:"model-training",level:3}],c={toc:l};function u(A){let{components:e,...t}=A;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Guangzhou, China",src:n(68514).Z,width:"2830",height:"1272"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tensorflow-neural-network-regression"},"Tensorflow Neural Network Regression"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#preprocessing-data"},"Preprocessing Data"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#normalization--standardization"},"Normalization \\& Standardization"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#feature-scaling-with-scikit"},"Feature Scaling with SciKit")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model-training"},"Model Training"))))))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See also:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fun, fun, tensors: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-19-tensorflow-introduction/2023-02-19"},"1"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-21-tensorflow-tensors-2/2023-02-21"},"2"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3/2023-02-22"},"3")),(0,r.kt)("li",{parentName:"ul"},"Tensorflow 2 - Neural Network Regression: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression/2023-02-23"},"Building a Regression Model"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-24-tensorflow-neural-network-regression-evaluation/2023-02-24"},"Model Evaluation"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/2023-02-25"},"Model Optimization"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/2023-02-26"},'Working with a "Real" Dataset'),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/2023-02-26"},"Feature Scaling"))),(0,r.kt)("h1",{id:"tensorflow-neural-network-regression"},"Tensorflow Neural Network Regression"),(0,r.kt)("h2",{id:"preprocessing-data"},"Preprocessing Data"),(0,r.kt)("h3",{id:"normalization--standardization"},"Normalization & Standardization"),(0,r.kt)("p",null,"Change the values of features to a common scale without distorting differences in their ranges."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'X["age"].plot(kind="hist")\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Neural Network Regression",src:n(65743).Z,width:"571",height:"413"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'X["bmi"].plot(kind="hist")\nX["children"].value_counts()\n# 0    574\n# 1    324\n# 2    240\n# 3    157\n# 4     25\n# 5     18\n# Name: children, dtype: int64\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Neural Network Regression",src:n(94225).Z,width:"571",height:"413"})),(0,r.kt)("h4",{id:"feature-scaling-with-scikit"},"Feature Scaling with SciKit"),(0,r.kt)("p",null,"To bring all values on the same scale we can use SciKit-Learn:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Normalization"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"MinMaxScaler")," converts all values to a range between ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," while preserving the original distribution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Standardization"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"StandardScaler")," removes the mean and divides each value by the standard deviation (reduces effect from outliers)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# get insurance dataset\ninsurance_data = pd.read_csv('https://raw.githubusercontent.com/mpolinowski/Machine-Learning-with-R-datasets/master/insurance.csv')\ninsurance_data_random = insurance_data.sample(frac=1)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# create a column transformer\ntransformer = make_column_transformer(\n        (MinMaxScaler(), ["age", "bmi", "children"]), # Normalize\n        (OneHotEncoder(handle_unknown="ignore"), ["sex", "smoker", "region"]) # OneHotEncode\n    )\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# create features and labels\n# we need to predict "charges" - so drop this column from features\nX = insurance_data_random.drop("charges", axis=1)\ny = insurance_data_random["charges"]\n\n# training and testing data split using scikit-learn\n# this function actually randomizes the dataset for us\n# we did not need to shuffle the dataframe before - doesn\'t hurt, though\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.20, random_state=42)\n\n# fit transformer to training data\ntransformer.fit(X_train)\n\n# normalize training and test data with transformer\nX_train_norm = transformer.transform(X_train)\nX_test_norm = transformer.transform(X_test)\n\nX_train.loc[88], X_train_norm[88]\n\n# (age                46\n#  sex            female\n#  bmi             27.74\n#  children            0\n#  smoker             no\n#  region      northwest\n \n#  Name: 88, dtype: object,\n#  array([0.65217391, 0.52905569, 0.8       , 0.        , 1.        ,\n#         1.        , 0.        , 1.        , 0.        , 0.        ,\n#         0.        ]))\n')),(0,r.kt)("h3",{id:"model-training"},"Model Training"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'tf.random.set_seed(42)\n\n# increase number of units\ninsurance_model_norm = tf.keras.Sequential([\n    layers.Dense(8, input_shape=[11], name="input_layer"),\n    layers.Dense(16, activation="relu", name="dense_layer1"),\n    layers.Dense(8, activation="relu", name="dense_layer2"),\n    layers.Dense(1, name="output_layer")\n], name="insurance_model_norm")\n\ninsurance_model_norm.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.01),\n    metrics="mae")\n\nearlystop_callback = tf.keras.callbacks.EarlyStopping(\n  monitor=\'val_loss\', min_delta=0.00001,\n  patience=100, restore_best_weights=True)\n\nhistory_norm = insurance_model_norm.fit(X_train_norm, y_train,\n                                validation_data=(X_test_norm, y_test),\n                                epochs=5000, callbacks=[earlystop_callback])\n\n# Epoch 950/5000\n# 34/34 [==============================] - 0s 4ms/step - loss: 1292.6730 - mae: 1292.6730 - val_loss: 2108.5374 - val_mae: 2108.5374\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# history plot\npd.DataFrame(history_norm.history).plot()\nplt.ylabel("loss")\nplt.xlabel("epochs")\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Neural Network Regression",src:n(45815).Z,width:"589",height:"432"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'tf.random.set_seed(42)\n\n# increase number of units\ninsurance_model_norm_1 = tf.keras.Sequential([\n    layers.Dense(11, name="input_layer"),\n    layers.Dense(32, activation="relu", name="dense_layer1"),\n    layers.Dense(8, activation="relu", name="dense_layer2"),\n    layers.Dense(1, name="output_layer")\n], name="insurance_model_norm_1")\n\ninsurance_model_norm_1.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.02),\n    metrics="mae")\n\nearlystop_callback = tf.keras.callbacks.EarlyStopping(\n  monitor=\'val_loss\', min_delta=0.00001,\n  patience=100, restore_best_weights=True)\n\nhistory_norm_1 = insurance_model_norm_1.fit(X_train_norm, y_train,\n                                validation_data=(X_test_norm, y_test),\n                                epochs=5000, callbacks=[earlystop_callback])\n\n# Epoch 424/5000\n# 34/34 [==============================] - 0s 4ms/step - loss: 1358.7324 - mae: 1358.7324 - val_loss: 2093.2083 - val_mae: 2093.2083\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# history plot\npd.DataFrame(history_norm_1.history).plot()\nplt.ylabel("loss")\nplt.xlabel("epochs")\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Neural Network Regression",src:n(73668).Z,width:"589",height:"432"})))}u.isMDXComponent=!0},65743:(A,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,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"},94225:(A,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/01a_Tensorflow_Regressions_21-6f922420299e844e8191df4200f133ae.png"},45815:(A,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/01a_Tensorflow_Regressions_22-ef5ec6645f97f5889e6b57415bdc8cd7.png"},73668:(A,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/01a_Tensorflow_Regressions_23-5e4640e404c711d8bd4389a087b1d9f7.png"},68514:(A,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-f80e63ee872dae25129198058ac93b4e.jpg"}}]);