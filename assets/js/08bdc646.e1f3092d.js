"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1040],{1716:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(6687);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),f=n,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},265:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(9440),n=(a(6687),a(1716));const o={sidebar_position:54},i="6.6  Overloading of Operators",l={unversionedId:"arm/AA-6.6",id:"arm/AA-6.6",title:"6.6  Overloading of Operators",description:"An operator is a function whose designator is an operator_symbol. [Operators, like other functions, may be overloaded.]",source:"@site/docs/arm/AA-6.6.md",sourceDirName:"arm",slug:"/arm/AA-6.6",permalink:"/docs/arm/AA-6.6",draft:!1,tags:[],version:"current",sidebarPosition:54,frontMatter:{sidebar_position:54},sidebar:"tutorialSidebar",previous:{title:"6.5  Return Statements",permalink:"/docs/arm/AA-6.5"},next:{title:"6.7  Null Procedures",permalink:"/docs/arm/AA-6.7"}},s={},p=[{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"66--overloading-of-operators"},"6.6  Overloading of Operators"),(0,n.kt)("p",null,"An operator is a function whose ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.1#S0199"},"designator")," is an ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.1#S0202"},"operator_symbol"),". ","[Operators, like other functions, may be overloaded.]"," "),(0,n.kt)("h4",{id:"name-resolution-rules"},"Name Resolution Rules"),(0,n.kt)("p",null,"Each use of a unary or binary operator is equivalent to a ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.4#S0218"},"function_call")," with function_",(0,n.kt)("a",{parentName:"p",href:"./AA-4.1#S0093"},"prefix")," being the corresponding ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.1#S0202"},"operator_symbol"),", and with (respectively) one or two positional actual parameters being the operand(s) of the operator (in order). "),(0,n.kt)("p",null,'To be honest: {AI05-0299-1} We also use the term operator (in Clause 4 and in 6.1) to refer to one of the syntactic categories defined in 4.5, "Operators and Expression Evaluation" whose names end with "_operator:" ',(0,n.kt)("a",{parentName:"p",href:"./AA-4.5#S0142"},"logical_operator"),", ",(0,n.kt)("a",{parentName:"p",href:"./AA-4.5#S0143"},"relational_operator"),", ",(0,n.kt)("a",{parentName:"p",href:"./AA-4.5#S0144"},"binary_adding_operator"),", ",(0,n.kt)("a",{parentName:"p",href:"./AA-4.5#S0145"},"unary_adding_operator"),", ",(0,n.kt)("a",{parentName:"p",href:"./AA-4.5#S0146"},"multiplying_operator"),", and ",(0,n.kt)("a",{parentName:"p",href:"./AA-4.5#S0147"},"highest_precedence_operator"),". "),(0,n.kt)("p",null,"Discussion: {AI05-0005-1} This equivalence extends to uses of ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.4#S0218"},"function_call")," in most other language rules. However, as often happens, the equivalence is not perfect, as operator calls are not a ",(0,n.kt)("a",{parentName:"p",href:"./AA-4.1#S0091"},"name"),", while a ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.4#S0218"},"function_call")," is a ",(0,n.kt)("a",{parentName:"p",href:"./AA-4.1#S0091"},"name"),". Thus, operator calls cannot be used in contexts that require a ",(0,n.kt)("a",{parentName:"p",href:"./AA-4.1#S0091"},"name")," (such as a rename of an object). A direct fix for this problem would be very disruptive, and thus we have not done that. However, qualifying an operator call can be used as a workaround in contexts that require a ",(0,n.kt)("a",{parentName:"p",href:"./AA-4.1#S0091"},"name"),". "),(0,n.kt)("h4",{id:"legality-rules"},"Legality Rules"),(0,n.kt)("p",null,"{AI05-0143-1} The ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.1#S0196"},"subprogram_specification")," of a unary or binary operator shall have one or two parameters, respectively. The parameters shall be of mode in. A generic function instantiation whose ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.1#S0199"},"designator")," is an ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.1#S0202"},"operator_symbol")," is only allowed if the specification of the generic function has the corresponding number of parameters, and they are all of mode in."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./AA-3.7#S0063"},"Default_expression"),"s are not allowed for the parameters of an operator (whether the operator is declared with an explicit ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.1#S0196"},"subprogram_specification")," or by a ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.3#S0315"},"generic_instantiation"),")."),(0,n.kt)("p",null,'An explicit declaration of "/=" shall not have a result type of the predefined type Boolean. '),(0,n.kt)("h4",{id:"static-semantics"},"Static Semantics"),(0,n.kt)("p",null,'{AI05-0128-1} An explicit declaration of "=" whose result type is Boolean implicitly declares an operator "/=" that gives the complementary result. '),(0,n.kt)("p",null,'Discussion: {AI05-0128-1} A "/=" defined by this rule is considered user-defined, which means that it will be inherited by a derived type. "User-defined" means "not language-defined" for the purposes of inheritance, that is anything other than predefined operators. '),(0,n.kt)("p",null,'NOTE 1   {AI12-0440-1} The operators "+" and "" are both unary and binary operators, and hence can be overloaded with both one- and two-parameter functions. '),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Examples of user-defined operators: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ada"},'function "+" (Left, Right : Matrix) return Matrix;\nfunction "+" (Left, Right : Vector) return Vector;\n\n--  assuming that A, B, and C are of the type Vector\n--  the following two statements are equivalent:\n\nA := B + C;\nA := "+"(B, C);\n\n')),(0,n.kt)("h4",{id:"extensions-to-ada-83"},"Extensions to Ada 83"),(0,n.kt)("p",null,'Explicit declarations of "=" are now permitted for any combination of parameter and result types.'),(0,n.kt)("p",null,'Explicit declarations of "/=" are now permitted, so long as the result type is not Boolean. '),(0,n.kt)("h4",{id:"wording-changes-from-ada-2005"},"Wording Changes from Ada 2005"),(0,n.kt)("p",null,'{AI05-0128-1} Correction: Corrected the wording so that only explicit declarations of "=" cause an implicit declaration of "/="; otherwise, we could get multiple implicit definitions of "/=" without an obvious way to chose between them.'),(0,n.kt)("p",null,"{AI05-0143-1} Added wording so that operators only allow parameters of mode in. This was made necessary by the elimination elsewhere of the restriction that function parameters be only of mode in."))}u.isMDXComponent=!0}}]);