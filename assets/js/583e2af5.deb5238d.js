"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[6576],{282965:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var t=r(785893),d=r(603905);const s={sidebar_position:5935,slug:"2023-10-28",title:"From NeoVim to LunarVim",authors:"mpolinowski",tags:["LINUX"],description:"An IDE layer for Neovim with sane defaults. Completely free and community driven."},i=void 0,l={id:"DevOps/Linux/2023-10-28--lunarvim/index",title:"From NeoVim to LunarVim",description:"An IDE layer for Neovim with sane defaults. Completely free and community driven.",source:"@site/docs/DevOps/Linux/2023-10-28--lunarvim/index.md",sourceDirName:"DevOps/Linux/2023-10-28--lunarvim",slug:"/DevOps/Linux/2023-10-28--lunarvim/2023-10-28",permalink:"/docs/DevOps/Linux/2023-10-28--lunarvim/2023-10-28",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2023-10-28--lunarvim/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:5935,frontMatter:{sidebar_position:5935,slug:"2023-10-28",title:"From NeoVim to LunarVim",authors:"mpolinowski",tags:["LINUX"],description:"An IDE layer for Neovim with sane defaults. Completely free and community driven."},sidebar:"tutorialSidebar",previous:{title:"vsftp on Ubuntu",permalink:"/docs/DevOps/Linux/2024-01-08--vsftp-ubuntu/2024-01-08"},next:{title:"Elgato Streamdeck on Arch Linux",permalink:"/docs/DevOps/Linux/2023-03-29--installing-the-elgato-streamdeck/2023-03-29"}},c={},h=[{value:"Installation",id:"installation",level:2},{value:"Updating LunarVim",id:"updating-lunarvim",level:3},{value:"Post install",id:"post-install",level:3},{value:"Cheat Sheet",id:"cheat-sheet",level:2},{value:"Keybinds",id:"keybinds",level:3},{value:"Operators",id:"operators",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Custom Keybinds",id:"custom-keybinds",level:3},{value:"Python",id:"python",level:3},{value:"Other",id:"other",level:3}];function o(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Guangzhou, China",src:r(910327).Z+"",width:"1500",height:"615"})}),"\n",(0,t.jsx)(n.p,{children:"\x3c!-- TOC --\x3e"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#installation",children:"Installation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#updating-lunarvim",children:"Updating LunarVim"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#post-install",children:"Post install"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#cheat-sheet",children:"Cheat Sheet"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#keybinds",children:"Keybinds"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#operators",children:"Operators"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#custom-keybinds",children:"Custom Keybinds"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#python",children:"Python"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#other",children:"Other"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\x3c!-- /TOC --\x3e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.lunarvim.org/",children:"LunarVim"})," - an IDE layer for Neovim with sane defaults."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["> ",(0,t.jsx)(n.strong,{children:"Prerequisites:"}),"\r\n>\r\n> * Make sure you have installed the latest version of ",(0,t.jsx)(n.a,{href:"https://github.com/neovim/neovim/releases/latest",children:"Neovim v0.9.0+."}),"\r\n> * Have git, make, pip, python, npm, node and cargo installed on your system."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"LV_BRANCH='release-1.3/neovim-0.9' bash \\<(curl -s https://raw.githubusercontent.com/LunarVim/LunarVim/release-1.3/neovim-0.9/utils/installer/install.sh)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Optional:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo npm install -g neovim tree-sitter-cli\r\npip install pynvim\n"})}),"\n",(0,t.jsx)(n.h3,{id:"updating-lunarvim",children:"Updating LunarVim"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Inside LunarVim ",(0,t.jsx)(n.code,{children:":LvimUpdate"})]}),"\n",(0,t.jsxs)(n.li,{children:["Updating Plugins inside LunarVim ",(0,t.jsx)(n.code,{children:":LvimSyncCorePlugins"})]}),"\n",(0,t.jsxs)(n.li,{children:["From the command-line ",(0,t.jsx)(n.code,{children:"lvim +LvimUpdate +q"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"post-install",children:"Post install"}),"\n",(0,t.jsxs)(n.p,{children:["LunarVim uses icons from ",(0,t.jsx)(n.a,{href:"https://www.nerdfonts.com/font-downloads",children:"Nerd Fonts"}),". If you don't want to use them set lvim.use_icons to false."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/.local/share/fonts\r\ncd ~/.local/share/fonts && curl -fLO https://github.com/ryanoasis/nerd-fonts/raw/HEAD/patched-fonts/DroidSansMono/DroidSansMNerdFont-Regular.otf\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After installing your font, you will have to refresh your font cache by doing ",(0,t.jsx)(n.code,{children:"fc-cache -f -v"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"cheat-sheet",children:"Cheat Sheet"}),"\n",(0,t.jsx)(n.h3,{id:"keybinds",children:"Keybinds"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Exiting"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Navigating"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:":q"}),(0,t.jsx)(n.td,{children:"Close file"}),(0,t.jsx)(n.td,{children:"h j k l"}),(0,t.jsx)(n.td,{children:"Arrow keys"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:":qa"}),(0,t.jsx)(n.td,{children:"Close all files"}),(0,t.jsx)(n.td,{children:"<C-U> / <C-D>"}),(0,t.jsx)(n.td,{children:"Half-page up/down"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:":w"}),(0,t.jsx)(n.td,{children:"Save"}),(0,t.jsx)(n.td,{children:"<C-B> / <C-F>"}),(0,t.jsx)(n.td,{children:"Page up/down"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[":wq"," / ",":x"]}),(0,t.jsx)(n.td,{children:"Save and close file"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Words"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ZZ"}),(0,t.jsx)(n.td,{children:"Save and quit"}),(0,t.jsx)(n.td,{children:"b / w"}),(0,t.jsx)(n.td,{children:"Previous/next word"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ZQ"}),(0,t.jsx)(n.td,{children:"Quit without checking changes"}),(0,t.jsx)(n.td,{children:"ge / e"}),(0,t.jsx)(n.td,{children:"Previous/next end of word"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Exiting insert mode"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Line"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Esc / <C-[>"}),(0,t.jsx)(n.td,{children:"Exit insert mode"}),(0,t.jsx)(n.td,{children:"0 (zero)"}),(0,t.jsx)(n.td,{children:"Start of line"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"<C-C>"}),(0,t.jsx)(n.td,{children:"Exit insert mode, and abort current command"}),(0,t.jsx)(n.td,{children:"^"}),(0,t.jsx)(n.td,{children:"Start of line (after whitespace)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Clipboard"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"$"}),(0,t.jsx)(n.td,{children:"End of line"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"x"}),(0,t.jsx)(n.td,{children:"Delete character"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Character"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dd"}),(0,t.jsx)(n.td,{children:"Delete line (Cut)"}),(0,t.jsx)(n.td,{children:"fc"}),(0,t.jsx)(n.td,{children:"Go forward to character c"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"yy"}),(0,t.jsx)(n.td,{children:"Yank line (Copy)"}),(0,t.jsx)(n.td,{children:"Fc"}),(0,t.jsx)(n.td,{children:"Go backward to character c"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"p"}),(0,t.jsx)(n.td,{children:"Paste"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Document"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"P"}),(0,t.jsx)(n.td,{children:"Paste before"}),(0,t.jsx)(n.td,{children:"gg"}),(0,t.jsx)(n.td,{children:"First line"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'"*p / "+p'}),(0,t.jsx)(n.td,{children:"Paste from system clipboard"}),(0,t.jsx)(n.td,{children:"G"}),(0,t.jsx)(n.td,{children:"Last line"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'"*y / "+y'}),(0,t.jsx)(n.td,{children:"Paste to system clipboard"}),(0,t.jsx)(n.td,{children:":{number}"}),(0,t.jsx)(n.td,{children:"Go to line {number}"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vi("}),(0,t.jsx)(n.td,{children:"Select everything inside parenthesis"}),(0,t.jsx)(n.td,{children:"{"}),(0,t.jsx)(n.td,{children:"Jump to beginning of paragraph"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"va("}),(0,t.jsx)(n.td,{children:"Select everything including parenthesis"}),(0,t.jsx)(n.td,{children:"}"}),(0,t.jsx)(n.td,{children:"Jump to end of paragraph"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ya("}),(0,t.jsx)(n.td,{children:"Copy everything including parenthesis"}),(0,t.jsx)(n.td,{children:"ctrl+d"}),(0,t.jsx)(n.td,{children:"Jump half page up"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"viw"}),(0,t.jsx)(n.td,{children:"Select entire word"}),(0,t.jsx)(n.td,{children:"ctrl+u"}),(0,t.jsx)(n.td,{children:"Jump half page down"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"viW"}),(0,t.jsx)(n.td,{children:"Select entire word with included punctuation"}),(0,t.jsx)(n.td,{children:"zz"}),(0,t.jsx)(n.td,{children:"Center view port"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Find & Replace"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"{number}G"}),(0,t.jsx)(n.td,{children:"Go to line {number}"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:":%s/foo/bar/g"}),(0,t.jsx)(n.td,{children:"Replace foo with bar in whole document"}),(0,t.jsx)(n.td,{children:"{number}j"}),(0,t.jsx)(n.td,{children:"Go down {number} lines"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Editing"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"{number}k"}),(0,t.jsx)(n.td,{children:"Go up {number} lines"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"a"}),(0,t.jsx)(n.td,{children:"Append"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Window"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"A"}),(0,t.jsx)(n.td,{children:"Append from end of line"}),(0,t.jsx)(n.td,{children:"zz"}),(0,t.jsx)(n.td,{children:"Center this line"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"i"}),(0,t.jsx)(n.td,{children:"Insert mode"}),(0,t.jsx)(n.td,{children:"zt"}),(0,t.jsx)(n.td,{children:"Top this line"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"o"}),(0,t.jsx)(n.td,{children:"Insert mode on next line"}),(0,t.jsx)(n.td,{children:"zb"}),(0,t.jsx)(n.td,{children:"Bottom this line"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"Insert mode on previous line"}),(0,t.jsx)(n.td,{children:"H"}),(0,t.jsx)(n.td,{children:"Move to top of screen"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"s"}),(0,t.jsx)(n.td,{children:"Delete char and insert"}),(0,t.jsx)(n.td,{children:"M"}),(0,t.jsx)(n.td,{children:"Move to middle of screen"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"S"}),(0,t.jsx)(n.td,{children:"Delete line and insert"}),(0,t.jsx)(n.td,{children:"L"}),(0,t.jsx)(n.td,{children:"Move to bottom of screen"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"C"}),(0,t.jsx)(n.td,{children:"Delete until end of line and insert"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Search"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"r"}),(0,t.jsx)(n.td,{children:"Replace one character"}),(0,t.jsx)(n.td,{children:"n"}),(0,t.jsx)(n.td,{children:"Next matching search pattern"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R"}),(0,t.jsx)(n.td,{children:"Enter Replace mode"}),(0,t.jsx)(n.td,{children:"N"}),(0,t.jsx)(n.td,{children:"Previous match"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"u"}),(0,t.jsx)(n.td,{children:"Undo changes"}),(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Next whole word under cursor"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"<C-R>"}),(0,t.jsx)(n.td,{children:"Redo changes"}),(0,t.jsx)(n.td,{children:"#"}),(0,t.jsx)(n.td,{children:"Previous whole word under cursor"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ci("}),(0,t.jsx)(n.td,{children:"Delete everything within parenthesis and enter edit mode"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'ca"'}),(0,t.jsx)(n.td,{children:"Delete everything including outer double-quotes and enter edit mode"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Visual mode"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Tab pages"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"v"}),(0,t.jsx)(n.td,{children:"Enter visual mode"}),(0,t.jsxs)(n.td,{children:[":tabedit"," [file]"]}),(0,t.jsx)(n.td,{children:"Edit file in a new tab"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"<leader>+bb"}),(0,t.jsx)(n.td,{children:"Go to previous tab"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"<leader>+bn"}),(0,t.jsx)(n.td,{children:"Go to next tab"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"<C+h>"}),(0,t.jsx)(n.td,{children:"Move cursor to the left window"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"<C+l>"}),(0,t.jsx)(n.td,{children:"Move cursor to the right window"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"<C+j>"}),(0,t.jsx)(n.td,{children:"Move cursor to the lower window"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"<C+k>"}),(0,t.jsx)(n.td,{children:"Move cursor to the upper window"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"<C+>"}),(0,t.jsx)(n.td,{children:"Toggle terminal on/off"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"V"}),(0,t.jsx)(n.td,{children:"Enter visual line mode"}),(0,t.jsxs)(n.td,{children:[":tabfind"," [file]"]}),(0,t.jsx)(n.td,{children:"Open file if exists in new tab"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"<C-V>"}),(0,t.jsx)(n.td,{children:"Enter visual block mode"}),(0,t.jsx)(n.td,{children:":tabclose"}),(0,t.jsx)(n.td,{children:"Close current tab"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"In visual mode"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:":tabs"}),(0,t.jsx)(n.td,{children:"List all tabs"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"d / x"}),(0,t.jsx)(n.td,{children:"Delete selection"}),(0,t.jsx)(n.td,{children:":tabfirst"}),(0,t.jsx)(n.td,{children:"Go to first tab"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"s"}),(0,t.jsx)(n.td,{children:"Replace selection"}),(0,t.jsx)(n.td,{children:":tablast"}),(0,t.jsx)(n.td,{children:"Go to last tab"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"y"}),(0,t.jsx)(n.td,{children:"Yank selection (Copy)"}),(0,t.jsx)(n.td,{children:":tabn"}),(0,t.jsx)(n.td,{children:"Go to next tab"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:":tabp"}),(0,t.jsx)(n.td,{children:"Go to previous tab"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"operators",children:"Operators"}),"\n",(0,t.jsx)(n.p,{children:"Operators let you operate in a range of text (defined by motion). These are performed in normal mode:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"d"}),": Operator"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"w"}),": Motion"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Operators list"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Examples"}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.em,{children:"Combine operators with motions to use them."})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"d"})}),(0,t.jsx)(n.td,{children:"Delete"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"dd"})}),(0,t.jsx)(n.td,{children:"(repeat the letter) Delete current line"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"y"})}),(0,t.jsx)(n.td,{children:"Yank (copy)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"dw"})}),(0,t.jsx)(n.td,{children:"Delete to next word"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"c"})}),(0,t.jsx)(n.td,{children:"Change (delete then insert)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"db"})}),(0,t.jsx)(n.td,{children:"Delete to beginning of word"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"\\>"})}),(0,t.jsx)(n.td,{children:"Indent right"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"2dd"})}),(0,t.jsx)(n.td,{children:"Delete 2 lines"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"\\<"})}),(0,t.jsx)(n.td,{children:"Indent left"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"dip"})}),(0,t.jsx)(n.td,{children:"Delete a text object (inside paragraph)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"="})}),(0,t.jsx)(n.td,{children:"Autoindent"}),(0,t.jsxs)(n.td,{children:["(in visual mode) ",(0,t.jsx)(n.code,{children:"d"})]}),(0,t.jsx)(n.td,{children:"Delete selection"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"u"})}),(0,t.jsx)(n.td,{children:"Undo"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"d2w"})}),(0,t.jsx)(n.td,{children:"Delete two words."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ctrl+r"})}),(0,t.jsx)(n.td,{children:"Redu"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"g~"})}),(0,t.jsx)(n.td,{children:"Swap case"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"gU"})}),(0,t.jsx)(n.td,{children:"Uppercase"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"gu"})}),(0,t.jsx)(n.td,{children:"Lowercase"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"!"})}),(0,t.jsx)(n.td,{children:"Filter through external program"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"You can configure LunarVim by using the configuration file located in:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cat ~/.config/lvim/config.lua\r\n\r\n-- Read the docs: https://www.lunarvim.org/docs/configuration\r\n-- Video Tutorials: https://www.youtube.com/watch?v=sFA9kX-Ud_c&list=PLhoH5vyxr6QqGu0i7tt_XoVK9v-KvZ3m6\r\n-- Forum: https://www.reddit.com/r/lunarvim/\r\n-- Discord: https://discord.com/invite/Xb9B4N\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For some reason the old default config was removed - I made a copy of it here ",(0,t.jsx)(n.a,{href:"https://gist.github.com/mpolinowski/c64e7134b92058f365cd401cd97edbec",children:"config.example.lua"}),". To keep this main file lean we can create custom config files in sub-directories, add all configuration there - maybe git-source them - and import those files into main:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/.config/lvim/lua/custom\r\nlvim ~/.config/lvim/lua/custom/options.lua //add your config here\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now either use the ",(0,t.jsx)(n.code,{children:"require()"})," or ",(0,t.jsx)(n.code,{children:"reload()"})," (for hot-reloading on save) to add your custom configuration to ",(0,t.jsx)(n.code,{children:"~/.config/lvim/config.lua"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"reload('custom.options')\n"})}),"\n",(0,t.jsx)(n.h3,{id:"custom-keybinds",children:"Custom Keybinds"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'--move selected line with K or J\r\nvim.keymap.set("v", "K",  ":m \'\\<-2\\<cr\\>gv=gv")\r\nvim.keymap.set("v", "J",  ":m \'\\>+1\\<cr\\>gv=gv")\r\n\r\n--scroll with ctrl-d and ctrl-j while keeping centered\r\nvim.keymap.set("n", "\\<C-d\\>",  "\\<C-d\\>zz")\r\nvim.keymap.set("n", "\\<C-u\\>",  "\\<C-u\\>zz")\r\n\r\n--find next with n and N while keeping centered\r\nvim.keymap.set("n", "n",  "nzzzv")\r\nvim.keymap.set("n", "N",  "Nzzzv")\r\n\r\n--use system clipboard when copying with SPACE+y\r\n--you may need to install xclip (X11) or wl-clipboard (wayland)\r\nvim.keymap.set("n", "\\<leader\\>y", "\\"+y")\r\nvim.keymap.set("v", "\\<leader\\>y", "\\"+y")\r\nvim.keymap.set("n", "\\<leader\\>Y", "\\"+Y")\r\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"python",children:"Python"}),"\n",(0,t.jsxs)(n.p,{children:["Now we can start ",(0,t.jsx)(n.a,{href:"https://github.com/LunarVim/starter.lvim",children:"adding configuration"})," to our options file - for example for Python development, e.g. a ",(0,t.jsx)(n.strong,{children:"Python Language Server"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'lvim.builtin.treesitter.ensure_installed = {\r\n  "python",\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Type in ",(0,t.jsx)(n.code,{children:":Mason"})," and verify that ",(0,t.jsx)(n.code,{children:"pyright"})," has been installed (I had to first open an ",(0,t.jsx)(n.code,{children:"*.py"})," for the installation to start and I was seeing error messages along the way.)"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"From NeoVim to LunarVim",src:r(346954).Z+"",width:"1110",height:"578"})}),"\n",(0,t.jsxs)(n.p,{children:["To add auto-formating we can run ",(0,t.jsx)(n.code,{children:":MasonInstall black"})," and add the following configuration:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local formatters = require "lvim.lsp.null-ls.formatters"\r\nformatters.setup { { name = "black" }}\r\nlvim.format_on_save.enabled = true\r\nlvim.format_on_save.pattern = { "*.py" }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For linting we can use ",(0,t.jsx)(n.code,{children:"flake8"})," that can be installed with ",(0,t.jsx)(n.code,{children:":MasonInstall flake8"})," with the following configuration:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local linters = require "lvim.lsp.null-ls.linters"\r\nlinters.setup { { command = "flake8", args = { "--ignore=E203" }, filetypes = { "python" } } }\n'})}),"\n",(0,t.jsx)(n.p,{children:"\x3c!-- Further, there are two plugins that come recommended - one for switching virtual environments and an eye-candy one:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'lvim.plugins = {\r\n  "ChristianChiarulli/swenv.nvim",\r\n  "stevearc/dressing.nvim",\r\n}\r\n\r\nrequire(\'swenv\').setup({\r\n  post_set_venv = function()\r\n    vim.cmd("LspRestart")\r\n  end,\r\n})\r\n\r\nlvim.builtin.which_key.mappings["C"] = {\r\n  name = "Python",\r\n  c = { "\\<cmd\\>lua require(\'swenv.api\').pick_venv()\\<cr\\>", "Choose Env" },\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The two configuration below the plugin block make sure that the language server is restarted after switching to a new Python virtual environment and that typing ",(0,t.jsx)(n.code,{children:"SPACE + C"})," opens a dialogue you can select your environment from."]}),"\n",(0,t.jsx)(n.p,{children:"> Hmmm - switching environments does not work for me - the dialogue does not open. I will have to check later what the issue is. --\x3e"}),"\n",(0,t.jsx)(n.p,{children:"Restart LunarVim and you should see that everything is now loaded when you open a Python file and will start complaining :)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"From NeoVim to LunarVim",src:r(112930).Z+"",width:"1212",height:"582"})}),"\n",(0,t.jsxs)(n.p,{children:["You can auto-format your code with ",(0,t.jsx)(n.code,{children:"black"})," using ",(0,t.jsx)(n.code,{children:"SPACE + l + f"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"other",children:"Other"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:":TSInstall json\r\n:TSInstall javascript\r\n:TSInstall typescript\r\n:TSInstall tsx\n"})})]})}function a(e={}){const{wrapper:n}={...(0,d.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>h});var t=r(667294);function d(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){d(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,d=function(e,n){if(null==e)return{};var r,t,d={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(d[r]=e[r]);return d}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(d[r]=e[r])}return d}var c=t.createContext({}),h=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},o={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},a=t.forwardRef((function(e,n){var r=e.components,d=e.mdxType,s=e.originalType,c=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),x=h(r),j=d,u=x["".concat(c,".").concat(j)]||x[j]||o[j]||s;return r?t.createElement(u,i(i({ref:n},a),{},{components:r})):t.createElement(u,i({ref:n},a))}));a.displayName="MDXCreateElement"},346954:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/LunarVim_01-1a48122367f6e72d425ad5d14669115a.png"},112930:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/LunarVim_02-10544dfcecbe255bb8c3ee5b48e9a14d.png"},910327:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-32dbeca90d3e5d2fc5dae0a82fcd32cc.jpg"}}]);