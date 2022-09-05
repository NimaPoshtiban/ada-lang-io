"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6750],{1716:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>h});var n=e(6687);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function c(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?c(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)e=c[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)e=c[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var l=n.createContext({}),i=function(t){var a=n.useContext(l),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=i(t.components);return n.createElement(l.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},C=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,c=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),C=i(e),h=r,d=C["".concat(l,".").concat(h)]||C[h]||u[h]||c;return e?n.createElement(d,o(o({ref:a},p),{},{components:e})):n.createElement(d,o({ref:a},p))}));function h(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var c=e.length,o=new Array(c);o[0]=C;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var i=2;i<c;i++)o[i]=e[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}C.displayName="MDXCreateElement"},8522:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var n=e(9440),r=(e(6687),e(1716));const c={sidebar_position:195},o="J.5  ASCII",s={unversionedId:"arm/AA-J.5",id:"arm/AA-J.5",title:"J.5  ASCII",description:"Static Semantics",source:"@site/docs/arm/AA-J.5.md",sourceDirName:"arm",slug:"/arm/AA-J.5",permalink:"/docs/arm/AA-J.5",draft:!1,tags:[],version:"current",sidebarPosition:195,frontMatter:{sidebar_position:195},sidebar:"tutorialSidebar",previous:{title:"J.4  The Constrained Attribute",permalink:"/docs/arm/AA-J.4"},next:{title:"J.6  Numeric_Error",permalink:"/docs/arm/AA-J.6"}},l={},i=[{value:"Static Semantics",id:"static-semantics",level:4}],p={toc:i};function u(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"j5--ascii"},"J.5  ASCII"),(0,r.kt)("h4",{id:"static-semantics"},"Static Semantics"),(0,r.kt)("p",null,"The following declaration exists in the declaration of package Standard: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"package ASCII is\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"  --  Control characters:\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"  NUL   : constant Character := nul;    SOH   : constant Character := soh;\n  STX   : constant Character := stx;    ETX   : constant Character := etx;\n  EOT   : constant Character := eot;    ENQ   : constant Character := enq;\n  ACK   : constant Character := ack;    BEL   : constant Character := bel;\n  BS    : constant Character := bs;     HT    : constant Character := ht;\n  LF    : constant Character := lf;     VT    : constant Character := vt;\n  FF    : constant Character := ff;     CR    : constant Character := cr;\n  SO    : constant Character := so;     SI    : constant Character := si;\n  DLE   : constant Character := dle;    DC1   : constant Character := dc1;\n  DC2   : constant Character := dc2;    DC3   : constant Character := dc3;\n  DC4   : constant Character := dc4;    NAK   : constant Character := nak;\n  SYN   : constant Character := syn;    ETB   : constant Character := etb;\n  CAN   : constant Character := can;    EM    : constant Character := em;\n  SUB   : constant Character := sub;    ESC   : constant Character := esc;\n  FS    : constant Character := fs;     GS    : constant Character := gs;\n  RS    : constant Character := rs;     US    : constant Character := us;\n  DEL   : constant Character := del;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"  -- Other characters:\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"  Exclam   : constant Character:= '!';  Quotation : constant Character:= '\"';\n  Sharp    : constant Character:= '#';  Dollar    : constant Character:= '$';\n  Percent  : constant Character:= '%';  Ampersand : constant Character:= '&';\n  Colon    : constant Character:= ':';  Semicolon : constant Character:= ';';\n  Query    : constant Character:= '?';  At_Sign   : constant Character:= '@';\n  L_Bracket: constant Character:= '[';  Back_Slash: constant Character:= '\\';\n  R_Bracket: constant Character:= ']';  Circumflex: constant Character:= '^';\n  Underline: constant Character:= '_';  Grave     : constant Character:= '`';\n  L_Brace  : constant Character:= '{';  Bar       : constant Character:= '|';\n  R_Brace  : constant Character:= '}';  Tilde     : constant Character:= '~';\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"  -- Lower case letters:\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"  LC_A: constant Character:= 'a';\n  ...\n  LC_Z: constant Character:= 'z';\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"end ASCII;\n\n")))}u.isMDXComponent=!0}}]);