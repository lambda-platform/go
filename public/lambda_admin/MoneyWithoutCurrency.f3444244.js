import{m as n}from"./_mixin.1c793709.js";import{a as l}from"./entry.f024038a.js";import{W as p,a3 as s,$ as d,f as i,S as r}from"./vue.8156bfac.js";import"./ant.e4101cc5.js";import"./moment.8b5e7d95.js";import"./cryptoJs.7e1396ed.js";import"./numeral.417254ec.js";import"./common.3f2e1dd9.js";const f={mixins:[n]};function u(e,a,c,b,$,_){const m=r("a-input-number"),t=r("lambda-form-item");return p(),s(t,{label:e.label,name:e.model.component,meta:e.meta},{default:d(()=>[i(m,{value:e.model.form[e.model.component],"onUpdate:value":a[0]||(a[0]=o=>e.model.form[e.model.component]=o),formatter:o=>`${o}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:o=>o.replace(/\$\s?|(,*)/g,""),placeholder:e.placeholder,disabled:e.disabled},null,8,["value","formatter","parser","placeholder","disabled"])]),_:1},8,["label","name","meta"])}const w=l(f,[["render",u]]);export{w as default};
