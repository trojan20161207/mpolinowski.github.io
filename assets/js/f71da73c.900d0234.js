"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[40856],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),k=d(a),u=r,g=k["".concat(p,".").concat(u)]||k[u]||m[u]||l;return a?n.createElement(g,i(i({ref:e},s),{},{components:a})):n.createElement(g,i({ref:e},s))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},59124:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:4710,slug:"2023-02-01",title:"Apache Airflow Introduction",authors:"mpolinowski",tags:["Python","Machine Learning","Airflow"],description:"Airflow is a platform to author, schedule and monitor workflows."},i=void 0,o={unversionedId:"IoT-and-Machine-Learning/AIOps/2023-02-01-apache-airflow-introduction/index",id:"IoT-and-Machine-Learning/AIOps/2023-02-01-apache-airflow-introduction/index",title:"Apache Airflow Introduction",description:"Airflow is a platform to author, schedule and monitor workflows.",source:"@site/docs/IoT-and-Machine-Learning/AIOps/2023-02-01-apache-airflow-introduction/index.md",sourceDirName:"IoT-and-Machine-Learning/AIOps/2023-02-01-apache-airflow-introduction",slug:"/IoT-and-Machine-Learning/AIOps/2023-02-01-apache-airflow-introduction/2023-02-01",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-02-01-apache-airflow-introduction/2023-02-01",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/AIOps/2023-02-01-apache-airflow-introduction/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Airflow",permalink:"/docs/tags/airflow"}],version:"current",sidebarPosition:4710,frontMatter:{sidebar_position:4710,slug:"2023-02-01",title:"Apache Airflow Introduction",authors:"mpolinowski",tags:["Python","Machine Learning","Airflow"],description:"Airflow is a platform to author, schedule and monitor workflows."},sidebar:"tutorialSidebar",previous:{title:"AIOps",permalink:"/docs/category/aiops"},next:{title:"Python Ray Model Serving",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-31-python-ray-model-serving/2023-01-31"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Installation with Docker",id:"installation-with-docker",level:2},{value:"Command Line Interface",id:"command-line-interface",level:3},{value:"CLI Cheat Sheet",id:"cli-cheat-sheet",level:4},{value:"Common Commands",id:"common-commands",level:4}],s={toc:d};function m(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Guangzhou, China",src:a(11071).Z,width:"1500",height:"662"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installation-with-docker"},"Installation with Docker"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#command-line-interface"},"Command Line Interface"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cli-cheat-sheet"},"CLI Cheat Sheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#common-commands"},"Common Commands"))))))),(0,r.kt)("p",null,"I have been ",(0,r.kt)("a",{parentName:"p",href:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-22-python-ray-introduction/2023-01-22"},"looking into Python Ray")," to provision / update ML models for prediction API. In my research I have been hearing about two alternative platforms that supposedly offer the same or similar benefits to MLOps workflows. So before diving into the nitty, gritty details of Ray let's take a look at the alternatives - ",(0,r.kt)("a",{parentName:"p",href:"https://airflow.apache.org/"},"Apache Airflow")," and the Kubernetes native ",(0,r.kt)("a",{parentName:"p",href:"https://www.kubeflow.org/"},"Kubeflow"),". So let's start with Airflow."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Apache Airflow is an open-source platform for developing, scheduling, and monitoring batch-oriented workflows. Airflow\u2019s extensible Python framework enables you to build workflows connecting with virtually any technology. A web interface helps manage the state of your workflows. Airflow is deployable in many ways, varying from a single process on your laptop to a distributed setup to support even the biggest workflows."),(0,r.kt)("p",null,"The main characteristic of Airflow workflows is that all workflows are defined in Python code allowing us to write dynamic ",(0,r.kt)("em",{parentName:"p"},"Data Pipelines")," called ",(0,r.kt)("strong",{parentName:"p"},"DAG"),"'s (",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/hashmapinc/building-ml-pipelines-8e27344a42d2"},"Directed Acyclic Graph"),") \u2014 a mathematical abstraction of a pipeline. \u201cWorkflows as code\u201d serves several purposes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dynamic"),": Airflow pipelines are configured as Python code, allowing for dynamic pipeline generation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Extensible"),": The Airflow framework contains operators to connect with numerous technologies. All Airflow components are extensible to easily adjust to your environment.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Flexible"),": Workflow parameterization is built-in leveraging the Jinja templating engine."))),(0,r.kt)("h2",{id:"installation-with-docker"},"Installation with Docker"),(0,r.kt)("p",null,"Clone the Github Repository (linked above) and enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," directory. Here you find a ",(0,r.kt)("strong",{parentName:"p"},"Dockerfile")," and shell script we will need to start Airflow inside a Docker container."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note")," that the shell script contains instructions to create the default admin user. You can change the login credentials there - the ",(0,r.kt)("strong",{parentName:"p"},"default login")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"admin"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"admin"),".")),(0,r.kt)("p",null,"We can build the Docker image by running the following command inside the directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t airflow-postgres .\n")),(0,r.kt)("p",null,"This will download the official Python Docker image as base and installs the latest version of Airflow (currently ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.5.1")," with support for Python ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.10"),")."),(0,r.kt)("p",null,"You can now run the container exposing the WebUI port using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -d -p 8080:8080 --name airflow airflow-postgres\n")),(0,r.kt)("p",null,"You can visit the WebUI on ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080")," and login with the user that was created by the shell script:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Apache Airflow Introduction",src:a(35598).Z,width:"953",height:"441"})),(0,r.kt)("p",null,"We now have access to the user interface and can take control over workflows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Apache Airflow Introduction",src:a(75684).Z,width:"1395",height:"618"})),(0,r.kt)("h3",{id:"command-line-interface"},"Command Line Interface"),(0,r.kt)("p",null,"Besides the web interface we can also interact with Airflow through it's CLI interface. Since Airflow is running inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"airflow")," Docker container we first have to access this environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -ti airflow /bin/bash\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"usage: airflow [-h] GROUP_OR_COMMAND ...\n\npositional arguments:\n  GROUP_OR_COMMAND\n\n    Groups:\n      celery         Celery components\n      config         View configuration\n      connections    Manage connections\n      dags           Manage DAGs\n      db             Database operations\n      jobs           Manage jobs\n      kubernetes     Tools to help run the KubernetesExecutor\n      pools          Manage pools\n      providers      Display providers\n      roles          Manage roles\n      tasks          Manage tasks\n      users          Manage users\n      variables      Manage variables\n\n    Commands:\n      cheat-sheet    Display cheat sheet\n      dag-processor  Start a standalone Dag Processor instance\n      info           Show information about current Airflow and environment\n      kerberos       Start a kerberos ticket renewer\n      plugins        Dump information about loaded plugins\n      rotate-fernet-key\n                     Rotate encrypted connection credentials and variables\n      scheduler      Start a scheduler instance\n      standalone     Run an all-in-one copy of Airflow\n      sync-perm      Update permissions for existing roles and optionally DAGs\n      triggerer      Start a triggerer instance\n      version        Show the version\n      webserver      Start a Airflow webserver instanc\n")),(0,r.kt)("h4",{id:"cli-cheat-sheet"},"CLI Cheat Sheet"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Commands"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Miscellaneous commands")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow cheat-sheet"),(0,r.kt)("td",{parentName:"tr",align:null},"Display cheat sheet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow dag-processor"),(0,r.kt)("td",{parentName:"tr",align:null},"Start a standalone Dag Processor instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow info"),(0,r.kt)("td",{parentName:"tr",align:null},"Show information about current Airflow and environment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow kerberos"),(0,r.kt)("td",{parentName:"tr",align:null},"Start a kerberos ticket renewer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow plugins"),(0,r.kt)("td",{parentName:"tr",align:null},"Dump information about loaded plugins")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow rotate-fernet-key"),(0,r.kt)("td",{parentName:"tr",align:null},"Rotate encrypted connection credentials and variables")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow scheduler"),(0,r.kt)("td",{parentName:"tr",align:null},"Start a scheduler instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow standalone"),(0,r.kt)("td",{parentName:"tr",align:null},"Run an all-in-one copy of Airflow")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow sync-perm"),(0,r.kt)("td",{parentName:"tr",align:null},"Update permissions for existing roles and optionally DAGs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow triggerer"),(0,r.kt)("td",{parentName:"tr",align:null},"Start a triggerer instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow version"),(0,r.kt)("td",{parentName:"tr",align:null},"Show the version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow webserver"),(0,r.kt)("td",{parentName:"tr",align:null},"Start a Airflow webserver instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Celery components")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow celery flower"),(0,r.kt)("td",{parentName:"tr",align:null},"Start a Celery Flower")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow celery stop"),(0,r.kt)("td",{parentName:"tr",align:null},"Stop the Celery worker gracefully")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow celery worker"),(0,r.kt)("td",{parentName:"tr",align:null},"Start a Celery worker node")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"View configuration")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow config get-value"),(0,r.kt)("td",{parentName:"tr",align:null},"Print the value of the configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow config list"),(0,r.kt)("td",{parentName:"tr",align:null},"List options for the configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Manage connections")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow connections add"),(0,r.kt)("td",{parentName:"tr",align:null},"Add a connection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow connections delete"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a connection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow connections export"),(0,r.kt)("td",{parentName:"tr",align:null},"Export all connections")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow connections get"),(0,r.kt)("td",{parentName:"tr",align:null},"Get a connection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow connections import"),(0,r.kt)("td",{parentName:"tr",align:null},"Import connections from a file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow connections list"),(0,r.kt)("td",{parentName:"tr",align:null},"List connections")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Manage DAGs")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow dags backfill"),(0,r.kt)("td",{parentName:"tr",align:null},"Run subsections of a DAG for a specified date range")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow dags delete"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete all DB records related to the specified DAG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow dags list"),(0,r.kt)("td",{parentName:"tr",align:null},"List all the DAGs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow dags list-import-errors"),(0,r.kt)("td",{parentName:"tr",align:null},"List all the DAGs that have import errors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow dags list-jobs"),(0,r.kt)("td",{parentName:"tr",align:null},"List the jobs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow dags list-runs"),(0,r.kt)("td",{parentName:"tr",align:null},"List DAG runs given a DAG id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow dags next-execution"),(0,r.kt)("td",{parentName:"tr",align:null},"Get the next execution datetimes of a DAG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow dags pause"),(0,r.kt)("td",{parentName:"tr",align:null},"Pause a DAG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow dags report"),(0,r.kt)("td",{parentName:"tr",align:null},"Show DagBag loading report")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow dags reserialize"),(0,r.kt)("td",{parentName:"tr",align:null},"Reserialize all DAGs by parsing the DagBag files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow dags show"),(0,r.kt)("td",{parentName:"tr",align:null},"Displays DAG's tasks with their dependencies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow dags show-dependencies"),(0,r.kt)("td",{parentName:"tr",align:null},"Displays DAGs with their dependencies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow dags state"),(0,r.kt)("td",{parentName:"tr",align:null},"Get the status of a dag run")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow dags test"),(0,r.kt)("td",{parentName:"tr",align:null},"Execute one single DagRun")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow dags trigger"),(0,r.kt)("td",{parentName:"tr",align:null},"Trigger a DAG run")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow dags unpause"),(0,r.kt)("td",{parentName:"tr",align:null},"Resume a paused DAG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Database operations")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow db check"),(0,r.kt)("td",{parentName:"tr",align:null},"Check if the database can be reached")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow db check-migrations"),(0,r.kt)("td",{parentName:"tr",align:null},"Check if migration have finished")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow db clean"),(0,r.kt)("td",{parentName:"tr",align:null},"Purge old records in metastore tables")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow db downgrade"),(0,r.kt)("td",{parentName:"tr",align:null},"Downgrade the schema of the metadata database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow db init"),(0,r.kt)("td",{parentName:"tr",align:null},"Initialize the metadata database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow db reset"),(0,r.kt)("td",{parentName:"tr",align:null},"Burn down and rebuild the metadata database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow db shell"),(0,r.kt)("td",{parentName:"tr",align:null},"Runs a shell to access the database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow db upgrade"),(0,r.kt)("td",{parentName:"tr",align:null},"Upgrade the metadata database to latest version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Manage jobs")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow jobs check"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if job(s) are still alive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Tools to help run the KubernetesExecutor")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow kubernetes cleanup-pods"),(0,r.kt)("td",{parentName:"tr",align:null},"Clean up Kubernetes pods (created by KubernetesExecutor/KubernetesPodOperator) in evicted/failed/succeeded/pending states")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow kubernetes generate-dag-yaml"),(0,r.kt)("td",{parentName:"tr",align:null},"Generate YAML files for all tasks in DAG. Useful for debugging tasks without launching into a cluster")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Manage pools")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow pools delete"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete pool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow pools export"),(0,r.kt)("td",{parentName:"tr",align:null},"Export all pools")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow pools get"),(0,r.kt)("td",{parentName:"tr",align:null},"Get pool size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow pools import"),(0,r.kt)("td",{parentName:"tr",align:null},"Import pools")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow pools list"),(0,r.kt)("td",{parentName:"tr",align:null},"List pools")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow pools set"),(0,r.kt)("td",{parentName:"tr",align:null},"Configure pool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Display providers")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow providers auth"),(0,r.kt)("td",{parentName:"tr",align:null},"Get information about API auth backends provided")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow providers behaviours"),(0,r.kt)("td",{parentName:"tr",align:null},"Get information about registered connection types with custom behaviours")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow providers get"),(0,r.kt)("td",{parentName:"tr",align:null},"Get detailed information about a provider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow providers hooks"),(0,r.kt)("td",{parentName:"tr",align:null},"List registered provider hooks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow providers links"),(0,r.kt)("td",{parentName:"tr",align:null},"List extra links registered by the providers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow providers list"),(0,r.kt)("td",{parentName:"tr",align:null},"List installed providers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow providers logging"),(0,r.kt)("td",{parentName:"tr",align:null},"Get information about task logging handlers provided")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow providers secrets"),(0,r.kt)("td",{parentName:"tr",align:null},"Get information about secrets backends provided")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow providers widgets"),(0,r.kt)("td",{parentName:"tr",align:null},"Get information about registered connection form widgets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Manage roles")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow roles add-perms"),(0,r.kt)("td",{parentName:"tr",align:null},"Add roles permissions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow roles create"),(0,r.kt)("td",{parentName:"tr",align:null},"Create role")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow roles del-perms"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete roles permissions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow roles delete"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete role")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow roles export"),(0,r.kt)("td",{parentName:"tr",align:null},"Export roles (without permissions) from db to JSON file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow roles import"),(0,r.kt)("td",{parentName:"tr",align:null},"Import roles (without permissions) from JSON file to db")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow roles list"),(0,r.kt)("td",{parentName:"tr",align:null},"List roles")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Manage tasks")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow tasks clear"),(0,r.kt)("td",{parentName:"tr",align:null},"Clear a set of task instance, as if they never ran")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow tasks failed-deps"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the unmet dependencies for a task instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow tasks list"),(0,r.kt)("td",{parentName:"tr",align:null},"List the tasks within a DAG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow tasks render"),(0,r.kt)("td",{parentName:"tr",align:null},"Render a task instance's template(s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow tasks run"),(0,r.kt)("td",{parentName:"tr",align:null},"Run a single task instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow tasks state"),(0,r.kt)("td",{parentName:"tr",align:null},"Get the status of a task instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow tasks states-for-dag-run"),(0,r.kt)("td",{parentName:"tr",align:null},"Get the status of all task instances in a dag run")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow tasks test"),(0,r.kt)("td",{parentName:"tr",align:null},"Test a task instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Manage users")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow users add-role"),(0,r.kt)("td",{parentName:"tr",align:null},"Add role to a user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow users create"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow users delete"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow users export"),(0,r.kt)("td",{parentName:"tr",align:null},"Export all users")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow users import"),(0,r.kt)("td",{parentName:"tr",align:null},"Import users")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow users list"),(0,r.kt)("td",{parentName:"tr",align:null},"List users")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow users remove-role"),(0,r.kt)("td",{parentName:"tr",align:null},"Remove role from a user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Manage variables")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow variables delete"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete variable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow variables export"),(0,r.kt)("td",{parentName:"tr",align:null},"Export all variables")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow variables get"),(0,r.kt)("td",{parentName:"tr",align:null},"Get variable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow variables import"),(0,r.kt)("td",{parentName:"tr",align:null},"Import variables")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow variables list"),(0,r.kt)("td",{parentName:"tr",align:null},"List variables")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airflow variables set"),(0,r.kt)("td",{parentName:"tr",align:null},"Set variable")))),(0,r.kt)("h4",{id:"common-commands"},"Common Commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"airflow db init"),": Initialise the metadatabase"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"airflow db reset"),":  Reinitialize the metadatabase (Drop everything)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"airflow db upgrade"),": Upgrade the metadatabase (Latest schemas, values, ...)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"airflow webserver"),": Start Airflow\u2019s webserver"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"airflow scheduler"),": Start Airflow\u2019s scheduler"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"airflow celery worker"),": Start a Celery worker (Useful in distributed mode to spread tasks among nodes - machines)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"airflow dags list"),": Give the list of known dags (either those in the examples folder or in dags folder)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"airflow dags trigger example_python_operator"),": Trigger the dag example_python_operator with the current date as execution date"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"airflow dags trigger example_python_operator -e 2023-01-01"),": Trigger the dag example_python_operator with a date in the past as execution date (This won\u2019t trigger the tasks of that dag unless you set the option catchup=True in the DAG definition)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"airflow dags trigger example_python_operator -e '2023-01-01 19:04:00+00:00'"),": Trigger the dag example_python_operator with a date in the future (change the date here with one having +2 minutes later than the current date displayed in the Airflow UI). The dag will be scheduled at that date."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"airflow dags list-runs -d example_python_operator"),": Display the history of example_python_operator\u2019s dag runs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"airflow tasks list example_python_operator"),": List the tasks contained into the example_python_operator dag"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"airflow tasks test example_python_operator print_the_context 2023-01-01"),": Allow to test a task (print_the_context) from a given dag (example_python_operator here) without taking care of dependencies and past runs. Useful for debugging.")))}m.isMDXComponent=!0},35598:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Apache_Airflow_Introduction_01-0c89fe239c5aa7f66548c4d24672fbef.png"},75684:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Apache_Airflow_Introduction_02-05e263b42615920b39834d761b43d5cd.png"},11071:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-296769d73822f07b0ac5dc952f56bfa1.jpg"}}]);