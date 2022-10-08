"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[11269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:9040,slug:"2022-10-06",title:"Python - Minify Text for Elasticsearch",authors:"mpolinowski",tags:["Python"]},i=void 0,s={unversionedId:"Development/Python/2022-10-06-python-minify-text/index",id:"Development/Python/2022-10-06-python-minify-text/index",title:"Python - Minify Text for Elasticsearch",description:"Sham Sui Po, Hong Kong",source:"@site/docs/Development/Python/2022-10-06-python-minify-text/index.md",sourceDirName:"Development/Python/2022-10-06-python-minify-text",slug:"/Development/Python/2022-10-06-python-minify-text/2022-10-06",permalink:"/docs/Development/Python/2022-10-06-python-minify-text/2022-10-06",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Python/2022-10-06-python-minify-text/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:9040,frontMatter:{sidebar_position:9040,slug:"2022-10-06",title:"Python - Minify Text for Elasticsearch",authors:"mpolinowski",tags:["Python"]},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/category/python"},next:{title:"Python - Text Processing with",permalink:"/docs/Development/Python/2022-10-05-python-text-processing/2022-10-05"}},l={},p=[{value:"Get Text",id:"get-text",level:2},{value:"Elasticsearch",id:"elasticsearch",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sham Sui Po, Hong Kong",src:n(67016).Z,width:"1500",height:"548"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#get-text"},"Get Text")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#elasticsearch"},"Elasticsearch"))),(0,r.kt)("p",null,"I looked into retrieving text from webpages ",(0,r.kt)("a",{parentName:"p",href:"/docs/Development/Python/2022-06-27-python-web-scraping/2022-06-27"},"using Beautiful Soup"),". And continued with looking into ",(0,r.kt)("a",{parentName:"p",href:"/docs/Development/Python/2022-10-05-python-text-processing/2022-10-05"},"processing text"),". Now I want to bring those parts together and use Python to create an Elasticsearch index file. These files can then be used with Kibana to add the scraped web page to Elasticsearch."),(0,r.kt)("h2",{id:"get-text"},"Get Text"),(0,r.kt)("p",null,"Let's start by retrieving the text we need using the following to Python libraries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install requests bs4\n")),(0,r.kt)("p",null,"The web page I am working with uses Gatsby.js which wraps every article into a ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"id=gatsby-focus-wrapper"),". So use ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," to download a pages content and use ",(0,r.kt)("inlineCode",{parentName:"p"},"bs4"),"'s HTML parser to extract the text from inside this wrapper. As the index file will be in JSON format we also have to clean up everything that would break it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import requests\nfrom bs4 import BeautifulSoup\n\nurl = 'https://wiki.instar.com/de/Aussenkameras/IN-9408_WQHD/'\n\nresponse = requests.get(url)\nhtml = response.text\nsoup = BeautifulSoup(html, 'html.parser')\n\ncontent = soup.find('div', attrs={'id': 'gatsby-focus-wrapper'}).text\n# replace quotation marks\nreplaced_content = content.replace('\"', ' ')\nprint(content)\n")),(0,r.kt)("h2",{id:"elasticsearch"},"Elasticsearch"),(0,r.kt)("p",null,"The JSON object that I need looks like below - where the ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," extracted above would have to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"ARTICLE_BODY"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "ARTICLE_TITLE",\n    "series": "ARTICLE_SERIES",\n    "type": "ARTICLE_TYPE",\n    "description": "ARTICLE_BODY",\n    "sublink1": "ARTICLE_URL",\n    "chapter": "ARTICLE_CHAPTER",\n    "tags": "ARTICLE_TAGS",\n    "image": "ARTICLE_IMAGE",\n    "imagesquare": "ARTICLE_SQUAREIMAGE",\n    "short": "ARTICLE_SHORT",\n    "abstract": "ARTICLE_ABSTRACT"\n}\n')),(0,r.kt)("p",null,"We can create this file by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'json_template = """{\n    "title": "ARTICLE_TITLE",\n    "series": "ARTICLE_SERIES",\n    "type": "ARTICLE_TYPE",\n    "description": "ARTICLE_BODY",\n    "sublink1": "ARTICLE_URL",\n    "chapter": "ARTICLE_CHAPTER",\n    "tags": "ARTICLE_TAGS",\n    "image": "ARTICLE_IMAGE",\n    "imagesquare": "ARTICLE_SQUAREIMAGE",\n    "short": "ARTICLE_SHORT",\n    "abstract": "ARTICLE_ABSTRACT"\n}"""\n\n\nwith open(\'article.json\', \'w\') as file:\n    file.write(json_template)\n')),(0,r.kt)("p",null,"And bringing this together looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import requests\nimport re\nfrom bs4 import BeautifulSoup\n\nurl = \'https://wiki.instar.com/en/Outdoor_Cameras/IN-9408_WQHD/\'\ntitle = \'IN-9408 WQHD :: Product Overview\'\ncamera_series = \'["1440p Cameras", "Outdoor Cameras"]\'\narticle_type = \'User Manual\'\nlink = \'/Outdoor_Cameras/IN-9408_WQHD/\'\nchapter = \'Outdoor Cameras\'\ntags = \'["IN-9408 WQHD", "INSTAR", "products", "1440p series", "Indoor Cameras", "IP camera", "web cam", "overview"]\'\nimage = \'/en/images/Search/P_SearchThumb_IN-9408HD.webp\'\nimagesquare = \'/en/images/Search/TOC_Icons/Wiki_Tiles_P-IN-9408HD_white.webp\'\nshort = \'IN-9408 WQHD - Product Overview\'\nabstract = \'The IN-9408 WQHD with a SONY STARVIS Images Sensor and a 5 megapixel video resolution.\'\n\nresponse = requests.get(url)\nhtml = response.text\nsoup = BeautifulSoup(html, \'html.parser\')\n\ncontent = soup.find(\'div\', attrs={\'id\': \'gatsby-focus-wrapper\'}).text\n# replace quotation marks\nreplaced_content = content.replace(\'"\', \' \')\n# strip multiple-space character\nsingle_space = re.sub(\'\\s+\',\' \',replaced_content)\n\n\njson_template = """{\n    "title": "ARTICLE_TITLE",\n    "series": ARTICLE_SERIES,\n    "type": "ARTICLE_TYPE",\n    "description": "ARTICLE_BODY",\n    "sublink1": "ARTICLE_URL",\n    "chapter": "ARTICLE_CHAPTER",\n    "tags": ARTICLE_TAGS,\n    "image": "ARTICLE_IMAGE",\n    "imagesquare": "ARTICLE_SQUAREIMAGE",\n    "short": "ARTICLE_SHORT",\n    "abstract": "ARTICLE_ABSTRACT"\n}"""\n\n\nadd_body = json_template.replace(\'ARTICLE_BODY\', single_space)\nadd_title = add_body.replace(\'ARTICLE_TITLE\', title)\nadd_series = add_title.replace(\'ARTICLE_SERIES\', camera_series)\nadd_type = add_series.replace(\'ARTICLE_TYPE\', article_type)\nadd_url = add_type.replace(\'ARTICLE_URL\', link)\nadd_chapter = add_url.replace(\'ARTICLE_CHAPTER\', chapter)\nadd_tags = add_chapter.replace(\'ARTICLE_TAGS\', tags)\nadd_image = add_tags.replace(\'ARTICLE_IMAGE\', image)\nadd_imagesquare = add_image.replace(\'ARTICLE_SQUAREIMAGE\', imagesquare)\nadd_short = add_imagesquare.replace(\'ARTICLE_SHORT\', short)\nadd_abstract = add_short.replace(\'ARTICLE_ABSTRACT\', abstract)\n\n\nwith open(\'elasticsearch/article.json\', \'w\') as file:\n    file.write(add_abstract)\n')))}d.isMDXComponent=!0},67016:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5f44d483789c3ce79f05418f930f5cd2.jpg"}}]);