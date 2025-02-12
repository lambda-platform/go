(self.webpackChunk=self.webpackChunk||[]).push([[6519],{20699:(e,t,l)=>{"use strict";l.d(t,{Q:()=>s});const s=e=>{let t="table"===e?window.init.dbSchema.tableList:window.init.dbSchema.viewList;if(window.init.project&&window.init.microservices&&window.init.microservices.length>=1){let t=window.init.microservices.findIndex((e=>e.microservice_id===window.init.project.id));if(t>=0)return"table"===e?window.init.microservices[t].tableList:window.init.microservices[t].viewList}return t}},65606:e=>{var t,l,s=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(l){try{return t.call(null,e,0)}catch(l){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{l="function"==typeof clearTimeout?clearTimeout:n}catch(e){l=n}}();var r,o=[],c=!1,d=-1;function u(){c&&r&&(c=!1,r.length?o=r.concat(o):d=-1,o.length&&_())}function _(){if(!c){var e=a(u);c=!0;for(var t=o.length;t;){for(r=o,o=[];++d<t;)r&&r[d].run();d=-1,t=o.length}r=null,c=!1,function(e){if(l===clearTimeout)return clearTimeout(e);if((l===n||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function p(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var l=1;l<arguments.length;l++)t[l-1]=arguments[l];o.push(new v(e,t)),1!==o.length||c||a(_)},v.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=p,s.addListener=p,s.once=p,s.off=p,s.removeListener=p,s.removeAllListeners=p,s.emit=p,s.prependListener=p,s.prependOnceListener=p,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},30088:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>d});var s=l(432),i=l.n(s),n=l(72505),a=l.n(n),r=l(95353),o=l(20699);const c={methods:{isShowAble(e,t,l){if(l){return e.table.indexOf(this.search)>=0}},selectTable(e){this.$store.commit("setTable",e),window.init.dbSchema.tableMeta&&window.init.dbSchema.tableMeta[e]?this.selectTableReal(window.init.dbSchema.tableMeta[e],e):a().get(`/lambda/puzzle/table-schema/${e}`).then((t=>{this.selectTableReal(t.data,e)}))},selectTableReal(e,t){let l=e.map((e=>({name:e.model,title:e.model,type:e.dbType,table:e.table,alias:t+"_as_"+e.model,output:!0,sortType:"none",sortOrder:1,groupBy:!1,groupOrder:1,aggregate:"none"})));this.$store.commit("setFields",l)}},data:()=>({tableMeta:window.init.dbSchema.tableMeta,table_:"",selected_field:{}}),mounted(){this.table&&(this.table_=this.table)},components:{draggable:i()},computed:{tableList:()=>(0,o.Q)("table"),viewList:()=>(0,o.Q)("view"),...(0,r.L8)({table:"table",fields:"fields"}),lang(){const e=["data_table","selectTable","groupBy","aggregation","no","count","_max","_min","_avg","_sum","count_distinct","avg_distinct","sum_distinct","_sort","no_sort","grouping","_type","fictitious_name"];return e.reduce(((t,l,s)=>(t[l]=this.$t("chart."+e[s]),t)),{})}},watch:{table:function(e){this.table_=e}}};const d=(0,l(14486).A)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"table-list ve-column"},[t("div",{staticClass:"tables"},[t("label",[e._v(e._s(e.lang.data_table))]),e._v(" "),t("multiselect",{attrs:{placeholder:e.lang.selectTable,options:[{type:"table",list:e.tableList},{type:"view",list:e.viewList}],"group-values":"list","group-label":"type","group-select":!0},on:{select:e.selectTable},model:{value:e.table_,callback:function(t){e.table_=t},expression:"table_"}}),e._v(" "),t("div",{staticClass:"source-fields"},[t("draggable",{attrs:{options:{group:{name:"element",pull:"clone",put:!1},sort:!1}},model:{value:e.fields,callback:function(t){e.fields=t},expression:"fields"}},e._l(e.fields,(function(l,s){return t("Button",{key:s,staticClass:"data-element",on:{click:function(t){e.selected_field=l}}},[e._v("\n                    "+e._s(l.name)+"\n\n                    "),l.groupBy?t("span",{staticClass:"groupBy"},[e._v(e._s(e.lang.groupBy))]):e._e(),e._v(" "),"none"!=l.aggregate?t("span",{staticClass:"aggregation"},[e._v(e._s(l.aggregate))]):e._e()])})),1)],1),e._v(" "),t("br"),e._v(" "),e.selected_field.name?t("table",{staticClass:"column-options"},[t("tr",[t("td",[e._v("\n                    "+e._s(e.lang.aggregation)+":\n                ")]),e._v(" "),t("td",[t("div",{staticClass:"selector"},[t("Select",{staticStyle:{width:"100px"},attrs:{size:"small"},model:{value:e.selected_field.aggregate,callback:function(t){e.$set(e.selected_field,"aggregate",t)},expression:"selected_field.aggregate"}},[t("Option",{attrs:{value:"none"}},[e._v(e._s(e.lang.no))]),e._v(" "),t("Option",{attrs:{value:"count"}},[e._v(e._s(e.lang.count))]),e._v(" "),t("Option",{attrs:{value:"max"}},[e._v(e._s(e.lang._max))]),e._v(" "),t("Option",{attrs:{value:"min"}},[e._v(e._s(e.lang._min))]),e._v(" "),t("Option",{attrs:{value:"avg"}},[e._v(e._s(e.lang._avg))]),e._v(" "),t("Option",{attrs:{value:"sum"}},[e._v(e._s(e.lang._sum))]),e._v(" "),t("Option",{attrs:{value:"countDistinct"}},[e._v(e._s(e.lang.count_distinct))]),e._v(" "),t("Option",{attrs:{value:"avgDistinct"}},[e._v(e._s(e.lang.avg_distinct))]),e._v(" "),t("Option",{attrs:{value:"sumDistinct"}},[e._v(e._s(e.lang.sum_distinct))])],1)],1)])]),e._v(" "),t("tr",[t("td",[e._v("\n                    "+e._s(e.lang._sort)+":\n                ")]),e._v(" "),t("td",[t("div",{staticClass:"selector"},[t("Select",{staticStyle:{width:"100px"},attrs:{size:"small"},model:{value:e.selected_field.sortType,callback:function(t){e.$set(e.selected_field,"sortType",t)},expression:"selected_field.sortType"}},[t("Option",{attrs:{value:"none"}},[e._v(e._s(e.lang.no_sort))]),e._v(" "),t("Option",{attrs:{value:"ASC"}},[e._v("A-Z")]),e._v(" "),t("Option",{attrs:{value:"DESC"}},[e._v("Z-A")])],1)],1)])]),e._v(" "),t("tr",[t("td",{attrs:{colspan:"2"}},[t("Checkbox",{attrs:{size:"small"},model:{value:e.selected_field.groupBy,callback:function(t){e.$set(e.selected_field,"groupBy",t)},expression:"selected_field.groupBy"}},[e._v(e._s(e.lang.grouping))])],1)]),e._v(" "),t("tr",[t("td",[e._v("\n                    "+e._s(e.lang._type)+":\n                ")]),e._v(" "),t("td",[t("Input",{staticClass:"table-col-search",attrs:{disabled:"",size:"small"},model:{value:e.selected_field.type,callback:function(t){e.$set(e.selected_field,"type",t)},expression:"selected_field.type"}})],1)]),e._v(" "),t("tr",[t("td",[e._v("\n                    "+e._s(e.lang.fictitious_name)+":\n                ")]),e._v(" "),t("td",[t("Input",{staticClass:"table-col-search",attrs:{disabled:"",placeholder:"",size:"small"},model:{value:e.selected_field.alias,callback:function(t){e.$set(e.selected_field,"alias",t)},expression:"selected_field.alias"}})],1)]),e._v(" "),t("tr",[t("td",[e._v("\n                    "+e._s(e.lang._color)+":\n                ")]),e._v(" "),t("td",[t("Input",{staticClass:"table-col-search",attrs:{placeholder:"",size:"small"},model:{value:e.selected_field.color,callback:function(t){e.$set(e.selected_field,"color",t)},expression:"selected_field.color"}})],1)]),e._v(" "),t("tr",[t("td",[e._v("\n                    "+e._s(e.lang._sort)+" #:\n                ")]),e._v(" "),t("td",[t("InputNumber",{staticClass:"table-col-search",attrs:{min:1,disabled:"none"==e.selected_field.sortType,type:"number",size:"small"},model:{value:e.selected_field.sortOrder,callback:function(t){e.$set(e.selected_field,"sortOrder",t)},expression:"selected_field.sortOrder"}})],1)]),e._v(" "),t("tr",[t("td",[e._v("\n                    "+e._s(e.lang.grouping)+" #:\n                ")]),e._v(" "),t("td",[t("InputNumber",{staticClass:"table-col-search",attrs:{min:1,disabled:!e.selected_field.groupBy,type:"number",size:"small"},model:{value:e.selected_field.groupOrder,callback:function(t){e.$set(e.selected_field,"groupOrder",t)},expression:"selected_field.groupOrder"}})],1)])]):e._e()],1)])}),[],!1,null,null,null).exports}}]);