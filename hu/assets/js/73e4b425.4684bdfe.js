"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6995],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2067:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>d});var r=n(98),l=n(6862),o=(n(9496),n(9613)),i=["components"],a={id:"audit",title:"pnpm audit"},p=void 0,c={unversionedId:"cli/audit",id:"version-5.x/cli/audit",isDocsHomePage:!1,title:"pnpm audit",description:"Hozz\xe1adva: 4.3.0",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-5.x/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/hu/5.x/cli/audit",editUrl:"https://crowdin.com/project/pnpm/hu",tags:[],version:"5.x",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"version-5.x/docs",previous:{title:"pnpm install-test",permalink:"/hu/5.x/cli/install-test"},next:{title:"pnpm list",permalink:"/hu/5.x/cli/list"}},s=[{value:"Opci\xf3k",id:"opci\xf3k",children:[{value:"--audit-level &lt;s\xfalyoss\xe1g&gt;",id:"--audit-level-s\xfalyoss\xe1g",children:[],level:3},{value:"--json",id:"--json",children:[],level:3},{value:"--dev, -D",id:"--dev--d",children:[],level:3},{value:"--prod, -P",id:"--prod--p",children:[],level:3},{value:"--no-optional",id:"--no-optional",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hozz\xe1adva: 4.3.0"),(0,o.kt)("p",null,"A telep\xedtett csomagokkal kapcsolatos ismert biztons\xe1gi probl\xe9m\xe1k ellen\u0151rz\xe9se."),(0,o.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,o.kt)("h3",{id:"--audit-level-s\xfalyoss\xe1g"},"--audit-level ","<","s\xfalyoss\xe1g",">"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"T\xedpus: ",(0,o.kt)("strong",{parentName:"li"},"low"),", ",(0,o.kt)("strong",{parentName:"li"},"moderate"),", ",(0,o.kt)("strong",{parentName:"li"},"high"),", ",(0,o.kt)("strong",{parentName:"li"},"critical")),(0,o.kt)("li",{parentName:"ul"},"Alap\xe9rtelmezett: ",(0,o.kt)("strong",{parentName:"li"},"low"))),(0,o.kt)("p",null,"Csak a megadott ",(0,o.kt)("inlineCode",{parentName:"p"},"<s\xfalyoss\xe1g>"),"-n\xe1l nagyobb vagy azzal egyenl\u0151 probl\xe9m\xe1k lesznek megjelen\xedtve."),(0,o.kt)("h3",{id:"--json"},"--json"),(0,o.kt)("p",null,"Az eredm\xe9ny JSON form\xe1tumban lesz megjelen\xedtve."),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,"Csak a dev f\xfcgg\u0151s\xe9gek ellen\u0151rz\xe9se."),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,"Csak a prod f\xfcgg\u0151s\xe9gek ellen\u0151rz\xe9se."),(0,o.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,o.kt)("p",null,"Az ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"-ek nem lesznek ellen\u0151rizve."))}d.isMDXComponent=!0}}]);