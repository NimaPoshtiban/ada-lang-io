"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[5185],{4239:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>_,frontMatter:()=>h,metadata:()=>f,toc:()=>y});var n=l(1716),a=l(7556),r=l(9464),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,A=(e,t,l)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,k=(e,t)=>{for(var l in t||(t={}))d.call(t,l)&&A(e,l,t[l]);if(c)for(var l of c(t))u.call(t,l)&&A(e,l,t[l]);return e};const h={sidebar_position:78},m="9.7 Select Statements",f={unversionedId:"arm/AA-9/AA-9.7",id:"arm/AA-9/AA-9.7",title:"9.7 Select Statements",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-9/AA-9.7.mdx",sourceDirName:"arm/AA-9",slug:"/arm/AA-9/AA-9.7",permalink:"/docs/arm/AA-9/AA-9.7",draft:!1,tags:[],version:"current",sidebarPosition:78,frontMatter:{sidebar_position:78},sidebar:"referenceManualSidebar",previous:{title:"9.6 Delay Statements, Duration, and Time",permalink:"/docs/arm/AA-9/AA-9.6"},next:{title:"9.8 Abort of a Task - Abort of a Sequence of Statements",permalink:"/docs/arm/AA-9/AA-9.8"}},p={},y=[{value:"Syntax",id:"syntax",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"9.7.1  Selective Accept",id:"971--selective-accept",level:2},{value:"Syntax",id:"syntax-1",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples-1",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"9.7.2  Timed Entry Calls",id:"972--timed-entry-calls",level:2},{value:"Syntax",id:"syntax-2",level:4},{value:"Legality Rules",id:"legality-rules-1",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics-1",level:4},{value:"Examples",id:"examples-2",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83-1",level:4},{value:"Incompatibilities With Ada 95",id:"incompatibilities-with-ada-95",level:4},{value:"9.7.3  Conditional Entry Calls",id:"973--conditional-entry-calls",level:2},{value:"Syntax",id:"syntax-3",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics-2",level:4},{value:"Examples",id:"examples-3",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83-2",level:4},{value:"9.7.4  Asynchronous Transfer of Control",id:"974--asynchronous-transfer-of-control",level:2},{value:"Syntax",id:"syntax-4",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics-3",level:4},{value:"Examples",id:"examples-4",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83-1",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4}],b={toc:y};function _(e){var t,l=e,{components:o}=l,A=((e,t)=>{var l={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(l[n]=e[n]);return l})(l,["components"]);return(0,n.kt)("wrapper",(t=k(k({},b),A),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",k({},{id:"97-select-statements"}),"9.7 Select Statements"),(0,n.kt)("admonition",k({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.kt)("a",k({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,n.kt)("p",null,"[There are four forms of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0269"},"select_statement")),". One form provides a selective wait for one or more ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0272"},"select_alternative")),"s. Two provide timed and conditional entry calls. The fourth provides asynchronous transfer of control.] ",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"syntax"}),"Syntax"),(0,n.kt)("p",null,(0,n.kt)("code",null,"select_statement"),(0,n.kt)("a",{id:"S0269"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("br",null),"   ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0270"},"selective_accept")),(0,n.kt)("br",null),"  | ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0276"},"timed_entry_call")),(0,n.kt)("br",null),"  | ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0279"},"conditional_entry_call")),(0,n.kt)("br",null),"  | ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0280"},"asynchronous_select")),(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,(0,n.kt)("em",null,"Example of a select statement:")," ",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{mdxType:"CodeBlock"},"select","\n","   accept Driver_Awake_Signal;","\n","or","\n","   delay 30.0*Seconds;","\n","   Stop_The_Train;","\n","end select;","\n"),(0,n.kt)("h4",k({},{id:"extensions-to-ada-83"}),"Extensions to Ada 83"),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0280"},"Asynchronous_select"))," is new. ",(0,n.kt)("br",null)),(0,n.kt)("h2",k({},{id:"971--selective-accept"}),"9.7.1  Selective Accept"),(0,n.kt)("p",null,"[This form of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0269"},"select_statement"))," allows a combination of waiting for, and selecting from, one or more alternatives. The selection may depend on conditions associated with each alternative of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0270"},"selective_accept")),". ]",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"syntax-1"}),"Syntax"),(0,n.kt)("p",null,(0,n.kt)("code",null,"selective_accept"),(0,n.kt)("a",{id:"S0270"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("br",null),"  ",(0,n.kt)("strong",null,"select"),(0,n.kt)("br",null),"   [",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0271"},"guard")),"]",(0,n.kt)("br",null),"     ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0272"},"select_alternative")),(0,n.kt)("br",null),"{"," ",(0,n.kt)("strong",null,"or"),(0,n.kt)("br",null),"   [",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0271"},"guard")),"]",(0,n.kt)("br",null),"     ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0272"},"select_alternative"))," ","}",(0,n.kt)("br",null),"[ ",(0,n.kt)("strong",null,"else"),(0,n.kt)("br",null),"   ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," ]",(0,n.kt)("br",null),"  ",(0,n.kt)("strong",null,"end select"),";",(0,n.kt)("br",null)),(0,n.kt)("p",null,(0,n.kt)("code",null,"guard"),(0,n.kt)("a",{id:"S0271"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("strong",null,"when")," ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.5#S0150"},"condition"))," =",">",(0,n.kt)("br",null)),(0,n.kt)("p",null,(0,n.kt)("code",null,"select_alternative"),(0,n.kt)("a",{id:"S0272"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("br",null),"   ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0273"},"accept_alternative")),(0,n.kt)("br",null),"  | ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0274"},"delay_alternative")),(0,n.kt)("br",null),"  | ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0275"},"terminate_alternative")),(0,n.kt)("br",null)),(0,n.kt)("p",null,(0,n.kt)("code",null,"accept_alternative"),(0,n.kt)("a",{id:"S0273"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("br",null),"  ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.5#S0258"},"accept_statement"))," [",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),"]",(0,n.kt)("br",null)),(0,n.kt)("p",null,(0,n.kt)("code",null,"delay_alternative"),(0,n.kt)("a",{id:"S0274"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("br",null),"  ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.6#S0266"},"delay_statement"))," [",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),"]",(0,n.kt)("br",null)),(0,n.kt)("p",null,(0,n.kt)("code",null,"terminate_alternative"),(0,n.kt)("a",{id:"S0275"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("strong",null,"terminate"),";",(0,n.kt)("br",null)),(0,n.kt)("p",null,"A ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0270"},"selective_accept"))," shall contain at least one ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0273"},"accept_alternative")),". In addition, it can contain: ",(0,n.kt)("br",null)),(0,n.kt)("ul",null,(0,n.kt)("li",null,"a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0275"},"terminate_alternative"))," (only one); or",(0,n.kt)("br",null)),(0,n.kt)("li",null,"one or more ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0274"},"delay_alternative")),"s; or",(0,n.kt)("br",null)),(0,n.kt)("li",null,"an ",(0,n.kt)("em",null,"else part")," (the reserved word ",(0,n.kt)("strong",null,"else")," followed by a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),"). ",(0,n.kt)("br",null))),(0,n.kt)("p",null,"These three possibilities are mutually exclusive. ",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"legality-rules"}),"Legality Rules"),(0,n.kt)("p",null,"If a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0270"},"selective_accept"))," contains more than one ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0274"},"delay_alternative")),", then all shall be ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.6#S0268"},"delay_relative_statement")),"s, or all shall be ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.6#S0267"},"delay_until_statement")),"s for the same time type. ",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"This simplifies the implementation and the description of the semantics. ",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,n.kt)("p",null,"A ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0272"},"select_alternative"))," is said to be ",(0,n.kt)("em",null,"open")," if it is not immediately preceded by a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0271"},"guard")),", or if the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.5#S0150"},"condition"))," of its ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0271"},"guard"))," evaluates to True. It is said to be ",(0,n.kt)("em",null,"closed")," otherwise.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"For the execution of a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0270"},"selective_accept")),", any ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0271"},"guard"))," ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.5#S0150"},"condition")),"s are evaluated; open alternatives are thus determined. For an open ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0274"},"delay_alternative")),", the ",(0,n.kt)("em",null,"delay_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," is also evaluated. Similarly, for an open ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0273"},"accept_alternative"))," for an entry of a family, the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.5#S0259"},"entry_index"))," is also evaluated. These evaluations are performed in an arbitrary order, except that a ",(0,n.kt)("em",null,"delay_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," or ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.5#S0259"},"entry_index"))," is not evaluated until after evaluating the corresponding ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.5#S0150"},"condition")),", if any. Selection and execution of one open alternative, or of the else part, then completes the execution of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0270"},"selective_accept")),"; the rules for this selection are described below.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"Open ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0273"},"accept_alternative")),"s are first considered. Selection of one such alternative takes place immediately if the corresponding entry already has queued calls. If several alternatives can thus be selected, one of them is selected according to the entry queuing policy in effect (see 9.5.3 and D.4). When such an alternative is selected, the selected call is removed from its entry queue and the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-11/AA-11.2#S0304"},"handled_sequence_of_statements"))," (if any) of the corresponding ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.5#S0258"},"accept_statement"))," is executed; after the rendezvous completes any subsequent ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," of the alternative is executed. If no selection is immediately possible (in the above sense) and there is no else part, the task blocks until an open alternative can be selected.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"Selection of the other forms of alternative or of an else part is performed as follows: ",(0,n.kt)("br",null)),(0,n.kt)("ul",null,(0,n.kt)("li",null,"An open ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0274"},"delay_alternative"))," is selected when its expiration time is reached if no ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0273"},"accept_alternative"))," or other ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0274"},"delay_alternative"))," can be selected prior to the expiration time. If several ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0274"},"delay_alternative")),"s have this same expiration time, one of them is selected according to the queuing policy in effect (see D.4); the default queuing policy chooses arbitrarily among the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0274"},"delay_alternative")),"s whose expiration time has passed.",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The else part is selected and its ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," is executed if no ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0273"},"accept_alternative"))," can immediately be selected; in particular, if all alternatives are closed.",(0,n.kt)("br",null)),(0,n.kt)("li",null,"{",(0,n.kt)("em",null,"AI05-0299-1"),"}"," ",(0,n.kt)("br",null),"An open ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0275"},"terminate_alternative"))," is selected if the conditions stated at the end of subclause 9.3 are satisfied. ",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"In the absence of a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.5#S0265"},"requeue_statement")),", the conditions stated are such that a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0275"},"terminate_alternative"))," cannot be selected while there is a queued entry call for any entry of the task. In the presence of requeues from a task to one of its subtasks, it is possible that when a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0275"},"terminate_alternative"))," of the subtask is selected, requeued calls (for closed entries only) might still be queued on some entry of the subtask. Tasking_Error will be propagated to such callers, as is usual when a task completes while queued callers remain. ",(0,n.kt)("br",null)),(0,n.kt)("p",null,"The exception Program_Error is raised if all alternatives are closed and there is no else part.",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 1   A ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0270"},"selective_accept"))," is allowed to have several open ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0274"},"delay_alternative")),"s. A ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0270"},"selective_accept"))," is allowed to have several open ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0273"},"accept_alternative")),"s for the same entry.",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"examples-1"}),"Examples"),(0,n.kt)("p",null,(0,n.kt)("em",null,"Example of a task body with a selective accept:")," ",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{mdxType:"CodeBlock"},"task body Server is","\n","   Current_Work_Item : Work_Item;","\n","begin","\n","   loop","\n","      select","\n","         accept Next_Work_Item(WI : in Work_Item) do","\n","            Current_Work_Item := WI;","\n","         end;","\n","         Process_Work_Item(Current_Work_Item);","\n","      or","\n","         accept Shut_Down;","\n","         exit;       -- Premature shut down requested","\n","      or","\n","         terminate;  -- Normal shutdown at end of scope","\n","      end select;","\n","   end loop;","\n","end Server;","\n"),(0,n.kt)("h4",k({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83"),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"The name of ",(0,n.kt)("code",null,"selective_wait")," was changed to ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0270"},"selective_accept"))," to better describe what is being waited for. We kept ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0272"},"select_alternative"))," as is, because ",(0,n.kt)("code",null,"selective_accept_alternative")," was too easily confused with ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0273"},"accept_alternative")),". ",(0,n.kt)("br",null)),(0,n.kt)("h2",k({},{id:"972--timed-entry-calls"}),"9.7.2  Timed Entry Calls"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00345-01"),"}"," ","{",(0,n.kt)("em",null,"AI12-0439-1"),"}"," ",(0,n.kt)("br",null),"[A ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0276"},"timed_entry_call"))," issues an entry call that is cancelled if the call (or a requeue-with-abort of the call) is not selected before the expiration time is reached. A procedure call may appear rather than an entry call for cases where the procedure can be implemented by an entry. ]",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"syntax-2"}),"Syntax"),(0,n.kt)("p",null,(0,n.kt)("code",null,"timed_entry_call"),(0,n.kt)("a",{id:"S0276"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("br",null),"  ",(0,n.kt)("strong",null,"select"),(0,n.kt)("br",null),"   ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0277"},"entry_call_alternative")),(0,n.kt)("br",null),"  ",(0,n.kt)("strong",null,"or"),(0,n.kt)("br",null),"   ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0274"},"delay_alternative")),(0,n.kt)("br",null),"  ",(0,n.kt)("strong",null,"end select"),";",(0,n.kt)("br",null)),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00345-01"),"}"," ",(0,n.kt)("br",null),(0,n.kt)("code",null,"entry_call_alternative"),(0,n.kt)("a",{id:"S0277"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("br",null),"  ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0278"},"procedure_or_entry_call"))," [",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),"]",(0,n.kt)("br",null)),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00345-01"),"}"," ",(0,n.kt)("br",null),(0,n.kt)("code",null,"procedure_or_entry_call"),(0,n.kt)("a",{id:"S0278"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("br",null),"  ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-6/AA-6.4#S0217"},"procedure_call_statement"))," | ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.5#S0264"},"entry_call_statement")),(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"legality-rules-1"}),"Legality Rules"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00345-01"),"}"," ",(0,n.kt)("br",null),"If a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-6/AA-6.4#S0217"},"procedure_call_statement"))," is used for a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0278"},"procedure_or_entry_call")),", the ",(0,n.kt)("em",null,"procedure_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," or ",(0,n.kt)("em",null,"procedure_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.1#S0093"},"prefix"))," of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-6/AA-6.4#S0217"},"procedure_call_statement"))," shall statically denote an entry renamed as a procedure or (a view of) a primitive subprogram of a limited interface whose first parameter is a controlling parameter (see 3.9.2). ",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"This would be a confusing way to call a procedure, so we only allow it when it is possible that the procedure is actually an entry. We could have allowed formal subprograms here, but we didn't because we'd have to allow all formal subprograms, and it would increase the difficulty of generic code sharing.",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},'We say "statically denotes" because an access-to-subprogram cannot be primitive, and we don\'t have anything like access-to-entry. So only names of entries or procedures are possible. ',(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"dynamic-semantics-1"}),"Dynamic Semantics"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00345-01"),"}"," ",(0,n.kt)("br",null),"For the execution of a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0276"},"timed_entry_call")),", the ",(0,n.kt)("em",null,"entry_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name")),", ",(0,n.kt)("em",null,"procedure_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name")),", or ",(0,n.kt)("em",null,"procedure_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.1#S0093"},"prefix")),", and any actual parameters are evaluated, as for a simple entry call (see 9.5.3) or procedure call (see 6.4). The expiration time (see 9.6) for the call is determined by evaluating the ",(0,n.kt)("em",null,"delay_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0274"},"delay_alternative")),". If the call is an entry call or a call on a procedure implemented by an entry, the entry call is then issued. Otherwise, the call proceeds as described in 6.4 for a procedure call, followed by the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0277"},"entry_call_alternative")),"; the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0274"},"delay_alternative"))," is ignored.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"If the call is queued (including due to a requeue-with-abort), and not selected before the expiration time is reached, an attempt to cancel the call is made. If the call completes due to the cancellation, the optional ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0274"},"delay_alternative"))," is executed; if the entry call completes normally, the optional ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0277"},"entry_call_alternative"))," is executed. ",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,n.kt)("em",null,"This paragraph was deleted."),"{",(0,n.kt)("em",null,"AI95-00345-01"),"}"," ",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"examples-2"}),"Examples"),(0,n.kt)("p",null,(0,n.kt)("em",null,"Example of a timed entry call:")," ",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{mdxType:"CodeBlock"},"select","\n","   Controller.Request(Medium)(Some_Item);","\n","or","\n","   delay 45.0;","\n","   --  controller too busy, try something else","\n","end select;","\n"),(0,n.kt)("h4",k({},{id:"wording-changes-from-ada-83-1"}),"Wording Changes from Ada 83"),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI05-0299-1"),"}"," ",(0,n.kt)("br",null),"This subclause comes before the one for Conditional Entry Calls, so we can define conditional entry calls in terms of timed entry calls. ",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"incompatibilities-with-ada-95"}),"Incompatibilities With Ada 95"),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI95-00345-01"),"}"," ","{",(0,n.kt)("em",null,"AI05-0005-1"),"}"," ",(0,n.kt)("br",null),"A procedure call can be used as the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0277"},"entry_call_alternative"))," in a timed or conditional entry call, if the procedure might actually be an entry. Since the fact that something is an entry could be used in resolving these calls in Ada 95, it is possible for timed or conditional entry calls that resolved in Ada 95 to be ambiguous in Ada 2005. That could happen if both an entry and procedure with the same name and profile exist, which should be rare. ",(0,n.kt)("br",null)),(0,n.kt)("h2",k({},{id:"973--conditional-entry-calls"}),"9.7.3  Conditional Entry Calls"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00345-01"),"}"," ","{",(0,n.kt)("em",null,"AI12-0439-1"),"}"," ",(0,n.kt)("br",null),"[A ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0279"},"conditional_entry_call"))," issues an entry call that is then cancelled if it is not selected immediately (or if a requeue-with-abort of the call is not selected immediately). A procedure call may appear rather than an entry call for cases where the procedure can be implemented by an entry.] ",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,n.kt)("strong",null,"To be honest: "),"In the case of an entry call on a protected object, it is OK if the entry is closed at the start of the corresponding protected action, so long as it opens and the call is selected before the end of that protected action (due to changes in the Count attribute). ",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"syntax-3"}),"Syntax"),(0,n.kt)("p",null,(0,n.kt)("code",null,"conditional_entry_call"),(0,n.kt)("a",{id:"S0279"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("br",null),"  ",(0,n.kt)("strong",null,"select"),(0,n.kt)("br",null),"   ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0277"},"entry_call_alternative")),(0,n.kt)("br",null),"  ",(0,n.kt)("strong",null,"else"),(0,n.kt)("br",null),"   ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),(0,n.kt)("br",null),"  ",(0,n.kt)("strong",null,"end select"),";",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"dynamic-semantics-2"}),"Dynamic Semantics"),(0,n.kt)("p",null,"The execution of a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0279"},"conditional_entry_call"))," is defined to be equivalent to the execution of a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0276"},"timed_entry_call"))," with a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0274"},"delay_alternative"))," specifying an immediate expiration time and the same ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," as given after the reserved word ",(0,n.kt)("strong",null,"else"),". ",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 1   ","{",(0,n.kt)("em",null,"AI12-0440-1"),"}"," ",(0,n.kt)("br",null),"A ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0279"},"conditional_entry_call"))," can briefly increase the Count attribute of the entry, even if the conditional call is not selected.",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"examples-3"}),"Examples"),(0,n.kt)("p",null,(0,n.kt)("em",null,"Example of a conditional entry call:")," ",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{mdxType:"CodeBlock"},"--  ","{","AI12-0178-1","}","\n"," procedure Spin(R : in out Resource) is  -- see 9.4","\n","begin","\n","   loop","\n","      select","\n","         R.Seize;","\n","         return;","\n","      else","\n","         null;  --  busy waiting","\n","      end select;","\n","   end loop;","\n","end;","\n"),(0,n.kt)("h4",k({},{id:"wording-changes-from-ada-83-2"}),"Wording Changes from Ada 83"),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI05-0299-1"),"}"," ",(0,n.kt)("br",null),'This subclause comes after the one for Timed Entry Calls, so we can define conditional entry calls in terms of timed entry calls. We do that so that an "expiration time" is defined for both, thereby simplifying the definition of what happens on a requeue-with-abort. ',(0,n.kt)("br",null)),(0,n.kt)("h2",k({},{id:"974--asynchronous-transfer-of-control"}),"9.7.4  Asynchronous Transfer of Control"),(0,n.kt)("p",null,"[An asynchronous ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0269"},"select_statement"))," provides asynchronous transfer of control upon completion of an entry call or the expiration of a delay.] ",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"syntax-4"}),"Syntax"),(0,n.kt)("p",null,(0,n.kt)("code",null,"asynchronous_select"),(0,n.kt)("a",{id:"S0280"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("br",null),"  ",(0,n.kt)("strong",null,"select"),(0,n.kt)("br",null),"   ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0281"},"triggering_alternative")),(0,n.kt)("br",null),"  ",(0,n.kt)("strong",null,"then abort"),(0,n.kt)("br",null),"   ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0283"},"abortable_part")),(0,n.kt)("br",null),"  ",(0,n.kt)("strong",null,"end select"),";",(0,n.kt)("br",null)),(0,n.kt)("p",null,(0,n.kt)("code",null,"triggering_alternative"),(0,n.kt)("a",{id:"S0281"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0282"},"triggering_statement"))," [",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),"]",(0,n.kt)("br",null)),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00345-01"),"}"," ",(0,n.kt)("br",null),(0,n.kt)("code",null,"triggering_statement"),(0,n.kt)("a",{id:"S0282"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0278"},"procedure_or_entry_call"))," | ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.6#S0266"},"delay_statement")),(0,n.kt)("br",null)),(0,n.kt)("p",null,(0,n.kt)("code",null,"abortable_part"),(0,n.kt)("a",{id:"S0283"}),(0,n.kt)("code",null," ::= "),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"dynamic-semantics-3"}),"Dynamic Semantics"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00345-01"),"}"," ",(0,n.kt)("br",null),"For the execution of an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0280"},"asynchronous_select"))," whose ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0282"},"triggering_statement"))," is a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0278"},"procedure_or_entry_call")),", the ",(0,n.kt)("em",null,"entry_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name")),", ",(0,n.kt)("em",null,"procedure_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name")),", or ",(0,n.kt)("em",null,"procedure_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.1#S0093"},"prefix")),", and actual parameters are evaluated as for a simple entry call (see 9.5.3) or procedure call (see 6.4). If the call is an entry call or a call on a procedure implemented by an entry, the entry call is issued. If the entry call is queued (or requeued-with-abort), then the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0283"},"abortable_part"))," is executed. [If the entry call is selected immediately, and never requeued-with-abort, then the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0283"},"abortable_part"))," is never started.] If the call is on a procedure that is not implemented by an entry, the call proceeds as described in 6.4, followed by the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0281"},"triggering_alternative")),"[; the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0283"},"abortable_part"))," is never started].",(0,n.kt)("br",null)),(0,n.kt)("p",null,"For the execution of an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0280"},"asynchronous_select"))," whose ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0282"},"triggering_statement"))," is a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.6#S0266"},"delay_statement")),", the ",(0,n.kt)("em",null,"delay_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," is evaluated and the expiration time is determined, as for a normal ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.6#S0266"},"delay_statement")),". If the expiration time has not already passed, the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0283"},"abortable_part"))," is executed.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"If the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0283"},"abortable_part"))," completes and is left prior to completion of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0282"},"triggering_statement")),", an attempt to cancel the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0282"},"triggering_statement"))," is made. If the attempt to cancel succeeds (see 9.5.3 and 9.6), the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0280"},"asynchronous_select"))," is complete.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"If the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0282"},"triggering_statement"))," completes other than due to cancellation, the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0283"},"abortable_part"))," is aborted (if started but not yet completed - see 9.8). If the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0282"},"triggering_statement"))," completes normally, the optional ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0281"},"triggering_alternative"))," is executed after the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0283"},"abortable_part"))," is left. ",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"We currently don't specify when the by-copy [",(0,n.kt)("strong",null,"in"),"] ",(0,n.kt)("strong",null,"out")," parameters are assigned back into the actuals. We considered requiring that to happen after the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0283"},"abortable_part"))," is left. However, that doesn't seem useful enough to justify possibly overspecifying the implementation approach, since some of the parameters are passed by reference anyway.",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"In an earlier description, we required that the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0281"},"triggering_alternative"))," execute after aborting the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0283"},"abortable_part")),", but before waiting for it to complete and finalize, to provide more rapid response to the triggering event in case the finalization was unbounded. However, various reviewers felt that this created unnecessary complexity in the description, and a potential for undesirable concurrency (and nondeterminism) within a single task. We have now reverted to simpler, more deterministic semantics, but anticipate that further discussion of this issue might be appropriate during subsequent reviews. One possibility is to leave this area implementation defined, so as to encourage experimentation. The user would then have to assume the worst about what kinds of actions are appropriate for the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0281"},"triggering_alternative"))," to achieve portability. ",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"examples-4"}),"Examples"),(0,n.kt)("p",null,(0,n.kt)("em",null,"Example of a main command loop for a command interpreter:")," ",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{mdxType:"CodeBlock"},"loop","\n","   select","\n","      Terminal.Wait_For_Interrupt;","\n",'      Put_Line("Interrupted");',"\n","   then abort","\n","      -- This will be abandoned upon terminal interrupt","\n",'      Put_Line("-',">",' ");',"\n","      Get_Line(Command, Last);","\n","      Process_Command(Command(1..Last));","\n","   end select;","\n","end loop;","\n"),(0,n.kt)("p",null,(0,n.kt)("em",null,"Example of a time-limited calculation:")," ",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{mdxType:"CodeBlock"},"--  ","{","AI12-0442-1","}","\n"," select","\n","   delay 5.0;","\n",'   Put_Line("Calculation does not converge");',"\n","then abort","\n","   -- This calculation is expected to finish in 5.0 seconds;","\n","   --  if not, it is assumed to diverge.","\n","   Horribly_Complicated_Recursive_Function(X, Y);","\n","end select;","\n"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI12-0098-1"),"}"," ","{",(0,n.kt)("em",null,"AI12-0418-1"),"}"," ",(0,n.kt)("br",null),"Note that these examples presume that there are abort completion points (see 9.8) within the execution of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0283"},"abortable_part")),". ",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"extensions-to-ada-83-1"}),"Extensions to Ada 83"),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0280"},"Asynchronous_select"))," is new. ",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"extensions-to-ada-95"}),"Extensions to Ada 95"),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI95-00345-01"),"}"," ",(0,n.kt)("br",null),"A procedure can be used as the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0282"},"triggering_statement"))," of an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0280"},"asynchronous_select")),", if the procedure might actually be an entry. ",(0,n.kt)("br",null)))}_.isMDXComponent=!0}}]);