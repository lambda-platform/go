(self.webpackChunk=self.webpackChunk||[]).push([[826],{8883:(e,t,n)=>{var o={"./example.vue":4743};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=8883},67130:(e,t,n)=>{"use strict";n.d(t,{Q:()=>o,b:()=>i});var o=[{element:"Text",component:function(){return n.e(705).then(n.bind(n,73566))}},{element:"Select",component:function(){return n.e(4036).then(n.bind(n,51850))}},{element:"TreeSelect",component:function(){return n.e(84).then(n.bind(n,74989))}},{element:"Number",component:function(){return n.e(8254).then(n.bind(n,1636))}},{element:"Textarea",component:function(){return n.e(9343).then(n.bind(n,99321))}},{element:"Date",component:function(){return n.e(4218).then(n.bind(n,99071))}},{element:"DateTime",component:function(){return n.e(126).then(n.bind(n,2185))}},{element:"Divider",component:function(){return n.e(4136).then(n.bind(n,50272))}},{element:"Image",component:function(){return n.e(6987).then(n.bind(n,27106))}},{element:"HTML",component:function(){return n.e(80).then(n.bind(n,87501))}},{element:"ImageSubform",component:function(){return n.e(8876).then(n.bind(n,9328))}},{element:"ImageDrag",component:function(){return n.e(6386).then(n.bind(n,7735))}},{element:"Checkbox",component:function(){return n.e(1797).then(n.bind(n,10429))}},{element:"CK",component:function(){return n.e(6024).then(n.bind(n,84014))}},{element:"ColorPicker",component:function(){return n.e(6133).then(n.bind(n,75919))}},{element:"Email",component:function(){return n.e(2997).then(n.bind(n,53172))}},{element:"File",component:function(){return n.e(7997).then(n.bind(n,72220))}},{element:"Download",component:function(){return n.e(7455).then(n.bind(n,18697))}},{element:"Geographic",component:function(){return Promise.all([n.e(8204),n.e(6244)]).then(n.bind(n,24348))}},{element:"Hidden",component:function(){return n.e(9035).then(n.bind(n,24387))}},{element:"Map",component:function(){return n.e(9737).then(n.bind(n,55668))}},{element:"Money",component:function(){return n.e(2387).then(n.bind(n,98739))}},{element:"NumberGenerate",component:function(){return n.e(4370).then(n.bind(n,96037))}},{element:"Password",component:function(){return n.e(1933).then(n.bind(n,36309))}},{element:"PasswordGenerate",component:function(){return n.e(6566).then(n.bind(n,80067))}},{element:"Radio",component:function(){return n.e(7911).then(n.bind(n,84342))}},{element:"RadioWithTextInput",component:function(){return n.e(3146).then(n.bind(n,76666))}},{element:"Register",component:function(){return n.e(4234).then(n.bind(n,30243))}},{element:"ISelect",component:function(){return Promise.all([n.e(8204),n.e(3120)]).then(n.bind(n,80880))}},{element:"Search",component:function(){return n.e(5182).then(n.bind(n,25768))}},{element:"Switch",component:function(){return n.e(3617).then(n.bind(n,89082))}},{element:"Time",component:function(){return n.e(973).then(n.bind(n,24172))}},{element:"AdminMenu",component:function(){return n.e(3666).then(n.bind(n,61109))}},{element:"subform/Grid",component:function(){return n.e(2405).then(n.bind(n,18548))}},{element:"subform/Form",component:function(){return n.e(931).then(n.bind(n,19439))}}],r=function(){return n.e(931).then(n.bind(n,65786))},i=function(e){if(null!=e){var t=o.findIndex((function(t){return t.element==e}));if(t>=0)return o[t].component}return function(e){return window.init.data_form_custom_elements&&window.init.data_form_custom_elements.find((function(t){return t.element==e}))?n(8883)("./".concat(e,".vue")).default:r}(e)}},65821:(e,t,n)=>{"use strict";n.d(t,{j1:()=>a,i:()=>s,jQ:()=>l,pg:()=>f});var o=null,r=null,i=null,a=function(e){o=e},s=function(e,t){i=t,r=e},l=[{type:"required",msg:"Талбарыг бөглөнө үү!"},{type:"email",msg:"Имэйл хаягаа зөв оруулна уу!"},{type:"number",msg:"Тоон утга оруулна уу!"},{type:"englishAlphabet",msg:"Зөвхөн латин үсэг оруулна уу!"},{type:"unique",msg:"Давхацсан утга оруулсан байна!"},{type:"lambda-account",msg:"Давхацсан утга оруулсан байна!"}],d=function(e,t,n){axios.post("/lambda/krud/unique",{table:o,identityColumn:r,identity:i,field:e.field,val:t}).then((function(e){e.data.status?n():n(new Error(e.data.msg))}))},c=function(e,t,n){axios.post("/lambda/check",{value:t}).then((function(e){e.data.status?n():n(new Error("'".concat(t," Давхацсан утга оруулсан байна!'")))}))},u=function(e,t,n){t.match(/^[0-9a-zA-Z-]+$/)?n():n(new Error("Зөвхөн латин үсэг оруулна уу!"))},m=function(e,t,n){axios.post("/lambda/krud/check_current_password",{password:t}).then((function(e){e.data.status?n():n(new Error(e.data.msg))}))},f=function(e){switch(e.type){case"required":return{required:!0,message:e.msg};case"min":case"max":return{type:"string",min:parseInt(e.val,10),message:e.msg};case"email":return{type:"email",message:e.msg};case"number":return{type:"number",message:e.msg};case"unique":return{validator:d,trigger:"blur"};case"lambda-account":return{validator:c,trigger:"blur"};case"englishAlphabet":return{validator:u,trigger:"blur"};case"check_current_password":return{validator:m,trigger:"blur"};default:return null}}},10233:(e,t,n)=>{"use strict";function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{x4:()=>l,BS:()=>c});var a=/\{ *([\w_-]+) *\}/g,s=null;function l(e,t,n,o,r,i){if(e.length>=1){var a=e.findIndex((function(e){return e.model==t}));a<=-1?e.map((function(e){e.template.includes(t)&&d(e,t,n,o,r,i)})):d(e[a],t,n,o,r,i)}}function d(e,t,n,o,r,i){var s,l,d=!1;if(e.form?("main"==e.form||i&&e.form==i)&&(d=!0):d=!0,d){var c=(s=e.template,l=n,s.replace(a,(function(e,t){var n=l[t];return void 0===n?"":("function"==typeof n&&(n=n(l)),n)})));if(c){var u=new Function("return "+c)();e.targets.map((function(e){var t=m(o,e.field);t>=0&&("value"==e.prop?n[e.field]=u:("hidden"==e.prop&&r&&r[e.field]&&r[e.field].length>0&&r[e.field][0].hasOwnProperty("required")&&(r[e.field][0].required=!u),o[t][e.prop]=u))}))}}}function c(e,t,n,o,i,a,l){if(t){var d=m(o,e);d>=0&&o[d].trigger&&(s&&clearTimeout(s),s=setTimeout((function(){!function(e,t,n,o,i,a){axios.post(e,{model:r({},t),editMode:a}).then((function(e){var r=e.data;r.schema&&r.schema.forEach((function(e){u(e,t,n,o)})),r.schema_sub&&r.schema_sub.forEach((function(e){e.schema.forEach((function(r){u(r,t,n,o,e.model)}))})),r.message&&("success"==r.message.type?i.success({duration:3,desc:r.message.message}):i.error({duration:3,desc:r.message.message})),r.info&&r.info.forEach((function(e){document.getElementById(e.target).innerHTML=e.html}))}))}(o[d].trigger,n,o,i,a,l)}),null!=o[d].triggerTimeout&&null!==o[d].triggerTimeout&&""!=o[d].triggerTimeout?o[d].triggerTimeout:0))}}function u(e,t,n,o,r){if(r){var i=m(n,r);if(i>=0){var a=m(n[i].schema,e.field);a>=0&&Object.keys(e.props).forEach((function(t){n[i].schema[a][t]=e.props[t]}))}}else{var s=m(n,e.field);if(s>=0){if("value"in e)t[e.field]=e.value,"SubForm"==n[s].formType&&o["sf".concat(e.field)][0].fillData();e.props&&Object.keys(e.props).forEach((function(t){n[s][t]=e.props[t]}))}}}function m(e,t){return e.findIndex((function(e){return e.model==t}))}},42622:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ul:()=>idGenerator,GY:()=>evalstr,JY:()=>isValid});var idGenerator=function(e){var t=Math.random().toString(36).substr(3,9);return"".concat(e,"-").concat(t)},evalstr=function evalstr(str){return void 0===str||null==str||""==str||eval(str.toString())},isValid=function(e){return void 0!==e&&null!=e&&""!=e}},4743:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const o={name:"example"};const r=(0,n(51900).Z)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"41f3b5cc",null).exports},26828:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var o=n(67130),r=n(65821),i=n(10233),a=n(42622);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const c={name:"dataform",props:["projectID","schemaID","editMode","onReady","onSuccess","onError","permissions","user_condition","do_render","isSubForm","url","page_id","public"],data:function(){return{loadConfig:!0,viewMode:!1,asyncMode:!1,save_btn_text:"",title:"",meta:{model:"",option:{}},model:{},schema:[],ui:{},formula:[],rule:{},identity:null,dataID:null,relations:{},showInfo:!1,infoUrl:"",infoTitle:"",showID:window.init.showID}},computed:{submitUrl:function(){return this.editMode?this.page_id?"/lambda/krud/".concat(this.$props.schemaID,"/update/").concat(this.dataID,"?page_id=").concat(this.page_id):"/lambda/krud/".concat(this.$props.schemaID,"/update/").concat(this.dataID):this.page_id?"/lambda/krud/".concat(this.$props.schemaID,"/store?page_id=").concat(this.page_id):"/lambda/krud".concat(this.Url,"/").concat(this.$props.schemaID,"/store")},Url:function(){return!0===this.public?"-public":""},lang:function(){var e=this,t=["save","pleaseWait","fillInTheNewOne","close","pleaseEnterPasswordYouUCurrentlyUsing","pleaseReEnterYourPassword","passwordConfirmError","informationIsIncomplete","trRMandatoryFieldsFillInformationLookFormAFillRequiredFieldsWithRedBorder","successfullySaved","errorSaving"];return t.reduce((function(n,o,r){return n[o]=e.$t("dataForm."+t[r]),n}),{})}},created:function(){window.showInformationModal=this.showInformationModal,this.schemaID&&this.initForm()},watch:{src:function(e,t){this.initForm()},editMode:function(e){e||this.handleReset(this.meta.model+"-"+this.schemaID)},do_render:function(e){e||(this.viewMode=!1,this.handleReset(this.meta.model+"-"+this.schemaID))},schemaID:function(e){e&&this.initForm()},ui:function(e){e&&this.dataID&&this.editModel(this.dataID)}},methods:{isVisibleSection:function(e){return"section"==e.type&&(!e.visibleUserRoles||(!Array.isArray(e.visibleUserRoles)||(!(e.visibleUserRoles.length>=1&&window.init.user)||e.visibleUserRoles.findIndex((function(e){return e==window.init.user.role}))>=0)))},element:o.b,evalstr:a.GY,isValid:a.JY,getRelationData:function(e){return""==e.relation.filter||void 0===e.relation.filter?this.relations[e.relation.table]?this.relations[e.relation.table].data:[]:this.relations[e.model]?this.relations[e.model].data:[]},isShow:function(e){var t=this.schema.findIndex((function(t){return t.model==e}));return!(t>=0)||!this.schema[t].hidden},afterChange:function(e,t,n){(0,i.BS)(e,t,this.model,this.schema,this.$refs,this.$Notice,this.editMode),this.do_render&&t!=n&&(0,i.x4)(this.formula,e,this.model,this.schema,this.rule,!1)},clearConfig:function(){this.model={},this.schema=[],this.ui={},this.formula=[],this.rule={},this.dataID=null},initForm:function(){var e=this,t=[];this.user_condition&&(t=JSON.stringify(this.user_condition));var n=this.$props.url?this.$props.url:"",o=n+"/lambda/puzzle/schema".concat(this.Url,"/form/").concat(this.$props.schemaID);this.projectID&&(o=n+"/lambda/puzzle/project/".concat(this.projectID,"/form/").concat(this.$props.schemaID)),o+=0==t.length?"":"/".concat(t),axios.get(o).then((function(t){var n=t.data,o=JSON.parse(n.data.schema);e.identity=o.identity,e.schema=o.schema,e.ui=o.ui,e.save_btn_text=o.save_btn_text,o.formula&&(e.formula=o.formula),e.title=n.data.name,e.meta={model:o.model,option:{labelPosition:o.labelPosition,labelWidth:o.labelWidth}},e.getOptionsData(o.schema),e.setUiSchemaFormItem(o.ui.schema),e.setHiddenItemModel(o.schema),e.$props.onReady&&e.$props.onReady(o,e.schema),(0,r.j1)(o.model),e.loadConfig=!1}))},setHiddenItemModel:function(e){var t=this;e.forEach((function(e){if((e.hidden||e.disabled)&&(t.isValid(e.default)&&t.setModel(e.model,e.default,e.formType),e.hasUserId&&t.setModel(e.model,1*window.init.user.id,e.formType),t.isValid(e.param)&&e.param in t.$route.params)){var n=t.$route.params[e.param];"null"!=n&&Vue.set(t.$data.model,e.model,n)}e.source_hidden=e.hidden,e.source_disabled=e.disabled}))},validatePassCheck:function(e,t,n,o){var r=n||"",i=this.model[e]?this.model[e]:"";""!==n||this.editMode?r!==i?o(new Error(this.lang.passwordConfirmError)):o():o(new Error(this.lang.pleaseReEnterYourPassword))},setUiSchemaFormItem:function(e){var t=this;e.forEach((function(e){if("form"==e.type){if(t.setModel(e.model,e.default,e.formType),t.$watch("model."+e.model,{handler:function(n,o){t.afterChange(e.model,n,o)},deep:!0}),e.rules&&t.setRule(e.model,e.rules),"Password"==e.formType&&e.passwordOption&&(e.passwordOption.confirm&&(t.setModel("password_confirm","","password"),t.$data.rule.password_confirm=[{validator:function(n,o,r){return t.validatePassCheck(e.model,n,o,r)},trigger:"blur"}]),e.passwordOption.edit_with_old_password)){t.setModel("current_password","","password");var n=[];[{type:"required",msg:t.lang.pleaseEnterPasswordYouUCurrentlyUsing},{type:"check_current_password",msg:null}].forEach((function(e){var t=(0,r.pg)(e);n.push(t)})),t.$data.rule.current_password=n}}else _.isArray(e.children)&&t.setUiSchemaFormItem(e.children)}))},setModel:function(e,t,n){switch(n){case"Switch":var o=!1;"true"!=t&&1!=t||(o=!0),Vue.set(this.$data.model,e,o);break;case"Checkbox":var r=0;"true"!=t&&1!=t||(r=1),Vue.set(this.$data.model,e,r);break;case"CK":var i="";""!=t&&null!==t&&(i=t),Vue.set(this.$data.model,e,i);break;case"SubForm":Vue.set(this.$data.model,e,[]);break;case"Select":Vue.set(this.$data.model,e,t);break;case"Number":Vue.set(this.$data.model,e,1*t);break;case"ISelect":Vue.set(this.$data.model,e,t);default:Vue.set(this.$data.model,e,t)}},setRule:function(e,t){var n=this;this.$data.rule[e]=[],t.forEach((function(t){var o=(0,r.pg)(t);n.$data.rule[e].push(o)}))},setMeta:function(e,t){var n=this.schema.findIndex((function(t){return t.model==e.model})),o=n>=0?this.schema[n]:e;return t||(delete o.table,delete o.extra,o.schemaID=this.$props.schemaID),o},getSchemaByModel:function(e){var t=this.schema.findIndex((function(t){return t.model==e}));return t>=0?this.schema[t]:null},setSchemaByModel:function(e,t,n){if("value"==t)Vue.set(this.$data.model,e,n);else if("sub-value"==t)Vue.set(this.$data.model,e,n),this.subFormFillData(e);else{var o=this.schema.findIndex((function(t){return t.model==e}));o>=0&&Vue.set(this.schema[o],t,n)}},getSubFormData:function(e){var t=[];this.model[e].forEach((function(e){t.push(e.data)}))},handleSubmit:function(e){var t=this;this.setIdentityManual(),_.isEmpty(this.$data.rule)?this.postData():this.$refs[e].validate((function(e){e?t.postData():(t.$Notice.error({title:t.lang.informationIsIncomplete,desc:t.lang.trRMandatoryFieldsFillInformationLookFormAFillRequiredFieldsWithRedBorder,duration:0}),console.log(t.$data.model),console.log("not passed validation"))}))},postData:function(){var e=this;this.isSubForm?this.$props.onSuccess(this.$data.model):(this.asyncMode=!0,axios.post(this.submitUrl,this.$data.model).then((function(t){var n=t.data;n.status?(e.$Notice.success({title:e.lang.successfullySaved}),e.editMode?e.$props.onSuccess&&e.$props.onSuccess(n.data):(e.$data.model[e.identity]=n[e.identity],e.$props.onSuccess&&e.$props.onSuccess(n.data),e.handleReset(e.meta.model+"-"+e.schemaID))):(e.$Notice.error({title:e.lang.errorSaving}),e.$props.onError&&e.$props.onError()),e.asyncMode=!1})).catch((function(t){var n="";t.response.data.hasOwnProperty("error")&&("string"==typeof t.response.data.error||t.response.data.error instanceof String?n=t.response.data.error:t.response.data.error instanceof Object&&Object.keys(t.response.data.error).forEach((function(e){var o=e+": "+t.response.data.error[e].map((function(e){return e+" "}));n=""!=n?n+"<br/>"+o:o}))),e.$Notice.error({title:e.lang.errorSaving,duration:3,desc:n}),e.asyncMode=!1,e.$props.onError&&e.$props.onError()})))},handleReset:function(e){var t=this;this.model={},this.$refs[e].resetFields(),(0,r.i)(this.identity,null),this.schema.forEach((function(e){"SubForm"==e.formType&&void 0!==t.$refs["sf".concat(e.model)]&&t.$refs["sf".concat(e.model)][0].reset(),t.setModel(e.model,e.default,e.formType),e.hidden=e.source_hidden,e.disabled=e.source_disabled})),this.setHiddenItemModel(this.schema)},setIdentityManual:function(){(0,r.i)(this.identity,this.model[this.identity])},setUserConditionValues:function(){var e=this;this.user_condition&&this.user_condition.forEach((function(t){var n=e.getSchemaByModel(t.form_field);""!=n.default&&null!==n.default&&0!=n.default&&(""!=e.model[n.model]&&null!==e.model[n.model]&&0!=e.model[n.model]||(e.model[n.model]=n.default))}))},editModel:function(e,t){var n=this;t?(this.model=l(l({},this.model),t),this.ui&&this.ui.hasOwnProperty("schema")&&(this.setEditModel(this.ui.schema),this.setUserConditionValues())):(this.dataID=e,(0,r.i)(this.identity,e),axios.post(this.page_id?"/lambda/krud/".concat(this.$props.schemaID,"/edit/").concat(e,"?page_id=").concat(this.page_id):"/lambda/krud/".concat(this.$props.schemaID,"/edit/").concat(e)).then((function(e){var t=e.data;t.status&&(n.model=l(l({},n.model),t.data),n.ui&&n.ui.hasOwnProperty("schema")&&n.setEditModel(n.ui.schema),n.setUserConditionValues())})))},setHiddenValues:function(e){var t=this;e.map((function(e){t.model[e.key]=e.val}))},subFormFillData:function(e){var t=this;this.$refs["sf".concat(e)]?this.$refs["sf".concat(e)][0].fillData():setTimeout((function(){t.subFormFillData(e)}),100)},setEditModel:function(e){var t=this;e.forEach((function(e){if("form"==e.type||"Form"==e.type||"SubForm"==e.formType)switch(e.formType){case"SubForm":t.subFormFillData(e.model);break;case"Switch":1==t.model[e.model]||"true"==t.model[e.model]?t.model[e.model]=!0:t.model[e.model]=!1;break;case"Password":case"PasswordGenerate":t.model[e.model]="",delete t.$data.rule[e.model]}else _.isArray(e.children)&&t.setEditModel(e.children)}))},cloneModel:function(e){var t=this;axios.post("/lambda/krud/".concat(this.$props.schemaID,"/edit/").concat(e)).then((function(e){var n=e.data;n.status&&(t.model=l(l({},t.model),n.data),delete t.model[t.identity],console.log(t.identity),console.log(t.model[t.identity]),t.setEditModel(t.ui.schema),t.setUserConditionValues())}))},getOptionsData:function(e){var t=this;this.relations=this.getSelects(e),Object.keys(this.relations).length>=1&&axios.post("/lambda/puzzle/get_options".concat(this.Url),{relations:this.relations}).then((function(e){var n=e.data;Object.keys(n).map((function(e){var o=l(l({},t.relations[e]),{},{data:n[e]});Vue.set(t.$data.relations,e,o)}))}))},getSelects:function(e){var t=this,n={};return e.map((function(e){if("Select"!=e.formType&&"ISelect"!=e.formType&&"TreeSelect"!=e.formType||e.relation.table&&void 0===n[e.relation.table]&&(""==e.relation.filter||void 0===e.relation.filter?n[e.relation.table]=e.relation:n[e.model]=e.relation),"AdminMenu"==e.formType&&e.relation.table&&(n[e.relation.table]=e.relation),"SubForm"==e.formType&&e.schema){var o=t.getSelects(e.schema);o&&(n=l(l({},n),o))}})),n},showInformationModal:function(e,t){this.infoTitle=t,this.infoUrl=e,this.showInfo=!0}}};const u=(0,n(51900).Z)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.viewMode?"dataform view-mode":"dataform"},[n("Form",{ref:e.meta.model+"-"+e.schemaID,attrs:{model:e.model,rules:e.rule,"label-position":e.meta.option.labelPosition,"label-width":e.meta.option.labelWidth}},[n("div",{staticClass:"dataform-header"},[n("h3",[e._v(e._s(e.title)),e.showID?n("b",[e.model[e.identity]?n("span",[e._v(": "+e._s(e.model[e.identity]))]):e._e()]):e._e()])]),e._v(" "),n("div",{staticClass:"dataform-body"},[e.loadConfig?n("Spin",{attrs:{fix:""}}):e._l(e.ui.schema,(function(t){return n("Row",{key:t.index},[e._l(t.children,(function(t){return e.isVisibleSection(t)?n("Col",{key:t.index,attrs:{xs:t.span.xs,sm:t.span.sm,md:t.span.md,lg:t.span.lg}},[n("div",{class:""!=t.name?"fieldset":""},[""!=t.name?n("legend",[e._v(e._s(t.name))]):e._e(),e._v(" "),e._l(t.children,(function(t){return n("Row",{key:t.index},e._l(t.children,(function(t){return n("Col",{key:t.index,attrs:{id:t.id,xs:24,sm:24,md:t.span.md,lg:t.span.lg}},[t.name?n("Divider",{staticClass:"form-divider",attrs:{orientation:"left"}},[e._v(e._s(t.name)+"\n                                ")]):e._e(),e._v(" "),e._l(t.children,(function(t){return n("span",{key:t.index},[e.isShow(t.model)&&"SubForm"==t.formType&&t.subtype?n(e.element("subform/"+t.subtype),{ref:"sf"+t.model,refInFor:!0,tag:"component",attrs:{model:{form:e.model,component:t.model},form:e.setMeta(t,!0),formula:e.formula,relations:e.relations,editMode:e.editMode}}):e._e(),e._v(" "),e.isShow(t.model)&&"SubForm"!=t.formType?n(e.element(t.formType),{tag:"component",attrs:{do_render:e.do_render,editMode:e.editMode,model:{form:e.model,component:t.model},disabled:!!t.disabled&&t.disabled,label:t.label?t.label:"["+t.model+"]",rule:t.model,meta:e.setMeta(t),identity:e.identity,getSchemaByModel:e.getSchemaByModel,setSchemaByModel:e.setSchemaByModel,relation_data:e.getRelationData(t)}}):e._e()],1)}))],2)})),1)}))],2)]):e._e()})),e._v(" "),e._l(t.children,(function(t){return"col"==t.type?n("Col",{key:t.index,attrs:{xs:t.span.xs,sm:t.span.sm,md:t.span.md,lg:t.span.lg}},[t.name?n("Divider",{staticClass:"form-divider",attrs:{orientation:"left"}},[e._v(e._s(t.name))]):e._e(),e._v(" "),e._l(t.children,(function(t){return n("span",{key:t.index},["SubForm"==t.formType&&t.subtype?n(e.element("subform/"+t.subtype),{ref:"sf"+t.model,refInFor:!0,tag:"component",attrs:{label:t.label?t.label:"["+t.model+"]",model:{form:e.model,component:t.model},form:e.setMeta(t,!0),relations:e.relations,formula:e.formula,schemaID:e.schemaID,editMode:e.editMode}}):e._e(),e._v(" "),e.isShow(t.model)&&"SubForm"!=t.formType?n(e.element(t.formType),{tag:"component",attrs:{do_render:e.do_render,editMode:e.editMode,disabled:!!t.disabled&&t.disabled,model:{form:e.model,component:t.model},label:t.label?t.label:"["+t.model+"]",rule:t.model,meta:e.setMeta(t),identity:e.identity,getSchemaByModel:e.getSchemaByModel,setSchemaByModel:e.setSchemaByModel,relation_data:e.getRelationData(t)}}):e._e()],1)}))],2):e._e()}))],2)}))],2),e._v(" "),e.viewMode?e._e():n("div",{staticClass:"dataform-footer"},[n("Button",{attrs:{type:"info",loading:e.asyncMode},on:{click:function(t){return e.handleSubmit(e.meta.model+"-"+e.schemaID)}}},[e.asyncMode?n("span",[e._v("\n                    "+e._s(e.lang.pleaseWait)+"\n                ")]):n("span",[e._v("\n                    "+e._s(e.lang.save)+"\n                ")])]),e._v(" "),e.editMode?e._e():n("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.handleReset(e.meta.model+"-"+e.schemaID)}}},[e._v("\n                "+e._s(e.lang.fillInTheNewOne)+"\n            ")])],1)]),e._v(" "),n("Drawer",{staticClass:"info-modal",attrs:{title:e.infoTitle,width:"860px"},model:{value:e.showInfo,callback:function(t){e.showInfo=t},expression:"showInfo"}},[n("iframe",{attrs:{src:e.infoUrl,frameborder:"0"}}),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"primary",size:"large"},on:{click:function(t){e.showInfo=!1}}},[e._v("\n                "+e._s(e.lang.close)+"\n            ")])],1)])],1)}),[],!1,null,null,null).exports},51900:(e,t,n)=>{"use strict";function o(e,t,n,o,r,i,a,s){var l,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),o&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=l):r&&(l=s?function(){r.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(d.functional){d._injectStyles=l;var c=d.render;d.render=function(e,t){return l.call(t),c(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:d}}n.d(t,{Z:()=>o})}}]);
//# sourceMappingURL=Dataform-el.b721407769a9bf21.js.map