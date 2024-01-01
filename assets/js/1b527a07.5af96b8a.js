"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[37239],{626502:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=i(785893),n=i(603905);const s={sidebar_position:8070,slug:"2019-06-20",title:"User Login with Twitter for Discourse",authors:"mpolinowski",tags:["LINUX","Discourse"]},o=void 0,c={id:"DevOps/Provisioning/2019-06-19--using-twitter-auth-in-discourse/index",title:"User Login with Twitter for Discourse",description:"Taipa, Macau",source:"@site/docs/DevOps/Provisioning/2019-06-19--using-twitter-auth-in-discourse/index.mdx",sourceDirName:"DevOps/Provisioning/2019-06-19--using-twitter-auth-in-discourse",slug:"/DevOps/Provisioning/2019-06-19--using-twitter-auth-in-discourse/2019-06-20",permalink:"/docs/DevOps/Provisioning/2019-06-19--using-twitter-auth-in-discourse/2019-06-20",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2019-06-19--using-twitter-auth-in-discourse/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Discourse",permalink:"/docs/tags/discourse"}],version:"current",sidebarPosition:8070,frontMatter:{sidebar_position:8070,slug:"2019-06-20",title:"User Login with Twitter for Discourse",authors:"mpolinowski",tags:["LINUX","Discourse"]},sidebar:"tutorialSidebar",previous:{title:"User Login with Github for Discourse",permalink:"/docs/DevOps/Provisioning/2019-06-20--using-github-auth-in-discourse/2019-06-19"},next:{title:"User Login with Google OAuth2 for Discourse",permalink:"/docs/DevOps/Provisioning/2019-06-18--using-oauth2-in-discourse/2019-06-18"}},a={},d=[{value:"Create a Twitter Developer Account",id:"create-a-twitter-developer-account",level:2},{value:"Add a Authentication App",id:"add-a-authentication-app",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Taipa, Macau",src:i(70899).Z+"",width:"1500",height:"549"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#create-a-twitter-developer-account",children:"Create a Twitter Developer Account"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#add-a-authentication-app",children:"Add a Authentication App"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"create-a-twitter-developer-account",children:"Create a Twitter Developer Account"}),"\n",(0,r.jsxs)(t.p,{children:["Go to ",(0,r.jsx)(t.a,{href:"https://developer.twitter.com/en/apps",children:"Twitter Developer"})," and sign in with your Twitter account and apply for a developer account:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Using Twitter Login in Discourse",src:i(78276).Z+"",width:"1040",height:"561"})}),"\n",(0,r.jsx)(t.h2,{id:"add-a-authentication-app",children:"Add a Authentication App"}),"\n",(0,r.jsx)(t.p,{children:"Click the Create An App button:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Using Twitter Login in Discourse",src:i(326528).Z+"",width:"855",height:"207"})}),"\n",(0,r.jsx)(t.p,{children:"Enter a name and description for your forum and enter the address in the Website Url field:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Using Twitter Login in Discourse",src:i(881785).Z+"",width:"858",height:"690"})}),"\n",(0,r.jsxs)(t.p,{children:["Put the check to Enable Sign in with Twitter. Enter ",(0,r.jsx)(t.code,{children:"https://forum.instar.com/auth/twitter/callback"})," in the Callback URLs field. Enter the URLs for your ",(0,r.jsx)(t.code,{children:"tos"})," and ",(0,r.jsx)(t.code,{children:"policy"})," stuff. If you have an organization, also fill in the fields related to it:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Using Twitter Login in Discourse",src:i(622209).Z+"",width:"855",height:"745"})}),"\n",(0,r.jsxs)(t.p,{children:["Go to the Permissions tab, choose ",(0,r.jsx)(t.code,{children:"Read Only"}),", and ",(0,r.jsx)(t.code,{children:"Request email addresses from users"}),", then click on ",(0,r.jsx)(t.strong,{children:"Save"}),":"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Using Twitter Login in Discourse",src:i(814423).Z+"",width:"850",height:"573"})}),"\n",(0,r.jsx)(t.p,{children:"Click on the Keys and tokens tab:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Using Twitter Login in Discourse",src:i(444473).Z+"",width:"857",height:"487"})}),"\n",(0,r.jsx)(t.p,{children:"Copy the API key and generate the API secret and paste them in the twitter_consumer_key and twitter_consumer_secret settings in the Login section of your Discourse site (/admin/site_settings/category/login):"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Using Twitter Login in Discourse",src:i(528151).Z+"",width:"952",height:"381"})})]})}function l(e={}){const{wrapper:t}={...(0,n.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},603905:(e,t,i)=>{i.d(t,{ah:()=>d});var r=i(667294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var a=r.createContext({}),d=function(e){var t=r.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=d(i),p=n,g=h["".concat(a,".").concat(p)]||h[p]||u[p]||s;return i?r.createElement(g,o(o({ref:t},l),{},{components:i})):r.createElement(g,o({ref:t},l))}));l.displayName="MDXCreateElement"},78276:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/Twitter_Auth_for_Discourse_01-ec5798c0907dc46d3d2859101299fe5c.png"},326528:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/Twitter_Auth_for_Discourse_02-46a3a6fae53808e458b4bfcd87354af1.png"},881785:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/Twitter_Auth_for_Discourse_03-30d452df1f71479b277f5b3bbec513f0.png"},622209:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/Twitter_Auth_for_Discourse_04-026e7957970c1a979135fe74a0ce554b.png"},814423:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/Twitter_Auth_for_Discourse_05-f6575ecf286fcef6ea28667c4dbf3901.png"},444473:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/Twitter_Auth_for_Discourse_06-4a7e28f5c48e183a1c17cba580bd340c.png"},528151:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/Twitter_Auth_for_Discourse_07-a9d9179962cc1615d212bb57a70f5663.png"},70899:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-cc02e276d2a0ccc85c868ffc5c0550b2.jpg"}}]);