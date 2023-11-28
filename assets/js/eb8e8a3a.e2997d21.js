"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[8363],{182036:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=r(785893),t=r(603905);const a={sidebar_position:6060,slug:"2021-09-09",title:"HAProxy Loadbalancing and Websockets",authors:"mpolinowski",tags:["Javascript"]},o=void 0,i={id:"Development/Javascript/2021-09-09--websocket-HAproxy/index",title:"HAProxy Loadbalancing and Websockets",description:"Wan Chai, Hong Kong",source:"@site/docs/Development/Javascript/2021-09-09--websocket-HAproxy/index.md",sourceDirName:"Development/Javascript/2021-09-09--websocket-HAproxy",slug:"/Development/Javascript/2021-09-09--websocket-HAproxy/2021-09-09",permalink:"/docs/Development/Javascript/2021-09-09--websocket-HAproxy/2021-09-09",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2021-09-09--websocket-HAproxy/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"}],version:"current",sidebarPosition:6060,frontMatter:{sidebar_position:6060,slug:"2021-09-09",title:"HAProxy Loadbalancing and Websockets",authors:"mpolinowski",tags:["Javascript"]},sidebar:"tutorialSidebar",previous:{title:"NGINX as a Proxy for Websockets",permalink:"/docs/Development/Javascript/2021-09-09--websocket-NGINX/2021-09-09"},next:{title:"HTML Video over Websockets",permalink:"/docs/Development/Javascript/2021-09-08--websockets-html-video/2021-09-08"}},c={},d=[{value:"Build the Docker Image",id:"build-the-docker-image",level:2},{value:"Docker Compose",id:"docker-compose",level:2},{value:"Testing",id:"testing",level:2},{value:"WSS Adding TLS Encryption",id:"wss-adding-tls-encryption",level:2},{value:"Create a PEM Certificates",id:"create-a-pem-certificates",level:3},{value:"HAProxy Configuration",id:"haproxy-configuration",level:3},{value:"Spin up the Docker Composition",id:"spin-up-the-docker-composition",level:3},{value:"Testing",id:"testing-1",level:3},{value:"Debugging",id:"debugging",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Wan Chai, Hong Kong",src:r(152132).Z+"",width:"1500",height:"491"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#build-the-docker-image",children:"Build the Docker Image"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#docker-compose",children:"Docker Compose"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#testing",children:"Testing"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#wss-adding-tls-encryption",children:"WSS Adding TLS Encryption"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#create-a-pem-certificates",children:"Create a PEM Certificates"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#haproxy-configuration",children:"HAProxy Configuration"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#spin-up-the-docker-composition",children:"Spin up the Docker Composition"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#testing-1",children:"Testing"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#debugging",children:"Debugging"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Following along a tutorial by ",(0,s.jsx)(n.a,{href:"https://github.com/hnasr/javascript_playground/tree/master/ws-live-chat-system",children:"hnasr"})," to check out how to use web proxies / load-balancing in front of applications that use websocket connections."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Project Structure"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\u251c\u2500\u2500 app\r\n\u2502   \u251c\u2500\u2500 index.mjs\r\n\u2502   \u2514\u2500\u2500 package.json\r\n\u251c\u2500\u2500 docker-compose.yml\r\n\u251c\u2500\u2500 Dockerfile\r\n\u2514\u2500\u2500 haproxy\r\n    \u2514\u2500\u2500 haproxy.cfg\n"})}),"\n",(0,s.jsx)(n.h2,{id:"build-the-docker-image",children:"Build the Docker Image"}),"\n",(0,s.jsxs)(n.p,{children:["Build the chat app image with the following ",(0,s.jsx)(n.strong,{children:"Dockerfile"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Dockerfile",children:"FROM node:13\r\nWORKDIR /home/node/app\r\nCOPY app /home/node/app\r\nRUN npm install\r\nCMD npm run app\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker build -t wsapp .\r\n\r\n[+] Building 63.7s (10/10) FINISHED\r\n => [internal] load build definition from Dockerfile                                                               0.1s\r\n => => transferring dockerfile: 130B                                                                               0.0s\r\n => [internal] load .dockerignore                                                                                  0.1s\r\n => => transferring context: 2B                                                                                    0.0s\r\n => [internal] load metadata for docker.io/library/node:13                                                        10.4s\r\n => [auth] library/node:pull token for registry-1.docker.io                                                        0.0s\r\n => [1/4] FROM docker.io/library/node:13@sha256:70d4fffcab39a1f9f7161d58e674ddcc56c7f0724196b68d52a87bab15cb4a04  46.0s\r\n => => resolve docker.io/library/node:13@sha256:70d4fffcab39a1f9f7161d58e674ddcc56c7f0724196b68d52a87bab15cb4a04   0.0s\r\n => => sha256:1c6172af85ee14a8db5a3a51d406b768dfa94d196c06d0d06d591507cf8199f0 45.38MB / 45.38MB                   7.6s\r\n => => sha256:b194b0e3c928807cfabf081055a117585ba5bf6697f65b2fede02225a5d73ad2 10.80MB / 10.80MB                   6.0s\r\n => => sha256:70d4fffcab39a1f9f7161d58e674ddcc56c7f0724196b68d52a87bab15cb4a04 1.21kB / 1.21kB                     0.0s\r\n => => sha256:1e8d7127072cdbaae1935656444c3ec2bef8882c8c14d459e3a92ca1dd313c28 2.21kB / 2.21kB                     0.0s\r\n => => sha256:2b9604a36e4911d15d2916dac4f1d853e2da612e9bb77df1016f8a51b3e333a1 7.88kB / 7.88kB                     0.0s\r\n => => sha256:1f5ec00f35d5b2d1db6b8e925a3005c1a285365775028db0339903ddaeec4763 4.34MB / 4.34MB                     4.0s\r\n => => sha256:93b1353672b6861da5f1b58b0eca02ec10373a25d2898bddafa1b4bae2271c55 50.08MB / 50.08MB                  19.0s\r\n => => sha256:3d7f38db3cca2c74df9a146d8419f5bf79d79b18de9eaee6351dccde16ab1f4a 214.91MB / 214.91MB                34.5s\r\n => => sha256:21e102f9fe89a18627c0ce50945bd1e0a11d0fecd4800bbbd999944d3940efc6 4.16kB / 4.16kB                     8.5s\r\n => => extracting sha256:1c6172af85ee14a8db5a3a51d406b768dfa94d196c06d0d06d591507cf8199f0                          2.6s\r\n => => sha256:d5431b24825a3297da35afe3d32786e01ec3fe7a8d1685adf59f82138e916e10 34.44MB / 34.44MB                  19.1s\r\n => => extracting sha256:b194b0e3c928807cfabf081055a117585ba5bf6697f65b2fede02225a5d73ad2                          0.5s\r\n => => extracting sha256:1f5ec00f35d5b2d1db6b8e925a3005c1a285365775028db0339903ddaeec4763                          0.2s\r\n => => extracting sha256:93b1353672b6861da5f1b58b0eca02ec10373a25d2898bddafa1b4bae2271c55                          3.3s\r\n => => sha256:f780e3352c1809c08a5e6e4168206425ce703018baae8d6efd8d18efb101405b 2.38MB / 2.38MB                    22.3s\r\n => => sha256:4d28937582d0e76cbe8ed78ed921823a349a8a0755f91e13648e7636c974b0b6 295B / 295B                        21.1s\r\n => => extracting sha256:3d7f38db3cca2c74df9a146d8419f5bf79d79b18de9eaee6351dccde16ab1f4a                          8.6s\r\n => => extracting sha256:21e102f9fe89a18627c0ce50945bd1e0a11d0fecd4800bbbd999944d3940efc6                          0.0s\r\n => => extracting sha256:d5431b24825a3297da35afe3d32786e01ec3fe7a8d1685adf59f82138e916e10                          1.7s\r\n => => extracting sha256:f780e3352c1809c08a5e6e4168206425ce703018baae8d6efd8d18efb101405b                          0.1s\r\n => => extracting sha256:4d28937582d0e76cbe8ed78ed921823a349a8a0755f91e13648e7636c974b0b6                          0.0s\r\n => [internal] load build context                                                                                  0.1s\r\n => => transferring context: 2.65kB                                                                                0.0s\r\n => [2/4] WORKDIR /home/node/app                                                                                   1.2s\r\n => [3/4] COPY app /home/node/app                                                                                  0.1s\r\n => [4/4] RUN npm install                                                                                          5.7s\r\n => exporting to image                                                                                             0.2s\r\n => => exporting layers                                                                                            0.2s\r\n => => writing image sha256:1d2f01e0f5cabc7d8fa5c453c16546f2bf192daf8dfec351797562052b861026                       0.0s\r\n => => naming to docker.io/library/wsapp\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will download the Node.js v13 Docker image as a base and install/run the content of the folder ",(0,s.jsx)(n.strong,{children:"app"})," inside the container. This folder contains a ",(0,s.jsx)(n.code,{children:"package.json"})," file with our app dependencies:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\r\n  "name": "app",\r\n  "version": "1.0.0",\r\n  "description": "",\r\n  "main": "index.mjs",\r\n  "scripts": {\r\n    "app": "node index.mjs"\r\n  },\r\n  "keywords": [],\r\n  "author": "",\r\n  "license": "ISC",\r\n  "dependencies": {\r\n    "http": "0.0.1-security",\r\n    "redis": "^3.0.2",\r\n    "websocket": "^1.0.31"\r\n  }\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["And execute the file ",(0,s.jsx)(n.code,{children:"index.mjs"})," with the Websocket Server code as soon as the Container is run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import http from "http";\r\nimport ws from "websocket"\r\nimport redis from "redis";\r\nconst APPID = process.env.APPID;\r\nlet connections = [];\r\nconst WebSocketServer = ws.server\r\n\r\n// Clients will be connected to different instances of our service. To allow them to interact we need to connect our app to a Redis database "redistribute" our app state, i.e. messages written on server 1 will be available on server 2 since all apps store their messages in a single place from where all instances can read incoming updates.\r\n\r\nconst subscriber = redis.createClient({\r\n  port      : 6379,              \r\n  host      : \'rds\'} );\r\n\r\nconst publisher = redis.createClient({\r\n  port      : 6379,              \r\n  host      : \'rds\'} );\r\n  \r\n\r\n// Subscribe the app to the Redis backend\r\n\r\nsubscriber.subscribe("livechat");\r\n\r\n// When a subscription is successful publish a success message\r\n\r\nsubscriber.on("subscribe", function(channel, count) {\r\n  console.log(`Server ${APPID} subscribed successfully to livechat`)\r\n  publisher.publish("livechat", "a message");\r\n});\r\n\r\n// If a message comes in to Redis "livechat" subscription publish it to all active websocket connections\r\n\r\nsubscriber.on("message", function(channel, message) {\r\n  try{\r\n  //when we receive a message I want t\r\n  console.log(`Server ${APPID} received message in channel ${channel} msg: ${message}`);\r\n  connections.forEach(c => c.send(APPID + ":" + message))\r\n    \r\n  }\r\n  catch(ex){\r\n    console.log("ERR::" + ex)\r\n  }\r\n});\r\n\r\n\r\n// Create a raw http server that will negotiate the websocket connection\r\nconst httpserver = http.createServer()\r\n\r\n// Pass the httpserver object to the WebSocketServer library\r\nconst websocket = new WebSocketServer({\r\n    "httpServer": httpserver\r\n})\r\n\r\n\r\nhttpserver.listen(8080, () => console.log("My server is listening on port 8080"))\r\n\r\n//when a legit websocket request comes in establish a connection\r\nwebsocket.on("request", request=> {\r\n\r\n    const con = request.accept(null, request.origin)\r\n    con.on("open", () => console.log("opened"))\r\n    con.on("close", () => console.log("CLOSED!!!"))\r\n    con.on("message", message => {\r\n        //publish the message to redis\r\n        console.log(`${APPID} Received message ${message.utf8Data}`)\r\n        publisher.publish("livechat", message.utf8Data)\r\n    })\r\n\r\n    setTimeout(() => con.send(`Connected successfully to server ${APPID}`), 5000)\r\n    connections.push(con)\r\n  \r\n\r\n})\r\n  \r\n//client code \r\n//let ws = new WebSocket("ws://localhost:8080");\r\n//ws.onmessage = message => console.log(`Received: ${message.data}`);\r\n//ws.send("Hello! I\'m client")\r\n\r\n\r\n/*\r\n    //code clean up after closing connection\r\n    subscriber.unsubscribe();\r\n    subscriber.quit();\r\n    publisher.quit();\r\n    */\n'})}),"\n",(0,s.jsx)(n.h2,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,s.jsxs)(n.p,{children:["The entire app will consist of a ",(0,s.jsx)(n.a,{href:"http://www.haproxy.org",children:"HAProxy"})," ",(0,s.jsx)(n.code,{children:"haproxy"})," that will divide the incoming traffic over all instances of our Websocket Chat App that we build above (I limited it to 2 instances ",(0,s.jsx)(n.code,{children:"ws1"})," and ",(0,s.jsx)(n.code,{children:"ws2"})," - you can start as many as you need). Since every connecting users might be connected to different chat servers we need to add a database ",(0,s.jsx)(n.code,{children:"redis"})," in the background that all servers are connected to and exchange their state. This allows users to interact with each other - no matter what server they are connected to:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"version : '3'\r\n\r\nservices:\r\n    lb:\r\n        image: haproxy\r\n        ports:\r\n            - \"8080:8080\"\r\n        volumes:\r\n            - ./haproxy:/usr/local/etc/haproxy\r\n    ws1:\r\n        image: wsapp\r\n        environment:\r\n            - APPID=1111\r\n    ws2:\r\n        image: wsapp\r\n        environment:\r\n            - APPID=2222\r\n    rds:\r\n        image: redis\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The HAProxy container loads in a simple configuration file from the ",(0,s.jsx)(n.code,{children:"./haproxy"})," directory telling it that it should expect incoming traffic on port ",(0,s.jsx)(n.code,{children:"8080"})," and distribute them over our two chat apps:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"frontend http\r\n    bind *:8080\r\n    mode http\r\n    timeout client 1000s\r\n    use_backend all\r\n\r\nbackend all\r\n    mode http\r\n    timeout server 1000s\r\n    timeout connect 1000s \r\n    server s1 ws1:8080\r\n    server s2 ws2:8080\n"})}),"\n",(0,s.jsx)(n.p,{children:"To spin everything up run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker-compose up\r\n\r\nCreating network \"websocket_default\" with the default driver\r\nCreating websocket_ws1_1 ... done\r\nCreating websocket_ws2_1 ... done\r\nCreating websocket_lb_1  ... done\r\nCreating websocket_rds_1 ... done\r\nAttaching to websocket_ws1_1, websocket_rds_1, websocket_ws2_1, websocket_lb_1\r\nrds_1  | 1:C 23 Sep 2021 06:29:49.716 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo\r\nrds_1  | 1:C 23 Sep 2021 06:29:49.716 # Redis version=6.2.5, bits=64, commit=00000000, modified=0, pid=1, just started\r\nrds_1  | 1:C 23 Sep 2021 06:29:49.716 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf\r\nrds_1  | 1:M 23 Sep 2021 06:29:49.717 * monotonic clock: POSIX clock_gettime\r\nrds_1  | 1:M 23 Sep 2021 06:29:49.718 * Running mode=standalone, port=6379.\r\nrds_1  | 1:M 23 Sep 2021 06:29:49.718 # Server initialized\r\nrds_1  | 1:M 23 Sep 2021 06:29:49.718 # WARNING overcommit_memory is set to 0! Background save may fail under low memory condition. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.\r\nrds_1  | 1:M 23 Sep 2021 06:29:49.718 * Ready to accept connections\r\nlb_1   | [NOTICE]   (1) : New worker #1 (8) forked\r\nws2_1  | \r\nws2_1  | > app@1.0.0 app /home/node/app\r\nws2_1  | > node index.mjs\r\nws2_1  | \r\nws1_1  | \r\nws1_1  | > app@1.0.0 app /home/node/app\r\nws1_1  | > node index.mjs\r\nws1_1  | \r\nws2_1  | My server is listening on port 8080\r\nws2_1  | Server 2222 subscribed successfully to livechat\r\nws2_1  | Server 2222 received message in channel livechat msg: a message\r\nws1_1  | My server is listening on port 8080\r\nws1_1  | Server 1111 subscribed successfully to livechat\r\nws2_1  | Server 2222 received message in channel livechat msg: a message\r\nws1_1  | Server 1111 received message in channel livechat msg: a message\n"})}),"\n",(0,s.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,s.jsxs)(n.p,{children:["I started up the service on a server on my network with the IP address ",(0,s.jsx)(n.code,{children:"192.168.2.111"}),". So I can now open up the Chrome developer tools, switch to the ",(0,s.jsx)(n.em,{children:"Console"})," tab and connect to the service:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'let ws = new WebSocket("ws://192.168.2.111:8080");\r\nws.onmessage = message => console.log(`Received: ${message.data}`);\r\nws.send("Hello! I\'m client")\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Websocket Chat Client",src:r(26555).Z+"",width:"913",height:"213"})}),"\n",(0,s.jsx)(n.p,{children:"You can see that the response I am getting from the service is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Received: 1111:Hello! I'm client\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This means that I am connected to the Websocket Chat App with the ",(0,s.jsx)(n.strong,{children:"APPID 1111"}),". Opening up a second browser and going to the same steps again will connect me to ",(0,s.jsx)(n.strong,{children:"APPID 2222"})," in a ",(0,s.jsx)(n.code,{children:"round-robin"})," fashion:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Websocket Chat Client",src:r(620467).Z+"",width:"907",height:"646"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Received: 2222:Hello! I'm client2\n"})}),"\n",(0,s.jsx)(n.p,{children:"It works!"}),"\n",(0,s.jsx)(n.h2,{id:"wss-adding-tls-encryption",children:"WSS Adding TLS Encryption"}),"\n",(0,s.jsx)(n.h3,{id:"create-a-pem-certificates",children:"Create a PEM Certificates"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ./haproxy\n"})}),"\n",(0,s.jsx)(n.p,{children:"Generate a unique private key (KEY)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"openssl genrsa -out ws_haproxy.key 2048\n"})}),"\n",(0,s.jsx)(n.p,{children:"Generate a Certificate Signing Request (CSR)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"openssl req -new -key ws_haproxy.key -out ws_haproxy.csr\r\n\r\nYou are about to be asked to enter information that will be incorporated\r\ninto your certificate request.\r\nWhat you are about to enter is what is called a Distinguished Name or a DN.\r\nThere are quite a few fields but you can leave some blank\r\nFor some fields there will be a default value,\r\nIf you enter '.', the field will be left blank.\r\n-----\r\nCountry Name (2 letter code) [AU]:\r\nState or Province Name (full name) [Some-State]:\r\nLocality Name (eg, city) []:\r\nOrganization Name (eg, company) [Internet Widgits Pty Ltd]:\r\nOrganizational Unit Name (eg, section) []:\r\nCommon Name (e.g. server FQDN or YOUR name) []:192.168.2.111\r\nEmail Address []:\r\n\r\nPlease enter the following 'extra' attributes\r\nto be sent with your certificate request\r\nA challenge password []:\r\nAn optional company name []:\n"})}),"\n",(0,s.jsx)(n.p,{children:"Create a Self-Signed Certificate (CRT)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"openssl x509 -req -days 365 -in ws_haproxy.csr -signkey ws_haproxy.key -out ws_haproxy.crt\r\n\r\nSignature ok\r\nsubject=C = AU, ST = Some-State, O = Internet Widgits Pty Ltd, CN = 192.168.2.111\r\nGetting Private key\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Append KEY and CRT to ",(0,s.jsx)(n.code,{children:"ws_haproxy.pem"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bash -c 'cat ws_haproxy.key ws_haproxy.crt >> ws_haproxy.pem'\n"})}),"\n",(0,s.jsx)(n.p,{children:"Specify PEM in haproxy config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nano haproxy.cfg\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"listen haproxy\r\n  bind 0.0.0.0:443 ssl crt /etc/ssl/private/ws_haproxy.pem\n"})}),"\n",(0,s.jsx)(n.h3,{id:"haproxy-configuration",children:"HAProxy Configuration"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"./haproxy/haproxy_ssl.cfg"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"frontend ws\r\n    mode http\r\n    bind *:80\r\n    bind *:443 ssl crt /etc/ssl/private/ws_haproxy.pem\r\n    timeout client 1000s\r\n    default_backend wsbackend\r\n\r\nbackend wsbackend\r\n    mode http\r\n    server s1 ws1:8080\r\n    server s2 ws2:8080\r\n    timeout connect 1000s \r\n    timeout server 1000s\n"})}),"\n",(0,s.jsx)(n.h3,{id:"spin-up-the-docker-composition",children:"Spin up the Docker Composition"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'version : \'3\'\r\n\r\nservices:\r\n    lb:\r\n        image: haproxy\r\n        ports:\r\n            - "80:80"\r\n            - "443:443"\r\n        volumes:\r\n            - ./haproxy/haproxy_ssl.cfg:/usr/local/etc/haproxy/haproxy.cfg\r\n            - ./haproxy/ws_haproxy.pem:/etc/ssl/private/ws_haproxy.pem\r\n    ws1:\r\n        image: wsapp\r\n        environment:\r\n            - APPID=1111\r\n    ws2:\r\n        image: wsapp\r\n        environment:\r\n            - APPID=2222\r\n    rds:\r\n        image: redis\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker-compose up\r\n\r\nRecreating websocket_lb_1 ... done\r\nStarting websocket_rds_1  ... done\r\nStarting websocket_ws2_1  ... done\r\nStarting websocket_ws1_1  ... done\r\nAttaching to websocket_rds_1, websocket_ws2_1, websocket_ws1_1, websocket_lb_1\r\nrds_1  | 1:C 24 Sep 2021 05:42:47.109 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo\r\nrds_1  | 1:C 24 Sep 2021 05:42:47.109 # Redis version=6.2.5, bits=64, commit=00000000, modified=0, pid=1, just started\r\nrds_1  | 1:C 24 Sep 2021 05:42:47.109 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf\r\nrds_1  | 1:M 24 Sep 2021 05:42:47.110 * monotonic clock: POSIX clock_gettime\r\nrds_1  | 1:M 24 Sep 2021 05:42:47.110 * Running mode=standalone, port=6379.\r\nrds_1  | 1:M 24 Sep 2021 05:42:47.110 # Server initialized\r\nrds_1  | 1:M 24 Sep 2021 05:42:47.110 # WARNING overcommit_memory is set to 0! Background save may fail under low memory condition. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.\r\nrds_1  | 1:M 24 Sep 2021 05:42:47.111 * Loading RDB produced by version 6.2.5\r\nrds_1  | 1:M 24 Sep 2021 05:42:47.111 * RDB age 74 seconds\r\nrds_1  | 1:M 24 Sep 2021 05:42:47.111 * RDB memory usage when created 0.85 Mb\r\nrds_1  | 1:M 24 Sep 2021 05:42:47.111 * DB loaded from disk: 0.000 seconds\r\nrds_1  | 1:M 24 Sep 2021 05:42:47.111 * Ready to accept connections\r\nlb_1   | [NOTICE]   (1) : New worker #1 (9) forked\r\nws2_1  | \r\nws2_1  | > app@1.0.0 app /home/node/app\r\nws2_1  | > node index.mjs\r\nws2_1  | \r\nws1_1  | \r\nws1_1  | > app@1.0.0 app /home/node/app\r\nws1_1  | > node index.mjs\r\nws1_1  | \r\nws1_1  | My server is listening on port 8080\r\nws2_1  | My server is listening on port 8080\r\nws1_1  | Server 1111 subscribed successfully to livechat\r\nws1_1  | Server 1111 received message in channel livechat msg: a message\r\nws2_1  | Server 2222 subscribed successfully to livechat\r\nws1_1  | Server 1111 received message in channel livechat msg: a message\r\nws2_1  | Server 2222 received message in channel livechat msg: a message\n"})}),"\n",(0,s.jsx)(n.h3,{id:"testing-1",children:"Testing"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'let ws = new WebSocket("ws://192.168.2.111:80");\r\nws.onmessage = message => console.log(`Received: ${message.data}`);\r\nws.send("Hello! This chat is not secure");\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Websocket Chat Client",src:r(591337).Z+"",width:"1029",height:"186"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'let ws = new WebSocket("wss://192.168.2.111:443");\r\nws.onmessage = message => console.log(`Received: ${message.data}`);\r\nws.send("Hello! This chat is secure");\n'})}),"\n",(0,s.jsx)(n.p,{children:"But I cannot get a connection over a secure websocket:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Websocket Chat Client",src:r(755514).Z+"",width:"1019",height:"383"})}),"\n",(0,s.jsxs)(n.p,{children:["I thought this might be an issue with the self-signed certificate and found the option in Firefox ",(0,s.jsx)(n.code,{children:"about:config"})," to set ",(0,s.jsx)(n.code,{children:"network.websocket.allowInsecureFromHTTPS"})," to ",(0,s.jsx)(n.strong,{children:"true"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Websocket Chat Client",src:r(596621).Z+"",width:"1281",height:"195"})}),"\n",(0,s.jsxs)(n.p,{children:["But it still refused to connect hmmm. I checked the container everything is running. Also when I try accessing ",(0,s.jsx)(n.code,{children:"https://192.168.2.111"})," I am getting the typical warning that this site uses a self-signed cert. So HAProxy is working but I am still not getting wss connection..."]}),"\n",(0,s.jsx)(n.h3,{id:"debugging",children:"Debugging"}),"\n",(0,s.jsx)(n.p,{children:"I am going to use Wireshark to see what is happening here:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Websocket Chat Client",src:r(47744).Z+"",width:"959",height:"392"})}),"\n",(0,s.jsx)(n.p,{children:"For the non-TLS connection I can see the HTTP GET with Upgrade Header. And the acknowledgement from the server to switch to Websockets:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Websocket Chat Client",src:r(544247).Z+"",width:"963",height:"599"})}),"\n",(0,s.jsx)(n.p,{children:"I can see the message that I send and a little bit below (below the SSH packages) the response from the server:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Websocket Chat Client",src:r(327185).Z+"",width:"961",height:"765"})}),"\n",(0,s.jsxs)(n.p,{children:["But when I switch to TLS all I see is the client handshaking the server - but the 3rd step does not seem to work, the server re-transmits the acknowledgement but my client (on IP ",(0,s.jsx)(n.code,{children:"192.168.2.112"}),") replies with a ",(0,s.jsx)(n.strong,{children:"TCP ZeroWindow"})," - which afaik is a ",(0,s.jsx)(n.em,{children:'"Shut up, I am not listening"'}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Websocket Chat Client",src:r(482658).Z+"",width:"1351",height:"345"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"I think I will have to try this on an online server, with a CA Cert and rule out that my local IP + self-signed cert aren't the issue why this is blocked."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>d});var s=r(667294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,s,t=function(e,n){if(null==e)return{};var r,s,t={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=s.createContext({}),d=function(e){var n=s.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},l={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},h=s.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=d(r),g=t,b=p["".concat(c,".").concat(g)]||p[g]||l[g]||a;return r?s.createElement(b,o(o({ref:n},h),{},{components:r})):s.createElement(b,o({ref:n},h))}));h.displayName="MDXCreateElement"},26555:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/Websocket_Chat_Client_01-b840f4930ba657d9f83a35807de4d2b8.png"},620467:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/Websocket_Chat_Client_02-fa4d151636311335411d89e5674fa089.png"},591337:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/Websocket_Chat_Client_03-0a7eddbdfa7c0f01b06eb41fb706fbfe.png"},755514:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/Websocket_Chat_Client_04-0a96c7edad4d0fb5e81940b3a238c9f7.png"},596621:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/Websocket_Chat_Client_05-ffcfe4afbbfee5a1452c9ab3ce1ca6df.png"},47744:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/Websocket_Chat_Client_06-164fb47a7da8fd014110f6f5fda3c929.png"},544247:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/Websocket_Chat_Client_07-caab3886fb187b5db9fe09432f4d1f77.png"},327185:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/Websocket_Chat_Client_08-789b4ac489e96c920771cf74c4e317f4.png"},482658:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/Websocket_Chat_Client_09-bb9cb63c44c107c8d330242e3688b25c.png"},152132:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-7e32a42d5f5edfd81c766627f025fa06.jpg"}}]);