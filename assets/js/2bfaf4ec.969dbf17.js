"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[9277],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),u=l,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97705:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(87462),l=(t(67294),t(3905));const r={sidebar_position:4670,slug:"2023-02-09",title:"MLflow 2.1 Introduction",authors:"mpolinowski",tags:["Python","Machine Learning","MLFlow"],description:"An open source platform for the machine learning lifecycle."},o=void 0,i={unversionedId:"IoT-and-Machine-Learning/AIOps/2023-02-09-mlflow-introduction/index",id:"IoT-and-Machine-Learning/AIOps/2023-02-09-mlflow-introduction/index",title:"MLflow 2.1 Introduction",description:"An open source platform for the machine learning lifecycle.",source:"@site/docs/IoT-and-Machine-Learning/AIOps/2023-02-09-mlflow-introduction/index.md",sourceDirName:"IoT-and-Machine-Learning/AIOps/2023-02-09-mlflow-introduction",slug:"/IoT-and-Machine-Learning/AIOps/2023-02-09-mlflow-introduction/2023-02-09",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-02-09-mlflow-introduction/2023-02-09",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/AIOps/2023-02-09-mlflow-introduction/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"MLFlow",permalink:"/docs/tags/ml-flow"}],version:"current",sidebarPosition:4670,frontMatter:{sidebar_position:4670,slug:"2023-02-09",title:"MLflow 2.1 Introduction",authors:"mpolinowski",tags:["Python","Machine Learning","MLFlow"],description:"An open source platform for the machine learning lifecycle."},sidebar:"tutorialSidebar",previous:{title:"AIOps",permalink:"/docs/category/aiops"},next:{title:"Apache Airflow Dynamic DAGs",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-02-06-apache-airflow-dynamic-dags/2023-02-06"}},s={},p=[{value:"Installing MLflow (PIP)",id:"installing-mlflow-pip",level:2},{value:"Downloading the Quickstart",id:"downloading-the-quickstart",level:3},{value:"Using the Tracking API",id:"using-the-tracking-api",level:2},{value:"Viewing the Tracking UI",id:"viewing-the-tracking-ui",level:3},{value:"Running MLflow Projects",id:"running-mlflow-projects",level:3},{value:"Saving and Serving Models",id:"saving-and-serving-models",level:2}],c={toc:p};function d(e){let{components:n,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"TST, HongKong",src:t(84521).Z,width:"1500",height:"512"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#installing-mlflow-pip"},"Installing MLflow (PIP)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#downloading-the-quickstart"},"Downloading the Quickstart")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#using-the-tracking-api"},"Using the Tracking API"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#viewing-the-tracking-ui"},"Viewing the Tracking UI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#running-mlflow-projects"},"Running MLflow Projects")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#saving-and-serving-models"},"Saving and Serving Models"))),(0,l.kt)("p",null,"MLflow is an open source platform to manage the ML lifecycle, including ",(0,l.kt)("strong",{parentName:"p"},"experimentation"),", ",(0,l.kt)("strong",{parentName:"p"},"reproducibility"),", ",(0,l.kt)("strong",{parentName:"p"},"deployment")," and a ",(0,l.kt)("strong",{parentName:"p"},"central model registry"),". MLflow currently offers four components:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"MLflow Tracking"),": Record and query experiments: code, data, config, and results"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"MLflow Projects"),": Package data science code in a format to reproduce runs on any platform"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"MLflow Models"),": Deploy machine learning models in diverse serving environments"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Model Registry"),": Store, annotate, discover, and manage models in a central repository ")),(0,l.kt)("h2",{id:"installing-mlflow-pip"},"Installing MLflow (PIP)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Install MLflow\npip install mlflow\n# Install MLflow with extra ML libraries and 3rd-party tools\npip install 'mlflow[extras]'\n# Install a lightweight version of MLflow\npip install mlflow-skinny\n")),(0,l.kt)("p",null,"To use certain MLflow modules and functionality (ML model persistence/inference, artifact storage options, etc), you may need to install extra libraries. For example, the mlflow.tensorflow module requires TensorFlow to be installed. See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mlflow/mlflow/blob/master/EXTRA_DEPENDENCIES.rst"},"Extra Dependencies")," for more details."),(0,l.kt)("p",null,"When using MLflow skinny, you may need to install additional dependencies if you wish to use certain MLflow modules and functionalities. For example, usage of SQL-based storage for MLflow Tracking (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},'mlflow.set_tracking_uri("sqlite:///my.db")'),") requires ",(0,l.kt)("inlineCode",{parentName:"p"},"pip install mlflow-skinny sqlalchemy alembic sqlparse. If using MLflow skinny for serving, a minimally functional installation would require "),"pip install mlflow-skinny flask`."),(0,l.kt)("p",null,"The MLFlow installation with extras contains the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Successfully installed Mako-1.2.4 PyJWT-2.6.0 PySocks-1.7.1 SecretStorage-3.3.3 adal-1.2.7 aiokafka-0.8.0 alembic-1.9.3 azure-common-1.1.28 azure-core-1.26.3 azure-graphrbac-0.61.1 azure-mgmt-authorization-3.0.0 azure-mgmt-containerregistry-10.0.0 azure-mgmt-core-1.3.2 azure-mgmt-keyvault-10.1.0 azure-mgmt-resource-21.2.1 azure-mgmt-storage-20.1.0 azureml-core-1.48.0 backports.tempfile-1.0 backports.weakref-1.0.post1 bcrypt-4.0.1 cryptography-38.0.4 databricks-cli-0.17.4 docker-6.0.1 fastapi-0.88.0 gevent-22.10.2 geventhttpclient-2.0.2 google-cloud-core-2.3.2 google-cloud-storage-2.7.0 google-crc32c-1.5.0 google-resumable-media-2.4.1 gunicorn-20.1.0 isodate-0.6.1 jeepney-0.8.0 jsonpickle-2.2.0 kafka-python-2.0.2 knack-0.10.1 kubernetes-25.3.0 llvmlite-0.39.1 mlflow-2.1.1 mlserver-1.3.0.dev2 mlserver-mlflow-1.3.0.dev2 msal-1.21.0 msal-extensions-1.0.0 msrest-0.7.1 msrestazure-0.6.4 ndg-httpsclient-0.5.1 numba-0.56.4 numpy-1.23.5 orjson-3.8.5 paramiko-2.12.0 pkginfo-1.9.6 portalocker-2.7.0 prometheus-flask-exporter-0.21.0 py-grpc-prometheus-0.7.0 pynacl-1.5.0 pyopenssl-22.1.0 pysftp-0.2.9 python-dotenv-0.21.1 python-rapidjson-1.9 querystring-parser-1.2.4 requests-auth-aws-sigv4-0.7 shap-0.41.0 slicer-0.0.7 sqlalchemy-1.4.46 sqlparse-0.4.3 starlette-exporter-0.15.1 tritonclient-2.30.0 uvloop-0.17.0 zope.event-4.6 zope.interface-5.5.2\n")),(0,l.kt)("h3",{id:"downloading-the-quickstart"},"Downloading the Quickstart"),(0,l.kt)("p",null,"Download the quickstart code by cloning MLflow via and ",(0,l.kt)("inlineCode",{parentName:"p"},"cd")," into the ",(0,l.kt)("inlineCode",{parentName:"p"},"examples")," subdirectory of the repository. We\u2019ll use this working directory for running the quickstart:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/mlflow/mlflow\ncd mlflow/examples\n")),(0,l.kt)("h2",{id:"using-the-tracking-api"},"Using the Tracking API"),(0,l.kt)("h3",{id:"viewing-the-tracking-ui"},"Viewing the Tracking UI"),(0,l.kt)("p",null,"By default, wherever you run your program, the tracking API writes data into files into a local ",(0,l.kt)("inlineCode",{parentName:"p"},"./mlruns")," directory. You can then run MLflow\u2019s Tracking UI on ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:5000"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mlflow ui\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python quickstart/mlflow_tracking.py\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"MLFlow Introduction",src:t(97993).Z,width:"1244",height:"500"})),(0,l.kt)("h3",{id:"running-mlflow-projects"},"Running MLflow Projects"),(0,l.kt)("p",null,"MLflow allows you to package code and its dependencies as a project that can be run in a reproducible fashion on other data. Each project includes its code and a MLproject file that defines its dependencies (for example, Python environment) as well as what commands can be run into the project and what arguments they take."),(0,l.kt)("p",null,"You can run existing projects with the ",(0,l.kt)("inlineCode",{parentName:"p"},"mlflow run")," command, which runs a project from either a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mlflow/mlflow/tree/master/examples/sklearn_elasticnet_wine"},"local directory"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mlflow run sklearn_elasticnet_wine -P alpha=0.5\n")),(0,l.kt)("p",null,"or a GitHub URI:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mlflow run https://github.com/mlflow/mlflow-example.git -P alpha=5.0\n")),(0,l.kt)("p",null,"There\u2019s a sample project in tutorial, including a ",(0,l.kt)("a",{parentName:"p",href:"https://mlflow.org/docs/latest/projects.html"},"MLproject")," file that specifies its dependencies. If you haven\u2019t configured a ",(0,l.kt)("a",{parentName:"p",href:"https://mlflow.org/docs/latest/tracking.html#tracking-server"},"tracking server")," yet, projects log their Tracking API data in the local mlruns directory so you can see these runs using mlflow ui."),(0,l.kt)("p",null,"If I try to run ",(0,l.kt)("inlineCode",{parentName:"p"},"mlflow run sklearn_elasticnet_wine -P alpha=0.5")," I get an error message ",(0,l.kt)("inlineCode",{parentName:"p"},"FileNotFoundError: [Errno 2] No such file or directory: 'pyenv'"),". It seems that MLFlow expected to find a virtual environment with dependencies installed. The directory contains a ",(0,l.kt)("inlineCode",{parentName:"p"},"python_env.yml")," file - I assume that all those dependencies would have been installed automatically if a virtEnv would have been present? Ah ok, there is the info:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"By default ",(0,l.kt)("inlineCode",{parentName:"p"},"mlflow run")," installs all dependencies using virtualenv. To run a project without using virtualenv, you can provide the ",(0,l.kt)("inlineCode",{parentName:"p"},"--env-manager=local")," option to ",(0,l.kt)("inlineCode",{parentName:"p"},"mlflow run"),". In this case, you must ensure that the necessary dependencies are already installed in your Python environment.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mlflow run --env-manager=local sklearn_elasticnet_wine -P alpha=0.5\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Elasticnet model (alpha=0.500000, l1_ratio=0.100000):\n  RMSE: 0.7460550348172179\n  MAE: 0.576381895873763\n  R2: 0.21136606570632266\n2023/02/09 13:32:42 INFO mlflow.projects: === Run (ID '886087767c9646b9824ec9315e63ac84') succeeded ===\n")),(0,l.kt)("p",null,"The run statistics will be stored in the ",(0,l.kt)("inlineCode",{parentName:"p"},"mlruns")," dir inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"examples")," dir that we started this training from. So we can open the UI from here ",(0,l.kt)("inlineCode",{parentName:"p"},"mlflow ui")," and should be able to see a new entry:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"MLFlow Introduction",src:t(8223).Z,width:"1246",height:"572"})),(0,l.kt)("p",null,"After the run MLFlow generated a a ",(0,l.kt)("inlineCode",{parentName:"p"},"requirements.txt")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"python_env.yml")," file - based on my local environment:"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"mlruns/0/886087767c9646b9824ec9315e63ac84/artifacts/model/python","_","env.yaml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"python: 3.10.9\nbuild_dependencies:\n- pip==22.3.1\n- setuptools==66.1.1\n- wheel==0.38.4\ndependencies:\n- -r requirements.txt\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"mlruns/0/886087767c9646b9824ec9315e63ac84/artifacts/model/requirements.txt")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mlflow<3,>=2.1\ncloudpickle==2.2.0\npsutil==5.9.4\nscikit-learn==1.2.0\ntyping-extensions==4.4.0\n")),(0,l.kt)("p",null,"And also saved the pickled artifacts from our training:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"MLFlow Introduction",src:t(5072).Z,width:"1239",height:"762"})),(0,l.kt)("h2",{id:"saving-and-serving-models"},"Saving and Serving Models"),(0,l.kt)("p",null,"MLflow includes a generic MLmodel format for saving models from a variety of tools in diverse flavors. For example, many models can be served as Python functions, so an MLmodel file can declare how each model should be interpreted as a Python function in order to let various tools serve it. MLflow also includes tools for running such models locally and exporting them to Docker containers or commercial serving platforms."),(0,l.kt)("p",null,"To illustrate this functionality, the ",(0,l.kt)("inlineCode",{parentName:"p"},"mlflow.sklearn")," package can log scikit-learn models as MLflow artifacts and then load them again for serving. There is an example training application in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mlflow/mlflow/tree/master/examples/sklearn_logistic_regression"},"sklearn_logistic_regression/train.py")," that you can run as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mlflow run --env-manager=local sklearn_logistic_regression\n")),(0,l.kt)("p",null,"When you run the example, it outputs an MLflow run ID for that experiment. If you look at ",(0,l.kt)("inlineCode",{parentName:"p"},"mlflow ui"),", you will also see that the run saved a model folder containing an MLmodel description file and a pickled scikit-learn model:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"=== Running command 'python train.py' in run with ID 'ee566cd8d86b411f978c6e3db5d161cb' ===\nScore: 0.6666666666666666\nModel saved in run ee566cd8d86b411f978c6e3db5d161cb\n=== Run (ID 'ee566cd8d86b411f978c6e3db5d161cb') succeeded ===\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"MLFlow Introduction",src:t(13243).Z,width:"1243",height:"771"})),(0,l.kt)("p",null,"You can pass the run ID and the path of the model within the artifacts directory (here \u201cmodel\u201d) to various tools. For example, MLflow includes a ",(0,l.kt)("a",{parentName:"p",href:"https://mlflow.org/docs/latest/models.html#local-model-deployment"},"simple REST server for python-based models")," - ",(0,l.kt)("inlineCode",{parentName:"p"},"mlflow models serve -m runs:/<RUN_ID>/model"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mlflow models serve --env-manager=local -m runs:/ee566cd8d86b411f978c6e3db5d161cb/model --port 8080\n")),(0,l.kt)("p",null,"The REST API defines 4 endpoints:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/ping"),": used for health check"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/health"),": (same as /ping)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/version"),": used for getting the mlflow version"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/invocations"),": used for scoring")),(0,l.kt)("p",null,"Once you have started the server, you can pass it some sample data and see the predictions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -d \'{"dataframe_split": {"columns": ["x"], "data": [[1], [-1]]}}\' -H \'Content-Type: application/json\' -X POST localhost:8080/invocations\n')),(0,l.kt)("p",null,"This returns:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{"predictions": [1, 0]}\n')))}d.isMDXComponent=!0},97993:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/MLFlow_Intro_01-f79462a8aabd01d01db4d3e4a34e250c.png"},8223:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/MLFlow_Intro_02-9b7a418a66fcc1612a02f6ceddd339c1.png"},5072:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/MLFlow_Intro_03-2e1f1c5474ad809b68ed47d203bb6c2e.png"},13243:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/MLFlow_Intro_04-2d0b13503988e438b06f7585cd94d793.png"},84521:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-c77de99ac2aaaf4bfc10d6424f4476da.jpg"}}]);