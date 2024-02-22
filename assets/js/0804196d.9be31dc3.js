"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8827],{72422:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>A,metadata:()=>s,toc:()=>u});var t=n(58168),o=(n(96540),n(15680)),i=n(20793),r=n(91435),l=n(21432),y=n(79162),g=n(34421);const A={sidebar_position:61},d="7.2 Package Bodies",s={unversionedId:"arm/AA-7/AA-7.2",id:"arm/AA-7/AA-7.2",title:"7.2 Package Bodies",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-7/AA-7.2.mdx",sourceDirName:"arm/AA-7",slug:"/arm/AA-7/AA-7.2",permalink:"/docs/arm/AA-7/AA-7.2",draft:!1,tags:[],version:"current",sidebarPosition:61,frontMatter:{sidebar_position:61},sidebar:"referenceManualSidebar",previous:{title:"7.1 Package Specifications and Declarations",permalink:"/docs/arm/AA-7/AA-7.1"},next:{title:"7.3 Private Types and Private Extensions",permalink:"/docs/arm/AA-7/AA-7.3"}},c={},u=[{value:"Syntax",id:"syntax",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005",level:4}],p={toc:u},m="wrapper";function h(e){let{components:a,...n}=e;return(0,o.yg)(m,(0,t.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"72-package-bodies"},"7.2 Package Bodies"),(0,o.yg)("admonition",{type:"warning"},(0,o.yg)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,o.yg)(y.A,{mdxType:"MarginText"},"1"),(0,o.yg)("p",null,"[In contrast to the entities declared in the visible part of a package, the entities declared in the ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.2#S0231"},"package_body"))," are visible only within the ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.2#S0231"},"package_body"))," itself. As a consequence, a package with a ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.2#S0231"},"package_body"))," can be used for the construction of a group of related subprograms in which the logical operations available to clients are clearly isolated from the internal entities.] ",(0,o.yg)("br",null)),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)(y.A,{mdxType:"MarginText"},"2/3"),(0,o.yg)(g.A,{items:["AI05-0267-1"],mdxType:"MarginInfo"}),(0,o.yg)(l.A,{mdxType:"CodeBlock"},(0,o.yg)("code",null,"package_body"),(0,o.yg)("a",{id:"S0231"}),(0,o.yg)("code",null," ::= "),(0,o.yg)("br",null),"    ",(0,o.yg)("strong",null,"package")," ",(0,o.yg)("strong",null,"body")," ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-6/AA-6.1#S0201"},"defining_program_unit_name")),(0,o.yg)("br",null),"        [",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification")),"] ",(0,o.yg)("strong",null,"is"),(0,o.yg)("br",null),"       ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part")),(0,o.yg)("br",null),"   [",(0,o.yg)("strong",null,"begin"),(0,o.yg)("br",null),"        ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-11/AA-11.2#S0304"},"handled_sequence_of_statements")),"]",(0,o.yg)("br",null),"    ",(0,o.yg)("strong",null,"end")," [[",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-10/AA-10.1#S0291"},"parent_unit_name")),".]",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"];",(0,o.yg)("br",null)),(0,o.yg)(y.A,{mdxType:"MarginText"},"3"),(0,o.yg)("p",{class:"Indented2"},"If an ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," or ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-10/AA-10.1#S0291"},"parent_unit_name")),".",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," appears at the end of a ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.2#S0231"},"package_body")),", then this sequence of lexical elements shall repeat the ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-6/AA-6.1#S0201"},"defining_program_unit_name")),". ",(0,o.yg)("br",null)),(0,o.yg)("h4",{id:"legality-rules"},"Legality Rules"),(0,o.yg)(y.A,{mdxType:"MarginText"},"4/5"),(0,o.yg)(g.A,{items:["AI12-0417-1"],mdxType:"MarginInfo"}),(0,o.yg)("p",null,"A ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.2#S0231"},"package_body"))," shall be the completion of a previous ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.1#S0229"},"package_declaration"))," or ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-12/AA-12.1#S0312"},"generic_package_declaration")),". A library ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.1#S0229"},"package_declaration"))," or library ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-12/AA-12.1#S0312"},"generic_package_declaration"))," shall not have a body unless it requires a body[; the Elaborate_Body aspect can be used to require a ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-10/AA-10.1#S0288"},"library_unit_declaration"))," to have a body (see ",(0,o.yg)("a",{href:"../AA-10/AA-10.2#Subclause_10.2.1"},"10.2.1"),") if it would not otherwise require one]. ",(0,o.yg)("br",null)),(0,o.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,o.yg)(y.A,{mdxType:"MarginText"},"4.a"),(0,o.yg)(i.A,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,o.yg)("strong",null),"The first part of the rule forbids a ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.2#S0231"},"package_body"))," from standing alone \u2014 it has to belong to some previous ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.1#S0229"},"package_declaration"))," or ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-12/AA-12.1#S0312"},"generic_package_declaration")),".",(0,o.yg)("br",null))),(0,o.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,o.yg)(y.A,{mdxType:"MarginText"},"4.b"),(0,o.yg)(i.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"A nonlibrary ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.1#S0229"},"package_declaration"))," or nonlibrary ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-12/AA-12.1#S0312"},"generic_package_declaration"))," that does not require a completion may have a corresponding body anyway. ",(0,o.yg)("br",null))),(0,o.yg)("h4",{id:"static-semantics"},"Static Semantics"),(0,o.yg)(y.A,{mdxType:"MarginText"},"5"),(0,o.yg)("p",null,"In any ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.2#S0231"},"package_body"))," without ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-5/AA-5.1#S0167"},"statement")),"s there is an implicit ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-5/AA-5.1#S0170"},"null_statement")),". For any ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.1#S0229"},"package_declaration"))," without an explicit completion, there is an implicit ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.2#S0231"},"package_body"))," containing a single ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-5/AA-5.1#S0170"},"null_statement")),". For a noninstance, nonlibrary package, this body occurs at the end of the ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part"))," of the innermost enclosing program unit or ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement")),"; if there are several such packages, the order of the implicit ",(0,o.yg)("code",null,"package_bodies")," is unspecified. [(For an instance, the implicit ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.2#S0231"},"package_body"))," occurs at the place of the instantiation (see ",(0,o.yg)("a",{href:"../AA-12/AA-12.3"},"12.3"),"). For a library package, the place is partially determined by the elaboration dependences (see Clause ",(0,o.yg)("a",{href:"../AA-10/"},"10"),").)] ",(0,o.yg)("br",null)),(0,o.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,o.yg)(y.A,{mdxType:"MarginText"},"5.a"),(0,o.yg)(i.A,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,o.yg)("strong",null),"Thus, for example, we can refer to something happening just after the ",(0,o.yg)("strong",null,"begin")," of a ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.2#S0231"},"package_body")),", and we can refer to the ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-11/AA-11.2#S0304"},"handled_sequence_of_statements"))," of a ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.2#S0231"},"package_body")),", without worrying about all the optional pieces. The place of the implicit body makes a difference for tasks activated by the package. See also RM83-9.3(5).",(0,o.yg)("br",null))),(0,o.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,o.yg)(y.A,{mdxType:"MarginText"},"5.b"),(0,o.yg)(i.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The implicit body would be illegal if explicit in the case of a library package that does not require (and therefore does not allow) a body. This is a bit strange, but not harmful. ",(0,o.yg)("br",null))),(0,o.yg)("h4",{id:"dynamic-semantics"},"Dynamic Semantics"),(0,o.yg)(y.A,{mdxType:"MarginText"},"6"),(0,o.yg)("p",null,"For the elaboration of a nongeneric ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.2#S0231"},"package_body")),", its ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part"))," is first elaborated, and its ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-11/AA-11.2#S0304"},"handled_sequence_of_statements"))," is then executed. ",(0,o.yg)("br",null)),(0,o.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,o.yg)(y.A,{mdxType:"MarginText"},"7"),(0,o.yg)(i.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 1   A variable declared in the body of a package is only visible within this body and, consequently, its value can only be changed within the ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.2#S0231"},"package_body")),". In the absence of local tasks, the value of such a variable remains unchanged between calls issued from outside the package to subprograms declared in the visible part. The properties of such a variable are similar to those of a \u201cstatic\u201d variable of C.",(0,o.yg)("br",null))),(0,o.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,o.yg)(y.A,{mdxType:"MarginText"},"8"),(0,o.yg)(i.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 2   The elaboration of the body of a subprogram explicitly declared in the visible part of a package is caused by the elaboration of the body of the package. Hence a call of such a subprogram by an outside program unit raises the exception Program_Error if the call takes place before the elaboration of the ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.2#S0231"},"package_body"))," (see ",(0,o.yg)("a",{href:"../AA-3/AA-3.11"},"3.11"),"). ",(0,o.yg)("br",null))),(0,o.yg)("h4",{id:"examples"},"Examples"),(0,o.yg)(y.A,{mdxType:"MarginText"},"9"),(0,o.yg)("p",null,(0,o.yg)("em",null,"Example of a package body (see ",(0,o.yg)("a",{href:"../AA-7/AA-7.1"},"7.1"),"):")," ",(0,o.yg)("br",null)),(0,o.yg)(y.A,{mdxType:"MarginText"},"10"),(0,o.yg)(l.A,{language:"ada",mdxType:"CodeBlock"},"package body Rational_Numbers is","\n",(0,o.yg)(y.A,{mdxType:"MarginText"},"11"),"procedure Same_Denominator (X,Y : in out Rational) is","\n","   begin","\n","      --  reduces X and Y to the same denominator:","\n","      ...","\n","   end Same_Denominator;","\n",(0,o.yg)(y.A,{mdxType:"MarginText"},"12"),'function "="(X,Y : Rational) return Boolean is',"\n","      U : Rational := X;","\n","      V : Rational := Y;","\n","   begin","\n","      Same_Denominator (U,V);","\n","      return U.Numerator = V.Numerator;","\n",'   end "=";',"\n",(0,o.yg)(y.A,{mdxType:"MarginText"},"13"),'function "/" (X,Y : Integer) return Rational is',"\n","   begin","\n","      if Y ",">"," 0 then","\n","         return (Numerator =",">"," X,  Denominator =",">"," Y);","\n","      else","\n","         return (Numerator =",">"," -X, Denominator =",">"," -Y);","\n","      end if;","\n",'   end "/";',"\n",(0,o.yg)(y.A,{mdxType:"MarginText"},"14"),'function "+" (X,Y : Rational) return Rational is ... end "+";',"\n",'   function "-" (X,Y : Rational) return Rational is ... end "-";',"\n",'   function "*" (X,Y : Rational) return Rational is ... end "*";',"\n",'   function "/" (X,Y : Rational) return Rational is ... end "/";',"\n",(0,o.yg)(y.A,{mdxType:"MarginText"},"15"),"end Rational_Numbers;","\n"),(0,o.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,o.yg)("h4",{id:"wording-changes-from-ada-83"},"Wording Changes from Ada 83")),(0,o.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,o.yg)(y.A,{mdxType:"MarginText"},"15.a"),(0,o.yg)(i.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The syntax rule for ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.2#S0231"},"package_body"))," now uses the syntactic category ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-11/AA-11.2#S0304"},"handled_sequence_of_statements")),".",(0,o.yg)("br",null))),(0,o.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,o.yg)(y.A,{mdxType:"MarginText"},"15.b"),(0,o.yg)(i.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part"))," of a ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.2#S0231"},"package_body"))," is now required; that doesn't make any real difference, since a ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part"))," can be empty.",(0,o.yg)("br",null))),(0,o.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,o.yg)(y.A,{mdxType:"MarginText"},"15.c"),(0,o.yg)(i.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"RM83 seems to have forgotten to say that a ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.2#S0231"},"package_body"))," can't stand alone, without a previous declaration. We state that rule here.",(0,o.yg)("br",null))),(0,o.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,o.yg)(y.A,{mdxType:"MarginText"},"15.d"),(0,o.yg)(i.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"RM83 forgot to restrict the definition of elaboration of ",(0,o.yg)("code",null,"package_bodies")," to nongeneric ones. We have corrected that omission.",(0,o.yg)("br",null))),(0,o.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,o.yg)(y.A,{mdxType:"MarginText"},"15.e"),(0,o.yg)(i.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The rule about implicit bodies (from RM83-9.3(5)) is moved here, since it is more generally applicable. ",(0,o.yg)("br",null))),(0,o.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,o.yg)("h4",{id:"extensions-to-ada-2005"},"Extensions to Ada 2005")),(0,o.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,o.yg)(y.A,{mdxType:"MarginText"},"15.f/3"),(0,o.yg)(g.A,{items:["AI05-0267-1"],mdxType:"MarginInfo"}),(0,o.yg)(i.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"An optional ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification"))," can be used in a ",(0,o.yg)("code",null,(0,o.yg)("a",{href:"../AA-7/AA-7.2#S0231"},"package_body")),". This is described in ",(0,o.yg)("a",{href:"../AA-13/AA-13.1#Subclause_13.1.1"},"13.1.1"),". ",(0,o.yg)("br",null))))}h.isMDXComponent=!0}}]);