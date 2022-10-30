"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[927],{9613:(e,a,n)=>{n.d(a,{Zo:()=>s,kt:()=>m});var t=n(9496);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=t.createContext({}),k=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},s=function(e){var a=k(e.components);return t.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=k(n),m=l,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?t.createElement(f,r(r({ref:a},s),{},{components:n})):t.createElement(f,r({ref:a},s))}));function m(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var k=2;k<i;k++)r[k]=n[k];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6303:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>k,toc:()=>u});var t=n(2962),l=n(2742),i=(n(9496),n(9613)),r=["components"],p={id:"install",title:"pnpm install"},o=void 0,k={unversionedId:"cli/install",id:"version-6.x/cli/install",title:"pnpm install",description:"Alias: i",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-6.x/cli/install.md",sourceDirName:"cli",slug:"/cli/install",permalink:"/id/6.x/cli/install",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"6.x",frontMatter:{id:"install",title:"pnpm install"},sidebar:"version-6.x/docs",previous:{title:"pnpm add <pkg>",permalink:"/id/6.x/cli/add"},next:{title:"pnpm update",permalink:"/id/6.x/cli/update"}},s={},u=[{value:"RINGKASAN",id:"ringkasan",level:2},{value:"Options",id:"options",level:2},{value:"--offline",id:"--offline",level:3},{value:"--prefer-offline",id:"--prefer-offline",level:3},{value:"--ignore-scripts",id:"--ignore-scripts",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--lockfile-only",id:"--lockfile-only",level:3},{value:"--fix-lockfile",id:"--fix-lockfile",level:3},{value:"--frozen-lockfile",id:"--frozen-lockfile",level:3},{value:"--reporter=&lt;name&gt;",id:"--reportername",level:3},{value:"--use-store-server",id:"--use-store-server",level:3},{value:"--shamefully-hoist",id:"--shamefully-hoist",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],d={toc:u};function m(e){var a=e.components,p=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,t.Z)({},d,p,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Alias: ",(0,i.kt)("inlineCode",{parentName:"p"},"i")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," digunakan untuk menginstal semua dependensi (paket yang menjadi ketergantungan paket lain) dari sebuah proyek."),(0,i.kt)("p",null,"Di linkungan CI, instalasi akan gagal jika sebuah lockfile hadir tetapi butuh diperbarui."),(0,i.kt)("p",null,"Di dalam ",(0,i.kt)("a",{parentName:"p",href:"/id/6.x/workspaces"},"workspace (ruang kerja)"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," akan menginstal semua dependensi di semua proyek. Jika Anda ingin menonaktifkan perilaku ini, ubah setelan ",(0,i.kt)("inlineCode",{parentName:"p"},"recursive-install")," menjadi ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8927).Z,width:"940",height:"472"})),(0,i.kt)("h2",{id:"ringkasan"},"RINGKASAN"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Perintah"),(0,i.kt)("th",{parentName:"tr",align:null},"Arti"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm i --offline")),(0,i.kt)("td",{parentName:"tr",align:null},"Hanya install secara luring melalui store")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," tidak akan diperbarui")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm i --lockfile-only")),(0,i.kt)("td",{parentName:"tr",align:null},"Hanya memperbarui ",(0,i.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml"))))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--offline"},"--offline"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Jika ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", pnpm hanya akan menggunakan paket-paket yang sudah tersedia di store. Jika paket tidak ditemukan secara lokal, maka akan instalasi gagal."),(0,i.kt)("h3",{id:"--prefer-offline"},"--prefer-offline"),(0,i.kt)("p",null,"Ditambahkan di: v1.28.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Jika ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", pemeriksaan kedaluwarsa untuk data yang di-cache akan dilewati, tetapi data yang hilang akan diminta dari server. Untuk memaksa mode luring penuh, gunakan ",(0,i.kt)("inlineCode",{parentName:"p"},"--offline"),"."),(0,i.kt)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Jangan menjalankan skrip apapun yang terdefinisi di dalam ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," proyek dan setiap dependensinya."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Tanda ini tidak mencegah eksekusi ",(0,i.kt)("a",{parentName:"p",href:"/id/6.x/pnpmfile"},".pnpmfile.cjs"))),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"pnpm tidak akan menginstal paket apapun yang tercantum pada ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," jika variabel lingkungan ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," diatur sebagai produksi. Gunakan tanda ini untuk menginstruksikan pnpm supaya mengabaikan ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," dan mengambil status produksinya dari tanda ini."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Hanya akan menginstall ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," apapun yang ada di dalam ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"opsionalKetergantungan")," tidak akan diinstal."),(0,i.kt)("h3",{id:"--lockfile-only"},"--lockfile-only"),(0,i.kt)("p",null,"Ditambahkan pada: v1.26.0 (awalnya diberi nama ",(0,i.kt)("inlineCode",{parentName:"p"},"shrinkwrap-only"),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Ketika digunakan, hanya akan memperbarui ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". Tidak akan ada yang ditulis ke direktori ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,i.kt)("h3",{id:"--fix-lockfile"},"--fix-lockfile"),(0,i.kt)("p",null,"Ditambahkan di: v6.15.0"),(0,i.kt)("p",null,"Memperbaiki entri-entri lockfile yang rusak secara otomatis."),(0,i.kt)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),(0,i.kt)("p",null,"Added in: v1.37.1 (initially named ",(0,i.kt)("inlineCode",{parentName:"p"},"frozen-shrinkwrap"),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Asali:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Untuk lingkungan bukan CI: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Untuk lingkungan CI: ",(0,i.kt)("strong",{parentName:"li"},"true"),", jika lockfile hadir"))),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", pnpm doesn't generate a lockfile and fails to install if the lockfile is out of sync with the manifest / an update is needed or no lockfile is present."),(0,i.kt)("h3",{id:"--reportername"},"--reporter=","<","name",">"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Asali:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Untuk stdout TTY: ",(0,i.kt)("strong",{parentName:"li"},"default")),(0,i.kt)("li",{parentName:"ul"},"Untuk stdout bukan TTY: ",(0,i.kt)("strong",{parentName:"li"},"append-only")))),(0,i.kt)("li",{parentName:"ul"},"Tipe: ",(0,i.kt)("strong",{parentName:"li"},"default"),", ",(0,i.kt)("strong",{parentName:"li"},"append-only"),", ",(0,i.kt)("strong",{parentName:"li"},"ndjson"),", ",(0,i.kt)("strong",{parentName:"li"},"silent"))),(0,i.kt)("p",null,"Allows you to choose the reporter that will log debug info to the terminal about the installation progress."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"silent"),", tidak akan menampilkan log ke dalam konsol, kecuali kesalahan fatal"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),", pelapor asali ketika stdout-nya adalah TTY"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"append-only")," (Ditambahkan pada v1.29.1), keluarannya selalu ditambahkan ke akhir. Tidak ada manipulasi kursor yang dilakukan"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ndjson"),", pelapor yang ",(0,i.kt)("em",{parentName:"li"},"verbose")," (menampilkan keluaran yang lebih rinci). Menampilkan semua log dalam format ",(0,i.kt)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson"))),(0,i.kt)("h3",{id:"--use-store-server"},"--use-store-server"),(0,i.kt)("p",null,"Added in: v1.30.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Starts a store server in the background. The store server will keep running after installation is done. To stop the store server, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm server stop")),(0,i.kt)("h3",{id:"--shamefully-hoist"},"--shamefully-hoist"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Creates a flat ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," structure, similar to that of ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),". ",(0,i.kt)("strong",{parentName:"p"},"WARNING"),": This is highly discouraged."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/id/6.x/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0},8927:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);