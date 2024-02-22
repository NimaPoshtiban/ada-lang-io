"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[9493],{19365:(e,a,t)=>{t.d(a,{A:()=>o});var r=t(96540),n=t(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,o),hidden:t},a)}},11470:(e,a,t)=>{t.d(a,{A:()=>N});var r=t(58168),n=t(96540),l=t(20053),o=t(23104),i=t(56347),s=t(57485),u=t(31682),d=t(89466);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}}))}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??c(t);return function(e){const a=(0,u.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function g(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const r=(0,i.W6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(r.location.search);a.set(l,e),r.replace({...r.location,search:a.toString()})}),[l,r])]}function y(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,l=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:l}))),[s,u]=m({queryString:t,groupId:r}),[c,y]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,l]=(0,d.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),h=(()=>{const e=s??c;return g({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),y(e)}),[u,y,l]),tabValues:l}}var h=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:a,block:t,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),p=e=>{const a=e.currentTarget,t=d.indexOf(a),r=u[t].value;r!==i&&(c(a),s(r))},g=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}a?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:o}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>d.push(e),onKeyDown:g,onClick:p},o,{className:(0,l.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":i===a})}),t??a)})))}function v(e){let{lazy:a,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r}))))}function w(e){const a=y(e);return n.createElement("div",{className:(0,l.A)("tabs-container",b.tabList)},n.createElement(f,(0,r.A)({},e,a)),n.createElement(v,(0,r.A)({},e,a)))}function N(e){const a=(0,h.A)();return n.createElement(w,(0,r.A)({key:String(a)},e))}},91210:(e,a,t)=>{t.r(a),t.d(a,{GPR_FILE:()=>c,assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=t(58168),n=(t(96540),t(15680)),l=t(11470),o=t(19365);const i={sidebar_position:3},s="Editors",u={unversionedId:"learn/getting-started/editors",id:"learn/getting-started/editors",title:"Editors",description:"Setting up your editor",source:"@site/docs/learn/getting-started/editors.md",sourceDirName:"learn/getting-started",slug:"/learn/getting-started/editors",permalink:"/docs/learn/getting-started/editors",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/learn/getting-started/installation"},next:{title:"MacOS",permalink:"/docs/category/macos"}},d={},c="{GPR_FILE}",p=[{value:"Setting up your editor",id:"setting-up-your-editor",level:2},{value:"Language server",id:"language-server",level:3},{value:"GNAT Studio",id:"gnat-studio",level:3},{value:"Visual Studio Code",id:"visual-studio-code",level:3},{value:"Vim",id:"vim",level:3},{value:"Emacs",id:"emacs",level:3}],g={GPR_FILE:c,toc:p},m="wrapper";function y(e){let{components:a,...t}=e;return(0,n.yg)(m,(0,r.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"editors"},"Editors"),(0,n.yg)("h2",{id:"setting-up-your-editor"},"Setting up your editor"),(0,n.yg)("p",null,"You can adjust the editor that gets started by ",(0,n.yg)("inlineCode",{parentName:"p"},"alr edit")," with Alire's\n",(0,n.yg)("inlineCode",{parentName:"p"},"editor.cmd")," setting. Launching your editor this way with ",(0,n.yg)("inlineCode",{parentName:"p"},"alr edit"),"\ncauses Alire to start it with the appropriate environment variables and\nsettings."),(0,n.yg)("h3",{id:"language-server"},(0,n.yg)("a",{parentName:"h3",href:"https://github.com/AdaCore/ada_language_server"},"Language server")),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/AdaCore/ada_language_server"},"Ada has a language server"),".\nSome of the editors can be configured or have a plugin to use this so you might\nnot need to install this directly."),(0,n.yg)("h3",{id:"gnat-studio"},"GNAT Studio"),(0,n.yg)("p",null,"Alire is configured to work with GNAT Studio by default if you have it\ninstalled."),(0,n.yg)("p",null,"To edit your project, run this from your project directory:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"alr edit\n")),(0,n.yg)("h3",{id:"visual-studio-code"},(0,n.yg)("a",{parentName:"h3",href:"https://code.visualstudio.com"},"Visual Studio Code")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=AdaCore.ada"},"Ada Language Server Plugin"))),(0,n.yg)("p",null,"Make a ",(0,n.yg)("inlineCode",{parentName:"p"},"workspace.code-workspace")," in your project folder with the name of your gpr file."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "folders": [\n    {\n      "path": "."\n    }\n  ],\n  "settings": {\n    "ada.projectFile": "my_project_name.gpr"\n  }\n}\n')),(0,n.yg)("p",null,"Set Alire to look for a workspace.code-workspace in whatever directory you're\ntrying to open."),(0,n.yg)(l.A,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.yg)(o.A,{value:"win",label:"Windows",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'alr config --set editor.cmd "code workspace.code-workspace"\n'))),(0,n.yg)(o.A,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'alr config --set editor.cmd "code workspace.code-workspace"\n'))),(0,n.yg)(o.A,{value:"mac",label:"macOS",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'alr config --set editor.cmd "/Applications/VisualStudioCode.app/Contents/Resources/app/bin/code workspace.code-workspace"\n')))),(0,n.yg)("p",null,"As long as you make a workspace file, you can now edit your projects with:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"alr edit\n")),(0,n.yg)("h3",{id:"vim"},"Vim"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/krischik/vim-ada"},"Ada Bundle")," - A set of plugins for\nusing Ada with VIM.")),(0,n.yg)("h3",{id:"emacs"},"Emacs"),(0,n.yg)("p",null,"Install the ",(0,n.yg)("inlineCode",{parentName:"p"},"ada-mode")," extension from ",(0,n.yg)("a",{parentName:"p",href:"https://elpa.gnu.org/packages/ada-mode.html"},"GNU ELPA"),"."),(0,n.yg)("p",null,"Set Alire to use Emacs when invoking ",(0,n.yg)("inlineCode",{parentName:"p"},"alr edit"),":"),(0,n.yg)(l.A,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.yg)(o.A,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"alr config --set --global editor.cmd 'emacs --eval=(ada-build-prompt-select-prj-file\"${GPR_FILE}\") ${GPR_FILE}'\n"))),(0,n.yg)(o.A,{value:"mac",label:"macOS",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"alr config --set editor.cmd 'open -n -a emacs ${GPR_FILE}'\n")),(0,n.yg)("p",null,"Note, you still need to find one of the project's Ada source files and then select the relevant GPR file. Investigations continue."))))}y.isMDXComponent=!0}}]);