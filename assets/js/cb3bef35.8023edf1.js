"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[326],{2426:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>k,contentTitle:()=>p,default:()=>y,frontMatter:()=>m,metadata:()=>b,toc:()=>f});var n=l(1716),o=l(9464),i=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,l)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,c=(e,t)=>{for(var l in t||(t={}))u.call(t,l)&&h(e,l,t[l]);if(s)for(var l of s(t))d.call(t,l)&&h(e,l,t[l]);return e};const m={sidebar_position:213},p="M.3 Implementation Advice",b={unversionedId:"arm/AA-M/AA-M.3",id:"arm/AA-M/AA-M.3",title:"M.3 Implementation Advice",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-M/AA-M.3.mdx",sourceDirName:"arm/AA-M",slug:"/arm/AA-M/AA-M.3",permalink:"/docs/arm/AA-M/AA-M.3",draft:!1,tags:[],version:"current",sidebarPosition:213,frontMatter:{sidebar_position:213},sidebar:"referenceManualSidebar",previous:{title:"M.2 Implementation-Defined Characteristics",permalink:"/docs/arm/AA-M/AA-M.2"},next:{title:"Annex N Glossary",permalink:"/docs/arm/AA-N/"}},k={},f=[],g={toc:f};function y(e){var t,l=e,{components:i}=l,h=((e,t)=>{var l={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&d.call(e,n)&&(l[n]=e[n]);return l})(l,["components"]);return(0,n.kt)("wrapper",(t=c(c({},g),h),r(t,a({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"m3-implementation-advice"}),"M.3 Implementation Advice"),(0,n.kt)("admonition",c({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI12-0442-1"),"}"," ",(0,n.kt)("br",null),"This Reference Manual sometimes gives advice about handling certain target machine dependences. Each Ada implementation is required to document whether that advice is followed: ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"Some of the items in this list require documentation only for implementations that conform to Specialized Needs Annexes. ",(0,n.kt)("br",null)),(0,n.kt)("ul",null,(0,n.kt)("li",null,"Program_Error should be raised when an unsupported Specialized Needs Annex feature is used at run time. See 1.1.3(20).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined extensions to the functionality of a language-defined library unit should be provided by adding children to the library unit. See 1.1.3(21).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If a bounded error or erroneous execution is detected, Program_Error should be raised. See 1.1.5(12).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined pragmas should have no semantic effect for error-free programs. See 2.8(16/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined pragmas should not make an illegal program legal, unless they complete a declaration or configure the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-10/AA-10.1#S0287"},"library_item")),"s in an environment. See 2.8(19).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Long_Integer should be declared in Standard if the target supports 32-bit arithmetic. No other named integer subtypes should be declared in Standard. See 3.5.4(28).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"For a two's complement target, modular types with a binary modulus up to System.Max_Int*2+2 should be supported. A nonbinary modulus up to Integer'Last should be supported. See 3.5.4(29).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Program_Error should be raised for the evaluation of S'Pos for an enumeration type, if the value of the operand does not correspond to the internal code for any enumeration literal of the type. See 3.5.5(8).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Long_Float should be declared in Standard if the target supports 11 or more digits of precision. No other named float subtypes should be declared in Standard. See 3.5.7(17).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Multidimensional arrays should be represented in row-major order, unless the array has convention Fortran. See 3.6.2(11/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Tags.Internal_Tag should return the tag of a type, if one exists, whose innermost master is a master of the point of the function call. See 3.9(27.1/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"A real static expression with a nonformal type that is not part of a larger static expression should be rounded the same as the target system. See 4.9(38.1/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"For each language-defined private type T, T'Image should generate an image that would be meaningful based only on the relevant public interfaces. See 4.10(56).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The value of Duration'Small should be no greater than 100 microseconds. See 9.6(30).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The time base for ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.6#S0268"},"delay_relative_statement")),"s should be monotonic. See 9.6(31/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Leap seconds should be supported if the target system supports them. Otherwise, operations in Calendar.Formatting should return results consistent with no leap seconds. See 9.6.1(89/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,(0,n.kt)("em",null,"This paragraph was deleted."),(0,n.kt)("br",null)),(0,n.kt)("li",null,"A type declared in a preelaborated package should have the same representation in every elaboration of a given version of the package. See 10.2.1(12).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Exception_Information should provide information useful for debugging, and should include the Exception_Name and Exception_Message. See 11.4.1(19).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Exception_Message by default should be short, provide information useful for debugging, and should not include the Exception_Name. See 11.4.1(19).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Code executed for checks that have been suppressed should be minimized. See 11.5(30).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The recommended level of support for all representation items should be followed. See 13.1(30/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Storage allocated to objects of a packed type should be minimized. See 13.2(6).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The recommended level of support for the Pack aspect should be followed. See 13.2(9).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"For an array X, X'Address should point at the first component of the array rather than the array bounds. See 13.3(14).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The recommended level of support for the Address attribute should be followed. See 13.3(19).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"For any tagged specific subtype ",(0,n.kt)("em",null,"S"),", ",(0,n.kt)("em",null,"S"),"'Class'Alignment should equal ",(0,n.kt)("em",null,"S"),"'Alignment. See 13.3(28).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The recommended level of support for the Alignment attribute should be followed. See 13.3(35).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The Size of an array object should not include its bounds. See 13.3(41.1/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If the Size of a subtype is nonconfirming and allows for efficient independent addressability, then the Object_Size of the subtype (unless otherwise specified) should equal the Size of the subtype. See 13.3(52).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"A Size clause on a composite subtype should not affect the internal layout of components. See 13.3(53).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The recommended level of support for the Size attribute should be followed. See 13.3(56).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"An Object_Size clause on a composite type should not affect the internal layout of components. See 13.3(58).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If S is a definite first subtype for which Object_Size is not specified, S'Object_Size should be the smallest multiple of the storage element size larger than or equal to S'Size that is consistent with the alignment of S. See 13.3(58).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The recommended level of support for the Object_Size attribute should be followed. See 13.3(58).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The Size of most objects of a subtype should equal the Object_Size of the subtype. See 13.3(58).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The recommended level of support for the Component_Size attribute should be followed. See 13.3(73).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The recommended level of support for ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-13/AA-13.4#S0350"},"enumeration_representation_clause")),"s should be followed. See 13.4(10).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The recommended level of support for ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-13/AA-13.5#S0352"},"record_representation_clause")),"s should be followed. See 13.5.1(22).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If a component is represented using a pointer to the actual data of the component which is contiguous with the rest of the object, then the storage place attributes should reflect the place of the actual data. If a component is allocated discontiguously from the rest of the object, then a warning should be generated upon reference to one of its storage place attributes. See 13.5.2(5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The recommended level of support for the nondefault bit ordering should be followed. See 13.5.3(8).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Type System.Address should be a private type. See 13.7(37).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Operations in System and its children should reflect the target environment; operations that do not make sense should raise Program_Error. See 13.7.1(16).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Since the Size of an array object generally does not include its bounds, the bounds should not be part of the converted data in an instance of Unchecked_Conversion. See 13.9(14/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"There should not be unnecessary runtime checks on the result of an Unchecked_Conversion; the result should be returned by reference when possible. Restrictions on Unchecked_Conversions should be avoided. See 13.9(15).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The recommended level of support for Unchecked_Conversion should be followed. See 13.9(17).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Any cases in which heap storage is dynamically allocated other than as part of the evaluation of an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.8#S0164"},"allocator"))," should be documented. See 13.11(24).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"A default storage pool for an access-to-constant type should not have overhead to support deallocation of individual objects. See 13.11(25).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Usually, a storage pool for an access discriminant or access parameter should be created at the point of an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.8#S0164"},"allocator")),", and be reclaimed when the designated object becomes inaccessible. For other anonymous access types, the pool should be created at the point where the type is elaborated and may have no mechanism for the deallocation of individual objects. See 13.11(26).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"For a standard storage pool, an instance of Unchecked_Deallocation should actually reclaim the storage. See 13.11.2(17).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"A call on an instance of Unchecked_Deallocation with a nonnull access value should raise Program_Error if the actual access type of the instance is a type for which the Storage_Size has been specified to be zero or is defined by the language to be zero. See 13.11.2(17.1/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Streams.Storage.Bounded.Stream_Type objects should be implemented without implicit pointers or dynamic allocation. See 13.13.1(37).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If not specified, the value of Stream_Size for an elementary type should be the number of bits that corresponds to the minimum number of stream elements required by the first subtype of the type, rounded up to the nearest factor or multiple of the word size that is also a multiple of the stream element size. See 13.13.2(1.6/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The recommended level of support for the Stream_Size attribute should be followed. See 13.13.2(1.8/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,'If an implementation provides additional named predefined integer types, then the names should end with "Integer". If an implementation provides additional named predefined floating point types, then the names should end with "Float". See A.1(52).',(0,n.kt)("br",null)),(0,n.kt)("li",null,"Implementation-defined operations on Wide_Character, Wide_String, Wide_Wide_Character, and Wide_Wide_String should be child units of Wide_Characters or Wide_Wide_Characters. See A.3.1(7/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,'The string returned by Wide_Characters.Handling.Character_Set_Version should include either "10646:" or "Unicode". See A.3.5(62).',(0,n.kt)("br",null)),(0,n.kt)("li",null,"Bounded string objects should not be implemented by implicit pointers and dynamic allocation. See A.4.4(106).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Strings.Hash should be good a hash function, returning a wide spread of values for different string values, and similar strings should rarely return the same value. See A.4.9(12/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If an implementation supports other string encoding schemes, a child of Ada.Strings similar to UTF_Encoding should be defined. See A.4.11(107/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Bounded buffer objects should be implemented without dynamic allocation. See A.4.12(36).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Any storage associated with an object of type Generator of the random number packages should be reclaimed on exit from the scope of the object. See A.5.2(46).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Each value of Initiator passed to Reset for the random number packages should initiate a distinct sequence of random numbers, or, if that is not possible, be at least a rapidly varying function of the initiator value. See A.5.2(47).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Get_Immediate should be implemented with unbuffered input; input should be available immediately; line-editing should be disabled. See A.10.7(23).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Package Directories.Information should be provided to retrieve other information about a file. See A.16(124/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Directories.Start_Search and Directories.Search should raise Name_Error for malformed patterns. See A.16(125).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Directories.Rename should be supported at least when both New_Name and Old_Name are simple names and New_Name does not identify an existing external file. See A.16(126/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Directories.Hierarchical_File_Names should be provided for systems with hierarchical file naming, and should not be provided on other systems. See A.16.1(36/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If the execution environment supports subprocesses, the current environment variables should be used to initialize the environment variables of a subprocess. See A.17(32/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Changes to the environment variables made outside the control of Environment_Variables should be reflected immediately. See A.17(33/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Containers.Hash_Type'Modulus should be at least 2**32. Containers.Count_Type'Last should be at least 2**311. See A.18.1(8/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The worst-case time complexity of Element for Containers.Vector should be ",(0,n.kt)("em",null,"O"),"(log ",(0,n.kt)("em",null,"N"),"). See A.18.2(256/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The worst-case time complexity of Append with Count = 1 when ",(0,n.kt)("em",null,"N")," is less than the capacity for Containers.Vector should be ",(0,n.kt)("em",null,"O"),"(log ",(0,n.kt)("em",null,"N"),"). See A.18.2(257/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The worst-case time complexity of Prepend with Count = 1 and Delete_First with Count=1 for Containers.Vectors should be ",(0,n.kt)("em",null,"O"),"(",(0,n.kt)("em",null,"N")," log ",(0,n.kt)("em",null,"N"),"). See A.18.2(258/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The worst-case time complexity of a call on procedure Sort of an instance of Containers.Vectors.Generic_Sorting should be ",(0,n.kt)("em",null,"O"),"(",(0,n.kt)("em",null,"N"),"**2), and the average time complexity should be better than ",(0,n.kt)("em",null,"O"),"(",(0,n.kt)("em",null,"N"),"**2). See A.18.2(259/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Containers.Vectors.Generic_Sorting.Sort and Containers.Vectors.Generic_Sorting.Merge should minimize copying of elements. See A.18.2(260/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Containers.Vectors.Move should not copy elements, and should minimize copying of internal data structures. See A.18.2(261/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If an exception is propagated from a vector operation, no storage should be lost, nor any elements removed from a vector unless specified by the operation. See A.18.2(262/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The worst-case time complexity of Element, Insert with Count=1, and Delete with Count=1 for Containers.Doubly_Linked_Lists should be ",(0,n.kt)("em",null,"O"),"(log ",(0,n.kt)("em",null,"N"),"). See A.18.3(160/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"A call on procedure Sort of an instance of Containers.Doubly_Linked_Lists.Generic_Sorting should have an average time complexity better than ",(0,n.kt)("em",null,"O"),"(",(0,n.kt)("em",null,"N"),"**2) and worst case no worse than ",(0,n.kt)("em",null,"O"),"(",(0,n.kt)("em",null,"N"),"**2). See A.18.3(161/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Containers.Doubly_Linked_Lists.Move should not copy elements, and should minimize copying of internal data structures. See A.18.3(162/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If an exception is propagated from a list operation, no storage should be lost, nor any elements removed from a list unless specified by the operation. See A.18.3(163/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Move for a map should not copy elements, and should minimize copying of internal data structures. See A.18.4(83/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If an exception is propagated from a map operation, no storage should be lost, nor any elements removed from a map unless specified by the operation. See A.18.4(84/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The average time complexity of Element, Insert, Include, Replace, Delete, Exclude, and Find operations that take a key parameter for Containers.Hashed_Maps should be ",(0,n.kt)("em",null,"O"),"(log ",(0,n.kt)("em",null,"N"),"). The average time complexity of the subprograms of Containers.Hashed_Maps that take a cursor parameter should be ",(0,n.kt)("em",null,"O"),"(1). The average time complexity of Containers.Hashed_Maps.Reserve_Capacity should be ",(0,n.kt)("em",null,"O"),"(",(0,n.kt)("em",null,"N"),"). See A.18.5(62/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The worst-case time complexity of Element, Insert, Include, Replace, Delete, Exclude, and Find operations that take a key parameter for Containers.Ordered_Maps should be ",(0,n.kt)("em",null,"O"),"((log ",(0,n.kt)("em",null,"N"),")**2) or better. The worst-case time complexity of the subprograms of Containers.Ordered_Maps that take a cursor parameter should be ",(0,n.kt)("em",null,"O"),"(1). See A.18.6(95/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Move for sets should not copy elements, and should minimize copying of internal data structures. See A.18.7(104/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If an exception is propagated from a set operation, no storage should be lost, nor any elements removed from a set unless specified by the operation. See A.18.7(105/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The average time complexity of the Insert, Include, Replace, Delete, Exclude, and Find operations of Containers.Hashed_Sets that take an element parameter should be ",(0,n.kt)("em",null,"O"),"(log ",(0,n.kt)("em",null,"N"),"). The average time complexity of the subprograms of Containers.Hashed_Sets that take a cursor parameter should be ",(0,n.kt)("em",null,"O"),"(1). The average time complexity of Containers.Hashed_Sets.Reserve_Capacity should be ",(0,n.kt)("em",null,"O"),"(",(0,n.kt)("em",null,"N"),"). See A.18.8(88/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The worst-case time complexity of the Insert, Include, Replace, Delete, Exclude, and Find operations of Containers.Ordered_Sets that take an element parameter should be ",(0,n.kt)("em",null,"O"),"((log ",(0,n.kt)("em",null,"N"),")**2). The worst-case time complexity of the subprograms of Containers.Ordered_Sets that take a cursor parameter should be ",(0,n.kt)("em",null,"O"),"(1). See A.18.9(116/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The worst-case time complexity of the Element, Parent, First_Child, Last_Child, Next_Sibling, Previous_Sibling, Insert_Child with Count=1, and Delete operations of Containers.Multiway_Trees should be ",(0,n.kt)("em",null,"O"),"(log ",(0,n.kt)("em",null,"N"),"). See A.18.10(230/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Containers.Multiway_Trees.Move should not copy elements, and should minimize copying of internal data structures. See A.18.10(231/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If an exception is propagated from a tree operation, no storage should be lost, nor any elements removed from a tree unless specified by the operation. See A.18.10(232/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Move and Swap in Containers.Indefinite_Holders should not copy any elements, and should minimize copying of internal data structures. See A.18.18(73/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If an exception is propagated from a holder operation, no storage should be lost, nor should the element be removed from a holder container unless specified by the operation. See A.18.18(74/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Bounded vector objects should be implemented without implicit pointers or dynamic allocation. See A.18.19(16/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The implementation advice for procedure Move to minimize copying does not apply to bounded vectors. See A.18.19(17/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Bounded list objects should be implemented without implicit pointers or dynamic allocation. See A.18.20(19/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The implementation advice for procedure Move to minimize copying does not apply to bounded lists. See A.18.20(20/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Bounded hashed map objects should be implemented without implicit pointers or dynamic allocation. See A.18.21(21/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The implementation advice for procedure Move to minimize copying does not apply to bounded hashed maps. See A.18.21(22/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Bounded ordered map objects should be implemented without implicit pointers or dynamic allocation. See A.18.22(18/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The implementation advice for procedure Move to minimize copying does not apply to bounded ordered maps. See A.18.22(19/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Bounded hashed set objects should be implemented without implicit pointers or dynamic allocation. See A.18.23(20/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The implementation advice for procedure Move to minimize copying does not apply to bounded hashed sets. See A.18.23(21/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Bounded ordered set objects should be implemented without implicit pointers or dynamic allocation. See A.18.24(17/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The implementation advice for procedure Move to minimize copying does not apply to bounded ordered sets. See A.18.24(18/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Bounded tree objects should be implemented without implicit pointers or dynamic allocation. See A.18.25(19/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The implementation advice for procedure Move to minimize copying does not apply to bounded trees. See A.18.25(20/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Containers.Generic_Array_Sort and Containers.Generic_Constrained_Array_Sort should have an average time complexity better than ",(0,n.kt)("em",null,"O"),"(",(0,n.kt)("em",null,"N"),"**2) and worst case no worse than ",(0,n.kt)("em",null,"O"),"(",(0,n.kt)("em",null,"N"),"**2). See A.18.26(10/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Containers.Generic_Array_Sort and Containers.Generic_Constrained_Array_Sort should minimize copying of elements. See A.18.26(11/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Containers.Generic_Sort should have an average time complexity better than ",(0,n.kt)("em",null,"O"),"(",(0,n.kt)("em",null,"N"),"**2) and worst case no worse than ",(0,n.kt)("em",null,"O"),"(",(0,n.kt)("em",null,"N"),"**2). See A.18.26(12/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Containers.Generic_Sort should minimize calls to the generic formal Swap. See A.18.26(13/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Bounded queue objects should be implemented without implicit pointers or dynamic allocation. See A.18.29(13/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Bounded priority queue objects should be implemented without implicit pointers or dynamic allocation. See A.18.31(14/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Bounded holder objects should be implemented without dynamic allocation. See A.18.32(15/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,'If  Export is supported for a language, the main program should be able to be written in that language. Subprograms named "adainit" and "adafinal" should be provided for elaboration and finalization of the environment task. See B.1(39/3).',(0,n.kt)("br",null)),(0,n.kt)("li",null,"Automatic elaboration of preelaborated packages should be provided when specifying the Export aspect as True is supported. See B.1(40/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"For each supported convention ",(0,n.kt)("em",null,"L")," other than Intrinsic, specifying the aspects Import and Export should be supported for objects of ",(0,n.kt)("em",null,"L"),"-compatible types and for subprograms, and aspect Convention should be supported for ",(0,n.kt)("em",null,"L"),"-eligible types and for subprograms. See B.1(41/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,'If an interface to C, COBOL, or Fortran is provided, the corresponding package or packages described in Annex B, "Interface to Other Languages" should also be provided. See B.2(13/3).',(0,n.kt)("br",null)),(0,n.kt)("li",null,"The constants nul, wide_nul, char16_nul, and char32_nul in package Interfaces.C should have a representation of zero. See B.3(62.5/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If C interfacing is supported, the interface correspondences between Ada and C should be supported. See B.3(71).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If the C implementation supports unsigned long long and long long, unsigned_long_long and long_long should be supported. See B.3(71).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If COBOL interfacing is supported, the interface correspondences between Ada and COBOL should be supported. See B.4(98).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If Fortran interfacing is supported, the interface correspondences between Ada and Fortran should be supported. See B.5(26).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The machine code or intrinsics support should allow access to all operations normally available to assembly language programmers for the target environment. See C.1(3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Interface to assembler should be supported; the default assembler should be associated with the convention identifier Assembler. See C.1(4/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If an entity is exported to assembly language, then the implementation should allocate it at an addressable location even if not otherwise referenced from the Ada code. A call to a machine code or assembler subprogram should be treated as if it can read or update every object that is specified as exported. See C.1(5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Little or no overhead should be associated with calling intrinsic and machine-code subprograms. See C.1(10).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Intrinsic subprograms should be provided to access any machine operations that provide special capabilities or efficiency not normally available. See C.1(16).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If the Ceiling_Locking policy is not in effect and the target system allows for finer-grained control of interrupt blocking, a means for the application to specify which interrupts are to be blocked during protected actions should be provided. See C.3(28/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Interrupt handlers should be called directly by the hardware. See C.3.1(20).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Violations of any implementation-defined restrictions on interrupt handlers should be detected before run time. See C.3.1(21).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If implementation-defined forms of interrupt handler procedures are supported, then for each such form of a handler, a type analogous to Parameterless_Handler should be specified in a child package of Interrupts, with the same operations as in the predefined package Interrupts. See C.3.2(25).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Preelaborated packages should be implemented such that little or no code is executed at run time for the elaboration of entities. See C.4(14).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If aspect Discard_Names is True for an entity, then the amount of storage used for storing names associated with that entity should be reduced. See C.5(8/4).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"A load or store of a volatile object whose size is a multiple of System.Storage_Unit and whose alignment is nonzero, should be implemented by accessing exactly the bits of the object and no others. See C.6(22/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"A load or store of an atomic object should be implemented by a single load or store instruction. See C.6(23/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If the target domain requires deterministic memory use at run time, storage for task attributes should be pre-allocated statically and the number of attributes pre-allocated should be documented. See C.7.2(30).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Finalization of task attributes and reclamation of associated storage should be performed as soon as possible after task termination. See C.7.2(30.1/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,'Names that end with "_Locking" should be used for implementation-defined locking policies. See D.3(17).',(0,n.kt)("br",null)),(0,n.kt)("li",null,'Names that end with "_Queuing" should be used for implementation-defined queuing policies. See D.4(16).',(0,n.kt)("br",null)),(0,n.kt)("li",null,"The ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.8#S0284"},"abort_statement"))," should not require the task executing the statement to block. See D.6(9).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"On a multi-processor, the delay associated with aborting a task on another processor should be bounded. See D.6(10).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"When feasible, specified restrictions should be used to produce a more efficient implementation. See D.7(21).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"When appropriate, mechanisms to change the value of Tick should be provided. See D.8(47).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Calendar.Clock and Real_Time.Clock should be transformations of the same time base. See D.8(48).",(0,n.kt)("br",null)),(0,n.kt)("li",null,'The "best" time base which exists in the underlying system should be available to the application through Real_Time.Clock. See D.8(49).',(0,n.kt)("br",null)),(0,n.kt)("li",null,"On a multiprocessor system, each processor should have a separate and disjoint ready queue. See D.13(9).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"When appropriate, implementations should provide configuration mechanisms to change the value of Execution_Time.CPU_Tick. See D.14(29/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"For a timing event, the handler should be executed directly by the real-time clock interrupt mechanism. See D.15(25).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Starting a protected action on a protected object statically assigned to a processor should not use busy-waiting. See D.16(16).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Each dispatching domain should have separate and disjoint ready queues. See D.16.1(31).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The PCS should allow for multiple tasks to call the RPC-receiver. See E.5(28).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The System.RPC.Write operation should raise Storage_Error if it runs out of space when writing an item. See E.5(29).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If COBOL (respectively, C) is supported in the target environment, then interfacing to COBOL (respectively, C) should be supported as specified in Annex B. See F(7/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Packed decimal should be used as the internal representation for objects of subtype ",(0,n.kt)("em",null,"S")," when ",(0,n.kt)("em",null,"S"),"'Machine_Radix = 10. See F.1(2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If Fortran (respectively, C) is supported in the target environment, then interfacing to Fortran (respectively, C) should be supported as specified in Annex B. See G(7/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Mixed real and complex operations (as well as pure-imaginary and complex operations) should not be performed by converting the real (resp. pure-imaginary) operand to complex. See G.1.1(56/5).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If Real'Signed_Zeros is True for Numerics.Generic_Complex_Types, a rational treatment of the signs of zero results and result components should be provided. See G.1.1(58).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If Complex_Types.Real'Signed_Zeros is True for Numerics.Generic_Complex_Elementary_Functions, a rational treatment of the signs of zero results and result components should be provided. See G.1.2(49).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"For elementary functions, the forward trigonometric functions without a Cycle parameter should not be implemented by calling the corresponding version with a Cycle parameter. Log without a Base parameter should not be implemented by calling Log with a Base parameter. See G.2.4(19).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"For complex arithmetic, the Compose_From_Polar function without a Cycle parameter should not be implemented by calling Compose_From_Polar with a Cycle parameter. See G.2.6(15).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Solve and Inverse for Numerics.Generic_Real_Arrays should be implemented using established techniques such as LU decomposition and the result should be refined by an iteration on the residuals. See G.3.1(88/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The equality operator should be used to test that a matrix in Numerics.Generic_Real_Arrays is symmetric. See G.3.1(90/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"An implementation should minimize the circumstances under which the algorithm used for Numerics.Generic_Real_Arrays.Eigenvalues and Numerics.Generic_Real_Arrays.Eigensystem fails to converge. See G.3.1(91/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Solve and Inverse for Numerics.Generic_Complex_Arrays should be implemented using established techniques and the result should be refined by an iteration on the residuals. See G.3.2(158/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The equality and negation operators should be used to test that a matrix is Hermitian. See G.3.2(160/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"An implementation should minimize the circumstances under which the algorithm used for Numerics.Generic_Complex_Arrays.Eigenvalues and Numerics.Generic_Complex_Arrays.Eigensystem fails to converge. See G.3.2(160.1/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Mixed real and complex operations should not be performed by converting the real operand to complex. See G.3.2(161/2).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"The information produced by ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Reviewable should be provided in both a human-readable and machine-readable form, and the latter form should be documented. See H.3.1(19).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"Object code listings should be provided both in a symbolic format and in a numeric format. See H.3.1(20).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"If the partition elaboration policy is Sequential and the Environment task becomes permanently blocked during elaboration, then the partition should be immediately terminated. See H.6(15/3).",(0,n.kt)("br",null)),(0,n.kt)("li",null,"When applied to a generic unit, a program unit pragma that is not a library unit pragma should apply to each instance of the generic unit for which there is not an overriding pragma applied directly to the instance. See J.15(9/5).",(0,n.kt)("br",null))))}y.isMDXComponent=!0}}]);