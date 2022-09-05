"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[9817],{9433:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(9440),r=a(6687),i=a(4923),l=a(3854),s=a(3159),c=a(8382),o=a(4240),m=a(1954),d=a(2975);function u(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const b={breadcrumbsContainer:"breadcrumbsContainer_qaRc",breadcrumbHomeIcon:"breadcrumbHomeIcon_fWP7"};function h(e){let{children:t,href:a,isLast:n}=e;const i="breadcrumbs__link";return n?r.createElement("span",{className:i,itemProp:"name"},t):a?r.createElement(o.Z,{className:i,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:i},t)}function v(e){let{children:t,active:a,index:l,addMicrodata:s}=e;return r.createElement("li",(0,n.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function g(){const e=(0,m.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,i.Z)("breadcrumbs__link",b.breadcrumbsItemLink),href:e},r.createElement(u,{className:b.breadcrumbHomeIcon})))}function p(){const e=(0,s.s1)(),t=(0,c.Ns)();return e?r.createElement("nav",{className:(0,i.Z)(l.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(g,null),e.map(((t,a)=>{const n=a===e.length-1;return r.createElement(v,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(h,{href:t.href,isLast:n},t.label))})))):null}},8028:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var n=a(6687),r=a(6688),i=a(3159),l=a(1954),s=a(4923),c=a(4240),o=a(5454),m=a(2975);const d="cardContainer_IQth",u="cardTitle_N8LC",b="cardDescription_uPW6";function h(e){let{href:t,children:a}=e;return n.createElement(c.Z,{href:t,className:(0,s.Z)("card padding--lg",d)},a)}function v(e){let{href:t,icon:a,title:r,description:i}=e;return n.createElement(h,{href:t},n.createElement("h2",{className:(0,s.Z)("text--truncate",u),title:r},a," ",r),i&&n.createElement("p",{className:(0,s.Z)("text--truncate",b),title:i},i))}function g(e){let{item:t}=e;const a=(0,i.Wl)(t);return a?n.createElement(v,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){var t;let{item:a}=e;const r=(0,o.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(v,{href:a.href,icon:r,title:a.label,description:null==l?void 0:l.description})}function E(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(g,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function f(e){let{items:t,className:a}=e;return n.createElement("section",{className:(0,s.Z)("row",a)},function(e){return e.filter((e=>"category"!==e.type||!!(0,i.Wl)(e)))}(t).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(E,{item:e})))))}var Z=a(9808),N=a(2562),_=a(3297),k=a(9433),L=a(8842);const T="generatedIndexPage_CzNc",y="list_RyAw",I="title_z08L";function x(e){let{categoryGeneratedIndex:t}=e;return n.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.Z)(t.image)})}function w(e){let{categoryGeneratedIndex:t}=e;const a=(0,i.jA)();return n.createElement("div",{className:T},n.createElement(N.Z,null),n.createElement(k.Z,null),n.createElement(_.Z,null),n.createElement("header",null,n.createElement(L.Z,{as:"h1",className:I},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(f,{items:a.items,className:y})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(Z.Z,{previous:t.navigation.previous,next:t.navigation.next})))}function C(e){return n.createElement(n.Fragment,null,n.createElement(x,e),n.createElement(w,e))}},9808:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(9440),r=a(6687),i=a(2975),l=a(6206);function s(e){const{previous:t,next:a}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(l.Z,(0,n.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(l.Z,(0,n.Z)({},a,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},3297:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(6687),r=a(4923),i=a(2975),l=a(3854),s=a(9785);function c(e){let{className:t}=e;const a=(0,s.E)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},2562:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(6687),r=a(4923),i=a(6577),l=a(4240),s=a(2975),c=a(5619),o=a(3854),m=a(8895),d=a(9785);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){let{versionLabel:t,to:a,onClick:r}=e;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.Z,{to:a,onClick:r},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,i.Z)(),{pluginId:s}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,m.J)(s),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,c.Jo)(s),g=null!=u?u:(p=v).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:(0,r.Z)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:v.label,to:g.path,onClick:()=>d(v.name)})))}function g(e){let{className:t}=e;const a=(0,d.E)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},8842:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(9440),r=a(6687),i=a(4923),l=a(2975),s=a(4984);const c="anchorWithStickyNavbar_Xuh_",o="anchorWithHideOnScrollNavbar_fY38";function m(e){let{as:t,id:a,...m}=e;const{navbar:{hideOnScroll:d}}=(0,s.L)();return"h1"!==t&&a?r.createElement(t,(0,n.Z)({},m,{className:(0,i.Z)("anchor",d?o:c),id:a}),m.children,r.createElement("a",{className:"hash-link",href:"#"+a,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,(0,n.Z)({},m,{id:void 0}))}},6206:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(6687),r=a(4923),i=a(4240);function l(e){const{permalink:t,title:a,subLabel:l,isNext:s}=e;return n.createElement(i.Z,{className:(0,r.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}}}]);