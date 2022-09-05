"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1719],{1716:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(6687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5929:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(9440),a=(r(6687),r(1716));const o={sidebar_position:202},i="J.12  Pragma Interface",c={unversionedId:"arm/AA-J.12",id:"arm/AA-J.12",title:"J.12  Pragma Interface",description:"Syntax",source:"@site/docs/arm/AA-J.12.md",sourceDirName:"arm",slug:"/arm/AA-J.12",permalink:"/docs/arm/AA-J.12",draft:!1,tags:[],version:"current",sidebarPosition:202,frontMatter:{sidebar_position:202},sidebar:"tutorialSidebar",previous:{title:"J.11  The Class Attribute of Untagged Incomplete Types",permalink:"/docs/arm/AA-J.11"},next:{title:"J.13  Dependence Restriction Identifiers",permalink:"/docs/arm/AA-J.13"}},l={},s=[{value:"Syntax",id:"syntax",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"j12--pragma-interface"},"J.12  Pragma Interface"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"{AI95-00284-02} In addition to an identifier, the reserved word interface is allowed as a pragma name, to provide compatibility with a prior edition of this Reference Manual. "),(0,a.kt)("p",null,"Implementation Note: {AI95-00284-02} All implementations need to at least recognize and ignore this pragma. A syntax error is not an acceptable implementation of this pragma. "),(0,a.kt)("h4",{id:"wording-changes-from-ada-95"},"Wording Changes from Ada 95"),(0,a.kt)("p",null,"{AI95-00326-01} {AI05-0299-1} This subclause is new. This is necessary as interface is now a reserved word, which would prevent pragma Interface from being an implementation-defined pragma. We don't define any semantics for this pragma, as we expect that implementations will continue to use whatever they currently implement - requiring any changes would be counter-productive."))}m.isMDXComponent=!0}}]);