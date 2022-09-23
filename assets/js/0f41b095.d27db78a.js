"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[4354],{2477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>b,frontMatter:()=>h,metadata:()=>y,toc:()=>x});var a=n(1716),r=n(2787),l=n(2670),o=n(8604),i=n(6990),s=Object.defineProperty,d=Object.defineProperties,A=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&u(e,n,t[n]);if(k)for(var n of k(t))c.call(t,n)&&u(e,n,t[n]);return e};const h={sidebar_position:12},g="2.6 String Literals",y={unversionedId:"arm/AA-2/AA-2.6",id:"arm/AA-2/AA-2.6",title:"2.6 String Literals",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-2/AA-2.6.mdx",sourceDirName:"arm/AA-2",slug:"/arm/AA-2/AA-2.6",permalink:"/docs/arm/AA-2/AA-2.6",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"referenceManualSidebar",previous:{title:"2.5 Character Literals",permalink:"/docs/arm/AA-2/AA-2.5"},next:{title:"2.7 Comments",permalink:"/docs/arm/AA-2/AA-2.7"}},f={},x=[{value:"Syntax",id:"syntax",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}],T={toc:x};function b(e){var t,n=e,{components:s}=n,u=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&k)for(var a of k(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},T),u),d(t,A({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("h1",p({},{id:"26-string-literals"}),"2.6 String Literals"),(0,a.kt)("admonition",p({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",p({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"1")),(0,a.kt)("p",null,"[A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal"))," is formed by a sequence of graphic characters (possibly none) enclosed between two quotation marks used as string brackets. They are used to represent ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.1#S0202"},"operator_symbol")),"s (see ",(0,a.kt)("a",{href:"../AA-6/AA-6.1"},"6.1"),"), values of a string type (see ",(0,a.kt)("a",{href:"../AA-4/AA-4.2"},"4.2"),"), and array subaggregates (see ",(0,a.kt)("a",{href:"../AA-4/AA-4.3#Subclause_4.3.3"},"4.3.3"),"). ]",(0,a.kt)("br",null)),(0,a.kt)("h4",p({},{id:"syntax"}),"Syntax"),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"2")),(0,a.kt)(o.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"string_literal"),(0,a.kt)("a",{id:"S0016"}),(0,a.kt)("code",null," ::= "),'"',"{",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.6#S0017"},"string_element")),"}",'"',(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"3"))),(0,a.kt)(o.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"string_element"),(0,a.kt)("a",{id:"S0017"}),(0,a.kt)("code",null," ::= "),'"" | ',(0,a.kt)("em",null,"non_quotation_mark_"),(0,a.kt)("code",null,"graphic_character"),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"4"))),(0,a.kt)("p",null,"A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.6#S0017"},"string_element")),' is either a pair of quotation marks (""), or a single ',(0,a.kt)("code",null,"graphic_character")," other than a quotation mark. ",(0,a.kt)("br",null)),(0,a.kt)("h4",p({},{id:"static-semantics"}),"Static Semantics"),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"5")),(0,a.kt)("p",null,"The ",(0,a.kt)("em",null,"sequence of characters")," of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal"))," is formed from the sequence of ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.6#S0017"},"string_element")),"s between the bracketing quotation marks, in the given order, with a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.6#S0017"},"string_element")),' that is "" becoming a single quotation mark in the sequence of characters, and any other ',(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.6#S0017"},"string_element"))," being reproduced in the sequence.",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"6")),(0,a.kt)("p",null,"A ",(0,a.kt)("em",null,"null string literal")," is a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal"))," with no ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.6#S0017"},"string_element")),"s between the quotation marks.",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"7")),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 1   An end of line cannot appear in a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal")),".",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"7.1/2")),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 2   ","{",(0,a.kt)("em",null,"AI95-00285-01"),"}"," ",(0,a.kt)("br",null),"No transformation is performed on the sequence of characters of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal")),". ",(0,a.kt)("br",null)),(0,a.kt)("h4",p({},{id:"examples"}),"Examples"),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"8")),(0,a.kt)("p",null,(0,a.kt)("em",null,"Examples of string literals:")," ",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"9/2")),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"--  ","{","AI95-00433-01","}","\n",' "Message of the day:"',"\n","\n",'""                    --  a null string literal',"\n",'" "   "A"   """"      --  three string literals of length 1',"\n","\n",'"Characters such as $, %, and ',"}",' are allowed in string literals"',"\n",'"Archimedes said ""\u0395\u03cd\u03c1\u03b7\u03ba\u03b1"""',"\n",'"Volume of cylinder (r\xb2h) = "',"\n"),(0,a.kt)("h4",p({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83"),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"9.a")),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"The wording has been changed to be strictly lexical. No mention is made of string or character values, since ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal")),"s are also used to represent ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.1#S0202"},"operator_symbol")),"s, which don't have a defined value.",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"9.b")),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"The syntax is described differently. ",(0,a.kt)("br",null)),(0,a.kt)("h4",p({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95"),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"9.c/2")),(0,a.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,a.kt)("em",null,"AI95-00285-01"),"}"," ",(0,a.kt)("br",null),"We explicitly say that the characters of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal"))," should be used as is. In particular, no normalization or folding should be performed on a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal")),". ",(0,a.kt)("br",null)))}b.isMDXComponent=!0}}]);