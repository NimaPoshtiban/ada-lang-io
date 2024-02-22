"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[7934],{7919:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>m,default:()=>y,frontMatter:()=>g,metadata:()=>A,toc:()=>h});var r=a(58168),t=(a(96540),a(15680)),i=a(20793),o=a(91435),s=a(21432),d=a(79162),c=a(34421);const g={sidebar_position:207},m="J.14 Character and Wide_Character Conversion Functions",A={unversionedId:"arm/AA-J/AA-J.14",id:"arm/AA-J/AA-J.14",title:"J.14 Character and Wide_Character Conversion Functions",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-J/AA-J.14.mdx",sourceDirName:"arm/AA-J",slug:"/arm/AA-J/AA-J.14",permalink:"/docs/arm/AA-J/AA-J.14",draft:!1,tags:[],version:"current",sidebarPosition:207,frontMatter:{sidebar_position:207},sidebar:"referenceManualSidebar",previous:{title:"J.13 Dependence Restriction Identifiers",permalink:"/docs/arm/AA-J/AA-J.13"},next:{title:"J.15 Aspect-related Pragmas",permalink:"/docs/arm/AA-J/AA-J.15"}},u={},h=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}],l={toc:h},p="wrapper";function y(e){let{components:n,...a}=e;return(0,t.yg)(p,(0,r.A)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"j14-character-and-wide_character-conversion-functions"},"J.14 Character and Wide_Character Conversion Functions"),(0,t.yg)("admonition",{type:"warning"},(0,t.yg)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,t.yg)("h4",{id:"static-semantics"},"Static Semantics"),(0,t.yg)(d.A,{mdxType:"MarginText"},"1/2"),(0,t.yg)(c.A,{items:["AI95-00395-01"],mdxType:"MarginInfo"}),(0,t.yg)("p",null,"The following declarations exist in the declaration of package Ada.Characters.Handling:",(0,t.yg)("br",null)),(0,t.yg)(d.A,{mdxType:"MarginText"},"2/2"),(0,t.yg)(s.A,{language:"ada",mdxType:"CodeBlock"},"function Is_Character (Item : in Wide_Character) return Boolean","\n","      renames Conversions.Is_Character;","\n","   function Is_String    (Item : in Wide_String)    return Boolean","\n","      renames Conversions.Is_String;","\n",(0,t.yg)(d.A,{mdxType:"MarginText"},"3/2"),"function To_Character (Item       : in Wide_Character;","\n","                         Substitute : in Character := ' ')","\n","                         return Character","\n","      renames Conversions.To_Character;","\n",(0,t.yg)(d.A,{mdxType:"MarginText"},"4/2"),"function To_String    (Item       : in Wide_String;","\n","                          Substitute : in Character := ' ')","\n","                          return String","\n","      renames Conversions.To_String;","\n",(0,t.yg)(d.A,{mdxType:"MarginText"},"5/2"),"function To_Wide_Character (Item : in Character) return Wide_Character","\n","      renames Conversions.To_Wide_Character;","\n",(0,t.yg)(d.A,{mdxType:"MarginText"},"6/2"),"function To_Wide_String    (Item : in String)    return Wide_String","\n","      renames Conversions.To_Wide_String;","\n"),(0,t.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,t.yg)("h4",{id:"wording-changes-from-ada-95"},"Wording Changes from Ada 95")),(0,t.yg)(o.A,{mdxType:"AnnotatedOnly"},(0,t.yg)(d.A,{mdxType:"MarginText"},"6.a/3"),(0,t.yg)(c.A,{items:["AI95-00394-01","AI05-0299-1"],mdxType:"MarginInfo"}),(0,t.yg)(i.A,{type:"aarm",aarm:"note",mdxType:"Admonition"},"This subclause is new. These subprograms were moved to Characters.Conversions (see ",(0,t.yg)("a",{href:"../AA-A/AA-A.3#Subclause_A.3.4"},"A.3.4"),"). ",(0,t.yg)("br",null))))}y.isMDXComponent=!0}}]);