"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[40065],{699199:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(785893),s=r(603905);const i={sidebar_position:8080,slug:"2022-01-13",title:"Testing the Zabbix API with Postman",authors:"mpolinowski",tags:["Zabbix","Linux"]},a=void 0,o={id:"DevOps/Zabbix/2022-01-13--zabbix-api-testing/index",title:"Testing the Zabbix API with Postman",description:"Guangzhou, China",source:"@site/docs/DevOps/Zabbix/2022-01-13--zabbix-api-testing/index.md",sourceDirName:"DevOps/Zabbix/2022-01-13--zabbix-api-testing",slug:"/DevOps/Zabbix/2022-01-13--zabbix-api-testing/2022-01-13",permalink:"/docs/DevOps/Zabbix/2022-01-13--zabbix-api-testing/2022-01-13",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Zabbix/2022-01-13--zabbix-api-testing/index.md",tags:[{label:"Zabbix",permalink:"/docs/tags/zabbix"},{label:"Linux",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:8080,frontMatter:{sidebar_position:8080,slug:"2022-01-13",title:"Testing the Zabbix API with Postman",authors:"mpolinowski",tags:["Zabbix","Linux"]},sidebar:"tutorialSidebar",previous:{title:"Zabbix v6 Docker-Compose Setup",permalink:"/docs/DevOps/Zabbix/2022-01-13--zabbix-server-v6/2022-01-13"},next:{title:"Zabbix Docker-Compose Setup",permalink:"/docs/DevOps/Zabbix/2021-10-13--zabbix-compose-setup/2021-10-13"}},c={},d=[{value:"Postman",id:"postman",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Retrieving Data",id:"retrieving-data",level:3},{value:"host.get",id:"hostget",level:4},{value:"trend.get",id:"trendget",level:4}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Guangzhou, China",src:r(558515).Z+"",width:"1500",height:"467"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#postman",children:"Postman"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#authentication",children:"Authentication"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#retrieving-data",children:"Retrieving Data"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#hostget",children:"host.get"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#trendget",children:"trend.get"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["I am using the ",(0,t.jsx)(n.strong,{children:"Zabbix Version 6.0rc"})," set up ",(0,t.jsx)(n.a,{href:"/docs/DevOps/Zabbix/2022-01-13--zabbix-server-v6/2022-01-13",children:"using Docker Compose"})," on a server with the IP address ",(0,t.jsx)(n.code,{children:"192.168.2.111"}),". The Zabbix frontend is running on port ",(0,t.jsx)(n.code,{children:"8080"}),". I am testing because I ran into issues trying to ",(0,t.jsx)(n.a,{href:"/docs/DevOps/Zabbix/2022-01-15--zabbix-grafana-dashboard/2022-01-15",children:"connect a Grafana instance"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"postman",children:"Postman"}),"\n",(0,t.jsxs)(n.p,{children:["The Zabbix API is available on ",(0,t.jsx)(n.code,{children:"http://192.168.2.111:8080/api_jsonrpc.php"})," via POST requests using the ",(0,t.jsx)(n.strong,{children:"Content-Type"})," ",(0,t.jsx)(n.code,{children:"application/json-rpc"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Zabbix API Test",src:r(162373).Z+"",width:"1196",height:"338"})}),"\n",(0,t.jsxs)(n.p,{children:["Adding the following ",(0,t.jsx)(n.strong,{children:"JSON Body"})," returns the API version:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{"jsonrpc":"2.0","method":"apiinfo.version","id":1,"auth":null,"params":{}}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Zabbix API Test",src:r(446885).Z+"",width:"1192",height:"517"})}),"\n",(0,t.jsxs)(n.p,{children:["Which is in my case ",(0,t.jsx)(n.strong,{children:"Version 6.0.0"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\r\n    "jsonrpc": "2.0",\r\n    "result": "6.0.0",\r\n    "id": 1\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,t.jsxs)(n.p,{children:["All other request require a user login. I am going to use a user I created for Grafana that has the necessary ",(0,t.jsx)(n.strong,{children:"API Access Rights"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Zabbix API Test",src:r(852992).Z+"",width:"1199",height:"532"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\r\n    "jsonrpc": "2.0",\r\n    "method": "user.login",\r\n    "params": {\r\n        "user": "Grafana",\r\n        "password": "admin"\r\n    },\r\n    "id": 1,\r\n    "auth": null\r\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"jsonrpc"})," : the version of the JSON-RPC protocol used by the API; the Zabbix API implements JSON-RPC version 2.0;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"method"})," : the API method being called;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"params"})," : parameters that will be passed to the API method;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"id"})," : an arbitrary identifier of the request;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"auth"})," : a user authentication token; since we don't have one yet, it's set to null."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This returns our ",(0,t.jsx)(n.strong,{children:"User Authentication Token"})," ",(0,t.jsx)(n.code,{children:"6a92e979419baa5903a4794914770db5"})," that we can use for future requests:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\r\n    "jsonrpc": "2.0",\r\n    "result": "6a92e979419baa5903a4794914770db5",\r\n    "id": 1\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"retrieving-data",children:"Retrieving Data"}),"\n",(0,t.jsxs)(n.p,{children:["Equipped with the auth token I can now ",(0,t.jsx)(n.a,{href:"https://www.zabbix.com/documentation/devel/en/manual/api/reference/",children:"start querying my Zabbix hosts"}),":"]}),"\n",(0,t.jsx)(n.h4,{id:"hostget",children:"host.get"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\r\n    "jsonrpc": "2.0",\r\n    "method": "host.get",\r\n    "params": {\r\n        "output": [\r\n            "hostid",\r\n            "host"\r\n        ],\r\n        "selectInterfaces": [\r\n            "interfaceid",\r\n            "ip"\r\n        ]\r\n    },\r\n    "id": 2,\r\n    "auth": "6a92e979419baa5903a4794914770db5"\r\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"My test system only has the main Zabbix server added and this is reflected in the response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\r\n    "jsonrpc": "2.0",\r\n    "result": [\r\n        {\r\n            "hostid": "10084",\r\n            "host": "Zabbix server",\r\n            "interfaces": [\r\n                {\r\n                    "interfaceid": "1",\r\n                    "ip": "172.16.239.103"\r\n                }\r\n            ]\r\n        }\r\n    ],\r\n    "id": 2\r\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"trendget",children:"trend.get"}),"\n",(0,t.jsxs)(n.p,{children:["The Trend endpoint requires you to specify an ",(0,t.jsx)(n.strong,{children:"itemid"}),". You can find the item ID by opening any graph from your host and take a look at the URL - e.g. the CPU idle time:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http://192.168.2.111:8080/history.php?action=showgraph&itemids%5B%5D=42264\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here the item ID is ",(0,t.jsx)(n.code,{children:"42264"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\r\n    "jsonrpc": "2.0",\r\n    "method": "trend.get",\r\n    "params": {\r\n        "output": [\r\n            "itemid",\r\n            "clock",\r\n            "num",\r\n            "value_min",\r\n            "value_avg",\r\n            "value_max"\r\n        ],\r\n        "itemids": [\r\n            "42264"\r\n        ],\r\n        "limit": "1"\r\n    },\r\n    "id": 2,\r\n    "auth": "6a92e979419baa5903a4794914770db5"\r\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"And this returns the following response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\r\n    "jsonrpc": "2.0",\r\n    "result": [\r\n        {\r\n            "itemid": "42264",\r\n            "clock": "1643439600",\r\n            "num": "55",\r\n            "value_min": "86.672412",\r\n            "value_avg": "97.39452778181823",\r\n            "value_max": "98.332146"\r\n        }\r\n    ],\r\n    "id": 2\r\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>d});var t=r(667294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=t.createContext({}),d=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=d(r),u=s,b=p["".concat(c,".").concat(u)]||p[u]||l[u]||i;return r?t.createElement(b,a(a({ref:n},h),{},{components:r})):t.createElement(b,a({ref:n},h))}));h.displayName="MDXCreateElement"},162373:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/Zabbix_API_Test_01-ef939809da8849a05dc0440b2cbe75f2.png"},446885:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/Zabbix_API_Test_02-4ecd5106f039a0906ca2e5d21af2e344.png"},852992:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/Zabbix_API_Test_03-5a00f5682b4bdf7c8448c8297b9d40ea.png"},558515:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-539dc0d90c8fd4caf3d5cd5162b8ded5.jpg"}}]);