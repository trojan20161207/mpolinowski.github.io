"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[49543],{458968:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(785893),n=t(603905);const o={sidebar_position:9010,slug:"2020-10-26",title:"HashiCorp Packer Provisioning",authors:"mpolinowski",tags:["LINUX","Packer"]},s=void 0,a={id:"DevOps/Hashicorp/2020-10-26--hashicorp-packer-provisioner/index",title:"HashiCorp Packer Provisioning",description:"TST, Hong Kong",source:"@site/docs/DevOps/Hashicorp/2020-10-26--hashicorp-packer-provisioner/index.md",sourceDirName:"DevOps/Hashicorp/2020-10-26--hashicorp-packer-provisioner",slug:"/DevOps/Hashicorp/2020-10-26--hashicorp-packer-provisioner/2020-10-26",permalink:"/docs/DevOps/Hashicorp/2020-10-26--hashicorp-packer-provisioner/2020-10-26",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2020-10-26--hashicorp-packer-provisioner/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Packer",permalink:"/docs/tags/packer"}],version:"current",sidebarPosition:9010,frontMatter:{sidebar_position:9010,slug:"2020-10-26",title:"HashiCorp Packer Provisioning",authors:"mpolinowski",tags:["LINUX","Packer"]},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Nomad Refresher - Installation",permalink:"/docs/DevOps/Hashicorp/2021-08-01--hashicorp-nomad-refresher/2021-08-01"},next:{title:"HashiCorp Packer with Virtualbox (Autoinstall)",permalink:"/docs/DevOps/Hashicorp/2020-10-25--hashicorp-packer-and-virtualbox-autoinstall/2020-10-25"}},l={},c=[{value:"Shell Provisioner",id:"shell-provisioner",level:2},{value:"Virtualbox Builder",id:"virtualbox-builder",level:2},{value:"Create your Source Image",id:"create-your-source-image",level:3}];function d(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"TST, Hong Kong",src:t(18839).Z+"",width:"1500",height:"622"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"#shell-provisioner",children:"Shell Provisioner"})}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"#virtualbox-builder",children:"Virtualbox Builder"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"#create-your-source-image",children:"Create your Source Image"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"So far we created a Docker image but did not do much with it. To set up our image we can use a range of so called provisioners that will execute scripts inside our image."}),"\n",(0,i.jsx)(r.h2,{id:"shell-provisioner",children:"Shell Provisioner"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-json",children:'"provisioners": [\r\n  {\r\n    "type": "shell",\r\n    "script": "init.sh"\r\n  }\r\n]\n'})}),"\n",(0,i.jsxs)(r.p,{children:["The shell provisioner can use a shell script file ",(0,i.jsx)(r.code,{children:'"script: "init.sh"'})," or an ",(0,i.jsx)(r.code,{children:'"inline": "command"'}),". We can use the init script to install a small dockerized Node.js / Express.js app inside our Ubuntu image:"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"init.sh"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:'#! /bin/bash\r\n\r\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\r\nsudo apt-key fingerprint 0EBFCD88\r\nsudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"\r\nsudo apt-get update\r\nsudo apt-get install docker-ce docker-ce-cli containerd.io\r\nsudo usermod -aG docker ubuntu\r\ncurl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh\r\nsudo apt install nodejs\r\nrm nodesource_setup.sh\r\ngit clone https://github.com/linuxacademy/content-devops-monitoring-app.git /home/ubuntu/app\r\nsudo docker build -t application /home/ubuntu/app\n'})}),"\n",(0,i.jsx)(r.h2,{id:"virtualbox-builder",children:"Virtualbox Builder"}),"\n",(0,i.jsx)(r.p,{children:"The VirtualBox Packer builder is able to create VirtualBox virtual machines and export them in the OVA or OVF format."}),"\n",(0,i.jsx)(r.p,{children:"Packer actually comes with multiple builders able to create VirtualBox machines, depending on the strategy you want to use to build the image. Packer supports the following VirtualBox builders:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"virtualbox-iso"})," - Starts from an ISO file, creates a brand new VirtualBox VM, installs an OS, provisions software within the OS, then exports that machine to create an image. This is best for people who want to start from scratch."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"virtualbox-ovf"})," - This builder imports an existing OVF/OVA file, runs provisioners on top of that VM, and exports that machine to create an image. This is best if you have an existing VirtualBox VM export you want to use as the source. As an additional benefit, you can feed the artifact of this builder back into itself to iterate on a machine."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"virtualbox-vm"})," - This builder uses an existing VM to run defined provisioners on top of that VM, and optionally creates a snapshot to save the changes applied from the provisioners. In addition the builder is able to export that machine to create an image. The builder is able to attach to a defined snapshot as a starting point, which could be defined statically or dynamically via a variable."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"create-your-source-image",children:"Create your Source Image"}),"\n",(0,i.jsxs)(r.p,{children:["First you need to download the base image you want to start from - I will choose ",(0,i.jsx)(r.a,{href:"https://ubuntu.com/download/server",children:"Ubuntu Server 20.10"})," ISO. Create an Ubuntu virtual machine in VirtualBox and install Ubuntu server from the ISO image. Once installed restart the server and and login with your created user. Once verified that everything is set up correctly shutdown the VM. Open the VirtualBox Tools menu and export the VM as an ",(0,i.jsx)(r.code,{children:".OVA"})," file."]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Alternatively"}),", you can also use the ",(0,i.jsx)(r.a,{href:"https://www.packer.io/docs/builders/virtualbox/iso",children:"ISO file directly"})]}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,n.ah)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},603905:(e,r,t)=>{t.d(r,{ah:()=>c});var i=t(667294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=i.createContext({}),c=function(e){var r=i.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},u=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),h=c(t),p=n,b=h["".concat(l,".").concat(p)]||h[p]||d[p]||o;return t?i.createElement(b,s(s({ref:r},u),{},{components:t})):i.createElement(b,s({ref:r},u))}));u.displayName="MDXCreateElement"},18839:(e,r,t)=>{t.d(r,{Z:()=>i});const i=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-d8b333d1f9ddf34ac7392aef86b14c83.jpg"}}]);