import{v as R,k as T,w as B,c as S}from"./element-plus-Bdn4kiSG.js";import{d as q,r as l,w as C,o as x,c as O,W as r,P as m,u as a,a as t,V as p,O as P,af as M,a4 as N,U as j,n as V}from"./@vue-DBL8Ibom.js";import{b as K,S as _,r as L,_ as D}from"./index-DFeBoV3U.js";import{u as Q}from"./vue-router-fhvlCfPF.js";import{v as W}from"./vue-i18n-B8qYdFXi.js";import{_ as z}from"./index.vuevuetypescriptsetuptruelang-BAtVHMMG.js";import"./lodash-es-Blijzk1b.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-BThtamsc.js";import"./dayjs-C6J0yRL_.js";import"./@intlify-CHY6szXs.js";import"./@sxzz-D9SI2xQl.js";import"./@element-plus-BmjHI8io.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./pinia-7g9vQp6f.js";import"./vue-demi-Dq6ymT-8.js";import"./crypto-js-CYDAzdEe.js";import"./axios-CCb-kr4I.js";import"./js-cookie-Cz0CWeBA.js";import"./vue-draggable-plus-BSvTyIk2.js";import"./nprogress-yi2QV7xY.js";import"./mockjs-DsSR4jwH.js";import"./vite-plugin-mock-CDJiH8Qs.js";import"./path-to-regexp-BzK_ZY7n.js";import"./vue-rTnkxsfK.js";function A(g){return["admin","editor","editor2"].indexOf(g.trim())>=0}const G={class:"login-container"},H={class:"title-container"},J={class:"title"},X={class:"svg-container"},Y={class:"svg-container"},Z={class:"tips"},ee={class:"tips"},oe={class:"tips"},se=q({__name:"index",setup(g){const{t:u,locale:k}=W.useI18n(),v=Q(),$=K(),d=l(!1),c=l(),w=l(),n=l("password"),i=l({username:"admin",password:"123456"}),b=l({username:[{required:!0,trigger:["blur","change"],validator:(e,o,s)=>{A(o)?s():s(new Error(u("login.usernameMsg")))}}],password:[{required:!0,trigger:["blur","change"],validator:(e,o,s)=>{o.length<6?s(new Error(u("login.passwordMsg"))):s()}}]});C(()=>k.value,e=>{V(()=>{c.value.resetFields()})});function E(){n.value==="password"?n.value="":n.value="password",V(()=>{w.value.focus()})}function h(){c.value.validate(e=>{e&&(d.value=!0,$.login(i.value).then(()=>{const o=v.query.redirect??"/";L.push({path:o,query:U(v.query)}).then(()=>{d.value=!1})}).catch(()=>{d.value=!1}).finally(()=>{}))})}const U=e=>Object.keys(e).reduce((o,s)=>(s!=="redirect"&&(o[s]=e[s]),o),{});return(e,o)=>{const s=T,y=B,F=S,I=R;return x(),O("div",G,[r(I,{ref_key:"loginFormRef",ref:c,model:a(i),rules:a(b),class:"login-form","auto-complete":"on","label-position":"left"},{default:m(()=>[t("div",H,[t("h3",J,p(e.$t("login.title")),1),r(z,{class:"text"})]),r(y,{prop:"username"},{default:m(()=>[t("span",X,[r(_,{"icon-class":"user"})]),r(s,{ref:"username",modelValue:a(i).username,"onUpdate:modelValue":o[0]||(o[0]=f=>a(i).username=f),placeholder:e.$t("login.username"),name:"username",type:"text",tabindex:"1","auto-complete":"on"},null,8,["modelValue","placeholder"])]),_:1}),r(y,{prop:"password"},{default:m(()=>[t("span",Y,[r(_,{"icon-class":"password"})]),(x(),P(s,{ref_key:"passwordRef",ref:w,key:a(n),modelValue:a(i).password,"onUpdate:modelValue":o[1]||(o[1]=f=>a(i).password=f),type:a(n),placeholder:e.$t("login.password"),name:"password",tabindex:"2","auto-complete":"on",onKeyup:M(h,["enter","native"])},null,8,["modelValue","type","placeholder"])),t("span",{class:"show-pwd",onClick:E},[r(_,{"icon-class":a(n)==="password"?"eye":"eye-open"},null,8,["icon-class"])])]),_:1}),r(F,{loading:a(d),type:"primary",style:{width:"100%","margin-bottom":"30px"},onClick:N(h,["prevent"])},{default:m(()=>[j(p(e.$t("login.login")),1)]),_:1},8,["loading"]),t("div",Z,[t("span",null,p(e.$t("login.textTip1")),1)]),t("div",ee,[t("span",null,p(e.$t("login.textTip2")),1)]),t("div",oe,[t("span",null,p(e.$t("login.textTip3")),1)])]),_:1},8,["model","rules"])])}}}),Te=D(se,[["__scopeId","data-v-30d84fc7"]]);export{Te as default};
