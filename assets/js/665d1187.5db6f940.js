"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[377],{6016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>g,frontMatter:()=>h,metadata:()=>A,toc:()=>b});var i=n(1716),a=n(7556),l=n(9464),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(d)for(var n of d(t))c.call(t,n)&&m(e,n,t[n]);return e};const h={sidebar_position:9},p="2.3 Identifiers",A={unversionedId:"arm/AA-2/AA-2.3",id:"arm/AA-2/AA-2.3",title:"2.3 Identifiers",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-2/AA-2.3.mdx",sourceDirName:"arm/AA-2",slug:"/arm/AA-2/AA-2.3",permalink:"/docs/arm/AA-2/AA-2.3",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"referenceManualSidebar",previous:{title:"2.2 Lexical Elements, Separators, and Delimiters",permalink:"/docs/arm/AA-2/AA-2.2"},next:{title:"2.4 Numeric Literals",permalink:"/docs/arm/AA-2/AA-2.4"}},f={},b=[{value:"Syntax",id:"syntax",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Incompatibilities With Ada 2005",id:"incompatibilities-with-ada-2005",level:4},{value:"Incompatibilities With Ada 2012",id:"incompatibilities-with-ada-2012",level:4}],y={toc:b};function g(e){var t,n=e,{components:r}=n,m=((e,t)=>{var n={};for(var i in e)u.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&d)for(var i of d(e))t.indexOf(i)<0&&c.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=k(k({},y),m),o(t,s({components:r,mdxType:"MDXLayout"}))),(0,i.kt)("h1",k({},{id:"23-identifiers"}),"2.3 Identifiers"),(0,i.kt)("admonition",k({},{type:"warning"}),(0,i.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,i.kt)("a",k({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,i.kt)("p",null,(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"Identifier")),"s are used as names. ",(0,i.kt)("br",null)),(0,i.kt)("h4",k({},{id:"syntax"}),"Syntax"),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI95-00285-01"),"}"," ","{",(0,i.kt)("em",null,"AI95-00395-01"),"}"," ",(0,i.kt)("br",null),(0,i.kt)("code",null,"identifier"),(0,i.kt)("a",{id:"S0002"}),(0,i.kt)("code",null," ::= "),(0,i.kt)("br",null),"   ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0003"},"identifier_start"))," ","{",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0003"},"identifier_start"))," | ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0005"},"identifier_extend")),"}",(0,i.kt)("br",null)),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI95-00285-01"),"}"," ","{",(0,i.kt)("em",null,"AI95-00395-01"),"}"," ",(0,i.kt)("br",null),(0,i.kt)("code",null,"identifier_start"),(0,i.kt)("a",{id:"S0003"}),(0,i.kt)("a",{id:"S0004"}),(0,i.kt)("code",null," ::= "),(0,i.kt)("br",null),"     ",(0,i.kt)("code",null,"letter_uppercase"),(0,i.kt)("br",null),"   | ",(0,i.kt)("code",null,"letter_lowercase"),(0,i.kt)("br",null),"   | ",(0,i.kt)("code",null,"letter_titlecase"),(0,i.kt)("br",null),"   | ",(0,i.kt)("code",null,"letter_modifier"),(0,i.kt)("br",null),"   | ",(0,i.kt)("code",null,"letter_other"),(0,i.kt)("br",null),"   | ",(0,i.kt)("code",null,"number_letter"),(0,i.kt)("br",null)),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI95-00285-01"),"}"," ","{",(0,i.kt)("em",null,"AI95-00395-01"),"}"," ","{",(0,i.kt)("em",null,"AI05-0091-1"),"}"," ",(0,i.kt)("br",null),(0,i.kt)("code",null,"identifier_extend"),(0,i.kt)("a",{id:"S0005"}),(0,i.kt)("code",null," ::= "),(0,i.kt)("br",null),"     ",(0,i.kt)("code",null,"mark_non_spacing"),(0,i.kt)("br",null),"   | ",(0,i.kt)("code",null,"mark_spacing_combining"),(0,i.kt)("br",null),"   | ",(0,i.kt)("code",null,"number_decimal"),(0,i.kt)("br",null),"   | ",(0,i.kt)("code",null,"punctuation_connector"),(0,i.kt)("br",null)),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI95-00395-01"),"}"," ","{",(0,i.kt)("em",null,"AI05-0091-1"),"}"," ",(0,i.kt)("br",null),"An ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," shall not contain two consecutive characters in category ",(0,i.kt)("code",null,"punctuation_connector"),", or end with a character in that category. ",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,i.kt)("strong",null),"This rule was stated in the syntax in Ada 95, but that has gotten too complex in Ada 2005. ",(0,i.kt)("br",null)),(0,i.kt)("h4",k({},{id:"legality-rules"}),"Legality Rules"),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI12-0004-1"),"}"," ","{",(0,i.kt)("em",null,"AI12-0263-1"),"}"," ",(0,i.kt)("br",null),"An identifier shall only contain characters that may be present in Normalization Form KC (as defined by Clause 21 of ISO/IEC 10646:2017).",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{type:"aarm",aarm:"implementation-note",title:"Implementation Note: ",mdxType:"Admonition"},(0,i.kt)("strong",null),"{",(0,i.kt)("em",null,"AI12-0004-1"),"}"," ","{",(0,i.kt)("em",null,"AI12-0005-1"),"}"," ",(0,i.kt)("br",null),'An implementation can usually detect this during lexical processing. The code points not allowed are those for which Unicode property NFKC_QC (Normalization Form KC Quick_Check) has the value No. We say "may be present" so that characters for which the value is Maybe (really, one of the possible values is Maybe) are allowed (these are mainly combining marks). The necessary tables can be found in ',(0,i.kt)("a",{href:"http://www.unicode.org/Public/UCD/latest/ucd/DerivedNormalizationProps.txt"},"http://www.unicode.org/Public/UCD/latest/ucd/DerivedNormalizationProps.txt"),". Versions for older Unicode versions can be found on this site as well; start at ",(0,i.kt)("a",{href:"http://www.unicode.org/Public/"},"http://www.unicode.org/Public/")," and find the appropriate version number. ",(0,i.kt)("br",null)),(0,i.kt)("h4",k({},{id:"static-semantics"}),"Static Semantics"),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI95-00285-01"),"}"," ","{",(0,i.kt)("em",null,"AI05-0091-1"),"}"," ","{",(0,i.kt)("em",null,"AI05-0227-1"),"}"," ","{",(0,i.kt)("em",null,"AI05-0266-1"),"}"," ","{",(0,i.kt)("em",null,"AI05-0299-1"),"}"," ","{",(0,i.kt)("em",null,"AI12-0263-1"),"}"," ",(0,i.kt)("br",null),"Two ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"s are considered the same if they consist of the same sequence of characters after applying locale-independent simple case folding, as defined by documents referenced in Clause 2 of ISO/IEC 10646:2017. ",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,i.kt)("strong",null),"{",(0,i.kt)("em",null,"AI05-0227-1"),"}"," ",(0,i.kt)("br",null),"Simple case folding is a mapping to lower case, so this is matching the defining (lower case) version of a reserved word. We could have mentioned case folding of the reserved words, but as that is an identity function, it would have no effect.",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,i.kt)("em",null,"AI05-0227-1"),"}"," ","{",(0,i.kt)("em",null,"AI12-0263-1"),"}"," ",(0,i.kt)("br",null),'The "documents referenced" means Unicode, Chapter 4 (specifically, section 4.2 - Case). Note that simple case folding is supposed to be compatible between Unicode versions, so the Unicode version used doesn\'t matter. A machine-readable version of the needed mapping can be found at: ',(0,i.kt)("a",{href:"http://www.unicode.org/Public/UCD/latest/ucd/CaseFolding.txt"},"http://www.unicode.org/Public/UCD/latest/ucd/CaseFolding.txt"),". ",(0,i.kt)("br",null)),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI95-00395-01"),"}"," ","{",(0,i.kt)("em",null,"AI05-0091-1"),"}"," ","{",(0,i.kt)("em",null,"AI05-0227-1"),"}"," ",(0,i.kt)("br",null),"After applying simple case folding, an ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," shall not be identical to a reserved word. ",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{type:"aarm",aarm:"implementation-note",title:"Implementation Note: ",mdxType:"Admonition"},(0,i.kt)("strong",null),"We match the reserved words after applying case folding so that the rules for ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"s and reserved words are the same. Since a compiler usually will lexically process ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"s and reserved words the same way (often with the same code), this will prevent a lot of headaches. ",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,i.kt)("strong",null),"{",(0,i.kt)("em",null,"AI05-0227-1"),"}"," ",(0,i.kt)("br",null),"The rules for reserved words differ in one way: they define case conversion on letters rather than sequences. This means that it is possible that there exist some unusual sequences that are neither ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),'s nor reserved words. We are not aware of any such sequences so long as we use simple case folding (as opposed to full case folding), but we have defined the rules in case any are introduced in future character set standards. This originally was a problem when converting to upper case: "f" and "acce\ufffd" have upper case conversions of "IF" and "ACCESS" respectively. We would not want these to be treated as reserved words. But neither of these cases exist when using simple case folding. ',(0,i.kt)("br",null)),(0,i.kt)("h4",k({},{id:"implementation-permissions"}),"Implementation Permissions"),(0,i.kt)("p",null,"In a nonstandard mode, an implementation may support other upper/lower case equivalence rules for ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"s[, to accommodate local conventions]. ",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,i.kt)("strong",null),"{",(0,i.kt)("em",null,"AI95-00285-01"),"}"," ","{",(0,i.kt)("em",null,"AI05-0227-1"),"}"," ",(0,i.kt)("br",null),"For instance, in most languages, the simple case folded equivalent of LATIN CAPITAL LETTER I (an upper case letter without a dot above) is LATIN SMALL LETTER I (a lower case letter with a dot above). In Turkish, though, LATIN CAPITAL LETTER I and LATIN CAPITAL LETTER I WITH DOT ABOVE are two distinct letters, so the case folded equivalent of LATIN CAPITAL LETTER I is LATIN SMALL LETTER DOTLESS I, and the case folded equivalent of LATIN CAPITAL LETTER I WITH DOT ABOVE is LATIN SMALL LETTER I. Take for instance the following identifier (which is the name of a city on the Tigris river in Eastern Anatolia):",(0,i.kt)("br",null)),(0,i.kt)(a.Z,{mdxType:"CodeBlock"},"DYARBAKIR -- The first i is dotted, the second isn't.","\n"),(0,i.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"A Turkish reader would expect that the above identifier is equivalent to: ",(0,i.kt)("br",null)),(0,i.kt)(a.Z,{mdxType:"CodeBlock"},"diyarbakr","\n"),(0,i.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"However, locale-independent simple case folding (and thus Ada) maps this to: ",(0,i.kt)("br",null)),(0,i.kt)(a.Z,{mdxType:"CodeBlock"},"dyarbakir","\n"),(0,i.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"which is different from any of the following identifiers: ",(0,i.kt)("br",null)),(0,i.kt)(a.Z,{mdxType:"CodeBlock"},"diyarbakir","\n","diyarbakr","\n","dyarbakir","\n","dyarbakr","\n"),(0,i.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},'including the "correct" matching identifier for Turkish. Upper case conversion (used in \'[Wide_]Wide_Image) introduces additional problems.',(0,i.kt)("br",null)),(0,i.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"An implementation targeting the Turkish market is allowed (in fact, expected) to provide a nonstandard mode where case folding is appropriate for Turkish. ",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"Lithuanian and Azeri are two other languages that present similar idiosyncrasies. ",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 1   ","{",(0,i.kt)("em",null,"AI95-00285-01"),"}"," ",(0,i.kt)("br",null),(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"Identifier")),"s differing only in the use of corresponding upper and lower case letters are considered the same. ",(0,i.kt)("br",null)),(0,i.kt)("h4",k({},{id:"examples"}),"Examples"),(0,i.kt)("p",null,(0,i.kt)("em",null,"Examples of identifiers:")," ",(0,i.kt)("br",null)),(0,i.kt)(a.Z,{mdxType:"CodeBlock"},"--  ","{","AI95-00433-01","}","\n"," Count      X    Get_Symbol   Ethelyn   Marion","\n","Snobol_4   X1   Page_Count   Store_Next_Item","\n","      -- Plato","\n","  -- Tchaikovsky","\n","          -- Angles","\n"),(0,i.kt)("h4",k({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83"),(0,i.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"We no longer include reserved words as ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"s. This is not a language change. In Ada 83, ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," included reserved words. However, this complicated several other rules (for example, regarding implementation-defined attributes and pragmas, etc.). We now explicitly allow certain reserved words for attribute designators, to make up for the loss. ",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,i.kt)("strong",null),"Because syntax rules are relevant to overload resolution, it means that if it looks like a reserved word, it is not an ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),". As a side effect, implementations cannot use reserved words as implementation-defined attributes or pragma names. ",(0,i.kt)("br",null)),(0,i.kt)("h4",k({},{id:"extensions-to-ada-95"}),"Extensions to Ada 95"),(0,i.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,i.kt)("em",null,"AI95-00285-01"),"}"," ",(0,i.kt)("br",null),"An ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," can use any letter defined by ISO-10646:2003, along with several other categories. This should ease programming in languages other than English. ",(0,i.kt)("br",null)),(0,i.kt)("h4",k({},{id:"incompatibilities-with-ada-2005"}),"Incompatibilities With Ada 2005"),(0,i.kt)(l.Z,{type:"aarm",aarm:"correction",title:"Correction:",mdxType:"Admonition"},"{",(0,i.kt)("em",null,"AI05-0091-1"),"}"," ",(0,i.kt)("strong",null,(0,i.kt)("br",null))," ",(0,i.kt)("code",null,"other_format")," characters were removed from identifiers as the Unicode recommendations have changed. This change can only affect programs written for the original Ada 2005, so there should be few such programs.",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{type:"aarm",aarm:"correction",title:"Correction:",mdxType:"Admonition"},"{",(0,i.kt)("em",null,"AI05-0227-1"),"}"," ",(0,i.kt)("strong",null,(0,i.kt)("br",null))," We now specify simple case folding rather than full case folding. That potentially could change identifier equivalence, although it is more likely that identifiers that are considered the same in original Ada 2005 will now be considered different. This change was made because the original Ada 2005 definition was incompatible (and even inconsistent in unusual cases) with the Ada 95 identifier equivalence rules. As such, the Ada 2005 rules were rarely fully implemented, and in any case, only Ada 2005 identifiers containing wide characters could be affected. ",(0,i.kt)("br",null)),(0,i.kt)("h4",k({},{id:"incompatibilities-with-ada-2012"}),"Incompatibilities With Ada 2012"),(0,i.kt)(l.Z,{type:"aarm",aarm:"correction",title:"Correction:",mdxType:"Admonition"},"{",(0,i.kt)("em",null,"AI12-0004-1"),"}"," ",(0,i.kt)("strong",null,(0,i.kt)("br",null))," An identifier that contains any characters not permitted in Normalization Form KC is now illegal. Ada 2012 allowed such identifiers, but their interpretation was implementation-defined (so the use of such identifiers was not portable). Identifiers that may be interpreted differently by different compilers are a safety and security hazard, so we no longer allow them. ",(0,i.kt)("br",null)))}g.isMDXComponent=!0}}]);