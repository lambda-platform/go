import{m as v}from"./_mixin.7d945018.js";import{a as g,r as o,o as s,c as p,w as l,f as i,e as k,m as B,h,t as f,F as y,i as F}from"./entry.dda881ff.js";const N={mixins:[v],methods:{},data(){return{other:""}},computed:{lang(){const e=["pleaseWriting","other"];return e.reduce((t,m,d)=>(t[m]=this.$t("dataForm."+e[d]),t),{})},options(){if(this.other=this.model.form[this.model.component],this.meta.options.length>=1)return this.meta.options;if(this.relations)return this.relations[this.meta.relation.table]?this.relations[this.meta.relation.table].data?this.relations[this.meta.relation.table].data:[]:[]}}};function V(e,t,m,d,n,r){const u=o("a-radio"),c=o("a-input"),_=o("a-radio-group"),b=o("lambda-form-item");return s(),p(b,{label:e.label,name:e.model.component,meta:e.meta},{default:l(()=>[i(_,{value:e.model.form[e.model.component],"onUpdate:value":t[1]||(t[1]=a=>e.model.form[e.model.component]=a)},{default:l(()=>[(s(!0),k(y,null,B(r.options,a=>(s(),p(u,{value:a.value,key:a.index,disabled:e.disabled},{default:l(()=>[h("span",null,f(a.label),1)]),_:2},1032,["value","disabled"]))),128)),i(u,{value:n.other},{default:l(()=>[h("span",null,[F(f(r.lang.other)+": ",1),i(c,{type:"text",value:n.other,"onUpdate:value":t[0]||(t[0]=a=>n.other=a),placeholder:r.lang.pleaseWriting},null,8,["value","placeholder"])])]),_:1},8,["value"])]),_:1},8,["value"])]),_:1},8,["label","name","meta"])}const x=g(N,[["render",V]]);export{x as default};