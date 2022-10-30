"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7416],{9613:(e,n,i)=>{i.d(n,{Zo:()=>s,kt:()=>m});var t=i(9496);function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){o(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function p(e,n){if(null==e)return{};var i,t,o=function(e,n){if(null==e)return{};var i,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},s=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var i=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(i),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return i?t.createElement(f,a(a({ref:n},s),{},{components:i})):t.createElement(f,a({ref:n},s))}));function m(e,n){var i=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<r;c++)a[c]=i[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}u.displayName="MDXCreateElement"},9755:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var t=i(2962),o=i(2742),r=(i(9496),i(9613)),a=["components"],p={id:"fetch",title:"pnpm fetch"},l=void 0,c={unversionedId:"cli/fetch",id:"version-7.x/cli/fetch",title:"pnpm fetch",description:"Recupera i pacchetti da un file lock nell'archivio virtuale, il manifesto del pacchetto viene ignorato.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/cli/fetch.md",sourceDirName:"cli",slug:"/cli/fetch",permalink:"/it/cli/fetch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"fetch",title:"pnpm fetch"},sidebar:"version-7.x/docs",previous:{title:"pnpm prune",permalink:"/it/cli/prune"},next:{title:"pnpm install-test",permalink:"/it/cli/install-test"}},s={},d=[{value:"Scenario di utilizzo",id:"scenario-di-utilizzo",level:2},{value:"Opzioni",id:"opzioni",level:2},{value:"--dev",id:"--dev",level:3},{value:"--prod",id:"--prod",level:3}],u={toc:d};function m(e){var n=e.components,i=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,t.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Recupera i pacchetti da un file lock nell'archivio virtuale, il manifesto del pacchetto viene ignorato."),(0,r.kt)("h2",{id:"scenario-di-utilizzo"},"Scenario di utilizzo"),(0,r.kt)("p",null,"Questo comando \xe8 progettato specificamente per velocizzare la creazione di un'immagine docker."),(0,r.kt)("p",null,"Potresti aver letto la ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"},"guida ufficiale")," per scrivere un Dockerfile per un'app Node.js, se non l'hai ancora letto, potresti volerlo leggere prima."),(0,r.kt)("p",null,"Da quella guida, impariamo a scrivere un Dockerfile ottimizzato per i progetti che utilizzano pnpm, che sar\xe0 simile a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# File richiesti da pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Unisci sorgenti app (bundle)\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,r.kt)("p",null,"Fino a quando non ci saranno modifiche a ",(0,r.kt)("inlineCode",{parentName:"p"},".npmrc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", la cache build di docker \xe8 ancora valida fino allo strato di ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -- frozen-lockfile -- prod"),", che costava la maggior parte del tempo quando si costruisce un'immagine docker."),(0,r.kt)("p",null,"Tuttavia, modifiche a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," possono accadere molto pi\xf9 frequentemente del previsto, in quanto non contiene soltanto le dipendenze, ma pu\xf2 anche contenere il numero di versione, script e configurazione arbitraria per qualsiasi altro strumento."),(0,r.kt)("p",null,"\xc8 anche difficile mantenere un Dockerfile che costruisca un progetto monorepo, potrebbe sembrare"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# File richiesti da pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# per ogni sottopacchetto, dobbiamo aggiungere un passo in pi\xf9 per copiare il suo manifesto\n# nel posto giusto, poich\xe9 docker non ha modo di filtrare solo il package.json con\n# una singola istruzione\nCOPY packages/foo/package.json packages/foo/\nCOPY packages/bar/package.json packages/bar/\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Unisci sorgenti app (bundle)\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n\n')),(0,r.kt)("p",null,"Come puoi vedere, il Dockerfile deve essere aggiornato quando aggiungi o rimuovi sottopacchetti."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm fetch")," risolver\xe0 perfettamente il problema di cui sopra fornendo la possibilit\xe0 di recuperare il pacchetto dall'archivio virtuale con informazioni solo da un file di blocco."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# pnpm fetch richiede solo il file lock\nCOPY pnpm-lock.yaml ./\n\nRUN pnpm fetch --prod\n\n\nADD . ./\nRUN pnpm install -r --offline --prod\n\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,r.kt)("p",null,"Funziona sia per progetti semplici che per progetti monorepo, ",(0,r.kt)("inlineCode",{parentName:"p"},"--offline")," impone a pnpm di non comunicare con il registro dei pacchetti poich\xe9 tutti i pacchetti necessari devono essere gi\xe0 presentati nell'archivio virtuale."),(0,r.kt)("p",null,"Finch\xe9 il file di blocco non viene modificato, la cache di build \xe8 valida fino al layer ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -r --offline --prod"),", che ti far\xe0 risparmiare molto tempo."),(0,r.kt)("h2",{id:"opzioni"},"Opzioni"),(0,r.kt)("h3",{id:"--dev"},"--dev"),(0,r.kt)("p",null,"Verranno recuperati solo i pacchetti di sviluppo"),(0,r.kt)("h3",{id:"--prod"},"--prod"),(0,r.kt)("p",null,"I pacchetti di sviluppo non verranno recuperati"))}m.isMDXComponent=!0}}]);