import{_ as n}from"./entry.ed02987b.js";import{X as c,Y as g,a0 as E,ab as k,ac as P,u as r}from"./vue.65d04748.js";import"./common.58b17c5e.js";import"./ant.9404c8e1.js";import"./moment.8b5e7d95.js";import"./ag.28cbf13c.js";import"./lodash.b9b9571e.js";import"./numeral.2889d7a5.js";import"./cryptoJs.26cbc7e1.js";const v={__name:"nuxt-error-page",props:{error:Object},setup(i){var a;const{error:e}=i;(e.stack||"").split(`
`).splice(1).map(t=>({text:t.replace("webpack:/","").replace(".vue",".js").trim(),internal:t.includes("node_modules")&&!t.includes(".cache")||t.includes("internal")||t.includes("new Promise")})).map(t=>`<span class="stack${t.internal?" internal":""}">${t.text}</span>`).join(`
`);const s=Number(e.statusCode||500),o=s===404,p=(a=e.statusMessage)!=null?a:o?"Page Not Found":"Internal Server Error",u=e.message||e.toString(),m=void 0,_=c(()=>n(()=>import("./error-404.99b5154f.js"),["./error-404.99b5154f.js","./entry.ed02987b.js","./vue.65d04748.js","./common.58b17c5e.js","./ant.9404c8e1.js","./moment.8b5e7d95.js","./ag.28cbf13c.js","./lodash.b9b9571e.js","./numeral.2889d7a5.js","./cryptoJs.26cbc7e1.js","./entry.6e346111.css","./composables.43f1bfa3.js","./error-404.0cd4f3dd.css"],import.meta.url).then(t=>t.default||t)),l=c(()=>n(()=>import("./error-500.8ab8eeca.js"),["./error-500.8ab8eeca.js","./composables.43f1bfa3.js","./entry.ed02987b.js","./vue.65d04748.js","./common.58b17c5e.js","./ant.9404c8e1.js","./moment.8b5e7d95.js","./ag.28cbf13c.js","./lodash.b9b9571e.js","./numeral.2889d7a5.js","./cryptoJs.26cbc7e1.js","./entry.6e346111.css","./error-500.748cb764.css"],import.meta.url).then(t=>t.default||t)),d=o?_:l;return(t,f)=>(g(),E(r(d),k(P({statusCode:r(s),statusMessage:r(p),description:r(u),stack:r(m)})),null,16))}},R=v;export{R as default};
