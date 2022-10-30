"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7614],{9613:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(9496);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),l=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(a.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,p=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(r),f=o,d=s["".concat(a,".").concat(f)]||s[f]||m[f]||p;return r?t.createElement(d,i(i({ref:n},u),{},{components:r})):t.createElement(d,i({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=r.length,i=new Array(p);i[0]=s;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<p;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6338:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var t=r(2962),o=r(2742),p=(r(9496),r(9613)),i=["components"],c={id:"configuring",title:"\u8a2d\u5b9a"},a=void 0,l={unversionedId:"configuring",id:"version-7.x/configuring",title:"\u8a2d\u5b9a",description:"pnpm \u4f7f\u7528 npm \u7684\u8a2d\u5b9a\u683c\u5f0f\u3002 \u56e0\u6b64\uff0c\u60a8\u61c9\u8a72\u4ee5\u8207 npm \u76f8\u540c\u7684\u65b9\u5f0f\u9032\u884c\u8a2d\u5b9a\u3002 \u4f8b\u5982\uff0c",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-7.x/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/zh-TW/configuring",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"7.x",frontMatter:{id:"configuring",title:"\u8a2d\u5b9a"},sidebar:"version-7.x/docs",previous:{title:"pnpm CLI",permalink:"/zh-TW/pnpm-cli"},next:{title:"\u7be9\u9078",permalink:"/zh-TW/filtering"}},u={},m=[],s={toc:m};function f(e){var n=e.components,r=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"pnpm \u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"},"npm \u7684\u8a2d\u5b9a"),"\u683c\u5f0f\u3002 \u56e0\u6b64\uff0c\u60a8\u61c9\u8a72\u4ee5\u8207 npm \u76f8\u540c\u7684\u65b9\u5f0f\u9032\u884c\u8a2d\u5b9a\u3002 \u4f8b\u5982\uff0c"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm config set store-dir /path/to/.pnpm-store\n")),(0,p.kt)("p",null,"\u5982\u679c\u6c92\u6709\u8a2d\u5b9a\u5b58\u653e\u5340\uff0c\u90a3\u9ebc pnpm \u5c07\u6703\u81ea\u52d5\u65bc\u76f8\u540c\u7684\u78c1\u789f\u6a5f\u4e0a\u5efa\u7acb\u5b58\u653e\u5340\u3002 \u5982\u679c\u60a8\u9700\u8981 pnpm \u5728\u591a\u500b\u786c\u789f\u6216\u6a94\u6848\u7cfb\u7d71\u4e0a\u5de5\u4f5c\uff0c\u8acb\u95b1\u8b80",(0,p.kt)("a",{parentName:"p",href:"/zh-TW/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"\u5e38\u898b\u554f\u984c\u96c6"),"\u3002"),(0,p.kt)("p",null,"\u6b64\u5916\uff0cpnmp \u4f7f\u7528\u7684\u8a2d\u5b9a\u8207 npm \u7528\u65bc\u57f7\u884c\u5b89\u88dd\u7684\u8a2d\u5b9a\u76f8\u540c\u3002 \u5982\u679c\u60a8\u6709\u79c1\u4eba\u767b\u9304\u6a94\uff0c\u4e14 npm \u8a2d\u5b9a\u70ba\u4f7f\u7528\u79c1\u4eba\u767b\u9304\u6a94\u5de5\u4f5c\uff0c\u5247 pnpm \u4e5f\u61c9\u8a72\u80fd\u5920\u6388\u6b0a\u8981\u6c42\uff0c\u800c\u7121\u9700\u5176\u4ed6\u8a2d\u5b9a\u3002"),(0,p.kt)("p",null,"\u9664\u4e86\u9019\u4e9b\u9078\u9805\u4e4b\u5916\uff0cpnpm \u9084\u5141\u8a31\u60a8\u4f7f\u7528\u6240\u6709\u65d7\u6a19\u53c3\u6578 (\u4f8b\u5982 ",(0,p.kt)("inlineCode",{parentName:"p"},"--filter")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency"),") \u4f5c\u70ba\u9078\u9805:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @my-scope/*\n")),(0,p.kt)("p",null,"\u5982\u9700\u8a73\u7d30\u8cc7\u8a0a\uff0c\u8acb\u53c3\u95b1 ",(0,p.kt)("a",{parentName:"p",href:"/zh-TW/cli/config"},(0,p.kt)("inlineCode",{parentName:"a"},"config")," \u547d\u4ee4"),"\u3002"))}f.isMDXComponent=!0}}]);