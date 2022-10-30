"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[166],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,v=u["".concat(l,".").concat(m)]||u[m]||s[m]||o;return r?n.createElement(v,p(p({ref:t},d),{},{components:r})):n.createElement(v,p({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3653:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(2962),a=r(2742),o=(r(9496),r(9613)),p=["components"],i={id:"remove",title:"pnpm remove"},l=void 0,c={unversionedId:"cli/remove",id:"version-6.x/cli/remove",title:"pnpm remove",description:"Aliases: rm, uninstall, un",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/pt/6.x/cli/remove",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"6.x",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"version-6.x/docs",previous:{title:"pnpm update",permalink:"/pt/6.x/cli/update"},next:{title:"pnpm link",permalink:"/pt/6.x/cli/link"}},d={},s=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--global",id:"--global",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aliases: ",(0,o.kt)("inlineCode",{parentName:"p"},"rm"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"uninstall"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"un")),(0,o.kt)("p",null,"Remove pacotes de ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," e do projeto ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"Quando usado dentro de um ",(0,o.kt)("a",{parentName:"p",href:"/pt/6.x/workspaces"},"workspace"),", remove uma depend\xeancia (ou depend\xeancias) de cada pacote do workspace."),(0,o.kt)("p",null,"Quando usado fora de um workspace, remove uma depend\xeancia (ou depend\xeancias) de cada pacote encontrado em subdiret\xf3rios."),(0,o.kt)("h3",{id:"--global"},"--global"),(0,o.kt)("p",null,"Remove um pacote global."),(0,o.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,o.kt)("p",null,"Remove a depend\xeancia apenas da propriedade ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,o.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,o.kt)("p",null,"Remove a depend\xeancia apenas da propriedade ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,o.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,o.kt)("p",null,"Remove a depend\xeancia apenas da propriedade ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pt/6.x/filtering"},"Leia mais sobre filtragem.")))}m.isMDXComponent=!0}}]);