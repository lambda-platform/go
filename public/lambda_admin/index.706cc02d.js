import{a as _,s as o,K as f,P as g,M as y,v as w,b as x,r as n,o as d,e as p,f as l,w as u,c as b,l as a,h as k,i as C,t as I}from"./entry.edf531c9.js";const S={computed:{menuMode(){let i=localStorage.getItem("menuMode");if(i)return i}},data(){const i=o.get(f),e=o.get(g),t=o.get(y),s=o.get(w);return{options:{height:"1000px"},pageType:"",property:{base_url:x,withCrudLog:!1,withoutHeader:!1,page_id:null,template:"drawer",mode:"refresh",title:"",projects_id:null,grid:null,form:null,form_width:800,view_url:null,actions:null,user_condition:null,parent:[],permissions:{c:!1,r:!1,u:!1,d:!1}},iframeUrl:"",iframeTitle:"",submenu:[],showSub:!1,cruds:i,menu:t,menu_list:s,permissions:e.permissions,pageTitle:"",subMenuId:"0",showNestedMenu:!1}},methods:{getShowAbleChild(i){let e=i.findIndex(t=>this.can(t));return e>=0?i[e]:null},can(i){return this.permissions[i.id]?!!this.permissions[i.id].show:!1},getTitle(i){if(i.link_to=="crud"){let e=this.cruds.findIndex(t=>t.id==i.url);return e>=0?this.cruds[e].title:""}else return i.title},getPage(){if(this.menu_list){let i=this.menu_list.findIndex(e=>e.id===this.$route.params.menu_id);if(i>=0){let e=this.menu_list[i];switch(this.pageType=e.link_to,this.pageType){case"crud":let t=this.cruds.findIndex(s=>s.id==e.url);if(t>=0){this.$route.meta.title=this.cruds[t].title,this.property.parent=e.parent,this.property.title=this.cruds[t].title,this.property.projects_id=this.cruds[t].projects_id,this.property.grid=this.cruds[t].grid,this.property.form=this.cruds[t].form,this.property.edit_id=this.cruds[t].edit_id,this.property.template=this.cruds[t].template,this.cruds[t].actions&&(this.property.actions=this.cruds[t].actions),this.property.main_tab_title=this.cruds[t].main_tab_title,this.property.form_width=this.cruds[t].form_width?this.cruds[t].form_width:null,this.property.view_url=this.cruds[t].view_url,this.property.permissions.c=this.permissions[e.id].c,this.property.permissions.r=this.permissions[e.id].r,this.property.permissions.u=this.permissions[e.id].u,this.property.permissions.d=this.permissions[e.id].d,this.property.permissions.gridDeleteConditionJS=this.permissions[e.id].gridDeleteConditionJS,this.property.permissions.gridEditConditionJS=this.permissions[e.id].gridEditConditionJS;let s={};this.permissions[e.id].formCondition&&(s.formCondition=this.permissions[e.id].formCondition),this.permissions[e.id].gridCondition&&(s.gridCondition=this.permissions[e.id].gridCondition),s&&(this.property.user_condition=s),this.property.page_id=e.id}break;case"link":window.location=this.menu[parentIndex].url;break;case"router-link":console.log(this.menu[parentIndex].url),this.$router.push(this.menu[parentIndex].url);break;case"iframe":this.iframeUrl=e.url,this.property.title=e.title;break}}}}},beforeMount(){this.getPage()}},T={class:"rounded-md grid grow grid-nogutter"},M={key:1,class:"iframe-page"},v=["src"];function N(i,e,t,s,r,E){const h=n("Title"),c=n("Head"),m=n("krud");return d(),p("div",T,[l(c,null,{default:u(()=>[l(h,null,{default:u(()=>[C(I(r.property.title),1)]),_:1})]),_:1}),r.pageType==="crud"&&r.property.page_id!=null?(d(),b(m,{key:0,template:r.property.template,property:r.property,class:"material",base_url:r.property.base_url},null,8,["template","property","base_url"])):a("",!0),r.pageType==="iframe"?(d(),p("div",M,[k("iframe",{src:r.iframeUrl},null,8,v)])):a("",!0)])}const B=_(S,[["render",N]]);export{B as default};