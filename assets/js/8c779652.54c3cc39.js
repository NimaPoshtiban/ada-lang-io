"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1958],{6573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>k,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>b});var o=n(1716),a=n(2787),l=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&d(e,n,t[n]);return e};const p={sidebar_position:81},k="9.10 Shared Variables",m={unversionedId:"arm/AA-9/AA-9.10",id:"arm/AA-9/AA-9.10",title:"9.10 Shared Variables",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-9/AA-9.10.mdx",sourceDirName:"arm/AA-9",slug:"/arm/AA-9/AA-9.10",permalink:"/docs/arm/AA-9/AA-9.10",draft:!1,tags:[],version:"current",sidebarPosition:81,frontMatter:{sidebar_position:81},sidebar:"referenceManualSidebar",previous:{title:"9.9 Task and Entry Attributes",permalink:"/docs/arm/AA-9/AA-9.9"},next:{title:"9.11 Example of Tasking and Synchronization",permalink:"/docs/arm/AA-9/AA-9.11"}},f={},b=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Erroneous Execution",id:"erroneous-execution",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4},{value:"9.10.1  Conflict Check Policies",id:"9101--conflict-check-policies",level:2},{value:"Syntax",id:"syntax",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics-1",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}],y={toc:b};function g(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&s)for(var o of s(e))t.indexOf(o)<0&&u.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=h(h({},y),d),i(t,r({components:l,mdxType:"MDXLayout"}))),(0,o.kt)("h1",h({},{id:"910-shared-variables"}),"9.10 Shared Variables"),(0,o.kt)("admonition",h({},{type:"warning"}),(0,o.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,o.kt)("a",h({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,o.kt)("h4",h({},{id:"static-semantics"}),"Static Semantics"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI05-0009-1"),"}"," ","{",(0,o.kt)("em",null,"AI05-0201-1"),"}"," ","{",(0,o.kt)("em",null,"AI05-0229-1"),"}"," ","{",(0,o.kt)("em",null,"AI05-0295-1"),"}"," ","{",(0,o.kt)("em",null,"AI12-0119-1"),"}"," ","{",(0,o.kt)("em",null,"AI12-0363-1"),"}"," ",(0,o.kt)("br",null),"If two different objects, including nonoverlapping parts of the same object, are ",(0,o.kt)("em",null,"independently addressable"),", they can be manipulated concurrently by two different logical threads of control without synchronization, unless both are subcomponents of the same full access object, and either is nonatomic (see C.6). Any two nonoverlapping objects are independently addressable if either object is specified as independently addressable (see C.6). Otherwise, two nonoverlapping objects are independently addressable except when they are both parts of a composite object for which a nonconfirming value is specified for any of the following representation aspects: (record) Layout, Component_Size, Pack, Atomic, or Convention; in this case it is unspecified whether the parts are independently addressable. ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,o.kt)("em",null,"This paragraph was deleted."),(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"implementation-note",title:"Implementation Note: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"{",(0,o.kt)("em",null,"AI05-0229-1"),"}"," ",(0,o.kt)("br",null),"Independent addressability is the only high level semantic effect of aspect Pack. If two objects are independently addressable, the implementation should allocate them in such a way that each can be written by the hardware without writing the other. For example, unless the user asks for it, it is generally not feasible to choose a bit-packed representation on a machine without an atomic bit field insertion instruction, because there might be tasks that update neighboring subcomponents concurrently, and locking operations on all subcomponents is generally not a good idea.",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI05-0229-1"),"}"," ",(0,o.kt)("br",null),"Even if Pack or one of the other above-mentioned aspects is specified, subcomponents should still be updated independently if the hardware efficiently supports it. ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"{",(0,o.kt)("em",null,"AI05-0009-1"),"}"," ","{",(0,o.kt)("em",null,"AI05-0201-1"),"}"," ","{",(0,o.kt)("em",null,"AI12-0001-1"),"}"," ",(0,o.kt)("br",null),"An atomic object (including atomic components) is always independently addressable from any other nonoverlapping object. ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-13/AA-13.1#S0346"},"Aspect_specification")),"s and representation items cannot change that fact. Note, however, that the components of an atomic object are not necessarily atomic. ",(0,o.kt)("br",null)),(0,o.kt)("h4",h({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0119-1"),"}"," ",(0,o.kt)("br",null),"[Separate logical threads of control normally proceed independently and concurrently with one another. However, task interactions can be used to synchronize the actions of two or more logical threads of control to allow, for example, meaningful communication by the direct updating and reading of variables shared between them.] The actions of two different logical threads of control are synchronized in this sense when an action of one ",(0,o.kt)("em",null,"signals")," an action of the other; an action A1 is defined to signal an action A2 under the following circumstances: ",(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",null,"If A1 and A2 are part of the execution of the same task, and the language rules require A1 to be performed before A2;",(0,o.kt)("br",null)),(0,o.kt)("li",null,"If A1 is the action of an activator that initiates the activation of a task, and A2 is part of the execution of the task that is activated;",(0,o.kt)("br",null)),(0,o.kt)("li",null,"If A1 is part of the activation of a task, and A2 is the action of waiting for completion of the activation;",(0,o.kt)("br",null)),(0,o.kt)("li",null,"If A1 is part of the execution of a task, and A2 is the action of waiting for the termination of the task;",(0,o.kt)("br",null)),(0,o.kt)("li",null,"{",(0,o.kt)("em",null,"8652/0031"),"}"," ","{",(0,o.kt)("em",null,"AI95-00118-01"),"}"," ","{",(0,o.kt)("em",null,"AI05-0072-1"),"}"," ",(0,o.kt)("br",null),"If A1 is the termination of a task T, and A2 is either an evaluation of the expression T'Terminated that results in True, or a call to Ada.Task_Identification.Is_Terminated with an actual parameter that identifies T and a result of True (see C.7.1);",(0,o.kt)("br",null)),(0,o.kt)("li",null,"{",(0,o.kt)("em",null,"AI05-0262-1"),"}"," ",(0,o.kt)("br",null),"If A1 is the action of issuing an entry call, and A2 is part of the corresponding execution of the appropriate ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.5#S0260"},"entry_body"))," or ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.5#S0258"},"accept_statement")),"; ",(0,o.kt)("br",null))),(0,o.kt)(a.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"Evaluating the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.5#S0259"},"entry_index"))," of an ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.5#S0258"},"accept_statement"))," is not synchronized with a corresponding entry call, nor is evaluating the entry barrier of an ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.5#S0260"},"entry_body")),". ",(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",null,"If A1 is part of the execution of an ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.5#S0258"},"accept_statement"))," or ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.5#S0260"},"entry_body")),", and A2 is the action of returning from the corresponding entry call;",(0,o.kt)("br",null)),(0,o.kt)("li",null,"If A1 is part of the execution of a protected procedure body or ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.5#S0260"},"entry_body"))," for a given protected object, and A2 is part of a later execution of an ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-9/AA-9.5#S0260"},"entry_body"))," for the same protected object; ",(0,o.kt)("br",null))),(0,o.kt)(a.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,o.kt)("strong",null),'The underlying principle here is that for one action to "signal" a second, the second action has to follow a potentially blocking operation, whose blocking is dependent on the first action in some way. Protected procedures are not potentially blocking, so they can only be "signalers", they cannot be signaled. ',(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"Protected subprogram calls are not defined to signal one another, which means that such calls alone cannot be used to synchronize access to shared data outside of a protected object. ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"The point of this distinction is so that on multiprocessors with inconsistent caches, the caches only need to be refreshed at the beginning of an entry body, and forced out at the end of an entry body or protected procedure that leaves an entry open. Protected function calls, and protected subprogram calls for entryless protected objects do not require full cache consistency. Entryless protected objects are intended to be treated roughly like atomic objects - each operation is indivisible with respect to other operations (unless both are reads), but such operations cannot be used to synchronize access to other nonvolatile shared variables. ",(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",null,"If A1 signals some action that in turn signals A2. ",(0,o.kt)("br",null))),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0298-1"),"}"," ",(0,o.kt)("br",null),"Action A1 is defined to ",(0,o.kt)("em",null,"potentially signal")," action A2 if A1 signals A2, if action A1 and A2 occur as part of the execution of the same logical thread of control, and the language rules permit action A1 to precede action A2, or if action A1 potentially signals some action that in turn potentially signals A2.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0267-1"),"}"," ",(0,o.kt)("br",null),"Two actions are defined to be ",(0,o.kt)("em",null,"sequential")," if one of the following is true: ",(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",null,"One action signals the other;",(0,o.kt)("br",null)),(0,o.kt)("li",null,"{",(0,o.kt)("em",null,"AI12-0119-1"),"}"," ",(0,o.kt)("br",null),"Both actions occur as part of the execution of the same logical thread of control; ",(0,o.kt)("br",null))),(0,o.kt)(a.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"{",(0,o.kt)("em",null,"AI12-0005-1"),"}"," ","{",(0,o.kt)("em",null,"AI12-0119-1"),"}"," ",(0,o.kt)("br",null),'Any two actions of the same logical thread of control are sequential, even if one does not signal the other because they can be executed in an "arbitrary" (but necessarily equivalent to some "sequential") order. ',(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",null,"{",(0,o.kt)("em",null,"AI12-0292-1"),"}"," ",(0,o.kt)("br",null),"Both actions occur as part of protected actions on the same protected object, and at least one of the actions is part of a call on an exclusive protected operation of the protected object. ",(0,o.kt)("br",null))),(0,o.kt)(a.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"{",(0,o.kt)("em",null,"AI12-0292-1"),"}"," ",(0,o.kt)("br",null),"Because actions within protected actions do not always imply signaling, we have to mention them here explicitly to make sure that actions occurring within different protected actions of the same protected object are sequential with respect to one another (unless both are part of calls on nonexclusive protected functions). ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"{",(0,o.kt)("em",null,"AI12-0292-1"),"}"," ",(0,o.kt)("br",null),"It doesn't matter whether or not the variable being assigned is actually a subcomponent of the protected object; globals can be safely updated from within the bodies of protected procedures, protected entries, or exclusive protected functions. ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI05-0229-1"),"}"," ",(0,o.kt)("br",null),"Aspect Atomic or aspect Atomic_Components may also be specified to ensure that certain reads and updates are sequential - see C.6. ",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"{",(0,o.kt)("em",null,"AI12-0119-1"),"}"," ",(0,o.kt)("br",null),'If two actions are "sequential" it is known that their executions don\'t overlap in time, but it is not necessarily specified which occurs first. For example, all actions of a single logical thread of control are sequential, even though the exact order of execution is not fully specified for all constructs. ',(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,o.kt)("strong",null),'Note that if two assignments to the same variable are sequential, but neither signals the other, then the program is not erroneous, but it is not specified which assignment ultimately prevails. Such a situation usually corresponds to a programming mistake, but in some (rare) cases, the order makes no difference, and for this reason this situation is not considered erroneous nor even a bounded error. In Ada 83, this was considered an "incorrect order dependence" if the "effect" of the program was affected, but "effect" was never fully defined. In Ada 95, this situation represents a potential nonportability, and a friendly compiler might want to warn the programmer about the situation, but it is not considered an error. An example where this would come up would be in gathering statistics as part of referencing some information, where the assignments associated with statistics gathering don\'t need to be ordered since they are just accumulating aggregate counts, sums, products, etc. ',(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0267-1"),"}"," ",(0,o.kt)("br",null),"Two actions that are not sequential are defined to be ",(0,o.kt)("em",null,"concurrent")," actions.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0267-1"),"}"," ","{",(0,o.kt)("em",null,"AI12-0298-1"),"}"," ",(0,o.kt)("br",null),"Two actions are defined to ",(0,o.kt)("em",null,"conflict")," if one action assigns to an object, and the other action reads or assigns to a part of the same object (or of a neighboring object if the two are not independently addressable).  The action comprising a call on a subprogram or an entry is defined to ",(0,o.kt)("em",null,"potentially conflict")," with another action if the Global aspect (or Global'Class aspect in the case of a dispatching call) of the called subprogram or entry is such that a conflicting action would be possible during the execution of the call. Similarly, two calls are considered to potentially conflict if they each have Global (or Global'Class in the case of a dispatching call) aspects such that conflicting actions would be possible during the execution of the calls. Finally, two actions that conflict are also considered to potentially conflict.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0267-1"),"}"," ",(0,o.kt)("br",null),"A ",(0,o.kt)("em",null,"synchronized")," object is an object of a task or protected type, an atomic object (see C.6), a suspension object (see D.10), or a synchronous barrier (see D.10.1). [Operations on such objects are necessarily sequential with respect to one another, and hence are never considered to conflict.]",(0,o.kt)("br",null)),(0,o.kt)("h4",h({},{id:"erroneous-execution"}),"Erroneous Execution"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0267-1"),"}"," ",(0,o.kt)("br",null),"The execution of two concurrent actions is erroneous if the actions make conflicting uses of a shared variable (or neighboring variables that are not independently addressable).",(0,o.kt)("br",null)),(0,o.kt)("h4",h({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95"),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"8652/0031"),"}"," ","{",(0,o.kt)("em",null,"AI95-00118-01"),"}"," ",(0,o.kt)("strong",null,(0,o.kt)("br",null),"Corrigendum:")," Clarified that a task T2 can rely on values of variables that are updated by another task T1, if task T2 first verifies that T1'Terminated is True. ",(0,o.kt)("br",null)),(0,o.kt)("h4",h({},{id:"wording-changes-from-ada-2005"}),"Wording Changes from Ada 2005"),(0,o.kt)(a.Z,{type:"aarm",aarm:"correction",title:"Correction:",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI05-0009-1"),"}"," ","{",(0,o.kt)("em",null,"AI05-0201-1"),"}"," ",(0,o.kt)("strong",null,(0,o.kt)("br",null))," Revised the definition of independent addressability to exclude conforming representation clauses and to require that atomic and independent objects always have independent addressability. This should not change behavior that the user sees for any Ada program, so it is not an inconsistency.",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"correction",title:"Correction:",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI05-0072-1"),"}"," ",(0,o.kt)("strong",null,(0,o.kt)("br",null))," Corrected the wording of AI95-00118-01 to actually say what was intended (as described above). ",(0,o.kt)("br",null)),(0,o.kt)("h4",h({},{id:"wording-changes-from-ada-2012"}),"Wording Changes from Ada 2012"),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI12-0119-1"),"}"," ",(0,o.kt)("br",null),"Added wording to support interaction of parallel constructs with tasks by changing various wording to talk about logical threads of control rather than purely about tasks.",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI12-0267-1"),"}"," ","{",(0,o.kt)("em",null,"AI12-0298-1"),"}"," ",(0,o.kt)("br",null),"Added wording to define potentially signalling actions and conflicting actions; these are used to define conflict policies. ",(0,o.kt)("br",null)),(0,o.kt)("h2",h({},{id:"9101--conflict-check-policies"}),"9.10.1  Conflict Check Policies"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0267-1"),"}"," ",(0,o.kt)("br",null),"This subclause determines what checks are performed relating to possible concurrent conflicting actions (see 9.10). ",(0,o.kt)("br",null)),(0,o.kt)("h4",h({},{id:"syntax"}),"Syntax"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0267-1"),"}"," ","{",(0,o.kt)("em",null,"AI12-0298-1"),"}"," ",(0,o.kt)("br",null),"The form of a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Conflict_Check_Policy is as follows:",(0,o.kt)("br",null)),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",null,"pragma")," Conflict_Check_Policy (",(0,o.kt)("em",null,"policy_"),(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"[, ",(0,o.kt)("em",null,"policy_"),(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"]);",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0267-1"),"}"," ",(0,o.kt)("br",null),"A ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Conflict_Check_Policy is allowed only immediately within a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part")),", a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-7/AA-7.1#S0230"},"package_specification")),", or as a configuration pragma.",(0,o.kt)("br",null)),(0,o.kt)("h4",h({},{id:"legality-rules"}),"Legality Rules"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0267-1"),"}"," ",(0,o.kt)("br",null),"Each ",(0,o.kt)("em",null,"policy_"),(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," shall be one of No_Parallel_Conflict_Checks, Known_Parallel_Conflict_Checks, All_Parallel_Conflict_Checks, No_Tasking_Conflict_Checks, Known_Tasking_Conflict_Checks, All_Tasking_Conflict_Checks, No_Conflict_Checks, Known_Conflict_Checks, All_Conflict_Checks, or an implementation-defined conflict check policy. If two ",(0,o.kt)("em",null,"policy_"),(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"s are given, one shall include the word Parallel and one shall include the word Tasking. If only one ",(0,o.kt)("em",null,"policy_"),(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," is given, it shall not include the word Parallel or Tasking.",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"implementation-defined",title:"Implementation defined: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"Implementation-defined conflict check policies.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0267-1"),"}"," ",(0,o.kt)("br",null),"A ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Conflict_Check_Policy given in a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part"))," or immediately within a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-7/AA-7.1#S0230"},"package_specification"))," applies from the place of the pragma to the end of the innermost enclosing declarative region. The region for a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Conflict_Check_Policy given as a configuration pragma is the declarative region for the entire compilation unit (or units) to which it applies.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0267-1"),"}"," ",(0,o.kt)("br",null),"If a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Conflict_Check_Policy applies to a ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-12/AA-12.3#S0315"},"generic_instantiation")),", then the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Conflict_Check_Policy applies to the entire instance.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0267-1"),"}"," ","{",(0,o.kt)("em",null,"AI12-0294-1"),"}"," ","{",(0,o.kt)("em",null,"AI12-0298-1"),"}"," ",(0,o.kt)("br",null),"If multiple Conflict_Check_Policy pragmas apply to a given construct, the conflict check policy is determined by the one in the innermost enclosing region. If no Conflict_Check_Policy pragma applies to a construct, the policy is (All_Parallel_Conflict_Checks, No_Tasking_Conflict_Checks) (see below).",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,o.kt)("strong",null,"To be honest: "),"{",(0,o.kt)("em",null,"AI12-0294-1"),"}"," ",(0,o.kt)("br",null),"The region mentioned in this rule is the region to which the policy pragma applies, and not the declarative region in which the policy pragma appears. This distinction matters when there are multiple policy pragmas in a single declarative region. ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0267-1"),"}"," ","{",(0,o.kt)("em",null,"AI12-0298-1"),"}"," ",(0,o.kt)("br",null),"Certain potentially conflicting actions are disallowed according to which conflict check policies apply at the place where the action or actions occur, as follows:",(0,o.kt)("br",null)),(0,o.kt)("dt",null,(0,o.kt)("br",null),"No_Parallel_Conflict_Checks"),(0,o.kt)("dl",null,(0,o.kt)("dd",null,"This policy imposes no restrictions on concurrent actions arising from parallel constructs.",(0,o.kt)("br",null)),(0,o.kt)("dt",null,(0,o.kt)("br",null),"No_Tasking_Conflict_Checks"),(0,o.kt)("dd",null,"This policy imposes no restrictions on concurrent actions arising from tasking constructs.",(0,o.kt)("br",null)),(0,o.kt)("dt",null,(0,o.kt)("br",null),"Known_Parallel_Conflict_Checks"),(0,o.kt)("dd",null,"If this policy applies to two concurrent actions appearing within parallel constructs, they are disallowed if they are known to denote the same object (see 6.4.1) with uses that conflict. For the purposes of this check, any parallel loop may be presumed to involve multiple concurrent iterations. Also, for the purposes of deciding whether two actions are concurrent, it is enough for the logical threads of control in which they occur to be concurrent at any point in their execution, unless all of the following are true:",(0,o.kt)("br",null))),(0,o.kt)("ul",null,(0,o.kt)("li",null,"the shared object is volatile;",(0,o.kt)("br",null)),(0,o.kt)("li",null,"the two logical threads of control are both known to also refer to a shared synchronized object; and",(0,o.kt)("br",null)),(0,o.kt)("li",null,"each thread whose potentially conflicting action updates the shared volatile object, also updates this shared synchronized object.",(0,o.kt)("br",null))),(0,o.kt)(a.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,o.kt)("strong",null),'To properly synchronize two actions to prevent concurrency, a thread that does an update of a volatile object must update a synchronized object afterwards to indicate it has completed its update, and the other thread needs to test the value of the synchronized object before it reads the updated volatile object. In a parallel construct, "signaling" cannot be used to prevent concurrency, since that generally requires some blocking, so testing the value of the synchronized object would probably need to use a busy-wait loop. ',(0,o.kt)("br",null)),(0,o.kt)("dt",null,(0,o.kt)("br",null),"Known_Tasking_Conflict_Checks"),(0,o.kt)("dl",null,(0,o.kt)("dd",null,"If this policy applies to two concurrent actions appearing within the same compilation unit, at least one of which appears within a task body but not within a parallel construct, they are disallowed if they are known to denote the same object (see 6.4.1) with uses that conflict, and neither potentially signals the other (see 9.10). For the purposes of this check, any named task type may be presumed to have multiple instances. Also, for the purposes of deciding whether two actions are concurrent, it is enough for the tasks in which they occur to be concurrent at any point in their execution, unless all of the following are true:",(0,o.kt)("br",null))),(0,o.kt)("ul",null,(0,o.kt)("li",null,"the shared object is volatile;",(0,o.kt)("br",null)),(0,o.kt)("li",null,"the two tasks are both known to also refer to a shared synchronized object; and",(0,o.kt)("br",null)),(0,o.kt)("li",null,"each task whose potentially conflicting action updates the shared volatile object, also updates this shared synchronized object.",(0,o.kt)("br",null))),(0,o.kt)(a.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"To properly synchronize two actions to prevent concurrency, a task that does an update of a ",(0,o.kt)("em",null,"non"),"volatile object must use signaling via a synchronized object to indicate it has completed its update, and the other task needs to be signaled by this action on the synchronized object before it reads the updated nonvolatile object. In other words, to synchronize communication via a nonvolatile object, signaling must be used. To synchronize communication via a volatile object, an update of a shared synchronized object followed by a read of the synchronized object in the other task can be sufficient. ",(0,o.kt)("br",null)),(0,o.kt)("dt",null,(0,o.kt)("br",null),"All_Parallel_Conflict_Checks"),(0,o.kt)("dl",null,(0,o.kt)("dd",null,"This policy includes the restrictions imposed by the Known_Parallel_Conflict_Checks policy, and in addition disallows a parallel construct from reading or updating a variable that is global to the construct, unless it is a synchronized object, or unless the construct is a parallel loop, and the global variable is a part of a component of an array denoted by an indexed component with at least one index expression that statically denotes the loop parameter of the ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"../AA-5/AA-5.5#S0181"},"loop_parameter_specification"))," or the chunk parameter of the parallel loop.",(0,o.kt)("br",null)),(0,o.kt)("dt",null,(0,o.kt)("br",null),"All_Tasking_Conflict_Checks"),(0,o.kt)("dd",null,"This policy includes the restrictions imposed by the Known_Tasking_Conflict_Checks policy, and in addition disallows a task body from reading or updating a variable that is global to the task body, unless it is a synchronized object.",(0,o.kt)("br",null)),(0,o.kt)("dt",null,(0,o.kt)("br",null),"No_Conflict_Checks, Known_Conflict_Checks, All_Conflict_Checks"),(0,o.kt)("dd",null,"These are shorthands for (No_Parallel_Conflict_Checks, No_Tasking_Conflict_Checks), (Known_Parallel_Conflict_Checks, Known_Tasking_Conflict_Checks), and (All_Parallel_Conflict_Checks, All_Tasking_Conflict_Checks), respectively.",(0,o.kt)("br",null))),(0,o.kt)("h4",h({},{id:"static-semantics-1"}),"Static Semantics"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0344-1"),"}"," ",(0,o.kt)("br",null),"For a subprogram, the following language-defined representation aspect may be specified:",(0,o.kt)("br",null)),(0,o.kt)("dt",null,(0,o.kt)("br",null),"Parallel_Calls"),(0,o.kt)("dl",null,(0,o.kt)("dd",null,"The Parallel_Calls aspect is of type Boolean. The specified value shall be static. The Parallel_Calls aspect of an inherited primitive subprogram is True if Parallel_Calls is True either for the corresponding subprogram of the progenitor type or for any other inherited subprogram that it overrides. If not specified or inherited as True, the Parallel_Calls aspect of a subprogram is False.",(0,o.kt)("br",null)),(0,o.kt)("dd",null,"Specifying the Parallel_Calls aspect to be True for a subprogram indicates that the subprogram can be safely called in parallel. Conflict checks (if required by the Conflict_Check_Policy in effect) are made on the subprogram assuming that multiple concurrent calls exist.[ Such checks can then be omitted on a call of the subprogram in a parallel iteration context.]",(0,o.kt)("br",null))),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,o.kt)("strong",null,"Aspect Description for "),(0,o.kt)("strong",null,"Parallel_Calls: "),"Specifies whether a given subprogram is expected to be called in parallel.",(0,o.kt)("br",null)),(0,o.kt)("h4",h({},{id:"implementation-permissions"}),"Implementation Permissions"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0267-1"),"}"," ","{",(0,o.kt)("em",null,"AI12-0298-1"),"}"," ",(0,o.kt)("br",null),"When the conflict check policy Known_Parallel_Conflict_Checks or All_Parallel_Conflict_Checks applies, the implementation may disallow two concurrent actions appearing within parallel constructs if the implementation can prove they will at run-time denote the same object with uses that conflict. Similarly, when the conflict check policy Known_Tasking_Conflict_Checks or All_Tasking_Conflict_Checks applies, the implementation may disallow two concurrent actions, at least one of which appears within a task body but not within a parallel construct, if the implementation can prove they will at run-time denote the same object with uses that conflict.",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,o.kt)("strong",null),"This permission allows additional enforcement in instance bodies (where Legality Rules aren't usually enforced), in subunits and their parents, and across compilation units, if the implementation wishes. ",(0,o.kt)("br",null)),(0,o.kt)("h4",h({},{id:"extensions-to-ada-2012"}),"Extensions to Ada 2012"),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI12-0267-1"),"}"," ",(0,o.kt)("br",null),"Conflict check policies (and the associated checks) are new.",(0,o.kt)("br",null)),(0,o.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,o.kt)("em",null,"AI12-0344-1"),"}"," ",(0,o.kt)("br",null),"Aspect Parallel_Calls is new. ",(0,o.kt)("br",null)))}g.isMDXComponent=!0}}]);