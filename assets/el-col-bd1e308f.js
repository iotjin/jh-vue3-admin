import{b as g,d as p,u as _,A as n,p as k,a as h,k as w,w as $,e as v,n as j,f as c,D as N,l as C,_ as x,q as E,g as u,$ as r,h as O,ab as b,a4 as S}from"./index-79c64a0f.js";const R=Symbol("rowContextKey"),K=["start","center","end","space-around","space-between","space-evenly"],P=["top","middle","bottom"],A=g({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:K,default:"start"},align:{type:String,values:P}}),B=p({name:"ElRow"}),D=p({...B,props:A,setup(f){const t=f,l=_("row"),a=n(()=>t.gutter);k(R,{gutter:a});const i=n(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),m=n(()=>[l.b(),l.is(`justify-${t.justify}`,t.justify!=="start"),l.is(`align-${t.align}`,!!t.align)]);return(e,d)=>(h(),w(C(e.tag),{class:j(c(m)),style:N(c(i))},{default:$(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var L=x(D,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const H=E(L),q=g({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:u([Number,Object]),default:()=>r({})},sm:{type:u([Number,Object]),default:()=>r({})},md:{type:u([Number,Object]),default:()=>r({})},lg:{type:u([Number,Object]),default:()=>r({})},xl:{type:u([Number,Object]),default:()=>r({})}}),I=p({name:"ElCol"}),J=p({...I,props:q,setup(f){const t=f,{gutter:l}=O(R,{gutter:n(()=>0)}),a=_("col"),i=n(()=>{const e={};return l.value&&(e.paddingLeft=e.paddingRight=`${l.value/2}px`),e}),m=n(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const o=t[s];b(o)&&(s==="span"?e.push(a.b(`${t[s]}`)):o>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{b(t[s])?e.push(a.b(`${s}-${t[s]}`)):S(t[s])&&Object.entries(t[s]).forEach(([o,y])=>{e.push(o!=="span"?a.b(`${s}-${o}-${y}`):a.b(`${s}-${y}`))})}),l.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,d)=>(h(),w(C(e.tag),{class:j(c(m)),style:N(c(i))},{default:$(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var T=x(J,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const M=E(T);export{M as E,H as a};
