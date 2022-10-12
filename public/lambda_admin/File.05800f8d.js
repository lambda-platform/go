import{m as c}from"./_mixin.030b7876.js";import{a as g}from"./entry.c548f030.js";import{L,P as _,m as b}from"./ant.9c0b679d.js";import{U as o,Y as l,a8 as r,a4 as d,_ as n,c as w,Z as y,a6 as M}from"./vue.9a5b07a3.js";import"./cryptoJs.12d0d048.js";import"./common.a3ab4f3b.js";import"./moment.8b5e7d95.js";import"./ag.16cfe0bb.js";import"./lodash.2101602c.js";import"./numeral.08866ac3.js";const k={mixins:[c],components:{LoadingOutlined:L,PlusOutlined:_},computed:{lang(){const e=["viewPhotos","_delete","pleaseSelectFile"];return e.reduce((t,a,m)=>(t[a]=this.$t("dataForm."+e[m]),t),{})},isMultiple(){return this.meta.file?!!(typeof this.meta.file.isMultiple<"u"&&this.meta.file.isMultiple):!1}},mounted(){this.init()},data(){return{defaultList:[],uploadList:[],showImage:!1,showImageUrl:"",loading:!1}},watch:{itemValue(e,t){(t&&!e||e&&!t)&&(e?this.init():this.uploadList=[])}},methods:{init(){if(this.model.form[this.model.component])if(this.isMultiple){if(JSON.stringify(this.uploadList!==this.model.form[this.model.component])){let e=JSON.parse(this.model.form[this.model.component]);Array.isArray(e)&&(this.uploadList=e)}}else this.uploadList.length>=1?this.uploadList[0].response!==this.model.form[this.model.component]&&(this.uploadList=[{status:"done",thumbUrl:this.model.form[this.model.component],response:this.model.form[this.model.component]}]):this.uploadList=[{status:"done",thumbUrl:this.model.form[this.model.component],response:this.model.form[this.model.component]}]},onVisibleChange(e){this.showImage=e},handleView(e){this.showImageUrl=e.response;const t=document.createElement("a");t.href=e.response,t.target="_blank",t.click()},handleChange(e){if(e.file.status==="uploading"){this.loading=!0;return}e.file.status==="done"&&(this.isMultiple?(this.uploadList=this.uploadList.map(t=>({status:"done",thumbUrl:this.url+t.response,response:t.response,name:t.name})),this.model.form[this.model.component]=JSON.stringify(this.uploadList)):(this.model.form[this.model.component]=e.file.response,this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component],name:e.file.name}]),this.loading=!1),e.file.status==="error"&&(this.uploadList=this.uploadList.filter(t=>t.status==="done"),this.loading=!1,b.error(this.$t("alertMessage.errorMsg")))},success(e){this.meta.file?this.isMultiple?(this.uploadList=this.$refs.upload.fileList,this.model.form[this.model.component]=JSON.stringify(this.uploadList.map(t=>({name:t.name,response:t.response})))):this.model.form[this.model.component]=e:this.model.form[this.model.component]=e},handleRemove(e){this.isMultiple?this.model.form[this.model.component]=JSON.stringify(this.uploadList.filter(t=>t.response!==e.response)):this.model.form[this.model.component]=null}}},v={class:"file-uploader"},S={key:1,class:"ti ti-file"},U={class:"ant-upload-text"};function C(e,t,a,m,i,s){const h=o("loading-outlined"),p=o("a-upload"),u=o("lambda-form-item");return l(),r(u,{label:e.label,name:e.model.component,meta:e.meta},{default:d(()=>[n("div",v,[w(p,{"file-list":i.uploadList,"onUpdate:file-list":t[0]||(t[0]=f=>i.uploadList=f),disabled:e.disabled,multiple:this.isMultiple,name:"file","list-type":"picture-card",action:`${e.url?e.url:""}/lambda/krud/upload`,onPreview:s.handleView,onChange:s.handleChange,onRemove:s.handleRemove},{default:d(()=>[n("div",null,[i.loading?(l(),r(h,{key:0})):(l(),y("i",S)),n("div",U,M(s.lang.pleaseSelectFile),1)])]),_:1},8,["file-list","disabled","multiple","action","onPreview","onChange","onRemove"])])]),_:1},8,["label","name","meta"])}const E=g(k,[["render",C]]);export{E as default};