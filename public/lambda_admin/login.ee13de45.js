import{a as m,s,L as l,U as d,A as u,e as c,P as p,M as _,K as f,f as g,c as h,_ as r}from"./entry.3c933d46.js";import{_ as b}from"./dynamic-import-helper.1977255f.js";import{a as v}from"./common.01c9107c.js";import{U as S,X as L,a2 as E,a3 as w}from"./vue.300029e2.js";import"./moment.8b5e7d95.js";import"./ag.1d467b62.js";import"./lodash.ccbc03fa.js";import"./ant.d96fdebf.js";import"./numeral.6cca0570.js";import"./cryptoJs.b65e2552.js";const A={props:["selectedLang"],name:"login",data(){return{lambda:s.get(l)}},methods:{onSuccess(e){e.status&&(this.isSuccess=!0,s.set(d,{...e.data,jwt:void 0}),window.init={user:e.data,firebase_config:this.lambda.notify.firebaseConfig,microserviceSettings:[]},s.set(u,e.token,7*24*60*60*1e3),c(e.token),e.data.role===1?window.location.replace(e.path):v.get("/get-permissions").then(a=>{if(a.data.status){s.set(p,a.data.permission.permissions),s.set(_,a.data.permission.menu),s.set(f,a.data.permission.kruds);let o=g(a.data.permission.menu,null,a.data.permission.kruds);s.set(h,o);let i=e.path.replaceAll("#","");if(i.includes("/p/")){let t=i.split("/");t[t.length-1],this.$router.replace("/admin")}else this.$router.replace("/admin")}}))},renderTheme(){return S(()=>b(Object.assign({"../../../node_modules/@lambda-platform/lambda-vue/src/modules/agent/views/theme/aside/auth/login.vue":()=>r(()=>import("./login.1e638bc2.js"),["./login.1e638bc2.js","./common.01c9107c.js","./ant.d96fdebf.js","./vue.300029e2.js","./entry.3c933d46.js","./moment.8b5e7d95.js","./ag.1d467b62.js","./lodash.ccbc03fa.js","./numeral.6cca0570.js","./cryptoJs.b65e2552.js","./entry.8dbed6ed.css"],import.meta.url),"../../../node_modules/@lambda-platform/lambda-vue/src/modules/agent/views/theme/default/auth/login.vue":()=>r(()=>import("./login.a2026ebf.js"),["./login.a2026ebf.js","./common.01c9107c.js","./ant.d96fdebf.js","./vue.300029e2.js","./entry.3c933d46.js","./moment.8b5e7d95.js","./ag.1d467b62.js","./lodash.ccbc03fa.js","./numeral.6cca0570.js","./cryptoJs.b65e2552.js","./entry.8dbed6ed.css"],import.meta.url)}),`../../../node_modules/@lambda-platform/lambda-vue/src/modules/agent/views/theme/${this.lambda.theme}/auth/login.vue`))}}};function C(e,a,o,i,t,n){return L(),E(w(n.renderTheme()),{onSuccess:n.onSuccess,selectedLang:o.selectedLang,lambda:t.lambda},null,40,["onSuccess","selectedLang","lambda"])}const x=m(A,[["render",C]]);export{x as default};
