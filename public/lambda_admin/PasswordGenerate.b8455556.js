import{m as u}from"./_mixin.e9db1746.js";import{a as f}from"./entry.e5ab3232.js";import{Y as _,a3 as g,$ as a,c as s,E as v,_ as b,a0 as h,V as t}from"./vue.8575f319.js";import"./common.77f0e8e0.js";import"./ant.8a0ad9d7.js";import"./moment.8b5e7d95.js";import"./ag.2d2e5170.js";import"./lodash.007e3bbb.js";import"./numeral.183422ec.js";import"./cryptoJs.c870fd31.js";const w={mixins:[u],computed:{lang(){const e=["Create_a_password"];return e.reduce((o,r,n)=>(o[r]=this.$t("dataForm."+e[n]),o),{})}},methods:{generatePass(){this.model.form[this.model.component]=Math.floor(1e5+Math.random()*9e5)}}};function C(e,o,r,n,$,m){const d=t("inline-svg"),p=t("a-tooltip"),i=t("a-input-password"),c=t("lambda-form-item");return _(),g(c,{rule:e.rule,label:e.label,name:e.model.component,meta:e.meta},{default:a(()=>[s(i,{value:e.model.form[e.model.component],"onUpdate:value":o[1]||(o[1]=l=>e.model.form[e.model.component]=l),password:"",placeholder:e.placeholder,disabled:e.disabled},{addonAfter:a(()=>[s(p,{slot:"append"},{title:a(()=>[v(b(m.lang.Create_a_password),1)]),default:a(()=>[h("span",{class:"svg-icon",onClick:o[0]||(o[0]=l=>m.generatePass())},[s(d,{src:"/assets/icons/duotone/Home/Key.svg"})])]),_:1})]),_:1},8,["value","placeholder","disabled"])]),_:1},8,["rule","label","name","meta"])}const F=f(w,[["render",C]]);export{F as default};
