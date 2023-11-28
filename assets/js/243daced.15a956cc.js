"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[88634],{292709:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(785893),o=t(603905);const i={sidebar_position:4770,slug:"2023-01-05",title:"DVC Model Access",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Retrieve your Model Data"},r=void 0,s={id:"IoT-and-Machine-Learning/AIOps/2023-01-06-dvc-model-access/index",title:"DVC Model Access",description:"Retrieve your Model Data",source:"@site/docs/IoT-and-Machine-Learning/AIOps/2023-01-06-dvc-model-access/index.md",sourceDirName:"IoT-and-Machine-Learning/AIOps/2023-01-06-dvc-model-access",slug:"/IoT-and-Machine-Learning/AIOps/2023-01-06-dvc-model-access/2023-01-05",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-06-dvc-model-access/2023-01-05",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/AIOps/2023-01-06-dvc-model-access/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"}],version:"current",sidebarPosition:4770,frontMatter:{sidebar_position:4770,slug:"2023-01-05",title:"DVC Model Access",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Retrieve your Model Data"},sidebar:"tutorialSidebar",previous:{title:"Python Ray Basic Concepts",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-22-python-ray-introduction/2023-01-22"},next:{title:"Data Version Control",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-05-dvc-model-version-control/2023-01-05"}},d={},c=[{value:"Data and Model Access",id:"data-and-model-access",level:2},{value:"Find a file or Directory",id:"find-a-file-or-directory",level:3},{value:"Download",id:"download",level:3},{value:"Data Pipelines",id:"data-pipelines",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.ah)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Guangzhou, China",src:t(454663).Z+"",width:"1500",height:"662"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#data-and-model-access",children:"Data and Model Access"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#find-a-file-or-directory",children:"Find a file or Directory"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#download",children:"Download"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#data-pipelines",children:"Data Pipelines"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-05-dvc-model-version-control/2023-01-05",children:"We've learned how to track data and models with DVC"}),", and how to commit their versions to Git. The next questions are: How can we use these artifacts outside of the project? How do we download a model to deploy it? How to download a specific version of a model? Or reuse datasets across different projects?"]}),"\n",(0,a.jsx)(n.h2,{id:"data-and-model-access",children:"Data and Model Access"}),"\n",(0,a.jsx)(n.p,{children:"DVC's remote storage config is also saved in Git, and contains all the information needed to access and download any version of datasets, files, and models. It means that a Git repository with DVC files becomes an entry point, and can be used instead of accessing files directly."}),"\n",(0,a.jsx)(n.h3,{id:"find-a-file-or-directory",children:"Find a file or Directory"}),"\n",(0,a.jsx)(n.p,{children:"You can use dvc list to explore a DVC repository hosted on any Git server:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"dvc list https://github.com/mpolinowski/dvc-demo-project.git\n.dvcignore\ndata\n"})}),"\n",(0,a.jsx)(n.p,{children:"The benefit of this command over browsing a Git hosting website is that the list includes files and directories tracked by both Git and DVC."}),"\n",(0,a.jsx)(n.h3,{id:"download",children:"Download"}),"\n",(0,a.jsx)(n.p,{children:"One way is to simply download the data with dvc get. This is useful when working outside of a DVC project environment, for example in an automated ML model deployment task:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"dvc get https://github.com/mpolinowski/dvc-demo-project \\\n        data\n"})}),"\n",(0,a.jsxs)(n.p,{children:["And now to the magic part - while the Git repository only contains the ",(0,a.jsx)(n.code,{children:".dvc"})," configuration file that points to our data:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Data Version Control Model Access",src:t(994356).Z+"",width:"1233",height:"239"})}),"\n",(0,a.jsx)(n.p,{children:"The GET command we used above automatically pulled the data with the version that was committed to Git:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ls -la data\n\n     256 Jan  5 17:25 .\n     232 Jan  5 17:25 ..\n14445097 Jan  5 17:25 data.xml\n      10 Jan  5 17:25 .gitignore\n"})}),"\n",(0,a.jsx)(n.h2,{id:"data-pipelines",children:"Data Pipelines"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"WiP"})})]})}function h(e={}){const{wrapper:n}={...(0,o.ah)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>c});var a=t(667294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,m=p["".concat(d,".").concat(u)]||p[u]||l[u]||i;return t?a.createElement(m,r(r({ref:n},h),{},{components:t})):a.createElement(m,r({ref:n},h))}));h.displayName="MDXCreateElement"},994356:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/DVC-Model-Access_01-bc3d525fec33e0f38e48e3779952174c.png"},454663:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-296769d73822f07b0ac5dc952f56bfa1.jpg"}}]);