"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7997],{31460:(e,l,o)=>{o.r(l),o.d(l,{default:()=>a});const t={props:["model","label","rule","meta","url"],computed:{lang:function(){var e=this,l=["pleaseSelectFile","download","view",""];return l.reduce((function(o,t,a){return o[t]=e.$t("dataForm."+l[a]),o}),{})}},methods:{success:function(e){this.model.form[this.model.component]=e}}};const a=(0,o(51900).Z)(t,(function(){var e=this,l=e.$createElement,o=e._self._c||l;return o("FormItem",{attrs:{label:e.label,prop:e.rule}},[o("div",{staticClass:"file-uploader"},[o("Upload",{attrs:{action:(e.url?e.url:"")+"/lambda/krud/upload","on-success":e.success,disabled:!(!e.meta||!e.meta.disabled)&&e.meta.disabled},model:{value:e.model.form[e.model.component],callback:function(l){e.$set(e.model.form,e.model.component,l)},expression:"model.form[model.component]"}},[o("div",{staticClass:"file-upload-handler"},[o("i",{staticClass:"ti-camera"}),e._v(" "),o("span",[e._v(e._s(e.lang.pleaseSelectFile))])])]),e._v(" "),null!=e.model.form[e.model.component]&&""!=e.model.form[e.model.component]?o("div",{staticClass:"file-control"},[o("a",{attrs:{href:e.model.form[e.model.component],target:"_blank",download:""}},[o("i",{staticClass:"ti-download"}),e._v(e._s(e.lang.download))]),e._v(" "),o("a",{attrs:{href:e.model.form[e.model.component],target:"_blank"}},[o("i",{staticClass:"ti-eye"}),e._v(e._s(e.lang.view))])]):e._e()],1)])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=form-field-File.2585912274a134ea.js.map