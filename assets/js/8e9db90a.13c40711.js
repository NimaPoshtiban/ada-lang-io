"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1947],{31863:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>A,metadata:()=>c,toc:()=>m});var r=n(58168),t=(n(96540),n(15680)),i=n(20793),o=n(91435),l=n(21432),g=n(79162),y=n(34421);const A={sidebar_position:96},d="12.1 Generic Declarations",c={unversionedId:"arm/AA-12/AA-12.1",id:"arm/AA-12/AA-12.1",title:"12.1 Generic Declarations",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-12/AA-12.1.mdx",sourceDirName:"arm/AA-12",slug:"/arm/AA-12/AA-12.1",permalink:"/docs/arm/AA-12/AA-12.1",draft:!1,tags:[],version:"current",sidebarPosition:96,frontMatter:{sidebar_position:96},sidebar:"referenceManualSidebar",previous:{title:"12 Generic Units",permalink:"/docs/arm/AA-12/"},next:{title:"12.2 Generic Bodies",permalink:"/docs/arm/AA-12/AA-12.2"}},s={},m=[{value:"Syntax",id:"syntax",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}],p={toc:m},u="wrapper";function f(e){let{components:a,...n}=e;return(0,t.yg)(u,(0,r.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"121-generic-declarations"},"12.1 Generic Declarations"),(0,t.yg)("admonition",{type:"warning"},(0,t.yg)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,t.yg)(g.A,{mdxType:"MarginText"},"1"),(0,t.yg)("p",null,"[A ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0310"},"generic_declaration"))," declares a generic unit, which is either a generic subprogram or a generic package. A ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0310"},"generic_declaration"))," includes a ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0313"},"generic_formal_part"))," declaring any generic formal parameters. A generic formal parameter can be an object; alternatively (unlike a parameter of a subprogram), it can be a type, a subprogram, or a package.] ",(0,t.yg)("br",null)),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)(g.A,{mdxType:"MarginText"},"2"),(0,t.yg)(l.A,{mdxType:"CodeBlock"},(0,t.yg)("code",null,"generic_declaration"),(0,t.yg)("a",{id:"S0310"}),(0,t.yg)("code",null," ::= "),(0,t.yg)("br",null),"    ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0311"},"generic_subprogram_declaration"))," | ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0312"},"generic_package_declaration")),(0,t.yg)("br",null)),(0,t.yg)(g.A,{mdxType:"MarginText"},"3/3"),(0,t.yg)(y.A,{items:["AI05-0183-1"],mdxType:"MarginInfo"}),(0,t.yg)(l.A,{mdxType:"CodeBlock"},(0,t.yg)("code",null,"generic_subprogram_declaration"),(0,t.yg)("a",{id:"S0311"}),(0,t.yg)("code",null," ::= "),(0,t.yg)("br",null),"    ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0313"},"generic_formal_part"))," ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-6/AA-6.1#S0196"},"subprogram_specification")),(0,t.yg)("br",null),"       [",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification")),"];",(0,t.yg)("br",null)),(0,t.yg)(g.A,{mdxType:"MarginText"},"4"),(0,t.yg)(l.A,{mdxType:"CodeBlock"},(0,t.yg)("code",null,"generic_package_declaration"),(0,t.yg)("a",{id:"S0312"}),(0,t.yg)("code",null," ::= "),(0,t.yg)("br",null),"    ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0313"},"generic_formal_part")),"  ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-7/AA-7.1#S0230"},"package_specification")),";",(0,t.yg)("br",null)),(0,t.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,t.yg)(g.A,{mdxType:"MarginText"},"4.a/3"),(0,t.yg)(y.A,{items:["AI05-0183-1"],mdxType:"MarginInfo"}),(0,t.yg)(i.A,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,t.yg)("strong",null),"No syntax change is needed here to allow an ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification")),"; a generic package can have an ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification"))," because a ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-7/AA-7.1#S0230"},"package_specification"))," allows an ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification")),". ",(0,t.yg)("br",null))),(0,t.yg)(g.A,{mdxType:"MarginText"},"5"),(0,t.yg)(l.A,{mdxType:"CodeBlock"},(0,t.yg)("code",null,"generic_formal_part"),(0,t.yg)("a",{id:"S0313"}),(0,t.yg)("code",null," ::= "),(0,t.yg)("br",null),"    ",(0,t.yg)("strong",null,"generic")," ","{",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0314"},"generic_formal_parameter_declaration"))," | ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-8/AA-8.4#S0235"},"use_clause")),"}",(0,t.yg)("br",null)),(0,t.yg)(g.A,{mdxType:"MarginText"},"6"),(0,t.yg)(l.A,{mdxType:"CodeBlock"},(0,t.yg)("code",null,"generic_formal_parameter_declaration"),(0,t.yg)("a",{id:"S0314"}),(0,t.yg)("code",null," ::= "),(0,t.yg)("br",null),"    ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.4#S0319"},"formal_object_declaration")),(0,t.yg)("br",null),"  | ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.5#S0320"},"formal_type_declaration")),(0,t.yg)("br",null),"  | ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.6#S0335"},"formal_subprogram_declaration")),(0,t.yg)("br",null),"  | ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.7#S0340"},"formal_package_declaration")),(0,t.yg)("br",null)),(0,t.yg)(g.A,{mdxType:"MarginText"},"7"),(0,t.yg)("p",{class:"Indented2"},"The only form of ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-3/AA-3.2#S0027"},"subtype_indication"))," allowed within a ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0313"},"generic_formal_part"))," is a ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-3/AA-3.2#S0028"},"subtype_mark"))," [(that is, the ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-3/AA-3.2#S0027"},"subtype_indication"))," shall not include an explicit ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-3/AA-3.2#S0029"},"constraint")),")]. The defining name of a generic subprogram shall be an ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," [(not an ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-6/AA-6.1#S0202"},"operator_symbol")),")]. ",(0,t.yg)("br",null)),(0,t.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,t.yg)(g.A,{mdxType:"MarginText"},"7.a"),(0,t.yg)(i.A,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,t.yg)("strong",null),"The reason for forbidding ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-3/AA-3.2#S0029"},"constraint")),"s in ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-3/AA-3.2#S0027"},"subtype_indication")),"s is that it simplifies the elaboration of ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0310"},"generic_declaration")),"s (since there is nothing to evaluate), and that it simplifies the matching rules, and makes them more checkable at compile time. ",(0,t.yg)("br",null))),(0,t.yg)("h4",{id:"static-semantics"},"Static Semantics"),(0,t.yg)(g.A,{mdxType:"MarginText"},"8/2"),(0,t.yg)(y.A,{items:["AI95-00434-01"],mdxType:"MarginInfo"}),(0,t.yg)("p",null,"A ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0310"},"generic_declaration"))," declares a generic unit \u2014 a generic package, generic procedure, or generic function, as appropriate.",(0,t.yg)("br",null)),(0,t.yg)(g.A,{mdxType:"MarginText"},"9"),(0,t.yg)("p",null,"An entity is a ",(0,t.yg)("em",null,"generic formal")," entity if it is declared by a ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0314"},"generic_formal_parameter_declaration")),". \u201cGeneric formal\u201d, or simply \u201cformal\u201d, is used as a prefix in referring to objects, subtypes (and types), functions, procedures and packages, that are generic formal entities, as well as to their respective declarations. [Examples: \u201cgeneric formal procedure\u201d or a \u201cformal integer type declaration\u201d.]",(0,t.yg)("br",null)),(0,t.yg)(g.A,{mdxType:"MarginText"},"9.1/5"),(0,t.yg)(y.A,{items:["AI12-0371-1"],mdxType:"MarginInfo"}),(0,t.yg)("p",null,"The list of ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0314"},"generic_formal_parameter_declaration")),"s of a ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0313"},"generic_formal_part"))," form a ",(0,t.yg)("em",null,"declaration list")," of the generic unit.",(0,t.yg)("br",null)),(0,t.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,t.yg)(g.A,{mdxType:"MarginText"},"9.a/5"),(0,t.yg)(i.A,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,t.yg)("strong",null),"Aspect specifications (see ",(0,t.yg)("a",{href:"../AA-13/AA-13.1#Subclause_13.1.1"},"13.1.1"),") given in a generic formal part can only use declarations given in the formal part, and not those in the visible part of the generic unit. ",(0,t.yg)("br",null))),(0,t.yg)("h4",{id:"dynamic-semantics"},"Dynamic Semantics"),(0,t.yg)(g.A,{mdxType:"MarginText"},"10"),(0,t.yg)("p",null,"The elaboration of a ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0310"},"generic_declaration"))," has no effect. ",(0,t.yg)("br",null)),(0,t.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,t.yg)(g.A,{mdxType:"MarginText"},"11"),(0,t.yg)(i.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 1   Outside a generic unit a ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," that denotes the ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0310"},"generic_declaration"))," denotes the generic unit. In contrast, within the declarative region of the generic unit, a ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," that denotes the ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0310"},"generic_declaration"))," denotes the current instance. ",(0,t.yg)("br",null))),(0,t.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,t.yg)(g.A,{mdxType:"MarginText"},"11.a"),(0,t.yg)(i.A,{type:"aarm",aarm:"proof",mdxType:"Admonition"},(0,t.yg)("strong",null),"This is stated officially as part of the \u201ccurrent instance\u201d rule in ",(0,t.yg)("a",{href:"../AA-8/AA-8.6"},"8.6"),", \u201c",(0,t.yg)("a",{href:"../AA-8/AA-8.6"},"The Context of Overload Resolution"),"\u201d. See also ",(0,t.yg)("a",{href:"../AA-12/AA-12.3"},"12.3"),", \u201c",(0,t.yg)("a",{href:"../AA-12/AA-12.3"},"Generic Instantiation"),"\u201d. ",(0,t.yg)("br",null))),(0,t.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,t.yg)(g.A,{mdxType:"MarginText"},"12"),(0,t.yg)(i.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 2   Within a generic ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-6/AA-6.3#S0216"},"subprogram_body")),", the name of this program unit acts as the name of a subprogram. Hence this name can be overloaded, and it can appear in a recursive call of the current instance. For the same reason, this name cannot appear after the reserved word ",(0,t.yg)("strong",null,"new")," in a (recursive) ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.3#S0315"},"generic_instantiation")),".",(0,t.yg)("br",null))),(0,t.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,t.yg)(g.A,{mdxType:"MarginText"},"13/5"),(0,t.yg)(y.A,{items:["AI12-0447-1"],mdxType:"MarginInfo"}),(0,t.yg)(i.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 3   A ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-3/AA-3.7#S0063"},"default_expression"))," or ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.6#S0339"},"default_name"))," appearing in a ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0313"},"generic_formal_part"))," is not evaluated during elaboration of the ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0313"},"generic_formal_part")),"; instead, it is evaluated when used. However, the usual visibility rules apply to any ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," used in a default, with name resolution performed based on the location of the ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," within the ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0313"},"generic_formal_part")),". ",(0,t.yg)("br",null))),(0,t.yg)("h4",{id:"examples"},"Examples"),(0,t.yg)(g.A,{mdxType:"MarginText"},"14"),(0,t.yg)("p",null,(0,t.yg)("em",null,"Examples of generic formal parts:")," ",(0,t.yg)("br",null)),(0,t.yg)(g.A,{mdxType:"MarginText"},"15"),(0,t.yg)(l.A,{language:"ada",mdxType:"CodeBlock"},"generic     --  parameterless ","\n",(0,t.yg)(g.A,{mdxType:"MarginText"},"16"),"generic","\n","   Size : Natural;  --  formal object ","\n",(0,t.yg)(g.A,{mdxType:"MarginText"},"17"),"generic","\n","   Length : Integer := 200;          -- formal object with a default expression","\n",(0,t.yg)(g.A,{mdxType:"MarginText"},"18"),"Area   : Integer := Length*Length; -- formal object with a default expression","\n",(0,t.yg)(g.A,{mdxType:"MarginText"},"19"),"generic","\n","   type Item  is private;                       -- formal type","\n","   type Index is (","<",">",");                          -- formal type","\n","   type Row   is array(Index range ","<",">",") of Item; -- formal type","\n",'   with function "',"<",'"(X, Y : Item) return Boolean;    -- formal subprogram ',"\n"),(0,t.yg)(g.A,{mdxType:"MarginText"},"20"),(0,t.yg)("p",null,(0,t.yg)("em",null,"Examples of generic declarations declaring generic subprograms Exchange and Squaring:")," ",(0,t.yg)("br",null)),(0,t.yg)(g.A,{mdxType:"MarginText"},"21"),(0,t.yg)(l.A,{language:"ada",mdxType:"CodeBlock"},"generic","\n","   type Elem is private;","\n","procedure Exchange(U, V : in out Elem);","\n",(0,t.yg)(g.A,{mdxType:"MarginText"},"22/5"),(0,t.yg)(y.A,{items:["AI12-0178-1"],mdxType:"MarginInfo"}),"generic","\n","   type Item (","<",">",") is private;","\n",'   with function "*"(U, V : Item) return Item is ',"<",">",";","\n","function Squaring(X : Item) return Item;","\n"),(0,t.yg)(g.A,{mdxType:"MarginText"},"23"),(0,t.yg)("p",null,(0,t.yg)("em",null,"Example of a generic declaration declaring a generic package:")," ",(0,t.yg)("br",null)),(0,t.yg)(g.A,{mdxType:"MarginText"},"24"),(0,t.yg)(l.A,{language:"ada",mdxType:"CodeBlock"},"generic","\n","   type Item   is private;","\n","   type Vector is array (Positive range ","<",">",") of Item;","\n","   with function Sum(X, Y : Item) return Item;","\n","package On_Vectors is","\n","   function Sum  (A, B : Vector) return Vector;","\n","   function Sigma(A    : Vector) return Item;","\n","   Length_Error : exception;","\n","end On_Vectors;","\n"),(0,t.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,t.yg)("h4",{id:"extensions-to-ada-83"},"Extensions to Ada 83")),(0,t.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,t.yg)(g.A,{mdxType:"MarginText"},"24.a"),(0,t.yg)(i.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The syntax rule for ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0314"},"generic_formal_parameter_declaration"))," is modified to allow the reserved words ",(0,t.yg)("strong",null,"tagged")," and ",(0,t.yg)("strong",null,"abstract"),", to allow formal derived types, and to allow formal packages.",(0,t.yg)("br",null))),(0,t.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,t.yg)(g.A,{mdxType:"MarginText"},"24.b"),(0,t.yg)(i.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-8/AA-8.4#S0235"},"Use_clause")),"s are allowed in ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0313"},"generic_formal_part")),"s. This is necessary in order to allow a ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-8/AA-8.4#S0235"},"use_clause"))," within a formal part to provide direct visibility of declarations within a generic formal package. ",(0,t.yg)("br",null))),(0,t.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,t.yg)("h4",{id:"wording-changes-from-ada-83"},"Wording Changes from Ada 83")),(0,t.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,t.yg)(g.A,{mdxType:"MarginText"},"24.c/3"),(0,t.yg)(y.A,{items:["AI05-0299-1"],mdxType:"MarginInfo"}),(0,t.yg)(i.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The syntax for ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0314"},"generic_formal_parameter_declaration"))," and ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.5#S0323"},"formal_type_definition"))," is split up into more named categories. The rules for these categories are moved to the appropriate subclauses. The names of the categories are changed to be more intuitive and uniform. For example, we changed ",(0,t.yg)("code",null,"generic_parameter_declaration")," to ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0314"},"generic_formal_parameter_declaration")),", because the thing it declares is a generic formal, not a generic. In the others, we abbreviate \u201cgeneric_formal\u201d to just \u201cformal\u201d. We can't do that for ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0314"},"generic_formal_parameter_declaration")),", because of confusion with normal formal parameters of subprograms. ",(0,t.yg)("br",null))),(0,t.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,t.yg)("h4",{id:"extensions-to-ada-2005"},"Extensions to Ada 2005")),(0,t.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,t.yg)(g.A,{mdxType:"MarginText"},"24.d/3"),(0,t.yg)(y.A,{items:["AI05-0183-1"],mdxType:"MarginInfo"}),(0,t.yg)(i.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"An optional ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification"))," can be used in a ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0311"},"generic_subprogram_declaration"))," (as well as a ",(0,t.yg)("code",null,(0,t.yg)("a",{href:"../AA-12/AA-12.1#S0312"},"generic_package_declaration")),"). This is described in ",(0,t.yg)("a",{href:"../AA-13/AA-13.1#Subclause_13.1.1"},"13.1.1"),". ",(0,t.yg)("br",null))),(0,t.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,t.yg)("h4",{id:"wording-changes-from-ada-2012"},"Wording Changes from Ada 2012")),(0,t.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,t.yg)(g.A,{mdxType:"MarginText"},"24.e/5"),(0,t.yg)(y.A,{items:["AI12-0371-1"],mdxType:"MarginInfo"}),(0,t.yg)(i.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Defined a formal part as a declaration list, so that the visibility of entities in aspect specifications is properly defined. ",(0,t.yg)("br",null))))}f.isMDXComponent=!0}}]);