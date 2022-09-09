"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[392],{399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>y,frontMatter:()=>k,metadata:()=>p,toc:()=>g});var a=n(1716),l=n(7556),i=n(9464),o=Object.defineProperty,s=Object.defineProperties,r=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&h(e,n,t[n]);if(m)for(var n of m(t))d.call(t,n)&&h(e,n,t[n]);return e};const k={sidebar_position:41},c="5.2 Assignment Statements",p={unversionedId:"arm/AA-5/AA-5.2",id:"arm/AA-5/AA-5.2",title:"5.2 Assignment Statements",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-5/AA-5.2.mdx",sourceDirName:"arm/AA-5",slug:"/arm/AA-5/AA-5.2",permalink:"/docs/arm/AA-5/AA-5.2",draft:!1,tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41},sidebar:"referenceManualSidebar",previous:{title:"5.1 Simple and Compound Statements - Sequences of Statements",permalink:"/docs/arm/AA-5/AA-5.1"},next:{title:"5.3 If Statements",permalink:"/docs/arm/AA-5/AA-5.3"}},f={},g=[{value:"Syntax",id:"syntax",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Incompatibilities With Ada 95",id:"incompatibilities-with-ada-95",level:4},{value:"5.2.1  Target Name Symbols",id:"521--target-name-symbols",level:2},{value:"Syntax",id:"syntax-1",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules-1",level:4},{value:"Legality Rules",id:"legality-rules-1",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}],b={toc:g};function y(e){var t,n=e,{components:o}=n,h=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&m)for(var a of m(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=A(A({},b),h),s(t,r({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("h1",A({},{id:"52-assignment-statements"}),"5.2 Assignment Statements"),(0,a.kt)("admonition",A({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",A({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)("p",null,"[An ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement"))," replaces the current value of a variable with the result of evaluating an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression")),".] ",(0,a.kt)("br",null)),(0,a.kt)("h4",A({},{id:"syntax"}),"Syntax"),(0,a.kt)("p",null,(0,a.kt)("code",null,"assignment_statement"),(0,a.kt)("a",{id:"S0173"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("br",null),"   ",(0,a.kt)("em",null,"variable_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," := ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression")),";",(0,a.kt)("br",null)),(0,a.kt)("p",null,"The execution of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement"))," includes the evaluation of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," and the ",(0,a.kt)("em",null,"assignment")," of the value of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," into the ",(0,a.kt)("em",null,"target"),". [An assignment operation (as opposed to an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement")),") is performed in other contexts as well, including object initialization and by-copy parameter passing.] The ",(0,a.kt)("em",null,"target")," of an assignment operation is the view of the object to which a value is being assigned; the target of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement"))," is the variable denoted by the ",(0,a.kt)("em",null,"variable_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name")),". ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,a.kt)("strong",null),'Don\'t confuse this notion of the "target" of an assignment with the notion of the "target object" of an entry call or requeue.',(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},'Don\'t confuse the term "assignment operation" with the ',(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement")),". The assignment operation is just one part of the execution of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement")),'. The assignment operation is also a part of the execution of various other constructs; see 7.6.1, "Completion and Finalization" for a complete list. Note that when we say, "such-and-such is assigned to so-and-so", we mean that the assignment operation is being applied, and that so-and-so is the target of the assignment operation. ',(0,a.kt)("br",null)),(0,a.kt)("h4",A({},{id:"name-resolution-rules"}),"Name Resolution Rules"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00287-01"),"}"," ",(0,a.kt)("br",null),"The ",(0,a.kt)("em",null,"variable_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement"))," is expected to be of any type. The expected type for the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," is the type of the target. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-note",title:"Implementation Note: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"An ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement")),' as a whole is a "complete context", so if the ',(0,a.kt)("em",null,"variable_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement"))," is overloaded, the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," can be used to help disambiguate it. For example: ",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"CodeBlock"},"type P1 is access R1;","\n","  type P2 is access R2;","\n","function F return P1;","\n","  function F return P2;","\n","X : R1;","\n","begin","\n","  F.all := X;  -- Right hand side helps resolve left hand side","\n"),(0,a.kt)("h4",A({},{id:"legality-rules"}),"Legality Rules"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00287-01"),"}"," ",(0,a.kt)("br",null),"The target [denoted by the ",(0,a.kt)("em",null,"variable_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name")),"] shall be a variable of a nonlimited type.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"If the target is of a tagged class-wide type ",(0,a.kt)("em",null,"T"),"'Class, then the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," shall either be dynamically tagged, or of type ",(0,a.kt)("em",null,"T")," and tag-indeterminate (see 3.9.2). ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"This is consistent with the general rule that a single dispatching operation shall not have both dynamically tagged and statically tagged operands. Note that for an object initialization (as opposed to the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement")),"), a statically tagged initialization expression is permitted, since there is no chance for confusion (or Tag_Check failure). Also, in an object initialization, tag-indeterminate expressions of any type covered by ",(0,a.kt)("em",null,"T"),"'Class would be allowed, but with an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement")),", that might not work if the tag of the target was for a type that didn't have one of the dispatching operations in the tag-indeterminate expression. ",(0,a.kt)("br",null)),(0,a.kt)("h4",A({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,a.kt)("p",null,"For the execution of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement")),", the ",(0,a.kt)("em",null,"variable_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," and the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," are first evaluated in an arbitrary order. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"Other rules of the language may require that the bounds of the variable be determined prior to evaluating the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression")),", but that does not necessarily require evaluation of the ",(0,a.kt)("em",null,"variable_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name")),", as pointed out by the ACID. ",(0,a.kt)("br",null)),(0,a.kt)("p",null,"When the type of the target is class-wide: ",(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",null,"If the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," is tag-indeterminate (see 3.9.2), then the controlling tag value for the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," is the tag of the target; ",(0,a.kt)("br",null))),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("strong",null),'See 3.9.2, "Dispatching Operations of Tagged Types". ',(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Otherwise [(the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," is dynamically tagged)], a check is made that the tag of the value of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," is the same as that of the target; if this check fails, Constraint_Error is raised. ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI12-0439-1"),"}"," ",(0,a.kt)("br",null),"The value of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," is converted to the subtype of the target. [The conversion can raise an exception (see 4.6).] ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("strong",null),'4.6, "Type Conversions" defines what actions and checks are associated with subtype conversion. For non-array subtypes, it is just a constraint check presuming the types match. For array subtypes, it checks the lengths and slides if the target is constrained. "Sliding" means the array doesn\'t have to have the same bounds, so long as it is the same length. ',(0,a.kt)("br",null)),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI12-0439-1"),"}"," ",(0,a.kt)("br",null),'In cases involving controlled types, the target is finalized, and an anonymous object can be used as an intermediate in the assignment, as described in 7.6.1, "Completion and Finalization". In any case, the converted value of the ',(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," is then ",(0,a.kt)("em",null,"assigned")," to the target, which consists of the following two steps: ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("strong",null,"To be honest: "),"7.6.1 actually says that finalization happens always, but unless controlled types are involved, this finalization during an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement"))," does nothing. ",(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",null,"The value of the target becomes the converted value.",(0,a.kt)("br",null)),(0,a.kt)("li",null,"{",(0,a.kt)("em",null,"AI05-0299-1"),"}"," ",(0,a.kt)("br",null),"If any part of the target is controlled, its value is adjusted as explained in subclause 7.6. ",(0,a.kt)("br",null))),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"If any parts of the object are controlled, abort is deferred during the assignment operation itself, but not during the rest of the execution of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement")),". ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE   The tag of an object never changes; in particular, an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement"))," does not change the tag of the target.",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("em",null,"This paragraph was deleted."),"{",(0,a.kt)("em",null,"AI95-00363-01"),"}"," ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"The implicit subtype conversion described above for ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement")),"s is performed only for the value of the right-hand side expression as a whole; it is not performed for subcomponents of the value.",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"The determination of the type of the variable of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement")),' may require consideration of the expression if the variable name can be interpreted as the name of a variable designated by the access value returned by a function call, and similarly, as a component or slice of such a variable (see 8.6, "The Context of Overload Resolution"). ',(0,a.kt)("br",null)),(0,a.kt)("h4",A({},{id:"examples"}),"Examples"),(0,a.kt)("p",null,(0,a.kt)("em",null,"Examples of assignment statements:")," ",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"CodeBlock"},"Value := Max_Value - 1;","\n","Shade := Blue;","\n","Next_Frame(F)(M, N) := 2.5;        --  see 4.1.1","\n","U := Dot_Product(V, W);            --  see 6.3","\n","--  ","{","AI12-0056-1","}","\n"," Writer := (Status =",">"," Open, Unit =",">"," Printer, Line_Count =",">"," 60);  -- see 3.8.1","\n","Next.all := (72074, null, Head);   --  see 3.10.1","\n"),(0,a.kt)("p",null,(0,a.kt)("em",null,"Examples involving scalar subtype conversions:")," ",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"CodeBlock"},"I, J : Integer range 1 .. 10 := 5;","\n","K    : Integer range 1 .. 20 := 15;","\n"," ...","\n","I := J;  --  identical ranges","\n","K := J;  --  compatible ranges","\n","J := K;  --  will raise Constraint_Error if K ",">"," 10","\n"),(0,a.kt)("p",null,(0,a.kt)("em",null,"Examples involving array subtype conversions:")," ",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"CodeBlock"},"A : String(1 .. 31);","\n","B : String(3 .. 33);","\n"," ...","\n","A := B;  --  same number of components","\n",'A(1 .. 9)  := "tar sauce";',"\n",'A(4 .. 12) := A(1 .. 9);  --  A(1 .. 12) = "tartar sauce"',"\n"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 1   ",(0,a.kt)("em",null,"Notes on the examples:")," ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"Assignment_statement")),"s are allowed even in the case of overlapping slices of the same array, because the ",(0,a.kt)("em",null,"variable_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," and ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression")),' are both evaluated before copying the value into the variable. In the above example, an implementation yielding A(1 .. 12) = "tartartartar" would be incorrect. ',(0,a.kt)("br",null)),(0,a.kt)("h4",A({},{id:"extensions-to-ada-83"}),"Extensions to Ada 83"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"We now allow user-defined finalization and value adjustment actions as part of ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement")),'s (see 7.6, "Assignment and Finalization"). ',(0,a.kt)("br",null)),(0,a.kt)("h4",A({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},'The special case of array assignment is subsumed by the concept of a subtype conversion, which is applied for all kinds of types, not just arrays. For arrays it provides "sliding". For numeric types it provides conversion of a value of a universal type to the specific type of the target. For other types, it generally has no run-time effect, other than a constraint check.',(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"We now cover in a general way in 3.7.2 the erroneous execution possible due to changing the value of a discriminant when the variable in an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement"))," is a subcomponent that depends on discriminants. ",(0,a.kt)("br",null)),(0,a.kt)("h4",A({},{id:"incompatibilities-with-ada-95"}),"Incompatibilities With Ada 95"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,a.kt)("em",null,"AI95-00287-01"),"}"," ",(0,a.kt)("br",null),"The change of the limited check from a resolution rule to a legality rule is not quite upward compatible. For example ",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"CodeBlock"},"type AccNonLim is access NonLim;","\n","function Foo (Arg : in Integer) return AccNonLim;","\n","type AccLim is access Lim;","\n","function Foo (Arg : in Integer) return AccLim;","\n","Foo(2).all := Foo(1).all;","\n"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"where NonLim is a nonlimited type and Lim is a limited type. The assignment is legal in Ada 95 (only the first Foo would be considered), and is ambiguous in Ada 2005. We made the change because we want limited types to be as similar to nonlimited types as possible. Limited expressions are now allowed in all other contexts (with a similar incompatibility), and it would be odd if assignments had different resolution rules (which would eliminate ambiguities in some cases). Moreover, examples like this one are rare, as they depend on assigning into overloaded function calls. ",(0,a.kt)("br",null)),(0,a.kt)("h2",A({},{id:"521--target-name-symbols"}),"5.2.1  Target Name Symbols"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI12-0125-3"),"}"," ",(0,a.kt)("br",null),"@, known as the ",(0,a.kt)("em",null,"target name")," of an assignment statement, provides an abbreviation to avoid repetition of potentially long names in assignment statements. ",(0,a.kt)("br",null)),(0,a.kt)("h4",A({},{id:"syntax-1"}),"Syntax"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI12-0125-3"),"}"," ",(0,a.kt)("br",null),(0,a.kt)("code",null,"target_name"),(0,a.kt)("a",{id:"S0174"}),(0,a.kt)("code",null," ::= "),"@",(0,a.kt)("br",null)),(0,a.kt)("h4",A({},{id:"name-resolution-rules-1"}),"Name Resolution Rules"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI12-0125-3"),"}"," ",(0,a.kt)("br",null),"[If a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0174"},"target_name"))," occurs in an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement"))," ",(0,a.kt)("em",null,"A"),", the ",(0,a.kt)("em",null,"variable_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," ",(0,a.kt)("em",null,"V")," of ",(0,a.kt)("em",null,"A")," is a complete context. The target name is a constant view of ",(0,a.kt)("em",null,"V"),", having the nominal subtype of ",(0,a.kt)("em",null,"V"),".]",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"proof",title:"Proof: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"{",(0,a.kt)("em",null,"AI12-0125-3"),"}"," ","{",(0,a.kt)("em",null,"AI12-0322-1"),"}"," ",(0,a.kt)("br",null),"The complete context rule is formally given in 8.6. The constant view rule is formally given in 3.3; the nominal subtype is a property taken from the target object as described below in Dynamic Semantics. ",(0,a.kt)("br",null)),(0,a.kt)("h4",A({},{id:"legality-rules-1"}),"Legality Rules"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI12-0125-3"),"}"," ","{",(0,a.kt)("em",null,"AI12-0322-1"),"}"," ",(0,a.kt)("br",null),"A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0174"},"target_name"))," shall appear only in the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement")),". ",(0,a.kt)("br",null)),(0,a.kt)("h4",A({},{id:"dynamic-semantics-1"}),"Dynamic Semantics"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI12-0125-3"),"}"," ","{",(0,a.kt)("em",null,"AI12-0322-1"),"}"," ",(0,a.kt)("br",null),"For the execution of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement"))," with one or more ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0174"},"target_name")),"s appearing in its ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression")),", the ",(0,a.kt)("em",null,"variable_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," ",(0,a.kt)("em",null,"V")," of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement"))," is evaluated first to determine the object denoted by ",(0,a.kt)("em",null,"V"),", and then the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement"))," is evaluated with the evaluation of each ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0174"},"target_name"))," yielding a constant view of the the target whose properties are otherwise identical to those of the view provided by ",(0,a.kt)("em",null,"V"),". The remainder of the execution of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement"))," is as given in subclause 5.2.",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("strong",null,"To be honest: "),"The properties here include static properties like whether the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0174"},"target_name"))," is aliased and the nominal subtype of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0174"},"target_name")),". It was too weird to give separate rules for static and dynamic properties that said almost the same thing. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"{",(0,a.kt)("em",null,"AI12-0322-1"),"}"," ",(0,a.kt)("br",null),"Use of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0174"},"target_name"))," can be erroneous if the ",(0,a.kt)("em",null,"variable_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," ",(0,a.kt)("em",null,"V")," is a discriminant-dependent component, and some other constituent of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," modifies the discriminant governing the component ",(0,a.kt)("em",null,"V"),". The assignment probably would be erroneous anyway, but the use of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0174"},"target_name"))," eliminates the possibility that a later evaluation of ",(0,a.kt)("em",null,"V")," raises an exception before any erroneous execution occurs. See 3.7.2. ",(0,a.kt)("br",null)),(0,a.kt)("h4",A({},{id:"examples-1"}),"Examples"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI12-0429-1"),"}"," ",(0,a.kt)("em",null,(0,a.kt)("br",null),"Examples of the use of target name symbols:"),(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"CodeBlock"},"--  ","{","AI12-0125-3","}","\n"," --  ","{","AI12-0379-1","}","\n"," --  ","{","AI12-0442-1","}","\n"," Board(1, 1) := @ + 1.0;  -- An abbreviation for Board(1, 1) := Board(1, 1) + 1.0;","\n","                       -- (Board is declared in 3.6.1).","\n","--  ","{","AI12-0125-3","}","\n"," My_Complex_Array : array (1 .. Max) of Complex; -- See 3.3.2, 3.8.","\n","...","\n","-- Square the element in the Count (see 3.3.1) position:","\n","My_Complex_Array (Count) := (Re =",">"," @.Re**2 - @.Im**2,","\n","                             Im =",">"," 2.0 * @.Re * @.Im);","\n","   -- A target_name can be used multiple times and as a prefix if desired.","\n"),(0,a.kt)("h4",A({},{id:"extensions-to-ada-2012"}),"Extensions to Ada 2012"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,a.kt)("em",null,"AI12-0125-3"),"}"," ","{",(0,a.kt)("em",null,"AI12-0322-1"),"}"," ",(0,a.kt)("br",null),"The target name symbol @ is new. ",(0,a.kt)("br",null)))}y.isMDXComponent=!0}}]);