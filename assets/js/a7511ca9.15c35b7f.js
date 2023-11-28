"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[2238],{617071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(785893),o=t(603905);const a={sidebar_position:8070,slug:"2019-09-21",title:"Docker Compose install Magento 2",authors:"mpolinowski",tags:["Magento"]},s=void 0,i={id:"Development/Magento/2019-09-21--magento2-docker-install/index",title:"Docker Compose install Magento 2",description:"Victoria Harbour, Hongkong",source:"@site/docs/Development/Magento/2019-09-21--magento2-docker-install/index.md",sourceDirName:"Development/Magento/2019-09-21--magento2-docker-install",slug:"/Development/Magento/2019-09-21--magento2-docker-install/2019-09-21",permalink:"/docs/Development/Magento/2019-09-21--magento2-docker-install/2019-09-21",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Magento/2019-09-21--magento2-docker-install/index.md",tags:[{label:"Magento",permalink:"/docs/tags/magento"}],version:"current",sidebarPosition:8070,frontMatter:{sidebar_position:8070,slug:"2019-09-21",title:"Docker Compose install Magento 2",authors:"mpolinowski",tags:["Magento"]},sidebar:"tutorialSidebar",previous:{title:"Adding Google Analytics to Magento 2",permalink:"/docs/Development/Magento/2019-09-21--magento2-google-analytics/2019-09-21"},next:{title:"Magento 2 UI Components",permalink:"/docs/Development/Magento/2019-09-20--magento2-ui-components/2019-09-20"}},c={},l=[{value:"Docker Compose",id:"docker-compose",level:2},{value:"Editing the Compose File",id:"editing-the-compose-file",level:3},{value:"Magento Source",id:"magento-source",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Victoria Harbour, Hongkong",src:t(104553).Z+"",width:"1500",height:"691"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#docker-compose",children:"Docker Compose"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#editing-the-compose-file",children:"Editing the Compose File"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#magento-source",children:"Magento Source"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,r.jsxs)(n.p,{children:["I am using the docker-compose file from ",(0,r.jsx)(n.a,{href:"https://github.com/markshust/docker-magento",children:"@markshust"})," and I am going to choose the manual installation for an existing project. You can use the provided shell script to download the necessary files from Github:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd /opt/docker-magento2\r\ncurl -s https://raw.githubusercontent.com/markshust/docker-magento/master/lib/template | bash\n"})}),"\n",(0,r.jsx)(n.p,{children:"You will end up with the following files:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"/opt/docker-magento2\r\n\u251c\u2500\u2500 .git\r\n\u251c\u2500\u2500 .gitignore\r\n\u251c\u2500\u2500 .vscode\r\n\u251c\u2500\u2500 bin\r\n\u251c\u2500\u2500 docker-compose.dev.yml\r\n\u251c\u2500\u2500 docker-compose.yml\r\n\u2514\u2500\u2500 env\r\n   \u2514\u2500\u2500 db.env\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"bin"})," folder contains a ",(0,r.jsx)(n.a,{href:"https://github.com/markshust/docker-magento#custom-cli-commands",children:"couple of custom CLI commands"})," and the MySQL user password is set inside the ",(0,r.jsx)(n.code,{children:"db.env"})," file."]}),"\n",(0,r.jsx)(n.h3,{id:"editing-the-compose-file",children:"Editing the Compose File"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'version: "3"\r\n\r\nservices:\r\n  app:\r\n    image: markoshust/magento-nginx:1.18-4\r\n    ports:\r\n      - "80:8000"\r\n      - "443:8443"\r\n    links:\r\n      - db\r\n      - phpfpm\r\n    volumes: &appvolumes\r\n      - ~/.composer:/var/www/.composer:cached\r\n      - appdata:/var/www/html\r\n      - sockdata:/sock\r\n      - ssldata:/etc/nginx/certs\r\n\r\n  phpfpm:\r\n    image: markoshust/magento-php:7.4-fpm-2\r\n    links:\r\n      - db\r\n    volumes: *appvolumes\r\n\r\n  db:\r\n    image: percona:5.7\r\n    command: --max_allowed_packet=64M\r\n    ports:\r\n      - "3306:3306"\r\n    env_file: env/db.env\r\n    volumes:\r\n      - dbdata:/var/lib/mysql\r\n\r\n  redis:\r\n    image: redis:5.0-alpine\r\n\r\n  elasticsearch:\r\n    image: markoshust/magento-elasticsearch:7.6.2-2\r\n    ports:\r\n      - "9200:9200"\r\n      - "9300:9300"\r\n    environment:\r\n      - "discovery.type=single-node"\r\n\r\n  rabbitmq:\r\n    image: rabbitmq:3.7-management-alpine\r\n    ports:\r\n      - "15672:15672"\r\n      - "5672:5672"\r\n    volumes:\r\n      - rabbitmqdata:/var/lib/rabbitmq\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The compose file sets up an NGINX web proxy, a PHP container, a MySQL Database as well as Redis, Elasticsearch and RabbitMQ. Since the Magento source code I inherited requires PHP v7.3 I will change the PHP image to ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/layers/markoshust/magento-php/7.3-fpm/images/sha256-143047e2819b04dbcd84dd46917fce473e87cd271c6e708a4ef7d1dee59a2122?context=explore",children:"markoshust/magento-php:7.3-fpm"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"magento-source",children:"Magento Source"}),"\n",(0,r.jsx)(n.p,{children:"Download the version of Magento you want to use with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bin/download 2.4.1\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create a DNS host entry for the site so you are able to access the frontend through this URL:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'echo "127.0.0.1 ::1 my.magento.test" | sudo tee -a /etc/hosts\n'})}),"\n",(0,r.jsx)(n.p,{children:"Run the setup installer for Magento:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bin/setup my.magento.test\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You will be asked to login with your ",(0,r.jsx)(n.a,{href:"https://marketplace.magento.com/customer/accessKeys/",children:"Magento Marketplace user credentials"})," - use your public key as username and private key as password"]}),"\n",(0,r.jsxs)(n.p,{children:["Open ",(0,r.jsx)(n.code,{children:"https://my.magento.test"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>l});var r=t(667294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(t),h=o,g=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return t?r.createElement(g,s(s({ref:n},m),{},{components:t})):r.createElement(g,s({ref:n},m))}));m.displayName="MDXCreateElement"},104553:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-13c054fff660a07a582f4f91a81c5032.jpg"}}]);