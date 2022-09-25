"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[3204],{3619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>B,contentTitle:()=>R,default:()=>J,frontMatter:()=>M,metadata:()=>F,toc:()=>V});var a=t(1716),r=t(6687),i=t(4923);const o="tabItem_Vo3M";var l=Object.defineProperty,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function d({children:e,hidden:n,className:t}){return r.createElement("div",((e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(s)for(var t of s(n))u.call(n,t)&&p(e,t,n[t]);return e})({role:"tabpanel",className:(0,i.Z)(o,t)},{hidden:n}),e)}var m=t(1591),b=t(165),v=t(2257),f=t(3408);const g="tabList_cuNH",h="tabItem_JP6x";var y=Object.defineProperty,k=Object.defineProperties,C=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,T=(e,n,t)=>n in e?y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,j=(e,n)=>{for(var t in n||(n={}))I.call(n,t)&&T(e,t,n[t]);if(w)for(var t of w(n))O.call(n,t)&&T(e,t,n[t]);return e};function A(e){var n,t;const{lazy:a,block:o,defaultValue:l,values:s,groupId:c,className:u}=e,p=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),d=null!=s?s:p.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),m=(0,b.l)(d,((e,n)=>e.value===n.value));if(m.length>0)throw new Error(`Docusaurus error: Duplicate values "${m.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:null!=(t=null!=l?l:null==(n=p.find((e=>e.props.default)))?void 0:n.props.value)?t:p[0].props.value;if(null!==y&&!d.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${d.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:I}=(0,v.U)(),[O,T]=(0,r.useState)(y),A=[],{blockElementScrollPositionUntilNextRender:N}=(0,f.o5)();if(null!=c){const e=w[c];null!=e&&e!==O&&d.some((n=>n.value===e))&&T(e)}const _=e=>{const n=e.currentTarget,t=A.indexOf(n),a=d[t].value;a!==O&&(N(n),T(a),null!=c&&I(c,String(a)))},E=e=>{var n,t;let a=null;switch(e.key){case"ArrowRight":{const t=A.indexOf(e.currentTarget)+1;a=null!=(n=A[t])?n:A[0];break}case"ArrowLeft":{const n=A.indexOf(e.currentTarget)-1;a=null!=(t=A[n])?t:A[A.length-1];break}}null==a||a.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",g)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},u)},d.map((({value:e,label:n,attributes:t})=>{return r.createElement("li",(a=j({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>A.push(e),onKeyDown:E,onFocus:_,onClick:_},t),o={className:(0,i.Z)("tabs__item",h,null==t?void 0:t.className,{"tabs__item--active":O===e})},k(a,C(o))),null!=n?n:e);var a,o}))),a?(0,r.cloneElement)(p.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},p.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==O})))))}function N(e){const n=(0,m.Z)();return r.createElement(A,j({key:String(n)},e))}var _=Object.defineProperty,E=Object.defineProperties,x=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,S=(e,n,t)=>n in e?_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,q=(e,n)=>{for(var t in n||(n={}))P.call(n,t)&&S(e,t,n[t]);if(z)for(var t of z(n))D.call(n,t)&&S(e,t,n[t]);return e};const M={sidebar_position:1},R="Advanced Techniques",F={unversionedId:"learn/tips/advanced-techniques",id:"learn/tips/advanced-techniques",title:"Advanced Techniques",description:"RAII",source:"@site/docs/learn/tips/advanced-techniques.mdx",sourceDirName:"learn/tips",slug:"/learn/tips/advanced-techniques",permalink:"/docs/learn/tips/advanced-techniques",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tips and Tricks",permalink:"/docs/category/tips-and-tricks"},next:{title:"Being More Terse",permalink:"/docs/learn/tips/being-more-terse"}},B={},V=[{value:"RAII",id:"raii",level:2},{value:"Timing out on a Blocking Operation",id:"timing-out-on-a-blocking-operation",level:2},{value:"Waiting for all tasks to complete",id:"waiting-for-all-tasks-to-complete",level:2}],Z={toc:V};function J(e){var n,t=e,{components:r}=t,i=((e,n)=>{var t={};for(var a in e)P.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&z)for(var a of z(e))n.indexOf(a)<0&&D.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=q(q({},Z),i),E(n,x({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",q({},{id:"advanced-techniques"}),"Advanced Techniques"),(0,a.kt)("h2",q({},{id:"raii"}),"RAII"),(0,a.kt)("p",null,"Ada supports scope-based resources, also called ",(0,a.kt)("a",q({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization"}),"RAII"),"\nby extending the ",(0,a.kt)("inlineCode",{parentName:"p"},"Controlled")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"LimitedControlled")," types."),(0,a.kt)(N,{mdxType:"Tabs"},(0,a.kt)(d,{value:"ada",label:"Ada",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",q({parentName:"pre"},{className:"language-ada"}),"with Ada.Finalization;  use Ada.Finalization;\npackage Sample is\n    -- \"Controlled\" types exhibit RAII behavior:\n    type Capricorn is new Controlled with\n    record\n        Dummy : Integer;\n    end record;\n\n    overriding procedure Initialize(C : in out Capricorn);\n        -- Initialization after creation.\n\n    overriding procedure Adjust(C : in out Capricorn);\n        -- Adjustment after assignment.\n\n    overriding procedure Finalize(C : in out Capricorn);\n        -- Different than Java's Finalize, in that it's deterministic and more\n        -- analogous to a C++ destructor.\n\n    -- If you don't want one of these do to anything, you can avoid writing a\n    -- definition in the package body and define the function as \"do nothing\"\n    -- by writing:\n    --\n    -- overriding procedure Finalize(C : in out Capricorn) is null;\nend Sample;\n\npackage body Sample is\n    procedure Initialize(C : in out Capricorn) is\n    begin\n        -- Do something on initialize.\n    end Initialize;\n\n    procedure Adjust(C : in out Capricorn) is\n    begin\n        -- Adjustment after assignment.\n        --\n        -- If you want Adjust to do the same as Initialize and use the same object\n        -- code without generating a separate function, you can just do\n        -- procedure Adjust(C: in out Capricorn) renames Initialize;\n    end Adjust;\n\n    overriding procedure Finalize(C : in out Capricorn);\n        -- Different than Java's Finalize, in that it's deterministic and more\n        -- analogous to a C++ destructor.\nend Sample;\n"))),(0,a.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",q({parentName:"pre"},{className:"language-cpp"}),"class Capricorn {\npublic:\n// Similar for all constructors.\nCapricorn () {}\n\n// Copy constructor.\nCapricorn(const Capricorn&) {}\n\n// Move constructor.\nCapricorn(Capricorn&&) {}\n\n// Copy assignment.\nCapricorn& operator=(const Capricorn&) { return *this; }\n\n// Move assignment.\nCapricorn& operator=(Capricorn&&) { return *this; }\n\n// Destructor.\n~Capricorn () {}\n};\n")))),(0,a.kt)("h2",q({},{id:"timing-out-on-a-blocking-operation"}),"Timing out on a Blocking Operation"),(0,a.kt)("pre",null,(0,a.kt)("code",q({parentName:"pre"},{className:"language-ada"}),"task body My_Task is\n    Elem : A_Queue_Element;\nbegin\n    loop -- processing loop\n        select\n            A_Queue.Blocking_Queue (Elem);\n        or\n            -- Stop processing after a 1 second timeout. Removing this delay causes\n            -- immediate exit if a block occurs.\n            delay 1.0;\n            exit;\n        end select;\n\n        -- ... process Elem ...\n    end loop\nend My_Task;\n")),(0,a.kt)("h2",q({},{id:"waiting-for-all-tasks-to-complete"}),"Waiting for all tasks to complete"),(0,a.kt)("p",null,"A list of statements doesn't exit until all tasks are complete, so by using\n",(0,a.kt)("inlineCode",{parentName:"p"},"declare ... begin ... end")," you can wait until all your tasks are done."),(0,a.kt)("pre",null,(0,a.kt)("code",q({parentName:"pre"},{className:"language-ada"}),"declare\n    A_Task : My_Task;  -- task which needs to finish before more processing\nbegin\n    null; -- Just wait until the task is done.\nend;\n\n-- Continue other operations here.\n")))}J.isMDXComponent=!0}}]);