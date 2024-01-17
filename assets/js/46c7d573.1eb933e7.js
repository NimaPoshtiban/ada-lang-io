"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[5830],{32217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>v,frontMatter:()=>f,metadata:()=>x,toc:()=>T});var a=n(91716),i=n(21256),o=n(24895),r=n(28090),s=n(48424),d=n(82262),l=Object.defineProperty,p=Object.defineProperties,A=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))k.call(t,n)&&m(e,n,t[n]);return e};const f={sidebar_position:37},y="4.7 Qualified Expressions",x={unversionedId:"arm/AA-4/AA-4.7",id:"arm/AA-4/AA-4.7",title:"4.7 Qualified Expressions",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-4/AA-4.7.mdx",sourceDirName:"arm/AA-4",slug:"/arm/AA-4/AA-4.7",permalink:"/docs/arm/AA-4/AA-4.7",draft:!1,tags:[],version:"current",sidebarPosition:37,frontMatter:{sidebar_position:37},sidebar:"referenceManualSidebar",previous:{title:"4.6 Type Conversions",permalink:"/docs/arm/AA-4/AA-4.6"},next:{title:"4.8 Allocators",permalink:"/docs/arm/AA-4/AA-4.8"}},g={},T=[{value:"Syntax",id:"syntax",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4},{value:"Inconsistencies With Ada 2012",id:"inconsistencies-with-ada-2012",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}],b={toc:T};function v(e){var t,n=e,{components:l}=n,m=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&k.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},b),m),p(t,A({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("h1",h({},{id:"47-qualified-expressions"}),"4.7 Qualified Expressions"),(0,a.kt)("admonition",h({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",h({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(s.Z,{mdxType:"MarginText"},"1"),(0,a.kt)("p",null,"[A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.7#S0163"},"qualified_expression"))," is used to state explicitly the type, and to verify the subtype, of an operand that is either an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," or an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0106"},"aggregate")),". ]",(0,a.kt)("br",null)),(0,a.kt)("h4",h({},{id:"syntax"}),"Syntax"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"2"),(0,a.kt)(r.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"qualified_expression"),(0,a.kt)("a",{id:"S0163"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("br",null),"   ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark")),"'(",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression")),") | ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark")),"'",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0106"},"aggregate")),(0,a.kt)("br",null)),(0,a.kt)("h4",h({},{id:"name-resolution-rules"}),"Name Resolution Rules"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"3/5"),(0,a.kt)(d.Z,{items:["AI12-0325-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The expected type for the ",(0,a.kt)("em",null,"operand")," (the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," or ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0106"},"aggregate")),") is determined by the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark")),". Furthermore, the operand shall resolve to be either the specified expected type or a universal type that covers it. ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"3.a/5"),(0,a.kt)(d.Z,{items:["AI12-0325-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,a.kt)("strong",null),"The first sentence defines the expected type for rules that assume one is defined. The second sentence prevents the use of the various implicit conversions that are usually allowed for expected types (except the one for numeric literals). The intent is that a qualified expression is similar to an assertion about the subtype of the operand, and thus implicit conversions would interfere with that intent. ",(0,a.kt)("br",null))),(0,a.kt)("h4",h({},{id:"static-semantics"}),"Static Semantics"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"3.1/3"),(0,a.kt)(d.Z,{items:["AI05-0003-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"[If the operand of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.7#S0163"},"qualified_expression"))," denotes an object, the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.7#S0163"},"qualified_expression"))," denotes a constant view of that object.] The nominal subtype of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.7#S0163"},"qualified_expression"))," is the subtype denoted by the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark")),". ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"3.b/3"),(0,a.kt)(d.Z,{items:["AI05-0003-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"proof",mdxType:"Admonition"},(0,a.kt)("strong",null),"This is stated in ",(0,a.kt)("a",{href:"../AA-3/AA-3.3"},"3.3"),". ",(0,a.kt)("br",null))),(0,a.kt)("h4",h({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"4/5"),(0,a.kt)(d.Z,{items:["AI12-0100-1","AI12-0449-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The evaluation of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.7#S0163"},"qualified_expression"))," evaluates the operand (and if of a universal type, converts it to the type determined by the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark")),") and checks that its value belongs to the subtype denoted by the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark")),". The exception Constraint_Error is raised if this check fails. Furthermore, if predicate checks are enabled for the subtype denoted by the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark")),", a check is performed as defined in ",(0,a.kt)("a",{href:"../AA-3/AA-3.2#Subclause_3.2.4"},"3.2.4")," that the value satifies the predicates of the subtype. ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"4.a"),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"This is one of the few contexts in Ada 95 where implicit subtype conversion is not performed prior to a constraint check, and hence no \u201csliding\u201d of array bounds is provided.",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"4.a.1/4"),(0,a.kt)(d.Z,{items:["AI12-0100-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The effect of a failed predicate check is as defined in ",(0,a.kt)("a",{href:"../AA-3/AA-3.2#Subclause_3.2.4"},"3.2.4"),"; such a check could raise any exception, not just Constraint_Error or Assertion_Error. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"4.b"),(0,a.kt)(i.Z,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,a.kt)("strong",null),"Implicit subtype conversion is not provided because a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.7#S0163"},"qualified_expression"))," with a constrained target subtype is essentially an assertion about the subtype of the operand, rather than a request for conversion. An explicit ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.6#S0162"},"type_conversion"))," can be used rather than a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.7#S0163"},"qualified_expression"))," if subtype conversion is desired.",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"4.c/4"),(0,a.kt)(d.Z,{items:["AI12-0100-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"We do a predicate check here so that a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.7#S0163"},"qualified_expression"))," never allows something that the equivalent ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.6#S0162"},"type_conversion"))," would not allow. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"5/5"),(0,a.kt)(d.Z,{items:["AI12-0440-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE   When a given context does not uniquely identify an expected type, a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.7#S0163"},"qualified_expression"))," can be used to do so. In particular, if an overloaded ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," or ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0106"},"aggregate"))," is passed to an overloaded subprogram, it can be necessary to qualify the operand to resolve its type. ",(0,a.kt)("br",null))),(0,a.kt)("h4",h({},{id:"examples"}),"Examples"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"6"),(0,a.kt)("p",null,(0,a.kt)("em",null,"Examples of disambiguating expressions using qualification:")," ",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"7"),(0,a.kt)(r.Z,{language:"ada",mdxType:"CodeBlock"},"type Mask is (Fix, Dec, Exp, Signif);","\n","type Code is (Fix, Cla, Dec, Tnz, Sub);","\n",(0,a.kt)(s.Z,{mdxType:"MarginText"},"8"),"Print (Mask'(Dec));  --  Dec is of type Mask","\n","Print (Code'(Dec));  --  Dec is of type Code ","\n",(0,a.kt)(s.Z,{mdxType:"MarginText"},"9/5"),(0,a.kt)(d.Z,{items:["AI12-0442-1"],mdxType:"MarginInfo"}),"for J in Code'(Fix) .. Code'(Dec) loop ... -- qualification is necessary for either Fix or Dec","\n","for J in Code range Fix .. Dec loop ...    -- qualification unnecessary","\n","for J in Code'(Fix) .. Dec loop ...        -- qualification unnecessary for Dec","\n",(0,a.kt)(s.Z,{mdxType:"MarginText"},"10"),"Dozen'(1 | 3 | 5 | 7 =",">"," 2, others =",">"," 0) -- see ",(0,a.kt)("a",{href:"../AA-4/AA-4.6"},"4.6")," ","\n"),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",h({},{id:"wording-changes-from-ada-2005"}),"Wording Changes from Ada 2005")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"10.a/3"),(0,a.kt)(d.Z,{items:["AI05-0003-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Added a definition of the nominal subtype of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.7#S0163"},"qualified_expression")),". ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",h({},{id:"inconsistencies-with-ada-2012"}),"Inconsistencies With Ada 2012")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"10.b/5"),(0,a.kt)(d.Z,{items:["AI12-0005-1","AI12-0100-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,a.kt)("strong",null,"Corrigendum:")," A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.7#S0163"},"qualified_expression"))," now performs a predicate check for the named subtype (if it is enabled). Original Ada 2012 did not include that check (an omission). While this is formally inconsistent (an exception could be raised when none would be raised by original Ada 2012), cases where this scenario arises are likely to be rare (the qualified expression would have to have a stricter subtype than the following usage) and the check is more likely to detect bugs than be unexpected. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",h({},{id:"wording-changes-from-ada-2012"}),"Wording Changes from Ada 2012")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"10.c/5"),(0,a.kt)(d.Z,{items:["AI12-0325-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Reworded the resolution rule so that the operand of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.7#S0163"},"qualified_expression"))," has an expected type. This eliminates an annoying inconsistency in the language definition. ",(0,a.kt)("br",null))))}v.isMDXComponent=!0}}]);