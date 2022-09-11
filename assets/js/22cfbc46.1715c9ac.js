"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[7893],{1073:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>A,contentTitle:()=>h,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>k});var n=i(1716),a=i(2787),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,i)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,f=(e,t)=>{for(var i in t||(t={}))c.call(t,i)&&u(e,i,t[i]);if(l)for(var i of l(t))d.call(t,i)&&u(e,i,t[i]);return e};const p={sidebar_position:199},h="J.9 The Storage_Size Attribute",m={unversionedId:"arm/AA-J/AA-J.9",id:"arm/AA-J/AA-J.9",title:"J.9 The Storage_Size Attribute",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-J/AA-J.9.mdx",sourceDirName:"arm/AA-J",slug:"/arm/AA-J/AA-J.9",permalink:"/docs/arm/AA-J/AA-J.9",draft:!1,tags:[],version:"current",sidebarPosition:199,frontMatter:{sidebar_position:199},sidebar:"referenceManualSidebar",previous:{title:"J.8 Mod Clauses",permalink:"/docs/arm/AA-J/AA-J.8"},next:{title:"J.10 Specific Suppression of Checks",permalink:"/docs/arm/AA-J/AA-J.10"}},A={},k=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}],b={toc:k};function g(e){var t,i=e,{components:r}=i,u=((e,t)=>{var i={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&d.call(e,n)&&(i[n]=e[n]);return i})(i,["components"]);return(0,n.kt)("wrapper",(t=f(f({},b),u),o(t,s({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",f({},{id:"j9-the-storage_size-attribute"}),"J.9 The Storage_Size Attribute"),(0,n.kt)("admonition",f({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.kt)("a",f({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,n.kt)("h4",f({},{id:"static-semantics"}),"Static Semantics"),(0,n.kt)("p",null,"For any task subtype T, the following attribute is defined: ",(0,n.kt)("br",null)),(0,n.kt)("dt",null,(0,n.kt)("br",null),"T'Storage_Size "),(0,n.kt)("dl",null,(0,n.kt)("dd",null,"Denotes an implementation-defined value of type ",(0,n.kt)("em",null,"universal_integer")," representing the number of storage elements reserved for a task of the subtype T. ",(0,n.kt)("br",null))),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,n.kt)("strong",null,"To be honest: "),"{",(0,n.kt)("em",null,"AI05-0229-1"),"}"," ",(0,n.kt)("br",null),"T'Storage_Size cannot be particularly meaningful in the presence of the specification of the aspect Storage_Size, especially when the expression is dynamic, or depends on a discriminant of the task, because the Storage_Size will be different for different objects of the type. Even without such a specification, the Storage_Size can be different for different objects of the type, and in any case, the value is implementation defined. Hence, it is always implementation defined. ",(0,n.kt)("br",null)),(0,n.kt)("dl",null,(0,n.kt)("dd",null,"{",(0,n.kt)("em",null,"AI95-00345-01"),"}"," ","{",(0,n.kt)("em",null,"AI05-0229-1"),"}"," ",(0,n.kt)("br",null),"Storage_Size may be specified for a task first subtype that is not an interface via an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-13/AA-13.3#S0349"},"attribute_definition_clause")),". When the attribute is specified, the Storage_Size aspect is specified to be the value of the given ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression")),". ",(0,n.kt)("br",null))),(0,n.kt)(a.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"{",(0,n.kt)("em",null,"AI05-0229-1"),"}"," ",(0,n.kt)("br",null),"When this attribute is specified with an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-13/AA-13.3#S0349"},"attribute_definition_clause")),", the associated aspect is set to the ",(0,n.kt)("em",null,"value")," of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," given in the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-13/AA-13.3#S0349"},"attribute_definition_clause")),", rather than the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," itself. This value is therefore the same for all objects of the type; in particular, it is not re-evaluated when objects are created. This is different than when the aspect is specified with an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification"))," (see 13.3). ",(0,n.kt)("br",null)),(0,n.kt)("h4",f({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95"),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI95-00345-01"),"}"," ",(0,n.kt)("br",null),"We don't allow specifying Storage_Size on task interfaces. We don't need to mention class-wide task types, because these cannot be a first subtype. ",(0,n.kt)("br",null)))}g.isMDXComponent=!0}}]);