import{a as H,c as I,s as k,K as N,P as R,L as C,M as $,i as B,b as D,d as S}from"./entry.bd917c2d.js";import{U as m,Y as s,Z as n,aa as h,a7 as t,a8 as r,_ as d,a6 as a,F as c,a5 as y,H as b,a4 as v,c as _}from"./vue.9a5b07a3.js";import"./cryptoJs.12d0d048.js";import"./ant.9c0b679d.js";import"./common.a3ab4f3b.js";import"./moment.8b5e7d95.js";import"./ag.16cfe0bb.js";import"./lodash.2101602c.js";import"./numeral.08866ac3.js";const L=["href"],V={key:2,class:"module-menus"},A={key:0},E={key:2,class:"module-menus"},F={key:0},U={key:2,class:"module-menus"},K={key:0};function O(e,T,f,i,u,M){const g=m("inline-svg"),p=m("router-link"),w=m("HomeMenuRender",!0);return s(),n(c,null,[e.can(e.item)&&!e.hasItems(e.item)&&e.item.link_to==="link"?(s(),n("a",{key:0,class:"card p-4 sm:p-5 shadow-md bg-white dark:bg-slate-900 bg-white dark:bg-slate-900",href:e.item.url,target:"_blank"},[e.item.icon?(s(),n("i",{key:0,class:h(e.item.icon)},null,2)):t("",!0),e.item.svg?(s(),r(g,{key:1,class:"svg-icon",src:e.item.svg},null,8,["src"])):t("",!0),d("span",null,a(e.getTitle(e.item)),1),e.children?(s(),n("p",V,[(s(!0),n(c,null,y(e.children,(o,l)=>(s(),n("span",{key:o.index},[l>=1?(s(),n("span",A,", ")):t("",!0),b(a(e.getTitle(o,!0)),1)]))),128))])):t("",!0)],8,L)):e.can(e.item)&&!e.hasItems(e.item)&&e.item.link_to==="router-link"?(s(),r(p,{key:1,to:e.item.url,class:"card p-4 sm:p-5 shadow-md bg-white dark:bg-slate-900 bg-white dark:bg-slate-900"},{default:v(()=>[e.item.icon?(s(),n("i",{key:0,class:h(e.item.icon)},null,2)):t("",!0),e.item.svg?(s(),r(g,{key:1,class:"svg-icon",src:e.item.svg},null,8,["src"])):t("",!0),d("span",null,a(e.getTitle(e.item)),1),e.children?(s(),n("p",E,[(s(!0),n(c,null,y(e.children,(o,l)=>(s(),n("span",{key:o.index},[l>=1?(s(),n("span",F,", ")):t("",!0),b(a(e.getTitle(o,!0)),1)]))),128))])):t("",!0)]),_:1},8,["to"])):e.can(e.item)&&!e.hasItems(e.item)?(s(),r(p,{key:2,to:`/admin/p/${e.item.id}`,class:"card p-4 sm:p-5 shadow-md bg-white dark:bg-slate-900 bg-white dark:bg-slate-900"},{default:v(()=>[e.item.icon?(s(),n("i",{key:0,class:h(e.item.icon)},null,2)):t("",!0),e.item.svg?(s(),r(g,{key:1,class:"svg-icon",src:e.item.svg},null,8,["src"])):t("",!0),d("span",null,a(e.getTitle(e.item)),1),e.children?(s(),n("p",U,[(s(!0),n(c,null,y(e.children,(o,l)=>(s(),n("span",{key:l},[l>=1?(s(),n("span",K,", ")):t("",!0),b(a(e.getTitle(o,!0)),1)]))),128))])):t("",!0)]),_:1},8,["to"])):t("",!0),e.can(e.item)&&e.hasItems(e.item)?(s(),r(w,{key:3,title:e.getTitle(e.item),children:e.item.children,item:e.findActivehild(e.item),cruds:e.cruds,permissions:e.permissions},null,8,["title","children","item","cruds","permissions"])):t("",!0)],64)}const P=H(I,[["render",O],["__scopeId","data-v-e82381a3"]]),z={name:"index",components:{HomeMenuRender:P},setup(e,{emit:T}){const f=k.get(N),i=k.get(R),u=k.get(C),M=k.get($);return{isMobile:B,menu:M,permissions:i,kruds:f,title:u.title,logo:u.logo,logoDark:u.logo_dark,base_url:D,darkMode:S}}},G={class:"grid grow grid-nogutter module-page container pb-16 px-4 mx-auto"},Y=["src","alt"],Z=["src","alt"],j={class:"module-navigation"};function q(e,T,f,i,u,M){const g=m("Title"),p=m("Head"),w=m("HomeMenuRender");return s(),n("div",G,[_(p,null,{default:v(()=>[_(g,null,{default:v(()=>[b(a(i.title),1)]),_:1})]),_:1}),d("div",null,[i.darkMode?(s(),n("img",{key:0,src:`${i.base_url}${i.logoDark}`,class:"logo-light",alt:i.title},null,8,Y)):t("",!0),i.darkMode?t("",!0):(s(),n("img",{key:1,src:`${i.base_url}${i.logo}`,class:"logo-dark",alt:i.title},null,8,Z)),d("nav",j,[d("div",{class:h(i.isMobile?"grid grid-cols-1  gap-4":"grid grid-cols-3  gap-4")},[(s(!0),n(c,null,y(i.menu,o=>(s(),r(w,{key:o.index,item:o,cruds:i.kruds,permissions:i.permissions.permissions},null,8,["item","cruds","permissions"]))),128))],2)])])])}const te=H(z,[["render",q]]);export{te as default};