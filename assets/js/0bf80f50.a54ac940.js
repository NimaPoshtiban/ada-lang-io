"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[846],{2902:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>c,default:()=>A,frontMatter:()=>d,metadata:()=>l,toc:()=>u});var t=n(74848),i=n(28453),a=n(13842),r=n(91435),o=(n(21432),n(79162));n(34421);const d={sidebar_position:197},c="J.4 The Constrained Attribute",l={id:"arm/AA-J/AA-J.4",title:"J.4 The Constrained Attribute",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-J/AA-J.4.mdx",sourceDirName:"arm/AA-J",slug:"/arm/AA-J/AA-J.4",permalink:"/docs/arm/AA-J/AA-J.4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:197,frontMatter:{sidebar_position:197},sidebar:"referenceManualSidebar",previous:{title:"J.3 Reduced Accuracy Subtypes",permalink:"/docs/arm/AA-J/AA-J.3"},next:{title:"J.5 ASCII",permalink:"/docs/arm/AA-J/AA-J.5"}},h={},u=[{value:"Static Semantics",id:"static-semantics",level:4}];function p(e){const s={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"j4-the-constrained-attribute",children:"J.4 The Constrained Attribute"}),"\n",(0,t.jsx)(s.admonition,{type:"danger",children:(0,t.jsxs)(s.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,t.jsx)(s.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n","\n",(0,t.jsx)(s.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,t.jsx)(o.A,{children:"1"}),"\n",(0,t.jsxs)("p",{children:["For every private subtype S, the following attribute is defined: ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(o.A,{children:"1.a"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"discussion",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)("strong",{}),"This includes generic formal private subtypes. ",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(o.A,{children:"2"}),"\n",(0,t.jsxs)("dt",{children:[(0,t.jsx)("br",{}),"S'Constrained"]}),"\n",(0,t.jsx)("dl",{children:(0,t.jsxs)("dd",{children:["Yields the value False if S denotes an unconstrained nonformal private subtype with discriminants; also yields the value False if S denotes a generic formal private subtype, and the associated actual subtype is either an unconstrained subtype with discriminants or an unconstrained array subtype; yields the value True otherwise. The value of this attribute is of the predefined subtype Boolean. ",(0,t.jsx)("br",{})]})}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(o.A,{children:"2.a"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"reason",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)("strong",{}),"Because Ada 95 has ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-3/AA-3.7#S0060",children:"unknown_discriminant_part"})}),"s, the Constrained attribute of private subtypes is obsolete. This is fortunate, since its Ada 83 definition was confusing, as explained below. Because this attribute is obsolete, we do not bother to extend its definition to private extensions.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(o.A,{children:"2.b"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(s.p,{children:["The Constrained attribute of an object is ",(0,t.jsx)("em",{children:"not"})," obsolete.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(o.A,{children:"2.c"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(s.p,{children:["Note well: S'Constrained matches the Ada 95 definition of \u201cconstrained\u201d only for composite subtypes. For elementary subtypes, S'Constrained is always true, whether or not S is constrained. (The Constrained attribute of an object does not have this problem, as it is only defined for objects of a discriminated type.) So one should think of its designator as being 'Constrained","_","Or","_","Elementary. ",(0,t.jsx)("br",{})]})})]})]})}function A(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}}}]);