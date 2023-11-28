"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[28804],{770585:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var t=o(785893),r=o(603905);const d={sidebar_position:8070,slug:"2018-11-28",title:"Node-RED on Android",authors:"mpolinowski",tags:["IoT","Node-RED"]},i=void 0,a={id:"Automation_and_Robotics/Home_Automation/2018-11-28--node-red-on-android/index",title:"Node-RED on Android",description:"Shenzhen, China",source:"@site/docs/Automation_and_Robotics/Home_Automation/2018-11-28--node-red-on-android/index.mdx",sourceDirName:"Automation_and_Robotics/Home_Automation/2018-11-28--node-red-on-android",slug:"/Automation_and_Robotics/Home_Automation/2018-11-28--node-red-on-android/2018-11-28",permalink:"/docs/Automation_and_Robotics/Home_Automation/2018-11-28--node-red-on-android/2018-11-28",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/Home_Automation/2018-11-28--node-red-on-android/index.mdx",tags:[{label:"IoT",permalink:"/docs/tags/io-t"},{label:"Node-RED",permalink:"/docs/tags/node-red"}],version:"current",sidebarPosition:8070,frontMatter:{sidebar_position:8070,slug:"2018-11-28",title:"Node-RED on Android",authors:"mpolinowski",tags:["IoT","Node-RED"]},sidebar:"tutorialSidebar",previous:{title:"Developing an App for the Homey Smarthome Gateway",permalink:"/docs/Automation_and_Robotics/Home_Automation/2019-03-26--writing-a-homey-app/2019-03-26"},next:{title:"IFTTT Alarmserver for IP Cameras",permalink:"/docs/Automation_and_Robotics/Home_Automation/2019-02-16--ifttt-ip-camera-alarmserver/2019-02-15"}},s={},c=[];function h(e){const n={a:"a",code:"code",hr:"hr",img:"img",p:"p",...(0,r.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Shenzhen, China",src:o(302172).Z+"",width:"1500",height:"642"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://termux.com",children:"Termux"})," now allows you to install ",(0,t.jsx)(n.a,{href:"https://nodered.org",children:"Node-RED"})," directly on your Android phone or tablet - turning it into the a powerful smarthome gateway."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"INSTAR MQTT on Android",src:o(949959).Z+"",width:"2048",height:"1536"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["Start by installing ",(0,t.jsx)(n.a,{href:"https://termux.com",children:"Termux"})," on your Android device and start the app. Make sure that everything is up-to-date by running ",(0,t.jsx)(n.code,{children:"apt update && apt upgrade"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"INSTAR MQTT on Android",src:o(162072).Z+"",width:"2048",height:"1536"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://nodered.org",children:"Node-RED"})," runs in ",(0,t.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," which we can now install on our Android device by running the following command: ",(0,t.jsx)(n.code,{children:"apt install coreutils nano nodejs"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"INSTAR MQTT on Android",src:o(126924).Z+"",width:"2048",height:"1536"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["Now with ",(0,t.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," in place we can install ",(0,t.jsx)(n.a,{href:"https://nodered.org",children:"Node-RED"})," with the following command: ",(0,t.jsx)(n.code,{children:"npm install -g --unsafe-perm node-red"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"INSTAR MQTT on Android",src:o(818439).Z+"",width:"2048",height:"1536"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["You can start up ",(0,t.jsx)(n.a,{href:"https://nodered.org",children:"Node-RED"})," by typing ",(0,t.jsx)(n.code,{children:"node-red"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"INSTAR MQTT on Android",src:o(291892).Z+"",width:"2048",height:"1536"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["Now start your default Android web browser and open ",(0,t.jsx)(n.code,{children:"http://localhost:1880"})," to access the ",(0,t.jsx)(n.a,{href:"https://nodered.org",children:"Node-RED"})," interface."]})]})}function l(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},603905:(e,n,o)=>{o.d(n,{ah:()=>c});var t=o(667294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function d(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?d(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},d=Object.keys(e);for(t=0;t<d.length;t++)o=d[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)o=d[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=t.createContext({}),c=function(e){var n=t.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,d=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=c(o),m=r,u=p["".concat(s,".").concat(m)]||p[m]||h[m]||d;return o?t.createElement(u,i(i({ref:n},l),{},{components:o})):t.createElement(u,i({ref:n},l))}));l.displayName="MDXCreateElement"},949959:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/Node-RED_on_Android_01-301d549430500c46524ffe1c4c543367.jpg"},162072:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/Node-RED_on_Android_02-3246fca2a7fb12de7fe36e59691ed523.jpg"},126924:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/Node-RED_on_Android_03-1edeb43bd235aaea389da60203162351.jpg"},818439:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/Node-RED_on_Android_04-6b826b2d52a14cc1dc74b955a7ab08f8.jpg"},291892:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/Node-RED_on_Android_05-aaad56df2b788236acb4f66f5f723663.jpg"},302172:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-87f9b4265095754563aa244d204d730d.jpg"}}]);