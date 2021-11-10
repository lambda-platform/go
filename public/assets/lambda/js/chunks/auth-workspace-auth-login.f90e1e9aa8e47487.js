"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6813],{31917:(s,t,e)=>{e.r(t),e.d(t,{default:()=>a});const i={computed:{lang:function(){var s=this,t=["loginError","loginSuccess","forgot","login","remember","password","username","loginTitle","pleaseLogInUsingYourRegUnamePassword"];return t.reduce((function(e,i,a){return e[i]=s.$t("user."+t[a]),e}),{})}},props:["selectedLang"],name:"aside-login",data:function(){return{loading:!1,isSuccess:!1,isError:!1,credentials:{login:null,password:null},lambda:window.lambda}},methods:{onSubmit:function(){var s=this;this.isSuccess=!1,this.isError=!1,this.loading||(this.loading=!0,axios.post("/auth/login",this.credentials).then((function(t){var e=t.data;setTimeout((function(){s.loading=!1,e.status?(s.isSuccess=!0,setTimeout((function(){window.location=e.path}),600)):s.isError=!0}),1e3)})).catch((function(t){setTimeout((function(){s.loading=!1,s.isError=!0}),1e3)})))}}};const a=(0,e(51900).Z)(i,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"form-content"},[e("h2",[s._v(s._s(s.lang.loginTitle))]),s._v(" "),e("h5",[s._v(s._s(s.lang.pleaseLogInUsingYourRegUnamePassword))]),s._v(" "),e("form",{staticClass:"login-form",attrs:{id:"authForm",method:"post"},on:{submit:function(t){return t.preventDefault(),s.onSubmit.apply(null,arguments)}}},[e("div",{staticClass:"form-element input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.credentials.login,expression:"credentials.login"}],attrs:{type:"text",disabled:s.loading,placeholder:s.lang.username},domProps:{value:s.credentials.login},on:{input:function(t){t.target.composing||s.$set(s.credentials,"login",t.target.value)}}}),s._v(" "),e("span",{staticClass:"icon user"})]),s._v(" "),e("div",{staticClass:"form-element input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.credentials.password,expression:"credentials.password"}],attrs:{type:"password",disabled:s.loading,placeholder:s.lang.password},domProps:{value:s.credentials.password},on:{input:function(t){t.target.composing||s.$set(s.credentials,"password",t.target.value)}}}),s._v(" "),e("span",{staticClass:"icon pass"})]),s._v(" "),e("div",{staticClass:"form-element"},[e("input",{staticClass:"checkbox",attrs:{type:"checkbox",id:"remember_me"}}),s._v(" "),e("label",{attrs:{for:"remember_me"}},[s._v(s._s(s.lang.remember))])]),s._v(" "),e("div",{staticClass:"form-element action"},[e("button",{staticClass:"button",attrs:{id:"submit",disabled:s.loading}},[e("span",{attrs:{id:"submitTxt"}},[s._v(s._s(s.lang.login))]),s._v(" "),e("span",{staticClass:"loader"},[s.loading?e("div",{staticClass:"sk-fading-circle"},[e("div",{staticClass:"sk-circle1 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle2 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle3 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle4 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle5 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle6 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle7 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle8 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle9 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle10 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle11 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle12 sk-circle"})]):s._e()])]),s._v(" "),e("p",[e("router-link",{staticClass:"forgot",attrs:{to:"/forgot"}},[s._v(s._s(s.lang.forgot))])],1)])]),s._v(" "),e("div",{attrs:{id:"msg"}},[s.isSuccess?e("span",{staticClass:"success"},[s._v(s._s(s.lang.loginSuccess))]):s._e(),s._v(" "),s.isError?e("span",{staticClass:"error"},[s._v(s._s(s.lang.loginError))]):s._e()])])}),[],!1,null,null,null).exports},51900:(s,t,e)=>{function i(s,t,e,i,a,n,r,o){var l,c="function"==typeof s?s.options:s;if(t&&(c.render=t,c.staticRenderFns=e,c._compiled=!0),i&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),r?(l=function(s){(s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(s=__VUE_SSR_CONTEXT__),a&&a.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(r)},c._ssrRegister=l):a&&(l=o?function(){a.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(s,t){return l.call(t),d(s,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:s,options:c}}e.d(t,{Z:()=>i})}}]);
//# sourceMappingURL=auth-workspace-auth-login.f90e1e9aa8e47487.js.map