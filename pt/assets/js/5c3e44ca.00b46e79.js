"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2041],{9613:(e,o,r)=>{r.d(o,{Zo:()=>m,kt:()=>d});var t=r(9496);function n(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function a(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?a(Object(r),!0).forEach((function(o){n(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function s(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=t.createContext({}),l=function(e){var o=t.useContext(p),r=o;return e&&(r="function"==typeof e?e(o):i(i({},o),e)),r},m=function(e){var o=l(e.components);return t.createElement(p.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},c=t.forwardRef((function(e,o){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(r),d=n,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return r?t.createElement(f,i(i({ref:o},m),{},{components:r})):t.createElement(f,i({ref:o},m))}));function d(e,o){var r=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=c;var s={};for(var p in o)hasOwnProperty.call(o,p)&&(s[p]=o[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9727:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=r(2962),n=r(2742),a=(r(9496),r(9613)),i=["components"],s={id:"limitations",title:"Limita\xe7\xf5es"},p=void 0,l={unversionedId:"limitations",id:"version-7.x/limitations",title:"Limita\xe7\xf5es",description:"1. npm-shrinkwrap.json e package-lock.json s\xe3o ignorados. Ao contr\xe1rio do pnpm, o npm pode instalar o mesmo name@version v\xe1rias vezes e com diferentes conjuntos de depend\xeancias. O arquivo de bloqueio do npm \xe9 projetado para refletir o layout flat node_modules, no entanto, como o pnpm cria um layout isolado por padr\xe3o, ele n\xe3o pode respeitar o formato do arquivo de bloqueio do npm. Consulte pnpm import se desejar converter um arquivo de bloqueio para o formato de pnpm.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-7.x/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/pt/limitations",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"7.x",frontMatter:{id:"limitations",title:"Limita\xe7\xf5es"},sidebar:"version-7.x/docs",previous:{title:"Logos",permalink:"/pt/logos"},next:{title:"Estrutura `node_modules` symlinked",permalink:"/pt/symlinked-node-modules-structure"}},m={},u=[],c={toc:u};function d(e){var o=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},c,r,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," e ",(0,a.kt)("inlineCode",{parentName:"li"},"package-lock.json")," s\xe3o ignorados. Ao contr\xe1rio do pnpm, o npm pode instalar o mesmo ",(0,a.kt)("inlineCode",{parentName:"li"},"name@version")," v\xe1rias vezes e com diferentes conjuntos de depend\xeancias. O arquivo de bloqueio do npm \xe9 projetado para refletir o layout flat ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules"),", no entanto, como o pnpm cria um layout isolado por padr\xe3o, ele n\xe3o pode respeitar o formato do arquivo de bloqueio do npm. Consulte ",(0,a.kt)("a",{parentName:"li",href:"/pt/cli/import"},"pnpm import")," se desejar converter um arquivo de bloqueio para o formato de pnpm."),(0,a.kt)("li",{parentName:"ol"},"Binstubs (arquivos em ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),") s\xe3o sempre arquivos shell, n\xe3o links simb\xf3licos para arquivos JS. Os arquivos shell s\xe3o criados para ajudar os aplicativos CLI conect\xe1veis a encontrar seus plug-ins na estrutura incomum ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules"),". Isso raramente \xe9 um problema e se voc\xea espera que o arquivo seja um arquivo JS, fa\xe7a refer\xeancia ao arquivo original diretamente, conforme descrito em #736 ","[][]",".")),(0,a.kt)("p",null,"Tem uma ideia para solu\xe7\xf5es alternativas para esses problemas? ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"Compartilhe!")))}d.isMDXComponent=!0}}]);