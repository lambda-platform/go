(self.webpackChunk=self.webpackChunk||[]).push([[2059],{95939:(t,e,s)=>{"use strict";s.d(e,{X:()=>o});var i=s(96297),r=s.n(i);const o=(t,e)=>{let s=r().apply(t,e);return Array.isArray(s)?!(s.length>=1)||!s[0]:!s}},18060:(t,e,s)=>{"use strict";s.d(e,{A:()=>n});const i={props:["refresh","exportExcel","print","search","save","options","isExcel","isExcelUpload","excelUploadCustomUrl","excelUploadMethod","isPrint","isRefresh","isSave","isSearch","exportLoading"],data:()=>({searchModel:null}),computed:{lang(){const t=["_save","re_call","_print","download_file","excelUpload"];return t.reduce(((e,s,i)=>(e[s]=this.$t("crud."+t[i]),e)),{})}},methods:{searchGrid(t){t.preventDefault(),this.$props.search(this.searchModel)}}};const r=(0,s(14486).A)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"crud-page-header-right-inside"},[e("Tooltip",{attrs:{content:t.lang._save}},[t.isSave?e("a",{staticClass:"btnLine",on:{click:t.$props.save}},[e("i",{staticClass:"ti-save"})]):t._e()]),t._v(" "),e("Tooltip",{attrs:{content:t.lang.re_call}},[t.isRefresh?e("a",{staticClass:"btnLine",on:{click:t.$props.refresh}},[e("i",{staticClass:"ti-reload"})]):t._e()]),t._v(" "),t.isPrint?e("Tooltip",{attrs:{content:t.lang._print}},[e("a",{staticClass:"btnLine",on:{click:t.$props.print}},[e("i",{staticClass:"ti-printer"})])]):t._e(),t._v(" "),t.isExcelUpload?e("Tooltip",{attrs:{content:t.lang.excelUpload}},[t.$props.excelUploadCustomUrl?e("a",{staticClass:"btnLine",attrs:{href:t.$props.excelUploadCustomUrl}},[e("i",{staticClass:"ti-layers"})]):e("a",{staticClass:"btnLine",on:{click:t.$props.excelUploadMethod}},[e("i",{staticClass:"ti-layers"})])]):t._e(),t._v(" "),t.isExcel?e("Tooltip",{attrs:{content:t.lang.download_file}},[t.$props.exportLoading?e("a",{staticClass:"btnLine",attrs:{href:"javascript:void(0)"}},[e("Spin",[e("Icon",{staticClass:"spin-icon-load",attrs:{type:"ios-loading",size:"18"}})],1)],1):e("a",{staticClass:"btnLine",on:{click:t.$props.exportExcel}},[e("i",{staticClass:"ti-download"})])]):t._e(),t._v(" "),t.isSearch?e("form",{on:{submit:t.searchGrid}},[e("div",{staticClass:"right-search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchModel,expression:"searchModel"}],staticClass:"right-search-input",attrs:{placeholder:t.$static_words?t.$static_words.search:"Хайх..."},domProps:{value:t.searchModel},on:{input:function(e){e.target.composing||(t.searchModel=e.target.value)}}}),t._v(" "),e("i",{staticClass:"ti-search"})])]):t._e()],1)}),[],!1,null,null,null).exports;var o=s(95939);const n={props:["title","icon","grid","form","hideHeader","hasSelection","actions","dbClickAction","onRowSelect","rowCurrentChange","permissions","user_condition","custom_condition","hideInfo","view_url","mode","onPropertySuccess","onPropertyError","page_id","withoutHeader","withCrudLog","projects_id","exportSelectedRows","exportPath","exportLabel"],components:{krudtools:r},data:()=>({closeByBtn:window.init.closeByBtn,gridSrc:"",formSrc:"",editMode:!1,searchModel:"",form_width:600,exportLoading:!1,isPrint:!1,isExcel:!1,isExcelUpload:!1,excelUploadSample:null,excelUploadCustomUrl:null,isRefresh:!0,isSave:!1,isSearch:!1,rowId:null,row:null,selectedData:[]}),computed:{hasVNavSlot(){return!!this.$slots["v-nav"]},hasNavSlot(){return!!this.$slots.nav}},methods:{view(t){this.rowId=t,this.editMode=!0,this.$refs.form.viewMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},edit(t,e){if(this.rowId=t,this.row=e,this.permissions&&""!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS){if(!(0,o.X)(this.permissions.gridEditConditionJS,e))return}this.editMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},async editOnModal(t,e){this.rowId=t,this.row=t,this.$modal.show("krud-modal")},fillModalForm(){if(this.permissions&&""!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS){if(!(0,o.X)(this.permissions.gridEditConditionJS,row))return}this.editMode=!0,this.$refs.form.editModel(this.rowId),this.templateEdit&&this.templateEdit()},clone(t){this.$refs.form.cloneModel(t),this.templateEdit&&this.templateEdit()},quickEdit(t){console.log(t)},refresh(){this.searchModel=null,this.$refs.grid.refresh()},search(t){this.$refs.grid.searchData(t,1)},stopLoading(t){this.exportLoading=!1,t||this.$Message.error("Татах үед алдаа гарлаа!")},exportExcel(){this.exportLoading=!0,this.$refs.grid.exportExcel(this.stopLoading)},print(){this.$refs.grid.print()},excelUploadMethod(){this.$refs.grid.importExcel()},save(){this.$refs.grid.saveGridData()},onSuccess(t){void 0!==this.mode&&this.mode&&"refresh"==this.mode?this.$refs.grid.refresh():this.editMode?this.$refs.grid.update(t):this.$refs.grid.append(t),this.editMode=!1,this.templateOnSuccess&&this.templateOnSuccess(t),this.onPropertySuccess&&this.onPropertySuccess()},onSuccessWindow(t){this.$router.push({path:this.$route.path,query:{window:"list"}}),setTimeout((()=>{void 0!==this.mode&&this.mode&&"refresh"==this.mode?this.$refs.grid.refresh():this.editMode?this.$refs.grid.update(t):this.$refs.grid.append(t),this.editMode=!1,this.templateOnSuccess&&this.templateOnSuccess(t),this.onPropertySuccess&&this.onPropertySuccess()}),500)},onError(){this.templateOnError&&this.templateOnError(),this.onPropertyError&&this.onPropertyError()},onRowSelectedEvent(t,e){this.exportSelectedRows?this.selectedData=t:this.$props.onRowSelect&&this.$props.onRowSelect(t,e)},exportByPath(){if(this.exportPath&&this.selectedData){let t=this.selectedData.map((t=>t[this.$refs.grid.identity]));window.open(this.exportPath+t.join(","),"_blank").focus()}}}}},5770:(t,e,s)=>{"use strict";s.d(e,{A:()=>o});var i=s(76314),r=s.n(i)()((function(t){return t[1]}));r.push([t.id,".blackout[data-v-ddfb249e]{background-color:rgba(0,0,0,.3);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:10}.dock[data-v-ddfb249e]{box-shadow:-2px 3px 3px rgba(0,0,0,.2);position:absolute;right:0;top:0;z-index:3000}.dock[data-v-ddfb249e],section[data-v-ddfb249e]{height:100%;overflow:hidden}section[data-v-ddfb249e]{box-sizing:border-box;display:inline-block;position:relative}.panel>div[data-v-ddfb249e]{height:100%;overflow:auto}.panel.default[data-v-ddfb249e]{background-color:#fff;position:relative}.action-close[data-v-ddfb249e]{cursor:pointer;font-size:24px;position:absolute;right:12px;top:6px;z-index:10}.action-extra.default[data-v-ddfb249e]{bottom:1rem;cursor:pointer;position:absolute;right:1rem}.vsp-br[data-v-ddfb249e]{border-right:2px solid rgba(0,0,0,.2)}.vsp-bl[data-v-ddfb249e]{border-left:2px solid rgba(0,0,0,.1)}.slide-out-enter-active[data-v-ddfb249e],.slide-out-leave-active[data-v-ddfb249e]{transition:transform .4s cubic-bezier(.215,.61,.355,1)}.slide-out-enter[data-v-ddfb249e],.slide-out-leave-to[data-v-ddfb249e]{transform:translateX(100%)}.fade-enter-active[data-v-ddfb249e],.fade-leave-active[data-v-ddfb249e]{transition:opacity .4s ease-in}.fade-enter[data-v-ddfb249e],.fade-leave-to[data-v-ddfb249e]{opacity:0}.bg-transparent[data-v-ddfb249e]{background-color:transparent!important}",""]);const o=r},76314:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var s=t(e);return e[2]?"@media ".concat(e[2]," {").concat(s,"}"):s})).join("")},e.i=function(t,s,i){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var n=this[o][0];null!=n&&(r[n]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);i&&r[l[0]]||(s&&(l[2]?l[2]="".concat(s," and ").concat(l[2]):l[2]=s),e.push(l))}},e}},96297:function(t,e,s){var i,r;i=function(){"use strict";function t(t){for(var e=[],s=0,i=t.length;s<i;s++)-1===e.indexOf(t[s])&&e.push(t[s]);return e}Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var e={},s={"==":function(t,e){return t==e},"===":function(t,e){return t===e},"!=":function(t,e){return t!=e},"!==":function(t,e){return t!==e},">":function(t,e){return t>e},">=":function(t,e){return t>=e},"<":function(t,e,s){return void 0===s?t<e:t<e&&e<s},"<=":function(t,e,s){return void 0===s?t<=e:t<=e&&e<=s},"!!":function(t){return e.truthy(t)},"!":function(t){return!e.truthy(t)},"%":function(t,e){return t%e},log:function(t){return console.log(t),t},in:function(t,e){return!(!e||void 0===e.indexOf)&&-1!==e.indexOf(t)},cat:function(){return Array.prototype.join.call(arguments,"")},substr:function(t,e,s){if(s<0){var i=String(t).substr(e);return i.substr(0,i.length+s)}return String(t).substr(e,s)},"+":function(){return Array.prototype.reduce.call(arguments,(function(t,e){return parseFloat(t,10)+parseFloat(e,10)}),0)},"*":function(){return Array.prototype.reduce.call(arguments,(function(t,e){return parseFloat(t,10)*parseFloat(e,10)}))},"-":function(t,e){return void 0===e?-t:t-e},"/":function(t,e){return t/e},min:function(){return Math.min.apply(this,arguments)},max:function(){return Math.max.apply(this,arguments)},merge:function(){return Array.prototype.reduce.call(arguments,(function(t,e){return t.concat(e)}),[])},var:function(t,e){var s=void 0===e?null:e,i=this;if(void 0===t||""===t||null===t)return i;for(var r=String(t).split("."),o=0;o<r.length;o++){if(null==i)return s;if(void 0===(i=i[r[o]]))return s}return i},missing:function(){for(var t=[],s=Array.isArray(arguments[0])?arguments[0]:arguments,i=0;i<s.length;i++){var r=s[i],o=e.apply({var:r},this);null!==o&&""!==o||t.push(r)}return t},missing_some:function(t,s){var i=e.apply({missing:s},this);return s.length-i.length>=t?[]:i}};return e.is_logic=function(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)&&1===Object.keys(t).length},e.truthy=function(t){return!(Array.isArray(t)&&0===t.length||!t)},e.get_operator=function(t){return Object.keys(t)[0]},e.get_values=function(t){return t[e.get_operator(t)]},e.apply=function(t,i){if(Array.isArray(t))return t.map((function(t){return e.apply(t,i)}));if(!e.is_logic(t))return t;var r,o,n,a,l,d=e.get_operator(t),c=t[d];if(Array.isArray(c)||(c=[c]),"if"===d||"?:"==d){for(r=0;r<c.length-1;r+=2)if(e.truthy(e.apply(c[r],i)))return e.apply(c[r+1],i);return c.length===r+1?e.apply(c[r],i):null}if("and"===d){for(r=0;r<c.length;r+=1)if(o=e.apply(c[r],i),!e.truthy(o))return o;return o}if("or"===d){for(r=0;r<c.length;r+=1)if(o=e.apply(c[r],i),e.truthy(o))return o;return o}if("filter"===d)return a=e.apply(c[0],i),n=c[1],Array.isArray(a)?a.filter((function(t){return e.truthy(e.apply(n,t))})):[];if("map"===d)return a=e.apply(c[0],i),n=c[1],Array.isArray(a)?a.map((function(t){return e.apply(n,t)})):[];if("reduce"===d)return a=e.apply(c[0],i),n=c[1],l=void 0!==c[2]?e.apply(c[2],i):null,Array.isArray(a)?a.reduce((function(t,s){return e.apply(n,{current:s,accumulator:t})}),l):l;if("all"===d){if(a=e.apply(c[0],i),n=c[1],!Array.isArray(a)||!a.length)return!1;for(r=0;r<a.length;r+=1)if(!e.truthy(e.apply(n,a[r])))return!1;return!0}if("none"===d){if(a=e.apply(c[0],i),n=c[1],!Array.isArray(a)||!a.length)return!0;for(r=0;r<a.length;r+=1)if(e.truthy(e.apply(n,a[r])))return!1;return!0}if("some"===d){if(a=e.apply(c[0],i),n=c[1],!Array.isArray(a)||!a.length)return!1;for(r=0;r<a.length;r+=1)if(e.truthy(e.apply(n,a[r])))return!0;return!1}if(c=c.map((function(t){return e.apply(t,i)})),s.hasOwnProperty(d)&&"function"==typeof s[d])return s[d].apply(i,c);if(d.indexOf(".")>0){var u=String(d).split("."),h=s;for(r=0;r<u.length;r++){if(!h.hasOwnProperty(u[r]))throw new Error("Unrecognized operation "+d+" (failed at "+u.slice(0,r+1).join(".")+")");h=h[u[r]]}return h.apply(i,c)}throw new Error("Unrecognized operation "+d)},e.uses_data=function(s){var i=[];if(e.is_logic(s)){var r=e.get_operator(s),o=s[r];Array.isArray(o)||(o=[o]),"var"===r?i.push(o[0]):o.forEach((function(t){i.push.apply(i,e.uses_data(t))}))}return t(i)},e.add_operation=function(t,e){s[t]=e},e.rm_operation=function(t){delete s[t]},e.rule_like=function(t,s){if(s===t)return!0;if("@"===s)return!0;if("number"===s)return"number"==typeof t;if("string"===s)return"string"==typeof t;if("array"===s)return Array.isArray(t)&&!e.is_logic(t);if(e.is_logic(s)){if(e.is_logic(t)){var i=e.get_operator(s),r=e.get_operator(t);if("@"===i||i===r)return e.rule_like(e.get_values(t,!1),e.get_values(s,!1))}return!1}if(Array.isArray(s)){if(Array.isArray(t)){if(s.length!==t.length)return!1;for(var o=0;o<s.length;o+=1)if(!e.rule_like(t[o],s[o]))return!1;return!0}return!1}return!1},e},void 0===(r="function"==typeof i?i.call(e,s,e,t):i)||(t.exports=r)},85072:(t,e,s)=>{"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var t={};return function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(t){s=null}t[e]=s}return t[e]}}(),n=[];function a(t){for(var e=-1,s=0;s<n.length;s++)if(n[s].identifier===t){e=s;break}return e}function l(t,e){for(var s={},i=[],r=0;r<t.length;r++){var o=t[r],l=e.base?o[0]+e.base:o[0],d=s[l]||0,c="".concat(l," ").concat(d);s[l]=d+1;var u=a(c),h={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(n[u].references++,n[u].updater(h)):n.push({identifier:c,updater:m(h,e),references:1}),i.push(c)}return i}function d(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var r=s.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var n=o(t.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}return e}var c,u=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function h(t,e,s,i){var r=s?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=u(e,r);else{var o=document.createTextNode(r),n=t.childNodes;n[e]&&t.removeChild(n[e]),n.length?t.insertBefore(o,n[e]):t.appendChild(o)}}function p(t,e,s){var i=s.css,r=s.media,o=s.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var f=null,v=0;function m(t,e){var s,i,r;if(e.singleton){var o=v++;s=f||(f=d(e)),i=h.bind(null,s,o,!1),r=h.bind(null,s,o,!0)}else s=d(e),i=p.bind(null,s,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(s)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var s=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<s.length;i++){var r=a(s[i]);n[r].references--}for(var o=l(t,e),d=0;d<s.length;d++){var c=a(s[d]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}s=o}}}},47465:(t,e,s)=>{"use strict";s.d(e,{A:()=>r});const i={name:"crudLog",props:["form","grid","rowId"],data:()=>({logs:[],reads:[],logColumns:[{title:"Бүртгэлийн төрөл",key:"action"},{title:"Хэрэглэгч",key:"user"},{title:"Огноо",key:"created_at"}],readColumns:[{title:"Хэрэглэгч",key:"user"},{title:"Огноо",key:"created_at"}]}),computed:{lang(){const t=["registration_history","Information_viewing_history"];return t.reduce(((e,s,i)=>(e[s]=this.$t("crud."+t[i]),e)),{})}},methods:{getLog(){this.logs=[],this.reads=[],axios.post("/lambda/puzzle/grid/data/crud_log?&paginate=5000&page=1&sort=id&order=desc",{schemaId:this.form,row_id:this.rowId}).then((t=>{t.data.data.forEach((t=>{"edit"!=t.action&&this.logs.push({action:"store"==t.action?"Бүртгэсэн":"Зассан",user:t.last_name.charAt(0)+"."+t.first_name,created_at:moment(t.created_at).format("YYYY-MM-DD HH:mm:ss")}),"edit"==t.action&&this.reads.push({user:t.last_name.charAt(0)+"."+t.first_name,created_at:moment(t.created_at).format("YYYY-MM-DD HH:mm:ss")})}))}))}},watch:{rowId(){this.getLog()}},mounted(){this.getLog()}};const r=(0,s(14486).A)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"crud-log"},[e("div",{staticClass:"fieldset"},[e("legend",[t._v(t._s(t.lang.lang))]),t._v(" "),e("Table",{attrs:{columns:t.logColumns,data:t.logs,size:"small",height:t.logs.length>=3?200:100}})],1),t._v(" "),e("div",{staticClass:"fieldset"},[e("legend",[t._v(t._s(t.lang.Information_viewing_history))]),t._v(" "),e("Table",{attrs:{columns:t.readColumns,data:t.reads,size:"small",height:t.reads.length>=3?200:80}})],1)])}),[],!1,null,null,null).exports},93397:(t,e,s)=>{"use strict";s.d(e,{A:()=>d});let i="cubic-bezier(0.39, 0.575, 0.565, 1)";const r={name:"VueSideoutPanel",props:{closeByBtn:{default:!1,required:!1},value:{default:!1,required:!0},count:{default:1,validator:t=>t>0&&t<=2},closeHtml:{default:"Close"},closeAllHtml:{type:String,default:"Close all"},widths:{type:Array,default(){return 1==this.count?["100%"]:["100%","50%"]},validator:t=>t.reduce(((t,e)=>t&&/col-(\w+-)?\d+|\d+px|\d+%/.test(e)),!0)},classes:{type:Array,default:()=>new Array(5).fill("default"),validator:t=>t.reduce(((t,e)=>t&&(!e||"string"==typeof e)),!0)},styles:{type:Array,default:()=>[{},{},{},{},{}],validator:t=>t.reduce(((t,e)=>t&&(!e||"object"==typeof e)),!0)}},data(){return{isVisibleDock:this.value,isVisibleSections:[],isShifted:!1,d_styles:[],d_classes:[]}},created(){this.init()},watch:{value(){this.isVisibleDock=this.value},widths(){this.init()}},computed:{isVisibleCloseAll(){return 2==this.count&&!this.isShifted}},methods:{init(){this.isShifted=!1,this.d_styles=[],this.d_classes=[];for(let t=0;t<5;t++)this.classes[t]&&this.classes[t].length>=0?2==t&&"same"==this.classes[t]?this.d_classes.push(this.classes[t-1]):this.d_classes.push(this.classes[t]):this.d_classes.push("default");2==this.count&&(this.d_classes[1]+=" vsp-br",this.d_classes[2]+=" vsp-bl");for(let t=0;t<5;t++)2==t&&this.styles[t]&&this.styles[t].same?this.d_styles.push(Object.assign({},this.styles[t-1]||{})):this.d_styles.push(this.styles[t]||{});let t=!1;1==this.count?(this.widths[0]=this.widths[0]||this.widths[1],this.widths[1]="100%"):/\d+%/.test(this.widths[1])&&(this.d_styles[2].width=100-this.widths[1].slice(0,-1)+"%",t=!0),this.widths.forEach(((e,s)=>{if(/col-(\w+-)?\d+/.test(e))this.d_classes[s]+=" "+e;else{if(2==s&&t)return;this.d_styles[s].width=e}})),this.isVisibleSections=new Array(this.count).fill(1)},_style(t){return this.d_styles[t]},_class(t){return this.d_classes[t]},setTransform(t,e){["webkitTransform","MozTransform","msTransform","OTransform","transform"].forEach((s=>{t.style[s]=e[0]})),t.style.transitionTimingFunction=e[1],t.style.transitionDuration=e[2]},d_shift(){let t=-this.$refs.section[1].offsetWidth;this.setTransform(this.$refs.dock,["right","cubic-bezier(0.215, 0.61, 0.355, 1)",".8s"]),this.$refs.dock.style.right=`${t}px`,this.isShifted=!0},s_beforeLeave(){this.isVisibleSections[1]?(this.$refs.dock.style.boxShadow="none",this.$refs.section[1].style.boxShadow="-3px 3px 9px rgba(0, 0, 0, 0.3)"):this.d_shift()},s_afterLeave(){this.isVisibleSections[1]&&(this.$refs.dock.style.boxShadow="-3px 3px 9px rgba(0, 0, 0, 0.3)",this.$refs.dock.style.width=this.$refs.section[0].offsetWidth+"px",this.$refs.section[0].style.width="100%")},d_enter(){2==this.count&&!this.showExtra&&this.d_shift()},closeDock(){this.isVisibleDock=!1,this.init(),this.$emit("close")},close(t){1==this.count?this.closeDock():this.isShifted?(this.setTransform(this.$refs.dock,["right",i,"1.2s"]),this.closeDock()):0==t?this.$set(this.isVisibleSections,0,0):1==t&&this.isVisibleSections[0]?this.d_shift():this.closeDock()},closeAll(){this.closeByBtn||(this.isShifted&&this.setTransform(this.$refs.dock,["right",i,"1.2ss"]),this.closeDock())}}};var o=s(85072),n=s.n(o),a=s(5770),l={insert:"head",singleton:!1};n()(a.A,l);a.A.locals;const d=(0,s(14486).A)(r,(function(){var t=this,e=t._self._c;return e("div",[e("transition",{attrs:{name:"fade"}},[t.isVisibleDock?e("div",{staticClass:"blackout",on:{click:t.closeAll}}):t._e()]),t._v(" "),e("transition",{attrs:{name:"slide-out"},on:{enter:t.d_enter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisibleDock,expression:"isVisibleDock"}],ref:"dock",staticClass:"dock",class:t._class(0),style:t._style(0)},[e("transition-group",{attrs:{name:"slide-out"},on:{"before-leave":t.s_beforeLeave,afterLeave:t.s_afterLeave}},t._l(t.isVisibleSections,(function(s,i){return s?e("section",{key:"k"+i,ref:"section",refInFor:!0,staticClass:"panel",class:t._class(i+1),style:t._style(i+1)},[e("a",{staticClass:"action-close",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.close(i)}}},[e("Icon",{attrs:{type:"ios-close-circle-outline"}})],1),t._v(" "),t._t("default")],2):t._e()})),0)],1)])],1)}),[],!1,null,"ddfb249e",null).exports},70941:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(93397),r=s(47465);const o={mixins:[s(18060).A],data:()=>({form_width:"800px",openSlidePanel:!1,exportLoading:!1}),created(){console.log("canvas aside")},components:{"slide-panel":i.A,"crud-log":r.A},computed:{lang(){const t=["_add","Information_viewing_history","excelUpload"];return t.reduce(((e,s,i)=>(e[s]=this.$t("crud."+t[i]),e)),{})}},methods:{templateEdit(){this.openSlidePanel=!0},templateOnSuccess(){this.openSlidePanel=!1},templateOnError(){},onReady(t){t.width.includes("%")?this.form_width=t.width:t.width.includes("px")||(this.form_width=t.width+"px")},coleSidePanel(){this.openSlidePanel=!1,this.rowId=null}}};const n=(0,s(14486).A)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"canvas-aside"},[e("div",{staticClass:"crud-page"},[e("div",{staticClass:"crud-page-body"},[t.hasVNavSlot?e("div",{staticClass:"v-nav"},[t._t("v-nav")],2):t._e(),t._v(" "),e("div",{staticClass:"dg-flex"},[e("div",{staticClass:"crud-page-header"},[t.hasNavSlot?e("div",{staticClass:"crud-page-header-left"},[t._t("nav"),t._v(" "),!t.permissions||t.permissions.c?e("span",{staticClass:"divider"}):t._e(),t._v(" "),!t.permissions||t.permissions.c?e("Button",{attrs:{type:"success",shape:"circle",size:"small",icon:"md-add"},on:{click:function(e){t.openSlidePanel=!0,t.editMode=!1}}},[t._v("\n                            "+t._s(t.lang._add)+"\n                        ")]):t._e()],2):e("div",{class:"crud-page-header-left "+(t.hasNavSlot?"":"no-nav")},[null!=t.$props.title?e("h3",[t._v(t._s(t.$props.title.replace("-"," ")))]):t._e(),t._v(" "),!t.permissions||t.permissions.c?e("span",{staticClass:"divider"}):t._e(),t._v(" "),!t.permissions||t.permissions.c?e("Button",{attrs:{type:"success",shape:"circle",size:"small",icon:"md-add"},on:{click:function(e){t.openSlidePanel=!0,t.editMode=!1}}},[t._v("\n                            "+t._s(t.lang._add)+"\n                        ")]):t._e()],1),t._v(" "),e("div",{staticClass:"crud-page-header-right"},[e("div",{staticClass:"tooloptions"},[t._t("tooloptions")],2),t._v(" "),e("krudtools",{attrs:{search:t.search,refresh:t.refresh,exportExcel:t.exportExcel,exportLoading:t.exportLoading,print:t.print,save:t.save,isPrint:t.isPrint,isExcel:t.isExcel,isExcelUpload:t.isExcelUpload,excelUploadMethod:t.excelUploadMethod,excelUploadCustomUrl:t.excelUploadCustomUrl,isRefresh:t.isRefresh,isSave:t.isSave,isSearch:t.isSearch}}),t._v(" "),t.exportSelectedRows?e("Button",{attrs:{disabled:t.selectedData.length<1,type:"success",shape:"circle",size:"small"},on:{click:t.exportByPath}},[t._v(t._s(t.exportLabel)+"\n                        ")]):t._e(),t._v(" "),t._t("right")],2)]),t._v(" "),!t.permissions||t.permissions.r?e("datagrid",{ref:"grid",attrs:{url:t.url,schemaID:t.grid,paginate:50,fnClone:t.clone,fnEdit:t.edit,fnQuickEdit:t.quickEdit,fnView:t.view,hideInfo:!!t.$props.hideInfo&&t.$props.hideInfo,actions:t.$props.actions,dblClick:t.$props.dbClickAction,onRowSelect:t.onRowSelectedEvent,hasSelection:t.hasSelection,permissions:t.permissions,page_id:t.page_id,custom_condition:t.$props.custom_condition?t.$props.custom_condition:null,user_condition:t.user_condition?t.user_condition.gridCondition:null}},[e("template",{slot:"tooloptions"},[t._t("dg-footer-start")],2),t._v(" "),e("template",{slot:"dg-footer-start"},[t._t("dg-footer-start")],2),t._v(" "),e("template",{slot:"dg-footer-mid"},[t._t("dg-footer-mid")],2),t._v(" "),e("template",{slot:"dg-footer-end"},[t._t("dg-footer-end")],2)],2):t._e()],1)]),t._v(" "),e("slide-panel",{attrs:{widths:[t.form_width?t.form_width:"1024px"],closeByBtn:!0,withCrudLog:t.withCrudLog},on:{close:t.coleSidePanel},model:{value:t.openSlidePanel,callback:function(e){t.openSlidePanel=e},expression:"openSlidePanel"}},[e("div",{class:t.withCrudLog&&t.editMode?"with-crud-log":"",staticStyle:{height:"100%"}},[e("dataform",{ref:"form",attrs:{schemaID:t.form,title:t.title,url:t.url,editMode:t.editMode,mode:"refresh",onSuccess:t.onSuccess,onReady:t.onReady,do_render:t.openSlidePanel,permissions:t.permissions,page_id:t.page_id,user_condition:t.user_condition?t.user_condition.formCondition:null,onError:t.onError,close:t.coleSidePanel}}),t._v(" "),t.withCrudLog&&t.editMode?e("crud-log",{attrs:{form:t.form,rowId:t.rowId,grid:t.grid}}):t._e()],1)])],1)])}),[],!1,null,null,null).exports}}]);