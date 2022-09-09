"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6830],{6609:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>f,frontMatter:()=>d,metadata:()=>g,toc:()=>b});var r=a(1716),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&u(e,a,t[a]);if(s)for(var a of s(t))p.call(t,a)&&u(e,a,t[a]);return e};const d={sidebar_position:1},m="The Big Five Structural Elements",g={unversionedId:"getting-started/overview/five-structural-elements",id:"getting-started/overview/five-structural-elements",title:"The Big Five Structural Elements",description:"Ada provides five major elements for program organization.",source:"@site/docs/getting-started/overview/five-structural-elements.md",sourceDirName:"getting-started/overview",slug:"/getting-started/overview/five-structural-elements",permalink:"/docs/getting-started/overview/five-structural-elements",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/category/overview"},next:{title:"Building Blocks",permalink:"/docs/getting-started/overview/building-blocks"}},k={},b=[],v={toc:b};function f(e){var t,a=e,{components:n}=a,u=((e,t)=>{var a={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=c(c({},v),u),i(t,o({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"the-big-five-structural-elements"}),"The Big Five Structural Elements"),(0,r.kt)("p",null,"Ada provides five major elements for program organization."),(0,r.kt)("p",null,"Unline many languages, general types are not used as namespaces for writing\nfunctions or procedures. While type are important in Ada, they play a\ndifferent role, and are not used as a way to structure program text. Instead\nrelated types and their operations go into a package."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"packages",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"group entities"),(0,r.kt)("li",{parentName:"ul"},"unit of compilation"))),(0,r.kt)("li",{parentName:"ul"},"subprogram",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"reusable sequences of instructions (algorithms)"))),(0,r.kt)("li",{parentName:"ul"},"generics",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allow writing a package or subprogram across arbitrary types, packages\nand subprograms which meet given specifications."))),(0,r.kt)("li",{parentName:"ul"},"tasks",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"define operations done in parallel"))),(0,r.kt)("li",{parentName:"ul"},"protected objects",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"coordinate access to shared data behind possibly complex guard conditions")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null})),(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Linear")),(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Concurrent")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Passive")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Packages"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Protected Objects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Active")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Subprograms"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Tasks")))),(0,r.kt)("p",null,"Packages and protected objects are passive, whereas tasks and subprograms are\nactive program behavior."),(0,r.kt)("p",null,"Packages provide separation into compilation units and act as\ncontainer for all entitites. Subprograms, whether procedures functions provide\nreusable algorithms and behaviors."),(0,r.kt)("p",null,"It is sometimes useful to write a package around unknown types and subprograms\nto be specified later. Generics provide this mechanism for both packages and subprograms.",(0,r.kt)("br",{parentName:"p"}),"\n","Generics do not provide structure on their own, but expand the capabilities\nof packages and subprograms to apply behavior to arbitrarily defined types,\nsubprograms and even packages."),(0,r.kt)("p",null,"Two structures assist in and provide concurrency. Tasks do concurrent computation,\nselection of operations from a blocked state, and conditional and timed waits.\nCoordination of shared resources is given by protected objects.\nBoth one-off and instantiable versions of tasks and protected types can be created. These\ntypes also following scoping rules and hence have access to elements where they\nwere declared."))}f.isMDXComponent=!0}}]);