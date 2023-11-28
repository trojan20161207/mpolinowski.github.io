"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[65281],{746213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=n(785893),r=n(603905);const s={sidebar_position:9080,slug:"2022-06-01",title:"Introduction to PyScript",authors:"mpolinowski",tags:["Python"]},o=void 0,l={id:"Development/Python/2022-06-01-python-pyscript/index",title:"Introduction to PyScript",description:"Shen Zhen, China",source:"@site/docs/Development/Python/2022-06-01-python-pyscript/index.md",sourceDirName:"Development/Python/2022-06-01-python-pyscript",slug:"/Development/Python/2022-06-01-python-pyscript/2022-06-01",permalink:"/docs/Development/Python/2022-06-01-python-pyscript/2022-06-01",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Python/2022-06-01-python-pyscript/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:9080,frontMatter:{sidebar_position:9080,slug:"2022-06-01",title:"Introduction to PyScript",authors:"mpolinowski",tags:["Python"]},sidebar:"tutorialSidebar",previous:{title:"Web Scraping Essentials with Python",permalink:"/docs/Development/Python/2022-06-27-python-web-scraping/2022-06-27"},next:{title:"Getting started with Python Part II",permalink:"/docs/Development/Python/2017-12-13--getting-started-with-python-part-ii/2017-12-13"}},d={},a=[{value:"Hello World",id:"hello-world",level:2},{value:"PyScript Tags",id:"pyscript-tags",level:2},{value:"Py-Script",id:"py-script",level:3},{value:"Py-Env",id:"py-env",level:3},{value:"Py-REPL",id:"py-repl",level:3},{value:"Working with Forms",id:"working-with-forms",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Shen Zhen, China",src:n(305636).Z+"",width:"1500",height:"598"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#hello-world",children:"Hello World"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#pyscript-tags",children:"PyScript Tags"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#py-script",children:"Py-Script"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#py-env",children:"Py-Env"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#py-repl",children:"Py-REPL"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#working-with-forms",children:"Working with Forms"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"hello-world",children:"Hello World"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://pyscript.net/",children:"PyScript"})," allows you to run Python in HTML. To use PyScript you can either ",(0,i.jsx)(t.a,{href:"https://github.com/pyscript/pyscript/archive/refs/heads/main.zip",children:"download"})," it and follow the instructions, or add the following lines to your page:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />\n<script defer src="https://pyscript.net/alpha/pyscript.js"><\/script>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["I downloaded them and placed them inside a folder I called ",(0,i.jsx)(t.code,{children:"alpha"})," next to my HTML file. The ",(0,i.jsx)(t.a,{href:"https://github.com/pyscript/pyscript/blob/main/docs/tutorials/getting-started.md",children:"official Hello World"})," example - modified to work offline - then looks like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>PyScript Hello World</title>\n    <link rel="stylesheet" href="/alpha/pyscript.css" />\n    <script defer src="/alpha/pyscript.js"><\/script>\n  </head>\n  <body> <py-script> print(\'Hello, World!\') </py-script> </body>\n</html>\n'})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["I found that PyScript downloaded the JS map from the CDN ",(0,i.jsx)(t.code,{children:"pyscript.js.map"}),". This has to be placed next to the ",(0,i.jsx)(t.code,{children:"pyscript.js"})," file. And I also received a 404 from my browser when PyScript tried to download a file called ",(0,i.jsx)(t.code,{children:"pyscript.py"}),". This does not seem to be present on the CDN link (?). But I found it inside the ",(0,i.jsx)(t.a,{href:"https://github.com/pyscript/pyscript/blob/main/pyscriptjs/src/pyscript.py",children:"PyScript Repo on Github"})," and placed it next to the ",(0,i.jsx)(t.code,{children:"pyscript.js"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Notice the use of the ",(0,i.jsx)(t.code,{children:"<py-script>"})," tag in the HTML body. This is where you'll write your Python code. In the following sections, we'll introduce the eight tags provided by PyScript."]}),"\n",(0,i.jsxs)(t.p,{children:["When you take a look into the ",(0,i.jsx)(t.code,{children:"pyscript.js"})," file you will find out that it is using ",(0,i.jsx)(t.a,{href:"https://pyodide.org/en/stable/",children:"Pyoide.js"}),". A quick look at the homepage tells us:"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Pyodide is a port of CPython to WebAssembly/Emscripten."}),"\n",(0,i.jsx)(t.p,{children:"Pyodide makes it possible to install and run Python packages in the browser with micropip. Any pure Python package with a wheel available on PyPI is supported. Many packages with C extensions have also been ported for use with Pyodide. These include many general-purpose packages such as regex, pyyaml, lxml and scientific Python packages including numpy, pandas, scipy, matplotlib, and scikit-learn."}),"\n",(0,i.jsx)(t.p,{children:"Pyodide comes with a robust Javascript \u27fa Python foreign function interface so that you can freely mix these two languages in your code with minimal friction. This includes full support for error handling (throw an error in one language, catch it in the other), async/await, and much more."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The CDN that is used here is, unfortunately blocked in China:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const DEFAULT_RUNTIME = {\n        src: 'https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js',\n        name: 'pyodide-default',\n        lang: 'python',\n    };\n"})}),"\n",(0,i.jsxs)(t.p,{children:["So let me ",(0,i.jsx)(t.a,{href:"https://github.com/pyodide/pyodide/releases",children:"download the entire build"})," from Github instead (151 MB which expands to ~260MB) and place it inside a folder ",(0,i.jsx)(t.code,{children:"Pyodide"})," next to my ",(0,i.jsx)(t.code,{children:"index.html"})," file. ",(0,i.jsx)(t.a,{href:"https://pyodide.org/en/stable/usage/downloading-and-deploying.html#serving-locally",children:"Following the development guide"})," I need to spin up a Python web server that is configured to set the correct headers from inside this folder:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"python -m http.server\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This will serve all necessary Pyodide files on ",(0,i.jsx)(t.code,{children:"localhost:8000"}),". So all I need to do is to change the CDN link inside the ",(0,i.jsx)(t.code,{children:"pyodide.js"})," file to:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const DEFAULT_RUNTIME = {\n        src: 'http://localhost:8000/pyodide.js',\n        name: 'pyodide-default',\n        lang: 'python',\n    };\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Now running two web servers - the Python server for Pyodide on port ",(0,i.jsx)(t.code,{children:"8000"})," and a Node.js one for my html file on port ",(0,i.jsx)(t.code,{children:"3000"})," I am finally able to execute the ",(0,i.jsx)(t.strong,{children:"Hello World"})," PyScript!"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"PyScript",src:n(31145).Z+"",width:"1554",height:"691"})}),"\n",(0,i.jsx)(t.h2,{id:"pyscript-tags",children:"PyScript Tags"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"<py-script>"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"<py-script>"})," tag allows you to write your Python code directly into your HTML page. Anything in between those tags is going to be interpreted as Python."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"<py-env>"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"<py-env>"})," tag allows you to import additional Python modules and packages outside of the Python Standard Library."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"<py-repl>"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"<py-repl>"})," tag starts a ",(0,i.jsx)(t.strong,{children:"REPL"})," (",(0,i.jsx)(t.em,{children:"Read-Evaluate-Print-Loop"}),") session that allows you to live execute python commands and code."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"py-script",children:"Py-Script"}),"\n",(0,i.jsxs)(t.p,{children:["We already saw a first example of the ",(0,i.jsx)(t.code,{children:"<py-script>"})," tag in the Hello World above:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"<body> <py-script> print('Hello, World!') </py-script> </body>\n"})}),"\n",(0,i.jsx)(t.p,{children:"But the tag can also direct it's output to an HTML tag ID somewhere in your page:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"<py-script output=\"output-div\"> print('Hello, World!') <py-script>\n"})}),"\n",(0,i.jsx)(t.p,{children:"Or it can load a Python script file from somewhere else:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<py-script src="/my-python-script.py"><py-script>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["You can make use of all the Standard Libraries that come with Python, e.g. ",(0,i.jsx)(t.code,{children:"datetime"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"<body>\n  <h2>Date & Time Example</h2>\n  <py-script>\n      import datetime as dt\n      Element('date').write(dt.date.today().strftime('%A %B %d, %Y'))\n  </py-script>\n  <p>Today is: <label id=\"date\"></label></p>\n</body>\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"PyScript",src:n(476440).Z+"",width:"1269",height:"702"})}),"\n",(0,i.jsx)(t.h3,{id:"py-env",children:"Py-Env"}),"\n",(0,i.jsxs)(t.p,{children:["Use the ",(0,i.jsx)(t.code,{children:"<py-env>"})," tag to define your Python dependencies:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"<py-env>\n    - numpy\n    - matplotlib=3.5.2\n    - paths:\n      - /utils.py\n</py-env>\n"})}),"\n",(0,i.jsx)(t.p,{children:"For example add a scatter plot to your web page with:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<head>\n  <py-env>\n      - numpy\n      - matplotlib\n   </py-env>\n</head>\n\n<body>\n  <py-script output="scatter">\n    import matplotlib.pyplot as plt\n    import numpy as np\n    x = np.random.randn(1000)\n    y = np.random.randn(1000)\n    fig, ax = plt.subplots()\n    ax.scatter(x,y)\n    fig\n  </py-script>\n  <div id="scatter"></div>\n</body>\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"PyScript",src:n(911331).Z+"",width:"1265",height:"774"})}),"\n",(0,i.jsx)(t.h3,{id:"py-repl",children:"Py-REPL"}),"\n",(0,i.jsxs)(t.p,{children:["Use the ",(0,i.jsx)(t.code,{children:"<py-repl>"})," tag to generate a REPL widget and place it on the page:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<py-repl id="interface" auto-generate="true"> </py-repl>\n'})}),"\n",(0,i.jsx)(t.p,{children:"This widget can also be used to output system messages to the user:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<py-repl id="log" auto-generate="true" std-out="output" std-err="err-div"> </py-repl>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The REPL command interface has to be wrapped inside a ",(0,i.jsx)(t.code,{children:"<pybox>"})," tag to automatically add some styles - like:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<py-box widths="2/3;1/3">\n  <py-repl id="py-repl" auto-generate="true" std-out="repl-output" std-err="err-out"> </py-repl>\n  <div id="repl-output"></div>\n</py-box>\n<footer id="err-out"></footer>\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"PyScript",src:n(523295).Z+"",width:"1267",height:"251"})}),"\n",(0,i.jsx)(t.h2,{id:"working-with-forms",children:"Working with Forms"}),"\n",(0,i.jsx)(t.p,{children:"Creating a form that takes user input and displays it on the page:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<py-script>\n  from js import console\n\n  def send(*args, **kwargs):\n    text = Element(\'input\').element.value\n    Element(\'output\').element.innerText = text\n</py-script>\n<input type="text" id="input" placeholder="Type something..." style="border: 2px; border: black; border-style: outset;" />\n<button id="submit" type="submit" pys-onClick="send">OK</button>\n<div id="output"></div>\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"PyScript",src:n(581511).Z+"",width:"1264",height:"730"})})]})}function p(e={}){const{wrapper:t}={...(0,r.ah)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},603905:(e,t,n)=>{n.d(t,{ah:()=>a});var i=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),a=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=a(n),y=r,u=h["".concat(d,".").concat(y)]||h[y]||c[y]||s;return n?i.createElement(u,o(o({ref:t},p),{},{components:n})):i.createElement(u,o({ref:t},p))}));p.displayName="MDXCreateElement"},31145:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/PyScript_01-3e9a8a7cf2293271f3ba813ad066e75b.png"},476440:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/PyScript_02-38109fe1c5a103214ee5e475fdece476.png"},911331:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/PyScript_03-45b68895d5da2e9339c0079018baf0eb.png"},523295:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/PyScript_04-5623f31bff5d4f4ae39512a514503810.png"},581511:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/PyScript_05-3d5e2b368c226116d2ed00d2f244190c.png"},305636:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-0829cb95dd693c790a8ca59f3f351274.jpg"}}]);