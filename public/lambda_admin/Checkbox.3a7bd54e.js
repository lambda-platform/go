import{m as r}from"./_mixin.c115469c.js";import{a as s}from"./entry.8f24994f.js";import{Y as l,a3 as c,_ as o,f as d,E as i,a1 as p,S as a}from"./vue.7ad865ae.js";import"./ant.0262516a.js";import"./moment.8b5e7d95.js";import"./cryptoJs.ca7fe49a.js";import"./numeral.909ed99a.js";import"./common.67fd9ef6.js";const f={mixins:[r],data(){return{value:!1}},methods:{change(e){e.target.checked?this.model.form[this.model.component]=1:this.model.form[this.model.component]=0}}};function h(e,b,_,k,u,m){const t=a("a-checkbox"),n=a("lambda-form-item");return l(),c(n,{label:e.label,name:e.model.component,meta:e.meta},{default:o(()=>[d(t,{checked:e.model.form[e.model.component]===1,disabled:e.disabled,onChange:m.change},{default:o(()=>[i(p(e.placeholder),1)]),_:1},8,["checked","disabled","onChange"])]),_:1},8,["label","name","meta"])}const V=s(f,[["render",h]]);export{V as default};
