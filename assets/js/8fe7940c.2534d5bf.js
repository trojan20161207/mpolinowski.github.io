"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[40845],{699157:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=s(785893),i=s(603905);const t={sidebar_position:8030,slug:"2022-12-26",title:"Go WebAssembly",authors:"mpolinowski",tags:["Go"],description:"Build WebAssembly Apps in Go"},l="Build WebAssembly Apps in Go",o={id:"Development/Go/2022-12-26-go-webassembly/index",title:"Go WebAssembly",description:"Build WebAssembly Apps in Go",source:"@site/docs/Development/Go/2022-12-26-go-webassembly/index.md",sourceDirName:"Development/Go/2022-12-26-go-webassembly",slug:"/Development/Go/2022-12-26-go-webassembly/2022-12-26",permalink:"/docs/Development/Go/2022-12-26-go-webassembly/2022-12-26",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Go/2022-12-26-go-webassembly/index.md",tags:[{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:8030,frontMatter:{sidebar_position:8030,slug:"2022-12-26",title:"Go WebAssembly",authors:"mpolinowski",tags:["Go"],description:"Build WebAssembly Apps in Go"},sidebar:"tutorialSidebar",previous:{title:"Go Bubbles",permalink:"/docs/Development/Go/2022-12-27-go-bubbles/2022-12-27"},next:{title:"Building a NTP/S Timeserver Client in Go with Gitlab CI",permalink:"/docs/Development/Go/2022-11-11-go-nts-client-ci/2022-11-11"}},a={},c=[{value:"Initialize Project",id:"initialize-project",level:2},{value:"Hello World",id:"hello-world",level:2},{value:"Build for WebAssambly",id:"build-for-webassambly",level:3},{value:"Run Application (Node.js)",id:"run-application-nodejs",level:2},{value:"Manipulate JS-DOM",id:"manipulate-js-dom",level:2},{value:"Expose Functions",id:"expose-functions",level:2},{value:"Optimizing Filesize",id:"optimizing-filesize",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"build-webassembly-apps-in-go",children:"Build WebAssembly Apps in Go"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Shenzhen, China",src:s(392511).Z+"",width:"1500",height:"546"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#build-webassembly-apps-in-go",children:"Build WebAssembly Apps in Go"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#initialize-project",children:"Initialize Project"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#hello-world",children:"Hello World"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#build-for-webassambly",children:"Build for WebAssambly"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#run-application-nodejs",children:"Run Application (Node.js)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#manipulate-js-dom",children:"Manipulate JS-DOM"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#expose-functions",children:"Expose Functions"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#optimizing-filesize",children:"Optimizing Filesize"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/mpolinowski/go-wasm",children:"Github"})}),"\n",(0,r.jsx)(n.h2,{id:"initialize-project",children:"Initialize Project"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go mod init go-wasm\r\ngo mod tidy\n"})}),"\n",(0,r.jsx)(n.h2,{id:"hello-world",children:"Hello World"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\r\n\r\nimport "fmt"\r\n\r\nfunc main() {\r\n\tfmt.Println("Go WebAssembly")\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"build-for-webassambly",children:"Build for WebAssambly"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"GOOS=js GOARCH=wasm go build -o main.wasm\n"})}),"\n",(0,r.jsx)(n.h2,{id:"run-application-nodejs",children:"Run Application (Node.js)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" .\r\nnpm install -g live-server\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\r\n<html lang="en">\r\n  <head>\r\n    <meta charset="utf-8">\r\n    <title>Go WebAssembly</title>\r\n    <script src="/wasm_exec.js"><\/script>\r\n    <script>\r\n      const go = new Go();\r\n      WebAssembly.instantiateStreaming(fetch("/main.wasm"), go.importObject)\r\n          .then((result) => {\r\n            go.run(result.instance);\r\n          })\r\n    <\/script>\r\n  </head>\r\n  <body>\r\n  </body>\r\n</html>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Start ",(0,r.jsx)(n.code,{children:"live-server"})," and visit ",(0,r.jsx)(n.code,{children:"localhost:8080"}),":"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Build WebAssembly Apps in Go",src:s(699687).Z+"",width:"997",height:"128"})}),"\n",(0,r.jsx)(n.h2,{id:"manipulate-js-dom",children:"Manipulate JS-DOM"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"fmt"\r\n\t"syscall/js"\r\n)\r\n\r\nfunc main() {\r\n\tfmt.Println("Go WebAssembly")\r\n\r\n\tdocument := js.Global().Get("document")\r\n\r\n\thello := document.Call("createElement", "h1")\r\n\thello.Set("innerText", "Go WebAssembly")\r\n\tdocument.Get("body").Call("appendChild", hello)\r\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"GOOS=js GOARCH=wasm go build -o main.wasm\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Start ",(0,r.jsx)(n.code,{children:"live-server"})," and visit ",(0,r.jsx)(n.code,{children:"localhost:8080"}),":"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Build WebAssembly Apps in Go",src:s(81272).Z+"",width:"989",height:"227"})}),"\n",(0,r.jsx)(n.h2,{id:"expose-functions",children:"Expose Functions"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"fmt"\r\n\t"syscall/js"\r\n)\r\n\r\nfunc exposedFunction(this js.Value, inputs []js.Value) interface{} {\r\n\tfmt.Println("Exposed Function Executed!")\r\n\treturn nil\r\n}\r\n\r\nfunc main() {\r\n\t// channel to keep the wasm running\r\n\tc := make(chan int)\r\n\tfmt.Println("Go WebAssembly")\r\n\r\n\tjs.Global().Set("exposedFunction", js.FuncOf(exposedFunction))\r\n\r\n\tdocument := js.Global().Get("document")\r\n\r\n\thello := document.Call("createElement", "h1")\r\n\thello.Set("innerText", "Go WebAssembly")\r\n\tdocument.Get("body").Call("appendChild", hello)\r\n\t// value for c is never send\r\n\t<-c\r\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Function can be called from your browser console:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Build WebAssembly Apps in Go",src:s(516313).Z+"",width:"995",height:"275"})}),"\n",(0,r.jsx)(n.h2,{id:"optimizing-filesize",children:"Optimizing Filesize"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://tinygo.org/",children:"TinyGo"})," is a new compiler for the Go programming language. TinyGo focuses on compiling code written in Go, but for smaller kinds of systems:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The Go compiler and tools (from golang.org) are the reference implementation of the Go programming language. They are primarily intended for server side programming but also used for command line tools and other purposes."}),"\n",(0,r.jsx)(n.li,{children:"The TinyGo project implements the exact same programming language. However, TinyGo uses a different compiler and tools to make it suited for embedded systems and WebAssembly. It does this primarily by creating much smaller binaries and targeting a much wider variety of systems."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["TinyGo can be ",(0,r.jsx)(n.a,{href:"https://tinygo.org/getting-started/install/linux/#arch-linux",children:"installed on a variety of host systems"}),". On Arch you can get the compiler directly through ",(0,r.jsx)(n.a,{href:"https://archlinux.org/packages/community/x86_64/tinygo/",children:"Pacman"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo pacman -S tinygo\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"tinygo build -o main-tiny.wasm -target wasm ./main.go\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ls -la\r\n310393 Dec 26 20:05 main-tiny.wasm\r\n2065184 Dec 26 19:47 main.wasm\n"})}),"\n",(0,r.jsx)(n.p,{children:"When running the new, tiny version of our program we get an Type Error:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"TypeError: import object field 'wasi_unstable' is not an Object\n"})}),"\n",(0,r.jsx)(n.p,{children:"This is because we copied in the following file from the Go compiler:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" .\n'})}),"\n",(0,r.jsx)(n.p,{children:"But here we need to swap it for the version from TinyGo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cp $(tinygo env TINYGOROOT)/targets/wasm_exec.js ./wasm_exec_tiny.js\n"})}),"\n",(0,r.jsx)(n.p,{children:"And link it into our HTML file instead."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\r\n<html lang="en">\r\n  <head>\r\n    <meta charset="utf-8">\r\n    <title>Go WebAssembly</title>\r\n \r\n    \x3c!-- GO COMPILER --\x3e\r\n    \x3c!--\r\n    <script src="/wasm_exec.js"><\/script>\r\n    <script>\r\n      const go = new Go();\r\n      WebAssembly.instantiateStreaming(fetch("/main.wasm"), go.importObject)\r\n          .then((result) => {\r\n            go.run(result.instance);\r\n          })\r\n    <\/script> --\x3e\r\n    \r\n    \x3c!-- TinyGo COMPILER --\x3e\r\n    <script src="/wasm_exec_tiny.js"><\/script>\r\n    <script>\r\n      const go = new Go();\r\n      WebAssembly.instantiateStreaming(fetch("/main-tiny.wasm"), go.importObject)\r\n          .then((result) => {\r\n            go.run(result.instance);\r\n          })\r\n    <\/script>\r\n\r\n  </head>\r\n  <body>\r\n  </body>\r\n</html>\n'})})]})}function m(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},603905:(e,n,s)=>{s.d(n,{ah:()=>c});var r=s(667294);function i(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function t(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,r)}return s}function l(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?t(Object(s),!0).forEach((function(n){i(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):t(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function o(e,n){if(null==e)return{};var s,r,i=function(e,n){if(null==e)return{};var s,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)s=t[r],n.indexOf(s)>=0||(i[s]=e[s]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)s=t[r],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var a=r.createContext({}),c=function(e){var n=r.useContext(a),s=n;return e&&(s="function"==typeof e?e(n):l(l({},n),e)),s},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var s=e.components,i=e.mdxType,t=e.originalType,a=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),h=c(s),p=i,u=h["".concat(a,".").concat(p)]||h[p]||d[p]||t;return s?r.createElement(u,l(l({ref:n},m),{},{components:s})):r.createElement(u,l({ref:n},m))}));m.displayName="MDXCreateElement"},699687:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/Go_WebAssembly_01-5e7d68005cc17895b6a065679e1c88cf.png"},81272:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/Go_WebAssembly_02-0e5b02fd900896bf04de1b00e7f043f1.png"},516313:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/Go_WebAssembly_03-dbe92d1405743445b7e8db26d40765bc.png"},392511:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-0795219c47cded4f1a1480a5f18e4c60.jpg"}}]);