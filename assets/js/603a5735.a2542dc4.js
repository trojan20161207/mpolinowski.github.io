"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[13024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=s,m=h["".concat(o,".").concat(d)]||h[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},27384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const a={sidebar_position:8960,slug:"2022-10-14",title:"Python - Working with the Elasticsearch REST API",authors:"mpolinowski",tags:["Python"],description:"Run OpenSearch search queries and process the JSON response."},i=void 0,l={unversionedId:"Development/Python/2022-10-14-python-rest-elastic/index",id:"Development/Python/2022-10-14-python-rest-elastic/index",title:"Python - Working with the Elasticsearch REST API",description:"Run OpenSearch search queries and process the JSON response.",source:"@site/docs/Development/Python/2022-10-14-python-rest-elastic/index.md",sourceDirName:"Development/Python/2022-10-14-python-rest-elastic",slug:"/Development/Python/2022-10-14-python-rest-elastic/2022-10-14",permalink:"/docs/Development/Python/2022-10-14-python-rest-elastic/2022-10-14",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Python/2022-10-14-python-rest-elastic/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:8960,frontMatter:{sidebar_position:8960,slug:"2022-10-14",title:"Python - Working with the Elasticsearch REST API",authors:"mpolinowski",tags:["Python"],description:"Run OpenSearch search queries and process the JSON response."},sidebar:"tutorialSidebar",previous:{title:"Python - Build a REST API",permalink:"/docs/Development/Python/2022-10-15-python-rest-server/2022-10-15"},next:{title:"Python - Working with REST API Requests",permalink:"/docs/Development/Python/2022-10-13-python-rest-api/2022-10-13"}},o={},c=[{value:"Search - cURL to Python",id:"search---curl-to-python",level:2},{value:"Dynamic Search Terms",id:"dynamic-search-terms",level:2},{value:"Elasticsearch Flask Client",id:"elasticsearch-flask-client",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Sham Sui Po, Hong Kong",src:n(24552).Z,width:"1500",height:"548"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#search---curl-to-python"},"Search - cURL to Python")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#dynamic-search-terms"},"Dynamic Search Terms")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#elasticsearch-flask-client"},"Elasticsearch Flask Client"))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/python-search"},"Github Repository")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 1"),": ",(0,s.kt)("a",{parentName:"li",href:"/docs/DevOps/Elasticsearch/2022-10-11--opensearch-docker-compose/2022-10-11"},"Set up a Single Node Opensearch or Elasticsearch Cluster")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 2"),": ",(0,s.kt)("a",{parentName:"li",href:"/docs/Development/Python/2022-10-07-python-docusaurus-elasticsearch/2022-10-07#elasticsearch"},"Create an Index Mapping and Ingest your Data")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 3"),": ",(0,s.kt)("a",{parentName:"li",href:"/docs/Development/Python/2022-10-13-python-rest-api/2022-10-13"},"Testing the Opensearch Rest API using cURL"))),(0,s.kt)("h2",{id:"search---curl-to-python"},"Search - cURL to Python"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -XGET \"https://localhost:9200/_search?q=Continuous%20Integration&filter_path=took,hits.hits._id,hits.hits._score,hits.hits._source&_source=title&pretty\" --insecure -H 'Content-Type: application/json' -u admin\n")),(0,s.kt)("p",null,"In Python again, I am running into the HTTPS/Certificate issue on localhost and have to add a ",(0,s.kt)("inlineCode",{parentName:"p"},", verify=False")," to the request:"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("inlineCode",{parentName:"p"},"requests.exceptions.SSLError: HTTPSConnectionPool(host='localhost', port=9200): Max retries exceeded with url: /_search?q=Continuous%20Integration&filter_path=took,hits.hits._id,hits.hits._score,hits.hits._source&_source=title&pretty (Caused by SSLError(SSLCertVerificationError(1, '[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:997)')))"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"import requests\nimport json\nfrom requests.auth import HTTPBasicAuth\n\nusername = 'admin'\npassword = 'admin'\n\nresponse = requests.get('https://localhost:9200/_search?q=Continuous%20Integration&filter_path=took,hits.hits._id,hits.hits._score,hits.hits._source&_source=title', auth = HTTPBasicAuth(username, password), verify=False)\n\nprint(response.content)\n")),(0,s.kt)("p",null,"This returns the correctly filtered byte response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'b\'{"took":5,"hits":{"hits":[{"_id":"docs_ci-cd","_score":3.0692163,"_source":{"title":"What is meant by CI/CD?"}},{"_id":"docs_dev-intro","_score":0.7032547,"_source":{"title":"Application Development and Server Operation"}}]}}\'\n')),(0,s.kt)("p",null,"To extract the JSON string:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"result = response.content.decode()\nprint(type(result))\n\nresult_dictionary = json.loads(result)\nprint(type(result_dictionary))\n\nbest_match = result_dictionary['hits']['hits'][0]\nprint(best_match)\n")),(0,s.kt)("p",null,"This decoded the bytes into a string and extracted the JSON object from it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"<class 'str'>\n<class 'dict'>\n{'_id': 'docs_ci-cd', '_score': 3.0692163, '_source': {'title': 'What is meant by CI/CD?'}}\n")),(0,s.kt)("h2",{id:"dynamic-search-terms"},"Dynamic Search Terms"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"import requests\nimport json\nfrom requests.auth import HTTPBasicAuth\n\nfrom elastic_config import *\n\ndef ask_es(query):\n    url = f'https://{elastic_url}/{elastic_index}/_search?q={query}'\n    response = requests.get(url, auth = HTTPBasicAuth(elastic_user, elastic_pass), verify=False)\n    result = response.content.decode()\n    result_dictionary = json.loads(result)\n    \n    return result_dictionary\n\nresults = ask_es(query='Continuous%20Integration')\n\nfor result in results['hits']['hits']:\n    print(result['_source']['title'])\n    print(result['_source']['abstract'])\n")),(0,s.kt)("p",null,"with ",(0,s.kt)("inlineCode",{parentName:"p"},"elastic_config.py"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"elastic_user = 'admin'\nelastic_pass = 'admin'\nelastic_url = 'localhost:9200'\nelastic_index = 'dev_2022_08_20' \n")),(0,s.kt)("h2",{id:"elasticsearch-flask-client"},"Elasticsearch Flask Client"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"from flask import Flask, render_template, request\nimport urllib.parse\nimport requests\nimport json\n\nelastic_user = 'admin'\nelastic_pass = 'admin'\n\ndef ask_elastic(query, elastic_url, elastic_index):\n    url = f'https://{elastic_url}/{elastic_index}/_search?q={query}'\n    response = requests.get(url, auth = requests.auth.HTTPBasicAuth(elastic_user, elastic_pass), verify=False)\n    result = response.content.decode()\n    result_dictionary = json.loads(result)\n    \n    return result_dictionary\n\napp = Flask(__name__)\n\n@app.route('/', methods=['GET'])\ndef home_get():\n    return render_template('index.html')\n\n@app.route('/', methods=['POST'])\ndef home_post():\n    elastic_url = request.form['elastic_url']\n    elastic_index = request.form['elastic_index']\n    query = request.form['query']\n    safe_request = urllib.parse.quote(query)\n    # print(safe_request)\n    response = ask_elastic(query=safe_request, elastic_url=elastic_url, elastic_index=elastic_index)\n    results = response['hits']['hits']\n    return render_template('results.html', query = query, len = len(results), result = results)\n\napp.run(host='0.0.0.0') \n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Python - Working with the Elasticsearch REST API",src:n(20089).Z,width:"1071",height:"400"})),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"index.html")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>Elastic Flask</title>\n  </head>\n  <body>\n    <header>\n      <h1>Elasticsearch Client</h1>\n    </header>\n    <main>\n      <p>Enter a search request:</p>\n      <form method="POST">\n        <div><p>Elasticsearch URL : </p><input placeholder="Elasticsearch URL" value="localhost:9200" name="elastic_url"></input></div>\n        <div><p>Elasticsearch Index : </p><input placeholder="Elasticsearch Index" value="dev_2022_08_20" name="elastic_index"></input></div>\n        <div><p>Search Query : </p><input placeholder="Search Query" name="query"></input></div>\n        <br/>\n        <button>Ask Elastic</button>\n      </form>\n    </main>\n  </body>\n</html>\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Python - Working with the Elasticsearch REST API",src:n(30145).Z,width:"1009",height:"278"})),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"results.html")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>Elastic Flask</title>\n  </head>\n  <body>\n    <header>\n      <h1>Elasticsearch Client</h1>\n    </header>\n    <main>\n      <p>Enter a search request:</p>\n      <form method="POST">\n        <div><input value="{{query}}" name="query"></input></div>\n        <h3>Search Results</h3>\n        <ol>\n          {%for i in range(0, len)%}\n              <li>{{result[i][\'_source\'][\'title\']}}</li>\n          {%endfor%}\n        </ol>\n      </form>\n    </main>\n  </body>\n</html>\n')))}u.isMDXComponent=!0},20089:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Opensearch_Rest_API_01-96429c082519af574aa19900caac2086.png"},30145:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Opensearch_Rest_API_02-13be1e22ae12cb8fbddeb9ae6f9e2de2.png"},24552:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5f44d483789c3ce79f05418f930f5cd2.jpg"}}]);