import{a as o}from"./entry.8f24994f.js";import{Y as s,Z as n,$ as t,a1 as l,F as c,a0 as d,a5 as r,a2 as _,P as g,a7 as u}from"./vue.7ad865ae.js";import"./ant.0262516a.js";import"./moment.8b5e7d95.js";import"./cryptoJs.ca7fe49a.js";import"./numeral.909ed99a.js";import"./common.67fd9ef6.js";const h={props:["lambda","subTitle","languages","copyright","title","selectedLang","switchLanguage"],data(){return{loading:!1,isSuccess:!1,isError:!1,credentials:{login:null,password:null}}}},m={class:"content"},y=t("div",{class:"content-layer"},null,-1),f={class:"title"},v={style:{"max-width":"600px"}},x={class:"auth"},b={key:0,class:"lang-switcher"},k=["onClick"],p={class:"form-wrap"},w=["innerHTML"];function L(i,C,e,S,T,B){return s(),n("div",{class:"login aside-theme",style:u({backgroundImage:"url("+e.lambda.bg+")"})},[t("div",m,[y,t("div",f,[t("h2",v,l(e.title),1),t("p",null,l(e.subTitle),1)])]),t("div",x,[e.lambda.has_language&&e.languages.length>=2?(s(),n("div",b,[(s(!0),n(c,null,d(e.languages,a=>(s(),n("a",{key:a.index,class:r(e.selectedLang===a.code?"active":""),onClick:z=>e.switchLanguage(a.code)},l(a.label),11,k))),128))])):_("",!0),t("div",p,[g(i.$slots,"default"),t("div",{class:"copyright",style:{width:"70%","text-align":"center"},innerHTML:e.copyright},null,8,w)])])],4)}const I=o(h,[["render",L]]);export{I as default};
