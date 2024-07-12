import{b as y,c as Y}from"./element-plus-BsPKl9cL.js";import{d as D,r as M,i as F,o as T,c as U,a as v,W as d,P as f,U as h,a4 as R,u as S,T as N,bm as V,bk as A}from"./@vue-Cr7qNLMI.js";import{u as P}from"./index-CAhRKFtL.js";import{_ as W}from"./index-DAJGaxl8.js";import"./lodash-es-Blijzk1b.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-C4lJNpQw.js";import"./dayjs-C6J0yRL_.js";import"./@intlify-CHY6szXs.js";import"./@element-plus-BRXcaAil.js";import"./@ctrl-r5W6hzzQ.js";import"./@sxzz-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./pinia-uj-hNnAT.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-CufQNpwK.js";import"./crypto-js-CYDAzdEe.js";import"./axios-B4uVmeYG.js";import"./js-cookie-Cz0CWeBA.js";import"./vue-i18n-Dt-hUQlq.js";import"./vue-Dml5yltN.js";import"./nprogress-E-flP1tB.js";import"./mockjs-DOFpbtyb.js";import"./vite-plugin-mock-WFsnnzUG.js";import"./path-to-regexp-mDz3xsrU.js";const O=i=>(V("data-v-b0010baf"),i=i(),A(),i),j={class:"canvas-dom"},q=O(()=>v("h3",null,"基于canvas实现的签名组件",-1)),x=["src"],z=D({__name:"signature",setup(i){const l=M(""),a=M();let p,c=!1;const _=t=>{let e;if(t.offsetX){const{offsetX:o,offsetY:s}=t;e=[o,s]}else{const{top:o,left:s}=a.value.getBoundingClientRect(),n=t.touches[0].clientX-s,r=t.touches[0].clientY-o;e=[n,r]}return e};let u=0,m=0;const g=t=>{[u,m]=_(t),c=!0},w=t=>{if(c){const[e,o]=_(t);L(u,m,e,o,p),u=e,m=o}},b=()=>{c&&(c=!1)};F(()=>{p=a.value.getContext("2d")});const B=async()=>{if(C(a.value)){y({type:"warning",message:"当前签名文件为空"});return}const t=I(a.value.toDataURL(),"签名.png");if(!t)return;const{data:e}=await P(t);k(),l.value=e.url},k=()=>{p.clearRect(0,0,a.value.width,a.value.height)},C=t=>{const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.toDataURL()==e.toDataURL()},X=()=>{if(C(a.value)){y({type:"warning",message:"当前签名文件为空"});return}const t=document.createElement("a");t.href=a.value.toDataURL(),t.download="签名";const e=new MouseEvent("click");t.dispatchEvent(e)},I=(t,e)=>{const o=t.split(",");if(!o.length)return;const s=o[0].match(/:(.*?);/);if(s&&!s.length){const n=atob(o[1]);let r=n.length;const E=new Uint8Array(r);for(;r--;)E[r]=n.charCodeAt(r);return new File([E],e,{type:s[0]})}};function L(t,e,o,s,n){n.beginPath(),n.globalAlpha=1,n.lineWidth=2,n.strokeStyle="#000",n.moveTo(t,e),n.lineTo(o,s),n.closePath(),n.stroke()}return(t,e)=>{const o=Y;return T(),U("div",j,[q,v("header",null,[d(o,{type:"primary",onClick:X},{default:f(()=>[h("保存为图片")]),_:1}),d(o,{onClick:B},{default:f(()=>[h(" 保存到后端 ")]),_:1}),d(o,{onClick:k},{default:f(()=>[h(" 清空签名 ")]),_:1})]),v("canvas",{ref_key:"canvas",ref:a,height:"200",width:"500",onMousedown:g,onMousemove:R(w,["stop","prevent"]),onMouseup:b,onTouchstart:g,onTouchmove:R(w,["stop","prevent"]),onTouchend:b},null,544),S(l)?(T(),U("img",{key:0,src:S(l),alt:"签名"},null,8,x)):N("",!0)])}}}),gt=W(z,[["__scopeId","data-v-b0010baf"]]);export{gt as default};
