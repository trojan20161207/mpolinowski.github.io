"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[18195],{571857:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=i(785893),a=i(603905);const s={sidebar_position:7020,slug:"2021-12-01",title:"OpenCV and Images",authors:"mpolinowski",tags:["Machine Learning","Python","OpenCV"]},c=void 0,o={id:"IoT-and-Machine-Learning/ML/2021-12-01--opencv-with-images/index",title:"OpenCV and Images",description:"Shenzhen, China",source:"@site/docs/IoT-and-Machine-Learning/ML/2021-12-01--opencv-with-images/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2021-12-01--opencv-with-images",slug:"/IoT-and-Machine-Learning/ML/2021-12-01--opencv-with-images/2021-12-01",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-01--opencv-with-images/2021-12-01",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2021-12-01--opencv-with-images/index.md",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"},{label:"OpenCV",permalink:"/docs/tags/open-cv"}],version:"current",sidebarPosition:7020,frontMatter:{sidebar_position:7020,slug:"2021-12-01",title:"OpenCV and Images",authors:"mpolinowski",tags:["Machine Learning","Python","OpenCV"]},sidebar:"tutorialSidebar",previous:{title:"OpenCV, Streams and Video Files",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-02--opencv-with-videos/2021-12-02"},next:{title:"Introduction into FB Prophet",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-15--facebook-prophet-introduction/2021-11-15"}},t={},l=[{value:"Setup OpenCV",id:"setup-opencv",level:2},{value:"OpenCV Basic Operations",id:"opencv-basic-operations",level:2},{value:"Working with Images",id:"working-with-images",level:3},{value:"Manipulating Images",id:"manipulating-images",level:3},{value:"Colour Space",id:"colour-space",level:4},{value:"Resizing Images",id:"resizing-images",level:4},{value:"Adding Text",id:"adding-text",level:4},{value:"Drawing Shapes",id:"drawing-shapes",level:4}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Shenzhen, China",src:i(197346).Z+"",width:"2385",height:"919"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#setup-opencv",children:"Setup OpenCV"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#opencv-basic-operations",children:"OpenCV Basic Operations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#working-with-images",children:"Working with Images"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#manipulating-images",children:"Manipulating Images"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#colour-space",children:"Colour Space"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#resizing-images",children:"Resizing Images"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#adding-text",children:"Adding Text"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#drawing-shapes",children:"Drawing Shapes"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/mpolinowski/opencv-with-images",children:"Github Repo"})}),"\n",(0,r.jsx)(n.h2,{id:"setup-opencv",children:"Setup OpenCV"}),"\n",(0,r.jsx)(n.p,{children:"Create and activate a virtual work environment:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python -m venv .env\r\nsource .env/bin/activate\r\npython -m pip install --upgrade pip\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Add a file ",(0,r.jsx)(n.code,{children:"dependencies.txt"})," with all project ",(0,r.jsx)(n.strong,{children:"pip dependencies"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"opencv-python\n"})}),"\n",(0,r.jsx)(n.p,{children:"Install all dependencies with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pip install -r dependencies.txt\n"})}),"\n",(0,r.jsx)(n.h2,{id:"opencv-basic-operations",children:"OpenCV Basic Operations"}),"\n",(0,r.jsx)(n.h3,{id:"working-with-images",children:"Working with Images"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import cv2\r\n\r\nimport_path = r'./resources/test-image.jpg'\r\n# Read image\r\nimage = cv2.imread(import_path)\r\n# Display image for 5s\r\ncv2.imshow('Zhu Jiang New Town, Guangzhou, Guangdong, China', image)\r\ncv2.waitKey(5000)\r\ncv2.destroyAllWindows()\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# Save image to output folder\r\ncv2.imwrite('./processed/processed_test_image.jpg', image)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"manipulating-images",children:"Manipulating Images"}),"\n",(0,r.jsx)(n.h4,{id:"colour-space",children:"Colour Space"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# Display image properties\r\nprint(image.shape)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Shape"})," command displays the ",(0,r.jsx)(n.code,{children:"height"}),", ",(0,r.jsx)(n.code,{children:"width"})," and ",(0,r.jsx)(n.code,{children:"colour channels"}),": ",(0,r.jsx)(n.code,{children:"(476, 715, 3)"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Colour space conversion:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"## RGB -> Gray\r\nimage_monochrome = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)\r\nexport_path_monochrome = ('./processed/monochrome-' + timestamp + '.jpg')\r\ncv2.imwrite(export_path_monochrome, image_monochrome)\r\nprint(image_monochrome.shape)\r\n## RGB -> HSV\r\nimage_hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)\r\nexport_path_colour = ('./processed/colour-' + timestamp + '.jpg')\r\ncv2.imwrite(export_path_colour, image_hsv)\r\nprint(image_hsv.shape)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"(476, 715, 3)\r\n(476, 715)\r\n(476, 715, 3)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also use a parameter in the ",(0,r.jsx)(n.code,{children:"imread()"})," function:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"0"})," - Grayscale"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"1"})," - Colour"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-1"})," - Unchanged"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"img_grayscale = cv2.imread(import_path, 0)\r\nimg_colour = cv2.imread(import_path, 1)\r\nimg_original = cv2.imread(import_path, -1)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"resizing-images",children:"Resizing Images"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"img_resized = cv2.resize(image, (450, 450))\r\ncv2.imshow('Zhu Jiang New Town, Guangzhou, Guangdong, China', img_resized)\r\ncv2.waitKey(2000)\r\ncv2.destroyAllWindows()\n"})}),"\n",(0,r.jsx)(n.h4,{id:"adding-text",children:"Adding Text"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"watermark = \"Hello World!\"\r\ncoordinates = (50, 150)\r\nfont = cv2.QT_FONT_NORMAL\r\nfontScale = 1\r\ncolor = (255, 0, 0)\r\nthickness = 2\r\n\r\nimg_watermarked = cv2.putText(image, watermark, coordinates, font, fontScale, color, thickness)\r\ncv2.imshow('Zhu Jiang New Town, Guangzhou, Guangdong, China', img_watermarked)\r\ncv2.waitKey(2000)\r\ncv2.destroyAllWindows()\n"})}),"\n",(0,r.jsx)(n.h4,{id:"drawing-shapes",children:"Drawing Shapes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Lines"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"start = (0, 0)\r\nend = (715, 476)\r\ncolor = (0, 0, 255)\r\nthickness = 2\r\n\r\nimg_line = cv2.line(image, start, end, color, thickness)\r\ncv2.imshow('Zhu Jiang New Town, Guangzhou, Guangdong, China', img_line)\r\ncv2.waitKey(2000)\r\ncv2.destroyAllWindows()\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Circles"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"center = (100, 100)\r\nradius = 80\r\ncolor = (255, 255, 255)\r\nthickness = 2\r\n\r\nimg_line = cv2.circle(image, center, radius, color, thickness)\r\ncv2.imshow('Zhu Jiang New Town, Guangzhou, Guangdong, China', img_line)\r\ncv2.waitKey(2000)\r\ncv2.destroyAllWindows()\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Rectangle"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"start = (280, 80)\r\nend = (350, 350)\r\ncolor = (0, 255, 0)\r\nthickness = 2\r\n\r\nimg_line = cv2.rectangle(image, start, end, color, thickness)\r\ncv2.imshow('Zhu Jiang New Town, Guangzhou, Guangdong, China', img_line)\r\ncv2.waitKey(2000)\r\ncv2.destroyAllWindows()\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ellipse"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"center = (120, 100)\r\naxesLength = (100, 50)\r\nangle = 30\r\nstartAngle = 0\r\nendAngle = 360\r\ncolor = (0, 0, 255)\r\nthickness = 2\r\n\r\nimg_line = cv2.ellipse(image, center, axesLength, angle, startAngle, endAngle, color, thickness)\r\ncv2.imshow('Zhu Jiang New Town, Guangzhou, Guangdong, China', img_line)\r\ncv2.waitKey(2000)\r\ncv2.destroyAllWindows()\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},603905:(e,n,i)=>{i.d(n,{ah:()=>l});var r=i(667294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function s(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function c(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?s(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,r,a=function(e,n){if(null==e)return{};var i,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var t=r.createContext({}),l=function(e){var n=r.useContext(t),i=n;return e&&(i="function"==typeof e?e(n):c(c({},n),e)),i},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var i=e.components,a=e.mdxType,s=e.originalType,t=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=l(i),g=a,m=p["".concat(t,".").concat(g)]||p[g]||d[g]||s;return i?r.createElement(m,c(c({ref:n},h),{},{components:i})):r.createElement(m,c({ref:n},h))}));h.displayName="MDXCreateElement"},197346:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5a0b68587d9242bbb46a1f1aaab44216.jpg"}}]);