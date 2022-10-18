"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[66086],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3785:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={sidebar_position:5040,slug:"2022-01-27",title:"Bind9 Server Configuration",authors:"mpolinowski",tags:["LINUX"]},o=void 0,l={unversionedId:"DevOps/Provisioning/2022-01-27--bind9-configuration/index",id:"DevOps/Provisioning/2022-01-27--bind9-configuration/index",title:"Bind9 Server Configuration",description:"Shenzhen, China",source:"@site/docs/DevOps/Provisioning/2022-01-27--bind9-configuration/index.md",sourceDirName:"DevOps/Provisioning/2022-01-27--bind9-configuration",slug:"/DevOps/Provisioning/2022-01-27--bind9-configuration/2022-01-27",permalink:"/docs/DevOps/Provisioning/2022-01-27--bind9-configuration/2022-01-27",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2022-01-27--bind9-configuration/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:5040,frontMatter:{sidebar_position:5040,slug:"2022-01-27",title:"Bind9 Server Configuration",authors:"mpolinowski",tags:["LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Provision OSticket with Docker",permalink:"/docs/DevOps/Provisioning/2022-10-16--os-ticket-docker/2022-10-16"},next:{title:"Install Gitlab with Docker-Compose (Debian Bullseye)",permalink:"/docs/DevOps/Provisioning/2022-03-16--gitlab-docker-compose-on-localhost/2022-03-16"}},s={},p=[{value:"Example Setup",id:"example-setup",level:2},{value:"Bind9 Configure",id:"bind9-configure",level:2},{value:"Primary DNS Server",id:"primary-dns-server",level:3},{value:"named.conf",id:"namedconf",level:4},{value:"named.conf.options",id:"namedconfoptions",level:4},{value:"named.conf.local",id:"namedconflocal",level:4}],c={toc:p};function d(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shenzhen, China",src:t(57738).Z,width:"1500",height:"671"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#example-setup"},"Example Setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#bind9-configure"},"Bind9 Configure"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#primary-dns-server"},"Primary DNS Server"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#namedconf"},"named.conf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#namedconfoptions"},"named.conf.options")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#namedconflocal"},"named.conf.local"))))))),(0,r.kt)("h2",{id:"example-setup"},"Example Setup"),(0,r.kt)("p",null,"I have 2 servers called ",(0,r.kt)("strong",{parentName:"p"},"service1")," and ",(0,r.kt)("strong",{parentName:"p"},"service2")," - the servers are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"located in the ",(0,r.kt)("inlineCode",{parentName:"li"},"dc1")," datacenter"),(0,r.kt)("li",{parentName:"ul"},"on a ",(0,r.kt)("inlineCode",{parentName:"li"},"172.24.0.0/16")," subnet"),(0,r.kt)("li",{parentName:"ul"},"run services that belong to a web application on ",(0,r.kt)("inlineCode",{parentName:"li"},"instar.com"))),(0,r.kt)("p",null,"The naming scheme used to refer to this private subnet or zone is ",(0,r.kt)("inlineCode",{parentName:"p"},"dc1.instar.com"),". The servers should be reachable under the private ",(0,r.kt)("strong",{parentName:"p"},"Fully-Qualified Domain Names")," (",(0,r.kt)("em",{parentName:"p"},"FQDN"),") ",(0,r.kt)("inlineCode",{parentName:"p"},"service1.dc1.instar.com")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"service2.dc1.instar.com"),", respectively:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Host"),(0,r.kt)("th",{parentName:"tr",align:null},"Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Private FQDN"),(0,r.kt)("th",{parentName:"tr",align:null},"Private IP Address"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service1"),(0,r.kt)("td",{parentName:"tr",align:null},"First web service"),(0,r.kt)("td",{parentName:"tr",align:null},"service1.dc1.instar.com"),(0,r.kt)("td",{parentName:"tr",align:null},"172.24.0.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service2"),(0,r.kt)("td",{parentName:"tr",align:null},"Second web service"),(0,r.kt)("td",{parentName:"tr",align:null},"service2.dc1.instar.com"),(0,r.kt)("td",{parentName:"tr",align:null},"172.24.0.3")))),(0,r.kt)("p",null,"I want to set up a primary DNS server, ",(0,r.kt)("inlineCode",{parentName:"p"},"ns1")," and a secondary DNS server ",(0,r.kt)("inlineCode",{parentName:"p"},"ns2"),", which will serve as a backup:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Host"),(0,r.kt)("th",{parentName:"tr",align:null},"Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Private FQDN"),(0,r.kt)("th",{parentName:"tr",align:null},"Private IP Address"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ns1"),(0,r.kt)("td",{parentName:"tr",align:null},"Primary DNS Server"),(0,r.kt)("td",{parentName:"tr",align:null},"ns1.nyc3.example.com"),(0,r.kt)("td",{parentName:"tr",align:null},"172.24.0.15")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ns2"),(0,r.kt)("td",{parentName:"tr",align:null},"Secondary DNS Server"),(0,r.kt)("td",{parentName:"tr",align:null},"ns2.nyc3.example.com"),(0,r.kt)("td",{parentName:"tr",align:null},"172.24.0.16")))),(0,r.kt)("h2",{id:"bind9-configure"},"Bind9 Configure"),(0,r.kt)("p",null,"I am going to run this entire setup ",(0,r.kt)("a",{parentName:"p",href:"/docs/DevOps/Provisioning/2022-01-25--installing-bind9-docker/2022-01-25"},"in Docker"),". But before I can start the Bind9 Docker container I first need to create the configuration files on my Debian host system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /opt/dns/{ns1,ns2}\n")),(0,r.kt)("h3",{id:"primary-dns-server"},"Primary DNS Server"),(0,r.kt)("p",null,"BIND\u2019s configuration consists of multiple files, which are included from the main configuration file, ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/bind/named.conf"),":"),(0,r.kt)("h4",{id:"namedconf"},"named.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'// This is the primary configuration file for the BIND DNS server named.\n//\n// Please read /usr/share/doc/bind9/README.Debian.gz for information on the \n// structure of BIND configuration files in Debian, *BEFORE* you customize \n// this configuration file.\n//\n// If you are just adding zones, please do that in /etc/bind/named.conf.local\n\ninclude "/etc/bind/named.conf.options";\ninclude "/etc/bind/named.conf.local";\ninclude "/etc/bind/named.conf.default-zones";\n')),(0,r.kt)("h4",{id:"namedconfoptions"},"named.conf.options"),(0,r.kt)("p",null,"I will start with configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"named.conf.options")," file. Above the existing block of options, I create a new ACL block called ",(0,r.kt)("inlineCode",{parentName:"p"},"trusted"),". This is where I can define a list of clients that I will allow recursive DNS queries from:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano /opt/dns/ns1/named.conf.options  # /etc/bind/named.conf.options\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'acl "trusted" {\n        172.24.0.15; # ns1\n        172.24.0.16; # ns2\n        172.24.0.2;  # host1\n        172.24.0.3;  # host2\n};\n')),(0,r.kt)("p",null,"Now I can edit the options block below and add the private IP address of ",(0,r.kt)("inlineCode",{parentName:"p"},"ns1")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"listen-on")," ",(0,r.kt)("strong",{parentName:"p"},"port 53")," directive for IPv4. Below those entries, change the allow-transfer directive to from ",(0,r.kt)("inlineCode",{parentName:"p"},"none")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ns2")," private IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"172.24.0.16"),". Also, change allow-query directive from ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"trusted"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'options {\n    directory "/var/cache/bind";\n\n    recursion yes;\n    listen-on port 53 { 127.0.0.1; 172.24.0.15; };\n    #listen-on-v6 port 53 { ::1; };\n\n    allow-transfer { 172.24.0.16; }; # disable zone transfers by default\n\n    allow-query { trusted; };  # allows queries from "trusted" clients\n\n    forwarders {\n            8.8.8.8;\n            4.4.4.4;\n    };\n}\n')),(0,r.kt)("p",null,"The above configuration specifies that only the trusted servers will be able to query your DNS server."),(0,r.kt)("h4",{id:"namedconflocal"},"named.conf.local"),(0,r.kt)("p",null,"Next, I will configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/bind/named.local")," file, to specify the forward and reverse zones."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano /opt/dns/ns1/named.conf.local  # /etc/bind/named.conf.local\n")),(0,r.kt)("p",null,"First, the ",(0,r.kt)("strong",{parentName:"p"},"Forward Zone"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'zone "dc1.instar.com" {\n    type master;\n    file "/etc/named/zones/db.dc1.instar.com"; # zone file path\n};\n')),(0,r.kt)("p",null,"And the ",(0,r.kt)("strong",{parentName:"p"},"Reverse Zone")," (note that the reverse zone name starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"24.172")," which is the octet reversal of ",(0,r.kt)("inlineCode",{parentName:"p"},"172.24"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'zone "24.172.in-addr.arpa" {\n    type master;\n    file "/etc/named/zones/db.172.24";  # 172.24.0.0/16 subnet\n    };\n')),(0,r.kt)("p",null,"If your servers span multiple private subnets but are in the same datacenter, be sure to specify an additional zone and zone file for each subnet."))}d.isMDXComponent=!0},57738:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-bac99ee9472bf0354e396ff811a46d92.jpg"}}]);