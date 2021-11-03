"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[732],{9613:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>s});var t=r(9496);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),c=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=c(r),s=a,d=k["".concat(o,".").concat(s)]||k[s]||m[s]||l;return r?t.createElement(d,p(p({ref:n},u),{},{components:r})):t.createElement(d,p({ref:n},u))}));function s(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=k;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<l;c++)p[c]=r[c];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}k.displayName="MDXCreateElement"},6845:(e,n,r)=>{r.r(n),r.d(n,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>c,toc:()=>u,default:()=>k});var t=r(98),a=r(6862),l=(r(9496),r(9613)),p=["components"],i={id:"pnpx-cli",title:"pnpx CLI"},o=void 0,c={unversionedId:"pnpx-cli",id:"version-5.x/pnpx-cli",isDocsHomePage:!1,title:"pnpx CLI",description:"\u0130lk defa kullananlar",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-5.x/pnpx-cli.md",sourceDirName:".",slug:"/pnpx-cli",permalink:"/tr/5.x/pnpx-cli",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"5.x",frontMatter:{id:"pnpx-cli",title:"pnpx CLI"},sidebar:"version-5.x/docs",previous:{title:"pnpm CLI",permalink:"/tr/5.x/pnpm-cli"},next:{title:"Yap\u0131land\u0131rma",permalink:"/tr/5.x/configuring"}},u=[{value:"\u0130lk defa kullananlar",id:"i\u0307lk-defa-kullananlar",children:[],level:2},{value:"npm kullananlar",id:"npm-kullananlar",children:[],level:2}],m={toc:u};function k(e){var n=e.components,r=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"i\u0307lk-defa-kullananlar"},"\u0130lk defa kullananlar"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpx")," (a\xe7\u0131l\u0131m\u0131 PNPm eXecute) komutu, npm veritaban\u0131ndan ili\u015fkili paketi \xe7ekerek, projeye k\xfct\xfcphane olarak dahil etmeden, y\xfckleme yapmadan, hedef pakette varsay\u0131lan olarak tan\u0131ml\u0131 gelen binary (\xe7al\u0131\u015ft\u0131r\u0131labilir) komutunu \xe7al\u0131\u015ft\u0131r\u0131r."),(0,l.kt)("p",null,"\xd6rne\u011fin: ",(0,l.kt)("inlineCode",{parentName:"p"},"create-react-app")," paketini kullanarak her hangi bir dizinde h\u0131zl\u0131ca React projesi olu\u015fturmak i\xe7in \u015fu komutu kullanabilirsin:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app yeni-proje\n")),(0,l.kt)("p",null,"Komutu girildikten sonra pnpm, veritaban\u0131ndan ",(0,l.kt)("inlineCode",{parentName:"p"},"create-react-app")," uygulamas\u0131 \xe7ekerek belirlenen parametrelere birlikte \xe7al\u0131\u015ft\u0131racakt\u0131r. Daha detayl\u0131 bilgi i\xe7in, npm'in ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," d\xf6k\xfcman\u0131n\u0131 inceleyebilirsin. Temelde ikisi de ayn\u0131 \u015fekilde \xe7al\u0131\u015f\u0131yor fakat ",(0,l.kt)("inlineCode",{parentName:"p"},"npx"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm")," yerine ",(0,l.kt)("inlineCode",{parentName:"p"},"npm")," yap\u0131s\u0131n\u0131 kullanarak i\u015flemleri ger\xe7ekle\u015ftiriyor."),(0,l.kt)("h2",{id:"npm-kullananlar"},"npm kullananlar"),(0,l.kt)("p",null,"npm has a great package runner called ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),". pnpm offers the same tool via the ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpx")," command. The only difference is that ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpx")," uses ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm")," for installing packages."))}k.isMDXComponent=!0}}]);