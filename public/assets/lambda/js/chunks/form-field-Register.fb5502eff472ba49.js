"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4234],{53312:(e,l,a)=>{a.r(l),a.d(l,{default:()=>r});const t={props:["model","label","rule","meta"],data:()=>({registerNumber:null,registerChar1:{value:"А",label:"А"},registerChar2:{value:"А",label:"А"},options:[{value:"А",label:"А"},{value:"Б",label:"Б"},{value:"В",label:"В"},{value:"Г",label:"Г"},{value:"Д",label:"Д"},{value:"Е",label:"Е"},{value:"Ё",label:"Ё"},{value:"Ж",label:"Ж"},{value:"З",label:"З"},{value:"И",label:"И"},{value:"Й",label:"Й"},{value:"К",label:"К"},{value:"Л",label:"Л"},{value:"М",label:"М"},{value:"Н",label:"Н"},{value:"О",label:"О"},{value:"Ө",label:"Ө"},{value:"П",label:"П"},{value:"Р",label:"Р"},{value:"С",label:"С"},{value:"Т",label:"Т"},{value:"У",label:"У"},{value:"Ү",label:"Ү"},{value:"Ф",label:"Ф"},{value:"Х",label:"Х"},{value:"Ц",label:"Ц"},{value:"Ч",label:"Ч"},{value:"Ш",label:"Ш"},{value:"Щ",label:"Щ"},{value:"Ъ",label:"Ъ"},{value:"Ы",label:"Ы"},{value:"Ь",label:"Ь"},{value:"Э",label:"Э"},{value:"Ю",label:"Ю"},{value:"Я",label:"Я"}]}),computed:{registerLocal(){return this.model.form[this.model.component]}},watch:{registerLocal(e,l){if(e){let l=e.charAt(0);this.registerChar1={value:l,label:l};let a=e.charAt(1);this.registerChar2={value:a,label:a},this.registerNumber=e.substring(2,10)}else this.registerNumber=null,this.registerChar1={value:"А",label:"А"},this.registerChar2={value:"А",label:"А"}}},methods:{registerChanged(){this.model.form[this.model.component]=this.registerChar1.value+this.registerChar2.value,this.registerNumber&&(this.model.form[this.model.component]+=this.registerNumber)}}};const r=(0,a(51900).Z)(t,(function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("FormItem",{attrs:{label:e.label,prop:e.rule}},[a("div",{staticClass:"ivu-input-wrapper ivu-input-type form-item-register"},[a("multiselect",{staticClass:"select-char first-char",attrs:{disabled:!(!e.meta||!e.meta.disabled)&&e.meta.disabled,options:e.options,"track-by":"value",searchable:!0,placeholder:e.meta&&null!==e.meta.placeHolder?e.meta.placeHolder:e.label?e.label:"",label:"label"},on:{input:e.registerChanged},model:{value:e.registerChar1,callback:function(l){e.registerChar1=l},expression:"registerChar1"}}),e._v(" "),a("multiselect",{staticClass:"select-char second-char",attrs:{disabled:!(!e.meta||!e.meta.disabled)&&e.meta.disabled,options:e.options,"track-by":"value",searchable:!0,placeholder:e.meta&&null!==e.meta.placeHolder?e.meta.placeHolder:e.label?e.label:"",label:"label"},on:{input:e.registerChanged},model:{value:e.registerChar2,callback:function(l){e.registerChar2=l},expression:"registerChar2"}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.registerNumber,expression:"registerNumber"}],staticClass:"ivu-input",attrs:{disabled:!(!e.meta||!e.meta.disabled)&&e.meta.disabled,type:"number"},domProps:{value:e.registerNumber},on:{change:e.registerChanged,input:function(l){l.target.composing||(e.registerNumber=l.target.value)}}})],1),e._v(" "),a("div",{staticClass:"ivu-form-item-error-tip",attrs:{id:"register_"+e.model.component}})])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=form-field-Register.fb5502eff472ba49.js.map