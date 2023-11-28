"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[16416],{650035:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var i=o(785893),s=o(603905);const t={sidebar_position:4300,slug:"2023-08-01",title:"Tensorflow Image Classifier - Introduction",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Blue print image classifier using Tensorflow and Keras Applications pre-trained models"},l="Tf Image Classifier",r={id:"IoT-and-Machine-Learning/ML/2023-08-01-tensorflow-i-know-flowers-intro/index",title:"Tensorflow Image Classifier - Introduction",description:"Blue print image classifier using Tensorflow and Keras Applications pre-trained models",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-08-01-tensorflow-i-know-flowers-intro/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-08-01-tensorflow-i-know-flowers-intro",slug:"/IoT-and-Machine-Learning/ML/2023-08-01-tensorflow-i-know-flowers-intro/2023-08-01",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-01-tensorflow-i-know-flowers-intro/2023-08-01",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-08-01-tensorflow-i-know-flowers-intro/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"}],version:"current",sidebarPosition:4300,frontMatter:{sidebar_position:4300,slug:"2023-08-01",title:"Tensorflow Image Classifier - Introduction",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Blue print image classifier using Tensorflow and Keras Applications pre-trained models"},sidebar:"tutorialSidebar",previous:{title:"Tensorflow Image Classifier - Data Pre-processing",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-02-tensorflow-i-know-flowers-preprocessing/2023-08-02"},next:{title:"Tensorflow VITs",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-07-27-tensorflow-vision-transformer/2023-07-27"}},a={},d=[{value:"Model Training",id:"model-training",level:2},{value:"Docker Setup",id:"docker-setup",level:3},{value:"Model Serving",id:"model-serving",level:2},{value:"Inference Server",id:"inference-server",level:3},{value:"REST API",id:"rest-api",level:4},{value:"Serving Multiple Models",id:"serving-multiple-models",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Angkor Wat, Cambodia",src:o(893149).Z+"",width:"1500",height:"706"})}),"\n",(0,i.jsx)(n.h1,{id:"tf-image-classifier",children:"Tf Image Classifier"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/mpolinowski/tf-i-know-flowers",children:"Github Repository"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"model-training",children:"Model Training"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-13-tensorflow-i-know-flowers-model-eval/2023-08-13",children:"Evaluation Overview"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-04-tensorflow-i-know-flowers-efficientnetv2b0/2023-08-04",children:"EfficientNetV2B0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-05-tensorflow-i-know-flowers-efficientnetv2s/2023-08-05",children:"EfficientNetV2S"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-12-tensorflow-i-know-flowers-xception/2023-08-12",children:"Xception"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-06-tensorflow-i-know-flowers-inceptionv3/2023-08-06",children:"InceptionV3"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-10-tensorflow-i-know-flowers-nasnetmobile/2023-08-10",children:"NASNetMobile"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-09-tensorflow-i-know-flowers-mobilenetv3small/2023-08-09",children:"MobileNetV3Small"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-08-tensorflow-i-know-flowers-mobilenetv3large/2023-08-08",children:"MobileNetV3Large"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-07-tensorflow-i-know-flowers-mobilenetv2/2023-08-07",children:"MobileNetV2"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-11-tensorflow-i-know-flowers-vit/2023-08-11",children:"vit-base-patch16-224"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-03-tensorflow-i-know-flowers-deit/2023-08-03",children:"DeiT"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Tf Image Classifier",src:o(625015).Z+"",width:"1008",height:"474"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Tf Image Classifier",src:o(849772).Z+"",width:"1008",height:"474"})}),"\n",(0,i.jsx)(n.h3,{id:"docker-setup",children:"Docker Setup"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker pull tensorflow/tensorflow:latest-gpu-jupyter\n"})}),"\n",(0,i.jsxs)(n.p,{children:["All notebooks mounted into ",(0,i.jsx)(n.code,{children:"/tf/notebooks"})," will be accessible from the served Jupyter Notebook. After running the command you can access the Jupyter UI on ",(0,i.jsx)(n.code,{children:"localhost:8888"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run --gpus all --rm -p 8888:8888 --name tf-notebook \\\n--mount type=bind,source=$(pwd),target=/tf/notebooks \\\ntensorflow/tensorflow:latest-gpu-jupyter\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"To access the notebook, open this file in a browser:\n        file:///root/.local/share/jupyter/runtime/nbserver-1-open.html\n    Or copy and paste one of these URLs:\n        http://b62cc9c31655:8888/?token=484cd6b995e8dc53f878795f00a83015c74410771882141c\n     or http://127.0.0.1:8888/?token=484cd6b995e8dc53f878795f00a83015c74410771882141c\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Tf Image Classifier",src:o(448484).Z+"",width:"1252",height:"884"})}),"\n",(0,i.jsx)(n.h2,{id:"model-serving",children:"Model Serving"}),"\n",(0,i.jsxs)(n.p,{children:["I am going to use the official Tensorflow ",(0,i.jsx)(n.code,{children:"tensorflow-serving"})," Docker container to deploy the model:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/AIOps/2023-01-01-tf-model-server/2023-01-01/",children:"Tensorflow Docker Model Server"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Simply point the source directory to the model save path that you want to use, e.g. ",(0,i.jsx)(n.code,{children:"Efficientv2B0"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run --gpus all -p 8501:8501 --name tf-serve \\\n--mount type=bind,source=$(pwd)/saved_model,target=/models \\\n-e MODEL_NAME=efficientv2b0_model -t tensorflow/serving:latest-gpu\n"})}),"\n",(0,i.jsx)(n.h3,{id:"inference-server",children:"Inference Server"}),"\n",(0,i.jsx)(n.h4,{id:"rest-api",children:"REST API"}),"\n",(0,i.jsx)(n.p,{children:"For testing I will just start a simple python container and install my dependencies manually:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run --rm -ti --network host \\\n--mount type=bind,source=$(pwd)/api_request,target=/opt/app \\\npython:alpine /bin/ash\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install pillow requests numpy\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Executing the API request script ",(0,i.jsx)(n.code,{children:"/opt/app/api_request/rest_request.py"})," inside the container will send 1 of 3 test images to the Tensorflow model API to retrieve a prediction:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python /opt/app/rest_request.py\n\nClass probabilities:  [[2.02370361e-13 5.45808624e-12 3.14568647e-17 4.50543422e-11\n  1.74268600e-09 2.22335952e-12 5.15965439e-12 2.28333991e-10\n  3.17855503e-18 3.61456546e-12 1.40493947e-17 1.46841839e-09\n  3.42843321e-13 2.59899831e-16 2.68869540e-12 1.53930095e-08\n  1.36200578e-12 6.06594810e-16 2.21194929e-14 5.79839779e-17\n  1.05216942e-12 6.55278443e-10 2.30210545e-13 6.22206000e-15\n  5.16498033e-16 1.86334712e-15 7.34451477e-09 9.92521278e-13\n  1.40660292e-08 5.47506651e-10 3.36575397e-16 1.56563315e-12\n  4.54165000e-09 4.07618221e-13 1.69515952e-05 1.08003778e-05\n  2.42027980e-08 1.65058089e-09 1.25125591e-13 4.95898966e-09\n  1.62804418e-16 5.25978046e-17 1.91704139e-14 2.93358880e-18\n  3.04848768e-08 1.63559369e-14 9.99972224e-01 2.25344784e-10]]\n\nPredicted class:  Viola\n"})}),"\n",(0,i.jsx)(n.h2,{id:"serving-multiple-models",children:"Serving Multiple Models"}),"\n",(0,i.jsx)(n.p,{children:"Ok, with this working I want to configure the Model Server to serve all the trained models."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"tree -L 2 saved_model\n\nsaved_model\n\u251c\u2500\u2500 deit_model\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 efficients_model\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 efficientv2b0_model\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 inception_model_model_ft\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 mobilenet2_model_ft\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 mobilenetv3L_model_ft\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 mobilenetv3S_model\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 nasnetmobile_model_ft\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 vit_model\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u2514\u2500\u2500 xception_model\n    \u2514\u2500\u2500 1\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For this we have to add a ",(0,i.jsx)(n.a,{href:"https://www.tensorflow.org/tfx/serving/serving_config",children:"models.config"})," file inside the ",(0,i.jsx)(n.code,{children:"models"})," container. The configuration file can then be added by adding the following flags (the automatic reload is optional):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run -t --rm -p 8501:8501 --name tf-serve \\\n    --mount type=bind,source=$(pwd)/saved_model,target=/models \\\n    tensorflow/serving:latest-gpu \\\n    --model_config_file=/models/models.config \\\n    --model_config_file_poll_wait_seconds=60\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"./saved_model/models.config"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"model_config_list {\n  config {\n    name: 'deit_model'\n    base_path: '/models/deit_model/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'efficients_model'\n    base_path: '/models/efficients_model/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'efficientv2b0_model'\n    base_path: '/models/efficientv2b0_model/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'inception_model_model_ft'\n    base_path: '/models/inception_model_model_ft/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'mobilenet2_model_ft'\n    base_path: '/models/mobilenet2_model_ft/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'mobilenetv3L_model_ft'\n    base_path: '/models/mobilenetv3L_model_ft/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'mobilenetv3S_model'\n    base_path: '/models/mobilenetv3S_model/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'nasnetmobile_model_ft'\n    base_path: '/models/nasnetmobile_model_ft/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'vit_model'\n    base_path: '/models/vit_model/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'xception_model'\n    base_path: '/models/xception_model/'\n    model_platform: 'tensorflow'\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Since my system does not like to load all the models at once - I simplified this to:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"model_config_list {\n  config {\n    name: 'efficientv2b0_model'\n    base_path: '/models/efficientv2b0_model/'\n    model_platform: 'tensorflow'\n    model_version_policy {\n    specific {\n      versions: 1\n      }\n    }\n  }\n  config {\n    name: 'mobilenetv3S_model'\n    base_path: '/models/mobilenetv3S_model/'\n    model_platform: 'tensorflow'\n    model_version_policy {\n    specific {\n      versions: 1\n      }\n    }\n  }\n  config {\n    name: 'vit_model'\n    base_path: '/models/vit_model/'\n    model_platform: 'tensorflow'\n    model_version_policy {\n    specific {\n      versions: 1\n      }\n    }\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Starting up the container I can now see that Tensorflow is reloading all three models in a 60s interval:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"tensorflow_serving/model_servers/server.cc:430] Exporting HTTP/REST API at:localhost:8501 ...\ntensorflow_serving/model_servers/server_core.cc:465] Adding/updating models.\ntensorflow_serving/model_servers/server_core.cc:594]  (Re-)adding model: efficientv2b0_model\ntensorflow_serving/model_servers/server_core.cc:594]  (Re-)adding model: mobilenetv3S_model\ntensorflow_serving/model_servers/server_core.cc:594]  (Re-)adding model: vit_model\ntensorflow_serving/model_servers/server_core.cc:486] Finished adding/updating models\n"})}),"\n",(0,i.jsx)(n.p,{children:"I now added the URL for all three models to the Python request script:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"url1 = 'http://localhost:8501/v1/models/efficientv2b0_model:predict'\nurl2 = 'http://localhost:8501/v1/models/mobilenetv3S_model:predict'\nurl3 = 'http://localhost:8501/v1/models/vit_model:predict'\n"})}),"\n",(0,i.jsx)(n.p,{children:"That will now return 3 predictions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python /opt/app/rest_request.py\nPrediction Results: EfficientV2B0\nClass probabilities:  [[1.27231669e-18 7.36642785e-15 2.12142088e-16 8.37840160e-13\n  2.54633266e-15 2.23082670e-22 1.22582740e-17 1.58766519e-16\n  3.15969443e-21 3.40760905e-12 9.31879706e-21 1.35364190e-16\n  4.19998346e-13 6.28031038e-19 1.42876893e-08 1.52733778e-16\n  1.71126649e-18 6.26449727e-18 1.70084369e-22 5.93363685e-27\n  1.35457736e-23 9.82926604e-26 1.07540425e-15 1.03456081e-16\n  5.33486490e-14 1.70107328e-19 1.25875951e-20 1.54503871e-19\n  2.05770212e-19 9.31224634e-16 2.43002143e-25 1.00000000e+00\n  1.49300737e-20 6.64273082e-17 4.00534170e-18 3.18333764e-19\n  1.38794318e-24 5.08237766e-13 4.06667683e-19 4.50689589e-13\n  4.09000394e-16 6.34139226e-13 2.21711468e-24 3.38089155e-23\n  1.83935487e-19 3.32891393e-19 1.46283768e-16 3.42905371e-23]]\nPredicted class:  Nymphaea_Tetragona\nCertainty:  100.0 %\nPrediction Results: MobileNetV3S\nClass probabilities:  [[6.27168000e-08 9.36711274e-07 3.32008640e-05 1.82103206e-04\n  3.65090000e-05 7.08905601e-10 5.29715000e-09 2.18803660e-08\n  1.43549421e-08 2.40992620e-07 2.09935107e-12 9.32755886e-11\n  1.55253754e-10 2.58531685e-08 1.72480277e-03 9.44796508e-09\n  1.51912500e-12 3.97989908e-07 4.73708963e-13 2.97169041e-14\n  4.57825137e-14 4.23965169e-11 4.12751433e-07 1.92947700e-05\n  8.95965513e-06 5.97457550e-09 4.81428591e-13 3.20082150e-13\n  1.89814697e-09 9.56469748e-09 3.24247695e-09 9.97930884e-01\n  9.90472593e-09 2.25990516e-06 2.97242941e-09 4.48806965e-08\n  8.23452157e-12 5.94276535e-05 3.16433564e-08 3.98971480e-07\n  2.16912586e-08 8.35711322e-09 1.56445000e-12 1.42842169e-10\n  2.86222768e-10 7.43138450e-12 1.27389072e-10 1.44366144e-10]]\nPredicted class:  Nymphaea_Tetragona\nCertainty:  99.793 %\nPrediction Results: ViT\nClass probabilities:  [[2.62611400e-04 9.45560227e-04 7.97024090e-03 2.50866893e-03\n  5.62246714e-04 9.96018527e-04 5.78884617e-04 1.15711347e-03\n  1.87621685e-03 2.56323745e-03 1.19275635e-03 5.13695000e-04\n  8.98167782e-04 4.11458139e-04 1.77495480e-02 3.71844682e-04\n  3.45975481e-04 1.64183730e-04 1.62366749e-04 4.10321372e-04\n  5.85561967e-04 4.59756848e-04 7.18721712e-04 2.03839969e-03\n  2.18398985e-03 8.30425473e-04 5.62683621e-04 1.05744123e-03\n  1.08664425e-03 8.36106890e-04 4.69557708e-04 9.25359428e-01\n  7.82242860e-04 8.19175097e-04 4.58333000e-04 2.90713477e-04\n  2.36424108e-04 8.55224300e-03 6.25506684e-04 9.37757781e-04\n  5.16826578e-04 4.17304225e-03 5.67917000e-04 4.71120235e-04\n  7.65961187e-04 7.77638000e-04 1.47661043e-03 7.18727824e-04]]\nPredicted class:  Nymphaea_Tetragona\nCertainty:  92.536 %\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},603905:(e,n,o)=>{o.d(n,{ah:()=>d});var i=o(667294);function s(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function t(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,i)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(n){s(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function r(e,n){if(null==e)return{};var o,i,s=function(e,n){if(null==e)return{};var o,i,s={},t=Object.keys(e);for(i=0;i<t.length;i++)o=t[i],n.indexOf(o)>=0||(s[o]=e[o]);return s}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)o=t[i],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var a=i.createContext({}),d=function(e){var n=i.useContext(a),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var o=e.components,s=e.mdxType,t=e.originalType,a=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),h=d(o),p=s,f=h["".concat(a,".").concat(p)]||h[p]||c[p]||t;return o?i.createElement(f,l(l({ref:n},m),{},{components:o})):i.createElement(f,l({ref:n},m))}));m.displayName="MDXCreateElement"},625015:(e,n,o)=>{o.d(n,{Z:()=>i});const i=o.p+"assets/images/Model_Eval_01-f4e8e8e5f53da3e22c3cb3fe91e2367e.webp"},849772:(e,n,o)=>{o.d(n,{Z:()=>i});const i=o.p+"assets/images/Model_Eval_02-860b137d590f57eb49ebf1dad86b0640.webp"},448484:(e,n,o)=>{o.d(n,{Z:()=>i});const i=o.p+"assets/images/Model_Eval_03-1307485b2c173ee2d3e8fa046228f785.webp"},893149:(e,n,o)=>{o.d(n,{Z:()=>i});const i=o.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-4b4c922f390788acb724c3c274da1ef9.jpg"}}]);