(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".dimmer-widget{display:flex;flex-direction:column;align-items:center;width:100%;min-width:60px;height:100%;min-height:200px;-webkit-user-select:none;user-select:none}.lightbulb-icon{font-size:32px;transition:color .3s ease-in-out;position:absolute;bottom:20px;left:50%;width:40px;height:40px;display:block;margin-left:-20px;color:#fff}.dimmer-bar{min-width:60px;min-height:120px;border-radius:15px;background:linear-gradient(to bottom,#444,#111);position:relative;overflow:hidden;touch-action:none}.dimmer-fill{position:absolute;bottom:0;width:100%;transition:height .1s ease-out;background-color:#fc0}.name{margin-top:10px;font-size:16px;color:#fff}.status{margin-top:4px;font-size:12px;color:#d3d3d3;margin-bottom:20px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
(function(U,g){typeof exports=="object"&&typeof module<"u"?g(exports,require("vue"),require("vuex")):typeof define=="function"&&define.amd?define(["exports","vue","vuex"],g):(U=typeof globalThis<"u"?globalThis:U||self,g(U["ui-dimm-light"]={},U.Vue,U.vuex))})(this,function(U,g,Sn){"use strict";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function On(t,e,n){return(e=Pn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?fe(Object(n),!0).forEach(function(a){On(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function En(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Pn(t){var e=En(t,"string");return typeof e=="symbol"?e:e+""}const ce=()=>{};let Ct={},ue={},de=null,me={mark:ce,measure:ce};try{typeof window<"u"&&(Ct=window),typeof document<"u"&&(ue=document),typeof MutationObserver<"u"&&(de=MutationObserver),typeof performance<"u"&&(me=performance)}catch{}const{userAgent:pe=""}=Ct.navigator||{},B=Ct,w=ue,ge=de,ct=me;B.document;const R=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",he=~pe.indexOf("MSIE")||~pe.indexOf("Trident/");var kn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Cn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ye={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Mn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},be=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],C="classic",ut="duotone",Tn="sharp",_n="sharp-duotone",ve=[C,ut,Tn,_n],In={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Nn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Fn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Dn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Ln=["fak","fa-kit","fakd","fa-kit-duotone"],xe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},zn=["kit"],Rn={kit:{"fa-kit":"fak"}},jn=["fak","fakd"],Yn={kit:{fak:"fa-kit"}},Ae={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},dt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Un=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Bn=["fak","fa-kit","fakd","fa-kit-duotone"],Wn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},$n={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Gn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Mt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Xn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Tt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Un,...Xn],Hn=["solid","regular","light","thin","duotone","brands"],we=[1,2,3,4,5,6,7,8,9,10],Vn=we.concat([11,12,13,14,15,16,17,18,19,20]),Kn=[...Object.keys(Gn),...Hn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",dt.GROUP,dt.SWAP_OPACITY,dt.PRIMARY,dt.SECONDARY].concat(we.map(t=>"".concat(t,"x"))).concat(Vn.map(t=>"w-".concat(t))),qn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const j="___FONT_AWESOME___",_t=16,Se="fa",Oe="svg-inline--fa",X="data-fa-i2svg",It="data-fa-pseudo-element",Qn="data-fa-pseudo-element-pending",Nt="data-prefix",Ft="data-icon",Ee="fontawesome-i2svg",Zn="async",Jn=["HTML","HEAD","STYLE","SCRIPT"],Pe=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})();function et(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[C]}})}const ke=l({},ye);ke[C]=l(l(l(l({},{"fa-duotone":"duotone"}),ye[C]),xe.kit),xe["kit-duotone"]);const ta=et(ke),Dt=l({},Dn);Dt[C]=l(l(l(l({},{duotone:"fad"}),Dt[C]),Ae.kit),Ae["kit-duotone"]);const Ce=et(Dt),Lt=l({},Mt);Lt[C]=l(l({},Lt[C]),Yn.kit);const zt=et(Lt),Rt=l({},$n);Rt[C]=l(l({},Rt[C]),Rn.kit),et(Rt);const ea=kn,Me="fa-layers-text",na=Cn,aa=l({},In);et(aa);const ra=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],jt=Mn,ia=[...zn,...Kn],nt=B.FontAwesomeConfig||{};function oa(t){var e=w.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function sa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}w&&typeof w.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=sa(oa(n));r!=null&&(nt[a]=r)});const Te={styleDefault:"solid",familyDefault:C,cssPrefix:Se,replacementClass:Oe,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};nt.familyPrefix&&(nt.cssPrefix=nt.familyPrefix);const q=l(l({},Te),nt);q.autoReplaceSvg||(q.observeMutations=!1);const u={};Object.keys(Te).forEach(t=>{Object.defineProperty(u,t,{enumerable:!0,set:function(e){q[t]=e,at.forEach(n=>n(u))},get:function(){return q[t]}})}),Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(t){q.cssPrefix=t,at.forEach(e=>e(u))},get:function(){return q.cssPrefix}}),B.FontAwesomeConfig=u;const at=[];function la(t){return at.push(t),()=>{at.splice(at.indexOf(t),1)}}const W=_t,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fa(t){if(!t||!R)return;const e=w.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=w.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return w.head.insertBefore(e,a),t}const ca="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function rt(){let t=12,e="";for(;t-- >0;)e+=ca[Math.random()*62|0];return e}function Q(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Yt(t){return t.classList?Q(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function _e(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ua(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(_e(t[n]),'" '),"").trim()}function mt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Ut(t){return t.size!==D.size||t.x!==D.x||t.y!==D.y||t.rotate!==D.rotate||t.flipX||t.flipY}function da(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:f}}function ma(t){let{transform:e,width:n=_t,height:a=_t,startCentered:r=!1}=t,i="";return r&&he?i+="translate(".concat(e.x/W-n/2,"em, ").concat(e.y/W-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/W,"em), calc(-50% + ").concat(e.y/W,"em)) "):i+="translate(".concat(e.x/W,"em, ").concat(e.y/W,"em) "),i+="scale(".concat(e.size/W*(e.flipX?-1:1),", ").concat(e.size/W*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var pa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  left: calc(-1 * var(--fa-li-width, 2em));
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
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
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
}`;function Ie(){const t=Se,e=Oe,n=u.cssPrefix,a=u.replacementClass;let r=pa;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let Ne=!1;function Bt(){u.autoAddCss&&!Ne&&(fa(Ie()),Ne=!0)}var ga={mixout(){return{dom:{css:Ie,insertCss:Bt}}},hooks(){return{beforeDOMElementCreation(){Bt()},beforeI2svg(){Bt()}}}};const Y=B||{};Y[j]||(Y[j]={}),Y[j].styles||(Y[j].styles={}),Y[j].hooks||(Y[j].hooks={}),Y[j].shims||(Y[j].shims=[]);var L=Y[j];const Fe=[],De=function(){w.removeEventListener("DOMContentLoaded",De),pt=1,Fe.map(t=>t())};let pt=!1;R&&(pt=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),pt||w.addEventListener("DOMContentLoaded",De));function ha(t){R&&(pt?setTimeout(t,0):Fe.push(t))}function it(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?_e(t):"<".concat(e," ").concat(ua(n),">").concat(a.map(it).join(""),"</").concat(e,">")}function Le(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Wt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=n,c,f,d;for(a===void 0?(c=1,d=e[i[0]]):(c=0,d=a);c<o;c++)f=i[c],d=s(d,e[f],f,e);return d};function ya(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function $t(t){const e=ya(t);return e.length===1?e[0].toString(16):null}function ba(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function ze(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Gt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=ze(e);typeof L.hooks.addPack=="function"&&!a?L.hooks.addPack(t,ze(e)):L.styles[t]=l(l({},L.styles[t]||{}),r),t==="fas"&&Gt("fa",e)}const{styles:ot,shims:va}=L,Re=Object.keys(zt),xa=Re.reduce((t,e)=>(t[e]=Object.keys(zt[e]),t),{});let Xt=null,je={},Ye={},Ue={},Be={},We={};function Aa(t){return~ia.indexOf(t)}function wa(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Aa(r)?r:null}const $e=()=>{const t=a=>Wt(ot,(r,i,o)=>(r[o]=Wt(i,a,{}),r),{});je=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),Ye=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),We=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});const e="far"in ot||u.autoFetchSvg,n=Wt(va,(a,r)=>{const i=r[0];let o=r[1];const s=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});Ue=n.names,Be=n.unicodes,Xt=gt(u.styleDefault,{family:u.familyDefault})};la(t=>{Xt=gt(t.styleDefault,{family:u.familyDefault})}),$e();function Ht(t,e){return(je[t]||{})[e]}function Sa(t,e){return(Ye[t]||{})[e]}function H(t,e){return(We[t]||{})[e]}function Ge(t){return Ue[t]||{prefix:null,iconName:null}}function Oa(t){const e=Be[t],n=Ht("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function $(){return Xt}const Xe=()=>({prefix:null,iconName:null,rest:[]});function Ea(t){let e=C;const n=Re.reduce((a,r)=>(a[r]="".concat(u.cssPrefix,"-").concat(r),a),{});return ve.forEach(a=>{(t.includes(n[a])||t.some(r=>xa[a].includes(r)))&&(e=a)}),e}function gt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=C}=e,a=ta[n][t];if(n===ut&&!t)return"fad";const r=Ce[n][t]||Ce[n][a],i=t in L.styles?t:null;return r||i||null}function Pa(t){let e=[],n=null;return t.forEach(a=>{const r=wa(u.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function He(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function ht(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Tt.concat(Bn),i=He(t.filter(b=>r.includes(b))),o=He(t.filter(b=>!Tt.includes(b))),s=i.filter(b=>(a=b,!be.includes(b))),[c=null]=s,f=Ea(i),d=l(l({},Pa(o)),{},{prefix:gt(c,{family:f})});return l(l(l({},d),Ta({values:t,family:f,styles:ot,config:u,canonical:d,givenPrefix:a})),ka(n,a,d))}function ka(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?Ge(r):{},o=H(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!ot.far&&ot.fas&&!u.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Ca=ve.filter(t=>t!==C||t!==ut),Ma=Object.keys(Mt).filter(t=>t!==C).map(t=>Object.keys(Mt[t])).flat();function Ta(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=t,s=n===ut,c=e.includes("fa-duotone")||e.includes("fad"),f=o.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(c||f||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Ca.includes(n)&&(Object.keys(i).find(h=>Ma.includes(h))||o.autoFetchSvg)){const h=Fn.get(n).defaultShortPrefixId;a.prefix=h,a.iconName=H(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=$()||"fas"),a}class _a{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=l(l({},this.definitions[i]||{}),r[i]),Gt(i,r[i]);const o=zt[C][i];o&&Gt(o,r[i]),$e()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:s}=a[r],c=s[2];e[i]||(e[i]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(e[i][f]=s)}),e[i][o]=s}),e}}let Ve=[],Z={};const J={},Ia=Object.keys(J);function Na(t,e){let{mixoutsTo:n}=e;return Ve=t,Z={},Object.keys(J).forEach(a=>{Ia.indexOf(a)===-1&&delete J[a]}),Ve.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{Z[o]||(Z[o]=[]),Z[o].push(i[o])})}a.provides&&a.provides(J)}),n}function Vt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(Z[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function V(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(Z[t]||[]).forEach(i=>{i.apply(null,n)})}function G(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return J[t]?J[t].apply(null,e):void 0}function Kt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||$();if(e)return e=H(n,e)||e,Le(Ke.definitions,n,e)||Le(L.styles,n,e)}const Ke=new _a,I={noAuto:()=>{u.autoReplaceSvg=!1,u.observeMutations=!1,V("noAuto")},config:u,dom:{i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(V("beforeI2svg",t),G("pseudoElements2svg",t),G("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,ha(()=>{Fa({autoReplaceSvgRoot:e}),V("watch",t)})}},parse:{icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:H(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=gt(t[0]);return{prefix:n,iconName:H(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(u.cssPrefix,"-"))>-1||t.match(ea))){const e=ht(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||$(),iconName:H(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=$();return{prefix:e,iconName:H(e,t)||t}}}},library:Ke,findIconDefinition:Kt,toHtml:it},Fa=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=w}=t;(Object.keys(L.styles).length>0||u.autoFetchSvg)&&R&&u.autoReplaceSvg&&I.dom.i2svg({node:e})};function yt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>it(n))}}),Object.defineProperty(t,"node",{get:function(){if(!R)return;const n=w.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Da(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:o}=t;if(Ut(o)&&n.found&&!a.found){const{width:s,height:c}=n,f={x:s/c/2,y:.5};r.style=mt(l(l({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function La(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(u.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:o}),children:a}]}]}function qt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:c,titleId:f,extra:d,watchable:b=!1}=t,{width:h,height:x}=n.found?n:e,S=jn.includes(a),A=[u.replacementClass,r?"".concat(u.cssPrefix,"-").concat(r):""].filter(M=>d.classes.indexOf(M)===-1).filter(M=>M!==""||!!M).concat(d.classes).join(" ");let E={children:[],attributes:l(l({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:A,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(x)})};const m=S&&!~d.classes.indexOf("fa-fw")?{width:"".concat(h/x*16*.0625,"em")}:{};b&&(E.attributes[X]=""),s&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(f||rt())},children:[s]}),delete E.attributes.title);const p=l(l({},E),{},{prefix:a,iconName:r,main:e,mask:n,maskId:c,transform:i,symbol:o,styles:l(l({},m),d.styles)}),{children:v,attributes:k}=n.found&&e.found?G("generateAbstractMask",p)||{children:[],attributes:{}}:G("generateAbstractIcon",p)||{children:[],attributes:{}};return p.children=v,p.attributes=k,o?La(p):Da(p)}function qe(t){const{content:e,width:n,height:a,transform:r,title:i,extra:o,watchable:s=!1}=t,c=l(l(l({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(c[X]="");const f=l({},o.styles);Ut(r)&&(f.transform=ma({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const d=mt(f);d.length>0&&(c.style=d);const b=[];return b.push({tag:"span",attributes:c,children:[e]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function za(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=mt(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Qt}=L;function Zt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(jt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(jt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(jt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Ra={found:!1,width:512,height:512};function ja(t,e){!Pe&&!u.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Jt(t,e){let n=e;return e==="fa"&&u.styleDefault!==null&&(e=$()),new Promise((a,r)=>{if(n==="fa"){const i=Ge(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Qt[e]&&Qt[e][t]){const i=Qt[e][t];return a(Zt(i))}ja(t,e),a(l(l({},Ra),{},{icon:u.showMissingIcons&&t?G("missingIconAbstract")||{}:{}}))})}const Qe=()=>{},te=u.measurePerformance&&ct&&ct.mark&&ct.measure?ct:{mark:Qe,measure:Qe},st='FA "6.7.2"',Ya=t=>(te.mark("".concat(st," ").concat(t," begins")),()=>Ze(t)),Ze=t=>{te.mark("".concat(st," ").concat(t," ends")),te.measure("".concat(st," ").concat(t),"".concat(st," ").concat(t," begins"),"".concat(st," ").concat(t," ends"))};var ee={begin:Ya,end:Ze};const bt=()=>{};function Je(t){return typeof(t.getAttribute?t.getAttribute(X):null)=="string"}function Ua(t){const e=t.getAttribute?t.getAttribute(Nt):null,n=t.getAttribute?t.getAttribute(Ft):null;return e&&n}function Ba(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(u.replacementClass)}function Wa(){return u.autoReplaceSvg===!0?vt.replace:vt[u.autoReplaceSvg]||vt.replace}function $a(t){return w.createElementNS("http://www.w3.org/2000/svg",t)}function Ga(t){return w.createElement(t)}function tn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?$a:Ga}=e;if(typeof t=="string")return w.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(tn(i,{ceFn:n}))}),a}function Xa(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const vt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(tn(n),e)}),e.getAttribute(X)===null&&u.keepOriginalSource){let n=w.createComment(Xa(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Yt(e).indexOf(u.replacementClass))return vt.replace(t);const a=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===u.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>it(i)).join(`
`);e.setAttribute(X,""),e.innerHTML=r}};function en(t){t()}function nn(t,e){const n=typeof e=="function"?e:bt;if(t.length===0)n();else{let a=en;u.mutateApproach===Zn&&(a=B.requestAnimationFrame||en),a(()=>{const r=Wa(),i=ee.begin("mutate");t.map(r),i(),n()})}}let ne=!1;function an(){ne=!0}function ae(){ne=!1}let xt=null;function rn(t){if(!ge||!u.observeMutations)return;const{treeCallback:e=bt,nodeCallback:n=bt,pseudoElementsCallback:a=bt,observeMutationsRoot:r=w}=t;xt=new ge(i=>{if(ne)return;const o=$();Q(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Je(s.addedNodes[0])&&(u.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&u.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&Je(s.target)&&~ra.indexOf(s.attributeName))if(s.attributeName==="class"&&Ua(s.target)){const{prefix:c,iconName:f}=ht(Yt(s.target));s.target.setAttribute(Nt,c||o),f&&s.target.setAttribute(Ft,f)}else Ba(s.target)&&n(s.target)})}),R&&xt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ha(){xt&&xt.disconnect()}function Va(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Ka(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=ht(Yt(t));return r.prefix||(r.prefix=$()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Sa(r.prefix,t.innerText)||Ht(r.prefix,$t(t.innerText))),!r.iconName&&u.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function qa(t){const e=Q(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return u.autoA11y&&(n?e["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(a||rt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Qa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function on(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ka(t),i=qa(t),o=Vt("parseNodeAttributes",{},t);let s=e.styleParser?Va(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i}},o)}const{styles:Za}=L;function sn(t){const e=u.autoReplaceSvg==="nest"?on(t,{styleParser:!1}):on(t);return~e.extra.classes.indexOf(Me)?G("generateLayersText",t,e):G("generateSvgReplacementMutation",t,e)}function Ja(){return[...Ln,...Tt]}function ln(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();const n=w.documentElement.classList,a=d=>n.add("".concat(Ee,"-").concat(d)),r=d=>n.remove("".concat(Ee,"-").concat(d)),i=u.autoFetchSvg?Ja():be.concat(Object.keys(Za));i.includes("fa")||i.push("fa");const o=[".".concat(Me,":not([").concat(X,"])")].concat(i.map(d=>".".concat(d,":not([").concat(X,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=Q(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const c=ee.begin("onTree"),f=s.reduce((d,b)=>{try{const h=sn(b);h&&d.push(h)}catch(h){Pe||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise((d,b)=>{Promise.all(f).then(h=>{nn(h,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),d()})}).catch(h=>{c(),b(h)})})}function tr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;sn(t).then(n=>{n&&nn([n],e)})}function er(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Kt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Kt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const nr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=D,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:c=[],attributes:f={},styles:d={}}=e;if(!t)return;const{prefix:b,iconName:h,icon:x}=t;return yt(l({type:"icon"},t),()=>(V("beforeDOMElementCreation",{iconDefinition:t,params:e}),u.autoA11y&&(o?f["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(s||rt()):(f["aria-hidden"]="true",f.focusable="false")),qt({icons:{main:Zt(x),mask:r?Zt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:h,transform:l(l({},D),n),symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:f,styles:d,classes:c}})))};var ar={mixout(){return{icon:er(nr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=ln,t.nodeCallback=tr,t}}},provides(t){t.i2svg=function(e){const{node:n=w,callback:a=()=>{}}=e;return ln(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:s,symbol:c,mask:f,maskId:d,extra:b}=n;return new Promise((h,x)=>{Promise.all([Jt(a,o),f.iconName?Jt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[A,E]=S;h([e,qt({icons:{main:A,mask:E},prefix:o,iconName:a,transform:s,symbol:c,maskId:d,title:r,titleId:i,extra:b,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:o}=e;const s=mt(o);s.length>0&&(a.style=s);let c;return Ut(i)&&(c=G("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},rr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return yt({type:"layer"},()=>{V("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},ir={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return yt({type:"counter",content:t},()=>(V("beforeDOMElementCreation",{content:t,params:e}),za({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(u.cssPrefix,"-layers-counter"),...a]}})))}}}},or={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=D,title:a=null,classes:r=[],attributes:i={},styles:o={}}=e;return yt({type:"text",content:t},()=>(V("beforeDOMElementCreation",{content:t,params:e}),qe({content:t,transform:l(l({},D),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(u.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let o=null,s=null;if(he){const c=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/c,s=f.height/c}return u.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,qe({content:e.innerHTML,width:o,height:s,transform:r,title:a,extra:i,watchable:!0})])}}};const sr=new RegExp('"',"ug"),fn=[1105920,1112319],cn=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Nn),qn),Wn),re=Object.keys(cn).reduce((t,e)=>(t[e.toLowerCase()]=cn[e],t),{}),lr=Object.keys(re).reduce((t,e)=>{const n=re[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function fr(t){const e=t.replace(sr,""),n=ba(e,0),a=n>=fn[0]&&n<=fn[1],r=e.length===2?e[0]===e[1]:!1;return{value:$t(r?e[0]:e),isSecondary:a||r}}function cr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(re[n]||{})[r]||lr[n]}function un(t,e){const n="".concat(Qn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const o=Q(t.children).filter(h=>h.getAttribute(It)===e)[0],s=B.getComputedStyle(t,e),c=s.getPropertyValue("font-family"),f=c.match(na),d=s.getPropertyValue("font-weight"),b=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&b!=="none"&&b!==""){const h=s.getPropertyValue("content");let x=cr(c,d);const{value:S,isSecondary:A}=fr(h),E=f[0].startsWith("FontAwesome");let m=Ht(x,S),p=m;if(E){const v=Oa(S);v.iconName&&v.prefix&&(m=v.iconName,x=v.prefix)}if(m&&!A&&(!o||o.getAttribute(Nt)!==x||o.getAttribute(Ft)!==p)){t.setAttribute(n,p),o&&t.removeChild(o);const v=Qa(),{extra:k}=v;k.attributes[It]=e,Jt(m,x).then(M=>{const K=qt(l(l({},v),{},{icons:{main:M,mask:Xe()},prefix:x,iconName:p,extra:k,watchable:!0})),z=w.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(z,t.firstChild):t.appendChild(z),z.outerHTML=K.map(Ot=>it(Ot)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function ur(t){return Promise.all([un(t,"::before"),un(t,"::after")])}function dr(t){return t.parentNode!==document.head&&!~Jn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(It)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function dn(t){if(R)return new Promise((e,n)=>{const a=Q(t.querySelectorAll("*")).filter(dr).map(ur),r=ee.begin("searchPseudoElements");an(),Promise.all(a).then(()=>{r(),ae(),e()}).catch(()=>{r(),ae(),n()})})}var mr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=dn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=w}=e;u.searchPseudoElements&&dn(n)}}};let mn=!1;var pr={mixout(){return{dom:{unwatch(){an(),mn=!0}}}},hooks(){return{bootstrap(){rn(Vt("mutationObserverCallbacks",{}))},noAuto(){Ha()},watch(t){const{observeMutationsRoot:e}=t;mn?ae():rn(Vt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const pn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var gr={mixout(){return{parse:{transform:t=>pn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=pn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(s," ").concat(c," ").concat(f)},b={transform:"translate(".concat(i/2*-1," -256)")},h={outer:o,inner:d,path:b};return{tag:"g",attributes:l({},h.outer),children:[{tag:"g",attributes:l({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),h.path)}]}]}}}};const ie={x:0,y:0,width:"100%",height:"100%"};function gn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function hr(t){return t.tag==="g"?t.children:[t]}var yr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?ht(n.split(" ").map(r=>r.trim())):Xe();return a.prefix||(a.prefix=$()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:s}=e;const{width:c,icon:f}=r,{width:d,icon:b}=i,h=da({transform:s,containerWidth:d,iconWidth:c}),x={tag:"rect",attributes:l(l({},ie),{},{fill:"white"})},S=f.children?{children:f.children.map(gn)}:{},A={tag:"g",attributes:l({},h.inner),children:[gn(l({tag:f.tag,attributes:l(l({},f.attributes),h.path)},S))]},E={tag:"g",attributes:l({},h.outer),children:[A]},m="mask-".concat(o||rt()),p="clip-".concat(o||rt()),v={tag:"mask",attributes:l(l({},ie),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,E]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:hr(b)},v]};return n.push(k,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(m,")")},ie)}),{children:n,attributes:a}}}},br={provides(t){let e=!1;B.matchMedia&&(e=B.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=l(l({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},vr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},xr=[ga,ar,rr,ir,or,mr,pr,gr,yr,br,vr];Na(xr,{mixoutsTo:I}),I.noAuto;const hn=I.config,Ar=I.library;I.dom;const At=I.parse;I.findIconDefinition,I.toHtml;const wr=I.icon;I.layer;const Sr=I.text;I.counter;function yn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function F(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?yn(Object(n),!0).forEach(function(a){T(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Or(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Er(t){var e=Or(t,"string");return typeof e=="symbol"?e:e+""}function wt(t){"@babel/helpers - typeof";return wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wt(t)}function T(t,e,n){return e=Er(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Pr(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function kr(t,e){if(t==null)return{};var n=Pr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function oe(t){return Cr(t)||Mr(t)||Tr(t)||_r()}function Cr(t){if(Array.isArray(t))return se(t)}function Mr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Tr(t,e){if(t){if(typeof t=="string")return se(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return se(t,e)}}function se(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function _r(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bn={exports:{}};(function(t){(function(e){var n=function(m,p,v){if(!f(p)||b(p)||h(p)||x(p)||c(p))return p;var k,M=0,K=0;if(d(p))for(k=[],K=p.length;M<K;M++)k.push(n(m,p[M],v));else{k={};for(var z in p)Object.prototype.hasOwnProperty.call(p,z)&&(k[m(z,v)]=n(m,p[z],v))}return k},a=function(m,p){p=p||{};var v=p.separator||"_",k=p.split||/(?=[A-Z])/;return m.split(k).join(v)},r=function(m){return S(m)?m:(m=m.replace(/[\-_\s]+(.)?/g,function(p,v){return v?v.toUpperCase():""}),m.substr(0,1).toLowerCase()+m.substr(1))},i=function(m){var p=r(m);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(m,p){return a(m,p).toLowerCase()},s=Object.prototype.toString,c=function(m){return typeof m=="function"},f=function(m){return m===Object(m)},d=function(m){return s.call(m)=="[object Array]"},b=function(m){return s.call(m)=="[object Date]"},h=function(m){return s.call(m)=="[object RegExp]"},x=function(m){return s.call(m)=="[object Boolean]"},S=function(m){return m=m-0,m===m},A=function(m,p){var v=p&&"process"in p?p.process:p;return typeof v!="function"?m:function(k,M){return v(k,m,M)}},E={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(m,p){return n(A(r,p),m)},decamelizeKeys:function(m,p){return n(A(o,p),m,p)},pascalizeKeys:function(m,p){return n(A(i,p),m)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=E:e.humps=E})(Ir)})(bn);var Nr=bn.exports,Fr=["class","style"];function Dr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Nr.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function Lr(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function le(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(c){return le(c)}),r=Object.keys(t.attributes||{}).reduce(function(c,f){var d=t.attributes[f];switch(f){case"class":c.class=Lr(d);break;case"style":c.style=Dr(d);break;default:c.attrs[f]=d}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=kr(n,Fr);return g.h(t.tag,F(F(F({},e),{},{class:r.class,style:F(F({},r.style),o)},r.attrs),s),a)}var vn=!1;try{vn=process.env.NODE_ENV==="production"}catch{}function zr(){if(!vn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function lt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?T({},t,e):{}}function Rr(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},T(T(T(T(T(T(T(T(T(T(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),T(T(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function xn(t){if(t&&wt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(At.icon)return At.icon(t);if(t===null)return null;if(wt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var jr=g.defineComponent({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=g.computed(function(){return xn(e.icon)}),i=g.computed(function(){return lt("classes",Rr(e))}),o=g.computed(function(){return lt("transform",typeof e.transform=="string"?At.transform(e.transform):e.transform)}),s=g.computed(function(){return lt("mask",xn(e.mask))}),c=g.computed(function(){return wr(r.value,F(F(F(F({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});g.watch(c,function(d){if(!d)return zr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var f=g.computed(function(){return c.value?le(c.value.abstract[0],{},a):null});return function(){return f.value}}});g.defineComponent({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var a=n.slots,r=hn.familyPrefix,i=g.computed(function(){return["".concat(r,"-layers")].concat(oe(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return g.h("div",{class:i.value},a.default?a.default():[])}}}),g.defineComponent({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var a=n.attrs,r=hn.familyPrefix,i=g.computed(function(){return lt("classes",[].concat(oe(e.counter?["".concat(r,"-layers-counter")]:[]),oe(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=g.computed(function(){return lt("transform",typeof e.transform=="string"?At.transform(e.transform):e.transform)}),s=g.computed(function(){var f=Sr(e.value.toString(),F(F({},o.value),i.value)),d=f.abstract;return e.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),c=g.computed(function(){return le(s.value,{},a)});return function(){return c.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Yr={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Ur={prefix:"far",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"]};var _=(t=>(t.OnOff="onoff",t.Dimm="dimm",t.DimmTemp="dimm.temp",t.OnOffTemp="onoff.temp",t))(_||{});const Br={class:"dimmer-widget"},Wr={class:"name"},$r={class:"status"},tt=2200,St=6e3,Gr=200,Xr=500,Hr=g.defineComponent({__name:"DimmLight",props:{id:{},props:{},state:{}},setup(t){Ar.add(Yr,Ur);const e=St-tt,n=t,a=y=>{const O="touches"in y?y.touches[0].clientX:y.clientX,P="touches"in y?y.touches[0].clientY:y.clientY,N=A.value.begin.start.x-O,kt=A.value.begin.start.y-P;return{x:N,y:kt}},r=()=>({state:!0,level:50,temp:tt}),i=()=>({direction:"none",begin:{start:{x:0,y:0},rect:{width:0,height:0},ballast:r()}}),o=()=>{s(),E.value=setTimeout(Vr,Xr)},s=()=>{E.value&&clearTimeout(E.value),E.value=void 0},c=y=>{const O=n.props.brightnessMax-n.props.brightnessMin,N=(y-n.props.brightnessMin)/O;return Math.round(N*100)},f=Sn.useStore(),d=g.inject("$dataTracker"),b=g.inject("$socket");d(n.id);const h=g.ref(void 0);g.watch(f.state.data,()=>{h.value=f.state.data.messages[n.id]});const x=g.ref(r()),S=g.ref(r()),A=g.ref(i()),E=g.ref(void 0),m=g.ref(new Date),p=g.ref(null),v=g.computed(()=>A.value.direction==="none"&&!E.value?g.reactive(x.value):g.reactive(S.value)),k=g.computed(()=>v.value.state?["fas","lightbulb"]:["far","lightbulb"]),M=g.ref("#ffffff"),K=()=>{let y=(2700-tt)/e;if(n.props.wtype===_.DimmTemp||n.props.wtype===_.OnOffTemp){const ft=(Math.min(St,Math.max(v.value.temp,St))-tt)/e;y=Math.max(0,Math.min(1,ft))}const O=Math.min(255,Math.max(173,Math.round(255*(1-y)+173*y))),P=Math.min(216,Math.max(193,Math.round(193*(1-y)+216*y))),N=Math.min(255,Math.max(67,Math.round(67*(1-y)+255*y)));M.value=`rgb(${O},${P},${N})`};g.watch(()=>v.value.temp,K),K();const z=g.ref("0");g.watch([()=>v.value.level,()=>v.value.state],()=>{let y=0;return(n.props.wtype===_.Dimm||n.props.wtype===_.DimmTemp)&&(y=v.value.state?c(v.value.level):0),z.value=y.toString()}),g.watch(()=>h.value,()=>{h.value&&h.value.payload&&(x.value={state:!!h.value.payload.state,level:h.value.payload.level||n.props.brightnessMin,temp:h.value.payload.temp||tt})});const Ot=y=>{if(!p.value)return;s();const O=p.value.getBoundingClientRect();A.value={direction:"notDecided",begin:{start:{x:"touches"in y?y.touches[0].clientX:y.clientX,y:"touches"in y?y.touches[0].clientY:y.clientY},rect:O,ballast:{state:x.value.state,level:x.value.level,temp:x.value.temp}}},S.value={state:x.value.state,level:x.value.level,temp:x.value.temp},document.addEventListener("mousemove",Et),document.addEventListener("mouseup",Pt),document.addEventListener("touchmove",Et),document.addEventListener("touchend",Pt)},Et=y=>{switch(A.value.direction){case"none":return;case"notDecided":Kr(y);case"horizontal":qr(y);break;case"vertical":Qr(y);break}},Pt=y=>{var O;if(A.value.direction==="notDecided")if(n.props.wtype===_.OnOff||n.props.wtype===_.OnOffTemp)S.value.state=!x.value.state;else{const P="touches"in y?y.touches[0].clientY:y.clientY,N=(O=p.value)==null?void 0:O.getBoundingClientRect();let kt=P-((N==null?void 0:N.top)||0),ft=1-Math.abs(kt)/((N==null?void 0:N.height)||1),wn=n.props.brightnessMin+Math.round((n.props.brightnessMax-n.props.brightnessMin)*ft);S.value.state=ft>.1,ft>.9&&(wn=n.props.brightnessMax),S.value.level=S.value.state?wn:n.props.brightnessMin}An(),o(),A.value=i(),document.removeEventListener("mousemove",Et),document.removeEventListener("mouseup",Pt),document.removeEventListener("touchmove",Et),document.removeEventListener("touchend",Pt)},An=y=>{const O=new Date;if(O.getTime()-m.value.getTime()>Gr){const P={event:"set",value:{level:S.value.state?n.props.brightnessMax:0,state:S.value.state,temp:0}};(n.props.wtype===_.Dimm||n.props.wtype===_.DimmTemp)&&(P.value.level=S.value.level),(n.props.wtype===_.DimmTemp||n.props.wtype===_.OnOffTemp)&&(P.value.temp=S.value.temp),(P.value.state!==x.value.state||P.value.level!==x.value.level||P.value.temp!==x.value.temp)&&b.emit("widget-change",n.id,{payload:P}),m.value=O}};g.watch(S.value,()=>{An()});const Vr=()=>{s()},Kr=y=>{const O=a(y);n.props.wtype!==_.OnOff&&(O.y===0&&O.x===0||(n.props.wtype===_.DimmTemp?A.value.direction=Math.abs(O.x)>Math.abs(O.y)?"horizontal":"vertical":n.props.wtype===_.OnOffTemp?A.value.direction="horizontal":A.value.direction="vertical"))},qr=y=>{const P=a(y).x/A.value.begin.rect.width;S.value.temp=Math.max(tt,Math.min(St,A.value.begin.ballast.temp-Math.round(P*e)))},Qr=y=>{const O=a(y),P=A.value.begin.ballast.level+Math.round(O.y/A.value.begin.rect.height*(n.props.brightnessMax-n.props.brightnessMin));S.value.level=Math.max(n.props.brightnessMin,Math.min(n.props.brightnessMax,P)),S.value.state=!(!P||P<n.props.brightnessMin)};return(y,O)=>(g.openBlock(),g.createElementBlock("div",Br,[g.createElementVNode("div",Wr,g.toDisplayString(n.props.label),1),g.createElementVNode("div",$r,g.toDisplayString(c(v.value.level))+"%",1),g.createElementVNode("div",{class:"dimmer-bar",ref_key:"dimmerBarElt",ref:p,onMousedown:Ot,onTouchstart:Ot},[g.createElementVNode("div",{class:"dimmer-fill",style:g.normalizeStyle({height:z.value+"%",backgroundColor:M.value})},null,4),g.createVNode(g.unref(jr),{icon:k.value,class:"lightbulb-icon"},null,8,["icon"])],544)]))}});U.DimmLight=Hr,Object.defineProperty(U,Symbol.toStringTag,{value:"Module"})});
