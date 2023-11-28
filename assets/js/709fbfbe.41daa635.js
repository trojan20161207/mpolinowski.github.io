"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[74885],{779258:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var i=n(785893),t=n(603905);const r={sidebar_position:9080,slug:"2017-12-16",title:"Elasticsearch and Kibana",authors:"mpolinowski",tags:["LINUX","Databases","Elasticsearch"]},a=void 0,l={id:"DevOps/Elasticsearch/2017-12-26--elasticsearch-kibana/index",title:"Elasticsearch and Kibana",description:"Battambang, Cambodia",source:"@site/docs/DevOps/Elasticsearch/2017-12-26--elasticsearch-kibana/index.mdx",sourceDirName:"DevOps/Elasticsearch/2017-12-26--elasticsearch-kibana",slug:"/DevOps/Elasticsearch/2017-12-26--elasticsearch-kibana/2017-12-16",permalink:"/docs/DevOps/Elasticsearch/2017-12-26--elasticsearch-kibana/2017-12-16",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Elasticsearch/2017-12-26--elasticsearch-kibana/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Databases",permalink:"/docs/tags/databases"},{label:"Elasticsearch",permalink:"/docs/tags/elasticsearch"}],version:"current",sidebarPosition:9080,frontMatter:{sidebar_position:9080,slug:"2017-12-16",title:"Elasticsearch and Kibana",authors:"mpolinowski",tags:["LINUX","Databases","Elasticsearch"]},sidebar:"tutorialSidebar",previous:{title:"Securing Elasticsearch with X-Pack",permalink:"/docs/DevOps/Elasticsearch/2017-12-31--securing-elasticsearch-xpack/2017-12-31"},next:{title:"React Search Interface",permalink:"/docs/DevOps/Elasticsearch/2017-12-05--elasticsearch-react-example/2017-12-05"}},c={},h=[{value:"Search Engine Setup and Configuration",id:"search-engine-setup-and-configuration",level:2},{value:"Installing Elasticsearch 6.x on CentOS",id:"installing-elasticsearch-6x-on-centos",level:3},{value:"Import the Elasticsearch PGP Key",id:"import-the-elasticsearch-pgp-key",level:4},{value:"Installing from the RPM repository",id:"installing-from-the-rpm-repository",level:3},{value:"Running Elasticsearch with <em>systemd</em>",id:"running-elasticsearch-with-systemd",level:4},{value:"Checking that Elasticsearch is running",id:"checking-that-elasticsearch-is-running",level:4},{value:"Configuring Elasticsearch",id:"configuring-elasticsearch",level:4},{value:"Installing Kibana 6.x on CentOS",id:"installing-kibana-6x-on-centos",level:3},{value:"Running Kibana with <em>systemd</em>",id:"running-kibana-with-systemd",level:4}];function o(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Battambang, Cambodia",src:n(462864).Z+"",width:"1500",height:"627"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#search-engine-setup-and-configuration",children:"Search Engine Setup and Configuration"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#installing-elasticsearch-6x-on-centos",children:"Installing Elasticsearch 6.x on CentOS"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#import-the-elasticsearch-pgp-key",children:"Import the Elasticsearch PGP Key"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#installing-from-the-rpm-repository",children:"Installing from the RPM repository"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsxs)(s.a,{href:"#running-elasticsearch-with-_systemd_",children:["Running Elasticsearch with ",(0,i.jsx)(s.em,{children:"systemd"})]})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#checking-that-elasticsearch-is-running",children:"Checking that Elasticsearch is running"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#configuring-elasticsearch",children:"Configuring Elasticsearch"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#installing-kibana-6x-on-centos",children:"Installing Kibana 6.x on CentOS"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsxs)(s.a,{href:"#running-kibana-with-_systemd_",children:["Running Kibana with ",(0,i.jsx)(s.em,{children:"systemd"})]})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"search-engine-setup-and-configuration",children:"Search Engine Setup and Configuration"}),"\n",(0,i.jsx)(s.h3,{id:"installing-elasticsearch-6x-on-centos",children:"Installing Elasticsearch 6.x on CentOS"}),"\n",(0,i.jsx)(s.p,{children:"Elasticsearch is a distributed, JSON-based search and analytics engine designed for horizontal scalability, maximum reliability, and easy management."}),"\n",(0,i.jsx)(s.h4,{id:"import-the-elasticsearch-pgp-key",children:"Import the Elasticsearch PGP Key"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch\n"})}),"\n",(0,i.jsx)(s.h3,{id:"installing-from-the-rpm-repository",children:"Installing from the RPM repository"}),"\n",(0,i.jsxs)(s.p,{children:["Create a file called elasticsearch.repo in the ",(0,i.jsx)(s.em,{children:"/etc/yum.repos.d/"})," directory and add the following lines:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"[elasticsearch-6.x]\r\nname=Elasticsearch repository for 6.x packages\r\nbaseurl=https://artifacts.elastic.co/packages/6.x/yum\r\ngpgcheck=1\r\ngpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch\r\nenabled=1\r\nautorefresh=1\r\ntype=rpm-md\n"})}),"\n",(0,i.jsx)(s.p,{children:"And your repository is ready for use. You can now install Elasticsearch with one of the following commands:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"sudo yum install elasticsearch\n"})}),"\n",(0,i.jsxs)(s.h4,{id:"running-elasticsearch-with-systemd",children:["Running Elasticsearch with ",(0,i.jsx)(s.em,{children:"systemd"})]}),"\n",(0,i.jsx)(s.p,{children:"To configure Elasticsearch to start automatically when the system boots up, run the following commands:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"sudo /bin/systemctl daemon-reload\r\nsudo /bin/systemctl enable elasticsearch.service\n"})}),"\n",(0,i.jsx)(s.p,{children:"Apparently there is no way to quietly reload the Elasticsearch service after changing the config file - you will be required to stop and restart instead:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"sudo systemctl stop elasticsearch.service\r\nsudo systemctl start elasticsearch.service\n"})}),"\n",(0,i.jsx)(s.p,{children:"These commands provide no feedback as to whether Elasticsearch was started successfully or not. Instead, this information will be written in the log files located in /var/log/elasticsearch/."}),"\n",(0,i.jsx)(s.h4,{id:"checking-that-elasticsearch-is-running",children:"Checking that Elasticsearch is running"}),"\n",(0,i.jsx)(s.p,{children:"You can test that your Elasticsearch node is running by sending an HTTP request to port 9200 on localhost:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"curl -XGET 'localhost:9200/?pretty'\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"http://localhost:9200/_cat/indices?v&pretty\n"})}),"\n",(0,i.jsx)(s.h4,{id:"configuring-elasticsearch",children:"Configuring Elasticsearch"}),"\n",(0,i.jsxs)(s.p,{children:["Elasticsearch loads its configuration from the ",(0,i.jsx)(s.em,{children:"/etc/elasticsearch/elasticsearch.yml"})," file by default. Examples:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"cluster.name:"})," e.g. ",(0,i.jsx)(s.em,{children:"instar-wiki"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"node.name"})," e.g. ",(0,i.jsx)(s.em,{children:"c21"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"node.attr.rack:"})," e.g ",(0,i.jsx)(s.em,{children:"r44"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"path.data:"})," ",(0,i.jsx)(s.em,{children:"/path/to/data"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"path.logs:"})," ",(0,i.jsx)(s.em,{children:"/path/to/logs"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"network.host:"})," ",(0,i.jsx)(s.em,{children:"localhost"})," ",(0,i.jsx)(s.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-network.html#network-interface-values",children:"see config"})," ",(0,i.jsx)(s.strong,{children:"*"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"http.port:"})," ",(0,i.jsx)(s.em,{children:"9200"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"http.cors:"})," ",(0,i.jsx)(s.em,{children:"enabled:"})," true , ",(0,i.jsx)(s.em,{children:"allow-origin:"})," /https?://localhost(:[0-9]+)?/, ",(0,i.jsx)(s.em,{children:"allow-origin:"})," /https?://localhost(:[0-9][0-9][0-9][0-9])?/\r\n",(0,i.jsx)(s.strong,{children:"*"})," ",(0,i.jsx)(s.em,{children:"e.g. network.host: 127.0.0.1, 192.168.1.200, 7.114.21.49"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The RPM places config files, logs, and the data directory in the appropriate locations for an RPM-based system:"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Default Location"}),(0,i.jsx)(s.th,{children:"Setting"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"home"}),(0,i.jsx)(s.td,{children:"Elasticsearch home directory or $ES_HOME"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"/usr/share/elasticsearch"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"bin"}),(0,i.jsx)(s.td,{children:"Binary scripts including elasticsearch to start a node and elasticsearch-plugin to install plugins"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"/usr/share/elasticsearch/bin"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"conf"}),(0,i.jsx)(s.td,{children:"Configuration files including elasticsearch.yml"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"/etc/elasticsearch"})}),(0,i.jsx)(s.td,{children:"ES_PATH_CONF"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"conf"}),(0,i.jsx)(s.td,{children:"Environment variables including heap size, file descriptors."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"/etc/sysconfig/elasticsearch"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"data"}),(0,i.jsx)(s.td,{children:"The location of the data files of each index / shard allocated on the node. Can hold multiple locations."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"/var/lib/elasticsearch"})}),(0,i.jsx)(s.td,{children:"path.data"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"logs"}),(0,i.jsx)(s.td,{children:"Log files location."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"/var/log/elasticsearch"})}),(0,i.jsx)(s.td,{children:"path.logs"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"plugins"}),(0,i.jsx)(s.td,{children:"Plugin files location. Each plugin will be contained in a subdirectory."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"/usr/share/elasticsearch/plugins"})}),(0,i.jsx)(s.td,{})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"installing-kibana-6x-on-centos",children:"Installing Kibana 6.x on CentOS"}),"\n",(0,i.jsx)(s.p,{children:"Kibana gives shape to your data and is the extensible user interface for configuring and managing all aspects of the Elastic Stack."}),"\n",(0,i.jsxs)(s.p,{children:["Create a file called kibana.repo in the ",(0,i.jsx)(s.em,{children:"/etc/yum.repos.d/"})," directory and add the following lines:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"[kibana-6.x]\r\nname=Kibana repository for 6.x packages\r\nbaseurl=https://artifacts.elastic.co/packages/6.x/yum\r\ngpgcheck=1\r\ngpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch\r\nenabled=1\r\nautorefresh=1\r\ntype=rpm-md\n"})}),"\n",(0,i.jsx)(s.p,{children:"And your repository is ready for use. You can now install Kibana with one of the following command:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"sudo yum install kibana\n"})}),"\n",(0,i.jsxs)(s.h4,{id:"running-kibana-with-systemd",children:["Running Kibana with ",(0,i.jsx)(s.em,{children:"systemd"})]}),"\n",(0,i.jsx)(s.p,{children:"To configure Kibana to start automatically when the system boots up, run the following commands:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"sudo /bin/systemctl daemon-reload\r\nsudo /bin/systemctl enable kibana.service\n"})}),"\n",(0,i.jsx)(s.p,{children:"Kibana can be started and stopped as follows:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"sudo systemctl stop kibana.service\r\nsudo systemctl start kibana.service\n"})}),"\n",(0,i.jsxs)(s.p,{children:["These commands provide no feedback as to whether Kibana was started successfully or not. Instead, this information will be written in the log files located in ",(0,i.jsx)(s.em,{children:"/var/log/kibana/"}),". Kibana loads its configuration from the ",(0,i.jsx)(s.em,{children:"/etc/kibana/kibana.yml"})," file by default. Examples:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"elasticsearch.url:"})," Default: ",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.a,{href:"http://localhost:9200",children:"http://localhost:9200"})})," The URL of the Elasticsearch instance to use for all your queries."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.port:"})," Server port for the Kibana web UI - ",(0,i.jsx)(s.em,{children:"default 5601"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.host:"})," Specifies the address to which the Kibana server will bind. IP addresses and host names are both valid values. The default is ",(0,i.jsx)(s.em,{children:"localhost"}),", which usually means remote machines will not be able to connect. To allow connections from remote users, set this parameter to a non-loopback address."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"console.enabled:"}),"  Default: true Set to false to disable Console."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"elasticsearch.username:"})," s. below"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"elasticsearch.password:"})," If your Elasticsearch is protected with basic authentication, these settings provide the username and password that the Kibana server uses to perform maintenance on the Kibana index at startup. Your Kibana users still need to authenticate with Elasticsearch, which is proxied through the Kibana server. (see X-Pack below)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.ssl.enabled:"})," Default: 'false' Enables SSL for outgoing requests from the Kibana server to the browser. When set to true, server.ssl.certificate and server.ssl.key are required"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.ssl.certificate:"})," s. below"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.ssl.key:"})," Paths to the PEM-format SSL certificate and SSL key files, respectively."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.ssl.certificateAuthorities:"})," List of paths to PEM encoded certificate files that should be trusted."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.ssl.cipherSuites:"})," Default: ",(0,i.jsx)(s.em,{children:"ECDHE-RSA-AES128-GCM-SHA256, ECDHE-ECDSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-ECDSA-AES256-GCM-SHA384, DHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES128-SHA256, DHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, DHE-RSA-AES256-SHA384, ECDHE-RSA-AES256-SHA256, DHE-RSA-AES256-SHA256, HIGH,!aNULL, !eNULL, !EXPORT, !DES, !RC4, !MD5, !PSK, !SRP, !CAMELLIA"}),". Details on the format, and the valid options, are available via the ",(0,i.jsx)(s.a,{href:"https://www.openssl.org/docs/man1.0.2/apps/ciphers.html#CIPHER-LIST-FORMAT",children:"OpenSSL cipher list format documentation"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.ssl.keyPassphrase:"})," The passphrase that will be used to decrypt the private key. This value is optional as the key may not be encrypted."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.ssl.redirectHttpFromPort:"})," Kibana will bind to this port and redirect all http requests to https over the port configured as server.port."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.ssl.supportedProtocols:"})," ",(0,i.jsx)(s.em,{children:"Default"}),": TLSv1, TLSv1.1, TLSv1.2 Supported protocols with versions. Valid protocols: TLSv1, TLSv1.1, TLSv1.2"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"status.allowAnonymous:"})," Default: false If authentication is enabled, setting this to true allows unauthenticated users to access the Kibana server status API and status page."]}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Default Location"}),(0,i.jsx)(s.th,{children:"Setting"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"home"}),(0,i.jsx)(s.td,{children:"Kibana home directory or $KIBANA_HOME"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"/usr/share/kibana"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"bin"}),(0,i.jsx)(s.td,{children:"Binary scripts including kibana to start the Kibana server and kibana-plugin to install plugins"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"/usr/share/kibana/bin"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"config"}),(0,i.jsx)(s.td,{children:"Configuration files including kibana.yml"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"/etc/kibana"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"data"}),(0,i.jsx)(s.td,{children:"The location of the data files written to disk by Kibana and its plugins"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"/var/lib/kibana"})}),(0,i.jsx)(s.td,{children:"path.data"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"optimize"}),(0,i.jsx)(s.td,{children:"Transpiled source code. Certain administrative actions (e.g. plugin install) result in the source code being retranspiled on the fly."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"/usr/share/kibana/optimize"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"plugins"}),(0,i.jsx)(s.td,{children:"Plugin files location. Each plugin will be contained in a subdirectory."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"/usr/share/kibana/plugins"})}),(0,i.jsx)(s.td,{})]})]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Useful Links:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/elastic/cookbook-elasticsearch/tree/4.0.0-beta",children:"Elasticsearch Cookbook"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/elastic/ansible-elasticsearch",children:"Ansible Elasticsearch"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://www.elastic.co/blog/deploying-elasticsearch-200-with-chef",children:"Deploying Elasticsearch"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://docs.chef.io/elasticsearch_and_kibana_auth.html",children:"Chef.io"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://qbox.io/blog/how-to-lock-down-elasticsearch-kibana-logstash-maintain-security",children:"Maintain Security"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://mapr.com/blog/how-secure-elasticsearch-and-kibana/",children:"Secure Elasticsearch and Kibana"})}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,t.ah)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},603905:(e,s,n)=>{n.d(s,{ah:()=>h});var i=n(667294);function t(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function r(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?r(Object(n),!0).forEach((function(s){t(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}function l(e,s){if(null==e)return{};var n,i,t=function(e,s){if(null==e)return{};var n,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],s.indexOf(n)>=0||(t[n]=e[n]);return t}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=i.createContext({}),h=function(e){var s=i.useContext(c),n=s;return e&&(n="function"==typeof e?e(s):a(a({},s),e)),n},o={inlineCode:"code",wrapper:function(e){var s=e.children;return i.createElement(i.Fragment,{},s)}},d=i.forwardRef((function(e,s){var n=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),x=h(n),j=t,u=x["".concat(c,".").concat(j)]||x[j]||o[j]||r;return n?i.createElement(u,a(a({ref:s},d),{},{components:n})):i.createElement(u,a({ref:s},d))}));d.displayName="MDXCreateElement"},462864:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/photo-11627438213_027c318e02_o.jpg-fb09c8a4f690706033a1e1ca8f6a3f88.png"}}]);