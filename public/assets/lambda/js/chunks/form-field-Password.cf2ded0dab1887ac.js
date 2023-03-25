"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1933],{6211:(e,o,r)=>{r.r(o),r.d(o,{default:()=>a});const t={props:["model","label","rule","meta"],computed:{lang:function(){var e=this,o=["currentPassword","confirmPassword","Create_a_password","_pass"];return o.reduce((function(r,t,a){return r[t]=e.$t("dataForm."+o[a]),r}),{})}},created:function(){},data:function(){return{passwordGenerated:!1}},methods:{generatePass:function(){var e=["a-z","A-Z","0-9","#"],o="",r="";e.indexOf("a-z")>=0&&(o+="abcdefghijklmnopqrstuvwxyz"),e.indexOf("A-Z")>=0&&(o+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),e.indexOf("0-9")>=0&&(o+="0123456789"),e.indexOf("#")>=0&&(o+="!{}()%&*$#^<>~@|");for(var t=0;t<8;t++)r+=o.charAt(Math.floor(Math.random()*o.length));this.model.form[this.model.component]=r,this.meta.passwordOption.confirm&&(this.model.form.password_confirm=r),this.passwordGenerated=!0}}};const a=(0,r(51900).Z)(t,(function(){var e=this,o=e._self._c;return o("div",[e.meta.passwordOption.edit_with_old_password?o("FormItem",{attrs:{label:e.lang.currentPassword,prop:"current_password"}},[o("Input",{attrs:{type:"password",placeholder:e.lang.currentPassword},model:{value:e.model.form.current_password,callback:function(o){e.$set(e.model.form,"current_password",o)},expression:"model.form['current_password']"}})],1):e._e(),e._v(" "),o("FormItem",{attrs:{label:e.lang._pass,prop:e.rule}},[o("Input",{attrs:{type:e.passwordGenerated?"text":"password",autocomplete:"off",placeholder:e.meta&&null!==e.meta.placeHolder?e.meta.placeHolder:e.label},model:{value:e.model.form[e.model.component],callback:function(o){e.$set(e.model.form,e.model.component,o)},expression:"model.form[model.component]"}},[e.meta.passwordOption.generate?o("Tooltip",{attrs:{slot:"append",content:e.lang.Create_a_password,placement:"left"},slot:"append"},[o("Button",{attrs:{icon:"ios-key-outline"},on:{click:function(o){return e.generatePass()}}})],1):e._e()],1)],1),e._v(" "),e.meta.passwordOption.confirm?o("FormItem",{attrs:{label:e.lang.confirmPassword,prop:"password_confirm"}},[o("Input",{attrs:{type:e.passwordGenerated?"text":"password",placeholder:e.lang.confirmPassword},model:{value:e.model.form.password_confirm,callback:function(o){e.$set(e.model.form,"password_confirm",o)},expression:"model.form['password_confirm']"}})],1):e._e()],1)}),[],!1,null,null,null).exports}}]);