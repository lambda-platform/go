"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7917],{75095:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(23645),r=n.n(a)()((function(e){return e[1]}));r.push([e.id,".microservice-config .dataform-body{height:auto!important}",""]);const o=r},23645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(r[c]=!0)}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);a&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},93379:(e,t,n)=>{var a,r=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function i(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},a=[],r=0;r<e.length;r++){var o=e[r],s=t.base?o[0]+t.base:o[0],l=n[s]||0,d="".concat(s," ").concat(l);n[s]=l+1;var u=i(d),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(c[u].references++,c[u].updater(p)):c.push({identifier:d,updater:_(p,t),references:1}),a.push(d)}return a}function l(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var r=n.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var c=o(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,a){var r=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var o=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(o,c[t]):e.appendChild(o)}}function f(e,t,n){var a=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var m=null,v=0;function _(e,t){var n,a,r;if(t.singleton){var o=v++;n=m||(m=l(t)),a=p.bind(null,n,o,!1),r=p.bind(null,n,o,!0)}else n=l(t),a=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var r=i(n[a]);c[r].references--}for(var o=s(e,t),l=0;l<n.length;l++){var d=i(n[l]);0===c[d].references&&(c[d].updater(),c.splice(d,1))}n=o}}}},5165:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const a={name:"Settings",methods:{onReady:function(){this.$refs.form.editModel(this.$projectSettings.id)},copyToClipboard:function(e){var t=document.createElement("textarea"),n=document.getSelection();t.textContent=e,document.body.appendChild(t),n.removeAllRanges(),t.select(),document.execCommand("copy"),n.removeAllRanges(),document.body.removeChild(t)}},data:function(){return{microservoce:window.init.project}},computed:{lang:function(){var e=this,t=["project_key","server_languege_framework","create_using","download_create_file","lambda_example_app","lambda_cli","lambda","l_key","create","lambda_settings","laravel_framework","go_framework","database","database_connect","_success","type","ready","lambda_platform","composer"];return t.reduce((function(n,a,r){return n[a]=e.$t("project."+t[r]),n}),{})}}};var r=n(93379),o=n.n(r),c=n(75095),i={insert:"head",singleton:!1};o()(c.Z,i);c.Z.locals;const s=(0,n(51900).Z)(a,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"project-page"},[t("h3",{staticClass:"project-title"},[t("img",{attrs:{src:"/assets/lambda/images/favicon.png",alt:""}}),e._v(e._s(e.$project.name))]),e._v(" "),t("div",{staticClass:"project-status"},[t("div",{staticClass:"lambda-config"},[t("h3",[e._v("Microservice түлхүүр")]),e._v(" "),t("code",[e._v("\n                "+e._s(e.$project.project_key)+"\n                "),t("button",{attrs:{type:"button"},on:{click:function(t){return e.copyToClipboard("".concat(e.$project.project_key))}}},[t("i",{staticClass:"ti-layers"})])]),e._v(" "),t("br"),e._v(" "),t("div",{staticClass:"select-platform"},[t("div",[t("h3",[t("a",{attrs:{href:"https://github.com/lambda-platform/cli",target:"_blank"}},[e._v("Lambda CLI")]),e._v(" "+e._s(e.lang.create_using)+" ")]),e._v(" "),"Client"===e.microservoce.project_type?t("code",[e._v("\n                        lambda-micro-client -key="+e._s(e.$project.project_key)+" create "+e._s(e.$project.name)+"\n                        "),t("button",{attrs:{type:"button"},on:{click:function(t){return e.copyToClipboard("lambda-micro-client -key=".concat(e.$project.project_key," create ").concat(e.$project.name))}}},[t("i",{staticClass:"ti-layers"})])]):t("code",[e._v("\n                        lambda-micro -key="+e._s(e.$project.project_key)+" create "+e._s(e.$project.name)+"\n                        "),t("button",{attrs:{type:"button"},on:{click:function(t){return e.copyToClipboard("lambda-micro -key=".concat(e.$project.project_key," create ").concat(e.$project.name))}}},[t("i",{staticClass:"ti-layers"})])]),e._v(" "),t("br"),e._v(" "),t("h3",[e._v(e._s(e.lang.download_create_file))]),e._v(" "),t("a",{attrs:{href:"https://lambda.cloud.mn/starter.zip",target:"_blank"}},[t("i",{staticClass:"ti-cloud-down"}),e._v(" "),t("span",[e._v(e._s(e.lang.lambda_example_app))])]),e._v(" "),t("a",{attrs:{href:"/console/config/".concat(e.$project.project_key),target:"_blank"}},[t("i",{staticClass:"ti-cloud-down"}),e._v(" "),t("span",[e._v(e._s(e.lang.lambda_settings))])])])])]),e._v(" "),t("Steps",{attrs:{current:e.$project.db_schema_path=="schemas/".concat(e.$project.project_key,".json")?3:1,status:e.$project.db_schema_path=="schemas/".concat(e.$project.project_key,".json")?"finish":"error"}},[t("Step",{attrs:{title:e.lang.create,content:"Cloud  ".concat(e.lang.type,": ").concat(e.$project.plan)}}),e._v(" "),t("Step",{attrs:{title:e.lang.database,content:e.lang.database_connect}}),e._v(" "),t("Step",{attrs:{title:e.lang.ready,content:e.lang._success}})],1)],1),e._v(" "),t("dataform",{ref:"form",staticClass:"microservice-config",attrs:{schemaID:46,do_render:!0,editMode:!0,onReady:e.onReady}})],1)}),[],!1,null,null,null).exports}}]);