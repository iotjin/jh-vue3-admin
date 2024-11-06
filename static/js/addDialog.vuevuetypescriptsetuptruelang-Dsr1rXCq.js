import{b as V,k as C,w as I,M as U,N as q,v as M,c as $,d as j}from"./element-plus-CS1bfuXs.js";import{s as G}from"./role-ByVDFUse.js";import{d as P,r as W,_ as w,$ as z,w as u,f as A,o as b,c as k,W as t,P as d,a as H,u as l,O as K,U as c,T as F,l as Q}from"./@vue-DBL8Ibom.js";const X={class:"bs-dialog"},Y={key:0,class:"bs-dialog-footer"},ae=P({__name:"addDialog",props:{isShow:{type:Boolean,default:!1},dialogType:{type:String,default:"add"},dialogData:{type:Object,default:()=>({})},title:{type:String,default:""}},emits:["update:isShow","closed","success"],setup(_,{emit:N}){const f=N,n=_,m=W(),e=w({dialogTitle:"提示",isShowDialog:!1,dialogSubmitBtnLoading:!1,dialogIsLook:!1,initFormData:{},dialogFormData:{id:"",name:"",code:"",notes:"",builtin:"0"}}),{dialogTitle:O,isShowDialog:g,dialogSubmitBtnLoading:T,dialogIsLook:S,dialogFormData:s}=z(e),h=w({name:[{required:!0,message:"请输入",trigger:["blur","change"]},{min:1,max:32,message:"32字符以内",trigger:["blur","change"]}],code:[{required:!0,message:"请输入",trigger:["blur"]},{min:1,max:32,message:"32字符以内",trigger:["blur"]}]});u(()=>n.isShow,o=>{e.isShowDialog=o}),u(()=>e.isShowDialog,o=>{f("update:isShow",o)}),u(()=>n.title,o=>{e.dialogTitle=o.length?o:e.dialogTitle}),u(()=>n.dialogData,o=>{n.dialogType==="add"?e.dialogFormData=JSON.parse(JSON.stringify(e.initFormData)):e.dialogFormData=JSON.parse(JSON.stringify(o))}),u(()=>n.dialogType,o=>{e.dialogTitle=n.title||(o==="add"?"新增":o==="edit"?"编辑":o==="look"?"查看":e.dialogTitle),e.dialogIsLook=o==="look"},{immediate:!0}),A(()=>{e.initFormData=JSON.parse(JSON.stringify(e.dialogFormData))});const v=()=>{n.dialogType==="add"&&m.value.clearValidate()},B=()=>{e.dialogIsLook||m.value.resetFields(),f("closed",{})},J=()=>{m.value.validate(o=>{o&&x()})},x=()=>{const o=JSON.parse(JSON.stringify(e.dialogFormData));console.log(JSON.stringify(o));const a=n.dialogType==="add"?"新增成功!":"编辑成功!";e.dialogSubmitBtnLoading=!0,G(o).then(r=>{e.dialogSubmitBtnLoading=!1,r.code===2e4?(V.success(a),e.isShowDialog=!1,f("success",{})):V.warning(r.msg)}).catch(r=>{e.dialogSubmitBtnLoading=!1,console.log(JSON.stringify(r))})};return(o,a)=>{const r=C,p=I,y=U,E=q,L=M,D=$,R=j;return b(),k("div",null,[t(R,{title:l(O),modelValue:l(g),"onUpdate:modelValue":a[6]||(a[6]=i=>Q(g)?g.value=i:null),top:"8vh",width:"55%","close-on-click-modal":!1,onOpened:v,onClosed:B},{default:d(()=>[H("div",X,[t(L,{ref_key:"dialogFormRef",ref:m,model:l(s),inline:!0,rules:l(h),"label-width":"120px",disabled:l(S)},{default:d(()=>[t(p,{label:"角色名称:",prop:"name"},{default:d(()=>[t(r,{modelValue:l(s).name,"onUpdate:modelValue":a[0]||(a[0]=i=>l(s).name=i),placeholder:"请输入角色名称",clearable:""},null,8,["modelValue"])]),_:1}),t(p,{label:"角色编码:",prop:"code"},{default:d(()=>[t(r,{modelValue:l(s).code,"onUpdate:modelValue":a[1]||(a[1]=i=>l(s).code=i),placeholder:"请输入角色编码",clearable:""},null,8,["modelValue"])]),_:1}),t(p,{label:"备注:",prop:"notes"},{default:d(()=>[t(r,{modelValue:l(s).notes,"onUpdate:modelValue":a[2]||(a[2]=i=>l(s).notes=i),placeholder:"请输入备注",type:"textarea",maxlength:"100","show-word-limit":"",clearable:""},null,8,["modelValue"])]),_:1}),_.dialogType!=="add"?(b(),K(p,{key:0,label:"是否内置:",prop:"builtin"},{default:d(()=>[t(E,{modelValue:l(s).builtin,"onUpdate:modelValue":a[3]||(a[3]=i=>l(s).builtin=i)},{default:d(()=>[t(y,{value:"1",disabled:""},{default:d(()=>[c("是")]),_:1}),t(y,{value:"0",disabled:""},{default:d(()=>[c("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})):F("",!0)]),_:1},8,["model","rules","disabled"]),l(S)?F("",!0):(b(),k("div",Y,[t(D,{onClick:a[4]||(a[4]=i=>g.value=!1)},{default:d(()=>[c(" 取消 ")]),_:1}),t(D,{loading:l(T),type:"primary",onClick:a[5]||(a[5]=i=>J())},{default:d(()=>[c(" 保存 ")]),_:1},8,["loading"])]))])]),_:1},8,["title","modelValue"])])}}});export{ae as _};