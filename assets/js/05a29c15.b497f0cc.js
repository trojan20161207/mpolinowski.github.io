"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[87201],{167274:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=a(785893),i=a(603905);const s={sidebar_position:4190,slug:"2023-08-12",title:"Tensorflow Image Classifier - Xception",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Blue print image classifier using Tensorflow and Keras Applications pre-trained models"},o="Tf Image Classifier",r={id:"IoT-and-Machine-Learning/ML/2023-08-12-tensorflow-i-know-flowers-xception/index",title:"Tensorflow Image Classifier - Xception",description:"Blue print image classifier using Tensorflow and Keras Applications pre-trained models",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-08-12-tensorflow-i-know-flowers-xception/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-08-12-tensorflow-i-know-flowers-xception",slug:"/IoT-and-Machine-Learning/ML/2023-08-12-tensorflow-i-know-flowers-xception/2023-08-12",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-12-tensorflow-i-know-flowers-xception/2023-08-12",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-08-12-tensorflow-i-know-flowers-xception/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"}],version:"current",sidebarPosition:4190,frontMatter:{sidebar_position:4190,slug:"2023-08-12",title:"Tensorflow Image Classifier - Xception",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Blue print image classifier using Tensorflow and Keras Applications pre-trained models"},sidebar:"tutorialSidebar",previous:{title:"Tensorflow Image Classifier - Model Evaluation",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-13-tensorflow-i-know-flowers-model-eval/2023-08-13"},next:{title:"Tensorflow Image Classifier - ViT",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-11-tensorflow-i-know-flowers-vit/2023-08-11"}},l={},c=[{value:"Xception - FineTuning",id:"xception---finetuning",level:2},{value:"Dataset",id:"dataset",level:2},{value:"Building the Xception TF Model",id:"building-the-xception-tf-model",level:2},{value:"Model Training",id:"model-training",level:3},{value:"Model Evaluation",id:"model-evaluation",level:3},{value:"Saving the Model",id:"saving-the-model",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Angkor Wat, Cambodia",src:a(929613).Z+"",width:"1500",height:"706"})}),"\n",(0,t.jsx)(n.h1,{id:"tf-image-classifier",children:"Tf Image Classifier"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-01-tensorflow-i-know-flowers-intro/2023-08-01",children:"Overview - Model Evaluation & Deployment"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"xception---finetuning",children:"Xception - FineTuning"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import cv2 as cv\nimport matplotlib.pyplot as plt\nimport numpy as np\nfrom PIL import Image\nfrom sklearn.metrics import (\n    classification_report,\n    confusion_matrix,\n    ConfusionMatrixDisplay)\nimport seaborn as sns\n\nimport tensorflow as tf\nfrom tensorflow.io import TFRecordWriter\nfrom tensorflow.keras import Sequential\nfrom tensorflow.keras.callbacks  import (\n    Callback,\n    CSVLogger,\n    EarlyStopping,\n    LearningRateScheduler,\n    ModelCheckpoint\n)\nfrom tensorflow.keras.layers import (\n    Layer,\n    GlobalAveragePooling2D,\n    Conv2D,\n    MaxPool2D,\n    Dense,\n    Flatten,\n    InputLayer,\n    BatchNormalization,\n    Input,\n    Dropout,\n    RandomFlip,\n    RandomRotation,\n    RandomContrast,\n    RandomBrightness,\n    Resizing,\n    Rescaling\n)\nfrom tensorflow.keras.losses import BinaryCrossentropy, CategoricalCrossentropy, SparseCategoricalCrossentropy\nfrom tensorflow.keras.metrics import CategoricalAccuracy, TopKCategoricalAccuracy, SparseCategoricalAccuracy\nfrom tensorflow.keras.models import Model\nfrom tensorflow.keras.optimizers import Adam\nfrom tensorflow.keras.preprocessing.image import ImageDataGenerator\nfrom tensorflow.keras.regularizers import L2, L1\nfrom tensorflow.keras.utils import image_dataset_from_directory\nfrom tensorflow.train import Feature, Features, Example, BytesList, Int64List\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"BATCH = 32\nSIZE = 224\nSEED = 42\n\nEPOCHS = 20\nLR = 0.001\nFILTERS = 6\nKERNEL = 3\nSTRIDES = 1\nREGRATE = 0.0\nPOOL = 2\nDORATE = 0.05\nLABELS = ['Gladiolus', 'Adenium', 'Alpinia_Purpurata', 'Alstroemeria', 'Amaryllis', 'Anthurium_Andraeanum', 'Antirrhinum', 'Aquilegia', 'Billbergia_Pyramidalis', 'Cattleya', 'Cirsium', 'Coccinia_Grandis', 'Crocus', 'Cyclamen', 'Dahlia', 'Datura_Metel', 'Dianthus_Barbatus', 'Digitalis', 'Echinacea_Purpurea', 'Echinops_Bannaticus', 'Fritillaria_Meleagris', 'Gaura', 'Gazania', 'Gerbera', 'Guzmania', 'Helianthus_Annuus', 'Iris_Pseudacorus', 'Leucanthemum', 'Malvaceae', 'Narcissus_Pseudonarcissus', 'Nerine', 'Nymphaea_Tetragona', 'Paphiopedilum', 'Passiflora', 'Pelargonium', 'Petunia', 'Platycodon_Grandiflorus', 'Plumeria', 'Poinsettia', 'Primula', 'Protea_Cynaroides', 'Rose', 'Rudbeckia', 'Strelitzia_Reginae', 'Tropaeolum_Majus', 'Tussilago', 'Viola', 'Zantedeschia_Aethiopica']\nNLABELS = len(LABELS)\nDENSE1 = 1024\nDENSE2 = 128\n"})}),"\n",(0,t.jsx)(n.h2,{id:"dataset",children:"Dataset"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"train_directory = '../dataset/Flower_Dataset/split/train'\ntest_directory = '../dataset/Flower_Dataset/split/val'\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"train_dataset = image_dataset_from_directory(\n    train_directory,\n    labels='inferred',\n    label_mode='categorical',\n    class_names=LABELS,\n    color_mode='rgb',\n    batch_size=BATCH,\n    image_size=(SIZE, SIZE),\n    shuffle=True,\n    seed=SEED,\n    interpolation='bilinear',\n    follow_links=False,\n    crop_to_aspect_ratio=False\n)\n\n# Found 9206 files belonging to 48 classes.\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"test_dataset = image_dataset_from_directory(\n    test_directory,\n    labels='inferred',\n    label_mode='categorical',\n    class_names=LABELS,\n    color_mode='rgb',\n    batch_size=BATCH,\n    image_size=(SIZE, SIZE),\n    shuffle=True,\n    seed=SEED\n)\n\n# Found 3090 files belonging to 48 classes.\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"data_augmentation = Sequential([\n        # Resizing(150, 150),\n        RandomRotation(factor=0.25),\n        RandomFlip(mode='horizontal'),\n        RandomContrast(factor=0.1),\n        RandomBrightness(0.1)\n    ],\n    name=\"img_augmentation\",\n)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"training_dataset = (\n    train_dataset\n    .map(lambda image, label: (data_augmentation(image), label))\n    .prefetch(tf.data.AUTOTUNE)\n)\n\n\ntesting_dataset = (\n    test_dataset.prefetch(\n        tf.data.AUTOTUNE\n    )\n)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"building-the-xception-tf-model",children:"Building the Xception TF Model"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# transfer learning\n\nbackbone = tf.keras.applications.Xception(\n    input_shape=(SIZE, SIZE, 3),\n    include_top=False,\n    weights="imagenet"\n)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"backbone.trainable = False\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"input = Input(shape=(SIZE,SIZE,3))\n\n# random image augmentation\ndata_aug = data_augmentation(input)\n# Pre-trained Xception weights requires that input be scaled\n# from (0, 255) to a range of (-1., +1.), the rescaling layer\n# outputs: `(inputs * scale) + offset`\nscale_layer = Rescaling(scale=1 / 127.5, offset=-1)\ndata_aug_scaled = scale_layer(data_aug)\n\nx = backbone(data_aug_scaled, training=False)\n\nx = GlobalAveragePooling2D()(x)\n# Regularize with dropout\nx = Dropout(0.2)(x)\nx = Dense(DENSE1, activation='relu')(x)\nx = BatchNormalization()(x)\nx = Dense(DENSE2, activation='relu')(x)\n\noutput = Dense(NLABELS, activation='softmax')(x)\n\nxception_model = Model(input, output)\nxception_model.summary()\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"checkpoint_callback = ModelCheckpoint(\n    '../best_weights',\n    monitor='val_accuracy',\n    mode='max',\n    verbose=1,\n    save_best_only=True\n)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"early_stopping_callback = EarlyStopping(\n    monitor='val_accuracy',\n    patience=10,\n    restore_best_weights=True\n)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"loss_function = CategoricalCrossentropy()\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"metrics = [CategoricalAccuracy(name='accuracy')]\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"xception_model.compile(\n    optimizer = Adam(learning_rate=LR),\n    loss = loss_function,\n    metrics = metrics\n)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"model-training",children:"Model Training"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"xception_history = xception_model.fit(\n    training_dataset,\n    validation_data = testing_dataset,\n    epochs = EPOCHS,\n    verbose = 1,\n    # callbacks=[checkpoint_callback, early_stopping_callback]\n)\n\n# loss: 0.5019\n# accuracy: 0.8426\n# val_loss: 0.6363\n# val_accuracy: 0.8188\n"})}),"\n",(0,t.jsx)(n.h3,{id:"model-evaluation",children:"Model Evaluation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"xception_model.evaluate(testing_dataset)\n# loss: 0.6363 - accuracy: 0.8188\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"plt.plot(xception_history.history['loss'])\nplt.plot(xception_history.history['val_loss'])\nplt.title('Model Loss')\nplt.ylabel('loss')\nplt.xlabel('epoch')\nplt.legend(['train_loss', 'val_loss'])\nplt.savefig('assets/Xception_01.webp', bbox_inches='tight')\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"tf Emotion Detection",src:a(969925).Z+"",width:"567",height:"455"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"plt.plot(xception_history.history['accuracy'])\nplt.plot(xception_history.history['val_accuracy'])\nplt.title('Model Accuracy')\nplt.ylabel('accuracy')\nplt.xlabel('epoch')\nplt.legend(['train_accuracy', 'val_accuracy'])\nplt.savefig('assets/Xception_02.webp', bbox_inches='tight')\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"tf Emotion Detection",src:a(199121).Z+"",width:"576",height:"455"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"test_image_bgr = cv.imread('../dataset/snapshots/Viola_Tricolor.jpg')\ntest_image_resized = cv.resize(test_image_bgr, (SIZE, SIZE))\ntest_image_rgb = cv.cvtColor(test_image_resized, cv.COLOR_BGR2RGB)\nimg = tf.constant(test_image_rgb, dtype=tf.float32)\nimg = tf.expand_dims(img, axis=0)\n\nprobs = xception_model(img).numpy()\nlabel = LABELS[tf.argmax(probs, axis=1).numpy()[0]]\n\nprint(label, str(probs[0]))\n\nplt.imshow(test_image_rgb)\nplt.title(label)\nplt.axis('off')\n        \nplt.savefig('assets/Xception_Prediction_01.webp', bbox_inches='tight')\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"tf Emotion Detection",src:a(230763).Z+"",width:"389",height:"411"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"test_image_bgr = cv.imread('../dataset/snapshots/Strelitzia.jpg')\ntest_image_resized = cv.resize(test_image_bgr, (SIZE, SIZE))\ntest_image_rgb = cv.cvtColor(test_image_resized, cv.COLOR_BGR2RGB)\nimg = tf.constant(test_image_rgb, dtype=tf.float32)\nimg = tf.expand_dims(img, axis=0)\n\nprobs = xception_model(img).numpy()\nlabel = LABELS[tf.argmax(probs, axis=1).numpy()[0]]\n\nprint(label, str(probs[0]))\n\nplt.imshow(test_image_rgb)\nplt.title(label)\nplt.axis('off')\n        \nplt.savefig('assets/Xception_Prediction_02.webp', bbox_inches='tight')\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"tf Emotion Detection",src:a(517526).Z+"",width:"389",height:"411"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"test_image_bgr = cv.imread('../dataset/snapshots/Water_Lilly.jpg')\ntest_image_resized = cv.resize(test_image_bgr, (SIZE, SIZE))\ntest_image_rgb = cv.cvtColor(test_image_resized, cv.COLOR_BGR2RGB)\nimg = tf.constant(test_image_rgb, dtype=tf.float32)\nimg = tf.expand_dims(img, axis=0)\n\nprobs = xception_model(img).numpy()\nlabel = LABELS[tf.argmax(probs, axis=1).numpy()[0]]\n\nprint(label, str(probs[0]))\n\nplt.imshow(test_image_rgb)\nplt.title(label)\nplt.axis('off')\n        \nplt.savefig('assets/Xception_Prediction_03.webp', bbox_inches='tight')\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"tf Emotion Detection",src:a(289443).Z+"",width:"389",height:"411"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"plt.figure(figsize=(16,16))\n\nfor images, labels in testing_dataset.take(1):\n    for i in range(16):\n        ax = plt.subplot(4,4,i+1)\n        true = \"True: \" + LABELS[tf.argmax(labels[i], axis=0).numpy()]\n        pred = \"Predicted: \" + LABELS[\n            tf.argmax(xception_model(tf.expand_dims(images[i], axis=0)).numpy(), axis=1).numpy()[0]\n        ]\n        plt.title(\n           true  + \"\\n\" + pred\n        )\n        plt.imshow(images[i]/255.)\n        plt.axis('off')\n        \nplt.savefig('assets/Xception_FT_03.webp', bbox_inches='tight')\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"tf Emotion Detection",src:a(885730).Z+"",width:"1270",height:"1295"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"y_pred = []\ny_test = []\n\nfor img, label in testing_dataset:\n    y_pred.append(xception_model(img))\n    y_test.append(label.numpy())\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"conf_mtx = ConfusionMatrixDisplay(\n    confusion_matrix=confusion_matrix(\n        np.argmax(y_test[:-1], axis=-1).flatten(),\n        np.argmax(y_pred[:-1], axis=-1).flatten()\n    ),\n    display_labels=LABELS\n)\n\nfig, ax = plt.subplots(figsize=(16,12))\nconf_mtx.plot(ax=ax, cmap='plasma', include_values=True, xticks_rotation='vertical',)\n\nplt.savefig('assets/Xception_FT_04.webp', bbox_inches='tight')\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"tf Emotion Detection",src:a(978755).Z+"",width:"1305",height:"1160"})}),"\n",(0,t.jsx)(n.h3,{id:"saving-the-model",children:"Saving the Model"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"tf.keras.saving.save_model(\n    xception_model, '../saved_model/xception_model', overwrite=True, save_format='tf'\n)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# restore the model\nrestored_model2 = tf.keras.saving.load_model('../saved_model/xception_model')\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Check its architecture\nrestored_model2.summary()\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"restored_model2.evaluate(testing_dataset)\n# loss: 0.6363 - accuracy: 0.8188\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},603905:(e,n,a)=>{a.d(n,{ah:()=>c});var t=a(667294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=c(a),g=i,h=m["".concat(l,".").concat(g)]||m[g]||d[g]||s;return a?t.createElement(h,o(o({ref:n},p),{},{components:a})):t.createElement(h,o({ref:n},p))}));p.displayName="MDXCreateElement"},969925:(e,n,a)=>{a.d(n,{Z:()=>t});const t="data:image/webp;base64,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"},199121:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/Xception_02-36ead3860a27edbf3685aa4dc8f42709.webp"},885730:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/Xception_FT_03-d94711ce574e2c68b2e9124c416792c4.webp"},978755:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/Xception_FT_04-4d3bd33df3787a584eeee6ee9c103546.webp"},230763:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/Xception_Prediction_01-1c4c944bd8cc6908d39588b4265bbc8e.webp"},517526:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/Xception_Prediction_02-cb566f9e2a0ff163d5ea7feca5986887.webp"},289443:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/Xception_Prediction_03-56940b6847fb2b6012fc7d7dfdf0d4ae.webp"},929613:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-4b4c922f390788acb724c3c274da1ef9.jpg"}}]);