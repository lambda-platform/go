import{m as E}from"./DugTeqwv.js";import{S as c,I as M,b as p,F as y,V as T,M as P,c as B,d as F,a as b,f as q,g as x,h as z,P as $,t as K}from"./Qfm9_UtH.js";import{b as A,a as U,s as O}from"./bkvqAJb5.js";import{V as D,a as k,h as f,e as W,t as X,c as Y,D as H,M as _,W as L,f as N,i as R,g as Z,F as j}from"./CeS5Ktbn.js";import{h as J,b as Q,_ as ee}from"./Dp5pR5g4.js";import{O as te,_ as se}from"./BCQ3JQlN.js";import{o as g,q as ie,B as oe,A as v,y as r,z as w}from"./Bb3cLOD_.js";import"./2tDPZFmp.js";import"./DTdGTy9U.js";import"./BYTvHWBW.js";import"./CU0CZyNU.js";const ae=new c({image:new M({anchor:[.5,1],anchorXUnits:"fraction",anchorYUnits:"fraction",src:"/map/marker.svg",scale:1})}),S=new c({stroke:new p({color:"blue",width:3})}),V=new c({fill:new y({color:"rgba(255, 255, 255, 0.4)"}),stroke:new p({color:"blue",width:1.5})}),C=new c({stroke:new p({color:"rgba(10,226,246,0.8)",width:2}),fill:new y({color:"rgba(8,227,248,0.7)"})}),I=new c({stroke:new p({color:"rgba(10,226,246,0.8)",width:3})}),re=new T({format:new P,url:"https://imap.mn/06826032-4372-11ec-81d3-0242ac130003/{z}/{x}/{y}.pbf",tileGrid:B({maxZoom:19}),tilePixelRatio:16}),G=new D({wrapX:!1}),ne=new D,le=new k({source:ne,style:function(e){return e.getGeometry().getType()==="LineString"?I:C}});window.selectionLayerID=null;window.selectionFeatureID=null;window.selectedLayer=null;const ce=new k({source:G,style:e=>{switch(e.getGeometry().getType()){case"Point":return ae;case"LineString":return S;case"MultiLineString":return S;case"Polygon":return V;case"MultiPolygon":return V;default:return null}}}),he=e=>K(e,"EPSG:3857","EPSG:4326"),m=new te({autoPan:{animation:{duration:250}}}),de={components:{basemapToggle:A,basemapGallery:U,starter:O},mixins:[E],data(){let e="iMap";const s=localStorage.getItem("selectedBaseMapKey");return s&&(e=s),{mapID:this.meta.mapID?this.meta.mapID:"91a9eaac-3e0c-40a1-a9bb-09a1ed70d9f8",categories:[],map:null,pointLayer:null,layerVisible:!0,zoom:16,bases:f,baseKey:e,base:new F({source:f[e]}),iMapBase:new b({source:re,style:"https://imap.mn/06826032-4372-11ec-81d3-0242ac130003/style.json"}),isGalleryVisible:!1,ready:!1,draw:null,modify:null,is3D:!1,selectedType:this.meta.selectedType?this.meta.selectedType:"Point",vectorSource:G,started:!1}},mounted(){!this.meta.hidden&&this.do_render&&this.fetchMapLayers()},methods:{fetchMapLayers(){J.get(`/mapserver/api/map/${this.mapID}`).then(e=>{this.categories=e.data.categories,this.initMap()}).catch(e=>{this.error=e.response?e.response.data.message:"An unknown error occurred"})},initMap(){const e=this.$refs.popup,s=this.$refs.popupContent,t=this.$refs.popupCloser;m.setElement(e),t.onclick=()=>(m.setPosition(void 0),t.blur(),this.clearSelection(),!1),this.map=new q({layers:[],target:this.$refs.map,view:new x({center:z([106.8723,47.8838]),zoom:this.zoom,maxZoom:19}),overlays:[m]}),this.itemValue&&this.setElement(),W(this.iMapBase,"https://imap.mn/06826032-4372-11ec-81d3-0242ac130003/style.json").then(()=>{this.baseKey==="iMap"?(this.base.setVisible(!1),this.iMapBase.setVisible(!0)):(this.iMapBase.setVisible(!1),this.base.setVisible(!0)),this.map.addLayer(this.iMapBase),this.map.addLayer(this.base),this.map.addLayer(le),this.map.addLayer(ce),this.renderLayers()}),this.ready=!0,this.map.once("rendercomplete",()=>{this.map.on("singleclick",i=>this.showInfo(i,s))})},showInfo(e,s){let t=0;this.map.forEachFeatureAtPixel(e.pixel,(i,o)=>{if(t===0&&o)if(o.values_.id!=="highlight"&&i.getType&&o.values_.layerID){this.clearSelection();const a=i.getProperties(),h=e.coordinate;for(;s.firstChild;)s.removeChild(s.firstChild);const d=document.createElement("p");d.textContent=o.get("layerTitle"),s.appendChild(d);const l=document.createElement("p");o.values_.popup?l.innerHTML=X(o.values_.popup.template,a):l.textContent=`Нэр: ${a.name?a.name:a.id}`,s.appendChild(l),m.setPosition(h);const n=i.getType();(n==="Polygon"||n==="LineString")&&(window.selectedLayer=o,window.selectionLayerID=o.values_.layerID,window.selectionFeatureID=i.getId())}else this.clearSelection();t++})},clearSelection(){window.selectionLayerID=null,window.selectionFeatureID=null,window.selectedLayer&&(window.selectedLayer.changed(),window.selectedLayer=null),m.setPosition(void 0)},changeLayerVisible(e,s){let t=this.categories[e].layers.findIndex(i=>i.id===s);t>=0&&(this.categories[e].layers[t].is_visible=!this.categories[e].layers[t].is_visible,this.categories[e].layers[t].layer.setVisible(this.categories[e].layers[t].is_visible))},changeLayerUniqueVisible(e,s,t){let i=this.categories[e].layers.findIndex(o=>o.url===s.url);if(i>=0){let o=this.categories[e].layers[i].legends.findIndex(a=>a.unique_value===t.unique_value);o>=0&&(this.categories[e].layers[i].legends[o].unique_visible=!this.categories[e].layers[i].legends[o].unique_visible,this.categories[e].layers[i].layer.changed())}},renderLayers(){this.categories.forEach((e,s)=>{e.layers.forEach((t,i)=>{if((t.geometry_type==="Point"||t.geometry_type==="Polygon"||t.geometry_type==="LineString")&&t.legends&&t.legends.length>0){let o=null;t.geometry_type==="Polygon"&&(o=Y(t.legends[0].fill_color,.5)),this.categories[s].layers[i].layer=new b({declutter:!0,source:new T({format:new P,url:`${Q}/tiles/${t.id}/{z}/{x}/{y}.pbf`}),style:a=>{let h=a.getGeometry();if(h.getType()==="Point"){let d=t.legends[0].marker;if(t.unique_value_field&&t.legends.length>1){let l=a.get(t.unique_value_field);if(l){let n=t.legends.findIndex(u=>u.unique_value.toString()===l.toString());if(n>=0)if(this.categories[s].layers[i].legends[n].unique_visible)n>=0&&(d=t.legends[n].marker);else return null}}return new c({image:new M({src:`https://otorchin.gov.mn${d}`,scale:25/Math.max(25,25),anchor:[.5,1],anchorXUnits:"fraction",anchorYUnits:"fraction"})})}else{if(h.getType()==="Polygon")return window.selectionLayerID===t.id&&window.selectionFeatureID===a.getId()?C:new c({fill:new y({color:o}),stroke:new p({color:t.legends[0].stroke_color,width:1}),text:t.label&&t.label.color?new Text({font:t.label.font,fill:new y({color:t.label.color}),text:a.get(t.label.field)}):void 0});if(h.getType()==="LineString")return window.selectionLayerID===t.id&&window.selectionFeatureID===a.getId()?I:new c({stroke:new p({color:t.legends[0].fill_color,width:2})})}}}),this.categories[s].layers[i].layer.set("layerID",t.id),this.categories[s].layers[i].layer.set("popup",{template:t.popup_template}),this.categories[s].layers[i].layer.set("layerTitle",t.layer_title),this.categories[s].layers[i].layer.setVisible(t.is_visible),this.map.addLayer(this.categories[s].layers[i].layer)}})})},start(){this.addInteraction(this.selectedType)},addInteraction(e){this.draw&&(this.map.removeInteraction(this.draw),this.map.removeInteraction(this.modify)),e!=="None"&&(this.draw=new H({source:this.vectorSource,type:e==="MultiLine"?"MultiLineString":e}),this.draw.on("drawstart",this.clear),this.draw.on("drawend",this.onDrawEnd),this.map.addInteraction(this.draw),this.started=!0,this.modify=new _({source:this.vectorSource}),this.modify.on("modifyend",this.onDrawEnd),this.map.addInteraction(this.modify))},clear(){this.vectorSource.clear()},onDrawEnd(e){let s=null;e.features?s=e.features.getArray()[0]:s=e.feature;const t=s.getGeometry().clone(),i=new L;if(t.getType()==="Point"){let o;o=new $(N(he(t.getCoordinates()),this.is3D)),this.model.form[this.model.component]=i.writeGeometry(o)}else t.transform("EPSG:3857","EPSG:4326"),this.model.form[this.model.component]=i.writeGeometry(t);this.started=!1,this.map.removeInteraction(this.draw)},setElement(){if(this.clear(),this.editMode){const s=new L().readGeometry(R(this.itemValue)==="hexewkb"?Z(this.itemValue):this.itemValue),t=new j({geometry:s.transform("EPSG:4326","EPSG:3857")});if(this.vectorSource.addFeature(t),this.modify=new _({source:this.vectorSource}),this.modify.on("modifyend",this.onDrawEnd),this.map.addInteraction(this.modify),s.getType()==="Point"){const i=s.getCoordinates();this.map.getView().setCenter(i)}else{const i=this.vectorSource.getExtent();this.map.getView().fit(i,{size:this.map.getSize(),padding:[21,21,21,21]})}}},setBaseLayer(e){localStorage.setItem("selectedBaseMapKey",e),this.baseKey=e,this.base.setSource(f[e]),this.baseKey==="iMap"?(this.base.setVisible(!1),this.iMapBase.setVisible(!0)):(this.base.setVisible(!0),this.iMapBase.setVisible(!0))},toggleGalleryVisibility(){this.isGalleryVisible=!this.isGalleryVisible},destroy(){this.map&&(this.clear(),this.map.getInteractions().forEach(e=>{this.map.removeInteraction(e)}),this.map.getLayers().getArray().slice().forEach(e=>{this.map.removeLayer(e)}),this.map.setTarget(null),this.map.dispose(),this.map=null,this.ready=!1)}},watch:{selectedType(e){this.addInteraction(e)},itemValue(e,s){e&&!s&&this.setElement()},do_render(e){e?this.editMode?this.itemValue===null&&this.initMap():this.initMap():this.destroy()}}},pe={mixins:[de],components:{LayerList:se},data(){return{is3D:!1,zoom:16,openKeys:["0","0-0","1","1-0"],selectedKeys:[],openLayerList:!1}},methods:{}},me={class:"relative overflow-hidden"},ue=r("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"512.000000pt",height:"512.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet"},[r("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},[r("path",{d:`M1388 3947 c-643 -292 -1165 -534 -1160 -538 7 -7 2267 -1035 2312
-1052 22 -8 183 63 1185 518 638 290 1164 530 1168 534 6 6 -2258 1044 -2323
1065 -8 3 -540 -234 -1182 -527z`}),r("path",{d:`M443 2667 c-122 -56 -222 -104 -222 -107 0 -8 2322 -1060 2339 -1060
17 -1 2339 1052 2340 1060 0 11 -460 212 -473 207 -8 -3 -431 -195 -940 -426
l-926 -421 -935 425 c-514 234 -941 425 -948 424 -7 -1 -113 -47 -235 -102z`}),r("path",{d:`M453 1817 c-122 -56 -224 -105 -227 -108 -3 -3 521 -245 1165 -537
l1170 -532 1170 532 c643 292 1166 535 1162 539 -4 4 -109 53 -232 108 l-223
101 -939 -426 -938 -427 -938 427 c-516 234 -940 426 -943 425 -3 0 -105 -46
-227 -102z`})])],-1),ge=[ue],ye={class:"menu_style"},fe={ref:"map",class:"map"},we={class:"col-span-12 lg:col-span-8 xl:col-span-9 2xl:col-span-8 web-map"},be={ref:"popup",class:"ol-popup text-[13px]"},_e={href:"#",ref:"popupCloser",class:"ol-popup-closer"},Le={ref:"popupContent"};function ve(e,s,t,i,o,a){const h=g("LayerList"),d=g("a-drawer"),l=g("starter"),n=g("lambda-form-item");return ie(),oe(n,{label:e.label,name:e.model.component,meta:e.meta},{default:v(()=>[r("div",me,[r("div",{class:"toggle-basemap",style:{"z-index":"1"},onClick:s[0]||(s[0]=u=>o.openLayerList=!0)},ge),w(d,{open:o.openLayerList,"onUpdate:open":s[1]||(s[1]=u=>o.openLayerList=u),class:"draw-layer-list","root-class-name":"root-class-name","root-style":{color:"blue"},style:{color:"red"},title:"Давхарга",placement:"right",onAfterOpenChange:e.afterOpenChange},{default:v(()=>[r("div",ye,[w(h,{categories:e.categories,onChangeLayerUniqueVisible:e.changeLayerUniqueVisible,onChangeLayerVisible:e.changeLayerVisible},null,8,["categories","onChangeLayerUniqueVisible","onChangeLayerVisible"])])]),_:1},8,["open","onAfterOpenChange"]),r("div",fe,null,512),r("div",we,[r("div",be,[r("a",_e,null,512),r("div",Le,null,512)],512)]),w(l,{started:e.started,onStart:e.start,selectedType:e.selectedType},null,8,["started","onStart","selectedType"])])]),_:1},8,["label","name","meta"])}const Be=ee(pe,[["render",ve]]);export{Be as default};
