import{b as c,f as p,g as _,h as i}from"./element-plus-d9b7f19c.js";import{u as g}from"./vue-i18n-1488b031.js";import{S as f}from"./index-bdffb0d4.js";import{u as h}from"./index-fed18894.js";import{d as w,o as S,P as b,Q as e,X as n,u as t,V as d,a as x}from"./@vue-9ba90ccc.js";const I=w({__name:"index",setup(E){const a=h(),{locale:l}=g();function r(o){l.value=o,a.changeLanguage(o),o=="en"?c.success("Switch Language Successfully!"):c.success("切换语言成功！")}return(o,C)=>{const s=p,u=_,m=i;return S(),b(m,{trigger:"click",onCommand:r},{dropdown:e(()=>[n(u,null,{default:e(()=>[n(s,{disabled:t(a).language==="zh-cn",command:"zh-cn"},{default:e(()=>[d(" 中文 ")]),_:1},8,["disabled"]),n(s,{disabled:t(a).language==="en",command:"en"},{default:e(()=>[d(" English ")]),_:1},8,["disabled"])]),_:1})]),default:e(()=>[x("div",null,[n(f,{"icon-class":"language"})])]),_:1})}}});export{I as _};