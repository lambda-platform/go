import{C as s}from"./fyDDORP1.js";import{C as c}from"./Dyti_Yin.js";import{m as p}from"./DugTeqwv.js";import{_ as u}from"./Dp5pR5g4.js";import{o as l,q as n,B as r,A as g}from"./Bb3cLOD_.js";import"./DTdGTy9U.js";import"./2tDPZFmp.js";import"./BYTvHWBW.js";import"./CU0CZyNU.js";const h={mixins:[p],components:{ckeditor:s.component},data(){return{editor:c,editorConfig:{toolbar:{items:["heading","|","bold","italic","|","link","|","blockQuote","|","insertTable","|","indent","outdent","|","mediaEmbed"],shouldNotGroupWhenFull:!0},placeholder:""},value:""}},created(){this.meta.editorType=="article"?this.editorConfig={toolbar:{items:["undo","redo","|","selectAll","|","bold","italic","|","link","|","bulletedList","numberedList","|","heading","|","blockQuote","|","insertTable","|","indent","outdent","|","mediaEmbed","imageUpload","ckfinder","|"],shouldNotGroupWhenFull:!0},ckfinder:{uploadUrl:"/vendor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json"}}:this.meta.editorType=="full"&&(this.editorConfig={toolbar:{items:["undo","redo","|","selectAll","findAndReplace","|","alignment","bold","italic","link","|","linkImage","blockQuote","code","codeBlock","|","fontBackgroundColor","fontColor","fontFamily","fontSize","heading","|","removeHighlight","highlight","|","horizontalLine","htmlEmbed","|","imageTextAlternative","toggleImageCaption","uploadImage","imageInsert","resizeImage","imageStyle:inline","imageStyle:alignLeft","imageStyle:alignRight","imageStyle:alignCenter","imageStyle:alignBlockLeft","imageStyle:alignBlockRight","imageStyle:block","imageStyle:side","imageStyle:wrapText","imageStyle:breakText","|","indent","outdent","|","numberedList","bulletedList","|","pageBreak","removeFormat","|","specialCharacters","restrictedEditingException","strikethrough","subscript","superscript","|","insertTable","tableColumn","tableRow","mergeTableCells","toggleTableCaption","tableCellProperties","tableProperties","|","mediaEmbed","ckfinder","|","sourceEditing"],shouldNotGroupWhenFull:!0},ckfinder:{uploadUrl:"/vendor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json"}})},methods:{onBlur(e){},onFocus(e){},onReady(e){},init(){this.model.form[this.model.component]!==null&&this.model.form[this.model.component]!==""&&(this.value=decodeURIComponent(escape(atob(this.model.form[this.model.component]))))},changeFormData(){this.model.form[this.model.component]=btoa(this.value)}},mounted(){this.init()},watch:{itemValue(e,o){(o&&!e||e&&!o)&&(e?this.init():this.value=null)}}};function f(e,o,b,k,t,i){const a=l("ckeditor"),d=l("lambda-form-item");return n(),r(d,{label:e.label,name:e.model.component,meta:e.meta},{default:g(()=>[(n(),r(a,{ref:"ckeditor",editor:t.editor,modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=m=>t.value=m),config:t.editorConfig,key:e.meta.editorType,placeholder:e.placeholder,disabled:e.disabled,onReady:i.onReady,onBlur:i.onBlur,onFocus:i.onFocus,onChange:i.changeFormData},null,8,["editor","modelValue","config","placeholder","disabled","onReady","onBlur","onFocus","onChange"]))]),_:1},8,["label","name","meta"])}const I=u(h,[["render",f]]);export{I as default};
