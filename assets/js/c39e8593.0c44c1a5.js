"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[62292],{167378:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var t=n(785893),s=n(603905);const a={sidebar_position:9090,slug:"2017-12-05",title:"React Search Interface",authors:"mpolinowski",tags:["Javascript","React","Databases","Elasticsearch"]},c=void 0,i={id:"DevOps/Elasticsearch/2017-12-05--elasticsearch-react-example/index",title:"React Search Interface",description:"Tanna Island, Vanuatu",source:"@site/docs/DevOps/Elasticsearch/2017-12-05--elasticsearch-react-example/index.mdx",sourceDirName:"DevOps/Elasticsearch/2017-12-05--elasticsearch-react-example",slug:"/DevOps/Elasticsearch/2017-12-05--elasticsearch-react-example/2017-12-05",permalink:"/docs/DevOps/Elasticsearch/2017-12-05--elasticsearch-react-example/2017-12-05",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Elasticsearch/2017-12-05--elasticsearch-react-example/index.mdx",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"React",permalink:"/docs/tags/react"},{label:"Databases",permalink:"/docs/tags/databases"},{label:"Elasticsearch",permalink:"/docs/tags/elasticsearch"}],version:"current",sidebarPosition:9090,frontMatter:{sidebar_position:9090,slug:"2017-12-05",title:"React Search Interface",authors:"mpolinowski",tags:["Javascript","React","Databases","Elasticsearch"]},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch and Kibana",permalink:"/docs/DevOps/Elasticsearch/2017-12-26--elasticsearch-kibana/2017-12-16"},next:{title:"Search Engine Setup and Configuration",permalink:"/docs/DevOps/Elasticsearch/2017-10-03--search-engine-setup-and-configuration/2017-10-03"}},l={},o=[{value:"elasticsearch-react-example",id:"elasticsearch-react-example",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"To run the example:",id:"to-run-the-example",level:2},{value:"Original createClass Syntax",id:"original-createclass-syntax",level:2},{value:"Update to a Elasticsearch 5.x index",id:"update-to-a-elasticsearch-5x-index",level:2},{value:"ES6 Class Syntax",id:"es6-class-syntax",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Tanna Island, Vanuatu",src:n(551964).Z+"",width:"1932",height:"660"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#elasticsearch-react-example",children:"elasticsearch-react-example"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#prerequisites",children:"Prerequisites"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#to-run-the-example",children:"To run the example:"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#original-createclass-syntax",children:"Original createClass Syntax"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#update-to-a-elasticsearch-5x-index",children:"Update to a Elasticsearch 5.x index"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#es6-class-syntax",children:"ES6 Class Syntax"})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"elasticsearch-react-example",children:"elasticsearch-react-example"}),"\n",(0,t.jsxs)(r.p,{children:["An example project showing how to use ElasticSearch with React - based on ",(0,t.jsx)(r.a,{href:"https://github.com/scotchfield/elasticsearch-react-example",children:"elasticsearch-react-example"})," by ",(0,t.jsx)(r.a,{href:"https://github.com/scotchfield",children:"scotchfield"})]}),"\n",(0,t.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(r.p,{children:["To run this example, you will need to configure Elasticsearch to accept requests from the browser using ",(0,t.jsx)(r.a,{href:"http://en.wikipedia.org/wiki/Cross-origin_resource_sharing",children:"CORS"}),". To enable CORS, add the following to Elasticsearch's config file. Usually, this file is located near the elasticsearch executable at ",(0,t.jsx)(r.code,{children:"config/elasticsearch.yml"}),". ",(0,t.jsx)(r.a,{href:"https://github.com/spalger/elasticsearch-angular-example",children:"source"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"http.cors:\r\n  enabled: true\r\n  allow-origin: /https?:\\/\\/localhost(:[0-9]+)?/\n"})}),"\n",(0,t.jsx)(r.h2,{id:"to-run-the-example",children:"To run the example:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Clone this repo locally (or just download and unzip it)"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"git clone https://github.com/mpolinowski/elasticsearch-react-example.git\n"})}),"\n",(0,t.jsxs)(r.ol,{start:"2",children:["\n",(0,t.jsx)(r.li,{children:"Move into the project"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"cd elasticsearch-react-example\n"})}),"\n",(0,t.jsxs)(r.ol,{start:"3",children:["\n",(0,t.jsx)(r.li,{children:"Run npm install"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"npm install\n"})}),"\n",(0,t.jsxs)(r.ol,{start:"4",children:["\n",(0,t.jsx)(r.li,{children:"Run webpack (or webpack-dev-server) to build the index.js source file."}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"original-createclass-syntax",children:"Original createClass Syntax"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import React from 'react'\r\nimport { render } from 'react-dom'\r\nimport elasticsearch from 'elasticsearch'\r\n\r\nlet client = new elasticsearch.Client({\r\n  host: 'localhost:9200',\r\n  log: 'trace'\r\n})\r\n\r\nconst App = React.createClass({\r\n  getInitialState() {\r\n    return {\r\n      results: []\r\n    }\r\n  },\r\n  handleChange(event) {\r\n    const search_query = event.target.value\r\n\r\n    client.search({\r\n      q: search_query\r\n    }).then(function (body) {\r\n      this.setState({ results: body.hits.hits })\r\n    }.bind(this), function (error) {\r\n      console.trace(error.message);\r\n    });\r\n  },\r\n  render() {\r\n    return (\r\n      <div className='container'>\r\n        <input type='text' onChange={this.handleChange} />\r\n        <SearchResults results={this.state.results} />\r\n      </div>\r\n    )\r\n  }\r\n})\r\n\r\nconst SearchResults = React.createClass({\r\n  propTypes: {\r\n    results: React.PropTypes.array\r\n  },\r\n  getDefaultProps() {\r\n    return { results: [] }\r\n  },\r\n  render() {\r\n    return (\r\n      <div className='search_results'>\r\n        <hr />\r\n        <ul>\r\n          {this.props.results.map((result) => {\r\n            return <li key={result._id}>{result._source.name}</li>\r\n          })}\r\n        </ul>\r\n      </div>\r\n    )\r\n  }\r\n})\r\n\r\n\r\nrender(<App />, document.getElementById('main'))\n"})}),"\n",(0,t.jsx)(r.h2,{id:"update-to-a-elasticsearch-5x-index",children:"Update to a Elasticsearch 5.x index"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import React from 'react'\r\nimport { render } from 'react-dom'\r\nimport elasticsearch from 'elasticsearch'\r\n\r\nconst connectionString = 'localhost:9200';\r\nconst _index = 'wiki2_de_2017_09_09';\r\nconst _type = 'article';\r\n\r\nconst App = React.createClass({\r\n  getInitialState() {\r\n    return {\r\n      results: []\r\n    }\r\n  },\r\n  handleChange(event) {\r\n    const search_query = event.target.value\r\n\r\n    client.search({\r\n      index: _index,\r\n      type: _type,\r\n      q: search_query,\r\n      body: {\r\n        query: {\r\n          multi_match: {\r\n            query: search_query,\r\n            fields: ['title^100', 'tags^100', 'abstract^20', 'description^10', 'chapter^5', 'title2^10', 'description2^10'],\r\n            fuzziness: 1,\r\n          },\r\n        },\r\n      },\r\n    }).then(function (body) {\r\n      this.setState({ results: body.hits.hits })\r\n    }.bind(this), function (error) {\r\n      console.trace(error.message);\r\n    });\r\n  },\r\n\r\n  render() {\r\n    return (\r\n      <div className='container'>\r\n        <input type='text' onChange={this.handleChange} />\r\n        <SearchResults results={this.state.results} />\r\n      </div>\r\n    )\r\n  }\r\n})\r\n\r\nconst SearchResults = React.createClass({\r\n  propTypes: {\r\n    results: React.PropTypes.array\r\n  },\r\n  getDefaultProps() {\r\n    return { results: [] }\r\n  },\r\n  render() {\r\n    return (\r\n      <div className='search_results'>\r\n        <hr />\r\n        <ul>\r\n          {props.results.map((result) => {\r\n            return\r\n            <li key={result._id}>\r\n              <h3>{result._source.title}</h3><br />\r\n              <a href={`${result._source.link}`}><img src={result._source.image} alt={result._source.abstract} /><br /></a>\r\n              <p>{result._source.abstract}</p>\r\n            </li>\r\n          })}\r\n        </ul>\r\n      </div>\r\n    )\r\n  }\r\n})\r\n\r\n\r\nrender(<App />, document.getElementById('main'))\n"})}),"\n",(0,t.jsx)(r.h2,{id:"es6-class-syntax",children:"ES6 Class Syntax"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import React, { Component } from 'react';\r\nimport { render } from 'react-dom';\r\nimport elasticsearch from 'elasticsearch';\r\n\r\nconst connectionString = 'localhost:9200';\r\nconst _index = 'wiki2_de_2017_09_09';\r\nconst _type = 'article';\r\n\r\nlet client = new elasticsearch.Client({\r\n  host: connectionString,\r\n  log: 'trace'\r\n});\r\n\r\nclass App extends Component {\r\n  constructor(props) {\r\n    super(props)\r\n    this.state = { results: [] };\r\n    this.handleChange = this.handleChange.bind(this)\r\n  }\r\n\r\n  handleChange(event) {\r\n    const search_query = event.target.value;\r\n\r\n    client.search({\r\n      index: _index,\r\n      type: _type,\r\n      body: {\r\n        query: {\r\n          multi_match: {\r\n            query: search_query,\r\n            fields: ['title^100', 'tags^100', 'abstract^20', 'description^10', 'chapter^5', 'title2^10', 'description2^10'],\r\n            fuzziness: 1,\r\n          },\r\n        },\r\n      },\r\n    }).then(function (body) {\r\n      this.setState({ results: body.hits.hits });\r\n    }.bind(this),\r\n      function (error) {\r\n        console.trace(error.message);\r\n      }\r\n    );\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <div className='container'>\r\n        <input type='text' onChange={this.handleChange} />\r\n        <SearchResults results={this.state.results} />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nconst SearchResults = ({ results }) => (\r\n  <div className='search_results'>\r\n    <hr />\r\n\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th>Title</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        {results.map((result, i) =>\r\n          <ResultRow key={i}\r\n            title={result._source.title2} />\r\n        )}\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n)\r\n\r\nconst ResultRow = ({ title }) => (\r\n  <tr>\r\n    <td>\r\n      {title}\r\n    </td>\r\n  </tr>\r\n)\r\n\r\n\r\n\r\nrender(<App />, document.getElementById('main'));\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes",children:"https://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://babeljs.io/blog/2015/06/07/react-on-es6-plus",children:"https://babeljs.io/blog/2015/06/07/react-on-es6-plus"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://medium.com/dailyjs/we-jumped-the-gun-moving-react-components-to-es2015-class-syntax-2b2bb6f35cb3",children:"https://medium.com/dailyjs/we-jumped-the-gun-moving-react-components-to-es2015-class-syntax-2b2bb6f35cb3"})})]})}function d(e={}){const{wrapper:r}={...(0,s.ah)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},603905:(e,r,n)=>{n.d(r,{ah:()=>o});var t=n(667294);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=t.createContext({}),o=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},h={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=o(n),u=s,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||a;return n?t.createElement(m,c(c({ref:r},d),{},{components:n})):t.createElement(m,c({ref:r},d))}));d.displayName="MDXCreateElement"},551964:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/photo-34445485832_9f5f2a9aea_o-2763bd992e050a1540d61800bbed780e.png"}}]);