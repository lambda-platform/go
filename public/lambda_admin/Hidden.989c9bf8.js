import{a as n}from"./entry.f024038a.js";import{W as d,a3 as i,$ as c,f as r,S as a}from"./vue.8156bfac.js";import"./ant.e4101cc5.js";import"./moment.8b5e7d95.js";import"./cryptoJs.7e1396ed.js";import"./numeral.417254ec.js";import"./common.3f2e1dd9.js";const u={props:["model","rule","label","meta"]};function f(s,l,e,_,b,v){const t=a("a-input"),o=a("a-form-item");return d(),i(o,{rules:e.rule,label:e.label,name:e.model.component,style:{visibility:"hidden"}},{default:c(()=>[r(t,{value:e.model.form[e.model.component],"onUpdate:value":l[0]||(l[0]=m=>e.model.form[e.model.component]=m),placeholder:e.meta&&e.meta.placeHolder!==null?e.meta.placeHolder:e.label,disabled:e.meta&&e.meta.disabled?e.meta.disabled:!1},null,8,["value","placeholder","disabled"])]),_:1},8,["rules","label","name"])}const p=n(u,[["render",f]]);export{p as default};