"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[2897],{7753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>T,frontMatter:()=>y,metadata:()=>k,toc:()=>b});var i=n(1716),a=n(2787),r=n(2670),o=n(6990),s=Object.defineProperty,l=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&c(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&c(e,n,t[n]);return e};const y={sidebar_position:171},f="E.3 Consistency of a Distributed System",k={unversionedId:"arm/AA-E/AA-E.3",id:"arm/AA-E/AA-E.3",title:"E.3 Consistency of a Distributed System",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-E/AA-E.3.mdx",sourceDirName:"arm/AA-E",slug:"/arm/AA-E/AA-E.3",permalink:"/docs/arm/AA-E/AA-E.3",draft:!1,tags:[],version:"current",sidebarPosition:171,frontMatter:{sidebar_position:171},sidebar:"referenceManualSidebar",previous:{title:"E.2 Categorization of Library Units",permalink:"/docs/arm/AA-E/AA-E.2"},next:{title:"E.4 Remote Subprogram Calls",permalink:"/docs/arm/AA-E/AA-E.4"}},g={},b=[{value:"Language Design Principles",id:"language-design-principles",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Bounded (Run-Time) Errors",id:"bounded-run-time-errors",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}],A={toc:b};function T(e){var t,n=e,{components:s}=n,c=((e,t)=>{var n={};for(var i in e)m.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&u)for(var i of u(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=h(h({},A),c),l(t,d({components:s,mdxType:"MDXLayout"}))),(0,i.kt)("h1",h({},{id:"e3-consistency-of-a-distributed-system"}),"E.3 Consistency of a Distributed System"),(0,i.kt)("admonition",h({},{type:"warning"}),(0,i.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,i.kt)("a",h({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(o.Z,{mdxType:"MarginText"},"1/3")),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI05-0299-1"),"}"," ",(0,i.kt)("br",null),"[This subclause defines attributes and rules associated with verifying the consistency of a distributed program.] ",(0,i.kt)("br",null)),(0,i.kt)("h4",h({},{id:"language-design-principles"}),"Language Design Principles"),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(o.Z,{mdxType:"MarginText"},"1.a/3")),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,i.kt)("em",null,"AI05-0248-1"),"}"," ",(0,i.kt)("br",null),"The rules guarantee that remote call interface and shared passive library units are consistent among all partitions prior to the execution of a distributed program, so that the semantics of the distributed program are well defined.",(0,i.kt)("br",null)),(0,i.kt)("h4",h({},{id:"static-semantics"}),"Static Semantics"),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(o.Z,{mdxType:"MarginText"},"2/1")),(0,i.kt)("p",null,"For a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-4/AA-4.1#S0093"},"prefix"))," P that statically denotes a program unit, the following attributes are defined: ",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(o.Z,{mdxType:"MarginText"},"3")),(0,i.kt)("dt",null,(0,i.kt)("br",null),"P'Version"),(0,i.kt)("dl",null,(0,i.kt)("dd",null,"Yields a value of the predefined type String that identifies the version of the compilation unit that contains the declaration of the program unit.",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(o.Z,{mdxType:"MarginText"},"4")),(0,i.kt)("dt",null,(0,i.kt)("br",null),"P'Body_Version"),(0,i.kt)("dd",null,"Yields a value of the predefined type String that identifies the version of the compilation unit that contains the body (but not any subunits) of the program unit. ",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(o.Z,{mdxType:"MarginText"},"5/1"))),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"8652/0084"),"}"," ","{",(0,i.kt)("em",null,"AI95-00104-01"),"}"," ",(0,i.kt)("br",null),"The ",(0,i.kt)("em",null,"version"),' of a compilation unit changes whenever the compilation unit changes in a semantically significant way. This document does not define the exact meaning of "semantically significant". It is unspecified whether there are other events (such as recompilation) that result in the version of a compilation unit changing. ',(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(o.Z,{mdxType:"MarginText"},"5.a/1")),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,i.kt)("em",null,"This paragraph was deleted."),(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(o.Z,{mdxType:"MarginText"},"5.1/1")),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"8652/0084"),"}"," ","{",(0,i.kt)("em",null,"AI95-00104-01"),"}"," ",(0,i.kt)("br",null),"If P is not a library unit, and P has no completion, then P'Body_Version returns the Body_Version of the innermost program unit enclosing the declaration of P. If P is a library unit, and P has no completion, then P'Body_Version returns a value that is different from Body_Version of any version of P that has a completion. ",(0,i.kt)("br",null)),(0,i.kt)("h4",h({},{id:"bounded-run-time-errors"}),"Bounded (Run-Time) Errors"),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(o.Z,{mdxType:"MarginText"},"6")),(0,i.kt)("p",null,"In a distributed program, a library unit is ",(0,i.kt)("em",null,"consistent")," if the same version of its declaration is used throughout. It is a bounded error to elaborate a partition of a distributed program that contains a compilation unit that depends on a different version of the declaration of a shared passive or RCI library unit than that included in the partition to which the shared passive or RCI library unit was assigned. As a result of this error, Program_Error can be raised in one or both partitions during elaboration; in any case, the partitions become inaccessible to one another. ",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(o.Z,{mdxType:"MarginText"},"6.a")),(0,i.kt)(a.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,i.kt)("strong",null),"Because a version changes if anything on which it depends undergoes a version change, requiring consistency for shared passive and remote call interface library units is sufficient to ensure consistency for the declared pure and remote types library units that define the types used for the objects and parameters through which interpartition communication takes place.",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(o.Z,{mdxType:"MarginText"},"6.b")),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"Note that we do not require matching Body_Versions; it is irrelevant for shared passive and remote call interface packages, since only one copy of their body exists in a distributed program (in the absence of implicit replication), and we allow the bodies to differ for declared pure and remote types packages from partition to partition, presuming that the differences are due to required error corrections that took place during the execution of a long-running distributed program. The Body_Version attribute provides a means for performing stricter consistency checks. ",(0,i.kt)("br",null)),(0,i.kt)("h4",h({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95"),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(o.Z,{mdxType:"MarginText"},"6.c/2")),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,i.kt)("em",null,"8652/0084"),"}"," ","{",(0,i.kt)("em",null,"AI95-00104-01"),"}"," ",(0,i.kt)("strong",null,(0,i.kt)("br",null),"Corrigendum:")," Clarified the meaning of 'Version and 'Body_Version. ",(0,i.kt)("br",null)))}T.isMDXComponent=!0}}]);