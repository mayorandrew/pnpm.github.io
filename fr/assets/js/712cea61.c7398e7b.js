"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5335],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||p;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,o=new Array(p);o[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(2962),i=n(2742),p=(n(9496),n(9613)),o=["components"],c={id:"scripts",title:"Scripts"},a=void 0,l={unversionedId:"scripts",id:"version-6.x/scripts",title:"Scripts",description:"Comment pnpm g\xe8re le champ scripts du package.json.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.x/scripts.md",sourceDirName:".",slug:"/scripts",permalink:"/fr/6.x/scripts",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"6.x",frontMatter:{id:"scripts",title:"Scripts"},sidebar:"version-6.x/docs",previous:{title:"Filtrage",permalink:"/fr/6.x/filtering"},next:{title:"pnpm add <pkg>",permalink:"/fr/6.x/cli/add"}},s={},u=[{value:"Scripts du cycle de vie",id:"scripts-du-cycle-de-vie",level:2},{value:"<code>pnpm:devPreinstall</code>",id:"pnpmdevpreinstall",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Comment pnpm g\xe8re le champ ",(0,p.kt)("inlineCode",{parentName:"p"},"scripts")," du ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,p.kt)("h2",{id:"scripts-du-cycle-de-vie"},"Scripts du cycle de vie"),(0,p.kt)("h3",{id:"pnpmdevpreinstall"},(0,p.kt)("inlineCode",{parentName:"h3"},"pnpm:devPreinstall")),(0,p.kt)("p",null,"Ajout\xe9 dans version: v6.21.0"),(0,p.kt)("p",null,"Fonctionne uniquement sur ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," local."),(0,p.kt)("p",null,"S'ex\xe9cute avant l'installation de toute d\xe9pendance."),(0,p.kt)("p",null,"Ce script est ex\xe9cut\xe9 uniquement lorsqu'il est d\xe9fini dans le ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," du projet racine."))}m.isMDXComponent=!0}}]);