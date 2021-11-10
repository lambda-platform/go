"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9737],{55668:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});const a={props:["model","rule","label","meta"],data:function(){return{map:null,center:{lat:47.9197668,lng:106.9183483},zoom:11,marker:null,fromCityCenter:0}},computed:{coordinate:function(){return this.model.form[this.model.component]},lang:function(){var t=this,e=["fromCityCenter","latitude","longitude"];return e.reduce((function(n,a,i){return n[a]=t.$t("dataGrid."+e[i]),n}),{})}},watch:{coordinate:function(t,e){if((e&&!t||t&&!e)&&t){var n=JSON.parse(t);this.center={lat:parseFloat(n.lat),lng:parseFloat(n.lng)},this.init()}}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.map=new google.maps.Map(this.$el.getElementsByClassName("lambda-map")[0],{zoom:this.zoom,center:this.center}),this.marker=new google.maps.Marker({map:this.map,draggable:!0,animation:google.maps.Animation.DROP,position:this.center}),google.maps.event.addListener(this.map,"click",(function(e){t.model.form[t.model.component]=JSON.stringify(e.latLng),t.marker.setPosition(e.latLng)})),this.marker.addListener("position_changed",this.moveEvent.bind(this))},calcDistance:function(t,e){var n=47.91854,a=.017453292519943295,i=Math.cos,l=.5-i((t-n)*a)/2+i(n*a)*i(t*a)*(1-i((e-106.917658)*a))/2;this.fromCityCenter=(12742*Math.asin(Math.sqrt(l))).toFixed(2)},moveEvent:function(){this.center={lat:this.marker.getPosition().lat().toFixed(7),lng:this.marker.getPosition().lng().toFixed(7)},this.calcDistance(this.center.lat,this.center.lng);new google.maps.LatLng(this.center.lat,this.center.lng);this.model.form[this.model.component]=JSON.stringify(this.center)},updateLat:function(t){this.center.lat=parseFloat(t.target.value).toFixed(7);var e=new google.maps.LatLng(this.center.lat,this.center.lng);this.marker.setPosition(e)},updateLng:function(t){this.center.lng=parseFloat(t.target.value).toFixed(7);var e=new google.maps.LatLng(this.center.lat,this.center.lng);this.marker.setPosition(e)}}};const i=(0,n(51900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lambda-map-wrapper"},[n("FormItem",{attrs:{label:t.label,prop:t.rule}},[n("div",{staticClass:"lambda-lat-lng"},[n("Input",{attrs:{placeholder:t.lang.latitude},on:{"on-blur":t.updateLat},model:{value:t.center.lat,callback:function(e){t.$set(t.center,"lat",e)},expression:"center.lat"}}),t._v(" "),n("Input",{attrs:{placeholder:t.lang.longitude},model:{value:t.center.lng,callback:function(e){t.$set(t.center,"lng",e)},expression:"center.lng"}})],1),t._v(" "),n("span",[t._v(t._s(t.lang.fromCityCenter)+": "+t._s(t.fromCityCenter)+" км")]),t._v(" "),n("div",{staticClass:"lambda-map"})])],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=form-field-Map.9af81020537ec772.js.map