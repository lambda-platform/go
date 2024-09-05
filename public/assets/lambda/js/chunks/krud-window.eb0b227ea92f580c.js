/*! For license information please see krud-window.eb0b227ea92f580c.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[6144],{39379:(t,r,e)=>{"use strict";e.d(r,{X:()=>o});var n=e(18678),i=e.n(n),o=function(t,r){var e=i().apply(t,r);return Array.isArray(e)?!(e.length>=1)||!e[0]:!e}},36807:(t,r,e)=>{"use strict";e.d(r,{A:()=>l});const n={props:["refresh","exportExcel","print","search","save","options","isExcel","isExcelUpload","excelUploadCustomUrl","excelUploadMethod","isPrint","isRefresh","isSave","isSearch","exportLoading"],data:function(){return{searchModel:null}},computed:{lang:function(){var t=this,r=["_save","re_call","_print","download_file","excelUpload"];return r.reduce((function(e,n,i){return e[n]=t.$t("crud."+r[i]),e}),{})}},methods:{searchGrid:function(t){t.preventDefault(),this.$props.search(this.searchModel)}}};const i=(0,e(14486).A)(n,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"crud-page-header-right-inside"},[r("Tooltip",{attrs:{content:t.lang._save}},[t.isSave?r("a",{staticClass:"btnLine",on:{click:t.$props.save}},[r("i",{staticClass:"ti-save"})]):t._e()]),t._v(" "),r("Tooltip",{attrs:{content:t.lang.re_call}},[t.isRefresh?r("a",{staticClass:"btnLine",on:{click:t.$props.refresh}},[r("i",{staticClass:"ti-reload"})]):t._e()]),t._v(" "),t.isPrint?r("Tooltip",{attrs:{content:t.lang._print}},[r("a",{staticClass:"btnLine",on:{click:t.$props.print}},[r("i",{staticClass:"ti-printer"})])]):t._e(),t._v(" "),t.isExcelUpload?r("Tooltip",{attrs:{content:t.lang.excelUpload}},[t.$props.excelUploadCustomUrl?r("a",{staticClass:"btnLine",attrs:{href:t.$props.excelUploadCustomUrl}},[r("i",{staticClass:"ti-layers"})]):r("a",{staticClass:"btnLine",on:{click:t.$props.excelUploadMethod}},[r("i",{staticClass:"ti-layers"})])]):t._e(),t._v(" "),t.isExcel?r("Tooltip",{attrs:{content:t.lang.download_file}},[t.$props.exportLoading?r("a",{staticClass:"btnLine",attrs:{href:"javascript:void(0)"}},[r("Spin",[r("Icon",{staticClass:"spin-icon-load",attrs:{type:"ios-loading",size:"18"}})],1)],1):r("a",{staticClass:"btnLine",on:{click:t.$props.exportExcel}},[r("i",{staticClass:"ti-download"})])]):t._e(),t._v(" "),t.isSearch?r("form",{on:{submit:t.searchGrid}},[r("div",{staticClass:"right-search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchModel,expression:"searchModel"}],staticClass:"right-search-input",attrs:{placeholder:t.$static_words?t.$static_words.search:"Хайх..."},domProps:{value:t.searchModel},on:{input:function(r){r.target.composing||(t.searchModel=r.target.value)}}}),t._v(" "),r("i",{staticClass:"ti-search"})])]):t._e()],1)}),[],!1,null,null,null).exports;var o=e(39379);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function a(){a=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function d(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{d({},"")}catch(t){d=function(t,r,e){return t[r]=e}}function p(t,r,e,n){var o=r&&r.prototype instanceof _?r:_,s=Object.create(o.prototype),a=new O(n||[]);return i(s,"_invoke",{value:$(t,e,a)}),s}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var f="suspendedStart",m="suspendedYield",y="executing",g="completed",v={};function _(){}function w(){}function x(){}var E={};d(E,c,(function(){return this}));var S=Object.getPrototypeOf,b=S&&S(S(j([])));b&&b!==e&&n.call(b,c)&&(E=b);var C=x.prototype=_.prototype=Object.create(E);function A(t){["next","throw","return"].forEach((function(r){d(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,r){function e(i,o,a,c){var l=h(t[i],t,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==s(d)&&n.call(d,"__await")?r.resolve(d.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,c)}))}c(l.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new r((function(r,i){e(t,n,r,i)}))}return o=o?o.then(i,i):i()}})}function $(r,e,n){var i=f;return function(o,s){if(i===y)throw Error("Generator is already running");if(i===g){if("throw"===o)throw s;return{value:t,done:!0}}for(n.method=o,n.arg=s;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=y;var l=h(r,e,n);if("normal"===l.type){if(i=n.done?g:m,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=g,n.method="throw",n.arg=l.arg)}}}function k(r,e){var n=e.method,i=r.iterator[n];if(i===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=h(i,r.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var s=o.arg;return s?s.done?(e[r.resultName]=s.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,v):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function M(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function j(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var i=-1,o=function e(){for(;++i<r.length;)if(n.call(r,i))return e.value=r[i],e.done=!1,e;return e.value=t,e.done=!0,e};return o.next=o}}throw new TypeError(s(r)+" is not iterable")}return w.prototype=x,i(C,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:w,configurable:!0}),w.displayName=d(x,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,d(t,u,"GeneratorFunction")),t.prototype=Object.create(C),t},r.awrap=function(t){return{__await:t}},A(L.prototype),d(L.prototype,l,(function(){return this})),r.AsyncIterator=L,r.async=function(t,e,n,i,o){void 0===o&&(o=Promise);var s=new L(p(t,e,n,i),o);return r.isGeneratorFunction(e)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},A(C),d(C,u,"Generator"),d(C,c,(function(){return this})),d(C,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=j,O.prototype={constructor:O,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function i(n,i){return a.type="throw",a.arg=r,e.next=n,i&&(e.method="next",e.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=n.call(s,"catchLoc"),l=n.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=r,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(s)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var i=n.arg;P(e)}return i}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:j(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),v}},r}function c(t,r,e,n,i,o,s){try{var a=t[o](s),c=a.value}catch(t){return void e(t)}a.done?r(c):Promise.resolve(c).then(n,i)}const l={props:["title","icon","grid","form","hideHeader","hasSelection","actions","dbClickAction","onRowSelect","rowCurrentChange","permissions","user_condition","custom_condition","hideInfo","view_url","mode","onPropertySuccess","onPropertyError","page_id","withoutHeader","withCrudLog","projects_id","exportSelectedRows","exportPath","exportLabel"],components:{krudtools:i},data:function(){return{closeByBtn:window.init.closeByBtn,gridSrc:"",formSrc:"",editMode:!1,searchModel:"",form_width:600,exportLoading:!1,isPrint:!1,isExcel:!1,isExcelUpload:!1,excelUploadSample:null,excelUploadCustomUrl:null,isRefresh:!0,isSave:!1,isSearch:!1,rowId:null,row:null,selectedData:[]}},computed:{hasVNavSlot:function(){return!!this.$slots["v-nav"]},hasNavSlot:function(){return!!this.$slots.nav}},methods:{view:function(t){this.rowId=t,this.editMode=!0,this.$refs.form.viewMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},edit:function(t,r){if((this.rowId=t,this.row=r,this.permissions)&&(""!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS&&!(0,o.X)(this.permissions.gridEditConditionJS,r)))return;this.editMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},editOnModal:function(t,r){var e,n=this;return(e=a().mark((function r(){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n.rowId=t,n.row=t,n.$modal.show("krud-modal");case 3:case"end":return r.stop()}}),r)})),function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function s(t){c(o,n,i,s,a,"next",t)}function a(t){c(o,n,i,s,a,"throw",t)}s(void 0)}))})()},fillModalForm:function(){if(this.permissions&&(""!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS&&!(0,o.X)(this.permissions.gridEditConditionJS,row)))return;this.editMode=!0,this.$refs.form.editModel(this.rowId),this.templateEdit&&this.templateEdit()},clone:function(t){this.$refs.form.cloneModel(t),this.templateEdit&&this.templateEdit()},quickEdit:function(t){console.log(t)},refresh:function(){this.searchModel=null,this.$refs.grid.refresh()},search:function(t){this.$refs.grid.searchData(t,1)},stopLoading:function(t){this.exportLoading=!1,t||this.$Message.error("Татах үед алдаа гарлаа!")},exportExcel:function(){this.exportLoading=!0,this.$refs.grid.exportExcel(this.stopLoading)},print:function(){this.$refs.grid.print()},excelUploadMethod:function(){this.$refs.grid.importExcel()},save:function(){this.$refs.grid.saveGridData()},onSuccess:function(t){void 0!==this.mode&&this.mode&&"refresh"==this.mode?this.$refs.grid.refresh():this.editMode?this.$refs.grid.update(t):this.$refs.grid.append(t),this.editMode=!1,this.templateOnSuccess&&this.templateOnSuccess(t),this.onPropertySuccess&&this.onPropertySuccess()},onSuccessWindow:function(t){var r=this;this.$router.push({path:this.$route.path,query:{window:"list"}}),setTimeout((function(){void 0!==r.mode&&r.mode&&"refresh"==r.mode?r.$refs.grid.refresh():r.editMode?r.$refs.grid.update(t):r.$refs.grid.append(t),r.editMode=!1,r.templateOnSuccess&&r.templateOnSuccess(t),r.onPropertySuccess&&r.onPropertySuccess()}),500)},onError:function(){this.templateOnError&&this.templateOnError(),this.onPropertyError&&this.onPropertyError()},onRowSelectedEvent:function(t,r){this.exportSelectedRows?this.selectedData=t:this.$props.onRowSelect&&this.$props.onRowSelect(t,r)},exportByPath:function(){var t=this;if(this.exportPath&&this.selectedData){var r=this.selectedData.map((function(r){return r[t.$refs.grid.identity]}));window.open(this.exportPath+r.join(","),"_blank").focus()}}}}},18678:function(t,r,e){var n,i;n=function(){"use strict";function t(t){for(var r=[],e=0,n=t.length;e<n;e++)-1===r.indexOf(t[e])&&r.push(t[e]);return r}Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var r={},e={"==":function(t,r){return t==r},"===":function(t,r){return t===r},"!=":function(t,r){return t!=r},"!==":function(t,r){return t!==r},">":function(t,r){return t>r},">=":function(t,r){return t>=r},"<":function(t,r,e){return void 0===e?t<r:t<r&&r<e},"<=":function(t,r,e){return void 0===e?t<=r:t<=r&&r<=e},"!!":function(t){return r.truthy(t)},"!":function(t){return!r.truthy(t)},"%":function(t,r){return t%r},log:function(t){return console.log(t),t},in:function(t,r){return!(!r||void 0===r.indexOf)&&-1!==r.indexOf(t)},cat:function(){return Array.prototype.join.call(arguments,"")},substr:function(t,r,e){if(e<0){var n=String(t).substr(r);return n.substr(0,n.length+e)}return String(t).substr(r,e)},"+":function(){return Array.prototype.reduce.call(arguments,(function(t,r){return parseFloat(t,10)+parseFloat(r,10)}),0)},"*":function(){return Array.prototype.reduce.call(arguments,(function(t,r){return parseFloat(t,10)*parseFloat(r,10)}))},"-":function(t,r){return void 0===r?-t:t-r},"/":function(t,r){return t/r},min:function(){return Math.min.apply(this,arguments)},max:function(){return Math.max.apply(this,arguments)},merge:function(){return Array.prototype.reduce.call(arguments,(function(t,r){return t.concat(r)}),[])},var:function(t,r){var e=void 0===r?null:r,n=this;if(void 0===t||""===t||null===t)return n;for(var i=String(t).split("."),o=0;o<i.length;o++){if(null==n)return e;if(void 0===(n=n[i[o]]))return e}return n},missing:function(){for(var t=[],e=Array.isArray(arguments[0])?arguments[0]:arguments,n=0;n<e.length;n++){var i=e[n],o=r.apply({var:i},this);null!==o&&""!==o||t.push(i)}return t},missing_some:function(t,e){var n=r.apply({missing:e},this);return e.length-n.length>=t?[]:n}};return r.is_logic=function(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)&&1===Object.keys(t).length},r.truthy=function(t){return!(Array.isArray(t)&&0===t.length||!t)},r.get_operator=function(t){return Object.keys(t)[0]},r.get_values=function(t){return t[r.get_operator(t)]},r.apply=function(t,n){if(Array.isArray(t))return t.map((function(t){return r.apply(t,n)}));if(!r.is_logic(t))return t;var i,o,s,a,c,l=r.get_operator(t),u=t[l];if(Array.isArray(u)||(u=[u]),"if"===l||"?:"==l){for(i=0;i<u.length-1;i+=2)if(r.truthy(r.apply(u[i],n)))return r.apply(u[i+1],n);return u.length===i+1?r.apply(u[i],n):null}if("and"===l){for(i=0;i<u.length;i+=1)if(o=r.apply(u[i],n),!r.truthy(o))return o;return o}if("or"===l){for(i=0;i<u.length;i+=1)if(o=r.apply(u[i],n),r.truthy(o))return o;return o}if("filter"===l)return a=r.apply(u[0],n),s=u[1],Array.isArray(a)?a.filter((function(t){return r.truthy(r.apply(s,t))})):[];if("map"===l)return a=r.apply(u[0],n),s=u[1],Array.isArray(a)?a.map((function(t){return r.apply(s,t)})):[];if("reduce"===l)return a=r.apply(u[0],n),s=u[1],c=void 0!==u[2]?r.apply(u[2],n):null,Array.isArray(a)?a.reduce((function(t,e){return r.apply(s,{current:e,accumulator:t})}),c):c;if("all"===l){if(a=r.apply(u[0],n),s=u[1],!Array.isArray(a)||!a.length)return!1;for(i=0;i<a.length;i+=1)if(!r.truthy(r.apply(s,a[i])))return!1;return!0}if("none"===l){if(a=r.apply(u[0],n),s=u[1],!Array.isArray(a)||!a.length)return!0;for(i=0;i<a.length;i+=1)if(r.truthy(r.apply(s,a[i])))return!1;return!0}if("some"===l){if(a=r.apply(u[0],n),s=u[1],!Array.isArray(a)||!a.length)return!1;for(i=0;i<a.length;i+=1)if(r.truthy(r.apply(s,a[i])))return!0;return!1}if(u=u.map((function(t){return r.apply(t,n)})),e.hasOwnProperty(l)&&"function"==typeof e[l])return e[l].apply(n,u);if(l.indexOf(".")>0){var d=String(l).split("."),p=e;for(i=0;i<d.length;i++){if(!p.hasOwnProperty(d[i]))throw new Error("Unrecognized operation "+l+" (failed at "+d.slice(0,i+1).join(".")+")");p=p[d[i]]}return p.apply(n,u)}throw new Error("Unrecognized operation "+l)},r.uses_data=function(e){var n=[];if(r.is_logic(e)){var i=r.get_operator(e),o=e[i];Array.isArray(o)||(o=[o]),"var"===i?n.push(o[0]):o.forEach((function(t){n.push.apply(n,r.uses_data(t))}))}return t(n)},r.add_operation=function(t,r){e[t]=r},r.rm_operation=function(t){delete e[t]},r.rule_like=function(t,e){if(e===t)return!0;if("@"===e)return!0;if("number"===e)return"number"==typeof t;if("string"===e)return"string"==typeof t;if("array"===e)return Array.isArray(t)&&!r.is_logic(t);if(r.is_logic(e)){if(r.is_logic(t)){var n=r.get_operator(e),i=r.get_operator(t);if("@"===n||n===i)return r.rule_like(r.get_values(t,!1),r.get_values(e,!1))}return!1}if(Array.isArray(e)){if(Array.isArray(t)){if(e.length!==t.length)return!1;for(var o=0;o<e.length;o+=1)if(!r.rule_like(t[o],e[o]))return!1;return!0}return!1}return!1},r},void 0===(i="function"==typeof n?n.call(r,e,r,t):n)||(t.exports=i)},31476:(t,r,e)=>{"use strict";e.d(r,{A:()=>i});const n={name:"crudLog",props:["form","grid","rowId"],data:function(){return{logs:[],reads:[],logColumns:[{title:"Бүртгэлийн төрөл",key:"action"},{title:"Хэрэглэгч",key:"user"},{title:"Огноо",key:"created_at"}],readColumns:[{title:"Хэрэглэгч",key:"user"},{title:"Огноо",key:"created_at"}]}},computed:{lang:function(){var t=this,r=["registration_history","Information_viewing_history"];return r.reduce((function(e,n,i){return e[n]=t.$t("crud."+r[i]),e}),{})}},methods:{getLog:function(){var t=this;this.logs=[],this.reads=[],axios.post("/lambda/puzzle/grid/data/crud_log?&paginate=5000&page=1&sort=id&order=desc",{schemaId:this.form,row_id:this.rowId}).then((function(r){r.data.data.forEach((function(r){"edit"!=r.action&&t.logs.push({action:"store"==r.action?"Бүртгэсэн":"Зассан",user:r.last_name.charAt(0)+"."+r.first_name,created_at:moment(r.created_at).format("YYYY-MM-DD HH:mm:ss")}),"edit"==r.action&&t.reads.push({user:r.last_name.charAt(0)+"."+r.first_name,created_at:moment(r.created_at).format("YYYY-MM-DD HH:mm:ss")})}))}))}},watch:{rowId:function(){this.getLog()}},mounted:function(){this.getLog()}};const i=(0,e(14486).A)(n,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"crud-log"},[r("div",{staticClass:"fieldset"},[r("legend",[t._v(t._s(t.lang.lang))]),t._v(" "),r("Table",{attrs:{columns:t.logColumns,data:t.logs,size:"small",height:t.logs.length>=3?200:100}})],1),t._v(" "),r("div",{staticClass:"fieldset"},[r("legend",[t._v(t._s(t.lang.Information_viewing_history))]),t._v(" "),r("Table",{attrs:{columns:t.readColumns,data:t.reads,size:"small",height:t.reads.length>=3?200:80}})],1)])}),[],!1,null,null,null).exports},51090:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>o});var n=e(31476);const i={mixins:[e(36807).A],data:function(){return{form_width:800,openSlidePanel:!1,exportLoading:!1}},components:{"crud-log":n.A},created:function(){console.log("I am window theme")},computed:{lang:function(){var t=this,r=["_add","Information_viewing_history"];return r.reduce((function(e,n,i){return e[n]=t.$t("crud."+r[i]),e}),{})}},methods:{templateEdit:function(){this.openSlidePanel=!0},templateOnSuccess:function(){this.openSlidePanel=!1},templateOnError:function(){},onReady:function(t){this.form_width=t.width},openForm:function(){this.editMode=!1,this.$router.push({path:this.$route.path,query:{window:"form"}})}}};const o=(0,e(14486).A)(i,(function(){var t=this,r=t._self._c;return r("section",{staticClass:"window-template"},[r("div",{staticClass:"crud-page"},[t.withoutHeader?r("portal",{attrs:{to:"header-left"}},[r("h3",[t._v(t._s(t.title))]),t._v(" "),!t.permissions||t.permissions.c?r("span",{staticClass:"divider"}):t._e(),t._v(" "),!t.permissions||t.permissions.c?r("Button",{attrs:{type:"success",shape:"circle",size:"small",icon:"md-add"},on:{click:t.openForm}},[t._v(t._s(t.lang._add))]):t._e()],1):t._e(),t._v(" "),t.withoutHeader?r("portal",{attrs:{to:"header-right"}},[r("krudtools",{attrs:{search:t.search,refresh:t.refresh,exportExcel:t.exportExcel,importExcel:t.importExcel,exportLoading:t.exportLoading,print:t.print,save:t.save,isPrint:t.isPrint,isExcel:t.isExcel,isExcelUpload:t.isExcelUpload,isRefresh:t.isRefresh,isSave:t.isSave,isSearch:t.isSearch}})],1):t._e(),t._v(" "),t.withoutHeader?t._e():r("div",["form"!=t.$route.query.window?r("div",{staticClass:"crud-page-header"},[t.hasNavSlot?r("div",{staticClass:"crud-page-header-left"},[t._t("nav"),t._v(" "),!t.permissions||t.permissions.c?r("span",{staticClass:"divider"}):t._e(),t._v(" "),!t.permissions||t.permissions.c?r("Button",{attrs:{type:"success",shape:"circle",size:"small",icon:"md-add"},on:{click:t.openForm}},[t._v("\n                        "+t._s(t.lang._add)+"}\n                    ")]):t._e()],2):r("div",{class:"crud-page-header-left ".concat(t.hasNavSlot?"":"no-nav")},[null!=t.$props.title?r("h3",[t._v(t._s(t.$props.title.replace("-"," ")))]):t._e(),t._v(" "),!t.permissions||t.permissions.c?r("span",{staticClass:"divider"}):t._e(),t._v(" "),!t.permissions||t.permissions.c?r("Button",{attrs:{type:"success",shape:"circle",size:"small",icon:"md-add"},on:{click:t.openForm}},[t._v("\n                        "+t._s(t.lang._add)+"\n                    ")]):t._e()],1),t._v(" "),r("div",{staticClass:"crud-page-header-right"},[r("div",{staticClass:"tooloptions"},[t._t("tooloptions")],2),t._v(" "),r("krudtools",{attrs:{search:t.search,refresh:t.refresh,exportExcel:t.exportExcel,exportLoading:t.exportLoading,print:t.print,save:t.save,isPrint:t.isPrint,isExcel:t.isExcel,isRefresh:t.isRefresh,isSave:t.isSave}}),t._v(" "),t._t("right")],2)]):t._e()]),t._v(" "),"form"===t.$route.query.window?r("dataform",{ref:"form",attrs:{schemaID:t.form,editMode:t.editMode,onSuccess:t.onSuccessWindow,onReady:t.onReady,do_render:t.openSlidePanel,permissions:t.permissions,page_id:t.page_id,template:"window",user_condition:t.user_condition?t.user_condition.formCondition:null,onError:t.onError}}):r("div",{staticClass:"crud-page-body"},[t.hasVNavSlot?r("div",{staticClass:"v-nav"},[t._t("v-nav")],2):t._e(),t._v(" "),r("div",{staticClass:"dg-flex"},[!t.permissions||t.permissions.r?r("datagrid",{ref:"grid",attrs:{schemaID:t.grid,paginate:50,fnClone:t.clone,fnEdit:t.edit,fnQuickEdit:t.quickEdit,fnView:t.view,actions:t.$props.actions,dblClick:t.$props.dbClickAction,onRowSelect:t.$props.onRowSelect,permissions:t.permissions,page_id:t.page_id,custom_condition:t.$props.custom_condition?t.$props.custom_condition:null,user_condition:t.user_condition?t.user_condition.gridCondition:null}}):t._e()],1)])],1)])}),[],!1,null,null,null).exports}}]);