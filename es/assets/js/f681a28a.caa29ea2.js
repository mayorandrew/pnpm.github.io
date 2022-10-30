"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6131],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(9496);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,p=function(e,n){if(null==e)return{};var t,a,p={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var l=a.createContext({}),o=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=o(t),d=p,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function d(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:p,r[1]=s;for(var o=2;o<i;o++)r[o]=t[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2419:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var a=t(2962),p=t(2742),i=(t(9496),t(9613)),r=["components"],s={id:"continuous-integration",title:"Integraci\xf3n continua"},l=void 0,o={unversionedId:"continuous-integration",id:"version-7.x/continuous-integration",title:"Integraci\xf3n continua",description:"pnpm se puede usar f\xe1cilmente en varios sistemas de integraci\xf3n continua.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-7.x/continuous-integration.md",sourceDirName:".",slug:"/continuous-integration",permalink:"/es/continuous-integration",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"7.x",frontMatter:{id:"continuous-integration",title:"Integraci\xf3n continua"},sidebar:"version-7.x/docs",previous:{title:"Usando Changesets con pnpm",permalink:"/es/using-changesets"},next:{title:"Trabajando con Git",permalink:"/es/git"}},c={},m=[{value:"Travis",id:"travis",level:2},{value:"Semaphore",id:"semaphore",level:2},{value:"AppVeyor",id:"appveyor",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"GitLab CI",id:"gitlab-ci",level:2},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",level:2},{value:"Azure Pipelines",id:"azure-pipelines",level:2},{value:"CircleCI",id:"circleci",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,p.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm se puede usar f\xe1cilmente en varios sistemas de integraci\xf3n continua."),(0,i.kt)("h2",{id:"travis"},"Travis"),(0,i.kt)("p",null,"En ",(0,i.kt)("a",{parentName:"p",href:"https://travis-ci.org"},"Travis CI"),", puede usar pnpm para instalar sus dependencias agregando este a su archivo ",(0,i.kt)("inlineCode",{parentName:"p"},".travis.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),(0,i.kt)("h2",{id:"semaphore"},"Semaphore"),(0,i.kt)("p",null,"En ",(0,i.kt)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semaphore"),", puede usar pnpm para instalar y almacenar en cach\xe9 sus dependencias agregando esto a su ",(0,i.kt)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".semaphore/semaphore.yml"',title:'".semaphore/semaphore.yml"'},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n            - checkout\n            - cache restore node-$(checksum pnpm-lock.yaml)\n            - pnpm install\n            - cache store node-$(checksum pnpm-lock.yaml) $(pnpm store path)\n")),(0,i.kt)("h2",{id:"appveyor"},"AppVeyor"),(0,i.kt)("p",null,"En ",(0,i.kt)("a",{parentName:"p",href:"https://www.appveyor.com"},"AppVeyor"),", puede usar pnpm para instalar sus dependencias agregando este a su ",(0,i.kt)("inlineCode",{parentName:"p"},"appveyor.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="appveyor.yml"',title:'"appveyor.yml"'},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n  - pnpm install\n")),(0,i.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("p",null,"En GitHub Actions, puede usar pnpm para instalar y almacenar en cach\xe9 sus dependencias as\xed (pertenece a ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/NOMBRE.yml"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/NAME.yml"',title:'".github/workflows/NAME.yml"'},"name: pnpm Example Workflow\non:\n  push:\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    strategy:\n      matrix:\n        node-version: [15]\n    steps:\n    - uses: actions/checkout@v3\n    - uses: pnpm/action-setup@v2.2.4\n      with:\n        version: 7\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v3\n      with:\n        node-version: ${{ matrix.node-version }}\n        cache: 'pnpm'\n    - name: Install dependencies\n      run: pnpm install\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"El almacenamiento en cach\xe9 de dependencias de paquetes con ",(0,i.kt)("inlineCode",{parentName:"p"},"actions/setup-node@v2")," requiere que instale pnpm con la versi\xf3n ",(0,i.kt)("strong",{parentName:"p"},"6.10+"),".")),(0,i.kt)("h2",{id:"gitlab-ci"},"GitLab CI"),(0,i.kt)("p",null,"On GitLab, you can use pnpm for installing and caching your dependencies like so (belongs in ",(0,i.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},"stages:\n  - build\n\nbuild:\n  stage: build\n  image: node:14.16.0-buster\n  before_script:\n    - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n    - pnpm config set store-dir .pnpm-store\n  script:\n    - pnpm install # install dependencies\n  cache:\n    key:\n      files:\n        - pnpm-lock.yaml\n    paths:\n      - .pnpm-store\n")),(0,i.kt)("h2",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),(0,i.kt)("p",null,"Puede usar pnpm para instalar y almacenar en cach\xe9 sus dependencias:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".bitbucket-pipelines.yml"',title:'".bitbucket-pipelines.yml"'},'definitions:\n  caches:\n    pnpm: $BITBUCKET_CLONE_DIR/.pnpm-store\n\npipelines:\n  pull-requests:\n    "**":\n      - step:\n          name: Build and test\n          image: node:14.16.0\n          script:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n            - pnpm install\n            - pnpm run build # Replace with your build/test\u2026etc. commands\n          caches:\n            - pnpm\n')),(0,i.kt)("h2",{id:"azure-pipelines"},"Azure Pipelines"),(0,i.kt)("p",null,"En Azure Pipelines, puede usar pnpm para instalar y almacenar en cach\xe9 sus dependencias agregando esto a su ",(0,i.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="azure-pipelines.yml"',title:'"azure-pipelines.yml"'},'variables:\n  pnpm_config_cache: $(Pipeline.Workspace)/.pnpm-store\n\nsteps:\n  - task: Cache@2\n    inputs:\n      key: \'pnpm | "$(Agent.OS)" | pnpm-lock.yaml\'\n      path: $(pnpm_config_cache)\n    displayName: Cache pnpm\n\n  - script: |\n      curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n      pnpm config set store-dir $(pnpm_config_cache)\n    displayName: "Setup pnpm"\n\n  - script: |\n      pnpm install\n      pnpm run build\n    displayName: "pnpm install and build"\n')),(0,i.kt)("h2",{id:"circleci"},"CircleCI"),(0,i.kt)("p",null,"En CircleCI, puede usar pnpm para instalar y almacenar en cach\xe9 sus dependencias agregando esto a su ",(0,i.kt)("inlineCode",{parentName:"p"},".circleci/config.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".circleci/config.yml"',title:'".circleci/config.yml"'},'version: 2.1\n\njobs:\n  build: # this can be any name you choose\n    docker:\n      - image: node:18\n    resource_class: large\n    parallelism: 10\n\n    steps:\n      - checkout\n      - restore_cache:\n          name: Restore pnpm Package Cache\n          keys:\n            - pnpm-packages-{{ checksum "pnpm-lock.yaml" }}\n      - run:\n          name: Install pnpm package manager\n          command: |\n            curl -L https://pnpm.js.org/pnpm.js | node - add --global pnpm@7\n      - run:\n          name: Install Dependencies\n          command: |\n            pnpm install\n      - save_cache:\n          name: Save pnpm Package Cache\n          key: pnpm-packages-{{ checksum "pnpm-lock.yaml" }}\n          paths:\n            - node_modules\n')))}d.isMDXComponent=!0}}]);