(self.webpackChunk=self.webpackChunk||[]).push([[1022],{95939:(t,r,e)=>{"use strict";e.d(r,{X:()=>n});var i=e(96297),s=e.n(i);const n=(t,r)=>{let e=s().apply(t,r);return Array.isArray(e)?!(e.length>=1)||!e[0]:!e}},18060:(t,r,e)=>{"use strict";e.d(r,{A:()=>o});const i={props:["refresh","exportExcel","print","search","save","options","isExcel","isExcelUpload","excelUploadCustomUrl","excelUploadMethod","isPrint","isRefresh","isSave","isSearch","exportLoading"],data:()=>({searchModel:null}),computed:{lang(){const t=["_save","re_call","_print","download_file","excelUpload"];return t.reduce(((r,e,i)=>(r[e]=this.$t("crud."+t[i]),r)),{})}},methods:{searchGrid(t){t.preventDefault(),this.$props.search(this.searchModel)}}};const s=(0,e(14486).A)(i,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"crud-page-header-right-inside"},[r("Tooltip",{attrs:{content:t.lang._save}},[t.isSave?r("a",{staticClass:"btnLine",on:{click:t.$props.save}},[r("i",{staticClass:"ti-save"})]):t._e()]),t._v(" "),r("Tooltip",{attrs:{content:t.lang.re_call}},[t.isRefresh?r("a",{staticClass:"btnLine",on:{click:t.$props.refresh}},[r("i",{staticClass:"ti-reload"})]):t._e()]),t._v(" "),t.isPrint?r("Tooltip",{attrs:{content:t.lang._print}},[r("a",{staticClass:"btnLine",on:{click:t.$props.print}},[r("i",{staticClass:"ti-printer"})])]):t._e(),t._v(" "),t.isExcelUpload?r("Tooltip",{attrs:{content:t.lang.excelUpload}},[t.$props.excelUploadCustomUrl?r("a",{staticClass:"btnLine",attrs:{href:t.$props.excelUploadCustomUrl}},[r("i",{staticClass:"ti-layers"})]):r("a",{staticClass:"btnLine",on:{click:t.$props.excelUploadMethod}},[r("i",{staticClass:"ti-layers"})])]):t._e(),t._v(" "),t.isExcel?r("Tooltip",{attrs:{content:t.lang.download_file}},[t.$props.exportLoading?r("a",{staticClass:"btnLine",attrs:{href:"javascript:void(0)"}},[r("Spin",[r("Icon",{staticClass:"spin-icon-load",attrs:{type:"ios-loading",size:"18"}})],1)],1):r("a",{staticClass:"btnLine",on:{click:t.$props.exportExcel}},[r("i",{staticClass:"ti-download"})])]):t._e(),t._v(" "),t.isSearch?r("form",{on:{submit:t.searchGrid}},[r("div",{staticClass:"right-search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchModel,expression:"searchModel"}],staticClass:"right-search-input",attrs:{placeholder:t.$static_words?t.$static_words.search:"Хайх..."},domProps:{value:t.searchModel},on:{input:function(r){r.target.composing||(t.searchModel=r.target.value)}}}),t._v(" "),r("i",{staticClass:"ti-search"})])]):t._e()],1)}),[],!1,null,null,null).exports;var n=e(95939);const o={props:["title","icon","grid","form","hideHeader","hasSelection","actions","dbClickAction","onRowSelect","rowCurrentChange","permissions","user_condition","custom_condition","hideInfo","view_url","mode","onPropertySuccess","onPropertyError","page_id","withoutHeader","withCrudLog","projects_id","exportSelectedRows","exportPath","exportLabel"],components:{krudtools:s},data:()=>({closeByBtn:window.init.closeByBtn,gridSrc:"",formSrc:"",editMode:!1,searchModel:"",form_width:600,exportLoading:!1,isPrint:!1,isExcel:!1,isExcelUpload:!1,excelUploadSample:null,excelUploadCustomUrl:null,isRefresh:!0,isSave:!1,isSearch:!1,rowId:null,row:null,selectedData:[]}),computed:{hasVNavSlot(){return!!this.$slots["v-nav"]},hasNavSlot(){return!!this.$slots.nav}},methods:{view(t){this.rowId=t,this.editMode=!0,this.$refs.form.viewMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},edit(t,r){if(this.rowId=t,this.row=r,this.permissions&&""!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS){if(!(0,n.X)(this.permissions.gridEditConditionJS,r))return}this.editMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},async editOnModal(t,r){this.rowId=t,this.row=t,this.$modal.show("krud-modal")},fillModalForm(){if(this.permissions&&""!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS){if(!(0,n.X)(this.permissions.gridEditConditionJS,row))return}this.editMode=!0,this.$refs.form.editModel(this.rowId),this.templateEdit&&this.templateEdit()},clone(t){this.$refs.form.cloneModel(t),this.templateEdit&&this.templateEdit()},quickEdit(t){console.log(t)},refresh(){this.searchModel=null,this.$refs.grid.refresh()},search(t){this.$refs.grid.searchData(t,1)},stopLoading(t){this.exportLoading=!1,t||this.$Message.error("Татах үед алдаа гарлаа!")},exportExcel(){this.exportLoading=!0,this.$refs.grid.exportExcel(this.stopLoading)},print(){this.$refs.grid.print()},excelUploadMethod(){this.$refs.grid.importExcel()},save(){this.$refs.grid.saveGridData()},onSuccess(t){void 0!==this.mode&&this.mode&&"refresh"==this.mode?this.$refs.grid.refresh():this.editMode?this.$refs.grid.update(t):this.$refs.grid.append(t),this.editMode=!1,this.templateOnSuccess&&this.templateOnSuccess(t),this.onPropertySuccess&&this.onPropertySuccess()},onSuccessWindow(t){this.$router.push({path:this.$route.path,query:{window:"list"}}),setTimeout((()=>{void 0!==this.mode&&this.mode&&"refresh"==this.mode?this.$refs.grid.refresh():this.editMode?this.$refs.grid.update(t):this.$refs.grid.append(t),this.editMode=!1,this.templateOnSuccess&&this.templateOnSuccess(t),this.onPropertySuccess&&this.onPropertySuccess()}),500)},onError(){this.templateOnError&&this.templateOnError(),this.onPropertyError&&this.onPropertyError()},onRowSelectedEvent(t,r){this.exportSelectedRows?this.selectedData=t:this.$props.onRowSelect&&this.$props.onRowSelect(t,r)},exportByPath(){if(this.exportPath&&this.selectedData){let t=this.selectedData.map((t=>t[this.$refs.grid.identity]));window.open(this.exportPath+t.join(","),"_blank").focus()}}}}},96297:function(t,r,e){var i,s;i=function(){"use strict";function t(t){for(var r=[],e=0,i=t.length;e<i;e++)-1===r.indexOf(t[e])&&r.push(t[e]);return r}Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var r={},e={"==":function(t,r){return t==r},"===":function(t,r){return t===r},"!=":function(t,r){return t!=r},"!==":function(t,r){return t!==r},">":function(t,r){return t>r},">=":function(t,r){return t>=r},"<":function(t,r,e){return void 0===e?t<r:t<r&&r<e},"<=":function(t,r,e){return void 0===e?t<=r:t<=r&&r<=e},"!!":function(t){return r.truthy(t)},"!":function(t){return!r.truthy(t)},"%":function(t,r){return t%r},log:function(t){return console.log(t),t},in:function(t,r){return!(!r||void 0===r.indexOf)&&-1!==r.indexOf(t)},cat:function(){return Array.prototype.join.call(arguments,"")},substr:function(t,r,e){if(e<0){var i=String(t).substr(r);return i.substr(0,i.length+e)}return String(t).substr(r,e)},"+":function(){return Array.prototype.reduce.call(arguments,(function(t,r){return parseFloat(t,10)+parseFloat(r,10)}),0)},"*":function(){return Array.prototype.reduce.call(arguments,(function(t,r){return parseFloat(t,10)*parseFloat(r,10)}))},"-":function(t,r){return void 0===r?-t:t-r},"/":function(t,r){return t/r},min:function(){return Math.min.apply(this,arguments)},max:function(){return Math.max.apply(this,arguments)},merge:function(){return Array.prototype.reduce.call(arguments,(function(t,r){return t.concat(r)}),[])},var:function(t,r){var e=void 0===r?null:r,i=this;if(void 0===t||""===t||null===t)return i;for(var s=String(t).split("."),n=0;n<s.length;n++){if(null==i)return e;if(void 0===(i=i[s[n]]))return e}return i},missing:function(){for(var t=[],e=Array.isArray(arguments[0])?arguments[0]:arguments,i=0;i<e.length;i++){var s=e[i],n=r.apply({var:s},this);null!==n&&""!==n||t.push(s)}return t},missing_some:function(t,e){var i=r.apply({missing:e},this);return e.length-i.length>=t?[]:i}};return r.is_logic=function(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)&&1===Object.keys(t).length},r.truthy=function(t){return!(Array.isArray(t)&&0===t.length||!t)},r.get_operator=function(t){return Object.keys(t)[0]},r.get_values=function(t){return t[r.get_operator(t)]},r.apply=function(t,i){if(Array.isArray(t))return t.map((function(t){return r.apply(t,i)}));if(!r.is_logic(t))return t;var s,n,o,a,l,c=r.get_operator(t),u=t[c];if(Array.isArray(u)||(u=[u]),"if"===c||"?:"==c){for(s=0;s<u.length-1;s+=2)if(r.truthy(r.apply(u[s],i)))return r.apply(u[s+1],i);return u.length===s+1?r.apply(u[s],i):null}if("and"===c){for(s=0;s<u.length;s+=1)if(n=r.apply(u[s],i),!r.truthy(n))return n;return n}if("or"===c){for(s=0;s<u.length;s+=1)if(n=r.apply(u[s],i),r.truthy(n))return n;return n}if("filter"===c)return a=r.apply(u[0],i),o=u[1],Array.isArray(a)?a.filter((function(t){return r.truthy(r.apply(o,t))})):[];if("map"===c)return a=r.apply(u[0],i),o=u[1],Array.isArray(a)?a.map((function(t){return r.apply(o,t)})):[];if("reduce"===c)return a=r.apply(u[0],i),o=u[1],l=void 0!==u[2]?r.apply(u[2],i):null,Array.isArray(a)?a.reduce((function(t,e){return r.apply(o,{current:e,accumulator:t})}),l):l;if("all"===c){if(a=r.apply(u[0],i),o=u[1],!Array.isArray(a)||!a.length)return!1;for(s=0;s<a.length;s+=1)if(!r.truthy(r.apply(o,a[s])))return!1;return!0}if("none"===c){if(a=r.apply(u[0],i),o=u[1],!Array.isArray(a)||!a.length)return!0;for(s=0;s<a.length;s+=1)if(r.truthy(r.apply(o,a[s])))return!1;return!0}if("some"===c){if(a=r.apply(u[0],i),o=u[1],!Array.isArray(a)||!a.length)return!1;for(s=0;s<a.length;s+=1)if(r.truthy(r.apply(o,a[s])))return!0;return!1}if(u=u.map((function(t){return r.apply(t,i)})),e.hasOwnProperty(c)&&"function"==typeof e[c])return e[c].apply(i,u);if(c.indexOf(".")>0){var p=String(c).split("."),d=e;for(s=0;s<p.length;s++){if(!d.hasOwnProperty(p[s]))throw new Error("Unrecognized operation "+c+" (failed at "+p.slice(0,s+1).join(".")+")");d=d[p[s]]}return d.apply(i,u)}throw new Error("Unrecognized operation "+c)},r.uses_data=function(e){var i=[];if(r.is_logic(e)){var s=r.get_operator(e),n=e[s];Array.isArray(n)||(n=[n]),"var"===s?i.push(n[0]):n.forEach((function(t){i.push.apply(i,r.uses_data(t))}))}return t(i)},r.add_operation=function(t,r){e[t]=r},r.rm_operation=function(t){delete e[t]},r.rule_like=function(t,e){if(e===t)return!0;if("@"===e)return!0;if("number"===e)return"number"==typeof t;if("string"===e)return"string"==typeof t;if("array"===e)return Array.isArray(t)&&!r.is_logic(t);if(r.is_logic(e)){if(r.is_logic(t)){var i=r.get_operator(e),s=r.get_operator(t);if("@"===i||i===s)return r.rule_like(r.get_values(t,!1),r.get_values(e,!1))}return!1}if(Array.isArray(e)){if(Array.isArray(t)){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n+=1)if(!r.rule_like(t[n],e[n]))return!1;return!0}return!1}return!1},r},void 0===(s="function"==typeof i?i.call(r,e,r,t):i)||(t.exports=s)},60024:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>s});const i={mixins:[e(18060).A]};const s=(0,e(14486).A)(i,(function(){var t=this,r=t._self._c;return r("section",{staticClass:"offcanvas-template"},[r("div",{staticClass:"crud-page"},[r("div",{staticClass:"crud-page-header"},[r("div",{staticClass:"crud-page-header-left"},[r("h3",[t._v(t._s(t.$props.title.replace("-"," ")))]),t._v(" "),t._t("tooloptions")],2),t._v(" "),r("div",{staticClass:"crud-page-header-right"},[r("krudtools",{attrs:{search:t.search,refresh:t.refresh,exportExcel:t.exportExcel}})],1)]),t._v(" "),r("div",{staticClass:"crud-page-body"},[r("datagrid",{ref:"grid",attrs:{schemaID:t.grid,paginate:50,fnEdit:t.edit,fnQuickEdit:t.quickEdit,fnView:t.view,actions:t.$props.actions,dblClick:t.$props.dbClickAction,rowCurrentChange:t.$props.rowCurrentChange}})],1)])])}),[],!1,null,null,null).exports}}]);