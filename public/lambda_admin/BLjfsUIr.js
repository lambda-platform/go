import{u as Y,_ as Z}from"./C-OLPXjV.js";import{aX as ee}from"./Dp5pR5g4.js";import{K as oe,c as te}from"./C3fYg2Lc.js";import{c as d,o as s,q as c,x as ie,z as n,u as e,A as C,y as r,O as ne,B as w,C as v}from"./Bb3cLOD_.js";import"./DTdGTy9U.js";import"./BYTvHWBW.js";import"./CU0CZyNU.js";import"./BscJb5-W.js";import"./CByKS65z.js";const re={class:"card drawer-wrappper"},se={class:"offcanvas-template"},ae={class:"crud-page"},de={class:"crud-page-body"},ce={id:"drawer-container"},Me={__name:"popup",props:{title:String,icon:String,main_tab_title:String,grid:Number,form:Number,projects_id:Number,hideHeader:Boolean,hasSelection:Boolean,actions:String,dbClickAction:Function,onRowSelect:Function,rowCurrentChange:Function,permissions:Object,user_condition:Object,custom_condition:Object,view_url:String,mode:String,onPropertySuccess:Function,onPropertyError:Function,page_id:String,withoutHeader:Boolean,withCrudLog:Boolean,base_url:String,form_width:[Number,String],edit_id:[Number,String],CRUD_ID:[Number,String],template:String,parent:Object},setup(o){const{t:x}=ee(),l=o,u=d(null),m=d(null),t=d(!1);function f(){t.value=!1,a.value=!1}function p(){t.value=!0}function E(){p()}function R(){f()}function b(){}const{closeByBtn:le,gridSrc:ue,formSrc:me,editMode:a,searchModel:fe,form_width:U,exportLoading:D,isPrint:k,isExcel:I,isRefresh:_,isSave:y,rowId:g,cloneID:pe,visibleDataForm:ge,isExcelUpload:B,excelUploadCustomUrl:N,showID:he,hasVNavSlot:Se,hasNavSlot:Ce,hasLeftSlot:we,url:h,lang:ve,view:L,edit:F,clone:$,quickEdit:M,refresh:O,search:P,stopLoading:xe,exportExcel:V,print:j,excelUploadMethod:K,save:A,onReady:T,onSuccess:q,onError:z,mediaRecorder:Ee,recordedChunks:Re,showScreenRecordConfirm:be,startRecording:Ue,stopRecording:De,changeKrudTool:G}=Y(l,u,m,E,R,b,x,l.CRUD_ID);return(i,S)=>{const H=s("portal"),Q=s("datagrid"),X=s("dataform"),J=s("a-modal");return c(),ie("div",re,[n(e(Z),{parent:o.parent,title:o.title,addAction:p,permissions:o.permissions,CRUD_ID:o.CRUD_ID},null,8,["parent","title","permissions","CRUD_ID"]),n(H,{to:"header-right"},{default:C(()=>[n(e(oe),{search:e(P),refresh:e(O),exportExcel:e(V),exportLoading:e(D),print:e(j),save:e(A),isPrint:e(k),isExcel:e(I),isExcelUpload:e(B),excelUploadCustomUrl:e(N),excelUploadMethod:e(K),isRefresh:e(_),isSave:e(y),isSearch:!1},null,8,["search","refresh","exportExcel","exportLoading","print","save","isPrint","isExcel","isExcelUpload","excelUploadCustomUrl","excelUploadMethod","isRefresh","isSave"])]),_:1}),r("section",se,[r("div",ae,[r("div",de,[r("div",ce,[r("div",{class:ne(t.value?"dg-flex open-drawer":"dg-flex")},[o.permissions&&o.permissions.r?(c(),w(Q,{key:0,ref_key:"dataGrid",ref:m,url:e(h),schemaID:o.grid,paginate:50,fnClone:e($),fnEdit:e(F),fnQuickEdit:e(M),fnView:e(L),actions:i.$props.actions,dblClick:i.$props.dbClickAction,onRowSelect:i.$props.onRowSelect,permissions:o.permissions,page_id:o.page_id,custom_condition:i.$props.custom_condition?i.$props.custom_condition:null,user_condition:o.user_condition?o.user_condition.gridCondition:null,changeKrudTool:e(G)},null,8,["url","schemaID","fnClone","fnEdit","fnQuickEdit","fnView","actions","dblClick","onRowSelect","permissions","page_id","custom_condition","user_condition","changeKrudTool"])):v("",!0)],2)])])])]),n(J,{open:t.value,"onUpdate:open":S[0]||(S[0]=W=>t.value=W),class:"create",maskClosable:!1,title:o.withCrudLog?`${o.title} : ${e(g)}`:o.title,forceRender:!0,width:e(U),footer:null,placement:"right"},{default:C(()=>[n(X,{ref_key:"dataForm",ref:u,hideTitle:!0,schemaID:o.form,title:o.title,url:e(h),editMode:e(a),onSuccess:e(q),onReady:e(T),do_render:t.value,permissions:o.permissions,page_id:o.page_id,user_condition:o.user_condition?o.user_condition.formCondition:null,onError:e(z),close:f},null,8,["schemaID","title","url","editMode","onSuccess","onReady","do_render","permissions","page_id","user_condition","onError"]),o.withCrudLog&&e(a)?(c(),w(e(te),{key:0,form:o.form,rowId:e(g),grid:o.grid},null,8,["form","rowId","grid"])):v("",!0)]),_:1},8,["open","title","width"])])}}};export{Me as default};
