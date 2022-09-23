"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[2269],{6393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>A,default:()=>T,frontMatter:()=>y,metadata:()=>h,toc:()=>f});var a=n(1716),o=n(2787),i=n(2670),r=n(6990),l=Object.defineProperty,d=Object.defineProperties,s=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(m)for(var n of m(t))p.call(t,n)&&c(e,n,t[n]);return e};const y={sidebar_position:147},A="C.4 Preelaboration Requirements",h={unversionedId:"arm/AA-C/AA-C.4",id:"arm/AA-C/AA-C.4",title:"C.4 Preelaboration Requirements",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-C/AA-C.4.mdx",sourceDirName:"arm/AA-C",slug:"/arm/AA-C/AA-C.4",permalink:"/docs/arm/AA-C/AA-C.4",draft:!1,tags:[],version:"current",sidebarPosition:147,frontMatter:{sidebar_position:147},sidebar:"referenceManualSidebar",previous:{title:"C.3 Interrupt Support",permalink:"/docs/arm/AA-C/AA-C.3"},next:{title:"C.5 Aspect Discard_Names",permalink:"/docs/arm/AA-C/AA-C.5"}},b={},f=[{value:"Implementation Requirements",id:"implementation-requirements",level:4},{value:"Documentation Requirements",id:"documentation-requirements",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}],x={toc:f};function T(e){var t,n=e,{components:l}=n,c=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&m)for(var a of m(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=k(k({},x),c),d(t,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("h1",k({},{id:"c4-preelaboration-requirements"}),"C.4 Preelaboration Requirements"),(0,a.kt)("admonition",k({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",k({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"1/5")),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0299-1"),"}"," ","{",(0,a.kt)("em",null,"AI12-0417-1"),"}"," ",(0,a.kt)("br",null),"[This subclause specifies additional implementation and documentation requirements for the Preelaborate aspect (see ",(0,a.kt)("a",{href:"../AA-10/AA-10.2#Subclause_10.2.1"},"10.2.1"),").] ",(0,a.kt)("br",null)),(0,a.kt)("h4",k({},{id:"implementation-requirements"}),"Implementation Requirements"),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2")),(0,a.kt)("p",null,"The implementation shall not incur any run-time overhead for the elaboration checks of subprograms and ",(0,a.kt)("code",null,"protected_bodies")," declared in preelaborated library units. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"3")),(0,a.kt)("p",null,"The implementation shall not execute any memory write operations after load time for the elaboration of constant objects declared immediately within the declarative region of a preelaborated library package, so long as the subtype and initial expression (or default initial expressions if initialized by default) of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.3#S0032"},"object_declaration"))," satisfy the following restrictions. The meaning of ",(0,a.kt)("em",null,"load time")," is implementation defined. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"3.a")),(0,a.kt)(o.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,a.kt)("strong",null),'On systems where the image of the partition is initially copied from disk to RAM, or from ROM to RAM, prior to starting execution of the partition, the intention is that "load time" consist of this initial copying step. On other systems, load time and run time might actually be interspersed. ',(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"4")),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Any ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark"))," denotes a statically constrained subtype, with statically constrained subcomponents, if any;",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"4.1/2")),(0,a.kt)("li",null,"{",(0,a.kt)("em",null,"AI95-00161-01"),"}"," ",(0,a.kt)("br",null),"no ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark"))," denotes a controlled type, a private type, a private extension, a generic formal private type, a generic formal derived type, or a descendant of such a type;",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"4.a.1/2"))),(0,a.kt)(o.Z,{type:"aarm",aarm:"implementation-advice",title:"Implementation Advice",mdxType:"Admonition"},(0,a.kt)("strong",null),"For an implementation that uses the registration method of finalization, a controlled object will require some code executed to register the object at the appropriate point. The other types are those that ",(0,a.kt)("em",null,"might")," have a controlled component. None of these types were allowed in preelaborated units in Ada 95. These types are covered by the , of course, so they should still execute as little code as possible. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"5")),(0,a.kt)("ul",null,(0,a.kt)("li",null,"any ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.2#S0029"},"constraint"))," is a static constraint;",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"6")),(0,a.kt)("li",null,"any ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.8#S0164"},"allocator"))," is for an access-to-constant type;",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"7")),(0,a.kt)("li",null,"any uses of predefined operators appear only within static expressions;",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"8")),(0,a.kt)("li",null,"any ",(0,a.kt)("code",null,"primaries")," that are ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name")),"s, other than ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0100"},"attribute_reference")),"s for the Access or Address attributes, appear only within static expressions; ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"8.a"))),(0,a.kt)(o.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"This cuts out ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0100"},"attribute_reference")),"s that are not static, except for Access and Address. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"9/5")),(0,a.kt)("ul",null,(0,a.kt)("li",null,"{",(0,a.kt)("em",null,"AI12-0368-1"),"}"," ",(0,a.kt)("br",null),"any ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," that is not part of a static expression is an expanded name or ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0092"},"direct_name"))," that statically names some entity; ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"9.a/5"))),(0,a.kt)(o.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"{",(0,a.kt)("em",null,"AI12-0368-1"),"}"," ",(0,a.kt)("br",null),"This cuts out ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.4#S0218"},"function_call")),"s and ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.6#S0162"},"type_conversion")),"s that are not static, including calls on attribute functions like 'Image and 'Value. We do allow components if those components don't require any evaluation or checks. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"10")),(0,a.kt)("ul",null,(0,a.kt)("li",null,"any ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.8#S0074"},"discrete_choice"))," of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0113"},"array_aggregate"))," is static;",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"11")),(0,a.kt)("li",null,"no language-defined check associated with the elaboration of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.3#S0032"},"object_declaration"))," can fail. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"11.a/2"))),(0,a.kt)(o.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"{",(0,a.kt)("em",null,"AI95-00114-01"),"}"," ",(0,a.kt)("br",null),"The intent is that aggregates all of whose scalar subcomponents are static and all of whose access subcomponents are ",(0,a.kt)("strong",null,"null"),", allocators for access-to-constant types, or X'Access, will be supported with no run-time code generated. ",(0,a.kt)("br",null)),(0,a.kt)("h4",k({},{id:"documentation-requirements"}),"Documentation Requirements"),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"12")),(0,a.kt)("p",null,"The implementation shall document any circumstances under which the elaboration of a preelaborated package causes code to be executed at run time. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"12.a/2")),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("strong",null,"Documentation Requirement: "),"Any circumstances when the elaboration of a preelaborated package causes code to be executed.",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"13")),(0,a.kt)("p",null,"The implementation shall document whether the method used for initialization of preelaborated variables allows a partition to be restarted without reloading. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"13.a.1/2")),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("strong",null,"Documentation Requirement: "),"Whether a partition can be restarted without reloading.",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"13.a/2")),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("em",null,"This paragraph was deleted."),(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"13.b/2")),(0,a.kt)(o.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"{",(0,a.kt)("em",null,"AI95-00114-01"),"}"," ",(0,a.kt)("br",null),"This covers the issue of the run-time system itself being restartable, so that need not be a separate Documentation Requirement. ",(0,a.kt)("br",null)),(0,a.kt)("h4",k({},{id:"implementation-advice"}),"Implementation Advice"),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"14")),(0,a.kt)("p",null,"It is recommended that preelaborated packages be implemented in such a way that there should be little or no code executed at run time for the elaboration of entities not already covered by the Implementation Requirements.",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"14.a/2")),(0,a.kt)(o.Z,{type:"aarm",aarm:"implementation-advice",title:"Implementation Advice",mdxType:"Admonition"},(0,a.kt)("strong",null),"Preelaborated packages should be implemented such that little or no code is executed at run time for the elaboration of entities.",(0,a.kt)("br",null)),(0,a.kt)("h4",k({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95"),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"14.b/2")),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,a.kt)("em",null,"AI95-00161-01"),"}"," ",(0,a.kt)("br",null),"Added wording to exclude the additional kinds of types allowed in preelaborated units from the Implementation Requirements. ",(0,a.kt)("br",null)),(0,a.kt)("h4",k({},{id:"wording-changes-from-ada-2012"}),"Wording Changes from Ada 2012"),(0,a.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"14.c/5")),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,a.kt)("em",null,"AI12-0368-1"),"}"," ",(0,a.kt)("br",null),"Added wording to allow components so long as no evaluation or checks are required for the reference. ",(0,a.kt)("br",null)))}T.isMDXComponent=!0}}]);