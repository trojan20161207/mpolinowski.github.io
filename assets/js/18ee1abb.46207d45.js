"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[2986],{576340:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=o(785893),t=o(603905);const r={sidebar_position:5090,slug:"2022-05-20",title:"Hashicorp Nomad with Consul Service Discovery",authors:"mpolinowski",tags:["Nomad","Consul","LINUX"]},a=void 0,i={id:"DevOps/Hashicorp/2022-05-20-hashicorp-dojo-nomad-consul/index",title:"Hashicorp Nomad with Consul Service Discovery",description:"Shen Zhen, China",source:"@site/docs/DevOps/Hashicorp/2022-05-20-hashicorp-dojo-nomad-consul/index.md",sourceDirName:"DevOps/Hashicorp/2022-05-20-hashicorp-dojo-nomad-consul",slug:"/DevOps/Hashicorp/2022-05-20-hashicorp-dojo-nomad-consul/2022-05-20",permalink:"/docs/DevOps/Hashicorp/2022-05-20-hashicorp-dojo-nomad-consul/2022-05-20",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2022-05-20-hashicorp-dojo-nomad-consul/index.md",tags:[{label:"Nomad",permalink:"/docs/tags/nomad"},{label:"Consul",permalink:"/docs/tags/consul"},{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:5090,frontMatter:{sidebar_position:5090,slug:"2022-05-20",title:"Hashicorp Nomad with Consul Service Discovery",authors:"mpolinowski",tags:["Nomad","Consul","LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Dojo Consul Refresher",permalink:"/docs/DevOps/Hashicorp/2022-05-21-hashicorp-dojo-consul-refresher/2022-05-21"},next:{title:"Hashicorp Nomad Access Control",permalink:"/docs/DevOps/Hashicorp/2022-05-19-hashicorp-dojo-nomad-access-control/2022-05-19"}},c={},d=[{value:"Consul Service Discovery",id:"consul-service-discovery",level:2},{value:"Use Nomad to Deploy Consul",id:"use-nomad-to-deploy-consul",level:3},{value:"Register your Service with Consul",id:"register-your-service-with-consul",level:3},{value:"Adding the Fabio Load Balancer",id:"adding-the-fabio-load-balancer",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Shen Zhen, China",src:o(995741).Z+"",width:"2230",height:"839"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Following this Dojo task I ended up with a Nomad-deployed Consul server running in dev mode on my Nomad minion. In the final step I wanted to use this service to tell FabioLB what ports the frontend container came up to. Fabio would generate routes for them and start load balancing the incoming traffic to the random ports of those containers... which did not happen."}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["I ",(0,s.jsx)(n.a,{href:"/docs/DevOps/Hashicorp/2022-05-21-hashicorp-dojo-consul-refresher/2022-05-21",children:"went ahead"})," and installed the Consul Master/Minion cluster the regular way and ",(0,s.jsx)(n.a,{href:"/docs/DevOps/Hashicorp/2022-05-22-hashicorp-dojo-nomad-consul-part-2/2022-05-22",children:"tried it again"}),". This time everything worked as expected."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#consul-service-discovery",children:"Consul Service Discovery"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#use-nomad-to-deploy-consul",children:"Use Nomad to Deploy Consul"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#register-your-service-with-consul",children:"Register your Service with Consul"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#adding-the-fabio-load-balancer",children:"Adding the Fabio Load Balancer"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Continuation of ",(0,s.jsx)(n.a,{href:"/docs/DevOps/Hashicorp/2022-05-18-hashicorp-dojo-nomad-adding-encryption/2022-05-18",children:"Hashicorp Nomad Dojo"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"consul-service-discovery",children:"Consul Service Discovery"}),"\n",(0,s.jsxs)(n.p,{children:["When two services need to communicate in a Nomad cluster, they need to know where to find each other and that's called Service Discovery. Because Nomad is purely a cluster manager and scheduler, you will need another piece of software to help you with service discovery: ",(0,s.jsx)(n.a,{href:"https://www.consul.io/",children:"Consul"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"use-nomad-to-deploy-consul",children:"Use Nomad to Deploy Consul"}),"\n",(0,s.jsxs)(n.p,{children:["To deploy Consul we can execute the service directly through Nomad using the ",(0,s.jsx)(n.strong,{children:"Execute Driver"}),". To run a binary you have two options: ",(0,s.jsx)(n.code,{children:"exec"})," and ",(0,s.jsx)(n.code,{children:"raw_exec"}),". The difference between these two options is that raw_exec runs the task as the same user as the Nomad process. If we start Nomad as root, then it'd run tasks as root as well, which is not what you'd want. That's why ",(0,s.jsx)(n.code,{children:"raw_exec"})," should be used with extreme caution and is disabled by default."]}),"\n",(0,s.jsxs)(n.p,{children:["Nomad supports downloading ",(0,s.jsx)(n.code,{children:"http"}),", ",(0,s.jsx)(n.code,{children:"https"}),", ",(0,s.jsx)(n.code,{children:"git"}),", ",(0,s.jsx)(n.code,{children:"hg"})," and ",(0,s.jsx)(n.code,{children:"S3 artifacts"}),". If these artifacts are archived (",(0,s.jsx)(n.code,{children:"zip"}),", ",(0,s.jsx)(n.code,{children:"tgz"}),", ",(0,s.jsx)(n.code,{children:"bz2"}),", ",(0,s.jsx)(n.code,{children:"xz"}),"), they are automatically unarchived before the starting the task."]}),"\n",(0,s.jsxs)(n.p,{children:["Create a file called ",(0,s.jsx)(n.code,{children:"consul.nomad"})," on the Nomad master server. In this file you will need to define a job, a group and task - the task will ",(0,s.jsx)(n.a,{href:"https://www.consul.io/downloads",children:"Download the Consul Binary"}),", ",(0,s.jsx)(n.a,{href:"https://www.nomadproject.io/docs/job-specification/artifact",children:"unzip and move it to the bin directory"})," (you can get the SHA256 sum from the ",(0,s.jsx)(n.a,{href:"https://releases.hashicorp.com/consul/1.12.2/",children:"Downloads Listing"}),") and execute ",(0,s.jsx)(n.strong,{children:"Consul"})," in dev mode:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'job "consul" {\n  datacenters = ["instaryun"]\n  type = "service"\n\n  group "consul" {\n    count = 1\n\n    task "consul" {\n      driver = "exec"\n\n      config {\n        command = "artifacts/consul"\n        args = ["agent", "-dev"]\n      }\n\n      artifact {\n        source      = "https://releases.hashicorp.com/consul/1.12.2/consul_1.12.2_linux_amd64.zip"\n        destination = "local/artifacts/consul"\n        mode = "file"\n        options {\n          checksum = "sha256:35f85098f5956ef3aca66ec2d2d2a803d1f3359b4dec13382c6ac895344a1f4c"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"})," that the destination is relative to the work directory of your Nomad process as defined in your Nomad configuration file, e.g. ",(0,s.jsx)(n.code,{children:"/opt/nomad/data"})," + an allocation ID and the job name that created it. The full path to the Consul binary that was created running the job above was in my case: ",(0,s.jsx)(n.code,{children:"/opt/nomad/data/alloc/346a1839-1e7e-c85f-0f81-7f6b71d64254/consul/artifacts/consul"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Also Note"})," because the binary ends up in a sub directory you will have to give the relative path to it in the command variable ",(0,s.jsx)(n.code,{children:"artifacts/consul"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"After execution you will see that the service has been successfully deployed:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Hashicorp Consul",src:o(829472).Z+"",width:"1020",height:"169"})}),"\n",(0,s.jsxs)(n.p,{children:["Additionally, all Consul service ports are bound to ",(0,s.jsx)(n.code,{children:"localhost"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"netstat -tlnp | grep consul\ntcp    0   0 127.0.0.1:8300   LISTEN   10134/consul        \ntcp    0   0 127.0.0.1:8301   LISTEN   10134/consul        \ntcp    0   0 127.0.0.1:8302   LISTEN   10134/consul        \ntcp    0   0 127.0.0.1:8500   LISTEN   10134/consul        \ntcp    0   0 127.0.0.1:8502   LISTEN   10134/consul        \ntcp    0   0 127.0.0.1:8600   LISTEN   10134/consul\n"})}),"\n",(0,s.jsx)(n.h3,{id:"register-your-service-with-consul",children:"Register your Service with Consul"}),"\n",(0,s.jsxs)(n.p,{children:["We can now add a service block to our frontend configuration file that tells Consul how to verify that the service is operational. This can be done by using the randomly assigned HTTP port and send an HTTP request on ",(0,s.jsx)(n.code,{children:"localhost"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'job "frontend" {\n\tdatacenters = ["instaryun"]\n  type = "service"\n\n\tgroup "frontend" {\n    count = 2\n\n    scaling {\n      enabled = true\n      min     = 2\n      max     = 3\n    }\n        \n\t\tnetwork {\n\t\t\tmode = "host"\n\t\t\tport "http" {\n\t\t\t\tto = "8080"\n\t\t\t}\n\t\t}\n\n    service {\n      name = "frontend"\n      tags = [\n        "frontend",\n        "urlprefix-/"\n      ]\n      port = "http"\n\n      check {\n        name     = "Frontend HTTP Healthcheck"\n        path     = "/"\n        type     = "http"\n        protocol = "http"\n        interval = "10s"\n        timeout  = "2s"\n      }\n    }\n\n\t\ttask "frontend" {\n\t\t\tdriver = "docker"\n\n\t\t\tconfig {\n\t\t\t\timage = "thedojoseries/frontend:latest"\n\t\t\t\tports = ["http"]\n\t\t\t}\n\t\t}\n\t}\n}\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"})," I am also adding a tag ",(0,s.jsx)(n.code,{children:"urlprefix-/"})," that will be used by the load balancer later on for routing. In the example above there is no prefix. The web frontend will be available on the domain root."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"After running the app we can use Consul's REST API to check if our frontend service has been registered by running the following queries on the Nomad minion server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl localhost:8500/v1/catalog/services\n\n{\n    "consul": [],\n    "frontend": [\n        "frontend",\n        "urlprefix-/"\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Here we can see the service as well as the tags we provided. If this command returns nothing for you make sure that Consul is already up-and-running before you start your app!"}),"\n",(0,s.jsx)(n.p,{children:"To get the two service ports we can check:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl \'http://localhost:8500/v1/health/service/frontend?passing\'\n\n[\n    {\n        ...\n\n        "Service": {\n            "ID": "_nomad-task-6b0d87da-cfc7-b281-2d2c-b69c551ec10c-group-frontend-frontend-http",\n            "Service": "frontend",\n            "Tags": [\n                "frontend",\n                "urlprefix-/"\n            ],\n            "Address": "my.minion.com",\n            "TaggedAddresses": {\n                "lan_ipv4": {\n                    "Address": "my.minion.com",\n                    "Port": 27906\n                },\n                "wan_ipv4": {\n                    "Address": "my.minion.com",\n                    "Port": 27906\n                }\n            },\n            "Meta": {\n                "external-source": "nomad"\n            },\n            "Port": 27906,\n            "Weights": {\n                "Passing": 1,\n                "Warning": 1\n            },\n            "EnableTagOverride": false,\n            "Proxy": {\n                "Mode": "",\n                "MeshGateway": {},\n                "Expose": {}\n            },\n            "Connect": {},\n            "CreateIndex": 154,\n            "ModifyIndex": 154\n        },\n        ...\n\n        "Service": {\n            "ID": "_nomad-task-c269d3dc-4fa3-a05f-1234-3515d694f61c-group-frontend-frontend-http",\n            "Service": "frontend",\n            "Tags": [\n                "frontend",\n                "urlprefix-/"\n            ],\n            "Address": "my.minion.com",\n            "TaggedAddresses": {\n                "lan_ipv4": {\n                    "Address": "my.minion.com",\n                    "Port": 24123\n                },\n                "wan_ipv4": {\n                    "Address": "my.minion.com",\n                    "Port": 24123\n                }\n            },\n            "Meta": {\n                "external-source": "nomad"\n            },\n            "Port": 24123,\n            "Weights": {\n                "Passing": 1,\n                "Warning": 1\n            },\n            "EnableTagOverride": false,\n            "Proxy": {\n                "Mode": "",\n                "MeshGateway": {},\n                "Expose": {}\n            },\n            "Connect": {},\n            "CreateIndex": 139,\n            "ModifyIndex": 139\n        }\n\n        ...\n    }\n]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["And here we see that the two service instances run on port ",(0,s.jsx)(n.code,{children:"24123"})," and ",(0,s.jsx)(n.code,{children:"27906"})," - which can be confirmed by running:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker ps\nCONTAINER ID  IMAGE                           PORTS\neec03c397329  thedojoseries/frontend:latest   my.minion.com:24123->8080/tcp\nbf06acaf078e  thedojoseries/frontend:latest   my.minion.com:27906->8080/tcp\n"})}),"\n",(0,s.jsx)(n.h2,{id:"adding-the-fabio-load-balancer",children:"Adding the Fabio Load Balancer"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Disclaimer: So far I was unable to register routes with Fabio"})}),"\n",(0,s.jsxs)(n.p,{children:["We now have two instances of our web service that need to be fed by web traffic using a load balancer. The preferred solution by Hashicorp is ",(0,s.jsx)(n.a,{href:"https://fabiolb.net/",children:"Fabio"}),". Fabio is an HTTP and TCP reverse proxy that configures itself with data from Consul. Nomad has 3 types of schedulers: ",(0,s.jsx)(n.code,{children:"Service"}),", ",(0,s.jsx)(n.code,{children:"Batch"})," and ",(0,s.jsx)(n.code,{children:"System"}),". You should configure the job fabio to be of ",(0,s.jsx)(n.strong,{children:"Type System"}),". ",(0,s.jsx)(n.a,{href:"https://www.nomadproject.io/docs/schedulers",children:"Read more about Nomad Schedulers"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Define a job called ",(0,s.jsx)(n.code,{children:"fabio"})," in ",(0,s.jsx)(n.code,{children:"fabio.nomad"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Define a group called fabio.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Define a task called fabio.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Fabio should be using the ",(0,s.jsx)(n.a,{href:"https://www.nomadproject.io/docs/drivers/docker",children:"Docker driver"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The image for this container should be ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/r/fabiolb/fabio/tags",children:"fabiolb/fabio"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Usually, Docker containers run in a network mode called Bridge. In a bridge mode, containers run on a different network stack than the host. Because Fabio needs to be able to communicate easily with Consul, which is running as a process on the host and not as a Docker container, you should configure fabio to run in a network mode called host instead (which will run the container in the same network stack as the host)."}),"\n",(0,s.jsxs)(n.li,{children:["Nomad should ",(0,s.jsx)(n.a,{href:"https://www.nomadproject.io/docs/job-specification/resources",children:"allocate 200 MHz of cpu and 128 MB of memory"})," to this task."]}),"\n",(0,s.jsxs)(n.li,{children:["You should allocate two static ports for Fabio: ",(0,s.jsx)(n.code,{children:"9999 - Load Balancer"})," & ",(0,s.jsx)(n.code,{children:"9998 - UI"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'job "fabio" {\n  datacenters = ["instaryun"]\n  type = "system"\n\n  group "fabio" {\n\n    network {\n      port "http" {\n        static = 9998\n      }\n      port "lb" {\n        static = 9999\n      }\n    }\n\n\t\ttask "fabio" {\n\t\t\tdriver = "docker"\n\n\t\t\tconfig {\n\t\t\t\timage = "fabiolb/fabio:latest"\n        network_mode = "host"\n\t\t\t\tports = ["http", "lb"]\n\t\t\t}\n\n      resources {\n        cpu    = 200\n        memory = 128\n\t\t  }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now check the Fabio log to see if there are any error messages:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nomad status fabio\n\nAllocations\nID        Node ID   Task Group  Version  Desired  Status   Created   Modified\nf1510fb9  005f708b  fabio       0        run      running  6m3s ago  5m59s ago\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nomad alloc logs -stderr 5606f503\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"2022/06/07 06:22:55 [WARN] No route for my.mimion.com:9999/"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Fabio Load Balancer",src:o(174279).Z+"",width:"1053",height:"298"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"No routes \xaf\\_(\u30c4)_/\xaf"})})]})}function h(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},603905:(e,n,o)=>{o.d(n,{ah:()=>d});var s=o(667294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,s)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,s,t=function(e,n){if(null==e)return{};var o,s,t={},r=Object.keys(e);for(s=0;s<r.length;s++)o=r[s],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)o=r[s],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var c=s.createContext({}),d=function(e){var n=s.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},l={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},h=s.forwardRef((function(e,n){var o=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=d(o),p=t,f=u["".concat(c,".").concat(p)]||u[p]||l[p]||r;return o?s.createElement(f,a(a({ref:n},h),{},{components:o})):s.createElement(f,a({ref:n},h))}));h.displayName="MDXCreateElement"},829472:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/Hashicorp_Consul_01-813c42274f0cc0c368228f85d431f052.png"},174279:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/Hashicorp_Consul_02-41b6568200db0a7163b8ac80d28e9e1d.png"},995741:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-6c1edb088dfea3a7d39f8eebb8e9dc23.jpg"}}]);