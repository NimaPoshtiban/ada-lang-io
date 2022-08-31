"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"welcome","metadata":{"permalink":"/blog/welcome","source":"@site/blog/2022-08-28-welcome.md","title":"Welcome","description":"There\'s a lot of sites online about Ada, many of which are sadly not being","date":"2022-08-28T00:00:00.000Z","formattedDate":"August 28, 2022","tags":[{"label":"welcome","permalink":"/blog/tags/welcome"},{"label":"ada","permalink":"/blog/tags/ada"}],"readingTime":1.835,"hasTruncateMarker":false,"authors":[{"name":"Paul Jarrett","title":"a software engineer","url":"https://github.com/pyjarrett","imageURL":"https://github.com/pyjarrett.png","key":"pyjarrett"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["pyjarrett"],"tags":["welcome","ada"]},"nextItem":{"title":"Summary After Four Months with Ada","permalink":"/blog/summary-after-four-months-with-ada"}},"content":"There\'s a lot of sites online about Ada, many of which are sadly not being\\nupdated anymore. An open source site, with multiple people with access\\npermissions will be more likely to be maintained in the future.\\n\\nI\'d thought about there needing to be a more centralized community site for a\\nwhile, but it was [Maxim\'s reddit post](https://www.reddit.com/r/ada/comments/wx9zp1/yet_another_ada_web_site/)\\nthat really motivated me to make this for everyone.\\n\\nThis is a new website to be handed off to the Ada open source community\\nas their own resource to build upon. I\'ve created a\\n[GitHub organization and a repository for this](https://github.com/ada-lang-io/ada-lang-io),\\nand added those who expressed interest as collaborators.\\n[My old site has been archived](https://github.com/pyjarrett/programming-with-ada),\\nwith the content slowly being moved over to here. As for \\"Who will own this\\ndomain in the future?\\", my response would be that I would expect to transfer\\nit to one of the existing Ada organizations.\\n\\n[Docusaurus](https://docusaurus.io/) was picked for this site since it allows both\\nMarkdown as well as React content. The ubiquity of markdown means that almost anyone\\ncan write and submit content, but the React side means there\'s capability for those\\nwho want to add more sophisticated content. Docusaurus\'s rich set of capabilities\\nalso includes important elements such as different page languages, for the\\nmultilingual and worldwide distributed Ada community.\\n\\nIt\'s important that this site be a source of positivity, and that the focus be\\non Daniele Procida\'s [four kinds of technical documentation](https://www.writethedocs.oorg/videos/eu/2017/the-four-kinds-of-documentation-and-why-you-need-to-understand-what-they-are-daniele-procida/).\\n\\n1. Learning-oriented tutorials\\n2. Goal-oriented how-to guides\\n3. Understanding-oriented discussions\\n4. Information-oriented reference material\\n\\nIn my own journey learning Ada, these matched up relatively in this way:\\n\\n1. learn.adacore.com, John Barne\'s \\"Ada 2012\\" book\\n2. Rosetta code, Ada wikibook, reading source code of other projects\\n3. Ada 2012 Rationale\\n4. Ada Annotated Reference Manual\\n\\nAda is not that difficult of a language to learn, though the spread out nature\\nof its resources makes it more challenging.\\n\\nMy hope is that this place fulfill\'s Maxim\'s vision:\\n\\n> an \\"eternal\\" site driven by the community, that will outlive its creators.\\n>\\n> - Where novice adepts could find out how to start using or learn.\\n> - Where old users could share their knowledge, promote thier projects.\\n\\ncheers,\\n\\nPJ"},{"id":"summary-after-four-months-with-ada","metadata":{"permalink":"/blog/summary-after-four-months-with-ada","source":"@site/blog/2021-08-28-summary-after-four-months-with-ada.md","title":"Summary After Four Months with Ada","description":"For the last four months I\'ve been learning and writing Ada 2012.","date":"2021-08-28T00:00:00.000Z","formattedDate":"August 28, 2021","tags":[{"label":"ada","permalink":"/blog/tags/ada"},{"label":"learning","permalink":"/blog/tags/learning"}],"readingTime":20.055,"hasTruncateMarker":true,"authors":[{"name":"Paul Jarrett","title":"a software engineer","url":"https://github.com/pyjarrett","imageURL":"https://github.com/pyjarrett.png","key":"pyjarrett"}],"frontMatter":{"slug":"summary-after-four-months-with-ada","title":"Summary After Four Months with Ada","authors":["pyjarrett"],"tags":["ada","learning"]},"prevItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"For the last four months I\'ve been learning and writing Ada 2012.\\nI wanted to share my experiences with the language for those who aren\'t familiar with it.\\n\\n\x3c!--truncate--\x3e\\n\\nI\'m neither endorsing or denouncing Ada.\\nFor those unfamiliar with Ada terms, I\'ll using the vernacular common to C family languages.\\nThis will make Ada programmers cringe, but will be much more clear to the general reader.\\n\\nWhen I refer to \\"Ada\\" here, I\'m referring to Ada 2012 and the SPARK 2014 language,\\nwhich is a subset of Ada 2012 used for formal verification.\\n\\n## Why?\\n\\nAda\'s an obscure language.\\nIt\'s been around for decades and strong opinions about it existed in the past, but overall it seems forgotten outside its niche.\\nWhen I mention I made things in it, I\'ve gotten baffled responses of \\"That language is still around?\\"\\nAnother comment was, \\"I\'ve never heard of anyone else ever working, or having working in Ada.\\"\\n\\nI\'ve written code in a variety of languages, but Ada by far is the most bizarre and strangely familiar one at the same time.\\nMy intent was to mess around with it for a few weekends and move on, but it wasn\'t the \\"dead language\\" I expected.\\nThere\'s been a lot of modernization in the last couple of years, which makes it a surprisingly modern language to work in.\\n\\n## Resources\\n\\nThese are listed in order of what I used:\\n\\n- [learn.adacore.com](https://learn.adacore.com/)\\n\\n  - A good tutorial site. It\'s enough to get you started.\\n\\n- [John Barnes \\"Programming in Ada 2012\\"](https://www.amazon.com/Programming-Ada-2012-John-Barnes/dp/110742481X)\\n\\n  - Barnes works on several major Ada references, and this book walks through the language.\\n    At over 700 pages, it took me abotu a month to get through.\\n\\n  - This seems to be a common way Ada programmers get onboarded, and Ada programmers\\n    stay updated.\\n\\n- [Ada Language Wikibook](https://en.m.wikibooks.org/wiki/Ada_Programming)\\n\\n  - This is exceptionally good and very complete.\\n\\n- [Awesome-Ada](https://github.com/ohenley/awesome-ada)\\n\\n  - A site with way more resources than I list here.\\n\\n- [Ada Reference Manual](http://ada-auth.org/standards/rm12_w_tc1/RM-Final.pdf)\\n\\n  - Authoritative reference about how Ada **should** work.\\n\\n- [Building High Integrity Applications with SPARK](https://www.amazon.com/Building-High-Integrity-Applications-SPARK/dp/1107656842/ref=sr_1_2?dchild=1&keywords=Building+High+Integrity+Applications+with+SPARK&qid=1630108759&s=books&sr=1-2)\\n\\n  - It\'s ok, the first third of the book is an Ada crash couse before it gets into SPARK.\\n\\n## Projects\\n\\nDuring this timeframe I made a few projects:\\n\\n- [Septum](https://github.com/pyjarrett/septum) - context-based source code search\\n- [dir_iterators](https://github.com/pyjarrett/dir_iterators) - library similar to the incredible [walkdir](https://github.com/BurntSushi/walkdir)\\n- [project_indicators](https://github.com/pyjarrett/progress_indicators) - library for spinners and progress bars\\n- [trendy_terminal](https://github.com/pyjarrett/trendy_terminal) - library for cross-platform terminal setup\\n- [trendy_test](https://github.com/pyjarrett/trendy_test) - library for simple unit testing\\n- [Ada Ray Tracer](https://github.com/pyjarrett/ada-ray-tracer) - a port of [Ray Tracing in One Weekend](https://raytracing.github.io/books/RayTracingInOneWeekend.html))\\n- [dirs_to_graphviz](https://github.com/pyjarrett/dirs_to_graphviz) : Make graphviz files from directory trees\\n\\n## Ecosystem\\n\\n### Alire\\n\\n[Alire](https://alire.ada.dev/) simplifies Ada development significantly, by simplifying project generation,\\nbuilding, running, and dependency management.\\n\\nIt borrows **heavily** from Cargo, and if \\"good artists borrow, great artists steal,\\" then Ada is on par with Michaelangelo.\\nIn its quest for modernizing, many concepts of Rust\'s cargo are being built into this tool.\\n\\n```bash\\nalr build\\n\\nalr run\\n\\nalr edit\\n```\\n\\nBefore Alire, I had a a lot of confusion about \\"How do I use **\\\\_\\\\_** project as a dependency?\\" and with Alire it\'s one command line and go.\\n\\n```bash\\n# Add dir_iterators library\\nalr with dir_iterators\\n```\\n\\nThis tool only went to 1.0 since I\'ve been working with Ada and it simplifies development considerably.\\nAlire interfaces with the pre-existing tool [grpbuild](https://docs.adacore.com/gprbuild-docs/html/gprbuild_ug.html), which is a common interface into the GNAT ecosystem and tools.\\nSince it wraps it, you can do additional configuration past the initial setup, and it works well with GNAT Studio, one of the major editors.\\nYou can also set the config to run any other editor command with environment variables setup, such as Visual Studio Code:\\n\\n```bash\\nalr config --set editor.cmd \\"code .\\"\\n```\\n\\nToolchains are integrated into Alire as of [the 1.1 release candidate](https://github.com/alire-project/alire/releases/tag/v1.1.0-rc1).\\nso it\'s becoming a one-stop shop for what you need.\\n\\nHowever, there\'s a few hoops to jump through to get a crate into the manager.\\nFor now, every package and version update requires manual approval.\\nThis is supposed to prevent name squatting and ensures existing libraries can get their appropriate names.\\nIt still can be frustrating waiting for approval, though things usually get approved within a day or so.\\nYou can use local versions as a dependency, which helps when developing libraries,\\nand keeps you moving if you\'re waiting that day for approval.\\n\\nOverall, Alire is a fantastic tool which makes working with Ada easy and I wouldn\'t recommend learning Ada without it.\\n\\n### GNAT\\n\\nThe major Ada ecosystem is [GNAT](https://gcc.gnu.org/wiki/GNAT). Yes, there supposedly are\\ncommercially supported compilers and [AdaCore offers paid support](https://www.adacore.com/gnatpro/comparison),\\nbut the Free Software Foundation (FSF) offers a Ada front-end to GCC. This is usually referred to as \\"FSF GNAT\\".\\n\\nCan I use Ada for free? Yes, if you can use GCC for your project, you can use Ada.\\nYou can grab the FSF GNAT toolchain with Alire 1.1 and `alr toolchain --select gnat_native`.\\n\\nThe entire ecosystem is designed around running tools from the command line, which allows editors\\nand CI to use the same actions for behaviors. For example, GNAT Studio just wraps many of the GNAT\\ntools and it shows you the command line for the actions you want to use. This acts as training wheels\\nif you want to get started quickly and then transition to using another editor,\\nespecially a terminal one like Emacs or Vim.\\n\\nThere\'s a lot of parts to GNAT, which is a super deep dive I\'m not interested in doing here.\\nTo give an idea, there\'s a formatter (`gnatpp`) and a document generator (`gnatdoc`).\\n\\n- [GNAT Reference Manual](https://gcc.gnu.org/onlinedocs/gcc-11.2.0/gnat_rm/)\\n\\n- [GNAT User\'s Guide for Native Platforms](https://gcc.gnu.org/onlinedocs/gcc-11.2.0/gnat_ugn/)\\n\\nThere is also an [LLVM frontend for Ada](https://github.com/AdaCore/gnat-llvm) in progress.\\nIt\'d be exciting to see this integrated as a toolchain you can download with Alire.\\n\\n### Editors\\n\\nIf you believe reddit, editor usage is split roughly in thirds between GNAT Studio and Visual Studio Code,\\nwith Emacs/Vim balanced in the remaining third.\\n\\nThe big editor is [GNAT Studio](https://github.com/AdaCore/gps),\\nwhich used to be known as \\"GPS\\", and supports Ada, C and C++. It comes bundled with GNAT Community\\nEdition, but you can build and run it separately as well. There\'s some quirky behavior,\\nlike `tab` indenting to where it thinks the indent should be and not actually inserting a tab,\\nand some obscure keyboard shortcuts, but otherwise is a mature IDE experience. You can make and\\nexport your own keybindings, [which I\'ve done for Visual Studio](https://github.com/pyjarrett/gps_keybindings)\\nwhich I should probably contribute back at some point.\\n\\nThere\'s also support for [Visual Studio code](https://www.reddit.com/r/ada/comments/p29o7r/tutorial_using_ada_in_vs_code/),\\nwhich relies on the [Ada Language Server](https://github.com/AdaCore/ada_language_server).\\n\\nA coordinated set of [Vim plugins](https://github.com/thindil/vim-ada) is available for those who want to go that route.\\n\\nI had been primarily using GNAT Studio and then moved over to Visual Studio code, you can get\\na good editing experience with either one of these.\\n\\nI\'m not an Emacs user, so I\'m not familiar with how folks work in that environment.\\n\\n#### Cross-Platform Behavior\\n\\nAlire hooks into [GPRbuild\'s](https://docs.adacore.com/gprbuild-docs/html/gprbuild_ug.html) external\\nvariable system for cross-platform behavior.\\nIn general, I haven\'t had to mess with GPR configurations too much since Alire wraps it well and provides good defaults on project creation.\\n\\nThis is the Alire side, describing the external values to set for gprbuild to do the \\"right thing.\\"\\n\\nJust like in cargo, we have a `.toml` describing the build.\\n\\n```toml\\n# alire.toml\\n# Platform selection by Alire on download.\\n[gpr-set-externals.\'case(os)\']\\nwindows = { Trendy_Terminal_Platform = \\"windows\\" }\\nlinux = { Trendy_Terminal_Platform = \\"linux\\" }\\nmacos = { Trendy_Terminal_Platform = \\"macos\\" }\\n```\\n\\nOn the GPR side, we select the source we want to use, since Ada doesn\'t have a common preprocessor.\\nGNAT has a preprocessor but it seems frowned upon to use it.\\n\\n```ada\\n-- my_project.gpr\\ntype Platform_Type is (\\"windows\\", \\"linux\\", \\"macos\\");\\nPlatform : Platform_Type := external (\\"Trendy_Terminal_Platform\\");\\ncase Platform is\\n    when \\"windows\\" => Trendy_Terminal_Sources := Trendy_Terminal_Sources & \\"src/windows\\";\\n    when \\"linux\\"   => Trendy_Terminal_Sources := Trendy_Terminal_Sources & \\"src/linux\\";\\n    when \\"macos\\"   => Trendy_Terminal_Sources := Trendy_Terminal_Sources & \\"src/mac\\";\\nend case;\\n```\\n\\n## Community\\n\\nThe online Ada community is exceptionally small.\\nOnline counts in [r/ada](https://www.reddit.com/r/ada/) hover in the mid twenties, compared to Rust\'s ~900, and seem to peak in the 50s.\\n\\nDespite the size, the community is extremely knowledgeable and\\nthere\'s a lot of folks with decades of Ada experience chomping at the bit to answer questions.\\nThis means Reddit and Stack Overflow answers regularly include the applicable language rule\'s section and paragraph from the Ada Reference Manual.\\n\\nAn interesting aside is that if Github locations are to be believed, the Ada community is predominantly European.\\nThis correlates with what I\'ve seen, since I\'m in the US Eastern time zone, people online tend to be very active in the morning.\\n\\n## AdaCore and Ada Modernization\\n\\n[AdaCore](https://www.adacore.com/) didn\'t invent Ada, so they\'re not a direct comparison to Mozilla with Rust,\\nbut they did help develop GNAT originally, and continue to contribute back.\\nI\'m sure there\'s other companies promoting Ada, but they seem to be the most visible.\\n\\nIt looks like there was a huge burst of activity after the release of Ada 2012,\\nincluding a lot of [quite-detailed YouTube videos](https://www.youtube.com/playlist?list=PLkoa8uxigENkneyEEeDWVPgpMhPc9IJ7o)\\nand marketing.\\n\\nThe second wave promoting Ada now seems to be getting better traction and community involvement.\\nAdaCore [open-sourced a lot of libraries](https://github.com/AdaCore) and have been the primary group I\'ve seen promoting the language.\\nThe movement they\'re pushing seems to be the right direction: building an LLVM front-end to the language, a language server,\\nopen-sourcing a lot of libraries, creating learning resources and improving IDE support.\\n\\nThe modernization push is intense.\\nThere is a marked improvement working in the language even in the short time span I\'ve seen.\\nIt\'s gone from \\"a quirky and sometimes clunky car\\" to feeling \\"modern.\\"\\n\\n## A Free-Function Focused C++, or a Strongly Typed C\\n\\nAda focuses on creating packages of code which contain types and functions.\\nThere\'s no preprocessor, so instead of `#include`, you `with` packages which contain what you need.\\n\\n```ada\\nwith RT.Vecs; -- depend on another package, RT.Vecs\\n\\npackage RT.Rays is\\n    use RT.Vecs;  -- use the names inside RT.Vecs\\n\\n    type Ray is record\\n        Origin    : Point3;\\n        Direction : Vec3;\\n    end record;\\n\\n    function Point_At(R : Ray; T: F32) return Point3;\\n\\nend RT.Rays;\\n```\\n\\nPackages are namespaces for functions and types, unlike other languages where types can \\"contain\\" functions and types.\\nFunction overloading acts as a key design element, made clear by the lack of implicit casts.\\n\\n```ada\\n-- Idiomatic versions of \\"ToString\\"\\nfunction Image(S : Some_Type) return String;\\nfunction Image(A : Another_Type) return String;\\n```\\n\\nEverything in a package is related, there\'s no syntactical split between \\"free function\\", \\"class function\\", or \\"member function\\" (method).\\n\\n```ada\\npackage RT.Vecs is\\n    type Vec3 is record\\n        X, Y, Z : F32 := 0.0;\\n    end record;\\n\\n    function Length (V : Vec3) return F32;\\n\\n    -- Is this a free function, a class function or a member function (method)?\\n    -- It doesn\'t really matter, because it\'s declared the same.\\n    function Dot (A, B : Vec3) return F32;\\nend RT.Vecs\\n```\\n\\nFunctions get declared similarly, with parameter type and ordering describing the difference between C++\'s \\"free functions\\" vs instance functions.\\nA class type as a leading parameter determines if one would be considered a member function (\\"methods\\").\\nThere\'s a concept called \\"primitive operations\\" which describe bringing in operations of a parent type (even primitive, like Integer) where this matters.\\n\\n```ada\\npackage SP.Filters is\\n    -- An empty \\"abstract class\\"\\n    type Filter is abstract tagged null record;\\n\\n    -- A \\"pure virtual method\\"\\n    function Matches_Line (F : Filter; Str : String) return Boolean is abstract;\\n\\n    -- Accepts any derived class of Filter\\n    function Matches_File (F : Filter\'Class; Lines : String_Vectors.Vector) return Boolean;\\n\\n    -- A \\"subclass\\"\\n    type Case_Sensitive_Match_Filter is new Filter with record\\n        Text : Unbounded_String;\\n    end record;\\n\\n    -- An overridden method of a base class.\\n    overriding function Matches_Line (F : Case_Sensitive_Match_Filter; Str : String) return Boolean;\\n\\n    -- \\"Free-function\\" which is just part of the package.\\n    function Is_Quoted (S : String) return Boolean;\\nend SP.Filters\\n```\\n\\nPackages are split between a \\"specification\\" (.ads file) and a \\"body\\" (.adb file), akin to the \\"header\\" and \\"source\\"\\nfiles you encounter in C/C++, though this distinction is understood at the language level.\\nSince physical design matters in ways similar to C and C++, some physical design techniques in [Lakos\' Large-Scale C++ Software Design](https://www.amazon.com/Large-Scale-Software-Design-John-Lakos/dp/0201633620)\\nbook actually work.\\n\\n```ada\\npackage body RT.Rays is\\n    -- Use all the operators of Vec3\\n    use all type RT.Vecs.Vec3;\\n\\n    function Point_At(R : Ray; T: F32) return Point3 is (R.Origin + T * R.Direction);\\nend RT.Rays;\\n```\\n\\nPackages can contain startup code executed by the \\"environment task\\" prior to entering the main procedure for initialization.\\nUnlike C++, there are language pragmas you can use to control order of initialization of these elements.\\n\\n```ada\\npackage body RT.Debug is\\nbegin\\n    Ada.Text_IO.Put_Line(\\"Executed before the program enters the main function!\\");\\nend RT.Debug;\\n```\\n\\n## SPARK\\n\\nSPARK is a subset of Ada I glazed over earlier.\\nIt\'s a language for formal verification which you can intermingle with Ada code.\\nThink of it as sort of like `extern C` in C++, or `unsafe` in Rust, except it marks code as undergoing verification.\\nSince it\'s a subset of Ada, in addition to verification, you get all the rest of the Ada tooling here, like Alire.\\nYes, there are SPARK formally verified crates in Alire, such as a [formally verified implementation of NaCl](https://alire.ada.dev/crates/sparknacl)\\n\\n## Focus on Intent\\n\\n### Parameter Modes\\n\\nAda source focuses on describing intent and modeling semantics.\\n\\nI misled you earlier for expediency.\\nWhat most C-family languages call \\"functions\\", Ada calls \\"subprograms\\".\\nAda distinguishes between those which return a value and are truly \\"functions\\" and those which do not return a value, and are \\"procedures.\\"\\n\\nFor example, subprogram parameters can be either `in`, `out`, or both.\\n`in` parameters are readonly, and while you can force passing by reference via specifics in the language, you often just ignore how this happens.\\nParameters are implicitly `in`, so you can omit that if you want.\\nThis is common in SPARK code because `out` parameters are forbidden.\\n\\n```ada\\n-- Receives and modifies a parameter.\\nprocedure Clear_Filters (Srch : in out Search);\\n\\n-- Like a \\"const\\" member function in C++, which can\'t modify its argument\\n-- Could also be declared like this:\\n-- function Num_Files (Srch : Search) return Natural;\\nfunction Num_Files (Srch : in Search) return Natural;\\n```\\n\\n### Derived Types\\n\\nDescribing semantics goes all the way into primitive types, and the rules are consistent between primitive and user-defined types.\\nCreating lightweight types with domain-specific meaning, prevents mishandling of semantics on primitive types due to no implicit casting.\\nInterfaces rarely use `Integer` or `Float` directly, instead you\'ll find semantic versions (\\"derived types\\") created such as \\"Meters\\" or \\"Kilometers\\".\\n\\n```ada\\ntype Seconds is new Natural;\\ntype Milliseconds is new Natural;\\n\\nS : Seconds := 10;\\nM : Milliseconds := 50;\\n\\nM := S;                       -- Compile error!\\nM := Milliseconds (1000 * S); -- Allowed because I told compiler it\'s ok\\n```\\n\\nFunction overloading checks parameters as well as return types, so creating functions and transforms of types is straightforward.\\n\\n```ada\\nprocedure Update (S : Seconds);\\nprocedure Update (M : Milliseconds);\\n\\nfunction Delta_Time return Seconds;\\nfunction Delta_Time return Milliseconds;\\n```\\n\\nCompile and runtime checks provide bounds-checking and numerical types can have their bounds constrained to \\"known good\\" values.\\n\\n```ada\\n-- Let\'s write this with our own defined range, only allowing less than 60 seconds.\\ntype Seconds is new Integer range 0 .. 59;\\n```\\n\\nYou can also access the ranges of types with the `\'First` and `\'Last` attributes (read as \\"tick first\\" and \\"tick last\\").\\n\\n```ada\\npragma Assert(Seconds\'First = 0);\\npragma Assert(Seconds\'Last = 59);\\n```\\n\\n### Enumeration Types\\n\\nEnumeration types have first class support, with many automatically generated attributes.\\n`\'First` and `\'Last` get the bounds of the values and `\'Pred` (predecessor) and `\'Succ` move between individual values.\\nIteration over all values and conversions to and from strings and integers gets provided for free.\\nTogether, these attributes and iteration capability allow writing of generic code which operates on discrete types like integers, or enumerations.\\n\\n```ada\\nwith Ada.Unchecked_Conversion;\\n\\ntype Filter_Action is (Keep, Exclude);\\n\\n-- Specify internal values for the enumeration (optional).\\nfor Filter_Action use (\\n    Keep => 2,\\n    Exclude => 3\\n);\\n\\n-- Allow conversion to get the values out\\nfunction Repr is new Ada.Unchecked_Conversion(Filter_Action, Integer);\\n\\nprocedure Print_Actions is\\nbegin\\n    -- Which order are they in?\\n    pragma Assert(Keep = Filter_Action\'Val(0));\\n    pragma Assert(Exclude = Filter_Action\'Val(1));\\n    pragma Assert(0 = Filter_Action\'Pos(Keep));\\n    pragma Assert(1 = Filter_Action\'Pos(Exclude));\\n\\n    -- Comparison operators\\n    pragma Assert(Keep /= Exclude);  -- /= is Ada\'s not equal (i.e. !=)\\n    pragma Assert(Keep < Exclude);\\n\\n    pragma Assert(Filter_Action\'First = Keep);\\n    pragma Assert(Filter_Action\'Last = Exclude);\\n    pragma Assert(Filter_Action\'Succ(Keep) = Exclude);\\n    pragma Assert(Filter_Action\'Pred(Exclude) = Keep);\\n\\n    -- Parsing from string\\n    pragma Assert(Filter_Action\'Value(\\"KEEP\\") = Keep);\\n    pragma Assert(Filter_Action\'Value(\\"Exclude\\") = Exclude);\\n\\n    -- Getting underlying representation\\n    pragma Assert(2 = Repr(Keep));\\n    pragma Assert(3 = Repr(Exclude));\\n\\n    for Action in Filter_Action loop\\n        Ada.Text_IO.Put_Line(Action\'Image);  -- Prints KEEP and then EXCLUDE\\n    end loop;\\nend Print_Actions;\\n```\\n\\nSince arrays operate using a discrete type as an index, enumerations can be used as the type to index into an array.\\n\\n```ada\\ntype Test_Status is (Passed, Failed, Skipped);\\ntype Test_Report is array (Test_Status) of Natural;\\n\\nprocedure Foo is\\n    Report : Test_Report;\\nbegin\\n    -- ...\\n\\n    -- Increment number of passed tests.\\n    Report(Passed) := Report(Passed) + 1;\\n\\n    -- ...\\n```\\n\\n### Pre- and Post-Conditions\\n\\nAda 2012 adds built-in support for pre and post conditions, through the use of \\"aspects.\\"\\nThis is a \\"killer feature\\" of Ada 2012, on top of all of the other type checking and safety checking.\\nThough used in SPARK analyses, you can also write them in plain Ada 2012 code and as part of specification of the function.\\nClients can see it as part of the interface and the compiler inserts these runtime checks if enabled.\\nA lot of languages have an assertion mechanism which often effectively gets used for these checks, but it\'s nice to have a client-visible built-in way of doing this\\nI\'ve also found that adding pre and post condition checks during debugging to be a very effective tool.\\n\\n```ada\\nfunction Merge (A, B : Context_Match) return Context_Match with\\n    Pre  => Is_Valid (A) and then Is_Valid (B),\\n    Post => Is_Valid (Merge\'Result);\\n```\\n\\nTypes which expose no private state can also have type invariants which are checked prior to usage as function arguments and after assignments.\\n\\n```ada\\ntype Spinner is record\\n    Ticks_Per_Move : Positive;\\n    Ticks          : Natural;\\n    State          : Spinner_State;\\n    Style          : Spinner_Style;\\nend record with\\n    Type_Invariant => Ticks < Ticks_Per_Move;\\n```\\n\\n## Concurrency\\n\\n### Protected Objects\\n\\nProtected objects coordinate concurrent access to shared state.\\nThe control can also include arbitrarily complex conditionals as well, such as not allowing any writers when readers exist, or blocking any more readers when a writer is waiting.\\n\\n```ada\\nprotected body Concurrent_Context_Results is\\n    -- Calling Get_Results will wait for Pending_Results to equal 0.\\n    entry Get_Results (Out_Results : out SP.Contexts.Context_Vectors.Vector)\\n        when Pending_Results = 0 is\\n    begin\\n        Out_Results := Results;\\n    end Get_Results;\\n\\n    procedure Wait_For (Num_Results : Natural) is\\n    begin\\n        Pending_Results := Num_Results;\\n    end Wait_For;\\n\\n    procedure Add_Result (More : SP.Contexts.Context_Vectors.Vector) is\\n    begin\\n        Results.Append (More);\\n        Pending_Results := Pending_Results - 1;\\n    end Add_Result;\\nend Concurrent_Context_Results;\\n```\\n\\n### Tasks\\n\\nTasks provide concurrent execution.\\nAdditionally, they have special procedures called \\"entries\\" which can be \\"accepted\\" by a related task during its flow of execution to synchronize (rendezvous) with other tasks and share data at these points.\\n\\nTasks run concurrently in the block in which they\'re declared, and the block will not exit until the task finishes or terminates, unless it is allocated on the heap.\\n\\nBoth single instance and instantiable versions of protected objects and tasks can be created.\\n\\n```ada\\ntask type File_Loader_Task is\\n    entry Wake;\\nend File_Loader_Task;\\n\\ntask body File_Loader_Task is\\n    Elem : Ada.Strings.Unbounded.Unbounded_String;\\nbegin\\n    -- Concurrent execution starts here when the task is created.\\n\\n    -- Don\'t proceed until the \\"Wake\\" Entry has been called.\\n    select\\n        accept Wake;\\n    or\\n        -- If Wake was never received the program can terminate\\n        -- this task if needed to exit the block.\\n        terminate;\\n    end select;\\n\\n    loop\\n        select\\n            -- Blocking dequeue\\n            File_Queue.Dequeue (Elem);\\n        or\\n            -- Timeout: we waited 1 second, and nothing else to process\\n            -- was on the queue, so quit this task.\\n            delay 1.0;\\n            exit;\\n        end select;\\n\\n        if Is_Text (Elem) then\\n            Cache_File (File_Cache, Elem);\\n        end if;\\n\\n        -- \\"Progress\\" is an (unshown) declared variable in the same scope\\n        -- as the task, so the task has access to it.\\n        Progress.Finish_Work (1);\\n    end loop;\\nend File_Loader_Task;\\n```\\n\\n## Generics\\n\\nAda generics are similar to ML signatures, and may contain types, functions and even other packages as parameters.\\nGeneric packages or functions must be explicitly instantiated for use.\\nThis eliminates the debate of angled brackes (`<>`) versus square brackets for generics ([]), but leads to additional names being created.\\nThis makes their usage and their cost explicit, at the expense of verboseness.\\n\\n```ada\\n-- Instantiate a generic package which contains an\\n-- Ada equivalent to std::vector<std::string>\\npackage String_Vectors is new Ada.Containers.Vectors(\\n        Index_Type   => Positive,\\n        Element_Type => Ada.Strings.Unbounded.Unbounded_String,\\n        \\"=\\"          => Ada.Strings.Unbounded.\\"=\\");\\n\\n-- Since String_Vectors is a package, Vector is the actual vector type.\\n-- There are more related types in the instantiated package.\\nfunction Shell_Split (S : Ada.Strings.Unbounded.Unbounded_String) return String_Vectors.Vector;\\n```\\n\\n## Low Level Control\\n\\nAccessing C functions and compiler intrinsics is straightforward.\\nYou create a declaration of the subprogram and then describe where it comes from using aspects or the `Import` pragma.\\n\\n```ada\\nwith Interfaces.C;\\n\\ntype FD is new Interfaces.C.int;\\nfunction isatty (File_Descriptor : FD) return BOOL\\n    with Import     => True,\\n            Convention => C;\\n\\n-- Bring in the stdout file pointer from C\\ntype FILE_Ptr is new System.Address;\\nstdout : aliased FILE_Ptr;\\npragma Import (C, stdout, \\"stdout\\");\\n```\\n\\nSince the usage is the same as with an Ada function, imported functions can be replaced with actual Ada code if needed.\\nInline assembler is also available, but due to the lack of a preprocessor, the build system (gpr) is leveraged to choose the appropriate definition (body) file to compile.\\n\\n```ada\\nfunction File_Line return Natural;\\npragma Import (Intrinsic, File_Line, \\"__builtin_LINE\\");\\n```\\n\\nRepresentation clauses allow you to match struct layout or binary formats such as for files.\\n\\n```ada\\ntype Bitmap_File_Header is record\\n    Identifier      : Integer_16;\\n    File_Size_Bytes : Integer_32;\\n    Reserved        : Integer_16 := 0;\\n    Reserved2       : Integer_16 := 0;\\n    Offset          : Integer_32;\\nend record with\\n    Size => Byte * 14;\\n\\nfor Bitmap_File_Header use record\\n    Identifier      at  0 range 0 .. 15;\\n    File_Size_Bytes at  2 range 0 .. 31;\\n    Reserved        at  6 range 0 .. 15;\\n    Reserved2       at  8 range 0 .. 15;\\n    Offset          at 10 range 0 .. 31;\\nend record;\\n```\\n\\n## Vocabulary\\n\\nAda suffers from a lack of familiarity for many programmers due to being a Pascal family language and also its peculiar, but very specific vocabulary.\\nHowever, the usage of keywords over punctuation helps ease many problems of dealing with an unfamiliar language.\\nWhile this helps with googling and a lot of terms appear in code, many are specific to, or have Ada-specific definitions.\\nExamples are \\"accesses\\" (sort of like pointers), \\"accesibility\\" (similar to a scope for borrowing),\\n\\"tagged types\\" (classes), \\"derived types\\" (unrelated to OOP), and \\"subprogram\\".\\n\\n## Verboseness\\n\\nThe language has a mind of its own as well.\\nAs [one online quote says](https://people.cs.kuleuven.be/~dirk.craeynest/quotes.html).\\n\\n> When I find myself fighting the [Ada] language, it usually means that I need to revisit my design.\\n\\nI\'ve found this to be true overall.\\nAda makes some easy things verbose and some verbose things easy.\\nWhen things go from \\"verbose\\" to \\"writing like a Charles Dickens novels\\", that\'s when I rethink my approach to the problem.\\nThere\'s usually a significantly better and shorted way to accomplish the task.\\n\\n## Was it worth it?\\n\\nIf I were never to write Ada again, I still learned a lot about program correctness.\\nCorrectness isn\'t usually a fun language feature to talk about and no one likes to admit they write bugs.\\nAda excels at modeling your program in the language while automating a lot of error checking.\\nFor example, you may know you\'re not going to use the full range of an integer, and Ada enables specification and automatic checking of valid values.\\nCombined with built-in pre and post conditions, this has helped me improve the way I think while programming."}]}')}}]);