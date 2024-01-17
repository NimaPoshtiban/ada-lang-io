"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[4651],{43459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>T,contentTitle:()=>f,default:()=>b,frontMatter:()=>x,metadata:()=>y,toc:()=>_});var a=n(91716),o=n(21256),r=n(24895),l=n(28090),i=n(48424),c=n(82262),s=Object.defineProperty,d=Object.defineProperties,A=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&h(e,n,t[n]);if(k)for(var n of k(t))p.call(t,n)&&h(e,n,t[n]);return e};const x={sidebar_position:90},f="11.2 Exception Handlers",y={unversionedId:"arm/AA-11/AA-11.2",id:"arm/AA-11/AA-11.2",title:"11.2 Exception Handlers",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-11/AA-11.2.mdx",sourceDirName:"arm/AA-11",slug:"/arm/AA-11/AA-11.2",permalink:"/docs/arm/AA-11/AA-11.2",draft:!1,tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"referenceManualSidebar",previous:{title:"11.1 Exception Declarations",permalink:"/docs/arm/AA-11/AA-11.1"},next:{title:"11.3 Raise Statements and Raise Expressions",permalink:"/docs/arm/AA-11/AA-11.3"}},T={},_=[{value:"Syntax",id:"syntax",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4}],g={toc:_};function b(e){var t,n=e,{components:s}=n,h=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&k)for(var a of k(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},g),h),d(t,A({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"112-exception-handlers"}),"11.2 Exception Handlers"),(0,a.kt)("admonition",u({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(i.Z,{mdxType:"MarginText"},"1"),(0,a.kt)("p",null,"[The response to one or more exceptions is specified by an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0305"},"exception_handler")),".] ",(0,a.kt)("br",null)),(0,a.kt)("h4",u({},{id:"syntax"}),"Syntax"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"2"),(0,a.kt)(l.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"handled_sequence_of_statements"),(0,a.kt)("a",{id:"S0304"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("br",null),"     ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),(0,a.kt)("br",null),"  [",(0,a.kt)("strong",null,"exception"),(0,a.kt)("br",null),"     ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0305"},"exception_handler")),(0,a.kt)("br",null),"    ","{",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0305"},"exception_handler")),"}","]",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"3/5"),(0,a.kt)(c.Z,{items:["AI12-0212-1"],mdxType:"MarginInfo"}),(0,a.kt)(l.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"exception_handler"),(0,a.kt)("a",{id:"S0305"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("br",null),"  ",(0,a.kt)("strong",null,"when")," [",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0306"},"choice_parameter_specification")),":] ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0307"},"exception_choice"))," ","{","'|' ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0307"},"exception_choice")),"}"," =",">",(0,a.kt)("br",null),"     ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"4"),(0,a.kt)(l.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"choice_parameter_specification"),(0,a.kt)("a",{id:"S0306"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.1#S0022"},"defining_identifier")),(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"5"),(0,a.kt)(l.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"exception_choice"),(0,a.kt)("a",{id:"S0307"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("em",null,"exception_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," | ",(0,a.kt)("strong",null,"others"),(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"5.a"),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,a.kt)("strong",null,"To be honest: "),"\u201c",(0,a.kt)("em",null,"Handler"),"\u201d is an abbreviation for \u201c",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0305"},"exception_handler")),"\u201d.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"5.b/3"),(0,a.kt)(c.Z,{items:["AI05-0299-1"],mdxType:"MarginInfo"}),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Within this clause, we sometimes abbreviate \u201c",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0307"},"exception_choice")),"\u201d to \u201c",(0,a.kt)("em",null,"choice"),"\u201d. ",(0,a.kt)("br",null))),(0,a.kt)("h4",u({},{id:"legality-rules"}),"Legality Rules"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"5.1/4"),(0,a.kt)(c.Z,{items:["AI12-0022-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"An ",(0,a.kt)("em",null,"exception_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0307"},"exception_choice"))," shall denote an exception.",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"6"),(0,a.kt)("p",null,"A choice with an ",(0,a.kt)("em",null,"exception_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," ",(0,a.kt)("em",null,"covers")," the named exception. A choice with ",(0,a.kt)("strong",null,"others")," covers all exceptions not named by previous choices of the same ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0304"},"handled_sequence_of_statements")),". Two choices in different ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0305"},"exception_handler")),"s of the same ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0304"},"handled_sequence_of_statements"))," shall not cover the same exception. ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"6.a"),(0,a.kt)(o.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"Two ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0307"},"exception_choice")),"s of the same ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0305"},"exception_handler"))," may cover the same exception. For example, given two renaming declarations in separate packages for the same exception, one may nevertheless write, for example, \u201c",(0,a.kt)("strong",null,"when")," Ada.Text_IO.Data_Error | My_Seq_IO.Data_Error =",">","\u201d.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"6.b"),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"An ",(0,a.kt)("strong",null,"others")," choice even covers exceptions that are not visible at the place of the handler. Since exception raising is a dynamic activity, it is entirely possible for an ",(0,a.kt)("strong",null,"others")," handler to handle an exception that it could not have named. ",(0,a.kt)("br",null))),(0,a.kt)(i.Z,{mdxType:"MarginText"},"7"),(0,a.kt)("p",null,"A choice with ",(0,a.kt)("strong",null,"others")," is allowed only for the last handler of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0304"},"handled_sequence_of_statements"))," and as the only choice of that handler.",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"8"),(0,a.kt)("p",null,"An ",(0,a.kt)("em",null,"exception_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," of a choice shall not denote an exception declared in a generic formal package. ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"8.a"),(0,a.kt)(o.Z,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,a.kt)("strong",null),"This is because the compiler doesn't know the identity of such an exception, and thus can't enforce the coverage rules. ",(0,a.kt)("br",null))),(0,a.kt)("h4",u({},{id:"static-semantics"}),"Static Semantics"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"9"),(0,a.kt)("p",null,"A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0306"},"choice_parameter_specification"))," declares a ",(0,a.kt)("em",null,"choice parameter"),", which is a constant object of type Exception_Occurrence (see ",(0,a.kt)("a",{href:"../AA-11/AA-11.4#Subclause_11.4.1"},"11.4.1"),"). During the handling of an exception occurrence, the choice parameter, if any, of the handler represents the exception occurrence that is being handled.",(0,a.kt)("br",null)),(0,a.kt)("h4",u({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"10"),(0,a.kt)("p",null,"The execution of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0304"},"handled_sequence_of_statements"))," consists of the execution of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),". [The optional handlers are used to handle any exceptions that are propagated by the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),".] ",(0,a.kt)("br",null)),(0,a.kt)("h4",u({},{id:"examples"}),"Examples"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"11"),(0,a.kt)("p",null,(0,a.kt)("em",null,"Example of an exception handler:")," ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"12/5"),(0,a.kt)(c.Z,{items:["AI12-0178-1"],mdxType:"MarginInfo"}),(0,a.kt)(l.Z,{language:"ada",mdxType:"CodeBlock"},"begin","\n",'   Open(File, In_File, "input.txt");   -- see ',(0,a.kt)("a",{href:"../AA-A/AA-A.8#Subclause_A.8.2"},"A.8.2"),"\n","exception","\n","   when E : Name_Error =",">","\n",'      Put("Cannot open input file : ");',"\n","      Put_Line(Ada.Exceptions.Exception_Message(E));  -- see ",(0,a.kt)("a",{href:"../AA-11/AA-11.4#Subclause_11.4.1"},"11.4.1"),"\n","      raise;","\n","end;","\n"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",u({},{id:"extensions-to-ada-83"}),"Extensions to Ada 83")),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"12.a"),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The syntax rule for ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0305"},"exception_handler"))," is modified to allow a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0306"},"choice_parameter_specification")),".",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"12.b/2"),(0,a.kt)(c.Z,{items:["AI95-00114-01"],mdxType:"MarginInfo"}),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Different ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0307"},"exception_choice")),"s of the same ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0305"},"exception_handler"))," may cover the same exception. This allows for \u201cwhen Numeric_Error | Constraint_Error =",">","\u201d even though Numeric_Error is a rename of Constraint_Error. This also allows one to \u201cwith\u201d two different I/O packages, and then write, for example, \u201cwhen Ada.Text_IO.Data_Error | My_Seq_IO.Data_Error =",">","\u201d even though these might both be renames of the same exception. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",u({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83")),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"12.c"),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The syntax rule for ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0304"},"handled_sequence_of_statements"))," is new. These are now used in all the places where handlers are allowed. This obviates the need to explain (in Clauses ",(0,a.kt)("a",{href:"../AA-5/"},"5"),", ",(0,a.kt)("a",{href:"../AA-6/"},"6"),", ",(0,a.kt)("a",{href:"../AA-7/"},"7"),", and ",(0,a.kt)("a",{href:"../AA-9/"},"9"),") what portions of the program are handled by the handlers. Note that there are more such cases in Ada 95.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"12.d"),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The syntax rule for ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0306"},"choice_parameter_specification"))," is new. ",(0,a.kt)("br",null))))}b.isMDXComponent=!0}}]);