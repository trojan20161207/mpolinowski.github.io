"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[54938],{855223:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=r(785893),t=r(603905);const a={sidebar_position:9010,slug:"2021-04-28",title:"Installing Ansible Tower (AWX in Docker) on RHEL8",authors:"mpolinowski",tags:["LINUX"]},o=void 0,i={id:"DevOps/Ansible/2021-04-28-ansible-tower-rhel/index",title:"Installing Ansible Tower (AWX in Docker) on RHEL8",description:"Guangzhou, China",source:"@site/docs/DevOps/Ansible/2021-04-28-ansible-tower-rhel/index.md",sourceDirName:"DevOps/Ansible/2021-04-28-ansible-tower-rhel",slug:"/DevOps/Ansible/2021-04-28-ansible-tower-rhel/2021-04-28",permalink:"/docs/DevOps/Ansible/2021-04-28-ansible-tower-rhel/2021-04-28",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Ansible/2021-04-28-ansible-tower-rhel/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:9010,frontMatter:{sidebar_position:9010,slug:"2021-04-28",title:"Installing Ansible Tower (AWX in Docker) on RHEL8",authors:"mpolinowski",tags:["LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Setting up Ansible Tower (AWX)",permalink:"/docs/DevOps/Ansible/2021-04-29-ansible-tower-setup/2021-04-29"},next:{title:"Ansible Docker-in-Docker",permalink:"/docs/DevOps/Ansible/2020-11-26--ansible-dind/2020-11-26"}},l={},c=[{value:"Installing Ansible Tower (AWX)",id:"installing-ansible-tower-awx",level:2},{value:"Prepare your RHEL 8 Server",id:"prepare-your-rhel-8-server",level:3},{value:"Install Ansible AWX 17.1.0",id:"install-ansible-awx-1710",level:2},{value:"Accessing the Web Interface",id:"accessing-the-web-interface",level:3},{value:"Changing the Logo",id:"changing-the-logo",level:2},{value:"Install Ansible AWX 19.2.2 (DOES NOT WORK)",id:"install-ansible-awx-1922-does-not-work",level:2},{value:"Build the image",id:"build-the-image",level:3},{value:"Start the Containers",id:"start-the-containers",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Guangzhou, China",src:r(295916).Z+"",width:"1500",height:"537"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#installing-ansible-tower-awx",children:"Installing Ansible Tower (AWX)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#prepare-your-rhel-8-server",children:"Prepare your RHEL 8 Server"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#install-ansible-awx-1710",children:"Install Ansible AWX 17.1.0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#accessing-the-web-interface",children:"Accessing the Web Interface"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#changing-the-logo",children:"Changing the Logo"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#install-ansible-awx-1922-does-not-work",children:"Install Ansible AWX 19.2.2 (DOES NOT WORK)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#build-the-image",children:"Build the image"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#start-the-containers",children:"Start the Containers"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installing-ansible-tower-awx",children:"Installing Ansible Tower (AWX)"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://github.com/ansible/awx",children:"AWX Project (AWX)"})," is an open source community project. In addition, it\u2019s the OpenSource version of the Ansible Tower software sponsored by Red Hat, that enables users to better control their Ansible project use in IT environments."]}),"\n",(0,s.jsx)(n.h3,{id:"prepare-your-rhel-8-server",children:"Prepare your RHEL 8 Server"}),"\n",(0,s.jsxs)(n.p,{children:["Make sure that both the EPEL Repository and Docker is already installed on your Red Hat Server - see ",(0,s.jsx)(n.a,{href:"/docs/DevOps/Linux/2021-04-11-installing-free-red-hat-enterprise-linux/2021-04-11",children:"setup guide"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dnf install git gcc gcc-c++ nodejs gettext device-mapper-persistent-data lvm2 bzip2 python3-pip ansible\n"})}),"\n",(0,s.jsxs)(n.p,{children:["First, set ",(0,s.jsx)(n.code,{children:"python3"})," as the default one by running the below command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo alternatives --set python /usr/bin/python3\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, use ",(0,s.jsx)(n.code,{children:"pip3"})," command to install the ",(0,s.jsx)(n.code,{children:"docker-compose"})," tool:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\r\nsudo chmod +x /usr/local/bin/docker-compose\r\nsudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose\r\ndocker-compose --version\r\n\r\nsudo pip3 install docker-compose\n'})}),"\n",(0,s.jsx)(n.h2,{id:"install-ansible-awx-1710",children:"Install Ansible AWX 17.1.0"}),"\n",(0,s.jsxs)(n.p,{children:["Clone the ",(0,s.jsx)(n.a,{href:"https://github.com/ansible/awx/releases/tag/17.1.0",children:"latest v17 release"})," with the command (",(0,s.jsx)(n.strong,{children:"Note"})," that AWX underwent changes in version 18! I first tried to ",(0,s.jsx)(n.a,{href:"#install-ansible-awx-1922-does-not-work",children:"install Ansible AWX v19.2.2 following this instructions and it DID NOT WORK"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'git clone -b "17.1.0" https://github.com/ansible/awx.git\n'})}),"\n",(0,s.jsx)(n.p,{children:"Generate a secret encryption key with the command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"openssl rand -base64 30\r\niR0MXri042xWjgqztRXFK1eLERtU+9g2OhYRVWld\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Navigate to the ",(0,s.jsx)(n.code,{children:"awx/installer"})," directory and locate the ",(0,s.jsx)(n.strong,{children:"inventory"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd awx/installer/\r\nnano inventory\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'localhost ansible_connection=local ansible_python_interpreter="/usr/bin/env python3"\r\n\r\n[all:vars]\r\n\r\n# Remove these lines if you want to run a local image build\r\n# Otherwise the setup playbook will install the official Ansible images. Versions may\r\n# be selected based on: latest, 1, 1.0, 1.0.0, 1.0.0.123\r\n# by default the base will be used to search for ansible/awx\r\ndockerhub_base=ansible\r\n\r\n# Openshift Install\r\n# Will need to set -e openshift_password=developer -e docker_registry_password=$(oc whoami -t)\r\n#           or set -e openshift_token=TOKEN\r\n# openshift_host=127.0.0.1:8443\r\n# openshift_project=awx\r\n# openshift_user=developer\r\n# openshift_skip_tls_verify=False\r\n# openshift_pg_emptydir=True\r\n\r\n# Kubernetes Install\r\n# kubernetes_context=test-cluster\r\n# kubernetes_namespace=awx\r\n# kubernetes_web_svc_type=NodePort\r\n# Optional Kubernetes Variables\r\n# pg_image_registry=docker.io\r\n# pg_serviceaccount=awx\r\n# pg_volume_capacity=5\r\n# pg_persistence_storageClass=StorageClassName\r\n# pg_persistence_existingclaim=postgres_pvc\r\n# pg_cpu_limit=1000\r\n# pg_mem_limit=2\r\n\r\n# Kubernetes Ingress Configuration\r\n# You can use the variables below to configure Kubernetes Ingress\r\n# Set hostname\r\n# kubernetes_ingress_hostname=awx.example.org\r\n# Add annotations. The example below shows an annotation to be used with Traefik but other Ingress controllers are also supported\r\n# kubernetes_ingress_annotations={\'kubernetes.io/ingress.class\': \'traefik\', \'traefik.ingress.kubernetes.io/redirect-entry-point\': \'https\'}\r\n# Specify a secret for TLS termination\r\n# kubernetes_ingress_tls_secret=awx-cert\r\n\r\n# Kubernetes and Openshift Install Resource Requests\r\n# These are the request and limit values for a pod\'s container for task/web/redis/management.\r\n# The total amount of requested resources for a pod is the sum of all\r\n# resources requested by all containers in the pod\r\n# A cpu_request of 1500 is 1.5 cores for the container to start out with.\r\n# A cpu_limit defines the maximum cores that that container can reserve.\r\n# A mem_request of 2 is for 2 gigabytes of memory for the container\r\n# A mem_limit defines the maximum memory that that container can reserve.\r\n# Default values for these entries can be found in ./roles/kubernetes/defaults/main.yml\r\n# task_cpu_request=1500\r\n# task_mem_request=2\r\n# task_cpu_limit=2000\r\n# task_mem_limit=4\r\n# web_cpu_limit=1000\r\n# web_mem_limit=2\r\n# redis_cpu_limit=1000\r\n# redis_mem_limit=3\r\n# management_cpu_limit=2000\r\n# management_mem_limit=2\r\n\r\n# Common Docker parameters\r\nawx_task_hostname=awx\r\nawx_web_hostname=awxweb\r\n# Local directory that is mounted in the awx_postgres docker container to place the db in\r\npostgres_data_dir="/opt/awx/pgdocker"\r\nhost_port=80\r\nhost_port_ssl=443\r\n#ssl_certificate=\r\n# Optional key file\r\n#ssl_certificate_key=\r\ndocker_compose_dir="/opt/awx/awxcompose"\r\n\r\n# Required for Openshift when building the image on your own\r\n# Optional for Openshift if using Dockerhub or another prebuilt registry\r\n# Required for Docker Compose Install if building the image on your own\r\n# Optional for Docker Compose Install if using Dockerhub or another prebuilt registry\r\n# Define if you want the image pushed to a registry. The container definition will also use these images\r\n# docker_registry=172.30.1.1:5000\r\n# docker_registry_repository=awx\r\n# docker_registry_username=developer\r\n\r\n\r\n# Set pg_hostname if you have an external postgres server, otherwise\r\n# a new postgres service will be created\r\n# pg_hostname=postgresql\r\npg_username=awx\r\n# pg_password should be random 10 character alphanumeric string, when postgresql is running on kubernetes\r\n# NB: it\'s a limitation of the "official" postgres helm chart\r\npg_password=awxpassword\r\npg_database=awx\r\npg_port=5432\r\n#pg_sslmode=require\r\n\r\n# If requiring SSL communication (e.g. pg_sslmode=\'verify-full\') with Postgres\r\n# and using a self-signed certificate or a certificate signed by a custom CA\r\n# set pg_root_ca_file to a file containing the self-signed certificate or the\r\n# root CA certificate chain.\r\n# pg_root_ca_file=\'example_root_ca.crt\'\r\n\r\n# The following variable is only required when using the provided\r\n# containerized postgres deployment on OpenShift\r\n# pg_admin_password=postgrespass\r\n\r\n# This will create or update a default admin (superuser) account in AWX, if not provided\r\n# then these default values are used\r\nadmin_user=admin\r\nadmin_password=password\r\n\r\n# Whether or not to create preload data for demonstration purposes\r\ncreate_preload_data=True\r\n\r\n# AWX Secret key\r\n# It\'s *very* important that this stay the same between upgrades or you will lose the ability to decrypt\r\n# your credentials >> Use the key you created with `openssl rand -base64 30`\r\nsecret_key=iR0MXri042xWjgqztRXFK1eLERtU+9g2OhYRVWld\r\n\r\n# By default a broadcast websocket secret will be generated.\r\n# If you would like to *rerun the playbook*, you need to set a unique password.\r\n# Otherwise it would generate a new one every playbook run.\r\n# broadcast_websocket_secret=\r\n\r\n# Build AWX with official logos\r\n# Requires cloning awx-logos repo as a sibling of this project.\r\n# Review the trademark guidelines at https://github.com/ansible/awx-logos/blob/master/TRADEMARKS.md\r\nawx_official=false\r\n\r\n# Proxy\r\n#http_proxy=http://proxy:3128\r\n#https_proxy=http://proxy:3128\r\n#no_proxy=mycorp.org\r\n\r\n# Container networking configuration\r\n# Set the awx_task and awx_web containers\' search domain(s)\r\n#awx_container_search_domains=example.com,ansible.com\r\n# Alternate DNS servers\r\n#awx_alternate_dns_servers="10.1.2.3,10.2.3.4"\r\n\r\n# AWX project data folder. If you need access to the location where AWX stores the projects\r\n# it manages from the docker host, you can set this to turn it into a volume for the container.\r\n#project_data_dir=/var/lib/awx/projects\r\n\r\n# AWX custom virtual environment folder. Only usable for local install.\r\n#custom_venv_dir=/opt/my-envs/\r\n\r\n# CA Trust directory. If you need to provide custom CA certificates, supplying\r\n# this variable causes this directory on the host to be bind mounted over\r\n# /etc/pki/ca-trust in the awx_task and awx_web containers.\r\n# If you are deploying on openshift or kubernetes, set the variable to /etc/pki/ca-trust instead,\r\n# as the awx_web and awx_task containers will not run the `update-ca-trust` command.\r\n#ca_trust_dir=/etc/pki/ca-trust/source/anchors\r\n\r\n# Include /etc/nginx/awx_extra.conf\r\n# Note the use of glob pattern for nginx\r\n# which makes include "optional" - i.e. not fail\r\n# if file is absent\r\n#extra_nginx_include="/etc/nginx/awx_extra[.]conf"\r\n\r\n# Docker compose explicit subnet. Set to avoid overlapping your existing LAN networks.\r\n#docker_compose_subnet="172.17.0.1/16"\r\n#\r\n# Allow for different docker logging drivers\r\n# By Default; the logger will be json-file, however you can override\r\n# that by uncommenting the docker_logger below.\r\n# Be aware that journald may rate limit your log messages if you choose it.\r\n# See: https://docs.docker.com/config/containers/logging/configure/\r\n# docker_logger=journald\r\n#\r\n\r\n# Add extra hosts to docker compose file. This might be necessary to\r\n# sneak in servernames. For example for DMZ self-signed CA certificates.\r\n# Equivialent to using the --add-host parameter with "docker run".\r\n#docker_compose_extra_hosts="otherserver.local:192.168.0.1,ldap-server.local:192.168.0.2"\r\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"inventory"})," file above I choose the folder ",(0,s.jsx)(n.code,{children:"/opt/awx"})," to hold the PostgresSQL Data - whatever you choose there, make sure that the directory exists and can be written to by your Docker user:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo mkdir /opt/awx\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now we can install Ansible AWX with following the Ansible command from inside the ",(0,s.jsx)(n.code,{children:"awx/installer/"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo ansible-playbook -i inventory install.yml\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you get the following ",(0,s.jsx)(n.strong,{children:"Error Message"})," : ",(0,s.jsx)(n.em,{children:'"could not find an available, non-overlapping IPv4 address pool among the defaults to assign to the network"'})," -> deactivate your VNP connection!"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'fatal: [localhost]: FAILED! => {"changed": true, "cmd": "docker-compose run --rm --service-ports task awx-manage migrate --no-input", "delta": "0:00:00.472026", "end": "2021-07-13 13:33:22.085111", "msg": "non-zero return code", "rc": 1, "start": "2021-07-13 13:33:21.613085", "stderr": "Creating network \\"awxcompose_default\\" with the default driver\\ncould not find an available, non-overlapping IPv4 address pool among the defaults to assign to the network", "stderr_lines": ["Creating network \\"awxcompose_default\\" with the default driver", "could not find an available, non-overlapping IPv4 address pool among the defaults to assign to the network"], "stdout": "", "stdout_lines": []}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Once the installation process finishes you should see the following docker container running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo docker ps\r\n\r\nCONTAINER ID   IMAGE                PORTS                                   NAMES\r\nb9b98dbb397e   ansible/awx:17.1.0   8052/tcp                                awx_task\r\n975b09b0249f   ansible/awx:17.1.0   0.0.0.0:80->8052/tcp, :::80->8052/tcp   awx_web\r\nf44e1359855e   postgres:12          5432/tcp                                awx_postgres\r\n4936bcef8a8c   redis                6379/tcp                                awx_redis\n"})}),"\n",(0,s.jsx)(n.h3,{id:"accessing-the-web-interface",children:"Accessing the Web Interface"}),"\n",(0,s.jsx)(n.p,{children:"I needed to open the HTTP/S port in my firewall:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo firewall-cmd --permanent --zone=public --add-service=http  --add-service=https\n"})}),"\n",(0,s.jsx)(n.p,{children:"And there was an advice to configure SELinux - but it seems that it is not enabled by default on RHEL8... did not need it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"semanage port -a -t http_port_t -p tcp 8052\r\nsetsebool -P httpd_can_network_connect 1\n"})}),"\n",(0,s.jsx)(n.p,{children:"Finally I am able to access the WebUI on my server IP:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Ansible Tower (AWX)",src:r(144352).Z+"",width:"1231",height:"962"})}),"\n",(0,s.jsxs)(n.p,{children:["Login using the Admin pass you set inside the ",(0,s.jsx)(n.code,{children:"inventory"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cfg",children:"admin_user=admin\r\nadmin_password=password\n"})}),"\n",(0,s.jsx)(n.p,{children:"Ta da! The Ansible Tower (AWX) web interface is at your service:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Ansible Tower (AWX)",src:r(868882).Z+"",width:"1231",height:"919"})}),"\n",(0,s.jsx)(n.h2,{id:"changing-the-logo",children:"Changing the Logo"}),"\n",(0,s.jsx)(n.p,{children:"The logo and login background seems to be stored in:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"awx/awx/ui_next/public/static/media\n"})}),"\n",(0,s.jsx)(n.p,{children:"I will try changing the content of this directory and rebuild the app later :)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"EDIT"}),": Changing the Logo inside your already build container:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Back up the original files:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo docker exec -ti awx_web /bin/bash\r\n\r\nbash-4.4# cd /var/lib/awx/public/static/media/\r\nbash-4.4# mv logo-header.svg logo-header.svg.bsk\r\nbash-4.4# mv logo-header.svg.bsk logo-header.svg.bak\r\nbash-4.4# mv pfbg_576.jpg pfbg_576.jpg.bak\r\nbash-4.4# mv pfbg_576@2x.jpg pfbg_576@2x.jpg.bak\r\nbash-4.4# mv pfbg_768.jpg pfbg_768.jpg.bak\r\nbash-4.4# mv pfbg_768@2x.jpg pfbg_768@2x.jpg.bak\r\nbash-4.4# mv pfbg_2000.jpg pfbg_2000.jpg.bak\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Create your own versions and copy them into the ",(0,s.jsx)(n.code,{children:"awx_web"})," container:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo docker cp ~/Pictures/logo-login.svg awx_web:/var/lib/awx/public/static/media/logo-login.svg\r\nsudo docker cp ~/Pictures/logo-header.svg awx_web:/var/lib/awx/public/static/media/logo-header.svg\r\nsudo docker cp ~/Pictures/pfbg_2000.jpg awx_web:/var/lib/awx/public/static/media/pfbg_2000.4f598944.jpg\r\nsudo docker cp ~/Pictures/pfbg_576@2x.jpg awx_web:/var/lib/awx/public/static/media/pfbg_576@2x.b48e77bc.jpg\r\nsudo docker cp ~/Pictures/pfbg_576.jpg awx_web:/var/lib/awx/public/static/media/pfbg_576.85341a9c.jpg\r\nsudo docker cp ~/Pictures/pfbg_768@2x.jpg awx_web:/var/lib/awx/public/static/media/pfbg_768@2x.0099dea3.jpg\r\nsudo docker cp ~/Pictures/pfbg_768.jpg awx_web:/var/lib/awx/public/static/media/pfbg_768.c9839717.jpg\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo docker cp ~/Downloads/logo-login.svg awx_task:/var/lib/awx/venv/awx/lib/python3.6/site-packages/awx/ui_next/build/static/media/logo-login.svg\r\nsudo docker cp ~/Downloads/logo-header.svg awx_task:/var/lib/awx/venv/awx/lib/python3.6/site-packages/awx/ui_next/build/static/media/logo-header.svg\r\nsudo docker cp ~/Downloads/pfbg_2000.jpg awx_task:/var/lib/awx/venv/awx/lib/python3.6/site-packages/awx/ui_next/build/static/media/pfbg_2000.jpg\r\nsudo docker cp ~/Downloads/pfbg_576@2x.jpg awx_task:/var/lib/awx/venv/awx/lib/python3.6/site-packages/awx/ui_next/build/static/media/pfbg_576@2x.jpg\r\nsudo docker cp ~/Downloads/pfbg_576.jpg awx_task:/var/lib/awx/venv/awx/lib/python3.6/site-packages/awx/ui_next/build/static/media/pfbg_576.jpg\r\nsudo docker cp ~/Downloads/pfbg_768@2x.jpg awx_task:/var/lib/awx/venv/awx/lib/python3.6/site-packages/awx/ui_next/build/static/media/pfbg_768@2x.jpg\r\nsudo docker cp ~/Downloads/pfbg_768.jpg awx_task:/var/lib/awx/venv/awx/lib/python3.6/site-packages/awx/ui_next/build/static/media/pfbg_768.jpg\n"})}),"\n",(0,s.jsx)(n.h2,{id:"install-ansible-awx-1922-does-not-work",children:"Install Ansible AWX 19.2.2 (DOES NOT WORK)"}),"\n",(0,s.jsxs)(n.p,{children:["Clone the ",(0,s.jsx)(n.a,{href:"https://github.com/ansible/awx/releases",children:"latest release"})," with the command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'git clone -b "19.2.2" https://github.com/ansible/awx.git\n'})}),"\n",(0,s.jsx)(n.p,{children:"Generate a secret encryption key with the command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"openssl rand -base64 30\r\niR0MXri042xWjgqztRXFK1eLERtU+9g2OhYRVWld\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Navigate to the ",(0,s.jsx)(n.code,{children:"awx/installer"})," directory and locate the inventory file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nano awx/tools/docker-compose/inventory\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'localhost ansible_connection=local ansible_python_interpreter="/usr/bin/env python3"\r\n\r\n[all:vars]\r\n\r\n# AWX-Managed Database Settings\r\n# If left blank, these will be generated upon install.\r\n# Values are written out to tools/docker-compose/_sources/secrets/\r\n# pg_password=""\r\n# broadcast_websocket_secret=""\r\n# secret_key=""\r\nsecret_key=iR0MXri042xWjgqztRXFK1eLERtU+9g2OhYRVWld\r\n\r\n# External Database Settings\r\n# pg_host=""\r\n# pg_password=""\r\n# pg_username=""\r\n# pg_hostname=""\r\npg_username=awx\r\npg_password=awxpassword\r\npg_database=awx\r\npg_port=5432\r\n\r\n# awx_image="quay.io/awx/awx_devel"\r\n# migrate_local_docker=false\r\n\r\ndockerhub_base=ansible\r\nawx_task_hostname=awx\r\nawx_web_hostname=awxweb\r\npostgres_data_dir="/opt/awx/pgdocker"\r\nhost_port=80\r\nhost_port_ssl=443\r\ndocker_compose_dir="/opt/awx/awxcompose"\r\nadmin_user=admin\r\nadmin_password=password\r\ncreate_preload_data=True\r\nawx_official=false\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo mkdir /opt/awx\n"})}),"\n",(0,s.jsx)(n.h3,{id:"build-the-image",children:"Build the image"}),"\n",(0,s.jsx)(n.p,{children:"The AWX base container image (defined in the Dockerfile templated from Dockerfile.j2) contains basic OS dependencies and symbolic links into the development environment that make running the services easy. Run the following to build the image:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo make docker-compose-build\n"})}),"\n",(0,s.jsx)(n.h3,{id:"start-the-containers",children:"Start the Containers"}),"\n",(0,s.jsx)(n.p,{children:"Run the awx, postgres and redis containers. This utilizes the image built in the previous step, and will automatically start all required services and dependent containers. Once the containers launch, your session will be attached to the awx container, and you'll be able to watch log messages and events in real time. You will see messages from Django and the front end build process."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo make docker-compose\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Running ",(0,s.jsx)(n.code,{children:"sudo docker images"})," shows me that the build was tagged with ",(0,s.jsx)(n.strong,{children:"HEAD"})," - I will have to add this to the make ",(0,s.jsx)(n.code,{children:"sudo COMPOSE_TAG=HEAD make docker-compose"})]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["For running docker-compose detached mode, start the containers using the following command: ",(0,s.jsx)(n.code,{children:"sudo make docker-compose COMPOSE_UP_OPTS=-d"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ERROR"}),": The docker run ended with an error message ",(0,s.jsx)(n.code,{children:'starting container awx1 caused: exec "/entrypoint.sh": permission denied: unknown'}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo chown root:root tools/docker-compose/entrypoint.sh\r\nsudo chmod +x tools/docker-compose/entrypoint.sh\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>c});var s=r(667294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,s,t=function(e,n){if(null==e)return{};var r,s,t={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=s.createContext({}),c=function(e){var n=s.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},h=s.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(r),g=t,u=p["".concat(l,".").concat(g)]||p[g]||d[g]||a;return r?s.createElement(u,o(o({ref:n},h),{},{components:r})):s.createElement(u,o({ref:n},h))}));h.displayName="MDXCreateElement"},144352:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/Ansible_Tower_01-69503e3ba3bf04e05a9a9adc15746a03.png"},868882:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/Ansible_Tower_02-156d3f5ef0e2db1ff339e1307f485ec7.png"},295916:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-e280ac64c46eea72fd9db939f902292a.jpg"}}]);