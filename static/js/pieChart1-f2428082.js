import{g as f,D as g}from"./element-plus-ac7cad14.js";import{_ as v}from"./download-f343aaaf.js";import{i as w}from"./echarts-b3c738ab.js";import{d as C,r as y,_ as b,w as x,i as E,E as L,o as k,c as z,W as s,P as d,a as c,U as S,R as B,a1 as N}from"./@vue-4065970f.js";import{_ as R}from"./plugin-vueexport-helper-c27b6911.js";import"./lodash-es-7bbf0cf7.js";import"./async-validator-dee29e8b.js";import"./@vueuse-12d228e7.js";import"./@element-plus-b45bf43b.js";import"./@ctrl-f8748455.js";import"./@sxzz-c75af06c.js";import"./tslib-54e39b60.js";import"./zrender-b2c699c3.js";const D={class:"card-header"},I=["id"],U=C({__name:"pieChart1",props:{id:{required:!0,type:String,default:"myChart"},className:{type:String,default:""},width:{type:String,default:"100%"},height:{type:String,default:"200px"}},setup(o){const m=o,t=y(),i=b({color:["#3585F4","#00CA99"],tooltip:{trigger:"item"},legend:{bottom:"5%"},series:[{name:"",type:"pie",radius:["25%","60%"],top:"-15%",avoidLabelOverlap:!1,itemStyle:{borderColor:"#fff",borderWidth:10},label:{show:!0,formatter:"{b}: {c} 元({d}%)"},labelLine:{show:!0},data:[{value:17.58,name:"已发送合计"},{value:25.27,name:"未发送合计"}]}]});x(()=>i,()=>{t.value.setOption(i)},{deep:!0}),E(()=>{p(),u()}),L(()=>{window.removeEventListener("resize",()=>l)});const p=()=>{t.value=w(document.getElementById(m.id)),t.value.setOption(i),window.addEventListener("resize",()=>l)},l=()=>{t.value.resize()},u=()=>{t.value&&(t.value.showLoading(),setTimeout(()=>{const e=[{name:"已发送合计",value:150},{name:"未发送合计",value:49}];i.series[0].data=e,t.value.hideLoading()},1e3))},h=()=>{const e=new Image;e.src=t.value.getDataURL({type:"png",pixelRatio:1,backgroundColor:"#fff"}),e.onload=()=>{const n=document.createElement("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");if(r){r.drawImage(e,0,0,e.width,e.height);const a=document.createElement("a");a.download="Chart.png",a.href=n.toDataURL("image/png",.9),document.body.appendChild(a),a.click(),a.remove()}}};return(e,n)=>{const r=v,a=f,_=g;return k(),z("div",null,[s(_,null,{header:d(()=>[c("div",D,[S(" 状态统计 "),s(a,{effect:"dark",content:"点击试试下载",placement:"bottom"},{default:d(()=>[s(r,{class:"download",onClick:h})]),_:1})])]),default:d(()=>[c("div",{id:o.id,class:B(o.className),style:N({height:o.height,width:o.width})},null,14,I)]),_:1})])}}});const K=R(U,[["__scopeId","data-v-37ae134e"]]);export{K as default};
