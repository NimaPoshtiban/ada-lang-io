"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[2128],{23888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>y,default:()=>A,frontMatter:()=>m,metadata:()=>d,toc:()=>u});var a=n(58168),i=(n(96540),n(15680)),o=n(20793),r=n(91435),s=(n(21432),n(79162)),l=n(34421);const m={sidebar_position:160},y="D.6 Preemptive Abort",d={unversionedId:"arm/AA-D/AA-D.6",id:"arm/AA-D/AA-D.6",title:"D.6 Preemptive Abort",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-D/AA-D.6.mdx",sourceDirName:"arm/AA-D",slug:"/arm/AA-D/AA-D.6",permalink:"/docs/arm/AA-D/AA-D.6",draft:!1,tags:[],version:"current",sidebarPosition:160,frontMatter:{sidebar_position:160},sidebar:"referenceManualSidebar",previous:{title:"D.5 Dynamic Priorities",permalink:"/docs/arm/AA-D/AA-D.5"},next:{title:"D.7 Tasking Restrictions",permalink:"/docs/arm/AA-D/AA-D.7"}},c={},u=[{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Documentation Requirements",id:"documentation-requirements",level:4},{value:"Metrics",id:"metrics",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4}],g={toc:u},p="wrapper";function A(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"d6-preemptive-abort"},"D.6 Preemptive Abort"),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,i.yg)(s.A,{mdxType:"MarginText"},"1/3"),(0,i.yg)(l.A,{items:["AI05-0299-1"],mdxType:"MarginInfo"}),(0,i.yg)("p",null,"[This subclause specifies requirements on the immediacy with which an aborted construct is completed.] ",(0,i.yg)("br",null)),(0,i.yg)("h4",{id:"dynamic-semantics"},"Dynamic Semantics"),(0,i.yg)(s.A,{mdxType:"MarginText"},"2"),(0,i.yg)("p",null,"On a system with a single processor, an aborted construct is completed immediately at the first point that is outside the execution of an abort-deferred operation.",(0,i.yg)("br",null)),(0,i.yg)("h4",{id:"documentation-requirements"},"Documentation Requirements"),(0,i.yg)(s.A,{mdxType:"MarginText"},"3"),(0,i.yg)("p",null,"On a multiprocessor, the implementation shall document any conditions that cause the completion of an aborted construct to be delayed later than what is specified for a single processor. ",(0,i.yg)("br",null)),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(s.A,{mdxType:"MarginText"},"3.a/2"),(0,i.yg)(o.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,i.yg)("em",null,"This paragraph was deleted."),(0,i.yg)("br",null))),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(s.A,{mdxType:"MarginText"},"3.b/2"),(0,i.yg)(o.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,i.yg)("strong",null,"Documentation Requirement: "),"On a multiprocessor, any conditions that cause the completion of an aborted construct to be delayed later than what is specified for a single processor.",(0,i.yg)("br",null))),(0,i.yg)("h4",{id:"metrics"},"Metrics"),(0,i.yg)(s.A,{mdxType:"MarginText"},"4"),(0,i.yg)("p",null,"The implementation shall document the following metrics: ",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"5"),(0,i.yg)("ul",null,(0,i.yg)("li",null,"The execution time, in processor clock cycles, that it takes for an ",(0,i.yg)("code",null,(0,i.yg)("a",{href:"../AA-9/AA-9.8#S0284"},"abort_statement"))," to cause the completion of the aborted task. This is measured in a situation where a task T2 preempts task T1 and aborts T1. T1 does not have any finalization code. T2 shall verify that T1 has terminated, by means of the Terminated attribute.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"6"),(0,i.yg)("li",null,"On a multiprocessor, an upper bound in seconds, on the time that the completion of an aborted task can be delayed beyond the point that it is required for a single processor.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"7/2"),(0,i.yg)(l.A,{items:["AI95-00114-01"],mdxType:"MarginInfo"}),(0,i.yg)("li",null,"An upper bound on the execution time of an ",(0,i.yg)("code",null,(0,i.yg)("a",{href:"../AA-9/AA-9.7#S0280"},"asynchronous_select")),", in processor clock cycles. This is measured between a point immediately before a task T1 executes a protected operation Pr.Set that makes the ",(0,i.yg)("code",null,(0,i.yg)("a",{href:"../AA-4/AA-4.5#S0150"},"condition"))," of an ",(0,i.yg)("code",null,(0,i.yg)("a",{href:"../AA-9/AA-9.5#S0262"},"entry_barrier"))," Pr.Wait True, and the point where task T2 resumes execution immediately after an entry call to Pr.Wait in an ",(0,i.yg)("code",null,(0,i.yg)("a",{href:"../AA-9/AA-9.7#S0280"},"asynchronous_select")),". T1 preempts T2 while T2 is executing the abortable part, and then blocks itself so that T2 can execute. The execution time of T1 is measured separately, and subtracted.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"8"),(0,i.yg)("li",null,"An upper bound on the execution time of an ",(0,i.yg)("code",null,(0,i.yg)("a",{href:"../AA-9/AA-9.7#S0280"},"asynchronous_select")),", in the case that no asynchronous transfer of control takes place. This is measured between a point immediately before a task executes the ",(0,i.yg)("code",null,(0,i.yg)("a",{href:"../AA-9/AA-9.7#S0280"},"asynchronous_select"))," with a nonnull abortable part, and the point where the task continues execution immediately after it. The execution time of the abortable part is subtracted. ",(0,i.yg)("br",null))),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(s.A,{mdxType:"MarginText"},"8.a/2"),(0,i.yg)(o.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,i.yg)("strong",null,"Documentation Requirement: "),"The metrics for aborts.",(0,i.yg)("br",null))),(0,i.yg)("h4",{id:"implementation-advice"},"Implementation Advice"),(0,i.yg)(s.A,{mdxType:"MarginText"},"9"),(0,i.yg)("p",null,"Even though the ",(0,i.yg)("code",null,(0,i.yg)("a",{href:"../AA-9/AA-9.8#S0284"},"abort_statement"))," is included in the list of potentially blocking operations (see ",(0,i.yg)("a",{href:"../AA-9/AA-9.5#Subclause_9.5.1"},"9.5.1"),"), it is recommended that this statement be implemented in a way that never requires the task executing the ",(0,i.yg)("code",null,(0,i.yg)("a",{href:"../AA-9/AA-9.8#S0284"},"abort_statement"))," to block.",(0,i.yg)("br",null)),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(s.A,{mdxType:"MarginText"},"9.a/2"),(0,i.yg)(o.A,{type:"aarm",aarm:"implementation-advice",mdxType:"Admonition"},(0,i.yg)("strong",null),"The ",(0,i.yg)("code",null,(0,i.yg)("a",{href:"../AA-9/AA-9.8#S0284"},"abort_statement"))," should not require the task executing the statement to block.",(0,i.yg)("br",null))),(0,i.yg)(s.A,{mdxType:"MarginText"},"10"),(0,i.yg)("p",null,"On a multi-processor, the delay associated with aborting a task on another processor should be bounded; the implementation should use periodic polling, if necessary, to achieve this.",(0,i.yg)("br",null)),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(s.A,{mdxType:"MarginText"},"10.a/2"),(0,i.yg)(o.A,{type:"aarm",aarm:"implementation-advice",mdxType:"Admonition"},(0,i.yg)("strong",null),"On a multi-processor, the delay associated with aborting a task on another processor should be bounded.",(0,i.yg)("br",null))),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(s.A,{mdxType:"MarginText"},"11"),(0,i.yg)(o.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 1   Abortion does not change the active or base priority of the aborted task.",(0,i.yg)("br",null))),(0,i.yg)(r.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(s.A,{mdxType:"MarginText"},"12"),(0,i.yg)(o.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 2   Abortion cannot be more immediate than is allowed by the rules for deferral of abortion during finalization and in protected actions.",(0,i.yg)("br",null))))}A.isMDXComponent=!0}}]);