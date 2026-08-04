import{f as W,t as w,J as F,M as P,l as p,o as N}from"./react.BqgXP1_K.js";import{r as u}from"./index.qNTDzdXh.js";import{a as R,u as I,b as S}from"./use-transform.BpLk4VN8.js";function z(t,e,r={}){const o=t.get();let n=null,s=o,a;const d=typeof o=="string"?o.replace(/[\d.-]/g,""):void 0,f=()=>{n&&(n.stop(),n=null),t.animation=void 0},m=()=>{const c=A(t.get()),i=A(s);if(c===i){f();return}const l=n?n.getGeneratorVelocity():t.getVelocity();f(),n=new F({keyframes:[c,i],velocity:l,type:"spring",restDelta:.001,restSpeed:.01,...r,onUpdate:a})},g=()=>{m(),t.animation=n??void 0,t.events.animationStart?.notify(),n?.then(()=>{t.animation=void 0,t.events.animationComplete?.notify()})};if(t.attach((c,i)=>{s=c,a=l=>i(k(l,d)),W.postRender(g)},f),w(e)){let c=r.skipInitialAnimation===!0;const i=e.on("change",h=>{c?(c=!1,t.jump(k(h,d),!1)):t.set(k(h,d))}),l=t.on("destroy",i);return()=>{i(),l()}}return f}function k(t,e){return e?t+e:t}function A(t){return typeof t=="number"?t:parseFloat(t)}function v(t,...e){const r=t.length;function o(){let n="";for(let s=0;s<r;s++){n+=t[s];const a=e[s];a&&(n+=w(a)?a.get():a)}return n}return R(e.filter(w),o)}function H(t,e={}){const{isStatic:r}=u.useContext(P),o=()=>w(t)?t.get():t;if(r)return I(o);const n=S(o());return u.useInsertionEffect(()=>z(n,t,e),[n,JSON.stringify(e)]),n}function j(t,e={}){return H(t,{type:"spring",...e})}/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=(...t)=>t.filter((e,r,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===r).join(" ").trim();/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,o)=>o?o.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=t=>{const e=U(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var M={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},Y=u.createContext({}),_=()=>u.useContext(Y),J=u.forwardRef(({color:t,size:e,strokeWidth:r,absoluteStrokeWidth:o,className:n="",children:s,iconNode:a,...d},f)=>{const{size:m=24,strokeWidth:g=2,absoluteStrokeWidth:c=!1,color:i="currentColor",className:l=""}=_()??{},h=o??c?Number(r??g)*24/Number(e??m):r??g;return u.createElement("svg",{ref:f,...M,width:e??m??M.width,height:e??m??M.height,stroke:t??i,strokeWidth:h,className:L("lucide",l,n),...!s&&!X(d)&&{"aria-hidden":"true"},...d},[...a.map(([b,y])=>u.createElement(b,y)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=(t,e)=>{const r=u.forwardRef(({className:o,...n},s)=>u.createElement(J,{ref:s,iconNode:e,className:L(`lucide-${O(V(t))}`,`lucide-${t}`,o),...n}));return r.displayName=V(t),r};/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],D=T("arrow-up-right",B);function Z({image:t,heroBg:e}){return p.jsx(N.div,{className:"absolute inset-0",style:{background:t?`url('${t}') top / contain no-repeat`:e,backgroundPosition:"top"},whileHover:{scale:1.05},transition:{type:"spring",stiffness:300,damping:24}})}function Q({image:t,heroBg:e,url:r}){const[o,n]=u.useState(!1),s=S(0),a=S(0),d=j(s,{stiffness:300,damping:30}),f=j(a,{stiffness:300,damping:30}),m=v`calc(${d}px - 50%)`,g=v`calc(${f}px - 50%)`,c=y=>{const C=y.currentTarget.getBoundingClientRect(),x=24,$=Math.min(Math.max(y.clientX-C.left,x),Math.max(C.width-x,x)),E=Math.min(Math.max(y.clientY-C.top,x),Math.max(C.height-x,x));s.set($),a.set(E)},i=p.jsxs(p.Fragment,{children:[p.jsx(Z,{image:t,heroBg:e}),p.jsx(N.div,{className:"pointer-events-none absolute z-10 flex items-center justify-center rounded-full",style:{width:48,height:48,background:"var(--accent)",boxShadow:"0 8px 24px rgba(0, 89, 255, 0.4)",x:m,y:g},initial:{opacity:0,scale:.8},animate:{opacity:o?1:0,scale:o?1:.8},transition:{type:"spring",stiffness:300,damping:30},children:p.jsx(D,{size:22,color:"#fff"})})]}),l={onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onMouseMove:c},h="relative rounded-2xl overflow-hidden border aspect-[4/3] max-h-[75vh] min-w-[70vw]",b={borderColor:"var(--border)",background:e};return r?p.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:`${h} block cursor-pointer`,style:b,...l,children:i}):p.jsx("div",{className:h,style:b,...l,children:i})}export{Q as default};
