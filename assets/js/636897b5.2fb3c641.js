"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6719],{47391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>g,default:()=>f,frontMatter:()=>d,metadata:()=>p,toc:()=>u});var a=t(58168),i=(t(96540),t(15680)),r=t(20793),o=t(91435),s=(t(21432),t(79162)),l=t(34421);const d={sidebar_position:2},g="Foreword",p={unversionedId:"arm/AA-0.1",id:"arm/AA-0.1",title:"Foreword",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-0.1.mdx",sourceDirName:"arm",slug:"/arm/AA-0.1",permalink:"/docs/arm/AA-0.1",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"referenceManualSidebar",previous:{title:"Table of Contents",permalink:"/docs/arm/AA-TOC"},next:{title:"Introduction",permalink:"/docs/arm/AA-0.2"}},y={},u=[],m={toc:u},c="wrapper";function f(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"foreword"},"Foreword"),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,i.yg)(s.A,{mdxType:"MarginText"},"0.1/5"),(0,i.yg)("p",null,"This document is the Annotated Ada Reference Manual. The International Standard for the programming language Ada is ISO/IEC 8652:2023(E). The International Standard is derived from the Ada Reference Manual, with various non-normative changes. In particular, the International Standard numbers clauses differently, omits the annotations and paragraph numbers, eliminates the Acknowledgements, and modifies various front matter such as the Title page and the Foreword.",(0,i.yg)("br",null)),(0,i.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(s.A,{mdxType:"MarginText"},"0.a/5"),(0,i.yg)(r.A,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,i.yg)("strong",null),"New ISO requirements necessitated changing the numbers of all of the numbered clauses and subclauses in the International Standard. The Ada Reference Manual retains its traditional numbering of clauses and subclauses as it is common for existing material (both printed and electronic) to refer to subclauses just by number. ",(0,i.yg)("br",null))),(0,i.yg)(s.A,{mdxType:"MarginText"},"0.2/4"),(0,i.yg)("p",null,"The Ada Working Group ISO/IEC JTC 1/SC 22/WG 9 is tasked by ISO with the work item to interpret and maintain the International Standard and to produce Technical Corrigenda, as appropriate. The technical work on the International Standard is performed by the Ada Rapporteur Group (ARG) of WG 9.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"0.3/2"),(0,i.yg)("p",null,"AXE Consultants produces the Ada Reference Manual in consultation with the ARG, along with drafts of other documents as needed. ISO/IEC documents often list the individual changes that need to be made to the text of a Standard, rather than simply updating the document. As such, an International Standard is often found in several parts, while the Ada Reference Manual is always a single document.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"0.5/5"),(0,i.yg)("p",null,"In June 2016, WG 9 approved a tentative schedule for the preparation of an Amendment or Revision to the International Standard, with a delivery no earlier than 2018. In July 2019, WG 9 approved an additional review and prototyping period for this revision, extending the delivery to no earlier than late 2020. The draft standard was delivered to WG 9 in July 2021, and the Standard was published as ISO/IEC 8652:2023 in May 2023.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"1/5"),(0,i.yg)(l.A,{items:["AI12-0313-1","AI12-0441-1"],mdxType:"MarginInfo"}),(0,i.yg)("p",null,"This Ada Reference Manual replaces the edition of 2012. It modifies the previous edition by making changes and additions that improve the capability of the language and the reliability of programs written in the language.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"2/5"),(0,i.yg)(l.A,{items:["AI12-0441-1"],mdxType:"MarginInfo"}),(0,i.yg)("p",null,"Significant changes in this edition are as follows: ",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"3/5"),(0,i.yg)(l.A,{items:["AI12-0313-1","AI12-0441-1"],mdxType:"MarginInfo"}),(0,i.yg)("ul",null,(0,i.yg)("li",null,"Improved support for parallel execution is provided via the introduction of parallel loops, parallel blocks, parallel container iteration, and parallel reduction.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"4/5"),(0,i.yg)(l.A,{items:["AI12-0313-1","AI12-0441-1"],mdxType:"MarginInfo"}),(0,i.yg)("li",null,"More precise specification of subprogram interfaces is supported via the new aspects Global, Global'Class, and Nonblocking. The Global aspects, in particular, help to determine whether two constructs can safely execute in parallel.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"5/5"),(0,i.yg)(l.A,{items:["AI12-0313-1","AI12-0441-1"],mdxType:"MarginInfo"}),(0,i.yg)("li",null,"Pre and Post aspects can now be specified for access-to-subprogram types and for generic formal subprograms; a postcondition for the default initialization of a type can be specified using the new Default_Initial_Condition aspect.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"6/5"),(0,i.yg)(l.A,{items:["AI12-0313-1","AI12-0441-1"],mdxType:"MarginInfo"}),(0,i.yg)("li",null,"The behavior of many predefined container operations is now more precisely specified by using pre- and postcondition specifications instead of English descriptions; a restricted (\u201cstable\u201d) view for most containers is introduced to support more efficient iteration.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"7/5"),(0,i.yg)(l.A,{items:["AI12-0313-1","AI12-0441-1"],mdxType:"MarginInfo"}),(0,i.yg)("li",null,"More flexible uses of static expressions are supported via the introduction of static expression functions along with fewer restrictions on static strings.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"8/5"),(0,i.yg)(l.A,{items:["AI12-0313-1","AI12-0441-1"],mdxType:"MarginInfo"}),(0,i.yg)("li",null,"The Image attribute is supported for nonscalar types, and a user-specifiable attribute Put_Image is provided, which determines the value of the Image attribute for a user-defined type.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"9/5"),(0,i.yg)(l.A,{items:["AI12-0313-1","AI12-0441-1"],mdxType:"MarginInfo"}),(0,i.yg)("li",null,"The use of numeric and string literals is generalized to allow their use with other categories of types, via the new aspects Integer_Literal, Real_Literal, and String_Literal.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"10/5"),(0,i.yg)(l.A,{items:["AI12-0313-1","AI12-0441-1"],mdxType:"MarginInfo"}),(0,i.yg)("li",null,"Array and record aggregates are made more flexible: index parameters are allowed in an array aggregate to define the components as a function of their array index; discriminants can be defined more flexibly within an aggregate for a variant record type.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"11/5"),(0,i.yg)(l.A,{items:["AI12-0313-1","AI12-0441-1"],mdxType:"MarginInfo"}),(0,i.yg)("li",null,"New types of aggregates are provided: delta aggregates to allow the construction of a new object by incremental updates to an existing object; container aggregates to allow construction of an object of a container type by directly specifying its elements.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"12/5"),(0,i.yg)(l.A,{items:["AI12-0313-1","AI12-0441-1"],mdxType:"MarginInfo"}),(0,i.yg)("li",null,"A shorthand is provided, using the token '@', to refer to the target of an assignment statement in the expression defining its new value.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"13/5"),(0,i.yg)(l.A,{items:["AI12-0313-1","AI12-0441-1"],mdxType:"MarginInfo"}),(0,i.yg)("li",null,"Declare expressions are provided that permit the definition and use of local constants or renamings, to allow a large expression to be simplified by defining common parts as named entities.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"14/5"),(0,i.yg)(l.A,{items:["AI12-0313-1","AI12-0441-1"],mdxType:"MarginInfo"}),(0,i.yg)("li",null,"Support for lightweight iteration is added via the introduction of procedural iterators.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"15/5"),(0,i.yg)(l.A,{items:["AI12-0313-1","AI12-0441-1"],mdxType:"MarginInfo"}),(0,i.yg)("li",null,"Support for the map-reduce programming strategy is added via the introduction of reduction expressions.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"16/5"),(0,i.yg)(l.A,{items:["AI12-0313-1","AI12-0441-1"],mdxType:"MarginInfo"}),(0,i.yg)("li",null,"For constructs that use iterators of any sort, a filter can be specified that restricts the elements produced by the iteration to those that satisfy the condition of the filter.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"17/5"),(0,i.yg)(l.A,{items:["AI12-0313-1","AI12-0441-1"],mdxType:"MarginInfo"}),(0,i.yg)("li",null,"Predefined packages supporting arbitrary-precision integer and real arithmetic are provided.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"18/5"),(0,i.yg)(l.A,{items:["AI12-0313-1","AI12-0441-1"],mdxType:"MarginInfo"}),(0,i.yg)("li",null,"The Jorvik profile is introduced to support hard real-time applications that want to go beyond the restrictions of the Ravenscar profile.",(0,i.yg)("br",null))))}f.isMDXComponent=!0}}]);