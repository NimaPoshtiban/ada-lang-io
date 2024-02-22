"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[7422],{76939:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>A,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=i(58168),r=(i(96540),i(15680)),a=i(20793),o=i(91435),y=i(21432),s=i(79162),g=i(34421);const l={sidebar_position:155},d="D.1 Task Priorities",p={unversionedId:"arm/AA-D/AA-D.1",id:"arm/AA-D/AA-D.1",title:"D.1 Task Priorities",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-D/AA-D.1.mdx",sourceDirName:"arm/AA-D",slug:"/arm/AA-D/AA-D.1",permalink:"/docs/arm/AA-D/AA-D.1",draft:!1,tags:[],version:"current",sidebarPosition:155,frontMatter:{sidebar_position:155},sidebar:"referenceManualSidebar",previous:{title:"Annex D Real-Time Systems",permalink:"/docs/arm/AA-D/"},next:{title:"D.2 Priority Scheduling",permalink:"/docs/arm/AA-D/AA-D.2"}},A={},m=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics-1",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Implementation Requirements",id:"implementation-requirements",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}],h={toc:m},u="wrapper";function c(e){let{components:t,...i}=e;return(0,r.yg)(u,(0,n.A)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"d1-task-priorities"},"D.1 Task Priorities"),(0,r.yg)("admonition",{type:"warning"},(0,r.yg)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,r.yg)(s.A,{mdxType:"MarginText"},"1/3"),(0,r.yg)(g.A,{items:["AI05-0299-1"],mdxType:"MarginInfo"}),(0,r.yg)("p",null,"[This subclause specifies the priority model for real-time systems. In addition, the methods for specifying priorities are defined.] ",(0,r.yg)("br",null)),(0,r.yg)("p",null,(0,r.yg)("em",null,"Paragraphs 2 through 6 were moved to ",(0,r.yg)("a",{href:"../AA-J/"},"Annex J"),", \u201c",(0,r.yg)("a",{href:"../AA-J/"},"Obsolescent Features"),"\u201d.")," ",(0,r.yg)("br",null)),(0,r.yg)("h4",{id:"static-semantics"},"Static Semantics"),(0,r.yg)(s.A,{mdxType:"MarginText"},"6.1/3"),(0,r.yg)(g.A,{items:["AI05-0229-1"],mdxType:"MarginInfo"}),(0,r.yg)("p",null,"For a task type (including the anonymous type of a ",(0,r.yg)("code",null,(0,r.yg)("a",{href:"../AA-9/AA-9.1#S0245"},"single_task_declaration")),"), protected type (including the anonymous type of a ",(0,r.yg)("code",null,(0,r.yg)("a",{href:"../AA-9/AA-9.4#S0250"},"single_protected_declaration")),"), or subprogram, the following language-defined representation aspects may be specified:",(0,r.yg)("br",null)),(0,r.yg)(s.A,{mdxType:"MarginText"},"6.2/3"),(0,r.yg)("dt",null,(0,r.yg)("br",null),"Priority"),(0,r.yg)("dl",null,(0,r.yg)("dd",null,"The aspect Priority is an ",(0,r.yg)("code",null,(0,r.yg)("a",{href:"../AA-4/AA-4.4#S0132"},"expression")),", which shall be of type Integer.",(0,r.yg)("br",null))),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"6.a/3"),(0,r.yg)(a.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,r.yg)("strong",null,"Aspect Description for "),(0,r.yg)("strong",null,"Priority: "),"Priority of a task object or type, or priority of a protected object or type; the priority is not in the interrupt range.",(0,r.yg)("br",null))),(0,r.yg)(s.A,{mdxType:"MarginText"},"6.3/3"),(0,r.yg)("dt",null,(0,r.yg)("br",null),"Interrupt_Priority"),(0,r.yg)("dl",null,(0,r.yg)("dd",null,"The aspect Interrupt_Priority is an ",(0,r.yg)("code",null,(0,r.yg)("a",{href:"../AA-4/AA-4.4#S0132"},"expression")),", which shall be of type Integer.",(0,r.yg)("br",null))),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"6.b/3"),(0,r.yg)(a.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,r.yg)("strong",null,"Aspect Description for "),(0,r.yg)("strong",null,"Interrupt_Priority: "),"Priority of a task object or type, or priority of a protected object or type; the priority is in the interrupt range.",(0,r.yg)("br",null))),(0,r.yg)("h4",{id:"legality-rules"},"Legality Rules"),(0,r.yg)(s.A,{mdxType:"MarginText"},"7/3"),(0,r.yg)(g.A,{items:["AI05-0229-1"],mdxType:"MarginInfo"}),(0,r.yg)("p",null,(0,r.yg)("em",null,"This paragraph was deleted."),(0,r.yg)("br",null)),(0,r.yg)(s.A,{mdxType:"MarginText"},"8/3"),(0,r.yg)(g.A,{items:["AI05-0229-1"],mdxType:"MarginInfo"}),(0,r.yg)("p",null,"If the Priority aspect is specified for a subprogram, the ",(0,r.yg)("code",null,(0,r.yg)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," shall be static, and its value shall be in the range of System.Priority. ",(0,r.yg)("br",null)),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"8.a"),(0,r.yg)(a.A,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,r.yg)("strong",null),"This value is needed before it gets elaborated, when the environment task starts executing. ",(0,r.yg)("br",null))),(0,r.yg)(s.A,{mdxType:"MarginText"},"8.1/3"),(0,r.yg)(g.A,{items:["AI05-0229-1"],mdxType:"MarginInfo"}),(0,r.yg)("p",null,"At most one of the Priority and Interrupt_Priority aspects may be specified for a given entity.",(0,r.yg)("br",null)),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"8.b/3"),(0,r.yg)(a.A,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,r.yg)("strong",null),"This includes specifying via pragmas (see ",(0,r.yg)("a",{href:"../AA-J/AA-J.15#Subclause_J.15.11"},"J.15.11"),"). Note that ",(0,r.yg)("a",{href:"../AA-13/AA-13.1"},"13.1")," prevents multiple specifications of a single representation aspect by any means. ",(0,r.yg)("br",null))),(0,r.yg)(s.A,{mdxType:"MarginText"},"8.2/3"),(0,r.yg)(g.A,{items:["AI05-0229-1"],mdxType:"MarginInfo"}),(0,r.yg)("p",null,"Neither of the Priority or Interrupt_Priority aspects shall be specified for a synchronized interface type.",(0,r.yg)("br",null)),(0,r.yg)("h4",{id:"static-semantics-1"},"Static Semantics"),(0,r.yg)(s.A,{mdxType:"MarginText"},"9"),(0,r.yg)("p",null,"The following declarations exist in package System: ",(0,r.yg)("br",null)),(0,r.yg)(s.A,{mdxType:"MarginText"},"10"),(0,r.yg)(y.A,{language:"ada",mdxType:"CodeBlock"},"subtype Any_Priority is Integer range implementation-defined;","\n","subtype Priority is Any_Priority","\n","   range Any_Priority'First .. implementation-defined;","\n","subtype Interrupt_Priority is Any_Priority","\n","   range Priority'Last+1 .. Any_Priority'Last;","\n",(0,r.yg)(s.A,{mdxType:"MarginText"},"11"),"Default_Priority : constant Priority := (Priority'First + Priority'Last)/2;","\n"),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"11.a"),(0,r.yg)(a.A,{type:"aarm",aarm:"implementation-defined",mdxType:"Admonition"},(0,r.yg)("strong",null),"The declarations of Any_Priority and Priority.",(0,r.yg)("br",null))),(0,r.yg)(s.A,{mdxType:"MarginText"},"12"),(0,r.yg)("p",null,"The full range of priority values supported by an implementation is specified by the subtype Any_Priority. The subrange of priority values that are high enough to require the blocking of one or more interrupts is specified by the subtype Interrupt_Priority. [The subrange of priority values below System.Interrupt_Priority'First is specified by the subtype System.Priority.]",(0,r.yg)("br",null)),(0,r.yg)(s.A,{mdxType:"MarginText"},"13/3"),(0,r.yg)(g.A,{items:["AI05-0229-1"],mdxType:"MarginInfo"}),(0,r.yg)("p",null,(0,r.yg)("em",null,"This paragraph was deleted."),(0,r.yg)("br",null)),(0,r.yg)("h4",{id:"dynamic-semantics"},"Dynamic Semantics"),(0,r.yg)(s.A,{mdxType:"MarginText"},"14/3"),(0,r.yg)(g.A,{items:["AI05-0229-1"],mdxType:"MarginInfo"}),(0,r.yg)("p",null,"The Priority aspect has no effect if it is specified for a subprogram other than the main subprogram; the Priority value is not associated with any task.",(0,r.yg)("br",null)),(0,r.yg)(s.A,{mdxType:"MarginText"},"15/5"),(0,r.yg)(g.A,{items:["AI12-0404-1"],mdxType:"MarginInfo"}),(0,r.yg)("p",null,"A ",(0,r.yg)("em",null,"task priority")," is an integer value that indicates a degree of urgency and is the basis for resolving competing demands of tasks for resources. Unless otherwise specified, whenever tasks compete for processors or other implementation-defined resources, the resources are allocated to the task with the highest priority value. The ",(0,r.yg)("em",null,"base priority")," of a task is the priority with which it was created, or to which it was later set by Dynamic_Priorities.Set_Priority (see ",(0,r.yg)("a",{href:"../AA-D/AA-D.5"},"D.5"),"). At all times, a task also has an ",(0,r.yg)("em",null,"active priority"),", which generally is its base priority unless it inherits a priority from other sources. ",(0,r.yg)("em",null,"Priority inheritance")," is the process by which the priority of a task or other entity (for example, a protected object; see ",(0,r.yg)("a",{href:"../AA-D/AA-D.3"},"D.3"),") is used in the evaluation of another task's active priority. ",(0,r.yg)("br",null)),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"15.a"),(0,r.yg)(a.A,{type:"aarm",aarm:"implementation-defined",mdxType:"Admonition"},(0,r.yg)("strong",null),"Implementation-defined execution resources.",(0,r.yg)("br",null))),(0,r.yg)(s.A,{mdxType:"MarginText"},"16/3"),(0,r.yg)(g.A,{items:["AI05-0229-1"],mdxType:"MarginInfo"}),(0,r.yg)("p",null,"The effect of specifying a Priority or Interrupt_Priority aspect for a protected type or ",(0,r.yg)("code",null,(0,r.yg)("a",{href:"../AA-9/AA-9.4#S0250"},"single_protected_declaration"))," is discussed in ",(0,r.yg)("a",{href:"../AA-D/AA-D.3"},"D.3"),".",(0,r.yg)("br",null)),(0,r.yg)(s.A,{mdxType:"MarginText"},"17/4"),(0,r.yg)(g.A,{items:["AI05-0229-1","AI12-0081-1"],mdxType:"MarginInfo"}),(0,r.yg)("p",null,"The ",(0,r.yg)("code",null,(0,r.yg)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," specified for the Priority or Interrupt_Priority aspect of a task type is evaluated each time an object of the task type is created (see ",(0,r.yg)("a",{href:"../AA-9/AA-9.1"},"9.1"),"). For the Priority aspect, the value of the ",(0,r.yg)("code",null,(0,r.yg)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," is converted to the subtype Priority; for the Interrupt_Priority aspect, this value is converted to the subtype Any_Priority. The priority value is then associated with the task object. ",(0,r.yg)("br",null)),(0,r.yg)(s.A,{mdxType:"MarginText"},"18/3"),(0,r.yg)(g.A,{items:["AI05-0229-1"],mdxType:"MarginInfo"}),(0,r.yg)("p",null,"Likewise, the priority value is associated with the environment task if the aspect is specified for the main subprogram.",(0,r.yg)("br",null)),(0,r.yg)(s.A,{mdxType:"MarginText"},"19/3"),(0,r.yg)(g.A,{items:["AI05-0229-1"],mdxType:"MarginInfo"}),(0,r.yg)("p",null,"The initial value of a task's base priority is specified by default or by means of a Priority or Interrupt_Priority aspect. [After a task is created, its base priority can be changed only by a call to Dynamic_Priorities.Set_Priority (see ",(0,r.yg)("a",{href:"../AA-D/AA-D.5"},"D.5"),").] The initial base priority of a task in the absence of an aspect is the base priority of the task that creates it at the time of creation (see ",(0,r.yg)("a",{href:"../AA-9/AA-9.1"},"9.1"),"). If the aspect Priority is not specified for the main subprogram, the initial base priority of the environment task is System.Default_Priority. [The task's active priority is used when the task competes for processors. Similarly, the task's active priority is used to determine the task's position in any queue when Priority_Queuing is specified (see ",(0,r.yg)("a",{href:"../AA-D/AA-D.4"},"D.4"),").]",(0,r.yg)("br",null)),(0,r.yg)(s.A,{mdxType:"MarginText"},"20/2"),(0,r.yg)(g.A,{items:["AI95-00357-01"],mdxType:"MarginInfo"}),(0,r.yg)("p",null,"At any time, the active priority of a task is the maximum of all the priorities the task is inheriting at that instant. For a task that is not held (see ",(0,r.yg)("a",{href:"../AA-D/AA-D.11"},"D.11"),"), its base priority is a source of priority inheritance unless otherwise specified for a particular task dispatching policy. Other sources of priority inheritance are specified under the following conditions: ",(0,r.yg)("br",null)),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"20.a"),(0,r.yg)(a.A,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,r.yg)("strong",null),"Other parts of the annex, e.g. ",(0,r.yg)("a",{href:"../AA-D/AA-D.11"},"D.11"),", define other sources of priority inheritance. ",(0,r.yg)("br",null))),(0,r.yg)(s.A,{mdxType:"MarginText"},"21/1"),(0,r.yg)(g.A,{items:["AI95-00092-01"],mdxType:"MarginInfo"}),(0,r.yg)("ul",null,(0,r.yg)("li",null,"{",(0,r.yg)("em",null,"8652/0072"),"}"," During activation, a task being activated inherits the active priority that its activator (see ",(0,r.yg)("a",{href:"../AA-9/AA-9.2"},"9.2"),") had at the time the activation was initiated.",(0,r.yg)("br",null)),(0,r.yg)(s.A,{mdxType:"MarginText"},"22/1"),(0,r.yg)(g.A,{items:["AI95-00092-01"],mdxType:"MarginInfo"}),(0,r.yg)("li",null,"{",(0,r.yg)("em",null,"8652/0072"),"}"," During rendezvous, the task accepting the entry call inherits the priority of the entry call (see ",(0,r.yg)("a",{href:"../AA-9/AA-9.5#Subclause_9.5.3"},"9.5.3")," and ",(0,r.yg)("a",{href:"../AA-D/AA-D.4"},"D.4"),").",(0,r.yg)("br",null)),(0,r.yg)(s.A,{mdxType:"MarginText"},"22.1/5"),(0,r.yg)(g.A,{items:["AI12-0276-1"],mdxType:"MarginInfo"}),(0,r.yg)("li",null,"While starting a protected action on a protected object when the FIFO_Spinning admission policy is in effect, a task inherits the ceiling priority of the protected object (see ",(0,r.yg)("a",{href:"../AA-9/AA-9.5"},"9.5"),", ",(0,r.yg)("a",{href:"../AA-D/AA-D.3"},"D.3"),", and ",(0,r.yg)("a",{href:"../AA-D/AA-D.4#Subclause_D.4.1"},"D.4.1"),").",(0,r.yg)("br",null))),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"22.a/5"),(0,r.yg)(g.A,{items:["AI12-0005-1","AI12-0276-1"],mdxType:"MarginInfo"}),(0,r.yg)(a.A,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,r.yg)("strong",null),"Priority inheritance is needed for FIFO_Spinning to ensure that lower priority tasks that initiate spin waiting earlier than other higher priority tasks continue to spin to ensure that they can be granted the resource when it becomes available in order to support FIFO ordering. Note that this rule only matters when tasks that can initiate a protected action on an object P can be on a different processor than P. In particular, this rule does not matter on a monoprocessor. ",(0,r.yg)("br",null))),(0,r.yg)(s.A,{mdxType:"MarginText"},"23/5"),(0,r.yg)(g.A,{items:["AI12-0404-1"],mdxType:"MarginInfo"}),(0,r.yg)("ul",null,(0,r.yg)("li",null,"While a task executes a protected action on a protected object, the task inherits the ceiling priority of the protected object (see ",(0,r.yg)("a",{href:"../AA-9/AA-9.5"},"9.5")," and ",(0,r.yg)("a",{href:"../AA-D/AA-D.3"},"D.3"),").",(0,r.yg)("br",null))),(0,r.yg)(s.A,{mdxType:"MarginText"},"24"),(0,r.yg)("p",null,"In all of these cases, the priority ceases to be inherited as soon as the condition calling for the inheritance no longer exists.",(0,r.yg)("br",null)),(0,r.yg)("h4",{id:"implementation-requirements"},"Implementation Requirements"),(0,r.yg)(s.A,{mdxType:"MarginText"},"25"),(0,r.yg)("p",null,"The range of System.Interrupt_Priority shall include at least one value.",(0,r.yg)("br",null)),(0,r.yg)(s.A,{mdxType:"MarginText"},"26"),(0,r.yg)("p",null,"The range of System.Priority shall include at least 30 values.",(0,r.yg)("br",null)),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"27"),(0,r.yg)(a.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 1   The priority expression can include references to discriminants of the enclosing type.",(0,r.yg)("br",null))),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"28"),(0,r.yg)(a.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 2   It is a consequence of the active priority rules that at the point when a task stops inheriting a priority from another source, its active priority is re-evaluated. This is in addition to other instances described in this Annex for such re-evaluation.",(0,r.yg)("br",null))),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"29/5"),(0,r.yg)(g.A,{items:["AI05-0248-1","AI12-0440-1"],mdxType:"MarginInfo"}),(0,r.yg)(a.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 3   An implementation can provide a nonstandard mode in which tasks inherit priorities under conditions other than those specified above. ",(0,r.yg)("br",null))),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"29.a/3"),(0,r.yg)(g.A,{items:["AI05-0229-1"],mdxType:"MarginInfo"}),(0,r.yg)(a.A,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,r.yg)("strong",null),"The use of a Priority or Interrupt_Priority aspect does not require the package System to be named in a ",(0,r.yg)("code",null,(0,r.yg)("a",{href:"../AA-10/AA-10.1#S0294"},"with_clause"))," for the enclosing ",(0,r.yg)("code",null,(0,r.yg)("a",{href:"../AA-10/AA-10.1#S0286"},"compilation_unit")),". ",(0,r.yg)("br",null))),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)("h4",{id:"extensions-to-ada-83"},"Extensions to Ada 83")),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"29.b"),(0,r.yg)(a.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The priority of a task is per-object and not per-type.",(0,r.yg)("br",null))),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"29.c"),(0,r.yg)(a.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Priorities need not be static anymore (except for the main subprogram).",(0,r.yg)("br",null))),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)("h4",{id:"wording-changes-from-ada-83"},"Wording Changes from Ada 83")),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"29.d"),(0,r.yg)(a.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The description of the Priority pragma has been moved to this annex.",(0,r.yg)("br",null))),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)("h4",{id:"wording-changes-from-ada-95"},"Wording Changes from Ada 95")),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"29.e/2"),(0,r.yg)(g.A,{items:["AI95-00092-01"],mdxType:"MarginInfo"}),(0,r.yg)(a.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"{",(0,r.yg)("em",null,"8652/0072"),"}"," ",(0,r.yg)("strong",null,"Corrigendum:")," Clarified that dynamic priority changes are not transitive - that is, they don't apply to tasks that are being activated by or in rendezvous with the task that had its priority changed.",(0,r.yg)("br",null))),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"29.f/2"),(0,r.yg)(g.A,{items:["AI95-00357-01"],mdxType:"MarginInfo"}),(0,r.yg)(a.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Generalized the definition of priority inheritance to take into account the differences between the existing and new dispatching policies. ",(0,r.yg)("br",null))),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)("h4",{id:"extensions-to-ada-2005"},"Extensions to Ada 2005")),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"29.g/3"),(0,r.yg)(g.A,{items:["AI05-0229-1"],mdxType:"MarginInfo"}),(0,r.yg)(a.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Aspects Priority and Interrupt_Priority are new; ",(0,r.yg)("code",null,(0,r.yg)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma")),"s Priority and Interrupt_Priority are now obsolescent. ",(0,r.yg)("br",null))),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)("h4",{id:"wording-changes-from-ada-2012"},"Wording Changes from Ada 2012")),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"29.h/4"),(0,r.yg)(g.A,{items:["AI12-0081-1"],mdxType:"MarginInfo"}),(0,r.yg)(a.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,r.yg)("strong",null,"Corrigendum:")," Clarified when the Priority and Interrupt_Priority aspect expressions are evaluated.",(0,r.yg)("br",null))),(0,r.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,r.yg)(s.A,{mdxType:"MarginText"},"29.i/5"),(0,r.yg)(g.A,{items:["AI12-0276-1"],mdxType:"MarginInfo"}),(0,r.yg)(a.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Added an additional case of priority inheritance when the new admission policy FIFO_Spinning is in effect. ",(0,r.yg)("br",null))))}c.isMDXComponent=!0}}]);