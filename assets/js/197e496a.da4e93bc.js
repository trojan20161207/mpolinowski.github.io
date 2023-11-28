"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[69550],{463180:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var a=s(785893),t=s(603905);const r={sidebar_position:9060,slug:"2019-09-12",title:"Magento 2 and Elasticsearch",authors:"mpolinowski",tags:["LINUX","Elasticsearch","Magento"]},i=void 0,c={id:"Development/Magento/2019-09-12--magento-and-elasticsearch/index",title:"Magento 2 and Elasticsearch",description:"Patan, Nepal",source:"@site/docs/Development/Magento/2019-09-12--magento-and-elasticsearch/index.mdx",sourceDirName:"Development/Magento/2019-09-12--magento-and-elasticsearch",slug:"/Development/Magento/2019-09-12--magento-and-elasticsearch/2019-09-12",permalink:"/docs/Development/Magento/2019-09-12--magento-and-elasticsearch/2019-09-12",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Magento/2019-09-12--magento-and-elasticsearch/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Elasticsearch",permalink:"/docs/tags/elasticsearch"},{label:"Magento",permalink:"/docs/tags/magento"}],version:"current",sidebarPosition:9060,frontMatter:{sidebar_position:9060,slug:"2019-09-12",title:"Magento 2 and Elasticsearch",authors:"mpolinowski",tags:["LINUX","Elasticsearch","Magento"]},sidebar:"tutorialSidebar",previous:{title:"Magento 2 and Varnish 6",permalink:"/docs/Development/Magento/2019-09-13--magento-and-varnish/2019-09-13"},next:{title:"Magento 2 Installation with NGINX on Debian Buster",permalink:"/docs/Development/Magento/2019-09-11--magento-on-debian-with-nginx/2019-09-11"}},l={},o=[{value:"Install prerequisites and Elasticsearch",id:"install-prerequisites-and-elasticsearch",level:2},{value:"Installing OpenJDK 8",id:"installing-openjdk-8",level:3},{value:"Install Elasticsearch 6.x",id:"install-elasticsearch-6x",level:3},{value:"Configure NGINX and Elasticsearch",id:"configure-nginx-and-elasticsearch",level:2},{value:"Set up NGINX as a proxy",id:"set-up-nginx-as-a-proxy",level:3},{value:"Configure Elasticsearch within Magento",id:"configure-elasticsearch-within-magento",level:3},{value:"Reindexing catalog search and refreshing the full page cache",id:"reindexing-catalog-search-and-refreshing-the-full-page-cache",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.ah)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Patan, Nepal",src:s(521764).Z+"",width:"1500",height:"691"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#install-prerequisites-and-elasticsearch",children:"Install prerequisites and Elasticsearch"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#installing-openjdk-8",children:"Installing OpenJDK 8"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#install-elasticsearch-6x",children:"Install Elasticsearch 6.x"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#configure-nginx-and-elasticsearch",children:"Configure NGINX and Elasticsearch"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#set-up-nginx-as-a-proxy",children:"Set up NGINX as a proxy"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#configure-elasticsearch-within-magento",children:"Configure Elasticsearch within Magento"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#reindexing-catalog-search-and-refreshing-the-full-page-cache",children:"Reindexing catalog search and refreshing the full page cache"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"install-prerequisites-and-elasticsearch",children:"Install prerequisites and Elasticsearch"}),"\n",(0,a.jsx)(n.h3,{id:"installing-openjdk-8",children:"Installing OpenJDK 8"}),"\n",(0,a.jsx)(n.p,{children:"Start by verifying that Java hasn't been installed yet on your system:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"java -version\r\n-bash: java: command not found\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Java LTS version 8 is not available in the official Debian Buster repositories. You can still install it by enabling the AdoptOpenJDK repository which provides prebuilt OpenJDK packages (",(0,a.jsx)(n.a,{href:"https://stackoverflow.com/questions/57031649/how-to-install-openjdk-8-jdk-on-debian-10-buster",children:"check alternatives"}),"):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"apt update\r\napt install apt-transport-https ca-certificates wget dirmngr gnupg software-properties-common\n"})}),"\n",(0,a.jsx)(n.p,{children:"Import the repository\u2019s GPG key using the following wget command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget -qO - https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | sudo apt-key add -\n"})}),"\n",(0,a.jsx)(n.p,{children:"Add the AdoptOpenJDK APT repository to your system:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo add-apt-repository --yes https://adoptopenjdk.jfrog.io/adoptopenjdk/deb/\n"})}),"\n",(0,a.jsx)(n.p,{children:"Once the repository is enabled, update apt sources and install Java 8 using the following commands:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt update\r\nsudo apt install adoptopenjdk-8-hotspot\n"})}),"\n",(0,a.jsx)(n.p,{children:"Finally, verify the installation by checking the Java version. The output should look something like this::"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'java -version\r\nopenjdk version "1.8.0_232"\r\nOpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_232-b09)\r\nOpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.232-b09, mixed mode)\n'})}),"\n",(0,a.jsx)(n.h3,{id:"install-elasticsearch-6x",children:"Install Elasticsearch 6.x"}),"\n",(0,a.jsx)(n.p,{children:"Download and install the public signing key:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Save the repository definition to ",(0,a.jsx)(n.code,{children:"/etc/apt/sources.list.d/elastic-6.x.list"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'echo "deb https://artifacts.elastic.co/packages/6.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-6.x.list\n'})}),"\n",(0,a.jsx)(n.p,{children:"You can install the Elasticsearch Debian package with:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"apt update && sudo apt install elasticsearch\n"})}),"\n",(0,a.jsx)(n.p,{children:"To configure Elasticsearch to start automatically when the system boots up, run the following commands:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo /bin/systemctl daemon-reload\r\nsudo /bin/systemctl enable elasticsearch.service\n"})}),"\n",(0,a.jsx)(n.p,{children:"Elasticsearch can be started and stopped as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"systemctl start elasticsearch.service\r\nsystemctl stop elasticsearch.service\n"})}),"\n",(0,a.jsx)(n.p,{children:"These commands provide no feedback as to whether Elasticsearch was started successfully or not. Instead, this information will be written in the log files located in /var/log/elasticsearch/. You can also check the service status:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"systemctl status elasticsearch.service\r\n\u25cf elasticsearch.service - Elasticsearch\r\n   Loaded: loaded (/lib/systemd/system/elasticsearch.service; enabled; vendor preset: enabled)\r\n   Active: active (running) since Mon 2020-01-13 07:47:05 CET; 8s ago\r\n     Docs: http://www.elastic.co\r\n Main PID: 30088 (java)\r\n    Tasks: 30 (limit: 4915)\r\n   Memory: 1.2G\r\n   CGroup: /system.slice/elasticsearch.service\r\n           \u251c\u250030088 /bin/java -Xms1g -Xmx1g -XX:+UseConcMarkSweepGC -XX:CMSInitiatingOccupancyFraction=75 -XX:+UseCMSInitiatingOccup           \u2514\u250030180 /usr/share/elasticsearch/modules/x-pack-ml/platform/linux-x86_64/bin/controller\r\n\r\nJan 13 07:47:05 Magento2 systemd[1]: Started Elasticsearch.\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can now access Elasticsearch by:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'url -X GET "localhost:9200/?pretty"\r\n\r\n{\r\n  "name" : "NPsrvIo",\r\n  "cluster_name" : "elasticsearch",\r\n  "cluster_uuid" : "aCUd90SnRCynWMZCw-AAhg",\r\n  "version" : {\r\n    "number" : "6.8.6",\r\n    "build_flavor" : "default",\r\n    "build_type" : "deb",\r\n    "build_hash" : "3d9f765",\r\n    "build_date" : "2019-12-13T17:11:52.013738Z",\r\n    "build_snapshot" : false,\r\n    "lucene_version" : "7.7.2",\r\n    "minimum_wire_compatibility_version" : "5.6.0",\r\n    "minimum_index_compatibility_version" : "5.0.0"\r\n  },\r\n  "tagline" : "You Know, for Search"\r\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Elasticsearch is configured to only be accessible from localhost:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Magento2 and Elasticsearch",src:s(349108).Z+"",width:"928",height:"731"})}),"\n",(0,a.jsxs)(n.p,{children:["You can change this in the ",(0,a.jsx)(n.strong,{children:"Network Section"})," of ",(0,a.jsx)(n.code,{children:"/etc/elasticsearch/elasticsearch.yml"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:"# ---------------------------------- Network -----------------------------------\r\n#\r\n# Set the bind address to a specific IP (IPv4 or IPv6):\r\n#\r\n#network.host: 192.168.0.1\r\n#\r\n# Set a custom port for HTTP:\r\n#\r\n#http.port: 9200\r\n#\r\n# For more information, consult the network module documentation.\n"})}),"\n",(0,a.jsxs)(n.p,{children:["By default the ",(0,a.jsx)(n.code,{children:"network.host"})," is set to ",(0,a.jsx)(n.code,{children:"127.0.0.1"})," - setting it to ",(0,a.jsx)(n.code,{children:"0.0.0.0"})," will open Elasticsearch up to all your network interfaces. But be aware that Elasticsearch 6 does not have a free User Authentication pre-installed!"]}),"\n",(0,a.jsx)(n.h2,{id:"configure-nginx-and-elasticsearch",children:"Configure NGINX and Elasticsearch"}),"\n",(0,a.jsx)(n.h3,{id:"set-up-nginx-as-a-proxy",children:"Set up NGINX as a proxy"}),"\n",(0,a.jsxs)(n.p,{children:["Create a new file ",(0,a.jsx)(n.code,{children:"/etc/nginx/sites-available/elasticsearch.conf"})," with the following content:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"server {\r\n   listen 8080;\r\n   location /_cluster/health {\r\n      proxy_pass http://localhost:9200/_cluster/health;\r\n   }\r\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Symlink the configuration file into ",(0,a.jsx)(n.code,{children:"site-enabled"})," and restart NGINX:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ln -s /etc/nginx/sites-available/elasticsearch.conf /etc/nginx/sites-enabled\r\nnginx -t\r\nservice nginx restart\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Verify the proxy works by entering the following command ",(0,a.jsx)(n.code,{children:"netstat -plnt"})," and try opening the URL inside your browser ",(0,a.jsx)(n.code,{children:"http://your-server.de:8080/_cluster/health"})," :"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Magento2 and Elasticsearch",src:s(230203).Z+"",width:"925",height:"800"})}),"\n",(0,a.jsxs)(n.p,{children:["We now have Magento 2.3.3 running on Port 80 and our health check for Elasticsearch on Port 8080 - both available on all network interfaces ",(0,a.jsx)(n.code,{children:"0.0.0.0"}),". While the Elasticsearch API Ports 9200/9300 are securely bound to ",(0,a.jsx)(n.code,{children:"127.0.0.1"})," and cannot be accessed from the internet."]}),"\n",(0,a.jsx)(n.h3,{id:"configure-elasticsearch-within-magento",children:"Configure Elasticsearch within Magento"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Log in to the Magento Admin as an administrator."}),"\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:"Stores"})," > ",(0,a.jsx)(n.strong,{children:"Configuration"})," > ",(0,a.jsx)(n.strong,{children:"Catalog"})," > ",(0,a.jsx)(n.strong,{children:"Catalog Search"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"From the Search Engine list, select the correct Elasticsearch version as the following figure shows."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Magento2 and Elasticsearch",src:s(685817).Z+"",width:"1038",height:"743"})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Option"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Description"})})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"Elasticsearch Server Hostname"})}),(0,a.jsxs)(n.td,{children:["Enter the fully qualified hostname or IP address of the machine running Elasticsearch - as we are running Elasticsearch locally, we can use ",(0,a.jsx)(n.code,{children:"localhost"})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"Elasticsearch Server Port"})}),(0,a.jsxs)(n.td,{children:["Enter the Elasticsearch web server proxy port - for us ",(0,a.jsx)(n.code,{children:"9200"})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"Elasticsearch Index Prefix"})}),(0,a.jsx)(n.td,{children:"Enter the Elasticsearch index prefix. If you use a single Elasticsearch instance for more than one Magento installation"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"Enable Elasticsearch HTTP Auth"})}),(0,a.jsx)(n.td,{children:"Click Yes only if you enabled authentication for your Elasticsearch server - we did not."})]})]})]}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Click Test Connection."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Magento2 and Elasticsearch",src:s(107007).Z+"",width:"953",height:"498"})}),"\n",(0,a.jsx)(n.h3,{id:"reindexing-catalog-search-and-refreshing-the-full-page-cache",children:"Reindexing catalog search and refreshing the full page cache"}),"\n",(0,a.jsx)(n.p,{children:"After you change Magento\u2019s Elasticsearch configuration, you must reindex the catalog search index and refresh the full page cache using the Admin or command line."}),"\n",(0,a.jsx)(n.p,{children:"To refresh the cache using the Admin:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"In the Admin, click System > Cache Management."}),"\n",(0,a.jsx)(n.li,{children:"Select the checkbox next to Page Cache."}),"\n",(0,a.jsx)(n.li,{children:"From the Actions list in the upper right, click Refresh."}),"\n",(0,a.jsx)(n.li,{children:"Flush the Magento Cache"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Magento2 and Elasticsearch",src:s(770922).Z+"",width:"935",height:"889"})}),"\n",(0,a.jsx)(n.p,{children:"Enter the following command to reindex the catalog search index only:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/magento indexer:reindex catalogsearch_fulltext\n"})}),"\n",(0,a.jsx)(n.p,{children:"Enter the following command to reindex all indexers:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/magento indexer:reindex\n"})}),"\n",(0,a.jsx)(n.p,{children:"Wait until reindexing completes."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Magento2 and Elasticsearch",src:s(48526).Z+"",width:"926",height:"319"})})]})}function d(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},603905:(e,n,s)=>{s.d(n,{ah:()=>o});var a=s(667294);function t(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function r(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,a)}return s}function i(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?r(Object(s),!0).forEach((function(n){t(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function c(e,n){if(null==e)return{};var s,a,t=function(e,n){if(null==e)return{};var s,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)s=r[a],n.indexOf(s)>=0||(t[s]=e[s]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)s=r[a],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}var l=a.createContext({}),o=function(e){var n=a.useContext(l),s=n;return e&&(s="function"==typeof e?e(n):i(i({},n),e)),s},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var s=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),g=o(s),p=t,u=g["".concat(l,".").concat(p)]||g[p]||h[p]||r;return s?a.createElement(u,i(i({ref:n},d),{},{components:s})):a.createElement(u,i({ref:n},d))}));d.displayName="MDXCreateElement"},349108:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/magento_elasticsearch_01-1cf244a58bd28a20f9eff361675ce027.png"},230203:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/magento_elasticsearch_02-26553f8d17ec343842253750dd3f1a2b.png"},685817:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/magento_elasticsearch_03-2f146c22eea71ebf4cb713752a2d3090.png"},107007:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/magento_elasticsearch_04-e60a9fe734c062444e062b0cef7c680d.png"},770922:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/magento_elasticsearch_05-042da145fc030444c690d758ad417394.png"},48526:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/magento_elasticsearch_06-bd20d28bf852a5d2029089959abc5ed9.png"},521764:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-d7a7d3a232e2a500e45f12b8ea1d8d4c.jpg"}}]);