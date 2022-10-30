"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2982],{9613:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>u});var r=a(9496);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),s=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=t,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return a?r.createElement(k,l(l({ref:n},d),{},{components:a})):r.createElement(k,l({ref:n},d))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3529:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=a(2962),t=a(2742),i=(a(9496),a(9613)),l=["components"],o={id:"aliases",title:"Lakaplar"},p=void 0,s={unversionedId:"aliases",id:"version-7.x/aliases",title:"Lakaplar",description:"Lakaplar, paketleri farkl\u0131 isimler ile y\xfcklemeyi sa\u011flar.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-7.x/aliases.md",sourceDirName:".",slug:"/aliases",permalink:"/tr/aliases",draft:!1,editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"7.x",frontMatter:{id:"aliases",title:"Lakaplar"},sidebar:"version-7.x/docs",previous:{title:"\xc7al\u0131\u015fma Alan\u0131",permalink:"/tr/workspaces"},next:{title:"Komut sat\u0131r\u0131 oto-tamamlama",permalink:"/tr/completion"}},d={},m=[],c={toc:m};function u(e){var n=e.components,a=(0,t.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Lakaplar, paketleri farkl\u0131 isimler ile y\xfcklemeyi sa\u011flar."),(0,i.kt)("p",null,"Projede ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," kulland\u0131\u011f\u0131n\u0131 varsayal\u0131m. ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash"),"'te bir bug var ve \xe7al\u0131\u015fman\u0131 etkiliyor. Bu sorunu \xe7\xf6zmek i\xe7in bir fikrin ve \xe7\xf6z\xfcm\xfcn var ancak ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," bu \xe7\xf6z\xfcm\xfc i\xe7eri alm\u0131yor. Normal \u015fartlarda bir paket yaz\u0131p ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," ba\u011f\u0131ml\u0131l\u0131\u011f\u0131 ile veya tamamen farkl\u0131 bir ad ile yay\u0131nlayabilirsiniz. E\u011fer ikinci \xe7\xf6z\xfcm\xfc se\xe7tiyseniz, paket ad\u0131n\u0131 t\xfcm projede de\u011fi\u015ftirmeniz gerekebilir. (",(0,i.kt)("inlineCode",{parentName:"p"},"require('lodash')")," => ",(0,i.kt)("inlineCode",{parentName:"p"},"require('awesome-lodash')"),") Ama lakaplar ile \xfc\xe7\xfcnc\xfc bir se\xe7ene\u011fin de var."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," ad\u0131nda bir paket yay\u0131nla ve onu ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," ad\u0131 ile \xe7a\u011f\u0131r:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm add lodash@npm:awesome-lodash\n")),(0,i.kt)("p",null,"Kodda de\u011fi\u015fikli\u011fe gerek yok, ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," gereken her yerde ",(0,i.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," \u015feklinde \xe7a\u011fr\u0131labilir."),(0,i.kt)("p",null,"Bazen projede bir paketin iki farkl\u0131 versiyonunu kullanmak isteyebilirsin. K\u0131saca:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add lodash1@npm:lodash@1\npnpm add lodash2@npm:lodash@2\n")),(0,i.kt)("p",null,"\u015eimdi ise, lodash'in ilk versiyonuna(",(0,i.kt)("inlineCode",{parentName:"p"},"require('lodash1')"),") ve ikinci versiyonuna(",(0,i.kt)("inlineCode",{parentName:"p"},"require('lodash2')"),") ihtiyac\u0131n var."),(0,i.kt)("p",null,"Kancalar ile \xe7ok daha g\xfc\xe7l\xfc ve kullan\u0131\u015fl\u0131 hale gelebilir. E\u011fer ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," i\xe7eren t\xfcm paketleri ",(0,i.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," ile ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),"'da de\u011fi\u015ftirmek istersen,  ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," dosyas\u0131na gidip \u015fu de\u011fi\u015fiklikleri yapman gerekiyor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg) {\n  if (pkg.dependencies && pkg.dependencies.lodash) {\n    pkg.dependencies.lodash = 'npm:awesome-lodash@^1.0.0'\n  }\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")))}u.isMDXComponent=!0}}]);