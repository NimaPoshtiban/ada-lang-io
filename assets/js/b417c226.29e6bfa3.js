"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[9860],{5506:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>g,frontMatter:()=>m,metadata:()=>h,toc:()=>b});var n=r(1716),o=r(8604),a=r(2787),i=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&f(e,r,t[r]);if(p)for(var r of p(t))d.call(t,r)&&f(e,r,t[r]);return e};const m={sidebar_position:108},k="13.6 Change of Representation",h={unversionedId:"arm/AA-13/AA-13.6",id:"arm/AA-13/AA-13.6",title:"13.6 Change of Representation",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-13/AA-13.6.mdx",sourceDirName:"arm/AA-13",slug:"/arm/AA-13/AA-13.6",permalink:"/docs/arm/AA-13/AA-13.6",draft:!1,tags:[],version:"current",sidebarPosition:108,frontMatter:{sidebar_position:108},sidebar:"referenceManualSidebar",previous:{title:"13.5 Record Layout",permalink:"/docs/arm/AA-13/AA-13.5"},next:{title:"13.7 The Package System",permalink:"/docs/arm/AA-13/AA-13.7"}},y={},b=[{value:"Examples",id:"examples",level:4}],A={toc:b};function g(e){var t,r=e,{components:i}=r,f=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},A),f),s(t,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"136-change-of-representation"}),"13.6 Change of Representation"),(0,n.kt)("admonition",u({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0229-1"),"}"," ","{",(0,n.kt)("em",null,"AI12-0445-1"),"}"," ",(0,n.kt)("br",null),"[ A ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.6#S0162"},"type_conversion"))," (see 4.6) can be used to convert between two different representations of the same array or record. To convert an array from one representation to another, two array types with matching component subtypes and convertible index types are required. If one type has Pack specified and the other does not, then explicit conversion can be used to pack or unpack an array.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI12-0425-1"),"}"," ","{",(0,n.kt)("em",null,"AI12-0445-1"),"}"," ",(0,n.kt)("br",null),"To convert an untagged record from one representation to another, two record types with a common ancestor type are required. Distinct representations can then be specified for the record types, and explicit conversion between the types can be used to effect a change in representation.] ",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"{",(0,n.kt)("em",null,"AI12-0425-1"),"}"," ",(0,n.kt)("br",null),"The language does not allow implicit copying of by-reference types, so it also does not allow different representations of related by-reference types. Similarly, language rules prevent related tagged types from having different representations of the parent part. Therefore, this technique cannot be used for tagged or by-reference types. ",(0,n.kt)("br",null)),(0,n.kt)("h4",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,(0,n.kt)("em",null,"Example of change of representation:")," ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{mdxType:"CodeBlock"},"-- Packed_Descriptor and Descriptor are two different types","\n","-- with identical characteristics, apart from their","\n","-- representation","\n","type Descriptor is","\n","    record","\n","      -- components of a descriptor","\n","    end record;","\n","type Packed_Descriptor is new Descriptor;","\n","for Packed_Descriptor use","\n","    record","\n","      -- component clauses for some or for all components","\n","    end record;","\n","-- Change of representation can now be accomplished by explicit type conversions:","\n","D : Descriptor;","\n","P : Packed_Descriptor;","\n","P := Packed_Descriptor(D);  -- pack D","\n","D := Descriptor(P);         -- unpack P","\n"))}g.isMDXComponent=!0}}]);