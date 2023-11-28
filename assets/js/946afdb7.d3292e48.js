"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[37498],{24186:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=r(785893),s=r(603905);const i={sidebar_position:7080,slug:"2021-11-10",title:"Tensorflow2 Crash Course - Part III",authors:"mpolinowski",tags:["Machine Learning","Python","Tensorflow"]},t=void 0,a={id:"IoT-and-Machine-Learning/ML/2021-11-10--tensorflow-crash-course-part-iii/index",title:"Tensorflow2 Crash Course - Part III",description:"Mong Kok, Hongkong",source:"@site/docs/IoT-and-Machine-Learning/ML/2021-11-10--tensorflow-crash-course-part-iii/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2021-11-10--tensorflow-crash-course-part-iii",slug:"/IoT-and-Machine-Learning/ML/2021-11-10--tensorflow-crash-course-part-iii/2021-11-10",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-10--tensorflow-crash-course-part-iii/2021-11-10",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2021-11-10--tensorflow-crash-course-part-iii/index.md",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:7080,frontMatter:{sidebar_position:7080,slug:"2021-11-10",title:"Tensorflow2 Crash Course - Part III",authors:"mpolinowski",tags:["Machine Learning","Python","Tensorflow"]},sidebar:"tutorialSidebar",previous:{title:"Tensorflow2 Crash Course - Part IV",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-11--tensorflow-crash-course-part-iv/2021-11-11"},next:{title:"Tensorflow2 Crash Course - Part II",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-09--tensorflow-crash-course-part-ii/2021-11-09"}},c={},l=[{value:"Object Detection",id:"object-detection",level:2},{value:"Load Train Model From Checkpoint",id:"load-train-model-from-checkpoint",level:3},{value:"Detect Object from an Image File",id:"detect-object-from-an-image-file",level:3},{value:"Detect Object from your Live Videstream",id:"detect-object-from-your-live-videstream",level:3},{value:"Debugging",id:"debugging",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.ah)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Mong Kok, Hongkong",src:r(619468).Z+"",width:"1500",height:"544"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#object-detection",children:"Object Detection"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#load-train-model-from-checkpoint",children:"Load Train Model From Checkpoint"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#detect-object-from-an-image-file",children:"Detect Object from an Image File"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#detect-object-from-your-live-videstream",children:"Detect Object from your Live Videstream"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#debugging",children:"Debugging"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This set of Notebooks provides a complete set of code to be able to train and leverage your own custom object detection model using the Tensorflow Object Detection API."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["This article is based on a ",(0,o.jsx)(n.a,{href:"https://www.youtube.com/channel/UCHXa4OpASJEwrHrLeIzw7Yg",children:"Tutorial"})," by ",(0,o.jsx)(n.a,{href:"https://github.com/nicknochnack",children:"@nicknochnack"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-08--tensorflow-crash-course-part-i/2021-11-08",children:"Tensorflow2 Crash Course Part I"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-09--tensorflow-crash-course-part-ii/2021-11-09",children:"Tensorflow2 Crash Course Part II"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-10--tensorflow-crash-course-part-iii/2021-11-10",children:"Tensorflow2 Crash Course Part III"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-11--tensorflow-crash-course-part-iv/2021-11-11",children:"Tensorflow2 Crash Course Part IV"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-12--tensorflow-crash-course-part-v/2021-11-12",children:"Tensorflow2 Crash Course Part V"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/mpolinowski/tensorflow2-starter",children:"Github Repository"})}),"\n",(0,o.jsx)(n.h2,{id:"object-detection",children:"Object Detection"}),"\n",(0,o.jsx)(n.h3,{id:"load-train-model-from-checkpoint",children:"Load Train Model From Checkpoint"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["This step requires a few import that caused some - Manjaro Linux / Anaconda3 related - issues - ",(0,o.jsx)(n.a,{href:"#debugging",children:"see Debugging below"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The previous training generated 3 check point in ",(0,o.jsx)(n.code,{children:"TFODCourse/Tensorflow/workspace/models/my_ssd_mobnet"})," out of which I will choose the last one:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"ckpt.restore(os.path.join(paths['CHECKPOINT_PATH'], 'ckpt-3')).expect_partial()\n"})}),"\n",(0,o.jsx)(n.h3,{id:"detect-object-from-an-image-file",children:"Detect Object from an Image File"}),"\n",(0,o.jsx)(n.p,{children:"Select an image from the test folder that you want to run your algorithm against, e.g."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Tensorflow/workspace/images/test/metal.tyrxdf6-zzggg-RGdgfc-zdfg-1cDGF17f.jpg\n"})}),"\n",(0,o.jsx)(n.p,{children:"And add it to the corresponding line in your notebook:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"IMAGE_PATH = os.path.join(paths['IMAGE_PATH'], 'test', 'metal.tyrxdf6-zzggg-RGdgfc-zdfg-1cDGF17f.jpg')\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now run the detection code and see if the object is classified correctly:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Tensorflow Object Detection Walkthrough",src:r(597869).Z+"",width:"1077",height:"759"})}),"\n",(0,o.jsx)(n.h3,{id:"detect-object-from-your-live-videstream",children:"Detect Object from your Live Videstream"}),"\n",(0,o.jsxs)(n.p,{children:["Here I got another ",(0,o.jsx)(n.strong,{children:"Error Message"}),":"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"(-2:Unspecified error) Rebuild the library with Windows, GTK+ 2.x or Carbon support. If you are on Ubuntu or Debian, install libgtk2.0-dev and pkg-config, then re-run cmake or configure script in function 'cvShowImage'."})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This is a problem with openCV and missing libraries. I found that you can install the following package using ",(0,o.jsx)(n.code,{children:"pip"})," inside your virtual environment:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pip install opencv-contrib-python\n"})}),"\n",(0,o.jsx)(n.p,{children:"And the second solution was to globally install the following packages using your distro's package manager:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo pacman -Syu gtk4 pkg-config\n"})}),"\n",(0,o.jsx)(n.p,{children:"Once I had done that everything worked as expected:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Tensorflow Object Detection Walkthrough",src:r(138035).Z+"",width:"414",height:"319"})}),"\n",(0,o.jsxs)(n.p,{children:["The artifacts inside the video come from the ",(0,o.jsx)(n.strong,{children:"UDP"})," protocol and can be fixed by switching it to ",(0,o.jsx)(n.strong,{children:"TCP"}),". But I am currently having some issues with the RTSP server and have only the UDP option."]}),"\n",(0,o.jsx)(n.h2,{id:"debugging",children:"Debugging"}),"\n",(0,o.jsxs)(n.p,{children:["The notebook import two libraries that rely have a c++ dependency - ",(0,o.jsx)(n.code,{children:"libstdc++.so"}),", ",(0,o.jsx)(n.code,{children:"cpython-39-x86_64-linux-gnu.so"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from object_detection.utils import visualization_utils as viz_utils\r\nfrom object_detection.builders import model_builder\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The first ",(0,o.jsx)(n.strong,{children:"ERROR Message"})," that I received while importing ",(0,o.jsx)(n.code,{children:"visualization_utils"})," was:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"ImportError: /opt/Python/TFODCourse/tfod/lib/python3.9/site-packages/matplotlib/ft2font.cpython-39-x86_64-linux-gnu.so: undefined symbol: _ZSt28__throw_bad_array_new_lengthv\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This could be solved by upgrading ",(0,o.jsx)(n.strong,{children:"Matplotlib"})," from ",(0,o.jsx)(n.code,{children:"3.2.0"})," to version ",(0,o.jsx)(n.code,{children:"3.2.2"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pip uninstall -y matplotlib\r\npip install matplotlib==3.2.2\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When I now re-try the import the ",(0,o.jsx)(n.strong,{children:"ERROR Message"})," changes to:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"ImportError: /home/myuser/anaconda3/bin/../lib/libstdc++.so.6: version `GLIBCXX_3.4.29' not found (required by /opt/Python/TFODCourse/tfod/lib/python3.9/site-packages/matplotlib/_path.cpython-39-x86_64-linux-gnu.so)`\n"})}),"\n",(0,o.jsxs)(n.p,{children:["I have Manjaro (Arch) Linux installed and am running the latest version of ",(0,o.jsx)(n.strong,{children:"Anaconda3"}),". The latter uses ",(0,o.jsx)(n.code,{children:"libstdc++.so.6.0.28"})," while the newest version of Manjaro comes with ",(0,o.jsx)(n.code,{children:"libstdc++.so.6.0.29"}),". When I check the Anaconda version I can see that it only goes up to `GLIBCXX_3.4.28':"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"/home/myuser/anaconda3/lib/libstdc++.so.6 | grep GLIBCXX\r\n\r\nGLIBCXX_3.4\r\nGLIBCXX_3.4.1\r\nGLIBCXX_3.4.2\r\nGLIBCXX_3.4.3\r\nGLIBCXX_3.4.4\r\nGLIBCXX_3.4.5\r\nGLIBCXX_3.4.6\r\nGLIBCXX_3.4.7\r\nGLIBCXX_3.4.8\r\nGLIBCXX_3.4.9\r\nGLIBCXX_3.4.10\r\nGLIBCXX_3.4.11\r\nGLIBCXX_3.4.12\r\nGLIBCXX_3.4.13\r\nGLIBCXX_3.4.14\r\nGLIBCXX_3.4.15\r\nGLIBCXX_3.4.16\r\nGLIBCXX_3.4.17\r\nGLIBCXX_3.4.18\r\nGLIBCXX_3.4.19\r\nGLIBCXX_3.4.20\r\nGLIBCXX_3.4.21\r\nGLIBCXX_3.4.22\r\nGLIBCXX_3.4.23\r\nGLIBCXX_3.4.24\r\nGLIBCXX_3.4.25\r\nGLIBCXX_3.4.26\r\nGLIBCXX_3.4.27\r\nGLIBCXX_3.4.28\r\nGLIBCXX_DEBUG_MESSAGE_LENGTH\n"})}),"\n",(0,o.jsxs)(n.p,{children:["I created an backup of all ",(0,o.jsx)(n.code,{children:"libstdc++.so*"})," files/symlinks and linked in the system library in their place:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"mv /home/myuser/anaconda3/lib/libstdc++.so /home/myuser/anaconda3/lib/libstdc++.so.bak\r\nln -s /usr/lib/libstdc++.so.6.0.29 /home/myuser/anaconda3/lib/libstdc++.so\r\n\r\nmv /home/myuser/anaconda3/lib/libstdc++.so.6 /home/myuser/anaconda3/lib/libstdc++.so.6.bak\r\nln -s /usr/lib/libstdc++.so.6.0.29 /home/myuser/anaconda3/lib/libstdc++.so.6\r\n\r\nmv /home/myuser/anaconda3/lib/libstdc++.so.6.0.28 /home/myuser/anaconda3/lib/libstdc++.so.6.0.28.bak\r\nln -s /usr/lib/libstdc++.so.6.0.29 /home/myuser/anaconda3/lib/libstdc++.so.6.0.28\n"})}),"\n",(0,o.jsx)(n.p,{children:"The result looks like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ll /home/myuser/anaconda3/lib | grep ibstdc++ \r\n\r\nlrwxrwxrwx  1 myuser myuser        28 Jan  2 16:17 libstdc++.so -> /usr/lib/libstdc++.so.6.0.29\r\nlrwxrwxrwx  1 myuser myuser        28 Jan  2 16:17 libstdc++.so.6 -> /usr/lib/libstdc++.so.6.0.29\r\nlrwxrwxrwx  1 myuser myuser        28 Jan  2 15:10 libstdc++.so.6.0.28 -> /usr/lib/libstdc++.so.6.0.29\r\n-rwxrwxr-x  3 myuser myuser  13121976 Jun  3  2021 libstdc++.so.6.0.28.bak\r\nlrwxrwxrwx  1 myuser myuser        19 Dec 25 17:01 libstdc++.so.6.bak -> libstdc++.so.6.0.28\r\nlrwxrwxrwx  1 myuser myuser        19 Dec 25 17:01 libstdc++.so.bak -> libstdc++.so.6.0.28\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When I recheck the file I now see the necessary reference to ",(0,o.jsx)(n.code,{children:"GLIBCXX_3.4.29"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"/home/myuser/anaconda3/lib/libstdc++.so.6 | grep GLIBCXX\r\n\r\nGLIBCXX_3.4\r\nGLIBCXX_3.4.1\r\nGLIBCXX_3.4.2\r\nGLIBCXX_3.4.3\r\nGLIBCXX_3.4.4\r\nGLIBCXX_3.4.5\r\nGLIBCXX_3.4.6\r\nGLIBCXX_3.4.7\r\nGLIBCXX_3.4.8\r\nGLIBCXX_3.4.9\r\nGLIBCXX_3.4.10\r\nGLIBCXX_3.4.11\r\nGLIBCXX_3.4.12\r\nGLIBCXX_3.4.13\r\nGLIBCXX_3.4.14\r\nGLIBCXX_3.4.15\r\nGLIBCXX_3.4.16\r\nGLIBCXX_3.4.17\r\nGLIBCXX_3.4.18\r\nGLIBCXX_3.4.19\r\nGLIBCXX_3.4.20\r\nGLIBCXX_3.4.21\r\nGLIBCXX_3.4.22\r\nGLIBCXX_3.4.23\r\nGLIBCXX_3.4.24\r\nGLIBCXX_3.4.25\r\nGLIBCXX_3.4.26\r\nGLIBCXX_3.4.27\r\nGLIBCXX_3.4.28\r\nGLIBCXX_3.4.29\r\nGLIBCXX_DEBUG_MESSAGE_LENGTH\n"})}),"\n",(0,o.jsx)(n.p,{children:"Re-running the import now works as expected:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"from object_detection.utils import visualization_utils as viz_utils\r\nfrom object_detection.builders import model_builder\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>l});var o=r(667294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function t(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,o,s=function(e,n){if(null==e)return{};var r,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=o.createContext({}),l=function(e){var n=o.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):t(t({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),u=l(r),p=s,g=u["".concat(c,".").concat(p)]||u[p]||d[p]||i;return r?o.createElement(g,t(t({ref:n},h),{},{components:r})):o.createElement(g,t({ref:n},h))}));h.displayName="MDXCreateElement"},597869:(e,n,r)=>{r.d(n,{Z:()=>o});const o=r.p+"assets/images/Tensorflow_Training_01-dee71ced5182650db9dec6b9a8d8cc5e.png"},138035:(e,n,r)=>{r.d(n,{Z:()=>o});const o=r.p+"assets/images/Tensorflow_Training_02-0c61fa8c6d045a08ebfd42275dcfdc0c.gif"},619468:(e,n,r)=>{r.d(n,{Z:()=>o});const o=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-8629210580d5b66cf728356357923b9f.jpg"}}]);