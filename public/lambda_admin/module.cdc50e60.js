import{_ as v,S as B,a as g,b as h,c as y}from"./SideMenu.4f33cbd6.js";import{q as n,r as E,t as A,v as D,w as H,x as N,y as P,i as s,z as W,B as z,C as V,D as q,E as m,a as G,o as L}from"./entry.f024038a.js";import{d as O,k as p,ag as R,e as F,w as I,o as Y,q as j,W as l,a3 as u,$ as o,a5 as f,S as r,f as a,a0 as i,a2 as J,h as K}from"./vue.8156bfac.js";import"./ant.e4101cc5.js";import"./SettingOutlined.798feb52.js";import"./ck.c4e539a7.js";import"./moment.8b5e7d95.js";import"./cryptoJs.7e1396ed.js";import"./numeral.417254ec.js";import"./common.3f2e1dd9.js";const Q=O({name:"BasicLayout",components:{MultiTab:v,SideMenu:B,GlobalHeader:g,GlobalFooter:h,SettingDrawer:y},setup(){const e=p(!1);p([]);const c=R(),d=F(()=>!m.value||s.value?"0":n.value?"256px":"70px");return I(()=>n.value,t=>{e.value=!t}),Y(()=>{navigator.userAgent.indexOf("Edge")>-1&&j(()=>{e.value=!e.value,setTimeout(()=>{e.value=!e.value},16)}),n.value||(e.value=!0)}),{collapsed:e,contentPaddingLeft:d,toggle:()=>{e.value=!e.value,c.commit(z,!e.value),V()},paddingCalc:()=>{let t="";return n.value?t=q.value?"256px":"70px":t=s.value&&"0"||m.value&&"70px"||"0",t},drawerClose:()=>{e.value=!1},multiTab:E,device:A,layoutMode:D,contentWidth:H,fixedHeader:N,navTheme:P,isMobile:s,isSideMenu:W}}}),U={class:"bg-slate-60 dark:bg-slate-800",style:"height: 100%; "},X={class:"flex"};function Z(e,c,d,b,x,T){const t=g,w=v,C=L,S=r("a-layout-content"),k=h,M=r("a-layout-footer"),$=y,_=r("a-layout");return l(),u(_,{class:f(["layout",e.device])},{default:o(()=>[a(_,{class:f([e.layoutMode,`content-width-${e.contentWidth}`]),style:{minHeight:"100vh"}},{default:o(()=>[a(t,{class:"module-page",theme:e.navTheme,collapsed:!0,moduleHeader:!0,device:e.device,onToggle:e.toggle},null,8,["theme","device","onToggle"]),a(S,null,{default:o(()=>[i("div",U,[e.multiTab?(l(),u(w,{key:0})):J("",!0),a(K,{name:"page-transition"},{default:o(()=>[i("section",null,[i("div",X,[(l(),u(C,{key:e.$route.fullPath}))])])]),_:1})])]),_:1}),a(M,{class:""},{default:o(()=>[a(k)]),_:1}),a($)]),_:1},8,["class"])]),_:1},8,["class"])}const ce=G(Q,[["render",Z]]);export{ce as default};