"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[4483],{1716:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>u});var t=n(6687);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?t.createElement(g,i(i({ref:a},c),{},{components:n})):t.createElement(g,i({ref:a},c))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},652:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=n(9440),r=(n(6687),n(1716));const o={sidebar_position:142},i="B.5  Interfacing with Fortran",s={unversionedId:"arm/AA-B.5",id:"arm/AA-B.5",title:"B.5  Interfacing with Fortran",description:"The facilities relevant to interfacing with the Fortran language are the package Interfaces.Fortran and support for specifying the Convention aspect with convention_identifier Fortran.",source:"@site/docs/arm/AA-B.5.md",sourceDirName:"arm",slug:"/arm/AA-B.5",permalink:"/docs/arm/AA-B.5",draft:!1,tags:[],version:"current",sidebarPosition:142,frontMatter:{sidebar_position:142},sidebar:"tutorialSidebar",previous:{title:"B.4  Interfacing with COBOL",permalink:"/docs/arm/AA-B.4"},next:{title:"Annex C Systems Programming",permalink:"/docs/arm/AA-Annex C"}},l={},p=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Implementation Requirements",id:"implementation-requirements",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}],c={toc:p};function d(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"b5--interfacing-with-fortran"},"B.5  Interfacing with Fortran"),(0,r.kt)("p",null,"{AI05-0229-1} The facilities relevant to interfacing with the Fortran language are the package Interfaces.Fortran and support for specifying the Convention aspect with convention_",(0,r.kt)("a",{parentName:"p",href:"./AA-2.3#S0002"},"identifier")," Fortran."),(0,r.kt)("p",null,"The package Interfaces.Fortran defines Ada types whose representations are identical to the default representations of the Fortran intrinsic types Integer, Real, Double Precision, Complex, Logical, and Character in a supported Fortran implementation. These Ada types can therefore be used to pass objects between Ada and Fortran programs. "),(0,r.kt)("h4",{id:"static-semantics"},"Static Semantics"),(0,r.kt)("p",null,"The library package Interfaces.Fortran has the following declaration: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI12-0414-1} with Ada.Numerics.Generic_Complex_Types;  -- see G.1.1\npragma Elaborate_All(Ada.Numerics.Generic_Complex_Types);\npackage Interfaces.Fortran\n   with Pure is\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   type Fortran_Integer is range implementation-defined;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   type Real             is digits implementation-defined;\n   type Double_Precision is digits implementation-defined;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   type Logical is new Boolean;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   package Single_Precision_Complex_Types is\n      new Ada.Numerics.Generic_Complex_Types (Real);\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   type Complex is new Single_Precision_Complex_Types.Complex;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   subtype Imaginary is Single_Precision_Complex_Types.Imaginary;\n   i : Imaginary renames Single_Precision_Complex_Types.i;\n   j : Imaginary renames Single_Precision_Complex_Types.j;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI12-0058-1}    package Double_Precision_Complex_Types is\n      new Ada.Numerics.Generic_Complex_Types (Double_Precision);\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI12-0058-1}    type Double_Complex is new Double_Precision_Complex_Types.Complex;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI12-0058-1}    subtype Double_Imaginary is Double_Precision_Complex_Types.Imaginary;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   type Character_Set is implementation-defined character type;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI05-0229-1}    type Fortran_Character is array (Positive range &lt&gt) of Character_Set\n      with Pack;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   function To_Fortran (Item : in Character) return Character_Set;\n   function To_Ada (Item : in Character_Set) return Character;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   function To_Fortran (Item : in String) return Fortran_Character;\n   function To_Ada     (Item : in Fortran_Character) return String;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   procedure To_Fortran (Item       : in String;\n                         Target     : out Fortran_Character;\n                         Last       : out Natural);\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   procedure To_Ada (Item     : in Fortran_Character;\n                     Target   : out String;\n                     Last     : out Natural);\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"end Interfaces.Fortran;\n\n")),(0,r.kt)("p",null,"Implementation defined: The types Fortran_Integer, Real, Double_Precision, and Character_Set in Interfaces.Fortran."),(0,r.kt)("p",null,"Ramification: {AI12-0058-1} The means by which the Complex and Double_Complex types are provided in Interfaces.Fortran creates a dependence of Interfaces.Fortran on Numerics.Generic_Complex_Types (see G.1.1). This dependence is intentional and unavoidable, if the Fortran-compatible Complex and Double_Complex types are to be useful in Ada code without duplicating facilities defined elsewhere. "),(0,r.kt)("p",null,"{AI12-0058-1} The types Fortran_Integer, Real, Double_Precision, Logical, Complex, Double_Complex, Character_Set, and Fortran_Character are Fortran-compatible."),(0,r.kt)("p",null,"The To_Fortran and To_Ada functions map between the Ada type Character and the Fortran type Character_Set, and also between the Ada type String and the Fortran type Fortran_Character. The To_Fortran and To_Ada procedures have analogous effects to the string conversion subprograms found in Interfaces.COBOL. "),(0,r.kt)("h4",{id:"implementation-requirements"},"Implementation Requirements"),(0,r.kt)("p",null,"{AI05-0229-1} An implementation shall support specifying aspect Convention with a Fortran convention_",(0,r.kt)("a",{parentName:"p",href:"./AA-2.3#S0002"},"identifier")," for a Fortran-eligible type (see B.1). "),(0,r.kt)("h4",{id:"implementation-permissions"},"Implementation Permissions"),(0,r.kt)("p",null,"{AI12-0058-1} {AI12-0263-1} An implementation may add additional declarations to the Fortran interface packages. For example, declarations are permitted for the character types corresponding to Fortran character kinds 'ascii' and 'iso_10646', which in turn correspond to ISO/IEC 646:1991 and to UCS-4 as specified in ISO/IEC 10646:2017. "),(0,r.kt)("p",null,"Reason: {AI12-0058-1} Fortran compilers are required to recognize 'ascii' and 'iso_10646' as arguments to the SELECTED_CHAR_KIND intrinsic function, but are not required to support those kinds. "),(0,r.kt)("p",null,"Discussion: {AI12-0058-1} Implementations may add auxiliary declarations as needed to assist in the declarations of additional Fortran-compatible types. For example,  if a wide character type is defined to match a Fortran 90 wide character type (accessible in Fortran 90 with the Kind attribute), then an auxiliary character set may be declared to serve as its component type. "),(0,r.kt)("h4",{id:"implementation-advice"},"Implementation Advice"),(0,r.kt)("p",null,"An Ada implementation should support the following interface correspondences between Ada and Fortran: "),(0,r.kt)("p",null,"An Ada procedure corresponds to a Fortran subroutine."),(0,r.kt)("p",null,"An Ada function corresponds to a Fortran function."),(0,r.kt)("p",null,"An Ada parameter of an elementary, array, or record type T is passed as a TF argument to a Fortran procedure, where TF is the Fortran type corresponding to the Ada type T, and where the INTENT attribute of the corresponding dummy argument matches the Ada formal parameter mode; the Fortran implementation's parameter passing conventions are used. For elementary types, a local copy is used if necessary to ensure by-copy semantics."),(0,r.kt)("p",null,"An Ada parameter of an access-to-subprogram type is passed as a reference to a Fortran procedure whose interface corresponds to the designated subprogram's specification. "),(0,r.kt)("p",null,"Implementation Advice: If Fortran interfacing is supported, the interface correspondences between Ada and Fortran should be supported."),(0,r.kt)("p",null,'NOTE 1   An object of a Fortran-compatible record type, declared in a library package or subprogram, can correspond to a Fortran common block; the type also corresponds to a Fortran "derived type".'),(0,r.kt)("p",null,"NOTE 2   {AI12-0224-1} For Fortran facilities not addressed by this subclause, consider using the Fortran to C interoperability features defined in ISO/IEC 1594-1:2018 along with the C interfacing features defined in B.3."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Example of Interfaces.Fortran: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"with Interfaces.Fortran;\nuse Interfaces.Fortran;\nprocedure Ada_Application is\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI05-0229-1} {AI12-0178-1}    type Fortran_Matrix is \n      array (Fortran_Integer range &lt&gt,\n             Fortran_Integer range &lt&gt) of Double_Precision\n      with Convention =&gt Fortran;                  -- stored in Fortran's\n                                                   -- column-major order\n   procedure Invert (Rank : in Fortran_Integer; X : in out Fortran_Matrix)\n      with Import =&gt True, Convention =&gt Fortran; -- a Fortran subroutine\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   Rank      : constant Fortran_Integer := 100;\n   My_Matrix : Fortran_Matrix (1 .. Rank, 1 .. Rank);\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI12-0058-1}    Precision: constant := 6;\n   type Standard_Deviation is digits Precision\n      with Convention =&gt Fortran;\n   Deviation : Standard_Deviation;\n      -- Declarations to match the following Fortran declarations:\n      --   integer, parameter :: precision = selected_real_kind(p=6)\n      --   real(precision) :: deviation\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"begin\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   ...\n   My_Matrix := ...;\n   ...\n   Invert (Rank, My_Matrix);\n   ...\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI12-0058-1}    Deviation := ...;\n   ...\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"end Ada_Application;\n\n")),(0,r.kt)("h4",{id:"wording-changes-from-ada-2012"},"Wording Changes from Ada 2012"),(0,r.kt)("p",null,"{AI12-0058-1} Correction: The package Double_Precision_Complex_Types and associated types are added to package Interfaces.Fortran. In unusual circumstances, this could cause an incompatibility; we don't document it as an incompatibility as implementations are allowed to add declarations to this package, so that risk of an incompatibility is present for any move from one version of an implementation to another (not to mention to another implementation). As such, the language-defined additions make no change in the risk of incompatibility."))}d.isMDXComponent=!0}}]);