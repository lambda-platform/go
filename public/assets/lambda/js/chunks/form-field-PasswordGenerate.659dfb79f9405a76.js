"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6566],{80067:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const l={props:["model","label","rule","meta"],computed:{lang:function(){var e=this,t=["Create_a_password"];return t.reduce((function(o,l,n){return o[l]=e.$t("dataForm."+t[n]),o}),{})}},methods:{generatePass:function(){this.model.form[this.model.component]=Math.floor(1e5+9e5*Math.random())}}};const n=(0,o(51900).Z)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("FormItem",{attrs:{label:e.label,prop:e.rule}},[o("Input",{attrs:{type:"text",placeholder:e.meta&&null!==e.meta.placeHolder?e.meta.placeHolder:e.label},model:{value:e.model.form[e.model.component],callback:function(t){e.$set(e.model.form,e.model.component,t)},expression:"model.form[model.component]"}},[o("Tooltip",{attrs:{slot:"append",content:e.lang.Create_a_password,placement:"left"},slot:"append"},[o("Button",{attrs:{icon:"ios-key-outline"},on:{click:function(t){return e.generatePass()}}})],1)],1)],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=form-field-PasswordGenerate.659dfb79f9405a76.js.map