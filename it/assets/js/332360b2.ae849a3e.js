"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8208],{9613:(e,n,o)=>{o.d(n,{Zo:()=>s,kt:()=>m});var t=o(9496);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function p(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),d=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},s=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(o),m=r,b=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return o?t.createElement(b,a(a({ref:n},s),{},{components:o})):t.createElement(b,a({ref:n},s))}));function m(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var d=2;d<i;d++)a[d]=o[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6920:(e,n,o)=>{o.r(n),o.d(n,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>d,toc:()=>s,default:()=>u});var t=o(98),r=o(6862),i=(o(9496),o(9613)),a=["components"],p={id:"how-peers-are-resolved",title:"Come vengono risolti i peer"},l=void 0,d={unversionedId:"how-peers-are-resolved",id:"version-5.x/how-peers-are-resolved",isDocsHomePage:!1,title:"Come vengono risolti i peer",description:"Una delle migliori caratteristiche di pnpm \xe8 che in un progetto, una versione specifica di un pacchetto avr\xe0 sempre un set di dipendenze. C'\xe8 un'eccezione da questa regola, per\xf2: pacchetti con dipendenze peer.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/how-peers-are-resolved.md",sourceDirName:".",slug:"/how-peers-are-resolved",permalink:"/it/5.x/how-peers-are-resolved",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"5.x",frontMatter:{id:"how-peers-are-resolved",title:"Come vengono risolti i peer"},sidebar:"version-5.x/docs",previous:{title:"Struttura `node_modules` con collegamenti simbolici",permalink:"/it/5.x/symlinked-node-modules-structure"}},s=[],c={toc:s};function u(e){var n=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Una delle migliori caratteristiche di pnpm \xe8 che in un progetto, una versione specifica di un pacchetto avr\xe0 sempre un set di dipendenze. C'\xe8 un'eccezione da questa regola, per\xf2: pacchetti con ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json#peerdependencies"},"dipendenze peer"),"."),(0,i.kt)("p",null,"Le dipendenze peer vengono risolte dalle dipendenze installate pi\xf9 in alto nel grafico delle dipendenze, poich\xe9 condividono la stessa versione del genitore. Ci\xf2 significa che se ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," ha due peer (",(0,i.kt)("inlineCode",{parentName:"p"},"bar@^1")," e ",(0,i.kt)("inlineCode",{parentName:"p"},"baz@^1"),") allora potrebbe avere diversi insiemi di dipendenze nello stesso progetto."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"- foo-parent-1\n  - bar@1.0.0\n  - baz@1.0.0\n  - foo@1.0.0\n- foo-parent-2\n  - bar@1.0.0\n  - baz@1.1.0\n  - foo@1.0.0\n")),(0,i.kt)("p",null,"Nell'esempio sopra, ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \xe8 installato per ",(0,i.kt)("inlineCode",{parentName:"p"},"foo-parent-1")," e ",(0,i.kt)("inlineCode",{parentName:"p"},"foo-parent-2"),". Entrambi i pacchetti hanno anche ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," e ",(0,i.kt)("inlineCode",{parentName:"p"},"baz"),", ma dipendono da diverse versioni di ",(0,i.kt)("inlineCode",{parentName:"p"},"baz"),". Di conseguenza, ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," ha due diversi insiemi di dipendenze: uno con ",(0,i.kt)("inlineCode",{parentName:"p"},"baz@1.0.0")," e l'altro con ",(0,i.kt)("inlineCode",{parentName:"p"},"baz@1.1.0"),". Per supportare questi casi di utilizzo, pnpm deve collegare fisicamente ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," tante volte quanti diversi set di dipendenze sono presenti."),(0,i.kt)("p",null,"Normalmente, se un pacchetto non ha dipendenze peer, \xe8 difficilmente collegato a una ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," accanto ai collegamenti simbolici delle sue dipendenze, in questo modo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 foo@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 qux@1.0.0\n    \u251c\u2500\u2500 plugh@1.0.0\n")),(0,i.kt)("p",null,"Tuttavia, se ",(0,i.kt)("inlineCode",{parentName:"p"},"pippo")," ha dipendenze peer, potrebbero esserci pi\xf9 gruppi di dipendenze, quindi creiamo gruppi diversi per diverse risoluzioni di dipendenze peer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 foo@1.0.0_bar@1.0.0+baz@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 bar   -> ../../bar@1.0.0/node_modules/bar\n    \u2502       \u251c\u2500\u2500 baz   -> ../../baz@1.0.0/node_modules/baz\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 foo@1.0.0_bar@1.0.0+baz@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 bar   -> ../../bar@1.0.0/node_modules/bar\n    \u2502       \u251c\u2500\u2500 baz   -> ../../baz@1.1.0/node_modules/baz\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 bar@1.0.0\n    \u251c\u2500\u2500 baz@1.0.0\n    \u251c\u2500\u2500 baz@1.1.0\n    \u251c\u2500\u2500 qux@1.0.0\n    \u251c\u2500\u2500 plugh@1.0.0\n")),(0,i.kt)("p",null,"Creiamo collegamenti simbolici a ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," che si trova all'interno di ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0_bar@1.0.0+baz@1.0.0")," o a quello in ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0_bar@1.0.0+baz@1.1.0"),". Di conseguenza, il risolutore del modulo Node.js trover\xe0 i peer corretti."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Se un pacchetto non ha dipendenze peer ma ha dipendenze con peer risolti pi\xf9 in alto nel grafico"),", allora quel pacchetto transitivo pu\xf2 apparire nel con diversi gruppi di dipendenze. Ad esempio, c'\xe8 il pacchetto ",(0,i.kt)("inlineCode",{parentName:"p"},"a@1.0.0")," con una singola dipendenza ",(0,i.kt)("inlineCode",{parentName:"p"},"b@1.0.0"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"b@1.0.0")," ha una dipendenza peer ",(0,i.kt)("inlineCode",{parentName:"p"},"c@^1"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"a@1.0.0")," non risolver\xe0 mai i peer di ",(0,i.kt)("inlineCode",{parentName:"p"},"b@1.0.0"),", quindi diventa dipendente anche dai peer di ",(0,i.kt)("inlineCode",{parentName:"p"},"b@1.0.0"),"."),(0,i.kt)("p",null,"Ecco come apparir\xe0 quella struttura in ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),". In questo esempio, ",(0,i.kt)("inlineCode",{parentName:"p"},"a@1.0.0")," dovr\xe0 apparire due volte nei ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," - risolto una volta con ",(0,i.kt)("inlineCode",{parentName:"p"},"c@1.0.0")," e di nuovo con ",(0,i.kt)("inlineCode",{parentName:"p"},"c@1.1.0"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 a@1.0.0_c@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 a\n    \u2502       \u2514\u2500\u2500 b -> ../../b@1.0.0_c@1.0.0/node_modules/b\n    \u251c\u2500\u2500 a@1.0.0_c@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 a\n    \u2502       \u2514\u2500\u2500 b -> ../../b@1.0.0_c@1.1.0/node_modules/b\n    \u251c\u2500\u2500 b@1.0.0_c@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 b\n    \u2502       \u2514\u2500\u2500 c -> ../../c@1.0.0/node_modules/c\n    \u251c\u2500\u2500 b@1.0.0_c@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 b\n    \u2502       \u2514\u2500\u2500 c -> ../../c@1.1.0/node_modules/c\n    \u251c\u2500\u2500 c@1.0.0\n    \u251c\u2500\u2500 c@1.1.0\n")))}u.isMDXComponent=!0}}]);