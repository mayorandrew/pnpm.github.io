"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[418],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(t),c=l,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||i;return t?a.createElement(k,r(r({ref:n},m),{},{components:t})):a.createElement(k,r({ref:n},m))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1078:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var a=t(2081),l=t(4604),i=(t(9496),t(9613)),r=["components"],p={id:"installation",title:"Installation"},o=void 0,s={unversionedId:"installation",id:"installation",title:"Installation",description:"Using a standalone script",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/id/next/installation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"Motivation",permalink:"/id/next/motivation"},next:{title:"pnpm CLI",permalink:"/id/next/pnpm-cli"}},m={},u=[{value:"Using a standalone script",id:"using-a-standalone-script",level:2},{value:"On Windows",id:"on-windows",level:3},{value:"On POSIX systems",id:"on-posix-systems",level:3},{value:"On Alpine Linux",id:"on-alpine-linux",level:3},{value:"Installing a specific version",id:"installing-a-specific-version",level:3},{value:"Using Corepack",id:"using-corepack",level:2},{value:"Using npm",id:"using-npm",level:2},{value:"Using Homebrew",id:"using-homebrew",level:2},{value:"Using Scoop",id:"using-scoop",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Using a shorter alias",id:"using-a-shorter-alias",level:2},{value:"Adding a permanent alias on POSIX systems",id:"adding-a-permanent-alias-on-posix-systems",level:4},{value:"Adding a permanent alias in Powershell (Windows):",id:"adding-a-permanent-alias-in-powershell-windows",level:4},{value:"Uninstalling pnpm",id:"uninstalling-pnpm",level:2}],d={toc:u};function c(e){var n=e.components,t=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"using-a-standalone-script"},"Using a standalone script"),(0,i.kt)("p",null,"You may install pnpm even if you don't have Node.js installed, using the following scripts."),(0,i.kt)("h3",{id:"on-windows"},"On Windows"),(0,i.kt)("p",null,"Using PowerShell:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,i.kt)("h3",{id:"on-posix-systems"},"On POSIX systems"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,i.kt)("p",null,"If you don't have curl installed, you would like to use wget:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,i.kt)("h3",{id:"on-alpine-linux"},"On Alpine Linux"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;\n')),(0,i.kt)("h3",{id:"installing-a-specific-version"},"Installing a specific version"),(0,i.kt)("p",null,"Prior to running the install script, you may optionally set an env variable ",(0,i.kt)("inlineCode",{parentName:"p"},"PNPM_VERSION")," to install a specific version of pnpm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sh -\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You may use the ",(0,i.kt)("a",{parentName:"p",href:"/id/next/cli/env"},"pnpm env")," command then to install Node.js.")),(0,i.kt)("h2",{id:"using-corepack"},"Using Corepack"),(0,i.kt)("p",null,"Since v16.13, Node.js is shipping ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," for managing package managers. This is an experimental feature, so you need to enable it by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,i.kt)("p",null,"This will automatically install pnpm on your system. However, it probably won't be the latest version of pnpm. To upgrade it, check what is the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"latest pnpm version")," and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,i.kt)("p",null,"With Node.js v16.17 or newer, you may install the ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," version of pnpm by just specifying the tag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"corepack prepare pnpm@latest --activate\n")),(0,i.kt)("h2",{id:"using-npm"},"Using npm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,i.kt)("h2",{id:"using-homebrew"},"Using Homebrew"),(0,i.kt)("p",null,"If you have the package manager installed, you can install pnpm using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,i.kt)("h2",{id:"using-scoop"},"Using Scoop"),(0,i.kt)("p",null,"If you have Scoop installed, you can install pnpm using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Do you wanna use pnpm on CI servers? See: ",(0,i.kt)("a",{parentName:"p",href:"/id/next/continuous-integration"},"Continuous Integration"),".")),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null,"Here is a list of past pnpm versions with respective Node.js version support."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,i.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,i.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If pnpm is broken and you cannot fix it by reinstalling, you might need to remove it manually from the PATH."),(0,i.kt)("p",null,"Let's assume you have the following error when running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,i.kt)("p",null,"First, try to find the location of pnpm by running: ",(0,i.kt)("inlineCode",{parentName:"p"},"which pnpm"),". If you're on Windows, run this command in Git Bash. You'll get the location of the pnpm command, for instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,i.kt)("p",null,"Now that you know where the pnpm CLI is, open that directory and remove any pnpm-related files (",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm"),", etc). Once done, install pnpm again and it should work as expected."),(0,i.kt)("h2",{id:"using-a-shorter-alias"},"Using a shorter alias"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," might be hard to type, so you may use a shorter alias like ",(0,i.kt)("inlineCode",{parentName:"p"},"pn")," instead."),(0,i.kt)("h4",{id:"adding-a-permanent-alias-on-posix-systems"},"Adding a permanent alias on POSIX systems"),(0,i.kt)("p",null,"Just put the following line to your ",(0,i.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".zshrc"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"config.fish"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"alias pn=pnpm\n")),(0,i.kt)("h4",{id:"adding-a-permanent-alias-in-powershell-windows"},"Adding a permanent alias in Powershell (Windows):"),(0,i.kt)("p",null,"In a Powershell window with admin rights, execute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"notepad $profile.AllUsersAllHosts\n")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"profile.ps1")," file that opens, put:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"set-alias -name pn -value pnpm\n")),(0,i.kt)("p",null,"Save the file and close the window. You may need to close any open Powershell window in order for the alias to take effect."),(0,i.kt)("h2",{id:"uninstalling-pnpm"},"Uninstalling pnpm"),(0,i.kt)("p",null,"If you need to remove the pnpm CLI from your system and any files it has written to your disk, see ",(0,i.kt)("a",{parentName:"p",href:"/id/next/uninstall"},"Uninstalling pnpm"),"."))}c.isMDXComponent=!0}}]);