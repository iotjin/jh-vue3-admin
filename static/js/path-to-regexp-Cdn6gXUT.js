function j(e){for(var n=[],t=0;t<e.length;){var r=e[t];if(r==="*"||r==="+"||r==="?"){n.push({type:"MODIFIER",index:t,value:e[t++]});continue}if(r==="\\"){n.push({type:"ESCAPED_CHAR",index:t++,value:e[t++]});continue}if(r==="{"){n.push({type:"OPEN",index:t,value:e[t++]});continue}if(r==="}"){n.push({type:"CLOSE",index:t,value:e[t++]});continue}if(r===":"){for(var o="",i=t+1;i<e.length;){var s=e.charCodeAt(i);if(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||s===95){o+=e[i++];continue}break}if(!o)throw new TypeError("Missing parameter name at ".concat(t));n.push({type:"NAME",index:t,value:o}),t=i;continue}if(r==="("){var u=1,p="",i=t+1;if(e[i]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(i));for(;i<e.length;){if(e[i]==="\\"){p+=e[i++]+e[i++];continue}if(e[i]===")"){if(u--,u===0){i++;break}}else if(e[i]==="("&&(u++,e[i+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(i));p+=e[i++]}if(u)throw new TypeError("Unbalanced pattern at ".concat(t));if(!p)throw new TypeError("Missing pattern at ".concat(t));n.push({type:"PATTERN",index:t,value:p}),t=i;continue}n.push({type:"CHAR",index:t,value:e[t++]})}return n.push({type:"END",index:t,value:""}),n}function K(e,n){n===void 0&&(n={});for(var t=j(e),r=n.prefixes,o=r===void 0?"./":r,i=n.delimiter,s=i===void 0?"/#?":i,u=[],p=0,c=0,f="",a=function(g){if(c<t.length&&t[c].type===g)return t[c++].value},l=function(g){var h=a(g);if(h!==void 0)return h;var $=t[c],S=$.type,W=$.index;throw new TypeError("Unexpected ".concat(S," at ").concat(W,", expected ").concat(g))},y=function(){for(var g="",h;h=a("CHAR")||a("ESCAPED_CHAR");)g+=h;return g},x=function(g){for(var h=0,$=s;h<$.length;h++){var S=$[h];if(g.indexOf(S)>-1)return!0}return!1},v=function(g){var h=u[u.length-1],$=g||(h&&typeof h=="string"?h:"");if(h&&!$)throw new TypeError('Must have text between two parameters, missing text after "'.concat(h.name,'"'));return!$||x($)?"[^".concat(C(s),"]+?"):"(?:(?!".concat(C($),")[^").concat(C(s),"])+?")};c<t.length;){var E=a("CHAR"),m=a("NAME"),P=a("PATTERN");if(m||P){var w=E||"";o.indexOf(w)===-1&&(f+=w,w=""),f&&(u.push(f),f=""),u.push({name:m||p++,prefix:w,suffix:"",pattern:P||v(w),modifier:a("MODIFIER")||""});continue}var d=E||a("ESCAPED_CHAR");if(d){f+=d;continue}f&&(u.push(f),f="");var A=a("OPEN");if(A){var w=y(),R=a("NAME")||"",b=a("PATTERN")||"",D=y();l("CLOSE"),u.push({name:R||(b?p++:""),pattern:R&&!b?v(w):b,prefix:w,suffix:D,modifier:a("MODIFIER")||""});continue}l("END")}return u}function C(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function H(e){return e&&e.sensitive?"":"i"}function V(e,n){return e}function J(e,n,t){var r=e.map(function(o){return z(o,n,t).source});return new RegExp("(?:".concat(r.join("|"),")"),H(t))}function X(e,n,t){return q(K(e,t),n,t)}function q(e,n,t){t===void 0&&(t={});for(var r=t.strict,o=r===void 0?!1:r,i=t.start,s=i===void 0?!0:i,u=t.end,p=u===void 0?!0:u,c=t.encode,f=c===void 0?function(h){return h}:c,a=t.delimiter,l=a===void 0?"/#?":a,y=t.endsWith,x=y===void 0?"":y,v="[".concat(C(x),"]|$"),E="[".concat(C(l),"]"),m=s?"^":"",P=0,w=e;P<w.length;P++){var d=w[P];if(typeof d=="string")m+=C(f(d));else{var A=C(f(d.prefix)),R=C(f(d.suffix));if(d.pattern)if(A||R)if(d.modifier==="+"||d.modifier==="*"){var b=d.modifier==="*"?"?":"";m+="(?:".concat(A,"((?:").concat(d.pattern,")(?:").concat(R).concat(A,"(?:").concat(d.pattern,"))*)").concat(R,")").concat(b)}else m+="(?:".concat(A,"(").concat(d.pattern,")").concat(R,")").concat(d.modifier);else{if(d.modifier==="+"||d.modifier==="*")throw new TypeError('Can not repeat "'.concat(d.name,'" without a prefix and suffix'));m+="(".concat(d.pattern,")").concat(d.modifier)}else m+="(?:".concat(A).concat(R,")").concat(d.modifier)}}if(p)o||(m+="".concat(E,"?")),m+=t.endsWith?"(?=".concat(v,")"):"$";else{var D=e[e.length-1],g=typeof D=="string"?E.indexOf(D[D.length-1])>-1:D===void 0;o||(m+="(?:".concat(E,"(?=").concat(v,"))?")),g||(m+="(?=".concat(E,"|").concat(v,")"))}return new RegExp(m,H(t))}function z(e,n,t){return e instanceof RegExp?V(e):Array.isArray(e)?J(e,n,t):X(e,n,t)}var T={};Object.defineProperty(T,"__esModule",{value:!0});T.pathToRegexp=T.match=ee=T.compile=T.parse=T.TokenData=void 0;const B="/",I=e=>e,G=new RegExp("^\\p{XID_Continue}$","u"),Q={"!":"!","@":"@",";":";",",":",","*":"*","+":"+","?":"?","{":"{","}":"}"};function Y(e){const n=[...e],t=[];let r=0;for(;r<n.length;){const o=n[r],i=Q[o];if(i){t.push({type:i,index:r++,value:o});continue}if(o==="\\"){t.push({type:"ESCAPED",index:r++,value:n[r++]});continue}if(o===":"){let s="";for(;G.test(n[++r]);)s+=n[r];if(!s)throw new TypeError(`Missing parameter name at ${r}`);t.push({type:"NAME",index:r,value:s});continue}if(o==="("){const s=r++;let u=1,p="";if(n[r]==="?")throw new TypeError(`Pattern cannot start with "?" at ${r}`);for(;r<n.length;){if(n[r]==="\\"){p+=n[r++]+n[r++];continue}if(n[r]===")"){if(u--,u===0){r++;break}}else if(n[r]==="("&&(u++,n[r+1]!=="?"))throw new TypeError(`Capturing groups are not allowed at ${r}`);p+=n[r++]}if(u)throw new TypeError(`Unbalanced pattern at ${s}`);if(!p)throw new TypeError(`Missing pattern at ${s}`);t.push({type:"PATTERN",index:r,value:p});continue}t.push({type:"CHAR",index:r,value:n[r++]})}return t.push({type:"END",index:r,value:""}),new Z(t)}class Z{constructor(n){this.tokens=n,this.index=0}peek(){return this.tokens[this.index]}tryConsume(n){const t=this.peek();if(t.type===n)return this.index++,t.value}consume(n){const t=this.tryConsume(n);if(t!==void 0)return t;const{type:r,index:o}=this.peek();throw new TypeError(`Unexpected ${r} at ${o}, expected ${n}: https://git.new/pathToRegexpError`)}text(){let n="",t;for(;t=this.tryConsume("CHAR")||this.tryConsume("ESCAPED");)n+=t;return n}modifier(){return this.tryConsume("?")||this.tryConsume("*")||this.tryConsume("+")||""}}class M{constructor(n,t){this.tokens=n,this.delimiter=t}}T.TokenData=M;function O(e,n={}){const{delimiter:t=B,encodePath:r=I}=n,o=[],i=Y(e);let s=0;do{const u=i.text();u&&o.push(r(u));const p=i.tryConsume("NAME"),c=i.tryConsume("PATTERN");if(p||c){o.push({name:p||String(s++),pattern:c});const l=i.peek();if(l.type==="*")throw new TypeError(`Unexpected * at ${l.index}, you probably want \`/*\` or \`{/:foo}*\`: https://git.new/pathToRegexpError`);continue}if(i.tryConsume("*")){o.push({name:String(s++),pattern:`[^${N(t)}]*`,modifier:"*",separator:t});continue}if(i.tryConsume("{")){const l=i.text(),y=i.tryConsume("NAME"),x=i.tryConsume("PATTERN"),v=i.text(),E=i.tryConsume(";")?i.text():l+v;i.consume("}");const m=i.modifier();o.push({name:y||(x?String(s++):""),prefix:r(l),suffix:r(v),pattern:x,modifier:m,separator:E});continue}i.consume("END");break}while(!0);return new M(o,t)}T.parse=O;function k(e,n={}){const t=e instanceof M?e:O(e,n);return ne(t,n)}var ee=T.compile=k;function te(e,n){if(typeof e=="string")return()=>e;const t=n||I,r=e.modifier==="+"||e.modifier==="*",o=e.modifier==="?"||e.modifier==="*",{prefix:i="",suffix:s="",separator:u=""}=e;if(n&&r){const c=(a,l)=>{if(typeof a!="string")throw new TypeError(`Expected "${e.name}/${l}" to be a string`);return t(a)},f=a=>{if(!Array.isArray(a))throw new TypeError(`Expected "${e.name}" to be an array`);return a.length===0?"":i+a.map(c).join(u)+s};return o?a=>{const l=a[e.name];return l==null?"":l.length?f(l):""}:a=>{const l=a[e.name];return f(l)}}const p=c=>{if(typeof c!="string")throw new TypeError(`Expected "${e.name}" to be a string`);return i+t(c)+s};return o?c=>{const f=c[e.name];return f==null?"":p(f)}:c=>{const f=c[e.name];return p(f)}}function ne(e,n){const{encode:t=encodeURIComponent,loose:r=!0,validate:o=!0}=n,i=U(n),s=_(r,e.delimiter),u=L(s,e.delimiter),p=e.tokens.map(c=>{const f=te(c,t);if(!o||typeof c=="string")return f;const a=u(c),l=new RegExp(`^${a}$`,i);return y=>{const x=f(y);if(!l.test(x))throw new TypeError(`Invalid value for "${c.name}": ${JSON.stringify(x)}`);return x}});return function(f={}){let a="";for(const l of p)a+=l(f);return a}}function re(e,n={}){const{decode:t=decodeURIComponent,loose:r=!0}=n,o=e instanceof M?e:O(e,n),i=_(r,o.delimiter),s=[],u=F(o,s,n),p=s.map(c=>{if(t&&(c.modifier==="+"||c.modifier==="*")){const f=new RegExp(i(c.separator||""),"g");return a=>a.split(f).map(t)}return t||I});return function(f){const a=u.exec(f);if(!a)return!1;const{0:l,index:y}=a,x=Object.create(null);for(let v=1;v<a.length;v++){if(a[v]===void 0)continue;const E=s[v-1],m=p[v-1];x[E.name]=m(a[v])}return{path:l,index:y,params:x}}}T.match=re;function N(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ie(e,n){return n?`${N(e)}+`:N(e)}function _(e,n){if(!e)return N;const t=new RegExp(`[^${N(n)}]+|(.)`,"g");return r=>r.replace(t,ie)}function U(e){return e.sensitive?"":"i"}function F(e,n,t){const{trailing:r=!0,start:o=!0,end:i=!0,loose:s=!0}=t,u=_(s,e.delimiter),p=L(u,e.delimiter);let c=o?"^":"";for(const f of e.tokens)typeof f=="string"?c+=u(f):(f.name&&n.push(f),c+=p(f));return r&&(c+=`(?:${u(e.delimiter)})?`),c+=i?"$":`(?=${N(e.delimiter)}|$)`,new RegExp(c,U(t))}function L(e,n){const t=`[^${N(n)}]+?`;return r=>{const o=r.prefix?e(r.prefix):"",i=r.suffix?e(r.suffix):"",s=r.modifier||"";if(r.name){const u=r.pattern||t;if(r.modifier==="+"||r.modifier==="*"){const p=r.modifier==="*"?"?":"",c=r.separator?e(r.separator):"";return`(?:${o}((?:${u})(?:${c}(?:${u}))*)${i})${p}`}return`(?:${o}(${u})${i})${s}`}return`(?:${o}${i})${s}`}}function oe(e,n={}){const t=e instanceof M?e:O(e,n),r=[],o=F(t,r,n);return Object.assign(o,{keys:r})}T.pathToRegexp=oe;export{ee as c,z as p};
