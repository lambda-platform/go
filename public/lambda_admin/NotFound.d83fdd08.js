import{m as r}from"./_mixin.7d945018.js";import{a as s,r as l,o as c,c as d,w as i,h as p,t as u}from"./entry.dda881ff.js";const f={mixins:[r],computed:{lang(){const e=["notFound"];return e.reduce((a,t,o)=>(a[t]=this.$t("dataForm."+e[o]),a),{})}},methods:{}};function _(e,a,t,o,b,n){const m=l("lambda-form-item");return c(),d(m,{label:e.label,name:e.model.component,meta:e.meta},{default:i(()=>[p("div",null,u(n.lang.notFound),1)]),_:1},8,["label","name","meta"])}const $=s(f,[["render",_]]);export{$ as default};