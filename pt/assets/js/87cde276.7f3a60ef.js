"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1764],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,v=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(2962),a=n(2742),o=(n(9496),n(9613)),i=["components"],l={id:"list",title:"pnpm list"},p=void 0,s={unversionedId:"cli/list",id:"cli/list",title:"pnpm list",description:"Aliases: ls",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/list.md",sourceDirName:"cli",slug:"/cli/list",permalink:"/pt/next/cli/list",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"list",title:"pnpm list"},sidebar:"docs",previous:{title:"pnpm audit",permalink:"/pt/next/cli/audit"},next:{title:"pnpm outdated",permalink:"/pt/next/cli/outdated"}},d={},c=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global",id:"--global",level:3},{value:"--depth &lt;number&gt;",id:"--depth-number",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aliases: ",(0,o.kt)("inlineCode",{parentName:"p"},"ls")),(0,o.kt)("p",null,"Este comando ir\xe1 exibir todas as vers\xf5es dos pacotes que est\xe3o instalados, bem como suas depend\xeancias, em uma estrutura de \xe1rvore."),(0,o.kt)("p",null,"Os argumentos posicionais s\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"identificadores name-pattern@version-range"),", que limitar\xe3o os resultados apenas aos pacotes nomeados. Por exemplo, ",(0,o.kt)("inlineCode",{parentName:"p"},'pnpm list "babel-*" "eslint-*" semver@5'),"."),(0,o.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"Execute o comando em cada pacote em subdiret\xf3rios ou em cada pacote do workspace, quando executado dentro de um workspace."),(0,o.kt)("h3",{id:"--json"},"--json"),(0,o.kt)("p",null,"Exibe o log de sa\xedda no formato JSON."),(0,o.kt)("h3",{id:"--long"},"--long"),(0,o.kt)("p",null,"Exibir informa\xe7\xf5es extendidas."),(0,o.kt)("h3",{id:"--parseable"},"--parseable"),(0,o.kt)("p",null,"Exibe os diret\xf3rios de pacotes em um formato parseable em vez de sua visualiza\xe7\xe3o de \xe1rvore."),(0,o.kt)("h3",{id:"--global"},"--global"),(0,o.kt)("p",null,"Liste os pacotes no diret\xf3rio de instala\xe7\xe3o global em vez de no projeto atual."),(0,o.kt)("h3",{id:"--depth-number"},"--depth ","<","number",">"),(0,o.kt)("p",null,"A profundidade m\xe1xima da \xe1rvore de depend\xeancia."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," listar\xe1 apenas as depend\xeancias diretas. ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," listar\xe1 apenas projetos. \xdatil dentro de um workspace quando usado com a op\xe7\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"-r"),"."),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,"Exibe apenas o gr\xe1fico de depend\xeancia para pacotes em ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,"Exibe apenas o gr\xe1fico de depend\xeancia para pacotes em ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,o.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,o.kt)("p",null,"N\xe3o exibe pacotes listados em ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pt/next/filtering"},"Leia mais sobre filtragem.")))}m.isMDXComponent=!0}}]);