"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8954],{20:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>T,contentTitle:()=>k,default:()=>_,frontMatter:()=>A,metadata:()=>g,toc:()=>h});var a=n(1716),r=n(2787),o=n(2670),i=n(8604),l=n(6990),d=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&y(e,n,t[n]);if(m)for(var n of m(t))c.call(t,n)&&y(e,n,t[n]);return e};const A={sidebar_position:126},k="A.9 The Generic Package Storage_IO",g={unversionedId:"arm/AA-A/AA-A.9",id:"arm/AA-A/AA-A.9",title:"A.9 The Generic Package Storage_IO",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-A/AA-A.9.mdx",sourceDirName:"arm/AA-A",slug:"/arm/AA-A/AA-A.9",permalink:"/docs/arm/AA-A/AA-A.9",draft:!1,tags:[],version:"current",sidebarPosition:126,frontMatter:{sidebar_position:126},sidebar:"referenceManualSidebar",previous:{title:"A.8 Sequential and Direct Files",permalink:"/docs/arm/AA-A/AA-A.8"},next:{title:"A.10 Text Input-Output",permalink:"/docs/arm/AA-A/AA-A.10"}},T={},h=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4}],x={toc:h};function _(e){var t,n=e,{components:d}=n,y=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&m)for(var a of m(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},x),y),p(t,s({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("h1",f({},{id:"a9-the-generic-package-storage_io"}),"A.9 The Generic Package Storage_IO"),(0,a.kt)("admonition",f({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",f({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"1")),(0,a.kt)("p",null,"The generic package Storage_IO provides for reading from and writing to an in-memory buffer. This generic package supports the construction of user-defined input-output packages. ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"1.a")),(0,a.kt)(r.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,a.kt)("strong",null),'This package exists to allow the portable construction of user-defined direct-access-oriented input-output packages. The Write procedure writes a value of type Element_Type into a Storage_Array of size Buffer_Size, flattening out any implicit levels of indirection used in the representation of the type. The Read procedure reads a value of type Element_Type from the buffer, reconstructing any implicit levels of indirection used in the representation of the type. It also properly initializes any type tags that appear within the value, presuming that the buffer was written by a different program and that tag values for the"same" type might vary from one executable to another. ',(0,a.kt)("br",null)),(0,a.kt)("h4",f({},{id:"static-semantics"}),"Static Semantics"),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"2")),(0,a.kt)("p",null,"The generic library package Storage_IO has the following declaration: ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"3/5")),(0,a.kt)(i.Z,{language:"ada",mdxType:"CodeBlock"},"--  ","{","AI12-0302-1","}","\n"," with Ada.IO_Exceptions;","\n","with System.Storage_Elements;","\n","generic","\n","   type Element_Type is private;","\n","package Ada.Storage_IO","\n","   with Preelaborate, Global =",">"," in out synchronized is","\n",(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"4")),"Buffer_Size : constant System.Storage_Elements.Storage_Count :=","\n","      implementation-defined;","\n","   subtype Buffer_Type is","\n","      System.Storage_Elements.Storage_Array(1..Buffer_Size);","\n",(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"5")),"-- Input and output operations","\n",(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"6")),"procedure Read (Buffer : in  Buffer_Type; Item : out Element_Type);","\n",(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"7")),"procedure Write(Buffer : out Buffer_Type; Item : in  Element_Type);","\n",(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"8")),"-- Exceptions","\n",(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"9")),"Data_Error   : exception renames IO_Exceptions.Data_Error;","\n","end Ada.Storage_IO;","\n",(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"10"))),(0,a.kt)("p",null,"In each instance, the constant Buffer_Size has a value that is the size (in storage elements) of the buffer required to represent the content of an object of subtype Element_Type, including any implicit levels of indirection used by the implementation. The Read and Write procedures of Storage_IO correspond to the Read and Write procedures of Direct_IO (see ",(0,a.kt)("a",{href:"../AA-A/AA-A.8#Subclause_A.8.4"},"A.8.4"),"), but with the content of the Item parameter being read from or written into the specified Buffer, rather than an external file.",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"10.a")),(0,a.kt)(r.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"As with Direct_IO, the Element_Type formal of Storage_IO does not have an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.7#S0060"},"unknown_discriminant_part"))," so that there is a well-defined upper bound on the size of the buffer needed to hold the content of an object of the formal subtype (i.e. Buffer_Size). If there are no implicit levels of indirection, Buffer_Size will typically equal: ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"10.b")),(0,a.kt)(i.Z,{language:"ada",mdxType:"CodeBlock"},"(Element_Type'Size + System.Storage_Unit - 1) / System.Storage_Unit","\n",(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"10.c"))),(0,a.kt)(r.Z,{type:"aarm",aarm:"implementation-defined",title:"Implementation defined: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"The value of Buffer_Size in Storage_IO.",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"11")),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 1   A buffer used for Storage_IO holds only one element at a time; an external file used for Direct_IO holds a sequence of elements. ",(0,a.kt)("br",null)),(0,a.kt)("h4",f({},{id:"extensions-to-ada-83"}),"Extensions to Ada 83"),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"11.a/3")),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,a.kt)("em",null,"AI05-0005-1"),"}"," ",(0,a.kt)("br",null),"Storage_IO is new in Ada 95. ",(0,a.kt)("br",null)))}_.isMDXComponent=!0}}]);