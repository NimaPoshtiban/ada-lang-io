"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[4746],{63074:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=i(74848),s=i(28453);const a={title:"10. Improving Performance",sidebar_position:10},o=void 0,r={id:"style-guide/s10/s10",title:"10. Improving Performance",description:"In many ways, performance is at odds with maintainability and",source:"@site/docs/style-guide/s10/s10.mdx",sourceDirName:"style-guide/s10",slug:"/style-guide/s10/",permalink:"/docs/style-guide/s10/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"10. Improving Performance",sidebar_position:10},sidebar:"styleGuideSidebar",previous:{title:"9.6 Summary",permalink:"/docs/style-guide/s9/06"},next:{title:"10.1 Performance Issues",permalink:"/docs/style-guide/s10/01"}},d={},c=[];function l(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In many ways, performance is at odds with maintainability and\nportability. To achieve improved speed or memory usage, the most clear\nalgorithm sometimes gives way to confusing code. To exploit special\npurpose hardware or operating system services, non-portable\nimplementation dependencies are introduced. When concerned about\nperformance, you must decide how well each algorithm meets its\nperformance and maintainability goals. Use the guidelines in this\nchapter with care; they may be hazardous to your software."}),"\n",(0,n.jsx)(t.p,{children:"The best way to build a system that satisfies its performance\nrequirements is through good design. You should not assume that speeding\nup your code will result in a visible increase in system execution. In\nmost applications, the overall throughput of the system is not defined\nby the execution speed of the code but by the interaction between\nconcurrent processes and the response time of the system peripherals."}),"\n",(0,n.jsx)(t.p,{children:'Most of the guidelines in this chapter read "... when measured\nperformance indicates." "Indicates" means that you have determined that\nthe benefit in increased performance to your application in your\nenvironment outweighs the negative side effects on understandability,\nmaintainability, and portability of the resulting code. Many of the\nguideline examples show the alternatives that you will need to measure\nin order to determine if the guideline is indicated.'})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);