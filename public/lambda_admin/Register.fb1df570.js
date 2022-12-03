import{m as h}from"./_mixin.1c793709.js";import{a as d}from"./entry.f024038a.js";import{W as g,a3 as v,$ as u,f as i,a0 as p,S as o}from"./vue.8156bfac.js";import"./ant.e4101cc5.js";import"./moment.8b5e7d95.js";import"./cryptoJs.7e1396ed.js";import"./numeral.417254ec.js";import"./common.3f2e1dd9.js";const c={mixins:[h],data(){return{registerNumber:null,registerChar1:"\u0410",registerChar2:"\u0410",characters:[{value:"\u0410",label:"\u0410"},{value:"\u0411",label:"\u0411"},{value:"\u0412",label:"\u0412"},{value:"\u0413",label:"\u0413"},{value:"\u0414",label:"\u0414"},{value:"\u0415",label:"\u0415"},{value:"\u0401",label:"\u0401"},{value:"\u0416",label:"\u0416"},{value:"\u0417",label:"\u0417"},{value:"\u0418",label:"\u0418"},{value:"\u0419",label:"\u0419"},{value:"\u041A",label:"\u041A"},{value:"\u041B",label:"\u041B"},{value:"\u041C",label:"\u041C"},{value:"\u041D",label:"\u041D"},{value:"\u041E",label:"\u041E"},{value:"\u04E8",label:"\u04E8"},{value:"\u041F",label:"\u041F"},{value:"\u0420",label:"\u0420"},{value:"\u0421",label:"\u0421"},{value:"\u0422",label:"\u0422"},{value:"\u0423",label:"\u0423"},{value:"\u04AE",label:"\u04AE"},{value:"\u0424",label:"\u0424"},{value:"\u0425",label:"\u0425"},{value:"\u0426",label:"\u0426"},{value:"\u0427",label:"\u0427"},{value:"\u0428",label:"\u0428"},{value:"\u0429",label:"\u0429"},{value:"\u042A",label:"\u042A"},{value:"\u042B",label:"\u042B"},{value:"\u042C",label:"\u042C"},{value:"\u042D",label:"\u042D"},{value:"\u042E",label:"\u042E"},{value:"\u042F",label:"\u042F"}]}},computed:{registerLocal(){return this.model.form[this.model.component]}},mounted(){this.init(this.model.form[this.model.component])},watch:{registerLocal(e,l){this.init(e)}},methods:{onlyNumbers(e){return/^[0-9]+$/.test(e)},init(e){if(e){let l=e.charAt(0);this.registerChar1={value:l,label:l};let r=e.charAt(1);this.registerChar2={value:r,label:r},this.registerNumber=e.substring(2,10)}else this.registerNumber=null,this.registerChar1="\u0410",this.registerChar2="\u0410"},registerChanged(){if(this.registerNumber&&this.registerChar1&&this.registerChar2){let e=this.registerChar1+this.registerChar2;if(this.onlyNumbers(this.registerNumber)){let l=this.registerNumber.substring(0,8),r=e+l;this.registerNumber.length>8?this.registerNumber=l:r.length===10?this.model.form[this.model.component]=r:this.model.form[this.model.component]=null}else this.model.form[this.model.component]=null,this.registerNumber=null}else this.model.form[this.model.component]=null}}},f=p("div",{style:{width:"20px",display:"inline-block"}},null,-1);function C(e,l,r,N,a,s){const n=o("a-select"),m=o("a-input"),b=o("lambda-form-item");return g(),v(b,{label:e.label,name:e.model.component,meta:e.meta},{default:u(()=>[i(m,{disabled:e.disabled,onChange:s.registerChanged,class:"register-field",value:a.registerNumber,"onUpdate:value":l[2]||(l[2]=t=>a.registerNumber=t)},{addonBefore:u(()=>[i(n,{value:a.registerChar1,"onUpdate:value":l[0]||(l[0]=t=>a.registerChar1=t),disabled:e.disabled,options:a.characters,onChange:s.registerChanged,"show-search":""},null,8,["value","disabled","options","onChange"]),f,i(n,{value:a.registerChar2,"onUpdate:value":l[1]||(l[1]=t=>a.registerChar2=t),disabled:e.disabled,options:a.characters,onChange:s.registerChanged,"show-search":""},null,8,["value","disabled","options","onChange"])]),_:1},8,["disabled","onChange","value"])]),_:1},8,["label","name","meta"])}const A=d(c,[["render",C]]);export{A as default};
