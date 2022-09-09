"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[3810],{5114:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>k,frontMatter:()=>c,metadata:()=>y,toc:()=>f});var n=a(1716),i=a(9464),o=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&u(e,a,t[a]);if(l)for(var a of l(t))m.call(t,a)&&u(e,a,t[a]);return e};const c={sidebar_position:83},h="10 Program Structure and Compilation Issues",y={unversionedId:"arm/AA-10/AA-10",id:"arm/AA-10/AA-10",title:"10 Program Structure and Compilation Issues",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-10/AA-10.mdx",sourceDirName:"arm/AA-10",slug:"/arm/AA-10/",permalink:"/docs/arm/AA-10/",draft:!1,tags:[],version:"current",sidebarPosition:83,frontMatter:{sidebar_position:83},sidebar:"referenceManualSidebar",previous:{title:"9.11 Example of Tasking and Synchronization",permalink:"/docs/arm/AA-9/AA-9.11"},next:{title:"10.1 Separate Compilation",permalink:"/docs/arm/AA-10/AA-10.1"}},g={},f=[{value:"Language Design Principles",id:"language-design-principles",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4}],b={toc:f};function k(e){var t,a=e,{components:o}=a,u=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},b),u),r(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",d({},{id:"10-program-structure-and-compilation-issues"}),"10 Program Structure and Compilation Issues"),(0,n.kt)("admonition",d({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0299-1"),"}"," ",(0,n.kt)("br",null),"[The overall structure of programs and the facilities for separate compilation are described in this clause. A ",(0,n.kt)("em",null,"program")," is a set of ",(0,n.kt)("em",null,"partitions"),", each of which may execute in a separate address space, possibly on a separate computer. ",(0,n.kt)("br",null)),(0,n.kt)(i.Z,{type:"aarm",aarm:"glossary-entry",title:"Glossary entry: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"A ",(0,n.kt)("em",null,"program")," is a set of ",(0,n.kt)("em",null,"partitions"),", each of which may execute in a separate address space, possibly on a separate computer. A partition consists of a set of library units.",(0,n.kt)("br",null)),(0,n.kt)(i.Z,{type:"aarm",aarm:"glossary-entry",title:"Glossary entry: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"A ",(0,n.kt)("em",null,"partition")," is a part of a program. Each partition consists of a set of library units. Each partition may run in a separate address space, possibly on a separate computer. A program may contain just one partition. A distributed program typically contains multiple partitions, which can execute concurrently.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"As explained below, a partition is constructed from ",(0,n.kt)("em",null,"library units"),". Syntactically, the declaration of a library unit is a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-10/AA-10.1#S0287"},"library_item")),", as is the body of a library unit. An implementation may support a concept of a ",(0,n.kt)("em",null,"program library"),' (or simply, a "library"), which contains ',(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-10/AA-10.1#S0287"},"library_item")),"s and their subunits. Library units may be organized into a hierarchy of children, grandchildren, and so on.]",(0,n.kt)("br",null)),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0299-1"),"}"," ",(0,n.kt)("br",null),'This clause has two subclauses: 10.1, "Separate Compilation" discusses compile-time issues related to separate compilation. 10.2, "Program Execution" discusses issues related to what is traditionally known as "link time" and "run time" - building and executing partitions.',(0,n.kt)("br",null)),(0,n.kt)("h4",d({},{id:"language-design-principles"}),"Language Design Principles"),(0,n.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"We should avoid specifying details that are outside the domain of the language itself. The standard is intended (at least in part) to promote portability of Ada programs at the source level. It is not intended to standardize extra-language issues such as how one invokes the compiler (or other tools), how one's source is represented and organized, version management, the format of error messages, etc.",(0,n.kt)("br",null)),(0,n.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"The rules of the language should be enforced even in the presence of separate compilation. Using separate compilation should not make a program less safe.",(0,n.kt)("br",null)),(0,n.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"It should be possible to determine the legality of a compilation unit by looking only at the compilation unit itself and the compilation units upon which it depends semantically. As an example, it should be possible to analyze the legality of two compilation units in parallel if they do not depend semantically upon each other.",(0,n.kt)("br",null)),(0,n.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"On the other hand, it may be necessary to look outside that set in order to generate code - this is generally true for generic instantiation and inlining, for example. Also on the other hand, it is generally necessary to look outside that set in order to check Post-Compilation Rules.",(0,n.kt)("br",null)),(0,n.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},'See also the "generic contract model" Language Design Principle of 12.3, "Generic Instantiation". ',(0,n.kt)("br",null)),(0,n.kt)("h4",d({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83"),(0,n.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI05-0299-1"),"}"," ",(0,n.kt)("br",null),"The clause organization mentioned above is different from that of RM83. ",(0,n.kt)("br",null)))}k.isMDXComponent=!0}}]);