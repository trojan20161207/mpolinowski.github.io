"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[62826],{776252:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=r(785893),t=r(603905);const i={sidebar_position:4160,slug:"2023-08-21",title:"Containerized PyTorch Dev Workflow",authors:"mpolinowski",tags:["Python","Machine Learning","PyTorch","Docker"],description:"Develop your PyTorch models inside the official PyTorch container image."},a="Containerized PyTorch Dev Workflow",c={id:"IoT-and-Machine-Learning/ML/2023-08-21--pytorch-development-in-docker/index",title:"Containerized PyTorch Dev Workflow",description:"Develop your PyTorch models inside the official PyTorch container image.",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-08-21--pytorch-development-in-docker/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-08-21--pytorch-development-in-docker",slug:"/IoT-and-Machine-Learning/ML/2023-08-21--pytorch-development-in-docker/2023-08-21",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-21--pytorch-development-in-docker/2023-08-21",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-08-21--pytorch-development-in-docker/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"PyTorch",permalink:"/docs/tags/py-torch"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:4160,frontMatter:{sidebar_position:4160,slug:"2023-08-21",title:"Containerized PyTorch Dev Workflow",authors:"mpolinowski",tags:["Python","Machine Learning","PyTorch","Docker"],description:"Develop your PyTorch models inside the official PyTorch container image."},sidebar:"tutorialSidebar",previous:{title:"Image Segmentation with PyTorch",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-27--image-segmentation-with-pytorch/2023-08-27"},next:{title:"Tensorflow Image Classifier - Model Evaluation",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-13-tensorflow-i-know-flowers-model-eval/2023-08-13"}},s={},l=[{value:"Docker Image",id:"docker-image",level:2},{value:"Running the Container",id:"running-the-container",level:3},{value:"Verify PyTorch",id:"verify-pytorch",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.ah)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"TST, Hong Kong",src:r(332179).Z+"",width:"1500",height:"549"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#containerized-pytorch-dev-workflow",children:"Containerized PyTorch Dev Workflow"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#docker-image",children:"Docker Image"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#running-the-container",children:"Running the Container"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#verify-pytorch",children:"Verify PyTorch"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#troubleshooting",children:"Troubleshooting"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"containerized-pytorch-dev-workflow",children:"Containerized PyTorch Dev Workflow"}),"\n",(0,o.jsxs)(n.p,{children:["I recently looked into ",(0,o.jsx)(n.em,{children:"dockerrizing"})," my Tensorflow ",(0,o.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-08-01-tensorflow-i-know-flowers-intro/2023-08-01",children:"development & deployment workflow"}),". I now want to see if I can do the same with my PyTorch projects."]}),"\n",(0,o.jsxs)(n.p,{children:["First of all, you still need to prepare your system so that ",(0,o.jsx)(n.a,{href:"docs/IoT-and-Machine-Learning/ML/2022-11-27-containerized-deep-learning/2022-11-27",children:"Docker has access to your Nvidia GPU"}),". This seems to be identical to the Tensorflow setup."]}),"\n",(0,o.jsx)(n.h2,{id:"docker-image",children:"Docker Image"}),"\n",(0,o.jsxs)(n.p,{children:["Next, there are official ",(0,o.jsx)(n.a,{href:"https://hub.docker.com/r/pytorch/pytorch/tags",children:"PyTorch Docker Images"})," available for download. Good! But I really started to like using Jupyter notebooks - and there is no version of the official image that has them pre-installed. So let's fix that:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Dockerfile",children:'FROM pytorch/pytorch:latest\n\n# Set environment variables\nENV DEBIAN_FRONTEND=noninteractive\n\n# Install system dependencies\nRUN apt-get update && \\\n    apt-get install -y \\\n        git \\\n        tini \\\n        python3-pip \\\n        python3-dev \\\n        python3-opencv \\\n        libglib2.0-0\n\n# Upgrade pip\nRUN python3 -m pip install --upgrade pip\nRUN pip3 install jupyter\n\n\n# Set the working directory\nWORKDIR /opt/app\n\n# Start the notebook\nRUN chmod +x /usr/bin/tini\nENTRYPOINT ["/usr/bin/tini", "--"]\nCMD ["jupyter", "notebook", "--port=8888", "--no-browser", "--ip=0.0.0.0", "--allow-root"]\n'})}),"\n",(0,o.jsx)(n.h3,{id:"running-the-container",children:"Running the Container"}),"\n",(0,o.jsx)(n.p,{children:"Let's build this custom image with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker build -t pytorch-jupyter . -f Dockerfile\n"})}),"\n",(0,o.jsx)(n.p,{children:"I can now create the container and mount my working directory into the container WORKDIR to get started:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run --gpus all -ti --rm \\\n    -v $(pwd):/opt/app -p 8888:8888 \\\n    --name pytorch-jupyter \\\n    pytorch-jupyter:latest\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"[C 2023-08-21 08:47:56.598 ServerApp] \n    \n    To access the server, open this file in a browser:\n        file:///root/.local/share/jupyter/runtime/jpserver-7-open.html\n    Or copy and paste one of these URLs:\n        http://e7f849cdd75e:8888/tree?token=8d72a759100e2c2971c4266bbcb8c6da5f743015eecd5255\n        http://127.0.0.1:8888/tree?token=8d72a759100e2c2971c4266bbcb8c6da5f743015eecd5255\n"})}),"\n",(0,o.jsx)(n.h3,{id:"verify-pytorch",children:"Verify PyTorch"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Containerized PyTorch Dev Workflow",src:r(1939).Z+"",width:"1042",height:"515"})}),"\n",(0,o.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"ERROR: Unexpected bus error encountered in worker. This might be caused by insufficient shared memory (shm)."})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Please note that PyTorch uses shared memory to share data between processes, so if torch multiprocessing is used (e.g. for multithreaded data loaders) the default shared memory segment size that container runs with is not enough, and you should ",(0,o.jsx)(n.a,{href:"https://github.com/pytorch/pytorch#using-pre-built-images",children:"increase shared memory size"})," either with --ipc=host or --shm-size command line options to nvidia-docker run."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run --ipc=host --gpus all -ti --rm \\\n    -v $(pwd):/opt/app -p 8888:8888 \\\n    --name pytorch-jupyter \\\n    pytorch-jupyter:latest\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>l});var o=r(667294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=o.createContext({}),l=function(e){var n=o.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(r),u=t,m=p["".concat(s,".").concat(u)]||p[u]||h[u]||i;return r?o.createElement(m,a(a({ref:n},d),{},{components:r})):o.createElement(m,a({ref:n},d))}));d.displayName="MDXCreateElement"},1939:(e,n,r)=>{r.d(n,{Z:()=>o});const o=r.p+"assets/images/PyTorch_Jupyter_Notebook_in_Docker_01-edea53276b343317772136f8496cab9a.png"},332179:(e,n,r)=>{r.d(n,{Z:()=>o});const o=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-19827635eae5b5cb12f68c531f406341.jpg"}}]);