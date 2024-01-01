"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[54803],{430712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(785893),s=n(603905);const r={sidebar_position:4760,slug:"2023-01-22",title:"Python Ray Basic Concepts",authors:"mpolinowski",tags:["Python","Machine Learning","Ray"],description:"Ray is an open-source unified compute framework that makes it easy to scale AI and general Python workloads"},o=void 0,i={id:"IoT-and-Machine-Learning/AIOps/2023-01-22-python-ray-introduction/index",title:"Python Ray Basic Concepts",description:"Ray is an open-source unified compute framework that makes it easy to scale AI and general Python workloads",source:"@site/docs/IoT-and-Machine-Learning/AIOps/2023-01-22-python-ray-introduction/index.md",sourceDirName:"IoT-and-Machine-Learning/AIOps/2023-01-22-python-ray-introduction",slug:"/IoT-and-Machine-Learning/AIOps/2023-01-22-python-ray-introduction/2023-01-22",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-22-python-ray-introduction/2023-01-22",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/AIOps/2023-01-22-python-ray-introduction/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Ray",permalink:"/docs/tags/ray"}],version:"current",sidebarPosition:4760,frontMatter:{sidebar_position:4760,slug:"2023-01-22",title:"Python Ray Basic Concepts",authors:"mpolinowski",tags:["Python","Machine Learning","Ray"],description:"Ray is an open-source unified compute framework that makes it easy to scale AI and general Python workloads"},sidebar:"tutorialSidebar",previous:{title:"Python Ray Remote Functions",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-23-python-ray-remote-functions/2023-01-23"},next:{title:"DVC Model Access",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-06-dvc-model-access/2023-01-05"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Hello World",id:"hello-world",level:2},{value:"Ray Remote (Task/Futures)",id:"ray-remote-taskfutures",level:3},{value:"Nested Remote Functions",id:"nested-remote-functions",level:4},{value:"Ray Datasets - Distributed Data Preprocessing",id:"ray-datasets---distributed-data-preprocessing",level:3},{value:"Ray Actors",id:"ray-actors",level:3}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.ah)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Guangzhou, China",src:n(375763).Z+"",width:"1500",height:"662"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#installation",children:"Installation"})}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"#hello-world",children:"Hello World"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"#ray-remote-taskfutures",children:"Ray Remote (Task/Futures)"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#nested-remote-functions",children:"Nested Remote Functions"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#ray-datasets---distributed-data-preprocessing",children:"Ray Datasets - Distributed Data Preprocessing"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#ray-actors",children:"Ray Actors"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["see Youtube ",(0,a.jsx)(t.a,{href:"https://youtu.be/vzMXTpdJSuk",children:"Ray: A General Purpose Serverless Substrate? - Eric Liang, Anyscale"})]}),"\n"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/mpolinowski/ray-hello",children:"Github Repository"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-23-python-ray-remote-functions/2023-01-23",children:"Python Ray Remote Functions"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-26-python-ray-remote-actors/2023-01-26",children:"Python Ray Remote Actors"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-29-python-ray-deployments/2023-01-29",children:"Python Ray Deployments"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-31-python-ray-model-serving/2023-01-31",children:"Python Ray Model Serving"})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/ray-project/ray",children:"Ray"})," is a unified framework for scaling AI and Python applications. Ray consists of a core distributed runtime and a toolkit of libraries (Ray AIR) for simplifying ML compute."]}),"\n",(0,a.jsxs)(t.p,{children:["In a cloud computing model, the cloud provider allocates machine resources on demand, taking care of the servers on behalf of its customers. Ray provides a great foundation for ",(0,a.jsx)(t.a,{href:"https://www.anyscale.com/blog/the-ideal-foundation-for-a-general-purpose-serverless-platform",children:"general-purpose serverless platforms"})," by providing the following features:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Ray autoscaling transparently manages hardware resources while hiding the actual servers."}),"\n",(0,a.jsxs)(t.li,{children:["With ",(0,a.jsx)(t.code,{children:"actors"})," Ray not only implements a stateless but also a stateful programming model."]}),"\n",(0,a.jsx)(t.li,{children:"It allows you to specify resources, including hardware accelerators."}),"\n",(0,a.jsx)(t.li,{children:"It supports direct communications between your tasks."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(t.p,{children:['Setting up a local Single Node "Cluster". There are two versions that can be installed via pip. You cannot install it with ',(0,a.jsx)(t.code,{children:"pip install ray"})," if you want to use the ",(0,a.jsx)(t.a,{href:"https://docs.ray.io/en/latest/ray-core/ray-dashboard.html",children:"dashboard"}),". Use the following to install Ray with the proper dependencies:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'pip install -U "ray[default]"\n'})}),"\n",(0,a.jsxs)(t.p,{children:["You can access the dashboard through a URL printed when Ray is initialized (the default URL is ",(0,a.jsx)(t.code,{children:"http://localhost:8265"}),")."]}),"\n",(0,a.jsx)(t.p,{children:"To use Ray\u2019s AI Runtime install Ray with the optional extra air packages:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'pip install "ray[air]"\n'})}),"\n",(0,a.jsx)(t.h2,{id:"hello-world",children:"Hello World"}),"\n",(0,a.jsx)(t.h3,{id:"ray-remote-taskfutures",children:"Ray Remote (Task/Futures)"}),"\n",(0,a.jsx)(t.p,{children:"Execute a remote function that reports back where it was executed:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:'import os\nimport socket\n\ndef hello_from():\n    print( f"Running on {socket.gethostname()} in pid {os.getpid()}" )\n    return \n\nhello_from()\n'})}),"\n",(0,a.jsxs)(t.p,{children:["You can use the ",(0,a.jsx)(t.code,{children:"ray.remote"})," decorator to create a remote function. Ray returns a\n",(0,a.jsx)(t.code,{children:"future"}),". You can get the values returned in those futures with ",(0,a.jsx)(t.code,{children:"ray.get"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:'import ray\nimport os\nimport socket\n\n@ray.remote\n\ndef hello_from():\n    return f"Running on {socket.gethostname()} in pid {os.getpid()}"\n\nfuture = hello_from.remote()\nray.get(future)\n'})}),"\n",(0,a.jsx)(t.p,{children:"I am going to add the following lines to pause the execution - giving me some time to explore the Ray dashboard:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:'os.system("/bin/bash -c \'read -s -n 1 -p \\"Press any key to continue...\\"\'")\nprint()\n'})}),"\n",(0,a.jsx)(t.p,{children:'Since we are running Ray locally the remote function is executed "remotely" in a separate process:'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"Running on Link0815b in pid 35053\n2023-01-22 17:09:45,201 INFO worker.py:1529 -- Started a local Ray instance.\nView the dashboard at 127.0.0.1:8265 \nRunning on Link0815b in pid 35278\nPress any key to continue...\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Ray Introduction",src:n(141305).Z+"",width:"1619",height:"626"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Ray Introduction",src:n(634914).Z+"",width:"1611",height:"448"})}),"\n",(0,a.jsx)(t.h4,{id:"nested-remote-functions",children:"Nested Remote Functions"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:"from bs4 import BeautifulSoup\nimport ray\nimport requests\n\n\n@ray.remote\n\ndef crawl(url, depth=0, maxdepth=2, maxlinks=5):\n    \n    # prepare arrays for scraped links / futures\n    links = []\n    link_futures = []\n\n    try:\n        # get target url\n        f = requests.get(url)\n        # add found URL to link array\n        links += [url]\n        \n        # continue following till max depth\n        if (depth > maxdepth):\n            return links\n\n        # run web scraper on target url\n        soup = BeautifulSoup(f.text, 'html.parser')\n        i = 0\n\n        # follow links and and find more links\n        for link in soup.find_all('a'):\n            try:\n                i = i+1\n                link_futures += [crawl.remote(link[\"href\"], depth=(depth+1), maxdepth=maxdepth)]\n                if i > maxlinks:\n                    break\n            except:\n                pass\n\n        # add links and title to array\n        for r in ray.get(link_futures):\n            links += r\n\n        return links\n\n    except requests.exceptions.InvalidSchema:\n        return [] # Skip on invalid links\n    except requests.exceptions.MissingSchema:\n        return [] # Skip on invalid links\n\nprint(ray.get(crawl.remote(\"https://wiki.instar.com/en/Assistants/Review_Wall/\")))\n"})}),"\n",(0,a.jsx)(t.p,{children:"The nested call returns an array of all the links that were found on the target URL and on pages found at the end of those links (within the set limitations of max links and depth):"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"['https://wiki.instar.com/en/Assistants/Review_Wall/', 'https://forum.instar.de', 'https://youtu.be/l3EF_JgdGQg', 'https://www.youtube.com/about/', 'https://www.youtube.com/howyoutubeworks/', 'https://www.youtube.com/creators/', 'https://www.youtube.com/trends/', 'https://blog.youtube/', 'https://www.youtube.com/about/press/', 'https://www.youtube.com/about/copyright/', 'https://youtu.be/Ac1trrZhu9o', 'https://www.youtube.com/about/', 'https://www.youtube.com/howyoutubeworks/', 'https://www.youtube.com/creators/', 'https://www.youtube.com/trends/', 'https://blog.youtube/', 'https://www.youtube.com/about/press/', 'https://www.youtube.com/about/copyright/', 'https://youtu.be/6N0FATzh1BU', 'https://www.youtube.com/about/', 'https://www.youtube.com/howyoutubeworks/', 'https://www.youtube.com/creators/', 'https://www.youtube.com/trends/', 'https://blog.youtube/', 'https://www.youtube.com/about/press/', 'https://www.youtube.com/about/copyright/', 'https://youtu.be/2t7Y7I6l6A0', 'https://www.youtube.com/about/', 'https://www.youtube.com/howyoutubeworks/', 'https://www.youtube.com/creators/', 'https://www.youtube.com/trends/', 'https://blog.youtube/', 'https://www.youtube.com/about/press/', 'https://www.youtube.com/about/copyright/']\n"})}),"\n",(0,a.jsx)(t.p,{children:"I can see that up to 10 worker processes are spawned to work on this task - if I increase the number of links and depth of the search the amount of worker increases as well:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Ray Introduction",src:n(999177).Z+"",width:"1614",height:"899"})}),"\n",(0,a.jsx)(t.h3,{id:"ray-datasets---distributed-data-preprocessing",children:"Ray Datasets - Distributed Data Preprocessing"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://docs.ray.io/en/latest/data/dataset.html",children:"Ray Datasets"})," are the standard way to load and exchange data in Ray libraries and applications. They provide basic distributed data transformations such as maps (",(0,a.jsx)(t.a,{href:"https://docs.ray.io/en/latest/data/api/dataset.html#ray.data.Dataset.map_batches",children:"map_batches"}),"), global and grouped aggregations (",(0,a.jsx)(t.a,{href:"https://docs.ray.io/en/latest/data/api/grouped_dataset.html#ray.data.grouped_dataset.GroupedDataset",children:"GroupedDataset"}),"), and shuffling operations (",(0,a.jsx)(t.a,{href:"https://docs.ray.io/en/latest/data/api/dataset.html#ray.data.Dataset.random_shuffle",children:"random_shuffle"}),", ",(0,a.jsx)(t.a,{href:"https://docs.ray.io/en/latest/data/api/dataset.html#ray.data.Dataset.sort",children:"sort"}),", ",(0,a.jsx)(t.a,{href:"https://docs.ray.io/en/latest/data/api/dataset.html#ray.data.Dataset.repartition",children:"repartition"}),"), and are compatible with a variety of file formats, data sources, and distributed frameworks."]}),"\n",(0,a.jsx)(t.p,{children:"Let's create a dataset from the URLs we just downloaded:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:'import ray\nimport requests\n\n# use list of urls created above\ndataset=["https://wiki.instar.com/en/Assistants/Review_Wall/", "https://forum.instar.de", "https://youtu.be/l3EF_JgdGQg", "https://www.youtube.com/about/", "https://www.youtube.com/howyoutubeworks/", "https://www.youtube.com/creators/", "https://www.youtube.com/trends/", "https://blog.youtube/", "https://www.youtube.com/about/press/", "https://www.youtube.com/about/copyright/", "https://youtu.be/Ac1trrZhu9o", "https://www.youtube.com/about/", "https://www.youtube.com/howyoutubeworks/", "https://www.youtube.com/creators/", "https://www.youtube.com/trends/", "https://blog.youtube/", "https://www.youtube.com/about/press/", "https://www.youtube.com/about/copyright/", "https://youtu.be/6N0FATzh1BU", "https://www.youtube.com/about/", "https://www.youtube.com/howyoutubeworks/", "https://www.youtube.com/creators/", "https://www.youtube.com/trends/", "https://blog.youtube/", "https://www.youtube.com/about/press/", "https://www.youtube.com/about/copyright/", "https://youtu.be/2t7Y7I6l6A0", "https://www.youtube.com/about/", "https://www.youtube.com/howyoutubeworks/", "https://www.youtube.com/creators/", "https://www.youtube.com/trends/", "https://blog.youtube/", "https://www.youtube.com/about/press/", "https://www.youtube.com/about/copyright/"]\n\n# and create a dataset from them\nurls = ray.data.from_items(dataset)\n\n# download all pages\ndef get_page(url):\n    f = requests.get(url)\n    return f.text\n\n# map url dataset and get page content\npages = urls.map(get_page)\n\n# verify that pages where downloaded\n# print(pages.take(1))\n'})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"ERROR"}),": ",(0,a.jsx)(t.code,{children:"ModuleNotFoundError: No module named 'pkg_resources._vendor'"})," solved by ",(0,a.jsx)(t.code,{children:"pip install --upgrade setuptools"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["By calling ",(0,a.jsx)(t.code,{children:"groupby"})," with either a column name or a function that returns a key, you get a ",(0,a.jsx)(t.a,{href:"https://docs.ray.io/en/latest/data/api/grouped_dataset.html#ray.data.grouped_dataset.GroupedDataset",children:"GroupedDataset"}),". ",(0,a.jsx)(t.code,{children:"GroupedDataset"})," has built-in support for ",(0,a.jsx)(t.code,{children:"count"}),", ",(0,a.jsx)(t.code,{children:"max"}),", ",(0,a.jsx)(t.code,{children:"min"}),", and other common aggregations:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:"# split page content into words\nwords = pages.flat_map(lambda x: x.split(\" \")).map(lambda w: (w, 1))\n# create GroupedDataset\ngrouped_words = words.groupby(lambda wc: wc[0])\n# take a look at it\nprint('Generated Data: ', grouped_words)\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"Map: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 34/34 [00:05<00:00,  5.71it/s]\nFlat_Map: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 34/34 [00:00<00:00, 92.36it/s]\nMap: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 34/34 [00:00<00:00, 45.92it/s]\n\nGenerated Data:  GroupedDataset(dataset=Dataset(num_blocks=34, num_rows=900977, schema=<class 'tuple'>), key=<function <lambda> at 0x7fbe21277be0>)\n"})}),"\n",(0,a.jsx)(t.h3,{id:"ray-actors",children:"Ray Actors"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://docs.ray.io/en/latest/ray-core/actors.html#actors",children:"Actors"})," extend the Ray API from functions (tasks) to classes. An actor is essentially a stateful worker (or a service). Actors send and receive messages, updating their state in response. These messages can come from other actors, programs, or the Ray main execution thread with the Ray client. Just like before in Ray the actor will return a future that you can then collect on later."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Ray Actors"})," are very similar to ",(0,a.jsx)(t.strong,{children:"Remote Functions"})," but use Python classes to handle state. They can be used to retrieve the newest weights from your running ML training or - for example - get the latest sensor read-out from your IoT device:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:'import ray\n\n@ray.remote\n\nclass ReadSensor(object):\n    def __init__(self):\n        self.value = 0\n    def get_value(self):\n        self.value += 1\n        return f"Current value is: {self.value}"\n\n# create an actor instance\nsensor_reading = ReadSensor.remote()\n\n# call the actor multiple times\nprint(ray.get(sensor_reading.get_value.remote()))\nprint(ray.get(sensor_reading.get_value.remote()))\nprint(ray.get(sensor_reading.get_value.remote()))\nprint(ray.get(sensor_reading.get_value.remote()))\nprint(ray.get(sensor_reading.get_value.remote()))\n'})}),"\n",(0,a.jsx)(t.p,{children:"By requesting the value multiple times we increment the value itself. The next returned value we get reflects the change:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"python 04_ray_actors_distributed_state.py\n2023-01-22 21:47:50,961 INFO worker.py:1529 -- Started a local Ray instance.\nView the dashboard at 127.0.0.1:8265 \nCurrent value is: 1\nCurrent value is: 2\nCurrent value is: 3\nCurrent value is: 4\nCurrent value is: 5\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.ah)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},603905:(e,t,n)=>{n.d(t,{ah:()=>c});var a=n(667294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(n),p=s,y=h["".concat(l,".").concat(p)]||h[p]||u[p]||r;return n?a.createElement(y,o(o({ref:t},d),{},{components:n})):a.createElement(y,o({ref:t},d))}));d.displayName="MDXCreateElement"},141305:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Python_Ray_Introduction_01-2fe26b039a09a2e6c80b4ae5e9626ef1.png"},634914:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Python_Ray_Introduction_02-2d86f623b55f406e96f7efc927262532.png"},999177:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Python_Ray_Introduction_03-3a849501d682dc6261125872f32f5df9.png"},375763:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-296769d73822f07b0ac5dc952f56bfa1.jpg"}}]);