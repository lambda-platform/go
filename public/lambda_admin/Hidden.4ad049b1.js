import{a as n}from"./entry.e5ab3232.js";import{Y as d,a3 as i,$ as r,c,V as t}from"./vue.8575f319.js";import"./common.77f0e8e0.js";import"./ant.8a0ad9d7.js";import"./moment.8b5e7d95.js";import"./ag.2d2e5170.js";import"./lodash.007e3bbb.js";import"./numeral.183422ec.js";import"./cryptoJs.c870fd31.js";const u={props:["model","rule","label","meta"]};function s(_,l,e,f,b,v){const a=t("a-input"),o=t("a-form-item");return d(),i(o,{rules:e.rule,label:e.label,name:e.model.component,style:{visibility:"hidden"}},{default:r(()=>[c(a,{value:e.model.form[e.model.component],"onUpdate:value":l[0]||(l[0]=m=>e.model.form[e.model.component]=m),placeholder:e.meta&&e.meta.placeHolder!==null?e.meta.placeHolder:e.label,disabled:e.meta&&e.meta.disabled?e.meta.disabled:!1},null,8,["value","placeholder","disabled"])]),_:1},8,["rules","label","name"])}const w=n(u,[["render",s]]);export{w as default};
