import{m as p}from"./_mixin.a8959d23.js";import{a as u}from"./entry.3c933d46.js";import{X as t,a2 as _,Z as f,_ as e,a0 as m,Y as s,$ as h,a1 as b,F as w,S as g}from"./vue.300029e2.js";import"./common.01c9107c.js";import"./ant.d96fdebf.js";import"./moment.8b5e7d95.js";import"./ag.1d467b62.js";import"./lodash.ccbc03fa.js";import"./numeral.6cca0570.js";import"./cryptoJs.b65e2552.js";const k={mixins:[p],computed:{lang(){const o=["download"];return o.reduce((l,r,n)=>(l[r]=this.$t("dataForm."+o[n]),l),{})}},data(){return{uploadList:[]}},watch:{"model.form"(o){this.uploadList=JSON.parse(this.model.form[this.model.component])}}},v={class:"multi-upload"},B={class:"multi-upload-list"},L=["src"],$=["href"];function x(o,l,r,n,d,i){const c=g("lambda-form-item");return t(),_(c,{label:o.label,name:o.model.component,meta:o.meta},{default:f(()=>[e("div",v,[e("label",null,m(o.label),1),e("div",B,[(t(!0),s(w,null,h(d.uploadList,a=>(t(),s("div",{class:"upload-list",key:a.index},[e("template",null,[a?(t(),s("img",{key:0,src:a},null,8,L)):b("",!0),e("a",{class:"upload-control",href:a,download:""},m(i.lang.download),9,$)])]))),128))])])]),_:1},8,["label","name","meta"])}const X=u(k,[["render",x]]);export{X as default};
