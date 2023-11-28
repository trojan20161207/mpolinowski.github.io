"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[72663],{348765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(785893),r=n(603905);const s={sidebar_position:9070,slug:"2019-08-06",title:"MQTT Networks with Node-RED",authors:"mpolinowski",tags:["MQTT","Node-RED","Smarthome","IoT"]},i=void 0,a={id:"Automation_and_Robotics/MQTT/2019-08-06--mqtt-node-red/index",title:"MQTT Networks with Node-RED",description:"Mustang, Nepal",source:"@site/docs/Automation_and_Robotics/MQTT/2019-08-06--mqtt-node-red/index.mdx",sourceDirName:"Automation_and_Robotics/MQTT/2019-08-06--mqtt-node-red",slug:"/Automation_and_Robotics/MQTT/2019-08-06--mqtt-node-red/2019-08-06",permalink:"/docs/Automation_and_Robotics/MQTT/2019-08-06--mqtt-node-red/2019-08-06",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/MQTT/2019-08-06--mqtt-node-red/index.mdx",tags:[{label:"MQTT",permalink:"/docs/tags/mqtt"},{label:"Node-RED",permalink:"/docs/tags/node-red"},{label:"Smarthome",permalink:"/docs/tags/smarthome"},{label:"IoT",permalink:"/docs/tags/io-t"}],version:"current",sidebarPosition:9070,frontMatter:{sidebar_position:9070,slug:"2019-08-06",title:"MQTT Networks with Node-RED",authors:"mpolinowski",tags:["MQTT","Node-RED","Smarthome","IoT"]},sidebar:"tutorialSidebar",previous:{title:"MQTT Networks with ioBroker",permalink:"/docs/Automation_and_Robotics/MQTT/2019-08-07--mqtt-iobroker/2019-08-07"},next:{title:"MQTT Networks with OpenHAB 2",permalink:"/docs/Automation_and_Robotics/MQTT/2019-08-05--mqtt-openhab2/2019-08-05"}},d={},c=[{value:"Node-RED Configuration",id:"node-red-configuration",level:2},{value:"Node-RED JSON Flows",id:"node-red-json-flows",level:3},{value:"Node-RED User Interface",id:"node-red-user-interface",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.ah)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Mustang, Nepal",src:n(560798).Z+"",width:"1500",height:"668"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"#node-red-configuration",children:"Node-RED Configuration"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#node-red-json-flows",children:"Node-RED JSON Flows"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#node-red-user-interface",children:"Node-RED User Interface"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"node-red-configuration",children:"Node-RED Configuration"}),"\n",(0,o.jsxs)(t.p,{children:["We prepared Node-RED flows for you that give you access to all camera functions through the MQTT Broker. All you need to do, is to click on the flow you want to use (",(0,o.jsx)(t.a,{href:"#node-red-json-flows",children:"see below"}),"), copy it and paste it into the Node-RED import dialogue:"]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Node-RED with your INSTAR IP Camera",src:n(954389).Z+"",width:"1000",height:"809"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h3,{id:"node-red-json-flows",children:"Node-RED JSON Flows"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://wiki.instar.com/Node-RED_Flows/MQTT-alarm-menu.json",children:"Alarm Menu"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://wiki.instar.com/Node-RED_Flows/MQTT-features-menu.json",children:"Features Menu"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://wiki.instar.com/Node-RED_Flows/MQTT-multimedia-menu.json",children:"Multimedia Menu"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://wiki.instar.com/Node-RED_Flows/MQTT-network-menu.json",children:"Network Menu"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://wiki.instar.com/Node-RED_Flows/MQTT-system-menu.json",children:"System Menu"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://wiki.instar.com/Node-RED_Flows/MQTT-task-menu.json",children:"Recording Task Menu"})}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note"}),": It makes sense to delete every sequence inside those flows that you are not going to use."]}),"\n",(0,o.jsx)(t.p,{children:"Now double-click the first MQTT Node (the first on the left) and assign your INSTAR MQTT Broker to Node-RED:"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Node-RED with your INSTAR IP Camera",src:n(302862).Z+"",width:"845",height:"374"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.p,{children:["Type in your camera's IP address as MQTT Server. Choose the MQTT Server Port that you have set in the MQTT Menu inside your camera's WebUI - the default value is ",(0,o.jsx)(t.code,{children:"1883"}),"."]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Node-RED with your INSTAR IP Camera",src:n(557694).Z+"",width:"841",height:"478"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.p,{children:["If you want to use the TLS encryption, choose the SSL Port instead - default is ",(0,o.jsx)(t.code,{children:"8883"}),". Now you have to open your camera's MQTT Menu and download the Certificate (Client Key). And upload the certificate to Node-RED and save it:"]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Node-RED with your INSTAR IP Camera",src:n(23214).Z+"",width:"835",height:"369"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"Now add the user login that you have set up in the MQTT Menu:"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Node-RED with your INSTAR IP Camera",src:n(903187).Z+"",width:"831",height:"331"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.p,{children:["Click on add to add the INSTAR MQTT Broker to Node-RED and make sure that every MQTT Node of the flow is using the broker. After clicking on ",(0,o.jsx)(t.strong,{children:"Deploy"})," all MQTT Nodes should show that they successfully connected:"]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Node-RED with your INSTAR IP Camera",src:n(584826).Z+"",width:"975",height:"253"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"node-red-user-interface",children:"Node-RED User Interface"}),"\n",(0,o.jsxs)(t.p,{children:["You are currently using the Node-RED admin panel under an URL looking something like this: ",(0,o.jsx)(t.code,{children:"http://<IP Address>:1880/#flow/b7397920.044be8"}),". To switch to the Node-RED dashboard simply add a ",(0,o.jsx)(t.strong,{children:"ui"})," to the end of it like ",(0,o.jsx)(t.code,{children:"http://<IP Address>:1880/ui/"}),":"]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Node-RED with your INSTAR IP Camera",src:n(574011).Z+"",width:"982",height:"644"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"Every flow that you have imported above will be on it's own board. Clicking on toggles and swiping sliders allows you to change the settings on your camera."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note"})," that the changes happen instantly, but some settings require a restart of your camera to become active - e.g. when changing a camera port, WDR settings, etc. As the WebUI is using the HTTP interface changes will not be reflected there unless you reload the menu."]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Node-RED with your INSTAR IP Camera",src:n(735781).Z+"",width:"840",height:"598"})}),"\n",(0,o.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,r.ah)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},603905:(e,t,n)=>{n.d(t,{ah:()=>c});var o=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,p=u["".concat(d,".").concat(m)]||u[m]||l[m]||s;return n?o.createElement(p,i(i({ref:t},h),{},{components:n})):o.createElement(p,i({ref:t},h))}));h.displayName="MDXCreateElement"},954389:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Node-RED_MQTT_01-fdea75556e531957cd7f5766c21f6514.png"},302862:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Node-RED_MQTT_02-aa9c3acae7ee2eb60a777f43b69590bf.png"},557694:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Node-RED_MQTT_03-e6c5fa7dc8b8dac6836c2f45c61ce011.png"},23214:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Node-RED_MQTT_04-8fab86b45306fcbc57bf5a3a7bf6c63a.png"},903187:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Node-RED_MQTT_05-6b342c360080c2f9235fcc2f643233ce.png"},584826:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Node-RED_MQTT_06-b549098059b61c395c4bb82da6a606b1.png"},574011:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Node-RED_MQTT_07-56d3ea0f9d0d331ad66cb4d36ee9574c.png"},735781:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Node-RED_MQTT_Camera_05-7a4289eea069bbdb1f4f23b4a677d0eb.gif"},560798:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-720cd5bd9216dc52b6a05e7b5c0620e2.jpg"}}]);