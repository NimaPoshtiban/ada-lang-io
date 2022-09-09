"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[2568],{4363:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>y,frontMatter:()=>p,metadata:()=>k,toc:()=>f});var n=a(1716),i=a(7556),r=a(9464),o=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,A=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&u(e,a,t[a]);if(d)for(var a of d(t))c.call(t,a)&&u(e,a,t[a]);return e};const p={sidebar_position:119},h="A.2 The Package Ada",k={unversionedId:"arm/AA-A/AA-A.2",id:"arm/AA-A/AA-A.2",title:"A.2 The Package Ada",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-A/AA-A.2.mdx",sourceDirName:"arm/AA-A",slug:"/arm/AA-A/AA-A.2",permalink:"/docs/arm/AA-A/AA-A.2",draft:!1,tags:[],version:"current",sidebarPosition:119,frontMatter:{sidebar_position:119},sidebar:"referenceManualSidebar",previous:{title:"A.1 The Package Standard",permalink:"/docs/arm/AA-A/AA-A.1"},next:{title:"A.3 Character Handling",permalink:"/docs/arm/AA-A/AA-A.3"}},g={},f=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4}],b={toc:f};function y(e){var t,a=e,{components:o}=a,u=((e,t)=>{var a={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=A(A({},b),u),l(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",A({},{id:"a2-the-package-ada"}),"A.2 The Package Ada"),(0,n.kt)("admonition",A({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.kt)("a",A({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,n.kt)("h4",A({},{id:"static-semantics"}),"Static Semantics"),(0,n.kt)("p",null,"The following language-defined library package exists: ",(0,n.kt)("br",null)),(0,n.kt)(i.Z,{mdxType:"CodeBlock"},"--  ","{","AI12-0414-1","}","\n"," package Ada","\n","   with Pure is","\n","end Ada;","\n"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI12-0414-1"),"}"," ",(0,n.kt)("br",null),"Ada serves as the parent of most of the other language-defined library units; its declaration is empty. ",(0,n.kt)("br",null)),(0,n.kt)("h4",A({},{id:"legality-rules"}),"Legality Rules"),(0,n.kt)("p",null,"In the standard mode, it is illegal to compile a child of package Ada. ",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"The intention is that mentioning, say, Ada.Text_IO in a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-10/AA-10.1#S0294"},"with_clause"))," is guaranteed (at least in the standard mode) to refer to the standard version of Ada.Text_IO. The user can compile a root library unit Text_IO that has no relation to the standard version of Text_IO. ",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"Note that Ada can have non-language-defined grandchildren, assuming the implementation allows it. Also, packages System and Interfaces can have children, assuming the implementation allows it. ",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{type:"aarm",aarm:"implementation-note",title:"Implementation Note: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"An implementation will typically support a nonstandard mode in which compiling the language defined library units is allowed. Whether or not this mode is made available to users is up to the implementer.",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"An implementation could theoretically have private children of Ada, since that would be semantically neutral. However, a programmer cannot compile such a library unit. ",(0,n.kt)("br",null)),(0,n.kt)("h4",A({},{id:"extensions-to-ada-83"}),"Extensions to Ada 83"),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI05-0299-1"),"}"," ",(0,n.kt)("br",null),"This subclause is new to Ada 95. ",(0,n.kt)("br",null)))}y.isMDXComponent=!0}}]);