import{C as v,D as M}from"./element-plus-52aa6b43.js";import{T as m,J as Y,a as J}from"./timeUtils-a990067c.js";import{d as x,i as S,o as $,c as I,X as o,Q as l,V as c,W as p,u as f}from"./@vue-7d0fc2b4.js";import"./lodash-es-d29772ce.js";import"./async-validator-dee29e8b.js";import"./@vueuse-d1e6df39.js";import"./dayjs-78f57161.js";import"./@intlify-999e9484.js";import"./source-map-7d7e1c08.js";import"./@element-plus-975622b8.js";import"./@ctrl-f8748455.js";import"./@sxzz-c75af06c.js";import"./escape-html-bdfaebd7.js";import"./normalize-wheel-es-ed76fb12.js";const B={Jh_getTimeStamp:b,Jh_timeStampToTime:_,Jh_convertTimeStamp:T,Jh_timeStampToYMD:C,Jh_isToday:E,Jh_getYearMonth:P,Jh_getPrevYear:U,Jh_getNextYear:O,Jh_getPrevYearMonth:V,Jh_getNextYearMonth:j,Jh_compareTimes:W,Jh_isBetweenTimes:H,Jh_isBetweenTimesByCurrent:L,Jh_isBetweenTimesByCurrentAndEndTime:Q,getEndTime:F,startOfDay:k,endOfDay:A},N=B;function b(){return new Date().getTime()}function _(t,e){if(arguments.length===0)return null;const n=e||"{y}-{m}-{d} {h}:{i}:{s}";let r;typeof t=="object"?console.log():((""+t).length===10&&(t=parseInt(t)*1e3),r=new Date(t));const a={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),w:r.getDay()};return n.replace(/{(y|m|d|h|i|s|w)+}/g,(g,i)=>{let s=a[i];return i==="w"?["日","一","二","三","四","五","六"][s]:(g.length>0&&s<10&&(s="0"+s),s||0)})}function T(t){let e=t.replace(/-|\./g,"/");return e=e.replace(/年/g,"/"),e=e.replace(/月/g,"/"),e=e.replace(/日/g,""),e.length===4&&(e=e+"/01/01 00:00:00"),e.length===7&&(e=e+"/01 00:00:00"),e.length===10&&(e=e+" 00:00:00"),e.length===16&&(e=e+":00"),Date.parse(e)}function C(t,e){return t=t||b(),e?_(t,e):_(t,"{y}/{m}/{d}")}function E(t){let e=t.replace(/-/g,"");e=e.substring(0,8);var n=new Date().getTime();return n=_(n,"{y}{m}{d}"),e===n}function P(){const t=Date.parse(new Date);return _(t,"{y}-{m}")}function U(t){let e=t.substring(0,4);e=parseInt(e),e=e-1;const n=t.substring(4,5);let r="";return n==="年"?r=e+"年":r=e+n,r}function O(t){let e=t.substring(0,4);e=parseInt(e),e=e+1;const n=t.substring(4,5);let r="";return n==="年"?r=e+"年":r=e+n,r}function V(t){let e=t.substring(0,4),n=t.substring(5,7);e=parseInt(e),n=parseInt(n),n=n-1,n===0&&(e=e-1,n=12),n<10&&(n="0"+n);const r=t.substring(4,5);let a="";return r==="年"?a=e+"年"+n+"月":a=e+r+n,a}function j(t){let e=t.substring(0,4),n=t.substring(5,7);e=parseInt(e),n=parseInt(n),n=n+1,n===13&&(e=e+1,n=1),n<10&&(n="0"+n);const r=t.substring(4,5);let a="";return r==="年"?a=e+"年"+n+"月":a=e+r+n,a}function F(t){var e=new Date(t).getFullYear(),n=new Date(t).getMonth()+1,r=new Date(t).getDate(),a=new Date,w=new Date(new Date(t).toLocaleDateString()),g=w.getTime()-a.getTime(),i=parseInt(g/1e3),s=Math.floor(i/(60*60*24)),h=Math.floor((i-s*24*60*60)/3600),D=Math.floor((i-s*24*60*60-h*3600)/60),d=Math.floor(i-s*60*60*24-h*60*60-D*60);return`距离${e}年${n}月${r}日还有${s}天${h}小时${D}分${d}秒`}function k(t){return t?t.substr(0,10)+" 00:00:00":""}function A(t){return t?t.substr(0,10)+" 23:59:59":""}function H(t,e,n){return t=t.replace(/-/g,"/"),e=e.replace(/-/g,"/"),n=n.replace(/-/g,"/"),t=new Date(t),e=new Date(e),n=new Date(n),e<=t&&t<=n}function L(t,e){t=t.replace(/-/g,"/"),e=e.replace(/-/g,"/"),t=new Date(t),e=new Date(e);const n=new Date;return t<=n&&n<=e}function Q(t,e){const n=new Date;return t=t.replace(/-/g,"/"),e=e.replace(/-/g,"/"),t=new Date(t),e=new Date(e),n<=t&&t<=e}function W(t,e){const n=T(t),r=T(e);return n>r}const ue=x({__name:"testTime",setup(t){const e=m.Jh_getTimeStamp(),n=N.Jh_getTimeStamp(),r=Y(),a=J(new Date().getTime(),"{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}"),w=m.Jh_timeStampToTime(new Date().getTime(),"{y}-{m}-{d} {h}:{i}:{s}"),g=m.Jh_timeStampToYMD(),i=m.Jh_getYearMonth(),s=m.Jh_getPrevYear(J(e,"{y}")),h=m.Jh_getPrevYearMonth(i),D=m.Jh_getNextYearMonth(i),d=m.Jh_getNextYear(J(e,"{y}"));return S(()=>{}),(X,q)=>{const u=v,y=M;return $(),I("div",null,[o(y,{title:"TimeUtils",column:1,border:""},{default:l(()=>[o(u,{width:"50px",label:"时间戳"},{default:l(()=>[c(p(f(e)),1)]),_:1}),o(u,{label:"时间戳"},{default:l(()=>[c(p(f(n)),1)]),_:1}),o(u,{label:"时间戳"},{default:l(()=>[c(p(f(r)),1)]),_:1}),o(u,{label:"时间戳 => 指定格式( '{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}' )"},{default:l(()=>[c(p(f(a)),1)]),_:1}),o(u,{label:"时间戳 => 指定格式( '{y}-{m}-{d} {h}:{i}:{s}' )"},{default:l(()=>[c(p(f(w)),1)]),_:1}),o(u,{label:"时间戳 => 年月日"},{default:l(()=>[c(p(f(g)),1)]),_:1}),o(u,{label:"上一年"},{default:l(()=>[c(p(f(s)),1)]),_:1}),o(u,{label:"上一年月"},{default:l(()=>[c(p(f(h)),1)]),_:1}),o(u,{label:"当前年月"},{default:l(()=>[c(p(f(i)),1)]),_:1}),o(u,{label:"下一年月"},{default:l(()=>[c(p(f(D)),1)]),_:1}),o(u,{label:"下一年"},{default:l(()=>[c(p(f(d)),1)]),_:1})]),_:1})])}}});export{ue as default};
