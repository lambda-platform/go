"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5629],{3295:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const l={props:["model","label","rule","meta"],computed:{lang:function(){var e=this,t=["createNumber"];return t.reduce((function(o,l,n){return o[l]=e.$t("dataForm."+t[n]),o}),{})}},methods:{generateNumber:function(){this.model.form[this.model.component]=Math.floor(1e3+9e5*Math.random())}}};const n=(0,o(14486).A)(l,(function(){var e=this,t=e._self._c;return t("FormItem",{attrs:{label:e.label,prop:e.rule}},[t("Input",{attrs:{type:"text",placeholder:e.meta&&null!==e.meta.placeHolder?e.meta.placeHolder:e.label},model:{value:e.model.form[e.model.component],callback:function(t){e.$set(e.model.form,e.model.component,t)},expression:"model.form[model.component]"}},[t("Tooltip",{attrs:{slot:"append",content:e.lang.createNumber,placement:"left"},slot:"append"},[t("Button",{attrs:{icon:"ios-key-outline"},on:{click:function(t){return e.generateNumber()}}})],1)],1)],1)}),[],!1,null,null,null).exports}}]);