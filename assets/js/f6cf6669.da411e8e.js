"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[2051],{2283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>Z,frontMatter:()=>x,metadata:()=>y,toc:()=>T});var a=n(91716),i=n(21256),o=n(24895),l=n(28090),r=n(48424),s=n(82262),d=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))A.call(t,n)&&m(e,n,t[n]);return e};const x={sidebar_position:58},h="6.8 Expression Functions",y={unversionedId:"arm/AA-6/AA-6.8",id:"arm/AA-6/AA-6.8",title:"6.8 Expression Functions",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-6/AA-6.8.mdx",sourceDirName:"arm/AA-6",slug:"/arm/AA-6/AA-6.8",permalink:"/docs/arm/AA-6/AA-6.8",draft:!1,tags:[],version:"current",sidebarPosition:58,frontMatter:{sidebar_position:58},sidebar:"referenceManualSidebar",previous:{title:"6.7 Null Procedures",permalink:"/docs/arm/AA-6/AA-6.7"},next:{title:"7 Packages",permalink:"/docs/arm/AA-7/"}},g={},T=[{value:"Syntax",id:"syntax",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}],b={toc:T};function Z(e){var t,n=e,{components:d}=n,m=((e,t)=>{var n={};for(var a in e)k.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&A.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},b),m),c(t,p({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("h1",f({},{id:"68-expression-functions"}),"6.8 Expression Functions"),(0,a.kt)("admonition",f({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",f({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(r.Z,{mdxType:"MarginText"},"1/3"),(0,a.kt)(s.Z,{items:["AI05-0177-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"An ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.8#S0228"},"expression_function_declaration"))," provides a shorthand to declare a function whose body consists of a single return statement. ",(0,a.kt)("br",null)),(0,a.kt)("h4",f({},{id:"syntax"}),"Syntax"),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2/4"),(0,a.kt)(s.Z,{items:["AI95-0177-1","AI12-0157-1"],mdxType:"MarginInfo"}),(0,a.kt)(l.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"expression_function_declaration"),(0,a.kt)("a",{id:"S0228"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("br",null),"   [",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-8/AA-8.3#S0234"},"overriding_indicator")),"]",(0,a.kt)("br",null),"   ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.1#S0198"},"function_specification"))," ",(0,a.kt)("strong",null,"is"),(0,a.kt)("br",null),"       (",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression")),")",(0,a.kt)("br",null),"       [",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification")),"];",(0,a.kt)("br",null)," | [",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-8/AA-8.3#S0234"},"overriding_indicator")),"]",(0,a.kt)("br",null),"   ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.1#S0198"},"function_specification"))," ",(0,a.kt)("strong",null,"is"),(0,a.kt)("br",null),"       ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0106"},"aggregate")),(0,a.kt)("br",null),"       [",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification")),"];",(0,a.kt)("br",null)),(0,a.kt)("h4",f({},{id:"name-resolution-rules"}),"Name Resolution Rules"),(0,a.kt)(r.Z,{mdxType:"MarginText"},"3/4"),(0,a.kt)(s.Z,{items:["AI05-0177-1","AI12-0157-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The expected type for the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," or ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0106"},"aggregate"))," of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.8#S0228"},"expression_function_declaration"))," is the result type (see ",(0,a.kt)("a",{href:"../AA-6/AA-6.5"},"6.5"),") of the function. ",(0,a.kt)("br",null)),(0,a.kt)("h4",f({},{id:"static-semantics"}),"Static Semantics"),(0,a.kt)(r.Z,{mdxType:"MarginText"},"3.1/5"),(0,a.kt)(s.Z,{items:["AI05-0177-1","AI05-0264-1","AI12-0075-1","AI12-0157-1","AI12-0408-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"An ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.8#S0228"},"expression_function_declaration"))," that is not a completion declares an ",(0,a.kt)("em",null,"expression function"),". The ",(0,a.kt)("em",null,"return expression of an expression function")," is the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," or ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0106"},"aggregate"))," of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.8#S0228"},"expression_function_declaration")),". A completion is not allowed for an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.8#S0228"},"expression_function_declaration")),"; however, an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.8#S0228"},"expression_function_declaration"))," can complete a previous declaration.",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"3.2/5"),(0,a.kt)(s.Z,{items:["AI12-0075-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"A ",(0,a.kt)("em",null,"potentially static expression")," is defined in the same way as a static expression except that",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"3.3/5"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"a name denoting a formal parameter of an expression function is a potentially static expression; and",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"3.4/5"),(0,a.kt)("li",null,"each use of \u201cstatic expression\u201d in the definition of \u201cstatic expression\u201d is replaced with a corresponding use of \u201cpotentially static expression\u201d in the definition of \u201cpotentially static expression\u201d. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"3.a/5"),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,a.kt)("strong",null),"These uses occur in the definition of \u201cstatic expression\u201d in the cases of function calls, type conversions, qualified expressions, membership tests, short circuit control forms, conditional expressions, and parenthesized expressions. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"MarginText"},"3.5/5"),(0,a.kt)(s.Z,{items:["AI12-0075-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The following language-defined representation aspect may be specified for an expression function:",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"3.6/5"),(0,a.kt)("dt",null,(0,a.kt)("br",null),"Static"),(0,a.kt)("dl",null,(0,a.kt)("dd",null,"The type of aspect Static is Boolean. When aspect Static is True for an expression function, the function is a ",(0,a.kt)("em",null,"static expression function"),". If directly specified, the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-13/AA-13.1#S0348"},"aspect_definition"))," shall be a static expression.",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"3.b/5"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,a.kt)("strong",null,"Aspect Description for "),(0,a.kt)("strong",null,"Static: "),"Specifies that an associated expression function can be used in static expressions.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"MarginText"},"3.7/5"),(0,a.kt)("dt",null,(0,a.kt)("br",null)),(0,a.kt)("dl",null,(0,a.kt)("dd",null,"The Static value for an inherited function is True if some corresponding primitive function of the parent or progenitor type is a static expression function; otherwise, if not directly specified, the aspect is False. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"MarginText"},"3.8/5"),(0,a.kt)(s.Z,{items:["AI12-0075-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"[A static expression function is a static function; see ",(0,a.kt)("a",{href:"../AA-4/AA-4.9"},"4.9"),".] ",(0,a.kt)("br",null)),(0,a.kt)("h4",f({},{id:"legality-rules"}),"Legality Rules"),(0,a.kt)(r.Z,{mdxType:"MarginText"},"4/3"),(0,a.kt)(s.Z,{items:["AI05-0177-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"If an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.8#S0228"},"expression_function_declaration"))," is a completion, it shall be the completion of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.1#S0195"},"subprogram_declaration"))," or ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-12/AA-12.1#S0311"},"generic_subprogram_declaration")),". The profile of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.8#S0228"},"expression_function_declaration"))," that completes a declaration shall conform fully to that of the declaration.",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"5/4"),(0,a.kt)(s.Z,{items:["AI05-0177-1","AI12-0157-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"If the result subtype has one or more unconstrained access discriminants, the accessibility level of the anonymous access type of each access discriminant, as determined by the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," or ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0106"},"aggregate"))," of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.8#S0228"},"expression_function_declaration")),", shall not be statically deeper than that of the master that elaborated the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.8#S0228"},"expression_function_declaration")),".",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"5.a/3"),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"This can only fail if the discriminant is an access to a part of a nonaliased parameter, as there can be no local declarations here. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"5.b/4"),(0,a.kt)(s.Z,{items:["AI12-0005-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,a.kt)("strong",null),"We don't need to repeat any of the other Legality Rules for return statements since none of them can fail here: the implicit return statement has to apply to this function (and isn't nested in something), there clearly is a return statement in this function, and the static class-wide accessibility check cannot fail as a tagged type cannot be declared locally in an expression function. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"MarginText"},"5.1/5"),(0,a.kt)(s.Z,{items:["AI12-0075-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"Aspect Static shall be specified to have the value True only if the associated ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.8#S0228"},"expression_function_declaration")),":",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"5.2/5"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"is not a completion;",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"5.3/5"),(0,a.kt)("li",null,"has an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," that is a potentially static expression;",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"5.4/5"),(0,a.kt)("li",null,"contains no calls to itself;",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"5.5/5"),(0,a.kt)("li",null,"each parameter (if any) is of mode ",(0,a.kt)("strong",null,"in")," and is of a static subtype;",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"5.6/5"),(0,a.kt)("li",null,"has a result subtype that is a static subtype;",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"5.7/5"),(0,a.kt)("li",null,"has no applicable precondition or postcondition expression; and",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"5.8/5"),(0,a.kt)(s.Z,{items:["AI12-0075-1","AI12-0191-1"],mdxType:"MarginInfo"}),(0,a.kt)("li",null,"for result type ",(0,a.kt)("em",null,"R"),", if the function is a boundary entity for type ",(0,a.kt)("em",null,"R")," (see ",(0,a.kt)("a",{href:"../AA-7/AA-7.3#Subclause_7.3.2"},"7.3.2"),"), no type invariant applies to type ",(0,a.kt)("em",null,"R"),"; if ",(0,a.kt)("em",null,"R")," has a component type ",(0,a.kt)("em",null,"C"),", a similar rule applies to ",(0,a.kt)("em",null,"C"),". ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"5.c/5"),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"Since a string subtype can be static, this allows an expression function of a string type to be static. ",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("em",null,"Paragraph 6 was deleted.")," ",(0,a.kt)("br",null)),(0,a.kt)("h4",f({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,a.kt)(r.Z,{mdxType:"MarginText"},"7/5"),(0,a.kt)(s.Z,{items:["AI05-0177-1","AI05-0262-1","AI12-0157-1","AI12-0408-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The execution of an expression function is invoked by a subprogram call. For the execution of a subprogram call on an expression function, or on a function completed with a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.8#S0228"},"expression_function_declaration")),", the execution of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.3#S0216"},"subprogram_body"))," executes an implicit function body containing only a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.5#S0222"},"simple_return_statement"))," whose ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," is the return expression of the expression function.",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"7.a/3"),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,a.kt)("strong",null),"The last sentence effectively means that all of the dynamic wording in ",(0,a.kt)("a",{href:"../AA-6/AA-6.5"},"6.5")," applies as needed, and we don't have to repeat it here. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"MarginText"},"8/3"),(0,a.kt)(s.Z,{items:["AI05-0177-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The elaboration of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.8#S0228"},"expression_function_declaration"))," has no other effect than to establish that the expression function can be called without failing the Elaboration_Check. ",(0,a.kt)("br",null)),(0,a.kt)("h4",f({},{id:"examples"}),"Examples"),(0,a.kt)(r.Z,{mdxType:"MarginText"},"9/5"),(0,a.kt)(s.Z,{items:["AI12-0429-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,(0,a.kt)("em",null,"Example of an expression function:")," ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"10/3"),(0,a.kt)(s.Z,{items:["AI05-0177-1"],mdxType:"MarginInfo"}),(0,a.kt)(l.Z,{language:"ada",mdxType:"CodeBlock"},"function Is_Origin (P : in Point) return Boolean is -- see ",(0,a.kt)("a",{href:"../AA-3/AA-3.9"},"3.9"),"\n","   (P.X = 0.0 and P.Y = 0.0);","\n"),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",f({},{id:"extensions-to-ada-2005"}),"Extensions to Ada 2005")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"10.a/3"),(0,a.kt)(s.Z,{items:["AI05-0177-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Expression functions are new in Ada 2012. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",f({},{id:"extensions-to-ada-2012"}),"Extensions to Ada 2012")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"10.b/4"),(0,a.kt)(s.Z,{items:["AI12-0157-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,a.kt)("strong",null,"Corrigendum:")," A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.3#S0106"},"aggregate"))," can directly be the return expression of an expression function. This eliminates the double parentheses that otherwise would be necessary.",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"10.c/5"),(0,a.kt)(s.Z,{items:["AI12-0075-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Aspect Static is new; it allows using suitable expression functions in static expressions. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",f({},{id:"wording-changes-from-ada-2012"}),"Wording Changes from Ada 2012")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"10.d/5"),(0,a.kt)(s.Z,{items:["AI12-0408-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Clarified the term \u201cexpression function\u201d so it matches the meaning expected in ",(0,a.kt)("a",{href:"../AA-6/AA-6.1"},"6.1"),". ",(0,a.kt)("br",null))))}Z.isMDXComponent=!0}}]);