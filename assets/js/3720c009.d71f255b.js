"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[13751],{406601:(t,e,s)=>{s.r(e),s.d(e,{default:()=>h});s(667294);var a=s(386010),r=s(75320),l=s(699676),n=s(575706),i=s(515818),c=s(971047),o=s(764325),g=s(785893);function u(t){let{title:e}=t;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.d,{title:e}),(0,g.jsx)(c.Z,{tag:"doc_tags_list"})]})}function d(t){let{tags:e,title:s}=t;return(0,g.jsx)(r.FG,{className:(0,a.Z)(l.k.page.docsTagsListPage),children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,g.jsx)(o.Z,{as:"h1",children:s}),(0,g.jsx)(i.Z,{tags:e})]})})})})}function h(t){const e=(0,n.M)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{...t,title:e}),(0,g.jsx)(d,{...t,title:e})]})}},188529:(t,e,s)=>{s.d(e,{Z:()=>i});s(667294);var a=s(386010),r=s(583699);const l={tag:"tag_QDqo",tagRegular:"tagRegular_RTiO",tagWithCount:"tagWithCount_mElv"};var n=s(785893);function i(t){let{permalink:e,label:s,count:i}=t;return(0,n.jsxs)(r.Z,{href:e,className:(0,a.Z)(l.tag,i?l.tagWithCount:l.tagRegular),children:[s,i&&(0,n.jsx)("span",{children:i})]})}},515818:(t,e,s)=>{s.d(e,{Z:()=>o});s(667294);var a=s(575706),r=s(188529),l=s(764325);const n={tag:"tag_tbrL"};var i=s(785893);function c(t){let{letterEntry:e}=t;return(0,i.jsxs)("article",{children:[(0,i.jsx)(l.Z,{as:"h2",id:e.letter,children:e.letter}),(0,i.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,i.jsx)("li",{className:n.tag,children:(0,i.jsx)(r.Z,{...t})},t.permalink)))}),(0,i.jsx)("hr",{})]})}function o(t){let{tags:e}=t;const s=(0,a.P)(e);return(0,i.jsx)("section",{className:"margin-vert--lg",children:s.map((t=>(0,i.jsx)(c,{letterEntry:t},t.letter)))})}},575706:(t,e,s)=>{s.d(e,{M:()=>r,P:()=>l});var a=s(797325);const r=()=>(0,a.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function l(t){const e={};return Object.values(t).forEach((t=>{const s=function(t){return t[0].toUpperCase()}(t.label);e[s]??=[],e[s].push(t)})),Object.entries(e).sort(((t,e)=>{let[s]=t,[a]=e;return s.localeCompare(a)})).map((t=>{let[e,s]=t;return{letter:e,tags:s.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}}}]);