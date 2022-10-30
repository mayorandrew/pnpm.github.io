"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1223],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=n(2962),a=n(2742),i=(n(9496),n(9613)),r=["components"],s={id:"motivation",title:"Motivation"},l=void 0,d={unversionedId:"motivation",id:"version-6.x/motivation",title:"Motivation",description:"Saving disk space and boosting installation speed",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-6.x/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/id/6.x/motivation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"6.x",frontMatter:{id:"motivation",title:"Motivation"},sidebar:"version-6.x/docs",next:{title:"Installation",permalink:"/id/6.x/installation"}},p={},c=[{value:"Saving disk space and boosting installation speed",id:"saving-disk-space-and-boosting-installation-speed",level:2},{value:"Creating a non-flat node_modules directory",id:"creating-a-non-flat-node_modules-directory",level:2}],u={toc:c};function m(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"saving-disk-space-and-boosting-installation-speed"},"Saving disk space and boosting installation speed"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/HemSays/status/1434921646083563525/photo/1"},(0,i.kt)("img",{src:n(2995).Z,width:"2500",height:"1406"}))),(0,i.kt)("p",null,"When using npm or Yarn, if you have 100 projects using a dependency, you will have 100 copies of that dependency saved on disk. With pnpm, the dependency will be stored in a content-addressable store, so:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If you depend on different versions of the dependency, only the files that differ are added to the store. For instance, if it has 100 files, and a new version has a change in only one of those files, ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm update")," will only add 1 new file to the store, instead of cloning the entire dependency just for the singular change."),(0,i.kt)("li",{parentName:"ol"},"All the files are saved in a single place on the disk. When packages are installed, their files are hard-linked from that single place, consuming no additional disk space. This allows you to share dependencies of the same version across projects.")),(0,i.kt)("p",null,"As a result, you save a lot of space on your disk proportional to the number of projects and dependencies, and you have a lot faster installations!"),(0,i.kt)("h2",{id:"creating-a-non-flat-node_modules-directory"},"Creating a non-flat node_modules directory"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/xiaokedada/status/1471691763102679041/photo/1"},(0,i.kt)("img",{src:n(9426).Z,width:"2920",height:"1392"}))),(0,i.kt)("p",null,"When installing dependencies with npm or Yarn Classic, all packages are hoisted to the root of the modules directory. As a result, source code has access to dependencies that are not added as dependencies to the project."),(0,i.kt)("p",null,"By default, pnpm uses symlinks to add only the direct dependencies of the project into the root of the modules directory. If you'd like more details about the unique ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," structure that pnpm creates and why it works fine with the Node.js ecosystem, read:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"Flat node_modules is not the only way")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/id/6.x/symlinked-node-modules-structure"},"Symlinked node_modules structure"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If your tooling doesn't work well with symlinks, you may still use pnpm and set the ",(0,i.kt)("a",{parentName:"p",href:"npmrc#node-linker"},"node-linker")," setting to ",(0,i.kt)("inlineCode",{parentName:"p"},"hoisted"),". This will instruct pnpm to create a node_modules directory that is similar to those created by npm and Yarn Classic.")))}m.isMDXComponent=!0},2995:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cafs-illustration-7be6bd97e43ba11a031b099869321deb.jpg"},9426:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node-modules-structure-8ab301ddaed3b7530858b233f5b3be57.jpg"}}]);