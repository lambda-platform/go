import{m as c}from"./_mixin.c115469c.js";import{a as f}from"./entry.8f24994f.js";import{Y as b,a3 as _,_ as t,f as n,E as g,a1 as v,$ as N,S as a}from"./vue.7ad865ae.js";import"./ant.0262516a.js";import"./moment.8b5e7d95.js";import"./cryptoJs.ca7fe49a.js";import"./numeral.909ed99a.js";import"./common.67fd9ef6.js";const h={mixins:[c],computed:{lang(){const e=["createNumber"];return e.reduce((o,m,r)=>(o[m]=this.$t("dataForm."+e[r]),o),{})}},methods:{generateNumber(){this.model.form[this.model.component]=Math.floor(1e3+Math.random()*9e5)}}};function $(e,o,m,r,k,l){const d=a("inline-svg"),i=a("a-tooltip"),p=a("a-input-number"),u=a("lambda-form-item");return b(),_(u,{label:e.label,name:e.model.component,meta:e.meta},{default:t(()=>[n(p,{type:"number",value:e.model.form[e.model.component],"onUpdate:value":o[1]||(o[1]=s=>e.model.form[e.model.component]=s),placeholder:e.placeholder,disabled:e.disabled},{addonAfter:t(()=>[n(i,{slot:"append"},{title:t(()=>[g(v(l.lang.createNumber),1)]),default:t(()=>[N("span",{class:"svg-icon",onClick:o[0]||(o[0]=s=>l.generateNumber())},[n(d,{src:"/assets/icons/duotone/Home/Key.svg"})])]),_:1})]),_:1},8,["value","placeholder","disabled"])]),_:1},8,["label","name","meta"])}const D=f(h,[["render",$]]);export{D as default};
