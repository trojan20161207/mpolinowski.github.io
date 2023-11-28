"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[61567],{883555:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var a=r(785893),t=r(603905);const i={sidebar_position:8020,slug:"2021-03-30",title:"Elasticsearch 7 and Filebeats",authors:"mpolinowski",tags:["LINUX","Elasticsearch","Docker"]},s=void 0,c={id:"DevOps/Elasticsearch/2021-03-30-elasticsearch7-and-filebeats/index",title:"Elasticsearch 7 and Filebeats",description:"Harbin, China",source:"@site/docs/DevOps/Elasticsearch/2021-03-30-elasticsearch7-and-filebeats/index.md",sourceDirName:"DevOps/Elasticsearch/2021-03-30-elasticsearch7-and-filebeats",slug:"/DevOps/Elasticsearch/2021-03-30-elasticsearch7-and-filebeats/2021-03-30",permalink:"/docs/DevOps/Elasticsearch/2021-03-30-elasticsearch7-and-filebeats/2021-03-30",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Elasticsearch/2021-03-30-elasticsearch7-and-filebeats/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Elasticsearch",permalink:"/docs/tags/elasticsearch"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:8020,frontMatter:{sidebar_position:8020,slug:"2021-03-30",title:"Elasticsearch 7 and Filebeats",authors:"mpolinowski",tags:["LINUX","Elasticsearch","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Elastic Filebeat and Apache Access Logs",permalink:"/docs/DevOps/Elasticsearch/2021-03-31-elastic-filebeats-for-apache-logs/2021-03-31"},next:{title:"Elasticsearch 7 Data Transformation",permalink:"/docs/DevOps/Elasticsearch/2021-03-29-elasticsearch7-data-transformations/2021-03-29"}},l={},o=[{value:"Installation",id:"installation",level:2},{value:"Setting Up Elasticsearch",id:"setting-up-elasticsearch",level:3},{value:"Setting Up Kibana",id:"setting-up-kibana",level:3},{value:"Setting Up Filebeat",id:"setting-up-filebeat",level:3},{value:"Using Filebeats Modules",id:"using-filebeats-modules",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.ah)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Harbin, China",src:r(581438).Z+"",width:"1500",height:"597"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#installation",children:"Installation"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#setting-up-elasticsearch",children:"Setting Up Elasticsearch"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#setting-up-kibana",children:"Setting Up Kibana"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#setting-up-filebeat",children:"Setting Up Filebeat"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#using-filebeats-modules",children:"Using Filebeats Modules"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(n.p,{children:"Start by pulling the a fresh version of Elasticsearch, Kibana, (Logstash) and Filebeat:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"https://www.docker.elastic.co/r/elasticsearch"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"https://www.docker.elastic.co/r/kibana"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"https://www.docker.elastic.co/r/logstash"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"https://www.docker.elastic.co/r/beats"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker pull docker.elastic.co/elasticsearch/elasticsearch:7.14.0-amd64\r\ndocker pull docker.elastic.co/kibana/kibana:7.14.0-amd64\r\ndocker pull docker.elastic.co/logstash/logstash-oss:7.14.0-arm64\r\ndocker pull docker.elastic.co/beats/filebeat-oss:7.14.0-amd64\n"})}),"\n",(0,a.jsxs)(n.p,{children:["I will create a folder ",(0,a.jsx)(n.code,{children:"mkdir -p /opt/beats/config/"})," and continue working from there."]}),"\n",(0,a.jsx)(n.h3,{id:"setting-up-elasticsearch",children:"Setting Up Elasticsearch"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nano /opt/beats/config/elasticsearch.yml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["I will use the ",(0,a.jsx)(n.a,{href:"https://github.com/elastic/dockerfiles/blob/7.14/elasticsearch/config/elasticsearch.yml",children:"default Elasticsearch config"})," and might edit it later on:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:'cluster.name: "elastic-cluster"\r\nnetwork.host: 0.0.0.0\r\nxpack.security.enabled: false\r\nxpack.monitoring.enabled: false\r\nxpack.enrich.enabled: false\r\ndiscovery.type: "single-node"\r\nbootstrap.memory_lock: true\n'})}),"\n",(0,a.jsx)(n.p,{children:"I will run the docker container on my host network:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run -d \\\r\n  --name elasticsearch \\\r\n  --net=host \\\r\n  -v /opt/beats/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml \\\r\n  docker.elastic.co/elasticsearch/elasticsearch:7.14.0-amd64\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["To persist your Elasticsearch data add another volume: ",(0,a.jsx)(n.code,{children:"-v /opt/beats/esdata:/usr/share/elasticsearch/data"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Wait a few second and verify that Elasticsearch is running:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl localhost:9200                   \r\n{\r\n  "name" : "debian11",\r\n  "cluster_name" : "elastic-cluster",\r\n  "cluster_uuid" : "JJ4wNCADSmq8_xT_BKhMdw",\r\n  "version" : {\r\n    "number" : "7.14.0",\r\n    "build_flavor" : "default",\r\n    "build_type" : "docker",\r\n    "build_hash" : "dd5a0a2acaa2045ff9624f3729fc8a6f40835aa1",\r\n    "build_date" : "2021-07-29T20:49:32.864135063Z",\r\n    "build_snapshot" : false,\r\n    "lucene_version" : "8.9.0",\r\n    "minimum_wire_compatibility_version" : "6.8.0",\r\n    "minimum_index_compatibility_version" : "6.0.0-beta1"\r\n  },\r\n  "tagline" : "You Know, for Search"\r\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"setting-up-kibana",children:"Setting Up Kibana"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nano /opt/beats/config/kibana.yml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["I will use the ",(0,a.jsx)(n.a,{href:"https://github.com/elastic/dockerfiles/blob/7.14/kibana/config/kibana.yml",children:"default Kibana config"})," and might edit it later on:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:'server.host: "0"\r\nserver.shutdownTimeout: "5s"\r\nelasticsearch.hosts: [ "http://localhost:9200" ]\r\n# elasticsearch.username: "elastic"\r\n# elasticsearch.password: "changeme"\r\nxpack.monitoring.elasticsearch.username: "elastic"\r\nxpack.monitoring.elasticsearch.password: "changeme"\r\nmonitoring.ui.container.elasticsearch.enabled: true\n'})}),"\n",(0,a.jsx)(n.p,{children:"I will run the docker container on my host network:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run -d \\\r\n  --name kibana \\\r\n  --net=host \\\r\n  -v /opt/beats/config/kibana.yml:/usr/share/kibana/config/kibana.yml \\\r\n  docker.elastic.co/kibana/kibana:7.14.0-amd64\n"})}),"\n",(0,a.jsx)(n.p,{children:"Check if everything is connecting:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'docker logs kibana\r\n\r\n...\r\n\r\n{"type":"log","@timestamp":"2021-08-09T06:44:07+00:00","tags":["info","status"],"pid":1213,"message":"Kibana is now available (was unavailable)"}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Make sure that you can access your Elastic Cluster from another system:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ufw allow 9200/tcp\r\nufw allow 5601/tcp\n"})}),"\n",(0,a.jsx)(n.p,{children:"And open the Kibana frontend inside your web browser:"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"http://[my-cluster-ip]:5601/app/home#/"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"setting-up-filebeat",children:"Setting Up Filebeat"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nano /opt/beats/config/filebeat.yml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["I will use the ",(0,a.jsx)(n.a,{href:"https://raw.githubusercontent.com/elastic/beats/7.8/deploy/docker/filebeat.docker.yml",children:"default Filebeat config"})," and might edit it later on:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:"filebeat.config:\r\n  modules:\r\n    path: ${path.config}/modules.d/*.yml # enable all modules (nginx, kafka, redis, etc)\r\n    reload.enabled: false\r\n\r\nfilebeat.autodiscover: # auto-discover tagged docker container\r\n  providers:\r\n    - type: docker\r\n      hints.enabled: true\r\n\r\nprocessors:\r\n# - add_cloud_metadata: ~ # for AWS, GCO, Azure etc.\r\n- add_docker_metadata: ~ # add docker metadata (container id, name, image and labels)\r\n\r\noutput.elasticsearch:\r\n  hosts: 'localhost:9200'\r\n  username: 'elastic'\r\n  password: 'changeme'\n"})}),"\n",(0,a.jsx)(n.p,{children:"The beat configuration file must belong to the root user and all write permissions for other users must be revoked:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"chown root:root /opt/beats/config/filebeat.yml\r\nchmod go-w /opt/beats/config/filebeat.yml\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"-rw-r--r-- 1 root root  202 14:36 elasticsearch.yml\r\n-rw-r--r-- 1 root root  511 15:04 filebeat.yml\r\n-rw-r--r-- 1 root root  250 14:43 kibana.yml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We need tp bind the location of docker container directory ",(0,a.jsx)(n.code,{children:"/var/lib/docker/containers"})," and our docker socket ",(0,a.jsx)(n.code,{children:"/var/run/docker.sock"})," to the container (",(0,a.jsxs)(n.strong,{children:["Why? EDIT: For the Docker auto-discovery - remember to run container as ",(0,a.jsx)(n.code,{children:"root"})," user!"]}),"):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run -d \\\r\n  --name filebeat \\\r\n  --user root \\\r\n  --net=host \\\r\n  -v /opt/beats/config/filebeat.yml:/usr/share/filebeat/filebeat.yml \\\r\n  -v /var/lib/docker/containers:/var/lib/docker/containers:ro \\\r\n  -v /var/run/docker.sock:/var/run/docker.sock:ro \\\r\n  docker.elastic.co/beats/filebeat-oss:7.14.0-amd64\n"})}),"\n",(0,a.jsx)(n.p,{children:"Check if everything started  up:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker logs filebeat\r\n\r\n...\r\n\r\n2021-08-09T07:15:53.744Z INFO Index Alias filebeat-7.14.0 successfully created.\r\n2021-08-09T07:15:53.745Z INFO Connection to backoff(elasticsearch(http://localhost:9200)) established\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Switch over to ",(0,a.jsx)(n.strong,{children:"Kibana"})," and you should see that new indices were created:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Elastic Stack Filebeat",src:r(269671).Z+"",width:"1262",height:"177"})}),"\n",(0,a.jsx)(n.p,{children:"The created index hauls plenty of information about your docker cluster:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Elastic Stack Filebeat",src:r(296422).Z+"",width:"1527",height:"765"})}),"\n",(0,a.jsx)(n.h2,{id:"using-filebeats-modules",children:"Using Filebeats Modules"}),"\n",(0,a.jsxs)(n.p,{children:["As mentioned before, Filebeat comes with a bunch ",(0,a.jsx)(n.a,{href:"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-modules.html",children:"Filebeat Modules"})," that we can use to keep an eye on running containers. All that is needed to, e.g. feeding the webserver log of an ",(0,a.jsx)(n.a,{href:"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-module-nginx.html",children:"NGINX Container into Elasticsearch"}),", is to tag the container with ",(0,a.jsx)(n.code,{children:"co.elastic.logs/module=nginx"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run --label co.elastic.logs/module=nginx --name ingress -d -p 8080:80 nginx:1.21.1-alpine\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can test that the container is running:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker ps --filter 'label=co.elastic.logs/module=nginx'\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'curl localhost:8080\r\n\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n<title>Welcome to nginx!</title>\r\n<style>\r\n    body {\r\n        width: 35em;\r\n        margin: 0 auto;\r\n        font-family: Tahoma, Verdana, Arial, sans-serif;\r\n    }\r\n</style>\r\n</head>\r\n<body>\r\n<h1>Welcome to nginx!</h1>\r\n<p>If you see this page, the nginx web server is successfully installed and\r\nworking. Further configuration is required.</p>\r\n\r\n<p>For online documentation and support please refer to\r\n<a href="http://nginx.org/">nginx.org</a>.<br/>\r\nCommercial support is available at\r\n<a href="http://nginx.com/">nginx.com</a>.</p>\r\n\r\n<p><em>Thank you for using nginx.</em></p>\r\n</body>\r\n</html>\n'})}),"\n",(0,a.jsxs)(n.p,{children:['I could not find the "Refresh Button" that should be in the ',(0,a.jsx)(n.strong,{children:"Index Pattern"})," menu in Kibana - so I rebuild the pattern and filtered for my ingress:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Elastic Stack Filebeat",src:r(296422).Z+"",width:"1527",height:"765"})}),"\n",(0,a.jsx)(n.p,{children:"A typical NGINX event looks like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\r\n  "_index": "filebeat-7.14.0-2021.08.09-000001",\r\n  "_type": "_doc",\r\n  "_id": "Wx4gKnsBSe-TBw4pQoBr",\r\n  "_score": 1,\r\n  "_source": {\r\n    "container": {\r\n      "image": {\r\n        "name": "nginx:1.21.1-alpine"\r\n      },\r\n      "name": "ingress",\r\n      "id": "0b0ade2ce1fdee72d32db7b53ef566f9fe2314805cc1fa4b35649c7addb1c63a",\r\n      "labels": {\r\n        "co_elastic_logs/module": "nginx",\r\n        "maintainer": "NGINX Docker Maintainers <docker-maint@nginx.com>"\r\n      }\r\n    },\r\n    "agent": {\r\n      "hostname": "debian11",\r\n      "name": "debian11",\r\n      "id": "c73ef337-3347-4bf7-a753-9b11c3d48c3c",\r\n      "type": "filebeat",\r\n      "ephemeral_id": "6bfa1f1f-917c-4bc6-9aa5-3b447362fab6",\r\n      "version": "7.14.0"\r\n    },\r\n    "log": {\r\n      "file": {\r\n        "path": "/var/lib/docker/containers/0b0ade2ce1fdee72d32db7b53ef566f9fe2314805cc1fa4b35649c7addb1c63a/0b0ade2ce1fdee72d32db7b53ef566f9fe2314805cc1fa4b35649c7addb1c63a-json.log"\r\n      },\r\n      "offset": 3343\r\n    },\r\n    "fileset": {\r\n      "name": "ingress_controller"\r\n    },\r\n    "error": {\r\n      "message": "Provided Grok expressions do not match field value: [192.168.2.110 - - [09/Aug/2021:08:55:58 +0000] \\\\\\"GET /favicon.ico HTTP/1.1\\\\\\" 404 555 \\\\\\"http://192.168.2.111:8080/\\\\\\" \\\\\\"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36\\\\\\" \\\\\\"-\\\\\\"]"\r\n    },\r\n    "docker": {\r\n      "container": {\r\n        "labels": {\r\n          "co_elastic_logs/module": "nginx",\r\n          "maintainer": "NGINX Docker Maintainers <docker-maint@nginx.com>"\r\n        }\r\n      }\r\n    },\r\n    "input": {\r\n      "type": "container"\r\n    },\r\n    "@timestamp": "2021-08-09T08:55:58.767Z",\r\n    "ecs": {\r\n      "version": "1.10.0"\r\n    },\r\n    "stream": "stdout",\r\n    "service": {\r\n      "type": "nginx"\r\n    },\r\n    "host": {\r\n      "name": "debian11"\r\n    },\r\n    "event": {\r\n      "ingested": "2021-08-09T08:56:02.398057609Z",\r\n      "original": "192.168.2.110 - - [09/Aug/2021:08:55:58 +0000] \\"GET /favicon.ico HTTP/1.1\\" 404 555 \\"http://192.168.2.111:8080/\\" \\"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36\\" \\"-\\"",\r\n      "timezone": "+00:00",\r\n      "module": "nginx",\r\n      "dataset": "nginx.ingress_controller"\r\n    }\r\n  },\r\n  "fields": {\r\n    "container.id": [\r\n      "0b0ade2ce1fdee72d32db7b53ef566f9fe2314805cc1fa4b35649c7addb1c63a"\r\n    ],\r\n    "service.type": [\r\n      "nginx"\r\n    ],\r\n    "agent.type": [\r\n      "filebeat"\r\n    ],\r\n    "container.name": [\r\n      "ingress"\r\n    ],\r\n    "container.image.name": [\r\n      "nginx:1.21.1-alpine"\r\n    ],\r\n    "event.module": [\r\n      "nginx"\r\n    ],\r\n    "stream": [\r\n      "stdout"\r\n    ],\r\n    "kubernetes.container.image": [\r\n      "nginx:1.21.1-alpine"\r\n    ],\r\n    "agent.name": [\r\n      "debian11"\r\n    ],\r\n    "host.name": [\r\n      "debian11"\r\n    ],\r\n    "event.timezone": [\r\n      "+00:00"\r\n    ],\r\n    "docker.container.labels.maintainer": [\r\n      "NGINX Docker Maintainers <docker-maint@nginx.com>"\r\n    ],\r\n    "event.original": [\r\n      "192.168.2.110 - - [09/Aug/2021:08:55:58 +0000] \\"GET /favicon.ico HTTP/1.1\\" 404 555 \\"http://192.168.2.111:8080/\\" \\"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36\\" \\"-\\""\r\n    ],\r\n    "fileset.name": [\r\n      "ingress_controller"\r\n    ],\r\n    "input.type": [\r\n      "container"\r\n    ],\r\n    "log.offset": [\r\n      3343\r\n    ],\r\n    "agent.hostname": [\r\n      "debian11"\r\n    ],\r\n    "docker.container.labels.co_elastic_logs/module": [\r\n      "nginx"\r\n    ],\r\n    "container.labels.maintainer": [\r\n      "NGINX Docker Maintainers <docker-maint@nginx.com>"\r\n    ],\r\n    "container.labels.co_elastic_logs/module": [\r\n      "nginx"\r\n    ],\r\n    "event.ingested": [\r\n      "2021-08-09T08:56:02.398Z"\r\n    ],\r\n    "@timestamp": [\r\n      "2021-08-09T08:55:58.767Z"\r\n    ],\r\n    "agent.id": [\r\n      "c73ef337-3347-4bf7-a753-9b11c3d48c3c"\r\n    ],\r\n    "ecs.version": [\r\n      "1.10.0"\r\n    ],\r\n    "error.message": [\r\n      "Provided Grok expressions do not match field value: [192.168.2.110 - - [09/Aug/2021:08:55:58 +0000] \\\\\\"GET /favicon.ico HTTP/1.1\\\\\\" 404 555 \\\\\\"http://192.168.2.111:8080/\\\\\\" \\\\\\"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36\\\\\\" \\\\\\"-\\\\\\"]"\r\n    ],\r\n    "log.file.path": [\r\n      "/var/lib/docker/containers/0b0ade2ce1fdee72d32db7b53ef566f9fe2314805cc1fa4b35649c7addb1c63a/0b0ade2ce1fdee72d32db7b53ef566f9fe2314805cc1fa4b35649c7addb1c63a-json.log"\r\n    ],\r\n    "agent.ephemeral_id": [\r\n      "6bfa1f1f-917c-4bc6-9aa5-3b447362fab6"\r\n    ],\r\n    "agent.version": [\r\n      "7.14.0"\r\n    ],\r\n    "event.dataset": [\r\n      "nginx.ingress_controller"\r\n    ]\r\n  }\r\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>o});var a=r(667294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),o=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),b=o(r),u=t,g=b["".concat(l,".").concat(u)]||b[u]||d[u]||i;return r?a.createElement(g,s(s({ref:n},h),{},{components:r})):a.createElement(g,s({ref:n},h))}));h.displayName="MDXCreateElement"},269671:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/Elastic_Filebeat_01-c6f4cad33b73846096825b0d6d34c170.png"},296422:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/Elastic_Filebeat_02-69c06419130d3d0b996848d1094a574c.png"},581438:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-7ac1ba107242c2ede8e267aedc6dfc19.jpg"}}]);