"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[95779],{427613:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=a(785893),n=a(603905);const i={sidebar_position:8010,slug:"2019-08-02",title:"Building a MQTT Interface",authors:"mpolinowski",tags:["MQTT","IoT"]},o=void 0,s={id:"Development/Javascript/2019-08-02--building-an-mqtt-interface/index",title:"Building a MQTT Interface",description:"Shanghai, China",source:"@site/docs/Development/Javascript/2019-08-02--building-an-mqtt-interface/index.mdx",sourceDirName:"Development/Javascript/2019-08-02--building-an-mqtt-interface",slug:"/Development/Javascript/2019-08-02--building-an-mqtt-interface/2019-08-02",permalink:"/docs/Development/Javascript/2019-08-02--building-an-mqtt-interface/2019-08-02",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2019-08-02--building-an-mqtt-interface/index.mdx",tags:[{label:"MQTT",permalink:"/docs/tags/mqtt"},{label:"IoT",permalink:"/docs/tags/io-t"}],version:"current",sidebarPosition:8010,frontMatter:{sidebar_position:8010,slug:"2019-08-02",title:"Building a MQTT Interface",authors:"mpolinowski",tags:["MQTT","IoT"]},sidebar:"tutorialSidebar",previous:{title:"Web traffic redirection with Node and Express on CentOS8",permalink:"/docs/Development/Javascript/2020-01-12--node-express-redirect-server/2020-01-12"},next:{title:"Server Rendering with React and React Router",permalink:"/docs/Development/Javascript/2018-01-17--server-side-render-react-router/2018-01-17"}},c={},d=[{value:"The Interface",id:"the-interface",level:2},{value:"Addressing the right Camera",id:"addressing-the-right-camera",level:3},{value:"Status, Command or Raw Topics",id:"status-command-or-raw-topics",level:3},{value:"Update your first MQTT Topic",id:"update-your-first-mqtt-topic",level:2}];function l(e){const t={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Shanghai, China",src:a(434102).Z+"",width:"1500",height:"733"})}),"\n",(0,r.jsx)(t.h2,{id:"the-interface",children:"The Interface"}),"\n",(0,r.jsx)(t.p,{children:"All camera functions of INSTAR Full HD cameras can be controlled through the HTTP/S CGI interface. But in the Smarthome and Internet-of-Things (IoT) realm there is another protocol that is widely in use and that offers a few advantages over the classic HTTP - this protocol is called MQTT (Message Queuing Telemetry Transport). Adding an MQTT interface to our Full HD cameras makes adding those cameras to an existing Smarthome - almost - too easy :)"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Building an MQTT Interface",src:a(966087).Z+"",width:"859",height:"262"})}),"\n",(0,r.jsxs)(t.p,{children:["In MQTT you control your camera by publishing updates to MQTT Topics. The value you want to update such a topic to is formatted in JSON and added to the Message Payload. So instead of sending a CGI command like ",(0,r.jsx)(t.code,{children:"param.cgi?cmd=setmdattr&-name=1&-enable=$val"})," to either activate (val=1) or deactivate (val=0) Motion Detection Area 1 you publish this update to the topic alarm/area1/enable formatted like {'val':'1'} or {'val':'0'}."]}),"\n",(0,r.jsx)(t.h3,{id:"addressing-the-right-camera",children:"Addressing the right Camera"}),"\n",(0,r.jsxs)(t.p,{children:["To make sure that this update is received by the correct device on your MQTT network, we first have to prefix the topic with instar - this makes sure that your camera will try to match the update to an internal function - like updating the state of an detection area. Secondly, we have to state what camera we want to address by either saying all to update all INSTAR cameras on your network or picking a specific one by it's MAC address, e.g. ",(0,r.jsx)(t.code,{children:"000389888811"}),". You can find the MAC address of your camera under System/Overview - simply remove the colons, e.g. ",(0,r.jsx)(t.strong,{children:"00:03:89:88:88:11"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Building an MQTT Interface",src:a(727596).Z+"",width:"859",height:"368"})}),"\n",(0,r.jsx)(t.p,{children:"If you want to address the camera that is running your MQTT broker, you can also use the prefix local instead. The complete topic will then look like this:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"instar/all/alarm/area1/enable"})," - to address all INSTAR Full HD cameras on your MQTT network (all have to be connected to the same MQTT broker)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"instar/000389888811/alarm/area1/enable"})," - to address a camera with the (LAN) MAC address ",(0,r.jsx)(t.strong,{children:"00:03:89:88:88:11"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"instar/local/alarm/area1/enable"})," - to address the cameras that runs the MQTT broker on your network.\r\nYou can find the allowed payloads for each MQTT topic in the table below. The second table below that displays the corresponding CGI command to each topic (if you are already familiar with the HTTP API and are looking for a specific command)."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"status-command-or-raw-topics",children:"Status, Command or Raw Topics"}),"\n",(0,r.jsxs)(t.p,{children:["Once you update a ",(0,r.jsx)(t.strong,{children:"COMMAND"})," Topic like ",(0,r.jsx)(t.code,{children:"instar/000389888811/alarm/area1/enable"})," you will see that you receive an update on the ",(0,r.jsx)(t.strong,{children:"STATUS"})," Topic ",(0,r.jsx)(t.code,{children:"instar/000389888811/status/alarm/area1/enable"})," once you camera received the command and updated its settings."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Building an MQTT Interface",src:a(551340).Z+"",width:"859",height:"428"})}),"\n",(0,r.jsx)(t.p,{children:"If your application doesn't support sending command payloads in the JSON format, you can use the RAW Topic by adding raw to the end of the topic and use the value as a string directly:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"instar/000389888811/alarm/area1/enable/raw"})," - the message payload here is simply either ",(0,r.jsx)(t.code,{children:"1"})," or ",(0,r.jsx)(t.code,{children:"0"})," instead of ",(0,r.jsx)(t.code,{children:"{'val':'1'}"})," or ",(0,r.jsx)(t.code,{children:"{'val':'0'}"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"update-your-first-mqtt-topic",children:"Update your first MQTT Topic"}),"\n",(0,r.jsx)(t.p,{children:"To update a topic you can use a desktop software like the MQTT Explorer or MQTT.fx for Windows, macOS or LINUX. Or one of the many available Smartphone Apps. These allow you to try out the MQTT API without the need of additional Hardware (Smarthome Gateways) and quickly debug your MQTT network."})]})}function h(e={}){const{wrapper:t}={...(0,n.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},603905:(e,t,a)=>{a.d(t,{ah:()=>d});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,m=p["".concat(c,".").concat(u)]||p[u]||l[u]||i;return a?r.createElement(m,o(o({ref:t},h),{},{components:a})):r.createElement(m,o({ref:t},h))}));h.displayName="MDXCreateElement"},966087:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MQTT_Broker_01-3eaeed94c15fd848e05da2c024555101.png"},727596:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MQTT_Broker_02-d23cc97df3c957af9f6f9f84306d36aa.png"},551340:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MQTT_Broker_03-c1fb8697310f18cde48e4f05877a231d.png"},434102:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-947fa5b5515571dc4e37efb82139aa4e.jpg"}}]);