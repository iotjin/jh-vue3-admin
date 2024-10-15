import{i as Z}from"./vue-demi-Dq6ymT-8.js";import{ak as H,r as V,aj as B,H as $,w as G,_ as A,l as C,av as L,p as D,aw as T,g as tt,b as et,n as st,t as nt,$ as ot,k as ct}from"./@vue-ROmf2CMa.js";/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let J;const R=t=>J=t,N=Symbol();function E(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var x;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(x||(x={}));function vt(){const t=H(!0),n=t.run(()=>V({}));let s=[],e=[];const r=B({install(u){R(r),r._a=u,u.provide(N,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!Z?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:n});return r}const q=()=>{};function F(t,n,s,e=q){t.push(n);const r=()=>{const u=t.indexOf(n);u>-1&&(t.splice(u,1),e())};return!s&&tt()&&et(r),r}function P(t,...n){t.slice().forEach(s=>{s(...n)})}const rt=t=>t();function I(t,n){t instanceof Map&&n instanceof Map&&n.forEach((s,e)=>t.set(e,s)),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const s in n){if(!n.hasOwnProperty(s))continue;const e=n[s],r=t[s];E(r)&&E(e)&&t.hasOwnProperty(s)&&!C(e)&&!L(e)?t[s]=I(r,e):t[s]=e}return t}const ut=Symbol();function at(t){return!E(t)||!t.hasOwnProperty(ut)}const{assign:v}=Object;function ft(t){return!!(C(t)&&t.effect)}function it(t,n,s,e){const{state:r,actions:u,getters:f}=n,a=s.state.value[t];let g;function b(){a||(s.state.value[t]=r?r():{});const y=ot(s.state.value[t]);return v(y,u,Object.keys(f||{}).reduce((m,_)=>(m[_]=B(ct(()=>{R(s);const d=s._s.get(t);return f[_].call(d,d)})),m),{}))}return g=z(t,b,n,s,e,!0),g}function z(t,n,s={},e,r,u){let f;const a=v({actions:{}},s),g={deep:!0};let b,y,m=[],_=[],d;const j=e.state.value[t];!u&&!j&&(e.state.value[t]={}),V({});let W;function O(c){let o;b=y=!1,typeof c=="function"?(c(e.state.value[t]),o={type:x.patchFunction,storeId:t,events:d}):(I(e.state.value[t],c),o={type:x.patchObject,payload:c,storeId:t,events:d});const h=W=Symbol();st().then(()=>{W===h&&(b=!0)}),y=!0,P(m,o,e.state.value[t])}const K=u?function(){const{state:o}=s,h=o?o():{};this.$patch(S=>{v(S,h)})}:q;function M(){f.stop(),m=[],_=[],e._s.delete(t)}function Q(c,o){return function(){R(e);const h=Array.from(arguments),S=[],k=[];function X(i){S.push(i)}function Y(i){k.push(i)}P(_,{args:h,name:c,store:l,after:X,onError:Y});let p;try{p=o.apply(this&&this.$id===t?this:l,h)}catch(i){throw P(k,i),i}return p instanceof Promise?p.then(i=>(P(S,i),i)).catch(i=>(P(k,i),Promise.reject(i))):(P(S,p),p)}}const U={_p:e,$id:t,$onAction:F.bind(null,_),$patch:O,$reset:K,$subscribe(c,o={}){const h=F(m,c,o.detached,()=>S()),S=f.run(()=>G(()=>e.state.value[t],k=>{(o.flush==="sync"?y:b)&&c({storeId:t,type:x.direct,events:d},k)},v({},g,o)));return h},$dispose:M},l=A(U);e._s.set(t,l);const w=(e._a&&e._a.runWithContext||rt)(()=>e._e.run(()=>(f=H()).run(n)));for(const c in w){const o=w[c];if(C(o)&&!ft(o)||L(o))u||(j&&at(o)&&(C(o)?o.value=j[c]:I(o,j[c])),e.state.value[t][c]=o);else if(typeof o=="function"){const h=Q(c,o);w[c]=h,a.actions[c]=o}}return v(l,w),v(D(l),w),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{O(o=>{v(o,c)})}}),e._p.forEach(c=>{v(l,f.run(()=>c({store:l,app:e._a,pinia:e,options:a})))}),j&&u&&s.hydrate&&s.hydrate(l.$state,j),b=!0,y=!0,l}function yt(t,n,s){let e,r;const u=typeof n=="function";typeof t=="string"?(e=t,r=u?s:n):(r=t,e=t.id);function f(a,g){const b=T();return a=a||(b?$(N,null):null),a&&R(a),a=J,a._s.has(e)||(u?z(e,n,r,a):it(e,r,a)),a._s.get(e)}return f.$id=e,f}function St(t){{t=D(t);const n={};for(const s in t){const e=t[s];(C(e)||L(e))&&(n[s]=nt(t,s))}return n}}export{vt as c,yt as d,St as s};
