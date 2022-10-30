"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[694],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),k=l,d=m["".concat(i,".").concat(k)]||m[k]||c[k]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(2962),l=r(2742),a=(r(9496),r(9613)),o=["components"],s={id:"server",title:"pnpm server"},i=void 0,p={unversionedId:"cli/server",id:"version-7.x/cli/server",title:"pnpm server",description:"Manage a store server.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-7.x/cli/server.md",sourceDirName:"cli",slug:"/cli/server",permalink:"/tr/cli/server",draft:!1,editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"7.x",frontMatter:{id:"server",title:"pnpm server"},sidebar:"version-7.x/docs",previous:{title:"pnpm -r, --recursive",permalink:"/tr/cli/recursive"},next:{title:"pnpm store",permalink:"/tr/cli/store"}},u={},c=[{value:"Komutlar",id:"komutlar",level:2},{value:"pnpm server start",id:"pnpm-server-start",level:3},{value:"pnpm server stop",id:"pnpm-server-stop",level:3},{value:"pnpm server status",id:"pnpm-server-status",level:3},{value:"Parametreler",id:"parametreler",level:2},{value:"--background",id:"--background",level:3},{value:"--network-concurrency",id:"--network-concurrency",level:3},{value:"--protocol",id:"--protocol",level:3},{value:"--port",id:"--port",level:3},{value:"--store-dir",id:"--store-dir",level:3},{value:"--no-lock",id:"--no-lock",level:3},{value:"--ignore-stop-requests",id:"--ignore-stop-requests",level:3},{value:"--ignore-upload-requests",id:"--ignore-upload-requests",level:3}],m={toc:c};function k(e){var t=e.components,r=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Manage a store server."),(0,a.kt)("h2",{id:"komutlar"},"Komutlar"),(0,a.kt)("h3",{id:"pnpm-server-start"},"pnpm server start"),(0,a.kt)("p",null,"Starts a server that performs all interactions with the store. Other commands will delegate any store-related tasks to this server."),(0,a.kt)("h3",{id:"pnpm-server-stop"},"pnpm server stop"),(0,a.kt)("p",null,"Stops the store server."),(0,a.kt)("h3",{id:"pnpm-server-status"},"pnpm server status"),(0,a.kt)("p",null,"Prints information about the running server."),(0,a.kt)("h2",{id:"parametreler"},"Parametreler"),(0,a.kt)("h3",{id:"--background"},"--background"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tip: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Runs the server in the background, similar to daemonizing on UNIX systems."),(0,a.kt)("h3",{id:"--network-concurrency"},"--network-concurrency"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,a.kt)("strong",{parentName:"li"},"null")),(0,a.kt)("li",{parentName:"ul"},"Tip: ",(0,a.kt)("strong",{parentName:"li"},"Say\u0131"))),(0,a.kt)("p",null,"The maximum number of network requests to process simultaneously."),(0,a.kt)("h3",{id:"--protocol"},"--protocol"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,a.kt)("strong",{parentName:"li"},"auto")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"auto"),", ",(0,a.kt)("strong",{parentName:"li"},"tcp"),", ",(0,a.kt)("strong",{parentName:"li"},"ipc"))),(0,a.kt)("p",null,"The communication protocol used by the server. When this is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"auto"),", IPC is used on all systems except for Windows, which uses TCP."),(0,a.kt)("h3",{id:"--port"},"--port"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"5813")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"port number"))),(0,a.kt)("p",null,"The port number to use when TCP is used for communication. If a port is specified and the protocol is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"auto"),", regardless of system type, the protocol is automatically set to use TCP."),(0,a.kt)("h3",{id:"--store-dir"},"--store-dir"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"<","home",">","/.pnpm-store")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Path"))),(0,a.kt)("p",null,"The directory to use for the content addressable store."),(0,a.kt)("h3",{id:"--no-lock"},"--","[no-]","lock"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tip: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Set whether to make the package store immutable to external processes while the server is running or not."),(0,a.kt)("h3",{id:"--ignore-stop-requests"},"--ignore-stop-requests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tip: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Prevents you from stopping the server using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm server stop"),"."),(0,a.kt)("h3",{id:"--ignore-upload-requests"},"--ignore-upload-requests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tip: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Prevents creating a new side effect cache during install."))}k.isMDXComponent=!0}}]);