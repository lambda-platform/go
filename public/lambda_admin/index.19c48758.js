import{a as r,o as l,e as n,h as e,t as o,F as u,m as _,k as g,l as h,aW as v,ac as m}from"./entry.dda881ff.js";const b={props:["lambda","subTitle","languages","copyright","title","selectedLang","switchLanguage"],name:"default",data(){return{loading:!1,isSuccess:!1,isError:!1,credentials:{login:null,password:null}}},computed:{lang(){const a=["title","subtitle"];return a.reduce((c,s,i)=>(c[s]=this.$t("user."+a[i]),c),{})}}},f={class:"wrap"},k={class:"content"},y=e("div",{class:"content-blur"},null,-1),p=e("div",{class:"content-color-layer"},null,-1),w={id:"slideshow"},x={class:"one"},L={class:"auth"},S=e("div",{class:"auth-blur"},null,-1),C=e("div",{class:"auth-color-layer"},null,-1),z={key:0,class:"lang-switcher"},B=["onClick"];function E(a,c,s,i,F,d){return l(),n("div",{class:"login default-theme",style:m({backgroundImage:"url("+s.lambda.bg+")",backgroundSize:"cover",backgroundPosition:"center top"})},[e("div",f,[e("div",k,[y,p,e("div",w,[e("div",x,[e("h2",null,[e("span",null,o(d.lang.title),1)]),e("p",null,o(d.lang.subtitle),1)])])]),e("div",L,[S,C,s.lambda.has_language&&s.languages.length>=2?(l(),n("div",z,[(l(!0),n(u,null,_(s.languages,t=>(l(),n("a",{key:t.index,class:g(s.selectedLang==t.value?"active":""),href:"javascript:void(0)",onClick:N=>s.switchLanguage(t.code)},o(t.label),11,B))),128))])):h("",!0),v(a.$slots,"default")])])],4)}const D=r(b,[["render",E]]);export{D as default};