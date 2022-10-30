"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[526],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||p;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,i=new Array(p);i[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<p;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1045:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=t(2962),a=t(2742),p=(t(9496),t(9613)),i=["components"],o={id:"pnpx-cli",title:"pnpx CLI"},c=void 0,l={unversionedId:"pnpx-cli",id:"version-6.x/pnpx-cli",title:"pnpx CLI",description:"This command is deprecated! Use pnpm exec and pnpm dlx instead.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-6.x/pnpx-cli.md",sourceDirName:".",slug:"/pnpx-cli",permalink:"/id/6.x/pnpx-cli",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"6.x",frontMatter:{id:"pnpx-cli",title:"pnpx CLI"},sidebar:"version-6.x/docs",previous:{title:"pnpm CLI",permalink:"/id/6.x/pnpm-cli"},next:{title:"Mengonfigurasi",permalink:"/id/6.x/configuring"}},s={},m=[{value:"For new users",id:"for-new-users",level:2},{value:"For npm users",id:"for-npm-users",level:2}],d={toc:m};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("admonition",{type:"warning"},(0,p.kt)("p",{parentName:"admonition"},"This command is deprecated! Use ",(0,p.kt)("a",{parentName:"p",href:"/id/6.x/cli/exec"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm exec"))," and ",(0,p.kt)("a",{parentName:"p",href:"/id/6.x/cli/dlx"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm dlx"))," instead.")),(0,p.kt)("h2",{id:"for-new-users"},"For new users"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," (PNPm eXecute) is a command line tool that fetches a package from the registry without installing it as a dependency, hotloads it, and runs whatever default command binary it exposes."),(0,p.kt)("p",null,"Misalnya, Untuk menggunakan ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," di mana saja untuk mem-bootstrap react app tanpa harus menginstall di projek lainya, Anda dapat menjalankan dengan cara:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app my-project\n")),(0,p.kt)("p",null,"This will fetch ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," from the registry and run it with the given arguments. For more information, you may want to look at ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," from npm, as it offers the same interface, except it uses ",(0,p.kt)("inlineCode",{parentName:"p"},"npm")," instead of ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," under the hood."),(0,p.kt)("p",null,"If you just want to run a binary of a project's dependency, see ",(0,p.kt)("a",{parentName:"p",href:"/id/6.x/cli/exec"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm exec")),"."),(0,p.kt)("h2",{id:"for-npm-users"},"For npm users"),(0,p.kt)("p",null,"npm has a great package runner called ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),". pnpm offers the same tool via the ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," command. The only difference is that ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," uses ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," for installing packages."))}u.isMDXComponent=!0}}]);