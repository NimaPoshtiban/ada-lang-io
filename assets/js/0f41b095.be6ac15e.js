"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[4354],{2477:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>b,frontMatter:()=>k,metadata:()=>p,toc:()=>f});var n=a(1716),r=a(7556),l=a(9464),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&u(e,a,t[a]);if(d)for(var a of d(t))A.call(t,a)&&u(e,a,t[a]);return e};const k={sidebar_position:12},h="2.6 String Literals",p={unversionedId:"arm/AA-2/AA-2.6",id:"arm/AA-2/AA-2.6",title:"2.6 String Literals",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-2/AA-2.6.mdx",sourceDirName:"arm/AA-2",slug:"/arm/AA-2/AA-2.6",permalink:"/docs/arm/AA-2/AA-2.6",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"referenceManualSidebar",previous:{title:"2.5 Character Literals",permalink:"/docs/arm/AA-2/AA-2.5"},next:{title:"2.7 Comments",permalink:"/docs/arm/AA-2/AA-2.7"}},g={},f=[{value:"Syntax",id:"syntax",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}],y={toc:f};function b(e){var t,a=e,{components:i}=a,u=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&A.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},y),u),o(t,s({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"26-string-literals"}),"2.6 String Literals"),(0,n.kt)("admonition",m({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,n.kt)("p",null,"[A ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal"))," is formed by a sequence of graphic characters (possibly none) enclosed between two quotation marks used as string brackets. They are used to represent ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-6/AA-6.1#S0202"},"operator_symbol")),"s (see 6.1), values of a string type (see 4.2), and array subaggregates (see 4.3.3). ]"),(0,n.kt)("h4",m({},{id:"syntax"}),"Syntax"),(0,n.kt)("p",null,(0,n.kt)("code",null,"string_literal"),(0,n.kt)("a",{id:"S0016"}),(0,n.kt)("code",null," ::= "),'"',"{",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0017"},"string_element")),"}",'"'),(0,n.kt)("p",null,(0,n.kt)("code",null,"string_element"),(0,n.kt)("a",{id:"S0017"}),(0,n.kt)("code",null," ::= "),'"" | ',(0,n.kt)("em",null,"non_quotation_mark_"),(0,n.kt)("code",null,"graphic_character")),(0,n.kt)("p",null,"A ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0017"},"string_element")),' is either a pair of quotation marks (""), or a single ',(0,n.kt)("code",null,"graphic_character")," other than a quotation mark. "),(0,n.kt)("h4",m({},{id:"static-semantics"}),"Static Semantics"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",null,"sequence of characters")," of a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal"))," is formed from the sequence of ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0017"},"string_element")),"s between the bracketing quotation marks, in the given order, with a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0017"},"string_element")),' that is "" becoming a single quotation mark in the sequence of characters, and any other ',(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0017"},"string_element"))," being reproduced in the sequence."),(0,n.kt)("p",null,"A ",(0,n.kt)("em",null,"null string literal")," is a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal"))," with no ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0017"},"string_element")),"s between the quotation marks."),(0,n.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,n.kt)("p",null,"NOTE 1   An end of line cannot appear in a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal")),".")),(0,n.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,n.kt)("p",null,"NOTE 2   ","{",(0,n.kt)("em",null,"AI95-00285-01"),"}"," No transformation is performed on the sequence of characters of a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal")),". ")),(0,n.kt)("h4",m({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,(0,n.kt)("em",null,"Examples of string literals:")," "),(0,n.kt)(r.Z,{mdxType:"CodeBlock"},"{","AI95-00433-01","}",' "Message of the day:"',"\n","\n",'""                    --  a null string literal',"\n",'" "   "A"   """"      --  three string literals of length 1',"\n","\n",'"Characters such as $, %, and ',"}",' are allowed in string literals"',"\n",'"Archimedes said """""',"\n",'"Volume of cylinder (r\ufffdh) = "',"\n"),(0,n.kt)("h4",m({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83"),(0,n.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,n.kt)("p",null,"The wording has been changed to be strictly lexical. No mention is made of string or character values, since ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal")),"s are also used to represent ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-6/AA-6.1#S0202"},"operator_symbol")),"s, which don't have a defined value.")),(0,n.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,n.kt)("p",null,"The syntax is described differently. ")),(0,n.kt)("h4",m({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95"),(0,n.kt)(l.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00285-01"),"}"," We explicitly say that the characters of a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal"))," should be used as is. In particular, no normalization or folding should be performed on a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal")),". ")))}b.isMDXComponent=!0}}]);