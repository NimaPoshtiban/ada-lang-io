"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[4148],{1716:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(6687);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),g=r,h=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4016:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=t(9440),r=(t(6687),t(1716));const o={sidebar_position:118},i="A.1  The Package Standard",l={unversionedId:"arm/AA-A.1",id:"arm/AA-A.1",title:"A.1  The Package Standard",description:"This subclause outlines the specification of the package Standard containing all predefined identifiers in the language. The corresponding package body is not specified by the language.",source:"@site/docs/arm/AA-A.1.md",sourceDirName:"arm",slug:"/arm/AA-A.1",permalink:"/docs/arm/AA-A.1",draft:!1,tags:[],version:"current",sidebarPosition:118,frontMatter:{sidebar_position:118},sidebar:"tutorialSidebar",previous:{title:"Annex A Predefined Language Environment",permalink:"/docs/arm/AA-Annex A"},next:{title:"A.2  The Package Ada",permalink:"/docs/arm/AA-A.2"}},s={},d=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"a1--the-package-standard"},"A.1  The Package Standard"),(0,r.kt)("p",null,"{AI05-0299-1} This subclause outlines the specification of the package Standard containing all predefined identifiers in the language. The corresponding package body is not specified by the language."),(0,r.kt)("p",null,"The operators that are predefined for the types declared in the package Standard are given in comments since they are implicitly declared. Italics are used for pseudo-names of anonymous types (such as root_real) and for undefined information (such as implementation-defined). "),(0,r.kt)("p",null,"Ramification: All of the predefined operators are of convention Intrinsic. "),(0,r.kt)("h4",{id:"static-semantics"},"Static Semantics"),(0,r.kt)("p",null,"The library package Standard has the following declaration: "),(0,r.kt)("p",null,"Implementation defined: The names and characteristics of the numeric subtypes declared in the visible part of package Standard."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI12-0414-1} package Standard\n   with Pure is\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   type Boolean is (False, True);\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   -- The predefined relational operators for this type are as follows:\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'{8652/0028} {AI95-00145-01}    -- function "="   (Left, Right : Boolean\'Base) return Boolean;\n   -- function "/="  (Left, Right : Boolean\'Base) return Boolean;\n   -- function "&lt"   (Left, Right : Boolean\'Base) return Boolean;\n   -- function "&lt="  (Left, Right : Boolean\'Base) return Boolean;\n   -- function "&gt"   (Left, Right : Boolean\'Base) return Boolean;\n   -- function "&gt="  (Left, Right : Boolean\'Base) return Boolean;\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   -- The predefined logical operators and the predefined logical\n   -- negation operator are as follows:\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{8652/0028} {AI95-00145-01}    -- function \"and\" (Left, Right : Boolean'Base) return Boolean'Base;\n   -- function \"or\"  (Left, Right : Boolean'Base) return Boolean'Base;\n   -- function \"xor\" (Left, Right : Boolean'Base) return Boolean'Base;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{8652/0028} {AI95-00145-01}    -- function \"not\" (Right : Boolean'Base) return Boolean'Base;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI95-00434-01}    -- The integer type root_integer and the\n   -- corresponding universal type universal_integer are predefined.\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   type Integer is range implementation-defined;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   subtype Natural  is Integer range 0 .. Integer'Last;\n   subtype Positive is Integer range 1 .. Integer'Last;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   -- The predefined operators for type Integer are as follows:\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'   -- function "="  (Left, Right : Integer\'Base) return Boolean;\n   -- function "/=" (Left, Right : Integer\'Base) return Boolean;\n   -- function "&lt"  (Left, Right : Integer\'Base) return Boolean;\n   -- function "&lt=" (Left, Right : Integer\'Base) return Boolean;\n   -- function "&gt"  (Left, Right : Integer\'Base) return Boolean;\n   -- function "&gt=" (Left, Right : Integer\'Base) return Boolean;\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   -- function \"+\"   (Right : Integer'Base) return Integer'Base;\n   -- function \"-\"   (Right : Integer'Base) return Integer'Base;\n   -- function \"abs\" (Right : Integer'Base) return Integer'Base;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   -- function \"+\"   (Left, Right : Integer'Base) return Integer'Base;\n   -- function \"-\"   (Left, Right : Integer'Base) return Integer'Base;\n   -- function \"*\"   (Left, Right : Integer'Base) return Integer'Base;\n   -- function \"/\"   (Left, Right : Integer'Base) return Integer'Base;\n   -- function \"rem\" (Left, Right : Integer'Base) return Integer'Base;\n   -- function \"mod\" (Left, Right : Integer'Base) return Integer'Base;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   -- function \"**\"  (Left : Integer'Base; Right : Natural)\n   --                  return Integer'Base;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   -- The specification of each operator for the type\n   -- root_integer, or for any additional predefined integer\n   -- type, is obtained by replacing Integer by the name of the type\n   -- in the specification of the corresponding operator of the type\n   -- Integer. The right operand of the exponentiation operator\n   -- remains as subtype Natural.\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI95-00434-01}    -- The floating point type root_real and the\n   -- corresponding universal type universal_real are predefined.\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   type Float is digits implementation-defined;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   -- The predefined operators for this type are as follows:\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'   -- function "="   (Left, Right : Float) return Boolean;\n   -- function "/="  (Left, Right : Float) return Boolean;\n   -- function "&lt"   (Left, Right : Float) return Boolean;\n   -- function "&lt="  (Left, Right : Float) return Boolean;\n   -- function "&gt"   (Left, Right : Float) return Boolean;\n   -- function "&gt="  (Left, Right : Float) return Boolean;\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'   -- function "+"   (Right : Float) return Float;\n   -- function "-"   (Right : Float) return Float;\n   -- function "abs" (Right : Float) return Float;\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'   -- function "+"   (Left, Right : Float) return Float;\n   -- function "-"   (Left, Right : Float) return Float;\n   -- function "*"   (Left, Right : Float) return Float;\n   -- function "/"   (Left, Right : Float) return Float;\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'   -- function "**"  (Left : Float; Right : Integer\'Base) return Float;\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   -- The specification of each operator for the type root_real, or for\n   -- any additional predefined floating point type, is obtained by\n   -- replacing Float by the name of the type in the specification of the\n   -- corresponding operator of the type Float.\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   -- In addition, the following operators are predefined for the root\n   -- numeric types:\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'   function "*" (Left : root_integer; Right : root_real)\n     return root_real;\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'   function "*" (Left : root_real;    Right : root_integer)\n     return root_real;\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'   function "/" (Left : root_real;    Right : root_integer)\n     return root_real;\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   -- The type universal_fixed is predefined.\n   -- The only multiplying operators defined between\n   -- fixed point types are\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'   function "*" (Left : universal_fixed; Right : universal_fixed)\n     return universal_fixed;\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'   function "/" (Left : universal_fixed; Right : universal_fixed)\n     return universal_fixed;\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI95-00230-01}    -- The type universal_access is predefined.\n   -- The following equality operators are predefined:\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'{AI95-00230-01}    function "="  (Left, Right: universal_access) return Boolean;\n   function "/=" (Left, Right: universal_access) return Boolean;\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI95-00415-01} {AI05-0181-1} {AI05-0248-1}       -- The declaration of type Character is based on the standard ISO 8859-1 character set.\n\n      -- There are no character literals corresponding to the positions for control characters.\n      -- They are indicated in italics in this definition. See 3.5.2.\n\n   type Character is\n     (nul,  soh,    stx,    etx,    eot,    enq,    ack,    bel,    --0 (16#00#) .. 7 (16#07#)\n      bs,   ht, lf, vt, ff, cr, so, si, --8 (16#08#) .. 15 (16#0F#)\n\n      dle,  dc1,    dc2,    dc3,    dc4,    nak,    syn,    etb,    --16 (16#10#) .. 23 (16#17#)\n      can,  em, sub,    esc,    fs, gs, rs, us, --24 (16#18#) .. 31 (16#1F#)\n\n      ' ',  '!',    '\"',    '#',    '$',    '%',    '&',    ''',    --32 (16#20#) .. 39 (16#27#)\n      '(',  ')',    '*',    '+',    ',',    '-',    '.',    '/',    --40 (16#28#) .. 47 (16#2F#)\n\n      '0',  '1',    '2',    '3',    '4',    '5',    '6',    '7',    --48 (16#30#) .. 55 (16#37#)\n      '8',  '9',    ':',    ';',    '&lt',  '=',    '&gt',  '?',    --56 (16#38#) .. 63 (16#3F#)\n\n      '@',  'A',    'B',    'C',    'D',    'E',    'F',    'G',    --64 (16#40#) .. 71 (16#47#)\n      'H',  'I',    'J',    'K',    'L',    'M',    'N',    'O',    --72 (16#48#) .. 79 (16#4F#)\n\n      'P',  'Q',    'R',    'S',    'T',    'U',    'V',    'W',    --80 (16#50#) .. 87 (16#57#)\n      'X',  'Y',    'Z',    '[',    '\\',    ']',    '^',    '_',    --88 (16#58#) .. 95 (16#5F#)\n\n      '`',  'a',    'b',    'c',    'd',    'e',    'f',    'g',    --96 (16#60#) .. 103 (16#67#)\n      'h',  'i',    'j',    'k',    'l',    'm',    'n',    'o',    --104 (16#68#) .. 111 (16#6F#)\n\n      'p',  'q',    'r',    's',    't',    'u',    'v',    'w',    --112 (16#70#) .. 119 (16#77#)\n      'x',  'y',    'z',    '{',    '|',    '}',    '~',    del,    --120 (16#78#) .. 127 (16#7F#)\n\n      reserved_128, reserved_129,   bph,    nbh,            --128 (16#80#) .. 131 (16#83#)\n      reserved_132, nel,    ssa,    esa,                --132 (16#84#) .. 135 (16#87#)\n      hts,  htj,    vts,    pld,    plu,    ri, ss2,    ss3,    --136 (16#88#) .. 143 (16#8F#)\n\n      dcs,  pu1,    pu2,    sts,    cch,    mw, spa,    epa,    --144 (16#90#) .. 151 (16#97#)\n      sos,  reserved_153,   sci,    csi,                --152 (16#98#) .. 155 (16#9B#)\n      st,   osc,    pm, apc,                    --156 (16#9C#) .. 159 (16#9F#)\n\n      ' ',  '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    --160 (16#A0#) .. 167 (16#A7#)\n      '\ufffd',  '\ufffd',    '\ufffd',    '\ufffd',                    --168 (16#A8#) .. 171 (16#AB#)\n      '\ufffd',  soft_hyphen,    '\ufffd',    '\ufffd',                --172 (16#AC#) .. 175 (16#AF#)\n\n      '\ufffd',  '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    --176 (16#B0#) .. 183 (16#B7#)\n      '\ufffd',  '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    --184 (16#B8#) .. 191 (16#BF#)\n\n      '\ufffd',  '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    --192 (16#C0#) .. 199 (16#C7#)\n      '\ufffd',  '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    --200 (16#C8#) .. 207 (16#CF#)\n\n      '\ufffd',  '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    --208 (16#D0#) .. 215 (16#D7#)\n      '\ufffd',  '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    --216 (16#D8#) .. 223 (16#DF#)\n\n      '\ufffd',  '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    --224 (16#E0#) .. 231 (16#E7#)\n      '\ufffd',  '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    --232 (16#E8#) .. 239 (16#EF#)\n\n      '\ufffd',  '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    --240 (16#F0#) .. 247 (16#F7#)\n      '\ufffd',  '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd',    '\ufffd');--248 (16#F8#) .. 255 (16#FF#)\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   -- The predefined operators for the type Character are the same as for\n   -- any enumeration type.\n\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI95-00395-01} {AI05-0266-1} {AI12-0263-1}    -- The declaration of type Wide_Character is based on the standard ISO/IEC 10646:2017 BMP character\n   -- set. The first 256 positions have the same contents as type Character. See 3.5.2.\n\n   type Wide_Character is (nul, soh ... Hex_0000FFFE, Hex_0000FFFF);\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI95-00285-01} {AI95-00395-01} {AI05-0266-1} {AI12-0263-1}    -- The declaration of type Wide_Wide_Character is based on the full\n   -- ISO/IEC 10646:2017 character set. The first 65536 positions have the\n   -- same contents as type Wide_Character. See 3.5.2.\n\n   type Wide_Wide_Character is (nul, soh ... Hex_7FFFFFFE, Hex_7FFFFFFF);\n   for Wide_Wide_Character'Size use 32;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   package ASCII is ... end ASCII;  --Obsolescent; see J.5\n\n\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI05-0229-1}    -- Predefined string types:\n\n   type String is array(Positive range &lt&gt) of Character\n      with Pack;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   -- The predefined operators for this type are as follows:\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'   --     function "="  (Left, Right: String) return Boolean;\n   --     function "/=" (Left, Right: String) return Boolean;\n   --     function "&lt"  (Left, Right: String) return Boolean;\n   --     function "&lt=" (Left, Right: String) return Boolean;\n   --     function "&gt"  (Left, Right: String) return Boolean;\n   --     function "&gt=" (Left, Right: String) return Boolean;\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'   --     function "&" (Left: String;    Right: String)    return String;\n   --     function "&" (Left: Character; Right: String)    return String;\n   --     function "&" (Left: String;    Right: Character) return String;\n   --     function "&" (Left: Character; Right: Character) return String;\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI05-0229-1}    type Wide_String is array(Positive range &lt&gt) of Wide_Character\n      with Pack;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   -- The predefined operators for this type correspond to those for String.\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI95-00285-01} {AI05-0229-1}    type Wide_Wide_String is array (Positive range &lt&gt)\n      of Wide_Wide_Character\n         with Pack;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"{AI95-00285-01}    -- The predefined operators for this type correspond to those for String.\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   type Duration is delta implementation-defined range implementation-defined;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"      -- The predefined operators for the type Duration are the same as for\n      -- any fixed point type.\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   -- The predefined exceptions:\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"   Constraint_Error: exception;\n   Program_Error   : exception;\n   Storage_Error   : exception;\n   Tasking_Error   : exception;\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"end Standard;\n\n")),(0,r.kt)("p",null,"Standard has no private part. "),(0,r.kt)("p",null,"Reason: This is important for portability. All library packages are children of Standard, and if Standard had a private part then it would be visible to all of them. "),(0,r.kt)("p",null,"{AI95-00285-01} In each of the types Character, Wide_Character, and Wide_Wide_Character, the character literals for the space character (position 32) and the non-breaking space character (position 160) correspond to different values. Unless indicated otherwise, each occurrence of the character literal ' ' in this Reference Manual refers to the space character. Similarly, the character literals for hyphen (position 45) and soft hyphen (position 173) correspond to different values. Unless indicated otherwise, each occurrence of the character literal '' in this Reference Manual refers to the hyphen character. "),(0,r.kt)("h4",{id:"dynamic-semantics"},"Dynamic Semantics"),(0,r.kt)("p",null,"Elaboration of the body of Standard has no effect. "),(0,r.kt)("p",null,"Discussion: Note that the language does not define where this body appears in the environment ",(0,r.kt)("a",{parentName:"p",href:"./AA-3.11#S0086"},"declarative_part"),' - see 10, "Program Structure and Compilation Issues". '),(0,r.kt)("h4",{id:"implementation-permissions"},"Implementation Permissions"),(0,r.kt)("p",null,"An implementation may provide additional predefined integer types and additional predefined floating point types. Some or all of these types may be anonymous. "),(0,r.kt)("p",null,"To be honest: An implementation may add representation items to package Standard, for example to specify the internal codes of type Boolean, or the Small of type Duration."),(0,r.kt)("h4",{id:"implementation-advice"},"Implementation Advice"),(0,r.kt)("p",null,'If an implementation provides additional named predefined integer types, then the names should end with "Integer" as in "Long_Integer". If an implementation provides additional named predefined floating point types, then the names should end with "Float" as in "Long_Float". '),(0,r.kt)("p",null,'Implementation Advice: If an implementation provides additional named predefined integer types, then the names should end with "Integer". If an implementation provides additional named predefined floating point types, then the names should end with "Float".'),(0,r.kt)("p",null,"NOTE 1   Certain aspects of the predefined entities cannot be completely described in the language itself. For example, although the enumeration type Boolean can be written showing the two enumeration literals False and True, the short-circuit control forms cannot be expressed in the language."),(0,r.kt)("p",null,'NOTE 2   As explained in 8.1, "Declarative Region" and 10.1.4, "The Compilation Process", the declarative region of the package Standard encloses every library unit and consequently the main subprogram; the declaration of every library unit is assumed to occur within this declarative region. ',(0,r.kt)("a",{parentName:"p",href:"./AA-10.1#S0287"},"Library_item"),'s are assumed to be ordered in such a way that there are no forward semantic dependences. However, as explained in 8.3, "Visibility", the only library units that are visible within a given compilation unit are the library units named by all ',(0,r.kt)("a",{parentName:"p",href:"./AA-10.1#S0294"},"with_clause"),"s that apply to the given unit, and moreover, within the declarative region of a given library unit, that library unit itself."),(0,r.kt)("p",null,"NOTE 3   If all ",(0,r.kt)("a",{parentName:"p",href:"./AA-5.6#S0191"},"block_statement"),"s of a program are named, then the name of each program unit can always be written as an expanded name starting with Standard (unless Standard is itself hidden). The name of a library unit cannot be a homograph of a name (such as Integer) that is already declared in Standard."),(0,r.kt)("p",null,"NOTE 4   The exception Standard.Numeric_Error is defined in J.6. "),(0,r.kt)("p",null,'Discussion: The declaration of Natural needs to appear between the declaration of Integer and the (implicit) declaration of the "',(0,r.kt)("strong",{parentName:"p"},'" operator for Integer, because a formal parameter of "'),"\" is of subtype Natural. This would be impossible in normal code, because the implicit declarations for a type occur immediately after the type declaration, with no possibility of intervening explicit declarations. But we're in Standard, and Standard is somewhat magic anyway."),(0,r.kt)("p",null,"Using Natural as the subtype of the formal of \"**\" seems natural; it would be silly to have a textual rule about Constraint_Error being raised when there is a perfectly good subtype that means just that. Furthermore, by not using Integer for that formal, it helps remind the reader that the exponent remains Natural even when the left operand is replaced with the derivative of Integer. It doesn't logically imply that, but it's still useful as a reminder."),(0,r.kt)("p",null,"In any case, declaring these general-purpose subtypes of Integer close to Integer seems more readable than declaring them much later. "),(0,r.kt)("h4",{id:"extensions-to-ada-83"},"Extensions to Ada 83"),(0,r.kt)("p",null,"Package Standard is declared to be pure. "),(0,r.kt)("p",null,"Discussion: The introduction of the types Wide_Character and Wide_String is not an Ada 95 extension to Ada 83, since ISO WG9 has approved these as an authorized extension of the original Ada 83 standard that is part of that standard. "),(0,r.kt)("h4",{id:"wording-changes-from-ada-83"},"Wording Changes from Ada 83"),(0,r.kt)("p",null,"Numeric_Error is made obsolescent."),(0,r.kt)("p",null,'The declarations of Natural and Positive are moved to just after the declaration of Integer, so that "**" can refer to Natural without a forward reference. There\'s no real need to move Positive, too - it just came along for the ride. '),(0,r.kt)("h4",{id:"extensions-to-ada-95"},"Extensions to Ada 95"),(0,r.kt)("p",null,"{AI95-00285-01} Types Wide_Wide_Character and Wide_Wide_String are new. "),(0,r.kt)("p",null,"Discussion: The inconsistencies associated with these types are documented in 3.5.2 and 3.6.3. "),(0,r.kt)("p",null,"{AI95-00230-01} Type universal_access and the equality operations for it are new. "),(0,r.kt)("h4",{id:"wording-changes-from-ada-95"},"Wording Changes from Ada 95"),(0,r.kt)("p",null,"{8652/0028} {AI95-00145-01} Corrigendum: Corrected the parameter type for the Boolean operators declared in Standard. "),(0,r.kt)("h4",{id:"wording-changes-from-ada-2005"},"Wording Changes from Ada 2005"),(0,r.kt)("p",null,"{AI05-0181-1} Correction: Since soft_hyphen (position 173) is defined to be nongraphic, gave it a name. "),(0,r.kt)("p",null,"Discussion: The inconsistencies associated with this change are documented in 3.5."))}c.isMDXComponent=!0}}]);