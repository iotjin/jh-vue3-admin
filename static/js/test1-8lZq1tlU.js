import{o as y,j as x,c as V}from"./element-plus-BsPKl9cL.js";import{u as D}from"./vue-router-CufQNpwK.js";import{h as l,j as p}from"./index-DAJGaxl8.js";import{d as k,k as L,_ as B,i as C,o as E,c as N,a as e,V as m,u as r,W as i,P as u,U as c}from"./@vue-Cr7qNLMI.js";import"./lodash-es-Blijzk1b.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-C4lJNpQw.js";import"./dayjs-C6J0yRL_.js";import"./@intlify-CHY6szXs.js";import"./@element-plus-BRXcaAil.js";import"./@ctrl-r5W6hzzQ.js";import"./@sxzz-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./pinia-uj-hNnAT.js";import"./vue-demi-Dq6ymT-8.js";import"./crypto-js-CYDAzdEe.js";import"./axios-B4uVmeYG.js";import"./js-cookie-Cz0CWeBA.js";import"./vue-i18n-Dt-hUQlq.js";import"./vue-Dml5yltN.js";import"./nprogress-E-flP1tB.js";import"./mockjs-DOFpbtyb.js";import"./vite-plugin-mock-WFsnnzUG.js";import"./path-to-regexp-mDz3xsrU.js";const h=e("div",null,"test1和test2使用同一页面",-1),j=e("div",null,"test LocalStorage 本地存储",-1),w={style:{"margin-top":"10px"}},at=k({__name:"test1",setup(P){const d=D(),_=L(()=>d.name),t=B({input:"",localData:""});C(()=>{l("testLocalStorage",{testKey:1234});const a=p("testLocalStorage");console.log(a),t.localData=a});function g(a){l("testLocalStorage",a)}function f(){t.localData=p("testLocalStorage")}return(a,o)=>{const v=y,S=x,s=V;return E(),N("div",null,[h,e("div",null,m(r(_)),1),i(v),j,e("div",null,[i(S,{modelValue:r(t).input,"onUpdate:modelValue":o[0]||(o[0]=n=>r(t).input=n),style:{width:"240px"},placeholder:"Please input"},null,8,["modelValue"]),i(s,{type:"primary",onClick:o[1]||(o[1]=n=>g(r(t).input))},{default:u(()=>[c("setStorage")]),_:1})]),e("div",w,[i(s,{type:"primary",onClick:o[2]||(o[2]=n=>f())},{default:u(()=>[c("getStorage")]),_:1}),e("div",null,m(r(t).localData),1)])])}}});export{at as default};
