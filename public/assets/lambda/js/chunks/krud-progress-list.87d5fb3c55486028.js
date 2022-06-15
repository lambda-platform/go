(self.webpackChunk=self.webpackChunk||[]).push([[4843],{69105:(t,r,e)=>{"use strict";e.d(r,{H:()=>o});var i=e(40962),n=e.n(i),o=function(t,r){var e=n().apply(t,r);return Array.isArray(e)?!(e.length>=1)||!e[0]:!e}},1950:(t,r,e)=>{"use strict";e.d(r,{Z:()=>s});const i={props:["refresh","exportExcel","print","search","save","options","isExcel","isExcelUpload","excelUploadCustomUrl","excelUploadMethod","isPrint","isRefresh","isSave","isSearch","exportLoading"],data:function(){return{searchModel:null}},computed:{lang:function(){var t=this,r=["_save","re_call","_print","download_file","excelUpload"];return r.reduce((function(e,i,n){return e[i]=t.$t("crud."+r[n]),e}),{})}},methods:{searchGrid:function(t){t.preventDefault(),this.$props.search(this.searchModel)}}};const n=(0,e(51900).Z)(i,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"crud-page-header-right-inside"},[e("Tooltip",{attrs:{content:t.lang._save}},[t.isSave?e("a",{staticClass:"btnLine",on:{click:t.$props.save}},[e("i",{staticClass:"ti-save"})]):t._e()]),t._v(" "),e("Tooltip",{attrs:{content:t.lang.re_call}},[t.isRefresh?e("a",{staticClass:"btnLine",on:{click:t.$props.refresh}},[e("i",{staticClass:"ti-reload"})]):t._e()]),t._v(" "),t.isPrint?e("Tooltip",{attrs:{content:t.lang._print}},[e("a",{staticClass:"btnLine",on:{click:t.$props.print}},[e("i",{staticClass:"ti-printer"})])]):t._e(),t._v(" "),t.isExcelUpload?e("Tooltip",{attrs:{content:t.lang.excelUpload}},[t.$props.excelUploadCustomUrl?e("a",{staticClass:"btnLine",attrs:{href:t.$props.excelUploadCustomUrl}},[e("i",{staticClass:"ti-layers"})]):e("a",{staticClass:"btnLine",on:{click:t.$props.excelUploadMethod}},[e("i",{staticClass:"ti-layers"})])]):t._e(),t._v(" "),t.isExcel?e("Tooltip",{attrs:{content:t.lang.download_file}},[t.$props.exportLoading?e("a",{staticClass:"btnLine",attrs:{href:"javascript:void(0)"}},[e("Spin",[e("Icon",{staticClass:"spin-icon-load",attrs:{type:"ios-loading",size:"18"}})],1)],1):e("a",{staticClass:"btnLine",on:{click:t.$props.exportExcel}},[e("i",{staticClass:"ti-download"})])]):t._e(),t._v(" "),t.isSearch?e("form",{on:{submit:t.searchGrid}},[e("div",{staticClass:"right-search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchModel,expression:"searchModel"}],staticClass:"right-search-input",attrs:{placeholder:t.$static_words?t.$static_words.search:"Хайх..."},domProps:{value:t.searchModel},on:{input:function(r){r.target.composing||(t.searchModel=r.target.value)}}}),t._v(" "),e("i",{staticClass:"ti-search"})])]):t._e()],1)}),[],!1,null,null,null).exports;var o=e(69105);const s={props:["title","icon","grid","form","hideHeader","hasSelection","actions","dbClickAction","onRowSelect","rowCurrentChange","permissions","user_condition","custom_condition","view_url","mode","onPropertySuccess","onPropertyError","page_id","withoutHeader","withCrudLog","projects_id","exportSelectedRows","exportPath","exportLabel"],components:{krudtools:n},data:function(){return{closeByBtn:window.init.closeByBtn,gridSrc:"",formSrc:"",editMode:!1,searchModel:"",form_width:600,exportLoading:!1,isPrint:!1,isExcel:!1,isExcelUpload:!1,excelUploadCustomUrl:null,isRefresh:!1,isSave:!1,rowId:null,selectedData:[]}},computed:{hasVNavSlot:function(){return!!this.$slots["v-nav"]},hasNavSlot:function(){return!!this.$slots.nav},hasLeftSlot:function(){return!!this.$slots.left},url:function(){var t=this;if(null!==this.projects_id&&""!=this.projects_id&&null!=this.projects_id&&window.init.microserviceSettings&&window.init.microserviceSettings.length>=1){var r=window.init.microserviceSettings.findIndex((function(r){return r.project_id==t.projects_id}));if(r>=0)return window.lambda.microservice_dev?window.init.microserviceSettings[r].dev_url:window.init.microserviceSettings[r].production_url}return""}},methods:{view:function(t){this.rowId=t,this.editMode=!0,this.$refs.form.viewMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},edit:function(t,r){if((this.rowId=t,this.permissions)&&(""!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS&&!(0,o.H)(this.permissions.gridEditConditionJS,r)))return;this.editMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},clone:function(t){this.$refs.form.cloneModel(t),this.templateEdit&&this.templateEdit()},quickEdit:function(t){console.log(t)},refresh:function(){this.searchModel=null,this.$refs.grid.refresh()},search:function(t){this.$refs.grid.searchData(t,1)},stopLoading:function(t){this.exportLoading=!1,t||this.$Message.error("Татах үед алдаа гарлаа!")},exportExcel:function(){this.exportLoading=!0,this.$refs.grid.exportExcel(this.stopLoading)},print:function(){this.$refs.grid.print()},excelUploadMethod:function(){this.$refs.grid.importExcel()},save:function(){this.$refs.grid.saveGridData()},onSuccess:function(t){void 0!==this.mode&&this.mode&&"refresh"==this.mode?this.$refs.grid.refresh():this.editMode?this.$refs.grid.update(t):this.$refs.grid.append(t),this.editMode=!1,this.templateOnSuccess&&this.templateOnSuccess(t),this.onPropertySuccess&&this.onPropertySuccess()},onError:function(){this.templateOnError&&this.templateOnError(),this.onPropertyError&&this.onPropertyError()},onRowSelectedEvent:function(t,r){this.exportSelectedRows?this.selectedData=t:this.$props.onRowSelect&&this.$props.onRowSelect(t,r)},exportByPath:function(){var t=this;if(this.exportPath&&this.selectedData){var r=this.selectedData.map((function(r){return r[t.$refs.grid.identity]}));window.open(this.exportPath+r.join(","),"_blank").focus()}}}}},40962:function(t,r,e){var i,n;i=function(){"use strict";function t(t){for(var r=[],e=0,i=t.length;e<i;e++)-1===r.indexOf(t[e])&&r.push(t[e]);return r}Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var r={},e={"==":function(t,r){return t==r},"===":function(t,r){return t===r},"!=":function(t,r){return t!=r},"!==":function(t,r){return t!==r},">":function(t,r){return t>r},">=":function(t,r){return t>=r},"<":function(t,r,e){return void 0===e?t<r:t<r&&r<e},"<=":function(t,r,e){return void 0===e?t<=r:t<=r&&r<=e},"!!":function(t){return r.truthy(t)},"!":function(t){return!r.truthy(t)},"%":function(t,r){return t%r},log:function(t){return console.log(t),t},in:function(t,r){return!(!r||void 0===r.indexOf)&&-1!==r.indexOf(t)},cat:function(){return Array.prototype.join.call(arguments,"")},substr:function(t,r,e){if(e<0){var i=String(t).substr(r);return i.substr(0,i.length+e)}return String(t).substr(r,e)},"+":function(){return Array.prototype.reduce.call(arguments,(function(t,r){return parseFloat(t,10)+parseFloat(r,10)}),0)},"*":function(){return Array.prototype.reduce.call(arguments,(function(t,r){return parseFloat(t,10)*parseFloat(r,10)}))},"-":function(t,r){return void 0===r?-t:t-r},"/":function(t,r){return t/r},min:function(){return Math.min.apply(this,arguments)},max:function(){return Math.max.apply(this,arguments)},merge:function(){return Array.prototype.reduce.call(arguments,(function(t,r){return t.concat(r)}),[])},var:function(t,r){var e=void 0===r?null:r,i=this;if(void 0===t||""===t||null===t)return i;for(var n=String(t).split("."),o=0;o<n.length;o++){if(null==i)return e;if(void 0===(i=i[n[o]]))return e}return i},missing:function(){for(var t=[],e=Array.isArray(arguments[0])?arguments[0]:arguments,i=0;i<e.length;i++){var n=e[i],o=r.apply({var:n},this);null!==o&&""!==o||t.push(n)}return t},missing_some:function(t,e){var i=r.apply({missing:e},this);return e.length-i.length>=t?[]:i}};return r.is_logic=function(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)&&1===Object.keys(t).length},r.truthy=function(t){return!(Array.isArray(t)&&0===t.length||!t)},r.get_operator=function(t){return Object.keys(t)[0]},r.get_values=function(t){return t[r.get_operator(t)]},r.apply=function(t,i){if(Array.isArray(t))return t.map((function(t){return r.apply(t,i)}));if(!r.is_logic(t))return t;var n,o,s,a,l,c=r.get_operator(t),u=t[c];if(Array.isArray(u)||(u=[u]),"if"===c||"?:"==c){for(n=0;n<u.length-1;n+=2)if(r.truthy(r.apply(u[n],i)))return r.apply(u[n+1],i);return u.length===n+1?r.apply(u[n],i):null}if("and"===c){for(n=0;n<u.length;n+=1)if(o=r.apply(u[n],i),!r.truthy(o))return o;return o}if("or"===c){for(n=0;n<u.length;n+=1)if(o=r.apply(u[n],i),r.truthy(o))return o;return o}if("filter"===c)return a=r.apply(u[0],i),s=u[1],Array.isArray(a)?a.filter((function(t){return r.truthy(r.apply(s,t))})):[];if("map"===c)return a=r.apply(u[0],i),s=u[1],Array.isArray(a)?a.map((function(t){return r.apply(s,t)})):[];if("reduce"===c)return a=r.apply(u[0],i),s=u[1],l=void 0!==u[2]?u[2]:null,Array.isArray(a)?a.reduce((function(t,e){return r.apply(s,{current:e,accumulator:t})}),l):l;if("all"===c){if(a=r.apply(u[0],i),s=u[1],!Array.isArray(a)||!a.length)return!1;for(n=0;n<a.length;n+=1)if(!r.truthy(r.apply(s,a[n])))return!1;return!0}if("none"===c){if(a=r.apply(u[0],i),s=u[1],!Array.isArray(a)||!a.length)return!0;for(n=0;n<a.length;n+=1)if(r.truthy(r.apply(s,a[n])))return!1;return!0}if("some"===c){if(a=r.apply(u[0],i),s=u[1],!Array.isArray(a)||!a.length)return!1;for(n=0;n<a.length;n+=1)if(r.truthy(r.apply(s,a[n])))return!0;return!1}if(u=u.map((function(t){return r.apply(t,i)})),e.hasOwnProperty(c)&&"function"==typeof e[c])return e[c].apply(i,u);if(c.indexOf(".")>0){var p=String(c).split("."),d=e;for(n=0;n<p.length;n++){if(!d.hasOwnProperty(p[n]))throw new Error("Unrecognized operation "+c+" (failed at "+p.slice(0,n+1).join(".")+")");d=d[p[n]]}return d.apply(i,u)}throw new Error("Unrecognized operation "+c)},r.uses_data=function(e){var i=[];if(r.is_logic(e)){var n=r.get_operator(e),o=e[n];Array.isArray(o)||(o=[o]),"var"===n?i.push(o[0]):o.forEach((function(t){i.push.apply(i,r.uses_data(t))}))}return t(i)},r.add_operation=function(t,r){e[t]=r},r.rm_operation=function(t){delete e[t]},r.rule_like=function(t,e){if(e===t)return!0;if("@"===e)return!0;if("number"===e)return"number"==typeof t;if("string"===e)return"string"==typeof t;if("array"===e)return Array.isArray(t)&&!r.is_logic(t);if(r.is_logic(e)){if(r.is_logic(t)){var i=r.get_operator(e),n=r.get_operator(t);if("@"===i||i===n)return r.rule_like(r.get_values(t,!1),r.get_values(e,!1))}return!1}if(Array.isArray(e)){if(Array.isArray(t)){if(e.length!==t.length)return!1;for(var o=0;o<e.length;o+=1)if(!r.rule_like(t[o],e[o]))return!1;return!0}return!1}return!1},r},void 0===(n="function"==typeof i?i.call(r,e,r,t):i)||(t.exports=n)},22706:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>n});const i={mixins:[e(1950).Z]};const n=(0,e(51900).Z)(i,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("section",{staticClass:"offcanvas-template"},[e("div",{staticClass:"crud-page"},[e("div",{staticClass:"crud-page-header"},[e("div",{staticClass:"crud-page-header-left"},[e("h3",[t._v(t._s(t.$props.title.replace("-"," ")))]),t._v(" "),t._t("tooloptions")],2),t._v(" "),e("div",{staticClass:"crud-page-header-right"},[e("krudtools",{attrs:{search:t.search,refresh:t.refresh,exportExcel:t.exportExcel}})],1)]),t._v(" "),e("div",{staticClass:"crud-page-body"},[e("datagrid",{ref:"grid",attrs:{schemaID:t.grid,paginate:50,fnEdit:t.edit,fnQuickEdit:t.quickEdit,fnView:t.view,actions:t.$props.actions,dblClick:t.$props.dbClickAction,rowCurrentChange:t.$props.rowCurrentChange}})],1)])])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=krud-progress-list.87d5fb3c55486028.js.map