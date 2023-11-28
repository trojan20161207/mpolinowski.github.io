"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[4183],{365526:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=t(785893),o=t(603905);const i={sidebar_position:8e3,slug:"2019-09-28",title:"Adding Homekit to your Node-RED Container in Podman",authors:"mpolinowski",tags:["LINUX","Smarthome","IoT","Docker"]},r=void 0,d={id:"Automation_and_Robotics/Home_Automation/2019-09-28--node-red-homekit-containerized/index",title:"Adding Homekit to your Node-RED Container in Podman",description:"Siem Reap, Cambodia",source:"@site/docs/Automation_and_Robotics/Home_Automation/2019-09-28--node-red-homekit-containerized/index.mdx",sourceDirName:"Automation_and_Robotics/Home_Automation/2019-09-28--node-red-homekit-containerized",slug:"/Automation_and_Robotics/Home_Automation/2019-09-28--node-red-homekit-containerized/2019-09-28",permalink:"/docs/Automation_and_Robotics/Home_Automation/2019-09-28--node-red-homekit-containerized/2019-09-28",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/Home_Automation/2019-09-28--node-red-homekit-containerized/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Smarthome",permalink:"/docs/tags/smarthome"},{label:"IoT",permalink:"/docs/tags/io-t"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:8e3,frontMatter:{sidebar_position:8e3,slug:"2019-09-28",title:"Adding Homekit to your Node-RED Container in Podman",authors:"mpolinowski",tags:["LINUX","Smarthome","IoT","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Zoneminder Dockerized",permalink:"/docs/Automation_and_Robotics/Home_Automation/2019-02-09--zoneminder-in-docker/2019-02-09"},next:{title:"Shinobi Video Surveillance",permalink:"/docs/Automation_and_Robotics/Home_Automation/2019-02-08--shinobi-on-debian/2019-02-08"}},s={},c=[{value:"Bonjour",id:"bonjour",level:2},{value:"FFMPEG",id:"ffmpeg",level:2},{value:"Commit your Changes to the Container Image",id:"commit-your-changes-to-the-container-image",level:3},{value:"Adding Homekit Nodes",id:"adding-homekit-nodes",level:2},{value:"hk switch",id:"hk-switch",level:3},{value:"hk outlet",id:"hk-outlet",level:3},{value:"hk thermostat",id:"hk-thermostat",level:3},{value:"hk alarm",id:"hk-alarm",level:3},{value:"hk motion",id:"hk-motion",level:3},{value:"hk contact",id:"hk-contact",level:3},{value:"hk lock",id:"hk-lock",level:3},{value:"hk garage door",id:"hk-garage-door",level:3},{value:"hk camera",id:"hk-camera",level:3},{value:"Adding your Homekit Devices to Home Assistant",id:"adding-your-homekit-devices-to-home-assistant",level:2}];function l(e){const a={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Siem Reap, Cambodia",src:t(681084).Z+"",width:"1500",height:"714"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"#bonjour",children:"Bonjour"})}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"#ffmpeg",children:"FFMPEG"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"#commit-your-changes-to-the-container-image",children:"Commit your Changes to the Container Image"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"#adding-homekit-nodes",children:"Adding Homekit Nodes"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"#hk-switch",children:"hk switch"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"#hk-outlet",children:"hk outlet"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"#hk-thermostat",children:"hk thermostat"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"#hk-alarm",children:"hk alarm"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"#hk-motion",children:"hk motion"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"#hk-contact",children:"hk contact"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"#hk-lock",children:"hk lock"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"#hk-garage-door",children:"hk garage door"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"#hk-camera",children:"hk camera"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"#adding-your-homekit-devices-to-home-assistant",children:"Adding your Homekit Devices to Home Assistant"})}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"bonjour",children:"Bonjour"}),"\n",(0,n.jsxs)(a.p,{children:["First we need to add libraries for ",(0,n.jsx)(a.a,{href:"https://pkgs.alpinelinux.org/package/edge/main/x86/avahi-compat-libdns_sd",children:"Apple Bonjour mDNSResponder"})," support to our Node-RED Container :"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"podman exec -ti nodered /bin/bash\r\napk add avahi-compat-libdns_sd\n"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.em,{children:"On a Debian based container image use"})," ",(0,n.jsx)(a.code,{children:"apt-get install libavahi-compat-libdnssd-dev"})," ",(0,n.jsx)(a.em,{children:"instead"})]}),"\n",(0,n.jsx)(a.h2,{id:"ffmpeg",children:"FFMPEG"}),"\n",(0,n.jsx)(a.p,{children:"The camera node requires FFMPEG to be installed:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"apk add  --no-cache ffmpeg\r\nffmpeg -version\n"})}),"\n",(0,n.jsx)(a.h3,{id:"commit-your-changes-to-the-container-image",children:"Commit your Changes to the Container Image"}),"\n",(0,n.jsx)(a.p,{children:"Find out the ID of your working Node-RED container:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"podman ps -a\r\n\r\nCONTAINER ID  IMAGE                              CREATED      STATUS          NAMES\r\n5a800b30d707  localhost/nodered/node-red:latest  2 hours ago  Up 2 hours ago  nodered\n"})}),"\n",(0,n.jsx)(a.p,{children:"And commit the changes to your Node-RED image:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"podman commit 5a800b30d707 localhost/nodered/node-red:latest\r\n\r\nGetting image source signatures\r\nCopying blob 5216338b40a7 skipped: already exists\r\nCopying blob 71bfbf950c11 skipped: already exists\r\nCopying blob be137f464809 skipped: already exists\r\nCopying blob f67c97fd4436 skipped: already exists\r\nCopying blob 35460e116648 skipped: already exists\r\nCopying blob 3fd3eff2f520 skipped: already exists\r\nCopying blob 9647323e45c3 skipped: already exists\r\nCopying blob 630dbc93193b skipped: already exists\r\nCopying blob d4e3c4f2011c skipped: already exists\r\nCopying blob 15b62db68044 skipped: already exists\r\nCopying blob 70f17cb313f5 skipped: already exists\r\nCopying blob 4004cf0f3090 done\r\nCopying config b98bf74922 done\r\nWriting manifest to image destination\r\nStoring signatures\r\nb98bf74922ffaaeb1a24fba5ec27cc94dc8a82dbdea5e5b530daea0efa0b7136\n"})}),"\n",(0,n.jsx)(a.h2,{id:"adding-homekit-nodes",children:"Adding Homekit Nodes"}),"\n",(0,n.jsxs)(a.p,{children:["Install the Homekit nodes into Node-RED from the palette menu - I am choosing ",(0,n.jsx)(a.a,{href:"http://flows.nodered.org/node/node-red-contrib-homekit-preconfigured",children:"node-red-contrib-homekit-preconfigured"})," that comes with a couple of easy to use nodes for smarthome devices."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Node-RED with Homekit",src:t(61399).Z+"",width:"1145",height:"660"})}),"\n",(0,n.jsxs)(a.p,{children:["To GET an overview over all available characteristics contained within a node, simply inject the string ",(0,n.jsx)(a.code,{children:"GetCharacteristics"})," and check the debug panel:"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Node-RED with Homekit",src:t(898586).Z+"",width:"896",height:"140"})}),"\n",(0,n.jsxs)(a.p,{children:["The switch node only offers the characteristic ",(0,n.jsx)(a.code,{children:"On"})," which you can switch from ",(0,n.jsx)(a.code,{children:"0"})," to ",(0,n.jsx)(a.code,{children:"1"})," by injecting the following JSON object:"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Node-RED with Homekit",src:t(801578).Z+"",width:"1025",height:"241"})}),"\n",(0,n.jsx)(a.h3,{id:"hk-switch",children:"hk switch"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'[{"id":"dab26010.30d35","type":"hk-switch","z":"e6aaa2fa.a9d3a","pincode":"794-77-253","username":"28:E7:B0:75:80:0C","name":"TestSwitch","port":"51093","interceptget":"No","originalId":"dab26010.30d35","x":230,"y":60,"wires":[["a25b193c.e530b8"]]},{"id":"a25b193c.e530b8","type":"debug","z":"e6aaa2fa.a9d3a","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":386,"y":60,"wires":[]},{"id":"de29bd4d.a3c6b","type":"inject","z":"e6aaa2fa.a9d3a","name":"On","topic":"","payload":"{\\"On\\":1}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":85,"y":61,"wires":[["dab26010.30d35"]]},{"id":"879ccff8.550e4","type":"inject","z":"e6aaa2fa.a9d3a","name":"Off","topic":"","payload":"{\\"On\\":0}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":84,"y":101,"wires":[["dab26010.30d35"]]},{"id":"5a0ba7f0.b25be8","type":"inject","z":"e6aaa2fa.a9d3a","name":"GET","topic":"","payload":"GetCharacteristics","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":85,"y":23,"wires":[["dab26010.30d35"]]}]\n'})}),"\n",(0,n.jsx)(a.h3,{id:"hk-outlet",children:"hk outlet"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'[{"id":"5bfbcc57.ae0584","type":"inject","z":"e6aaa2fa.a9d3a","name":"GET","topic":"","payload":"GetCharacteristics","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":84,"y":160,"wires":[["53cd054d.71517c"]]},{"id":"ae543ca6.70421","type":"debug","z":"e6aaa2fa.a9d3a","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":407,"y":240,"wires":[]},{"id":"53cd054d.71517c","type":"hk-outlet","z":"e6aaa2fa.a9d3a","pincode":"559-11-933","username":"3E:37:41:D5:BF:22","name":"Power Outlet","port":"56821","interceptget":"Yes","originalId":"53cd054d.71517c","x":239,"y":240,"wires":[["ae543ca6.70421"]]},{"id":"54092f53.ccc79","type":"inject","z":"e6aaa2fa.a9d3a","name":"Off","topic":"","payload":"{\\"On\\":0}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":84,"y":239,"wires":[["53cd054d.71517c"]]},{"id":"88f4911e.d87d5","type":"inject","z":"e6aaa2fa.a9d3a","name":"On","topic":"","payload":"{\\"On\\":1}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":85,"y":199,"wires":[["53cd054d.71517c"]]},{"id":"c308fa64.b349e8","type":"inject","z":"e6aaa2fa.a9d3a","name":"Not In Use","topic":"","payload":"{\\"OutletInUse\\":0}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":91,"y":320,"wires":[["53cd054d.71517c"]]},{"id":"aae5ea4e.139478","type":"inject","z":"e6aaa2fa.a9d3a","name":"In Use","topic":"","payload":"{\\"OutletInUse\\":1}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":82,"y":280,"wires":[["53cd054d.71517c"]]}]\n'})}),"\n",(0,n.jsx)(a.h3,{id:"hk-thermostat",children:"hk thermostat"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'[{"id":"7e793a50.1a4ed4","type":"inject","z":"e6aaa2fa.a9d3a","name":"Current/Target Temp","topic":"","payload":"{\\"CurrentTemperature\\":21,\\"TargetTemperature\\":24,\\"TemperatureDisplayUnits\\":\\"\xb0C\\"}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":124,"y":413,"wires":[["970b8ade.44fb88"]]},{"id":"970b8ade.44fb88","type":"hk-thermostat","z":"e6aaa2fa.a9d3a","pincode":"577-50-506","username":"90:D1:75:A3:59:89","name":"Thermostat","port":"52378","interceptget":"Yes","supportsCooling":"No","originalId":"970b8ade.44fb88","x":327,"y":375,"wires":[["5c7fd16a.bdaaf"]]},{"id":"5c7fd16a.bdaaf","type":"debug","z":"e6aaa2fa.a9d3a","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":487,"y":375,"wires":[]},{"id":"fe72146a.0de2c8","type":"inject","z":"e6aaa2fa.a9d3a","name":"GET","topic":"","payload":"GetCharacteristics","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":84,"y":375,"wires":[["970b8ade.44fb88"]]},{"id":"e97830e2.6813a","type":"inject","z":"e6aaa2fa.a9d3a","name":"Current/TargetState","topic":"","payload":"{\\"CurrentHeatingCoolingState\\":0,\\"TargetHeatingCoolingState\\":1}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":124,"y":451,"wires":[["970b8ade.44fb88"]]}]\n'})}),"\n",(0,n.jsx)(a.h3,{id:"hk-alarm",children:"hk alarm"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'[{"id":"d1c360eb.a33f5","type":"hk-alarm","z":"e6aaa2fa.a9d3a","pincode":"771-22-989","username":"B4:B1:DB:16:E6:88","name":"Intruder Alarm","port":"49288","interceptget":"Yes","originalId":"d1c360eb.a33f5","x":324,"y":512,"wires":[["d6de3190.19907"]]},{"id":"c0e56e96.9af34","type":"inject","z":"e6aaa2fa.a9d3a","name":"GET","topic":"","payload":"GetCharacteristics","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":87,"y":512,"wires":[["d1c360eb.a33f5"]]},{"id":"d6de3190.19907","type":"debug","z":"e6aaa2fa.a9d3a","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":492,"y":512,"wires":[]},{"id":"a6a0c561.9081d8","type":"inject","z":"e6aaa2fa.a9d3a","name":"Current/Target State","topic":"","payload":"{\\"SecuritySystemTargetState\\":1,\\"SecuritySystemCurrentState\\":1}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":126,"y":551,"wires":[["d1c360eb.a33f5"]]},{"id":"3f1d4147.2185ee","type":"inject","z":"e6aaa2fa.a9d3a","name":"Tampered/Fault State","topic":"","payload":"{\\"StatusFault\\":1,\\"StatusTampered\\":1}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":135,"y":590,"wires":[["d1c360eb.a33f5"]]}]\n'})}),"\n",(0,n.jsx)(a.h3,{id:"hk-motion",children:"hk motion"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'[{"id":"bcdcd6c0.8530c8","type":"inject","z":"e6aaa2fa.a9d3a","name":"GET","topic":"","payload":"GetCharacteristics","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":85,"y":647,"wires":[["11606b68.e07905"]]},{"id":"1e440055.ba776","type":"debug","z":"e6aaa2fa.a9d3a","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":487,"y":647,"wires":[]},{"id":"11606b68.e07905","type":"hk-motion","z":"e6aaa2fa.a9d3a","pincode":"199-28-428","username":"C7:DA:E5:C2:49:71","name":"Motion Sensor","port":"57989","interceptget":"Yes","originalId":"11606b68.e07905","x":321,"y":647,"wires":[["1e440055.ba776"]]},{"id":"c7b07991.6079e8","type":"inject","z":"e6aaa2fa.a9d3a","name":"MotionDetected","topic":"","payload":"{\\"MotionDetected\\":true}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":115,"y":684,"wires":[["11606b68.e07905"]]},{"id":"c7c10f08.c9f6d","type":"inject","z":"e6aaa2fa.a9d3a","name":"Active/Charging","topic":"","payload":"{\\"StatusActive\\":0, \\"ChargingState\\": 1}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":116,"y":723,"wires":[["11606b68.e07905"]]},{"id":"d6204201.c36fe","type":"inject","z":"e6aaa2fa.a9d3a","name":"Level/LowBatt","topic":"","payload":"{\\"BatteryLevel\\":99, \\"StatusLowBattery\\": 0}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":107,"y":762,"wires":[["11606b68.e07905"]]}]\n'})}),"\n",(0,n.jsx)(a.h3,{id:"hk-contact",children:"hk contact"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'[{"id":"bf0a64d3.f53088","type":"inject","z":"e6aaa2fa.a9d3a","name":"GET","topic":"","payload":"GetCharacteristics","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":91,"y":828,"wires":[["61ceb5eb.e3ea3c"]]},{"id":"800d69f1.ee8418","type":"debug","z":"e6aaa2fa.a9d3a","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":505,"y":828,"wires":[]},{"id":"14614a57.b85056","type":"inject","z":"e6aaa2fa.a9d3a","name":"ContactSensorState","topic":"","payload":"{\\"ContactSensorState\\":1}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":131,"y":870,"wires":[["61ceb5eb.e3ea3c"]]},{"id":"61ceb5eb.e3ea3c","type":"hk-contact","z":"e6aaa2fa.a9d3a","pincode":"174-31-966","username":"1B:2B:CD:87:2B:85","name":"Backdoor","port":"47675","interceptget":"Yes","originalId":"61ceb5eb.e3ea3c","x":332,"y":828,"wires":[["800d69f1.ee8418"]]},{"id":"6a853bbd.3c79e4","type":"inject","z":"e6aaa2fa.a9d3a","name":"Tampered/Fault State","topic":"","payload":"{\\"StatusFault\\":1, \\"StatusTampered\\":1}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":140,"y":909,"wires":[["61ceb5eb.e3ea3c"]]},{"id":"ef12f77f.7f8ee8","type":"inject","z":"e6aaa2fa.a9d3a","name":"Tampered/Fault State","topic":"","payload":"{\\"BatteryLevel\\":99, \\"ChargingState\\":0, \\"StatusLowBattery\\":1}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":140,"y":948,"wires":[["61ceb5eb.e3ea3c"]]}]\n'})}),"\n",(0,n.jsx)(a.h3,{id:"hk-lock",children:"hk lock"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'[{"id":"853f8be1.9b5d98","type":"inject","z":"e6aaa2fa.a9d3a","name":"GET","topic":"","payload":"GetCharacteristics","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":90,"y":1018,"wires":[["f2c56a8d.3f6638"]]},{"id":"74c13b20.ec2da4","type":"debug","z":"e6aaa2fa.a9d3a","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":419,"y":1018,"wires":[]},{"id":"c09d1e63.070f6","type":"inject","z":"e6aaa2fa.a9d3a","name":"Target/CurrentState","topic":"","payload":"{\\"LockTargetState\\":0, \\"LockCurrentState\\":1}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":130,"y":1060,"wires":[["f2c56a8d.3f6638"]]},{"id":"f2c56a8d.3f6638","type":"hk-lock","z":"e6aaa2fa.a9d3a","pincode":"277-44-193","username":"33:66:1F:D4:67:3D","name":"Door Lock","port":"52873","interceptget":"Yes","originalId":"f2c56a8d.3f6638","x":250,"y":1018,"wires":[["74c13b20.ec2da4"]]}]\n'})}),"\n",(0,n.jsx)(a.h3,{id:"hk-garage-door",children:"hk garage door"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'[{"id":"43593ce2.bf48f4","type":"inject","z":"e6aaa2fa.a9d3a","name":"GET","topic":"","payload":"GetCharacteristics","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":90,"y":1140,"wires":[["a543a389.09561"]]},{"id":"7d018199.be1cd","type":"debug","z":"e6aaa2fa.a9d3a","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":492,"y":1140,"wires":[]},{"id":"1c155e45.7fe2b2","type":"inject","z":"e6aaa2fa.a9d3a","name":"Current/TargetState","topic":"","payload":"{\\"CurrentDoorState\\":1, \\"TargetDoorState\\":0}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":130,"y":1220,"wires":[["a543a389.09561"]]},{"id":"a543a389.09561","type":"hk-garage-door","z":"e6aaa2fa.a9d3a","pincode":"287-67-232","username":"47:4D:3C:E5:92:9D","name":"Garage Door","port":"44037","interceptget":"Yes","originalId":"a543a389.09561","x":331,"y":1140,"wires":[["7d018199.be1cd"]]},{"id":"8a04f667.1aa958","type":"inject","z":"e6aaa2fa.a9d3a","name":"LockCurrent/TargetState","topic":"","payload":"{\\"LockCurrentState\\":1, \\"LockTargetState\\":1}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":150,"y":1260,"wires":[["a543a389.09561"]]},{"id":"34bb2003.96a8b","type":"inject","z":"e6aaa2fa.a9d3a","name":"Obstruction","topic":"","payload":"{\\"ObstructionDetected\\": true}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":110,"y":1180,"wires":[["a543a389.09561"]]}]\n'})}),"\n",(0,n.jsx)(a.h3,{id:"hk-camera",children:"hk camera"}),"\n",(0,n.jsx)(a.p,{children:"The use of the camera node will require FFMPEG to be installed in its default location. (for *nix that is the bin directory. For windows users, ensure the FFMPEG directory is setup in the 'PATH' environment variable)"}),"\n",(0,n.jsx)(a.p,{children:"Configure the accessory details below."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Name"})," : The name as it appears in Homeapp/Homekit based applications."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Pincode"})," : The required code to enter when enrolling the accessory in Homekit."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Username"})," : An identifier for your device, it must follow the mac address format (00:00:00:00:00:00)."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Port"})," : The network port your accessory will listen on."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Max Streams"})," : The max number of live streams that can occur."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Max Width/Heigh"})," : The maximum size of the video stream (refer to your IP camera settings)."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Max FPS"})," : Max framerate of the live stream (refer to your IP camera settings)."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Source Stream"})," : The network stream used to capture live and still footage, still footage is derived from a 1 second frame."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Encoder"})," : The ffmpeg video encoder to use, when streaming footage."]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Port, Pincode & Username should be unique across your devices."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Node-RED with Homekit",src:t(167084).Z+"",width:"781",height:"476"})}),"\n",(0,n.jsx)(a.h2,{id:"adding-your-homekit-devices-to-home-assistant",children:"Adding your Homekit Devices to Home Assistant"}),"\n",(0,n.jsxs)(a.p,{children:["In Home Assistant head over to the ",(0,n.jsx)(a.strong,{children:"Configuration"})," / ",(0,n.jsx)(a.strong,{children:"Integrations"})," tab. All your devices should already be listed there:"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Node-RED with Homekit",src:t(421531).Z+"",width:"837",height:"493"})}),"\n",(0,n.jsx)(a.p,{children:"Click on configure and add the corresponding Pin Code (as assigned in Node-RED)."})]})}function p(e={}){const{wrapper:a}={...(0,o.ah)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},603905:(e,a,t)=>{t.d(a,{ah:()=>c});var n=t(667294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},l={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),h=c(t),m=o,y=h["".concat(s,".").concat(m)]||h[m]||l[m]||i;return t?n.createElement(y,r(r({ref:a},p),{},{components:t})):n.createElement(y,r({ref:a},p))}));p.displayName="MDXCreateElement"},61399:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Node-RED_with_Homekit_01-988b2c8a6109dbc8198595d0a8c47f7b.png"},898586:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Node-RED_with_Homekit_02-91893ddef5749d902d34dd9c1b2297dc.png"},801578:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Node-RED_with_Homekit_03-ce4c78f0e54226f0f137b64edf479ada.png"},167084:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Node-RED_with_Homekit_11-3a0af70282dc98e35c2be4a81284523c.png"},421531:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Node-RED_with_Homekit_12-c4c982e6c92fbddde9f319844297c8e4.png"},681084:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-45072e3ae99a557a8ae175d9c1dfd57d.jpg"}}]);