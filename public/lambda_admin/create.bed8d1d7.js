import{m as i,c as a,K as d}from"./mixin.df95f311.js";import{a as c}from"./entry.d62cc07b.js";import{Y as m,Z as p,c as s,_ as o,V as t}from"./vue.af4c1aff.js";import"./common.6a974f5f.js";import"./ant.1e7698c3.js";import"./moment.8b5e7d95.js";import"./ag.ed4f9fb5.js";import"./lodash.e407703a.js";import"./numeral.035c4f8b.js";import"./cryptoJs.7428ec8d.js";const l={inheritAttrs:!1,name:"Canvas",mixins:[i],data(){return{form_width:800,exportLoading:!1}},components:{common:a,Krudtools:d},methods:{templateEdit(){this.openSide()},templateOnSuccess(){this.hideSide()}},mounted(){}},u={class:"card drawer-wrappper"},_={class:"offcanvas-template"},f={class:"crud-page"},h={class:"crud-page-body"},v={class:""},w={class:"ant-drawer-content"},g={class:"ant-drawer-wrapper-body"},y={class:"ant-drawer-body"};function S(e,E,$,b,B,C){const r=t("common"),n=t("dataform");return m(),p("div",u,[s(r,{parent:e.parent,title:e.title,hideAction:!0,permissions:e.permissions},null,8,["parent","title","permissions"]),o("section",_,[o("div",f,[o("div",h,[o("div",v,[o("div",w,[o("div",g,[o("div",y,[s(n,{ref:"form",hideTitle:!0,schemaID:e.form,title:e.title,url:e.url,editMode:e.editMode,onSuccess:e.onSuccess,onReady:e.onReady,do_render:!0,permissions:e.permissions,page_id:e.page_id,user_condition:e.user_condition?e.user_condition.formCondition:null,onError:e.onError},null,8,["schemaID","title","url","editMode","onSuccess","onReady","permissions","page_id","user_condition","onError"])])])])])])])])])}const O=c(l,[["render",S]]);export{O as default};
