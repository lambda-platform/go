(self.webpackChunk=self.webpackChunk||[]).push([[4656],{23101:(t,e,n)=>{"use strict";n.d(e,{H:()=>r});var i=n(40962),s=n.n(i),r=function(t,e){var n=s().apply(t,e);return Array.isArray(n)?!(n.length>=1)||!n[0]:!n}},98188:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});const i={props:["refresh","exportExcel","print","search","save","options","isExcel","isExcelUpload","excelUploadCustomUrl","excelUploadMethod","isPrint","isRefresh","isSave","isSearch","exportLoading"],data:function(){return{searchModel:null}},computed:{lang:function(){var t=this,e=["_save","re_call","_print","download_file","excelUpload"];return e.reduce((function(n,i,s){return n[i]=t.$t("crud."+e[s]),n}),{})}},methods:{searchGrid:function(t){t.preventDefault(),this.$props.search(this.searchModel)}}};const s=(0,n(51900).Z)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"crud-page-header-right-inside"},[e("Tooltip",{attrs:{content:t.lang._save}},[t.isSave?e("a",{staticClass:"btnLine",on:{click:t.$props.save}},[e("i",{staticClass:"ti-save"})]):t._e()]),t._v(" "),e("Tooltip",{attrs:{content:t.lang.re_call}},[t.isRefresh?e("a",{staticClass:"btnLine",on:{click:t.$props.refresh}},[e("i",{staticClass:"ti-reload"})]):t._e()]),t._v(" "),t.isPrint?e("Tooltip",{attrs:{content:t.lang._print}},[e("a",{staticClass:"btnLine",on:{click:t.$props.print}},[e("i",{staticClass:"ti-printer"})])]):t._e(),t._v(" "),t.isExcelUpload?e("Tooltip",{attrs:{content:t.lang.excelUpload}},[t.$props.excelUploadCustomUrl?e("a",{staticClass:"btnLine",attrs:{href:t.$props.excelUploadCustomUrl}},[e("i",{staticClass:"ti-layers"})]):e("a",{staticClass:"btnLine",on:{click:t.$props.excelUploadMethod}},[e("i",{staticClass:"ti-layers"})])]):t._e(),t._v(" "),t.isExcel?e("Tooltip",{attrs:{content:t.lang.download_file}},[t.$props.exportLoading?e("a",{staticClass:"btnLine",attrs:{href:"javascript:void(0)"}},[e("Spin",[e("Icon",{staticClass:"spin-icon-load",attrs:{type:"ios-loading",size:"18"}})],1)],1):e("a",{staticClass:"btnLine",on:{click:t.$props.exportExcel}},[e("i",{staticClass:"ti-download"})])]):t._e(),t._v(" "),t.isSearch?e("form",{on:{submit:t.searchGrid}},[e("div",{staticClass:"right-search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchModel,expression:"searchModel"}],staticClass:"right-search-input",attrs:{placeholder:t.$static_words?t.$static_words.search:"Хайх..."},domProps:{value:t.searchModel},on:{input:function(e){e.target.composing||(t.searchModel=e.target.value)}}}),t._v(" "),e("i",{staticClass:"ti-search"})])]):t._e()],1)}),[],!1,null,null,null).exports;var r=n(23101);const o={props:["title","icon","grid","form","hideHeader","hasSelection","actions","dbClickAction","onRowSelect","rowCurrentChange","permissions","user_condition","custom_condition","view_url","mode","onPropertySuccess","onPropertyError","page_id","withoutHeader","withCrudLog","projects_id","exportSelectedRows","exportPath","exportLabel"],components:{krudtools:s},data:function(){return{closeByBtn:window.init.closeByBtn,gridSrc:"",formSrc:"",editMode:!1,searchModel:"",form_width:600,exportLoading:!1,isPrint:!1,isExcel:!1,isExcelUpload:!1,excelUploadCustomUrl:null,isRefresh:!1,isSave:!1,rowId:null,selectedData:[]}},computed:{hasVNavSlot:function(){return!!this.$slots["v-nav"]},hasNavSlot:function(){return!!this.$slots.nav},hasLeftSlot:function(){return!!this.$slots.left},url:function(){var t=this;if(null!==this.projects_id&&""!=this.projects_id&&null!=this.projects_id&&window.init.microserviceSettings&&window.init.microserviceSettings.length>=1){var e=window.init.microserviceSettings.findIndex((function(e){return e.project_id==t.projects_id}));if(e>=0)return window.lambda.microservice_dev?window.init.microserviceSettings[e].dev_url:window.init.microserviceSettings[e].production_url}return""}},methods:{view:function(t){this.rowId=t,this.editMode=!0,this.$refs.form.viewMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},edit:function(t,e){if((this.rowId=t,this.permissions)&&(""!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS&&!(0,r.H)(this.permissions.gridEditConditionJS,e)))return;this.editMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},clone:function(t){this.$refs.form.cloneModel(t),this.templateEdit&&this.templateEdit()},quickEdit:function(t){console.log(t)},refresh:function(){this.searchModel=null,this.$refs.grid.refresh()},search:function(t){this.$refs.grid.searchData(t,1)},stopLoading:function(t){this.exportLoading=!1,t||this.$Message.error("Татах үед алдаа гарлаа!")},exportExcel:function(){this.exportLoading=!0,this.$refs.grid.exportExcel(this.stopLoading)},print:function(){this.$refs.grid.print()},excelUploadMethod:function(){this.$refs.grid.importExcel()},save:function(){this.$refs.grid.saveGridData()},onSuccess:function(t){void 0!==this.mode&&this.mode&&"refresh"==this.mode?this.$refs.grid.refresh():this.editMode?this.$refs.grid.update(t):this.$refs.grid.append(t),this.editMode=!1,this.templateOnSuccess&&this.templateOnSuccess(t),this.onPropertySuccess&&this.onPropertySuccess()},onError:function(){this.templateOnError&&this.templateOnError(),this.onPropertyError&&this.onPropertyError()},onRowSelectedEvent:function(t,e){this.exportSelectedRows?this.selectedData=t:this.$props.onRowSelect&&this.$props.onRowSelect(t,e)},exportByPath:function(){var t=this;if(this.exportPath&&this.selectedData){var e=this.selectedData.map((function(e){return e[t.$refs.grid.identity]}));window.open(this.exportPath+e.join(","),"_blank").focus()}}}}},66281:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(94015),s=n.n(i),r=n(23645),o=n.n(r)()(s());o.push([t.id,".blackout[data-v-1a0b336a]{background-color:rgba(0,0,0,.3);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:10}.dock[data-v-1a0b336a]{box-shadow:-2px 3px 3px rgba(0,0,0,.2);position:absolute;right:0;top:0;z-index:3000}.dock[data-v-1a0b336a],section[data-v-1a0b336a]{height:100%;overflow:hidden}section[data-v-1a0b336a]{box-sizing:border-box;display:inline-block;position:relative}.panel>div[data-v-1a0b336a]{height:100%;overflow:auto}.panel.default[data-v-1a0b336a]{background-color:#fff}.action-close[data-v-1a0b336a]{cursor:pointer;font-size:24px;position:absolute;right:12px;top:6px}.action-extra.default[data-v-1a0b336a]{bottom:1rem;cursor:pointer;position:absolute;right:1rem}.vsp-br[data-v-1a0b336a]{border-right:2px solid rgba(0,0,0,.2)}.vsp-bl[data-v-1a0b336a]{border-left:2px solid rgba(0,0,0,.1)}.slide-out-enter-active[data-v-1a0b336a],.slide-out-leave-active[data-v-1a0b336a]{transition:transform .4s cubic-bezier(.215,.61,.355,1)}.slide-out-enter[data-v-1a0b336a],.slide-out-leave-to[data-v-1a0b336a]{transform:translateX(100%)}.fade-enter-active[data-v-1a0b336a],.fade-leave-active[data-v-1a0b336a]{transition:opacity .4s ease-in}.fade-enter[data-v-1a0b336a],.fade-leave-to[data-v-1a0b336a]{opacity:0}.bg-transparent[data-v-1a0b336a]{background-color:transparent!important}","",{version:3,sources:["webpack://./../../lambda-builder/src/modules/krud/components/slidePanel.vue"],names:[],mappings:"AA2QA,2BAOA,+BAAA,CAFA,YAAA,CAFA,MAAA,CAFA,cAAA,CACA,KAAA,CAEA,WAAA,CAEA,UAEA,CAEA,uBAMA,sCAAA,CALA,iBAAA,CAEA,OAAA,CADA,KAAA,CAGA,YAGA,CAEA,gDANA,WAAA,CAGA,eASA,CANA,yBAIA,qBAAA,CAFA,oBAAA,CADA,iBAKA,CAEA,4BACA,WAAA,CACA,aACA,CAEA,gCACA,qBACA,CAEA,+BAIA,cAAA,CACA,cAAA,CAJA,iBAAA,CAEA,UAAA,CADA,OAIA,CAEA,uCAEA,WAAA,CAEA,cAAA,CAHA,iBAAA,CAEA,UAEA,CAEA,yBACA,qCACA,CAEA,yBACA,oCACA,CAEA,kFAEA,sDACA,CAEA,uEAEA,0BACA,CAEA,wEAEA,8BACA,CAEA,6DAEA,SACA,CAEA,iCACA,sCACA",sourcesContent:['<template>\n    <div>\n        <transition name="fade">\n            <div v-if="isVisibleDock" class="blackout" @click="closeAll"></div>\n        </transition>\n        <transition name="slide-out" v-on:enter="d_enter">\n            <div v-show="isVisibleDock" ref="dock" class="dock" :style="_style(0)" :class="_class(0)">\n                <transition-group name="slide-out" v-on:before-leave="s_beforeLeave" v-on:afterLeave="s_afterLeave">\n                    <section v-for="(isVisible, i) in isVisibleSections" v-if="isVisible" ref="section" class="panel"\n                             :key="\'k\'+i" :style="_style(i+1)" :class="_class(i+1)">\n                        <a href="#" class="action-close" @click.prevent="close(i)">\n                            <Icon type="ios-close-circle-outline" />\n                        </a>\n                        <slot></slot>\n                    </section>\n                </transition-group>\n            </div>\n        </transition>\n    </div>\n</template>\n\n<script>\nlet easeOutCubic = "cubic-bezier(0.215, 0.61, 0.355, 1)";\nlet easeOutSine = "cubic-bezier(0.39, 0.575, 0.565, 1)";\nlet bz_func = easeOutCubic;\n\nexport default {\n    name: "VueSideoutPanel",\n\n    props: {\n        closeByBtn: {\n            default: false,\n            required: false\n        },\n        value: {\n//            type: Boolean,\n            default: false,\n            required: true\n        },\n        count: {\n//            type: Number,\n            default: 1,\n            validator(v) {\n                return v > 0 && v <= 2;\n            }\n        },\n        closeHtml: {\n//            type: String,\n            default: "Close"\n        },\n        closeAllHtml: {\n            type: String,\n            default: "Close all"\n        },\n        widths: {\n            type: Array,\n            default() {\n                if (this.count == 1) return ["100%"];\n                else return ["100%", "50%"];\n            },\n            validator(v) {\n                return v.reduce(\n                    (a, b) => a && /col-(\\w+-)?\\d+|\\d+px|\\d+%/.test(b),\n                    true\n                );\n            }\n        },\n        classes: {\n            type: Array,\n            default() {\n                return new Array(5).fill("default");\n            },\n            validator(v) {\n                return v.reduce(\n                    (a, b) => a && (!b || typeof b == "string"),\n                    true\n                );\n            }\n        },\n        styles: {\n            type: Array,\n            default() {\n                return [{}, {}, {}, {}, {}];\n            },\n            validator(v) {\n                return v.reduce(\n                    (a, b) => a && (!b || typeof b == "object"),\n                    true\n                );\n            }\n        }\n    },\n\n    data() {\n        return {\n            isVisibleDock: this.value,\n            isVisibleSections: [],\n            isShifted: false,\n            d_styles: [],\n            d_classes: []\n        };\n    },\n\n    created() {\n        this.init();\n    },\n\n    watch: {\n        value() {\n            this.isVisibleDock = this.value;\n        },\n        widths() {\n            this.init();\n        }\n    },\n\n    computed: {\n        isVisibleCloseAll() {\n            return this.count == 2 && !this.isShifted;\n        }\n    },\n\n    methods: {\n        init() {\n            this.isShifted = false;\n\n            this.d_styles = [];\n            this.d_classes = [];\n\n            for (let i = 0; i < 5; i++) {\n                if (this.classes[i] && this.classes[i].length >= 0) {\n                    i == 2 && this.classes[i] == "same"\n                        ? this.d_classes.push(this.classes[i - 1])\n                        : this.d_classes.push(this.classes[i]);\n                } else {\n                    this.d_classes.push("default");\n                }\n            }\n            if (this.count == 2) {\n                this.d_classes[1] += " vsp-br";\n                this.d_classes[2] += " vsp-bl";\n            }\n            for (let i = 0; i < 5; i++) {\n                i == 2 && this.styles[i] && this.styles[i].same\n                    ? this.d_styles.push(\n                    Object.assign({}, this.styles[i - 1] || {})\n                    )\n                    : this.d_styles.push(this.styles[i] || {});\n            }\n\n            let isSecondSet = false;\n            if (this.count == 1) {\n                this.widths[0] = this.widths[0] || this.widths[1];\n                this.widths[1] = "100%";\n            } else if (/\\d+%/.test(this.widths[1])) {\n                this.d_styles[2].width = `${100 -\n                this.widths[1].slice(0, -1)}%`;\n                isSecondSet = true;\n            }\n            this.widths.forEach((_w, i) => {\n                if (/col-(\\w+-)?\\d+/.test(_w)) {\n                    this.d_classes[i] += " " + _w;\n                } else {\n                    if (i == 2 && isSecondSet) return;\n                    this.d_styles[i].width = _w;\n                }\n            });\n\n            this.isVisibleSections = new Array(this.count).fill(1);\n        },\n\n        _style(index) {\n            return this.d_styles[index];\n        },\n\n        _class(index) {\n            return this.d_classes[index];\n        },\n\n        setTransform(el, v) {\n            [\n                "webkitTransform",\n                "MozTransform",\n                "msTransform",\n                "OTransform",\n                "transform"\n            ].forEach(t => {\n                el.style[t] = v[0];\n            });\n            el.style.transitionTimingFunction = v[1];\n            el.style.transitionDuration = v[2];\n        },\n\n        d_shift() {\n            let cx = -this.$refs.section[1].offsetWidth;\n            this.setTransform(this.$refs.dock, ["right", bz_func, ".8s"]);\n            this.$refs.dock.style.right = `${cx}px`;\n            this.isShifted = true;\n        },\n\n        s_beforeLeave() {\n            if (this.isVisibleSections[1]) {\n                this.$refs.dock.style.boxShadow = "none";\n                this.$refs.section[1].style.boxShadow =\n                    "-3px 3px 9px rgba(0, 0, 0, 0.3)";\n            } else {\n                this.d_shift();\n            }\n        },\n\n        s_afterLeave() {\n            if (this.isVisibleSections[1]) {\n                this.$refs.dock.style.boxShadow =\n                    "-3px 3px 9px rgba(0, 0, 0, 0.3)";\n                this.$refs.dock.style.width =\n                    this.$refs.section[0].offsetWidth + "px";\n                this.$refs.section[0].style.width = "100%";\n            }\n        },\n\n        d_enter() {\n            this.count == 2 && !this.showExtra && this.d_shift();\n        },\n\n        closeDock() {\n            this.isVisibleDock = false;\n            this.init();\n            this.$emit("close");\n        },\n\n        close(index) {\n            if (this.count == 1) {\n                this.closeDock();\n            } else if (this.isShifted) {\n                this.setTransform(this.$refs.dock, [\n                    "right",\n                    easeOutSine,\n                    "1.2s"\n                ]);\n                this.closeDock();\n            } else if (index == 0) {\n                this.$set(this.isVisibleSections, 0, 0);\n            } else if (index == 1 && this.isVisibleSections[0]) {\n                this.d_shift();\n            } else {\n                this.closeDock();\n            }\n        },\n\n        closeAll() {\n            if(!this.closeByBtn) {\n                if (this.isShifted) {\n                    this.setTransform(this.$refs.dock, [\n                        "right",\n                        easeOutSine,\n                        "1.2ss"\n                    ]);\n                }\n                this.closeDock();\n            }\n        }\n    }\n};\n<\/script>\n\n\n<style scoped>\n.blackout {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 10;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.dock {\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 100%;\n    z-index: 3000;\n    box-shadow: -2px 3px 3px rgba(0, 0, 0, 0.2);\n    overflow: hidden;\n}\n\nsection {\n    position: relative;\n    display: inline-block;\n    height: 100%;\n    box-sizing: border-box;\n    overflow: hidden;\n}\n\n.panel > div {\n    height: 100%;\n    overflow: auto;\n}\n\n.panel.default {\n    background-color: #fff;\n}\n\n.action-close {\n    position: absolute;\n    top: 6px;\n    right: 12px;\n    cursor: pointer;\n    font-size: 24px;\n}\n\n.action-extra.default {\n    position: absolute;\n    bottom: 1rem;\n    right: 1rem;\n    cursor: pointer;\n}\n\n.vsp-br {\n    border-right: 2px solid rgba(0, 0, 0, 0.2);\n}\n\n.vsp-bl {\n    border-left: 2px solid rgba(0, 0, 0, 0.1);\n}\n\n.slide-out-enter-active,\n.slide-out-leave-active {\n    transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n.slide-out-enter,\n.slide-out-leave-to {\n    transform: translateX(100%);\n}\n\n.fade-enter-active,\n.fade-leave-active {\n    transition: opacity 0.4s ease-in;\n}\n\n.fade-enter,\n.fade-leave-to {\n    opacity: 0;\n}\n\n.bg-transparent {\n    background-color: transparent !important;\n}\n</style>\n'],sourceRoot:""}]);const a=o},23645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(i)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(s[o]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);i&&s[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},94015:t=>{"use strict";function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var i,s,r=[],o=!0,a=!1;try{for(n=n.call(t);!(o=(i=n.next()).done)&&(r.push(i.value),!e||r.length!==e);o=!0);}catch(t){a=!0,s=t}finally{try{o||null==n.return||n.return()}finally{if(a)throw s}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}t.exports=function(t){var n=e(t,4),i=n[1],s=n[3];if(!s)return i;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),l=s.sources.map((function(t){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(t," */")}));return[i].concat(l).concat([a]).join("\n")}return[i].join("\n")}},40962:function(t,e,n){var i,s;i=function(){"use strict";function t(t){for(var e=[],n=0,i=t.length;n<i;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var e={},n={"==":function(t,e){return t==e},"===":function(t,e){return t===e},"!=":function(t,e){return t!=e},"!==":function(t,e){return t!==e},">":function(t,e){return t>e},">=":function(t,e){return t>=e},"<":function(t,e,n){return void 0===n?t<e:t<e&&e<n},"<=":function(t,e,n){return void 0===n?t<=e:t<=e&&e<=n},"!!":function(t){return e.truthy(t)},"!":function(t){return!e.truthy(t)},"%":function(t,e){return t%e},log:function(t){return console.log(t),t},in:function(t,e){return!(!e||void 0===e.indexOf)&&-1!==e.indexOf(t)},cat:function(){return Array.prototype.join.call(arguments,"")},substr:function(t,e,n){if(n<0){var i=String(t).substr(e);return i.substr(0,i.length+n)}return String(t).substr(e,n)},"+":function(){return Array.prototype.reduce.call(arguments,(function(t,e){return parseFloat(t,10)+parseFloat(e,10)}),0)},"*":function(){return Array.prototype.reduce.call(arguments,(function(t,e){return parseFloat(t,10)*parseFloat(e,10)}))},"-":function(t,e){return void 0===e?-t:t-e},"/":function(t,e){return t/e},min:function(){return Math.min.apply(this,arguments)},max:function(){return Math.max.apply(this,arguments)},merge:function(){return Array.prototype.reduce.call(arguments,(function(t,e){return t.concat(e)}),[])},var:function(t,e){var n=void 0===e?null:e,i=this;if(void 0===t||""===t||null===t)return i;for(var s=String(t).split("."),r=0;r<s.length;r++){if(null==i)return n;if(void 0===(i=i[s[r]]))return n}return i},missing:function(){for(var t=[],n=Array.isArray(arguments[0])?arguments[0]:arguments,i=0;i<n.length;i++){var s=n[i],r=e.apply({var:s},this);null!==r&&""!==r||t.push(s)}return t},missing_some:function(t,n){var i=e.apply({missing:n},this);return n.length-i.length>=t?[]:i}};return e.is_logic=function(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)&&1===Object.keys(t).length},e.truthy=function(t){return!(Array.isArray(t)&&0===t.length||!t)},e.get_operator=function(t){return Object.keys(t)[0]},e.get_values=function(t){return t[e.get_operator(t)]},e.apply=function(t,i){if(Array.isArray(t))return t.map((function(t){return e.apply(t,i)}));if(!e.is_logic(t))return t;var s,r,o,a,l,c=e.get_operator(t),d=t[c];if(Array.isArray(d)||(d=[d]),"if"===c||"?:"==c){for(s=0;s<d.length-1;s+=2)if(e.truthy(e.apply(d[s],i)))return e.apply(d[s+1],i);return d.length===s+1?e.apply(d[s],i):null}if("and"===c){for(s=0;s<d.length;s+=1)if(r=e.apply(d[s],i),!e.truthy(r))return r;return r}if("or"===c){for(s=0;s<d.length;s+=1)if(r=e.apply(d[s],i),e.truthy(r))return r;return r}if("filter"===c)return a=e.apply(d[0],i),o=d[1],Array.isArray(a)?a.filter((function(t){return e.truthy(e.apply(o,t))})):[];if("map"===c)return a=e.apply(d[0],i),o=d[1],Array.isArray(a)?a.map((function(t){return e.apply(o,t)})):[];if("reduce"===c)return a=e.apply(d[0],i),o=d[1],l=void 0!==d[2]?d[2]:null,Array.isArray(a)?a.reduce((function(t,n){return e.apply(o,{current:n,accumulator:t})}),l):l;if("all"===c){if(a=e.apply(d[0],i),o=d[1],!Array.isArray(a)||!a.length)return!1;for(s=0;s<a.length;s+=1)if(!e.truthy(e.apply(o,a[s])))return!1;return!0}if("none"===c){if(a=e.apply(d[0],i),o=d[1],!Array.isArray(a)||!a.length)return!0;for(s=0;s<a.length;s+=1)if(e.truthy(e.apply(o,a[s])))return!1;return!0}if("some"===c){if(a=e.apply(d[0],i),o=d[1],!Array.isArray(a)||!a.length)return!1;for(s=0;s<a.length;s+=1)if(e.truthy(e.apply(o,a[s])))return!0;return!1}if(d=d.map((function(t){return e.apply(t,i)})),n.hasOwnProperty(c)&&"function"==typeof n[c])return n[c].apply(i,d);if(c.indexOf(".")>0){var u=String(c).split("."),f=n;for(s=0;s<u.length;s++){if(!f.hasOwnProperty(u[s]))throw new Error("Unrecognized operation "+c+" (failed at "+u.slice(0,s+1).join(".")+")");f=f[u[s]]}return f.apply(i,d)}throw new Error("Unrecognized operation "+c)},e.uses_data=function(n){var i=[];if(e.is_logic(n)){var s=e.get_operator(n),r=n[s];Array.isArray(r)||(r=[r]),"var"===s?i.push(r[0]):r.forEach((function(t){i.push.apply(i,e.uses_data(t))}))}return t(i)},e.add_operation=function(t,e){n[t]=e},e.rm_operation=function(t){delete n[t]},e.rule_like=function(t,n){if(n===t)return!0;if("@"===n)return!0;if("number"===n)return"number"==typeof t;if("string"===n)return"string"==typeof t;if("array"===n)return Array.isArray(t)&&!e.is_logic(t);if(e.is_logic(n)){if(e.is_logic(t)){var i=e.get_operator(n),s=e.get_operator(t);if("@"===i||i===s)return e.rule_like(e.get_values(t,!1),e.get_values(n,!1))}return!1}if(Array.isArray(n)){if(Array.isArray(t)){if(n.length!==t.length)return!1;for(var r=0;r<n.length;r+=1)if(!e.rule_like(t[r],n[r]))return!1;return!0}return!1}return!1},e},void 0===(s="function"==typeof i?i.call(e,n,e,t):i)||(t.exports=s)},93379:(t,e,n)=>{"use strict";var i,s=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function a(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},i=[],s=0;s<t.length;s++){var r=t[s],l=e.base?r[0]+e.base:r[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=a(d),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(o[u].references++,o[u].updater(f)):o.push({identifier:d,updater:A(f,e),references:1}),i.push(d)}return i}function c(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var s=n.nc;s&&(i.nonce=s)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var o=r(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function f(t,e,n,i){var s=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=u(e,s);else{var r=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function h(t,e,n){var i=n.css,s=n.media,r=n.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var p=null,v=0;function A(t,e){var n,i,s;if(e.singleton){var r=v++;n=p||(p=c(e)),i=f.bind(null,n,r,!1),s=f.bind(null,n,r,!0)}else n=c(e),i=h.bind(null,n,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=s());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var s=a(n[i]);o[s].references--}for(var r=l(t,e),c=0;c<n.length;c++){var d=a(n[c]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=r}}}},78151:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});const i={name:"crudLog",props:["form","grid","rowId"],data:function(){return{logs:[],reads:[],logColumns:[{title:"Бүртгэлийн төрөл",key:"action"},{title:"Хэрэглэгч",key:"user"},{title:"Огноо",key:"created_at"}],readColumns:[{title:"Хэрэглэгч",key:"user"},{title:"Огноо",key:"created_at"}]}},computed:{lang:function(){var t=this,e=["registration_history","Information_viewing_history"];return e.reduce((function(n,i,s){return n[i]=t.$t("crud."+e[s]),n}),{})}},methods:{getLog:function(){var t=this;this.logs=[],this.reads=[],axios.post("/lambda/puzzle/grid/data/crud_log?&paginate=5000&page=1&sort=id&order=desc",{schemaId:this.form,row_id:this.rowId}).then((function(e){e.data.data.forEach((function(e){"edit"!=e.action&&t.logs.push({action:"store"==e.action?"Бүртгэсэн":"Зассан",user:e.last_name.charAt(0)+"."+e.first_name,created_at:moment(e.created_at).format("YYYY-MM-DD HH:mm:ss")}),"edit"==e.action&&t.reads.push({user:e.last_name.charAt(0)+"."+e.first_name,created_at:moment(e.created_at).format("YYYY-MM-DD HH:mm:ss")})}))}))}},watch:{rowId:function(){this.getLog()}},mounted:function(){this.getLog()}};const s=(0,n(51900).Z)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"crud-log"},[e("div",{staticClass:"fieldset"},[e("legend",[t._v(t._s(t.lang.lang))]),t._v(" "),e("Table",{attrs:{columns:t.logColumns,data:t.logs,size:"small",height:t.logs.length>=3?200:100}})],1),t._v(" "),e("div",{staticClass:"fieldset"},[e("legend",[t._v(t._s(t.lang.Information_viewing_history))]),t._v(" "),e("Table",{attrs:{columns:t.readColumns,data:t.reads,size:"small",height:t.reads.length>=3?200:80}})],1)])}),[],!1,null,null,null).exports},6781:(t,e,n)=>{"use strict";n.d(e,{Z:()=>d});function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}var s="cubic-bezier(0.39, 0.575, 0.565, 1)";const r={name:"VueSideoutPanel",props:{closeByBtn:{default:!1,required:!1},value:{default:!1,required:!0},count:{default:1,validator:function(t){return t>0&&t<=2}},closeHtml:{default:"Close"},closeAllHtml:{type:String,default:"Close all"},widths:{type:Array,default:function(){return 1==this.count?["100%"]:["100%","50%"]},validator:function(t){return t.reduce((function(t,e){return t&&/col-(\w+-)?\d+|\d+px|\d+%/.test(e)}),!0)}},classes:{type:Array,default:function(){return new Array(5).fill("default")},validator:function(t){return t.reduce((function(t,e){return t&&(!e||"string"==typeof e)}),!0)}},styles:{type:Array,default:function(){return[{},{},{},{},{}]},validator:function(t){return t.reduce((function(t,e){return t&&(!e||"object"==i(e))}),!0)}}},data:function(){return{isVisibleDock:this.value,isVisibleSections:[],isShifted:!1,d_styles:[],d_classes:[]}},created:function(){this.init()},watch:{value:function(){this.isVisibleDock=this.value},widths:function(){this.init()}},computed:{isVisibleCloseAll:function(){return 2==this.count&&!this.isShifted}},methods:{init:function(){var t=this;this.isShifted=!1,this.d_styles=[],this.d_classes=[];for(var e=0;e<5;e++)this.classes[e]&&this.classes[e].length>=0?2==e&&"same"==this.classes[e]?this.d_classes.push(this.classes[e-1]):this.d_classes.push(this.classes[e]):this.d_classes.push("default");2==this.count&&(this.d_classes[1]+=" vsp-br",this.d_classes[2]+=" vsp-bl");for(var n=0;n<5;n++)2==n&&this.styles[n]&&this.styles[n].same?this.d_styles.push(Object.assign({},this.styles[n-1]||{})):this.d_styles.push(this.styles[n]||{});var i=!1;1==this.count?(this.widths[0]=this.widths[0]||this.widths[1],this.widths[1]="100%"):/\d+%/.test(this.widths[1])&&(this.d_styles[2].width="".concat(100-this.widths[1].slice(0,-1),"%"),i=!0),this.widths.forEach((function(e,n){if(/col-(\w+-)?\d+/.test(e))t.d_classes[n]+=" "+e;else{if(2==n&&i)return;t.d_styles[n].width=e}})),this.isVisibleSections=new Array(this.count).fill(1)},_style:function(t){return this.d_styles[t]},_class:function(t){return this.d_classes[t]},setTransform:function(t,e){["webkitTransform","MozTransform","msTransform","OTransform","transform"].forEach((function(n){t.style[n]=e[0]})),t.style.transitionTimingFunction=e[1],t.style.transitionDuration=e[2]},d_shift:function(){var t=-this.$refs.section[1].offsetWidth;this.setTransform(this.$refs.dock,["right","cubic-bezier(0.215, 0.61, 0.355, 1)",".8s"]),this.$refs.dock.style.right="".concat(t,"px"),this.isShifted=!0},s_beforeLeave:function(){this.isVisibleSections[1]?(this.$refs.dock.style.boxShadow="none",this.$refs.section[1].style.boxShadow="-3px 3px 9px rgba(0, 0, 0, 0.3)"):this.d_shift()},s_afterLeave:function(){this.isVisibleSections[1]&&(this.$refs.dock.style.boxShadow="-3px 3px 9px rgba(0, 0, 0, 0.3)",this.$refs.dock.style.width=this.$refs.section[0].offsetWidth+"px",this.$refs.section[0].style.width="100%")},d_enter:function(){2==this.count&&!this.showExtra&&this.d_shift()},closeDock:function(){this.isVisibleDock=!1,this.init(),this.$emit("close")},close:function(t){1==this.count?this.closeDock():this.isShifted?(this.setTransform(this.$refs.dock,["right",s,"1.2s"]),this.closeDock()):0==t?this.$set(this.isVisibleSections,0,0):1==t&&this.isVisibleSections[0]?this.d_shift():this.closeDock()},closeAll:function(){this.closeByBtn||(this.isShifted&&this.setTransform(this.$refs.dock,["right",s,"1.2ss"]),this.closeDock())}}};var o=n(93379),a=n.n(o),l=n(66281),c={insert:"head",singleton:!1};a()(l.Z,c);l.Z.locals;const d=(0,n(51900).Z)(r,(function(){var t=this,e=t._self._c;return e("div",[e("transition",{attrs:{name:"fade"}},[t.isVisibleDock?e("div",{staticClass:"blackout",on:{click:t.closeAll}}):t._e()]),t._v(" "),e("transition",{attrs:{name:"slide-out"},on:{enter:t.d_enter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisibleDock,expression:"isVisibleDock"}],ref:"dock",staticClass:"dock",class:t._class(0),style:t._style(0)},[e("transition-group",{attrs:{name:"slide-out"},on:{"before-leave":t.s_beforeLeave,afterLeave:t.s_afterLeave}},t._l(t.isVisibleSections,(function(n,i){return n?e("section",{key:"k"+i,ref:"section",refInFor:!0,staticClass:"panel",class:t._class(i+1),style:t._style(i+1)},[e("a",{staticClass:"action-close",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.close(i)}}},[e("Icon",{attrs:{type:"ios-close-circle-outline"}})],1),t._v(" "),t._t("default")],2):t._e()})),0)],1)])],1)}),[],!1,null,"1a0b336a",null).exports},48351:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});var i=n(6781),s=n(78151);const r={mixins:[n(98188).Z],data:function(){return{form_width:800,openSlidePanel:!1,exportLoading:!1}},components:{"slide-panel":i.Z,"crud-log":s.Z},computed:{lang:function(){var t=this,e=["_add","Information_viewing_history"];return e.reduce((function(n,i,s){return n[i]=t.$t("crud."+e[s]),n}),{})}},methods:{templateEdit:function(){this.openSlidePanel=!0},templateOnSuccess:function(){this.openSlidePanel=!1},templateOnError:function(){},onReady:function(t){this.form_width=t.width}}};const o=(0,n(51900).Z)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"offcanvas-template"},[e("div",{staticClass:"crud-page"},[t.withoutHeader?e("portal",{attrs:{to:"header-left"}},[e("h3",[t._v(t._s(t.title))]),t._v(" "),!t.permissions||t.permissions.c?e("span",{staticClass:"divider"}):t._e(),t._v(" "),!t.permissions||t.permissions.c?e("Button",{attrs:{type:"success",shape:"circle",size:"small",icon:"md-add"},on:{click:function(e){t.openSlidePanel=!0,t.editMode=!1}}},[t._v("\n                "+t._s(t.lang._add)+"\n            ")]):t._e()],1):t._e(),t._v(" "),t.withoutHeader?e("portal",{attrs:{to:"header-right"}},[e("krudtools",{attrs:{search:t.search,refresh:t.refresh,exportExcel:t.exportExcel,importExcel:t.importExcel,exportLoading:t.exportLoading,print:t.print,save:t.save,isPrint:t.isPrint,isExcel:t.isExcel,isExcelUpload:t.isExcelUpload,isRefresh:t.isRefresh,isSave:t.isSave}})],1):t._e(),t._v(" "),t.withoutHeader?t._e():e("div",{staticClass:"crud-page-header"},[t.hasNavSlot?e("div",{staticClass:"crud-page-header-left"},[t._t("nav"),t._v(" "),!t.permissions||t.permissions.c?e("span",{staticClass:"divider"}):t._e(),t._v(" "),!t.permissions||t.permissions.c?e("Button",{attrs:{type:"success",shape:"circle",size:"small",icon:"md-add"},on:{click:function(e){t.openSlidePanel=!0,t.editMode=!1}}},[t._v("\n                    "+t._s(t.lang._add)+"}\n                ")]):t._e()],2):e("div",{class:"crud-page-header-left ".concat(t.hasNavSlot?"":"no-nav")},[null!=t.$props.title?e("h3",[t._v(t._s(t.$props.title.replace("-"," ")))]):t._e(),t._v(" "),!t.permissions||t.permissions.c?e("span",{staticClass:"divider"}):t._e(),t._v(" "),!t.permissions||t.permissions.c?e("Button",{attrs:{type:"success",shape:"circle",size:"small",icon:"md-add"},on:{click:function(e){t.openSlidePanel=!0,t.editMode=!1}}},[t._v("\n                    "+t._s(t.lang._add)+"\n                ")]):t._e()],1),t._v(" "),e("div",{staticClass:"crud-page-header-right"},[e("div",{staticClass:"tooloptions"},[t._t("tooloptions")],2),t._v(" "),e("krudtools",{attrs:{search:t.search,refresh:t.refresh,exportExcel:t.exportExcel,exportLoading:t.exportLoading,print:t.print,save:t.save,isPrint:t.isPrint,isExcel:t.isExcel,isRefresh:t.isRefresh,isSave:t.isSave}}),t._v(" "),t._t("right")],2)]),t._v(" "),e("div",{staticClass:"crud-page-body"},[t.hasVNavSlot?e("div",{staticClass:"v-nav"},[t._t("v-nav")],2):t._e(),t._v(" "),e("div",{staticClass:"dg-flex"},[!t.permissions||t.permissions.r?e("datagrid",{ref:"grid",attrs:{schemaID:t.grid,paginate:50,fnClone:t.clone,fnEdit:t.edit,fnQuickEdit:t.quickEdit,fnView:t.view,actions:t.$props.actions,dblClick:t.$props.dbClickAction,onRowSelect:t.$props.onRowSelect,permissions:t.permissions,page_id:t.page_id,custom_condition:t.$props.custom_condition?t.$props.custom_condition:null,user_condition:t.user_condition?t.user_condition.gridCondition:null}}):t._e()],1)]),t._v(" "),e("slide-panel",{attrs:{widths:[t.form_width?t.form_width:"600px"],closeByBtn:!0,withCrudLog:t.withCrudLog},on:{close:function(e){t.openSlidePanel=!1}},model:{value:t.openSlidePanel,callback:function(e){t.openSlidePanel=e},expression:"openSlidePanel"}},[e("div",{class:t.withCrudLog&&t.editMode?"with-crud-log":""},[e("dataform",{ref:"form",attrs:{schemaID:t.form,editMode:t.editMode,onSuccess:t.onSuccess,onReady:t.onReady,do_render:t.openSlidePanel,permissions:t.permissions,page_id:t.page_id,user_condition:t.user_condition?t.user_condition.formCondition:null,onError:t.onError}})],1)])],1)])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=krud-window.2e9bce528ee6f9e5.js.map