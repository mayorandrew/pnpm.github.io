"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1412],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var n=r(9496);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),s=p,f=m["".concat(o,".").concat(s)]||m[s]||d[s]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function s(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:p,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6689:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=r(2962),p=r(2742),a=(r(9496),r(9613)),i=["components"],c={id:"patch",title:"pnpm patch <pkg>"},o=void 0,l={unversionedId:"cli/patch",id:"cli/patch",title:"pnpm patch <pkg>",description:"\u65b0\u589e\u65bc\uff1av7.4.0",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/cli/patch.md",sourceDirName:"cli",slug:"/cli/patch",permalink:"/zh-TW/next/cli/patch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"current",frontMatter:{id:"patch",title:"pnpm patch <pkg>"},sidebar:"docs",previous:{title:"pnpm install-test",permalink:"/zh-TW/next/cli/install-test"},next:{title:"pnpm patch-commit <path>",permalink:"/zh-TW/next/cli/patch-commit"}},u={},d=[{value:"\u9078\u9805",id:"\u9078\u9805",level:2},{value:"--edit-dir &lt;dir&gt;",id:"--edit-dir-dir",level:3}],m={toc:d};function s(e){var t=e.components,r=(0,p.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u65b0\u589e\u65bc\uff1av7.4.0"),(0,a.kt)("p",null,"\u70ba\u4fee\u88dc\u7a0b\u5e8f\u6e96\u5099\u5957\u4ef6 (\u5f9e Yarn \u4e2d\u985e\u4f3c\u7684\u547d\u4ee4\u6fc0\u767c)\u3002"),(0,a.kt)("p",null,"\u9019\u500b\u547d\u4ee4\u5c07\u6703\u9020\u6210\u5957\u4ef6\u5728\u8a2d\u8a08\u70ba\u53ef\u7de8\u8f2f\u7684\u81e8\u6642\u76ee\u9304\u4e2d\u88ab\u58d3\u7e2e\u3002"),(0,a.kt)("p",null,"\u5728\u60a8\u5b8c\u6210\u8b8a\u66f4\u4e4b\u5f8c\uff0c\u8acb\u57f7\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm patch-commit <path>")," (\u9700\u5c07 ",(0,a.kt)("inlineCode",{parentName:"p"},"<path>")," \u8a2d\u70ba\u60a8\u63a5\u6536\u5230\u7684\u81e8\u6642\u76ee\u9304) \u4f86\u7522\u751f\u4e00\u500b\u4fee\u88dc\u6a94\uff0c\u4e26\u900f\u904e ",(0,a.kt)("a",{parentName:"p",href:"/zh-TW/next/package_json#pnpmpatcheddependencies"},(0,a.kt)("inlineCode",{parentName:"a"},"patchedDependencies"))," \u6b04\u4f4d\u5c07\u5176\u8a3b\u518a\u5230\u6700\u4e0a\u5c64\u8cc7\u8a0a\u6e05\u55ae\u4e2d\u3002"),(0,a.kt)("p",null,"\u547d\u4ee4\u7528\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm patch <pkg name>@<version>\n")),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/0GjLqRGRbcY",title:"pnpm \u4fee\u88dc\u6a94\u547d\u4ee4\u793a\u7bc4",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"\u9078\u9805"},"\u9078\u9805"),(0,a.kt)("h3",{id:"--edit-dir-dir"},"--edit-dir ","<","dir>"),(0,a.kt)("p",null,"\u65b0\u589e\u65bc v7.11.0"),(0,a.kt)("p",null,"\u9700\u8981\u4fee\u88dc\u7684\u5957\u4ef6\u6703\u88ab\u89e3\u58d3\u5230\u9019\u500b\u8cc7\u6599\u593e\u4e0b\u3002"))}s.isMDXComponent=!0}}]);