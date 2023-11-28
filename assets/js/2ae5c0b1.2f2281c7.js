"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[14664],{744540:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var i=r(785893),a=r(603905);const t={sidebar_position:7030,slug:"2021-09-01",title:"Installing Kali LINUX on a Raspberry Pi 3",authors:"mpolinowski",tags:["Linux"]},s=void 0,o={id:"DevOps/Linux/2021-09-01--kali-linux-raspberry-pi/index",title:"Installing Kali LINUX on a Raspberry Pi 3",description:"Shenzhen, China",source:"@site/docs/DevOps/Linux/2021-09-01--kali-linux-raspberry-pi/index.md",sourceDirName:"DevOps/Linux/2021-09-01--kali-linux-raspberry-pi",slug:"/DevOps/Linux/2021-09-01--kali-linux-raspberry-pi/2021-09-01",permalink:"/docs/DevOps/Linux/2021-09-01--kali-linux-raspberry-pi/2021-09-01",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2021-09-01--kali-linux-raspberry-pi/index.md",tags:[{label:"Linux",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:7030,frontMatter:{sidebar_position:7030,slug:"2021-09-01",title:"Installing Kali LINUX on a Raspberry Pi 3",authors:"mpolinowski",tags:["Linux"]},sidebar:"tutorialSidebar",previous:{title:"Installing OpenWRT on a Raspberry Pi 4",permalink:"/docs/DevOps/Linux/2021-09-02--openwrt-raspberry-pi/2021-09-02"},next:{title:"Installing Deb Packages on RHEL8",permalink:"/docs/DevOps/Linux/2021-04-14-using-deb-files-on-rhel8/2021-04-14"}},l={},c=[{value:"Downloading the Image",id:"downloading-the-image",level:2},{value:"How to get it onto your Raspberry Pi 3 B+",id:"how-to-get-it-onto-your-raspberry-pi-3-b",level:3},{value:"Login",id:"login",level:4},{value:"Change the IP Address",id:"change-the-ip-address",level:4},{value:"Change the Hostname",id:"change-the-hostname",level:4},{value:"Trying Airmon-NG",id:"trying-airmon-ng",level:2},{value:"Activating Monitoring Mode for the main WiFi Board",id:"activating-monitoring-mode-for-the-main-wifi-board",level:3},{value:"Starting the monitoring service",id:"starting-the-monitoring-service",level:3},{value:"Starting airodump-ng to display the captured packages",id:"starting-airodump-ng-to-display-the-captured-packages",level:3},{value:"Verify that it is working",id:"verify-that-it-is-working",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Shenzhen, China",src:r(491899).Z+"",width:"1500",height:"422"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#downloading-the-image",children:"Downloading the Image"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#how-to-get-it-onto-your-raspberry-pi-3-b",children:"How to get it onto your Raspberry Pi 3 B+"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#login",children:"Login"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#change-the-ip-address",children:"Change the IP Address"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#change-the-hostname",children:"Change the Hostname"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#trying-airmon-ng",children:"Trying Airmon-NG"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#activating-monitoring-mode-for-the-main-wifi-board",children:"Activating Monitoring Mode for the main WiFi Board"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#starting-the-monitoring-service",children:"Starting the monitoring service"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#starting-airodump-ng-to-display-the-captured-packages",children:"Starting airodump-ng to display the captured packages"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#verify-that-it-is-working",children:"Verify that it is working"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"downloading-the-image",children:"Downloading the Image"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.kali.org/get-kali/#kali-arm",children:"Kali on ARM"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Version"}),(0,i.jsx)(n.th,{children:"Download"}),(0,i.jsx)(n.th,{children:"Torrent"}),(0,i.jsx)(n.th,{children:"SHA256sum"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Raspberry Pi 2, 3, 4 and 400 (32-bit)"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://images.kali.org/arm-images/kali-linux-2021.2-rpi4-nexmon.img.xz",children:"Link"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://images.kali.org/arm-images/kali-linux-2021.2-rpi4-nexmon.img.xz.torrent",children:"Torrent"})}),(0,i.jsx)(n.td,{children:"9da12eb9899c7b9a6860ba421bb9f45ce023593b58869ff2ab8db69ce8aa2630"})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"how-to-get-it-onto-your-raspberry-pi-3-b",children:"How to get it onto your Raspberry Pi 3 B+"}),"\n",(0,i.jsx)(n.p,{children:"On a Linux desktop and Windows desktop:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Insert your MicroSD to your PC"}),"\n",(0,i.jsxs)(n.li,{children:["Use BalenaEtcher software to write the img file to your MicroSD card's. [",(0,i.jsx)(n.a,{href:"https://www.balena.io/etcher/",children:"https://www.balena.io/etcher/"}),"]"]}),"\n",(0,i.jsxs)(n.li,{children:["Insert the SD Card into your RasPi and wait for it to boot - it will show up as ",(0,i.jsx)(n.code,{children:"kali"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," Make sure that the MicroSD (once flashed by Etcher) has an empty file called ",(0,i.jsx)(n.code,{children:"ssh"})," on it - this will enable the SSH remote access. I ran into the problem that the ",(0,i.jsx)(n.code,{children:"root"})," access did not work for me. So I had to use the ",(0,i.jsx)(n.code,{children:"kali"})," user."]}),"\n",(0,i.jsx)(n.h4,{id:"login",children:"Login"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Default Logins:"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Username"}),(0,i.jsx)(n.th,{children:"Password"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"root"}),(0,i.jsx)(n.td,{children:"toor"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"kali"}),(0,i.jsx)(n.td,{children:"kali"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["After using the ",(0,i.jsx)(n.code,{children:"kali"})," login I can change the default ",(0,i.jsx)(n.code,{children:"root"})," login and re-login with that:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ssh kali@192.168.2.48\r\nkali@192.168.2.48's password: kali\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo su\r\npasswd root\n"})}),"\n",(0,i.jsx)(n.p,{children:"And allow the root login:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"nano /etc/ssh/sshd_config\n"})}),"\n",(0,i.jsx)(n.p,{children:"by adding the following line:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"#PermitRootLogin prohibit-password\r\nPermitRootLogin yes\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After restarting the SSH service you will now be able to remotely login using the ",(0,i.jsx)(n.code,{children:"root"})," user with your personal password:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"/etc/init.d/ssh restart\n"})}),"\n",(0,i.jsx)(n.h4,{id:"change-the-ip-address",children:"Change the IP Address"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/network/interfaces\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Deactivate the ",(0,i.jsx)(n.strong,{children:"DHCP"})," service and add your static IP configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"auto lo\r\niface lo inet loopback\r\n\r\nauto eth0\r\nallow-hotplug eth0\r\n# iface eth0 inet dhcp\r\niface eth0 inet static\r\n  address 192.168.2.113\r\n  netmask 255.255.255.0\r\n  gateway 192.168.2.1\r\n  dns-nameservers 192.168.2.1\n"})}),"\n",(0,i.jsx)(n.p,{children:"Restart the networking service and login again on your new IP address:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"systemctl restart networking.service\n"})}),"\n",(0,i.jsx)(n.h4,{id:"change-the-hostname",children:"Change the Hostname"}),"\n",(0,i.jsx)(n.p,{children:"Set new hostname:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"hostnamectl set-hostname server1\n"})}),"\n",(0,i.jsx)(n.p,{children:"Edit the hostfile to resolve your new hostname to localhost:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"nano /etc/hosts\r\n\r\n127.0.0.1       server1    localhost\n"})}),"\n",(0,i.jsx)(n.p,{children:"And verify that the hostname was set successfully:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"hostnamectl\r\n\r\nStatic hostname: server1\r\n         Icon name: computer\r\n        Machine ID: 068a7d772bd446b79607eb8f3fe0ac6b\r\n           Boot ID: db0592c1953f4c9489312c7caa3e38f4\r\n  Operating System: Kali GNU/Linux Rolling\r\n            Kernel: Linux 5.4.83-Re4son-v7+\r\n      Architecture: arm\n"})}),"\n",(0,i.jsx)(n.h2,{id:"trying-airmon-ng",children:"Trying Airmon-NG"}),"\n",(0,i.jsx)(n.p,{children:"I was having some difficulties getting the Broadcom WiFi into monitoring mode. I tried several things and one of them - or a combination of them - finally enabled me to capture WiFi packages:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Trying Airmon-NG",src:r(391745).Z+"",width:"955",height:"706"})}),"\n",(0,i.jsx)(n.p,{children:"Here is a list of steps that I took:"}),"\n",(0,i.jsx)(n.h3,{id:"activating-monitoring-mode-for-the-main-wifi-board",children:"Activating Monitoring Mode for the main WiFi Board"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ifconfig wlan0 down\r\niwconfig wlan0 mode monitor\r\nifconfig wlan0 up\n"})}),"\n",(0,i.jsx)(n.p,{children:"The second step above failed with the following error message:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'Error for wireless request "Set Mode" (8B06) :\r\n    SET failed on device wlan0 ; Device or resource busy.\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The following command helps you to kill all processes that might be using ",(0,i.jsx)(n.code,{children:"wlan0"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"airmon-ng check kill\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This killed the ",(0,i.jsx)(n.code,{children:"wpa_supplicant"})," service and I continued masking this service and rebooted the pi:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"systemctl mask wpa_supplicant.service\r\nreboot\n"})}),"\n",(0,i.jsx)(n.h3,{id:"starting-the-monitoring-service",children:"Starting the monitoring service"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"airmon-ng start wlan0\n"})}),"\n",(0,i.jsx)(n.p,{children:"This gave me an error message:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ERROR adding monitor mode interface: command failed: Operation not supported (-95)\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.aircrack-ng.org/doku.php?id=airmon-ng",children:"This is a bug"})," can be solved by reloading the Broadcom driver:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"rmmod brcmfmac\r\nmodprobe brcmfmac\n"})}),"\n",(0,i.jsx)(n.p,{children:"Afterward I was able to start the service:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"airmon-ng start wlan0\n"})}),"\n",(0,i.jsx)(n.p,{children:"And the monitoring interface was now listed:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"airmon-ng\r\n\r\nPHY     Interface       Driver          Chipset\r\n\r\nphy1    wlan0           brcmfmac        Broadcom 43430\r\nphy1    wlan0mon        brcmfmac        Broadcom 43430\n"})}),"\n",(0,i.jsx)(n.h3,{id:"starting-airodump-ng-to-display-the-captured-packages",children:"Starting airodump-ng to display the captured packages"}),"\n",(0,i.jsx)(n.p,{children:"This command lead me to the screenshot above:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"airodump-ng wlan0mon\n"})}),"\n",(0,i.jsx)(n.h3,{id:"verify-that-it-is-working",children:"Verify that it is working"}),"\n",(0,i.jsx)(n.p,{children:"To make sure this wasn't a fluke I rebooted my Pi and ran the following commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"airmon-ng start wlan0\r\nairodump-ng wlan0mon\n"})}),"\n",(0,i.jsx)(n.p,{children:"And it worked - this time without any complaints!"})]})}function h(e={}){const{wrapper:n}={...(0,a.ah)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>c});var i=r(667294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,i,a=function(e,n){if(null==e)return{};var r,i,a={},t=Object.keys(e);for(i=0;i<t.length;i++)r=t[i],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)r=t[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var r=e.components,a=e.mdxType,t=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),g=c(r),p=a,m=g["".concat(l,".").concat(p)]||g[p]||d[p]||t;return r?i.createElement(m,s(s({ref:n},h),{},{components:r})):i.createElement(m,s({ref:n},h))}));h.displayName="MDXCreateElement"},391745:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/kali-linux-raspberry-pi_01-01935e8c0eb776c407277eed2150cfe3.png"},491899:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-2e2594660a62178277c3551783b0c874.jpg"}}]);