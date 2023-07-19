import{l as me,m as K,p as de,q as ve,o as pe,s as be,u as ge}from"./entry.ce14d000.js";function fn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?fn(Object(e),!0).forEach(function(a){O(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):fn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function wt(t){"@babel/helpers - typeof";return wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},wt(t)}function he(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function ln(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function ye(t,n,e){return n&&ln(t.prototype,n),e&&ln(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function O(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Kt(t,n){return xe(t)||Ae(t,n)||zn(t,n)||Se()}function ft(t){return ke(t)||we(t)||zn(t)||Oe()}function ke(t){if(Array.isArray(t))return Rt(t)}function xe(t){if(Array.isArray(t))return t}function we(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ae(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function zn(t,n){if(t){if(typeof t=="string")return Rt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Rt(t,n)}}function Rt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Oe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var un=function(){},Vt={},Rn={},Fn=null,jn={mark:un,measure:un};try{typeof window<"u"&&(Vt=window),typeof document<"u"&&(Rn=document),typeof MutationObserver<"u"&&(Fn=MutationObserver),typeof performance<"u"&&(jn=performance)}catch{}var Pe=Vt.navigator||{},cn=Pe.userAgent,mn=cn===void 0?"":cn,$=Vt,k=Rn,dn=Fn,ct=jn;$.document;var j=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",Dn=~mn.indexOf("MSIE")||~mn.indexOf("Trident/"),mt,dt,vt,pt,bt,z="___FONT_AWESOME___",Ft=16,Yn="fa",$n="svg-inline--fa",G="data-fa-i2svg",jt="data-fa-pseudo-element",Ee="data-fa-pseudo-element-pending",qt="data-prefix",Qt="data-icon",vn="fontawesome-i2svg",Ce="async",_e=["HTML","HEAD","STYLE","SCRIPT"],Un=function(){try{return!0}catch{return!1}}(),y="classic",x="sharp",Zt=[y,x];function lt(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[y]}})}var at=lt((mt={},O(mt,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),O(mt,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),mt)),rt=lt((dt={},O(dt,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(dt,x,{solid:"fass",regular:"fasr",light:"fasl"}),dt)),it=lt((vt={},O(vt,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(vt,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),vt)),Ie=lt((pt={},O(pt,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(pt,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),pt)),Ne=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Bn="fa-layers-text",Te=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Me=lt((bt={},O(bt,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(bt,x,{900:"fass",400:"fasr",300:"fasl"}),bt)),Wn=[1,2,3,4,5,6,7,8,9,10],Le=Wn.concat([11,12,13,14,15,16,17,18,19,20]),ze=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],W={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ot=new Set;Object.keys(rt[y]).map(ot.add.bind(ot));Object.keys(rt[x]).map(ot.add.bind(ot));var Re=[].concat(Zt,ft(ot),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",W.GROUP,W.SWAP_OPACITY,W.PRIMARY,W.SECONDARY]).concat(Wn.map(function(t){return"".concat(t,"x")})).concat(Le.map(function(t){return"w-".concat(t)})),nt=$.FontAwesomeConfig||{};function Fe(t){var n=k.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function je(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(k&&typeof k.querySelector=="function"){var De=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];De.forEach(function(t){var n=Kt(t,2),e=n[0],a=n[1],r=je(Fe(e));r!=null&&(nt[a]=r)})}var Hn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Yn,replacementClass:$n,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};nt.familyPrefix&&(nt.cssPrefix=nt.familyPrefix);var Z=c(c({},Hn),nt);Z.autoReplaceSvg||(Z.observeMutations=!1);var m={};Object.keys(Hn).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(e){Z[t]=e,et.forEach(function(a){return a(m)})},get:function(){return Z[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(n){Z.cssPrefix=n,et.forEach(function(e){return e(m)})},get:function(){return Z.cssPrefix}});$.FontAwesomeConfig=m;var et=[];function Ye(t){return et.push(t),function(){et.splice(et.indexOf(t),1)}}var Y=Ft,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $e(t){if(!(!t||!j)){var n=k.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=k.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return k.head.insertBefore(n,a),t}}var Ue="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function st(){for(var t=12,n="";t-- >0;)n+=Ue[Math.random()*62|0];return n}function J(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function Jt(t){return t.classList?J(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Gn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Be(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(Gn(t[e]),'" ')},"").trim()}function Pt(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function tn(t){return t.size!==M.size||t.x!==M.x||t.y!==M.y||t.rotate!==M.rotate||t.flipX||t.flipY}function We(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:u}}function He(t){var n=t.transform,e=t.width,a=e===void 0?Ft:e,r=t.height,i=r===void 0?Ft:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Dn?f+="translate(".concat(n.x/Y-a/2,"em, ").concat(n.y/Y-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/Y,"em), calc(-50% + ").concat(n.y/Y,"em)) "):f+="translate(".concat(n.x/Y,"em, ").concat(n.y/Y,"em) "),f+="scale(".concat(n.size/Y*(n.flipX?-1:1),", ").concat(n.size/Y*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var Ge=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Xn(){var t=Yn,n=$n,e=m.cssPrefix,a=m.replacementClass,r=Ge;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var pn=!1;function Nt(){m.autoAddCss&&!pn&&($e(Xn()),pn=!0)}var Xe={mixout:function(){return{dom:{css:Xn,insertCss:Nt}}},hooks:function(){return{beforeDOMElementCreation:function(){Nt()},beforeI2svg:function(){Nt()}}}},R=$||{};R[z]||(R[z]={});R[z].styles||(R[z].styles={});R[z].hooks||(R[z].hooks={});R[z].shims||(R[z].shims=[]);var N=R[z],Kn=[],Ke=function t(){k.removeEventListener("DOMContentLoaded",t),At=1,Kn.map(function(n){return n()})},At=!1;j&&(At=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),At||k.addEventListener("DOMContentLoaded",Ke));function Ve(t){j&&(At?setTimeout(t,0):Kn.push(t))}function ut(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Gn(t):"<".concat(n," ").concat(Be(a),">").concat(i.map(ut).join(""),"</").concat(n,">")}function bn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var qe=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},Tt=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?qe(e,r):e,f,u,l;for(a===void 0?(f=1,l=n[i[0]]):(f=0,l=a);f<o;f++)u=i[f],l=s(l,n[u],u,n);return l};function Qe(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function Dt(t){var n=Qe(t);return n.length===1?n[0].toString(16):null}function Ze(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function gn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function Yt(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=gn(n);typeof N.hooks.addPack=="function"&&!r?N.hooks.addPack(t,gn(n)):N.styles[t]=c(c({},N.styles[t]||{}),i),t==="fas"&&Yt("fa",n)}var gt,ht,yt,V=N.styles,Je=N.shims,ta=(gt={},O(gt,y,Object.values(it[y])),O(gt,x,Object.values(it[x])),gt),nn=null,Vn={},qn={},Qn={},Zn={},Jn={},na=(ht={},O(ht,y,Object.keys(at[y])),O(ht,x,Object.keys(at[x])),ht);function ea(t){return~Re.indexOf(t)}function aa(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!ea(r)?r:null}var te=function(){var n=function(i){return Tt(V,function(o,s,f){return o[f]=Tt(s,i,{}),o},{})};Vn=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),qn=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),Jn=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in V||m.autoFetchSvg,a=Tt(Je,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Qn=a.names,Zn=a.unicodes,nn=Et(m.styleDefault,{family:m.familyDefault})};Ye(function(t){nn=Et(t.styleDefault,{family:m.familyDefault})});te();function en(t,n){return(Vn[t]||{})[n]}function ra(t,n){return(qn[t]||{})[n]}function H(t,n){return(Jn[t]||{})[n]}function ne(t){return Qn[t]||{prefix:null,iconName:null}}function ia(t){var n=Zn[t],e=en("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function U(){return nn}var an=function(){return{prefix:null,iconName:null,rest:[]}};function Et(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?y:e,r=at[a][t],i=rt[a][t]||rt[a][r],o=t in N.styles?t:null;return i||o||null}var hn=(yt={},O(yt,y,Object.keys(it[y])),O(yt,x,Object.keys(it[x])),yt);function Ct(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},O(n,y,"".concat(m.cssPrefix,"-").concat(y)),O(n,x,"".concat(m.cssPrefix,"-").concat(x)),n),o=null,s=y;(t.includes(i[y])||t.some(function(u){return hn[y].includes(u)}))&&(s=y),(t.includes(i[x])||t.some(function(u){return hn[x].includes(u)}))&&(s=x);var f=t.reduce(function(u,l){var d=aa(m.cssPrefix,l);if(V[l]?(l=ta[s].includes(l)?Ie[s][l]:l,o=l,u.prefix=l):na[s].indexOf(l)>-1?(o=l,u.prefix=Et(l,{family:s})):d?u.iconName=d:l!==m.replacementClass&&l!==i[y]&&l!==i[x]&&u.rest.push(l),!r&&u.prefix&&u.iconName){var b=o==="fa"?ne(u.iconName):{},g=H(u.prefix,u.iconName);b.prefix&&(o=null),u.iconName=b.iconName||g||u.iconName,u.prefix=b.prefix||u.prefix,u.prefix==="far"&&!V.far&&V.fas&&!m.autoFetchSvg&&(u.prefix="fas")}return u},an());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===x&&(V.fass||m.autoFetchSvg)&&(f.prefix="fass",f.iconName=H(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=U()||"fas"),f}var oa=function(){function t(){he(this,t),this.definitions={}}return ye(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=c(c({},e.definitions[s]||{}),o[s]),Yt(s,o[s]);var f=it[y][s];f&&Yt(f,o[s]),te()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,u=o.icon,l=u[2];e[s]||(e[s]={}),l.length>0&&l.forEach(function(d){typeof d=="string"&&(e[s][d]=u)}),e[s][f]=u}),e}}]),t}(),yn=[],q={},Q={},sa=Object.keys(Q);function fa(t,n){var e=n.mixoutsTo;return yn=t,q={},Object.keys(Q).forEach(function(a){sa.indexOf(a)===-1&&delete Q[a]}),yn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),wt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){q[o]||(q[o]=[]),q[o].push(i[o])})}a.provides&&a.provides(Q)}),e}function $t(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=q[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function X(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=q[t]||[];r.forEach(function(i){i.apply(null,e)})}function F(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return Q[t]?Q[t].apply(null,n):void 0}function Ut(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||U();if(n)return n=H(e,n)||n,bn(ee.definitions,e,n)||bn(N.styles,e,n)}var ee=new oa,la=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,X("noAuto")},ua={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(X("beforeI2svg",n),F("pseudoElements2svg",n),F("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Ve(function(){ma({autoReplaceSvgRoot:e}),X("watch",n)})}},ca={icon:function(n){if(n===null)return null;if(wt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:H(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Et(n[0]);return{prefix:a,iconName:H(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(m.cssPrefix,"-"))>-1||n.match(Ne))){var r=Ct(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||U(),iconName:H(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=U();return{prefix:i,iconName:H(i,n)||n}}}},_={noAuto:la,config:m,dom:ua,parse:ca,library:ee,findIconDefinition:Ut,toHtml:ut},ma=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?k:e;(Object.keys(N.styles).length>0||m.autoFetchSvg)&&j&&m.autoReplaceSvg&&_.dom.i2svg({node:a})};function _t(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return ut(a)})}}),Object.defineProperty(t,"node",{get:function(){if(j){var a=k.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function da(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(tn(o)&&e.found&&!a.found){var s=e.width,f=e.height,u={x:s/f/2,y:.5};r.style=Pt(c(c({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function va(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(m.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:a}]}]}function rn(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,u=t.maskId,l=t.titleId,d=t.extra,b=t.watchable,g=b===void 0?!1:b,S=a.found?a:e,P=S.width,E=S.height,v=r==="fak",p=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(D){return d.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(d.classes).join(" "),h={children:[],attributes:c(c({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(E)})},w=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(P/E*16*.0625,"em")}:{};g&&(h.attributes[G]=""),f&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(l||st())},children:[f]}),delete h.attributes.title);var A=c(c({},h),{},{prefix:r,iconName:i,main:e,mask:a,maskId:u,transform:o,symbol:s,styles:c(c({},w),d.styles)}),T=a.found&&e.found?F("generateAbstractMask",A)||{children:[],attributes:{}}:F("generateAbstractIcon",A)||{children:[],attributes:{}},I=T.children,It=T.attributes;return A.children=I,A.attributes=It,s?va(A):da(A)}function kn(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,u=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(u[G]="");var l=c({},o.styles);tn(r)&&(l.transform=He({transform:r,startCentered:!0,width:e,height:a}),l["-webkit-transform"]=l.transform);var d=Pt(l);d.length>0&&(u.style=d);var b=[];return b.push({tag:"span",attributes:u,children:[n]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function pa(t){var n=t.content,e=t.title,a=t.extra,r=c(c(c({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=Pt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Mt=N.styles;function Bt(t){var n=t[0],e=t[1],a=t.slice(4),r=Kt(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(W.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(W.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(W.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var ba={found:!1,width:512,height:512};function ga(t,n){!Un&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Wt(t,n){var e=n;return n==="fa"&&m.styleDefault!==null&&(n=U()),new Promise(function(a,r){if(F("missingIconAbstract"),e==="fa"){var i=ne(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Mt[n]&&Mt[n][t]){var o=Mt[n][t];return a(Bt(o))}ga(t,n),a(c(c({},ba),{},{icon:m.showMissingIcons&&t?F("missingIconAbstract")||{}:{}}))})}var xn=function(){},Ht=m.measurePerformance&&ct&&ct.mark&&ct.measure?ct:{mark:xn,measure:xn},tt='FA "6.4.0"',ha=function(n){return Ht.mark("".concat(tt," ").concat(n," begins")),function(){return ae(n)}},ae=function(n){Ht.mark("".concat(tt," ").concat(n," ends")),Ht.measure("".concat(tt," ").concat(n),"".concat(tt," ").concat(n," begins"),"".concat(tt," ").concat(n," ends"))},on={begin:ha,end:ae},kt=function(){};function wn(t){var n=t.getAttribute?t.getAttribute(G):null;return typeof n=="string"}function ya(t){var n=t.getAttribute?t.getAttribute(qt):null,e=t.getAttribute?t.getAttribute(Qt):null;return n&&e}function ka(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function xa(){if(m.autoReplaceSvg===!0)return xt.replace;var t=xt[m.autoReplaceSvg];return t||xt.replace}function wa(t){return k.createElementNS("http://www.w3.org/2000/svg",t)}function Aa(t){return k.createElement(t)}function re(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?wa:Aa:e;if(typeof t=="string")return k.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(re(o,{ceFn:a}))}),r}function Oa(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var xt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(re(r),e)}),e.getAttribute(G)===null&&m.keepOriginalSource){var a=k.createComment(Oa(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~Jt(e).indexOf(m.replacementClass))return xt.replace(n);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return ut(s)}).join(`
`);e.setAttribute(G,""),e.innerHTML=o}};function An(t){t()}function ie(t,n){var e=typeof n=="function"?n:kt;if(t.length===0)e();else{var a=An;m.mutateApproach===Ce&&(a=$.requestAnimationFrame||An),a(function(){var r=xa(),i=on.begin("mutate");t.map(r),i(),e()})}}var sn=!1;function oe(){sn=!0}function Gt(){sn=!1}var Ot=null;function On(t){if(dn&&m.observeMutations){var n=t.treeCallback,e=n===void 0?kt:n,a=t.nodeCallback,r=a===void 0?kt:a,i=t.pseudoElementsCallback,o=i===void 0?kt:i,s=t.observeMutationsRoot,f=s===void 0?k:s;Ot=new dn(function(u){if(!sn){var l=U();J(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!wn(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&wn(d.target)&&~ze.indexOf(d.attributeName))if(d.attributeName==="class"&&ya(d.target)){var b=Ct(Jt(d.target)),g=b.prefix,S=b.iconName;d.target.setAttribute(qt,g||l),S&&d.target.setAttribute(Qt,S)}else ka(d.target)&&r(d.target)})}}),j&&Ot.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Sa(){Ot&&Ot.disconnect()}function Pa(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function Ea(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Ct(Jt(t));return r.prefix||(r.prefix=U()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ra(r.prefix,t.innerText)||en(r.prefix,Dt(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ca(t){var n=J(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(e?n["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||st()):(n["aria-hidden"]="true",n.focusable="false")),n}function _a(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Sn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Ea(t),a=e.iconName,r=e.prefix,i=e.rest,o=Ca(t),s=$t("parseNodeAttributes",{},t),f=n.styleParser?Pa(t):[];return c({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Ia=N.styles;function se(t){var n=m.autoReplaceSvg==="nest"?Sn(t,{styleParser:!1}):Sn(t);return~n.extra.classes.indexOf(Bn)?F("generateLayersText",t,n):F("generateSvgReplacementMutation",t,n)}var B=new Set;Zt.map(function(t){B.add("fa-".concat(t))});Object.keys(at[y]).map(B.add.bind(B));Object.keys(at[x]).map(B.add.bind(B));B=ft(B);function Pn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var e=k.documentElement.classList,a=function(d){return e.add("".concat(vn,"-").concat(d))},r=function(d){return e.remove("".concat(vn,"-").concat(d))},i=m.autoFetchSvg?B:Zt.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Ia));i.includes("fa")||i.push("fa");var o=[".".concat(Bn,":not([").concat(G,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(G,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=J(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=on.begin("onTree"),u=s.reduce(function(l,d){try{var b=se(d);b&&l.push(b)}catch(g){Un||g.name==="MissingIcon"&&console.error(g)}return l},[]);return new Promise(function(l,d){Promise.all(u).then(function(b){ie(b,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),l()})}).catch(function(b){f(),d(b)})})}function Na(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;se(t).then(function(e){e&&ie([e],n)})}function Ta(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Ut(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Ut(r||{})),t(a,c(c({},e),{},{mask:r}))}}var Ma=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?M:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,u=e.maskId,l=u===void 0?null:u,d=e.title,b=d===void 0?null:d,g=e.titleId,S=g===void 0?null:g,P=e.classes,E=P===void 0?[]:P,v=e.attributes,p=v===void 0?{}:v,h=e.styles,w=h===void 0?{}:h;if(n){var A=n.prefix,T=n.iconName,I=n.icon;return _t(c({type:"icon"},n),function(){return X("beforeDOMElementCreation",{iconDefinition:n,params:e}),m.autoA11y&&(b?p["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(S||st()):(p["aria-hidden"]="true",p.focusable="false")),rn({icons:{main:Bt(I),mask:f?Bt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:T,transform:c(c({},M),r),symbol:o,title:b,maskId:l,titleId:S,extra:{attributes:p,styles:w,classes:E}})})}},La={mixout:function(){return{icon:Ta(Ma)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Pn,e.nodeCallback=Na,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?k:a,i=e.callback,o=i===void 0?function(){}:i;return Pn(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,u=a.symbol,l=a.mask,d=a.maskId,b=a.extra;return new Promise(function(g,S){Promise.all([Wt(r,s),l.iconName?Wt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var E=Kt(P,2),v=E[0],p=E[1];g([e,rn({icons:{main:v,mask:p},prefix:s,iconName:r,transform:f,symbol:u,maskId:d,title:i,titleId:o,extra:b,watchable:!0})])}).catch(S)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=Pt(s);f.length>0&&(r.style=f);var u;return tn(o)&&(u=F("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},za={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return _t({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(ft(i)).join(" ")},children:o}]})}}}},Ra={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,u=f===void 0?{}:f,l=a.styles,d=l===void 0?{}:l;return _t({type:"counter",content:e},function(){return X("beforeDOMElementCreation",{content:e,params:a}),pa({content:e.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(ft(s))}})})}}}},Fa={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?M:r,o=a.title,s=o===void 0?null:o,f=a.classes,u=f===void 0?[]:f,l=a.attributes,d=l===void 0?{}:l,b=a.styles,g=b===void 0?{}:b;return _t({type:"text",content:e},function(){return X("beforeDOMElementCreation",{content:e,params:a}),kn({content:e,transform:c(c({},M),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(m.cssPrefix,"-layers-text")].concat(ft(u))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(Dn){var u=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/u,f=l.height/u}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,kn({content:e.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},ja=new RegExp('"',"ug"),En=[1105920,1112319];function Da(t){var n=t.replace(ja,""),e=Ze(n,0),a=e>=En[0]&&e<=En[1],r=n.length===2?n[0]===n[1]:!1;return{value:Dt(r?n[0]:n),isSecondary:a||r}}function Cn(t,n){var e="".concat(Ee).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=J(t.children),o=i.filter(function(I){return I.getAttribute(jt)===n})[0],s=$.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(Te),u=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&l!=="none"&&l!==""){var d=s.getPropertyValue("content"),b=~["Sharp"].indexOf(f[2])?x:y,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?rt[b][f[2].toLowerCase()]:Me[b][u],S=Da(d),P=S.value,E=S.isSecondary,v=f[0].startsWith("FontAwesome"),p=en(g,P),h=p;if(v){var w=ia(P);w.iconName&&w.prefix&&(p=w.iconName,g=w.prefix)}if(p&&!E&&(!o||o.getAttribute(qt)!==g||o.getAttribute(Qt)!==h)){t.setAttribute(e,h),o&&t.removeChild(o);var A=_a(),T=A.extra;T.attributes[jt]=n,Wt(p,g).then(function(I){var It=rn(c(c({},A),{},{icons:{main:I,mask:an()},prefix:g,iconName:h,extra:T,watchable:!0})),D=k.createElement("svg");n==="::before"?t.insertBefore(D,t.firstChild):t.appendChild(D),D.outerHTML=It.map(function(ce){return ut(ce)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function Ya(t){return Promise.all([Cn(t,"::before"),Cn(t,"::after")])}function $a(t){return t.parentNode!==document.head&&!~_e.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(jt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function _n(t){if(j)return new Promise(function(n,e){var a=J(t.querySelectorAll("*")).filter($a).map(Ya),r=on.begin("searchPseudoElements");oe(),Promise.all(a).then(function(){r(),Gt(),n()}).catch(function(){r(),Gt(),e()})})}var Ua={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=_n,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?k:a;m.searchPseudoElements&&_n(r)}}},In=!1,Ba={mixout:function(){return{dom:{unwatch:function(){oe(),In=!0}}}},hooks:function(){return{bootstrap:function(){On($t("mutationObserverCallbacks",{}))},noAuto:function(){Sa()},watch:function(e){var a=e.observeMutationsRoot;In?Gt():On($t("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Nn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},Wa={mixout:function(){return{parse:{transform:function(e){return Nn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=Nn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(u," ").concat(l)},b={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:b};return{tag:"g",attributes:c({},g.outer),children:[{tag:"g",attributes:c({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:c(c({},a.icon.attributes),g.path)}]}]}}}},Lt={x:0,y:0,width:"100%",height:"100%"};function Tn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Ha(t){return t.tag==="g"?t.children:[t]}var Ga={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Ct(r.split(" ").map(function(o){return o.trim()})):an();return i.prefix||(i.prefix=U()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,u=i.width,l=i.icon,d=o.width,b=o.icon,g=We({transform:f,containerWidth:d,iconWidth:u}),S={tag:"rect",attributes:c(c({},Lt),{},{fill:"white"})},P=l.children?{children:l.children.map(Tn)}:{},E={tag:"g",attributes:c({},g.inner),children:[Tn(c({tag:l.tag,attributes:c(c({},l.attributes),g.path)},P))]},v={tag:"g",attributes:c({},g.outer),children:[E]},p="mask-".concat(s||st()),h="clip-".concat(s||st()),w={tag:"mask",attributes:c(c({},Lt),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,v]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:Ha(b)},w]};return a.push(A,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")")},Lt)}),{children:a,attributes:r}}}},Xa={provides:function(n){var e=!1;$.matchMedia&&(e=$.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Ka={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},Va=[Xe,La,za,Ra,Fa,Ua,Ba,Wa,Ga,Xa,Ka];fa(Va,{mixoutsTo:_});_.noAuto;_.config;_.library;_.dom;var Xt=_.parse;_.findIconDefinition;_.toHtml;var qa=_.icon;_.layer;_.text;_.counter;function Mn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function L(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Mn(Object(e),!0).forEach(function(a){C(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Mn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function St(t){"@babel/helpers - typeof";return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},St(t)}function C(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Qa(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function Za(t,n){if(t==null)return{};var e=Qa(t,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(e[a]=t[a])}return e}var Ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fe={exports:{}};(function(t){(function(n){var e=function(v,p,h){if(!u(p)||d(p)||b(p)||g(p)||f(p))return p;var w,A=0,T=0;if(l(p))for(w=[],T=p.length;A<T;A++)w.push(e(v,p[A],h));else{w={};for(var I in p)Object.prototype.hasOwnProperty.call(p,I)&&(w[v(I,h)]=e(v,p[I],h))}return w},a=function(v,p){p=p||{};var h=p.separator||"_",w=p.split||/(?=[A-Z])/;return v.split(w).join(h)},r=function(v){return S(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(p,h){return h?h.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var p=r(v);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(v,p){return a(v,p).toLowerCase()},s=Object.prototype.toString,f=function(v){return typeof v=="function"},u=function(v){return v===Object(v)},l=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},b=function(v){return s.call(v)=="[object RegExp]"},g=function(v){return s.call(v)=="[object Boolean]"},S=function(v){return v=v-0,v===v},P=function(v,p){var h=p&&"process"in p?p.process:p;return typeof h!="function"?v:function(w,A){return h(w,v,A)}},E={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,p){return e(P(r,p),v)},decamelizeKeys:function(v,p){return e(P(o,p),v,p)},pascalizeKeys:function(v,p){return e(P(i,p),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=E:n.humps=E})(Ja)})(fe);var tr=fe.exports,nr=["class","style"];function er(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=tr.camelize(e.slice(0,a)),i=e.slice(a+1).trim();return n[r]=i,n},{})}function ar(t){return t.split(/\s+/).reduce(function(n,e){return n[e]=!0,n},{})}function le(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return le(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,u){var l=t.attributes[u];switch(u){case"class":f.class=ar(l);break;case"style":f.style=er(l);break;default:f.attrs[u]=l}return f},{attrs:{},class:{},style:{}});e.class;var i=e.style,o=i===void 0?{}:i,s=Za(e,nr);return ve(t.tag,L(L(L({},n),{},{class:r.class,style:L(L({},r.style),o)},r.attrs),s),a)}var ue=!1;try{ue=!0}catch{}function rr(){if(!ue&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function zt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?C({},t,n):{}}function ir(t){var n,e=(n={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},C(n,"fa-".concat(t.size),t.size!==null),C(n,"fa-rotate-".concat(t.rotation),t.rotation!==null),C(n,"fa-pull-".concat(t.pull),t.pull!==null),C(n,"fa-swap-opacity",t.swapOpacity),C(n,"fa-bounce",t.bounce),C(n,"fa-shake",t.shake),C(n,"fa-beat",t.beat),C(n,"fa-fade",t.fade),C(n,"fa-beat-fade",t.beatFade),C(n,"fa-flash",t.flash),C(n,"fa-spin-pulse",t.spinPulse),C(n,"fa-spin-reverse",t.spinReverse),n);return Object.keys(e).map(function(a){return e[a]?a:null}).filter(function(a){return a})}function Ln(t){if(t&&St(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Xt.icon)return Xt.icon(t);if(t===null)return null;if(St(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var or=me({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(n){return[!0,!1,"horizontal","vertical","both"].indexOf(n)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(n){return["right","left"].indexOf(n)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(n){return[90,180,270].indexOf(Number.parseInt(n,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(n){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(n)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(n,e){var a=e.attrs,r=K(function(){return Ln(n.icon)}),i=K(function(){return zt("classes",ir(n))}),o=K(function(){return zt("transform",typeof n.transform=="string"?Xt.transform(n.transform):n.transform)}),s=K(function(){return zt("mask",Ln(n.mask))}),f=K(function(){return qa(r.value,L(L(L(L({},i.value),o.value),s.value),{},{symbol:n.symbol,title:n.title}))});de(f,function(l){if(!l)return rr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var u=K(function(){return f.value?le(f.value.abstract[0],{},a):null});return function(){return u.value}}});const sr={props:{icon:{type:Object,required:!0}}},lr=Object.assign(sr,{__name:"FontAwesome",setup(t){return(n,e)=>(pe(),be(ge(or),{icon:t.icon},null,8,["icon"]))}});export{lr as _};
