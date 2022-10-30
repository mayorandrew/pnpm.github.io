"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5586],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,v=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(v,o(o({ref:t},d),{},{components:n})):r.createElement(v,o({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(2962),l=n(2742),i=(n(9496),n(9613)),o=["components"],a={id:"list",title:"pnpm list"},p=void 0,s={unversionedId:"cli/list",id:"version-7.x/cli/list",title:"pnpm list",description:"Aliases: ls",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-7.x/cli/list.md",sourceDirName:"cli",slug:"/cli/list",permalink:"/pt/cli/list",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"7.x",frontMatter:{id:"list",title:"pnpm list"},sidebar:"version-7.x/docs",previous:{title:"pnpm audit",permalink:"/pt/cli/audit"},next:{title:"pnpm outdated",permalink:"/pt/cli/outdated"}},d={},c=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global",id:"--global",level:3},{value:"--depth &lt;number&gt;",id:"--depth-number",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Aliases: ",(0,i.kt)("inlineCode",{parentName:"p"},"ls")),(0,i.kt)("p",null,"Este comando ir\xe1 exibir todas as vers\xf5es dos pacotes que est\xe3o instalados, bem como suas depend\xeancias, em uma estrutura de \xe1rvore."),(0,i.kt)("p",null,"Os argumentos posicionais s\xe3o ",(0,i.kt)("inlineCode",{parentName:"p"},"identificadores name-pattern@version-range"),", que limitar\xe3o os resultados apenas aos pacotes nomeados. Por exemplo, ",(0,i.kt)("inlineCode",{parentName:"p"},'pnpm list "babel-*" "eslint-*" semver@5'),"."),(0,i.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Execute o comando em cada pacote em subdiret\xf3rios ou em cada pacote do workspace, quando executado dentro de um workspace."),(0,i.kt)("h3",{id:"--json"},"--json"),(0,i.kt)("p",null,"Log output in JSON format."),(0,i.kt)("h3",{id:"--long"},"--long"),(0,i.kt)("p",null,"Show extended information."),(0,i.kt)("h3",{id:"--parseable"},"--parseable"),(0,i.kt)("p",null,"Outputs package directories in a parseable format instead of their tree view."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"List packages in the global install directory instead of in the current project."),(0,i.kt)("h3",{id:"--depth-number"},"--depth ","<","number",">"),(0,i.kt)("p",null,"Max display depth of the dependency tree."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," will list direct dependencies only. ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," will list projects only. Useful inside a workspace when used with the ",(0,i.kt)("inlineCode",{parentName:"p"},"-r")," option."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"Display only the dependency graph for packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Display only the dependency graph for packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,"Don't display packages from ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pt/filtering"},"Leia mais sobre filtragem.")))}m.isMDXComponent=!0}}]);