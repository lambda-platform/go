import{a as p,b as u,s as f,U as h,r as t,o as m,e as w,f as o,w as d,h as e,i as g,t as c}from"./entry.dda881ff.js";const v={name:"profile",data(){return{editMode:!0,base_url:u}},methods:{onSuccess(s){},editUser(){this.$nextTick(()=>{let s=f.get(h);this.$refs.form.editModel(s.id)})}}},b={class:"card drawer-wrappper"},y={class:"page-title float-left"},x={class:"float-left pt-5"},M={class:"text-gray-700 dark:text-gray-200 text-base m-0"},S={class:"offcanvas-template"},T={class:"crud-page"},k={class:"crud-page-body"},N={class:""},U={class:"ant-drawer-content"},B={class:"ant-drawer-wrapper-body"},P={class:"ant-drawer-body"};function R(s,V,$,A,a,r){const n=t("Title"),i=t("Head"),l=t("portal"),_=t("dataform");return m(),w("div",b,[o(i,null,{default:d(()=>[o(n,null,{default:d(()=>[g(c(s.$t("appAdmin.changePassword")),1)]),_:1})]),_:1}),o(l,{to:"header-left"},{default:d(()=>[e("div",y,[e("div",x,[e("h1",M,c(s.$t("appAdmin.changePassword")),1)])])]),_:1}),e("section",S,[e("div",T,[e("div",k,[e("div",N,[e("div",U,[e("div",B,[e("div",P,[o(_,{ref:"form",url:a.base_url,hideTitle:!0,schemaID:"user_password",editMode:a.editMode,do_render:a.editMode,onReady:r.editUser,onSuccess:r.onSuccess},null,8,["url","editMode","do_render","onReady","onSuccess"])])])])])])])])])}const D=p(v,[["render",R]]);export{D as default};