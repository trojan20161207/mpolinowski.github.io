"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[44287],{66548:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(785893),a=r(603905);const o={sidebar_position:9e3,slug:"2021-10-08",title:"goFTP",authors:"mpolinowski",tags:["Linux","Go"]},d=void 0,i={id:"Development/Go/2021-10-08--goftp/index",title:"goFTP",description:"Victoria , Hong Kong",source:"@site/docs/Development/Go/2021-10-08--goftp/index.md",sourceDirName:"Development/Go/2021-10-08--goftp",slug:"/Development/Go/2021-10-08--goftp/2021-10-08",permalink:"/docs/Development/Go/2021-10-08--goftp/2021-10-08",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Go/2021-10-08--goftp/index.md",tags:[{label:"Linux",permalink:"/docs/tags/linux"},{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:9e3,frontMatter:{sidebar_position:9e3,slug:"2021-10-08",title:"goFTP",authors:"mpolinowski",tags:["Linux","Go"]},sidebar:"tutorialSidebar",previous:{title:"Wails - Build desktop apps using Go & React",permalink:"/docs/Development/Go/2022-06-15-wails-go-react/2022-06-15"},next:{title:"Getting started with Go and React - React & REST API's",permalink:"/docs/Development/Go/2021-09-24--golang-react-starter-part-iv/2021-09-24"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Run the Server",id:"run-the-server",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Victoria , Hong Kong",src:r(940972).Z+"",width:"1500",height:"488"})}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["To build the FTP server binary from source ",(0,t.jsx)(n.a,{href:"https://gitea.com/goftp/ftpd",children:"download the latest source from Gitea"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Copy the default configuration file and edit it according to your needs:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cp config.sample.ini config.ini\r\nnano config.ini\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now run the following commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go generate ./...\r\ngo build -tags=bindata -mod=vendor\n"})}),"\n",(0,t.jsx)(n.h2,{id:"run-the-server",children:"Run the Server"}),"\n",(0,t.jsx)(n.p,{children:"The binary can now be executed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./ftpd\r\n\r\n2021/11/02 17:15:05 [Info] setting.go:98 Loaded config file: E:\\ftpd\\config.ini\r\n2021/11/02 17:15:06 [Info] main.go:123 FTP Server v0.3.0\r\n2021/11/02 17:15:06   Go Ftp Server listening on 2121\r\n[tango] 2021/11/02 17:15:06 [Info] tan.go:148 Listening on http://0.0.0.0:8181\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can access the webui on your server IP with port ",(0,t.jsx)(n.code,{children:"8181"})," and connect with the login you configured:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"goFTP",src:r(926275).Z+"",width:"995",height:"233"})}),"\n",(0,t.jsx)(n.p,{children:"And connect your clients:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"goFTP",src:r(827976).Z+"",width:"854",height:"510"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'2021/11/02 17:16:30 a1ede10282752371d0f2  Connection Established\r\n2021/11/02 17:16:30 a1ede10282752371d0f2 < 220 Welcome to the Go FTP Server\r\n2021/11/02 17:16:30 a1ede10282752371d0f2 > AUTH TLS\r\n2021/11/02 17:16:30 a1ede10282752371d0f2 < 550 Action not taken\r\n2021/11/02 17:16:30 a1ede10282752371d0f2 > AUTH SSL\r\n2021/11/02 17:16:30 a1ede10282752371d0f2 < 550 Action not taken\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 > USER admin\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 < 331 User name ok, password required\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 > PASS ****\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 < 230 Password ok, continue\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 > SYST\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 < 215 UNIX Type: L8\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 > FEAT\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 < 211 Extensions supported:\r\n UTF8\r\n EPSV\r\n CLNT\r\n MLSD\r\n LPRT\r\n EPRT\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 > CLNT FileZilla\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 < 200 OK\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 > OPTS UTF8 ON\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 < 200 UTF8 mode enabled\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 > PWD\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 < 257 "/" is the current directory\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 > TYPE I\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 < 200 Type set to binary\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 > PASV\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 < 227 Entering Passive Mode (192,168,2,112,210,251)\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 > MLSD\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 < 150 Opening ASCII mode data connection for file list\r\n2021/11/02 17:16:33 a1ede10282752371d0f2 < 226 Closing data connection, sent 0 bytes\r\n2021/11/02 17:16:44 a1ede10282752371d0f2 > PASV\r\n2021/11/02 17:16:44 a1ede10282752371d0f2 < 227 Entering Passive Mode (192,168,2,112,210,253)\r\n2021/11/02 17:16:44 a1ede10282752371d0f2 > STOR test\r\n2021/11/02 17:16:44 a1ede10282752371d0f2 < 150 Data transfer starting\r\n2021/11/02 17:16:44 a1ede10282752371d0f2 < 226 OK, received 0 bytes\r\n2021/11/02 17:18:24 a1ede10282752371d0f2  Connection Established\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 < 220 Welcome to the Go FTP Server\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 > USER admin\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 < 331 User name ok, password required\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 > PASS ****\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 < 230 Password ok, continue\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 > TYPE I\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 < 200 Type set to binary\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 > CWD ./Camera1/20211102/images/\r\n2021/11/02 17:18:24 a1ede10282752371d0f2  CreateFile ./Camera1/20211102/images: The system cannot find the path specified.\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 < 550 Directory change to /Camera1/20211102/images failed.\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 > XMKD ./Camera1\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 < 257 Directory created\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 > XMKD ./Camera1/20211102\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 < 257 Directory created\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 > XMKD ./Camera1/20211102/images\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 < 257 Directory created\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 > CWD ./Camera1/20211102/images/\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 < 250 Directory changed to /Camera1/20211102/images\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 > PASV\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 < 227 Entering Passive Mode (192,168,2,112,195,50)\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 > STOR T21110210182200.jpg\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 < 150 Data transfer starting\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 < 226 OK, received 160165 bytes\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 > QUIT\r\n2021/11/02 17:18:24 a1ede10282752371d0f2 < 221 Goodbye\r\n2021/11/02 17:18:24 a1ede10282752371d0f2  Connection Terminated\n'})})]})}function f(e={}){const{wrapper:n}={...(0,a.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>c});var t=r(667294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):d(d({},n),e)),r},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=c(r),g=a,u=p["".concat(s,".").concat(g)]||p[g]||l[g]||o;return r?t.createElement(u,d(d({ref:n},f),{},{components:r})):t.createElement(u,d({ref:n},f))}));f.displayName="MDXCreateElement"},926275:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/goFTP_01-25fddd8ba44680ce605876cd2686fb6a.png"},827976:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/goFTP_02-039a81164676e8ce5e4f6774c2118761.png"},940972:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-9d20765a2c27f4cccf47dd5663b8b562.jpg"}}]);