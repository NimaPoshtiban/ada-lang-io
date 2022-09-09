"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[9130],{1121:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>A,contentTitle:()=>k,default:()=>y,frontMatter:()=>h,metadata:()=>f,toc:()=>b});var n=a(1716),l=a(7556),o=a(9464),r=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,p=(t,e)=>{for(var a in e||(e={}))m.call(e,a)&&d(t,a,e[a]);if(u)for(var a of u(e))c.call(e,a)&&d(t,a,e[a]);return t};const h={sidebar_position:99},k="12.6 Formal Subprograms",f={unversionedId:"arm/AA-12/AA-12.6",id:"arm/AA-12/AA-12.6",title:"12.6 Formal Subprograms",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-12/AA-12.6.mdx",sourceDirName:"arm/AA-12",slug:"/arm/AA-12/AA-12.6",permalink:"/docs/arm/AA-12/AA-12.6",draft:!1,tags:[],version:"current",sidebarPosition:99,frontMatter:{sidebar_position:99},sidebar:"referenceManualSidebar",previous:{title:"12.5 Formal Types",permalink:"/docs/arm/AA-12/AA-12.5"},next:{title:"12.7 Formal Packages",permalink:"/docs/arm/AA-12/AA-12.7"}},A={},b=[{value:"Language Design Principles",id:"language-design-principles",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Incompatibilities With Ada 2005",id:"incompatibilities-with-ada-2005",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005",level:4},{value:"Incompatibilities With Ada 2012",id:"incompatibilities-with-ada-2012",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}],g={toc:b};function y(t){var e,a=t,{components:r}=a,d=((t,e)=>{var a={};for(var n in t)m.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&u)for(var n of u(t))e.indexOf(n)<0&&c.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=p(p({},g),d),i(e,s({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"126-formal-subprograms"}),"12.6 Formal Subprograms"),(0,n.kt)("admonition",p({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.kt)("a",p({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,n.kt)("p",null,"[ Formal subprograms can be used to pass callable entities to a generic unit.] ",(0,n.kt)("br",null)),(0,n.kt)("h4",p({},{id:"language-design-principles"}),"Language Design Principles"),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"Generic formal subprograms are like renames of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.3#S0318"},"explicit_generic_actual_parameter")),". ",(0,n.kt)("br",null)),(0,n.kt)("h4",p({},{id:"syntax"}),"Syntax"),(0,n.kt)(l.Z,{mdxType:"CodeBlock"},"{",(0,n.kt)("em",null,"AI95-00260-02"),"}"," ",(0,n.kt)("br",null),(0,n.kt)("code",null,"formal_subprogram_declaration"),(0,n.kt)("a",{id:"S0335"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0336"},"formal_concrete_subprogram_declaration")),(0,n.kt)("br",null),"    | ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0337"},"formal_abstract_subprogram_declaration")),(0,n.kt)("br",null)),(0,n.kt)(l.Z,{mdxType:"CodeBlock"},"{",(0,n.kt)("em",null,"AI95-00260-02"),"}"," ","{",(0,n.kt)("em",null,"AI05-0183-1"),"}"," ",(0,n.kt)("br",null),(0,n.kt)("code",null,"formal_concrete_subprogram_declaration"),(0,n.kt)("a",{id:"S0336"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("br",null),"     ",(0,n.kt)("strong",null,"with")," ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-6/AA-6.1#S0196"},"subprogram_specification"))," [",(0,n.kt)("strong",null,"is")," ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0338"},"subprogram_default")),"]",(0,n.kt)("br",null),"        [",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification")),"];",(0,n.kt)("br",null)),(0,n.kt)(l.Z,{mdxType:"CodeBlock"},"{",(0,n.kt)("em",null,"AI95-00260-02"),"}"," ","{",(0,n.kt)("em",null,"AI05-0183-1"),"}"," ",(0,n.kt)("br",null),(0,n.kt)("code",null,"formal_abstract_subprogram_declaration"),(0,n.kt)("a",{id:"S0337"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("br",null),"     ",(0,n.kt)("strong",null,"with")," ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-6/AA-6.1#S0196"},"subprogram_specification"))," ",(0,n.kt)("strong",null,"is abstract")," [",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0338"},"subprogram_default")),"]",(0,n.kt)("br",null),"        [",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification")),"];",(0,n.kt)("br",null)),(0,n.kt)(l.Z,{mdxType:"CodeBlock"},"{",(0,n.kt)("em",null,"AI95-00348-01"),"}"," ",(0,n.kt)("br",null),(0,n.kt)("code",null,"subprogram_default"),(0,n.kt)("a",{id:"S0338"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0339"},"default_name"))," | ","<",">"," | ",(0,n.kt)("strong",null,"null"),(0,n.kt)("br",null)),(0,n.kt)(l.Z,{mdxType:"CodeBlock"},(0,n.kt)("code",null,"default_name"),(0,n.kt)("a",{id:"S0339"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name")),(0,n.kt)("br",null)),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00260-02"),"}"," ","{",(0,n.kt)("em",null,"AI95-00348-01"),"}"," ",(0,n.kt)("br",null),"A ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0338"},"subprogram_default"))," of ",(0,n.kt)("strong",null,"null")," shall not be specified for a formal function or for a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0337"},"formal_abstract_subprogram_declaration")),". ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"There are no null functions because the return value has to be constructed somehow. We don't allow null for abstract formal procedures, as the operation is dispatching. It doesn't seem appropriate (or useful) to say that the implementation of something is null in the formal type and all possible descendants of that type. This also would define a dispatching operation that doesn't correspond to a slot in the tag of the controlling type, which would be a new concept. Finally, additional rules would be needed to define the meaning of a dispatching null procedure (for instance, the convention of such a subprogram should be intrinsic, but that's not what the language says). It doesn't seem worth the effort. ",(0,n.kt)("br",null)),(0,n.kt)("h4",p({},{id:"name-resolution-rules"}),"Name Resolution Rules"),(0,n.kt)("p",null,"The expected profile for the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0339"},"default_name")),", if any, is that of the formal subprogram. ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"{",(0,n.kt)("em",null,"AI05-0299-1"),"}"," ",(0,n.kt)("br",null),"This rule, unlike others in this subclause, is observed at compile time of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.1#S0310"},"generic_declaration")),".",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"The evaluation of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0339"},"default_name")),' takes place during the elaboration of each instantiation that uses the default, as defined in 12.3, "Generic Instantiation". ',(0,n.kt)("br",null)),(0,n.kt)("p",null,"For a generic formal subprogram, the expected profile for the actual is that of the formal subprogram. ",(0,n.kt)("br",null)),(0,n.kt)("h4",p({},{id:"legality-rules"}),"Legality Rules"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0239-1"),"}"," ",(0,n.kt)("br",null),"The profiles of the formal and any named default shall be mode conformant. ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"{",(0,n.kt)("em",null,"AI05-0299-1"),"}"," ",(0,n.kt)("br",null),"This rule, unlike others in this subclause, is checked at compile time of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.1#S0310"},"generic_declaration")),". ",(0,n.kt)("br",null)),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0239-1"),"}"," ",(0,n.kt)("br",null),"The profiles of the formal and actual shall be mode conformant. ",(0,n.kt)("br",null)),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00423-01"),"}"," ",(0,n.kt)("br",null),"For a parameter or result subtype of a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0335"},"formal_subprogram_declaration"))," that has an explicit ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-3/AA-3.10#S0083"},"null_exclusion")),":",(0,n.kt)("br",null)),(0,n.kt)("ul",null,(0,n.kt)("li",null,"{",(0,n.kt)("em",null,"AI12-0183-1"),"}"," ","{",(0,n.kt)("em",null,"AI12-0287-1"),"}"," ",(0,n.kt)("br",null),"if the actual matching the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0335"},"formal_subprogram_declaration"))," statically denotes a generic formal subprogram of another generic unit ",(0,n.kt)("em",null,"G"),", and the instantiation containing the actual occurs within the body of a generic unit ",(0,n.kt)("em",null,"G")," or within the body of a generic unit declared within the declarative region of the generic unit ",(0,n.kt)("em",null,"G"),", then the corresponding parameter or result type of the formal subprogram of ",(0,n.kt)("em",null,"G")," shall have a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-3/AA-3.10#S0083"},"null_exclusion")),";",(0,n.kt)("br",null)),(0,n.kt)("li",null,"otherwise, the subtype of the corresponding parameter or result type of the actual matching the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0335"},"formal_subprogram_declaration"))," shall exclude null. In addition to the places where Legality Rules normally apply (see 12.3), this rule applies also in the private part of an instance of a generic unit. ",(0,n.kt)("br",null))),(0,n.kt)(o.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,n.kt)("strong",null),'This rule prevents "lying". ',(0,n.kt)("strong",null,"Null")," must never be the value of a parameter or result with an explicit ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-3/AA-3.10#S0083"},"null_exclusion")),". The first bullet is an assume-the-worst rule which prevents trouble in generic bodies (including bodies of child generics) when the formal subtype excludes null implicitly. ",(0,n.kt)("br",null)),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI12-0204-1"),"}"," ",(0,n.kt)("br",null),"If the named default, if any, is a prefixed view, the prefix of that view shall denote an object for which renaming is allowed (see 8.5.1). Similarly, if the actual subprogram in an instantiation is a prefixed view, the prefix of that view shall denote an object for which renaming is allowed.",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"{",(0,n.kt)("em",null,"AI12-0204-1"),"}"," ",(0,n.kt)("br",null),"The prefix in such a case is essentially renamed at the point of the instantiation and passed to any calls of the formal subprogram in the generic. If the prefix isn't legal to rename, that doesn't make sense (and allowing it might end up passing a nonexistent object to some calls). ",(0,n.kt)("br",null)),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00260-02"),"}"," ","{",(0,n.kt)("em",null,"AI05-0296-1"),"}"," ",(0,n.kt)("br",null),"If a formal parameter of a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0337"},"formal_abstract_subprogram_declaration"))," is of a specific tagged type ",(0,n.kt)("em",null,"T")," or of an anonymous access type designating a specific tagged type ",(0,n.kt)("em",null,"T"),", ",(0,n.kt)("em",null,"T")," is called a ",(0,n.kt)("em",null,"controlling type")," of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0337"},"formal_abstract_subprogram_declaration")),". Similarly, if the result of a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0337"},"formal_abstract_subprogram_declaration"))," for a function is of a specific tagged type ",(0,n.kt)("em",null,"T")," or of an anonymous access type designating a specific tagged type ",(0,n.kt)("em",null,"T"),", ",(0,n.kt)("em",null,"T")," is called a controlling type of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0337"},"formal_abstract_subprogram_declaration")),". A ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0337"},"formal_abstract_subprogram_declaration"))," shall have exactly one controlling type, and that type shall not be incomplete. ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"The specific tagged type could be any of a formal tagged private type, a formal derived type, a formal interface type, or a normal tagged type. While the last case doesn't seem to be very useful, there isn't any good reason for disallowing it. This rule ensures that the operation is a dispatching operation of some type, and that we unambiguously know what that type is.",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"We informally call a subprogram declared by a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0337"},"formal_abstract_subprogram_declaration"))," an ",(0,n.kt)("em",null,"abstract formal subprogram"),", but we do not use this term in normative wording. (We do use it often in these notes.) ",(0,n.kt)("br",null)),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00260-02"),"}"," ","{",(0,n.kt)("em",null,"AI12-0165-1"),"}"," ",(0,n.kt)("br",null),"The actual subprogram for a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0337"},"formal_abstract_subprogram_declaration"))," shall be:",(0,n.kt)("br",null)),(0,n.kt)("ul",null,(0,n.kt)("li",null,"a dispatching operation of the controlling type; or",(0,n.kt)("br",null)),(0,n.kt)("li",null,"if the controlling type is a formal type, and the actual type corresponding to that formal type is a specific type ",(0,n.kt)("em",null,"T"),", a dispatching operation of type ",(0,n.kt)("em",null,"T"),"; or",(0,n.kt)("br",null)),(0,n.kt)("li",null,"if the controlling type is a formal type, and the actual type is a class-wide type ",(0,n.kt)("em",null,"T"),"'Class, an implicitly declared subprogram corresponding to a primitive operation of type ",(0,n.kt)("em",null,"T")," (see Static Semantics below). ",(0,n.kt)("br",null))),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,n.kt)("strong",null,"To be honest: "),"We mean the controlling type of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0337"},"formal_abstract_subprogram_declaration")),", of course. Saying that gets unwieldy and redundant (so says at least one reviewer, anyway). ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"{",(0,n.kt)("em",null,"AI12-0165-1"),"}"," ",(0,n.kt)("br",null),"This means that the actual is a primitive operation of the controlling type, an abstract formal subprogram, or the implicitly available primitive operation for a class-wide type.",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI12-0165-1"),"}"," ","{",(0,n.kt)("em",null,"AI12-0005-1"),"}"," ",(0,n.kt)("br",null),"An explicit class-wide operation cannot be used for the actual of a formal abstract subprogram. Such an operation is never primitive (only specific types have primitive subprograms).",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI12-0165-1"),"}"," ",(0,n.kt)("br",null),"This could happen in a case like: ",(0,n.kt)("br",null)),(0,n.kt)(l.Z,{mdxType:"CodeBlock"},"generic","\n","   type T(","<",">",") is tagged private;","\n","   with procedure Foo (Obj : in T) is abstract;","\n","package P ...","\n","package New_P is new P (Something'Class, Some_Proc);","\n"),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI12-0165-1"),"}"," ",(0,n.kt)("br",null),"If Some_Proc is an explicit class-wide operation, the instantiation here is illegal, because Some_Proc is not a primitive operation of Something'Class (there are no such operations).",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI12-0165-1"),"}"," ",(0,n.kt)("br",null),"However, if Some_Proc is a primitive operation of type Something, then the instantiation is legal; the actual is the implicitly generated subprogram described in Static Semantics below. This is not a problem, since the rules given in 12.5.1 explain how this routine dispatches even though its parameter is class-wide.",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI12-0165-1"),"}"," ",(0,n.kt)("br",null),"We allow this special case because it is possible for a class-wide operation to be primitive inside of an instance, and the contract model does not allow us to make such cases illegal. As such, it seems inconsistent to not allow the same in explicit instantiations.",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI12-0005-1"),"}"," ","{",(0,n.kt)("em",null,"AI12-0165-1"),"}"," ",(0,n.kt)("br",null),"Specifically, since it is possible for a formal tagged type to be instantiated with a class-wide type, it is possible for the (real) controlling type to be class-wide as in the following unusual case:",(0,n.kt)("br",null)),(0,n.kt)(l.Z,{mdxType:"CodeBlock"},"--  ","{","AI12-0005-1","}","\n"," generic","\n","   type NT(","<",">",") is new T with private;","\n","   -- Presume that T has the following primitive operation:","\n","   -- procedure Bar (Obj : in T);","\n","package Gr ...","\n","package body Gr is","\n","   package New_P2 is new P (NT, Foo =",">"," Bar);","\n","end Gr;","\n","package New_Gr is new Gr (Something'Class);","\n"),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI12-0165-1"),"}"," ",(0,n.kt)("br",null),"The instantiation of New_P2 is legal, since Bar is a dispatching operation of the actual type of the controlling type of the abstract formal subprogram Foo. Again, the rules given in 12.5.1 explain how this routine dispatches.",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"Note that this legality rule never needs to be rechecked in an instance (that contains a nested instantiation). The rule only talks about the actual type of the instantiation; it does not require looking further; if the actual type is in fact a formal type, we do not intend looking at the actual for that formal. ",(0,n.kt)("br",null)),(0,n.kt)("h4",p({},{id:"static-semantics"}),"Static Semantics"),(0,n.kt)("p",null,"A ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0335"},"formal_subprogram_declaration"))," declares a generic formal subprogram. The types of the formal parameters and result, if any, of the formal subprogram are those determined by the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark")),"s given in the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0335"},"formal_subprogram_declaration")),"; however, independent of the particular subtypes that are denoted by the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark")),"s, the nominal subtypes of the formal parameters and result, if any, are defined to be nonstatic, and unconstrained if of an array type [(no applicable index constraint is provided in a call on a formal subprogram)]. In an instance, a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0335"},"formal_subprogram_declaration"))," declares a view of the actual. The profile of this view takes its subtypes and calling convention from the original profile of the actual entity, while taking the formal parameter ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name")),"s and ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-3/AA-3.7#S0063"},"default_expression")),"s from the profile given in the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0335"},"formal_subprogram_declaration")),". The view is a function or procedure, never an entry. ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"This rule is intended to be the same as the one for renamings-as-declarations, where the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0335"},"formal_subprogram_declaration"))," is analogous to a renaming-as-declaration, and the actual is analogous to the renamed view. ",(0,n.kt)("br",null)),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0071-1"),"}"," ","{",(0,n.kt)("em",null,"AI05-0131-1"),"}"," ",(0,n.kt)("br",null),"If a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark"))," in the profile of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0335"},"formal_subprogram_declaration"))," denotes a formal private or formal derived type and the actual type for this formal type is a class-wide type ",(0,n.kt)("em",null,"T"),"'Class, then for the purposes of resolving the corresponding actual subprogram at the point of the instantiation, certain implicit declarations may be available as possible resolutions as follows:",(0,n.kt)("br",null)),(0,n.kt)("p",null,"For each primitive subprogram of ",(0,n.kt)("em",null,"T")," that is directly visible at the point of the instantiation, and that has at least one controlling formal parameter, a corresponding implicitly declared subprogram with the same defining name, and having the same profile as the primitive subprogram except that ",(0,n.kt)("em",null,"T")," is systematically replaced by ",(0,n.kt)("em",null,"T"),"'Class in the types of its profile, is potentially use-visible. The body of such a subprogram is as defined in 12.5.1 for primitive subprograms of a formal type when the actual type is class-wide. ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"{",(0,n.kt)("em",null,"AI05-0071-1"),"}"," ","{",(0,n.kt)("em",null,"AI05-0131-1"),"}"," ",(0,n.kt)("br",null),"This gives the same capabilities to formal subprograms as those that primitive operations of the formal type have when the actual type is class-wide. We do not want to discourage the use of explicit declarations for (formal) subprograms! ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"implementation-note",title:"Implementation Note: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"{",(0,n.kt)("em",null,"AI05-0071-1"),"}"," ","{",(0,n.kt)("em",null,"AI05-0131-1"),"}"," ",(0,n.kt)("br",null),"Although the above wording seems to require constructing implicit versions of all of the primitive subprograms of type ",(0,n.kt)("em",null,"T"),", it should be clear that a compiler only needs to consider those that could possibly resolve to the corresponding actual subprogram. For instance, if the formal subprogram is a procedure with two parameters, and the actual subprogram name is Bar (either given explicitly or by default), the compiler need not consider primitives that are functions, that have the wrong number of parameters, that have defining names other than Bar, and so on; thus it does not need to construct implicit declarations for those primitives. ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"{",(0,n.kt)("em",null,"AI05-0071-1"),"}"," ","{",(0,n.kt)("em",null,"AI05-0131-1"),"}"," ",(0,n.kt)("br",null),"Functions that only have a controlling result and do not have a controlling parameter of ",(0,n.kt)("em",null,"T")," are not covered by this rule, as any call would be required to raise Program_Error by 12.5.1. It is better to detect the error earlier than at run time. ",(0,n.kt)("br",null)),(0,n.kt)("p",null,"If a generic unit has a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0338"},"subprogram_default"))," specified by a box, and the corresponding actual parameter is omitted, then it is equivalent to an explicit actual parameter that is a usage name identical to the defining name of the formal.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00348-01"),"}"," ",(0,n.kt)("br",null),"If a generic unit has a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0338"},"subprogram_default"))," specified by the reserved word ",(0,n.kt)("strong",null,"null"),", and the corresponding actual parameter is omitted, then it is equivalent to an explicit actual parameter that is a null procedure having the profile given in the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0335"},"formal_subprogram_declaration")),".",(0,n.kt)("br",null)),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00260-02"),"}"," ",(0,n.kt)("br",null),"The subprogram declared by a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0337"},"formal_abstract_subprogram_declaration"))," with a controlling type ",(0,n.kt)("em",null,"T")," is a dispatching operation of type ",(0,n.kt)("em",null,"T"),". ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"This is necessary to trigger all of the dispatching operation rules. It otherwise would not be considered a dispatching operation, as formal subprograms are never primitive operations. ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 1   ","{",(0,n.kt)("em",null,"AI12-0442-1"),"}"," ",(0,n.kt)("br",null),"The matching rules for formal subprograms state requirements that are similar to those applying to ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-8/AA-8.5#S0242"},"subprogram_renaming_declaration")),"s (see 8.5.4). In particular, the name of a parameter of the formal subprogram can be different from that of the corresponding parameter of the actual subprogram; similarly, for these parameters, ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-3/AA-3.7#S0063"},"default_expression")),"s can be different.",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 2   The constraints that apply to a parameter of a formal subprogram are those of the corresponding formal parameter of the matching actual subprogram (not those implied by the corresponding ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark"))," in the ",(0,n.kt)("code",null,"_specification")," of the formal subprogram). A similar remark applies to the result of a function. Therefore, to avoid confusion, it is recommended that the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," of a first subtype be used in any declaration of a formal subprogram.",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 3   The subtype specified for a formal parameter of a generic formal subprogram can be any visible subtype, including a generic formal subtype of the same ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.1#S0313"},"generic_formal_part")),".",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 4   A formal subprogram is matched by an attribute of a type if the attribute is a function with a matching specification. An enumeration literal of a given type matches a parameterless formal function whose result type is the given type.",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 5   ","{",(0,n.kt)("em",null,"AI12-0347-1"),"}"," ",(0,n.kt)("br",null),"A ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0339"},"default_name"))," denotes an entity that is visible or directly visible at the place of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.1#S0310"},"generic_declaration")),"; a box used as a default is equivalent to a name that denotes an entity that is directly visible at the place of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.3#S0315"},"generic_instantiation")),". ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"proof",title:"Proof: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"Visibility and name resolution are applied to the equivalent explicit actual parameter. ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 6   ","{",(0,n.kt)("em",null,"AI95-00260-02"),"}"," ",(0,n.kt)("br",null),"The actual subprogram cannot be abstract unless the formal subprogram is a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0337"},"formal_abstract_subprogram_declaration"))," (see 3.9.3).",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 7   ","{",(0,n.kt)("em",null,"AI95-00260-02"),"}"," ","{",(0,n.kt)("em",null,"AI12-0442-1"),"}"," ",(0,n.kt)("br",null),"The subprogram declared by a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0337"},"formal_abstract_subprogram_declaration"))," is an abstract subprogram. All calls on a subprogram declared by a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0337"},"formal_abstract_subprogram_declaration"))," are limited to dispatching calls. See 3.9.3.",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 8   ","{",(0,n.kt)("em",null,"AI95-00348-01"),"}"," ",(0,n.kt)("br",null),"A null procedure as a subprogram default has convention Intrinsic (see 6.3.1). ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"proof",title:"Proof: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"This is an implicitly declared subprogram, so it has convention Intrinsic as defined in 6.3.1. ",(0,n.kt)("br",null)),(0,n.kt)("h4",p({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,(0,n.kt)("em",null,"Examples of generic formal subprograms:")," ",(0,n.kt)("br",null)),(0,n.kt)(l.Z,{mdxType:"CodeBlock"},"--  ","{","AI95-00433-01","}","\n",' with function "+"(X, Y : Item) return Item is ',"<",">",";","\n","with function Image(X : Enum) return String is Enum'Image;","\n","with procedure Update is Default_Update;","\n","with procedure Pre_Action(X : in Item) is null;  -- defaults to no action","\n","with procedure Write(S    : not null access Root_Stream_Type'Class;","\n","                     Desc : Descriptor)","\n","                     is abstract Descriptor'Write;  -- see 13.13.2","\n","-- Dispatching operation on Descriptor with default","\n","--  given the generic procedure declaration ","\n","generic","\n","   with procedure Action (X : in Item);","\n","procedure Iterate(Seq : in Item_Sequence);","\n","--  and the procedure ","\n","procedure Put_Item(X : in Item);","\n","--  the following instantiation is possible ","\n","procedure Put_List is new Iterate(Action =",">"," Put_Item);","\n"),(0,n.kt)("h4",p({},{id:"extensions-to-ada-95"}),"Extensions to Ada 95"),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI95-00260-02"),"}"," ",(0,n.kt)("br",null),"The ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0337"},"formal_abstract_subprogram_declaration"))," is new. It allows the passing of dispatching operations to generic units.",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI95-00348-01"),"}"," ",(0,n.kt)("br",null),"The formal subprogram default of ",(0,n.kt)("strong",null,"null")," is new. It allows the default of a generic procedure to do nothing, such as for passing a debugging routine. ",(0,n.kt)("br",null)),(0,n.kt)("h4",p({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95"),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI95-00423-01"),"}"," ",(0,n.kt)("br",null),"Added matching rules for ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-3/AA-3.10#S0083"},"null_exclusion")),"s. ",(0,n.kt)("br",null)),(0,n.kt)("h4",p({},{id:"incompatibilities-with-ada-2005"}),"Incompatibilities With Ada 2005"),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI05-0296-1"),"}"," ",(0,n.kt)("br",null),"It is now illegal to declare a formal abstract subprogram whose controlling type is incomplete. It was never intended to allow that, and such a type would have to come from outside of the generic unit in Ada 2005, so it is unlikely to be useful. Moreover, a dispatching call on the subprogram is likely to fail in many implementations. So it is very unlikely that any code will need to be changed because of this new rule. ",(0,n.kt)("br",null)),(0,n.kt)("h4",p({},{id:"extensions-to-ada-2005"}),"Extensions to Ada 2005"),(0,n.kt)(o.Z,{type:"aarm",aarm:"correction",title:"Correction:",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI05-0071-1"),"}"," ","{",(0,n.kt)("em",null,"AI05-0131-1"),"}"," ",(0,n.kt)("strong",null,(0,n.kt)("br",null))," Added construction of implicit subprograms for primitives of class-wide actual types, to make it possible to import subprograms via formal subprograms as well as by implicit primitive operations of a formal type. (This is a ",(0,n.kt)("strong",null,"Correction")," as it is very important for the usability of indefinite containers when instantiated with class-wide types; thus we want Ada 2005 implementations to support it.)",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI05-0183-1"),"}"," ",(0,n.kt)("br",null),"An optional ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification"))," can be used in a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0336"},"formal_concrete_subprogram_declaration"))," and a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0337"},"formal_abstract_subprogram_declaration")),". This is described in 13.1.1. ",(0,n.kt)("br",null)),(0,n.kt)("h4",p({},{id:"incompatibilities-with-ada-2012"}),"Incompatibilities With Ada 2012"),(0,n.kt)(o.Z,{type:"aarm",aarm:"correction",title:"Correction:",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI12-0204-1"),"}"," ",(0,n.kt)("strong",null,(0,n.kt)("br",null))," Added a rule to ensure that for an actual subprogram that is a prefixed view, the prefix continues to exist during the life of the instantiation. If the prefix is a subcomponent that depends on discriminants, Ada 2005 and 2012 would have allowed the prefix while Ada 2022 would not. Without this change, explicit forms (renaming the object and then using that in instantiations) would be safer than directly using the prefixed view; that's inconsistent with other kinds of actual subprograms. ",(0,n.kt)("br",null)),(0,n.kt)("h4",p({},{id:"extensions-to-ada-2012"}),"Extensions to Ada 2012"),(0,n.kt)(o.Z,{type:"aarm",aarm:"correction",title:"Correction:",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI12-0165-1"),"}"," ",(0,n.kt)("strong",null,(0,n.kt)("br",null))," We now allow the actual for a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-12/AA-12.6#S0337"},"formal_abstract_subprogram_declaration"))," to be an implicitly declared subprogram for a class-wide type. The rules already required a compiler to be able to construct this subprogram for use in an instantiation that occurs inside of a generic unit, so it made no sense to prevent it from being used explicitly as well (in the same way that the previous extension allows them to be used for other kinds of formal subprograms). ",(0,n.kt)("br",null)),(0,n.kt)("h4",p({},{id:"wording-changes-from-ada-2012"}),"Wording Changes from Ada 2012"),(0,n.kt)(o.Z,{type:"aarm",aarm:"correction",title:"Correction:",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI12-0287-1"),"}"," ",(0,n.kt)("strong",null,(0,n.kt)("br",null))," Added wording to ensure that the object subject to a Legality Rule can be determined at compile-time. The alternative being nonsense, we treat this as a wording change. ",(0,n.kt)("br",null)))}y.isMDXComponent=!0}}]);