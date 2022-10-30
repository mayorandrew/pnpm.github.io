"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9834],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>s});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=l(r),s=a,h=m["".concat(c,".").concat(s)]||m[s]||u[s]||i;return r?n.createElement(h,p(p({ref:t},d),{},{components:r})):n.createElement(h,p({ref:t},d))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},662:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(2962),a=r(2742),i=(r(9496),r(9613)),p=["components"],o={id:"patch",title:"pnpm patch <pkg>"},c=void 0,l={unversionedId:"cli/patch",id:"version-7.x/cli/patch",title:"pnpm patch <pkg>",description:"\u6dfb\u52a0\u4e8e\uff1av7.4.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-7.x/cli/patch.md",sourceDirName:"cli",slug:"/cli/patch",permalink:"/zh/cli/patch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"7.x",frontMatter:{id:"patch",title:"pnpm patch <pkg>"},sidebar:"version-7.x/docs",previous:{title:"pnpm install-test",permalink:"/zh/cli/install-test"},next:{title:"pnpm patch-commit <path>",permalink:"/zh/cli/patch-commit"}},d={},u=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"--edit-dir &lt;dir&gt;",id:"--edit-dir-dir",level:3}],m={toc:u};function s(e){var t=e.components,r=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av7.4.0"),(0,i.kt)("p",null,"Prepare a package for patching (inspired by a similar command in Yarn)."),(0,i.kt)("p",null,"This command will cause a package to be extracted in a temporary directory intended to be editable at will."),(0,i.kt)("p",null,"Once you're done with your changes, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm patch-commit <path>")," (with ",(0,i.kt)("inlineCode",{parentName:"p"},"<path>")," being the temporary directory you received) to generate a patchfile and register it into your top-level manifest via the ",(0,i.kt)("a",{parentName:"p",href:"/zh/package_json#pnpmpatcheddependencies"},(0,i.kt)("inlineCode",{parentName:"a"},"patchedDependencies"))," field."),(0,i.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm patch <pkg name>@<version>\n")),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/0GjLqRGRbcY",title:"The pnpm patch command demo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,i.kt)("h3",{id:"--edit-dir-dir"},"--edit-dir ","<","dir>"),(0,i.kt)("p",null,"Added in v7.11.0"),(0,i.kt)("p",null,"The package that needs to be patched will be extracted to this directory."))}s.isMDXComponent=!0}}]);