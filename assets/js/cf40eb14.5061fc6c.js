"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8787],{1716:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(6687);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),m=n,f=h["".concat(s,".").concat(m)]||h[m]||d[m]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7790:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(9440),n=(a(6687),a(1716));const o={sidebar_position:27},i="3.11  Declarative Parts",l={unversionedId:"arm/AA-3.11",id:"arm/AA-3.11",title:"3.11  Declarative Parts",description:"A [declarativepart contains declarativeitems (possibly none).]",source:"@site/docs/arm/AA-3.11.md",sourceDirName:"arm",slug:"/arm/AA-3.11",permalink:"/docs/arm/AA-3.11",draft:!1,tags:[],version:"current",sidebarPosition:27,frontMatter:{sidebar_position:27},sidebar:"tutorialSidebar",previous:{title:"3.10  Access Types",permalink:"/docs/arm/AA-3.10"},next:{title:"4 Names and Expressions",permalink:"/docs/arm/AA-4"}},s={},p=[{value:"Syntax",id:"syntax",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"3.11.1  Completions of Declarations",id:"3111--completions-of-declarations",level:2},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83-1",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95-1",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"311--declarative-parts"},"3.11  Declarative Parts"),(0,n.kt)("p",null,"[A ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0086"},"declarative_part")," contains ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0087"},"declarative_item"),"s (possibly none).] "),(0,n.kt)("h4",{id:"syntax"},"Syntax"),(0,n.kt)("p",null,"declarative_part",(0,n.kt)("a",{id:"S0086"})," ::= {",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0087"},"declarative_item"),"}"),(0,n.kt)("p",null,"declarative_item",(0,n.kt)("a",{id:"S0087"})," ::=\n",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0088"},"basic_declarative_item")," | ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0089"},"body")),(0,n.kt)("p",null,"{8652/0009} {AI95-00137-01} basic_declarative_item",(0,n.kt)("a",{id:"S0088"})," ::=\n",(0,n.kt)("a",{parentName:"p",href:"./AA-3.1#S0021"},"basic_declaration")," | ",(0,n.kt)("a",{parentName:"p",href:"./AA-13.1#S0343"},"aspect_clause")," | ",(0,n.kt)("a",{parentName:"p",href:"./AA-8.4#S0235"},"use_clause")),(0,n.kt)("p",null,"body",(0,n.kt)("a",{id:"S0089"})," ::= ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0090"},"proper_body")," | ",(0,n.kt)("a",{parentName:"p",href:"./AA-10.1#S0297"},"body_stub")),(0,n.kt)("p",null,"proper_body",(0,n.kt)("a",{id:"S0090"})," ::=\n",(0,n.kt)("a",{parentName:"p",href:"./AA-6.3#S0216"},"subprogram_body")," | ",(0,n.kt)("a",{parentName:"p",href:"./AA-7.2#S0231"},"package_body")," | ",(0,n.kt)("a",{parentName:"p",href:"./AA-9.1#S0248"},"task_body")," | ",(0,n.kt)("a",{parentName:"p",href:"./AA-9.4#S0254"},"protected_body")),(0,n.kt)("h4",{id:"static-semantics"},"Static Semantics"),(0,n.kt)("p",null,"{AI95-00420-01} The list of ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0087"},"declarative_item"),"s of a ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0086"},"declarative_part")," is called the declaration list of the ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0086"},"declarative_part"),". "),(0,n.kt)("h4",{id:"dynamic-semantics"},"Dynamic Semantics"),(0,n.kt)("p",null,"The elaboration of a ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0086"},"declarative_part")," consists of the elaboration of the ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0087"},"declarative_item"),"s, if any, in the order in which they are given in the ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0086"},"declarative_part"),"."),(0,n.kt)("p",null,"An elaborable construct is in the elaborated state after the normal completion of its elaboration. Prior to that, it is not yet elaborated. "),(0,n.kt)("p",null,"Ramification: The elaborated state is only important for bodies; certain uses of a body raise an exception if the body is not yet elaborated."),(0,n.kt)("p",null,'Note that "prior" implies before the start of elaboration, as well as during elaboration.'),(0,n.kt)("p",null,'The use of the term "normal completion" implies that if the elaboration propagates an exception or is aborted, the declaration is not elaborated. RM83 missed the aborted case. '),(0,n.kt)("p",null,"For a construct that attempts to use a body, a check (Elaboration_Check) is performed, as follows: "),(0,n.kt)("p",null,"{8652/0014} {AI95-00064-01} For a call to a (non-protected) subprogram that has an explicit body, a check is made that the body is already elaborated. This check and the evaluations of any actual parameters of the call are done in an arbitrary order. "),(0,n.kt)("p",null,"Discussion: AI83-00180 specifies that there is no elaboration check for a subprogram defined by a ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.8#S0019"},"pragma")," Interface (or equivalently, ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.8#S0019"},"pragma")," Import). AI83-00430 specifies that there is no elaboration check for an enumeration literal. AI83-00406 specifies that the evaluation of parameters and the elaboration check occur in an arbitrary order. AI83-00406 applies to generic instantiation as well (see below)."),(0,n.kt)("p",null,"{8652/0014} {AI95-00064-01} {AI05-0177-1} A subprogram can be completed by a renaming-as-body, a ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.7#S0227"},"null_procedure_declaration"),", or an ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.8#S0228"},"expression_function_declaration"),', and we need to make an elaboration check on such a body, so we use "body" rather than ',(0,n.kt)("a",{parentName:"p",href:"./AA-6.3#S0216"},"subprogram_body")," above. "),(0,n.kt)("p",null,"{AI05-0229-1} For a call to a protected operation of a protected type (that has a body - no check is performed if  the protected type is imported - see B.1), a check is made that the ",(0,n.kt)("a",{parentName:"p",href:"./AA-9.4#S0254"},"protected_body")," is already elaborated. This check and the evaluations of any actual parameters of the call are done in an arbitrary order. "),(0,n.kt)("p",null,'Discussion: A protected type has only one elaboration "bit", rather than one for each operation, because one call may result in evaluating the barriers of other entries, and because there are no elaborable declarations between the bodies of the operations. In fact, the elaboration of a ',(0,n.kt)("a",{parentName:"p",href:"./AA-9.4#S0254"},"protected_body")," does not elaborate the enclosed bodies, since they are not considered independently elaborable."),(0,n.kt)("p",null,"Note that there is no elaboration check when calling a task entry. Task entry calls are permitted even before the associated ",(0,n.kt)("a",{parentName:"p",href:"./AA-9.1#S0248"},"task_body")," has been seen. Such calls are simply queued until the task is activated and reaches a corresponding ",(0,n.kt)("a",{parentName:"p",href:"./AA-9.5#S0258"},"accept_statement"),". We considered a similar rule for protected entries - simply queuing all calls until the ",(0,n.kt)("a",{parentName:"p",href:"./AA-9.4#S0254"},"protected_body")," was seen, but felt it was not worth the possible implementation overhead, particularly given that there might be multiple instances of the protected type. "),(0,n.kt)("p",null,"For the activation of a task, a check is made by the activator that the ",(0,n.kt)("a",{parentName:"p",href:"./AA-9.1#S0248"},"task_body")," is already elaborated. If two or more tasks are being activated together (see 9.2), as the result of the elaboration of a ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0086"},"declarative_part")," or the initialization for the object created by an allocator, this check is done for all of them before activating any of them. "),(0,n.kt)("p",null,"Reason: As specified by AI83-00149, the check is done by the activator, rather than by the task itself. If it were done by the task itself, it would be turned into a Tasking_Error in the activator, and the other tasks would still be activated. "),(0,n.kt)("p",null,"For the instantiation of a generic unit that has a body, a check is made that this body is already elaborated. This check and the evaluation of any ",(0,n.kt)("a",{parentName:"p",href:"./AA-12.3#S0318"},"explicit_generic_actual_parameter"),"s of the instantiation are done in an arbitrary order. "),(0,n.kt)("p",null,"The exception Program_Error is raised if any of these checks fails. "),(0,n.kt)("h4",{id:"extensions-to-ada-83"},"Extensions to Ada 83"),(0,n.kt)("p",null,"{AI95-00114-01} The syntax for ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0086"},"declarative_part")," is modified to remove the ordering restrictions of Ada 83; that is, the distinction between ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0088"},"basic_declarative_item"),"s and later_declarative_items within ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0086"},"declarative_part"),"s is removed. This means that things like ",(0,n.kt)("a",{parentName:"p",href:"./AA-8.4#S0235"},"use_clause"),"s and ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.3#S0032"},"object_declaration"),"s can be freely intermixed with things like bodies."),(0,n.kt)("p",null,"The syntax rule for ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0090"},"proper_body")," now allows a ",(0,n.kt)("a",{parentName:"p",href:"./AA-9.4#S0254"},"protected_body"),", and the rules for elaboration checks now cover calls on protected operations. "),(0,n.kt)("h4",{id:"wording-changes-from-ada-83"},"Wording Changes from Ada 83"),(0,n.kt)("p",null,"The syntax rule for later_declarative_item is removed; the syntax rule for ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0087"},"declarative_item")," is new."),(0,n.kt)("p",null,'RM83 defines "elaborated" and "not yet elaborated" for ',(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0087"},"declarative_item"),'s here, and for other things in 3.1, "Declarations". That\'s no longer necessary, since these terms are fully defined in 3.1.'),(0,n.kt)("p",null,"In RM83, all uses of ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0086"},"declarative_part")," are optional (except for the one in ",(0,n.kt)("a",{parentName:"p",href:"./AA-5.6#S0191"},"block_statement")," with a declare) which is sort of strange, since a ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0086"},"declarative_part")," can be empty, according to the syntax. That is, ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0086"},"declarative_part"),'s are sort of "doubly optional". In Ada 95, these ',(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0086"},"declarative_part"),'s are always required (but can still be empty). To simplify description, we go further and say (see 5.6, "Block Statements") that a ',(0,n.kt)("a",{parentName:"p",href:"./AA-5.6#S0191"},"block_statement")," without an explicit ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0086"},"declarative_part")," is equivalent to one with an empty one. "),(0,n.kt)("h4",{id:"wording-changes-from-ada-95"},"Wording Changes from Ada 95"),(0,n.kt)("p",null,"{8652/0009} {AI95-00137-01} Corrigendum: Changed representation clauses to aspect clauses to reflect that they are used for more than just representation."),(0,n.kt)("p",null,"{8652/0014} {AI95-00064-01} Corrigendum: Clarified that the elaboration check applies to all kinds of subprogram bodies."),(0,n.kt)("p",null,'{AI95-00420-01} Defined "declaration list" to avoid confusion for various rules. Other kinds of declaration list are defined elsewhere. '),(0,n.kt)("h2",{id:"3111--completions-of-declarations"},"3.11.1  Completions of Declarations"),(0,n.kt)("p",null,"{8652/0014} {AI95-00064-01} {AI05-0177-1} Declarations sometimes come in two parts. A declaration that requires a second part is said to require completion. The second part is called the completion of the declaration (and of the entity declared), and is either another declaration, a body, or a ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.8#S0019"},"pragma"),". A body is a ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0089"},"body"),", an ",(0,n.kt)("a",{parentName:"p",href:"./AA-9.5#S0260"},"entry_body"),", a ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.7#S0227"},"null_procedure_declaration")," or an ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.8#S0228"},"expression_function_declaration")," that completes another declaration, or a renaming-as-body (see 8.5.4). "),(0,n.kt)("p",null,"Discussion: Throughout the RM95, there are rules about completions that define the following: "),(0,n.kt)("p",null,"Which declarations require a corresponding completion."),(0,n.kt)("p",null,"Which constructs can only serve as the completion of a declaration."),(0,n.kt)("p",null,"Where the completion of a declaration is allowed to be."),(0,n.kt)("p",null,"What kinds of completions are allowed to correspond to each kind of declaration that allows one. "),(0,n.kt)("p",null,"Don't confuse this compile-time concept with the run-time concept of completion defined in 7.6.1."),(0,n.kt)("p",null,"Note that the declaration of a private type (if limited) can be completed with the declaration of a task type, which is then completed with a body. Thus, a declaration can actually come in three parts."),(0,n.kt)("p",null,"{AI95-00217-06} {AI05-0162-1} An incomplete type (whether declared in the limited view of a package or not) may be completed by a private type declaration, so we can in fact have four parts."),(0,n.kt)("p",null,"{AI05-0229-1} In Ada 2012, there are no language-defined pragmas that act as completions. Pragma Import (which is obsolescent) has the effect of setting aspect Import to True; such an aspect makes giving a completion illegal. The wording that allows pragmas as completions was left as it is harmless and appears in many places in this Reference Manual. "),(0,n.kt)("h4",{id:"name-resolution-rules"},"Name Resolution Rules"),(0,n.kt)("p",null,"A construct that can be a completion is interpreted as the completion of a prior declaration only if: "),(0,n.kt)("p",null,"The declaration and the completion occur immediately within the same declarative region;"),(0,n.kt)("p",null,"The defining name or ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.1#S0201"},"defining_program_unit_name")," in the completion is the same as in the declaration, or in the case of a ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.8#S0019"},"pragma"),", the ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.8#S0019"},"pragma")," applies to the declaration;"),(0,n.kt)("p",null,"If the declaration is overloadable, then the completion either has a type-conformant profile, or is a ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.8#S0019"},"pragma"),". "),(0,n.kt)("h4",{id:"legality-rules"},"Legality Rules"),(0,n.kt)("p",null,"{AI05-0229-1} An implicit declaration shall not have a completion. For any explicit declaration that is specified to require completion, there shall be a corresponding explicit completion, unless the declared entity is imported (see B.1). "),(0,n.kt)("p",null,"To be honest: {AI95-00217-06} The implicit declarations occurring in a limited view do have a completion (the explicit declaration occurring in the full view) but that's a special case, since the implicit declarations are actually built from the explicit ones. So they do not require a completion, they have one by fiat. "),(0,n.kt)("p",null,"Discussion: {AI05-0299-1} The implicit declarations of predefined operators are not allowed to have a completion. Enumeration literals, although they are subprograms, are not allowed to have a corresponding ",(0,n.kt)("a",{parentName:"p",href:"./AA-6.3#S0216"},"subprogram_body"),". That's because the completion rules are described in terms of constructs (",(0,n.kt)("a",{parentName:"p",href:"./AA-6.1#S0195"},"subprogram_declaration"),"s) and not entities (subprograms). When a completion is required, it has to be explicit; the implicit null ",(0,n.kt)("a",{parentName:"p",href:"./AA-7.2#S0231"},"package_body")," that Clause 7 talks about cannot serve as the completion of a ",(0,n.kt)("a",{parentName:"p",href:"./AA-7.1#S0229"},"package_declaration")," if a completion is required. "),(0,n.kt)("p",null,"At most one completion is allowed for a given declaration. Additional requirements on completions appear where each kind of completion is defined. "),(0,n.kt)("p",null,"Ramification: A subunit is not a completion; the stub is."),(0,n.kt)("p",null,'If the completion of a declaration is also a declaration, then that declaration might have a completion, too. For example, a limited private type can be completed with a task type, which can then be completed with a task body. This is not a violation of the "at most one completion" rule. '),(0,n.kt)("p",null,"A type is completely defined at a place that is after its full type definition (if it has one) and after all of its subcomponent types are completely defined. A type shall be completely defined before it is frozen (see 13.14 and 7.3). "),(0,n.kt)("p",null,"Reason: Index types are always completely defined - no need to mention them. There is no way for a completely defined type to depend on the value of a (still) deferred constant. "),(0,n.kt)("p",null,"NOTE 1   {AI05-0229-1} Completions are in principle allowed for any kind of explicit declaration. However, for some kinds of declaration, the only allowed completion is an implementation-defined pragma, and implementations are not required to have any such pragmas. "),(0,n.kt)("p",null,"This paragraph was deleted.{AI05-0229-1} "),(0,n.kt)("p",null,'NOTE 2   There are rules that prevent premature uses of declarations that have a corresponding completion. The Elaboration_Checks of 3.11 prevent such uses at run time for subprograms, protected operations, tasks, and generic units. The rules of 13.14, "Freezing Rules" prevent, at compile time, premature uses of other entities such as private types and deferred constants. '),(0,n.kt)("h4",{id:"wording-changes-from-ada-83-1"},"Wording Changes from Ada 83"),(0,n.kt)("p",null,"This subclause is new. It is intended to cover all kinds of completions of declarations, be they a body for a spec, a full type for an incomplete or private type, a full constant declaration for a deferred constant declaration, or a ",(0,n.kt)("a",{parentName:"p",href:"./AA-2.8#S0019"},"pragma")," Import for any kind of entity. "),(0,n.kt)("h4",{id:"wording-changes-from-ada-95-1"},"Wording Changes from Ada 95"),(0,n.kt)("p",null,"{8652/0014} {AI95-00064-01} Corrigendum: Added a definition of body, which is different than ",(0,n.kt)("a",{parentName:"p",href:"./AA-3.11#S0089"},"body")," or body. "),(0,n.kt)("h4",{id:"wording-changes-from-ada-2005"},"Wording Changes from Ada 2005"),(0,n.kt)("p",null,"{AI95-0177-1} Added null procedures and expression functions that are completions to the definition of body."))}d.isMDXComponent=!0}}]);