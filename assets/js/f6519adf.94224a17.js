"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[2469],{5611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>b,frontMatter:()=>k,metadata:()=>A,toc:()=>x});var i=n(1716),a=n(3050),o=n(3989),r=n(7318),l=n(4768),s=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&h(e,n,t[n]);if(m)for(var n of m(t))p.call(t,n)&&h(e,n,t[n]);return e};const k={sidebar_position:158},f="D.4 Entry Queuing Policies",A={unversionedId:"arm/AA-D/AA-D.4",id:"arm/AA-D/AA-D.4",title:"D.4 Entry Queuing Policies",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-D/AA-D.4.mdx",sourceDirName:"arm/AA-D",slug:"/arm/AA-D/AA-D.4",permalink:"/docs/arm/AA-D/AA-D.4",draft:!1,tags:[],version:"current",sidebarPosition:158,frontMatter:{sidebar_position:158},sidebar:"referenceManualSidebar",previous:{title:"D.3 Priority Ceiling Locking",permalink:"/docs/arm/AA-D/AA-D.3"},next:{title:"D.5 Dynamic Priorities",permalink:"/docs/arm/AA-D/AA-D.5"}},g={},x=[{value:"Syntax",id:"syntax",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Post-Compilation Rules",id:"post-compilation-rules",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Legality Rules",id:"legality-rules-1",level:4},{value:"Post-Compilation Rules",id:"post-compilation-rules-1",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics-1",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4},{value:"D.4.1  Admission Policies",id:"d41--admission-policies",level:2},{value:"Syntax",id:"syntax-1",level:4},{value:"Legality Rules",id:"legality-rules-2",level:4},{value:"Post-Compilation Rules",id:"post-compilation-rules-2",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics-2",level:4},{value:"Implementation Permissions",id:"implementation-permissions-1",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012-1",level:4}],T={toc:x};function b(e){var t,n=e,{components:s}=n,h=((e,t)=>{var n={};for(var i in e)c.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&m)for(var i of m(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=y(y({},T),h),d(t,u({components:s,mdxType:"MDXLayout"}))),(0,i.kt)("h1",y({},{id:"d4-entry-queuing-policies"}),"D.4 Entry Queuing Policies"),(0,i.kt)("admonition",y({},{type:"warning"}),(0,i.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,i.kt)("a",y({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,i.kt)(r.Z,{mdxType:"MarginText"},"1/5"),(0,i.kt)(l.Z,{items:["AI95-00068-01","AI05-0299-1","AI12-0324-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"8652/0074"),"}"," [ This subclause specifies a mechanism for a user to choose an entry ",(0,i.kt)("em",null,"queuing policy"),". It also defines three  such policies. Other policies are implementation defined.] ",(0,i.kt)("br",null)),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"1.a"),(0,i.kt)(a.Z,{type:"aarm",aarm:"implementation-defined",mdxType:"Admonition"},(0,i.kt)("strong",null),"Implementation-defined queuing policies.",(0,i.kt)("br",null))),(0,i.kt)("h4",y({},{id:"syntax"}),"Syntax"),(0,i.kt)(r.Z,{mdxType:"MarginText"},"2"),(0,i.kt)("p",null,"The form of a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Queuing_Policy is as follows: ",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"MarginText"},"3"),(0,i.kt)("p",null,"  ",(0,i.kt)("strong",null,"pragma")," Queuing_Policy(",(0,i.kt)("em",null,"policy_"),(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"); ",(0,i.kt)("br",null)),(0,i.kt)("h4",y({},{id:"legality-rules"}),"Legality Rules"),(0,i.kt)(r.Z,{mdxType:"MarginText"},"4/5"),(0,i.kt)(l.Z,{items:["AI12-0183-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"The ",(0,i.kt)("em",null,"policy_"),(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," shall be either FIFO_Queuing, Ordered_FIFO_Queuing, Priority_Queuing or an implementation-defined ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),".",(0,i.kt)("br",null)),(0,i.kt)("h4",y({},{id:"post-compilation-rules"}),"Post-Compilation Rules"),(0,i.kt)(r.Z,{mdxType:"MarginText"},"5"),(0,i.kt)("p",null,"A Queuing_Policy pragma is a configuration pragma.",(0,i.kt)("br",null)),(0,i.kt)("h4",y({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,i.kt)(r.Z,{mdxType:"MarginText"},"6"),(0,i.kt)("p",null,"[A ",(0,i.kt)("em",null,"queuing policy")," governs the order in which tasks are queued for entry service, and the order in which different entry queues are considered for service.] The queuing policy is specified by a Queuing_Policy pragma. ",(0,i.kt)("br",null)),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"6.a"),(0,i.kt)(a.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,i.kt)("strong",null),"The queuing policy includes entry queuing order, the choice among open alternatives of a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0270"},"selective_accept")),", and the choice among queued entry calls of a protected object when more than one ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.5#S0262"},"entry_barrier"))," ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-4/AA-4.5#S0150"},"condition"))," is True. ",(0,i.kt)("br",null))),(0,i.kt)(r.Z,{mdxType:"MarginText"},"7/5"),(0,i.kt)(l.Z,{items:["AI95-00355-01","AI12-0163-1","AI12-0183-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"Three  queuing policies, FIFO_Queuing, Ordered_FIFO_Queuing, and Priority_Queuing, are language defined. If no Queuing_Policy pragma applies to any of the program units comprising the partition, the queuing policy for that partition is FIFO_Queuing. The rules for the FIFO_Queuing  policy are specified in ",(0,i.kt)("a",{href:"../AA-9/AA-9.5#Subclause_9.5.3"},"9.5.3")," and ",(0,i.kt)("a",{href:"../AA-9/AA-9.7#Subclause_9.7.1"},"9.7.1"),".",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"MarginText"},"7.1/5"),(0,i.kt)(l.Z,{items:["AI12-0163-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"The Ordered_FIFO_Queuing policy is defined as follows:",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"MarginText"},"7.2/5"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Calls are selected on a given entry queue in order of arrival.",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"MarginText"},"7.3/5"),(0,i.kt)("li",null,"When more than one condition of an ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.5#S0262"},"entry_barrier"))," of a protected object becomes True, and more than one of the respective queues is nonempty, the call that arrived first is selected.",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"MarginText"},"7.4/5"),(0,i.kt)("li",null,"If the expiration time of two or more open ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0274"},"delay_alternative")),"s is the same and no other ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0273"},"accept_alternative")),"s are open, the ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," of the ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0274"},"delay_alternative"))," that is first in textual order in the ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0270"},"selective_accept"))," is executed.",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"MarginText"},"7.5/5"),(0,i.kt)("li",null,"When more than one alternative of a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0270"},"selective_accept"))," is open and has queued calls, the alternative whose queue has the call that arrived first is selected. ",(0,i.kt)("br",null))),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"7.a/5"),(0,i.kt)(a.Z,{type:"aarm",aarm:"implementation-note",mdxType:"Admonition"},(0,i.kt)("strong",null),"A possible implementation for this policy would be to assign a sequence number to each queued entry call, where the sequence number is incremented globally across all queues associated with the protected object or ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0270"},"selective_accept")),". ",(0,i.kt)("br",null))),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"7.b/5"),(0,i.kt)(a.Z,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,i.kt)("strong",null),"It would have been marginally easier to use textual order for the case when multiple queues are selectable. But textual order can lead to unfair queue servicing, since the queues in earlier textual order will end up starving the later ones if calls arrive fast enough. Applying arrival first as the selector provides fairness for this policy. ",(0,i.kt)("br",null))),(0,i.kt)(r.Z,{mdxType:"MarginText"},"8"),(0,i.kt)("p",null,"The Priority_Queuing policy is defined as follows:",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"MarginText"},"9"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"The calls to an entry [(including a member of an entry family)] are queued in an order consistent with the priorities of the calls. The ",(0,i.kt)("em",null,"priority of an entry call")," is initialized from the active priority of the calling task at the time the call is made, but can change later. Within the same priority, the order is consistent with the calling (or requeuing, or priority setting) time (that is, a FIFO order).",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"MarginText"},"10/1"),(0,i.kt)(l.Z,{items:["AI95-00205-01"],mdxType:"MarginInfo"}),(0,i.kt)("li",null,"{",(0,i.kt)("em",null,"8652/0075"),"}"," After a call is first queued, changes to the active priority of a task do not affect the priority of the call, unless the base priority of the task is set while the task is blocked on an entry call.",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"MarginText"},"11"),(0,i.kt)("li",null,"When the base priority of a task is set (see ",(0,i.kt)("a",{href:"../AA-D/AA-D.5"},"D.5"),"), if the task is blocked on an entry call, and the call is queued, the priority of the call is updated to the new active priority of the calling task. This causes the call to be removed from and then reinserted in the queue at the new active priority. ",(0,i.kt)("br",null))),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"11.a"),(0,i.kt)(a.Z,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,i.kt)("strong",null),"A task is blocked on an entry call if the entry call is simple, conditional, or timed. If the call came from the ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0282"},"triggering_statement"))," of an ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0280"},"asynchronous_select")),", or a requeue thereof, then the task is not blocked on that call; such calls do not have their priority updated. Thus, there can exist many queued calls from a given task (caused by many nested ATC's), but a task can be blocked on only one call at a time.",(0,i.kt)("br",null))),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"11.b"),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"A previous version of Ada 9X required queue reordering in the ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0280"},"asynchronous_select"))," case as well. If the call corresponds to a \u201csynchronous\u201d entry call, then the task is blocked while queued, and it makes good sense to move it up in the queue if its priority is raised.",(0,i.kt)("br",null))),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"11.c"),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"However, if the entry call is \u201casynchronous\u201d, that is, it is due to an ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0280"},"asynchronous_select"))," whose ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0282"},"triggering_statement"))," is an entry call, then the task is not waiting for this entry call, so the placement of the entry call on the queue is irrelevant to the rate at which the task proceeds.",(0,i.kt)("br",null))),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"11.d"),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Furthermore, when an entry is used for ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0280"},"asynchronous_select")),"s, it is almost certain to be a \u201cbroadcast\u201d entry or have only one caller at a time. For example, if the entry is used to notify tasks of a mode switch, then all tasks on the entry queue would be signaled when the mode changes. Similarly, if it is indicating some interrupting event such as a control-C, all tasks sensitive to the interrupt will want to be informed that the event occurred. Hence, the order on such a queue is essentially irrelevant.",(0,i.kt)("br",null))),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"11.e"),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Given the above, it seems an unnecessary semantic and implementation complexity to specify that asynchronous queued calls are moved in response to dynamic priority changes. Furthermore, it is somewhat inconsistent, since the call was originally queued based on the active priority of the task, but dynamic priority changes are changing the base priority of the task, and only indirectly the active priority. We say explicitly that asynchronous queued calls are not affected by normal changes in active priority during the execution of an ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0283"},"abortable_part")),". Saying that, if a change in the base priority affects the active priority, then we do want the calls reordered, would be inconsistent. It would also require the implementation to maintain a readily accessible list of all queued calls which would not otherwise be necessary.",(0,i.kt)("br",null))),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"11.f"),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Several rules were removed or simplified when we changed the rules so that calls due to ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0280"},"asynchronous_select")),"s are never moved due to intervening changes in active priority, be they due to protected actions, some other priority inheritance, or changes in the base priority. ",(0,i.kt)("br",null))),(0,i.kt)(r.Z,{mdxType:"MarginText"},"12"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"When more than one ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-4/AA-4.5#S0150"},"condition"))," of an ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.5#S0262"},"entry_barrier"))," of a protected object becomes True, and more than one of the respective queues is nonempty, the call with the highest priority is selected. If more than one such call has the same priority, the call that is queued on the entry whose declaration is first in textual order in the ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.4#S0251"},"protected_definition"))," is selected. For members of the same entry family, the one with the lower family index is selected.",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"MarginText"},"13"),(0,i.kt)("li",null,"If the expiration time of two or more open ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0274"},"delay_alternative")),"s is the same and no other ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0273"},"accept_alternative")),"s are open, the ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," of the ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0274"},"delay_alternative"))," that is first in textual order in the ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0270"},"selective_accept"))," is executed.",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"MarginText"},"14"),(0,i.kt)("li",null,"When more than one alternative of a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0270"},"selective_accept"))," is open and has queued calls, an alternative whose queue has the highest-priority call at its head is selected. If two or more open alternatives have equal-priority queued calls, then a call on the entry in the ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0273"},"accept_alternative"))," that is first in textual order in the ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.7#S0270"},"selective_accept"))," is selected.",(0,i.kt)("br",null))),(0,i.kt)("h4",y({},{id:"implementation-permissions"}),"Implementation Permissions"),(0,i.kt)(r.Z,{mdxType:"MarginText"},"15/5"),(0,i.kt)(l.Z,{items:["AI95-00256-01","AI12-0444-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"Implementations are allowed to define other queuing policies, but are not required to  support specifying more than one queuing policy per partition. ",(0,i.kt)("br",null)),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"15.a.1/2"),(0,i.kt)(l.Z,{items:["AI95-00069-01","AI95-00256-01"],mdxType:"MarginInfo"}),(0,i.kt)(a.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,i.kt)("strong",null),"{",(0,i.kt)("em",null,"8652/0116"),"}"," This rule is really redundant, as ",(0,i.kt)("a",{href:"../AA-10/AA-10.1#Subclause_10.1.5"},"10.1.5")," allows an implementation to limit the use of configuration pragmas to an empty environment. In that case, there would be no way to have multiple policies in a partition. ",(0,i.kt)("br",null))),(0,i.kt)(r.Z,{mdxType:"MarginText"},"15.1/2"),(0,i.kt)(l.Z,{items:["AI95-00188-02"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"Implementations are allowed to defer the reordering of entry queues following a change of base priority of a task blocked on the entry call if it is not practical to reorder the queue immediately. ",(0,i.kt)("br",null)),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"15.a.2/2"),(0,i.kt)(a.Z,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,i.kt)("strong",null),"Priority change is immediate, but the effect of the change on entry queues can be deferred. That is necessary in order to implement priority changes on top of a non-Ada kernel. ",(0,i.kt)("br",null))),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"15.a.3/2"),(0,i.kt)(a.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,i.kt)("strong",null),"The reordering should occur as soon as the blocked task can itself perform the reinsertion into the entry queue. ",(0,i.kt)("br",null))),(0,i.kt)("h4",y({},{id:"implementation-advice"}),"Implementation Advice"),(0,i.kt)(r.Z,{mdxType:"MarginText"},"16"),(0,i.kt)("p",null,"The implementation should use names that end with \u201c_Queuing\u201d for implementation-defined queuing policies.",(0,i.kt)("br",null)),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"16.a/2"),(0,i.kt)(a.Z,{type:"aarm",aarm:"implementation-advice",mdxType:"Admonition"},(0,i.kt)("strong",null),"Names that end with \u201c_Queuing\u201d should be used for implementation-defined queuing policies.",(0,i.kt)("br",null))),(0,i.kt)("h4",y({},{id:"static-semantics"}),"Static Semantics"),(0,i.kt)(r.Z,{mdxType:"MarginText"},"17/5"),(0,i.kt)(l.Z,{items:["AI12-0164-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"For a task type (including the anonymous type of a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.1#S0245"},"single_task_declaration")),"), protected type (including the anonymous type of a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.4#S0250"},"single_protected_declaration")),"), or an ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-9/AA-9.5#S0257"},"entry_declaration")),", the following language-defined representation aspect may be specified:",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"MarginText"},"18/5"),(0,i.kt)("dt",null,(0,i.kt)("br",null),"Max_Entry_Queue_Length"),(0,i.kt)("dl",null,(0,i.kt)("dd",null,"The type of aspect Max_Entry_Queue_Length is Integer.",(0,i.kt)("br",null))),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"18.a/5"),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,i.kt)("strong",null,"Aspect Description for "),(0,i.kt)("strong",null,"Max_Entry_Queue_Length: "),"The maximum entry queue length for a task type, protected type, or entry.",(0,i.kt)("br",null))),(0,i.kt)(r.Z,{mdxType:"MarginText"},"19/5"),(0,i.kt)("dt",null,(0,i.kt)("br",null)),(0,i.kt)("dl",null,(0,i.kt)("dd",null,"If directly specified, the aspect_definition shall be a static expression no less than -1. If not specified, the aspect has value -1 (representing no additional restriction on queue length). ",(0,i.kt)("br",null))),(0,i.kt)("h4",y({},{id:"legality-rules-1"}),"Legality Rules"),(0,i.kt)(r.Z,{mdxType:"MarginText"},"20/5"),(0,i.kt)(l.Z,{items:["AI12-0164-1","AI12-0388-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"If the Max_Entry_Queue_Length aspect for a type has a nonnegative value, the Max_Entry_Queue_Length aspect for every individual entry of that type shall not be greater than the value of the aspect for the type. The Max_Entry_Queue_Length aspect of a type is nonoverridable (see ",(0,i.kt)("a",{href:"../AA-13/AA-13.1#Subclause_13.1.1"},"13.1.1"),").",(0,i.kt)("br",null)),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"20.a/5"),(0,i.kt)(a.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,i.kt)("strong",null),"Aspect Max_Entry_Queue_Length can specify less than the partition-wide or type-wide default, but it can't expand the length of a queue. ",(0,i.kt)("br",null))),(0,i.kt)("h4",y({},{id:"post-compilation-rules-1"}),"Post-Compilation Rules"),(0,i.kt)(r.Z,{mdxType:"MarginText"},"21/5"),(0,i.kt)(l.Z,{items:["AI12-0164-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"If a restriction Max_Entry_Queue_Length applies to a partition, any value specified for the Max_Entry_Queue_Length aspect specified for the declaration of a type or entry in the partition shall not be greater than the value of the restriction.",(0,i.kt)("br",null)),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"21.a/5"),(0,i.kt)(a.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,i.kt)("strong",null),"13.12(6) says that the restriction value has to be static, so this is statically checkable. But the restriction does not have to be in the same compilation as the aspect, so the check cannot, in general, be done until link time. ",(0,i.kt)("br",null))),(0,i.kt)("h4",y({},{id:"dynamic-semantics-1"}),"Dynamic Semantics"),(0,i.kt)(r.Z,{mdxType:"MarginText"},"22/5"),(0,i.kt)(l.Z,{items:["AI12-0164-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"If a nonconfirming value is specified for Max_Entry_Queue_Length for a type, and an entry call or requeue would cause the queue for any entry of the type to become longer than the specified value, then Program_Error is raised at the point of the call or requeue.",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"MarginText"},"23/5"),(0,i.kt)(l.Z,{items:["AI12-0164-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"If a nonconfirming value is specified for Max_Entry_Queue_Length for an entry, and an entry call or requeue would cause the queue for an entry to become longer than the specified value, then Program_Error is raised at the point of the call or requeue. ",(0,i.kt)("br",null)),(0,i.kt)("h4",y({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95"),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"23.a/2"),(0,i.kt)(l.Z,{items:["AI95-00068-01"],mdxType:"MarginInfo"}),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"{",(0,i.kt)("em",null,"8652/0074"),"}"," ",(0,i.kt)("strong",null,"Corrigendum:")," Corrected the number of queuing policies defined.",(0,i.kt)("br",null))),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"23.b/2"),(0,i.kt)(l.Z,{items:["AI95-00205-01"],mdxType:"MarginInfo"}),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"{",(0,i.kt)("em",null,"8652/0075"),"}"," ",(0,i.kt)("strong",null,"Corrigendum:")," Corrected so that a call of Set_Priority in an abortable part does not change the priority of the triggering entry call.",(0,i.kt)("br",null))),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"23.c/2"),(0,i.kt)(l.Z,{items:["AI95-00188-02"],mdxType:"MarginInfo"}),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Added a permission to defer queue reordering when the base priority of a task is changed. This is a counterpart to stronger requirements on the implementation of priority change.",(0,i.kt)("br",null))),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"23.d/2"),(0,i.kt)(l.Z,{items:["AI95-00256-01"],mdxType:"MarginInfo"}),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Clarified that an implementation need support only one queuing policy (of any kind, language-defined or otherwise) per partition.",(0,i.kt)("br",null))),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"23.e/2"),(0,i.kt)(l.Z,{items:["AI95-00355-01"],mdxType:"MarginInfo"}),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Fixed wording to make clear that ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," never appears inside of a unit; rather it \u201capplies to\u201d the unit. ",(0,i.kt)("br",null))),(0,i.kt)("h4",y({},{id:"extensions-to-ada-2012"}),"Extensions to Ada 2012"),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"23.f/5"),(0,i.kt)(l.Z,{items:["AI12-0163-1"],mdxType:"MarginInfo"}),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Defined the new queuing policy Ordered_FIFO_Queuing.",(0,i.kt)("br",null))),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"23.g/5"),(0,i.kt)(l.Z,{items:["AI12-0164-1"],mdxType:"MarginInfo"}),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Defined the new aspect Max_Enty_Queue_Length. ",(0,i.kt)("br",null))),(0,i.kt)("a",{id:"Subclause_D.4.1"}),(0,i.kt)("h2",y({},{id:"d41--admission-policies"}),"D.4.1  Admission Policies"),(0,i.kt)(r.Z,{mdxType:"MarginText"},"1/5"),(0,i.kt)(l.Z,{items:["AI12-0276-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"[This subclause specifies a mechanism for a user to choose an admission policy. It also defines one such policy. Other policies are implementation defined.]",(0,i.kt)("br",null)),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"1.a.1/5"),(0,i.kt)(a.Z,{type:"aarm",aarm:"implementation-defined",mdxType:"Admonition"},(0,i.kt)("strong",null),"Implementation-defined admission policies.",(0,i.kt)("br",null))),(0,i.kt)("h4",y({},{id:"syntax-1"}),"Syntax"),(0,i.kt)(r.Z,{mdxType:"MarginText"},"2/5"),(0,i.kt)(l.Z,{items:["AI12-0276-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"The form of a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Admission_Policy is as follows:",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"MarginText"},"3/5"),(0,i.kt)("p",null,"  ",(0,i.kt)("strong",null,"pragma")," Admission_Policy (",(0,i.kt)("em",null,"policy_"),(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"); ",(0,i.kt)("br",null)),(0,i.kt)("h4",y({},{id:"legality-rules-2"}),"Legality Rules"),(0,i.kt)(r.Z,{mdxType:"MarginText"},"4/5"),(0,i.kt)(l.Z,{items:["AI12-0276-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"The ",(0,i.kt)("em",null,"policy_"),(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," shall be either FIFO_Spinning or an implementation-defined identifier. ",(0,i.kt)("br",null)),(0,i.kt)("h4",y({},{id:"post-compilation-rules-2"}),"Post-Compilation Rules"),(0,i.kt)(r.Z,{mdxType:"MarginText"},"5/5"),(0,i.kt)(l.Z,{items:["AI12-0276-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"An Admission_Policy pragma is a configuration pragma.",(0,i.kt)("br",null)),(0,i.kt)("h4",y({},{id:"dynamic-semantics-2"}),"Dynamic Semantics"),(0,i.kt)(r.Z,{mdxType:"MarginText"},"6/5"),(0,i.kt)(l.Z,{items:["AI12-0276-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"An admission policy governs the order in which competing tasks are evaluated for acquiring the execution resource associated with a protected object. The admission policy is specified by an Admission_Policy pragma.",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"MarginText"},"7/5"),(0,i.kt)(l.Z,{items:["AI12-0276-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"One admission policy, FIFO_Spinning, is language defined. If FIFO_Spinning is in effect, and starting a protected action on a protected object involves busy-waiting, then calls are selected for acquiring the execution resource of the protected object in the order in which the busy-wait was initiated; otherwise the FIFO_Spinning policy has no effect. If no Admission_Policy pragma applies to any of the program units in the partition, the admission policy for that partition is implementation defined.",(0,i.kt)("br",null)),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"7.a/5"),(0,i.kt)(l.Z,{items:["AI12-0005-1"],mdxType:"MarginInfo"}),(0,i.kt)(a.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,i.kt)("strong",null),"Busy-waiting might be used for protected objects that can be called from tasks running on other processors than the one the protected object is on. It is unnecessary if all of the tasks that can call a protected object are on the same processor as the object; in particular, it would not be used on a monoprocessor. Aspect CPU (see ",(0,i.kt)("a",{href:"../AA-D/AA-D.16"},"D.16"),") can be used to ensure that busy-waiting is not needed. ",(0,i.kt)("br",null))),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"7.b/5"),(0,i.kt)(a.Z,{type:"aarm",aarm:"implementation-note",mdxType:"Admonition"},(0,i.kt)("strong",null),"A possible implementation for this policy would be to apply the abstraction of a ticketing system by assigning two sequence number values to each protected object. One sequence number represents the next available ticket number, and the other sequence number represents the ticket number currently being serviced by the protected object. The next available ticket number is incremented and assigned to a task when the task initiates a busy-wait for acquiring the execution resource associated with the protected object. The ticket number currently being serviced is incremented when a task releases this execution resource. As part of acquiring the execution resource, a task busy-waits until its assigned ticket number equals the protected object's value for the ticket number currently being serviced. While a task busy-waits, it monitors the active priority of the protected object in order to inherit any modifications to the protected object's active priority. ",(0,i.kt)("br",null))),(0,i.kt)("h4",y({},{id:"implementation-permissions-1"}),"Implementation Permissions"),(0,i.kt)(r.Z,{mdxType:"MarginText"},"8/5"),(0,i.kt)(l.Z,{items:["AI12-0276-1","AI12-0444-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"Implementations are allowed to define other admission policies, but are not required to support specifying more than one admission policy per partition.",(0,i.kt)("br",null)),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"8.a/5"),(0,i.kt)(a.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,i.kt)("strong",null),"This rule is in fact redundant, as ",(0,i.kt)("a",{href:"../AA-10/AA-10.1#Subclause_10.1.5"},"10.1.5")," allows an implementation to limit the use of configuration pragmas to an empty environment. In that case, there would be no way to have multiple policies in a partition. ",(0,i.kt)("br",null))),(0,i.kt)("h4",y({},{id:"extensions-to-ada-2012-1"}),"Extensions to Ada 2012"),(0,i.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(r.Z,{mdxType:"MarginText"},"8.b/5"),(0,i.kt)(l.Z,{items:["AI12-0276-1"],mdxType:"MarginInfo"}),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Admission Policies and the specific policy FIFO_Spinning are new. ",(0,i.kt)("br",null))))}b.isMDXComponent=!0}}]);