"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5182],{70037:(e,l,a)=>{a.r(l),a.d(l,{default:()=>s});const t={props:["model","rule","label","meta"],data:()=>({gridModal:!1,labels:null,selectedRows:[]}),methods:{showSearchGrid(){this.gridModal=!0},addmethod(){console.log(this.selectedRows)},getValue(e){this.labels=null,this.meta.gridSearch.labels.forEach(((l,a)=>{null==this.labels&&(this.labels=""),this.labels+=e[l],this.meta.gridSearch.labels.length-1>a&&(this.labels+=", ")})),this.gridModal=!1,this.model.form[this.model.component]=e[this.meta.gridSearch.key]},getMultipleValue(e){this.selectedRows=e,this.labels=[],this.model.form[this.model.component]=[],e.forEach((e=>{this.meta.gridSearch.labels.forEach(((l,a)=>{this.labels.push(e[l])})),this.model.form[this.model.component].push(e[this.meta.gridSearch.key])})),this.labels=this.labels.join(", ")}}};const s=(0,a(51900).Z)(t,(function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",[a("FormItem",{staticClass:"grid-search-input",attrs:{prop:e.rule,label:e.label}},[e.meta.gridSearch.multiple?a("Select",{attrs:{placeholder:e.meta&&null!==e.meta.placeHolder?e.meta.placeHolder:e.label,multiple:""},on:{"on-open-change":e.showSearchGrid},model:{value:e.model.form[e.model.component],callback:function(l){e.$set(e.model.form,e.model.component,l)},expression:"model.form[model.component]"}},e._l(e.selectedRows,(function(l){return a("Option",{key:l.index,attrs:{value:l[e.meta.gridSearch.key]}},[e._v(e._s(l[e.meta.gridSearch.labels])+"\n            ")])})),1):a("Input",{attrs:{type:"text",value:e.labels,icon:"ios-search-strong",placeholder:e.meta&&null!==e.meta.placeHolder?e.meta.placeHolder:e.label},on:{"on-focus":e.showSearchGrid}})],1),e._v(" "),a("Modal",{attrs:{"class-name":"grid-search-modal",width:1e3},model:{value:e.gridModal,callback:function(l){e.gridModal=l},expression:"gridModal"}},[a("h3",[e._v(e._s(e.meta.label))]),e._v(" "),e.meta.gridSearch.multiple?a("datagrid",{attrs:{schemaID:e.meta.gridSearch.grid,paginate:50,highlights:e.model.form[e.model.component],hasSelection:!0,onSelected:e.getMultipleValue}}):a("datagrid",{attrs:{schemaID:e.meta.gridSearch.grid,paginate:50,dblClick:e.getValue}})],1)],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=form-field-Search.8c6398d23ab58848.js.map