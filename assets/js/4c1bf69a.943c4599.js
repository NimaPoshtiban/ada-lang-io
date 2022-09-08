"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[7300],{7782:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>y,frontMatter:()=>u,metadata:()=>f,toc:()=>A});var i=a(1716),n=a(9464),s=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))d.call(t,a)&&c(e,a,t[a]);return e};const u={sidebar_position:148},h="C.5 Aspect Discard_Names",f={unversionedId:"arm/AA-C/AA-C.5",id:"arm/AA-C/AA-C.5",title:"C.5 Aspect Discard_Names",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-C/AA-C.5.mdx",sourceDirName:"arm/AA-C",slug:"/arm/AA-C/AA-C.5",permalink:"/docs/arm/AA-C/AA-C.5",draft:!1,tags:[],version:"current",sidebarPosition:148,frontMatter:{sidebar_position:148},sidebar:"referenceManualSidebar",previous:{title:"C.4 Preelaboration Requirements",permalink:"/docs/arm/AA-C/AA-C.4"},next:{title:"C.6 Shared Variable Control",permalink:"/docs/arm/AA-C/AA-C.6"}},g={},A=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics-1",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}],k={toc:A};function y(e){var t,a=e,{components:s}=a,c=((e,t)=>{var a={};for(var i in e)m.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&d.call(e,i)&&(a[i]=e[i]);return a})(a,["components"]);return(0,i.kt)("wrapper",(t=p(p({},k),c),o(t,r({components:s,mdxType:"MDXLayout"}))),(0,i.kt)("h1",p({},{id:"c5-aspect-discard_names"}),"C.5 Aspect Discard_Names"),(0,i.kt)("admonition",p({},{type:"warning"}),(0,i.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,i.kt)("a",p({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI12-0072-1"),"}"," [Specifying the aspect Discard_Names can be used to request a reduction in storage used for the names of entities with runtime name text.] "),(0,i.kt)("h4",p({},{id:"static-semantics"}),"Static Semantics"),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI12-0072-1"),"}"," An entity with ",(0,i.kt)("em",null,"runtime name text")," is a nonderived enumeration first subtype, a tagged first subtype, or an exception."),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI12-0072-1"),"}"," For an entity with runtime name text, the following language-defined representation aspect may be specified:"),(0,i.kt)("p",null,"Discard_NamesThe type of aspect Discard_Names is Boolean. If directly specified, the ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-13/AA-13.1#S0348"},"aspect_definition"))," shall be a static expression. If not specified (including by inheritance), the aspect is False."),(0,i.kt)(n.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,i.kt)("p",null,(0,i.kt)("strong",null,"Aspect Description for "),(0,i.kt)("strong",null,"Discard_Names: "),"Requests a reduction in storage for names associated with an entity.")),(0,i.kt)("h4",p({},{id:"syntax"}),"Syntax"),(0,i.kt)("p",null,"The form of a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Discard_Names is as follows: "),(0,i.kt)("p",null,"  ",(0,i.kt)("strong",null,"pragma")," Discard_Names[([On =",">"," ] ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-13/AA-13.1#S0345"},"local_name")),")];"),(0,i.kt)("p",null,"A ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Discard_Names is allowed only immediately within a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part")),", immediately within a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-7/AA-7.1#S0230"},"package_specification")),", or as a configuration pragma. "),(0,i.kt)("h4",p({},{id:"legality-rules"}),"Legality Rules"),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI12-0072-1"),"}"," The ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-13/AA-13.1#S0345"},"local_name"))," (if present) shall denote an entity with runtime name text. The pragma specifies that the aspect Discard_Names for the type or exception has the value True. Without a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-13/AA-13.1#S0345"},"local_name")),", the pragma specifies that all entities with runtime name text declared after the pragma, within the same declarative region have the value True for aspect Discard_Names. Alternatively, the pragma can be used as a configuration pragma. If the configuration pragma Discard_Names applies to a compilation unit, all entities with runtime name text declared in the compilation unit have the value True for the aspect Discard_Names."),(0,i.kt)(n.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,i.kt)("p",null,(0,i.kt)("strong",null),"{",(0,i.kt)("em",null,"AI12-0072-1"),"}"," If the aspect is specified for a type, then it is inherited by all descendants of the type. The aspect cannot be specified as False on a derived type (because specifying the aspect is not allowed on derived enumeration types, and by rule applying to all aspects for other types (see 13.1.1)). ")),(0,i.kt)("h4",p({},{id:"static-semantics-1"}),"Static Semantics"),(0,i.kt)("p",null,"If a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-13/AA-13.1#S0345"},"local_name"))," is given, then a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Discard_Names is a representation pragma."),(0,i.kt)(n.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,i.kt)("p",null,(0,i.kt)("em",null,"This paragraph was deleted."),"{",(0,i.kt)("em",null,"AI05-0229-1"),"}"," ","{",(0,i.kt)("em",null,"AI12-0072-1"),"}"," ")),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI95-00285-01"),"}"," ","{",(0,i.kt)("em",null,"AI95-00400-01"),"}"," ","{",(0,i.kt)("em",null,"AI12-0072-1"),"}"," If the aspect Discard_Names is True for an enumeration type, then the semantics of the Wide_Wide_Image and Wide_Wide_Value attributes are implementation defined for that type[; the semantics of Image, Wide_Image, Value, and Wide_Value are still defined in terms of Wide_Wide_Image and Wide_Wide_Value]. In addition, the semantics of Text_IO.Enumeration_IO are implementation defined. If the aspect Discard_Names is True for a tagged type, then the semantics of the Tags.Wide_Wide_Expanded_Name function are implementation defined for that type[; the semantics of Tags.Expanded_Name and Tags.Wide_Expanded_Name are still defined in terms of Tags.Wide_Wide_Expanded_Name]. If the aspect Discard_Names is True for an exception, then the semantics of the Exceptions.Wide_Wide_Exception_Name function are implementation defined for that exception[; the semantics of Exceptions.Exception_Name and Exceptions.Wide_Exception_Name are still defined in terms of Exceptions.Wide_Wide_Exception_Name]."),(0,i.kt)(n.Z,{type:"aarm",aarm:"implementation-defined",title:"Implementation defined: ",mdxType:"Admonition"},(0,i.kt)("p",null,(0,i.kt)("strong",null),"The semantics of some attributes and functions of an entity for which aspect Discard_Names is True.")),(0,i.kt)(n.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,i.kt)("p",null,(0,i.kt)("strong",null),"The Width attribute is still defined in terms of Image.")),(0,i.kt)(n.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI95-00285-01"),"}"," ","{",(0,i.kt)("em",null,"AI12-0072-1"),"}"," The semantics of S'Wide_Wide_Image and S'Wide_Wide_Value are implementation defined for any subtype of an enumeration type for which the aspect is True. (The pragma, if used, actually names the first subtype, of course.) ")),(0,i.kt)("h4",p({},{id:"implementation-advice"}),"Implementation Advice"),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI12-0072-1"),"}"," If the aspect Discard_Names is True for an entity, then the implementation should reduce the amount of storage used for storing names associated with that entity. "),(0,i.kt)(n.Z,{type:"aarm",aarm:"implementation-advice",title:"Implementation Advice",mdxType:"Admonition"},(0,i.kt)("p",null,(0,i.kt)("strong",null),"If aspect Discard_Names is True for an entity, then the amount of storage used for storing names associated with that entity should be reduced.")),(0,i.kt)(n.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,i.kt)("p",null,(0,i.kt)("strong",null),"A typical implementation of the Image attribute for enumeration types is to store a table containing the names of all the enumeration literals. Aspect Discard_Names allows the implementation to avoid storing such a table without having to prove that the Image attribute is never used (which can be difficult in the presence of separate compilation).")),(0,i.kt)(n.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,i.kt)("p",null,"We did not specify the semantics of the Image attribute when aspect Discard_Names is True because different semantics might be desirable in different situations. In some cases, it might make sense to use the Image attribute to print out a useful value that can be used to identify the entity given information in compiler-generated listings. In other cases, it might make sense to get an error at compile time or at run time. In cases where memory is plentiful, the simplest implementation makes sense: ignore the aspect. Implementations that are capable of avoiding the extra storage in cases where the Image attribute is never used might also wish to ignore the aspect.")),(0,i.kt)(n.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,i.kt)("p",null,"The same applies to the Tags.Expanded_Name and Exceptions.Exception_Name functions. ")),(0,i.kt)("h4",p({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95"),(0,i.kt)(n.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI95-00285-01"),"}"," ","{",(0,i.kt)("em",null,"AI95-00400-01"),"}"," Updated the wording to reflect that the double wide image and value functions are now the master versions that the others are defined from. ")),(0,i.kt)("h4",p({},{id:"wording-changes-from-ada-2012"}),"Wording Changes from Ada 2012"),(0,i.kt)(n.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI12-0072-1"),"}"," ",(0,i.kt)("strong",null,"Corrigendum:")," Defined the pragma in terms of the aspect Discard_Names, and added a missing definition of the meaning of the configuration pragma. This is not intended to make any semantic change (Ada 2012 has an aspect Discard_Names defined via blanket rules for representation pragmas in 13.1 and 13.1.1), just to clarify the meaning. ")))}y.isMDXComponent=!0}}]);