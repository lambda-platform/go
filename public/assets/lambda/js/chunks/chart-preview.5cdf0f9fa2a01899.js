"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9134],{32513:(t,a,s)=>{s.d(a,{Z:()=>i});var e=s(64231);const r={props:["title"],methods:{beforeMount:function(){"mn"!=this.selectedLang&&(0,e.loadLanguageAsync)(this.selectedLang)},switchLanguage:function(t){this.selectedLang=t,(0,e.loadLanguageAsync)(t)}},computed:{lang:function(){var t=this,a=["applications","additions","logistics","letter","fileDirectory","admin","systemAdministrator","personalInformation","settings","logOut","ui_builder","_form"];return a.reduce((function(s,e,r){return s[e]=t.$t("components."+a[r]),s}),{})}}};const i=(0,s(51900).Z)(r,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("subheader",[s("div",{attrs:{slot:"left"},slot:"left"},[s("h3",{staticClass:"title"},[t._v("\n            "+t._s(t.title)+"\n        ")])]),t._v(" "),s("div",{attrs:{slot:"right"},slot:"right"},[s("ul",[s("li",[s("Badge",{attrs:{dot:""}},[s("a",{staticClass:"demo-badge",attrs:{href:"#"}},[s("Icon",{attrs:{type:"ios-bell-outline"}})],1)])],1),t._v(" "),s("li",[s("Poptip",{attrs:{placement:"bottom-end"}},[s("a",{attrs:{href:"javascript:void(0)"}},[s("Icon",{attrs:{type:"ios-keypad"}})],1),t._v(" "),s("div",{staticClass:"header-apps",attrs:{slot:"content"},slot:"content"},[s("Tabs",{attrs:{value:"apps",size:"small"}},[s("TabPane",{attrs:{label:t.lang.applications,name:"apps"}},[s("Row",[s("Col",{attrs:{span:"8"}},[s("a",{attrs:{href:"/logistic"}},[s("img",{attrs:{src:"/images/apps/github.png",alt:""}}),t._v(" "),s("span",[t._v("CMS")])])]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("a",{attrs:{href:"/logistic"}},[s("img",{attrs:{src:"/images/apps/slack.png",alt:""}}),t._v(" "),s("span",[t._v("HR")])])]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("a",{attrs:{href:"/logistic"}},[s("img",{attrs:{src:"/images/apps/bitbucket.png",alt:""}}),t._v(" "),s("span",[t._v("CRM")])])]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("a",{attrs:{href:"/logistic"}},[s("img",{attrs:{src:"/images/apps/dribbble.png",alt:""}}),t._v(" "),s("span",[t._v(t._s(t.lang.logistics))])])]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("a",{attrs:{href:"/logistic"}},[s("img",{attrs:{src:"/images/apps/mail_chimp.png",alt:""}}),t._v(" "),s("span",[t._v(t._s(t.lang.letter))])])]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("a",{attrs:{href:"/logistic"}},[s("img",{attrs:{src:"/images/apps/dropbox.png",alt:""}}),t._v(" "),s("span",[t._v(t._s(t.lang.fileDirectory))])])])],1)],1),t._v(" "),s("TabPane",{attrs:{label:t.lang.additions,name:"plugins"}},[s("Row",[s("Col",{attrs:{span:"8"}},[s("a",{attrs:{href:"/lambda/puzzle"}},[s("img",{attrs:{src:"/images/apps/github.png",alt:""}}),t._v(" "),s("span",[t._v(t._s(t.lang.ui_builder))])])]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("a",{attrs:{href:"/logistic"}},[s("img",{attrs:{src:"/images/apps/mail_chimp.png",alt:""}}),t._v(" "),s("span",[t._v(t._s(t.lang._form))])])])],1)],1)],1)],1)])],1),t._v(" "),s("li",{staticClass:"avatar-item"},[s("Poptip",{attrs:{placement:"bottom-end"}},[s("a",{staticClass:"avatar",attrs:{href:"javascript:void(0)"}},[s("img",{staticClass:"avatar",attrs:{src:"/assets/lambda/images/avatar.png",alt:"avatar"}})]),t._v(" "),s("div",{staticClass:"header-profile",attrs:{slot:"content"},slot:"content"},[s("div",{staticClass:"header-profile-info"},[s("h3",[t._v(t._s(t.lang.admin))]),t._v(" "),s("small",[t._v(t._s(t.lang.systemAdministrator))])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[s("Icon",{attrs:{type:"ios-color-filter-outline"}}),t._v(" "),s("span",[t._v(t._s(t.lang.personalInformation))])],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[s("Icon",{attrs:{type:"ios-gear-outline"}}),t._v(" "),s("span",[t._v(t._s(t.lang.settings))])],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[s("Icon",{attrs:{type:"ios-locked-outline"}}),t._v(" "),s("span",[t._v(t._s(t.lang.logOut))])],1)])])])])],1)])])])}),[],!1,null,null,null).exports},97281:(t,a,s)=>{s.r(a),s.d(a,{default:()=>r});const e={components:{"page-header":s(32513).Z},computed:{src:function(){return this.$project?"".concat(window.lambda.domain,"/lambda/puzzle/schema-public/chart/").concat(this.$route.params.id):"/lambda/puzzle/schema/chart/".concat(this.$route.params.id)},projectDomain:function(){return window.lambda.domain?"".concat(window.lambda.domain):void 0}}};const r=(0,s(51900).Z)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"page page-preview"},[s("div",{staticClass:"pz-preview"},[t.$project?s("chart",{attrs:{src:t.src,projectID:t.$project.id,projectDomain:t.projectDomain}}):s("chart",{attrs:{src:t.src}})],1)])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=chart-preview.5cdf0f9fa2a01899.js.map