"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6264],{43424:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>A,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>x,toc:()=>j});var r=s(74848),c=s(28453),i=s(13842),a=s(91435),d=s(21432),h=s(79162),o=s(34421);const t={sidebar_position:90},l="11.2 Exception Handlers",x={id:"arm/AA-11/AA-11.2",title:"11.2 Exception Handlers",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-11/AA-11.2.mdx",sourceDirName:"arm/AA-11",slug:"/arm/AA-11/AA-11.2",permalink:"/docs/arm/AA-11/AA-11.2",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"referenceManualSidebar",previous:{title:"11.1 Exception Declarations",permalink:"/docs/arm/AA-11/AA-11.1"},next:{title:"11.3 Raise Statements and Raise Expressions",permalink:"/docs/arm/AA-11/AA-11.3"}},A={},j=[{value:"Syntax",id:"syntax",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4}];function m(e){const n={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"112-exception-handlers",children:"11.2 Exception Handlers"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,r.jsx)(n.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n","\n",(0,r.jsx)(h.A,{children:"1"}),"\n",(0,r.jsxs)("p",{children:["[The response to one or more exceptions is specified by an ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0305",children:"exception_handler"})}),".] ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(h.A,{children:"2"}),"\n",(0,r.jsx)(d.A,{children:(0,r.jsxs)(n.p,{children:[(0,r.jsxs)("code",{children:["handled","_","sequence","_","of","_","statements"]}),(0,r.jsx)("a",{id:"S0304"}),(0,r.jsx)("code",{children:" ::= "}),(0,r.jsx)("br",{}),"     ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-5/AA-5.1#S0166",children:"sequence_of_statements"})}),(0,r.jsx)("br",{}),"  [",(0,r.jsx)("strong",{children:"exception"}),(0,r.jsx)("br",{}),"     ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0305",children:"exception_handler"})}),(0,r.jsx)("br",{}),"    ","{",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0305",children:"exception_handler"})}),"}","]",(0,r.jsx)("br",{})]})}),"\n",(0,r.jsx)(h.A,{children:"3/5"}),"\n",(0,r.jsx)(o.A,{items:["AI12-0212-1"]}),"\n",(0,r.jsx)(d.A,{children:(0,r.jsxs)(n.p,{children:[(0,r.jsxs)("code",{children:["exception","_","handler"]}),(0,r.jsx)("a",{id:"S0305"}),(0,r.jsx)("code",{children:" ::= "}),(0,r.jsx)("br",{}),"  ",(0,r.jsx)("strong",{children:"when"})," [",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0306",children:"choice_parameter_specification"})}),":] ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0307",children:"exception_choice"})})," ","{","'|' ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0307",children:"exception_choice"})}),"}"," =",">",(0,r.jsx)("br",{}),"     ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-5/AA-5.1#S0166",children:"sequence_of_statements"})}),(0,r.jsx)("br",{})]})}),"\n",(0,r.jsx)(h.A,{children:"4"}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsxs)("code",{children:["choice","_","parameter","_","specification"]}),(0,r.jsx)("a",{id:"S0306"}),(0,r.jsx)("code",{children:" ::= "}),(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.1#S0022",children:"defining_identifier"})}),(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(h.A,{children:"5"}),"\n",(0,r.jsx)(d.A,{children:(0,r.jsxs)(n.p,{children:[(0,r.jsxs)("code",{children:["exception","_","choice"]}),(0,r.jsx)("a",{id:"S0307"}),(0,r.jsx)("code",{children:" ::= "}),(0,r.jsxs)("em",{children:["exception","_"]}),(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," | ",(0,r.jsx)("strong",{children:"others"}),(0,r.jsx)("br",{})]})}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(h.A,{children:"5.a"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{children:"To be honest: "}),"\u201c",(0,r.jsx)("em",{children:"Handler"}),"\u201d is an abbreviation for \u201c",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0305",children:"exception_handler"})}),"\u201d.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(h.A,{children:"5.b/3"}),(0,r.jsx)(o.A,{items:["AI05-0299-1"]}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:["Within this clause, we sometimes abbreviate \u201c",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0307",children:"exception_choice"})}),"\u201d to \u201c",(0,r.jsx)("em",{children:"choice"}),"\u201d. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"legality-rules",children:"Legality Rules"}),"\n",(0,r.jsx)(h.A,{children:"5.1/4"}),"\n",(0,r.jsx)(o.A,{items:["AI12-0022-1"]}),"\n",(0,r.jsxs)("p",{children:["An ",(0,r.jsxs)("em",{children:["exception","_"]}),(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," of an ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0307",children:"exception_choice"})})," shall denote an exception.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(h.A,{children:"6"}),"\n",(0,r.jsxs)("p",{children:["A choice with an ",(0,r.jsxs)("em",{children:["exception","_"]}),(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," ",(0,r.jsx)("em",{children:"covers"})," the named exception. A choice with ",(0,r.jsx)("strong",{children:"others"})," covers all exceptions not named by previous choices of the same ",(0,r.jsx)("code",{children:(0,r.jsxs)("a",{href:"/docs/arm/AA-11/AA-11.2#S0304",children:["handled","_","sequence","_","of","_","statements"]})}),". Two choices in different ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0305",children:"exception_handler"})}),"s of the same ",(0,r.jsx)("code",{children:(0,r.jsxs)("a",{href:"/docs/arm/AA-11/AA-11.2#S0304",children:["handled","_","sequence","_","of","_","statements"]})})," shall not cover the same exception. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(h.A,{children:"6.a"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"ramification",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{}),"Two ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0307",children:"exception_choice"})}),"s of the same ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0305",children:"exception_handler"})})," may cover the same exception. For example, given two renaming declarations in separate packages for the same exception, one may nevertheless write, for example, \u201c",(0,r.jsx)("strong",{children:"when"})," Ada.Text","_","IO.Data","_","Error | My","_","Seq","_","IO.Data","_","Error =",">","\u201d.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(h.A,{children:"6.b"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:["An ",(0,r.jsx)("strong",{children:"others"})," choice even covers exceptions that are not visible at the place of the handler. Since exception raising is a dynamic activity, it is entirely possible for an ",(0,r.jsx)("strong",{children:"others"})," handler to handle an exception that it could not have named. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(h.A,{children:"7"}),"\n",(0,r.jsxs)("p",{children:["A choice with ",(0,r.jsx)("strong",{children:"others"})," is allowed only for the last handler of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0304",children:"handled_sequence_of_statements"})})," and as the only choice of that handler.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(h.A,{children:"8"}),"\n",(0,r.jsxs)("p",{children:["An ",(0,r.jsxs)("em",{children:["exception","_"]}),(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," of a choice shall not denote an exception declared in a generic formal package. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(h.A,{children:"8.a"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"reason",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{}),"This is because the compiler doesn't know the identity of such an exception, and thus can't enforce the coverage rules. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,r.jsx)(h.A,{children:"9"}),"\n",(0,r.jsxs)("p",{children:["A ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0306",children:"choice_parameter_specification"})})," declares a ",(0,r.jsx)("em",{children:"choice parameter"}),", which is a constant object of type Exception","_","Occurrence (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.4#Subclause_11.4.1",children:"11.4.1"}),"). During the handling of an exception occurrence, the choice parameter, if any, of the handler represents the exception occurrence that is being handled.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h4,{id:"dynamic-semantics",children:"Dynamic Semantics"}),"\n",(0,r.jsx)(h.A,{children:"10"}),"\n",(0,r.jsxs)("p",{children:["The execution of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0304",children:"handled_sequence_of_statements"})})," consists of the execution of the ",(0,r.jsx)("code",{children:(0,r.jsxs)("a",{href:"/docs/arm/AA-5/AA-5.1#S0166",children:["sequence","_","of","_","statements"]})}),". [The optional handlers are used to handle any exceptions that are propagated by the ",(0,r.jsx)("code",{children:(0,r.jsxs)("a",{href:"/docs/arm/AA-5/AA-5.1#S0166",children:["sequence","_","of","_","statements"]})}),".] ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(h.A,{children:"11"}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("em",{children:"Example of an exception handler:"})," ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(h.A,{children:"12/5"}),"\n",(0,r.jsx)(o.A,{items:["AI12-0178-1"]}),"\n",(0,r.jsx)(d.A,{language:"ada",children:(0,r.jsxs)(n.p,{children:["begin","\n","   Open(File, In","_",'File, "input.txt");   -- see ',(0,r.jsx)("a",{href:"/docs/arm/AA-A/AA-A.8#Subclause_A.8.2",children:"A.8.2"}),"\n","exception","\n","   when E : Name","_","Error =",">","\n",'      Put("Cannot open input file : ");',"\n","      Put","_","Line(Ada.Exceptions.Exception","_","Message(E));  -- see ",(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.4#Subclause_11.4.1",children:"11.4.1"}),"\n","      raise;","\n","end;","\n"]})}),"\n",(0,r.jsx)(a.A,{children:(0,r.jsx)(n.h4,{id:"extensions-to-ada-83",children:"Extensions to Ada 83"})}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(h.A,{children:"12.a"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:["The syntax rule for ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0305",children:"exception_handler"})})," is modified to allow a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0306",children:"choice_parameter_specification"})}),".",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(h.A,{children:"12.b/2"}),(0,r.jsx)(o.A,{items:["AI95-00114-01"]}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:["Different ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0307",children:"exception_choice"})}),"s of the same ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0305",children:"exception_handler"})})," may cover the same exception. This allows for \u201cwhen Numeric","_","Error | Constraint","_","Error =",">","\u201d even though Numeric","_","Error is a rename of Constraint","_","Error. This also allows one to \u201cwith\u201d two different I/O packages, and then write, for example, \u201cwhen Ada.Text","_","IO.Data","_","Error | My","_","Seq","_","IO.Data","_","Error =",">","\u201d even though these might both be renames of the same exception. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(a.A,{children:(0,r.jsx)(n.h4,{id:"wording-changes-from-ada-83",children:"Wording Changes from Ada 83"})}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(h.A,{children:"12.c"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:["The syntax rule for ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0304",children:"handled_sequence_of_statements"})})," is new. These are now used in all the places where handlers are allowed. This obviates the need to explain (in Clauses ",(0,r.jsx)("a",{href:"/docs/arm/AA-5/",children:"5"}),", ",(0,r.jsx)("a",{href:"/docs/arm/AA-6/",children:"6"}),", ",(0,r.jsx)("a",{href:"/docs/arm/AA-7/",children:"7"}),", and ",(0,r.jsx)("a",{href:"/docs/arm/AA-9/",children:"9"}),") what portions of the program are handled by the handlers. Note that there are more such cases in Ada 95.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(h.A,{children:"12.d"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:["The syntax rule for ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0306",children:"choice_parameter_specification"})})," is new. ",(0,r.jsx)("br",{})]})})]})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}}}]);