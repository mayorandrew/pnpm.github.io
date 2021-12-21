"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4785],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4548:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>i,metadata:()=>c,toc:()=>s,default:()=>m});var r=n(9518),o=n(7344),a=(n(9496),n(9613)),l=["components"],p={id:"completion",title:"Autocompletado en la linea de comandos"},i=void 0,c={unversionedId:"completion",id:"version-5.x/completion",title:"Autocompletado en la linea de comandos",description:"A\xf1adido en: v4.9.0",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/completion.md",sourceDirName:".",slug:"/completion",permalink:"/es/5.x/completion",editUrl:"https://crowdin.com/project/pnpm/es",tags:[],version:"5.x",frontMatter:{id:"completion",title:"Autocompletado en la linea de comandos"},sidebar:"version-5.x/docs",previous:{title:"Alias",permalink:"/es/5.x/aliases"},next:{title:"Using Changesets with pnpm",permalink:"/es/5.x/using-changesets"}},s=[],u={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A\xf1adido en: v4.9.0"),(0,a.kt)("p",null,"Unlike other popular package managers, which usually require plugins, pnpm supports command line tab-completion for Bash, Zsh, Fish, and similar shells."),(0,a.kt)("p",null,"Para configurar el autocompletado, ejecute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion\n")),(0,a.kt)("p",null,"La CLI preguntar\xe1 para qu\xe9 shell genera el script de autocompletado. Alternativamente, la shell destino se puede especificar en la l\xednea de comandos (desde v5.15.0):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion zsh\n")),(0,a.kt)("p",null,"Para ver ejemplos de auto-completado, lea ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4"},"este art\xedculo"),"."))}m.isMDXComponent=!0}}]);