import{a as E,cs as F,ep as x,r as g,o as l,e as n,i as k,t as u,f as h,w as f,h as d,p as m,F as y,q as D,c as v,cZ as N,ai as G}from"./entry.26562f7f.js";import{s as T,G as R}from"./subFormMix.9fdf3b99.js";const A={props:["form","model","editMode","relations","formula","url","viewMode"],mixins:[T],components:{"grid-form":R,"a-modal":F},mounted(){this.equationRenderer(),this.form.schema.forEach(t=>{t.disabled=!0})},computed:{lang(){const t=["pleaseCompleteFirstLine"];return t.reduce((o,e,r)=>(o[e]=this.$t("dataForm."+t[r]),o),{})},subStyle(){if(this.form.min_height)return{minHeight:this.form.min_height+"px",background:"#f3f4f5"}},Lang(){const t=["add"];return t.reduce((o,e,r)=>(o[e]=this.$t("dataForm."+t[r]),o),{})}},watch:{listData:{handler:function(t,o){this.hasEq&&this.equationData.map(e=>{if(e.hasEquation){e.data=-1;let r=0;switch(e.equation){case"SUM":{e.data=0,t.map(s=>{e.data+=Number(isNaN(parseInt(s.model[e.model],10))?0:s.model[e.model])});break}case"COUNT":{e.data=0,t.map(s=>{e.data+=1});break}case"MIN":{t.map(s=>{e.data==-1?e.data=s.model[e.model]:e.data=Math.min(e.data,s.model[e.model])});break}case"MAX":{e.data=0,t.map(s=>{e.data=Math.max(e.data,s.model[e.model])});break}case"AVG":{e.data=0,t.map(s=>{r++,e.data+=Number(s.model[e.model])}),e.data=Number(e.data/r);break}}}})},deep:!0}},data(){return{listData:[],equationData:[],currentSortDir:"asc",hasEq:!1,modal_show:!1,filled:!1,editIndex:-1}},methods:{showAddModal(){this.modal_show=!0},closeModal(){this.modal_show=!1,this.editIndex=-1},formReady(t,o){let e=o.findIndex(r=>r.model===this.form.parent);e>0&&(o[e].hidden=!0),this.editIndex>=0&&this.$nextTick(()=>{this.$refs.form.editModel(this.listData[this.editIndex].model[this.form.identity],{...this.listData[this.editIndex].model})})},onError(){},onSuccess(t){if(this.editIndex>=0)Object.keys(t).forEach(o=>{this.listData[this.editIndex].form.identity!=o&&(o=="created_at"||o=="updated_at"||(this.listData[this.editIndex].model[o]=t[o]))});else{let o=_.cloneDeep(this.form),e={};Object.keys(t).forEach(i=>{let c=o.schema.findIndex(p=>p.model=="key");c>=0&&(o.identity==o.schema[c].model||o.schema[c].formType==null||o.timestamp&&(o.schema[c].model=="created_at"||o.schema[c].model=="updated_at"))||(e[i]=t[i])});let r={form:o,model:e},s=this.model.form[this.model.component];s==null&&(s=[]),s.push(e),this.model.form[this.model.component]=s,this.listData.push(r)}this.closeModal()},element:x,checkAddable(){return new Promise((t,o)=>{let e=this.listData[this.listData.length-1];if(e){let r=!1,s=e.model;for(let i in s)typeof s[i]!=null&&s[i]!=null&&s[i]!=""&&s[i]!=!1&&(r=!0);r?t(!0):(alert(this.lang.pleaseCompleteFirstLine),o(!1))}else t(!0)})},addSubForm(){let t=_.cloneDeep(this.form),o={};t.schema.forEach(r=>{t.identity==r.model||r.formType==null||t.timestamp&&(r.model=="created_at"||r.model=="updated_at")||(o[r.model]=r.default)});let e={form:t,model:o};this.model.form[this.model.component]==null&&(this.model.form[this.model.component]=[]),this.model.form[this.model.component].push(o),this.listData.push(e)},add(){this.form.addFromGrid&&this.form.sourceGridID?this.showAddSourceModal():this.addByFrom()},addByFrom(){this.closeSourceModal(),this.editIndex=-1,this.showAddModal()},fillData(t){this.$nextTick(()=>{let o=[];t.forEach(e=>{o.push({form:_.cloneDeep(this.form),model:e})}),this.listData=o})},equationRenderer(){this.equationData=[],this.form.schema.map(t=>{t.label!=""&&!t.hidden&&(t.hasEquation&&(this.hasEq=!0),this.equationData.push({hasEquation:t.hasEquation,equation:t.equations,prefix:t.prefix,model:t.model,preStaticWord:t.preStaticWord,data:0}))})},edit(t){this.model.form[this.form.model][t],this.editIndex=t,this.showAddModal()},remove(t){this.model.form[this.form.model].splice(t,1),this.listData.splice(t,1)},reset(){this.model.form[this.form.model]=[],this.listData=[]},sort(t){let o=1;this.currentSortDir=this.currentSortDir==="asc"?"desc":"asc",this.currentSort=this.currentSortDir==="desc"?-1:1,this.currentSort=t.model,this.listData.sort((e,r)=>(this.currentSortDir==="desc"&&(o=-1),e.model[this.currentSort]<r.model[this.currentSort]?-1*o:e.model[this.currentSort]>r.model[this.currentSort]?1*o:0))}}},B={key:0,class:"subform-header"},L={class:"svg-icon"},V={key:1,class:"sub-form-grid",border:"1"},j={key:0,class:"row-number"},z=["onClick"],U={class:"th-title"},W=d("i",{class:"ti-exchange-vertical"},null,-1),H=d("th",{class:"action"},"...",-1),O=["onClick"],P={class:"svg-icon"},X=["onClick"],Z={class:"svg-icon"},J={key:0},Q={key:0},Y={key:1},q={key:2},K=d("td",null,null,-1),$={class:"svg-icon"},ee={class:"form-modal"},te={class:"form-body"},oe={class:"form-modal source-grid"},se={class:"form-tool"},ae={class:"form-tool-actions"},re=d("i",{class:"ti-close"},null,-1),de=[re],ie={key:0,class:"form-body"},le={key:0,class:"source-grid-description"},ne=["innerHTML"],me={class:"add-from-pre-source"};function ce(t,o,e,r,s,i){const c=g("inline-svg"),p=g("a-button"),w=g("grid-form"),M=g("dataform"),S=g("a-modal"),I=g("datagrid");return l(),n("div",{class:"subform-grid sub-modal-form",style:G(i.subStyle)},[!e.form.min_height&&!e.form.disableCreate&&!e.viewMode?(l(),n("div",B,[k(u(e.form.name)+" ",1),h(p,{shape:"circle",type:"success",size:"small",onClick:i.add,class:"sub-form-add-btn"},{icon:f(()=>[d("span",L,[h(c,{src:"/assets/icons/duotune/general/gen041.svg"})])]),_:1},8,["onClick"])])):m("",!0),e.form.min_height||this.listData.length>=1?(l(),n("table",V,[d("thead",null,[d("tr",null,[e.form.showRowNumber?(l(),n("th",j,"ДД")):m("",!0),(l(!0),n(y,null,D(e.form.schema.filter(a=>a.label!==""&&!a.hidden),a=>(l(),n("th",{onClick:b=>i.sort(a),key:a.index},[d("div",U,[k(u(a.label)+" ",1),W])],8,z))),128)),H])]),d("tbody",null,[(l(!0),n(y,null,D(s.listData,(a,b)=>(l(),v(w,{key:b,f:a.form,model:a.model,editMode:e.editMode,relations:e.relations,formula:e.formula,schema:e.form.schema},N({action:f(()=>[e.form.disableEdit?m("",!0):(l(),n("a",{key:0,href:"javascript:void(0);",class:"btn btn-icon sub-edit",onClick:C=>i.edit(b)},[d("span",P,[h(c,{src:"/assets/icons/duotone/Design/Edit.svg"})])],8,O)),e.form.disableDelete?m("",!0):(l(),n("a",{key:1,href:"javascript:void(0);",class:"btn btn-icon",onClick:C=>i.remove(b)},[d("span",Z,[h(c,{src:"/assets/icons/duotone/General/Trash.svg"})])],8,X))]),_:2},[e.form.showRowNumber?{name:"rowNumber",fn:f(()=>[d("span",null,u(b+1),1)]),key:"0"}:void 0]),1032,["f","model","editMode","relations","formula","schema"]))),128))]),s.hasEq?(l(),n("tfoot",J,[d("tr",null,[(l(!0),n(y,null,D(s.equationData,(a,b)=>(l(),n("td",{key:b},[a.preStaticWord!=null&&a.preStaticWord!=""?(l(),n("span",Q,u(a.preStaticWord),1)):m("",!0),a.hasEquation?(l(),n("span",Y,u(a.data.toLocaleString()),1)):m("",!0),a.prefix!=null&&a.prefix!=""?(l(),n("span",q,u(a.prefix),1)):m("",!0)]))),128)),K])])):m("",!0)])):m("",!0),e.form.min_height?(l(),n("a",{key:2,class:"sub-grid-add",href:"javascript:void(0)",onClick:o[0]||(o[0]=(...a)=>i.add&&i.add(...a))},[d("span",$,[h(c,{src:"/assets/icons/duotune/general/gen041.svg"})]),k(" "+u(i.lang.save),1)])):m("",!0),h(S,{"min-width":200,"min-height":100,draggable:!0,"footer-hide":!0,title:e.form.name,width:"85%",height:"85%",open:s.modal_show,"onUpdate:open":o[1]||(o[1]=a=>s.modal_show=a)},{footer:f(()=>[]),default:f(()=>[d("section",ee,[d("div",te,[s.modal_show?(l(),v(M,{key:0,ref:"form",schemaID:e.form.formId,do_render:s.modal_show,editMode:s.editIndex>=0,isSubForm:!0,onSuccess:i.onSuccess,url:e.url,onReady:i.formReady,onError:i.onError},null,8,["schemaID","do_render","editMode","onSuccess","url","onReady","onError"])):m("",!0)])])]),_:1},8,["title","open"]),h(S,{name:`grid-modal-${e.form.sourceGridID}`,open:t.modal_grid_show,"onUpdate:open":o[3]||(o[3]=a=>t.modal_grid_show=a),class:"form-modal","min-width":200,"min-height":100,"pivot-y":.5,adaptive:!0,reset:!0,draggable:!0,resizable:!0,width:"85%",height:"50%"},{footer:f(()=>[]),default:f(()=>[d("section",oe,[d("div",se,[d("h4",null,u(e.form.sourceGridModalTitle),1),d("div",ae,[d("a",{href:"javascript:void(0)",onClick:o[2]||(o[2]=(...a)=>t.closeSourceModal&&t.closeSourceModal(...a))},de)])]),t.modal_grid_show?(l(),n("div",ie,[e.form.sourceGridTitle&&e.form.sourceGridDescription?(l(),n("div",le,[d("h3",null,u(e.form.sourceGridTitle),1),d("p",{innerHTML:e.form.sourceGridDescription},null,8,ne)])):m("",!0),h(I,{schemaID:e.form.sourceGridID,url:t.sourceGridUrl(),onRowSelect:t.onRowSelect,user_condition:t.user_condition,paginate:50,hasSelection:!0,permissions:{c:!1,r:!0,u:!1,d:!1}},null,8,["schemaID","url","onRowSelect","user_condition"]),d("div",me,[h(p,{shape:"circle",type:"primary",size:"small",onClick:i.addByFrom,disabled:t.preSource.length>=1,icon:"md-add",class:"sub-form-add-btn"},{default:f(()=>[k("Шинээр бүртгэх")]),_:1},8,["onClick","disabled"]),h(p,{shape:"circle",type:"success",size:"small",onClick:t.addFromPreSource,disabled:t.preSource.length==0,icon:"md-add",class:"sub-form-add-btn"},{default:f(()=>[k("Сонгох")]),_:1},8,["onClick","disabled"])])])):m("",!0)])]),_:1},8,["name","open","pivot-y"])],4)}const fe=E(A,[["render",ce]]);export{fe as default};
