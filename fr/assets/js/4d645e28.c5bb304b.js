"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[187],{9613:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(9496);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7948:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>s});var n=t(2962),i=t(2742),o=(t(9496),t(9613)),a=["components"],p={id:"import",title:"pnpm import"},l=void 0,c={unversionedId:"cli/import",id:"version-6.x/cli/import",title:"pnpm import",description:"Ajout\xe9 dans la version v2.15.0",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.x/cli/import.md",sourceDirName:"cli",slug:"/cli/import",permalink:"/fr/6.x/cli/import",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"6.x",frontMatter:{id:"import",title:"pnpm import"},sidebar:"version-6.x/docs",previous:{title:"pnpm unlink",permalink:"/fr/6.x/cli/unlink"},next:{title:"pnpm rebuild",permalink:"/fr/6.x/cli/rebuild"}},u={},s=[],m={toc:s};function d(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ajout\xe9 dans la version v2.15.0"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm import")," g\xe9n\xe8re un ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," \xe0 partir du fichier verrouill\xe9 d'un autre gestionnaire de paquets. Fichiers sources pris en charge :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn.lock")," (depuis v6.14.0)")),(0,o.kt)("p",null,"Notez que si vous avez des espaces de travail pour lesquels vous souhaitez importer des d\xe9pendances, elles devront \xeatre d\xe9clar\xe9es au pr\xe9alable dans le fichier ",(0,o.kt)("a",{parentName:"p",href:"/fr/6.x/pnpm-workspace_yaml"},"pnpm-workspace.yaml"),"."))}d.isMDXComponent=!0}}]);