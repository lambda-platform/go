import{a as m,r as a,o as d,c,w as i,f as u}from"./entry.26562f7f.js";const r={props:["model","rule","label","meta"]};function s(_,l,e,f,b,v){const t=a("a-input"),n=a("a-form-item");return d(),c(n,{rules:e.rule,label:e.label,name:e.model.component,style:{visibility:"hidden"}},{default:i(()=>[u(t,{value:e.model.form[e.model.component],"onUpdate:value":l[0]||(l[0]=o=>e.model.form[e.model.component]=o),placeholder:e.meta&&e.meta.placeHolder!==null?e.meta.placeHolder:e.label,disabled:e.meta&&e.meta.disabled?e.meta.disabled:!1},null,8,["value","placeholder","disabled"])]),_:1},8,["rules","label","name"])}const h=m(r,[["render",s]]);export{h as default};
