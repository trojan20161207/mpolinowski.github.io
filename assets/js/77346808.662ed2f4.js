"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[41035],{692089:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=r(785893),a=r(603905);const o={sidebar_position:5090,slug:"2022-02-18",title:"Yolo App - Tesseract Optical Character Recognition",authors:"mpolinowski",tags:["Machine Learning","Python","YOLO"]},i=void 0,s={id:"IoT-and-Machine-Learning/ML/2022-02-18--yolo-app-ocr/index",title:"Yolo App - Tesseract Optical Character Recognition",description:"Shenzhen, China",source:"@site/docs/IoT-and-Machine-Learning/ML/2022-02-18--yolo-app-ocr/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2022-02-18--yolo-app-ocr",slug:"/IoT-and-Machine-Learning/ML/2022-02-18--yolo-app-ocr/2022-02-18",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-02-18--yolo-app-ocr/2022-02-18",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2022-02-18--yolo-app-ocr/index.md",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"},{label:"YOLO",permalink:"/docs/tags/yolo"}],version:"current",sidebarPosition:5090,frontMatter:{sidebar_position:5090,slug:"2022-02-18",title:"Yolo App - Tesseract Optical Character Recognition",authors:"mpolinowski",tags:["Machine Learning","Python","YOLO"]},sidebar:"tutorialSidebar",previous:{title:"Yolo App - Flask Web Application",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-02-19--yolo-app-flask/2022-02-19"},next:{title:"Yolo App - Pipeline Predictions",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-02-17--yolo-app-prediction-pipeline/2022-02-17"}},c={},l=[{value:"Load an Image",id:"load-an-image",level:2},{value:"Extract Number Plate",id:"extract-number-plate",level:2},{value:"Data Preprocessing",id:"data-preprocessing",level:2},{value:"Use Tesseract",id:"use-tesseract",level:2},{value:"Skew Detection and Correction",id:"skew-detection-and-correction",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Shenzhen, China",src:r(122752).Z+"",width:"1500",height:"688"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2022-02-15--yolo-app-get-data/2022-02-15",children:"Prepare your Images and get Data"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2022-02-16--yolo-app-tensorflow-model/2022-02-16",children:"Train your Tensorflow Model"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2022-02-17--yolo-app-prediction-pipeline/2022-02-17",children:"Use your Model to do Predictions"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2022-02-18--yolo-app-ocr/2022-02-18",children:"Use Tesseract to Read Number Plates"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2022-02-19--yolo-app-flask/2022-02-19",children:"Flask Web Application"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2022-02-20--yolo-app-yolov5-data-prep/2022-02-20",children:"Yolo v5 - Data Prep"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#load-an-image",children:"Load an Image"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#extract-number-plate",children:"Extract Number Plate"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#data-preprocessing",children:"Data Preprocessing"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#use-tesseract",children:"Use Tesseract"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#skew-detection-and-correction",children:"Skew Detection and Correction"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Now that I have the Tensorflow model that finds number plates inside images I can use OpenCV to cut them out and hand them over to Tesseract - see ",(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-10-31--tesseract_ocr_arch_linux/2021-10-31",children:"Install Tesseract on Arch LINUX"})," - to apply some Optical Character Recognition (",(0,t.jsx)(n.strong,{children:"OCR"}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"load-an-image",children:"Load an Image"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"import pytesseract as pt\r\n\r\npath = './test_images/index10.jpg'\r\nimage, cods = object_detection(path)\r\n\r\nplt.figure(figsize=(10,8))\r\nplt.imshow(image)\r\nplt.show()\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Tesseract OCR",src:r(334402).Z+"",width:"1081",height:"601"})}),"\n",(0,t.jsx)(n.h2,{id:"extract-number-plate",children:"Extract Number Plate"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"img = np.array(load_img(path))\r\nxmin ,xmax,ymin,ymax = cods[0]\r\nroi = img[ymin:ymax,xmin:xmax]\r\nplt.imshow(roi)\r\nprint('Original')\r\nplt.show()\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Tesseract OCR",src:r(963255).Z+"",width:"1078",height:"295"})}),"\n",(0,t.jsx)(n.h2,{id:"data-preprocessing",children:"Data Preprocessing"}),"\n",(0,t.jsxs)(n.p,{children:["Depending on the image source we might have to add ",(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-12-03--opencv-image-operations/2021-12-03#image-thresholding",children:"some processing"})," to the extracted region of interest to make it more readable:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# Turn grayscale\r\ngray_roi = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)\r\ngray_roi = cv2.bitwise_not(gray_roi)\r\n\r\n# threshold the image, setting all foreground pixels to\r\n# 255 and all background pixels to 0 (invert)\r\nthresh_roi = cv2.threshold(gray_roi, 0, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)[1]\r\nplt.imshow(thresh_roi)\r\nprint('Threshold')\r\nplt.show()\r\n\r\ncanny_roi = cv2.Canny(roi, 85, 255)\r\nplt.imshow(canny_roi)\r\nprint('Canny')\r\nplt.show()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Tweak the thresholds until you get the best OCR results for your use case:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Tesseract OCR",src:r(706030).Z+"",width:"1075",height:"630"})}),"\n",(0,t.jsx)(n.h2,{id:"use-tesseract",children:"Use Tesseract"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# OCR the ROI using Tesseract\r\ntext_roi = pt.image_to_string(roi)\r\nprint('Original:',text_roi)\r\ntext_thresh = pt.image_to_string(thresh_roi)\r\nprint('Threshold:',text_thresh)\r\ntext_canny = pt.image_to_string(canny_roi)\r\nprint('Canny:',text_canny)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Threshold gives me the best results for the given image, while canny fails completely. Your results will differ depending on your image source:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Original: i ~HR26I]KOB30|\r\n\r\nThreshold: i\\ HR26DK0830\r\n\r\nCanny:  \n"})}),"\n",(0,t.jsx)(n.h2,{id:"skew-detection-and-correction",children:"Skew Detection and Correction"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"THIS DOES NOT WORK"}),": I will have to look into this more - the method by ",(0,t.jsx)(n.a,{href:"https://pyimagesearch.com/2017/02/20/text-skew-correction-opencv-python/",children:"pyimagesearch"})," seems to be distracted when the text is not only rotated but there is also some perspective shift on it."]}),"\n",(0,t.jsx)(n.p,{children:"Tesseract, unfortunately, is very sensitive against skew angles. As soon as the text is not perfectly horizontal you are not going to get any results:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Tesseract OCR",src:r(706514).Z+"",width:"1066",height:"639"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"http://felix.abecassis.me/2011/10/opencv-rotation-deskewing/",children:"Here is an implementation to de-skew your text"})," using OpenCV. I can use it to compute the minimum rotated bounding box that contains the text regions:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# grab the (x, y) coordinates of all pixel values that\r\n# are greater than zero, then use these coordinates to\r\n# compute a rotated bounding box that contains all\r\n# coordinates\r\npix_coords = np.column_stack(np.where(thresh_roi_skew > 0))\r\nangle = cv2.minAreaRect(pix_coords)[-1]\r\n# the `cv2.minAreaRect` function returns values in the\r\n# range [-90, 0); as the rectangle rotates clockwise the\r\n# returned angle trends to 0 -- in this special case we\r\n# need to add 90 degrees to the angle\r\nif angle < -45:\r\n\tangle = -(90 + angle)\r\n# otherwise, just take the inverse of the angle to make\r\n# it positive\r\nelse:\r\n\tangle = -angle\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# rotate the image to deskew it\r\n(h, w) = thresh_roi_skew.shape[:2]\r\ncenter = (w // 2, h // 2)\r\nM = cv2.getRotationMatrix2D(center, angle, 1.0)\r\nrotated = cv2.warpAffine(thresh_roi_skew, M, (w, h), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# draw the correction angle on the image so we can validate it\r\ncv2.putText(rotated, "Angle: {:.2f} degrees".format(angle), (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)\r\n# show the output image\r\nprint("[INFO] rotation angle: {:.3f}".format(angle))\r\nplt.imshow(rotated)\r\nplt.show()\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>l});var t=r(667294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(r),g=a,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return r?t.createElement(m,i(i({ref:n},h),{},{components:r})):t.createElement(m,i({ref:n},h))}));h.displayName="MDXCreateElement"},334402:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/Yolo_App_Tesseract_OCR_01-892a9b0319da6446eee5e64d1336efc9.png"},963255:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/Yolo_App_Tesseract_OCR_02-191eae389eb010cd275988de82750b49.png"},706030:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/Yolo_App_Tesseract_OCR_03-c6cbb7d96027984a9ddf8ab6c5fd366c.png"},706514:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/Yolo_App_Tesseract_OCR_04-c83fcf308a6a3e664a9735d3928de20f.png"},122752:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-ffe80356d19fb4b090a3bef79b45aab3.jpg"}}]);