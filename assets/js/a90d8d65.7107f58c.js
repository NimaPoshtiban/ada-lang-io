"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[5053],{1716:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(6687);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),g=a,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return t?r.createElement(d,o(o({ref:n},l),{},{components:t})):r.createElement(d,o({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8494:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(9440),a=(t(6687),t(1716));const i={sidebar_position:93},o="12 Generic Units",c={unversionedId:"arm/AA-12",id:"arm/AA-12",title:"12 Generic Units",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-12.md",sourceDirName:"arm",slug:"/arm/AA-12",permalink:"/docs/arm/AA-12",draft:!1,tags:[],version:"current",sidebarPosition:93,frontMatter:{sidebar_position:93},sidebar:"tutorialSidebar",previous:{title:"11.6  Exceptions and Optimization",permalink:"/docs/arm/AA-11.6"},next:{title:"12.1  Generic Declarations",permalink:"/docs/arm/AA-12.1"}},s={},p=[],l={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"12-generic-units"},"12 Generic Units"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,a.kt)("p",null,"A generic unit is a program unit that is either a generic subprogram or a generic package. A generic unit is a template","[, which can be parameterized, and from which corresponding (nongeneric) subprograms or packages can be obtained]",". The resulting program units are said to be instances of the original generic unit. "),(0,a.kt)("p",null,"Glossary entry: A generic unit is a template for a (nongeneric) program unit; the template can be parameterized by objects, types, subprograms, and packages. An instance of a generic unit is created by a ",(0,a.kt)("a",{parentName:"p",href:"./AA-12.3#S0315"},"generic_instantiation"),". The rules of the language are enforced when a generic unit is compiled, using a generic contract model; additional checks are performed upon instantiation to verify the contract is met. That is, the declaration of a generic unit represents a contract between the body of the generic and instances of the generic. Generic units can be used to perform the role that macros sometimes play in other languages."),(0,a.kt)("p",null,"Version=","[5]",",Kind=(AddedNormal),Group=","[C]",",Term=","[generic unit]",", Def=","[a template for a (nongeneric) program unit]",", Note1=","[The template can be parameterized by objects, types, subprograms, and packages.]",", Note2=","[Generic units can be used to perform the role that macros sometimes play in other languages.]"," Version=","[5]",",Kind=(AddedNormal),Group=","[C]",",Term=","[generic instance]",", Def=","[a nongeneric unit created by the instantiation of a generic unit]"),(0,a.kt)("p",null,"[A generic unit is declared by a ",(0,a.kt)("a",{parentName:"p",href:"./AA-12.1#S0310"},"generic_declaration"),". This form of declaration has a ",(0,a.kt)("a",{parentName:"p",href:"./AA-12.1#S0313"},"generic_formal_part")," declaring any generic formal parameters. An instance of a generic unit is obtained as the result of a ",(0,a.kt)("a",{parentName:"p",href:"./AA-12.3#S0315"},"generic_instantiation")," with appropriate generic actual parameters for the generic formal parameters. An instance of a generic subprogram is a subprogram. An instance of a generic package is a package."),(0,a.kt)("p",null,"Generic units are templates. As templates they do not have the properties that are specific to their nongeneric counterparts. For example, a generic subprogram can be instantiated but it cannot be called. In contrast, an instance of a generic subprogram is a (nongeneric) subprogram; hence, this instance can be called but it cannot be used to produce further instances.]"))}u.isMDXComponent=!0}}]);