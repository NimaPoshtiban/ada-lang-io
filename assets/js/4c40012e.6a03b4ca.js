"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8810],{90008:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(58168),n=(t(96540),t(15680));const r={title:"Ada Quality and Style Guide",description:"Guidelines for Professional Programmers"},o=void 0,s={unversionedId:"style-guide/Ada_Style_Guide",id:"style-guide/Ada_Style_Guide",title:"Ada Quality and Style Guide",description:"Guidelines for Professional Programmers",source:"@site/docs/style-guide/Ada_Style_Guide.mdx",sourceDirName:"style-guide",slug:"/style-guide/Ada_Style_Guide",permalink:"/docs/style-guide/Ada_Style_Guide",draft:!1,tags:[],version:"current",frontMatter:{title:"Ada Quality and Style Guide",description:"Guidelines for Professional Programmers"},sidebar:"styleGuideSidebar",previous:{title:"Bibliography",permalink:"/docs/style-guide/Bibliography"}},d={},l=[{value:"Preface",id:"preface",level:2},{value:"Background",id:"background",level:3}],g={toc:l},p="wrapper";function u(e){let{components:a,...t}=e;return(0,n.yg)(p,(0,i.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Guidelines for Professional Programmers")))),(0,n.yg)("h2",{id:"preface"},"Preface"),(0,n.yg)("p",null,"This ",(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Programming_style"},"style guide")," is\nan update to the ",(0,n.yg)("em",{parentName:"p"},(0,n.yg)("a",{parentName:"em",href:"http://www.adaic.org/docs/95style/html/cover.html"},"Ada 95 Quality and Style\nGuide"))," to reflect\nthe latest update to the ",(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Ada_(programming_language)"},"Ada\nlanguage"),",\ncommonly called\n",(0,n.yg)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/Ada_Programming/Ada_2012"},"Ada 2012"),". The\npurpose of this guide is to help computer professionals produce better\nAda programs by identifying a set of stylistic guidelines that will\ndirectly impact the quality of their Ada programs. This style guide is\nnot intended to replace the ",(0,n.yg)("em",{parentName:"p"},(0,n.yg)("a",{parentName:"em",href:"http://www.ada-auth.org/standards/ada12.html"},"Ada Reference\nManual")),", or the\n",(0,n.yg)("em",{parentName:"p"},(0,n.yg)("a",{parentName:"em",href:"http://www.ada-auth.org/standards/rationale12.html"},"Rationale")),", or to\nserve as a tutorial for the ",(0,n.yg)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/Ada_Programming"},"Ada programming\nlanguage"),"."),(0,n.yg)("p",null,"The style guide is divided into chapters that map to the major decisions\nthat each programmer addresses when creating high-quality, reliable,\nreusable, and portable Ada software. Some overlap exists in the chapters\nbecause not all programming decisions can be made independently.\nIndividual chapters address source code presentation, readability,\nprogram structure, programming practice, concurrency, portability,\nreusability, performance, and a new chapter on object-oriented features."),(0,n.yg)("p",null,"Each chapter is divided into guidelines, using a format that supports\nwide usage because its content is both prescriptive and tailorable. Each\nguideline consists of a concise statement of the principles that should\nbe followed and a rationale explaining why the guideline is important.\nThe guidelines also provide usage examples, in addition to possible\nexceptions to applying the guidelines. Many of the guidelines are\nspecific enough to be adopted as corporate or project programming\nstandards. Others require a managerial decision on a particular\ninstantiation before they can be used as standards. In such cases, a\nsample instantiation is presented and used throughout the examples."),(0,n.yg)("h3",{id:"background"},"Background"),(0,n.yg)("p",null,"The Ada Joint Program Office (AJPO) funded the Ada 95 style guide, which\nwas created by merging a set of guidelines for using\n",(0,n.yg)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/Ada_Programming/Ada_95"},"Ada 95")," with\nmodifications to the original ",(0,n.yg)("em",{parentName:"p"},(0,n.yg)("a",{parentName:"em",href:"http://archive.adaic.com/docs/style-guide/83style/html/"},"Ada Quality and Style: Guidelines for\nProfessional\nProgrammers")),",\nversion 02.01.01 (AQ\\&S 83) (Software Productivity Consortium 1992),\ndeveloped to support\n",(0,n.yg)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/Ada_Programming/Ada_83"},"Ada 83"),". The Ada\n95 guidelines are based on the wealth of data available from the Ada 9X\nProject, the AJPO library, and the Ada community at large. The Software\nProductivity Consortium's (Consortium's) technical staff authored the\nupdate and the ",(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Advanced_Research_Projects_Agency"},"Advanced Research Projects\nAgency"),"\n(ARPA) participated in the update effort."),(0,n.yg)("p",null,'The preexisting AQ\\&S 83 presented a set of guidelines to help the\nprogrammer make disciplined use of Ada\'s features. In 1992, the\nConsortium completed the version 2.1 update to the style guide under\ncontract to the AJPO. The AJPO referred to that style guide as "the\nsuggested style guide for all DoD programs."'),(0,n.yg)("p",null,"As yet, there is no formal update of the style guide for the Ada 2005 or\nthe Ada 2012 language revision. During an extended discussion at the\n",(0,n.yg)("a",{parentName:"p",href:"http://www.sigada.org/conf/sigada2008/"},"SIGAda 2008")," conference of the\nstyle guide via-a-vis the Ada 2005 update and its continuing relevance,\nseveral attendees volunteered to bring the guide to\n",(0,n.yg)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/Main_Page"},"wikibooks")," to encourage\ncollaborative updating of the guide by putting the update in the hands\nof practitioners of the language. This is in part made possible under\nthe terms of the DoD Ada Joint Program Office's royalty-free, worldwide,\nnon-exclusive, irrevocable license for unlimited use of the material in\nthe Ada 83 and 95 style guides."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},'This page of the "Ada Quality and Style Guide" has been adapted from the\noriginal work at ',(0,n.yg)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/Ada_Style_Guide"},"https://en.wikibooks.org/wiki/Ada_Style_Guide"),", which is\nlicensed under the\n",(0,n.yg)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-sa/3.0/"},"Creative Commons Attribution-ShareAlike License"),";\nadditional terms may apply. Page not endorsed by Wikibooks or the Ada\nStyle Guide Wikibook authors. This page is licensed under the same license\nas the original work.")))}u.isMDXComponent=!0}}]);