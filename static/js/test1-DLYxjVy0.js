import{p as y,k,c as x}from"./element-plus-Bdn4kiSG.js";import{u as V}from"./vue-router-fhvlCfPF.js";import{k as s,l as p}from"./index-DFeBoV3U.js";import{d as D,k as L,_ as B,f as C,o as E,c as N,a as e,V as m,u as r,W as i,P as u,U as c}from"./@vue-DBL8Ibom.js";import"./lodash-es-Blijzk1b.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-BThtamsc.js";import"./dayjs-C6J0yRL_.js";import"./@intlify-CHY6szXs.js";import"./@sxzz-D9SI2xQl.js";import"./@element-plus-BmjHI8io.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./pinia-7g9vQp6f.js";import"./vue-demi-Dq6ymT-8.js";import"./crypto-js-CYDAzdEe.js";import"./axios-CCb-kr4I.js";import"./js-cookie-Cz0CWeBA.js";import"./vue-i18n-B8qYdFXi.js";import"./vue-rTnkxsfK.js";import"./vue-draggable-plus-BSvTyIk2.js";import"./nprogress-yi2QV7xY.js";import"./mockjs-DsSR4jwH.js";import"./vite-plugin-mock-CDJiH8Qs.js";import"./path-to-regexp-BzK_ZY7n.js";const w=e("div",null,"test1和test2使用同一页面",-1),P=e("div",null,"test LocalStorage 本地存储",-1),U={style:{"margin-top":"10px"}},rt=D({__name:"test1",setup($){const d=V(),_=L(()=>d.name),t=B({input:"",localData:""});C(()=>{s("testLocalStorage",{testKey:1234});const a=p("testLocalStorage");console.log(a),t.localData=a});function g(a){s("testLocalStorage",a)}function f(){t.localData=p("testLocalStorage")}return(a,o)=>{const v=y,S=k,l=x;return E(),N("div",null,[w,e("div",null,m(r(_)),1),i(v),P,e("div",null,[i(S,{modelValue:r(t).input,"onUpdate:modelValue":o[0]||(o[0]=n=>r(t).input=n),style:{width:"240px"},placeholder:"Please input"},null,8,["modelValue"]),i(l,{type:"primary",onClick:o[1]||(o[1]=n=>g(r(t).input))},{default:u(()=>[c("setStorage")]),_:1})]),e("div",U,[i(l,{type:"primary",onClick:o[2]||(o[2]=n=>f())},{default:u(()=>[c("getStorage")]),_:1}),e("div",null,m(r(t).localData),1)])])}}});export{rt as default};
