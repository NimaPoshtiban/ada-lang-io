"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6402],{1739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>k,default:()=>_,frontMatter:()=>A,metadata:()=>y,toc:()=>b});var a=n(1716),i=n(3050),r=n(3989),o=n(8604),l=n(7318),s=n(4768),d=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&h(e,n,t[n]);if(c)for(var n of c(t))f.call(t,n)&&h(e,n,t[n]);return e};const A={sidebar_position:127},k="A.7 External Files and File Objects",y={unversionedId:"arm/AA-A/AA-A.7",id:"arm/AA-A/AA-A.7",title:"A.7 External Files and File Objects",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-A/AA-A.7.mdx",sourceDirName:"arm/AA-A",slug:"/arm/AA-A/AA-A.7",permalink:"/docs/arm/AA-A/AA-A.7",draft:!1,tags:[],version:"current",sidebarPosition:127,frontMatter:{sidebar_position:127},sidebar:"referenceManualSidebar",previous:{title:"A.6 Input-Output",permalink:"/docs/arm/AA-A/AA-A.6"},next:{title:"A.8 Sequential and Direct Files",permalink:"/docs/arm/AA-A/AA-A.8"}},x={},b=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}],T={toc:b};function _(e){var t,n=e,{components:d}=n,h=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&f.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=g(g({},T),h),p(t,u({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("h1",g({},{id:"a7-external-files-and-file-objects"}),"A.7 External Files and File Objects"),(0,a.kt)("admonition",g({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",g({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)("h4",g({},{id:"static-semantics"}),"Static Semantics"),(0,a.kt)(l.Z,{mdxType:"MarginText"},"1"),(0,a.kt)("p",null,"Values input from the external environment of the program, or output to the external environment, are considered to occupy ",(0,a.kt)("em",null,"external files"),". An external file can be anything external to the program that can produce a value to be read or receive a value to be written. An external file is identified by a string (the ",(0,a.kt)("em",null,"name"),"). A second string (the ",(0,a.kt)("em",null,"form"),") gives further system-dependent characteristics that may be associated with the file, such as the physical organization or access rights. The conventions governing the interpretation of such strings shall be documented.",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"2/3"),(0,a.kt)(s.Z,{items:["AI05-0299-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"Input and output operations are expressed as operations on objects of some ",(0,a.kt)("em",null,"file type"),", rather than directly in terms of the external files. In the remainder of this clause, the term ",(0,a.kt)("em",null,"file")," is always used to refer to a file object; the term ",(0,a.kt)("em",null,"external file")," is used otherwise.",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"3"),(0,a.kt)("p",null,"Input-output for sequential files of values of a single element type is defined by means of the generic package Sequential_IO. In order to define sequential input-output for a given element type, an instantiation of this generic unit, with the given type as actual parameter, has to be declared. The resulting package contains the declaration of a file type (called File_Type) for files of such elements, as well as the operations applicable to these files, such as the Open, Read, and Write procedures.",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"4/2"),(0,a.kt)(s.Z,{items:["AI95-00285-01"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"Input-output for direct access files is likewise defined by a generic package called Direct_IO. Input-output in human-readable form is defined by the (nongeneric) packages Text_IO for Character and String data, Wide_Text_IO for Wide_Character and Wide_String data, and Wide_Wide_Text_IO for Wide_Wide_Character and Wide_Wide_String data. Input-output for files containing streams of elements representing values of possibly different types is defined by means of the (nongeneric) package Streams.Stream_IO.",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"5"),(0,a.kt)("p",null,"Before input or output operations can be performed on a file, the file first has to be associated with an external file. While such an association is in effect, the file is said to be ",(0,a.kt)("em",null,"open"),", and otherwise the file is said to be ",(0,a.kt)("em",null,"closed"),".",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"6"),(0,a.kt)("p",null,"The language does not define what happens to external files after the completion of the main program and all the library tasks (in particular, if corresponding files have not been closed). The effect of input-output for access types is unspecified.",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"7"),(0,a.kt)("p",null,"An open file has a ",(0,a.kt)("em",null,"current mode"),", which is a value of one of the following enumeration types: ",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"8"),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"type File_Mode is (In_File, Inout_File, Out_File);  --  for Direct_IO","\n"),(0,a.kt)(l.Z,{mdxType:"MarginText"},"9"),(0,a.kt)("p",null,"These values correspond respectively to the cases where only reading, both reading and writing, or only writing are to be performed. ",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"10/2"),(0,a.kt)(s.Z,{items:["AI95-00285-01"],mdxType:"MarginInfo"}),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"type File_Mode is (In_File, Out_File, Append_File);","\n","--  for Sequential_IO, Text_IO, Wide_Text_IO, Wide_Wide_Text_IO, and Stream_IO","\n"),(0,a.kt)(l.Z,{mdxType:"MarginText"},"11"),(0,a.kt)("p",null,"These values correspond respectively to the cases where only reading, only writing, or only appending are to be performed.",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"12"),(0,a.kt)("p",null,"The mode of a file can be changed. ",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"13/2"),(0,a.kt)(s.Z,{items:["AI95-00285-01"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"Several file management operations are common to Sequential_IO, Direct_IO, Text_IO, Wide_Text_IO, and Wide_Wide_Text_IO. These operations are described in subclause ",(0,a.kt)("a",{href:"../AA-A/AA-A.8#Subclause_A.8.2"},"A.8.2")," for sequential and direct files. Any additional effects concerning text input-output are described in subclause ",(0,a.kt)("a",{href:"../AA-A/AA-A.10#Subclause_A.10.2"},"A.10.2"),".",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"14/3"),(0,a.kt)(s.Z,{items:["AI05-0299-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The exceptions that can be propagated by the execution of an input-output subprogram are defined in the package IO_Exceptions; the situations in which they can be propagated are described following the description of the subprogram (and in subclause ",(0,a.kt)("a",{href:"../AA-A/AA-A.13"},"A.13"),"). The exceptions Storage_Error and Program_Error may be propagated. (Program_Error can only be propagated due to errors made by the caller of the subprogram.) Finally, exceptions can be propagated in certain implementation-defined situations. ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"14.a/2"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,a.kt)("em",null,"This paragraph was deleted."),(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"14.b/2"),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,a.kt)("strong",null),"The last sentence here is referring to the documentation requirements in ",(0,a.kt)("a",{href:"../AA-A/AA-A.13"},"A.13"),", \u201c",(0,a.kt)("a",{href:"../AA-A/AA-A.13"},"Exceptions in Input-Output"),"\u201d, and the documentation summary item is provided there. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"15/2"),(0,a.kt)(s.Z,{items:["AI95-00285-01"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 1   Each instantiation of the generic packages Sequential_IO and Direct_IO declares a different type File_Type. In the case of Text_IO, Wide_Text_IO, Wide_Wide_Text_IO, and Streams.Stream_IO, the corresponding type File_Type is unique.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"16/5"),(0,a.kt)(s.Z,{items:["AI12-0440-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 2   A bidirectional device can often be modeled as two sequential files associated with the device, one of mode In_File, and one of mode Out_File. An implementation can  restrict the number of files that can  be associated with a given external file. ",(0,a.kt)("br",null))),(0,a.kt)("h4",g({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"16.a/2"),(0,a.kt)(s.Z,{items:["AI95-00285-01"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Included package Wide_Wide_Text_IO in this description. ",(0,a.kt)("br",null))))}_.isMDXComponent=!0}}]);