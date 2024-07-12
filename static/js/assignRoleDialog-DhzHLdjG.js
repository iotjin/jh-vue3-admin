import{b as m,j as oe,w as ae,c as le,L as se,M as ne,v as ie,x as de,q as re,y as ce,d as me,N as pe}from"./element-plus-BsPKl9cL.js";import{o as p,c as x,a as d,d as ue,r as _e,_ as ge,$ as E,w as L,i as fe,W as o,P as l,V as he,u as n,l as Y,U as h,Q as I,O as N,bm as be,bk as we}from"./@vue-Cr7qNLMI.js";import{g as De}from"./role-YSLs6UZ9.js";import{a as ve}from"./user-BfoaJh4f.js";import{_ as Se}from"./index-DAJGaxl8.js";import"./lodash-es-Blijzk1b.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-C4lJNpQw.js";import"./dayjs-C6J0yRL_.js";import"./@intlify-CHY6szXs.js";import"./@element-plus-BRXcaAil.js";import"./@ctrl-r5W6hzzQ.js";import"./@sxzz-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./pinia-uj-hNnAT.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-CufQNpwK.js";import"./crypto-js-CYDAzdEe.js";import"./axios-B4uVmeYG.js";import"./js-cookie-Cz0CWeBA.js";import"./vue-i18n-Dt-hUQlq.js";import"./vue-Dml5yltN.js";import"./nprogress-E-flP1tB.js";import"./mockjs-DOFpbtyb.js";import"./vite-plugin-mock-WFsnnzUG.js";import"./path-to-regexp-mDz3xsrU.js";const Ke={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Le=d("path",{fill:"currentColor",d:"M340.864 149.312a30.59 30.59 0 0 0 0 42.752L652.736 512L340.864 831.872a30.59 30.59 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"},null,-1),Ye=[Le];function xe(r,b){return p(),x("svg",Ke,[...Ye])}const Ce={name:"ep-arrow-right",render:xe},Re={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},ye=d("path",{fill:"currentColor",d:"M609.408 149.376L277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0a30.59 30.59 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.59 30.59 0 0 0 0-42.688a29.12 29.12 0 0 0-41.728 0"},null,-1),Be=[ye];function $e(r,b){return p(),x("svg",Re,[...Be])}const ke={name:"ep-arrow-left",render:$e},C=r=>(be("data-v-e43ba289"),r=r(),we(),r),Ve={class:"bs-dialog input-width"},Ee={style:{margin:"-10px 0px 20px"}},Ie=C(()=>d("div",{class:"role-title"},"可分配角色",-1)),Ne={class:"role-search"},Oe={class:"role-center"},Je=C(()=>d("br",null,null,-1)),Me=C(()=>d("div",{class:"role-title"},"已分配角色",-1)),Te={class:"role-search"},Ue={class:"bs-dialog-footer",style:{"padding-top":"30px"}},qe=ue({__name:"assignRoleDialog",props:{isShow:{type:Boolean,default:!1},dialogData:{type:Object,default:()=>({})}},emits:["update:isShow","closed","success"],setup(r,{emit:b}){const w=b,R=r;_e();const e=ge({dialogTitle:"分配角色",isShowDialog:!1,dialogSubmitBtnLoading:!1,userData:{},tableHeight:400,isLoadingK:!1,nameK:"",tableDataK:[],selectedRowsK:[],isLoadingY:!1,nameY:"",tableDataY:[],selectedRowsY:[]}),{dialogTitle:O,isShowDialog:u,dialogSubmitBtnLoading:J}=E(e),{userData:M,tableHeight:y,isLoadingK:T,nameK:D,tableDataK:U,isLoadingY:q,nameY:v,tableDataY:z}=E(e);L(()=>R.isShow,a=>{e.isShowDialog=a}),L(()=>e.isShowDialog,a=>{w("update:isShow",a)}),L(()=>R.dialogData,a=>{e.userData=JSON.parse(JSON.stringify(a))}),fe(()=>{});const A=()=>{_("K"),_("Y")},j=()=>{w("closed",{})},_=a=>{var t={userId:e.userData.id,name:"",status:""};t.name=a==="K"?e.nameK:e.nameY,t.status=a==="K"?"0":"1",console.log(JSON.stringify(t)),S(!0,a),De(t).then(s=>{S(!1,a),s.code===2e4?a==="K"?e.tableDataK=s.data:e.tableDataY=s.data:m.warning(s.msg)}).catch(s=>{S(!1,a),console.log(JSON.stringify(s))})},S=(a,t)=>{t==="K"?e.isLoadingK=a:e.isLoadingY=a},F=a=>{e.selectedRowsK=a},H=a=>{e.selectedRowsY=a},P=()=>{if(e.selectedRowsY.length===0){m.warning("请选择需要移除的已分配角色！");return}e.tableDataK=e.selectedRowsY.concat(e.tableDataK),e.tableDataY=e.tableDataY.filter(a=>!e.selectedRowsY.some(t=>a.id===t.id))},Q=()=>{if(e.selectedRowsK.length===0){m.warning("请选择需要添加的可分配角色！");return}e.tableDataY=e.selectedRowsK.concat(e.tableDataY),e.tableDataK=e.tableDataK.filter(a=>!e.selectedRowsK.some(t=>a.id===t.id))},W=()=>{G()},G=()=>{const a=e.tableDataY.map(s=>s.id),t={id:e.userData.id,roleIds:a};console.log(JSON.stringify(t)),e.dialogSubmitBtnLoading=!0,ve(t).then(s=>{e.dialogSubmitBtnLoading=!1,s.code===2e4?(m.success("分配角色成功!"),e.isShowDialog=!1,w("success",{})):m.warning(s.msg)}).catch(s=>{e.dialogSubmitBtnLoading=!1,console.log(JSON.stringify(s))})};return(a,t)=>{const s=oe,g=ae,f=le,c=se,B=ne,$=ie,K=de,X=ke,k=re,Z=Ce,ee=ce,te=me,V=pe;return p(),x("div",null,[o(te,{title:n(O),modelValue:n(u),"onUpdate:modelValue":t[8]||(t[8]=i=>Y(u)?u.value=i:null),top:"8vh",width:"60%","close-on-click-modal":!1,onOpened:A,onClosed:j},{default:l(()=>[d("div",Ve,[d("div",Ee,"选中用户："+he(n(M).name),1),o(ee,{gutter:10,class:"dialog-body"},{default:l(()=>[o(K,{span:11},{default:l(()=>[Ie,o($,{inline:!0,class:"role-left"},{default:l(()=>[d("div",Ne,[o(g,null,{default:l(()=>[o(s,{modelValue:n(D),"onUpdate:modelValue":t[0]||(t[0]=i=>Y(D)?D.value=i:null),maxlength:"20",placeholder:"请输入角色名称",clearable:""},null,8,["modelValue"])]),_:1}),o(g,null,{default:l(()=>[o(f,{class:"bs-form-btn",type:"primary",onClick:t[1]||(t[1]=i=>_("K"))},{default:l(()=>[h("查询")]),_:1})]),_:1})]),I((p(),N(B,{data:n(U),"max-height":n(y),border:"",onSelectionChange:F},{default:l(()=>[o(c,{type:"selection"}),o(c,{prop:"name",label:"角色名称"}),o(c,{prop:"code",label:"角色编号"})]),_:1},8,["data","max-height"])),[[V,n(T)]])]),_:1})]),_:1}),o(K,{span:2},{default:l(()=>[d("div",Oe,[o(k,{size:22},{default:l(()=>[o(X,{onClick:t[2]||(t[2]=i=>P())})]),_:1}),Je,o(k,{size:22},{default:l(()=>[o(Z,{onClick:t[3]||(t[3]=i=>Q())})]),_:1})])]),_:1}),o(K,{span:11},{default:l(()=>[Me,o($,{inline:!0,class:"role-right"},{default:l(()=>[d("div",Te,[o(g,null,{default:l(()=>[o(s,{modelValue:n(v),"onUpdate:modelValue":t[4]||(t[4]=i=>Y(v)?v.value=i:null),maxlength:"20",placeholder:"请输入角色名称",clearable:""},null,8,["modelValue"])]),_:1}),o(g,null,{default:l(()=>[o(f,{class:"bs-form-btn",type:"primary",onClick:t[5]||(t[5]=i=>_("Y"))},{default:l(()=>[h("查询")]),_:1})]),_:1})]),I((p(),N(B,{data:n(z),"max-height":n(y),border:"",onSelectionChange:H},{default:l(()=>[o(c,{type:"selection"}),o(c,{prop:"name",label:"角色名称"}),o(c,{prop:"code",label:"角色编号"})]),_:1},8,["data","max-height"])),[[V,n(q)]])]),_:1})]),_:1})]),_:1}),d("div",Ue,[o(f,{onClick:t[6]||(t[6]=i=>u.value=!1)},{default:l(()=>[h("取消")]),_:1}),o(f,{loading:n(J),type:"primary",onClick:t[7]||(t[7]=i=>W())},{default:l(()=>[h("保存")]),_:1},8,["loading"])])])]),_:1},8,["title","modelValue"])])}}}),gt=Se(qe,[["__scopeId","data-v-e43ba289"]]);export{gt as default};
