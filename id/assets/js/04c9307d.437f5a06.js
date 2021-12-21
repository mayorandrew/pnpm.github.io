"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4186],{9613:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>v});var t=r(9496);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(r),v=o,m=u["".concat(p,".").concat(v)]||u[v]||s[v]||i;return r?t.createElement(m,l(l({ref:n},d),{},{components:r})):t.createElement(m,l({ref:n},d))}));function v(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1691:(e,n,r)=>{r.r(n),r.d(n,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>u});var t=r(9518),o=r(7344),i=(r(9496),r(9613)),l=["components"],a={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"cli/remove",title:"pnpm remove",description:"Aliases: rm, uninstall, un",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/id/next/cli/remove",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"docs",previous:{title:"pnpm update",permalink:"/id/next/cli/update"},next:{title:"pnpm link",permalink:"/id/next/cli/link"}},d=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--global",id:"--global",children:[],level:3},{value:"--save-dev, -D",id:"--save-dev--d",children:[],level:3},{value:"--save-optional, -O",id:"--save-optional--o",children:[],level:3},{value:"--save-prod, -P",id:"--save-prod--p",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],s={toc:d};function u(e){var n=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Aliases: rm, uninstall, un"),(0,i.kt)("p",null,"Removes packages from ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," and from the project's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"When used inside a ",(0,i.kt)("a",{parentName:"p",href:"/id/next/workspaces"},"workspace"),", removes a dependency (or dependencies) from every workspace package."),(0,i.kt)("p",null,"When used not inside a workspace, removes a dependency (or dependencies) from every package found in subdirectories."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"Remove a global package."),(0,i.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,i.kt)("p",null,"Only remove the dependency from ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,i.kt)("p",null,"Only remove the dependency from ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,i.kt)("p",null,"Only remove the dependency from ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/id/next/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);