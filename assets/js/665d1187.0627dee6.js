"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[73],{51805:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>A,contentTitle:()=>h,default:()=>p,frontMatter:()=>l,metadata:()=>x,toc:()=>j});var n=i(74848),r=i(28453),a=i(13842),t=i(91435),d=i(21432),c=i(79162),o=i(34421);const l={sidebar_position:11},h="2.3 Identifiers",x={id:"arm/AA-2/AA-2.3",title:"2.3 Identifiers",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-2/AA-2.3.mdx",sourceDirName:"arm/AA-2",slug:"/arm/AA-2/AA-2.3",permalink:"/docs/arm/AA-2/AA-2.3",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"referenceManualSidebar",previous:{title:"2.2 Lexical Elements, Separators, and Delimiters",permalink:"/docs/arm/AA-2/AA-2.2"},next:{title:"2.4 Numeric Literals",permalink:"/docs/arm/AA-2/AA-2.4"}},A={},j=[{value:"Syntax",id:"syntax",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Incompatibilities With Ada 2005",id:"incompatibilities-with-ada-2005",level:4},{value:"Incompatibilities With Ada 2012",id:"incompatibilities-with-ada-2012",level:4}];function m(e){const s={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"23-identifiers",children:"2.3 Identifiers"}),"\n",(0,n.jsx)(s.admonition,{type:"danger",children:(0,n.jsxs)(s.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.jsx)(s.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n","\n",(0,n.jsx)(c.A,{children:"1"}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"Identifier"})}),"s are used as names. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(s.h4,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(c.A,{children:"2/2"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00285-01","AI95-00395-01"]}),"\n",(0,n.jsx)(d.A,{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("code",{children:"identifier"}),(0,n.jsx)("a",{id:"S0002"}),(0,n.jsx)("code",{children:" ::= "}),(0,n.jsx)("br",{}),"   ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0003",children:"identifier_start"})})," ","{",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0003",children:"identifier_start"})})," | ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0005",children:"identifier_extend"})}),"}",(0,n.jsx)("br",{})]})}),"\n",(0,n.jsx)(c.A,{children:"3/2"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00285-01","AI95-00395-01"]}),"\n",(0,n.jsx)(d.A,{children:(0,n.jsxs)(s.p,{children:[(0,n.jsxs)("code",{children:["identifier","_","start"]}),(0,n.jsx)("a",{id:"S0003"}),(0,n.jsx)("a",{id:"S0004"}),(0,n.jsx)("code",{children:" ::= "}),(0,n.jsx)("br",{}),"     ",(0,n.jsxs)("code",{children:["letter","_","uppercase"]}),(0,n.jsx)("br",{}),"   | ",(0,n.jsxs)("code",{children:["letter","_","lowercase"]}),(0,n.jsx)("br",{}),"   | ",(0,n.jsxs)("code",{children:["letter","_","titlecase"]}),(0,n.jsx)("br",{}),"   | ",(0,n.jsxs)("code",{children:["letter","_","modifier"]}),(0,n.jsx)("br",{}),"   | ",(0,n.jsxs)("code",{children:["letter","_","other"]}),(0,n.jsx)("br",{}),"   | ",(0,n.jsxs)("code",{children:["number","_","letter"]}),(0,n.jsx)("br",{})]})}),"\n",(0,n.jsx)(c.A,{children:"3.1/3"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00285-01","AI95-00395-01","AI05-0091-1"]}),"\n",(0,n.jsx)(d.A,{children:(0,n.jsxs)(s.p,{children:[(0,n.jsxs)("code",{children:["identifier","_","extend"]}),(0,n.jsx)("a",{id:"S0005"}),(0,n.jsx)("code",{children:" ::= "}),(0,n.jsx)("br",{}),"     ",(0,n.jsxs)("code",{children:["mark","_","non","_","spacing"]}),(0,n.jsx)("br",{}),"   | ",(0,n.jsxs)("code",{children:["mark","_","spacing","_","combining"]}),(0,n.jsx)("br",{}),"   | ",(0,n.jsxs)("code",{children:["number","_","decimal"]}),(0,n.jsx)("br",{}),"   | ",(0,n.jsxs)("code",{children:["punctuation","_","connector"]}),(0,n.jsx)("br",{})]})}),"\n",(0,n.jsx)(c.A,{children:"4/3"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00395-01","AI05-0091-1"]}),"\n",(0,n.jsxs)("p",{class:"Indented2",children:["An ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})})," shall not contain two consecutive characters in category ",(0,n.jsxs)("code",{children:["punctuation","_","connector"]}),", or end with a character in that category. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"4.a/3"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"reason",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("strong",{}),"This rule was stated in the syntax in Ada 95, but that has gotten too complex in Ada 2005. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"legality-rules",children:"Legality Rules"}),"\n",(0,n.jsx)(c.A,{children:"4.1/5"}),"\n",(0,n.jsx)(o.A,{items:["AI12-0004-1","AI12-0263-1","AI12-0450-1"]}),"\n",(0,n.jsxs)("p",{children:["An identifier shall only contain characters that may be present in Normalization Form KC as defined by Clause 22 of ISO/IEC 10646:2020.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"4.b/5"}),(0,n.jsx)(o.A,{items:["AI12-0004-1","AI12-0005-1"]}),(0,n.jsx)(a.A,{type:"aarm",aarm:"implementation-note",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("strong",{}),"An implementation can usually detect this during lexical processing. The code points not allowed are those for which Unicode property NFKC","_","QC (Normalization Form KC Quick","_",'Check) has the value No. We say "may be present" so that characters for which the value is Maybe (really, one of the possible values is Maybe) are allowed (these are mainly combining marks). The necessary tables can be found in ',(0,n.jsx)("a",{href:"http://www.unicode.org/Public/UCD/latest/ucd/DerivedNormalizationProps.txt",children:(0,n.jsx)(s.a,{href:"http://www.unicode.org/Public/UCD/latest/ucd/DerivedNormalizationProps.txt",children:"http://www.unicode.org/Public/UCD/latest/ucd/DerivedNormalizationProps.txt"})}),". Versions for older Unicode versions can be found on this site as well; start at ",(0,n.jsx)("a",{href:"http://www.unicode.org/Public/",children:(0,n.jsx)(s.a,{href:"http://www.unicode.org/Public/",children:"http://www.unicode.org/Public/"})})," and find the appropriate version number. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,n.jsx)(c.A,{children:"5/5"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00285-01","AI05-0091-1","AI05-0227-1","AI05-0266-1","AI05-0299-1","AI12-0263-1","AI12-0450-1"]}),"\n",(0,n.jsxs)("p",{children:["Two ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})}),"s are considered the same if they consist of the same sequence of characters after applying locale-independent simple case folding, as defined by documents referenced in Clause 2 of ISO/IEC 10646:2020. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"5.a/3"}),(0,n.jsx)(o.A,{items:["AI05-0227-1"]}),(0,n.jsx)(a.A,{type:"aarm",aarm:"discussion",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("strong",{}),"Simple case folding is a mapping to lower case, so this is matching the defining (lower case) version of a reserved word. We could have mentioned case folding of the reserved words, but as that is an identity function, it would have no effect.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"5.a.1/5"}),(0,n.jsx)(o.A,{items:["AI05-0227-1","AI12-0263-1"]}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["The \u201cdocuments referenced\u201d means Unicode, Chapter 4 (specifically, section 4.2 \u2014 Case). Note that simple case folding is supposed to be compatible between Unicode versions, so the Unicode version used doesn't matter. A machine-readable version of the needed mapping can be found at: ",(0,n.jsx)("a",{href:"http://www.unicode.org/Public/UCD/latest/ucd/CaseFolding.txt",children:(0,n.jsx)(s.a,{href:"http://www.unicode.org/Public/UCD/latest/ucd/CaseFolding.txt",children:"http://www.unicode.org/Public/UCD/latest/ucd/CaseFolding.txt"})}),". ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(c.A,{children:"5.3/3"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00395-01","AI05-0091-1","AI05-0227-1"]}),"\n",(0,n.jsxs)("p",{children:["After applying simple case folding, an ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})})," shall not be identical to a reserved word. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"5.b/3"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"implementation-note",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("strong",{}),"We match the reserved words after applying case folding so that the rules for ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})}),"s and reserved words are the same. Since a compiler usually will lexically process ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})}),"s and reserved words the same way (often with the same code), this will prevent a lot of headaches. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"5.c/3"}),(0,n.jsx)(o.A,{items:["AI05-0227-1"]}),(0,n.jsx)(a.A,{type:"aarm",aarm:"ramification",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("strong",{}),"The rules for reserved words differ in one way: they define case conversion on letters rather than sequences. This means that it is possible that there exist some unusual sequences that are neither ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})}),"s nor reserved words. We are not aware of any such sequences so long as we use simple case folding (as opposed to full case folding), but we have defined the rules in case any are introduced in future character set standards. This originally was a problem when converting to upper case: \u201c\u0131f\u201d and \u201cacce\xdf\u201d have upper case conversions of \u201cIF\u201d and \u201cACCESS\u201d respectively. We would not want these to be treated as reserved words. But neither of these cases exist when using simple case folding. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"implementation-permissions",children:"Implementation Permissions"}),"\n",(0,n.jsx)(c.A,{children:"6"}),"\n",(0,n.jsxs)("p",{children:["In a nonstandard mode, an implementation may support other upper/lower case equivalence rules for ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})}),"s[, to accommodate local conventions]. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"6.a/3"}),(0,n.jsx)(o.A,{items:["AI95-00285-01","AI05-0227-1"]}),(0,n.jsx)(a.A,{type:"aarm",aarm:"discussion",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("strong",{}),"For instance, in most languages, the simple case folded equivalent of LATIN CAPITAL LETTER I (an upper case letter without a dot above) is LATIN SMALL LETTER I (a lower case letter with a dot above). In Turkish, though, LATIN CAPITAL LETTER I and LATIN CAPITAL LETTER I WITH DOT ABOVE are two distinct letters, so the case folded equivalent of LATIN CAPITAL LETTER I is LATIN SMALL LETTER DOTLESS I, and the case folded equivalent of LATIN CAPITAL LETTER I WITH DOT ABOVE is LATIN SMALL LETTER I. Take for instance the following identifier (which is the name of a city on the Tigris river in Eastern Anatolia):",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"6.b/3"}),(0,n.jsx)(d.A,{language:"ada",children:(0,n.jsxs)(s.p,{children:["D\u0130YARBAKIR -- The first i is dotted, the second isn't.","\n"]})})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"6.c/3"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["A Turkish reader would expect that the above identifier is equivalent to: ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"6.d/3"}),(0,n.jsx)(d.A,{language:"ada",children:(0,n.jsxs)(s.p,{children:["diyarbak\u0131r","\n"]})})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"6.d.1/3"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["However, locale-independent simple case folding (and thus Ada) maps this to: ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"6.d.2/3"}),(0,n.jsx)(d.A,{language:"ada",children:(0,n.jsxs)(s.p,{children:["d\u0130yarbakir","\n"]})})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"6.e/3"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["which is different from any of the following identifiers: ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"6.f/2"}),(0,n.jsx)(d.A,{language:"ada",children:(0,n.jsxs)(s.p,{children:["diyarbakir","\n","diyarbak\u0131r","\n","d\u0131yarbakir","\n","d\u0131yarbak\u0131r","\n"]})})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"6.f.1/3"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["including the \u201ccorrect\u201d matching identifier for Turkish. Upper case conversion (used in '[Wide","_","]Wide","_","Image) introduces additional problems.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"6.g/3"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["An implementation targeting the Turkish market is allowed (in fact, expected) to provide a nonstandard mode where case folding is appropriate for Turkish. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"6.j/2"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["Lithuanian and Azeri are two other languages that present similar idiosyncrasies. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"6.1/2"}),(0,n.jsx)(o.A,{items:["AI95-00285-01"]}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["NOTE   ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"Identifier"})}),"s differing only in the use of corresponding upper and lower case letters are considered the same. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(c.A,{children:"7"}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("em",{children:"Examples of identifiers:"})," ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(c.A,{children:"8/2"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00433-01"]}),"\n",(0,n.jsx)(d.A,{language:"ada",children:(0,n.jsxs)(s.p,{children:["Count      X    Get","_","Symbol   Ethelyn   Marion","\n","Snobol","_","4   X1   Page","_","Count   Store","_","Next","_","Item","\n","\u03a0\u03bb\u03ac\u03c4\u03c9\u03bd      -- Plato","\n","\u0427\u0430\u0439\u043a\u043e\u0432\u0441\u043a\u0438\u0439  -- Tchaikovsky","\n","\u03b8  \u03c6        -- Angles","\n"]})}),"\n",(0,n.jsx)(t.A,{children:(0,n.jsx)(s.h4,{id:"wording-changes-from-ada-83",children:"Wording Changes from Ada 83"})}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"8.a"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["We no longer include reserved words as ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})}),"s. This is not a language change. In Ada 83, ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})})," included reserved words. However, this complicated several other rules (for example, regarding implementation-defined attributes and pragmas, etc.). We now explicitly allow certain reserved words for attribute designators, to make up for the loss. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"8.b"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"ramification",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("strong",{}),"Because syntax rules are relevant to overload resolution, it means that if it looks like a reserved word, it is not an ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})}),". As a side effect, implementations cannot use reserved words as implementation-defined attributes or pragma names. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(t.A,{children:(0,n.jsx)(s.h4,{id:"extensions-to-ada-95",children:"Extensions to Ada 95"})}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"8.c/2"}),(0,n.jsx)(o.A,{items:["AI95-00285-01"]}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["An ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})})," can use any letter defined by ISO-10646:2003, along with several other categories. This should ease programming in languages other than English. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(t.A,{children:(0,n.jsx)(s.h4,{id:"incompatibilities-with-ada-2005",children:"Incompatibilities With Ada 2005"})}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"8.d/3"}),(0,n.jsx)(o.A,{items:["AI05-0091-1"]}),(0,n.jsx)(a.A,{type:"aarm",aarm:"correction",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("strong",{})," ",(0,n.jsxs)("code",{children:["other","_","format"]})," characters were removed from identifiers as the Unicode recommendations have changed. This change can only affect programs written for the original Ada 2005, so there should be few such programs.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"8.e/3"}),(0,n.jsx)(o.A,{items:["AI05-0227-1"]}),(0,n.jsx)(a.A,{type:"aarm",aarm:"correction",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("strong",{})," We now specify simple case folding rather than full case folding. That potentially could change identifier equivalence, although it is more likely that identifiers that are considered the same in original Ada 2005 will now be considered different. This change was made because the original Ada 2005 definition was incompatible (and even inconsistent in unusual cases) with the Ada 95 identifier equivalence rules. As such, the Ada 2005 rules were rarely fully implemented, and in any case, only Ada 2005 identifiers containing wide characters could be affected. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(t.A,{children:(0,n.jsx)(s.h4,{id:"incompatibilities-with-ada-2012",children:"Incompatibilities With Ada 2012"})}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(c.A,{children:"8.f/5"}),(0,n.jsx)(o.A,{items:["AI12-0004-1"]}),(0,n.jsx)(a.A,{type:"aarm",aarm:"correction",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("strong",{})," An identifier that contains any characters not permitted in Normalization Form KC is now illegal. Ada 2012 allowed such identifiers, but their interpretation was implementation-defined (so the use of such identifiers was not portable). Identifiers that may be interpreted differently by different compilers are a safety and security hazard, so we no longer allow them. ",(0,n.jsx)("br",{})]})})]})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}}}]);