"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[58719],{480310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(785893),a=n(603905);const i={sidebar_position:9980,slug:"2020-08-01",title:"Installing Gitlab on Ubuntu Server 20.04",authors:"mpolinowski",tags:["LINUX","Gitlab"]},s=void 0,l={id:"DevOps/GitOps/2020-08-01--gitlab-install-on-ubuntu-server/index",title:"Installing Gitlab on Ubuntu Server 20.04",description:"Mong Kok, Hong Kong",source:"@site/docs/DevOps/GitOps/2020-08-01--gitlab-install-on-ubuntu-server/index.md",sourceDirName:"DevOps/GitOps/2020-08-01--gitlab-install-on-ubuntu-server",slug:"/DevOps/GitOps/2020-08-01--gitlab-install-on-ubuntu-server/2020-08-01",permalink:"/docs/DevOps/GitOps/2020-08-01--gitlab-install-on-ubuntu-server/2020-08-01",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/GitOps/2020-08-01--gitlab-install-on-ubuntu-server/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Gitlab",permalink:"/docs/tags/gitlab"}],version:"current",sidebarPosition:9980,frontMatter:{sidebar_position:9980,slug:"2020-08-01",title:"Installing Gitlab on Ubuntu Server 20.04",authors:"mpolinowski",tags:["LINUX","Gitlab"]},sidebar:"tutorialSidebar",previous:{title:"Setting up Gitlab",permalink:"/docs/DevOps/GitOps/2020-08-02--gitlab-setup/2020-08-02"},next:{title:"Running Gitlab as Docker Registry",permalink:"/docs/DevOps/GitOps/2020-02-02--docker-images-in-gitlab/2020-02-02"}},o={},c=[{value:"Preparation",id:"preparation",level:2},{value:"Compose",id:"compose",level:2},{value:"Generate SSL and DHAPARAM Certificates",id:"generate-ssl-and-dhaparam-certificates",level:2},{value:"Install without an external URL",id:"install-without-an-external-url",level:2},{value:"Getting Started",id:"getting-started",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Mong Kok, Hong Kong",src:n(76550).Z+"",width:"1500",height:"661"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#preparation",children:"Preparation"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#compose",children:"Compose"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#generate-ssl-and-dhaparam-certificates",children:"Generate SSL and DHAPARAM Certificates"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#install-without-an-external-url",children:"Install without an external URL"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#getting-started",children:"Getting Started"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"preparation",children:"Preparation"}),"\n",(0,r.jsxs)(t.p,{children:["Create a new directory called ",(0,r.jsx)(t.code,{children:"gitlab"})," and go into it:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"mkdir -p /opt/gitlab && cd /opt/gitlab/\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Create a new GitLab data directory ",(0,r.jsx)(t.code,{children:"/srv/gitlab"})," for storing all our GitLab data:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"mkdir -p /srv/gitlab/{config/ssl,logs,data}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["and create a new ",(0,r.jsx)(t.code,{children:".env"})," file that will be used by Docker:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"nano .env\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Define the environment variable ",(0,r.jsx)(t.code,{children:"GITLAB_HOME"})," with the value as GitLab data directory ",(0,r.jsx)(t.code,{children:"/srv/gitlab"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"GITLAB_HOME=/srv/gitlab\n"})}),"\n",(0,r.jsx)(t.h2,{id:"compose",children:"Compose"}),"\n",(0,r.jsx)(t.p,{children:"Create the new docker-compose.yml` file:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"nano docker-compose.yml\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Define the service named ",(0,r.jsx)(t.code,{children:"web"})," with the image of ",(0,r.jsx)(t.code,{children:"gitlab-ce"})," latest version, and change the ",(0,r.jsx)(t.code,{children:"hostname"})," with your GitLab domain name:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"web:\r\n  image: 'gitlab/gitlab-ce:latest'\r\n  restart: always\r\n  hostname: 'gitlab.instar.io'\r\n\r\n  environment:\r\n    GITLAB_OMNIBUS_CONFIG: |\r\n      # Add any other gitlab.rb configuration here, each on its own line\r\n      external_url 'https://gitlab.instar.io'\r\n      gitlab_rails['gitlab_shell_ssh_port'] = 2224\r\n      nginx['redirect_http_to_https'] = true\r\n      nginx['ssl_certificate'] = \"/etc/gitlab/ssl/fullchain.pem\"\r\n      nginx['ssl_certificate_key'] = \"/etc/gitlab/ssl/privkey.pem\"\r\n      nginx['ssl_dhparam'] = \"/etc/gitlab/ssl/dhparams.pem\"  \r\n\r\n  ports:\r\n    - '80:80'\r\n    - '443:443'\r\n    - '2224:22'\r\n\r\n  volumes:\r\n    - '${GITLAB_HOME}/config:/etc/gitlab'\r\n    - '${GITLAB_HOME}/logs:/var/log/gitlab'\r\n    - '${GITLAB_HOME}/data:/var/opt/gitlab'\r\n    - '${GITLAB_HOME}/config/ssl:/etc/gitlab/ssl'\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Define the service named ",(0,r.jsx)(t.code,{children:"web"})," with the image of ",(0,r.jsx)(t.code,{children:"gitlab-ce"})," latest version, and change the ",(0,r.jsx)(t.code,{children:"hostname"})," with your GitLab domain name."]}),"\n",(0,r.jsxs)(t.p,{children:["Configure the environment for your Gitlab installation as below. And make sure to change the ",(0,r.jsx)(t.code,{children:"external_url"})," with the HTTPS secure protocol, and change the ",(0,r.jsx)(t.code,{children:"gitlab_rails['gitlab_shell_ssh_port']"})," with your alternative SSH port for the container."]}),"\n",(0,r.jsxs)(t.p,{children:["Next, define ports for the GitLab container as below. And make sure to change the SSH port ",(0,r.jsx)(t.code,{children:"2224"})," with your custom port and match with the ",(0,r.jsx)(t.code,{children:"gitlab_shell_ssh_port"})," port on top."]}),"\n",(0,r.jsxs)(t.p,{children:["After that, define the volume or your GitLab data directories. All of GitLab data directories are available at the ",(0,r.jsx)(t.code,{children:"GITLAB_HOME"})," directory, which is set the environment variable on the ",(0,r.jsx)(t.code,{children:".env"})," file on top."]}),"\n",(0,r.jsx)(t.h2,{id:"generate-ssl-and-dhaparam-certificates",children:"Generate SSL and DHAPARAM Certificates"}),"\n",(0,r.jsx)(t.p,{children:"On your server, install the certbot tool:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo apt install -y certbot\n"})}),"\n",(0,r.jsx)(t.p,{children:"After that, generate the SSL certificate for GitLab using the certbot command below."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"certbot certonly --rsa-key-size 2048 --standalone --agree-tos --no-eff-email --email m.polinowski@instar.com -d gitlab.instar.io\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Once all is completed, your certificates will be available at the ",(0,r.jsx)(t.code,{children:"/etc/letsencrypt/live/gitlab.instar.io"})," directory. Now copy the certificate file ",(0,r.jsx)(t.code,{children:"fullchain.pem"})," and ",(0,r.jsx)(t.code,{children:"privkey.pem"})," to the ",(0,r.jsx)(t.code,{children:"/srv/gitlab/config/ssl/"})," directory."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cp /etc/letsencrypt/live/gitlab.instar.io/fullchain.pem /srv/gitlab/config/ssl/\r\ncp /etc/letsencrypt/live/gitlab.instar.io/privkey.pem /srv/gitlab/config/ssl/\n"})}),"\n",(0,r.jsx)(t.p,{children:'Next, generate the DHPARAM certificate "dhparam.pem" using the openssl command below.'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo openssl dhparam -out /srv/gitlab/config/ssl/dhparams.pem 2048\n"})}),"\n",(0,r.jsx)(t.p,{children:"And all certificates for GitLab installation has been generated, and we're ready to build the GitLab container."}),"\n",(0,r.jsx)(t.h2,{id:"install-without-an-external-url",children:"Install without an external URL"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"docker-compose.yml"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"version: '3'\r\n# See https://docs.docker.com/compose/overview/ for more information.\r\n\r\n# If you make changes to this file or any related files, apply them by\r\n# navigating to the directory that holds this file and run this as root:\r\n#   docker-compose down; docker-compose up -d\r\n\r\n# Create a network for our containers.\r\nnetworks:\r\n  gitlab:\r\n\r\n# Create persistent Docker volumes to preserve important data.\r\n# We don't want our data to be lost when restarting containers.\r\nvolumes:\r\n  # For storing GitLab's configuration files:\r\n  vol-gitlab-config:\r\n  # For storing GitLab's logs:\r\n  vol-gitlab-logs:\r\n  # For storing GitLab's application data:\r\n  vol-gitlab-data:\r\n\r\n# Create our containers.\r\nservices:\r\n  # Watchtower detects if any linked containers have an new image\r\n  # available, automatically updating & restarting them if needed.\r\n  watchtower:\r\n    # https://hub.docker.com/r/centurylink/watchtower/\r\n    image: v2tec/watchtower:latest\r\n    # https://github.com/v2tec/watchtower#options\r\n    # This schedule applies updates (if available) at midnight.\r\n    command: --cleanup --schedule \"0 0 0 * * *\"\r\n    restart: always\r\n    volumes:\r\n      - /var/run/docker.sock:/var/run/docker.sock\r\n\r\n  # The main front-end application.\r\n  gitlab:\r\n    # To stick to a specific version, replace \"latest\" with a tag from:\r\n    # https://hub.docker.com/r/gitlab/gitlab-ce/tags/\r\n    image: gitlab/gitlab-ce:latest\r\n    restart: always\r\n    hostname: \"my.gitlab.domain\"\r\n    ports:\r\n      - \"2222:22\"    # Change to \"2222:22\" if the host needs port 22.\r\n      - \"80:80\"\r\n      - \"443:443\"\r\n    networks:\r\n      - gitlab\r\n    volumes:\r\n      # Ensure GitLab content persist between restarts.\r\n      - vol-gitlab-config:/etc/gitlab\r\n      - vol-gitlab-logs:/var/log/gitlab\r\n      - vol-gitlab-data:/var/opt/gitlab\r\n    environment:\r\n      GITLAB_OMNIBUS_CONFIG: |\r\n        # Add gitlab.rb configuration here, each on its own line.\r\n        # See: https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/files/gitlab-config-template/gitlab.rb.template\r\n        external_url 'http://my.gitlab.domain'\r\n        letsencrypt['enable'] = false\r\n        # Configure headers for outgoing email.\r\n        gitlab_rails['gitlab_email_enabled'] = false\r\n        gitlab_rails['gitlab_email_from'] = 'no-reply@my.gitlab.domain'\r\n        gitlab_rails['gitlab_email_display_name'] = 'GitLab'\r\n        gitlab_rails['gitlab_email_reply_to'] = 'no-reply@my.gitlab.domain'\r\n        # Send outgoing email via the SMTP container:\r\n        gitlab_rails['smtp_enable'] = false\r\n        gitlab_rails['smtp_address'] = \"mail\"\r\n        gitlab_rails['smtp_port'] = 25\r\n        gitlab_rails['smtp_tls'] = false\r\n        # Limit backup lifetime to 7 days (604800 seconds):\r\n        gitlab_rails['backup_keep_time'] = 604800\r\n        registry_external_url 'http://registry.example.com'\r\n        gitlab_rails['registry_enabled'] = true\r\n        registry['enable'] = true\r\n        registry_nginx['enable'] = true\r\n        registry_nginx['listen_port'] = 5001\r\n        registry_nginx['listen_https'] = false\r\n\r\n  # This allows GitLab to send email straight out of the box without\r\n  # having to rely on an external provider like SendGrid or MailGun.\r\n  # It makes an SMTP host available at the hostname \"mail\".\r\n  # mail:\r\n  #   image: bytemark/smtp\r\n  #   restart: always\r\n  #   networks:\r\n  #     - gitlab\r\n\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:".env"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Docker Compose can read environment variables from this file.\r\n# See https://docs.docker.com/compose/env-file/\r\n\r\n# Your GitLab site will be available at this domain. If the domain\r\n# has DNS records pointing to your server, it'll get SSL certs.\r\nGITLAB_DOMAIN=server-domain-name\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Use server hostname as the domain. This can be changed later in the ",(0,r.jsx)(t.code,{children:"/opt/gitlab/.env"})," file."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'DOMAIN="`hostname -f`"\r\nsed -i -e "s|^GITLAB_DOMAIN=.*|GITLAB_DOMAIN=$DOMAIN|" /opt/gitlab/.env\n'})}),"\n",(0,r.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsxs)(t.p,{children:["Start our containers with ",(0,r.jsx)(t.code,{children:"docker-compose"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd /opt/gitlab\r\ndocker-compose up -d\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Change the default password and log in with ",(0,r.jsx)(t.code,{children:"root"})," and the the password you set in the step before."]})]})}function h(e={}){const{wrapper:t}={...(0,a.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},603905:(e,t,n)=>{n.d(t,{ah:()=>c});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),g=c(n),p=a,b=g["".concat(o,".").concat(p)]||g[p]||d[p]||i;return n?r.createElement(b,s(s({ref:t},h),{},{components:n})):r.createElement(b,s({ref:t},h))}));h.displayName="MDXCreateElement"},76550:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-6c7f609117ad1e70316e5241b7580ec9.jpg"}}]);