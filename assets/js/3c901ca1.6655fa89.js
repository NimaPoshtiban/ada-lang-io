"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8028],{97039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>y,default:()=>v,frontMatter:()=>h,metadata:()=>g,toc:()=>b});var a=n(91716),o=n(21256),r=n(24895),i=n(28090),l=n(48424),s=n(82262),d=Object.defineProperty,p=Object.defineProperties,A=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&k(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&k(e,n,t[n]);return e};const h={sidebar_position:56},y="6.6 Overloading of Operators",g={unversionedId:"arm/AA-6/AA-6.6",id:"arm/AA-6/AA-6.6",title:"6.6 Overloading of Operators",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-6/AA-6.6.mdx",sourceDirName:"arm/AA-6",slug:"/arm/AA-6/AA-6.6",permalink:"/docs/arm/AA-6/AA-6.6",draft:!1,tags:[],version:"current",sidebarPosition:56,frontMatter:{sidebar_position:56},sidebar:"referenceManualSidebar",previous:{title:"6.5 Return Statements",permalink:"/docs/arm/AA-6/AA-6.5"},next:{title:"6.7 Null Procedures",permalink:"/docs/arm/AA-6/AA-6.7"}},x={},b=[{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4}],T={toc:b};function v(e){var t,n=e,{components:d}=n,k=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},T),k),p(t,A({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("h1",f({},{id:"66-overloading-of-operators"}),"6.6 Overloading of Operators"),(0,a.kt)("admonition",f({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",f({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(l.Z,{mdxType:"MarginText"},"1"),(0,a.kt)("p",null,"An ",(0,a.kt)("em",null,"operator")," is a function whose ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.1#S0199"},"designator"))," is an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.1#S0202"},"operator_symbol")),". [Operators, like other functions, may be overloaded.] ",(0,a.kt)("br",null)),(0,a.kt)("h4",f({},{id:"name-resolution-rules"}),"Name Resolution Rules"),(0,a.kt)(l.Z,{mdxType:"MarginText"},"2"),(0,a.kt)("p",null,"Each use of a unary or binary operator is equivalent to a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.4#S0218"},"function_call"))," with ",(0,a.kt)("em",null,"function_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0093"},"prefix"))," being the corresponding ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.1#S0202"},"operator_symbol")),", and with (respectively) one or two positional actual parameters being the operand(s) of the operator (in order). ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"2.a/5"),(0,a.kt)(s.Z,{items:["AI05-0299-1","AI12-0449-1"],mdxType:"MarginInfo"}),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,a.kt)("strong",null,"To be honest: "),"We also use the term operator (in Clause ",(0,a.kt)("a",{href:"../AA-4/"},"4")," and in ",(0,a.kt)("a",{href:"../AA-6/AA-6.1"},"6.1"),") to refer to one of the syntactic categories defined in ",(0,a.kt)("a",{href:"../AA-4/AA-4.5"},"4.5"),", \u201c",(0,a.kt)("a",{href:"../AA-4/AA-4.5"},"Operators and Expression Evaluation"),"\u201d whose names end with \u201c_operator:\u201d ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.5#S0142"},"logical_operator")),", ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.5#S0143"},"relational_operator")),", ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.5#S0144"},"binary_adding_operator")),", ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.5#S0145"},"unary_adding_operator")),", ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.5#S0146"},"multiplying_operator")),", and ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.5#S0147"},"highest_precedence_operator")),". ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"2.b/3"),(0,a.kt)(s.Z,{items:["AI05-0005-1"],mdxType:"MarginInfo"}),(0,a.kt)(o.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,a.kt)("strong",null),"This equivalence extends to uses of ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.4#S0218"},"function_call"))," in most other language rules. However, as often happens, the equivalence is not perfect, as operator calls are not a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name")),", while a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.4#S0218"},"function_call"))," is a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name")),". Thus, operator calls cannot be used in contexts that require a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," (such as a rename of an object). A direct fix for this problem would be very disruptive, and thus we have not done that. However, qualifying an operator call can be used as a workaround in contexts that require a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name")),". ",(0,a.kt)("br",null))),(0,a.kt)("h4",f({},{id:"legality-rules"}),"Legality Rules"),(0,a.kt)(l.Z,{mdxType:"MarginText"},"3/3"),(0,a.kt)(s.Z,{items:["AI05-0143-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.1#S0196"},"subprogram_specification"))," of a unary or binary operator shall have one or two parameters, respectively. The parameters shall be of mode ",(0,a.kt)("strong",null,"in"),". A generic function instantiation whose ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.1#S0199"},"designator"))," is an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.1#S0202"},"operator_symbol"))," is only allowed if the specification of the generic function has the corresponding number of parameters, and they are all of mode ",(0,a.kt)("strong",null,"in"),".",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"4"),(0,a.kt)("p",null,(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.7#S0063"},"Default_expression")),"s are not allowed for the parameters of an operator (whether the operator is declared with an explicit ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.1#S0196"},"subprogram_specification"))," or by a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-12/AA-12.3#S0315"},"generic_instantiation")),").",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"5"),(0,a.kt)("p",null,'An explicit declaration of "/=" shall not have a result type of the predefined type Boolean. ',(0,a.kt)("br",null)),(0,a.kt)("h4",f({},{id:"static-semantics"}),"Static Semantics"),(0,a.kt)(l.Z,{mdxType:"MarginText"},"6/3"),(0,a.kt)(s.Z,{items:["AI05-0128-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,'An explicit declaration of "=" whose result type is Boolean implicitly declares an operator "/=" that gives the complementary result. ',(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"6.a/3"),(0,a.kt)(s.Z,{items:["AI05-0128-1"],mdxType:"MarginInfo"}),(0,a.kt)(o.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,a.kt)("strong",null),'A "/=" defined by this rule is considered user-defined, which means that it will be inherited by a derived type. \u201cUser-defined\u201d means \u201cnot language-defined\u201d for the purposes of inheritance, that is anything other than predefined operators. ',(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"7/5"),(0,a.kt)(s.Z,{items:["AI12-0440-1"],mdxType:"MarginInfo"}),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},'NOTE   The operators "+" and "\u2013" are both unary and binary operators, and hence can be overloaded with both one- and two-parameter functions. ',(0,a.kt)("br",null))),(0,a.kt)("h4",f({},{id:"examples"}),"Examples"),(0,a.kt)(l.Z,{mdxType:"MarginText"},"8"),(0,a.kt)("p",null,(0,a.kt)("em",null,"Examples of user-defined operators:")," ",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"9"),(0,a.kt)(i.Z,{language:"ada",mdxType:"CodeBlock"},'function "+" (Left, Right : Matrix) return Matrix;',"\n",'function "+" (Left, Right : Vector) return Vector;',"\n","\n","--  assuming that A, B, and C are of the type Vector","\n","--  the following two statements are equivalent:","\n","\n","A := B + C;","\n",'A := "+"(B, C);',"\n"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",f({},{id:"extensions-to-ada-83"}),"Extensions to Ada 83")),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"9.a"),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},'Explicit declarations of "=" are now permitted for any combination of parameter and result types.',(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"9.b"),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},'Explicit declarations of "/=" are now permitted, so long as the result type is not Boolean. ',(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",f({},{id:"wording-changes-from-ada-2005"}),"Wording Changes from Ada 2005")),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"9.c/3"),(0,a.kt)(s.Z,{items:["AI05-0128-1"],mdxType:"MarginInfo"}),(0,a.kt)(o.Z,{type:"aarm",aarm:"correction",mdxType:"Admonition"},(0,a.kt)("strong",null),' Corrected the wording so that only explicit declarations of "=" cause an implicit declaration of "/="; otherwise, we could get multiple implicit definitions of "/=" without an obvious way to chose between them.',(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"9.d/3"),(0,a.kt)(s.Z,{items:["AI05-0143-1"],mdxType:"MarginInfo"}),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Added wording so that operators only allow parameters of mode ",(0,a.kt)("strong",null,"in"),". This was made necessary by the elimination elsewhere of the restriction that function parameters be only of mode ",(0,a.kt)("strong",null,"in"),". ",(0,a.kt)("br",null))))}v.isMDXComponent=!0}}]);