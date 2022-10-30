"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3787],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var p=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);n&&(p=p.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,p)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,p,a=function(e,n){if(null==e)return{};var t,p,a={},i=Object.keys(e);for(p=0;p<i.length;p++)t=i[p],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(p=0;p<i.length;p++)t=i[p],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=p.createContext({}),s=function(e){var n=p.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=s(e.components);return p.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return p.createElement(p.Fragment,{},n)}},u=p.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,g=u["".concat(o,".").concat(d)]||u[d]||c[d]||i;return t?p.createElement(g,r(r({ref:n},m),{},{components:t})):p.createElement(g,r({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return p.createElement.apply(null,r)}return p.createElement.apply(null,t)}u.displayName="MDXCreateElement"},39:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var p=t(2962),a=t(2742),i=(t(9496),t(9613)),r=["components"],l={id:"continuous-integration",title:"\u6301\u7e8c\u6574\u5408 (CI)"},o=void 0,s={unversionedId:"continuous-integration",id:"version-7.x/continuous-integration",title:"\u6301\u7e8c\u6574\u5408 (CI)",description:"pnpm \u53ef\u4ee5\u5bb9\u6613\u5730\u5728\u591a\u7a2e CI \u7cfb\u7d71\u4e2d\u4f7f\u7528\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-7.x/continuous-integration.md",sourceDirName:".",slug:"/continuous-integration",permalink:"/zh-TW/continuous-integration",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"7.x",frontMatter:{id:"continuous-integration",title:"\u6301\u7e8c\u6574\u5408 (CI)"},sidebar:"version-7.x/docs",previous:{title:"\u642d\u914d pnpm \u4f7f\u7528 Changesets",permalink:"/zh-TW/using-changesets"},next:{title:"\u4f7f\u7528 Git",permalink:"/zh-TW/git"}},m={},c=[{value:"Travis",id:"travis",level:2},{value:"Semaphore",id:"semaphore",level:2},{value:"AppVeyor",id:"appveyor",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"GitLab CI",id:"gitlab-ci",level:2},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",level:2},{value:"Azure Pipelines",id:"azure-pipelines",level:2},{value:"CircleCI",id:"circleci",level:2}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,p.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm \u53ef\u4ee5\u5bb9\u6613\u5730\u5728\u591a\u7a2e CI \u7cfb\u7d71\u4e2d\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"travis"},"Travis"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://travis-ci.org"},"Travis CI")," \u4e2d\uff0c\u60a8\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},".travis.yml")," \u6a94\u6848\u4e2d\u52a0\u5165\u9019\u4e9b\u7d44\u614b\uff0c\u4ee5\u4f7f\u7528 pnpm \u5b89\u88dd\u4f9d\u8cf4\u9805\u76ee\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),(0,i.kt)("h2",{id:"semaphore"},"Semaphore"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semaphore")," \u4e2d\uff0c\u60a8\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml")," \u6a94\u6848\u4e2d\u52a0\u5165\u9019\u4e9b\u7d44\u614b\uff0c\u4ee5\u4f7f\u7528 pnpm \u5b89\u88dd\u4f9d\u8cf4\u9805\u76ee\u53ca\u7ba1\u7406\u5176\u5feb\u53d6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".semaphore/semaphore.yml"',title:'".semaphore/semaphore.yml"'},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n            - checkout\n            - cache restore node-$(checksum pnpm-lock.yaml)\n            - pnpm install\n            - cache store node-$(checksum pnpm-lock.yaml) $(pnpm store path)\n")),(0,i.kt)("h2",{id:"appveyor"},"AppVeyor"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://www.appveyor.com"},"AppVeyor")," \u4e2d\uff0c\u60a8\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"appveyor.yml")," \u6a94\u6848\u4e2d\u52a0\u5165\u9019\u4e9b\u7d44\u614b\uff0c\u4ee5\u4f7f\u7528 pnpm \u5b89\u88dd\u4f9d\u8cf4\u9805\u76ee\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="appveyor.yml"',title:'"appveyor.yml"'},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n  - pnpm install\n")),(0,i.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("p",null,"\u5728 GitHub Actions \u4e0a\uff0c\u60a8\u53ef\u4ee5\u900f\u904e\u6b64\u65b9\u5f0f\uff08\u65bc ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/NAME.yml")," \u4e2d\uff09\u4f7f\u7528 pnpm \u4f86\u5b89\u88dd\u3001\u5feb\u53d6\u4f9d\u8cf4\u9805\u76ee\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/NAME.yml"',title:'".github/workflows/NAME.yml"'},"name: pnpm Example Workflow\non:\n  push:\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    strategy:\n      matrix:\n        node-version: [15]\n    steps:\n    - uses: actions/checkout@v3\n    - uses: pnpm/action-setup@v2.2.4\n      with:\n        version: 7\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v3\n      with:\n        node-version: ${{ matrix.node-version }}\n        cache: 'pnpm'\n    - name: Install dependencies\n      run: pnpm install\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u900f\u904e ",(0,i.kt)("inlineCode",{parentName:"p"},"actions/setup-node@v2")," \u5feb\u53d6\u5957\u4ef6\u76f8\u4f9d\u6027\u9700\u8981\u5b89\u88dd ",(0,i.kt)("strong",{parentName:"p"},"6.10+")," \u7248\u7684 pnpm\u3002")),(0,i.kt)("h2",{id:"gitlab-ci"},"GitLab CI"),(0,i.kt)("p",null,"\u5728 Gitlab\uff0c\u60a8\u53ef\u4ee5\u900f\u904e\u6b64\u65b9\u5f0f (\u65bc ",(0,i.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml")," \u4e2d) \u4f7f\u7528 pnpm \u4f86\u5b89\u88dd\u3001\u5feb\u53d6\u60a8\u7684\u4f9d\u8cf4\u5957\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},"stages:\n  - build\n\nbuild:\n  stage: build\n  image: node:14.16.0-buster\n  before_script:\n    - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n    - pnpm config set store-dir .pnpm-store\n  script:\n    - pnpm install # install dependencies\n  cache:\n    key:\n      files:\n        - pnpm-lock.yaml\n    paths:\n      - .pnpm-store\n")),(0,i.kt)("h2",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 pnpm \u4f86\u5b89\u88dd\u53ca\u5feb\u53d6\u4f9d\u8cf4\u9805\u76ee\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".bitbucket-pipelines.yml"',title:'".bitbucket-pipelines.yml"'},'definitions:\n  caches:\n    pnpm: $BITBUCKET_CLONE_DIR/.pnpm-store\n\npipelines:\n  pull-requests:\n    "**":\n      - step:\n          name: Build and test\n          image: node:14.16.0\n          script:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n            - pnpm install\n            - pnpm run build # Replace with your build/test\u2026etc. commands\n          caches:\n            - pnpm\n')),(0,i.kt)("h2",{id:"azure-pipelines"},"Azure Pipelines"),(0,i.kt)("p",null,"\u5728 Azure Pipelines\uff0c\u60a8\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," \u6a94\u6848\u4e2d\u52a0\u5165\u4e0b\u65b9\u6307\u4ee4\u7247\u6bb5\u4f86\u4f7f\u7528 pnpm \u5b89\u88dd\u8207\u5feb\u53d6\u60a8\u7684\u4f9d\u8cf4\u5957\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="azure-pipelines.yml"',title:'"azure-pipelines.yml"'},'variables:\n  pnpm_config_cache: $(Pipeline.Workspace)/.pnpm-store\n\nsteps:\n  - task: Cache@2\n    inputs:\n      key: \'pnpm | "$(Agent.OS)" | pnpm-lock.yaml\'\n      path: $(pnpm_config_cache)\n    displayName: Cache pnpm\n\n  - script: |\n      curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n      pnpm config set store-dir $(pnpm_config_cache)\n    displayName: "Setup pnpm"\n\n  - script: |\n      pnpm install\n      pnpm run build\n    displayName: "pnpm install and build"\n')),(0,i.kt)("h2",{id:"circleci"},"CircleCI"),(0,i.kt)("p",null,"\u5728 CircleCI\uff0c\u60a8\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},".circleci/config.yml")," \u6a94\u6848\u4e2d\u52a0\u5165\u4e0b\u65b9\u6307\u4ee4\u7247\u6bb5\u4f86\u4f7f\u7528 pnpm \u5b89\u88dd\u8207\u5feb\u53d6\u60a8\u7684\u4f9d\u8cf4\u5957\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".circleci/config.yml"',title:'".circleci/config.yml"'},'version: 2.1\n\njobs:\n  build: # this can be any name you choose\n    docker:\n      - image: node:18\n    resource_class: large\n    parallelism: 10\n\n    steps:\n      - checkout\n      - restore_cache:\n          name: Restore pnpm Package Cache\n          keys:\n            - pnpm-packages-{{ checksum "pnpm-lock.yaml" }}\n      - run:\n          name: Install pnpm package manager\n          command: |\n            curl -L https://pnpm.js.org/pnpm.js | node - add --global pnpm@7\n      - run:\n          name: Install Dependencies\n          command: |\n            pnpm install\n      - save_cache:\n          name: Save pnpm Package Cache\n          key: pnpm-packages-{{ checksum "pnpm-lock.yaml" }}\n          paths:\n            - node_modules\n')))}d.isMDXComponent=!0}}]);