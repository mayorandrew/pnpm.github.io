"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6174],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,b=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9717:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>p,toc:()=>s,default:()=>d});var r=n(9518),o=n(7344),i=(n(9496),n(9613)),l=["components"],a={id:"bin",title:"pnpm bin"},c=void 0,p={unversionedId:"cli/bin",id:"cli/bin",title:"pnpm bin",description:"Prints the directory into which the executables of dependencies are linked.",source:"@site/docs/cli/bin.md",sourceDirName:"cli",slug:"/cli/bin",permalink:"/next/cli/bin",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/bin.md",tags:[],version:"current",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1633650459,formattedLastUpdatedAt:"10/7/2021",frontMatter:{id:"bin",title:"pnpm bin"},sidebar:"docs",previous:{title:"pnpm root",permalink:"/next/cli/root"},next:{title:"package.json",permalink:"/next/package_json"}},s=[{value:"Options",id:"options",children:[{value:"--global, -g",id:"--global--g",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Prints the directory into which the executables of dependencies are linked."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--global--g"},"--global, -g"),(0,i.kt)("p",null,"Prints the location of the globally installed executables."))}d.isMDXComponent=!0}}]);