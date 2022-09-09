"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1137],{3870:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>S,frontMatter:()=>h,metadata:()=>f,toc:()=>b});var a=l(1716),n=l(7556),i=l(9464),r=Object.defineProperty,o=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,k=(e,t,l)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,c=(e,t)=>{for(var l in t||(t={}))A.call(t,l)&&k(e,l,t[l]);if(u)for(var l of u(t))s.call(t,l)&&k(e,l,t[l]);return e};const h={sidebar_position:10},m="2.4 Numeric Literals",f={unversionedId:"arm/AA-2/AA-2.4",id:"arm/AA-2/AA-2.4",title:"2.4 Numeric Literals",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-2/AA-2.4.mdx",sourceDirName:"arm/AA-2",slug:"/arm/AA-2/AA-2.4",permalink:"/docs/arm/AA-2/AA-2.4",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"referenceManualSidebar",previous:{title:"2.3 Identifiers",permalink:"/docs/arm/AA-2/AA-2.3"},next:{title:"2.5 Character Literals",permalink:"/docs/arm/AA-2/AA-2.5"}},p={},b=[{value:"Syntax",id:"syntax",level:4},{value:"2.4.1  Decimal Literals",id:"241--decimal-literals",level:2},{value:"Syntax",id:"syntax-1",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"2.4.2  Based Literals",id:"242--based-literals",level:2},{value:"Syntax",id:"syntax-2",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83-1",level:4}],g={toc:b};function S(e){var t,l=e,{components:r}=l,k=((e,t)=>{var l={};for(var a in e)A.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&s.call(e,a)&&(l[a]=e[a]);return l})(l,["components"]);return(0,a.kt)("wrapper",(t=c(c({},g),k),o(t,d({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",c({},{id:"24-numeric-literals"}),"2.4 Numeric Literals"),(0,a.kt)("admonition",c({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)("p",null,"There are two kinds of ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0006"},"numeric_literal")),"s, ",(0,a.kt)("em",null,"real literals")," and ",(0,a.kt)("em",null,"integer literals"),". A real literal is a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0006"},"numeric_literal"))," that includes a point; an integer literal is a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0006"},"numeric_literal"))," without a point. ",(0,a.kt)("br",null)),(0,a.kt)("h4",c({},{id:"syntax"}),"Syntax"),(0,a.kt)("p",null,(0,a.kt)("code",null,"numeric_literal"),(0,a.kt)("a",{id:"S0006"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0007"},"decimal_literal"))," | ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0011"},"based_literal")),(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 1   The type of an integer literal is ",(0,a.kt)("em",null,"universal_integer"),". The type of a real literal is ",(0,a.kt)("em",null,"universal_real"),". ",(0,a.kt)("br",null)),(0,a.kt)("h2",c({},{id:"241--decimal-literals"}),"2.4.1  Decimal Literals"),(0,a.kt)("p",null,"A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0007"},"decimal_literal"))," is a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0006"},"numeric_literal"))," in the conventional decimal notation (that is, the base is ten). ",(0,a.kt)("br",null)),(0,a.kt)("h4",c({},{id:"syntax-1"}),"Syntax"),(0,a.kt)("p",null,(0,a.kt)("code",null,"decimal_literal"),(0,a.kt)("a",{id:"S0007"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0008"},"numeral"))," [.",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0008"},"numeral")),"] [",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0009"},"exponent")),"]",(0,a.kt)("br",null)),(0,a.kt)("p",null,(0,a.kt)("code",null,"numeral"),(0,a.kt)("a",{id:"S0008"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0010"},"digit"))," ","{","[",(0,a.kt)("code",null,"underline"),"] ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0010"},"digit")),"}",(0,a.kt)("br",null)),(0,a.kt)("p",null,(0,a.kt)("code",null,"exponent"),(0,a.kt)("a",{id:"S0009"}),(0,a.kt)("code",null," ::= "),"E [+] ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0008"},"numeral"))," | E  ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0008"},"numeral")),(0,a.kt)("br",null)),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00285-01"),"}"," ",(0,a.kt)("br",null),(0,a.kt)("code",null,"digit"),(0,a.kt)("a",{id:"S0010"}),(0,a.kt)("code",null," ::= "),"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",(0,a.kt)("br",null)),(0,a.kt)("p",null,"An ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0009"},"exponent"))," for an integer literal shall not have a minus sign. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"Although this rule is in this subclause, it applies also to the next subclause. ",(0,a.kt)("br",null)),(0,a.kt)("h4",c({},{id:"static-semantics"}),"Static Semantics"),(0,a.kt)("p",null,"An underline character in a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0006"},"numeric_literal"))," does not affect its meaning. The letter E of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0009"},"exponent"))," can be written either in lower case or in upper case, with the same meaning. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"Although these rules are in this subclause, they apply also to the next subclause. ",(0,a.kt)("br",null)),(0,a.kt)("p",null,"An ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0009"},"exponent"))," indicates the power of ten by which the value of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0007"},"decimal_literal"))," without the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0009"},"exponent"))," is to be multiplied to obtain the value of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0007"},"decimal_literal"))," with the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0009"},"exponent")),". ",(0,a.kt)("br",null)),(0,a.kt)("h4",c({},{id:"examples"}),"Examples"),(0,a.kt)("p",null,(0,a.kt)("em",null,"Examples of decimal literals:")," ",(0,a.kt)("br",null)),(0,a.kt)(n.Z,{mdxType:"CodeBlock"},"12        0      1E6    123_456    --  integer literals","\n","\n","12.0      0.0    0.456  3.14159_26 --  real literals","\n"),(0,a.kt)("h4",c({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"We have changed the syntactic category name ",(0,a.kt)("code",null,"integer")," to be ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0008"},"numeral")),". We got this idea from ACID. It avoids the confusion between this and integers. (Other places don't offer similar confusions. For example, a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal"))," is different from a string.) ",(0,a.kt)("br",null)),(0,a.kt)("h2",c({},{id:"242--based-literals"}),"2.4.2  Based Literals"),(0,a.kt)("p",null,"[ A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0011"},"based_literal"))," is a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0006"},"numeric_literal"))," expressed in a form that specifies the base explicitly.] ",(0,a.kt)("br",null)),(0,a.kt)("h4",c({},{id:"syntax-2"}),"Syntax"),(0,a.kt)("p",null,(0,a.kt)("code",null,"based_literal"),(0,a.kt)("a",{id:"S0011"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("br",null),"   ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0012"},"base"))," # ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0013"},"based_numeral"))," [.",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0013"},"based_numeral")),"] # [",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0009"},"exponent")),"]",(0,a.kt)("br",null)),(0,a.kt)("p",null,(0,a.kt)("code",null,"base"),(0,a.kt)("a",{id:"S0012"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0008"},"numeral")),(0,a.kt)("br",null)),(0,a.kt)("p",null,(0,a.kt)("code",null,"based_numeral"),(0,a.kt)("a",{id:"S0013"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("br",null),"   ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0014"},"extended_digit"))," ","{","[",(0,a.kt)("code",null,"underline"),"] ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0014"},"extended_digit")),"}",(0,a.kt)("br",null)),(0,a.kt)("p",null,(0,a.kt)("code",null,"extended_digit"),(0,a.kt)("a",{id:"S0014"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0010"},"digit"))," | A | B | C | D | E | F",(0,a.kt)("br",null)),(0,a.kt)("h4",c({},{id:"legality-rules"}),"Legality Rules"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",null,"base")," (the numeric value of the decimal ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0008"},"numeral"))," preceding the first #) shall be at least two and at most sixteen. The ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0014"},"extended_digit")),"s A through F represent the digits ten through fifteen, respectively. The value of each ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0014"},"extended_digit"))," of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0011"},"based_literal"))," shall be less than the base. ",(0,a.kt)("br",null)),(0,a.kt)("h4",c({},{id:"static-semantics-1"}),"Static Semantics"),(0,a.kt)("p",null,"The conventional meaning of based notation is assumed. An ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0009"},"exponent"))," indicates the power of the base by which the value of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0011"},"based_literal"))," without the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0009"},"exponent"))," is to be multiplied to obtain the value of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0011"},"based_literal"))," with the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0009"},"exponent")),". The ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0012"},"base"))," and the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0009"},"exponent")),", if any, are in decimal notation.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"The ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.4#S0014"},"extended_digit")),"s A through F can be written either in lower case or in upper case, with the same meaning. ",(0,a.kt)("br",null)),(0,a.kt)("h4",c({},{id:"examples-1"}),"Examples"),(0,a.kt)("p",null,(0,a.kt)("em",null,"Examples of based literals:")," ",(0,a.kt)("br",null)),(0,a.kt)(n.Z,{mdxType:"CodeBlock"},"2#1111_1111#  16#FF#       016#0ff#   --  integer literals of value 255","\n","16#E#E1       2#1110_0000#            --  integer literals of value 224","\n","16#F.FF#E+2   2#1.1111_1111_1110#E11  --  real literals of value 4095.0","\n"),(0,a.kt)("h4",c({},{id:"wording-changes-from-ada-83-1"}),"Wording Changes from Ada 83"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"The rule about which letters are allowed is now encoded in BNF, as suggested by Mike Woodger. This is clearly more readable. ",(0,a.kt)("br",null)))}S.isMDXComponent=!0}}]);