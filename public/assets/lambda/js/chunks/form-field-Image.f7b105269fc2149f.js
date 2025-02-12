"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[286],{75433:(e,s,t)=>{t.r(s),t.d(s,{default:()=>i});const l={props:["model","label","rule","meta","do_render","url"],computed:{lang(){const e=["viewPhotos","_delete"];return e.reduce(((s,t,l)=>(s[t]=this.$t("dataForm."+e[l]),s)),{})}},mounted(){this.uploadList=void 0!==this.$refs.upload.fileList?this.$refs.upload.fileList:[]},data:()=>({defaultList:[],uploadList:[],showImage:!1,showImageUrl:""}),watch:{"model.form"(e){let s=e[this.model.component];if(void 0!==this.meta.file.isMultiple&&this.meta.file.isMultiple)if("string"==typeof s&&void 0!==s&&null!=s){let e=JSON.parse(this.model.form[this.model.component]);Array.isArray(e)&&(this.defaultList=e.map((e=>({status:"finished",response:e.response,name:e.name}))),this.$nextTick((()=>{this.uploadList=this.$refs.upload.fileList})))}else this.$refs.upload.fileList=[],this.uploadList=[],this.model.form[this.model.component]=null},do_render(e){e||(this.$refs.upload.fileList=[])}},methods:{handleView(e){this.showImage=!0,this.showImageUrl=e},success(e){this.meta.file.isMultiple?(this.uploadList=this.$refs.upload.fileList,this.model.form[this.model.component]=JSON.stringify(this.uploadList.map((e=>({name:e.name,response:e.response}))))):this.model.form[this.model.component]=e},handleRemove(e){const s=this.$refs.upload.fileList;this.$refs.upload.fileList.splice(s.indexOf(e),1),this.uploadList=this.$refs.upload.fileList,this.model.form[this.model.component]=this.uploadList.map((e=>({name:e.name,response:e.response})))},beforeUpload(){}}};const i=(0,t(14486).A)(l,(function(){var e=this,s=e._self._c;return s("FormItem",{attrs:{label:e.label,prop:e.rule}},[e.meta.file&&1==e.meta.file.isMultiple?s("div",{staticClass:"multi-upload"},[s("div",{staticClass:"multi-upload-list"},[e._l(e.uploadList,(function(t){return s("div",{key:t.index,staticClass:"upload-list"},["finished"==t.status?[t.response?s("img",{attrs:{src:`${e.url?e.url:""}${t.response}`},on:{click:function(s){return e.handleView(t.response)}}}):e._e(),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.meta||!e.meta.disabled,expression:"meta && meta.disabled ? false : true"}],staticClass:"upload-control",on:{click:function(s){return e.handleRemove(t)}}},[e._v(e._s(e.lang._delete)+"\n                    ")])]:[t.showProgress?s("Progress",{attrs:{percent:t.percentage,"hide-info":""}}):e._e()]],2)})),e._v(" "),s("Upload",{ref:"upload",attrs:{multiple:"","with-credentials":!0,action:`${e.url?e.url:""}/lambda/krud/upload`,"show-upload-list":!1,"default-file-list":e.defaultList,"on-success":e.success,"before-upload":e.beforeUpload,disabled:!(!e.meta||!e.meta.disabled)&&e.meta.disabled}},[s("div",{staticClass:"upload-handler"},[s("i",{staticClass:"ti ti-camera"})])])],2)]):s("Upload",{ref:"upload",attrs:{"with-credentials":!0,action:`${e.url?e.url:""}/lambda/krud/upload`,"on-success":e.success,disabled:!(!e.meta||!e.meta.disabled)&&e.meta.disabled},model:{value:e.model.form[e.model.component],callback:function(s){e.$set(e.model.form,e.model.component,s)},expression:"model.form[model.component]"}},[s("Button",{attrs:{type:"dashed"}},[null!=this.model.form[this.model.component]?s("img",{staticClass:"preview-img",attrs:{src:`${e.url?e.url:""}${e.model.form[e.model.component]}`,alt:"image"}}):e._e(),e._v(" "),s("div",[s("i",{staticClass:"ti ti-camera"}),e._v("\n                "+e._s(e.label)+"\n            ")])])],1),e._v(" "),s("Modal",{attrs:{title:e.lang.viewPhotos,width:"1000px"},model:{value:e.showImage,callback:function(s){e.showImage=s},expression:"showImage"}},[e.showImage?s("img",{staticStyle:{width:"100%"},attrs:{src:`${e.url?e.url:""}${e.showImageUrl}`}}):e._e()])],1)}),[],!1,null,null,null).exports}}]);