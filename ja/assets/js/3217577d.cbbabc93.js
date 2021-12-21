"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8390],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3401:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>l,toc:()=>s,default:()=>m});var n=r(9518),a=r(7344),o=(r(9496),r(9613)),i=["components"],p={id:"start",title:"pnpm start"},c=void 0,l={unversionedId:"cli/start",id:"cli/start",title:"pnpm start",description:"\u5225\u540d: run start",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/start.md",sourceDirName:"cli",slug:"/cli/start",permalink:"/ja/next/cli/start",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"start",title:"pnpm start"},sidebar:"docs",previous:{title:"pnpm create",permalink:"/ja/next/cli/create"},next:{title:"pnpm env <cmd>",permalink:"/ja/next/cli/env"}},s=[],u={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5225\u540d: ",(0,o.kt)("inlineCode",{parentName:"p"},"run start")),(0,o.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e",(0,o.kt)("inlineCode",{parentName:"p"},"scripts"),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e",(0,o.kt)("inlineCode",{parentName:"p"},"start"),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u6307\u5b9a\u3055\u308c\u305f\u4efb\u610f\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts"),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b",(0,o.kt)("inlineCode",{parentName:"p"},"start"),"\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u306a\u3044\u3068\u304d\u306f\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"node server.js"),"\u306e\u5b9f\u884c\u3092\u8a66\u307f\u307e\u3059\u3002node\u3084server.js\u306e\u3069\u3061\u3089\u3082\u5b58\u5728\u3057\u306a\u3044\u3068\u304d\u306f\u3001\u5931\u6557\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"start\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u3042\u306a\u305f\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u958b\u59cb\u3059\u308b\u30b3\u30de\u30f3\u30c9\u3092\u6307\u5b9a\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"))}m.isMDXComponent=!0}}]);