"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[315],{35007:(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});const a={components:{},data:()=>({editMode:!1,src:""}),created(){let e=this.$route.params.id;this.$project?void 0!==e&&""!==e&&null!==e?(this.editMode=!0,this.src=`/lambda/puzzle/project/${this.$project.id}/datasource/${this.$route.params.id}`):this.src=`/lambda/puzzle/project/${this.$project.id}/datasource`:void 0!==e&&""!==e&&null!==e&&(this.editMode=!0,this.src=`/lambda/puzzle/schema/datasource/${this.$route.params.id}`)},methods:{onCreate(){this.$router.push("/datasource")},onUpdate(){this.$router.push("/datasource")}}};const r=(0,s(51900).Z)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"page "},[e.$project?s("data-source",{attrs:{projectID:e.$project.id,editMode:e.editMode,src:e.src,onCreate:e.onCreate,onUpdate:e.onUpdate}}):s("data-source",{attrs:{editMode:e.editMode,src:e.src,onCreate:e.onCreate,onUpdate:e.onUpdate}})],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=datasource-builder.cb9b2b8f5be88bf0.js.map