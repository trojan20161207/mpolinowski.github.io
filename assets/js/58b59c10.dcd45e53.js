"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[63798],{458093:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=r(785893),s=r(603905);const o={sidebar_position:8070,slug:"2022-10-05",title:"Go Build!",authors:"mpolinowski",tags:["Go"],description:"Cross-compile in Go and reduce the binary size of your Go program."},t="Go Build!",a={id:"Development/Go/2022-10-05-go-reducing-binary-size/index",title:"Go Build!",description:"Cross-compile in Go and reduce the binary size of your Go program.",source:"@site/docs/Development/Go/2022-10-05-go-reducing-binary-size/index.md",sourceDirName:"Development/Go/2022-10-05-go-reducing-binary-size",slug:"/Development/Go/2022-10-05-go-reducing-binary-size/2022-10-05",permalink:"/docs/Development/Go/2022-10-05-go-reducing-binary-size/2022-10-05",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Go/2022-10-05-go-reducing-binary-size/index.md",tags:[{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:8070,frontMatter:{sidebar_position:8070,slug:"2022-10-05",title:"Go Build!",authors:"mpolinowski",tags:["Go"],description:"Cross-compile in Go and reduce the binary size of your Go program."},sidebar:"tutorialSidebar",previous:{title:"Go OAuth2 Server",permalink:"/docs/Development/Go/2022-10-15-go-oauth2-server/2022-10-15"},next:{title:"Build a NTP/S Timeserver Client in Go",permalink:"/docs/Development/Go/2022-10-04-go-ntp-client/2022-10-04"}},l={},c=[{value:"Cross-compiling with Go",id:"cross-compiling-with-go",level:2},{value:"Golang on a Diet",id:"golang-on-a-diet",level:2},{value:"UPX",id:"upx",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"go-build",children:"Go Build!"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Shenzhen, China",src:r(796780).Z+"",width:"1500",height:"546"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#go-build",children:"Go Build!"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#cross-compiling-with-go",children:"Cross-compiling with Go"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#golang-on-a-diet",children:"Golang on a Diet"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#upx",children:"UPX"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.a,{href:"/docs/Development/Go/2022-10-04-go-ntp-client/2022-10-04",children:"previous post"})," I build an NTS Client from source. I now need to compile it for an ARM system and reduce the file size of the generated binary."]}),"\n",(0,i.jsx)(n.h2,{id:"cross-compiling-with-go",children:"Cross-compiling with Go"}),"\n",(0,i.jsxs)(n.p,{children:["The original binary was compiled on a ",(0,i.jsx)(n.code,{children:"x86-64"})," Linux system and with default settings resulted in the following file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"file ntsclient\r\n\r\nntsclient: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, Go BuildID=jk1ySsUE9xCbQQElzPBj/mKJ-lNqe4rCLOALwJ0Uh/lg1ziBDAYw1FdjS_SnD_/6JHvJ15niw3mnL010nFR, with debug_info, not stripped\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To use the binary on an ARM system we need to use the amazing cross-compiling capabilities of Go. E.g. to create the ",(0,i.jsx)(n.code,{children:"arm64"})," version of the file I can run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"env GOOS=linux GOARCH=arm64 go build -o ntsclient_arm64\n"})}),"\n",(0,i.jsx)(n.p,{children:"The resulting binary can be used on an 64bit ARM system:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"file ntsclient_arm64\r\n\r\nntsclient_arm64: ELF 64-bit LSB executable, ARM aarch64, version 1 (SYSV), statically linked, Go BuildID=MR5GvnV5S4XWxDENNLTE/ZZ2k_Dx5K6CdKRTzWlK5/Zbl1ahI9CUA-f28opmhH/0Zh0CFmxrhuWRZ-kOiMt, with debug_info, not stripped\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can check the supported combinations of ",(0,i.jsx)(n.strong,{children:"GOOS"})," and ",(0,i.jsx)(n.strong,{children:"GOARCH"})," with:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go tool dist list\r\n\r\naix/ppc64 | android/386 | android/amd64 | android/arm | android/arm64 | darwin/amd64 | darwin/arm64 | dragonfly/amd64 | freebsd/386 | freebsd/amd64 | freebsd/arm | freebsd/arm64 | illumos/amd64 | ios/amd64 | ios/arm64 | js/wasm | linux/386 | linux/amd64 | linux/arm | linux/arm64 | linux/loong64 | linux/mips | linux/mips64 | linux/mips64le | linux/mipsle | linux/ppc64 | linux/ppc64le | linux/riscv64 | linux/s390x | netbsd/386 | netbsd/amd64 | netbsd/arm | netbsd/arm64 | openbsd/386 | openbsd/amd64 | openbsd/arm | openbsd/arm64 | openbsd/mips64 | plan9/386 | plan9/amd64 | plan9/arm | solaris/amd64 | windows/386 | windows/amd64 | windows/arm | windows/arm64\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We can automate a multi-architecture build with a script ",(0,i.jsx)(n.code,{children:"build.sh"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"#!/usr/bin/bash\r\narchs=(amd64 arm arm64)\r\n\r\nfor arch in ${archs[@]}\r\ndo\r\n        env GOOS=linux GOARCH=${arch} go build -o prepnode_${arch}\r\ndone\n"})}),"\n",(0,i.jsx)(n.h2,{id:"golang-on-a-diet",children:"Golang on a Diet"}),"\n",(0,i.jsx)(n.p,{children:"The resulting files - compared to a similar C program - are generally huge. In the NTS client example I end up with 7.4 - 7.7 MB files:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"7965759 Oct  5 15:37 ntsclient_amd64\r\n7665133 Oct  5 15:37 ntsclient_arm\r\n7635040 Oct  5 15:24 ntsclient_arm64\n"})}),"\n",(0,i.jsx)(n.p,{children:"The following build flags can help us reducing the binary size:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ldflags","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-s"})," omits the symbol table and debug information"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-w"})," omits DWARF debugging information."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"So let's update the build script accordingly:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'#!/usr/bin/bash\r\narchs=(amd64 arm arm64)\r\n\r\nfor arch in ${archs[@]}\r\ndo\r\n        env GOOS=linux GOARCH=${arch} go build -ldflags "-s -w" -o prepnode_${arch}\r\ndone\n'})}),"\n",(0,i.jsx)(n.p,{children:"Now we are down to 5.0 - 5.2 MB:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"5459968 Oct  5 16:55 ntsclient_amd64\r\n5242880 Oct  5 16:55 ntsclient_arm\r\n5242880 Oct  5 16:55 ntsclient_arm64\n"})}),"\n",(0,i.jsx)(n.h3,{id:"upx",children:"UPX"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://upx.github.io/",children:"UPX"})," is a free, secure, portable, extendable, high-performance executable packer for several executable formats. You can install the latest version from ",(0,i.jsx)(n.a,{href:"https://github.com/upx/upx/releases",children:"Github"})," or use your package manager:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo pacman -S utx\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"upx --help\r\n\r\n                       Ultimate Packer for eXecutables\r\n                          Copyright (C) 1996 - 2020\r\nUPX git-d7ba31+ Markus Oberhumer, Laszlo Molnar & John Reiser   Jan 23rd 2020\r\n\r\nUsage: upx [-123456789dlthVL] [-qvfk] [-o file] file..\r\n\r\nCommands:\r\n  -1     compress faster                   -9    compress better\r\n  --best compress best (can be slow for big files)\r\n  -d     decompress                        -l    list compressed file\r\n  -t     test compressed file              -V    display version number\r\n  -h     give this help                    -L    display software license\r\n\r\nOptions:\r\n  -q     be quiet                          -v    be verbose\r\n  -oFILE write output to 'FILE'\r\n  -f     force compression of suspicious files\r\n  --no-color, --mono, --color, --no-progress   change look\r\n\r\nCompression tuning options:\r\n  --brute             try all available compression methods & filters [slow]\r\n  --ultra-brute       try even more compression variants [very slow]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["So to get the maximum amount of compress let's try ",(0,i.jsx)(n.strong,{children:"Ultra Brute"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"upx --ultra-brute -ontsclient_upx_arm ntsclient_arm\r\n\r\n    File size         Ratio      Format      Name\r\n--------------------   ------   -----------   -----------\r\n5242880 ->   1421184   27.11%    linux/arm    ntsclient_upx_arm\n"})}),"\n",(0,i.jsx)(n.p,{children:"So we went from around 7 MB down to 1.4 MB."})]})}function u(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>c});var i=r(667294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function t(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,i,s=function(e,n){if(null==e)return{};var r,i,s={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=i.createContext({}),c=function(e){var n=i.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):t(t({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),h=c(r),p=s,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||o;return r?i.createElement(m,t(t({ref:n},u),{},{components:r})):i.createElement(m,t({ref:n},u))}));u.displayName="MDXCreateElement"},796780:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-0795219c47cded4f1a1480a5f18e4c60.jpg"}}]);