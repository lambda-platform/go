"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4370],{95307:(e,t,l)=>{l.r(t),l.d(t,{default:()=>n});const o={props:["model","label","rule","meta"],computed:{lang(){const e=["createNumber"];return e.reduce(((t,l,o)=>(t[l]=this.$t("dataForm."+e[o]),t)),{})}},methods:{generateNumber(){this.model.form[this.model.component]=Math.floor(1e3+9e5*Math.random())}}};const n=(0,l(51900).Z)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("FormItem",{attrs:{label:e.label,prop:e.rule}},[l("Input",{attrs:{type:"text",placeholder:e.meta&&null!==e.meta.placeHolder?e.meta.placeHolder:e.label},model:{value:e.model.form[e.model.component],callback:function(t){e.$set(e.model.form,e.model.component,t)},expression:"model.form[model.component]"}},[l("Tooltip",{attrs:{slot:"append",content:e.lang.createNumber,placement:"left"},slot:"append"},[l("Button",{attrs:{icon:"ios-key-outline"},on:{click:function(t){return e.generateNumber()}}})],1)],1)],1)}),[],!1,null,null,null).exports}}]);