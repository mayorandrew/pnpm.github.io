"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7166],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var r=n(2962),o=n(2742),a=(n(9496),n(9613)),l=["components"],p={id:"completion",title:"\u547d\u4ee4\u884c tab \u81ea\u52a8\u8865\u5168"},i=void 0,c={unversionedId:"completion",id:"version-7.x/completion",title:"\u547d\u4ee4\u884c tab \u81ea\u52a8\u8865\u5168",description:"\u4e0e\u5176\u4ed6\u901a\u5e38\u9700\u8981\u63d2\u4ef6\u7684\u6d41\u884c\u5305\u7ba1\u7406\u5668\u4e0d\u540c\uff0cpnpm \u652f\u6301 Bash\u3001Zsh\u3001Fish \u548c\u7c7b\u4f3c shell \u7684\u547d\u4ee4\u884c\u5236\u8868\u7b26\u8865\u5168\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-7.x/completion.md",sourceDirName:".",slug:"/completion",permalink:"/zh/completion",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"7.x",frontMatter:{id:"completion",title:"\u547d\u4ee4\u884c tab \u81ea\u52a8\u8865\u5168"},sidebar:"version-7.x/docs",previous:{title:"\u522b\u540d\uff08Aliases\uff09",permalink:"/zh/aliases"},next:{title:"\u5728 pnpm \u4e2d\u4f7f\u7528 Changesets",permalink:"/zh/using-changesets"}},s={},m=[{value:"Fig(\u4ec5\u9650macOS)",id:"fig\u4ec5\u9650macos",level:2}],u={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0e\u5176\u4ed6\u901a\u5e38\u9700\u8981\u63d2\u4ef6\u7684\u6d41\u884c\u5305\u7ba1\u7406\u5668\u4e0d\u540c\uff0cpnpm \u652f\u6301 Bash\u3001Zsh\u3001Fish \u548c\u7c7b\u4f3c shell \u7684\u547d\u4ee4\u884c\u5236\u8868\u7b26\u8865\u5168\u3002"),(0,a.kt)("p",null,"\u8981\u8bbe\u7f6e\u81ea\u52a8\u8865\u5168\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion\n")),(0,a.kt)("p",null,"CLI \u5c06\u8be2\u95ee\u4f7f\u7528\u54ea\u4e2a shell \u751f\u6210\u81ea\u52a8\u5b8c\u6210\u811a\u672c\u3002 \u6216\u8005\uff0c\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u4e2d\u6307\u5b9a\u76ee\u6807 shell\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion zsh\n")),(0,a.kt)("p",null,"\u8981\u67e5\u770b\u8865\u5168\u793a\u4f8b\uff0c\u8bf7\u9605\u8bfb ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4"},"\u8fd9\u7bc7\u6587\u7ae0"),"\u3002"),(0,a.kt)("h2",{id:"fig\u4ec5\u9650macos"},"Fig(\u4ec5\u9650macOS)"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://fig.io/"},"Fig")," \u83b7\u5f97\u4e00\u4e2a IDE \u98ce\u683c\u7684\u81ea\u52a8\u8865\u5168\u3002 \u5b83\u9002\u7528\u4e8e Bash\u3001Zsh \u548c Fish\u3002"),(0,a.kt)("p",null,"\u8981\u5b89\u88c5\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"brew install fig\n")))}f.isMDXComponent=!0}}]);