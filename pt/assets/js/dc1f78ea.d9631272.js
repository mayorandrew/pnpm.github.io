"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3355],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8085:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>u});var r=n(98),o=n(6862),a=(n(9496),n(9613)),i=["components"],l={id:"git",title:"Trabalhando com Git"},s=void 0,c={unversionedId:"git",id:"version-5.x/git",isDocsHomePage:!1,title:"Trabalhando com Git",description:"Lockfiles",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-5.x/git.md",sourceDirName:".",slug:"/git",permalink:"/pt/5.x/git",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"5.x",frontMatter:{id:"git",title:"Trabalhando com Git"},sidebar:"version-5.x/docs",previous:{title:"Permita apenas pnpm",permalink:"/pt/5.x/only-allow-pnpm"},next:{title:"Logos",permalink:"/pt/5.x/logos"}},p=[{value:"Lockfiles",id:"lockfiles",children:[{value:"Conflitos de mesclagem",id:"conflitos-de-mesclagem",children:[],level:3}],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"lockfiles"},"Lockfiles"),(0,a.kt)("p",null,"Voc\xea deve sempre gravar (git commit) o lockfile (",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"). Isso deve ser feito por uma infinidade de raz\xf5es, as principais sendo:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"permite uma instala\xe7\xe3o mais r\xe1pida para ambientes de Integra\xe7\xe3o Cont\xednua e de produ\xe7\xe3o, por permitir que a resolu\xe7\xe3o do pacote n\xe3o precise ser feita"),(0,a.kt)("li",{parentName:"ul"},"imp\xf5e instala\xe7\xf5es consistentes entre ambientes de desenvolvimento, testagem e produ\xe7\xe3o, significando que os pacotes utilizados durante testes e em produ\xe7\xe3o ser\xe3o exatamente os mesmos utilizados quando voc\xea desenvolveu o projeto")),(0,a.kt)("h3",{id:"conflitos-de-mesclagem"},"Conflitos de mesclagem"),(0,a.kt)("p",null,"pnpm pode resolver automaticamente conflitos de mesclagem em ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),". Se voc\xea tiver conflitos, apenas execute ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," e grave as altera\xe7\xf5es."),(0,a.kt)("p",null,"Tenha cuidado, no entanto. \xc9 recomendado que voc\xea reveja as altera\xe7\xf5es antes de gravar as altera\xe7\xf5es, pois n\xf3s n\xe3o podemos garantir que pnpm vai escolher corretamente - ao inv\xe9s disso, ele escolhe as vers\xf5es mais recentes, que \xe9 ideal na maioria dos casos."))}u.isMDXComponent=!0}}]);