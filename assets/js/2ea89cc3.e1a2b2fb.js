"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[92821],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(a),g=l,k=s["".concat(d,".").concat(g)]||s[g]||u[g]||r;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function g(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},57368:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={sidebar_position:4480,slug:"2023-04-11",title:"Locally Linear Embedding (LLE)",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Improve Data Quality by discarding non-correlating, noisy Dimensions"},i=void 0,o={unversionedId:"IoT-and-Machine-Learning/ML/2023-04-11-locally-linear-embedding/index",id:"IoT-and-Machine-Learning/ML/2023-04-11-locally-linear-embedding/index",title:"Locally Linear Embedding (LLE)",description:"Improve Data Quality by discarding non-correlating, noisy Dimensions",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-04-11-locally-linear-embedding/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-04-11-locally-linear-embedding",slug:"/IoT-and-Machine-Learning/ML/2023-04-11-locally-linear-embedding/2023-04-11",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-04-11-locally-linear-embedding/2023-04-11",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-04-11-locally-linear-embedding/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"}],version:"current",sidebarPosition:4480,frontMatter:{sidebar_position:4480,slug:"2023-04-11",title:"Locally Linear Embedding (LLE)",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Improve Data Quality by discarding non-correlating, noisy Dimensions"},sidebar:"tutorialSidebar",previous:{title:"Machine Learning",permalink:"/docs/category/machine-learning"},next:{title:"Principal Component Analysis (PCA)",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-04-09-principal-component-analysis/2023-04-09"}},d={},p=[{value:"Dataset",id:"dataset",level:2},{value:"Locally Linear Embedding",id:"locally-linear-embedding",level:2},{value:"2-Dimensional Plot",id:"2-dimensional-plot",level:3},{value:"3-Dimensional Plot",id:"3-dimensional-plot",level:3}],m={toc:p};function u(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Victoria Harbour, Hongkong",src:a(20773).Z,width:"2385",height:"858"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#dimensionality-reduction"},"Dimensionality Reduction"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#dataset"},"Dataset")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#locally-linear-embedding"},"Locally Linear Embedding"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#2-dimensional-plot"},"2-Dimensional Plot")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#3-dimensional-plot"},"3-Dimensional Plot"))))))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/local-linear-embedding"},"Github Repository")),(0,l.kt)("h1",{id:"dimensionality-reduction"},"Dimensionality Reduction"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/modules/manifold.html"},"Manifold learning")," is an approach to non-linear dimensionality reduction. Algorithms for this task are based on the idea that the dimensionality of many data sets is only artificially high."),(0,l.kt)("p",null,"High-dimensional datasets can be very difficult to visualize. While data in two or three dimensions can be plotted to show the inherent structure of the data, equivalent high-dimensional plots are much less intuitive. To aid visualization of the structure of a dataset, the dimension must be reduced in some way."),(0,l.kt)("p",null,"The simplest way to accomplish this dimensionality reduction is by taking a random projection of the data. Though this allows some degree of visualization of the data structure, the randomness of the choice leaves much to be desired. In a random projection, it is likely that the more interesting structure within the data will be lost."),(0,l.kt)("p",null,"To address this concern, a number of supervised and unsupervised linear dimensionality reduction frameworks have been designed, such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-04-09-principal-component-analysis/2023-04-09"},"Principal Component Analysis (PCA)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-04-11-locally-linear-embedding/2023-04-11"},"Locally Linear Embedding (LLE)"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://cs.nyu.edu/~roweis/lle/papers/lleintro.pdf"},"An Introduction to Locally Linear Embedding"),": Many problems in information processing involve some form of dimensionality reduction. Here we describe locally linear embedding (LLE), an unsupervised learning algorithm that computes low dimensional, neighborhood preserving embeddings of high dimensional data. LLE attempts to discover nonlinear structure in high dimensional data by exploiting the local symmetries of linear reconstructions.\n",(0,l.kt)("inlineCode",{parentName:"p"},"Lawrence K. Saul"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Sam T. Roweis"))),(0,l.kt)("h2",{id:"dataset"},"Dataset"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://www.researchgate.net/publication/243766527_A_multivariate_study_of_variation_in_two_species_of_rock_crab_of_genus_Leptograpsus"},"A multivariate study of variation in two species of rock crab of genus Leptograpsus"),": A multivariate approach has been used to study morphological variation in the blue and orange-form species of rock crab of the genus Leptograpsus. Objective criteria for the identification of the two species are established, based on the following characters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SP"),": Species (Blue or Orange)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Sex"),": Male or Female"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FL"),": Width of the frontal region of the carapace; "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"RW"),": Width of the posterior region of the carapace (rear width); "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CL"),": Length of the carapace along the midline;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CW"),": Maximum width of the carapace; "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"BD"),": and the depth of the body;")),(0,l.kt)("p",null,"The dataset can be ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tercen/crabs_dataset"},"downloaded from Github"),"."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(see introduction in: ",(0,l.kt)("a",{parentName:"em",href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-04-09-principal-component-analysis/2023-04-09"},"Principal Component Analysis PCA"),")")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"raw_data = pd.read_csv('data/A_multivariate_study_of_variation_in_two_species_of_rock_crab_of_genus_Leptograpsus.csv')\n\ndata = raw_data.rename(columns={\n    'sp' : 'Species',\n    'sex' : 'Sex',\n    'index' : 'Index',\n    'FL' : 'Frontal Lobe',\n    'RW' : 'Rear Width',\n    'CL' : 'Carapace Midline',\n    'CW' : 'Maximum Width',\n    'BD' : 'Body Depth'\n})\n\ndata['Species'] = data['Species'].map({'B':'Blue', 'O':'Orange'})\ndata['Sex'] = data['Sex'].map({'M':'Male', 'F':'Female'})\n\ndata.head(5)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Species"),(0,l.kt)("th",{parentName:"tr",align:null},"Sex"),(0,l.kt)("th",{parentName:"tr",align:null},"Index"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontal Lobe"),(0,l.kt)("th",{parentName:"tr",align:null},"Rear Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Carapace Midline"),(0,l.kt)("th",{parentName:"tr",align:null},"Maximum Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Body Depth"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"8.1"),(0,l.kt)("td",{parentName:"tr",align:null},"6.7"),(0,l.kt)("td",{parentName:"tr",align:null},"16.1"),(0,l.kt)("td",{parentName:"tr",align:null},"19.0"),(0,l.kt)("td",{parentName:"tr",align:null},"7.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"8.8"),(0,l.kt)("td",{parentName:"tr",align:null},"7.7"),(0,l.kt)("td",{parentName:"tr",align:null},"18.1"),(0,l.kt)("td",{parentName:"tr",align:null},"20.8"),(0,l.kt)("td",{parentName:"tr",align:null},"7.4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"9.2"),(0,l.kt)("td",{parentName:"tr",align:null},"7.8"),(0,l.kt)("td",{parentName:"tr",align:null},"19.0"),(0,l.kt)("td",{parentName:"tr",align:null},"22.4"),(0,l.kt)("td",{parentName:"tr",align:null},"7.7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"9.6"),(0,l.kt)("td",{parentName:"tr",align:null},"7.9"),(0,l.kt)("td",{parentName:"tr",align:null},"20.1"),(0,l.kt)("td",{parentName:"tr",align:null},"23.1"),(0,l.kt)("td",{parentName:"tr",align:null},"8.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"9.8"),(0,l.kt)("td",{parentName:"tr",align:null},"8.0"),(0,l.kt)("td",{parentName:"tr",align:null},"20.3"),(0,l.kt)("td",{parentName:"tr",align:null},"23.0"),(0,l.kt)("td",{parentName:"tr",align:null},"8.2")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# generate a class variable for all 4 classes\ndata['Class'] = data.Species + data.Sex\n\nprint(data['Class'].value_counts())\ndata.head(1)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"BlueMale: ",(0,l.kt)("inlineCode",{parentName:"li"},"50")),(0,l.kt)("li",{parentName:"ul"},"BlueFemale: ",(0,l.kt)("inlineCode",{parentName:"li"},"50")),(0,l.kt)("li",{parentName:"ul"},"OrangeMale: ",(0,l.kt)("inlineCode",{parentName:"li"},"50")),(0,l.kt)("li",{parentName:"ul"},"OrangeFemale: ",(0,l.kt)("inlineCode",{parentName:"li"},"50"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"species"),(0,l.kt)("th",{parentName:"tr",align:null},"sex"),(0,l.kt)("th",{parentName:"tr",align:null},"index"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontal Lobe"),(0,l.kt)("th",{parentName:"tr",align:null},"Rear Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Carapace Midline"),(0,l.kt)("th",{parentName:"tr",align:null},"Maximum Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Body Depth"),(0,l.kt)("th",{parentName:"tr",align:null},"Class"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"8.1"),(0,l.kt)("td",{parentName:"tr",align:null},"6.7"),(0,l.kt)("td",{parentName:"tr",align:null},"16.1"),(0,l.kt)("td",{parentName:"tr",align:null},"19.0"),(0,l.kt)("td",{parentName:"tr",align:null},"7.0"),(0,l.kt)("td",{parentName:"tr",align:null},"BlueMale")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"data_columns = ['Frontal Lobe', 'Rear Width', 'Carapace Midline', 'Maximum Width', 'Body Depth']\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# normalizing each feature to a given range to make them compareable\ndata_norm = data.copy()\ndata_norm[data_columns] = MinMaxScaler().fit_transform(data[data_columns])\n\ndata_norm.head()\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"species"),(0,l.kt)("th",{parentName:"tr",align:null},"sex"),(0,l.kt)("th",{parentName:"tr",align:null},"index"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontal Lobe"),(0,l.kt)("th",{parentName:"tr",align:null},"Rear Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Carapace Midline"),(0,l.kt)("th",{parentName:"tr",align:null},"Maximum Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Body Depth"),(0,l.kt)("th",{parentName:"tr",align:null},"Class"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"0.056604"),(0,l.kt)("td",{parentName:"tr",align:null},"0.014599"),(0,l.kt)("td",{parentName:"tr",align:null},"0.042553"),(0,l.kt)("td",{parentName:"tr",align:null},"0.050667"),(0,l.kt)("td",{parentName:"tr",align:null},"0.058065"),(0,l.kt)("td",{parentName:"tr",align:null},"BlueMale")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"0.100629"),(0,l.kt)("td",{parentName:"tr",align:null},"0.087591"),(0,l.kt)("td",{parentName:"tr",align:null},"0.103343"),(0,l.kt)("td",{parentName:"tr",align:null},"0.098667"),(0,l.kt)("td",{parentName:"tr",align:null},"0.083871"),(0,l.kt)("td",{parentName:"tr",align:null},"BlueMale")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"0.125786"),(0,l.kt)("td",{parentName:"tr",align:null},"0.094891"),(0,l.kt)("td",{parentName:"tr",align:null},"0.130699"),(0,l.kt)("td",{parentName:"tr",align:null},"0.141333"),(0,l.kt)("td",{parentName:"tr",align:null},"0.103226"),(0,l.kt)("td",{parentName:"tr",align:null},"BlueMale")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"0.150943"),(0,l.kt)("td",{parentName:"tr",align:null},"0.102190"),(0,l.kt)("td",{parentName:"tr",align:null},"0.164134"),(0,l.kt)("td",{parentName:"tr",align:null},"0.160000"),(0,l.kt)("td",{parentName:"tr",align:null},"0.135484"),(0,l.kt)("td",{parentName:"tr",align:null},"BlueMale")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"0.163522"),(0,l.kt)("td",{parentName:"tr",align:null},"0.109489"),(0,l.kt)("td",{parentName:"tr",align:null},"0.170213"),(0,l.kt)("td",{parentName:"tr",align:null},"0.157333"),(0,l.kt)("td",{parentName:"tr",align:null},"0.135484"),(0,l.kt)("td",{parentName:"tr",align:null},"BlueMale")))),(0,l.kt)("h2",{id:"locally-linear-embedding"},"Locally Linear Embedding"),(0,l.kt)("p",null,"The standard ",(0,l.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/modules/manifold.html#locally-linear-embedding"},"LLE algorithm")," has the following stages:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Nearest Neighbors Search"),": The data is projected into a lower dimensional space while trying to preserve distances between neighbors."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Weight Matrix Construction"),": The weight matrix contains the information that preserves the reconstruction of the input data with fewer dimensions.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# number of components = data columns = 5\n# to reduce dimensionality we are going to discard 3\nno_components = 3\nno_neighbors = 15\nlle = LocallyLinearEmbedding(n_components = no_components, n_neighbors = no_neighbors)\n\ndata_lle = lle.fit_transform(data_norm[data_columns])\n\n# Note that the reconstruction error increases when adding dimensions\nprint('Reconstruction Error: ', lle.reconstruction_error_)\n# with no_components=3 I get:\n# Reconstruction Error:  1.5214133597467682e-05\n# with no_components=2:\n# Reconstruction Error:  2.1530288023162284e-06\n\n# data_lle contains 1 column for each component\n# we can add them to our normalized data set\ndata_norm[['LLE1', 'LLE2', 'LLE3']] = data_lle\n\ndata_norm.head()\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Species"),(0,l.kt)("th",{parentName:"tr",align:null},"Sex"),(0,l.kt)("th",{parentName:"tr",align:null},"Index"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontal Lobe"),(0,l.kt)("th",{parentName:"tr",align:null},"Rear Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Carapace Midline"),(0,l.kt)("th",{parentName:"tr",align:null},"Maximum Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Body Depth"),(0,l.kt)("th",{parentName:"tr",align:null},"Class"),(0,l.kt)("th",{parentName:"tr",align:null},"LLE1"),(0,l.kt)("th",{parentName:"tr",align:null},"LLE2"),(0,l.kt)("th",{parentName:"tr",align:null},"LLE3"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"0.056604"),(0,l.kt)("td",{parentName:"tr",align:null},"0.014599"),(0,l.kt)("td",{parentName:"tr",align:null},"0.042553"),(0,l.kt)("td",{parentName:"tr",align:null},"0.050667"),(0,l.kt)("td",{parentName:"tr",align:null},"0.058065"),(0,l.kt)("td",{parentName:"tr",align:null},"BlueMale"),(0,l.kt)("td",{parentName:"tr",align:null},"-0.145449"),(0,l.kt)("td",{parentName:"tr",align:null},"0.060973"),(0,l.kt)("td",{parentName:"tr",align:null},"0.092920")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"0.100629"),(0,l.kt)("td",{parentName:"tr",align:null},"0.087591"),(0,l.kt)("td",{parentName:"tr",align:null},"0.103343"),(0,l.kt)("td",{parentName:"tr",align:null},"0.098667"),(0,l.kt)("td",{parentName:"tr",align:null},"0.083871"),(0,l.kt)("td",{parentName:"tr",align:null},"BlueMale"),(0,l.kt)("td",{parentName:"tr",align:null},"-0.133111"),(0,l.kt)("td",{parentName:"tr",align:null},"0.057664"),(0,l.kt)("td",{parentName:"tr",align:null},"0.059493")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"0.125786"),(0,l.kt)("td",{parentName:"tr",align:null},"0.094891"),(0,l.kt)("td",{parentName:"tr",align:null},"0.130699"),(0,l.kt)("td",{parentName:"tr",align:null},"0.141333"),(0,l.kt)("td",{parentName:"tr",align:null},"0.103226"),(0,l.kt)("td",{parentName:"tr",align:null},"BlueMale"),(0,l.kt)("td",{parentName:"tr",align:null},"-0.126506"),(0,l.kt)("td",{parentName:"tr",align:null},"0.053316"),(0,l.kt)("td",{parentName:"tr",align:null},"0.053484")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"0.150943"),(0,l.kt)("td",{parentName:"tr",align:null},"0.102190"),(0,l.kt)("td",{parentName:"tr",align:null},"0.164134"),(0,l.kt)("td",{parentName:"tr",align:null},"0.160000"),(0,l.kt)("td",{parentName:"tr",align:null},"0.135484"),(0,l.kt)("td",{parentName:"tr",align:null},"BlueMale"),(0,l.kt)("td",{parentName:"tr",align:null},"-0.118650"),(0,l.kt)("td",{parentName:"tr",align:null},"0.028331"),(0,l.kt)("td",{parentName:"tr",align:null},"0.059578")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"0.163522"),(0,l.kt)("td",{parentName:"tr",align:null},"0.109489"),(0,l.kt)("td",{parentName:"tr",align:null},"0.170213"),(0,l.kt)("td",{parentName:"tr",align:null},"0.157333"),(0,l.kt)("td",{parentName:"tr",align:null},"0.135484"),(0,l.kt)("td",{parentName:"tr",align:null},"BlueMale"),(0,l.kt)("td",{parentName:"tr",align:null},"-0.117088"),(0,l.kt)("td",{parentName:"tr",align:null},"0.022013"),(0,l.kt)("td",{parentName:"tr",align:null},"0.060005")))),(0,l.kt)("h3",{id:"2-dimensional-plot"},"2-Dimensional Plot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"fig = plt.figure(figsize=(10, 8))\nsns.scatterplot(data=data_norm, x='LLE1', y='LLE2', hue='Class')\n")),(0,l.kt)("p",null,"Already the 2d projection allows us to distinguish between the two species - Orange and Blue:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Local Linear Embedding",src:a(60918).Z,width:"866",height:"679"})),(0,l.kt)("h3",{id:"3-dimensional-plot"},"3-Dimensional Plot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class_colours = {\n    'BlueMale': '#0027c4', #blue\n    'BlueFemale': '#f18b0a', #orange\n    'OrangeMale': '#0af10a', # green\n    'OrangeFemale': '#ff1500', #red\n}\n\ncolours = data['Class'].apply(lambda x: class_colours[x])\n\nx=data_norm.LLE1\ny=data_norm.LLE2\nz=data_norm.LLE3\n\nfig = plt.figure(figsize=(10,10))\nax = fig.add_subplot(projection='3d')\n\nax.scatter(xs=x, ys=y, zs=z, s=50, c=colours)\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Local Linear Embedding",src:a(6550).Z,width:"794",height:"790"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"plot = px.scatter_3d(\n    data_norm,\n    x = 'LLE1',\n    y = 'LLE2',\n    z='LLE3',\n    color='Class')\n\nplot.show()\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Local Linear Embedding",src:a(85075).Z,width:"1519",height:"452"})))}u.isMDXComponent=!0},60918:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Local_Linear_Embedding_01-017de33597d8804c21f863744eb53d54.png"},6550:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Local_Linear_Embedding_02-5c77886e89e6a5afed5b4d401b8027cb.png"},85075:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Local_Linear_Embedding_03-3c9573668d8424c741a330d80848c8b5.png"},20773:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-936fe81d44bf1beb4563551aafeb5788.jpg"}}]);