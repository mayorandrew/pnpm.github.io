"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6648],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=l,k=u["".concat(o,".").concat(m)]||u[m]||c[m]||p;return n?a.createElement(k,r(r({ref:t},s),{},{components:n})):a.createElement(k,r({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=n.length,r=new Array(p);r[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var d=2;d<p;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=n(2962),l=n(2742),p=(n(9496),n(9613)),r=["components"],i={id:"update",title:"pnpm update"},o=void 0,d={unversionedId:"cli/update",id:"version-7.x/cli/update",title:"pnpm update",description:"Aliases: up, upgrade",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-7.x/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/es/cli/update",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"7.x",frontMatter:{id:"update",title:"pnpm update"},sidebar:"version-7.x/docs",previous:{title:"pnpm install",permalink:"/es/cli/install"},next:{title:"pnpm remove",permalink:"/es/cli/remove"}},s={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Selecting dependencies with patterns",id:"selecting-dependencies-with-patterns",level:2},{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--latest, -L",id:"--latest--l",level:3},{value:"--global",id:"--global",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--interactive, -i",id:"--interactive--i",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,r);return(0,p.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Aliases: ",(0,p.kt)("inlineCode",{parentName:"p"},"up"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"upgrade")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm update")," actualiza los paquetes a su \xfaltima versi\xf3n basado en el rango especificado."),(0,p.kt)("p",null,"Cuando se usa sin argumentos, actualiza todas las dependencias."),(0,p.kt)("h2",{id:"tldr"},"TL;DR"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Comando"),(0,p.kt)("th",{parentName:"tr",align:null},"Significado"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,p.kt)("td",{parentName:"tr",align:null},"Actualiza todas las dependencias, adhiri\xe9ndose a los rangos especificados en el",(0,p.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,p.kt)("td",{parentName:"tr",align:null},"Updates all dependencies, ignoring ranges specified in ",(0,p.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,p.kt)("td",{parentName:"tr",align:null},"Updates ",(0,p.kt)("inlineCode",{parentName:"td"},"foo")," to the latest version on v2")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,p.kt)("td",{parentName:"tr",align:null},"Updates all dependencies under the ",(0,p.kt)("inlineCode",{parentName:"td"},"@babel")," scope")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,p.kt)("td",{parentName:"tr",align:null},"Updates all dependencies under the ",(0,p.kt)("inlineCode",{parentName:"td"},"@babel")," scope")))),(0,p.kt)("h2",{id:"selecting-dependencies-with-patterns"},"Selecting dependencies with patterns"),(0,p.kt)("p",null,"You can use patterns to update specific dependencies."),(0,p.kt)("p",null,"Update all ",(0,p.kt)("inlineCode",{parentName:"p"},"babel")," packages:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update @babel/*\n")),(0,p.kt)("p",null,"Update all dependencies, except ",(0,p.kt)("inlineCode",{parentName:"p"},"webpack"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update !webpack\n")),(0,p.kt)("p",null,"Patterns may also be combined, so the next command will update all ",(0,p.kt)("inlineCode",{parentName:"p"},"babel")," packages, except ",(0,p.kt)("inlineCode",{parentName:"p"},"core"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update @babel/* !@babel/core\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,p.kt)("p",null,"Concurrently runs update in all subdirectories with a ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," (excluding node_modules)."),(0,p.kt)("p",null,"Ejemplos de uso:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# updates all packages up to 100 subdirectories in depth\npnpm --recursive update --depth 100\n# update typescript to the latest version in every package\npnpm --recursive update typescript@latest\n")),(0,p.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,p.kt)("p",null,"Ignora el rango de versiones especificado en el ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),". En su lugar, se utilizar\xe1 la versi\xf3n especificada por la ",(0,p.kt)("inlineCode",{parentName:"p"},"\xfaltima")," etiqueta (potencialmente actualizando los paquetes a trav\xe9s de las versiones principales)."),(0,p.kt)("h3",{id:"--global"},"--global"),(0,p.kt)("p",null,"Actualizar paquetes globales."),(0,p.kt)("h3",{id:"--workspace"},"--workspace"),(0,p.kt)("p",null,"Tries to link all packages from the workspace. Versions are updated to match the versions of packages inside the workspace."),(0,p.kt)("p",null,"If specific packages are updated, the command will fail if any of the updated dependencies are not found inside the workspace. For instance, the following command fails if ",(0,p.kt)("inlineCode",{parentName:"p"},"express")," is not a workspace package:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm up -r --workspace express\n")),(0,p.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,p.kt)("p",null,"Only update packages in ",(0,p.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,p.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,p.kt)("p",null,"Only update packages in ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,p.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,p.kt)("p",null,"Don't update packages in ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,p.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,p.kt)("p",null,"Show outdated dependencies and select which ones to update."),(0,p.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/es/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);