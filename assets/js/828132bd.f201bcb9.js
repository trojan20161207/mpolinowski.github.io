"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[10894],{815179:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=n(785893),a=n(603905);const s={sidebar_position:7060,slug:"2021-11-12",title:"Tensorflow2 Crash Course - Part V",authors:"mpolinowski",tags:["Machine Learning","Python","Tensorflow"]},i=void 0,o={id:"IoT-and-Machine-Learning/ML/2021-11-12--tensorflow-crash-course-part-v/index",title:"Tensorflow2 Crash Course - Part V",description:"Mong Kok, Hongkong",source:"@site/docs/IoT-and-Machine-Learning/ML/2021-11-12--tensorflow-crash-course-part-v/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2021-11-12--tensorflow-crash-course-part-v",slug:"/IoT-and-Machine-Learning/ML/2021-11-12--tensorflow-crash-course-part-v/2021-11-12",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-12--tensorflow-crash-course-part-v/2021-11-12",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2021-11-12--tensorflow-crash-course-part-v/index.md",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:7060,frontMatter:{sidebar_position:7060,slug:"2021-11-12",title:"Tensorflow2 Crash Course - Part V",authors:"mpolinowski",tags:["Machine Learning","Python","Tensorflow"]},sidebar:"tutorialSidebar",previous:{title:"Tensorflow2 Model Zoo",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-13--tensorflow-model-zoo/2021-11-13"},next:{title:"Tensorflow2 Crash Course - Part IV",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-11--tensorflow-crash-course-part-iv/2021-11-11"}},l={},c=[{value:"Performance Tuning",id:"performance-tuning",level:2},{value:"Adding more Images for low performing Classes",id:"adding-more-images-for-low-performing-classes",level:3},{value:"Rerun Training with more Steps",id:"rerun-training-with-more-steps",level:3},{value:"Changing model architecture using a different pre-trained model as a starting point",id:"changing-model-architecture-using-a-different-pre-trained-model-as-a-starting-point",level:3},{value:"Results",id:"results",level:2},{value:"&#39;SSD MobileNet V2 FPNLite 320x320&#39; vs &#39;SSD MobileNet V2 FPNLite 640x640&#39;",id:"ssd-mobilenet-v2-fpnlite-320x320-vs-ssd-mobilenet-v2-fpnlite-640x640",level:3}];function d(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Mong Kok, Hongkong",src:n(715171).Z+"",width:"1500",height:"544"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"#performance-tuning",children:"Performance Tuning"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#adding-more-images-for-low-performing-classes",children:"Adding more Images for low performing Classes"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#rerun-training-with-more-steps",children:"Rerun Training with more Steps"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#changing-model-architecture-using-a-different-pre-trained-model-as-a-starting-point",children:"Changing model architecture using a different pre-trained model as a starting point"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"#results",children:"Results"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#ssd-mobilenet-v2-fpnlite-320x320-vs-ssd-mobilenet-v2-fpnlite-640x640",children:"'SSD MobileNet V2 FPNLite 320x320' vs 'SSD MobileNet V2 FPNLite 640x640'"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"This set of Notebooks provides a complete set of code to be able to train and leverage your own custom object detection model using the Tensorflow Object Detection API."}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["This article is based on a ",(0,t.jsx)(r.a,{href:"https://www.youtube.com/channel/UCHXa4OpASJEwrHrLeIzw7Yg",children:"Tutorial"})," by ",(0,t.jsx)(r.a,{href:"https://github.com/nicknochnack",children:"@nicknochnack"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-08--tensorflow-crash-course-part-i/2021-11-08",children:"Tensorflow2 Crash Course Part I"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-09--tensorflow-crash-course-part-ii/2021-11-09",children:"Tensorflow2 Crash Course Part II"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-10--tensorflow-crash-course-part-iii/2021-11-10",children:"Tensorflow2 Crash Course Part III"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-11--tensorflow-crash-course-part-iv/2021-11-11",children:"Tensorflow2 Crash Course Part IV"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-12--tensorflow-crash-course-part-v/2021-11-12",children:"Tensorflow2 Crash Course Part V"})}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/mpolinowski/tensorflow2-starter",children:"Github Repository"})}),"\n",(0,t.jsx)(r.h2,{id:"performance-tuning",children:"Performance Tuning"}),"\n",(0,t.jsx)(r.h3,{id:"adding-more-images-for-low-performing-classes",children:"Adding more Images for low performing Classes"}),"\n",(0,t.jsxs)(r.p,{children:["Add and label new images, copy them into the ",(0,t.jsx)(r.code,{children:"training"})," folder then re-run the training:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"source tfod/bin/activate \r\npython 02_training_the_model.py\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"Running per image evaluation...\r\nEvaluate annotation type *bbox*\r\nDONE (t=0.03s).\r\nAccumulating evaluation results...\r\nDONE (t=0.02s).\r\n Average Precision  (AP) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.706\r\n Average Precision  (AP) @[ IoU=0.50      | area=   all | maxDets=100 ] = 1.000\r\n Average Precision  (AP) @[ IoU=0.75      | area=   all | maxDets=100 ] = 0.881\r\n Average Precision  (AP) @[ IoU=0.50:0.95 | area= small | maxDets=100 ] = -1.000\r\n Average Precision  (AP) @[ IoU=0.50:0.95 | area=medium | maxDets=100 ] = -1.000\r\n Average Precision  (AP) @[ IoU=0.50:0.95 | area= large | maxDets=100 ] = 0.706\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets=  1 ] = 0.713\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets= 10 ] = 0.725\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.744\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area= small | maxDets=100 ] = -1.000\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area=medium | maxDets=100 ] = -1.000\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area= large | maxDets=100 ] = 0.744\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Interestingly, the evaluation remained ",(0,t.jsx)(r.strong,{children:"identical"})," to what I had before ?"]}),"\n",(0,t.jsx)(r.h3,{id:"rerun-training-with-more-steps",children:"Rerun Training with more Steps"}),"\n",(0,t.jsx)(r.p,{children:"The training script contains the training command:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"training_command = \"python {} --model_dir={} --pipeline_config_path={} --num_train_steps=2000\".format(TRAINING_SCRIPT, paths['CHECKPOINT_PATH'],files['PIPELINE_CONFIG'])\n"})}),"\n",(0,t.jsx)(r.p,{children:"Increase the number training steps to the desired value:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"--num_train_steps=10000\n"})}),"\n",(0,t.jsxs)(r.p,{children:["The run takes about approx. ",(0,t.jsx)(r.strong,{children:"20 Minutes"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"INFO:tensorflow:Step 7000 per-step time 0.124s\n"})}),"\n",(0,t.jsxs)(r.p,{children:["After ",(0,t.jsx)(r.strong,{children:"10.000"})," steps I got the following metrics (",(0,t.jsx)(r.code,{children:"0.759"}),"/",(0,t.jsx)(r.code,{children:"0.781"}),"):"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"Accumulating evaluation results...\r\nDONE (t=0.02s).\r\n Average Precision  (AP) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.759\r\n Average Precision  (AP) @[ IoU=0.50      | area=   all | maxDets=100 ] = 1.000\r\n Average Precision  (AP) @[ IoU=0.75      | area=   all | maxDets=100 ] = 0.851\r\n Average Precision  (AP) @[ IoU=0.50:0.95 | area= small | maxDets=100 ] = -1.000\r\n Average Precision  (AP) @[ IoU=0.50:0.95 | area=medium | maxDets=100 ] = -1.000\r\n Average Precision  (AP) @[ IoU=0.50:0.95 | area= large | maxDets=100 ] = 0.759\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets=  1 ] = 0.775\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets= 10 ] = 0.781\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.781\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area= small | maxDets=100 ] = -1.000\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area=medium | maxDets=100 ] = -1.000\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area= large | maxDets=100 ] = 0.781\n"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Precision"}),": True Positive / (True Positive + False Positive)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Recall"}),": True Positive / (True Positive + False Negative)"]}),"\n"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Eval"}),(0,t.jsx)(r.th,{children:"2000 steps"}),(0,t.jsx)(r.th,{children:"10000 steps"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Average Precision"}),(0,t.jsx)(r.td,{children:"0.706"}),(0,t.jsx)(r.td,{children:"0.759"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Average Recall"}),(0,t.jsx)(r.td,{children:"0.744"}),(0,t.jsx)(r.td,{children:"0.781"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"changing-model-architecture-using-a-different-pre-trained-model-as-a-starting-point",children:"Changing model architecture using a different pre-trained model as a starting point"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/tf2_detection_zoo.md",children:"Detection Models"}),": Tensorflow provides a collection of detection models pre-trained on the COCO 2017 dataset. So far I have been using the ",(0,t.jsx)(r.a,{href:"http://download.tensorflow.org/models/object_detection/tf2/20200711/ssd_mobilenet_v2_fpnlite_320x320_coco17_tpu-8.tar.gz",children:"SSD MobileNet V2 FPNLite 320x320"}),". I will now replace it with the slightly slower but more accurate ",(0,t.jsx)(r.a,{href:"http://download.tensorflow.org/models/object_detection/tf2/20200711/ssd_mobilenet_v2_fpnlite_640x640_coco17_tpu-8.tar.gz",children:"SSD MobileNet V2 FPNLite 640x640"}),":"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Model name"}),(0,t.jsx)(r.th,{children:"Speed (ms)"}),(0,t.jsx)(r.th,{children:"COCO mAP"}),(0,t.jsx)(r.th,{children:"Outputs"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SSD MobileNet V2 FPNLite 320x320"}),(0,t.jsx)(r.td,{children:"22"}),(0,t.jsx)(r.td,{children:"22.2"}),(0,t.jsx)(r.td,{children:"Boxes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SSD MobileNet V2 FPNLite 640x640"}),(0,t.jsx)(r.td,{children:"39"}),(0,t.jsx)(r.td,{children:"28.2"}),(0,t.jsx)(r.td,{children:"Boxes"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"How do I have to proceed from here? I added the model to my trainings script and re-run it:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"PRETRAINED_MODEL_NAME = 'ssd_mobilenet_v2_fpnlite_640x640_coco17_tpu-8'\r\nPRETRAINED_MODEL_URL = 'http://download.tensorflow.org/models/object_detection/tf2/20200711/ssd_mobilenet_v2_fpnlite_640x640_coco17_tpu-8.tar.gz'\n"})}),"\n",(0,t.jsxs)(r.p,{children:["I can see that the model was downloaded and the pipeline file updated. But it seems that the training was not executed - but the evaluation (precision/recall) dropped to ",(0,t.jsx)(r.code,{children:"0.478"}),"/",(0,t.jsx)(r.code,{children:"0.550"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:" Average Precision  (AP) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.478\r\n Average Precision  (AP) @[ IoU=0.50      | area=   all | maxDets=100 ] = 0.664\r\n Average Precision  (AP) @[ IoU=0.75      | area=   all | maxDets=100 ] = 0.530\r\n Average Precision  (AP) @[ IoU=0.50:0.95 | area= small | maxDets=100 ] = -1.000\r\n Average Precision  (AP) @[ IoU=0.50:0.95 | area=medium | maxDets=100 ] = -1.000\r\n Average Precision  (AP) @[ IoU=0.50:0.95 | area= large | maxDets=100 ] = 0.478\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets=  1 ] = 0.512\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets= 10 ] = 0.550\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.550\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area= small | maxDets=100 ] = -1.000\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area=medium | maxDets=100 ] = -1.000\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area= large | maxDets=100 ] = 0.550\n"})}),"\n",(0,t.jsxs)(r.p,{children:["I deleted the entire content of ",(0,t.jsx)(r.code,{children:"Tensorflow/workspace/models/my_ssd_mobnet"})," to get rid of all the checkpoint data from the old model and re-run the training script. Ok this seems to work - I can see the trainings steps again. This time a lot slower than with the old model - as expected:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"INFO:tensorflow:Step 4000 per-step time 0.446s\n"})}),"\n",(0,t.jsxs)(r.p,{children:["This would get you a trainings time of about ",(0,t.jsx)(r.strong,{children:"75 Minutes"}),". The result is (",(0,t.jsx)(r.code,{children:"0.752"}),"/",(0,t.jsx)(r.code,{children:"0.769"}),"):"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"Accumulating evaluation results...\r\nDONE (t=0.02s).\r\nAverage Precision  (AP) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.752\r\nAverage Precision  (AP) @[ IoU=0.50      | area=   all | maxDets=100 ] = 1.000\r\nAverage Precision  (AP) @[ IoU=0.75      | area=   all | maxDets=100 ] = 0.876\r\nAverage Precision  (AP) @[ IoU=0.50:0.95 | area= small | maxDets=100 ] = -1.000\r\nAverage Precision  (AP) @[ IoU=0.50:0.95 | area=medium | maxDets=100 ] = -1.000\r\nAverage Precision  (AP) @[ IoU=0.50:0.95 | area= large | maxDets=100 ] = 0.752\r\nAverage Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets=  1 ] = 0.762\r\nAverage Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets= 10 ] = 0.762\r\nAverage Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.769\r\nAverage Recall     (AR) @[ IoU=0.50:0.95 | area= small | maxDets=100 ] = -1.000\r\nAverage Recall     (AR) @[ IoU=0.50:0.95 | area=medium | maxDets=100 ] = -1.000\r\nAverage Recall     (AR) @[ IoU=0.50:0.95 | area= large | maxDets=100 ] = 0.769\n"})}),"\n",(0,t.jsx)(r.h2,{id:"results",children:"Results"}),"\n",(0,t.jsx)(r.p,{children:"The results I am getting are a bit confusing. At first the 320 model performed slightly worse than the 640 - as expected. I then deleted the trainings data for it and re-run the 320. This time I am getting the opposite results as presented above. Is Tensorflow storing trainings data outside of the designated trainings folder? Or is the training in general so inconsistent and needs to be run for a much longer time? Right now I am getting a lot better results after the 20 minute training of the 320 model compared to the 75 minutes for the 640..."}),"\n",(0,t.jsx)(r.h3,{id:"ssd-mobilenet-v2-fpnlite-320x320-vs-ssd-mobilenet-v2-fpnlite-640x640",children:"'SSD MobileNet V2 FPNLite 320x320' vs 'SSD MobileNet V2 FPNLite 640x640'"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Model name"}),(0,t.jsx)(r.th,{children:"Speed (ms)"}),(0,t.jsx)(r.th,{children:"COCO mAP"}),(0,t.jsx)(r.th,{children:"Outputs"}),(0,t.jsx)(r.th,{children:"Average Precision"}),(0,t.jsx)(r.th,{children:"Average Recall"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SSD MobileNet V2 FPNLite 320x320"}),(0,t.jsx)(r.td,{children:"22"}),(0,t.jsx)(r.td,{children:"22.2"}),(0,t.jsx)(r.td,{children:"Boxes"}),(0,t.jsx)(r.td,{children:"0.759"}),(0,t.jsx)(r.td,{children:"0.781"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SSD MobileNet V2 FPNLite 640x640"}),(0,t.jsx)(r.td,{children:"39"}),(0,t.jsx)(r.td,{children:"28.2"}),(0,t.jsx)(r.td,{children:"Boxes"}),(0,t.jsx)(r.td,{children:"0.752"}),(0,t.jsx)(r.td,{children:"0.769"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Spock",src:n(153550).Z+"",width:"245",height:"170"})}),"\n",(0,t.jsx)(r.p,{children:"The test run makes it even more confusing - the 640 seems to perform better here. But there actually a miss there at the end :-?"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.img,{alt:"SSD MobileNet V2 FPNLite 320x320",src:n(771597).Z+"",width:"1993",height:"564"}),"\r\n",(0,t.jsx)(r.em,{children:"SSD MobileNet V2 FPNLite 320x320"})]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.img,{alt:"SSD MobileNet V2 FPNLite 640x640",src:n(242720).Z+"",width:"1680",height:"492"}),"\r\n",(0,t.jsx)(r.em,{children:"SSD MobileNet V2 FPNLite 640x640"})]})]})}function h(e={}){const{wrapper:r}={...(0,a.ah)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},603905:(e,r,n)=>{n.d(r,{ah:()=>c});var t=n(667294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},h=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),g=c(n),m=a,x=g["".concat(l,".").concat(m)]||g[m]||d[m]||s;return n?t.createElement(x,i(i({ref:r},h),{},{components:n})):t.createElement(x,i({ref:r},h))}));h.displayName="MDXCreateElement"},153550:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/fascinating-4800c0ec46c5f6db588613ed9789d8c0.gif"},715171:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-8629210580d5b66cf728356357923b9f.jpg"},771597:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/ssd_mobilenet_v2_fpnlite_320x320_coco17_tpu-8-3171d5f1f6af32b05d6dc167f20c1802.png"},242720:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/ssd_mobilenet_v2_fpnlite_640x640_coco17_tpu-8-5d669ad6e88a4bbeae1d7b9e925bfe58.png"}}]);