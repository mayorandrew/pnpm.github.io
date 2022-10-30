"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4340],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(2962),o=n(2742),a=(n(9496),n(9613)),p=["components"],i={id:"completion",title:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3 Tab \u88dc\u5b8c"},c=void 0,l={unversionedId:"completion",id:"version-6.x/completion",title:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3 Tab \u88dc\u5b8c",description:"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av4.9.0",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-6.x/completion.md",sourceDirName:".",slug:"/completion",permalink:"/ja/6.x/completion",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"6.x",frontMatter:{id:"completion",title:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3 Tab \u88dc\u5b8c"},sidebar:"version-6.x/docs",previous:{title:"\u30a8\u30a4\u30ea\u30a2\u30b9",permalink:"/ja/6.x/aliases"},next:{title:"pnpm \u3068 Changesets \u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3059\u308b",permalink:"/ja/6.x/using-changesets"}},s={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av4.9.0"),(0,a.kt)("p",null,"\u901a\u5e38\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u5fc5\u8981\u3068\u3059\u308b\u4ed6\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3068\u306f\u7570\u306a\u308a\u3001pnpm \u306f Bash, Zsh, Fish, \u307e\u305f\u3053\u308c\u3089\u3068\u540c\u69d8\u306e\u30b7\u30a7\u30eb\u306e\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3 Tab \u88dc\u5b8c\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u81ea\u52d5\u88dc\u5b8c\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u306b\u306f\u3001\u6b21\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion\n")),(0,a.kt)("p",null,"CLI \u306f\u81ea\u52d5\u88dc\u5b8c\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u751f\u6210\u3059\u308b\u30b7\u30a7\u30eb\u306e\u5165\u529b\u3092\u8981\u6c42\u3057\u307e\u3059\u3002 \u3042\u308b\u3044\u306f\u3001\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u3067\u30b7\u30a7\u30eb\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059 (v5.15.0 \u4ee5\u964d) \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion zsh\n")),(0,a.kt)("p",null,"\u88dc\u5b8c\u306e\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4"},"\u3053\u3061\u3089\u306e\u8a18\u4e8b")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}f.isMDXComponent=!0}}]);