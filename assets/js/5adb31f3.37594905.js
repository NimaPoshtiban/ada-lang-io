"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6830],{99496:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>h,default:()=>_,frontMatter:()=>d,metadata:()=>A,toc:()=>p});var i=s(74848),r=s(28453),a=s(13842),t=s(91435),o=s(21432),c=s(79162),l=s(34421);const d={sidebar_position:167},h="D.13 The Ravenscar and Jorvik Profiles",A={id:"arm/AA-D/AA-D.13",title:"D.13 The Ravenscar and Jorvik Profiles",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-D/AA-D.13.mdx",sourceDirName:"arm/AA-D",slug:"/arm/AA-D/AA-D.13",permalink:"/docs/arm/AA-D/AA-D.13",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:167,frontMatter:{sidebar_position:167},sidebar:"referenceManualSidebar",previous:{title:"D.12 Other Optimizations and Determinism Rules",permalink:"/docs/arm/AA-D/AA-D.12"},next:{title:"D.14 Execution Time",permalink:"/docs/arm/AA-D/AA-D.14"}},m={},p=[{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4},{value:"Incompatibilities With Ada 2012",id:"incompatibilities-with-ada-2012",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}];function x(e){const n={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"d13-the-ravenscar-and-jorvik-profiles",children:"D.13 The Ravenscar and Jorvik Profiles"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,i.jsx)(n.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n","\n",(0,i.jsx)(c.A,{children:"1/5"}),"\n",(0,i.jsx)(l.A,{items:["AI95-00249-01","AI05-0246-1","AI05-0299-1","AI12-0291-1"]}),"\n",(0,i.jsxs)("p",{children:["[This subclause defines the Ravenscar and Jorvik profiles.] ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsxs)("em",{children:["Paragraphs 2 and 3 were moved to ",(0,i.jsx)("a",{href:"../AA-13/AA-13.12",children:"13.12"}),", \u201c",(0,i.jsx)("a",{href:"../AA-13/AA-13.12",children:"Pragma Restrictions and Pragma Profile"}),"\u201d."]})," ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h4,{id:"legality-rules",children:"Legality Rules"}),"\n",(0,i.jsx)(c.A,{children:"4/3"}),"\n",(0,i.jsx)(l.A,{items:["AI95-00249-01","AI05-0246-1","AI12-0291-1"]}),"\n",(0,i.jsxs)("p",{children:["The ",(0,i.jsxs)("em",{children:["profile","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-2/AA-2.3#S0002",children:"identifier"})})," Ravenscar and ",(0,i.jsxs)("em",{children:["profile","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"../AA-2/AA-2.3#S0002",children:"identifier"})})," Jorvik are usage profiles (see ",(0,i.jsx)("a",{href:"../AA-13/AA-13.12",children:"13.12"}),"). For usage profiles Ravenscar and Jorvik, there shall be no ",(0,i.jsxs)("em",{children:["profile","_"]}),(0,i.jsx)("code",{children:(0,i.jsxs)("a",{href:"../AA-2/AA-2.8#S0020",children:["pragma","_","argument","_","association"]})}),"s. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,i.jsx)(c.A,{children:"5/3"}),"\n",(0,i.jsx)(l.A,{items:["AI95-00249-01","AI05-0246-1"]}),"\n",(0,i.jsxs)("p",{children:["The usage profile Ravenscar is equivalent to the following set of pragmas:",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(c.A,{children:"6/4"}),"\n",(0,i.jsx)(l.A,{items:["AI95-00249-01","AI95-00297-01","AI95-00394-01","AI05-0171-1","AI05-0246-1","AI12-0055-1","AI12-0073-1"]}),"\n",(0,i.jsx)(o.A,{language:"ada",children:(0,i.jsxs)(n.p,{children:["pragma Task","_","Dispatching","_","Policy (FIFO","_","Within","_","Priorities);","\n","pragma Locking","_","Policy (Ceiling","_","Locking);","\n","pragma Detect","_","Blocking;","\n","pragma Restrictions (","\n","              No","_","Abort","_","Statements,","\n","              No","_","Dynamic","_","Attachment,","\n","              No","_","Dynamic","_","CPU","_","Assignment,","\n","              No","_","Dynamic","_","Priorities,","\n","              No","_","Implicit","_","Heap","_","Allocations,","\n","              No","_","Local","_","Protected","_","Objects,","\n","              No","_","Local","_","Timing","_","Events,","\n","              No","_","Protected","_","Type","_","Allocators,","\n","              No","_","Relative","_","Delay,","\n","              No","_","Requeue","_","Statements,","\n","              No","_","Select","_","Statements,","\n","              No","_","Specific","_","Termination","_","Handlers,","\n","              No","_","Task","_","Allocators,","\n","              No","_","Task","_","Hierarchy,","\n","              No","_","Task","_","Termination,","\n","              Simple","_","Barriers,","\n","              Max","_","Entry","_","Queue","_","Length =",">"," 1,","\n","              Max","_","Protected","_","Entries =",">"," 1,","\n","              Max","_","Task","_","Entries =",">"," 0,","\n","              No","_","Dependence =",">"," Ada.Asynchronous","_","Task","_","Control,","\n","              No","_","Dependence =",">"," Ada.Calendar,","\n","              No","_","Dependence =",">"," Ada.Execution","_","Time.Group","_","Budgets,","\n","              No","_","Dependence =",">"," Ada.Execution","_","Time.Timers,","\n","              No","_","Dependence =",">"," Ada.Synchronous","_","Barriers,","\n","              No","_","Dependence =",">"," Ada.Task","_","Attributes,","\n","              No","_","Dependence =",">"," System.Multiprocessors.Dispatching","_","Domains);","\n"]})}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(c.A,{children:"6.a/3"}),(0,i.jsx)(a.A,{type:"aarm",aarm:"discussion",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("strong",{}),"The Ravenscar profile is named for the location of the meeting that defined its initial version. The name is now in widespread use, so we stick with existing practice, rather than using a more descriptive name.",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(c.A,{children:"6.b/5"}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:['The Jorvik profile is named for the city of York, UK, near where the Ravenscar profile was created. "Jorvik" (pronounced "Yorvick") was the Viking name for York. ',(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(c.A,{children:"6.1/5"}),"\n",(0,i.jsx)(l.A,{items:["AI12-0291-1"]}),"\n",(0,i.jsxs)("p",{children:["The usage profile Jorvik is equivalent to the following set of pragmas:",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(c.A,{children:"6.2/5"}),"\n",(0,i.jsx)(l.A,{items:["AI12-0291-1"]}),"\n",(0,i.jsx)(o.A,{language:"ada",children:(0,i.jsxs)(n.p,{children:["pragma Task","_","Dispatching","_","Policy (FIFO","_","Within","_","Priorities);","\n","pragma Locking","_","Policy (Ceiling","_","Locking);","\n","pragma Detect","_","Blocking;","\n","pragma Restrictions (","\n","              No","_","Abort","_","Statements,","\n","              No","_","Dynamic","_","Attachment,","\n","              No","_","Dynamic","_","CPU","_","Assignment,","\n","              No","_","Dynamic","_","Priorities,","\n","              No","_","Local","_","Protected","_","Objects,","\n","              No","_","Local","_","Timing","_","Events,","\n","              No","_","Protected","_","Type","_","Allocators,","\n","              No","_","Requeue","_","Statements,","\n","              No","_","Select","_","Statements,","\n","              No","_","Specific","_","Termination","_","Handlers,","\n","              No","_","Task","_","Allocators,","\n","              No","_","Task","_","Hierarchy,","\n","              No","_","Task","_","Termination,","\n","              Pure","_","Barriers,","\n","              Max","_","Task","_","Entries =",">"," 0,","\n","              No","_","Dependence =",">"," Ada.Asynchronous","_","Task","_","Control,","\n","              No","_","Dependence =",">"," Ada.Execution","_","Time.Group","_","Budgets,","\n","              No","_","Dependence =",">"," Ada.Execution","_","Time.Timers,","\n","              No","_","Dependence =",">"," Ada.Task","_","Attributes,","\n","              No","_","Dependence =",">"," System.Multiprocessors.Dispatching","_","Domains);","\n"]})}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(c.A,{children:"6.c/5"}),(0,i.jsx)(a.A,{type:"aarm",aarm:"discussion",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("strong",{}),"The Jorvik profile removes a number of restrictions from the Ravenscar profile to allow additional applications to benefit from predictability and low overhead. Specifically, the following restrictions are removed: ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(c.A,{children:"6.d/5"}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:["No","_","Implicit","_","Heap","_","Allocations",(0,i.jsx)("br",{}),"    No","_","Relative","_","Delay",(0,i.jsx)("br",{}),"    Max","_","Entry","_","Queue","_","Length =",">"," 1",(0,i.jsx)("br",{}),"    Max","_","Protected","_","Entries =",">"," 1",(0,i.jsx)("br",{}),"    No","_","Dependence =",">"," Ada.Calendar",(0,i.jsx)("br",{}),"    No","_","Dependence =",">"," Ada.Synchronous","_","Barriers",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(c.A,{children:"6.e/5"}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:["Jorvik also replaces restriction Simple","_","Barriers with Pure","_","Barriers (a weaker requirement than Simple","_","Barriers). ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("em",{children:"Paragraph 7 and 8 were deleted."})," ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h4,{id:"implementation-advice",children:"Implementation Advice"}),"\n",(0,i.jsx)(c.A,{children:"9/5"}),"\n",(0,i.jsx)(l.A,{items:["AI05-0171-1","AI12-0291-1"]}),"\n",(0,i.jsxs)("p",{children:["On a multiprocessor system, an implementation should support a fully partitioned approach if one of these profiles is specified. Each processor should have separate and disjoint ready queues.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(c.A,{children:"9.a.1/3"}),(0,i.jsx)(a.A,{type:"aarm",aarm:"implementation-advice",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("strong",{}),"On a multiprocessor system, each processor should have a separate and disjoint ready queue.",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(c.A,{children:"10/5"}),(0,i.jsx)(l.A,{items:["AI95-00249-01","AI05-0246-1","AI12-0291-1"]}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:["NOTE 1   For the Ravenscar profile, the effect of the restriction Max","_","Entry","_","Queue","_","Length =",">"," 1 applies only to protected entry queues due to the accompanying restriction Max","_","Task","_","Entries =",">"," 0. The restriction Max","_","Entry","_","Queue","_","Length is not applied by the Jorvik profile.",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(c.A,{children:"11/5"}),(0,i.jsx)(l.A,{items:["AI12-0055-1","AI12-0291-1"]}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:["NOTE 2   When the Ravenscar or Jorvik profile is in effect (via the effect of the No","_","Dynamic","_","CPU","_","Assignment restriction), all of the tasks in the partition will execute on a single CPU unless the programmer explicitly uses aspect CPU to specify the CPU assignments for tasks. The use of multiple CPUs requires care, as many guarantees of single CPU scheduling no longer apply.",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(c.A,{children:"12/5"}),(0,i.jsx)(l.A,{items:["AI12-0055-1","AI12-0291-1"]}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:["NOTE 3   It is not recommended to specify the CPU of a task to be Not","_","A","_","Specific","_","CPU when the Ravenscar or Jorvik profile is in effect. How a partition executes strongly depends on the assignment of tasks to CPUs. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(c.A,{children:"13/5"}),(0,i.jsx)(l.A,{items:["AI12-0291-1"]}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:["NOTE 4   Any unit that meets the requirements of the Ravenscar profile also meets the requirements of the Jorvik profile. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(t.A,{children:(0,i.jsx)(n.h4,{id:"extensions-to-ada-95",children:"Extensions to Ada 95"})}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(c.A,{children:"13.a/3"}),(0,i.jsx)(l.A,{items:["AI95-00249-01","AI05-0246-1"]}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:["The Ravenscar profile is new; it was moved here by Ada 2012. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(t.A,{children:(0,i.jsx)(n.h4,{id:"wording-changes-from-ada-2005",children:"Wording Changes from Ada 2005"})}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(c.A,{children:"13.b/3"}),(0,i.jsx)(l.A,{items:["AI05-0171-1"]}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:["How Ravenscar behaves on a multiprocessor system is now defined. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(t.A,{children:(0,i.jsx)(n.h4,{id:"incompatibilities-with-ada-2012",children:"Incompatibilities With Ada 2012"})}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(c.A,{children:"13.c/4"}),(0,i.jsx)(l.A,{items:["AI05-0073-1"]}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("strong",{children:"Corrigendum:"})," The Ravenscar profile no longer allows the use of package Synchronous","_","Barriers, as this package violates the fundamental Ravenscar requirement that each waiting point can only block (and release) a single task. This is incompatible with the published Ada 2012 standard, but it is unlikely that any existing Ravenscar runtime ever usefully supported barriers.",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(c.A,{children:"13.d/4"}),(0,i.jsx)(l.A,{items:["AI05-0055-1"]}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("strong",{children:"Corrigendum:"}),"The Ravenscar profile (via the effect of the new restriction No","_","Dynamic","_","CPU","_","Assignment) no longer allows setting the CPU aspect of a task to a non-static value. While this was allowed, an implementation would have had to come up with a creative interpretation of the Ada 2012 requirement to define the association of tasks to processors statically. As such, the new check is more likely to catch bugs than break a working program. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(t.A,{children:(0,i.jsx)(n.h4,{id:"extensions-to-ada-2012",children:"Extensions to Ada 2012"})}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(c.A,{children:"13.e/5"}),(0,i.jsx)(l.A,{items:["AI12-0291-1"]}),(0,i.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:["The Jorvik profile is new. ",(0,i.jsx)("br",{})]})})]})]})}function _(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}}}]);