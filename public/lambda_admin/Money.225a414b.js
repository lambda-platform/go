import{m as n}from"./_mixin.a8959d23.js";import{a as l}from"./entry.3c933d46.js";import{X as p,a2 as s,Z as d,c as i,S as m}from"./vue.300029e2.js";import"./common.01c9107c.js";import"./ant.d96fdebf.js";import"./moment.8b5e7d95.js";import"./ag.1d467b62.js";import"./lodash.ccbc03fa.js";import"./numeral.6cca0570.js";import"./cryptoJs.b65e2552.js";const f={mixins:[n]};function c(e,a,u,b,_,$){const r=m("a-input-number"),t=m("lambda-form-item");return p(),s(t,{label:e.label,name:e.model.component,meta:e.meta},{default:d(()=>[i(r,{value:e.model.form[e.model.component],"onUpdate:value":a[0]||(a[0]=o=>e.model.form[e.model.component]=o),formatter:o=>`\u20AE ${o}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:o=>o.replace(/\₮\s?|(,*)/g,""),placeholder:e.placeholder,disabled:e.disabled},null,8,["value","formatter","parser","placeholder","disabled"])]),_:1},8,["label","name","meta"])}const S=l(f,[["render",c]]);export{S as default};
