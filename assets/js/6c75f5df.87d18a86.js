"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[3915],{82567:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>y,metadata:()=>A,toc:()=>m});var a=t(58168),l=(t(96540),t(15680)),o=t(20793),r=t(91435),i=t(21432),s=t(79162),g=t(34421);const y={sidebar_position:44},d="5.3 If Statements",A={unversionedId:"arm/AA-5/AA-5.3",id:"arm/AA-5/AA-5.3",title:"5.3 If Statements",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-5/AA-5.3.mdx",sourceDirName:"arm/AA-5",slug:"/arm/AA-5/AA-5.3",permalink:"/docs/arm/AA-5/AA-5.3",draft:!1,tags:[],version:"current",sidebarPosition:44,frontMatter:{sidebar_position:44},sidebar:"referenceManualSidebar",previous:{title:"5.2 Assignment Statements",permalink:"/docs/arm/AA-5/AA-5.2"},next:{title:"5.4 Case Statements",permalink:"/docs/arm/AA-5/AA-5.4"}},u={},m=[{value:"Syntax",id:"syntax",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4}],c={toc:m},f="wrapper";function p(e){let{components:n,...t}=e;return(0,l.yg)(f,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"53-if-statements"},"5.3 If Statements"),(0,l.yg)("admonition",{type:"warning"},(0,l.yg)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,l.yg)(s.A,{mdxType:"MarginText"},"1"),(0,l.yg)("p",null,"[An ",(0,l.yg)("code",null,(0,l.yg)("a",{href:"../AA-5/AA-5.3#S0175"},"if_statement"))," selects for execution at most one of the enclosed ",(0,l.yg)("code",null,"sequences_of_statements"),", depending on the (truth) value of one or more corresponding ",(0,l.yg)("code",null,(0,l.yg)("a",{href:"../AA-4/AA-4.5#S0150"},"condition")),"s.] ",(0,l.yg)("br",null)),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)(s.A,{mdxType:"MarginText"},"2"),(0,l.yg)(i.A,{mdxType:"CodeBlock"},(0,l.yg)("code",null,"if_statement"),(0,l.yg)("a",{id:"S0175"}),(0,l.yg)("code",null," ::= "),(0,l.yg)("br",null),"    ",(0,l.yg)("strong",null,"if")," ",(0,l.yg)("code",null,(0,l.yg)("a",{href:"../AA-4/AA-4.5#S0150"},"condition"))," ",(0,l.yg)("strong",null,"then"),(0,l.yg)("br",null),"      ",(0,l.yg)("code",null,(0,l.yg)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),(0,l.yg)("br",null),"   ","{",(0,l.yg)("strong",null,"elsif")," ",(0,l.yg)("code",null,(0,l.yg)("a",{href:"../AA-4/AA-4.5#S0150"},"condition"))," ",(0,l.yg)("strong",null,"then"),(0,l.yg)("br",null),"      ",(0,l.yg)("code",null,(0,l.yg)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),"}",(0,l.yg)("br",null),"   [",(0,l.yg)("strong",null,"else"),(0,l.yg)("br",null),"      ",(0,l.yg)("code",null,(0,l.yg)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),"]",(0,l.yg)("br",null),"    ",(0,l.yg)("strong",null,"end")," ",(0,l.yg)("strong",null,"if"),";",(0,l.yg)("br",null)),(0,l.yg)("p",null,(0,l.yg)("em",null,"Paragraphs 3 and 4 were deleted.")," ",(0,l.yg)("br",null)),(0,l.yg)("h4",{id:"dynamic-semantics"},"Dynamic Semantics"),(0,l.yg)(s.A,{mdxType:"MarginText"},"5/3"),(0,l.yg)(g.A,{items:["AI05-0264-1"],mdxType:"MarginInfo"}),(0,l.yg)("p",null,"For the execution of an ",(0,l.yg)("code",null,(0,l.yg)("a",{href:"../AA-5/AA-5.3#S0175"},"if_statement")),", the ",(0,l.yg)("code",null,(0,l.yg)("a",{href:"../AA-4/AA-4.5#S0150"},"condition"))," specified after ",(0,l.yg)("strong",null,"if"),", and any ",(0,l.yg)("code",null,(0,l.yg)("a",{href:"../AA-4/AA-4.5#S0150"},"condition")),"s specified after ",(0,l.yg)("strong",null,"elsif"),", are evaluated in succession (treating a final ",(0,l.yg)("strong",null,"else")," as ",(0,l.yg)("strong",null,"elsif")," True ",(0,l.yg)("strong",null,"then"),"), until one evaluates to True or all ",(0,l.yg)("code",null,(0,l.yg)("a",{href:"../AA-4/AA-4.5#S0150"},"condition")),"s are evaluated and yield False. If a ",(0,l.yg)("code",null,(0,l.yg)("a",{href:"../AA-4/AA-4.5#S0150"},"condition"))," evaluates to True, then the corresponding ",(0,l.yg)("code",null,(0,l.yg)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," is executed; otherwise, none of them is executed. ",(0,l.yg)("br",null)),(0,l.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,l.yg)(s.A,{mdxType:"MarginText"},"5.a"),(0,l.yg)(o.A,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,l.yg)("strong",null),"The part about all evaluating to False can't happen if there is an ",(0,l.yg)("strong",null,"else"),", since that is herein considered equivalent to ",(0,l.yg)("strong",null,"elsif")," True ",(0,l.yg)("strong",null,"then"),". ",(0,l.yg)("br",null))),(0,l.yg)("h4",{id:"examples"},"Examples"),(0,l.yg)(s.A,{mdxType:"MarginText"},"6"),(0,l.yg)("p",null,(0,l.yg)("em",null,"Examples of if statements:")," ",(0,l.yg)("br",null)),(0,l.yg)(s.A,{mdxType:"MarginText"},"7"),(0,l.yg)(i.A,{language:"ada",mdxType:"CodeBlock"},"if Month = December and Day = 31 then","\n","   Month := January;","\n","   Day   := 1;","\n","   Year  := Year + 1;","\n","end if;","\n",(0,l.yg)(s.A,{mdxType:"MarginText"},"8"),"if Line_Too_Short then","\n","   raise Layout_Error;","\n","elsif Line_Full then","\n","   New_Line;","\n","   Put(Item);","\n","else","\n","   Put(Item);","\n","end if;","\n",(0,l.yg)(s.A,{mdxType:"MarginText"},"9"),"if My_Car.Owner.Vehicle /= My_Car then            -- see ",(0,l.yg)("a",{href:"../AA-3/AA-3.10#Subclause_3.10.1"},"3.10.1"),"\n",'   Report ("Incorrect data");',"\n","end if;","\n"),(0,l.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,l.yg)("h4",{id:"wording-changes-from-ada-2005"},"Wording Changes from Ada 2005")),(0,l.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,l.yg)(s.A,{mdxType:"MarginText"},"9.a/3"),(0,l.yg)(g.A,{items:["AI05-0147-1"],mdxType:"MarginInfo"}),(0,l.yg)(o.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Moved definition of ",(0,l.yg)("code",null,(0,l.yg)("a",{href:"../AA-4/AA-4.5#S0150"},"condition"))," to ",(0,l.yg)("a",{href:"../AA-4/AA-4.5#Subclause_4.5.7"},"4.5.7")," in order to eliminate a forward reference. ",(0,l.yg)("br",null))))}p.isMDXComponent=!0}}]);