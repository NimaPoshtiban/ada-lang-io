"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[4334],{29553:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=a(58168),i=(a(96540),a(15680));const o={title:"5.9 Erroneous execution and bounded errors"},r=void 0,l={unversionedId:"style-guide/s5/09",id:"style-guide/s5/09",title:"5.9 Erroneous execution and bounded errors",description:"Ada 95 introduces the category of bounded errors. Bounded errors are",source:"@site/docs/style-guide/s5/09.mdx",sourceDirName:"style-guide/s5",slug:"/style-guide/s5/09",permalink:"/docs/style-guide/s5/09",draft:!1,tags:[],version:"current",frontMatter:{title:"5.9 Erroneous execution and bounded errors"},sidebar:"styleGuideSidebar",previous:{title:"5.8 Using exceptions",permalink:"/docs/style-guide/s5/08"},next:{title:"5.10 Summary",permalink:"/docs/style-guide/s5/10"}},s={},d=[{value:"Unchecked Conversion",id:"unchecked-conversion",level:3},{value:"guideline",id:"guideline",level:4},{value:"example",id:"example",level:4},{value:"rationale",id:"rationale",level:4},{value:"Unchecked Deallocation",id:"unchecked-deallocation",level:3},{value:"guideline",id:"guideline-1",level:4},{value:"rationale",id:"rationale-1",level:4},{value:"Unchecked Access",id:"unchecked-access",level:3},{value:"guideline",id:"guideline-2",level:4},{value:"rationale",id:"rationale-2",level:4},{value:"exceptions",id:"exceptions",level:4},{value:"Address Clauses",id:"address-clauses",level:3},{value:"guideline",id:"guideline-3",level:4},{value:"example",id:"example-1",level:4},{value:"rationale",id:"rationale-3",level:4},{value:"Suppression of Exception Check",id:"suppression-of-exception-check",level:3},{value:"guideline",id:"guideline-4",level:4},{value:"rationale",id:"rationale-4",level:4},{value:"Initialization",id:"initialization",level:3},{value:"guideline",id:"guideline-5",level:4},{value:"example",id:"example-2",level:4},{value:"rationale",id:"rationale-5",level:4},{value:"notes",id:"notes",level:4},{value:"guideline",id:"guideline-6",level:4},{value:"rationale",id:"rationale-6",level:4},{value:"notes",id:"notes-1",level:4},{value:"Exception Propagation",id:"exception-propagation",level:3},{value:"guideline",id:"guideline-7",level:4},{value:"rationale",id:"rationale-7",level:4},{value:"Protected Objects",id:"protected-objects",level:3},{value:"guideline",id:"guideline-8",level:4},{value:"rationale",id:"rationale-8",level:4},{value:"Abort Statement",id:"abort-statement",level:3},{value:"guideline",id:"guideline-9",level:4},{value:"rationale",id:"rationale-9",level:4}],u={toc:d},c="wrapper";function p(e){let{components:n,...a}=e;return(0,i.yg)(c,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Ada 95 introduces the category of bounded errors. Bounded errors are\ncases where the behavior is not deterministic but falls within\nwell-defined bounds (Rationale 1995, \xa71.4). The consequence of a bounded\nerror is to limit the behavior of compilers so that an Ada environment\nis not free to do whatever it wants in the presence of errors. The ",(0,i.yg)("a",{parentName:"p",href:"http://www.adahome.com/rm95/rm9x-01-01-05.html"},"Ada\nReference Manual (1995)"),"\ndefines a set of possible outcomes for the consequences of undefined\nbehavior, as in an uninitialized value or a value outside the range of\nits subtype. For example, the executing program may raise the predefined\nexception ",(0,i.yg)("inlineCode",{parentName:"p"},"Program_Error"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Constraint_Error"),", or it may do nothing."),(0,i.yg)("p",null,"An Ada program is ",(0,i.yg)("em",{parentName:"p"},"erroneous")," when it generates an error that is not\nrequired to be detected by the compiler or run-time environments. As\nstated in the ",(0,i.yg)("a",{parentName:"p",href:"http://www.adahome.com/rm95/rm9x-01-01-05.html"},"Ada Reference Manual (1995,\n\xa71.1.5)"),', "The effects\nof erroneous execution are unpredictable." If the compiler does detect\nan instance of an erroneous program, its options are to indicate a\ncompile time error; to insert the code to raise ',(0,i.yg)("inlineCode",{parentName:"p"},"Program_Error"),",\npossibly to write a message to that effect; or to do nothing at all."),(0,i.yg)("p",null,"Erroneousness is not a concept unique to Ada. The guidelines below\ndescribe or explain some specific instances of erroneousness defined in\nthe ",(0,i.yg)("a",{parentName:"p",href:"http://www.adahome.com/rm95/rm9x-01-01-05.html"},"Ada Reference Manual\n(1995)"),". These\nguidelines are not intended to be all-inclusive but rather emphasize\nsome commonly overlooked problem areas. Arbitrary order dependencies are\nnot, strictly speaking, a case of erroneous execution; thus, they are\ndiscussed in Guideline 7.1.9 as a portability issue."),(0,i.yg)("h3",{id:"unchecked-conversion"},"Unchecked Conversion"),(0,i.yg)("h4",{id:"guideline"},"guideline"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Use ",(0,i.yg)("inlineCode",{parentName:"li"},"Ada.Unchecked_Conversion")," only with the utmost care (",(0,i.yg)("a",{parentName:"li",href:"http://www.adahome.com/rm95/rm9x-13-09.html"},"Ada\nReference Manual 1995,\n\xa713.9"),")."),(0,i.yg)("li",{parentName:"ul"},"Consider using the ",(0,i.yg)("inlineCode",{parentName:"li"},"'Valid")," attribute to check the validity of\nscalar data."),(0,i.yg)("li",{parentName:"ul"},"Ensure that the value resulting from ",(0,i.yg)("inlineCode",{parentName:"li"},"Ada.Unchecked_Conversion"),"\nproperly represents a value of the parameter's subtype."),(0,i.yg)("li",{parentName:"ul"},"Isolate the use of ",(0,i.yg)("inlineCode",{parentName:"li"},"Ada.Unchecked_Conversion")," in package bodies.")),(0,i.yg)("h4",{id:"example"},"example"),(0,i.yg)("p",null,"The following example shows how to use the ",(0,i.yg)("inlineCode",{parentName:"p"},"'Valid")," attribute to check\nvalidity of scalar data:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ada"},"------------------------------------------------------------------------\nwith Ada.Unchecked_Conversion;\nwith Ada.Text_IO;\nwith Ada.Integer_Text_IO;\n\nprocedure Test is\n\n   type Color is (Red, Yellow, Blue);\n   for Color'Size use Integer'Size;\n\n   function Integer_To_Color is\n      new Ada.Unchecked_Conversion (Source => Integer,\n                                    Target => Color);\n\n   Possible_Color : Color;\n   Number         : Integer;\n\nbegin  -- Test\n\n   Ada.Integer_Text_IO.Get (Number);\n   Possible_Color := Integer_To_Color (Number);\n\n   if Possible_Color'Valid then\n      Ada.Text_IO.Put_Line(Color'Image(Possible_Color));\n   else\n      Ada.Text_IO.Put_Line(\"Number does not correspond to a color.\");\n   end if;\n\nend Test;\n------------------------------------------------------------------------\n")),(0,i.yg)("h4",{id:"rationale"},"rationale"),(0,i.yg)("p",null,"An unchecked conversion is a bit-for-bit copy without regard to the\nmeanings attached to those bits and bit positions by either the source\nor the destination type. The source bit pattern can easily be\nmeaningless in the context of the destination type. Unchecked\nconversions can create values that violate type constraints on\nsubsequent operations. Unchecked conversion of objects mismatched in\nsize has implementation-dependent results."),(0,i.yg)("p",null,"Using the ",(0,i.yg)("inlineCode",{parentName:"p"},"'Valid")," attribute on scalar data allows you to check whether\nit is in range without raising an exception if it is out of range. There\nare several cases where such a validity check enhances the readability\nand maintainability of the code:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Data produced through an unchecked conversion"),(0,i.yg)("li",{parentName:"ul"},"Input data"),(0,i.yg)("li",{parentName:"ul"},"Parameter values returned from a foreign language interface"),(0,i.yg)("li",{parentName:"ul"},"Aborted assignment (during asynchronous transfer of control or\nexecution of an ",(0,i.yg)("inlineCode",{parentName:"li"},"abort")," statement)"),(0,i.yg)("li",{parentName:"ul"},"Disrupted assignment from failure of a language-defined check"),(0,i.yg)("li",{parentName:"ul"},"Data whose address has been specified with the ",(0,i.yg)("inlineCode",{parentName:"li"},"'Address"),"\nattribute")))),(0,i.yg)("p",null,"An access value should not be assumed to be correct when obtained\nwithout compiler or run-time checks. When dealing with access values,\nuse of the ",(0,i.yg)("inlineCode",{parentName:"p"},"'Valid")," attribute helps prevent the erroneous dereferencing\nthat might occur after using ",(0,i.yg)("inlineCode",{parentName:"p"},"Ada.Unchecked_Deallocation"),",\n",(0,i.yg)("inlineCode",{parentName:"p"},"Unchecked_Access"),", or ",(0,i.yg)("inlineCode",{parentName:"p"},"Ada.Unchecked_Conversion"),"."),(0,i.yg)("p",null,"In the case of a nonscalar object used as an actual parameter in an\nunchecked conversion, you should ensure that its value on return from\nthe procedure properly represents a value in the subtype. This case\noccurs when the parameter is of mode ",(0,i.yg)("inlineCode",{parentName:"p"},"out")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"in out"),". It is important\nto check the value when interfacing to foreign languages or using a\nlanguage-defined input procedure. The ",(0,i.yg)("a",{parentName:"p",href:"http://www.adahome.com/rm95/rm9x-13-09-01.html"},"Ada Reference Manual (1995,\n\xa713.9.1)")," lists the\nfull rules concerning data validity."),(0,i.yg)("h3",{id:"unchecked-deallocation"},"Unchecked Deallocation"),(0,i.yg)("h4",{id:"guideline-1"},"guideline"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Isolate the use of ",(0,i.yg)("inlineCode",{parentName:"li"},"Ada.Unchecked_Deallocation")," in package bodies."),(0,i.yg)("li",{parentName:"ul"},"Ensure that no dangling reference to the local object exists after\nexiting the scope of the local object.")),(0,i.yg)("h4",{id:"rationale-1"},"rationale"),(0,i.yg)("p",null,"Most of the reasons for using ",(0,i.yg)("inlineCode",{parentName:"p"},"Ada.Unchecked_Deallocation")," with caution\nhave been given in Guideline 5.4.5. When this feature is used, no\nchecking is performed to verify that there is only one access path to\nthe storage being deallocated. Thus, any other access paths are not made\n",(0,i.yg)("inlineCode",{parentName:"p"},"null"),". Depending on the value of these other access paths could result\nin erroneous execution."),(0,i.yg)("p",null,"If your Ada environment implicitly uses dynamic heap storage but does\nnot fully and reliably reclaim and reuse heap storage, you should not\nuse ",(0,i.yg)("inlineCode",{parentName:"p"},"Ada.Unchecked_Deallocation"),"."),(0,i.yg)("h3",{id:"unchecked-access"},"Unchecked Access"),(0,i.yg)("h4",{id:"guideline-2"},"guideline"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Minimize the use of the attribute ",(0,i.yg)("inlineCode",{parentName:"li"},"Unchecked_Access"),", preferably\nisolating it to package bodies."),(0,i.yg)("li",{parentName:"ul"},"Use the attribute ",(0,i.yg)("inlineCode",{parentName:"li"},"Unchecked_Access"),' only on data whose\nlifetime/scope is "library level."')),(0,i.yg)("h4",{id:"rationale-2"},"rationale"),(0,i.yg)("p",null,"The accessibility rules are checked statically at compile time (except\nfor access parameters, which are checked dynamically). These rules\nensure that the access value cannot outlive the object it designates.\nBecause these rules are not applied in the case of ",(0,i.yg)("inlineCode",{parentName:"p"},"Unchecked_Access"),",\nan access path could be followed to an object no longer in scope."),(0,i.yg)("p",null,"Isolating the use of the attribute ",(0,i.yg)("inlineCode",{parentName:"p"},"Unchecked_Access")," means to isolate\nits use from clients of the package. You should not apply it to an\naccess value merely for the sake of returning a now unsafe value to\nclients."),(0,i.yg)("p",null,"When you use the attribute ",(0,i.yg)("inlineCode",{parentName:"p"},"Unchecked_Access"),", you are creating access\nvalues in an unsafe manner. You run the risk of dangling references,\nwhich in turn lead to erroneous execution (",(0,i.yg)("a",{parentName:"p",href:"http://www.adahome.com/rm95/rm9x-13-09-01.html"},"Ada Reference Manual 1995,\n\xa713.9.1"),")."),(0,i.yg)("h4",{id:"exceptions"},"exceptions"),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"http://www.adahome.com/rm95/rm9x-13-10.html"},"Ada Reference Manual (1995,\n\xa713.10"),") defines the\nfollowing potential use for this otherwise dangerous attribute. ",(0,i.yg)("em",{parentName:"p"},'"This\nattribute is provided to support the situation where a local object is\nto be inserted into a global linked data structure, when the programmer\nknows that it will always be removed from the data structure prior to\nexiting the object\'s scope."')),(0,i.yg)("h3",{id:"address-clauses"},"Address Clauses"),(0,i.yg)("h4",{id:"guideline-3"},"guideline"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},'Use address clauses to map variables and entries to the hardware\ndevice or memory, not to model the FORTRAN "equivalence" feature.'),(0,i.yg)("li",{parentName:"ul"},"Ensure that the address specified in an attribute definition clause\nis valid and does not conflict with the alignment."),(0,i.yg)("li",{parentName:"ul"},"If available in your Ada environment, use the package\n",(0,i.yg)("inlineCode",{parentName:"li"},"Ada.Interrupts")," to associate handlers with interrupts."),(0,i.yg)("li",{parentName:"ul"},"Avoid using the address clause for nonimported program units.")),(0,i.yg)("h4",{id:"example-1"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ada"},"Single_Address : constant System.Address := System.Storage_Elements.To_Address(...);\nInterrupt_Vector_Table : Hardware_Array;\nfor Interrupt_Vector_Table'Address use Single_Address;\n")),(0,i.yg)("h4",{id:"rationale-3"},"rationale"),(0,i.yg)("p",null,"The result of specifying a single address for multiple objects or\nprogram units is undefined, as is specifying multiple addresses for a\nsingle object or program unit. Specifying multiple address clauses for\nan interrupt is also undefined. It does not necessarily overlay objects\nor program units, or associate a single entry with more than one\ninterrupt."),(0,i.yg)("p",null,"You are responsible for ensuring the validity of an address you specify.\nAda requires that the object of an address be an integral multiple of\nits alignment."),(0,i.yg)("p",null,"In Ada 83 (Ada Reference Manual 1983) you had to use values of type\n",(0,i.yg)("inlineCode",{parentName:"p"},"System.Address")," to attach an interrupt entry to an interrupt. While\nthis technique is allowed in Ada 95, you are using an obsolete feature.\nYou should use a protected procedure and the appropriate pragmas\n(Rationale 1995, \xa7C.3.2)."),(0,i.yg)("h3",{id:"suppression-of-exception-check"},"Suppression of Exception Check"),(0,i.yg)("h4",{id:"guideline-4"},"guideline"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Do not suppress exception checks during development."),(0,i.yg)("li",{parentName:"ul"},"If necessary, during operation, introduce blocks that encompass the\nsmallest range of statements that can safely have exception checking\nremoved.")),(0,i.yg)("h4",{id:"rationale-4"},"rationale"),(0,i.yg)("p",null,"If you disable exception checks and program execution results in a\ncondition in which an exception would otherwise occur, the program\nexecution is erroneous. The results are unpredictable. Further, you must\nstill be prepared to deal with the suppressed exceptions if they are\nraised in and propagated from the bodies of subprograms, tasks, and\npackages you call."),(0,i.yg)("p",null,"By minimizing the code that has exception checking removed, you increase\nthe reliability of the program. There is a rule of thumb that suggests\nthat 20% of the code is responsible for 80% of the CPU time. So, once\nyou have identified the code that actually needs exception checking\nremoved, it is wise to isolate it in a block (with appropriate comments)\nand leave the surrounding code with exception checking in effect."),(0,i.yg)("h3",{id:"initialization"},"Initialization"),(0,i.yg)("h4",{id:"guideline-5"},"guideline"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Initialize all objects prior to use."),(0,i.yg)("li",{parentName:"ul"},"Use caution when initializing access values."),(0,i.yg)("li",{parentName:"ul"},"Do not depend on default initialization that is not part of the\nlanguage."),(0,i.yg)("li",{parentName:"ul"},"Derive from a controlled type and override the primitive procedure\nto ensure automatic initialization."),(0,i.yg)("li",{parentName:"ul"},"Ensure elaboration of an entity before using it."),(0,i.yg)("li",{parentName:"ul"},"Use function calls in declarations cautiously.")),(0,i.yg)("h4",{id:"example-2"},"example"),(0,i.yg)("p",null,"The first example illustrates the potential problem with initializing\naccess values:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ada"},"procedure Mix_Letters (Of_String : in out String) is\n   type String_Ptr is access String;\n   Ptr : String_Ptr := new String'(Of_String);  -- could raise Storage_Error in caller\nbegin -- Mix_Letters\n   ...\nexception\n   ...  -- cannot trap Storage_Error raised during elaboration of Ptr declaration\nend Mix_Letters;\n")),(0,i.yg)("p",null,"The second example illustrates the issue of ensuring the elaboration of\nan entity before its use:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ada"},"------------------------------------------------------------------------\npackage Robot_Controller is\n   ...\n   function Sense return Position;\n   ...\nend Robot_Controller;\n------------------------------------------------------------------------\npackage body Robot_Controller is\n...\n   Goal : Position := Sense;       -- This raises Program_Error\n   ...\n   ---------------------------------------------------------------------\n   function Sense return Position is\n   begin\n      ...\n   end Sense;\n   ---------------------------------------------------------------------\nbegin  -- Robot_Controller\n   Goal := Sense;                  -- The function has been elaborated.\n   ...\nend Robot_Controller;\n------------------------------------------------------------------------\n")),(0,i.yg)("h4",{id:"rationale-5"},"rationale"),(0,i.yg)("p",null,"Ada does not define an initial default value for objects of any type\nother than access types, whose initial default value is null. If you are\ninitializing an access value at the point at which it is declared and\nthe allocation raises the exception ",(0,i.yg)("inlineCode",{parentName:"p"},"Storage_Error"),", the exception is\nraised in the calling not the called procedure. The caller is unprepared\nto handle this exception because it knows nothing about the\nproblem-causing allocation."),(0,i.yg)("p",null,"Operating systems differ in what they do when they allocate a page in\nmemory: one operating system may zero out the entire page; a second may\ndo nothing. Therefore, using the value of an object before it has been\nassigned a value causes unpredictable (but bounded) behavior, possibly\nraising an exception. Objects can be initialized implicitly by\ndeclaration or explicitly by assignment statements. Initialization at\nthe point of declaration is safest as well as easiest for maintainers.\nYou can also specify default values for components of records as part of\nthe type declarations for those records."),(0,i.yg)("p",null,"Ensuring initialization does not imply initialization at the\ndeclaration. In the example above, ",(0,i.yg)("inlineCode",{parentName:"p"},"Goal")," must be initialized via a\nfunction call. This cannot occur at the declaration because the function\n",(0,i.yg)("inlineCode",{parentName:"p"},"Sense")," has not yet been elaborated, but it can occur later as part of\nthe sequence of statements of the body of the enclosing package."),(0,i.yg)("p",null,"An unelaborated function called within a declaration (initialization)\nraises the exception, ",(0,i.yg)("inlineCode",{parentName:"p"},"Program_Error"),", that must be handled outside of\nthe unit containing the declarations. This is true for any exception the\nfunction raises even if it has been elaborated."),(0,i.yg)("p",null,"If an exception is raised by a function call in a declaration, it is not\nhandled in that immediate scope. It is raised to the enclosing scope.\nThis can be controlled by nesting blocks."),(0,i.yg)("p",null,"See also Guideline 9.2.3."),(0,i.yg)("h4",{id:"notes"},"notes"),(0,i.yg)("p",null,"Sometimes, elaboration order can be dictated with pragma\n",(0,i.yg)("inlineCode",{parentName:"p"},"Elaborate_All"),". Pragma ",(0,i.yg)("inlineCode",{parentName:"p"},"Elaborate_All")," applied to a library unit causes\nthe elaboration of the transitive closure of the unit and its\ndependents. In other words, all bodies of library units reachable from\nthis library unit's body are elaborated, preventing an\naccess-before-elaboration error (Rationale 1995, \xa710.3). Use the pragma\n",(0,i.yg)("inlineCode",{parentName:"p"},"Elaborate_Body")," when you want the body of a package to be elaborated\nimmediately after its declaration."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"5.9.7 Direct_IO and Sequential_IO")),(0,i.yg)("h4",{id:"guideline-6"},"guideline"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Ensure that values obtained from ",(0,i.yg)("inlineCode",{parentName:"li"},"Ada.Direct_IO")," and\n",(0,i.yg)("inlineCode",{parentName:"li"},"Ada.Sequential_IO")," are in range."),(0,i.yg)("li",{parentName:"ul"},"Use the ",(0,i.yg)("inlineCode",{parentName:"li"},"'Valid")," attribute to check the validity of scalar values\nobtained through ",(0,i.yg)("inlineCode",{parentName:"li"},"Ada.Direct_IO")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"Ada.Sequential_IO."))),(0,i.yg)("h4",{id:"rationale-6"},"rationale"),(0,i.yg)("p",null,"The exception ",(0,i.yg)("inlineCode",{parentName:"p"},"Data_Error")," can be propagated by the ",(0,i.yg)("inlineCode",{parentName:"p"},"Read")," procedures\nfound in these packages if the element read cannot be interpreted as a\nvalue of the required subtype (",(0,i.yg)("a",{parentName:"p",href:"http://www.adahome.com/rm95/rm9x-A-13.html"},"Ada Reference Manual 1995,\n\xa7A.13"),"). However, if the\nassociated check is too complex, an implementation need not propagate\n",(0,i.yg)("inlineCode",{parentName:"p"},"Data_Error"),". In cases where the element read cannot be interpreted as a\nvalue of the required subtype but ",(0,i.yg)("inlineCode",{parentName:"p"},"Data_Error")," is not propagated, the\nresulting value can be abnormal, and subsequent references to the value\ncan lead to erroneous execution."),(0,i.yg)("h4",{id:"notes-1"},"notes"),(0,i.yg)("p",null,"It is sometimes difficult to force an optimizing compiler to perform the\nnecessary checks on a value that the compiler believes is in range. Most\ncompiler vendors allow the option of suppressing optimization, which can\nbe helpful."),(0,i.yg)("h3",{id:"exception-propagation"},"Exception Propagation"),(0,i.yg)("h4",{id:"guideline-7"},"guideline"),(0,i.yg)("p",null,"Prevent exceptions from propagating outside any user-defined ",(0,i.yg)("inlineCode",{parentName:"p"},"Finalize"),"\nor ",(0,i.yg)("inlineCode",{parentName:"p"},"Adjust")," procedure by providing handlers for all predefined and\nuser-defined exceptions at the end of each procedure."),(0,i.yg)("h4",{id:"rationale-7"},"rationale"),(0,i.yg)("p",null,"Using ",(0,i.yg)("inlineCode",{parentName:"p"},"Finalize")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"Adjust")," to propagate an exception results in a\nbounded error (",(0,i.yg)("a",{parentName:"p",href:"http://www.adahome.com/rm95/rm9x-07-06-01.html"},"Ada Reference Manual 1995,\n\xa77.6.1"),"). Either the\nexception will be ignored or a ",(0,i.yg)("inlineCode",{parentName:"p"},"Program_Error")," exception will be raised."),(0,i.yg)("h3",{id:"protected-objects"},"Protected Objects"),(0,i.yg)("h4",{id:"guideline-8"},"guideline"),(0,i.yg)("p",null,"Do not invoke a potentially blocking operation within a protected entry,\na protected procedure, or a protected function."),(0,i.yg)("h4",{id:"rationale-8"},"rationale"),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"http://www.adahome.com/rm95/rm9x-09-05-01.html"},"Ada Reference Manual (1995,\n\xa79.5.1)")," lists the\npotentially blocking operations:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Select"),"statement"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Accept")," statement"),(0,i.yg)("li",{parentName:"ul"},"Entry-call statement"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Delay")," statement"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Abort")," statement"),(0,i.yg)("li",{parentName:"ul"},"Task creation or activation"),(0,i.yg)("li",{parentName:"ul"},"External call on a protected subprogram (or an external requeue)\nwith the same target object as that of the protected action"),(0,i.yg)("li",{parentName:"ul"},"Call on a subprogram whose body contains a potentially blocking\noperation")))),(0,i.yg)("p",null,"Invoking any of these potentially blocking operations could lead either\nto a bounded error being detected or to a deadlock situation. In the\ncase of bounded error, the exception ",(0,i.yg)("inlineCode",{parentName:"p"},"Program_Error")," is raised. In\naddition, avoid calling routines within a protected entry, procedure, or\nfunction that could directly or indirectly invoke operating system\nprimitives or similar operations that can cause blocking that is not\nvisible to the Ada run-time system."),(0,i.yg)("h3",{id:"abort-statement"},"Abort Statement"),(0,i.yg)("h4",{id:"guideline-9"},"guideline"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Do not use an asynchronous ",(0,i.yg)("inlineCode",{parentName:"li"},"select"),"statement within abort-deferred\noperations."),(0,i.yg)("li",{parentName:"ul"},"Do not create a task that depends on a master that is included\nentirely within the execution of an abort-deferred operation.")),(0,i.yg)("h4",{id:"rationale-9"},"rationale"),(0,i.yg)("p",null,"An abort-deferred operation is one of the following:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Protected entry, protected procedure, or protected function"),(0,i.yg)("li",{parentName:"ul"},"User-defined ",(0,i.yg)("inlineCode",{parentName:"li"},"Initialize")," procedure used as the last step of a\ndefault initialization of a controlled object"),(0,i.yg)("li",{parentName:"ul"},"User-defined ",(0,i.yg)("inlineCode",{parentName:"li"},"Finalize")," procedure used in finalization of a\ncontrolled object"),(0,i.yg)("li",{parentName:"ul"},"User-defined ",(0,i.yg)("inlineCode",{parentName:"li"},"Adjust")," procedure used in assignment of a\ncontrolled object")))),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"http://www.adahome.com/rm95/rm9x-09-08.html"},"Ada Reference Manual (1995,\n\xa79.8)")," states that the\npractices discouraged in the guidelines result in bounded error. The\nexception ",(0,i.yg)("inlineCode",{parentName:"p"},"Program_Error")," is raised if the implementation detects the\nerror. If the implementation does not detect the error, the operations\nproceed as they would outside an abort-deferred operation. An ",(0,i.yg)("inlineCode",{parentName:"p"},"abort"),"\nstatement itself may have no effect."))}p.isMDXComponent=!0}}]);