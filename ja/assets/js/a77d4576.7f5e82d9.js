"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6182],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(9496);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=r.createContext({}),i=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(n),s=p,f=m["".concat(o,".").concat(s)]||m[s]||d[s]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function s(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:p,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5038:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>o,metadata:()=>i,toc:()=>u,default:()=>m});var r=n(9518),p=n(7344),a=(n(9496),n(9613)),l=["components"],c={id:"dlx",title:"pnpm dlx"},o=void 0,i={unversionedId:"cli/dlx",id:"cli/dlx",title:"pnpm dlx",description:"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av6.13.0",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/ja/next/cli/dlx",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"docs",previous:{title:"pnpm exec",permalink:"/ja/next/cli/exec"},next:{title:"pnpm create",permalink:"/ja/next/cli/create"}},u=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",children:[{value:"--package &lt;name&gt;",id:"--package-name",children:[],level:3},{value:"--silent, -s",id:"--silent--s",children:[],level:3}],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,p.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av6.13.0"),(0,a.kt)("p",null,"\u4f9d\u5b58\u95a2\u4fc2\u3068\u3057\u3066\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u53d6\u5f97\u3057\u3001\u30db\u30c3\u30c8\u30ed\u30fc\u30c9\u3057\u3066\u3001\u305d\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u516c\u958b\u3059\u308b\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30b3\u30de\u30f3\u30c9\u30d0\u30a4\u30ca\u30ea\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4f8b\u3048\u3070\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," \u3092\u5225\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u305b\u305a\u306b\u3001\u3069\u3053\u3067\u3082 React \u30a2\u30d7\u30ea\u3092\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," \u3092\u53d6\u5f97\u3057\u3001\u6307\u5b9a\u3055\u308c\u305f\u5f15\u6570\u3092\u4f7f\u7528\u3057\u3066\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"Since v6.23.1 you may also specify which exact version of the package you'd like to use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app@next ./my-app\n")),(0,a.kt)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,a.kt)("h3",{id:"--package-name"},"--package ","<","name",">"),(0,a.kt)("p",null,"\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u524d\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u6307\u5b9a"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,a.kt)("p",null,"v6.14.5\u4ee5\u964d\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u7528\u306b\u8907\u6570\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3067\u304d\u307e\u3059"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")),(0,a.kt)("h3",{id:"--silent--s"},"--silent, -s"),(0,a.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av6.17.0"),(0,a.kt)("p",null,"Only the output of the executed command is printed."))}m.isMDXComponent=!0}}]);