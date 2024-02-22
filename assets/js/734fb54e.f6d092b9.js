"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[7345],{98742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=t(58168),s=(t(96540),t(15680));const a={title:"6. Concurrency",sidebar_position:6},i=void 0,o={unversionedId:"style-guide/s6/s6",id:"style-guide/s6/s6",title:"6. Concurrency",description:"Concurrency exists as either apparent concurrency or real concurrency.",source:"@site/docs/style-guide/s6/s6.mdx",sourceDirName:"style-guide/s6",slug:"/style-guide/s6/",permalink:"/docs/style-guide/s6/",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"6. Concurrency",sidebar_position:6},sidebar:"styleGuideSidebar",previous:{title:"5.10 Summary",permalink:"/docs/style-guide/s5/10"},next:{title:"6.1 Concurrency Options",permalink:"/docs/style-guide/s6/01"}},c={},u=[],l={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,s.yg)(d,(0,r.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"Concurrency exists as either apparent concurrency or real concurrency.\nIn a single processor environment, apparent concurrency is the result of\ninterleaved execution of concurrent activities. In a multiprocessor\nenvironment, real concurrency is the result of overlapped execution of\nconcurrent activities."),(0,s.yg)("p",null,"Concurrent programming is more difficult and error prone than sequential\nprogramming. The concurrent programming features of Ada are designed to\nmake it easier to write and maintain concurrent programs that behave\nconsistently and predictably and avoid such problems as deadlock and\nstarvation. The language features themselves cannot guarantee that\nprograms have these desirable properties. They must be used with\ndiscipline and care, a process supported by the guidelines in this\nchapter."),(0,s.yg)("p",null,"The correct usage of Ada concurrency features results in reliable,\nreusable, and portable software. Protected objects (added in Ada 95)\nencapsulate and provide synchronized access to their private data\n(Rationale 1995, \xa7II.9). Protected objects help you manage shared data\nwithout incurring a performance penalty. Tasks model concurrent\nactivities and use the rendezvous to synchronize between cooperating\nconcurrent tasks. Much of the synchronization required between tasks\ninvolves data synchronization, which can be accomplished most\nefficiently, in general, using protected objects. Misuse of language\nfeatures results in software that is unverifiable and difficult to reuse\nor port. For example, using task priorities or delays to manage\nsynchronization is not portable. It is also important that a reusable\ncomponent not make assumptions about the order or speed of task\nexecution (i.e., about the compiler's tasking implementation)."),(0,s.yg)("p",null,"Although concurrent features such as tasks and protected objects are\nsupported by the core Ada language, care should be taken when using\nthese features with implementations that do not specifically support\nAnnex D (Real-Time Systems). If Annex D is not specifically supported,\nfeatures required for real-time applications might not be implemented."),(0,s.yg)("p",null,'Guidelines in this chapter are frequently worded "consider . . ."\nbecause hard and fast rules cannot apply in all situations. The specific\nchoice you make in a given situation involves design tradeoffs. The\nrationale for these guidelines is intended to give you insight into some\nof these tradeoffs.'))}p.isMDXComponent=!0}}]);