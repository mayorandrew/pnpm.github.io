"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7251],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(t),c=l,k=u["".concat(o,".").concat(c)]||u[c]||d[c]||p;return t?a.createElement(k,r(r({ref:n},m),{},{components:t})):a.createElement(k,r({ref:n},m))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var p=t.length,r=new Array(p);r[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var s=2;s<p;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3987:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(2081),l=t(4604),p=(t(9496),t(9613)),r=["components"],i={id:"installation",title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},o=void 0,s={unversionedId:"installation",id:"installation",title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/ja/next/installation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"installation",title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},sidebar:"docs",previous:{title:"\u30e2\u30c1\u30d9\u30fc\u30b7\u30e7\u30f3",permalink:"/ja/next/motivation"},next:{title:"pnpm CLI",permalink:"/ja/next/pnpm-cli"}},m={},d=[{value:"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528",id:"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528",level:2},{value:"On Windows",id:"on-windows",level:3},{value:"On POSIX systems",id:"on-posix-systems",level:3},{value:"On Alpine Linux",id:"on-alpine-linux",level:3},{value:"Installing a specific version",id:"installing-a-specific-version",level:3},{value:"Corepack\u306e\u4f7f\u7528",id:"corepack\u306e\u4f7f\u7528",level:2},{value:"npm \u3092\u4f7f\u7528",id:"npm-\u3092\u4f7f\u7528",level:2},{value:"Homebrew \u3092\u4f7f\u7528",id:"homebrew-\u3092\u4f7f\u7528",level:2},{value:"Scoop \u3092\u4f7f\u7528",id:"scoop-\u3092\u4f7f\u7528",level:2},{value:"\u4e92\u63db\u6027",id:"\u4e92\u63db\u6027",level:2},{value:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0",id:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0",level:2},{value:"Using a shorter alias",id:"using-a-shorter-alias",level:2},{value:"Adding a permanent alias on POSIX systems",id:"adding-a-permanent-alias-on-posix-systems",level:4},{value:"Adding a permanent alias in Powershell (Windows):",id:"adding-a-permanent-alias-in-powershell-windows",level:4},{value:"pnpm\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"pnpm\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:2}],u={toc:d};function c(e){var n=e.components,t=(0,l.Z)(e,r);return(0,p.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528"},"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528"),(0,p.kt)("p",null,"You may install pnpm even if you don't have Node.js installed, using the following scripts."),(0,p.kt)("h3",{id:"on-windows"},"On Windows"),(0,p.kt)("p",null,"Using PowerShell:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,p.kt)("h3",{id:"on-posix-systems"},"On POSIX systems"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,p.kt)("p",null,"curl\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001wget\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,p.kt)("h3",{id:"on-alpine-linux"},"On Alpine Linux"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;\n')),(0,p.kt)("h3",{id:"installing-a-specific-version"},"Installing a specific version"),(0,p.kt)("p",null,"Prior to running the install script, you may optionally set an env variable ",(0,p.kt)("inlineCode",{parentName:"p"},"PNPM_VERSION")," to install a specific version of pnpm:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sh -\n")),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},(0,p.kt)("a",{parentName:"p",href:"/ja/next/cli/env"},"pnpm env")," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066 Node.js \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002")),(0,p.kt)("h2",{id:"corepack\u306e\u4f7f\u7528"},"Corepack\u306e\u4f7f\u7528"),(0,p.kt)("p",null,"Node.js\u3067\u306fv16.13\u4ee5\u964d\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306b ",(0,p.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack"),"\u306e\u63d0\u4f9b\u3092\u59cb\u3081\u307e\u3057\u305f\u3002 \u3053\u308c\u306f\u5b9f\u9a13\u7684\u306a\u6a5f\u80fd\u3067\u3042\u308b\u305f\u3081\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u6709\u52b9\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,p.kt)("p",null,"\u3053\u308c\u306b\u3088\u308a\u3001\u30b7\u30b9\u30c6\u30e0\u306bpnpm\u304c\u81ea\u52d5\u7684\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u304a\u305d\u3089\u304fpnpm\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u306f\u306a\u3044\u3067\u3057\u3087\u3046\u3002 \u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u306b\u306f\u3001 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"\u6700\u65b0\u306epnpm\u30d0\u30fc\u30b8\u30e7\u30f3")," \u3092\u78ba\u8a8d\u3057\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,p.kt)("p",null,"With Node.js v16.17 or newer, you may install the ",(0,p.kt)("inlineCode",{parentName:"p"},"latest")," version of pnpm by just specifying the tag:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"corepack prepare pnpm@latest --activate\n")),(0,p.kt)("h2",{id:"npm-\u3092\u4f7f\u7528"},"npm \u3092\u4f7f\u7528"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,p.kt)("h2",{id:"homebrew-\u3092\u4f7f\u7528"},"Homebrew \u3092\u4f7f\u7528"),(0,p.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066pnpm\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,p.kt)("h2",{id:"scoop-\u3092\u4f7f\u7528"},"Scoop \u3092\u4f7f\u7528"),(0,p.kt)("p",null,"Scoop \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066pnpm\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"CI\u30b5\u30fc\u30d0\u3067pnpm\u3092\u4f7f\u3044\u305f\u3044\u3067\u3059\u304b\uff1f \u3053\u3061\u3089\u3092\u3054\u89a7\u304f\u3060\u3055\u3044: ",(0,p.kt)("a",{parentName:"p",href:"/ja/next/continuous-integration"},"Continuous Integration"))),(0,p.kt)("h2",{id:"\u4e92\u63db\u6027"},"\u4e92\u63db\u6027"),(0,p.kt)("p",null,"\u3053\u308c\u307e\u3067\u306epnpm\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u3001\u305d\u308c\u305e\u308c\u306eNode.js\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5bfe\u5fdc\u72b6\u6cc1\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,p.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,p.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,p.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,p.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,p.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,p.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,p.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,p.kt)("h2",{id:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0"},"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0"),(0,p.kt)("p",null,"pnpm \u304c\u58ca\u308c\u3066\u3044\u3066\u3001\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3082\u4fee\u6b63\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001PATH \u304b\u3089\u624b\u52d5\u3067\u524a\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u3092\u5b9f\u884c\u3057\u3066\u3044\u308b\u3068\u304d\u306b\u3001\u6b21\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u3068\u3057\u307e\u3057\u3087\u3046\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,p.kt)("p",null,"\u307e\u305a\u3001 ",(0,p.kt)("inlineCode",{parentName:"p"},"which pnpm")," \u3092\u5b9f\u884c\u3057\u3066\u3001pnpm \u304c\u3069\u3053\u306b\u3042\u308b\u304b\u63a2\u3057\u3066\u304f\u3060\u3055\u3044\u3002 Windows \u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001Git Bash \u3067\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 \u4f8b\u3048\u3070\u6b21\u306e\u3088\u3046\u306b\u3001 pnpm \u30b3\u30de\u30f3\u30c9\u306e\u5834\u6240\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,p.kt)("p",null,"\u3053\u308c\u3067\u3001 pnpm \u306e CLI \u304c\u3069\u3053\u306b\u3042\u308b\u304b\u304c\u5206\u304b\u308a\u307e\u3057\u305f\u3002\u305d\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u958b\u304d\u3001 pnpm \u95a2\u9023\u30d5\u30a1\u30a4\u30eb (",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),"\u3001 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),"\u3001 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," \u306a\u3069) \u3092\u524a\u9664\u3057\u307e\u3059\u3002 \u5b8c\u4e86\u3057\u305f\u3089\u3001pnpm \u3092\u518d\u5ea6\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3068\u3001\u671f\u5f85\u3069\u304a\u308a\u306b\u52d5\u4f5c\u3059\u308b\u306f\u305a\u3067\u3059\u3002"),(0,p.kt)("h2",{id:"using-a-shorter-alias"},"Using a shorter alias"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," might be hard to type, so you may use a shorter alias like ",(0,p.kt)("inlineCode",{parentName:"p"},"pn")," instead."),(0,p.kt)("h4",{id:"adding-a-permanent-alias-on-posix-systems"},"Adding a permanent alias on POSIX systems"),(0,p.kt)("p",null,"Just put the following line to your ",(0,p.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,p.kt)("inlineCode",{parentName:"p"},".zshrc"),", or ",(0,p.kt)("inlineCode",{parentName:"p"},"config.fish"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"alias pn=pnpm\n")),(0,p.kt)("h4",{id:"adding-a-permanent-alias-in-powershell-windows"},"Adding a permanent alias in Powershell (Windows):"),(0,p.kt)("p",null,"In a Powershell window with admin rights, execute:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"notepad $profile.AllUsersAllHosts\n")),(0,p.kt)("p",null,"In the ",(0,p.kt)("inlineCode",{parentName:"p"},"profile.ps1")," file that opens, put:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"set-alias -name pn -value pnpm\n")),(0,p.kt)("p",null,"Save the file and close the window. You may need to close any open Powershell window in order for the alias to take effect."),(0,p.kt)("h2",{id:"pnpm\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"},"pnpm\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,p.kt)("p",null,"pnpm \u306e CLI \u3092\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u30c7\u30a3\u30b9\u30af\u306b\u3042\u308b\u95a2\u9023\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u524a\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306f\u3001",(0,p.kt)("a",{parentName:"p",href:"/ja/next/uninstall"},"pnpm \u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}c.isMDXComponent=!0}}]);