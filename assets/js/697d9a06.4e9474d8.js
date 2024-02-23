"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[2486],{22836:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>m,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>h,toc:()=>p});var t=n(74848),a=n(28453),r=n(13842),i=n(91435),o=(n(21432),n(79162)),c=n(34421);const l={sidebar_position:154},d="Annex D Real-Time Systems",h={id:"arm/AA-D/AA-D",title:"Annex D Real-Time Systems",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-D/AA-D.mdx",sourceDirName:"arm/AA-D",slug:"/arm/AA-D/",permalink:"/docs/arm/AA-D/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:154,frontMatter:{sidebar_position:154},sidebar:"referenceManualSidebar",previous:{title:"C.7 Task Information",permalink:"/docs/arm/AA-C/AA-C.7"},next:{title:"D.1 Task Priorities",permalink:"/docs/arm/AA-D/AA-D.1"}},m={},p=[{value:"Metrics",id:"metrics",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4}];function u(e){const s={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"annex-d-real-time-systems",children:"Annex D Real-Time Systems"}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsxs)(s.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,t.jsx)(s.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n","\n",(0,t.jsx)(o.A,{children:"1/5"}),"\n",(0,t.jsx)(c.A,{items:["AI12-0404-1"]}),"\n",(0,t.jsxs)("p",{children:["This Annex specifies additional characteristics of Ada implementations intended for real-time systems software. To conform to this Annex, an implementation shall also conform to ",(0,t.jsx)("a",{href:"../AA-C/",children:"Annex C"}),", \u201c",(0,t.jsx)("a",{href:"../AA-C/",children:"Systems Programming"}),"\u201d. ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(s.h4,{id:"metrics",children:"Metrics"}),"\n",(0,t.jsx)(o.A,{children:"2"}),"\n",(0,t.jsxs)("p",{children:["The metrics are documentation requirements; an implementation shall document the values of the language-defined metrics for at least one configuration [of hardware or an underlying system] supported by the implementation, and shall document the details of that configuration. ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(o.A,{children:"2.a/2"}),(0,t.jsxs)(r.A,{type:"aarm",aarm:"note",children:[(0,t.jsx)("em",{children:"This paragraph was deleted."}),(0,t.jsx)("br",{})]})]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(o.A,{children:"2.a.1/2"}),(0,t.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)("strong",{children:"Documentation Requirement: "}),"The details of the configuration used to generate the values of all metrics.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(o.A,{children:"2.b"}),(0,t.jsx)(r.A,{type:"aarm",aarm:"reason",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)("strong",{}),"The actual values of the metrics are likely to depend on hardware configuration details that are variable and generally outside the control of a compiler vendor. ",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(o.A,{children:"3"}),"\n",(0,t.jsxs)("p",{children:["The metrics do not necessarily yield a simple number. [For some, a range is more suitable, for others a formula dependent on some parameter is appropriate, and for others, it may be more suitable to break the metric into several cases.] Unless specified otherwise, the metrics in this annex are expressed in processor clock cycles. For metrics that require documentation of an upper bound, if there is no upper bound, the implementation shall report that the metric is unbounded. ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(o.A,{children:"3.a"}),(0,t.jsx)(r.A,{type:"aarm",aarm:"discussion",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)("strong",{}),"There are several good reasons to specify metrics in seconds; there are however equally good reasons to specify them in processor clock cycles. In defining the metrics, we have tried to strike a balance on a case-by-case basis.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(o.A,{children:"3.b"}),(0,t.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(s.p,{children:["It has been suggested that all metrics should be given names, so that \u201cdata-sheets\u201d could be formulated and published by vendors. However the paragraph number can serve that purpose. ",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(o.A,{children:"4"}),(0,t.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(s.p,{children:["NOTE 1   The specification of the metrics makes a distinction between upper bounds and simple execution times. Where something is just specified as \u201cthe execution time of\u201d a piece of code, this leaves one the freedom to choose a nonpathological case. This kind of metric is of the form \u201cthere exists a program such that the value of the metric is V\u201d. Conversely, the meaning of upper bounds is \u201cthere is no program such that the value of the metric is greater than V\u201d. This kind of metric can only be partially tested, by finding the value of V for one or more test programs.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(o.A,{children:"5"}),(0,t.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(s.p,{children:["NOTE 2   The metrics do not cover the whole language; they are limited to features that are specified in ",(0,t.jsx)("a",{href:"../AA-C/",children:"Annex C"}),", \u201c",(0,t.jsx)("a",{href:"../AA-C/",children:"Systems Programming"}),"\u201d and in this Annex. The metrics are intended to provide guidance to potential users as to whether a particular implementation of such a feature is going to be adequate for a particular real-time application. As such, the metrics are aimed at known implementation choices that can result in significant performance differences.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(o.A,{children:"6"}),(0,t.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(s.p,{children:["NOTE 3   The purpose of the metrics is not necessarily to provide fine-grained quantitative results or to serve as a comparison between different implementations on the same or different platforms. Instead, their goal is rather qualitative; to define a standard set of approximate values that can be measured and used to estimate the general suitability of an implementation, or to evaluate the comparative utility of certain features of an implementation for a particular real-time application.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(i.A,{children:(0,t.jsx)(s.h4,{id:"extensions-to-ada-83",children:"Extensions to Ada 83"})}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(o.A,{children:"6.a"}),(0,t.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(s.p,{children:["This Annex is new to Ada 95. ",(0,t.jsx)("br",{})]})})]})]})}function x(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}}}]);