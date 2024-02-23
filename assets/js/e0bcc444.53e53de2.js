"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[2744],{5046:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=a(74848),t=a(28453);const s={title:"3.4 Using Types"},r=void 0,o={id:"style-guide/s3/04",title:"3.4 Using Types",description:"Strong typing promotes reliability in software. The type definition of",source:"@site/docs/style-guide/s3/04.mdx",sourceDirName:"style-guide/s3",slug:"/style-guide/s3/04",permalink:"/docs/style-guide/s3/04",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"3.4 Using Types"},sidebar:"styleGuideSidebar",previous:{title:"3.3 Comments",permalink:"/docs/style-guide/s3/03"},next:{title:"3.5 Summary",permalink:"/docs/style-guide/s3/05"}},l={},d=[{value:"Declaring Types",id:"declaring-types",level:3},{value:"guideline",id:"guideline",level:4},{value:"example",id:"example",level:4},{value:"rationale",id:"rationale",level:4},{value:"notes",id:"notes",level:4},{value:"exceptions",id:"exceptions",level:4},{value:"Enumeration Types",id:"enumeration-types",level:3},{value:"guideline",id:"guideline-1",level:4},{value:"example",id:"example-1",level:4},{value:"rationale",id:"rationale-1",level:4}];function c(e){const n={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Strong typing promotes reliability in software. The type definition of\nan object defines all legal values and operations and allows the\ncompiler to check for and identify potential errors during compilation.\nIn addition, the rules of type allow the compiler to generate code to\ncheck for violations of type constraints at execution time. Using these\nAda compiler's features facilitates earlier and more complete error\ndetection than that which is available with less strongly typed\nlanguages."}),"\n",(0,i.jsx)(n.h3,{id:"declaring-types",children:"Declaring Types"}),"\n",(0,i.jsx)(n.h4,{id:"guideline",children:"guideline"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Limit the range of scalar types as much as possible."}),"\n",(0,i.jsx)(n.li,{children:"Seek information about possible values from the application."}),"\n",(0,i.jsx)(n.li,{children:"Do not reuse any of the subtype names in package Standard."}),"\n",(0,i.jsx)(n.li,{children:"Use subtype declarations to improve program readability (Booch\n1987)."}),"\n",(0,i.jsx)(n.li,{children:"Use derived types and subtypes in concert (see Guideline 5.3.1)."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"subtype Card_Image is String (1 .. 80);\nInput_Line : Card_Image := (others => ' ');\n-- restricted integer type:\ntype    Day_Of_Leap_Year     is                  range 1 .. 366;\nsubtype Day_Of_Non_Leap_Year is Day_Of_Leap_Year range 1 .. 365;\n"})}),"\n",(0,i.jsx)(n.p,{children:'By the following declaration, the programmer means, "I haven\'t the\nfoggiest idea how many," but the actual base range will show up buried\nin the code or as a system parameter:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"Employee_Count : Integer;\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rationale",children:"rationale"}),"\n",(0,i.jsx)(n.p,{children:"Eliminating meaningless values from the legal range improves the\ncompiler's ability to detect errors when an object is set to an invalid\nvalue. This also improves program readability. In addition, it forces\nyou to carefully think about each use of objects declared to be of the\nsubtype."}),"\n",(0,i.jsx)(n.p,{children:"Different implementations provide different sets of values for most of\nthe predefined types. A reader cannot determine the intended range from\nthe predefined names. This situation is aggravated when the predefined\nnames are overloaded."}),"\n",(0,i.jsx)(n.p,{children:"The names of an object and its subtype can clarify their intended use\nand document low-level design decisions. The example above documents a\ndesign decision to restrict the software to devices whose physical\nparameters are derived from the characteristics of punch cards. This\ninformation is easy to find for any later changes, thus enhancing\nprogram maintainability."}),"\n",(0,i.jsx)(n.p,{children:"You can rename a type by declaring a subtype without a constraint (Ada\nReference Manual 1995, \xa78.5). You cannot overload a subtype name;\noverloading only applies to callable entities. Enumeration literals are\ntreated as parameterless functions and so are included in this rule."}),"\n",(0,i.jsx)(n.p,{children:"Types can have highly constrained sets of values without eliminating\nuseful values. Usage as described in Guideline 5.3.1 eliminates many\nflag variables and type conversions within executable statements. This\nrenders the program more readable while allowing the compiler to enforce\nstrong typing constraints."}),"\n",(0,i.jsx)(n.h4,{id:"notes",children:"notes"}),"\n",(0,i.jsx)(n.p,{children:"Subtype declarations do not define new types, only constraints for\nexisting types."}),"\n",(0,i.jsx)(n.p,{children:"Any deviation from this guideline detracts from the advantages of the\nstrong typing facilities of the Ada language."}),"\n",(0,i.jsx)(n.h4,{id:"exceptions",children:"exceptions"}),"\n",(0,i.jsx)(n.p,{children:"There are cases where you do not have a particular dependence on any\nrange of numeric values. Such situations occur, for example, with array\nindices (e.g., a list whose size is not fixed by any particular\nsemantics). See Guideline 7.2.1 for a discussion of appropriate uses of\npredefined types."}),"\n",(0,i.jsx)(n.h3,{id:"enumeration-types",children:"Enumeration Types"}),"\n",(0,i.jsx)(n.h4,{id:"guideline-1",children:"guideline"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use enumeration types instead of numeric codes."}),"\n",(0,i.jsx)(n.li,{children:"Only if absolutely necessary, use representation clauses to match\nrequirements of external devices."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"example"}),"\n",(0,i.jsx)(n.p,{children:"Use:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"type Color is (Blue, Red, Green, Yellow);\n"})}),"\n",(0,i.jsx)(n.p,{children:"rather than:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"Blue   : constant := 1;\nRed    : constant := 2;\nGreen  : constant := 3;\nYellow : constant := 4;\n"})}),"\n",(0,i.jsx)(n.p,{children:"and add the following if necessary:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ada",children:"for Color use (Blue   => 1,\n               Red    => 2,\n               Green  => 3,\n               Yellow => 4);\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rationale-1",children:"rationale"}),"\n",(0,i.jsx)(n.p,{children:"Enumerations are more robust than numeric codes; they leave less\npotential for errors resulting from incorrect interpretation and from\nadditions to and deletions from the set of values during maintenance.\nNumeric codes are holdovers from languages that have no user-defined\ntypes."}),"\n",(0,i.jsx)(n.p,{children:"In addition, Ada provides a number of attributes ('Pos, 'Val, 'Succ,\n'Pred, 'Image, and 'Value) for enumeration types that, when used, are\nmore reliable than user-written operations on encodings."}),"\n",(0,i.jsx)(n.p,{children:'A numeric code may at first seem appropriate to match external values.\nInstead, these situations call for a representation clause on the\nenumeration type. The representation clause documents the "encoding." If\nthe program is properly structured to isolate and encapsulate hardware\ndependencies (see Guideline 7.1.5), the numeric code ends up in an\ninterface package where it can be easily found and replaced if the\nrequirements change.'}),"\n",(0,i.jsx)(n.p,{children:"In general, avoid using representation clauses for enumeration types.\nWhen there is no obvious ordering of the enumeration literals, an\nenumeration representation can create portability problems if the\nenumeration type must be reordered to accommodate a change in\nrepresentation order on the new platform."})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);