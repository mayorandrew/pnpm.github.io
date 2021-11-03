"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1163],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3914:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>c,toc:()=>s,default:()=>m});var r=n(98),o=n(6862),a=(n(9496),n(9613)),p=["components"],l={id:"completion",title:"\u547d\u4ee4\u884c tab \u81ea\u52a8\u8865\u5168\u3002"},i=void 0,c={unversionedId:"completion",id:"version-6.x/completion",isDocsHomePage:!1,title:"\u547d\u4ee4\u884c tab \u81ea\u52a8\u8865\u5168\u3002",description:"Added in: v4.9.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/completion.md",sourceDirName:".",slug:"/completion",permalink:"/zh/completion",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"completion",title:"\u547d\u4ee4\u884c tab \u81ea\u52a8\u8865\u5168\u3002"},sidebar:"version-6.x/docs",previous:{title:"\u522b\u540d",permalink:"/zh/aliases"},next:{title:"\u5728pnpm\u4e2d\u4f7f\u7528Changesets",permalink:"/zh/using-changesets"}},s=[],u={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Added in: v4.9.0"),(0,a.kt)("p",null,"\u4e0e\u5176\u4ed6\u901a\u5e38\u9700\u8981\u63d2\u4ef6\u7684\u6d41\u884c\u5305\u7ba1\u7406\u5668\u4e0d\u540c\uff0cpnpm \u652f\u6301 Bash\u3001Zsh\u3001Fish \u548c\u7c7b\u4f3c shell \u7684\u547d\u4ee4\u884c\u5236\u8868\u7b26\u8865\u5168\u3002"),(0,a.kt)("p",null,"\u8981\u8bbe\u7f6e\u81ea\u52a8\u8865\u5168\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion\n")),(0,a.kt)("p",null,"CLI \u5c06\u8be2\u95ee\u751f\u6210\u81ea\u52a8\u5b8c\u6210\u811a\u672c\u7684 shell\u3002 \u6216\u8005\uff0c\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u4e2d\u6307\u5b9a\u76ee\u6807 shell\uff08\u81ea v5.15.0 \u8d77\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion zsh\n")),(0,a.kt)("p",null,"\u8981\u67e5\u770b\u8865\u5168\u793a\u4f8b\uff0c\u8bf7\u9605\u8bfb ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4"},"\u8fd9\u7bc7\u6587\u7ae0"),"\u3002"))}m.isMDXComponent=!0}}]);