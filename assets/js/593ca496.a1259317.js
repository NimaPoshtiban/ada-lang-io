"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[936],{3253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>A,default:()=>T,frontMatter:()=>h,metadata:()=>y,toc:()=>x});var a=n(1716),i=n(3050),r=n(3989),o=n(7318),s=n(4768),l=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&g(e,n,t[n]);if(m)for(var n of m(t))c.call(t,n)&&g(e,n,t[n]);return e};const h={sidebar_position:140},A="Annex B Interface to Other Languages",y={unversionedId:"arm/AA-B/AA-B",id:"arm/AA-B/AA-B",title:"Annex B Interface to Other Languages",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-B/AA-B.mdx",sourceDirName:"arm/AA-B",slug:"/arm/AA-B/",permalink:"/docs/arm/AA-B/",draft:!1,tags:[],version:"current",sidebarPosition:140,frontMatter:{sidebar_position:140},sidebar:"referenceManualSidebar",previous:{title:"A.19 The Package Locales",permalink:"/docs/arm/AA-A/AA-A.19"},next:{title:"B.1 Interfacing Aspects",permalink:"/docs/arm/AA-B/AA-B.1"}},k={},x=[{value:"Language Design Principles",id:"language-design-principles",level:4},{value:"Implementation Requirements",id:"implementation-requirements",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4}],b={toc:x};function T(e){var t,n=e,{components:l}=n,g=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&m)for(var a of m(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},b),g),d(t,p({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("h1",f({},{id:"annex-b-interface-to-other-languages"}),"Annex B Interface to Other Languages"),(0,a.kt)("admonition",f({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",f({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(o.Z,{mdxType:"MarginText"},"1"),(0,a.kt)("p",null,"This Annex describes features for writing mixed-language programs. General interface support is presented first; then specific support for C, COBOL, and Fortran is defined, in terms of language interface packages for each of these languages. ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(o.Z,{mdxType:"MarginText"},"1.a"),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"This Annex is not a \u201cSpecialized Needs\u201d annex. Every implementation must support all nonoptional features defined here (mainly the package Interfaces). ",(0,a.kt)("br",null))),(0,a.kt)("h4",f({},{id:"language-design-principles"}),"Language Design Principles"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(o.Z,{mdxType:"MarginText"},"1.b"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Ada should have strong support for mixed-language programming. ",(0,a.kt)("br",null))),(0,a.kt)("h4",f({},{id:"implementation-requirements"}),"Implementation Requirements"),(0,a.kt)(o.Z,{mdxType:"MarginText"},"2/3"),(0,a.kt)(s.Z,{items:["AI05-0229-1","AI05-0262-1","AI05-0299-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"Support for interfacing to any foreign language is optional. However, an implementation shall not provide any optional aspect, attribute, library unit, or pragma having the same name as an aspect, attribute, library unit, or pragma (respectively) specified in the subclauses of this Annex unless the provided construct is either as specified in those subclauses or is more limited in capability than that required by those subclauses. A program that attempts to use an unsupported capability of this Annex shall either be identified by the implementation before run time or shall raise an exception at run time. ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(o.Z,{mdxType:"MarginText"},"2.a/3"),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,a.kt)("strong",null),"The intent is that the same rules apply for the optional parts of language interfacing as apply for Specialized Needs Annexes. See ",(0,a.kt)("a",{href:"../AA-1/AA-1.1#Subclause_1.1.3"},"1.1.3")," for a discussion of the purpose of these rules. ",(0,a.kt)("br",null))),(0,a.kt)("h4",f({},{id:"extensions-to-ada-83"}),"Extensions to Ada 83"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(o.Z,{mdxType:"MarginText"},"2.b"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Much of the functionality in this Annex is new to Ada 95. ",(0,a.kt)("br",null))),(0,a.kt)("h4",f({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(o.Z,{mdxType:"MarginText"},"2.c"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"This Annex contains what used to be RM83-13.8. ",(0,a.kt)("br",null))),(0,a.kt)("h4",f({},{id:"wording-changes-from-ada-2005"}),"Wording Changes from Ada 2005"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(o.Z,{mdxType:"MarginText"},"2.d/3"),(0,a.kt)(s.Z,{items:["AI05-0262-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Moved the clarification that interfacing to foreign languages is optional and has the same restrictions as a Specialized Needs Annex here. ",(0,a.kt)("br",null))))}T.isMDXComponent=!0}}]);