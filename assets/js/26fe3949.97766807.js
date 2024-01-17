"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8988],{54309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>T,contentTitle:()=>k,default:()=>Z,frontMatter:()=>y,metadata:()=>x,toc:()=>g});var a=n(91716),r=n(21256),o=n(24895),i=n(28090),l=n(48424),d=n(82262),s=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&f(e,n,t[n]);if(p)for(var n of p(t))u.call(t,n)&&f(e,n,t[n]);return e};const y={sidebar_position:63},k="7.4 Deferred Constants",x={unversionedId:"arm/AA-7/AA-7.4",id:"arm/AA-7/AA-7.4",title:"7.4 Deferred Constants",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-7/AA-7.4.mdx",sourceDirName:"arm/AA-7",slug:"/arm/AA-7/AA-7.4",permalink:"/docs/arm/AA-7/AA-7.4",draft:!1,tags:[],version:"current",sidebarPosition:63,frontMatter:{sidebar_position:63},sidebar:"referenceManualSidebar",previous:{title:"7.3 Private Types and Private Extensions",permalink:"/docs/arm/AA-7/AA-7.3"},next:{title:"7.5 Limited Types",permalink:"/docs/arm/AA-7/AA-7.5"}},T={},g=[{value:"Legality Rules",id:"legality-rules",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4}],b={toc:g};function Z(e){var t,n=e,{components:s}=n,f=((e,t)=>{var n={};for(var a in e)h.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=A(A({},b),f),c(t,m({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("h1",A({},{id:"74-deferred-constants"}),"7.4 Deferred Constants"),(0,a.kt)("admonition",A({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",A({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(l.Z,{mdxType:"MarginText"},"1"),(0,a.kt)("p",null,"[Deferred constant declarations may be used to declare constants in the visible part of a package, but with the value of the constant given in the private part. They may also be used to declare constants imported from other languages (see ",(0,a.kt)("a",{href:"../AA-B/"},"Annex B"),").] ",(0,a.kt)("br",null)),(0,a.kt)("h4",A({},{id:"legality-rules"}),"Legality Rules"),(0,a.kt)(l.Z,{mdxType:"MarginText"},"2/3"),(0,a.kt)(d.Z,{items:["AI05-0229-1","AI05-0269-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"[ A ",(0,a.kt)("em",null,"deferred constant declaration")," is an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.3#S0032"},"object_declaration"))," with the reserved word ",(0,a.kt)("strong",null,"constant")," but no initialization expression.] The constant declared by a deferred constant declaration is called a ",(0,a.kt)("em",null,"deferred constant"),". [Unless the Import aspect (see ",(0,a.kt)("a",{href:"../AA-B/AA-B.1"},"B.1"),") is True for a deferred constant declaration, the] deferred constant declaration requires a completion, which shall be a full constant declaration (called the ",(0,a.kt)("em",null,"full declaration")," of the deferred constant). ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"2.a"),(0,a.kt)(r.Z,{type:"aarm",aarm:"proof",mdxType:"Admonition"},(0,a.kt)("strong",null),"The first sentence is redundant, as it is stated officially in ",(0,a.kt)("a",{href:"../AA-3/AA-3.3#Subclause_3.3.1"},"3.3.1"),".",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"2.b/3"),(0,a.kt)(d.Z,{items:["AI05-0229-1","AI05-0269-1"],mdxType:"MarginInfo"}),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The first part of the last sentence is redundant, as no imported entity may have a completion, as stated in ",(0,a.kt)("a",{href:"../AA-B/AA-B.1"},"B.1"),". ",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"MarginText"},"3"),(0,a.kt)("p",null,"A deferred constant declaration that is completed by a full constant declaration shall occur immediately within the visible part of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-7/AA-7.1#S0230"},"package_specification")),". For this case, the following additional rules apply to the corresponding full declaration: ",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"4"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"The full declaration shall occur immediately within the private part of the same package;",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"5/2"),(0,a.kt)(d.Z,{items:["AI95-00385-01"],mdxType:"MarginInfo"}),(0,a.kt)("li",null,"The deferred and full constants shall have the same type, or shall have statically matching anonymous access subtypes; ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"5.a/2"),(0,a.kt)(d.Z,{items:["AI95-00385-01"],mdxType:"MarginInfo"}),(0,a.kt)(r.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"This implies that both the deferred declaration and the full declaration have to have a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.2#S0027"},"subtype_indication"))," or ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.10#S0084"},"access_definition"))," rather than an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.6#S0051"},"array_type_definition")),", because each ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.6#S0051"},"array_type_definition"))," would define a new type. ",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"MarginText"},"6/3"),(0,a.kt)(d.Z,{items:["AI95-00385-01","AI05-0062-1","AI05-0262-1"],mdxType:"MarginInfo"}),(0,a.kt)("ul",null,(0,a.kt)("li",null,"If the deferred constant declaration includes a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.2#S0027"},"subtype_indication"))," ",(0,a.kt)("em",null,"S")," that defines a constrained subtype, then the constraint defined by the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.2#S0027"},"subtype_indication"))," in the full declaration shall match the constraint defined by ",(0,a.kt)("em",null,"S")," statically.[ On the other hand, if the subtype of the deferred constant is unconstrained, then the full declaration is still allowed to impose a constraint. The constant itself will be constrained, like all constants;]",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"7/2"),(0,a.kt)(d.Z,{items:["AI95-00231-01"],mdxType:"MarginInfo"}),(0,a.kt)("li",null,"If the deferred constant declaration includes the reserved word ",(0,a.kt)("strong",null,"aliased"),", then the full declaration shall also; ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"7.a"),(0,a.kt)(r.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"On the other hand, the full constant can be aliased even if the deferred constant is not. ",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"MarginText"},"7.1/2"),(0,a.kt)(d.Z,{items:["AI95-00231-01"],mdxType:"MarginInfo"}),(0,a.kt)("ul",null,(0,a.kt)("li",null,"If the subtype of the deferred constant declaration excludes null, the subtype of the full declaration shall also exclude null. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"7.a.1/2"),(0,a.kt)(r.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"On the other hand, the full constant can exclude null even if the deferred constant does not. But that can only happen for a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.2#S0027"},"subtype_indication")),", as anonymous access types are required to statically match (which includes any ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.10#S0083"},"null_exclusion")),"). ",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"MarginText"},"8/5"),(0,a.kt)(d.Z,{items:["AI05-0229-1","AI12-0444-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"[A deferred constant declaration for which the Import aspect is True can appear anywhere that an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.3#S0032"},"object_declaration"))," is allowed, and has no full constant declaration.]",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"9/2"),(0,a.kt)(d.Z,{items:["AI95-00256-01"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The completion of a deferred constant declaration shall occur before the constant is frozen (see ",(0,a.kt)("a",{href:"../AA-13/AA-13.14"},"13.14"),").",(0,a.kt)("br",null)),(0,a.kt)("h4",A({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,a.kt)(l.Z,{mdxType:"MarginText"},"10/3"),(0,a.kt)(d.Z,{items:["AI05-0004-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The elaboration of a deferred constant declaration elaborates the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.2#S0027"},"subtype_indication")),", ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.10#S0084"},"access_definition")),", or (only allowed in the case of an imported constant) the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.6#S0051"},"array_type_definition")),". ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"10.a/3"),(0,a.kt)(d.Z,{items:["AI05-0004-1"],mdxType:"MarginInfo"}),(0,a.kt)(r.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"For nonimported constants, these elaborations cannot require any code or checks for a legal program, because the given ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.2#S0027"},"subtype_indication"))," has to be indefinite or statically match that of the full constant, meaning that either it is a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark"))," or it has static constraints. If the deferred constant instead has an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.10#S0084"},"access_definition")),", the designated subtype must be a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark")),". We still say that these are elaborated, however, because part of elaboration is creating the type, which is clearly needed for ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.10#S0084"},"access_definition")),"s. (A deferred constant and its full constant have different types when they are specified by an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.10#S0084"},"access_definition")),", although there is no visible effect of these types being different as neither can be named.) ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"11"),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE   The full constant declaration for a deferred constant that is of a given private type or private extension is not allowed before the corresponding ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.2#S0024"},"full_type_declaration")),". This is a consequence of the freezing rules for types (see ",(0,a.kt)("a",{href:"../AA-13/AA-13.14"},"13.14"),"). ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"11.a"),(0,a.kt)(r.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"Multiple or single declarations are allowed for the deferred and the full declarations, provided that the equivalent single declarations would be allowed.",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"11.b"),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Deferred constant declarations are useful for declaring constants of private views, and types with components of private views. They are also useful for declaring access-to-constant objects that designate variables declared in the private part of a package. ",(0,a.kt)("br",null))),(0,a.kt)("h4",A({},{id:"examples"}),"Examples"),(0,a.kt)(l.Z,{mdxType:"MarginText"},"12"),(0,a.kt)("p",null,(0,a.kt)("em",null,"Examples of deferred constant declarations:")," ",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"13"),(0,a.kt)(i.Z,{language:"ada",mdxType:"CodeBlock"},"Null_Key : constant Key;      -- see ",(0,a.kt)("a",{href:"../AA-7/AA-7.3#Subclause_7.3.1"},"7.3.1"),"\n",(0,a.kt)(l.Z,{mdxType:"MarginText"},"14/3"),(0,a.kt)(d.Z,{items:["AI05-0229-1"],mdxType:"MarginInfo"}),"CPU_Identifier : constant String(1..8)","\n","   with Import =",">"," True, Convention =",">"," Assembler, Link_Name =",">",' "CPU_ID";',"\n","                              -- see ",(0,a.kt)("a",{href:"../AA-B/AA-B.1"},"B.1"),"\n"),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",A({},{id:"extensions-to-ada-83"}),"Extensions to Ada 83")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"14.a"),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"In Ada 83, a deferred constant is required to be of a private type declared in the same visible part. This restriction is removed for Ada 95; deferred constants can be of any type.",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"14.b"),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"In Ada 83, a deferred constant declaration was not permitted to include a constraint, nor the reserved word ",(0,a.kt)("strong",null,"aliased"),".",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"14.c"),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"In Ada 83, the rules required conformance of type marks; here we require static matching of subtypes if the deferred constant is constrained.",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"14.d"),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"A deferred constant declaration can be completed with a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Import. Such a deferred constant declaration need not be within a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-7/AA-7.1#S0230"},"package_specification")),".",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"14.e"),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The rules for too-early uses of deferred constants are modified in Ada 95 to allow more cases, and catch all errors at compile time. This change is necessary in order to allow deferred constants of a tagged type without violating the principle that for a dispatching call, there is always an implementation to dispatch to. It has the beneficial side effect of catching some Ada-83-erroneous programs at compile time. The new rule fits in well with the new freezing-point rules. Furthermore, we are trying to convert undefined-value problems into bounded errors, and we were having trouble for the case of deferred constants. Furthermore, uninitialized deferred constants cause trouble for the shared variable / tasking rules, since they are really variable, even though they purport to be constant. In Ada 95, they cannot be touched until they become constant.",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"14.f"),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Note that we do not consider this change to be an upward incompatibility, because it merely changes an erroneous execution in Ada 83 into a compile-time error.",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"14.g"),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The Ada 83 semantics are unclear in the case where the full view turns out to be an access type. It is a goal of the language design to prevent uninitialized access objects. One wonders if the implementation is required to initialize the deferred constant to null, and then initialize it (again!) to its real value. In Ada 95, the problem goes away. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",A({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"14.h/3"),(0,a.kt)(d.Z,{items:["AI05-0299-1"],mdxType:"MarginInfo"}),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Since deferred constants can now be of a nonprivate type, we have made this a stand-alone subclause, rather than a subclause of ",(0,a.kt)("a",{href:"../AA-7/AA-7.3"},"7.3"),", \u201c",(0,a.kt)("a",{href:"../AA-7/AA-7.3"},"Private Types and Private Extensions"),"\u201d.",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"14.i"),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Deferred constant declarations used to have their own syntax, but now they are simply a special case of ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.3#S0032"},"object_declaration")),"s. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",A({},{id:"extensions-to-ada-95"}),"Extensions to Ada 95")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"14.j/2"),(0,a.kt)(d.Z,{items:["AI95-00385-01"],mdxType:"MarginInfo"}),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Deferred constants were enhanced to allow the use of anonymous access types in them. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",A({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"14.k/2"),(0,a.kt)(d.Z,{items:["AI95-00231-01"],mdxType:"MarginInfo"}),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Added matching rules for subtypes that exclude null. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",A({},{id:"wording-changes-from-ada-2005"}),"Wording Changes from Ada 2005")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"14.l/3"),(0,a.kt)(d.Z,{items:["AI05-0062-1"],mdxType:"MarginInfo"}),(0,a.kt)(r.Z,{type:"aarm",aarm:"correction",mdxType:"Admonition"},(0,a.kt)("strong",null)," Corrected rules so that the intent that a full constant may have a null exclusion even if the deferred constant does not is actually met. ",(0,a.kt)("br",null))))}Z.isMDXComponent=!0}}]);