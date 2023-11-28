"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[61991],{809102:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=r(785893),i=r(603905);const a={sidebar_position:9050,slug:"2020-11-23",title:"Ansible Getting Serious",authors:"mpolinowski",tags:["LINUX","NGINX","Ansible"]},s=void 0,o={id:"DevOps/Ansible/2020-11-23--ansible-getting-serious/index",title:"Ansible Getting Serious",description:"Shenzhen, China",source:"@site/docs/DevOps/Ansible/2020-11-23--ansible-getting-serious/index.md",sourceDirName:"DevOps/Ansible/2020-11-23--ansible-getting-serious",slug:"/DevOps/Ansible/2020-11-23--ansible-getting-serious/2020-11-23",permalink:"/docs/DevOps/Ansible/2020-11-23--ansible-getting-serious/2020-11-23",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Ansible/2020-11-23--ansible-getting-serious/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"NGINX",permalink:"/docs/tags/nginx"},{label:"Ansible",permalink:"/docs/tags/ansible"}],version:"current",sidebarPosition:9050,frontMatter:{sidebar_position:9050,slug:"2020-11-23",title:"Ansible Getting Serious",authors:"mpolinowski",tags:["LINUX","NGINX","Ansible"]},sidebar:"tutorialSidebar",previous:{title:"Ansible Vault for User Logins",permalink:"/docs/DevOps/Ansible/2020-11-24--ansible-vault-user-login/2020-11-24"},next:{title:"Ansible for Docker Deployment",permalink:"/docs/DevOps/Ansible/2020-11-22--ansible-and-docker/2020-11-22"}},l={},c=[{value:"Adding the Production Host",id:"adding-the-production-host",level:2},{value:"Adding SSH Public Keys",id:"adding-ssh-public-keys",level:3},{value:"Installing Docker on Host",id:"installing-docker-on-host",level:2},{value:"Docker Playbook",id:"docker-playbook",level:3},{value:"Setting Up Zabbix Agent",id:"setting-up-zabbix-agent",level:2},{value:"Runnig the Webservice",id:"runnig-the-webservice",level:2},{value:"Updating the Frontend Container",id:"updating-the-frontend-container",level:3},{value:"Setting up Elasticsearch",id:"setting-up-elasticsearch",level:2},{value:"Managing Certificates with Certbot",id:"managing-certificates-with-certbot",level:2},{value:"Playbook",id:"playbook",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Shenzhen, China",src:r(205809).Z+"",width:"1500",height:"676"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#adding-the-production-host",children:"Adding the Production Host"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#adding-ssh-public-keys",children:"Adding SSH Public Keys"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#installing-docker-on-host",children:"Installing Docker on Host"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#docker-playbook",children:"Docker Playbook"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#setting-up-zabbix-agent",children:"Setting Up Zabbix Agent"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#runnig-the-webservice",children:"Runnig the Webservice"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#updating-the-frontend-container",children:"Updating the Frontend Container"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#setting-up-elasticsearch",children:"Setting up Elasticsearch"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#managing-certificates-with-certbot",children:"Managing Certificates with Certbot"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#playbook",children:"Playbook"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"adding-the-production-host",children:"Adding the Production Host"}),"\n",(0,t.jsxs)(n.p,{children:["Start by adding the ansible hosts by editing ",(0,t.jsx)(n.code,{children:"/etc/ansible/hosts"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[Wiki_Virtual]\r\n18.19.251.137 ansible_port=12345\n"})}),"\n",(0,t.jsx)(n.h3,{id:"adding-ssh-public-keys",children:"Adding SSH Public Keys"}),"\n",(0,t.jsxs)(n.p,{children:["You can now use ",(0,t.jsx)(n.a,{href:"https://docs.ansible.com/ansible/latest/user_guide/vault.html#vault",children:"Vault"})," to add your password. Or generate a RSA key pair to have Ansible use the public key to login:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ssh-keygen -t rsa -b 2048\n"})}),"\n",(0,t.jsx)(n.p,{children:"I can now copy the generated ID to my production server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ssh-copy-id root@18.19.251.137 -p 12345\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Add you password when asked and afterwards try to login - now without a password - ",(0,t.jsx)(n.code,{children:"ssh root@18.19.251.137 -p 12345"}),". Verify that it works. And try to use the Ansible ping module:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'ansible Wiki_Virtual -m ping\r\n\r\n18.19.251.137 | SUCCESS => {\r\n    "ansible_facts": {\r\n        "discovered_interpreter_python": "/usr/bin/python"\r\n    },\r\n    "changed": false,\r\n    "ping": "pong"\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"installing-docker-on-host",children:"Installing Docker on Host"}),"\n",(0,t.jsxs)(n.p,{children:["We can download ready to use roles for common problems from ",(0,t.jsx)(n.a,{href:"https://galaxy.ansible.com/geerlingguy/docker",children:"Ansible Galaxy"}),":"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Ansible requires the Python Docker library in addition to the regular Docker installation. You can use ",(0,t.jsx)(n.a,{href:"https://galaxy.ansible.com/geerlingguy/pip",children:"this role"}),". But trying to install it gave me an error message: ",(0,t.jsx)(n.strong,{children:"Failed to import the required Python library (setuptools) on wikivirtual's Python /usr/bin/python."}),". I was able to get rid of the error by executing the following on my external host: ",(0,t.jsx)(n.code,{children:"update-alternatives --install /usr/bin/python python /usr/bin/python3 10"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["I had a different problem with ",(0,t.jsx)(n.code,{children:"docker-compose"})," - different error message but also related to ",(0,t.jsx)(n.code,{children:"setuptools"}),". I now added both of them to the ",(0,t.jsx)(n.em,{children:"pip install"})," loop. Maybe this also solves issue 1. Compose now works as expected."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ansible-galaxy install geerlingguy.docker\r\nansible-galaxy install geerlingguy.pip\n"})}),"\n",(0,t.jsx)(n.h3,{id:"docker-playbook",children:"Docker Playbook"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# nano /opt/ansible/playbooks/install_docker.yml\r\n- hosts: Wiki_Virtual\r\n  gather_facts: yes\r\n\r\n  vars:\r\n    pip_install_packages:\r\n      - name: docker\r\n      - name: setuptools\r\n      - name: docker-compose\r\n\r\n  roles:\r\n    - geerlingguy.pip\r\n    - geerlingguy.docker\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ansible-playbook /opt/ansible/playbooks/install_docker.yml\n"})}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-zabbix-agent",children:"Setting Up Zabbix Agent"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# nano /opt/ansible/playbooks/install_zabbix_agent2.yml\r\n---\r\n- hosts: Wiki_Virtual\r\n  gather_facts: no\r\n  tasks:\r\n  \r\n    - name: Create directory for Zabbix Keyfile\r\n      file:\r\n        path: /opt/zabbix\r\n        state: directory\r\n        mode: \'0755\'\r\n\r\n    - name: Check if Zabbix Keyfile is already present\r\n      stat:\r\n        path: /opt/zabbix/agent_tls.psk\r\n      register: check_key_result\r\n\r\n    - name: Create Zabbix Keyfile\r\n      shell: openssl rand -hex 32 > agent_tls.psk\r\n      args:\r\n        chdir: /opt/zabbix/\r\n      when: not check_key_result.stat.exists\r\n    \r\n    - name: Read Zabbix Keyfile\r\n      shell: cat /opt/zabbix/agent_tls.psk\r\n      register: zabbix_key\r\n    \r\n    - name: Print Zabbix Keyfile\r\n      debug: var=zabbix_key\r\n\r\n    - name: Installing Zabbix Agent 2\r\n      docker_container:\r\n        name: zabbix-agent2\r\n        image: zabbix/zabbix-agent2:latest\r\n        networks:\r\n          - name: gateway\r\n        networks_cli_compatible: yes\r\n        privileged: yes\r\n        state: started\r\n        restart_policy: unless-stopped\r\n        ports:\r\n          - "10050:10050"\r\n        volumes:\r\n          - /opt/zabbix:/var/lib/zabbix/enc\r\n        env:\r\n            ZBX_HOSTNAME: "Wiki_Virtual"\r\n            ZBX_SERVER_HOST: "12.115.24.1"\r\n            ZBX_SERVER_PORT: "10051"\r\n            ZBX_TLSCONNECT: "psk"\r\n            ZBX_TLSACCEPT: "psk"\r\n            ZBX_TLSPSKIDENTITY: "Wiki_Virtual"\r\n            ZBX_TLSPSKFILE: "agent_tls.psk"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ansible-playbook /opt/ansible/playbooks/install_zabbix_agent2.yml\n"})}),"\n",(0,t.jsx)(n.h2,{id:"runnig-the-webservice",children:"Runnig the Webservice"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# nano /opt/ansible/playbooks/install_wiki.yml\r\n---\r\n- hosts: Wiki_Virtual\r\n  gather_facts: no\r\n\r\n  vars_prompt:\r\n\r\n    - name: "gitlabuser" \r\n      prompt: "Enter your INSTAR Gitlab Username" \r\n      private: no \r\n    - name: "gitlabpassword" \r\n      prompt: "Enter your INSTAR Gitlab Username" \r\n      private: yes\r\n\r\n  tasks:\r\n\r\n    - name: Log into Docker Registry and force re-authorization\r\n      docker_login:\r\n        registry: my.gitlab.com:12345\r\n        username: "{{ gitlabuser }}"\r\n        password: "{{ gitlabpassword }}"\r\n        reauthorize: yes\r\n\r\n    - name: Create the Gateway Network\r\n      docker_network:\r\n        name: gateway \r\n  \r\n    - name: Run the EN Wiki Container\r\n      docker_container:\r\n        name: wiki_en\r\n        image: my.gitlab.com:12345/wiki/wiki_en_container\r\n        state: started\r\n        restart_policy: unless-stopped\r\n        networks:\r\n          - name: gateway\r\n        networks_cli_compatible: yes\r\n  \r\n    - name: Run the DE Wiki Container\r\n      docker_container:\r\n        name: wiki_de\r\n        image: my.gitlab.com:12345/wiki/wiki_de_container\r\n        state: started\r\n        restart_policy: unless-stopped\r\n        networks:\r\n          - name: gateway\r\n        networks_cli_compatible: yes\r\n  \r\n    - name: Run the FR Wiki Container\r\n      docker_container:\r\n        name: wiki_fr\r\n        image: my.gitlab.com:12345/wiki/wiki_fr_container\r\n        state: started\r\n        restart_policy: unless-stopped\r\n        networks:\r\n          - name: gateway\r\n        networks_cli_compatible: yes\r\n\r\n    - name: Get updated files from the NGINX Ingress repository\r\n      git: \r\n        repo: https://{{ gitlabuser | urlencode }}:{{ gitlabpassword | urlencode }}@my.gitlab.com/nginx_ingress.git\r\n        dest: /opt/wiki_ingress\r\n\r\n    - name: Get updated files from the NGINX Downloads repository\r\n      git: \r\n        repo: https://{{ gitlabuser | urlencode }}:{{ gitlabpassword | urlencode }}@my.gitlab.com/nginx_ingress.git\r\n        dest: /opt/wiki_downloads\r\n\r\n    - name: Setup a Nginx Ingress\r\n      docker_container:\r\n        name: ingress\r\n        image: nginx:stable-alpine\r\n        state: started\r\n        restart_policy: unless-stopped\r\n        networks:\r\n          - name: gateway\r\n        networks_cli_compatible: yes\r\n        ports:\r\n          - "80:80"\r\n          - "443:443"\r\n        volumes:\r\n          - /opt/wiki_ingress/configuration/conf.d:/etc/nginx/conf.d\r\n          - /opt/wiki_ingress/configuration/ssl:/etc/nginx/ssl\r\n          - /opt/wiki_ingress/configuration/nginx.conf:/etc/nginx/nginx.conf\r\n          - /opt/wiki_downloads:/opt/wiki_downloads\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ansible-playbook /opt/ansible/playbooks/install_wiki.yml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"updating-the-frontend-container",children:"Updating the Frontend Container"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# nano /opt/ansible/playbooks/update_wiki.yml\r\n---\r\n- hosts: Wiki_Virtual\r\n  gather_facts: no\r\n\r\n  vars_prompt:\r\n\r\n    - name: "gitlabuser" \r\n      prompt: "Enter your INSTAR Gitlab Username" \r\n      private: no \r\n    - name: "gitlabpassword" \r\n      prompt: "Enter your INSTAR Gitlab Username" \r\n      private: yes\r\n\r\n  tasks:\r\n\r\n    - name: Log into Docker Registry and force re-authorization\r\n      docker_login:\r\n        registry: my.gitlab.com:12345\r\n        username: "{{ gitlabuser }}"\r\n        password: "{{ gitlabpassword }}"\r\n        reauthorize: yes\r\n\r\n    - name: Download the latest Wiki build images\r\n      shell: docker pull my.gitlab.com:12345/wiki/{{ item }}\r\n      with_items:\r\n        - wiki_en_container\r\n        - wiki_de_container\r\n        - wiki_fr_container\r\n  \r\n    - name: Remove the EN Wiki Container\r\n      docker_container:\r\n        name: wiki_en\r\n        state: absent\r\n  \r\n    - name: Rebuild the EN Wiki Container\r\n      docker_container:\r\n        name: wiki_en\r\n        image: my.gitlab.com:12345/wiki/wiki_en_container\r\n        state: started\r\n        restart_policy: unless-stopped\r\n        networks:\r\n          - name: gateway\r\n        networks_cli_compatible: yes\r\n  \r\n    - name: Remove the DE Wiki Container\r\n      docker_container:\r\n        name: wiki_de\r\n        state: absent\r\n  \r\n    - name: Rebuild the DE Wiki Container\r\n      docker_container:\r\n        name: wiki_de\r\n        image: my.gitlab.com:12345/wiki/wiki_de_container\r\n        state: started\r\n        restart_policy: unless-stopped\r\n        networks:\r\n          - name: gateway\r\n        networks_cli_compatible: yes\r\n  \r\n    - name: Remove the FR Wiki Container\r\n      docker_container:\r\n        name: wiki_fr\r\n        state: absent\r\n  \r\n    - name: Run the FR Wiki Container\r\n      docker_container:\r\n        name: wiki_fr\r\n        image: my.gitlab.com:12345/wiki/wiki_fr_container\r\n        state: started\r\n        restart_policy: unless-stopped\r\n        networks:\r\n          - name: gateway\r\n        networks_cli_compatible: yes\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ansible-playbook /opt/ansible/playbooks/update_wiki.yml\n"})}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-elasticsearch",children:"Setting up Elasticsearch"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# nano /opt/ansible/playbooks/install_elk.yml\r\n---\r\n- hosts: Wiki_Virtual\r\n  gather_facts: no\r\n\r\n  vars_prompt:\r\n\r\n    - name: "gitlabuser" \r\n      prompt: "Enter your INSTAR Gitlab Username" \r\n      private: no \r\n    - name: "gitlabpassword" \r\n      prompt: "Enter your INSTAR Gitlab Username" \r\n      private: yes \r\n\r\n  tasks:\r\n\r\n    - name: Get updated files from git repository \r\n      git: \r\n        repo: https://{{ gitlabuser | urlencode }}:{{ gitlabpassword | urlencode }}@my.gitlab.com/privrepo.git\r\n        dest: /opt/wiki_elk\r\n\r\n    - name: Start the Elasticsearch services\r\n      docker_compose:\r\n        project_src: /opt/wiki_elk\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ansible-playbook /opt/ansible/playbooks/install_elk.yml\n"})}),"\n",(0,t.jsx)(n.h2,{id:"managing-certificates-with-certbot",children:"Managing Certificates with Certbot"}),"\n",(0,t.jsxs)(n.p,{children:["I am going to use the Ansible Galaxy Role ",(0,t.jsx)(n.a,{href:"https://galaxy.ansible.com/geerlingguy/certbot",children:"geerlingguy.certbot"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ansible-galaxy install geerlingguy.certbot \n"})}),"\n",(0,t.jsx)(n.h3,{id:"playbook",children:"Playbook"}),"\n",(0,t.jsxs)(n.p,{children:["We can use ",(0,t.jsx)(n.em,{children:"vars"})," to overwrite the default variables in ",(0,t.jsx)(n.code,{children:"/root/.ansible/roles/geerlingguy.certbot/defaults/main.yml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# nano /opt/ansible/playbooks/install_certbot.yml\r\n---\r\n- hosts: servers\r\n\r\n  vars:\r\n    certbot_admin_email: me@email.com\r\n    certbot_create_if_missing: true\r\n    certbot_create_standalone_stop_services:\r\n      - docker\r\n    certbot_certs:\r\n      - domains:\r\n          - abc.com\r\n          - xyz.com\r\n\r\n  roles:\r\n    - geerlingguy.certbot\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Certbot"})," command that is executed here is ",(0,t.jsx)(n.code,{children:"certbot certonly --cert-name abc.com -d abc.com,xyz.com"}),". This means the resulting certificate will be filed under ",(0,t.jsx)(n.code,{children:"abc.com"})," but will contain the keys for all domains that you list above."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can check the installation by running the following commands on your host:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"certbot -v\r\ncertbot certificates\n"})}),"\n",(0,t.jsx)(n.p,{children:"To remove the certificate run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"certbot delete --cert-name abc.com\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>c});var t=r(667294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=c(r),h=i,b=g["".concat(l,".").concat(h)]||g[h]||d[h]||a;return r?t.createElement(b,s(s({ref:n},p),{},{components:r})):t.createElement(b,s({ref:n},p))}));p.displayName="MDXCreateElement"},205809:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-e12a28f9c35f9ae6e3540843545ced7e.jpg"}}]);