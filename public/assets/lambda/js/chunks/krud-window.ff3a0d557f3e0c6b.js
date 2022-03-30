"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4656],{28354:(t,e,s)=>{s.d(e,{Z:()=>i});const n={props:["refresh","exportExcel","print","search","save","options","isExcel","isPrint","isRefresh","isSave","isSearch","exportLoading"],data:function(){return{searchModel:null}},computed:{lang:function(){var t=this,e=["_save","re_call","_print","download_file"];return e.reduce((function(s,n,i){return s[n]=t.$t("crud."+e[i]),s}),{})}},methods:{searchGrid:function(t){t.preventDefault(),this.$props.search(this.searchModel)}}};const i={props:["title","icon","main_tab_title","grid","form","projects_id","hideHeader","hasSelection","actions","dbClickAction","onRowSelect","rowCurrentChange","permissions","user_condition","custom_condition","view_url","mode","onPropertySuccess","onPropertyError","page_id","withoutHeader","withCrudLog"],components:{krudtools:(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"crud-page-header-right-inside"},[s("Tooltip",{attrs:{content:t.lang._save}},[t.isSave?s("a",{staticClass:"btnLine",on:{click:t.$props.save}},[s("i",{staticClass:"ti-save"})]):t._e()]),t._v(" "),s("Tooltip",{attrs:{content:t.lang.re_call}},[t.isRefresh?s("a",{staticClass:"btnLine",on:{click:t.$props.refresh}},[s("i",{staticClass:"ti-reload"})]):t._e()]),t._v(" "),t.isPrint?s("Tooltip",{attrs:{content:t.lang._print}},[s("a",{staticClass:"btnLine",on:{click:t.$props.print}},[s("i",{staticClass:"ti-printer"})])]):t._e(),t._v(" "),t.isExcel?s("Tooltip",{attrs:{content:t.lang.download_file}},[t.$props.exportLoading?s("a",{staticClass:"btnLine",attrs:{href:"javascript:void(0)"}},[s("Spin",[s("Icon",{staticClass:"spin-icon-load",attrs:{type:"ios-loading",size:"18"}})],1)],1):s("a",{staticClass:"btnLine",on:{click:t.$props.exportExcel}},[s("i",{staticClass:"ti-download"})])]):t._e(),t._v(" "),t.isSearch?s("form",{on:{submit:t.searchGrid}},[s("div",{staticClass:"right-search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchModel,expression:"searchModel"}],staticClass:"right-search-input",attrs:{placeholder:t.$static_words?t.$static_words.search:"Хайх..."},domProps:{value:t.searchModel},on:{input:function(e){e.target.composing||(t.searchModel=e.target.value)}}}),t._v(" "),s("i",{staticClass:"ti-search"})])]):t._e()],1)}),[],!1,null,null,null).exports},data:function(){return{closeByBtn:window.init.closeByBtn,gridSrc:"",formSrc:"",editMode:!1,searchModel:"",form_width:600,exportLoading:!1,isPrint:!1,isExcel:!1,isRefresh:!1,isSave:!1,rowId:null}},computed:{hasVNavSlot:function(){return!!this.$slots["v-nav"]},hasNavSlot:function(){return!!this.$slots.nav},hasLeftSlot:function(){return!!this.$slots.left}},methods:{view:function(t){this.rowId=t,this.editMode=!0,this.$refs.form.viewMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},edit:function(t){this.rowId=t,this.editMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},clone:function(t){this.$refs.form.cloneModel(t),this.templateEdit&&this.templateEdit()},quickEdit:function(t){console.log(t)},refresh:function(){this.searchModel=null,this.$refs.grid.refresh()},search:function(t){this.$refs.grid.searchData(t,1)},stopLoading:function(t){this.exportLoading=!1,t||this.$Message.error("Татах үед алдаа гарлаа!")},exportExcel:function(){this.exportLoading=!0,this.$refs.grid.exportExcel(this.stopLoading)},print:function(){this.$refs.grid.print()},save:function(){this.$refs.grid.saveGridData()},onSuccess:function(t){void 0!==this.mode&&this.mode&&"refresh"==this.mode?this.$refs.grid.refresh():this.editMode?this.$refs.grid.update(t):this.$refs.grid.append(t),this.editMode=!1,this.templateOnSuccess&&this.templateOnSuccess(t),this.onPropertySuccess&&this.onPropertySuccess()},onError:function(t){this.templateOnError&&this.templateOnError(),this.onPropertyError&&this.onPropertyError()}}}},39796:(t,e,s)=>{s.d(e,{Z:()=>a});var n=s(94015),i=s.n(n),o=s(23645),r=s.n(o)()(i());r.push([t.id,".blackout[data-v-03503c30]{background-color:rgba(0,0,0,.3);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:10}.dock[data-v-03503c30]{box-shadow:-2px 3px 3px rgba(0,0,0,.2);position:absolute;right:0;top:0;z-index:3000}.dock[data-v-03503c30],section[data-v-03503c30]{height:100%;overflow:hidden}section[data-v-03503c30]{box-sizing:border-box;display:inline-block;position:relative}.panel>div[data-v-03503c30]{height:100%;overflow:auto}.panel.default[data-v-03503c30]{background-color:#fff}.action-close[data-v-03503c30]{cursor:pointer;font-size:24px;position:absolute;right:12px;top:6px}.action-extra.default[data-v-03503c30]{bottom:1rem;cursor:pointer;position:absolute;right:1rem}.vsp-br[data-v-03503c30]{border-right:2px solid rgba(0,0,0,.2)}.vsp-bl[data-v-03503c30]{border-left:2px solid rgba(0,0,0,.1)}.slide-out-enter-active[data-v-03503c30],.slide-out-leave-active[data-v-03503c30]{transition:transform .4s cubic-bezier(.215,.61,.355,1)}.slide-out-enter[data-v-03503c30],.slide-out-leave-to[data-v-03503c30]{transform:translateX(100%)}.fade-enter-active[data-v-03503c30],.fade-leave-active[data-v-03503c30]{transition:opacity .4s ease-in}.fade-enter[data-v-03503c30],.fade-leave-to[data-v-03503c30]{opacity:0}.bg-transparent[data-v-03503c30]{background-color:transparent!important}","",{version:3,sources:["webpack://./../../vue/krud/src/components/slidePanel.vue"],names:[],mappings:"AA2QA,2BAOA,+BAAA,CAFA,YAAA,CAFA,MAAA,CAFA,cAAA,CACA,KAAA,CAEA,WAAA,CAEA,UAEA,CAEA,uBAMA,sCAAA,CALA,iBAAA,CAEA,OAAA,CADA,KAAA,CAGA,YAGA,CAEA,gDANA,WAAA,CAGA,eASA,CANA,yBAIA,qBAAA,CAFA,oBAAA,CADA,iBAKA,CAEA,4BACA,WAAA,CACA,aACA,CAEA,gCACA,qBACA,CAEA,+BAIA,cAAA,CACA,cAAA,CAJA,iBAAA,CAEA,UAAA,CADA,OAIA,CAEA,uCAEA,WAAA,CAEA,cAAA,CAHA,iBAAA,CAEA,UAEA,CAEA,yBACA,qCACA,CAEA,yBACA,oCACA,CAEA,kFAEA,sDACA,CAEA,uEAEA,0BACA,CAEA,wEAEA,8BACA,CAEA,6DAEA,SACA,CAEA,iCACA,sCACA",sourcesContent:['<template>\n    <div>\n        <transition name="fade">\n            <div v-if="isVisibleDock" class="blackout" @click="closeAll"></div>\n        </transition>\n        <transition name="slide-out" v-on:enter="d_enter">\n            <div v-show="isVisibleDock" ref="dock" class="dock" :style="_style(0)" :class="_class(0)">\n                <transition-group name="slide-out" v-on:before-leave="s_beforeLeave" v-on:afterLeave="s_afterLeave">\n                    <section v-for="(isVisible, i) in isVisibleSections" v-if="isVisible" ref="section" class="panel"\n                             :key="\'k\'+i" :style="_style(i+1)" :class="_class(i+1)">\n                        <a href="#" class="action-close" @click.prevent="close(i)">\n                            <Icon type="ios-close-circle-outline" />\n                        </a>\n                        <slot></slot>\n                    </section>\n                </transition-group>\n            </div>\n        </transition>\n    </div>\n</template>\n\n<script>\nlet easeOutCubic = "cubic-bezier(0.215, 0.61, 0.355, 1)";\nlet easeOutSine = "cubic-bezier(0.39, 0.575, 0.565, 1)";\nlet bz_func = easeOutCubic;\n\nexport default {\n    name: "VueSideoutPanel",\n\n    props: {\n        closeByBtn: {\n            default: false,\n            required: false\n        },\n        value: {\n//            type: Boolean,\n            default: false,\n            required: true\n        },\n        count: {\n//            type: Number,\n            default: 1,\n            validator(v) {\n                return v > 0 && v <= 2;\n            }\n        },\n        closeHtml: {\n//            type: String,\n            default: "Close"\n        },\n        closeAllHtml: {\n            type: String,\n            default: "Close all"\n        },\n        widths: {\n            type: Array,\n            default() {\n                if (this.count == 1) return ["100%"];\n                else return ["100%", "50%"];\n            },\n            validator(v) {\n                return v.reduce(\n                    (a, b) => a && /col-(\\w+-)?\\d+|\\d+px|\\d+%/.test(b),\n                    true\n                );\n            }\n        },\n        classes: {\n            type: Array,\n            default() {\n                return new Array(5).fill("default");\n            },\n            validator(v) {\n                return v.reduce(\n                    (a, b) => a && (!b || typeof b == "string"),\n                    true\n                );\n            }\n        },\n        styles: {\n            type: Array,\n            default() {\n                return [{}, {}, {}, {}, {}];\n            },\n            validator(v) {\n                return v.reduce(\n                    (a, b) => a && (!b || typeof b == "object"),\n                    true\n                );\n            }\n        }\n    },\n\n    data() {\n        return {\n            isVisibleDock: this.value,\n            isVisibleSections: [],\n            isShifted: false,\n            d_styles: [],\n            d_classes: []\n        };\n    },\n\n    created() {\n        this.init();\n    },\n\n    watch: {\n        value() {\n            this.isVisibleDock = this.value;\n        },\n        widths() {\n            this.init();\n        }\n    },\n\n    computed: {\n        isVisibleCloseAll() {\n            return this.count == 2 && !this.isShifted;\n        }\n    },\n\n    methods: {\n        init() {\n            this.isShifted = false;\n\n            this.d_styles = [];\n            this.d_classes = [];\n\n            for (let i = 0; i < 5; i++) {\n                if (this.classes[i] && this.classes[i].length >= 0) {\n                    i == 2 && this.classes[i] == "same"\n                        ? this.d_classes.push(this.classes[i - 1])\n                        : this.d_classes.push(this.classes[i]);\n                } else {\n                    this.d_classes.push("default");\n                }\n            }\n            if (this.count == 2) {\n                this.d_classes[1] += " vsp-br";\n                this.d_classes[2] += " vsp-bl";\n            }\n            for (let i = 0; i < 5; i++) {\n                i == 2 && this.styles[i] && this.styles[i].same\n                    ? this.d_styles.push(\n                    Object.assign({}, this.styles[i - 1] || {})\n                    )\n                    : this.d_styles.push(this.styles[i] || {});\n            }\n\n            let isSecondSet = false;\n            if (this.count == 1) {\n                this.widths[0] = this.widths[0] || this.widths[1];\n                this.widths[1] = "100%";\n            } else if (/\\d+%/.test(this.widths[1])) {\n                this.d_styles[2].width = `${100 -\n                this.widths[1].slice(0, -1)}%`;\n                isSecondSet = true;\n            }\n            this.widths.forEach((_w, i) => {\n                if (/col-(\\w+-)?\\d+/.test(_w)) {\n                    this.d_classes[i] += " " + _w;\n                } else {\n                    if (i == 2 && isSecondSet) return;\n                    this.d_styles[i].width = _w;\n                }\n            });\n\n            this.isVisibleSections = new Array(this.count).fill(1);\n        },\n\n        _style(index) {\n            return this.d_styles[index];\n        },\n\n        _class(index) {\n            return this.d_classes[index];\n        },\n\n        setTransform(el, v) {\n            [\n                "webkitTransform",\n                "MozTransform",\n                "msTransform",\n                "OTransform",\n                "transform"\n            ].forEach(t => {\n                el.style[t] = v[0];\n            });\n            el.style.transitionTimingFunction = v[1];\n            el.style.transitionDuration = v[2];\n        },\n\n        d_shift() {\n            let cx = -this.$refs.section[1].offsetWidth;\n            this.setTransform(this.$refs.dock, ["right", bz_func, ".8s"]);\n            this.$refs.dock.style.right = `${cx}px`;\n            this.isShifted = true;\n        },\n\n        s_beforeLeave() {\n            if (this.isVisibleSections[1]) {\n                this.$refs.dock.style.boxShadow = "none";\n                this.$refs.section[1].style.boxShadow =\n                    "-3px 3px 9px rgba(0, 0, 0, 0.3)";\n            } else {\n                this.d_shift();\n            }\n        },\n\n        s_afterLeave() {\n            if (this.isVisibleSections[1]) {\n                this.$refs.dock.style.boxShadow =\n                    "-3px 3px 9px rgba(0, 0, 0, 0.3)";\n                this.$refs.dock.style.width =\n                    this.$refs.section[0].offsetWidth + "px";\n                this.$refs.section[0].style.width = "100%";\n            }\n        },\n\n        d_enter() {\n            this.count == 2 && !this.showExtra && this.d_shift();\n        },\n\n        closeDock() {\n            this.isVisibleDock = false;\n            this.init();\n            this.$emit("close");\n        },\n\n        close(index) {\n            if (this.count == 1) {\n                this.closeDock();\n            } else if (this.isShifted) {\n                this.setTransform(this.$refs.dock, [\n                    "right",\n                    easeOutSine,\n                    "1.2s"\n                ]);\n                this.closeDock();\n            } else if (index == 0) {\n                this.$set(this.isVisibleSections, 0, 0);\n            } else if (index == 1 && this.isVisibleSections[0]) {\n                this.d_shift();\n            } else {\n                this.closeDock();\n            }\n        },\n\n        closeAll() {\n            if(!this.closeByBtn) {\n                if (this.isShifted) {\n                    this.setTransform(this.$refs.dock, [\n                        "right",\n                        easeOutSine,\n                        "1.2ss"\n                    ]);\n                }\n                this.closeDock();\n            }\n        }\n    }\n};\n<\/script>\n\n\n<style scoped>\n.blackout {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 10;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.dock {\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 100%;\n    z-index: 3000;\n    box-shadow: -2px 3px 3px rgba(0, 0, 0, 0.2);\n    overflow: hidden;\n}\n\nsection {\n    position: relative;\n    display: inline-block;\n    height: 100%;\n    box-sizing: border-box;\n    overflow: hidden;\n}\n\n.panel > div {\n    height: 100%;\n    overflow: auto;\n}\n\n.panel.default {\n    background-color: #fff;\n}\n\n.action-close {\n    position: absolute;\n    top: 6px;\n    right: 12px;\n    cursor: pointer;\n    font-size: 24px;\n}\n\n.action-extra.default {\n    position: absolute;\n    bottom: 1rem;\n    right: 1rem;\n    cursor: pointer;\n}\n\n.vsp-br {\n    border-right: 2px solid rgba(0, 0, 0, 0.2);\n}\n\n.vsp-bl {\n    border-left: 2px solid rgba(0, 0, 0, 0.1);\n}\n\n.slide-out-enter-active,\n.slide-out-leave-active {\n    transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n.slide-out-enter,\n.slide-out-leave-to {\n    transform: translateX(100%);\n}\n\n.fade-enter-active,\n.fade-leave-active {\n    transition: opacity 0.4s ease-in;\n}\n\n.fade-enter,\n.fade-leave-to {\n    opacity: 0;\n}\n\n.bg-transparent {\n    background-color: transparent !important;\n}\n</style>\n'],sourceRoot:""}]);const a=r},23645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var s=t(e);return e[2]?"@media ".concat(e[2]," {").concat(s,"}"):s})).join("")},e.i=function(t,s,n){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(n)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);n&&i[c[0]]||(s&&(c[2]?c[2]="".concat(s," and ").concat(c[2]):c[2]=s),e.push(c))}},e}},94015:t=>{function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var s=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==s)return;var n,i,o=[],r=!0,a=!1;try{for(s=s.call(t);!(r=(n=s.next()).done)&&(o.push(n.value),!e||o.length!==e);r=!0);}catch(t){a=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,n=new Array(e);s<e;s++)n[s]=t[s];return n}t.exports=function(t){var s=e(t,4),n=s[1],i=s[3];if(!i)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */"),c=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[n].concat(c).concat([a]).join("\n")}return[n].join("\n")}},93379:(t,e,s)=>{var n,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},o=function(){var t={};return function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(t){s=null}t[e]=s}return t[e]}}(),r=[];function a(t){for(var e=-1,s=0;s<r.length;s++)if(r[s].identifier===t){e=s;break}return e}function c(t,e){for(var s={},n=[],i=0;i<t.length;i++){var o=t[i],c=e.base?o[0]+e.base:o[0],l=s[c]||0,d="".concat(c," ").concat(l);s[c]=l+1;var u=a(d),h={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(r[u].references++,r[u].updater(h)):r.push({identifier:d,updater:m(h,e),references:1}),n.push(d)}return n}function l(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var i=s.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var r=o(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function h(t,e,s,n){var i=s?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=u(e,i);else{var o=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function f(t,e,s){var n=s.css,i=s.media,o=s.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p=null,v=0;function m(t,e){var s,n,i;if(e.singleton){var o=v++;s=p||(p=l(e)),n=h.bind(null,s,o,!1),i=h.bind(null,s,o,!0)}else s=l(e),n=f.bind(null,s,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(s)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var s=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<s.length;n++){var i=a(s[n]);r[i].references--}for(var o=c(t,e),l=0;l<s.length;l++){var d=a(s[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}s=o}}}},88969:(t,e,s)=>{s.d(e,{Z:()=>i});const n={name:"crudLog",props:["form","grid","rowId"],data:function(){return{logs:[],reads:[],logColumns:[{title:"Бүртгэлийн төрөл",key:"action"},{title:"Хэрэглэгч",key:"user"},{title:"Огноо",key:"created_at"}],readColumns:[{title:"Хэрэглэгч",key:"user"},{title:"Огноо",key:"created_at"}]}},computed:{lang:function(){var t=this,e=["registration_history","Information_viewing_history"];return e.reduce((function(s,n,i){return s[n]=t.$t("crud."+e[i]),s}),{})}},methods:{getLog:function(){var t=this;this.logs=[],this.reads=[],axios.post("/lambda/puzzle/grid/data/crud_log?&paginate=5000&page=1&sort=id&order=desc",{schemaId:this.form,row_id:this.rowId}).then((function(e){e.data.data.forEach((function(e){"edit"!=e.action&&t.logs.push({action:"store"==e.action?"Бүртгэсэн":"Зассан",user:e.last_name.charAt(0)+"."+e.first_name,created_at:moment(e.created_at).format("YYYY-MM-DD HH:mm:ss")}),"edit"==e.action&&t.reads.push({user:e.last_name.charAt(0)+"."+e.first_name,created_at:moment(e.created_at).format("YYYY-MM-DD HH:mm:ss")})}))}))}},watch:{rowId:function(){this.getLog()}},mounted:function(){this.getLog()}};const i=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"crud-log"},[s("div",{staticClass:"fieldset"},[s("legend",[t._v(t._s(t.lang.lang))]),t._v(" "),s("Table",{attrs:{columns:t.logColumns,data:t.logs,size:"small",height:t.logs.length>=3?200:100}})],1),t._v(" "),s("div",{staticClass:"fieldset"},[s("legend",[t._v(t._s(t.lang.Information_viewing_history))]),t._v(" "),s("Table",{attrs:{columns:t.readColumns,data:t.reads,size:"small",height:t.reads.length>=3?200:80}})],1)])}),[],!1,null,null,null).exports},98335:(t,e,s)=>{s.d(e,{Z:()=>d});function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}var i="cubic-bezier(0.39, 0.575, 0.565, 1)";const o={name:"VueSideoutPanel",props:{closeByBtn:{default:!1,required:!1},value:{default:!1,required:!0},count:{default:1,validator:function(t){return t>0&&t<=2}},closeHtml:{default:"Close"},closeAllHtml:{type:String,default:"Close all"},widths:{type:Array,default:function(){return 1==this.count?["100%"]:["100%","50%"]},validator:function(t){return t.reduce((function(t,e){return t&&/col-(\w+-)?\d+|\d+px|\d+%/.test(e)}),!0)}},classes:{type:Array,default:function(){return new Array(5).fill("default")},validator:function(t){return t.reduce((function(t,e){return t&&(!e||"string"==typeof e)}),!0)}},styles:{type:Array,default:function(){return[{},{},{},{},{}]},validator:function(t){return t.reduce((function(t,e){return t&&(!e||"object"==n(e))}),!0)}}},data:function(){return{isVisibleDock:this.value,isVisibleSections:[],isShifted:!1,d_styles:[],d_classes:[]}},created:function(){this.init()},watch:{value:function(){this.isVisibleDock=this.value},widths:function(){this.init()}},computed:{isVisibleCloseAll:function(){return 2==this.count&&!this.isShifted}},methods:{init:function(){var t=this;this.isShifted=!1,this.d_styles=[],this.d_classes=[];for(var e=0;e<5;e++)this.classes[e]&&this.classes[e].length>=0?2==e&&"same"==this.classes[e]?this.d_classes.push(this.classes[e-1]):this.d_classes.push(this.classes[e]):this.d_classes.push("default");2==this.count&&(this.d_classes[1]+=" vsp-br",this.d_classes[2]+=" vsp-bl");for(var s=0;s<5;s++)2==s&&this.styles[s]&&this.styles[s].same?this.d_styles.push(Object.assign({},this.styles[s-1]||{})):this.d_styles.push(this.styles[s]||{});var n=!1;1==this.count?(this.widths[0]=this.widths[0]||this.widths[1],this.widths[1]="100%"):/\d+%/.test(this.widths[1])&&(this.d_styles[2].width="".concat(100-this.widths[1].slice(0,-1),"%"),n=!0),this.widths.forEach((function(e,s){if(/col-(\w+-)?\d+/.test(e))t.d_classes[s]+=" "+e;else{if(2==s&&n)return;t.d_styles[s].width=e}})),this.isVisibleSections=new Array(this.count).fill(1)},_style:function(t){return this.d_styles[t]},_class:function(t){return this.d_classes[t]},setTransform:function(t,e){["webkitTransform","MozTransform","msTransform","OTransform","transform"].forEach((function(s){t.style[s]=e[0]})),t.style.transitionTimingFunction=e[1],t.style.transitionDuration=e[2]},d_shift:function(){var t=-this.$refs.section[1].offsetWidth;this.setTransform(this.$refs.dock,["right","cubic-bezier(0.215, 0.61, 0.355, 1)",".8s"]),this.$refs.dock.style.right="".concat(t,"px"),this.isShifted=!0},s_beforeLeave:function(){this.isVisibleSections[1]?(this.$refs.dock.style.boxShadow="none",this.$refs.section[1].style.boxShadow="-3px 3px 9px rgba(0, 0, 0, 0.3)"):this.d_shift()},s_afterLeave:function(){this.isVisibleSections[1]&&(this.$refs.dock.style.boxShadow="-3px 3px 9px rgba(0, 0, 0, 0.3)",this.$refs.dock.style.width=this.$refs.section[0].offsetWidth+"px",this.$refs.section[0].style.width="100%")},d_enter:function(){2==this.count&&!this.showExtra&&this.d_shift()},closeDock:function(){this.isVisibleDock=!1,this.init(),this.$emit("close")},close:function(t){1==this.count?this.closeDock():this.isShifted?(this.setTransform(this.$refs.dock,["right",i,"1.2s"]),this.closeDock()):0==t?this.$set(this.isVisibleSections,0,0):1==t&&this.isVisibleSections[0]?this.d_shift():this.closeDock()},closeAll:function(){this.closeByBtn||(this.isShifted&&this.setTransform(this.$refs.dock,["right",i,"1.2ss"]),this.closeDock())}}};var r=s(93379),a=s.n(r),c=s(39796),l={insert:"head",singleton:!1};a()(c.Z,l);c.Z.locals;const d=(0,s(51900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("transition",{attrs:{name:"fade"}},[t.isVisibleDock?s("div",{staticClass:"blackout",on:{click:t.closeAll}}):t._e()]),t._v(" "),s("transition",{attrs:{name:"slide-out"},on:{enter:t.d_enter}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisibleDock,expression:"isVisibleDock"}],ref:"dock",staticClass:"dock",class:t._class(0),style:t._style(0)},[s("transition-group",{attrs:{name:"slide-out"},on:{"before-leave":t.s_beforeLeave,afterLeave:t.s_afterLeave}},t._l(t.isVisibleSections,(function(e,n){return e?s("section",{key:"k"+n,ref:"section",refInFor:!0,staticClass:"panel",class:t._class(n+1),style:t._style(n+1)},[s("a",{staticClass:"action-close",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.close(n)}}},[s("Icon",{attrs:{type:"ios-close-circle-outline"}})],1),t._v(" "),t._t("default")],2):t._e()})),0)],1)])],1)}),[],!1,null,"03503c30",null).exports},26206:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});var n=s(98335),i=s(88969);const o={mixins:[s(28354).Z],data:function(){return{form_width:800,openSlidePanel:!1,exportLoading:!1}},components:{"slide-panel":n.Z,"crud-log":i.Z},computed:{lang:function(){var t=this,e=["_add","Information_viewing_history"];return e.reduce((function(s,n,i){return s[n]=t.$t("crud."+e[i]),s}),{})}},methods:{templateEdit:function(){this.openSlidePanel=!0},templateOnSuccess:function(){this.openSlidePanel=!1},templateOnError:function(){},onReady:function(t){this.form_width=t.width}}};const r=(0,s(51900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"offcanvas-template"},[s("div",{staticClass:"crud-page"},[t.withoutHeader?s("portal",{attrs:{to:"header-left"}},[s("h3",[t._v(t._s(t.title))]),t._v(" "),!t.permissions||t.permissions.c?s("span",{staticClass:"divider"}):t._e(),t._v(" "),!t.permissions||t.permissions.c?s("Button",{attrs:{type:"success",shape:"circle",size:"small",icon:"md-add"},on:{click:function(e){t.openSlidePanel=!0,t.editMode=!1}}},[t._v("\n                "+t._s(t.lang._add)+"\n            ")]):t._e()],1):t._e(),t._v(" "),t.withoutHeader?s("portal",{attrs:{to:"header-right"}},[s("krudtools",{attrs:{search:t.search,refresh:t.refresh,exportExcel:t.exportExcel,importExcel:t.importExcel,exportLoading:t.exportLoading,print:t.print,save:t.save,isPrint:t.isPrint,isExcel:t.isExcel,isExcelUpload:t.isExcelUpload,isRefresh:t.isRefresh,isSave:t.isSave}})],1):t._e(),t._v(" "),t.withoutHeader?t._e():s("div",{staticClass:"crud-page-header"},[t.hasNavSlot?s("div",{staticClass:"crud-page-header-left"},[t._t("nav"),t._v(" "),!t.permissions||t.permissions.c?s("span",{staticClass:"divider"}):t._e(),t._v(" "),!t.permissions||t.permissions.c?s("Button",{attrs:{type:"success",shape:"circle",size:"small",icon:"md-add"},on:{click:function(e){t.openSlidePanel=!0,t.editMode=!1}}},[t._v("\n                    "+t._s(t.lang._add)+"}\n                ")]):t._e()],2):s("div",{class:"crud-page-header-left "+(t.hasNavSlot?"":"no-nav")},[null!=t.$props.title?s("h3",[t._v(t._s(t.$props.title.replace("-"," ")))]):t._e(),t._v(" "),!t.permissions||t.permissions.c?s("span",{staticClass:"divider"}):t._e(),t._v(" "),!t.permissions||t.permissions.c?s("Button",{attrs:{type:"success",shape:"circle",size:"small",icon:"md-add"},on:{click:function(e){t.openSlidePanel=!0,t.editMode=!1}}},[t._v("\n                    "+t._s(t.lang._add)+"\n                ")]):t._e()],1),t._v(" "),s("div",{staticClass:"crud-page-header-right"},[s("div",{staticClass:"tooloptions"},[t._t("tooloptions")],2),t._v(" "),s("krudtools",{attrs:{search:t.search,refresh:t.refresh,exportExcel:t.exportExcel,exportLoading:t.exportLoading,print:t.print,save:t.save,isPrint:t.isPrint,isExcel:t.isExcel,isRefresh:t.isRefresh,isSave:t.isSave}}),t._v(" "),t._t("right")],2)]),t._v(" "),s("div",{staticClass:"crud-page-body"},[t.hasVNavSlot?s("div",{staticClass:"v-nav"},[t._t("v-nav")],2):t._e(),t._v(" "),s("div",{staticClass:"dg-flex"},[!t.permissions||t.permissions.r?s("datagrid",{ref:"grid",attrs:{schemaID:t.grid,paginate:50,fnClone:t.clone,fnEdit:t.edit,fnQuickEdit:t.quickEdit,fnView:t.view,actions:t.$props.actions,dblClick:t.$props.dbClickAction,onRowSelect:t.$props.onRowSelect,permissions:t.permissions,page_id:t.page_id,custom_condition:t.$props.custom_condition?t.$props.custom_condition:null,user_condition:t.user_condition?t.user_condition.gridCondition:null}}):t._e()],1)]),t._v(" "),s("slide-panel",{attrs:{widths:[t.form_width?t.form_width:"600px"],closeByBtn:!0,withCrudLog:t.withCrudLog},on:{close:function(e){t.openSlidePanel=!1}},model:{value:t.openSlidePanel,callback:function(e){t.openSlidePanel=e},expression:"openSlidePanel"}},[s("div",{class:t.withCrudLog&&t.editMode?"with-crud-log":""},[s("dataform",{ref:"form",attrs:{schemaID:t.form,editMode:t.editMode,onSuccess:t.onSuccess,onReady:t.onReady,do_render:t.openSlidePanel,permissions:t.permissions,page_id:t.page_id,user_condition:t.user_condition?t.user_condition.formCondition:null,onError:t.onError}})],1)])],1)])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=krud-window.ff3a0d557f3e0c6b.js.map