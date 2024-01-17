"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[7842],{79769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>b,frontMatter:()=>g,metadata:()=>x,toc:()=>v});var i=n(91716),a=n(21256),r=n(24895),o=n(28090),l=n(48424),s=n(82262),d=Object.defineProperty,m=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,T=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&T(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&T(e,n,t[n]);return e};const g={sidebar_position:169},y="D.15 Timing Events",x={unversionedId:"arm/AA-D/AA-D.15",id:"arm/AA-D/AA-D.15",title:"D.15 Timing Events",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-D/AA-D.15.mdx",sourceDirName:"arm/AA-D",slug:"/arm/AA-D/AA-D.15",permalink:"/docs/arm/AA-D/AA-D.15",draft:!1,tags:[],version:"current",sidebarPosition:169,frontMatter:{sidebar_position:169},sidebar:"referenceManualSidebar",previous:{title:"D.14 Execution Time",permalink:"/docs/arm/AA-D/AA-D.14"},next:{title:"D.16 Multiprocessor Implementation",permalink:"/docs/arm/AA-D/AA-D.16"}},f={},v=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Implementation Requirements",id:"implementation-requirements",level:4},{value:"Metrics",id:"metrics",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4}],A={toc:v};function b(e){var t,n=e,{components:d}=n,T=((e,t)=>{var n={};for(var i in e)h.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&c)for(var i of c(e))t.indexOf(i)<0&&u.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=k(k({},A),T),m(t,p({components:d,mdxType:"MDXLayout"}))),(0,i.kt)("h1",k({},{id:"d15-timing-events"}),"D.15 Timing Events"),(0,i.kt)("admonition",k({},{type:"warning"}),(0,i.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,i.kt)("a",k({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,i.kt)(l.Z,{mdxType:"MarginText"},"1/5"),(0,i.kt)(s.Z,{items:["AI95-00297-01","AI05-0299-1","AI12-0445-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"This subclause describes a language-defined package to allow user-defined protected procedures to be executed at a specified time without the use of a task or a delay statement. ",(0,i.kt)("br",null)),(0,i.kt)("h4",k({},{id:"static-semantics"}),"Static Semantics"),(0,i.kt)(l.Z,{mdxType:"MarginText"},"2/2"),(0,i.kt)(s.Z,{items:["AI95-00297-01"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"The following language-defined library package exists: ",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{mdxType:"MarginText"},"3/5"),(0,i.kt)(s.Z,{items:["AI12-0241-1","AI12-0302-1"],mdxType:"MarginInfo"}),(0,i.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"package Ada.Real_Time.Timing_Events","\n","  with Nonblocking, Global =",">"," in out synchronized is","\n",(0,i.kt)(l.Z,{mdxType:"MarginText"},"4/5"),(0,i.kt)(s.Z,{items:["AI12-0241-1"],mdxType:"MarginInfo"}),"type Timing_Event is tagged limited private;","\n","  type Timing_Event_Handler","\n","       is access protected procedure (Event : in out Timing_Event)","\n","       with Nonblocking =",">"," False;","\n",(0,i.kt)(l.Z,{mdxType:"MarginText"},"5/2"),"procedure Set_Handler (Event   : in out Timing_Event;","\n","                         At_Time : in Time;","\n","                         Handler : in Timing_Event_Handler);","\n","  procedure Set_Handler (Event   : in out Timing_Event;","\n","                         In_Time : in Time_Span;","\n","                         Handler : in Timing_Event_Handler);","\n","  function Current_Handler (Event : Timing_Event)","\n","       return Timing_Event_Handler;","\n","  procedure Cancel_Handler (Event     : in out Timing_Event;","\n","                            Cancelled : out Boolean);","\n",(0,i.kt)(l.Z,{mdxType:"MarginText"},"6/2"),"function Time_Of_Event (Event : Timing_Event) return Time;","\n",(0,i.kt)(l.Z,{mdxType:"MarginText"},"7/2"),"private","\n","  ... -- not specified by the language","\n","end Ada.Real_Time.Timing_Events;","\n"),(0,i.kt)(l.Z,{mdxType:"MarginText"},"8/2"),(0,i.kt)(s.Z,{items:["AI95-00297-01"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"The type Timing_Event represents a time in the future when an event is to occur. The type Timing_Event needs finalization (see ",(0,i.kt)("a",{href:"../AA-7/AA-7.6"},"7.6"),").",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{mdxType:"MarginText"},"9/2"),(0,i.kt)(s.Z,{items:["AI95-00297-01"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"An object of type Timing_Event is said to be ",(0,i.kt)("em",null,"set")," if it is associated with a nonnull value of type Timing_Event_Handler and ",(0,i.kt)("em",null,"cleared")," otherwise. All Timing_Event objects are initially cleared. ",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{mdxType:"MarginText"},"10/2"),(0,i.kt)(s.Z,{items:["AI95-00297-01"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"The type Timing_Event_Handler identifies a protected procedure to be executed by the implementation when the timing event occurs. Such a protected procedure is called a ",(0,i.kt)("em",null,"handler"),". ",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(l.Z,{mdxType:"MarginText"},"10.a/2"),(0,i.kt)(a.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,i.kt)("strong",null),"Type Timing_Event is tagged. This makes it possible to share a handler between several events. In simple cases, 'Access can be used to compare the parameter with a specific timing event object (this works because a tagged type is a by-reference type). In more complex cases, a type extension of type Timing_Event can be declared; a double type conversion can be used to access the extension data. For example:",(0,i.kt)("br",null))),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(l.Z,{mdxType:"MarginText"},"10.b/2"),(0,i.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"type Toaster_Timing_Event is new Timing_Event with record","\n","   Slot : Natural;","\n","end record;","\n",(0,i.kt)(l.Z,{mdxType:"MarginText"},"10.c/2"),"...","\n",(0,i.kt)(l.Z,{mdxType:"MarginText"},"10.d/2"),"protected body Toaster is","\n",(0,i.kt)(l.Z,{mdxType:"MarginText"},"10.e/2"),"procedure Timer (Event : in out Timing_Event) is","\n","   begin","\n","      Pop_Up_Toast (Toaster_Timing_Event(Timing_Event'Class(Event)).Slot);","\n","   end Timer;","\n",(0,i.kt)(l.Z,{mdxType:"MarginText"},"10.f/2"),"...","\n","end Toaster;","\n")),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(l.Z,{mdxType:"MarginText"},"10.g/2"),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The extra conversion to the class-wide type is necessary to make the conversions legal. While this usage is clearly ugly, we think that the need for this sort of usage will be rare, so we can live with it. It's certainly better than having no way to associate data with an event. ",(0,i.kt)("br",null))),(0,i.kt)("h4",k({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,i.kt)(l.Z,{mdxType:"MarginText"},"11/3"),(0,i.kt)(s.Z,{items:["AI95-00297-01","AI05-0264-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"The procedures Set_Handler associate the handler Handler with the event Event: if Handler is ",(0,i.kt)("strong",null,"null"),", the event is cleared; otherwise, it is set. The first procedure Set_Handler sets the execution time for the event to be At_Time. The second procedure Set_Handler sets the execution time for the event to be Real_Time.Clock + In_Time.",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{mdxType:"MarginText"},"12/2"),(0,i.kt)(s.Z,{items:["AI95-00297-01"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"A call of a procedure Set_Handler for an event that is already set replaces the handler and the time of execution; if Handler is not ",(0,i.kt)("strong",null,"null"),", the event remains set.",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{mdxType:"MarginText"},"13/2"),(0,i.kt)(s.Z,{items:["AI95-00297-01"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"As soon as possible after the time set for the event, the handler is executed, passing the event as parameter. The handler is only executed if the timing event is in the set state at the time of execution. The initial action of the execution of the handler is to clear the event.",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(l.Z,{mdxType:"MarginText"},"13.a/2"),(0,i.kt)(a.Z,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,i.kt)("strong",null),"The second sentence of this paragraph is because of a potential race condition. The time might expire and yet before the handler is executed, some task could call Cancel_Handler (or equivalently call Set_Handler with a ",(0,i.kt)("strong",null,"null")," parameter) and thus clear the handler. ",(0,i.kt)("br",null))),(0,i.kt)(l.Z,{mdxType:"MarginText"},"14/2"),(0,i.kt)(s.Z,{items:["AI95-00297-01"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"If the Ceiling_Locking policy (see ",(0,i.kt)("a",{href:"../AA-D/AA-D.3"},"D.3"),") is in effect when a procedure Set_Handler is called, a check is made that the ceiling priority of Handler.",(0,i.kt)("strong",null,"all")," is Interrupt_Priority'Last. If the check fails, Program_Error is raised.",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{mdxType:"MarginText"},"15/3"),(0,i.kt)(s.Z,{items:["AI95-00297-01","AI05-0094-1","AI05-0264-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"If a procedure Set_Handler is called with zero or negative In_Time or with At_Time indicating a time in the past, then the handler is executed as soon as possible after the completion of the call of Set_Handler.",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(l.Z,{mdxType:"MarginText"},"15.a/3"),(0,i.kt)(s.Z,{items:["AI05-0094-1"],mdxType:"MarginInfo"}),(0,i.kt)(a.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,i.kt)("strong",null),"The handler will still be executed. Under no circumstances is a scheduled call of a handler lost. ",(0,i.kt)("br",null))),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(l.Z,{mdxType:"MarginText"},"15.b/3"),(0,i.kt)(s.Z,{items:["AI05-0094-1"],mdxType:"MarginInfo"}),(0,i.kt)(a.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,i.kt)("strong",null),"We say \u201cas soon as possible\u201d so that we do not deadlock if we are executing the handler when Set_Handler is called. In that case, the current invocation of the handler must complete before the new handler can start executing. ",(0,i.kt)("br",null))),(0,i.kt)(l.Z,{mdxType:"MarginText"},"16/3"),(0,i.kt)(s.Z,{items:["AI95-00297-01","AI05-0264-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"The function Current_Handler returns the handler associated with the event Event if that event is set; otherwise, it returns ",(0,i.kt)("strong",null,"null"),".",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{mdxType:"MarginText"},"17/3"),(0,i.kt)(s.Z,{items:["AI95-00297-01","AI05-0264-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"The procedure Cancel_Handler clears the event if it is set. Cancelled is assigned True if the event was set prior to it being cleared; otherwise, it is assigned False.",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{mdxType:"MarginText"},"18/3"),(0,i.kt)(s.Z,{items:["AI95-00297-01","AI05-0264-1"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"The function Time_Of_Event returns the time of the event if the event is set; otherwise, it returns Real_Time.Time_First.",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{mdxType:"MarginText"},"19/2"),(0,i.kt)(s.Z,{items:["AI95-00297-01"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"As part of the finalization of an object of type Timing_Event, the Timing_Event is cleared.",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(l.Z,{mdxType:"MarginText"},"19.a/2"),(0,i.kt)(a.Z,{type:"aarm",aarm:"implementation-note",mdxType:"Admonition"},(0,i.kt)("strong",null),"This is the only finalization defined by the language that has a visible effect; but an implementation may have other finalization that it needs to perform. Implementations need to ensure that the event is cleared before anything else is finalized that would prevent a set event from being triggered. ",(0,i.kt)("br",null))),(0,i.kt)(l.Z,{mdxType:"MarginText"},"20/2"),(0,i.kt)(s.Z,{items:["AI95-00297-01"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"If several timing events are set for the same time, they are executed in FIFO order of being set.",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{mdxType:"MarginText"},"21/2"),(0,i.kt)(s.Z,{items:["AI95-00297-01"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"An exception propagated from a handler invoked by a timing event has no effect.",(0,i.kt)("br",null)),(0,i.kt)("h4",k({},{id:"implementation-requirements"}),"Implementation Requirements"),(0,i.kt)(l.Z,{mdxType:"MarginText"},"22/2"),(0,i.kt)(s.Z,{items:["AI95-00297-01"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"For a given Timing_Event object, the implementation shall perform the operations declared in this package atomically with respect to any of these operations on the same Timing_Event object. The replacement of a handler by a call of Set_Handler shall be performed atomically with respect to the execution of the handler.",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(l.Z,{mdxType:"MarginText"},"22.a/2"),(0,i.kt)(a.Z,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,i.kt)("strong",null),"This prevents various race conditions. In particular it ensures that if an event occurs when Set_Handler is changing the handler then either the new or old handler is executed in response to the appropriate event. It is never possible for a new handler to be executed in response to an old event. ",(0,i.kt)("br",null))),(0,i.kt)("h4",k({},{id:"metrics"}),"Metrics"),(0,i.kt)(l.Z,{mdxType:"MarginText"},"23/2"),(0,i.kt)(s.Z,{items:["AI95-00297-01"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"The implementation shall document the following metric: ",(0,i.kt)("br",null)),(0,i.kt)(l.Z,{mdxType:"MarginText"},"24/3"),(0,i.kt)(s.Z,{items:["AI05-0210-1"],mdxType:"MarginInfo"}),(0,i.kt)("ul",null,(0,i.kt)("li",null,"An upper bound on the lateness of the execution of a handler. That is, the maximum time between the time specified for the event and when a handler is actually invoked assuming no other handler or task is executing during this interval.",(0,i.kt)("br",null))),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(l.Z,{mdxType:"MarginText"},"24.a/2"),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,i.kt)("strong",null,"Documentation Requirement: "),"The metrics for timing events.",(0,i.kt)("br",null))),(0,i.kt)("h4",k({},{id:"implementation-advice"}),"Implementation Advice"),(0,i.kt)(l.Z,{mdxType:"MarginText"},"25/2"),(0,i.kt)(s.Z,{items:["AI95-00297-01"],mdxType:"MarginInfo"}),(0,i.kt)("p",null,"The protected handler procedure should be executed directly by the real-time clock interrupt mechanism.",(0,i.kt)("br",null)),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(l.Z,{mdxType:"MarginText"},"25.a/2"),(0,i.kt)(a.Z,{type:"aarm",aarm:"implementation-advice",mdxType:"Admonition"},(0,i.kt)("strong",null),"For a timing event, the handler should be executed directly by the real-time clock interrupt mechanism.",(0,i.kt)("br",null))),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(l.Z,{mdxType:"MarginText"},"26/2"),(0,i.kt)(s.Z,{items:["AI95-00297-01"],mdxType:"MarginInfo"}),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 1   Since a call of Set_Handler is not a potentially blocking operation, it can be called from within a handler.",(0,i.kt)("br",null))),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(l.Z,{mdxType:"MarginText"},"27/2"),(0,i.kt)(s.Z,{items:["AI95-00297-01"],mdxType:"MarginInfo"}),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 2   A Timing_Event_Handler can be associated with several Timing_Event objects.",(0,i.kt)("br",null))),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)("h4",k({},{id:"extensions-to-ada-95"}),"Extensions to Ada 95")),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(l.Z,{mdxType:"MarginText"},"27.a/2"),(0,i.kt)(s.Z,{items:["AI95-00297-01"],mdxType:"MarginInfo"}),(0,i.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The package Real_Time.Timing_Events is new. ",(0,i.kt)("br",null))),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)("h4",k({},{id:"wording-changes-from-ada-2005"}),"Wording Changes from Ada 2005")),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(l.Z,{mdxType:"MarginText"},"27.b/3"),(0,i.kt)(s.Z,{items:["AI05-0094-1"],mdxType:"MarginInfo"}),(0,i.kt)(a.Z,{type:"aarm",aarm:"correction",mdxType:"Admonition"},(0,i.kt)("strong",null)," Reworded to eliminate a deadlock condition if the event time is in the past and a handler is currently executing. This is technically an inconsistency, but only if a program is depending on deadlocking; since it is impossible to imagine how that could be useful, we have not documented this as an inconsistency.",(0,i.kt)("br",null))),(0,i.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,i.kt)(l.Z,{mdxType:"MarginText"},"27.c/3"),(0,i.kt)(s.Z,{items:["AI05-0210-1"],mdxType:"MarginInfo"}),(0,i.kt)(a.Z,{type:"aarm",aarm:"correction",mdxType:"Admonition"},(0,i.kt)("strong",null)," Clarified the metric for lateness of a timing event to exclude interference from other handlers and tasks. This change might change the documentation of an implementation, but not the implementation itself, so there is no inconsistency. ",(0,i.kt)("br",null))))}b.isMDXComponent=!0}}]);