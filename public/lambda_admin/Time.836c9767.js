import{m as t}from"./_mixin.1c793709.js";import{a as n}from"./entry.f024038a.js";import{W as p,a3 as i,$ as s,f as d,S as m}from"./vue.8156bfac.js";import"./ant.e4101cc5.js";import"./moment.8b5e7d95.js";import"./cryptoJs.7e1396ed.js";import"./numeral.417254ec.js";import"./common.3f2e1dd9.js";const f={mixins:[t]};function u(e,o,c,b,v,_){const a=m("a-time-picker"),l=m("lambda-form-item");return p(),i(l,{rule:e.rule,label:e.label,name:e.model.component,meta:e.meta},{default:s(()=>[d(a,{value:e.model.form[e.model.component],"onUpdate:value":o[0]||(o[0]=r=>e.model.form[e.model.component]=r),placeholder:e.placeholder,disabled:e.disabled,valueFormat:"HH:mm:ss"},null,8,["value","placeholder","disabled"])]),_:1},8,["rule","label","name","meta"])}const N=n(f,[["render",u]]);export{N as default};