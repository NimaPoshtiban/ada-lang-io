"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[4718],{30311:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>p,contentTitle:()=>o,default:()=>j,frontMatter:()=>l,metadata:()=>A,toc:()=>x});var i=n(74848),r=n(28453),a=n(13842),t=n(91435),c=n(21432),h=n(79162),d=n(34421);const l={sidebar_position:203},o="J.10 Specific Suppression of Checks",A={id:"arm/AA-J/AA-J.10",title:"J.10 Specific Suppression of Checks",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-J/AA-J.10.mdx",sourceDirName:"arm/AA-J",slug:"/arm/AA-J/AA-J.10",permalink:"/docs/arm/AA-J/AA-J.10",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:203,frontMatter:{sidebar_position:203},sidebar:"referenceManualSidebar",previous:{title:"J.9 The Storage_Size Attribute",permalink:"/docs/arm/AA-J/AA-J.9"},next:{title:"J.11 The Class Attribute of Untagged Incomplete Types",permalink:"/docs/arm/AA-J/AA-J.11"}},p={},x=[{value:"Syntax",id:"syntax",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}];function m(e){const s={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"j10-specific-suppression-of-checks",children:"J.10 Specific Suppression of Checks"}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsxs)(s.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,i.jsx)(s.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n","\n",(0,i.jsx)(h.A,{children:"1/2"}),"\n",(0,i.jsx)(d.A,{items:["AI95-00224-01"]}),"\n",(0,i.jsxs)("p",{children:["Pragma Suppress can be used to suppress checks on specific entities. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(s.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(h.A,{children:"2/2"}),"\n",(0,i.jsx)(d.A,{items:["AI95-00224-01"]}),"\n",(0,i.jsxs)("p",{class:"Indented2",children:["The form of a specific Suppress ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-2/AA-2.8#S0019",children:"pragma"})})," is as follows: ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(h.A,{children:"3/2"}),"\n",(0,i.jsxs)("p",{class:"Indented2",children:["  ",(0,i.jsx)("strong",{children:"pragma"})," Suppress(",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-2/AA-2.3#S0002",children:"identifier"})}),", [On =",">","] ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-4/AA-4.1#S0091",children:"name"})}),"); ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(s.h4,{id:"legality-rules",children:"Legality Rules"}),"\n",(0,i.jsx)(h.A,{children:"4/2"}),"\n",(0,i.jsx)(d.A,{items:["AI95-00224-01"]}),"\n",(0,i.jsxs)("p",{children:["The ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-2/AA-2.3#S0002",children:"identifier"})})," shall be the name of a check (see ",(0,i.jsx)("a",{href:"../AA-11/AA-11.5",children:"11.5"}),"). The ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-4/AA-4.1#S0091",children:"name"})})," shall statically denote some entity.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(h.A,{children:"5/2"}),"\n",(0,i.jsx)(d.A,{items:["AI95-00224-01"]}),"\n",(0,i.jsxs)("p",{children:["For a specific Suppress ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-2/AA-2.8#S0019",children:"pragma"})})," that is immediately within a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-7/AA-7.1#S0230",children:"package_specification"})}),", the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-4/AA-4.1#S0091",children:"name"})})," shall denote an entity (or several overloaded subprograms) declared immediately within the ",(0,i.jsx)("code",{children:(0,i.jsxs)("a",{href:"../AA-7/AA-7.1#S0230",children:["package","_","specification"]})}),". ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(s.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,i.jsx)(h.A,{children:"6/2"}),"\n",(0,i.jsx)(d.A,{items:["AI95-00224-01"]}),"\n",(0,i.jsxs)("p",{children:["A specific Suppress ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-2/AA-2.8#S0019",children:"pragma"})})," applies to the named check from the place of the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-2/AA-2.8#S0019",children:"pragma"})})," to the end of the innermost enclosing declarative region, or, if the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-2/AA-2.8#S0019",children:"pragma"})})," is given in a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-7/AA-7.1#S0230",children:"package_specification"})}),", to the end of the scope of the named entity. The ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-2/AA-2.8#S0019",children:"pragma"})})," applies only to the named entity, or, for a subtype, on objects and values of its type. A specific Suppress ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-2/AA-2.8#S0019",children:"pragma"})})," suppresses the named check for any entities to which it applies (see ",(0,i.jsx)("a",{href:"../AA-11/AA-11.5",children:"11.5"}),"). Which checks are associated with a specific entity is not defined by this document.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(h.A,{children:"6.a/2"}),(0,i.jsx)(a.A,{type:"aarm",aarm:"discussion",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("strong",{}),"The language doesn't specify exactly which entities control whether a check is performed. For example, in ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(h.A,{children:"6.b"}),(0,i.jsx)(c.A,{language:"ada",children:(0,i.jsxs)(s.p,{children:["pragma Suppress (Range","_","Check, On =",">"," A);","\n","A := B;","\n"]})})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(h.A,{children:"6.c"}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["whether or not the range check is performed is not specified. The compiler may require that checks are suppressed on B or on the type of A in order to omit the range check. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"implementation-permissions",children:"Implementation Permissions"}),"\n",(0,i.jsx)(h.A,{children:"7/2"}),"\n",(0,i.jsx)(d.A,{items:["AI95-00224-01"]}),"\n",(0,i.jsxs)("p",{children:["An implementation is allowed to place restrictions on specific Suppress ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-2/AA-2.8#S0019",children:"pragma"})}),"s. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(h.A,{children:"8/5"}),(0,i.jsx)(d.A,{items:["AI95-00224-01","AI12-0440-1"]}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["NOTE   An implementation can support a similar On parameter on ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-2/AA-2.8#S0019",children:"pragma"})})," Unsuppress (see ",(0,i.jsx)("a",{href:"../AA-11/AA-11.5",children:"11.5"}),"). ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(t.A,{children:(0,i.jsx)(s.h4,{id:"wording-changes-from-ada-95",children:"Wording Changes from Ada 95"})}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(h.A,{children:"8.a/3"}),(0,i.jsx)(d.A,{items:["AI95-00224-01","AI05-0299-1"]}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["This subclause is new. This feature was moved here because it is important for pragma Unsuppress that there be an unambiguous meaning for each checking pragma. For instance, in the example ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(h.A,{children:"8.b"}),(0,i.jsx)(c.A,{language:"ada",children:(0,i.jsxs)(s.p,{children:["pragma Suppress (Range","_","Check);","\n","pragma Unsuppress (Range","_","Check, On =",">"," A);","\n","A := B;","\n"]})})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(h.A,{children:"8.c"}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["the user needs to be able to depend on the range check being made on the assignment. But a compiler survey showed that the interpretation of this feature varied widely; trying to define this carefully was likely to cause a lot of user and implementer pain. Thus the feature was moved here, to emphasize that its use is not portable. ",(0,i.jsx)("br",{})]})})]})]})}function j(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}}}]);