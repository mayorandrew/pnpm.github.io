"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4445],{9613:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>d});var t=a(9496);function p(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){p(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,p=function(e,n){if(null==e)return{};var a,t,p={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(p[a]=e[a]);return p}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var i=t.createContext({}),k=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},s=function(e){var n=k(e.components);return t.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,p=e.mdxType,r=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=k(a),d=p,u=m["".concat(i,".").concat(d)]||m[d]||c[d]||r;return a?t.createElement(u,l(l({ref:n},s),{},{components:a})):t.createElement(u,l({ref:n},s))}));function d(e,n){var a=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:p,l[1]=o;for(var k=2;k<r;k++)l[k]=a[k];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9961:(e,n,a)=>{a.r(n),a.d(n,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>k,toc:()=>s,default:()=>m});var t=a(9518),p=a(7344),r=(a(9496),a(9613)),l=["components"],o={id:"workspaces",title:"\u5de5\u4f5c\u7a7a\u95f4"},i=void 0,k={unversionedId:"workspaces",id:"version-5.x/workspaces",title:"\u5de5\u4f5c\u7a7a\u95f4",description:"pnpm \u5185\u7f6e\u4e86\u5bf9\u5355\u4e00\u5b58\u50a8\u5e93\uff08\u4e5f\u79f0\u4e3a\u591a\u5305\u5b58\u50a8\u5e93\u3001 \u591a\u9879\u76ee\u5b58\u50a8\u5e93\u6216\u5355\u4f53\u5b58\u50a8\u5e93\uff09\u7684\u652f\u6301\u3002 \u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u5de5\u4f5c\u533a\u4ee5\u5c06\u591a\u4e2a\u9879\u76ee\u5408\u5e76\u5230\u4e00\u4e2a\u5b58\u50a8\u5e93\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-5.x/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/zh/5.x/workspaces",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"5.x",frontMatter:{id:"workspaces",title:"\u5de5\u4f5c\u7a7a\u95f4"},sidebar:"version-5.x/docs",previous:{title:"pnpmfile.js",permalink:"/zh/5.x/pnpmfile"},next:{title:"\u522b\u540d",permalink:"/zh/5.x/aliases"}},s=[{value:"\u5de5\u4f5c\u7a7a\u95f4\u534f\u8bae (workspace:)",id:"\u5de5\u4f5c\u7a7a\u95f4\u534f\u8bae-workspace",children:[{value:"\u901a\u8fc7\u522b\u540d\u5f15\u7528\u5de5\u4f5c\u7a7a\u95f4\u5305",id:"\u901a\u8fc7\u522b\u540d\u5f15\u7528\u5de5\u4f5c\u7a7a\u95f4\u5305",children:[],level:3},{value:"\u901a\u8fc7\u76f8\u5bf9\u8def\u5f84\u5f15\u7528\u5de5\u4f5c\u533a\u5305",id:"\u901a\u8fc7\u76f8\u5bf9\u8def\u5f84\u5f15\u7528\u5de5\u4f5c\u533a\u5305",children:[],level:3},{value:"\u53d1\u5e03\u5de5\u4f5c\u7a7a\u95f4\u5305",id:"\u53d1\u5e03\u5de5\u4f5c\u7a7a\u95f4\u5305",children:[],level:3}],level:2},{value:"\u53d1\u5e03\u5de5\u4f5c\u7a7a\u95f4 (release workspace)",id:"\u53d1\u5e03\u5de5\u4f5c\u7a7a\u95f4-release-workspace",children:[],level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",children:[{value:"link-workspace-packages",id:"link-workspace-packages",children:[],level:3},{value:"prefer-workspace-packages",id:"prefer-workspace-packages",children:[],level:3},{value:"shared-workspace-lockfile",id:"shared-workspace-lockfile",children:[],level:3},{value:"save-workspace-protocol",id:"save-workspace-protocol",children:[],level:3}],level:2}],c={toc:s};function m(e){var n=e.components,a=(0,p.Z)(e,l);return(0,r.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"pnpm \u5185\u7f6e\u4e86\u5bf9\u5355\u4e00\u5b58\u50a8\u5e93\uff08\u4e5f\u79f0\u4e3a\u591a\u5305\u5b58\u50a8\u5e93\u3001 \u591a\u9879\u76ee\u5b58\u50a8\u5e93\u6216\u5355\u4f53\u5b58\u50a8\u5e93\uff09\u7684\u652f\u6301\u3002 \u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u5de5\u4f5c\u533a\u4ee5\u5c06\u591a\u4e2a\u9879\u76ee\u5408\u5e76\u5230\u4e00\u4e2a\u5b58\u50a8\u5e93\u4e2d\u3002"),(0,r.kt)("p",null,"\u5de5\u4f5c\u7a7a\u95f4\u7684\u6839\u76ee\u5f55\u4e2d\u5fc5\u987b\u6709 ",(0,r.kt)("a",{parentName:"p",href:"/zh/5.x/pnpm-workspace_yaml"},(0,r.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," \u6587\u4ef6\u3002 \u5de5\u4f5c\u7a7a\u95f4\u7684\u6839\u76ee\u5f55\u4e2d\u4e5f\u53ef\u80fd\u6709 ",(0,r.kt)("a",{parentName:"p",href:"/zh/5.x/npmrc"},(0,r.kt)("inlineCode",{parentName:"a"},".npmrc")),"\u3002"),(0,r.kt)("h2",{id:"\u5de5\u4f5c\u7a7a\u95f4\u534f\u8bae-workspace"},"\u5de5\u4f5c\u7a7a\u95f4\u534f\u8bae (workspace:)"),(0,r.kt)("p",null,"Supported since v3.7.0."),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u53ef\u7528\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"packages"),"\u4e0e\u5df2\u58f0\u660e\u7684\u53ef\u7528\u8303\u56f4\u76f8\u5339\u914d\uff0cpnpm \u5c06\u4ece\u5de5\u4f5c\u533a\u94fe\u63a5\u8fd9\u4e9b",(0,r.kt)("inlineCode",{parentName:"p"},"packages"),"\u3002 \u4f8b\u5982\uff0c\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," \u4e2d\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo"\uff1a"^1.0.0"')," \u7684\u8fd9\u4e2a\u4f9d\u8d56\u9879\uff0c\u5219 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u94fe\u63a5\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," \u3002 \u4f46\u662f\uff0c\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," \u7684\u4f9d\u8d56\u9879\u4e2d\u6709",(0,r.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," \uff0c\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," \u5728\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u5e76\u4e0d\u5b58\u5728\uff0c\u5219\u5c06\u4ecenpm registry\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," \u3002 \u8fd9\u79cd\u884c\u4e3a\u5e26\u6765\u4e86\u4e00\u4e9b\u4e0d\u786e\u5b9a\u6027\u3002"),(0,r.kt)("p",null,"Luckily, pnpm supports the ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace:")," protocol (the same as in Yarn v2). \u5f53\u4f7f\u7528\u6b64\u534f\u8bae\u65f6\uff0cpnpm \u5c06\u62d2\u7edd\u89e3\u6790\u9664\u672c\u5730\u5de5\u4f5c\u533a ",(0,r.kt)("inlineCode",{parentName:"p"},"package")," \u4e4b\u5916\u7684\u4efb\u4f55\u5185\u5bb9\u3002 \u56e0\u6b64\uff0c\u5982\u679c\u60a8\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"')," \u65f6\uff0c\u5b89\u88c5\u5c06\u4f1a\u5931\u8d25\uff0c\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," \u4e0d\u5b58\u5728\u4e8e\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u3002"),(0,r.kt)("p",null,"\u5f53 ",(0,r.kt)("a",{parentName:"p",href:"#link-workspace-packages"},"link-workspace-packages")," \u9009\u9879 \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\u65f6\uff0c\u8fd9\u4e2a\u534f\u8bae\u5c31\u5c24\u5176\u6709\u7528\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4ec5\u5f53\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace:"),"\u534f\u8bae\u58f0\u660e\u4f9d\u8d56\uff0cpnpm \u624d\u4f1a\u4ece\u5de5\u4f5c\u7a7a\u95f4\u94fe\u63a5\u6240\u9700\u7684\u5305\u3002"),(0,r.kt)("h3",{id:"\u901a\u8fc7\u522b\u540d\u5f15\u7528\u5de5\u4f5c\u7a7a\u95f4\u5305"},"\u901a\u8fc7\u522b\u540d\u5f15\u7528\u5de5\u4f5c\u7a7a\u95f4\u5305"),(0,r.kt)("p",null,"Added in 5.12.0"),(0,r.kt)("p",null,"\u5047\u8bbe\u60a8\u5728\u5de5\u4f5c\u533a\u6709\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u7684\u5305\u3002 \u901a\u5e38\u4f60\u4f1a\u50cf\u8fd9\u6837\u5f15\u7528\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:*"'),"\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u8981\u4f7f\u7528\u5176\u4ed6\u522b\u540d\uff0c\u90a3\u4e48\u4ee5\u4e0b\u8bed\u6cd5\u4e5f\u5c06\u8d77\u4f5c\u7528: ",(0,r.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"\u3002"),(0,r.kt)("p",null,"\u5728\u53d1\u5e03\u4e4b\u524d\uff0c\u522b\u540d\u88ab\u8f6c\u6362\u4e3a\u5e38\u89c4\u540d\u79f0\u3002 \u4e0a\u9762\u7684\u793a\u4f8b\u5c06\u53d8\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"'),"\u3002"),(0,r.kt)("h3",{id:"\u901a\u8fc7\u76f8\u5bf9\u8def\u5f84\u5f15\u7528\u5de5\u4f5c\u533a\u5305"},"\u901a\u8fc7\u76f8\u5bf9\u8def\u5f84\u5f15\u7528\u5de5\u4f5c\u533a\u5305"),(0,r.kt)("p",null,"Added in 5.12.0"),(0,r.kt)("p",null,"\u5de5\u4f5c\u533a\u5185\u6709\u4e24\u4e2a\u8f6f\u4ef6\u5305\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bar")," \u53ef\u80fd\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u5176\u4f9d\u8d56\u9879\u58f0\u660e\u4e3a\u8fd9\u6837",(0,r.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"'),"\u3002 \u5728\u53d1\u5e03\u4e4b\u524d\uff0c\u8fd9\u4e9b\u5c06\u8f6c\u6362\u4e3a\u6240\u6709\u5305\u7ba1\u7406\u5668\u652f\u6301\u7684\u5e38\u89c4\u7684\u7248\u672c\u89c4\u8303\u3002"),(0,r.kt)("h3",{id:"\u53d1\u5e03\u5de5\u4f5c\u7a7a\u95f4\u5305"},"\u53d1\u5e03\u5de5\u4f5c\u7a7a\u95f4\u5305"),(0,r.kt)("p",null,"\u5f53\u5de5\u4f5c\u7a7a\u95f4\u5305\u6253\u5305\u5230\u5f52\u6863\uff08\u65e0\u8bba\u5b83\u662f\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm pack")," \uff0c\u8fd8\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm publish")," \u4e4b\u7c7b\u7684\u53d1\u5e03\u547d\u4ee4\uff09\u65f6\uff0c\u6211\u4eec\u5c06\u52a8\u6001\u66ff\u6362\u8fd9\u4e9b ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace:")," \u4f9d\u8d56:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The corresponding version in the target workspace (if you use ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),")"),(0,r.kt)("li",{parentName:"ul"},"\u76f8\u5173\u7684 semver \u8303\u56f4\uff08\u5bf9\u4e8e\u4efb\u4f55\u5176\u4ed6\u8303\u56f4\u7c7b\u578b\uff09")),(0,r.kt)("p",null,"So for example, if we have a workspace package at version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.5.0"),", the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:^1.2.3"\n    }\n}\n')),(0,r.kt)("p",null,"\u5c06\u8f6c\u5316\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "^1.2.3"\n    }\n}\n')),(0,r.kt)("p",null,"\u8fd9\u4e2a\u529f\u80fd\u5141\u8bb8\u60a8\u53ef\u4ee5\u53d1\u5e03\u8f6c\u5316\u4e4b\u540e\u7684\u5305\u5230\u8fdc\u7aef\uff0c\u5e76\u4e14\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\u672c\u5730\u5de5\u4f5c\u7a7a\u95f4\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"packages"),"\uff0c\u800c\u4e0d\u9700\u8981\u5176\u5b83\u4e2d\u95f4\u6b65\u9aa4\u3002\u5305\u7684\u4f7f\u7528\u8005\u4e5f\u53ef\u4ee5\u50cf\u5e38\u89c4\u7684\u5305\u90a3\u6837\u6b63\u5e38\u4f7f\u7528\uff0c\u4e14\u4ecd\u7136\u53ef\u4ee5\u53d7\u76ca\u4e8e\u8bed\u4e49\u5316\u7248\u672c\u3002"),(0,r.kt)("h2",{id:"\u53d1\u5e03\u5de5\u4f5c\u7a7a\u95f4-release-workspace"},"\u53d1\u5e03\u5de5\u4f5c\u7a7a\u95f4 (release workspace)"),(0,r.kt)("p",null,"\u5de5\u4f5c\u7a7a\u95f4\u5185\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," \u7684\u7248\u672c\u7ba1\u7406\u662f\u4e2a\u5341\u5206\u590d\u6742\u7684\u4efb\u52a1\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),"\u6682\u672a\u652f\u6301\u5185\u7f6e\u7684\u89e3\u51b3\u65b9\u6848\u3002 \u4e0d\u8fc7\uff0c\u6709\u4e24\u4e2a\u6d4b\u8bd5\u5b8c\u597d\u7684\u5de5\u5177\u53ef\u4ee5\u5904\u7406\u7248\u672c\u7ba1\u7406\u4e14\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," \uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/atlassian/changesets"},"changesets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,r.kt)("p",null,"\u6709\u5173\u5982\u4f55\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Rush")," \u5efa\u7acb\u4ed3\u5e93\uff0c\u8bf7\u9605\u8bfb",(0,r.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"\u8fd9\u7bc7\u6587\u7ae0"),"\u3002"),(0,r.kt)("p",null,"\u6709\u5173\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," \u4e2d\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Changesets")," \uff0c\u8bf7\u9605\u8bfb",(0,r.kt)("a",{parentName:"p",href:"/zh/5.x/using-changesets"},"\u8fd9\u91cc"),"\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,r.kt)("h3",{id:"link-workspace-packages"},"link-workspace-packages"),(0,r.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.14.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b: ",(0,r.kt)("strong",{parentName:"li"},"true"),", ",(0,r.kt)("strong",{parentName:"li"},"false"),", ",(0,r.kt)("strong",{parentName:"li"},"deep"))),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u4e86\u6b64\u9009\u9879\uff0c\u672c\u5730\u53ef\u7528\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"packages"),"\u5c06\u88ab\u94fe\u63a5\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u4e2d\u800c\u4e0d\u662f\u4ece\u6ce8\u518c\u8868\u4e0b\u8f7d\u3002 \u8fd9\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"}," monorepo")," \u9879\u76ee\u4e2d\u4f7f\u7528\u8d77\u6765\u5c06\u5341\u5206\u65b9\u4fbf\u3002 \u5982\u679c\u60a8\u9700\u8981\u5c06\u672c\u5730",(0,r.kt)("inlineCode",{parentName:"p"}," packages")," \u4e5f\u94fe\u63a5\u5230\u5b50\u4f9d\u8d56\u9879\uff0c\u5219\u53ef\u4ee5\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"deep")," \uff08\u81ea v5 \u7248\u672c\u8d77\uff09\u3002"),(0,r.kt)("p",null,"\u5426\u5219\uff0c",(0,r.kt)("inlineCode",{parentName:"p"}," packages")," \u5c06\u5168\u90e8\u4ece\u6ce8\u518c\u8868\u4e0b\u8f7d\u5e76\u5b89\u88c5\u3002 \u4e0d\u8fc7\uff0c\u5de5\u4f5c\u7a7a\u95f4\u7684",(0,r.kt)("inlineCode",{parentName:"p"}," packages")," \u4ecd\u7136\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace:")," \u8303\u56f4\u534f\u8bae\u88ab\u94fe\u63a5\u5230\u3002"),(0,r.kt)("h3",{id:"prefer-workspace-packages"},"prefer-workspace-packages"),(0,r.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1a v5.13.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u4e86\u6b64\u9009\u9879\uff0c\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u7684\u672c\u5730 ",(0,r.kt)("inlineCode",{parentName:"p"},"package "),"\u5c06\u4f18\u5148\u4e8e\u6ce8\u518c\u8868\uff0c\u5373\u4f7f\u6ce8\u518c\u8868\u4e2d\u6709\u4e86\u8be5 ",(0,r.kt)("inlineCode",{parentName:"p"},"package ")," \u7684\u65b0\u7248\u672c\u3002"),(0,r.kt)("p",null,"\u8be5\u8bbe\u7f6e\u53ea\u5728\u5de5\u4f5c\u7a7a\u95f4\u672a\u5f00\u542f ",(0,r.kt)("inlineCode",{parentName:"p"},"save-workspace-protocol")," \u65f6\u6709\u6548\u3002"),(0,r.kt)("h3",{id:"shared-workspace-lockfile"},"shared-workspace-lockfile"),(0,r.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.17.0 \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"shared-workspace-shrinkwrap\u51cf")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u9009\u9879\uff0cpnpm \u4f1a\u5728\u5de5\u4f5c\u7a7a\u95f4\u7684\u6839\u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e2a\u552f\u4e00\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," \u6587\u4ef6\u3002 \u8fd9\u4e5f\u610f\u5473\u7740\u5de5\u4f5c\u7a7a\u95f4\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"packages"),"\u7684\u6240\u6709\u4f9d\u8d56\u9879\u90fd\u5c06\u4f4d\u4e8e\u5355\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u4e2d\u3002\uff08\u540c\u65f6\u8f6f\u94fe\u63a5\u5230\u5b83\u4eec",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u6587\u4ef6\u5939\u4e2d\u7528\u4e8e Node \u7684\u6a21\u5757\u89e3\u6790\uff09\u3002"),(0,r.kt)("p",null,"\u6b64\u9009\u9879\u7684\u597d\u5904\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u4f9d\u8d56\u90fd\u662f\u4e00\u4e2a\u5355\u4f8b"),(0,r.kt)("li",{parentName:"ul"},"\u5728 monorepo \u4e2d\u7684\u5b89\u88c5\u66f4\u5feb"),(0,r.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u66f4\u6539\u90fd\u5728\u4e00\u4e2a\u6587\u4ef6\u4e2d\u3001\u4ee3\u7801\u5ba1\u67e5\uff08Cr \uff09\u51cf\u5c11")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5c3d\u7ba1\u6240\u6709\u4f9d\u8d56\u9879\u90fd\u5c06\u786c\u94fe\u63a5\u5230\u6839 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u4e2d\uff0c\u4f46",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," \u53ea\u80fd\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u58f0\u660e\u7684 \uff0c\u56e0\u6b64 pnpm \u7684\u4e25\u683c\u6027\u5f97\u4ee5\u4fdd\u7559\u3002 \u8fd9\u662f\u4e0a\u8ff0\u8f6f\u94fe\u63a5\u7684\u6548\u679c\u3002"))),(0,r.kt)("h3",{id:"save-workspace-protocol"},"save-workspace-protocol"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u9009\u9879\uff0c\u65b0\u7684\u4f9d\u8d56\u5c06\u4f1a\u88ab\u5de5\u4f5c\u7a7a\u95f4\u534f\u8bae ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace:"),"\u6dfb\u52a0\uff0c\u5f53\u4e14\u4ec5\u5f53\u4f9d\u8d56\u5b58\u5728\u4e8e\u5de5\u4f5c\u7a7a\u95f4\u65f6\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u9879\u76ee\u4e2d\u7684\u5de5\u5177\u4e0d\u652f\u6301\u5de5\u4f5c\u7a7a\u95f4\u534f\u8bae\uff0c\u60a8\u53ef\u80fd\u5e0c\u671b\u5c06\u6b64\u8bbe\u7f6e\u66f4\u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\uff08\u6700\u597d\u63d0\u4ea4\u4e00\u4e2a PR \u8ba9\u5176\u5728\u540e\u7eed\u53ef\u4ee5\u652f\u6301\uff09\u3002"))}m.isMDXComponent=!0}}]);