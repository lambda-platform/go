"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5830],{98055:(t,a,s)=>{s.d(a,{Z:()=>i});var e=s(89922);const r={props:["title"],methods:{beforeMount:function(){"mn"!=this.selectedLang&&(0,e.loadLanguageAsync)(this.selectedLang)},switchLanguage:function(t){this.selectedLang=t,(0,e.loadLanguageAsync)(t)}},computed:{lang:function(){var t=this,a=["applications","additions","logistics","letter","fileDirectory","admin","systemAdministrator","personalInformation","settings","logOut","ui_builder","_form"];return a.reduce((function(s,e,r){return s[e]=t.$t("components."+a[r]),s}),{})}}};const i=(0,s(51900).Z)(r,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("subheader",[s("div",{attrs:{slot:"left"},slot:"left"},[s("h3",{staticClass:"title"},[t._v("\n            "+t._s(t.title)+"\n        ")])]),t._v(" "),s("div",{attrs:{slot:"right"},slot:"right"},[s("ul",[s("li",[s("Badge",{attrs:{dot:""}},[s("a",{staticClass:"demo-badge",attrs:{href:"#"}},[s("Icon",{attrs:{type:"ios-bell-outline"}})],1)])],1),t._v(" "),s("li",[s("Poptip",{attrs:{placement:"bottom-end"}},[s("a",{attrs:{href:"javascript:void(0)"}},[s("Icon",{attrs:{type:"ios-keypad"}})],1),t._v(" "),s("div",{staticClass:"header-apps",attrs:{slot:"content"},slot:"content"},[s("Tabs",{attrs:{value:"apps",size:"small"}},[s("TabPane",{attrs:{label:t.lang.applications,name:"apps"}},[s("Row",[s("Col",{attrs:{span:"8"}},[s("a",{attrs:{href:"/logistic"}},[s("img",{attrs:{src:"/images/apps/github.png",alt:""}}),t._v(" "),s("span",[t._v("CMS")])])]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("a",{attrs:{href:"/logistic"}},[s("img",{attrs:{src:"/images/apps/slack.png",alt:""}}),t._v(" "),s("span",[t._v("HR")])])]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("a",{attrs:{href:"/logistic"}},[s("img",{attrs:{src:"/images/apps/bitbucket.png",alt:""}}),t._v(" "),s("span",[t._v("CRM")])])]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("a",{attrs:{href:"/logistic"}},[s("img",{attrs:{src:"/images/apps/dribbble.png",alt:""}}),t._v(" "),s("span",[t._v(t._s(t.lang.logistics))])])]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("a",{attrs:{href:"/logistic"}},[s("img",{attrs:{src:"/images/apps/mail_chimp.png",alt:""}}),t._v(" "),s("span",[t._v(t._s(t.lang.letter))])])]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("a",{attrs:{href:"/logistic"}},[s("img",{attrs:{src:"/images/apps/dropbox.png",alt:""}}),t._v(" "),s("span",[t._v(t._s(t.lang.fileDirectory))])])])],1)],1),t._v(" "),s("TabPane",{attrs:{label:t.lang.additions,name:"plugins"}},[s("Row",[s("Col",{attrs:{span:"8"}},[s("a",{attrs:{href:"/lambda/puzzle"}},[s("img",{attrs:{src:"/images/apps/github.png",alt:""}}),t._v(" "),s("span",[t._v(t._s(t.lang.ui_builder))])])]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("a",{attrs:{href:"/logistic"}},[s("img",{attrs:{src:"/images/apps/mail_chimp.png",alt:""}}),t._v(" "),s("span",[t._v(t._s(t.lang._form))])])])],1)],1)],1)],1)])],1),t._v(" "),s("li",{staticClass:"avatar-item"},[s("Poptip",{attrs:{placement:"bottom-end"}},[s("a",{staticClass:"avatar",attrs:{href:"javascript:void(0)"}},[s("img",{staticClass:"avatar",attrs:{src:"/assets/lambda/images/avatar.png",alt:"avatar"}})]),t._v(" "),s("div",{staticClass:"header-profile",attrs:{slot:"content"},slot:"content"},[s("div",{staticClass:"header-profile-info"},[s("h3",[t._v(t._s(t.lang.admin))]),t._v(" "),s("small",[t._v(t._s(t.lang.systemAdministrator))])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[s("Icon",{attrs:{type:"ios-color-filter-outline"}}),t._v(" "),s("span",[t._v(t._s(t.lang.personalInformation))])],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[s("Icon",{attrs:{type:"ios-gear-outline"}}),t._v(" "),s("span",[t._v(t._s(t.lang.settings))])],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[s("Icon",{attrs:{type:"ios-locked-outline"}}),t._v(" "),s("span",[t._v(t._s(t.lang.logOut))])],1)])])])])],1)])])])}),[],!1,null,null,null).exports},52826:(t,a,s)=>{s.r(a),s.d(a,{default:()=>r});const e={components:{"page-header":s(98055).Z},data:function(){return{editMode:!1,src:""}},created:function(){var t=this.$route.params.id;this.$project?void 0!==t&&""!==t&&null!==t?(this.editMode=!0,this.src="/lambda/puzzle/project/".concat(this.$project.id,"/grid/").concat(this.$route.params.id)):this.src="/lambda/puzzle/project/".concat(this.$project.id,"/grid"):void 0!==t&&""!==t&&null!==t&&(this.editMode=!0,this.src="/lambda/puzzle/schema/grid/".concat(this.$route.params.id))},methods:{onCreate:function(){this.$router.push("/grid")},onUpdate:function(){this.$router.push("/grid")}}};const r=(0,s(51900).Z)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"page page-puzzle"},[t.$project?s("grid-builder",{attrs:{projectID:t.$project.id,editMode:t.editMode,src:t.src,onCreate:t.onCreate,onUpdate:t.onUpdate}}):t._e(),t._v(" "),s("grid-builder",{attrs:{editMode:t.editMode,src:t.src,onCreate:t.onCreate,onUpdate:t.onUpdate}})],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=grid-builder.151d3cdd285263a5.js.map