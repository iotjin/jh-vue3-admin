import{b as W,i as le,d as N,z as se,h as U,b6 as te,A as I,bF as ae,a as F,c as j,j as M,e as D,n as v,f as e,t as ne,C as O,w as k,k as q,l as re,E as ie,F as K,D as X,_ as Y,bG as ue,g as ce,ai as Q,aj as de,bH as fe,y as Z,r as E,bI as me,bJ as pe,B as ge,bK as ve,R as G,a6 as ye,o as be,m as Ce,Z as J,bc as he,bE as ke,M as H,u as De,p as Ee,W as Ie,bL as Be,bM as Fe,v as Ae,b5 as Te,X as we,T as Se,bN as $e,bO as Pe,q as Re}from"./index-79c64a0f.js";import{c as Me}from"./refs-b81c3a08.js";const x=Symbol("dialogInjectionKey"),ee=W({center:Boolean,alignCenter:Boolean,closeIcon:{type:le},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Oe={close:()=>!0},Ne=["aria-label"],Le=["id"],ze=N({name:"ElDialogContent"}),Ve=N({...ze,props:ee,emits:Oe,setup(o){const a=o,{t:y}=se(),{Close:i}=ue,{dialogRef:u,headerRef:m,bodyId:A,ns:t,style:n}=U(x),{focusTrapRef:p}=U(te),c=I(()=>[t.b(),t.is("fullscreen",a.fullscreen),t.is("draggable",a.draggable),t.is("align-center",a.alignCenter),{[t.m("center")]:a.center},a.customClass]),b=Me(p,u),d=I(()=>a.draggable);return ae(u,m,d),(s,B)=>(F(),j("div",{ref:e(b),class:v(e(c)),style:X(e(n)),tabindex:"-1"},[M("header",{ref_key:"headerRef",ref:m,class:v(e(t).e("header"))},[D(s.$slots,"header",{},()=>[M("span",{role:"heading",class:v(e(t).e("title"))},ne(s.title),3)]),s.showClose?(F(),j("button",{key:0,"aria-label":e(y)("el.dialog.close"),class:v(e(t).e("headerbtn")),type:"button",onClick:B[0]||(B[0]=$=>s.$emit("close"))},[O(e(ie),{class:v(e(t).e("close"))},{default:k(()=>[(F(),q(re(s.closeIcon||e(i))))]),_:1},8,["class"])],10,Ne)):K("v-if",!0)],2),M("div",{id:e(A),class:v(e(t).e("body"))},[D(s.$slots,"default")],10,Le),s.$slots.footer?(F(),j("footer",{key:0,class:v(e(t).e("footer"))},[D(s.$slots,"footer")],2)):K("v-if",!0)],6))}});var _e=Y(Ve,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const je=W({...ee,appendToBody:Boolean,beforeClose:{type:ce(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),qe={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[Q]:o=>de(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ke=(o,a)=>{const i=Ce().emit,{nextZIndex:u}=fe();let m="";const A=Z(),t=Z(),n=E(!1),p=E(!1),c=E(!1),b=E(o.zIndex||u());let d,s;const B=me("namespace",pe),$=I(()=>{const r={},h=`--${B.value}-dialog`;return o.fullscreen||(o.top&&(r[`${h}-margin-top`]=o.top),o.width&&(r[`${h}-width`]=ge(o.width))),r}),L=I(()=>o.alignCenter?{display:"flex"}:{});function z(){i("opened")}function P(){i("closed"),i(Q,!1),o.destroyOnClose&&(c.value=!1)}function V(){i("close")}function R(){s==null||s(),d==null||d(),o.openDelay&&o.openDelay>0?{stop:d}=J(()=>f(),o.openDelay):f()}function T(){d==null||d(),s==null||s(),o.closeDelay&&o.closeDelay>0?{stop:s}=J(()=>S(),o.closeDelay):S()}function w(){function r(h){h||(p.value=!0,n.value=!1)}o.beforeClose?o.beforeClose(r):T()}function _(){o.closeOnClickModal&&w()}function f(){he&&(n.value=!0)}function S(){n.value=!1}function l(){i("openAutoFocus")}function g(){i("closeAutoFocus")}function C(r){var h;((h=r.detail)==null?void 0:h.focusReason)==="pointer"&&r.preventDefault()}o.lockScroll&&ve(n);function oe(){o.closeOnPressEscape&&w()}return G(()=>o.modelValue,r=>{r?(p.value=!1,R(),c.value=!0,b.value=o.zIndex?b.value++:u(),ye(()=>{i("open"),a.value&&(a.value.scrollTop=0)})):n.value&&T()}),G(()=>o.fullscreen,r=>{a.value&&(r?(m=a.value.style.transform,a.value.style.transform=""):a.value.style.transform=m)}),be(()=>{o.modelValue&&(n.value=!0,c.value=!0,R())}),{afterEnter:z,afterLeave:P,beforeLeave:V,handleClose:w,onModalClick:_,close:T,doClose:S,onOpenAutoFocus:l,onCloseAutoFocus:g,onCloseRequested:oe,onFocusoutPrevented:C,titleId:A,bodyId:t,closed:p,style:$,overlayDialogStyle:L,rendered:c,visible:n,zIndex:b}},Ue=["aria-label","aria-labelledby","aria-describedby"],Ze=N({name:"ElDialog",inheritAttrs:!1}),Ge=N({...Ze,props:je,emits:qe,setup(o,{expose:a}){const y=o,i=ke();H({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},I(()=>!!i.title)),H({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},I(()=>!!y.customClass));const u=De("dialog"),m=E(),A=E(),t=E(),{visible:n,titleId:p,bodyId:c,style:b,overlayDialogStyle:d,rendered:s,zIndex:B,afterEnter:$,afterLeave:L,beforeLeave:z,handleClose:P,onModalClick:V,onOpenAutoFocus:R,onCloseAutoFocus:T,onCloseRequested:w,onFocusoutPrevented:_}=Ke(y,m);Ee(x,{dialogRef:m,headerRef:A,bodyId:c,ns:u,rendered:s,style:b});const f=Pe(V),S=I(()=>y.draggable&&!y.fullscreen);return a({visible:n,dialogContentRef:t}),(l,g)=>(F(),q($e,{to:"body",disabled:!l.appendToBody},[O(Se,{name:"dialog-fade",onAfterEnter:e($),onAfterLeave:e(L),onBeforeLeave:e(z),persisted:""},{default:k(()=>[Ie(O(e(Be),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(B)},{default:k(()=>[M("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(p),"aria-describedby":e(c),class:v(`${e(u).namespace.value}-overlay-dialog`),style:X(e(d)),onClick:g[0]||(g[0]=(...C)=>e(f).onClick&&e(f).onClick(...C)),onMousedown:g[1]||(g[1]=(...C)=>e(f).onMousedown&&e(f).onMousedown(...C)),onMouseup:g[2]||(g[2]=(...C)=>e(f).onMouseup&&e(f).onMouseup(...C))},[O(e(Fe),{loop:"",trapped:e(n),"focus-start-el":"container",onFocusAfterTrapped:e(R),onFocusAfterReleased:e(T),onFocusoutPrevented:e(_),onReleaseRequested:e(w)},{default:k(()=>[e(s)?(F(),q(_e,Ae({key:0,ref_key:"dialogContentRef",ref:t},l.$attrs,{"custom-class":l.customClass,center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(S),fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,onClose:e(P)}),Te({header:k(()=>[l.$slots.title?D(l.$slots,"title",{key:1}):D(l.$slots,"header",{key:0,close:e(P),titleId:e(p),titleClass:e(u).e("title")})]),default:k(()=>[D(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:k(()=>[D(l.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):K("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Ue)]),_:3},8,["mask","overlay-class","z-index"]),[[we,e(n)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var Je=Y(Ge,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const Xe=Re(Je);export{Xe as E};
