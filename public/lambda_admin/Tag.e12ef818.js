import{a as n}from"./common.6a974f5f.js";import{a as p}from"./entry.d62cc07b.js";import{Y as s,a0 as i,V as m}from"./vue.af4c1aff.js";import"./ant.1e7698c3.js";import"./moment.8b5e7d95.js";import"./ag.ed4f9fb5.js";import"./lodash.e407703a.js";import"./numeral.035c4f8b.js";import"./cryptoJs.7428ec8d.js";const d={props:["model","rule","label","meta"],data(){return{options:[],loading:!0}},computed:{computedOptions(){return this.options.filter(o=>this.isShow(o))}},mounted(){let o=`/lambda/krud/${this.meta.schemaID}/options`;n.post(o,this.meta.filter.relation).then(({data:e})=>{this.options=e,this.loading=!1})},methods:{isShow(o){return o.value&&o.label?this.$props.meta.filter.relation.parentFieldOfForm?this.$props.model.form[this.$props.meta.filter.relation.parentFieldOfForm]==o.parent_value:!0:!1}}};function u(o,e,t,f,c,r){const l=m("Dropdown");return s(),i(l,{modelValue:o.$props.model.form[t.model.component],"onUpdate:modelValue":e[0]||(e[0]=a=>o.$props.model.form[t.model.component]=a),options:r.computedOptions,optionLabel:"label",optionGroupLabel:"label",optionGroupChildren:"items"},null,8,["modelValue","options"])}const k=p(d,[["render",u]]);export{k as default};
