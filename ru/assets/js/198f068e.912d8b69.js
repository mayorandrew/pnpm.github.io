"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6194],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(r),f=o,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||i;return r?n.createElement(d,p(p({ref:t},u),{},{components:r})):n.createElement(d,p({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,p=new Array(i);p[0]=s;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},89:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var n=r(2962),o=r(2742),i=(r(9496),r(9613)),p=["components"],a={id:"import",title:"pnpm import"},l=void 0,c={unversionedId:"cli/import",id:"version-6.x/cli/import",title:"pnpm import",description:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v2.15.0",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/cli/import.md",sourceDirName:"cli",slug:"/cli/import",permalink:"/ru/6.x/cli/import",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"6.x",frontMatter:{id:"import",title:"pnpm import"},sidebar:"version-6.x/docs",previous:{title:"pnpm unlink",permalink:"/ru/6.x/cli/unlink"},next:{title:"pnpm rebuild",permalink:"/ru/6.x/cli/rebuild"}},u={},m=[],s={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v2.15.0"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm import")," \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," \u0438\u0437 \u0444\u0430\u0439\u043b\u0430 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430 \u043f\u0430\u043a\u0435\u0442\u043e\u0432. \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"package-lock.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn.lock")," (\u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 v6.14.0)")),(0,i.kt)("p",null,"Note that if you have workspaces you wish to import dependencies for, they will need to be declared in a ",(0,i.kt)("a",{parentName:"p",href:"/ru/6.x/pnpm-workspace_yaml"},"pnpm-workspace.yaml")," file beforehand."))}f.isMDXComponent=!0}}]);