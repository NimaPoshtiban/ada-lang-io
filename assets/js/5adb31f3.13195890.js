"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6830],{81303:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>m,default:()=>_,frontMatter:()=>d,metadata:()=>g,toc:()=>A});var t=a(58168),i=(a(96540),a(15680)),o=a(20793),r=a(91435),s=a(21432),l=a(79162),y=a(34421);const d={sidebar_position:167},m="D.13 The Ravenscar and Jorvik Profiles",g={unversionedId:"arm/AA-D/AA-D.13",id:"arm/AA-D/AA-D.13",title:"D.13 The Ravenscar and Jorvik Profiles",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-D/AA-D.13.mdx",sourceDirName:"arm/AA-D",slug:"/arm/AA-D/AA-D.13",permalink:"/docs/arm/AA-D/AA-D.13",draft:!1,tags:[],version:"current",sidebarPosition:167,frontMatter:{sidebar_position:167},sidebar:"referenceManualSidebar",previous:{title:"D.12 Other Optimizations and Determinism Rules",permalink:"/docs/arm/AA-D/AA-D.12"},next:{title:"D.14 Execution Time",permalink:"/docs/arm/AA-D/AA-D.14"}},p={},A=[{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4},{value:"Incompatibilities With Ada 2012",id:"incompatibilities-with-ada-2012",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}],c={toc:A},u="wrapper";function _(e){let{components:n,...a}=e;return(0,i.yg)(u,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"d13-the-ravenscar-and-jorvik-profiles"},"D.13 The Ravenscar and Jorvik Profiles"),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,i.yg)(l.A,{mdxType:"MarginText"},"1/5"),(0,i.yg)(y.A,{items:["AI95-00249-01","AI05-0246-1","AI05-0299-1","AI12-0291-1"],mdxType:"MarginInfo"}),(0,i.yg)("p",null,"[This subclause defines the Ravenscar and Jorvik profiles.] ",(0,i.yg)("br",null)),(0,i.yg)("p",null,(0,i.yg)("em",null,"Paragraphs 2 and 3 were moved to ",(0,i.yg)("a",{href:"../AA-13/AA-13.12"},"13.12"),", \u201c",(0,i.yg)("a",{href:"../AA-13/AA-13.12"},"Pragma Restrictions and Pragma Profile"),"\u201d.")," ",(0,i.yg)("br",null)),(0,i.yg)("h4",{id:"legality-rules"},"Legality Rules"),(0,i.yg)(l.A,{mdxType:"MarginText"},"4/3"),(0,i.yg)(y.A,{items:["AI95-00249-01","AI05-0246-1","AI12-0291-1"],mdxType:"MarginInfo"}),(0,i.yg)("p",null,"The ",(0,i.yg)("em",null,"profile_"),(0,i.yg)("code",null,(0,i.yg)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," Ravenscar and ",(0,i.yg)("em",null,"profile_"),(0,i.yg)("code",null,(0,i.yg)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," Jorvik are usage profiles (see ",(0,i.yg)("a",{href:"../AA-13/AA-13.12"},"13.12"),"). For usage profiles Ravenscar and Jorvik, there shall be no ",(0,i.yg)("em",null,"profile_"),(0,i.yg)("code",null,(0,i.yg)("a",{href:"../AA-2/AA-2.8#S0020"},"pragma_argument_association")),"s. ",(0,i.yg)("br",null)),(0,i.yg)("h4",{id:"static-semantics"},"Static Semantics"),(0,i.yg)(l.A,{mdxType:"MarginText"},"5/3"),(0,i.yg)(y.A,{items:["AI95-00249-01","AI05-0246-1"],mdxType:"MarginInfo"}),(0,i.yg)("p",null,"The usage profile Ravenscar is equivalent to the following set of pragmas:",(0,i.yg)("br",null)),(0,i.yg)(l.A,{mdxType:"MarginText"},"6/4"),(0,i.yg)(y.A,{items:["AI95-00249-01","AI95-00297-01","AI95-00394-01","AI05-0171-1","AI05-0246-1","AI12-0055-1","AI12-0073-1"],mdxType:"MarginInfo"}),(0,i.yg)(s.A,{language:"ada",mdxType:"CodeBlock"},"pragma Task_Dispatching_Policy (FIFO_Within_Priorities);","\n","pragma Locking_Policy (Ceiling_Locking);","\n","pragma Detect_Blocking;","\n","pragma Restrictions (","\n","              No_Abort_Statements,","\n","              No_Dynamic_Attachment,","\n","              No_Dynamic_CPU_Assignment,","\n","              No_Dynamic_Priorities,","\n","              No_Implicit_Heap_Allocations,","\n","              No_Local_Protected_Objects,","\n","              No_Local_Timing_Events,","\n","              No_Protected_Type_Allocators,","\n","              No_Relative_Delay,","\n","              No_Requeue_Statements,","\n","              No_Select_Statements,","\n","              No_Specific_Termination_Handlers,","\n","              No_Task_Allocators,","\n","              No_Task_Hierarchy,","\n","              No_Task_Termination,","\n","              Simple_Barriers,","\n","              Max_Entry_Queue_Length =",">"," 1,","\n","              Max_Protected_Entries =",">"," 1,","\n","              Max_Task_Entries =",">"," 0,","\n","              No_Dependence =",">"," Ada.Asynchronous_Task_Control,","\n","              No_Dependence =",">"," Ada.Calendar,","\n","              No_Dependence =",">"," Ada.Execution_Time.Group_Budgets,","\n","              No_Dependence =",">"," Ada.Execution_Time.Timers,","\n","              No_Dependence =",">"," Ada.Synchronous_Barriers,","\n","              No_Dependence =",">"," Ada.Task_Attributes,","\n","              No_Dependence =",">"," System.Multiprocessors.Dispatching_Domains);","\n"),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(l.A,{mdxType:"MarginText"},"6.a/3"),(0,i.yg)(o.A,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,i.yg)("strong",null),"The Ravenscar profile is named for the location of the meeting that defined its initial version. The name is now in widespread use, so we stick with existing practice, rather than using a more descriptive name.",(0,i.yg)("br",null))),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(l.A,{mdxType:"MarginText"},"6.b/5"),(0,i.yg)(o.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},'The Jorvik profile is named for the city of York, UK, near where the Ravenscar profile was created. "Jorvik" (pronounced "Yorvick") was the Viking name for York. ',(0,i.yg)("br",null))),(0,i.yg)(l.A,{mdxType:"MarginText"},"6.1/5"),(0,i.yg)(y.A,{items:["AI12-0291-1"],mdxType:"MarginInfo"}),(0,i.yg)("p",null,"The usage profile Jorvik is equivalent to the following set of pragmas:",(0,i.yg)("br",null)),(0,i.yg)(l.A,{mdxType:"MarginText"},"6.2/5"),(0,i.yg)(y.A,{items:["AI12-0291-1"],mdxType:"MarginInfo"}),(0,i.yg)(s.A,{language:"ada",mdxType:"CodeBlock"},"pragma Task_Dispatching_Policy (FIFO_Within_Priorities);","\n","pragma Locking_Policy (Ceiling_Locking);","\n","pragma Detect_Blocking;","\n","pragma Restrictions (","\n","              No_Abort_Statements,","\n","              No_Dynamic_Attachment,","\n","              No_Dynamic_CPU_Assignment,","\n","              No_Dynamic_Priorities,","\n","              No_Local_Protected_Objects,","\n","              No_Local_Timing_Events,","\n","              No_Protected_Type_Allocators,","\n","              No_Requeue_Statements,","\n","              No_Select_Statements,","\n","              No_Specific_Termination_Handlers,","\n","              No_Task_Allocators,","\n","              No_Task_Hierarchy,","\n","              No_Task_Termination,","\n","              Pure_Barriers,","\n","              Max_Task_Entries =",">"," 0,","\n","              No_Dependence =",">"," Ada.Asynchronous_Task_Control,","\n","              No_Dependence =",">"," Ada.Execution_Time.Group_Budgets,","\n","              No_Dependence =",">"," Ada.Execution_Time.Timers,","\n","              No_Dependence =",">"," Ada.Task_Attributes,","\n","              No_Dependence =",">"," System.Multiprocessors.Dispatching_Domains);","\n"),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(l.A,{mdxType:"MarginText"},"6.c/5"),(0,i.yg)(o.A,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,i.yg)("strong",null),"The Jorvik profile removes a number of restrictions from the Ravenscar profile to allow additional applications to benefit from predictability and low overhead. Specifically, the following restrictions are removed: ",(0,i.yg)("br",null))),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(l.A,{mdxType:"MarginText"},"6.d/5"),(0,i.yg)(o.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"No_Implicit_Heap_Allocations",(0,i.yg)("br",null),"    No_Relative_Delay",(0,i.yg)("br",null),"    Max_Entry_Queue_Length =",">"," 1",(0,i.yg)("br",null),"    Max_Protected_Entries =",">"," 1",(0,i.yg)("br",null),"    No_Dependence =",">"," Ada.Calendar",(0,i.yg)("br",null),"    No_Dependence =",">"," Ada.Synchronous_Barriers",(0,i.yg)("br",null))),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(l.A,{mdxType:"MarginText"},"6.e/5"),(0,i.yg)(o.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Jorvik also replaces restriction Simple_Barriers with Pure_Barriers (a weaker requirement than Simple_Barriers). ",(0,i.yg)("br",null))),(0,i.yg)("p",null,(0,i.yg)("em",null,"Paragraph 7 and 8 were deleted.")," ",(0,i.yg)("br",null)),(0,i.yg)("h4",{id:"implementation-advice"},"Implementation Advice"),(0,i.yg)(l.A,{mdxType:"MarginText"},"9/5"),(0,i.yg)(y.A,{items:["AI05-0171-1","AI12-0291-1"],mdxType:"MarginInfo"}),(0,i.yg)("p",null,"On a multiprocessor system, an implementation should support a fully partitioned approach if one of these profiles is specified. Each processor should have separate and disjoint ready queues.",(0,i.yg)("br",null)),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(l.A,{mdxType:"MarginText"},"9.a.1/3"),(0,i.yg)(o.A,{type:"aarm",aarm:"implementation-advice",mdxType:"Admonition"},(0,i.yg)("strong",null),"On a multiprocessor system, each processor should have a separate and disjoint ready queue.",(0,i.yg)("br",null))),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(l.A,{mdxType:"MarginText"},"10/5"),(0,i.yg)(y.A,{items:["AI95-00249-01","AI05-0246-1","AI12-0291-1"],mdxType:"MarginInfo"}),(0,i.yg)(o.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 1   For the Ravenscar profile, the effect of the restriction Max_Entry_Queue_Length =",">"," 1 applies only to protected entry queues due to the accompanying restriction Max_Task_Entries =",">"," 0. The restriction Max_Entry_Queue_Length is not applied by the Jorvik profile.",(0,i.yg)("br",null))),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(l.A,{mdxType:"MarginText"},"11/5"),(0,i.yg)(y.A,{items:["AI12-0055-1","AI12-0291-1"],mdxType:"MarginInfo"}),(0,i.yg)(o.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 2   When the Ravenscar or Jorvik profile is in effect (via the effect of the No_Dynamic_CPU_Assignment restriction), all of the tasks in the partition will execute on a single CPU unless the programmer explicitly uses aspect CPU to specify the CPU assignments for tasks. The use of multiple CPUs requires care, as many guarantees of single CPU scheduling no longer apply.",(0,i.yg)("br",null))),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(l.A,{mdxType:"MarginText"},"12/5"),(0,i.yg)(y.A,{items:["AI12-0055-1","AI12-0291-1"],mdxType:"MarginInfo"}),(0,i.yg)(o.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 3   It is not recommended to specify the CPU of a task to be Not_A_Specific_CPU when the Ravenscar or Jorvik profile is in effect. How a partition executes strongly depends on the assignment of tasks to CPUs. ",(0,i.yg)("br",null))),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(l.A,{mdxType:"MarginText"},"13/5"),(0,i.yg)(y.A,{items:["AI12-0291-1"],mdxType:"MarginInfo"}),(0,i.yg)(o.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 4   Any unit that meets the requirements of the Ravenscar profile also meets the requirements of the Jorvik profile. ",(0,i.yg)("br",null))),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)("h4",{id:"extensions-to-ada-95"},"Extensions to Ada 95")),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(l.A,{mdxType:"MarginText"},"13.a/3"),(0,i.yg)(y.A,{items:["AI95-00249-01","AI05-0246-1"],mdxType:"MarginInfo"}),(0,i.yg)(o.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The Ravenscar profile is new; it was moved here by Ada 2012. ",(0,i.yg)("br",null))),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)("h4",{id:"wording-changes-from-ada-2005"},"Wording Changes from Ada 2005")),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(l.A,{mdxType:"MarginText"},"13.b/3"),(0,i.yg)(y.A,{items:["AI05-0171-1"],mdxType:"MarginInfo"}),(0,i.yg)(o.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"How Ravenscar behaves on a multiprocessor system is now defined. ",(0,i.yg)("br",null))),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)("h4",{id:"incompatibilities-with-ada-2012"},"Incompatibilities With Ada 2012")),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(l.A,{mdxType:"MarginText"},"13.c/4"),(0,i.yg)(y.A,{items:["AI05-0073-1"],mdxType:"MarginInfo"}),(0,i.yg)(o.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,i.yg)("strong",null,"Corrigendum:")," The Ravenscar profile no longer allows the use of package Synchronous_Barriers, as this package violates the fundamental Ravenscar requirement that each waiting point can only block (and release) a single task. This is incompatible with the published Ada 2012 standard, but it is unlikely that any existing Ravenscar runtime ever usefully supported barriers.",(0,i.yg)("br",null))),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(l.A,{mdxType:"MarginText"},"13.d/4"),(0,i.yg)(y.A,{items:["AI05-0055-1"],mdxType:"MarginInfo"}),(0,i.yg)(o.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,i.yg)("strong",null,"Corrigendum:"),"The Ravenscar profile (via the effect of the new restriction No_Dynamic_CPU_Assignment) no longer allows setting the CPU aspect of a task to a non-static value. While this was allowed, an implementation would have had to come up with a creative interpretation of the Ada 2012 requirement to define the association of tasks to processors statically. As such, the new check is more likely to catch bugs than break a working program. ",(0,i.yg)("br",null))),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)("h4",{id:"extensions-to-ada-2012"},"Extensions to Ada 2012")),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(l.A,{mdxType:"MarginText"},"13.e/5"),(0,i.yg)(y.A,{items:["AI12-0291-1"],mdxType:"MarginInfo"}),(0,i.yg)(o.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The Jorvik profile is new. ",(0,i.yg)("br",null))))}_.isMDXComponent=!0}}]);