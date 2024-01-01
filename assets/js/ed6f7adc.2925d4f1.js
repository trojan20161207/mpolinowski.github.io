"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[79662],{55789:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=t(785893),i=t(603905);const r={sidebar_position:5040,slug:"2022-05-26",title:"App Deployment with Hashicorp Nomad from Gitlab Part Deux",authors:"mpolinowski",tags:["Nomad","Consul","LINUX"]},a=void 0,s={id:"DevOps/Hashicorp/2022-05-26-hashicorp-nomad-with-gitlab-part-2/index",title:"App Deployment with Hashicorp Nomad from Gitlab Part Deux",description:"Shen Zhen, China",source:"@site/docs/DevOps/Hashicorp/2022-05-26-hashicorp-nomad-with-gitlab-part-2/index.md",sourceDirName:"DevOps/Hashicorp/2022-05-26-hashicorp-nomad-with-gitlab-part-2",slug:"/DevOps/Hashicorp/2022-05-26-hashicorp-nomad-with-gitlab-part-2/2022-05-26",permalink:"/docs/DevOps/Hashicorp/2022-05-26-hashicorp-nomad-with-gitlab-part-2/2022-05-26",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2022-05-26-hashicorp-nomad-with-gitlab-part-2/index.md",tags:[{label:"Nomad",permalink:"/docs/tags/nomad"},{label:"Consul",permalink:"/docs/tags/consul"},{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:5040,frontMatter:{sidebar_position:5040,slug:"2022-05-26",title:"App Deployment with Hashicorp Nomad from Gitlab Part Deux",authors:"mpolinowski",tags:["Nomad","Consul","LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Nomad to set up an Elasticsearch Cluster",permalink:"/docs/DevOps/Hashicorp/2022-05-27-hashicorp-nomad-for-elastic/2022-05-27"},next:{title:"App Deployment with Hashicorp Nomad from Gitlab",permalink:"/docs/DevOps/Hashicorp/2022-05-25-hashicorp-nomad-with-gitlab/2022-05-25"}},c={},l=[{value:"Run a Docker Image with Gitlab Artifacts",id:"run-a-docker-image-with-gitlab-artifacts",level:2},{value:"Configuration Artifacts",id:"configuration-artifacts",level:3},{value:"Adding Volumes",id:"adding-volumes",level:3}];function d(n){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.ah)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Shen Zhen, China",src:t(764620).Z+"",width:"2230",height:"839"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"#run-a-docker-image-with-gitlab-artifacts",children:"Run a Docker Image with Gitlab Artifacts"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"#configuration-artifacts",children:"Configuration Artifacts"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"#adding-volumes",children:"Adding Volumes"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"run-a-docker-image-with-gitlab-artifacts",children:"Run a Docker Image with Gitlab Artifacts"}),"\n",(0,o.jsx)(e.p,{children:"I now want to run an ingress container for an existing web service. So far the NGINX ingress is configured to proxy-pass a couple of web frontend containers and direct traffic into that Docker cluster:"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.em,{children:"default.conf"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-conf",children:"server {\n    listen 80;\n    listen [::]:80;\n\n    server_name wiki.instar.com;\n\n    return 301 https://$server_name$request_uri;\n}\n\n\nserver {\n    listen 443 ssl http2 default_server;\n    listen [::]:443 ssl;\n    ssl_certificate /opt/letsencrypt/live/wiki.instar.com/fullchain.pem;\n    ssl_certificate_key /opt/letsencrypt/live/wiki.instar.com/privkey.pem;\n    # include ssl/self-signed.conf;\n    include ssl/ssl-params.conf;\n    include /etc/nginx/conf.d/header.conf;\n\n    server_name wiki.instar.com;\n\n    location / {\n        rewrite ^/(.*)$  /en/$1  permanent;\n    }\n\n    location /de/ {\n      proxy_pass http://wiki_de:9999/;\n    }\n\n    location /en/ {\n      proxy_pass http://wiki_en:8888/;\n    }\n\n    location /fr/ {\n       proxy_pass http://wiki_fr:7777/;\n    }\n    \n    location ~ /dl/.* {\n        root /opt/wiki_downloads/;\n        add_before_body /dl/theme/header.html;\n        add_after_body /dl/theme/footer.html;\n        autoindex on;\n        autoindex_exact_size off;\n        autoindex_format html;\n        autoindex_localtime on;\n    }\n\n\n    error_page  404 /404.html;\n    error_page  500 502 503 504 /50x.html;\n    location = /50x.html {\n    root   /usr/share/nginx/html;\n  }\n}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["I was using a docker network to lock-down access to those containers - except traffic that was using the ingress. Which also allowed me to use the Docker DNS service to point NGINX to those front ends: ",(0,o.jsx)(e.code,{children:"proxy_pass http://wiki_de:9999/"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["With Nomad I guess I now have to run those containers on the host network instead and ",(0,o.jsx)(e.code,{children:"proxy_pass"})," from ",(0,o.jsx)(e.code,{children:"localhost"})," instead. This is not an issue, though. As I can bind those ports to ",(0,o.jsx)(e.code,{children:"localhost"})," and/or use the firewall to block all direct traffic."]}),"\n",(0,o.jsx)(e.p,{children:"I can spin up each of those containers using Nomad. Unlike before I am not using a dynamic port, but instead make it static for now (I am planing to add Consul to the mix later to handle the service discovery - but let's keep it simple'ish for now):"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'job "wiki_de" {\n\tdatacenters = ["instaryun"]\n\n\tgroup "wiki_de" {\n    count = 1\n        \n\t\tnetwork {\n\t\t\tmode = "host"\n\t\t\tport "http" {\n\t\t\t\tstatic = "9999"\n\t\t\t}\n\t\t}\n\n\t\ttask "container" {\n\t\t\tdriver = "docker"\n\n\t\t\tconfig {\n\t\t\t\timage = "mygitlab.mydomain.com:12345/wiki/wiki_de_mdx"\n\t\t\t\tports = ["http"]\n\n        auth {\n          username = "mynomaduserongitlab"\n          password = "acomplicatedpassword"\n        }\n\t\t\t}\n\t\t}\n\t}\n}\n'})}),"\n",(0,o.jsx)(e.h3,{id:"configuration-artifacts",children:"Configuration Artifacts"}),"\n",(0,o.jsxs)(e.p,{children:["So there are three of those services and the last one is a file server - a download area. I can create this inside the Ingress job specification using the ",(0,o.jsx)(e.strong,{children:"Artifact Stanza"}),". This also takes care of the ",(0,o.jsx)(e.a,{href:"https://github.com/mpolinowski/nginx_docker_ingress",children:"NGINX configuration files"})," that I source control on Gitlab:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'locals {\n  ports = [\n    {\n      port_label = "http"\n      port       = 80\n    },\n    {\n      port_label = "https"\n      port       = 443\n    }\n  ]\n}\n\njob "wiki_ingress" {\n  datacenters = ["instaryun"]\n\n  group "nginx" {\n    count = 1\n\n    network {\n      mode = "host"\n      dynamic "port" {\n        for_each = local.ports\n        labels   = [port.value.port_label]\n\n        content {\n          to = port.value.port\n        }\n      }\n    }\n\n    service {\n      name = "nginx"\n    }\n\n    volume "letsencrypt" {\n        type      = "host"\n        read_only = true\n        source    = "letsencrypt"\n    }\n\n    task "ingress_container" {\n      driver = "docker"\n\n      volume_mount {\n            volume      = "letsencrypt"\n            destination = "/opt/letsencrypt" #in the container\n            read_only   = false\n      }\n\n      config {\n        network_mode = "host"\n        image = "nginx:1.23.0-alpine"\n        ports = ["http","https"]\n        volumes = [\n          "local/nginx/configuration/conf.d:/etc/nginx/conf.d",\n          "local/nginx/configuration/ssl:/etc/nginx/ssl",\n          "local/nginx/configuration/nginx.conf:/etc/nginx/nginx.conf",\n          "local/wiki_downloads:/opt/wiki_downloads",\n        ]\n      }\n\n      artifact {\n        source      = "git::git@my.gitlab.address.com/group/wiki_ingress.git"\n        destination = "local/nginx"\n        options {\n          sshkey = "${base64encode(file(pathexpand("/etc/nomad.d/.ssh/id_rsa")))}"\n          depth = 1\n        }\n      }\n\n      artifact {\n        source      = "git::git@my.gitlab.address.com/group/wiki_downloads.git"\n        destination = "local/wiki_downloads"\n        options {\n          sshkey = "${base64encode(file(pathexpand("/etc/nomad.d/.ssh/id_rsa")))}"\n          depth = 1\n        }\n      }      \n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(e.h3,{id:"adding-volumes",children:"Adding Volumes"}),"\n",(0,o.jsxs)(e.p,{children:["You should first create the volume path before nomad is starting, then add the following configs in your client.hcl file [",(0,o.jsx)(e.a,{href:"https://www.nomadproject.io/docs/drivers/docker#client-requirements",children:"Plugin Stanza"})," | ",(0,o.jsx)(e.a,{href:"https://www.nomadproject.io/docs/configuration/client#host_volume-stanza",children:"Host Volume Stanza"}),"]:"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.em,{children:"nano /etc/nomad.d/client.hcl"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'\nclient {\n  enabled = true\n  servers = ["myhost:port"]\n  host_volume "letsencrypt" {\n    path = "/etc/letsencrypt"\n    read_only = true\n  }\n}\n\n# Docker Configuration\nplugin "docker" {\n    volumes {\n      enabled = true\n    }\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["And then in the job specifications, inside the ",(0,o.jsx)(e.strong,{children:"Group Stanza"})," define the ",(0,o.jsx)(e.a,{href:"https://www.nomadproject.io/docs/job-specification/volume#volume-interpolation",children:"volume"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'volume "letsencrypt" {\n     type      = "host"\n     read_only = true\n     source    = "letsencrypt"\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["and then finally add following in the ",(0,o.jsx)(e.strong,{children:"Task Stanza"})," use the defined volume:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'volume_mount {\n      volume      = "letsencrypt"\n      destination = "/opt/letsencrypt" #<-- in the container\n      read_only   = false\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"That is a bit complicated for a simple volume mount...."})]})}function h(n={}){const{wrapper:e}={...(0,i.ah)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},603905:(n,e,t)=>{t.d(e,{ah:()=>l});var o=t(667294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var c=o.createContext({}),l=function(n){var e=o.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},d={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,c=n.parentName,h=s(n,["components","mdxType","originalType","parentName"]),p=l(t),u=i,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||r;return t?o.createElement(m,a(a({ref:e},h),{},{components:t})):o.createElement(m,a({ref:e},h))}));h.displayName="MDXCreateElement"},764620:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-6c1edb088dfea3a7d39f8eebb8e9dc23.jpg"}}]);