(self.webpackChunk=self.webpackChunk||[]).push([[2387],{13271:function(e,t){!function(e){"use strict";function t(e,t){return e(t={exports:{}},t.exports),t.exports}var r={symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3,stripZeros:!1,fallback:0};function a(e){var t=arguments.length<=1||void 0===arguments[1]?r.decimal:arguments[1],o=arguments.length<=2||void 0===arguments[2]?r.fallback:arguments[2];if(Array.isArray(e))return e.map((function(e){return a(e,t,o)}));if("number"==typeof e)return e;var n=new RegExp("[^0-9-(-)-"+t+"]",["g"]),i=(""+e).replace(n,"").replace(t,".").replace(/\(([-]*\d*[^)]?\d+)\)/g,"-$1").replace(/\((.*)\)/,""),s=(i.match(/-/g)||2).length%2,u=parseFloat(i.replace(/-/g,""))*(s?-1:1);return isNaN(u)?o:u}function o(e,t){return e=Math.round(Math.abs(e)),isNaN(e)?t:e}function n(e,t){t=o(t,r.precision);var a=Math.pow(10,t);return(Math.round((e+1e-8)*a)/a).toFixed(t)}var i=t((function(e){var t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=Object.assign||function(e,o){for(var n,i,s=a(e),u=1;u<arguments.length;u++){for(var l in n=Object(arguments[u]))t.call(n,l)&&(s[l]=n[l]);if(Object.getOwnPropertySymbols){i=Object.getOwnPropertySymbols(n);for(var m=0;m<i.length;m++)r.call(n,i[m])&&(s[i[m]]=n[i[m]])}}return s}})),s=i&&"object"==typeof i&&"default"in i?i.default:i;function u(e,t){var r=e.split(t),a=r[0],o=r[1].replace(/0+$/,"");return o.length>0?a+t+o:a}function l(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if(Array.isArray(e))return e.map((function(e){return l(e,t)}));t=s({},r,t);var a=e<0?"-":"",o=parseInt(n(Math.abs(e),t.precision),10)+"",i=o.length>3?o.length%3:0,m=a+(i?o.substr(0,i)+t.thousand:"")+o.substr(i).replace(/(\d{3})(?=\d)/g,"$1"+t.thousand)+(t.precision>0?t.decimal+n(Math.abs(e),t.precision).split(".")[1]:"");return t.stripZeros?u(m,t.decimal):m}var m=t((function(e){var t=String.prototype.valueOf,r=function(e){try{return t.call(e),!0}catch(e){return!1}},a=Object.prototype.toString,o="[object String]",n="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;e.exports=function(e){return"string"==typeof e||"object"==typeof e&&(n?r(e):a.call(e)===o)}})),c=m&&"object"==typeof m&&"default"in m?m.default:m;function p(e){return c(e)&&e.match("%v")?{pos:e,neg:e.replace("-","").replace("%v","-%v"),zero:e}:e}function d(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if(Array.isArray(e))return e.map((function(e){return d(e,t)}));var a=p((t=s({},r,t)).format);return(e>0?a.pos:e<0?a.neg:a.zero).replace("%s",t.symbol).replace("%v",l(Math.abs(e),t))}function h(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if(!e)return[];var o=p((t=s({},r,t)).format),n=o.pos.indexOf("%s")<o.pos.indexOf("%v"),i=0;return e.map((function(e){if(Array.isArray(e))return h(e,t);var r=((e=a(e,t.decimal))>0?o.pos:e<0?o.neg:o.zero).replace("%s",t.symbol).replace("%v",l(Math.abs(e),t));return r.length>i&&(i=r.length),r})).map((function(e){return c(e)&&e.length<i?n?e.replace(t.symbol,t.symbol+new Array(i-e.length+1).join(" ")):new Array(i-e.length+1).join(" ")+e:e}))}e.settings=r,e.unformat=a,e.toFixed=n,e.formatMoney=d,e.formatNumber=l,e.formatColumn=h,e.format=d,e.parse=a}(t)},81369:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});const a={props:["model","label","rule","meta"],components:{Numeric:r(49830).Z},data:()=>({price:""})};const o=(0,r(51900).Z)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("FormItem",{attrs:{label:e.label,prop:e.rule}},[r("numeric",{attrs:{currency:"₮",currencySymbolPosition:"suffix",precision:2,separator:",",disabled:!(!e.meta||!e.meta.disabled)&&e.meta.disabled},model:{value:e.model.form[e.model.component],callback:function(t){e.$set(e.model.form,e.model.component,t)},expression:"model.form[model.component]"}})],1)}),[],!1,null,null,null).exports},34274:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});const a={props:["model","label","rule","meta"],components:{Numeric:r(49830).Z},data:()=>({price:""})};const o=(0,r(51900).Z)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("FormItem",{attrs:{label:e.label,prop:e.rule}},[r("numeric",{attrs:{currency:"",currencySymbolPosition:"suffix",precision:2,separator:",",disabled:!(!e.meta||!e.meta.disabled)&&e.meta.disabled},model:{value:e.model.form[e.model.component],callback:function(t){e.$set(e.model.form,e.model.component,t)},expression:"model.form[model.component]"}})],1)}),[],!1,null,null,null).exports},49830:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(13271),o=r.n(a);const n={name:"VueNumeric",props:{currency:{default:"",required:!1},disabled:{default:!1,required:!1},max:{default:Number.MAX_SAFE_INTEGER||9007199254740991,required:!1},min:{default:Number.MIN_SAFE_INTEGER||-9007199254740991,required:!1},minus:{type:Boolean,default:!1,required:!1},placeholder:{type:String,default:"",required:!1},emptyValue:{type:[Number,String],default:"",required:!1},precision:{type:Number,default:0,required:!1},separator:{type:String,default:",",required:!1},thousandSeparator:{default:void 0,required:!1,type:String},decimalSeparator:{default:void 0,required:!1,type:String},outputType:{required:!1,type:String,default:"Number"},value:{type:[Number,String],default:0,required:!1},readOnly:{type:Boolean,default:!1,required:!1},readOnlyClass:{type:String,default:"",required:!1},currencySymbolPosition:{type:String,default:"prefix",required:!1}},data:()=>({amount:""}),computed:{amountNumber(){return this.unformat(this.amount)},valueNumber(){return this.unformat(this.value)},decimalSeparatorSymbol(){return void 0!==this.decimalSeparator?this.decimalSeparator:","===this.separator?".":","},thousandSeparatorSymbol(){return void 0!==this.thousandSeparator?this.thousandSeparator:"."===this.separator?".":"space"===this.separator?" ":","},symbolPosition(){return this.currency?"suffix"===this.currencySymbolPosition?"%v %s":"%s %v":"%v"}},watch:{valueNumber(e){this.$refs.numeric!==document.activeElement&&(this.amount=this.format(e))},readOnly(e,t){!1===t&&!0===e&&this.$nextTick((()=>{this.$refs.readOnly.className=this.readOnlyClass}))},separator(){this.process(this.valueNumber),this.amount=this.format(this.valueNumber)},currency(){this.process(this.valueNumber),this.amount=this.format(this.valueNumber)},precision(){this.process(this.valueNumber),this.amount=this.format(this.valueNumber)}},mounted(){this.placeholder||(this.process(this.valueNumber),this.amount=this.format(this.valueNumber),setTimeout((()=>{this.process(this.valueNumber),this.amount=this.format(this.valueNumber)}),500)),this.readOnly&&(this.$refs.readOnly.className=this.readOnlyClass)},methods:{onBlurHandler(e){this.$emit("blur",e),this.amount=this.format(this.valueNumber)},onFocusHandler(e){this.$emit("focus",e),0===this.valueNumber?this.amount=null:this.amount=o().formatMoney(this.valueNumber,{symbol:"",format:"%v",thousand:"",decimal:this.decimalSeparatorSymbol,precision:Number(this.precision)})},onInputHandler(){this.process(this.amountNumber)},process(e){e>=this.max&&this.update(this.max),e<=this.min&&this.update(this.min),e>this.min&&e<this.max&&this.update(e),!this.minus&&e<0&&(this.min>=0?this.update(this.min):this.update(0))},update(e){const t=o().toFixed(e,this.precision),r="string"===this.outputType.toLowerCase()?t:Number(t);this.$emit("input",r)},format(e){return o().formatMoney(e,{symbol:this.currency,format:this.symbolPosition,precision:Number(this.precision),decimal:this.decimalSeparatorSymbol,thousand:this.thousandSeparatorSymbol})},unformat(e){const t="string"==typeof e&&""===e?this.emptyValue:e;return o().unformat(t,this.decimalSeparatorSymbol)}}};const i=(0,r(51900).Z)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ivu-input-wrapper ivu-input-type"},[r("i",{staticClass:"ivu-icon ivu-icon-load-c ivu-load-loop ivu-input-icon ivu-input-icon-validate"}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],ref:"numeric",staticClass:"ivu-input",attrs:{disabled:e.disabled,placeholder:e.placeholder,type:"tel"},domProps:{value:e.amount},on:{blur:e.onBlurHandler,input:[function(t){t.target.composing||(e.amount=t.target.value)},e.onInputHandler],focus:e.onFocusHandler}})])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=form-field-Money.e18322ef16256a5c.js.map