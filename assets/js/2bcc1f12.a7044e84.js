"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[9178],{5159:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>A,contentTitle:()=>y,default:()=>h,frontMatter:()=>b,metadata:()=>c,toc:()=>x});var l=n(1716),r=n(2787),a=n(2670),o=n(6990),i=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,g=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&p(t,n,e[n]);if(k)for(var n of k(e))m.call(e,n)&&p(t,n,e[n]);return t};const b={sidebar_position:15},y="2.9 Reserved Words",c={unversionedId:"arm/AA-2/AA-2.9",id:"arm/AA-2/AA-2.9",title:"2.9 Reserved Words",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-2/AA-2.9.mdx",sourceDirName:"arm/AA-2",slug:"/arm/AA-2/AA-2.9",permalink:"/docs/arm/AA-2/AA-2.9",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"referenceManualSidebar",previous:{title:"2.8 Pragmas",permalink:"/docs/arm/AA-2/AA-2.8"},next:{title:"3 Declarations and Types",permalink:"/docs/arm/AA-3/"}},A={},x=[{value:"Syntax",id:"syntax",level:4},{value:"Incompatibilities With Ada 83",id:"incompatibilities-with-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Incompatibilities With Ada 95",id:"incompatibilities-with-ada-95",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Incompatibilities With Ada 2005",id:"incompatibilities-with-ada-2005",level:4},{value:"Incompatibilities With Ada 2012",id:"incompatibilities-with-ada-2012",level:4}],T={toc:x};function h(t){var e,n=t,{components:i}=n,p=((t,e)=>{var n={};for(var l in t)u.call(t,l)&&e.indexOf(l)<0&&(n[l]=t[l]);if(null!=t&&k)for(var l of k(t))e.indexOf(l)<0&&m.call(t,l)&&(n[l]=t[l]);return n})(n,["components"]);return(0,l.kt)("wrapper",(e=g(g({},T),p),s(e,d({components:i,mdxType:"MDXLayout"}))),(0,l.kt)("h1",g({},{id:"29-reserved-words"}),"2.9 Reserved Words"),(0,l.kt)("admonition",g({},{type:"warning"}),(0,l.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,l.kt)("a",g({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,l.kt)("h4",g({},{id:"syntax"}),"Syntax"),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"},"1/1")),(0,l.kt)("p",null,(0,l.kt)("em",null,"This paragraph was deleted."),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"},"2/3")),(0,l.kt)("p",null,"{",(0,l.kt)("em",null,"AI95-00284-02"),"}"," ","{",(0,l.kt)("em",null,"AI95-00395-01"),"}"," ","{",(0,l.kt)("em",null,"AI05-0091-1"),"}"," ",(0,l.kt)("br",null),"The following are the ",(0,l.kt)("em",null,"reserved words"),". Within a program, some or all of the letters of a reserved word may be in upper case. ",(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"},"2.a")),(0,l.kt)(r.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,l.kt)("strong",null),"Reserved words have special meaning in the syntax. In addition, certain reserved words are used as attribute names.",(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"},"2.b")),(0,l.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"The syntactic category ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," no longer allows reserved words. We have added the few reserved words that are legal explicitly to the syntax for ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-4/AA-4.1#S0100"},"attribute_reference")),". Allowing identifier to include reserved words has been a source of confusion for some users, and differs from the way they are treated in the C and Pascal language definitions.",(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"},"2.c/5")),(0,l.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,l.kt)("em",null,"AI12-0005-1"),"}"," ",(0,l.kt)("br",null),"Reserved words are sometimes called ",(0,l.kt)("em",null,"keywords"),"  in informal material. ",(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"abort"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"abs"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"abstract"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"accept"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"access"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"aliased"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"all"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"and"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"array"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"at"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"begin"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"body"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"case"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"constant"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"declare"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"delay"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"delta"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"digits"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"do"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"else"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"elsif"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"end"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"entry"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"exception"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"exit"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"for"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"function"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"generic"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"goto"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"if"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"in"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"interface"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"is"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"limited"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"loop"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"mod"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"new"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"not"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"null"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"of"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"or"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"others"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"out"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"overriding"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"package"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"parallel"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"pragma"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"private"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"procedure"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"protected"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"raise"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"range"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"record"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"rem"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"renames"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"requeue"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"return"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"reverse"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"select"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"separate"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"some"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"subtype"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"synchronized"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"tagged"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"task"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"terminate"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"then"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"type"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"until"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"use"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"when"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"while"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"with"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"})),(0,l.kt)("p",null,(0,l.kt)("strong",null,"xor"),(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"},"3/5")),(0,l.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 1   ","{",(0,l.kt)("em",null,"AI12-0440-1"),"}"," ",(0,l.kt)("br",null),"The reserved words appear in ",(0,l.kt)("strong",null,"lower case boldface")," in this document, except when used in the ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-6/AA-6.1#S0199"},"designator"))," of an attribute (see ",(0,l.kt)("a",{href:"../AA-4/AA-4.1#Subclause_4.1.4"},"4.1.4"),"). Lower case boldface is also used for a reserved word in a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal"))," used as an ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-6/AA-6.1#S0202"},"operator_symbol")),". This is merely a convention - programs can be written in whatever typeface is desired and available. ",(0,l.kt)("br",null)),(0,l.kt)("h4",g({},{id:"incompatibilities-with-ada-83"}),"Incompatibilities With Ada 83"),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"},"3.a")),(0,l.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"The following words are not reserved in Ada 83, but are reserved in Ada 95: ",(0,l.kt)("strong",null,"abstract"),", ",(0,l.kt)("strong",null,"aliased"),", ",(0,l.kt)("strong",null,"protected"),", ",(0,l.kt)("strong",null,"requeue"),", ",(0,l.kt)("strong",null,"tagged"),", ",(0,l.kt)("strong",null,"until"),". ",(0,l.kt)("br",null)),(0,l.kt)("h4",g({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83"),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"},"3.b/3")),(0,l.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,l.kt)("em",null,"AI05-0299-1"),"}"," ",(0,l.kt)("br",null),'The subclause entitled "Allowed Replacements of Characters" has been moved to ',(0,l.kt)("a",{href:"../AA-J/"},"Annex J"),', "',(0,l.kt)("a",{href:"../AA-J/"},"Obsolescent Features"),'". ',(0,l.kt)("br",null)),(0,l.kt)("h4",g({},{id:"incompatibilities-with-ada-95"}),"Incompatibilities With Ada 95"),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"},"3.c/2")),(0,l.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,l.kt)("em",null,"AI95-00284-02"),"}"," ",(0,l.kt)("br",null),"The following words are not reserved in Ada 95, but are reserved in Ada 2005: ",(0,l.kt)("strong",null,"interface"),", ",(0,l.kt)("strong",null,"overriding"),", ",(0,l.kt)("strong",null,"synchronized"),". A special allowance is made for ",(0,l.kt)("strong",null,"pragma")," Interface (see ",(0,l.kt)("a",{href:"../AA-J/AA-J.12"},"J.12"),"). Uses of these words as identifiers will need to be changed, but we do not expect them to be common. ",(0,l.kt)("br",null)),(0,l.kt)("h4",g({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95"),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"},"3.d/2")),(0,l.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,l.kt)("em",null,"AI95-00395-01"),"}"," ",(0,l.kt)("br",null),"The definition of upper case equivalence has been modified to allow identifiers using all of the characters of ISO 10646. This change has no effect on the character sequences that are reserved words, but does make some unusual sequences of characters illegal. ",(0,l.kt)("br",null)),(0,l.kt)("h4",g({},{id:"incompatibilities-with-ada-2005"}),"Incompatibilities With Ada 2005"),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"},"3.e/3")),(0,l.kt)(r.Z,{type:"aarm",aarm:"correction",title:"Correction:",mdxType:"Admonition"},"{",(0,l.kt)("em",null,"AI05-0091-1"),"}"," ",(0,l.kt)("strong",null,(0,l.kt)("br",null))," Removed ",(0,l.kt)("code",null,"other_format")," characters from reserved words in order to be compatible with the latest Unicode recommendations. This change can only affect programs written for original Ada 2005, and there is little reason to put ",(0,l.kt)("code",null,"other_format")," characters into reserved words in the first place, so there should be very few such programs.",(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"},"3.f/3")),(0,l.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,l.kt)("em",null,"AI05-0176-1"),"}"," ",(0,l.kt)("br",null),"The following word is not reserved in Ada 2005, but is reserved in Ada 2012: ",(0,l.kt)("strong",null,"some"),". Uses of this word as an identifier will need to be changed, but we do not expect them to be common. ",(0,l.kt)("br",null)),(0,l.kt)("h4",g({},{id:"incompatibilities-with-ada-2012"}),"Incompatibilities With Ada 2012"),(0,l.kt)(a.Z,{mdxType:"AnnotatedOnly"},(0,l.kt)(o.Z,{mdxType:"MarginText"},"3.g/5")),(0,l.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,l.kt)("em",null,"AI12-0119-1"),"}"," ",(0,l.kt)("br",null),"The following word is not reserved in Ada 2012, but is reserved in Ada 2022: ",(0,l.kt)("strong",null,"parallel"),". Uses of this word as an identifier will need to be changed, but we do not expect them to be common. ",(0,l.kt)("br",null)))}h.isMDXComponent=!0}}]);