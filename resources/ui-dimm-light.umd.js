(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".dimmer-widget{display:flex;flex-direction:column;align-items:center;width:80px;-webkit-user-select:none;user-select:none;font-family:sans-serif}.lightbulb-icon{font-size:32px;transition:color .3s ease-in-out;position:absolute;bottom:20px;left:50%;width:40px;height:40px;display:block;margin-left:-20px;color:#fff}.dimmer-bar{width:80px;height:200px;border-radius:15px;background:linear-gradient(to bottom,#444,#111);position:relative;overflow:hidden;touch-action:none;margin-top:30px}.dimmer-fill{position:absolute;bottom:0;width:100%;transition:height .1s ease-out;background-color:#fc0}.name{margin-top:10px;font-size:16px;color:#fff}.status{margin-top:4px;font-size:12px;color:#d3d3d3}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
(function(z,h){typeof exports=="object"&&typeof module<"u"?h(exports,require("vue"),require("vuex")):typeof define=="function"&&define.amd?define(["exports","vue","vuex"],h):(z=typeof globalThis<"u"?globalThis:z||self,h(z["ui-dimm-light"]={},z.Vue,z.vuex))})(this,function(z,h,hn){"use strict";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function yn(t,e,n){return(e=vn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ee(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ee(Object(n),!0).forEach(function(a){yn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function bn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function vn(t){var e=bn(t,"string");return typeof e=="symbol"?e:e+""}const ne=()=>{};let vt={},ae={},re=null,ie={mark:ne,measure:ne};try{typeof window<"u"&&(vt=window),typeof document<"u"&&(ae=document),typeof MutationObserver<"u"&&(re=MutationObserver),typeof performance<"u"&&(ie=performance)}catch{}const{userAgent:oe=""}=vt.navigator||{},R=vt,x=ae,se=re,ot=ie;R.document;const M=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",le=~oe.indexOf("MSIE")||~oe.indexOf("Trident/");var xn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,An=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,fe={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Sn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ce=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],w="classic",st="duotone",wn="sharp",On="sharp-duotone",ue=[w,st,wn,On],En={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Pn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},kn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Cn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},In=["fak","fa-kit","fakd","fa-kit-duotone"],de={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Nn=["kit"],_n={kit:{"fa-kit":"fak"}},Tn=["fak","fakd"],Fn={kit:{fak:"fa-kit"}},me={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},lt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Mn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ln=["fak","fa-kit","fakd","fa-kit-duotone"],Dn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},zn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Rn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},xt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},jn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],At=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Mn,...jn],Yn=["solid","regular","light","thin","duotone","brands"],ge=[1,2,3,4,5,6,7,8,9,10],Bn=ge.concat([11,12,13,14,15,16,17,18,19,20]),Un=[...Object.keys(Rn),...Yn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",lt.GROUP,lt.SWAP_OPACITY,lt.PRIMARY,lt.SECONDARY].concat(ge.map(t=>"".concat(t,"x"))).concat(Bn.map(t=>"w-".concat(t))),Wn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const L="___FONT_AWESOME___",St=16,pe="fa",he="svg-inline--fa",U="data-fa-i2svg",wt="data-fa-pseudo-element",$n="data-fa-pseudo-element-pending",Ot="data-prefix",Et="data-icon",ye="fontawesome-i2svg",Xn="async",Gn=["HTML","HEAD","STYLE","SCRIPT"],be=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})();function Q(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[w]}})}const ve=l({},fe);ve[w]=l(l(l(l({},{"fa-duotone":"duotone"}),fe[w]),de.kit),de["kit-duotone"]);const Hn=Q(ve),Pt=l({},Cn);Pt[w]=l(l(l(l({},{duotone:"fad"}),Pt[w]),me.kit),me["kit-duotone"]);const xe=Q(Pt),kt=l({},xt);kt[w]=l(l({},kt[w]),Fn.kit);const Ct=Q(kt),It=l({},zn);It[w]=l(l({},It[w]),_n.kit),Q(It);const Vn=xn,Ae="fa-layers-text",Kn=An,qn=l({},En);Q(qn);const Jn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Nt=Sn,Qn=[...Nn,...Un],Z=R.FontAwesomeConfig||{};function Zn(t){var e=x.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ta(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}x&&typeof x.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=ta(Zn(n));r!=null&&(Z[a]=r)});const Se={styleDefault:"solid",familyDefault:w,cssPrefix:pe,replacementClass:he,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z.familyPrefix&&(Z.cssPrefix=Z.familyPrefix);const H=l(l({},Se),Z);H.autoReplaceSvg||(H.observeMutations=!1);const d={};Object.keys(Se).forEach(t=>{Object.defineProperty(d,t,{enumerable:!0,set:function(e){H[t]=e,tt.forEach(n=>n(d))},get:function(){return H[t]}})}),Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){H.cssPrefix=t,tt.forEach(e=>e(d))},get:function(){return H.cssPrefix}}),R.FontAwesomeConfig=d;const tt=[];function ea(t){return tt.push(t),()=>{tt.splice(tt.indexOf(t),1)}}const j=St,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function na(t){if(!t||!M)return;const e=x.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=x.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return x.head.insertBefore(e,a),t}const aa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function et(){let t=12,e="";for(;t-- >0;)e+=aa[Math.random()*62|0];return e}function V(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function _t(t){return t.classList?V(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function we(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ra(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(we(t[n]),'" '),"").trim()}function ft(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Tt(t){return t.size!==T.size||t.x!==T.x||t.y!==T.y||t.rotate!==T.rotate||t.flipX||t.flipY}function ia(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:c}}function oa(t){let{transform:e,width:n=St,height:a=St,startCentered:r=!1}=t,i="";return r&&le?i+="translate(".concat(e.x/j-n/2,"em, ").concat(e.y/j-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/j,"em), calc(-50% + ").concat(e.y/j,"em)) "):i+="translate(".concat(e.x/j,"em, ").concat(e.y/j,"em) "),i+="scale(".concat(e.size/j*(e.flipX?-1:1),", ").concat(e.size/j*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var sa=`:root, :host {
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
}`;function Oe(){const t=pe,e=he,n=d.cssPrefix,a=d.replacementClass;let r=sa;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let Ee=!1;function Ft(){d.autoAddCss&&!Ee&&(na(Oe()),Ee=!0)}var la={mixout(){return{dom:{css:Oe,insertCss:Ft}}},hooks(){return{beforeDOMElementCreation(){Ft()},beforeI2svg(){Ft()}}}};const D=R||{};D[L]||(D[L]={}),D[L].styles||(D[L].styles={}),D[L].hooks||(D[L].hooks={}),D[L].shims||(D[L].shims=[]);var F=D[L];const Pe=[],ke=function(){x.removeEventListener("DOMContentLoaded",ke),ct=1,Pe.map(t=>t())};let ct=!1;M&&(ct=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),ct||x.addEventListener("DOMContentLoaded",ke));function fa(t){M&&(ct?setTimeout(t,0):Pe.push(t))}function nt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?we(t):"<".concat(e," ").concat(ra(n),">").concat(a.map(nt).join(""),"</").concat(e,">")}function Ce(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Mt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=n,u,c,f;for(a===void 0?(u=1,f=e[i[0]]):(u=0,f=a);u<o;u++)c=i[u],f=s(f,e[c],c,e);return f};function ca(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Lt(t){const e=ca(t);return e.length===1?e[0].toString(16):null}function ua(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ie(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Dt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Ie(e);typeof F.hooks.addPack=="function"&&!a?F.hooks.addPack(t,Ie(e)):F.styles[t]=l(l({},F.styles[t]||{}),r),t==="fas"&&Dt("fa",e)}const{styles:at,shims:da}=F,Ne=Object.keys(Ct),ma=Ne.reduce((t,e)=>(t[e]=Object.keys(Ct[e]),t),{});let zt=null,_e={},Te={},Fe={},Me={},Le={};function ga(t){return~Qn.indexOf(t)}function pa(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ga(r)?r:null}const De=()=>{const t=a=>Mt(at,(r,i,o)=>(r[o]=Mt(i,a,{}),r),{});_e=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),Te=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),Le=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});const e="far"in at||d.autoFetchSvg,n=Mt(da,(a,r)=>{const i=r[0];let o=r[1];const s=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});Fe=n.names,Me=n.unicodes,zt=ut(d.styleDefault,{family:d.familyDefault})};ea(t=>{zt=ut(t.styleDefault,{family:d.familyDefault})}),De();function Rt(t,e){return(_e[t]||{})[e]}function ha(t,e){return(Te[t]||{})[e]}function W(t,e){return(Le[t]||{})[e]}function ze(t){return Fe[t]||{prefix:null,iconName:null}}function ya(t){const e=Me[t],n=Rt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Y(){return zt}const Re=()=>({prefix:null,iconName:null,rest:[]});function ba(t){let e=w;const n=Ne.reduce((a,r)=>(a[r]="".concat(d.cssPrefix,"-").concat(r),a),{});return ue.forEach(a=>{(t.includes(n[a])||t.some(r=>ma[a].includes(r)))&&(e=a)}),e}function ut(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=w}=e,a=Hn[n][t];if(n===st&&!t)return"fad";const r=xe[n][t]||xe[n][a],i=t in F.styles?t:null;return r||i||null}function va(t){let e=[],n=null;return t.forEach(a=>{const r=pa(d.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function je(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function dt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=At.concat(Ln),i=je(t.filter(b=>r.includes(b))),o=je(t.filter(b=>!At.includes(b))),s=i.filter(b=>(a=b,!ce.includes(b))),[u=null]=s,c=ba(i),f=l(l({},va(o)),{},{prefix:ut(u,{family:c})});return l(l(l({},f),wa({values:t,family:c,styles:at,config:d,canonical:f,givenPrefix:a})),xa(n,a,f))}function xa(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?ze(r):{},o=W(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!at.far&&at.fas&&!d.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Aa=ue.filter(t=>t!==w||t!==st),Sa=Object.keys(xt).filter(t=>t!==w).map(t=>Object.keys(xt[t])).flat();function wa(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=t,s=n===st,u=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",f=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(u||c||f)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Aa.includes(n)&&(Object.keys(i).find(y=>Sa.includes(y))||o.autoFetchSvg)){const y=kn.get(n).defaultShortPrefixId;a.prefix=y,a.iconName=W(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=Y()||"fas"),a}class Oa{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=l(l({},this.definitions[i]||{}),r[i]),Dt(i,r[i]);const o=Ct[w][i];o&&Dt(o,r[i]),De()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:s}=a[r],u=s[2];e[i]||(e[i]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[i][c]=s)}),e[i][o]=s}),e}}let Ye=[],K={};const q={},Ea=Object.keys(q);function Pa(t,e){let{mixoutsTo:n}=e;return Ye=t,K={},Object.keys(q).forEach(a=>{Ea.indexOf(a)===-1&&delete q[a]}),Ye.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{K[o]||(K[o]=[]),K[o].push(i[o])})}a.provides&&a.provides(q)}),n}function jt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(K[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function $(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(K[t]||[]).forEach(i=>{i.apply(null,n)})}function B(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return q[t]?q[t].apply(null,e):void 0}function Yt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Y();if(e)return e=W(n,e)||e,Ce(Be.definitions,n,e)||Ce(F.styles,n,e)}const Be=new Oa,I={noAuto:()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,$("noAuto")},config:d,dom:{i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?($("beforeI2svg",t),B("pseudoElements2svg",t),B("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,fa(()=>{ka({autoReplaceSvgRoot:e}),$("watch",t)})}},parse:{icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:W(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ut(t[0]);return{prefix:n,iconName:W(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(Vn))){const e=dt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Y(),iconName:W(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Y();return{prefix:e,iconName:W(e,t)||t}}}},library:Be,findIconDefinition:Yt,toHtml:nt},ka=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=x}=t;(Object.keys(F.styles).length>0||d.autoFetchSvg)&&M&&d.autoReplaceSvg&&I.dom.i2svg({node:e})};function mt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>nt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!M)return;const n=x.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Ca(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:o}=t;if(Tt(o)&&n.found&&!a.found){const{width:s,height:u}=n,c={x:s/u/2,y:.5};r.style=ft(l(l({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ia(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:o}),children:a}]}]}function Bt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:u,titleId:c,extra:f,watchable:b=!1}=t,{width:y,height:A}=n.found?n:e,E=Tn.includes(a),N=[d.replacementClass,r?"".concat(d.cssPrefix,"-").concat(r):""].filter(k=>f.classes.indexOf(k)===-1).filter(k=>k!==""||!!k).concat(f.classes).join(" ");let O={children:[],attributes:l(l({},f.attributes),{},{"data-prefix":a,"data-icon":r,class:N,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(A)})};const m=E&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/A*16*.0625,"em")}:{};b&&(O.attributes[U]=""),s&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(c||et())},children:[s]}),delete O.attributes.title);const g=l(l({},O),{},{prefix:a,iconName:r,main:e,mask:n,maskId:u,transform:i,symbol:o,styles:l(l({},m),f.styles)}),{children:v,attributes:S}=n.found&&e.found?B("generateAbstractMask",g)||{children:[],attributes:{}}:B("generateAbstractIcon",g)||{children:[],attributes:{}};return g.children=v,g.attributes=S,o?Ia(g):Ca(g)}function Ue(t){const{content:e,width:n,height:a,transform:r,title:i,extra:o,watchable:s=!1}=t,u=l(l(l({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[U]="");const c=l({},o.styles);Tt(r)&&(c.transform=oa({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const f=ft(c);f.length>0&&(u.style=f);const b=[];return b.push({tag:"span",attributes:u,children:[e]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function Na(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ft(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Ut}=F;function Wt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(Nt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Nt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Nt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const _a={found:!1,width:512,height:512};function Ta(t,e){!be&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function $t(t,e){let n=e;return e==="fa"&&d.styleDefault!==null&&(e=Y()),new Promise((a,r)=>{if(n==="fa"){const i=ze(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Ut[e]&&Ut[e][t]){const i=Ut[e][t];return a(Wt(i))}Ta(t,e),a(l(l({},_a),{},{icon:d.showMissingIcons&&t?B("missingIconAbstract")||{}:{}}))})}const We=()=>{},Xt=d.measurePerformance&&ot&&ot.mark&&ot.measure?ot:{mark:We,measure:We},rt='FA "6.7.2"',Fa=t=>(Xt.mark("".concat(rt," ").concat(t," begins")),()=>$e(t)),$e=t=>{Xt.mark("".concat(rt," ").concat(t," ends")),Xt.measure("".concat(rt," ").concat(t),"".concat(rt," ").concat(t," begins"),"".concat(rt," ").concat(t," ends"))};var Gt={begin:Fa,end:$e};const gt=()=>{};function Xe(t){return typeof(t.getAttribute?t.getAttribute(U):null)=="string"}function Ma(t){const e=t.getAttribute?t.getAttribute(Ot):null,n=t.getAttribute?t.getAttribute(Et):null;return e&&n}function La(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Da(){return d.autoReplaceSvg===!0?pt.replace:pt[d.autoReplaceSvg]||pt.replace}function za(t){return x.createElementNS("http://www.w3.org/2000/svg",t)}function Ra(t){return x.createElement(t)}function Ge(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?za:Ra}=e;if(typeof t=="string")return x.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(Ge(i,{ceFn:n}))}),a}function ja(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const pt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Ge(n),e)}),e.getAttribute(U)===null&&d.keepOriginalSource){let n=x.createComment(ja(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~_t(e).indexOf(d.replacementClass))return pt.replace(t);const a=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===d.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>nt(i)).join(`
`);e.setAttribute(U,""),e.innerHTML=r}};function He(t){t()}function Ve(t,e){const n=typeof e=="function"?e:gt;if(t.length===0)n();else{let a=He;d.mutateApproach===Xn&&(a=R.requestAnimationFrame||He),a(()=>{const r=Da(),i=Gt.begin("mutate");t.map(r),i(),n()})}}let Ht=!1;function Ke(){Ht=!0}function Vt(){Ht=!1}let ht=null;function qe(t){if(!se||!d.observeMutations)return;const{treeCallback:e=gt,nodeCallback:n=gt,pseudoElementsCallback:a=gt,observeMutationsRoot:r=x}=t;ht=new se(i=>{if(Ht)return;const o=Y();V(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Xe(s.addedNodes[0])&&(d.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&d.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&Xe(s.target)&&~Jn.indexOf(s.attributeName))if(s.attributeName==="class"&&Ma(s.target)){const{prefix:u,iconName:c}=dt(_t(s.target));s.target.setAttribute(Ot,u||o),c&&s.target.setAttribute(Et,c)}else La(s.target)&&n(s.target)})}),M&&ht.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ya(){ht&&ht.disconnect()}function Ba(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Ua(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=dt(_t(t));return r.prefix||(r.prefix=Y()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ha(r.prefix,t.innerText)||Rt(r.prefix,Lt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Wa(t){const e=V(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||et()):(e["aria-hidden"]="true",e.focusable="false")),e}function $a(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Je(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ua(t),i=Wa(t),o=jt("parseNodeAttributes",{},t);let s=e.styleParser?Ba(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i}},o)}const{styles:Xa}=F;function Qe(t){const e=d.autoReplaceSvg==="nest"?Je(t,{styleParser:!1}):Je(t);return~e.extra.classes.indexOf(Ae)?B("generateLayersText",t,e):B("generateSvgReplacementMutation",t,e)}function Ga(){return[...In,...At]}function Ze(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();const n=x.documentElement.classList,a=f=>n.add("".concat(ye,"-").concat(f)),r=f=>n.remove("".concat(ye,"-").concat(f)),i=d.autoFetchSvg?Ga():ce.concat(Object.keys(Xa));i.includes("fa")||i.push("fa");const o=[".".concat(Ae,":not([").concat(U,"])")].concat(i.map(f=>".".concat(f,":not([").concat(U,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=V(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const u=Gt.begin("onTree"),c=s.reduce((f,b)=>{try{const y=Qe(b);y&&f.push(y)}catch(y){be||y.name==="MissingIcon"&&console.error(y)}return f},[]);return new Promise((f,b)=>{Promise.all(c).then(y=>{Ve(y,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),u(),f()})}).catch(y=>{u(),b(y)})})}function Ha(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qe(t).then(n=>{n&&Ve([n],e)})}function Va(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Yt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Yt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const Ka=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=T,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:u=[],attributes:c={},styles:f={}}=e;if(!t)return;const{prefix:b,iconName:y,icon:A}=t;return mt(l({type:"icon"},t),()=>($("beforeDOMElementCreation",{iconDefinition:t,params:e}),d.autoA11y&&(o?c["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(s||et()):(c["aria-hidden"]="true",c.focusable="false")),Bt({icons:{main:Wt(A),mask:r?Wt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:y,transform:l(l({},T),n),symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:c,styles:f,classes:u}})))};var qa={mixout(){return{icon:Va(Ka)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ze,t.nodeCallback=Ha,t}}},provides(t){t.i2svg=function(e){const{node:n=x,callback:a=()=>{}}=e;return Ze(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:s,symbol:u,mask:c,maskId:f,extra:b}=n;return new Promise((y,A)=>{Promise.all([$t(a,o),c.iconName?$t(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(E=>{let[N,O]=E;y([e,Bt({icons:{main:N,mask:O},prefix:o,iconName:a,transform:s,symbol:u,maskId:f,title:r,titleId:i,extra:b,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:o}=e;const s=ft(o);s.length>0&&(a.style=s);let u;return Tt(i)&&(u=B("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},Ja={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return mt({type:"layer"},()=>{$("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Qa={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return mt({type:"counter",content:t},()=>($("beforeDOMElementCreation",{content:t,params:e}),Na({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(d.cssPrefix,"-layers-counter"),...a]}})))}}}},Za={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=T,title:a=null,classes:r=[],attributes:i={},styles:o={}}=e;return mt({type:"text",content:t},()=>($("beforeDOMElementCreation",{content:t,params:e}),Ue({content:t,transform:l(l({},T),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(d.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let o=null,s=null;if(le){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,s=c.height/u}return d.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Ue({content:e.innerHTML,width:o,height:s,transform:r,title:a,extra:i,watchable:!0})])}}};const tr=new RegExp('"',"ug"),tn=[1105920,1112319],en=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Pn),Wn),Dn),Kt=Object.keys(en).reduce((t,e)=>(t[e.toLowerCase()]=en[e],t),{}),er=Object.keys(Kt).reduce((t,e)=>{const n=Kt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function nr(t){const e=t.replace(tr,""),n=ua(e,0),a=n>=tn[0]&&n<=tn[1],r=e.length===2?e[0]===e[1]:!1;return{value:Lt(r?e[0]:e),isSecondary:a||r}}function ar(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Kt[n]||{})[r]||er[n]}function nn(t,e){const n="".concat($n).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const o=V(t.children).filter(y=>y.getAttribute(wt)===e)[0],s=R.getComputedStyle(t,e),u=s.getPropertyValue("font-family"),c=u.match(Kn),f=s.getPropertyValue("font-weight"),b=s.getPropertyValue("content");if(o&&!c)return t.removeChild(o),a();if(c&&b!=="none"&&b!==""){const y=s.getPropertyValue("content");let A=ar(u,f);const{value:E,isSecondary:N}=nr(y),O=c[0].startsWith("FontAwesome");let m=Rt(A,E),g=m;if(O){const v=ya(E);v.iconName&&v.prefix&&(m=v.iconName,A=v.prefix)}if(m&&!N&&(!o||o.getAttribute(Ot)!==A||o.getAttribute(Et)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);const v=$a(),{extra:S}=v;S.attributes[wt]=e,$t(m,A).then(k=>{const J=Bt(l(l({},v),{},{icons:{main:k,mask:Re()},prefix:A,iconName:g,extra:S,watchable:!0})),p=x.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(p,t.firstChild):t.appendChild(p),p.outerHTML=J.map(C=>nt(C)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function rr(t){return Promise.all([nn(t,"::before"),nn(t,"::after")])}function ir(t){return t.parentNode!==document.head&&!~Gn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(wt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function an(t){if(M)return new Promise((e,n)=>{const a=V(t.querySelectorAll("*")).filter(ir).map(rr),r=Gt.begin("searchPseudoElements");Ke(),Promise.all(a).then(()=>{r(),Vt(),e()}).catch(()=>{r(),Vt(),n()})})}var or={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=an,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=x}=e;d.searchPseudoElements&&an(n)}}};let rn=!1;var sr={mixout(){return{dom:{unwatch(){Ke(),rn=!0}}}},hooks(){return{bootstrap(){qe(jt("mutationObserverCallbacks",{}))},noAuto(){Ya()},watch(t){const{observeMutationsRoot:e}=t;rn?Vt():qe(jt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const on=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var lr={mixout(){return{parse:{transform:t=>on(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=on(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(s," ").concat(u," ").concat(c)},b={transform:"translate(".concat(i/2*-1," -256)")},y={outer:o,inner:f,path:b};return{tag:"g",attributes:l({},y.outer),children:[{tag:"g",attributes:l({},y.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),y.path)}]}]}}}};const qt={x:0,y:0,width:"100%",height:"100%"};function sn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function fr(t){return t.tag==="g"?t.children:[t]}var cr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?dt(n.split(" ").map(r=>r.trim())):Re();return a.prefix||(a.prefix=Y()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:s}=e;const{width:u,icon:c}=r,{width:f,icon:b}=i,y=ia({transform:s,containerWidth:f,iconWidth:u}),A={tag:"rect",attributes:l(l({},qt),{},{fill:"white"})},E=c.children?{children:c.children.map(sn)}:{},N={tag:"g",attributes:l({},y.inner),children:[sn(l({tag:c.tag,attributes:l(l({},c.attributes),y.path)},E))]},O={tag:"g",attributes:l({},y.outer),children:[N]},m="mask-".concat(o||et()),g="clip-".concat(o||et()),v={tag:"mask",attributes:l(l({},qt),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,O]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:fr(b)},v]};return n.push(S,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(m,")")},qt)}),{children:n,attributes:a}}}},ur={provides(t){let e=!1;R.matchMedia&&(e=R.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=l(l({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},dr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},mr=[la,qa,Ja,Qa,Za,or,sr,lr,cr,ur,dr];Pa(mr,{mixoutsTo:I}),I.noAuto;const ln=I.config,gr=I.library;I.dom;const yt=I.parse;I.findIconDefinition,I.toHtml;const pr=I.icon;I.layer;const hr=I.text;I.counter;function fn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?fn(Object(n),!0).forEach(function(a){P(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):fn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function yr(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function br(t){var e=yr(t,"string");return typeof e=="symbol"?e:e+""}function bt(t){"@babel/helpers - typeof";return bt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bt(t)}function P(t,e,n){return e=br(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vr(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function xr(t,e){if(t==null)return{};var n=vr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Jt(t){return Ar(t)||Sr(t)||wr(t)||Or()}function Ar(t){if(Array.isArray(t))return Qt(t)}function Sr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function wr(t,e){if(t){if(typeof t=="string")return Qt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qt(t,e)}}function Qt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Or(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cn={exports:{}};(function(t){(function(e){var n=function(m,g,v){if(!c(g)||b(g)||y(g)||A(g)||u(g))return g;var S,k=0,J=0;if(f(g))for(S=[],J=g.length;k<J;k++)S.push(n(m,g[k],v));else{S={};for(var p in g)Object.prototype.hasOwnProperty.call(g,p)&&(S[m(p,v)]=n(m,g[p],v))}return S},a=function(m,g){g=g||{};var v=g.separator||"_",S=g.split||/(?=[A-Z])/;return m.split(S).join(v)},r=function(m){return E(m)?m:(m=m.replace(/[\-_\s]+(.)?/g,function(g,v){return v?v.toUpperCase():""}),m.substr(0,1).toLowerCase()+m.substr(1))},i=function(m){var g=r(m);return g.substr(0,1).toUpperCase()+g.substr(1)},o=function(m,g){return a(m,g).toLowerCase()},s=Object.prototype.toString,u=function(m){return typeof m=="function"},c=function(m){return m===Object(m)},f=function(m){return s.call(m)=="[object Array]"},b=function(m){return s.call(m)=="[object Date]"},y=function(m){return s.call(m)=="[object RegExp]"},A=function(m){return s.call(m)=="[object Boolean]"},E=function(m){return m=m-0,m===m},N=function(m,g){var v=g&&"process"in g?g.process:g;return typeof v!="function"?m:function(S,k){return v(S,m,k)}},O={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(m,g){return n(N(r,g),m)},decamelizeKeys:function(m,g){return n(N(o,g),m,g)},pascalizeKeys:function(m,g){return n(N(i,g),m)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=O:e.humps=O})(Er)})(cn);var Pr=cn.exports,kr=["class","style"];function Cr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Pr.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function Ir(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Zt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(u){return Zt(u)}),r=Object.keys(t.attributes||{}).reduce(function(u,c){var f=t.attributes[c];switch(c){case"class":u.class=Ir(f);break;case"style":u.style=Cr(f);break;default:u.attrs[c]=f}return u},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=xr(n,kr);return h.h(t.tag,_(_(_({},e),{},{class:r.class,style:_(_({},r.style),o)},r.attrs),s),a)}var un=!1;try{un=process.env.NODE_ENV==="production"}catch{}function Nr(){if(!un&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function it(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?P({},t,e):{}}function _r(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},P(P(P(P(P(P(P(P(P(P(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),P(P(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function dn(t){if(t&&bt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(yt.icon)return yt.icon(t);if(t===null)return null;if(bt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Tr=h.defineComponent({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=h.computed(function(){return dn(e.icon)}),i=h.computed(function(){return it("classes",_r(e))}),o=h.computed(function(){return it("transform",typeof e.transform=="string"?yt.transform(e.transform):e.transform)}),s=h.computed(function(){return it("mask",dn(e.mask))}),u=h.computed(function(){return pr(r.value,_(_(_(_({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});h.watch(u,function(f){if(!f)return Nr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=h.computed(function(){return u.value?Zt(u.value.abstract[0],{},a):null});return function(){return c.value}}});h.defineComponent({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var a=n.slots,r=ln.familyPrefix,i=h.computed(function(){return["".concat(r,"-layers")].concat(Jt(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return h.h("div",{class:i.value},a.default?a.default():[])}}}),h.defineComponent({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var a=n.attrs,r=ln.familyPrefix,i=h.computed(function(){return it("classes",[].concat(Jt(e.counter?["".concat(r,"-layers-counter")]:[]),Jt(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=h.computed(function(){return it("transform",typeof e.transform=="string"?yt.transform(e.transform):e.transform)}),s=h.computed(function(){var c=hr(e.value.toString(),_(_({},o.value),i.value)),f=c.abstract;return e.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),u=h.computed(function(){return Zt(s.value,{},a)});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Fr={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Mr={prefix:"far",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"]},Lr={class:"dimmer-widget"},Dr={class:"name"},zr={class:"status"},mn=0,gn=100,te=2700,pn=4e3,Rr=h.defineComponent({__name:"DimmLight",props:{id:{},props:{},state:{}},setup(t){gr.add(Fr,Mr);const e=gn-mn,n=pn-te,a=t,r=hn.useStore(),i=h.computed(()=>r.state.data.messages);h.watch(i,()=>{console.log(i.value)});const o=h.inject("$dataTracker"),s=h.ref(50),u=h.ref(3e3),c=h.ref(0),f=h.ref(null),b=h.ref(null),y=h.computed(()=>s.value>0?["fas","lightbulb"]:["far","lightbulb"]),A=h.computed(()=>{const p=(u.value-te)/n,C=Math.round(255*(1-p)+173*p),X=Math.round(193*(1-p)+216*p),G=Math.round(67*(1-p)+255*p);return`rgb(${C},${X},${G})`});function E(p){switch(c.value){case 0:return;case 1:N(p);case 2:O(p);break;case 3:m(p);break}}function N(p){if(!f.value)return;const C="touches"in p?p.touches[0].clientX:p.clientX,X="touches"in p?p.touches[0].clientY:p.clientY,G=Math.abs(f.value.start.x-C),jr=Math.abs(f.value.start.y-X);c.value=G>jr?2:3}function O(p){if(!f.value)return;const C="touches"in p?p.touches[0].clientX:p.clientX,X=f.value.start.x-C,G=Math.max(te,Math.min(pn,f.value.temperature+X/f.value.rect.width*n));u.value=G}function m(p){if(!f.value)return;const C="touches"in p?p.touches[0].clientY:p.clientY,X=f.value.start.y-C,G=Math.max(mn,Math.min(gn,f.value.brightness+X/f.value.rect.height*e));s.value=Math.round(G)}function g(p){if(!b.value)return;const C=b.value.getBoundingClientRect();f.value={start:{x:"touches"in p?p.touches[0].clientX:p.clientX,y:"touches"in p?p.touches[0].clientY:p.clientY},rect:C,brightness:s.value,temperature:u.value},c.value=1,document.addEventListener("mousemove",E),document.addEventListener("mouseup",v),document.addEventListener("touchmove",E),document.addEventListener("touchend",v)}function v(){c.value=0,f.value=null,document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",v),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",v)}const S=p=>{console.log(`Input: ${JSON.stringify(p)}`)},k=(p,C)=>{console.log(`Load msg: ${p&&JSON.stringify(p)}, state: ${C}`)},J=p=>{console.log(`Dyn props: ${JSON.stringify(p)}`)};return o(a.id,S,k,J),(p,C)=>(h.openBlock(),h.createElementBlock("div",Lr,[h.createElementVNode("div",Dr,h.toDisplayString(a.props.label),1),h.createElementVNode("div",zr,h.toDisplayString(s.value)+"%",1),h.createElementVNode("div",{class:"dimmer-bar",ref_key:"dimmerBarElt",ref:b,onMousedown:g,onTouchstart:g},[h.createElementVNode("div",{class:"dimmer-fill",style:h.normalizeStyle({height:s.value+"%",backgroundColor:A.value})},null,4),h.createVNode(h.unref(Tr),{icon:y.value,class:"lightbulb-icon"},null,8,["icon"])],544)]))}});z.DimmLight=Rr,Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});
