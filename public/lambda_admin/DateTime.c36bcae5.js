import{m as t}from"./_mixin.7d945018.js";import{a as r,r as a,o as s,c as d,w as p,f as i}from"./entry.dda881ff.js";const c={mixins:[t]};function f(e,o,u,b,_,v){const m=a("a-date-picker"),l=a("lambda-form-item");return s(),d(l,{label:e.label,name:e.model.component,meta:e.meta},{default:p(()=>[i(m,{value:e.model.form[e.model.component],"onUpdate:value":o[0]||(o[0]=n=>e.model.form[e.model.component]=n),"show-time":"",placeholder:e.placeholder,disabled:e.disabled,valueFormat:"YYYY-MM-DD HH:mm:ss"},null,8,["value","placeholder","disabled"])]),_:1},8,["label","name","meta"])}const Y=r(c,[["render",f]]);export{Y as default};