"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[5485],{1716:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>d});var r=t(6687);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),l=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=l(e.components);return r.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},f=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(t),d=n,g=f["".concat(p,".").concat(d)]||f[d]||m[d]||i;return t?r.createElement(g,o(o({ref:a},s),{},{components:t})):r.createElement(g,o({ref:a},s))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var p in a)hasOwnProperty.call(a,p)&&(c[p]=a[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3864:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(9440),n=(t(6687),t(1716));const i={sidebar_position:94},o="12.1  Generic Declarations",c={unversionedId:"arm/AA-12.1",id:"arm/AA-12.1",title:"12.1  Generic Declarations",description:"A [genericdeclaration declares a generic unit, which is either a generic subprogram or a generic package. A genericdeclaration includes a genericformalpart declaring any generic formal parameters. A generic formal parameter can be an object; alternatively (unlike a parameter of a subprogram), it can be a type, a subprogram, or a package.]",source:"@site/docs/arm/AA-12.1.md",sourceDirName:"arm",slug:"/arm/AA-12.1",permalink:"/docs/arm/AA-12.1",draft:!1,tags:[],version:"current",sidebarPosition:94,frontMatter:{sidebar_position:94},sidebar:"tutorialSidebar",previous:{title:"12 Generic Units",permalink:"/docs/arm/AA-12"},next:{title:"12.2  Generic Bodies",permalink:"/docs/arm/AA-12.2"}},p={},l=[{value:"Syntax",id:"syntax",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}],s={toc:l};function m(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"121--generic-declarations"},"12.1  Generic Declarations"),(0,n.kt)("p",null,"[A ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0310"},"generic_declaration")," declares a generic unit, which is either a generic subprogram or a generic package. A ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0310"},"generic_declaration")," includes a ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0313"},"generic_formal_part")," declaring any generic formal parameters. A generic formal parameter can be an object; alternatively (unlike a parameter of a subprogram), it can be a type, a subprogram, or a package.] "),(0,n.kt)("h4",{id:"syntax"},"Syntax"),(0,n.kt)("p",null,"generic_declaration",(0,n.kt)("a",{id:"S0310"})," ::= ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0311"},"generic_subprogram_declaration")," | ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0312"},"generic_package_declaration")),(0,n.kt)("p",null,"{AI05-0183-1} generic_subprogram_declaration",(0,n.kt)("a",{id:"S0311"})," ::=\n",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0313"},"generic_formal_part"),"  ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.1#S0196"},"subprogram_specification"),"\n[",(0,n.kt)("a",{parentName:"p",href:"./AA-13.1#S0346"},"aspect_specification"),"];"),(0,n.kt)("p",null,"generic_package_declaration",(0,n.kt)("a",{id:"S0312"})," ::=\n",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0313"},"generic_formal_part"),"  ",(0,n.kt)("a",{parentName:"p",href:"./AA-7.1#S0230"},"package_specification"),";"),(0,n.kt)("p",null,"Ramification: {AI05-0183-1} No syntax change is needed here to allow an ",(0,n.kt)("a",{parentName:"p",href:"./AA-13.1#S0346"},"aspect_specification"),"; a generic package can have an ",(0,n.kt)("a",{parentName:"p",href:"./AA-13.1#S0346"},"aspect_specification")," because a ",(0,n.kt)("a",{parentName:"p",href:"./AA-7.1#S0230"},"package_specification")," allows an ",(0,n.kt)("a",{parentName:"p",href:"./AA-13.1#S0346"},"aspect_specification"),". "),(0,n.kt)("p",null,"generic_formal_part",(0,n.kt)("a",{id:"S0313"})," ::= generic {",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0314"},"generic_formal_parameter_declaration")," | ",(0,n.kt)("a",{parentName:"p",href:"./AA-8.4#S0235"},"use_clause"),"}"),(0,n.kt)("p",null,"generic_formal_parameter_declaration",(0,n.kt)("a",{id:"S0314"})," ::=\n",(0,n.kt)("a",{parentName:"p",href:"./AA-12.4#S0319"},"formal_object_declaration"),"\n| ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.5#S0320"},"formal_type_declaration"),"\n| ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.6#S0335"},"formal_subprogram_declaration"),"\n| ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.7#S0340"},"formal_package_declaration")),(0,n.kt)("p",null,"The only form of ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.2#S0027"},"subtype_indication")," allowed within a ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0313"},"generic_formal_part")," is a ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.2#S0028"},"subtype_mark")," [(that is, the ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.2#S0027"},"subtype_indication")," shall not include an explicit ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.2#S0029"},"constraint"),")]. The defining name of a generic subprogram shall be an ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.3#S0002"},"identifier")," [(not an ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.1#S0202"},"operator_symbol"),")]. "),(0,n.kt)("p",null,"Reason: The reason for forbidding ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.2#S0029"},"constraint"),"s in ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.2#S0027"},"subtype_indication"),"s is that it simplifies the elaboration of ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0310"},"generic_declaration"),"s (since there is nothing to evaluate), and that it simplifies the matching rules, and makes them more checkable at compile time. "),(0,n.kt)("h4",{id:"static-semantics"},"Static Semantics"),(0,n.kt)("p",null,"{AI95-00434-01} A ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0310"},"generic_declaration")," declares a generic unit - a generic package, generic procedure, or generic function, as appropriate."),(0,n.kt)("p",null,"An entity is a generic formal entity if it is declared by a ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0314"},"generic_formal_parameter_declaration"),'. "Generic formal", or simply "formal", is used as a prefix in referring to objects, subtypes (and types), functions, procedures and packages, that are generic formal entities, as well as to their respective declarations. ','[Examples: "generic formal procedure" or a "formal integer type declaration".]'),(0,n.kt)("p",null,"{AI12-0371-1} The list of ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0314"},"generic_formal_parameter_declaration"),"s of a ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0313"},"generic_formal_part")," form a declaration list of the generic unit."),(0,n.kt)("p",null,"Ramification: Aspect specifications (see 13.1.1) given in a generic formal part can only use declarations given in the formal part, and not those in the visible part of the generic unit. "),(0,n.kt)("h4",{id:"dynamic-semantics"},"Dynamic Semantics"),(0,n.kt)("p",null,"The elaboration of a ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0310"},"generic_declaration")," has no effect. "),(0,n.kt)("p",null,"NOTE 1   Outside a generic unit a ",(0,n.kt)("a",{parentName:"p",href:"./AA-4.1#S0091"},"name")," that denotes the ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0310"},"generic_declaration")," denotes the generic unit. In contrast, within the declarative region of the generic unit, a ",(0,n.kt)("a",{parentName:"p",href:"./AA-4.1#S0091"},"name")," that denotes the ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0310"},"generic_declaration")," denotes the current instance. "),(0,n.kt)("p",null,'Proof: This is stated officially as part of the "current instance" rule in 8.6, "The Context of Overload Resolution". See also 12.3, "Generic Instantiation". '),(0,n.kt)("p",null,"NOTE 2   Within a generic ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.3#S0216"},"subprogram_body"),", the name of this program unit acts as the name of a subprogram. Hence this name can be overloaded, and it can appear in a recursive call of the current instance. For the same reason, this name cannot appear after the reserved word new in a (recursive) ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.3#S0315"},"generic_instantiation"),"."),(0,n.kt)("p",null,"NOTE 3   A ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.7#S0063"},"default_expression")," or ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.6#S0339"},"default_name")," appearing in a ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0313"},"generic_formal_part")," is not evaluated during elaboration of the ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0313"},"generic_formal_part"),"; instead, it is evaluated when used. (The usual visibility rules apply to any ",(0,n.kt)("a",{parentName:"p",href:"./AA-4.1#S0091"},"name")," used in a default: the denoted declaration therefore has to be visible at the place of the expression.) "),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Examples of generic formal parts: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ada"},"generic     --  parameterless \n\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ada"},"generic\n   Size : Natural;  --  formal object \n\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ada"},"generic\n   Length : Integer := 200;          -- formal object with a default expression\n\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ada"},"   Area   : Integer := Length*Length; -- formal object with a default expression\n\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ada"},'generic\n   type Item  is private;                       -- formal type\n   type Index is (&lt&gt);                          -- formal type\n   type Row   is array(Index range &lt&gt) of Item; -- formal type\n   with function "&lt"(X, Y : Item) return Boolean;    -- formal subprogram \n\n')),(0,n.kt)("p",null,"Examples of generic declarations declaring generic subprograms Exchange and Squaring: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ada"},"generic\n   type Elem is private;\nprocedure Exchange(U, V : in out Elem);\n\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ada"},'{AI12-0178-1} generic\n   type Item (&lt&gt) is private;\n   with function "*"(U, V : Item) return Item is &lt&gt;\nfunction Squaring(X : Item) return Item;\n\n')),(0,n.kt)("p",null,"Example of a generic declaration declaring a generic package: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ada"},"generic\n   type Item   is private;\n   type Vector is array (Positive range &lt&gt) of Item;\n   with function Sum(X, Y : Item) return Item;\npackage On_Vectors is\n   function Sum  (A, B : Vector) return Vector;\n   function Sigma(A    : Vector) return Item;\n   Length_Error : exception;\nend On_Vectors;\n\n")),(0,n.kt)("h4",{id:"extensions-to-ada-83"},"Extensions to Ada 83"),(0,n.kt)("p",null,"The syntax rule for ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0314"},"generic_formal_parameter_declaration")," is modified to allow the reserved words tagged and abstract, to allow formal derived types, and to allow formal packages."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./AA-8.4#S0235"},"Use_clause"),"s are allowed in ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0313"},"generic_formal_part"),"s. This is necessary in order to allow a ",(0,n.kt)("a",{parentName:"p",href:"./AA-8.4#S0235"},"use_clause")," within a formal part to provide direct visibility of declarations within a generic formal package. "),(0,n.kt)("h4",{id:"wording-changes-from-ada-83"},"Wording Changes from Ada 83"),(0,n.kt)("p",null,"{AI05-0299-1} The syntax for ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0314"},"generic_formal_parameter_declaration")," and ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.5#S0323"},"formal_type_definition")," is split up into more named categories. The rules for these categories are moved to the appropriate subclauses. The names of the categories are changed to be more intuitive and uniform. For example, we changed generic_parameter_declaration to ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0314"},"generic_formal_parameter_declaration"),', because the thing it declares is a generic formal, not a generic. In the others, we abbreviate "generic_formal" to just "formal". We can\'t do that for ',(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0314"},"generic_formal_parameter_declaration"),", because of confusion with normal formal parameters of subprograms. "),(0,n.kt)("h4",{id:"extensions-to-ada-2005"},"Extensions to Ada 2005"),(0,n.kt)("p",null,"{AI05-0183-1} An optional ",(0,n.kt)("a",{parentName:"p",href:"./AA-13.1#S0346"},"aspect_specification")," can be used in a ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0311"},"generic_subprogram_declaration")," (as well as a ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.1#S0312"},"generic_package_declaration"),"). This is described in 13.1.1. "),(0,n.kt)("h4",{id:"wording-changes-from-ada-2012"},"Wording Changes from Ada 2012"),(0,n.kt)("p",null,"{AI12-0371-1} Defined a formal part as a declaration list, so that the visibility of entities in aspect specifications is properly defined."))}m.isMDXComponent=!0}}]);