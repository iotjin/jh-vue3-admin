import{i as _,P as v}from"./element-plus-d9b7f19c.js";import{_ as w}from"./download-6704b2fb.js";import{i as y}from"./echarts-b3c738ab.js";import{d as x,r as C,$ as b,w as E,i as k,G as D,ak as L,o as S,c as A,X as d,Q as m,a as l,V as z,S as B,a2 as N}from"./@vue-9ba90ccc.js";import{_ as R}from"./index-fed18894.js";import"./lodash-es-d29772ce.js";import"./async-validator-dee29e8b.js";import"./@vueuse-f39d50a6.js";import"./dayjs-bff41acc.js";import"./@intlify-767c1c72.js";import"./source-map-7d7e1c08.js";import"./@element-plus-c398101b.js";import"./@ctrl-f8748455.js";import"./@sxzz-c75af06c.js";import"./escape-html-849d0975.js";import"./normalize-wheel-es-ed76fb12.js";import"./tslib-54e39b60.js";import"./zrender-b2c699c3.js";import"./pinia-87603f94.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-c8173181.js";import"./crypto-js-49b96eff.js";import"./axios-4a70c6fc.js";import"./js-cookie-edb2da2a.js";import"./vue-i18n-1488b031.js";import"./vue-ef783175.js";import"./nprogress-84d8f06a.js";import"./mockjs-8d5feca7.js";import"./vite-plugin-mock-5220d95c.js";import"./path-to-regexp-36ea9d8d.js";const V={class:"card-header"},I=["id"],T=x({__name:"barChart2",props:{id:{required:!0,type:String,default:"myChart"},className:{type:String,default:""},width:{type:String,default:"100%"},height:{type:String,default:"200px"}},setup(i){const p=i,o=C(),n=b({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",show:!1,boundaryGap:[0,.01]},yAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},data:["按月","按周","按天"]},series:[{name:"",type:"bar",barWidth:"20%",data:[45,30,60],label:{show:!0,position:"right",formatter:"{c} 元"},itemStyle:{borderRadius:[15,15,15,15],color:function(t){if(t.name==="按天")return"#00CA99";if(t.name==="按周")return"#3585F4";if(t.name==="按月")return"#FEC336"}}}]});E(()=>n,()=>{o.value.setOption(n)},{deep:!0}),k(()=>{u(),h()}),D(()=>{window.removeEventListener("resize",()=>c)});const u=()=>{o.value=L(y(document.getElementById(p.id))),o.value.setOption(n),window.addEventListener("resize",()=>c)},c=()=>{o.value.resize()},h=()=>{o.value&&(o.value.showLoading(),setTimeout(()=>{const e=f([{name:"按天",value:50},{name:"按周",value:100},{name:"按月",value:120}]);n.yAxis.data=e.xData.reverse(),n.series[0].data=e.seriesData.reverse(),o.value.hideLoading()},1e3))},f=t=>{var e=[],r=[];t.forEach(s=>{e.push(s.name),r.push(s.value)});var a={xData:e,seriesData:r};return a},g=()=>{const t=new Image;t.src=o.value.getDataURL({type:"png",pixelRatio:1,backgroundColor:"#fff"}),t.onload=()=>{const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");if(r){r.drawImage(t,0,0,t.width,t.height);const a=document.createElement("a");a.download="Chart.png",a.href=e.toDataURL("image/png",.9),document.body.appendChild(a),a.click(),a.remove()}}};return(t,e)=>{const r=w,a=_,s=v;return S(),A("div",null,[d(s,null,{header:m(()=>[l("div",V,[z(" 阶段统计 "),d(a,{effect:"dark",content:"点击试试下载",placement:"bottom"},{default:m(()=>[d(r,{class:"download",onClick:g})]),_:1})])]),default:m(()=>[l("div",{id:i.id,class:B(i.className),style:N({height:i.height,width:i.width})},null,14,I)]),_:1})])}}});const ut=R(T,[["__scopeId","data-v-4f4f6d88"]]);export{ut as default};