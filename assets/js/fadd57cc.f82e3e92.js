"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[137],{143984:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=r(785893),s=r(603905);const o={sidebar_position:6050,slug:"2021-09-09",title:"NGINX as a Proxy for Websockets",authors:"mpolinowski",tags:["Javascript","NGINX"]},i=void 0,c={id:"Development/Javascript/2021-09-09--websocket-NGINX/index",title:"NGINX as a Proxy for Websockets",description:"Shenzhen, China",source:"@site/docs/Development/Javascript/2021-09-09--websocket-NGINX/index.md",sourceDirName:"Development/Javascript/2021-09-09--websocket-NGINX",slug:"/Development/Javascript/2021-09-09--websocket-NGINX/2021-09-09",permalink:"/docs/Development/Javascript/2021-09-09--websocket-NGINX/2021-09-09",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2021-09-09--websocket-NGINX/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"NGINX",permalink:"/docs/tags/nginx"}],version:"current",sidebarPosition:6050,frontMatter:{sidebar_position:6050,slug:"2021-09-09",title:"NGINX as a Proxy for Websockets",authors:"mpolinowski",tags:["Javascript","NGINX"]},sidebar:"tutorialSidebar",previous:{title:"Convert Alerts into Toasts",permalink:"/docs/Development/Javascript/2021-09-10--notifications-alerts-as-toast/2021-09-10"},next:{title:"HAProxy Loadbalancing and Websockets",permalink:"/docs/Development/Javascript/2021-09-09--websocket-HAproxy/2021-09-09"}},a={},l=[{value:"Building the Websocket Server",id:"building-the-websocket-server",level:2},{value:"Initialize the Project",id:"initialize-the-project",level:3},{value:"Websocket Application",id:"websocket-application",level:3},{value:"NGINX Configuration",id:"nginx-configuration",level:3},{value:"Docker",id:"docker",level:4},{value:"WS Client",id:"ws-client",level:3},{value:"Adding Encryption",id:"adding-encryption",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Shenzhen, China",src:r(314667).Z+"",width:"1500",height:"374"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#building-the-websocket-server",children:"Building the Websocket Server"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#initialize-the-project",children:"Initialize the Project"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#websocket-application",children:"Websocket Application"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#nginx-configuration",children:"NGINX Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#docker",children:"Docker"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#ws-client",children:"WS Client"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#adding-encryption",children:"Adding Encryption"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["NGINX supports WebSocket by allowing a tunnel to be set up between a client and a backend server. For NGINX to send the Upgrade request from the client to the backend server, the ",(0,t.jsx)(n.strong,{children:"Upgrade"})," and ",(0,t.jsx)(n.strong,{children:"Connection"})," headers must be set explicitly, as in this example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'location /wsapp/ {\r\n    proxy_pass http://wsbackend;\r\n    proxy_http_version 1.1;\r\n    proxy_set_header Upgrade $http_upgrade;\r\n    proxy_set_header Connection "Upgrade";\r\n    proxy_set_header Host $host;\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"building-the-websocket-server",children:"Building the Websocket Server"}),"\n",(0,t.jsx)(n.h3,{id:"initialize-the-project",children:"Initialize the Project"}),"\n",(0,t.jsxs)(n.p,{children:["Initialize your Node.js App and install the ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/ws",children:"websocket package"})," using ",(0,t.jsx)(n.strong,{children:"npm"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm init -y\r\nnpm install ws\n"})}),"\n",(0,t.jsx)(n.h3,{id:"websocket-application",children:"Websocket Application"}),"\n",(0,t.jsx)(n.p,{children:"Create the server configuration:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"./server.js"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"port = 8080\r\nvar Msg = '';\r\nvar WebSocketServer = require('ws').Server\r\n    , wss = new WebSocketServer({port});\r\n    wss.on('connection', function(ws) {\r\n        ws.on('message', function(message) {\r\n        console.log('Received from client: %s', message);\r\n        ws.send('Server received from client: ' + message);\r\n    });\r\n });\r\nconsole.log(\"Websocket Server started on port \" + port);\n"})}),"\n",(0,t.jsx)(n.p,{children:"And execute the server with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node server.js\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The server prints an initial ",(0,t.jsx)(n.code,{children:"Websocket Server started on port 8080"})," message and then listens on port 8080, waiting for a client to connect to it. When it receives a client request, it echoes it and sends a message back to the client containing the message it received."]}),"\n",(0,t.jsx)(n.h3,{id:"nginx-configuration",children:"NGINX Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["To have NGINX proxy the requests to our websocket app on the server IP ",(0,t.jsx)(n.code,{children:"192.168.2.111"}),", I create the following configuration:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"/opt/websocket/wsserver/nginx.conf"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"worker_processes 1;\r\nworker_rlimit_nofile 8192;\r\n\r\nevents {\r\n  worker_connections  1024;\r\n}\r\n\r\nhttp {\r\n    map $http_upgrade $connection_upgrade {\r\n        default upgrade;\r\n        '' close;\r\n    }\r\n \r\n    upstream websocket {\r\n        server 192.168.2.111:8080;\r\n    }\r\n \r\n    server {\r\n        listen 8300;\r\n        location / {\r\n            proxy_pass http://websocket;\r\n            proxy_http_version 1.1;\r\n            proxy_set_header Upgrade $http_upgrade;\r\n            proxy_set_header Connection $connection_upgrade;\r\n            proxy_set_header Host $host;\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The map block sets the ",(0,t.jsx)(n.strong,{children:"Connection header"})," to ",(0,t.jsx)(n.code,{children:"close"})," when the ",(0,t.jsx)(n.strong,{children:"Upgrade header"})," in the request is set to ''. NGINX listens on port ",(0,t.jsx)(n.code,{children:"8300"})," and proxies requests to the backend WebSocket server on port ",(0,t.jsx)(n.code,{children:"8080"}),". The ",(0,t.jsx)(n.code,{children:"proxy_set_header"})," directives enable NGINX to properly handle the WebSocket protocol."]}),"\n",(0,t.jsx)(n.h4,{id:"docker",children:"Docker"}),"\n",(0,t.jsxs)(n.p,{children:["I am going to use the ",(0,t.jsx)(n.a,{href:"https://hub.docker.com/_/nginx",children:"NGINX docker image"})," to spawn a container with the configuration above:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker pull nginx:1.21-alpine\r\ndocker run -d --name nginx --network=host -v /opt/websocket/wsserver/nginx.conf:/etc/nginx/nginx.conf:ro nginx:1.21-alpine \n"})}),"\n",(0,t.jsx)(n.h3,{id:"ws-client",children:"WS Client"}),"\n",(0,t.jsxs)(n.p,{children:["I can now install a websocket client called ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/wscat",children:"wscat"}),". I can use the program to connect to the server:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install wscat -g\r\n\r\nwscat --connect ws://192.168.2.111:8300\r\nConnected (press CTRL+C to quit)\r\n> Konbanwa!\r\n< Server received from client: Konbanwa!\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node server.js\r\nWebsocket Server started on Port 8080\r\nReceived from client: Konbanwa!\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"wscat"})," connects to the WebSocket server through the NGINX proxy. When you type a message for wscat to send to the server, you see it echoed on the server and then a message from the server appears on the client."]}),"\n",(0,t.jsx)(n.h2,{id:"adding-encryption",children:"Adding Encryption"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"I already ran into some issues with HAProxy trying to add a self-signed TLS certificate. I will get back to this later (when I can set this up on server that is accessible via domain / CA cert)"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>l});var t=r(667294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var a=t.createContext({}),l=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=l(r),u=s,g=p["".concat(a,".").concat(u)]||p[u]||d[u]||o;return r?t.createElement(g,i(i({ref:n},h),{},{components:r})):t.createElement(g,i({ref:n},h))}));h.displayName="MDXCreateElement"},314667:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-dd2c04030bd344a6c433c240ed2c2bba.jpg"}}]);