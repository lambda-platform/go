import{m as g}from"./_mixin.5423b4df.js";import{a as b}from"./entry.ed02987b.js";import{Y as l,Z as h,a0 as p,$ as s,c as n,a1 as f,E as y,a2 as O,_ as k,V as m}from"./vue.65d04748.js";import"./common.58b17c5e.js";import"./ant.9404c8e1.js";import"./moment.8b5e7d95.js";import"./ag.28cbf13c.js";import"./lodash.b9b9571e.js";import"./numeral.2889d7a5.js";import"./cryptoJs.26cbc7e1.js";const C={mixins:[g],computed:{lang(){const e=["currentPassword","confirmPassword","Create_a_password","_pass"];return e.reduce((o,a,t)=>(o[a]=this.$t("dataForm."+e[t]),o),{})}},data(){return{passwordGenerated:!1}},methods:{generatePass(){let e=["a-z","A-Z","0-9","#"],o="",a="";e.indexOf("a-z")>=0&&(o+="abcdefghijklmnopqrstuvwxyz"),e.indexOf("A-Z")>=0&&(o+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),e.indexOf("0-9")>=0&&(o+="0123456789"),e.indexOf("#")>=0&&(o+="!{}()%&*$#^<>~@|");for(let t=0;t<8;t++)a+=o.charAt(Math.floor(Math.random()*o.length));this.model.form[this.model.component]=a,this.meta.passwordOption.confirm&&(this.model.form.password_confirm=a),this.passwordGenerated=!0}}};function P(e,o,a,t,w,d){const i=m("a-input-password"),u=m("a-form-item"),c=m("inline-svg"),_=m("a-tooltip"),v=m("lambda-form-item");return l(),h("div",null,[e.meta.passwordOption.edit_with_old_password?(l(),p(u,{key:0,label:d.lang.currentPassword,name:"current_password"},{default:s(()=>[n(i,{value:e.model.form.current_password,"onUpdate:value":o[0]||(o[0]=r=>e.model.form.current_password=r),password:""},null,8,["value"])]),_:1},8,["label"])):f("",!0),n(v,{label:e.label,name:e.model.component,meta:e.meta},{default:s(()=>[n(i,{value:e.model.form[e.model.component],"onUpdate:value":o[2]||(o[2]=r=>e.model.form[e.model.component]=r),password:"",disabled:e.disabled},{addonAfter:s(()=>[e.meta.passwordOption.generate?(l(),p(_,{key:0,slot:"append"},{title:s(()=>[y(O(d.lang.Create_a_password),1)]),default:s(()=>[k("span",{class:"svg-icon",onClick:o[1]||(o[1]=r=>d.generatePass())},[n(c,{src:"/assets/icons/duotone/Home/Key.svg"})])]),_:1})):f("",!0)]),_:1},8,["value","disabled"])]),_:1},8,["label","name","meta"]),e.meta.passwordOption.confirm?(l(),p(u,{key:1,label:d.lang.confirmPassword,name:"password_confirm"},{default:s(()=>[n(i,{type:w.passwordGenerated?"text":"password",value:e.model.form.password_confirm,"onUpdate:value":o[3]||(o[3]=r=>e.model.form.password_confirm=r)},null,8,["type","value"])]),_:1},8,["label"])):f("",!0)])}const S=b(C,[["render",P]]);export{S as default};
