"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1504],{7265:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>y,frontMatter:()=>m,metadata:()=>f,toc:()=>A});var n=a(1716),r=a(7556),o=a(9464),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&h(e,a,t[a]);if(c)for(var a of c(t))u.call(t,a)&&h(e,a,t[a]);return e};const m={sidebar_position:192},b="J.2 Allowed Replacements of Characters",f={unversionedId:"arm/AA-J/AA-J.2",id:"arm/AA-J/AA-J.2",title:"J.2 Allowed Replacements of Characters",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-J/AA-J.2.mdx",sourceDirName:"arm/AA-J",slug:"/arm/AA-J/AA-J.2",permalink:"/docs/arm/AA-J/AA-J.2",draft:!1,tags:[],version:"current",sidebarPosition:192,frontMatter:{sidebar_position:192},sidebar:"referenceManualSidebar",previous:{title:"J.1 Renamings of Library Units",permalink:"/docs/arm/AA-J/AA-J.1"},next:{title:"J.3 Reduced Accuracy Subtypes",permalink:"/docs/arm/AA-J/AA-J.3"}},k={},A=[{value:"Syntax",id:"syntax",level:4}],g={toc:A};function y(e){var t,a=e,{components:l}=a,h=((e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=p(p({},g),h),i(t,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"j2-allowed-replacements-of-characters"}),"J.2 Allowed Replacements of Characters"),(0,n.kt)("admonition",p({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.kt)("a",p({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,n.kt)("h4",p({},{id:"syntax"}),"Syntax"),(0,n.kt)("p",null,"The following replacements are allowed for the vertical line, number sign, and quotation mark characters: ",(0,n.kt)("br",null)),(0,n.kt)("ul",null,(0,n.kt)("li",null,"A vertical line character (|) can be replaced by an exclamation mark (!) where used as a delimiter.",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The number sign characters (#) of a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.4#S0011"},"based_literal"))," can be replaced by colons (:) provided that the replacement is done for both occurrences. ",(0,n.kt)("br",null))),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,n.kt)("strong",null,"To be honest: "),"{",(0,n.kt)("em",null,"AI95-00285-01"),"}"," ",(0,n.kt)("br",null),"The intent is that such a replacement works in the Value, Wide_Value, and Wide_Wide_Value attributes, and in the Get procedures of Text_IO (and Wide_Text_IO and Wide_Wide_Text_IO as well)","}",', so that things like "16:.123:" is acceptable. ',(0,n.kt)("br",null)),(0,n.kt)("ul",null,(0,n.kt)("li",null,'The quotation marks (") used as string brackets at both ends of a string literal can be replaced by percent signs (%) provided that the enclosed sequence of characters contains no quotation mark, and provided that both string brackets are replaced. Any percent sign within the sequence of characters shall then be doubled and each such doubled percent sign is interpreted as a single percent sign character value. ',(0,n.kt)("br",null))),(0,n.kt)("p",null,"These replacements do not change the meaning of the program. ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"The original purpose of this feature was to support hardware (for example, teletype machines) that has long been obsolete. The feature is no longer necessary for that reason. Another use of the feature has been to replace the vertical line character (|) when using certain hardware that treats that character as a (non-English) letter. The feature is no longer necessary for that reason, either, since Ada 95 has full support for international character sets. Therefore, we believe this feature is no longer necessary.",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"Users of equipment that still uses | to represent a letter will continue to do so. Perhaps by next the time Ada is revised, such equipment will no longer be in use.",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"Note that it was never legal to use this feature as a convenient method of including double quotes in a string without doubling them - the string literal: ",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{mdxType:"CodeBlock"},'%"This is quoted."%',"\n"),(0,n.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI05-0248-1"),"}"," ",(0,n.kt)("br",null),"is not legal in Ada (and never was legal). One has to write: ",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{mdxType:"CodeBlock"},'"""This is quoted."""',"\n"))}y.isMDXComponent=!0}}]);