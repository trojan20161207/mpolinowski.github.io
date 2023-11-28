"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[21997],{588436:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(785893),a=i(603905);const r={sidebar_position:4590,slug:"2023-07-12",title:"Serving your SciKit Image Model as a Prediction API",authors:"mpolinowski",tags:["Python","Machine Learning","SKlearn","Flask"],description:"Use Flask, Docker to Deploy your ML Model to the Web"},s="Serving your SciKit Learn Model as a Prediction API",l={id:"IoT-and-Machine-Learning/AIOps/2023-07-12-scikit-image-model-deployment-part2/index",title:"Serving your SciKit Image Model as a Prediction API",description:"Use Flask, Docker to Deploy your ML Model to the Web",source:"@site/docs/IoT-and-Machine-Learning/AIOps/2023-07-12-scikit-image-model-deployment-part2/index.md",sourceDirName:"IoT-and-Machine-Learning/AIOps/2023-07-12-scikit-image-model-deployment-part2",slug:"/IoT-and-Machine-Learning/AIOps/2023-07-12-scikit-image-model-deployment-part2/2023-07-12",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-07-12-scikit-image-model-deployment-part2/2023-07-12",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/AIOps/2023-07-12-scikit-image-model-deployment-part2/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"SKlearn",permalink:"/docs/tags/s-klearn"},{label:"Flask",permalink:"/docs/tags/flask"}],version:"current",sidebarPosition:4590,frontMatter:{sidebar_position:4590,slug:"2023-07-12",title:"Serving your SciKit Image Model as a Prediction API",authors:"mpolinowski",tags:["Python","Machine Learning","SKlearn","Flask"],description:"Use Flask, Docker to Deploy your ML Model to the Web"},sidebar:"tutorialSidebar",previous:{title:"Tensorflow Serving API",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-08-19-tensorflow-serving-api/2023-08-19"},next:{title:"Serving your SciKit Image Model as a Prediction API",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-07-10-scikit-image-model-deployment-part1/2023-07-10"}},o={},d=[{value:"Prediction Pipeline",id:"prediction-pipeline",level:2},{value:"Image Resizing",id:"image-resizing",level:2},{value:"Feature Extraction",id:"feature-extraction",level:2},{value:"Model Prediction",id:"model-prediction",level:2},{value:"Building the Prediction Pipeline",id:"building-the-prediction-pipeline",level:2},{value:"Docker Deployment",id:"docker-deployment",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"TST, HongKong",src:i(48917).Z+"",width:"1500",height:"512"})}),"\n",(0,t.jsx)(n.h1,{id:"serving-your-scikit-learn-model-as-a-prediction-api",children:"Serving your SciKit Learn Model as a Prediction API"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/mpolinowski/i-know-flowers",children:"Github Repository"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#serving-your-scikit-learn-model-as-a-prediction-api",children:"Serving your SciKit Learn Model as a Prediction API"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#prediction-pipeline",children:"Prediction Pipeline"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#image-resizing",children:"Image Resizing"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#feature-extraction",children:"Feature Extraction"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#model-prediction",children:"Model Prediction"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#building-the-prediction-pipeline",children:"Building the Prediction Pipeline"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#docker-deployment",children:"Docker Deployment"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prediction-pipeline",children:"Prediction Pipeline"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import matplotlib.pyplot as plt\nimport numpy as np\nimport os\nimport pandas as pd\nimport pickle\nimport scipy as sc\n\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.base import BaseEstimator, TransformerMixin\nfrom skimage import io, color, transform, feature\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# import test image\n# test_img = io.imread('assets/lion.jpg', as_gray=True)\ntest_img = io.imread('assets/human.jpg', as_gray=True)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"image-resizing",children:"Image Resizing"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# the model was trained with 80x80 px images => resize inputs accordingly\ntest_img_resized = (transform.resize(test_img, (80, 80)) * 255).astype(np.uint8)\nplt.imshow(test_img_resized, cmap='gray')\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ScikitImage Prediction Pipeline",src:i(235937).Z+"",width:"416",height:"416"})}),"\n",(0,t.jsx)(n.h2,{id:"feature-extraction",children:"Feature Extraction"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# extract features with optimized hyper parameters\nfeature_vector = feature.hog(\n        test_img_resized,\n        orientations=11,\n        pixels_per_cell=(8, 8),\n        cells_per_block=(2, 2)\n).reshape(1, -1)\n\n# ValueError: Expected 2D array, got 1D array instead:\n# Reshape your data either using array.reshape(-1, 1) if your data has a single feature\n# or array.reshape(1, -1) if it contains a single sample.\n"})}),"\n",(0,t.jsx)(n.h2,{id:"model-prediction",children:"Model Prediction"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"normalizer = pickle.load(open('model/animal_model_deployment_scaler.pkl', 'rb'))\nmodel = pickle.load(open('model/animal_model_deployment.pkl', 'rb'))\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"model.get_params()\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"feature_vector_scaled = normalizer.transform(feature_vector)\nmodel.predict(feature_vector_scaled)\n# array(['human'], dtype='<U8')\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"decision_values = model.decision_function(feature_vector_scaled)\nz_scores = sc.stats.zscore(decision_values.flatten())\nprobabilities = (sc.special.softmax(z_scores) * 100).round(2)\n\nlabels = model.classes_\n\nprobabilities_df = pd.DataFrame(probabilities, columns=['probability [%]'], index=labels)\nprobabilities_df.sort_values(by='probability [%]', ascending=False)[:5]\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Top 5 Predictions"}),":"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"probability [%]"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"human"}),(0,t.jsx)(n.td,{children:"44.86"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rabbit"}),(0,t.jsx)(n.td,{children:"6.42"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pigeon"}),(0,t.jsx)(n.td,{children:"6.30"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tiger"}),(0,t.jsx)(n.td,{children:"5.64"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"eagle"}),(0,t.jsx)(n.td,{children:"5.22"})]})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# https://stackoverflow.com/questions/52644035/how-to-show-a-pandas-dataframe-into-a-existing-flask-html-table\nprobabilities_dict = probabilities_df.sort_values(by='probability [%]', ascending=False)[:5].to_dict()\nprobabilities_dict.values()\n\n# dict_values([{'human': 44.86, 'tiger': 6.42, 'rabbit': 6.3, 'monkey': 5.64, 'eagle': 5.22}])\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"plt.figure(figsize=(12,5))\nplt.barh(labels, probabilities)\nplt.ylabel('Target Classes')\nplt.xlabel('Probability [%]')\nplt.title('Prediction Probability')\nplt.grid()\nplt.savefig('assets/Scikit_Image_Model_Deployment_09.webp')\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ScikitImage Prediction Pipeline",src:i(660879).Z+"",width:"1200",height:"500"})}),"\n",(0,t.jsx)(n.h2,{id:"building-the-prediction-pipeline",children:"Building the Prediction Pipeline"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def prediction_pipeline(img_path, normalizer, model):\n    img = io.imread(img_path, as_gray=True)\n    img_resized = (transform.resize(img, (80, 80)) * 255).astype(np.uint8)\n    \n    feature_vector = feature.hog(\n        img_resized,\n        orientations=11,\n        pixels_per_cell=(8, 8),\n        cells_per_block=(2, 2)\n    ).reshape(1, -1)\n    \n    feature_vector_scaled = normalizer.transform(feature_vector)\n    model.predict(feature_vector_scaled)\n    \n    decision_values = model.decision_function(feature_vector_scaled)\n    z_scores = sc.stats.zscore(decision_values.flatten())\n    probabilities = (sc.special.softmax(z_scores) * 100).round(2)\n    \n    labels = model.classes_\n\n    probabilities_df = pd.DataFrame(probabilities, columns=['probability [%]'], index=labels)\n    top5predictions = probabilities_df.sort_values(\n        by='probability [%]', ascending=False\n    )[:5].to_dict().values()\n    \n    return top5predictions\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# test pipeline\nprediction_pipeline('assets/human.jpg', normalizer, model)\n\n# dict_values([{'human': 44.86, 'tiger': 6.42, 'rabbit': 6.3, 'monkey': 5.64, 'eagle': 5.22}])\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"results = prediction_pipeline('assets/human.jpg', normalizer, model)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"list(list(results)[0].items())[0]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"docker-deployment",children:"Docker Deployment"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"app.py"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"from flask import Flask, render_template, request, redirect, url_for\nimport os\nimport pickle\nimport numpy as np\nimport pandas as pd\nimport scipy as sc\nfrom sklearn.base import BaseEstimator, TransformerMixin\nfrom skimage import io, color, transform, feature\n\nPORT = 3000\n\nBASE_PATH = os.getcwd()\nUPLOAD_PATH = os.path.join(BASE_PATH,'static/uploads/')\nMODELS_PATH = os.path.join(BASE_PATH,'static/models/')\n\nLIVE_MODEL = os.path.join(MODELS_PATH,'animal_model_deployment.pkl')\nLIVE_SCALER = os.path.join(MODELS_PATH,'animal_model_deployment_scaler.pkl')\n\nmodel = pickle.load(open(LIVE_MODEL,'rb'))\nnormalizer = pickle.load(open(LIVE_SCALER,'rb'))\n\napp = Flask(__name__)\n\n\n\n@app.errorhandler(404)\ndef error404(error):\n    error_title = \"404 Not Found\"\n    error_message = \"The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist.\"\n    return render_template(\"error.html\", title=error_title, message=error_message)\n\n@app.errorhandler(405)\ndef error405(error):\n    error_title = \"405 Method Not Allowed\"\n    error_message = 'The request method is known by the server but is not supported by the target resource.'\n    return render_template(\"error.html\", title=error_title, message=error_message)\n\n@app.errorhandler(500)\ndef error500(error):\n    error_title = \"500 Internal Server Error\"\n    error_message='This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.'\n    return render_template(\"error.html\", title=error_title, message=error_message)\n\n\n\n@app.route('/', methods=['GET','POST'])\ndef index():\n    # upload file\n    if request.method == \"POST\":\n        upload_file = request.files['image']\n        extension = upload_file.filename.split('.')[-1]\n        if extension.lower() in ['png', 'jpg', 'jpeg']:\n            file_path = os.path.join(UPLOAD_PATH,upload_file.filename)\n            upload_file.save(file_path)\n        else:\n            print('ERROR :: File extension not allowed,', extension)\n            return render_template('upload.html', fileupload=False, extexception=True, extension=extension)\n        print('INFO :: File uploaded', upload_file.filename)\n        # run prediction\n        results = prediction_pipeline(file_path, normalizer, model)\n        img_width = calc_width(file_path)\n        print('INFO :: Prediction results', results)\n        return render_template(\n            'upload.html',\n            fileupload=True,\n            extexception=False,\n            image='/static/uploads/'+upload_file.filename,\n            data=list(list(results)[0].items()),\n            width=img_width\n        )\n    else:\n        return render_template('upload.html', fileupload=False, extexception=False)\n\n\n\n\ndef prediction_pipeline(img_path, normalizer, model):\n    img = io.imread(img_path, as_gray=True)\n    img_resized = (transform.resize(img, (80, 80)) * 255).astype(np.uint8)\n    \n    feature_vector = feature.hog(\n        img_resized,\n        orientations=11,\n        pixels_per_cell=(8, 8),\n        cells_per_block=(2, 2)\n    ).reshape(1, -1)\n    \n    feature_vector_scaled = normalizer.transform(feature_vector)\n    model.predict(feature_vector_scaled)\n    \n    decision_values = model.decision_function(feature_vector_scaled)\n    z_scores = sc.stats.zscore(decision_values.flatten())\n    probabilities = (sc.special.softmax(z_scores) * 100).round(2)\n    \n    labels = model.classes_\n\n    probabilities_df = pd.DataFrame(probabilities, columns=['probability [%]'], index=labels)\n    top5predictions = probabilities_df.sort_values(\n        by='probability [%]', ascending=False\n    )[:5].to_dict().values()\n    \n    return top5predictions\n\n\n@app.route('/about/')\ndef about():\n    return render_template('about.html')\n\n\ndef calc_width(path):\n    img = io.imread(path)\n    height,width,_ = img.shape\n    aspect_ratio = width/height\n    \n    max_height = 335\n    max_width = 360\n    optimal_width =  max_height * aspect_ratio\n\n    if optimal_width <= max_width:\n        return optimal_width\n    else:\n        return max_width\n\n\nif __name__ == 'main':\n    app.run(host=\"localhost\", port=PORT, debug=True)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"templates/index.html"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n    <head>\n        <title>Image Classification</title>\n        <link rel="stylesheet" href="/static/css/bootstrap.min.css">\n        <link rel="icon" href="/static/favicon.ico">\n    </head>\n    <body>\n        \x3c!-- NAVBAR --\x3e\n        <nav class="navbar bg-primary border-bottom border-bottom-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">\n            <div class="container-fluid">\n                <div class="container">\n                    <a class="navbar-brand" href="/">\n                      <img src="/static/IN-logo.svg" alt="INSTAR Image Classifier" width="150" height="50">\n                    </a>\n                  </div>                \n                \x3c!-- <a class="navbar-brand link-light" href="/">Frontend</a> --\x3e\n                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">\n                    <span class="navbar-toggler-icon"></span>\n                </button>\n                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">\n                    <div class="navbar-nav">\n                        <a class="nav-link link-light" aria-current="page" href="/" >Home</a>\n                        <a class="nav-link link-light" href="/about/">About</a>\n                    </div>\n                </div>\n            </div>\n            </nav>\n            \x3c!-- NAVBAR --\x3e\n            \x3c!-- UPLOAD --\x3e\n            <div class="container mt-3">\n                <h4>Image Classification</h4>\n            </div>\n\n            {% block body %}\n\n            {% endblock %}\n            \x3c!-- UPLOAD --\x3e\n\n            <script src="/static/js/bootstrap.min.js"><\/script>\n            <script src="/static/js/bootstrap.bundle.min.js"><\/script>\n            <script src="/static/js/jquery-3.7.0.min.js"><\/script>\n    </body>\n</html>\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"templates/upload.html"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'{% extends \'index.html\' %}\n\n{% block body %}\n\n{% if extexception %}\n\n<div class="container mt-2">\n    <div class="card text-light bg-danger mb-3">\n        <div class="card-header">Upload Failed!</div>\n        <div class="card-body">\n          <h5 class="card-title">File Extension Not Allowed: {{ extension }}</h5>\n          <p class="card-text">Upload image files with <span class="text-info-emphasis">jpg</span>, <span class="text-info-emphasis">png</span> or <span class="text-info-emphasis">jpeg</span> extension</p>\n        </div>\n      </div>      \n</div>\n\n{% endif %}\n\n<div class="container mt-4">\n    <div class="card text-center">\n        <div class="card-header">\n            <ul class="nav nav-tabs card-header-tabs">\n                <li class="nav-item">\n                    <a class="nav-link active" id="upload-image" aria-current="true" href="#">Upload Image</a>\n                </li>\n            </ul>\n        </div>\n        <div class="card-body p-0">\n            <h5 class="card-title pt-3">Upload image files with <code>jpg</code>, <code>png</code> or <code>jpeg</code> extension</h5>\n            <form action="#" method="POST" enctype="multipart/form-data">\n                <p>\n                    <input type="file" name="image" class="btn btn-light" requiered></input>\n                </p>\n                <p>\n                    <input type="submit" value="submit" class="btn btn-primary"></input>\n                </p>\n                <div class="card-footer">\n                    <p class="card-text">\n                        <small class="text-body-secondary">Available class labels are:\n                        <code>cow,duck,rabbit,monkey,sheep,cat,bear,human,wolf,chicken,eagle,elephant,mouse,pigeon,lion,deer,panda,tiger,dog</code></small>\n                    </p>\n                </div>\n                </ul>\n            </form>\n        </div>\n    </div>\n</div>\n\n{% if fileupload %}\n\n<div class="container mt-2">\n    <div class="card mb-3">\n        <div class="row g-0">\n            <div class="col-md-4">\n                <img src="{{ image }}" width="{{ width }}" height="335px" />\n            </div>\n            <div class="col-md-8 mt-2">\n                <div class="card-body">\n                    <h5 class="card-title">Top5 prediction results for the uploaded image:</h5>\n                    <table class="table">\n                        <thead>\n                            <tr>\n                                <th scope="col">Rank</th>\n                                <th scope="col">Label</th>\n                                <th scope="col">Confidence [%]</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            {% for name, score in data %}\n                            <tr>\n                                <th scope="row">{{loop.index}}</th>\n                                <td>{{name}}</td>\n                                <td>{{score}}</td>\n                            </tr>\n                            {% endfor %}\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n{% endif %}\n\n{% endblock %}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"templates/error.html"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'{% extends \'index.html\' %}\n\n{% block body %}\n\n<div class="container">\n    <div class="card bg-danger text-light mb-3">\n        <div class="card-header">ERROR</div>\n        <div class="card-body">\n        <h5 class="card-title">{{ title }}</h5>\n        <p class="card-text">{{ message }}</p>\n        </div>\n    </div>\n</div>\n\n{% endblock %}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Dockerfile"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dockerfile",children:'# base image to use\nFROM python:3.11-slim-bookworm\n# dir name inside the container used for your app\nWORKDIR /opt/python_app\n# copy all files into the work dir\nCOPY . .\n# install python dependencies\nRUN pip install --upgrade pip\nRUN pip install -r requirements.txt\n# execute the app when container starts\nEXPOSE 5000/tcp\n# CMD [ "python3", "-m" , "flask", "--app", "app", "run", "--host=0.0.0.0"]\nCMD ["flask", "--app", "app", "run", "--host=0.0.0.0"]\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},603905:(e,n,i)=>{i.d(n,{ah:()=>d});var t=i(667294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=t.createContext({}),d=function(e){var n=t.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):s(s({},n),e)),i},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(i),h=a,g=m["".concat(o,".").concat(h)]||m[h]||c[h]||r;return i?t.createElement(g,s(s({ref:n},p),{},{components:i})):t.createElement(g,s({ref:n},p))}));p.displayName="MDXCreateElement"},235937:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Scikit_Image_Model_Deployment_08-dc10dfb8bd62222a3584d7698a27d1f1.webp"},660879:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Scikit_Image_Model_Deployment_09-a7bb5ef61db1d4a8c6a698ead8c41159.webp"},48917:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-c77de99ac2aaaf4bfc10d6424f4476da.jpg"}}]);