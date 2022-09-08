"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[4730],{1079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>v,frontMatter:()=>p,metadata:()=>k,toc:()=>y});var a=n(1716),o=n(7556),i=n(9464),r=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(d)for(var n of d(t))u.call(t,n)&&m(e,n,t[n]);return e};const p={sidebar_position:111},f="13.9 Unchecked Type Conversions",k={unversionedId:"arm/AA-13/AA-13.9",id:"arm/AA-13/AA-13.9",title:"13.9 Unchecked Type Conversions",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-13/AA-13.9.mdx",sourceDirName:"arm/AA-13",slug:"/arm/AA-13/AA-13.9",permalink:"/docs/arm/AA-13/AA-13.9",draft:!1,tags:[],version:"current",sidebarPosition:111,frontMatter:{sidebar_position:111},sidebar:"referenceManualSidebar",previous:{title:"13.8 Machine Code Insertions",permalink:"/docs/arm/AA-13/AA-13.8"},next:{title:"13.10 Unchecked Access Value Creation",permalink:"/docs/arm/AA-13/AA-13.10"}},b={},y=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4},{value:"13.9.1  Data Validity",id:"1391--data-validity",level:2},{value:"Dynamic Semantics",id:"dynamic-semantics-1",level:4},{value:"Erroneous Execution",id:"erroneous-execution",level:4},{value:"Bounded (Run-Time) Errors",id:"bounded-run-time-errors",level:4},{value:"Erroneous Execution",id:"erroneous-execution-1",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95-1",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005-1",level:4},{value:"13.9.2  The Valid Attribute",id:"1392--the-valid-attribute",level:2},{value:"Static Semantics",id:"static-semantics-1",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95-2",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005-2",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}],g={toc:y};function v(e){var t,n=e,{components:r}=n,m=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},g),m),s(t,l({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",h({},{id:"139-unchecked-type-conversions"}),"13.9 Unchecked Type Conversions"),(0,a.kt)("admonition",h({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,a.kt)("a",h({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)("p",null,"[ An unchecked type conversion can be achieved by a call to an instance of the generic function Unchecked_Conversion.] "),(0,a.kt)("h4",h({},{id:"static-semantics"}),"Static Semantics"),(0,a.kt)("p",null,"The following language-defined generic library function exists: "),(0,a.kt)(o.Z,{mdxType:"CodeBlock"},"{","AI05-0229-1","}"," ","{","AI12-0241-1","}"," generic","\n","   type Source(","<",">",") is limited private;","\n","   type Target(","<",">",") is limited private;","\n","function Ada.Unchecked_Conversion(S : Source) return Target","\n","   with Pure, Nonblocking, Convention =",">"," Intrinsic;","\n"),(0,a.kt)(i.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"{",(0,a.kt)("em",null,"AI05-0229-1"),"}"," The aspect Convention implies that the attribute Access is not allowed for instances of Unchecked_Conversion. ")),(0,a.kt)("h4",h({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,a.kt)("p",null,"The size of the formal parameter S in an instance of Unchecked_Conversion is that of its subtype. [This is the actual subtype passed to Source, except when the actual is an unconstrained composite subtype, in which case the subtype is constrained by the bounds or discriminants of the value of the actual expression passed to S.]"),(0,a.kt)("p",null,"If all of the following are true, the effect of an unchecked conversion is to return the value of an object of the target subtype whose representation is the same as that of the source object S: "),(0,a.kt)("p",null,"S'Size = Target'Size. "),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"Note that there is no requirement that the Sizes be known at compile time. ")),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0078-1"),"}"," S'Alignment is a multiple of Target'Alignment or Target'Alignment is zero."),(0,a.kt)("p",null,"The target subtype is not an unconstrained composite subtype."),(0,a.kt)("p",null,"S and the target subtype both have a contiguous representation."),(0,a.kt)("p",null,"The representation of S is a representation of an object of the target subtype. "),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00426-01"),"}"," Otherwise, if the result type is scalar, the result of the function is implementation defined, and can have an invalid representation (see 13.9.1). If the result type is nonscalar, the effect is implementation defined; in particular, the result can be abnormal (see 13.9.1)."),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-defined",title:"Implementation defined: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"The result of unchecked conversion for instances with scalar result types whose result is not defined by the language.")),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-defined",title:"Implementation defined: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"The effect of unchecked conversion for instances with nonscalar result types whose effect is not defined by the language.")),(0,a.kt)(i.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"{",(0,a.kt)("em",null,"AI95-00426-01"),"}"," Note the difference between these sentences; the first only says that the bits returned are implementation defined, while the latter allows any effect. The difference is because scalar objects should never be abnormal unless their assignment was disrupted or if they are a subcomponent of an abnormal composite object. Neither exception applies to instances of Unchecked_Conversion. ")),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"{",(0,a.kt)("em",null,"AI95-00426-01"),"}"," Whenever unchecked conversions are used, it is the programmer's responsibility to ensure that these conversions maintain the properties that are guaranteed by the language for objects of the target type. For nonscalar types, this requires the user to understand the underlying run-time model of  the implementation. The execution of a program that violates these properties by means of unchecked conversions returning a nonscalar type is erroneous. Properties of scalar types can be checked by using the Valid attribute (see 13.9.2); programs can avoid violating properties of the type (and erroneous execution) by careful use of this attribute.")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"An instance of Unchecked_Conversion can be applied to an object of a private type, assuming the implementation allows it. ")),(0,a.kt)("h4",h({},{id:"implementation-permissions"}),"Implementation Permissions"),(0,a.kt)("p",null,"An implementation may return the result of an unchecked conversion by reference, if the Source type is not a by-copy type. [In this case, the result of the unchecked conversion represents simply a different (read-only) view of the operand of the conversion.] "),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"In other words, the result object of a call on an instance of Unchecked_Conversion can occupy the same storage as the formal parameter S. ")),(0,a.kt)("p",null,"An implementation may place restrictions on Unchecked_Conversion. "),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"For example, an instantiation of Unchecked_Conversion for types for which unchecked conversion doesn't make sense may be disallowed. ")),(0,a.kt)("h4",h({},{id:"implementation-advice"}),"Implementation Advice"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00051-02"),"}"," Since the Size of an array object generally does not include its bounds, the bounds should not be part of the converted data. "),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-advice",title:"Implementation Advice",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"Since the Size of an array object generally does not include its bounds, the bounds should not be part of the converted data in an instance of Unchecked_Conversion.")),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"On the other hand, we have no advice to offer about discriminants and tag fields. ")),(0,a.kt)("p",null,"The implementation should not generate unnecessary runtime checks to ensure that the representation of S is a representation of the target type. It should take advantage of the permission to return by reference when possible. Restrictions on unchecked conversions should be avoided unless required by the target environment. "),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-advice",title:"Implementation Advice",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"There should not be unnecessary runtime checks on the result of an Unchecked_Conversion; the result should be returned by reference when possible. Restrictions on Unchecked_Conversions should be avoided.")),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-note",title:"Implementation Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"As an example of an unnecessary runtime check, consider a record type with gaps between components. The compiler might assume that such gaps are always zero bits. If a value is produced that does not obey that assumption, then the program might misbehave. The implementation should not generate extra code to check for zero bits (except, perhaps, in a special error-checking mode). ")),(0,a.kt)("p",null,"The recommended level of support for unchecked conversions is: "),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0299-1"),"}"," Unchecked conversions should be supported and should be reversible in the cases where this subclause defines the result. To enable meaningful use of unchecked conversion, a contiguous representation should be used for elementary subtypes, for statically constrained array subtypes whose component subtype is one of the subtypes described in this paragraph, and for record subtypes without discriminants whose component subtypes are described in this paragraph. "),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-advice",title:"Implementation Advice",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"The recommended level of support for Unchecked_Conversion should be followed.")),(0,a.kt)("h4",h({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00051-02"),"}"," The implementation advice about the size of array objects was moved to 13.3 so that all of the advice about Size is in one place.")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00426-01"),"}"," Clarified that the result of Unchecked_Conversion for scalar types can be invalid, but not abnormal. ")),(0,a.kt)("h4",h({},{id:"wording-changes-from-ada-2005"}),"Wording Changes from Ada 2005"),(0,a.kt)(i.Z,{type:"aarm",aarm:"correction",title:"Correction:",mdxType:"Admonition"},(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0078-1"),"}"," ",(0,a.kt)("strong",null)," Relaxed the alignment requirement slightly, giving a defined result in more cases. ")),(0,a.kt)("h2",h({},{id:"1391--data-validity"}),"13.9.1  Data Validity"),(0,a.kt)("p",null,"Certain actions that can potentially lead to erroneous execution are not directly erroneous, but instead can cause objects to become ",(0,a.kt)("em",null,"abnormal"),". Subsequent uses of abnormal objects can be erroneous."),(0,a.kt)("p",null,"A scalar object can have an ",(0,a.kt)("em",null,"invalid representation"),", which means that the object's representation does not represent any value of the object's subtype. The primary cause of invalid representations is uninitialized variables."),(0,a.kt)("p",null,"Abnormal objects and invalid representations are explained in this subclause. "),(0,a.kt)("h4",h({},{id:"dynamic-semantics-1"}),"Dynamic Semantics"),(0,a.kt)("p",null,"When an object is first created, and any explicit or default initializations have been performed, the object and all of its parts are in the ",(0,a.kt)("em",null,"normal")," state. Subsequent operations generally leave them normal. However, an object or part of an object can become ",(0,a.kt)("em",null,"abnormal")," in the following ways: "),(0,a.kt)("p",null,"An assignment to the object is disrupted due to an abort (see 9.8) or due to the failure of a language-defined check (see 11.6)."),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00426-01"),"}"," The object is not scalar, and is passed to an ",(0,a.kt)("strong",null,"in out")," or ",(0,a.kt)("strong",null,"out")," parameter of an imported procedure, the Read procedure of an instance of Sequential_IO, Direct_IO, or Storage_IO, or the stream attribute T'Read, if after return from the procedure the representation of the parameter does not represent a value of the parameter's subtype."),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00426-01"),"}"," The object is the return object of a function call of a nonscalar type, and the function is an imported function, an instance of Unchecked_Conversion, or the stream attribute T'Input, if after return from the function the representation of the return object does not represent a value of the function's subtype."),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"We explicitly list the routines involved in order to avoid future arguments. All possibilities are listed.")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"We did not include Stream_IO.Read in the list above. A Stream_Element should include all possible bit patterns, and thus it cannot be invalid. Therefore, the parameter will always represent a value of its subtype. By omitting this routine, we make it possible to write arbitrary I/O operations without any possibility of abnormal objects. ")),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00426-01"),"}"," [For an imported object, it is the programmer's responsibility to ensure that the object remains in a normal state.] "),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null,"Proof: "),"This follows (and echos) the standard rule of interfacing; the programmer must ensure that Ada semantics are followed (see B.1). ")),(0,a.kt)("p",null,"Whether or not an object actually becomes abnormal in these cases is not specified. An abnormal object becomes normal again upon successful completion of an assignment to the object as a whole. "),(0,a.kt)("h4",h({},{id:"erroneous-execution"}),"Erroneous Execution"),(0,a.kt)("p",null,"It is erroneous to evaluate a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0141"},"primary"))," that is a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," denoting an abnormal object, or to evaluate a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0093"},"prefix"))," that denotes an abnormal object. "),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("em",null,"This paragraph was deleted."),"{",(0,a.kt)("em",null,"AI95-00114-01"),"}"," ")),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"The ",(0,a.kt)("strong",null,"in out")," or ",(0,a.kt)("strong",null,"out")," parameter case does not apply to scalars; bad scalars are merely invalid representations, rather than abnormal, in this case. ")),(0,a.kt)(i.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"{",(0,a.kt)("em",null,"AI95-00114-01"),"}"," The reason we allow access objects, and objects containing subcomponents of an access type, to become abnormal is because the correctness of an access value cannot necessarily be determined merely by looking at the bits of the object. The reason we allow scalar objects to become abnormal is that we wish to allow the compiler to optimize assuming that the value of a scalar object belongs to the object's subtype, if the compiler can prove that the object is initialized with a value that belongs to the subtype. The reason we allow composite objects to become abnormal is that such object might be represented with implicit levels of indirection; if those are corrupted, then even assigning into a component of the object, or simply asking for its Address, might have an unpredictable effect. The same is true if the discriminants have been destroyed. ")),(0,a.kt)("h4",h({},{id:"bounded-run-time-errors"}),"Bounded (Run-Time) Errors"),(0,a.kt)("p",null,"If the representation of a scalar object does not represent a value of the object's subtype (perhaps because the object was not initialized), the object is said to have an ",(0,a.kt)("em",null,"invalid representation"),". It is a bounded error to evaluate the value of such an object. If the error is detected, either Constraint_Error or Program_Error is raised. Otherwise, execution continues using the invalid representation. The rules of the language outside this subclause assume that all objects have valid representations. The semantics of operations on invalid representations are as follows:"),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"The AARM is more explicit about what happens when the value of the case expression is an invalid representation.")),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"{",(0,a.kt)("em",null,"AI95-00426-01"),"}"," This includes the result object of functions, including the result of Unchecked_Conversion, T'Input, and imported functions. ")),(0,a.kt)("p",null,"If the representation of the object represents a value of the object's type, the value of the type is used."),(0,a.kt)("p",null,"If the representation of the object does not represent a value of the object's type, the semantics of operations on such representations is implementation-defined, but does not by itself lead to erroneous or unpredictable execution, or to other objects becoming abnormal. "),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-note",title:"Implementation Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"{",(0,a.kt)("em",null,"AI95-00426-01"),"}"," This means that the implementation must take care not to use an invalid representation in a way that might cause erroneous execution. For instance, the exception mandated for ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.4#S0176"},"case_statement")),"s must be raised. Array indexing must not cause memory outside of the array to be written (and usually, not read either). These cases and similar cases may require explicit checks by the implementation. ")),(0,a.kt)("h4",h({},{id:"erroneous-execution-1"}),"Erroneous Execution"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00167-01"),"}"," ","{",(0,a.kt)("em",null,"AI05-0279-1"),"}"," A call to an imported function or an instance of Unchecked_Conversion is erroneous if the result is scalar, the result object has an invalid representation, and the result is used other than as the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0132"},"expression"))," of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement"))," or an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.3#S0032"},"object_declaration")),", as the ",(0,a.kt)("em",null,"object_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-8/AA-8.5#S0239"},"object_renaming_declaration")),", or as the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0093"},"prefix"))," of a Valid attribute. If such a result object is used as the source of an assignment, and the assigned value is an invalid representation for the target of the assignment, then any use of the target object prior to a further assignment to the target object, other than as the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0093"},"prefix"))," of a Valid attribute reference, is erroneous. "),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"{",(0,a.kt)("em",null,"AI95-00167-01"),"}"," In a typical implementation, every bit pattern that fits in an object of a signed integer subtype will represent a value of the type, if not of the subtype. However, for an enumeration or floating point type, as well as some modular types, there are typically bit patterns that do not represent any value of the type. In such cases, the implementation ought to define the semantics of operations on the invalid representations in the obvious manner (assuming the bounded error is not detected): a given representation should be equal to itself, a representation that is in between the internal codes of two enumeration literals should behave accordingly when passed to comparison operators and membership tests, etc. We considered ",(0,a.kt)("em",null,"requiring")," such sensible behavior, but it resulted in too much arcane verbiage, and since implementations have little incentive to behave irrationally, such verbiage is not important to have.")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00167-01"),"}"," If a stand-alone scalar object is initialized to a an in-range value, then the implementation can take advantage of the fact that the use of any out-of-range value has to be erroneous. Such an out-of-range value can be produced only by things like unchecked conversion, imported functions, and abnormal values caused by disruption of an assignment due to abort or to failure of a language-defined check. This depends on out-of-range values being checked before assignment (that is, checks are not optimized away unless they are proven redundant).")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"Consider the following example: ")),(0,a.kt)(o.Z,{mdxType:"CodeBlock"},"{","AI95-00167-01","}"," type My_Int is range 0..99;","\n","function Safe_Convert is new Unchecked_Conversion(My_Int, Integer);","\n","function Unsafe_Convert is new Unchecked_Conversion(My_Int, Positive);","\n","X : Positive := Safe_Convert(0); -- Raises Constraint_Error.","\n","Y : Positive := Unsafe_Convert(0); -- Bounded Error, may be invalid.","\n","B : Boolean  := Y'Valid; -- OK, B = False.","\n","Z : Positive := Y+1; -- Erroneous to use Y.","\n"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00167-01"),"}"," ","{",(0,a.kt)("em",null,"AI95-00426-01"),"}"," The call to Unsafe_Convert  is a bounded error, which might raise Constraint_Error, Program_Error, or return an invalid value. Moreover, if an exception is not raised, most uses of that invalid value (including the use of Y) cause erroneous execution. The call to Safe_Convert is not erroneous. The result object is an object of subtype Integer containing the value 0. The assignment to X is required to do a constraint check; the fact that the conversion is unchecked does not obviate the need for subsequent checks required by the language rules.")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00167-01"),"}"," ","{",(0,a.kt)("em",null,"AI95-00426-01"),"}"," The reason for delaying erroneous execution until the object is used is so that the invalid representation can be tested for validity using the Valid attribute (see 13.9.2) without causing execution to become erroneous. Note that this delay does not imply an exception will not be raised; an implementation could treat both conversions in the example in the same way and raise Constraint_Error.")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0279-1"),"}"," The rules are defined in terms of the result object, and thus the name used to reference that object is irrelevant. That is why we don't need any special rules to describe what happens when the function result is renamed.")),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-note",title:"Implementation Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),'If an implementation wants to have a "friendly" mode, it might always assign an uninitialized scalar a default initial value that is outside the object\'s subtype (if there is one), and check for this value on some or all reads of the object, so as to help detect references to uninitialized scalars. Alternatively, an implementation might want to provide an "unsafe" mode where it presumed even uninitialized scalars were always within their subtype. ')),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"The above rules imply that it is a bounded error to apply a predefined operator to an object with a scalar subcomponent having an invalid representation, since this implies reading the value of each subcomponent. Either Program_Error or Constraint_Error is raised, or some result is produced, which if composite, might have a corresponding scalar subcomponent still with an invalid representation.")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"Note that it is not an error to assign, convert, or pass as a parameter a composite object with an uninitialized scalar subcomponent. In the other hand, it is a (bounded) error to apply a predefined operator such as =, ","<",", and ",(0,a.kt)("strong",null,"xor")," to a composite operand with an invalid scalar subcomponent. ")),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0054-2"),"}"," The dereference of an access value is erroneous if it does not designate an object of an appropriate type or a subprogram with an appropriate profile, if it designates a nonexistent object, or if it is an access-to-variable value that designates a constant object and it did not originate from an attribute_reference applied to an aliased variable view of a controlled or immutably limited object. [An access value whose dereference is erroneous can exist, for example, because of Unchecked_Deallocation, Unchecked_Access, or Unchecked_Conversion.]"),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"The above mentioned Unchecked_... features are not the only causes of such access values. For example, interfacing to other languages can also cause the problem.")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0054-2"),"}",' We permit the use of access-to-variable values that designate constant objects so long as they originate from an aliased variable view of a controlled or immutably limited constant, such as during the initialization of a constant (both via the "current instance" and during a call to Initialize) or during an assignment (during a call to Adjust). ')),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"NOTE 1   Objects can become abnormal due to other kinds of actions that directly update the object's representation; such actions are generally considered directly erroneous, however. ")),(0,a.kt)("h4",h({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"In order to reduce the amount of erroneousness, we separate the concept of an undefined value into objects with invalid representation (scalars only) and abnormal objects.")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"Reading an object with an invalid representation is a bounded error rather than erroneous; reading an abnormal object is still erroneous. In fact, the only safe thing to do to an abnormal object is to assign to the object as a whole. ")),(0,a.kt)("h4",h({},{id:"wording-changes-from-ada-95-1"}),"Wording Changes from Ada 95"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00167-01"),"}"," The description of erroneous execution for Unchecked_Conversion and imported objects was tightened up so that using the Valid attribute to test such a value is not erroneous.")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00426-01"),"}"," Clarified the definition of objects that can become abnormal; made sure that all of the possibilities are included. ")),(0,a.kt)("h4",h({},{id:"wording-changes-from-ada-2005-1"}),"Wording Changes from Ada 2005"),(0,a.kt)(i.Z,{type:"aarm",aarm:"correction",title:"Correction:",mdxType:"Admonition"},(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0054-2"),"}"," ",(0,a.kt)("strong",null),' Common programming techniques such as squirreling away an access to a controlled object during initialization and using a self-referencing discriminant (the so-called "Rosen trick") no longer are immediately erroneous if the object is declared constant, so these techniques can be used portably and safely. Practically, these techniques already worked as compilers did not take much advantage of this rule, so the impact of this change will be slight. ')),(0,a.kt)(i.Z,{type:"aarm",aarm:"correction",title:"Correction:",mdxType:"Admonition"},(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0279-1"),"}"," ",(0,a.kt)("strong",null)," The description of erroneous execution for Unchecked_Conversion and imported objects was adjusted to clarify that renaming such an object is not, by itself, erroneous. ")),(0,a.kt)("h2",h({},{id:"1392--the-valid-attribute"}),"13.9.2  The Valid Attribute"),(0,a.kt)("p",null,"The Valid attribute can be used to check the validity of data produced by unchecked conversion, input, interface to foreign languages, and the like. "),(0,a.kt)("h4",h({},{id:"static-semantics-1"}),"Static Semantics"),(0,a.kt)("p",null,"For a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0093"},"prefix"))," X that denotes a scalar object [(after any implicit dereference)], the following attribute is defined: "),(0,a.kt)("p",null,"X'Valid","{",(0,a.kt)("em",null,"AI05-0153-3"),"}"," ","{",(0,a.kt)("em",null,"AI12-0071-1"),"}"," Yields True if and only if the object denoted by X is normal, has a valid representation, and then, if the preceding conditions hold, the value of X also satisfies the predicates of the nominal subtype of X. The value of this attribute is of the predefined type Boolean. "),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"Having checked that X'Valid is True, it is safe to read the value of X without fear of erroneous execution caused by abnormality, or a bounded error caused by an invalid representation. Such a read will produce a value in the subtype of X. ")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"NOTE 1   Invalid data can be created in the following cases (not counting erroneous or unpredictable execution): ")),(0,a.kt)("p",null,"an uninitialized scalar object,"),(0,a.kt)("p",null,"the result of an unchecked conversion,"),(0,a.kt)("p",null,"input,"),(0,a.kt)("p",null,"interface to another language (including machine code),"),(0,a.kt)("p",null,"aborting an assignment,"),(0,a.kt)("p",null,"disrupting an assignment due to the failure of a language-defined check (see 11.6), and"),(0,a.kt)("p",null,"use of an object whose Address has been specified. "),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"NOTE 2   ","{",(0,a.kt)("em",null,"AI12-0071-1"),"}"," ","{",(0,a.kt)("em",null,"AI12-0440-1"),"}"," Determining whether X is normal and has a valid representation as part of the evaluation of X'Valid is not considered to include an evaluation of X; hence, it is not an error to check the validity of an object that is invalid or abnormal. Determining whether X satisfies the predicates of its nominal subtype can include an evaluation of X, but only after it has been determined that X has a valid representation.")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI12-0071-1"),"}"," If X is volatile, the evaluation of X'Valid is considered a read of X.")),(0,a.kt)(i.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"Since an implementation is not allowed to add, remove, or reorder accesses to volatile objects, we have to define X'Valid as a read so that it is implementable for most subtypes as the value of the object is required. ")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"NOTE 3   ","{",(0,a.kt)("em",null,"AI95-00426-01"),"}"," ","{",(0,a.kt)("em",null,"AI12-0442-1"),"}"," The Valid attribute can be used to check the result of calling an instance of Unchecked_Conversion (or any other operation that can return invalid values). However, an exception handler is still useful because implementations are permitted to raise Constraint_Error or Program_Error if they detect the use of an invalid representation (see 13.9.1).")),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"If X is of an enumeration type with a representation clause, then X'Valid checks that the value of X when viewed as an integer is one of the specified internal codes. ")),(0,a.kt)(i.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("strong",null),"Valid is defined only for scalar objects because the implementation and description burden would be too high for other types. For example, given a typical run-time model, it is impossible to check the validity of an access value. The same applies to composite types implemented with internal pointers. One can check the validity of a composite object by checking the validity of each of its scalar subcomponents. The user should ensure that any composite types that need to be checked for validity are represented in a way that does not involve implementation-defined components, or gaps between components. Furthermore, such types should not contain access subcomponents.")),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("em",null,"This paragraph was deleted."),"{",(0,a.kt)("em",null,"AI95-00114-01"),"}"," ")),(0,a.kt)("h4",h({},{id:"extensions-to-ada-83"}),"Extensions to Ada 83"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"X'Valid is new in Ada 95. ")),(0,a.kt)("h4",h({},{id:"wording-changes-from-ada-95-2"}),"Wording Changes from Ada 95"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00426-01"),"}"," Added a note explaining that handlers for Constraint_Error and Program_Error are needed in the general case of testing for validity. (An implementation could document cases where these are not necessary, but there is no language requirement.) ")),(0,a.kt)("h4",h({},{id:"wording-changes-from-ada-2005-2"}),"Wording Changes from Ada 2005"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0153-3"),"}"," The validity check now also includes a check of the predicate aspects (see 3.2.4), if any, of the subtype of the object. ")),(0,a.kt)("h4",h({},{id:"wording-changes-from-ada-2012"}),"Wording Changes from Ada 2012"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI12-0071-1"),"}"," ",(0,a.kt)("strong",null,"Corrigendum:"),' Updated wording of the attributes X\'Valid to use the new term "satisfies the predicates" (see 3.2.4). Also updated the notes to make sense when evaluating predicates and testing validity of volatile objects. ')))}v.isMDXComponent=!0}}]);