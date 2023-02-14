"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[42364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||i;return n?r.createElement(u,s(s({ref:t},p),{},{components:n})):r.createElement(u,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:5930,slug:"2023-02-12",title:"React Frontend for MeiLi Search",authors:"mpolinowski",tags:["Javascript","Meili"],description:"A lightning-fast search engine that fits effortlessly into your apps, websites, and workflow."},s=void 0,o={unversionedId:"Development/Javascript/2023-02-12-react-meili-search-starter/index",id:"Development/Javascript/2023-02-12-react-meili-search-starter/index",title:"React Frontend for MeiLi Search",description:"A lightning-fast search engine that fits effortlessly into your apps, websites, and workflow.",source:"@site/docs/Development/Javascript/2023-02-12-react-meili-search-starter/index.md",sourceDirName:"Development/Javascript/2023-02-12-react-meili-search-starter",slug:"/Development/Javascript/2023-02-12-react-meili-search-starter/2023-02-12",permalink:"/docs/Development/Javascript/2023-02-12-react-meili-search-starter/2023-02-12",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2023-02-12-react-meili-search-starter/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"Meili",permalink:"/docs/tags/meili"}],version:"current",sidebarPosition:5930,frontMatter:{sidebar_position:5930,slug:"2023-02-12",title:"React Frontend for MeiLi Search",authors:"mpolinowski",tags:["Javascript","Meili"],description:"A lightning-fast search engine that fits effortlessly into your apps, websites, and workflow."},sidebar:"tutorialSidebar",previous:{title:"MeiLi Search for your Gatsby.js Blog",permalink:"/docs/Development/Javascript/2023-02-13-gatsby-meili-search-starter/2023-02-13"},next:{title:"Reactive Search Starter",permalink:"/docs/Development/Javascript/2022-12-29-reactive-search-starter/2022-12-29"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Build the Frontend",id:"build-the-frontend",level:2}],p={toc:c};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shenzhen, China",src:n(72268).Z,width:"2208",height:"757"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mpolinowski/meili-hello"},"Github Repository"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#build-the-frontend"},"Build the Frontend"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.meilisearch.com/learn/getting_started/quick_start.html"},"MeiLi Search")," is an open-source search engine. And ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/meilisearch/instant-meilisearch"},"Instant Meilisearch")," is the search client that you should use to make MeiLi Search work with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/algolia/instantsearch.js"},"InstantSearch"),". InstantSearch, an open-source project developed by Algolia, is the tool that renders all the components needed to start searching in your front-end application."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you did not setup the MeiLi backend - ",(0,a.kt)("a",{parentName:"p",href:"/docs/DevOps/Elasticsearch/2023-02-10--meili-rusty-elastic-docker/2023-02-10/"},"please do this first"),".")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Start by scaffolding a React app and install the instant search dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app meilisearch-starter && cd meilisearch-starter\nnpm install react-instantsearch-dom instantsearch.css @meilisearch/instant-meilisearch\n")),(0,a.kt)("h2",{id:"build-the-frontend"},"Build the Frontend"),(0,a.kt)("p",null,"Now we can change the content of ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.js")," to start building our MeiLi user interface - ",(0,a.kt)("strong",{parentName:"p"},"Note"),": I will start by using the ",(0,a.kt)("strong",{parentName:"p"},"Master Key")," to interact with the MeiLi Search API - this needs to be changed later:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React from \'react\'\nimport { InstantSearch, Hits, SearchBox } from \'react-instantsearch-dom\'\nimport \'instantsearch.css/themes/algolia-min.css\'\nimport { instantMeiliSearch } from \'@meilisearch/instant-meilisearch\'\n\nconst SERVER_ADDRESS = \'http://localhost:7700\'\nconst API_KEY = \'RhTX1pLPSKSn7KW9yf9u_MNKC0v1YKkmx2Sc6qSwbLQ\'\nconst INDEX_NAME = \'movies\'\n\nconst searchClient = instantMeiliSearch(SERVER_ADDRESS, API_KEY, {\n  primaryKey: \'id\',\n})\n\nconst App = () => (\n  <div className="ais-InstantSearch">\n    <h1>MeiLi Search React Frontend</h1>\n    <h2>Search for Movies</h2>\n    <InstantSearch indexName={INDEX_NAME} searchClient={searchClient}>\n      <div style={{ margin: "16px 0px"}}>\n        <SearchBox />\n      </div>\n      <Hits hitComponent={Hit} />\n    </InstantSearch>\n  </div>\n)\n\nconst Hit = ({ hit }) => (\n  <div\n    key={hit.id}\n    style={{ display: \'flex\', flexDirection: \'column\', alignItems: \'center\' }}\n  >\n    {hit.title && (\n      <h3 className="hit-title" style={{ marginTop: 0 }}>\n        {hit.title}\n      </h3>\n    )}\n    {hit.poster && (\n      <img src={hit.poster} alt={hit.overview || \'\'} style={{ maxWidth: \'100%\' }} />\n    )}\n    <a href={`/${hit.id || \'\'}`}><button style={{cursor: "pointer", width: "100%", height: 35, padding: "0 1.5rem", color: "rgb(105, 107, 108)", fontSize: 15, fontWeight: 600, fontFamily: "\'Roboto\', sans-serif", letterSpacing: ".8px", textAlign: "center", textDecoration: "none", verticalAlign: "middle", whiteSpace: "nowrap", outline: "none", border: "none", userSelect: "none", borderRadius: 2, transition: "all .3s ease-out", boxShadow: "0 2px 5px 0 rgba(0,0,0,0.225)", marginTop: 15}}>Not implemented</button></a>\n  </div>\n)\n\nexport default App\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Reactive Search Starter",src:n(28960).Z,width:"417",height:"277"})))}h.isMDXComponent=!0},28960:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/MeiLi_InstantSearch_React_01-3ce1217f0f145b9bee358fc14a3f2fde.gif"},72268:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-e38404fdf0e14587f660e537829bfab5.jpg"}}]);