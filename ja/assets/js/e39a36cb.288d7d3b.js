"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9387],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=m(t),d=i,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return t?r.createElement(f,p(p({ref:n},s),{},{components:t})):r.createElement(f,p({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,p=new Array(o);p[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var m=2;m<o;m++)p[m]=t[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2386:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>m,toc:()=>s,default:()=>u});var r=t(9518),i=t(7344),o=(t(9496),t(9613)),p=["components"],a={id:"limitations",title:"\u5236\u9650\u4e8b\u9805"},l=void 0,m={unversionedId:"limitations",id:"version-6.x/limitations",title:"\u5236\u9650\u4e8b\u9805",description:"1. npm-shrinkwrap.json\u304a\u3088\u3073package-lock.json\u306f\u7121\u8996\u3057\u307e\u3059\u3002 npm\u306fpnpm\u3068\u9055\u3063\u3066\u3001\u540c\u3058\u540d\u524d\u3068\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8 (name@version) \u3092\u3001\u7570\u306a\u308b\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u96c6\u5408\u306b\u542b\u307e\u308c\u308b\u3082\u306e\u3068\u3057\u3066\u3001\u91cd\u8907\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002 npm\u306e\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u306f\u30d5\u30e9\u30c3\u30c8\u306anode_modules\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u53cd\u6620\u3059\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3057\u304b\u3057\u3001pnpm\u3067\u306f\u540c\u3058\u3088\u3046\u306a\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u4f5c\u6210\u3067\u304d\u306a\u3044\u306e\u3067\u3001npm\u306e\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u306e\u5f62\u5f0f\u306b\u5f93\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002 \u3068\u306f\u3044\u3048\u3001npm\u306e\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3092pnpm\u306e\u5f62\u5f0f\u306b\u5909\u63db\u3057\u305f\u3051\u308c\u3070\u3001pnpm import\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-6.x/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/ja/limitations",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"6.x",frontMatter:{id:"limitations",title:"\u5236\u9650\u4e8b\u9805"},sidebar:"version-6.x/docs",previous:{title:"\u30ed\u30b4",permalink:"/ja/logos"},next:{title:"\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3092\u4f7f\u7528\u3057\u305f<code>node_modules</code>\u306e\u69cb\u9020",permalink:"/ja/symlinked-node-modules-structure"}},s=[],c={toc:s};function u(e){var n=e.components,t=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json"),"\u304a\u3088\u3073",(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json"),"\u306f\u7121\u8996\u3057\u307e\u3059\u3002 npm\u306fpnpm\u3068\u9055\u3063\u3066\u3001\u540c\u3058\u540d\u524d\u3068\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8 (",(0,o.kt)("inlineCode",{parentName:"li"},"name@version"),") \u3092\u3001\u7570\u306a\u308b\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u96c6\u5408\u306b\u542b\u307e\u308c\u308b\u3082\u306e\u3068\u3057\u3066\u3001\u91cd\u8907\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002 npm\u306e\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u306f\u30d5\u30e9\u30c3\u30c8\u306a",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),"\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u53cd\u6620\u3059\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3057\u304b\u3057\u3001pnpm\u3067\u306f\u540c\u3058\u3088\u3046\u306a\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u4f5c\u6210\u3067\u304d\u306a\u3044\u306e\u3067\u3001npm\u306e\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u306e\u5f62\u5f0f\u306b\u5f93\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002 \u3068\u306f\u3044\u3048\u3001npm\u306e\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3092pnpm\u306e\u5f62\u5f0f\u306b\u5909\u63db\u3057\u305f\u3051\u308c\u3070\u3001",(0,o.kt)("a",{parentName:"li",href:"/ja/cli/import"},"pnpm import"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("li",{parentName:"ol"},"pnpm\u306f",(0,o.kt)("inlineCode",{parentName:"li"},"bundledDependencies"),"\u3092\u542b\u3080npm\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u516c\u958b\u3067\u304d\u307e\u305b\u3093\u3002 \u4eca\u306e\u3068\u3053\u308d",(0,o.kt)("inlineCode",{parentName:"li"},"bundledDependencies"),"\u306b\u5bfe\u5fdc\u3059\u308b\u4e88\u5b9a\u306f\u3042\u308a\u307e\u305b\u3093\u3002npm\u3067\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b\u5834\u5408\u3067\u3082\u3001\u3061\u3083\u3093\u3068\u4e00\u8cab\u6027\u3092\u4fdd\u8a3c\u3067\u304d\u3066\u3044\u308b\u308f\u3051\u3067\u306f\u306a\u3044\u306e\u3067\u3059\u3002 \u4ee3\u308f\u308a\u306b\u3001webpack\u3084rollup\u3084ESBuild\u306a\u3069\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u30d0\u30f3\u30c9\u30e9\u30fc\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ol"},"Binstub (",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),"\u306b\u914d\u7f6e\u3055\u308c\u308b\u30d5\u30a1\u30a4\u30eb) \u306f\u5e38\u306b\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u3059\u3002JavaScript \u30d5\u30a1\u30a4\u30eb\u3078\u306e\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3059\u308b\u306e\u306f\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u53ef\u80fd\u306a CLI \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u3001\u4e00\u822c\u7684\u3067\u306a\u3044\u69cb\u9020\u306e",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),"\u304b\u3089\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u63a2\u7d22\u3059\u308b\u306e\u3092\u652f\u63f4\u3059\u308b\u305f\u3081\u3067\u3059\u3002 \u3053\u306e\u5236\u9650\u304c\u554f\u984c\u306b\u306a\u308b\u3053\u3068\u306f\u3081\u3063\u305f\u306b\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u3042\u306a\u305f\u304cJavaScript\u30d5\u30a1\u30a4\u30eb\u3067\u3042\u308b\u3053\u3068\u3092\u671f\u5f85\u3057\u3066\u3044\u308b\u3068\u3057\u305f\u3089\u3001",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),"\u3067\u8aac\u660e\u3055\u308c\u3066\u3044\u308b\u3088\u3046\u306b\u3001\u5143\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u76f4\u63a5\u53c2\u7167\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("li",{parentName:"ol"},"pnpm\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u5b9f\u884c\u3059\u308b\u5834\u5408\u3001Node.js \u306e",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/cli.html#cli_preserve_symlinks"},"--preserve-symlinks"),"\u30d5\u30e9\u30b0\u306f\u6a5f\u80fd\u3057\u307e\u305b\u3093\u3002")),(0,o.kt)("p",null,"\u3053\u308c\u3089\u306e\u554f\u984c\u306b\u5bfe\u3059\u308b\u56de\u907f\u7b56\u306b\u3064\u3044\u3066\u3001\u3044\u3044\u8003\u3048\u3092\u304a\u6301\u3061\u3067\u3057\u3087\u3046\u304b\u3002 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"\u305c\u3072\u5171\u6709\u3057\u3066\u304f\u3060\u3055\u3044"),"\u3002"))}u.isMDXComponent=!0}}]);