"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[97948],{821084:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=t(785893),r=t(603905);const o={sidebar_position:9040,slug:"2019-09-14",title:"Magento 2 Manual Theme Installation",authors:"mpolinowski",tags:["LINUX","Magento"]},s=void 0,i={id:"Development/Magento/2019-09-14--magento-and-themes/index",title:"Magento 2 Manual Theme Installation",description:"Patan, Nepal",source:"@site/docs/Development/Magento/2019-09-14--magento-and-themes/index.mdx",sourceDirName:"Development/Magento/2019-09-14--magento-and-themes",slug:"/Development/Magento/2019-09-14--magento-and-themes/2019-09-14",permalink:"/docs/Development/Magento/2019-09-14--magento-and-themes/2019-09-14",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Magento/2019-09-14--magento-and-themes/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Magento",permalink:"/docs/tags/magento"}],version:"current",sidebarPosition:9040,frontMatter:{sidebar_position:9040,slug:"2019-09-14",title:"Magento 2 Manual Theme Installation",authors:"mpolinowski",tags:["LINUX","Magento"]},sidebar:"tutorialSidebar",previous:{title:"Updating a Magento Project from PHP v7.0 to v7.3",permalink:"/docs/Development/Magento/2019-09-15--updating-from-php70-to-php72/2019-09-15"},next:{title:"Magento 2 and Varnish 6",permalink:"/docs/Development/Magento/2019-09-13--magento-and-varnish/2019-09-13"}},l={},d=[{value:"Download and Unzip your Theme",id:"download-and-unzip-your-theme",level:2},{value:"Theme Installation",id:"theme-installation",level:2},{value:"Importing Demo SQL Data",id:"importing-demo-sql-data",level:2},{value:"Lot&#39;s of Problems on the way...",id:"lots-of-problems-on-the-way",level:2},{value:"How to clear out a manually installed theme ?",id:"how-to-clear-out-a-manually-installed-theme-",level:3},{value:"Error Collection",id:"error-collection",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.ah)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Patan, Nepal",src:t(145610).Z+"",width:"1500",height:"819"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#download-and-unzip-your-theme",children:"Download and Unzip your Theme"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#theme-installation",children:"Theme Installation"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#importing-demo-sql-data",children:"Importing Demo SQL Data"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#lots-of-problems-on-the-way",children:"Lot's of Problems on the way..."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#how-to-clear-out-a-manually-installed-theme",children:"How to clear out a manually installed theme ?"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#error-collection",children:"Error Collection"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"download-and-unzip-your-theme",children:"Download and Unzip your Theme"}),"\n",(0,a.jsxs)(n.p,{children:["After unzipping your theme, you will find a folder named _",(0,a.jsx)(n.em,{children:"themeXXXX"}),". Upload all folders from this directory into your Magento root directory - e.g. ",(0,a.jsx)(n.code,{children:"/var/www/html/magento"}),". In my case the template only had a folder ",(0,a.jsx)(n.code,{children:"data"}),":"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Magento Theme Installation",src:t(552854).Z+"",width:"813",height:"153"})}),"\n",(0,a.jsxs)(n.p,{children:["Next switch to ",(0,a.jsx)(n.code,{children:"sources/sample_data"})," and copy the folder ",(0,a.jsx)(n.code,{children:"pub"})," to the Magento root directory:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Magento Theme Installation",src:t(409943).Z+"",width:"812",height:"167"})}),"\n",(0,a.jsxs)(n.p,{children:["Make sure that all files that you uploaded will be accessible by the default user, e.g. ",(0,a.jsx)(n.code,{children:"www-data"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"chown -R www-data:www-data .\n"})}),"\n",(0,a.jsx)(n.h2,{id:"theme-installation",children:"Theme Installation"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Run Upgrade:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"php bin/magento setup:upgrade\r\nphp bin/magento setup:di:compile\r\nphp bin/magento setup:static-content:deploy -f\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["If you are not running the Magento scripts with the ",(0,a.jsx)(n.code,{children:"www-data"})," user, make sure to change the owner of every folder and file inside ",(0,a.jsx)(n.code,{children:"var"})," and ",(0,a.jsx)(n.code,{children:"pub"})," after every recompile:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"chown -R www-data:www-data ./var\r\nchown -R www-data:www-data ./pub\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Magento Theme Installation",src:t(151647).Z+"",width:"927",height:"313"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:['NOTE: Manual static content deployment is not required in "default" and "developer" modes. In "default" and "developer" modes static contents are being deployed automatically on demand. If you still want to deploy in these modes, use -f option: ',(0,a.jsx)(n.code,{children:"bin/magento setup:static-content:deploy -f"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Setup the new Theme:"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["On the Admin sidebar, ",(0,a.jsx)(n.strong,{children:"Content"})," > Design > ",(0,a.jsx)(n.strong,{children:"Configuration"})," > ",(0,a.jsx)(n.strong,{children:"Select your current theme"})," > :"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Magento Theme Installation",src:t(719833).Z+"",width:"951",height:"363"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["Click on ",(0,a.jsx)(n.strong,{children:"Edit"})," to select your theme:"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Magento Theme Installation",src:t(379499).Z+"",width:"936",height:"409"})}),"\n",(0,a.jsx)(n.h2,{id:"importing-demo-sql-data",children:"Importing Demo SQL Data"}),"\n",(0,a.jsx)(n.p,{children:"To use the sample SQL DATA that comes with your template, you have to start with a blank database. First create a backup of your database to be able to roll it back later:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mysqldump -u username -p database_name > file.sql\n"})}),"\n",(0,a.jsx)(n.p,{children:"Delete all tables from the database - or delete the db and recreate. Then import the sample data from your template."}),"\n",(0,a.jsxs)(n.p,{children:["Bow download a fresh version of Magento and run the init script - make sure that ",(0,a.jsx)(n.code,{children:"--db-name"})," is set to the database you just prepared above:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/magento setup:install \\\r\n--base-url=http://mysite.dev \\\r\n--db-host=localhost \\\r\n--db-name=magento \\\r\n--db-user=magento \\\r\n--db-password=magento \\\r\n--admin-firstname=admin \\\r\n--admin-lastname=admin \\\r\n--admin-email=admin@admin.com \\\r\n--admin-user=admin \\\r\n--admin-password=admin123 \\\r\n--language=en_US \\\r\n--currency=USD \\\r\n--timezone=America/Chicago \\\r\n--use-rewrites=1\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now go through the regular setup through the Magento Admin panel. The Theme should already be selected and ready to be configured."}),"\n",(0,a.jsx)(n.p,{children:"If your run into the following issue when trying to load the frontend:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"1 exception(s):\r\nException #0 (Magento\\Framework\\Exception\\LocalizedException): Unable to find a physical ancestor for a theme 'Magetigue'.\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Magento2",src:t(16282).Z+"",width:"1187",height:"394"})}),"\n",(0,a.jsxs)(n.p,{children:["Make sure that ",(0,a.jsx)(n.code,{children:"type"})," for the theme is set to ",(0,a.jsx)(n.code,{children:"0"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM theme;\r\nUPDATE theme SET type = 0 WHERE theme_id = 4;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"lots-of-problems-on-the-way",children:"Lot's of Problems on the way..."}),"\n",(0,a.jsx)(n.p,{children:"The original theme that I was using did not work... all just went downhill... Error message by error message."}),"\n",(0,a.jsxs)(n.p,{children:["I found that the theme supports PHP up to v7.0.4 ",(0,a.jsx)(n.strong,{children:"but not"})," v7.1. As I am using PHP v7.2 this probably is the issue here."]}),"\n",(0,a.jsxs)(n.p,{children:["The free theme I downloaded above was ",(0,a.jsx)(n.strong,{children:"labeled Magento 2.3 compatible"})," and ",(0,a.jsx)(n.strong,{children:"worked right away"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"how-to-clear-out-a-manually-installed-theme-",children:"How to clear out a manually installed theme ?"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"File Operations"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Delete the content from ",(0,a.jsx)(n.code,{children:"app/design/frontend/<Vendor>"}),". You might also find files in ",(0,a.jsx)(n.code,{children:"var/view_preprocessed"})," & ",(0,a.jsx)(n.code,{children:"pub/static/frontend"}),"."]}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"DB Operations"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Go to your theme table and delete the entry for your created theme."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"mysql -u magento -p\r\nSHOW databases;\r\nUSE magento;\r\nSHOW tables;\r\nDESCRIBE theme;\r\nSELECT * FROM theme;\r\nDELETE FROM theme WHERE theme_id=4\r\nEXIT;\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Magento Theme Installation",src:t(568675).Z+"",width:"1210",height:"437"})}),"\n",(0,a.jsxs)(n.p,{children:["The template was stored under ",(0,a.jsx)(n.code,{children:"theme_id=4"})," in the theme table inside the Magento database."]}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Flush cache"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"php bin/magento cache:flush\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Recompile"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rm -rf generated/* var/* cache/*\r\nphp bin/magento setup:di:compile\r\nphp bin/magento setup:static-content:deploy -f\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"CleanUP"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"I am still getting an error message when trying to access the storefront:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Magento Theme Installation",src:t(743392).Z+"",width:"885",height:"99"})}),"\n",(0,a.jsxs)(n.p,{children:["If the theme has a configuration in Magento Admin, then it is important to delete all references to the theme in table ",(0,a.jsx)(n.code,{children:"eav_attribute"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM eav_attribute;\r\nDELETE FROM eav_attribute WHERE attribute_id=151;\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Magento Theme Installation",src:t(953335).Z+"",width:"1178",height:"306"})}),"\n",(0,a.jsx)(n.p,{children:"A quick re-compile, deploy and flush later everything was up and running..."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rm -rf generated/* var/* cache/*\r\nphp bin/magento setup:di:compile\r\nphp bin/magento setup:static-content:deploy -f\r\nphp bin/magento cache:flush\r\nchown -R www-data:www-data .\n"})}),"\n",(0,a.jsx)(n.h3,{id:"error-collection",children:"Error Collection"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"If you see these error messages"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"ReflectionException: Class Magento\\Framework\\App\\Http\\Interceptor does not exist in /var/www/html/magento/vendor/magento/framework/Code/Reader/ClassReader.php:19 Stack trace: #0 /var/www/html/magento/vendor/magento/framework/Code/Reader/ClassReader.php(19): ReflectionClass->__construct('Magento\\\\Framewo...') #1 /var/www/html/magento/vendor/magento/framework/ObjectManager/Definition/Runtime.php(49): Magento\\Framework\\Code\\Reader\\ClassReader->getConstructor('Magento\\\\Framewo...') #2 /var/www/html/magento/vendor/magento/framework/ObjectManager/Factory/Dynamic/Developer.php(48): Magento\\Framework\\ObjectManager\\Definition\\Runtime->getParameters('Magento\\\\Framewo...') #3 /var/www/html/magento/vendor/magento/framework/ObjectManager/ObjectManager.php(56): Magento\\Framework\\ObjectManager\\Factory\\Dynamic\\Developer->create('Magento\\\\Framewo...', Array) #4 /var/www/html/magento/vendor/magento/framework/App/Bootstrap.php(235): Magento\\Framework\\ObjectManager\\ObjectManager->create('Magento\\\\Framewo...', Array) #5 /var/www/html/magento/pub/index.php(39): Magento\\Framework\\App\\Bootstrap->createApplication('Magento\\\\Framewo...') #6 {main}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Magento Theme Installation",src:t(897274).Z+"",width:"931",height:"361"})}),"\n",(0,a.jsx)(n.p,{children:"Clear all directories and files under Magento\u2019s var subdirectory and install the Magento software again."}),"\n",(0,a.jsx)(n.p,{children:"As the Magento file system owner or as a user with root privileges, enter the following commands:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd <your Magento install directory>/var\r\nrm -rf cache/* di/* generation/* page_cache/*\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"And more problems"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"1 exception(s):\r\nException #0 (Magento\\Framework\\Config\\Dom\\ValidationException): Element 'block', attribute 'type': The attribute 'type' is not allowed.\r\nLine: 1001\r\n\r\nElement 'block', attribute 'type': The attribute 'type' is not allowed.\r\nLine: 1011\r\n\r\nElement 'block', attribute 'type': The attribute 'type' is not allowed.\r\nLine: 1020\r\n\r\nElement 'block', attribute 'type': The attribute 'type' is not allowed.\r\nLine: 1027\r\n\r\nElement 'block', attribute 'type': The attribute 'type' is not allowed.\r\nLine: 1034\r\n\r\nElement 'block', attribute 'type': The attribute 'type' is not allowed.\r\nLine: 1042\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This is ",(0,a.jsx)(n.a,{href:"https://magento.stackexchange.com/questions/199151/magento-2-2-0-upgrade-error-attribute-type-is-not-allowed",children:"can be caused"})," by themes that use ",(0,a.jsx)(n.code,{children:'<block type="..."'})," instead of ",(0,a.jsx)(n.code,{children:'<block class="..."'}),". I found type declarations in the footer part of the theme and deleted them."]}),"\n",(0,a.jsx)(n.p,{children:"Also check all custom blog layout files in your theme (app/code/design/ThemeVendor/themename/Magefan_Blog/layout), they may have a code e.g.:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'class="\\Magento\n'})}),"\n",(0,a.jsx)(n.p,{children:"you need to change it to"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'class="Magento\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Then flush Magento cache (Magento Admin Panel ",(0,a.jsx)(n.strong,{children:"System"})," > ",(0,a.jsx)(n.strong,{children:"Cache Management"})," > ",(0,a.jsx)(n.strong,{children:"Flush Magento Cache"}),")."]}),"\n",(0,a.jsx)(n.p,{children:"This solved the problem above but had me ending up with new errors:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"1 exception(s):\r\nException #0 (Exception): Notice: Undefined index: src in /var/www/html/magento/vendor/magento/framework/View/Page/Config/Generator/Head.php on line 126\r\n\r\nException #0 (Exception): Notice: Undefined index: src in /var/www/html/magento/vendor/magento/framework/View/Page/Config/Generator/Head.php on line 126\n"})}),"\n",(0,a.jsx)(n.p,{children:"This error refers to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"protected function processAssets(Structure $pageStructure)\r\n    {\r\n        foreach ($pageStructure->getAssets() as $name => $data) {\r\n            if (isset($data['src_type']) && in_array($data['src_type'], $this->remoteAssetTypes)) {\r\n                if ($data['src_type'] === self::SRC_TYPE_CONTROLLER) {\r\n                    $data['src'] = $this->url->getUrl($data['src']);\r\n                }\r\n\r\n                $this->pageConfig->addRemotePageAsset(\r\n                    $data['src'],\r\n                    isset($data['content_type']) ? $data['content_type'] : self::VIRTUAL_CONTENT_TYPE_LINK,\r\n                    $this->getAssetProperties($data),\r\n                    $name\r\n                );\r\n            } else {\r\n                $this->pageConfig->addPageAsset($name, $this->getAssetProperties($data));\r\n            }\r\n        }\r\n        return $this;\r\n    }\n"})}),"\n",(0,a.jsx)(n.p,{children:"And a problem with the compilation:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"php bin/magento setup:di:compile\r\nCompilation was started.\r\nInterception cache generation... 6/7 [========================>---]  85% 35 secs 365.0 MiBErrors during compilation:\r\n        TemplateMonster\\Megamenu\\Plugin\\Block\\Topmenu\r\n                Incompatible argument type: Required type: \\Magento\\Catalog\\Model\\ResourceModel\\Category\\StateDependentCollectionFactory. Actual type: \\Magento\\Catalog\\Model\\ResourceModel\\Category\\CollectionFactory; File: \r\n/var/www/html/magento/app/code/TemplateMonster/Megamenu/Plugin/Block/Topmenu.php\r\n\r\nTotal Errors Count: 1\r\n\r\nIn Log.php line 92:\r\n                            \r\n  Error during compilation  \r\n                            \r\n\r\nsetup:di:compile\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>d});var a=t(667294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),m=d(t),p=r,g=m["".concat(l,".").concat(p)]||m[p]||c[p]||o;return t?a.createElement(g,s(s({ref:n},h),{},{components:t})):a.createElement(g,s({ref:n},h))}));h.displayName="MDXCreateElement"},552854:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Magento_Themes_Installation_01-441df809c4edb52468fbe978036d6445.png"},409943:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Magento_Themes_Installation_02-cbe0281f6b7ab096bf3295856b1ee32b.png"},897274:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Magento_Themes_Installation_03-c3c454bb496396b0f263d2022f04ef3f.png"},719833:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Magento_Themes_Installation_04-89a44ef445ce72e38dcac4ad25eb5b34.png"},379499:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Magento_Themes_Installation_05-50615cdd336a53e440e800536c828d87.png"},151647:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Magento_Themes_Installation_06-e38113cfe71febb03df3fb9516129a56.png"},568675:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Magento_Themes_Installation_07-4afa58525e8ef1c16d67a288859ead06.png"},743392:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Magento_Themes_Installation_08-9bdd49622dba45b7fc8cd2955b26f14b.png"},953335:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Magento_Themes_Installation_09-0e72a841b038aa032b081444417a1619.png"},16282:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Magento_Themes_Installation_10-8671c3c8d30d113acc071fa99e0d94d3.png"},145610:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-9307c3d8b6dbe17f8b0a2749f84e8e31.jpg"}}]);