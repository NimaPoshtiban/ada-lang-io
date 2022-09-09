"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[2052],{2601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>y,frontMatter:()=>p,metadata:()=>k,toc:()=>b});var a=n(1716),r=n(7556),o=n(9464),i=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,A=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&A(e,n,t[n]);if(d)for(var n of d(t))c.call(t,n)&&A(e,n,t[n]);return e};const p={sidebar_position:198},f="J.8 Mod Clauses",k={unversionedId:"arm/AA-J/AA-J.8",id:"arm/AA-J/AA-J.8",title:"J.8 Mod Clauses",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-J/AA-J.8.mdx",sourceDirName:"arm/AA-J",slug:"/arm/AA-J/AA-J.8",permalink:"/docs/arm/AA-J/AA-J.8",draft:!1,tags:[],version:"current",sidebarPosition:198,frontMatter:{sidebar_position:198},sidebar:"referenceManualSidebar",previous:{title:"J.7 At Clauses",permalink:"/docs/arm/AA-J/AA-J.7"},next:{title:"J.9 The Storage_Size Attribute",permalink:"/docs/arm/AA-J/AA-J.9"}},h={},b=[{value:"Syntax",id:"syntax",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4}],g={toc:b};function y(e){var t,n=e,{components:i}=n,A=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},g),A),l(t,s({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"j8-mod-clauses"}),"J.8 Mod Clauses"),(0,a.kt)("admonition",m({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)("h4",m({},{id:"syntax"}),"Syntax"),(0,a.kt)(r.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"mod_clause"),(0,a.kt)("a",{id:"S0369"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("strong",null,"at")," ",(0,a.kt)("strong",null,"mod")," ",(0,a.kt)("em",null,"static_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression")),";",(0,a.kt)("br",null)),(0,a.kt)("h4",m({},{id:"static-semantics"}),"Static Semantics"),(0,a.kt)("p",null,"A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-13/AA-13.5#S0352"},"record_representation_clause"))," of the form: ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"CodeBlock"},"--  ","{","AI05-0092-1","}","\n"," for r use","\n","    record at mod a;","\n","        ...","\n","    end record;","\n"),(0,a.kt)("p",null,"is equivalent to: ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"CodeBlock"},"for r'Alignment use a;","\n","for r use","\n","    record","\n","        ...","\n","    end record;","\n"),(0,a.kt)(o.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"The preferred syntax for specifying the alignment of an entity is an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-13/AA-13.3#S0349"},"attribute_definition_clause"))," specifying the Alignment attribute. Therefore, the special-purpose ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-J/AA-J.8#S0369"},"mod_clause"))," syntax is now obsolete.",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"The above equivalence implies, for example, that it is illegal to give both a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-J/AA-J.8#S0369"},"mod_clause"))," and an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-13/AA-13.3#S0349"},"attribute_definition_clause"))," specifying the Alignment attribute for the same type. ",(0,a.kt)("br",null)),(0,a.kt)("h4",m({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83"),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"Ada 83's ",(0,a.kt)("code",null,"alignment_clause")," is now called a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-J/AA-J.8#S0369"},"mod_clause")),' to avoid confusion with the new term "Alignment clause" (that is, an ',(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-13/AA-13.3#S0349"},"attribute_definition_clause"))," for the Alignment attribute). ",(0,a.kt)("br",null)))}y.isMDXComponent=!0}}]);