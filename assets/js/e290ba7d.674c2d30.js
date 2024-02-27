"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[51886],{692050:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=i(785893),t=i(603905);const r={sidebar_position:4575,slug:"2023-09-27",title:"MLOps with ZenML - SKLearn Classifier Pipeline",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Use ZenML to build a SciKit-Learn SVC Image Classifier Pipeline"},a="MLOps with ZenML",l={id:"IoT-and-Machine-Learning/AIOps/2023-09-27-zenml-intro-sklearn-pipeline/index",title:"MLOps with ZenML - SKLearn Classifier Pipeline",description:"Use ZenML to build a SciKit-Learn SVC Image Classifier Pipeline",source:"@site/docs/IoT-and-Machine-Learning/AIOps/2023-09-27-zenml-intro-sklearn-pipeline/index.md",sourceDirName:"IoT-and-Machine-Learning/AIOps/2023-09-27-zenml-intro-sklearn-pipeline",slug:"/IoT-and-Machine-Learning/AIOps/2023-09-27-zenml-intro-sklearn-pipeline/2023-09-27",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-09-27-zenml-intro-sklearn-pipeline/2023-09-27",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/AIOps/2023-09-27-zenml-intro-sklearn-pipeline/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"}],version:"current",sidebarPosition:4575,frontMatter:{sidebar_position:4575,slug:"2023-09-27",title:"MLOps with ZenML - SKLearn Classifier Pipeline",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Use ZenML to build a SciKit-Learn SVC Image Classifier Pipeline"},sidebar:"tutorialSidebar",previous:{title:"MLFlow with PyTorch Lighning in Docker",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2024-02-21-mlflow-pytorch-lightning-docker/2024-02-21"},next:{title:"Tensorflow Serving API",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-08-19-tensorflow-serving-api/2023-08-19"}},o={},c=[{value:"Installation",id:"installation",level:2},{value:"ZenML Server with Docker-Compose",id:"zenml-server-with-docker-compose",level:3},{value:"ZenML Client Python Package",id:"zenml-client-python-package",level:3},{value:"Run the Classifier using a ZenML Pipeline",id:"run-the-classifier-using-a-zenml-pipeline",level:2},{value:"Define Steps",id:"define-steps",level:3},{value:"Define Pipeline of Steps",id:"define-pipeline-of-steps",level:3},{value:"Initialize Pipeline",id:"initialize-pipeline",level:3},{value:"Visualize the Results",id:"visualize-the-results",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Guangzhou, China",src:i(194749).Z+"",width:"1061",height:"405"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#mlops-with-zenml",children:"MLOps with ZenML"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#installation",children:"Installation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#zenml-server-with-docker-compose",children:"ZenML Server with Docker-Compose"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#zenml-client-python-package",children:"ZenML Client Python Package"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#run-the-classifier-using-a-zenml-pipeline",children:"Run the Classifier using a ZenML Pipeline"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#define-steps",children:"Define Steps"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#define-pipeline-of-steps",children:"Define Pipeline of Steps"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#initialize-pipeline",children:"Initialize Pipeline"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#visualize-the-results",children:"Visualize the Results"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/mpolinowski/zenml-introduction",children:"Github Repository"})}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"mlops-with-zenml",children:"MLOps with ZenML"}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.h3,{id:"zenml-server-with-docker-compose",children:"ZenML Server with Docker-Compose"}),"\n",(0,s.jsx)(n.p,{children:"Docker compose offers a simpl way of managing multi-container setups on your local machine, which is the case for instance if you are looking to deploy the ZenML server container and connect it to a MySQL database service also running in a Docker container."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"docker-compose.yml"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'version: "3.9"\n\nservices:\n  mysql:\n    image: mysql:8.0\n    ports:\n      - 3306:3306\n    volumes:\n      - type: bind\n        source: ./data\n        target: /var/lib/mysql\n    environment:\n      - MYSQL_ROOT_PASSWORD=password\n  zenml:\n    image: zenmldocker/zenml-server\n    ports:\n      - "8888:8080"\n    environment:\n      - ZENML_STORE_URL=mysql://root:password@host.docker.internal/zenml\n      - ZENML_DEFAULT_USER_NAME=admin\n      - ZENML_DEFAULT_USER_PASSWORD=zenml\n    links:\n      - mysql\n    depends_on:\n      - mysql\n    extra_hosts:\n      - "host.docker.internal:host-gateway"\n    restart: on-failure\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": Changes I made to this file - compared to the ",(0,s.jsx)(n.a,{href:"https://docs.zenml.io/deploying-zenml/zenml-self-hosted/deploy-with-docker#zenml-server-with-docker-compose",children:"official documentation"})," are that I mounted a directory into the MySQL container to persist my data. And I had to change the outer server port ",(0,s.jsx)(n.code,{children:"8080"})," used by the ZenML Server to ",(0,s.jsx)(n.code,{children:"8888"})," to avoid a port conflict on my server."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker-compose -p zenml up  -d\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Verify that the ZenML interface is up and running by signing in - the dashboard will be hosted on your Servers IP on the outer port you defined in the compose file above (in my case port ",(0,s.jsx)(n.code,{children:"8888"}),"). The admin login is the default user name and password from the compose file:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"MLOps with ZenML",src:i(955038).Z+"",width:"938",height:"574"})}),"\n",(0,s.jsx)(n.h3,{id:"zenml-client-python-package",children:"ZenML Client Python Package"}),"\n",(0,s.jsx)(n.p,{children:"ZenML is a Python package that can be installed directly via pip:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install zenml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To be able to use ZenML with the ML Framework of our choice we need to install the corresponding ",(0,s.jsx)(n.strong,{children:"Integration"}),", e.g.:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"zenml integration install sklearn\n"})}),"\n",(0,s.jsx)(n.p,{children:"Which works a bit like a package manager checking if you have all packages installed ZenML lists as a requirement when when working with SKLearn models."}),"\n",(0,s.jsx)(n.p,{children:"You can connect your ZenML client using the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"zenml connect --url http://my-server:8888 --username admin --password zenml\n"})}),"\n",(0,s.jsx)(n.p,{children:"And initialize the project pipeline:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"rm -rf .zen\nzenml init\n"})}),"\n",(0,s.jsx)(n.h2,{id:"run-the-classifier-using-a-zenml-pipeline",children:"Run the Classifier using a ZenML Pipeline"}),"\n",(0,s.jsx)(n.h3,{id:"define-steps",children:"Define Steps"}),"\n",(0,s.jsxs)(n.p,{children:["Define the classifier in 3 ZenML Pipeline steps - ",(0,s.jsx)(n.strong,{children:"Data Loading"}),", ",(0,s.jsx)(n.strong,{children:"Model Training"})," and ",(0,s.jsx)(n.strong,{children:"Model Evaluation"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"import numpy as np\nfrom sklearn.base import ClassifierMixin\nfrom sklearn.svm import SVC\nfrom sklearn.datasets import load_digits\nfrom sklearn.model_selection import train_test_split\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from zenml import step\nfrom typing_extensions import Annotated\nfrom typing import Tuple\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'@step\ndef importer() -> Tuple[\n    Annotated[np.ndarray, "X_train"],\n    Annotated[np.ndarray, "X_test"],\n    Annotated[np.ndarray, "y_train"],\n    Annotated[np.ndarray, "y_test"],\n]:\n    """Load the digits dataset as numpy arrays."""\n    digits = load_digits()\n    data = digits.images.reshape((len(digits.images), -1))\n    X_train, X_test, y_train, y_test = train_test_split(\n        data, digits.target, test_size=0.2, shuffle=False\n    )\n    return X_train, X_test, y_train, y_test\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'@step\ndef svc_trainer(\n            X_train: np.ndarray,\n            y_train: np.ndarray\n        ) -> ClassifierMixin:\n    """Train the SVC classifier."""\n    model = SVC(gamma=0.001)\n    model.fit(X_train, y_train)\n\n    return model\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'@step\ndef evaluator(\n    X_test: np.ndarray,\n    y_test: np.ndarray,\n    model: ClassifierMixin\n) -> float:\n    """Calculate the model accuracy using the test set."""\n    score = model.score(X_test, y_test)\n    print(f"Test Accuracy: {score}")\n\n    return score\n'})}),"\n",(0,s.jsx)(n.h3,{id:"define-pipeline-of-steps",children:"Define Pipeline of Steps"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from zenml import pipeline\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'@pipeline\ndef digits_classifier():\n    """SVC digits classifier pipeline"""\n    X_train, X_test, y_train, y_test = importer()\n    model = svc_trainer(X_train, y_train=y_train)\n    evaluator(X_test=X_test, y_test=y_test, model=model)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"initialize-pipeline",children:"Initialize Pipeline"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"classifier = digits_classifier()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Initiating a new run for the pipeline: digits_classifier.\nRegistered new version: (version 1).\nExecuting a new run.\nUsing user: admin\nUsing stack: default\norchestrator: default\nartifact_store: default\nStep importer has started.\nStep importer has finished in 3.163s.\nStep svc_trainer has started.\nStep svc_trainer has finished in 0.644s.\nStep evaluator has started.\nTest Accuracy: 0.9583333333333334\nStep evaluator has finished in 0.582s.\nRun digits_classifier-2023_09_27-08_22_04_011726 has finished in 6.684s.\nDashboard URL: ",(0,s.jsx)(n.a,{href:"http://my-server:8888/workspaces/default/pipelines/32b2fbc0-765b-48d9-badd-75d60e1f46fa/runs/a9ffc4c6-5a2b-4560-bb8b-beab259b4bf1/dag32b2fbc0-765b-48d9-badd-75d60e1f46fa/runs/a9ffc4c6-5a2b-4560-bb8b-beab259b4bf1/dag",children:"http://my-server:8888/workspaces/default/pipelines/32b2fbc0-765b-48d9-badd-75d60e1f46fa/runs/a9ffc4c6-5a2b-4560-bb8b-beab259b4bf1/dag32b2fbc0-765b-48d9-badd-75d60e1f46fa/runs/a9ffc4c6-5a2b-4560-bb8b-beab259b4bf1/dag"})]}),"\n",(0,s.jsx)(n.h2,{id:"visualize-the-results",children:"Visualize the Results"}),"\n",(0,s.jsx)(n.p,{children:"Head over to the dashboard URL given above to see the visualization of the pipeline run:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"MLOps with ZenML",src:i(237635).Z+"",width:"1222",height:"848"})})]})}function p(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},603905:(e,n,i)=>{i.d(n,{ah:()=>c});var s=i(667294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,s)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,s,t=function(e,n){if(null==e)return{};var i,s,t={},r=Object.keys(e);for(s=0;s<r.length;s++)i=r[s],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)i=r[s],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var o=s.createContext({}),c=function(e){var n=s.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var i=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(i),m=t,f=h["".concat(o,".").concat(m)]||h[m]||d[m]||r;return i?s.createElement(f,a(a({ref:n},p),{},{components:i})):s.createElement(f,a({ref:n},p))}));p.displayName="MDXCreateElement"},955038:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/ZenML_MLFlow_01-69e1936cfdf9c8368d49aba7ebb431a1.png"},237635:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/ZenML_MLFlow_02-884a7b51fde67330b01aaf40f85e8df8.png"},194749:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-fe9bbb57ea8da08fea2f3fef2bf2515b.jpg"}}]);