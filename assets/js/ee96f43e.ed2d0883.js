"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[90275],{546165:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(785893),r=t(603905);const o={sidebar_position:4740,slug:"2023-01-26",title:"Python Ray Remote Actors",authors:"mpolinowski",tags:["Python","Machine Learning","Ray"],description:"Use Ray Actors to maintain a state between invocations."},c=void 0,s={id:"IoT-and-Machine-Learning/AIOps/2023-01-26-python-ray-remote-actors/index",title:"Python Ray Remote Actors",description:"Use Ray Actors to maintain a state between invocations.",source:"@site/docs/IoT-and-Machine-Learning/AIOps/2023-01-26-python-ray-remote-actors/index.md",sourceDirName:"IoT-and-Machine-Learning/AIOps/2023-01-26-python-ray-remote-actors",slug:"/IoT-and-Machine-Learning/AIOps/2023-01-26-python-ray-remote-actors/2023-01-26",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-26-python-ray-remote-actors/2023-01-26",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/AIOps/2023-01-26-python-ray-remote-actors/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Ray",permalink:"/docs/tags/ray"}],version:"current",sidebarPosition:4740,frontMatter:{sidebar_position:4740,slug:"2023-01-26",title:"Python Ray Remote Actors",authors:"mpolinowski",tags:["Python","Machine Learning","Ray"],description:"Use Ray Actors to maintain a state between invocations."},sidebar:"tutorialSidebar",previous:{title:"Python Ray Deployments",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-29-python-ray-deployments/2023-01-29"},next:{title:"Python Ray Remote Functions",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-23-python-ray-remote-functions/2023-01-23"}},i={},l=[{value:"Basic Ray Remote Actor",id:"basic-ray-remote-actor",level:2},{value:"Detached Actors",id:"detached-actors",level:3},{value:"Retry on Failure",id:"retry-on-failure",level:3},{value:"Persistence",id:"persistence",level:2},{value:"Horizontal Scaling",id:"horizontal-scaling",level:2},{value:"Vertical Scaling",id:"vertical-scaling",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.ah)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Guangzhou, China",src:t(548176).Z+"",width:"1500",height:"662"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#basic-ray-remote-actor",children:"Basic Ray Remote Actor"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#detached-actors",children:"Detached Actors"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#retry-on-failure",children:"Retry on Failure"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#persistence",children:"Persistence"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#horizontal-scaling",children:"Horizontal Scaling"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#vertical-scaling",children:"Vertical Scaling"})}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Source: ",(0,a.jsx)(n.a,{href:"https://github.com/scalingpythonml/scaling-python-with-ray",children:"Scaling Python with Ray"})]}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/mpolinowski/ray-remote-actors",children:"Github Repository"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Remote Actors"})," allow to make parallel remote procedure calls just like ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-23-python-ray-remote-functions/2023-01-23",children:"Remote Functions"}),". But unlike the latter they enable you to maintain a state between invocations. To ensure state consistency, actors process one request at a time. An actor can:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Store data"}),"\n",(0,a.jsx)(n.li,{children:"Receive messages from other actors"}),"\n",(0,a.jsx)(n.li,{children:"Pass messages to other actors"}),"\n",(0,a.jsx)(n.li,{children:"Create additional child actors"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"basic-ray-remote-actor",children:"Basic Ray Remote Actor"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'import ray\n\n# start ray\nray.init()\n\n@ray.remote\nclass Account:\n    def __init__(self, balance: float, minimal_balance: float):\n        # initialize account and balance\n        self.minimal = minimal_balance\n        if balance < minimal_balance:\n            raise Exception("ERROR :: Starting balance is less than minimal balance")\n        self.balance = balance\n\n    def balance(self) -> float:\n        # get current balance (private state)\n        return self.balance\n\n    def deposit(self, amount: float) -> float:\n        # take deposit and update balance state\n        if amount < 0:\n            raise Exception("ERROR :: Cannot deposit negative amount")\n        self.balance = self.balance + amount\n        return self.balance\n\n    def withdraw(self, amount: float) -> float:\n        # release withdraw and update balance state\n        if amount < 0:\n            raise Exception("ERROR :: Cannot withdraw negative amount")\n        balance = self.balance - amount\n        if balance < self.minimal:\n            raise Exception("ERROR :: Withdrawal is not supported by current balance")\n        self.balance = balance\n        return balance\n\n# invoke remote actor instance\naccount_actor = Account(name=\'Account\').remote(balance = 99.,minimal_balance=11.)\n\n# do procedure calls to interact with instance\nprint(f"INFO :: Current Balance: {ray.get(account_actor.balance.remote())}")\nprint(f"INFO :: Balance after Withdraw: {ray.get(account_actor.withdraw.remote(66.))}")\nprint(f"INFO :: Balance after Deposit: {ray.get(account_actor.deposit.remote(33.))}")\nprint(f"INFO :: Balance after Deposit: {ray.get_actor(\'Account\').deposit.remote(33.)}")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python 01_ray-basic-remote-actor.py\n2023-01-26 15:55:13,252 INFO worker.py:1529 -- Started a local Ray instance.\nView the dashboard at 127.0.0.1:8265 \nINFO :: Current Balance: 99.0\nINFO :: Balance after Withdraw: 33.0\nINFO :: Balance after Deposit: 66.0\n"})}),"\n",(0,a.jsx)(n.h3,{id:"detached-actors",children:"Detached Actors"}),"\n",(0,a.jsx)(n.p,{children:"You can also run actors in detached mode and kill them manually:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"account_actor = Account.options(name='Account', lifetime='detached')\\\n    .remote(balance = 100.,minimal_balance=20.)\n\nprint(ray.get_actor('Account'))\n\nray.kill(account_actor)\n\nprint(ray.get_actor('Account'))\n"})}),"\n",(0,a.jsxs)(n.p,{children:["A detached actor can also exited from inside using ",(0,a.jsx)(n.code,{children:"ray.actor.exit_actor"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"retry-on-failure",children:"Retry on Failure"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"@ray.remote"})," annotation allows you to ",(0,a.jsx)(n.a,{href:"https://docs.ray.io/en/releases-0.8.7/package-ref.html#ray-remote",children:"specify parameters"})," that specify what Ray should do when a remote host/process goes down:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"max_restarts"}),": Specify the maximum number of times that the actor should be restarted when it dies unexpectedly. (default ",(0,a.jsx)(n.code,{children:"0"}),", unlimited ",(0,a.jsx)(n.code,{children:"-1"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"max_task_retries"}),": Specifies the number of times to retry an actor\u2019s task if the task fails\nbecause of a system error.  (default ",(0,a.jsx)(n.code,{children:"0"}),", until ",(0,a.jsx)(n.code,{children:"max_restarts"})," is reched ",(0,a.jsx)(n.code,{children:"-1"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"max_retries"}),": The same as ",(0,a.jsx)(n.code,{children:"max_restarts"})," but for ",(0,a.jsx)(n.strong,{children:"Remote Functions"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"@ray.remote(max_restarts=5, max_task_retries=-1)\nclass Account:\n    ...\n"})}),"\n",(0,a.jsx)(n.h2,{id:"persistence",children:"Persistence"}),"\n",(0,a.jsx)(n.p,{children:"We can implement this with the previous 'Account' actor using the local file system to make sure that our actors state is not lost. Changes that we need to make:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"We need to identify the account to be able to retrieve the information if the state was lost."}),"\n",(0,a.jsx)(n.li,{children:"We need to define a directory where the state should be saved."}),"\n",(0,a.jsx)(n.li,{children:"And an additional function that is called with every state change and writes it to file."}),"\n",(0,a.jsx)(n.li,{children:"And another function that can restore the state from file"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"import ray\nfrom os.path import exists\n\nray.init()\n\n@ray.remote\nclass Account:\n    def __init__(self, balance: float, minimal_balance: float, account_key: str, basedir: str = '.'):\n        # locate the file storage location\n        self.basedir = basedir\n        # set an account identification\n        self.key = account_key\n        # if state was not restored create new from props\n        if not self.restorestate():\n            if balance < minimal_balance:\n                raise Exception(\"ERROR :: Starting balance is less then minimal balance\")\n            self.balance = balance\n            self.minimal = minimal_balance\n            # write generated state to file\n            self.storestate()\n\n    def balance(self) -> float:\n        # get current balance (private state)\n        return self.balance\n\n    def deposit(self, amount: float) -> float:\n        # take deposit and update balance state\n        if amount < 0:\n            raise Exception(\"ERROR :: Cannot deposit negative amount\")\n        self.balance = self.balance + amount\n        self.storestate()\n        return self.balance\n\n    def withdraw(self, amount: float) -> float:\n        # release withdraw and update balance state\n        if amount < 0:\n            raise Exception(\"ERROR :: Can not withdraw negative amount\")\n        balance = self.balance - amount\n        if balance < self.minimal:\n            raise Exception(\"ERROR :: Withdraw is not supported by current balance\")\n        self.balance = balance\n        self.storestate()\n        return balance\n\n    def restorestate(self) -> bool:\n        # if stored state for account id exist load it\n        if exists(self.basedir + '/' + self.key):\n            with open(self.basedir + '/' + self.key, \"rb\") as f:\n                bytes = f.read()\n            state = ray.cloudpickle.loads(bytes)\n            self.balance = state['balance']\n            self.minimal = state['minimal']\n            return True\n        else:\n            return False\n\n    def storestate(self):\n        # store state to file\n        bytes = ray.cloudpickle.dumps({'balance' : self.balance, 'minimal' : self.minimal})\n        with open(self.basedir + '/' + self.key, \"wb\") as f:\n            f.write(bytes)\n"})}),"\n",(0,a.jsx)(n.p,{children:"We can now invoke an instance of the actor, make changes to it's state, kill the instance and invoke a new one - which should have been able to restore the state generated before:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"# invoke an instance of the account worker\naccount_actor = Account.options(name='Account')\\\n    .remote(balance=99.,minimal_balance=11., account_key='secretaccountkey')\n\n# make changes to it's default state\nprint(f\"INFO :: Current balance: {ray.get(account_actor.balance.remote())}\")\nprint(f\"INFO :: Balance after Withdraw: {ray.get(account_actor.withdraw.remote(66.))}\")\nprint(f\"INFO :: Balance after Deposit: {ray.get(account_actor.deposit.remote(33.))}\")\n\n# get actor id\nprint(ray.get_actor('Account'))\n\n# kill the first instance\nray.kill(account_actor)\n\n# and create a new one\naccount_actor = Account.options(name='Account') \\\n    .remote(balance=99.,minimal_balance=11., account_key='secretaccountkey')\n\n# it should have restored the state from before\nprint(f\"INFO :: Current balance {ray.get(account_actor.balance.remote())}\")\n\n# verify that this is a new actor\nprint(ray.get_actor('Account'))\n\n# kill the first instance\nray.kill(account_actor)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python 02_ray-basic-remote-actor_persistence.py\n2023-01-26 19:36:40,104 INFO worker.py:1529 -- Started a local Ray instance.\nView the dashboard at 127.0.0.1:8265 \nINFO :: Current balance: 99.0\nINFO :: Balance after Withdraw: 33.0\nINFO :: Balance after Deposit: 66.0\nActor(Account, f90108cf73fc420607aed2ca01000000)\nINFO :: Current balance 66.0\nActor(Account, 1fcc75b5d96c0c9a9f9b0a1e01000000)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"horizontal-scaling",children:"Horizontal Scaling"}),"\n",(0,a.jsxs)(n.p,{children:["You can add more processes for horizontal scaling with Ray\u2019s actor pool, provided by the ",(0,a.jsx)(n.code,{children:"ray.util"})," module. The actor pool effectively uses a fixed set of actors as a single entity and manages which actor in the pool gets the next request. But the state of this pool of actors is not merged - pooling only works if the state is created by the constructor and not changed over the lifecycle of each actor."]}),"\n",(0,a.jsxs)(n.p,{children:["Pooling can be imported from ",(0,a.jsx)(n.code,{children:"from ray.util import ActorPool"})," and be added to our code above by creating the ",(0,a.jsx)(n.code,{children:"ActorPool"})," of 3 identical ",(0,a.jsx)(n.code,{children:"FilePersistence()"})," actors (",(0,a.jsx)(n.strong,{children:"Note"})," that the persistence class now alos needs to be a remote actor so that it can be spread out over several processes / hosts):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"pool = ActorPool([FilePersistence.remote(), FilePersistence.remote(), FilePersistence.remote()])\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The persistence is now handled by our pool and replaces the direct call of ",(0,a.jsx)(n.code,{children:"FilePersistence()"})," inside the ",(0,a.jsx)(n.code,{children:"Account"})," class:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"@ray.remote\nclass Account:\n    def __init__(self, balance: float, minimal_balance: float, account_key: str, persistence: ActorPool):\n"})}),"\n",(0,a.jsx)(n.p,{children:"And the actor handle has to be pointed to the pool as well:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"# invoke an instance of the account worker\naccount_actor = Account.options(name='Account').remote(balance=99.,minimal_balance=11.,\n                                    account_key='secretaccountkey', persistence=pool)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"vertical-scaling",children:"Vertical Scaling"}),"\n",(0,a.jsxs)(n.p,{children:["By default, Ray assumes that all functions and actors have the same resource requirements. For actors or functions with different resource requirements, you can specify the resources as parameter for the ",(0,a.jsx)(n.code,{children:"@ray.remote"})," decorator. The defaults are one CPU and zero GPUs. The following decorator will request 1 CPU, 4 GPUs and 500 MiB of memory for the remote actor:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"@ray.remote(num_cpus=1, num_gpus=4, (memory=500 * 1024 * 1024)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>l});var a=t(667294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(f,c(c({ref:n},h),{},{components:t})):a.createElement(f,c({ref:n},h))}));h.displayName="MDXCreateElement"},548176:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-296769d73822f07b0ac5dc952f56bfa1.jpg"}}]);