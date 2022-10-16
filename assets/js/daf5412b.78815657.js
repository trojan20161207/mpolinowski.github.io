"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[75113],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:8950,slug:"2022-10-15",title:"Python - Build a REST API",authors:"mpolinowski",tags:["Python"],description:"Using Flask to deploy an JSON REST API."},s=void 0,i={unversionedId:"Development/Python/2022-10-15-python-rest-server/index",id:"Development/Python/2022-10-15-python-rest-server/index",title:"Python - Build a REST API",description:"Using Flask to deploy an JSON REST API.",source:"@site/docs/Development/Python/2022-10-15-python-rest-server/index.md",sourceDirName:"Development/Python/2022-10-15-python-rest-server",slug:"/Development/Python/2022-10-15-python-rest-server/2022-10-15",permalink:"/docs/Development/Python/2022-10-15-python-rest-server/2022-10-15",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Python/2022-10-15-python-rest-server/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:8950,frontMatter:{sidebar_position:8950,slug:"2022-10-15",title:"Python - Build a REST API",authors:"mpolinowski",tags:["Python"],description:"Using Flask to deploy an JSON REST API."},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/category/python"},next:{title:"Python - Working with the Elasticsearch REST API",permalink:"/docs/Development/Python/2022-10-14-python-rest-elastic/2022-10-14"}},l={},u=[{value:"Beautiful Soup",id:"beautiful-soup",level:2},{value:"Flask",id:"flask",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sham Sui Po, Hong Kong",src:n(38152).Z,width:"1500",height:"548"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#beautiful-soup"},"Beautiful Soup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#flask"},"Flask"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/python-rest-server"},"Github Repository")),(0,o.kt)("h2",{id:"beautiful-soup"},"Beautiful Soup"),(0,o.kt)("p",null,"Using Beautiful Soup to scrape conversion rates from ",(0,o.kt)("inlineCode",{parentName:"p"},"www.x-rates.com"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from flask import Flask, jsonify\nfrom bs4 import BeautifulSoup\nimport requests\n\ndef get_conversion(in_cur, out_cur):\n    url = f'https://www.x-rates.com/calculator/?from={in_cur}&to={out_cur}&ammount=1'\n    content = requests.get(url).text\n    soup = BeautifulSoup(content, 'html.parser')\n    rate = soup.find(\"span\", class_=\"ccOutputRslt\").get_text()\n    rate = float(rate[:-4])\n\n    return rate\n")),(0,o.kt)("h2",{id:"flask"},"Flask"),(0,o.kt)("p",null,"Flask to return the JSON data through our REST API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"app = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return '<h1>Currency Rate API</h1><p><small>API Endpoint Example: <em>/api/v1/eur_cny</em></small></p>'\n\n@app.route('/api/v1/<in_cur>_<out_cur>')\ndef api(in_cur, out_cur):\n    conversion = get_conversion(in_cur, out_cur)\n    response ={'input_currency': in_cur, 'output_currency': out_cur, 'conversion_rate': conversion}\n\n    return jsonify(response)\n\n\napp.run(host='0.0.0.0')\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Python - Build a REST API",src:n(65817).Z,width:"1043",height:"156"})))}c.isMDXComponent=!0},65817:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Python_Flask_REST_Server_01-d5535db6601ccbfbfb9d3143ef10726b.png"},38152:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5f44d483789c3ce79f05418f930f5cd2.jpg"}}]);