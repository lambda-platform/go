import{m as ye}from"./_mixin.fc52ef4e.js";import{av as _,aB as _e,ay as we,aA as q,as as G,aD as H,am as c,aF as xe,aG as Fe,aH as Se,aI as Q,aJ as Ne,aK as Te,a as Be}from"./entry.f024038a.js";import{c as Pe,B as Ie,M as h,o as Ae,d as x}from"./Modal.0b3ad7ef.js";import{k as I,t as Y,d as Z,o as Oe,f as r,m as J,W as F,a3 as B,$ as w,a5 as Ve,a0 as O,a2 as P,X as Me,S as y}from"./vue.8156bfac.js";import"./ant.e4101cc5.js";import"./moment.8b5e7d95.js";import"./cryptoJs.7e1396ed.js";import"./numeral.417254ec.js";import"./common.3f2e1dd9.js";var De=function(){var e=I(!1);return Y(function(){e.value=!0}),e};const Re=De;var Ee={type:{type:String},actionFn:Function,close:Function,autofocus:Boolean,prefixCls:String,buttonProps:Object,emitEvent:Boolean,quitOnNullishReturnValue:Boolean};function K(t){return!!(t&&!!t.then)}const X=Z({name:"ActionButton",props:Ee,setup:function(e,f){var i=f.slots,l=I(!1),u=I(),d=I(!1),C,p=Re();Oe(function(){e.autofocus&&(C=setTimeout(function(){var n;return(n=u.value.$el)===null||n===void 0?void 0:n.focus()}))}),Y(function(){clearTimeout(C)});var g=function(a){var o=e.close;!K(a)||(d.value=!0,a.then(function(){p.value||(d.value=!1),o.apply(void 0,arguments),l.value=!1},function(m){console.error(m),p.value||(d.value=!1),l.value=!1}))},s=function(a){var o=e.actionFn,m=e.close,b=m===void 0?function(){}:m;if(!l.value){if(l.value=!0,!o){b();return}var v;if(e.emitEvent){if(v=o(a),e.quitOnNullishReturnValue&&!K(v)){l.value=!1,b(a);return}}else if(o.length)v=o(b),l.value=!1;else if(v=o(),!v){b();return}g(v)}};return function(){var n=e.type,a=e.prefixCls,o=e.buttonProps;return r(Ie,_(_(_({},Pe(n)),{},{onClick:s,loading:d.value,prefixCls:a},o),{},{ref:u}),i)}}});function S(t){return typeof t=="function"?t():t}const ze=Z({name:"ConfirmDialog",inheritAttrs:!1,props:["icon","onCancel","onOk","close","closable","zIndex","afterClose","visible","keyboard","centered","getContainer","maskStyle","okButtonProps","cancelButtonProps","okType","prefixCls","okCancel","width","mask","maskClosable","okText","cancelText","autoFocusButton","transitionName","maskTransitionName","type","title","content","direction","rootPrefixCls","bodyStyle","closeIcon","modalRender","focusTriggerAfterClose","wrapClassName"],setup:function(e,f){var i=f.attrs,l=_e("Modal"),u=we(l,1),d=u[0];return function(){var C=e.icon,p=e.onCancel,g=e.onOk,s=e.close,n=e.closable,a=n===void 0?!1:n,o=e.zIndex,m=e.afterClose,b=e.visible,v=e.keyboard,V=e.centered,te=e.getContainer,ne=e.maskStyle,oe=e.okButtonProps,le=e.cancelButtonProps,M=e.okCancel,D=M===void 0?!0:M,R=e.width,ae=R===void 0?416:R,E=e.mask,re=E===void 0?!0:E,z=e.maskClosable,ie=z===void 0?!1:z,j=e.type,L=e.title,se=e.content,ce=e.direction,ue=e.closeIcon,de=e.modalRender,fe=e.focusTriggerAfterClose,T=e.rootPrefixCls,me=e.bodyStyle,he=e.wrapClassName,ve=e.okType||"primary",A=e.prefixCls||"ant-modal",k="".concat(A,"-confirm"),Ce=i.style||{},pe=S(e.okText)||(D?d.value.okText:d.value.justOkText),be=S(e.cancelText)||d.value.cancelText,W=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",ke=q(k,"".concat(k,"-").concat(j),"".concat(A,"-").concat(j),G({},"".concat(k,"-rtl"),ce==="rtl"),i.class),ge=D&&r(X,{actionFn:p,close:s,autofocus:W==="cancel",buttonProps:le,prefixCls:"".concat(T,"-btn")},{default:function(){return[be]}});return r(h,{prefixCls:A,class:ke,wrapClassName:q(G({},"".concat(k,"-centered"),!!V),he),onCancel:function($){return s({triggerCancel:!0},$)},visible:b,title:"",footer:"",transitionName:H(T,"zoom",e.transitionName),maskTransitionName:H(T,"fade",e.maskTransitionName),mask:re,maskClosable:ie,maskStyle:ne,style:Ce,bodyStyle:me,width:ae,zIndex:o,afterClose:m,keyboard:v,centered:V,getContainer:te,closable:a,closeIcon:ue,modalRender:de,focusTriggerAfterClose:fe},{default:function(){return[r("div",{class:"".concat(k,"-body-wrapper")},[r("div",{class:"".concat(k,"-body")},[S(C),L===void 0?null:r("span",{class:"".concat(k,"-title")},[S(L)]),r("div",{class:"".concat(k,"-content")},[S(se)])]),r("div",{class:"".concat(k,"-btns")},[ge,r(X,{type:ve,actionFn:g,close:s,autofocus:W==="ok",buttonProps:oe,prefixCls:"".concat(T,"-btn")},{default:function(){return[pe]}})])])]}})}}});var je=function(e){var f=document.createDocumentFragment(),i=c(c({},Ae(e,["parentContext","appContext"])),{close:d,visible:!0}),l=null;function u(){l&&(J(null,f),l.component.update(),l=null);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];var o=n.some(function(v){return v&&v.triggerCancel});e.onCancel&&o&&e.onCancel.apply(e,n);for(var m=0;m<x.length;m++){var b=x[m];if(b===d){x.splice(m,1);break}}}function d(){for(var s=this,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];i=c(c({},i),{visible:!1,afterClose:function(){typeof e.afterClose=="function"&&e.afterClose(),u.apply(s,a)}}),C(i)}function C(s){typeof s=="function"?i=s(i):i=c(c({},i),s),l&&(c(l.component.props,i),l.component.update())}var p=function(n){var a=Te,o=a.prefixCls,m=n.prefixCls||"".concat(o,"-modal");return r(Ne,_(_({},a),{},{notUpdateGlobalConfig:!0,prefixCls:o}),{default:function(){return[r(ze,_(_({},n),{},{rootPrefixCls:o,prefixCls:m}),null)]}})};function g(s){var n=r(p,c({},s));return n.appContext=e.parentContext||e.appContext||n.appContext,J(n,f),n}return l=g(i),x.push(d),{destroy:d,update:C}};const N=je;function Le(t){return c(c({icon:function(){return r(Q,null,null)},okCancel:!1},t),{type:"warning"})}function We(t){return c(c({icon:function(){return r(xe,null,null)},okCancel:!1},t),{type:"info"})}function Ue(t){return c(c({icon:function(){return r(Fe,null,null)},okCancel:!1},t),{type:"success"})}function $e(t){return c(c({icon:function(){return r(Se,null,null)},okCancel:!1},t),{type:"error"})}function qe(t){return c(c({icon:function(){return r(Q,null,null)},okCancel:!0},t),{type:"confirm"})}function ee(t){return N(Le(t))}h.info=function(e){return N(We(e))};h.success=function(e){return N(Ue(e))};h.error=function(e){return N($e(e))};h.warning=ee;h.warn=ee;h.confirm=function(e){return N(qe(e))};h.destroyAll=function(){for(;x.length;){var e=x.pop();e&&e()}};h.install=function(t){return t.component(h.name,h),t};const Ge={mixins:[ye],components:{"a-modal":h},computed:{lang(){const t=["dataNotFound"];return t.reduce((e,f,i)=>(e[f]=this.$t("dataForm."+t[i]),e),{})},addAble(){return this.meta.relation.addAble&&this.meta.relation.addFrom},selectClass(){let t="";return this.meta.info_url&&this.model.form[this.model.component]&&(t=t+" with-info-caller "),this.addAble&&(t=t+" addable-select "),t}},data(){return{selectValue:null,modal_show:!1}},methods:{changeValue(t){t!=null?this.meta.relation.multiple===!0?this.model.form[this.model.component]=t.join(","):t===""?this.model.form[this.model.component]=null:isNaN(t)?this.model.form[this.model.component]=t:this.model.form[this.model.component]=t*1:this.model.form[this.model.component]=null},addFromUrl(){if(window.init)if(window.init.microserviceSettings){let t=window.init.microserviceSettings.findIndex(e=>e.project_id==this.meta.relation.addFromMicroservice);return t>=0?window.init.microserviceSettings[t].production_url:this.url}else return this.url;else return this.url},showAddModal(){this.modal_show=!0},closeModal(){this.modal_show=!1},onSuccess(t){let e=this.meta.relation.fields.map(i=>t[i]);e=e.join(", ");let f={value:t[this.meta.relation.key],label:e};this.meta.relation.parentFieldOfTable!==""&&this.meta.relation.parentFieldOfForm!==""&&(f.parent_value=t[this.meta.relation.parentFieldOfTable].toString()),this.relation_data(this.meta).push(f),this.closeModal()},onError(t){},showInfoModal(){this.model.form[this.model.component]&&window.showInformationModal(`${this.meta.info_url}${this.model.form[this.model.component]}`,this.meta.placeHolder)},search(t){console.log(t)},initialValue(t){this.model.form[this.model.component]?this.model.form[this.meta.relation.parentFieldOfForm]?t.findIndex(f=>f.value===this.model.form[this.model.component])>=0?this.setSelectValue():this.setNull():this.setSelectValue():this.setNull()},setSelectValue(){this.meta.relation.multiple===!0&&this.model.form[this.model.component]!==""?this.selectValue=this.model.form[this.model.component].split(",").map(t=>isNaN(t)?t:t*1):this.selectValue=this.model.form[this.model.component]},setNull(){this.meta.relation.multiple===!0?this.selectValue=[]:this.selectValue=null}},watch:{do_render(t){t||(this.value=null,this.clearAble=!1,this.ignoreChange=!1)}}},He={class:"svg-icon"},Je={class:"svg-icon"},Ke={key:0,class:"add-modal"},Xe={class:"add-body"};function Qe(t,e,f,i,l,u){const d=y("a-select"),C=y("inline-svg"),p=y("a-button"),g=y("a-input-group"),s=y("dataform"),n=y("a-modal"),a=y("lambda-form-item");return F(),B(a,{label:t.label,name:t.model.component,meta:t.meta},{default:w(()=>[r(g,{compact:""},{default:w(()=>[r(d,{value:l.selectValue,"onUpdate:value":e[0]||(e[0]=o=>l.selectValue=o),disabled:t.disabled,autocomplete:"off",allowClear:"",showSearch:"",options:t.options,optionFilterProp:"label",optionLabelProp:"label",mode:t.meta.relation.multiple?"multiple":void 0,onChange:u.changeValue,placeholder:t.placeholder,class:Ve(u.selectClass)},null,8,["value","disabled","options","mode","onChange","placeholder","class"]),u.addAble?(F(),B(p,{key:0,onClick:u.showAddModal},{icon:w(()=>[O("span",He,[r(C,{src:"/assets/icons/duotune/general/gen041.svg"})])]),_:1},8,["onClick"])):P("",!0),t.meta.info_url&&t.model.form[t.model.component]?(F(),B(p,{key:1,onClick:u.showInfoModal},{icon:w(()=>[O("span",Je,[r(C,{src:"/assets/icons/duotone/Code/Info-circle.svg"})])]),_:1},8,["onClick"])):P("",!0)]),_:1}),u.addAble?(F(),B(n,{key:0,"min-width":200,"min-height":100,draggable:!0,"footer-hide":!0,title:t.label,width:"800",height:"70%",visible:l.modal_show,"onUpdate:visible":e[1]||(e[1]=o=>l.modal_show=o)},{footer:w(()=>[]),default:w(()=>[l.modal_show?(F(),Me("section",Ke,[O("div",Xe,[r(s,{ref:"form",schemaID:t.meta.relation.addFrom,editMode:!1,onSuccess:u.onSuccess,url:u.addFromUrl(),do_render:l.modal_show,onError:u.onError},null,8,["schemaID","onSuccess","url","do_render","onError"])])])):P("",!0)]),_:1},8,["title","visible"])):P("",!0)]),_:1},8,["label","name","meta"])}const it=Be(Ge,[["render",Qe]]);export{it as default};
