import{bh as We,bi as oe,bj as ze,bk as ie,bl as ue,bm as de,bn as ce,bo as pe,bp as ee,bq as xe,br as fe,b as j,g as $,d as D,u as H,A as C,bs as Xe,bt as Re,bu as Ze,bv as Te,bw as Le,bx as Je,V as me,a as b,c as P,n as w,f as s,j as B,D as N,e as F,t as x,F as E,k as O,w as k,l as Qe,E as M,_ as W,q as Ue,N as re,a5 as Ae,$ as se,by as L,z as Ye,ap as Z,r as q,Y as Ce,ax as et,ar as Fe,at as V,C as S,bz as tt,bA as st,bB as at,aJ as nt,aa as lt,h as rt,be as ae,a4 as ve,aG as ge,bC as ot,bD as it,R as ne,aq as ut,bE as dt,S as ct,p as pt,a7 as ft,b5 as ye,v as he,bg as mt,aD as K,ay as Oe}from"./index-79c64a0f.js";import{a as vt,E as gt}from"./el-form-item-ebd3491e.js";/* empty css                */import{u as De,d as yt}from"./index-ad814812.js";import{_ as ht}from"./_plugin-vue_export-helper-c27b6911.js";import{E as _t}from"./el-dialog-bfd4935a.js";import"./refs-b81c3a08.js";var bt="__lodash_hash_undefined__";function wt(t){return this.__data__.set(t,bt),this}function $t(t){return this.__data__.has(t)}function X(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new We;++e<n;)this.add(t[e])}X.prototype.add=X.prototype.push=wt;X.prototype.has=$t;function Et(t,e){for(var n=-1,a=t==null?0:t.length;++n<a;)if(e(t[n],n,t))return!0;return!1}function Pt(t,e){return t.has(e)}var kt=1,St=2;function Be(t,e,n,a,u,r){var p=n&kt,y=t.length,h=e.length;if(y!=h&&!(p&&h>y))return!1;var f=r.get(t),g=r.get(e);if(f&&g)return f==e&&g==t;var d=-1,l=!0,i=n&St?new X:void 0;for(r.set(t,e),r.set(e,t);++d<y;){var o=t[d],v=e[d];if(a)var _=p?a(v,o,d,e,t,r):a(o,v,d,t,e,r);if(_!==void 0){if(_)continue;l=!1;break}if(i){if(!Et(e,function(m,R){if(!Pt(i,R)&&(o===m||u(o,m,n,a,r)))return i.push(R)})){l=!1;break}}else if(!(o===v||u(o,v,n,a,r))){l=!1;break}}return r.delete(t),r.delete(e),l}function Rt(t){var e=-1,n=Array(t.size);return t.forEach(function(a,u){n[++e]=[u,a]}),n}function Tt(t){var e=-1,n=Array(t.size);return t.forEach(function(a){n[++e]=a}),n}var Lt=1,Ut=2,At="[object Boolean]",Ct="[object Date]",Ft="[object Error]",Ot="[object Map]",Dt="[object Number]",Bt="[object RegExp]",It="[object Set]",Mt="[object String]",Nt="[object Symbol]",qt="[object ArrayBuffer]",Ht="[object DataView]",_e=oe?oe.prototype:void 0,te=_e?_e.valueOf:void 0;function Vt(t,e,n,a,u,r,p){switch(n){case Ht:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case qt:return!(t.byteLength!=e.byteLength||!r(new ie(t),new ie(e)));case At:case Ct:case Dt:return ze(+t,+e);case Ft:return t.name==e.name&&t.message==e.message;case Bt:case Mt:return t==e+"";case Ot:var y=Rt;case It:var h=a&Lt;if(y||(y=Tt),t.size!=e.size&&!h)return!1;var f=p.get(t);if(f)return f==e;a|=Ut,p.set(t,e);var g=Be(y(t),y(e),a,u,r,p);return p.delete(t),g;case Nt:if(te)return te.call(t)==te.call(e)}return!1}var jt=1,Gt=Object.prototype,Kt=Gt.hasOwnProperty;function Wt(t,e,n,a,u,r){var p=n&jt,y=ue(t),h=y.length,f=ue(e),g=f.length;if(h!=g&&!p)return!1;for(var d=h;d--;){var l=y[d];if(!(p?l in e:Kt.call(e,l)))return!1}var i=r.get(t),o=r.get(e);if(i&&o)return i==e&&o==t;var v=!0;r.set(t,e),r.set(e,t);for(var _=p;++d<h;){l=y[d];var m=t[l],R=e[l];if(a)var c=p?a(R,m,l,e,t,r):a(m,R,l,t,e,r);if(!(c===void 0?m===R||u(m,R,n,a,r):c)){v=!1;break}_||(_=l=="constructor")}if(v&&!_){var T=t.constructor,U=e.constructor;T!=U&&"constructor"in t&&"constructor"in e&&!(typeof T=="function"&&T instanceof T&&typeof U=="function"&&U instanceof U)&&(v=!1)}return r.delete(t),r.delete(e),v}var zt=1,be="[object Arguments]",we="[object Array]",z="[object Object]",xt=Object.prototype,$e=xt.hasOwnProperty;function Xt(t,e,n,a,u,r){var p=de(t),y=de(e),h=p?we:ce(t),f=y?we:ce(e);h=h==be?z:h,f=f==be?z:f;var g=h==z,d=f==z,l=h==f;if(l&&pe(t)){if(!pe(e))return!1;p=!0,g=!1}if(l&&!g)return r||(r=new ee),p||xe(t)?Be(t,e,n,a,u,r):Vt(t,e,h,n,a,u,r);if(!(n&zt)){var i=g&&$e.call(t,"__wrapped__"),o=d&&$e.call(e,"__wrapped__");if(i||o){var v=i?t.value():t,_=o?e.value():e;return r||(r=new ee),u(v,_,n,a,r)}}return l?(r||(r=new ee),Wt(t,e,n,a,u,r)):!1}function Ie(t,e,n,a,u){return t===e?!0:t==null||e==null||!fe(t)&&!fe(e)?t!==t&&e!==e:Xt(t,e,n,a,Ie,u)}function Zt(t,e){return Ie(t,e)}const Jt=j({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:t=>t>=0&&t<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:$(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:$([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:$(Function),default:t=>`${t}%`}}),Qt=["aria-valuenow"],Yt={viewBox:"0 0 100 100"},es=["d","stroke","stroke-linecap","stroke-width"],ts=["d","stroke","opacity","stroke-linecap","stroke-width"],ss={key:0},as=D({name:"ElProgress"}),ns=D({...as,props:Jt,setup(t){const e=t,n={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},a=H("progress"),u=C(()=>({width:`${e.percentage}%`,animationDuration:`${e.duration}s`,backgroundColor:R(e.percentage)})),r=C(()=>(e.strokeWidth/e.width*100).toFixed(1)),p=C(()=>["circle","dashboard"].includes(e.type)?Number.parseInt(`${50-Number.parseFloat(r.value)/2}`,10):0),y=C(()=>{const c=p.value,T=e.type==="dashboard";return`
          M 50 50
          m 0 ${T?"":"-"}${c}
          a ${c} ${c} 0 1 1 0 ${T?"-":""}${c*2}
          a ${c} ${c} 0 1 1 0 ${T?"":"-"}${c*2}
          `}),h=C(()=>2*Math.PI*p.value),f=C(()=>e.type==="dashboard"?.75:1),g=C(()=>`${-1*h.value*(1-f.value)/2}px`),d=C(()=>({strokeDasharray:`${h.value*f.value}px, ${h.value}px`,strokeDashoffset:g.value})),l=C(()=>({strokeDasharray:`${h.value*f.value*(e.percentage/100)}px, ${h.value}px`,strokeDashoffset:g.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),i=C(()=>{let c;return e.color?c=R(e.percentage):c=n[e.status]||n.default,c}),o=C(()=>e.status==="warning"?Xe:e.type==="line"?e.status==="success"?Re:Ze:e.status==="success"?Te:Le),v=C(()=>e.type==="line"?12+e.strokeWidth*.4:e.width*.111111+2),_=C(()=>e.format(e.percentage));function m(c){const T=100/c.length;return c.map((A,I)=>me(A)?{color:A,percentage:(I+1)*T}:A).sort((A,I)=>A.percentage-I.percentage)}const R=c=>{var T;const{color:U}=e;if(Je(U))return U(c);if(me(U))return U;{const A=m(U);for(const I of A)if(I.percentage>c)return I.color;return(T=A[A.length-1])==null?void 0:T.color}};return(c,T)=>(b(),P("div",{class:w([s(a).b(),s(a).m(c.type),s(a).is(c.status),{[s(a).m("without-text")]:!c.showText,[s(a).m("text-inside")]:c.textInside}]),role:"progressbar","aria-valuenow":c.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[c.type==="line"?(b(),P("div",{key:0,class:w(s(a).b("bar"))},[B("div",{class:w(s(a).be("bar","outer")),style:N({height:`${c.strokeWidth}px`})},[B("div",{class:w([s(a).be("bar","inner"),{[s(a).bem("bar","inner","indeterminate")]:c.indeterminate},{[s(a).bem("bar","inner","striped")]:c.striped},{[s(a).bem("bar","inner","striped-flow")]:c.stripedFlow}]),style:N(s(u))},[(c.showText||c.$slots.default)&&c.textInside?(b(),P("div",{key:0,class:w(s(a).be("bar","innerText"))},[F(c.$slots,"default",{percentage:c.percentage},()=>[B("span",null,x(s(_)),1)])],2)):E("v-if",!0)],6)],6)],2)):(b(),P("div",{key:1,class:w(s(a).b("circle")),style:N({height:`${c.width}px`,width:`${c.width}px`})},[(b(),P("svg",Yt,[B("path",{class:w(s(a).be("circle","track")),d:s(y),stroke:`var(${s(a).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":c.strokeLinecap,"stroke-width":s(r),fill:"none",style:N(s(d))},null,14,es),B("path",{class:w(s(a).be("circle","path")),d:s(y),stroke:s(i),fill:"none",opacity:c.percentage?1:0,"stroke-linecap":c.strokeLinecap,"stroke-width":s(r),style:N(s(l))},null,14,ts)]))],6)),(c.showText||c.$slots.default)&&!c.textInside?(b(),P("div",{key:2,class:w(s(a).e("text")),style:N({fontSize:`${s(v)}px`})},[F(c.$slots,"default",{percentage:c.percentage},()=>[c.status?(b(),O(s(M),{key:1},{default:k(()=>[(b(),O(Qe(s(o))))]),_:1})):(b(),P("span",ss,x(s(_)),1))])],6)):E("v-if",!0)],10,Qt))}});var ls=W(ns,[["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]);const rs=Ue(ls),Me=Symbol("uploadContextKey"),os="ElUpload";class is extends Error{constructor(e,n,a,u){super(e),this.name="UploadAjaxError",this.status=n,this.method=a,this.url=u}}function Ee(t,e,n){let a;return n.response?a=`${n.response.error||n.response}`:n.responseText?a=`${n.responseText}`:a=`fail to ${e.method} ${t} ${n.status}`,new is(a,n.status,e.method,t)}function us(t){const e=t.responseText||t.response;if(!e)return e;try{return JSON.parse(e)}catch{return e}}const ds=t=>{typeof XMLHttpRequest>"u"&&re(os,"XMLHttpRequest is undefined");const e=new XMLHttpRequest,n=t.action;e.upload&&e.upload.addEventListener("progress",r=>{const p=r;p.percent=r.total>0?r.loaded/r.total*100:0,t.onProgress(p)});const a=new FormData;if(t.data)for(const[r,p]of Object.entries(t.data))Array.isArray(p)?a.append(r,...p):a.append(r,p);a.append(t.filename,t.file,t.file.name),e.addEventListener("error",()=>{t.onError(Ee(n,t,e))}),e.addEventListener("load",()=>{if(e.status<200||e.status>=300)return t.onError(Ee(n,t,e));t.onSuccess(us(e))}),e.open(t.method,n,!0),t.withCredentials&&"withCredentials"in e&&(e.withCredentials=!0);const u=t.headers||{};if(u instanceof Headers)u.forEach((r,p)=>e.setRequestHeader(p,r));else for(const[r,p]of Object.entries(u))Ae(p)||e.setRequestHeader(r,String(p));return e.send(a),e},Ne=["text","picture","picture-card"];let cs=1;const le=()=>Date.now()+cs++,qe=j({action:{type:String,default:"#"},headers:{type:$(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>se({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:$(Array),default:()=>se([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:Ne,default:"text"},httpRequest:{type:$(Function),default:ds},disabled:Boolean,limit:Number}),ps=j({...qe,beforeUpload:{type:$(Function),default:L},beforeRemove:{type:$(Function)},onRemove:{type:$(Function),default:L},onChange:{type:$(Function),default:L},onPreview:{type:$(Function),default:L},onSuccess:{type:$(Function),default:L},onProgress:{type:$(Function),default:L},onError:{type:$(Function),default:L},onExceed:{type:$(Function),default:L}}),fs=j({files:{type:$(Array),default:()=>se([])},disabled:{type:Boolean,default:!1},handlePreview:{type:$(Function),default:L},listType:{type:String,values:Ne,default:"text"}}),ms={remove:t=>!!t},vs=["onKeydown"],gs=["src"],ys=["onClick"],hs=["title"],_s=["onClick"],bs=["onClick"],ws=D({name:"ElUploadList"}),$s=D({...ws,props:fs,emits:ms,setup(t,{emit:e}){const{t:n}=Ye(),a=H("upload"),u=H("icon"),r=H("list"),p=Z(),y=q(!1),h=f=>{e("remove",f)};return(f,g)=>(b(),O(nt,{tag:"ul",class:w([s(a).b("list"),s(a).bm("list",f.listType),s(a).is("disabled",s(p))]),name:s(r).b()},{default:k(()=>[(b(!0),P(Ce,null,et(f.files,d=>(b(),P("li",{key:d.uid||d.name,class:w([s(a).be("list","item"),s(a).is(d.status),{focusing:y.value}]),tabindex:"0",onKeydown:Fe(l=>!s(p)&&h(d),["delete"]),onFocus:g[0]||(g[0]=l=>y.value=!0),onBlur:g[1]||(g[1]=l=>y.value=!1),onClick:g[2]||(g[2]=l=>y.value=!1)},[F(f.$slots,"default",{file:d},()=>[f.listType==="picture"||d.status!=="uploading"&&f.listType==="picture-card"?(b(),P("img",{key:0,class:w(s(a).be("list","item-thumbnail")),src:d.url,alt:""},null,10,gs)):E("v-if",!0),d.status==="uploading"||f.listType!=="picture-card"?(b(),P("div",{key:1,class:w(s(a).be("list","item-info"))},[B("a",{class:w(s(a).be("list","item-name")),onClick:V(l=>f.handlePreview(d),["prevent"])},[S(s(M),{class:w(s(u).m("document"))},{default:k(()=>[S(s(tt))]),_:1},8,["class"]),B("span",{class:w(s(a).be("list","item-file-name")),title:d.name},x(d.name),11,hs)],10,ys),d.status==="uploading"?(b(),O(s(rs),{key:0,type:f.listType==="picture-card"?"circle":"line","stroke-width":f.listType==="picture-card"?6:2,percentage:Number(d.percentage),style:N(f.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):E("v-if",!0)],2)):E("v-if",!0),B("label",{class:w(s(a).be("list","item-status-label"))},[f.listType==="text"?(b(),O(s(M),{key:0,class:w([s(u).m("upload-success"),s(u).m("circle-check")])},{default:k(()=>[S(s(Re))]),_:1},8,["class"])):["picture-card","picture"].includes(f.listType)?(b(),O(s(M),{key:1,class:w([s(u).m("upload-success"),s(u).m("check")])},{default:k(()=>[S(s(Te))]),_:1},8,["class"])):E("v-if",!0)],2),s(p)?E("v-if",!0):(b(),O(s(M),{key:2,class:w(s(u).m("close")),onClick:l=>h(d)},{default:k(()=>[S(s(Le))]),_:2},1032,["class","onClick"])),E(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),E(" This is a bug which needs to be fixed "),E(" TODO: Fix the incorrect navigation interaction "),s(p)?E("v-if",!0):(b(),P("i",{key:3,class:w(s(u).m("close-tip"))},x(s(n)("el.upload.deleteTip")),3)),f.listType==="picture-card"?(b(),P("span",{key:4,class:w(s(a).be("list","item-actions"))},[B("span",{class:w(s(a).be("list","item-preview")),onClick:l=>f.handlePreview(d)},[S(s(M),{class:w(s(u).m("zoom-in"))},{default:k(()=>[S(s(st))]),_:1},8,["class"])],10,_s),s(p)?E("v-if",!0):(b(),P("span",{key:0,class:w(s(a).be("list","item-delete")),onClick:l=>h(d)},[S(s(M),{class:w(s(u).m("delete"))},{default:k(()=>[S(s(at))]),_:1},8,["class"])],10,bs))],2)):E("v-if",!0)])],42,vs))),128)),F(f.$slots,"append")]),_:3},8,["class","name"]))}});var Pe=W($s,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const Es=j({disabled:{type:Boolean,default:!1}}),Ps={file:t=>lt(t)},ks=["onDrop","onDragover"],He="ElUploadDrag",Ss=D({name:He}),Rs=D({...Ss,props:Es,emits:Ps,setup(t,{emit:e}){const n=rt(Me);n||re(He,"usage: <el-upload><el-upload-dragger /></el-upload>");const a=H("upload"),u=q(!1),r=Z(),p=h=>{if(r.value)return;u.value=!1,h.stopPropagation();const f=Array.from(h.dataTransfer.files),g=n.accept.value;if(!g){e("file",f);return}const d=f.filter(l=>{const{type:i,name:o}=l,v=o.includes(".")?`.${o.split(".").pop()}`:"",_=i.replace(/\/.*$/,"");return g.split(",").map(m=>m.trim()).filter(m=>m).some(m=>m.startsWith(".")?v===m:/\/\*$/.test(m)?_===m.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(m)?i===m:!1)});e("file",d)},y=()=>{r.value||(u.value=!0)};return(h,f)=>(b(),P("div",{class:w([s(a).b("dragger"),s(a).is("dragover",u.value)]),onDrop:V(p,["prevent"]),onDragover:V(y,["prevent"]),onDragleave:f[0]||(f[0]=V(g=>u.value=!1,["prevent"]))},[F(h.$slots,"default")],42,ks))}});var Ts=W(Rs,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const Ls=j({...qe,beforeUpload:{type:$(Function),default:L},onRemove:{type:$(Function),default:L},onStart:{type:$(Function),default:L},onSuccess:{type:$(Function),default:L},onProgress:{type:$(Function),default:L},onError:{type:$(Function),default:L},onExceed:{type:$(Function),default:L}}),Us=["onKeydown"],As=["name","multiple","accept"],Cs=D({name:"ElUploadContent",inheritAttrs:!1}),Fs=D({...Cs,props:Ls,setup(t,{expose:e}){const n=t,a=H("upload"),u=Z(),r=ae({}),p=ae(),y=o=>{if(o.length===0)return;const{autoUpload:v,limit:_,fileList:m,multiple:R,onStart:c,onExceed:T}=n;if(_&&m.length+o.length>_){T(o,m);return}R||(o=o.slice(0,1));for(const U of o){const A=U;A.uid=le(),c(A),v&&h(A)}},h=async o=>{if(p.value.value="",!n.beforeUpload)return f(o);let v,_={};try{const R=n.data,c=n.beforeUpload(o);_=ve(n.data)?ge(n.data):n.data,v=await c,ve(n.data)&&Zt(R,_)&&(_=ge(n.data))}catch{v=!1}if(v===!1){n.onRemove(o);return}let m=o;v instanceof Blob&&(v instanceof File?m=v:m=new File([v],o.name,{type:o.type})),f(Object.assign(m,{uid:o.uid}),_)},f=(o,v)=>{const{headers:_,data:m,method:R,withCredentials:c,name:T,action:U,onProgress:A,onSuccess:I,onError:Ge,httpRequest:Ke}=n,{uid:J}=o,Q={headers:_||{},withCredentials:c,file:o,data:v??m,method:R,filename:T,action:U,onProgress:G=>{A(G,o)},onSuccess:G=>{I(G,o),delete r.value[J]},onError:G=>{Ge(G,o),delete r.value[J]}},Y=Ke(Q);r.value[J]=Y,Y instanceof Promise&&Y.then(Q.onSuccess,Q.onError)},g=o=>{const v=o.target.files;v&&y(Array.from(v))},d=()=>{u.value||(p.value.value="",p.value.click())},l=()=>{d()};return e({abort:o=>{ot(r.value).filter(o?([_])=>String(o.uid)===_:()=>!0).forEach(([_,m])=>{m instanceof XMLHttpRequest&&m.abort(),delete r.value[_]})},upload:h}),(o,v)=>(b(),P("div",{class:w([s(a).b(),s(a).m(o.listType),s(a).is("drag",o.drag)]),tabindex:"0",onClick:d,onKeydown:Fe(V(l,["self"]),["enter","space"])},[o.drag?(b(),O(Ts,{key:0,disabled:s(u),onFile:y},{default:k(()=>[F(o.$slots,"default")]),_:3},8,["disabled"])):F(o.$slots,"default",{key:1}),B("input",{ref_key:"inputRef",ref:p,class:w(s(a).e("input")),name:o.name,multiple:o.multiple,accept:o.accept,type:"file",onChange:g,onClick:v[0]||(v[0]=V(()=>{},["stop"]))},null,42,As)],42,Us))}});var ke=W(Fs,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const Se="ElUpload",Os=t=>{var e;(e=t.url)!=null&&e.startsWith("blob:")&&URL.revokeObjectURL(t.url)},Ds=(t,e)=>{const n=it(t,"fileList",void 0,{passive:!0}),a=l=>n.value.find(i=>i.uid===l.uid);function u(l){var i;(i=e.value)==null||i.abort(l)}function r(l=["ready","uploading","success","fail"]){n.value=n.value.filter(i=>!l.includes(i.status))}const p=(l,i)=>{const o=a(i);o&&(console.error(l),o.status="fail",n.value.splice(n.value.indexOf(o),1),t.onError(l,o,n.value),t.onChange(o,n.value))},y=(l,i)=>{const o=a(i);o&&(t.onProgress(l,o,n.value),o.status="uploading",o.percentage=Math.round(l.percent))},h=(l,i)=>{const o=a(i);o&&(o.status="success",o.response=l,t.onSuccess(l,o,n.value),t.onChange(o,n.value))},f=l=>{Ae(l.uid)&&(l.uid=le());const i={name:l.name,percentage:0,status:"ready",size:l.size,raw:l,uid:l.uid};if(t.listType==="picture-card"||t.listType==="picture")try{i.url=URL.createObjectURL(l)}catch(o){ut(Se,o.message),t.onError(o,i,n.value)}n.value=[...n.value,i],t.onChange(i,n.value)},g=async l=>{const i=l instanceof File?a(l):l;i||re(Se,"file to be removed not found");const o=v=>{u(v);const _=n.value;_.splice(_.indexOf(v),1),t.onRemove(v,_),Os(v)};t.beforeRemove?await t.beforeRemove(i,n.value)!==!1&&o(i):o(i)};function d(){n.value.filter(({status:l})=>l==="ready").forEach(({raw:l})=>{var i;return l&&((i=e.value)==null?void 0:i.upload(l))})}return ne(()=>t.listType,l=>{l!=="picture-card"&&l!=="picture"||(n.value=n.value.map(i=>{const{raw:o,url:v}=i;if(!v&&o)try{i.url=URL.createObjectURL(o)}catch(_){t.onError(_,i,n.value)}return i}))}),ne(n,l=>{for(const i of l)i.uid||(i.uid=le()),i.status||(i.status="success")},{immediate:!0,deep:!0}),{uploadFiles:n,abort:u,clearFiles:r,handleError:p,handleProgress:y,handleStart:f,handleSuccess:h,handleRemove:g,submit:d}},Bs=D({name:"ElUpload"}),Is=D({...Bs,props:ps,setup(t,{expose:e}){const n=t,a=dt(),u=Z(),r=ae(),{abort:p,submit:y,clearFiles:h,uploadFiles:f,handleStart:g,handleError:d,handleRemove:l,handleSuccess:i,handleProgress:o}=Ds(n,r),v=C(()=>n.listType==="picture-card"),_=C(()=>({...n,fileList:f.value,onStart:g,onProgress:o,onSuccess:i,onError:d,onRemove:l}));return ct(()=>{f.value.forEach(({url:m})=>{m!=null&&m.startsWith("blob:")&&URL.revokeObjectURL(m)})}),pt(Me,{accept:ft(n,"accept")}),e({abort:p,submit:y,clearFiles:h,handleStart:g,handleRemove:l}),(m,R)=>(b(),P("div",null,[s(v)&&m.showFileList?(b(),O(Pe,{key:0,disabled:s(u),"list-type":m.listType,files:s(f),"handle-preview":m.onPreview,onRemove:s(l)},ye({append:k(()=>[S(ke,he({ref_key:"uploadRef",ref:r},s(_)),{default:k(()=>[s(a).trigger?F(m.$slots,"trigger",{key:0}):E("v-if",!0),!s(a).trigger&&s(a).default?F(m.$slots,"default",{key:1}):E("v-if",!0)]),_:3},16)]),_:2},[m.$slots.file?{name:"default",fn:k(({file:c})=>[F(m.$slots,"file",{file:c})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):E("v-if",!0),!s(v)||s(v)&&!m.showFileList?(b(),O(ke,he({key:1,ref_key:"uploadRef",ref:r},s(_)),{default:k(()=>[s(a).trigger?F(m.$slots,"trigger",{key:0}):E("v-if",!0),!s(a).trigger&&s(a).default?F(m.$slots,"default",{key:1}):E("v-if",!0)]),_:3},16)):E("v-if",!0),m.$slots.trigger?F(m.$slots,"default",{key:2}):E("v-if",!0),F(m.$slots,"tip"),!s(v)&&m.showFileList?(b(),O(Pe,{key:3,disabled:s(u),"list-type":m.listType,files:s(f),"handle-preview":m.onPreview,onRemove:s(l)},ye({_:2},[m.$slots.file?{name:"default",fn:k(({file:c})=>[F(m.$slots,"file",{file:c})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):E("v-if",!0)]))}});var Ms=W(Is,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const Ve=Ue(Ms);const Ns={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},qs=B("path",{fill:"currentColor",d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"},null,-1),Hs=[qs];function Vs(t,e){return b(),P("svg",Ns,Hs)}const je={name:"ep-plus",render:Vs},js=["src"],Gs=D({__name:"SingleUpload",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(t,{emit:e}){const a=mt(t,"modelValue",e);async function u(p){const{data:y}=await De(p.file);a.value=y.url}function r(p){return p.size>2*1048*1048?(Oe.warning("上传图片不能大于2M"),!1):!0}return(p,y)=>{const h=je,f=M,g=Ve;return b(),O(g,{modelValue:s(a),"onUpdate:modelValue":y[0]||(y[0]=d=>K(a)?a.value=d:null),class:"single-uploader","show-file-list":!1,"list-type":"picture-card","before-upload":r,"http-request":u},{default:k(()=>[s(a)?(b(),P("img",{key:0,referrerPolicy:"no-referrer",src:s(a),class:"single"},null,8,js)):(b(),O(f,{key:1,class:"single-uploader-icon"},{default:k(()=>[S(h)]),_:1}))]),_:1},8,["modelValue"])}}});const Ks=ht(Gs,[["__scopeId","data-v-600223ab"]]),Ws=["src"],zs=D({__name:"MultiUpload",props:{modelValue:{type:Array,default:[]},limit:{type:Number,default:10}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,a=q(""),u=q(!1),r=q([]);ne(()=>n.modelValue,g=>{const d=r.value.map(l=>l.url);d.length>0&&d.length===g.length&&d.every(l=>g.some(i=>i===l))&&g.every(l=>d.some(i=>i===l))||(r.value=g.map(l=>({url:l})))},{immediate:!0});async function p(g){const{data:d}=await De(g.file),l=r.value.findIndex(i=>i.uid==g.file.uid);r.value.splice(l,1,{name:d.name,url:d.url}),e("update:modelValue",r.value.map(i=>i.url))}function y(g){const d=g.url;d&&yt(d).then(()=>{e("update:modelValue",r.value.map(l=>l.url))})}function h(g){return g.size>2*1048*1048?(Oe.warning("上传图片不能大于2M"),!1):!0}const f=g=>{a.value=g.url,u.value=!0};return(g,d)=>{const l=je,i=Ve,o=_t;return b(),P(Ce,null,[S(i,{"file-list":s(r),"onUpdate:fileList":d[0]||(d[0]=v=>K(r)?r.value=v:null),"list-type":"picture-card","before-upload":h,"http-request":p,"on-remove":y,"on-preview":f,limit:n.limit},{default:k(()=>[S(l)]),_:1},8,["file-list","limit"]),S(o,{modelValue:s(u),"onUpdate:modelValue":d[1]||(d[1]=v=>K(u)?u.value=v:null)},{default:k(()=>[B("img",{referrerPolicy:"no-referrer","w-full":"",src:s(a),alt:"Preview Image"},null,8,Ws)]),_:1},8,["modelValue"])],64)}}}),xs={class:"app-container"},sa=D({__name:"upload",setup(t){const e=q("https://gitee.com/iotjh/Picture/raw/master/GitHub/Vue3/gourdBaby.gif"),n=q(["https://s2.loli.net/2023/05/24/yNsxFC8rLHMZQcK.jpg","https://s2.loli.net/2023/05/24/RuHFMwW4rG5lIqs.jpg","https://s2.loli.net/2023/05/24/ZPiGbcpR91WqInB.jpg","https://s2.loli.net/2023/05/24/e1bcnEq3MFdmlNL.jpg","https://s2.loli.net/2023/05/24/wZTSPj1yDQNcuhU.jpg"]);return(a,u)=>{const r=vt,p=gt;return b(),P("div",xs,[S(p,null,{default:k(()=>[S(r,{label:"单图上传"},{default:k(()=>[S(Ks,{modelValue:s(e),"onUpdate:modelValue":u[0]||(u[0]=y=>K(e)?e.value=y:null)},null,8,["modelValue"])]),_:1}),S(r,{label:"多图上传"},{default:k(()=>[S(zs,{modelValue:s(n),"onUpdate:modelValue":u[1]||(u[1]=y=>K(n)?n.value=y:null)},null,8,["modelValue"])]),_:1})]),_:1})])}}});export{sa as default};
