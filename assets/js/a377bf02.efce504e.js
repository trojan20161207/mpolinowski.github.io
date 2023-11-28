"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[38592],{623300:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=n(785893),i=n(603905);const a={sidebar_position:9950,slug:"2020-08-04",title:"Working with Gitlab",authors:"mpolinowski",tags:["LINUX","Gitlab"]},s=void 0,o={id:"DevOps/GitOps/2020-08-04--working-with-gitlab/index",title:"Working with Gitlab",description:"Guangzhou, China",source:"@site/docs/DevOps/GitOps/2020-08-04--working-with-gitlab/index.md",sourceDirName:"DevOps/GitOps/2020-08-04--working-with-gitlab",slug:"/DevOps/GitOps/2020-08-04--working-with-gitlab/2020-08-04",permalink:"/docs/DevOps/GitOps/2020-08-04--working-with-gitlab/2020-08-04",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/GitOps/2020-08-04--working-with-gitlab/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Gitlab",permalink:"/docs/tags/gitlab"}],version:"current",sidebarPosition:9950,frontMatter:{sidebar_position:9950,slug:"2020-08-04",title:"Working with Gitlab",authors:"mpolinowski",tags:["LINUX","Gitlab"]},sidebar:"tutorialSidebar",previous:{title:"Gatsby Build Gitlab CI Pipeline",permalink:"/docs/DevOps/GitOps/2021-02-25-gatsby-build-gitlab-pipeline/2021-02-25"},next:{title:"Gitlab as Docker Registry",permalink:"/docs/DevOps/GitOps/2020-08-03--gitlab-as-docker-registry/2020-08-03"}},l={},c=[{value:"Pulling Images from a Private Docker Registry",id:"pulling-images-from-a-private-docker-registry",level:2},{value:"Setting a Pipline Tigger",id:"setting-a-pipline-tigger",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Guangzhou, China",src:n(626909).Z+"",width:"1500",height:"625"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#pulling-images-from-a-private-docker-registry",children:"Pulling Images from a Private Docker Registry"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#setting-a-pipline-tigger",children:"Setting a Pipline Tigger"})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"pulling-images-from-a-private-docker-registry",children:"Pulling Images from a Private Docker Registry"}),"\n",(0,t.jsx)(r.p,{children:"Start by logging in with your Gitlab account:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"docker login -u me@email-address.com gitlab.example.com:34578\n"})}),"\n",(0,t.jsx)(r.p,{children:"And type in your Gitlab password."}),"\n",(0,t.jsxs)(r.p,{children:["Now enter your repository and go to ",(0,t.jsx)(r.code,{children:"Packages&Registries"})," / ",(0,t.jsx)(r.code,{children:"Container Registry"})," and copy the Image URL:"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Working with Gitlab",src:n(946122).Z+"",width:"1028",height:"287"})}),"\n",(0,t.jsx)(r.p,{children:"Now you are ready to pull the image:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"docker pull gitlab.example.com:34578/wiki/wiki-instar-en-docker:latest\n"})}),"\n",(0,t.jsx)(r.h2,{id:"setting-a-pipline-tigger",children:"Setting a Pipline Tigger"}),"\n",(0,t.jsx)(r.p,{children:"I want to automatically start a Docker build when new build artifacts were generated in a different repository. The Docker pipeline should than take this new code, wrap it into a new container image and push it into the Docker Registry."}),"\n",(0,t.jsxs)(r.p,{children:["The container I am using is a Go Fiber Webserver that should serve the static HTML code generated by a Gatsby.js repository (in form of build artifacts from a CI pipeline). I am using a variation of this ",(0,t.jsx)(r.a,{href:"https://github.com/mpolinowski/boilerplate",children:"Go Fiber boilerplate"}),", build the Go Fiber webserver and load/unzip the artifacts into the public directory:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-Dockerfile",children:'# Building the binary of the App\r\nFROM golang:1.15 AS build\r\n\r\n# Project labels\r\nLABEL maintainer="m.polinowski@instar.com"\r\n\r\n# `wiki` should be replaced with your project name\r\nWORKDIR /go/src/wiki\r\n\r\n# Copy all the Code and stuff to compile everything\r\nCOPY . .\r\nRUN curl -L --header "PRIVATE-TOKEN:MYPRIVATETOKEN" "https://my.gitlab.com/api/v4/projects/wiki%2Fwiki_de/jobs/artifacts/master/download?job=page-render" >> ./temp/artifacts.zip\r\nRUN apt update && apt install -y unzip && unzip -qq ./temp/artifacts.zip -d ./static\r\n\r\n# Downloads all the dependencies in advance (could be left out, but it\'s more clear this way)\r\nRUN go mod download\r\n\r\n# Builds the application as a staticly linked one, to allow it to run on alpine\r\nRUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -o app .\r\n\r\n# Moving the binary to the \'final Image\' to make it smaller\r\nFROM alpine:latest\r\n\r\nWORKDIR /app\r\n\r\n# Create the `public` dir and copy all the assets into it\r\nRUN mkdir ./static\r\nCOPY --from=build /go/src/wiki/static ./static\r\n\r\n# `wiki` should be replaced here as well\r\nCOPY --from=build /go/src/wiki/app .\r\n\r\n# Exposes port 8888 because our program listens on that port\r\nEXPOSE 8888\r\n\r\n# CMD ["./app"]\r\nRUN chmod +x ./static/run.sh\r\nCMD ["ash", "./static/run.sh"]\n'})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"run.sh"})," file just starts the web server for me once the container is run:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"#!/bin/ash\r\n./app\n"})}),"\n",(0,t.jsxs)(r.p,{children:["To add the trigger enter the repository and go to ",(0,t.jsx)(r.strong,{children:"Settings"})," / ",(0,t.jsx)(r.strong,{children:"CI/CD"})," and click to add a new trigger:"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Working with Gitlab",src:n(682720).Z+"",width:"970",height:"498"})}),"\n",(0,t.jsx)(r.p,{children:"In the following examples, you can see the exact API call you need to make in order to rebuild a specific ref (branch or tag) with a trigger token."}),"\n",(0,t.jsx)(r.p,{children:"All you need to do is replace the TOKEN and REF_NAME with the trigger token and the branch or tag name respectively."}),"\n",(0,t.jsx)(r.p,{children:"Use cURL\r\nCopy one of the tokens above, set your branch or tag name, and that reference will be rebuilt."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl -X POST \\\r\n     -F token=TOKEN \\\r\n     -F ref=REF_NAME \\\r\n     https://my.gitlab.com/api/v4/projects/76/trigger/pipeline\n"})}),"\n",(0,t.jsxs)(r.p,{children:["The value of ",(0,t.jsx)(r.strong,{children:"TOKEN"})," is the value token that is displayed next to your new generated trigger (see screenshot above ",(0,t.jsx)(r.code,{children:"9b7b..."}),"). And the ",(0,t.jsx)(r.strong,{children:"REF_NAME"})," is in my case the ",(0,t.jsx)(r.code,{children:"master"})," branch. Note that the project that you want to trigger is defined by the number ",(0,t.jsx)(r.code,{children:"76"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["I can now add those lines to my ",(0,t.jsx)(r.code,{children:".gitlab-ci.yml"})," file in the Gatsby repository (",(0,t.jsx)(r.strong,{children:"NOT the repository for the container"}),"):"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yml",children:'image: node:latest\r\n\r\ncache:\r\n  paths:\r\n    - node_modules/\r\n    - .cache/\r\n    - public/\r\n\r\nstages:\r\n  - build\r\n  - deploy\r\n\r\npage-render:\r\n  stage: build\r\n  script:\r\n    - npm install\r\n    - npm run pre-build\r\n    - ./node_modules/.bin/gatsby build --prefix-paths\r\n  artifacts:\r\n    expire_in: 1 days\r\n    paths:\r\n      - public\r\n  only:\r\n    - master\r\n  tags: [build]\r\n\r\ncontainerize:\r\n  stage: deploy\r\n  script:\r\n    - curl --request POST --form "token=9b7b..." --form ref=master https://my.gitlab.com/api/v4/projects/76/trigger/pipeline\n'})}),"\n",(0,t.jsx)(r.p,{children:"This file will take my Gatsby source code (when committed to the MASTER branch) and run a Gatsby build on it. Once the build is done the deploy stage will be started and trigger the Docker pipeline:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yml",children:'image: docker:19.03.12-dind\r\n\r\nvariables:\r\n  DOCKER_HOST: tcp://docker:2375\r\n  DOCKER_TLS_CERTDIR: ""\r\n\r\nservices:\r\n  - name: docker:19.03.12-dind\r\n    entrypoint: ["env", "-u", "DOCKER_HOST"]\r\n    command: ["dockerd-entrypoint.sh"]\r\n\r\n\r\nstages:\r\n- build\r\n# - test\r\n- release\r\n\r\nvariables:\r\n  TEST_IMAGE: my.gitlab.com:12345/wiki/wiki_de_container:$CI_COMMIT_REF_NAME\r\n  RELEASE_IMAGE: my.gitlab.com:12345/wiki/wiki_de_container:latest\r\n\r\nbefore_script:\r\n  - docker login -u gitlab-ci-token -p $CI_JOB_TOKEN my.gitlab.com:12345\r\n\r\nbuild:\r\n  stage: build\r\n  script:\r\n    - docker build --pull -t $TEST_IMAGE .\r\n    - docker push $TEST_IMAGE\r\n\r\n# test:\r\n#   stage: test\r\n#     - docker pull $TEST_IMAGE\r\n#     - docker run $TEST_IMAGE npm test\r\n\r\nrelease:\r\n  stage: release\r\n  script:\r\n    - docker pull $TEST_IMAGE\r\n    - docker tag $TEST_IMAGE $RELEASE_IMAGE\r\n    - docker push $RELEASE_IMAGE\r\n  only:\r\n    - master\r\n\n'})}),"\n",(0,t.jsx)(r.p,{children:"Once the pipeline finished you will be able to pull your fresh Docker images:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"docker pull my.gitlab.com:12345/wiki/wiki_de_container\n"})})]})}function p(e={}){const{wrapper:r}={...(0,i.ah)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},603905:(e,r,n)=>{n.d(r,{ah:()=>c});var t=n(667294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(n),g=i,u=h["".concat(l,".").concat(g)]||h[g]||d[g]||a;return n?t.createElement(u,s(s({ref:r},p),{},{components:n})):t.createElement(u,s({ref:r},p))}));p.displayName="MDXCreateElement"},946122:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/Working_with_Gitlab_01-5ec4c8e52f37785d26d20f268519a25c.png"},682720:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/Working_with_Gitlab_02-57b7b16c17c180c17e0b7e58065f6852.png"},626909:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-3c682f7dbaf3c13bccb0cad63672e020.jpg"}}]);