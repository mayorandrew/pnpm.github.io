"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9540],{9613:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(9496);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9088:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>p,toc:()=>u,default:()=>d});var n=t(98),i=t(6862),o=(t(9496),t(9613)),l=["components"],a={id:"rebuild",title:"pnpm rebuild"},c=void 0,p={unversionedId:"cli/rebuild",id:"version-5.x/cli/rebuild",isDocsHomePage:!1,title:"pnpm rebuild",description:"Aliases: rb",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/cli/rebuild.md",sourceDirName:"cli",slug:"/cli/rebuild",permalink:"/es/5.x/cli/rebuild",editUrl:"https://crowdin.com/project/pnpm/es",tags:[],version:"5.x",frontMatter:{id:"rebuild",title:"pnpm rebuild"},sidebar:"version-5.x/docs",previous:{title:"pnpm import",permalink:"/es/5.x/cli/import"},next:{title:"pnpm prune",permalink:"/es/5.x/cli/prune"}},u=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],s={toc:u};function d(e){var r=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aliases: ",(0,o.kt)("inlineCode",{parentName:"p"},"rb")),(0,o.kt)("p",null,"Rebuild a package."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"This command runs the ",(0,o.kt)("strong",{parentName:"p"},"pnpm rebuild")," command in every package of the monorepo."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/es/5.x/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);