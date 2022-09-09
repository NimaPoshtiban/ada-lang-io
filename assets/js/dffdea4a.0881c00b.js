"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[9631],{1598:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>g,frontMatter:()=>h,metadata:()=>p,toc:()=>b});var n=l(1716),i=l(9464),a=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,c=(e,t,l)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,d=(e,t)=>{for(var l in t||(t={}))s.call(t,l)&&c(e,l,t[l]);if(u)for(var l of u(t))k.call(t,l)&&c(e,l,t[l]);return e};const h={sidebar_position:212},m="M.2 Implementation-Defined Characteristics",p={unversionedId:"arm/AA-M/AA-M.2",id:"arm/AA-M/AA-M.2",title:"M.2 Implementation-Defined Characteristics",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-M/AA-M.2.mdx",sourceDirName:"arm/AA-M",slug:"/arm/AA-M/AA-M.2",permalink:"/docs/arm/AA-M/AA-M.2",draft:!1,tags:[],version:"current",sidebarPosition:212,frontMatter:{sidebar_position:212},sidebar:"referenceManualSidebar",previous:{title:"M.1 Specific Documentation Requirements",permalink:"/docs/arm/AA-M/AA-M.1"},next:{title:"M.3 Implementation Advice",permalink:"/docs/arm/AA-M/AA-M.3"}},f={},b=[],S={toc:b};function g(e){var t,l=e,{components:a}=l,c=((e,t)=>{var l={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&k.call(e,n)&&(l[n]=e[n]);return l})(l,["components"]);return(0,n.kt)("wrapper",(t=d(d({},S),c),r(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",d({},{id:"m2-implementation-defined-characteristics"}),"M.2 Implementation-Defined Characteristics"),(0,n.kt)("admonition",d({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI12-0442-1"),"}"," ",(0,n.kt)("br",null),"The Ada language allows for certain machine dependences in a controlled manner. Each Ada implementation is required to document all implementation-defined characteristics: ",(0,n.kt)("br",null)),(0,n.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"It need not document unspecified characteristics.",(0,n.kt)("br",null)),(0,n.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"Some of the items in this list require documentation only for implementations that conform to Specialized Needs Annexes. ",(0,n.kt)("br",null)),(0,n.kt)("ul",null,(0,n.kt)("li",null,'Whether or not each recommendation given in  is followed - see M.3, "Implementation Advice" for a listing. See 1.1.2(39).',(0,n.kt)("br",null)),(0,n.kt)("li",null,"Capacity limitations of the implementation. See 1.1.3(3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Variations from the standard that are impractical to avoid given the implementation's execution environment. See 1.1.3(6).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Which ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-13/AA-13.8#S0357"},"code_statement")),"s cause external interactions. See 1.1.3(10).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The coded representation for the text of an Ada program. See 2.1(4/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The semantics of an Ada program whose text is not in Normalization Form C. See 2.1(4.1/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"The representation for an end of line. See 2.2(2/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Maximum supported line length and lexical element length. See 2.2(14).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined pragmas. See 2.8(14).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Effect of pragma Optimize. See 2.8(27).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The message string associated with the Assertion_Error exception raised by the failure of a predicate check if there is no applicable Predicate_Failure aspect. See 3.2.4(31).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The predefined integer types declared in Standard. See 3.5.4(25).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Any nonstandard integer types and the operators defined for them. See 3.5.4(26/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Any nonstandard real types and the operators defined for them. See 3.5.6(8/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"What combinations of requested decimal precision and range are supported for floating point types. See 3.5.7(7).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The predefined floating point types declared in Standard. See 3.5.7(16/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The ",(0,n.kt)("em",null,"small")," of an ordinary fixed point type. See 3.5.9(8/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"What combinations of ",(0,n.kt)("em",null,"small"),", range, and ",(0,n.kt)("em",null,"digits")," are supported for fixed point types. See 3.5.9(10).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The result of Tags.Wide_Wide_Expanded_Name for types declared within an unnamed ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement")),". See 3.9(11).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The sequence of characters of the value returned by Tags.Expanded_Name (respectively, Tags.Wide_Expanded_Name) when some of the graphic characters of Tags.Wide_Wide_Expanded_Name are not defined in Character (respectively, Wide_Character). See 3.9(11.1/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined attributes. See 4.1.4(13/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The value of the parameter to Empty for some ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.3#S0123"},"container_aggregate")),"s. See 4.3.5(41).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The maximum number of chunks for a parallel reduction expression without a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.5#S0180"},"chunk_specification")),". See 4.5.10(22).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Rounding of real static expressions which are exactly half-way between two machine numbers. See 4.9(38/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The maximum number of chunks for a parallel generalized iterator without a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.5#S0180"},"chunk_specification")),". See 5.5.2(11).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The number of chunks for an array component iterator. See 5.5.2(12).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Any extensions of the Global aspect. See 6.1.2(43).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The circumstances in which the implementation passes in the null value for a view conversion of an access type used as an ",(0,n.kt)("strong",null,"out")," parameter. See 6.4.1(19/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Any extensions of the Default_Initial_Condition aspect. See 7.3.3(12).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Any implementation-defined time types. See 9.6(6/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The time base associated with relative delays. See 9.6(20).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The time base of the type Calendar.Time. See 9.6(23).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The time zone used for package Calendar operations. See 9.6(24/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Any limit on ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.6#S0267"},"delay_until_statement")),"s of ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0269"},"select_statement")),"s. See 9.6(29).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The result of Calendar.Formatting.Image if its argument represents more than 100 hours. See 9.6.1(86/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined conflict check policies. See 9.10.1(5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The representation for a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-10/AA-10.1#S0285"},"compilation")),". See 10.1(2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Any restrictions on ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-10/AA-10.1#S0285"},"compilation")),"s that contain multiple ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-10/AA-10.1#S0286"},"compilation_unit")),"s. See 10.1(4).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The mechanisms for creating an environment and for adding and replacing compilation units. See 10.1.4(3/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The mechanisms for adding a compilation unit mentioned in a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-10/AA-10.1#S0295"},"limited_with_clause"))," to an environment. See 10.1.4(3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The manner of explicitly assigning library units to a partition. See 10.2(2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The implementation-defined means, if any, of specifying which compilation units are needed by a given compilation unit. See 10.2(2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The manner of designating the main subprogram of a partition. See 10.2(8).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The order of elaboration of ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-10/AA-10.1#S0287"},"library_item")),"s. See 10.2(19).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Parameter passing and function return for the main subprogram. See 10.2(22).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The mechanisms for building and running partitions. See 10.2(25/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The details of program execution, including program termination. See 10.2(26).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The semantics of any nonactive partitions supported by the implementation. See 10.2(29/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The information returned by Exception_Message. See 11.4.1(10.1/4).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The result of Exceptions.Wide_Wide_Exception_Name for exceptions declared within an unnamed ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement")),". See 11.4.1(12).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The sequence of characters of the value returned by Exceptions.Exception_Name (respectively, Exceptions.Wide_Exception_Name) when some of the graphic characters of Exceptions.Wide_Wide_Exception_Name are not defined in Character (respectively, Wide_Character). See 11.4.1(12.1/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The information returned by Exception_Information. See 11.4.1(13/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined ",(0,n.kt)("em",null,"policy_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"s and ",(0,n.kt)("em",null,"assertion_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-13/AA-13.1#S0347"},"aspect_mark")),"s allowed in a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Assertion_Policy. See 11.4.2(10/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The default assertion policy. See 11.4.2(11).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined check names. See 11.5(29).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Existence and meaning of second parameter of ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Unsuppress. See 11.5(29.1/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The cases that cause conflicts between the representation of the ancestors of a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-3/AA-3.2#S0023"},"type_declaration")),". See 13.1(15.1/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The interpretation of each representation aspect. See 13.1(22).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Any restrictions placed upon the specification of representation aspects. See 13.1(22).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined aspects, including the syntax for specifying such aspects and the legality rules for such aspects. See 13.1.1(38).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The set of machine scalars. See 13.3(8.1/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The meaning of Size for indefinite subtypes. See 13.3(48).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The meaning of Object_Size for indefinite subtypes. See 13.3(58).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The default external representation for a type tag. See 13.3(75/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"What determines whether a compilation unit is the same in two different partitions. See 13.3(76).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined components. See 13.5.1(15).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If Word_Size = Storage_Unit, the default bit ordering. See 13.5.3(5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The contents of the visible part of package System. See 13.7(2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The range of Storage_Elements.Storage_Offset, the modulus of Storage_Elements.Storage_Element, and the declaration of Storage_Elements.Integer_Address. See 13.7.1(11).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The contents of the visible part of package System.Machine_Code, and the meaning of ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-13/AA-13.8#S0357"},"code_statement")),"s. See 13.8(7).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The result of unchecked conversion for instances with scalar result types whose result is not defined by the language. See 13.9(11).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The effect of unchecked conversion for instances with nonscalar result types whose effect is not defined by the language. See 13.9(11).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"Whether or not the implementation provides user-accessible names for the standard pool type(s). See 13.11(18).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The meaning of Storage_Size when neither the Storage_Size nor the Storage_Pool is specified for an access type. See 13.11(19).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"The effect of specifying aspect Default_Storage_Pool on an instance of a language-defined generic unit. See 13.11.3(5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined restrictions allowed in a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Restrictions. See 13.12(8.7/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The consequences of violating limitations on Restrictions ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma")),"s. See 13.12(9).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined usage profiles allowed in a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Profile. See 13.12(15).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The contents of the stream elements read and written by the Read and Write attributes of elementary types. See 13.13.2(9).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The names and characteristics of the numeric subtypes declared in the visible part of package Standard. See A.1(3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The values returned by Strings.Hash. See A.4.9(3/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The value returned by a call to a Text_Buffer Get procedure if any character in the returned sequence is not defined in Character. See A.4.12(34).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The value returned by a call to a Text_Buffer Wide_Get procedure if any character in the returned sequence is not defined in Wide_Character. See A.4.12(34).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The accuracy actually achieved by the elementary functions. See A.5.1(1).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The sign of a zero result from some of the operators or functions in Numerics.Generic_Elementary_Functions, when Float_Type'Signed_Zeros is True. See A.5.1(46).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The value of Numerics.Float_Random.Max_Image_Width. See A.5.2(27).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The value of Numerics.Discrete_Random.Max_Image_Width. See A.5.2(27).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"The string representation of a random number generator's state. See A.5.2(38).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"The values of the Model_Mantissa, Model_Emin, Model_Epsilon, Model, Safe_First, and Safe_Last attributes, if the Numerics Annex is not supported. See A.5.3(72).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"The value of Buffer_Size in Storage_IO. See A.9(10).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The external files associated with the standard input, standard output, and standard error files. See A.10(5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The accuracy of the value produced by Put. See A.10.9(36).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Current size for a stream file for which positioning is not supported. See A.12.1(1.1/1).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The meaning of Argument_Count, Argument, and Command_Name for package Command_Line. The bounds of type Command_Line.Exit_Status. See A.15(1).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The interpretation of file names and directory names. See A.16(46/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The maximum value for a file size in Directories. See A.16(87/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The result for Directories.Size for a directory or special file. See A.16(93/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The result for Directories.Modification_Time for a directory or special file. See A.16(95/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The interpretation of a nonnull search pattern in Directories. See A.16(104/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The results of a Directories search if the contents of the directory are altered while a search is in progress. See A.16(110/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The definition and meaning of an environment variable. See A.17(1/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The circumstances where an environment variable cannot be defined. See A.17(16/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Environment names for which Set has the effect of Clear. See A.17(17/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The value of Containers.Hash_Type'Modulus. The value of Containers.Count_Type'Last. See A.18.1(7/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined convention names. See B.1(11/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The meaning of link names. See B.1(36).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The manner of choosing link names when neither the link name nor the address of an imported or exported entity is specified. See B.1(36).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The effect of pragma Linker_Options. See B.1(37).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The contents of the visible part of package Interfaces and its language-defined descendants. See B.2(1).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined children of package Interfaces. See B.2(11).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The definitions of certain types and constants in Interfaces.C. See B.3(41).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The types Floating, Long_Floating, Binary, Long_Binary, Decimal_Element, and COBOL_Character; and the initializations of the variables Ada_To_COBOL and COBOL_To_Ada, in Interfaces.COBOL. See B.4(50).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The types Fortran_Integer, Real, Double_Precision, and Character_Set in Interfaces.Fortran. See B.5(17).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined intrinsic subprograms. See C.1(1/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"Any restrictions on a protected procedure or its containing type when an aspect Attach_handler or Interrupt_Handler is specified. See C.3.1(17).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Any other forms of interrupt handler supported by the Attach_Handler and Interrupt_Handler aspects. See C.3.1(19).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"The semantics of some attributes and functions of an entity for which aspect Discard_Names is True. See C.5(7).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The modulus and size of Test_and_Set_Flag. See C.6.3(8).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The value used to represent the set value for Atomic_Test_and_Set. See C.6.3(10).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The result of the Task_Identification.Image attribute. See C.7.1(7).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The value of Current_Task when in a protected entry, interrupt handler, or finalization of a task attribute. See C.7.1(17/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"Granularity of locking for Task_Attributes. See C.7.2(16/1).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"The declarations of Any_Priority and Priority. See D.1(11).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined execution resources. See D.1(15/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Whether, on a multiprocessor, a task that is waiting for access to a protected object keeps its processor busy. See D.2.1(3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The effect of implementation-defined execution resources on task dispatching. See D.2.1(9/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation defined task dispatching policies. See D.2.2(18).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The value of Default_Quantum in Dispatching.Round_Robin. See D.2.5(4).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined ",(0,n.kt)("em",null,"policy_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"s allowed in a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Locking_Policy. See D.3(4).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The locking policy if no Locking_Policy pragma applies to any unit of a partition. See D.3(6).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Default ceiling priorities. See D.3(10/4).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The ceiling of any protected object used internally by the implementation. See D.3(16).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined queuing policies. See D.4(1/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined admission policies. See D.4.1(1).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"Any operations that implicitly require heap storage allocation. See D.7(8).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"When restriction No_Dynamic_CPU_Assignment applies to a partition, the processor on which a task with a CPU value of a Not_A_Specific_CPU will execute. See D.7(10).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"When restriction No_Task_Termination applies to a partition, what happens when a task terminates. See D.7(15.1/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The behavior when restriction Max_Storage_At_Blocking is violated. See D.7(17/1).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The behavior when restriction Max_Asynchronous_Select_Nesting is violated. See D.7(18/1).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The behavior when restriction Max_Tasks is violated. See D.7(19).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Whether the use of pragma Restrictions results in a reduction in program code or data size or execution time. See D.7(20).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"The value of Barrier_Limit'Last in Synchronous_Barriers. See D.10.1(4/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"When an aborted task that is waiting on a Synchronous_Barrier is aborted. See D.10.1(13/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"The value of Min_Handler_Ceiling in Execution_Time.Group_Budgets. See D.14.2(7/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The value of CPU_Range'Last in System.Multiprocessors. See D.16(4/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The processor on which the environment task executes in the absence of a value for the aspect CPU. See D.16(13/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The means for creating and executing distributed programs. See E(5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Any events that can result in a partition becoming inaccessible. See E.1(7).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The scheduling policies, treatment of priorities, and management of shared resources between partitions in certain cases. See E.1(11).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"Whether the execution of the remote subprogram is immediately aborted as a result of cancellation. See E.4(13).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The range of type System.RPC.Partition_Id. See E.5(14).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined interfaces in the PCS. See E.5(26).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The values of named numbers in the package Decimal. See F.2(7).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The value of Max_Picture_Length in the package Text_IO.Editing See F.3.3(16).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The value of Max_Picture_Length in the package Wide_Text_IO.Editing See F.3.4(5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The value of Max_Picture_Length in the package Wide_Wide_Text_IO.Editing See F.3.5(5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The accuracy actually achieved by the complex elementary functions and by other complex arithmetic operations. See G.1(1).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The sign of a zero result (or a component thereof) from any operator or function in Numerics.Generic_Complex_Types, when Real'Signed_Zeros is True. See G.1.1(53).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The sign of a zero result (or a component thereof) from any operator or function in Numerics.Generic_Complex_Elementary_Functions, when Complex_Types.Real'Signed_Zeros is True. See G.1.2(45).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Whether the strict mode or the relaxed mode is the default. See G.2(2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The result interval in certain cases of fixed-to-float conversion. See G.2.1(10).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The result of a floating point arithmetic operation in overflow situations, when the Machine_Overflows attribute of the result type is False. See G.2.1(13).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The result interval for division (or exponentiation by a negative exponent), when the floating point hardware implements division as multiplication by a reciprocal. See G.2.1(16).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The definition of ",(0,n.kt)("em",null,"close result set"),", which determines the accuracy of certain fixed point multiplications and divisions. See G.2.3(5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Conditions on a ",(0,n.kt)("em",null,"universal_real")," operand of a fixed point multiplication or division for which the result shall be in the ",(0,n.kt)("em",null,"perfect result set"),". See G.2.3(22).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The result of a fixed point arithmetic operation in overflow situations, when the Machine_Overflows attribute of the result type is False. See G.2.3(27).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The result of an elementary function reference in overflow situations, when the Machine_Overflows attribute of the result type is False. See G.2.4(4).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The value of the ",(0,n.kt)("em",null,"angle threshold"),", within which certain elementary functions, complex arithmetic operations, and complex elementary functions yield results conforming to a maximum relative error bound. See G.2.4(10).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The accuracy of certain elementary functions for parameters beyond the angle threshold. See G.2.4(10).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The result of a complex arithmetic operation or complex elementary function reference in overflow situations, when the Machine_Overflows attribute of the corresponding real type is False. See G.2.6(5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The accuracy of certain complex arithmetic operations and certain complex elementary functions for parameters (or components thereof) beyond the angle threshold. See G.2.6(8).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The accuracy requirements for the subprograms Solve, Inverse, Determinant, Eigenvalues and Eigensystem for type Real_Matrix. See G.3.1(81/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The accuracy requirements for the subprograms Solve, Inverse, Determinant, Eigenvalues and Eigensystem for type Complex_Matrix. See G.3.2(149/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"The consequences of violating No_Hidden_Indirect_Globals. See H.4(23.9/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined ",(0,n.kt)("em",null,"policy_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"s allowed in a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Partition_Elaboration_Policy. See H.6(4/2).",(0,n.kt)("br",null))))}g.isMDXComponent=!0}}]);