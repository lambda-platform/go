"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5925],{9230:(t,r,n)=>{n.r(r),n.d(r,{default:()=>e});const a={name:"crud",data:function(){return{word:{},showConfigError:!0}},methods:{},beforeMount:function(){window.lambda&&window.lambda.notify&&window.lambda.notify.firebaseConfig&&window.lambda.notify.firebaseConfig.apiKey&&window.lambda.notify.firebaseConfig.appId&&(this.showConfigError=!1)},computed:{lang:function(){var t=this,r=["target_statement"];return r.reduce((function(n,a,e){return n[a]=t.$t("project."+r[e]),n}),{})},property:function(){return{template:"canvas",title:this.lang.target_statement,grid:"notification_target_grid",form:"notification_target_form",actions:""}}}};const e=(0,n(14486).A)(a,(function(){var t=this,r=t._self._c;return r("section",{staticClass:"page"},[t.showConfigError?r("div",{staticStyle:{padding:"50px"}},[r("Alert",{attrs:{type:"warning"}},[t._v("lambda.json дээр firebase-н тохиргоог хийгээгүй байна !!!")])],1):r("krud",{staticClass:"material",attrs:{template:t.property.template,property:t.property}},[r("template",{slot:"nav"},[t._t("nav")],2),t._v(" "),r("user-control",{attrs:{slot:"right"},slot:"right"})],2)],1)}),[],!1,null,null,null).exports}}]);