"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7205],{9613:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(9496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),f=o,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||a;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4255:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>p,toc:()=>u,default:()=>s});var n=t(98),o=t(6862),a=(t(9496),t(9613)),i=["components"],c={id:"exec",title:"pnpm exec"},l=void 0,p={unversionedId:"cli/exec",id:"version-5.x/cli/exec",isDocsHomePage:!1,title:"pnpm exec",description:"Shorthand form of pnpm -r exec.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-5.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/tr/5.x/cli/exec",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"5.x",frontMatter:{id:"exec",title:"pnpm exec"}},u=[{value:"Parametreler",id:"parametreler",children:[{value:"--parallel",id:"--parallel",children:[],level:3}],level:2}],m={toc:u};function s(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Shorthand form of ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r exec"),"."),(0,a.kt)("p",null,"See the ","[",(0,a.kt)("inlineCode",{parentName:"p"},"-r exec"),"]"," documentation for more information."),(0,a.kt)("h2",{id:"parametreler"},"Parametreler"),(0,a.kt)("h3",{id:"--parallel"},"--parallel"),(0,a.kt)("p",null,"Disregards concurrency and topological sorting configuration entirely and runs the command immediately in all matching packages, with prefixed streaming output."),(0,a.kt)("p",null,"This is the preferred option for processes that take a long time to run. For example, running a build process with the watch flag over a large number of packages."))}s.isMDXComponent=!0}}]);