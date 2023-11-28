"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[79315],{663986:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(785893),o=t(603905);const r={sidebar_position:5010,slug:"2022-05-29",title:"Hashicorp Nomad with NGINX Loadbalancer",authors:"mpolinowski",tags:["Nomad","Consul","LINUX","NGINX"]},i=void 0,s={id:"DevOps/Hashicorp/2022-05-29-hashicorp-nomad-with-nginx-loadbalancer/index",title:"Hashicorp Nomad with NGINX Loadbalancer",description:"Shen Zhen, China",source:"@site/docs/DevOps/Hashicorp/2022-05-29-hashicorp-nomad-with-nginx-loadbalancer/index.md",sourceDirName:"DevOps/Hashicorp/2022-05-29-hashicorp-nomad-with-nginx-loadbalancer",slug:"/DevOps/Hashicorp/2022-05-29-hashicorp-nomad-with-nginx-loadbalancer/2022-05-29",permalink:"/docs/DevOps/Hashicorp/2022-05-29-hashicorp-nomad-with-nginx-loadbalancer/2022-05-29",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2022-05-29-hashicorp-nomad-with-nginx-loadbalancer/index.md",tags:[{label:"Nomad",permalink:"/docs/tags/nomad"},{label:"Consul",permalink:"/docs/tags/consul"},{label:"LINUX",permalink:"/docs/tags/linux"},{label:"NGINX",permalink:"/docs/tags/nginx"}],version:"current",sidebarPosition:5010,frontMatter:{sidebar_position:5010,slug:"2022-05-29",title:"Hashicorp Nomad with NGINX Loadbalancer",authors:"mpolinowski",tags:["Nomad","Consul","LINUX","NGINX"]},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Waypoint with Docker",permalink:"/docs/DevOps/Hashicorp/2022-06-07-hashicorp-waypoint-docker/2022-06-07"},next:{title:"Hashicorp Nomad to set up an Elasticsearch Cluster Part II",permalink:"/docs/DevOps/Hashicorp/2022-05-28-hashicorp-nomad-for-elastic-part-2/2022-05-28"}},c={},l=[{value:"NGINX",id:"nginx",level:2}];function p(n){const e={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.ah)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Shen Zhen, China",src:t(223752).Z+"",width:"2230",height:"839"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"#nginx",children:"NGINX"})}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"nginx",children:"NGINX"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"https://learn.hashicorp.com/tutorials/nomad/load-balancing-nginx",children:"https://learn.hashicorp.com/tutorials/nomad/load-balancing-nginx"}),"\n",(0,a.jsx)(e.a,{href:"https://www.hashicorp.com/blog/configuring-third-party-loadbalancers-with-consul-nginx-haproxy-f5",children:"https://www.hashicorp.com/blog/configuring-third-party-loadbalancers-with-consul-nginx-haproxy-f5"}),"\n",(0,a.jsx)(e.a,{href:"https://learn.hashicorp.com/tutorials/nomad/external-application-load-balancing?in=nomad/load-balancing",children:"https://learn.hashicorp.com/tutorials/nomad/external-application-load-balancing?in=nomad/load-balancing"}),"\n",(0,a.jsx)(e.a,{href:"https://www.nomadproject.io/docs/job-specification/gateway",children:"https://www.nomadproject.io/docs/job-specification/gateway"}),"\n",(0,a.jsx)(e.a,{href:"https://www.consul.io/docs/connect/gateways/ingress-gateway",children:"https://www.consul.io/docs/connect/gateways/ingress-gateway"}),"\n",(0,a.jsx)(e.a,{href:"https://www.consul.io/docs/agent/config-entries",children:"https://www.consul.io/docs/agent/config-entries"}),"\n",(0,a.jsx)(e.a,{href:"https://learn.hashicorp.com/tutorials/consul/service-mesh-ingress-gateways",children:"https://learn.hashicorp.com/tutorials/consul/service-mesh-ingress-gateways"})]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'job "nginx" {\n  datacenters = ["dc1"]\n  type = "service"\n  group "nginx" {\n    count = 3\n    task "nginx" {\n      driver = "docker"\n      config {\n        image = "nginx"\n        port_map {\n          http = 8080\n        }\n        port_map {\n          https = 443\n        }\n        volumes = [\n          "custom/default.conf:/etc/nginx/conf.d/default.conf"\n        ]\n      }\n      template {\n        data = <<EOH\n          server {\n            listen 8080;\n            server_name nginx.service.consul;\n            location /nginx {\n              root /local/data;\n            }\n          }\n        EOH\n        destination = "custom/default.conf"\n      }\n      # consul kv put features/demo \'Consul Rocks!\'\n     template {\n        data = <<EOH\n        Nomad Template example (Consul value)\n        <br />\n        <br />\n        {{ if keyExists "features/demo" }}\n        Consul Key Value:  {{ key "features/demo" }}\n        {{ else }}\n          Good morning.\n        {{ end }}\n        <br />\n        <br />\n        Node Environment Information:  <br />\n        node_id:     {{ env "node.unique.id" }} <br/>\n        datacenter:  {{ env "NOMAD_DC" }}\n        EOH\n        destination = "local/data/nginx/index.html"\n      }\n      resources {\n        cpu    = 100 # 100 MHz\n        memory = 128 # 128 MB\n        network {\n          mbits = 10\n          port "http" {\n              static = 8080\n          }\n          port "https" {\n              static= 443\n          }\n        }\n      }\n      service {\n        name = "nginx"\n        tags = [ "nginx", "web", "urlprefix-/nginx" ]\n        port = "http"\n        check {\n          type     = "tcp"\n          interval = "10s"\n          timeout  = "2s"\n        }\n      }\n    }\n  }\n}\n'})})]})}function d(n={}){const{wrapper:e}={...(0,o.ah)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},603905:(n,e,t)=>{t.d(e,{ah:()=>l});var a=t(667294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=a.createContext({}),l=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,c=n.parentName,d=s(n,["components","mdxType","originalType","parentName"]),h=l(t),u=o,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||r;return t?a.createElement(m,i(i({ref:e},d),{},{components:t})):a.createElement(m,i({ref:e},d))}));d.displayName="MDXCreateElement"},223752:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-6c1edb088dfea3a7d39f8eebb8e9dc23.jpg"}}]);