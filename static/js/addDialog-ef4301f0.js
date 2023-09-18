import{c as v,h as X,u as z,D as Q,F as K,G as W,N as Z,O as ee,t as le,v as ae,k as te}from"./element-plus-8029b538.js";import{a as I,b as oe}from"./dict-0a26cb37.js";import{s as de}from"./user-2018d179.js";import{d as re,r as ie,$ as N,a0 as U,w as D,i as se,o as u,c as _,X as o,Q as r,a as ne,u as a,F as x,ab as F,P as p,U as f,V as S,l as ue}from"./@vue-7d0fc2b4.js";import{_ as me}from"./plugin-vueexport-helper-c27b6911.js";function ge(){return I({type:"dept"})}function pe(){return I({type:"level"})}function we(){return oe({types:"dept,level"})}const fe=/^1[3-9][0-9]{9}$/,be=/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/,De={class:"bs-dialog input-width"},ce={key:0,class:"bs-dialog-footer"},ye=re({__name:"addDialog",props:{isShow:{type:Boolean,default:!1},dialogType:{type:String,default:"add"},dialogData:{type:Object,default:()=>({})},title:{type:String,default:""}},emits:["update:isShow","closed","success"],setup(m,{emit:Y}){const g=m,c=ie(),i=N({dialogTitle:"提示",isShowDialog:!1,dialogSubmitBtnLoading:!1,dialogIsLook:!1,initFormData:{},dialogFormData:{id:"",name:"",loginName:"",userNumber:"",userExpiryDate:"",deptId:"",status:"",notes:"",phone:"",age:"",money:"",level:"",loginDate:"",loginIp:"",createDate:"",updateDate:"",updateBy:""}}),{dialogTitle:B,isShowDialog:y,dialogSubmitBtnLoading:L,dialogIsLook:O,dialogFormData:t}=U(i),b=N({deptOptions:[],levelOptions:[]}),{deptOptions:q,levelOptions:H}=U(b),R=N({name:[{required:!0,message:"请输入",trigger:["blur","change"]},{min:1,max:10,message:"10字符以内",trigger:["blur","change"]}],loginName:[{required:!0,message:"请输入",trigger:["blur","change"]},{min:1,max:10,message:"10字符以内",trigger:["blur","change"]}],userNumber:[{required:!0,message:"请输入",trigger:["blur","change"]},{type:"number",message:"请输入8位数字1",trigger:["blur","change"]},{validator:(d,e,s)=>{e?(e.toString().length!==8&&s(new Error("请输入8位数字")),s()):s(new Error("请输入"))},trigger:["blur","change"]}],userExpiryDate:[{required:!0,message:"请选择",trigger:["blur","change"]}],deptId:[{required:!0,message:"请选择",trigger:["blur","change"]}],status:[{required:!0,message:"请选择",trigger:["blur","change"]}],phone:[{required:!0,message:"请输入",trigger:"blur"},{pattern:fe,message:"请输入正确手机号"}],level:[{required:!0,message:"请选择",trigger:["blur","change"]}],notes:[{required:!1,message:"请输入",trigger:["blur","change"]},{min:1,max:100,message:"100字符以内",trigger:["blur","change"]}],age:[{required:!1,message:"请输入",trigger:"blur"},{pattern:/^[1-9]\d*$/,message:"仅支持录入正整数"}],money:[{required:!1,message:"请输入",trigger:"blur"},{pattern:be,message:"请输入最多两位小数金额"}]});D(()=>g.isShow,d=>{i.isShowDialog=d}),D(()=>i.isShowDialog,d=>{Y("update:isShow",d)}),D(()=>g.title,d=>{i.dialogTitle=d.length?d:i.dialogTitle}),D(()=>g.dialogData,d=>{g.dialogType==="add"?i.dialogFormData=JSON.parse(JSON.stringify(i.initFormData)):i.dialogFormData=JSON.parse(JSON.stringify(d))}),D(()=>g.dialogType,d=>{i.dialogTitle=g.title||(d==="add"?"新增":d==="edit"?"编辑":d==="look"?"查看":i.dialogTitle),i.dialogIsLook=d==="look"},{immediate:!0}),se(()=>{i.initFormData=JSON.parse(JSON.stringify(i.dialogFormData)),w(),h()});const w=()=>{ge().then(d=>{d.code===2e4?b.deptOptions=d.data:v.warning(d.msg)})},h=()=>{pe().then(d=>{d.code===2e4?b.levelOptions=d.data:v.warning(d.msg)})},J=()=>{g.dialogType==="add"&&c.value.clearValidate(),b.deptOptions.length||w(),b.levelOptions.length||h()},C=()=>{i.dialogIsLook||c.value.resetFields(),Y("closed",{})},$=()=>{c.value.validate(d=>{d&&G()})},G=()=>{const d=JSON.parse(JSON.stringify(i.dialogFormData));console.log(JSON.stringify(d));const e=g.dialogType==="add"?"新增成功!":"编辑成功!";i.dialogSubmitBtnLoading=!0,de(d).then(s=>{i.dialogSubmitBtnLoading=!1,s.code===2e4?(v.success(e),i.isShowDialog=!1,Y("success",{})):v.warning(s.msg)}).catch(s=>{i.dialogSubmitBtnLoading=!1,console.log(JSON.stringify(s))})};return(d,e)=>{const s=X,n=z,E=Q,k=K,V=W,M=Z,P=ee,j=le,T=ae,A=te;return u(),_("div",null,[o(A,{title:a(B),modelValue:a(y),"onUpdate:modelValue":e[18]||(e[18]=l=>ue(y)?y.value=l:null),top:"8vh",width:"55%","close-on-click-modal":!1,onOpened:J,onClosed:C},{default:r(()=>[ne("div",De,[o(j,{ref_key:"dialogFormRef",ref:c,model:a(t),inline:!0,rules:a(R),"label-width":"120px",disabled:a(O)},{default:r(()=>[o(n,{label:"姓名:",prop:"name"},{default:r(()=>[o(s,{modelValue:a(t).name,"onUpdate:modelValue":e[0]||(e[0]=l=>a(t).name=l),placeholder:"请输入姓名",clearable:""},null,8,["modelValue"])]),_:1}),o(n,{label:"用户名:",prop:"loginName"},{default:r(()=>[o(s,{modelValue:a(t).loginName,"onUpdate:modelValue":e[1]||(e[1]=l=>a(t).loginName=l),disabled:m.dialogType!=="add",placeholder:"请输入用户名",clearable:""},null,8,["modelValue","disabled"])]),_:1}),o(n,{label:"员工编号:",prop:"userNumber"},{default:r(()=>[o(s,{modelValue:a(t).userNumber,"onUpdate:modelValue":e[2]||(e[2]=l=>a(t).userNumber=l),modelModifiers:{number:!0},disabled:m.dialogType!=="add",placeholder:"请输入员工编号",clearable:""},null,8,["modelValue","disabled"])]),_:1}),o(n,{label:"部门:",prop:"deptId"},{default:r(()=>[o(k,{modelValue:a(t).deptId,"onUpdate:modelValue":e[3]||(e[3]=l=>a(t).deptId=l),placeholder:"请选择部门",filterable:"",clearable:""},{default:r(()=>[(u(!0),_(x,null,F(a(q),l=>(u(),p(E,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(n,{label:"用户有效期至:",prop:"userExpiryDate"},{default:r(()=>[o(V,{modelValue:a(t).userExpiryDate,"onUpdate:modelValue":e[4]||(e[4]=l=>a(t).userExpiryDate=l),type:"date",placeholder:"选择日期","value-format":"YYYY-MM-DD",format:"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),o(n,{label:"手机号:",prop:"phone"},{default:r(()=>[o(s,{modelValue:a(t).phone,"onUpdate:modelValue":e[5]||(e[5]=l=>a(t).phone=l),placeholder:"请输入手机号",clearable:""},null,8,["modelValue"])]),_:1}),o(n,{label:"级别:",prop:"level"},{default:r(()=>[o(k,{modelValue:a(t).level,"onUpdate:modelValue":e[6]||(e[6]=l=>a(t).level=l),placeholder:"请选择级别",filterable:"",clearable:""},{default:r(()=>[(u(!0),_(x,null,F(a(H),l=>(u(),p(E,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(n,{label:"补助:",prop:"money"},{default:r(()=>[o(s,{modelValue:a(t).money,"onUpdate:modelValue":e[7]||(e[7]=l=>a(t).money=l),placeholder:"请输入金额",clearable:""},null,8,["modelValue"])]),_:1}),o(n,{label:"年龄:",prop:"age"},{default:r(()=>[o(s,{modelValue:a(t).age,"onUpdate:modelValue":e[8]||(e[8]=l=>a(t).age=l),placeholder:"请输入年龄",clearable:""},null,8,["modelValue"])]),_:1}),m.dialogType!=="add"?(u(),p(n,{key:0,label:"登录时间:",prop:"loginDate"},{default:r(()=>[o(V,{modelValue:a(t).loginDate,"onUpdate:modelValue":e[9]||(e[9]=l=>a(t).loginDate=l),disabled:"",type:"datetime",placeholder:"选择日期","value-format":"YYYY-MM-DD HH:mm:ss",format:"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1})):f("",!0),m.dialogType!=="add"?(u(),p(n,{key:1,label:"登录IP:",prop:"loginIp"},{default:r(()=>[o(s,{modelValue:a(t).loginIp,"onUpdate:modelValue":e[10]||(e[10]=l=>a(t).loginIp=l),disabled:""},null,8,["modelValue"])]),_:1})):f("",!0),m.dialogType!=="add"?(u(),p(n,{key:2,label:"创建时间:",prop:"createDate"},{default:r(()=>[o(V,{modelValue:a(t).createDate,"onUpdate:modelValue":e[11]||(e[11]=l=>a(t).createDate=l),disabled:"",type:"datetime",placeholder:"选择日期","value-format":"YYYY-MM-DD HH:mm:ss",format:"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1})):f("",!0),m.dialogType!=="add"?(u(),p(n,{key:3,label:"更新时间:",prop:"updateDate"},{default:r(()=>[o(V,{modelValue:a(t).updateDate,"onUpdate:modelValue":e[12]||(e[12]=l=>a(t).updateDate=l),disabled:"",type:"datetime",placeholder:"选择日期","value-format":"YYYY-MM-DD HH:mm:ss",format:"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1})):f("",!0),m.dialogType!=="add"?(u(),p(n,{key:4,label:"操作人:",prop:"updateBy"},{default:r(()=>[o(s,{modelValue:a(t).updateBy,"onUpdate:modelValue":e[13]||(e[13]=l=>a(t).updateBy=l),disabled:""},null,8,["modelValue"])]),_:1})):f("",!0),o(n,{label:"备注:",prop:"notes"},{default:r(()=>[o(s,{modelValue:a(t).notes,"onUpdate:modelValue":e[14]||(e[14]=l=>a(t).notes=l),autosize:{minRows:5,maxRows:5},placeholder:"请输入备注",type:"textarea",maxlength:"100","show-word-limit":"",clearable:""},null,8,["modelValue"])]),_:1}),o(n,{label:"状态:",prop:"status"},{default:r(()=>[o(P,{modelValue:a(t).status,"onUpdate:modelValue":e[15]||(e[15]=l=>a(t).status=l)},{default:r(()=>[o(M,{label:"1"},{default:r(()=>[S("启用")]),_:1}),o(M,{label:"0"},{default:r(()=>[S("停用")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules","disabled"]),a(O)?f("",!0):(u(),_("div",ce,[o(T,{onClick:e[16]||(e[16]=l=>y.value=!1)},{default:r(()=>[S(" 取消 ")]),_:1}),o(T,{loading:a(L),type:"primary",onClick:e[17]||(e[17]=l=>$())},{default:r(()=>[S(" 保存 ")]),_:1},8,["loading"])]))])]),_:1},8,["title","modelValue"])])}}});const Ve=me(ye,[["__scopeId","data-v-fd5c16c5"]]),he=Object.freeze(Object.defineProperty({__proto__:null,default:Ve},Symbol.toStringTag,{value:"Module"}));export{Ve as A,he as a,we as g};
