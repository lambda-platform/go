import"./BYTvHWBW.js";function o(e,t){let n=String(e);for(;n.length<t;)n="0"+n;return n}function i(e){return e.endsWith("Z")}function D(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{9}[+-]\d{2}:\d{2}$/.test(e)}function S(e){if(e){if(i(e))return e;{const t=new Date(e);return t.getFullYear()+"-"+o(t.getMonth()+1,2)+"-"+o(t.getDate(),2)+"T"+o(t.getHours(),2)+":"+o(t.getMinutes(),2)+":"+o(t.getSeconds(),2)+"."+o(t.getMilliseconds(),3).substring(0,3)+"Z"}}else return null}function g(e){return/T00:00:00Z$/.test(e)}function Y(e){return g(e)?l(e):d(e)}function l(e){if(e)if(i(e)){const t=new Date(e),n=t.getUTCFullYear(),r=String(t.getUTCMonth()+1).padStart(2,"0"),s=String(t.getUTCDate()).padStart(2,"0");return`${n}-${r}-${s}`}else{const t=new Date(e),n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${n}-${r}-${s}`}else return null}function d(e){if(e)if(i(e)){const t=new Date(e),n=t.getUTCFullYear(),r=String(t.getUTCMonth()+1).padStart(2,"0"),s=String(t.getUTCDate()).padStart(2,"0"),a=String(t.getUTCHours()).padStart(2,"0"),u=String(t.getUTCMinutes()).padStart(2,"0"),c=String(t.getUTCSeconds()).padStart(2,"0");return`${n}-${r}-${s} ${a}:${u}:${c}`}else{const t=new Date(e),n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),a=String(t.getHours()).padStart(2,"0"),u=String(t.getMinutes()).padStart(2,"0"),c=String(t.getSeconds()).padStart(2,"0");return`${n}-${r}-${s} ${a}:${u}:${c}`}else return null}export{d as a,D as b,Y as c,l as f,S as g,i};
