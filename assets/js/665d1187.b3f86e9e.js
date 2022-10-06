"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[377],{6016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>w,frontMatter:()=>h,metadata:()=>T,toc:()=>x});var a=n(1716),i=n(3050),r=n(3989),o=n(8604),l=n(7318),d=n(4768),s=Object.defineProperty,m=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&y(e,n,t[n]);if(p)for(var n of p(t))k.call(t,n)&&y(e,n,t[n]);return e};const h={sidebar_position:11},f="2.3 Identifiers",T={unversionedId:"arm/AA-2/AA-2.3",id:"arm/AA-2/AA-2.3",title:"2.3 Identifiers",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-2/AA-2.3.mdx",sourceDirName:"arm/AA-2",slug:"/arm/AA-2/AA-2.3",permalink:"/docs/arm/AA-2/AA-2.3",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"referenceManualSidebar",previous:{title:"2.2 Lexical Elements, Separators, and Delimiters",permalink:"/docs/arm/AA-2/AA-2.2"},next:{title:"2.4 Numeric Literals",permalink:"/docs/arm/AA-2/AA-2.4"}},g={},x=[{value:"Syntax",id:"syntax",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Incompatibilities With Ada 2005",id:"incompatibilities-with-ada-2005",level:4},{value:"Incompatibilities With Ada 2012",id:"incompatibilities-with-ada-2012",level:4}],b={toc:x};function w(e){var t,n=e,{components:s}=n,y=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&k.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=A(A({},b),y),m(t,c({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("h1",A({},{id:"23-identifiers"}),"2.3 Identifiers"),(0,a.kt)("admonition",A({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",A({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(l.Z,{mdxType:"MarginText"},"1"),(0,a.kt)("p",null,(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"Identifier")),"s are used as names. ",(0,a.kt)("br",null)),(0,a.kt)("h4",A({},{id:"syntax"}),"Syntax"),(0,a.kt)(l.Z,{mdxType:"MarginText"},"2/2"),(0,a.kt)(d.Z,{items:["AI95-00285-01","AI95-00395-01"],mdxType:"MarginInfo"}),(0,a.kt)(o.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"identifier"),(0,a.kt)("a",{id:"S0002"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("br",null),"   ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0003"},"identifier_start"))," ","{",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0003"},"identifier_start"))," | ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0005"},"identifier_extend")),"}",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"3/2"),(0,a.kt)(d.Z,{items:["AI95-00285-01","AI95-00395-01"],mdxType:"MarginInfo"}),(0,a.kt)(o.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"identifier_start"),(0,a.kt)("a",{id:"S0003"}),(0,a.kt)("a",{id:"S0004"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("br",null),"     ",(0,a.kt)("code",null,"letter_uppercase"),(0,a.kt)("br",null),"   | ",(0,a.kt)("code",null,"letter_lowercase"),(0,a.kt)("br",null),"   | ",(0,a.kt)("code",null,"letter_titlecase"),(0,a.kt)("br",null),"   | ",(0,a.kt)("code",null,"letter_modifier"),(0,a.kt)("br",null),"   | ",(0,a.kt)("code",null,"letter_other"),(0,a.kt)("br",null),"   | ",(0,a.kt)("code",null,"number_letter"),(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"3.1/3"),(0,a.kt)(d.Z,{items:["AI95-00285-01","AI95-00395-01","AI05-0091-1"],mdxType:"MarginInfo"}),(0,a.kt)(o.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"identifier_extend"),(0,a.kt)("a",{id:"S0005"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("br",null),"     ",(0,a.kt)("code",null,"mark_non_spacing"),(0,a.kt)("br",null),"   | ",(0,a.kt)("code",null,"mark_spacing_combining"),(0,a.kt)("br",null),"   | ",(0,a.kt)("code",null,"number_decimal"),(0,a.kt)("br",null),"   | ",(0,a.kt)("code",null,"punctuation_connector"),(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"4/3"),(0,a.kt)(d.Z,{items:["AI95-00395-01","AI05-0091-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"An ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," shall not contain two consecutive characters in category ",(0,a.kt)("code",null,"punctuation_connector"),", or end with a character in that category. ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"4.a/3"),(0,a.kt)(i.Z,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,a.kt)("strong",null),"This rule was stated in the syntax in Ada 95, but that has gotten too complex in Ada 2005. ",(0,a.kt)("br",null))),(0,a.kt)("h4",A({},{id:"legality-rules"}),"Legality Rules"),(0,a.kt)(l.Z,{mdxType:"MarginText"},"4.1/5"),(0,a.kt)(d.Z,{items:["AI12-0004-1","AI12-0263-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"An identifier shall only contain characters that may be present in Normalization Form KC (as defined by Clause 21 of ISO/IEC 10646:2017).",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"4.b/5"),(0,a.kt)(d.Z,{items:["AI12-0004-1","AI12-0005-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-note",mdxType:"Admonition"},(0,a.kt)("strong",null),'An implementation can usually detect this during lexical processing. The code points not allowed are those for which Unicode property NFKC_QC (Normalization Form KC Quick_Check) has the value No. We say "may be present" so that characters for which the value is Maybe (really, one of the possible values is Maybe) are allowed (these are mainly combining marks). The necessary tables can be found in ',(0,a.kt)("a",{href:"http://www.unicode.org/Public/UCD/latest/ucd/DerivedNormalizationProps.txt"},"http://www.unicode.org/Public/UCD/latest/ucd/DerivedNormalizationProps.txt"),". Versions for older Unicode versions can be found on this site as well; start at ",(0,a.kt)("a",{href:"http://www.unicode.org/Public/"},"http://www.unicode.org/Public/")," and find the appropriate version number. ",(0,a.kt)("br",null))),(0,a.kt)("h4",A({},{id:"static-semantics"}),"Static Semantics"),(0,a.kt)(l.Z,{mdxType:"MarginText"},"5/5"),(0,a.kt)(d.Z,{items:["AI95-00285-01","AI05-0091-1","AI05-0227-1","AI05-0266-1","AI05-0299-1","AI12-0263-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"Two ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"s are considered the same if they consist of the same sequence of characters after applying locale-independent simple case folding, as defined by documents referenced  in Clause 2  of ISO/IEC 10646:2017 . ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"5.a/3"),(0,a.kt)(d.Z,{items:["AI05-0227-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,a.kt)("strong",null),"Simple case folding is a mapping to lower case, so this is matching the defining (lower case) version of a reserved word. We could have mentioned case folding of the reserved words, but as that is an identity function, it would have no effect.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"5.a.1/5"),(0,a.kt)(d.Z,{items:["AI05-0227-1","AI12-0263-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The \u201cdocuments referenced\u201d means Unicode, Chapter 4 (specifically, section 4.2 \u2014 Case). Note that simple case folding is supposed to be compatible between Unicode versions, so the Unicode version used doesn't matter. A machine-readable version of the needed mapping can be found at: ",(0,a.kt)("a",{href:"http://www.unicode.org/Public/UCD/latest/ucd/CaseFolding.txt"},"http://www.unicode.org/Public/UCD/latest/ucd/CaseFolding.txt"),". ",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"MarginText"},"5.3/3"),(0,a.kt)(d.Z,{items:["AI95-00395-01","AI05-0091-1","AI05-0227-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"After applying simple case folding, an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," shall not be identical to a reserved word. ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"5.b/3"),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-note",mdxType:"Admonition"},(0,a.kt)("strong",null),"We match the reserved words after applying case folding so that the rules for ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"s and reserved words are the same. Since a compiler usually will lexically process ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"s and reserved words the same way (often with the same code), this will prevent a lot of headaches. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"5.c/3"),(0,a.kt)(d.Z,{items:["AI05-0227-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"The rules for reserved words differ in one way: they define case conversion on letters rather than sequences. This means that it is possible that there exist some unusual sequences that are neither ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"s nor reserved words. We are not aware of any such sequences so long as we use simple case folding (as opposed to full case folding), but we have defined the rules in case any are introduced in future character set standards. This originally was a problem when converting to upper case: \u201c\u0131f\u201d and \u201cacce\xdf\u201d have upper case conversions of \u201cIF\u201d and \u201cACCESS\u201d respectively. We would not want these to be treated as reserved words. But neither of these cases exist when using simple case folding. ",(0,a.kt)("br",null))),(0,a.kt)("h4",A({},{id:"implementation-permissions"}),"Implementation Permissions"),(0,a.kt)(l.Z,{mdxType:"MarginText"},"6"),(0,a.kt)("p",null,"In a nonstandard mode, an implementation may support other upper/lower case equivalence rules for ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"s[, to accommodate local conventions]. ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"6.a/3"),(0,a.kt)(d.Z,{items:["AI95-00285-01","AI05-0227-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,a.kt)("strong",null),"For instance, in most languages, the simple case folded equivalent of LATIN CAPITAL LETTER I (an upper case letter without a dot above) is LATIN SMALL LETTER I (a lower case letter with a dot above). In Turkish, though, LATIN CAPITAL LETTER I and LATIN CAPITAL LETTER I WITH DOT ABOVE are two distinct letters, so the case folded equivalent of LATIN CAPITAL LETTER I is LATIN SMALL LETTER DOTLESS I, and the case folded equivalent of LATIN CAPITAL LETTER I WITH DOT ABOVE is LATIN SMALL LETTER I. Take for instance the following identifier (which is the name of a city on the Tigris river in Eastern Anatolia):",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"6.b/3"),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"D\u0130YARBAKIR -- The first i is dotted, the second isn't.","\n")),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"6.c/3"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"A Turkish reader would expect that the above identifier is equivalent to: ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"6.d/3"),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"diyarbak\u0131r","\n")),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"6.d.1/3"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"However, locale-independent simple case folding (and thus Ada) maps this to: ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"6.d.2/3"),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"d\u0130yarbakir","\n")),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"6.e/3"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"which is different from any of the following identifiers: ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"6.f/2"),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"diyarbakir","\n","diyarbak\u0131r","\n","d\u0131yarbakir","\n","d\u0131yarbak\u0131r","\n")),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"6.f.1/3"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"including the \u201ccorrect\u201d matching identifier for Turkish. Upper case conversion (used in '[Wide_]Wide_Image) introduces additional problems.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"6.g/3"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"An implementation targeting the Turkish market is allowed (in fact, expected) to provide a nonstandard mode where case folding is appropriate for Turkish. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"6.j/2"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Lithuanian and Azeri are two other languages that present similar idiosyncrasies. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"6.1/2"),(0,a.kt)(d.Z,{items:["AI95-00285-01"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 1   ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"Identifier")),"s differing only in the use of corresponding upper and lower case letters are considered the same. ",(0,a.kt)("br",null))),(0,a.kt)("h4",A({},{id:"examples"}),"Examples"),(0,a.kt)(l.Z,{mdxType:"MarginText"},"7"),(0,a.kt)("p",null,(0,a.kt)("em",null,"Examples of identifiers:")," ",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"MarginText"},"8/2"),(0,a.kt)(d.Z,{items:["AI95-00433-01"],mdxType:"MarginInfo"}),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"Count      X    Get_Symbol   Ethelyn   Marion","\n","Snobol_4   X1   Page_Count   Store_Next_Item","\n","\u03a0\u03bb\u03ac\u03c4\u03c9\u03bd      -- Plato","\n","\u0427\u0430\u0439\u043a\u043e\u0432\u0441\u043a\u0438\u0439  -- Tchaikovsky","\n","\u03b8  \u03c6        -- Angles","\n"),(0,a.kt)("h4",A({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"8.a"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"We no longer include reserved words as ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"s. This is not a language change. In Ada 83, ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," included reserved words. However, this complicated several other rules (for example, regarding implementation-defined attributes and pragmas, etc.). We now explicitly allow certain reserved words for attribute designators, to make up for the loss. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"8.b"),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"Because syntax rules are relevant to overload resolution, it means that if it looks like a reserved word, it is not an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),". As a side effect, implementations cannot use reserved words as implementation-defined attributes or pragma names. ",(0,a.kt)("br",null))),(0,a.kt)("h4",A({},{id:"extensions-to-ada-95"}),"Extensions to Ada 95"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"8.c/2"),(0,a.kt)(d.Z,{items:["AI95-00285-01"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"An ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," can use any letter defined by ISO-10646:2003, along with several other categories. This should ease programming in languages other than English. ",(0,a.kt)("br",null))),(0,a.kt)("h4",A({},{id:"incompatibilities-with-ada-2005"}),"Incompatibilities With Ada 2005"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"8.d/3"),(0,a.kt)(d.Z,{items:["AI05-0091-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"correction",mdxType:"Admonition"},(0,a.kt)("strong",null)," ",(0,a.kt)("code",null,"other_format")," characters were removed from identifiers as the Unicode recommendations have changed. This change can only affect programs written for the original Ada 2005, so there should be few such programs.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"8.e/3"),(0,a.kt)(d.Z,{items:["AI05-0227-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"correction",mdxType:"Admonition"},(0,a.kt)("strong",null)," We now specify simple case folding rather than full case folding. That potentially could change identifier equivalence, although it is more likely that identifiers that are considered the same in original Ada 2005 will now be considered different. This change was made because the original Ada 2005 definition was incompatible (and even inconsistent in unusual cases) with the Ada 95 identifier equivalence rules. As such, the Ada 2005 rules were rarely fully implemented, and in any case, only Ada 2005 identifiers containing wide characters could be affected. ",(0,a.kt)("br",null))),(0,a.kt)("h4",A({},{id:"incompatibilities-with-ada-2012"}),"Incompatibilities With Ada 2012"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(l.Z,{mdxType:"MarginText"},"8.f/5"),(0,a.kt)(d.Z,{items:["AI12-0004-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"correction",mdxType:"Admonition"},(0,a.kt)("strong",null)," An identifier that contains any characters not permitted in Normalization Form KC is now illegal. Ada 2012 allowed such identifiers, but their interpretation was implementation-defined (so the use of such identifiers was not portable). Identifiers that may be interpreted differently by different compilers are a safety and security hazard, so we no longer allow them. ",(0,a.kt)("br",null))))}w.isMDXComponent=!0}}]);