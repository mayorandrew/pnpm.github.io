"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6518],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=l(n),u=a,h=s["".concat(c,".").concat(u)]||s[u]||m[u]||i;return n?r.createElement(h,p(p({ref:t},d),{},{components:n})):r.createElement(h,p({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(2962),a=n(2742),i=(n(9496),n(9613)),p=["components"],o={id:"patch",title:"pnpm patch <pkg>"},c=void 0,l={unversionedId:"cli/patch",id:"cli/patch",title:"pnpm patch <pkg>",description:"Added in: v7.4.0",source:"@site/docs/cli/patch.md",sourceDirName:"cli",slug:"/cli/patch",permalink:"/next/cli/patch",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/patch.md",tags:[],version:"current",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1662372062,formattedLastUpdatedAt:"Sep 5, 2022",frontMatter:{id:"patch",title:"pnpm patch <pkg>"},sidebar:"docs",previous:{title:"pnpm install-test",permalink:"/next/cli/install-test"},next:{title:"pnpm patch-commit <path>",permalink:"/next/cli/patch-commit"}},d={},m=[{value:"Options",id:"options",level:2},{value:"--edit-dir &lt;dir&gt;",id:"--edit-dir-dir",level:3}],s={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Added in: v7.4.0"),(0,i.kt)("p",null,"Prepare a package for patching (inspired by a similar command in Yarn)."),(0,i.kt)("p",null,"This command will cause a package to be extracted in a temporary directory intended to be editable at will."),(0,i.kt)("p",null,"Once you're done with your changes, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm patch-commit <path>")," (with ",(0,i.kt)("inlineCode",{parentName:"p"},"<path>")," being the temporary directory you received) to generate a patchfile and register it into your top-level manifest via the ",(0,i.kt)("a",{parentName:"p",href:"/next/package_json#pnpmpatcheddependencies"},(0,i.kt)("inlineCode",{parentName:"a"},"patchedDependencies"))," field."),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm patch <pkg name>@<version>\n")),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/0GjLqRGRbcY",title:"The pnpm patch command demo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--edit-dir-dir"},"--edit-dir ","<","dir>"),(0,i.kt)("p",null,"Added in v7.11.0"),(0,i.kt)("p",null,"The package that needs to be patched will be extracted to this directory."))}u.isMDXComponent=!0}}]);