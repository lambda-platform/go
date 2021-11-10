"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8148],{52613:(s,t,e)=>{e.r(t),e.d(t,{default:()=>a});const i={props:["selectedLang"],name:"aside-forgot",data:()=>({loading:!1,isSuccess:!1,isError:!1,errorMsg:"",successMsg:"",credentials:{email:null},lambda:window.lambda}),computed:{lang(){const s=["forgot","sendPasswordResetCode","forgotDescription","email","plseResUrPassUsingUrRegisteredEmail"];return s.reduce(((t,e,i)=>(t[e]=this.$t("user."+s[i]),t)),{})},_errorMassage(){const s=["errorSendingMail"];return s.reduce(((t,e,i)=>(t[e]=this.$t("alertMessage."+s[i]),t)),{})}},methods:{onSubmit(){this.isSuccess=!1,this.isError=!1,this.loading||(this.loading=!0,axios.post("/auth/send-forgot-mail",{...this.credentials,lang:this.selectedLang}).then((({data:s})=>{setTimeout((()=>{this.loading=!1,s.status?(this.isSuccess=!0,this.successMsg=s.msg,setTimeout((()=>{this.$router.push("password-reset")}),2100)):(this.isError=!0,this.errorMsg=this._errorMassage.errorSendingMail)}),1e3)})).catch((s=>{this.errorMsg=s.response.data.error,setTimeout((()=>{this.loading=!1,this.isError=!0}),1e3)})))}}};const a=(0,e(51900).Z)(i,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"form-content"},[""!=s.lambda.logoText?e("div",{staticClass:"logo with-text"},[e("img",{attrs:{src:s.lambda.logo,alt:""}}),s._v(" "),e("span",[s._v(s._s(s.lambda.logoText))])]):e("div",{staticClass:"logo"},[e("img",{attrs:{src:s.lambda.logo,alt:""}})]),s._v(" "),e("h2",[s._v(s._s(s.lang.forgot))]),s._v(" "),e("p",{staticClass:"login-description"},[s._v(s._s(s.lang.plseResUrPassUsingUrRegisteredEmail))]),s._v(" "),e("form",{staticClass:"login-form",attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),s.onSubmit.apply(null,arguments)}}},[e("div",{staticClass:"form-element input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.credentials.email,expression:"credentials.email"}],attrs:{type:"text",id:"email",name:"email",autocomplete:"off",placeholder:s.lang.email},domProps:{value:s.credentials.email},on:{input:function(t){t.target.composing||s.$set(s.credentials,"email",t.target.value)}}}),s._v(" "),e("span",{staticClass:"icon user"})]),s._v(" "),e("div",{staticClass:"form-element"},[e("label",{staticStyle:{"font-size":"12px"}},[s._v(s._s(s.lang.forgotDescription))])]),s._v(" "),e("div",{staticClass:"form-element login-btn"},[e("button",{staticClass:"button",staticStyle:{width:"100%"},attrs:{id:"submit",disabled:s.loading}},[e("span",{attrs:{id:"submitTxt"}},[s._v(s._s(s.lang.sendPasswordResetCode))]),s._v(" "),e("span",{staticClass:"loader"},[s.loading?e("div",{staticClass:"sk-fading-circle"},[e("div",{staticClass:"sk-circle1 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle2 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle3 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle4 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle5 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle6 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle7 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle8 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle9 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle10 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle11 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle12 sk-circle"})]):s._e()])])])]),s._v(" "),e("div",{attrs:{id:"msg"}},[s.isSuccess?e("span",{staticClass:"success"},[s._v(s._s(s.successMsg))]):s._e(),s._v(" "),s.isError?e("span",{staticClass:"error"},[s._v(s._s(s.errorMsg))]):s._e()])])}),[],!1,null,null,null).exports},51900:(s,t,e)=>{function i(s,t,e,i,a,r,l,c){var o,n="function"==typeof s?s.options:s;if(t&&(n.render=t,n.staticRenderFns=e,n._compiled=!0),i&&(n.functional=!0),r&&(n._scopeId="data-v-"+r),l?(o=function(s){(s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(s=__VUE_SSR_CONTEXT__),a&&a.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(l)},n._ssrRegister=o):a&&(o=c?function(){a.call(this,(n.functional?this.parent:this).$root.$options.shadowRoot)}:a),o)if(n.functional){n._injectStyles=o;var d=n.render;n.render=function(s,t){return o.call(t),d(s,t)}}else{var u=n.beforeCreate;n.beforeCreate=u?[].concat(u,o):[o]}return{exports:s,options:n}}e.d(t,{Z:()=>i})}}]);