"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2988],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,b=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(b,c(c({ref:t},s),{},{components:r})):n.createElement(b,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6068:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>l,toc:()=>s,default:()=>m});var n=r(9518),a=r(7344),o=(r(9496),r(9613)),c=["components"],i={id:"benchmark",title:"\u30d9\u30f3\u30c1\u30de\u30fc\u30af"},p=void 0,l={unversionedId:"benchmark",id:"version-5.x/benchmark",title:"\u30d9\u30f3\u30c1\u30de\u30fc\u30af",description:"pnpm\u306fnpm\u3084Yarn\u3088\u308a\u3082\u9ad8\u901f\u3067\u3059\u3002 \u3053\u306e \u30d9\u30f3\u30c1\u30de\u30fc\u30af\u306f \u3001\u7570\u306a\u308b\u30bf\u30a4\u30d7\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30673\u3064\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u3092\u6bd4\u8f03\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-5.x/benchmark.md",sourceDirName:".",slug:"/benchmark",permalink:"/ja/5.x/benchmark",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"5.x",frontMatter:{id:"benchmark",title:"\u30d9\u30f3\u30c1\u30de\u30fc\u30af"},sidebar:"version-5.x/docs",previous:{title:"\u30ed\u30b4",permalink:"/ja/5.x/logos"},next:{title:"\u5236\u9650\u4e8b\u9805",permalink:"/ja/5.x/limitations"}},s=[],u={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"pnpm\u306fnpm\u3084Yarn\u3088\u308a\u3082\u9ad8\u901f\u3067\u3059\u3002 ",(0,o.kt)("a",{parentName:"p",href:"https://r.pnpm.io/benchmarks"},"\u3053\u306e")," \u30d9\u30f3\u30c1\u30de\u30fc\u30af\u306f \u3001\u7570\u306a\u308b\u30bf\u30a4\u30d7\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30673\u3064\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u3092\u6bd4\u8f03\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"React\u30a2\u30d7\u30ea\u306e\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/pnpm/benchmarks-of-javascript-package-managers/main/results/imgs/alotta-files.svg",alt:null})))}m.isMDXComponent=!0}}]);