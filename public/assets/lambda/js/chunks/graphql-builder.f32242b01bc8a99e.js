/*! For license information please see graphql-builder.f32242b01bc8a99e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8712],{9854:(t,e,n)=>{function r(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{Sh:()=>i,ZD:()=>o,gN:()=>l});var o=function(t,e){var n=e.removedIndex,a=e.addedIndex,o=e.payload;if(null===n&&null===a)return t;var i=r(t),l=o;return null!==n&&(l=i.splice(n,1)[0]),null!==a&&i.splice(a,0,l),i},i=function(t){return t&&window.init.dbSchema.tableMeta[t]?window.init.dbSchema.tableMeta[t]:[]},l=function(t,e){return""==t.relation.filter||void 0===t.relation.filter?e[t.relation.table]?e[t.relation.table].data:t.relation.filterWithUser&&e[t.model]?e[t.model].data:[]:e[t.model]?e[t.model].data:[]}},65587:(t,e,n)=>{n.d(e,{c:()=>r});var r=function(t){var e="table"===t?window.init.dbSchema.tableList:window.init.dbSchema.viewList;if(window.init.project&&window.init.microservices&&window.init.microservices.length>=1){var n=window.init.microservices.findIndex((function(t){return t.microservice_id===window.init.project.id}));if(n>=0)return"table"===t?window.init.microservices[n].tableList:window.init.microservices[n].viewList}return e}},57752:(t,e,n)=>{n.r(e),n.d(e,{default:()=>d});var r=n(9854),a=n(65587);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(){i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof p?e:p,o=Object.create(a.prototype),i=new k(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return j()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=S(i,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=h(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,i),o}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d={};function p(){}function f(){}function v(){}var g={};s(g,a,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(L([])));b&&b!==e&&n.call(b,a)&&(g=b);var y=v.prototype=p.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function r(a,i,l,c){var s=h(t[a],t,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==o(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,l,c)}),(function(t){r("throw",t,l,c)})):e.resolve(d).then((function(t){u.value=t,l(u)}),(function(t){return r("throw",t,l,c)}))}c(s.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}}function S(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=h(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=v,s(y,"constructor",v),s(v,"constructor",f),f.displayName=s(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},_(w.prototype),s(w.prototype,l,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new w(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(y),s(y,c,"Generator"),s(y,a,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(q),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),q(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;q(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function l(t,e,n,r,a,o,i){try{var l=t[o](i),c=l.value}catch(t){return void n(t)}l.done?e(c):Promise.resolve(c).then(r,a)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){l(o,r,a,i,c,"next",t)}function c(t){l(o,r,a,i,c,"throw",t)}i(void 0)}))}}const s={props:["onCreate","onUpdate","src","editMode","projectID"],created:function(){this.init()},methods:{cancel:function(){this.showSubForm=!1},deleteSub:function(t){this.graphql.subs.splice(t,1)},addSub:function(){this.graphql.subs.push(JSON.parse(JSON.stringify(this.newSubData))),this.newSub={graphqlID:"",parent_identity:""},this.showSubForm=!1},showSub:function(){this.showSubForm=!0},selectTable:function(t){var e=this;return c(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.name=t,n.next=3,(0,r.Sh)(t);case 3:e.relSchema=n.sent;case 4:case"end":return n.stop()}}),n)})))()},selectSubTable:function(t){var e=this;if(t){var n="/lambda/puzzle/schema/graphql/"+t;this.$project&&(n="/lambda/puzzle/project/".concat(this.projectID,"/graphql/").concat(t)),axios.get(n).then((function(t){var n=JSON.parse(t.data.data.schema);e.newSubData.table=n.table,e.newSubData.parent_identity=e.graphql.identity,e.subFields=(0,r.Sh)(n.table)}))}},callOtherForms:function(){var t=this;return c(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.otherForms){e.next=4;break}t.otherForms=window.otherForms,e.next=10;break;case 4:return n="/lambda/puzzle/schema/graphql",t.projectID&&(n="/lambda/puzzle/project/".concat(t.projectID,"/graphql")),e.next=8,axios.get(n);case 8:r=e.sent,t.otherGraphql=r.data.data;case 10:case"end":return e.stop()}}),e)})))()},init:function(){var t=this;1==this.$props.editMode?axios.get(this.$props.src).then((function(e){t.name=e.data.data.name,t.graphql=JSON.parse(e.data.data.schema),t.selectTable(t.graphql.table),t.callOtherForms()})).catch((function(t){console.log(t)})):this.callOtherForms()},saveSchema:function(){var t=this,e={name:this.name,schema:JSON.stringify(this.graphql)},n="/lambda/puzzle/schema/graphql";this.projectID&&(n="/lambda/puzzle/project/".concat(this.projectID,"/graphql"));var r=this.$props.editMode?this.$props.src:n;axios.post(r,e).then((function(e){e.data.status?(t.$Message.success("".concat(t._form.savedSuccessfull)),t.$props.onCreate(),t.graphql={table:"",identity:"",hidden_columns:[],checkAuth:{isLoggedIn:!1,roles:[]},subs:[],actions:{create:!1,update:!1,delete:!1}}):t.$Message.info("".concat(t._form.errorSaving))}))}},data:function(){return{tableMeta:window.init.dbSchema.tableMeta,user_roles:window.init.user_roles,relSchema:[],subFields:[],otherGraphql:[],showSubForm:!1,newSub:{graphqlID:"",parent_identity:""},newSubData:{table:"",parent_identity:"",connection_field:""},name:"",graphql:{table:"",identity:"",hidden_columns:[],checkAuth:{isLoggedIn:!1,roles:[]},subs:[],actions:{create:!1,update:!1,delete:!1},subscription:!1}}},mounted:function(){},components:{},computed:{tableList:function(){return(0,a.c)("table")},viewList:function(){return(0,a.c)("view")},lang:function(){var t=this,e=["graphqlManagement","table","selectTable","name","idField","hideFields","permissionActions","add","edit","delete","accessAndAccessRights","nevtersenHundHaruulah","accessRights","allUsersCanSee","subTables","save","subTable","connectionField","real_time","cancel","tableParentId","action"];return e.reduce((function(n,r,a){return n[r]=t.$t("graphql."+e[a]),n}),{})},_form:function(){var t=this,e=["savedSuccessfull","errorSaving","formIformationSavedSuccessfull","successDeleted"];return e.reduce((function(n,r,a){return n[r]=t.$t("dataForm."+e[a]),n}),{})},subColumns:function(){var t=this;return[{title:this.lang.table,key:"table"},{title:this.lang.tableParentId,key:"parent_identity"},{title:this.lang.connectionField,key:"connection_field"},{title:this.lang.action,key:"action",width:150,align:"center",render:function(e,n){return e("div",[e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.deleteSub(n.index)}}},t.lang.delete)])}}]}},watch:{}};var u=n(51900);const h={components:{graphql:(0,u.Z)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"data-source"},[e("div",{staticClass:"data-source-sidebar",staticStyle:{width:"600px"}},[e("div",{staticClass:"data-source-header"},[e("h3",[t._v("\n                "+t._s(t.lang.graphqlManagement)+"\n            ")])]),t._v(" "),e("div",{staticClass:"data-source-sidebar-wrapper"},[e("h5",[t._v(t._s(t.lang.table))]),t._v(" "),e("Select",{attrs:{placeholder:t.lang.selectTable,clearable:"",filterable:""},on:{"on-change":t.selectTable},model:{value:t.graphql.table,callback:function(e){t.$set(t.graphql,"table",e)},expression:"graphql.table"}},[e("OptionGroup",{attrs:{label:"Table list"}},t._l(t.tableList,(function(n){return e("Option",{key:n.index,attrs:{value:n}},[t._v(t._s(n)+"\n                    ")])})),1),t._v(" "),e("OptionGroup",{attrs:{label:"View list"}},t._l(t.viewList,(function(n){return e("Option",{key:n.index,attrs:{value:n}},[t._v(t._s(n)+"\n                    ")])})),1)],1),t._v(" "),e("h5",[t._v(t._s(t.lang.name))]),t._v(" "),e("Input",{staticStyle:{width:"100%"},attrs:{placeholder:t.lang.name},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),e("h5",[t._v("\n                "+t._s(t.lang.idField)+"\n            ")]),t._v(" "),e("Select",{attrs:{filterable:"",placeholder:t.lang.idField},model:{value:t.graphql.identity,callback:function(e){t.$set(t.graphql,"identity",e)},expression:"graphql.identity"}},t._l(t.relSchema,(function(n){return e("Option",{key:n.model,attrs:{value:n.model}},[t._v(t._s(n.model))])})),1),t._v(" "),e("h5",[t._v("\n                "+t._s(t.lang.hideFields)+"\n            ")]),t._v(" "),e("Select",{attrs:{filterable:"",multiple:"",placeholder:t.lang.hideFields},model:{value:t.graphql.hidden_columns,callback:function(e){t.$set(t.graphql,"hidden_columns",e)},expression:"graphql.hidden_columns"}},t._l(t.relSchema,(function(n){return e("Option",{key:n.model,attrs:{value:n.model}},[t._v(t._s(n.model))])})),1),t._v(" "),e("h5",[t._v(t._s(t.lang.permissionActions))]),t._v(" "),e("Checkbox",{model:{value:t.graphql.actions.create,callback:function(e){t.$set(t.graphql.actions,"create",e)},expression:"graphql.actions.create"}},[t._v(t._s(t.lang.add))]),t._v(" "),e("Checkbox",{model:{value:t.graphql.actions.update,callback:function(e){t.$set(t.graphql.actions,"update",e)},expression:"graphql.actions.update"}},[t._v(t._s(t.lang.edit))]),t._v(" "),e("Checkbox",{model:{value:t.graphql.actions.delete,callback:function(e){t.$set(t.graphql.actions,"delete",e)},expression:"graphql.actions.delete"}},[t._v(t._s(t.lang.delete))]),t._v(" "),e("h5",[t._v(t._s(t.lang.real_time))]),t._v(" "),e("Checkbox",{model:{value:t.graphql.subscription,callback:function(e){t.$set(t.graphql,"subscription",e)},expression:"graphql.subscription"}},[t._v(t._s(t.lang.real_time))]),t._v(" "),e("h5",[t._v(t._s(t.lang.accessAndAccessRights))]),t._v(" "),e("Checkbox",{model:{value:t.graphql.checkAuth.isLoggedIn,callback:function(e){t.$set(t.graphql.checkAuth,"isLoggedIn",e)},expression:"graphql.checkAuth.isLoggedIn"}},[t._v(t._s(t.lang.nevtersenHundHaruulah))]),t._v(" "),t.graphql.checkAuth.isLoggedIn?e("h5",[t._v(t._s(t.lang.accessRights))]):t._e(),t._v(" "),t.graphql.checkAuth.isLoggedIn?e("h6",[t._v("( "+t._s(t.lang.allUsersCanSee)+" )")]):t._e(),t._v(" "),e("Select",{attrs:{"graphql.checkAuth.isLoggedIn":"",filterable:"",multiple:"",placeholder:t.lang.accessRights},model:{value:t.graphql.checkAuth.roles,callback:function(e){t.$set(t.graphql.checkAuth,"roles",e)},expression:"graphql.checkAuth.roles"}},t._l(t.user_roles,(function(n){return e("Option",{key:n.id,attrs:{value:n.id}},[t._v(t._s(n.display_name))])})),1),t._v(" "),e("h5",[t._v(t._s(t.lang.subTables)),e("Button",{attrs:{type:"primary",shape:"circle",icon:"md-add"},on:{click:t.showSub}})],1),t._v(" "),e("Table",{attrs:{border:"",columns:t.subColumns,data:t.graphql.subs}})],1)]),t._v(" "),e("div",{staticClass:"data-source-workspace"},[e("div",{staticClass:"data-source-header"},[e("div",{staticClass:"data-source-header-buttons"},[e("Button",{attrs:{type:"success"},on:{click:t.saveSchema}},[t._v(t._s(t.lang.save))])],1)]),t._v(" "),e("div",{staticClass:"graphql-builder"})]),t._v(" "),e("Modal",{attrs:{title:t.lang.subTables},on:{"on-ok":t.addSub,"on-cancel":t.cancel},model:{value:t.showSubForm,callback:function(e){t.showSubForm=e},expression:"showSubForm"}},[e("div",[e("h5",[t._v(t._s(t.lang.subTable))]),t._v(" "),e("Select",{attrs:{filterable:"",placeholder:t.lang.subTable},on:{"on-change":t.selectSubTable},model:{value:t.newSub.graphqlID,callback:function(e){t.$set(t.newSub,"graphqlID",e)},expression:"newSub.graphqlID"}},t._l(t.otherGraphql,(function(n){return e("Option",{key:n.name,attrs:{value:n.id}},[t._v(t._s(n.name))])})),1),t._v(" "),e("h5",[t._v("\n                "+t._s(t.lang.connectionField)+"\n            ")]),t._v(" "),e("Select",{attrs:{filterable:"",placeholder:t.lang.connectionField},model:{value:t.newSubData.connection_field,callback:function(e){t.$set(t.newSubData,"connection_field",e)},expression:"newSubData.connection_field"}},t._l(t.subFields,(function(n){return e("Option",{key:n.model,attrs:{value:n.model}},[t._v(t._s(n.model))])})),1)],1),t._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("div",{staticStyle:{"text-align":"right"}},[e("button",{staticClass:"ivu-btn ivu-btn-info",attrs:{type:"button"},on:{click:t.addSub}},[t._v(t._s(t.lang.add))]),t._v(" "),e("button",{staticClass:"ivu-btn ivu-btn-default",staticStyle:{"margin-left":"8px"},on:{click:t.cancel}},[t._v(t._s(t.lang.cancel))])])])])],1)}),[],!1,null,null,null).exports},data:function(){return{editMode:!1,src:""}},created:function(){var t=this.$route.params.id;this.$project?void 0!==t&&""!==t&&null!==t?(this.editMode=!0,this.src="/lambda/puzzle/project/".concat(this.$project.id,"/graphql/").concat(this.$route.params.id)):this.src="/lambda/puzzle/project/".concat(this.$project.id,"/graphql"):void 0!==t&&""!==t&&null!==t&&(this.editMode=!0,this.src="/lambda/puzzle/schema/graphql/".concat(this.$route.params.id))},methods:{onCreate:function(){this.$router.push("/graphql")},onUpdate:function(){this.$router.push("/graphql")}}};const d=(0,u.Z)(h,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"page"},[t.$project?e("graphql",{attrs:{editMode:t.editMode,projectID:t.$project.id,src:t.src,onCreate:t.onCreate,onUpdate:t.onUpdate}}):e("graphql",{attrs:{editMode:t.editMode,src:t.src,onCreate:t.onCreate,onUpdate:t.onUpdate}})],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=graphql-builder.f32242b01bc8a99e.js.map