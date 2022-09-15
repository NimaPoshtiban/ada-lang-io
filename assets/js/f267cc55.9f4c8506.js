"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[9148],{2064:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>p,default:()=>b,frontMatter:()=>h,metadata:()=>f,toc:()=>m});var a=t(1716),i=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&c(e,t,n[t]);if(s)for(var t of s(n))l.call(n,t)&&c(e,t,n[t]);return e};const h={title:"Introduction",sidebar_position:1},p=void 0,f={unversionedId:"style-guide/Introduction",id:"style-guide/Introduction",title:"Introduction",description:"Style is an often overlooked but very critical attribute of writing. The",source:"@site/docs/style-guide/Introduction.mdx",sourceDirName:"style-guide",slug:"/style-guide/Introduction",permalink:"/docs/style-guide/Introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"styleGuideSidebar",next:{title:"Source Code Presentation",permalink:"/docs/style-guide/Source_Code_Presentation"}},g={},m=[{value:"Organization of this Book",id:"organization-of-this-book",level:2},{value:"Source Code Presentation and Readability",id:"source-code-presentation-and-readability",level:3},{value:"Program Structure",id:"program-structure",level:3},{value:"Programming Practices",id:"programming-practices",level:3},{value:"Concurrency",id:"concurrency",level:3},{value:"Portability and Reusability",id:"portability-and-reusability",level:3},{value:"Object-Oriented Features",id:"object-oriented-features",level:3},{value:"Performance",id:"performance",level:3},{value:"How To Use This Book",id:"how-to-use-this-book",level:2},{value:"To The New Ada Programmer",id:"to-the-new-ada-programmer",level:3},{value:"To The Experienced Ada Programmer",id:"to-the-experienced-ada-programmer",level:3},{value:"To Experienced Object-Oriented Programmers",id:"to-experienced-object-oriented-programmers",level:3},{value:"To The Software Project Manager",id:"to-the-software-project-manager",level:3},{value:"To Contracting Agencies And Standards Organizations",id:"to-contracting-agencies-and-standards-organizations",level:3},{value:"To Ada 83 To Ada 95 Transition Planners",id:"to-ada-83-to-ada-95-transition-planners",level:3},{value:"Typographic Conventions",id:"typographic-conventions",level:2}],y={toc:m};function b(e){var n,t=e,{components:i}=t,c=((e,n)=>{var t={};for(var a in e)d.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&s)for(var a of s(e))n.indexOf(a)<0&&l.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=u(u({},y),c),o(n,r({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Style is an often overlooked but very critical attribute of writing. The\nstyle of writing directly impacts the readability and understandability\nof the end product. The style of programming, as the writing of source\ncode in a computer language, also suffers from this neglect. Programs\nneed to be readable and understandable by humans, not just comparable by\nmachines. This requirement is important in the creation of quality\nproducts that not only meet user needs but also can be developed on\nschedule and within estimated cost. This book is intended to help the\ncomputer professional produce better Ada programs. It presents a set of\nspecific stylistic guidelines for using the powerful features of Ada 95\n(Ada Reference Manual 1995) in a disciplined manner."),(0,a.kt)("p",null,"Each guideline consists of a concise statement of the principles that\nshould be followed and a rationale for following the guideline. In most\ncases, an example of the use of the guideline is provided, and, in some\ncases, a further example is included to show the consequences of\nviolating the guideline. Possible exceptions to the application of the\nguideline are explicitly noted, and further explanatory notes are\nprovided, where appropriate. In some cases, an instantiation is provided\nto show more specific guidance that could be enforced as a standard. In\nselected cases, automation notes discuss how one could automate\nenforcement of the guideline."),(0,a.kt)("p",null,"Ada was designed to support the development of high-quality, reliable,\nreusable, and portable software. For a number of reasons, no programming\nlanguage can ensure the achievement of these desirable objectives on its\nown. For example, programming must be embedded in a disciplined\ndevelopment process that addresses requirements analysis, design,\nimplementation, verification, validation, and maintenance in an\norganized way. The use of the language must conform to good programming\npractices based on well-established software engineering principles.\nThis book is intended to help bridge the gap between these principles\nand the actual practice of programming in Ada."),(0,a.kt)("p",null,"Many of the guidelines in this book are designed to promote clear source\ntext. The goal of these guidelines is to improve the ease of program\nevolution, adaptation, and maintenance. Understandable source text is\nmore likely to be correct and reliable. Easy adaptation requires a\nthorough understanding of the software; this is considerably facilitated\nby clarity. Effective code adaptation is a prerequisite to code reuse, a\ntechnique that has the potential for drastic reductions in system\ndevelopment cost. Finally, because maintenance (really evolution) is a\ncostly process that continues throughout the life of a system, clarity\nplays a major role in keeping maintenance costs down. Over the entire\nlife cycle, code has to be read and understood far more often than it is\nwritten; thus, the investment in writing readable, understandable code\nis worthwhile."),(0,a.kt)("p",null,"The remaining sections of this introduction discuss the organization of\nthis book and how the material presented can be used by people in\ndifferent roles, including new Ada programmers, experienced Ada\nprogrammers, object-oriented programmers, software project managers,\ncontracting agencies, standards setting organizations, and planners of\nthe transition to Ada 95 from existing Ada 83 (Ada Reference Manual 1983) programs."),(0,a.kt)("h2",u({},{id:"organization-of-this-book"}),"Organization of this Book"),(0,a.kt)("p",null,"The format of this book follows the well-received guideline format of\nthe Ada Quality and Style: Guidelines for Professional Programmer's,\nversion 02.01.01 (AQ\\&S 83) (Software Productivity Consortium 1992). The\nstyle guide is divided into sections that map to the major decisions\nthat each programmer must make when creating high-quality, reliable,\nreusable, and portable Ada software. Some overlap exists in the sections\nbecause not all programming decisions can be made independently."),(0,a.kt)("p",null,"Individual chapters address source code presentation, readability,\nprogram structure, programming practices, concurrency, portability,\nreusability, and performance, and a new chapter addresses\nobject-oriented features. Each chapter ends with a summary of the\nguidelines it contains. The last chapter shows a complete implementation\nof the Dining Philosophers example, provided by Dr. Michael B. Feldman\nand Mr. Bjorn Kallberg. Many of the guidelines in this book were used to\ncreate this example. An appendix provides a cross-reference matrix\nbetween the Ada Reference Manual (1995) sections and the guidelines in\nthis style guide."),(0,a.kt)("p",null,"This book is written using the general software engineering vocabulary\ndeveloped over the last 20 years. Software engineering is a rapidly\nevolving discipline with relatively new concepts and terminology.\nHowever, to establish a common frame of reference, needed definitions\nare extracted from the Ada Reference Manual (1995) and Rationale (1995)."),(0,a.kt)("p",null,"Throughout the book, references are made to other sources of information\nabout Ada style and other Ada issues. The references are listed at the\nend of the book. A bibliography is also provided."),(0,a.kt)("p",null,'In this book, the term "Ada" refers to the latest Ada standard, released\nin February 1995 (sometimes also known as Ada 95). References to the\nearlier Ada standard are clearly denoted as "Ada 83."'),(0,a.kt)("h3",u({},{id:"source-code-presentation-and-readability"}),"Source Code Presentation and Readability"),(0,a.kt)("p",null,"Chapters 2 and 3 directly address the issues of creating clear,\nreadable, and understandable source text. Chapter 2 focuses on code\nformatting, and Chapter 3 addresses issues of use of comments, naming\nconventions, and types."),(0,a.kt)("p",null,"There are two main aspects of code clarity: (1) careful and consistent\nlayout of the source text on the page or the screen, covered by Chapter\n2, that can enhance readability dramatically; (2) careful attention to\nthe structure of code, covered by Chapter 3, that can make the code\neasier to understand. This is true both on the small scale (e.g., by\ncareful choice of identifier names or by disciplined use of loops) and\non the large scale (e.g., by proper use of packages). These guidelines\ntreat both layout and structure."),(0,a.kt)("p",null,"Code formatting and naming convention preferences tend to be very\npersonal. You must balance your personal likes and dislikes with those\nof other engineers on the project so that you can agree to a consistent\nset of conventions that the whole project team will follow. Automatic\ncode formatters can help in enforcing this kind of consistency."),(0,a.kt)("h3",u({},{id:"program-structure"}),"Program Structure"),(0,a.kt)("p",null,"Chapter 4 addresses overall program structure. Proper structure improves\nprogram clarity. This is analogous to readability on lower levels and\nincludes issues of high-level structure, in particular the use of\npackages and child packages, visibility, and exceptions. The majority of\nthe guidelines in this chapter are concerned with the application of\nsound software engineering principles, such as information hiding,\nabstraction, encapsulation, and separation of concerns."),(0,a.kt)("h3",u({},{id:"programming-practices"}),"Programming Practices"),(0,a.kt)("p",null,"Chapter 5 presents guidelines that define consistent and logical\nlanguage feature usage. These guidelines address optional parts of the\nsyntax, types, data structures, expressions, statements, visibility,\nexceptions, and erroneous execution."),(0,a.kt)("h3",u({},{id:"concurrency"}),"Concurrency"),(0,a.kt)("p",null,"Chapter 6 defines the correct use of concurrency to develop predictable,\nreliable, reusable, and portable software. The topics include tasking,\nprotected units, communication, and termination. One major area of\nenhancement of the Ada language has been better support for shared data.\nThe task mechanism had been the only available approach to protecting\nshared data. The guidelines in this chapter support the use of protected\ntypes to encapsulate and synchronize access to shared data."),(0,a.kt)("h3",u({},{id:"portability-and-reusability"}),"Portability and Reusability"),(0,a.kt)("p",null,"Chapters 7 and 8 address issues of designing for change from slightly\ndifferent perspectives. Chapter 7 addresses the fundamentals of\nportability, the ease of changing software from one computer system or\nenvironment to another, and the impact of specific feature usage on\nportability. Chapter 8 addresses code reusability, the extent to which\ncode can be used in different applications with minimal change."),(0,a.kt)("p",null,"The portability guidelines discussed in Chapter 7 need careful\nattention. Adherence to them is important even if the need to port the\nresulting software is not currently foreseen. Following the guidelines\nimproves the potential reusability of the resulting code in projects\nthat use different Ada implementations. You should insist that when\nparticular project needs force the relaxation of some of the portability\nguidelines, nonportable features of the source text are prominently\nindicated."),(0,a.kt)("p",null,"The reusability guidelines given in Chapter 8 are based on the\nprinciples of encapsulation and design for change. These guidelines\nstress that understanding and clarity, robustness, adaptability, and\nindependence are useful and desirable, even when reuse is not expected,\nbecause the resulting code is more resistant to both planned and\nunplanned change."),(0,a.kt)("h3",u({},{id:"object-oriented-features"}),"Object-Oriented Features"),(0,a.kt)("p",null,"Chapter 9 defines a set of guidelines in common objected-oriented terms\nthat exploit some of the features of Ada 95 that are not in Ada 83. The\nguidelines discuss the use of the new Ada features of type extension\n(tagged types), abstract tagged types, and abstract subprograms to\nimplement single inheritance, multiple inheritance, and polymorphism."),(0,a.kt)("h3",u({},{id:"performance"}),"Performance"),(0,a.kt)("p",null,'Chapter 10 defines a set of guidelines intended to enhance performance.\nIt is recognized that some approaches to performance are at odds with\nmaintainability and portability. Most of the guidelines in this chapter\nread ". . . when measured performance indicates." "Indicates" means that\nyou have determined that the benefit in increased performance to your\napplication in your environment outweighs the negative side effects on\nunderstandability, maintainability, and portability of the resulting\ncode.'),(0,a.kt)("h2",u({},{id:"how-to-use-this-book"}),"How To Use This Book"),(0,a.kt)("p",null,"This book is intended for those involved in the actual development of\nsoftware systems written in Ada. The following sections discuss how to\nmake the most effective use of the material presented. Readers with\ndifferent levels of Ada experience or different roles in a software\nproject will need to use the book in different ways."),(0,a.kt)("p",null,"There are a number of ways in which this book can be used: as a guide to\ngood Ada style; as a comprehensive list of guidelines that will\ncontribute to better Ada programs; or as a reference work to consult for\nusage examples of and design-tradeoff discussion on specific features of\nthe language. The book contains many guidelines, some of which are quite\ncomplex. Learning them all at the same time should not be necessary; it\nis unlikely that you will be using all the features of the language at\nonce. However, it is recommended that all programmers (and, where\npossible, other Ada project staff) make an effort to read and understand\nChapters 2, 3, 4, and Chapter 5 up to Section 5.7. Some of the material\nis quite difficult (e.g., Section 4.2, which discusses visibility), but\nit covers issues that are fundamental to the effective use of Ada and is\nimportant for any software professional involved in building Ada\nsystems."),(0,a.kt)("p",null,"This book is not intended as an introductory text on Ada or as a\ncomplete manual of the Ada language. It is assumed that you already know\nthe syntax of Ada and have a rudimentary understanding of the semantics.\nWith such a background, you should find the guidelines useful,\ninformative, and often enlightening."),(0,a.kt)("p",null,"If you are learning Ada, you should equip yourself with a comprehensive\nintroduction to the language. Two good introductory texts on Ada 83 are\nBarnes (1989) and Cohen (1986). Both authors have published new books\nthat cover Ada 95 (Barnes 1996, Cohen 1996). Once you become familiar\nwith these texts, you are encouraged to use them in conjunction with\nRationale (1995). The Ada Reference Manual (1995) should be regarded as\na companion to these books. The majority of guidelines reference the\nsections of the Ada Reference Manual (1995) that define the language\nfeatures being discussed. Appendix A cross references sections of the\nAda Language Reference Manual to the guidelines."),(0,a.kt)("h3",u({},{id:"to-the-new-ada-programmer"}),"To The New Ada Programmer"),(0,a.kt)("p",null,"At first sight, Ada offers a bewildering variety of features. It is a\npowerful tool intended to solve difficult problems, and almost every\nfeature has a legitimate application in some context. This makes it\nespecially important to use Ada's features in a disciplined and\norganized way. Following the guidelines can make learning Ada easier and\nhelp you to master its apparent complexity. From the beginning, you can\nwrite programs that exploit the best features of the language in the way\nthat the designers intended."),(0,a.kt)("p",null,'Programmers experienced in using other programming languages are often\ntempted to use Ada as if it were their familiar language but with\nirritating syntactic differences. This pitfall should be avoided at all\ncosts; it can lead to convoluted code that subverts exactly those\naspects of Ada that make it so suitable for building high-quality\nsystems. You must learn to "think Ada." Following the guidelines in this\nbook and reading the examples of their use will help you to do this as\nquickly and painlessly as possible.'),(0,a.kt)("p",null,"To some degree, novice programmers learning Ada have an advantage.\nFollowing the guidelines from the beginning helps in developing a clear\nprogramming style that effectively exploits the language. If you are in\nthis category, it is recommended that you adopt the guidelines for those\nexercises you perform as part of learning Ada. Initially, developing\nsound programming habits by concentrating on the guidelines themselves\nand their supporting examples is more important than understanding the\nrationale for each guideline."),(0,a.kt)("p",null,"The rationale for many of the guidelines helps experienced programmers\nunderstand and accept the suggestions presented in the guideline. Some\nof the guidelines themselves are also written for the experienced\nprogrammer who must make engineering tradeoffs. This is especially true\nin the areas of portability, reusability, and performance. These more\ndifficult guidelines and rationale will make you aware of the issues\naffecting each programming decision. You can then use that awareness to\nrecognize the engineering tradeoffs that you will eventually be asked to\nmake when you are the experienced Ada programmer."),(0,a.kt)("h3",u({},{id:"to-the-experienced-ada-programmer"}),"To The Experienced Ada Programmer"),(0,a.kt)("p",null,"As an experienced Ada programmer, you are already writing code that\nconforms to many of the guidelines in this book. In some areas, however,\nyou may have adopted a personal programming style that differs from that\npresented here, and you might be reluctant to change. Carefully review\nthose guidelines that are inconsistent with your current style, make\nsure that you understand their rationale, and consider adopting them.\nThe overall set of guidelines in this book embodies a consistent\napproach to producing high-quality programs that would be weakened by\ntoo many exceptions."),(0,a.kt)("p",null,"Consistency is another important reason for general adoption of common\nguidelines. If all the staff of a project write source text in the same\nstyle, many critical project activities are easier. Consistent code\nsimplifies formal and informal code reviews, system integration, code\nreuse within a project, and the provision and application of supporting\ntools. In practice, corporate or project standards may require\ndeviations from the guidelines to be explicitly commented, so adopting a\nnonstandard approach may require extra work."),(0,a.kt)("p",null,"Some of the guidelines in this book, particularly in the chapters on\nconcurrency, portability, reusability, object-oriented features, and\nperformance, focus on design tradeoffs. These guidelines ask you to\nconsider whether using an Ada feature is an appropriate design decision\nfor your application. There are often several ways to implement a\nparticular design decision, and these guidelines discuss the tradeoffs\nyou should consider in making your decision."),(0,a.kt)("h3",u({},{id:"to-experienced-object-oriented-programmers"}),"To Experienced Object-Oriented Programmers"),(0,a.kt)("p",null,"As an experienced object-oriented programmer, you will appreciate the\neffort that has gone into elegantly extending the Ada language to\ninclude powerful object-oriented features. These new features are\nintegrated tightly with the existing language features and vocabulary.\nThis book is intentionally written to provide a view from the\nperspective of style; therefore, Ada object-oriented features are used\nthroughout the book. Disciplined use of these features will promote\nprograms that are easier to read and modify. These features also give\nyou flexibility in building reusable components. Chapter 9 addresses\nobject-oriented programming and the issues of inheritance and\npolymorphism. Earlier chapters cross reference the Chapter 9 guidelines."),(0,a.kt)("p",null,"You will find it easier to take advantage of many of the concepts in\nChapter 9 if you have done an object-oriented design. The results of an\nobject-oriented design would include a set of meaningful abstractions\nand hierarchy of classes. The abstractions need to include the\ndefinition of the design objects, including structure and state, the\noperations on the objects, and the intended encapsulation for each\nobject. The details on designing these abstractions and the hierarchy of\nclasses are beyond the scope of this book. A number of good sources\nexist for this detail, including Rumbaugh et al. (1991), Jacobson et al.\n(1992), the ADARTS Guidebook (Software Productivity Consortium 1993),\nand Booch (1994)."),(0,a.kt)("h3",u({},{id:"to-the-software-project-manager"}),"To The Software Project Manager"),(0,a.kt)("p",null,"Technical management plays a key role in ensuring that the software\nproduced in the course of a project is correct, reliable, maintainable,\nand portable. Management must create a project-wide commitment to the\nproduction of high-quality code; define project-specific coding\nstandards and guidelines; foster an understanding of why uniform\nadherence to the chosen coding standards is critical to product quality;\nand establish policies and procedures to check and enforce that\nadherence. The guidelines contained in this book can aid such an effort."),(0,a.kt)("p",null,"An important activity for managers is the definition of coding standards\nfor a project or organization. These guidelines do not, in themselves,\nconstitute a complete set of standards; however, they can serve as a\nbasis for standards. Several guidelines indicate a range of decisions,\nbut they do not prescribe a particular decision. For example, the second\nguideline in the book (Guideline 2.1.2) advocates using a consistent\nnumber of spaces for indentation and indicates in the rationale that two\nto four spaces would be reasonable. With your senior technical staff,\nyou should review each such guideline and arrive at a decision about its\ninstantiation that will constitute your project or organizational\nstandard."),(0,a.kt)("p",null,"Two other areas require managerial decisions about standardization.\nGuideline 3.1.4 advises you to avoid arbitrary abbreviations in object\nor unit names. You should prepare a glossary of acceptable abbreviations\nfor a project that allows the use of shorter versions of\napplication-specific terms (e.g., FFT for Fast Fourier Transform or SPN\nfor Stochastic Petri Net). You should keep this glossary short and\nrestrict it to terms that need to be used frequently as part of names.\nHaving to refer continually to an extensive glossary to understand\nsource text makes it hard to read."),(0,a.kt)("p",null,"The portability guidelines given in Chapter 7 need careful attention.\nAdherence to them is important even if the need to port the resulting\nsoftware is not currently foreseen. Following the guidelines improves\nthe potential reusability of the resulting code in projects that use\ndifferent Ada implementations. You should insist that when particular\nproject needs force the relaxation of some of the portability\nguidelines, nonportable features of the source text are prominently\nindicated. Observing the Chapter 7 guidelines requires definition and\nstandardization of project- or organization-specific numeric types to be\nused in place of the (potentially nonportable) predefined numeric types."),(0,a.kt)("p",null,"Your decisions on standardization issues should be incorporated in a\nproject or organization coding standards document. With coding standards\nin place, you need to ensure adherence to them. Gaining the wholehearted\ncommitment of your programming staff to use the standards is critical.\nGiven this commitment and the example of high-quality Ada being produced\nby your programmers, it will be far easier to conduct effective formal\ncode reviews that check compliance to project standards."),(0,a.kt)("p",null,"Some general issues concerning the management of Ada projects are\ndiscussed by Hefley, et al. (1992)."),(0,a.kt)("h3",u({},{id:"to-contracting-agencies-and-standards-organizations"}),"To Contracting Agencies And Standards Organizations"),(0,a.kt)("p",null,"Many of the guidelines presented here are specific enough to be adopted\nas corporate or project programming standards. Others require a\nmanagerial decision on a particular instantiation before they can be\nused as standards. In such cases, a sample instantiation is presented\nand used throughout the examples. Such instantiations should be\nrecognized as weaker recommendations than the guidelines themselves. In\nsome cases, where the examples are extracted from a published work, the\nauthor's style is used unchanged."),(0,a.kt)("p",null,"Other guidelines presented in this book are intentionally phrased in\nterms of design choices to consider. These guidelines cannot be\ninstantiated as hard-and-fast rules that a project must follow. For\nexample, you should not interpret Guidelines 6.1.1 and 6.1.2 to mean\nthat a project is forbidden to use tasks. Rather, these guidelines are\nintended to help the designer make the tradeoffs between using protected\nobjects and tasks, thus leading the designer to make a more informed\nchoice between these features."),(0,a.kt)("p",null,"The guidelines in this document are not intended to stand alone as a\nstandard. In some cases, it is not clear that a guideline could be\nenforced because it is only intended to make the engineer aware of\ntradeoffs. In other cases, a choice still remains about a guideline,\nsuch as how many spaces to use for each level of indentation."),(0,a.kt)("p",null,'When a guideline is too general to show an example, the "instantiation"\nsection of each guideline contains more specific guidelines. These\ninstantiations can be considered a standard and are more likely to be\nenforceable. Any organization that attempts to extract standards from\nthis document needs to evaluate the complete context. Each guideline\nworks best when related guidelines are practiced. In isolation, a\nguideline may have little or no benefit.'),(0,a.kt)("h3",u({},{id:"to-ada-83-to-ada-95-transition-planners"}),"To Ada 83 To Ada 95 Transition Planners"),(0,a.kt)("p",null,"Transitioning issues fall into two major categories: the\nincompatibilities between the languages, in particular, upward\ncompatibility, and exploitation of new language features."),(0,a.kt)("p",null,"Upward compatibility of Ada 95 was a major design goal of the language.\nThe small number of incompatibilities between Ada 83 and Ada 95 that are\nlikely to occur in practice are easily overcome (see Ada 95 Rationale\n","[","1995","]"," Appendix X entitled Upward Compatibility). Detailed information\non compatibility issues can be found in Taylor (1995) and Intermetrics\n(1995)."),(0,a.kt)("p",null,"The transition planner can gain insight from this book into the\nexploitation of language features in two ways. First, Table 1 shows the\nimpact of new Ada 95 language features on style guide chapters. Second,\nAppendix A maps Ada Reference Manual (1995) sections to specific style\nguidelines."),(0,a.kt)("h2",u({},{id:"typographic-conventions"}),"Typographic Conventions"),(0,a.kt)("p",null,"This style guide uses the following typographic conventions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Serif font General presentation of information."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Italicized serif font")," Publication titles and emphasis."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Boldfaced serif font")," Section headings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Boldfaced sans serif font")," Subheadings for guideline,\ninstantiation, example, rationale, notes, exceptions, automation\nnotes, caution, and subheadings in Summary sections."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Typewriter font"),":")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Syntax of code.")),(0,a.kt)("admonition",u({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},'This page of the "Ada Quality and Style Guide" has been adapted from the\noriginal work at ',(0,a.kt)("a",u({parentName:"p"},{href:"https://en.wikibooks.org/wiki/Ada_Style_Guide"}),"https://en.wikibooks.org/wiki/Ada_Style_Guide"),", which is\nlicensed under the\n",(0,a.kt)("a",u({parentName:"p"},{href:"https://creativecommons.org/licenses/by-sa/3.0/"}),"Creative Commons Attribution-ShareAlike License"),";\nadditional terms may apply. Page not endorsed by Wikibooks or the Ada\nStyle Guide Wikibook authors. This page is licensed under the same license\nas the original work.")))}b.isMDXComponent=!0}}]);