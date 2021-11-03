"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3456],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,h=u["".concat(o,".").concat(d)]||u[d]||c[d]||p;return t?a.createElement(h,r(r({ref:n},m),{},{components:t})):a.createElement(h,r({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,r=new Array(p);r[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<p;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},997:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>s,toc:()=>m,default:()=>u});var a=t(98),i=t(6862),p=(t(9496),t(9613)),r=["components"],l={id:"continuous-integration",title:"\u041d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u0430\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f (CI/CD)"},o=void 0,s={unversionedId:"continuous-integration",id:"continuous-integration",isDocsHomePage:!1,title:"\u041d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u0430\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f (CI/CD)",description:"pnpm \u043c\u043e\u0436\u043d\u043e \u043b\u0435\u0433\u043a\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445 \u043d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u043e\u0439 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/continuous-integration.md",sourceDirName:".",slug:"/continuous-integration",permalink:"/ru/next/continuous-integration",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"current",frontMatter:{id:"continuous-integration",title:"\u041d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u0430\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f (CI/CD)"},sidebar:"docs",previous:{title:"Using Changesets with pnpm",permalink:"/ru/next/using-changesets"},next:{title:"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e pnpm",permalink:"/ru/next/only-allow-pnpm"}},m=[{value:"Travis",id:"travis",children:[],level:2},{value:"Semaphore",id:"semaphore",children:[],level:2},{value:"AppVeyor",id:"appveyor",children:[],level:2},{value:"Sail CI",id:"sail-ci",children:[],level:2},{value:"GitHub Actions",id:"github-actions",children:[],level:2},{value:"Gitlab CI",id:"gitlab-ci",children:[],level:2},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",children:[],level:2}],c={toc:m};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,p.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"pnpm \u043c\u043e\u0436\u043d\u043e \u043b\u0435\u0433\u043a\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445 \u043d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u043e\u0439 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438."),(0,p.kt)("h2",{id:"travis"},"Travis"),(0,p.kt)("p",null,"\u0412 ",(0,p.kt)("a",{parentName:"p",href:"https://travis-ci.org"},"Travis CI")," \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c pnpm \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432\u0430\u0448\u0438\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439, \u0434\u043e\u0431\u0430\u0432\u0438\u0432 \u044d\u0442\u043e \u0432 \u0444\u0430\u0439\u043b ",(0,p.kt)("inlineCode",{parentName:"p"},".travis.yml"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),(0,p.kt)("h2",{id:"semaphore"},"Semaphore"),(0,p.kt)("p",null,"\u041d\u0430 ",(0,p.kt)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semaphore")," \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c pnpm \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0438 \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439, \u0434\u043e\u0431\u0430\u0432\u0438\u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0432 \u0432\u0430\u0448 \u0444\u0430\u0439\u043b ",(0,p.kt)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".semaphore/semaphore.yml"',title:'".semaphore/semaphore.yml"'},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n            - checkout\n            - cache restore node-$(checksum pnpm-lock.yaml)\n            - pnpm install\n            - cache store node-$(checksum pnpm-lock.yaml) ~/.pnpm-store\n")),(0,p.kt)("h2",{id:"appveyor"},"AppVeyor"),(0,p.kt)("p",null,"\u041d\u0430 ",(0,p.kt)("a",{parentName:"p",href:"https://www.appveyor.com"},"AppVeyor"),", \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c pnpm \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439, \u0434\u043e\u0431\u0430\u0432\u0438\u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0432 \u0432\u0430\u0448 ",(0,p.kt)("inlineCode",{parentName:"p"},"appveyor.yml"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="appveyor.yml"',title:'"appveyor.yml"'},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n  - pnpm install\n")),(0,p.kt)("h2",{id:"sail-ci"},"Sail CI"),(0,p.kt)("p",null,"\u041d\u0430 ","[Sail CI]"," \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c pnpm \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439, \u0434\u043e\u0431\u0430\u0432\u0438\u0432 \u044d\u0442\u043e \u0432 \u0444\u0430\u0439\u043b ",(0,p.kt)("inlineCode",{parentName:"p"},".sail.yml"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".sail.yml"',title:'".sail.yml"'},"install:\n  image: znck/pnpm:latest\n  command:\n    - pnpm\n  args:\n    - install\n")),(0,p.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u043e\u0447\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e Node \u0438 \u0432\u0435\u0440\u0441\u0438\u044e pnpm, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u044b, \u0432\u044b \u0432\u0441\u0435\u0433\u0434\u0430 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 Docker \u043e\u0431\u0440\u0430\u0437 \u0438 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u043d\u0430 ",(0,p.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub"),"."),(0,p.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,p.kt)("p",null,"\u041d\u0430 GitHub Actions \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c pnpm \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0438 \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0432\u043e\u0442 \u0442\u0430\u043a (\u0432 \u043e\u0434\u043d\u043e\u043c \u0438\u0437 \u0444\u0430\u0439\u043b\u043e\u0432 ",(0,p.kt)("inlineCode",{parentName:"p"},".github/workflows/NAME.yml"),"):"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/NAME.yml"',title:'".github/workflows/NAME.yml"'},"name: pnpm Example Workflow\non:\n  push:\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    strategy:\n      matrix:\n        node-version: [15]\n    steps:\n    - uses: actions/checkout@v2\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v2\n      with:\n        node-version: ${{ matrix.node-version }}\n    - name: Cache .pnpm-store\n      uses: actions/cache@v1\n      with:\n        path: ~/.pnpm-store\n        key: ${{ runner.os }}-node${{ matrix.node-version }}-${{ hashFiles('**/pnpm-lock.yaml') }}\n    - name: Install pnpm\n      run: curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n    - name: pnpm Build\n      run: pnpm install\n")),(0,p.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"Using ",(0,p.kt)("inlineCode",{parentName:"p"},"actions/setup-node@v2")," you need to install pnpm with ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/actions/setup-node/issues/177"},"root permissions"),", eg:",(0,p.kt)("inlineCode",{parentName:"p"},"sudo npm install -g pnpm"),". Alternatively, if you specify the Node.js version to use, pnpm may be installed with no priviledged user."))),(0,p.kt)("h2",{id:"gitlab-ci"},"Gitlab CI"),(0,p.kt)("p",null,"\u041d\u0430 Gitlab \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c pnpm \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0438 \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u0430\u0448\u0438\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0432\u043e\u0442 \u0442\u0430\u043a (\u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,p.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),"):"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},'stages:\n  - build\n\nbuild:\n  stage: build\n  image: node:14.16.0-buster\n  before_script:\n    - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n    - pnpm config set store-dir .pnpm-store\n  script:\n    - pnpm install # install dependencies\n  cache:\n    key: "$CI_COMMIT_REF_SLUG"\n    paths:\n      - .pnpm-store\n')),(0,p.kt)("h2",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),(0,p.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c pnpm \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0438 \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".bitbucket-pipelines.yml"',title:'".bitbucket-pipelines.yml"'},'definitions:\n  caches:\n    pnpm: $BITBUCKET_CLONE_DIR/.pnpm-store\n\npipelines:\n  pull-requests:\n    "**":\n      - step:\n          name: Build and test\n          image: node:14.16.0\n          script:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n            - pnpm install\n            - pnpm run build # Replace with your build/test\u2026etc. commands\n          caches:\n            - pnpm\n')))}u.isMDXComponent=!0}}]);