import{a as $,r as f,o,e as n,f as l,w as a,h as s,t as c,F as k,q as b,p as _,i as m,c as x,Q as E,R as M,N as C,ct as S}from"./entry.26562f7f.js";const I={name:"common",props:["parent","addAction","title","hideAction","permissions"],computed:{lang(){const e=["_add","Information_viewing_history","excelUpload"];return e.reduce((t,i,u)=>(t[i]=this.$t("crud."+e[u]),t),{})}}},U={class:"flex"},L={class:"page-title"},D={class:"float-left pt-3"},P={class:"text-gray-700 dark:text-gray-200 text-base m-0"},A={class:"text-gray-400 text-xs m-0"},Y={key:0},F={key:0,class:"ml-3"},N=s("span",{class:"divider"},null,-1),B={class:"anticon align-top ant-btn-svg-icon",style:{"vertical-align":"top"}},H={class:"page-title mb-3"},R={class:"text-gray-700 dark:text-gray-200 text-base m-0"},V={class:"text-gray-400 text-xs m-0"},G={key:0},j={class:"fixed bottom-14 right-2"},z={class:"settings-btn ant-btn-svg-icon"};function O(e,t,i,u,p,d){const h=f("inline-svg"),g=f("a-button"),w=f("portal-target"),r=f("portal");return o(),n(k,null,[l(r,{to:"header-left"},{default:a(()=>[s("div",U,[s("div",L,[s("div",D,[s("h1",P,c(i.title),1),s("h2",A,[(o(!0),n(k,null,b(i.parent,(v,y)=>(o(),n("span",{key:v.index},[y>=1?(o(),n("span",Y," / ")):_("",!0),m(c(v.title),1)]))),128))])])]),!i.hideAction&&i.permissions.c?(o(),n("div",F,[N,l(g,{type:"primary",onClick:i.addAction,shape:"round"},{icon:a(()=>[s("span",B,[l(h,{src:"/assets/icons/duotune/general/gen041.svg"})])]),default:a(()=>[m(" "+c(d.lang._add),1)]),_:1},8,["onClick"])])):_("",!0),l(w,{name:"grid-left"})])]),_:1}),l(r,{to:"mobile-page-title"},{default:a(()=>[s("div",H,[s("div",null,[s("h1",R,c(i.title),1),s("h2",V,[(o(!0),n(k,null,b(i.parent,(v,y)=>(o(),n("span",{key:v.index},[y>=1?(o(),n("span",G," / ")):_("",!0),m(c(v.title),1)]))),128))])])])]),_:1}),!i.hideAction&&i.permissions.c?(o(),x(r,{key:0,to:"header-mobile"},{default:a(()=>[s("div",j,[l(g,{type:"primary",onClick:i.addAction,shape:"circle",size:"large"},{icon:a(()=>[s("span",z,[l(h,{src:"/assets/icons/duotune/general/gen041.svg"})])]),_:1},8,["onClick"])])]),_:1})):_("",!0)],64)}const me=$(I,[["render",O]]),q={props:["refresh","exportExcel","print","search","save","options","isExcel","isExcelUpload","excelUploadCustomUrl","excelUploadMethod","isPrint","isRefresh","isSave","isSearch","exportLoading"],data(){return{searchModel:null}},computed:{lang(){const e=["_save","re_call","_print","download_file","excelUpload"];return e.reduce((t,i,u)=>(t[i]=this.$t("crud."+e[u]),t),{})}},methods:{searchGrid(e){e.preventDefault(),this.$props.search(this.searchModel)}}},K={class:"crud-page-header-right-inside action"},T=s("i",{class:"ti-save"},null,-1),W=[T],Q=s("i",{class:"ti-reload"},null,-1),J=[Q],X={class:"svg-icon"},Z=["href"],ee={class:"svg-icon"},te={class:"svg-icon"},se={key:0,class:"btnLine",href:"javascript:void(0)"},ie={class:"svg-icon"},oe={class:"right-search"},re=["placeholder"],ne=s("i",{class:"ti-search"},null,-1);function ae(e,t,i,u,p,d){const h=f("a-tooltip"),g=f("inline-svg"),w=f("a-spin");return o(),n("div",K,[l(h,null,{title:a(()=>[m(c(d.lang._save),1)]),default:a(()=>[i.isSave?(o(),n("a",{key:0,onClick:t[0]||(t[0]=(...r)=>e.$props.save&&e.$props.save(...r)),class:"btnLine"},W)):_("",!0)]),_:1}),l(h,null,{title:a(()=>[m(c(d.lang.re_call),1)]),default:a(()=>[i.isRefresh?(o(),n("a",{key:0,onClick:t[1]||(t[1]=(...r)=>e.$props.refresh&&e.$props.refresh(...r)),class:"btnLine"},J)):_("",!0)]),_:1}),i.isPrint?(o(),x(h,{key:0},{title:a(()=>[m(c(d.lang._print),1)]),default:a(()=>[s("span",{class:"btn btn-icon",onClick:t[2]||(t[2]=(...r)=>e.$props.print&&e.$props.print(...r))},[s("span",X,[l(g,{src:"/assets/icons/duotone/Devices/Printer.svg"})])])]),_:1})):_("",!0),i.isExcelUpload?(o(),x(h,{key:1},{title:a(()=>[m(c(d.lang.excelUpload),1)]),default:a(()=>[e.$props.excelUploadCustomUrl?(o(),n("span",{key:0,class:"btn btn-icon",href:e.$props.excelUploadCustomUrl},[s("span",ee,[l(g,{src:"/assets/icons/duotone/Files/Upload.svg"})])],8,Z)):(o(),n("span",{key:1,class:"btn btn-icon",onClick:t[3]||(t[3]=(...r)=>e.$props.excelUploadMethod&&e.$props.excelUploadMethod(...r))},[s("span",te,[l(g,{src:"/assets/icons/duotone/Files/Upload.svg"})])]))]),_:1})):_("",!0),i.isExcel?(o(),x(h,{key:2},{title:a(()=>[m(c(d.lang.download_file),1)]),default:a(()=>[e.$props.exportLoading?(o(),n("a",se,[l(w)])):(o(),n("span",{key:1,class:"btn btn-icon",onClick:t[4]||(t[4]=(...r)=>e.$props.exportExcel&&e.$props.exportExcel(...r))},[s("span",ie,[l(g,{src:"/assets/icons/duotone/Files/Download.svg"})])]))]),_:1})):_("",!0),i.isSearch?(o(),n("form",{key:3,onSubmit:t[6]||(t[6]=(...r)=>d.searchGrid&&d.searchGrid(...r))},[s("div",oe,[E(s("input",{"onUpdate:modelValue":t[5]||(t[5]=r=>p.searchModel=r),placeholder:e.$t("dataForm.search"),class:"right-search-input"},null,8,re),[[M,p.searchModel]]),ne])],32)):_("",!0)])}const fe=$(q,[["render",ae]]),le={name:"crudLog",props:["form","grid","rowId"],data(){return{logs:[],reads:[],logColumns:[{title:"Бүртгэлийн төрөл",dataIndex:"action",key:"action"},{title:"Хэрэглэгч",dataIndex:"user",key:"user"},{title:"Огноо",dataIndex:"created_at",key:"created_at"}],readColumns:[{title:"Хэрэглэгч",dataIndex:"user",key:"user"},{title:"Огноо",dataIndex:"created_at",key:"created_at"}]}},computed:{lang(){const e=["registration_history","Information_viewing_history"];return e.reduce((t,i,u)=>(t[i]=this.$t("crud."+e[u]),t),{})}},methods:{getLog(){this.logs=[],this.reads=[],C.post("/crud_log/history",{schemaId:this.form,rowId:this.rowId}).then(e=>{e.data.forEach(t=>{t.action!=="view"&&this.logs.push({action:t.action=="store"?"Бүртгэсэн":"Зассан",user:t.last_name.charAt(0)+"."+t.first_name,created_at:S(t.created_at).format("YYYY-MM-DD HH:mm:ss")}),t.action==="view"&&this.reads.push({user:t.last_name.charAt(0)+"."+t.first_name,created_at:S(t.created_at).format("YYYY-MM-DD HH:mm:ss")})})})}},watch:{rowId(){this.getLog()}},mounted(){this.getLog()}},de={class:"crud-log"},ce={class:"fieldset"},he={class:"fieldset"};function ue(e,t,i,u,p,d){const h=f("a-table");return o(),n("div",de,[s("div",ce,[s("legend",null,c(d.lang.registration_history),1),l(h,{columns:p.logColumns,dataSource:p.logs,size:"small",height:p.logs.length>=3?200:100},null,8,["columns","dataSource","height"])]),s("div",he,[s("legend",null,c(d.lang.Information_viewing_history),1),l(h,{columns:p.readColumns,dataSource:p.reads,size:"small",height:p.reads.length>=3?200:80},null,8,["columns","dataSource","height"])])])}const pe=$(le,[["render",ue]]),ge={props:["title","icon","main_tab_title","grid","form","projects_id","hideHeader","hasSelection","actions","dbClickAction","onRowSelect","rowCurrentChange","permissions","user_condition","custom_condition","view_url","mode","onPropertySuccess","onPropertyError","page_id","withoutHeader","withCrudLog","base_url","parent"],components:{crudLog:pe},data(){return{closeByBtn:!0,gridSrc:"",formSrc:"",editMode:!1,searchModel:"",form_width:600,exportLoading:!1,isPrint:!1,isExcel:!1,isRefresh:!1,isSave:!1,rowId:null,visibleDataForm:!1,isExcelUpload:!1,excelUploadCustomUrl:null}},computed:{hasVNavSlot(){return!!this.$slots["v-nav"]},hasNavSlot(){return!!this.$slots.nav},hasLeftSlot(){return!!this.$slots.left},url(){if(this.projects_id!==null&&this.projects_id!=""&&this.projects_id!=null&&window.init.microserviceSettings&&window.init.microserviceSettings.length>=1){let e=window.init.microserviceSettings.findIndex(t=>t.project_id==this.projects_id);if(e>=0)return window.microservice_dev?window.init.microserviceSettings[e].dev_url:window.init.microserviceSettings[e].production_url}return this.base_url?this.base_url:""},lang(){const e=["_add","Information_viewing_history","excelUpload"];return e.reduce((t,i,u)=>(t[i]=this.$t("crud."+e[u]),t),{})}},methods:{view(e){this.rowId=e,this.editMode=!0,this.$refs.form.viewMode=!0,this.$refs.form.editModel(e),this.templateEdit&&this.templateEdit()},edit(e){this.rowId=e,this.editMode=!0,this.$refs.form.editModel(e),this.templateEdit&&this.templateEdit(e)},clone(e){this.$refs.form.cloneModel(e),this.templateEdit&&this.templateEdit(e)},quickEdit(e){console.log(e)},refresh(){this.searchModel=null,this.$refs.grid.refresh()},search(e){this.$refs.grid.searchData(e,1)},stopLoading(e){this.exportLoading=!1,e||this.$Message.error("Татах үед алдаа гарлаа!")},exportExcel(){this.exportLoading=!0,this.$refs.grid.exportExcel(this.stopLoading)},print(){this.$refs.grid.print()},excelUploadMethod(){this.$refs.grid.importExcel()},save(){this.$refs.grid.saveGridData()},onReady(e){window.innerWidth-100>=parseInt(e.width)?this.form_width=e.width:this.form_width=window.innerWidth,this.editMode&&this.rowId!==null&&this.rowId!==void 0&&this.$refs.form.editModel(this.rowId)},onSuccess(e){this.$refs.grid&&(typeof this.mode<"u"&&this.mode&&this.mode==="refresh"?this.$refs.grid.refresh():this.editMode?this.$refs.grid.update(e):this.$refs.grid.append(e)),this.editMode=!1,this.templateOnSuccess&&this.templateOnSuccess(e),this.onPropertySuccess&&this.onPropertySuccess()},onError(){this.templateOnError&&this.templateOnError(),this.onPropertyError&&this.onPropertyError()}}};export{fe as K,me as c,ge as m};
