import{m as p}from"./_mixin.c115469c.js";import{a as t}from"./entry.8f24994f.js";import{Y as a,a3 as l,_ as s,S as n}from"./vue.7ad865ae.js";import"./ant.0262516a.js";import"./moment.8b5e7d95.js";import"./cryptoJs.ca7fe49a.js";import"./numeral.909ed99a.js";import"./common.67fd9ef6.js";const i={mixins:[p]};function u(e,m,f,b,v,$){const r=n("a-input-number"),d=n("lambda-form-item");return a(),l(d,{label:e.label,name:e.model.component,meta:e.meta},{default:s(()=>[e.meta.no_format?(a(),l(r,{key:0,type:"number",value:e.model.form[e.model.component],"onUpdate:value":m[0]||(m[0]=o=>e.model.form[e.model.component]=o),placeholder:e.placeholder,disabled:e.disabled,number:!0},null,8,["value","placeholder","disabled"])):(a(),l(r,{key:1,value:e.model.form[e.model.component],"onUpdate:value":m[1]||(m[1]=o=>e.model.form[e.model.component]=o),formatter:o=>`${o}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:o=>o.replace(/\$\s?|(,*)/g,""),placeholder:e.placeholder,disabled:e.disabled},null,8,["value","formatter","parser","placeholder","disabled"]))]),_:1},8,["label","name","meta"])}const w=t(i,[["render",u]]);export{w as default};
