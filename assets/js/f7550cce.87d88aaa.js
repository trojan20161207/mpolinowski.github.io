"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[76949],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68617:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const r={sidebar_position:5910,slug:"2023-04-01",title:"React.js 2023 - A (Re)Introduction",authors:"mpolinowski",tags:["Javascript","React","Cheating"],description:"Just a React Cheat Sheet to refer to in times of need..."},i=void 0,s={unversionedId:"Development/Javascript/2023-04-01-reactjs-2023/index",id:"Development/Javascript/2023-04-01-reactjs-2023/index",title:"React.js 2023 - A (Re)Introduction",description:"Just a React Cheat Sheet to refer to in times of need...",source:"@site/docs/Development/Javascript/2023-04-01-reactjs-2023/index.md",sourceDirName:"Development/Javascript/2023-04-01-reactjs-2023",slug:"/Development/Javascript/2023-04-01-reactjs-2023/2023-04-01",permalink:"/docs/Development/Javascript/2023-04-01-reactjs-2023/2023-04-01",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2023-04-01-reactjs-2023/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"React",permalink:"/docs/tags/react"},{label:"Cheating",permalink:"/docs/tags/cheating"}],version:"current",sidebarPosition:5910,frontMatter:{sidebar_position:5910,slug:"2023-04-01",title:"React.js 2023 - A (Re)Introduction",authors:"mpolinowski",tags:["Javascript","React","Cheating"],description:"Just a React Cheat Sheet to refer to in times of need..."},sidebar:"tutorialSidebar",previous:{title:"Javascript",permalink:"/docs/category/javascript"},next:{title:"MeiLi Search for your Gatsby.js Blog",permalink:"/docs/Development/Javascript/2023-02-13-gatsby-meili-search-starter/2023-02-13"}},l={},c=[{value:"Setting up a React project with Vite 4.2",id:"setting-up-a-react-project-with-vite-42",level:2},{value:"Creating Components",id:"creating-components",level:2},{value:"Working with Props",id:"working-with-props",level:2},{value:"Content Projection",id:"content-projection",level:2},{value:"Conditional Rendering",id:"conditional-rendering",level:2},{value:"Loops",id:"loops",level:2},{value:"Events",id:"events",level:2},{value:"State and Reducer Hooks",id:"state-and-reducer-hooks",level:2},{value:"Effects - Lifecycle for Functional Components",id:"effects---lifecycle-for-functional-components",level:2},{value:"No Dependencies",id:"no-dependencies",level:3},{value:"An empty Array",id:"an-empty-array",level:3},{value:"Props or State Values",id:"props-or-state-values",level:3},{value:"Unmount Legacy",id:"unmount-legacy",level:3},{value:"Context API - Share Reactive Data among Components",id:"context-api---share-reactive-data-among-components",level:2},{value:"Error Boundary",id:"error-boundary",level:2}],p={toc:c};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TST, Hongkong",src:t(91852).Z,width:"2359",height:"864"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mpolinowski/react-2023"},"Github Repository"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#setting-up-a-react-project-with-vite-42"},"Setting up a React project with Vite 4.2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#creating-components"},"Creating Components")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#working-with-props"},"Working with Props")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#content-projection"},"Content Projection")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#conditional-rendering"},"Conditional Rendering")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#loops"},"Loops")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#events"},"Events")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#state-and-reducer-hooks"},"State and Reducer Hooks")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#effects---lifecycle-for-functional-components"},"Effects - Lifecycle for Functional Components"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#no-dependencies"},"No Dependencies")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#an-empty-array"},"An empty Array")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#props-or-state-values"},"Props or State Values")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#unmount-legacy"},"Unmount Legacy")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#context-api---share-reactive-data-among-components"},"Context API - Share Reactive Data among Components")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#error-boundary"},"Error Boundary"))),(0,o.kt)("h2",{id:"setting-up-a-react-project-with-vite-42"},"Setting up a React project with Vite 4.2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm create vite@latest\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"React.js 2023",src:t(2192).Z,width:"1080",height:"224"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd into/dir\nnpm install && npm run dev\n\n  VITE v4.2.1  ready in 19597 ms\n\n  \u279c  Local:   http://localhost:5173/\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"React.js 2023",src:t(64944).Z,width:"877",height:"512"})),(0,o.kt)("p",null,"To build a browser compatible version of your application run the following command and copy the generated files from the ",(0,o.kt)("inlineCode",{parentName:"p"},"/dist")," directory into the public dir of your webserver:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,o.kt)("h2",{id:"creating-components"},"Creating Components"),(0,o.kt)("p",null,"Create a file ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloThere.jsx")," in the sub directory ",(0,o.kt)("inlineCode",{parentName:"p"},"components"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\n\n// functional component\nfunction HelloWorld() {\n    return <h3>Hello World!</h3>\n}\n\n// arrow function\nconst ILikeArrows = () => {\n    return <p>I am Artemis.</p>\n}\n\n// class component\nclass ClassyComponent extends React.Component {\n    render() {\n        return (\n            <>\n                <HelloWorld />\n                <ILikeArrows />\n            </>\n        )\n    }\n}\n\nexport default ClassyComponent\n')),(0,o.kt)("p",null,"This component can be imported into ",(0,o.kt)("inlineCode",{parentName:"p"},"App.jsx")," and rendered by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import ClassyComponent from './components/HelloThere'\n\nfunction App() {\n\n  return (\n    <div className=\"App\">\n      <div>\n        <ClassyComponent />\n      </div>\n      \n      ...\n\n    </div>\n  )\n}\n\nexport default App\n")),(0,o.kt)("h2",{id:"working-with-props"},"Working with Props"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// working with props\nfunction Paragraph(props) {\n    return (\n    <p>In ancient { props.origin }, { props.name } is the { props.profession }. She was heavily identified with Selene, the personification of the Moon, and Hecate, another lunar deity, and was thus regarded as one of the most prominent lunar deities in mythology, alongside the aforementioned two. The goddess { props.equivalent } is her Roman equivalent.</p>\n    )\n}\n\nfunction SelfIntroduction() {\n    return (\n    <>\n        <Paragraph\n            origin = "Greek mythology"\n            name = "Artemis"\n            profession = "goddess of the hunt"\n            equivalent = "Diana" />\n    </>\n    )\n}\n\nexport default SelfIntroduction\n')),(0,o.kt)("h2",{id:"content-projection"},"Content Projection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// content projection\nfunction Card(props) {\n    return (\n    <div className="card">\n        { props.children }\n    </div>\n    )\n}\n\nfunction Image() {\n    const image = { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Diana_of_Versailles.jpg/314px-Diana_of_Versailles.jpg" }\n\n    return (\n        \n      <Card>\n        <img src={ image.url } />\n      </Card>\n    );\n  }\n\nexport default Image\n')),(0,o.kt)("h2",{id:"conditional-rendering"},"Conditional Rendering"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// functional component\nfunction ConditionalImage({ goddess }) {\n\n    const diana = { url: \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Jean-Fran%C3%A7ois_de_Troy_-_Diane_suprise_par_Act%C3%A9on%2C_1734.jpg/800px-Jean-Fran%C3%A7ois_de_Troy_-_Diane_suprise_par_Act%C3%A9on%2C_1734.jpg\" }\n\n    const artemis = { url: \"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Wall_painting_-_Artemis_and_Kallisto_-_Pompeii_%28VII_12_26%29_-_Napoli_MAN_111441.jpg/505px-Wall_painting_-_Artemis_and_Kallisto_-_Pompeii_%28VII_12_26%29_-_Napoli_MAN_111441.jpg\" }\n\n    if (goddess == \"diana\") {\n        return <img src={ diana.url } />\n    } else {\n        return <img src={ artemis.url } />\n    }\n}\n\nconst ConditionalTitle = (props) => {\n    return (\n        <div className=\"title\">\n        {\n            (props.goddess == 'diana')\n            ? <h3>The Roman Goddess Diana</h3>\n            : <h3>The Greek Goddess Artemis</h3>\n        }\n        </div>\n    )\n}\n\n\nconst PaintingCollection = () => {\n    return (\n        <>\n            <h2>Paintings</h2>\n            <ConditionalTitle goddess='artemis' />\n            <ConditionalImage goddess='artemis' />\n            <ConditionalTitle goddess='diana' />\n            <ConditionalImage goddess='diana' />\n        </>\n    )\n}\n\nexport default PaintingCollection\n")),(0,o.kt)("h2",{id:"loops"},"Loops"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const ListItem = (props) => {\n    return <li>{props.name}</li>\n}\n\nfunction ListOfAliases() {\n\n    const data = [\n        {id: 1, goddess: 'Artemis'},\n        {id: 2, goddess: 'Diana'}\n    ]\n\n    return (\n        <>\n            <h3>List of Aliases</h3>\n            <ul>\n                { data.map(({ id, goddess }) =>\n                    <ListItem key={id} name={goddess} />\n                )}\n            </ul>\n        </>\n    )\n}\n\nexport default ListOfAliases\n")),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function EventCatcher() {\n\n    const clickHandler = (event) => {\n        console.log(event)\n    }\n\n    return (\n        <>\n            <button onClick={clickHandler}>Log Click-Event</button>\n        </>\n    )\n}\n\nexport default EventCatcher\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function ActionButton({ onClick }) {\n    return <button onClick={onClick}>Log Click-Event</button>\n}\n\nfunction EventCatcher() {\n\n    const clickHandler = (event) => {\n        console.log(event)\n    }\n\n    return <ActionButton onClick={ clickHandler } />\n}\n\nexport default EventCatcher\n")),(0,o.kt)("h2",{id:"state-and-reducer-hooks"},"State and Reducer Hooks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState, useReducer } from 'react'\n\nconst initialState = {count: 0}\n\nfunction reducer(reducedState, action) {\n    switch (action.type) {\n        case 'increment':\n            return { count: reducedState.count + 1 }\n        case 'decrement':\n            return { count: reducedState.count - 1 }\n        default:\n            throw new Error()\n    }\n}\n\n\n// props are immutable to be able to modify\n// state and redraw ui components use a state hook\nfunction Stateful() {\n    const [count, setCount] = useState(0)\n    const [state, setState] = useState({ count: 0, goddess: 'Artemis'})\n\n    const handleClick = () => {\n        setState({\n            ...state,\n            count: state.count + 1,\n        })\n    }\n\n    const [reducedState, dispatch] = useReducer(reducer, initialState)\n    \n    return (\n        <>\n            <p>Diana: { count }</p>\n            <button onClick={ () => setCount(count +1)}>Like</button>\n            <p>{ state.goddess }: { state.count }</p>\n            <button onClick={ handleClick }>Like</button>\n            <p>God in general: { reducedState.count }</p>\n            <button onClick={ () => dispatch({type: 'increment'})}>Like</button>\n            <button onClick={ () => dispatch({type: 'decrement'})}>Dislike</button>\n        </>\n    )\n}\n\nexport default Stateful\n")),(0,o.kt)("h2",{id:"effects---lifecycle-for-functional-components"},"Effects - Lifecycle for Functional Components"),(0,o.kt)("h3",{id:"no-dependencies"},"No Dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"useEffect(() => {\n  //Runs on every render\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useState, useEffect } from "react";\n\nfunction Timer() {\n    const [count, setCount] = useState(1000);\n  \n    useEffect(() => {\n      setTimeout(() => {\n        setCount((count) => count - 1);\n      }, 1000);\n    });\n  \n    return <h1>Countdown: {count}s</h1>;\n  }\n\n  export default Timer\n')),(0,o.kt)("h3",{id:"an-empty-array"},"An empty Array"),(0,o.kt)("p",null,"Update when component did mount:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"useEffect(() => {\n  //Runs only on the first render\n}, []);\n")),(0,o.kt)("h3",{id:"props-or-state-values"},"Props or State Values"),(0,o.kt)("p",null,"Update when component did update:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"useEffect(() => {\n  //Runs on the first render\n  //And any time any dependency value changes\n}, [prop, state]);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useState, useEffect } from "react"\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  const [calculation, setCalculation] = useState(0);\n\n  useEffect(() => {\n    setCalculation(() => Math.pow(count, 2));\n  }, [count]); // <- add the count variable here\n\n  return (\n    <>\n      <button onClick={() => setCount((c) => c + 1)}>Add Awesomeness</button>\n      <p>Awesomeness: {count}</p>\n      <p>Awesomeness\xb2: {calculation}</p>\n    </>\n  );\n}\n\nexport default Counter\n')),(0,o.kt)("h3",{id:"unmount-legacy"},"Unmount Legacy"),(0,o.kt)("p",null,"Update when component did unmount:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"useEffect(() => {\n  //Runs when component get's destroyed\n  return () => console.log('Ciao!')\n}, [prop, state]);\n")),(0,o.kt)("h2",{id:"context-api---share-reactive-data-among-components"},"Context API - Share Reactive Data among Components"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// without context\n// pass prop down a chain of child components\n\nfunction PropDrilling() {\n    const [count] = useState(44)\n\n    return <Child count={count} />\n}\n\nfunction Child({ count }) {\n    return <GrandChild count={count} />\n}\n\nfunction GrandChild({ count }) {\n    return <div>{count}</div>\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// with context\n// write prop to context to make it available to all components\n\nconst CountContext = createContext(0)\n\nfunction PropContext() {\n    const [count] = useState(88)\n\n    return (\n        <CountContext.Provider value={count}>\n            <ChildContext count={count} />\n        </CountContext.Provider>\n    )\n}\n\nfunction ChildContext() {\n    return <GrandChildContext />\n}\n\nfunction GrandChildContext() {\n    const count = useContext(CountContext)\n    return <div>{count}</div>\n}\n")),(0,o.kt)("h2",{id:"error-boundary"},"Error Boundary"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"class ErrorBoundary extends React.Component {\n    constructor(props) {\n        super(props)\n        this.state = { hasError: false }\n    }\n\n    // catch error\n    static getDerivedStateFromError(error) {\n        return { hasError: true }\n    }\n\n    componentDidCatch(error, errorInfo) {\n        console.log(error, errorInfo)\n    }\n\n    render() {\n        // there was a problem - provide fallback\n        if (this.state.hasError) {\n            return <p><em>Safe Fallback instead of a Crash</em></p>\n        }\n        // everything is fine - continue\n        return this.props.children\n    }\n}\n\n\nfunction BreakingComponent() {\n    return <p>{ anelusiveprop }</p>\n}\n\nfunction CaughtError() {\n    \n    return (\n        <>\n            <ErrorBoundary>\n                <BreakingComponent />\n            </ErrorBoundary>\n        </>\n    )\n  }\n\nexport default CaughtError\n")))}u.isMDXComponent=!0},2192:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/React_2023_01-08b5a395f0d4052d827be02126b3b0dc.png"},64944:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/React_2023_02-8c8858842879efc2963144cec2fee5db.png"},91852:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-c3aedc7eed015cc5372c21f9c394693d.jpg"}}]);