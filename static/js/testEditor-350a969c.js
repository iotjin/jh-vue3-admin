import{T as C,E as y}from"./@wangeditor-79f2f802.js";import{u as E}from"./index-c503b9a5.js";import{w as U}from"./@vueuse-f39d50a6.js";import{d as p,s as b,r as n,G as w,o as u,c,X as d,u as e,l as f}from"./@vue-9ba90ccc.js";import{_ as B}from"./index-fed18894.js";import"./pinia-87603f94.js";import"./vue-demi-71ba0ef2.js";import"./element-plus-d9b7f19c.js";import"./lodash-es-d29772ce.js";import"./async-validator-dee29e8b.js";import"./dayjs-bff41acc.js";import"./@intlify-767c1c72.js";import"./source-map-7d7e1c08.js";import"./@element-plus-c398101b.js";import"./@ctrl-f8748455.js";import"./@sxzz-c75af06c.js";import"./escape-html-849d0975.js";import"./normalize-wheel-es-ed76fb12.js";import"./vue-router-c8173181.js";import"./crypto-js-49b96eff.js";import"./axios-4a70c6fc.js";import"./js-cookie-edb2da2a.js";import"./vue-i18n-1488b031.js";import"./vue-ef783175.js";import"./nprogress-84d8f06a.js";import"./mockjs-8d5feca7.js";import"./vite-plugin-mock-5220d95c.js";import"./path-to-regexp-36ea9d8d.js";const N={class:"editor-wrapper"},O=p({__name:"index",props:{modelValue:{type:[String],default:""}},emits:["update:modelValue"],setup(m,{emit:r}){const t=U(m,"modelValue",r),a=b(),s=n("default"),g=n({}),v=n({placeholder:"请输入内容...",MENU_CONF:{uploadImage:{async customUpload(o,l){E(o).then(i=>{const x=i.data.url;l(x)})}}}}),V=o=>{a.value=o};function h(o){t.value=o.getHtml()}return w(()=>{const o=a.value;o!=null&&o.destroy()}),(o,l)=>(u(),c("div",N,[d(e(C),{id:"toolbar-container",editor:e(a),"default-config":e(g),mode:e(s)},null,8,["editor","default-config","mode"]),d(e(y),{id:"editor-container",modelValue:e(t),"onUpdate:modelValue":l[0]||(l[0]=i=>f(t)?t.value=i:null),"default-config":e(v),mode:e(s),onOnChange:h,onOnCreated:V},null,8,["modelValue","default-config","mode"])]))}});const R=B(O,[["__scopeId","data-v-3e807a81"]]),$={class:"app-container"},no=p({__name:"testEditor",setup(m){const r=n("初始内容");return(_,t)=>(u(),c("div",$,[d(R,{modelValue:e(r),"onUpdate:modelValue":t[0]||(t[0]=a=>f(r)?r.value=a:null),style:{height:"calc(100vh - 180px)"}},null,8,["modelValue"])]))}});export{no as default};