import{r as _,w as F,g as pe,b as we,u as ye,e as R,f as X,n as q,i as J,s as he,j as ge,k as A,l as Ae,t as $e,m as Ce}from"./@vue-DBL8Ibom.js";var Ne=Object.defineProperty,De=Object.defineProperties,je=Object.getOwnPropertyDescriptors,ee=Object.getOwnPropertySymbols,xe=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable,te=(e,t,n)=>t in e?Ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Me=(e,t)=>{for(var n in t||(t={}))xe.call(t,n)&&te(e,n,t[n]);if(ee)for(var n of ee(t))ke.call(t,n)&&te(e,n,t[n]);return e},Ve=(e,t)=>De(e,je(t));function Dt(e,t){var n;const r=he();return ge(()=>{r.value=e()},Ve(Me({},t),{flush:(n=void 0)!=null?n:"sync"})),J(r)}var ne;const H=typeof window<"u",Le=e=>typeof e<"u",Re=e=>typeof e=="function",We=e=>typeof e=="string",V=()=>{},Qe=H&&((ne=window==null?void 0:window.navigator)==null?void 0:ne.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function L(e){return typeof e=="function"?e():ye(e)}function be(e,t){function n(...r){return new Promise((i,o)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(i).catch(o)})}return n}function ze(e,t={}){let n,r,i=V;const o=u=>{clearTimeout(u),i(),i=V};return u=>{const f=L(e),v=L(t.maxWait);return n&&o(n),f<=0||v!==void 0&&v<=0?(r&&(o(r),r=null),Promise.resolve(u())):new Promise((s,d)=>{i=t.rejectOnCancel?d:s,v&&!r&&(r=setTimeout(()=>{n&&o(n),r=null,s(u())},v)),n=setTimeout(()=>{r&&o(r),r=null,s(u())},f)})}}function Be(e,t=!0,n=!0,r=!1){let i=0,o,l=!0,u=V,f;const v=()=>{o&&(clearTimeout(o),o=void 0,u(),u=V)};return d=>{const a=L(e),c=Date.now()-i,m=()=>f=d();return v(),a<=0?(i=Date.now(),m()):(c>a&&(n||!l)?(i=Date.now(),m()):t&&(f=new Promise((y,g)=>{u=r?g:y,o=setTimeout(()=>{i=Date.now(),l=!0,y(m()),v()},Math.max(0,a-c))})),!n&&!o&&(o=setTimeout(()=>l=!0,a)),l=!1,f)}}function qe(e){return e}function G(e){return pe()?(we(e),!0):!1}function Je(e,t=200,n={}){return be(ze(t,n),e)}function jt(e,t=200,n={}){const r=_(e.value),i=Je(()=>{r.value=e.value},t,n);return F(e,()=>i()),r}function xt(e,t=200,n=!1,r=!0,i=!1){return be(Be(t,n,r,i),e)}function He(e,t=!0){R()?X(e):t?e():q(e)}function kt(e,t,n={}){const{immediate:r=!0}=n,i=_(!1);let o=null;function l(){o&&(clearTimeout(o),o=null)}function u(){i.value=!1,l()}function f(...v){l(),i.value=!0,o=setTimeout(()=>{i.value=!1,o=null,e(...v)},L(t))}return r&&(i.value=!0,H&&f()),G(u),{isPending:J(i),start:f,stop:u}}function x(e){var t;const n=L(e);return(t=n==null?void 0:n.$el)!=null?t:n}const W=H?window:void 0,Ge=H?window.document:void 0;function M(...e){let t,n,r,i;if(We(e[0])||Array.isArray(e[0])?([n,r,i]=e,t=W):[t,n,r,i]=e,!t)return V;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const o=[],l=()=>{o.forEach(s=>s()),o.length=0},u=(s,d,a,c)=>(s.addEventListener(d,a,c),()=>s.removeEventListener(d,a,c)),f=F(()=>[x(t),L(i)],([s,d])=>{l(),s&&o.push(...n.flatMap(a=>r.map(c=>u(s,a,c,d))))},{immediate:!0,flush:"post"}),v=()=>{f(),l()};return G(v),v}let re=!1;function Mt(e,t,n={}){const{window:r=W,ignore:i=[],capture:o=!0,detectIframe:l=!1}=n;if(!r)return;Qe&&!re&&(re=!0,Array.from(r.document.body.children).forEach(a=>a.addEventListener("click",V)));let u=!0;const f=a=>i.some(c=>{if(typeof c=="string")return Array.from(r.document.querySelectorAll(c)).some(m=>m===a.target||a.composedPath().includes(m));{const m=x(c);return m&&(a.target===m||a.composedPath().includes(m))}}),s=[M(r,"click",a=>{const c=x(e);if(!(!c||c===a.target||a.composedPath().includes(c))){if(a.detail===0&&(u=!f(a)),!u){u=!0;return}t(a)}},{passive:!0,capture:o}),M(r,"pointerdown",a=>{const c=x(e);c&&(u=!a.composedPath().includes(c)&&!f(a))},{passive:!0}),l&&M(r,"blur",a=>{var c;const m=x(e);((c=r.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(m!=null&&m.contains(r.document.activeElement))&&t(a)})].filter(Boolean);return()=>s.forEach(a=>a())}function Oe(e,t=!1){const n=_(),r=()=>n.value=!!e();return r(),He(r,t),n}function Ke(e){return JSON.parse(JSON.stringify(e))}const ie=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},oe="__vueuse_ssr_handlers__";ie[oe]=ie[oe]||{};function Vt({document:e=Ge}={}){if(!e)return _("visible");const t=_(e.visibilityState);return M(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var ue=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,Ye=(e,t)=>{var n={};for(var r in e)Ue.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ue)for(var r of ue(e))t.indexOf(r)<0&&Xe.call(e,r)&&(n[r]=e[r]);return n};function Lt(e,t,n={}){const r=n,{window:i=W}=r,o=Ye(r,["window"]);let l;const u=Oe(()=>i&&"ResizeObserver"in i),f=()=>{l&&(l.disconnect(),l=void 0)},v=F(()=>x(e),d=>{f(),u.value&&i&&d&&(l=new ResizeObserver(t),l.observe(d,o))},{immediate:!0,flush:"post"}),s=()=>{f(),v()};return G(s),{isSupported:u,stop:s}}var ae=Object.getOwnPropertySymbols,Ze=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,tt=(e,t)=>{var n={};for(var r in e)Ze.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ae)for(var r of ae(e))t.indexOf(r)<0&&et.call(e,r)&&(n[r]=e[r]);return n};function Rt(e,t,n={}){const r=n,{window:i=W}=r,o=tt(r,["window"]);let l;const u=Oe(()=>i&&"MutationObserver"in i),f=()=>{l&&(l.disconnect(),l=void 0)},v=F(()=>x(e),d=>{f(),u.value&&i&&d&&(l=new MutationObserver(t),l.observe(d,o))},{immediate:!0}),s=()=>{f(),v()};return G(s),{isSupported:u,stop:s}}var se;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(se||(se={}));var nt=Object.defineProperty,le=Object.getOwnPropertySymbols,rt=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable,ce=(e,t,n)=>t in e?nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ot=(e,t)=>{for(var n in t||(t={}))rt.call(t,n)&&ce(e,n,t[n]);if(le)for(var n of le(t))it.call(t,n)&&ce(e,n,t[n]);return e};const ut={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ot({linear:qe},ut);function Wt(e,t,n,r={}){var i,o,l;const{clone:u=!1,passive:f=!1,eventName:v,deep:s=!1,defaultValue:d}=r,a=R(),c=(a==null?void 0:a.emit)||((i=a==null?void 0:a.$emit)==null?void 0:i.bind(a))||((l=(o=a==null?void 0:a.proxy)==null?void 0:o.$emit)==null?void 0:l.bind(a==null?void 0:a.proxy));let m=v;m=v||m||`update:${t.toString()}`;const y=p=>u?Re(u)?u(p):Ke(p):p,g=()=>Le(e[t])?y(e[t]):d;if(f){const p=g(),S=_(p);return F(()=>e[t],h=>S.value=y(h)),F(S,h=>{(h!==e[t]||s)&&c(m,h)},{deep:s}),S}else return A({get(){return g()},set(p){c(m,p)}})}function Qt({window:e=W}={}){if(!e)return _(!1);const t=_(e.document.hasFocus());return M(e,"blur",()=>{t.value=!1}),M(e,"focus",()=>{t.value=!0}),t}function K(e){return pe()?(we(e),!0):!1}function O(e){return typeof e=="function"?e():ye(e)}const Y=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const at=e=>typeof e<"u",st=Object.prototype.toString,lt=e=>st.call(e)==="[object Object]",k=()=>{},ct=ft();function ft(){var e,t;return Y&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function _e(e,t){function n(...r){return new Promise((i,o)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(i).catch(o)})}return n}const Se=e=>e();function dt(e,t={}){let n,r,i=k;const o=u=>{clearTimeout(u),i(),i=k};return u=>{const f=O(e),v=O(t.maxWait);return n&&o(n),f<=0||v!==void 0&&v<=0?(r&&(o(r),r=null),Promise.resolve(u())):new Promise((s,d)=>{i=t.rejectOnCancel?d:s,v&&!r&&(r=setTimeout(()=>{n&&o(n),r=null,s(u())},v)),n=setTimeout(()=>{r&&o(r),r=null,s(u())},f)})}}function vt(e=Se){const t=_(!0);function n(){t.value=!1}function r(){t.value=!0}const i=(...o)=>{t.value&&e(...o)};return{isActive:J(t),pause:n,resume:r,eventFilter:i}}function mt(e,t=!1,n="Timeout"){return new Promise((r,i)=>{setTimeout(t?()=>i(n):r,e)})}function Ee(e){return e}function pt(e){return R()}function wt(...e){if(e.length!==1)return $e(...e);const t=e[0];return typeof t=="function"?J(Ce(()=>({get:t,set:k}))):_(t)}function zt(e,t=200,n={}){return _e(dt(t,n),e)}function yt(e,t,n={}){const{eventFilter:r=Se,...i}=n;return F(e,_e(r,t),i)}function ht(e,t,n={}){const{eventFilter:r,...i}=n,{eventFilter:o,pause:l,resume:u,isActive:f}=vt(r);return{stop:yt(e,t,{...i,eventFilter:o}),pause:l,resume:u,isActive:f}}function Z(e,t=!0,n){pt()?X(e,n):t?e():q(e)}function Bt(e=!1,t={}){const{truthyValue:n=!0,falsyValue:r=!1}=t,i=Ae(e),o=_(e);function l(u){if(arguments.length)return o.value=u,o.value;{const f=O(n);return o.value=o.value===f?O(r):f,o.value}}return i?l:[o,l]}function j(e){var t;const n=O(e);return(t=n==null?void 0:n.$el)!=null?t:n}const N=Y?window:void 0,gt=Y?window.document:void 0;function C(...e){let t,n,r,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,i]=e,t=N):[t,n,r,i]=e,!t)return k;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const o=[],l=()=>{o.forEach(s=>s()),o.length=0},u=(s,d,a,c)=>(s.addEventListener(d,a,c),()=>s.removeEventListener(d,a,c)),f=F(()=>[j(t),O(i)],([s,d])=>{if(l(),!s)return;const a=lt(d)?{...d}:d;o.push(...n.flatMap(c=>r.map(m=>u(s,c,m,a))))},{immediate:!0,flush:"post"}),v=()=>{f(),l()};return K(v),v}let fe=!1;function qt(e,t,n={}){const{window:r=N,ignore:i=[],capture:o=!0,detectIframe:l=!1}=n;if(!r)return k;ct&&!fe&&(fe=!0,Array.from(r.document.body.children).forEach(a=>a.addEventListener("click",k)),r.document.documentElement.addEventListener("click",k));let u=!0;const f=a=>i.some(c=>{if(typeof c=="string")return Array.from(r.document.querySelectorAll(c)).some(m=>m===a.target||a.composedPath().includes(m));{const m=j(c);return m&&(a.target===m||a.composedPath().includes(m))}}),s=[C(r,"click",a=>{const c=j(e);if(!(!c||c===a.target||a.composedPath().includes(c))){if(a.detail===0&&(u=!f(a)),!u){u=!0;return}t(a)}},{passive:!0,capture:o}),C(r,"pointerdown",a=>{const c=j(e);u=!f(a)&&!!(c&&!a.composedPath().includes(c))},{passive:!0}),l&&C(r,"blur",a=>{setTimeout(()=>{var c;const m=j(e);((c=r.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(m!=null&&m.contains(r.document.activeElement))&&t(a)},0)})].filter(Boolean);return()=>s.forEach(a=>a())}function bt(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function Jt(...e){let t,n,r={};e.length===3?(t=e[0],n=e[1],r=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],r=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:i=N,eventName:o="keydown",passive:l=!1,dedupe:u=!1}=r,f=bt(t);return C(i,o,s=>{s.repeat&&O(u)||f(s)&&n(s)},l)}function Ot(){const e=_(!1),t=R();return t&&X(()=>{e.value=!0},t),e}function Ie(e){const t=Ot();return A(()=>(t.value,!!e()))}function Pe(e,t={}){const{window:n=N}=t,r=Ie(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let i;const o=_(!1),l=v=>{o.value=v.matches},u=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",l):i.removeListener(l))},f=ge(()=>{r.value&&(u(),i=n.matchMedia(O(e)),"addEventListener"in i?i.addEventListener("change",l):i.addListener(l),o.value=i.matches)});return K(()=>{f(),u(),i=void 0}),o}function _t(e){return JSON.parse(JSON.stringify(e))}const z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B="__vueuse_ssr_handlers__",St=Et();function Et(){return B in z||(z[B]=z[B]||{}),z[B]}function Fe(e,t){return St[e]||t}function It(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Pt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},de="vueuse-storage";function Ft(e,t,n,r={}){var i;const{flush:o="pre",deep:l=!0,listenToStorageChanges:u=!0,writeDefaults:f=!0,mergeDefaults:v=!1,shallow:s,window:d=N,eventFilter:a,onError:c=w=>{console.error(w)},initOnMounted:m}=r,y=(s?he:_)(typeof t=="function"?t():t);if(!n)try{n=Fe("getDefaultStorage",()=>{var w;return(w=N)==null?void 0:w.localStorage})()}catch(w){c(w)}if(!n)return y;const g=O(t),p=It(g),S=(i=r.serializer)!=null?i:Pt[p],{pause:h,resume:b}=ht(y,()=>I(y.value),{flush:o,deep:l,eventFilter:a});d&&u&&Z(()=>{C(d,"storage",T),C(d,de,Q),m&&T()}),m||T();function E(w,P){d&&d.dispatchEvent(new CustomEvent(de,{detail:{key:e,oldValue:w,newValue:P,storageArea:n}}))}function I(w){try{const P=n.getItem(e);if(w==null)E(P,null),n.removeItem(e);else{const D=S.write(w);P!==D&&(n.setItem(e,D),E(P,D))}}catch(P){c(P)}}function $(w){const P=w?w.newValue:n.getItem(e);if(P==null)return f&&g!=null&&n.setItem(e,S.write(g)),g;if(!w&&v){const D=S.read(P);return typeof v=="function"?v(D,g):p==="object"&&!Array.isArray(D)?{...g,...D}:D}else return typeof P!="string"?P:S.read(P)}function T(w){if(!(w&&w.storageArea!==n)){if(w&&w.key==null){y.value=g;return}if(!(w&&w.key!==e)){h();try{(w==null?void 0:w.newValue)!==S.write(y.value)&&(y.value=$(w))}catch(P){c(P)}finally{w?q(b):b()}}}}function Q(w){T(w.detail)}return y}function Te(e){return Pe("(prefers-color-scheme: dark)",e)}function Tt(e={}){const{selector:t="html",attribute:n="class",initialValue:r="auto",window:i=N,storage:o,storageKey:l="vueuse-color-scheme",listenToStorageChanges:u=!0,storageRef:f,emitAuto:v,disableTransition:s=!0}=e,d={auto:"",light:"light",dark:"dark",...e.modes||{}},a=Te({window:i}),c=A(()=>a.value?"dark":"light"),m=f||(l==null?wt(r):Ft(l,r,o,{window:i,listenToStorageChanges:u})),y=A(()=>m.value==="auto"?c.value:m.value),g=Fe("updateHTMLAttrs",(b,E,I)=>{const $=typeof b=="string"?i==null?void 0:i.document.querySelector(b):j(b);if(!$)return;let T;if(s&&(T=i.document.createElement("style"),T.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),i.document.head.appendChild(T)),E==="class"){const Q=I.split(/\s/g);Object.values(d).flatMap(w=>(w||"").split(/\s/g)).filter(Boolean).forEach(w=>{Q.includes(w)?$.classList.add(w):$.classList.remove(w)})}else $.setAttribute(E,I);s&&(i.getComputedStyle(T).opacity,document.head.removeChild(T))});function p(b){var E;g(t,n,(E=d[b])!=null?E:b)}function S(b){e.onChanged?e.onChanged(b,p):p(b)}F(y,S,{flush:"post",immediate:!0}),Z(()=>S(y.value));const h=A({get(){return v?m.value:y.value},set(b){m.value=b}});try{return Object.assign(h,{store:m,system:c,state:y})}catch{return h}}function Ht(e={}){const{valueDark:t="dark",valueLight:n="",window:r=N}=e,i=Tt({...e,onChanged:(u,f)=>{var v;e.onChanged?(v=e.onChanged)==null||v.call(e,u==="dark",f,u):f(u)},modes:{dark:t,light:n}}),o=A(()=>i.system?i.system.value:Te({window:r}).value?"dark":"light");return A({get(){return i.value==="dark"},set(u){const f=u?"dark":"light";o.value===f?i.value="auto":i.value=f}})}const ve=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Gt(e,t={}){const{document:n=gt,autoExit:r=!1}=t,i=A(()=>{var p;return(p=j(e))!=null?p:n==null?void 0:n.querySelector("html")}),o=_(!1),l=A(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(p=>n&&p in n||i.value&&p in i.value)),u=A(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(p=>n&&p in n||i.value&&p in i.value)),f=A(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(p=>n&&p in n||i.value&&p in i.value)),v=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(p=>n&&p in n),s=Ie(()=>i.value&&n&&l.value!==void 0&&u.value!==void 0&&f.value!==void 0),d=()=>v?(n==null?void 0:n[v])===i.value:!1,a=()=>{if(f.value){if(n&&n[f.value]!=null)return n[f.value];{const p=i.value;if((p==null?void 0:p[f.value])!=null)return!!p[f.value]}}return!1};async function c(){if(!(!s.value||!o.value)){if(u.value)if((n==null?void 0:n[u.value])!=null)await n[u.value]();else{const p=i.value;(p==null?void 0:p[u.value])!=null&&await p[u.value]()}o.value=!1}}async function m(){if(!s.value||o.value)return;a()&&await c();const p=i.value;l.value&&(p==null?void 0:p[l.value])!=null&&(await p[l.value](),o.value=!0)}async function y(){await(o.value?c():m())}const g=()=>{const p=a();(!p||p&&d())&&(o.value=p)};return C(n,ve,g,!1),C(()=>j(i),ve,g,!1),r&&K(c),{isSupported:s,isFullscreen:o,enter:m,exit:c,toggle:y}}const At={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]},Kt=Object.assign({},{linear:Ee},At);function $t([e,t,n,r]){const i=(s,d)=>1-3*d+3*s,o=(s,d)=>3*d-6*s,l=s=>3*s,u=(s,d,a)=>((i(d,a)*s+o(d,a))*s+l(d))*s,f=(s,d,a)=>3*i(d,a)*s*s+2*o(d,a)*s+l(d),v=s=>{let d=s;for(let a=0;a<4;++a){const c=f(d,e,n);if(c===0)return d;const m=u(d,e,n)-s;d-=m/c}return d};return s=>e===t&&n===r?s:u(v(s),t,r)}function me(e,t,n){return e+n*(t-e)}function U(e){return(typeof e=="number"?[e]:e)||[]}function Ct(e,t,n,r={}){var i,o;const l=O(t),u=O(n),f=U(l),v=U(u),s=(i=O(r.duration))!=null?i:1e3,d=Date.now(),a=Date.now()+s,c=typeof r.transition=="function"?r.transition:(o=O(r.transition))!=null?o:Ee,m=typeof c=="function"?c:$t(c);return new Promise(y=>{e.value=l;const g=()=>{var p;if((p=r.abort)!=null&&p.call(r)){y();return}const S=Date.now(),h=m((S-d)/s),b=U(e.value).map((E,I)=>me(f[I],v[I],h));Array.isArray(e.value)?e.value=b.map((E,I)=>{var $,T;return me(($=f[I])!=null?$:0,(T=v[I])!=null?T:0,h)}):typeof e.value=="number"&&(e.value=b[0]),S<a?requestAnimationFrame(g):(e.value=u,y())};g()})}function Ut(e,t={}){let n=0;const r=()=>{const o=O(e);return typeof o=="number"?o:o.map(O)},i=_(r());return F(r,async o=>{var l,u;if(O(t.disabled))return;const f=++n;if(t.delay&&await mt(O(t.delay)),f!==n)return;const v=Array.isArray(o)?o.map(O):O(o);(l=t.onStarted)==null||l.call(t),await Ct(i,i.value,v,{...t,abort:()=>{var s;return f!==n||((s=t.abort)==null?void 0:s.call(t))}}),(u=t.onFinished)==null||u.call(t)},{deep:!0}),F(()=>O(t.disabled),o=>{o&&(n++,i.value=r())}),K(()=>{n++}),A(()=>O(t.disabled)?r():i.value)}function Xt(e,t,n,r={}){var i,o,l;const{clone:u=!1,passive:f=!1,eventName:v,deep:s=!1,defaultValue:d,shouldEmit:a}=r,c=R(),m=n||(c==null?void 0:c.emit)||((i=c==null?void 0:c.$emit)==null?void 0:i.bind(c))||((l=(o=c==null?void 0:c.proxy)==null?void 0:o.$emit)==null?void 0:l.bind(c==null?void 0:c.proxy));let y=v;t||(t="modelValue"),y=y||`update:${t.toString()}`;const g=h=>u?typeof u=="function"?u(h):_t(h):h,p=()=>at(e[t])?g(e[t]):d,S=h=>{a?a(h)&&m(y,h):m(y,h)};if(f){const h=p(),b=_(h);let E=!1;return F(()=>e[t],I=>{E||(E=!0,b.value=g(I),q(()=>E=!1))}),F(b,I=>{!E&&(I!==e[t]||s)&&S(I)},{deep:s}),b}else return A({get(){return p()},set(h){S(h)}})}function Yt(e={}){const{window:t=N,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:r=Number.POSITIVE_INFINITY,listenOrientation:i=!0,includeScrollbar:o=!0}=e,l=_(n),u=_(r),f=()=>{t&&(o?(l.value=t.innerWidth,u.value=t.innerHeight):(l.value=t.document.documentElement.clientWidth,u.value=t.document.documentElement.clientHeight))};if(f(),Z(f),C("resize",f,{passive:!0}),i){const v=Pe("(orientation: portrait)");F(v,()=>f())}return{width:l,height:u}}export{Kt as T,Lt as a,x as b,kt as c,xt as d,Qe as e,Rt as f,Vt as g,Qt as h,H as i,Dt as j,Wt as k,Ft as l,zt as m,Jt as n,Mt as o,Ht as p,Gt as q,jt as r,Bt as s,G as t,M as u,Yt as v,qt as w,Xt as x,Ut as y};