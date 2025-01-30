import{_ as S}from"./BASDkySC.js";import{_ as C,h as m}from"./Dp5pR5g4.js";import{o as i,q as u,x as _,y as e,D as n,z as t,A as a,E as f,C as x}from"./Bb3cLOD_.js";import"./DTdGTy9U.js";import"./BYTvHWBW.js";import"./CU0CZyNU.js";const N={props:["lambda","onSuccess","selectedLang","onError"],name:"aside-login",data(){return{loading:!1,isSuccess:!1,isError:!1,rememberMe:!1,credentials:{login:null,password:null}}},computed:{lang(){const r=["loginTitle","username","password","remember","login","forgot","loginSuccess","loginError"];return r.reduce((l,c,g)=>(l[c]=this.$t("user."+r[g]),l),{})}},methods:{onSubmit(){this.isSuccess=!1,this.isError=!1,this.loading||(this.loading=!0,m.defaults.headers.common.Authorization="",m.defaults.withCredentials=!0,m.post("/auth/login",this.credentials).then(({data:r})=>{r.status?this.onSuccess(r):(this.isError=!0,this.loading=!1)}).catch(r=>{this.loading=!1,this.isError=!0,this.onError&&this.onError()}))}}},T={class:"form-content"},U={key:0,class:"logo with-text"},V=["src"],q={key:1,class:"logo"},B=["src"],L={class:"space-y-6"},M={class:"loginInput"},z={class:"pb-2 text-slate-700"},A={class:"svg-icon"},D={class:"pb-2 text-slate-700"},G={class:"svg-icon"},I={class:"flex flex-row justify-between space-x-4"},j={class:"text-slate-700"},F={class:""},H={id:"msg"},J={key:0,class:"success"},K={key:1,class:"error"};function O(r,l,c,g,o,s){const h=i("inline-svg"),v=i("a-input"),p=i("a-form-item"),b=i("a-input-password"),w=i("a-checkbox"),k=S,y=i("a-button"),E=i("a-form");return u(),_("div",T,[c.lambda.logoText!=""?(u(),_("div",U,[e("img",{src:c.lambda.logo,alt:""},null,8,V),e("span",null,n(c.lambda.logoText),1)])):(u(),_("div",q,[e("img",{src:c.lambda.logo,alt:""},null,8,B)])),e("h2",null,n(s.lang.loginTitle),1),t(E,{class:"mx-auto",model:o.credentials,layout:"vertical",autocomplete:"off"},{default:a(()=>[e("div",L,[e("div",M,[t(p,{name:"login",rules:[{required:!0,message:s.lang.username}]},{default:a(()=>[e("div",z,n(s.lang.username),1),t(v,{type:"text",placeholder:s.lang.username,value:o.credentials.login,"onUpdate:value":l[0]||(l[0]=d=>o.credentials.login=d)},{prefix:a(()=>[e("span",A,[t(h,{class:"w-4 h-4 mr-1",src:"/assets/icons/duotone/General/User.svg"})])]),_:1},8,["placeholder","value"])]),_:1},8,["rules"]),t(p,{name:"password",rules:[{required:!0,message:s.lang.password}]},{default:a(()=>[e("div",D,n(s.lang.password),1),t(b,{placeholder:s.lang.password,value:o.credentials.password,"onUpdate:value":l[1]||(l[1]=d=>o.credentials.password=d)},{prefix:a(()=>[e("span",G,[t(h,{class:"w-4 h-4 mr-1",src:"/assets/icons/duotone/General/Lock.svg"})])]),_:1},8,["placeholder","value"])]),_:1},8,["rules"]),e("div",I,[t(w,{checked:o.rememberMe,"onUpdate:checked":l[2]||(l[2]=d=>o.rememberMe=d),id:"remember_me"},{default:a(()=>[e("span",j,n(s.lang.remember),1)]),_:1},8,["checked"]),t(k,{class:"forgot",to:"/auth/forgot"},{default:a(()=>[f(n(s.lang.forgot),1)]),_:1})])]),e("div",F,[t(y,{type:"primary",class:"w-full",loading:o.loading,style:{"border-radius":"8px",height:"38px"},onClick:s.onSubmit,"html-type":"submit"},{default:a(()=>[f(n(s.lang.login),1)]),_:1},8,["loading","onClick"])]),e("div",H,[o.isSuccess?(u(),_("span",J,n(s.lang.loginSuccess),1)):x("",!0),o.isError?(u(),_("span",K,n(s.lang.loginError),1)):x("",!0)])])]),_:1},8,["model"])])}const Z=C(N,[["render",O]]);export{Z as default};
