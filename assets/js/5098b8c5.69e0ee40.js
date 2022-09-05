"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[3343],{1716:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(6687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,g=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(9440),o=(n(6687),n(1716));const r={sidebar_position:136},i="A.19  The Package Locales",s={unversionedId:"arm/AA-A.19",id:"arm/AA-A.19",title:"A.19  The Package Locales",description:"{AI05-0248-1} A locale identifies a geopolitical place or region and its associated language, which can be used to determine other internationalization-related characteristics.",source:"@site/docs/arm/AA-A.19.md",sourceDirName:"arm",slug:"/arm/AA-A.19",permalink:"/docs/arm/AA-A.19",draft:!1,tags:[],version:"current",sidebarPosition:136,frontMatter:{sidebar_position:136},sidebar:"tutorialSidebar",previous:{title:"A.18  Containers",permalink:"/docs/arm/AA-A.18"},next:{title:"Annex B Interface to Other Languages",permalink:"/docs/arm/AA-Annex B"}},c={},l=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005",level:4},{value:"Inconsistencies With Ada 2012",id:"inconsistencies-with-ada-2012",level:4}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"a19--the-package-locales"},"A.19  The Package Locales"),(0,o.kt)("p",null,"{AI05-0127-2} {AI05-0248-1} A locale identifies a geopolitical place or region and its associated language, which can be used to determine other internationalization-related characteristics. "),(0,o.kt)("h4",{id:"static-semantics"},"Static Semantics"),(0,o.kt)("p",null,"{AI05-0127-2} The library package Locales has the following declaration: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ada"},"{AI12-0414-1} package Ada.Locales\n   with Preelaborate, Remote_Types is\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ada"},"{AI12-0037-1}    type Language_Code is new String (1 .. 3)\n      with Dynamic_Predicate =&gt\n         (for all E of Language_Code =&gt E in 'a' .. 'z');\n   type Country_Code is new String (1 .. 2)\n      with Dynamic_Predicate =&gt\n         (for all E of Country_Code  =&gt E in 'A' .. 'Z');\n\n")),(0,o.kt)("p",null,"Discussion: {AI12-0037-1} These types are derived from type String so that they can easily be converted to or from type String. That's important if one of these values needs to be input or displayed (via Text_IO, perhaps). We use the predicate to ensure that only possible component values are used. Ada does not allow converting between unrelated types with components that don't statically match, so we cannot declare new types with constrained components if we want conversions to or from type String. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ada"},'   Language_Unknown : constant Language_Code := "und";\n   Country_Unknown : constant Country_Code := "ZZ";\n\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ada"},"   function Language return Language_Code;\n   function Country return Country_Code;\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ada"},"end Ada.Locales;\n\n")),(0,o.kt)("p",null,"{AI05-0127-2} {AI05-0233-1} The active locale is the locale associated with the partition of the current task."),(0,o.kt)("p",null,"Implementation Note: {AI05-0233-1} Some environments define both a system locale and the locale of the current user. For such environments, the active locale is that of current user if any; otherwise (as in a partition running on a server without a user), the system locale should be used. "),(0,o.kt)("p",null,"{AI05-0127-2} Language_Code is a lower-case string representation of an ISO 639-3 alpha-3 code that identifies a language."),(0,o.kt)("p",null,'Discussion: Some common language codes are: "eng"  English; "fra"  French; "deu"  German; "zho"  Chinese. These are the same codes as used by POSIX systems. We considered including constants for the most common languages, but that was rejected as the likely source of continual arguments about the constant names and which languages are important enough to include. '),(0,o.kt)("p",null,"{AI05-0127-2} Country_Code is an upper-case string representation of an ISO 3166-1 alpha-2 code that identifies a country."),(0,o.kt)("p",null,'Discussion: Some common country codes are: "CA"  Canada; "FR"  France; "DE"  Germany; "IT"  Italy; "ES"  Spain; "GB"  United Kingdom; "US"  United States. These are the same codes as used by POSIX systems. We didn\'t include any country constants for the same reasons that we didn\'t include any language constants. '),(0,o.kt)("p",null,"{AI05-0127-2} {AI05-0248-1} Function Language returns the code of the language associated with the active locale. If the Language_Code associated with the active locale cannot be determined from the environment, then Language returns Language_Unknown."),(0,o.kt)("p",null,"{AI05-0127-2} {AI05-0248-1} Function Country returns the code of the country associated with the active locale. If the Country_Code associated with the active locale cannot be determined from the environment, then Country returns Country_Unknown."),(0,o.kt)("h4",{id:"extensions-to-ada-2005"},"Extensions to Ada 2005"),(0,o.kt)("p",null,"{AI05-0127-2} {AI05-0233-1} Package Locales is new. "),(0,o.kt)("h4",{id:"inconsistencies-with-ada-2012"},"Inconsistencies With Ada 2012"),(0,o.kt)("p",null,"{AI12-0037-1} Corrigendum: Types Language_Code and Country_Code are defined with predicates rather than constrained components so that they can be converted to/from type String. This changes the exception raised from Constraint_Error to Assertion_Error if an assignment is attempted with an incorrect value. This could only matter if there is a handler specifically for Constraint_Error surrounding this assignment; as this exception raise is certainly caused by a bug (why would anyone want to use invalid language or country codes?), such a handler seems very unlikely. (In addition, this is a new Ada 2012 package, so there is not likely to be a lot of code using it.)"))}d.isMDXComponent=!0}}]);