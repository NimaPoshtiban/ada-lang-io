"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[4972],{28916:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>A,contentTitle:()=>l,default:()=>j,frontMatter:()=>d,metadata:()=>h,toc:()=>x});var t=n(74848),r=n(28453),a=n(13842),c=n(91435),o=n(21432),i=n(79162);n(34421);const d={sidebar_position:49},l="5.8 Goto Statements",h={id:"arm/AA-5/AA-5.8",title:"5.8 Goto Statements",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-5/AA-5.8.mdx",sourceDirName:"arm/AA-5",slug:"/arm/AA-5/AA-5.8",permalink:"/docs/arm/AA-5/AA-5.8",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:49,frontMatter:{sidebar_position:49},sidebar:"referenceManualSidebar",previous:{title:"5.7 Exit Statements",permalink:"/docs/arm/AA-5/AA-5.7"},next:{title:"6 Subprograms",permalink:"/docs/arm/AA-6/"}},A={},x=[{value:"Syntax",id:"syntax",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4}];function m(e){const s={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"58-goto-statements",children:"5.8 Goto Statements"}),"\n",(0,t.jsx)(s.admonition,{type:"danger",children:(0,t.jsxs)(s.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,t.jsx)(s.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n","\n",(0,t.jsx)(i.A,{children:"1"}),"\n",(0,t.jsxs)("p",{children:["[A ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.8#S0194",children:"goto_statement"})})," specifies an explicit transfer of control from this ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.1#S0167",children:"statement"})})," to a target statement with a given label.] ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(s.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(i.A,{children:"2"}),"\n",(0,t.jsx)(o.A,{children:(0,t.jsxs)(s.p,{children:[(0,t.jsxs)("code",{children:["goto","_","statement"]}),(0,t.jsx)("a",{id:"S0194"}),(0,t.jsx)("code",{children:" ::= "}),(0,t.jsx)("strong",{children:"goto"})," ",(0,t.jsxs)("em",{children:["label","_"]}),(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})}),";",(0,t.jsx)("br",{})]})}),"\n",(0,t.jsx)(s.h4,{id:"name-resolution-rules",children:"Name Resolution Rules"}),"\n",(0,t.jsx)(i.A,{children:"3"}),"\n",(0,t.jsxs)("p",{children:["The ",(0,t.jsxs)("em",{children:["label","_"]}),(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," shall resolve to denote a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.1#S0171",children:"label"})}),"; the ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.1#S0167",children:"statement"})})," with that ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.1#S0171",children:"label"})})," is the ",(0,t.jsx)("em",{children:"target statement"}),". ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(s.h4,{id:"legality-rules",children:"Legality Rules"}),"\n",(0,t.jsx)(i.A,{children:"4"}),"\n",(0,t.jsxs)("p",{children:["The innermost ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.1#S0166",children:"sequence_of_statements"})})," that encloses the target statement shall also enclose the ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.8#S0194",children:"goto_statement"})}),". Furthermore, if a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.8#S0194",children:"goto_statement"})})," is enclosed by an ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.5#S0258",children:"accept_statement"})})," or a body, then the target statement shall not be outside this enclosing construct. ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(c.A,{children:[(0,t.jsx)(i.A,{children:"4.a"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"ramification",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)("strong",{}),"The ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.8#S0194",children:"goto_statement"})})," can be a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.1#S0167",children:"statement"})})," of an inner ",(0,t.jsxs)("code",{children:["sequence","_"]}),".",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsxs)(c.A,{children:[(0,t.jsx)(i.A,{children:"4.b"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(s.p,{children:["It follows from the second rule that if the target ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.1#S0167",children:"statement"})})," is enclosed by such a construct, then the ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.8#S0194",children:"goto_statement"})})," cannot be outside. ",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"dynamic-semantics",children:"Dynamic Semantics"}),"\n",(0,t.jsx)(i.A,{children:"5"}),"\n",(0,t.jsxs)("p",{children:["The execution of a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.8#S0194",children:"goto_statement"})})," transfers control to the target statement, completing the execution of any ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.1#S0169",children:"compound_statement"})})," that encloses the ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.8#S0194",children:"goto_statement"})})," but does not enclose the target. ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(c.A,{children:[(0,t.jsx)(i.A,{children:"6"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(s.p,{children:["NOTE   The above rules allow transfer of control to a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.1#S0167",children:"statement"})})," of an enclosing ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.1#S0166",children:"sequence_of_statements"})})," but not the reverse. Similarly, they prohibit transfers of control such as between alternatives of a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0176",children:"case_statement"})}),", ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.3#S0175",children:"if_statement"})}),", or ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.7#S0269",children:"select_statement"})}),"; between ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0305",children:"exception_handler"})}),"s; or from an ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-11/AA-11.2#S0305",children:"exception_handler"})})," of a ",(0,t.jsx)("code",{children:(0,t.jsxs)("a",{href:"/docs/arm/AA-11/AA-11.2#S0304",children:["handled","_","sequence","_","of","_","statements"]})})," back to its ",(0,t.jsx)("code",{children:(0,t.jsxs)("a",{href:"/docs/arm/AA-5/AA-5.1#S0166",children:["sequence","_","of","_","statements"]})}),". ",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(i.A,{children:"7"}),"\n",(0,t.jsxs)("p",{children:[(0,t.jsx)("em",{children:"Example of a loop containing a goto statement:"})," ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(i.A,{children:"8"}),"\n",(0,t.jsx)(o.A,{language:"ada",children:(0,t.jsxs)(s.p,{children:["<","<","Sort",">",">","\n","for I in 1 .. N-1 loop","\n","   if A(I) ",">"," A(I+1) then","\n","      Exchange(A(I), A(I+1));","\n","      goto Sort;","\n","   end if;","\n","end loop;","\n"]})})]})}function j(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}}}]);