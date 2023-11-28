"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[23157],{118137:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=r(785893),i=r(603905);const s={sidebar_position:1e4,slug:"2017-10-01",title:"Using NGINX as proxy for your nodejs apps",authors:"mpolinowski",tags:["LINUX","NGINX"]},o=void 0,a={id:"DevOps/NGINX/2017-10-01--using-nginx-as-proxy-for-your-nodejs-apps/index",title:"Using NGINX as proxy for your nodejs apps",description:"Hongkong",source:"@site/docs/DevOps/NGINX/2017-10-01--using-nginx-as-proxy-for-your-nodejs-apps/index.mdx",sourceDirName:"DevOps/NGINX/2017-10-01--using-nginx-as-proxy-for-your-nodejs-apps",slug:"/DevOps/NGINX/2017-10-01--using-nginx-as-proxy-for-your-nodejs-apps/2017-10-01",permalink:"/docs/DevOps/NGINX/2017-10-01--using-nginx-as-proxy-for-your-nodejs-apps/2017-10-01",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/NGINX/2017-10-01--using-nginx-as-proxy-for-your-nodejs-apps/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"NGINX",permalink:"/docs/tags/nginx"}],version:"current",sidebarPosition:1e4,frontMatter:{sidebar_position:1e4,slug:"2017-10-01",title:"Using NGINX as proxy for your nodejs apps",authors:"mpolinowski",tags:["LINUX","NGINX"]},sidebar:"tutorialSidebar",previous:{title:"NGINX, Node.js & Security",permalink:"/docs/DevOps/NGINX/2017-12-24--nginx-node-security/2017-12-24"},next:{title:"Elasticsearch",permalink:"/docs/category/elasticsearch"}},l={},c=[{value:"01 Useful links",id:"01-useful-links",level:2},{value:"02 Install Nginx and Adjust the Firewall",id:"02-install-nginx-and-adjust-the-firewall",level:2},{value:"03 FirewallD",id:"03-firewalld",level:2},{value:"04 Create a login",id:"04-create-a-login",level:2},{value:"05 nginx.conf",id:"05-nginxconf",level:2},{value:"06 virtual.conf",id:"06-virtualconf",level:2},{value:"07 GoDaddy Certs",id:"07-godaddy-certs",level:2},{value:"Generate a CSR and Private Key",id:"generate-a-csr-and-private-key",level:3},{value:"Download your key from GoDaddy",id:"download-your-key-from-godaddy",level:3},{value:"Install Certificate On Web Server",id:"install-certificate-on-web-server",level:3},{value:"08 LetsEncrypt and Certbot",id:"08-letsencrypt-and-certbot",level:2},{value:"Install Certbot on CentOS 7",id:"install-certbot-on-centos-7",level:3},{value:"Run Certbot",id:"run-certbot",level:3},{value:"Setting Up Auto Renewal",id:"setting-up-auto-renewal",level:3},{value:"Systemd",id:"systemd",level:4},{value:"Cron.d",id:"crond",level:4},{value:"TLS-SNI-01 challenge Deactivated",id:"tls-sni-01-challenge-deactivated",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Hongkong",src:r(618246).Z+"",width:"1980",height:"1016"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#01-useful-links",children:"01 Useful links"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#02-install-nginx-and-adjust-the-firewall",children:"02 Install Nginx and Adjust the Firewall"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#03-firewalld",children:"03 FirewallD"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#04-create-a-login",children:"04 Create a login"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#05-nginxconf",children:"05 nginx.conf"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#06-virtualconf",children:"06 virtual.conf"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#07-godaddy-certs",children:"07 GoDaddy Certs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#generate-a-csr-and-private-key",children:"Generate a CSR and Private Key"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#download-your-key-from-godaddy",children:"Download your key from GoDaddy"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#install-certificate-on-web-server",children:"Install Certificate On Web Server"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#08-letsencrypt-and-certbot",children:"08 LetsEncrypt and Certbot"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#install-certbot-on-centos-7",children:"Install Certbot on CentOS 7"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#run-certbot",children:"Run Certbot"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#setting-up-auto-renewal",children:"Setting Up Auto Renewal"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#systemd",children:"Systemd"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#crond",children:"Cron.d"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#tls-sni-01-challenge-deactivated",children:"TLS-SNI-01 challenge Deactivated"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"01-useful-links",children:"01 Useful links"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://kyup.com/tutorials/set-http-authentication-nginx/",children:"Apache2-Utils"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.ssllabs.com/ssltest/",children:"SSL Labs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-with-http-2-support-on-ubuntu-16-04",children:"Set up NGINX with http/2"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-on-centos-7/",children:"Create a self-signed Certificate"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-centos-7",children:"How To Secure Nginx with Let's Encrypt on CentOS 7"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html",children:"Installing Elasticsearch"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.elastic.co/guide/en/kibana/current/install.html",children:"Installing Kibana"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.elastic.co/downloads/x-pack",children:"Installing X-Pack"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"02-install-nginx-and-adjust-the-firewall",children:"02 Install Nginx and Adjust the Firewall"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Step One"})," \u2014 Nginx is not available in CentOS's default repositories - but we can install it from the EPEL (extra packages for Enterprise Linux) repository."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:" sudo yum install epel-release\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Step Two"})," \u2014 Next, we can install Nginx."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:" sudo yum install nginx\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Step Three"})," \u2014 Start the Nginx service and test it inside your browser http://server_domain_name_or_IP/"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:" sudo systemctl start nginx\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Step Four"})," \u2014 Check that the service is up and running by typing:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:" systemctl status nginx\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Step Five"})," \u2014 You will also want to enable Nginx, so it starts when your server boots:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:" sudo systemctl enable nginx\n"})}),"\n",(0,t.jsx)(n.h2,{id:"03-firewalld",children:"03 FirewallD"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Step One"})," \u2014 Installation"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Open ports 80 and 443 in ",(0,t.jsx)(n.a,{href:"http://www.firewalld.org/",children:"FirewallD"})]}),"\n",(0,t.jsx)(n.p,{children:"To start the service and enable FirewallD on boot:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo systemctl start firewalld\r\nsudo systemctl enable firewalld\n"})}),"\n",(0,t.jsx)(n.p,{children:"To stop and disable it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo systemctl stop firewalld\r\nsudo systemctl disable firewalld\n"})}),"\n",(0,t.jsx)(n.p,{children:"Check the firewall status. The output should say either running or not running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo firewall-cmd --state\n"})}),"\n",(0,t.jsx)(n.p,{children:"To view the status of the FirewallD daemon:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo systemctl status firewalld\n"})}),"\n",(0,t.jsx)(n.p,{children:"To reload a FirewallD configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo firewall-cmd --reload\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Step Two"})," \u2014 Configuration"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Add the http/s rule to the permanent set and reload FirewallD."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo firewall-cmd --zone=public --add-service=https --permanent\r\nsudo firewall-cmd --zone=public --add-service=http --permanent\r\nsudo firewall-cmd --reload\n"})}),"\n",(0,t.jsx)(n.p,{children:"Allow traffic / block traffic over ports:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo firewall-cmd --zone=public --add-port=12345/tcp --permanent\r\nsudo firewall-cmd --zone=public --remove-port=12345/tcp --permanent\n"})}),"\n",(0,t.jsx)(n.p,{children:"Verify open ports:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"firewall-cmd --list-ports\n"})}),"\n",(0,t.jsx)(n.p,{children:"Check the firewall status:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo firewall-cmd --state\n"})}),"\n",(0,t.jsx)(n.p,{children:"To view the status of the FirewallD daemon:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo systemctl status firewalld\n"})}),"\n",(0,t.jsx)(n.p,{children:"To reload a FirewallD configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo firewall-cmd --reload\n"})}),"\n",(0,t.jsx)(n.h2,{id:"04-create-a-login",children:"04 Create a login"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo htpasswd -c /etc/nginx/.htpasswd USERNAME\r\nNew password: xxxxxxxxx\r\nRe-type new password: xxxxxxxxx\n"})}),"\n",(0,t.jsx)(n.h2,{id:"05-nginxconf",children:"05 nginx.conf"}),"\n",(0,t.jsx)(n.p,{children:"/etc/nginx/nginx.conf"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-nginx",children:"user nginx;\r\nworker_processes 8;\r\nerror_log /var/log/nginx/error.log;\r\npid /run/nginx.pid;\r\n\r\nevents {\r\n    worker_connections 1024;\r\n}\r\n\r\nhttp {\r\n    log_format  main  '$remote_addr - $remote_user [$time_local] '$request' '\r\n                      '$status $body_bytes_sent '$http_referer' '\r\n                      ''$http_user_agent' '$http_x_forwarded_for'';\r\n\r\n    access_log  /var/log/nginx/access.log  main;\r\n\r\n    sendfile            on;\r\n    tcp_nopush          on;\r\n    tcp_nodelay         on;\r\n    keepalive_timeout   65;\r\n    types_hash_max_size 2048;\r\n\tgzip on;\r\n\tgzip_vary on;\r\n\tgzip_proxied any;\r\n\tgzip_comp_level 6;\r\n\tgzip_buffers 16 8k;\r\n\tgzip_http_version 1.1;\r\n\tgzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;\r\n\r\n    include             /etc/nginx/mime.types;\r\n    default_type        application/octet-stream;\r\n\r\n    # Load modular configuration files from the /etc/nginx/conf.d directory.\r\n    # See http://nginx.org/en/docs/ngx_core_module.html#include\r\n    # for more information.\r\n    include /etc/nginx/conf.d/*.conf;\r\n\t# include /etc/nginx/sites-enabled/*;\r\n\r\n\t# Hide nginx version token\r\n\tserver_tokens off;\r\n\r\n\t# Configure buffer sizes\r\n\tclient_body_buffer_size 16k;\r\n\tclient_header_buffer_size 1k;\r\n\tclient_max_body_size 8m;\r\n\tlarge_client_header_buffers 4 8k;\r\n\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"06-virtualconf",children:"06 virtual.conf"}),"\n",(0,t.jsx)(n.p,{children:"/etc/nginx/conf.d/virtual.conf"}),"\n",(0,t.jsx)(n.p,{children:"Set up virtual server instances for our 2 node/express apps, Elasticsearch and Kibana"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-nginx",children:"# redirect http/80 traffic to https/443 for our node apps\r\nserver {\r\n       listen         80;\r\n       listen    [::]:80;\r\n       server_name    example.de example2.de;\r\n       return         301 https://$server_name$request_uri;\r\n}\r\n\r\n# point to our first node app that is running on port 8888 and accept calls over https://example.de:443\r\nupstream myApp_en {\r\n\t# point to the running node\r\n\tserver 127.0.0.1:8888;\r\n}\r\n\r\nserver {\r\n\t# users using this port and domain will be directed to the node app defined above\r\n\t# listen 80 default_server;\r\n\t# listen [::]:80 default_server ipv6only=on;\r\n\tlisten 443 ssl http2 default_server;\r\n\tlisten [::]:443 ssl http2 default_server;\r\n\t# If you want to run more then one node app, they either have to be assigned different web domains (server_name) or ports!\r\n\tserver_name example.de;\r\n\r\n\t# Adding the SSL Certificates\r\n    ssl_prefer_server_ciphers on;\r\n\tssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;\r\n\tssl_dhparam /etc/nginx/ssl/dhparam.pem;\r\n\tssl_certificate /etc/nginx/ssl/nginx-selfsigned.crt;\r\n\tssl_certificate_key /etc/nginx/ssl/nginx-selfsigned.key;\r\n\r\n\t# set the default public directory for your node\r\n\troot /opt/myApp_en/build/public;\r\n\r\n\t# Optimizing Nginx for Best Performance\r\n\tssl_session_cache shared:SSL:5m;\r\n    ssl_session_timeout 1h;\r\n\r\n\tlocation / {\r\n    \tproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\r\n    \tproxy_set_header Host $http_host;\r\n    \tproxy_set_header X-NginX-Proxy true;\r\n    \tproxy_http_version 1.1;\r\n    \tproxy_set_header Upgrade $http_upgrade;\r\n    \tproxy_set_header Connection 'upgrade';\r\n    \tproxy_max_temp_file_size 0;\r\n\t\tproxy_pass http://myApp_en;\r\n    \tproxy_redirect off;\r\n    \tproxy_read_timeout 240s;\r\n\t\t# Authentication can be activated during development\r\n\t\t# auth_basic 'Username and Password are required';\r\n\t\t# the user login has to be generated\r\n\t\t# auth_basic_user_file /etc/nginx/.htpasswd;\r\n\t}\r\n\r\n\t# use NGINX to cache static resources that are requested regularly\r\n\tlocation ~* \\.(css|js|jpg|png|ico)$ {\r\n\t\texpires 168h;\r\n\t}\r\n}\r\n\r\n\r\n# point to our second node app that is running on port 8484 and accept calls over https://example2.de:443\r\nupstream myApp_de {\r\n\t# point to the second running node\r\n\tserver 127.0.0.1:8484;\r\n}\r\n\r\nserver {\r\n\t# users using this port and domain will be directed to the second node app\r\n\t# listen 80;\r\n\t# listen [::]:8080 ipv6only=on;\r\n\tlisten 443 ssl http2;\r\n\t# The IPv6 address is unique - only one app can use the default port 443!\r\n\tlisten [::]:444 ssl http2;\r\n\tserver_name example2.de;\r\n\r\n\t# adding the SSL Certificates\r\n    ssl_prefer_server_ciphers on;\r\n\tssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;\r\n\tssl_dhparam /etc/nginx/ssl/dhparam.pem;\r\n\tssl_certificate /etc/nginx/ssl/nginx-selfsigned.crt;\r\n\tssl_certificate_key /etc/nginx/ssl/nginx-selfsigned.key;\r\n\r\n\t# set the default public directory for your second node\r\n\troot /opt/myApp_de/build/public;\r\n\r\n\t# optimizing Nginx for Best Performance\r\n\tssl_session_cache shared:SSL:5m;\r\n    ssl_session_timeout 1h;\r\n\r\n\tlocation / {\r\n    \tproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\r\n    \tproxy_set_header Host $http_host;\r\n    \tproxy_set_header X-NginX-Proxy true;\r\n    \tproxy_http_version 1.1;\r\n    \tproxy_set_header Upgrade $http_upgrade;\r\n    \tproxy_set_header Connection 'upgrade';\r\n    \tproxy_max_temp_file_size 0;\r\n\t\tproxy_pass http://myApp_de;\r\n    \tproxy_redirect off;\r\n    \tproxy_read_timeout 240s;\r\n\t\t# auth_basic 'Username and Password are required';\r\n\t\t# auth_basic_user_file /etc/nginx/.htpasswd;\r\n\t}\r\n\r\n\t# use NGINX to cache static resources that are requested regularly\r\n\tlocation ~* \\.(css|js|jpg|png|ico)$ {\r\n\t\texpires 168h;\r\n\t}\r\n}\r\n\r\n\r\n# point to our Elasticsearch database that is running on port 9200 and accept calls over 8080\r\nupstream elasticsearch {\r\n\t# point to the second running node\r\n\tserver 127.0.0.1:9200;\r\n}\r\n\r\nserver {\r\n\t# users using this port will be directed to Elasticsearch\r\n\tlisten 8080;\r\n\tlisten [::]:8080 ipv6only=on;\r\n\tserver_name SERVER_IP_ADDRESS;\r\n\r\n\tlocation / {\r\n    \tproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\r\n    \tproxy_set_header Host $http_host;\r\n    \tproxy_set_header X-NginX-Proxy true;\r\n    \tproxy_http_version 1.1;\r\n    \tproxy_set_header Upgrade $http_upgrade;\r\n    \tproxy_set_header Connection 'upgrade';\r\n    \tproxy_max_temp_file_size 0;\r\n\t\tproxy_pass http://elasticsearch;\r\n    \tproxy_redirect off;\r\n    \tproxy_read_timeout 240s;\r\n\t\tauth_basic 'Username and Password are required';\r\n\t\tauth_basic_user_file /etc/nginx/.htpasswd;\r\n\t}\r\n\r\n}\r\n\r\n# point to our Kibana instance that is running on port 5601 and accept calls over 8181\r\nserver {\r\n\t# users using this port and will be directed to Elasticsearch/Kibana\r\n\tlisten 8181;\r\n\tlisten [::]:8181 ipv6only=on;\r\n\r\n\tserver_name SERVER_IP_ADDRESS;\r\n\r\n\tauth_basic 'Restricted Access';\r\n\tauth_basic_user_file /etc/nginx/.htpasswd;\r\n\r\n\tlocation / {\r\n    \tproxy_pass http://localhost:5601;\r\n        proxy_http_version 1.1;\r\n        proxy_set_header Upgrade $http_upgrade;\r\n        proxy_set_header Connection 'upgrade';\r\n        proxy_set_header Host $host;\r\n        proxy_cache_bypass $http_upgrade;        \r\n\t}\r\n\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"07-godaddy-certs",children:"07 GoDaddy Certs"}),"\n",(0,t.jsx)(n.p,{children:"When you ordered a wildcard certificate from goDaddy you will receive two files: Your SSL Certificate with a random name (Ex. 93rfs8dhf834hts.crt) and the GoDaddy intermediate certificate bundle (gd_bundle-g2-g1.crt). Lets install them on our server."}),"\n",(0,t.jsx)(n.h3,{id:"generate-a-csr-and-private-key",children:"Generate a CSR and Private Key"}),"\n",(0,t.jsx)(n.p,{children:"Create a folder to put all our ssl certificates:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mkdir /etc/nginx/ssl\r\ncd /etc/nginx/ssl\n"})}),"\n",(0,t.jsx)(n.p,{children:"Generate our private key, called example.com.key, and a CSR, called example.com.csr:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"openssl req -newkey rsa:2048 -nodes -keyout example.com.key -out example.com.csr\n"})}),"\n",(0,t.jsxs)(n.p,{children:["At this point, you will be prompted for several lines of information that will be included in your certificate request. The most important part is the Common Name field which should match the name that you want to use your certificate with\u200a\u2014\u200afor example, example.com, ",(0,t.jsx)(n.a,{href:"http://www.example.com",children:"www.example.com"}),", or (for a wildcard certificate request) [STAR].example.com."]}),"\n",(0,t.jsx)(n.h3,{id:"download-your-key-from-godaddy",children:"Download your key from GoDaddy"}),"\n",(0,t.jsx)(n.p,{children:"The files you receive will look something like this:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"93rfs8dhf834hts.crt"}),"\n",(0,t.jsx)(n.li,{children:"gd_bundle-g2-g1.crt"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Upload both to /etc/nginx/ssl directory and rename the first one to your domain name example.com.cst"}),"\n",(0,t.jsx)(n.h3,{id:"install-certificate-on-web-server",children:"Install Certificate On Web Server"}),"\n",(0,t.jsx)(n.p,{children:"You can use the following command to create a combined file from both GoDaddy files called example.com.chained.crt:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cat example.com.crt gd_bundle-g2-g1.crt > example.com.chained.crt\n"})}),"\n",(0,t.jsx)(n.p,{children:"And now you should change the access permission to this folder:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd /etc/nginx\r\nsudo chmod -R 600 ssl/\n"})}),"\n",(0,t.jsx)(n.p,{children:"To complete the configuration you have to make sure your NGINX config points to the right cert file and to the private key you generated earlier. Add the following lines inside the server block of your NGINX config:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# adding the SSL Certificates\r\n  ssl_prefer_server_ciphers on;\r\n  ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;\r\n\tssl_certificate /etc/nginx/ssl/example.com.chained.crt;\r\n\tssl_certificate_key /etc/nginx/ssl/example.com.key;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Always test your configuration first:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nginx -t\n"})}),"\n",(0,t.jsx)(n.p,{children:"and then reload:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"service nginx reload\n"})}),"\n",(0,t.jsx)(n.h2,{id:"08-letsencrypt-and-certbot",children:"08 LetsEncrypt and Certbot"}),"\n",(0,t.jsx)(n.h3,{id:"install-certbot-on-centos-7",children:"Install Certbot on CentOS 7"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"yum install certbot-nginx"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Dependencies Resolved\r\n\r\n==============================================================================================\r\n Package                         Arch             Version                Repository      Size\r\n==============================================================================================\r\nInstalling:\r\n python2-certbot-nginx           noarch           0.14.1-1.el7           epel            52 k\r\nInstalling for dependencies:\r\n pyparsing                       noarch           1.5.6-9.el7            base            94 k\r\n\r\nTransaction Summary\r\n==============================================================================================\r\nInstall  1 Package (+1 Dependent package)\r\n\r\nComplete!\n"})}),"\n",(0,t.jsx)(n.h3,{id:"run-certbot",children:"Run Certbot"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"certbot --nginx -d wiki.instar.fr"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Saving debug log to /var/log/letsencrypt/letsencrypt.log\r\nEnter email address (used for urgent renewal and security notices) (Enter 'c' to\r\ncancel):\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"mailto:myemail@email.com",children:"myemail@email.com"})})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"-------------------------------------------------------------------------------\r\nPlease read the Terms of Service at\r\nhttps://letsencrypt.org/documents/LE-SA-v1.1.1-August-1-2016.pdf. You must agree\r\nin order to register with the ACME server at\r\nhttps://acme-v01.api.letsencrypt.org/directory\r\n-------------------------------------------------------------------------------\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"(A)gree/(C)ancel: A"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Starting new HTTPS connection (1): supporters.eff.org\r\nObtaining a new certificate\r\nPerforming the following challenges:\r\ntls-sni-01 challenge for wiki.instar.fr\r\nWaiting for verification...\r\nCleaning up challenges\r\nDeployed Certificate to VirtualHost /etc/nginx/conf.d/virtual.conf for set(['wiki.instar.fr'])\r\n\r\nPlease choose whether HTTPS access is required or optional.\r\n-------------------------------------------------------------------------------\r\n1: Easy - Allow both HTTP and HTTPS access to these sites\r\n2: Secure - Make all requests redirect to secure HTTPS access\r\n-------------------------------------------------------------------------------\r\nSelect the appropriate number [1-2] then [enter] (press 'c' to cancel): 2\r\nThe appropriate server block is already redirecting traffic. To enable redirect anyway, uncomment the redirect lines in /etc/nginx/conf.d/virtual.conf.\r\n-------------------------------------------------------------------------------\r\nCongratulations! You have successfully enabled https://wiki.instar.fr\r\n-------------------------------------------------------------------------------\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"IMPORTANT NOTES:\r\n - Congratulations! Your certificate and chain have been saved at\r\n   /etc/letsencrypt/live/wiki.instar.fr/fullchain.pem. Your cert will\r\n   expire on 2017-12-13. To obtain a new or tweaked version of this\r\n   certificate in the future, simply run certbot again with the\r\n   'certonly' option. To non-interactively renew *all* of your\r\n   certificates, run 'certbot renew'\r\n - Your account credentials have been saved in your Certbot\r\n   configuration directory at /etc/letsencrypt. You should make a\r\n   secure backup of this folder now. This configuration directory will\r\n   also contain certificates and private keys obtained by Certbot so\r\n   making regular backups of this folder is ideal.\n"})}),"\n",(0,t.jsx)(n.h3,{id:"setting-up-auto-renewal",children:"Setting Up Auto Renewal"}),"\n",(0,t.jsx)(n.h4,{id:"systemd",children:"Systemd"}),"\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.em,{children:"/etc/systemd/system/"})," and create the following two files"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"certbot-nginx.service"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[Unit]\r\nDescription=Renew Certbot certificates (nginx)\r\nAfter=network-online.target\r\n\r\n[Service]\r\nType=oneshot\r\nExecStart=/usr/bin/certbot-2 renew --deploy-hook 'systemctl reload nginx'\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"certbot-nginx.timer"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[Unit]\r\nDescription=Renew Certbot certificate (nginx)\r\n\r\n[Timer]\r\nOnCalendar=daily\r\nPersistent=true\r\nRandomizedDelaySec=86400\r\n\r\n[Install]\r\nWantedBy=multi-user.target\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now activate the service"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ systemctl daemon-reload\r\n$ systemctl start certbot-nginx.service  # to run manually\r\n$ systemctl enable --now certbot-nginx.timer  # to use the timer\n"})}),"\n",(0,t.jsx)(n.h4,{id:"crond",children:"Cron.d"}),"\n",(0,t.jsx)(n.p,{children:"Add Certbot renewal to Cron.d in /etc/cron.d - we want to run it twice daily at 13:22 and 04:17:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# Example of job definition:\r\n# .---------------- minute (0 - 59)\r\n# |  .------------- hour (0 - 23)\r\n# |  |  .---------- day of month (1 - 31)\r\n# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...\r\n# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat\r\n# |  |  |  |  |\r\n# *  *  *  *  * user-name command to be executed\r\n\r\n17 4 * * * /usr/bin/certbot-2 renew --quiet\r\n22 13 * * * /usr/bin/certbot-2 renew --quiet\n"})}),"\n",(0,t.jsx)(n.h3,{id:"tls-sni-01-challenge-deactivated",children:"TLS-SNI-01 challenge Deactivated"}),"\n",(0,t.jsx)(n.p,{children:"If you are receiving the following error when trying to add a certificate to your domain:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Client with the currently selected authenticator does not support any combination of challenges that will satisfy the CA.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Follow the Instructions given ",(0,t.jsx)(n.a,{href:"https://community.letsencrypt.org/t/solution-client-with-the-currently-selected-authenticator-does-not-support-any-combination-of-challenges-that-will-satisfy-the-ca/49983",children:"here"})," and if you\u2019re serving files for that domain out of a directory on that server, you can run the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo certbot --authenticator webroot --webroot-path <path to served directory> --installer nginx -d <domain>\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you\u2019re not serving files out of a directory on the server, you can temporarily stop your server while you obtain the certificate and restart it after Certbot has obtained the certificate. This would look like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo certbot --authenticator standalone --installer nginx -d <domain> --pre-hook 'service nginx stop' --post-hook 'service nginx start'\n"})}),"\n",(0,t.jsx)(n.p,{children:"e.g."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create your virtual server conf - the given config below routes an node/express app running on localhost:7777 with a public directory in /opt/mysite-build/app :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-nginx",children:"server {\r\n       listen         80;\r\n       listen    [::]:80;\r\n       server_name    my.domain.com;\r\n       return         301 https://$server_name$request_uri;\r\n}\r\n\r\nupstream app_test {\r\n\t# point to the running node\r\n\tserver 127.0.0.1:7777;\r\n}\r\n\r\nserver {\r\n\tlisten 443 ssl http2;\r\n\tlisten [::]:443 ssl http2;\r\n\tserver_name my.domain.com;\r\n\t\r\n\t# set the default public directory for your node\r\n\troot /opt/mysite-build/app;\r\n\t\r\n\t# Optimizing Nginx for Best Performance\r\n\tssl_session_cache shared:SSL:5m;\r\n    ssl_session_timeout 1h;\r\n\t\r\n\tlocation / {\r\n    \tproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\r\n    \tproxy_set_header Host $http_host;\r\n    \tproxy_set_header X-NginX-Proxy true;\r\n    \tproxy_http_version 1.1;\r\n    \tproxy_set_header Upgrade $http_upgrade;\r\n    \tproxy_set_header Connection 'upgrade';\r\n    \tproxy_max_temp_file_size 0;\r\n\t\tproxy_pass http://wiki2_test;\r\n    \tproxy_redirect off;\r\n    \tproxy_read_timeout 240s;\r\n\t}\r\n\t\r\n\t# use NGINX to cache static resources that are requested regularly\r\n\tlocation ~* \\.(css|js|jpg|png|ico)$ {\r\n\t\texpires 168h;\r\n\t}\r\n\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Test your your site by opening my.domain.com inside your browser - you should be automatically redirected to ",(0,t.jsx)(n.a,{href:"https://my.domain.com",children:"https://my.domain.com"})," and be given a certificate warning. Click to proceed anyway to access your site."]}),"\n",(0,t.jsx)(n.p,{children:"Now run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo certbot --authenticator webroot --webroot-path /opt/mysite-build/app --installer nginx -d my.domain.com\n"})}),"\n",(0,t.jsx)(n.p,{children:"certbot will modify your NGINX config automatically!"})]})}function h(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>c});var t=r(667294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),p=c(r),u=i,x=p["".concat(l,".").concat(u)]||p[u]||d[u]||s;return r?t.createElement(x,o(o({ref:n},h),{},{components:r})):t.createElement(x,o({ref:n},h))}));h.displayName="MDXCreateElement"},618246:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/photo-34607920835_e26fff721f_o-d5f5493fbe3e306fc64a188a3507379f.jpg"}}]);