import{h as T,P as C,D as R,F as E}from"./element-plus-29f174c0.js";import{d as I,r as h,$ as N,a0 as A,w as s,n as D,o as B,c as O,X as c,Q as V,u as a,l as b,a2 as F}from"./@vue-7d0fc2b4.js";import{_ as U}from"./plugin-vueexport-helper-c27b6911.js";import"./lodash-es-d29772ce.js";import"./async-validator-dee29e8b.js";import"./@vueuse-d1e6df39.js";import"./dayjs-78f57161.js";import"./@intlify-999e9484.js";import"./source-map-7d7e1c08.js";import"./@element-plus-975622b8.js";import"./@ctrl-f8748455.js";import"./@sxzz-c75af06c.js";import"./escape-html-bdfaebd7.js";import"./normalize-wheel-es-ed76fb12.js";const j=I({__name:"select-tree",props:{modelValue:{type:[String,Array],default:null},data:{type:Array,default:()=>[]},props:{type:Object,default:()=>({value:"id",label:"name",children:"children",parentId:"parentId"})},placeholder:{type:String,default:"请选择"},inputPlaceholder:{type:String,default:"检索关键字"},width:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","closed","selected"],setup(n,{emit:_}){const p=n,y=h(),d=h(),t=N({treeData:[],treeProps:{},keyword:"",selectText:"",selectValue:""}),{treeData:k,treeProps:u,keyword:i,selectText:m,selectValue:z}=A(t);s(()=>t.selectText,e=>{const l=t.selectValue||null;_("update:modelValue",l)}),s(()=>p.modelValue,e=>{if(e&&e.length){const l=Array.isArray(e)?e:[e];D(()=>{d.value.setCheckedKeys(l);const o=d.value.getCheckedNodes();o&&o.length>0?r(o[0][t.treeProps.label],o[0][t.treeProps.value]):r("","")})}else r("","")},{immediate:!0}),s(()=>p.data,e=>{t.treeData=e&&e.length?e:[]},{immediate:!0}),s(()=>p.props,e=>{t.treeProps=e},{immediate:!0}),s(()=>t.keyword,e=>{d.value.filter(e)});const g=(e,l)=>e?l[t.treeProps.label].indexOf(e)!==-1:!0,v=()=>{r("","")},x=e=>{y.value.blur(),r(e[t.treeProps.label],e[t.treeProps.value]),_("selected",e[t.treeProps.value],e)};function r(e,l){t.selectText=e,t.selectValue=l}return(e,l)=>{const o=T,P=C,w=R,S=E;return B(),O("div",null,[c(S,{ref_key:"selectRef",ref:y,modelValue:a(m),"onUpdate:modelValue":l[1]||(l[1]=f=>b(m)?m.value=f:null),placeholder:n.placeholder,style:F("width:"+n.width),clearable:"",onClear:v},{default:V(()=>[c(o,{modelValue:a(i),"onUpdate:modelValue":l[0]||(l[0]=f=>b(i)?i.value=f:null),class:"select-input",placeholder:n.inputPlaceholder,clearable:""},null,8,["modelValue","placeholder"]),c(w,{value:a(u).value,label:a(u).label,style:{height:"200px",overflow:"auto",background:"#fff"}},{default:V(()=>[c(P,{ref_key:"treeRef",ref:d,"node-key":a(u).value,data:a(k),"highlight-current":"","filter-node-method":g,props:a(u),onNodeClick:x},null,8,["node-key","data","props"])]),_:1},8,["value","label"])]),_:1},8,["modelValue","placeholder","style"])])}}});const te=U(j,[["__scopeId","data-v-aeaa278b"]]);export{te as default};
