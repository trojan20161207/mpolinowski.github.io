"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[57769],{3905:(e,n,o)=>{o.d(n,{Zo:()=>s,kt:()=>u});var t=o(67294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function p(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},s=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(o),u=a,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||r;return o?t.createElement(m,i(i({ref:n},s),{},{components:o})):t.createElement(m,i({ref:n},s))}));function u(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<r;c++)i[c]=o[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},78724:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var t=o(87462),a=(o(67294),o(3905));const r={sidebar_position:5e3,slug:"2022-11-07",title:"Deploy a cPhalcon App with Docker",authors:"mpolinowski",tags:["LINUX","Docker"],description:"User Docker to provision a cPhalcon PHP application"},i=void 0,p={unversionedId:"DevOps/Provisioning/2022-11-07--cphalcon-docker/index",id:"DevOps/Provisioning/2022-11-07--cphalcon-docker/index",title:"Deploy a cPhalcon App with Docker",description:"User Docker to provision a cPhalcon PHP application",source:"@site/docs/DevOps/Provisioning/2022-11-07--cphalcon-docker/index.md",sourceDirName:"DevOps/Provisioning/2022-11-07--cphalcon-docker",slug:"/DevOps/Provisioning/2022-11-07--cphalcon-docker/2022-11-07",permalink:"/docs/DevOps/Provisioning/2022-11-07--cphalcon-docker/2022-11-07",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2022-11-07--cphalcon-docker/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:5e3,frontMatter:{sidebar_position:5e3,slug:"2022-11-07",title:"Deploy a cPhalcon App with Docker",authors:"mpolinowski",tags:["LINUX","Docker"],description:"User Docker to provision a cPhalcon PHP application"},sidebar:"tutorialSidebar",previous:{title:"Server Provisioning",permalink:"/docs/category/server-provisioning"},next:{title:"OSticket REST API Calls",permalink:"/docs/DevOps/Provisioning/2022-10-27--os-ticket-rest-api/2022-10-27"}},l={},c=[{value:"Scaffold your Application",id:"scaffold-your-application",level:2},{value:"Build the Phalcon Container",id:"build-the-phalcon-container",level:2},{value:"Build",id:"build",level:3},{value:"Run the Service",id:"run-the-service",level:2},{value:"Configure the Phalcon App",id:"configure-the-phalcon-app",level:2}],s={toc:c};function h(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shenzhen, China",src:o(50174).Z,width:"1500",height:"567"})),(0,a.kt)("h1",{id:"phalcon-framework-with-docker"},"Phalcon Framework with Docker"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Based on ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@rogsilva/working-with-phalcon-framework-and-docker-fef3fe5b85c8"},"Working with Phalcon Framework and Docker")," by ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@rogsilva"},"Rog\xe9rio Silva"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#phalcon-framework-with-docker"},"Phalcon Framework with Docker"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#scaffold-your-application"},"Scaffold your Application")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#build-the-phalcon-container"},"Build the Phalcon Container"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#build"},"Build")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#run-the-service"},"Run the Service")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configure-the-phalcon-app"},"Configure the Phalcon App"))))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/docker-phalcon"},"Github Repository")),(0,a.kt)("h2",{id:"scaffold-your-application"},"Scaffold your Application"),(0,a.kt)("p",null,"Link your SQL database to your Phalcon App container using Docker-compose:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3'\n\nservices:\n  app:\n    container_name: phalcon_app\n    build: .\n    working_dir: /var/www/html\n    volumes:\n      - ./html:/var/www/html\n    ports:\n      - '8080:80'\n    expose:\n      - '8080'\n    depends_on:\n      - mysql\n    links:\n      - mysql\n\n  mysql:\n    container_name: phalcon_db\n    image: mariadb:latest\n    environment:\n      MYSQL_DATABASE: phalcon_app\n      MYSQL_ROOT_PASSWORD: root\n      SERVICE_TAGS: dev\n      SERVICE_NAME: mysql\n    ports:\n      - '3306:3306'\n")),(0,a.kt)("h2",{id:"build-the-phalcon-container"},"Build the Phalcon Container"),(0,a.kt)("p",null,"Using the PHP/NGINX container by ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/webdevops/php-nginx"},"webdevops")," as base image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM webdevops/php-nginx:7.4\n\nARG PSR_VERSION=1.2.0\nARG PHALCON_VERSION=4.1.3\nARG PHALCON_EXT_PATH=php7/64bits\n\nRUN set -xe && \\\n    # Download PSR, see https://github.com/jbboehr/php-psr\n    curl -LO https://github.com/jbboehr/php-psr/archive/v${PSR_VERSION}.tar.gz && \\\n    tar xzf ${PWD}/v${PSR_VERSION}.tar.gz && \\\n    # Download Phalcon\n    curl -LO https://github.com/phalcon/cphalcon/archive/v${PHALCON_VERSION}.tar.gz && \\\n    tar xzf ${PWD}/v${PHALCON_VERSION}.tar.gz && \\\n    docker-php-ext-install -j $(getconf _NPROCESSORS_ONLN) \\\n        ${PWD}/php-psr-${PSR_VERSION} \\\n        ${PWD}/cphalcon-${PHALCON_VERSION}/build/${PHALCON_EXT_PATH} \\\n    && \\\n    # Remove all temp files\n    rm -r \\\n        ${PWD}/v${PSR_VERSION}.tar.gz \\\n        ${PWD}/php-psr-${PSR_VERSION} \\\n        ${PWD}/v${PHALCON_VERSION}.tar.gz \\\n        ${PWD}/cphalcon-${PHALCON_VERSION} \\\n    && \\\n    php -m\n\nENV WEB_DOCUMENT_ROOT=/var/www/html/application/public\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"I am using the currently latest version of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jbboehr/php-psr/tags"},"php-psr")," in combination with the last ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/phalcon/cphalcon/releases?page=2"},"cphalcon v4")," release. I was not yet able to get version 5 to work.")),(0,a.kt)("h3",{id:"build"},"Build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull mariadb:latest\ndocker pull webdevops/php-nginx:7.4\nmkdir html\ndocker-compose build app\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker images\n\ndocker-phalcon_app                        latest          08a2db66d313   6 seconds ago   1.03GB\nwebdevops/php-nginx                       7.4             bf283e850d32   3 days ago      1.02GB\nmariadb                                   latest          8dafde72c039   4 days ago      383MB\n")),(0,a.kt)("h2",{id:"run-the-service"},"Run the Service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'docker-compose up -d\n\nCreating network "docker-phalcon_default" with the default driver\nCreating phalcon_db ... done\nCreating phalcon_app ... done\n')),(0,a.kt)("h2",{id:"configure-the-phalcon-app"},"Configure the Phalcon App"),(0,a.kt)("p",null,"Initialize the application by generating a ",(0,a.kt)("inlineCode",{parentName:"p"},"composer.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'docker exec -ti phalcon_app composer init\n\nThis command will guide you through creating your composer.json config.\n\nPackage name (<vendor>/<name>) [root/html]: phalcon/app\nDescription []: Phalcon App\nAuthor [n to skip]: Mike Polinowski\nMinimum Stability []: \nPackage Type (e.g. library, project, metapackage, composer-plugin) []: \nLicense []: MIT\n\nDefine your dependencies.\n\nWould you like to define your dependencies (require) interactively [yes]? no\nWould you like to define your dev dependencies (require-dev) interactively [yes]? no\nAdd PSR-4 autoload mapping? Maps namespace "Phalcon\\App" to the entered relative path. [src/, n to skip]: n\n\n{\n    "name": "phalcon/app",\n    "description": "Phalcon App",\n    "license": "MIT",\n    "authors": [\n        {\n            "name": "Mike Polinowski"\n        }\n    ],\n    "require": {}\n}\n\nDo you confirm generation [yes]? yes\n')),(0,a.kt)("p",null,"Create a default Phalcon project using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/phalcon/phalcon-devtools"},"Phalcon Devtools"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -ti phalcon_app composer require --dev phalcon/devtools\n\nUsing version ^4.2 for phalcon/devtools\n./composer.json has been updated\nRunning composer update phalcon/devtools\nLoading composer repositories with package information\nUpdating dependencies\nLock file operations: 22 installs, 0 updates, 0 removals\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -ti phalcon_app ./vendor/bin/phalcon project application simple\n\nPhalcon DevTools (4.2.0)\n  Success: Controller \"index\" was successfully created.\n  Info: /var/www/html/application/app/controllers/IndexController.php\n  Success: Project 'application' was successfully created. \n  Info: Please choose a password and username to use Database connection.\n  Info: Used default: 'root' without password.\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Phalcon Framework with Docker",src:o(55996).Z,width:"756",height:"182"})))}h.isMDXComponent=!0},55996:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/Phalcon_Docker_01-b741468cf83de36bb7b89db1146f02cc.png"},50174:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-983e9af3d84f5fb9ebad02646e63767d.jpg"}}]);