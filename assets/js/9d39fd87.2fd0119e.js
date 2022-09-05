"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6506],{1716:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>d});var n=i(6687);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(i),d=a,u=h["".concat(l,".").concat(d)]||h[d]||m[d]||o;return i?n.createElement(u,r(r({ref:t},p),{},{components:i})):n.createElement(u,r({ref:t},p))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},9891:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=i(9440),a=(i(6687),i(1716));const o={sidebar_position:185},r="H.3  Reviewable Object Code",s={unversionedId:"arm/AA-H.3",id:"arm/AA-H.3",title:"H.3  Reviewable Object Code",description:"Object code review and validation are supported by pragmas Reviewable and Inspection_Point.",source:"@site/docs/arm/AA-H.3.md",sourceDirName:"arm",slug:"/arm/AA-H.3",permalink:"/docs/arm/AA-H.3",draft:!1,tags:[],version:"current",sidebarPosition:185,frontMatter:{sidebar_position:185},sidebar:"tutorialSidebar",previous:{title:"H.2  Documentation of Implementation Decisions",permalink:"/docs/arm/AA-H.2"},next:{title:"H.4  High Integrity Restrictions",permalink:"/docs/arm/AA-H.4"}},l={},c=[{value:"H.3.1  Pragma Reviewable",id:"h31--pragma-reviewable",level:2},{value:"Syntax",id:"syntax",level:4},{value:"Post-Compilation Rules",id:"post-compilation-rules",level:4},{value:"Implementation Requirements",id:"implementation-requirements",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"H.3.2  Pragma Inspection_Point",id:"h32--pragma-inspection_point",level:2},{value:"Syntax",id:"syntax-1",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Implementation Requirements",id:"implementation-requirements-1",level:4},{value:"Documentation Requirements",id:"documentation-requirements",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95-1",level:4}],p={toc:c};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"h3--reviewable-object-code"},"H.3  Reviewable Object Code"),(0,a.kt)("p",null,"Object code review and validation are supported by pragmas Reviewable and Inspection_Point. "),(0,a.kt)("h2",{id:"h31--pragma-reviewable"},"H.3.1  Pragma Reviewable"),(0,a.kt)("p",null,"This pragma directs the implementation to provide information to facilitate analysis and review of a program's object code, in particular to allow determination of execution time and storage usage and to identify the correspondence between the source and object programs. "),(0,a.kt)("p",null,"Discussion: Since the purpose of this pragma is to provide information to the user, it is hard to objectively test for conformity. In practice, users want the information in an easily understood and convenient form, but neither of these properties can be easily measured."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"The form of a ",(0,a.kt)("a",{parentName:"p",href:"./AA-2.8#S0019"},"pragma")," Reviewable is as follows: "),(0,a.kt)("p",null,"  pragma Reviewable; "),(0,a.kt)("h4",{id:"post-compilation-rules"},"Post-Compilation Rules"),(0,a.kt)("p",null,"Pragma Reviewable is a configuration pragma. It applies to all ",(0,a.kt)("a",{parentName:"p",href:"./AA-10.1#S0286"},"compilation_unit"),"s included in a partition. "),(0,a.kt)("h4",{id:"implementation-requirements"},"Implementation Requirements"),(0,a.kt)("p",null,"The implementation shall provide the following information for any compilation unit to which such a pragma applies: "),(0,a.kt)("p",null,"Discussion: The list of requirements can be checked for, even if issues like intelligibility are not addressed."),(0,a.kt)("p",null,"Where compiler-generated runtime checks remain; "),(0,a.kt)("p",null,"Discussion: A constraint check which is implemented via a check on the upper and lower bound should clearly be indicated. If a check is implicit in the form of machine instructions used (such an overflow checking), this should also be covered by the documentation. It is particularly important to cover those checks which are not obvious from the source code, such as that for stack overflow."),(0,a.kt)("p",null,"An identification of any construct with a language-defined check that is recognized prior to run time as certain to fail if executed (even if the generation of runtime checks has been suppressed); "),(0,a.kt)("p",null,"Discussion: In this case, if the compiler determines that a check must fail, the user should be informed of this. However, since it is not in general possible to know what the compiler will detect, it is not easy to test for this. In practice, it is thought that compilers claiming conformity to this Annex will perform significant optimizations and therefore will detect such situations. Of course, such events could well indicate a programmer error."),(0,a.kt)("p",null,'{AI95-00209-01} For each read of a scalar object, an identification of the read as either "known to be initialized", or "possibly uninitialized", independent of whether pragma Normalize_Scalars applies; '),(0,a.kt)("p",null,'Discussion: This issue again raises the question as to what the compiler has determined. A lazy implementation could clearly mark all scalars as "possibly uninitialized", but this would be very unhelpful to the user. It should be possible to analyze a range of scalar uses and note the percentage in each class. Note that an access marked "known to be initialized" does not imply that the value is in range, since the initialization could be from an (erroneous) call of unchecked conversion, or by means external to the Ada program.'),(0,a.kt)("p",null,"Where run-time support routines are implicitly invoked; "),(0,a.kt)("p",null,"Discussion: Validators will need to know the calls invoked in order to check for the correct functionality. For instance, for some safety applications, it may be necessary to ensure that certain sections of code can execute in a particular time."),(0,a.kt)("p",null,"An object code listing, including: "),(0,a.kt)("p",null,"Machine instructions, with relative offsets; "),(0,a.kt)("p",null,"Discussion: The machine instructions should be in a format that is easily understood, such as the symbolic format of the assembler. The relative offsets are needed in numeric format, to check any alignment restrictions that the architecture might impose."),(0,a.kt)("p",null,"Where each data object is stored during its lifetime; "),(0,a.kt)("p",null,"Discussion: This requirement implies that if the optimizer assigns a variable to a register, this needs to be evident."),(0,a.kt)("p",null,"Correspondence with the source program, including an identification of the code produced per declaration and per statement. "),(0,a.kt)("p",null,"Discussion: This correspondence will be quite complex when extensive optimization is performed. In particular, address calculation to access some data structures could be moved from the actual access. However, when all the machine code arising from a statement or declaration is in one basic block, this must be indicated by the implementation."),(0,a.kt)("p",null,"An identification of each construct for which the implementation detects the possibility of erroneous execution; "),(0,a.kt)("p",null,"Discussion: This requirement is quite vague. In general, it is hard for compilers to detect erroneous execution and therefore the requirement will be rarely invoked. However, if the pragma Suppress is used and the compiler can show that a predefined exception will be raised, then such an identification would be useful."),(0,a.kt)("p",null,"For each subprogram, block, task, or other construct implemented by reserving and subsequently freeing an area on a run-time stack, an identification of the length of the fixed-size portion of the area and an indication of whether the non-fixed size portion is reserved on the stack or in a dynamically-managed storage region. "),(0,a.kt)("p",null,"Discussion: This requirement is vital for those requiring to show that the storage available to a program is sufficient. This is crucial in those cases in which the internal checks for stack overflow are suppressed (perhaps by pragma Restrictions(No_Exceptions)). "),(0,a.kt)("p",null,"The implementation shall provide the following information for any partition to which the pragma applies: "),(0,a.kt)("p",null,"An object code listing of the entire partition, including initialization and finalization code as well as run-time system components, and with an identification of those instructions and data that will be relocated at load time; "),(0,a.kt)("p",null,"Discussion: The object code listing should enable a validator to estimate upper bounds for the time taken by critical parts of a program. Similarly, by an analysis of the entire partition, it should be possible to ensure that the storage requirements are suitably bounded, assuming that the partition was written in an appropriate manner."),(0,a.kt)("p",null,"A description of the run-time model relevant to the partition. "),(0,a.kt)("p",null,"Discussion: For example, a description of the storage model is vital, since the Ada language does not explicitly define such a model. "),(0,a.kt)("p",null,"The implementation shall provide control- and data-flow information, both within each compilation unit and across the compilation units of the partition. "),(0,a.kt)("p",null,'Discussion: This requirement is quite vague, since it is unclear what control and data flow information the compiler has produced. It is really a plea not to throw away information that could be useful to the validator. Note that the data flow information is relevant to the detection of "possibly uninitialized" objects referred to above. '),(0,a.kt)("h4",{id:"implementation-advice"},"Implementation Advice"),(0,a.kt)("p",null,"The implementation should provide the above information in both a human-readable and machine-readable form, and should document the latter so as to ease further processing by automated tools. "),(0,a.kt)("p",null,"Implementation Advice: The information produced by ",(0,a.kt)("a",{parentName:"p",href:"./AA-2.8#S0019"},"pragma")," Reviewable should be provided in both a human-readable and machine-readable form, and the latter form should be documented."),(0,a.kt)("p",null,"Object code listings should be provided both in a symbolic format and also in an appropriate numeric format (such as hexadecimal or octal). "),(0,a.kt)("p",null,"Implementation Advice: Object code listings should be provided both in a symbolic format and in a numeric format."),(0,a.kt)("p",null,"Reason: This is to enable other tools to perform any analysis that the user needed to aid validation. The format should be in some agreed form."),(0,a.kt)("p",null,"NOTE 1   The order of elaboration of library units will be documented even in the absence of ",(0,a.kt)("a",{parentName:"p",href:"./AA-2.8#S0019"},"pragma")," Reviewable (see 10.2). "),(0,a.kt)("p",null,"Discussion: There might be some interactions between pragma Reviewable and compiler optimizations. For example, an implementation may disable some optimizations when pragma Reviewable is in force if it would be overly complicated to provide the detailed information to allow review of the optimized object code. See also ",(0,a.kt)("a",{parentName:"p",href:"./AA-2.8#S0019"},"pragma")," Optimize (2.8). "),(0,a.kt)("h4",{id:"wording-changes-from-ada-95"},"Wording Changes from Ada 95"),(0,a.kt)("p",null,"{AI95-00209-01} The wording was clarified that pragma Reviewable applies to each read of an object, as it makes no sense to talk about the state of an object that will immediately be overwritten. "),(0,a.kt)("h2",{id:"h32--pragma-inspection_point"},"H.3.2  Pragma Inspection_Point"),(0,a.kt)("p",null,"An occurrence of a pragma Inspection_Point identifies a set of objects each of whose values is to be available at the point(s) during program execution corresponding to the position of the pragma in the compilation unit. The purpose of such a pragma is to facilitate code validation. "),(0,a.kt)("p",null,"Discussion: Inspection points are a high level equivalent of break points used by debuggers."),(0,a.kt)("h4",{id:"syntax-1"},"Syntax"),(0,a.kt)("p",null,"The form of a ",(0,a.kt)("a",{parentName:"p",href:"./AA-2.8#S0019"},"pragma")," Inspection_Point is as follows: "),(0,a.kt)("p",null,"  pragma Inspection",(0,a.kt)("em",{parentName:"p"},"Point[(object"),(0,a.kt)("a",{parentName:"p",href:"./AA-4.1#S0091"},"name")," {, object_",(0,a.kt)("a",{parentName:"p",href:"./AA-4.1#S0091"},"name"),"})]; "),(0,a.kt)("h4",{id:"legality-rules"},"Legality Rules"),(0,a.kt)("p",null,"A pragma Inspection_Point is allowed wherever a ",(0,a.kt)("a",{parentName:"p",href:"./AA-3.11#S0087"},"declarative_item")," or ",(0,a.kt)("a",{parentName:"p",href:"./AA-5.1#S0167"},"statement")," is allowed. Each object_name shall statically denote the declaration of an object. "),(0,a.kt)("p",null,"Discussion: The static denotation is required, since no dynamic evaluation of a name is involved in this pragma."),(0,a.kt)("h4",{id:"static-semantics"},"Static Semantics"),(0,a.kt)("p",null,"{8652/0093} {AI95-00207-01} {AI95-00434-01} An inspection point is a point in the object code corresponding to the occurrence of a pragma Inspection_Point in the compilation unit. An object is inspectable at an inspection point if the corresponding pragma Inspection_Point either has an argument denoting that object, or has no arguments and the declaration of the object is visible at the inspection point. "),(0,a.kt)("p",null,'Ramification: If a pragma Inspection_Point is in an in-lined subprogram, there might be numerous inspection points in the object code corresponding to the single occurrence of the pragma in the source; similar considerations apply if such a pragma is in a generic, or in a loop that has been "unrolled" by an optimizer.'),(0,a.kt)("p",null,"{8652/0093} {AI95-00207-01} The short form of the pragma is a convenient shorthand for listing all objects which could be explicitly made inspectable by the long form of the pragma; thus only visible objects are made inspectable by it. Objects that are not visible at the point of the pragma are not made inspectable by the short form pragma. This is necessary so that implementations need not keep information about (or prevent optimizations on) a unit simply because some other unit might contain a short form Inspection_Point pragma. "),(0,a.kt)("p",null,"Discussion: {8652/0093} {AI95-00207-01} If the short form of the pragma is used, then all visible objects are inspectable. This implies that global objects from other compilation units are inspectable. A good interactive debugging system could provide information similar to a post-mortem dump at such inspection points. The annex does not require that any inspection facility is provided, merely that the information is available to understand the state of the machine at those points. "),(0,a.kt)("h4",{id:"dynamic-semantics"},"Dynamic Semantics"),(0,a.kt)("p",null,"Execution of a pragma Inspection_Point has no effect. "),(0,a.kt)("p",null,"Discussion: {AI95-00114-01} Although an inspection point has no (semantic) effect, the removal or adding of a new point could change the machine code generated by the compiler."),(0,a.kt)("h4",{id:"implementation-requirements-1"},"Implementation Requirements"),(0,a.kt)("p",null,"Reaching an inspection point is an external interaction with respect to the values of the inspectable objects at that point (see ). "),(0,a.kt)("p",null,"Ramification: The compiler is inhibited from moving an assignment to an inspectable variable past an inspection point for that variable. On the other hand, the evaluation of an expression that might raise an exception may be moved past an inspection point (see 11.6)."),(0,a.kt)("h4",{id:"documentation-requirements"},"Documentation Requirements"),(0,a.kt)("p",null,"For each inspection point, the implementation shall identify a mapping between each inspectable object and the machine resources (such as memory locations or registers) from which the object's value can be obtained. "),(0,a.kt)("p",null,"This paragraph was deleted."),(0,a.kt)("p",null,"Documentation Requirement: For each inspection point, a mapping between each inspectable object and the machine resources where the object's value can be obtained shall be provided."),(0,a.kt)("p",null,'NOTE 1   {AI95-00209-01} The implementation is not allowed to perform "dead store elimination" on the last assignment to a variable prior to a point where the variable is inspectable. Thus an inspection point has the effect of an implicit read of each of its inspectable objects.'),(0,a.kt)("p",null,"NOTE 2   Inspection points are useful in maintaining a correspondence between the state of the program in source code terms, and the machine state during the program's execution. Assertions about the values of program objects can be tested in machine terms at inspection points. Object code between inspection points can be processed by automated tools to verify programs mechanically. "),(0,a.kt)("p",null,"Discussion: Although it is not a requirement of the annex, it would be useful if the state of the stack and heap could be interrogated. This would allow users to check that a program did not have a `storage leak'."),(0,a.kt)("p",null,"NOTE 3   The identification of the mapping from source program objects to machine resources is allowed to be in the form of an annotated object listing, in human-readable or tool-processable form. "),(0,a.kt)("p",null,"Discussion: In principle, it is easy to check an implementation for this pragma, since one merely needs to check the content of objects against those values known from the source listing. In practice, one needs a tool similar to an interactive debugger to perform the check."),(0,a.kt)("h4",{id:"wording-changes-from-ada-95-1"},"Wording Changes from Ada 95"),(0,a.kt)("p",null,"{8652/0093} {AI95-00207-01} Corrigendum: Corrected the definition of the Inspection_Point pragma to apply to only variables visible at the point of the pragma. Otherwise, the compiler would have to assume that some other code somewhere could have a pragma Inspection_Point, preventing many optimizations (such as unused object elimination)."))}m.isMDXComponent=!0}}]);