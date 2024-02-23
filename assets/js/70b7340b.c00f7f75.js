"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1892],{13796:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>x,contentTitle:()=>h,default:()=>A,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var i=r(74848),s=r(28453),a=r(13842),t=r(91435),o=(r(21432),r(79162)),c=r(34421);const d={sidebar_position:88},h="11 Exceptions",l={id:"arm/AA-11/AA-11",title:"11 Exceptions",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-11/AA-11.mdx",sourceDirName:"arm/AA-11",slug:"/arm/AA-11/",permalink:"/docs/arm/AA-11/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:88,frontMatter:{sidebar_position:88},sidebar:"referenceManualSidebar",previous:{title:"10.2 Program Execution",permalink:"/docs/arm/AA-10/AA-10.2"},next:{title:"11.1 Exception Declarations",permalink:"/docs/arm/AA-11/AA-11.1"}},x={},p=[{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4}];function m(e){const n={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"11-exceptions",children:"11 Exceptions"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,i.jsx)(n.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n","\n",(0,i.jsx)(o.A,{children:"1/3"}),"\n",(0,i.jsx)(c.A,{items:["AI05-0299-1"]}),"\n",(0,i.jsxs)("p",{children:["[This clause defines the facilities for dealing with errors or other exceptional situations that arise during program execution.] An ",(0,i.jsx)("em",{children:"exception"})," represents a kind of exceptional situation; an occurrence of such a situation (at run time) is called an ",(0,i.jsx)("em",{children:"exception occurrence"}),". [ To ",(0,i.jsx)("em",{children:"raise"})," an exception is to abandon normal program execution so as to draw attention to the fact that the corresponding situation has arisen. Performing some actions in response to the arising of an exception is called ",(0,i.jsx)("em",{children:"handling"})," the exception. ]",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(o.A,{children:"1.a"}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("strong",{children:"To be honest: "}),"...or handling the exception occurrence. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(o.A,{children:"1.b"}),(0,i.jsx)(a.A,{type:"aarm",aarm:"ramification",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("strong",{}),"For example, an exception End","_","Error might represent error situations in which an attempt is made to read beyond end-of-file. During the execution of a partition, there might be numerous occurrences of this exception. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(o.A,{children:"1.c/5"}),(0,i.jsx)(c.A,{items:["AI12-0426-1"]}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("strong",{children:"To be honest: "}),"When the meaning is clear from the context, we sometimes use \u201c",(0,i.jsx)("em",{children:"occurrence"}),"\u201d as a shorthand for \u201cexception occurrence\u201d. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(o.A,{children:"1.d/5"}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("strong",{children:"Term entry: "}),(0,i.jsx)("strong",{children:"exception"})," \u2014 kind of exceptional situation",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(o.A,{children:"1.e/5"}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("strong",{children:"Term entry: "}),(0,i.jsx)("strong",{children:"exception occurrence"})," \u2014 run-time occurrence of an exceptional situation",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(o.A,{children:"2/3"}),"\n",(0,i.jsx)(c.A,{items:["AI05-0043-1","AI05-0258-1"]}),"\n",(0,i.jsxs)("p",{children:["[An ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-11/AA-11.1#S0303",children:"exception_declaration"})})," declares a name for an exception. An exception can be raised explicitly (for example, by a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-11/AA-11.3#S0308",children:"raise_statement"})}),") or implicitly (for example, by the failure of a language-defined check). When an exception arises, control can be transferred to a user-provided ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-11/AA-11.2#S0305",children:"exception_handler"})})," at the end of a ",(0,i.jsx)("code",{children:(0,i.jsxs)("a",{href:"../AA-11/AA-11.2#S0304",children:["handled","_","sequence","_","of","_","statements"]})}),", or it can be propagated to a dynamically enclosing execution.] ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(t.A,{children:(0,i.jsx)(n.h4,{id:"wording-changes-from-ada-83",children:"Wording Changes from Ada 83"})}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(o.A,{children:"2.a"}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:["We are more explicit about the difference between an exception and an occurrence of an exception. This is necessary because we now have a type (Exception","_","Occurrence) that represents exception occurrences, so the program can manipulate them. Furthermore, we say that when an exception is propagated, it is the same occurrence that is being propagated (as opposed to a new occurrence of the same exception). The same issue applies to a re-raise statement. In order to understand these semantics, we have to make this distinction. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(t.A,{children:(0,i.jsx)(n.h4,{id:"wording-changes-from-ada-2005",children:"Wording Changes from Ada 2005"})}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(o.A,{children:"2.b/3"}),(0,i.jsx)(c.A,{items:["AI05-0043-1"]}),(0,i.jsx)(a.A,{type:"aarm",aarm:"correction",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("strong",{})," Generalized the introductory description of how an exception can be raised so that it does not appear to cover all of the cases. ",(0,i.jsx)("br",{})]})})]})]})}function A(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}}}]);