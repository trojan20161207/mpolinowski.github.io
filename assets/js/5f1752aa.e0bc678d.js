"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[83840],{25965:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var o=t(785893),r=t(603905);const s={sidebar_position:4030,slug:"2022-10-23",title:"Hashicorp Nomad - Working with Ports",authors:"mpolinowski",tags:["Nomad","Consul","LINUX"],description:"How to declare Ports to be used in Nomad Job files"},i=void 0,a={id:"DevOps/Hashicorp/2022-10-23-hashicorp-nomad-ports/index",title:"Hashicorp Nomad - Working with Ports",description:"How to declare Ports to be used in Nomad Job files",source:"@site/docs/DevOps/Hashicorp/2022-10-23-hashicorp-nomad-ports/index.md",sourceDirName:"DevOps/Hashicorp/2022-10-23-hashicorp-nomad-ports",slug:"/DevOps/Hashicorp/2022-10-23-hashicorp-nomad-ports/2022-10-23",permalink:"/docs/DevOps/Hashicorp/2022-10-23-hashicorp-nomad-ports/2022-10-23",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2022-10-23-hashicorp-nomad-ports/index.md",tags:[{label:"Nomad",permalink:"/docs/tags/nomad"},{label:"Consul",permalink:"/docs/tags/consul"},{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:4030,frontMatter:{sidebar_position:4030,slug:"2022-10-23",title:"Hashicorp Nomad - Working with Ports",authors:"mpolinowski",tags:["Nomad","Consul","LINUX"],description:"How to declare Ports to be used in Nomad Job files"},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Nomad to set up an OSTicket Helpdesk - Part II",permalink:"/docs/DevOps/Hashicorp/2022-10-25-hashicorp-nomad-for-osticket-part-ii/2022-10-25"},next:{title:"Hashicorp Nomad - Working with Consul Connect",permalink:"/docs/DevOps/Hashicorp/2022-10-23-hashicorp-consul-connect/2022-10-23"}},c={},p=[{value:"Ports in Nomad Job Files",id:"ports-in-nomad-job-files",level:2},{value:"Dynamic, Mapped, Static",id:"dynamic-mapped-static",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.ah)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Shen Zhen, China",src:t(814186).Z+"",width:"2230",height:"839"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#ports-in-nomad-job-files",children:"Ports in Nomad Job Files"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#dynamic-mapped-static",children:"Dynamic, Mapped, Static"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"ports-in-nomad-job-files",children:"Ports in Nomad Job Files"}),"\n",(0,o.jsx)(n.h3,{id:"dynamic-mapped-static",children:"Dynamic, Mapped, Static"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'job "example" {\n  group "example-group" {\n    network {\n      # Dynamic ports\n      port "foo" {}\n      port "bar" {}\n      # Mapped ports\n      port "http"  { to = 80 }\n      port "https" { to = 443 }\n      # Static ports\n      port "lb" { static = 8080 }\n    }\n\n    task "task-1" {\n      driver = "docker"\n      config {\n\n        ...\n \n        ports = [\n          "foo",\n          "http",\n        ]\n      }\n    }\n\n    task "task-2" {\n      driver = "docker"\n      config {\n\n        ...\n \n        ports = [\n          "bar",\n          "https",\n        ]\n      }\n    }\n\n    task "task-3" {\n      driver = "docker"\n      config {\n\n        ...\n \n        ports = [\n          "lb",\n        ]\n      }\n    }\n  }\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>p});var o=t(667294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},l=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),h=p(t),m=r,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||s;return t?o.createElement(u,i(i({ref:n},l),{},{components:t})):o.createElement(u,i({ref:n},l))}));l.displayName="MDXCreateElement"},814186:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-6c1edb088dfea3a7d39f8eebb8e9dc23.jpg"}}]);