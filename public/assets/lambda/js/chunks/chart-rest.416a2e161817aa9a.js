/*! For license information please see chart-rest.416a2e161817aa9a.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[5143,5470,4869,2203,7679,6967],{90738:(t,e,i)=>{"use strict";i.d(e,{Dx:()=>n});var a=i(92077),r=i.n(a);function n(t){return r()(t).format("0,0")}},92077:function(t,e,i){var a,r;a=function(){var t,e,i,a,r,n="2.0.6",l={},o={},s={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},u={currentLocale:s.currentLocale,zeroFormat:s.zeroFormat,nullFormat:s.nullFormat,defaultFormat:s.defaultFormat,scalePercentBy100:s.scalePercentBy100};function h(t,e){this._input=t,this._value=e}return(t=function(i){var a,r,n,o;if(t.isNumeral(i))a=i.value();else if(0===i||void 0===i)a=0;else if(null===i||e.isNaN(i))a=null;else if("string"==typeof i)if(u.zeroFormat&&i===u.zeroFormat)a=0;else if(u.nullFormat&&i===u.nullFormat||!i.replace(/[^0-9]+/g,"").length)a=null;else{for(r in l)if((o="function"==typeof l[r].regexps.unformat?l[r].regexps.unformat():l[r].regexps.unformat)&&i.match(o)){n=l[r].unformat;break}a=(n=n||t._.stringToNumber)(i)}else a=Number(i)||null;return new h(i,a)}).version=n,t.isNumeral=function(t){return t instanceof h},t._=e={numberToFormat:function(e,i,a){var r,n,l,s,u,h,c,m=o[t.options.currentLocale],d=!1,f=!1,p=0,g="",b=1e12,v=1e9,y=1e6,_=1e3,x="",T=!1;if(e=e||0,n=Math.abs(e),t._.includes(i,"(")?(d=!0,i=i.replace(/[\(|\)]/g,"")):(t._.includes(i,"+")||t._.includes(i,"-"))&&(u=t._.includes(i,"+")?i.indexOf("+"):e<0?i.indexOf("-"):-1,i=i.replace(/[\+|\-]/g,"")),t._.includes(i,"a")&&(r=!!(r=i.match(/a(k|m|b|t)?/))&&r[1],t._.includes(i," a")&&(g=" "),i=i.replace(new RegExp(g+"a[kmbt]?"),""),n>=b&&!r||"t"===r?(g+=m.abbreviations.trillion,e/=b):n<b&&n>=v&&!r||"b"===r?(g+=m.abbreviations.billion,e/=v):n<v&&n>=y&&!r||"m"===r?(g+=m.abbreviations.million,e/=y):(n<y&&n>=_&&!r||"k"===r)&&(g+=m.abbreviations.thousand,e/=_)),t._.includes(i,"[.]")&&(f=!0,i=i.replace("[.]",".")),l=e.toString().split(".")[0],s=i.split(".")[1],h=i.indexOf(","),p=(i.split(".")[0].split(",")[0].match(/0/g)||[]).length,s?(t._.includes(s,"[")?(s=(s=s.replace("]","")).split("["),x=t._.toFixed(e,s[0].length+s[1].length,a,s[1].length)):x=t._.toFixed(e,s.length,a),l=x.split(".")[0],x=t._.includes(x,".")?m.delimiters.decimal+x.split(".")[1]:"",f&&0===Number(x.slice(1))&&(x="")):l=t._.toFixed(e,0,a),g&&!r&&Number(l)>=1e3&&g!==m.abbreviations.trillion)switch(l=String(Number(l)/1e3),g){case m.abbreviations.thousand:g=m.abbreviations.million;break;case m.abbreviations.million:g=m.abbreviations.billion;break;case m.abbreviations.billion:g=m.abbreviations.trillion}if(t._.includes(l,"-")&&(l=l.slice(1),T=!0),l.length<p)for(var C=p-l.length;C>0;C--)l="0"+l;return h>-1&&(l=l.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===i.indexOf(".")&&(l=""),c=l+x+(g||""),d?c=(d&&T?"(":"")+c+(d&&T?")":""):u>=0?c=0===u?(T?"-":"+")+c:c+(T?"-":"+"):T&&(c="-"+c),c},stringToNumber:function(t){var e,i,a,r=o[u.currentLocale],n=t,l={thousand:3,million:6,billion:9,trillion:12};if(u.zeroFormat&&t===u.zeroFormat)i=0;else if(u.nullFormat&&t===u.nullFormat||!t.replace(/[^0-9]+/g,"").length)i=null;else{for(e in i=1,"."!==r.delimiters.decimal&&(t=t.replace(/\./g,"").replace(r.delimiters.decimal,".")),l)if(a=new RegExp("[^a-zA-Z]"+r.abbreviations[e]+"(?:\\)|(\\"+r.currency.symbol+")?(?:\\))?)?$"),n.match(a)){i*=Math.pow(10,l[e]);break}i*=(t.split("-").length+Math.min(t.split("(").length-1,t.split(")").length-1))%2?1:-1,t=t.replace(/[^0-9\.]+/g,""),i*=Number(t)}return i},isNaN:function(t){return"number"==typeof t&&isNaN(t)},includes:function(t,e){return-1!==t.indexOf(e)},insert:function(t,e,i){return t.slice(0,i)+e+t.slice(i)},reduce:function(t,e){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof e)throw new TypeError(e+" is not a function");var i,a=Object(t),r=a.length>>>0,n=0;if(3===arguments.length)i=arguments[2];else{for(;n<r&&!(n in a);)n++;if(n>=r)throw new TypeError("Reduce of empty array with no initial value");i=a[n++]}for(;n<r;n++)n in a&&(i=e(i,a[n],n,a));return i},multiplier:function(t){var e=t.toString().split(".");return e.length<2?1:Math.pow(10,e[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce((function(t,i){var a=e.multiplier(i);return t>a?t:a}),1)},toFixed:function(t,e,i,a){var r,n,l,o,s=t.toString().split("."),u=e-(a||0);return r=2===s.length?Math.min(Math.max(s[1].length,u),e):u,l=Math.pow(10,r),o=(i(t+"e+"+r)/l).toFixed(r),a>e-r&&(n=new RegExp("\\.?0{1,"+(a-(e-r))+"}$"),o=o.replace(n,"")),o}},t.options=u,t.formats=l,t.locales=o,t.locale=function(t){return t&&(u.currentLocale=t.toLowerCase()),u.currentLocale},t.localeData=function(t){if(!t)return o[u.currentLocale];if(t=t.toLowerCase(),!o[t])throw new Error("Unknown locale : "+t);return o[t]},t.reset=function(){for(var t in s)u[t]=s[t]},t.zeroFormat=function(t){u.zeroFormat="string"==typeof t?t:null},t.nullFormat=function(t){u.nullFormat="string"==typeof t?t:null},t.defaultFormat=function(t){u.defaultFormat="string"==typeof t?t:"0.0"},t.register=function(t,e,i){if(e=e.toLowerCase(),this[t+"s"][e])throw new TypeError(e+" "+t+" already registered.");return this[t+"s"][e]=i,i},t.validate=function(e,i){var a,r,n,l,o,s,u,h;if("string"!=typeof e&&(e+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",e)),(e=e.trim()).match(/^\d+$/))return!0;if(""===e)return!1;try{u=t.localeData(i)}catch(e){u=t.localeData(t.locale())}return n=u.currency.symbol,o=u.abbreviations,a=u.delimiters.decimal,r="."===u.delimiters.thousands?"\\.":u.delimiters.thousands,!(null!==(h=e.match(/^[^\d]+/))&&(e=e.substr(1),h[0]!==n)||null!==(h=e.match(/[^\d]+$/))&&(e=e.slice(0,-1),h[0]!==o.thousand&&h[0]!==o.million&&h[0]!==o.billion&&h[0]!==o.trillion)||(s=new RegExp(r+"{2}"),e.match(/[^\d.,]/g)||(l=e.split(a)).length>2||(l.length<2?!l[0].match(/^\d+.*\d$/)||l[0].match(s):1===l[0].length?!l[0].match(/^\d+$/)||l[0].match(s)||!l[1].match(/^\d+$/):!l[0].match(/^\d+.*\d$/)||l[0].match(s)||!l[1].match(/^\d+$/))))},t.fn=h.prototype={clone:function(){return t(this)},format:function(e,i){var a,r,n,o=this._value,s=e||u.defaultFormat;if(i=i||Math.round,0===o&&null!==u.zeroFormat)r=u.zeroFormat;else if(null===o&&null!==u.nullFormat)r=u.nullFormat;else{for(a in l)if(s.match(l[a].regexps.format)){n=l[a].format;break}r=(n=n||t._.numberToFormat)(o,s,i)}return r},value:function(){return this._value},input:function(){return this._input},set:function(t){return this._value=Number(t),this},add:function(t){var i=e.correctionFactor.call(null,this._value,t);function a(t,e,a,r){return t+Math.round(i*e)}return this._value=e.reduce([this._value,t],a,0)/i,this},subtract:function(t){var i=e.correctionFactor.call(null,this._value,t);function a(t,e,a,r){return t-Math.round(i*e)}return this._value=e.reduce([t],a,Math.round(this._value*i))/i,this},multiply:function(t){function i(t,i,a,r){var n=e.correctionFactor(t,i);return Math.round(t*n)*Math.round(i*n)/Math.round(n*n)}return this._value=e.reduce([this._value,t],i,1),this},divide:function(t){function i(t,i,a,r){var n=e.correctionFactor(t,i);return Math.round(t*n)/Math.round(i*n)}return this._value=e.reduce([this._value,t],i),this},difference:function(e){return Math.abs(t(this._value).subtract(e).value())}},t.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(t){var e=t%10;return 1==~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th"},currency:{symbol:"$"}}),t.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(e,i,a){var r,n=t._.includes(i," BPS")?" ":"";return e*=1e4,i=i.replace(/\s?BPS/,""),r=t._.numberToFormat(e,i,a),t._.includes(r,")")?((r=r.split("")).splice(-1,0,n+"BPS"),r=r.join("")):r=r+n+"BPS",r},unformat:function(e){return+(1e-4*t._.stringToNumber(e)).toFixed(15)}}),a={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},r="("+(r=(i={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(a.suffixes.filter((function(t){return i.suffixes.indexOf(t)<0}))).join("|")).replace("B","B(?!PS)")+")",t.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(r)},format:function(e,r,n){var l,o,s,u=t._.includes(r,"ib")?a:i,h=t._.includes(r," b")||t._.includes(r," ib")?" ":"";for(r=r.replace(/\s?i?b/,""),l=0;l<=u.suffixes.length;l++)if(o=Math.pow(u.base,l),s=Math.pow(u.base,l+1),null===e||0===e||e>=o&&e<s){h+=u.suffixes[l],o>0&&(e/=o);break}return t._.numberToFormat(e,r,n)+h},unformat:function(e){var r,n,l=t._.stringToNumber(e);if(l){for(r=i.suffixes.length-1;r>=0;r--){if(t._.includes(e,i.suffixes[r])){n=Math.pow(i.base,r);break}if(t._.includes(e,a.suffixes[r])){n=Math.pow(a.base,r);break}}l*=n||1}return l}}),t.register("format","currency",{regexps:{format:/(\$)/},format:function(e,i,a){var r,n,l=t.locales[t.options.currentLocale],o={before:i.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:i.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(i=i.replace(/\s?\$\s?/,""),r=t._.numberToFormat(e,i,a),e>=0?(o.before=o.before.replace(/[\-\(]/,""),o.after=o.after.replace(/[\-\)]/,"")):e<0&&!t._.includes(o.before,"-")&&!t._.includes(o.before,"(")&&(o.before="-"+o.before),n=0;n<o.before.length;n++)switch(o.before[n]){case"$":r=t._.insert(r,l.currency.symbol,n);break;case" ":r=t._.insert(r," ",n+l.currency.symbol.length-1)}for(n=o.after.length-1;n>=0;n--)switch(o.after[n]){case"$":r=n===o.after.length-1?r+l.currency.symbol:t._.insert(r,l.currency.symbol,-(o.after.length-(1+n)));break;case" ":r=n===o.after.length-1?r+" ":t._.insert(r," ",-(o.after.length-(1+n)+l.currency.symbol.length-1))}return r}}),t.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(e,i,a){var r=("number"!=typeof e||t._.isNaN(e)?"0e+0":e.toExponential()).split("e");return i=i.replace(/e[\+|\-]{1}0/,""),t._.numberToFormat(Number(r[0]),i,a)+"e"+r[1]},unformat:function(e){var i=t._.includes(e,"e+")?e.split("e+"):e.split("e-"),a=Number(i[0]),r=Number(i[1]);function n(e,i,a,r){var n=t._.correctionFactor(e,i);return e*n*(i*n)/(n*n)}return r=t._.includes(e,"e-")?r*=-1:r,t._.reduce([a,Math.pow(10,r)],n,1)}}),t.register("format","ordinal",{regexps:{format:/(o)/},format:function(e,i,a){var r=t.locales[t.options.currentLocale],n=t._.includes(i," o")?" ":"";return i=i.replace(/\s?o/,""),n+=r.ordinal(e),t._.numberToFormat(e,i,a)+n}}),t.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(e,i,a){var r,n=t._.includes(i," %")?" ":"";return t.options.scalePercentBy100&&(e*=100),i=i.replace(/\s?\%/,""),r=t._.numberToFormat(e,i,a),t._.includes(r,")")?((r=r.split("")).splice(-1,0,n+"%"),r=r.join("")):r=r+n+"%",r},unformat:function(e){var i=t._.stringToNumber(e);return t.options.scalePercentBy100?.01*i:i}}),t.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(t,e,i){var a=Math.floor(t/60/60),r=Math.floor((t-60*a*60)/60),n=Math.round(t-60*a*60-60*r);return a+":"+(r<10?"0"+r:r)+":"+(n<10?"0"+n:n)},unformat:function(t){var e=t.split(":"),i=0;return 3===e.length?(i+=60*Number(e[0])*60,i+=60*Number(e[1]),i+=Number(e[2])):2===e.length&&(i+=60*Number(e[0]),i+=Number(e[1])),Number(i)}}),t},void 0===(r="function"==typeof a?a.call(e,i,e,t):a)||(t.exports=r)},34155:t=>{var e,i,a=t.exports={};function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function l(t){if(e===setTimeout)return setTimeout(t,0);if((e===r||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(i){try{return e.call(null,t,0)}catch(i){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:r}catch(t){e=r}try{i="function"==typeof clearTimeout?clearTimeout:n}catch(t){i=n}}();var o,s=[],u=!1,h=-1;function c(){u&&o&&(u=!1,o.length?s=o.concat(s):h=-1,s.length&&m())}function m(){if(!u){var t=l(c);u=!0;for(var e=s.length;e;){for(o=s,s=[];++h<e;)o&&o[h].run();h=-1,e=s.length}o=null,u=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===n||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function f(){}a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];s.push(new d(t,e)),1!==s.length||u||l(m)},d.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=f,a.addListener=f,a.once=f,a.off=f,a.removeListener=f,a.removeAllListeners=f,a.emit=f,a.prependListener=f,a.prependOnceListener=f,a.listeners=function(t){return[]},a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},92370:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>u});var a=i(29620),r=i(48837),n=i(35497),l=i(7683),o=i(73655);const s={props:["src","id","title","chart_filter","hideTitle","filters","hideZoom","APIurl","chartType","minH","chartColor"],data:()=>({currentProperties:null,chartData:null,xData:null,loading:!0}),methods:{init(){this.loading=!0,axios.post(this.$props.APIurl,{filters:this.filters}).then((t=>{this.chartData=t.data.data.data,this.xData=t.data.data.xdata,this.loading=!1})).catch((t=>{console.log(t)}))}},mounted(){this.init()},components:{AreaChart:a.default,LineChart:a.default,ColumnChart:a.default,PieChart:r.default,TreeMapChart:r.default,FunnelChart:r.default,DataTable:n.default,RadarChart:l.default,countBox:o.default},computed:{}};const u=(0,i(51900).Z)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loading?t._e():i("div",{class:"AreaChart"==t.chartType||"LineChart"==t.chartType||"ColumnChart"==t.chartType?"chart-element-wide":"countBox"==t.chartType?"count-box":"chart-element",style:t.minH?"min-height: "+t.minH:""},[t.loading?i("Spin",{attrs:{size:"large",fix:""}}):i(t.chartType,t._b({tag:"component",attrs:{isRest:!0,type:t.chartType,chartTitle:t.title,chart_title:t.title,chartData:t.chartData,xData:t.xData,minH:t.minH,hideTitle:t.hideTitle,filters:t.filters,hideZoom:t.hideZoom,chartColor:t.chartColor,chart_filter:t.chart_filter,id:t.id}},"component",t.currentProperties,!1))],1)}),[],!1,null,null,null).exports},29620:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var a=i(9669),r=i.n(a);const n={props:["axis","lines","type","chart_title","hideTitle","filters","hideZoom","chartTitle","chartData","xData","isRest","minH","chartColor","projectDomain","limit","order"],methods:{getSeries(){},callData(){if(this.axis.length>=1&&this.lines.length>=1){let t="/ve/get-data";this.projectDomain&&(t=this.projectDomain+t),r().post(t,{axis:this.axis,lines:this.lines,filters:this.filters,order:this.order?this.order.toString():void 0,limit:this.limit?this.limit.toString():void 0}).then((t=>{this.elementData=t.data,this.initChart()})).catch((t=>{console.log(t)}))}},initChart(){this.instance&&(this.instance.dispose(),this.instance=null);var t=this.$el,e=t.parentElement;t.style.height=e.offsetHeight+"px";var i=window.echarts.init(t,"light");this.instance=i;let a=[],r=[];this.axis.map((t=>{this.elementData.map((e=>{a.push(`${e[t.name]}`)}))}));let n=[];this.lines.map((t=>{let e=[];this.elementData.map((i=>{e.push(i[t.name])})),"AreaChart"==this.type&&r.push({name:t.title,type:"line",smooth:!0,areaStyle:{},data:e}),"LineChart"==this.type&&r.push({name:t.title,type:"line",smooth:!0,data:e}),"ColumnChart"==this.type&&r.push({name:t.title,type:"bar",smooth:!0,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:e}),null!=t.color&&""!=t.color&&n.push(t.color)})),this.axis.length>=1&&this.lines.length>=1&&i.setOption({title:this.hideTitle?void 0:{text:this.chart_title,textStyle:{fontFamily:"Arial",fontWeight:"normal"}},tooltip:{trigger:"axis",position:function(t){return[t[0],"10%"]}},legend:{data:this.lines.map((t=>t.title)),align:"left",left:10,top:25},toolbox:{feature:{saveAsImage:{title:"Татах"},magicType:{type:["line","bar"],title:{line:"Шугман",bar:"Багнан"}}}},xAxis:{type:"category",boundaryGap:!0,data:a},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},yAxis:{type:"value",scale:!0,max:function(t){return t.max-0},min:function(t){return t.min-0},boundaryGap:[0,"100%"]},dataZoom:this.hideZoom?void 0:[{startValue:a[0]},{type:"inside"}],series:r,color:n.length>=1?n:void 0}),setTimeout((()=>{this.initing=!1}),2100)},initRest(){this.instance&&(this.instance.dispose(),this.instance=null);var t=this.$el,e=t.parentElement;t.style.height=e.offsetHeight+"px";var i=window.echarts.init(t,"shine");this.instance=i,i.setOption({title:this.hideTitle?void 0:{text:this.chartTitle,textStyle:{fontFamily:"Arial",fontWeight:"normal"}},tooltip:{trigger:"axis",position:function(t){return[t[0],"10%"]}},legend:{data:this.chartData.map((t=>t.name)),align:"left",left:10,top:25},toolbox:{feature:{saveAsImage:{title:"Татах"},magicType:{type:["line","bar"],title:{line:"Шугман",bar:"Багнан"}}}},grid:{top:"25%"},xAxis:{type:"category",boundaryGap:!0,data:this.xData},yAxis:{type:"value",scale:!0,boundaryGap:[0,"100%"]},dataZoom:this.hideZoom?void 0:[{startValue:this.xData[0]},{type:"inside"}],series:this.chartData,color:this.chartColor?this.chartColor:void 0})}},beforeMount(){this.id=`${"area"}-${Math.random().toString(36).substr(3,9)}`},mounted(){this.isRest?this.initRest():this.callData()},data:()=>({elementData:[],instance:null,timeout:null}),watch:{type:function(t){this.initChart()},axis:{handler:function(t,e){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.callData()}),1200)},deep:!0},lines:{handler:function(t,e){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.callData()}),1200)},deep:!0}}};const l=(0,i(51900).Z)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"chart",style:t.minH?"width: 100%; height: 100%; min-height: "+t.minH:"width: 100%; height: 100%;"})}),[],!1,null,null,null).exports},73655:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var a=i(9669),r=i.n(a),n=i(90738);const l={props:["countFields","type","chart_title","id","chart_filter","filters","bgColor","icon","link","linkTitle","textColor","projectDomain"],methods:{showNumber:t=>(0,n.Dx)(t),getSeries(){},callData(){this.countFields.length>=1&&this.countTitle},dataCaller(t){let e="/ve/get-data-count";this.projectDomain&&(e=this.projectDomain+e),r().post(e,{countFields:this.countFields}).then((t=>{this.count=t.data})).catch((t=>{console.log(t)}))}},mounted(){this.dataCaller()},data:()=>({count:null,instance:null,timeout:null,lastFilter:[]}),watch:{type:function(t){this.initChart()},countFields:{handler:function(t,e){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.callData()}),1200)},deep:!0},chart_filter:{handler:function(t,e){this.timeout&&clearTimeout(this.timeout),this.callData()},deep:!0},title:{handler:function(t,e){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.callData()}),1200)},deep:!0}}};const o=(0,i(51900).Z)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"el-count-box",style:{backgroundColor:t.bgColor}},[i("div",{staticClass:"icon"},[i("span",[i("i",{class:t.icon,style:{color:t.bgColor}})])]),t._v(" "),i("div",{staticClass:"text"},[i("h3",{style:{color:t.textColor}},[t._v(t._s(t.showNumber(t.count)))]),t._v(" "),i("p",{style:{color:t.textColor}},[t._v(t._s(t.chart_title))])])])}),[],!1,null,null,null).exports},48837:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var a=i(9669),r=i.n(a),n=i(90738);const l={props:["title","value","type","chart_title","id","chart_filter","filters","hideTitle","limit","projectDomain","isRest","xData","chartData"],methods:{getSeries(){},callData(){if(this.value.length>=1&&this.title.length>=1){let t=[];this.filters&&this.filters.map((e=>{this.chart_filter&&this.chart_filter.map((i=>{e.name==i.field&&e.table==i.table&&t.push(i)}))})),null===this.instance?this.dataCaller([]):t.length>=1?(this.lastFilter=t,this.dataCaller(t)):this.lastFilter.length>=1&&(this.lastFilter=[],this.dataCaller([]))}},dataCaller(t){let e="/ve/get-data-pie";this.projectDomain&&(e=this.projectDomain+e),r().post(e,{value:this.value,title:this.title,filters:this.filters,limit:this.limit?this.limit.toString():void 0}).then((t=>{this.elementData=t.data,this.initChart()})).catch((t=>{console.log(t)}))},initChart(){this.instance&&(this.instance.dispose(),this.instance=null);var t=this.$el,e=t.parentElement;t.style.height=e.offsetHeight+"px";var i=window.echarts.init(t,"shine");this.instance=i;let a=[],r=[],l=0,o=this.value[0].name,s=this.title[0].name;this.elementData.map((t=>{l+=t[o],r.push({value:t[o],name:t[s]})})),"PieChart"==this.type&&a.push({name:this.chart_title,type:"pie",center:["50%","50%"],radius:["35%","70%"],itemStyle:{borderRadius:3,borderColor:"#fff",borderWidth:2},data:r,label:{normal:{formatter:t=>t.name.length>25?t.name.substring(0,22)+"...":t.name,show:!1,position:"top"}}}),"FunnelChart"==this.type&&a.push({name:this.chart_title,type:"funnel",radius:"70%",center:["50%","60%"],data:r,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}),"TreeMapChart"==this.type&&a.push({name:this.chart_title,type:"treemap",radius:"55%",center:["50%","60%"],data:r,levels:[{itemStyle:{borderColor:"#fff",borderWidth:2,gapWidth:1},emphasis:{itemStyle:{borderColor:"#fff"}}},{colorSaturation:[.35,.5],itemStyle:{borderWidth:2,gapWidth:1,borderColorSaturation:.6}}],roam:"move",itemStyle:{borderRadius:3,borderColor:"#fff",normal:{label:{formatter:t=>{let e=Math.round(t.data.value/(l/100)*100)/100;return`${t.data.name}: ${e}%, ${(0,n.Dx)(t.data.value)}`},textStyle:{baseline:"top"}}}}});let u=this.elementData.map((t=>t[s]));i.setOption({theme:"shine",name:this.hideTitle?void 0:{text:this.chart_title,textStyle:{fontFamily:"Arial",fontWeight:"normal"}},title:this.hideTitle?void 0:{text:this.chart_title,textStyle:{fontFamily:"Arial",fontWeight:"normal"}},toolbox:{feature:{saveAsImage:{title:"Татах"}}},tooltip:"TreeMapChart"==this.type?{trigger:"item",formatter:t=>{let e=Math.round(t.data.value/(l/100)*100)/100;return`${t.data.name}: ${e}% <br> ${(0,n.Dx)(t.data.value)}`}}:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"horizontal",left:5,bottom:0,type:"scroll",data:u},series:a}),i.on("click",(t=>{t.data?this.$emit("changeFilter",{value:t.data.name,id:this.id,field:this.title[0].name,table:this.title[0].table}):this.$emit("unFilter")}))},initRest(){this.instance&&(this.instance.dispose(),this.instance=null);var t=this.$el,e=t.parentElement;t.style.height=e.offsetHeight+"px";var i=window.echarts.init(t,"shine");this.instance=i;let a=[],r=[],l=0,o=this.xData.valueField,s=this.xData.labelField;this.chartData.map((t=>{l+=t[o],r.push({value:t[o],name:t[s]})})),"PieChart"==this.type&&a.push({name:this.chart_title,type:"pie",center:["50%","40%"],radius:["35%","70%"],itemStyle:{borderRadius:3,borderColor:"#fff",borderWidth:2},data:r,label:{normal:{formatter:t=>t.name.length>25?t.name.substring(0,22)+"...":t.name,show:!0,position:"top"}}}),"FunnelChart"==this.type&&a.push({name:this.chart_title,type:"funnel",radius:"70%",center:["50%","60%"],data:r,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}),"TreeMapChart"==this.type&&a.push({name:this.chart_title,type:"treemap",radius:"55%",center:["50%","60%"],data:r,levels:[{itemStyle:{borderColor:"#fff",borderWidth:2,gapWidth:1},emphasis:{itemStyle:{borderColor:"#fff"}}},{colorSaturation:[.35,.5],itemStyle:{borderWidth:2,gapWidth:1,borderColorSaturation:.6}}],roam:"move",itemStyle:{borderRadius:3,borderColor:"#fff",normal:{label:{formatter:t=>{let e=Math.round(t.data.value/(l/100)*100)/100;return`${t.data.name}: ${e}%, ${(0,n.Dx)(t.data.value)}`},textStyle:{baseline:"top"}}}}});let u=this.chartData.map((t=>t[s]));i.setOption({theme:"shine",name:this.hideTitle?void 0:{text:this.chart_title,textStyle:{fontFamily:"Arial",fontWeight:"normal"}},title:this.hideTitle?void 0:{text:this.chart_title,textStyle:{fontFamily:"Arial",fontWeight:"normal"}},toolbox:{feature:{saveAsImage:{title:"Татах"}}},tooltip:"TreeMapChart"==this.type?{trigger:"item",formatter:t=>{let e=Math.round(t.data.value/(l/100)*100)/100;return`${t.data.name}: ${e}% <br> ${(0,n.Dx)(t.data.value)}`}}:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"horizontal",left:5,bottom:0,type:"scroll",data:u},series:a}),i.on("click",(t=>{t.data?this.$emit("changeFilter",{value:t.data.name,id:this.id,field:this.title[0].name,table:this.title[0].table}):this.$emit("unFilter")}))}},mounted(){this.isRest?this.initRest():this.callData()},data:()=>({elementData:[],instance:null,timeout:null,lastFilter:[]}),watch:{type:function(t){this.initChart()},value:{handler:function(t,e){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.callData()}),1200)},deep:!0},chart_filter:{handler:function(t,e){this.timeout&&clearTimeout(this.timeout),this.callData()},deep:!0},chart_title:{handler:function(t,e){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.callData()}),1200)},deep:!0},title:{handler:function(t,e){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.callData()}),1200)},deep:!0}}};const o=(0,i(51900).Z)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{width:"100%",height:"100%"}})}),[],!1,null,null,null).exports},7683:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var a=i(9669),r=i.n(a);const n={props:["values","type","id"],methods:{getSeries(){},callData(){this.values.length>=1&&r().post("/ve/get-data-pie",{values:this.values}).then((t=>{this.elementData=t.data,this.initChart()})).catch((t=>{}))},initChart(){this.instance&&(this.instance.dispose(),this.instance=null);var t=document.getElementById(this.id?this.id:"vs-chart"),e=t.parentElement;t.style.height=e.offsetHeight+"px";var i=window.echarts.init(t,"light");this.instance=i;let a=[],r=[];this.values.map((t=>{this.elementData.map((e=>{r.push({value:e[t.name],name:t.title})}))}));let n=[],l=[],o="";r.map((t=>{l.push(t.value),o=t.name})),o&&l.length>=1&&(n.push({value:l,name:o}),"RadarChart"==this.type&&a.push({name:"Budget vs spending",type:"radar",data:n}));let s=[],u=!1;this.values.map((t=>{t.indicator?s.push({name:t.title,max:1*t.indicator}):u=!0})),!1===u&&this.values.length>=1&&n.length>=1&&i.setOption({toolbox:{feature:{saveAsImage:{title:"Татах"}}},tooltip:{},legend:{orient:"vertical",left:"left",data:this.values.map((t=>t.title))},radar:{name:{textStyle:{color:"#fff",backgroundColor:"#999",borderRadius:3,padding:[3,5]}},indicator:s},series:a})}},mounted(){},data:()=>({elementData:[],instance:null,timeout:null}),watch:{type:function(t){this.initChart()},values:{handler:function(t,e){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.callData()}),1200)},deep:!0}}};const l=(0,i(51900).Z)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"line"},[i("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:t.id?t.id:"vs-chart"}})])}),[],!1,null,null,null).exports},35497:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var a=i(9669),r=i.n(a);const n={props:["values","type","chart_title"],methods:{getSeries(){},callData(){this.columns=[],this.elementData=[],this.values.length>=1&&(this.values.map((t=>{this.columns.push({key:t.name,title:t.title})})),this.values.length>=1&&r().post("/ve/get-data-table",{values:this.values}).then((t=>{this.elementData=t.data})).catch((t=>{console.log(t)})))}},mounted(){this.callData()},data:()=>({columns:[],elementData:[],instance:null}),watch:{type:function(t){this.initChart()},values:function(t){this.callData()}}};const l=(0,i(51900).Z)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"line"},[i("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"table"}},[i("h5",[t._v(t._s(t.chart_title))]),t._v(" "),i("Table",{attrs:{columns:t.columns,height:"300",data:t.elementData}})],1)])}),[],!1,null,null,null).exports},51900:(t,e,i)=>{"use strict";function a(t,e,i,a,r,n,l,o){var s,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=i,u._compiled=!0),a&&(u.functional=!0),n&&(u._scopeId="data-v-"+n),l?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},u._ssrRegister=s):r&&(s=o?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),s)if(u.functional){u._injectStyles=s;var h=u.render;u.render=function(t,e){return s.call(e),h(t,e)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,s):[s]}return{exports:t,options:u}}i.d(e,{Z:()=>a})}}]);
//# sourceMappingURL=chart-rest.416a2e161817aa9a.js.map