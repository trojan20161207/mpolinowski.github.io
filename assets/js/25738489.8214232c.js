"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[923],{421598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(785893),a=n(603905);const s={sidebar_position:6090,slug:"2021-06-04",title:"React Dashboard for MQTT",authors:"mpolinowski",tags:["React","MQTT"]},c=void 0,i={id:"Development/Javascript/2021-06-04--mqtt-dashboard-react/index",title:"React Dashboard for MQTT",description:"Wanchai, Hongkong",source:"@site/docs/Development/Javascript/2021-06-04--mqtt-dashboard-react/index.md",sourceDirName:"Development/Javascript/2021-06-04--mqtt-dashboard-react",slug:"/Development/Javascript/2021-06-04--mqtt-dashboard-react/2021-06-04",permalink:"/docs/Development/Javascript/2021-06-04--mqtt-dashboard-react/2021-06-04",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2021-06-04--mqtt-dashboard-react/index.md",tags:[{label:"React",permalink:"/docs/tags/react"},{label:"MQTT",permalink:"/docs/tags/mqtt"}],version:"current",sidebarPosition:6090,frontMatter:{sidebar_position:6090,slug:"2021-06-04",title:"React Dashboard for MQTT",authors:"mpolinowski",tags:["React","MQTT"]},sidebar:"tutorialSidebar",previous:{title:"Introduction to Websockets",permalink:"/docs/Development/Javascript/2021-09-07--intro-to-websockets/2021-09-07"},next:{title:"Mosquitto MQTT Cheat Sheet",permalink:"/docs/Development/Javascript/2021-06-02--mqtt-cheat-sheet/2021-06-02"}},o={},l=[{value:"Create React App",id:"create-react-app",level:2},{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Run the App",id:"run-the-app",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Wanchai, Hongkong",src:n(552168).Z+"",width:"1500",height:"533"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#create-react-app",children:"Create React App"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#install-dependencies",children:"Install Dependencies"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#run-the-app",children:"Run the App"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"WIP"})}),"\n",(0,r.jsx)(t.h2,{id:"create-react-app",children:"Create React App"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx create-react-app mqtt-dashboard\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Edit ",(0,r.jsx)(t.code,{children:"src/App.js"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import React, { useState, Fragment } from 'react';\r\nimport './App.css';\r\n\r\nvar mqtt = require('mqtt');\r\nvar options = {\r\n    protocol: 'ws',\r\n    username: 'admin',\r\n    password: 'instar',\r\n    // clientId uniquely identifies client\r\n    // choose any string you wish\r\n    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),\r\n};\r\nvar client  = mqtt.connect('ws://192.168.2.111:8885', options);\r\n\r\n// cameras/ws is the MQTT topic\r\nclient.subscribe('cameras/ws');\r\n\r\nfunction App() {\r\n  var note;\r\n  client.on('message', function (topic, message) {\r\n    note = message.toString();\r\n    // Updates React state with message \r\n    setMsg(note);\r\n    console.log(note);\r\n    client.end();\r\n    });\r\n\r\n  // Sets default React state \r\n  const [msg, setMsg] = useState(<Fragment><em>...</em></Fragment>);\r\n\r\n  return (\r\n    <div className=\"App\">\r\n      <header className=\"App-header\">\r\n        <h1>Hello MQTT in React</h1>\r\n        <p>The message payload is: {msg}</p>\r\n      </header>\r\n    </div>\r\n  );\r\n}\r\n\r\nexport default App;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/mqttjs/MQTT.js",children:"MQTT.js"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd mqtt-dashboard\r\nnpm install mqtt\n"})}),"\n",(0,r.jsx)(t.h2,{id:"run-the-app",children:"Run the App"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"mosquitto_pub -t 'cameras/ws' -h '192.168.2.111' -m 'Hey!' -p 1885 -u admin -P instar\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},603905:(e,t,n)=>{n.d(t,{ah:()=>l});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=l(n),m=a,u=h["".concat(o,".").concat(m)]||h[m]||p[m]||s;return n?r.createElement(u,c(c({ref:t},d),{},{components:n})):r.createElement(u,c({ref:t},d))}));d.displayName="MDXCreateElement"},552168:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-65a8384a82d338522efe04ac2506bd13.jpg"}}]);