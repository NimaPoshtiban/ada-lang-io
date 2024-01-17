"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[5892],{41614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>b,frontMatter:()=>p,metadata:()=>f,toc:()=>y});var a=n(91716),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(r)for(var n of r(t))d.call(t,n)&&u(e,n,t[n]);return e};const p={title:"7. Portability",sidebar_position:7},h=void 0,f={unversionedId:"style-guide/s7/s7",id:"style-guide/s7/s7",title:"7. Portability",description:"Discussions concerning portability usually concentrate on the",source:"@site/docs/style-guide/s7/s7.mdx",sourceDirName:"style-guide/s7",slug:"/style-guide/s7/",permalink:"/docs/style-guide/s7/",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"7. Portability",sidebar_position:7},sidebar:"styleGuideSidebar",previous:{title:"6.4 Summary",permalink:"/docs/style-guide/s6/04"},next:{title:"7.1 Fundamentals",permalink:"/docs/style-guide/s7/01"}},m={},y=[],g={toc:y};function b(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&r)for(var a of r(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},g),u),o(t,s({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Discussions concerning portability usually concentrate on the\ndifferences in computer systems, but the development and run-time\nenvironment may also change:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"portability (software)",(0,a.kt)("br",{parentName:"li"}),"The ease with which software can be transferred from one computer\nsystem or environment to another (IEEE Dictionary 1984).")),(0,a.kt)("p",null,"Most portability problems are not pure language issues. Portability\ninvolves hardware (byte order, device I/O) and software (utility\nlibraries, operating systems, run-time libraries). This chapter will not\naddress these challenging design issues."),(0,a.kt)("p",null,"This chapter does identify the more common portability problems that are\nspecific to Ada when moving from one platform or compiler to another. It\nalso suggests ways that nonportable code can be isolated. By using the\nimplementation hiding features of Ada, the cost of porting can be\nsignificantly reduced."),(0,a.kt)("p",null,"In fact, many language portability issues are solved by the strict\ndefinition of the Ada language itself. In most programming languages,\ndifferent dialects are prevalent as vendors extend or dilute a language\nfor various reasons: conformance to a programming environment or\nfeatures for a particular application domain. The Ada Compiler\nValidation Capability (ACVC) was developed by the U.S. Department of\nDefense at the Ada Validation Facility, ASD/SIDL, Wright-Patterson Air\nForce Base, to ensure that implementors strictly adhered to the Ada\nstandard."),(0,a.kt)("p",null,"As part of the strict definition of Ada, certain constructs are defined\nto be erroneous, and the effect of executing an erroneous construct is\nunpredictable. Therefore, erroneous constructs are obviously not\nportable. Erroneous constructs and bounded errors are discussed in\nGuideline 5.9.10 and are not repeated in this chapter."),(0,a.kt)("p",null,"Most programmers new to the language expect Ada to eliminate all\nportability problems; it definitely does not. Certain areas of Ada are\nnot yet covered by validation. The definition of Ada leaves certain\ndetails to the implementor. The compiler implementor's choices, with\nrespect to these details, affect portability."),(0,a.kt)("p",null,"The revisions to the Ada language approved in the 1995 standard generate\na new area of portability concerns. Some programs are intended to have a\nlong life and may start in Ada 83 (Ada Reference Manual 1983) but\ntransition to Ada 95 (Ada Reference Manual 1995). Although this style\nguide focuses on the current Ada standard and does not address\ntransition issues, there are portability issues relating to using\ncertain features of the language. These issues revolve around the\nlanguage features designated as obsolescent in Annex J of the Ada\nReference Manual (1995)."),(0,a.kt)("p",null,"The constructs of the language have been developed to satisfy a series\nof needs. These constructs can legitimately be used even though they may\nimpact portability. There are some general principles to enhancing\nportability that are exemplified by many of the guidelines in this\nchapter. They are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Recognize those Ada constructs that may adversely affect portability\non the relevant implementations or platforms."),(0,a.kt)("li",{parentName:"ul"},"Rely on those Ada constructs that depend on characteristics shared\nby all relevant implementations. Avoid the use of those constructs\nwhose implementation characteristics vary on the relevant platforms."),(0,a.kt)("li",{parentName:"ul"},"Localize and encapsulate nonportable features of a program if their\nuse is essential."),(0,a.kt)("li",{parentName:"ul"},"Highlight the use of constructs that may cause portability problems.")),(0,a.kt)("p",null,"These guidelines cannot be applied thoughtlessly. Many of them involve a\ndetailed understanding of the Ada model and its implementation. In many\ncases, you will have to make carefully considered tradeoffs between\nefficiency and portability. Reading this chapter should improve your\ninsight into the tradeoffs involved. The material in this chapter was\nlargely acquired from three sources: the Ada Run-Time Environments\nWorking Group (ARTEWG) Catalogue of Ada Runtime Implementation\nDependencies (ARTEWG 1986); the Nissen and Wallis book on Portability\nand Style in Ada (Nissen and Wallis 1984); and a paper written for the\nU.S. Air Force by SofTech on Ada Portability Guidelines (Pappas 1985).\nThe last of these sources (Pappas 1985) encompasses the other two and\nprovides an in-depth explanation of the issues, numerous examples, and\ntechniques for minimizing portability problems. Conti (1987) is a\nvaluable reference for understanding the latitude allowed for\nimplementors of Ada and the criteria often used to make decisions."),(0,a.kt)("p",null,"This chapter's purpose is to provide a summary of portability issues in\nthe guideline format of this book. The chapter does not include all\nissues identified in the references but only the most significant. For\nan in-depth presentation, see Pappas (1985). A few additional guidelines\nare presented here and others are elaborated upon where applicable. For\nfurther reading on Ada I/O portability issues, see Matthews (1987),\nGriest (1989), and CECOM (1989)."),(0,a.kt)("p",null,"Some of the guidelines in this chapter cross reference and place\nstricter constraints on other guidelines in this book. These constraints\napply when portability is being emphasized."),(0,a.kt)("p",null,'Guidelines in this chapter are frequently worded "consider . . ."\nbecause hard and fast rules cannot apply in all situations. The specific\nchoice you make in a given situation involves design tradeoffs. The\nrationale for these guidelines is intended to give you insight into some\nof these tradeoffs.'))}b.isMDXComponent=!0}}]);