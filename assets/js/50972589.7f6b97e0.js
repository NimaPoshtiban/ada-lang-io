"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1559],{8441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>f,default:()=>Z,frontMatter:()=>h,metadata:()=>g,toc:()=>T});var a=n(1716),i=n(3050),r=n(3989),o=n(8604),l=n(7318),d=n(4768),s=Object.defineProperty,m=Object.defineProperties,p=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))A.call(t,n)&&u(e,n,t[n]);if(k)for(var n of k(t))y.call(t,n)&&u(e,n,t[n]);return e};const h={sidebar_position:64},f="7.5 Limited Types",g={unversionedId:"arm/AA-7/AA-7.5",id:"arm/AA-7/AA-7.5",title:"7.5 Limited Types",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-7/AA-7.5.mdx",sourceDirName:"arm/AA-7",slug:"/arm/AA-7/AA-7.5",permalink:"/docs/arm/AA-7/AA-7.5",draft:!1,tags:[],version:"current",sidebarPosition:64,frontMatter:{sidebar_position:64},sidebar:"referenceManualSidebar",previous:{title:"7.4 Deferred Constants",permalink:"/docs/arm/AA-7/AA-7.4"},next:{title:"7.6 Assignment and Finalization",permalink:"/docs/arm/AA-7/AA-7.6"}},x={},T=[{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}],b={toc:T};function Z(e){var t,n=e,{components:s}=n,u=((e,t)=>{var n={};for(var a in e)A.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&k)for(var a of k(e))t.indexOf(a)<0&&y.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},b),u),m(t,p({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("h1",c({},{id:"75-limited-types"}),"7.5 Limited Types"),(0,a.kt)("admonition",c({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(l.Z,{mdxType:"MarginText"},"1/2"),(0,a.kt)(d.Z,{items:["AI95-00287-01"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"[A limited type is (a view of) a type for which copying (such as for an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement")),") is not allowed. A nonlimited type is a (view of a) type for which copying is allowed.] ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"1.a"),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,a.kt)("strong",null),"The concept of the ",(0,a.kt)("em",null,"value")," of a limited type is difficult to define, since the abstract value of a limited type often extends beyond its physical representation. In some sense, values of a limited type cannot be divorced from their object. The value ",(0,a.kt)("em",null,"is")," the object.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"1.b/2"),(0,a.kt)(d.Z,{items:["AI95-00318-02"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"In Ada 83, in the two places where limited types were defined by the language, namely tasks and files, an implicit level of indirection was implied by the semantics to avoid the separation of the value from an associated object. In Ada 95, most limited types are passed by reference, and even return-ed by reference. In Ada 2005, most limited types are built-in-place upon return, rather than returned by reference. Thus the object \u201cidentity\u201d is part of the logical value of most limited types. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"1.c/2"),(0,a.kt)(d.Z,{items:["AI95-00287-01","AI95-00419-01"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,a.kt)("strong",null,"To be honest: "),"For a limited partial view whose full view is nonlimited, copying is possible on parameter passing and function return. To prevent any copying whatsoever, one should make both the partial ",(0,a.kt)("em",null,"and")," full views limited. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"1.d/2"),(0,a.kt)(i.Z,{type:"aarm",aarm:"glossary-entry",mdxType:"Admonition"},(0,a.kt)("strong",null),"A limited type is a type for which copying (such as in an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement")),") is not allowed. A nonlimited type is a type for which copying is allowed.",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"MarginText"},"2"),(0,a.kt)("h4",c({},{id:"legality-rules"}),"Legality Rules"),(0,a.kt)(l.Z,{mdxType:"MarginText"},"3/2"),(0,a.kt)(d.Z,{items:["AI95-00419-01"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"If a tagged record type has any limited components, then the reserved word ",(0,a.kt)("strong",null,"limited")," shall appear in its ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.8#S0066"},"record_type_definition")),". [If the reserved word ",(0,a.kt)("strong",null,"limited")," appears in the definition of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.4#S0035"},"derived_type_definition")),", its parent type and any progenitor interfaces shall be limited.] ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"3.a.1/5"),(0,a.kt)(d.Z,{items:["AI95-00419-01","AI12-0005-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"proof",mdxType:"Admonition"},(0,a.kt)("strong",null),"The rule about the parent type being required to be limited can be found in ",(0,a.kt)("a",{href:"../AA-3/AA-3.4"},"3.4"),". Rules about progenitor interfaces can be found in ",(0,a.kt)("a",{href:"../AA-3/AA-3.9#Subclause_3.9.4"},"3.9.4"),";  specifically, a nonlimited interface can appear only on a nonlimited type. We repeat these rules here to gather these scattered rules in one obvious place. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"3.a"),(0,a.kt)(i.Z,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,a.kt)("strong",null),"This prevents tagged limited types from becoming nonlimited. Otherwise, the following could happen: ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"3.b"),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"package P is","\n","    type T is limited private;","\n","    type R is tagged","\n","        record -- Illegal!","\n","               -- This should say \u201climited record\u201d.","\n","            X : T;","\n","        end record;","\n","private","\n","    type T is new Integer; -- R becomes nonlimited here.","\n","end P;","\n",(0,a.kt)(l.Z,{mdxType:"MarginText"},"3.c/2"),"package Q is","\n","    type R2 is new R with","\n","        record","\n","            Y : Some_Task_Type;","\n","        end record;","\n","end Q;","\n")),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"3.d/2"),(0,a.kt)(d.Z,{items:["AI95-00230-01"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"If the above were legal, then assignment would be defined for R'Class in the body of P, which is bad news, given the task. ",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"MarginText"},"3.1/5"),(0,a.kt)(d.Z,{items:["AI95-00287-01","AI95-00318-02","AI05-0147-1","AI12-0172-1","AI12-0236-1","AI12-0317-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"In the following contexts, an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," of a limited type is  permitted only if each of its operative constituents is newly constructed (see ",(0,a.kt)("a",{href:"../AA-4/AA-4.4"},"4.4"),") : ",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"3.2/2"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"the initialization ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.3#S0032"},"object_declaration"))," (see ",(0,a.kt)("a",{href:"../AA-3/AA-3.3#Subclause_3.3.1"},"3.3.1"),")",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"3.3/2"),(0,a.kt)("li",null,"the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.7#S0063"},"default_expression"))," of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.8#S0070"},"component_declaration"))," (see ",(0,a.kt)("a",{href:"../AA-3/AA-3.8"},"3.8"),")",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"3.4/2"),(0,a.kt)("li",null,"the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0109"},"record_component_association"))," (see ",(0,a.kt)("a",{href:"../AA-4/AA-4.3#Subclause_4.3.1"},"4.3.1"),")",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"3.5/2"),(0,a.kt)("li",null,"the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," for an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0112"},"ancestor_part"))," of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0111"},"extension_aggregate"))," (see ",(0,a.kt)("a",{href:"../AA-4/AA-4.3#Subclause_4.3.2"},"4.3.2"),")",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"3.6/2"),(0,a.kt)("li",null,"an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0114"},"positional_array_aggregate"))," or the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0118"},"array_component_association"))," (see ",(0,a.kt)("a",{href:"../AA-4/AA-4.3#Subclause_4.3.3"},"4.3.3"),")",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"3.7/5"),(0,a.kt)(d.Z,{items:["AI12-0127-1"],mdxType:"MarginInfo"}),(0,a.kt)("li",null,"the ",(0,a.kt)("em",null,"base_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0121"},"record_delta_aggregate"))," (see ",(0,a.kt)("a",{href:"../AA-4/AA-4.3#Subclause_4.3.4"},"4.3.4"),") ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"3.d.1/5"),(0,a.kt)(d.Z,{items:["AI12-0127-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"We don't need to mention the ",(0,a.kt)("em",null,"base_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0122"},"array_delta_aggregate"))," here, as its type cannot be limited (see ",(0,a.kt)("a",{href:"../AA-4/AA-4.3#Subclause_4.3.4"},"4.3.4"),"), and thus neither can its ",(0,a.kt)("em",null,"base_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression")),". Similarly, we do not need any rules for components of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0120"},"delta_aggregate"))," nor the elements of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0123"},"container_aggregate")),", as neither are allowed to be limited (see ",(0,a.kt)("a",{href:"../AA-4/AA-4.3#Subclause_4.3.4"},"4.3.4")," and ",(0,a.kt)("a",{href:"../AA-4/AA-4.3#Subclause_4.3.5"},"4.3.5"),") ",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"MarginText"},"3.8/5"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.7#S0163"},"qualified_expression"))," of an initialized allocator (see ",(0,a.kt)("a",{href:"../AA-4/AA-4.8"},"4.8"),")",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"3.9/5"),(0,a.kt)("li",null,"the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," of a return statement (see ",(0,a.kt)("a",{href:"../AA-6/AA-6.5"},"6.5"),")",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"3.10/5"),(0,a.kt)(d.Z,{items:["AI05-0177-1","AI12-0157-1"],mdxType:"MarginInfo"}),(0,a.kt)("li",null,"the return expression of an expression function (see ",(0,a.kt)("a",{href:"../AA-6/AA-6.8"},"6.8"),")",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"3.11/5"),(0,a.kt)("li",null,"the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.7#S0063"},"default_expression"))," or actual parameter for a formal object of mode ",(0,a.kt)("strong",null,"in")," (see ",(0,a.kt)("a",{href:"../AA-12/AA-12.4"},"12.4"),")",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"3.e/2"),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,a.kt)("strong",null),"All of these contexts normally require copying; by restricting the uses as above, we can require the new object to be built-in-place. ",(0,a.kt)("br",null))),(0,a.kt)("h4",c({},{id:"static-semantics"}),"Static Semantics"),(0,a.kt)(l.Z,{mdxType:"MarginText"},"4/3"),(0,a.kt)(d.Z,{items:["AI95-00419-01","AI05-0178-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"A view of a type is ",(0,a.kt)("em",null,"limited")," if it is one of the following: ",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"5/2"),(0,a.kt)(d.Z,{items:["AI95-00411-01","AI95-00419-01"],mdxType:"MarginInfo"}),(0,a.kt)("ul",null,(0,a.kt)("li",null,"a type with the reserved word ",(0,a.kt)("strong",null,"limited"),", ",(0,a.kt)("strong",null,"synchronized"),", ",(0,a.kt)("strong",null,"task"),", or ",(0,a.kt)("strong",null,"protected")," in its definition; ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"5.a"),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"Note that there is always a \u201cdefinition\u201d, conceptually, even if there is no syntactic category called \u201c..._definition\u201d.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"5.b/2"),(0,a.kt)(d.Z,{items:["AI95-00419-01"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"This includes interfaces of the above kinds, derived types with the reserved word ",(0,a.kt)("strong",null,"limited"),", as well as task and protected types. ",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"MarginText"},"6/3"),(0,a.kt)(d.Z,{items:["AI95-00419-01","AI05-0087-1"],mdxType:"MarginInfo"}),(0,a.kt)("ul",null,(0,a.kt)("li",null,"a class-wide type whose specific type is limited;",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"7/2"),(0,a.kt)(d.Z,{items:["AI95-00419-01"],mdxType:"MarginInfo"}),(0,a.kt)("li",null,"a composite type with a limited component;",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"7.1/3"),(0,a.kt)(d.Z,{items:["AI05-0178-1"],mdxType:"MarginInfo"}),(0,a.kt)("li",null,"an incomplete view;",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"7.2/2"),(0,a.kt)(d.Z,{items:["AI95-00419-01"],mdxType:"MarginInfo"}),(0,a.kt)("li",null,"a derived type whose parent is limited and is not an interface.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"7.a/2"),(0,a.kt)(d.Z,{items:["AI95-00419-01"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"Limitedness is not inherited from interfaces; it must be explicitly specified when the parent is an interface. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"7.b/2"),(0,a.kt)(d.Z,{items:["AI95-00419-01"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,a.kt)("strong",null,"To be honest: "),"A derived type can become nonlimited if ",(0,a.kt)("strong",null,"limited")," does not appear and the derivation takes place in the visible part of a child package, and the parent type is nonlimited as viewed from the private part or body of the child package. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"7.c/2"),(0,a.kt)(d.Z,{items:["AI95-00419-01"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,a.kt)("strong",null),"We considered a rule where limitedness was always inherited from the parent for derived types, but in the case of a type whose parent is an interface, this meant that the first interface is treated differently than other interfaces. It also would have forced users to declare dummy nonlimited interfaces just to get the limitedness right. We also considered a syntax like ",(0,a.kt)("strong",null,"not limited")," to specify nonlimitedness when the parent was limited, but that was unsavory. The rule given is more uniform and simpler to understand.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"7.d/2"),(0,a.kt)(d.Z,{items:["AI95-00419-01"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The rules for interfaces are asymmetrical, but the language is not: if the parent interface is limited, the presence of the word ",(0,a.kt)("strong",null,"limited")," determines the limitedness, and nonlimited progenitors are illegal by the rules in ",(0,a.kt)("a",{href:"../AA-3/AA-3.9#Subclause_3.9.4"},"3.9.4")," if ",(0,a.kt)("strong",null,"limited")," is present. If the parent interface is nonlimited, the word ",(0,a.kt)("strong",null,"limited")," is illegal by the rules in ",(0,a.kt)("a",{href:"../AA-3/AA-3.4"},"3.4"),". The net effect is that the order of the interfaces doesn't matter. ",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"MarginText"},"8"),(0,a.kt)("p",null,"Otherwise, the type is nonlimited.",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"9"),(0,a.kt)("p",null,"[There are no predefined equality operators for a limited type.]",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"9.1/3"),(0,a.kt)(d.Z,{items:["AI05-0052-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"A type is ",(0,a.kt)("em",null,"immutably limited")," if it is one of the following:",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"9.2/3"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"An explicitly limited record type;",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"9.3/3"),(0,a.kt)(d.Z,{items:["AI05-0217-1"],mdxType:"MarginInfo"}),(0,a.kt)("li",null,"A record extension with the reserved word ",(0,a.kt)("strong",null,"limited"),";",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"9.4/3"),(0,a.kt)("li",null,"A nonformal limited private type that is tagged or has at least one access discriminant with a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.7#S0063"},"default_expression")),";",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"9.a/3"),(0,a.kt)(i.Z,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,a.kt)("strong",null),"The full type in both of these cases must necessarily be immutably limited. We need to include private types as much as possible so that we aren't unintentionally discouraging the use of private types. ",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"MarginText"},"9.5/3"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"A task type, a protected type, or a synchronized interface;",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"9.6/3"),(0,a.kt)("li",null,"A type derived from an immutably limited type.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"9.b/3"),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,a.kt)("strong",null),"An immutably limited type is a type that cannot become nonlimited subsequently in a private part or in a child unit. If a view of the type makes it immutably limited, then no copying (assignment) operations are ever available for objects of the type. This allows other properties; for instance, it is safe for such objects to have access discriminants that have defaults or designate other limited objects. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"9.c/3"),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"A nonsynchronized limited interface type is not immutably limited; a type derived from it can be nonlimited. ",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"MarginText"},"9.7/3"),(0,a.kt)(d.Z,{items:["AI05-0052-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"A descendant of a generic formal limited private type is presumed to be immutably limited except within the body of a generic unit or a body declared within the declarative region of a generic unit, if the formal type is declared within the formal part of the generic unit.",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"9.d/3"),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"In an instance, a type is descended from the actual type corresponding to the formal, and all rules are rechecked in the specification. Bodies are excepted so that we assume the worst there; the complex wording is required to handle children of generics and unrelated bodies properly. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"10/5"),(0,a.kt)(d.Z,{items:["AI95-00287-01","AI95-00318-02","AI05-0067-1","AI12-0442-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 1   While it is allowed to write initializations of limited objects, such initializations never copy a limited object. The source of such an assignment operation will  be an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0106"},"aggregate"))," or ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.4#S0218"},"function_call")),", and such ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0106"},"aggregate")),"s and ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.4#S0218"},"function_call")),"s will  be built directly in the target object (see ",(0,a.kt)("a",{href:"../AA-7/AA-7.6"},"7.6"),"). ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"10.a/2"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,a.kt)("strong",null,"To be honest: "),"This isn't quite true if the type can become nonlimited (see below); ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.4#S0218"},"function_call")),"s only are required to be build-in-place for \u201creally\u201d limited types. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,a.kt)("em",null,"Paragraphs 10 through 15 were deleted.")," ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"17"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 2   As illustrated in ",(0,a.kt)("a",{href:"../AA-7/AA-7.3#Subclause_7.3.1"},"7.3.1"),", an untagged limited type can become nonlimited under certain circumstances. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"17.a"),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"Limited private types do not become nonlimited; instead, their full view can be nonlimited, which has a similar effect.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"17.b"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"It is important to remember that a single nonprivate type can be both limited and nonlimited in different parts of its scope. In other words, \u201climited\u201d is a property that depends on where you are in the scope of the type. We don't call this a \u201cview property\u201d because there is no particular declaration to declare the nonlimited view.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"17.c"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Tagged types never become nonlimited. ",(0,a.kt)("br",null))),(0,a.kt)("h4",c({},{id:"examples"}),"Examples"),(0,a.kt)(l.Z,{mdxType:"MarginText"},"18"),(0,a.kt)("p",null,(0,a.kt)("em",null,"Example of a package with a limited type:")," ",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"19"),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"package IO_Package is","\n","   type File_Name is limited private;","\n",(0,a.kt)(l.Z,{mdxType:"MarginText"},"20"),"procedure Open (F : in out File_Name);","\n","   procedure Close(F : in out File_Name);","\n","   procedure Read (F : in File_Name; Item : out Integer);","\n","   procedure Write(F : in File_Name; Item : in  Integer);","\n","private","\n","   type File_Name is","\n","      limited record","\n","         Internal_Name : Integer := 0;","\n","      end record;","\n","end IO_Package;","\n",(0,a.kt)(l.Z,{mdxType:"MarginText"},"21"),"package body IO_Package is","\n","   Limit : constant := 200;","\n","   type File_Descriptor is record  ...  end record;","\n","   Directory : array (1 .. Limit) of File_Descriptor;","\n","   ...","\n","   procedure Open (F : in out File_Name) is  ...  end;","\n","   procedure Close(F : in out File_Name) is  ...  end;","\n","   procedure Read (F : in File_Name; Item : out Integer) is ... end;","\n","   procedure Write(F : in File_Name; Item : in  Integer) is ... end;","\n","begin","\n","   ...","\n","end IO_Package;","\n"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"22/5"),(0,a.kt)(d.Z,{items:["AI12-0440-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 3   ",(0,a.kt)("em",null,"Notes on the example:")," In the example above, an outside subprogram making use of IO_Package can  obtain a file name by calling Open and later use it in calls to Read and Write. Thus, outside the package, a file name obtained from Open acts as a kind of password; its internal properties (such as containing a numeric value) are not known and no other operations (such as addition or comparison of internal names) can be performed on a file name. Most importantly, clients of the package cannot make copies of objects of type File_Name.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"23"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"This example is characteristic of any case where complete control over the operations of a type is desired. Such packages serve a dual purpose. They prevent a user from making use of the internal structure of the type. They also implement the notion of an encapsulated data type where the only operations on the type are those given in the package specification.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"24/2"),(0,a.kt)(d.Z,{items:["AI95-00318-02"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The fact that the full view of File_Name is explicitly declared ",(0,a.kt)("strong",null,"limited")," means that parameter passing will always be by reference and function results will always be built directly in the result object (see ",(0,a.kt)("a",{href:"../AA-6/AA-6.2"},"6.2")," and ",(0,a.kt)("a",{href:"../AA-6/AA-6.5"},"6.5"),").",(0,a.kt)("br",null))),(0,a.kt)("h4",c({},{id:"extensions-to-ada-83"}),"Extensions to Ada 83"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"24.a"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The restrictions in RM83-7.4.4(4), which disallowed ",(0,a.kt)("strong",null,"out")," parameters of limited types in certain cases, are removed. ",(0,a.kt)("br",null))),(0,a.kt)("h4",c({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"24.b/3"),(0,a.kt)(d.Z,{items:["AI05-0299-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Since limitedness and privateness are orthogonal in Ada 95 (and to some extent in Ada 83), this is now its own subclause rather than being a subclause of ",(0,a.kt)("a",{href:"../AA-7/AA-7.3"},"7.3"),", \u201c",(0,a.kt)("a",{href:"../AA-7/AA-7.3"},"Private Types and Private Extensions"),"\u201d. ",(0,a.kt)("br",null))),(0,a.kt)("h4",c({},{id:"extensions-to-ada-95"}),"Extensions to Ada 95"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"24.c/2"),(0,a.kt)(d.Z,{items:["AI95-00287-01","AI95-00318-02"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Limited types now have an assignment operation, but its use is restricted such that all uses are build-in-place. This is accomplished by restricting uses to ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0106"},"aggregate")),"s and ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.4#S0218"},"function_call")),"s. ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0106"},"Aggregate")),"s were not allowed to have a limited type in Ada 95, which causes a compatibility issue discussed in ",(0,a.kt)("a",{href:"../AA-4/AA-4.3"},"4.3"),", \u201c",(0,a.kt)("a",{href:"../AA-4/AA-4.3"},"Aggregates"),"\u201d. Compatibility issues with return statements for limited ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.4#S0218"},"function_call")),"s are discussed in ",(0,a.kt)("a",{href:"../AA-6/AA-6.5"},"6.5"),", \u201c",(0,a.kt)("a",{href:"../AA-6/AA-6.5"},"Return Statements"),"\u201d. ",(0,a.kt)("br",null))),(0,a.kt)("h4",c({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"24.d/2"),(0,a.kt)(d.Z,{items:["AI95-00411-01","AI95-00419-01"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Rewrote the definition of limited to ensure that interfaces are covered, but that limitedness is not inherited from interfaces. Derived types that explicitly include ",(0,a.kt)("strong",null,"limited")," are now also covered. ",(0,a.kt)("br",null))),(0,a.kt)("h4",c({},{id:"wording-changes-from-ada-2005"}),"Wording Changes from Ada 2005"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"24.e/3"),(0,a.kt)(d.Z,{items:["AI05-0052-1","AI05-0217-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"correction",mdxType:"Admonition"},(0,a.kt)("strong",null)," Added a definition for immutably limited types, so that the fairly complex definition does not need to be repeated in rules elsewhere in the Reference Manual.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"24.f/3"),(0,a.kt)(d.Z,{items:["AI05-0067-1","AI05-0299-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"correction",mdxType:"Admonition"},(0,a.kt)("strong",null)," The built-in-place rules are consolidated in ",(0,a.kt)("a",{href:"../AA-7/AA-7.6"},"7.6"),", and thus they are removed from this subclause.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"24.g/3"),(0,a.kt)(d.Z,{items:["AI05-0087-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"correction",mdxType:"Admonition"},(0,a.kt)("strong",null)," Fixed an oversight: class-wide types were never defined to be limited, even if their associated specific type is. It is thought that this oversight was never implemented incorrectly by any compiler, thus we have not classified it as an incompatibility.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"24.h/3"),(0,a.kt)(d.Z,{items:["AI05-0147-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Allowed ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.5#S0148"},"conditional_expression")),"s in limited constructor contexts \u2014 we want to treat these as closely to parentheses as possible.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"24.i/3"),(0,a.kt)(d.Z,{items:["AI05-0177-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Added wording so that expression functions can return limited entities.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"24.j/3"),(0,a.kt)(d.Z,{items:["AI05-0178-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"correction",mdxType:"Admonition"},(0,a.kt)("strong",null)," Added incomplete views to the list of reasons for a view of a type to be limited. This is not a change as the definition already was in ",(0,a.kt)("a",{href:"../AA-3/AA-3.10#Subclause_3.10.1"},"3.10.1"),". But it is much better to have all of the reasons for limitedness together. ",(0,a.kt)("br",null))),(0,a.kt)("h4",c({},{id:"extensions-to-ada-2012"}),"Extensions to Ada 2012"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"24.k/5"),(0,a.kt)(d.Z,{items:["AI12-0172-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"correction",mdxType:"Admonition"},(0,a.kt)("strong",null)," A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.3#S0309"},"raise_expression"))," can be used in an expression used in a limited context. This is harmless (no object will be created if an exception is raised instead), useful, and thus appears to have been an omission when ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.3#S0309"},"raise_expression")),"s were added to the language. ",(0,a.kt)("br",null))),(0,a.kt)("h4",c({},{id:"wording-changes-from-ada-2012"}),"Wording Changes from Ada 2012"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"24.l/5"),(0,a.kt)(d.Z,{items:["AI12-0127-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Added the ",(0,a.kt)("em",null,"base_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0120"},"delta_aggregate"))," as a limited context. ",(0,a.kt)("br",null))))}Z.isMDXComponent=!0}}]);