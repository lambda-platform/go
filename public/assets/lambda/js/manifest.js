(()=>{"use strict";var e,a,d={},r={};function f(e){var a=r[e];if(void 0!==a)return a.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return d[e].call(i.exports,i,i.exports,f),i.loaded=!0,i.exports}f.m=d,e=[],f.O=(a,d,r,i)=>{if(!d){var c=1/0;for(l=0;l<e.length;l++){for(var[d,r,i]=e[l],t=!0,o=0;o<d.length;o++)(!1&i||c>=i)&&Object.keys(f.O).every((e=>f.O[e](d[o])))?d.splice(o--,1):(t=!1,i<c&&(c=i));if(t){e.splice(l--,1);var b=r();void 0!==b&&(a=b)}}return a}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[d,r,i]},f.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return f.d(a,{a}),a},f.d=(e,a)=>{for(var d in a)f.o(a,d)&&!f.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((a,d)=>(f.f[d](e,a),a)),[])),f.u=e=>6944===e?"assets/lambda/js/datagrid-vendor.js":"assets/lambda/js/chunks/"+({50:"datasource-list",80:"form-field-HTML",84:"form-field-TreeSelect",126:"form-field-DateTime",242:"grid-File",315:"datasource-builder",705:"form-field-text",826:"Dataform-el",931:"form-field-sub-form",973:"form-field-Time",1268:"chart-list",1503:"role-index",1582:"moqup-preview",1599:"grid-Image-Item",1605:"form-preview",1766:"grid-Radio",1797:"form-field-Checkbox",1923:"krud-spa",1933:"form-field-Password",1976:"krud-create",2031:"notification-index",2163:"embed-form",2203:"chart-table",2387:"form-field-Money",2405:"form-field-sub-form-grid",2681:"grid-Number",2761:"chart-builder",2775:"Datagrid-el",2939:"form-list",2943:"grid-Text",2997:"form-field-Email",3146:"form-field-RadioWithTextInput",3175:"grid-SetFilterDate",3183:"form-field-GridSelector",3572:"grid-index",3617:"form-field-Switch",3666:"form-field-AdminMenu",4036:"form-field-Select",4136:"form-field-Divider",4177:"grid-DateRange",4189:"analytic-index",4218:"form-field-Date",4273:"grid-RadioButtonFilter",4370:"form-field-NumberGenerate",4501:"crud-index",4607:"form-field-iSelect",4656:"krud-window",4692:"chart-index",4735:"report-index",4843:"krud-progress-list",4859:"report-preview",4869:"chart-pie",4913:"form-index",4933:"grid-Input",5075:"form-field-FooterButton",5109:"form-field-Label",5143:"chart-rest",5182:"form-field-Search",5300:"grid-Checkbox",5311:"grid-SetFilter",5323:"form-field-TimeMask",5470:"chart-area",5595:"moqup-list",5830:"grid-builder",5896:"form-field-QGis",5903:"grid-Tag",5955:"form-field-CustomElement",6022:"grid-Button",6024:"form-field-CK",6075:"moqup-index",6112:"grid-Image-Base64",6133:"form-field-ColorPicker",6151:"form-builder",6244:"form-field-Geographic",6386:"form-field-ImageDrag",6400:"grid-Link",6555:"grid-Textarea",6566:"form-field-PasswordGenerate",6593:"chart-el",6812:"chart-table-list",6838:"grid-Date",6967:"chart-countbox",6979:"grid-DateRangeDouble",6987:"form-field-Image",7268:"render-index",7370:"chart-build-el",7434:"embed-grid",7455:"form-field-Download",7679:"chart-radar",7911:"form-field-Radio",7917:"project-index",7997:"form-field-File",8004:"datasource-index",8035:"krud-default",8052:"krud-canvas",8110:"views-404",8196:"moqup-builder",8197:"report-list",8254:"form-field-Number",8389:"menu-index",8670:"chart-element-control",8712:"graphql-builder",8839:"graphql-index",8876:"form-field-ImageSubform",8981:"grid-list",9017:"report-builder",9035:"form-field-Hidden",9134:"chart-preview",9138:"grid-Custom",9342:"form-field-not-fount",9343:"form-field-Textarea",9402:"grid-SetFilterAltered",9451:"grid-preview",9781:"chart-element-preview",9839:"grid-Html",9898:"krud-withSubCruds",9937:"graphql-list",9998:"grid-Select"}[e]||e)+"."+{50:"55f5a907e9b10ce5",80:"65cd75a59340fc69",84:"3924759bfddf64e9",126:"8a9d7dc49f145871",242:"3f396c8ca80a9724",315:"5afe8b747d79caf9",653:"1b655d24af104d53",705:"711ea2ec4ea9b888",826:"8430d4945a89cb0b",931:"65e134966053230c",973:"813bbb523db2755d",1268:"5b547a88aea390eb",1503:"50d7a9011da3250a",1582:"a318a0d409b9ebcd",1599:"7f8bf0490c1f6bdd",1605:"e0d4f7aa6080625c",1766:"5a582a49f03b677b",1797:"4967ce8774e22a42",1923:"c7f676b747c30927",1933:"3f73c4140e0e5585",1976:"621f430afd3bd97a",2031:"301d529a139e8a53",2163:"618789393f17adff",2203:"59c4eea0e719fb7a",2387:"8a69474617dfaf1a",2405:"51ca96034095f1cf",2681:"5304fd718bc96282",2761:"5bc59d1776230c69",2775:"9397417d9d604856",2939:"8822b6ed26535bd4",2943:"8ace8c38d19f57cc",2997:"43f43e0af9e7983e",3146:"b95fb2ef1865956b",3175:"f4fbb486f8f62c53",3183:"257877c876bf6067",3572:"1a3361576c3143fb",3617:"8e2dadd15b8018ba",3666:"7b4735148131cb4a",4036:"34efdb5eab6bc463",4136:"4d52be45a7ffc8aa",4177:"aaabe2d9c2c99e03",4189:"9c88ced3a02209c2",4218:"288c2fde6ecb20a6",4273:"7ef17d1ce8987492",4370:"838a54c338e8a1a7",4501:"006220c3d3a4015b",4607:"9a9f8e5c3c41b9fc",4656:"15bfc8f5545c4ce2",4692:"8d7af0f7aad68d44",4735:"ce92af88cee1ae09",4843:"0d6aa6323a49186a",4859:"dbc13f8242f6a6e3",4869:"7277eeae4ec883b7",4913:"c429b108231e8be2",4933:"0526a714b20c5b56",5075:"8a1939e3906a5c0a",5109:"463ecc17873e371c",5143:"ddb6a8f0a7431a1b",5182:"50b33d894a966dde",5300:"9dd76f1376d3c567",5311:"350ac2aa83d0d811",5323:"b895708a807e9a6b",5470:"98a67066cac9c97e",5595:"5deada3457ee5d00",5830:"5e49c02e5578fc28",5896:"425f58d597a15c0c",5903:"afd0b042c7c2c5f7",5955:"dd53f1e75309b16e",6022:"d0745274d60f5240",6024:"ca2d05702c143795",6075:"0a88e0583a6ad39b",6112:"804858bec11da218",6133:"f70090acaacf52d9",6151:"a61a2a4a2bd4d185",6244:"1ec3f2dd08ddef97",6386:"b1dbbed483be5ba8",6400:"87b1fc11e85e79ae",6555:"3b7863113e209bba",6566:"c8fa7822e4cec93e",6593:"d7723662ea728b70",6812:"0b96dd77192ada31",6838:"75e15f79250cb588",6967:"38a9e9d1b96086cf",6979:"b7f3c1da4794845f",6987:"c531c920b51caadb",7268:"f2b0c1047c33a4ee",7370:"32281c95f5668232",7434:"5162d701d4564dbb",7455:"bfcbf705e41bda48",7679:"9382aad6f0f2059c",7911:"efd003c745ad2bd0",7917:"2bd8a39191d31fa8",7997:"3654c3d382904074",8004:"6d42ec6f5f0a6eb6",8035:"f0cda77009ff9fab",8052:"b4ff6eae3779272b",8110:"7c109d958b1b260e",8196:"8cc2b8614356e8a7",8197:"2a64d2930e14c8aa",8254:"40b4613d927a562d",8389:"07cb354ea10e1f15",8670:"73f5d08dce44d5a3",8712:"25aaef6a2a878432",8839:"99f84057b5424920",8876:"055039f3089a1524",8981:"2c28f4096e4aad92",9017:"21c7c2abb0704c51",9035:"9bd0433af00f55e4",9134:"d6005ea903a2c95e",9138:"401eb1700da9b781",9342:"4501138fe07059d5",9343:"a6cd931e00f5562e",9402:"5919e75d6730e363",9451:"120ca1b2d8484949",9566:"d437565cd48b28d2",9781:"7baea9e5dbe496aa",9839:"5465921fcfb4ae96",9898:"0129a6118df8c231",9937:"78f38a4a6981cc3d",9998:"b31aaade398540d5"}[e]+".js",f.miniCssF=e=>({207:"assets/lambda/css/dataform",993:"assets/lambda/css/krud",2883:"assets/lambda/css/puzzle",4920:"assets/lambda/css/chart",5910:"assets/lambda/css/agent",7379:"assets/lambda/css/datasource",7418:"assets/lambda/css/paper",9885:"assets/lambda/css/datagrid"}[e]+".css"),f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),a={},f.l=(e,d,r,i)=>{if(a[e])a[e].push(d);else{var c,t;if(void 0!==r)for(var o=document.getElementsByTagName("script"),b=0;b<o.length;b++){var l=o[b];if(l.getAttribute("src")==e){c=l;break}}c||(t=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,f.nc&&c.setAttribute("nonce",f.nc),c.src=e),a[e]=[d];var s=(d,r)=>{c.onerror=c.onload=null,clearTimeout(n);var f=a[e];if(delete a[e],c.parentNode&&c.parentNode.removeChild(c),f&&f.forEach((e=>e(r))),d)return d(r)},n=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),t&&document.head.appendChild(c)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),f.p="/",(()=>{var e={5245:0,9885:0,993:0,2883:0,5910:0,7418:0,4920:0,7379:0,207:0};f.f.j=(a,d)=>{var r=f.o(e,a)?e[a]:void 0;if(0!==r)if(r)d.push(r[2]);else if(/^(207|2883|4920|5245|5910|7379|7418|9885|993)$/.test(a))e[a]=0;else{var i=new Promise(((d,f)=>r=e[a]=[d,f]));d.push(r[2]=i);var c=f.p+f.u(a),t=new Error;f.l(c,(d=>{if(f.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var i=d&&("load"===d.type?"missing":d.type),c=d&&d.target&&d.target.src;t.message="Loading chunk "+a+" failed.\n("+i+": "+c+")",t.name="ChunkLoadError",t.type=i,t.request=c,r[1](t)}}),"chunk-"+a,a)}},f.O.j=a=>0===e[a];var a=(a,d)=>{var r,i,[c,t,o]=d,b=0;if(c.some((a=>0!==e[a]))){for(r in t)f.o(t,r)&&(f.m[r]=t[r]);if(o)var l=o(f)}for(a&&a(d);b<c.length;b++)i=c[b],f.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return f.O(l)},d=self.webpackChunk=self.webpackChunk||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})(),f.nc=void 0})();