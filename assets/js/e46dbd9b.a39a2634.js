"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[4115],{774901:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=o(785893),t=o(603905);const a={sidebar_position:9080,slug:"2019-09-10",title:"Magento 2 Dev Environment with Docker Compose",authors:"mpolinowski",tags:["Docker","Magento"]},s=void 0,i={id:"Development/Magento/2019-09-10--magento2-docker-on-ubuntu/index",title:"Magento 2 Dev Environment with Docker Compose",description:"Angkor Wat, Cambodia",source:"@site/docs/Development/Magento/2019-09-10--magento2-docker-on-ubuntu/index.md",sourceDirName:"Development/Magento/2019-09-10--magento2-docker-on-ubuntu",slug:"/Development/Magento/2019-09-10--magento2-docker-on-ubuntu/2019-09-10",permalink:"/docs/Development/Magento/2019-09-10--magento2-docker-on-ubuntu/2019-09-10",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Magento/2019-09-10--magento2-docker-on-ubuntu/index.md",tags:[{label:"Docker",permalink:"/docs/tags/docker"},{label:"Magento",permalink:"/docs/tags/magento"}],version:"current",sidebarPosition:9080,frontMatter:{sidebar_position:9080,slug:"2019-09-10",title:"Magento 2 Dev Environment with Docker Compose",authors:"mpolinowski",tags:["Docker","Magento"]},sidebar:"tutorialSidebar",previous:{title:"Magento 2 Installation with NGINX on Debian Buster",permalink:"/docs/Development/Magento/2019-09-11--magento-on-debian-with-nginx/2019-09-11"},next:{title:"Magento 2 Docker Development",permalink:"/docs/Development/Magento/2019-09-07--magento-development-in-docker/2019-09-07"}},c={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Download Docker Magento2",id:"download-docker-magento2",level:3},{value:"Download Magento2 Source Code",id:"download-magento2-source-code",level:3},{value:"Spinning up your Containers",id:"spinning-up-your-containers",level:2},{value:"Problems",id:"problems",level:3},{value:"Reinstalling Docker Compose",id:"reinstalling-docker-compose",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Angkor Wat, Cambodia",src:o(877190).Z+"",width:"1500",height:"639"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#getting-started",children:"Getting Started"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#download-docker-magento2",children:"Download Docker Magento2"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#download-magento2-source-code",children:"Download Magento2 Source Code"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#spinning-up-your-containers",children:"Spinning up your Containers"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#problems",children:"Problems"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#reinstalling-docker-compose",children:"Reinstalling Docker Compose"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(n.h3,{id:"download-docker-magento2",children:"Download Docker Magento2"}),"\n",(0,r.jsxs)(n.p,{children:["Clone the following ",(0,r.jsx)(n.a,{href:"https://github.com/fballiano/docker-magento2",children:"repository"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd /opt\r\nsudo git clone https://github.com/fballiano/docker-magento2.git\r\ncd /docker-magento2\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then start all containers with ",(0,r.jsx)(n.code,{children:"docker-compose"})," - make sure that you have both ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/engine/install/ubuntu/",children:"Docker"})," and ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"Docker Compose"})," installed on your system."]}),"\n",(0,r.jsx)(n.h3,{id:"download-magento2-source-code",children:"Download Magento2 Source Code"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://magento.com/tech-resources/download",children:"Download Magento 2"})," in any way you want (zip/tgz from website, composer, etc) and extract in the ",(0,r.jsx)(n.strong,{children:"magento2"})," subdirectory of this project - ",(0,r.jsx)(n.strong,{children:"right next to the docker-compose.yml"}),"!"]}),"\n",(0,r.jsx)(n.h2,{id:"spinning-up-your-containers",children:"Spinning up your Containers"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo docker-compose up -d\n"})}),"\n",(0,r.jsx)(n.h3,{id:"problems",children:"Problems"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo docker-compose up -d\r\nERROR: \r\n        Can't find a suitable configuration file in this directory or any\r\n        parent. Are you in the right directory?\r\n\r\n        Supported filenames: docker-compose.yml, docker-compose.yaml\n"})}),"\n",(0,r.jsx)(n.h3,{id:"reinstalling-docker-compose",children:"Reinstalling Docker Compose"}),"\n",(0,r.jsxs)(n.p,{children:["First, confirm the latest version available in their ",(0,r.jsx)(n.a,{href:"https://github.com/docker/compose/releases",children:"releases page"}),". At the time of this writing, the most current stable version is ",(0,r.jsx)(n.code,{children:"1.26.0"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The following command will download the 1.26.0 release and save the executable file at /usr/local/bin/docker-compose, which will make this software globally accessible as docker-compose:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo curl -L 'https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)' -o /usr/local/bin/docker-compose\n"})}),"\n",(0,r.jsx)(n.p,{children:"Set the correct permissions so that the docker-compose command is executable:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo chmod +x /usr/local/bin/docker-compose\n"})}),"\n",(0,r.jsx)(n.p,{children:"Verify that the installation was successful:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker-compose --version\r\n\r\ndocker-compose version 1.26.0, build d4451659\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Retry to ",(0,r.jsx)(n.code,{children:"sudo docker-compose up -d"})," - it should work now."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker-compose up -d\r\nCreating network 'docker-magento2_default' with the default driver\r\nCreating volume 'docker-magento2_dbdata' with default driver\r\nPulling db (mariadb:)...\r\nlatest: Pulling from library/mariadb\r\n23884877105a: Pull complete\r\nbc38caa0f5b9: Pull complete\r\n2910811b6c42: Pull complete\r\n36505266dcc6: Pull complete\r\n\r\n...\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},603905:(e,n,o)=>{o.d(n,{ah:()=>l});var r=o(667294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var c=r.createContext({}),l=function(e){var n=r.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var o=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(o),p=t,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||a;return o?r.createElement(m,s(s({ref:n},u),{},{components:o})):r.createElement(m,s({ref:n},u))}));u.displayName="MDXCreateElement"},877190:(e,n,o)=>{o.d(n,{Z:()=>r});const r=o.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-db58ef4ee7ae4e7eae62acecd3a08edd.jpg"}}]);