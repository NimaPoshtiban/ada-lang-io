"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[9860],{5506:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>x,contentTitle:()=>h,default:()=>v,frontMatter:()=>g,metadata:()=>A,toc:()=>b});var n=r(1716),a=r(3050),o=r(3989),i=r(8604),s=r(7318),p=r(4768),c=Object.defineProperty,d=Object.defineProperties,l=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&u(e,r,t[r]);if(m)for(var r of m(t))y.call(t,r)&&u(e,r,t[r]);return e};const g={sidebar_position:110},h="13.6 Change of Representation",A={unversionedId:"arm/AA-13/AA-13.6",id:"arm/AA-13/AA-13.6",title:"13.6 Change of Representation",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-13/AA-13.6.mdx",sourceDirName:"arm/AA-13",slug:"/arm/AA-13/AA-13.6",permalink:"/docs/arm/AA-13/AA-13.6",draft:!1,tags:[],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110},sidebar:"referenceManualSidebar",previous:{title:"13.5 Record Layout",permalink:"/docs/arm/AA-13/AA-13.5"},next:{title:"13.7 The Package System",permalink:"/docs/arm/AA-13/AA-13.7"}},x={},b=[{value:"Examples",id:"examples",level:4}],T={toc:b};function v(e){var t,r=e,{components:c}=r,u=((e,t)=>{var r={};for(var n in e)f.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&y.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=k(k({},T),u),d(t,l({components:c,mdxType:"MDXLayout"}))),(0,n.kt)("h1",k({},{id:"136-change-of-representation"}),"13.6 Change of Representation"),(0,n.kt)("admonition",k({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.kt)("a",k({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,n.kt)(s.Z,{mdxType:"MarginText"},"1/5"),(0,n.kt)(p.Z,{items:["AI05-0229-1","AI12-0445-1"],mdxType:"MarginInfo"}),(0,n.kt)("p",null,"[ A ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.6#S0162"},"type_conversion"))," (see ",(0,n.kt)("a",{href:"../AA-4/AA-4.6"},"4.6"),") can be used to convert between two different representations of the same array or record. To convert an array from one representation to another, two array types  with matching component subtypes  and convertible index types are required. If one type has Pack specified and the other does not, then explicit conversion can be used to pack or unpack an array.",(0,n.kt)("br",null)),(0,n.kt)(s.Z,{mdxType:"MarginText"},"2/5"),(0,n.kt)(p.Z,{items:["AI12-0425-1","AI12-0445-1"],mdxType:"MarginInfo"}),(0,n.kt)("p",null,"To convert an untagged  record from one representation to another, two record types with a common ancestor type are required . Distinct representations can then be specified for the record types, and explicit conversion between the types can be used to effect a change in representation.] ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"2.a/5"),(0,n.kt)(p.Z,{items:["AI12-0425-1"],mdxType:"MarginInfo"}),(0,n.kt)(a.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,n.kt)("strong",null),"The language does not allow implicit copying of by-reference types, so it also does not allow different representations of related by-reference types. Similarly, language rules prevent related tagged types from having different representations of the parent part. Therefore, this  technique cannot be used  for tagged or by-reference types. ",(0,n.kt)("br",null))),(0,n.kt)("h4",k({},{id:"examples"}),"Examples"),(0,n.kt)(s.Z,{mdxType:"MarginText"},"3"),(0,n.kt)("p",null,(0,n.kt)("em",null,"Example of change of representation:")," ",(0,n.kt)("br",null)),(0,n.kt)(s.Z,{mdxType:"MarginText"},"4"),(0,n.kt)(i.Z,{language:"ada",mdxType:"CodeBlock"},"-- Packed_Descriptor and Descriptor are two different types","\n","-- with identical characteristics, apart from their","\n","-- representation","\n",(0,n.kt)(s.Z,{mdxType:"MarginText"},"5"),"type Descriptor is","\n","    record","\n","      -- components of a descriptor","\n","    end record;","\n",(0,n.kt)(s.Z,{mdxType:"MarginText"},"6"),"type Packed_Descriptor is new Descriptor;","\n",(0,n.kt)(s.Z,{mdxType:"MarginText"},"7"),"for Packed_Descriptor use","\n","    record","\n","      -- component clauses for some or for all components","\n","    end record;","\n",(0,n.kt)(s.Z,{mdxType:"MarginText"},"8"),"-- Change of representation can now be accomplished by explicit type conversions:","\n",(0,n.kt)(s.Z,{mdxType:"MarginText"},"9"),"D : Descriptor;","\n","P : Packed_Descriptor;","\n",(0,n.kt)(s.Z,{mdxType:"MarginText"},"10"),"P := Packed_Descriptor(D);  -- pack D","\n","D := Descriptor(P);         -- unpack P","\n"))}v.isMDXComponent=!0}}]);