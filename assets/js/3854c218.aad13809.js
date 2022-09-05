"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[3034],{1716:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var t=n(6687);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?t.createElement(f,o(o({ref:r},u),{},{components:n})):t.createElement(f,o({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7721:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=n(9440),a=(n(6687),n(1716));const i={sidebar_position:204},o="J.14  Character and Wide_Character Conversion Functions",c={unversionedId:"arm/AA-J.14",id:"arm/AA-J.14",title:"J.14  Character and Wide_Character Conversion Functions",description:"Static Semantics",source:"@site/docs/arm/AA-J.14.md",sourceDirName:"arm",slug:"/arm/AA-J.14",permalink:"/docs/arm/AA-J.14",draft:!1,tags:[],version:"current",sidebarPosition:204,frontMatter:{sidebar_position:204},sidebar:"tutorialSidebar",previous:{title:"J.13  Dependence Restriction Identifiers",permalink:"/docs/arm/AA-J.13"},next:{title:"J.15  Aspect-related Pragmas",permalink:"/docs/arm/AA-J.15"}},s={},l=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}],u={toc:l};function d(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"j14--character-and-wide_character-conversion-functions"},"J.14  Character and Wide_Character Conversion Functions"),(0,a.kt)("h4",{id:"static-semantics"},"Static Semantics"),(0,a.kt)("p",null,"{AI95-00395-01} The following declarations exist in the declaration of package Ada.Characters.Handling:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ada"},"   function Is_Character (Item : in Wide_Character) return Boolean\n      renames Conversions.Is_Character;\n   function Is_String    (Item : in Wide_String)    return Boolean\n      renames Conversions.Is_String;\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ada"},"   function To_Character (Item       : in Wide_Character;\n                         Substitute : in Character := ' ')\n                         return Character\n      renames Conversions.To_Character;\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ada"},"   function To_String    (Item       : in Wide_String;\n                          Substitute : in Character := ' ')\n                          return String\n      renames Conversions.To_String;\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ada"},"   function To_Wide_Character (Item : in Character) return Wide_Character\n      renames Conversions.To_Wide_Character;\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ada"},"   function To_Wide_String    (Item : in String)    return Wide_String\n      renames Conversions.To_Wide_String;\n\n")),(0,a.kt)("h4",{id:"wording-changes-from-ada-95"},"Wording Changes from Ada 95"),(0,a.kt)("p",null,"{AI95-00394-01} {AI05-0299-1} This subclause is new. These subprograms were moved to Characters.Conversions (see A.3.4)."))}d.isMDXComponent=!0}}]);