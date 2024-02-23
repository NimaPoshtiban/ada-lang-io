"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[447],{94072:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>A,contentTitle:()=>l,default:()=>j,frontMatter:()=>h,metadata:()=>u,toc:()=>m});var t=s(74848),a=s(28453),i=s(13842),r=s(91435),o=s(21432),c=s(79162),d=s(34421);const h={sidebar_position:139},l="A.19 The Package Locales",u={id:"arm/AA-A/AA-A.19",title:"A.19 The Package Locales",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-A/AA-A.19.mdx",sourceDirName:"arm/AA-A",slug:"/arm/AA-A/AA-A.19",permalink:"/docs/arm/AA-A/AA-A.19",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:139,frontMatter:{sidebar_position:139},sidebar:"referenceManualSidebar",previous:{title:"A.18 Containers",permalink:"/docs/arm/AA-A/AA-A.18"},next:{title:"Annex B Interface to Other Languages",permalink:"/docs/arm/AA-B/"}},A={},m=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005",level:4},{value:"Inconsistencies With Ada 2012",id:"inconsistencies-with-ada-2012",level:4}];function x(e){const n={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"a19-the-package-locales",children:"A.19 The Package Locales"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,t.jsx)(n.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n","\n",(0,t.jsx)(c.A,{children:"1/3"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0127-2","AI05-0248-1"]}),"\n",(0,t.jsxs)("p",{children:["A ",(0,t.jsx)("em",{children:"locale"})," identifies a geopolitical place or region and its associated language, which can be used to determine other internationalization-related characteristics. ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,t.jsx)(c.A,{children:"2/3"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0127-2"]}),"\n",(0,t.jsxs)("p",{children:["The library package Locales has the following declaration: ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(c.A,{children:"3/5"}),"\n",(0,t.jsx)(d.A,{items:["AI12-0414-1"]}),"\n",(0,t.jsxs)(o.A,{language:"ada",children:[(0,t.jsxs)(n.p,{children:["package Ada.Locales","\n","   with Preelaborate, Remote","_","Types is","\n","\n",(0,t.jsx)(c.A,{children:"4/4"})]}),(0,t.jsx)(d.A,{items:["AI12-0037-1"]}),(0,t.jsxs)(n.p,{children:["type Language","_","Code is new String (1 .. 3)","\n","      with Dynamic","_","Predicate =",">","\n","         (for all E of Language","_","Code =",">"," E in 'a' .. 'z');","\n","   type Country","_","Code is new String (1 .. 2)","\n","      with Dynamic","_","Predicate =",">","\n","         (for all E of Country","_","Code  =",">"," E in 'A' .. 'Z');","\n"]})]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(c.A,{children:"4.a/4"}),(0,t.jsx)(d.A,{items:["AI12-0037-1"]}),(0,t.jsx)(i.A,{type:"aarm",aarm:"discussion",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)("strong",{}),"These types are derived from type String so that they can easily be converted to or from type String. That's important if one of these values needs to be input or displayed (via Text","_","IO, perhaps). We use the predicate to ensure that only possible component values are used. Ada does not allow converting between unrelated types with components that don't statically match, so we cannot declare new types with constrained components if we want conversions to or from type String. ",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(c.A,{children:"5/3"}),"\n",(0,t.jsx)(o.A,{language:"ada",children:(0,t.jsxs)(n.p,{children:["Language","_","Unknown : constant Language","_",'Code := "und";',"\n","   Country","_","Unknown : constant Country","_",'Code := "ZZ";',"\n","\n",(0,t.jsx)(c.A,{children:"6/3"}),"\nfunction Language return Language","_","Code;","\n","   function Country return Country","_","Code;","\n","\n",(0,t.jsx)(c.A,{children:"7/3"}),"\nend Ada.Locales;","\n"]})}),"\n",(0,t.jsx)(c.A,{children:"8/3"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0127-2","AI05-0233-1"]}),"\n",(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("em",{children:"active locale"})," is the locale associated with the partition of the current task.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(c.A,{children:"8.a/3"}),(0,t.jsx)(d.A,{items:["AI05-0233-1"]}),(0,t.jsx)(i.A,{type:"aarm",aarm:"implementation-note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)("strong",{}),"Some environments define both a system locale and the locale of the current user. For such environments, the active locale is that of current user if any; otherwise (as in a partition running on a server without a user), the system locale should be used. ",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(c.A,{children:"9/5"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0127-2","AI12-0446-1"]}),"\n",(0,t.jsxs)("p",{children:[(0,t.jsx)("em",{children:"This paragraph was deleted."}),(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(c.A,{children:"10/5"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0127-2","AI12-0446-1"]}),"\n",(0,t.jsxs)("p",{children:[(0,t.jsx)("em",{children:"This paragraph was deleted."}),(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(c.A,{children:"11/5"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0127-2","AI05-0248-1","AI12-0446-1"]}),"\n",(0,t.jsxs)("p",{children:["Function Language returns the code of the language associated with the active locale. If the Language","_","Code associated with the active locale cannot be determined from the environment, then Language returns Language","_","Unknown. Otherwise, the result is a lower-case string representation of an ISO 639-3:2007 alpha-3 code that identifies a language.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(c.A,{children:"11.a/3"}),(0,t.jsx)(i.A,{type:"aarm",aarm:"discussion",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)("strong",{}),'Some common language codes are: "eng" \u2013 English; "fra" \u2013 French; "deu" \u2013 German; "zho" \u2013 Chinese. These are the same codes as used by POSIX systems. We considered including constants for the most common languages, but that was rejected as the likely source of continual arguments about the constant names and which languages are important enough to include. ',(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(c.A,{children:"12/5"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0127-2","AI05-0248-1","AI12-0446-1","AI12-0450-1"]}),"\n",(0,t.jsxs)("p",{children:["Function Country returns the code of the country associated with the active locale. If the Country","_","Code associated with the active locale cannot be determined from the environment, then Country returns Country","_","Unknown. Otherwise, the result is an upper-case string representation of an ISO 3166-1:2020 alpha-2 code that identifies a country.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(c.A,{children:"12.a/3"}),(0,t.jsx)(i.A,{type:"aarm",aarm:"discussion",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)("strong",{}),'Some common country codes are: "CA" \u2013 Canada; "FR" \u2013 France; "DE" \u2013 Germany; "IT" \u2013 Italy; "ES" \u2013 Spain; "GB" \u2013 United Kingdom; "US" \u2013 United States. These are the same codes as used by POSIX systems. We didn\'t include any country constants for the same reasons that we didn\'t include any language constants. ',(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(r.A,{children:(0,t.jsx)(n.h4,{id:"extensions-to-ada-2005",children:"Extensions to Ada 2005"})}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(c.A,{children:"12.b/3"}),(0,t.jsx)(d.A,{items:["AI05-0127-2","AI05-0233-1"]}),(0,t.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(n.p,{children:["Package Locales is new. ",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(r.A,{children:(0,t.jsx)(n.h4,{id:"inconsistencies-with-ada-2012",children:"Inconsistencies With Ada 2012"})}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(c.A,{children:"12.c/4"}),(0,t.jsx)(d.A,{items:["AI12-0037-1"]}),(0,t.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)("strong",{children:"Corrigendum:"})," Types Language","_","Code and Country","_","Code are defined with predicates rather than constrained components so that they can be converted to/from type String. This changes the exception raised from Constraint","_","Error to Assertion","_","Error if an assignment is attempted with an incorrect value. This could only matter if there is a handler specifically for Constraint","_","Error surrounding this assignment; as this exception raise is certainly caused by a bug (why would anyone want to use invalid language or country codes?), such a handler seems very unlikely. (In addition, this is a new Ada 2012 package, so there is not likely to be a lot of code using it.) ",(0,t.jsx)("br",{})]})})]})]})}function j(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}}}]);