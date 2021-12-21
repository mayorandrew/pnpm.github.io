"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5917],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(9496);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=r.createContext({}),i=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(n),s=p,f=m["".concat(o,".").concat(s)]||m[s]||d[s]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function s(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:p,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3267:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>o,metadata:()=>i,toc:()=>u,default:()=>m});var r=n(9518),p=n(7344),a=(n(9496),n(9613)),l=["components"],c={id:"dlx",title:"pnpm dlx"},o=void 0,i={unversionedId:"cli/dlx",id:"cli/dlx",title:"pnpm dlx",description:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v6.13.0",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/ru/next/cli/dlx",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"current",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"docs",previous:{title:"pnpm exec",permalink:"/ru/next/cli/exec"},next:{title:"pnpm create",permalink:"/ru/next/cli/create"}},u=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",children:[{value:"--package &lt;\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043a\u0435\u0442\u0430&gt;",id:"--package-\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435-\u043f\u0430\u043a\u0435\u0442\u0430",children:[],level:3},{value:"--silent, -s",id:"--silent--s",children:[],level:3}],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,p.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v6.13.0"),(0,a.kt)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u0438\u0437 \u0440\u0435\u0435\u0441\u0442\u0440\u0430, \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u044f \u0435\u0433\u043e \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u0435\u0433\u043e \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043b\u044e\u0431\u043e\u0439 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u0430\u043a \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0443 \u043f\u0430\u043a\u0435\u0442\u0430."),(0,a.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," \u0432 \u043b\u044e\u0431\u043e\u043c \u043c\u0435\u0441\u0442\u0435 \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 react \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0431\u0435\u0437 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u0432 \u0434\u0440\u0443\u0433\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,a.kt)("p",null,"\u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," \u0438\u0437 \u0440\u0435\u0435\u0441\u0442\u0440\u0430 \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0435\u0433\u043e \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438."),(0,a.kt)("p",null,"Since v6.23.1 you may also specify which exact version of the package you'd like to use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app@next ./my-app\n")),(0,a.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,a.kt)("h3",{id:"--package-\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435-\u043f\u0430\u043a\u0435\u0442\u0430"},"--package ","<","\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043a\u0435\u0442\u0430",">"),(0,a.kt)("p",null,"\u041f\u0430\u043a\u0435\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u0434 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u044b."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,a.kt)("p",null,"\u041d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 \u0432\u0435\u0440\u0441\u0438\u0438 6.14.5, \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0440\u0430\u0437\u0443 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0430\u043a\u0435\u0442\u043e\u0432:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")),(0,a.kt)("h3",{id:"--silent--s"},"--silent, -s"),(0,a.kt)("p",null,"Added in: v6.17.0"),(0,a.kt)("p",null,"Only the output of the executed command is printed."))}m.isMDXComponent=!0}}]);