"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[948],{86462:(e,r,t)=>{t.r(r),t.d(r,{default:()=>s});const o={computed:{microserviceUrl:()=>window.init.projectSettings?window.init.projectSettings.production_url:""},created(){let e=this.getCookie("token");axios.defaults.headers.common.Authorization="Bearer "+e},methods:{getCookie(e){let r=`; ${document.cookie}`.match(`;\\s*${e}=([^;]+)`);return r?r[1]:""}}};const s=(0,t(14486).A)(o,(function(){var e=this,r=e._self._c;return r("section",["agent"==e.$route.params.module?r("agent",{attrs:{baseUrl:e.microserviceUrl}},[r("user-control",{attrs:{slot:"user-control"},slot:"user-control"})],1):e._e(),e._v(" "),"profile"==e.$route.params.module?r("agent-form",{attrs:{type:"profile",baseUrl:e.microserviceUrl}},[r("user-control",{attrs:{slot:"user-control"},slot:"user-control"})],1):e._e(),e._v(" "),"password"==e.$route.params.module?r("agent-form",{attrs:{type:"password",baseUrl:e.microserviceUrl}},[r("user-control",{attrs:{slot:"user-control"},slot:"user-control"})],1):e._e(),e._v(" "),r("div",{staticClass:"role"},["role"==e.$route.params.module?r("lambda-role"):e._e()],1)],1)}),[],!1,null,null,null).exports}}]);