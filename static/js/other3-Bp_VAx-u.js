import{L as B,Y as U,c as E}from"./element-plus-CS1bfuXs.js";import{d as S,_ as A,$ as G,o as i,c as m,F as _,ab as f,W as r,P as u,U as C,V as I,a as L,u as b,l as g}from"./@vue-DBL8Ibom.js";import{_ as w}from"./index-BSyJ-IJQ.js";import"./lodash-es-Blijzk1b.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-BThtamsc.js";import"./dayjs-C6J0yRL_.js";import"./@intlify-CHY6szXs.js";import"./@sxzz-D9SI2xQl.js";import"./@element-plus-BmjHI8io.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./pinia-7g9vQp6f.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-fhvlCfPF.js";import"./crypto-js-CYDAzdEe.js";import"./axios-CCb-kr4I.js";import"./js-cookie-Cz0CWeBA.js";import"./vue-i18n-B8qYdFXi.js";import"./vue-rTnkxsfK.js";import"./vue-draggable-plus-BSvTyIk2.js";import"./nprogress-yi2QV7xY.js";import"./mockjs-DsSR4jwH.js";import"./vite-plugin-mock-CDJiH8Qs.js";import"./path-to-regexp-BzK_ZY7n.js";const F={class:"box-card"},R={style:{"margin-top":"20px"}},D=S({__name:"other3",setup(J){const s=A({groupList:[{groupName:"BB",selected:!1,itemList:[{label:"test name1",value:"11"},{label:"test name2",value:"22"},{label:"test name3",value:"33"},{label:"test name4",value:"44"},{label:"test name5",value:"55"}]},{groupName:"AA",selected:!1,itemList:[{label:"test name6",value:"66"},{label:"test name7",value:"77"},{label:"test name8",value:"88"},{label:"test name9",value:"99"},{label:"test name10",value:"100"}]}],selectedList:[]}),{groupList:V,selectedList:d}=G(s);function k(n,l){l?s.selectedList=[...new Set([...s.selectedList,...n.itemList.map(t=>t.value)])]:s.selectedList=s.selectedList.filter(t=>!n.itemList.map(o=>o.value).includes(t))}function x(n){const l=n.itemList||[],t=l.filter(o=>s.selectedList.includes(o.value));return t.length>0&&t.length<l.length}function h(n,l,t){n.selected=n.itemList.every(o=>s.selectedList.includes(o.value))}function y(){console.log("selectedList",JSON.stringify(s.selectedList))}return(n,l)=>{const t=B,o=U,N=E;return i(),m("div",null,[(i(!0),m(_,null,f(b(V),(a,c)=>(i(),m("div",{key:a.groupName+c},[r(t,{modelValue:a.selected,"onUpdate:modelValue":e=>a.selected=e,indeterminate:x(a),onChange:e=>k(a,e)},{default:u(()=>[C(I(a.groupName),1)]),_:2},1032,["modelValue","onUpdate:modelValue","indeterminate","onChange"]),L("div",null,[r(o,{modelValue:b(d),"onUpdate:modelValue":l[0]||(l[0]=e=>g(d)?d.value=e:null)},{default:u(()=>[(i(!0),m(_,null,f(a.itemList,(e,p)=>(i(),m("div",{key:e.value+p,style:{"padding-left":"20px"}},[r(t,{label:e.label,value:e.value,onChange:v=>h(a,c,v)},null,8,["label","value","onChange"])]))),128))]),_:2},1032,["modelValue"])]),L("div",F,[r(o,{modelValue:b(d),"onUpdate:modelValue":l[1]||(l[1]=e=>g(d)?d.value=e:null)},{default:u(()=>[(i(!0),m(_,null,f(a.itemList,(e,p)=>(i(),m("span",{key:e.value+p,style:{"padding-left":"20px"}},[r(t,{label:e.label,value:e.value,onChange:v=>h(a,c,v)},null,8,["label","value","onChange"])]))),128))]),_:2},1032,["modelValue"])])]))),128)),L("div",R,[r(N,{type:"primary",onClick:y},{default:u(()=>[C("获取选中的值")]),_:1})])])}}}),re=w(D,[["__scopeId","data-v-0ae868dd"]]);export{re as default};
