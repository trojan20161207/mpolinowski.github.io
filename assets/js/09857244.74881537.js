"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[30630],{3685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(785893),i=t(603905);const r={sidebar_position:4620,slug:"2023-06-21",title:"AutoML with AutoGluon for Multi-Modal Data NLP",authors:"mpolinowski",tags:["Python","Machine Learning","AutoGluon","Cheating"],description:"Using Amazon SageMaker / AutoGluon to find your perfect model fit."},l="AutoML with AutoGluon for Multi-Modal Data NLP",s={id:"IoT-and-Machine-Learning/AIOps/2023-06-21-automl-with-autogluon-multiclass-nlp/index",title:"AutoML with AutoGluon for Multi-Modal Data NLP",description:"Using Amazon SageMaker / AutoGluon to find your perfect model fit.",source:"@site/docs/IoT-and-Machine-Learning/AIOps/2023-06-21-automl-with-autogluon-multiclass-nlp/index.md",sourceDirName:"IoT-and-Machine-Learning/AIOps/2023-06-21-automl-with-autogluon-multiclass-nlp",slug:"/IoT-and-Machine-Learning/AIOps/2023-06-21-automl-with-autogluon-multiclass-nlp/2023-06-21",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-06-21-automl-with-autogluon-multiclass-nlp/2023-06-21",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/AIOps/2023-06-21-automl-with-autogluon-multiclass-nlp/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"AutoGluon",permalink:"/docs/tags/auto-gluon"},{label:"Cheating",permalink:"/docs/tags/cheating"}],version:"current",sidebarPosition:4620,frontMatter:{sidebar_position:4620,slug:"2023-06-21",title:"AutoML with AutoGluon for Multi-Modal Data NLP",authors:"mpolinowski",tags:["Python","Machine Learning","AutoGluon","Cheating"],description:"Using Amazon SageMaker / AutoGluon to find your perfect model fit."},sidebar:"tutorialSidebar",previous:{title:"AutoML with AutoGluon for Timeseries Forecasts",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-06-23-automl-with-autogluon-timeseries-forecast/2023-06-23"},next:{title:"AutoML with AutoGluon for Tabular Data",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-06-18-automl-with-autogluon-tabular-data/2023-06-18"}},o={},d=[{value:"Installation",id:"installation",level:2},{value:"Sentiment Analysis for 5-star Ratings",id:"sentiment-analysis-for-5-star-ratings",level:2},{value:"Data Preprocessing",id:"data-preprocessing",level:3},{value:"Model Training",id:"model-training",level:3},{value:"Model Evaluation",id:"model-evaluation",level:3},{value:"Binary Classification with the MultiModalPredictor",id:"binary-classification-with-the-multimodalpredictor",level:2},{value:"Data Preprocessing",id:"data-preprocessing-1",level:3},{value:"Model Training",id:"model-training-1",level:3},{value:"Model Evaluation",id:"model-evaluation-1",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.ah)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"TST, HongKong",src:t(343937).Z+"",width:"1500",height:"575"})}),"\n",(0,a.jsx)(n.h1,{id:"automl-with-autogluon-for-multi-modal-data-nlp",children:"AutoML with AutoGluon for Multi-Modal Data NLP"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Part 1: ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/AIOps/2023-06-18-automl-with-autogluon-tabular-data/2023-06-18",children:"AutoML with AutoGluon for Tabular Data"})]}),"\n",(0,a.jsx)(n.li,{children:"Part 2: AutoML with AutoGluon for Multi-Modal Data"}),"\n",(0,a.jsxs)(n.li,{children:["Part 3: ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/AIOps/2023-06-23-automl-with-autogluon-timeseries-forecast/2023-06-23",children:"AutoML with AutoGluon for Timeseries Forecasts"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/autogluon/autogluon",children:"AutoGluon"})," automates machine learning tasks enabling you to easily achieve strong predictive performance in your applications. With just a few lines of code, you can train and deploy high-accuracy machine learning and deep learning models on image, text, time series, and tabular data."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/mpolinowski/automl-gluon-tabular-data/tree/master/03_Multi-Class_Classification_NLP",children:"Github Repository"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#automl-with-autogluon-for-multi-modal-data-nlp",children:"AutoML with AutoGluon for Multi-Modal Data NLP"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#sentiment-analysis-for-5-star-ratings",children:"Sentiment Analysis for 5-star Ratings"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#data-preprocessing",children:"Data Preprocessing"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#model-training",children:"Model Training"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#model-evaluation",children:"Model Evaluation"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#binary-classification-with-the-multimodalpredictor",children:"Binary Classification with the MultiModalPredictor"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#data-preprocessing-1",children:"Data Preprocessing"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#model-training-1",children:"Model Training"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#model-evaluation-1",children:"Model Evaluation"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://auto.gluon.ai/stable/install.html",children:"Installing AutoGluon"})," with GPU support:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'pip install -U pip\npip install -U setuptools wheel\npip install torch==1.13.1+cu117 torchvision==0.14.1+cu117 --extra-index-url https://download.pytorch.org/whl/cu117\npip install autogluon\n# for visualizations\npip install bokeh==2.0.1"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"sentiment-analysis-for-5-star-ratings",children:"Sentiment Analysis for 5-star Ratings"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Amazon Product Reviews"}),":\nThis is a large crawl of product reviews from Amazon. This dataset contains 82.83 million unique reviews, from around 20 million users."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://cseweb.ucsd.edu/~jmcauley/datasets/amazon_v2/",children:"Justifying recommendations using distantly-labeled reviews and fined-grained aspects"}),"\n",(0,a.jsx)(n.code,{children:"Jianmo Ni"}),", ",(0,a.jsx)(n.code,{children:"Jiacheng Li"}),", ",(0,a.jsx)(n.code,{children:"Julian McAuley"}),"\n",(0,a.jsx)(n.em,{children:"Empirical Methods in Natural Language Processing (EMNLP), 2019"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"!wget https://github.com/willfry01/Amazon-Reviews-Sentiment/raw/master/preprocessed_kindle_review%20.csv -P dataset\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# error importing vowpalwabbit\n!pip install vowpalwabbit==9.4 \n# AttributeError: module 'wandb.sdk' has no attribute 'lib'\n!pip install --force shortuuid==1.0.1\n# AttributeError: module 'dns.rdtypes' has no attribute 'ANY'\n!pip install eventlet==0.33.3\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from autogluon.tabular import TabularDataset, TabularPredictor\nfrom autogluon.multimodal import MultiModalPredictor\nimport matplotlib.pyplot as plt\nimport pandas as pd\nfrom sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay\nimport seaborn as sns\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"SEED = 42\nMODEL_PATH = 'model'\n"})}),"\n",(0,a.jsx)(n.h3,{id:"data-preprocessing",children:"Data Preprocessing"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"data = TabularDataset('dataset/kindle_review.csv')\ndata.head(5)\n"})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Unnamed: 0"}),(0,a.jsx)(n.th,{children:"rating"}),(0,a.jsx)(n.th,{children:"reviewText"}),(0,a.jsx)(n.th,{children:"summary"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"0"}),(0,a.jsx)(n.td,{children:"0"}),(0,a.jsx)(n.td,{children:"5"}),(0,a.jsx)(n.td,{children:"This book was the very first bookmobile book I..."}),(0,a.jsx)(n.td,{children:"50 + years ago..."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"1"}),(0,a.jsx)(n.td,{children:"1"}),(0,a.jsx)(n.td,{children:"1"}),(0,a.jsx)(n.td,{children:"When I read the description for this book, I c..."}),(0,a.jsx)(n.td,{children:"Boring! Boring! Boring!"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"2"}),(0,a.jsx)(n.td,{children:"2"}),(0,a.jsx)(n.td,{children:"5"}),(0,a.jsx)(n.td,{children:"I just had to edit this review. This book is a..."}),(0,a.jsx)(n.td,{children:"Wiggleliscious/new toy ready/!!"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"3"}),(0,a.jsx)(n.td,{children:"3"}),(0,a.jsx)(n.td,{children:"5"}),(0,a.jsx)(n.td,{children:"I don't normally buy 'mystery' novels because ..."}),(0,a.jsx)(n.td,{children:"Very good read."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"4"}),(0,a.jsx)(n.td,{children:"4"}),(0,a.jsx)(n.td,{children:"5"}),(0,a.jsx)(n.td,{children:"This isn't the kind of book I normally read, a..."}),(0,a.jsx)(n.td,{children:"Great Story!"})]})]})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"data['reviewText'].iloc[0]\n# 'This book was the very first bookmobile book I bought when I was in the school book club. I loved the story then and I bet a dollar to a donut I will love it again. If my memory serves, I bought this book in 5th grade. That would have been about 1961. I am looking forward to reliving the memories.'\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# train / test split\nlen(data)*0.8\n# 9600\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"train_data = data.sample(frac=0.8 , random_state=SEED)\ntest_data = data.drop(train_data.index)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"model-training",children:"Model Training"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"nlp_predictor = TabularPredictor(label='rating', path=MODEL_PATH)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# my GPU runs out of VRAM -> deactivate GPU accelleration\nnlp_predictor.fit(train_data, hyperparameters='multimodal', num_cpus='auto', num_gpus=0)\n# AutoGluon infers your prediction problem is: 'multiclass'\n#\t5 unique label values:  [4, 3, 5, 2, 1]\n\n# Fitting CountVectorizer for text features: ['reviewText', 'summary']\n# \t\t\tCountVectorizer fit with vocabulary size = 6873\n\n# Fitting model: WeightedEnsemble_L2 ...\n# \t0.5604\t = Validation score   (accuracy)\n# \t0.24s\t = Training   runtime\n# \t0.0s\t = Validation runtime\n# AutoGluon training complete, total runtime = 409.69s ... Best model: \"WeightedEnsemble_L2\"\n"})}),"\n",(0,a.jsx)(n.h3,{id:"model-evaluation",children:"Model Evaluation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# run test prediction\ntest_rating_from_csv = TabularDataset('dataset/test_rating.csv')\nnlp_predictor.predict(test_rating_from_csv)\n# 0    2\n# 1    4\n# 2    5\n# Name: rating, dtype: int64\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"X_test = test_data.drop(columns=['rating'], axis=1)\ny_test = test_data['rating']\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'y_pred = nlp_predictor.predict(X_test)\nmetrics = nlp_predictor.evaluate_predictions(\n    y_true=y_test, y_pred=y_pred, auxiliary_metrics=True)\n\n# Evaluation: accuracy on test data: 0.5391666666666667\n# Evaluations on test data:\n# {\n#     "accuracy": 0.5391666666666667,\n#     "balanced_accuracy": 0.5208083196216325,\n#     "mcc": 0.4154247244832002\n# }\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"confusion = ConfusionMatrixDisplay(\n    confusion_matrix=confusion_matrix(y_test, y_pred)\n)\n\nconfusion.plot(cmap='viridis')\n\nplt.savefig('assets/Multi-Class_Classification_NLP_10.webp', bbox_inches='tight')\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"AutoML with AutoGluon for Multi-Modal Data",src:t(658818).Z+"",width:"507",height:"432"})}),"\n",(0,a.jsx)(n.h2,{id:"binary-classification-with-the-multimodalpredictor",children:"Binary Classification with the MultiModalPredictor"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# Spam Mails Dataset https://www.kaggle.com/datasets/venky73/spam-mails-dataset\n!wget https://github.com/MSc-AI/SpamEmail/raw/main/spam_ham_dataset.csv -P dataset\n"})}),"\n",(0,a.jsx)(n.h3,{id:"data-preprocessing-1",children:"Data Preprocessing"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"spam_data = TabularDataset('dataset/spam_ham_dataset.csv')\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"spam_data.head(5)\n"})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Unnamed: 0"}),(0,a.jsx)(n.th,{children:"label"}),(0,a.jsx)(n.th,{children:"text"}),(0,a.jsx)(n.th,{children:"label_num"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"0"}),(0,a.jsx)(n.td,{children:"605"}),(0,a.jsx)(n.td,{children:"ham"}),(0,a.jsx)(n.td,{children:"Subject: enron methanol ; meter # : 988291\\nth..."}),(0,a.jsx)(n.td,{children:"0"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"1"}),(0,a.jsx)(n.td,{children:"2349"}),(0,a.jsx)(n.td,{children:"ham"}),(0,a.jsx)(n.td,{children:"Subject: hpl nom for january 9 , 2001\\n( see a..."}),(0,a.jsx)(n.td,{children:"0"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"2"}),(0,a.jsx)(n.td,{children:"3624"}),(0,a.jsx)(n.td,{children:"ham"}),(0,a.jsx)(n.td,{children:"Subject: neon retreat\\nho ho ho , we ' re arou..."}),(0,a.jsx)(n.td,{children:"0"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"3"}),(0,a.jsx)(n.td,{children:"4685"}),(0,a.jsx)(n.td,{children:"spam"}),(0,a.jsx)(n.td,{children:"Subject: photoshop , windows , office . cheap ..."}),(0,a.jsx)(n.td,{children:"1"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"4"}),(0,a.jsx)(n.td,{children:"2030"}),(0,a.jsx)(n.td,{children:"ham"}),(0,a.jsx)(n.td,{children:"Subject: re : indian springs\\nthis deal is to ..."}),(0,a.jsx)(n.td,{children:"0"})]})]})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# drop second label\nspam_data = spam_data.drop(columns=['label_num'], axis=1)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"spam_data['label'].value_counts()\n# ham     3672\n# spam    1499\n# Name: label, dtype: int64\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# train / test split\nspam_train_data = spam_data.sample(frac=0.8 , random_state=SEED)\nspam_test_data = spam_data.drop(spam_train_data.index)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"model-training-1",children:"Model Training"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"mm_predictor = MultiModalPredictor(label='label', path=MODEL_PATH)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"mm_predictor.fit(spam_train_data)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"model-evaluation-1",children:"Model Evaluation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"mm_predictor = MultiModalPredictor.load('model/')\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"model_scoring = mm_predictor.evaluate(spam_test_data, metrics=['acc', 'f1'])\nprint(model_scoring)\n# {'acc': 0.965183752417795, 'f1': 0.9400000000000001}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"test_email1 = \"Hi,\\n We specialize in developing custom software and related applications and we can develop cost effective and high quality software for you. A brief introduction of what we do is given below:\\n Web Design.\\n Web Development\\n Android & IOS App Development.\\n Website Maintenance\\n Digital Marketing\\n Graphics Designing.\\n SEO SMO Adword.\\n We are sincerely looking at the prospect of a mutually beneficial relationship with you and your company and to the opportunities the future may bring.\\n Regards\"\ntest_email2 = \"Tell them I hate them. Is the Space Pope reptilian!? Tell her she looks thin. Hello, little man. I will destroy you! I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours. And those jerks at Social Security stopped sending me checks. Now 'I' have to pay them'!\"\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"mm_predictor.predict({'text':[test_email1,test_email2]})\n# array(['spam', 'ham'], dtype=object)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"print(mm_predictor.class_labels)\nmm_predictor.predict_proba({'text':[test_email1,test_email2]})\n# ['ham' 'spam']\n# array([[0.02339679, 0.97660315],\n#        [0.91861194, 0.08138806]], dtype=float32)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>d});var a=t(667294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=i,m=u["".concat(o,".").concat(p)]||u[p]||c[p]||r;return t?a.createElement(m,l(l({ref:n},h),{},{components:t})):a.createElement(m,l({ref:n},h))}));h.displayName="MDXCreateElement"},658818:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Multi-Class_Classification_NLP_10-286c3fe2a48cc3d65494c119732753d1.webp"},343937:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-a15d7463fa71afd7563b41d830022879.jpg"}}]);