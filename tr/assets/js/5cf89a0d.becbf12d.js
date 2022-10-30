"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5250],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=l,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||a;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(2962),l=n(2742),a=(n(9496),n(9613)),o=["components"],i={id:"uninstall",title:"pnpm'i kald\u0131rma"},p=void 0,s={unversionedId:"uninstall",id:"uninstall",title:"pnpm'i kald\u0131rma",description:"Removing the globally installed packages",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/tr/next/uninstall",draft:!1,editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"current",frontMatter:{id:"uninstall",title:"pnpm'i kald\u0131rma"},sidebar:"docs",previous:{title:"How peers are resolved",permalink:"/tr/next/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/tr/next/pnpm-vs-npm"}},m={},c=[{value:"Removing the globally installed packages",id:"removing-the-globally-installed-packages",level:2},{value:"Removing the pnpm CLI",id:"removing-the-pnpm-cli",level:2},{value:"Removing the global content-addressable store",id:"removing-the-global-content-addressable-store",level:2}],u={toc:c};function d(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"removing-the-globally-installed-packages"},"Removing the globally installed packages"),(0,a.kt)("p",null,"Before removing the pnpm CLI, it might make sense to remove all global packages that were installed by pnpm."),(0,a.kt)("p",null,"To list all the global packages, run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". There are two ways to remove the global packages:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," with each global package listed."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," to find the location of the global directory and remove it manually.")),(0,a.kt)("h2",{id:"removing-the-pnpm-cli"},"Removing the pnpm CLI"),(0,a.kt)("p",null,"If you used the standalone script to install pnpm, then you should be able to uninstall the pnpm CLI by removing the pnpm home directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rm -rf $PNPM_HOME\n")),(0,a.kt)("p",null,"You might also want to clean the ",(0,a.kt)("inlineCode",{parentName:"p"},"PNPM_HOME")," env variable in your shell configuration file (",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.bashrc"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.config/fish/config.fish"),")."),(0,a.kt)("p",null,"If you used npm to install pnpm, then you should use npm to uninstall pnpm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,a.kt)("h2",{id:"removing-the-global-content-addressable-store"},"Removing the global content-addressable store"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rm -rf $(pnpm store path)\n")),(0,a.kt)("p",null,"If you used pnpm in non-primary disks, then you must run the above command in every disk, where pnpm was used. pnpm creates one store per disk."))}d.isMDXComponent=!0}}]);