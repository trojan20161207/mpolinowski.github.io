"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[91190],{163594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(785893),i=n(603905);const s={sidebar_position:4095,slug:"2023-09-19",title:"Computer Vision Annotation Tool (CVAT) Introduction",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"CVAT supports supervised machine learning tasks pertaining to object detection, image classification, image segmentation and 3D data annotation."},o="Computer Vision Annotation Tool (CVAT)",a={id:"IoT-and-Machine-Learning/ML/2023-09-19--cvat-computer-vision-annotation-tool/index",title:"Computer Vision Annotation Tool (CVAT) Introduction",description:"CVAT supports supervised machine learning tasks pertaining to object detection, image classification, image segmentation and 3D data annotation.",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-09-19--cvat-computer-vision-annotation-tool/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-09-19--cvat-computer-vision-annotation-tool",slug:"/IoT-and-Machine-Learning/ML/2023-09-19--cvat-computer-vision-annotation-tool/2023-09-19",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-09-19--cvat-computer-vision-annotation-tool/2023-09-19",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-09-19--cvat-computer-vision-annotation-tool/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"}],version:"current",sidebarPosition:4095,frontMatter:{sidebar_position:4095,slug:"2023-09-19",title:"Computer Vision Annotation Tool (CVAT) Introduction",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"CVAT supports supervised machine learning tasks pertaining to object detection, image classification, image segmentation and 3D data annotation."},sidebar:"tutorialSidebar",previous:{title:"CVAT Semi-automatic and Automatic Annotation",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-09-21--cvat-automatic-annotation/2023-09-21"},next:{title:"YOLOv8 Nightshift",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-09-17--yolo8-nightshift/2023-09-17"}},d={},c=[{value:"Installation (Docker)",id:"installation-docker",level:2},{value:"Create an Annotation Job",id:"create-an-annotation-job",level:2},{value:"Shortcuts",id:"shortcuts",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Guangzhou, China",src:n(367582).Z+"",width:"1500",height:"871"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"#computer-vision-annotation-tool-cvat",children:"Computer Vision Annotation Tool (CVAT)"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#installation-docker",children:"Installation (Docker)"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#create-an-annotation-job",children:"Create an Annotation Job"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#shortcuts",children:"Shortcuts"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-09-21--cvat-automatic-annotation/2023-09-21",children:"see also: CVAT Semi-automatic and Automatic Annotation"})}),"\n"]}),"\n",(0,r.jsx)(t.h1,{id:"computer-vision-annotation-tool-cvat",children:"Computer Vision Annotation Tool (CVAT)"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://opencv.github.io/cvat/about/",children:"CVAT"})," was designed to provide users with a set of convenient instruments for annotating digital images and videos. CVAT supports supervised machine learning tasks pertaining to object detection, image classification, image segmentation and 3D data annotation. It allows users to annotate images with multiple tools (boxes, polygons, cuboids, circles, skeletons, etc)."]}),"\n",(0,r.jsx)(t.h2,{id:"installation-docker",children:"Installation (Docker)"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/opencv/cvat\ncd cvat\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"export CVAT_HOST=your-ip-address\ndocker compose up -d\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The CVAT UI is now available on ",(0,r.jsx)(t.code,{children:"your-ip-address"})," with port ",(0,r.jsx)(t.code,{children:"8080"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"create-an-annotation-job",children:"Create an Annotation Job"}),"\n",(0,r.jsxs)(t.p,{children:["To start annotating in CVAT, you need to create an annotation task and specify its parameters. To create a task, on the ",(0,r.jsx)(t.strong,{children:"Project"})," page click ",(0,r.jsx)(t.code,{children:"+"})," and select ",(0,r.jsx)(t.code,{children:"Create a new Project"}),":"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Computer Vision Annotation Tool (CVAT)",src:n(215796).Z+"",width:"909",height:"198"})}),"\n",(0,r.jsx)(t.p,{children:"Create a project and assign available class labels and annotation types:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Computer Vision Annotation Tool (CVAT)",src:n(536954).Z+"",width:"1008",height:"822"})}),"\n",(0,r.jsxs)(t.p,{children:["On the ",(0,r.jsx)(t.strong,{children:"Task"})," tab click to ",(0,r.jsx)(t.code,{children:"Create a new Task"}),":"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Computer Vision Annotation Tool (CVAT)",src:n(407938).Z+"",width:"914",height:"230"})}),"\n",(0,r.jsx)(t.p,{children:"Add a name and your previously created project. Then continue uploading your image dataset - it is possible to upload images directly but I found it a bit error prone sometimes. I am now zipping the files now and upload the compressed container instead:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Computer Vision Annotation Tool (CVAT)",src:n(833707).Z+"",width:"1005",height:"770"})}),"\n",(0,r.jsx)(t.p,{children:"Under advanced you can select the label format that you want to use for your task:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Computer Vision Annotation Tool (CVAT)",src:n(520825).Z+"",width:"1006",height:"383"})}),"\n",(0,r.jsxs)(t.p,{children:["Click to ",(0,r.jsx)(t.strong,{children:"Submit and Open"})," and your task will be prepared - which might take a while, depending on your dataset. You will be redirected to the task overview once ready:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Computer Vision Annotation Tool (CVAT)",src:n(956140).Z+"",width:"1004",height:"565"})}),"\n",(0,r.jsxs)(t.p,{children:["Every task generates a job on the ",(0,r.jsx)(t.strong,{children:"Job"})," tab:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Computer Vision Annotation Tool (CVAT)",src:n(478682).Z+"",width:"908",height:"402"})}),"\n",(0,r.jsx)(t.p,{children:"Click on the job tile and happy annotating :)"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Computer Vision Annotation Tool (CVAT)",src:n(806262).Z+"",width:"1374",height:"630"})}),"\n",(0,r.jsx)(t.h2,{id:"shortcuts",children:"Shortcuts"}),"\n",(0,r.jsx)(t.p,{children:"List of available mouse and keyboard shortcuts:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Shortcut"}),(0,r.jsx)(t.th,{children:"Common"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Main functions"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"F1"}),(0,r.jsx)(t.td,{children:"Open/hide the list of available shortcuts"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"F2"}),(0,r.jsx)(t.td,{children:"Go to the settings page or go back"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ctrl+S"}),(0,r.jsx)(t.td,{children:"Go to the settings page or go back"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ctrl+Z"}),(0,r.jsx)(t.td,{children:"Cancel the latest action related with objects"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ctrl+Shift+Z or Ctrl+Y"}),(0,r.jsx)(t.td,{children:"Cancel undo action"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Hold Mouse Wheel"}),(0,r.jsx)(t.td,{children:"To move an image frame (for example, while drawing)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Player"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"F"}),(0,r.jsx)(t.td,{children:"Go to the next frame"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"D"}),(0,r.jsx)(t.td,{children:"Go to the previous frame"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"V"}),(0,r.jsx)(t.td,{children:"Go forward with a step"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"C"}),(0,r.jsx)(t.td,{children:"Go backward with a step"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Right"}),(0,r.jsx)(t.td,{children:"Search the next frame that satisfies to the filters or next frame which contain any objects"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Left"}),(0,r.jsx)(t.td,{children:"Search the previous frame that satisfies to the filters or previous frame which contain any objects"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Space"}),(0,r.jsx)(t.td,{children:"Start/stop automatic changing frames"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"` or ~"}),(0,r.jsx)(t.td,{children:"Focus on the element to change the current frame"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Modes"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"N"}),(0,r.jsx)(t.td,{children:"Repeat the latest procedure of drawing with the same parameters"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"M"}),(0,r.jsx)(t.td,{children:"Activate or deactivate mode to merging shapes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Alt+M"}),(0,r.jsx)(t.td,{children:"Activate or deactivate mode to splitting shapes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"G"}),(0,r.jsx)(t.td,{children:"Activate or deactivate mode to grouping shapes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Shift+G"}),(0,r.jsx)(t.td,{children:"Reset group for selected shapes (in group mode)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Esc"}),(0,r.jsx)(t.td,{children:"Cancel any active canvas mode"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Image operations"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ctrl+R"}),(0,r.jsx)(t.td,{children:"Change image angle (add 90 degrees)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ctrl+Shift+R"}),(0,r.jsx)(t.td,{children:"Change image angle (subtract 90 degrees)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Operations with objects"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ctrl"}),(0,r.jsx)(t.td,{children:"Switch automatic bordering for polygons and polylines during drawing/editing"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Hold Ctrl"}),(0,r.jsx)(t.td,{children:"When the shape is active and fix it"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Alt+Click on point"}),(0,r.jsx)(t.td,{children:"Deleting a point (used when hovering over a point of polygon, polyline, points)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Shift+Click on point"}),(0,r.jsx)(t.td,{children:"Editing a shape (used when hovering over a point of polygon, polyline or points)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Right-Click on shape"}),(0,r.jsx)(t.td,{children:"Display of an object element from objects sidebar"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"T+L"}),(0,r.jsx)(t.td,{children:"Change locked state for all objects in the sidebar"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"L"}),(0,r.jsx)(t.td,{children:"Change locked state for an active object"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"T+H"}),(0,r.jsx)(t.td,{children:"Change hidden state for objects in the sidebar"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"H"}),(0,r.jsx)(t.td,{children:"Change hidden state for an active object"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Q or /"}),(0,r.jsx)(t.td,{children:"Change occluded property for an active object"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Del or Shift+Del"}),(0,r.jsx)(t.td,{children:"Delete an active object. Use shift to force delete of locked objects"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"- or _"}),(0,r.jsx)(t.td,{children:"Put an active object \u201cfarther\u201d from the user (decrease z axis value)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"+ or ="}),(0,r.jsx)(t.td,{children:"Put an active object \u201ccloser\u201d to the user (increase z axis value)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ctrl+C"}),(0,r.jsx)(t.td,{children:"Copy shape to CVAT internal clipboard"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ctrl+V"}),(0,r.jsx)(t.td,{children:"Paste a shape from internal CVAT clipboard"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Hold Ctrl while pasting"}),(0,r.jsx)(t.td,{children:"When pasting shape from the buffer for multiple pasting."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ctrl+B"}),(0,r.jsx)(t.td,{children:"Make a copy of the object on the following frames"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ctrl+(0..9)"}),(0,r.jsx)(t.td,{children:"Changes a label for an activated object or for the next drawn object if no objects are activated"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Operations are available only for track"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"K"}),(0,r.jsx)(t.td,{children:"Change keyframe property for an active track"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"O"}),(0,r.jsx)(t.td,{children:"Change outside property for an active track"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"R"}),(0,r.jsx)(t.td,{children:"Go to the next keyframe of an active track"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"E"}),(0,r.jsx)(t.td,{children:"Go to the previous keyframe of an active track"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Attribute annotation mode"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Up Arrow"}),(0,r.jsx)(t.td,{children:"Go to the next attribute (up)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Down Arrow"}),(0,r.jsx)(t.td,{children:"Go to the next attribute (down)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Tab"}),(0,r.jsx)(t.td,{children:"Go to the next annotated object in current frame"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Shift+Tab"}),(0,r.jsx)(t.td,{children:"Go to the previous annotated object in current frame"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsx)(t.td,{children:"Assign a corresponding value to the current attribute"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Standard 3d mode"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Shift+Up Arrow"}),(0,r.jsx)(t.td,{children:"Increases camera roll angle"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Shift+Down Arrow"}),(0,r.jsx)(t.td,{children:"Decreases camera roll angle"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Shift+Left Arrow"}),(0,r.jsx)(t.td,{children:"Decreases camera pitch angle"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Shift+Right Arrow"}),(0,r.jsx)(t.td,{children:"Increases camera pitch angle"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Alt+O"}),(0,r.jsx)(t.td,{children:"Move the camera up"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Alt+U"}),(0,r.jsx)(t.td,{children:"Move the camera down"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Alt+J"}),(0,r.jsx)(t.td,{children:"Move the camera left"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Alt+L"}),(0,r.jsx)(t.td,{children:"Move the camera right"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Alt+I"}),(0,r.jsx)(t.td,{children:"Performs zoom in"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Alt+K"}),(0,r.jsx)(t.td,{children:"Performs zoom out"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},603905:(e,t,n)=>{n.d(t,{ah:()=>c});var r=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,d=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),j=c(n),x=i,p=j["".concat(d,".").concat(x)]||j[x]||l[x]||s;return n?r.createElement(p,o(o({ref:t},h),{},{components:n})):r.createElement(p,o({ref:t},h))}));h.displayName="MDXCreateElement"},215796:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CVAT_Annotation_Tool_01-28952b4e476c1b781157c5d9a691b1fc.png"},536954:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CVAT_Annotation_Tool_02-fb01556c03eb28caa37561acbdaf2b42.png"},407938:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CVAT_Annotation_Tool_03-3f8a5cdbce9bfda5ab108ee8e429fd02.png"},833707:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CVAT_Annotation_Tool_04-ffc0d59884861f4edd7000c4070b85df.png"},520825:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CVAT_Annotation_Tool_05-bd1f40a67248e4eaeeb60152a4438e6e.png"},956140:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CVAT_Annotation_Tool_06-76152979da61b6883b56b776229c7fba.png"},478682:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CVAT_Annotation_Tool_07-736715e7fee149c8742b1bc5ab917588.png"},806262:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CVAT_Annotation_Tool_08-b624ced2d5be83344c03d276dbbfd56c.png"},367582:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-864be48f76a28ed6a3e155f7ab51bc74.jpg"}}]);