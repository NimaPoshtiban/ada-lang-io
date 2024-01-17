"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[5150],{39265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>O,frontMatter:()=>g,metadata:()=>k,toc:()=>x});var a=n(91716),i=n(21256),o=n(24895),r=n(48424),d=n(82262),s=Object.defineProperty,p=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,A=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&A(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&A(e,n,t[n]);return e};const g={sidebar_position:126},f="A.6 Input-Output",k={unversionedId:"arm/AA-A/AA-A.6",id:"arm/AA-A/AA-A.6",title:"A.6 Input-Output",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-A/AA-A.6.mdx",sourceDirName:"arm/AA-A",slug:"/arm/AA-A/AA-A.6",permalink:"/docs/arm/AA-A/AA-A.6",draft:!1,tags:[],version:"current",sidebarPosition:126,frontMatter:{sidebar_position:126},sidebar:"referenceManualSidebar",previous:{title:"A.5 The Numerics Packages",permalink:"/docs/arm/AA-A/AA-A.5"},next:{title:"A.7 External Files and File Objects",permalink:"/docs/arm/AA-A/AA-A.7"}},y={},x=[{value:"Inconsistencies With Ada 83",id:"inconsistencies-with-ada-83",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}],T={toc:x};function O(e){var t,n=e,{components:s}=n,A=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},T),A),p(t,l({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("h1",h({},{id:"a6-input-output"}),"A.6 Input-Output"),(0,a.kt)("admonition",h({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",h({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(r.Z,{mdxType:"MarginText"},"1/5"),(0,a.kt)(d.Z,{items:["AI95-00285-01","AI12-0445-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"[ Input-output is provided through language-defined packages, each of which is a child of the root package Ada. The generic packages Sequential_IO and Direct_IO define input-output operations applicable to files containing elements of a given type. The generic package Storage_IO supports reading from and writing to an in-memory buffer. Additional operations for text input-output are supplied in the packages Text_IO, Wide_Text_IO, and Wide_Wide_Text_IO. Heterogeneous input-output is provided through the child packages Streams.Stream_IO and Text_IO.Text_Streams (see also ",(0,a.kt)("a",{href:"../AA-13/AA-13.13"},"13.13"),"). The package IO_Exceptions defines the exceptions used by the predefined input-output packages.] ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",h({},{id:"inconsistencies-with-ada-83"}),"Inconsistencies With Ada 83")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"1.a"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The introduction of Append_File as a new element of the enumeration type File_Mode in Sequential_IO and Text_IO, and the introduction of several new declarations in Text_IO, may result in name clashes in the presence of ",(0,a.kt)("strong",null,"use")," clauses. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",h({},{id:"extensions-to-ada-83"}),"Extensions to Ada 83")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"1.b"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Text_IO enhancements (Get_Immediate, Look_Ahead, Standard_Error, Modular_IO, Decimal_IO), Wide_Text_IO, and the stream input-output facilities are new in Ada 95. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",h({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"1.c"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"RM83-14.6, \u201cLow Level Input-Output\u201d, is removed. This has no semantic effect, since the package was entirely implementation defined, nobody actually implemented it, and if they did, they can always provide it as a vendor-supplied package. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",h({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"1.d/2"),(0,a.kt)(d.Z,{items:["AI95-00285-01"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Included package Wide_Wide_Text_IO in this description. ",(0,a.kt)("br",null))))}O.isMDXComponent=!0}}]);