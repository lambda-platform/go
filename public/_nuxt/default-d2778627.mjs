var L=Object.defineProperty;var x=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var k=(o,t,a)=>t in o?L(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,w=(o,t)=>{for(var a in t||(t={}))F.call(t,a)&&k(o,a,t[a]);if(x)for(var a of x(t))H.call(t,a)&&k(o,a,t[a]);return o};import{x as S,_ as f,r as n,o as u,f as $,w as l,a as s,k as c,c as v,b as e,q as T,y as z,F as I,u as y,s as E,z as C}from"./entry-15e717bf.mjs";const B=S({methods:{onFinish(o){console.log("login to do:",o),this.$emit("onLogin",!0)},onFinishFailed(o){console.log("Failed:",o)}},data(){return{loginData:{username:"",password:"",remember:!0}}}}),D=c("Remember me"),P=c("Submit");function N(o,t,a,b,i,h){const r=n("a-input"),m=n("a-form-item"),g=n("a-input-password"),p=n("a-checkbox"),d=n("a-button"),M=n("a-form");return u(),$(M,{class:"mx-auto",model:o.loginData,layout:"vertical",name:"basic",autocomplete:"off",onFinish:o.onFinish,onFinishFailed:o.onFinishFailed},{default:l(()=>[s(m,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},{default:l(()=>[s(r,{value:o.loginData.username,"onUpdate:value":t[0]||(t[0]=_=>o.loginData.username=_)},null,8,["value"])]),_:1}),s(m,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},{default:l(()=>[s(g,{value:o.loginData.password,"onUpdate:value":t[1]||(t[1]=_=>o.loginData.password=_)},null,8,["value"])]),_:1}),s(m,{name:"remember","wrapper-col":{offset:8,span:16}},{default:l(()=>[s(p,{checked:o.loginData.remember,"onUpdate:checked":t[2]||(t[2]=_=>o.loginData.remember=_)},{default:l(()=>[D]),_:1},8,["checked"])]),_:1}),s(m,{"wrapper-col":{offset:8,span:16}},{default:l(()=>[s(d,{type:"primary","html-type":"submit"},{default:l(()=>[P]),_:1})]),_:1})]),_:1},8,["model","onFinish","onFinishFailed"])}var j=f(B,[["render",N]]);const A={name:"ThemeSwitcher",beforeCreate(){localStorage.getItem("color-theme")==="dark"||!("color-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},mounted(){var o=document.getElementById("theme-toggle-dark-icon"),t=document.getElementById("theme-toggle-light-icon");localStorage.getItem("color-theme")==="dark"||!("color-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.classList.remove("hidden"):o.classList.remove("hidden");var a=document.getElementById("theme-toggle");a.addEventListener("click",function(){o.classList.toggle("hidden"),t.classList.toggle("hidden"),localStorage.getItem("color-theme")?localStorage.getItem("color-theme")==="light"?(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark"))})}},W={id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"},U=e("svg",{id:"theme-toggle-dark-icon",class:"hidden w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})],-1),V=e("svg",{id:"theme-toggle-light-icon",class:"hidden w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","fill-rule":"evenodd","clip-rule":"evenodd"})],-1),q=[U,V];function R(o,t,a,b,i,h){return u(),v("button",W,q)}var G=f(A,[["render",R]]);const O={components:{Login:j,ThemeSwitcher:G},data(){return{mobileMenu:!1,loginModal:!1}},methods:{onLogin(){this.loginModal=!1},watch:{$route(){setTimeout(()=>{this.mobileMenu=!1,window.scrollTo(0,0)},200)}}}},Z={class:"py-4 lg:fixed lg:inset-x-0 bg-white z-10 bg-white dark:bg-slate-900"},J={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},K={class:"relative z-50 flex justify-between"},Q={class:"flex items-center md:gap-x-12"},X=e("a",{"aria-label":"Home",href:"/",class:"text-slate-700 hover:text-slate-900 dark:text-slate-400 hover:dark:text-slate-300"},[e("div",{class:"mx-auto h-10 w-auto bg-logo-light dark:bg-logo-dark bg-contain bg-no-repeat bg-center"}),c("\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ")],-1),Y={class:"hidden md:flex md:gap-x-6"},ee=c(" \u041D\u04AF\u04AF\u0440 "),te=e("a",{class:"inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 hover:dark:text-slate-900",href:"https://github.com/lambda-platform/go",target:"_blank"}," Github ",-1),oe=e("a",{class:"inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 hover:dark:text-slate-900",href:"https://lambda-platform.github.io/",target:"_blank"}," \u0411\u0430\u0440\u0438\u043C\u0442 \u0431\u0438\u0447\u0438\u0433 ",-1),se={class:"flex items-center gap-x-5 md:gap-x-8"},ae=e("a",{class:"group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600",target:"_blank",href:"/auth/login"},[e("span",null,"\u041D\u044D\u0432\u0442\u0440\u044D\u0445")],-1),le={class:"-mr-1 md:hidden"},ne=e("svg",{"aria-hidden":"true",class:"h-3.5 w-3.5 overflow-visible stroke-slate-700",fill:"none","stroke-width":"2","stroke-linecap":"round"},[e("path",{d:"M0 1H14M0 7H14M0 13H14",class:"origin-center transition"}),e("path",{d:"M2 2L12 12M12 2L2 12",class:"origin-center transition scale-90 opacity-0"})],-1),ie=[ne],re=e("svg",{"aria-hidden":"true",class:"h-3.5 w-3.5 overflow-visible stroke-slate-700",fill:"none","stroke-width":"2","stroke-linecap":"round"},[e("path",{d:"M0 1H14M0 7H14M0 13H14",class:"origin-center transition scale-90 opacity-0"}),e("path",{d:"M2 2L12 12M12 2L2 12",class:"origin-center transition"})],-1),de=[re],ce=e("div",{class:"fixed inset-0 bg-slate-300/50 opacity-100",id:"headlessui-popover-overlay-:r2:"},null,-1),me={class:"absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 opacity-100 scale-100",id:"headlessui-popover-panel-:R1p6H1:",tabindex:"-1"},ue=c(" Home "),he=c(" About "),ge=c(" Ant example "),pe=e("hr",{class:"m-2 border-slate-300/40"},null,-1),_e=e("div",{style:{"padding-top":"100px"},class:"hidden lg:block"},null,-1);function fe(o,t,a,b,i,h){const r=y,m=n("ThemeSwitcher"),g=n("Login"),p=n("a-modal");return u(),v(I,null,[e("header",Z,[e("div",J,[e("nav",K,[e("div",Q,[X,e("div",Y,[s(r,{class:"inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 hover:dark:text-slate-900",to:"/"},{default:l(()=>[ee]),_:1}),te,oe])]),e("div",se,[ae,s(m),e("div",le,[e("div",null,[e("button",{class:"relative z-10 flex h-8 w-8 items-center justify-center","aria-label":"Toggle Navigation",id:"headlessui-popover-button-:r0:",type:"button","aria-expanded":"false",onClick:t[0]||(t[0]=d=>i.mobileMenu=!0)},ie),T(e("div",null,[e("button",{class:"relative z-10 flex h-8 w-8 items-center justify-center","aria-label":"Toggle Navigation",id:"headlessui-popover-button-:R1p6:",type:"button","aria-expanded":"true","aria-controls":"headlessui-popover-panel-:R1p6H1:",onClick:t[1]||(t[1]=d=>i.mobileMenu=!1)},de),ce,e("div",me,[s(r,{class:"block w-full p-2",to:"/"},{default:l(()=>[ue]),_:1}),s(r,{class:"block w-full p-2",to:"/about"},{default:l(()=>[he]),_:1}),s(r,{class:"block w-full p-2",to:"/ant"},{default:l(()=>[ge]),_:1}),pe,e("button",{class:"block w-full p-2",onClick:t[2]||(t[2]=d=>i.loginModal=!0)},"Sign in")])],512),[[z,i.mobileMenu]])])])])])])]),_e,s(p,{visible:i.loginModal,"onUpdate:visible":t[3]||(t[3]=d=>i.loginModal=d),title:"Login",onOk:t[4]||(t[4]=d=>i.loginModal=!1),footer:null},{default:l(()=>[s(g,{onOnLogin:h.onLogin},null,8,["onOnLogin"])]),_:1},8,["visible"])],64)}var be=f(O,[["render",fe]]);const ve={methods:{gotop(){window.scrollTo(0,0)}}},xe={class:"bg-white dark:bg-slate-800"},ke={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},we={class:"py-16"},$e=e("a",{"aria-label":"Home",href:"/",class:"mx-auto h-10 w-auto text-slate-700 align-c hover:text-slate-900 dark:text-slate-400 hover:dark:text-slate-300"},[e("div",{class:"mx-auto h-10 w-auto bg-logo-light dark:bg-logo-dark bg-contain bg-no-repeat bg-center"})],-1),ye={class:"mt-10 text-sm","aria-label":"quick links"},Me={class:"-my-1 flex justify-center gap-x-6"},Le=c(" \u041D\u04AF\u04AF\u0440 "),Fe=e("a",{class:"inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 hover:dark:text-slate-900",href:"https://lambda-platform.github.io/docs"}," \u0411\u0430\u0440\u0438\u043C\u0442 \u0431\u0438\u0447\u0438\u0433 ",-1),He=E('<div class="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between"><div class="flex gap-x-6"><a class="group" aria-label="TaxPal on GitHub" href="https://github.com/lambda-platform/go"><svg aria-hidden="true" class="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"></path></svg></a></div><p class="mt-6 text-sm text-slate-500 sm:mt-0 dark:text-slate-400">\xA9 Lambda Platform</p></div>',1);function Se(o,t,a,b,i,h){const r=y;return u(),v("footer",xe,[e("div",ke,[e("div",we,[$e,e("nav",ye,[e("div",Me,[s(r,{class:"inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 hover:dark:text-slate-900",to:"/"},{default:l(()=>[Le]),_:1}),Fe])])]),He])])}var Te=f(ve,[["render",Se]]);const ze={components:{WebHeader:be,WebFooter:Te},computed:w({},C(["user","userToken","saveEventItems"]))},Ie={class:"bg-white dark:bg-slate-900"},Ee=c("Lambda Platform");function Ce(o,t,a,b,i,h){const r=n("Title"),m=n("Head"),g=n("WebHeader"),p=n("NuxtPage"),d=n("WebFooter");return u(),v("div",Ie,[s(m,null,{default:l(()=>[s(r,null,{default:l(()=>[Ee]),_:1})]),_:1}),s(g),(u(),$(p,{key:o.$route.fullPath})),s(d)])}var Pe=f(ze,[["render",Ce]]);export{Pe as default};
