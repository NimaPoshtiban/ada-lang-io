"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1813],{74137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>A,frontMatter:()=>u,metadata:()=>y,toc:()=>g});var a=n(58168),i=(n(96540),n(15680)),r=n(20793),o=n(91435),l=n(21432),s=n(79162),d=n(34421);const u={sidebar_position:166},m="D.12 Other Optimizations and Determinism Rules",y={unversionedId:"arm/AA-D/AA-D.12",id:"arm/AA-D/AA-D.12",title:"D.12 Other Optimizations and Determinism Rules",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-D/AA-D.12.mdx",sourceDirName:"arm/AA-D",slug:"/arm/AA-D/AA-D.12",permalink:"/docs/arm/AA-D/AA-D.12",draft:!1,tags:[],version:"current",sidebarPosition:166,frontMatter:{sidebar_position:166},sidebar:"referenceManualSidebar",previous:{title:"D.11 Asynchronous Task Control",permalink:"/docs/arm/AA-D/AA-D.11"},next:{title:"D.13 The Ravenscar and Jorvik Profiles",permalink:"/docs/arm/AA-D/AA-D.13"}},p={},g=[{value:"Implementation Requirements",id:"implementation-requirements",level:4},{value:"Documentation Requirements",id:"documentation-requirements",level:4},{value:"Metrics",id:"metrics",level:4}],c={toc:g},h="wrapper";function A(e){let{components:t,...n}=e;return(0,i.yg)(h,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"d12-other-optimizations-and-determinism-rules"},"D.12 Other Optimizations and Determinism Rules"),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,i.yg)(s.A,{mdxType:"MarginText"},"1/3"),(0,i.yg)(d.A,{items:["AI05-0299-1"],mdxType:"MarginInfo"}),(0,i.yg)("p",null,"[This subclause describes various requirements for improving the response and determinism in a real-time system.] ",(0,i.yg)("br",null)),(0,i.yg)("h4",{id:"implementation-requirements"},"Implementation Requirements"),(0,i.yg)(s.A,{mdxType:"MarginText"},"2"),(0,i.yg)("p",null,"If the implementation blocks interrupts (see ",(0,i.yg)("a",{href:"../AA-C/AA-C.3"},"C.3"),") not as a result of direct user action (e.g. an execution of a protected action) there shall be an upper bound on the duration of this blocking. ",(0,i.yg)("br",null)),(0,i.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(s.A,{mdxType:"MarginText"},"2.a"),(0,i.yg)(r.A,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,i.yg)("strong",null),"The implementation shall not allow itself to be interrupted when it is in a state where it is unable to support all the language-defined operations permitted in the execution of interrupt handlers. (see ",(0,i.yg)("a",{href:"../AA-9/AA-9.5#Subclause_9.5.1"},"9.5.1"),"). ",(0,i.yg)("br",null))),(0,i.yg)(s.A,{mdxType:"MarginText"},"3"),(0,i.yg)("p",null,"The implementation shall recognize entry-less protected types. The overhead of acquiring the execution resource of an object of such a type (see ",(0,i.yg)("a",{href:"../AA-9/AA-9.5#Subclause_9.5.1"},"9.5.1"),") shall be minimized. In particular, there should not be any overhead due to evaluating ",(0,i.yg)("code",null,(0,i.yg)("a",{href:"../AA-9/AA-9.5#S0262"},"entry_barrier"))," ",(0,i.yg)("code",null,(0,i.yg)("a",{href:"../AA-4/AA-4.5#S0150"},"condition")),"s. ",(0,i.yg)("br",null)),(0,i.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(s.A,{mdxType:"MarginText"},"3.a"),(0,i.yg)(r.A,{type:"aarm",aarm:"implementation-note",mdxType:"Admonition"},(0,i.yg)("strong",null),"Ideally the overhead should just be a spin-lock. ",(0,i.yg)("br",null))),(0,i.yg)(s.A,{mdxType:"MarginText"},"4"),(0,i.yg)("p",null,"Unchecked_Deallocation shall be supported for terminated tasks that are designated by access types, and shall have the effect of releasing all the storage associated with the task. This includes any run-time system or heap storage that has been implicitly allocated for the task by the implementation.",(0,i.yg)("br",null)),(0,i.yg)("h4",{id:"documentation-requirements"},"Documentation Requirements"),(0,i.yg)(s.A,{mdxType:"MarginText"},"5"),(0,i.yg)("p",null,"The implementation shall document the upper bound on the duration of interrupt blocking caused by the implementation. If this is different for different interrupts or interrupt priority levels, it should be documented for each case. ",(0,i.yg)("br",null)),(0,i.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(s.A,{mdxType:"MarginText"},"5.a/2"),(0,i.yg)(r.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,i.yg)("em",null,"This paragraph was deleted."),(0,i.yg)("br",null))),(0,i.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(s.A,{mdxType:"MarginText"},"5.b/2"),(0,i.yg)(r.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,i.yg)("strong",null,"Documentation Requirement: "),"The upper bound on the duration of interrupt blocking caused by the implementation.",(0,i.yg)("br",null))),(0,i.yg)("h4",{id:"metrics"},"Metrics"),(0,i.yg)(s.A,{mdxType:"MarginText"},"6"),(0,i.yg)("p",null,"The implementation shall document the following metric: ",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"7"),(0,i.yg)("ul",null,(0,i.yg)("li",null,"The overhead associated with obtaining a mutual-exclusive access to an entry-less protected object. This shall be measured in the following way:",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"8"),(0,i.yg)("li",null,"For a protected object of the form: ",(0,i.yg)("br",null))),(0,i.yg)(s.A,{mdxType:"MarginText"},"9"),(0,i.yg)(l.A,{language:"ada",mdxType:"CodeBlock"},"protected Lock is","\n","   procedure Set;","\n","   function Read return Boolean;","\n","private","\n","   Flag : Boolean := False;","\n","end Lock;","\n",(0,i.yg)(s.A,{mdxType:"MarginText"},"10"),"protected body Lock is","\n","   procedure Set is","\n","   begin","\n","      Flag := True;","\n","   end Set;","\n","   function Read return Boolean","\n","   begin","\n","      return Flag;","\n","   end Read;","\n","end Lock;","\n"),(0,i.yg)(s.A,{mdxType:"MarginText"},"11"),(0,i.yg)("ul",null,(0,i.yg)("li",null,"The execution time, in processor clock cycles, of a call to Set. This shall be measured between the point just before issuing the call, and the point just after the call completes. The function Read shall be called later to verify that Set was indeed called (and not optimized away). The calling task shall have sufficiently high priority as to not be preempted during the measurement period. The protected object shall have sufficiently high ceiling priority to allow the task to call Set.",(0,i.yg)("br",null)),(0,i.yg)(s.A,{mdxType:"MarginText"},"12"),(0,i.yg)("li",null,"For a multiprocessor, if supported, the metric shall be reported for the case where no contention (on the execution resource) exists [from tasks executing on other processors]. ",(0,i.yg)("br",null))),(0,i.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,i.yg)(s.A,{mdxType:"MarginText"},"12.a/2"),(0,i.yg)(r.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,i.yg)("strong",null,"Documentation Requirement: "),"The metrics for entry-less protected objects.",(0,i.yg)("br",null))))}A.isMDXComponent=!0}}]);