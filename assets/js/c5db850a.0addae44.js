"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[3021],{65713:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=i(74848),a=i(28453);const l={title:"7.3 Tasking"},s=void 0,r={id:"style-guide/s7/03",title:"7.3 Tasking",description:"The definition of tasking in the Ada language leaves many",source:"@site/docs/style-guide/s7/03.mdx",sourceDirName:"style-guide/s7",slug:"/style-guide/s7/03",permalink:"/docs/style-guide/s7/03",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"7.3 Tasking"},sidebar:"styleGuideSidebar",previous:{title:"7.2 Numeric Types and Expressions",permalink:"/docs/style-guide/s7/02"},next:{title:"7.4 Exceptions",permalink:"/docs/style-guide/s7/04"}},o={},d=[{value:"Task Activation Order",id:"task-activation-order",level:3},{value:"guideline",id:"guideline",level:4},{value:"rationale",id:"rationale",level:4},{value:"Delay Statements",id:"delay-statements",level:3},{value:"guideline",id:"guideline-1",level:4},{value:"rationale",id:"rationale-1",level:4},{value:"Package Calendar, Type Duration, and System.Tick",id:"package-calendar-type-duration-and-systemtick",level:3},{value:"guideline",id:"guideline-2",level:4},{value:"rationale",id:"rationale-2",level:4},{value:"Select Statement Evaluation Order",id:"select-statement-evaluation-order",level:3},{value:"guideline",id:"guideline-3",level:4},{value:"rationale",id:"rationale-3",level:4},{value:"Task Scheduling Algorithm",id:"task-scheduling-algorithm",level:3},{value:"guideline",id:"guideline-4",level:4},{value:"rationale",id:"rationale-4",level:4},{value:"notes",id:"notes",level:4},{value:"exceptions",id:"exceptions",level:4},{value:"Abort",id:"abort",level:3},{value:"guideline",id:"guideline-5",level:4},{value:"rationale",id:"rationale-5",level:4},{value:"Unprotected Shared Variables and Pragmas Atomic and Volatile",id:"unprotected-shared-variables-and-pragmas-atomic-and-volatile",level:3},{value:"guideline",id:"guideline-6",level:4},{value:"example",id:"example",level:4},{value:"rationale",id:"rationale-6",level:4}];function h(e){const n={h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The definition of tasking in the Ada language leaves many\ncharacteristics of the tasking model up to the implementor. This allows\na vendor to make appropriate tradeoffs for the intended application\ndomain, but it also diminishes the portability of designs and code\nemploying the tasking features. In some respects, this diminished\nportability is an inherent characteristic of concurrency approaches (see\nNissen and Wallis 1984, 37). A discussion of Ada tasking dependencies\nwhen employed in a distributed target environment is beyond the scope of\nthis book. For example, multiprocessor task scheduling, interprocessor\nrendezvous, and the distributed sense of time through package Calendar\nare all subject to differences between implementations. For more\ninformation, Nissen and Wallis (1984) and ARTEWG (1986) touch on these\nissues, and Volz et al. (1985) is one of many research articles\navailable."}),"\n",(0,t.jsx)(n.p,{children:"If the Real-Time Systems Annex is supported, then many concurrency\naspects are fully defined and, therefore, a program can rely on these\nfeatures while still being portable to other implementations that\nconform to the Real-Time Systems Annex. The following sections provide\nguidelines based on the absence of this annex."}),"\n",(0,t.jsx)(n.h3,{id:"task-activation-order",children:"Task Activation Order"}),"\n",(0,t.jsx)(n.h4,{id:"guideline",children:"guideline"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Do not depend on the order in which task objects are activated when\ndeclared in the same declarative list."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"rationale",children:"rationale"}),"\n",(0,t.jsx)(n.p,{children:"The order in which task objects are activated is left undefined in the\nAda Reference Manual (1995, \xa79.2). See also Guideline 6.1.5."}),"\n",(0,t.jsx)(n.h3,{id:"delay-statements",children:"Delay Statements"}),"\n",(0,t.jsx)(n.h4,{id:"guideline-1",children:"guideline"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Do not depend on a particular delay being achievable (Nissen and\nWallis 1984)."}),"\n",(0,t.jsx)(n.li,{children:"Never use knowledge of the execution pattern of tasks to achieve\ntiming requirements."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"rationale-1",children:"rationale"}),"\n",(0,t.jsx)(n.p,{children:"The rationale for this appears in Guideline 6.1.7. In addition, the\ntreatment of delay statements varies from implementation to\nimplementation, thereby hindering portability."}),"\n",(0,t.jsx)(n.p,{children:"Using knowledge of the execution pattern of tasks to achieve timing\nrequirements is nonportable. Ada does not specify the underlying\nscheduling algorithm, and there is no guarantee that system clock ticks\nwill be consistently precise between different systems. Thus, when you\nchange system clocks, your delay behavior also changes."}),"\n",(0,t.jsx)(n.h3,{id:"package-calendar-type-duration-and-systemtick",children:"Package Calendar, Type Duration, and System.Tick"}),"\n",(0,t.jsx)(n.h4,{id:"guideline-2",children:"guideline"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Do not assume a correlation between System.Tick and type Duration\n(see Guidelines 6.1.7 and 7.4.2)."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"rationale-2",children:"rationale"}),"\n",(0,t.jsx)(n.p,{children:"Such a correlation is not required, although it may exist in some\nimplementations."}),"\n",(0,t.jsx)(n.h3,{id:"select-statement-evaluation-order",children:"Select Statement Evaluation Order"}),"\n",(0,t.jsx)(n.h4,{id:"guideline-3",children:"guideline"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Do not depend on the order in which guard conditions are evaluated\nor on the algorithm for choosing among several open select\nalternatives."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"rationale-3",children:"rationale"}),"\n",(0,t.jsx)(n.p,{children:"The language does not define the order of these conditions, so assume\nthat they are arbitrary."}),"\n",(0,t.jsx)(n.h3,{id:"task-scheduling-algorithm",children:"Task Scheduling Algorithm"}),"\n",(0,t.jsx)(n.h4,{id:"guideline-4",children:"guideline"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Do not assume that tasks execute uninterrupted until they reach a\nsynchronization point."}),"\n",(0,t.jsx)(n.li,{children:"Use pragma Priority to distinguish general levels of importance only\n(see Guideline 6.1.6)."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"rationale-4",children:"rationale"}),"\n",(0,t.jsx)(n.p,{children:"The Ada tasking model requires that tasks be synchronized only through\nthe explicit means provided in the language (i.e., rendezvous, task\ndependence, pragma Atomic). The scheduling algorithm is not defined by\nthe language and may vary from time sliced to preemptive priority. Some\nimplementations provide several choices that a user may select for the\napplication."}),"\n",(0,t.jsx)(n.h4,{id:"notes",children:"notes"}),"\n",(0,t.jsx)(n.p,{children:"The number of priorities may vary between implementations. In addition,\nthe manner in which tasks of the same priority are handled may vary\nbetween implementations even if the implementations use the same general\nscheduling algorithm."}),"\n",(0,t.jsx)(n.h4,{id:"exceptions",children:"exceptions"}),"\n",(0,t.jsx)(n.p,{children:"In real-time systems, it is often necessary to tightly control the\ntasking algorithm to obtain the required performance. For example,\navionics systems are frequently driven by cyclic events with limited\nasynchronous interruptions. A nonpreemptive tasking model is\ntraditionally used to obtain the greatest performance in these\napplications. Cyclic executives can be programmed in Ada, as can a\nprogression of scheduling schemes from cyclic through\nmultiple-frame-rate to full asynchrony (MacLaren 1980), although an\nexternal clock is usually required."}),"\n",(0,t.jsx)(n.h3,{id:"abort",children:"Abort"}),"\n",(0,t.jsx)(n.h4,{id:"guideline-5",children:"guideline"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Avoid using the abort statement."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"rationale-5",children:"rationale"}),"\n",(0,t.jsx)(n.p,{children:"The rationale for this appears in Guideline 6.3.3. In addition,\ntreatment of the abort statement varies from implementation to\nimplementation, thereby hindering portability."}),"\n",(0,t.jsx)(n.h3,{id:"unprotected-shared-variables-and-pragmas-atomic-and-volatile",children:"Unprotected Shared Variables and Pragmas Atomic and Volatile"}),"\n",(0,t.jsx)(n.h4,{id:"guideline-6",children:"guideline"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Do not use unprotected shared variables."}),"\n",(0,t.jsx)(n.li,{children:"Consider using protected types to provide data synchronization."}),"\n",(0,t.jsx)(n.li,{children:"Have tasks communicate through the rendezvous mechanism."}),"\n",(0,t.jsx)(n.li,{children:"Do not use unprotected shared variables as a task synchronization\ndevice."}),"\n",(0,t.jsx)(n.li,{children:"Consider using protected objects to encapsulate shared data."}),"\n",(0,t.jsx)(n.li,{children:"Use pragma Atomic or Volatile only when you are forced to by\nrun-time system deficiencies."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.p,{children:"See Guidelines 6.1.1 and 6.1.2."}),"\n",(0,t.jsx)(n.h4,{id:"rationale-6",children:"rationale"}),"\n",(0,t.jsx)(n.p,{children:"The rationale for this appears in Guidelines 6.1.1 and 6.2.4. In\naddition, the treatment of unprotected shared variables varies from\nimplementation to implementation, thereby hindering portability."})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);