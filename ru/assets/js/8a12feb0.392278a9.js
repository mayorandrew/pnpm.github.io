"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2868],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1809:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>d});var n=r(9518),o=r(7344),a=(r(9496),r(9613)),l=["components"],i={id:"store",title:"pnpm store"},p=void 0,c={unversionedId:"cli/store",id:"version-5.x/cli/store",title:"pnpm store",description:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435\u043c \u043f\u0430\u043a\u0435\u0442\u043e\u0432.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-5.x/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/ru/5.x/cli/store",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"5.x",frontMatter:{id:"store",title:"pnpm store"},sidebar:"version-5.x/docs",previous:{title:"pnpm server",permalink:"/ru/5.x/cli/server"},next:{title:"package.json",permalink:"/ru/5.x/package_json"}},u=[{value:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b",id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b",children:[{value:"status",id:"status",children:[],level:3},{value:"add",id:"add",children:[],level:3},{value:"prune",id:"prune",children:[],level:3}],level:2}],s={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435\u043c \u043f\u0430\u043a\u0435\u0442\u043e\u0432."),(0,a.kt)("h2",{id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b"},"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435."),(0,a.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u0434 \u0432\u044b\u0445\u043e\u0434\u0430 0, \u0435\u0441\u043b\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043f\u0430\u043a\u0435\u0442\u0430 \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0442\u0430\u043a\u0438\u043c \u0436\u0435, \u043a\u0430\u043a\u0438\u043c \u043e\u043d\u043e \u0431\u044b\u043b\u043e \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0441\u043f\u0430\u043a\u043e\u0432\u043a\u0438."),(0,a.kt)("h3",{id:"add"},"add"),(0,a.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v2.12.0"),(0,a.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442 \u043a ",(0,a.kt)("a",{parentName:"p",href:"/ru/5.x/cli/add"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm add")),", \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u044d\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u043e\u0432\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435, \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u044f \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0438\u043b\u0438 \u0444\u0430\u0439\u043b\u043e\u0432 \u0432\u043d\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430."),(0,a.kt)("h3",{id:"prune"},"prune"),(0,a.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0431\u0435\u0441\u0445\u043e\u0437\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u0438\u0437 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430."),(0,a.kt)("p",null,"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430 \u0441\u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0442 \u043c\u0435\u0441\u0442\u043e \u043d\u0430 \u0434\u0438\u0441\u043a\u0435, \u043e\u0434\u043d\u0430\u043a\u043e \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u043c\u0435\u0434\u043b\u0438\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043f\u0430\u043a\u0435\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0437\u0430\u0442\u0440\u043e\u043d\u0443\u0442\u044b\u0435 \u043f\u0440\u0438 \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0438 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430 \u043f\u0430\u043a\u0435\u0442\u044b \u043a\u0430\u043a \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438. \u0412 \u043b\u044e\u0431\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u044d\u0442\u043e \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f, \u043e\u0434\u043d\u0430\u043a\u043e \u043e\u043d\u0430 \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f, \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u043e\u0441\u0442\u0430\u043b\u0438\u0441\u044c \u0431\u0435\u0441\u0445\u043e\u0437\u043d\u044b\u043c\u0438 \u043f\u0430\u043a\u0435\u0442\u044b \u043a\u0430\u043a \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u043d\u043e\u0432\u0430."),(0,a.kt)("p",null,"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0439\u0442\u0435 ",(0,a.kt)("a",{parentName:"p",href:"/ru/5.x/faq#what-does-pnpm-store-prune-do-is-it-harmful"}," FAQ")," \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u0430\u043a\u0435\u0442\u0430\u0445 \u0431\u0435\u0437 \u0441\u0441\u044b\u043b\u043e\u043a (\u0431\u0435\u0441\u0445\u043e\u0437\u043d\u044b\u0445) \u0438 \u043e \u043b\u0443\u0447\u0448\u0438\u0445 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430\u0445 \u0438 \u043f\u043e\u0434\u0445\u043e\u0434\u0430\u0445."),(0,a.kt)("p",null,"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u044d\u0442\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e, \u0435\u0441\u043b\u0438 \u0437\u0430\u043f\u0443\u0449\u0435\u043d ",(0,a.kt)("a",{parentName:"p",href:"/ru/5.x/cli/server"},"\u0441\u0435\u0440\u0432\u0435\u0440 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430"),"."))}d.isMDXComponent=!0}}]);