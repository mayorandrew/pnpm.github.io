"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3903],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>s});var i=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),s=r,f=u["".concat(p,".").concat(s)]||u[s]||m[s]||a;return t?i.createElement(f,l(l({ref:n},d),{},{components:t})):i.createElement(f,l({ref:n},d))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5183:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>u});var i=t(98),r=t(6862),a=(t(9496),t(9613)),l=["components"],o={id:"pnpm-cli",title:"CLI di pnpm"},p=void 0,c={unversionedId:"pnpm-cli",id:"version-5.x/pnpm-cli",isDocsHomePage:!1,title:"CLI di pnpm",description:"Differenze vs npm",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/it/5.x/pnpm-cli",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"5.x",frontMatter:{id:"pnpm-cli",title:"CLI di pnpm"},sidebar:"version-5.x/docs",previous:{title:"Installazione",permalink:"/it/5.x/installation"},next:{title:"CLI di pnpx",permalink:"/it/5.x/pnpx-cli"}},d=[{value:"Differenze vs npm",id:"differenze-vs-npm",children:[],level:2},{value:"Opzioni",id:"opzioni",children:[{value:"-C &lt;path&gt;, --dir &lt;path&gt;",id:"-c-path---dir-path",children:[],level:3},{value:"-w, --workspace-root",id:"-w---workspace-root",children:[],level:3}],level:2},{value:"Comandi",id:"comandi",children:[],level:2}],m={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"differenze-vs-npm"},"Differenze vs npm"),(0,a.kt)("p",null,"A differenza di npm, pnpm convalida tutte le opzioni. Ad esempio, ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install --foo")," fallir\xe0 poich\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"--foo")," non \xe8 un'opzione valida per ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,a.kt)("p",null,"Tuttavia, alcune dipendenze possono utilizzare la variabile d'ambiente ",(0,a.kt)("inlineCode",{parentName:"p"},"npm_config_"),", che \xe8 popolata dalle opzioni CLI. In questo caso, hai le seguenti opzioni:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"impostare esplicitamente la variabile env: ",(0,a.kt)("inlineCode",{parentName:"li"},"npm_config_foo=true pnpm install")),(0,a.kt)("li",{parentName:"ol"},"forzare l'opzione sconosciuta con ",(0,a.kt)("inlineCode",{parentName:"li"},"--config."),": ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm install --config.foo"))),(0,a.kt)("h2",{id:"opzioni"},"Opzioni"),(0,a.kt)("h3",{id:"-c-path---dir-path"},"-C ","<","path",">",", --dir ","<","path",">"),(0,a.kt)("p",null,"Esegui come se pnpm fosse stato avviato in ",(0,a.kt)("inlineCode",{parentName:"p"},"<path>")," invece che nella cartella di lavoro corrente."),(0,a.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,a.kt)("p",null,"Aggiunto nella versione: v5.6.0"),(0,a.kt)("p",null,"Esegui come se pnpm fosse stato avviato nella radice dello spazio di lavoro invece che nella cartella di lavoro corrente."),(0,a.kt)("h2",{id:"comandi"},"Comandi"),(0,a.kt)("p",null,"Per ulteriori informazioni, vedere la documentazione per i singoli comandi CLI. Ecco un elenco di utili comandi equivalenti di npm per iniziare:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"comando npm"),(0,a.kt)("th",{parentName:"tr",align:null},"equivalente di pnpm"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"npm install")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/it/5.x/cli/install"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"npm i <pkg>")),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("inlineCode",{parentName:"td"},"pnpm add <pkg>"),"]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"npm run <cmd>")),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("inlineCode",{parentName:"td"},"pnpm <cmd>"),"]")))))}u.isMDXComponent=!0}}]);