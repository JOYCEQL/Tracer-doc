var W=Object.defineProperty;var E=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var q=(t,e,o)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,I=(t,e)=>{for(var o in e||(e={}))G.call(e,o)&&q(t,o,e[o]);if(E)for(var o of E(e))J.call(e,o)&&q(t,o,e[o]);return t};import{g as j,r as $,c as p,a as c,t as g,p as Q,b as Y,o as u,d as U,P as ee,e as C,f as y,w as te,v as oe,h as m,i as a,j as l,F as b,k as _,l as T,m as S,n as ne,q as F,s as O,u as k,x as w,y as L,T as ae,z as de,A as ce,B as se,C as re,D as le,E as ie}from"./vendor.37acf614.js";const ue=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))n(d);new MutationObserver(d=>{for(const r of d)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(d){const r={};return d.integrity&&(r.integrity=d.integrity),d.referrerpolicy&&(r.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?r.credentials="include":d.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(d){if(d.ep)return;d.ep=!0;const r=o(d);fetch(d.href,r)}};ue();var N={title:"Tracer UI",themes:{"color-body":"#fff","color-bar":"#fff","color-sub-bar":"#f5f5f5","color-text":"#555","color-sub-text":"#888","color-border":"rgba(0, 0, 0, 0.12)","color-shadow":"#eee","color-introduce-border":"#2196f3","color-primary":"#41b883","color-link":"#00c48f","color-type":"#00c48f","color-progress":"#1d92e9","color-progress-track":"#fff","color-side-bar":"#3a7afe","color-side-bar-active-background":"#e7f5ee","color-app-bar":"#3a7afe","color-nav-button-hover-background":"rgba(0, 0, 0, 0.08)","color-pc-language-active":"#3a7afe","color-pc-language-active-background":"#edf5ff","color-code-bg":"#ffffff","color-table-th-bg":"#fafafc","color-table-qoute-bg":"#fff"},darkThemes:{"color-body":"#121212","color-bar":"#1e1e1e","color-sub-bar":"#272727","color-text":"rgba(255, 255, 255, 0.82)","color-sub-text":"#aaa","color-border":"#333","color-shadow":"#121212","color-introduce-border":"#555","color-primary":"#41b883","color-link":"#10c48f","color-type":"#10c48f","color-progress":"#5580f8","color-progress-track":"#202020","color-side-bar":"#4a7afe","color-side-bar-active-background":"#233633","color-app-bar":"#4a7afe","color-nav-button-hover-background":"rgba(255, 255, 255, 0.08)","color-pc-language-active":"#4a7afe","color-pc-language-active-background":"#4a7afe20","color-code-bg":"#202020","color-table-th-bg":"#1e1e1e","color-table-qoute-bg":"#18181c"}};const z=[];function _e(t){z.forEach(o=>document.documentElement.style.removeProperty(o)),z.length=0;const e=pe(t);Object.entries(e).forEach(([o,n])=>{document.documentElement.style.setProperty(o,n),z.push(o)})}function M(t,e){const o=j(t,e,{}),n=Object.entries(o).reduce((d,[r,s])=>(d[`--doc-${r}`]=s,d),{});_e(n)}function pe(t){return Object.entries(t!=null?t:{}).reduce((e,[o,n])=>{const d=o.startsWith("--")?o:`--${me(o)}`;return e[d]=n,e},{})}function me(t){const e=/([^-])([A-Z])/g;return t.replace(e,"$1-$2").replace(e,"$1-$2").toLowerCase()}function Z(t="tracer-theme"){var o;let e=window.localStorage.getItem(t);return e||(e=((o=window.matchMedia)==null?void 0:o.call(window,"(prefers-color-scheme: dark)").matches)?"darkThemes":"themes",window.localStorage.setItem(t,e)),e}const H=(t,e)=>{window.localStorage.setItem(t,e)};var he="./assets/logo.6340a6c2.png";var h=(t,e)=>{const o=t.__vccOpts||t;for(const[n,d]of e)o[n]=d;return o};const fe={name:"AppHeader",setup(){const t=j(N,"title"),e=$(Z());return{title:t,currentThemes:e,toggleTheme:()=>{e.value=e.value==="darkThemes"?"themes":"darkThemes",console.log(e.value),M(N,e.value),H("tracer-theme",e.value)}}}},ge=t=>(Q("data-v-ca6d0fb2"),t=t(),Y(),t),be={class:"tracer-doc-header"},ve={class:"tracer-doc-header_left"},$e=ge(()=>c("div",{class:"tracer-doc-header_logo"},[c("img",{src:he})],-1)),ye={class:"tracer-doc-header_title"},ke={key:0,class:"dark"},we={key:1,class:"light"};function Ce(t,e,o,n,d,r){return u(),p("div",be,[c("div",ve,[$e,c("div",ye,g(n.title),1)]),c("div",{class:"tracer-doc-header_right",onClick:e[0]||(e[0]=(...s)=>n.toggleTheme&&n.toggleTheme(...s))},[n.currentThemes==="darkThemes"?(u(),p("div",ke,"\u6DF1\u8272")):(u(),p("div",we,"\u6D45\u8272"))])])}var Se=h(fe,[["render",Ce],["__scopeId","data-v-ca6d0fb2"]]);const Be={class:"markdown-body"},Ve=c("h1",null,"Tracer UI",-1),xe=c("p",null,"Tracer UI \u662F\u4E00\u4E2A Vue3 \u7684PC\u7AEF\u7EC4\u4EF6\u5E93\u3002",-1),Ae=c("h2",null,"\u547D\u540D\u7531\u6765",-1),Te=c("p",null,"\u6765\u6E90\u4E8E\u300A\u5B88\u671B\u5148\u950B\u300B\u7684\u82F1\u96C4\u730E\u7A7A\uFF0C\u82F1\u6587\u540DTracer",-1),Ne=c("h2",null,"\u6280\u672F\u685F",-1),ze=c("p",null,"\u7EC4\u4EF6\u5E93\u9879\u76EE\u7531 Vue3.2 + Vite2.X +TypeScript\u642D\u5EFA\uFF0C \u5305\u7BA1\u7406\u5DE5\u5177\u4F7F\u7528pnpm\u3002",-1),Pe=c("h2",null,"\u8BF4\u660E",-1),De=c("p",null,"\u9879\u76EE\u4E2Dvue\u7684\u7248\u672C\u4E0D\u53EF\u4EE5\u4F4E\u4E8E\u8BE5\u7EC4\u4EF6\u5E93\u4E2D\u7684\u7248\u672C\uFF0C\u5426\u5219\u4F1A\u51FA\u73B0\u63D2\u69FD(slot)api\u76F8\u5173\u7684\u62A5\u9519\u3002",-1),Ee=[Ve,xe,Ae,Te,Ne,ze,Pe,De],qe={setup(t,{expose:e}){return e({frontmatter:{}}),(n,d)=>(u(),p("div",Be,Ee))}},Ie={class:"markdown-body"},je=c("h1",null,"\u5B89\u88C5",-1),Ue=c("p",null,"\u53EF\u4EE5\u9009\u62E9\u4E0B\u9762\u4E09\u79CD\u5305\u7BA1\u7406\u5668\u7684\u4EFB\u610F\u4E00\u79CD\uFF0C\u63A8\u8350pnpm\u3002",-1),Fe=c("h2",null,"npm",-1),Oe=c("pre",null,[c("code",{class:"language-Shell"},`    npm install tracer-ts
`)],-1),Le=c("h2",null,"yarn",-1),Me=c("pre",null,[c("code",{class:"language-Shell"},`    yarn add tracer-ts
`)],-1),Ze=c("h2",null,"pnpm",-1),He=c("pre",null,[c("code",{class:"language-Shell"},`    pnpm install tracer-ts
`)],-1),Re=[je,Ue,Fe,Oe,Le,Me,Ze,He],Xe={setup(t,{expose:e}){return e({frontmatter:{}}),(n,d)=>(u(),p("div",Ie,Re))}};const Ke={class:"markdown-body"},We=C(`<h1>\u4F7F\u7528</h1><h2>\u5168\u91CF\u5F15\u5165</h2><pre><code class="language-js">//main.js
import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import tracer from &#39;tracer-ts&#39;
import &#39;tracer-ts/lib/style.css&#39;
createApp(App).use(tracer).mount(&#39;#app&#39;)
</code></pre><h2>\u6309\u9700\u5F15\u5165</h2><p>\u5728 <strong>babel.config.js</strong> \u4E2D\u6DFB\u52A0\u914D\u7F6E</p><pre><code class="language-js">module.exports = {
  plugins: [
      [&quot;babel-plugin-tracer&quot;, {
        &quot;cssPath&quot;: &quot;tracer-ui/lib/style/{key}.css&quot;, 
        &quot;jsPath&quot;: &quot;tracer-ui/lib/Tracer.es.js&quot;,
        &quot;lib&quot;: &quot;tracer-ui&quot; 
    }]
  ]
}
</code></pre><p>\u7136\u540E\u5728vue\u9879\u76EE\u4E2D\u7684\u5165\u53E3\u6587\u4EF6\u4E2D\u5F15\u5165\u7EC4\u4EF6\u5373\u53EF</p><pre><code class="language-js">//main.js
import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import {Button} from &#39;tracer-ts&#39;
createApp(App).use(Button).mount(&#39;#app&#39;)
</code></pre><h2>\u5355\u6587\u4EF6\u7EC4\u4EF6\u4E2D\u76F4\u63A5\u4F7F\u7528</h2><pre><code class="language-html">&lt;template&gt;
  &lt;t-button&gt;tracer-ui&lt;/t-button&gt;
&lt;/template&gt; 
</code></pre>`,10),Ge=[We],Je={setup(t,{expose:e}){return e({frontmatter:{}}),U(()=>{ee.highlightAll()}),(n,d)=>(u(),p("div",Ke,Ge))}};const Qe={props:{compName:{type:String,default:"",require:!0},demoName:{type:String,default:"",require:!0},moduleName:{type:String,default:"",require:!0}},data(){return{sourceCode:"",codeVisible:!1}},computed:{previewSourceCode(){return this.sourceCode.replace(/'\.\.\/\.\.\/index'/g,"")}},async mounted(){this.compName&&this.demoName&&(this.sourceCode=await fetch(`/Tracer-doc/packages/${this.compName}/example/${this.demoName}.vue`).then(t=>t.text())),await this.$nextTick(),Prism.highlightAll()},methods:{async copyCode(){},showSourceCode(){this.codeVisible=!this.codeVisible},onSuccess(){alert("\u590D\u5236\u6210\u529F")}}},Ye={class:"doc-preview"},et={class:"preview-toolbar"},tt={class:"preview-toolbar_desc"},ot={class:"preview-toolbar_btn"},nt=c("span",null,"\u590D\u5236\u4EE3\u7801",-1),at={class:"source-code"},dt={class:"language-html"},ct={class:"language-html"};function st(t,e,o,n,d,r){return u(),p("div",Ye,[c("div",et,[c("h3",tt,g(o.moduleName),1),c("span",ot,[nt,c("span",{onClick:e[0]||(e[0]=(...s)=>r.showSourceCode&&r.showSourceCode(...s))},"\u67E5\u770B\u4EE3\u7801")])]),c("section",null,[y(t.$slots,"default")]),te(c("div",at,[c("pre",dt,[c("code",ct,g(r.previewSourceCode),1)])],512),[[oe,d.codeVisible]])])}var B=h(Qe,[["render",st]]);const rt={},lt=_("\u9ED8\u8BA4\u6309\u94AE"),it=_("\u6362\u79CD\u989C\u8272"),ut=_("\u4E3B\u8981\u6309\u94AE"),_t=_("\u6210\u529F\u6309\u94AE"),pt=_("\u4FE1\u606F\u6309\u94AE"),mt=_("\u8B66\u544A\u6309\u94AE"),ht=_("\u9519\u8BEF\u6309\u94AE"),ft=_("\u5706\u89D2\u6309\u94AE"),gt=_("+");function bt(t,e){const o=m("t-button");return u(),p(b,null,[a(o,null,{default:l(()=>[lt]),_:1}),a(o,{color:"#f2c97d"},{default:l(()=>[it]),_:1}),a(o,{type:"primary"},{default:l(()=>[ut]),_:1}),a(o,{type:"success"},{default:l(()=>[_t]),_:1}),a(o,{type:"info"},{default:l(()=>[pt]),_:1}),a(o,{type:"warning"},{default:l(()=>[mt]),_:1}),a(o,{type:"error"},{default:l(()=>[ht]),_:1}),a(o,{round:"",type:"primary"},{default:l(()=>[ft]),_:1}),a(o,{circle:"",type:"primary"},{default:l(()=>[gt]),_:1})],64)}var vt=h(rt,[["render",bt]]);const $t={},yt=_("\u5C0F\u5C3A\u5BF8"),kt=_("\u9ED8\u8BA4\u5C3A\u5BF8"),wt=_("\u5927\u5C3A\u5BF8");function Ct(t,e){const o=m("t-button");return u(),p(b,null,[a(o,{size:"small",type:"primary"},{default:l(()=>[yt]),_:1}),a(o,{type:"primary"},{default:l(()=>[kt]),_:1}),a(o,{size:"large",type:"primary"},{default:l(()=>[wt]),_:1})],64)}var St=h($t,[["render",Ct]]);const Bt={},Vt=_("\u9ED8\u8BA4\u6309\u94AE"),xt=_("\u6362\u79CD\u989C\u8272"),At=_("\u4E3B\u8981\u6309\u94AE"),Tt=_("\u6210\u529F\u6309\u94AE"),Nt=_("\u4FE1\u606F\u6309\u94AE"),zt=_("\u8B66\u544A\u6309\u94AE"),Pt=_("\u9519\u8BEF\u6309\u94AE"),Dt=_("\u5706\u89D2\u6309\u94AE"),Et=_("+");function qt(t,e){const o=m("t-button");return u(),p(b,null,[a(o,{disabled:""},{default:l(()=>[Vt]),_:1}),a(o,{color:"#f2c97d",disabled:""},{default:l(()=>[xt]),_:1}),a(o,{type:"primary",disabled:""},{default:l(()=>[At]),_:1}),a(o,{type:"success",disabled:""},{default:l(()=>[Tt]),_:1}),a(o,{type:"info",disabled:""},{default:l(()=>[Nt]),_:1}),a(o,{type:"warning",disabled:""},{default:l(()=>[zt]),_:1}),a(o,{type:"error",disabled:""},{default:l(()=>[Pt]),_:1}),a(o,{round:"",type:"primary",disabled:""},{default:l(()=>[Dt]),_:1}),a(o,{circle:"",type:"primary",disabled:""},{default:l(()=>[Et]),_:1})],64)}var It=h(Bt,[["render",qt]]);const jt={components:{Preview:B,BaseUse:vt,Size:St,Disable:It},setup(){}},Ut={class:"button-wrapper"};function Ft(t,e,o,n,d,r){const s=m("base-use"),i=m("Preview"),f=m("size"),v=m("disable");return u(),p("div",Ut,[a(i,{"comp-name":"Button","demo-name":"base",moduleName:"\u57FA\u7840"},{default:l(()=>[a(s)]),_:1}),a(i,{"comp-name":"Button","demo-name":"size",moduleName:"\u5C3A\u5BF8"},{default:l(()=>[a(f)]),_:1}),a(i,{"comp-name":"Button","demo-name":"disable",moduleName:"\u7981\u7528"},{default:l(()=>[a(v)]),_:1})])}var Ot=h(jt,[["render",Ft],["__scopeId","data-v-9b52df94"]]);const Lt={class:"markdown-body"},Mt=c("h1",null,"\u6309\u94AE",-1),Zt=c("h2",null,"\u6F14\u793A",-1),Ht=C("<h2>API</h2><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>color</code></td><td>\u6309\u94AE\u989C\u8272</td><td><em>string</em></td><td><code>null</code></td></tr><tr><td><code>type</code></td><td>\u6309\u94AE\u7C7B\u578B</td><td><code>&#39;default&#39; | &#39;primary&#39; |&#39;success&#39;|&#39;info&#39;|&#39;warning&#39;|&#39;error&#39;</code></td><td><code>default</code></td></tr><tr><td><code>size</code></td><td>\u6309\u94AE\u5C3A\u5BF8</td><td><code>&#39;default&#39; | &#39;large&#39; |&#39;small&#39;</code></td><td><code>default</code></td></tr><tr><td><code>round</code></td><td>\u662F\u5426\u4E3A\u5706\u89D2</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>circle</code></td><td>\u662F\u5426\u4E3A\u5706\u5F62</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>click</code></td><td>\u70B9\u51FB\u6309\u94AE\u65F6\u89E6\u53D1</td><td><code>event: Event</code></td></tr></tbody></table><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u6309\u94AE\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table>",7),Rt={setup(t,{expose:e}){return e({frontmatter:{}}),(n,d)=>(u(),p("div",Lt,[Mt,Zt,a(Ot),Ht]))}},Xt={name:"Base",setup(){return{checked:$(!1),handleChange:o=>{}}}};function Kt(t,e,o,n,d,r){const s=m("t-switch");return u(),p(b,null,[a(s,{modelValue:n.checked,"onUpdate:modelValue":e[0]||(e[0]=i=>n.checked=i),onChange:n.handleChange},null,8,["modelValue","onChange"]),a(s,{disabled:""})],64)}var Wt=h(Xt,[["render",Kt]]);const Gt={setup(){return{checked:$(!1)}}};function Jt(t,e,o,n,d,r){const s=m("t-switch");return u(),p(b,null,[a(s,{size:"default",modelValue:n.checked,"onUpdate:modelValue":e[0]||(e[0]=i=>n.checked=i)},null,8,["modelValue"]),a(s,{size:"default",modelValue:n.checked,"onUpdate:modelValue":e[1]||(e[1]=i=>n.checked=i)},null,8,["modelValue"]),a(s,{size:"large",modelValue:n.checked,"onUpdate:modelValue":e[2]||(e[2]=i=>n.checked=i)},null,8,["modelValue"])],64)}var Qt=h(Gt,[["render",Jt]]);const Yt={name:"Color",setup(){return{checked:$(!1)}}};function eo(t,e,o,n,d,r){const s=m("t-switch");return u(),T(s,{modelValue:n.checked,"onUpdate:modelValue":e[0]||(e[0]=i=>n.checked=i),inactiveColor:"#f77f00",activeColor:"#d62828"},null,8,["modelValue"])}var to=h(Yt,[["render",eo]]);const oo={components:{Preview:B,BaseUse:Wt,Size:Qt,Color:to}},no={class:"switch-wrapper"};function ao(t,e,o,n,d,r){const s=m("base-use"),i=m("Preview"),f=m("color"),v=m("size");return u(),p("div",no,[a(i,{"comp-name":"Switch","demo-name":"base",moduleName:"\u57FA\u7840"},{default:l(()=>[a(s)]),_:1}),a(i,{"comp-name":"Switch","demo-name":"color",moduleName:"\u81EA\u5B9A\u4E49\u989C\u8272"},{default:l(()=>[a(f)]),_:1}),a(i,{"comp-name":"Switch","demo-name":"size",moduleName:"\u5C3A\u5BF8"},{default:l(()=>[a(v)]),_:1})])}var co=h(oo,[["render",ao],["__scopeId","data-v-64272cbf"]]);const so={class:"markdown-body"},ro=c("h1",null,"\u6309\u94AE",-1),lo=c("h2",null,"\u6F14\u793A",-1),io=C("<h2>API</h2><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>active-color</code></td><td>\u6FC0\u6D3B\u72B6\u6001\u989C\u8272</td><td><em>string</em></td><td><code>#18a058</code></td></tr><tr><td><code>inactive-color</code></td><td>\u672A\u6FC0\u6D3B\u72B6\u6001\u989C\u8272</td><td><em>string</em></td><td><code>#dbdbdb</code></td></tr><tr><td><code>size</code></td><td>\u5F00\u5173\u5C3A\u5BF8</td><td><code>&#39;default&#39; | &#39;large&#39; |&#39;small&#39;</code></td><td><code>default</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>change</code></td><td>\u70B9\u51FB\u5F00\u5173\u65F6\u89E6\u53D1</td><td><code>event: Event</code></td></tr></tbody></table>",5),uo={setup(t,{expose:e}){return e({frontmatter:{}}),(n,d)=>(u(),p("div",so,[ro,lo,a(co),io]))}},_o={setup(){const t=$(!1);return{checked:t,openDialog:()=>{t.value=!0},cancel:()=>{alert(1)},confirm:()=>{alert(2)}}}},po=_("\u70B9\u6211\u770B\u5BF9\u8BDD\u6846");function mo(t,e,o,n,d,r){const s=m("t-button"),i=m("t-dialog");return u(),p(b,null,[a(s,{type:"primary",onClick:n.openDialog},{default:l(()=>[po]),_:1},8,["onClick"]),a(i,{modelValue:n.checked,"onUpdate:modelValue":e[0]||(e[0]=f=>n.checked=f),onCancel:n.cancel,onConfirm:n.confirm},null,8,["modelValue","onCancel","onConfirm"])],64)}var ho=h(_o,[["render",mo]]);const fo={setup(){const t=$(!1);return{checked:t,openDialog:()=>{t.value=!0}}}},go=_("\u81EA\u5B9A\u4E49\u5185\u5BB9"),bo=_(" \u65B0\u7684\u6807\u9898 "),vo=_(" \u65B0\u7684\u5185\u5BB9 "),$o=_(" \u65B0\u7684\u5E95\u90E8 ");function yo(t,e,o,n,d,r){const s=m("t-button"),i=m("t-dialog");return u(),p(b,null,[a(s,{type:"primary",onClick:n.openDialog},{default:l(()=>[go]),_:1},8,["onClick"]),a(i,{modelValue:n.checked,"onUpdate:modelValue":e[0]||(e[0]=f=>n.checked=f)},{title:l(()=>[bo]),default:l(()=>[vo]),footer:l(()=>[$o]),_:1},8,["modelValue"])],64)}var ko=h(fo,[["render",yo]]);const wo={components:{Preview:B,BaseUse:ho,BaseSlot:ko},setup(){}},Co={class:"switch-wrapper"};function So(t,e,o,n,d,r){const s=m("base-use"),i=m("Preview"),f=m("base-slot");return u(),p("div",Co,[a(i,{"comp-name":"Dialog","demo-name":"base",moduleName:"\u57FA\u7840"},{default:l(()=>[a(s)]),_:1}),a(i,{"comp-name":"Dialog","demo-name":"slot",moduleName:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{default:l(()=>[a(f)]),_:1})])}var Bo=h(wo,[["render",So],["__scopeId","data-v-43c48c4a"]]);const Vo={class:"markdown-body"},xo=c("h1",null,"\u6309\u94AE",-1),Ao=c("h2",null,"\u6F14\u793A",-1),To=C("<h2>API</h2><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u662F\u5426\u663E\u793Adialog</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>title</code></td><td>\u6807\u9898</td><td><em>string</em></td><td><code>\u6807\u9898</code></td></tr><tr><td><code>confirmBtnText</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u672C</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td><code>cancelBtnText</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u672C</td><td><em>boolean</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td><code>closeOnClickMask</code></td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>confirm</code></td><td>\u70B9\u51FBdialog\u786E\u8BA4\u6309\u94AE\u65F6\u89E6\u53D1</td><td><code>event: Event</code></td></tr><tr><td><code>cancel</code></td><td>\u70B9\u51FBdialog\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td><td><code>event: Event</code></td></tr></tbody></table><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>\u2014\u2014</code></td><td>dialog\u4E3B\u4F53</td></tr><tr><td><code>title</code></td><td>dialog\u6807\u9898</td></tr><tr><td><code>footer</code></td><td>dialog\u64CD\u4F5C\u6309\u94AE\u533A\u5185\u5BB9</td></tr></tbody></table>",7),No={setup(t,{expose:e}){return e({frontmatter:{}}),(n,d)=>(u(),p("div",Vo,[xo,Ao,a(Bo),To]))}};var P={\u6587\u6863:[{title:"\u4ECB\u7ECD",name:"introduce",path:"/components/introduce",meta:{compZhName:"\u4ECB\u7ECD",compClassName:"introduce"},component:qe},{title:"\u5B89\u88C5",name:"install",path:"/components/install",meta:{compZhName:"\u5B89\u88C5",compClassName:"install"},component:Xe},{title:"\u4F7F\u7528",name:"use",path:"/components/use",meta:{compZhName:"\u4F7F\u7528",compClassName:"use"},component:Je}],\u7EC4\u4EF6:[{title:"\u6309\u94AE",name:"button",path:"/components/button",meta:{compZhName:"\u6309\u94AE",compClassName:"button"},component:Rt},{title:"\u5F00\u5173",name:"switch",path:"/components/switch",meta:{compZhName:"\u5F00\u5173",compClassName:"switch"},component:uo},{title:"\u5BF9\u8BDD\u6846",name:"dialog",path:"/components/dialog",meta:{compZhName:"\u5F00\u5173",compClassName:"dialog"},component:No}]};const zo=S({name:"AppSideBar",setup(t){const e=ne({docRoutes:P});return I({},F(e))}}),Po={class:"tracer-doc-side"},Do={class:"menu"},Eo={class:"menu-group-title text-overflow"};function qo(t,e,o,n,d,r){const s=m("router-link");return u(),p("div",Po,[c("div",Do,[(u(!0),p(b,null,O(t.docRoutes,(i,f)=>(u(),p("div",{class:"menu-group",key:f},[c("span",Eo,g(f)+g(f!="\u6587\u6863"?`\uFF08${i.length}\uFF09`:""),1),(u(!0),p(b,null,O(i,(v,K)=>(u(),T(s,{key:K,class:"menu-item text-overflow",to:`${v.path}`},{default:l(()=>[_(g(v.title),1)]),_:2},1032,["to"]))),128))]))),128))])])}var Io=h(zo,[["render",qo],["__scopeId","data-v-a1b47e5c"]]);const jo=S({name:"TracerDoc",components:{AppSideBar:Io,AppHeader:Se},setup(){const t=$(Z()),e=$(!0);U(async()=>{M(N,t.value),H("tracer-theme",t.value)});const o=()=>{e.value=!e.value},n=k(()=>({left:e.value?"0px":"-240px"})),d=k(()=>({left:e.value?"240px":"0px",transform:e.value?"rotate(180deg) translateX(50%)":"rotate(0deg) translateX(50%)"})),r=k(()=>({paddingLeft:e.value?"240px":"0px"}));return{asideVisible:e,currentThemes:t,toggleAsidStyle:d,toggleAside:o,mainStyle:r,asideStyle:n}}}),Uo={class:"tracer-doc"},Fo=c("svg",{class:"icon","aria-hidden":"true"},[c("use",{"xlink:href":"#icon-arrow-right"})],-1),Oo=[Fo];function Lo(t,e,o,n,d,r){const s=m("app-header"),i=m("app-side-bar"),f=m("router-view");return u(),p("div",Uo,[a(s),c("div",{class:"app-main",style:w(t.mainStyle)},[a(i,{style:w(t.asideStyle),class:"aside"},null,8,["style"]),c("div",{class:"toggle-button",onClick:e[0]||(e[0]=(...v)=>t.toggleAside&&t.toggleAside(...v)),style:w(t.toggleAsidStyle)},Oo,4),c("main",null,[a(f)])],4)])}var Mo=h(jo,[["render",Lo]]);const Zo=S({name:"TButton",props:{color:{type:String},round:{type:Boolean,default:!1},type:{type:String,default:"default"},size:{type:String,default:"default"},circle:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["click"],setup(t){const{color:e,round:o,type:n,size:d,circle:r,disabled:s}=t,i=k(()=>({[`t-type-${n}`]:n,[`t-button-${d}`]:d,["is-round"]:o,["is-circle"]:r,["is-disabled"]:s}));return{style:{background:e},classes:i}}});function Ho(t,e,o,n,d,r){return u(),p("button",{class:L(["t-button",t.classes]),onClick:e[0]||(e[0]=s=>t.$emit("click",s)),style:w(t.style)},[y(t.$slots,"default")],6)}var V=h(Zo,[["render",Ho]]);V.install=function(t){t.component(V.name,V)};const Ro={name:"TSwitch",props:{modelValue:{type:Boolean,default:!1},activeColor:{type:String,default:"#18a058"},inactiveColor:{type:String,default:"#dbdbdb"},disabled:{type:Boolean,default:!1},size:{type:String,default:"default"},text:{type:String,default:""}},emits:["update:modelValue","change"],setup(t,e){const o=()=>{t.disabled||(e.emit("update:modelValue",!t.modelValue),e.emit("change",!t.modelValue))},{modelValue:n,disabled:d,size:r}=F(t),s=k(()=>({["t-switch-checked"]:n.value,["t-switch-disabled"]:d.value,[`t-switch-${r.value}`]:r.value}));return{toggle:o,classes:s}}},Xo=c("span",null,null,-1),Ko=[Xo];function Wo(t,e,o,n,d,r){return u(),p("button",{class:L(["t-switch",n.classes]),onClick:e[0]||(e[0]=(...s)=>n.toggle&&n.toggle(...s)),style:w({background:o.modelValue?o.activeColor:o.inactiveColor})},Ko,6)}var x=h(Ro,[["render",Wo]]);x.install=function(t){t.component(x.name,x)};const Go=S({name:"TDialog",props:{modelValue:{type:Boolean,default:!1},title:{type:String,default:"\u6807\u9898"},confirmBtnText:{type:String,default:"\u786E\u5B9A"},cancelBtnText:{type:String,default:"\u53D6\u6D88"},closeOnClickMask:{type:Boolean,default:!0}},emits:["update:modelValue","confirm","cancel"],setup(t,{emit:e}){const o=()=>{e("update:modelValue",!1),e("cancel")};return{cancel:o,confirm:()=>{e("update:modelValue",!1),e("confirm")},maskChange:()=>{t.closeOnClickMask&&o()}}}}),Jo={class:"dialog-content"},Qo=c("p",null,"\u5185\u5BB9",-1),Yo={class:"dialog-footer"};function en(t,e,o,n,d,r){const s=m("t-button");return u(),T(de,{to:"body"},[a(ae,{name:"dialog-fade"},{default:l(()=>[t.modelValue?(u(),p("div",{key:0,class:"dialog",onClick:e[1]||(e[1]=(...i)=>t.maskChange&&t.maskChange(...i))},[c("div",{class:"dialog-wrapper",onClick:e[0]||(e[0]=ce(()=>{},["stop"]))},[c("header",null,[y(t.$slots,"title",{},()=>[_(g(t.title),1)])]),c("main",Jo,[y(t.$slots,"default",{},()=>[Qo])]),c("footer",Yo,[y(t.$slots,"footer",{},()=>[a(s,{onClick:t.cancel,class:"dialog-btn-cancel"},{default:l(()=>[_(g(t.cancelBtnText),1)]),_:1},8,["onClick"]),a(s,{type:"primary",onClick:t.confirm},{default:l(()=>[_(g(t.confirmBtnText),1)]),_:1},8,["onClick"])])])])])):se("",!0)]),_:3})])}var A=h(Go,[["render",en]]);A.install=function(t){t.component(A.name,A)};const R=function(t){t.use(V),t.use(x),t.use(A)};typeof window!="undefined"&&window.Vue&&R(window.Vue);let D=[{path:"/",redirect:"/components/introduce"}];for(let t in P)D=[...D,...P[t]];const tn={history:re(),routes:D,scrollBehavior(t,e){if(t.path!==e.path)return{top:0}}},on=le(tn);const X=ie(Mo);X.component("Preview",B);X.use(on).use(R).mount("#app");
