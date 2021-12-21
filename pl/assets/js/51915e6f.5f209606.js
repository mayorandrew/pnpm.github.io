"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7970],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),a=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=a(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||p;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,o=new Array(p);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var a=2;a<p;a++)o[a]=n[a];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4473:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>a,toc:()=>s,default:()=>d});var r=n(9518),i=n(7344),p=(n(9496),n(9613)),o=["components"],l={id:"scripts",title:"Scripts"},c=void 0,a={unversionedId:"scripts",id:"scripts",title:"Scripts",description:"How pnpm handles the scripts field of package.json.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/scripts.md",sourceDirName:".",slug:"/scripts",permalink:"/pl/next/scripts",editUrl:"https://crowdin.com/project/pnpm/pl",tags:[],version:"current",frontMatter:{id:"scripts",title:"Scripts"},sidebar:"docs",previous:{title:"Filtering",permalink:"/pl/next/filtering"},next:{title:"pnpm add <pkg>",permalink:"/pl/next/cli/add"}},s=[{value:"Lifecycle Scripts",id:"lifecycle-scripts",children:[{value:"<code>pnpm:devPreinstall</code>",id:"pnpmdevpreinstall",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"How pnpm handles the ",(0,p.kt)("inlineCode",{parentName:"p"},"scripts")," field of ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,p.kt)("h2",{id:"lifecycle-scripts"},"Lifecycle Scripts"),(0,p.kt)("h3",{id:"pnpmdevpreinstall"},(0,p.kt)("inlineCode",{parentName:"h3"},"pnpm:devPreinstall")),(0,p.kt)("p",null,"Dodane w: v6.21.0"),(0,p.kt)("p",null,"Runs only on local ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,p.kt)("p",null,"Runs before any dependency is installed."),(0,p.kt)("p",null,"This script is executed only when set in the root project's ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"."))}d.isMDXComponent=!0}}]);