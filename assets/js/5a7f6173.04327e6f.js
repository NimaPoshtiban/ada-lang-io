"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8648],{1974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>A,default:()=>g,frontMatter:()=>u,metadata:()=>f,toc:()=>b});var a=n(1716),o=n(7556),i=n(9464),l=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(d)for(var n of d(t))k.call(t,n)&&m(e,n,t[n]);return e};const u={sidebar_position:74},A="9.3 Task Dependence - Termination of Tasks",f={unversionedId:"arm/AA-9/AA-9.3",id:"arm/AA-9/AA-9.3",title:"9.3 Task Dependence - Termination of Tasks",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-9/AA-9.3.mdx",sourceDirName:"arm/AA-9",slug:"/arm/AA-9/AA-9.3",permalink:"/docs/arm/AA-9/AA-9.3",draft:!1,tags:[],version:"current",sidebarPosition:74,frontMatter:{sidebar_position:74},sidebar:"referenceManualSidebar",previous:{title:"9.2 Task Execution - Task Activation",permalink:"/docs/arm/AA-9/AA-9.2"},next:{title:"9.4 Protected Units and Protected Objects",permalink:"/docs/arm/AA-9/AA-9.4"}},p={},b=[{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}],y={toc:b};function g(e){var t,n=e,{components:l}=n,m=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&k.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},y),m),r(t,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("h1",h({},{id:"93-task-dependence---termination-of-tasks"}),"9.3 Task Dependence - Termination of Tasks"),(0,a.kt)("admonition",h({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",h({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)("h4",h({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,a.kt)("p",null,"Each task (other than an environment task - see 10.2) ",(0,a.kt)("em",null,"depends")," on one or more masters (see 7.6.1), as follows: ",(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",null,"{",(0,a.kt)("em",null,"AI12-0070-1"),"}"," ",(0,a.kt)("br",null),"If the task is created by the evaluation of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.8#S0164"},"allocator"))," for a given named access type, it depends on each master that includes the elaboration of the declaration of the ultimate ancestor of the given access type.",(0,a.kt)("br",null)),(0,a.kt)("li",null,"If the task is created by the elaboration of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.3#S0032"},"object_declaration")),", it depends on each master that includes this elaboration.",(0,a.kt)("br",null)),(0,a.kt)("li",null,"{",(0,a.kt)("em",null,"AI95-00416-01"),"}"," ",(0,a.kt)("br",null),"Otherwise, the task depends on the master of the outermost object of which it is a part (as determined by the accessibility level of that object - see 3.10.2 and 7.6.1), as well as on any master whose execution includes that of the master of the outermost object. ",(0,a.kt)("br",null))),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"{",(0,a.kt)("em",null,"AI95-00416-01"),"}"," ",(0,a.kt)("br",null),"The master of a task created by a return statement changes when the accessibility of the return object changes. Note that its activation happens, if at all, only after the function returns and all accessibility level changes have occurred. ",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Furthermore, if a task depends on a given master, it is defined to depend on the task that executes the master, and (recursively) on any master of that task. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,a.kt)("strong",null),'Don\'t confuse these kinds of dependences with the dependences among compilation units defined in 10.1.1, "Compilation Units - Library Units". ',(0,a.kt)("br",null)),(0,a.kt)("p",null,"A task is said to be ",(0,a.kt)("em",null,"completed")," when the execution of its corresponding ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.1#S0248"},"task_body"))," is completed. A task is said to be ",(0,a.kt)("em",null,"terminated")," when any finalization of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.1#S0248"},"task_body"))," has been performed (see 7.6.1). [The first step of finalizing a master (including a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.1#S0248"},"task_body")),") is to wait for the termination of any tasks dependent on the master.] The task executing the master is blocked until all the dependents have terminated. [Any remaining finalization is then performed and the master is left.]",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Completion of a task (and the corresponding ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.1#S0248"},"task_body")),") can occur when the task is blocked at a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.7#S0269"},"select_statement"))," with an open ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.7#S0275"},"terminate_alternative"))," (see 9.7.1); the open ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.7#S0275"},"terminate_alternative"))," is selected if and only if the following conditions are satisfied: ",(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",null,"{",(0,a.kt)("em",null,"AI95-00415-01"),"}"," ",(0,a.kt)("br",null),"The task depends on some completed master; and",(0,a.kt)("br",null)),(0,a.kt)("li",null,"Each task that depends on the master considered is either already terminated or similarly blocked at a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.7#S0269"},"select_statement"))," with an open ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.7#S0275"},"terminate_alternative")),". ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"When both conditions are satisfied, the task considered becomes completed, together with all tasks that depend on the master considered that are not yet completed. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"Any required finalization is performed after the selection of ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.7#S0275"},"terminate_alternative")),"s. The tasks are not callable during the finalization. In some ways it is as though they were aborted. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 1   The full view of a limited private type can be a task type, or can have subcomponents of a task type. Creation of an object of such a type creates dependences according to the full type.",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 2   An ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-8/AA-8.5#S0239"},"object_renaming_declaration"))," defines a new view of an existing entity and hence creates no further dependence.",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 3   ","{",(0,a.kt)("em",null,"AI12-0440-1"),"}"," ",(0,a.kt)("br",null),"The rules given for the collective completion of a group of tasks all blocked on ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.7#S0269"},"select_statement")),"s with open ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.7#S0275"},"terminate_alternative")),"s ensure that the collective completion can occur only when there are no remaining active tasks that can call one of the tasks being collectively completed.",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 4   If two or more tasks are blocked on ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.7#S0269"},"select_statement")),"s with open ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.7#S0275"},"terminate_alternative")),"s, and become completed collectively, their finalization actions proceed concurrently.",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 5   The completion of a task can occur due to any of the following: ",(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",null,"the raising of an exception during the elaboration of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part"))," of the corresponding ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.1#S0248"},"task_body")),";",(0,a.kt)("br",null)),(0,a.kt)("li",null,"the completion of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0304"},"handled_sequence_of_statements"))," of the corresponding ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.1#S0248"},"task_body")),";",(0,a.kt)("br",null)),(0,a.kt)("li",null,"the selection of an open ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.7#S0275"},"terminate_alternative"))," of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.7#S0269"},"select_statement"))," in the corresponding ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.1#S0248"},"task_body")),";",(0,a.kt)("br",null)),(0,a.kt)("li",null,"the abort of the task. ",(0,a.kt)("br",null))),(0,a.kt)("h4",h({},{id:"examples"}),"Examples"),(0,a.kt)("p",null,(0,a.kt)("em",null,"Example of task dependence:")," ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"CodeBlock"},"declare","\n","   type Global is access Server;        --  see 9.1","\n","   A, B : Server;","\n","   G    : Global;","\n","begin","\n","   --  activation of A and B","\n","   declare","\n","      type Local is access Server;","\n","      X : Global := new Server;  --  activation of X.all","\n","      L : Local  := new Server;  --  activation of L.all","\n","      C : Server;","\n","   begin","\n","      --  activation of C","\n","      G := X;  --  both G and X designate the same task object","\n","      ...","\n","   end;  --  await termination of C and L.all (but not X.all)","\n","   ...","\n","end;  --  await termination of A, B, and G.all","\n"),(0,a.kt)("h4",h({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},'We have revised the wording to be consistent with the definition of master now given in 7.6.1, "Completion and Finalization".',(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"Tasks that used to depend on library packages in Ada 83, now depend on the (implicit) ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.1#S0248"},"task_body"))," of the environment task (see 10.2). Therefore, the environment task has to wait for them before performing library level finalization and terminating the partition. In Ada 83 the requirement to wait for tasks that depended on library packages was not as clear.",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},'What was "collective termination" is now "collective completion" resulting from selecting ',(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.7#S0275"},"terminate_alternative")),"s. This is because finalization still occurs for such tasks, and this happens after selecting the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.7#S0275"},"terminate_alternative")),", but before termination. ",(0,a.kt)("br",null)),(0,a.kt)("h4",h({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,a.kt)("em",null,"AI95-00416-01"),"}"," ",(0,a.kt)("br",null),"Added missing wording that explained the master of tasks that are neither ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.3#S0032"},"object_declaration")),"s nor ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.8#S0164"},"allocator")),"s, such as function returns. ",(0,a.kt)("br",null)),(0,a.kt)("h4",h({},{id:"wording-changes-from-ada-2012"}),"Wording Changes from Ada 2012"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,a.kt)("em",null,"AI12-0070-1"),"}"," ",(0,a.kt)("strong",null,(0,a.kt)("br",null),"Corrigendum:")," Ensured that the master of tasks that are not ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.8#S0164"},"allocator")),"s of named access types is correctly determined. (Ignoring the accessibility rules of 3.10.2 could not be intended.) ",(0,a.kt)("br",null)))}g.isMDXComponent=!0}}]);