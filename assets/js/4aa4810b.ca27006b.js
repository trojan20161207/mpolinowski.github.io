"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[79181],{270181:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=s(785893),h=s(603905);const r={sidebar_position:8070,slug:"2019-09-22",title:"Installing Oh-My-Zsh on CentOS8",authors:"mpolinowski",tags:["LINUX"]},l=void 0,o={id:"DevOps/Linux/2019-09-22--zsh-on-centos8/index",title:"Installing Oh-My-Zsh on CentOS8",description:"Central, Hong Kong",source:"@site/docs/DevOps/Linux/2019-09-22--zsh-on-centos8/index.mdx",sourceDirName:"DevOps/Linux/2019-09-22--zsh-on-centos8",slug:"/DevOps/Linux/2019-09-22--zsh-on-centos8/2019-09-22",permalink:"/docs/DevOps/Linux/2019-09-22--zsh-on-centos8/2019-09-22",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2019-09-22--zsh-on-centos8/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:8070,frontMatter:{sidebar_position:8070,slug:"2019-09-22",title:"Installing Oh-My-Zsh on CentOS8",authors:"mpolinowski",tags:["LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Installing Oh-My-Zsh on Ubuntu 20.04",permalink:"/docs/DevOps/Linux/2019-09-22--zsh-on-ubuntu20/2019-09-22"},next:{title:"CentOS 8 Network Configuration",permalink:"/docs/DevOps/Linux/2019-09-22--centos8-network-config/2019-09-22"}},i={},a=[{value:"Install ZSH",id:"install-zsh",level:2},{value:"Make it as Default Shell",id:"make-it-as-default-shell",level:2},{value:"If chsh not found",id:"if-chsh-not-found",level:3},{value:"Verify",id:"verify",level:3},{value:"Install Oh-My-Zsh Framework",id:"install-oh-my-zsh-framework",level:2},{value:"Change Oh-My-Zsh Themes",id:"change-oh-my-zsh-themes",level:3},{value:"Install external Themes",id:"install-external-themes",level:3},{value:"Manual Update Oh-My-ZSH",id:"manual-update-oh-my-zsh",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,h.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Central, Hong Kong",src:s(412423).Z+"",width:"1500",height:"574"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#install-zsh",children:"Install ZSH"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#make-it-as-default-shell",children:"Make it as Default Shell"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#if-chsh-not-found",children:"If chsh not found"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#verify",children:"Verify"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#install-oh-my-zsh-framework",children:"Install Oh-My-Zsh Framework"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#change-oh-my-zsh-themes",children:"Change Oh-My-Zsh Themes"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#install-external-themes",children:"Install external Themes"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In order for ",(0,t.jsx)(n.a,{href:"https://ohmyz.sh",children:"Oh-My-Zsh"})," to work on the system ,",(0,t.jsx)(n.code,{children:"zsh"})," need to be installed."]}),"\n",(0,t.jsx)(n.h2,{id:"install-zsh",children:"Install ZSH"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo yum update && sudo yum -y install zsh\n"})}),"\n",(0,t.jsx)(n.h2,{id:"make-it-as-default-shell",children:"Make it as Default Shell"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chsh -s (which zsh) root\n"})}),"\n",(0,t.jsx)(n.h3,{id:"if-chsh-not-found",children:"If chsh not found"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chsh -s /bin/zsh root\r\n-bash: chsh: command not found\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yum install util-linux-user\r\n\r\nchsh -s /bin/zsh root\n"})}),"\n",(0,t.jsx)(n.h3,{id:"verify",children:"Verify"}),"\n",(0,t.jsx)(n.p,{children:"Logout from the root user and login again to verify the shell"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@CentOS8 ~]# su\r\n[root@CentOS8]~# echo $SHELL\r\n/bin/zsh\n"})}),"\n",(0,t.jsx)(n.h2,{id:"install-oh-my-zsh-framework",children:"Install Oh-My-Zsh Framework"}),"\n",(0,t.jsx)(n.p,{children:"Once Z Shell is installed and confirmed install the Framework from the GIT"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yum install wget git\r\nwget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Oh-My-Zsh will be installed in the home directory ",(0,t.jsx)(n.code,{children:"~/.oh-my-zsh"}),".Copy the zshrc.zsh-template config file to the home directory .zshrc and apply the config:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc\r\nsource ~/.zshrc\n"})}),"\n",(0,t.jsx)(n.h3,{id:"change-oh-my-zsh-themes",children:"Change Oh-My-Zsh Themes"}),"\n",(0,t.jsxs)(n.p,{children:["Oh-My-Zsh framework ",(0,t.jsx)(n.a,{href:"https://github.com/ohmyzsh/ohmyzsh/wiki/Themes",children:"provides large number of themes"}),". You can change the default themes by editing the config file .zshrc which will be under ",(0,t.jsx)(n.code,{children:"./oh-my-zsh/themes/"})]}),"\n",(0,t.jsxs)(n.p,{children:["Set ZSH_THEME to the name of the theme in your ~/.zshrc and run ",(0,t.jsx)(n.code,{children:"su"})," to activate it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# If you come from bash you might have to change your $PATH.\r\n# export PATH=$HOME/bin:/usr/local/bin:$PATH\r\n\r\n# Path to your oh-my-zsh installation.\r\nexport ZSH=$HOME/.oh-my-zsh\r\n\r\n# Set name of the theme to load --- if set to "random", it will\r\n# load a random theme each time oh-my-zsh is loaded, in which case,\r\n# to know which specific one was loaded, run: echo $RANDOM_THEME\r\n# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes\r\nZSH_THEME="agnoster"\r\n\r\n...\n'})}),"\n",(0,t.jsx)(n.h3,{id:"install-external-themes",children:"Install external Themes"}),"\n",(0,t.jsxs)(n.p,{children:["see ",(0,t.jsx)(n.a,{href:"https://github.com/ohmyzsh/ohmyzsh/wiki/External-themes",children:"external Themes"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),": ",(0,t.jsx)(n.a,{href:"https://github.com/romkatv/powerlevel10k#oh-my-zsh",children:"PowerLevel10k"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone --depth=1 https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:'ZSH_THEME="powerlevel10k/powerlevel10k"'})," in ",(0,t.jsx)(n.code,{children:"~/.zshrc"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"su\n"})}),"\n",(0,t.jsx)(n.h2,{id:"manual-update-oh-my-zsh",children:"Manual Update Oh-My-ZSH"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"rm -rf ~/.oh-my-zsh && git clone https://github.com/ohmyzsh/ohmyzsh.git ~/.oh-my-zsh\n"})})]})}function d(e={}){const{wrapper:n}={...(0,h.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},603905:(e,n,s)=>{s.d(n,{ah:()=>a});var t=s(667294);function h(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function r(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function l(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?r(Object(s),!0).forEach((function(n){h(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function o(e,n){if(null==e)return{};var s,t,h=function(e,n){if(null==e)return{};var s,t,h={},r=Object.keys(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||(h[s]=e[s]);return h}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(h[s]=e[s])}return h}var i=t.createContext({}),a=function(e){var n=t.useContext(i),s=n;return e&&(s="function"==typeof e?e(n):l(l({},n),e)),s},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var s=e.components,h=e.mdxType,r=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=a(s),m=h,p=u["".concat(i,".").concat(m)]||u[m]||c[m]||r;return s?t.createElement(p,l(l({ref:n},d),{},{components:s})):t.createElement(p,l({ref:n},d))}));d.displayName="MDXCreateElement"},412423:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-bb1cb7969c492d0795741dc686f072b6.jpg"}}]);