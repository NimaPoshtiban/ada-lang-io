"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[5565],{1716:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>h});var n=t(6687);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(t),h=r,d=f["".concat(s,".").concat(h)]||f[h]||m[h]||i;return t?n.createElement(d,o(o({ref:a},c),{},{components:t})):n.createElement(d,o({ref:a},c))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6587:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(9440),r=(t(6687),t(1716));const i={sidebar_position:100},o="12.7  Formal Packages",l={unversionedId:"arm/AA-12.7",id:"arm/AA-12.7",title:"12.7  Formal Packages",description:"Formal packages can be used to pass packages to a generic unit. The [formalpackagedeclaration declares that the formal package is an instance of a given generic package. Upon instantiation, the actual package has to be an instance of that generic package.]",source:"@site/docs/arm/AA-12.7.md",sourceDirName:"arm",slug:"/arm/AA-12.7",permalink:"/docs/arm/AA-12.7",draft:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"12.6  Formal Subprograms",permalink:"/docs/arm/AA-12.6"},next:{title:"12.8  Example of a Generic Package",permalink:"/docs/arm/AA-12.8"}},s={},p=[{value:"Syntax",id:"syntax",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Incompatibilities With Ada 2005",id:"incompatibilities-with-ada-2005",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005",level:4}],c={toc:p};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"127--formal-packages"},"12.7  Formal Packages"),(0,r.kt)("p",null,"[ Formal packages can be used to pass packages to a generic unit. The ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0340"},"formal_package_declaration")," declares that the formal package is an instance of a given generic package. Upon instantiation, the actual package has to be an instance of that generic package.] "),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"{AI05-0183-1} formal",(0,r.kt)("em",{parentName:"p"},"package_declaration",(0,r.kt)("a",{id:"S0340"})," ::=\nwith package ",(0,r.kt)("a",{parentName:"em",href:"./AA-3.1#S0022"},"defining_identifier")," is new generic_package"),(0,r.kt)("a",{parentName:"p",href:"./AA-4.1#S0091"},"name"),"  ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0341"},"formal_package_actual_part"),"\n[",(0,r.kt)("a",{parentName:"p",href:"./AA-13.1#S0346"},"aspect_specification"),"];"),(0,r.kt)("p",null,"{AI95-00317-01} formal_package_actual_part",(0,r.kt)("a",{id:"S0341"})," ::=\n(","[others =",">]"," ","<",">",")\n| [",(0,r.kt)("a",{parentName:"p",href:"./AA-12.3#S0316"},"generic_actual_part"),"]\n| (",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0342"},"formal_package_association")," {, ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0342"},"formal_package_association"),"} ","[, others =",">"," ","<",">]",")"),(0,r.kt)("p",null,"{AI95-00317-01} formal",(0,r.kt)("em",{parentName:"p"},"package_association",(0,r.kt)("a",{id:"S0342"})," ::=\n",(0,r.kt)("a",{parentName:"em",href:"./AA-12.3#S0317"},"generic_association"),"\n| generic_formal_parameter"),(0,r.kt)("a",{parentName:"p",href:"./AA-4.1#S0099"},"selector_name")," =",">"," ","<",">"),(0,r.kt)("p",null,"{AI95-00317-01} Any positional ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0342"},"formal_package_association"),"s shall precede any named ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0342"},"formal_package_association"),"s. "),(0,r.kt)("h4",{id:"legality-rules"},"Legality Rules"),(0,r.kt)("p",null,"The generic",(0,r.kt)("em",{parentName:"p"},"package"),(0,r.kt)("a",{parentName:"p",href:"./AA-4.1#S0091"},"name")," shall denote a generic package (the template for the formal package); the formal package is an instance of the template."),(0,r.kt)("p",null,"{AI05-0025-1} The generic",(0,r.kt)("em",{parentName:"p"},"formal_parameter"),(0,r.kt)("a",{parentName:"p",href:"./AA-4.1#S0099"},"selector_name")," of a ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0342"},"formal_package_association")," shall denote a ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.1#S0314"},"generic_formal_parameter_declaration")," of the template. If two or more formal subprograms of the template have the same defining name, then named associations are not allowed for the corresponding actuals."),(0,r.kt)("p",null,"{AI95-00398-01} A ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0341"},"formal_package_actual_part")," shall contain at most one ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0342"},"formal_package_association")," for each formal parameter. If the ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0341"},"formal_package_actual_part"),' does not include "others =',">"," ","<",">",'", each formal parameter without an association shall have a ',(0,r.kt)("a",{parentName:"p",href:"./AA-3.7#S0063"},"default_expression")," or ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.6#S0338"},"subprogram_default"),"."),(0,r.kt)("p",null,"{AI05-0200-1} The rules for matching between ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0342"},"formal_package_association"),"s and the generic formals of the template are as follows: "),(0,r.kt)("p",null,"If all of the ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0342"},"formal_package_association"),"s are given by generic associations, the ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.3#S0318"},"explicit_generic_actual_parameter"),"s of the ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0342"},"formal_package_association"),"s shall be legal for an instantiation of the template."),(0,r.kt)("p",null,"{AI05-0200-1} If a ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0342"},"formal_package_association")," for a formal type T of the template is given by ","<",">",", then the ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0342"},"formal_package_association")," for any other ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.1#S0314"},"generic_formal_parameter_declaration")," of the template that mentions T directly or indirectly shall also be given by ","<",">","."),(0,r.kt)("p",null,"Discussion: {AI05-0200-1} The above rule is simple to state, though it does not reflect the fact that the formal package functions like an instantiation of a special kind, where each box association for a ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.1#S0314"},"generic_formal_parameter_declaration")," F is replaced with a new entity F' that has the same characteristics as F: if F is a formal discrete type then F' is a discrete type, if F is a formal subprogram then F' is a subprogram with a similar signature, etc. In practice this is achieved by making the association into a copy of the declaration of the generic formal."),(0,r.kt)("p",null,"{AI95-00317-01} The actual shall be an instance of the template. If the ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0341"},"formal_package_actual_part")," is (","<",">",") or (others =",">"," ","<",">","), ","[then the actual may be any instance of the template]","; otherwise, certain of the actual parameters of the actual instance shall match the corresponding actual parameters of the formal package, determined as follows:"),(0,r.kt)("p",null,"{AI95-00317-01} If the ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0341"},"formal_package_actual_part")," includes ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.3#S0317"},"generic_association"),"s as well as associations with ","<",">",", then only the actual parameters specified explicitly with ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.3#S0317"},"generic_association"),"s are required to match;"),(0,r.kt)("p",null,"{AI95-00317-01} Otherwise, all actual parameters shall match","[, whether any actual parameter is given explicitly or by default]",". "),(0,r.kt)("p",null,"{AI95-00317-01} The rules for matching of actual parameters between the actual instance and the formal package are as follows:"),(0,r.kt)("p",null,"{AI95-00317-01} For a formal object of mode in, the actuals match if they are static expressions with the same value, or if they statically denote the same constant, or if they are both the literal null. "),(0,r.kt)("p",null,"Reason: We can't simply require full conformance between the two actual parameter expressions, because the two expressions are being evaluated at different times. "),(0,r.kt)("p",null,"For a formal subtype, the actuals match if they denote statically matching subtypes. "),(0,r.kt)("p",null,"For other kinds of formals, the actuals match if they statically denote the same entity. "),(0,r.kt)("p",null,"{8652/0039} {AI95-00213-01} For the purposes of matching, any actual parameter that is the name of a formal object of mode in is replaced by the formal object's actual expression (recursively). "),(0,r.kt)("h4",{id:"static-semantics"},"Static Semantics"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0340"},"formal_package_declaration")," declares a generic formal package."),(0,r.kt)("p",null,"{AI95-00317-01} The visible part of a formal package includes the first list of ",(0,r.kt)("a",{parentName:"p",href:"./AA-3.11#S0088"},"basic_declarative_item"),"s of the ",(0,r.kt)("a",{parentName:"p",href:"./AA-7.1#S0230"},"package_specification"),". In addition, for each actual parameter that is not required to match, a copy of the declaration of the corresponding formal parameter of the template is included in the visible part of the formal package. If the copied declaration is for a formal type, copies of the implicit declarations of the primitive subprograms of the formal type are also included in the visible part of the formal package."),(0,r.kt)("p",null,"Ramification: {AI95-00317-01} If the ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0341"},"formal_package_actual_part")," is (","<",">","), then the declarations that occur immediately within the ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.1#S0313"},"generic_formal_part")," of the template for the formal package are visible outside the formal package, and can be denoted by expanded names outside the formal package. If only some of the actual parameters are given by ","<",">",", then the declaration corresponding to those parameters (but not the others) are made visible. "),(0,r.kt)("p",null,'Reason: {AI05-0005-1} We always want either the actuals or the formals of an instance to be nameable from outside, but never both. If both were nameable, one would get some funny anomalies since they denote the same entity, but, in the case of types at least, they might have different and inconsistent sets of primitive operators due to predefined operator "reemergence", Formal derived types exacerbate the difference. We want the implicit declarations of the ',(0,r.kt)("a",{parentName:"p",href:"./AA-12.1#S0313"},"generic_formal_part")," as well as the explicit declarations, so we get operations on the formal types. "),(0,r.kt)("p",null,"Ramification: A generic formal package is a package, and is an instance. Hence, it is possible to pass a generic formal package as an actual to another generic formal package. "),(0,r.kt)("p",null,"{AI95-00317-01} For the purposes of matching, if the actual instance A is itself a formal package, then the actual parameters of A are those specified explicitly or implicitly in the ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0341"},"formal_package_actual_part")," for A, plus, for those not specified, the copies of the formal parameters of the template included in the visible part of A."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"{AI95-00433-01} Example of a generic package with formal package parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'with Ada.Containers.Ordered_Maps;  -- see A.18.6\ngeneric\n   with package Mapping_1 is new Ada.Containers.Ordered_Maps(&lt&gt);\n   with package Mapping_2 is new Ada.Containers.Ordered_Maps\n                                    (Key_Type =&gt Mapping_1.Element_Type,\n                                     others =&gt &lt&gt);\npackage Ordered_Join is\n   -- Provide a "join" between two mappings\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   subtype Key_Type is Mapping_1.Key_Type;\n   subtype Element_Type is Mapping_2.Element_Type;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   function Lookup(Key : Key_Type) return Element_Type;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   ...\nend Ordered_Join;\n\n")),(0,r.kt)("p",null,"{AI95-00433-01} Example of an instantiation of a package with formal packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"with Ada.Containers.Ordered_Maps;\npackage Symbol_Package is\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI12-0178-1}    subtype Key_String is String(1..5);\n   type String_Id is ...\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   type Symbol_Info is ...\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI12-0178-1}    package String_Table is new Ada.Containers.Ordered_Maps\n           (Key_Type =&gt Key_String,\n            Element_Type =&gt String_Id);\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   package Symbol_Table is new Ada.Containers.Ordered_Maps\n           (Key_Type =&gt String_Id,\n            Element_Type =&gt Symbol_Info);\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   package String_Info is new Ordered_Join(Mapping_1 =&gt String_Table,\n                                           Mapping_2 =&gt Symbol_Table);\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'   Apple_Info : constant Symbol_Info := String_Info.Lookup("Apple");\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"end Symbol_Package;\n\n")),(0,r.kt)("h4",{id:"extensions-to-ada-83"},"Extensions to Ada 83"),(0,r.kt)("p",null,"Formal packages are new to Ada 95. "),(0,r.kt)("h4",{id:"extensions-to-ada-95"},"Extensions to Ada 95"),(0,r.kt)("p",null,"{AI95-00317-01} {AI95-00398-01} It's now allowed to mix actuals of a formal package that are specified with those that are not specified. "),(0,r.kt)("h4",{id:"wording-changes-from-ada-95"},"Wording Changes from Ada 95"),(0,r.kt)("p",null,"{8652/0039} {AI95-00213-01} Corrigendum: Corrected the description of formal package matching to say that formal parameters are always replaced by their actual parameters (recursively). This matches the actual practice of compilers, as the ACATS has always required this behavior."),(0,r.kt)("p",null,"{AI95-00317-01} The description of which operations are visible in a formal package has been clarified. We also specify how matching is done when the actual is a formal package. "),(0,r.kt)("h4",{id:"incompatibilities-with-ada-2005"},"Incompatibilities With Ada 2005"),(0,r.kt)("p",null,"{AI05-0025-1} {AI05-0200-1} Correction: Added missing rules for parameters of generic formal package that parallel those in 12.3, as well as some specific to ","<",">"," parameters. These are technically incompatibilities because generic formal package parameters that Ada 95 and Ada 2005 would have considered legal now have to be rejected. But this should not be an issue in practice as such formal parameters could not have matched any actual generics. And it is quite likely that implementations already enforce some of these rules. "),(0,r.kt)("h4",{id:"extensions-to-ada-2005"},"Extensions to Ada 2005"),(0,r.kt)("p",null,"{AI05-0183-1} An optional ",(0,r.kt)("a",{parentName:"p",href:"./AA-13.1#S0346"},"aspect_specification")," can be used in a ",(0,r.kt)("a",{parentName:"p",href:"./AA-12.7#S0340"},"formal_package_declaration"),". This is described in 13.1.1."))}m.isMDXComponent=!0}}]);