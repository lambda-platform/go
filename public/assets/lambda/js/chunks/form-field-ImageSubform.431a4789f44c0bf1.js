"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8876],{32470:(e,s,t)=>{t.r(s),t.d(s,{default:()=>i});const o={props:["model","label","rule","meta","do_render","url"],mounted:function(){this.uploadList=void 0!==this.$refs.upload.fileList?this.$refs.upload.fileList:[]},data:function(){return{defaultList:[],uploadList:[],showImage:!1,showImageUrl:""}},watch:{"model.form":function(e){var s=this,t=e[this.model.component];if(void 0!==this.meta.file.isMultiple&&this.meta.file.isMultiple)if("string"==typeof t&&void 0!==t&&null!=t){var o=JSON.parse(this.model.form[this.model.component]);Array.isArray(o)&&(this.defaultList=o.map((function(e){return{status:"finished",response:e.response,name:e.name}})),this.$nextTick((function(){s.uploadList=s.$refs.upload.fileList})))}else this.$refs.upload.fileList=[],this.uploadList=[],this.model.form[this.model.component]=null}},methods:{handleView:function(e){this.showImage=!0,this.showImageUrl=e},success:function(e){this.model.form[this.model.component]=e},handleRemove:function(e){var s=this.$refs.upload.fileList;this.$refs.upload.fileList.splice(s.indexOf(e),1),this.uploadList=this.$refs.upload.fileList,this.model.form[this.model.component]=this.uploadList.map((function(e){return{name:e.name,response:e.response}}))},beforeUpload:function(){}}};const i=(0,t(51900).Z)(o,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"subform-image-wrapper"},[t("Upload",{ref:"upload",staticClass:"subform-image",attrs:{"with-credentials":!0,action:(e.url?e.url:"")+"/lambda/krud/upload","on-success":e.success},model:{value:e.model.form[e.model.component],callback:function(s){e.$set(e.model.form,e.model.component,s)},expression:"model.form[model.component]"}},[t("Button",{attrs:{type:"dashed"}},[null!=this.model.form[this.model.component]?t("img",{staticClass:"preview-img subform-img-preview",attrs:{src:this.model.form[this.model.component],alt:"image"}}):e._e(),e._v(" "),t("div",[t("i",{staticClass:"tu ti-camera"}),e._v("\n                "+e._s(e.label)+"\n            ")])])],1)],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=form-field-ImageSubform.431a4789f44c0bf1.js.map