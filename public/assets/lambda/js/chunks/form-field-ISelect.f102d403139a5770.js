"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3120],{16816:(e,l,o)=>{o.r(l),o.d(l,{default:()=>a});const t={components:{Button:o(25477).Z},props:["model","rule","label","meta","disabled","relation_data"],computed:{options:function(){return void 0!==this.meta.options&&this.meta.options.length>=1?this.meta.options:this.relation_data}},methods:{isShow:function(e){return!(!e.value||!e.label)&&(!this.$props.meta.relation.parentFieldOfForm||this.$props.model.form[this.$props.meta.relation.parentFieldOfForm]==e.parent_value)},onClear:function(){this.model.form[this.model.component]=null}}};const a=(0,o(51900).Z)(t,(function(){var e=this,l=e._self._c;return l("FormItem",{attrs:{label:e.label,prop:e.rule}},[e.meta.relation.multiple?l("Select",{attrs:{disabled:!(!e.meta||!e.meta.disabled)&&e.meta.disabled,placeholder:e.meta&&e.meta.placeHolder?e.meta.placeHolder:e.label,filterable:"",clearable:"",multiple:""},on:{"on-clear":e.onClear},model:{value:e.model.form[e.model.component],callback:function(l){e.$set(e.model.form,e.model.component,l)},expression:"model.form[model.component]"}},e._l(e.options,(function(o){return e.isShow(o)?l("Option",{key:o.index,attrs:{value:o.value}},[e._v(e._s(o.label)+"\n        ")]):e._e()})),1):l("Select",{attrs:{disabled:!(!e.meta||!e.meta.disabled)&&e.meta.disabled,placeholder:e.meta&&e.meta.placeHolder?e.meta.placeHolder:e.label,filterable:"",clearable:""},on:{"on-clear":e.onClear},model:{value:e.model.form[e.model.component],callback:function(l){e.$set(e.model.form,e.model.component,l)},expression:"model.form[model.component]"}},e._l(e.options,(function(o){return e.isShow(o)?l("Option",{key:o.index,attrs:{value:o.value}},[e._v(e._s(o.label)+"\n        ")]):e._e()})),1)],1)}),[],!1,null,null,null).exports}}]);