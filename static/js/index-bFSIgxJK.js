import{Q as y}from"./element-plus-BsPKl9cL.js";import{x as p}from"./@vueuse-C4lJNpQw.js";import{d as b,o as z,c as S,W as w,u as d,l as m,R as T}from"./@vue-Cr7qNLMI.js";import{_ as k}from"./index-DAJGaxl8.js";const v=(e,t,n,o)=>(e/=o/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)),C=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),h=e=>{document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e},x=()=>document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,g=(e,t,n)=>{const o=x(),a=e-o,l=20;let r=0;t=typeof t>"u"?500:t;const u=function(){r+=l;const i=v(r,o,a,t);h(i),r<t&&C(u)};u()},N=b({__name:"index",props:{total:{required:!0,type:Number,default:0},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},emits:["pagination","update:page","update:limit"],setup(e,{emit:t}){const n=e,o=t,a=p(n,"page",o),l=p(n,"limit",o);function r(i){a.value=1,o("pagination",{page:a,limit:i}),n.autoScroll&&g(0,800)}function u(i){a.value=i,o("pagination",{page:i,limit:n.limit}),n.autoScroll&&g(0,800)}return(i,s)=>{const f=y;return z(),S("div",{class:T("pagination "+{hidden:e.hidden})},[w(f,{"current-page":d(a),"onUpdate:currentPage":s[0]||(s[0]=c=>m(a)?a.value=c:null),"page-size":d(l),"onUpdate:pageSize":s[1]||(s[1]=c=>m(l)?l.value=c:null),background:e.background,layout:e.layout,"page-sizes":e.pageSizes,total:e.total,onSizeChange:r,onCurrentChange:u},null,8,["current-page","page-size","background","layout","page-sizes","total"])],2)}}}),E=k(N,[["__scopeId","data-v-60d1e8b7"]]);export{E as _};
