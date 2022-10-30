"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8636],{9613:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>m});var t=a(9496);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),d=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},s=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return a?t.createElement(k,l(l({ref:n},s),{},{components:a})):t.createElement(k,l({ref:n},s))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7070:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var t=a(2962),r=a(2742),i=(a(9496),a(9613)),l=["components"],o={id:"audit",title:"pnpm audit"},p=void 0,d={unversionedId:"cli/audit",id:"version-7.x/cli/audit",title:"pnpm audit",description:"Cek untuk masalah keamanan yang diketahui dengan paket-paket yang telah terpasang.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-7.x/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/id/cli/audit",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"7.x",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"version-7.x/docs",previous:{title:"pnpm patch-commit <path>",permalink:"/id/cli/patch-commit"},next:{title:"pnpm list",permalink:"/id/cli/list"}},s={},u=[{value:"Opsi",id:"opsi",level:2},{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",level:3},{value:"--fix",id:"--fix",level:3},{value:"--json",id:"--json",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",level:3}],c={toc:u};function m(e){var n=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cek untuk masalah keamanan yang diketahui dengan paket-paket yang telah terpasang."),(0,i.kt)("p",null,"Jika masalah keamanan ditemukan, coba perbarui dependensi Anda melalui ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm update"),". Jika sebuah update sederhana tidak memperbaiki semua masalah, gunakan ",(0,i.kt)("a",{parentName:"p",href:"/id/package_json#pnpmoverrides"},"overrides")," untuk memaksa versi yang tidak rentan. Misalnya, jika ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash @<2.1.0")," rentan, gunakan overrides untuk memaksa ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Atau sebagai alternatif, jalankan ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm audit --fix"),"."),(0,i.kt)("h2",{id:"opsi"},"Opsi"),(0,i.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"low"),", ",(0,i.kt)("strong",{parentName:"li"},"moderate"),", ",(0,i.kt)("strong",{parentName:"li"},"high"),", ",(0,i.kt)("strong",{parentName:"li"},"critical")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"low"))),(0,i.kt)("p",null,"Tampilkan saran dengan tingkat keparahan yang lebih besar dari atau sama dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"<severity>"),"."),(0,i.kt)("h3",{id:"--fix"},"--fix"),(0,i.kt)("p",null,"Tambahkan penggantian ke file ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," untuk memaksa versi dependensi yang tidak rentan."),(0,i.kt)("h3",{id:"--json"},"--json"),(0,i.kt)("p",null,"Keluarkan laporan audit dalam format JSON."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Hanya audit dependensi dev."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"Hanya audit dependensi production."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,"Jangan audit ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,i.kt)("p",null,"Jika registri merespons dengan kode status non-200, proses harus keluar dengan 0. Jadi prosesnya akan gagal hanya jika registri benar-benar berhasil merespons dengan kerentanan yang ditemukan."))}m.isMDXComponent=!0}}]);