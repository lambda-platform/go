/*! For license information please see chart-rest.16cb1ee6f029181f.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[5143,5470,4869,2203,7679,6967],{58029:(t,e,i)=>{"use strict";i.d(e,{Dx:()=>r});var n=i(92077),a=i.n(n);function r(t){return a()(t).format("0,0")}},92077:function(t,e,i){var n,a;n=function(){var t,e,i,n,a,r="2.0.6",o={},l={},s={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},u={currentLocale:s.currentLocale,zeroFormat:s.zeroFormat,nullFormat:s.nullFormat,defaultFormat:s.defaultFormat,scalePercentBy100:s.scalePercentBy100};function c(t,e){this._input=t,this._value=e}return(t=function(i){var n,a,r,l;if(t.isNumeral(i))n=i.value();else if(0===i||void 0===i)n=0;else if(null===i||e.isNaN(i))n=null;else if("string"==typeof i)if(u.zeroFormat&&i===u.zeroFormat)n=0;else if(u.nullFormat&&i===u.nullFormat||!i.replace(/[^0-9]+/g,"").length)n=null;else{for(a in o)if((l="function"==typeof o[a].regexps.unformat?o[a].regexps.unformat():o[a].regexps.unformat)&&i.match(l)){r=o[a].unformat;break}n=(r=r||t._.stringToNumber)(i)}else n=Number(i)||null;return new c(i,n)}).version=r,t.isNumeral=function(t){return t instanceof c},t._=e={numberToFormat:function(e,i,n){var a,r,o,s,u,c,h,f=l[t.options.currentLocale],m=!1,d=!1,p=0,v="",g=1e12,b=1e9,y=1e6,_=1e3,x="",T=!1;if(e=e||0,r=Math.abs(e),t._.includes(i,"(")?(m=!0,i=i.replace(/[\(|\)]/g,"")):(t._.includes(i,"+")||t._.includes(i,"-"))&&(u=t._.includes(i,"+")?i.indexOf("+"):e<0?i.indexOf("-"):-1,i=i.replace(/[\+|\-]/g,"")),t._.includes(i,"a")&&(a=!!(a=i.match(/a(k|m|b|t)?/))&&a[1],t._.includes(i," a")&&(v=" "),i=i.replace(new RegExp(v+"a[kmbt]?"),""),r>=g&&!a||"t"===a?(v+=f.abbreviations.trillion,e/=g):r<g&&r>=b&&!a||"b"===a?(v+=f.abbreviations.billion,e/=b):r<b&&r>=y&&!a||"m"===a?(v+=f.abbreviations.million,e/=y):(r<y&&r>=_&&!a||"k"===a)&&(v+=f.abbreviations.thousand,e/=_)),t._.includes(i,"[.]")&&(d=!0,i=i.replace("[.]",".")),o=e.toString().split(".")[0],s=i.split(".")[1],c=i.indexOf(","),p=(i.split(".")[0].split(",")[0].match(/0/g)||[]).length,s?(t._.includes(s,"[")?(s=(s=s.replace("]","")).split("["),x=t._.toFixed(e,s[0].length+s[1].length,n,s[1].length)):x=t._.toFixed(e,s.length,n),o=x.split(".")[0],x=t._.includes(x,".")?f.delimiters.decimal+x.split(".")[1]:"",d&&0===Number(x.slice(1))&&(x="")):o=t._.toFixed(e,0,n),v&&!a&&Number(o)>=1e3&&v!==f.abbreviations.trillion)switch(o=String(Number(o)/1e3),v){case f.abbreviations.thousand:v=f.abbreviations.million;break;case f.abbreviations.million:v=f.abbreviations.billion;break;case f.abbreviations.billion:v=f.abbreviations.trillion}if(t._.includes(o,"-")&&(o=o.slice(1),T=!0),o.length<p)for(var C=p-o.length;C>0;C--)o="0"+o;return c>-1&&(o=o.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+f.delimiters.thousands)),0===i.indexOf(".")&&(o=""),h=o+x+(v||""),m?h=(m&&T?"(":"")+h+(m&&T?")":""):u>=0?h=0===u?(T?"-":"+")+h:h+(T?"-":"+"):T&&(h="-"+h),h},stringToNumber:function(t){var e,i,n,a=l[u.currentLocale],r=t,o={thousand:3,million:6,billion:9,trillion:12};if(u.zeroFormat&&t===u.zeroFormat)i=0;else if(u.nullFormat&&t===u.nullFormat||!t.replace(/[^0-9]+/g,"").length)i=null;else{for(e in i=1,"."!==a.delimiters.decimal&&(t=t.replace(/\./g,"").replace(a.delimiters.decimal,".")),o)if(n=new RegExp("[^a-zA-Z]"+a.abbreviations[e]+"(?:\\)|(\\"+a.currency.symbol+")?(?:\\))?)?$"),r.match(n)){i*=Math.pow(10,o[e]);break}i*=(t.split("-").length+Math.min(t.split("(").length-1,t.split(")").length-1))%2?1:-1,t=t.replace(/[^0-9\.]+/g,""),i*=Number(t)}return i},isNaN:function(t){return"number"==typeof t&&isNaN(t)},includes:function(t,e){return-1!==t.indexOf(e)},insert:function(t,e,i){return t.slice(0,i)+e+t.slice(i)},reduce:function(t,e){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof e)throw new TypeError(e+" is not a function");var i,n=Object(t),a=n.length>>>0,r=0;if(3===arguments.length)i=arguments[2];else{for(;r<a&&!(r in n);)r++;if(r>=a)throw new TypeError("Reduce of empty array with no initial value");i=n[r++]}for(;r<a;r++)r in n&&(i=e(i,n[r],r,n));return i},multiplier:function(t){var e=t.toString().split(".");return e.length<2?1:Math.pow(10,e[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce((function(t,i){var n=e.multiplier(i);return t>n?t:n}),1)},toFixed:function(t,e,i,n){var a,r,o,l,s=t.toString().split("."),u=e-(n||0);return a=2===s.length?Math.min(Math.max(s[1].length,u),e):u,o=Math.pow(10,a),l=(i(t+"e+"+a)/o).toFixed(a),n>e-a&&(r=new RegExp("\\.?0{1,"+(n-(e-a))+"}$"),l=l.replace(r,"")),l}},t.options=u,t.formats=o,t.locales=l,t.locale=function(t){return t&&(u.currentLocale=t.toLowerCase()),u.currentLocale},t.localeData=function(t){if(!t)return l[u.currentLocale];if(t=t.toLowerCase(),!l[t])throw new Error("Unknown locale : "+t);return l[t]},t.reset=function(){for(var t in s)u[t]=s[t]},t.zeroFormat=function(t){u.zeroFormat="string"==typeof t?t:null},t.nullFormat=function(t){u.nullFormat="string"==typeof t?t:null},t.defaultFormat=function(t){u.defaultFormat="string"==typeof t?t:"0.0"},t.register=function(t,e,i){if(e=e.toLowerCase(),this[t+"s"][e])throw new TypeError(e+" "+t+" already registered.");return this[t+"s"][e]=i,i},t.validate=function(e,i){var n,a,r,o,l,s,u,c;if("string"!=typeof e&&(e+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",e)),(e=e.trim()).match(/^\d+$/))return!0;if(""===e)return!1;try{u=t.localeData(i)}catch(e){u=t.localeData(t.locale())}return r=u.currency.symbol,l=u.abbreviations,n=u.delimiters.decimal,a="."===u.delimiters.thousands?"\\.":u.delimiters.thousands,!(null!==(c=e.match(/^[^\d]+/))&&(e=e.substr(1),c[0]!==r)||null!==(c=e.match(/[^\d]+$/))&&(e=e.slice(0,-1),c[0]!==l.thousand&&c[0]!==l.million&&c[0]!==l.billion&&c[0]!==l.trillion)||(s=new RegExp(a+"{2}"),e.match(/[^\d.,]/g)||(o=e.split(n)).length>2||(o.length<2?!o[0].match(/^\d+.*\d$/)||o[0].match(s):1===o[0].length?!o[0].match(/^\d+$/)||o[0].match(s)||!o[1].match(/^\d+$/):!o[0].match(/^\d+.*\d$/)||o[0].match(s)||!o[1].match(/^\d+$/))))},t.fn=c.prototype={clone:function(){return t(this)},format:function(e,i){var n,a,r,l=this._value,s=e||u.defaultFormat;if(i=i||Math.round,0===l&&null!==u.zeroFormat)a=u.zeroFormat;else if(null===l&&null!==u.nullFormat)a=u.nullFormat;else{for(n in o)if(s.match(o[n].regexps.format)){r=o[n].format;break}a=(r=r||t._.numberToFormat)(l,s,i)}return a},value:function(){return this._value},input:function(){return this._input},set:function(t){return this._value=Number(t),this},add:function(t){var i=e.correctionFactor.call(null,this._value,t);function n(t,e,n,a){return t+Math.round(i*e)}return this._value=e.reduce([this._value,t],n,0)/i,this},subtract:function(t){var i=e.correctionFactor.call(null,this._value,t);function n(t,e,n,a){return t-Math.round(i*e)}return this._value=e.reduce([t],n,Math.round(this._value*i))/i,this},multiply:function(t){function i(t,i,n,a){var r=e.correctionFactor(t,i);return Math.round(t*r)*Math.round(i*r)/Math.round(r*r)}return this._value=e.reduce([this._value,t],i,1),this},divide:function(t){function i(t,i,n,a){var r=e.correctionFactor(t,i);return Math.round(t*r)/Math.round(i*r)}return this._value=e.reduce([this._value,t],i),this},difference:function(e){return Math.abs(t(this._value).subtract(e).value())}},t.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(t){var e=t%10;return 1==~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th"},currency:{symbol:"$"}}),t.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(e,i,n){var a,r=t._.includes(i," BPS")?" ":"";return e*=1e4,i=i.replace(/\s?BPS/,""),a=t._.numberToFormat(e,i,n),t._.includes(a,")")?((a=a.split("")).splice(-1,0,r+"BPS"),a=a.join("")):a=a+r+"BPS",a},unformat:function(e){return+(1e-4*t._.stringToNumber(e)).toFixed(15)}}),n={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},a="("+(a=(i={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(n.suffixes.filter((function(t){return i.suffixes.indexOf(t)<0}))).join("|")).replace("B","B(?!PS)")+")",t.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(a)},format:function(e,a,r){var o,l,s,u=t._.includes(a,"ib")?n:i,c=t._.includes(a," b")||t._.includes(a," ib")?" ":"";for(a=a.replace(/\s?i?b/,""),o=0;o<=u.suffixes.length;o++)if(l=Math.pow(u.base,o),s=Math.pow(u.base,o+1),null===e||0===e||e>=l&&e<s){c+=u.suffixes[o],l>0&&(e/=l);break}return t._.numberToFormat(e,a,r)+c},unformat:function(e){var a,r,o=t._.stringToNumber(e);if(o){for(a=i.suffixes.length-1;a>=0;a--){if(t._.includes(e,i.suffixes[a])){r=Math.pow(i.base,a);break}if(t._.includes(e,n.suffixes[a])){r=Math.pow(n.base,a);break}}o*=r||1}return o}}),t.register("format","currency",{regexps:{format:/(\$)/},format:function(e,i,n){var a,r,o=t.locales[t.options.currentLocale],l={before:i.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:i.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(i=i.replace(/\s?\$\s?/,""),a=t._.numberToFormat(e,i,n),e>=0?(l.before=l.before.replace(/[\-\(]/,""),l.after=l.after.replace(/[\-\)]/,"")):e<0&&!t._.includes(l.before,"-")&&!t._.includes(l.before,"(")&&(l.before="-"+l.before),r=0;r<l.before.length;r++)switch(l.before[r]){case"$":a=t._.insert(a,o.currency.symbol,r);break;case" ":a=t._.insert(a," ",r+o.currency.symbol.length-1)}for(r=l.after.length-1;r>=0;r--)switch(l.after[r]){case"$":a=r===l.after.length-1?a+o.currency.symbol:t._.insert(a,o.currency.symbol,-(l.after.length-(1+r)));break;case" ":a=r===l.after.length-1?a+" ":t._.insert(a," ",-(l.after.length-(1+r)+o.currency.symbol.length-1))}return a}}),t.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(e,i,n){var a=("number"!=typeof e||t._.isNaN(e)?"0e+0":e.toExponential()).split("e");return i=i.replace(/e[\+|\-]{1}0/,""),t._.numberToFormat(Number(a[0]),i,n)+"e"+a[1]},unformat:function(e){var i=t._.includes(e,"e+")?e.split("e+"):e.split("e-"),n=Number(i[0]),a=Number(i[1]);function r(e,i,n,a){var r=t._.correctionFactor(e,i);return e*r*(i*r)/(r*r)}return a=t._.includes(e,"e-")?a*=-1:a,t._.reduce([n,Math.pow(10,a)],r,1)}}),t.register("format","ordinal",{regexps:{format:/(o)/},format:function(e,i,n){var a=t.locales[t.options.currentLocale],r=t._.includes(i," o")?" ":"";return i=i.replace(/\s?o/,""),r+=a.ordinal(e),t._.numberToFormat(e,i,n)+r}}),t.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(e,i,n){var a,r=t._.includes(i," %")?" ":"";return t.options.scalePercentBy100&&(e*=100),i=i.replace(/\s?\%/,""),a=t._.numberToFormat(e,i,n),t._.includes(a,")")?((a=a.split("")).splice(-1,0,r+"%"),a=a.join("")):a=a+r+"%",a},unformat:function(e){var i=t._.stringToNumber(e);return t.options.scalePercentBy100?.01*i:i}}),t.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(t,e,i){var n=Math.floor(t/60/60),a=Math.floor((t-60*n*60)/60),r=Math.round(t-60*n*60-60*a);return n+":"+(a<10?"0"+a:a)+":"+(r<10?"0"+r:r)},unformat:function(t){var e=t.split(":"),i=0;return 3===e.length?(i+=60*Number(e[0])*60,i+=60*Number(e[1]),i+=Number(e[2])):2===e.length&&(i+=60*Number(e[0]),i+=Number(e[1])),Number(i)}}),t},void 0===(a="function"==typeof n?n.call(e,i,e,t):n)||(t.exports=a)},34155:t=>{var e,i,n=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(e===setTimeout)return setTimeout(t,0);if((e===a||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(i){try{return e.call(null,t,0)}catch(i){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:a}catch(t){e=a}try{i="function"==typeof clearTimeout?clearTimeout:r}catch(t){i=r}}();var l,s=[],u=!1,c=-1;function h(){u&&l&&(u=!1,l.length?s=l.concat(s):c=-1,s.length&&f())}function f(){if(!u){var t=o(h);u=!0;for(var e=s.length;e;){for(l=s,s=[];++c<e;)l&&l[c].run();c=-1,e=s.length}l=null,u=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===r||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function d(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];s.push(new m(t,e)),1!==s.length||u||o(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=d,n.addListener=d,n.once=d,n.off=d,n.removeListener=d,n.removeAllListeners=d,n.emit=d,n.prependListener=d,n.prependOnceListener=d,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},59898:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>u});var n=i(27735),a=i(55959),r=i(76689),o=i(46887),l=i(60092);const s={props:["src","id","title","chart_filter","hideTitle","filters","hideZoom","APIurl","chartType","minH","chartColor"],data:function(){return{currentProperties:null,chartData:null,xData:null,loading:!0}},methods:{init:function(){var t=this;this.loading=!0,axios.post(this.$props.APIurl,{filters:this.filters}).then((function(e){t.chartData=e.data.data.data,t.xData=e.data.data.xdata,t.loading=!1})).catch((function(t){console.log(t)}))}},mounted:function(){this.init()},components:{AreaChart:n.default,LineChart:n.default,ColumnChart:n.default,PieChart:a.default,TreeMapChart:a.default,FunnelChart:a.default,DataTable:r.default,RadarChart:o.default,countBox:l.default},computed:{}};const u=(0,i(51900).Z)(s,(function(){var t=this,e=t._self._c;return t.loading?t._e():e("div",{class:"AreaChart"==t.chartType||"LineChart"==t.chartType||"ColumnChart"==t.chartType?"chart-element-wide":"countBox"==t.chartType?"count-box":"chart-element",style:t.minH?"min-height: ".concat(t.minH):""},[t.loading?e("Spin",{attrs:{size:"large",fix:""}}):e(t.chartType,t._b({tag:"component",attrs:{isRest:!0,type:t.chartType,chartTitle:t.title,chart_title:t.title,chartData:t.chartData,xData:t.xData,minH:t.minH,hideTitle:t.hideTitle,filters:t.filters,hideZoom:t.hideZoom,chartColor:t.chartColor,chart_filter:t.chart_filter,id:t.id}},"component",t.currentProperties,!1))],1)}),[],!1,null,null,null).exports},27735:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var n=i(9669),a=i.n(n);const r={props:["axis","lines","type","chart_title","hideTitle","filters","hideZoom","chartTitle","chartData","xData","isRest","minH","chartColor","projectDomain","limit","order"],methods:{getSeries:function(){},callData:function(){var t=this;if(this.axis.length>=1&&this.lines.length>=1){var e="/ve/get-data";this.projectDomain&&(e=this.projectDomain+e),a().post(e,{axis:this.axis,lines:this.lines,filters:this.filters,order:this.order?this.order.toString():void 0,limit:this.limit?this.limit.toString():void 0}).then((function(e){t.elementData=e.data,t.initChart()})).catch((function(t){console.log(t)}))}},initChart:function(){var t=this;this.instance&&(this.instance.dispose(),this.instance=null);var e=this.$el,i=e.parentElement;e.style.height=i.offsetHeight+"px";var n=window.echarts.init(e,"light");this.instance=n;var a=[],r=[];this.axis.map((function(e){t.elementData.map((function(t){a.push("".concat(t[e.name]))}))}));var o=[];this.lines.map((function(e){var i=[];t.elementData.map((function(t){i.push(t[e.name])})),"AreaChart"==t.type&&r.push({name:e.title,type:"line",smooth:!0,areaStyle:{},data:i}),"LineChart"==t.type&&r.push({name:e.title,type:"line",smooth:!0,data:i}),"ColumnChart"==t.type&&r.push({name:e.title,type:"bar",smooth:!0,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:i}),null!=e.color&&""!=e.color&&o.push(e.color)})),this.axis.length>=1&&this.lines.length>=1&&n.setOption({title:this.hideTitle?void 0:{text:this.chart_title,textStyle:{fontFamily:"Arial",fontWeight:"normal"}},tooltip:{trigger:"axis",position:function(t){return[t[0],"10%"]}},legend:{data:this.lines.map((function(t){return t.title})),align:"left",left:10,top:25},toolbox:{feature:{saveAsImage:{title:"Татах"},magicType:{type:["line","bar"],title:{line:"Шугман",bar:"Багнан"}}}},xAxis:{type:"category",boundaryGap:!0,data:a},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},yAxis:{type:"value",scale:!0,max:function(t){return t.max-0},min:function(t){return t.min-0},boundaryGap:[0,"100%"]},dataZoom:this.hideZoom?void 0:[{startValue:a[0]},{type:"inside"}],series:r,color:o.length>=1?o:void 0}),setTimeout((function(){t.initing=!1}),2100)},initRest:function(){this.instance&&(this.instance.dispose(),this.instance=null);var t=this.$el,e=t.parentElement;t.style.height=e.offsetHeight+"px";var i=window.echarts.init(t,"shine");this.instance=i,i.setOption({title:this.hideTitle?void 0:{text:this.chartTitle,textStyle:{fontFamily:"Arial",fontWeight:"normal"}},tooltip:{trigger:"axis",position:function(t){return[t[0],"10%"]}},legend:{data:this.chartData.map((function(t){return t.name})),align:"left",left:10,top:25},toolbox:{feature:{saveAsImage:{title:"Татах"},magicType:{type:["line","bar"],title:{line:"Шугман",bar:"Багнан"}}}},grid:{top:"25%"},xAxis:{type:"category",boundaryGap:!0,data:this.xData},yAxis:{type:"value",scale:!0,boundaryGap:[0,"100%"]},dataZoom:this.hideZoom?void 0:[{startValue:this.xData[0]},{type:"inside"}],series:this.chartData,color:this.chartColor?this.chartColor:void 0})}},beforeMount:function(){var t,e;this.id=(t="area",e=Math.random().toString(36).substr(3,9),"".concat(t,"-").concat(e))},mounted:function(){this.isRest?this.initRest():this.callData()},data:function(){return{elementData:[],instance:null,timeout:null}},watch:{type:function(t){this.initChart()},axis:{handler:function(t,e){var i=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){i.callData()}),1200)},deep:!0},lines:{handler:function(t,e){var i=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){i.callData()}),1200)},deep:!0}}};const o=(0,i(51900).Z)(r,(function(){var t=this;return(0,t._self._c)("div",{ref:"chart",style:t.minH?"width: 100%; height: 100%; min-height: ".concat(t.minH):"width: 100%; height: 100%;"})}),[],!1,null,null,null).exports},60092:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var n=i(9669),a=i.n(n),r=i(58029);const o={props:["countFields","type","chart_title","id","chart_filter","filters","bgColor","icon","link","linkTitle","textColor","projectDomain"],methods:{showNumber:function(t){return(0,r.Dx)(t)},getSeries:function(){},callData:function(){this.countFields.length>=1&&this.countTitle},dataCaller:function(t){var e=this,i="/ve/get-data-count";this.projectDomain&&(i=this.projectDomain+i),a().post(i,{countFields:this.countFields}).then((function(t){e.count=t.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.dataCaller()},data:function(){return{count:null,instance:null,timeout:null,lastFilter:[]}},watch:{type:function(t){this.initChart()},countFields:{handler:function(t,e){var i=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){i.callData()}),1200)},deep:!0},chart_filter:{handler:function(t,e){this.timeout&&clearTimeout(this.timeout),this.callData()},deep:!0},title:{handler:function(t,e){var i=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){i.callData()}),1200)},deep:!0}}};const l=(0,i(51900).Z)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"el-count-box",style:{backgroundColor:t.bgColor}},[e("div",{staticClass:"icon"},[e("span",[e("i",{class:t.icon,style:{color:t.bgColor}})])]),t._v(" "),e("div",{staticClass:"text"},[e("h3",{style:{color:t.textColor}},[t._v(t._s(t.showNumber(t.count)))]),t._v(" "),e("p",{style:{color:t.textColor}},[t._v(t._s(t.chart_title))])])])}),[],!1,null,null,null).exports},55959:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var n=i(9669),a=i.n(n),r=i(58029);const o={props:["title","value","type","chart_title","id","chart_filter","filters","hideTitle","limit","projectDomain","isRest","xData","chartData"],methods:{getSeries:function(){},callData:function(){var t=this;if(this.value.length>=1&&this.title.length>=1){var e=[];this.filters&&this.filters.map((function(i){t.chart_filter&&t.chart_filter.map((function(t){i.name==t.field&&i.table==t.table&&e.push(t)}))})),null===this.instance?this.dataCaller([]):e.length>=1?(this.lastFilter=e,this.dataCaller(e)):this.lastFilter.length>=1&&(this.lastFilter=[],this.dataCaller([]))}},dataCaller:function(t){var e=this,i="/ve/get-data-pie";this.projectDomain&&(i=this.projectDomain+i),a().post(i,{value:this.value,title:this.title,filters:this.filters,limit:this.limit?this.limit.toString():void 0}).then((function(t){e.elementData=t.data,e.initChart()})).catch((function(t){console.log(t)}))},initChart:function(){var t=this;this.instance&&(this.instance.dispose(),this.instance=null);var e=this.$el,i=e.parentElement;e.style.height=i.offsetHeight+"px";var n=window.echarts.init(e,"shine");this.instance=n;var a=[],o=[],l=0,s=this.value[0].name,u=this.title[0].name;this.elementData.map((function(t){l+=t[s],o.push({value:t[s],name:t[u]})})),"PieChart"==this.type&&a.push({name:this.chart_title,type:"pie",center:["50%","50%"],radius:["35%","70%"],itemStyle:{borderRadius:3,borderColor:"#fff",borderWidth:2},data:o,label:{normal:{formatter:function(t){return t.name.length>25?t.name.substring(0,22)+"...":t.name},show:!1,position:"top"}}}),"FunnelChart"==this.type&&a.push({name:this.chart_title,type:"funnel",radius:"70%",center:["50%","60%"],data:o,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}),"TreeMapChart"==this.type&&a.push({name:this.chart_title,type:"treemap",radius:"55%",center:["50%","60%"],data:o,levels:[{itemStyle:{borderColor:"#fff",borderWidth:2,gapWidth:1},emphasis:{itemStyle:{borderColor:"#fff"}}},{colorSaturation:[.35,.5],itemStyle:{borderWidth:2,gapWidth:1,borderColorSaturation:.6}}],roam:"move",itemStyle:{borderRadius:3,borderColor:"#fff",normal:{label:{formatter:function(t){var e=Math.round(t.data.value/(l/100)*100)/100;return"".concat(t.data.name,": ").concat(e,"%, ").concat((0,r.Dx)(t.data.value))},textStyle:{baseline:"top"}}}}});var c=this.elementData.map((function(t){return t[u]}));n.setOption({theme:"shine",name:this.hideTitle?void 0:{text:this.chart_title,textStyle:{fontFamily:"Arial",fontWeight:"normal"}},title:this.hideTitle?void 0:{text:this.chart_title,textStyle:{fontFamily:"Arial",fontWeight:"normal"}},toolbox:{feature:{saveAsImage:{title:"Татах"}}},tooltip:"TreeMapChart"==this.type?{trigger:"item",formatter:function(t){var e=Math.round(t.data.value/(l/100)*100)/100;return"".concat(t.data.name,": ").concat(e,"% <br> ").concat((0,r.Dx)(t.data.value))}}:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"horizontal",left:5,bottom:0,type:"scroll",data:c},series:a}),n.on("click",(function(e){e.data?t.$emit("changeFilter",{value:e.data.name,id:t.id,field:t.title[0].name,table:t.title[0].table}):t.$emit("unFilter")}))},initRest:function(){var t=this;this.instance&&(this.instance.dispose(),this.instance=null);var e=this.$el,i=e.parentElement;e.style.height=i.offsetHeight+"px";var n=window.echarts.init(e,"shine");this.instance=n;var a=[],o=[],l=0,s=this.xData.valueField,u=this.xData.labelField;this.chartData.map((function(t){l+=t[s],o.push({value:t[s],name:t[u]})})),"PieChart"==this.type&&a.push({name:this.chart_title,type:"pie",center:["50%","40%"],radius:["35%","70%"],itemStyle:{borderRadius:3,borderColor:"#fff",borderWidth:2},data:o,label:{normal:{formatter:function(t){return t.name.length>25?t.name.substring(0,22)+"...":t.name},show:!0,position:"top"}}}),"FunnelChart"==this.type&&a.push({name:this.chart_title,type:"funnel",radius:"70%",center:["50%","60%"],data:o,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}),"TreeMapChart"==this.type&&a.push({name:this.chart_title,type:"treemap",radius:"55%",center:["50%","60%"],data:o,levels:[{itemStyle:{borderColor:"#fff",borderWidth:2,gapWidth:1},emphasis:{itemStyle:{borderColor:"#fff"}}},{colorSaturation:[.35,.5],itemStyle:{borderWidth:2,gapWidth:1,borderColorSaturation:.6}}],roam:"move",itemStyle:{borderRadius:3,borderColor:"#fff",normal:{label:{formatter:function(t){var e=Math.round(t.data.value/(l/100)*100)/100;return"".concat(t.data.name,": ").concat(e,"%, ").concat((0,r.Dx)(t.data.value))},textStyle:{baseline:"top"}}}}});var c=this.chartData.map((function(t){return t[u]}));n.setOption({theme:"shine",name:this.hideTitle?void 0:{text:this.chart_title,textStyle:{fontFamily:"Arial",fontWeight:"normal"}},title:this.hideTitle?void 0:{text:this.chart_title,textStyle:{fontFamily:"Arial",fontWeight:"normal"}},toolbox:{feature:{saveAsImage:{title:"Татах"}}},tooltip:"TreeMapChart"==this.type?{trigger:"item",formatter:function(t){var e=Math.round(t.data.value/(l/100)*100)/100;return"".concat(t.data.name,": ").concat(e,"% <br> ").concat((0,r.Dx)(t.data.value))}}:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"horizontal",left:5,bottom:0,type:"scroll",data:c},series:a}),n.on("click",(function(e){e.data?t.$emit("changeFilter",{value:e.data.name,id:t.id,field:t.title[0].name,table:t.title[0].table}):t.$emit("unFilter")}))}},mounted:function(){this.isRest?this.initRest():this.callData()},data:function(){return{elementData:[],instance:null,timeout:null,lastFilter:[]}},watch:{type:function(t){this.initChart()},value:{handler:function(t,e){var i=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){i.callData()}),1200)},deep:!0},chart_filter:{handler:function(t,e){this.timeout&&clearTimeout(this.timeout),this.callData()},deep:!0},chart_title:{handler:function(t,e){var i=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){i.callData()}),1200)},deep:!0},title:{handler:function(t,e){var i=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){i.callData()}),1200)},deep:!0}}};const l=(0,i(51900).Z)(o,(function(){return(0,this._self._c)("div",{staticStyle:{width:"100%",height:"100%"}})}),[],!1,null,null,null).exports},46887:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var n=i(9669),a=i.n(n);const r={props:["values","type","id"],methods:{getSeries:function(){},callData:function(){var t=this;this.values.length>=1&&a().post("/ve/get-data-pie",{values:this.values}).then((function(e){t.elementData=e.data,t.initChart()})).catch((function(t){}))},initChart:function(){var t=this;this.instance&&(this.instance.dispose(),this.instance=null);var e=document.getElementById(this.id?this.id:"vs-chart"),i=e.parentElement;e.style.height=i.offsetHeight+"px";var n=window.echarts.init(e,"light");this.instance=n;var a=[],r=[];this.values.map((function(e){t.elementData.map((function(t){r.push({value:t[e.name],name:e.title})}))}));var o=[],l=[],s="";r.map((function(t){l.push(t.value),s=t.name})),s&&l.length>=1&&(o.push({value:l,name:s}),"RadarChart"==this.type&&a.push({name:"Budget vs spending",type:"radar",data:o}));var u=[],c=!1;this.values.map((function(t){t.indicator?u.push({name:t.title,max:1*t.indicator}):c=!0})),!1===c&&this.values.length>=1&&o.length>=1&&n.setOption({toolbox:{feature:{saveAsImage:{title:"Татах"}}},tooltip:{},legend:{orient:"vertical",left:"left",data:this.values.map((function(t){return t.title}))},radar:{name:{textStyle:{color:"#fff",backgroundColor:"#999",borderRadius:3,padding:[3,5]}},indicator:u},series:a})}},mounted:function(){},data:function(){return{elementData:[],instance:null,timeout:null}},watch:{type:function(t){this.initChart()},values:{handler:function(t,e){var i=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){i.callData()}),1200)},deep:!0}}};const o=(0,i(51900).Z)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"line"},[e("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:t.id?t.id:"vs-chart"}})])}),[],!1,null,null,null).exports},76689:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var n=i(9669),a=i.n(n);const r={props:["values","type","chart_title"],methods:{getSeries:function(){},callData:function(){var t=this;this.columns=[],this.elementData=[],this.values.length>=1&&(this.values.map((function(e){t.columns.push({key:e.name,title:e.title})})),this.values.length>=1&&a().post("/ve/get-data-table",{values:this.values}).then((function(e){t.elementData=e.data})).catch((function(t){console.log(t)})))}},mounted:function(){this.callData()},data:function(){return{columns:[],elementData:[],instance:null}},watch:{type:function(t){this.initChart()},values:function(t){this.callData()}}};const o=(0,i(51900).Z)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"line"},[e("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"table"}},[e("h5",[t._v(t._s(t.chart_title))]),t._v(" "),e("Table",{attrs:{columns:t.columns,height:"300",data:t.elementData}})],1)])}),[],!1,null,null,null).exports},51900:(t,e,i)=>{"use strict";function n(t,e,i,n,a,r,o,l){var s,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=i,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),o?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=s):a&&(s=l?function(){a.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:a),s)if(u.functional){u._injectStyles=s;var c=u.render;u.render=function(t,e){return s.call(e),c(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,s):[s]}return{exports:t,options:u}}i.d(e,{Z:()=>n})}}]);
//# sourceMappingURL=chart-rest.16cb1ee6f029181f.js.map