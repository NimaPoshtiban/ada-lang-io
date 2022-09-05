"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[261],{1716:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(6687);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(9440),n=(r(6687),r(1716));const i={sidebar_position:12},o="2.6  String Literals",s={unversionedId:"arm/AA-2.6",id:"arm/AA-2.6",title:"2.6  String Literals",description:"A [stringliteral is formed by a sequence of graphic characters (possibly none) enclosed between two quotation marks used as string brackets. They are used to represent operatorsymbols (see 6.1), values of a string type (see 4.2), and array subaggregates (see 4.3.3). ]",source:"@site/docs/arm/AA-2.6.md",sourceDirName:"arm",slug:"/arm/AA-2.6",permalink:"/docs/arm/AA-2.6",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"2.5  Character Literals",permalink:"/docs/arm/AA-2.5"},next:{title:"2.7  Comments",permalink:"/docs/arm/AA-2.7"}},l={},c=[{value:"Syntax",id:"syntax",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"26--string-literals"},"2.6  String Literals"),(0,n.kt)("p",null,"[A ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.6#S0016"},"string_literal")," is formed by a sequence of graphic characters (possibly none) enclosed between two quotation marks used as string brackets. They are used to represent ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.1#S0202"},"operator_symbol"),"s (see 6.1), values of a string type (see 4.2), and array subaggregates (see 4.3.3). ]"),(0,n.kt)("h4",{id:"syntax"},"Syntax"),(0,n.kt)("p",null,"string_literal",(0,n.kt)("a",{id:"S0016"}),' ::= "{',(0,n.kt)("a",{parentName:"p",href:"./AA-2.6#S0017"},"string_element"),'}"'),(0,n.kt)("p",null,"string_element",(0,n.kt)("a",{id:"S0017"}),' ::= "" | non_quotation_mark_graphic_character'),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.6#S0017"},"string_element"),' is either a pair of quotation marks (""), or a single graphic_character other than a quotation mark. '),(0,n.kt)("h4",{id:"static-semantics"},"Static Semantics"),(0,n.kt)("p",null,"The sequence of characters of a ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.6#S0016"},"string_literal")," is formed from the sequence of ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.6#S0017"},"string_element"),"s between the bracketing quotation marks, in the given order, with a ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.6#S0017"},"string_element"),' that is "" becoming a single quotation mark in the sequence of characters, and any other ',(0,n.kt)("a",{parentName:"p",href:"./AA-2.6#S0017"},"string_element")," being reproduced in the sequence."),(0,n.kt)("p",null,"A null string literal is a ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.6#S0016"},"string_literal")," with no ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.6#S0017"},"string_element"),"s between the quotation marks."),(0,n.kt)("p",null,"NOTE 1   An end of line cannot appear in a ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.6#S0016"},"string_literal"),"."),(0,n.kt)("p",null,"NOTE 2   {AI95-00285-01} No transformation is performed on the sequence of characters of a ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.6#S0016"},"string_literal"),". "),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Examples of string literals: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ada"},'{AI95-00433-01} "Message of the day:"\n\n""                    --  a null string literal\n" "   "A"   """"      --  three string literals of length 1\n\n"Characters such as $, %, and } are allowed in string literals"\n"Archimedes said """""\n"Volume of cylinder (r\ufffdh) = "\n\n')),(0,n.kt)("h4",{id:"wording-changes-from-ada-83"},"Wording Changes from Ada 83"),(0,n.kt)("p",null,"The wording has been changed to be strictly lexical. No mention is made of string or character values, since ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.6#S0016"},"string_literal"),"s are also used to represent ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.1#S0202"},"operator_symbol"),"s, which don't have a defined value."),(0,n.kt)("p",null,"The syntax is described differently. "),(0,n.kt)("h4",{id:"wording-changes-from-ada-95"},"Wording Changes from Ada 95"),(0,n.kt)("p",null,"{AI95-00285-01} We explicitly say that the characters of a ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.6#S0016"},"string_literal")," should be used as is. In particular, no normalization or folding should be performed on a ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.6#S0016"},"string_literal"),"."))}m.isMDXComponent=!0}}]);