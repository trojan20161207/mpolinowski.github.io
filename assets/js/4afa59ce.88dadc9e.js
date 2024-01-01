"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[52964],{58811:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=s(785893),t=s(603905);const i={sidebar_position:9e3,slug:"2019-03-05",title:"Setting up an OKD Cluster",authors:"mpolinowski",tags:["LINUX","Docker","OpenShift"]},o=void 0,a={id:"DevOps/Kubernetes/2019-03-05--first-openshift3-cluster/index",title:"Setting up an OKD Cluster",description:"Mustang, Nepal",source:"@site/docs/DevOps/Kubernetes/2019-03-05--first-openshift3-cluster/index.mdx",sourceDirName:"DevOps/Kubernetes/2019-03-05--first-openshift3-cluster",slug:"/DevOps/Kubernetes/2019-03-05--first-openshift3-cluster/2019-03-05",permalink:"/docs/DevOps/Kubernetes/2019-03-05--first-openshift3-cluster/2019-03-05",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Kubernetes/2019-03-05--first-openshift3-cluster/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"OpenShift",permalink:"/docs/tags/open-shift"}],version:"current",sidebarPosition:9e3,frontMatter:{sidebar_position:9e3,slug:"2019-03-05",title:"Setting up an OKD Cluster",authors:"mpolinowski",tags:["LINUX","Docker","OpenShift"]},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Beyond the Edge",permalink:"/docs/DevOps/Kubernetes/2022-11-19--k3s-air-gapped-kubernetes/2022-11-19"},next:{title:"Red Hat OpenShift 3 Container Platform",permalink:"/docs/DevOps/Kubernetes/2019-03-02--installing-openshift-3-on-centos-7/2019-03-02"}},l={},c=[{value:"System and environment requirements",id:"system-and-environment-requirements",level:2},{value:"SELinux requirements",id:"selinux-requirements",level:3},{value:"Optional: Configuring Core Usage",id:"optional-configuring-core-usage",level:3},{value:"DNS Requirements",id:"dns-requirements",level:3},{value:"Packages Requirements",id:"packages-requirements",level:3},{value:"OpenShift Installation",id:"openshift-installation",level:2},{value:"Enable NetworkManager and Docker Services",id:"enable-networkmanager-and-docker-services",level:3},{value:"Install Ansible and Clone Openshift-Ansible on the Master Node",id:"install-ansible-and-clone-openshift-ansible-on-the-master-node",level:3},{value:"Generate SSH Keys on the Master Node",id:"generate-ssh-keys-on-the-master-node",level:3},{value:"Creating the OpenShift Inventory File",id:"creating-the-openshift-inventory-file",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Mustang, Nepal",src:s(466362).Z+"",width:"1500",height:"530"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#system-and-environment-requirements",children:"System and environment requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#selinux-requirements",children:"SELinux requirements"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#optional-configuring-core-usage",children:"Optional: Configuring Core Usage"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#dns-requirements",children:"DNS Requirements"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#packages-requirements",children:"Packages Requirements"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#openshift-installation",children:"OpenShift Installation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#enable-networkmanager-and-docker-services",children:"Enable NetworkManager and Docker Services"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#install-ansible-and-clone-openshift-ansible-on-the-master-node",children:"Install Ansible and Clone Openshift-Ansible on the Master Node"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#generate-ssh-keys-on-the-master-node",children:"Generate SSH Keys on the Master Node"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#creating-the-openshift-inventory-file",children:"Creating the OpenShift Inventory File"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"OKD brings together Docker and Kubernetes, and provides an API to manage these services. OKD allows you to create and manage containers."}),"\n",(0,r.jsx)(n.p,{children:"Containers are standalone processes that run within their own environment, independent of the operating system and the underlying infrastructure. OKD helps you to develop, deploy, and manage container-based applications. It provides you with a self-service platform to create, modify, and deploy applications on demand, thus enabling faster development and release life cycles."}),"\n",(0,r.jsx)(n.h2,{id:"system-and-environment-requirements",children:"System and environment requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Master hosts"})," In a highly available OKD cluster with external etcd, a master host needs to meet the minimum requirements and have 1 CPU core and 1.5 GB of memory for each 1000 pods. Therefore, the recommended size of a master host in an OKD cluster of 2000 pods is the minimum requirements of 2 CPU cores and 16 GB of RAM, plus 2 CPU cores and 3 GB of RAM, totaling 4 CPU cores and 19 GB of RAM."]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Node hosts"}),": The size of a node host depends on the expected size of its workload. As an OKD cluster administrator, you need to calculate the expected workload and add about 10 percent for overhead. For production environments, allocate enough resources so that a node host failure does not affect your maximum capacity."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/var/lib/openshift"})}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Used for etcd storage only when in single master mode and etcd is embedded in the atomic-openshift-master process."}),"\n",(0,r.jsx)(n.li,{children:"Less than 10GB."}),"\n",(0,r.jsx)(n.li,{children:"Will grow slowly with the environment. Only storing metadata."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/var/lib/etcd"})}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Used for etcd storage when in Multi-Master mode or when etcd is made standalone by an administrator."}),"\n",(0,r.jsx)(n.li,{children:"Less than 20 GB."}),"\n",(0,r.jsx)(n.li,{children:"Will grow slowly with the environment. Only storing metadata."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/var/lib/docker"})}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"When the run time is docker, this is the mount point. Storage used for active container runtimes (including pods) and storage of local images (not used for registry storage). Mount point should be managed by docker-storage rather than manually."}),"\n",(0,r.jsx)(n.li,{children:"50 GB for a Node with 16 GB memory. Additional 20-25 GB for every additional 8 GB of memory."}),"\n",(0,r.jsx)(n.li,{children:"Growth is limited by the capacity for running containers."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/var/lib/containers"})}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"When the run time is CRI-O, this is the mount point. Storage used for active container runtimes (including pods) and storage of local images (not used for registry storage)."}),"\n",(0,r.jsx)(n.li,{children:"50 GB for a Node with 16 GB memory. Additional 20-25 GB for every additional 8 GB of memory."}),"\n",(0,r.jsx)(n.li,{children:"Growth limited by capacity for running containers"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/var/lib/origin/openshift.local.volumes"})}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ephemeral volume storage for pods. This includes anything external that is mounted into a container at runtime. Includes environment variables, kube secrets, and data volumes not backed by persistent storage PVs."}),"\n",(0,r.jsx)(n.li,{children:"Varies"}),"\n",(0,r.jsx)(n.li,{children:"Minimal if pods requiring storage are using persistent volumes. If using ephemeral storage, this can grow quickly."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/var/log"})}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Log files for all components."}),"\n",(0,r.jsx)(n.li,{children:"10 to 30 GB."}),"\n",(0,r.jsx)(n.li,{children:"Log files can grow quickly; size can be managed by growing disks or managed using log rotate."}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"selinux-requirements",children:"SELinux requirements"}),"\n",(0,r.jsxs)(n.p,{children:["Security-Enhanced Linux (SELinux) must be enabled on all of the servers before installing OKD or the installer will fail. Also, configure ",(0,r.jsx)(n.code,{children:"SELINUX=enforcing"})," and ",(0,r.jsx)(n.code,{children:"SELINUXTYPE=targeted"})," in the ",(0,r.jsx)(n.code,{children:"/etc/selinux/config"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"# This file controls the state of SELinux on the system.\r\n# SELINUX= can take one of these three values:\r\n#     enforcing - SELinux security policy is enforced.\r\n#     permissive - SELinux prints warnings instead of enforcing.\r\n#     disabled - No SELinux policy is loaded.\r\nSELINUX=enforcing\r\n# SELINUXTYPE= can take one of three two values:\r\n#     targeted - Targeted processes are protected,\r\n#     minimum - Modification of targeted policy. Only selected processes are protected.\r\n#     mls - Multi Level Security protection.\r\nSELINUXTYPE=targeted\n"})}),"\n",(0,r.jsx)(n.h3,{id:"optional-configuring-core-usage",children:"Optional: Configuring Core Usage"}),"\n",(0,r.jsx)(n.p,{children:"By default, OKD masters and nodes use all available cores in the system they run on. You can choose the number of cores you want OKD to use by setting the GOMAXPROCS environment variable. For example, run the following before starting the server to make OKD only run on one core:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# export GOMAXPROCS=1\n"})}),"\n",(0,r.jsx)(n.h3,{id:"dns-requirements",children:"DNS Requirements"}),"\n",(0,r.jsxs)(n.p,{children:["Adding entries into the ",(0,r.jsx)(n.code,{children:"nano /etc/hosts"})," file on each host is not enough (",(0,r.jsx)(n.em,{children:"? According to the official documentation ?"}),"). In the example below all three host - one master and two minions - are resolved by their domain name ",(0,r.jsx)(n.code,{children:"in-centos-master"}),", ",(0,r.jsx)(n.code,{children:"in-centos-minion1"}),", ",(0,r.jsx)(n.code,{children:"in-centos-minion2"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"# The following lines are desirable for IPv4 capable hosts\r\n127.0.0.1 localhost.localdomain localhost\r\n127.0.0.1 localhost4.localdomain4 localhost4\r\n\r\n# The following lines are desirable for IPv6 capable hosts\r\n::1 localhost.localdomain localhost\r\n::1 localhost6.localdomain6 localhost6\r\n\r\n# Kubernetes Cluster\r\n193.101.18.2 in-centos-master master\r\n116.211.18.8 in-centos-minion1 minion1\r\n78.33.18.14 in-centos-minion2 minion2\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can test that the nodes are able to reach each other by sending a ping: ",(0,r.jsx)(n.code,{children:"ping master"}),", ",(0,r.jsx)(n.code,{children:"ping minion1"}),", ",(0,r.jsx)(n.code,{children:"ping minion2"}),". You can set those hostnames on each node with the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"hostnamectl set-hostname in-centos-master  # for the master node, etc.\n"})}),"\n",(0,r.jsx)(n.h3,{id:"packages-requirements",children:"Packages Requirements"}),"\n",(0,r.jsx)(n.p,{children:"On a fresh Centos-minimal install you will have to install the following packages on all nodes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yum install -y wget git zile nano net-tools docker bind-utils iptables-services bridge-utils bash-completion kexec-tools sos psacct openssl-devel httpd-tools NetworkManager python-cryptography python2-pip python-devel python-passlib java-1.8.0-openjdk-headless '@Development Tools'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"openshift-installation",children:"OpenShift Installation"}),"\n",(0,r.jsx)(n.p,{children:"Add the Epel Release (and disable it by default) and the Centos Openshift Mirror:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"rpm -ivh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm\r\n\r\nsed -i -e 's/^enabled=1/enabled=0/' /etc/yum.repos.d/epel.repo\r\n\r\nnano /etc/yum.repos.d/Openshift.repo\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add the following configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"[openshift]\r\nname=CentOS-OpenShift\r\nbaseurl=http://mirror.centos.org/centos/7/paas/x86_64/openshift-origin39\r\ngpgcheck=0\r\nenabled=1\n"})}),"\n",(0,r.jsx)(n.p,{children:"And check that both have been added with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yum repolist\n"})}),"\n",(0,r.jsx)(n.h3,{id:"enable-networkmanager-and-docker-services",children:"Enable NetworkManager and Docker Services"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"systemctl start NetworkManager\r\nsystemctl enable NetworkManager\r\nsystemctl status NetworkManager\r\n\r\nsystemctl start docker\r\nsystemctl enable docker\r\nsystemctl status docker\n"})}),"\n",(0,r.jsx)(n.h3,{id:"install-ansible-and-clone-openshift-ansible-on-the-master-node",children:"Install Ansible and Clone Openshift-Ansible on the Master Node"}),"\n",(0,r.jsxs)(n.p,{children:["Now we can install ",(0,r.jsx)(n.a,{href:"https://docs.ansible.com/",children:"Ansible"})," from the Epel repository - note you need to enable it first if you followed along and disabled it earlier:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yum -y --enablerepo=epel install ansible pyOpenSSL\r\ngit clone https://github.com/openshift/openshift-ansible.git\r\ncd openshift-ansible && git fetch && git checkout release-3.11\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now we have the ",(0,r.jsx)(n.a,{href:"https://github.com/openshift/openshift-ansible",children:"OpenShift-Ansible"})," package cloned and the checked out the latest stable version 3.11."]}),"\n",(0,r.jsx)(n.h3,{id:"generate-ssh-keys-on-the-master-node",children:"Generate SSH Keys on the Master Node"}),"\n",(0,r.jsx)(n.p,{children:"We can now generate an SSH key on our master and copy it to the minion nodes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ssh-keygen -f ~/.ssh/id_rsa -N ''\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will generate a key in ",(0,r.jsx)(n.code,{children:"~/.ssh/id_rsa.pub"})," that you have to copy to each node to be able to ssh into those nodes without a password:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ssh-copy-id -i ~/.ssh/id_rsa.pub master -p 22\r\nssh-copy-id -i ~/.ssh/id_rsa.pub minion1 -p 22\r\nssh-copy-id -i ~/.ssh/id_rsa.pub minion2 -p 22\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now verify that you are able to access each node from the master without having to use your password to login:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ssh root@master -p 22\r\nssh root@minion1 -p 22\r\nssh root@minion2 -p 22\n"})}),"\n",(0,r.jsx)(n.h2,{id:"creating-the-openshift-inventory-file",children:"Creating the OpenShift Inventory File"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_intro.html",children:"Playbooks"})," are a completely different way to use ansible than in ad-hoc task execution mode, and are particularly powerful."]}),"\n",(0,r.jsx)(n.p,{children:"Simply put, playbooks are the basis for a really simple configuration management and multi-machine deployment system, unlike any that already exist, and one that is very well suited to deploying complex applications. Playbooks can declare configurations, but they can also orchestrate steps of any manual ordered process, even as different steps must bounce back and forth between sets of machines in particular orders. They can launch tasks synchronously or asynchronously."}),"\n",(0,r.jsxs)(n.p,{children:["Ansible works against multiple systems in your infrastructure at the same time. It does this by selecting portions of systems listed in ",(0,r.jsx)(n.a,{href:"https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html",children:"Ansible\u2019s inventory"}),". You can check out ",(0,r.jsx)(n.code,{children:"cd ~/openshift-ansible/inventory"})," for some example files."]}),"\n",(0,r.jsxs)(n.p,{children:["Based on those files we can create our first own ",(0,r.jsx)(n.code,{children:"nano inventory.ini"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",children:"# OpenShift-Ansible host inventory\r\n\r\n# Create an OSEv3 group that contains the masters and nodes groups\r\n[OSEv3:children]\r\nmasters\r\nnodes\r\netcd\r\n\r\n\r\n# Set variables common for all OSEv3 hosts\r\n[OSEv3:vars]\r\nansible_ssh_user=root\r\nenable_excluders=False\r\nenable_docker_excluder=False\r\nopenshift_enable_service_catalog=False\r\nansible_service_broker_install=False\r\n\r\n# Debug level for all OpenShift components (Defaults to 2)\r\ndebug_level=2\r\n\r\ncontainerized=True\r\nos_sdn_network_plugin_name='redhat/openshift-ovs-multitenant'\r\nopenshift_disable_check=disk_availability,docker_storage,memory_availability,docker_image_availability\r\n\r\nopenshift_node_kubelet_args={'pods-per-core': ['10']}\r\n\r\ndeployment_type=origin\r\nopenshift_deployment_type=origin\r\n\r\nopenshift_release=v3.11.0\r\nopenshift_pkg_version=v3.11.0\r\nopenshift_image_tag=v3.11.0\r\nopenshift_service_catalog_image_version=v3.11.0\r\nopenshift_service_broker_image_version=v3.11.0\r\nosm_use_cockpit=true\r\n\r\n# Router on dedicated Infra Node\r\nopenshift_hosted_router_selector='region=infra'\r\nopenshift_master_default_subdomain=apps.test.instar.wiki\r\nopenshift_public_hostname=master.test.instar.wiki\r\n\r\n# Image Registry on dedicated Infra Node\r\nopenshift_hosted_registry_selector='region=infra'\r\n\r\n# htpasswd authentication with OSAdmin / dmlAjICyfrYXCsEH3NOoeeZMBkbo9G0JJy70z4etiO1dlCoo\r\nopenshift_master_identity_providers=[{'name': 'htpasswd_auth', 'login': 'true', 'challenge': 'true', 'kind': 'HTPasswdPasswordIdentityProvider', 'filename': '/etc/origin/master/htpasswd'}]\r\nopenshift_master_htpasswd_users={'OSAdmin': '$apr1$de7aZ7AQ$b0/L6hgDDskpuKekx/kfe.'}\r\n\r\n# Check http://www.htaccesstools.com/htpasswd-generator/\r\n\r\n[masters]\r\nin-centos-master openshift_ip=195.201.148.210 openshift_port=45454\r\n\r\n\r\n[etcd]\r\nin-centos-master openshift_ip=195.201.148.210 openshift_port=45454\r\n\r\n\r\n[nodes]\r\nin-centos-master openshift_ip=195.201.148.210 openshift_port=56721 openshift_schedulable=true\r\nin-centos-minion1 openshift_ip=116.203.51.18 openshift_schedulable=true openshift_node_labels='{'region': 'infra', 'zone': 'default'}'\r\nin-centos-minion2 openshift_ip=78.46.145.148 openshift_port=35745 openshift_schedulable=true openshift_node_labels='{'region': 'primary', 'zone': 'default'}'\n"})}),"\n",(0,r.jsx)(n.p,{children:"We can now use the Ansible Playbook command to check the prerequisites to deploy the OpenShift Cluster:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ansible-playbook -i inventory/inventory.ini playbooks/prerequisites.yml\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},603905:(e,n,s)=>{s.d(n,{ah:()=>c});var r=s(667294);function t(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function i(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,r)}return s}function o(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?i(Object(s),!0).forEach((function(n){t(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function a(e,n){if(null==e)return{};var s,r,t=function(e,n){if(null==e)return{};var s,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)s=i[r],n.indexOf(s)>=0||(t[s]=e[s]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)s=i[r],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}var l=r.createContext({}),c=function(e){var n=r.useContext(l),s=n;return e&&(s="function"==typeof e?e(n):o(o({},n),e)),s},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var s=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),p=c(s),u=t,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return s?r.createElement(m,o(o({ref:n},h),{},{components:s})):r.createElement(m,o({ref:n},h))}));h.displayName="MDXCreateElement"},466362:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/photo-875sdfgd_67456dfdj_o-73448288699040d408fe83b3a9fe2865.jpg"}}]);