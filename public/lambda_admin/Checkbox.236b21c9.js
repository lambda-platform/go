import{m as r}from"./_mixin.e9db1746.js";import{a as s}from"./entry.e5ab3232.js";import{Y as c,a3 as l,$ as o,c as d,E as i,_ as p,V as a}from"./vue.8575f319.js";import"./common.77f0e8e0.js";import"./ant.8a0ad9d7.js";import"./moment.8b5e7d95.js";import"./ag.2d2e5170.js";import"./lodash.007e3bbb.js";import"./numeral.183422ec.js";import"./cryptoJs.c870fd31.js";const h={mixins:[r],data(){return{value:!1}},methods:{change(e){e.target.checked?this.model.form[this.model.component]=1:this.model.form[this.model.component]=0}}};function f(e,b,_,k,u,m){const t=a("a-checkbox"),n=a("lambda-form-item");return c(),l(n,{label:e.label,name:e.model.component,meta:e.meta},{default:o(()=>[d(t,{checked:e.model.form[e.model.component]===1,disabled:e.disabled,onChange:m.change},{default:o(()=>[i(p(e.placeholder),1)]),_:1},8,["checked","disabled","onChange"])]),_:1},8,["label","name","meta"])}const D=s(h,[["render",f]]);export{D as default};
