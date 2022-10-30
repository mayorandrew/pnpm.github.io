"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7825],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=p,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:p,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(2962),p=n(2742),o=(n(9496),n(9613)),a=["components"],l={id:"store",title:"pnpm store"},i=void 0,c={unversionedId:"cli/store",id:"version-6.x/cli/store",title:"pnpm store",description:"\u30d1\u30c3\u30b1\u30fc\u30b8 \u30b9\u30c8\u30a2\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-6.x/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/ja/6.x/cli/store",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"6.x",frontMatter:{id:"store",title:"pnpm store"},sidebar:"version-6.x/docs",previous:{title:"pnpm server",permalink:"/ja/6.x/cli/server"},next:{title:"pnpm root",permalink:"/ja/6.x/cli/root"}},u={},s=[{value:"\u30b3\u30de\u30f3\u30c9",id:"\u30b3\u30de\u30f3\u30c9",level:2},{value:"status",id:"status",level:3},{value:"add",id:"add",level:3},{value:"prune",id:"prune",level:3},{value:"path",id:"path",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,p.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8 \u30b9\u30c8\u30a2\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u30b3\u30de\u30f3\u30c9"},"\u30b3\u30de\u30f3\u30c9"),(0,o.kt)("h3",{id:"status"},"status"),(0,o.kt)("p",null,"\u30b9\u30c8\u30a2\u5185\u306e\u5909\u66f4\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u5185\u5bb9\u304c\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5c55\u958b\u3057\u305f\u3068\u304d\u3068\u540c\u4e00\u306e\u5834\u5408\u3001\u7d42\u4e86\u30b3\u30fc\u30c90\u3067\u7d42\u4e86\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"add"},"add"),(0,o.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.12.0"),(0,o.kt)("p",null,"\u6a5f\u80fd\u7684\u306b\u306f",(0,o.kt)("a",{parentName:"p",href:"/ja/6.x/cli/add"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm add")),"\u3068\u540c\u7b49\u3067\u3059\u304c\u3001\u30b9\u30c8\u30a2\u5916\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3084\u30d5\u30a1\u30a4\u30eb\u3092\u5909\u66f4\u305b\u305a\u3001\u76f4\u63a5\u30b9\u30c8\u30a2\u306b\u65b0\u3057\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"prune"},"prune"),(0,o.kt)("p",null,"\u30b9\u30c8\u30a2\u304b\u3089",(0,o.kt)("em",{parentName:"p"},"\u672a\u53c2\u7167\u306e\u30d1\u30c3\u30b1\u30fc\u30b8"),"\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u672a\u53c2\u7167\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u4e0a\u306e\u3069\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u3082\u4f7f\u7528\u3055\u308c\u3066\u3044\u306a\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u3053\u3068\u3067\u3059\u3002 \u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u3001\u4f9d\u5b58\u95a2\u4fc2\u304c\u4e0d\u8981\u306b\u306a\u3063\u305f\u5834\u5408\u306a\u3069\u3001\u307b\u3068\u3093\u3069\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u64cd\u4f5c\u306e\u5f8c\u306b\u53c2\u7167\u3055\u308c\u306a\u304f\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u4f8b\u3048\u3070\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u4e2d\u306b\u3001\u30d1\u30c3\u30b1\u30fc\u30b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u304c ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.1")," \u306b\u66f4\u65b0\u3055\u308c\u305f\u3068\u3057\u307e\u3059\u3002 pnpm \u306f\u81ea\u52d5\u7684\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u306a\u3044\u306e\u3067\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u306f\u30b9\u30c8\u30a2\u306b\u6b8b\u308a\u307e\u3059\u3002 \u30d1\u30c3\u30b1\u30fc\u30b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u304c\u30b7\u30b9\u30c6\u30e0\u4e0a\u306e\u4ed6\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u53c2\u7167\u3055\u308c\u306a\u304f\u306a\u308a\u307e\u3059\u3002 ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," \u3092\u5b9f\u884c\u3059\u308b\u3068\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u304c\u30b9\u30c8\u30a2\u304b\u3089\u524a\u9664\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," \u306e\u5b9f\u884c\u306f\u5b89\u5168\u3067\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u526f\u4f5c\u7528\u3092\u4e0e\u3048\u307e\u305b\u3093\u3002 \u4eca\u5f8c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u969b\u306b\u524a\u9664\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u5fc5\u8981\u306b\u306a\u3063\u305f\u5834\u5408\u3001pnpm \u306f\u305d\u308c\u3089\u3092\u518d\u3073\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," \u3092\u6642\u3005\u5b9f\u884c\u3057\u3066\u30b9\u30c8\u30a2\u3092\u304d\u308c\u3044\u306b\u3059\u308b\u306e\u304c\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3067\u3059\u304c\u3001\u3042\u307e\u308a\u983b\u7e41\u306b\u306f\u5b9f\u884c\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002 \u6642\u3005\u3001\u53c2\u7167\u3055\u308c\u3066\u3044\u306a\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u518d\u3073\u5fc5\u8981\u306b\u306a\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u306f\u30d6\u30e9\u30f3\u30c1\u3092\u5207\u308a\u66ff\u3048\u3066\u53e4\u3044\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3068\u304d\u306b\u8d77\u3053\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u3001pnpm \u306f\u524a\u9664\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u3059\u3079\u3066\u518d\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30d7\u30ed\u30bb\u30b9\u304c\u4e00\u6642\u7684\u306b\u9045\u304f\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u306a\u304a\u3001",(0,o.kt)("a",{parentName:"p",href:"/ja/6.x/cli/server"},"store server"),"\u304c\u7a3c\u50cd\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u7981\u6b62\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"path"},"path"),(0,o.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av6.10.0"),(0,o.kt)("p",null,"\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u30b9\u30c8\u30a2\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u30d1\u30b9\u3092\u8fd4\u3057\u307e\u3059\u3002"))}m.isMDXComponent=!0}}]);