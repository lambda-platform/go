import{_ as M,S as L,a as S,b as $,c as B}from"./SideMenu.4f33cbd6.js";import{p as W,q as d,r as R,t as V,v as q,w as x,x as G,y as O,i as u,z as F,B as I,C as Y,D as j,E as y,a as J,o as K}from"./entry.f024038a.js";import{d as Q,k as b,ag as U,e as X,w as T,o as Z,q as ee,W as n,a3 as l,$ as s,a5 as w,S as i,u as C,f as t,a2 as p,a0 as c,h as ae,a7 as k}from"./vue.8156bfac.js";import"./ant.e4101cc5.js";import"./SettingOutlined.798feb52.js";import"./ck.c4e539a7.js";import"./moment.8b5e7d95.js";import"./cryptoJs.7e1396ed.js";import"./numeral.417254ec.js";import"./common.3f2e1dd9.js";const oe=Q({name:"BasicLayout",components:{MultiTab:M,SideMenu:L,GlobalHeader:S,GlobalFooter:$,SettingDrawer:B},setup(){const e=W(),a=b(!1);b([]);const m=U(),v=X(()=>!y.value||u.value?"0":d.value?"256px":"70px");d.value?a.value=!1:a.value=!0,T(()=>d.value,o=>{a.value=!o}),T(()=>e.fullPath,o=>{u.value&&r()}),Z(()=>{navigator.userAgent.indexOf("Edge")>-1&&ee(()=>{a.value=!a.value,setTimeout(()=>{a.value=!a.value},16)})});const _=()=>{a.value=!a.value,m.commit(I,!a.value),Y()},g=()=>{let o="";return d.value?o=j.value?"256px":"70px":o=u.value&&"0"||y.value&&"70px"||"0",o},r=()=>{a.value=!1};return{collapsed:a,contentPaddingLeft:v,toggle:_,paddingCalc:g,drawerClose:r,multiTab:R,device:V,layoutMode:q,contentWidth:x,fixedHeader:G,navTheme:O,isMobile:u,isSideMenu:F}}}),te={class:"flex"};function ne(e,a,m,v,_,g){const r=i("side-menu"),o=i("a-drawer"),E=S,N=M,f=i("portal-target"),P=K,z=i("a-layout-content"),A=$,D=i("a-layout-footer"),H=B,h=i("a-layout");return n(),l(h,{class:w(["layout",e.device])},{default:s(()=>[C(u)?(n(),l(o,{key:0,placement:"left",wrapClassName:`drawer-sider ${e.navTheme}`,closable:!1,visible:e.collapsed,width:"275",onClose:e.drawerClose},{default:s(()=>[t(r,{mode:"inline",theme:e.navTheme,collapsed:!1,collapsible:!0,onToggle:e.toggle,device:e.device},null,8,["theme","onToggle","device"])]),_:1},8,["wrapClassName","visible","onClose"])):e.isSideMenu()?(n(),l(r,{key:1,mode:"inline",theme:e.navTheme,collapsed:e.collapsed,collapsible:!0,onToggle:e.toggle,device:e.device},null,8,["theme","collapsed","onToggle","device"])):p("",!0),t(h,{class:w([e.layoutMode,`content-width-${e.contentWidth}`]),style:k({paddingLeft:e.contentPaddingLeft,minHeight:"100vh"})},{default:s(()=>[t(E,{mode:e.layoutMode,theme:e.navTheme,collapsed:e.collapsed,device:e.device,onToggle:e.toggle},null,8,["mode","theme","collapsed","device","onToggle"]),t(z,null,{default:s(()=>[c("div",{class:"bg-slate-60 dark:bg-slate-800",style:k(`height: 100%; padding: ${e.fixedHeader?e.layoutMode==="levelmenu"?"20px":"87px":"20px"} 24px 20px;`)},[e.multiTab?(n(),l(N,{key:0})):p("",!0),t(ae,{name:"page-transition"},{default:s(()=>[c("section",null,[C(u)||e.layoutMode==="topmenu"?(n(),l(f,{key:0,name:"mobile-page-title"})):p("",!0),c("div",te,[t(f,{name:"level-menu"}),(n(),l(P,{key:e.$route.path}))])])]),_:1})],4)]),_:1}),t(D,{class:""},{default:s(()=>[t(A)]),_:1}),t(H)]),_:1},8,["class","style"])]),_:1},8,["class"])}const _e=J(oe,[["render",ne]]);export{_e as default};