"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[47687],{827771:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(785893),r=t(603905);const o={sidebar_position:8920,slug:"2022-12-11",title:"Pipenv - Welcome NPM",authors:"mpolinowski",tags:["Python"],description:"Python Dev Workflow for Humans"},s=void 0,a={id:"Development/Python/2022-12-11-pipenv/index",title:"Pipenv - Welcome NPM",description:"Python Dev Workflow for Humans",source:"@site/docs/Development/Python/2022-12-11-pipenv/index.md",sourceDirName:"Development/Python/2022-12-11-pipenv",slug:"/Development/Python/2022-12-11-pipenv/2022-12-11",permalink:"/docs/Development/Python/2022-12-11-pipenv/2022-12-11",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Python/2022-12-11-pipenv/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:8920,frontMatter:{sidebar_position:8920,slug:"2022-12-11",title:"Pipenv - Welcome NPM",authors:"mpolinowski",tags:["Python"],description:"Python Dev Workflow for Humans"},sidebar:"tutorialSidebar",previous:{title:"Python 3.11 New Features",permalink:"/docs/Development/Python/2023-01-16-python-3-11-features/2023-01-16"},next:{title:"Python - Natural Language Processing",permalink:"/docs/Development/Python/2022-10-22-python-nlp/2022-10-22"}},l={},c=[{value:"Working with Pipenv",id:"working-with-pipenv",level:2},{value:"Installing Packages for your Project",id:"installing-packages-for-your-project",level:3},{value:"Using installed packages",id:"using-installed-packages",level:3}];function p(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sham Sui Po, Hong Kong",src:t(955305).Z+"",width:"1500",height:"548"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#working-with-pipenv",children:"Working with Pipenv"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#installing-packages-for-your-project",children:"Installing Packages for your Project"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#using-installed-packages",children:"Using installed packages"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Pipenv automatically creates and manages a virtualenv for your projects, as well as adds/removes packages from your Pipfile as you install/uninstall packages. It also generates the ever-important Pipfile.lock, which is used to produce deterministic builds."}),"\n",(0,i.jsx)(n.p,{children:"Pipenv is primarily meant to provide users and developers of applications with an easy method to setup a working environment. For the distinction between libraries and applications and the usage of setup.py vs Pipfile to define dependencies"}),"\n",(0,i.jsx)(n.h2,{id:"working-with-pipenv",children:"Working with Pipenv"}),"\n",(0,i.jsxs)(n.p,{children:["It is recommended that users on most platforms should install ",(0,i.jsx)(n.strong,{children:"pipenv"})," from ",(0,i.jsx)(n.code,{children:"pypi.org"})," using :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install pipenv\n"})}),"\n",(0,i.jsx)(n.h3,{id:"installing-packages-for-your-project",children:"Installing Packages for your Project"}),"\n",(0,i.jsx)(n.p,{children:"Pipenv manages dependencies on a per-project basis. To install packages, change into your project\u2019s directory (or just an empty directory for this tutorial) and run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir myproject && cd myproject\npipenv install requests\n\n\u2714 Successfully created virtual environment!\nVirtualenv location: ~/.local/share/virtualenvs/myproject-VE5iXAN5\nCreating a Pipfile for this project...\nInstalling requests...\nPipfile.lock not found, creating...\nLocking [packages] dependencies...\nLocking [dev-packages] dependencies...\nUpdated Pipfile.lock (a416d48a2c30d4acf425cb96d7ac6672753db8e8f6c962a328848db5b9a290a1)!\nInstalling dependencies from Pipfile.lock (a290a1)...\nTo activate this project's virtualenv, run pipenv shell.\nAlternatively, run a command inside the virtualenv with pipenv run.\n"})}),"\n",(0,i.jsx)(n.h3,{id:"using-installed-packages",children:"Using installed packages"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"./main.py"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"Now that Requests is installed you can create a simple main.py file to use it:\n\nimport requests\n\nresponse = requests.get('https://httpbin.org/ip')\n\nprint('Your IP is {0}'.format(response.json()['origin']))\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then you can run this script using pipenv run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pipenv run python main.py\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>c});var i=t(667294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(t),h=r,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return t?i.createElement(g,s(s({ref:n},d),{},{components:t})):i.createElement(g,s({ref:n},d))}));d.displayName="MDXCreateElement"},955305:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5f44d483789c3ce79f05418f930f5cd2.jpg"}}]);