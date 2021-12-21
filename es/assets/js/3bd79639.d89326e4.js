"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2962],{9613:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>m});var r=a(9496);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),c=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=t,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(f,i(i({ref:n},s),{},{components:a})):r.createElement(f,i({ref:n},s))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6213:(e,n,a)=>{a.r(n),a.d(n,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>u});var r=a(9518),t=a(7344),o=(a(9496),a(9613)),i=["components"],l={id:"fetch",title:"pnpm fetch"},p=void 0,c={unversionedId:"cli/fetch",id:"cli/fetch",title:"pnpm fetch",description:"Descargar paquetes indicados en un lockfile a la tienda virtual, el manifiesto de paquetes es ignorado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/cli/fetch.md",sourceDirName:"cli",slug:"/cli/fetch",permalink:"/es/next/cli/fetch",editUrl:"https://crowdin.com/project/pnpm/es",tags:[],version:"current",frontMatter:{id:"fetch",title:"pnpm fetch"},sidebar:"docs",previous:{title:"pnpm prune",permalink:"/es/next/cli/prune"},next:{title:"pnpm install-test",permalink:"/es/next/cli/install-test"}},s=[{value:"Escenario de uso",id:"escenario-de-uso",children:[],level:2},{value:"Opciones",id:"opciones",children:[{value:"--dev",id:"--dev",children:[],level:3},{value:"--prod",id:"--prod",children:[],level:3}],level:2}],d={toc:s};function u(e){var n=e.components,a=(0,t.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Descargar paquetes indicados en un lockfile a la tienda virtual, el manifiesto de paquetes es ignorado."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Este es un comando experimental. Es posible que se introduzcan incompatibilidades en posteriores versiones no principales de la CLI."))),(0,o.kt)("h2",{id:"escenario-de-uso"},"Escenario de uso"),(0,o.kt)("p",null,"Este comando est\xe1 espec\xedficamente dise\xf1ado para acelerar la construcci\xf3n de una imagen docker."),(0,o.kt)("p",null,"Puedes haber le\xeddo la ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"},"gu\xeda oficial")," para escribir un Dockerfile para una aplicaci\xf3n Node, si a\xfan no la has le\xeddo, tal vez quieras leerla primero."),(0,o.kt)("p",null,"De esa gu\xeda, aprendemos a escribir un Dockerfile optimizado para proyectos usando pnpm, que se ver\xe1 como"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Archivos requeridos por pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Empaqueta el c\xf3digo fuente de la app\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,o.kt)("p",null,"Mientras no haya ning\xfan cambio en ",(0,o.kt)("inlineCode",{parentName:"p"},".npmrc"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile. js"),", la cach\xe9 de construcci\xf3n de docker sigue siendo v\xe1lido hasta la capa de ",(0,o.kt)("inlineCode",{parentName:"p"},"RUN pnpm install --frozen-lockfile --prod"),", la cual cuesta la mayor parte del tiempo de construcci\xf3n de una imagen docker."),(0,o.kt)("p",null,"Sin embargo, las modificaciones al ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," ocurren con mayor frecuencia de lo que esper\xe1bamos, porque no solo contiene dependencias, sino que tambi\xe9n puede contener el n\xfamero de versi\xf3n, scripts y configuraci\xf3n arbitraria para cualquier otra herramienta."),(0,o.kt)("p",null,"Tambi\xe9n es dif\xedcil mantener un Dockerfile que construye un proyecto monorepo, puede parecerse a algo tal que:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Archivos requeridos por pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# Por cada sub-paquete, tenemos que a\xf1adir un paso extra para copiar su manifiesto\n# al lugar indicado, ya que docker no tiene manera de filtrar solo los package.json con una\n# sola instrucci\xf3n\nCOPY packages/foo/backage.json packages/foo/\nCOPY packages/bar/backage.json packages/bar/\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Empaqueta el c\xf3digo fuente de la aplicaci\xf3n\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n\n')),(0,o.kt)("p",null,"Como puede ver, el archivo Dockerfile tiene que ser actualizado cuando agregue o elimine sub-paquetes."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm fetch")," resolver\xe1 perfectamente el problema anterior proporcionando la habilidad de descargar el paquete al almac\xe9n virtual \xfanicamente con la informaci\xf3n de un lockfile."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# pnpm fetch solo requiere un lockfile\nCOPY pnpm-lock.yaml ./\n\nRUN pnpm fetch --prod\n\n\nADD . ./\nRUN pnpm install -r --offline --prod\n\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,o.kt)("p",null,"Funciona tanto para un proyecto simple como para un proyecto monorepo, ",(0,o.kt)("inlineCode",{parentName:"p"},"--offline")," fuerza a pnpm a no comunicarse con el registro de paquetes ya que todos los paquetes necesarios deber\xedan estar (descargados) en la tienda virtual."),(0,o.kt)("p",null,"Mientras el lockfile no se cambie, la cach\xe9 de compilaci\xf3n es v\xe1lida hasta la capa ",(0,o.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -r --offline --prod"),", lo cual te ahorrar\xe1 mucho tiempo."),(0,o.kt)("h2",{id:"opciones"},"Opciones"),(0,o.kt)("h3",{id:"--dev"},"--dev"),(0,o.kt)("p",null,"S\xf3lo se descargar\xe1n los paquetes de desarrollo"),(0,o.kt)("h3",{id:"--prod"},"--prod"),(0,o.kt)("p",null,"Los paquetes de desarrollo no se descargar\xe1n"))}u.isMDXComponent=!0}}]);