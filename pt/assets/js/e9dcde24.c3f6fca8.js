"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[400],{9613:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(9496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1962:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>c,toc:()=>s,default:()=>u});var n=t(9518),o=t(7344),a=(t(9496),t(9613)),i=["components"],p={id:"errors",title:"Error Codes"},l=void 0,c={unversionedId:"errors",id:"errors",title:"Error Codes",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/errors.md",sourceDirName:".",slug:"/errors",permalink:"/pt/next/errors",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"current",frontMatter:{id:"errors",title:"Error Codes"},sidebar:"docs",previous:{title:"Trabalhando com Git",permalink:"/pt/next/git"},next:{title:"Logos",permalink:"/pt/next/logos"}},s=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",children:[],level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",children:[],level:2}],d={toc:s};function u(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,a.kt)("p",null,"A modules directory is present and is linked to a different store directory."),(0,a.kt)("p",null,"If you changed the store directory intentionally, run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," and pnpm will reinstall the dependencies using the new store."),(0,a.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,a.kt)("p",null,"A project has a workspace dependency that does not exist in the workspace."),(0,a.kt)("p",null,"For instance, package ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," has ",(0,a.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,a.kt)("p",null,"However, there is only ",(0,a.kt)("inlineCode",{parentName:"p"},"bar@2.0.0")," in the workspace, so ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," will fail."),(0,a.kt)("p",null,"To fix this error, all dependencies that use the ",(0,a.kt)("a",{parentName:"p",href:"/pt/next/workspaces#workspace-protocol-workspace"},"workspace protocol")," should be updated to use versions of packages that are present in the workspace. This can be done either manually or using the ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r update")," command."))}u.isMDXComponent=!0}}]);