import{a as s,b as a}from"./entry.d62cc07b.js";import{Y as n,Z as d,c,V as i}from"./vue.af4c1aff.js";import"./common.6a974f5f.js";import"./ant.1e7698c3.js";import"./moment.8b5e7d95.js";import"./ag.ed4f9fb5.js";import"./lodash.e407703a.js";import"./numeral.035c4f8b.js";import"./cryptoJs.7428ec8d.js";const m={components:{},computed:{url(){return a}},methods:{onSuccess(){},onError(){},getData(){this.editMode=!0,this.$refs.form.editModel(this.$route.params.id)}},data(){return{editMode:!1,formId:null}}},u={class:"form-preview-page"};function _(r,l,p,f,o,e){const t=i("dataform");return n(),d("div",u,[c(t,{ref:"form",schemaID:r.$route.params.schema_id,editMode:o.editMode,hideTitle:!0,onSuccess:e.onSuccess,do_render:!0,onReady:e.getData,url:e.url,permissions:{c:!0,r:!1,u:!1,d:!1},user_condition:null,onError:e.onError},null,8,["schemaID","editMode","onSuccess","onReady","url","onError"])])}const I=s(m,[["render",_]]);export{I as default};
