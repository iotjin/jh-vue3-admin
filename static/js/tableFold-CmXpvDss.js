import{A as L,c as I,B as b,W as k,X as E,R as B}from"./element-plus-CS1bfuXs.js";import{d as R,_ as C,$ as D,k as T,w as V,o as n,c,W as o,P as e,U as N,V as r,u as d,F as W,ab as O,O as P,a as s,bm as U,bk as X}from"./@vue-DBL8Ibom.js";import{_ as $}from"./index-CN07mNdx.js";import"./lodash-es-Blijzk1b.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-BThtamsc.js";import"./dayjs-C6J0yRL_.js";import"./@intlify-CHY6szXs.js";import"./@sxzz-D9SI2xQl.js";import"./@element-plus-BmjHI8io.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./pinia-7g9vQp6f.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-fhvlCfPF.js";import"./crypto-js-CYDAzdEe.js";import"./axios-CCb-kr4I.js";import"./js-cookie-Cz0CWeBA.js";import"./vue-i18n-B8qYdFXi.js";import"./vue-rTnkxsfK.js";import"./vue-draggable-plus-BSvTyIk2.js";import"./nprogress-yi2QV7xY.js";import"./mockjs-DsSR4jwH.js";import"./vite-plugin-mock-CDJiH8Qs.js";import"./path-to-regexp-BzK_ZY7n.js";const _=l=>(U("data-v-eae30c73"),l=l(),X(),l),j=_(()=>s("div",{class:"header-text"},"Responses:",-1)),q=_(()=>s("div",{style:{height:"15px"}},null,-1)),z={class:"box-card"},G={style:{display:"flex"}},H={class:"header-text"},J={style:{flex:"1"}},K=R({__name:"tableFold",props:{foldList:{type:Array,default:()=>[]}},emits:["toggleShowAll"],setup(l,{emit:u}){const h=u,f=l,t=C({isShowAll:!1,newFoldList:[],isShowDialogImg:!1,previewImage:""}),{isShowAll:w,newFoldList:M,isShowDialogImg:Q,previewImage:Y}=D(t),g=T(()=>t.isShowAll?t.newFoldList:t.newFoldList.length>3?t.newFoldList.slice(0,3):t.newFoldList);V(()=>f.foldList,p=>{t.newFoldList=p},{immediate:!0});const S=()=>{t.isShowAll=!t.isShowAll,h("toggleShowAll",t.isShowAll)};return(p,Z)=>{const i=L,x=I,m=b,y=k,v=E,A=B;return n(),c("div",null,[o(A,null,{default:e(()=>[o(m,{style:{display:"flex","align-items":"center"}},{default:e(()=>[o(i,{span:6},{default:e(()=>[j]),_:1}),o(i,{span:8},{default:e(()=>[o(x,{type:"primary",onClick:S},{default:e(()=>[N(r(d(w)?"Fold Responses":"Show All Responses"),1)]),_:1})]),_:1})]),_:1}),q,(n(!0),c(W,null,O(d(g),(a,F)=>(n(),P(v,{key:F,style:{"max-width":"90%"}},{default:e(()=>[o(y,{timestamp:a.createDate,placement:"top"},{default:e(()=>[s("div",z,[o(m,null,{default:e(()=>[o(i,null,{default:e(()=>[s("div",G,[s("div",H,r(a.name)+" :",1),s("div",J,r(a.content),1)])]),_:2},1024)]),_:2},1024)])]),_:2},1032,["timestamp"])]),_:2},1024))),128))]),_:1})])}}}),Lt=$(K,[["__scopeId","data-v-eae30c73"]]);export{Lt as default};