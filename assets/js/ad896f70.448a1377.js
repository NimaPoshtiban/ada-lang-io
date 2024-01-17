"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[3788],{70078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>f,frontMatter:()=>T,metadata:()=>h,toc:()=>c});var a=n(91716),i=n(21256),l=n(24895),r=n(48424),o=n(82262),d=Object.defineProperty,s=Object.defineProperties,m=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&y(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&y(e,n,t[n]);return e};const T={sidebar_position:4},g="1 General",h={unversionedId:"arm/AA-1/AA-1",id:"arm/AA-1/AA-1",title:"1 General",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-1/AA-1.mdx",sourceDirName:"arm/AA-1",slug:"/arm/AA-1/",permalink:"/docs/arm/AA-1/",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"referenceManualSidebar",previous:{title:"Introduction",permalink:"/docs/arm/AA-0.2"},next:{title:"1.1 Scope",permalink:"/docs/arm/AA-1/AA-1.1"}},b={},c=[],A={toc:c};function f(e){var t,n=e,{components:d}=n,y=((e,t)=>{var n={};for(var a in e)k.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=x(x({},A),y),s(t,m({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("h1",x({},{id:"1-general"}),"1 General"),(0,a.kt)("admonition",x({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",x({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.a/5"),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,a.kt)("strong",null),"This Annotated Ada Reference Manual (AARM) contains the entire text of the fourth edition of the Ada Reference Manual (referred to here as the Ada 2022 RM), plus certain annotations. The annotations give a more in-depth analysis of the language. They describe the reason for each nonobvious rule, and point out interesting ramifications of the rules and interactions among the rules (interesting to language lawyers, that is). Differences between Ada 83, Ada 95, Ada 2005, Ada 2012, and Ada 2022 are listed. (The text you are reading now is an annotation.)",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.b/3"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The AARM stresses detailed correctness and uniformity over readability and understandability. We're not trying to make the language \u201cappear\u201d simple here; on the contrary, we're trying to expose hidden complexities, so we can more easily detect language bugs. The Ada 2022 RM, on the other hand, is intended to be a more readable document for programmers.",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.c"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The annotations in the AARM are as follows: ",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.d/3"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Text that is logically redundant is shown [in square brackets, like this]. Technically, such text could be written as a Note in the Ada 2022 RM (and the Ada 95 and 2005 RMs before it), since it is really a theorem that can be proven from the nonredundant rules of the language. We use the square brackets instead when it seems to make the Ada 2022 RM more readable.",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.e"),(0,a.kt)("li",null,"The rules of the language (and some AARM-only text) are categorized, and placed under certain ",(0,a.kt)("em",null,"sub-headings")," that indicate the category. For example, the distinction between Name Resolution Rules and Legality Rules is particularly important, as explained in ",(0,a.kt)("a",{href:"../AA-8/AA-8.6"},"8.6"),".",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.f"),(0,a.kt)("li",null,"Text under the following sub-headings appears in both documents: ",(0,a.kt)("br",null)))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.g"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"The unlabeled text at the beginning of each clause or subclause,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.h"),(0,a.kt)("li",null,"Syntax,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.i"),(0,a.kt)("li",null,"Name Resolution Rules,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.j"),(0,a.kt)("li",null,"Legality Rules,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.k"),(0,a.kt)("li",null,"Static Semantics,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.l"),(0,a.kt)("li",null,"Post-Compilation Rules,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.m"),(0,a.kt)("li",null,"Dynamic Semantics,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.n"),(0,a.kt)("li",null,"Bounded (Run-Time) Errors,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.o"),(0,a.kt)("li",null,"Erroneous Execution,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.p"),(0,a.kt)("li",null,"Implementation Requirements,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.q"),(0,a.kt)("li",null,"Documentation Requirements,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.r"),(0,a.kt)("li",null,"Metrics,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.s"),(0,a.kt)("li",null,"Implementation Permissions,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.t"),(0,a.kt)("li",null,",",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.u"),(0,a.kt)("li",null,"NOTES,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.v"),(0,a.kt)("li",null,"Examples. ",(0,a.kt)("br",null)))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.w/3"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Text under the following sub-headings does not appear in the Ada 2022 RM: ",(0,a.kt)("br",null)))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.x"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Language Design Principles,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.y"),(0,a.kt)("li",null,"Inconsistencies With Ada 83,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.z"),(0,a.kt)("li",null,"Incompatibilities With Ada 83,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.aa"),(0,a.kt)("li",null,"Extensions to Ada 83,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.bb/2"),(0,a.kt)("li",null,"Wording Changes from Ada 83,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.bb.1/2"),(0,a.kt)("li",null,"Inconsistencies With Ada 95,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.bb.2/2"),(0,a.kt)("li",null,"Incompatibilities With Ada 95,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.bb.3/2"),(0,a.kt)("li",null,"Extensions to Ada 95,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.bb.4/3"),(0,a.kt)("li",null,"Wording Changes from Ada 95,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.bb.5/3"),(0,a.kt)("li",null,"Inconsistencies With Ada 2005,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.bb.6/3"),(0,a.kt)("li",null,"Incompatibilities With Ada 2005,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.bb.7/3"),(0,a.kt)("li",null,"Extensions to Ada 2005,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.bb.8/4"),(0,a.kt)("li",null,"Wording Changes from Ada 2005,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.bb.9/4"),(0,a.kt)("li",null,"Inconsistencies With Ada 2012,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.bb.10/4"),(0,a.kt)("li",null,"Incompatibilities With Ada 2012,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.bb.11/4"),(0,a.kt)("li",null,"Extensions to Ada 2012,",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.bb.12/4"),(0,a.kt)("li",null,"Wording Changes from Ada 2012.",(0,a.kt)("br",null)))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.cc"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"The AARM also includes the following kinds of annotations. These do not necessarily annotate the immediately preceding rule, although they often do. ",(0,a.kt)("br",null)))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.dd"),(0,a.kt)(i.Z,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,a.kt)("strong",null),"An explanation of why a certain rule is necessary, or why it is worded in a certain way. ",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.ee"),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"An obscure ramification of the rules that is of interest only to language lawyers. (If a ramification of the rules is of interest to programmers, then it appears under NOTES.) ",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.ff"),(0,a.kt)(i.Z,{type:"aarm",aarm:"proof",mdxType:"Admonition"},(0,a.kt)("strong",null),"An informal proof explaining how a given Note or [marked-as-redundant] piece of text follows from the other rules of the language. ",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.gg"),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-note",mdxType:"Admonition"},(0,a.kt)("strong",null),"A hint about how to implement a feature, or a particular potential pitfall that an implementer needs to be aware of.",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.hh"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,a.kt)("strong",null,"Change:")," Change annotations are not used in this version. Changes from previous versions have been removed. Changes in this version are marked with versioned paragraph numbers, as explained in the \u201cCorrigendum Changes\u201d clause of the \u201cIntroduction\u201d. ",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.ii"),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,a.kt)("strong",null),"Other annotations not covered by the above. ",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.jj"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,a.kt)("strong",null,"To be honest: "),"A rule that is considered logically necessary to the definition of the language, but which is so obscure or pedantic that only a language lawyer would care. These are the only annotations that could be considered part of the language definition. ",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.jj.1/5"),(0,a.kt)(o.Z,{items:["AI12-0443-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,a.kt)("strong",null,"Term entry: "),"The text of a Term and Definition entry \u2014 this text will also appear in ",(0,a.kt)("a",{href:"../AA-1/AA-1.3"},"1.3"),", \u201c",(0,a.kt)("a",{href:"../AA-1/AA-1.3"},"Terms and Definitions"),"\u201d. ",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.kk/3"),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,a.kt)("strong",null),"In general, the Ada 2022 RM text appears in the normal font, whereas AARM-only text appears in a smaller font. Notes also appear in the smaller font, as recommended by ISO/IEC style guidelines. Ada examples are also usually printed in a smaller font.",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.ll"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"If you have trouble finding things, be sure to use the index. Each defined term appears there, and also in ",(0,a.kt)("em",null,"italics, like this"),". Syntactic categories defined in BNF are also indexed.",(0,a.kt)("br",null))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.mm"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"A definition marked \u201c[distributed]\u201d is the main definition for a term whose complete definition is given in pieces distributed throughout the document. The pieces are marked \u201c[partial]\u201d or with a phrase explaining what cases the partial definition applies to. ",(0,a.kt)("br",null))))}f.isMDXComponent=!0}}]);