"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[28010],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2947:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:5040,slug:"2022-03-16",title:"Install Gitlab with Docker-Compose (Debian Bullseye)",authors:"mpolinowski",tags:["LINUX"]},o=void 0,i={unversionedId:"DevOps/GitOps/2022-03-16--gitlab-docker-compose-on-localhost/index",id:"DevOps/GitOps/2022-03-16--gitlab-docker-compose-on-localhost/index",title:"Install Gitlab with Docker-Compose (Debian Bullseye)",description:"Shenzhen, China",source:"@site/docs/DevOps/GitOps/2022-03-16--gitlab-docker-compose-on-localhost/index.mdx",sourceDirName:"DevOps/GitOps/2022-03-16--gitlab-docker-compose-on-localhost",slug:"/DevOps/GitOps/2022-03-16--gitlab-docker-compose-on-localhost/2022-03-16",permalink:"/docs/DevOps/GitOps/2022-03-16--gitlab-docker-compose-on-localhost/2022-03-16",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/GitOps/2022-03-16--gitlab-docker-compose-on-localhost/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:5040,frontMatter:{sidebar_position:5040,slug:"2022-03-16",title:"Install Gitlab with Docker-Compose (Debian Bullseye)",authors:"mpolinowski",tags:["LINUX"]},sidebar:"tutorialSidebar",previous:{title:"GitOps",permalink:"/docs/category/gitops"},next:{title:"Working with Gitlab",permalink:"/docs/DevOps/GitOps/2020-08-04--working-with-gitlab/2020-08-04"}},s={},p=[{value:"Setup",id:"setup",level:2},{value:"Docker-Compose",id:"docker-compose",level:2},{value:"Generate SSL and DHAPARAM Certificates",id:"generate-ssl-and-dhaparam-certificates",level:2},{value:"Run the Container",id:"run-the-container",level:2}],c={toc:p};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shenzhen, China",src:a(90307).Z,width:"1500",height:"567"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setup"},"Setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#docker-compose"},"Docker-Compose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#generate-ssl-and-dhaparam-certificates"},"Generate SSL and DHAPARAM Certificates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-the-container"},"Run the Container"))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Create the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /opt/gitlab/{config/ssl,logs,data} && cd /opt/gitlab\nnano .env\n")),(0,r.kt)("p",null,'Define the environment variable "GITLAB_HOME": ',(0,r.kt)("inlineCode",{parentName:"p"},"export GITLAB_HOME=/opt/gitlab"),"."),(0,r.kt)("h2",{id:"docker-compose"},"Docker-Compose"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano docker-compose.yml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3.6'\nservices:\n  web:\n    image: 'gitlab/gitlab-ce:latest'\n    container_name: gitlab-ce\n    restart: unless-stopped\n    hostname: 'gitlab.example.com'\n    environment:\n      GITLAB_OMNIBUS_CONFIG: |\n        # Add any other gitlab.rb configuration here, each on its own line\n        external_url 'https://gitlab.example.com:8443'\n        gitlab_rails['gitlab_shell_ssh_port'] = 2222\n        nginx['redirect_http_to_https'] = true\n        nginx['ssl_certificate'] = \"/etc/gitlab/ssl/fullchain.pem\"\n        nginx['ssl_certificate_key'] = \"/etc/gitlab/ssl/privkey.pem\"\n        nginx['ssl_dhparam'] = \"/etc/gitlab/ssl/dhparams.pem\"\n    ports:\n      - '8080:80'\n      - '8443:443'\n      - '2222:22'\n    volumes:\n    - '${GITLAB_HOME}/config:/etc/gitlab'\n    - '${GITLAB_HOME}/logs:/var/log/gitlab'\n    - '${GITLAB_HOME}/data:/var/opt/gitlab'\n    - '${GITLAB_HOME}/config/ssl:/etc/gitlab/ssl'\n    shm_size: '256m'\n")),(0,r.kt)("h2",{id:"generate-ssl-and-dhaparam-certificates"},"Generate SSL and DHAPARAM Certificates"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install certbot\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"certbot certonly --rsa-key-size 2048 \\\n  --standalone \\\n  --agree-tos \\\n  --no-eff-email \\\n  --email user@example.email \\\n  -d gitlab.example.com\n")),(0,r.kt)("p",null,"The Now copy the certificates ",(0,r.kt)("strong",{parentName:"p"},"fullchain.pem")," and ",(0,r.kt)("strong",{parentName:"p"},"privkey.pem")," will be generated in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/letsencrypt/live/gitlab.example.com")," and needs to be linked into the ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/gitlab/config/ssl")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp /etc/letsencrypt/live/gitlab.example.com/fullchain.pem /opt/gitlab/config/ssl/fullchain.pem\ncp /etc/letsencrypt/live/gitlab.example.com/privkey.pem /opt/gitlab/config/ssl/privkey.pem\n")),(0,r.kt)("p",null,"Next, generate the DHPARAM certificate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl dhparam -out /opt/gitlab/config/ssl/dhparams.pem 2048\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tree /opt/gitlab\n      \n/opt/gitlab\n\u251c\u2500\u2500 config\n\u2502   \u2514\u2500\u2500 ssl\n\u2502       \u251c\u2500\u2500 dhparams.pem\n\u2502       \u251c\u2500\u2500 fullchain.pem\n\u2502       \u2514\u2500\u2500 privkey.pem\n\u251c\u2500\u2500 data\n\u251c\u2500\u2500 docker-compose.yml\n\u251c\u2500\u2500 logs\n")),(0,r.kt)("h2",{id:"run-the-container"},"Run the Container"),(0,r.kt)("p",null,"Make sure that the HTTP/S and SSH Port is open:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ufw allow 8080,8443,2222/tcp\n")),(0,r.kt)("p",null,"Start the Gitlab-CE and Gitlab-Runner Container with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n\ndocker-compose ps\nName          Command           State        Ports                                     \n----------------------------------------------------------------------------------------------------------\ngitlab-ce   /assets/wrapper   Up (unhealthy)   0.0.0.0:2222->22/tcp,:::2222->22/tcp, 0.0.0.0:8443->443/tcp,:::8443->443/tcp, 0.0.0.0:80->80/tcp,:::80->80/tcp \n")),(0,r.kt)("p",null,"Visit ",(0,r.kt)("inlineCode",{parentName:"p"},"https://gitlab.example.com:8443")," and you will get the GitLab reset password page. Type your new password for the default user ",(0,r.kt)("strong",{parentName:"p"},"root")," and click the ",(0,r.kt)("em",{parentName:"p"},"Change your password")," button."),(0,r.kt)("p",null,"Run Gitlab CLI commands inside the container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it gitlab-ce gitlab-ctl status\n")),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"gitlab.rb")," configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano /opt/gitlab/config/gitlab.rb\n")),(0,r.kt)("p",null,"And restart the container to enable the changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker restart gitlab-ce\n")))}m.isMDXComponent=!0},90307:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-983e9af3d84f5fb9ebad02646e63767d.jpg"}}]);