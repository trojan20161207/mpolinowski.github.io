"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[93229],{13403:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(785893),a=t(603905);const r={sidebar_position:9090,slug:"2019-03-31",title:"Introduction to TensorFlow 2 Beta",authors:"mpolinowski",tags:["Machine Learning","Python","Tensorflow"]},s=void 0,o={id:"IoT-and-Machine-Learning/ML/2019-03-31--introduction-to-tensorflow-2-beta/index",title:"Introduction to TensorFlow 2 Beta",description:"Shanghai, China",source:"@site/docs/IoT-and-Machine-Learning/ML/2019-03-31--introduction-to-tensorflow-2-beta/index.mdx",sourceDirName:"IoT-and-Machine-Learning/ML/2019-03-31--introduction-to-tensorflow-2-beta",slug:"/IoT-and-Machine-Learning/ML/2019-03-31--introduction-to-tensorflow-2-beta/2019-03-31",permalink:"/docs/IoT-and-Machine-Learning/ML/2019-03-31--introduction-to-tensorflow-2-beta/2019-03-31",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2019-03-31--introduction-to-tensorflow-2-beta/index.mdx",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:9090,frontMatter:{sidebar_position:9090,slug:"2019-03-31",title:"Introduction to TensorFlow 2 Beta",authors:"mpolinowski",tags:["Machine Learning","Python","Tensorflow"]},sidebar:"tutorialSidebar",previous:{title:"Tesseract OCR on Arch Linux",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-10-31--tesseract_ocr_arch_linux/2021-10-31"},next:{title:"Machine Learning with SciKit Learn",permalink:"/docs/IoT-and-Machine-Learning/ML/2018-01-02--machine-learning-with-python/2018-01-02"}},l={},d=[{value:"Installation of Tensorflow",id:"installation-of-tensorflow",level:2},{value:"Convolutional Neural Networks (CNNS)",id:"convolutional-neural-networks-cnns",level:2},{value:"Picking a model",id:"picking-a-model",level:2},{value:"Linear Model",id:"linear-model",level:3},{value:"Example: Simple Linear Regression",id:"example-simple-linear-regression",level:3},{value:"Creating the Model using Numpy",id:"creating-the-model-using-numpy",level:4},{value:"Training the Model",id:"training-the-model",level:4},{value:"Introduction to TensorFlow",id:"introduction-to-tensorflow",level:2},{value:"Making Predictions",id:"making-predictions",level:3},{value:"Customizing your Model",id:"customizing-your-model",level:3},{value:"Adding Initializers",id:"adding-initializers",level:4},{value:"Setting the Learning rate",id:"setting-the-learning-rate",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Shanghai, China",src:t(675952).Z+"",width:"1500",height:"870"})}),"\n",(0,i.jsx)(n.h2,{id:"installation-of-tensorflow",children:"Installation of Tensorflow"}),"\n",(0,i.jsxs)(n.p,{children:["You can install TensorFlow directly through ",(0,i.jsx)(n.code,{children:"pip3 install tensorflow"})," or with GPU support ",(0,i.jsx)(n.code,{children:"pip3 install tensorflow-gpu"})," (make sure you have ",(0,i.jsx)(n.a,{href:"https://www.python.org/downloads/",children:"Python v3"})," installed)."]}),"\n",(0,i.jsxs)(n.p,{children:["I have ",(0,i.jsx)(n.a,{href:"https://docs.anaconda.com/anaconda/install/windows/",children:"Anaconda"})," set up on my computer and am going to use it for this instead. If you already have Anaconda installed, make sure that it is up to date (make sure that you start the ",(0,i.jsx)(n.a,{href:"https://docs.anaconda.com/anaconda/user-guide/getting-started/#write-a-python-program-using-anaconda-prompt-or-terminal",children:"Anaconda Prompt"})," with Admin privileges):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"conda update conda\r\nconda update anaconda\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Anaconda allows us to create a virtual environment in which we can run our TensorFlow program. To create the environment with the name ",(0,i.jsx)(n.code,{children:"py3-TF2"})," run the following command in the Anaconda Prompt - hit ",(0,i.jsx)(n.code,{children:"y"})," when prompted:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"conda create --name py3-TF2 python=3\r\nconda activate py3-TF2\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Introduction to Tensorflow 2 Beta",src:t(465867).Z+"",width:"976",height:"510"})}),"\n",(0,i.jsxs)(n.p,{children:["We can now continue installing TensorFlow inside this virtual environment. At the time of writing TensorFlow 2 is still in Beta and the exact version needs to be specified to prevent pip from using version 1 - please check the ",(0,i.jsx)(n.a,{href:"https://www.tensorflow.org/install/",children:"latest version"})," before running the command below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install tensorflow==2.0.0-beta1\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To be able to use the virtual environment in ",(0,i.jsx)(n.a,{href:"https://docs.anaconda.com/anaconda/user-guide/getting-started/#run-python-in-a-jupyter-notebook",children:"Jupyter Notebook"})," we need to install ",(0,i.jsx)(n.code,{children:"ipykernel"})," and ",(0,i.jsx)(n.code,{children:"nb_conda_kernels"})," inside it:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install ipykernel\r\nconda install nb_conda_kernels\n"})}),"\n",(0,i.jsx)(n.p,{children:"Open a new Python 3 project file inside Jupyter Notebook and verify that Tensorflow is up-and-running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"import tensorflow as tf\r\n\r\ntf.__version__\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Introduction to Tensorflow 2 Beta",src:t(491394).Z+"",width:"977",height:"565"})}),"\n",(0,i.jsx)(n.p,{children:"Your research environment is now ready for use!"}),"\n",(0,i.jsxs)(n.h2,{id:"convolutional-neural-networks-cnns",children:["Convolutional Neural Networks (",(0,i.jsx)(n.a,{href:"https://www.tensorflow.org/beta/tutorials/images/intro_to_cnns",children:"CNNS"}),")"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Classify an Image (e.g. a plane)"}),"\n",(0,i.jsx)(n.li,{children:"Classify and Segment (getting the outline of an object - e.g. a plane - inside an image for further analysis)"}),"\n",(0,i.jsx)(n.li,{children:"Recognize an Image (e.g. a Sukhoi SU-25T)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://missinglink.ai/guides/neural-network-concepts/neural-network-bias-bias-neuron-overfitting-underfitting/",children:"Underfitting"}),": Our model has been trained on a data set that is too small. It can not be used to generalize or recognize. If our data set is too small we can use ",(0,i.jsx)(n.a,{href:"http://cs231n.github.io/transfer-learning/",children:"Transfer Learning"})," to adapt a external model by retraining it's outer layer with our training data."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://missinglink.ai/guides/neural-network-concepts/neural-network-bias-bias-neuron-overfitting-underfitting/",children:"Overfitting"}),": The model was trained with a very specific data set and reaches a high percentage in recognizing fits. But it fails to generalize and will only be useful with your specific sample data."]}),"\n",(0,i.jsx)(n.h2,{id:"picking-a-model",children:"Picking a model"}),"\n",(0,i.jsx)(n.p,{children:"There are three different types of Machine Learning:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Supervised Learning"}),": We train our model with a set of labeled data before letting it have a go in the wild."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Unsupervised Learning"}),": The model trains itself with unlabeled data and splits the set into a given number of groups based on similarity. The groups can afterwards be labeled by us based on the goal we are persuing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reinforced Learning"}),": We let the model train unsupervised but add a reward system to make sure that the training goes into the direction we need it to go."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In the following we will concentrate on ",(0,i.jsx)(n.strong,{children:"Supervised Learning"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"linear-model",children:"Linear Model"}),"\n",(0,i.jsx)(n.p,{children:"The simplest model is always the Linear Model where we just have to feed the learning process a few x- and y-values and have it interpolate data points in between:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"f(x) = xw + b\n"})}),"\n",(0,i.jsxs)(n.p,{children:["With ",(0,i.jsx)(n.code,{children:"x"})," being the input, ",(0,i.jsx)(n.code,{children:"w"})," the ",(0,i.jsx)(n.strong,{children:"Weight"})," and ",(0,i.jsx)(n.code,{children:"b"})," the ",(0,i.jsx)(n.strong,{children:"Bias"})," for our model. Training the model would mean finding values for the weight and bias that the value of ",(0,i.jsx)(n.strong,{children:"y"})," - with a given set of values for ",(0,i.jsx)(n.strong,{children:"x"})," - comes as close to observed values as possible."]}),"\n",(0,i.jsx)(n.p,{children:"An example would be a model that calculates the rent for an apartment based on the size of the apartment:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"rent = size * weight + bias\n"})}),"\n",(0,i.jsx)(n.p,{children:"When we know more then one observation that would affect the prize of the apartment, we can simply add them up:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Rent = (Size*Weight) + (Proximity to Subway*Weight) - (Proximity to City Center*Weight) + Bias\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To assess the quality of our linear model we can use the squard-loss (",(0,i.jsx)(n.strong,{children:"L2-norm"}),") that weights the distance of each datapoint from the position it should have according to our model. The smaller the sum over all those distances the more accurate represents our model the give dataset."]}),"\n",(0,i.jsx)(n.h3,{id:"example-simple-linear-regression",children:"Example: Simple Linear Regression"}),"\n",(0,i.jsx)(n.h4,{id:"creating-the-model-using-numpy",children:"Creating the Model using Numpy"}),"\n",(0,i.jsxs)(n.p,{children:["As an example we will create fake data with a linear relationship using ",(0,i.jsx)(n.code,{children:"numpy"})," to help us to create and train a linear model. We will then use ",(0,i.jsx)(n.code,{children:"matplotlib"})," and ",(0,i.jsx)(n.code,{children:"mplot3d"})," to visualize the results we are getting:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"observations = 1000\r\n\r\nxs=np.random.uniform(low=-10, high=10, size=(observations,1))\r\nzs=np.random.uniform(-10, 10,(observations,1))\r\n\r\ninputs = np.column_stack((xs,zs))\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that the ",(0,i.jsx)(n.code,{children:"size"})," is defined by the number of observations times the number of variables for our linear function - here we only use one variable ",(0,i.jsx)(n.code,{children:"x"})," or ",(0,i.jsx)(n.code,{children:"z"}),". The resulting matrix ",(0,i.jsx)(n.code,{children:"inputs"})," consits of 2 columns each holding 1000 random values."]}),"\n",(0,i.jsx)(n.p,{children:"We now need to create a target for our algorithm - a function that our model should find given the random but linear dataset, e.g.:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"f(x,y) = 3x - 4z + 7 + noise\n"})}),"\n",(0,i.jsx)(n.p,{children:"The weights 3 and 4 as well as the bias 7 are randomly chosen and the noise is again generated using Numpy:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"noise=np.random.uniform(-1,1,(observations,1))\r\n\r\ntargets = 3*xs - 4*zs + 7 noise\n"})}),"\n",(0,i.jsx)(n.p,{children:"We can now plot this data and will receive a plane inside a threedimensional space:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Introduction to Tensorflow 2 Beta",src:t(300233).Z+"",width:"885",height:"855"})}),"\n",(0,i.jsx)(n.p,{children:"We can now set an initial range for the algorithm to pick weights and biases from at random to find a good fit:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"init_range=0.1\r\n\r\nweights=np.random.uniform(-init_range,init_range,size=(2,1))\r\nbiases=np.random.uniform(-init_range,init_range,size=1)\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this example our initial weights and biases will be picked randomly from the interval [-0.1,0.1]."}),"\n",(0,i.jsx)(n.p,{children:"Last preparation needed is setting a learning rate - the smaller the number, the smaller the increments that are used by the learning algorithm. This will lead to a more accurate value but will slow the algorithm down. In the example we will set the learning rate to a value of:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"learning_rate = 0.02\n"})}),"\n",(0,i.jsx)(n.h4,{id:"training-the-model",children:"Training the Model"}),"\n",(0,i.jsxs)(n.p,{children:["We now can use a for loop to iterate through our data (in TensorFLow 1 iteration is called an ",(0,i.jsx)(n.strong,{children:"Epoch"}),", see further down), calculate outputs and compare them to targets using the loss function. Every interation should refine the weights and biases of our model and minimize the result of the loss function for the next run."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"for i in range (100):\r\n    outputs=np.dot(inputs,weights)+biases\r\n    deltas=outputs-targets\r\n    loss=np.sum(deltas**2)/2/observations\r\n    \r\n    print(loss)\r\n    \r\n    deltas_scaled=deltas/observations\r\n    \r\n    weights = weights-learning_rate*np.dot(inputs.T,deltas_scaled)\r\n    biases = biases-learning_rate*np.sum(deltas_scaled)\n"})}),"\n",(0,i.jsx)(n.p,{children:"This function runs 100-times, optimizing the value for our weights and biases with each run. Printing the result of the loss function shows us a smaller value with each run:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Introduction to Tensorflow 2 Beta",src:t(731793).Z+"",width:"877",height:"857"})}),"\n",(0,i.jsx)(n.p,{children:"In the initialization step we can see that the algorithm starts out with the following weights and biases:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"print(weights)\r\nprint(biases)\r\n\r\n[[-0.06156192]\r\n [-0.02018205]]\r\n[0.05114518]\n"})}),"\n",(0,i.jsx)(n.p,{children:"After running training the algorithm with 100 iterations those values change to:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"print(weights,biases)\r\n\r\n[[ 3.00537904]\r\n [-4.00032605]] [6.06949437]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Introduction to Tensorflow 2 Beta",src:t(350864).Z+"",width:"885",height:"194"})}),"\n",(0,i.jsx)(n.p,{children:"This is already very close to our target of 3&4 and 7 - but not close enough yet. We can increase the number of iterations in the learning step to improve the outcome. Or simply rerun the training step to add another 100 iterations:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"print(weights,biases)\r\n\r\n[[ 3.00076145]\r\n [-4.00183613]] [6.86818993]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Introduction to Tensorflow 2 Beta",src:t(779889).Z+"",width:"887",height:"128"})}),"\n",(0,i.jsx)(n.p,{children:"Plotting the Outputs of our Model against the Target value shows us a linear function at an angle close to 45 degrees. Our model, almost perfectly, represents the training data:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Introduction to Tensorflow 2 Beta",src:t(427750).Z+"",width:"885",height:"416"})}),"\n",(0,i.jsx)(n.h2,{id:"introduction-to-tensorflow",children:"Introduction to TensorFlow"}),"\n",(0,i.jsxs)(n.p,{children:["We can start by creating the same dataset as before only this time we will store the generated test dataset in a file format that supports storage of tensor data (n-dimensional arrays) (",(0,i.jsx)(n.code,{children:".npz"}),")  with the help of Numpy:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"import numpy as np\r\nimport matplotlib.pyplot as plt\r\nimport tensorflow as tf\r\n\r\nobservations = 1000\r\n\r\nxs = np.random.uniform(low=-10, high=10, size=(observations,1))\r\nzs = np.random.uniform(-10, 10, (observations,1))\r\n\r\ngenerated_inputs = np.column_stack((xs,zs))\r\n\r\nnoise = np.random.uniform(-1, 1, (observations,1))\r\n\r\ngenerated_targets = 3*xs - 4*zs + 7 + noise\r\n\r\nnp.savez('tf-model-data-example', inputs=generated_inputs, targets=generated_targets)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Running this code will create a file ",(0,i.jsx)(n.code,{children:"tf-model-data-example.npz"})," that holds our training data."]}),"\n",(0,i.jsxs)(n.p,{children:["In the next step we can load this data set with Numpy and use a Keras function to calculate the output (y) of our function (",(0,i.jsx)(n.code,{children:"output=np.dot(input,weights)+bias"}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"training_data=np.load('tf_model_data_example.npz')\r\n\r\ninput_size=2\r\noutput_size=1\r\n\r\nmodel=tf.keras.Sequential([\r\n    tf.keras.layers.Dense(output_size)\r\n])\r\n\r\nmodel.compile(optimizer='sgd',loss='mean_squared_error' )\r\n\r\nmodel.fit(training_data['inputs'],training_data['targets'],epochs=100,verbose=2)\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can display the Weights and Bias using the following code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"weights=model.layers[0].get_weights()[0]\r\nbias=model.layers[0].get_weights()[1]\r\n\r\nweights\r\nbias\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Those values should now be close to our target as defined above ",(0,i.jsx)(n.code,{children:"targets = 3*xs - 4*zs + 7 + noise"})," - Weights ",(0,i.jsx)(n.code,{children:"3"})," & ",(0,i.jsx)(n.code,{children:"-4"})," and ",(0,i.jsx)(n.code,{children:"7"})," as the Bias."]}),"\n",(0,i.jsx)(n.h3,{id:"making-predictions",children:"Making Predictions"}),"\n",(0,i.jsxs)(n.p,{children:["We can now use our model to make predictions ",(0,i.jsx)(n.code,{children:"model.predict_on_batch(data)"})," for output values:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"model.predict_on_batch(training_data['inputs'])\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will show you the outputs that have been calculated for the training data and previously compared to the target values to calculate the loss function."}),"\n",(0,i.jsx)(n.p,{children:"Plotting those values against the targets will again result in a line graph close to a 45 degrees angle:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"plt.plot(np.squeeze(model.predict_on_batch(training_data['inputs'])),np.squeeze(training_data['targets']))\r\nplt.xlabel('outputs')\r\nplt.ylabel('targets')\r\nplt.show()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"customizing-your-model",children:"Customizing your Model"}),"\n",(0,i.jsxs)(n.p,{children:["In the Numpy model earlier we set an initial range (",(0,i.jsx)(n.code,{children:"init_range=0.1"}),") to define the step size between epochs. But with TensorFlow we left everything at it's default, letting Keras choose for us - let's take control."]}),"\n",(0,i.jsx)(n.h4,{id:"adding-initializers",children:"Adding Initializers"}),"\n",(0,i.jsxs)(n.p,{children:["Here is how you add kernel and bias initializers to ",(0,i.jsx)(n.code,{children:"tf.keras.layers.Dense(output_size, kernel_initializer, bias_initializer)"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"model=tf.keras.Sequential([\r\n    tf.keras.layers.Dense(\r\n      output_size,\r\n      kernel_initializer=tf.random_uniform_initializer(minval=-0.1, maxval=0.1),\r\n      bias_initializer=tf.random_uniform_initializer(minval=-0.1, maxval=0.1)\r\n      )\r\n])\n"})}),"\n",(0,i.jsx)(n.h4,{id:"setting-the-learning-rate",children:"Setting the Learning rate"}),"\n",(0,i.jsxs)(n.p,{children:["We can also set the learning rate for our model, which in our Numpy model we defined with ",(0,i.jsx)(n.code,{children:"learning_rate = 0.02"}),". In TensorFlow this is done by customizing the optimizer - we choose the ",(0,i.jsx)(n.code,{children:"SGD"})," optimizer (Stochastic Gradient Descent optimizer) that supports a couple of modifiers, including the ",(0,i.jsx)(n.strong,{children:"Learning Rate"}),", ",(0,i.jsx)(n.strong,{children:"Momentum"}),", ",(0,i.jsx)(n.strong,{children:"Decay"}),", etc."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"custom_optimizer=tf.keras.optimizers.SGD(learning_rate=0.02)\r\n\r\nmodel.compile(optimizer=custom_optimizer,loss='mean_squared_error' )\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Introduction to Tensorflow 2 Beta",src:t(215585).Z+"",width:"977",height:"797"})})]})}function h(e={}){const{wrapper:n}={...(0,a.ah)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>d});var i=t(667294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=d(t),p=a,g=u["".concat(l,".").concat(p)]||u[p]||c[p]||r;return t?i.createElement(g,s(s({ref:n},h),{},{components:t})):i.createElement(g,s({ref:n},h))}));h.displayName="MDXCreateElement"},675952:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-ccc87e8d9b472a864929c19fe8159b0e.jpg"},465867:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/tensorflow_01-794e84597a5d1fb3069c168dff74614b.png"},491394:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/tensorflow_02-b8cf5e613eece544bd7938337faaeeaf.png"},300233:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/tensorflow_03-b0a9d1faf5d2a72c7c327d8c7440e688.png"},731793:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/tensorflow_04-834e83c570240e929833405fd158b1d3.png"},350864:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/tensorflow_05-7642b4ab05941686e8622485f69c9908.png"},779889:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/tensorflow_06-14276634908d17ce76695f508d750a0b.png"},427750:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/tensorflow_07-023096d0c3ad74bb6232a6eb6e3041a0.png"},215585:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/tensorflow_08-3aed281dc8b2e860a862e900f771b274.png"}}]);