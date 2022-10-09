"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6701],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(t),c=i,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return t?a.createElement(k,r(r({ref:n},d),{},{components:t})):a.createElement(k,r({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8302:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=t(2081),i=t(4604),l=(t(9496),t(9613)),r=["components"],o={id:"installation",title:"Installazione"},p=void 0,s={unversionedId:"installation",id:"installation",title:"Installazione",description:"Usando uno script standalone",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/it/next/installation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"installation",title:"Installazione"},sidebar:"docs",previous:{title:"Motivazione",permalink:"/it/next/motivation"},next:{title:"CLI di pnpm",permalink:"/it/next/pnpm-cli"}},d={},m=[{value:"Usando uno script standalone",id:"usando-uno-script-standalone",level:2},{value:"On Windows",id:"on-windows",level:3},{value:"On POSIX systems",id:"on-posix-systems",level:3},{value:"On Alpine Linux",id:"on-alpine-linux",level:3},{value:"Installing a specific version",id:"installing-a-specific-version",level:3},{value:"Utilizzo di Corepack",id:"utilizzo-di-corepack",level:2},{value:"Usando npm",id:"usando-npm",level:2},{value:"Usando Homebrew",id:"usando-homebrew",level:2},{value:"Usando Scoop",id:"usando-scoop",level:2},{value:"Compatibilit\xe0",id:"compatibilit\xe0",level:2},{value:"Risoluzione dei problemi",id:"risoluzione-dei-problemi",level:2},{value:"Utilizzo di un alias pi\xf9 breve",id:"utilizzo-di-un-alias-pi\xf9-breve",level:2},{value:"Adding a permanent alias on POSIX systems",id:"adding-a-permanent-alias-on-posix-systems",level:4},{value:"Adding a permanent alias in Powershell (Windows):",id:"adding-a-permanent-alias-in-powershell-windows",level:4},{value:"Disinstallazione di pnpm",id:"disinstallazione-di-pnpm",level:2}],u={toc:m};function c(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usando-uno-script-standalone"},"Usando uno script standalone"),(0,l.kt)("p",null,"You may install pnpm even if you don't have Node.js installed, using the following scripts."),(0,l.kt)("h3",{id:"on-windows"},"On Windows"),(0,l.kt)("p",null,"Using PowerShell:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,l.kt)("h3",{id:"on-posix-systems"},"On POSIX systems"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,l.kt)("p",null,"Se non hai curl installato, puoi usare wget:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,l.kt)("h3",{id:"on-alpine-linux"},"On Alpine Linux"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;\n')),(0,l.kt)("h3",{id:"installing-a-specific-version"},"Installing a specific version"),(0,l.kt)("p",null,"Prior to running the install script, you may optionally set an env variable ",(0,l.kt)("inlineCode",{parentName:"p"},"PNPM_VERSION")," to install a specific version of pnpm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sh -\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Puoi utilizzare poi il comando ",(0,l.kt)("a",{parentName:"p",href:"/it/next/cli/env"},"pnpm env")," per installare Node.js.")),(0,l.kt)("h2",{id:"utilizzo-di-corepack"},"Utilizzo di Corepack"),(0,l.kt)("p",null,"Dalla versione 16.13, Node.js fornisce ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," per la gestione dei gestori di pacchetti. Questa \xe8 una funzionalit\xe0 sperimentale, quindi \xe8 necessario abilitarla eseguendo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,l.kt)("p",null,"Questo installer\xe0 automaticamente pnpm sul tuo sistema. Tuttavia, probabilmente non sar\xe0 l'ultima versione di pnpm. Per aggiornarlo, controlla qual \xe8 l'",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"ultima versione di pnpm")," ed esegui:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,l.kt)("p",null,"With Node.js v16.17 or newer, you may install the ",(0,l.kt)("inlineCode",{parentName:"p"},"latest")," version of pnpm by just specifying the tag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"corepack prepare pnpm@latest --activate\n")),(0,l.kt)("h2",{id:"usando-npm"},"Usando npm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,l.kt)("h2",{id:"usando-homebrew"},"Usando Homebrew"),(0,l.kt)("p",null,"Se il gestore di pacchetti \xe8 installato, \xe8 possibile installare pnpm utilizzando il seguente comando:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,l.kt)("h2",{id:"usando-scoop"},"Usando Scoop"),(0,l.kt)("p",null,"Se hai installato Scoop, puoi installare pnpm usando il seguente comando:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Vuoi usare pnpm su server CI? Vedi: ",(0,l.kt)("a",{parentName:"p",href:"/it/next/continuous-integration"},"Integrazione vontinua"),".")),(0,l.kt)("h2",{id:"compatibilit\xe0"},"Compatibilit\xe0"),(0,l.kt)("p",null,"Di seguito \xe8 riportato un elenco delle versioni precedenti di pnpm con le rispettive versioni di Node.js supportate."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,l.kt)("h2",{id:"risoluzione-dei-problemi"},"Risoluzione dei problemi"),(0,l.kt)("p",null,"Se pnpm \xe8 danneggiato e non puoi risolvere reinstallando, potrebbe esser necessario rimuoverlo manualmente dal PATH."),(0,l.kt)("p",null,"Supponiamo di aver il seguente errore durante l'esecuzione di ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,l.kt)("p",null,"Per prima cosa, prova a trovare il percorso di installazione di pnpm eseguendo: ",(0,l.kt)("inlineCode",{parentName:"p"},"which pnpm"),". Se sei su Windows, esegui questo comando usando Git Bash. Otterrai il percorso di installazione del comando pnpm, ad esempio:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,l.kt)("p",null,"Ora che sai dove si trova la CLI pnpm, apri la cartella e rimuovi qualsiasi file relativo a pnpm (",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm"),", ecc). Una volta fatto, installa nuovamente pnpm e dovrebbe funzionare come previsto."),(0,l.kt)("h2",{id:"utilizzo-di-un-alias-pi\xf9-breve"},"Utilizzo di un alias pi\xf9 breve"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm")," potrebbe essere difficile da digitare, quindi \xe8 possibile utilizzare invece un alias pi\xf9 breve come ",(0,l.kt)("inlineCode",{parentName:"p"},"pn"),"."),(0,l.kt)("h4",{id:"adding-a-permanent-alias-on-posix-systems"},"Adding a permanent alias on POSIX systems"),(0,l.kt)("p",null,"Basta inserire la seguente riga nel tuo ",(0,l.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc"),"o ",(0,l.kt)("inlineCode",{parentName:"p"},"config.fish"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"alias pn=pnpm\n")),(0,l.kt)("h4",{id:"adding-a-permanent-alias-in-powershell-windows"},"Adding a permanent alias in Powershell (Windows):"),(0,l.kt)("p",null,"In a Powershell window with admin rights, execute:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"notepad $profile.AllUsersAllHosts\n")),(0,l.kt)("p",null,"In the ",(0,l.kt)("inlineCode",{parentName:"p"},"profile.ps1")," file that opens, put:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set-alias -name pn -value pnpm\n")),(0,l.kt)("p",null,"Save the file and close the window. You may need to close any open Powershell window in order for the alias to take effect."),(0,l.kt)("h2",{id:"disinstallazione-di-pnpm"},"Disinstallazione di pnpm"),(0,l.kt)("p",null,"Se devi rimuovere la CLI di pnpm dal sistema e tutti i file che ha scritto sul disco, vedi ",(0,l.kt)("a",{parentName:"p",href:"/it/next/uninstall"},"Disinstallazione di pnpm"),"."))}c.isMDXComponent=!0}}]);