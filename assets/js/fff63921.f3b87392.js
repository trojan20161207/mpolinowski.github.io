"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[11826],{729948:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(785893),i=t(603905);const r={sidebar_position:6e3,slug:"2022-10-29",title:"WebRTC Introduction - Realtime Chat",authors:"mpolinowski",tags:["Javascript","WebRTC"],description:"Establishing a bidirectional Websocket connection."},o=void 0,c={id:"Development/Javascript/2022-10-29-webrtc-introduction-realtime-chat/index",title:"WebRTC Introduction - Realtime Chat",description:"Establishing a bidirectional Websocket connection.",source:"@site/docs/Development/Javascript/2022-10-29-webrtc-introduction-realtime-chat/index.md",sourceDirName:"Development/Javascript/2022-10-29-webrtc-introduction-realtime-chat",slug:"/Development/Javascript/2022-10-29-webrtc-introduction-realtime-chat/2022-10-29",permalink:"/docs/Development/Javascript/2022-10-29-webrtc-introduction-realtime-chat/2022-10-29",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2022-10-29-webrtc-introduction-realtime-chat/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"WebRTC",permalink:"/docs/tags/web-rtc"}],version:"current",sidebarPosition:6e3,frontMatter:{sidebar_position:6e3,slug:"2022-10-29",title:"WebRTC Introduction - Realtime Chat",authors:"mpolinowski",tags:["Javascript","WebRTC"],description:"Establishing a bidirectional Websocket connection."},sidebar:"tutorialSidebar",previous:{title:"WebRTC Introduction - Client Side Signalling",permalink:"/docs/Development/Javascript/2022-10-30-webrtc-introduction-video-chat-part1/2022-10-30"},next:{title:"Docusaurus Introduction",permalink:"/docs/Development/Javascript/2022-07-01-docusaurus-introduction/2022-07-01"}},a={},l=[{value:"WebRTC",id:"webrtc",level:2},{value:"Protocols",id:"protocols",level:3},{value:"SDP",id:"sdp",level:4},{value:"ICE",id:"ice",level:4},{value:"RTP &amp; RTCP",id:"rtp--rtcp",level:4},{value:"SCTP",id:"sctp",level:4},{value:"DTLS &amp; SRTP",id:"dtls--srtp",level:4},{value:"Bi-Directional Communication - Websocket Signalling",id:"bi-directional-communication---websocket-signalling",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Shenzhen, China",src:t(638202).Z+"",width:"2208",height:"757"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#webrtc",children:"WebRTC"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#protocols",children:"Protocols"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#sdp",children:"SDP"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#ice",children:"ICE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#rtp--rtcp",children:"RTP & RTCP"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#sctp",children:"SCTP"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#dtls--srtp",children:"DTLS & SRTP"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#bi-directional-communication---websocket-signalling",children:"Bi-Directional Communication - Websocket Signalling"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WIP"})," "]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/Development/Javascript/2022-10-29-webrtc-introduction-realtime-chat/2022-10-29",children:"WebRTC Introduction - Websockets"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/Development/Javascript/2022-10-30-webrtc-introduction-video-chat-part1/2022-10-30",children:"WebRTC Introduction - Client Side Signalling"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/Development/Javascript/2022-11-10-webrtc-introduction-video-chat-part2/2022-11-10",children:"WebRTC Introduction - Interactive Connectivity Establishment"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Resources:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://webrtcforthecurious.com",children:"WebRTC for the Curious"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://web.dev/webrtc-basics/#toc-rtcpeerconnection",children:"WebRTC Basics"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://webrtc.github.io/samples/src/content/peerconnection/munge-sdp/",children:"WebRTC Sample"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"webrtc",children:"WebRTC"}),"\n",(0,s.jsxs)(n.p,{children:["With ",(0,s.jsx)(n.a,{href:"https://webrtc.org/",children:"WebRTC"}),", you can add real-time communication capabilities to your application that works on top of an open standard. It supports video, voice, and generic data to be sent between peers, allowing developers to build powerful voice- and video-communication solutions."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Signalling Server"}),": For signaling intend and to negotiate the connection parameter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"STUN Server"}),": Provides a tool for hosts to discover the presence of a network address translator, and to discover the mapped Internet Protocol (",(0,s.jsx)(n.strong,{children:"IP"}),") address and port number."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TURN Server"}),": ",(0,s.jsx)(n.a,{href:"https://webrtc.org/getting-started/turn-server",children:"Traversal Using Relay NAT"})," - Server required for relaying the traffic between peers, since a direct socket is often not possible between the clients."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"protocols",children:"Protocols"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://webrtcforthecurious.com/docs/02-signaling/",children:"Signalling"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://webrtcforthecurious.com/docs/02-signaling/#what-is-the-session-description-protocol-sdp",children:"SDP"}),": Session Description Protocol"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://webrtcforthecurious.com/docs/03-connecting/",children:"Connecting"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://webrtcforthecurious.com/docs/03-connecting/#ice",children:"ICE"}),": Interactive Connectivity Establishment"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://webrtcforthecurious.com/docs/06-media-communication",children:"Media Communication"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://webrtcforthecurious.com/docs/06-media-communication/#rtp",children:"RTP"}),": Real-time Transport Protocol"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://webrtcforthecurious.com/docs/07-data-communication/#stream-control-transmission-protocol",children:"SCTP"}),": Stream Control Transmission Protocol"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://webrtcforthecurious.com/docs/06-media-communication/#rtcp",children:"RTCP"}),": Real-time Transport Control Protocol"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://webrtcforthecurious.com/docs/04-securing/",children:"Security"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://webrtcforthecurious.com/docs/04-securing/#dtls",children:"DTLS"}),": Datagram Transport Layer Security"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://webrtcforthecurious.com/docs/04-securing/#srtp",children:"SRTP"}),": Secure Real-time Transport Protocol"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"sdp",children:"SDP"}),"\n",(0,s.jsx)(n.p,{children:"Signaling is the initial bootstrapping that makes a call possible. After these values are exchanged, the WebRTC agents can communicate directly with each other. WebRTC uses an existing protocol called the Session Description Protocol. Via this protocol, the two WebRTC Agents will share all the state required to establish a connection."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"key = value"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"With the following keys:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"v"}),": Version, should be equal to ",(0,s.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"o"}),": Origin, contains a unique ID useful for renegotiations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"s"}),": Session Name, should be equal to ",(0,s.jsx)(n.code,{children:"-"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"t"}),": Timing, should be equal to ",(0,s.jsx)(n.code,{children:"0 0"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"m"}),": Media Description (",(0,s.jsx)(n.code,{children:"m=<media> <port> <proto> <fmt>"})," ...)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"a"}),": Attribute, a free text field. This is the most common line in WebRTC."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"c"}),": Connection Data, should be equal to ",(0,s.jsx)(n.code,{children:"IN IP4 0.0.0.0"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Full Example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"v=0\no=- 0 0 IN IP4 127.0.0.1\ns=-\nc=IN IP4 127.0.0.1\nt=0 0\nm=audio 4000 RTP/AVP 111\na=rtpmap:111 OPUS/48000/2\nm=video 4002 RTP/AVP 96\na=rtpmap:96 VP8/90000\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"v"}),", ",(0,s.jsx)(n.code,{children:"o"}),", ",(0,s.jsx)(n.code,{children:"s"}),", ",(0,s.jsx)(n.code,{children:"c"}),", ",(0,s.jsx)(n.code,{children:"t"})," are defined, but they do not affect the WebRTC session."]}),"\n",(0,s.jsx)(n.li,{children:"You have two Media Descriptions. One of type audio and one of type video."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ice",children:"ICE"}),"\n",(0,s.jsxs)(n.p,{children:["ICE (",(0,s.jsx)(n.em,{children:"Interactive Connectivity Establishment"}),") is how WebRTC connects two Agents. ICE is a protocol for establishing connectivity. It determines all the possible routes between the two peers and then ensures you stay connected. This is where STUN and TURN come into play with ICE. These addresses can be your local IP Address plus a port, NAT mapping, or Relayed Transport Address. Each side gathers all the addresses they want to use, exchanges them, and then attempts to connect."]}),"\n",(0,s.jsx)(n.h4,{id:"rtp--rtcp",children:"RTP & RTCP"}),"\n",(0,s.jsx)(n.p,{children:"WebRTC allows you to send and receive an unlimited amount of audio and video streams. You can add and remove these streams at anytime during a call."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"RTP"})," (",(0,s.jsx)(n.em,{children:"Real-time Transport Protocol"}),") is the protocol that carries the media. It was designed to allow for real-time delivery of video. RTP gives you streams, so you can run multiple media feeds over one connection. It also gives you the timing and ordering information you need to feed a media pipeline."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"RTCP"})," (",(0,s.jsx)(n.em,{children:"RTP Control Protocol"}),") is the protocol that communicates metadata about the call. This is used to communicate statistics about the call. It is also used to handle packet loss and to implement congestion control. It gives you the bi-directional communication necessary to respond to changing network conditions."]}),"\n",(0,s.jsx)(n.h4,{id:"sctp",children:"SCTP"}),"\n",(0,s.jsxs)(n.p,{children:["WebRTC uses the ",(0,s.jsx)(n.em,{children:"Stream Control Transmission Protocol"})," (",(0,s.jsx)(n.strong,{children:"SCTP"}),") which is a transport layer protocol that was intended as an alternative to ",(0,s.jsx)(n.em,{children:"TCP"})," or ",(0,s.jsx)(n.em,{children:"UDP"}),". SCTP gives you streams and each stream can be configured independently. SCTP is the real power behind WebRTC data channels. It provides all these features of the data channel:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Multiplexing"}),"\n",(0,s.jsx)(n.li,{children:"Reliable delivery using a TCP-like retransmission mechanism"}),"\n",(0,s.jsx)(n.li,{children:"Partial-reliability options"}),"\n",(0,s.jsx)(n.li,{children:"Congestion Avoidance"}),"\n",(0,s.jsx)(n.li,{children:"Flow Control"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"dtls--srtp",children:"DTLS & SRTP"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Every WebRTC connection is authenticated and encrypted."})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DTLS"})," (",(0,s.jsx)(n.em,{children:"Datagram Transport Layer Security"}),") allows two peers to establish secure communication with no pre-existing configuration. For a DTLS Client and a Server to communicate, they need to agree on a cipher and the key. They determine these values by doing a DTLS handshake. During the handshake, the messages are in plaintext. When a DTLS Client/Server has exchanged enough details to start encrypting it sends a Change Cipher Spec. After this message, each subsequent message will be encrypted."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SRTP"})," (",(0,s.jsx)(n.em,{children:"Secure Real-time Transport Protocol"}),") is a protocol designed specifically for encrypting RTP packets. To start an SRTP session you specify your keys and cipher. Unlike DTLS it has no handshake mechanism. All the configuration and keys were generated during the DTLS handshake."]}),"\n",(0,s.jsx)(n.h2,{id:"bi-directional-communication---websocket-signalling",children:"Bi-Directional Communication - Websocket Signalling"}),"\n",(0,s.jsxs)(n.p,{children:["Establishing a bidirectional link between two clients -> Express & ",(0,s.jsx)(n.a,{href:"https://socket.io/get-started/chat",children:"Socket.io"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const express = require("express");\nconst socket = require("socket.io");\n\nconst port = 8888\n\nvar app = express();\n\nvar server = app.listen(port, function () {\n    console.log(\'INFO :: Webserver is running on ::  http://localhost:\' + port)\n});\n\napp.use(express.static("public"));\n\nvar upgradedServer = socket(server);\n\nupgradedServer.on("connection", function (socket) {\n  console.log("INFO :: Websocket connection established :: ", socket.id);\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"And add the following to your web client to establish a bidirectional websocket connection"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.3/socket.io.js" integrity="sha512-iWPnCISAd/J+ZacwV2mbNLCaPGRrRo5OS81lKTVPtRg1wGTC20Cfmp5Us5RcbLv42QLdbAWl0MI57yox5VecQg==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>\n<script src="./chat.js"><\/script>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["With ",(0,s.jsx)(n.code,{children:"chat.js"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'let socket = io.connect("http://localhost:8888");\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Starting the web server with ",(0,s.jsx)(n.code,{children:"node index.js"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm start\n\n> webrtc-intro@1.0.0 start\n> node index.js\n\nINFO :: Webserver is running on ::  http://localhost:8888\nINFO :: Websocket connection established ::  g96wjUg0JtWL71FoAAAB\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We can now get the HTML elements in ",(0,s.jsx)(n.code,{children:"chat.js"})," and send their values to our backend to trigger a broadcast function when a new message arrives:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"var username = document.getElementById(\"username\")\nvar output = document.getElementById(\"output\")\nvar message = document.getElementById(\"message\")\nvar button = document.getElementById(\"send\")\n\nbutton.addEventListener('click', function() {\n    socket.emit('sendMessage', {\n        'message': message.value,\n        'username': username.value\n    })\n})\n\nsocket.on('broadcastMessage', function(data) {\n    output.innerHTML += '<p><strong>' + data.username + ': </strong>' + data.message + '</p>'\n})\n"})}),"\n",(0,s.jsx)(n.p,{children:"The Express server then has to broadcast those values to every chat client:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'upgradedServer.on("connection", function (socket) {\n  socket.on("sendMessage", function (data) {\n    upgradedServer.emit("broadcastMessage", data);\n  });\n\n  console.log("INFO :: Websocket connection established :: ", socket.id);\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"WebRTC Introduction",src:t(597595).Z+"",width:"961",height:"724"})})]})}function h(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>l});var s=t(667294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,s,i=function(e,n){if(null==e)return{};var t,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=s.createContext({}),l=function(e){var n=s.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},h=s.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=l(t),u=i,m=p["".concat(a,".").concat(u)]||p[u]||d[u]||r;return t?s.createElement(m,o(o({ref:n},h),{},{components:t})):s.createElement(m,o({ref:n},h))}));h.displayName="MDXCreateElement"},638202:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-e38404fdf0e14587f660e537829bfab5.jpg"},597595:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/websockets-intro_01-51264c407fe7c7ed81b705fd2b35d6c1.png"}}]);