"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[5334],{1716:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(6687);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,_=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(_,o(o({ref:t},p),{},{components:n})):a.createElement(_,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(9440),i=(n(6687),n(1716));const r={sidebar_position:164},o="D.13  The Ravenscar and Jorvik Profiles",s={unversionedId:"arm/AA-D.13",id:"arm/AA-D.13",title:"D.13  The Ravenscar and Jorvik Profiles",description:"{AI05-0246-1} {AI05-0299-1} {AI12-0291-1} [This subclause defines the Ravenscar and Jorvik profiles.]",source:"@site/docs/arm/AA-D.13.md",sourceDirName:"arm",slug:"/arm/AA-D.13",permalink:"/docs/arm/AA-D.13",draft:!1,tags:[],version:"current",sidebarPosition:164,frontMatter:{sidebar_position:164},sidebar:"tutorialSidebar",previous:{title:"D.12  Other Optimizations and Determinism Rules",permalink:"/docs/arm/AA-D.12"},next:{title:"D.14  Execution Time",permalink:"/docs/arm/AA-D.14"}},l={},c=[{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4},{value:"Incompatibilities With Ada 2012",id:"incompatibilities-with-ada-2012",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"d13--the-ravenscar-and-jorvik-profiles"},"D.13  The Ravenscar and Jorvik Profiles"),(0,i.kt)("p",null,"{AI95-00249-01} {AI05-0246-1} {AI05-0299-1} {AI12-0291-1} ","[This subclause defines the Ravenscar and Jorvik profiles.]"," "),(0,i.kt)("p",null,'Paragraphs 2 and 3 were moved to 13.12, "Pragma Restrictions and Pragma Profile". '),(0,i.kt)("h4",{id:"legality-rules"},"Legality Rules"),(0,i.kt)("p",null,"{AI95-00249-01} {AI05-0246-1} {AI12-0291-1} The profile",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"./AA-2.3#S0002"},"identifier")," Ravenscar and profile"),(0,i.kt)("a",{parentName:"p",href:"./AA-2.3#S0002"},"identifier")," Jorvik are usage profiles (see 13.12). For usage profiles Ravenscar and Jorvik, there shall be no profile_",(0,i.kt)("a",{parentName:"p",href:"./AA-2.8#S0020"},"pragma_argument_association"),"s. "),(0,i.kt)("h4",{id:"static-semantics"},"Static Semantics"),(0,i.kt)("p",null,"{AI95-00249-01} {AI05-0246-1} The usage profile Ravenscar is equivalent to the following set of pragmas:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ada"},"{AI95-00249-01} {AI95-00297-01} {AI95-00394-01} {AI05-0171-1} {AI05-0246-1} {AI12-0055-1} {AI12-0073-1} pragma Task_Dispatching_Policy (FIFO_Within_Priorities);\npragma Locking_Policy (Ceiling_Locking);\npragma Detect_Blocking;\npragma Restrictions (\n              No_Abort_Statements,\n              No_Dynamic_Attachment,\n              No_Dynamic_CPU_Assignment,\n              No_Dynamic_Priorities,\n              No_Implicit_Heap_Allocations,\n              No_Local_Protected_Objects,\n              No_Local_Timing_Events,\n              No_Protected_Type_Allocators,\n              No_Relative_Delay,\n              No_Requeue_Statements,\n              No_Select_Statements,\n              No_Specific_Termination_Handlers,\n              No_Task_Allocators,\n              No_Task_Hierarchy,\n              No_Task_Termination,\n              Simple_Barriers,\n              Max_Entry_Queue_Length =&gt 1,\n              Max_Protected_Entries =&gt 1,\n              Max_Task_Entries =&gt 0,\n              No_Dependence =&gt Ada.Asynchronous_Task_Control,\n              No_Dependence =&gt Ada.Calendar,\n              No_Dependence =&gt Ada.Execution_Time.Group_Budgets,\n              No_Dependence =&gt Ada.Execution_Time.Timers,\n              No_Dependence =&gt Ada.Synchronous_Barriers,\n              No_Dependence =&gt Ada.Task_Attributes,\n              No_Dependence =&gt System.Multiprocessors.Dispatching_Domains);\n\n")),(0,i.kt)("p",null,"Discussion: The Ravenscar profile is named for the location of the meeting that defined its initial version. The name is now in widespread use, so we stick with existing practice, rather than using a more descriptive name."),(0,i.kt)("p",null,'The Jorvik profile is named for the city of York, UK, near where the Ravenscar profile was created. "Jorvik" (pronounced "Yorvick") was the Viking name for York. '),(0,i.kt)("p",null,"{AI12-0291-1} The usage profile Jorvik is equivalent to the following set of pragmas:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ada"},"{AI12-0291-1} pragma Task_Dispatching_Policy (FIFO_Within_Priorities);\npragma Locking_Policy (Ceiling_Locking);\npragma Detect_Blocking;\npragma Restrictions (\n              No_Abort_Statements,\n              No_Dynamic_Attachment,\n              No_Dynamic_CPU_Assignment,\n              No_Dynamic_Priorities,\n              No_Local_Protected_Objects,\n              No_Local_Timing_Events,\n              No_Protected_Type_Allocators,\n              No_Requeue_Statements,\n              No_Select_Statements,\n              No_Specific_Termination_Handlers,\n              No_Task_Allocators,\n              No_Task_Hierarchy,\n              No_Task_Termination,\n              Pure_Barriers,\n              Max_Task_Entries =&gt 0,\n              No_Dependence =&gt Ada.Asynchronous_Task_Control,\n              No_Dependence =&gt Ada.Execution_Time.Group_Budgets,\n              No_Dependence =&gt Ada.Execution_Time.Timers,\n              No_Dependence =&gt Ada.Task_Attributes,\n              No_Dependence =&gt System.Multiprocessors.Dispatching_Domains);\n\n")),(0,i.kt)("p",null,"Discussion: The Jorvik profile removes a number of restrictions from the Ravenscar profile to allow additional applications to benefit from predictability and low overhead. Specifically, the following restrictions are removed: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"No_Implicit_Heap_Allocations\nNo_Relative_Delay\nMax_Entry_Queue_Length =&gt 1\nMax_Protected_Entries =&gt 1\nNo_Dependence =&gt Ada.Calendar\nNo_Dependence =&gt Ada.Synchronous_Barriers\n")),(0,i.kt)("p",null,"Jorvik also replaces restriction Simple_Barriers with Pure_Barriers (a weaker requirement than Simple_Barriers). "),(0,i.kt)("p",null,"Paragraph 7 and 8 were deleted. "),(0,i.kt)("h4",{id:"implementation-advice"},"Implementation Advice"),(0,i.kt)("p",null,"{AI05-0171-1} {AI12-0291-1} On a multiprocessor system, an implementation should support a fully partitioned approach if one of these profiles is specified. Each processor should have separate and disjoint ready queues."),(0,i.kt)("p",null,"Implementation Advice: On a multiprocessor system, each processor should have a separate and disjoint ready queue."),(0,i.kt)("p",null,"NOTE 1   {AI95-00249-01} {AI05-0246-1} {AI12-0291-1} For the Ravenscar profile, the effect of the restriction Max_Entry_Queue_Length =",">"," 1 applies only to protected entry queues due to the accompanying restriction Max_Task_Entries =",">"," 0. The restriction Max_Entry_Queue_Length is not applied by the Jorvik profile."),(0,i.kt)("p",null,"NOTE 2   {AI12-0055-1} {AI12-0291-1} When the Ravenscar or Jorvik profile is in effect (via the effect of the No_Dynamic_CPU_Assignment restriction), all of the tasks in the partition will execute on a single CPU unless the programmer explicitly uses aspect CPU to specify the CPU assignments for tasks. The use of multiple CPUs requires care, as many guarantees of single CPU scheduling no longer apply."),(0,i.kt)("p",null,"NOTE 3   {AI12-0055-1} {AI12-0291-1} It is not recommended to specify the CPU of a task to be Not_A_Specific_CPU when the Ravenscar or Jorvik profile is in effect. How a partition executes strongly depends on the assignment of tasks to CPUs."),(0,i.kt)("p",null,"NOTE 4   {AI12-0291-1} Any unit that meets the requirements of the Ravenscar profile also meets the requirements of the Jorvik profile. "),(0,i.kt)("h4",{id:"extensions-to-ada-95"},"Extensions to Ada 95"),(0,i.kt)("p",null,"{AI95-00249-01} {AI05-0246-1} The Ravenscar profile is new; it was moved here by Ada 2012. "),(0,i.kt)("h4",{id:"wording-changes-from-ada-2005"},"Wording Changes from Ada 2005"),(0,i.kt)("p",null,"{AI05-0171-1} How Ravenscar behaves on a multiprocessor system is now defined. "),(0,i.kt)("h4",{id:"incompatibilities-with-ada-2012"},"Incompatibilities With Ada 2012"),(0,i.kt)("p",null,"{AI05-0073-1} Corrigendum: The Ravenscar profile no longer allows the use of package Synchronous_Barriers, as this package violates the fundamental Ravenscar requirement that each waiting point can only block (and release) a single task. This is incompatible with the published Ada 2012 standard, but it is unlikely that any existing Ravenscar runtime ever usefully supported barriers."),(0,i.kt)("p",null,"{AI05-0055-1} Corrigendum:The Ravenscar profile (via the effect of the new restriction No_Dynamic_CPU_Assignment) no longer allows setting the CPU aspect of a task to a non-static value. While this was allowed, an implementation would have had to come up with a creative interpretation of the Ada 2012 requirement to define the association of tasks to processors statically. As such, the new check is more likely to catch bugs than break a working program. "),(0,i.kt)("h4",{id:"extensions-to-ada-2012"},"Extensions to Ada 2012"),(0,i.kt)("p",null,"{AI12-0291-1} The Jorvik profile is new."))}d.isMDXComponent=!0}}]);