"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[4532],{3154:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>A,default:()=>j,frontMatter:()=>o,metadata:()=>h,toc:()=>m});var n=r(74848),a=r(28453),t=r(13842),d=r(91435),i=(r(21432),r(79162)),c=r(34421);const o={sidebar_position:41},A="5 Statements",h={id:"arm/AA-5/AA-5",title:"5 Statements",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-5/AA-5.mdx",sourceDirName:"arm/AA-5",slug:"/arm/AA-5/",permalink:"/docs/arm/AA-5/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41},sidebar:"referenceManualSidebar",previous:{title:"4.10 Image Attributes",permalink:"/docs/arm/AA-4/AA-4.10"},next:{title:"5.1 Simple and Compound Statements - Sequences of Statements",permalink:"/docs/arm/AA-5/AA-5.1"}},l={},m=[{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4}];function x(e){const s={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"5-statements",children:"5 Statements"}),"\n",(0,n.jsx)(s.admonition,{type:"danger",children:(0,n.jsxs)(s.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.jsx)(s.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n","\n",(0,n.jsx)(i.A,{children:"1"}),"\n",(0,n.jsxs)("p",{children:["[A ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-5/AA-5.1#S0167",children:"statement"})})," defines an action to be performed upon its execution.]",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(i.A,{children:"2/5"}),"\n",(0,n.jsx)(c.A,{items:["AI95-00318-02","AI05-0299-1","AI12-0449-1"]}),"\n",(0,n.jsxs)("p",{children:["[This clause describes the general rules applicable to all ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-5/AA-5.1#S0167",children:"statement"})}),"s. Some ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-5/AA-5.1#S0167",children:"statement"})}),"s are discussed in later clauses: ",(0,n.jsx)("code",{children:(0,n.jsxs)("a",{href:"/docs/arm/AA-6/AA-6.4#S0217",children:["Procedure","_","call","_","statement"]})}),"s and return statements are described in Clause ",(0,n.jsx)("a",{href:"/docs/arm/AA-6/",children:"6"}),", \u201c",(0,n.jsx)("a",{href:"/docs/arm/AA-6/",children:"Subprograms"}),"\u201d. ",(0,n.jsx)("code",{children:(0,n.jsxs)("a",{href:"/docs/arm/AA-9/AA-9.5#S0264",children:["Entry","_","call","_","statement"]})}),"s, ",(0,n.jsx)("code",{children:(0,n.jsxs)("a",{href:"/docs/arm/AA-9/AA-9.5#S0265",children:["requeue","_","statement"]})}),"s, ",(0,n.jsx)("code",{children:(0,n.jsxs)("a",{href:"/docs/arm/AA-9/AA-9.6#S0266",children:["delay","_","statement"]})}),"s, ",(0,n.jsx)("code",{children:(0,n.jsxs)("a",{href:"/docs/arm/AA-9/AA-9.5#S0258",children:["accept","_","statement"]})}),"s, ",(0,n.jsx)("code",{children:(0,n.jsxs)("a",{href:"/docs/arm/AA-9/AA-9.7#S0269",children:["select","_","statement"]})}),"s, and ",(0,n.jsx)("code",{children:(0,n.jsxs)("a",{href:"/docs/arm/AA-9/AA-9.8#S0284",children:["abort","_","statement"]})}),"s are described in Clause ",(0,n.jsx)("a",{href:"/docs/arm/AA-9/",children:"9"}),", \u201c",(0,n.jsx)("a",{href:"/docs/arm/AA-9/",children:"Tasks and Synchronization"}),"\u201d. ",(0,n.jsx)("code",{children:(0,n.jsxs)("a",{href:"/docs/arm/AA-11/AA-11.3#S0308",children:["Raise","_","statement"]})}),"s are described in Clause ",(0,n.jsx)("a",{href:"/docs/arm/AA-11/",children:"11"}),", \u201c",(0,n.jsx)("a",{href:"/docs/arm/AA-11/",children:"Exceptions"}),"\u201d, and ",(0,n.jsx)("code",{children:(0,n.jsxs)("a",{href:"/docs/arm/AA-13/AA-13.8#S0357",children:["code","_","statement"]})}),"s in Clause ",(0,n.jsx)("a",{href:"/docs/arm/AA-13/",children:"13"}),", \u201c",(0,n.jsx)("a",{href:"/docs/arm/AA-13/",children:"Representation Issues"}),"\u201d. The remaining forms of ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-5/AA-5.1#S0167",children:"statement"})}),"s are presented in this clause.] ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(d.A,{children:(0,n.jsx)(s.h4,{id:"wording-changes-from-ada-83",children:"Wording Changes from Ada 83"})}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(i.A,{children:"2.a/2"}),(0,n.jsx)(c.A,{items:["AI95-00318-02"]}),(0,n.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["The description of return statements has been moved to ",(0,n.jsx)("a",{href:"/docs/arm/AA-6/AA-6.5",children:"6.5"}),", \u201c",(0,n.jsx)("a",{href:"/docs/arm/AA-6/AA-6.5",children:"Return Statements"}),"\u201d, so that it is closer to the description of subprograms. ",(0,n.jsx)("br",{})]})})]})]})}function j(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}}}]);