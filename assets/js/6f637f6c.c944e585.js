"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4861],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8619:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>u});var n=r(98),a=r(6862),o=(r(9496),r(9613)),i=["components"],l={id:"store",title:"pnpm store"},s=void 0,p={unversionedId:"cli/store",id:"version-6.x/cli/store",isDocsHomePage:!1,title:"pnpm store",description:"Managing the package store.",source:"@site/versioned_docs/version-6.x/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/cli/store",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-6.x/cli/store.md",tags:[],version:"6.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1629875829,formattedLastUpdatedAt:"8/25/2021",frontMatter:{id:"store",title:"pnpm store"},sidebar:"version-6.x/docs",previous:{title:"pnpm server",permalink:"/cli/server"},next:{title:"pnpm root",permalink:"/cli/root"}},c=[{value:"Commands",id:"commands",children:[{value:"status",id:"status",children:[],level:3},{value:"add",id:"add",children:[],level:3},{value:"prune",id:"prune",children:[],level:3},{value:"path",id:"path",children:[],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Managing the package store."),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("h3",{id:"status"},"status"),(0,o.kt)("p",null,"Checks for modified packages in the store."),(0,o.kt)("p",null,"Returns exit code 0 if the content of the package is the same as it was at the\ntime of unpacking."),(0,o.kt)("h3",{id:"add"},"add"),(0,o.kt)("p",null,"Added in: v2.12.0"),(0,o.kt)("p",null,"Functionally equivalent to ",(0,o.kt)("a",{parentName:"p",href:"/cli/add"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm add")),", except this adds new packages to the\nstore directly without modifying any projects or files outside of the store."),(0,o.kt)("h3",{id:"prune"},"prune"),(0,o.kt)("p",null,"Removes orphan packages from the store."),(0,o.kt)("p",null,"Pruning the store will save disk space, however may slow down future\ninstallations involving pruned packages. Ultimately, it is a safe operation,\nhowever not recommended if you have orphaned packages from a package you intend\nto reinstall."),(0,o.kt)("p",null,"Please read ",(0,o.kt)("a",{parentName:"p",href:"/faq#what-does-pnpm-store-prune-do-is-it-harmful"},"the FAQ")," for more information on unreferenced packages and best\npractices."),(0,o.kt)("p",null,"Please note that this is prohibited when a ",(0,o.kt)("a",{parentName:"p",href:"/cli/server"},"store server")," is running."),(0,o.kt)("h3",{id:"path"},"path"),(0,o.kt)("p",null,"Added in: v6.10.0"),(0,o.kt)("p",null,"Returns the path to the active store directory."))}u.isMDXComponent=!0}}]);