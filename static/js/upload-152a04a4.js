import{c as b,A as E,B as I,k as j,u as k,t as N}from"./element-plus-ac7cad14.js";import{o as _,c as h,a as P,d as w,O as x,P as c,u as m,W as u,k as v,r as g,w as S,F as $}from"./@vue-4065970f.js";import{u as B,d as q}from"./index-ace58b7b.js";import{p as H}from"./@vueuse-12d228e7.js";import{_ as C}from"./plugin-vueexport-helper-c27b6911.js";import"./lodash-es-7bbf0cf7.js";import"./async-validator-dee29e8b.js";import"./@element-plus-b45bf43b.js";import"./@ctrl-f8748455.js";import"./@sxzz-c75af06c.js";import"./index-e33fa83e.js";import"./pinia-e5e2710d.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-3b42d4fb.js";import"./axios-4a70c6fc.js";import"./vue-i18n-cc2aaeee.js";import"./@intlify-999e9484.js";import"./source-map-7d7e1c08.js";import"./vue-49bec2ef.js";import"./js-cookie-edb2da2a.js";import"./nprogress-941844a1.js";import"./vite-plugin-mock-8bbc2346.js";import"./mockjs-3c670f17.js";import"./path-to-regexp-36ea9d8d.js";const L={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},R=P("path",{fill:"currentColor",d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"},null,-1),z=[R];function G(f,s){return _(),h("svg",L,z)}const F={name:"ep-plus",render:G},W=["src"],Z=w({__name:"SingleUpload",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(f,{emit:s}){const n=H(f,"modelValue",s);async function a(p){const{data:r}=await B(p.file);n.value=r.url}function t(p){return p.size>2*1048*1048?(b.warning("上传图片不能大于2M"),!1):!0}return(p,r)=>{const V=F,y=E,l=I;return _(),x(l,{modelValue:m(n),"onUpdate:modelValue":r[0]||(r[0]=e=>v(n)?n.value=e:null),class:"single-uploader","show-file-list":!1,"list-type":"picture-card","before-upload":t,"http-request":a},{default:c(()=>[m(n)?(_(),h("img",{key:0,referrerPolicy:"no-referrer",src:m(n),class:"single"},null,8,W)):(_(),x(y,{key:1,class:"single-uploader-icon"},{default:c(()=>[u(V)]),_:1}))]),_:1},8,["modelValue"])}}});const A=C(Z,[["__scopeId","data-v-600223ab"]]),D=["src"],Q=w({__name:"MultiUpload",props:{modelValue:{type:Array,default:[]},limit:{type:Number,default:10}},emits:["update:modelValue"],setup(f,{emit:s}){const d=f,n=g(""),a=g(!1),t=g([]);S(()=>d.modelValue,l=>{const e=t.value.map(o=>o.url);e.length>0&&e.length===l.length&&e.every(o=>l.some(i=>i===o))&&l.every(o=>e.some(i=>i===o))||(t.value=l.map(o=>({url:o})))},{immediate:!0});async function p(l){const{data:e}=await B(l.file),o=t.value.findIndex(i=>i.uid==l.file.uid);t.value.splice(o,1,{name:e.name,url:e.url}),s("update:modelValue",t.value.map(i=>i.url))}function r(l){const e=l.url;e&&q(e).then(()=>{s("update:modelValue",t.value.map(o=>o.url))})}function V(l){return l.size>2*1048*1048?(b.warning("上传图片不能大于2M"),!1):!0}const y=l=>{n.value=l.url,a.value=!0};return(l,e)=>{const o=F,i=I,M=j;return _(),h($,null,[u(i,{"file-list":m(t),"onUpdate:fileList":e[0]||(e[0]=U=>v(t)?t.value=U:null),"list-type":"picture-card","before-upload":V,"http-request":p,"on-remove":r,"on-preview":y,limit:d.limit},{default:c(()=>[u(o)]),_:1},8,["file-list","limit"]),u(M,{modelValue:m(a),"onUpdate:modelValue":e[1]||(e[1]=U=>v(a)?a.value=U:null)},{default:c(()=>[P("img",{referrerPolicy:"no-referrer","w-full":"",src:m(n),alt:"Preview Image"},null,8,D)]),_:1},8,["modelValue"])],64)}}}),K={class:"app-container"},Ve=w({__name:"upload",setup(f){const s=g("https://gitee.com/iotjh/Picture/raw/master/GitHub/Vue3/gourdBaby.gif"),d=g(["https://s2.loli.net/2023/05/24/yNsxFC8rLHMZQcK.jpg","https://s2.loli.net/2023/05/24/RuHFMwW4rG5lIqs.jpg","https://s2.loli.net/2023/05/24/ZPiGbcpR91WqInB.jpg","https://s2.loli.net/2023/05/24/e1bcnEq3MFdmlNL.jpg","https://s2.loli.net/2023/05/24/wZTSPj1yDQNcuhU.jpg"]);return(n,a)=>{const t=k,p=N;return _(),h("div",K,[u(p,null,{default:c(()=>[u(t,{label:"单图上传"},{default:c(()=>[u(A,{modelValue:m(s),"onUpdate:modelValue":a[0]||(a[0]=r=>v(s)?s.value=r:null)},null,8,["modelValue"])]),_:1}),u(t,{label:"多图上传"},{default:c(()=>[u(Q,{modelValue:m(d),"onUpdate:modelValue":a[1]||(a[1]=r=>v(d)?d.value=r:null)},null,8,["modelValue"])]),_:1})]),_:1})])}}});export{Ve as default};
