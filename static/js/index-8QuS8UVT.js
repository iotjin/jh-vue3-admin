import{b as R,a as oe,k as le,w as ae,c as ie,v as se,I as ne,j as de,g as re,h as ce,i as pe,J as me,K as ue}from"./element-plus-CS1bfuXs.js";import{_ as ge}from"./index-BVxL4qyA.js";import{d as _e,r as fe,_ as V,$ as A,f as be,an as he,o as _,c as we,W as l,P as i,u as a,af as P,U as m,a as d,Q as c,O as b,V as x,X as ye,l as B}from"./@vue-DBL8Ibom.js";import{a as Se,d as De}from"./role-ByVDFUse.js";import{_ as ke}from"./addDialog.vuevuetypescriptsetuptruelang-Dsr1rXCq.js";import Ce from"./authDialog-S-0OQJaU.js";import"./lodash-es-Blijzk1b.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-BThtamsc.js";import"./dayjs-C6J0yRL_.js";import"./@intlify-CHY6szXs.js";import"./@sxzz-D9SI2xQl.js";import"./@element-plus-BmjHI8io.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./index-BSyJ-IJQ.js";import"./pinia-7g9vQp6f.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-fhvlCfPF.js";import"./crypto-js-CYDAzdEe.js";import"./axios-CCb-kr4I.js";import"./js-cookie-Cz0CWeBA.js";import"./vue-i18n-B8qYdFXi.js";import"./vue-rTnkxsfK.js";import"./vue-draggable-plus-BSvTyIk2.js";import"./nprogress-yi2QV7xY.js";import"./mockjs-DsSR4jwH.js";import"./vite-plugin-mock-CDJiH8Qs.js";import"./path-to-regexp-BzK_ZY7n.js";import"./@iconify-Q3rb5NkN.js";const ve={class:"bs-page-body"},Re=d("span",{class:"bs-form-label",style:{width:"120px"}},[d("span",{class:"icon"},"角色名称:")],-1),xe=d("span",{class:"bs-form-label",style:{width:"120px"}},[d("span",{class:"icon"},"角色编码:")],-1),Ne={class:"bs-page-table"},Ee={class:"bs-table-btns"},Te=["onClick"],Je={style:{color:"#00a0e9","text-decoration":"underline"}},Oe={class:"bs-tooltip-text"},Le=d("span",{style:{"padding-left":"10px"}},null,-1),Ve=d("i",{class:"i-ep-arrow-down el-icon--right"},null,-1),Ae=d("i",{class:"i-ep-setting"},null,-1),ut=_e({__name:"index",setup(Pe){const N=fe(),n=V({tableTotal:0,tableLoading:!1,tableData:[],queryParams:{page:1,limit:10,name:"",code:""},selectedRows:[]}),{tableTotal:E,tableLoading:F,tableData:U,queryParams:p,selectedRows:y}=A(n),s=V({isShowDialog:!1,dialogType:"add",dialogFormData:{},isShowDialogAuthRole:!1,authRoleData:{}}),{isShowDialog:D,dialogType:$,dialogFormData:q,isShowDialogAuthRole:k,authRoleData:I}=A(s);be(()=>{h()});const h=()=>{var t=JSON.parse(JSON.stringify(n.queryParams));console.log(JSON.stringify(t)),n.tableLoading=!0,Se(t).then(e=>{n.tableLoading=!1,e.code===2e4?(n.tableData=e.data,n.tableTotal=e.total):R.warning(e.msg)}).catch(e=>{n.tableLoading=!1,console.log(JSON.stringify(e))})},C=()=>{n.queryParams.page=1,h()},S=t=>!t.code.toLowerCase().includes("admin"),K=t=>{n.selectedRows=t},M=()=>{s.dialogType="add",s.dialogFormData={},s.isShowDialog=!0},T=t=>{const e=JSON.parse(JSON.stringify(t&&t.id?t:n.selectedRows[0]));s.dialogType="edit",s.dialogFormData=e,s.isShowDialog=!0},z=t=>{const e=JSON.parse(JSON.stringify(t&&t.id?t:n.selectedRows[0]));s.dialogType="look",s.dialogFormData=e,s.isShowDialog=!0},J=t=>{var e="";t&&t.id?e=t.name:e=n.selectedRows.map(u=>u.name).join(","),oe.confirm(`确定要删除角色 ${e} ，此操作将永久删除, 是否继续?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{var u={ids:[]};if(t&&t.id)u.ids=[t.id];else{const w=n.selectedRows.map(r=>r.id);u.ids=w}j(u)})},j=t=>{console.log(JSON.stringify(t)),De(t).then(e=>{e.code===2e4?(R.success("删除成功!"),h()):R.warning(e.msg)})},O=t=>{const e=JSON.parse(JSON.stringify(t&&t.id?t:n.selectedRows[0]));s.authRoleData=e,s.isShowDialogAuthRole=!0},Q=t=>{s.dialogType="look",s.dialogFormData=JSON.parse(JSON.stringify(t)),s.isShowDialog=!0},L=()=>{N.value.clearSelection()};return(t,e)=>{const u=le,w=ae,r=ie,W=se,f=ne,X=de,G=re,H=ce,Y=pe,Z=me,ee=ge,g=he("hasPerm"),te=ue;return _(),we("div",ve,[l(W,{inline:!0,model:a(p),class:"bs-form-search mt10"},{default:i(()=>[l(w,null,{default:i(()=>[Re,l(u,{modelValue:a(p).name,"onUpdate:modelValue":e[0]||(e[0]=o=>a(p).name=o),maxlength:"20",placeholder:"请输入角色名称",clearable:"",onKeyup:P(C,["enter","native"])},null,8,["modelValue"])]),_:1}),l(w,null,{default:i(()=>[xe,l(u,{modelValue:a(p).code,"onUpdate:modelValue":e[1]||(e[1]=o=>a(p).code=o),maxlength:"20",placeholder:"请输入角色编码",clearable:"",onKeyup:P(C,["enter","native"])},null,8,["modelValue"])]),_:1}),l(w,null,{default:i(()=>[l(r,{class:"bs-form-btn",type:"primary",onClick:C},{default:i(()=>[m("查询")]),_:1})]),_:1})]),_:1},8,["model"]),d("div",Ne,[d("div",Ee,[c((_(),b(r,{type:"primary",icon:"i-ep-plus",onClick:M},{default:i(()=>[m(" 新增 ")]),_:1})),[[g,["role-add"]]]),c((_(),b(r,{type:"primary",icon:"i-ep-edit",disabled:a(y).length!==1,onClick:T},{default:i(()=>[m(" 编辑 ")]),_:1},8,["disabled"])),[[g,["role-edit"]]]),c((_(),b(r,{type:"primary",icon:"i-ep-search",disabled:a(y).length!==1,onClick:z},{default:i(()=>[m(" 查看 ")]),_:1},8,["disabled"])),[[g,["role-look"]]]),c((_(),b(r,{type:"danger",icon:"i-ep-delete",disabled:a(y).length==0,onClick:J},{default:i(()=>[m(" 删除 ")]),_:1},8,["disabled"])),[[g,["role-delete"]]]),c((_(),b(r,{type:"warning",icon:"i-ep-setting",disabled:a(y).length!==1,onClick:O},{default:i(()=>[m(" 权限配置 ")]),_:1},8,["disabled"])),[[g,["role-setting"]]])]),c((_(),b(Z,{ref_key:"tableRef",ref:N,class:"bs-table",data:a(U),stripe:!0,"header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"},onSelectionChange:K},{default:i(()=>[l(f,{prop:"number",type:"index",label:"序号","min-width":"60"}),l(f,{type:"selection",width:"55",selectable:S}),l(f,{label:"角色名称",width:""},{default:i(o=>[d("span",{onClick:v=>Q(o.row)},[d("a",Je,x(o.row.name),1)],8,Te)]),_:1}),l(f,{prop:"code",label:"角色编码",width:""}),l(f,{label:"是否内置"},{default:i(o=>[m(x(o.row.builtin==="0"?"否":"是"),1)]),_:1}),l(f,{label:"备注","min-width":"100"},{default:i(o=>[l(X,{"visible-arrow":!1,effect:"light",content:o.row.notes,placement:"bottom"},{default:i(()=>[d("span",Oe,x(o.row.notes),1)]),_:2},1032,["content"])]),_:1}),l(f,{fixed:"right",label:"操作",width:"220"},{default:i(o=>[c(l(r,{size:"small",icon:"i-ep-edit",disabled:!S(o.row),onClick:v=>T(o.row)},null,8,["disabled","onClick"]),[[g,["role-edit"]]]),c(l(r,{size:"small",icon:"i-ep-delete",type:"danger",disabled:!S(o.row),onClick:v=>J(o.row)},null,8,["disabled","onClick"]),[[g,["role-delete"]]]),Le,l(Y,null,{dropdown:i(()=>[c((_(),b(H,null,{default:i(()=>[l(G,{onClick:v=>O(o.row)},{default:i(()=>[Ae,m("权限配置")]),_:2},1032,["onClick"])]),_:2},1024)),[[g,["role-setting"]]])]),default:i(()=>[l(r,{size:"small",disabled:!S(o.row)},{default:i(()=>[m(" 更多 "),Ve]),_:2},1032,["disabled"])]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[te,a(F)]]),c(l(ee,{total:a(E),page:a(p).page,"onUpdate:page":e[2]||(e[2]=o=>a(p).page=o),limit:a(p).limit,"onUpdate:limit":e[3]||(e[3]=o=>a(p).limit=o),onPagination:h},null,8,["total","page","limit"]),[[ye,a(E)>0]])]),l(ke,{"dialog-type":a($),"is-show":a(D),"onUpdate:isShow":e[4]||(e[4]=o=>B(D)?D.value=o:null),"dialog-data":a(q),onSuccess:h,onClosed:L},null,8,["dialog-type","is-show","dialog-data"]),l(Ce,{"is-show":a(k),"onUpdate:isShow":e[5]||(e[5]=o=>B(k)?k.value=o:null),"dialog-data":a(I),onSuccess:h,onClosed:L},null,8,["is-show","dialog-data"])])}}});export{ut as default};