import{a as h}from"./common.6a974f5f.js";import{Y as r,Z as c,_ as s,a2 as d,B as _,v as a,a8 as n,a1 as p,al as f}from"./vue.af4c1aff.js";import{a as v}from"./entry.d62cc07b.js";import"./ant.1e7698c3.js";import"./moment.8b5e7d95.js";import"./ag.ed4f9fb5.js";import"./lodash.e407703a.js";import"./numeral.035c4f8b.js";import"./cryptoJs.7428ec8d.js";const g={props:["selectedLang"],name:"aside-password-reset",data(){return{loading:!1,isSuccess:!1,isError:!1,errorMsg:"",successMsg:"",credentials:{code:null,email:null,password:null,password_confirm:null}}},computed:{lang(){const o=["passwordReset","passwordResetCode","email","password","passwordConfirm"];return o.reduce((i,u,m)=>(i[u]=this.$t("user."+o[m]),i),{})}},methods:{onSubmit(){this.isSuccess=!1,this.isError=!1,this.loading||(this.loading=!0,h.post("/auth/password-reset",{...this.credentials,lang:this.selectedLang}).then(({data:o})=>{setTimeout(()=>{this.loading=!1,o.status?(this.isSuccess=!0,this.successMsg=o.msg,setTimeout(()=>{this.$router.push("login")},2e3)):(this.isError=!0,this.errorMsg=this.lang.emailSendError)},1e3)}).catch(o=>{this.errorMsg=o.response.data.error,setTimeout(()=>{this.loading=!1,this.isError=!0},1e3)}))}}},k={class:"form-wrap"},w={class:"form-content"},b={class:"form-element input"},S=["placeholder"],y=s("span",{class:"icon pass"},null,-1),M={class:"form-element input"},x=["placeholder"],E=s("span",{class:"icon user"},null,-1),V={class:"form-element input"},R=["disabled","placeholder"],C=s("span",{class:"icon pass"},null,-1),T={class:"form-element input"},B=["disabled","placeholder"],U=s("span",{class:"icon pass"},null,-1),N={class:"form-element"},D=["disabled"],L={id:"submitTxt"},Y={class:"loader"},Z={key:0,class:"sk-fading-circle"},q=f('<div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div>',12),z=[q],A={id:"msg"},F={key:0,class:"success"},G={key:1,class:"error"};function H(o,i,u,m,e,t){return r(),c("div",k,[s("div",w,[s("h2",null,d(t.lang.passwordReset),1),s("form",{onSubmit:i[4]||(i[4]=_((...l)=>t.onSubmit&&t.onSubmit(...l),["prevent"])),method:"post",class:"login-form"},[s("div",b,[a(s("input",{type:"text",id:"code","onUpdate:modelValue":i[0]||(i[0]=l=>e.credentials.code=l),name:"code",autocomplete:"off",placeholder:t.lang.passwordResetCode},null,8,S),[[n,e.credentials.code]]),y]),s("div",M,[a(s("input",{type:"text",id:"email","onUpdate:modelValue":i[1]||(i[1]=l=>e.credentials.email=l),name:"email",autocomplete:"off",placeholder:t.lang.email},null,8,x),[[n,e.credentials.email]]),E]),s("div",V,[a(s("input",{type:"password","onUpdate:modelValue":i[2]||(i[2]=l=>e.credentials.password=l),disabled:e.loading,placeholder:t.lang.password},null,8,R),[[n,e.credentials.password]]),C]),s("div",T,[a(s("input",{type:"password","onUpdate:modelValue":i[3]||(i[3]=l=>e.credentials.password_confirm=l),disabled:e.loading,placeholder:t.lang.passwordConfirm},null,8,B),[[n,e.credentials.password_confirm]]),U]),s("div",N,[s("button",{id:"submit",class:"button",disabled:e.loading,style:{width:"100%"}},[s("span",L,d(t.lang.passwordReset),1),s("span",Y,[e.loading?(r(),c("div",Z,z)):p("",!0)])],8,D)])],32),s("div",A,[e.isSuccess?(r(),c("span",F,d(e.successMsg),1)):p("",!0),e.isError?(r(),c("span",G,d(e.errorMsg),1)):p("",!0)])])])}const $=v(g,[["render",H]]);export{$ as default};
