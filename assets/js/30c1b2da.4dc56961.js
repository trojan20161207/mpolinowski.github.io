"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[67419],{68849:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=r(785893),a=r(603905);const i={sidebar_position:9030,slug:"2020-10-24",title:"HashiCorp Packer with Virtualbox (Preseed)",authors:"mpolinowski",tags:["LINUX","Packer"]},s=void 0,o={id:"DevOps/Hashicorp/2020-10-24--hashicorp-packer-and-virtualbox-preseed/index",title:"HashiCorp Packer with Virtualbox (Preseed)",description:"TST, Hong Kong",source:"@site/docs/DevOps/Hashicorp/2020-10-24--hashicorp-packer-and-virtualbox-preseed/index.md",sourceDirName:"DevOps/Hashicorp/2020-10-24--hashicorp-packer-and-virtualbox-preseed",slug:"/DevOps/Hashicorp/2020-10-24--hashicorp-packer-and-virtualbox-preseed/2020-10-24",permalink:"/docs/DevOps/Hashicorp/2020-10-24--hashicorp-packer-and-virtualbox-preseed/2020-10-24",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2020-10-24--hashicorp-packer-and-virtualbox-preseed/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Packer",permalink:"/docs/tags/packer"}],version:"current",sidebarPosition:9030,frontMatter:{sidebar_position:9030,slug:"2020-10-24",title:"HashiCorp Packer with Virtualbox (Preseed)",authors:"mpolinowski",tags:["LINUX","Packer"]},sidebar:"tutorialSidebar",previous:{title:"HashiCorp Packer with Virtualbox (Autoinstall)",permalink:"/docs/DevOps/Hashicorp/2020-10-25--hashicorp-packer-and-virtualbox-autoinstall/2020-10-25"},next:{title:"HashiCorp Packer Machine Images Introduction",permalink:"/docs/DevOps/Hashicorp/2020-10-23--hashicorp-packer-machine-image/2020-10-23"}},l={},c=[{value:"Template File",id:"template-file",level:2},{value:"Preseed File",id:"preseed-file",level:2},{value:"Build",id:"build",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"TST, Hong Kong",src:r(215041).Z+"",width:"1500",height:"622"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#template-file",children:"Template File"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#preseed-file",children:"Preseed File"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#build",children:"Build"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"I want to build a Ubuntu VirtualBox image using HashiCorp Packer. We do this by creating a JSON template that Packer will use to create the image. The template can then be used to create identical machines on multiple platforms. The building process takes the installation ISO file of your chosen OS and uses it to create a full-blown installation of the OS by mounting the ISO, booting off it, dealing with the OS installer initial UI, and proceeding with an unattended installation. If everything goes well, we then have a functional, bootable VM image."}),"\n",(0,t.jsxs)(n.p,{children:["The unattended installation is made possible by a set of ",(0,t.jsx)(n.code,{children:"boot_command"})," 's. One of these commands will instruct the Ubuntu installer to fetch a preconfiguration file (",(0,t.jsx)(n.code,{children:"preseed.cfg"}),") that will automatically provide answers to the installer prompts."]}),"\n",(0,t.jsxs)(n.p,{children:["I will create this template file and the Ubuntu preconfiguration file inside a folder named ",(0,t.jsx)(n.code,{children:"packer/http"}),". This will be the directory Packer will make available over http to the VM while it is created."]}),"\n",(0,t.jsx)(n.h2,{id:"template-file",children:"Template File"}),"\n",(0,t.jsxs)(n.p,{children:["Let\u2019s name the template ",(0,t.jsx)(n.code,{children:"ubuntu_64.json"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\r\n  "builders": [\r\n    {\r\n      "boot_command": [\r\n        "<esc><esc><enter><wait>",\r\n        "/install/vmlinuz noapic ",\r\n        "preseed/url=http://{{ .HTTPIP }}:{{ .HTTPPort }}/ubuntu_64_preseed.cfg ",\r\n        "debian-installer=en_US auto locale=en_US kbd-chooser/method=us ",\r\n        "hostname={{user hostname}} ",\r\n        "fb=false debconf/frontend=noninteractive ",\r\n        "keyboard-configuration/modelcode=SKIP keyboard-configuration/layout=USA ",\r\n        "keyboard-configuration/variant=USA console-setup/ask_detect=false ",\r\n        "initrd=/install/initrd.gz -- <enter>"\r\n      ],\r\n      "disk_size": 10000,\r\n      "guest_os_type": "Ubuntu_64",\r\n      "http_directory": "http",\r\n      "http_port_max": 9001,\r\n      "http_port_min": 9001,\r\n      "iso_checksum": "md5:769474248a3897f4865817446f9a4a53",\r\n      "iso_url": "http://releases.ubuntu.com/precise/ubuntu-12.04.5-server-amd64.iso",\r\n      "shutdown_command": "echo {{user ssh_pass}} | sudo -S shutdown -P now",\r\n      "ssh_password": "{{user ssh_pass}}",\r\n      "ssh_timeout": "20m",\r\n      "ssh_username": "{{user ssh_name}}",\r\n      "type": "virtualbox-iso",\r\n      "vboxmanage": [["modifyvm", "{{.Name}}", "--vram", "32"]]\r\n    }\r\n  ],\r\n  "variables": {\r\n    "hostname": "packer-ubuntu-12",\r\n    "ssh_name": "ubuntu",\r\n    "ssh_pass": "ubuntu"\r\n  }\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When I validated my first version of this template I hit a deprecation warning and was asked to run the ",(0,t.jsx)(n.strong,{children:"FIX"})," command. This printed out the template shown above which validated in ",(0,t.jsx)(n.em,{children:"Packer version 1.6.4"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"packer validate ubuntu_64.json\r\npacker fix ubuntu_64.json\n"})}),"\n",(0,t.jsx)(n.h2,{id:"preseed-file",children:"Preseed File"}),"\n",(0,t.jsxs)(n.p,{children:["Now we need the ",(0,t.jsx)(n.code,{children:"ubuntu_64_preseed.cfg"})," file that is used to preconfigure the installer:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"# Some inspiration:\r\n# * https://github.com/chrisroberts/vagrant-boxes/blob/master/definitions/precise-64/preseed.cfg\r\n# * https://github.com/cal/vagrant-ubuntu-precise-64/blob/master/preseed.cfg\r\n\r\n# English plx\r\nd-i debian-installer/language string en\r\nd-i debian-installer/locale string en_US.UTF-8\r\nd-i localechooser/preferred-locale string en_US.UTF-8\r\nd-i localechooser/supported-locales en_US.UTF-8\r\n\r\n# Including keyboards\r\nd-i console-setup/ask_detect boolean false\r\nd-i keyboard-configuration/layout select USA\r\nd-i keyboard-configuration/variant select USA\r\nd-i keyboard-configuration/modelcode string pc105\r\n\r\n\r\n# Just roll with it\r\nd-i netcfg/get_hostname string packer-test\r\nd-i netcfg/get_domain string packer-test\r\n\r\nd-i time/zone string UTC\r\nd-i clock-setup/utc-auto boolean true\r\nd-i clock-setup/utc boolean true\r\n\r\n\r\n# Choices: Dialog, Readline, Gnome, Kde, Editor, Noninteractive\r\nd-i debconf debconf/frontend select Noninteractive\r\n\r\nd-i pkgsel/install-language-support boolean false\r\ntasksel tasksel/first multiselect standard, ubuntu-server\r\n\r\n\r\n# Stuck between a rock and a HDD place\r\nd-i partman-auto/method string lvm\r\nd-i partman-lvm/confirm boolean true\r\nd-i partman-lvm/device_remove_lvm boolean true\r\nd-i partman-auto/choose_recipe select atomic\r\n\r\nd-i partman/confirm_write_new_label boolean true\r\nd-i partman/confirm_nooverwrite boolean true\r\nd-i partman/choose_partition select finish\r\nd-i partman/confirm boolean true\r\n\r\n# Write the changes to disks and configure LVM?\r\nd-i partman-lvm/confirm boolean true\r\nd-i partman-lvm/confirm_nooverwrite boolean true\r\nd-i partman-auto-lvm/guided_size string max\r\n\r\n# No proxy, plx\r\nd-i mirror/http/proxy string\r\n\r\n# Default user, change\r\nd-i passwd/user-fullname string ubuntu\r\nd-i passwd/username string ubuntu\r\nd-i passwd/user-password password ubuntu\r\nd-i passwd/user-password-again password ubuntu\r\nd-i user-setup/encrypt-home boolean false\r\nd-i user-setup/allow-password-weak boolean true\r\n\r\n# No language support packages.\r\nd-i\tpkgsel/install-language-support boolean false\r\n\r\n# Individual additional packages to install\r\nd-i pkgsel/include string build-essential ssh\r\n\r\n#For the update\r\nd-i pkgsel/update-policy select none\r\n\r\n# Whether to upgrade packages after debootstrap.\r\n# Allowed values: none, safe-upgrade, full-upgrade\r\nd-i pkgsel/upgrade select safe-upgrade\r\n\r\n# Go grub, go!\r\nd-i grub-installer/only_debian boolean true\r\n\r\nd-i finish-install/reboot_in_progress note\n"})}),"\n",(0,t.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,t.jsx)(n.p,{children:"Now I can start the build with the following command:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Packer Virtualbox",src:r(977949).Z+"",width:"800",height:"375"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"packer build ./http/ubuntu_64.json\r\n\r\n...\r\n\r\n\r\n==> Builds finished. The artifacts of successful builds are:\r\n--\x3e virtualbox-iso: VM files in directory: output-virtualbox-iso\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VERY IMPORTANT"}),": Both files - the ",(0,t.jsx)(n.code,{children:"ubuntu_64.json"})," and ",(0,t.jsx)(n.code,{children:"ubuntu_64_preseed.cfg"})," (only the preseed) are inside the ",(0,t.jsx)(n.em,{children:"http"})," folder and I call packer from the folder that contains this folder. If you need to change this structure, change the following line inside the template file ",(0,t.jsx)(n.code,{children:'"http_directory": "http"'}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>c});var t=r(667294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return r?t.createElement(m,s(s({ref:n},u),{},{components:r})):t.createElement(m,s({ref:n},u))}));u.displayName="MDXCreateElement"},977949:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/packer-virtualbox_01-6870b4b337317c7c788c150817aa2754.png"},215041:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-d8b333d1f9ddf34ac7392aef86b14c83.jpg"}}]);