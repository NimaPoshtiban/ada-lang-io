"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8569],{9430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>g,frontMatter:()=>m,metadata:()=>A,toc:()=>f});var o=n(1716),r=n(7556),a=n(9464),l=Object.defineProperty,i=Object.defineProperties,d=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&p(e,n,t[n]);return e};const m={sidebar_position:75},h="9.4 Protected Units and Protected Objects",A={unversionedId:"arm/AA-9/AA-9.4",id:"arm/AA-9/AA-9.4",title:"9.4 Protected Units and Protected Objects",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-9/AA-9.4.mdx",sourceDirName:"arm/AA-9",slug:"/arm/AA-9/AA-9.4",permalink:"/docs/arm/AA-9/AA-9.4",draft:!1,tags:[],version:"current",sidebarPosition:75,frontMatter:{sidebar_position:75},sidebar:"referenceManualSidebar",previous:{title:"9.3 Task Dependence - Termination of Tasks",permalink:"/docs/arm/AA-9/AA-9.3"},next:{title:"9.5 Intertask Communication",permalink:"/docs/arm/AA-9/AA-9.5"}},b={},f=[{value:"Syntax",id:"syntax",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Bounded (Run-Time) Errors",id:"bounded-run-time-errors",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Incompatibilities With Ada 2005",id:"incompatibilities-with-ada-2005",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}],y={toc:f};function g(e){var t,n=e,{components:l}=n,p=((e,t)=>{var n={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&s)for(var o of s(e))t.indexOf(o)<0&&u.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=k(k({},y),p),i(t,d({components:l,mdxType:"MDXLayout"}))),(0,o.kt)("h1",k({},{id:"94-protected-units-and-protected-objects"}),"9.4 Protected Units and Protected Objects"),(0,o.kt)("admonition",k({},{type:"warning"}),(0,o.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,o.kt)("a",k({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,o.kt)("p",null,"A ",(0,o.kt)("em",null,"protected object")," provides coordinated access to shared data, through calls on its visible ",(0,o.kt)("em",null,"protected operations"),", which can be ",(0,o.kt)("em",null,"protected subprograms")," or ",(0,o.kt)("em",null,"protected entries"),". A ",(0,o.kt)("em",null,"protected unit")," is declared by a ",(0,o.kt)("em",null,"protected declaration"),", which has a corresponding ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0254"},"protected_body")),". A protected declaration may be a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0249"},"protected_type_declaration")),", in which case it declares a named protected type; alternatively, it may be a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0250"},"single_protected_declaration")),", in which case it defines an anonymous protected type, as well as declaring a named protected object of that type. ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"syntax"}),"Syntax"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00345-01"),"}"," ","{",(0,o.kt)("em",null,"AI05-0183-1"),"}"," ",(0,o.kt)("br",null),(0,o.kt)("code",null,"protected_type_declaration"),(0,o.kt)("a",{id:"S0249"}),(0,o.kt)("code",null," ::= "),(0,o.kt)("br",null),"  ",(0,o.kt)("strong",null,"protected")," ",(0,o.kt)("strong",null,"type")," ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.1#S0022"},"defining_identifier"))," [",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.7#S0061"},"known_discriminant_part")),"]",(0,o.kt)("br",null),"        [",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification")),"] ",(0,o.kt)("strong",null,"is"),(0,o.kt)("br",null),"     [",(0,o.kt)("strong",null,"new")," ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.9#S0078"},"interface_list"))," ",(0,o.kt)("strong",null,"with"),"]",(0,o.kt)("br",null),"     ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0251"},"protected_definition")),";",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00399-01"),"}"," ","{",(0,o.kt)("em",null,"AI05-0183-1"),"}"," ",(0,o.kt)("br",null),(0,o.kt)("code",null,"single_protected_declaration"),(0,o.kt)("a",{id:"S0250"}),(0,o.kt)("code",null," ::= "),(0,o.kt)("br",null),"  ",(0,o.kt)("strong",null,"protected")," ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.1#S0022"},"defining_identifier")),(0,o.kt)("br",null),"        [",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification")),"] ",(0,o.kt)("strong",null,"is"),(0,o.kt)("br",null),"     [",(0,o.kt)("strong",null,"new")," ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.9#S0078"},"interface_list"))," ",(0,o.kt)("strong",null,"with"),"]",(0,o.kt)("br",null),"     ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0251"},"protected_definition")),";",(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("code",null,"protected_definition"),(0,o.kt)("a",{id:"S0251"}),(0,o.kt)("code",null," ::= "),(0,o.kt)("br",null),"    ","{"," ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0252"},"protected_operation_declaration"))," ","}",(0,o.kt)("br",null),"[ ",(0,o.kt)("strong",null,"private"),(0,o.kt)("br",null),"    ","{"," ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0253"},"protected_element_declaration"))," ","}"," ]",(0,o.kt)("br",null),"  ",(0,o.kt)("strong",null,"end")," [",(0,o.kt)("em",null,"protected_"),(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"]",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"8652/0009"),"}"," ","{",(0,o.kt)("em",null,"AI95-00137-01"),"}"," ",(0,o.kt)("br",null),(0,o.kt)("code",null,"protected_operation_declaration"),(0,o.kt)("a",{id:"S0252"}),(0,o.kt)("code",null," ::= "),(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-6/AA-6.1#S0195"},"subprogram_declaration")),(0,o.kt)("br",null),"     | ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.5#S0257"},"entry_declaration")),(0,o.kt)("br",null),"     | ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-13/AA-13.1#S0343"},"aspect_clause")),(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("code",null,"protected_element_declaration"),(0,o.kt)("a",{id:"S0253"}),(0,o.kt)("code",null," ::= "),(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0252"},"protected_operation_declaration")),(0,o.kt)("br",null),"     | ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.8#S0070"},"component_declaration")),(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"We allow the operations and components to be mixed because that's how other things work (for example, package declarations). We have relaxed the ordering rules for the items inside ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part")),"s and ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.1#S0246"},"task_definition")),"s as well. ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI05-0267-1"),"}"," ",(0,o.kt)("br",null),(0,o.kt)("code",null,"protected_body"),(0,o.kt)("a",{id:"S0254"}),(0,o.kt)("code",null," ::= "),(0,o.kt)("br",null),"  ",(0,o.kt)("strong",null,"protected")," ",(0,o.kt)("strong",null,"body")," ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.1#S0022"},"defining_identifier")),(0,o.kt)("br",null),"        [",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification")),"] ",(0,o.kt)("strong",null,"is"),(0,o.kt)("br",null),"   ","{"," ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0255"},"protected_operation_item"))," ","}",(0,o.kt)("br",null),"  ",(0,o.kt)("strong",null,"end")," [",(0,o.kt)("em",null,"protected_"),(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"];",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"8652/0009"),"}"," ","{",(0,o.kt)("em",null,"AI95-00137-01"),"}"," ","{",(0,o.kt)("em",null,"AI12-0147-1"),"}"," ",(0,o.kt)("br",null),(0,o.kt)("code",null,"protected_operation_item"),(0,o.kt)("a",{id:"S0255"}),(0,o.kt)("code",null," ::= "),(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-6/AA-6.1#S0195"},"subprogram_declaration")),(0,o.kt)("br",null),"     | ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-6/AA-6.3#S0216"},"subprogram_body")),(0,o.kt)("br",null),"     | ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-6/AA-6.7#S0227"},"null_procedure_declaration")),(0,o.kt)("br",null),"     | ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-6/AA-6.8#S0228"},"expression_function_declaration")),(0,o.kt)("br",null),"     | ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.5#S0260"},"entry_body")),(0,o.kt)("br",null),"     | ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-13/AA-13.1#S0343"},"aspect_clause")),(0,o.kt)("br",null)),(0,o.kt)("p",null,"If a ",(0,o.kt)("em",null,"protected_"),(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," appears at the end of a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0251"},"protected_definition"))," or ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0254"},"protected_body")),", it shall repeat the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.1#S0022"},"defining_identifier")),". ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,o.kt)("em",null,"This paragraph was deleted."),(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("em",null,"Paragraph 10 was deleted.")," ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"static-semantics"}),"Static Semantics"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00345-01"),"}"," ","{",(0,o.kt)("em",null,"AI95-00401-01"),"}"," ",(0,o.kt)("br",null),"A ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0251"},"protected_definition"))," defines a protected type and its first subtype. The list of ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0252"},"protected_operation_declaration")),"s of a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0251"},"protected_definition")),", together with the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.7#S0061"},"known_discriminant_part")),", if any, is called the visible part of the protected unit. [ The optional list of ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0253"},"protected_element_declaration")),"s after the reserved word ",(0,o.kt)("strong",null,"private")," is called the private part of the protected unit.] ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"proof",title:"Proof: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"{",(0,o.kt)("em",null,"AI05-0299-1"),"}"," ",(0,o.kt)("br",null),"Private part is defined in Clause 8. ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00345-01"),"}"," ","{",(0,o.kt)("em",null,"AI95-00397-01"),"}"," ","{",(0,o.kt)("em",null,"AI95-00399-01"),"}"," ","{",(0,o.kt)("em",null,"AI95-00419-01"),"}"," ","{",(0,o.kt)("em",null,"AI05-0042-1"),"}"," ",(0,o.kt)("br",null),"For a protected declaration with an ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.9#S0078"},"interface_list")),", the protected type inherits user-defined primitive subprograms from each progenitor type (see 3.9.4), in the same way that a derived type inherits user-defined primitive subprograms from its progenitor types (see 3.4). If the first parameter of a primitive inherited subprogram is of the protected type or an access parameter designating the protected type, and there is a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0252"},"protected_operation_declaration"))," for a protected subprogram or single entry with the same identifier within the protected declaration, whose profile is type conformant with the prefixed view profile of the inherited subprogram, the inherited subprogram is said to be ",(0,o.kt)("em",null,"implemented")," by the conforming protected subprogram or entry using an implicitly declared nonabstract subprogram which has the same profile as the inherited subprogram and which overrides it. ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"The inherited subprograms can only come from an interface given as part of the protected declaration. ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"{",(0,o.kt)("em",null,"AI05-0042-1"),"}"," ",(0,o.kt)("br",null),"The part about the implicitly declared subprogram is needed so that a subprogram implemented by an entry or subprogram is considered to be overridden for the purpose of the other rules of the language. Without it, it would for instance be illegal for an abstract subprogram to be implemented by an entry, because the abstract subprogram would not be overridden. The Legality Rules below ensure that there is no conflict between the implicit overriding subprogram and a user-defined overriding subprogram. ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"legality-rules"}),"Legality Rules"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00345-01"),"}"," ",(0,o.kt)("br",null),"A protected declaration requires a completion[, which shall be a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0254"},"protected_body")),",] and every ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0254"},"protected_body"))," shall be the completion of some protected declaration. ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,o.kt)("strong",null,"To be honest: "),"{",(0,o.kt)("em",null,"AI05-0229-1"),"}"," ",(0,o.kt)("br",null),"If the implementation supports it, the protected body can be imported (using aspect Import, see B.1), in which case no explicit ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0254"},"protected_body"))," is allowed. ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00345-01"),"}"," ","{",(0,o.kt)("em",null,"AI95-00399-01"),"}"," ",(0,o.kt)("br",null),"[Each ",(0,o.kt)("em",null,"interface_"),(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark"))," of an ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.9#S0078"},"interface_list"))," appearing within a protected declaration shall denote a limited interface type that is not a task interface.] ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"proof",title:"Proof: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"3.9.4 requires that an ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.9#S0078"},"interface_list"))," only name interface types, and limits the descendants of the various kinds of interface types. Only a limited, protected, or synchronized interface can have a protected type descendant. Nonlimited or task interfaces are not allowed, as they offer operations that a protected type does not have. ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00397-01"),"}"," ","{",(0,o.kt)("em",null,"AI05-0042-1"),"}"," ",(0,o.kt)("br",null),"The prefixed view profile of an explicitly declared primitive subprogram of a tagged protected type shall not be type conformant with any protected operation of the protected type, if the subprogram has the same defining name as the protected operation and the first parameter of the subprogram is of the protected type or is an access parameter designating the protected type. ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,o.kt)("strong",null),'This prevents the existence of two operations with the same name and profile which could be called with a prefixed view. If the operation was inherited, this would be illegal by the following rules; this rule puts inherited and noninherited routines on the same footing. Note that this only applies to tagged protected types (that is, those with an interface in their declaration); we do that as there is no problem with prefixed view calls of primitive operations for "normal" protected types, and having this rule apply to all protected types would be incompatible with Ada 95. ',(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00345-01"),"}"," ","{",(0,o.kt)("em",null,"AI95-00399-01"),"}"," ",(0,o.kt)("br",null),"For each primitive subprogram inherited by the type declared by a protected declaration, at most one of the following shall apply:",(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",null,"{",(0,o.kt)("em",null,"AI95-00345-01"),"}"," ",(0,o.kt)("br",null),"the inherited subprogram is overridden with a primitive subprogram of the protected type, in which case the overriding subprogram shall be subtype conformant with the inherited subprogram and not abstract; or",(0,o.kt)("br",null)),(0,o.kt)("li",null,"{",(0,o.kt)("em",null,"AI95-00345-01"),"}"," ","{",(0,o.kt)("em",null,"AI95-00397-01"),"}"," ",(0,o.kt)("br",null),"the inherited subprogram is implemented by a protected subprogram or single entry of the protected type, in which case its prefixed view profile shall be subtype conformant with that of the protected subprogram or entry. ",(0,o.kt)("br",null))),(0,o.kt)("p",null,"If neither applies, the inherited subprogram shall be a null procedure. In addition to the places where Legality Rules normally apply (see 12.3), these rules also apply in the private part of an instance of a generic unit. ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"Each inherited subprogram can only have a single implementation (either from overriding a subprogram, implementing a subprogram, or implementing an entry), and must have an implementation unless the subprogram is a null procedure. ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00345-01"),"}"," ","{",(0,o.kt)("em",null,"AI05-0291-1"),"}"," ",(0,o.kt)("br",null),"If an inherited subprogram is implemented by a protected procedure or an entry, then the first parameter of the inherited subprogram shall be of mode ",(0,o.kt)("strong",null,"out")," or ",(0,o.kt)("strong",null,"in out"),", or an access-to-variable parameter. If an inherited subprogram is implemented by a protected function, then the first parameter of the inherited subprogram shall be of mode ",(0,o.kt)("strong",null,"in"),", but not an access-to-variable parameter. ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"For a protected procedure or entry, the protected object can be read or written (see 9.5.1). A subprogram that is implemented by a protected procedure or entry must have a profile which reflects that in order to avoid confusion. Similarly, a protected function has a parameter that is a constant, and the inherited routine should reflect that. ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00397-01"),"}"," ",(0,o.kt)("br",null),"If a protected subprogram declaration has an ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-8/AA-8.3#S0234"},"overriding_indicator")),", then at the point of the declaration:",(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",null,"if the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-8/AA-8.3#S0234"},"overriding_indicator"))," is ",(0,o.kt)("strong",null,"overriding"),", then the subprogram shall implement an inherited subprogram;",(0,o.kt)("br",null)),(0,o.kt)("li",null,"if the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-8/AA-8.3#S0234"},"overriding_indicator"))," is ",(0,o.kt)("strong",null,"not overriding"),", then the subprogram shall not implement any inherited subprogram.",(0,o.kt)("br",null))),(0,o.kt)("p",null,"In addition to the places where Legality Rules normally apply (see 12.3), these rules also apply in the private part of an instance of a generic unit.",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,o.kt)("strong",null),'These rules are subtly different than those for subprograms (see 8.3.1) because there cannot be "late" inheritance of primitives from interfaces. Hidden (that is, private) interfaces are prohibited explicitly (see 7.3), as are hidden primitive operations (as private operations of public abstract types are prohibited - see 3.9.3). ',(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,o.kt)("p",null,"[The elaboration of a protected declaration elaborates the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0251"},"protected_definition")),". The elaboration of a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0250"},"single_protected_declaration"))," also creates an object of an (anonymous) protected type.] ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"proof",title:"Proof: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"This is redundant with the general rules for the elaboration of a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.2#S0024"},"full_type_declaration"))," and an ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.3#S0032"},"object_declaration")),". ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"[The elaboration of a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0251"},"protected_definition"))," creates the protected type and its first subtype;] it also includes the elaboration of the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.8#S0070"},"component_declaration")),"s and ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0252"},"protected_operation_declaration")),"s in the given order.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"[As part of the initialization of a protected object, any per-object constraints (see 3.8) are elaborated.] ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"We do not mention pragmas since each pragma has its own elaboration rules. ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"The elaboration of a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0254"},"protected_body"))," has no other effect than to establish that protected operations of the type can from then on be called without failing the Elaboration_Check.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"The content of an object of a given protected type includes: ",(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",null,"The values of the components of the protected object, including (implicitly) an entry queue for each entry declared for the protected object; ",(0,o.kt)("br",null))),(0,o.kt)(a.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,o.kt)("strong",null),'"For each entry" implies one queue for each single entry, plus one for each entry of each entry family. ',(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",null,"A representation of the state of the execution resource ",(0,o.kt)("em",null,"associated")," with the protected object (one such resource is associated with each protected object). ",(0,o.kt)("br",null))),(0,o.kt)("p",null,"[The execution resource associated with a protected object has to be acquired to read or update any components of the protected object; it can be acquired (as part of a protected action - see 9.5.1) either for concurrent read-only access, or for exclusive read-write access.]",(0,o.kt)("br",null)),(0,o.kt)("p",null,"As the first step of the ",(0,o.kt)("em",null,"finalization")," of a protected object, each call remaining on any entry queue of the object is removed from its queue and Program_Error is raised at the place of the corresponding ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.5#S0264"},"entry_call_statement")),". ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"This is analogous to the raising of Tasking_Error in callers of a task that completes before accepting the calls. This situation can only occur due to a requeue (ignoring premature unchecked_deallocation), since any task that has accessibility to a protected object is awaited before finalizing the protected object. For example: ",(0,o.kt)("br",null)),(0,o.kt)(r.Z,{mdxType:"CodeBlock"},"procedure Main is","\n","    task T is","\n","        entry E;","\n","    end T;","\n","task body T is","\n","        protected PO is","\n","            entry Ee;","\n","        end PO;","\n","protected body PO is","\n","            entry Ee when False is","\n","            begin","\n","                null;","\n","            end Ee;","\n","        end PO;","\n","    begin","\n","        accept E do","\n","            requeue PO.Ee;","\n","        end E;","\n","    end T;","\n","begin","\n","    T.E;","\n","end Main;","\n"),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI05-0005-1"),"}"," ",(0,o.kt)("br",null),"The environment task is queued on PO.Ee when PO is finalized.",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"In a real example, a server task might park callers on a local protected object for some useful purpose, so we didn't want to disallow this case. ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"bounded-run-time-errors"}),"Bounded (Run-Time) Errors"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00280-01"),"}"," ",(0,o.kt)("br",null),"It is a bounded error to call an entry or subprogram of a protected object after that object is finalized. If the error is detected, Program_Error is raised. Otherwise, the call proceeds normally, which may leave a task queued forever. ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"This is very similar to the finalization rule. It is a bounded error so that an implementation can avoid the overhead of the check if it can ensure that the call still will operate properly. Such an implementation cannot need to return resources (such as locks) to an executive that it needs to execute calls.",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"This case can happen (and has happened in production code) when a protected object is accessed from the Finalize routine of a type. For example: ",(0,o.kt)("br",null)),(0,o.kt)(r.Z,{mdxType:"CodeBlock"},"with Ada.Finalization.Controlled;","\n","package Window_Manager is","\n","    ...","\n","    type Root_Window is new Ada.Finalization.Controlled with private;","\n","    type Any_Window is access all Root_Window;","\n","    ...","\n","private","\n","    ...","\n","    procedure Finalize (Object : in out Root_Window);","\n","    ...","\n","end Window_Manager;","\n","package body Window_Manager is","\n","   protected type Lock is","\n","       entry Get_Lock;","\n","       procedure Free_Lock;","\n","   ...","\n","   end Lock;","\n","Window_Lock : Lock;","\n","procedure Finalize (Object : in out Root_Window) is","\n","   begin","\n","       Window_Lock.Get_Lock;","\n","       ...","\n","       Window_Lock.Free_Lock;","\n","   end Finalize;","\n","   ...","\n","   A_Window : Any_Window := new Root_Window;","\n","end Window_Manager;","\n"),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"The environment task will call Window_Lock for the object allocated for A_Window when the collection for Any_Window is finalized, which will happen after the finalization of Window_Lock (because finalization of the package body will occur before that of the package specification). ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 1   ","{",(0,o.kt)("em",null,"AI95-00382-01"),"}"," ",(0,o.kt)("br",null),"Within the declaration or body of a protected unit other than in an ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.10#S0084"},"access_definition")),", the name of the protected unit denotes the current instance of the unit (see 8.6), rather than the first subtype of the corresponding protected type (and thus the name cannot be used as a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark")),"). ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"{",(0,o.kt)("em",null,"AI95-00382-01"),"}"," ",(0,o.kt)("br",null),"It can be used as a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark"))," in an anonymous access type. In addition, it is possible to refer to some other subtype of the protected type within its body, presuming such a subtype has been declared between the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0249"},"protected_type_declaration"))," and the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0254"},"protected_body")),". ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 2   A ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-4/AA-4.1#S0098"},"selected_component"))," can be used to denote a discriminant of a protected object (see 4.1.3). Within a protected unit, the name of a discriminant of the protected type denotes the corresponding discriminant of the current instance of the unit.",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 3   ","{",(0,o.kt)("em",null,"AI95-00287-01"),"}"," ",(0,o.kt)("br",null),"A protected type is a limited type (see 7.5), and hence precludes use of ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement")),"s and predefined equality operators.",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 4   The bodies of the protected operations given in the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0254"},"protected_body"))," define the actions that take place upon calls to the protected operations.",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 5   The declarations in the private part are only visible within the private part and the body of the protected unit. ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,o.kt)("strong",null),(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.8#S0070"},"Component_declaration")),"s are disallowed in a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0254"},"protected_body"))," because, for efficiency, we wish to allow the compiler to determine the size of protected objects (when not dynamic); the compiler cannot necessarily see the body. Furthermore, the semantics of initialization of such objects would be problematic - we do not wish to give protected objects complex initialization semantics similar to task activation.",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"The same applies to ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.5#S0257"},"entry_declaration")),"s, since an entry involves an implicit component - the entry queue. ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"examples"}),"Examples"),(0,o.kt)("p",null,(0,o.kt)("em",null,"Example of declaration of protected type and corresponding body:")," ",(0,o.kt)("br",null)),(0,o.kt)(r.Z,{mdxType:"CodeBlock"},"protected type Resource is","\n","   entry Seize;","\n","   procedure Release;","\n","private","\n","   Busy : Boolean := False;","\n","end Resource;","\n","protected body Resource is","\n","   entry Seize when not Busy is","\n","   begin","\n","      Busy := True;","\n","   end Seize;","\n","procedure Release is","\n","   begin","\n","      Busy := False;","\n","   end Release;","\n","end Resource;","\n"),(0,o.kt)("p",null,(0,o.kt)("em",null,"Example of a single protected declaration and corresponding body:")," ",(0,o.kt)("br",null)),(0,o.kt)(r.Z,{mdxType:"CodeBlock"},"--  ","{","AI12-0430-1","}","\n"," protected Shared_Array is","\n","   --  Index, Item, and Item_Array are global types","\n","   function  Component    (N : in Index) return Item;","\n","   procedure Set_Component(N : in Index; E : in  Item);","\n","private","\n","   Table : Item_Array(Index) := (others =",">"," Null_Item);","\n","end Shared_Array;","\n","protected body Shared_Array is","\n","   function Component(N : in Index) return Item is","\n","   begin","\n","      return Table(N);","\n","   end Component;","\n","procedure Set_Component(N : in Index; E : in Item) is","\n","   begin","\n","      Table(N) := E;","\n","   end Set_Component;","\n","end Shared_Array;","\n"),(0,o.kt)("p",null,(0,o.kt)("em",null,"Examples of protected objects:")," ",(0,o.kt)("br",null)),(0,o.kt)(r.Z,{mdxType:"CodeBlock"},"Control  : Resource;","\n","Flags    : array(1 .. 100) of Resource;","\n"),(0,o.kt)("h4",k({},{id:"extensions-to-ada-83"}),"Extensions to Ada 83"),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI05-0299-1"),"}"," ",(0,o.kt)("br",null),"This entire subclause is new; protected units do not exist in Ada 83. ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"extensions-to-ada-95"}),"Extensions to Ada 95"),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI95-00345-01"),"}"," ","{",(0,o.kt)("em",null,"AI95-00397-01"),"}"," ","{",(0,o.kt)("em",null,"AI95-00399-01"),"}"," ","{",(0,o.kt)("em",null,"AI95-00401-01"),"}"," ","{",(0,o.kt)("em",null,"AI95-00419-01"),"}"," ",(0,o.kt)("br",null),"Protected types and single protected objects can be derived from one or more interfaces. Operations declared in the protected type can implement the primitive operations of an interface. ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-8/AA-8.3#S0234"},"Overriding_indicator")),"s can be used to specify whether or not a protected operation implements a primitive operation. ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95"),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"8652/0009"),"}"," ","{",(0,o.kt)("em",null,"AI95-00137-01"),"}"," ",(0,o.kt)("strong",null,(0,o.kt)("br",null),"Corrigendum:")," Changed representation clauses to aspect clauses to reflect that they are used for more than just representation.",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI95-00280-01"),"}"," ",(0,o.kt)("br",null),"Described what happens when an operation of a finalized protected object is called.",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI95-00287-01"),"}"," ",(0,o.kt)("br",null),"Revised the note on operations of protected types to reflect that limited types do have an assignment operation, but not copying (",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement")),"s).",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI95-00382-01"),"}"," ",(0,o.kt)("br",null),"Revised the note on use of the name of a protected type within itself to reflect the exception for anonymous access types. ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"incompatibilities-with-ada-2005"}),"Incompatibilities With Ada 2005"),(0,o.kt)(a.Z,{type:"aarm",aarm:"correction",title:"Correction:",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI05-0291-1"),"}"," ",(0,o.kt)("strong",null,(0,o.kt)("br",null))," When an inherited subprogram is implemented by a protected function, the first parameter has to be an ",(0,o.kt)("strong",null,"in")," parameter, but not an access-to-variable type. Original Ada 2005 allowed access-to-variable parameters in this case; the parameter will need to be changed to access-to-constant with the addition of the ",(0,o.kt)("strong",null,"constant")," keyword. ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"extensions-to-ada-2005"}),"Extensions to Ada 2005"),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI05-0183-1"),"}"," ","{",(0,o.kt)("em",null,"AI05-0267-1"),"}"," ",(0,o.kt)("br",null),"An optional ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification"))," can be used in a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0249"},"protected_type_declaration")),", a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0250"},"single_protected_declaration")),", and a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.4#S0254"},"protected_body")),". This is described in 13.1.1. ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"wording-changes-from-ada-2005"}),"Wording Changes from Ada 2005"),(0,o.kt)(a.Z,{type:"aarm",aarm:"correction",title:"Correction:",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI05-0042-1"),"}"," ",(0,o.kt)("strong",null,(0,o.kt)("br",null))," Clarified that an inherited subprogram of a progenitor is overridden when it is implemented by an entry or subprogram.",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"correction",title:"Correction:",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI05-0090-1"),"}"," ",(0,o.kt)("strong",null,(0,o.kt)("br",null))," Added the missing defining name in the no conflicting primitive operation rule. ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"extensions-to-ada-2012"}),"Extensions to Ada 2012"),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI12-0147-1"),"}"," ","{",(0,o.kt)("em",null,"AI12-0005-1"),"}"," ",(0,o.kt)("strong",null,(0,o.kt)("br",null),"Corrigendum:")," Null procedures and expression functions are allowed in protected bodies. We consider this an omission, as there is no reason why the convenient shorthand notations should not be allowed in this context. ",(0,o.kt)("br",null)))}g.isMDXComponent=!0}}]);