"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[747],{9110:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>f,default:()=>T,frontMatter:()=>h,metadata:()=>y,toc:()=>x});var a=n(1716),o=n(2787),l=n(2670),r=n(8604),s=n(6990),i=Object.defineProperty,A=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,p=(t,e)=>{for(var n in e||(e={}))k.call(e,n)&&u(t,n,e[n]);if(m)for(var n of m(e))c.call(e,n)&&u(t,n,e[n]);return t};const h={sidebar_position:47},f="5.8 Goto Statements",y={unversionedId:"arm/AA-5/AA-5.8",id:"arm/AA-5/AA-5.8",title:"5.8 Goto Statements",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-5/AA-5.8.mdx",sourceDirName:"arm/AA-5",slug:"/arm/AA-5/AA-5.8",permalink:"/docs/arm/AA-5/AA-5.8",draft:!1,tags:[],version:"current",sidebarPosition:47,frontMatter:{sidebar_position:47},sidebar:"referenceManualSidebar",previous:{title:"5.7 Exit Statements",permalink:"/docs/arm/AA-5/AA-5.7"},next:{title:"6 Subprograms",permalink:"/docs/arm/AA-6/"}},g={},x=[{value:"Syntax",id:"syntax",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4}],b={toc:x};function T(t){var e,n=t,{components:i}=n,u=((t,e)=>{var n={};for(var a in t)k.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&m)for(var a of m(t))e.indexOf(a)<0&&c.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=p(p({},b),u),A(e,d({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("h1",p({},{id:"58-goto-statements"}),"5.8 Goto Statements"),(0,a.kt)("admonition",p({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",p({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"1")),(0,a.kt)("p",null,"[A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.8#S0194"},"goto_statement"))," specifies an explicit transfer of control from this ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0167"},"statement"))," to a target statement with a given label.] ",(0,a.kt)("br",null)),(0,a.kt)("h4",p({},{id:"syntax"}),"Syntax"),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"2")),(0,a.kt)(r.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"goto_statement"),(0,a.kt)("a",{id:"S0194"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("strong",null,"goto")," ",(0,a.kt)("em",null,"label_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name")),";",(0,a.kt)("br",null)),(0,a.kt)("h4",p({},{id:"name-resolution-rules"}),"Name Resolution Rules"),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"3")),(0,a.kt)("p",null,"The ",(0,a.kt)("em",null,"label_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," shall resolve to denote a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label")),"; the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0167"},"statement"))," with that ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label"))," is the ",(0,a.kt)("em",null,"target statement"),". ",(0,a.kt)("br",null)),(0,a.kt)("h4",p({},{id:"legality-rules"}),"Legality Rules"),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"4")),(0,a.kt)("p",null,"The innermost ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," that encloses the target statement shall also enclose the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.8#S0194"},"goto_statement")),". Furthermore, if a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.8#S0194"},"goto_statement"))," is enclosed by an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.5#S0258"},"accept_statement"))," or a body, then the target statement shall not be outside this enclosing construct. ",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"4.a")),(0,a.kt)(o.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"The ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.8#S0194"},"goto_statement"))," can be a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0167"},"statement"))," of an inner ",(0,a.kt)("code",null,"sequence_"),".",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"4.b")),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"It follows from the second rule that if the target ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0167"},"statement"))," is enclosed by such a construct, then the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.8#S0194"},"goto_statement"))," cannot be outside. ",(0,a.kt)("br",null)),(0,a.kt)("h4",p({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"5")),(0,a.kt)("p",null,"The execution of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.8#S0194"},"goto_statement"))," transfers control to the target statement, completing the execution of any ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0169"},"compound_statement"))," that encloses the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.8#S0194"},"goto_statement"))," but does not enclose the target. ",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"6")),(0,a.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 1   The above rules allow transfer of control to a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0167"},"statement"))," of an enclosing ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," but not the reverse. Similarly, they prohibit transfers of control such as between alternatives of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.4#S0176"},"case_statement")),", ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.3#S0175"},"if_statement")),", or ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.7#S0269"},"select_statement")),"; between ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0305"},"exception_handler")),"s; or from an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0305"},"exception_handler"))," of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0304"},"handled_sequence_of_statements"))," back to its ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),". ",(0,a.kt)("br",null)),(0,a.kt)("h4",p({},{id:"examples"}),"Examples"),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"7")),(0,a.kt)("p",null,(0,a.kt)("em",null,"Example of a loop containing a goto statement:")," ",(0,a.kt)("br",null)),(0,a.kt)(l.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"8")),(0,a.kt)(r.Z,{language:"ada",mdxType:"CodeBlock"},"<","<","Sort",">",">","\n","for I in 1 .. N-1 loop","\n","   if A(I) ",">"," A(I+1) then","\n","      Exchange(A(I), A(I+1));","\n","      goto Sort;","\n","   end if;","\n","end loop;","\n"))}T.isMDXComponent=!0}}]);