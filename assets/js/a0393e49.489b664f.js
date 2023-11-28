"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[89511],{364532:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var t=n(785893),d=n(603905);const i={sidebar_position:7e3,slug:"2021-10-09",title:"The friendly Editor",authors:"mpolinowski",tags:["Linux"]},s=void 0,l={id:"DevOps/Linux/2021-10-09--the-friendly-editor/index",title:"The friendly Editor",description:"Harbin , China",source:"@site/docs/DevOps/Linux/2021-10-09--the-friendly-editor/index.md",sourceDirName:"DevOps/Linux/2021-10-09--the-friendly-editor",slug:"/DevOps/Linux/2021-10-09--the-friendly-editor/2021-10-09",permalink:"/docs/DevOps/Linux/2021-10-09--the-friendly-editor/2021-10-09",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2021-10-09--the-friendly-editor/index.md",tags:[{label:"Linux",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:7e3,frontMatter:{sidebar_position:7e3,slug:"2021-10-09",title:"The friendly Editor",authors:"mpolinowski",tags:["Linux"]},sidebar:"tutorialSidebar",previous:{title:"Install Packages in Arch Linux",permalink:"/docs/DevOps/Linux/2021-10-23--arch-linux-install-packages/2021-10-23"},next:{title:"Editor from Hell",permalink:"/docs/DevOps/Linux/2021-10-09--editor-from-hell/2021-10-09"}},c={},h=[{value:"Installation",id:"installation",level:2},{value:"Cheat Sheet",id:"cheat-sheet",level:2},{value:"File handling",id:"file-handling",level:3},{value:"Editing",id:"editing",level:3},{value:"Search and replace",id:"search-and-replace",level:3},{value:"Deletion",id:"deletion",level:3},{value:"Operations",id:"operations",level:3},{value:"Moving around",id:"moving-around",level:3},{value:"Special movement",id:"special-movement",level:3},{value:"Information",id:"information",level:3},{value:"Various",id:"various",level:3}];function o(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Harbin , China",src:n(789407).Z+"",width:"1500",height:"509"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#installation",children:"Installation"})}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"#cheat-sheet",children:"Cheat Sheet"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#file-handling",children:"File handling"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#editing",children:"Editing"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#search-and-replace",children:"Search and replace"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#deletion",children:"Deletion"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#operations",children:"Operations"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#moving-around",children:"Moving around"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#special-movement",children:"Special movement"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#information",children:"Information"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#various",children:"Various"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://www.nano-editor.org/download.php",children:"Nano Editor"})}),"\n",(0,t.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(r.p,{children:["Install the ",(0,t.jsx)(r.a,{href:"https://www.nano-editor.org/dist/latest/",children:"latest version of Nano"})," by downloading and unzipping your desired version, e.g. ",(0,t.jsx)(r.a,{href:"https://www.nano-editor.org/dist/latest/nano-5.9.tar.xz",children:"nano-5.9"}),". Make sure that the following dependencies are present on your system:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"sudo yum install ncurses ncurses-devel\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsxs)(r.em,{children:["(or ",(0,t.jsx)(r.code,{children:"libncurses-dev"})," on Debian)"]})}),"\n",(0,t.jsx)(r.p,{children:"And then build the editor from source:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"cd nano-5.9\r\n./configure\r\nmake\r\nmake install\n"})}),"\n",(0,t.jsx)(r.h2,{id:"cheat-sheet",children:"Cheat Sheet"}),"\n",(0,t.jsx)(r.p,{children:"Overview of nano's shortcuts:"}),"\n",(0,t.jsx)(r.h3,{id:"file-handling",children:"File handling"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+S"}),(0,t.jsx)(r.td,{children:"Save current file"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+O"}),(0,t.jsx)(r.td,{children:'Offer to write file ("Save as")'})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+R"}),(0,t.jsx)(r.td,{children:"Insert a file into current one"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+X"}),(0,t.jsx)(r.td,{children:"Close buffer, exit from nano"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"editing",children:"Editing"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+K"}),(0,t.jsx)(r.td,{children:"Cut current line into cutbuffer"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+6"}),(0,t.jsx)(r.td,{children:"Copy current line into cutbuffer"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+U"}),(0,t.jsx)(r.td,{children:"Paste contents of cutbuffer"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+T"}),(0,t.jsx)(r.td,{children:"Cut until end of buffer"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+]"}),(0,t.jsx)(r.td,{children:"Complete current word"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+3"}),(0,t.jsx)(r.td,{children:"Comment/uncomment line/region"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+U"}),(0,t.jsx)(r.td,{children:"Undo last action"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+E"}),(0,t.jsx)(r.td,{children:"Redo last undone action"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"search-and-replace",children:"Search and replace"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+Q"}),(0,t.jsx)(r.td,{children:"Start backward search"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+W"}),(0,t.jsx)(r.td,{children:"Start forward search"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+Q"}),(0,t.jsx)(r.td,{children:"Find next occurrence backward"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+W"}),(0,t.jsx)(r.td,{children:"Find next occurrence forward"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+R"}),(0,t.jsx)(r.td,{children:"Start a replacing session"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"deletion",children:"Deletion"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+H"}),(0,t.jsx)(r.td,{children:"Delete character before cursor"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+D"}),(0,t.jsx)(r.td,{children:"Delete character under cursor"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+Bsp"}),(0,t.jsx)(r.td,{children:"Delete word to the left"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+Del"}),(0,t.jsx)(r.td,{children:"Delete word to the right"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+Del"}),(0,t.jsx)(r.td,{children:"Delete current line"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"operations",children:"Operations"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+T"}),(0,t.jsx)(r.td,{children:"Execute some command"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+J"}),(0,t.jsx)(r.td,{children:"Justify paragraph or region"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+J"}),(0,t.jsx)(r.td,{children:"Justify entire buffer"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+B"}),(0,t.jsx)(r.td,{children:"Run a syntax check"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+F"}),(0,t.jsx)(r.td,{children:"Run a formatter/fixer/arranger"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+:"}),(0,t.jsx)(r.td,{children:"Start/stop recording of macro"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+;"}),(0,t.jsx)(r.td,{children:"Replay macro"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"moving-around",children:"Moving around"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+B"}),(0,t.jsx)(r.td,{children:"One character backward"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+F"}),(0,t.jsx)(r.td,{children:"One character forward"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+\u2190"}),(0,t.jsx)(r.td,{children:"One word backward"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+\u2192"}),(0,t.jsx)(r.td,{children:"One word forward"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+A"}),(0,t.jsx)(r.td,{children:"To start of line"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+E"}),(0,t.jsx)(r.td,{children:"To end of line"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+P"}),(0,t.jsx)(r.td,{children:"One line up"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+N"}),(0,t.jsx)(r.td,{children:"One line down"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+\u2191"}),(0,t.jsx)(r.td,{children:"To previous block"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+\u2193"}),(0,t.jsx)(r.td,{children:"To next block"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+Y"}),(0,t.jsx)(r.td,{children:"One page up"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+V"}),(0,t.jsx)(r.td,{children:"One page down"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+\\"}),(0,t.jsx)(r.td,{children:"To top of buffer"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+/"}),(0,t.jsx)(r.td,{children:"To end of buffer"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"special-movement",children:"Special movement"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+G"}),(0,t.jsx)(r.td,{children:"Go to specified line"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+]"}),(0,t.jsx)(r.td,{children:"Go to complementary bracket"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+\u2191"}),(0,t.jsx)(r.td,{children:"Scroll viewport up"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+\u2193"}),(0,t.jsx)(r.td,{children:"Scroll viewport down"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+<"}),(0,t.jsx)(r.td,{children:"Switch to preceding buffer"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+>"}),(0,t.jsx)(r.td,{children:"Switch to succeeding buffer"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"information",children:"Information"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+C"}),(0,t.jsx)(r.td,{children:"Report cursor position"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+D"}),(0,t.jsx)(r.td,{children:"Report line/word/character count"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+G"}),(0,t.jsx)(r.td,{children:"Display help text"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"various",children:"Various"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+A"}),(0,t.jsx)(r.td,{children:"Turn the mark on/off"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Tab Indent"}),(0,t.jsx)(r.td,{children:"marked region"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Shift+Tab"}),(0,t.jsx)(r.td,{children:"Unindent marked region"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+N"}),(0,t.jsx)(r.td,{children:"Turn line numbers on/off"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+P"}),(0,t.jsx)(r.td,{children:"Turn visible whitespace on/off"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Alt+V"}),(0,t.jsx)(r.td,{children:"Enter next keystroke verbatim"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+L"}),(0,t.jsx)(r.td,{children:"Refresh the screen"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ctrl+Z"}),(0,t.jsx)(r.td,{children:"Suspend nano"})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,d.ah)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},603905:(e,r,n)=>{n.d(r,{ah:()=>h});var t=n(667294);function d(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){d(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,d=function(e,r){if(null==e)return{};var n,t,d={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(d[n]=e[n]);return d}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}var c=t.createContext({}),h=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},o={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},x=t.forwardRef((function(e,r){var n=e.components,d=e.mdxType,i=e.originalType,c=e.parentName,x=l(e,["components","mdxType","originalType","parentName"]),a=h(n),j=d,u=a["".concat(c,".").concat(j)]||a[j]||o[j]||i;return n?t.createElement(u,s(s({ref:r},x),{},{components:n})):t.createElement(u,s({ref:r},x))}));x.displayName="MDXCreateElement"},789407:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-164fe9385f1326d03a3028fe25917bd7.jpg"}}]);