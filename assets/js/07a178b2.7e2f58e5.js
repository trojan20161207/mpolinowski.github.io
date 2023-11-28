"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[46044],{690207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=n(785893),o=n(603905);const a={sidebar_position:7020,slug:"2022-07-12",title:"Home Assistant - Python Scripts as Service",authors:"mpolinowski",tags:["IoT"],image:"https://mpolinowski.github.io/img/search/mqtt.png",description:"The discovery of MQTT devices will enable one to use MQTT devices with only minimal configuration effort on the side of Home Assistant. Two parts are required on the device side - The configuration topic which contains the necessary device type and unique identifier, and the remaining device configuration without the device type."},s=void 0,r={id:"Automation_and_Robotics/Home_Automation/2022-07-12-home-assistant-mqtt-python/index",title:"Home Assistant - Python Scripts as Service",description:"The discovery of MQTT devices will enable one to use MQTT devices with only minimal configuration effort on the side of Home Assistant. Two parts are required on the device side - The configuration topic which contains the necessary device type and unique identifier, and the remaining device configuration without the device type.",source:"@site/docs/Automation_and_Robotics/Home_Automation/2022-07-12-home-assistant-mqtt-python/index.md",sourceDirName:"Automation_and_Robotics/Home_Automation/2022-07-12-home-assistant-mqtt-python",slug:"/Automation_and_Robotics/Home_Automation/2022-07-12-home-assistant-mqtt-python/2022-07-12",permalink:"/docs/Automation_and_Robotics/Home_Automation/2022-07-12-home-assistant-mqtt-python/2022-07-12",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/Home_Automation/2022-07-12-home-assistant-mqtt-python/index.md",tags:[{label:"IoT",permalink:"/docs/tags/io-t"}],version:"current",sidebarPosition:7020,frontMatter:{sidebar_position:7020,slug:"2022-07-12",title:"Home Assistant - Python Scripts as Service",authors:"mpolinowski",tags:["IoT"],image:"https://mpolinowski.github.io/img/search/mqtt.png",description:"The discovery of MQTT devices will enable one to use MQTT devices with only minimal configuration effort on the side of Home Assistant. Two parts are required on the device side - The configuration topic which contains the necessary device type and unique identifier, and the remaining device configuration without the device type."},sidebar:"tutorialSidebar",previous:{title:"Home Assistant - MQTT Auto-Discovery :: Automation",permalink:"/docs/Automation_and_Robotics/Home_Automation/2022-07-11-home-assistant-mqtt-autodiscovery-part-ii/2022-07-11"},next:{title:"OpenHAB 3 INSTAR Camera Binding",permalink:"/docs/Automation_and_Robotics/Home_Automation/2020-12-03--openhab3-camera-binding/2020-12-03"}},c={},l=[{value:"Using Python Scripts in Home Assistant",id:"using-python-scripts-in-home-assistant",level:2},{value:"Data Preparation",id:"data-preparation",level:3},{value:"Paho MQTT Client",id:"paho-mqtt-client",level:3},{value:"Python Scripts as a Service in Home Assistant",id:"python-scripts-as-a-service-in-home-assistant",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Guangzhou, China",src:n(184877).Z+"",width:"1500",height:"516"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#using-python-scripts-in-home-assistant",children:"Using Python Scripts in Home Assistant"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#data-preparation",children:"Data Preparation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#paho-mqtt-client",children:"Paho MQTT Client"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#python-scripts-as-a-service-in-home-assistant",children:"Python Scripts as a Service in Home Assistant"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://www.home-assistant.io/docs/mqtt/discovery/",children:"discovery of MQTT devices"})," will enable one to use MQTT devices with only minimal configuration effort on the side of Home Assistant. Two parts are required on the device side: The configuration topic which contains the necessary device type and unique identifier, and the remaining device configuration without the device type."]}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.a,{href:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-07-10-home-assistant-mqtt-autodiscovery-part-i/2022-07-10",children:"Part I"}),' I looked into the configuration API and described the topic payloads needed to have Home Assistant add your camera as a new device when you connect it to the MQTT broker. Now I want to make sure that Home Assistant does not forget the device configuration if my broker "looses" those configuration topics.']}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.a,{href:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-07-11-home-assistant-mqtt-autodiscovery-part-ii/2022-07-11",children:"Part II"})," I looked into using an automation that is triggered when my camera comes ",(0,i.jsx)(t.code,{children:"alive"})," and feeds all those topics to my MQTT broker. But I needed to write my own mqtt client in an external Python script."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": I was unable to run the Python script directly. I received a lot of error message - I assume that they are related to the virtual environment that HA uses to isolate external scripts. Back in ",(0,i.jsx)(t.a,{href:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-07-11-home-assistant-mqtt-autodiscovery-part-ii/2022-07-11",children:"Part II"})," of this tutorial I used the ",(0,i.jsx)(t.strong,{children:"Shell Script"})," option to execute the Python script. This worked like a charm."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Luckily the ",(0,i.jsx)(t.a,{href:"https://hub.docker.com/r/homeassistant/home-assistant",children:"Home Assistant Docker Container"})," has Python - obviously - and the Python library ",(0,i.jsx)(t.a,{href:"https://github.com/eclipse/paho.mqtt.python",children:"Paho MQTT"})," installed that I can use. But it seems that HA starts external scripts inside a virtual environment - can you add dependencies to it by adding the following lines to ",(0,i.jsx)(t.code,{children:"configuration.yaml"})," (?):"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",children:"python_script:\n  requirements:\n  - paho-mqtt>=1.6.1\n"})}),"\n",(0,i.jsx)(t.h2,{id:"using-python-scripts-in-home-assistant",children:"Using Python Scripts in Home Assistant"}),"\n",(0,i.jsx)(t.h3,{id:"data-preparation",children:"Data Preparation"}),"\n",(0,i.jsxs)(t.p,{children:["So in the ",(0,i.jsx)(t.a,{href:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-07-11-home-assistant-mqtt-autodiscovery-part-ii/2022-07-11",children:"previous step"})," I ended up with a bunch of MQTT Topics and Payloads that I need to register with my MQTT Broker to configure my INSTAR camera. For example the topic that configures a switch in Home Assistant to toggle the red  ",(0,i.jsx)(t.strong,{children:"Motion Detection Area"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Configuration topic"}),": ",(0,i.jsx)(t.code,{children:"homeassistant/switch/in9408_garden/alarm_area_red/config"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payload"}),":"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "device": {\n        "identifiers": "in9408_garden",\n        "manufacturer": "INSTAR Deutschland GmbH",\n        "model": "INSTAR 2k+ IN-9408 WLAN",\n        "name": "IN-9408 2k+ Garden",\n        "configuration_url": "http://192.168.2.115:80"\n    },\n    "availability": {\n      "topic": "cameras/115/status/testament",\n      "payload_available": "{\\"val\\":\\"alive\\"}",\n      "payload_not_available": "{\\"val\\":\\"dead\\"}"\n    },\n    "object_id":"in9408_garden_alarm_area_red",\n    "unique_id": "in9408_garden_alarm_area_red",\n    "name": "IN-9408 2k+ Garden Alarm Area Red",\n    "icon": "mdi:camera-metering-matrix",\n    "command_topic": "cameras/115/alarm/areas/red/enable",\n    "payload_on": "{\\"val\\":\\"1\\"}",\n    "payload_off": "{\\"val\\":\\"0\\"}",\n    "state_topic": "cameras/115/status/alarm/areas/red/enable",\n    "state_on": 1,\n    "state_off": 0,\n    "value_template": "{{ value_json.val }}",\n    "qos": 1\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"To use this topic with your own camera you will need to adjust the following values according to your camera configuration:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"configuration_url"}),": The IP address of your camera, e.g. ",(0,i.jsx)(t.code,{children:"http://192.168.2.115:80"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"MQTT Prefix & Device ID"}),": e.g. ",(0,i.jsx)(t.code,{children:"cameras"})," and ",(0,i.jsx)(t.code,{children:"115"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"MQTT Last-Will Topic"}),": e.g. ",(0,i.jsx)(t.code,{children:"status/testament"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"payload_available"}),": The Last-Will payload used to signify that your camera is connected to the MQTT broker"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"payload_not_available"}),": The Last-Will payload used to signify that your camera lost connection to the MQTT broker"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Home Assistant MQTT Auto-Discovery",src:n(924550).Z+"",width:"1201",height:"597"})}),"\n",(0,i.jsxs)(t.p,{children:["Now I want to wrap all those topics into an JSON Array - which means that I have to escape the JSON payload to have it handled as a string - find the entire list ",(0,i.jsx)(t.a,{href:"https://github.com/mpolinowski/ha-mqtt-python/blob/master/config_topics.json",children:"on Github"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "entities": [{\n            "topic": "homeassistant/switch/in9408_garden/alarm_area_red/config",\n            "payload": "{\\"device\\":{\\"identifiers\\":\\"in9408_garden\\",\\"manufacturer\\":\\"INSTAR Deutschland GmbH\\",\\"model\\":\\"INSTAR 2k+ IN-9408 WLAN\\",\\"name\\":\\"IN-9408 2k+ Garden\\",\\"configuration_url\\":\\"http://192.168.2.115:80\\"},\\"availability\\":{\\"topic\\":\\"cameras/115/status/testament\\",\\"payload_available\\":\\"{\\\\\\"val\\\\\\":\\\\\\"alive\\\\\\"}\\",\\"payload_not_available\\":\\"{\\\\\\"val\\\\\\":\\\\\\"dead\\\\\\"}\\"},\\"object_id\\":\\"in9408_garden_alarm_area_red\\",\\"unique_id\\":\\"in9408_garden_alarm_area_red\\",\\"name\\":\\"Alarm Area Red\\",\\"icon\\":\\"mdi:camera-metering-matrix\\",\\"command_topic\\":\\"cameras/115/alarm/areas/red/enable\\",\\"payload_on\\":\\"{\\\\\\"val\\\\\\":\\\\\\"1\\\\\\"}\\",\\"payload_off\\":\\"{\\\\\\"val\\\\\\":\\\\\\"1\\\\\\"}\\",\\"state_topic\\":\\"cameras/115/status/alarm/areas/red/enable\\",\\"state_on\\":1,\\"state_off\\":0,\\"value_template\\":\\"{{ value_json.val}}\\",\\"qos\\":1}"\n        },\n\n        ...\n\n    ]\n}\n'})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),': that you have to "double-escape" the parts that were already escaped before, e.g. ',(0,i.jsx)(t.code,{children:'{\\\\\\"val\\\\\\":\\\\\\"1\\\\\\"}'}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["And to be able to connect with my broker I will create a configuration file with all the details - see on ",(0,i.jsx)(t.a,{href:"https://github.com/mpolinowski/ha-mqtt-python/blob/master/config.py",children:"Github"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-py",children:'mqtt_server_host = "192.168.2.115"\nmqtt_server_port = 1883\nmqtt_bind_address = ""\nmqtt_bind_port = 0\nmqtt_username = "admin"\nmqtt_password = "instar"\nmqtt_transport = "tcp"\nmqtt_keepalive = 60\nmqtt_client_id = "mqtt5_client"\n'})}),"\n",(0,i.jsx)(t.h3,{id:"paho-mqtt-client",children:"Paho MQTT Client"}),"\n",(0,i.jsxs)(t.p,{children:["Now I can go ahead building the MQTT client, have it connect to my broker and then loop over all the MQTT topics prepared above - see on ",(0,i.jsx)(t.a,{href:"https://github.com/mpolinowski/ha-mqtt-python/blob/master/mqtt5_client.py",children:"Github"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-py",children:"import json\nimport paho.mqtt.client as mqtt\nimport sys\nimport time\n\nfrom config import * # import configuration from config.py\n\nf = open('config_topics.json') # read json file with all mqtt topics and payloads\n\njson_array = json.load(f) # read json data into an array variable\n\ndef on_connect(client, userdata, flags, rc, properties=None):\n    if rc==0:\n        print(\"INFO :: Connected to MQTT Broker\")\n    else:\n        print(\"ERROR :: Connection failed:\", rc)\n\nif __name__ == \"__main__\":\n    client = mqtt.Client(client_id = mqtt_client_id, protocol = mqtt.MQTTv5, transport = mqtt_transport)\n    client.username_pw_set(username = mqtt_username, password = mqtt_password)\n    client.connect(host = mqtt_server_host, port = mqtt_server_port,\n                    keepalive = mqtt_keepalive, bind_address = mqtt_bind_address, bind_port = mqtt_bind_port, properties = None)\n    client.on_connect = on_connect\n\n    for entity in json_array['entities']: # loop through all entities in array\n        client.publish(entity['topic'],entity['payload'],retain=True) # and use data to publish the mqtt topics\n        time.sleep(0.100) # I tried running without cooldown and it works just fine but kept this in\n    f.close()\n\n    client.loop_stop()\n    client.disconnect()\n    print(\"INFO :: Closed connection to broker\")\n    sys.exit()\n"})}),"\n",(0,i.jsx)(t.h3,{id:"python-scripts-as-a-service-in-home-assistant",children:"Python Scripts as a Service in Home Assistant"}),"\n",(0,i.jsxs)(t.p,{children:["Home Assistant expects external Python scripts to be stored inside the ",(0,i.jsx)(t.strong,{children:"Config"})," directory within a folder called ",(0,i.jsx)(t.code,{children:"python_scripts"}),". Create the folder and copy ",(0,i.jsx)(t.a,{href:"https://github.com/mpolinowski/ha-mqtt-python",children:"all 3 files"})," into it. Each Python file created in the ",(0,i.jsx)(t.code,{children:"<config>/python_scripts/"})," folder will be exposed as a service."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Add ",(0,i.jsx)(t.code,{children:"python_script:"})," to ",(0,i.jsx)(t.em,{children:"configuration.yaml"})]}),"\n",(0,i.jsxs)(t.li,{children:["Create folder ",(0,i.jsx)(t.code,{children:"<config>/python_scripts"})]}),"\n",(0,i.jsxs)(t.li,{children:["Copy the ",(0,i.jsx)(t.a,{href:"https://github.com/mpolinowski/ha-mqtt-python",children:"Python files"})," into it"]}),"\n",(0,i.jsx)(t.li,{children:"Restart Home Assistant"}),"\n",(0,i.jsxs)(t.li,{children:["Call your new ",(0,i.jsx)(t.code,{children:"python_script.mqtt5_client"})," service"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Home Assistant MQTT Auto-Discovery",src:n(768435).Z+"",width:"1395",height:"445"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": I was unable to run the Python script directly. I received a lot of error message - I assume that they are related to the virtual environment that HA uses to isolate external scripts. Back in ",(0,i.jsx)(t.a,{href:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-07-11-home-assistant-mqtt-autodiscovery-part-ii/2022-07-11",children:"Part II"})," of this tutorial I used the ",(0,i.jsx)(t.strong,{children:"Shell Script"})," option to execute the Python script. This worked like a charm."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.ah)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},603905:(e,t,n)=>{n.d(t,{ah:()=>l});var i=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),m=l(n),p=o,u=m["".concat(c,".").concat(p)]||m[p]||d[p]||a;return n?i.createElement(u,s(s({ref:t},h),{},{components:n})):i.createElement(u,s({ref:t},h))}));h.displayName="MDXCreateElement"},924550:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Home_Assistant_MQTT_Auto-Discovery_01-9eb3b81ee9449b13457bff2a0eca9e2c.png"},768435:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Home_Assistant_MQTT_Auto-Discovery_02-e96a7fe76f1a33bb380599291dc1c6b3.png"},184877:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-155e3666db02195caa838d2d6d5dc4bf.jpg"}}]);