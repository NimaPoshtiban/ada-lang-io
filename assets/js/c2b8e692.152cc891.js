"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[9562],{58530:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=a(74848),t=a(28453);const s={title:"10.6 Types"},r=void 0,d={id:"style-guide/s10/06",title:"10.6 Types",description:"Aggregates for Type Extensions",source:"@site/docs/style-guide/s10/06.mdx",sourceDirName:"style-guide/s10",slug:"/style-guide/s10/06",permalink:"/docs/style-guide/s10/06",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"10.6 Types"},sidebar:"styleGuideSidebar",previous:{title:"10.5 Algorithms",permalink:"/docs/style-guide/s10/05"},next:{title:"10.7 Pragmas",permalink:"/docs/style-guide/s10/07"}},o={},l=[{value:"Aggregates for Type Extensions",id:"aggregates-for-type-extensions",level:3},{value:"guideline",id:"guideline",level:4},{value:"example",id:"example",level:4},{value:"rationale",id:"rationale",level:4},{value:"Protected Types",id:"protected-types",level:3},{value:"guideline",id:"guideline-1",level:4},{value:"example",id:"example-1",level:4},{value:"rationale",id:"rationale-1",level:4},{value:"Bit Operations on Modular Types",id:"bit-operations-on-modular-types",level:3},{value:"guideline",id:"guideline-2",level:4},{value:"example",id:"example-2",level:4},{value:"rationale",id:"rationale-2",level:4},{value:"Bounded Strings",id:"bounded-strings",level:3},{value:"guideline",id:"guideline-3",level:4},{value:"rationale",id:"rationale-3",level:4},{value:"String Handling Subprograms",id:"string-handling-subprograms",level:3},{value:"guideline",id:"guideline-4",level:4},{value:"rationale",id:"rationale-4",level:4},{value:"Constraint Checking",id:"constraint-checking",level:3},{value:"guideline",id:"guideline-5",level:4},{value:"example",id:"example-3",level:4},{value:"rationale",id:"rationale-5",level:4},{value:"Real-Time System Annex",id:"real-time-system-annex",level:3},{value:"guideline",id:"guideline-6",level:4},{value:"rationale",id:"rationale-6",level:4}];function c(e){const n={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"aggregates-for-type-extensions",children:"Aggregates for Type Extensions"}),"\n",(0,i.jsx)(n.h4,{id:"guideline",children:"guideline"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use only simple aggregates when measured performance indicates."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:'   type Parent is tagged\n      record\n         C1 : Float;\n         C2 : Float;\n      end record;\n\n   type Extension is new Parent with\n      record\n         C3 : Float;\n         C4 : Float;\n      end record;\n\n   Parent_Var : Parent := (C1 => Float_Var1, C2 => Float_Var2);\n   Exten_Var  : Extension;\n   ...\n   -- Simple aggregate\n   -- (See ACES V2.0, test "a9_ob_simp_aggregate_02")\n   Exten_Var := (C1 => Float_Var1, C2 => Float_Var2,\n                 C3 => Float_Var3, C4 => Float_Var4);\n   -- Extension aggregate\n   -- (See ACES V2.0, test "a9_ob_ext_aggregate_02")\n   Exten_Var := (Parent_Var with C3 => Float_Var3, C4 => Float_Var4);\n'})}),"\n",(0,i.jsx)(n.h4,{id:"rationale",children:"rationale"}),"\n",(0,i.jsx)(n.p,{children:"Determine the impact of using extension aggregates. There may be a\nsignificant performance difference between evaluation of simple\naggregates and evaluation of extension aggregates."}),"\n",(0,i.jsx)(n.h3,{id:"protected-types",children:"Protected Types"}),"\n",(0,i.jsx)(n.h4,{id:"guideline-1",children:"guideline"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"For mutual exclusion, when measured performance indicates, use\nprotected types as an alternative to tasking rendezvous."}),"\n",(0,i.jsx)(n.li,{children:"To implement an interrupt handler, when performance measurement\nindicates, use a protected procedure."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:'   -- (1) Using protected objects\n   --     (See ACES V2.0, test "a9_pt_prot_access_02")\n   protected Object is\n      function Read return Float;\n      procedure Write (Value : in Float);\n   private\n      Data : Float;\n   end Object;\n   protected body Object is\n      function Read return Float is\n      begin\n         return Data;\n      end Read;\n      procedure Write (Value : in Float) is\n      begin\n         Data := Value;\n      end Write;\n   end Object;\n   task type Modify is\n   end Modify;\n   type Mod_Bunch is array (1 .. 5) of Modify;\n   task body Modify is\n      ...\n   begin -- Modify\n      for I in 1 .. 200 loop\n         The_Value := Object.Read;\n         Object.Write (The_Value - 0.125);\n         if The_Value < -1.0E7 then\n            The_Value := 1.0;\n         end if;\n      end loop;\n   end Modify;\n   ...\n   -- Block statement to be timed\n   declare\n      Contending_Tasks : array (1 .. 5) of Modify;\n   begin\n      null;  -- 5 tasks contend for access to protected data\n   end;\n   ------------------------------------------------------------------------------\n   -- (2) Using monitor task\n   --     (See ACES V2.0, test "tk_rz_entry_access_02")\n   Task Object is\n      entry Write (Value : in     Float);\n      entry Read  (Value :    out Float);\n   end Object;\n   task body Object is\n      Data : Float;\n   begin -- Object\n      loop\n         select\n            accept Write (Value : in     Float) do\n               Data := Value;\n            end Write;\n         or\n            accept Read  (Value :    out Float) do\n               Value := Data;\n            end Read;\n         or\n            terminate;\n         end select;\n      end loop;\n   end Object;\n   -- Task type Modify declared as above\n   -- Block statement to be timed as above\n'})}),"\n",(0,i.jsx)(n.h4,{id:"rationale-1",children:"rationale"}),"\n",(0,i.jsx)(n.p,{children:"Protected objects are meant to be much faster than tasks used for the\nsame purpose (see Guideline 6.1.1). Determine the impact of using\nprotected objects to provide access safely to encapsulated data in a\nconcurrent program."}),"\n",(0,i.jsx)(n.h3,{id:"bit-operations-on-modular-types",children:"Bit Operations on Modular Types"}),"\n",(0,i.jsx)(n.h4,{id:"guideline-2",children:"guideline"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use modular types rather than packed Boolean arrays when measured\nperformance indicates."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-2",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:'   -- (1) Packed Boolean arrays\n   --     (See ACES V2.0, test "dr_ba_bool_arrays_11")\n\n   type Set is array (0 .. 15) of Boolean;\n   pragma Pack (Set);\n\n   S1     : Set;\n   S2     : Set;\n   Empty  : Set := (Set\'Range => False);\n   Result : Boolean;\n\n   ...\n\n   -- Is S1 a subset of S2?\n   Result := ((S1 and not S2) = Empty);\n\n   ---------------------------------------------------------------------\n\n   -- (2) Modular types\n   --     (See ACES V2.0, test "a9_ms_modular_oper_02")\n\n   type Set is mod 16;\n\n   S1     : Set;\n   S2     : Set;\n   Empty  : Set := 0;\n   Result : Boolean;\n\n   ...\n\n   -- Is S1 a subset of S2?\n   Result := ((S1 and not S2) = Empty);\n'})}),"\n",(0,i.jsx)(n.h4,{id:"rationale-2",children:"rationale"}),"\n",(0,i.jsx)(n.p,{children:"Determine the impact of performing bit-wise operations on modular types.\nThe performance of these operations may be significantly different from\nsimilar operations on packed Boolean arrays. See also Guideline 10.5.7."}),"\n",(0,i.jsx)(n.h3,{id:"bounded-strings",children:"Bounded Strings"}),"\n",(0,i.jsx)(n.h4,{id:"guideline-3",children:"guideline"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use the predefined bounded strings when predictable performance is\nan issue and measured performance indicates."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"rationale-3",children:"rationale"}),"\n",(0,i.jsx)(n.p,{children:"The unbounded strings may be allocated on the heap. If bounded strings\nare not allocated on the heap, then they may provide better performance.\nDetermine the impact of using the string type declared in instantiations\nof Ada.Strings.Bounded.Generic_Bounded_Length versus the type declared\nin Ada.Strings.Unbounded."}),"\n",(0,i.jsx)(n.p,{children:"The predefined Ada 95 language environment defines packages that support\nboth bounded and unbounded strings. Using bounded strings may avoid the\nunpredictable duration of delays associated with using heap storage."}),"\n",(0,i.jsx)(n.h3,{id:"string-handling-subprograms",children:"String Handling Subprograms"}),"\n",(0,i.jsx)(n.h4,{id:"guideline-4",children:"guideline"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use the procedural form of the string handling subprograms when\nmeasured performance indicates."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"rationale-4",children:"rationale"}),"\n",(0,i.jsx)(n.p,{children:"Determine the relative performance cost of functions and procedures\nhaving the same name and functionality in Ada.Strings.Fixed,\nAda.Strings.Bounded, Ada.Strings.Unbounded and the corresponding child\npackages whose names include Wide."}),"\n",(0,i.jsx)(n.p,{children:"While functional notation typically leads to clearer code, it may cause\nthe compiler to generate additional copying operations."}),"\n",(0,i.jsx)(n.h3,{id:"constraint-checking",children:"Constraint Checking"}),"\n",(0,i.jsx)(n.h4,{id:"guideline-5",children:"guideline"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use strong typing with carefully selected constraints to reduce\nrun-time constraint checking when measured performance indicates."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-3",children:"example"}),"\n",(0,i.jsx)(n.p,{children:"In this example, two potential constraint checks are eliminated. If the\nfunction Get_Response returns String, then the initialization of the\nvariable Input would require constraint checking. If the variable Last\nis type Positive, then the assignment inside the loop would require\nconstraint checking:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"   ...\n   subtype Name_Index is Positive range 1 .. 32;\n   subtype Name       is String (Name_Index);\n   ...\n   function Get_Response return Name is separate;\n   ...\nbegin\n   ...\n   Find_Last_Period:\n      declare\n         -- No Constraint Checking needed for initialization\n         Input       : constant Name       := Get_Response;\n         Last_Period :          Name_Index := 1;\n      begin  -- Find_Last_Period\n         for I in Input'Range loop\n            if Input(I) = '.' then\n               -- No Constraint Checking needed in  this `tight' loop\n               Last_Period := I;\n            end if;\n         end loop;\n         ...\n      end Find_Last_Period;\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rationale-5",children:"rationale"}),"\n",(0,i.jsx)(n.p,{children:"Because run-time constraint checking is associated with slow\nperformance, it is not intuitive that the addition of constrained\nsubtypes could actually improve performance. However, the need for\nconstraint checking appears in many places regardless of the use of\nconstrained subtypes. Even assignments to variables that use the\npredefined subtypes may need constraint checks. By consistently using\nconstrained subtypes, many of the unnecessary run-time checking can be\neliminated. Instead, the checking is usually moved to less frequently\nexecuted code involved in system input. In the example, the function\nGet_Response may need to check the length of a user-supplied string and\nraise an exception."}),"\n",(0,i.jsx)(n.p,{children:'Some compilers can do additional optimizations based on the information\nprovided by constrained subtypes. For example, although an unconstrained\narray does not have a fixed size, it has a maximum size that can be\ndetermined from the range of its index. Performance can be improved by\nlimiting this maximum size to a "reasonable" number. Refer to the\ndiscussion on unconstrained arrays found in NASA (1992).'}),"\n",(0,i.jsx)(n.h3,{id:"real-time-system-annex",children:"Real-Time System Annex"}),"\n",(0,i.jsx)(n.h4,{id:"guideline-6",children:"guideline"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"For cases where both rendezvous and protected types are inefficient,\nconsider the use of the Real-Time Systems Annex (Ada Reference\nManual 1995, Annex D)."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"rationale-6",children:"rationale"}),"\n",(0,i.jsx)(n.p,{children:"The packages Ada.Synchronous_Task_Control and\nAda.Asynchronous_Task_Control have been defined to provide an\nalternative to tasking and protected types for use in applications where\na minimal run-time is desired (Ada Reference Manual 1995, Annex D)."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);