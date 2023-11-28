"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[6881],{263829:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(785893),s=t(603905);const o={sidebar_position:9030,slug:"2021-11-05",title:"License Plate Recognition with YOLOv4, OpenCV and Tesseract",authors:"mpolinowski",tags:["Machine Learning","Python","YOLO"]},c=void 0,a={id:"IoT-and-Machine-Learning/ML/2021-11-05--license-plates-yolov4-opencv-tesseract/index",title:"License Plate Recognition with YOLOv4, OpenCV and Tesseract",description:"Shenzhen, China",source:"@site/docs/IoT-and-Machine-Learning/ML/2021-11-05--license-plates-yolov4-opencv-tesseract/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2021-11-05--license-plates-yolov4-opencv-tesseract",slug:"/IoT-and-Machine-Learning/ML/2021-11-05--license-plates-yolov4-opencv-tesseract/2021-11-05",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-05--license-plates-yolov4-opencv-tesseract/2021-11-05",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2021-11-05--license-plates-yolov4-opencv-tesseract/index.md",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"},{label:"YOLO",permalink:"/docs/tags/yolo"}],version:"current",sidebarPosition:9030,frontMatter:{sidebar_position:9030,slug:"2021-11-05",title:"License Plate Recognition with YOLOv4, OpenCV and Tesseract",authors:"mpolinowski",tags:["Machine Learning","Python","YOLO"]},sidebar:"tutorialSidebar",previous:{title:"OpenCV Crash Course Part I",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-06--opencv-crash-course-part-i/2021-11-06"},next:{title:"Installing YOLOv4 with Anaconda",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-04--installing-yolov4/2021-11-04"}},r={},l=[{value:"Activating the Virtual Environment",id:"activating-the-virtual-environment",level:2},{value:"Setting up YOLOv4",id:"setting-up-yolov4",level:2},{value:"Tesseract OCR",id:"tesseract-ocr",level:2},{value:"Run License Plate Recognition",id:"run-license-plate-recognition",level:2},{value:"Count Instances",id:"count-instances",level:3},{value:"Crop Instances",id:"crop-instances",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Shenzhen, China",src:t(357224).Z+"",width:"1500",height:"688"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#activating-the-virtual-environment",children:"Activating the Virtual Environment"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#setting-up-yolov4",children:"Setting up YOLOv4"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#tesseract-ocr",children:"Tesseract OCR"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#run-license-plate-recognition",children:"Run License Plate Recognition"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#count-instances",children:"Count Instances"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#crop-instances",children:"Crop Instances"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This project uses the ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-04--installing-yolov4/2021-11-04",children:"YOLOv4/Anaconda Setup"})," by ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/channel/UCrydcKaojc44XnuXrfhlV8Q",children:"The AI Guy"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/mpolinowski/yolov4-custom-functions#license",children:"Github Repository"})}),"\n",(0,i.jsxs)(n.p,{children:["In this repository you can find a custom function to feed Tesseract OCR the bounding box regions of license plates found by my custom YOLOv4 model in order to read and extract the license plate numbers. Thorough preprocessing is done on the license plate in order to correctly extract the license plate number from the image. The function that is in charge of doing the preprocessing and text extraction is called ",(0,i.jsx)(n.code,{children:"recognize_plate"})," and can be found in the file ",(0,i.jsx)(n.code,{children:"core/utils.py"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"activating-the-virtual-environment",children:"Activating the Virtual Environment"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"conda env create -f conda-gpu.yml\r\nconda activate yolov4-gpu\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-yolov4",children:"Setting up YOLOv4"}),"\n",(0,i.jsx)(n.p,{children:"Download the License Plate Trained Custom Weight:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"https://drive.google.com/file/d/1EUPtbtdF0bjRtNjGv436vDY28EN5DXDH/view?usp=sharing\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Copy and paste the ",(0,i.jsx)(n.code,{children:"custom.weights"})," file into the ",(0,i.jsx)(n.code,{children:"data"})," folder and create a ",(0,i.jsx)(n.code,{children:"custom.names"})," in the ",(0,i.jsx)(n.code,{children:"data/classes/"})," folder with the following line:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"license_plate\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To make YOLO use this file, you need to edit the following line in ",(0,i.jsx)(n.code,{children:"core/config.py"})," to point to your ",(0,i.jsx)(n.code,{children:"custom.names"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'__C.YOLO.CLASSES              = "./data/classes/custom.names"\n'})}),"\n",(0,i.jsx)(n.p,{children:"We now need to convert this model into the Tensorflow format for YOLOv4:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python save_model.py --weights ./data/custom.weights --output ./checkpoints/custom-416 --input_size 416 --model yolov4 \n"})}),"\n",(0,i.jsx)(n.h2,{id:"tesseract-ocr",children:"Tesseract OCR"}),"\n",(0,i.jsx)(n.p,{children:"YOLO helps us to identify license plates in the image and gives us a boundary box that we can cut out with OpenCV. The character recognition is then done by Tesseract."}),"\n",(0,i.jsxs)(n.p,{children:["In order to run Tesseract OCR you must first ",(0,i.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-10-31--tesseract_ocr_arch_linux/2021-10-31",children:"download the binary files and set them up on your local machine"}),". Please do so before proceeding or commands will not run as expected!"]}),"\n",(0,i.jsx)(n.h2,{id:"run-license-plate-recognition",children:"Run License Plate Recognition"}),"\n",(0,i.jsx)(n.p,{children:"All you need to do is add the --plate flag on top of the command to run the custom YOLOv4 model:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python detect.py --weights ./checkpoints/custom-416 --size 416 --model yolov4 --images ./data/images/HK_Taxi.jpg --plate\r\n\r\nLicense Plate #:  W0BZK295\r\nLicense Plate #:  HH07194\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The command will return the recognized license plates and save the following image to the ",(0,i.jsx)(n.code,{children:"detections"})," folder:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"YOLOv4 License Plate Detection",src:t(867194).Z+"",width:"1300",height:"867"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The model did not cooperate with the local license plate format and I had to Photoshop EU license plates in to get it to work. And the resolution is important - the original image was too large which resulted in incorrect results (Resizing it to 50% resolved the issue)."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"count-instances",children:"Count Instances"}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"detect.py"})," (for images) or ",(0,i.jsx)(n.code,{children:"detect_video.py"})," (for videos) with the ",(0,i.jsx)(n.code,{children:"--count"})," flag to get the number of detected objects:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python detect_video.py --weights ./checkpoints/custom-416 --size 416 --model yolov4 --video ./data/video/license_plate.mp4 --count\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"YOLOv4 License Plate Detection",src:t(608732).Z+"",width:"1274",height:"622"})}),"\n",(0,i.jsx)(n.h3,{id:"crop-instances",children:"Crop Instances"}),"\n",(0,i.jsxs)(n.p,{children:["The Crop function within the file ",(0,i.jsx)(n.code,{children:"core/functions.py"})," can be applied to any ",(0,i.jsx)(n.code,{children:"detect.py"})," or ",(0,i.jsx)(n.code,{children:"detect_video.py"})," commands in order to crop the YOLOv4 detections and save them each as their own new image. To crop detections all you need to do is add the --crop flag to any command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python detect_video.py --weights ./checkpoints/custom-416 --size 416 --model yolov4 --video ./data/video/cars.mp4 --crop\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Set the frame interval in ",(0,i.jsx)(n.code,{children:"detect_video.py"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"crop_rate = 150 # capture images every so many frames (ex. crop photos every 150 frames)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"YOLOv4 License Plate Detection",src:t(740640).Z+"",width:"1900",height:"724"})}),"\n",(0,i.jsxs)(n.p,{children:["The resulting cropped images will be saved within the ",(0,i.jsx)(n.code,{children:"detections/crop/"})," folder:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"YOLOv4 License Plate Detection",src:t(484092).Z+"",width:"134",height:"51"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"YOLOv4 License Plate Detection",src:t(872127).Z+"",width:"273",height:"83"})})]})}function h(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>l});var i=t(667294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,s=function(e,n){if(null==e)return{};var t,i,s={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var r=i.createContext({}),l=function(e){var n=i.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,r=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),p=l(t),u=s,g=p["".concat(r,".").concat(u)]||p[u]||d[u]||o;return t?i.createElement(g,c(c({ref:n},h),{},{components:t})):i.createElement(g,c({ref:n},h))}));h.displayName="MDXCreateElement"},608732:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/count1-cf306e6377cc0a69aa0ee74cf801d121.png"},740640:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/crop1-d3b2a30871b0917f971c4e8cfebaf8b3.png"},867194:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/detection1-54b32dde8f5d674e797b8ec08970841f.png"},484092:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/license_plate_1-a96052432fc4bada2e1ed68063d43d2c.png"},872127:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/license_plate_2-e9b3bdd1bb9be265624eee33c03b1682.png"},357224:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-ffe80356d19fb4b090a3bef79b45aab3.jpg"}}]);