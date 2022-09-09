"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1671],{145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>y,frontMatter:()=>m,metadata:()=>f,toc:()=>b});var l=n(1716),a=n(7556),o=n(9464),r=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(A)for(var n of A(t))d.call(t,n)&&u(e,n,t[n]);return e};const m={sidebar_position:40},h="5.1 Simple and Compound Statements - Sequences of Statements",f={unversionedId:"arm/AA-5/AA-5.1",id:"arm/AA-5/AA-5.1",title:"5.1 Simple and Compound Statements - Sequences of Statements",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-5/AA-5.1.mdx",sourceDirName:"arm/AA-5",slug:"/arm/AA-5/AA-5.1",permalink:"/docs/arm/AA-5/AA-5.1",draft:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"referenceManualSidebar",previous:{title:"5 Statements",permalink:"/docs/arm/AA-5/"},next:{title:"5.2 Assignment Statements",permalink:"/docs/arm/AA-5/AA-5.2"}},p={},b=[{value:"Syntax",id:"syntax",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Bounded (Run-Time) Errors",id:"bounded-run-time-errors",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}],S={toc:b};function y(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var l in e)c.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&A)for(var l of A(e))t.indexOf(l)<0&&d.call(e,l)&&(n[l]=e[l]);return n})(n,["components"]);return(0,l.kt)("wrapper",(t=k(k({},S),u),i(t,s({components:r,mdxType:"MDXLayout"}))),(0,l.kt)("h1",k({},{id:"51-simple-and-compound-statements---sequences-of-statements"}),"5.1 Simple and Compound Statements - Sequences of Statements"),(0,l.kt)("admonition",k({},{type:"warning"}),(0,l.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,l.kt)("a",k({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,l.kt)("p",null,"{",(0,l.kt)("em",null,"AI12-0119-1"),"}"," ",(0,l.kt)("br",null),"[A ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0167"},"statement"))," is either simple or compound. A ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0168"},"simple_statement"))," encloses no other ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0167"},"statement")),". A ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0169"},"compound_statement"))," can enclose ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0168"},"simple_statement")),"s and other ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0169"},"compound_statement")),"s.] A ",(0,l.kt)("em",null,"parallel construct")," is a construct that introduces additional logical threads of control (see clause 9) without creating a new task. Parallel loops (see 5.5) and ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.6#S0192"},"parallel_block_statement")),"s (see 5.6.1) are parallel constructs. ",(0,l.kt)("br",null)),(0,l.kt)(o.Z,{type:"aarm",aarm:"glossary-entry",title:"Glossary entry: ",mdxType:"Admonition"},(0,l.kt)("strong",null),"A parallel construct is an executable construct that defines multiple activities of a single task that can proceed in parallel, via the execution of multiple logical threads of control.",(0,l.kt)("br",null)),(0,l.kt)("h4",k({},{id:"syntax"}),"Syntax"),(0,l.kt)("p",null,"{",(0,l.kt)("em",null,"AI05-0179-1"),"}"," ",(0,l.kt)("br",null),(0,l.kt)("code",null,"sequence_of_statements"),(0,l.kt)("a",{id:"S0166"}),(0,l.kt)("code",null," ::= "),(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0167"},"statement"))," ","{",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0167"},"statement")),"}"," ","{",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label")),"}",(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("code",null,"statement"),(0,l.kt)("a",{id:"S0167"}),(0,l.kt)("code",null," ::= "),(0,l.kt)("br",null),"   ","{",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label")),"}"," ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0168"},"simple_statement"))," | ","{",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label")),"}"," ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0169"},"compound_statement")),(0,l.kt)("br",null)),(0,l.kt)("p",null,"{",(0,l.kt)("em",null,"AI95-00318-02"),"}"," ",(0,l.kt)("br",null),(0,l.kt)("code",null,"simple_statement"),(0,l.kt)("a",{id:"S0168"}),(0,l.kt)("code",null," ::= "),(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0170"},"null_statement")),(0,l.kt)("br",null),"   | ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement")),"\t| ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.7#S0193"},"exit_statement")),(0,l.kt)("br",null),"   | ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.8#S0194"},"goto_statement")),"\t| ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-6/AA-6.4#S0217"},"procedure_call_statement")),(0,l.kt)("br",null),"   | ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-6/AA-6.5#S0222"},"simple_return_statement")),"\t| ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-9/AA-9.5#S0264"},"entry_call_statement")),(0,l.kt)("br",null),"   | ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-9/AA-9.5#S0265"},"requeue_statement")),"\t| ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-9/AA-9.6#S0266"},"delay_statement")),(0,l.kt)("br",null),"   | ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-9/AA-9.8#S0284"},"abort_statement")),"\t| ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-11/AA-11.3#S0308"},"raise_statement")),(0,l.kt)("br",null),"   | ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-13/AA-13.8#S0357"},"code_statement")),(0,l.kt)("br",null)),(0,l.kt)("p",null,"{",(0,l.kt)("em",null,"AI95-00318-02"),"}"," ","{",(0,l.kt)("em",null,"AI12-0119-1"),"}"," ",(0,l.kt)("br",null),(0,l.kt)("code",null,"compound_statement"),(0,l.kt)("a",{id:"S0169"}),(0,l.kt)("code",null," ::= "),(0,l.kt)("br",null),"     ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.3#S0175"},"if_statement")),"\t| ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.4#S0176"},"case_statement")),(0,l.kt)("br",null),"   | ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.5#S0178"},"loop_statement")),"\t| ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement")),(0,l.kt)("br",null),"   | ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-6/AA-6.5#S0225"},"extended_return_statement")),(0,l.kt)("br",null),"   | ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.6#S0192"},"parallel_block_statement")),(0,l.kt)("br",null),"   | ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-9/AA-9.5#S0258"},"accept_statement")),"\t| ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-9/AA-9.7#S0269"},"select_statement")),(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("code",null,"null_statement"),(0,l.kt)("a",{id:"S0170"}),(0,l.kt)("code",null," ::= "),(0,l.kt)("strong",null,"null"),";",(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("code",null,"label"),(0,l.kt)("a",{id:"S0171"}),(0,l.kt)("code",null," ::= "),"<","<",(0,l.kt)("em",null,"label_"),(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier")),">",">",(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("code",null,"statement_identifier"),(0,l.kt)("a",{id:"S0172"}),(0,l.kt)("code",null," ::= "),(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-4/AA-4.1#S0092"},"direct_name")),(0,l.kt)("br",null)),(0,l.kt)("p",null,"The ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-4/AA-4.1#S0092"},"direct_name"))," of a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier"))," shall be an ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," (not an ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-6/AA-6.1#S0202"},"operator_symbol")),"). ",(0,l.kt)("br",null)),(0,l.kt)("h4",k({},{id:"name-resolution-rules"}),"Name Resolution Rules"),(0,l.kt)("p",null,"The ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-4/AA-4.1#S0092"},"direct_name"))," of a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier"))," shall resolve to denote its corresponding implicit declaration (see below). ",(0,l.kt)("br",null)),(0,l.kt)("h4",k({},{id:"legality-rules"}),"Legality Rules"),(0,l.kt)("p",null,"Distinct ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"s shall be used for all ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier")),"s that appear in the same body, including inner ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement")),"s but excluding inner program units. ",(0,l.kt)("br",null)),(0,l.kt)("h4",k({},{id:"static-semantics"}),"Static Semantics"),(0,l.kt)("p",null,"For each ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier")),", there is an implicit declaration (with the specified ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),") at the end of the ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part"))," of the innermost ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement"))," or body that encloses the ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier")),". The implicit declarations occur in the same order as the ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier")),"s occur in the source text. If a usage name denotes such an implicit declaration, the entity it denotes is the ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label")),", ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.5#S0178"},"loop_statement")),", or ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement"))," with the given ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier")),". ",(0,l.kt)("br",null)),(0,l.kt)(o.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,l.kt)("strong",null),"We talk in terms of individual ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier")),"s here rather than in terms of the corresponding statements, since a given ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0167"},"statement"))," may have multiple ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier")),"s.",(0,l.kt)("br",null)),(0,l.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"A ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement"))," that has no explicit ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part"))," has an implicit empty ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part")),", so this rule can safely refer to the ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part"))," of a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement")),".",(0,l.kt)("br",null)),(0,l.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"The scope of a declaration starts at the place of the declaration itself (see 8.2). In the case of a label, loop, or block name, it follows from this rule that the scope of the implicit declaration starts before the first explicit occurrence of the corresponding name, since this occurrence is either in a statement label, a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.5#S0178"},"loop_statement")),", a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement")),", or a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.8#S0194"},"goto_statement")),". An implicit declaration in a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement"))," may hide a declaration given in an outer program unit or ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement"))," (according to the usual rules of hiding explained in 8.3).",(0,l.kt)("br",null)),(0,l.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"The syntax rule for ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label"))," uses ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier"))," which is a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-4/AA-4.1#S0092"},"direct_name"))," (not a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-3/AA-3.1#S0022"},"defining_identifier")),"), because labels are implicitly declared. The same applies to loop and block names. In other words, the ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label"))," itself is not the defining occurrence; the implicit declaration is.",(0,l.kt)("br",null)),(0,l.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"We cannot consider the ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label"))," to be a defining occurrence. An example that can tell the difference is this: ",(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"CodeBlock"},"declare","\n","    -- Label Foo is implicitly declared here.","\n","begin","\n","    for Foo in ... loop","\n","        ...","\n","        ","<","<","Foo",">",">"," -- Illegal.","\n","        ...","\n","    end loop;","\n","end;","\n","  ","\n"),(0,l.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,l.kt)("em",null,"AI05-0299-1"),"}"," ",(0,l.kt)("br",null),"The label in this example is hidden from itself by the loop parameter with the same name; the example is illegal. We considered creating a new syntactic category name, separate from ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-4/AA-4.1#S0092"},"direct_name"))," and ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-4/AA-4.1#S0099"},"selector_name")),", for use in the case of statement labels. However, that would confuse the rules in Clause 8, so we didn't do it. ",(0,l.kt)("br",null)),(0,l.kt)("p",null,"{",(0,l.kt)("em",null,"AI05-0179-1"),"}"," ",(0,l.kt)("br",null),"If one or more ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label")),"s end a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),", an implicit ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0170"},"null_statement"))," follows the ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label")),"s before any following constructs.",(0,l.kt)("br",null)),(0,l.kt)(o.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,l.kt)("strong",null),"The semantics of a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.8#S0194"},"goto_statement"))," is defined in terms of the statement having (following) that label. Thus we ensure that every label has a following statement, which might be implicit. ",(0,l.kt)("br",null)),(0,l.kt)("h4",k({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,l.kt)("p",null,"The execution of a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0170"},"null_statement"))," has no effect.",(0,l.kt)("br",null)),(0,l.kt)("p",null,"{",(0,l.kt)("em",null,"AI95-00318-02"),"}"," ",(0,l.kt)("br",null),"A ",(0,l.kt)("em",null,"transfer of control")," is the run-time action of an ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.7#S0193"},"exit_statement")),", return statement, ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.8#S0194"},"goto_statement")),", or ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-9/AA-9.5#S0265"},"requeue_statement")),", selection of a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-9/AA-9.7#S0275"},"terminate_alternative")),", raising of an exception, or an abort, which causes the next action performed to be one other than what would normally be expected from the other rules of the language. [As explained in 7.6.1, a transfer of control can cause the execution of constructs to be completed and then left, which may trigger finalization.]",(0,l.kt)("br",null)),(0,l.kt)("p",null,"The execution of a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," consists of the execution of the individual ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0167"},"statement")),"s in succession until the ",(0,l.kt)("code",null,"sequence_")," is completed. ",(0,l.kt)("br",null)),(0,l.kt)(o.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,l.kt)("strong",null),"It could be completed by reaching the end of it, or by a transfer of control. ",(0,l.kt)("br",null)),(0,l.kt)("p",null,"{",(0,l.kt)("em",null,"AI12-0119-1"),"}"," ",(0,l.kt)("br",null),"Within a parallel construct, if a transfer of control out of the construct is initiated by one of the logical threads of control, an attempt is made to ",(0,l.kt)("em",null,"cancel")," all other logical threads of control initiated by the parallel construct. Once all other logical threads of control of the construct either complete or are canceled, the transfer of control occurs. If two or more logical threads of control of the same construct initiate such a transfer of control concurrently, one of them is chosen arbitrarily and the others are canceled.",(0,l.kt)("br",null)),(0,l.kt)("p",null,"{",(0,l.kt)("em",null,"AI12-0119-1"),"}"," ",(0,l.kt)("br",null),"When a logical thread of control is canceled, the cancellation causes it to complete as though it had performed a transfer of control to the point where it would have finished its execution. Such a cancellation is deferred while the logical thread of control is executing within an abort-deferred operation (see 9.8), and may be deferred further, but not past a point where the logical thread initiates a new nested parallel construct or reaches an exception handler that is outside such an abort-deferred operation. ",(0,l.kt)("br",null)),(0,l.kt)("h4",k({},{id:"bounded-run-time-errors"}),"Bounded (Run-Time) Errors"),(0,l.kt)("p",null,"{",(0,l.kt)("em",null,"AI12-0119-1"),"}"," ","{",(0,l.kt)("em",null,"AI12-0442-1"),"}"," ",(0,l.kt)("br",null),"During the execution of a parallel construct, it is a bounded error to invoke an operation that is potentially blocking (see 9.5). Program_Error is raised if the error is detected by the implementation; otherwise, the execution of the potentially blocking operation can either proceed normally, or it can result in the indefinite blocking of some or all of the logical threads of control making up the current task. ",(0,l.kt)("br",null)),(0,l.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE   A ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier"))," that appears immediately within the declarative region of a named ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.5#S0178"},"loop_statement"))," or an ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-9/AA-9.5#S0258"},"accept_statement"))," is nevertheless implicitly declared immediately within the declarative region of the innermost enclosing body or ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement")),"; in other words, the expanded name for a named statement is not affected by whether the statement occurs inside or outside a named loop or an ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-9/AA-9.5#S0258"},"accept_statement"))," - only nesting within ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement")),"s is relevant to the form of its expanded name. ",(0,l.kt)("br",null)),(0,l.kt)(o.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,l.kt)("strong",null),"Each comment in the following example gives the expanded name associated with an entity declared in the task body: ",(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"CodeBlock"},"task body Compute is","\n","   Sum : Integer := 0;                       -- Compute.Sum","\n","begin","\n"," Outer:                                      -- Compute.Outer","\n","   for I in 1..10 loop     -- Compute.Outer.I","\n","    Blk:                                     -- Compute.Blk","\n","      declare","\n","         Sum : Integer := 0;                 -- Compute.Blk.Sum","\n","      begin","\n","         accept Ent(I : out Integer; J : in Integer) do","\n","                                             -- Compute.Ent.I, Compute.Ent.J","\n","            Compute.Ent.I := Compute.Outer.I;","\n","          Inner:                             -- Compute.Blk.Inner","\n","            for J in 1..10 loop","\n","                                             -- Compute.Blk.Inner.J","\n","               Sum := Sum + Compute.Blk.Inner.J * Compute.Ent.J;","\n","            end loop Inner;","\n","         end Ent;","\n","         Compute.Sum := Compute.Sum + Compute.Blk.Sum;","\n","      end Blk;","\n","   end loop Outer;","\n","   Record_Result(Sum);","\n","end Compute;","\n"),(0,l.kt)("h4",k({},{id:"examples"}),"Examples"),(0,l.kt)("p",null,(0,l.kt)("em",null,"Examples of labeled statements:")," ",(0,l.kt)("br",null)),(0,l.kt)(a.Z,{mdxType:"CodeBlock"},"<","<","Here",">",">"," ","<","<","Ici",">",">"," ","<","<","Aqui",">",">"," ","<","<","Hier",">",">"," null;","\n","<","<","After",">",">"," X := 1;","\n"),(0,l.kt)("h4",k({},{id:"extensions-to-ada-83"}),"Extensions to Ada 83"),(0,l.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"The ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-9/AA-9.5#S0265"},"requeue_statement"))," is new. ",(0,l.kt)("br",null)),(0,l.kt)("h4",k({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83"),(0,l.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"We define the syntactic category ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier"))," to simplify the description. It is used for labels, loop names, and block names. We define the entity associated with the implicit declarations of statement names.",(0,l.kt)("br",null)),(0,l.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"Completion includes completion caused by a transfer of control, although RM83-5.1(6) did not take this view. ",(0,l.kt)("br",null)),(0,l.kt)("h4",k({},{id:"extensions-to-ada-95"}),"Extensions to Ada 95"),(0,l.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,l.kt)("em",null,"AI95-00318-02"),"}"," ",(0,l.kt)("br",null),"The ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-6/AA-6.5#S0225"},"extended_return_statement"))," is new (",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-6/AA-6.5#S0222"},"simple_return_statement"))," is merely renamed). ",(0,l.kt)("br",null)),(0,l.kt)("h4",k({},{id:"extensions-to-ada-2005"}),"Extensions to Ada 2005"),(0,l.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,l.kt)("em",null,"AI05-0179-1"),"}"," ",(0,l.kt)("br",null),"A ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label"))," can end a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),", eliminating the requirement for having an explicit ",(0,l.kt)("strong",null,"null"),"; statement after an ending label (a common use). ",(0,l.kt)("br",null)),(0,l.kt)("h4",k({},{id:"extensions-to-ada-2012"}),"Extensions to Ada 2012"),(0,l.kt)(o.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,l.kt)("em",null,"AI12-0119-1"),"}"," ",(0,l.kt)("br",null),'The definition of "parallel constructs" and the ',(0,l.kt)("code",null,(0,l.kt)("a",{href:"../AA-5/AA-5.6#S0192"},"parallel_block_statement"))," are new. ",(0,l.kt)("br",null)))}y.isMDXComponent=!0}}]);