import{I as f,c as u,J as y}from"./element-plus-Bdn4kiSG.js";import{d as h,r as w,_ as x,$ as N,f as g,o as E,c as C,W as a,P as e,U as m,u as k}from"./@vue-DBL8Ibom.js";import{_ as T}from"./index-DFeBoV3U.js";import"./lodash-es-Blijzk1b.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-BThtamsc.js";import"./dayjs-C6J0yRL_.js";import"./@intlify-CHY6szXs.js";import"./@sxzz-D9SI2xQl.js";import"./@element-plus-BmjHI8io.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./pinia-7g9vQp6f.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-fhvlCfPF.js";import"./crypto-js-CYDAzdEe.js";import"./axios-CCb-kr4I.js";import"./js-cookie-Cz0CWeBA.js";import"./vue-i18n-B8qYdFXi.js";import"./vue-rTnkxsfK.js";import"./vue-draggable-plus-BSvTyIk2.js";import"./nprogress-yi2QV7xY.js";import"./mockjs-DsSR4jwH.js";import"./vite-plugin-mock-CDJiH8Qs.js";import"./path-to-regexp-BzK_ZY7n.js";const B={class:"app-container"},D=h({__name:"table3",setup(v){w();const l=x({tableTotal:0,tableLoading:!1,tableData:[],selectedRows:[],cellBtnLoading:""}),{tableTotal:L,tableLoading:R,tableData:c,selectedRows:z}=N(l);g(()=>{_()});const _=()=>{l.tableData=[{id:1,applyNo:"202004291234",name:"张三",address:"上海市普陀区金沙江路 1518 弄"},{id:2,applyNo:"202004291235",name:"李四",address:"上海市普陀区金沙江路 1517 弄"},{id:3,applyNo:"202004291236,202004291237",name:"王五",address:"上海市普陀区金沙江路 1519 弄",datas:[{id:31,applyNo:"202004291236",name:"王小五",address:"上海市普陀区金沙江路 1519 弄",datas:[{id:31,date:"2016-05-01",type:"类型1",status:"已发货"},{id:32,date:"2016-05-01",type:"类型2",status:"未发货"}]},{id:32,applyNo:"202004291237",name:"赵小六",address:"上海市普陀区金沙江路 1519 弄"}]},{id:4,applyNo:"202004291238",name:"赵六",address:"上海市普陀区金沙江路 1516 弄"}]},r=({row:d,column:p,rowIndex:t,columnIndex:o})=>{if(!d.datas){if(o===0)return[0,0];if(o===1)return[1,2]}},i=(d,p)=>{const t=p.some(o=>o.id===d.id);console.log("isExpend",t)};return(d,p)=>{const t=f,o=u,s=y;return E(),C("div",B,[a(s,{data:k(c),style:{width:"100%","margin-bottom":"20px"},"span-method":r,"row-key":"id",border:"",onExpandChange:i},{default:e(()=>[a(t,{type:"expand"},{default:e(n=>[a(s,{class:"table-in-table","show-header":!1,data:n.row.datas,style:{width:"100%"},"row-key":"id","span-method":r,border:"",onExpandChange:i},{default:e(()=>[a(t,{type:"expand"},{default:e(b=>[a(s,{class:"table-in-table",data:b.row.datas,style:{width:"100%"},"row-key":"id",border:""},{default:e(()=>[a(t,{prop:"date",label:"下单日期",width:"180"}),a(t,{prop:"type",label:"单据类型",width:"180"}),a(t,{prop:"status",label:"状态"}),a(t,{label:"操作",width:"120"},{default:e(I=>[a(o,{type:"primary",text:"",size:"small"},{default:e(()=>[m("移除")]),_:1})]),_:1})]),_:2},1032,["data"])]),_:1}),a(t,{prop:"applyNo",label:"申请单号",width:"132.2"}),a(t,{prop:"name",label:"姓名",width:"180"}),a(t,{prop:"address",label:"地址"})]),_:2},1032,["data"])]),_:1}),a(t,{prop:"applyNo",label:"申请单号",width:"180"}),a(t,{prop:"name",label:"姓名",width:"180"}),a(t,{prop:"address",label:"地址"}),a(t,{label:"操作",width:"120"},{default:e(n=>[a(o,{type:"primary",text:"",bg:"",size:"small"},{default:e(()=>[m("移除")]),_:1})]),_:1})]),_:1},8,["data"])])}}}),pa=T(D,[["__scopeId","data-v-ddd95aaa"]]);export{pa as default};
