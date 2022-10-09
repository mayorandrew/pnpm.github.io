"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[279],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(t),c=l,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||r;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6917:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var a=t(2081),l=t(4604),r=(t(9496),t(9613)),i=["components"],p={id:"installation",title:"Instalaci\xf3n"},o=void 0,s={unversionedId:"installation",id:"installation",title:"Instalaci\xf3n",description:"Usando la instalaci\xf3n autonoma",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/es/next/installation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"current",frontMatter:{id:"installation",title:"Instalaci\xf3n"},sidebar:"docs",previous:{title:"Motivaci\xf3n",permalink:"/es/next/motivation"},next:{title:"pnpm CLI",permalink:"/es/next/pnpm-cli"}},d={},m=[{value:"Usando la instalaci\xf3n autonoma",id:"usando-la-instalaci\xf3n-autonoma",level:2},{value:"On Windows",id:"on-windows",level:3},{value:"On POSIX systems",id:"on-posix-systems",level:3},{value:"On Alpine Linux",id:"on-alpine-linux",level:3},{value:"Installing a specific version",id:"installing-a-specific-version",level:3},{value:"Usando Corepack",id:"usando-corepack",level:2},{value:"Usando pnpm",id:"usando-pnpm",level:2},{value:"Usando Homebrew",id:"usando-homebrew",level:2},{value:"Usando Scoop",id:"usando-scoop",level:2},{value:"Compatibilidad",id:"compatibilidad",level:2},{value:"Resoluci\xf3n de problemas",id:"resoluci\xf3n-de-problemas",level:2},{value:"Using a shorter alias",id:"using-a-shorter-alias",level:2},{value:"Adding a permanent alias on POSIX systems",id:"adding-a-permanent-alias-on-posix-systems",level:4},{value:"Adding a permanent alias in Powershell (Windows):",id:"adding-a-permanent-alias-in-powershell-windows",level:4},{value:"Desinstalando pnpm",id:"desinstalando-pnpm",level:2}],u={toc:m};function c(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usando-la-instalaci\xf3n-autonoma"},"Usando la instalaci\xf3n autonoma"),(0,r.kt)("p",null,"You may install pnpm even if you don't have Node.js installed, using the following scripts."),(0,r.kt)("h3",{id:"on-windows"},"On Windows"),(0,r.kt)("p",null,"Using PowerShell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,r.kt)("h3",{id:"on-posix-systems"},"On POSIX systems"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"Si no tiene curl instalado, puede usar wget:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("h3",{id:"on-alpine-linux"},"On Alpine Linux"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;\n')),(0,r.kt)("h3",{id:"installing-a-specific-version"},"Installing a specific version"),(0,r.kt)("p",null,"Prior to running the install script, you may optionally set an env variable ",(0,r.kt)("inlineCode",{parentName:"p"},"PNPM_VERSION")," to install a specific version of pnpm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sh -\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Puede usar ",(0,r.kt)("a",{parentName:"p",href:"/es/next/cli/env"},"pnpm env")," para instalar Node.js.")),(0,r.kt)("h2",{id:"usando-corepack"},"Usando Corepack"),(0,r.kt)("p",null,"Desde la v16.13, Node.js est\xe1 distribuyendo ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," para administrar administradores de paquetes. Esta es una funci\xf3n experimental, por lo que debe habilitarla ejecutando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,r.kt)("p",null,"Esto instalar\xe1 autom\xe1ticamente pnpm en su sistema. Sin embargo, probablemente no sea la \xfaltima versi\xf3n de pnpm. To upgrade it, check what is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"latest pnpm version")," and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,r.kt)("p",null,"With Node.js v16.17 or newer, you may install the ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," version of pnpm by just specifying the tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@latest --activate\n")),(0,r.kt)("h2",{id:"usando-pnpm"},"Usando pnpm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,r.kt)("h2",{id:"usando-homebrew"},"Usando Homebrew"),(0,r.kt)("p",null,"Si tiene instalado el administrador de paquetes, puede instalar pnpm usando el siguiente comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,r.kt)("h2",{id:"usando-scoop"},"Usando Scoop"),(0,r.kt)("p",null,"Si tiene Scoop instalado, puede instalar pnpm usando el siguiente comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Do you wanna use pnpm on CI servers? See: ",(0,r.kt)("a",{parentName:"p",href:"/es/next/continuous-integration"},"Continuous Integration"),".")),(0,r.kt)("h2",{id:"compatibilidad"},"Compatibilidad"),(0,r.kt)("p",null,"Here is a list of past pnpm versions with respective Node.js version support."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("h2",{id:"resoluci\xf3n-de-problemas"},"Resoluci\xf3n de problemas"),(0,r.kt)("p",null,"Si pnpm est\xe1 roto y no puede solucionarlo reinstalando, es posible que deba eliminarlo manualmente del PATH."),(0,r.kt)("p",null,"Supongamos que tiene el siguiente error al ejecutar ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,r.kt)("p",null,"Primero, intente encontrar la ubicaci\xf3n de pnpm ejecutando: ",(0,r.kt)("inlineCode",{parentName:"p"},"which pnpm"),". Si est\xe1 en Windows, ejecute este comando en Git Bash. Obtendr\xe1 la ubicaci\xf3n del comando pnpm, por ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,r.kt)("p",null,"Ahora que sabe d\xf3nde est\xe1 la CLI de pnpm, abra ese directorio y elimine los archivos relacionados con pnpm (",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),", etc.). Una vez hecho esto, instale pnpm nuevamente y deber\xeda funcionar como se esperaba."),(0,r.kt)("h2",{id:"using-a-shorter-alias"},"Using a shorter alias"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," might be hard to type, so you may use a shorter alias like ",(0,r.kt)("inlineCode",{parentName:"p"},"pn")," instead."),(0,r.kt)("h4",{id:"adding-a-permanent-alias-on-posix-systems"},"Adding a permanent alias on POSIX systems"),(0,r.kt)("p",null,"Just put the following line to your ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".zshrc"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"config.fish"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"alias pn=pnpm\n")),(0,r.kt)("h4",{id:"adding-a-permanent-alias-in-powershell-windows"},"Adding a permanent alias in Powershell (Windows):"),(0,r.kt)("p",null,"In a Powershell window with admin rights, execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"notepad $profile.AllUsersAllHosts\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"profile.ps1")," file that opens, put:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"set-alias -name pn -value pnpm\n")),(0,r.kt)("p",null,"Save the file and close the window. You may need to close any open Powershell window in order for the alias to take effect."),(0,r.kt)("h2",{id:"desinstalando-pnpm"},"Desinstalando pnpm"),(0,r.kt)("p",null,"If you need to remove the pnpm CLI from your system and any files it has written to your disk, see ",(0,r.kt)("a",{parentName:"p",href:"/es/next/uninstall"},"Uninstalling pnpm"),"."))}c.isMDXComponent=!0}}]);