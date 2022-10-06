"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[7893],{1073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>T,frontMatter:()=>h,metadata:()=>b,toc:()=>y});var a=n(1716),i=n(3050),r=n(3989),o=n(7318),s=n(4768),l=Object.defineProperty,d=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))u.call(t,n)&&m(e,n,t[n]);return e};const h={sidebar_position:202},k="J.9 The Storage_Size Attribute",b={unversionedId:"arm/AA-J/AA-J.9",id:"arm/AA-J/AA-J.9",title:"J.9 The Storage_Size Attribute",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-J/AA-J.9.mdx",sourceDirName:"arm/AA-J",slug:"/arm/AA-J/AA-J.9",permalink:"/docs/arm/AA-J/AA-J.9",draft:!1,tags:[],version:"current",sidebarPosition:202,frontMatter:{sidebar_position:202},sidebar:"referenceManualSidebar",previous:{title:"J.8 Mod Clauses",permalink:"/docs/arm/AA-J/AA-J.8"},next:{title:"J.10 Specific Suppression of Checks",permalink:"/docs/arm/AA-J/AA-J.10"}},g={},y=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}],S={toc:y};function T(e){var t,n=e,{components:l}=n,m=((e,t)=>{var n={};for(var a in e)f.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=A(A({},S),m),d(t,c({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("h1",A({},{id:"j9-the-storage_size-attribute"}),"J.9 The Storage_Size Attribute"),(0,a.kt)("admonition",A({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",A({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)("h4",A({},{id:"static-semantics"}),"Static Semantics"),(0,a.kt)(o.Z,{mdxType:"MarginText"},"1"),(0,a.kt)("p",null,"For any task subtype T, the following attribute is defined: ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"MarginText"},"2"),(0,a.kt)("dt",null,(0,a.kt)("br",null),"T'Storage_Size "),(0,a.kt)("dl",null,(0,a.kt)("dd",null,"Denotes an implementation-defined value of type ",(0,a.kt)("em",null,"universal_integer")," representing the number of storage elements reserved for a task of the subtype T. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(o.Z,{mdxType:"MarginText"},"2.a/3"),(0,a.kt)(s.Z,{items:["AI05-0229-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,a.kt)("strong",null,"To be honest: "),"T'Storage_Size cannot be particularly meaningful in the presence of the specification of the aspect Storage_Size, especially when the expression is dynamic, or depends on a discriminant of the task, because the Storage_Size will be different for different objects of the type. Even without such a specification, the Storage_Size can be different for different objects of the type, and in any case, the value is implementation defined. Hence, it is always implementation defined. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"MarginText"},"3/3"),(0,a.kt)(s.Z,{items:["AI95-00345-01","AI05-0229-1"],mdxType:"MarginInfo"}),(0,a.kt)("dl",null,(0,a.kt)("dd",null,"Storage_Size may be specified for a task first subtype that is not an interface via an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-13/AA-13.3#S0349"},"attribute_definition_clause")),". When the attribute is specified, the Storage_Size aspect is specified to be the value of the given ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression")),". ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(o.Z,{mdxType:"MarginText"},"3.a/3"),(0,a.kt)(s.Z,{items:["AI05-0229-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"When this attribute is specified with an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-13/AA-13.3#S0349"},"attribute_definition_clause")),", the associated aspect is set to the ",(0,a.kt)("em",null,"value")," of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," given in the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-13/AA-13.3#S0349"},"attribute_definition_clause")),", rather than the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," itself. This value is therefore the same for all objects of the type; in particular, it is not re-evaluated when objects are created. This is different than when the aspect is specified with an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification"))," (see ",(0,a.kt)("a",{href:"../AA-13/AA-13.3"},"13.3"),"). ",(0,a.kt)("br",null))),(0,a.kt)("h4",A({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(o.Z,{mdxType:"MarginText"},"3.b/2"),(0,a.kt)(s.Z,{items:["AI95-00345-01"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"We don't allow specifying Storage_Size on task interfaces. We don't need to mention class-wide task types, because these cannot be a first subtype. ",(0,a.kt)("br",null))))}T.isMDXComponent=!0}}]);