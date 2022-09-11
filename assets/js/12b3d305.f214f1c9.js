"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[5016],{7775:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>g,toc:()=>f});var t=a(1716),i=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,n,a)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,p=(e,n)=>{for(var a in n||(n={}))l.call(n,a)&&c(e,a,n[a]);if(s)for(var a of s(n))d.call(n,a)&&c(e,a,n[a]);return e};const u={sidebar_position:2},h="Building Blocks",g={unversionedId:"getting-started/overview/building-blocks",id:"getting-started/overview/building-blocks",title:"Building Blocks",description:"Ada often uses different terminology than any of the languages I've used. The",source:"@site/docs/getting-started/overview/building-blocks.md",sourceDirName:"getting-started/overview",slug:"/getting-started/overview/building-blocks",permalink:"/docs/getting-started/overview/building-blocks",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"The Big Five Structural Elements",permalink:"/docs/getting-started/overview/five-structural-elements"},next:{title:"Debunking Ada Myths",permalink:"/docs/getting-started/overview/debunking-ada-myths"}},m={},f=[{value:"Types and Ada, The Elephant in the Room",id:"types-and-ada-the-elephant-in-the-room",level:2},{value:"Subprograms (functions and procedures)",id:"subprograms-functions-and-procedures",level:2},{value:"Packages",id:"packages",level:2},{value:"The Core Tenet of Ada",id:"the-core-tenet-of-ada",level:2}],k={toc:f};function b(e){var n,a=e,{components:i}=a,c=((e,n)=>{var a={};for(var t in e)l.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&s)for(var t of s(e))n.indexOf(t)<0&&d.call(e,t)&&(a[t]=e[t]);return a})(a,["components"]);return(0,t.kt)("wrapper",(n=p(p({},k),c),o(n,r({components:i,mdxType:"MDXLayout"}))),(0,t.kt)("h1",p({},{id:"building-blocks"}),"Building Blocks"),(0,t.kt)("p",null,'Ada often uses different terminology than any of the languages I\'ve used. The\ngoal is an overview without jargon, the only Ada-specific terms necessary\nfor this overview are "subprogram", which refers to functions and procedures, and\n"procedures" which in most C-like language would be a "function" which returns\nnothing (i.e. void).'),(0,t.kt)("h1",p({},{id:"packages-the-building-blocks-of-ada"}),"Packages, the Building Blocks of Ada"),(0,t.kt)("p",null,"Ada descends from Pascal, and yet uses many concepts already familiar to C or\nC++ programmers. As a long time C++ programmer, I find Ada leverages the concepts\nI'm used to in more formal, and often compiler-checked ways."),(0,t.kt)("h2",p({},{id:"types-and-ada-the-elephant-in-the-room"}),"Types and Ada, The Elephant in the Room"),(0,t.kt)("p",null,"Ada emphasizes types, but their consistent use despite their complexity\nmeans I can ignore them for now. Nearly every other Ada overview and tutorial\nfocuses on them, but they're an incredibly deep topic in Ada. Rather than get\nbogged down there, let's look at what Ada looks like and how programs are structured."),(0,t.kt)("h2",p({},{id:"subprograms-functions-and-procedures"}),"Subprograms (functions and procedures)"),(0,t.kt)("p",null,'Ada draws a line between functions, which return values, and procedures which\ndo not return a value. Collectively referred to as "subprograms", either of\nthese may have input (',(0,t.kt)("inlineCode",{parentName:"p"},"in"),") and output (",(0,t.kt)("inlineCode",{parentName:"p"},"out"),") parameters, with parameters\nbeing allowed to also be both an input and output (",(0,t.kt)("inlineCode",{parentName:"p"},"in out"),"). ",(0,t.kt)("inlineCode",{parentName:"p"},"in")," is\noptional for functions. Note that parameters are separated by semicolons\n(",(0,t.kt)("inlineCode",{parentName:"p"},";"),"), not by commas (",(0,t.kt)("inlineCode",{parentName:"p"},","),")."),(0,t.kt)("pre",null,(0,t.kt)("code",p({parentName:"pre"},{className:"language-ada"}),"procedure Rectangle_Area(Width : in Float; Height : in Float; Area : out Float) is\nbegin\n    Area := Width * Height;\nend Rectangle_Area;\n\nfunction Rectangle_Area(Width : Float; Height : Float) return Float is\nbegin\n    return Width * Height;\nend Rectangle_Area;\n")),(0,t.kt)("p",null,"Short functions may be written as expressions bounded by parentheses. ",(0,t.kt)("inlineCode",{parentName:"p"},"in")," is\nalso optional for functions, and parameters with the same type can be grouped."),(0,t.kt)("pre",null,(0,t.kt)("code",p({parentName:"pre"},{className:"language-ada"}),"-- Add two-dimensional vectors.\nfunction Add (L, R : Float2) return Float2 is (L.X + R.X, L.Y + R.Y);\n")),(0,t.kt)("p",null,"Multiple subprograms can exist with the same name, so the one used is determined\nby the types of the parameters and also the returned type. There are no implicit\nconversions between floating point and integer types, which maximize clarity."),(0,t.kt)("pre",null,(0,t.kt)("code",p({parentName:"pre"},{className:"language-ada"}),"function Area (Width, Height : in Float) return Float is (Width * Height);\nfunction Area (Width, Height : in Integer) return Integer is (Width * Height);\n")),(0,t.kt)("p",null,"The basic operators can be overloaded as well. Assignment (",(0,t.kt)("inlineCode",{parentName:"p"},":="),") is\nnot considered an operator, and therefore cannot be overloaded."),(0,t.kt)("pre",null,(0,t.kt)("code",p({parentName:"pre"},{className:"language-ada"}),'function "+"(L, R : Float2) return Float2 is (L.X + R.X, L.Y + R.Y);\n')),(0,t.kt)("h2",p({},{id:"packages"}),"Packages"),(0,t.kt)("p",null,'As the fundamental building block of Ada, "packages" compose Ada programs,\nnamespaces which exhibit the logical and physical interfaces in a manner\nsimilar to C++ header and source files. Most languages don\'t have a concept\nof "physical interface"--it\'s things the compiler needs to know, but\nare not part of the logical interface of the program, such as\nsize details for structs and classes.'),(0,t.kt)("p",null,'Instead of a header files providing an informal spec and an associated source\nfile being the translation unit, in Ada a package is roughly analogous to a\n"header file," and that package\'s body is the "source file", except as if\neverything in each file is in a namespace given by the file name.'),(0,t.kt)("p",null,"Top-level package specifications, appear in ",(0,t.kt)("inlineCode",{parentName:"p"},"*.ads"),' (Ada specification) files,\nwith their implementations ("bodies") in ',(0,t.kt)("inlineCode",{parentName:"p"},"*.adb")," (Ada body) files, and only\none top-level package specification or package body per file."),(0,t.kt)("p",null,"Ada packages can also be nested and support visiblity rules for sharing details\nwith child packages. Child packages are given by dotted names; ",(0,t.kt)("inlineCode",{parentName:"p"},"A.B"),"\nis a child of package ",(0,t.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,t.kt)("p",null,"Packages can also contain initialization code for the package to run at program\nstartup prior to entering the main procedure, with the ability to describe\ndependencies in package start up order. This solves a specific C++ issue in\nwhich static initialization order is not known, while also offering the ability\nto avoid deferred first-time usage costs, such as with singletons."),(0,t.kt)("p",null,'Ada uses "aspects" to denote additional properites of packages, subprograms, and\ntypes. Along with aspects, compiler pragmas allows description of initialization\ndependencies, as well as providing high level checks, such as ',(0,t.kt)("inlineCode",{parentName:"p"},"pragma Preelaborate"),"\nto ensure a package has no initialization, or the ",(0,t.kt)("inlineCode",{parentName:"p"},"with Pure")," aspect to ensure\nthat a package has no state and subprograms cannot have side effects."),(0,t.kt)("h2",p({},{id:"the-core-tenet-of-ada"}),"The Core Tenet of Ada"),(0,t.kt)("p",null,"Program text must be clear without having to read ahead, referred to as:\n",(0,t.kt)("strong",{parentName:"p"},'"Linear elaboration of declarations"'),". A clear demarcation exists between\ndeclarations of things to exist and executable statements which use those things."),(0,t.kt)("p",null,'The simplicity backing this is the ability to make any declaration, including\ntypes, variables, functions/procedures, and packages in any declaration block. This means\nthe basic rule of "declare, then use" repeats itself throughout the language,\nin ',(0,t.kt)("inlineCode",{parentName:"p"},"package/package body"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"task/task body"),", subprograms, and executable blocks of code can have a\n",(0,t.kt)("inlineCode",{parentName:"p"},"declare ... begin ... end")," block."),(0,t.kt)("pre",null,(0,t.kt)("code",p({parentName:"pre"},{className:"language-ada"}),'package P is\n    -- Not declaring Foo here is like making the function `static` in C or C++ or\n    -- putting it into an anonymous namespace.\n    procedure Foo;\nend P;\n\npackage body P is\n    -- Declarations for the body of P go here.\n\n    procedure Foo is\n        -- Declarations for Foo can go here.\n\n        -- Declare a function, only visible to Foo, to be used to implement Foo.\n        procedure Bar is\n        begin\n            null; -- "null statement" here since this function actually does nothing.\n                -- and one statement is required.\n        end Bar;\n    begin\n        -- Executable statements go here.\n        Ada.Text_IO.Put_Line("Hello, World!");\n\n        declare\n            -- Declare a package here, inside the function, to show that you can.\n            package Wat is\n                -- Declare a new type, which has the same set of possible values\n                -- as a Float, but is different than a Float.\n                type Capricorn is new Float;\n            end Wat;\n\n            -- A constant created using the package defined inside of Foo.\n            -- Temporary variables can be declared here too.\n            Temp: constant Wat.Capricorn := 0.0;\n        begin\n            -- Print "0.0".\n            -- "Image" is the Ada idiomatic equivalent of toString().\n            -- \' is "tick" and is used to access compiler-defined properties of types.\n            Ada.Text_IO.Put_Line(Wat.Capricorn\'Image(Temp));\n\n            -- Call the helper procedure defined in Foo.\n            -- Procedures and functions without parameters are called\n            -- without parentheses.\n            Bar;\n        end;\n    end Foo;\nbegin\n    -- Static initialization body of P.\nend P;\n')),(0,t.kt)("p",null,"This nesting of declarations very verbose. It does however makes it straightforward to\nrefactor out behavior while you're working on a subprogram and then you can extract\nthe newly created components into more appropriate places when you're done.\nThe inability to use statements in declarations causes me to sometimes rewrite\nmy declarations in sequential order of constant processing, and overall makes the\ndeclarations feel like a Haskell ",(0,t.kt)("inlineCode",{parentName:"p"},"where")," clause."),(0,t.kt)("pre",null,(0,t.kt)("code",p({parentName:"pre"},{className:"language-ada"}),"function Normalize(F : Float2) return Float2 is\n    L : constant F32 := Length(F);\nbegin\n    return F / L;\nend Normalize;\n")),(0,t.kt)("pre",null,(0,t.kt)("code",p({parentName:"pre"},{className:"language-ada"}),'function Evaluate\n    (Ctx : in out Context; Line : in Ada.Strings.Unbounded.Unbounded_String)\n        return Evaluate_Result is\n    use Ada.Containers;\n    use type Ada.Strings.Unbounded.Unbounded_String;\n    Whitespace     : constant Ada.Strings.Maps.Character_Set := Ada.Strings.Maps.To_Set (" ");\n    Sanitized_Line : constant Ada.Strings.Unbounded.Unbounded_String :=\n                        Ada.Strings.Unbounded.Trim (Line, Whitespace, Whitespace);\n    Words          : String_Vectors.Vector := Split (Sanitized_Line);\n    Command        : constant Ada.Strings.Unbounded.Unbounded_String := (if Words.Length > 0 then Words.First_Element else Ada.Strings.Unbounded.Null_Unbounded_String);\nbegin\n    -- ...\n')),(0,t.kt)("p",null,"Ada does not provide separate syntactical units for classes, structs and\nnamespaces. Instead, packages contain types, constants and related subprograms.",(0,t.kt)("br",{parentName:"p"}),"\n",'A lot of specialized syntax goes away due to\nthis, for example there are no "member functions" and "class functions" and\nhence no specialized syntax for things like member function pointers or class\nfunction pointers exist. Namespacing and overloading on parameters and/or the returned type determine\nthe subprogram called.'),(0,t.kt)("p",null,'What would be "member functions" in C++ have the "controlling type(s)" as the\nfirst parameter(s). "',(0,t.kt)("inlineCode",{parentName:"p"},"const"),' member functions" pass in the type as an ',(0,t.kt)("inlineCode",{parentName:"p"},"in"),' parameter,\nwhich are immutable. "non-',(0,t.kt)("inlineCode",{parentName:"p"},"const"),' member functions (methods)" pass in the type as an\n',(0,t.kt)("inlineCode",{parentName:"p"},"in out")," parameter, allowing the parameter to be modified. This mirrors\nRust's notation wherein it reflects C++-like ",(0,t.kt)("inlineCode",{parentName:"p"},"const")," behavior of member\nfunctions with ",(0,t.kt)("inlineCode",{parentName:"p"},"self"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"&self"),", and ",(0,t.kt)("inlineCode",{parentName:"p"},"&mut self"),' as a first parameter.\nThese are referred to as "primitive operations."'),(0,t.kt)("pre",null,(0,t.kt)("code",p({parentName:"pre"},{className:"language-ada"}),'-- Box "non-const function"\nprocedure Move(Box : in out AABB2; Direction : Float2) is\nbegin\n    Box.Min := Box.Min + Direction;\n    Box.Max := Box.Max + Direction;\nend Scale;\n')),(0,t.kt)("pre",null,(0,t.kt)("code",p({parentName:"pre"},{className:"language-ada"}),'-- Box "const function"\nfunction Midpoint(Box : in AABB2) return Float is\nbegin\n    return (Box.Min + Box.Max) / 2.0;\nend Scale;\n')))}b.isMDXComponent=!0}}]);