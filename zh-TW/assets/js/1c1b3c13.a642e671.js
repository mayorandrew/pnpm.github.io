"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6802],{9613:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>d});var t=n(9496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||p;return n?t.createElement(f,a(a({ref:r},s),{},{components:n})):t.createElement(f,a({ref:r},s))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<p;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1169:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=n(2962),o=n(2742),p=(n(9496),n(9613)),a=["components"],i={id:"errors",title:"\u932f\u8aa4\u78bc"},l=void 0,c={unversionedId:"errors",id:"version-6.x/errors",title:"\u932f\u8aa4\u78bc",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-6.x/errors.md",sourceDirName:".",slug:"/errors",permalink:"/zh-TW/6.x/errors",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"6.x",frontMatter:{id:"errors",title:"\u932f\u8aa4\u78bc"},sidebar:"version-6.x/docs",previous:{title:"\u529f\u80fd\u6bd4\u8f03",permalink:"/zh-TW/6.x/feature-comparison"},next:{title:"Logos",permalink:"/zh-TW/6.x/logos"}},s={},u=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2}],m={toc:u};function d(e){var r=e.components,n=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,p.kt)("p",null,"\u6709\u4e00\u500b\u5df2\u5b58\u5728\u7684\u6a21\u7d44\u76ee\u9304\u4e26\u4e14\u88ab\u9023\u7d50\u5230\u4e0d\u540c\u7684\u5132\u85cf\u5eab\u76ee\u9304\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u60a8\u6709\u610f\u66f4\u6539\u5132\u85cf\u5eab\u76ee\u9304\uff0c\u8acb\u57f7\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install"),"\uff0cpnpm \u5c07\u4f7f\u7528\u65b0\u7684\u5132\u85cf\u5eab\u91cd\u65b0\u5b89\u88dd\u4f9d\u8cf4\u5957\u4ef6\u3002"),(0,p.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,p.kt)("p",null,"\u5c08\u6848\u64c1\u6709\u5de5\u4f5c\u5340\u4e2d\u4e0d\u5b58\u5728\u7684\u5de5\u4f5c\u5340\u4f9d\u8cf4\u5957\u4ef6\u3002"),(0,p.kt)("p",null,"\u4f8b\u5982\uff0c\u5957\u4ef6 ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," \u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"dependencies")," \u4e2d\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),"\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,p.kt)("p",null,"\u7136\u800c\uff0c\u5de5\u4f5c\u5340\u4e2d\u53ea\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"bar@2.0.0"),"\uff0c\u56e0\u6b64 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u5c07\u6703\u5931\u6557\u3002"),(0,p.kt)("p",null,"\u82e5\u8981\u4fee\u5fa9\u6b64\u554f\u984c\uff0c\u61c9\u66f4\u65b0\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"/zh-TW/6.x/workspaces#workspace-protocol-workspace"},"workspace protocol")," \u7684\u6240\u6709\u4f9d\u8cf4\u5957\u4ef6\uff0c\u4ee5\u4f7f\u7528\u5de5\u4f5c\u5340\u4e2d\u5b58\u5728\u7684\u7248\u672c\u3002 \u9019\u4e5f\u53ef\u4ee5\u624b\u52d5\u5b8c\u6210\uff0c\u6216\u662f\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm -r update")," \u6307\u4ee4\u3002"))}d.isMDXComponent=!0}}]);