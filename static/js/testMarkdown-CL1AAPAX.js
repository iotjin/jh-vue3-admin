import{y as P,P as W,c as Y,d as q}from"./element-plus-Ct1QZ7r2.js";import{c as $,a as K,T as U}from"./@toast-ui-CRT8MB3X.js";import"./tui-color-picker-_dU-y4Fi.js";/* empty css                */import{_ as z}from"./index-BC6l71ah.js";import{bd as J,aM as L,q as B,bs as M,ax as Q,at as A,aE as N,u as j,bc as s,a0 as X,M as Z,aK as ee,b8 as te,v as m,I as n,bx as u,H as c,af as g,b3 as oe,an as ae,aI as ne,aF as le}from"./@vue-CoMmDMzr.js";import"./lodash-es-gvlvjXa_.js";import"./async-validator-9PlIezaS.js";import"./@vueuse-D6u4ZN3M.js";import"./dayjs-wmEaokm2.js";import"./@sxzz-C5az9QE8.js";import"./@element-plus-BalTIisK.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-BQoi3Ox2.js";import"./prosemirror-model-B328Wvas.js";import"./orderedmap-C4TimWWB.js";import"./prosemirror-view-DFASHA0I.js";import"./prosemirror-state-BBUlS3Rk.js";import"./prosemirror-transform-DciyPmAb.js";import"./prosemirror-keymap-Cz7QBVou.js";import"./w3c-keyname-DEtA-KhA.js";import"./prosemirror-commands-DNSxBmlI.js";import"./prosemirror-inputrules-wD4-RaKx.js";import"./prosemirror-history-D3KL22s1.js";import"./rope-sequence-Cxv9J64N.js";import"./pinia-DwnVM2Wc.js";import"./vue-router-yxxT8OQ1.js";import"./crypto-js-Bu58_DmT.js";import"./axios-Br0q4W-C.js";import"./js-cookie-Cz0CWeBA.js";import"./vue-i18n-B1C7LRPU.js";import"./@intlify-BrJyA8n2.js";import"./vue-Bx2gYYT6.js";import"./vue-draggable-plus-DhJv0LDf.js";import"./nprogress-CE_4fpfM.js";import"./mockjs-Dtt1g_gK.js";import"./vite-plugin-mock-BGB471xa.js";import"./path-to-regexp-BzK_ZY7n.js";const ie={minHeight:"200px",previewStyle:"vertical",useCommandShortcut:!0,useDefaultHTMLSanitizer:!0,usageStatistics:!1,hideModeSwitch:!1,toolbarItems:[["heading","bold","italic","strike"],["hr","quote"],["ul","ol","task","indent","outdent"],["table","image","link"],["code","codeblock"]]},se=["id"],de={__name:"index",props:{modelValue:{type:String,default:""},id:{type:String,default:()=>"markdown-editor-"+Date.now()+"-"+Math.floor(Math.random()*1e3)},options:{type:Object,default:()=>({})},mode:{type:String,default:"markdown"},height:{type:String,default:"300px"},language:{type:String,default:"zh-CN"},isViewer:{type:Boolean,default:!1}},emits:["update:modelValue","uploadImageEvent"],setup(v,{expose:_,emit:h}){const i=h;J();const a=v;let e=null;const k=L(a.id),d=X(),H=B(()=>{var t;return d!=null&&d.vnode?typeof((t=d.vnode.props)==null?void 0:t.onUploadImageEvent)=="function":!1}),S=B(()=>{const t=Object.assign({},ie,a.options);return t.initialEditType=a.mode,t.height=a.height,t.language=a.language,t.plugins=[$,K],t});M(()=>a.modelValue,(t,r)=>{e&&(a.isViewer||t!==r&&t!==e.getMarkdown())&&e.setMarkdown(t)}),M(()=>a.language,()=>{w(),x()}),M(()=>a.height,t=>{e&&e.height(t)}),M(()=>a.mode,t=>{e&&e.changeMode(t)}),M(()=>a.isViewer,()=>{w(),x()}),Q(()=>{x()}),A(()=>{w()});const x=()=>{const t=document.getElementById(k.value);t&&(a.isViewer?e=U.factory({el:t,...S.value,viewer:!0}):(e=new U({el:t,...S.value}),e.on("change",()=>{const r=e.getMarkdown();i("update:modelValue",r)})),a.modelValue&&e.setMarkdown(a.modelValue),e.addHook("addImageBlobHook",(r,E)=>{if(H.value)i("uploadImageEvent",r,E);else{const I=new FileReader;I.onload=({target:V})=>{E((V==null?void 0:V.result)||"")},I.readAsDataURL(r)}}))},w=()=>{e&&(e.off("change"),e.destroy(),e=null)};return _({setValue:t=>e==null?void 0:e.setMarkdown(t),getValue:()=>e==null?void 0:e.getMarkdown(),setHtml:t=>e==null?void 0:e.setHTML(t),getHtml:()=>e==null?void 0:e.getHTML()}),(t,r)=>(N(),j("div",{id:s(k)},null,8,se))}},y=z(de,[["__scopeId","data-v-c752cd64"]]),R=v=>(ne("data-v-6da7a4b4"),v=v(),le(),v),re={style:{padding:"20px",background:"white"}},ue={class:"editor-container"},me=R(()=>m("a",{href:"https://github.com/nhnent/tui.editor",target:"_blank",style:{color:"red"}},"tui.editor",-1)),pe=R(()=>m("a",{target:"_blank",href:"https://panjiachen.github.io/vue-element-admin-site/feature/component/markdown-editor.html",style:{color:"red"}}," Documentation ",-1)),ce={class:"editor-container"},ge={class:"editor-container"},fe={class:"editor-container"},he={class:"editor-container"},we={class:"editor-container",style:{display:"flex","justify-content":"space-around"}},ve=["innerHTML"],ke=R(()=>m("div",{id:"viewer-container"},null,-1)),D=`**This is test**
  
  * vue
  * element
  * webpack
  
  ## Normal Table
  
  | Name  | Age | City     |
  |-------|-----|----------|
  | Alice | 25  | Tokyo    |
  | Bob   | 30  | New York |
  | Eva   | 28  | London   |
  
  ## Color Syntax Plugin
  
  <span style="color:#86c1b9">Click the color picker button on the toolbar!</span>
  
  ## Code Syntax Highlighting Plugin
  
  \`\`\`javascript
  console.log('foo')
  \`\`\`
  
  \`\`\`html
  <div id="editor"><span>baz</span></div>
  \`\`\`
  `,ye=`![image](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)
  
  # Awesome Editor!
  
  It has been *released as opensource in 2018* and has~~continually~~evolved to **receive 10k GitHub ⭐️ Stars**.
  
  ## Create Instance
  
  You can create an instance with the following code and use \`getHtml()\` and \`getMarkdown()\` of the [Editor](https://github.com/nhn/tui.editor).
  
  \`\`\`js
  const editor = new Editor(options);
  \`\`\`
  
  | name | type | description |
  | ---- | ---- | ----------- |
  | el | \`HTMLElement\` | container element |
  
  ## Features
  
  * CommonMark + GFM Specifications
      * Live Preview
      * Scroll Sync
      * Auto Indent
      * Syntax Highlight
          1. Markdown
          2. Preview
  
  ## Support Wrappers
  
  > * Wrappers
  >     1. [x] React
  >     2. [x] Vue
  >     3. [ ] Ember
  `,_e=Z({__name:"testMarkdown",setup(v){const _=L(),h=L(),i=ee({editor:null,content1:D,content2:D,content3:D,content4:ye,htmlValue:"",markdownValue:"",languageTypeList:{en:"en-US",zh:"zh-CN",zh_tw:"zh-TW"},toolbarItems:[["heading","bold","italic","strike"]],isShowDialog:!1,isShowDialog2:!1,isShowDialog3:!1}),{content1:a,content2:e,content3:k,content4:d,htmlValue:H,markdownValue:S,toolbarItems:x,isShowDialog:w,isShowDialog2:t,isShowDialog3:r}=te(i),E=B(()=>i.languageTypeList.zh);function I(p,o){console.log("file",p),console.log("callback",o);const f=new FileReader;f.onload=({target:b})=>{o((b==null?void 0:b.result)||"")},f.readAsDataURL(p)}function V(){_.value&&(i.htmlValue=_.value.getHtml(),i.isShowDialog=!0)}function O(){h.value&&(i.markdownValue=h.value.getValue(),i.isShowDialog2=!0)}function F(){h.value&&(i.markdownValue=h.value.getValue(),i.isShowDialog3=!0)}function G(){ae(()=>{var o;const p=document.getElementById("viewer-container");p&&((o=i.editor)==null||o.destroy(),i.editor=U.factory({el:p,viewer:!0,initialValue:i.markdownValue}))})}return A(()=>{var p;(p=i.editor)==null||p.destroy()}),(p,o)=>{const f=P,b=W,T=Y,C=q;return N(),j("div",re,[m("div",ue,[n(f,null,{default:u(()=>[c(" Markdown is based on "),me,c(" ，simply wrapped with Vue. "),pe]),_:1})]),m("div",ce,[n(f,{class:"tag-title"},{default:u(()=>[c("Basic:")]),_:1}),n(y,{modelValue:s(a),"onUpdate:modelValue":o[0]||(o[0]=l=>g(a)?a.value=l:null),height:"500px"},null,8,["modelValue"])]),m("div",ge,[n(f,{class:"tag-title"},{default:u(()=>[c("Markdown Mode:")]),_:1}),n(y,{ref_key:"markdownEditorRef",ref:_,modelValue:s(e),"onUpdate:modelValue":o[1]||(o[1]=l=>g(e)?e.value=l:null),options:{hideModeSwitch:!0,previewStyle:"tab"},height:"200px"},null,8,["modelValue"])]),m("div",fe,[n(f,{class:"tag-title"},{default:u(()=>[c("Customize Toolbar:")]),_:1}),n(y,{modelValue:s(k),"onUpdate:modelValue":o[2]||(o[2]=l=>g(k)?k.value=l:null),options:{toolbarItems:[["heading","bold","italic"],["image"]]},onUploadImageEvent:I},null,8,["modelValue"])]),m("div",he,[n(f,{class:"tag-title"},{default:u(()=>[c("I18n:")]),_:1}),n(b,{closable:!1,title:"You can change the language of the admin system to see the effect",type:"success"}),n(y,{ref_key:"markdownEditorRef2",ref:h,modelValue:s(d),"onUpdate:modelValue":o[3]||(o[3]=l=>g(d)?d.value=l:null),language:s(E),height:"300px"},null,8,["modelValue","language"])]),m("div",we,[n(T,{style:{"margin-top":"80px"},type:"primary",icon:"i-ep-document",onClick:V},{default:u(()=>[c("Get HTML")]),_:1}),n(T,{style:{"margin-top":"80px"},type:"primary",icon:"i-ep-document",onClick:O},{default:u(()=>[c("Get Markdown - 组件内")]),_:1}),n(T,{style:{"margin-top":"80px"},type:"primary",icon:"i-ep-document",onClick:F},{default:u(()=>[c("Get Markdown2 - 页面实现")]),_:1})]),m("div",{innerHTML:s(H)},null,8,ve),m("pre",null,oe(s(S)),1),n(C,{title:"Html内容预览",modelValue:s(w),"onUpdate:modelValue":o[5]||(o[5]=l=>g(w)?w.value=l:null),"destroy-on-close":""},{default:u(()=>[n(y,{modelValue:s(e),"onUpdate:modelValue":o[4]||(o[4]=l=>g(e)?e.value=l:null),"is-viewer":""},null,8,["modelValue"])]),_:1},8,["modelValue"]),n(C,{title:"Markdown内容预览-组件内",modelValue:s(t),"onUpdate:modelValue":o[7]||(o[7]=l=>g(t)?t.value=l:null),"destroy-on-close":""},{default:u(()=>[n(y,{modelValue:s(d),"onUpdate:modelValue":o[6]||(o[6]=l=>g(d)?d.value=l:null),"is-viewer":""},null,8,["modelValue"])]),_:1},8,["modelValue"]),n(C,{title:"Markdown内容预览-页面实现",modelValue:s(r),"onUpdate:modelValue":o[8]||(o[8]=l=>g(r)?r.value=l:null),onOpen:G},{default:u(()=>[ke]),_:1},8,["modelValue"])])}}}),it=z(_e,[["__scopeId","data-v-6da7a4b4"]]);export{it as default};
