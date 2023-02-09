"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[19949],{3905:(a,n,e)=>{e.d(n,{Zo:()=>f,kt:()=>p});var t=e(67294);function i(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function r(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function o(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){i(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function s(a,n){if(null==a)return{};var e,t,i=function(a,n){if(null==a)return{};var e,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||(i[e]=a[e]);return i}(a,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(i[e]=a[e])}return i}var l=t.createContext({}),u=function(a){var n=t.useContext(l),e=n;return a&&(e="function"==typeof a?a(n):o(o({},n),a)),e},f=function(a){var n=u(a.components);return t.createElement(l.Provider,{value:n},a.children)},g={inlineCode:"code",wrapper:function(a){var n=a.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(a,n){var e=a.components,i=a.mdxType,r=a.originalType,l=a.parentName,f=s(a,["components","mdxType","originalType","parentName"]),d=u(e),p=i,c=d["".concat(l,".").concat(p)]||d[p]||g[p]||r;return e?t.createElement(c,o(o({ref:n},f),{},{components:e})):t.createElement(c,o({ref:n},f))}));function p(a,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof a||i){var r=e.length,o=new Array(r);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=a,s.mdxType="string"==typeof a?a:i,o[1]=s;for(var u=2;u<r;u++)o[u]=e[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,e)}d.displayName="MDXCreateElement"},97707:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var t=e(87462),i=(e(67294),e(3905));const r={sidebar_position:6990,slug:"2022-12-22",title:"Grafana IoT Dashboard",authors:"mpolinowski",tags:["LINUX"],description:"Building IoT Visualizations using Grafana"},o=void 0,s={unversionedId:"IoT-and-Machine-Learning/Home_Automation/2022-12-22--grafana-for-iot/index",id:"IoT-and-Machine-Learning/Home_Automation/2022-12-22--grafana-for-iot/index",title:"Grafana IoT Dashboard",description:"Building IoT Visualizations using Grafana",source:"@site/docs/IoT-and-Machine-Learning/Home_Automation/2022-12-22--grafana-for-iot/index.md",sourceDirName:"IoT-and-Machine-Learning/Home_Automation/2022-12-22--grafana-for-iot",slug:"/IoT-and-Machine-Learning/Home_Automation/2022-12-22--grafana-for-iot/2022-12-22",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-12-22--grafana-for-iot/2022-12-22",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/Home_Automation/2022-12-22--grafana-for-iot/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:6990,frontMatter:{sidebar_position:6990,slug:"2022-12-22",title:"Grafana IoT Dashboard",authors:"mpolinowski",tags:["LINUX"],description:"Building IoT Visualizations using Grafana"},sidebar:"tutorialSidebar",previous:{title:"Convert RTSP to HLS using FFmpeg",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-12-15--rtsp-to-hls-ffmpeg/2022-12-15"},next:{title:"OpenHab - MQTT Homie Convention",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-07-16-openhab-mqtt-homie/2022-07-16"}},l={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Installation with Docker-Compose",id:"installation-with-docker-compose",level:2},{value:"Datasources",id:"datasources",level:2},{value:"Infinity Plugin",id:"infinity-plugin",level:3},{value:"Time Series Databases",id:"time-series-databases",level:3},{value:"Connecting Grafana to InfluxDB",id:"connecting-grafana-to-influxdb",level:4}],f={toc:u};function g(a){let{components:n,...r}=a;return(0,i.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TST, Hong Kong",src:e(42677).Z,width:"1500",height:"517"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installation-with-docker-compose"},"Installation with Docker-Compose")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#datasources"},"Datasources"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#infinity-plugin"},"Infinity Plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#time-series-databases"},"Time Series Databases"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#connecting-grafana-to-influxdb"},"Connecting Grafana to InfluxDB"))))))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/grafana-iot"},"Github")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#config-file-locations"},"/etc/grafana/grafana.ini")," (see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/grafana/grafana/blob/main/conf/sample.ini"},"full example"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"app_mode = production\ndata = /var/lib/grafana\ntemp_data_lifetime = 24h\nlogs = /var/log/grafana\nplugins = /var/lib/grafana/plugins\nprovisioning = conf/provisioning\nprotocol = http\nhttp_port = 3000\nreporting_enabled = false\nallow_sign_up = false\ndefault_theme = dark\nfull_date = YYYY-MM-DD HH:mm:ss\ninterval_second = HH:mm:ss\ninterval_minute = HH:mm\ninterval_hour = MM/DD HH:mm\ninterval_day = MM/DD\ninterval_month = YYYY-MM\ninterval_year = YYYY\nuse_browser_locale = false\n")),(0,i.kt)("h2",{id:"installation-with-docker-compose"},"Installation with Docker-Compose"),(0,i.kt)("p",null,"We can mount this configuration file into a Grafana container by running ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")," on the following file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3'\n\nservices:\n\n  grafana:\n    image: grafana/grafana-oss:latest\n    container_name: grafana\n    ports:\n      - 3000:3000\n    environment:\n      - GF_SECURITY_ADMIN_USER=admin\n      - GF_SECURITY_ADMIN_PASSWORD=instar\n    volumes:\n      - type: bind\n        source: ./grafana.ini\n        target: /etc/grafana/grafana.ini\n        read_only: true\n      - type: volume\n        source: grafanavol\n        target: /var/lib/grafana\n    networks:\n      - grafana\n\nvolumes:\n  grafanavol:\n\nnetworks:\n  grafana:\n")),(0,i.kt)("p",null,"Visit ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:3000")," and login with the user name and password set as environment variables above:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Building IoT Visualizations using Grafana",src:e(2838).Z,width:"1100",height:"524"})),(0,i.kt)("h2",{id:"datasources"},"Datasources"),(0,i.kt)("h3",{id:"infinity-plugin"},"Infinity Plugin"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://yesoreyeram.github.io/grafana-infinity-datasource"},"Grafana Infinity Datasource")," allows you to visualize data from JSON, CSV, XML, GraphQL and HTML endpoints. It can be installed from the ",(0,i.kt)("strong",{parentName:"p"},"Plugins")," directory:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Building IoT Visualizations using Grafana",src:e(51841).Z,width:"1054",height:"442"})),(0,i.kt)("p",null,"Go to ",(0,i.kt)("strong",{parentName:"p"},"Configuration")," / ",(0,i.kt)("strong",{parentName:"p"},"Data sources")," and click on Add data source:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Building IoT Visualizations using Grafana",src:e(87846).Z,width:"1235",height:"329"})),(0,i.kt)("p",null,"The Plugin can now be used to load external data sources, e.g. CSV files for the ",(0,i.kt)("a",{parentName:"p",href:"https://data.buenosaires.gob.ar/dataset/calidad-aire"},"Air Quality in Buenos Aires 2019"),". Here we can see the  ",(0,i.kt)("inlineCode",{parentName:"p"},"NO2")," and  ",(0,i.kt)("inlineCode",{parentName:"p"},"PM10")," measurements for three different areas:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Building IoT Visualizations using Grafana",src:e(73352).Z,width:"1949",height:"559"})),(0,i.kt)("p",null,"That can be turned into a visualization on a dashboard:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Building IoT Visualizations using Grafana",src:e(54119).Z,width:"1941",height:"895"})),(0,i.kt)("h3",{id:"time-series-databases"},"Time Series Databases"),(0,i.kt)("p",null,"The default ",(0,i.kt)("strong",{parentName:"p"},"TSDB")," for Grafana is ",(0,i.kt)("strong",{parentName:"p"},"InfluxDB")," which we can quickly add to our Docker-Compose file together with ",(0,i.kt)("strong",{parentName:"p"},"Chronograf")," - the official database frontend:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3'\n\nservices:\n\n  grafana:\n    image: grafana/grafana-oss:latest\n    container_name: grafana\n    ports:\n      - 3000:3000\n    environment:\n      - GF_SECURITY_ADMIN_USER=${GRAFANA_USER}\n      - GF_SECURITY_ADMIN_PASSWORD=${GRAFANA_PASSWORD}\n    volumes:\n      - type: bind\n        source: ./grafana.ini\n        target: /etc/grafana/grafana.ini\n        read_only: true\n      - type: volume\n        source: grafanavol\n        target: /var/lib/grafana\n    depends_on:\n      - influxdb\n    networks:\n      - grafana\n\n  chronograf:\n    image: chronograf:latest\n    ports:\n      - '127.0.0.1:8888:8888'\n    volumes:\n      - chronovol:/var/lib/chronograf\n    depends_on:\n      - influxdb\n    environment:\n      - INFLUXDB_URL=http://influxdb:8086\n      - INFLUXDB_USERNAME=${INFLUXDB_USERNAME}\n      - INFLUXDB_PASSWORD=${INFLUXDB_PASSWORD}\n    networks:\n      - grafana\n\n  influxdb:\n    image: influxdb:latest\n    ports:\n      - '8086:8086'\n    volumes:\n      - influxvol:/var/lib/influxdb\n    environment:\n      - INFLUXDB_DB=db0\n      - INFLUXDB_ADMIN_USER=${INFLUXDB_USERNAME}\n      - INFLUXDB_ADMIN_PASSWORD=${INFLUXDB_PASSWORD}\n    networks:\n      - grafana\n\nvolumes:\n  grafanavol:\n  influxvol:\n  chronovol:\n\nnetworks:\n  grafana:\n")),(0,i.kt)("h4",{id:"connecting-grafana-to-influxdb"},"Connecting Grafana to InfluxDB"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Building IoT Visualizations using Grafana",src:e(46361).Z,width:"1037",height:"459"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Building IoT Visualizations using Grafana",src:e(22365).Z,width:"1172",height:"636"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Building IoT Visualizations using Grafana",src:e(91341).Z,width:"1202",height:"427"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Building IoT Visualizations using Grafana",src:e(78628).Z,width:"1072",height:"898"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Building IoT Visualizations using Grafana",src:e(23295).Z,width:"1139",height:"567"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Building IoT Visualizations using Grafana",src:e(60795).Z,width:"1320",height:"484"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Building IoT Visualizations using Grafana",src:e(32561).Z,width:"1337",height:"841"})))}g.isMDXComponent=!0},2838:(a,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/Grafana-IoT-Dashboard_01-8011534eb277fa4f3b9c4bd8719995a3.png"},51841:(a,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/Grafana-IoT-Dashboard_02-1e2b7028a62c5be178e29a1f0a274911.png"},87846:(a,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/Grafana-IoT-Dashboard_03-94772506195790c4cb116ba5e50b9547.png"},73352:(a,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/Grafana-IoT-Dashboard_04-a19ade5c2294482a9768536b82f73a9b.png"},54119:(a,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/Grafana-IoT-Dashboard_05-10d154aa048990d57dd3e1827513f98b.png"},46361:(a,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/Grafana-IoT-Dashboard_06-5b7a8634c426282f0b3f8092cf3839b6.png"},22365:(a,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/Grafana-IoT-Dashboard_07-f9d01e4fa9af5b0c15ba8f4daef56c70.png"},91341:(a,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/Grafana-IoT-Dashboard_08-ae91bea12ae8f1d08a83631f573d7a5d.png"},78628:(a,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/Grafana-IoT-Dashboard_09-4d5b94a816311b1152db2850c23f2e9b.png"},23295:(a,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/Grafana-IoT-Dashboard_10-6c690919916263dcffe5eb010fb9bb30.png"},60795:(a,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/Grafana-IoT-Dashboard_11-925fa64cc62aac4a1ce3ec8274a48fe2.png"},32561:(a,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/Grafana-IoT-Dashboard_12-e93fb31bbf030ada8ac6456437e62765.png"},42677:(a,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-ec671595d585b88a85b017a7908fb619.jpg"}}]);