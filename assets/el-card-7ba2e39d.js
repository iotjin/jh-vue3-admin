import{b as n,g as c,d,u as p,a as t,c as o,n as r,f as s,e as l,a9 as i,t as u,F as y,j as m,D as f,_ as h,q as v}from"./index-79c64a0f.js";const S=n({header:{type:String,default:""},bodyStyle:{type:c([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),_=d({name:"ElCard"}),b=d({..._,props:S,setup(C){const a=p("card");return(e,g)=>(t(),o("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(t(),o("div",{key:0,class:r(s(a).e("header"))},[l(e.$slots,"header",{},()=>[i(u(e.header),1)])],2)):y("v-if",!0),m("div",{class:r(s(a).e("body")),style:f(e.bodyStyle)},[l(e.$slots,"default")],6)],2))}});var w=h(b,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const E=v(w);export{E};