import{c as p,h as te,u as oe,v as ae,H as le,I as se,t as ne,w as ie,A as de,x as re,k as ce,J as me}from"./element-plus-29f174c0.js";import{o as _,c as Y,a as d,d as pe,r as _e,$ as ue,a0 as V,w as K,i as ge,X as o,Q as l,W as fe,u as n,l as L,V as b,R as E,P as I,bh as he,bf as be}from"./@vue-7d0fc2b4.js";import{a as we}from"./role-19097c3a.js";import{a as De}from"./user-c8e1e299.js";import{_ as ve}from"./plugin-vueexport-helper-c27b6911.js";import"./lodash-es-d29772ce.js";import"./async-validator-dee29e8b.js";import"./@vueuse-d1e6df39.js";import"./dayjs-78f57161.js";import"./@intlify-999e9484.js";import"./source-map-7d7e1c08.js";import"./@element-plus-975622b8.js";import"./@ctrl-f8748455.js";import"./@sxzz-c75af06c.js";import"./escape-html-bdfaebd7.js";import"./normalize-wheel-es-ed76fb12.js";import"./index-e9cd6b19.js";import"./pinia-4649f5ad.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-98b533fa.js";import"./axios-4a70c6fc.js";import"./vue-i18n-625cf0a6.js";import"./vue-ff9293da.js";import"./js-cookie-edb2da2a.js";import"./nprogress-941844a1.js";import"./mockjs-3c670f17.js";import"./vite-plugin-mock-8bbc2346.js";import"./path-to-regexp-36ea9d8d.js";const Se={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Ke=d("path",{fill:"currentColor",d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512L340.864 831.872a30.592 30.592 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"},null,-1),Le=[Ke];function Ye(r,m){return _(),Y("svg",Se,Le)}const xe={name:"ep-arrow-right",render:Ye},Re={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Ce=d("path",{fill:"currentColor",d:"M609.408 149.376L277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0a30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688a29.12 29.12 0 0 0-41.728 0z"},null,-1),ye=[Ce];function Be(r,m){return _(),Y("svg",Re,ye)}const $e={name:"ep-arrow-left",render:Be},x=r=>(he("data-v-26a8b547"),r=r(),be(),r),ke={class:"bs-dialog input-width"},Ve={style:{margin:"-10px 0px 20px"}},Ee=x(()=>d("div",{class:"role-title"},"可分配角色",-1)),Ie={class:"role-search"},Ne={class:"role-center"},Oe=x(()=>d("br",null,null,-1)),Je=x(()=>d("div",{class:"role-title"},"已分配角色",-1)),Te={class:"role-search"},ze={slot:"footer",class:"bs-dialog-footer",style:{"padding-top":"30px"}},Ae=pe({__name:"assignRoleDialog",props:{isShow:{type:Boolean,default:!1},dialogData:{type:Object,default:()=>({})}},emits:["update:isShow","closed","success"],setup(r,{emit:m}){const R=r;_e();const e=ue({dialogTitle:"分配角色",isShowDialog:!1,dialogSubmitBtnLoading:!1,userData:{},tableHeight:400,isLoadingK:!1,nameK:"",tableDataK:[],selectedRowsK:[],isLoadingY:!1,nameY:"",tableDataY:[],selectedRowsY:[]}),{dialogTitle:N,isShowDialog:u,dialogSubmitBtnLoading:O}=V(e),{userData:J,tableHeight:C,isLoadingK:T,nameK:w,tableDataK:z,isLoadingY:A,nameY:D,tableDataY:M}=V(e);K(()=>R.isShow,a=>{e.isShowDialog=a}),K(()=>e.isShowDialog,a=>{m("update:isShow",a)}),K(()=>R.dialogData,a=>{e.userData=JSON.parse(JSON.stringify(a))}),ge(()=>{});const U=()=>{g("K"),g("Y")},H=()=>{m("closed",{})},g=a=>{var t={userId:e.userData.id,name:"",status:""};t.name=a==="K"?e.nameK:e.nameY,t.status=a==="K"?"0":"1",console.log(JSON.stringify(t)),v(!0,a),we(t).then(s=>{v(!1,a),s.code===2e4?a==="K"?e.tableDataK=s.data:e.tableDataY=s.data:p.warning(s.msg)}).catch(s=>{v(!1,a),console.log(JSON.stringify(s))})},v=(a,t)=>{t==="K"?e.isLoadingK=a:e.isLoadingY=a},q=a=>{e.selectedRowsK=a},F=a=>{e.selectedRowsY=a},j=()=>{if(e.selectedRowsY.length===0){p.warning("请选择需要移除的已分配角色！");return}e.tableDataK=e.selectedRowsY.concat(e.tableDataK),e.tableDataY=e.tableDataY.filter(a=>!e.selectedRowsY.some(t=>a.id===t.id))},P=()=>{if(e.selectedRowsK.length===0){p.warning("请选择需要添加的可分配角色！");return}e.tableDataY=e.selectedRowsK.concat(e.tableDataY),e.tableDataK=e.tableDataK.filter(a=>!e.selectedRowsK.some(t=>a.id===t.id))},Q=()=>{W()},W=()=>{const a=e.tableDataY.map(s=>s.id),t={id:e.userData.id,roleIds:a};console.log(JSON.stringify(t)),e.dialogSubmitBtnLoading=!0,De(t).then(s=>{e.dialogSubmitBtnLoading=!1,s.code===2e4?(p.success("分配角色成功!"),e.isShowDialog=!1,m("success",{})):p.warning(s.msg)}).catch(s=>{e.dialogSubmitBtnLoading=!1,console.log(JSON.stringify(s))})};return(a,t)=>{const s=te,f=oe,h=ae,c=le,y=se,B=ne,S=ie,X=$e,$=de,G=xe,Z=re,ee=ce,k=me;return _(),Y("div",null,[o(ee,{title:n(N),modelValue:n(u),"onUpdate:modelValue":t[8]||(t[8]=i=>L(u)?u.value=i:null),top:"8vh",width:"60%","close-on-click-modal":!1,onOpened:U,onClosed:H},{default:l(()=>[d("div",ke,[d("div",Ve,"选中用户："+fe(n(J).name),1),o(Z,{gutter:10,class:"dialog-body"},{default:l(()=>[o(S,{span:11},{default:l(()=>[Ee,o(B,{inline:!0,class:"role-left"},{default:l(()=>[d("div",Ie,[o(f,null,{default:l(()=>[o(s,{modelValue:n(w),"onUpdate:modelValue":t[0]||(t[0]=i=>L(w)?w.value=i:null),maxlength:"20",placeholder:"请输入角色名称",clearable:""},null,8,["modelValue"])]),_:1}),o(f,null,{default:l(()=>[o(h,{class:"bs-form-btn",type:"primary",onClick:t[1]||(t[1]=i=>g("K"))},{default:l(()=>[b("查询")]),_:1})]),_:1})]),E((_(),I(y,{data:n(z),"max-height":n(C),border:"",onSelectionChange:q},{default:l(()=>[o(c,{type:"selection"}),o(c,{prop:"name",label:"角色名称"}),o(c,{prop:"code",label:"角色编号"})]),_:1},8,["data","max-height"])),[[k,n(T)]])]),_:1})]),_:1}),o(S,{span:2},{default:l(()=>[d("div",Ne,[o($,{size:22},{default:l(()=>[o(X,{onClick:t[2]||(t[2]=i=>j())})]),_:1}),Oe,o($,{size:22},{default:l(()=>[o(G,{onClick:t[3]||(t[3]=i=>P())})]),_:1})])]),_:1}),o(S,{span:11},{default:l(()=>[Je,o(B,{inline:!0,class:"role-right"},{default:l(()=>[d("div",Te,[o(f,null,{default:l(()=>[o(s,{modelValue:n(D),"onUpdate:modelValue":t[4]||(t[4]=i=>L(D)?D.value=i:null),maxlength:"20",placeholder:"请输入角色名称",clearable:""},null,8,["modelValue"])]),_:1}),o(f,null,{default:l(()=>[o(h,{class:"bs-form-btn",type:"primary",onClick:t[5]||(t[5]=i=>g("Y"))},{default:l(()=>[b("查询")]),_:1})]),_:1})]),E((_(),I(y,{data:n(M),"max-height":n(C),border:"",onSelectionChange:F},{default:l(()=>[o(c,{type:"selection"}),o(c,{prop:"name",label:"角色名称"}),o(c,{prop:"code",label:"角色编号"})]),_:1},8,["data","max-height"])),[[k,n(A)]])]),_:1})]),_:1})]),_:1}),d("div",ze,[o(h,{onClick:t[6]||(t[6]=i=>u.value=!1)},{default:l(()=>[b("取消")]),_:1}),o(h,{loading:n(O),type:"primary",onClick:t[7]||(t[7]=i=>Q())},{default:l(()=>[b("保存")]),_:1},8,["loading"])])])]),_:1},8,["title","modelValue"])])}}});const ft=ve(Ae,[["__scopeId","data-v-26a8b547"]]);export{ft as default};
