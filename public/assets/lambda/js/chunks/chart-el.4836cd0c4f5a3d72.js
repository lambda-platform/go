"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6593],{94161:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=function(){return Promise.all([n.e(8204),n.e(5470)]).then(n.bind(n,69530))},i=function(){return Promise.all([n.e(8204),n.e(4869)]).then(n.bind(n,83395))},o=function(){return Promise.all([n.e(8204),n.e(2203)]).then(n.bind(n,8328))},a=function(){return Promise.all([n.e(8204),n.e(7679)]).then(n.bind(n,41933))},l=function(){return Promise.all([n.e(8204),n.e(6967)]).then(n.bind(n,29011))};const s={props:["src","id","chart_filter","hideTitle","filters","hideZoom","minH","limit","order","projectDomain"],data:function(){return{currentProperties:null,type:"",loading:!0}},methods:{element:function(e){if(null!=e){if("AreaChart"==e||"LineChart"==e||"ColumnChart"==e)return r;if("PieChart"==e||"TreeMapChart"==e||"FunnelChart"==e)return i;if("DataTable"==e)return o;if("Radar"==e)return a;if("countBox"==e)return l}},init:function(){var e=this;this.loading=!0,axios.get(this.$props.src,{transformRequest:function(e,t){delete t.common["X-CSRF-TOKEN"],delete t["X-CSRF-TOKEN"],delete t.common["X-Requested-With"]}}).then((function(t){e.currentProperties=JSON.parse(t.data.data.schema),e.type=e.currentProperties.type,e.loading=!1})).catch((function(e){console.log(e)}))},changeFilter:function(e){this.$emit("changeFilter",e)},unFilter:function(){this.$emit("unFilter")}},mounted:function(){this.init()},computed:{}};const c=(0,n(51900).Z)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:"AreaChart"==e.type||"LineChart"==e.type||"ColumnChart"==e.type?"chart-element-wide":"countBox"==e.type?"count-box":"chart-element",style:e.minH?"min-height: "+e.minH:""},[e.loading?n("Spin",{attrs:{size:"large",fix:""}}):n(e.element(e.type),e._b({tag:"component",attrs:{hideTitle:e.hideTitle,projectDomain:e.projectDomain,filters:e.filters,hideZoom:e.hideZoom,chart_filter:e.chart_filter,limit:e.limit,order:e.order,id:e.id},on:{changeFilter:e.changeFilter,unFilter:e.unFilter}},"component",e.currentProperties,!1))],1)}),[],!1,null,null,null).exports},51900:(e,t,n)=>{function r(e,t,n,r,i,o,a,l){var s,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=s):i&&(s=l?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),s)if(c.functional){c._injectStyles=s;var u=c.render;c.render=function(e,t){return s.call(t),u(e,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,s):[s]}return{exports:e,options:c}}n.d(t,{Z:()=>r})}}]);
//# sourceMappingURL=chart-el.4836cd0c4f5a3d72.js.map