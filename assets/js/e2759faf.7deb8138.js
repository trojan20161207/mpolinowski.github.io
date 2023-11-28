"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[64433],{369865:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var t=r(785893),s=r(603905);const a={sidebar_position:7040,slug:"2021-05-10",title:"Carbon Design System in React.js - Part I",authors:"mpolinowski",tags:["Javascript","Electron","React"]},o=void 0,i={id:"Development/Javascript/2021-05-10-carbon-design-react/index",title:"Carbon Design System in React.js - Part I",description:"Mongkok, Hongkong",source:"@site/docs/Development/Javascript/2021-05-10-carbon-design-react/index.md",sourceDirName:"Development/Javascript/2021-05-10-carbon-design-react",slug:"/Development/Javascript/2021-05-10-carbon-design-react/2021-05-10",permalink:"/docs/Development/Javascript/2021-05-10-carbon-design-react/2021-05-10",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2021-05-10-carbon-design-react/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"Electron",permalink:"/docs/tags/electron"},{label:"React",permalink:"/docs/tags/react"}],version:"current",sidebarPosition:7040,frontMatter:{sidebar_position:7040,slug:"2021-05-10",title:"Carbon Design System in React.js - Part I",authors:"mpolinowski",tags:["Javascript","Electron","React"]},sidebar:"tutorialSidebar",previous:{title:"Carbon Design System in React.js - Part II",permalink:"/docs/Development/Javascript/2021-05-11-carbon-design-react-part2/2021-05-11"},next:{title:"Electron@13 and Create-React-App",permalink:"/docs/Development/Javascript/2021-05-09-electron13-and-react/2021-05-09"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Carbon",id:"carbon",level:3},{value:"Sass",id:"sass",level:3},{value:"Import carbon-component Styles",id:"import-carbon-component-styles",level:4},{value:"Testing Carbon Components",id:"testing-carbon-components",level:3},{value:"Add Carbon UI Shell",id:"add-carbon-ui-shell",level:2},{value:"Add UI Shell Sass",id:"add-ui-shell-sass",level:3},{value:"Import and export the header",id:"import-and-export-the-header",level:3},{value:"Import icons",id:"import-icons",level:3},{value:"Render the header",id:"render-the-header",level:3},{value:"Create pages",id:"create-pages",level:2},{value:"Import Content Sass",id:"import-content-sass",level:3},{value:"Import and Export Content Pages",id:"import-and-export-content-pages",level:3},{value:"Add Routing",id:"add-routing",level:2}];function A(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Mongkok, Hongkong",src:r(855880).Z+"",width:"1500",height:"549"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#installation",children:"Installation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#carbon",children:"Carbon"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#sass",children:"Sass"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#import-carbon-component-styles",children:"Import carbon-component Styles"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#testing-carbon-components",children:"Testing Carbon Components"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#add-carbon-ui-shell",children:"Add Carbon UI Shell"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#add-ui-shell-sass",children:"Add UI Shell Sass"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#import-and-export-the-header",children:"Import and export the header"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#import-icons",children:"Import icons"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#render-the-header",children:"Render the header"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#create-pages",children:"Create pages"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#import-content-sass",children:"Import Content Sass"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#import-and-export-content-pages",children:"Import and Export Content Pages"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#add-routing",children:"Add Routing"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/mpolinowski/electron-react-app",children:"Github Repository"})}),"\n",(0,t.jsxs)(n.p,{children:["In the previous step used ",(0,t.jsx)(n.a,{href:"https://reactjs.org/docs/create-a-new-react-app.html",children:"Create-React-App"})," to scaffold a ",(0,t.jsx)(n.a,{href:"/docs/Development/Javascript/2021-05-09-electron13-and-react/2021-05-09",children:"react app and added Electron as a wrapper for my App"}),". I now want to use the ",(0,t.jsx)(n.a,{href:"https://www.carbondesignsystem.com/",children:"IBM Carbon Design System"})," to add a few ready-to-use react design components to my app."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Carbon Design React",src:r(724598).Z+"",width:"1567",height:"591"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Note: compiling the SASS styles takes a while when starting up the Electron app. Be patient :)"})}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.h3,{id:"carbon",children:"Carbon"}),"\n",(0,t.jsx)(n.p,{children:"Install the Carbon dependencies:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install carbon-components@10.41.0 carbon-components-react@7.41.0 @carbon/icons-react@10.37.0 carbon-icons@7.0.7\n"})}),"\n",(0,t.jsx)(n.h3,{id:"sass",children:"Sass"}),"\n",(0,t.jsxs)(n.p,{children:["We need to run a Sass build as the Carbon styles are authored in Sass, so run the following command to install ",(0,t.jsx)(n.code,{children:"sass"})," (!! v1.29.0 !!) as a dependency:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install sass@1.29.0 \n"})}),"\n",(0,t.jsxs)(n.p,{children:["To avoid having to add the ",(0,t.jsx)(n.code,{children:"~"})," prefix when importing SCSS files from node_modules, create a ",(0,t.jsx)(n.code,{children:".env"})," file at the project root that contains:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"LINUX"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'SASS_PATH="node_modules"\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Windows"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"SASS_PATH=./node_modules\n"})}),"\n",(0,t.jsx)(n.h4,{id:"import-carbon-component-styles",children:"Import carbon-component Styles"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"src"})," directory, rename ",(0,t.jsx)(n.code,{children:"index.css"})," as ",(0,t.jsx)(n.code,{children:"index.scss"}),". Then in ",(0,t.jsx)(n.code,{children:"index.js"})," update the ",(0,t.jsx)(n.code,{children:"index.css"})," import to ",(0,t.jsx)(n.code,{children:"index.scss"}),". In ",(0,t.jsx)(n.code,{children:"index.scss"}),", import the Carbon styles by adding the following at the top of the file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scss",children:"@import 'carbon-components/scss/globals/scss/styles.scss';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Making this change to ",(0,t.jsx)(n.code,{children:"index.scss"})," will cause all of the Carbon Sass to re-compile. Let\u2019s speed this up by moving our custom app Sass into a separate file, ",(0,t.jsx)(n.code,{children:"app.scss"})," in the ",(0,t.jsx)(n.code,{children:"./src"})," directory, and import that from ",(0,t.jsx)(n.code,{children:"App.js"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import './app.scss';\n"})}),"\n",(0,t.jsx)(n.p,{children:"By modifying index.scss as little as possible and storing all app-specific styling in app.scss we will make compile times much quicker."}),"\n",(0,t.jsx)(n.h3,{id:"testing-carbon-components",children:"Testing Carbon Components"}),"\n",(0,t.jsxs)(n.p,{children:["I'll import a Button from Carbon to test that our dependencies are working properly. At the top of ",(0,t.jsx)(n.code,{children:"App.js"}),", import the Button by adding the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { Button } from 'carbon-components-react';\n"})}),"\n",(0,t.jsx)(n.p,{children:"And add the button to my App component:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"<Button>Button</Button>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If the button shows up with the ",(0,t.jsx)(n.a,{href:"https://www.carbondesignsystem.com/components/button/usage/",children:"correct Carbon styling"})," your setup is ready to go!"]}),"\n",(0,t.jsx)(n.h2,{id:"add-carbon-ui-shell",children:"Add Carbon UI Shell"}),"\n",(0,t.jsxs)(n.p,{children:["Next, I am going to create a React component called ",(0,t.jsx)(n.strong,{children:"AppHeader"})," to use with the UI Shell Carbon component. In the ",(0,t.jsx)(n.code,{children:"./src"})," directory, create a components directory and inside of that, a ",(0,t.jsx)(n.strong,{children:"AppHeader"})," directory. Create the following files inside ",(0,t.jsx)(n.code,{children:"./src/components/AppHeader"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"src/components/AppHeader\r\n\u251c\u2500\u2500_app-header.scss\r\n\u251c\u2500\u2500index.js\r\n\u2514\u2500\u2500AppHeader.js\n"})}),"\n",(0,t.jsx)(n.h3,{id:"add-ui-shell-sass",children:"Add UI Shell Sass"}),"\n",(0,t.jsxs)(n.p,{children:["Next, in ",(0,t.jsx)(n.code,{children:"src/app.scss"}),", we\u2019ll import our ",(0,t.jsx)(n.code,{children:"AppHeader"})," styles. Your file should now look like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scss",children:"@import './components/AppHeader/app-header.scss';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"import-and-export-the-header",children:"Import and export the header"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"src/components/AppHeader/index.js"}),", import and export our ",(0,t.jsx)(n.strong,{children:"AppHeader"})," component like so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import AppHeader from './AppHeader';\r\nexport default AppHeader;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next we\u2019ll import our ",(0,t.jsx)(n.a,{href:"https://github.com/carbon-design-system/carbon/tree/main/packages/react/src/components/UIShell",children:"Carbon UI Shell components"})," into ",(0,t.jsx)(n.code,{children:"AppHeader.js"}),". Set up the file like so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import React from \'react\';\r\nimport {\r\n  Header,\r\n  HeaderContainer,\r\n  HeaderName,\r\n  HeaderNavigation,\r\n  HeaderMenuButton,\r\n  HeaderMenuItem,\r\n  HeaderGlobalBar,\r\n  HeaderGlobalAction,\r\n  SkipToContent,\r\n  SideNav,\r\n  SideNavItems,\r\n  HeaderSideNavItems,\r\n} from \'carbon-components-react\';\r\n\r\n  const AppHeader = () => (\r\n    <HeaderContainer\r\n      render={({ isSideNavExpanded, onClickSideNavExpand }) => (\r\n        <Header aria-label="Carbon">\r\n          <SkipToContent />\r\n          <HeaderMenuButton\r\n            aria-label="Open menu"\r\n            onClick={onClickSideNavExpand}\r\n            isActive={isSideNavExpanded}\r\n          />\r\n          <HeaderName href="/" prefix="INSTAR">\r\n            Carbon\r\n          </HeaderName>\r\n          <HeaderNavigation aria-label="Carbon">\r\n            <HeaderMenuItem href="/about">About</HeaderMenuItem>\r\n          </HeaderNavigation>\r\n          <SideNav\r\n            aria-label="Side navigation"\r\n            expanded={isSideNavExpanded}\r\n            isPersistent={false}>\r\n            <SideNavItems>\r\n              <HeaderSideNavItems>\r\n                <HeaderMenuItem href="/about">About</HeaderMenuItem>\r\n              </HeaderSideNavItems>\r\n            </SideNavItems>\r\n          </SideNav>\r\n          <HeaderGlobalBar>\r\n            <HeaderGlobalAction aria-label="Notifications">\r\n              <Notification20 />\r\n            </HeaderGlobalAction>\r\n            <HeaderGlobalAction aria-label="User Avatar">\r\n              <UserAvatar20 />\r\n            </HeaderGlobalAction>\r\n            <HeaderGlobalAction aria-label="App Switcher">\r\n              <AppSwitcher20 />\r\n            </HeaderGlobalAction>\r\n          </HeaderGlobalBar>\r\n        </Header>\r\n      )}\r\n    />\r\n  );\r\n  \r\n  export default AppHeader;\n'})}),"\n",(0,t.jsx)(n.h3,{id:"import-icons",children:"Import icons"}),"\n",(0,t.jsxs)(n.p,{children:["Now let\u2019s import the icons from our ",(0,t.jsx)(n.code,{children:"@carbon/icons-react"})," elements package. In the ",(0,t.jsx)(n.code,{children:"AppHeader.js"})," file, we need to import each individual icon we will use:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import {\r\n  AppSwitcher20,\r\n  Notification20,\r\n  UserAvatar20,\r\n} from '@carbon/icons-react';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"render-the-header",children:"Render the header"}),"\n",(0,t.jsxs)(n.p,{children:["Next we\u2019ll render our UI Shell by importing our ",(0,t.jsx)(n.strong,{children:"AppHeader"})," component and Content into ",(0,t.jsx)(n.code,{children:"App.js"}),". Your imports should look like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import React, { Component } from 'react';\r\nimport { Button, Content } from 'carbon-components-react';\r\nimport AppHeader from './components/AppHeader';\n"})}),"\n",(0,t.jsx)(n.p,{children:"Our return currently just contains a Button. Let\u2019s update that to include our imported components. This should look like the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"function App() {\r\n  return (\r\n    <>\r\n      <AppHeader />\r\n      <Content>\r\n        <Button>Button</Button>\r\n      </Content>\r\n    </>\r\n  );\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Carbon Design React",src:r(360562).Z+"",width:"1069",height:"235"})}),"\n",(0,t.jsx)(n.h2,{id:"create-pages",children:"Create pages"}),"\n",(0,t.jsxs)(n.p,{children:["Create two folders in ",(0,t.jsx)(n.code,{children:"src/content"})," and prepare folder for a landing and a about page:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"src/content/LandingPage\r\n\u251c\u2500\u2500 _landing-page.scss\r\n\u251c\u2500\u2500 index.js\r\n\u2514\u2500\u2500 LandingPage.js\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"src/content/AboutPage\r\n\u251c\u2500\u2500 _about-page.scss\r\n\u251c\u2500\u2500 index.js\r\n\u2514\u2500\u2500 AboutPage.js\n"})}),"\n",(0,t.jsx)(n.h3,{id:"import-content-sass",children:"Import Content Sass"}),"\n",(0,t.jsxs)(n.p,{children:["Next, we\u2019ll import our content Sass files in ",(0,t.jsx)(n.code,{children:"app.scss"}),", like so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scss",children:"@import './components/AppHeader/app-header.scss';\r\n@import './content/LandingPage/landing-page.scss';\r\n@import './content/AboutPage/about-page.scss';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"import-and-export-content-pages",children:"Import and Export Content Pages"}),"\n",(0,t.jsxs)(n.p,{children:["Starting with ",(0,t.jsx)(n.strong,{children:"LandingPage"}),", just like with our header, we need to export the component in ",(0,t.jsx)(n.code,{children:"src/content/LandingPage/index.js"})," by adding:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import LandingPage from './LandingPage';\r\nexport default LandingPage;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next in ",(0,t.jsx)(n.code,{children:"LandingPage.js"}),", we\u2019ll create our component:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import React from 'react';\r\nconst LandingPage = () => {\r\n  return <div>LANDING PAGE</div>;\r\n};\r\nexport default LandingPage;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"src/content/AboutPage/index.js"}),", import and export the ",(0,t.jsx)(n.strong,{children:"AboutPage"})," component like so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import AboutPage from './AboutPage';\r\nexport default AboutPage;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then in ",(0,t.jsx)(n.code,{children:"AboutPage.js"})," create the component:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import React from 'react';\r\nconst AboutPage = () => {\r\n  return <div>About PAGE</div>;\r\n};\r\nexport default AboutPage;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"add-routing",children:"Add Routing"}),"\n",(0,t.jsxs)(n.p,{children:["We\u2019ve updated our app to render our header, but now we need to add routing functionality. To do this we need to install ",(0,t.jsx)(n.code,{children:"react-router-dom"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install react-router-dom@5.2.0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["First, we need to wrap our app in the ",(0,t.jsx)(n.strong,{children:"Router"})," component. In the root ",(0,t.jsx)(n.code,{children:"src/index.js"}),", add the import:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { HashRouter as Router } from 'react-router-dom';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then, update the ",(0,t.jsx)(n.code,{children:"render()"})," function to include the Router:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"ReactDOM.render(\r\n  <React.StrictMode>\r\n    <Router>\r\n      <App />\r\n    </Router>,\r\n  </React.StrictMode>,\r\n  document.getElementById('root')\r\n);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In order to render our content pages, we need to add the following imports in ",(0,t.jsx)(n.code,{children:"src/App.js"})," below our existing imports."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { Route, Switch } from 'react-router-dom';\r\nimport LandingPage from './content/LandingPage';\r\nimport AboutPage from './content/AboutPage';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now inside ",(0,t.jsx)(n.code,{children:"src/App.js"})," ",(0,t.jsx)(n.strong,{children:"Content"})," we\u2019ll our dummy button with the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'<Switch>\r\n  <Route exact path="/" component={LandingPage} />\r\n  <Route path="/about/" component={AboutPage} />\r\n</Switch>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["After that we need to do a couple quick fixes to the UI Shell to have it work with the React router. Add the Link import in ",(0,t.jsx)(n.code,{children:"src/components/AppHeader/AppHeader.js"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { Link } from 'react-router-dom';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We need to use the Link component instead of the default anchor elements to prevent full page reload when navigating to different pages with React Router. To use Link, update the HeaderName component in ",(0,t.jsx)(n.code,{children:"src/components/AppHeader/AppHeader.js"})," to use the element ",(0,t.jsx)(n.code,{children:"prop"})," and replace the ",(0,t.jsx)(n.code,{children:"href"})," with ",(0,t.jsx)(n.code,{children:"to"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'<HeaderName element={Link} to="/" prefix="INSTAR">\r\n  Carbon\r\n</HeaderName>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Do the same with the components that contain ",(0,t.jsx)(n.code,{children:'href="/about"'})," in ",(0,t.jsx)(n.code,{children:"src/components/AppHeader/AppHeader.js"}),", updating them to:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'<HeaderMenuItem element={Link} to="/about">\r\n  About\r\n</HeaderMenuItem>\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Carbon Design React",src:r(377926).Z+"",width:"849",height:"208"})})]})}function l(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(A,{...e})}):A(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>d});var t=r(667294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=t.createContext({}),d=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},A={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(r),h=s,m=p["".concat(c,".").concat(h)]||p[h]||A[h]||a;return r?t.createElement(m,o(o({ref:n},l),{},{components:r})):t.createElement(m,o({ref:n},l))}));l.displayName="MDXCreateElement"},724598:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/Carbon_Design_React_00-7724246675eef2b2a2454a6ced1643b6.png"},360562:(e,n,r)=>{r.d(n,{Z:()=>t});const t="data:image/png;base64,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"},377926:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/Carbon_Design_React_02-dbfc6e1f42ad804f9baf1523c8138fba.gif"},855880:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-91e37bd11491cef23e1249d24ec7851f.jpg"}}]);