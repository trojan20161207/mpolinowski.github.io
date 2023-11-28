"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[6332],{744034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(785893),a=t(603905);const o={sidebar_position:4e3,slug:"2022-11-12",title:"Hashicorp Nomad to Renew your TLS Certificates",authors:"mpolinowski",tags:["Nomad","LINUX"],description:"Using the Periodic Stanza to execute Certbot Renewals"},s=void 0,i={id:"DevOps/Hashicorp/2022-11-12-hashicorp-nomad-certbot-renewal/index",title:"Hashicorp Nomad to Renew your TLS Certificates",description:"Using the Periodic Stanza to execute Certbot Renewals",source:"@site/docs/DevOps/Hashicorp/2022-11-12-hashicorp-nomad-certbot-renewal/index.md",sourceDirName:"DevOps/Hashicorp/2022-11-12-hashicorp-nomad-certbot-renewal",slug:"/DevOps/Hashicorp/2022-11-12-hashicorp-nomad-certbot-renewal/2022-11-12",permalink:"/docs/DevOps/Hashicorp/2022-11-12-hashicorp-nomad-certbot-renewal/2022-11-12",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2022-11-12-hashicorp-nomad-certbot-renewal/index.md",tags:[{label:"Nomad",permalink:"/docs/tags/nomad"},{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:4e3,frontMatter:{sidebar_position:4e3,slug:"2022-11-12",title:"Hashicorp Nomad to Renew your TLS Certificates",authors:"mpolinowski",tags:["Nomad","LINUX"],description:"Using the Periodic Stanza to execute Certbot Renewals"},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Nomad Secure & Balanced NTS Time Service",permalink:"/docs/DevOps/Hashicorp/2022-11-15-hashicorp-nomad-balanced-nts/2022-11-15"},next:{title:"Hashicorp Nomad to run periodic backups",permalink:"/docs/DevOps/Hashicorp/2022-11-11-hashicorp-nomad-for-borg-backups/2022-11-11"}},c={},l=[{value:"Prepare the Host",id:"prepare-the-host",level:2},{value:"Nomad Job File",id:"nomad-job-file",level:2},{value:"Run the Job",id:"run-the-job",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Shen Zhen, China",src:t(723873).Z+"",width:"2230",height:"839"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#prepare-the-host",children:"Prepare the Host"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#nomad-job-file",children:"Nomad Job File"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#run-the-job",children:"Run the Job"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["All my web applications are configured to use a containerized NGINX ingress for the TLS termination. Before I was using a simple ",(0,r.jsx)(n.a,{href:"/docs/DevOps/NGINX/2021-07-29--certbot-nginx-autorenewal/2021-07-29#automatically-renew-lets-encrypt-certificates",children:"Cron Jobs to keep my certificates updated"}),". Now, since I moved all my apps into Nomad/Consul clusters, I wanted to see if I cannot use the option to periodically start a Nomad service to trigger a Certbot Renewal with the ",(0,r.jsx)(n.strong,{children:"EXEC_RAW"})," driver."]}),"\n",(0,r.jsx)(n.h2,{id:"prepare-the-host",children:"Prepare the Host"}),"\n",(0,r.jsx)(n.p,{children:"First, download the Let\u2019s Encrypt client, certbot:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"apt update\napt install certbot\n"})}),"\n",(0,r.jsx)(n.p,{children:"Run the following command to generate certificates:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"certbot -d example.com -d www.example.com\ncertbot certificates\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Additionally, I will have to enable the ",(0,r.jsx)(n.strong,{children:"EXEC_RAW"})," plugin in my Nomad Client Configuration:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"/etc/nomad.d/client.hcl"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'plugin "raw_exec" {\n  config {\n    enabled = true\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"nomad-job-file",children:"Nomad Job File"}),"\n",(0,r.jsx)(n.p,{children:"I currently do not know how to test for whether the certificate was actually renewed. So I cannot add second task to the job below that restarts the Docker service if this case is true. But since all my apps are monitored using Zabbix I will be prompted once a used certificate reaches the end of it's lifespan. So I can manually restart Docker to start using the updated certificate:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'job "myapp_ingress_cert" {\n\n    periodic {\n        # run every day @5:55am\n        cron             = "55 5 * * *"\n    }\n    type = "batch"\n    reschedule {\n      attempts  = 0\n      unlimited = false\n    }\n    datacenters = ["mydatacenter"]\n    \n    group "myapp-ingress-cert" {\n\n        task "cert-renewal" {\n            driver = "raw_exec"\n\n            config {\n                command = "/usr/bin/certbot"\n                args    = ["renew", "--quiet", "--no-self-upgrade"]\n            }\n        }\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"UPDATE"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["Solution for non-interactive ",(0,r.jsx)(n.code,{children:"certonly"})," renewal:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'job "myapp_ingress_cert" {\n\n    periodic {\n        # run every day @5:55am\n        cron             = "55 5 * * *"\n    }\n    type = "batch"\n    reschedule {\n      attempts  = 0\n      unlimited = false\n    }\n    datacenters = ["mydatacenter"]\n    \n    group "myapp-ingress-cert" {\n\n        task "cert-renewal" {\n            driver = "raw_exec"\n\n            config {\n                command = "/usr/bin/certbot"\n                args    = ["certonly", "--quiet", "--noninteractive", "--standalone", "--cert-name", "my.domain.com"]\n            }\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"run-the-job",children:"Run the Job"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'nomad plan myapp_ingress_cert.tf\n\n+ Job: "myapp_ingress_cert"\n+ Task Group: "myapp-ingress-cert" (1 create)\n  + Task: "cert-renewal" (forces create)\n\nScheduler dry-run:\n- All tasks successfully allocated.\n- If submitted now, next periodic launch would be at 2022-11-14T05:55:00Z (22h52m3s from now).\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nomad job run -check-index 0 myapp_ingress_cert.tf\n\nJob registration successful\nApproximate next launch time: 2022-11-14T05:55:00Z (22h51m52s from now)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Hashicorp Nomad to Renew your TLS Certificates",src:t(463719).Z+"",width:"1324",height:"737"})})]})}function p(e={}){const{wrapper:n}={...(0,a.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>l});var r=t(667294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(t),u=a,m=h["".concat(c,".").concat(u)]||h[u]||d[u]||o;return t?r.createElement(m,s(s({ref:n},p),{},{components:t})):r.createElement(m,s({ref:n},p))}));p.displayName="MDXCreateElement"},463719:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/hashicorp-nomad-certbot-renewal_01-075979676043613c0e6f355af5e879c3.png"},723873:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-6c1edb088dfea3a7d39f8eebb8e9dc23.jpg"}}]);