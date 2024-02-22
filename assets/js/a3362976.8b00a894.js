"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8884],{22737:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var i=a(58168),l=(a(96540),a(15680));const t={title:"10.5 Algorithms"},s=void 0,r={unversionedId:"style-guide/s10/05",id:"style-guide/s10/05",title:"10.5 Algorithms",description:"Mod and rem Operators",source:"@site/docs/style-guide/s10/05.mdx",sourceDirName:"style-guide/s10",slug:"/style-guide/s10/05",permalink:"/docs/style-guide/s10/05",draft:!1,tags:[],version:"current",frontMatter:{title:"10.5 Algorithms"},sidebar:"styleGuideSidebar",previous:{title:"10.4 Data Structures",permalink:"/docs/style-guide/s10/04"},next:{title:"10.6 Types",permalink:"/docs/style-guide/s10/06"}},o={},d=[{value:"Mod and rem Operators",id:"mod-and-rem-operators",level:3},{value:"guideline",id:"guideline",level:4},{value:"example",id:"example",level:4},{value:"rationale",id:"rationale",level:4},{value:"Short-Circuit Operators",id:"short-circuit-operators",level:3},{value:"guideline",id:"guideline-1",level:4},{value:"example",id:"example-1",level:4},{value:"rationale",id:"rationale-1",level:4},{value:"Case Statement Versus elsif",id:"case-statement-versus-elsif",level:3},{value:"guideline",id:"guideline-2",level:4},{value:"example",id:"example-2",level:4},{value:"rationale",id:"rationale-2",level:4},{value:"Checking for Constraint Errors",id:"checking-for-constraint-errors",level:3},{value:"guideline",id:"guideline-3",level:4},{value:"example",id:"example-3",level:4},{value:"rationale",id:"rationale-3",level:4},{value:"Order of Array Processing",id:"order-of-array-processing",level:3},{value:"guideline",id:"guideline-4",level:4},{value:"example",id:"example-4",level:4},{value:"rationale",id:"rationale-4",level:4},{value:"Assigning Alternatives",id:"assigning-alternatives",level:3},{value:"guideline",id:"guideline-5",level:4},{value:"example",id:"example-5",level:4},{value:"rationale",id:"rationale-5",level:4},{value:"Packed Boolean Array Shifts",id:"packed-boolean-array-shifts",level:3},{value:"guideline",id:"guideline-6",level:4},{value:"example",id:"example-6",level:4},{value:"rationale",id:"rationale-6",level:4},{value:"Subprogram Dispatching",id:"subprogram-dispatching",level:3},{value:"guideline",id:"guideline-7",level:4},{value:"example",id:"example-7",level:4},{value:"rationale",id:"rationale-7",level:4},{value:"notes",id:"notes",level:4}],u={toc:d},g="wrapper";function c(e){let{components:n,...a}=e;return(0,l.yg)(g,(0,i.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h3",{id:"mod-and-rem-operators"},"Mod and rem Operators"),(0,l.yg)("h4",{id:"guideline"},"guideline"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Use incremental schemes instead of mod and rem when measured\nperformance indicates.")),(0,l.yg)("h4",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-ada"},"   -- Using mod\n   for I in 0 .. N loop\n      Update (Arr (I mod Modulus));\n   end loop;\n\n   -- Avoiding mod\n   J := 0;\n   for I in 0 .. N loop\n      Update (Arr (J));\n      J := J + 1;\n      if J = Modulus then\n         J := 0;\n      end if;\n   end loop;\n")),(0,l.yg)("h4",{id:"rationale"},"rationale"),(0,l.yg)("p",null,"Determine the impact of using the mod and rem operators. One of the\nabove styles may be significantly more efficient than the other."),(0,l.yg)("h3",{id:"short-circuit-operators"},"Short-Circuit Operators"),(0,l.yg)("h4",{id:"guideline-1"},"guideline"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Use the short-circuit control form when measured performance\nindicates.")),(0,l.yg)("h4",{id:"example-1"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-ada"},'   -- Nested "if"\n   if Last >= Target_Length then\n      if Buffer (1 .. Target_Length) = Target then\n         ...\n      end if;\n   end if;\n\n   -- "and then"\n   if Last >= Target_Length and then Buffer (1 .. Target_Length) = Target then\n      ...\n   end if;\n')),(0,l.yg)("h4",{id:"rationale-1"},"rationale"),(0,l.yg)("p",null,"Determine the impact of using nested if statements versus using the ",(0,l.yg)("inlineCode",{parentName:"p"},"and then")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"or else")," operator. One of the above may be significantly more\nefficient than the other."),(0,l.yg)("h3",{id:"case-statement-versus-elsif"},"Case Statement Versus elsif"),(0,l.yg)("h4",{id:"guideline-2"},"guideline"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Use the case statement when measured performance indicates.")),(0,l.yg)("h4",{id:"example-2"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-ada"},'   subtype Small_Int is Integer range 1 .. 5;\n   Switch : Small_Int;\n   ...\n   -- Case statement\n   case Switch is\n      when 1 => ...\n      when 2 => ...\n      when 3 => ...\n      when 4 => ...\n      when 5 => ...\n   end case;\n\n   -- "elsif construct"\n   if Switch = 1 then\n      ...\n   elsif Switch = 2 then\n      ...\n   elsif Switch = 3 then\n      ...\n   elsif Switch = 4 then\n      ...\n   elsif Switch = 5 then\n      ...\n   end if;\n')),(0,l.yg)("h4",{id:"rationale-2"},"rationale"),(0,l.yg)("p",null,"Determine the impact of using case statements versus the elsif\nconstruct. If the case statement is implemented using a small jump\ntable, then it may be significantly more efficient than the if .. then\n.. elsif construct."),(0,l.yg)("p",null,"See also Guideline 8.4.6 for a discussion of the table-driven\nprogramming alternative."),(0,l.yg)("h3",{id:"checking-for-constraint-errors"},"Checking for Constraint Errors"),(0,l.yg)("h4",{id:"guideline-3"},"guideline"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Use hard-coded constraint checking when measured performance\nindicates.")),(0,l.yg)("h4",{id:"example-3"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-ada"},"   subtype Small_Int is Positive range Lower .. Upper;\n   Var : Small_Int;\n   ...\n\n   -- Using exception handler\n   Double:\n      begin\n         Var := 2 * Var;\n      exception\n         when Constraint_Error =>\n            ...\n      end Double;\n\n      -- Using hard-coded check\n      if Var > Upper / 2 then\n         ...\n      else\n         Var := 2 * Var;\n      end if;\n")),(0,l.yg)("h4",{id:"rationale-3"},"rationale"),(0,l.yg)("p",null,"Determine the impact of using exception handlers to detect constraint\nerrors. If the exception handling mechanism is slow, then hard-coded\nchecking may be more efficient."),(0,l.yg)("h3",{id:"order-of-array-processing"},"Order of Array Processing"),(0,l.yg)("h4",{id:"guideline-4"},"guideline"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Use column-first processing of two-dimensional arrays when measured\nperformance indicates.")),(0,l.yg)("h4",{id:"example-4"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-ada"},"    type Table_Type is array (Row_Min .. Row_Max, Col_Min .. Col_Max) of ...\n    Table : Table_Type;\n    ...\n    -- Row-order processing\n    for Row in Row_Min .. Row_Max loop\n       for Col in Col_Min .. Col_Max loop\n          -- Process Table (Row, Col)\n       end loop;\n    end loop;\n    -- Column-order processing\n    for Col in Col_Min .. Col_Max loop\n       for Row in Row_Min .. Row_Max loop\n          -- Process Table (Row, Col)\n       end loop;\n    end loop;\n")),(0,l.yg)("h4",{id:"rationale-4"},"rationale"),(0,l.yg)("p",null,"Determine the impact of processing two-dimensional arrays in row-major\norder versus column-major order. While most Ada compilers are likely to\nuse row-major order, it is not a requirement. In the presence of good\noptimization, there may be no significant difference in the above\nexamples. Using static array bounds is also likely to be significant\nhere. See Guidelines 10.4.1 and 10.4.2."),(0,l.yg)("h3",{id:"assigning-alternatives"},"Assigning Alternatives"),(0,l.yg)("h4",{id:"guideline-5"},"guideline"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Use overwriting for conditional assignment when measured performance\nindicates.")),(0,l.yg)("h4",{id:"example-5"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-ada"},'   -- Using "if .. else"\n   if Condition then\n      Var := One_Value;\n   else\n      Var := Other_Value;\n   end if;\n   -- Using overwriting\n   Var := Other_Value;\n   if Condition then\n      Var := One_Value;\n   end if;\n')),(0,l.yg)("h4",{id:"rationale-5"},"rationale"),(0,l.yg)("p",null,"Determine the impact of styles of assigning alternative values. The\nexamples illustrate two common methods of doing this; for many systems,\nthe performance difference is significant."),(0,l.yg)("h3",{id:"packed-boolean-array-shifts"},"Packed Boolean Array Shifts"),(0,l.yg)("h4",{id:"guideline-6"},"guideline"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"When measured performance indicates, perform packed Boolean array\nshift operations by using slice assignments rather than repeated\nbit-wise assignment.")),(0,l.yg)("h4",{id:"example-6"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-ada"},"   subtype Word_Range is Integer range 0 .. 15;\n   type Flag_Word is array (Word_Range) of Boolean;\n   pragma Pack (Flag_Word);\n   Word : Flag_Word;\n   ...\n\n   -- Loop to shift by one bit\n   for Index in 0 .. 14 loop\n      Word (Index) := Word (Index + 1);\n   end loop;\n   Word (15) := False;\n\n   -- Use slice assignment to shift by one bit\n   Word (0 .. 14) := Word (1 .. 15);\n   Word (15) := False;\n")),(0,l.yg)("h4",{id:"rationale-6"},"rationale"),(0,l.yg)("p",null,"Determine the impact of slice manipulation when shifting packed Boolean\narrays. For Ada 83 implementations using packed Boolean arrays, shift\noperations may be much faster when slice assignments are used as opposed\nto for loop moving one component at a time. For Ada 95 implementations,\nconsider using modular types instead (see Guideline 10.6.3)."),(0,l.yg)("h3",{id:"subprogram-dispatching"},"Subprogram Dispatching"),(0,l.yg)("h4",{id:"guideline-7"},"guideline"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Use static subprogram dispatching when measured performance\nindicates.")),(0,l.yg)("h4",{id:"example-7"},"example"),(0,l.yg)("p",null,'The term "static dispatching" in this example refers to the use of\nif/elsif sequences to explicitly determine which subprograms to call\nbased on certain conditions:'),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-ada"},'    -- (1) Dispatching where tag is not known at compile time\n    --     (See ACES V2.0 test "a9_ob_class_wide_dynamic_01")\n    -- Object_Type is a tagged type\n    -- The_Pointer designates Object_Type\'Class;\n    -- Subclass1_Pointer designates Subclass1 (derived from Object_Type)\n    -- Subclass2_Pointer designates Subclass2 (derived from Subclass1)\n    -- Subclass3_Pointer designates Subclass3 (derived from Subclass2)\n    Random_Value := Simple_Random; -- Call to a random number generator\n    if Random_Value < 1.0/3.0 then\n       The_Pointer := Subclass1_Pointer;\n    elsif Random_Value > 2.0/3.0 then\n       The_Pointer := Subclass2_Pointer;\n    else\n       The_Pointer := Subclass3_Pointer;\n    end if;\n    Process (The_Pointer.all);  -- Tag is unknown\n    -- (2) Tag is determinable at compile time (static dispatching)\n    --     (See ACES V2.0, test "a9_ob_class_wide_static_01")\n    -- Object_Type is a tagged type\n    -- The_Pointer designates Object_Type\'Class;\n    -- Subclass1_Pointer designates Subclass1 (derived from Object_Type)\n    -- Subclass2_Pointer designates Subclass2 (derived from Subclass1)\n    -- Subclass3_Pointer designates Subclass3 (derived from Subclass2)\n    Random_Value := Simple_Random; -- Call to a random number generator\n    if Random_Value < 1.0/3.0 then\n       Process (Subclass1_Pointer.all);\n    elsif Random_Value > 2.0/3.0 then\n       Process (Subclass2_Pointer.all);\n    else\n       Process (Subclass3_Pointer.all);\n    end if;\n    -- (3) No tagged types are involved (no dispatching)\n    --     (See ACES V2.0, test "ap_ob_class_wide_01")\n    -- Object_type is a discriminated type with variants; possible\n    -- discriminant values are Subclass1, Subclass2, and Subclass3\n    -- All the pointers designate values of Object_Type\n    -- Subclass1_Pointer := new Object_Type (Subclass1);\n    -- Subclass2_Pointer := new Object_Type (Subclass2);\n    -- Subclass3_Pointer := new Object_Type (Subclass3);\n    -- There is only one "Process" procedure (operating on Object_Type)\n    Random_Value := Simple_Random; -- Call to a random number generator\n    if Random_Value < 1.0/3.0 then\n       Process (Subclass1_Pointer.all);\n    elsif Random_Value > 2.0/3.0 then\n       Process (Subclass2_Pointer.all);\n    else\n       Process (Subclass3_Pointer.all);\n    end if;\n')),(0,l.yg)("h4",{id:"rationale-7"},"rationale"),(0,l.yg)("p",null,"Determine the impact of dynamic and static subprogram dispatching. The\ncompiler may generate much more efficient code for one form of\ndispatching than the other."),(0,l.yg)("h4",{id:"notes"},"notes"),(0,l.yg)("p",null,"Dynamic dispatching will almost certainly be more efficient than an\nexplicit if . . . elsif sequence. However, you should be aware of any\noptimizing decisions made by a compiler that might affect this\nsituation."))}c.isMDXComponent=!0}}]);