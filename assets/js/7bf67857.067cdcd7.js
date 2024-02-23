"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8833],{11096:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=a(74848),t=a(28453);const s={title:"3.2 Naming Conventions"},r=void 0,o={id:"style-guide/s3/02",title:"3.2 Naming Conventions",description:"Choose names that clarify the object's or entity's intended use. Ada",source:"@site/docs/style-guide/s3/02.mdx",sourceDirName:"style-guide/s3",slug:"/style-guide/s3/02",permalink:"/docs/style-guide/s3/02",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"3.2 Naming Conventions"},sidebar:"styleGuideSidebar",previous:{title:"3.1 Spelling",permalink:"/docs/style-guide/s3/01"},next:{title:"3.3 Comments",permalink:"/docs/style-guide/s3/03"}},l={},c=[{value:"Names",id:"names",level:3},{value:"guideline",id:"guideline",level:4},{value:"example",id:"example",level:4},{value:"rationale",id:"rationale",level:4},{value:"notes",id:"notes",level:4},{value:"Subtype Names",id:"subtype-names",level:3},{value:"guideline",id:"guideline-1",level:4},{value:"example",id:"example-1",level:4},{value:"rationale",id:"rationale-1",level:4},{value:"notes",id:"notes-1",level:4},{value:"Object Names",id:"object-names",level:3},{value:"guideline",id:"guideline-2",level:4},{value:"example",id:"example-2",level:4},{value:"rationale",id:"rationale-2",level:4},{value:"notes",id:"notes-2",level:4},{value:"Naming of Tagged Types and Associated Packages",id:"naming-of-tagged-types-and-associated-packages",level:3},{value:"guideline",id:"guideline-3",level:4},{value:"instantiation",id:"instantiation",level:4},{value:"example",id:"example-3",level:4},{value:"rationale",id:"rationale-3",level:4},{value:"notes",id:"notes-3",level:4},{value:"Program Unit Names",id:"program-unit-names",level:3},{value:"guideline",id:"guideline-4",level:4},{value:"example",id:"example-4",level:4},{value:"rationale",id:"rationale-4",level:4},{value:"notes",id:"notes-4",level:4},{value:"Constants and Named Numbers",id:"constants-and-named-numbers",level:3},{value:"guideline",id:"guideline-5",level:4},{value:"example",id:"example-5",level:4},{value:"rationale",id:"rationale-5",level:4},{value:"notes",id:"notes-5",level:4},{value:"Exceptions",id:"exceptions",level:3},{value:"guideline",id:"guideline-6",level:4},{value:"example",id:"example-6",level:4},{value:"rationale",id:"rationale-6",level:4},{value:"Constructors",id:"constructors",level:3},{value:"guideline",id:"guideline-7",level:4},{value:"instantiation",id:"instantiation-1",level:4},{value:"example",id:"example-7",level:4},{value:"rationale",id:"rationale-7",level:4}];function d(e){const n={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Choose names that clarify the object's or entity's intended use. Ada\nallows identifiers to be any length as long as the identifier fits on a\nline with all characters being significant (including underscores).\nIdentifiers are the names used for variables, constants, program units,\nand other entities within a program."}),"\n",(0,i.jsx)(n.h3,{id:"names",children:"Names"}),"\n",(0,i.jsx)(n.h4,{id:"guideline",children:"guideline"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Choose names that are as self-documenting as possible."}),"\n",(0,i.jsx)(n.li,{children:"Use a short synonym instead of an abbreviation (see Guideline\n3.1.4)."}),"\n",(0,i.jsx)(n.li,{children:"Use names given by the application, but do not use obscure jargon."}),"\n",(0,i.jsx)(n.li,{children:"Avoid using the same name to declare different kinds of identifiers."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"example"}),"\n",(0,i.jsxs)(n.p,{children:["In a tree-walker, using the name ",(0,i.jsx)(n.code,{children:"Left"})," instead of ",(0,i.jsx)(n.code,{children:"Left_Branch"})," is\nsufficient to convey the full meaning given the context. However, use\n",(0,i.jsx)(n.code,{children:"Time_Of_Day"})," instead of ",(0,i.jsx)(n.code,{children:"TOD"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Mathematical formulas are often given using single-letter names for\nvariables. Continue this convention for mathematical equations where\nthey would recall the formula, for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"   A*(X**2) + B*X + C.\n"})}),"\n",(0,i.jsx)(n.p,{children:"With the use of child packages, a poor choice of package, subunit, and\nidentifier names can lead to a visibility clash with subunits. See the\nRationale (1995, \xa78.1) for a sample of the resulting, rather obscure\ncode."}),"\n",(0,i.jsx)(n.h4,{id:"rationale",children:"rationale"}),"\n",(0,i.jsx)(n.p,{children:"A program that follows these guidelines can be more easily comprehended.\nSelf-documenting names require fewer explanatory comments. Empirical\nstudies have shown that you can further improve comprehension if your\nvariable names are not excessively long (Schneiderman 1986, 7). The\ncontext and application can help greatly. The unit of measure for\nnumeric entities can be a source of subtype names."}),"\n",(0,i.jsx)(n.p,{children:"You should try not to use the same name as an identifier for different\ndeclarations, such as an object and a child package. Overusing an\nidentifier in seemingly different name spaces can, in fact, lead to\nvisibility clashes if the enclosing program units are intended to work\ntogether."}),"\n",(0,i.jsx)(n.h4,{id:"notes",children:"notes"}),"\n",(0,i.jsx)(n.p,{children:"See Guideline 8.1.2 for a discussion on how to use the application\ndomain as a guideline for selecting abbreviations."}),"\n",(0,i.jsx)(n.h3,{id:"subtype-names",children:"Subtype Names"}),"\n",(0,i.jsx)(n.h4,{id:"guideline-1",children:"guideline"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use singular, general nouns as subtype identifiers."}),"\n",(0,i.jsx)(n.li,{children:"Choose identifiers that describe one of the subtype's values."}),"\n",(0,i.jsx)(n.li,{children:"Consider using suffixes for subtype identifiers that define visible\naccess types, visible subranges, or visible array types."}),"\n",(0,i.jsx)(n.li,{children:"For private types, do not use identifier constructions (e.g.,\nsuffixes) that are unique to subtype identifiers."}),"\n",(0,i.jsx)(n.li,{children:"Do not use the subtype names from predefined packages."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"type Day is\n   (Monday,    Tuesday,   Wednesday, Thursday,  Friday,\n    Saturday,  Sunday);\n\ntype Day_Of_Month    is range      0 ..    31;\ntype Month_Number    is range      1 ..    12;\ntype Historical_Year is range -6_000 .. 2_500;\n\ntype Date is\n   record\n      Day   : Day_Of_Month;\n      Month : Month_Number;\n      Year  : Historical_Year;\n   end record;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In particular, ",(0,i.jsx)(n.code,{children:"Day"})," should be used in preference to ",(0,i.jsx)(n.code,{children:"Days"})," or\n",(0,i.jsx)(n.code,{children:"Day_Type"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The identifier ",(0,i.jsx)(n.code,{children:"Historical_Year"})," might appear to be specific, but it is\nactually general, with the adjective ",(0,i.jsx)(n.code,{children:"historical"})," describing the range\nconstraint:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"------------------------------------------------------------------------\nprocedure Disk_Driver is\n\n   -- In this procedure, a number of important disk parameters are\n   -- linked.\n   Number_Of_Sectors  : constant :=     4;\n   Number_Of_Tracks   : constant :=   200;\n   Number_Of_Surfaces : constant :=    18;\n   Sector_Capacity    : constant := 4_096;\n\n   Track_Capacity   : constant := Number_Of_Sectors  * Sector_Capacity;\n   Surface_Capacity : constant := Number_Of_Tracks   * Track_Capacity;\n   Disk_Capacity    : constant := Number_Of_Surfaces * Surface_Capacity;\n\n   type Sector_Range  is range 1 .. Number_Of_Sectors;\n   type Track_Range   is range 1 .. Number_Of_Tracks;\n   type Surface_Range is range 1 .. Number_Of_Surfaces;\n\n   type Track_Map   is array (Sector_Range)  of ...;\n   type Surface_Map is array (Track_Range)   of Track_Map;\n   type Disk_Map    is array (Surface_Range) of Surface_Map;\n\nbegin  -- Disk_Driver\n   ...\nend Disk_Driver;\n------------------------------------------------------------------------\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The suffixes ",(0,i.jsx)(n.code,{children:"_Capacity"}),", ",(0,i.jsx)(n.code,{children:"_Range"}),", and ",(0,i.jsx)(n.code,{children:"_Map"})," help define the purpose\nof the above subtypes and avoid the search for synonyms for the sector,\ntrack, and surface abstractions. Without the suffixes, you would need\nthree different names per abstraction, one to describe each of the\nconcepts succinctly named in the suffix. This recommendation only\napplies to certain visible subtypes. Private types, for example, should\nbe given a good name that reflects the abstraction being represented."]}),"\n",(0,i.jsx)(n.h4,{id:"rationale-1",children:"rationale"}),"\n",(0,i.jsxs)(n.p,{children:["When this style and the suggested style for object identifiers are used,\nprogram code more closely resembles English (see Guideline 3.2.3).\nFurthermore, this style is consistent with the names of the language's\npredefined identifiers. They are not named ",(0,i.jsx)(n.code,{children:"Integers"}),", ",(0,i.jsx)(n.code,{children:"Booleans"}),",\n",(0,i.jsx)(n.code,{children:"Integer_Type"}),", or ",(0,i.jsx)(n.code,{children:"Boolean_Type"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"However, using the name of a subtype from the predefined packages is\nsure to confuse a programmer when that subtype appears somewhere without\na package qualification."}),"\n",(0,i.jsx)(n.h4,{id:"notes-1",children:"notes"}),"\n",(0,i.jsx)(n.p,{children:'This style guide tries to be consistent with the Ada Reference Manual\n(1995) in use of the terms "type" and "subtype" name. In general, a\n"type" refers to the abstract concept, as in a type declaration, while\nthe "subtype" refers to the name given to that abstract concept in an\nactual declaration. Thus, what was called a type name in Ada 83 (Ada\nReference Manual 1983) is now called a subtype name.'}),"\n",(0,i.jsx)(n.h3,{id:"object-names",children:"Object Names"}),"\n",(0,i.jsx)(n.h4,{id:"guideline-2",children:"guideline"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use predicate clauses or adjectives for Boolean objects."}),"\n",(0,i.jsx)(n.li,{children:"Use singular, specific nouns as object identifiers."}),"\n",(0,i.jsx)(n.li,{children:"Choose identifiers that describe the object's value during\nexecution."}),"\n",(0,i.jsx)(n.li,{children:"Use singular, general nouns as identifiers for record components."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-2",children:"example"}),"\n",(0,i.jsx)(n.p,{children:"Non-Boolean objects:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"Today           : Day;\nYesterday       : Day;\nRetirement_Date : Date;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Boolean objects:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"User_Is_Available : Boolean;        -- predicate clause\nList_Is_Empty     : Boolean;        -- predicate clause\nEmpty             : Boolean;        -- adjective\nBright            : Boolean;        -- adjective\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rationale-2",children:"rationale"}),"\n",(0,i.jsx)(n.p,{children:"Using specific nouns for objects establishes a context for understanding\nthe object's value, which is one of the general values described by the\nsubtype's name (see Guideline 3.2.2). Object declarations become very\nEnglish-like with this style. For example, the first declaration above\nis read as \"Today is a Day.\""}),"\n",(0,i.jsx)(n.p,{children:'General nouns, rather than specific, are used for record components\nbecause a record object\'s name will supply the context for understanding\nthe component. Thus, the following component is understood as "the year\nof retirement":'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"Retirement_Date.Year\n"})}),"\n",(0,i.jsx)(n.p,{children:"Following conventions that relate object types and parts of speech makes\ncode read more like text. For example, because of the names chosen, the\nfollowing code segment needs no comments:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"if List_Is_Empty then\n   Number_Of_Elements := 0;\nelse\n   Number_Of_Elements := Length_Of_List;\nend if;\n"})}),"\n",(0,i.jsx)(n.h4,{id:"notes-2",children:"notes"}),"\n",(0,i.jsx)(n.p,{children:"If it is difficult to find a specific noun that describes an object's\nvalue during the entire execution of a program, the object is probably\nserving multiple purposes. Multiple objects should be used in such a\ncase."}),"\n",(0,i.jsx)(n.h3,{id:"naming-of-tagged-types-and-associated-packages",children:"Naming of Tagged Types and Associated Packages"}),"\n",(0,i.jsx)(n.h4,{id:"guideline-3",children:"guideline"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use a consistent naming convention for tagged types and associated\npackages."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"instantiation",children:"instantiation"}),"\n",(0,i.jsx)(n.p,{children:'Naming conventions spark "religious wars"; therefore, two different\ninstantiations are presented. The first instantiation integrates the use\nof object-oriented features. Except for two special cases, it applies\nthe same naming conventions to declarations, independent of whether they\nuse an object-oriented feature:'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Name tagged types no differently than subtype names (see Guideline\n3.2.2)."}),"\n",(0,i.jsxs)(n.li,{children:["Use the prefix ",(0,i.jsx)(n.code,{children:"Abstract_"})," for packages that export an abstraction\nfor which you intend to provide multiple implementations (see\nGuideline 9.2.4)."]}),"\n",(0,i.jsxs)(n.li,{children:["Use the suffix ",(0,i.jsx)(n.code,{children:"_Mixin"}),' for packages that provide units of\nfunctionality that can be "mixed in" to core abstractions.']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The second instantiation highlights the use of object-oriented features\nthrough special names or suffixes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Name class packages after the object they represent, without a\nsuffix (Rosen 1995)."}),"\n",(0,i.jsx)(n.li,{children:"Name mixin packages after the facet they represent, appending the\nsuffix _Facet (Rosen 1995)."}),"\n",(0,i.jsxs)(n.li,{children:["Name the main tagged type ",(0,i.jsx)(n.code,{children:"Instance"})," (Rosen 1995)."]}),"\n",(0,i.jsxs)(n.li,{children:["Follow the declaration of the specific type with a subtype named\n",(0,i.jsx)(n.code,{children:"Class"})," for the corresponding class-wide type (Rosen 1995)."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-3",children:"example"}),"\n",(0,i.jsx)(n.p,{children:"The following two-part example from the Rationale (1995, \xa7\xa74.4.4 and\n4.6.2) applies the naming conventions of the first instantiation."}),"\n",(0,i.jsxs)(n.p,{children:["For the first part of this example, assume the type ",(0,i.jsx)(n.code,{children:"Set_Element"})," was\ndeclared elsewhere:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"package Abstract_Sets is\n\n   type Set is abstract tagged private;\n\n   -- empty set\n   function Empty return Set is abstract;\n\n   -- build set with 1 element\n   function Unit (Element: Set_Element) return Set is abstract;\n\n   -- union of two sets\n   function Union (Left, Right: Set) return Set is abstract;\n\n   -- intersection of two sets\n   function Intersection (Left, Right: Set) return Set is abstract;\n\n   -- remove an element from a set\n   procedure Take (From    : in out Set;\n                   Element :    out set_Element) is abstract;\n\n   Element_Too_Large : exception;\nprivate\n   type Set is abstract tagged null record;\nend Abstract_Sets;\n\nwith Abstract_Sets;\npackage Bit_Vector_Sets is   -- one implementation of set abstraction\n\n   type Bit_Set is new Abstract_Sets.Set with private;\n   ...\nprivate\n   Bit_Set_Size : constant := 64;\n   type Bit_Vector is ...\n   type Bit_Set is new Abstract_Sets.Set with\n      record\n         Data : Bit_Vector;\n      end record;\nend Bit_Vector_Sets;\n\nwith Abstract_Sets;\npackage Sparse_Sets  -- alternate implementation of set abstraction\n\n   type Sparse_Set is new Abstract_Sets.Set with private;\n   ...\nprivate\n   ...\nend Bit_Vector_Sets;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The second part of this example applies the naming convention to mixin\npackages that support a windowing system:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"-- assume you have type Basic_Window is tagged limited private;\n\ngeneric\n   type Some_Window is abstract new Basic_Window with private;\npackage Label_Mixin is\n   type Window_With_Label is abstract new Some_Window with private;\n   ...\nprivate\n   ...\nend Label_Mixin;\n\ngeneric\n   type Some_Window is abstract new Basic_Window with private;\npackage Border_Mixin is\n   type Window_With_Label is abstract new Some_Window with private;\n   ...\nprivate\n   ...\nend Border_Mixin;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The following example applies the naming conventions of the second\ninstantiation, as discussed in Rosen (1995):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"package Shape is\n   subtype Side_Count is range 0 .. 100;\n   type Instance (Sides: Side_Count) is tagged private;\n   subtype Class is Instance'Class;\n   . . .\n   -- operations on Shape.Instance\nprivate\n   . . .\nend Shape;\n\nwith Shape; use Shape;\npackage Line is\n   type Instance is new Shape.Instance with private;\n   subtype Class is Instance'Class;\n   . . .\n   -- Overridden or new operations\nprivate\n   . . .\nend Line;\n\nwith Shape; use Shape;\ngeneric\n   type Origin is new Shape.Instance;\npackage With_Color_Facet is\n   type Instance is new Origin with private;\n   subtype Class is Instance'Class;\n   -- operations for colored shapes\nprivate\n   . . .\nend With_Color_Facet;\n\nwith Line; use Line;\nwith With_Color_Facet;\npackage Colored_Line is new With_Color_Facet (Line.Instance);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sample declarations might look like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"Red_Line : Colored_Line.Instance;\n\nprocedure Draw (What : Shape.Instance);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The above scheme works whether you use full names or a ",(0,i.jsx)(n.code,{children:"use"})," clause. As\nlong as you use the same name for all the specific types (i.e., ",(0,i.jsx)(n.code,{children:"type Instance"}),") and class-wide types, the unqualified names will always hide\none another. Thus, the compiler will insist you use full name\nqualification to resolve the ambiguity introduced by the use clause\n(Rosen 1995)."]}),"\n",(0,i.jsx)(n.h4,{id:"rationale-3",children:"rationale"}),"\n",(0,i.jsx)(n.p,{children:"You want to use a naming scheme that is consistent and readable and\nconveys the intent of the abstraction. Ideally, the naming scheme should\nbe uniform in how it handles the different ways in which tagged types\nare used to create classes. If the naming convention is too rigid,\nhowever, you will write code fragments that appear stilted from a\nreadability point of view. By using a similar naming convention for type\nextension through derivation and through generic mixin (see also\nGuideline 9.5.1), you achieve readable declarations of objects and\nprocedures."}),"\n",(0,i.jsx)(n.h4,{id:"notes-3",children:"notes"}),"\n",(0,i.jsx)(n.p,{children:"A naming convention for classes draws a hard line between\nobject-oriented abstractions and other kinds of abstractions. Given that\nengineers have been defining abstract data types in Ada 83 (Ada\nReference Manual 1983) for over 10 years, you may not want to change the\nnaming convention just for the sake of using type extension with a type.\nYou must consider how important it is to call out uses of inheritance in\nthe overall use of abstractions in your program. If you prefer to\nemphasize abstraction, in general, over the mechanism used to implement\nthe abstraction (i.e., inheritance, type-extension, and polymorphism),\nyou may not want to impose such a stringent naming convention. You do\nnot hamper quality by favoring a smoother transition in naming\nconventions from abstractions developed without inheritance to those\ndeveloped with inheritance."}),"\n",(0,i.jsx)(n.p,{children:"If you choose a naming convention that highlights the use of\nobject-oriented features and later decide to change the declaration to\none that does not use an object-oriented feature, the change may be\nexpensive. You must naturally change all occurrences of the names and\nmust be careful not to introduce errors as you update the names. If you\nchoose a naming convention that prohibits the use of suffixes or\nprefixes to characterize the declaration, you lose the opportunity to\nconvey the intended usage of the declared item."}),"\n",(0,i.jsx)(n.h3,{id:"program-unit-names",children:"Program Unit Names"}),"\n",(0,i.jsx)(n.h4,{id:"guideline-4",children:"guideline"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use action verbs for procedures and entries."}),"\n",(0,i.jsx)(n.li,{children:"Use predicate clauses for Boolean functions."}),"\n",(0,i.jsx)(n.li,{children:"Use nouns for non-Boolean functions."}),"\n",(0,i.jsx)(n.li,{children:"Give packages names that imply a higher level of organization than\nsubprograms. Generally, these are noun phrases that describe the\nabstraction provided."}),"\n",(0,i.jsx)(n.li,{children:"Give tasks names that imply an active entity."}),"\n",(0,i.jsx)(n.li,{children:"Use nouns descriptive of the data being protected for protected\nunits."}),"\n",(0,i.jsx)(n.li,{children:"Consider naming generic subprograms as if they were nongeneric\nsubprograms."}),"\n",(0,i.jsx)(n.li,{children:"Consider naming generic packages as if they were nongeneric\npackages."}),"\n",(0,i.jsx)(n.li,{children:"Make the generic names more general than the instantiated names."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-4",children:"example"}),"\n",(0,i.jsx)(n.p,{children:"The following are sample names for elements that compose an Ada program:"}),"\n",(0,i.jsx)(n.p,{children:"Sample procedure names:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"procedure Get_Next_Token          -- get is a transitive verb\nprocedure Create                  -- create is a transitive verb\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sample function names for Boolean-valued functions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"function Is_Last_Item             -- predicate clause\nfunction Is_Empty                 -- predicate clause\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sample function names for non-Boolean-valued functions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"function Successor                -- common noun\nfunction Length                   -- attribute\nfunction Top                      -- component\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sample package names:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"package Terminals is               -- common noun\npackage Text_Routines is           -- common noun\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sample protected objects:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"protected Current_Location is      -- data being protected\nprotected type Guardian is         -- noun implying protection\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sample task names:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"task Terminal_Resource_Manager is  -- common noun that shows action\n"})}),"\n",(0,i.jsx)(n.p,{children:"The following sample piece of code shows the clarity that results from\nusing the parts-of-speech naming conventions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"Get_Next_Token(Current_Token);\n\ncase Current_Token is\n   when Identifier =>         Process_Identifier;\n   when Numeric    =>         Process_Numeric;\nend case;  -- Current_Token\n\nif Is_Empty(Current_List) then\n   Number_Of_Elements := 0;\nelse\n   Number_Of_Elements := Length(Current_List);\nend if;\n"})}),"\n",(0,i.jsx)(n.p,{children:"When packages and their subprograms are named together, the resulting\ncode is very descriptive:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"if Stack.Is_Empty(Current_List) then\n   Current_Token := Stack.Top(Current_List);\nend if;\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rationale-4",children:"rationale"}),"\n",(0,i.jsx)(n.p,{children:"Using these naming conventions creates understandable code that reads\nmuch like natural language. When verbs are used for actions, such as\nsubprograms, and nouns are used for objects, such as the data that the\nsubprogram manipulates, code is easier to read and understand. This\nmodels a medium of communication already familiar to a reader. Where the\npieces of a program model a real-life situation, using these conventions\nreduces the number of translation steps involved in reading and\nunderstanding the program. In a sense, your choice of names reflects the\nlevel of abstraction from computer hardware toward application\nrequirements."}),"\n",(0,i.jsx)(n.p,{children:"See also Guideline 3.2.4 for the use of special-purpose suffixes in\npackages associated with tagged types."}),"\n",(0,i.jsx)(n.h4,{id:"notes-4",children:"notes"}),"\n",(0,i.jsx)(n.p,{children:"There are some conflicting conventions in current use for task entries.\nSome programmers and designers advocate naming task entries with the\nsame conventions used for subprograms to blur the fact that a task is\ninvolved. Their reasoning is that if the task is reimplemented as a\npackage, or vice versa, the names need not change. Others prefer to make\nthe fact of a task entry as explicit as possible to ensure that the\nexistence of a task with its presumed overhead is recognizable.\nProject-specific priorities may be useful in choosing between these\nconventions."}),"\n",(0,i.jsx)(n.h3,{id:"constants-and-named-numbers",children:"Constants and Named Numbers"}),"\n",(0,i.jsx)(n.h4,{id:"guideline-5",children:"guideline"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use symbolic values instead of literals where the symbolic value\nimproves readability."}),"\n",(0,i.jsx)(n.li,{children:"Use symbolic values instead of literals if the value occurs at more\nthan one place and might need to be changed."}),"\n",(0,i.jsx)(n.li,{children:"Use the predefined constants Ada.Numerics.Pi and Ada.Numerics.e for\nthe mathematical constants Pi and e."}),"\n",(0,i.jsx)(n.li,{children:"Use constants instead of variables for constant values."}),"\n",(0,i.jsx)(n.li,{children:"Use a constant when the value is specific to a type or when the\nvalue must be static."}),"\n",(0,i.jsx)(n.li,{children:"Use named numbers instead of constants, whenever possible."}),"\n",(0,i.jsx)(n.li,{children:"Use named numbers to replace numeric literals whose type or context\nis truly universal."}),"\n",(0,i.jsx)(n.li,{children:"Use constants for objects whose values cannot change after\nelaboration (United Technologies 1987)."}),"\n",(0,i.jsx)(n.li,{children:"Show relationships between symbolic values by defining them with\nstatic expressions."}),"\n",(0,i.jsx)(n.li,{children:"Use linearly independent sets of literals."}),"\n",(0,i.jsx)(n.li,{children:"Use attributes like 'First and 'Last instead of literals, wherever\npossible."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-5",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"3.14159_26535_89793                                 -- literal\nMax_Entries : constant Integer       := 400;        -- constant\nAvogadros_Number  : constant := 6.022137 * 10**23;  -- named number\nAvogadros_Number / 2                                -- static expression\nAvogadros_Number                                    -- symbolic value\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Declaring ",(0,i.jsx)(n.code,{children:"Pi"})," as a named number (assuming a ",(0,i.jsx)(n.code,{children:"with"})," clause for the\npredefined package ",(0,i.jsx)(n.code,{children:"Ada.Numerics"})," in the Ada Reference Manual [1995,\n\xa7A.5] allows it to be referenced symbolically in the assignment\nstatement below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"Area :=       Pi * Radius**2;       -- if radius is known.\n"})}),"\n",(0,i.jsx)(n.p,{children:"instead of:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"Area := 3.14159 * Radius**2;        -- Needs explanatory comment\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Also, ",(0,i.jsx)(n.code,{children:"Ada.Characters.Latin_1.Bel"})," is more expressive than\n",(0,i.jsx)(n.code,{children:"Character'Val(8#007#)"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Clarity of constant and named number declarations can be improved by\nusing other constant and named numbers. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"Bytes_Per_Page   : constant := 512;\nPages_Per_Buffer : constant := 10;\nBuffer_Size      : constant := Pages_Per_Buffer * Bytes_Per_Page;\n"})}),"\n",(0,i.jsx)(n.p,{children:"is more self-explanatory and easier to maintain than:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"Buffer_Size : constant := 5_120;   -- ten pages\n"})}),"\n",(0,i.jsx)(n.p,{children:"The following literals should be constants:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:'if New_Character  = \'$\' then  -- "constant" that may change\n...\nif Current_Column = 7 then    -- "constant" that may change\n'})}),"\n",(0,i.jsx)(n.h4,{id:"rationale-5",children:"rationale"}),"\n",(0,i.jsx)(n.p,{children:"Using identifiers instead of literals makes the purpose of expressions\nclear, reducing the need for comments. Constant declarations consisting\nof expressions of numeric literals are safer because they do not need to\nbe computed by hand. They are also more enlightening than a single\nnumeric literal because there is more opportunity for embedding\nexplanatory names. Clarity of constant declarations can be improved\nfurther by using other related constants in static expressions defining\nnew constants. This is not less efficient because static expressions of\nnamed numbers are computed at compile time."}),"\n",(0,i.jsx)(n.p,{children:"A constant has a type. A named number can only be a universal type:\nuniversal_integer or universal_real. Strong typing is enforced for\nconstants but not for named numbers or literals. Named numbers allow\ncompilers to generate more efficient code than for constants and to\nperform more complete error checking at compile time. If the literal\ncontains a large number of digits (as Pi in the example above), the use\nof an identifier reduces keystroke errors. If keystroke errors occur,\nthey are easier to locate either by inspection or at compile time."}),"\n",(0,i.jsx)(n.p,{children:"Independence of literals means that the few literals that are used do\nnot depend on one another and that any relationship between constant or\nnamed values is shown in the static expressions. Linear independence of\nliteral values gives the property that if one literal value changes, all\nof the named numbers of values dependent on that literal are\nautomatically changed."}),"\n",(0,i.jsx)(n.p,{children:"See Guideline 4.1.4 for additional guidelines on choosing a\nparameterless function versus a constant."}),"\n",(0,i.jsx)(n.h4,{id:"notes-5",children:"notes"}),"\n",(0,i.jsx)(n.p,{children:"There are situations where a literal is a better choice than a name. For\nthis to be the case, the following conditions have to be fulfilled:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The literal has to be self-explanatory in the respective context,\nsuch that replacing the literal by a symbolic value would not\nimprove the readability."}),"\n",(0,i.jsx)(n.li,{children:"The value is either unchangeable or only occurs at one single place\nin the code, such that replacing the literal by a symbolic value\nwould not improve the maintainability."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example, the literals in the following well known relationship are\nboth self-explanatory and unchangeable:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"   Fahrenheit := 32.0 + (9.0 * Celsius) / 5.0;\n"})}),"\n",(0,i.jsx)(n.p,{children:"As a second example, dividing by the literal 2 is self-explanatory in a\nbinary search algorithm context. And, since the value is also\nunchangeably related with the algorithm, it also does not matter if the\nliteral occurs at more than one place in the code (for example due to\nloop unrolling). Therefore, the use of a symbolic value like the\nfollowing would neither improve readability nor maintainability:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"   Binary_Search_Divisor : constant := 2;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"exceptions",children:"Exceptions"}),"\n",(0,i.jsx)(n.h4,{id:"guideline-6",children:"guideline"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use a name that indicates the kind of problem the exception\nrepresents."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-6",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"Invalid_Name: exception;\nStack_Overflow: exception;\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rationale-6",children:"rationale"}),"\n",(0,i.jsx)(n.p,{children:"Naming exceptions according to the kind of problem they are detecting\nenhances the readability of the code. You should name your exceptions as\nprecisely as you can so that the maintainer of the code understands why\nthe exception might be raised. A well-named exception should be\nmeaningful to the clients of the package declaring the exception."}),"\n",(0,i.jsx)(n.h3,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsx)(n.h4,{id:"guideline-7",children:"guideline"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Include a prefix like ",(0,i.jsx)(n.code,{children:"New"}),", ",(0,i.jsx)(n.code,{children:"Make"}),", or ",(0,i.jsx)(n.code,{children:"Create"})," in naming\nconstructors (in this sense, operations to create and/or initialize\nan object)."]}),"\n",(0,i.jsx)(n.li,{children:"Use names indicative of their content for child packages containing\nconstructors."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"instantiation-1",children:"instantiation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Name a child package containing constructors\n",(0,i.jsx)(n.code,{children:"\\<whatever\\>.Constructor"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-7",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"function Make_Square (Center : Cartesian_Coordinates;\n                      Side   : Positive)\n  return Square;\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rationale-7",children:"rationale"}),"\n",(0,i.jsxs)(n.p,{children:["Including a word like ",(0,i.jsx)(n.code,{children:"New"}),", ",(0,i.jsx)(n.code,{children:"Make"}),", or ",(0,i.jsx)(n.code,{children:"Create"})," in a constructor name\nmakes its purpose clear. You may want to restrict the use of the prefix\nNew to constructors that return an access value because the prefix\nsuggests the internal use of an allocator."]}),"\n",(0,i.jsx)(n.p,{children:"Putting all constructors in a child package, even when they return\naccess values, is a useful organizational principle."}),"\n",(0,i.jsx)(n.p,{children:"For information regarding the use of Ada constructors, refer to\nGuideline 9.3.3."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);