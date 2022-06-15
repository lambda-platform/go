"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5595],{26102:(t,e,a)=>{a.d(e,{Z:()=>s});var i=a(64231);const l={props:["title","type","src","preview","prefix"],data:function(){return{duplicateModal:!1,loading:!0,listData:[],filteredList:[],duplicateData:{schema:{},name:null,id:null},tableList:window.init.dbSchema.tableList,viewList:window.init.dbSchema.viewList,reportList:window.init.dbSchema.reportList}},created:function(){this.getData()},computed:{lang:function(){var t=this,e=["add","delete_data"];return e.reduce((function(a,i,l){return a[i]=t.$t("puzzle."+e[l]),a}),{})},lang1:function(){var t=this,e=["pleaseEnterSearchValue","yes","no","copy","name","selectTable","table","basicTable","table_list"];return e.reduce((function(a,i,l){return a[i]=t.$t("components."+e[l]),a}),{})}},methods:{beforeMount:function(){"mn"!=this.selectedLang&&(0,i.loadLanguageAsync)(this.selectedLang)},switchLanguage:function(t){this.selectedLang=t,(0,i.loadLanguageAsync)(t)},getData:function(){var t=this;axios.get(this.$props.src).then((function(e){var a=e.data;t.loading=!1,t.filteredList=t.listData=a.data}))},doDuplicate:function(){var t=this,e="/lambda/puzzle/schema/form";"grid"==this.type&&(e="/lambda/puzzle/schema/grid",this.duplicateData.schema.schema.forEach((function(e){e.table=t.duplicateData.schema.model}))),this.$project&&(e="/lambda/puzzle/project/".concat(this.$project.id,"/form"),"grid"==this.type&&(e="/lambda/puzzle/project/".concat(this.$project.id,"/grid"),this.duplicateData.schema.schema.forEach((function(e){e.table=t.duplicateData.schema.model}))));var a={name:this.duplicateData.name,schema:JSON.stringify(this.duplicateData.schema)};axios.post(e,a).then((function(e){e.data.status?(t.$Notice.success({title:"Амжилттай хадгалагдлаа",desc:'"'.concat(t.formName,'" формын мэдээлэл амжилттай хадгалагдлаа.')}),t.duplicateModal=!1,t.duplicateData={schema:{},name:null,id:null},t.getData()):t.$Notice.error({title:"Хадгалах үед алдаа гарлаа!"})}))},duplicate:function(t,e){var a=this,i="/lambda/puzzle/schema/form/".concat(t,"/builder");"grid"==this.type&&(i="/lambda/puzzle/schema/grid/".concat(t)),this.$project&&(i="/lambda/puzzle/project/".concat(this.$project.id,"/form/").concat(t,"/builder"),"grid"==this.type&&(i="/lambda/puzzle/project/".concat(this.$project.id,"/grid/").concat(t))),axios.get(i).then((function(e){var i=e.data;a.duplicateData.name=i.data.hasOwnProperty("name")?i.data.name:i.data.model,a.duplicateData.schema=JSON.parse(i.data.schema),a.duplicateData.id=t,a.duplicateModal=!0})).catch((function(t){console.log(t)}))},deleteListItem:function(t){var e=this;axios.delete(this.$project?"/lambda/puzzle/delete/project/vb_schemas/".concat(this.$project.id,"/").concat(this.type,"/").concat(t):"/lambda/puzzle/delete/vb_schemas/".concat(this.type,"/").concat(t)).then((function(a){e.filteredList=e.filteredList.filter((function(e){return e.id!==t})),e.listData=e.listData.filter((function(e){return e.id!==t})),e.$Message.success("444 Амжилттай устгалаа!")}))},cancel:function(){},filterList:function(t){var e=this,a=t.target.value;e.filteredList=""!=a?e.listData.filter((function(t){return t.name.toString().toLowerCase().indexOf(a.toLowerCase())>=0})):e.listData}}};const s=(0,a(51900).Z)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page page-list"},[a("div",{staticClass:"page-list-header"},[a("h3",[t._v(t._s(t.title)+" ("+t._s(t.listData.length)+")")]),t._v(" "),a("div",{staticClass:"page-list-header-search"},[a("Input",{staticStyle:{width:"200px"},attrs:{icon:"ios-search",placeholder:t.lang1.pleaseEnterSearchValue},on:{"on-keyup":t.filterList}})],1),t._v(" "),a("div",{staticClass:"page-list-header-control"},[a("router-link",{staticClass:"btn-del",attrs:{to:(t.prefix?t.prefix:"")+"/"+t.type+"/builder"}},[a("Button",{attrs:{type:"success"}},[a("Icon",{attrs:{type:"md-add"}}),t._v("\n            "+t._s(t.lang.add)+"\n        ")],1)],1)],1)]),t._v(" "),t.loading?a("div",{staticClass:"loader"},[a("div",{staticClass:"loader-wrapper"},[t._m(0),t._v(" "),a("h3",[t._v(t._s(t.lang.please_wait))])])]):a("Row",{directives:[{name:"slimscroll",rawName:"v-slimscroll",value:{height:"100%-30",size:7,alwaysVisible:!0,wheelStep:7,color:"#2C3A47"},expression:"{height:'100%-30',size:7,alwaysVisible: true,wheelStep:7,color:'#2C3A47'}"}],staticClass:"pz-list",attrs:{gutter:16}},t._l(t.filteredList,(function(e){return a("Col",{key:e.index,attrs:{xs:24,sm:12,md:8,lg:6}},[a("div",{staticClass:"pz-list-item"},[a("div",{staticClass:"pz-list-item-body"},[a("h3",[t._v(t._s(e.name))]),t._v(" "),a("small",[t._v(t._s(e.created_at))])]),t._v(" "),a("div",{staticClass:"pz-list-item-control"},["hidden"!=t.preview?a("router-link",{staticClass:"btn-preview",attrs:{to:(t.prefix?t.prefix:"")+"/"+t.type+"/preview/"+e.id}},[a("Icon",{attrs:{type:"ios-eye"}})],1):t._e(),t._v(" \n          "),"form"==t.type||"grid"==t.type?a("a",{staticClass:"btn-preview",attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.duplicate(e.id,t.type)}}},[a("Icon",{attrs:{type:"md-copy"}})],1):t._e(),t._v(" "),a("span",[a("router-link",{staticClass:"btn-edit",attrs:{to:(t.prefix?t.prefix:"")+"/"+t.type+"/builder/"+e.id}},[a("Icon",{attrs:{type:"md-create"}})],1),t._v(" "),a("Poptip",{attrs:{confirm:"",title:t.lang.delete_data,confirm:"",width:"180","ok-text":t.lang1.yes,"cancel-text":t.lang1.no},on:{"on-ok":function(a){return t.deleteListItem(e.id)},"on-cancel":t.cancel}},[a("a",{staticClass:"btn-del",attrs:{href:"javascript:void(0)"}},[a("Icon",{attrs:{type:"ios-trash"}})],1)])],1)],1)])])})),1),t._v(" "),a("Modal",{attrs:{title:t.lang1.copy,"ok-text":t.lang1.copy},on:{"on-ok":t.doDuplicate},model:{value:t.duplicateModal,callback:function(e){t.duplicateModal=e},expression:"duplicateModal"}},[a("label",[t._v(t._s(t.lang1.name))]),t._v(" "),a("Input",{staticStyle:{width:"100%"},attrs:{placeholder:t.lang1.name},model:{value:t.duplicateData.name,callback:function(e){t.$set(t.duplicateData,"name",e)},expression:"duplicateData.name"}}),t._v(" "),a("label",[t._v(t._s(t.lang1.table)+" (DB table)")]),t._v(" "),"form"==t.type?a("Select",{staticStyle:{width:"100%"},attrs:{placeholder:t.lang1.selectTable,clearable:"",filterable:""},model:{value:t.duplicateData.schema.model,callback:function(e){t.$set(t.duplicateData.schema,"model",e)},expression:"duplicateData.schema.model"}},t._l(t.tableList,(function(e){return a("Option",{key:e.index,attrs:{value:e}},[t._v(t._s(e))])})),1):t._e(),t._v(" "),"grid"==t.type?a("Select",{staticStyle:{width:"100%"},attrs:{placeholder:t.lang1.selectTable,clearable:"",filterable:""},model:{value:t.duplicateData.schema.model,callback:function(e){t.$set(t.duplicateData.schema,"model",e)},expression:"duplicateData.schema.model"}},[a("OptionGroup",{attrs:{label:t.lang.table_list}},t._l(t.tableList,(function(e){return a("Option",{key:e.index,attrs:{value:e}},[t._v(t._s(e))])})),1),t._v(" "),a("OptionGroup",{attrs:{label:t.lang.table_list}},t._l(t.viewList,(function(e){return a("Option",{key:e.index,attrs:{value:e}},[t._v(t._s(e))])})),1)],1):t._e(),t._v(" "),"grid"==t.type?a("label",[t._v(t._s(t.lang1.basicTable)+" (DB table)")]):t._e(),t._v(" "),"grid"==t.type?a("Select",{staticStyle:{width:"100%"},attrs:{placeholder:t.lang1.selectTable,clearable:"",filterable:""},model:{value:t.duplicateData.schema.mainTable,callback:function(e){t.$set(t.duplicateData.schema,"mainTable",e)},expression:"duplicateData.schema.mainTable"}},t._l(t.tableList,(function(e){return a("Option",{key:e.index,attrs:{value:e}},[t._v(t._s(e))])})),1):t._e()],1)],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lds-roller"},[a("div"),t._v(" "),a("div"),t._v(" "),a("div"),t._v(" "),a("div"),t._v(" "),a("div"),t._v(" "),a("div"),t._v(" "),a("div"),t._v(" "),a("div")])}],!1,null,null,null).exports},69096:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});const i={components:{"list-view":a(26102).Z},methods:{},computed:{lang:function(){var t=this,e=["original_preparation"];return e.reduce((function(a,i,l){return a[i]=t.$t("puzzle."+e[l]),a}),{})}}};const l=(0,a(51900).Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.$project?a("list-view",{attrs:{src:"/lambda/puzzle/project/"+t.$project.id+"/moqup",title:t.lang.original_preparation,type:"moqup",data:t.listData}}):a("list-view",{attrs:{src:"/lambda/puzzle/schema/moqup",title:t.lang.original_preparation,type:"moqup",data:t.listData}})],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=moqup-list.827be07dc8063030.js.map