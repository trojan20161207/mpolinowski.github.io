"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[5362],{952887:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var a=r(785893),s=r(603905);const t={sidebar_position:8050,slug:"2021-03-27",title:"Elasticsearch 7 Aggregations",authors:"mpolinowski",tags:["LINUX","Elasticsearch"]},i=void 0,o={id:"DevOps/Elasticsearch/2021-03-27-elasticsearch7-aggregations/index",title:"Elasticsearch 7 Aggregations",description:"Abashiri, Japan",source:"@site/docs/DevOps/Elasticsearch/2021-03-27-elasticsearch7-aggregations/index.md",sourceDirName:"DevOps/Elasticsearch/2021-03-27-elasticsearch7-aggregations",slug:"/DevOps/Elasticsearch/2021-03-27-elasticsearch7-aggregations/2021-03-27",permalink:"/docs/DevOps/Elasticsearch/2021-03-27-elasticsearch7-aggregations/2021-03-27",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Elasticsearch/2021-03-27-elasticsearch7-aggregations/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Elasticsearch",permalink:"/docs/tags/elasticsearch"}],version:"current",sidebarPosition:8050,frontMatter:{sidebar_position:8050,slug:"2021-03-27",title:"Elasticsearch 7 Aggregations",authors:"mpolinowski",tags:["LINUX","Elasticsearch"]},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch 7 Timeseries",permalink:"/docs/DevOps/Elasticsearch/2021-03-28-elasticsearch7-timeseries/2021-03-28"},next:{title:"Elasticsearch 7 to log Linux System Events",permalink:"/docs/DevOps/Elasticsearch/2021-03-26-elasticsearch7-for-syslog-messages/2021-03-26"}},c={},l=[{value:"Run an Aggregation",id:"run-an-aggregation",level:2},{value:"TV Ratings Example",id:"tv-ratings-example",level:3},{value:"What is the Rating Distribution for Season 01 ?",id:"what-is-the-rating-distribution-for-season-01-",level:4},{value:"How many 8 Star Ratings did Season 01 get ?",id:"how-many-8-star-ratings-did-season-01-get-",level:4},{value:"What is the Average Rating of all Episodes in Season 01",id:"what-is-the-average-rating-of-all-episodes-in-season-01",level:4},{value:"Display Ratings by 1.0 Intervals",id:"display-ratings-by-10-intervals",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.ah)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Abashiri, Japan",src:r(585285).Z+"",width:"1500",height:"501"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#run-an-aggregation",children:"Run an Aggregation"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#tv-ratings-example",children:"TV Ratings Example"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#what-is-the-rating-distribution-for-season-01-",children:"What is the Rating Distribution for Season 01 ?"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#how-many-8-star-ratings-did-season-01-get-",children:"How many 8 Star Ratings did Season 01 get ?"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#what-is-the-average-rating-of-all-episodes-in-season-01",children:"What is the Average Rating of all Episodes in Season 01"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#display-ratings-by-10-intervals",children:"Display Ratings by 1.0 Intervals"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"An aggregation summarizes your data as metrics, statistics, or other analytics. Aggregations help you answer questions like:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"What\u2019s the average load time for my website?"}),"\n",(0,a.jsx)(n.li,{children:"Who are my most valuable customers based on transaction volume?"}),"\n",(0,a.jsx)(n.li,{children:"What would be considered a large file on my network?"}),"\n",(0,a.jsx)(n.li,{children:"How many products are in each product category?"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Elasticsearch organizes aggregations into three categories:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics.html",children:"Metric"})," aggregations that calculate metrics, such as a sum or average, from field values."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket.html",children:"Bucket"})," aggregations that group documents into buckets, also called bins, based on field values, ranges, or other criteria."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-pipeline.html",children:"Pipeline"})," aggregations that take input from other aggregations instead of documents or fields."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"run-an-aggregation",children:"Run an Aggregation"}),"\n",(0,a.jsxs)(n.p,{children:["You can run aggregations as part of a search by specifying the search API's aggs parameter. The following search runs a terms aggregation on ",(0,a.jsx)(n.code,{children:"my-field"})," - e.g. product rating:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'GET /my-index/_search\r\n{\r\n  "aggs": {\r\n    "my-agg-name": {\r\n      "terms": {\r\n        "field": "rating"\r\n      }\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Aggregation results are in the response\u2019s aggregations object:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'"aggregations": {\r\n    "my-agg-name": {                           \r\n      "doc_count_error_upper_bound": 0,\r\n      "sum_other_doc_count": 0,\r\n      "buckets": []\r\n    }\r\n  }\n'})}),"\n",(0,a.jsx)(n.p,{children:"You can also filter your results. For example, what is the average rating for a single product:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'curl -XGET \'127.0.0.1:9200/ratings/_search?size=0&pretty\' -d\r\n\'{\r\n  "query": {\r\n    "match": {\r\n      "title": "My Product Title"\r\n    }\r\n  },\r\n  "aggs": {\r\n    "my-agg-name": {\r\n      "terms": {\r\n        "field": "rating"\r\n      }\r\n    }\r\n  }\r\n}\'\n'})}),"\n",(0,a.jsx)(n.h3,{id:"tv-ratings-example",children:"TV Ratings Example"}),"\n",(0,a.jsxs)(n.p,{children:["As an example I am going to use my ",(0,a.jsx)(n.a,{href:"/docs/DevOps/Elasticsearch/2021-03-20-elasticsearch-7-refresher/2021-03-20#relationships",children:"The Expanse TV Series Index"})," that has a ",(0,a.jsx)(n.code,{children:"imdb_rating"})," field that I can run an aggregation query against. There we joint a couple of episodes that all belonged to season 01 of this show and we were able to query all of them with:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'GET /the-expanse/_search\r\n{\r\n  "query": {\r\n    "has_parent": {\r\n      "parent_type": "season",\r\n  \t  "query": {\r\n  \t\t  "match": {\r\n  \t\t\t  "title": "Season 01"\r\n  \t\t  }\r\n  \t  }\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Elasticsearch 7 Aggregations",src:r(917928).Z+"",width:"1491",height:"711"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"Text fields are not optimised for operations that require per-document field data like aggregations and sorting, so these operations are disabled by default. Please use a keyword field instead. Alternatively, set fielddata=true on [imdb-rating] in order to load field data by uninverting the inverted index. Note that this can use significant memory."})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["I was receiving the error message above at first before I did not add mapping types to this index. Which meant that the ",(0,a.jsx)(n.code,{children:"imdb-rating"})," field was mapped as text. I fixed this in the original article linked above and was now able to run the aggregation:"]}),"\n",(0,a.jsx)(n.h4,{id:"what-is-the-rating-distribution-for-season-01-",children:"What is the Rating Distribution for Season 01 ?"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'curl -H "Content-Type: application/json" -XGET \'localhost:9200/the-expanse/_search?size=0&pretty\' -d\'\r\n{\r\n  "query": {\r\n    "has_parent": {\r\n      "parent_type": "season",\r\n  \t  "query": {\r\n  \t\t  "match": {\r\n  \t\t\t  "title": "Season 01"\r\n  \t\t  }\r\n  \t  }\r\n    }\r\n  },\r\n  "aggs": {\r\n    "imdb-ratings": {\r\n      "terms": {\r\n        "field": "imdb-rating"\r\n      }\r\n    }\r\n  }\r\n}\'\n'})}),"\n",(0,a.jsxs)(n.p,{children:["I set the ",(0,a.jsx)(n.code,{children:"imdb_rating"})," type to ",(0,a.jsx)(n.code,{children:"float"})," which gave me those results:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'"aggregations" : {\r\n    "imdb-ratings" : {\r\n      "doc_count_error_upper_bound" : 0,\r\n      "sum_other_doc_count" : 0,\r\n      "buckets" : [\r\n        {\r\n          "key" : 8.699999809265137,\r\n          "doc_count" : 4\r\n        },\r\n        {\r\n          "key" : 7.699999809265137,\r\n          "doc_count" : 2\r\n        },\r\n        {\r\n          "key" : 8.0,\r\n          "doc_count" : 2\r\n        },\r\n        {\r\n          "key" : 7.800000190734863,\r\n          "doc_count" : 1\r\n        },\r\n        {\r\n          "key" : 7.900000095367432,\r\n          "doc_count" : 1\r\n        }\r\n      ]\r\n    }\r\n  }\n'})}),"\n",(0,a.jsxs)(n.p,{children:["It is obviously better to use ",(0,a.jsx)(n.code,{children:'"type": "integer"'})," (as an alternative see ",(0,a.jsx)(n.a,{href:"#display-ratings-by-10-intervals",children:"Histograms"})," below!) for the ",(0,a.jsx)(n.code,{children:"imdb_rating"})," which rounds things up to 6 times ",(0,a.jsx)(n.strong,{children:"8 Star"})," and 4 times ",(0,a.jsx)(n.strong,{children:"7 Star"})," rating for ",(0,a.jsx)(n.strong,{children:"Season 01"})," of the expanse:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'"aggregations" : {\r\n    "average-rating" : {\r\n      "doc_count_error_upper_bound" : 0,\r\n      "sum_other_doc_count" : 0,\r\n      "buckets" : [\r\n        {\r\n          "key" : 8,\r\n          "doc_count" : 6\r\n        },\r\n        {\r\n          "key" : 7,\r\n          "doc_count" : 4\r\n        }\r\n      ]\r\n    }\r\n  }\n'})}),"\n",(0,a.jsx)(n.h4,{id:"how-many-8-star-ratings-did-season-01-get-",children:"How many 8 Star Ratings did Season 01 get ?"}),"\n",(0,a.jsxs)(n.p,{children:["This time we just need to filter for ",(0,a.jsx)(n.code,{children:"imdb-rating"}),"'s with an integer value of ",(0,a.jsx)(n.code,{children:"8"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'curl -H "Content-Type: application/json" -XGET \'localhost:9200/the-expanse/_search?size=0&pretty\' -d\'\r\n{\r\n  "query": {\r\n    "match": {\r\n      "imdb-rating": 8\r\n    }\r\n  },\r\n  "aggs": {\r\n    "imdb-ratings": {\r\n      "terms": {\r\n        "field": "imdb-rating"\r\n      }\r\n    }\r\n  }\r\n}\'\n'})}),"\n",(0,a.jsxs)(n.p,{children:["And we will get the expected result - 6 episodes of season 01 of The Expanse had a rounded up IMDB rating of ",(0,a.jsx)(n.code,{children:"8"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'"aggregations" : {\r\n    "imdb-ratings" : {\r\n      "doc_count_error_upper_bound" : 0,\r\n      "sum_other_doc_count" : 0,\r\n      "buckets" : [\r\n        {\r\n          "key" : 8,\r\n          "doc_count" : 6\r\n        }\r\n      ]\r\n    }\r\n  }\n'})}),"\n",(0,a.jsx)(n.h4,{id:"what-is-the-average-rating-of-all-episodes-in-season-01",children:"What is the Average Rating of all Episodes in Season 01"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'curl -H "Content-Type: application/json" -XGET \'localhost:9200/the-expanse/_search?size=0&pretty\' -d\'\r\n{\r\n  "query": {\r\n    "has_parent": {\r\n      "parent_type": "season",\r\n  \t  "query": {\r\n  \t\t  "match": {\r\n  \t\t\t  "title": "Season 01"\r\n  \t\t  }\r\n  \t  }\r\n    }\r\n  },\r\n  "aggs": {\r\n    "average-ratings": {\r\n      "avg": {\r\n        "field": "imdb-rating"\r\n      }\r\n    }\r\n  }\r\n}\'\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The average rating for season 01 of The Expanse is ",(0,a.jsx)(n.code,{children:"7.6"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'"aggregations" : {\r\n    "average-ratings" : {\r\n      "value" : 7.6\r\n    }\r\n  }\n'})}),"\n",(0,a.jsx)(n.h4,{id:"display-ratings-by-10-intervals",children:"Display Ratings by 1.0 Intervals"}),"\n",(0,a.jsxs)(n.p,{children:["Before I ran into the issue that I set the type of my ratings to ",(0,a.jsx)(n.code,{children:"float"})," - instead of re-indexing the data with ",(0,a.jsx)(n.code,{children:"integer"})," ratings I could have also have used the ",(0,a.jsx)(n.strong,{children:"Histogram"})," function that Elasticsearch provides for aggregations:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'curl -H "Content-Type: application/json" -XGET \'localhost:9200/the-expanse/_search?size=0&pretty\' -d\'\r\n{\r\n  "aggs": {\r\n    "whole-ratings": {\r\n      "histogram": {\r\n        "field": "imdb-rating",\r\n        "interval": 1.0\r\n      }\r\n    }\r\n  }\r\n}\'\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Even with the ratings set to ",(0,a.jsx)(n.code,{children:"float"})," I now get my data nicely formatted and ready to be used for a histogram visualisation:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'"aggregations" : {\r\n    "whole-ratings" : {\r\n      "buckets" : [\r\n        {\r\n          "key" : 7.0,\r\n          "doc_count" : 4\r\n        },\r\n        {\r\n          "key" : 8.0,\r\n          "doc_count" : 6\r\n        }\r\n      ]\r\n    }\r\n  }\n'})})]})}function g(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>l});var a=r(667294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,s=function(e,n){if(null==e)return{};var r,a,s={},t=Object.keys(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=a.createContext({}),l=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var r=e.components,s=e.mdxType,t=e.originalType,c=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),h=l(r),u=s,p=h["".concat(c,".").concat(u)]||h[u]||d[u]||t;return r?a.createElement(p,i(i({ref:n},g),{},{components:r})):a.createElement(p,i({ref:n},g))}));g.displayName="MDXCreateElement"},917928:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/Elasticsearch_7_Aggregations_01-f0230eae4c98397314f2d4ed48c2aa66.png"},585285:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-88a2f99c39ff778b07d59e7597b9c8e7.jpg"}}]);