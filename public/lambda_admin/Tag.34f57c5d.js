import{a as s,N as a,r as p,o as i,c as m}from"./entry.26562f7f.js";const d={props:["model","rule","label","meta"],data(){return{options:[],loading:!0}},computed:{computedOptions(){return this.options.filter(e=>this.isShow(e))}},mounted(){let e=`/lambda/krud/${this.meta.schemaID}/options`;a.post(e,this.meta.filter.relation).then(({data:o})=>{this.options=o,this.loading=!1})},methods:{isShow(e){return e.value&&e.label?this.$props.meta.filter.relation.parentFieldOfForm?this.$props.model.form[this.$props.meta.filter.relation.parentFieldOfForm]==e.parent_value:!0:!1}}};function u(e,o,t,f,c,r){const l=p("Dropdown");return i(),m(l,{modelValue:e.$props.model.form[t.model.component],"onUpdate:modelValue":o[0]||(o[0]=n=>e.$props.model.form[t.model.component]=n),options:r.computedOptions,optionLabel:"label",optionGroupLabel:"label",optionGroupChildren:"items"},null,8,["modelValue","options"])}const b=s(d,[["render",u]]);export{b as default};
