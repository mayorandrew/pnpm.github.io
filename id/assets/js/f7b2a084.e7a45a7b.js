"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8295],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>s});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),s=a,f=d["".concat(l,".").concat(s)]||d[s]||m[s]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var r=n(2962),a=n(2742),o=(n(9496),n(9613)),i=["components"],u={title:"Opsi konfigurasi Node-Modules dengan pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},l=void 0,c={permalink:"/id/blog/2020/10/17/node-modules-configuration-options-with-pnpm",editUrl:"https://crowdin.com/project/pnpm/id",source:"@site/i18n/id/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",title:"Opsi konfigurasi Node-Modules dengan pnpm",description:"Ada banyak cara untuk membuat direktori nodemodules. Tujuan anda adalah untuk membuat direktori dengan mode strict semaksimal mungkin, medkipun demikian ada opsi untuk membuat nodemodules yang lebih longgar.",date:"2020-10-17T00:00:00.000Z",formattedDate:"17 Oktober 2020",tags:[],readingTime:1.6,hasTruncateMarker:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"Opsi konfigurasi Node-Modules dengan pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"Tahun 2021 untuk pnpm",permalink:"/id/blog/2021/12/29/yearly-update"},nextItem:{title:"Flat node_modules bukan satu-satunya cara",permalink:"/id/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},p={authorsImageUrls:[void 0]},m=[],d={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ada banyak cara untuk membuat direktori node_modules. Tujuan anda adalah untuk membuat direktori dengan mode strict semaksimal mungkin, medkipun demikian ada opsi untuk membuat node_modules yang lebih longgar."))}s.isMDXComponent=!0}}]);