"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[779],{2687:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>x,default:()=>M,frontMatter:()=>A,metadata:()=>y,toc:()=>g});var n=a(1716),i=a(3050),r=a(3989),o=a(8604),s=a(7318),d=a(4768),l=Object.defineProperty,m=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&h(e,a,t[a]);if(p)for(var a of p(t))k.call(t,a)&&h(e,a,t[a]);return e};const A={sidebar_position:178},x="F.1 Machine_Radix Attribute Definition Clause",y={unversionedId:"arm/AA-F/AA-F.1",id:"arm/AA-F/AA-F.1",title:"F.1 Machine_Radix Attribute Definition Clause",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-F/AA-F.1.mdx",sourceDirName:"arm/AA-F",slug:"/arm/AA-F/AA-F.1",permalink:"/docs/arm/AA-F/AA-F.1",draft:!1,tags:[],version:"current",sidebarPosition:178,frontMatter:{sidebar_position:178},sidebar:"referenceManualSidebar",previous:{title:"Annex F Information Systems",permalink:"/docs/arm/AA-F/"},next:{title:"F.2 The Package Decimal",permalink:"/docs/arm/AA-F/AA-F.2"}},b={},g=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}],T={toc:g};function M(e){var t,a=e,{components:l}=a,h=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&k.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=f(f({},T),h),m(t,c({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h1",f({},{id:"f1-machine_radix-attribute-definition-clause"}),"F.1 Machine_Radix Attribute Definition Clause"),(0,n.kt)("admonition",f({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.kt)("a",f({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,n.kt)("h4",f({},{id:"static-semantics"}),"Static Semantics"),(0,n.kt)(s.Z,{mdxType:"MarginText"},"1/5"),(0,n.kt)(d.Z,{items:["AI12-0272-1"],mdxType:"MarginInfo"}),(0,n.kt)("p",null,"The representation attribute Machine_Radix may be specified for a decimal first subtype (see ",(0,n.kt)("a",{href:"../AA-3/AA-3.5#Subclause_3.5.9"},"3.5.9"),") via an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-13/AA-13.3#S0349"},"attribute_definition_clause")),"; the expression of such a clause shall be static, and its value shall be 2 or 10. A value of 2 implies a binary base range; a value of 10 implies a decimal base range. ",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"1.a"),(0,n.kt)(i.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,n.kt)("strong",null),"In the absence of a Machine_Radix clause, the choice of 2 versus 10 for S'Machine_Radix is not specified. ",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"1.b/3"),(0,n.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,n.kt)("strong",null,"Aspect Description for "),(0,n.kt)("strong",null,"Machine_Radix: "),"Radix (2 or 10) that is used to represent a decimal fixed point type.",(0,n.kt)("br",null))),(0,n.kt)("h4",f({},{id:"implementation-advice"}),"Implementation Advice"),(0,n.kt)(s.Z,{mdxType:"MarginText"},"2"),(0,n.kt)("p",null,"Packed decimal should be used as the internal representation for objects of subtype S when S'Machine_Radix = 10. ",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"2.a/2"),(0,n.kt)(i.Z,{type:"aarm",aarm:"implementation-advice",mdxType:"Admonition"},(0,n.kt)("strong",null),"Packed decimal should be used as the internal representation for objects of subtype ",(0,n.kt)("em",null,"S")," when ",(0,n.kt)("em",null,"S"),"'Machine_Radix = 10.",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"2.b/3"),(0,n.kt)(d.Z,{items:["AI05-0229-1"],mdxType:"MarginInfo"}),(0,n.kt)(i.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,n.kt)("strong",null),"The intent of a decimal Machine_Radix attribute definition clause is to allow the programmer to declare an Ada decimal data object whose representation matches a particular COBOL implementation's representation of packed decimal items. The Ada object may then be passed to an interfaced COBOL program that takes a packed decimal data item as a parameter, assuming that convention COBOL has been specified for the Ada object's type with an aspect Convention.",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"2.c"),(0,n.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Additionally, the Ada compiler may choose to generate arithmetic instructions that exploit the packed decimal representation.",(0,n.kt)("br",null))),(0,n.kt)("h4",f({},{id:"examples"}),"Examples"),(0,n.kt)(s.Z,{mdxType:"MarginText"},"3"),(0,n.kt)("p",null,(0,n.kt)("em",null,"Example of Machine_Radix attribute definition clause:")," ",(0,n.kt)("br",null)),(0,n.kt)(s.Z,{mdxType:"MarginText"},"4"),(0,n.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"type Money is delta 0.01 digits 15;","\n","for Money'Machine_Radix use 10;","\n"),(0,n.kt)("h4",f({},{id:"wording-changes-from-ada-2012"}),"Wording Changes from Ada 2012"),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"4.a/5"),(0,n.kt)(d.Z,{items:["AI12-0272-1"],mdxType:"MarginInfo"}),(0,n.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Clarified that Machine_Radix is a representation aspect. ",(0,n.kt)("br",null))))}M.isMDXComponent=!0}}]);