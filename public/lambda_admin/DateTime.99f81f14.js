import{m as t}from"./_mixin.6c08c3ef.js";import{m as s}from"./date_mn_MN.557ff52c.js";import{a as d,r as a,o as p,c as i,w as c,f}from"./entry.26562f7f.js";const u={mixins:[t],data(){return{locale:s}},methods:{}};function b(e,o,_,h,m,v){const l=a("a-date-picker"),n=a("lambda-form-item");return p(),i(n,{label:e.label,name:e.model.component,meta:e.meta},{default:c(()=>[f(l,{value:e.model.form[e.model.component],"onUpdate:value":o[0]||(o[0]=r=>e.model.form[e.model.component]=r),"show-time":"",placeholder:e.placeholder,disabled:e.disabled,locale:m.locale,"value-format":"YYYY-MM-DDTHH:mm:ss[Z]"},null,8,["value","placeholder","disabled","locale"])]),_:1},8,["label","name","meta"])}const D=d(u,[["render",b]]);export{D as default};
