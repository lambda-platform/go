import{C as s}from"./ck.b19d9291.js";import{E as p}from"./ckeditor.2de088bc.js";import{m as c}from"./_mixin.cdf943e0.js";import{a as u}from"./entry.7857a8b1.js";import{U as n,Y as r,a8 as a,a4 as g}from"./vue.9a5b07a3.js";import"./ant.9c0b679d.js";import"./cryptoJs.12d0d048.js";import"./common.a3ab4f3b.js";import"./moment.8b5e7d95.js";import"./ag.16cfe0bb.js";import"./lodash.2101602c.js";import"./numeral.08866ac3.js";const f={mixins:[c],components:{ckeditor:s.component},data(){return{editor:p,editorConfig:{toolbar:{items:["heading","|","bold","italic","|","link","|","blockQuote","|","insertTable","|","indent","outdent","|","mediaEmbed"],shouldNotGroupWhenFull:!0},placeholder:""}}},created(){this.meta.editorType=="article"?this.editorConfig={toolbar:{items:["undo","redo","|","selectAll","|","bold","italic","|","link","|","bulletedList","numberedList","|","heading","|","blockQuote","|","insertTable","|","indent","outdent","|","mediaEmbed","imageUpload","ckfinder","|"],shouldNotGroupWhenFull:!0},ckfinder:{uploadUrl:"/vendor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json"}}:this.meta.editorType=="full"&&(this.editorConfig={toolbar:{items:["undo","redo","|","selectAll","findAndReplace","|","alignment","bold","italic","link","|","linkImage","blockQuote","code","codeBlock","|","fontBackgroundColor","fontColor","fontFamily","fontSize","heading","|","removeHighlight","highlight","|","horizontalLine","htmlEmbed","|","imageTextAlternative","toggleImageCaption","uploadImage","imageInsert","resizeImage","imageStyle:inline","imageStyle:alignLeft","imageStyle:alignRight","imageStyle:alignCenter","imageStyle:alignBlockLeft","imageStyle:alignBlockRight","imageStyle:block","imageStyle:side","imageStyle:wrapText","imageStyle:breakText","|","indent","outdent","|","numberedList","bulletedList","|","pageBreak","removeFormat","|","specialCharacters","restrictedEditingException","strikethrough","subscript","superscript","|","insertTable","tableColumn","tableRow","mergeTableCells","toggleTableCaption","tableCellProperties","tableProperties","|","mediaEmbed","ckfinder","|","sourceEditing"],shouldNotGroupWhenFull:!0},ckfinder:{uploadUrl:"/vendor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json"}})},methods:{onBlur(e){},onFocus(e){},onReady(e){this.model.form[this.model.component]||(this.model.form[this.model.component]="123")}}};function b(e,o,h,k,l,i){const d=n("ckeditor"),m=n("lambda-form-item");return r(),a(m,{label:e.label,name:e.model.component,meta:e.meta},{default:g(()=>[(r(),a(d,{ref:"ckeditor",editor:l.editor,modelValue:e.model.form[e.model.component],"onUpdate:modelValue":o[0]||(o[0]=t=>e.model.form[e.model.component]=t),config:l.editorConfig,key:e.meta.editorType,placeholder:e.placeholder,disabled:e.disabled,onReady:i.onReady,onBlur:o[1]||(o[1]=t=>i.onBlur(t)),onFocus:o[2]||(o[2]=t=>i.onFocus(t))},null,8,["editor","modelValue","config","placeholder","disabled","onReady"]))]),_:1},8,["label","name","meta"])}const Q=u(f,[["render",b]]);export{Q as default};