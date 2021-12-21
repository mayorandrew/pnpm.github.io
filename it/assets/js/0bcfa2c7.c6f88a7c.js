"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3247],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,v=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return t?a.createElement(v,o(o({ref:n},m),{},{components:t})):a.createElement(v,o({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5117:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,toc:()=>m,default:()=>u});var a=t(9518),i=t(7344),r=(t(9496),t(9613)),o=["components"],p={id:"continuous-integration",title:"Integrazione continua"},l=void 0,s={unversionedId:"continuous-integration",id:"version-5.x/continuous-integration",title:"Integrazione continua",description:"pnpm pu\xf2 essere facilmente utilizzato in vari sistemi di integrazione continua.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/continuous-integration.md",sourceDirName:".",slug:"/continuous-integration",permalink:"/it/5.x/continuous-integration",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"5.x",frontMatter:{id:"continuous-integration",title:"Integrazione continua"},sidebar:"version-5.x/docs",previous:{title:"Utilizzo di Changesets con pnpm",permalink:"/it/5.x/using-changesets"},next:{title:"Consenti solo pnpm",permalink:"/it/5.x/only-allow-pnpm"}},m=[{value:"Travis",id:"travis",children:[],level:2},{value:"Semaphore",id:"semaphore",children:[],level:2},{value:"AppVeyor",id:"appveyor",children:[],level:2},{value:"Sail CI",id:"sail-ci",children:[],level:2},{value:"GitHub Actions",id:"github-actions",children:[],level:2}],c={toc:m};function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"pnpm pu\xf2 essere facilmente utilizzato in vari sistemi di integrazione continua."),(0,r.kt)("h2",{id:"travis"},"Travis"),(0,r.kt)("p",null,"Su ",(0,r.kt)("a",{parentName:"p",href:"https://travis-ci.org"},"Travis CI"),", puoi usare pnpm per installare le tue dipendenze aggiungendo questo al tuo file ",(0,r.kt)("inlineCode",{parentName:"p"},".travis.yml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -f https://get.pnpm.io/v5.js | node - add --global pnpm@5\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),(0,r.kt)("h2",{id:"semaphore"},"Semaphore"),(0,r.kt)("p",null,"Su ",(0,r.kt)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semaphore"),", puoi usare pnpm per installare e memorizzare nella cache le tue dipendenze aggiungendo questo al tuo file ",(0,r.kt)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".semaphore/semaphore.yml"',title:'".semaphore/semaphore.yml"'},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -f https://get.pnpm.io/v5.js | node - add --global pnpm@5\n            - checkout\n            - cache restore node-$(checksum pnpm-lock.yaml)\n            - pnpm install\n            - cache store node-$(checksum pnpm-lock.yaml) ~/.pnpm-store\n")),(0,r.kt)("h2",{id:"appveyor"},"AppVeyor"),(0,r.kt)("p",null,"Su ",(0,r.kt)("a",{parentName:"p",href:"https://www.appveyor.com"},"AppVeyor"),", puoi usare pnpm per installare le tue dipendenze aggiungendo questo al tuo ",(0,r.kt)("inlineCode",{parentName:"p"},"appveyor.yml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="appveyor.yml"',title:'"appveyor.yml"'},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -f https://get.pnpm.io/v5.js | node - add --global pnpm@5\n  - pnpm install\n")),(0,r.kt)("h2",{id:"sail-ci"},"Sail CI"),(0,r.kt)("p",null,"Su ","[Sail CI]",", puoi usare pnpm per installare le tue dipendenze aggiungendo questo al tuo file ",(0,r.kt)("inlineCode",{parentName:"p"},".sail.yml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".sail.yml"',title:'".sail.yml"'},"install:\n  image: znck/pnpm:latest\n  command:\n    - pnpm\n  args:\n    - install\n")),(0,r.kt)("p",null,"Per ottenere la versione esatta di Node e la versione di pnpm di cui hai bisogno, puoi sempre creare tua immagine Docker e inviarla all'",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Hub di Docker"),"."),(0,r.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,r.kt)("p",null,"Su GitHub Actions, puoi usare pnpm per installare e memorizzare nella cache le tue dipendenze in questo modo (appartiene a ",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/NAME.yml"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/NAME.yml"',title:'".github/workflows/NAME.yml"'},"name: pnpm Example Workflow\non:\n  push:\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    strategy:\n      matrix:\n        node-version: [15]\n    steps:\n    - uses: actions/checkout@v2\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v2\n      with:\n        node-version: ${{ matrix.node-version }}\n    - name: Cache .pnpm-store\n      uses: actions/cache@v1\n      with:\n        path: ~/.pnpm-store\n        key: ${{ runner.os }}-node${{ matrix.node-version }}-${{ hashFiles('**/pnpm-lock.yaml') }}\n    - name: Install pnpm\n      run: curl -f https://get.pnpm.io/v5.js | node - add --global pnpm@5\n    - name: pnpm Build\n      run: pnpm install\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Usando ",(0,r.kt)("inlineCode",{parentName:"p"},"action/setup-node@v2")," devi installare pnpm con ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/actions/setup-node/issues/177"},"permessi di root"),", ad esempio:",(0,r.kt)("inlineCode",{parentName:"p"},"sudo npm install -g pnpm"),". In alternativa, se si specifica la versione di Node.js da utilizzare, pnpm pu\xf2 essere installato senza utenti privilegiati."))))}u.isMDXComponent=!0}}]);