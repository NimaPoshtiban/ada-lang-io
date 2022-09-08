"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[7964],{4970:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>A,contentTitle:()=>m,default:()=>y,frontMatter:()=>f,metadata:()=>p,toc:()=>k});var n=a(1716),r=a(9464),i=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&c(e,a,t[a]);if(s)for(var a of s(t))d.call(t,a)&&c(e,a,t[a]);return e};const f={sidebar_position:80},m="9.9 Task and Entry Attributes",p={unversionedId:"arm/AA-9/AA-9.9",id:"arm/AA-9/AA-9.9",title:"9.9 Task and Entry Attributes",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-9/AA-9.9.mdx",sourceDirName:"arm/AA-9",slug:"/arm/AA-9/AA-9.9",permalink:"/docs/arm/AA-9/AA-9.9",draft:!1,tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"referenceManualSidebar",previous:{title:"9.8 Abort of a Task - Abort of a Sequence of Statements",permalink:"/docs/arm/AA-9/AA-9.8"},next:{title:"9.10 Shared Variables",permalink:"/docs/arm/AA-9/AA-9.10"}},A={},k=[{value:"Dynamic Semantics",id:"dynamic-semantics",level:4}],b={toc:k};function y(e){var t,a=e,{components:i}=a,c=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=h(h({},b),c),o(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h1",h({},{id:"99-task-and-entry-attributes"}),"9.9 Task and Entry Attributes"),(0,n.kt)("admonition",h({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,n.kt)("a",h({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,n.kt)("h4",h({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,n.kt)("p",null,"For a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.1#S0093"},"prefix"))," T that is of a task type [(after any implicit dereference)], the following attributes are defined: "),(0,n.kt)("p",null,"T'CallableYields the value True when the task denoted by T is ",(0,n.kt)("em",null,"callable"),", and False otherwise; a task is callable unless it is completed or abnormal. The value of this attribute is of the predefined type Boolean."),(0,n.kt)("p",null,"T'TerminatedYields the value True if the task denoted by T is terminated, and False otherwise. The value of this attribute is of the predefined type Boolean. "),(0,n.kt)("p",null,"For a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.1#S0093"},"prefix"))," E that denotes an entry of a task or protected unit, the following attribute is defined. This attribute is only allowed within the body of the task or protected unit, but excluding, in the case of an entry of a task unit, within any program unit that is, itself, inner to the body of the task unit. "),(0,n.kt)("p",null,"E'CountYields the number of calls presently queued on the entry E of the current instance of the unit. The value of this attribute is of the type ",(0,n.kt)("em",null,"universal_integer"),"."),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,n.kt)("p",null,"NOTE 1   For the Count attribute, the entry can be either a single entry or an entry of a family. The name of the entry or entry family can be either a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.1#S0092"},"direct_name"))," or an expanded name.")),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,n.kt)("p",null,"NOTE 2   ","{",(0,n.kt)("em",null,"AI12-0442-1"),"}"," Within task units, by interrogating the attribute E'Count an algorithm can allow for the increase of the value of this attribute for incoming entry calls, and its decrease, for example with ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0276"},"timed_entry_call")),"s. A ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0279"},"conditional_entry_call"))," can also briefly increase this value, even if the conditional call is not accepted.")),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,n.kt)("p",null,"NOTE 3   ","{",(0,n.kt)("em",null,"AI12-0442-1"),"}"," Within protected units, by interrogating the attribute E'Count in the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.5#S0262"},"entry_barrier"))," for the entry E an algorithm can allow for the evaluation of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.5#S0150"},"condition"))," of the barrier both before and after queuing a given caller. ")))}y.isMDXComponent=!0}}]);