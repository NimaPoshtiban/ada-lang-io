"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[7237],{61816:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>b,contentTitle:()=>u,default:()=>f,frontMatter:()=>m,metadata:()=>h,toc:()=>k});var t=r(91716),i=Object.defineProperty,n=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,a,r)=>a in e?i(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,d=(e,a)=>{for(var r in a||(a={}))l.call(a,r)&&c(e,r,a[r]);if(o)for(var r of o(a))p.call(a,r)&&c(e,r,a[r]);return e};const m={sidebar_position:3},u="Alire vs Apple silicon",h={unversionedId:"learn/getting-started/macos-issues/alire-vs-aarch64",id:"learn/getting-started/macos-issues/alire-vs-aarch64",title:"Alire vs Apple silicon",description:"Alire releases available from the Alire website are all built for Intel silicon. For pure Ada work, this has no effect, whether or not you're working on Apple silicon.",source:"@site/docs/learn/getting-started/macos-issues/alire-vs-aarch64.md",sourceDirName:"learn/getting-started/macos-issues",slug:"/learn/getting-started/macos-issues/alire-vs-aarch64",permalink:"/docs/learn/getting-started/macos-issues/alire-vs-aarch64",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Alire",permalink:"/docs/learn/getting-started/macos-issues/alire"},next:{title:"Crates for macOS",permalink:"/docs/learn/getting-started/macos-issues/crates"}},b={},k=[],w={toc:k};function f(e){var a,r=e,{components:i}=r,c=((e,a)=>{var r={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&o)for(var t of o(e))a.indexOf(t)<0&&p.call(e,t)&&(r[t]=e[t]);return r})(r,["components"]);return(0,t.kt)("wrapper",(a=d(d({},w),c),n(a,s({components:i,mdxType:"MDXLayout"}))),(0,t.kt)("h1",d({},{id:"alire-vs-apple-silicon"}),"Alire vs Apple silicon"),(0,t.kt)("p",null,"Alire releases available from the ",(0,t.kt)("a",d({parentName:"p"},{href:"https://github.com/alire-project/alire/releases"}),"Alire website")," are all built for Intel silicon. For pure Ada work, this has no effect, whether or not you're working on Apple silicon."),(0,t.kt)("p",null,"One area where there's a considerable impact is when your work involves \"",(0,t.kt)("a",d({parentName:"p"},{href:"https://alire.ada.dev/docs/#external-releases"}),"external releases"),'". These are external libraries which Alire manages as required using your system\'s "package manager". An example is the crate ',(0,t.kt)("inlineCode",{parentName:"p"},"sdlada"),", which depends on ",(0,t.kt)("inlineCode",{parentName:"p"},"libsdl2")," amongst others. On a Debian system, Alire will load the package ",(0,t.kt)("inlineCode",{parentName:"p"},"libsdl2-dev"),"; on macOS with Homebrew, ",(0,t.kt)("inlineCode",{parentName:"p"},"sdl2"),"."),(0,t.kt)("p",null,"For macOS, the package managers supported are ",(0,t.kt)("a",d({parentName:"p"},{href:"https://brew.sh"}),"Homebrew")," and ",(0,t.kt)("a",d({parentName:"p"},{href:"https://www.macports.org"}),"MacPorts")," - if you have both installed (not really recommended) Alire will choose Homebrew. Homebrew is the one that this page concentrates on."),(0,t.kt)("p",null,"If yours is an ",(0,t.kt)("inlineCode",{parentName:"p"},"x86_64")," Mac, Homebrew will load ",(0,t.kt)("inlineCode",{parentName:"p"},"x86_64")," binaries under ",(0,t.kt)("inlineCode",{parentName:"p"},"/usr/local/"),". If it's an ",(0,t.kt)("inlineCode",{parentName:"p"},"aarch64")," Mac, Homebrew will load ",(0,t.kt)("inlineCode",{parentName:"p"},"aarch64")," binaries under ",(0,t.kt)("inlineCode",{parentName:"p"},"/opt/homebrew/")," (this is by default; trying to mix architectures is likely to be at best confusing)."),(0,t.kt)("p",null,"So, if you're on an ",(0,t.kt)("inlineCode",{parentName:"p"},"aarch64")," Mac with an ",(0,t.kt)("inlineCode",{parentName:"p"},"x86_64")," GNAT compiler, you won't be able to use external libraries, because the linker will refuse to link your ",(0,t.kt)("inlineCode",{parentName:"p"},"x86_64")," binaries with Homebrew's ",(0,t.kt)("inlineCode",{parentName:"p"},"aarch64")," ones."))}f.isMDXComponent=!0}}]);