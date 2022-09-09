"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8264],{531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>f,default:()=>y,frontMatter:()=>h,metadata:()=>A,toc:()=>b});var o=n(1716),a=n(7556),l=n(9464),i=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&m(e,n,t[n]);return e};const h={sidebar_position:97},f="12.4 Formal Objects",A={unversionedId:"arm/AA-12/AA-12.4",id:"arm/AA-12/AA-12.4",title:"12.4 Formal Objects",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-12/AA-12.4.mdx",sourceDirName:"arm/AA-12",slug:"/arm/AA-12/AA-12.4",permalink:"/docs/arm/AA-12/AA-12.4",draft:!1,tags:[],version:"current",sidebarPosition:97,frontMatter:{sidebar_position:97},sidebar:"referenceManualSidebar",previous:{title:"12.3 Generic Instantiation",permalink:"/docs/arm/AA-12/AA-12.3"},next:{title:"12.5 Formal Types",permalink:"/docs/arm/AA-12/AA-12.5"}},p={},b=[{value:"Language Design Principles",id:"language-design-principles",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}],g={toc:b};function y(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&u)for(var o of u(e))t.indexOf(o)<0&&d.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=k(k({},g),m),r(t,s({components:i,mdxType:"MDXLayout"}))),(0,o.kt)("h1",k({},{id:"124-formal-objects"}),"12.4 Formal Objects"),(0,o.kt)("admonition",k({},{type:"warning"}),(0,o.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,o.kt)("a",k({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,o.kt)("p",null,"[ A generic formal object can be used to pass a value or variable to a generic unit.] ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"language-design-principles"}),"Language Design Principles"),(0,o.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"A generic formal object of mode ",(0,o.kt)("strong",null,"in")," is like a constant initialized to the value of the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-12/AA-12.3#S0318"},"explicit_generic_actual_parameter")),".",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"A generic formal object of mode ",(0,o.kt)("strong",null,"in out")," is like a renaming of the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-12/AA-12.3#S0318"},"explicit_generic_actual_parameter")),". ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"syntax"}),"Syntax"),(0,o.kt)(a.Z,{mdxType:"CodeBlock"},"{",(0,o.kt)("em",null,"AI95-00423-01"),"}"," ","{",(0,o.kt)("em",null,"AI05-0005-1"),"}"," ","{",(0,o.kt)("em",null,"AI05-0183-1"),"}"," ",(0,o.kt)("br",null),(0,o.kt)("code",null,"formal_object_declaration"),(0,o.kt)("a",{id:"S0319"}),(0,o.kt)("code",null," ::= "),(0,o.kt)("br",null),"    ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.3#S0033"},"defining_identifier_list"))," : ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-6/AA-6.1#S0208"},"mode"))," [",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.10#S0083"},"null_exclusion")),"] ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark"))," [:= ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.7#S0063"},"default_expression")),"]",(0,o.kt)("br",null),"        [",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification")),"];",(0,o.kt)("br",null),"  |  ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.3#S0033"},"defining_identifier_list"))," : ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-6/AA-6.1#S0208"},"mode"))," ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.10#S0084"},"access_definition"))," [:= ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.7#S0063"},"default_expression")),"]",(0,o.kt)("br",null),"        [",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification")),"];",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"name-resolution-rules"}),"Name Resolution Rules"),(0,o.kt)("p",null,"The expected type for the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.7#S0063"},"default_expression")),", if any, of a formal object is the type of the formal object.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"For a generic formal object of mode ",(0,o.kt)("strong",null,"in"),", the expected type for the actual is the type of the formal.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00423-01"),"}"," ",(0,o.kt)("br",null),"For a generic formal object of mode ",(0,o.kt)("strong",null,"in out"),", the type of the actual shall resolve to the type determined by the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark")),", or for a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-12/AA-12.4#S0319"},"formal_object_declaration"))," with an ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.10#S0084"},"access_definition")),", to a specific anonymous access type. If the anonymous access type is an access-to-object type, the type of the actual shall have the same designated type as that of the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.10#S0084"},"access_definition")),". If the anonymous access type is an access-to-subprogram type, the type of the actual shall have a designated profile which is type conformant with that of the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.10#S0084"},"access_definition")),". ",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"See the corresponding rule for ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-8/AA-8.5#S0239"},"object_renaming_declaration")),"s for a discussion of the reason for this rule. ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"legality-rules"}),"Legality Rules"),(0,o.kt)("p",null,"If a generic formal object has a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.7#S0063"},"default_expression")),", then the mode shall be ",(0,o.kt)("strong",null,"in")," [(either explicitly or by default)]; otherwise, its mode shall be either ",(0,o.kt)("strong",null,"in")," or ",(0,o.kt)("strong",null,"in out"),". ",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"Mode ",(0,o.kt)("strong",null,"out")," is not allowed for generic formal objects. ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"For a generic formal object of mode ",(0,o.kt)("strong",null,"in"),", the actual shall be an ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression")),". For a generic formal object of mode ",(0,o.kt)("strong",null,"in out"),", the actual shall be a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," that denotes a variable for which renaming is allowed (see 8.5.1). ",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,o.kt)("strong",null,"To be honest: "),"The part of this that requires an ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," or ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," is a Name Resolution Rule, but that's too pedantic to worry about. (The part about denoting a variable, and renaming being allowed, is most certainly ",(0,o.kt)("em",null,"not")," a Name Resolution Rule.) ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00287-01"),"}"," ","{",(0,o.kt)("em",null,"AI95-00423-01"),"}"," ",(0,o.kt)("br",null),"In the case where the type of the formal is defined by an ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.10#S0084"},"access_definition")),", the type of the actual and the type of the formal:",(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",null,"{",(0,o.kt)("em",null,"AI95-00423-01"),"}"," ",(0,o.kt)("br",null),"shall both be access-to-object types with statically matching designated subtypes and with both or neither being access-to-constant types; or ",(0,o.kt)("br",null)),(0,o.kt)("li",null,"{",(0,o.kt)("em",null,"AI95-00423-01"),"}"," ",(0,o.kt)("br",null),"shall both be access-to-subprogram types with subtype conformant designated profiles. ",(0,o.kt)("br",null))),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00423-01"),"}"," ","{",(0,o.kt)("em",null,"AI12-0287-1"),"}"," ",(0,o.kt)("br",null),"For a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-12/AA-12.4#S0319"},"formal_object_declaration"))," of mode ",(0,o.kt)("strong",null,"in out")," with a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.10#S0083"},"null_exclusion"))," or an ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.10#S0084"},"access_definition"))," that has a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.10#S0083"},"null_exclusion")),", the subtype of the actual matching the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-12/AA-12.4#S0319"},"formal_object_declaration"))," shall exclude null. In addition, if the actual matching the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-12/AA-12.4#S0319"},"formal_object_declaration"))," statically denotes the generic formal object of mode ",(0,o.kt)("strong",null,"in out")," of another generic unit ",(0,o.kt)("em",null,"G"),", and the instantiation containing the actual occurs within the body of ",(0,o.kt)("em",null,"G")," or within the body of a generic unit declared within the declarative region of ",(0,o.kt)("em",null,"G"),", then the declaration of the formal object of ",(0,o.kt)("em",null,"G")," shall have a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.10#S0083"},"null_exclusion")),". In addition to the places where Legality Rules normally apply (see 12.3), this rule applies also in the private part of an instance of a generic unit.",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"{",(0,o.kt)("em",null,"AI95-00287-01"),"}"," ","{",(0,o.kt)("em",null,"AI95-00423-01"),"}"," ","{",(0,o.kt)("em",null,"AI12-0287-1"),"}"," ",(0,o.kt)("br",null),'This rule prevents "lying". ',(0,o.kt)("strong",null,"Null")," must never be the value of an object with an explicit ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.10#S0083"},"null_exclusion")),'. The "in addition" part is an assume-the-worst rule which prevents trouble in generic bodies (including bodies of child units) when the subtype of the formal object of mode ',(0,o.kt)("strong",null,"in out")," excludes null implicitly. Since a generic formal object of mode ",(0,o.kt)("strong",null,"in")," is like a constant initialized to the value of the actual, the runtime check performed by the initialization is enough to prevent lying; thus we don't need a Legality Rule for such objects. ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"static-semantics"}),"Static Semantics"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00255-01"),"}"," ","{",(0,o.kt)("em",null,"AI95-00423-01"),"}"," ",(0,o.kt)("br",null),"A ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-12/AA-12.4#S0319"},"formal_object_declaration"))," declares a generic formal object. The default mode is ",(0,o.kt)("strong",null,"in"),". For a formal object of mode ",(0,o.kt)("strong",null,"in"),", the nominal subtype is the one denoted by the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark"))," or ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.10#S0084"},"access_definition"))," in the declaration of the formal. For a formal object of mode ",(0,o.kt)("strong",null,"in out"),", its type is determined by the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark"))," or ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.10#S0084"},"access_definition"))," in the declaration; its nominal subtype is nonstatic, even if the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark"))," denotes a static subtype; for a composite type, its nominal subtype is unconstrained if the first subtype of the type is unconstrained[, even if the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark"))," denotes a constrained subtype]. ",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"{",(0,o.kt)("em",null,"AI95-00255-01"),"}"," ",(0,o.kt)("br",null),"We require that the subtype is unconstrained because a formal ",(0,o.kt)("strong",null,"in out")," acts like a renaming, and thus the given subtype is ignored for purposes of matching; any value of the type can be passed. Thus we can assume only that the object is constrained if the first subtype is constrained (and thus there can be no unconstrained subtypes for the type). If we didn't do this, it would be possible to rename or take 'Access of components that could disappear due to an assignment to the whole object. ",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"{",(0,o.kt)("em",null,"AI95-00423-01"),"}"," ",(0,o.kt)("br",null),'The two "even if" clauses are OK even though they don\'t mention ',(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.10#S0084"},"access_definition")),"s; an access subtype can neither be a static subtype nor be a composite type. ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00269-01"),"}"," ",(0,o.kt)("br",null),"In an instance, a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-12/AA-12.4#S0319"},"formal_object_declaration"))," of mode ",(0,o.kt)("strong",null,"in")," is a ",(0,o.kt)("em",null,"full constant declaration")," and declares a new stand-alone constant object whose initialization expression is the actual, whereas a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-12/AA-12.4#S0319"},"formal_object_declaration"))," of mode ",(0,o.kt)("strong",null,"in out")," declares a view whose properties are identical to those of the actual. ",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"{",(0,o.kt)("em",null,"AI95-00287-01"),"}"," ",(0,o.kt)("br",null),"These rules imply that generic formal objects of mode ",(0,o.kt)("strong",null,"in")," are passed by copy (or are built-in-place for a limited type), whereas generic formal objects of mode ",(0,o.kt)("strong",null,"in out")," are passed by reference.",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"Initialization and finalization happen for the constant declared by a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-12/AA-12.4#S0319"},"formal_object_declaration"))," of mode ",(0,o.kt)("strong",null,"in"),' as for any constant; see 3.3.1, "Object Declarations" and 7.6, "Assignment and Finalization".',(0,o.kt)("br",null)),(0,o.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"In an instance, the subtype of a generic formal object of mode ",(0,o.kt)("strong",null,"in")," is as for the equivalent constant. In an instance, the subtype of a generic formal object of mode ",(0,o.kt)("strong",null,"in out")," is the subtype of the corresponding generic actual. ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,o.kt)("p",null,"For the evaluation of a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-12/AA-12.3#S0317"},"generic_association"))," for a formal object of mode ",(0,o.kt)("strong",null,"in"),", a constant object is created, the value of the actual parameter is converted to the nominal subtype of the formal object, and assigned to the object[, including any value adjustment - see 7.6]. ",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"This includes evaluating the actual and doing a subtype conversion, which might raise an exception. ",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"The rule for evaluating a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-12/AA-12.3#S0317"},"generic_association"))," for a formal object of mode ",(0,o.kt)("strong",null,"in out")," is covered by the general Dynamic Semantics rule in 12.3. ",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE   The constraints that apply to a generic formal object of mode ",(0,o.kt)("strong",null,"in out")," are those of the corresponding generic actual parameter (not those implied by the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark"))," that appears in the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-12/AA-12.4#S0319"},"formal_object_declaration")),"). Therefore, to avoid confusion, it is recommended that the name of a first subtype be used for the declaration of such a formal object. ",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"Constraint checks are done at instantiation time for formal objects of mode ",(0,o.kt)("strong",null,"in"),", but not for formal objects of mode ",(0,o.kt)("strong",null,"in out"),". ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"extensions-to-ada-83"}),"Extensions to Ada 83"),(0,o.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"In Ada 83, it is forbidden to pass a (nongeneric) formal parameter of mode ",(0,o.kt)("strong",null,"out"),", or a subcomponent thereof, to a generic formal object of mode ",(0,o.kt)("strong",null,"in out"),". This restriction is removed in Ada 95. ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83"),(0,o.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},'We make "',(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-6/AA-6.1#S0208"},"mode")),'" explicit in the syntax. RM83 refers to the mode without saying what it is. This is also more uniform with the way (nongeneric) formal parameters are defined.',(0,o.kt)("br",null)),(0,o.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"We considered allowing mode ",(0,o.kt)("strong",null,"out")," in Ada 95, for uniformity with (nongeneric) formal parameters. The semantics would be identical for modes ",(0,o.kt)("strong",null,"in out")," and ",(0,o.kt)("strong",null,"out"),". (Note that generic formal objects of mode ",(0,o.kt)("strong",null,"in out")," are passed by reference. Note that for (nongeneric) formal parameters that are allowed to be passed by reference, the semantics of ",(0,o.kt)("strong",null,"in out")," and ",(0,o.kt)("strong",null,"out")," is the same. The difference might serve as documentation. The same would be true for generic formal objects, if ",(0,o.kt)("strong",null,"out")," were allowed, so it would be consistent.) We decided not to make this change, because it does not produce any important benefit, and any change has some cost. ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"extensions-to-ada-95"}),"Extensions to Ada 95"),(0,o.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI95-00287-01"),"}"," ",(0,o.kt)("br",null),"A generic formal ",(0,o.kt)("strong",null,"in")," object can have a limited type. The actual for such an object must be built-in-place via a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-6/AA-6.4#S0218"},"function_call"))," or ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-4/AA-4.3#S0106"},"aggregate")),", see 7.5.",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI95-00423-01"),"}"," ",(0,o.kt)("br",null),"A generic formal object can have a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.10#S0083"},"null_exclusion"))," or an anonymous access type. ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95"),(0,o.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI95-00255-01"),"}"," ",(0,o.kt)("br",null),"Clarified that the nominal subtype of a composite formal ",(0,o.kt)("strong",null,"in out")," object is unconstrained if the first subtype of the type is unconstrained.",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI95-00269-01"),"}"," ",(0,o.kt)("br",null),"Clarified that a formal ",(0,o.kt)("strong",null,"in")," object can be static when referenced from outside of the instance (by declaring such an object to be a full constant declaration). ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"extensions-to-ada-2005"}),"Extensions to Ada 2005"),(0,o.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI05-0183-1"),"}"," ",(0,o.kt)("br",null),"An optional ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification"))," can be used in a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-12/AA-12.4#S0319"},"formal_object_declaration")),". This is described in 13.1.1. ",(0,o.kt)("br",null)),(0,o.kt)("h4",k({},{id:"extensions-to-ada-2012"}),"Extensions to Ada 2012"),(0,o.kt)(l.Z,{type:"aarm",aarm:"correction",title:"Correction:",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI12-0287-1"),"}"," ",(0,o.kt)("strong",null,(0,o.kt)("br",null))," The Legality Rule for matching null exclusions only applies to formal objects with mode ",(0,o.kt)("strong",null,"in out"),". (",(0,o.kt)("strong",null,"In")," mode formal objects have a run-time check to avoid problems.) This is an extension as some instantiations that were illegal in original Ada 2012 are now legal. ",(0,o.kt)("br",null)))}y.isMDXComponent=!0}}]);