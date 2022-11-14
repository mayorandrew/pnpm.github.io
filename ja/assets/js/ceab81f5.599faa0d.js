"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2488],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,v=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(v,p(p({ref:t},s),{},{components:n})):r.createElement(v,p({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,p=new Array(o);p[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,p[1]=a;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(2962),l=n(2742),o=(n(9496),n(9613)),p=["components"],a={id:"env",title:"pnpm env <cmd>"},i=void 0,c={unversionedId:"cli/env",id:"version-7.x/cli/env",title:"pnpm env <cmd>",description:"Node.js \u74b0\u5883\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-7.x/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/ja/cli/env",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"7.x",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"version-7.x/docs",previous:{title:"pnpm start",permalink:"/ja/cli/start"},next:{title:"pnpm publish",permalink:"/ja/cli/publish"}},s={},u=[{value:"\u30b3\u30de\u30f3\u30c9",id:"\u30b3\u30de\u30f3\u30c9",level:2},{value:"use",id:"use",level:3},{value:"remove, rm",id:"remove-rm",level:3},{value:"list, ls",id:"list-ls",level:3},{value:"Options",id:"options",level:2},{value:"--global, -g",id:"--global--g",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Node.js \u74b0\u5883\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/84-MzN_0Cng",title:"The pnpm patch command demo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"\u30b3\u30de\u30f3\u30c9"},"\u30b3\u30de\u30f3\u30c9"),(0,o.kt)("h3",{id:"use"},"use"),(0,o.kt)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u306eNode.js\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059"),(0,o.kt)("p",null,"Node.js\u306eLTS\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global lts\npnpm env use --global argon\n")),(0,o.kt)("p",null,"Node.js v16\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,o.kt)("p",null,"Node.js\u306e\u30d7\u30ec\u30ea\u30ea\u30fc\u30b9\u30d0\u30fc\u30b8\u30e7\u30f3\u3082\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global nightly\npnpm env use --global rc\npnpm env use --global 16.0.0-rc.0\npnpm env use --global rc/14\n")),(0,o.kt)("p",null,"Node.js\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global latest\n")),(0,o.kt)("h3",{id:"remove-rm"},"remove, rm"),(0,o.kt)("p",null,"Added in: v7.10.0"),(0,o.kt)("p",null,"Removes the specified version of Node.JS."),(0,o.kt)("p",null,"\u4f7f\u7528\u4f8b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env remove --global 14.0.0\n")),(0,o.kt)("h3",{id:"list-ls"},"list, ls"),(0,o.kt)("p",null,"Added in: v7.16.0"),(0,o.kt)("p",null,"List Node.js versions available locally or remotely."),(0,o.kt)("p",null,"Print locally installed versions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env list\n")),(0,o.kt)("p",null,"Print remotely available Node.js versions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env list --remote\n")),(0,o.kt)("p",null,"Print remotely available Node.js v16 versions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env list --remote 16\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--global--g"},"--global, -g"),(0,o.kt)("p",null,"\u5909\u66f4\u304c\u30b7\u30b9\u30c6\u30e0\u5168\u4f53\u3067\u884c\u308f\u308c\u307e\u3059\u3002"))}d.isMDXComponent=!0}}]);