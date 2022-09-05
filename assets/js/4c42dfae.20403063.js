"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[7301],{1716:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=c(n),u=r,h=f["".concat(l,".").concat(u)]||f[u]||p[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(9440),r=(n(6687),n(1716));const i={sidebar_position:64},o="8 Visibility Rules",s={unversionedId:"arm/AA-8",id:"arm/AA-8",title:"8 Visibility Rules",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-8.md",sourceDirName:"arm",slug:"/arm/AA-8",permalink:"/docs/arm/AA-8",draft:!1,tags:[],version:"current",sidebarPosition:64,frontMatter:{sidebar_position:64},sidebar:"tutorialSidebar",previous:{title:"7.6  Assignment and Finalization",permalink:"/docs/arm/AA-7.6"},next:{title:"8.1  Declarative Region",permalink:"/docs/arm/AA-8.1"}},l={},c=[{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"8-visibility-rules"},"8 Visibility Rules"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,r.kt)("p",null,"{AI05-0299-1} [The rules defining the scope of declarations and the rules defining which ",(0,r.kt)("a",{parentName:"p",href:"./AA-2.3#S0002"},"identifier"),"s, ",(0,r.kt)("a",{parentName:"p",href:"./AA-2.5#S0015"},"character_literal"),"s, and ",(0,r.kt)("a",{parentName:"p",href:"./AA-6.1#S0202"},"operator_symbol"),"s are visible at (or from) various places in the text of the program are described in this clause. The formulation of these rules uses the notion of a declarative region."),(0,r.kt)("p",null,"{AI05-0299-1} {AI12-0439-1} As explained in Clause 3, a declaration declares a view of an entity and associates a defining name with that view. The view comprises an identification of the viewed entity, and possibly additional properties. A usage name denotes a declaration. It also denotes the view declared by that declaration, and denotes the entity of that view. Thus, two different usage names can denote two different views of the same entity; in this case they denote the same entity.] "),(0,r.kt)("p",null,"To be honest: In some cases, a usage name that denotes a declaration does not denote the view declared by that declaration, nor the entity of that view, but instead denotes a view of the current instance of the entity, and denotes the current instance of the entity. This sometimes happens when the usage name occurs inside the declarative region of the declaration. "),(0,r.kt)("h4",{id:"wording-changes-from-ada-83"},"Wording Changes from Ada 83"),(0,r.kt)("p",null,'We no longer define the term "basic operation;" thus we no longer have to worry about the visibility of them. Since they were essentially always visible in Ada 83, this change has no effect. The reason for this change is that the definition in Ada 83 was confusing, and not quite correct, and we found it difficult to fix. For example, one wonders why an ',(0,r.kt)("a",{parentName:"p",href:"./AA-5.3#S0175"},"if_statement"),' was not a basic operation of type Boolean. For another example, one wonders what it meant for a basic operation to be "inherent in" something. Finally, this fixes the problem addressed by AI83-00027/07.'))}p.isMDXComponent=!0}}]);