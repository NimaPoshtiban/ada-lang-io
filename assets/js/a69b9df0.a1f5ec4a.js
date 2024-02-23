"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[2050],{56061:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>A,contentTitle:()=>d,default:()=>m,frontMatter:()=>h,metadata:()=>x,toc:()=>j});var n=s(74848),r=s(28453),i=s(13842),t=s(91435),c=s(21432),l=s(79162),o=s(34421);const h={sidebar_position:102},d="12.7 Formal Packages",x={id:"arm/AA-12/AA-12.7",title:"12.7 Formal Packages",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-12/AA-12.7.mdx",sourceDirName:"arm/AA-12",slug:"/arm/AA-12/AA-12.7",permalink:"/docs/arm/AA-12/AA-12.7",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:102,frontMatter:{sidebar_position:102},sidebar:"referenceManualSidebar",previous:{title:"12.6 Formal Subprograms",permalink:"/docs/arm/AA-12/AA-12.6"},next:{title:"12.8 Example of a Generic Package",permalink:"/docs/arm/AA-12/AA-12.8"}},A={},j=[{value:"Syntax",id:"syntax",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Incompatibilities With Ada 2005",id:"incompatibilities-with-ada-2005",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005",level:4}];function p(e){const a={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"127-formal-packages",children:"12.7 Formal Packages"}),"\n",(0,n.jsx)(a.admonition,{type:"warning",children:(0,n.jsxs)(a.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.jsx)(a.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n","\n",(0,n.jsx)(l.A,{children:"1"}),"\n",(0,n.jsxs)("p",{children:["[ Formal packages can be used to pass packages to a generic unit. The ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.7#S0340",children:"formal_package_declaration"})})," declares that the formal package is an instance of a given generic package. Upon instantiation, the actual package has to be an instance of that generic package.] ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(a.h4,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(l.A,{children:"2/3"}),"\n",(0,n.jsx)(o.A,{items:["AI05-0183-1"]}),"\n",(0,n.jsx)(c.A,{children:(0,n.jsxs)(a.p,{children:[(0,n.jsxs)("code",{children:["formal","_","package","_","declaration"]}),(0,n.jsx)("a",{id:"S0340"}),(0,n.jsx)("code",{children:" ::= "}),(0,n.jsx)("br",{}),"    ",(0,n.jsx)("strong",{children:"with"})," ",(0,n.jsx)("strong",{children:"package"})," ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-3/AA-3.1#S0022",children:"defining_identifier"})})," ",(0,n.jsx)("strong",{children:"is"})," ",(0,n.jsx)("strong",{children:"new"})," ",(0,n.jsxs)("em",{children:["generic","_","package","_"]}),(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-4/AA-4.1#S0091",children:"name"})})," ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.7#S0341",children:"formal_package_actual_part"})}),(0,n.jsx)("br",{}),"        [",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-13/AA-13.1#S0346",children:"aspect_specification"})}),"];",(0,n.jsx)("br",{})]})}),"\n",(0,n.jsx)(l.A,{children:"3/2"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00317-01"]}),"\n",(0,n.jsx)(c.A,{children:(0,n.jsxs)(a.p,{children:[(0,n.jsxs)("code",{children:["formal","_","package","_","actual","_","part"]}),(0,n.jsx)("a",{id:"S0341"}),(0,n.jsx)("code",{children:" ::= "}),(0,n.jsx)("br",{}),"    ([",(0,n.jsx)("strong",{children:"others"})," =",">","] ","<",">",")",(0,n.jsx)("br",{}),"  | [",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.3#S0316",children:"generic_actual_part"})}),"]",(0,n.jsx)("br",{}),"  | (",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.7#S0342",children:"formal_package_association"})})," ","{",", ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.7#S0342",children:"formal_package_association"})}),"}"," [, ",(0,n.jsx)("strong",{children:"others"})," =",">"," ","<",">","])",(0,n.jsx)("br",{})]})}),"\n",(0,n.jsx)(l.A,{children:"3.1/2"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00317-01"]}),"\n",(0,n.jsx)(c.A,{children:(0,n.jsxs)(a.p,{children:[(0,n.jsxs)("code",{children:["formal","_","package","_","association"]}),(0,n.jsx)("a",{id:"S0342"}),(0,n.jsx)("code",{children:" ::= "}),(0,n.jsx)("br",{}),"    ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.3#S0317",children:"generic_association"})}),(0,n.jsx)("br",{}),"  | ",(0,n.jsxs)("em",{children:["generic","_","formal","_","parameter","_"]}),(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-4/AA-4.1#S0099",children:"selector_name"})})," =",">"," ","<",">",(0,n.jsx)("br",{})]})}),"\n",(0,n.jsx)(l.A,{children:"3.2/2"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00317-01"]}),"\n",(0,n.jsxs)("p",{class:"Indented2",children:["Any positional ",(0,n.jsx)("code",{children:(0,n.jsxs)("a",{href:"../AA-12/AA-12.7#S0342",children:["formal","_","package","_","association"]})}),"s shall precede any named ",(0,n.jsx)("code",{children:(0,n.jsxs)("a",{href:"../AA-12/AA-12.7#S0342",children:["formal","_","package","_","association"]})}),"s. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(a.h4,{id:"legality-rules",children:"Legality Rules"}),"\n",(0,n.jsx)(l.A,{children:"4"}),"\n",(0,n.jsxs)("p",{children:["The ",(0,n.jsxs)("em",{children:["generic","_","package","_"]}),(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-4/AA-4.1#S0091",children:"name"})})," shall denote a generic package (the ",(0,n.jsx)("em",{children:"template"})," for the formal package); the formal package is an instance of the template.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"4.1/3"}),"\n",(0,n.jsx)(o.A,{items:["AI05-0025-1"]}),"\n",(0,n.jsxs)("p",{children:["The ",(0,n.jsxs)("em",{children:["generic","_","formal","_","parameter","_"]}),(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-4/AA-4.1#S0099",children:"selector_name"})})," of a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.7#S0342",children:"formal_package_association"})})," shall denote a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.1#S0314",children:"generic_formal_parameter_declaration"})})," of the template. If two or more formal subprograms of the template have the same defining name, then named associations are not allowed for the corresponding actuals.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"4.2/3"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00398-01"]}),"\n",(0,n.jsxs)("p",{children:["A ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.7#S0341",children:"formal_package_actual_part"})})," shall contain at most one ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.7#S0342",children:"formal_package_association"})})," for each formal parameter. If the ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.7#S0341",children:"formal_package_actual_part"})})," does not include \u201c",(0,n.jsx)("strong",{children:"others"})," =",">"," ","<",">","\u201d, each formal parameter without an association shall have a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-3/AA-3.7#S0063",children:"default_expression"})})," or ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.6#S0338",children:"subprogram_default"})}),".",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"4.3/3"}),"\n",(0,n.jsx)(o.A,{items:["AI05-0200-1"]}),"\n",(0,n.jsxs)("p",{children:["The rules for matching between ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.7#S0342",children:"formal_package_association"})}),"s and the generic formals of the template are as follows: ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"4.4/3"}),"\n",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["If all of the ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.7#S0342",children:"formal_package_association"})}),"s are given by generic associations, the ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.3#S0318",children:"explicit_generic_actual_parameter"})}),"s of the ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.7#S0342",children:"formal_package_association"})}),"s shall be legal for an instantiation of the template.",(0,n.jsx)("br",{})]}),(0,n.jsx)(l.A,{children:"4.5/5"}),(0,n.jsx)(o.A,{items:["AI05-0200-1"]}),(0,n.jsxs)("li",{children:["If a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.7#S0342",children:"formal_package_association"})})," for a formal type ",(0,n.jsx)("em",{children:"T"})," of the template is given by ","<",">",", then the ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.7#S0342",children:"formal_package_association"})})," for any other ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.1#S0314",children:"generic_formal_parameter_declaration"})})," of the template that mentions ",(0,n.jsx)("em",{children:"T"})," directly or indirectly shall also be given by ","<",">",".",(0,n.jsx)("br",{})]})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(l.A,{children:"4.a/3"}),(0,n.jsx)(o.A,{items:["AI05-0200-1"]}),(0,n.jsx)(i.A,{type:"aarm",aarm:"discussion",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)("strong",{}),"The above rule is simple to state, though it does not reflect the fact that the formal package functions like an instantiation of a special kind, where each box association for a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.1#S0314",children:"generic_formal_parameter_declaration"})})," ",(0,n.jsx)("em",{children:"F"})," is replaced with a new entity ",(0,n.jsx)("em",{children:"F"}),"' that has the same characteristics as ",(0,n.jsx)("em",{children:"F"}),": if ",(0,n.jsx)("em",{children:"F"})," is a formal discrete type then ",(0,n.jsx)("em",{children:"F"}),"' is a discrete type, if ",(0,n.jsx)("em",{children:"F"})," is a formal subprogram then ",(0,n.jsx)("em",{children:"F"}),"' is a subprogram with a similar signature, etc. In practice this is achieved by making the association into a copy of the declaration of the generic formal.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(l.A,{children:"5/2"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00317-01"]}),"\n",(0,n.jsxs)("p",{children:["The actual shall be an instance of the template. If the ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.7#S0341",children:"formal_package_actual_part"})})," is (","<",">",") or (",(0,n.jsx)("strong",{children:"others"})," =",">"," ","<",">","), [then the actual may be any instance of the template]; otherwise, certain of the actual parameters of the actual instance shall match the corresponding actual parameters of the formal package, determined as follows:",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"5.1/2"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00317-01"]}),"\n",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["If the ",(0,n.jsx)("code",{children:(0,n.jsxs)("a",{href:"../AA-12/AA-12.7#S0341",children:["formal","_","package","_","actual","_","part"]})})," includes ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.3#S0317",children:"generic_association"})}),"s as well as associations with ","<",">",", then only the actual parameters specified explicitly with ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.3#S0317",children:"generic_association"})}),"s are required to match;",(0,n.jsx)("br",{})]}),(0,n.jsx)(l.A,{children:"5.2/2"}),(0,n.jsx)(o.A,{items:["AI95-00317-01"]}),(0,n.jsxs)("li",{children:["Otherwise, all actual parameters shall match[, whether any actual parameter is given explicitly or by default]. ",(0,n.jsx)("br",{})]})]}),"\n",(0,n.jsx)(l.A,{children:"5.3/2"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00317-01"]}),"\n",(0,n.jsxs)("p",{children:["The rules for matching of actual parameters between the actual instance and the formal package are as follows:",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"6/2"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00317-01"]}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:["For a formal object of mode ",(0,n.jsx)("strong",{children:"in"}),", the actuals match if they are static expressions with the same value, or if they statically denote the same constant, or if they are both the literal ",(0,n.jsx)("strong",{children:"null"}),". ",(0,n.jsx)("br",{})]})}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(l.A,{children:"6.a"}),(0,n.jsx)(i.A,{type:"aarm",aarm:"reason",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)("strong",{}),"We can't simply require full conformance between the two actual parameter expressions, because the two expressions are being evaluated at different times. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(l.A,{children:"7"}),"\n",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["For a formal subtype, the actuals match if they denote statically matching subtypes. ",(0,n.jsx)("br",{})]}),(0,n.jsx)(l.A,{children:"8"}),(0,n.jsxs)("li",{children:["For other kinds of formals, the actuals match if they statically denote the same entity. ",(0,n.jsx)("br",{})]})]}),"\n",(0,n.jsx)(l.A,{children:"8.1/1"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00213-01"]}),"\n",(0,n.jsxs)("p",{children:["{",(0,n.jsx)("em",{children:"8652/0039"}),"}"," For the purposes of matching, any actual parameter that is the name of a formal object of mode ",(0,n.jsx)("strong",{children:"in"})," is replaced by the formal object's actual expression (recursively). ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(a.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,n.jsx)(l.A,{children:"9"}),"\n",(0,n.jsxs)("p",{children:["A ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.7#S0340",children:"formal_package_declaration"})})," declares a generic formal package.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"10/2"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00317-01"]}),"\n",(0,n.jsxs)("p",{children:["The visible part of a formal package includes the first list of ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-3/AA-3.11#S0088",children:"basic_declarative_item"})}),"s of the ",(0,n.jsx)("code",{children:(0,n.jsxs)("a",{href:"../AA-7/AA-7.1#S0230",children:["package","_","specification"]})}),". In addition, for each actual parameter that is not required to match, a copy of the declaration of the corresponding formal parameter of the template is included in the visible part of the formal package. If the copied declaration is for a formal type, copies of the implicit declarations of the primitive subprograms of the formal type are also included in the visible part of the formal package.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(l.A,{children:"10.a/2"}),(0,n.jsx)(o.A,{items:["AI95-00317-01"]}),(0,n.jsx)(i.A,{type:"aarm",aarm:"ramification",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)("strong",{}),"If the ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.7#S0341",children:"formal_package_actual_part"})})," is (","<",">","), then the declarations that occur immediately within the ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.1#S0313",children:"generic_formal_part"})})," of the template for the formal package are visible outside the formal package, and can be denoted by expanded names outside the formal package. If only some of the actual parameters are given by ","<",">",", then the declaration corresponding to those parameters (but not the others) are made visible. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(l.A,{children:"10.b/3"}),(0,n.jsx)(o.A,{items:["AI05-0005-1"]}),(0,n.jsx)(i.A,{type:"aarm",aarm:"reason",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)("strong",{}),"We always want either the actuals or the formals of an instance to be nameable from outside, but never both. If both were nameable, one would get some funny anomalies since they denote the same entity, but, in the case of types at least, they might have different and inconsistent sets of primitive operators due to predefined operator \u201creemergence\u201d, Formal derived types exacerbate the difference. We want the implicit declarations of the ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.1#S0313",children:"generic_formal_part"})})," as well as the explicit declarations, so we get operations on the formal types. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(l.A,{children:"10.c"}),(0,n.jsx)(i.A,{type:"aarm",aarm:"ramification",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)("strong",{}),"A generic formal package is a package, and is an instance. Hence, it is possible to pass a generic formal package as an actual to another generic formal package. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(l.A,{children:"11/2"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00317-01"]}),"\n",(0,n.jsxs)("p",{children:["For the purposes of matching, if the actual instance ",(0,n.jsx)("em",{children:"A"})," is itself a formal package, then the actual parameters of ",(0,n.jsx)("em",{children:"A"})," are those specified explicitly or implicitly in the ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.7#S0341",children:"formal_package_actual_part"})})," for ",(0,n.jsx)("em",{children:"A"}),", plus, for those not specified, the copies of the formal parameters of the template included in the visible part of ",(0,n.jsx)("em",{children:"A"}),".",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(a.h4,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(l.A,{children:"12/2"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00433-01"]}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("em",{children:"Example of a generic package with formal package parameters:"}),(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"13/2"}),"\n",(0,n.jsx)(c.A,{language:"ada",children:(0,n.jsxs)(a.p,{children:["with Ada.Containers.Ordered","_","Maps;  -- see ",(0,n.jsx)("a",{href:"../AA-A/AA-A.18#Subclause_A.18.6",children:"A.18.6"}),"\n","generic","\n","   with package Mapping","_","1 is new Ada.Containers.Ordered","_","Maps(","<",">",");","\n","   with package Mapping","_","2 is new Ada.Containers.Ordered","_","Maps","\n","                                    (Key","_","Type =",">"," Mapping","_","1.Element","_","Type,","\n","                                     others =",">"," ","<",">",");","\n","package Ordered","_","Join is","\n",'   -- Provide a "join" between two mappings',"\n","\n",(0,n.jsx)(l.A,{children:"14/2"}),"\nsubtype Key","_","Type is Mapping","_","1.Key","_","Type;","\n","   subtype Element","_","Type is Mapping","_","2.Element","_","Type;","\n","\n",(0,n.jsx)(l.A,{children:"15/2"}),"\nfunction Lookup(Key : Key","_","Type) return Element","_","Type;","\n","\n",(0,n.jsx)(l.A,{children:"16/2"}),"\n...","\n","end Ordered","_","Join;","\n"]})}),"\n",(0,n.jsx)(l.A,{children:"17/2"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00433-01"]}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("em",{children:"Example of an instantiation of a package with formal packages:"}),(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"18/2"}),"\n",(0,n.jsxs)(c.A,{language:"ada",children:[(0,n.jsxs)(a.p,{children:["with Ada.Containers.Ordered","_","Maps;","\n","package Symbol","_","Package is","\n","\n",(0,n.jsx)(l.A,{children:"19/5"})]}),(0,n.jsx)(o.A,{items:["AI12-0178-1"]}),(0,n.jsxs)(a.p,{children:["subtype Key","_","String is String(1..5);","\n","   type String","_","Id is ...","\n","\n",(0,n.jsx)(l.A,{children:"20/2"}),"\ntype Symbol","_","Info is ...","\n","\n",(0,n.jsx)(l.A,{children:"21/5"})]}),(0,n.jsx)(o.A,{items:["AI12-0178-1"]}),(0,n.jsxs)(a.p,{children:["package String","_","Table is new Ada.Containers.Ordered","_","Maps","\n","           (Key","_","Type =",">"," Key","_","String,","\n","            Element","_","Type =",">"," String","_","Id);","\n","\n",(0,n.jsx)(l.A,{children:"22/2"}),"\npackage Symbol","_","Table is new Ada.Containers.Ordered","_","Maps","\n","           (Key","_","Type =",">"," String","_","Id,","\n","            Element","_","Type =",">"," Symbol","_","Info);","\n","\n",(0,n.jsx)(l.A,{children:"23/2"}),"\npackage String","_","Info is new Ordered","_","Join(Mapping","_","1 =",">"," String","_","Table,","\n","                                           Mapping","_","2 =",">"," Symbol","_","Table);","\n","\n",(0,n.jsx)(l.A,{children:"24/2"}),"\nApple","_","Info : constant Symbol","_","Info := String","_",'Info.Lookup("Apple");',"\n","\n",(0,n.jsx)(l.A,{children:"25/2"}),"\nend Symbol","_","Package;","\n"]})]}),"\n",(0,n.jsx)(t.A,{children:(0,n.jsx)(a.h4,{id:"extensions-to-ada-83",children:"Extensions to Ada 83"})}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(l.A,{children:"25.a"}),(0,n.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(a.p,{children:["Formal packages are new to Ada 95. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(t.A,{children:(0,n.jsx)(a.h4,{id:"extensions-to-ada-95",children:"Extensions to Ada 95"})}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(l.A,{children:"25.b/2"}),(0,n.jsx)(o.A,{items:["AI95-00317-01","AI95-00398-01"]}),(0,n.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(a.p,{children:["It's now allowed to mix actuals of a formal package that are specified with those that are not specified. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(t.A,{children:(0,n.jsx)(a.h4,{id:"wording-changes-from-ada-95",children:"Wording Changes from Ada 95"})}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(l.A,{children:"25.c/2"}),(0,n.jsx)(o.A,{items:["AI95-00213-01"]}),(0,n.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(a.p,{children:["{",(0,n.jsx)("em",{children:"8652/0039"}),"}"," ",(0,n.jsx)("strong",{children:"Corrigendum:"})," Corrected the description of formal package matching to say that formal parameters are always replaced by their actual parameters (recursively). This matches the actual practice of compilers, as the ACATS has always required this behavior.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(l.A,{children:"25.d/2"}),(0,n.jsx)(o.A,{items:["AI95-00317-01"]}),(0,n.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(a.p,{children:["The description of which operations are visible in a formal package has been clarified. We also specify how matching is done when the actual is a formal package. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(t.A,{children:(0,n.jsx)(a.h4,{id:"incompatibilities-with-ada-2005",children:"Incompatibilities With Ada 2005"})}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(l.A,{children:"25.e/3"}),(0,n.jsx)(o.A,{items:["AI05-0025-1","AI05-0200-1"]}),(0,n.jsx)(i.A,{type:"aarm",aarm:"correction",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)("strong",{})," Added missing rules for parameters of generic formal package that parallel those in ",(0,n.jsx)("a",{href:"../AA-12/AA-12.3",children:"12.3"}),", as well as some specific to ","<",">"," parameters. These are technically incompatibilities because generic formal package parameters that Ada 95 and Ada 2005 would have considered legal now have to be rejected. But this should not be an issue in practice as such formal parameters could not have matched any actual generics. And it is quite likely that implementations already enforce some of these rules. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(t.A,{children:(0,n.jsx)(a.h4,{id:"extensions-to-ada-2005",children:"Extensions to Ada 2005"})}),"\n",(0,n.jsxs)(t.A,{children:[(0,n.jsx)(l.A,{children:"25.f/3"}),(0,n.jsx)(o.A,{items:["AI05-0183-1"]}),(0,n.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(a.p,{children:["An optional ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-13/AA-13.1#S0346",children:"aspect_specification"})})," can be used in a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"../AA-12/AA-12.7#S0340",children:"formal_package_declaration"})}),". This is described in ",(0,n.jsx)("a",{href:"../AA-13/AA-13.1#Subclause_13.1.1",children:"13.1.1"}),". ",(0,n.jsx)("br",{})]})})]})]})}function m(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}}}]);