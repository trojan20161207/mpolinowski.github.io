"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[97402],{951184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(785893),r=t(603905);const i={sidebar_position:4840,slug:"2022-12-31",title:"Recurrent Neural Networks",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Generate text using a character-based RNN"},o=void 0,s={id:"IoT-and-Machine-Learning/ML/2022-12-31-tf-rnn-text-generation/index",title:"Recurrent Neural Networks",description:"Generate text using a character-based RNN",source:"@site/docs/IoT-and-Machine-Learning/ML/2022-12-31-tf-rnn-text-generation/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2022-12-31-tf-rnn-text-generation",slug:"/IoT-and-Machine-Learning/ML/2022-12-31-tf-rnn-text-generation/2022-12-31",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-31-tf-rnn-text-generation/2022-12-31",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2022-12-31-tf-rnn-text-generation/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4840,frontMatter:{sidebar_position:4840,slug:"2022-12-31",title:"Recurrent Neural Networks",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Generate text using a character-based RNN"},sidebar:"tutorialSidebar",previous:{title:"YOLOv7 Introduction",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-01-05-yolov7/2023-01-05"},next:{title:"Deep Convolutional Generative Adversarial Network",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-28-tf-gan-image-generator/2022-12-28"}},c={},l=[{value:"Get the Dataset",id:"get-the-dataset",level:2},{value:"Data Preparation",id:"data-preparation",level:2},{value:"Building the Model",id:"building-the-model",level:2},{value:"Defining the Loss Function",id:"defining-the-loss-function",level:3},{value:"Configure Checkpoints",id:"configure-checkpoints",level:3},{value:"Model Training",id:"model-training",level:2},{value:"Make Predictions",id:"make-predictions",level:2},{value:"Restore the latest Checkpoint",id:"restore-the-latest-checkpoint",level:3},{value:"Prediction Loop",id:"prediction-loop",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.ah)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Guangzhou, China",src:t(10774).Z+"",width:"1500",height:"662"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#get-the-dataset",children:"Get the Dataset"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#data-preparation",children:"Data Preparation"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#building-the-model",children:"Building the Model"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#defining-the-loss-function",children:"Defining the Loss Function"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#configure-checkpoints",children:"Configure Checkpoints"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#model-training",children:"Model Training"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#make-predictions",children:"Make Predictions"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#restore-the-latest-checkpoint",children:"Restore the latest Checkpoint"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#prediction-loop",children:"Prediction Loop"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Generate text using a character-based ",(0,a.jsx)(n.strong,{children:"RNN"})," - ",(0,a.jsx)(n.a,{href:"https://www.tensorflow.org/text/tutorials/text_generation",children:"see Tensorflow Tutorial"}),". The dataset used is a set of Shakespeare's writing from Andrej Karpathy's ",(0,a.jsx)(n.a,{href:"http://karpathy.github.io/2015/05/21/rnn-effectiveness/",children:"The Unreasonable Effectiveness of Recurrent Neural Networks"}),". The objective is to train an ",(0,a.jsx)(n.strong,{children:"LSTM"})," (Long Short Term Memory) network to predict the next character in a sequence of characters."]}),"\n",(0,a.jsx)(n.h2,{id:"get-the-dataset",children:"Get the Dataset"}),"\n",(0,a.jsx)(n.p,{children:"The Shakespeare excerpt we want to train our LSTM on is directly available from Tensorflow:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"# load dataset\ndata_url = tf.keras.utils.get_file('shakespeare.txt', 'https://storage.googleapis.com/download.tensorflow.org/data/shakespeare.txt')\n\ndataset_text = open(data_url, 'rb').read().decode(encoding='utf-8')\n"})}),"\n",(0,a.jsx)(n.h2,{id:"data-preparation",children:"Data Preparation"}),"\n",(0,a.jsx)(n.p,{children:"Tensorflow is not going to work with characters but we need to provide an index that maps each character to a number. For this we first need to find out what unique characters are contained within the training material and then assign them ascending numbers in a numpy array:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"# map text to numbers\n## obtain the unique characters in the dataset\nvocab = sorted(set(dataset_text))\n## create a mapping from unique characters to indices\nchar2idx = {char:index for index, char in enumerate(vocab)}\nidx2char = np.array(vocab)\n# convert dataset from 'characters' to 'integers'\ntext_as_int = np.array([char2idx[char] for char in dataset_text])\n"})}),"\n",(0,a.jsx)(n.p,{children:"We can now break up the dataset into sequences of 100 characters:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"# breaking up data into sequences\nSEQ_LENGTH = 100\n## calculate number of examples per epoch for sequence length of 100 characters \nexamples_per_epoch = len(dataset_text)//SEQ_LENGTH\n## the dataset holds around 1 mio. characters\n## so this generates around 10k sequences\nchar_dataset = tf.data.Dataset.from_tensor_slices(text_as_int)\nsequences = char_dataset.batch(SEQ_LENGTH+1, drop_remainder=True)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The network is supposed to predict the following character not contained within a sequence. So if you have a ",(0,a.jsx)(n.code,{children:"10"})," character sequence ",(0,a.jsx)(n.code,{children:"Hello Worl"})," we want to to be able to predict the next character that is going to be a ",(0,a.jsx)(n.code,{children:"d"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"For the training we are going to duplicate each sequence and shift it by 1 character - so that the training input set is missing a final character that is present in the target set. The network can then be trained on the input set and it's performance be verified by comparing it's prediction to the target set:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"## duplicate each sequence and shift +1/-1 it to form the input and target text:\ndef split_input_target(chunk):\n    input_text = chunk[:-1]\n    target_text = chunk[1:]\n    return input_text, target_text\n\ndataset = sequences.map(split_input_target)\n"})}),"\n",(0,a.jsx)(n.p,{children:"We can take a look at an excerpt from both sets:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"## visualize dataset\nfor input_example, target_example in  dataset.take(1):\n  print ('Input data: ', repr(''.join(idx2char[input_example.numpy()])))\n  print ('Target data:', repr(''.join(idx2char[target_example.numpy()])))\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"Input data:  're too dear: the leanness that\\nafflicts us, the object of our misery, is as an\\ninventory to particul'\nTarget data: 'e too dear: the leanness that\\nafflicts us, the object of our misery, is as an\\ninventory to particula'\n"})}),"\n",(0,a.jsx)(n.p,{children:"Before starting the training we should also shuffle the data and split it up into consumable batches:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"## shuffle the dataset and create batches\nBATCH_SIZE = 64\nBUFFER_SIZE = 10000\ndataset = dataset.shuffle(BUFFER_SIZE).batch(BATCH_SIZE, drop_remainder=True)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"building-the-model",children:"Building the Model"}),"\n",(0,a.jsxs)(n.p,{children:["We can use ",(0,a.jsx)(n.code,{children:"tf.keras.Sequential"})," to define the model with the following three layers:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"tf.keras.layers.Embedding"}),": The input layer. A trainable lookup table that will map the numbers of each character to a vector with ",(0,a.jsx)(n.code,{children:"embedding_dim"})," dimensions"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"tf.keras.layers.LSTM"}),": Long Short Term Memory network"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"tf.keras.layers.Dense"}),": The output layer, with ",(0,a.jsx)(n.code,{children:"vocab_size"})," (number of unique characters) outputs"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"def build_model(vocab_size, embedding_dim, rnn_units, batch_size):\n  \n  model = tf.keras.Sequential([\n    tf.keras.layers.Embedding(vocab_size, embedding_dim,\n                              batch_input_shape=[batch_size, None]),\n    tf.keras.layers.GRU(rnn_units,\n                        return_sequences=True,\n                        stateful=True,\n                        recurrent_initializer='glorot_uniform'),\n    tf.keras.layers.Dense(vocab_size)\n  ])\n\n  return model\n\n\nmodel = build_model(\n  vocab_size = len(vocab),\n  embedding_dim=EMBED_DIM,\n  rnn_units=RNN_UNITS,\n  batch_size=BATCH_SIZE)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"defining-the-loss-function",children:"Defining the Loss Function"}),"\n",(0,a.jsx)(n.p,{children:"Before compiling the model we need to define a loss function that allows us to quantify the performance of our model:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"def loss(labels, logits):\n  return tf.keras.losses.sparse_categorical_crossentropy(labels, logits, from_logits=True)\n\nexample_batch_loss  = loss(target_example_batch, example_batch_predictions)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"model.compile(optimizer='adam', loss=loss)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"configure-checkpoints",children:"Configure Checkpoints"}),"\n",(0,a.jsx)(n.p,{children:"Optionally create checkpoints:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"# directory where the checkpoints will be saved\ncheckpoint_dir = './training_checkpoints'\n# name of the checkpoint files\ncheckpoint_prefix = os.path.join(checkpoint_dir, \"ckpt_{epoch}\")\n\ncheckpoint_callback=tf.keras.callbacks.ModelCheckpoint(\n    filepath=checkpoint_prefix,\n    save_weights_only=True)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"model-training",children:"Model Training"}),"\n",(0,a.jsx)(n.p,{children:"Now we can fit our model to the training data:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"EPOCHS=10\nhistory = model.fit(dataset, epochs=EPOCHS, callbacks=[checkpoint_callback])\n"})}),"\n",(0,a.jsx)(n.h2,{id:"make-predictions",children:"Make Predictions"}),"\n",(0,a.jsx)(n.h3,{id:"restore-the-latest-checkpoint",children:"Restore the latest Checkpoint"}),"\n",(0,a.jsxs)(n.p,{children:["To keep this prediction step simple, use a batch size of 1. Because of the way the RNN state is passed from timestep to timestep, the model only accepts a fixed batch size once built. To run the model with a different ",(0,a.jsx)(n.code,{children:"batch_size"}),", we need to rebuild the model and restore the weights from the checkpoint."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"## locate latest checkpoint\ncheckpoint_dir = './training_checkpoints'\ntf.train.latest_checkpoint(checkpoint_dir)\n\n\n## load weights from checkpoint\nmodel.load_weights(tf.train.latest_checkpoint(checkpoint_dir)).expect_partial()\nmodel.build(tf.TensorShape([1, None]))\n"})}),"\n",(0,a.jsx)(n.h3,{id:"prediction-loop",children:"Prediction Loop"}),"\n",(0,a.jsx)(n.p,{children:"Looking at the generated text, you'll see the model knows when to capitalize, make paragraphs and imitates a Shakespeare-like writing vocabulary. With the small number of training epochs, it has not yet learned to form coherent sentences:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"# prediction loop\ndef generate_text(model, start_string):\n  # evaluation step (generating text using the learned model)\n\n  # number of characters to generate\n  num_generate = 1000\n\n  # converting our start string to numbers (vectorizing)\n  input_eval = [char2idx[s] for s in start_string]\n  input_eval = tf.expand_dims(input_eval, 0)\n\n  # Empty string to store our results\n  text_generated = []\n\n  # low lsd results in more predictable text.\n  # higher lsd results in more surprising text.\n  # experiment to find the best setting.\n  lsd = 1.0\n\n  # here batch size == 1\n  model.reset_states()\n  for i in range(num_generate):\n      predictions = model(input_eval)\n      # remove the batch dimension\n      predictions = tf.squeeze(predictions, 0)\n\n      # using a categorical distribution to predict the word returned by the model\n      predictions = predictions / lsd\n      predicted_id = tf.random.categorical(predictions, num_samples=1)[-1,0].numpy()\n\n      # We pass the predicted word as the next input to the model\n      # along with the previous hidden state\n      input_eval = tf.expand_dims([predicted_id], 0)\n\n      text_generated.append(idx2char[predicted_id])\n\n  return (start_string + ''.join(text_generated))\n\n\nprint(generate_text(model, start_string=u\"ROMEO: \"))\n"})}),"\n",(0,a.jsx)(n.p,{children:"This results in the shakespearian screenplay:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:"ROMEO: the heavy liege,\nI have forced to him by him? what of right worship by her furied blood;\nTherefore we do well, that alive Upon your deep spack\nThere I have found'd Aumerle.\n\nWARWICK: I'll cun yield.\n\nGREMIO: The time have done the truth! do you not till come.\n\nVONUMNIA: I think, his wrong. But then; ig! Would I\nmust, gentlemen, dies thee to my body.\nO, behold my chamber:\nGo, bight out some nature fiest their perbary; he kill'd\nfrom the meat complaing of my poor hand; as much.\n\nQUEEN MARGARD: My Lord of Norfolk. Kate, I hear,\nWere not the child if you fall,\nUnder'd by a child, on Warwick was even, Angelo?\nHe do one kiss how awaken home. Can altigal my love to propership all these\nYour ewemst to speak.\n\nFirst Citizen: Out, my got you sick and sly by his purpose.\n\nKING RICHARD II: Then shall with virgue Of Edward withstarks, brotherss\nOf the madry thuse her black full of 'twas news\nTyat will put it not.\n\nJULIET: Thou art a dester.\n\nFLORIZEL: I thought with senses\nAway.\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Reducing the amount of LSD consumed by the algorithm by a factor of ",(0,a.jsx)(n.code,{children:"10"})," results in a much less confusing scene:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:"KATHERINE: the duke is not the prince's death,\nAnd therefore for the people, the death of the market-place.\n\nKING RICHARD II:\nWhat means the death of the people,\nAnd therefore be so much to my fortune and the prouderous bones,\nAnd shall be so far off the market-place.\n\nCLARENCE:\nThe matter of the proudest of the people,\nAnd therefore for the people, the prouder than the season be a poor boy.\n\nKING RICHARD II:\nWhat means the death of the market-place;\nAnd therefore be so soon as I say.\n\nKING RICHARD II:\nWhat means the season be a poor princely father's son,\nThe shame of the people, the present peace\nWith the people and the heart of the people,\nAnd therefore be so far off the death of the heart.\n\nKING RICHARD II:\nWhat man that the matter?\n\nCORIOLANUS:\nWhat means the day of the market-place.\n\nCLARENCE:\nThe matter of the people and the bear me but the season be a proudly sentence\nThat we shall be here all the world is dead.\n\nKING RICHARD II:\nWhat man that we shall be so far off for the people\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>l});var a=t(667294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=r,f=p["".concat(c,".").concat(u)]||p[u]||h[u]||i;return t?a.createElement(f,o(o({ref:n},d),{},{components:t})):a.createElement(f,o({ref:n},d))}));d.displayName="MDXCreateElement"},10774:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-296769d73822f07b0ac5dc952f56bfa1.jpg"}}]);