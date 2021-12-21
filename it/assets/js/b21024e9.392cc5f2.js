"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1912],{9613:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>d});var n=i(9496);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=p(i),d=r,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return i?n.createElement(f,l(l({ref:t},u),{},{components:i})):n.createElement(f,l({ref:t},u))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,l=new Array(o);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var p=2;p<o;p++)l[p]=i[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},2069:(e,t,i)=>{i.r(t),i.d(t,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>p,toc:()=>u,default:()=>m});var n=i(9518),r=i(7344),o=(i(9496),i(9613)),l=["components"],a={id:"git",title:"Lavorare con Git"},c=void 0,p={unversionedId:"git",id:"git",title:"Lavorare con Git",description:"File lock",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/git.md",sourceDirName:".",slug:"/git",permalink:"/it/next/git",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"git",title:"Lavorare con Git"},sidebar:"docs",previous:{title:"Consenti solo pnpm",permalink:"/it/next/only-allow-pnpm"},next:{title:"Codici di errore",permalink:"/it/next/errors"}},u=[{value:"File lock",id:"file-lock",children:[{value:"Conflitti di unione",id:"conflitti-di-unione",children:[],level:3}],level:2}],s={toc:u};function m(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"file-lock"},"File lock"),(0,o.kt)("p",null,"Dovresti eseguire sempre il commit del file lock (",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"). Questo per molte ragioni, le principali sono:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"permette di avere installazioni pi\xf9 veloci per CI e ambienti di produzione, grazie alla possibilit\xe0 di saltare la risoluzione dei pacchetti"),(0,o.kt)("li",{parentName:"ul"},"impone installazioni e risoluzioni coerenti tra gli ambienti di sviluppo, di test e di produzione, il che significa che i pacchetti utilizzati durante i test e in produzione saranno esattamente gli stessi di quando hai sviluppato il tuo progetto")),(0,o.kt)("h3",{id:"conflitti-di-unione"},"Conflitti di unione"),(0,o.kt)("p",null,"pnpm pu\xf2 risolvere automaticamente i conflitti di unione in ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),". Se hai conflitti, esegui ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," ed esegui il commit dei cambiamenti."),(0,o.kt)("p",null,"Attenzione, per\xf2. Si consiglia di controllare i cambiamenti prima di mettere un commit nello stage, perch\xe9 non possiamo garantire che pnpm scelga l\u2019head corretto - viene compilato invece con il lockfile pi\xf9 recente, essendo l\u2019ideale nella maggior parte dei casi."))}m.isMDXComponent=!0}}]);