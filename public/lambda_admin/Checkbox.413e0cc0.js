import{m as r}from"./_mixin.a8959d23.js";import{a as s}from"./entry.3c933d46.js";import{X as c,a2 as l,Z as o,c as d,E as i,a0 as p,S as a}from"./vue.300029e2.js";import"./common.01c9107c.js";import"./ant.d96fdebf.js";import"./moment.8b5e7d95.js";import"./ag.1d467b62.js";import"./lodash.ccbc03fa.js";import"./numeral.6cca0570.js";import"./cryptoJs.b65e2552.js";const h={mixins:[r],data(){return{value:!1}},methods:{change(e){e.target.checked?this.model.form[this.model.component]=1:this.model.form[this.model.component]=0}}};function f(e,b,_,k,u,m){const t=a("a-checkbox"),n=a("lambda-form-item");return c(),l(n,{label:e.label,name:e.model.component,meta:e.meta},{default:o(()=>[d(t,{checked:e.model.form[e.model.component]===1,disabled:e.disabled,onChange:m.change},{default:o(()=>[i(p(e.placeholder),1)]),_:1},8,["checked","disabled","onChange"])]),_:1},8,["label","name","meta"])}const y=s(h,[["render",f]]);export{y as default};
