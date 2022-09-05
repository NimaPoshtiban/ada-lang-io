"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[5716],{1716:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,h=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(9440),r=(n(6687),n(1716));const i={sidebar_position:124},o="A.7  External Files and File Objects",s={unversionedId:"arm/AA-A.7",id:"arm/AA-A.7",title:"A.7  External Files and File Objects",description:"Static Semantics",source:"@site/docs/arm/AA-A.7.md",sourceDirName:"arm",slug:"/arm/AA-A.7",permalink:"/docs/arm/AA-A.7",draft:!1,tags:[],version:"current",sidebarPosition:124,frontMatter:{sidebar_position:124},sidebar:"tutorialSidebar",previous:{title:"A.6  Input-Output",permalink:"/docs/arm/AA-A.6"},next:{title:"A.8  Sequential and Direct Files",permalink:"/docs/arm/AA-A.8"}},l={},c=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"a7--external-files-and-file-objects"},"A.7  External Files and File Objects"),(0,r.kt)("h4",{id:"static-semantics"},"Static Semantics"),(0,r.kt)("p",null,"Values input from the external environment of the program, or output to the external environment, are considered to occupy external files. An external file can be anything external to the program that can produce a value to be read or receive a value to be written. An external file is identified by a string (the name). A second string (the form) gives further system-dependent characteristics that may be associated with the file, such as the physical organization or access rights. The conventions governing the interpretation of such strings shall be documented."),(0,r.kt)("p",null,"{AI05-0299-1} Input and output operations are expressed as operations on objects of some file type, rather than directly in terms of the external files. In the remainder of this clause, the term file is always used to refer to a file object; the term external file is used otherwise."),(0,r.kt)("p",null,"Input-output for sequential files of values of a single element type is defined by means of the generic package Sequential_IO. In order to define sequential input-output for a given element type, an instantiation of this generic unit, with the given type as actual parameter, has to be declared. The resulting package contains the declaration of a file type (called File_Type) for files of such elements, as well as the operations applicable to these files, such as the Open, Read, and Write procedures."),(0,r.kt)("p",null,"{AI95-00285-01} Input-output for direct access files is likewise defined by a generic package called Direct_IO. Input-output in human-readable form is defined by the (nongeneric) packages Text_IO for Character and String data, Wide_Text_IO for Wide_Character and Wide_String data, and Wide_Wide_Text_IO for Wide_Wide_Character and Wide_Wide_String data. Input-output for files containing streams of elements representing values of possibly different types is defined by means of the (nongeneric) package Streams.Stream_IO."),(0,r.kt)("p",null,"Before input or output operations can be performed on a file, the file first has to be associated with an external file. While such an association is in effect, the file is said to be open, and otherwise the file is said to be closed."),(0,r.kt)("p",null,"The language does not define what happens to external files after the completion of the main program and all the library tasks (in particular, if corresponding files have not been closed). The effect of input-output for access types is unspecified."),(0,r.kt)("p",null,"An open file has a current mode, which is a value of one of the following enumeration types: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"type File_Mode is (In_File, Inout_File, Out_File);  --  for Direct_IO\n\n")),(0,r.kt)("p",null,"These values correspond respectively to the cases where only reading, both reading and writing, or only writing are to be performed. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI95-00285-01} type File_Mode is (In_File, Out_File, Append_File);\n--  for Sequential_IO, Text_IO, Wide_Text_IO, Wide_Wide_Text_IO, and Stream_IO\n\n")),(0,r.kt)("p",null,"These values correspond respectively to the cases where only reading, only writing, or only appending are to be performed."),(0,r.kt)("p",null,"The mode of a file can be changed. "),(0,r.kt)("p",null,"{AI95-00285-01} Several file management operations are common to Sequential_IO, Direct_IO, Text_IO, Wide_Text_IO, and Wide_Wide_Text_IO. These operations are described in subclause A.8.2 for sequential and direct files. Any additional effects concerning text input-output are described in subclause A.10.2."),(0,r.kt)("p",null,"{AI05-0299-1} The exceptions that can be propagated by the execution of an input-output subprogram are defined in the package IO_Exceptions; the situations in which they can be propagated are described following the description of the subprogram (and in subclause A.13). The exceptions Storage_Error and Program_Error may be propagated. (Program_Error can only be propagated due to errors made by the caller of the subprogram.) Finally, exceptions can be propagated in certain implementation-defined situations. "),(0,r.kt)("p",null,"This paragraph was deleted."),(0,r.kt)("p",null,'Discussion: The last sentence here is referring to the documentation requirements in A.13, "Exceptions in Input-Output", and the documentation summary item is provided there. '),(0,r.kt)("p",null,"NOTE 1   {AI95-00285-01} Each instantiation of the generic packages Sequential_IO and Direct_IO declares a different type File_Type. In the case of Text_IO, Wide_Text_IO, Wide_Wide_Text_IO, and Streams.Stream_IO, the corresponding type File_Type is unique."),(0,r.kt)("p",null,"NOTE 2   {AI12-0440-1} A bidirectional device can often be modeled as two sequential files associated with the device, one of mode In_File, and one of mode Out_File. An implementation can restrict the number of files that can be associated with a given external file. "),(0,r.kt)("h4",{id:"wording-changes-from-ada-95"},"Wording Changes from Ada 95"),(0,r.kt)("p",null,"{AI95-00285-01} Included package Wide_Wide_Text_IO in this description."))}p.isMDXComponent=!0}}]);