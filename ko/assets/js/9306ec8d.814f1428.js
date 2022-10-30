"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5314],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||p;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=n.length,a=new Array(p);a[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<p;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(2962),l=n(2742),p=(n(9496),n(9613)),a=["components"],i={id:"run",title:"pnpm run"},o=void 0,s={unversionedId:"cli/run",id:"version-6.x/cli/run",title:"pnpm run",description:"\ubcc4\uce6d: run-script",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-6.x/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/ko/6.x/cli/run",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"6.x",frontMatter:{id:"run",title:"pnpm run"},sidebar:"version-6.x/docs",previous:{title:"pnpm why",permalink:"/ko/6.x/cli/why"},next:{title:"pnpm test",permalink:"/ko/6.x/cli/test"}},u={},c=[{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:2},{value:"\uc0c1\uc138 \uc815\ubcf4",id:"\uc0c1\uc138-\uc815\ubcf4",level:2},{value:"<code>npm run</code>\uacfc\uc758 \ucc28\uc774\uc810",id:"npm-run\uacfc\uc758-\ucc28\uc774\uc810",level:2},{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"script-shell",id:"script-shell",level:3},{value:"shell-emulator",id:"shell-emulator",level:3},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--if-present",id:"--if-present",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--stream",id:"--stream",level:3},{value:"--aggregate-output",id:"--aggregate-output",level:3},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,l.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\ubcc4\uce6d: ",(0,p.kt)("inlineCode",{parentName:"p"},"run-script")),(0,p.kt)("p",null,"\ud328\ud0a4\uc9c0\uc758 \ub9e4\ub2c8\ud398\uc2a4\ud2b8 \ud30c\uc77c\uc5d0 \uc815\uc758\ub41c \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,p.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"\uc5d0 \uad6c\uc131\ub41c ",(0,p.kt)("inlineCode",{parentName:"p"},"watch")," \uc2a4\ud06c\ub9bd\ud2b8\uac00 \uc788\ub2e4\uace0 \uac00\uc815\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "build-command --watch"\n}\n')),(0,p.kt)("p",null,"\uc774\uc81c ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run watch"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud574\ub2f9 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4! \uac04\ub2e8\ud558\uc9c0\uc694? \ud0a4 \uc785\ub825\uacfc \uc2dc\uac04\uc744 \uc808\uc57d\ud558\ub294 \uac83\uc744 \uc88b\uc544\ud558\ub294 \uc0ac\ub78c\ub4e4\uc744 \uc704\ud574 \uc8fc\ubaa9\ud574\uc57c \ud560 \ub610 \ub2e4\ub978 \uc0ac\ud56d\uc740 \ubaa8\ub4e0 \uc2a4\ud06c\ub9bd\ud2b8\uac00 pnpm \uba85\ub839\uc73c\ub85c \uc568\ub9ac\uc5b4\uc2f1\ub41c\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \uad81\uadf9\uc801\uc73c\ub85c ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm watch")," \ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," \uc758 \ucd95\uc57d\ud615\uc785\ub2c8\ub2e4 (\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 pnpm \uba85\ub839\uacfc \ub3d9\uc77c\ud55c \uc774\ub984\uc744 \uacf5\uc720\ud558\uc9c0 \uc54a\ub294 \uc2a4\ud06c\ub9bd\ud2b8\uc5d0\ub9cc \ud574\ub2f9\ud568)."),(0,p.kt)("h2",{id:"\uc0c1\uc138-\uc815\ubcf4"},"\uc0c1\uc138 \uc815\ubcf4"),(0,p.kt)("p",null,"\uc178\uc758 \uae30\uc874 ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH"),"\uc5d0 \ub354\ud558\uc5ec, ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run")," \uc740 ",(0,p.kt)("inlineCode",{parentName:"p"},"scripts"),"\uc5d0 \uc81c\uacf5\ub41c ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH")," \uc5d0 ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," \uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4. \uc989, \ud328\ud0a4\uc9c0\uac00 \uc124\uce58\ub418\uc5b4 \uc788\ub294 \ud55c \uc77c\ubc18 \uba85\ub839\uc5b4\ucc98\ub7fc \uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, ",(0,p.kt)("inlineCode",{parentName:"p"},"eslint")," \uac00 \uc124\uce58\ub418\uc5b4 \uc788\ub294 \uacbd\uc6b0, \ub2e4\uc74c\uacfc \uac19\uc774 \uc2a4\ud06c\ub9bd\ud2b8 \ub97c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,p.kt)("p",null,"\uadf8\ub9ac\uace0 ",(0,p.kt)("inlineCode",{parentName:"p"},"eslint")," \uac00 \uc178\uc5d0 \uc804\uc5ed\uc801\uc73c\ub85c \uc124\uce58\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc544\ub3c4 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4\uc758 \uacbd\uc6b0, v3.5\ubd80\ud130 ",(0,p.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," \ub3c4 \uc5d0 ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH"),"\uc5d0 \ucd94\uac00\ub418\uc5c8\uc73c\ubbc0\ub85c, \ub3c4\uad6c\uac00 \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4\uc758 \ub8e8\ud2b8\uc5d0 \uc124\uce58\ub418\uc5c8\ub2e4\uba74 \uc5b4\ub5a4 \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \ud328\ud0a4\uc9c0\uc758 ",(0,p.kt)("inlineCode",{parentName:"p"},"scripts"),"\uc5d0\uc11c\ub3c4 \ud638\ucd9c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"npm-run\uacfc\uc758-\ucc28\uc774\uc810"},(0,p.kt)("inlineCode",{parentName:"h2"},"npm run"),"\uacfc\uc758 \ucc28\uc774\uc810"),(0,p.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c, pnpm\uc740 \uc0ac\uc6a9\uc790 \uc815\uc758 \uc2a4\ud06c\ub9bd\ud2b8 (\uc608\ub97c \ub4e4\uc5b4 ",(0,p.kt)("inlineCode",{parentName:"p"},"prestart"),") \uc5d0 \ub300\ud574 \uc784\uc758\uc758 ",(0,p.kt)("inlineCode",{parentName:"p"},"pre")," \ubc0f ",(0,p.kt)("inlineCode",{parentName:"p"},"post")," \ud6c4\ud06c\ub97c \uc2e4\ud589\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. npm\uc73c\ub85c\ubd80\ud130 \uc0c1\uc18d\ub41c \uc774 \ud589\uc704\ub294 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uba85\uc2dc\uc801\uc778 \ub300\uc2e0 \uc554\uc2dc\uc801\uc778 \uc0c1\ud0dc\ub85c \ub9cc\ub4e4\uba70, \uc2e4\ud589 \ud750\ub984\uc744 \ub09c\ub3c5\ud654\ud569\ub2c8\ub2e4. \ub610\ud55c ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm serve")," \uac00 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm preserve")," \ub97c \ub3d9\uc791\uc2dc\ud0a4\ub294 \ub180\ub77c\uc6b4 \uc2e4\ud589\uc73c\ub85c \uc774\uc5b4\uc84c\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uc5b4\ub5a4 \uc774\uc720\ub85c npm\uc758 pre/post \uc2a4\ud06c\ub9bd\ud2b8 \ub3d9\uc791\uc774 \ud544\uc694\ud55c \uacbd\uc6b0, ",(0,p.kt)("inlineCode",{parentName:"p"},"enable-pre-post-scripts")," \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uc138\uc694."),(0,p.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,p.kt)("h3",{id:"script-shell"},"script-shell"),(0,p.kt)("p",null,"Added in: v5.10.0"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Default: ",(0,p.kt)("strong",{parentName:"li"},"null")),(0,p.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,p.kt)("strong",{parentName:"li"},"path"))),(0,p.kt)("p",null,"The shell to use for scripts run with the ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run")," command."),(0,p.kt)("p",null,"For instance, to force usage of Git Bash on Windows:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,p.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,p.kt)("p",null,"Added in: v5.8.0"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,p.kt)("strong",{parentName:"li"},"false")),(0,p.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,p.kt)("strong",{parentName:"li"},"Boolean"))),(0,p.kt)("p",null,"When ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will use a JavaScript implementation of a ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash-like shell")," to execute scripts."),(0,p.kt)("p",null,"This option simplifies cross-platform scripting. For instance, by default, the next script will fail on non-POSIX-compliant systems:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,p.kt)("p",null,"But if the ",(0,p.kt)("inlineCode",{parentName:"p"},"shell-emulator")," setting is set to ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),", it will work on all platforms."),(0,p.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,p.kt)("p",null,"This runs an arbitrary command from each package's \"scripts\" object. If a package doesn't have the command, it is skipped. If none of the packages have the command, the command fails."),(0,p.kt)("h3",{id:"--if-present"},"--if-present"),(0,p.kt)("p",null,"Added in: v4.5.0"),(0,p.kt)("p",null,"You can use the ",(0,p.kt)("inlineCode",{parentName:"p"},"--if-present")," flag to avoid exiting with a non-zero exit code when the script is undefined. This lets you run potentially undefined scripts without breaking the execution chain."),(0,p.kt)("h3",{id:"--parallel"},"--parallel"),(0,p.kt)("p",null,"\ubc84\uc804 5.1.0\uc5d0\uc11c \ucd94\uac00\ub428"),(0,p.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,p.kt)("h3",{id:"--stream"},"--stream"),(0,p.kt)("p",null,"\ubc84\uc804 5.1.0\uc5d0\uc11c \ucd94\uac00\ub428"),(0,p.kt)("p",null,"Stream output from child processes immediately, prefixed with the originating package directory. This allows output from different packages to be interleaved."),(0,p.kt)("h3",{id:"--aggregate-output"},"--aggregate-output"),(0,p.kt)("p",null,"\ubc84\uc804 6.24.0\uc5d0\uc11c \ucd94\uac00\ub428"),(0,p.kt)("p",null,"\ubcd1\ub82c\ub85c \uc2e4\ud589\ub418\ub294 \uc790\uc2dd \ud504\ub85c\uc138\uc2a4\uc758 \ucd9c\ub825\uc744 \uc9d1\uacc4\ud558\uace0 \uc790\uc2dd \ud504\ub85c\uc138\uc2a4\uac00 \uc644\ub8cc\ub420 \ub54c\ub9cc \uacb0\uacfc\ub97c \ucd9c\ub825\ud569\ub2c8\ub2e4. ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm -r <command>")," \uba85\ub839\uc5b4\uac00 ",(0,p.kt)("inlineCode",{parentName:"p"},"--parallel")," \ub610\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency=<number>")," \uc640 \ud568\uaed8 \uc2e4\ud589\ud55c \ud6c4 \ub300\uc6a9\ub7c9 \ub85c\uadf8\ub97c \uc77d\uae30\uac00 \ud6e8\uc52c \uc26c\uac8c \ub9cc\ub4e4\uc5b4 \uc90d\ub2c8\ub2e4 (\ud2b9\ud788 CI\uc5d0\uc11c). ",(0,p.kt)("inlineCode",{parentName:"p"},"--reporter=append-only")," \ub9cc \uc9c0\uc6d0\ub429\ub2c8\ub2e4."),(0,p.kt)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),(0,p.kt)("p",null,"\ubc84\uc804 6.1.0\uc5d0\uc11c \ucd94\uac00\ub428"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,p.kt)("strong",{parentName:"li"},"false")),(0,p.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,p.kt)("strong",{parentName:"li"},"Boolean"))),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\uc774\uba74, pnpm\uc740 \ubaa8\ub4e0 pre/post \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc790\ub3d9\uc73c\ub85c \uc2e4\ud589\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm foo")," \ub97c \uc2e4\ud589\ud558\ub294 \uac83\uc740 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo")," \uc744 \uc2e4\ud589\ud558\ub294 \uac83\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/ko/6.x/filtering"},"\ud544\ud130\ub9c1\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694.")))}d.isMDXComponent=!0}}]);