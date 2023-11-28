"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[93131],{281988:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=s(785893),a=s(603905);const i={sidebar_position:9020,slug:"2019-08-11",title:"MQTT Networks with Home Assistant",authors:"mpolinowski",tags:["MQTT","Smarthome","IoT"]},r=void 0,o={id:"Automation_and_Robotics/MQTT/2019-08-11--mqtt-home-assistant/index",title:"MQTT Networks with Home Assistant",description:"Taipa, Macau",source:"@site/docs/Automation_and_Robotics/MQTT/2019-08-11--mqtt-home-assistant/index.mdx",sourceDirName:"Automation_and_Robotics/MQTT/2019-08-11--mqtt-home-assistant",slug:"/Automation_and_Robotics/MQTT/2019-08-11--mqtt-home-assistant/2019-08-11",permalink:"/docs/Automation_and_Robotics/MQTT/2019-08-11--mqtt-home-assistant/2019-08-11",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/MQTT/2019-08-11--mqtt-home-assistant/index.mdx",tags:[{label:"MQTT",permalink:"/docs/tags/mqtt"},{label:"Smarthome",permalink:"/docs/tags/smarthome"},{label:"IoT",permalink:"/docs/tags/io-t"}],version:"current",sidebarPosition:9020,frontMatter:{sidebar_position:9020,slug:"2019-08-11",title:"MQTT Networks with Home Assistant",authors:"mpolinowski",tags:["MQTT","Smarthome","IoT"]},sidebar:"tutorialSidebar",previous:{title:"Go Paho MQTT Client",permalink:"/docs/Automation_and_Robotics/MQTT/2021-09-12--golang-paho-mqtt/2021-09-12"},next:{title:"MQTT Networks with Athom Homey",permalink:"/docs/Automation_and_Robotics/MQTT/2019-08-10--mqtt-athom-homey/2019-08-10"}},c={},d=[{value:"Home Assistant Installation on a Raspberry Pi",id:"home-assistant-installation-on-a-raspberry-pi",level:2},{value:"MQTT Binding",id:"mqtt-binding",level:3},{value:"Testing our MQTT Service",id:"testing-our-mqtt-service",level:3},{value:"Adding a UI Switch",id:"adding-a-ui-switch",level:2},{value:"Switch Component",id:"switch-component",level:3},{value:"Configuring the User Interface",id:"configuring-the-user-interface",level:3},{value:"Adding your Cameras Live Video",id:"adding-your-cameras-live-video",level:2},{value:"Adding a UI Push Button",id:"adding-a-ui-push-button",level:2},{value:"Automations",id:"automations",level:2},{value:"Testing our Service",id:"testing-our-service",level:3},{value:"Day/Night Switching Detection Areas",id:"daynight-switching-detection-areas",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Taipa, Macau",src:s(676515).Z+"",width:"1500",height:"627"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#home-assistant-installation-on-a-raspberry-pi",children:"Home Assistant Installation on a Raspberry Pi"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#mqtt-binding",children:"MQTT Binding"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#testing-our-mqtt-service",children:"Testing our MQTT Service"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#adding-a-ui-switch",children:"Adding a UI Switch"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#switch-component",children:"Switch Component"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#configuring-the-user-interface",children:"Configuring the User Interface"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#adding-your-cameras-live-video",children:"Adding your Cameras Live Video"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#adding-a-ui-push-button",children:"Adding a UI Push Button"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#automations",children:"Automations"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#testing-our-service",children:"Testing our Service"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#daynight-switching-detection-areas",children:"Day/Night Switching Detection Areas"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#using-home-assistant-as-the-alarmserver-for-your-camera",children:"Using Home Assistant as the Alarmserver for your Camera"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"home-assistant-installation-on-a-raspberry-pi",children:"Home Assistant Installation on a Raspberry Pi"}),"\n",(0,n.jsxs)(t.p,{children:["Following the ",(0,n.jsx)(t.a,{href:"https://www.home-assistant.io/docs/installation/raspberry-pi/",children:"installation instruction"})," and the ",(0,n.jsx)(t.a,{href:"https://www.home-assistant.io/docs/autostart/systemd/",children:"SystemD Service Setup"})," it turned out to be a breeze to install HASS on our Raspberry Pi 3 with ",(0,n.jsx)(t.a,{href:"https://www.raspberrypi.org/downloads/raspbian/",children:"Raspbian Buster"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"mqtt-binding",children:"MQTT Binding"}),"\n",(0,n.jsx)(t.p,{children:"We noticed that now you are able to add an MQTT broker already during the initial setup. There is no longer the need for doing this inside the configuration YAML files:"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(833281).Z+"",width:"1040",height:"521"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["When you access the UI for the first time click on adding an extension and choose MQTT from the list. Now type in your INSTAR IP camera IP address (e.g. ",(0,n.jsx)(t.code,{children:"192.168.2.165"}),") followed by the port ",(0,n.jsx)(t.code,{children:"1883"})," and your INSTAR MQTT Broker login."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(500497).Z+"",width:"1043",height:"297"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["If you already installed Home Assistant, go to ",(0,n.jsx)(t.strong,{children:"Settings"})," and ",(0,n.jsx)(t.strong,{children:"Integrations"})," and select to add the ",(0,n.jsx)(t.em,{children:"MQTT Broker"})," there:"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(16489).Z+"",width:"866",height:"701"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(181128).Z+"",width:"879",height:"263"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"testing-our-mqtt-service",children:"Testing our MQTT Service"}),"\n",(0,n.jsxs)(t.p,{children:["To test if everything is working, we need to go to ",(0,n.jsx)(t.strong,{children:"Developer Tools"})," and ",(0,n.jsx)(t.strong,{children:"MQTT"}),". Here we can setup a subscription for the topic (",(0,n.jsx)(t.strong,{children:"Listen to a topic"}),") ",(0,n.jsx)(t.code,{children:"instar/000389888811/status/alarm/area1/enable"})," (please replace the ",(0,n.jsx)(t.strong,{children:"000389888811"})," part with the MAC address of your camera)."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(415023).Z+"",width:"862",height:"808"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["In the screenshot you can see that we first received an update that the value for this topic was 0: ",(0,n.jsx)(t.code,{children:'{"val":"0"}'}),". That means that the alarm detection area 1 was deactivated. Now by publishing the value ",(0,n.jsx)(t.code,{children:'{"val":"1"}'})," on the topic ",(0,n.jsx)(t.code,{children:"instar/000389888811/alarm/area1/enable"})," the area gets activated. You can verify this inside your cameras web user interface. You can also deactivate the area again inside the WebUI and see that the MQTT topic switches back to ",(0,n.jsx)(t.code,{children:'{"val":"0"}'}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"adding-a-ui-switch",children:"Adding a UI Switch"}),"\n",(0,n.jsxs)(t.p,{children:["We now know that we are able to subscribe to MQTT status topics on our camera and to update these topics via the corresponding command topic. All we need to do now is to add a ",(0,n.jsx)(t.strong,{children:"Switch Component"})," that does this for us and can be assigned to our Home Assistant dashboard."]}),"\n",(0,n.jsx)(t.h3,{id:"switch-component",children:"Switch Component"}),"\n",(0,n.jsxs)(t.p,{children:["To keep our main ",(0,n.jsx)(t.code,{children:"configuration.yaml"})," uncluttered we will create a separate file ",(0,n.jsx)(t.code,{children:"switches.yaml"})," that contains all our MQTT related switches and import this into the configuration by adding the following line: ",(0,n.jsx)(t.code,{children:"switch: !include switches.yaml"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"We can now add our first switch components - e.g. to activate and deactivate the motion detection areas:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"- platform: mqtt\r\n  name: 'Alarm Area 1'\r\n  state_topic: 'instar/000389888811/status/alarm/area1/enable'\r\n  command_topic: 'instar/000389888811/alarm/area1/enable'\r\n  qos: 1\r\n  payload_on: '{\"val\":\"1\"}'\r\n  payload_off: '{\"val\":\"0\"}'\r\n  optimistic: false\r\n  retain: false\r\n\r\n- platform: mqtt\r\n  name: 'Alarm Area 2'\r\n  state_topic: 'instar/000389888811/status/alarm/area2/enable'\r\n  command_topic: 'instar/000389888811/alarm/area2/enable'\r\n  qos: 1\r\n  payload_on: '{\"val\":\"1\"}'\r\n  payload_off: '{\"val\":\"0\"}'\r\n  optimistic: false\r\n  retain: false\r\n\r\n- platform: mqtt\r\n  name: 'Alarm Area 3'\r\n  state_topic: 'instar/000389888811/status/alarm/area3/enable'\r\n  command_topic: 'instar/000389888811/alarm/area3/enable'\r\n  qos: 1\r\n  payload_on: '{\"val\":\"1\"}'\r\n  payload_off: '{\"val\":\"0\"}'\r\n  optimistic: false\r\n  retain: false\r\n\r\n- platform: mqtt\r\n  name: 'Alarm Area 4'\r\n  state_topic: 'instar/000389888811/status/alarm/area4/enable'\r\n  command_topic: 'instar/000389888811/alarm/area4/enable'\r\n  qos: 1\r\n  payload_on: '{\"val\":\"1\"}'\r\n  payload_off: '{\"val\":\"0\"}'\r\n  optimistic: false\r\n  retain: false\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For each component - that we assign the switch template to inside our main configuration - we have to define the platform we want to use it on. Now this is the ",(0,n.jsx)(t.strong,{children:"mqtt"})," platform that we added to Home Assistant."]}),"\n",(0,n.jsxs)(t.p,{children:["We have both a ",(0,n.jsx)(t.strong,{children:"state_topic"})," and a ",(0,n.jsx)(t.strong,{children:"command_topic"}),". The first one takes the status topic and defines the state our switch is in. The command topic is the one that we use to update the state and trigger our camera to change it's corresponding internal state e.g. switch our alarm area on or off. Here you can use any of the MQTT Topics that belong to functions that are supported by your camera model."]}),"\n",(0,n.jsxs)(t.p,{children:["The message payload is in this case either ",(0,n.jsx)(t.code,{children:'{"val":"1"}'}),", to switch the area on, or  ",(0,n.jsx)(t.code,{children:'{"val":"0"}'})," to deactivate the area. Those are the ",(0,n.jsx)(t.strong,{children:"payload_on"})," and ",(0,n.jsx)(t.strong,{children:"value_payload"})," for our switch. Note that you have to surround each one of those with ",(0,n.jsx)(t.em,{children:"single-tick quotation marks"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Now we are also able to set some MQTT magic. The first one is ",(0,n.jsx)(t.code,{children:"qos"})," and stands for ",(0,n.jsx)(t.strong,{children:"Quality of Service"})," - where ",(0,n.jsx)(t.code,{children:"0"})," stands for ",(0,n.jsx)(t.em,{children:"fire-and-forget"})," (your client might loose an status update if it does not receive the message), ",(0,n.jsx)(t.code,{children:"1"})," means that it is verified that a status update is received and ",(0,n.jsx)(t.code,{children:"2"})," is not relevant for us here (with a qos value of 2 it is made sure that every update is received but only received once - which is important e.g. when you are recording time series from measuring sensors). ",(0,n.jsx)(t.code,{children:"optimistic"})," has to be used when your device does not have a separate ",(0,n.jsx)(t.code,{children:"state_topic"})," - here you have to assume that the command you just sent worked and the state was updated. With ",(0,n.jsx)(t.code,{children:"retain"})," you can hold on to the value of a topic even if the client or server cannot be reached. But we don't need this for our setup."]}),"\n",(0,n.jsx)(t.h3,{id:"configuring-the-user-interface",children:"Configuring the User Interface"}),"\n",(0,n.jsxs)(t.p,{children:["Now we need to add a new ",(0,n.jsx)(t.strong,{children:"View"})," for our camera by switching the UI into the ",(0,n.jsx)(t.em,{children:"configuration mode"}),":"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(381216).Z+"",width:"868",height:"208"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["Now click on the ",(0,n.jsx)(t.strong,{children:"+"})," as highlighted in the screenshot below and add a view for your camera:"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(703314).Z+"",width:"800",height:"663"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["Switch to the new view and click on the big ",(0,n.jsx)(t.strong,{children:"+"})," button to add a card that can contain our MQTT switches:"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(790105).Z+"",width:"805",height:"193"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["Choose an ",(0,n.jsx)(t.strong,{children:"Entity Card"})," and select all the switches we just added to our configuration. They should show up automatically - if not, try reloading Home Assistant:"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(808353).Z+"",width:"868",height:"645"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(123254).Z+"",width:"867",height:"579"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Quit the configuration mode to get back to the regular UI and you should be able to see your new card with all 4 alarm area switches. Try switching your alarm areas from your cameras Web User Interface - once you apply your settings there all switched inside Home Assistant should react to the state change immediately."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(806746).Z+"",width:"857",height:"916"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"adding-your-cameras-live-video",children:"Adding your Cameras Live Video"}),"\n",(0,n.jsx)(t.h2,{id:"adding-a-ui-push-button",children:"Adding a UI Push Button"}),"\n",(0,n.jsx)(t.p,{children:"Some of our camera's functions don't have 2 states (on/off) - we just need a button that we can push and it should jump back to idle right after that. Examples are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Manual Alarm Trigger: ",(0,n.jsx)(t.code,{children:"alarm/pushalarm"})]}),"\n",(0,n.jsxs)(t.li,{children:["Go to Preset Position: ",(0,n.jsx)(t.code,{children:"features/ptz/preset"})]}),"\n",(0,n.jsxs)(t.li,{children:["Move Up/Down/Left/Right: ",(0,n.jsx)(t.code,{children:"features/ptz/move"}),"  etc."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["This can be done in Home Assistant with a script. Make sure that your ",(0,n.jsx)(t.code,{children:"scripts.yaml"})," file exist inside the ",(0,n.jsx)(t.strong,{children:".homeassistant"})," folder and is linked into your main ",(0,n.jsx)(t.code,{children:"configuration.yaml"})," - ",(0,n.jsx)(t.code,{children:"script: !include scripts.yaml"}),". Then open the scripts file and add the following lines:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'9010_pushalarm:\r\n  sequence:\r\n    - service: mqtt.publish\r\n      data_template:\r\n        topic: instar/000389888811/alarm/pushalarm\r\n        payload: \'{"val":"1"}\'\r\n        qos: 1\r\n\r\n9010_gotopos1:\r\n  sequence:\r\n    - service: mqtt.publish\r\n      data_template:\r\n        topic: instar/000389888811/features/ptz/preset\r\n        payload: \'{"val":"0"}\'\r\n        qos: 1\r\n\r\n9010_moveright:\r\n  sequence:\r\n    - service: mqtt.publish\r\n      data_template:\r\n        topic: instar/000389888811/features/ptz/move\r\n        payload: \'{"val":"right"}\'\r\n        qos: 1\r\n\r\n9010_movestop:\r\n  sequence:\r\n    - service: mqtt.publish\r\n      data_template:\r\n        topic: instar/000389888811/features/ptz/move\r\n        payload: \'{"val":"stop"}\'\r\n        qos: 1\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Choose a name for each script that helps you identify which camera you are addressing, e.g. ",(0,n.jsx)(t.code,{children:"9010_pushalarm"})," and choose the MQTT topics that you want to add in form of buttons to your Home Assistant UI. Note that the ",(0,n.jsx)(t.strong,{children:"move command"})," will move your camera's PTZ head continuously until you hit the ",(0,n.jsx)(t.strong,{children:"stop command"})," - don't forget to add the stop button :)"]}),"\n",(0,n.jsxs)(t.p,{children:["Just like with our ",(0,n.jsx)(t.a,{href:"#configuring-the-user-interface",children:"switches earlier"})," we now have to activate the configuration mode inside the Home Assistant Lovelace UI and click on the ",(0,n.jsx)(t.strong,{children:"+"})," button to add a new ",(0,n.jsx)(t.strong,{children:"Entity"}),":"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(365833).Z+"",width:"1066",height:"384"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(706761).Z+"",width:"1069",height:"378"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["Now select the script you want to assign to this button from the ",(0,n.jsx)(t.strong,{children:"Entity List"})," and name the card. Unfortunately, the UI does not yet give us the option to add a ",(0,n.jsx)(t.code,{children:"name"})," and icon to the selected script. But if you click on the two wavy brackets - highlighted here (red arrow):"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(303816).Z+"",width:"1050",height:"615"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"You can add them manually into the entity definition:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"entities:\r\n  - entity: script.9010_pushalarm\r\n    icon: 'mdi:bell'\r\n    name: IN-9010 FHD\r\nshow_header_toggle: false\r\ntitle: Trigger Alarm\r\ntype: entities\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(85375).Z+"",width:"1048",height:"556"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["You can choose your icon from the ",(0,n.jsx)(t.a,{href:"https://cdn.materialdesignicons.com/4.5.95/",children:"Material Design Icons"}),". Note that the button we chose here - ",(0,n.jsx)(t.code,{children:"icon: 'mdi:bell'"})," - is called ",(0,n.jsx)(t.code,{children:"mdi-bell"})," in the Material Design documentation and this name has to be changed accordingly for Home Assistant to recognize the icon."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(126020).Z+"",width:"1051",height:"698"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Here we added all Pan-Tilt, Preset Position and the Manual Alarm Trigger command to the Lovelace UI."}),"\n",(0,n.jsx)(t.h2,{id:"automations",children:"Automations"}),"\n",(0,n.jsxs)(t.p,{children:["Now that we are able to manually trigger functions on our camera we now want to find a way to automate those processes through Home Assistant. To do this we will first add a prototype service to our ",(0,n.jsx)(t.code,{children:"scripts.yaml"})," file. This service should be able to receive a ",(0,n.jsx)(t.strong,{children:"MQTT Topic"})," (",(0,n.jsx)(t.code,{children:"target"}),") and ",(0,n.jsx)(t.strong,{children:"MQTT Payload"})," (",(0,n.jsx)(t.code,{children:"message"}),") from an automation in the ",(0,n.jsx)(t.code,{children:"automations.yaml"})," file. This can be done by adding the following lines into the script file:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"scripts.yaml"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'# MQTT Publish Service\r\n\r\nsend_mqtt_command:\r\n  sequence:\r\n    - service: mqtt.publish\r\n      data_template:\r\n        topic: "{{ target }}"\r\n        payload: "{{ message }}"\r\n        qos: 1\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Now make sure that the ",(0,n.jsx)(t.code,{children:"automations.yaml"})," file exists in the ",(0,n.jsx)(t.em,{children:".homeassistant"})," directory and is linked into the main ",(0,n.jsx)(t.code,{children:"configuration.yaml"}),": ",(0,n.jsx)(t.code,{children:"automation: !include automations.yaml"}),". Then switch to the Lovelace UI, open the ",(0,n.jsx)(t.strong,{children:"Configuration Panel"})," and select ",(0,n.jsx)(t.strong,{children:"Automation"}),":"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(158247).Z+"",width:"976",height:"707"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"testing-our-service",children:"Testing our Service"}),"\n",(0,n.jsxs)(t.p,{children:["Click on the red ",(0,n.jsx)(t.strong,{children:"+"})," button to add a new automation. Fill out the form as follows:"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(482847).Z+"",width:"971",height:"705"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(78800).Z+"",width:"974",height:"676"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["To test our automation we want to set up a MQTT topic ",(0,n.jsx)(t.code,{children:"hass/automation/test"})," that, when it receives a payload of ",(0,n.jsx)(t.code,{children:'{"val":"1"}'})," will call our prototype MQTT service we created above and passes down a ",(0,n.jsx)(t.strong,{children:"message"})," and a ",(0,n.jsx)(t.strong,{children:"topic"})," to it:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\r\n  "message": "{\\"val\\":\\"1\\"}",\r\n  "target": "instar/000389888811/features/ptz/preset"\r\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Note that to be able to send a JSON formated payload inside this JSON expression, we have to escape the quotation marks with a backslash."}),"\n",(0,n.jsxs)(t.p,{children:["By sending the payload ",(0,n.jsx)(t.code,{children:"1"})," to ",(0,n.jsx)(t.code,{children:"/features/ptz/preset"})," we have our camera moving to ",(0,n.jsx)(t.strong,{children:"preset position 2"}),". We can test this using ",(0,n.jsx)(t.strong,{children:"MQTT.fx"}),":"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(968282).Z+"",width:"987",height:"244"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Clicking on publish will trigger our automation, that then triggers our service telling our camera to move to preset 2."}),"\n",(0,n.jsxs)(t.p,{children:["When you check the ",(0,n.jsx)(t.code,{children:"automations.yaml"})," file inside the ",(0,n.jsx)(t.code,{children:".homeassistant"})," directory, you will see that Home Assistant created the automation for us as follows:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"- id: '1571128164029'\r\n  alias: TEST MQTT Automation\r\n  trigger:\r\n  - payload: '{\"val\":\"1\"}'\r\n    platform: mqtt\r\n    topic: hass/automation/test\r\n  condition: []\r\n  action:\r\n  - alias: ''\r\n    data:\r\n      message: '{\"val\":\"1\"}'\r\n      target: instar/000389888811/features/ptz/preset\r\n    service: script.send_mqtt_command\n"})}),"\n",(0,n.jsx)(t.h3,{id:"daynight-switching-detection-areas",children:"Day/Night Switching Detection Areas"}),"\n",(0,n.jsx)(t.p,{children:"Now that we have proven that our concept is sound, we can continue and build our first meaningful automation. For this we can, again, use our prototype MQTT service and have an automation - triggered by a schedule or timed events like sunrise/sunset - pass it the necessary MQTT topics and payloads to switch our detection areas on or off:"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(451801).Z+"",width:"969",height:"693"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with your INSTAR IP Camera",src:s(151746).Z+"",width:"969",height:"726"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["This is the ",(0,n.jsx)(t.strong,{children:"Day Automation"})," that is triggered by the ",(0,n.jsx)(t.strong,{children:"Sunrise"})," and will update the MQTT topics to activate Alarm Detection Area 1 & 2, while deactivating Areas 3 & 4. Note that this automation combines 4 actions that all will be let loose on our MQTT Publishing Service every morning by sunrise."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Night Automation"})," is the opposite - triggered by ",(0,n.jsx)(t.strong,{children:"Sunset"})," and deactivates Areas 1 & 2, while activating Areas 3 & 4."]}),"\n",(0,n.jsxs)(t.p,{children:["A quick look into the ",(0,n.jsx)(t.code,{children:"automations.yaml"})," file shows us the two automations that were created through the Lovelace UI:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'- id: \'1571131738957\'\r\n  alias: Switch to Night Areas\r\n  trigger:\r\n  - event: sunset\r\n    platform: sun\r\n  condition: []\r\n  action:\r\n  - data:\r\n      message: \'{"val":"0"}\'\r\n      target: instar/000389888811/alarm/area1/enable\r\n    service: script.send_mqtt_command\r\n  - data:\r\n      message: \'{"val":"0"}\'\r\n      target: instar/000389888811/alarm/area2/enable\r\n    service: script.send_mqtt_command\r\n  - data:\r\n      message: \'{"val":"1"}\'\r\n      target: instar/000389888811/alarm/area3/enable\r\n    service: script.send_mqtt_command\r\n  - data:\r\n      message: \'{"val":"1"}\'\r\n      target: instar/000389888811/alarm/area4/enable\r\n    service: script.send_mqtt_command\r\n\r\n    \r\n- id: \'1571131880630\'\r\n  alias: Switch to Day Areas\r\n  trigger:\r\n  - event: sunrise\r\n    platform: sun\r\n  condition: []\r\n  action:\r\n  - data:\r\n      message: \'{"val":"1"}\'\r\n      target: instar/000389888811/alarm/area1/enable\r\n    service: script.send_mqtt_command\r\n  - data:\r\n      message: \'{"val":"1"}\'\r\n      target: instar/000389888811/alarm/area2/enable\r\n    service: script.send_mqtt_command\r\n  - data:\r\n      message: \'{"val":"0"}\'\r\n      target: instar/000389888811/alarm/area3/enable\r\n    service: script.send_mqtt_command\r\n  - data:\r\n      message: \'{"val":"0"}\'\r\n      target: instar/000389888811/alarm/area4/enable\r\n    service: script.send_mqtt_command\n'})}),"\n",(0,n.jsx)(t.p,{children:"You can now wait for the next Sunrise or Sunset to see if your automation is working (or just use the Home Assistant Developer Tools inside the Lovelace UI to trigger this event)."})]})}function l(e={}){const{wrapper:t}={...(0,a.ah)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},603905:(e,t,s)=>{s.d(t,{ah:()=>d});var n=s(667294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=d(s),u=a,p=m["".concat(c,".").concat(u)]||m[u]||h[u]||i;return s?n.createElement(p,r(r({ref:t},l),{},{components:s})):n.createElement(p,r({ref:t},l))}));l.displayName="MDXCreateElement"},833281:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_01-dfbb2b0cbf4e985d385da05ae4bab355.png"},500497:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_02-6537cced391fe7aa017ca8e8083fa5f4.png"},16489:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_03-9c82e0326ba8118e3458ef051d92f874.png"},181128:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_04-127766b64617aadcb619d8fe953fd541.png"},415023:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_05-5b1a5cba5cf6c80396b04b12fa44e8f7.png"},381216:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_06-cbed47f5c2bf352f8925308833c16e7a.png"},703314:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_07-f4ce0b9bfeec5c68b7f1fc6ade9de4fa.png"},790105:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_08-5b41e6473b8ee767e5d424cb1a48a773.png"},808353:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_09-15563dd399ba12509562f5927eed3067.png"},123254:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_10-8663c7ab0d3fe11f2acf1541e5b10846.png"},806746:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_12-5ea816b3a5d2fff377235eb8d8b52313.gif"},365833:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_13-c1ad54af96eaec2e4797bb646e9e0d60.png"},706761:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_14-b1a5e0e5edab9dddcdf97e6931def111.png"},303816:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_15-23c43a73b35b278dc9f57c4831e96614.png"},85375:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_16-cfe71898ee0022977e00c9e2d52f518e.png"},126020:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_17-1f370422b381c96fbbe604baf55a0962.png"},158247:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_18-3553fd9f6cba2ee267efbf243db67424.png"},482847:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_19-8c4258738e4e4fa4bb68cdee3223f5c3.png"},78800:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_20-a2ed4b96133aebb3944b6cbc824e477e.png"},968282:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_21-a5ff882a1cbfd697cac80fc51626ba40.png"},451801:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_22-798ec1d55a99acef87cc04753557b894.png"},151746:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Home_Assistant_23-e980211d629c3a7b56b7bd4198133674.png"},676515:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-f5314d8e960ad06f31d574bb958b70cf.jpg"}}]);