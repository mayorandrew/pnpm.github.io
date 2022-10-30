"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9387],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=m(t),d=o,f=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var m=2;m<i;m++)a[m]=t[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8174:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>m,toc:()=>s});var r=t(2962),o=t(2742),i=(t(9496),t(9613)),a=["components"],p={id:"limitations",title:"\u5236\u9650\u4e8b\u9805"},l=void 0,m={unversionedId:"limitations",id:"version-6.x/limitations",title:"\u5236\u9650\u4e8b\u9805",description:"1. npm-shrinkwrap.json\u304a\u3088\u3073package-lock.json\u306f\u7121\u8996\u3057\u307e\u3059\u3002 npm\u306fpnpm\u3068\u9055\u3063\u3066\u3001\u540c\u3058\u540d\u524d\u3068\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8 (name@version) \u3092\u3001\u7570\u306a\u308b\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u96c6\u5408\u306b\u542b\u307e\u308c\u308b\u3082\u306e\u3068\u3057\u3066\u3001\u91cd\u8907\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002 npm\u306e\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u306f\u30d5\u30e9\u30c3\u30c8\u306anode_modules\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u53cd\u6620\u3059\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3057\u304b\u3057\u3001pnpm\u3067\u306f\u305d\u306e\u3088\u3046\u306a\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u4f5c\u6210\u3057\u306a\u3044\u306e\u3067\u3001npm \u3068\u540c\u3058\u5f62\u5f0f\u306e\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002 \u3068\u306f\u3044\u3048\u3001npm\u306e\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3092pnpm\u306e\u5f62\u5f0f\u306b\u5909\u63db\u3057\u305f\u3051\u308c\u3070\u3001pnpm import\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-6.x/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/ja/6.x/limitations",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"6.x",frontMatter:{id:"limitations",title:"\u5236\u9650\u4e8b\u9805"},sidebar:"version-6.x/docs",previous:{title:"\u30ed\u30b4",permalink:"/ja/6.x/logos"},next:{title:"\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3092\u4f7f\u7528\u3057\u305f<code>node_modules</code>\u306e\u69cb\u9020",permalink:"/ja/6.x/symlinked-node-modules-structure"}},c={},s=[],u={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json"),"\u304a\u3088\u3073",(0,i.kt)("inlineCode",{parentName:"li"},"package-lock.json"),"\u306f\u7121\u8996\u3057\u307e\u3059\u3002 npm\u306fpnpm\u3068\u9055\u3063\u3066\u3001\u540c\u3058\u540d\u524d\u3068\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8 (",(0,i.kt)("inlineCode",{parentName:"li"},"name@version"),") \u3092\u3001\u7570\u306a\u308b\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u96c6\u5408\u306b\u542b\u307e\u308c\u308b\u3082\u306e\u3068\u3057\u3066\u3001\u91cd\u8907\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002 npm\u306e\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u306f\u30d5\u30e9\u30c3\u30c8\u306a",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules"),"\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u53cd\u6620\u3059\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3057\u304b\u3057\u3001pnpm\u3067\u306f\u305d\u306e\u3088\u3046\u306a\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u4f5c\u6210\u3057\u306a\u3044\u306e\u3067\u3001npm \u3068\u540c\u3058\u5f62\u5f0f\u306e\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002 \u3068\u306f\u3044\u3048\u3001npm\u306e\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3092pnpm\u306e\u5f62\u5f0f\u306b\u5909\u63db\u3057\u305f\u3051\u308c\u3070\u3001",(0,i.kt)("a",{parentName:"li",href:"/ja/6.x/cli/import"},"pnpm import"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("li",{parentName:"ol"},"Binstub (",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),"\u306b\u914d\u7f6e\u3055\u308c\u308b\u30d5\u30a1\u30a4\u30eb) \u306f\u5e38\u306b\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u3059\u3002JavaScript \u30d5\u30a1\u30a4\u30eb\u3078\u306e\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3059\u308b\u306e\u306f\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u53ef\u80fd\u306a CLI \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u3001\u4e00\u822c\u7684\u3067\u306a\u3044\u69cb\u9020\u306e",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules"),"\u304b\u3089\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u63a2\u7d22\u3059\u308b\u306e\u3092\u652f\u63f4\u3059\u308b\u305f\u3081\u3067\u3059\u3002 \u3053\u306e\u5236\u9650\u304c\u554f\u984c\u306b\u306a\u308b\u3053\u3068\u306f\u3081\u3063\u305f\u306b\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u3042\u306a\u305f\u304cJavaScript\u30d5\u30a1\u30a4\u30eb\u3067\u3042\u308b\u3053\u3068\u3092\u671f\u5f85\u3057\u3066\u3044\u308b\u3068\u3057\u305f\u3089\u3001",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),"\u3067\u8aac\u660e\u3055\u308c\u3066\u3044\u308b\u3088\u3046\u306b\u3001\u5143\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u76f4\u63a5\u53c2\u7167\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,i.kt)("p",null,"\u3053\u308c\u3089\u306e\u554f\u984c\u306b\u5bfe\u3059\u308b\u56de\u907f\u7b56\u306b\u3064\u3044\u3066\u3001\u3044\u3044\u8003\u3048\u3092\u304a\u6301\u3061\u3067\u3057\u3087\u3046\u304b\u3002 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"\u305c\u3072\u5171\u6709\u3057\u3066\u304f\u3060\u3055\u3044"),"\u3002"))}d.isMDXComponent=!0}}]);