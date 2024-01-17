"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1548],{87482:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>b,frontMatter:()=>c,metadata:()=>h,toc:()=>g});var n=a(91716),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&u(e,a,t[a]);if(s)for(var a of s(t))d.call(t,a)&&u(e,a,t[a]);return e};const c={title:"8.5 Summary"},m=void 0,h={unversionedId:"style-guide/s8/05",id:"style-guide/s8/05",title:"8.5 Summary",description:"understanding and clarity",source:"@site/docs/style-guide/s8/05.mdx",sourceDirName:"style-guide/s8",slug:"/style-guide/s8/05",permalink:"/docs/style-guide/s8/05",draft:!1,tags:[],version:"current",frontMatter:{title:"8.5 Summary"},sidebar:"styleGuideSidebar",previous:{title:"8.4 Independence",permalink:"/docs/style-guide/s8/04"},next:{title:"9. Object-Oriented Features",permalink:"/docs/style-guide/s9/"}},f={},g=[{value:"understanding and clarity",id:"understanding-and-clarity",level:3},{value:"robustness",id:"robustness",level:3},{value:"adaptability",id:"adaptability",level:3},{value:"independence",id:"independence",level:3}],y={toc:g};function b(e){var t,a=e,{components:i}=a,u=((e,t)=>{var a={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=p(p({},y),u),r(t,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h3",p({},{id:"understanding-and-clarity"}),"understanding and clarity"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Select the least restrictive names possible for reusable parts and\ntheir identifiers."),(0,n.kt)("li",{parentName:"ul"},"Select the generic name to avoid conflicting with the naming\nconventions of instantiations of the generic."),(0,n.kt)("li",{parentName:"ul"},"Use names that indicate the behavioral characteristics of the\nreusable part, as well as its abstraction ."),(0,n.kt)("li",{parentName:"ul"},"Do not use abbreviations in identifier or unit names."),(0,n.kt)("li",{parentName:"ul"},"Document the expected behavior of generic formal parameters just as\nyou document any package specification.")),(0,n.kt)("h3",p({},{id:"robustness"}),"robustness"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use named numbers and static expressions to allow multiple\ndependencies to be linked to a small number of symbols."),(0,n.kt)("li",{parentName:"ul"},"Use unconstrained array types for array formal parameters and array\nreturn values."),(0,n.kt)("li",{parentName:"ul"},"Make the size of local variables depend on actual parameter size,\nwhere appropriate."),(0,n.kt)("li",{parentName:"ul"},"Minimize the number of assumptions made by a unit."),(0,n.kt)("li",{parentName:"ul"},"For assumptions that cannot be avoided, use subtypes or constraints\nto automatically enforce conformance."),(0,n.kt)("li",{parentName:"ul"},"For assumptions that cannot be automatically enforced by subtypes,\nadd explicit checks to the code."),(0,n.kt)("li",{parentName:"ul"},"Document all assumptions."),(0,n.kt)("li",{parentName:"ul"},"If the code depends upon the implementation of a specific Special\nNeeds Annex for proper operation, document this assumption in the\ncode."),(0,n.kt)("li",{parentName:"ul"},"Use first subtypes when declaring generic formal objects of mode in\nout."),(0,n.kt)("li",{parentName:"ul"},"Beware of using subtypes as subtype marks when declaring parameters\nor return values of generic formal subprograms."),(0,n.kt)("li",{parentName:"ul"},"Use attributes rather than literal values."),(0,n.kt)("li",{parentName:"ul"},"Be careful about overloading the names of subprograms exported by\nthe same generic package."),(0,n.kt)("li",{parentName:"ul"},"Within a specification, document any tasks that would be activated\nby with'ing the specification and by using any part of the\nspecification."),(0,n.kt)("li",{parentName:"ul"},"Document which generic formal parameters are accessed from a task\nhidden inside the generic unit."),(0,n.kt)("li",{parentName:"ul"},"Document any multithreaded components."),(0,n.kt)("li",{parentName:"ul"},"Propagate exceptions out of reusable parts. Handle exceptions within\nreusable parts only when you are certain that the handling is\nappropriate in all circumstances."),(0,n.kt)("li",{parentName:"ul"},"Propagate exceptions raised by generic formal subprograms after\nperforming any cleanup necessary to the correct operation of future\ninvocations of the generic instantiation."),(0,n.kt)("li",{parentName:"ul"},"Leave state variables in a valid state when raising an exception."),(0,n.kt)("li",{parentName:"ul"},"Leave parameters unmodified when raising an exception.")),(0,n.kt)("h3",p({},{id:"adaptability"}),"adaptability"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Provide core functionality in a reusable part or set of parts so\nthat the functionality in this abstraction can be meaningfully\nextended by its reusers."),(0,n.kt)("li",{parentName:"ul"},"More specifically, provide initialization and finalization\nprocedures for every data structure that may contain dynamic data."),(0,n.kt)("li",{parentName:"ul"},"For data structures needing initialization and finalization,\nconsider deriving them, when possible, from the types\nAda.Finalization.Controlled or Ada.Finalization.Limited_Controlled."),(0,n.kt)("li",{parentName:"ul"},"Use generic units to avoid code duplication."),(0,n.kt)("li",{parentName:"ul"},"Parameterize generic units for maximum adaptability."),(0,n.kt)("li",{parentName:"ul"},"Reuse common instantiations of generic units, as well as the generic\nunits themselves."),(0,n.kt)("li",{parentName:"ul"},"Consider using a limited private type for a generic formal type when\nyou do not need assignment on objects of the type inside the generic\nbody."),(0,n.kt)("li",{parentName:"ul"},"Consider using a nonlimited private type for a generic formal type\nwhen you need normal assignment on objects of the type inside the\nbody of the generic."),(0,n.kt)("li",{parentName:"ul"},"Consider using a formal tagged type derived from\nAda.Finalization.Controlled when you need to enforce special\nassignment semantics on objects of the type in the body of the\ngeneric."),(0,n.kt)("li",{parentName:"ul"},"Export the least restrictive type that maintains the integrity of\nthe data and abstraction while allowing alternate implementations."),(0,n.kt)("li",{parentName:"ul"},"Consider using a limited private abstract type for generic formal\ntypes of a generic that extends a formal private tagged type."),(0,n.kt)("li",{parentName:"ul"},"Use generic units to encapsulate algorithms independently of data\ntype."),(0,n.kt)("li",{parentName:"ul"},"Consider using abstract data types (not to be confused with Ada's\nabstract types) in preference to abstract data objects."),(0,n.kt)("li",{parentName:"ul"},"Consider using generic units to implement abstract data types\nindependently of their component data type."),(0,n.kt)("li",{parentName:"ul"},"Provide iterators for traversing complex data structures within\nreusable parts."),(0,n.kt)("li",{parentName:"ul"},"Consider providing both active and passive iterators."),(0,n.kt)("li",{parentName:"ul"},"Protect the iterators from errors due to modification of the data\nstructure during iteration."),(0,n.kt)("li",{parentName:"ul"},"Document the behavior of the iterators when the data structure is\nmodified during traversal."),(0,n.kt)("li",{parentName:"ul"},"Localize the currency symbol, digits separator, radix mark, and fill\ncharacter in picture output."),(0,n.kt)("li",{parentName:"ul"},"Consider using the ","#"," character in picture layouts so that the\nedited numeric output lengths are invariant across currency symbols\nof different lengths."),(0,n.kt)("li",{parentName:"ul"},'Consider using abstract tagged types and generics to define reusable\nunits of functionality that can be "mixed into" core abstractions\n(also known as mixins).'),(0,n.kt)("li",{parentName:"ul"},"Consider structuring subsystems so that operations that are only\nused in a particular context are in different child packages than\noperations used in a different context."),(0,n.kt)("li",{parentName:"ul"},"Consider declaring context-independent functionality in the parent\npackage and context-dependent functionality in child packages.")),(0,n.kt)("h3",p({},{id:"independence"}),"independence"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Minimize with clauses on reusable parts, especially on their\nspecifications."),(0,n.kt)("li",{parentName:"ul"},"Consider using generic parameters instead of with statements to\nreduce the number of context clauses on a reusable part."),(0,n.kt)("li",{parentName:"ul"},"Consider using generic formal package parameters to import directly\nall the types and operations defined in an instance of a preexisting\ngeneric."),(0,n.kt)("li",{parentName:"ul"},"In the specification of a generic library unit, use pragma\nElaborate_Body."),(0,n.kt)("li",{parentName:"ul"},"Create families of generic or other parts with similar\nspecifications."),(0,n.kt)("li",{parentName:"ul"},"Structure reusable code to take advantage of dead code removal by\nthe compiler."),(0,n.kt)("li",{parentName:"ul"},"Write table-driven reusable parts wherever possible and appropriate."),(0,n.kt)("li",{parentName:"ul"},"Use the predefined packages for string handling."),(0,n.kt)("li",{parentName:"ul"},"Consider using hierarchies of tagged types to promote generalization\nof software for reuse."),(0,n.kt)("li",{parentName:"ul"},"Consider using a tagged type hierarchy to decouple a generalized\nalgorithm from the details of dependency on specific types.")),(0,n.kt)("admonition",p({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},'This page of the "Ada Quality and Style Guide" has been adapted from the\noriginal work at ',(0,n.kt)("a",p({parentName:"p"},{href:"https://en.wikibooks.org/wiki/Ada_Style_Guide"}),"https://en.wikibooks.org/wiki/Ada_Style_Guide"),", which is\nlicensed under the\n",(0,n.kt)("a",p({parentName:"p"},{href:"https://creativecommons.org/licenses/by-sa/3.0/"}),"Creative Commons Attribution-ShareAlike License"),";\nadditional terms may apply. Page not endorsed by Wikibooks or the Ada\nStyle Guide Wikibook authors. This page is licensed under the same license\nas the original work.")))}b.isMDXComponent=!0}}]);