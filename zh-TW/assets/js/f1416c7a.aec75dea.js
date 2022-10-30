"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(9496);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=r.createContext({}),i=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(n),s=p,f=m["".concat(o,".").concat(s)]||m[s]||d[s]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function s(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:p,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=n(2962),p=n(2742),a=(n(9496),n(9613)),l=["components"],c={id:"dlx",title:"pnpm dlx"},o=void 0,i={unversionedId:"cli/dlx",id:"cli/dlx",title:"pnpm dlx",description:"\u5f9e\u5957\u4ef6\u5eab\u6293\u53d6\u5957\u4ef6\uff0c\u7136\u4e0d\u5c07\u5176\u5b89\u88dd\u70ba\u4f9d\u9644\u5957\u4ef6\uff0c\u76f4\u63a5\u8f09\u5165\u4e26\u57f7\u884c\u5176\u63d0\u4f9b\u7684\u9810\u8a2d\u4e8c\u9032\u4f4d\u6a94\u6848\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/zh-TW/next/cli/dlx",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"current",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"docs",previous:{title:"pnpm exec",permalink:"/zh-TW/next/cli/exec"},next:{title:"pnpm create",permalink:"/zh-TW/next/cli/create"}},u={},d=[{value:"\u9078\u9805",id:"\u9078\u9805",level:2},{value:"--package &lt;\u5957\u4ef6\u540d\u7a31&gt;",id:"--package-\u5957\u4ef6\u540d\u7a31",level:3},{value:"--silent, -s",id:"--silent--s",level:3}],m={toc:d};function s(e){var t=e.components,n=(0,p.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f9e\u5957\u4ef6\u5eab\u6293\u53d6\u5957\u4ef6\uff0c\u7136\u4e0d\u5c07\u5176\u5b89\u88dd\u70ba\u4f9d\u9644\u5957\u4ef6\uff0c\u76f4\u63a5\u8f09\u5165\u4e26\u57f7\u884c\u5176\u63d0\u4f9b\u7684\u9810\u8a2d\u4e8c\u9032\u4f4d\u6a94\u6848\u3002"),(0,a.kt)("p",null,"\u8209\u4f8b\u800c\u8a00\uff0c\u5982\u8981\u5728\u4efb\u4f55\u4f4d\u7f6e\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," \u4f86\u521d\u59cb\u5316 React app \u5c08\u6848\uff0c\u4e14\u4e0d\u8981\u5b89\u88dd\u5728\u5176\u4ed6\u5c08\u6848\u4e2d\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,a.kt)("p",null,"\u6b64\u547d\u4ee4\u5c07\u5f9e\u5957\u4ef6\u5eab\u53d6\u5f97 ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," \u5f8c\uff0c\u4ee5\u7d66\u5b9a\u7684\u53c3\u6578\u57f7\u884c\u3002"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u6307\u5b9a\u6b32\u4f7f\u7528\u7684\u5957\u4ef6\u7248\u672c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app@next ./my-app\n")),(0,a.kt)("h2",{id:"\u9078\u9805"},"\u9078\u9805"),(0,a.kt)("h3",{id:"--package-\u5957\u4ef6\u540d\u7a31"},"--package ","<","\u5957\u4ef6\u540d\u7a31",">"),(0,a.kt)("p",null,"\u6307\u5b9a\u57f7\u884c\u6b64\u547d\u4ee4\u524d\u9700\u8981\u5148\u5b89\u88dd\u7684\u5957\u4ef6\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u6307\u5b9a\u591a\u500b\u5957\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")),(0,a.kt)("h3",{id:"--silent--s"},"--silent, -s"),(0,a.kt)("p",null,"\u53ea\u5370\u51fa\u57f7\u884c\u547d\u4ee4\u6642\u8f38\u51fa\u7684\u5167\u5bb9\u3002"))}s.isMDXComponent=!0}}]);