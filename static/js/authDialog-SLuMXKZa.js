import{b as y,c as Z,Z as z,T as X,U as Y,d as ee,K as oe}from"./element-plus-Bdn4kiSG.js";import{m as te,S as ae,_ as le}from"./index-DFeBoV3U.js";import{r as se}from"./role-BabOENuR.js";import{I as ie}from"./@iconify-Q3rb5NkN.js";import{d as ne,r as ce,_ as de,$ as x,w as k,o as f,c as L,W as l,P as s,Q as re,a as r,V as _,u as a,l as C,U as p,O as T,T as pe}from"./@vue-DBL8Ibom.js";import"./lodash-es-Blijzk1b.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-BThtamsc.js";import"./dayjs-C6J0yRL_.js";import"./@intlify-CHY6szXs.js";import"./@sxzz-D9SI2xQl.js";import"./@element-plus-BmjHI8io.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./pinia-7g9vQp6f.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-fhvlCfPF.js";import"./crypto-js-CYDAzdEe.js";import"./axios-CCb-kr4I.js";import"./js-cookie-Cz0CWeBA.js";import"./vue-i18n-B8qYdFXi.js";import"./vue-rTnkxsfK.js";import"./vue-draggable-plus-BSvTyIk2.js";import"./nprogress-yi2QV7xY.js";import"./mockjs-DsSR4jwH.js";import"./vite-plugin-mock-CDJiH8Qs.js";import"./path-to-regexp-BzK_ZY7n.js";const me={class:"bs-dialog"},ue={style:{margin:"-10px 0px 20px"}},ge={style:{padding:"0 5px 15px"}},fe={class:"tree-body"},_e={class:"bs-dialog-footer"},he=ne({__name:"authDialog",props:{isShow:{type:Boolean,default:!1},dialogData:{type:Object,default:()=>({})}},emits:["update:isShow","closed","success"],setup(I,{emit:N}){const h=N,v=I,n=ce(),e=de({dialogTitle:"权限设置",isShowDialog:!1,dialogSubmitBtnLoading:!1,dialogLoading:!1,roleData:{},menuTreeData:[],menuIdList:[],defaultProps:{label:"title",children:"children"},isExpandAll:!1,isSelectAll:!1,activeName:"first"}),{dialogTitle:A,isShowDialog:m,dialogSubmitBtnLoading:E,dialogLoading:B,roleData:V}=x(e),{menuTreeData:O,menuIdList:R,defaultProps:J,isExpandAll:D,isSelectAll:b,activeName:S}=x(e),w=t=>t&&t.includes(":"),P=t=>t&&!w(t);k(()=>v.isShow,t=>{e.isShowDialog=t}),k(()=>e.isShowDialog,t=>{h("update:isShow",t)}),k(()=>v.dialogData,t=>{e.roleData=JSON.parse(JSON.stringify(t))});const K=()=>{M()},U=()=>{h("closed",{})},M=()=>{const t={roleId:e.roleData.id};e.dialogLoading=!0,te(t).then(o=>{e.dialogLoading=!1,o.code===2e4?(e.menuTreeData=o.data.menuTree,e.menuIdList=o.data.menuIds):y.warning(o.msg)}).catch(o=>{e.dialogLoading=!1,console.log(JSON.stringify(o))})},$=()=>{e.isExpandAll=!e.isExpandAll;const t=n.value.store._getAllNodes();for(var o=0;o<t.length;o++)t[o].expanded=e.isExpandAll},q=()=>{e.isSelectAll=!e.isSelectAll,e.isSelectAll?n.value.setCheckedNodes(e.menuTreeData):n.value.setCheckedNodes([])},F=()=>{H()},H=()=>{const t=e.roleData.id,o=n.value.getCheckedKeys(),c=n.value.getHalfCheckedKeys(),u={roleId:t,menuIds:o.concat(c)};console.log(JSON.stringify(u)),e.dialogSubmitBtnLoading=!0,se(u).then(d=>{e.dialogSubmitBtnLoading=!1,d.code===2e4?(y.success("角色设置权限成功!"),e.isShowDialog=!1,h("success",{})):y.warning(d.msg)}).catch(d=>{e.dialogSubmitBtnLoading=!1,console.log(JSON.stringify(d))})};return(t,o)=>{const c=Z,u=ae,d=z,j=X,G=Y,Q=ee,W=oe;return f(),L("div",null,[l(Q,{title:a(A),modelValue:a(m),"onUpdate:modelValue":o[3]||(o[3]=i=>C(m)?m.value=i:null),top:"8vh",width:"55%","close-on-click-modal":!1,onOpened:K,onClosed:U},{default:s(()=>[re((f(),L("div",me,[r("div",ue,"选中角色："+_(a(V).name),1),l(G,{modelValue:a(S),"onUpdate:modelValue":o[0]||(o[0]=i=>C(S)?S.value=i:null),type:"card"},{default:s(()=>[l(j,{label:"菜单权限",name:"first"},{default:s(()=>[r("div",ge,[l(c,{type:"primary",icon:a(D)?"i-ep-arrow-down":"i-ep-arrow-right",onClick:$},{default:s(()=>[p(_(a(D)?"全部收起":"全部展开"),1)]),_:1},8,["icon"]),l(c,{type:"primary",icon:a(b)?"i-ep-close":"i-ep-check",onClick:q},{default:s(()=>[p(_(a(b)?"全部取消":"全部选择"),1)]),_:1},8,["icon"])]),r("div",fe,[l(d,{ref_key:"treeRef",ref:n,data:a(O),"show-checkbox":"","check-on-click-node":!0,"node-key":"id","highlight-current":"","default-checked-keys":a(R),props:a(J)},{default:s(({node:i,data:g})=>[r("span",null,[w(g.icon)?(f(),T(a(ie),{key:0,icon:g.icon,class:"iconFont"},null,8,["icon"])):P(g.icon)?(f(),T(u,{key:1,"icon-class":g.icon,class:"iconFont"},null,8,["icon-class"])):pe("",!0),p(" "+_(i.label),1)])]),_:1},8,["data","default-checked-keys","props"])])]),_:1})]),_:1},8,["modelValue"]),r("div",_e,[l(c,{onClick:o[1]||(o[1]=i=>m.value=!1)},{default:s(()=>[p("取消")]),_:1}),l(c,{loading:a(E),type:"primary",onClick:o[2]||(o[2]=i=>F())},{default:s(()=>[p("保存")]),_:1},8,["loading"])])])),[[W,a(B)]])]),_:1},8,["title","modelValue"])])}}}),He=le(he,[["__scopeId","data-v-d1c14b2f"]]);export{He as default};
