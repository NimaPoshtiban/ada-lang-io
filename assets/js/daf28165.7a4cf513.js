"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[556],{87999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>v,frontMatter:()=>A,metadata:()=>b,toc:()=>k});var a=n(91716),i=n(21256),o=n(24895),r=n(48424),s=n(82262),d=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&p(e,n,t[n]);if(h)for(var n of h(t))f.call(t,n)&&p(e,n,t[n]);return e};const A={sidebar_position:66},y="8 Visibility Rules",b={unversionedId:"arm/AA-8/AA-8",id:"arm/AA-8/AA-8",title:"8 Visibility Rules",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-8/AA-8.mdx",sourceDirName:"arm/AA-8",slug:"/arm/AA-8/",permalink:"/docs/arm/AA-8/",draft:!1,tags:[],version:"current",sidebarPosition:66,frontMatter:{sidebar_position:66},sidebar:"referenceManualSidebar",previous:{title:"7.6 Assignment and Finalization",permalink:"/docs/arm/AA-7/AA-7.6"},next:{title:"8.1 Declarative Region",permalink:"/docs/arm/AA-8/AA-8.1"}},g={},k=[{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4}],w={toc:k};function v(e){var t,n=e,{components:d}=n,p=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&h)for(var a of h(e))t.indexOf(a)<0&&f.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},w),p),l(t,c({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"8-visibility-rules"}),"8 Visibility Rules"),(0,a.kt)("admonition",u({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(r.Z,{mdxType:"MarginText"},"1/3"),(0,a.kt)(s.Z,{items:["AI05-0299-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"[The rules defining the scope of declarations and the rules defining which ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"s, ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.5#S0015"},"character_literal")),"s, and ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.1#S0202"},"operator_symbol")),"s are visible at (or from) various places in the text of the program are described in this clause. The formulation of these rules uses the notion of a declarative region.",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"MarginText"},"2/5"),(0,a.kt)(s.Z,{items:["AI12-0439-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"As explained in Clause ",(0,a.kt)("a",{href:"../AA-3/"},"3"),", a declaration declares a view of an entity and associates a defining name with that view. The view comprises an identification of the viewed entity, and possibly additional properties. A usage name denotes a declaration. It also denotes the view declared by that declaration, and denotes the entity of that view. Thus, two different usage names can denote two different views of the same entity; in this case they denote the same entity.] ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.a"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,a.kt)("strong",null,"To be honest: "),"In some cases, a usage name that denotes a declaration does not denote the view declared by that declaration, nor the entity of that view, but instead denotes a view of the current instance of the entity, and denotes the current instance of the entity. This sometimes happens when the usage name occurs inside the declarative region of the declaration. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",u({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(r.Z,{mdxType:"MarginText"},"2.b"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"We no longer define the term \u201cbasic operation;\u201d thus we no longer have to worry about the visibility of them. Since they were essentially always visible in Ada 83, this change has no effect. The reason for this change is that the definition in Ada 83 was confusing, and not quite correct, and we found it difficult to fix. For example, one wonders why an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.3#S0175"},"if_statement"))," was not a basic operation of type Boolean. For another example, one wonders what it meant for a basic operation to be \u201cinherent in\u201d something. Finally, this fixes the problem addressed by AI83-00027/07. ",(0,a.kt)("br",null))))}v.isMDXComponent=!0}}]);