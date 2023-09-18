import{c as w,h as R,u as U,N as C,O as J,t as q,v as $,k as j}from"./element-plus-8029b538.js";import{f as G}from"./dict-0a26cb37.js";import{d as M,r as P,$ as D,a0 as Q,w as m,o as c,c as k,X as a,Q as s,a as X,u as o,P as z,V as f,U as v,l as A}from"./@vue-7d0fc2b4.js";const H={class:"bs-dialog"},K={key:0,slot:"footer",class:"bs-dialog-footer"},ee=M({__name:"addItemDialog",props:{isShow:{type:Boolean,default:!1},dialogType:{type:String,default:"add"},dialogData:{type:Object,default:()=>({})},title:{type:String,default:""}},emits:["update:isShow","closed","success"],setup(_,{emit:b}){const r=_,g=P(),t=D({dialogTitle:"提示",isShowDialog:!1,dialogSubmitBtnLoading:!1,dialogIsLook:!1,dialogFormData:{id:"",label:"",value:"",sort:"",type:"",builtin:"0",notes:""}}),{dialogTitle:T,isShowDialog:p,dialogSubmitBtnLoading:B,dialogIsLook:V,dialogFormData:i}=Q(t),N=D({label:[{required:!0,message:"请输入",trigger:["blur"]},{min:1,max:32,message:"32字符以内",trigger:["blur"]}],value:[{required:!0,message:"请输入",trigger:["blur"]},{min:1,max:32,message:"32字符以内",trigger:["blur"]}],sort:[{required:!0,message:"请输入正确的排序号",trigger:["blur"]},{pattern:/^[1-9]\d{0,2}$/,message:"请输入0-999之间的正整数",trigger:["blur"]}]});m(()=>r.isShow,l=>{t.isShowDialog=l}),m(()=>t.isShowDialog,l=>{b("update:isShow",l)}),m(()=>r.title,l=>{t.dialogTitle=l.length?l:t.dialogTitle}),m(()=>r.dialogData,l=>{t.dialogFormData=JSON.parse(JSON.stringify(l))}),m(()=>r.dialogType,l=>{t.dialogTitle=r.title||(l==="add"?"新增":l==="edit"?"编辑":l==="look"?"查看":t.dialogTitle),t.dialogIsLook=l==="look"},{immediate:!0});const h=()=>{r.dialogType==="add"&&g.value.clearValidate()},F=()=>{t.dialogIsLook||g.value.resetFields(),b("closed",{})},O=()=>{g.value.validate(l=>{l&&x()})},x=()=>{const l=JSON.parse(JSON.stringify(t.dialogFormData));console.log(JSON.stringify(l));const e=r.dialogType==="add"?"新增成功!":"编辑成功!";t.dialogSubmitBtnLoading=!0,G(l).then(n=>{t.dialogSubmitBtnLoading=!1,n.code===2e4?(w.success(e),t.isShowDialog=!1,b("success",{})):w.warning(n.msg)}).catch(n=>{t.dialogSubmitBtnLoading=!1,console.log(JSON.stringify(n))})};return(l,e)=>{const n=R,u=U,y=C,E=J,L=q,S=$,I=j;return c(),k("div",null,[a(I,{title:o(T),modelValue:o(p),"onUpdate:modelValue":e[8]||(e[8]=d=>A(p)?p.value=d:null),top:"8vh",width:"55%","close-on-click-modal":!1,onOpened:h,onClosed:F},{default:s(()=>[X("div",H,[a(L,{ref_key:"dialogFormRef",ref:g,model:o(i),inline:!0,rules:o(N),"label-width":"120px",disabled:o(V)},{default:s(()=>[a(u,{label:"字典标签:",prop:"label"},{default:s(()=>[a(n,{modelValue:o(i).label,"onUpdate:modelValue":e[0]||(e[0]=d=>o(i).label=d),placeholder:"请输入字典标签",clearable:""},null,8,["modelValue"])]),_:1}),a(u,{label:"字典值:",prop:"value"},{default:s(()=>[a(n,{modelValue:o(i).value,"onUpdate:modelValue":e[1]||(e[1]=d=>o(i).value=d),placeholder:"请输入字典值",clearable:""},null,8,["modelValue"])]),_:1}),a(u,{label:"排序:",prop:"sort"},{default:s(()=>[a(n,{modelValue:o(i).sort,"onUpdate:modelValue":e[2]||(e[2]=d=>o(i).sort=d),type:"number",placeholder:"请输入排序",clearable:""},null,8,["modelValue"])]),_:1}),a(u,{label:"所属字典:",prop:"type"},{default:s(()=>[a(n,{modelValue:o(i).type,"onUpdate:modelValue":e[3]||(e[3]=d=>o(i).type=d),placeholder:"",clearable:"",disabled:""},null,8,["modelValue"])]),_:1}),_.dialogType!=="add"?(c(),z(u,{key:0,label:"是否内置:",prop:"builtin"},{default:s(()=>[a(E,{modelValue:o(i).builtin,"onUpdate:modelValue":e[4]||(e[4]=d=>o(i).builtin=d)},{default:s(()=>[a(y,{label:"1",disabled:""},{default:s(()=>[f("是")]),_:1}),a(y,{label:"0",disabled:""},{default:s(()=>[f("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})):v("",!0),a(u,{label:"备注:",prop:"notes"},{default:s(()=>[a(n,{modelValue:o(i).notes,"onUpdate:modelValue":e[5]||(e[5]=d=>o(i).notes=d),placeholder:"请输入备注",type:"textarea",maxlength:"100","show-word-limit":"",clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules","disabled"]),o(V)?v("",!0):(c(),k("div",K,[a(S,{onClick:e[6]||(e[6]=d=>p.value=!1)},{default:s(()=>[f(" 取消 ")]),_:1}),a(S,{loading:o(B),type:"primary",onClick:e[7]||(e[7]=d=>O())},{default:s(()=>[f(" 保存 ")]),_:1},8,["loading"])]))])]),_:1},8,["title","modelValue"])])}}});export{ee as _};
