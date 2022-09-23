"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1475],{5158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>f,default:()=>A,frontMatter:()=>k,metadata:()=>b,toc:()=>g});var a=n(1716),i=n(2787),o=n(2670),r=n(8604),s=n(6990),l=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))h.call(t,n)&&u(e,n,t[n]);return e};const k={sidebar_position:92},f="11.6 Exceptions and Optimization",b={unversionedId:"arm/AA-11/AA-11.6",id:"arm/AA-11/AA-11.6",title:"11.6 Exceptions and Optimization",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-11/AA-11.6.mdx",sourceDirName:"arm/AA-11",slug:"/arm/AA-11/AA-11.6",permalink:"/docs/arm/AA-11/AA-11.6",draft:!1,tags:[],version:"current",sidebarPosition:92,frontMatter:{sidebar_position:92},sidebar:"referenceManualSidebar",previous:{title:"11.5 Suppressing Checks",permalink:"/docs/arm/AA-11/AA-11.5"},next:{title:"12 Generic Units",permalink:"/docs/arm/AA-12/"}},x={},g=[{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4}],T={toc:g};function A(e){var t,n=e,{components:l}=n,u=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&h.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=y(y({},T),u),m(t,d({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("h1",y({},{id:"116-exceptions-and-optimization"}),"11.6 Exceptions and Optimization"),(0,a.kt)("admonition",y({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",y({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"1/3")),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0299-1"),"}"," ",(0,a.kt)("br",null),'[ This subclause gives permission to the implementation to perform certain "optimizations" that do not necessarily preserve the canonical semantics.] ',(0,a.kt)("br",null)),(0,a.kt)("h4",y({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"2/3")),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0299-1"),"}"," ",(0,a.kt)("br",null),"The rest of this Reference Manual (outside this subclause) defines the ",(0,a.kt)("em",null,"canonical semantics")," of the language. [The canonical semantics of a given (legal) program determines a set of possible external effects that can result from the execution of the program with given inputs.] ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"2.a")),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"Note that the canonical semantics is a set of possible behaviors, since some reordering, parallelism, and nondeterminism is allowed by the canonical semantics. ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"2.b/3")),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"{",(0,a.kt)("em",null,"AI05-0299-1"),"}"," ",(0,a.kt)("br",null),"The following parts of the canonical semantics are of particular interest to the reader of this subclause: ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"2.c")),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Behavior in the presence of abnormal objects and objects with invalid representations (see ",(0,a.kt)("a",{href:"../AA-13/AA-13.9#Subclause_13.9.1"},"13.9.1"),").",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"2.d")),(0,a.kt)("li",null,"Various actions that are defined to occur in an arbitrary order.",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"2.e/3")),(0,a.kt)("li",null,"{",(0,a.kt)("em",null,"AI05-0299-1"),"}"," ",(0,a.kt)("br",null),"Behavior in the presence of a misuse of Unchecked_Deallocation, Unchecked_Access, or imported or exported entity (see Clause ",(0,a.kt)("a",{href:"../AA-13/"},"13"),"). ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"3/3"))),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0299-1"),"}"," ",(0,a.kt)("br",null),"[As explained in ",(0,a.kt)("a",{href:"../AA-1/AA-1.1#Subclause_1.1.3"},"1.1.3"),', "',(0,a.kt)("a",{href:"../AA-1/AA-1.1#Subclause_1.1.3"},"Conformity of an Implementation"),'", the external effect of a program is defined in terms of its interactions with its external environment. Hence, the implementation can perform any internal actions whatsoever, in any order or in parallel, so long as the external effect of the execution of the program is one that is allowed by the canonical semantics, or by the rules of this subclause.] ',(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"3.a")),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"Note that an optimization can change the external effect of the program, so long as the changed external effect is an external effect that is allowed by the semantics. Note that the canonical semantics of an erroneous execution allows any external effect whatsoever. Hence, if the implementation can prove that program execution will be erroneous in certain circumstances, there need not be any constraints on the machine code executed in those circumstances. ",(0,a.kt)("br",null)),(0,a.kt)("h4",y({},{id:"implementation-permissions"}),"Implementation Permissions"),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"4")),(0,a.kt)("p",null,"The following additional permissions are granted to the implementation: ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"5/5")),(0,a.kt)("ul",null,(0,a.kt)("li",null,"{",(0,a.kt)("em",null,"AI12-0444-1"),"}"," ",(0,a.kt)("br",null),"An implementation can omit raising an exception when a language-defined check fails. Instead, the operation that failed the check can simply yield an ",(0,a.kt)("em",null,"undefined result"),". The exception is required to be raised by the implementation only if, in the absence of raising it, the value of this undefined result would have some effect on the external interactions of the program. In determining this, the implementation shall not presume that an undefined result has a value that belongs to its subtype, nor even to the base range of its type, if scalar. [Having removed the raise of the exception, the canonical semantics will in general allow the implementation to omit the code for the check, and some or all of the operation itself.] ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"5.a"))),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"Even without this permission, an implementation can always remove a check if it cannot possibly fail. ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"5.b")),(0,a.kt)(i.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,a.kt)("strong",null),'We express the permission in terms of removing the raise, rather than the operation or the check, as it minimizes the disturbance to the canonical semantics (thereby simplifying reasoning). By allowing the implementation to omit the raise, it thereby does not need to "look" at what happens in the exception handler to decide whether the optimization is allowed. ',(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"5.c")),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"The implementation can also omit checks if they cannot possibly fail, or if they could only fail in erroneous executions. This follows from the canonical semantics. ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"5.d")),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-note",title:"Implementation Note: ",mdxType:"Admonition"},(0,a.kt)("strong",null),'This permission is intended to allow normal "dead code removal" optimizations, even if some of the removed code might have failed some language-defined check. However, one may not eliminate the raise of an exception if subsequent code presumes in some way that the check succeeded. For example: ',(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"5.e")),(0,a.kt)(r.Z,{language:"ada",mdxType:"CodeBlock"},"if X * Y ",">"," Integer'Last then","\n",'      Put_Line("X * Y overflowed");',"\n","  end if;","\n","exception","\n","  when others =",">","\n",'      Put_Line("X * Y overflowed");',"\n",(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"5.e.1"))),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"If X*Y does overflow, you may not remove the raise of the exception if the code that does the comparison against Integer'Last presumes that it is comparing it with an in-range Integer value, and hence always yields False.",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"5.f")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"As another example where a raise may not be eliminated: ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"5.g")),(0,a.kt)(r.Z,{language:"ada",mdxType:"CodeBlock"},"subtype Str10 is String(1..10);","\n","  type P10 is access Str10;","\n","  X : P10 := null;","\n","begin","\n","  if X.all'Last = 10 then","\n",'      Put_Line("Oops");',"\n","  end if;","\n",(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"5.g.1"))),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},'In the above code, it would be wrong to eliminate the raise of Constraint_Error on the "X.all" (since X is null), if the code to evaluate \'Last always yields 10 by presuming that X.all belongs to the subtype Str10, without even "looking". ',(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"6/5")),(0,a.kt)("ul",null,(0,a.kt)("li",null,"{",(0,a.kt)("em",null,"AI05-0229-1"),"}"," ","{",(0,a.kt)("em",null,"AI12-0445-1"),"}"," ",(0,a.kt)("br",null),"If an exception is raised due to the failure of a language-defined check, then upon reaching the corresponding ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0305"},"exception_handler"))," (or the termination of the task, if none), the external interactions that have occurred have to reflect only that the exception was raised somewhere within the execution of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," with the handler (or the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.1#S0248"},"task_body")),"), possibly earlier (or later if the interactions are independent of the result of the checked operation) than that defined by the canonical semantics, but not within the execution of some abort-deferred operation or ",(0,a.kt)("em",null,"independent")," subprogram that does not dynamically enclose the execution of the construct whose check failed. An independent subprogram is one that is defined outside the library unit containing the construct whose check failed, and for which the Inline aspect is False. Any assignment that occurred outside of such abort-deferred operations or independent subprograms can be disrupted by the raising of the exception, causing the object or its parts to become abnormal, and certain subsequent uses of the object to be erroneous, as explained in ",(0,a.kt)("a",{href:"../AA-13/AA-13.9#Subclause_13.9.1"},"13.9.1"),". ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"6.a"))),(0,a.kt)(i.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,a.kt)("strong",null),'We allow such variables to become abnormal so that assignments (other than to atomic variables) can be disrupted due to "imprecise" exceptions or instruction scheduling, and so that assignments can be reordered so long as the correct results are produced in the end if no language-defined checks fail. ',(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"6.b")),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"If a check fails, no result dependent on the check may be incorporated in an external interaction. In other words, there is no permission to output meaningless results due to postponing a check. ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"6.c")),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"We believe it is important to state the extra permission to reorder actions in terms of what the programmer can expect at run time, rather than in terms of what the implementation can assume, or what transformations the implementation can perform. Otherwise, how can the programmer write reliable programs?",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"6.d/3")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,a.kt)("em",null,"AI05-0299-1"),"}"," ",(0,a.kt)("br",null),"This subclause has two conflicting goals: to allow as much optimization as possible, and to make program execution as predictable as possible (to ease the writing of reliable programs). The rules given above represent a compromise.",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"6.e")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"Consider the two extremes:",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"6.f/3")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,a.kt)("em",null,"AI05-0299-1"),"}"," ",(0,a.kt)("br",null),"The extreme conservative rule would be to delete this subclause entirely. The semantics of Ada would be the canonical semantics. This achieves the best predictability. It sounds like a disaster from the efficiency point of view, but in practice, implementations would provide modes in which less predictability but more efficiency would be achieved. Such a mode could even be the out-of-the-box mode. In practice, implementers would provide a compromise based on their customer's needs. Therefore, we view this as one viable alternative.",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"6.g")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},'The extreme liberal rule would be "the language does not specify the execution of a program once a language-defined check has failed; such execution can be unpredictable". This achieves the best efficiency. It sounds like a disaster from the predictability point of view, but in practice it might not be so bad. A user would have to assume that exception handlers for exceptions raised by language-defined checks are not portable. They would have to isolate such code (like all nonportable code), and would have to find out, for each implementation of interest, what behaviors can be expected. In practice, implementations would tend to avoid going so far as to punish their customers too much in terms of predictability.',(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"6.h/3")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,a.kt)("em",null,"AI05-0299-1"),"}"," ",(0,a.kt)("br",null),"The most important thing about this subclause is that users understand what they can expect at run time, and implementers understand what optimizations are allowed. Any solution that makes this subclause contain rules that can interpreted in more than one way is unacceptable.",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"6.i")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"We have chosen a compromise between the extreme conservative and extreme liberal rules. The current rule essentially allows arbitrary optimizations within a library unit and inlined subprograms reachable from it, but disallow semantics-disrupting optimizations across library units in the absence of inlined subprograms. This allows a library unit to be debugged, and then reused with some confidence that the abstraction it manages cannot be broken by bugs outside the library unit. ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"7/3")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 1   ","{",(0,a.kt)("em",null,"AI05-0299-1"),"}"," ",(0,a.kt)("br",null),"The permissions granted by this subclause can have an effect on the semantics of a program only if the program fails a language-defined check. ",(0,a.kt)("br",null)),(0,a.kt)("h4",y({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83"),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"7.a")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"RM83-11.6 was unclear. It has been completely rewritten here; we hope this version is clearer. Here's what happened to each paragraph of RM83-11.6: ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"7.b")),(0,a.kt)("ul",null,(0,a.kt)("li",null,'Paragraphs 1 and 2 contain no semantics; they are merely pointing out that anything goes if the canonical semantics is preserved. We have similar introductory paragraphs, but we have tried to clarify that these are not granting any "extra" permission beyond what the rest of the document allows.',(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"7.c")),(0,a.kt)("li",null,'Paragraphs 3 and 4 are reflected in the "extra permission to reorder actions". Note that this permission now allows the reordering of assignments in many cases.',(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"7.d")),(0,a.kt)("li",null,"Paragraph 5 is moved to ",(0,a.kt)("a",{href:"../AA-4/AA-4.5"},"4.5"),', "',(0,a.kt)("a",{href:"../AA-4/AA-4.5"},"Operators and Expression Evaluation"),'", where operator association is discussed. Hence, this is no longer an "extra permission" but is part of the canonical semantics.',(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"7.e")),(0,a.kt)("li",null,"Paragraph 6 now follows from the general permission to store out-of-range values for unconstrained subtypes. Note that the parameters and results of all the predefined operators of a type are of the unconstrained subtype of the type.",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"7.f")),(0,a.kt)("li",null,'Paragraph 7 is reflected in the "extra permission to avoid raising exceptions". ',(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"7.g/5"))),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,a.kt)("em",null,"AI05-0299-1"),"}"," ","{",(0,a.kt)("em",null,"AI12-0005-1"),"}"," ",(0,a.kt)("br",null),"We moved subclause ",(0,a.kt)("a",{href:"../AA-11/AA-11.5"},"11.5"),', "',(0,a.kt)("a",{href:"../AA-11/AA-11.5"},"Suppressing Checks"),'" (which was numbered 11.7) from after 11.6 to before 11.6, in order to preserve the famous number "11.6" (given the changes to earlier subclauses in Clause ',(0,a.kt)("a",{href:"../AA-11/"},"11"),"). ",(0,a.kt)("br",null)))}A.isMDXComponent=!0}}]);