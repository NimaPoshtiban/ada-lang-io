"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8797],{27966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>_,frontMatter:()=>f,metadata:()=>y,toc:()=>T});var a=n(91716),r=n(21256),o=n(24895),i=n(28090),s=n(48424),p=n(82262),l=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,x=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&x(e,n,t[n]);if(c)for(var n of c(t))h.call(t,n)&&x(e,n,t[n]);return e};const f={sidebar_position:133},k="A.13 Exceptions in Input-Output",y={unversionedId:"arm/AA-A/AA-A.13",id:"arm/AA-A/AA-A.13",title:"A.13 Exceptions in Input-Output",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-A/AA-A.13.mdx",sourceDirName:"arm/AA-A",slug:"/arm/AA-A/AA-A.13",permalink:"/docs/arm/AA-A/AA-A.13",draft:!1,tags:[],version:"current",sidebarPosition:133,frontMatter:{sidebar_position:133},sidebar:"referenceManualSidebar",previous:{title:"A.12 Stream Input-Output",permalink:"/docs/arm/AA-A/AA-A.12"},next:{title:"A.14 File Sharing",permalink:"/docs/arm/AA-A/AA-A.14"}},b={},T=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Documentation Requirements",id:"documentation-requirements",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Erroneous Execution",id:"erroneous-execution",level:4}],A={toc:T};function _(e){var t,n=e,{components:l}=n,x=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&h.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=g(g({},A),x),d(t,u({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("h1",g({},{id:"a13-exceptions-in-input-output"}),"A.13 Exceptions in Input-Output"),(0,a.kt)("admonition",g({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",g({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(s.Z,{mdxType:"MarginText"},"1/5"),(0,a.kt)(p.Z,{items:["AI12-0445-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The package IO_Exceptions defines the exceptions used by the predefined input-output packages. ",(0,a.kt)("br",null)),(0,a.kt)("h4",g({},{id:"static-semantics"}),"Static Semantics"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"2"),(0,a.kt)("p",null,"The library package IO_Exceptions has the following declaration: ",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"3/5"),(0,a.kt)(p.Z,{items:["AI12-0414-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{language:"ada",mdxType:"CodeBlock"},"package Ada.IO_Exceptions","\n","   with Pure is","\n",(0,a.kt)(s.Z,{mdxType:"MarginText"},"4"),"Status_Error : exception;","\n","   Mode_Error   : exception;","\n","   Name_Error   : exception;","\n","   Use_Error    : exception;","\n","   Device_Error : exception;","\n","   End_Error    : exception;","\n","   Data_Error   : exception;","\n","   Layout_Error : exception;","\n",(0,a.kt)(s.Z,{mdxType:"MarginText"},"5"),"end Ada.IO_Exceptions;","\n"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"6"),(0,a.kt)("p",null,"If more than one error condition exists, the corresponding exception that appears earliest in the following list is the one that is propagated.",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"7"),(0,a.kt)("p",null,"The exception Status_Error is propagated by an attempt to operate upon a file that is not open, and by an attempt to open a file that is already open.",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"8"),(0,a.kt)("p",null,"The exception Mode_Error is propagated by an attempt to read from, or test for the end of, a file whose current mode is Out_File or Append_File, and also by an attempt to write to a file whose current mode is In_File. In the case of Text_IO, the exception Mode_Error is also propagated by specifying a file whose current mode is Out_File or Append_File in a call of Set_Input, Skip_Line, End_Of_Line, Skip_Page, or End_Of_Page; and by specifying a file whose current mode is In_File in a call of Set_Output, Set_Line_Length, Set_Page_Length, Line_Length, Page_Length, New_Line, or New_Page.",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"9"),(0,a.kt)("p",null,"The exception Name_Error is propagated by a call of Create or Open if the string given for the parameter Name does not allow the identification of an external file. For example, this exception is propagated if the string is improper, or, alternatively, if either none or more than one external file corresponds to the string.",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"10"),(0,a.kt)("p",null,"The exception Use_Error is propagated if an operation is attempted that is not possible for reasons that depend on characteristics of the external file. For example, this exception is propagated by the procedure Create, among other circumstances, if the given mode is Out_File but the form specifies an input only device, if the parameter Form specifies invalid access rights, or if an external file with the given name already exists and overwriting is not allowed.",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"11"),(0,a.kt)("p",null,"The exception Device_Error is propagated if an input-output operation cannot be completed because of a malfunction of the underlying system.",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"12"),(0,a.kt)("p",null,"The exception End_Error is propagated by an attempt to skip (read past) the end of a file.",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"13"),(0,a.kt)("p",null,"The exception Data_Error can be propagated by the procedure Read (or by the Read attribute) if the element read cannot be interpreted as a value of the required subtype. This exception is also propagated by a procedure Get (defined in the package Text_IO) if the input character sequence fails to satisfy the required syntax, or if the value input does not belong to the range of the required subtype.",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"14"),(0,a.kt)("p",null,"The exception Layout_Error is propagated (in text input-output) by Col, Line, or Page if the value returned exceeds Count'Last. The exception Layout_Error is also propagated on output by an attempt to set column or line numbers in excess of specified maximum line or page lengths, respectively (excluding the unbounded cases). It is also propagated by an attempt to Put too many characters to a string.",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"14.1/3"),(0,a.kt)(p.Z,{items:["AI05-0262-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"These exceptions are also propagated by various other language-defined packages and operations, see the definition of those entities for other reasons that these exceptions are propagated.",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"14.a/3"),(0,a.kt)(p.Z,{items:["AI05-0299-1"],mdxType:"MarginInfo"}),(0,a.kt)(r.Z,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,a.kt)("strong",null),"This subclause is based in Ada 95. Later versions of Ada (starting with Technical Corrigendum 1) have added a number of additional places and reasons that cause these exceptions. In particular, TC1 says that stream attributes need to raise End_Error in some circumstances; Amendment 1 adds Ada.Directories and a number of new places and reasons that Name_Error and Use_Error are raised. There are more. We don't want to try to update this text (or even this note!) for every possible reason and place that might raise one of these exceptions, so we add this blanket statement. ",(0,a.kt)("br",null))),(0,a.kt)("h4",g({},{id:"documentation-requirements"}),"Documentation Requirements"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"15"),(0,a.kt)("p",null,"The implementation shall document the conditions under which Name_Error, Use_Error and Device_Error are propagated. ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"15.a/2"),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,a.kt)("strong",null,"Documentation Requirement: "),"The conditions under which Io_Exceptions.Name_Error, Io_Exceptions.Use_Error, and Io_Exceptions.Device_Error are propagated.",(0,a.kt)("br",null))),(0,a.kt)("h4",g({},{id:"implementation-permissions"}),"Implementation Permissions"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"16/5"),(0,a.kt)(p.Z,{items:["AI12-0444-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"When the associated check is complex, it is optional to propagate Data_Error as part of a procedure Read (or the Read attribute) when the value read cannot be interpreted as a value of the required subtype. ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"16.a"),(0,a.kt)(r.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"An example where the implementation may choose not to perform the check is an enumeration type with a representation clause with \u201choles\u201d in the range of internal codes.",(0,a.kt)("br",null))),(0,a.kt)("h4",g({},{id:"erroneous-execution"}),"Erroneous Execution"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"17"),(0,a.kt)("p",null,"[If the element read by the procedure Read (or by the Read attribute) cannot be interpreted as a value of the required subtype, but this is not detected and Data_Error is not propagated, then the resulting value can be abnormal, and subsequent references to the value can lead to erroneous execution, as explained in ",(0,a.kt)("a",{href:"../AA-13/AA-13.9#Subclause_13.9.1"},"13.9.1"),". ]",(0,a.kt)("br",null)))}_.isMDXComponent=!0}}]);