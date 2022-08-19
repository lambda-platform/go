"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7917],{37066:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o});const c={name:"Settings",methods:{onReady:function(){this.$refs.form.editModel(this.$projectSettings.id)},copyToClipboard:function(t){var e=document.createElement("textarea"),a=document.getSelection();e.textContent=t,document.body.appendChild(e),a.removeAllRanges(),e.select(),document.execCommand("copy"),a.removeAllRanges(),document.body.removeChild(e)}},data:function(){return{microservoce:window.init.project}},computed:{lang:function(){var t=this,e=["project_key","server_languege_framework","create_using","download_create_file","lambda_example_app","lambda_cli","lambda","l_key","create","lambda_settings","laravel_framework","go_framework","database","database_connect","_success","type","ready","lambda_platform","composer"];return e.reduce((function(a,c,o){return a[c]=t.$t("project."+e[o]),a}),{})}}};const o=(0,a(51900).Z)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"project-page"},[e("h3",{staticClass:"project-title"},[e("img",{attrs:{src:"/assets/lambda/images/favicon.png",alt:""}}),t._v(t._s(t.$project.name))]),t._v(" "),e("div",{staticClass:"project-status"},[e("div",{staticClass:"lambda-config"},[e("h3",[t._v("Microservice түлхүүр")]),t._v(" "),e("code",[t._v("\n                "+t._s(t.$project.project_key)+"\n                "),e("button",{attrs:{type:"button"},on:{click:function(e){return t.copyToClipboard("".concat(t.$project.project_key))}}},[e("i",{staticClass:"ti-layers"})])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"select-platform"},[e("div",[e("h3",[e("a",{attrs:{href:"https://github.com/lambda-platform/cli",target:"_blank"}},[t._v("Lambda CLI")]),t._v(" "+t._s(t.lang.create_using)+" ")]),t._v(" "),"Client"===t.microservoce.project_type?e("code",[t._v("\n                        lambda-micro-client -key="+t._s(t.$project.project_key)+" create "+t._s(t.$project.name)+"\n                        "),e("button",{attrs:{type:"button"},on:{click:function(e){return t.copyToClipboard("lambda-micro-client -key=".concat(t.$project.project_key," create ").concat(t.$project.name))}}},[e("i",{staticClass:"ti-layers"})])]):e("code",[t._v("\n                        lambda-micro -key="+t._s(t.$project.project_key)+" create "+t._s(t.$project.name)+"\n                        "),e("button",{attrs:{type:"button"},on:{click:function(e){return t.copyToClipboard("lambda-micro -key=".concat(t.$project.project_key," create ").concat(t.$project.name))}}},[e("i",{staticClass:"ti-layers"})])]),t._v(" "),e("br"),t._v(" "),e("h3",[t._v(t._s(t.lang.download_create_file))]),t._v(" "),e("a",{attrs:{href:"https://lambda.cloud.mn/starter.zip",target:"_blank"}},[e("i",{staticClass:"ti-cloud-down"}),t._v(" "),e("span",[t._v(t._s(t.lang.lambda_example_app))])]),t._v(" "),e("a",{attrs:{href:"/console/config/".concat(t.$project.project_key),target:"_blank"}},[e("i",{staticClass:"ti-cloud-down"}),t._v(" "),e("span",[t._v(t._s(t.lang.lambda_settings))])])])])]),t._v(" "),e("Steps",{attrs:{current:t.$project.db_schema_path=="schemas/".concat(t.$project.project_key,".json")?3:1,status:t.$project.db_schema_path=="schemas/".concat(t.$project.project_key,".json")?"finish":"error"}},[e("Step",{attrs:{title:t.lang.create,content:"Cloud  ".concat(t.lang.type,": ").concat(t.$project.plan)}}),t._v(" "),e("Step",{attrs:{title:t.lang.database,content:t.lang.database_connect}}),t._v(" "),e("Step",{attrs:{title:t.lang.ready,content:t.lang._success}})],1)],1),t._v(" "),e("dataform",{ref:"form",attrs:{schemaID:46,do_render:!0,editMode:!0,onReady:t.onReady}})],1)}),[],!1,null,"7407cd30",null).exports}}]);
//# sourceMappingURL=project-index.f14bd7b15d43d53f.js.map