import{u as b,_ as D}from"./C-OLPXjV.js";import{aX as I}from"./Dp5pR5g4.js";import{c as l,o as y,q as R,x as E,z as f,u as c,y as o}from"./Bb3cLOD_.js";import"./DTdGTy9U.js";import"./BYTvHWBW.js";import"./CU0CZyNU.js";const x={class:"card drawer-wrappper"},N={class:"offcanvas-template"},U={class:"crud-page"},B={class:"crud-page-body"},F={class:""},M={class:"ant-drawer-content"},k={class:"ant-drawer-wrapper-body"},O={class:"ant-drawer-body"},Re={__name:"edit",props:{title:String,icon:String,main_tab_title:String,grid:Number,form:Number,projects_id:Number,hideHeader:Boolean,hasSelection:Boolean,actions:String,dbClickAction:Function,onRowSelect:Function,rowCurrentChange:Function,permissions:Object,user_condition:Object,custom_condition:Object,view_url:String,mode:String,onPropertySuccess:Function,onPropertyError:Function,page_id:String,withoutHeader:Boolean,withCrudLog:Boolean,base_url:String,form_width:[Number,String],edit_id:[Number,String],CRUD_ID:[Number,String],template:String,parent:Object},setup(e){const{t:_}=I(),t=e,i=l(null),h=l(null),u=l(null);function p(){}const m=()=>{t.actions?(n.value=!0,i.value.editModel(t.actions)):u.value&&(n.value=!0,i.value.editModel(u.value))},g=(s,r)=>{console.log(t.actions),t.actions?(n.value=!0,i.value.editModel(t.actions)):C(s)};function v(){}const{closeByBtn:j,gridSrc:L,formSrc:P,editMode:n,searchModel:V,form_width:q,exportLoading:A,isPrint:H,isExcel:z,isRefresh:G,isSave:T,rowId:X,cloneID:$,visibleDataForm:J,isExcelUpload:K,excelUploadCustomUrl:Q,showID:W,hasVNavSlot:Y,hasNavSlot:Z,hasLeftSlot:ee,url:w,lang:te,view:oe,edit:ie,clone:ne,quickEdit:re,refresh:se,search:de,stopLoading:ae,exportExcel:ce,print:le,excelUploadMethod:ue,save:me,onReady:fe,onSuccess:_e,onError:S,mediaRecorder:he,recordedChunks:pe,showScreenRecordConfirm:ge,startRecording:ve,stopRecording:we}=b(t,i,h,p,m,v,_,t.CRUD_ID),C=s=>{if(t.user_condition&&t.user_condition.formCondition){const r=s.identity,d=t.user_condition.formCondition.findIndex(a=>a.form_field===r);if(d>=0){const a=t.user_condition.formCondition[d].user_field;window.init&&window.init.user&&window.init.user[a]&&(n.value=!0,r.value=window.init.user[a],i.value.editModel(r.value))}}};return(s,r)=>{const d=y("dataform");return R(),E("div",x,[f(c(D),{parent:e.parent,title:e.title,hideAction:!0,permissions:e.permissions,CRUD_ID:e.CRUD_ID},null,8,["parent","title","permissions","CRUD_ID"]),o("section",N,[o("div",U,[o("div",B,[o("div",F,[o("div",M,[o("div",k,[o("div",O,[f(d,{ref_key:"dataForm",ref:i,hideTitle:!0,schemaID:e.form,title:e.title,url:c(w),editMode:c(n),onSuccess:m,onReady:g,do_render:!0,permissions:e.permissions,page_id:e.page_id,user_condition:e.user_condition?e.user_condition.formCondition:null,onError:c(S)},null,8,["schemaID","title","url","editMode","permissions","page_id","user_condition","onError"])])])])])])])])])}}};export{Re as default};
