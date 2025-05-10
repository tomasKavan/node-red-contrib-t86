(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".dimmer-widget{display:flex;flex-direction:column;align-items:center;width:100%;min-width:60px;height:100%;min-height:200px;-webkit-user-select:none;user-select:none}.lightbulb-icon{font-size:28px;transition:color .3s ease-in-out;position:absolute;bottom:20px;left:50%;width:40px;height:32px;display:block;margin-left:-20px;color:#fff}.dimmer-bar{min-width:60px;min-height:120px;border-radius:15px;background:linear-gradient(to bottom,#444,#111);position:relative;overflow:hidden;touch-action:none}.dimmer-fill{position:absolute;bottom:0;width:100%;transition:height .1s ease-out;background-color:#fc0}.dimmer-switch{position:absolute;width:calc(100% - 16px);left:8px;height:40%;margin-top:8px;transition:top .1s ease-out;background-color:#fc0;border-radius:10px}.dimmer-switch .lightbulb-icon{top:8px;height:32px}.name{margin-top:10px;font-size:16px;color:#fff}.status{margin-top:4px;font-size:12px;color:#d3d3d3;margin-bottom:20px}")),document.head.appendChild(t)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
(function(Y,c){typeof exports=="object"&&typeof module<"u"?c(exports,require("vue"),require("vuex")):typeof define=="function"&&define.amd?define(["exports","vue","vuex"],c):(Y=typeof globalThis<"u"?globalThis:Y||self,c(Y["ui-dimm-light"]={},Y.Vue,Y.vuex))})(this,function(Y,c,Mn){"use strict";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Cn(t,e,n){return(e=_n(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ce(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ce(Object(n),!0).forEach(function(a){Cn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function In(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function _n(t){var e=In(t,"string");return typeof e=="symbol"?e:e+""}const fe=()=>{};let Pt={},ue={},de=null,me={mark:fe,measure:fe};try{typeof window<"u"&&(Pt=window),typeof document<"u"&&(ue=document),typeof MutationObserver<"u"&&(de=MutationObserver),typeof performance<"u"&&(me=performance)}catch{}const{userAgent:pe=""}=Pt.navigator||{},U=Pt,A=ue,ge=de,ft=me;U.document;const R=!!A.documentElement&&!!A.head&&typeof A.addEventListener=="function"&&typeof A.createElement=="function",he=~pe.indexOf("MSIE")||~pe.indexOf("Trident/");var Tn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Nn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ye={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Fn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},be=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],C="classic",ut="duotone",Dn="sharp",Ln="sharp-duotone",ve=[C,ut,Dn,Ln],zn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Rn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},jn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Bn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Yn=["fak","fa-kit","fakd","fa-kit-duotone"],xe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Un=["kit"],Wn={kit:{"fa-kit":"fak"}},$n=["fak","fakd"],Gn={kit:{fak:"fa-kit"}},Ae={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},dt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Hn=["fak","fa-kit","fakd","fa-kit-duotone"],Vn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Kn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},qn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Mt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Qn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ct=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Xn,...Qn],Zn=["solid","regular","light","thin","duotone","brands"],we=[1,2,3,4,5,6,7,8,9,10],Jn=we.concat([11,12,13,14,15,16,17,18,19,20]),ta=[...Object.keys(qn),...Zn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",dt.GROUP,dt.SWAP_OPACITY,dt.PRIMARY,dt.SECONDARY].concat(we.map(t=>"".concat(t,"x"))).concat(Jn.map(t=>"w-".concat(t))),ea={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const j="___FONT_AWESOME___",It=16,Se="fa",Oe="svg-inline--fa",X="data-fa-i2svg",_t="data-fa-pseudo-element",na="data-fa-pseudo-element-pending",Tt="data-prefix",Nt="data-icon",ke="fontawesome-i2svg",aa="async",ra=["HTML","HEAD","STYLE","SCRIPT"],Ee=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})();function et(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[C]}})}const Pe=l({},ye);Pe[C]=l(l(l(l({},{"fa-duotone":"duotone"}),ye[C]),xe.kit),xe["kit-duotone"]);const ia=et(Pe),Ft=l({},Bn);Ft[C]=l(l(l(l({},{duotone:"fad"}),Ft[C]),Ae.kit),Ae["kit-duotone"]);const Me=et(Ft),Dt=l({},Mt);Dt[C]=l(l({},Dt[C]),Gn.kit);const Lt=et(Dt),zt=l({},Kn);zt[C]=l(l({},zt[C]),Wn.kit),et(zt);const oa=Tn,Ce="fa-layers-text",sa=Nn,la=l({},zn);et(la);const ca=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Rt=Fn,fa=[...Un,...ta],nt=U.FontAwesomeConfig||{};function ua(t){var e=A.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function da(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}A&&typeof A.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=da(ua(n));r!=null&&(nt[a]=r)});const Ie={styleDefault:"solid",familyDefault:C,cssPrefix:Se,replacementClass:Oe,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};nt.familyPrefix&&(nt.cssPrefix=nt.familyPrefix);const q=l(l({},Ie),nt);q.autoReplaceSvg||(q.observeMutations=!1);const p={};Object.keys(Ie).forEach(t=>{Object.defineProperty(p,t,{enumerable:!0,set:function(e){q[t]=e,at.forEach(n=>n(p))},get:function(){return q[t]}})}),Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){q.cssPrefix=t,at.forEach(e=>e(p))},get:function(){return q.cssPrefix}}),U.FontAwesomeConfig=p;const at=[];function ma(t){return at.push(t),()=>{at.splice(at.indexOf(t),1)}}const W=It,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pa(t){if(!t||!R)return;const e=A.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=A.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return A.head.insertBefore(e,a),t}const ga="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function rt(){let t=12,e="";for(;t-- >0;)e+=ga[Math.random()*62|0];return e}function Q(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function jt(t){return t.classList?Q(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function _e(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ha(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(_e(t[n]),'" '),"").trim()}function mt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Bt(t){return t.size!==D.size||t.x!==D.x||t.y!==D.y||t.rotate!==D.rotate||t.flipX||t.flipY}function ya(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),d={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:d,path:u}}function ba(t){let{transform:e,width:n=It,height:a=It,startCentered:r=!1}=t,i="";return r&&he?i+="translate(".concat(e.x/W-n/2,"em, ").concat(e.y/W-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/W,"em), calc(-50% + ").concat(e.y/W,"em)) "):i+="translate(".concat(e.x/W,"em, ").concat(e.y/W,"em) "),i+="scale(".concat(e.size/W*(e.flipX?-1:1),", ").concat(e.size/W*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var va=`:root, :host {
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
}`;function Te(){const t=Se,e=Oe,n=p.cssPrefix,a=p.replacementClass;let r=va;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let Ne=!1;function Yt(){p.autoAddCss&&!Ne&&(pa(Te()),Ne=!0)}var xa={mixout(){return{dom:{css:Te,insertCss:Yt}}},hooks(){return{beforeDOMElementCreation(){Yt()},beforeI2svg(){Yt()}}}};const B=U||{};B[j]||(B[j]={}),B[j].styles||(B[j].styles={}),B[j].hooks||(B[j].hooks={}),B[j].shims||(B[j].shims=[]);var L=B[j];const Fe=[],De=function(){A.removeEventListener("DOMContentLoaded",De),pt=1,Fe.map(t=>t())};let pt=!1;R&&(pt=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),pt||A.addEventListener("DOMContentLoaded",De));function Aa(t){R&&(pt?setTimeout(t,0):Fe.push(t))}function it(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?_e(t):"<".concat(e," ").concat(ha(n),">").concat(a.map(it).join(""),"</").concat(e,">")}function Le(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ut=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=n,d,u,g;for(a===void 0?(d=1,g=e[i[0]]):(d=0,g=a);d<o;d++)u=i[d],g=s(g,e[u],u,e);return g};function wa(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Wt(t){const e=wa(t);return e.length===1?e[0].toString(16):null}function Sa(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function ze(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function $t(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=ze(e);typeof L.hooks.addPack=="function"&&!a?L.hooks.addPack(t,ze(e)):L.styles[t]=l(l({},L.styles[t]||{}),r),t==="fas"&&$t("fa",e)}const{styles:ot,shims:Oa}=L,Re=Object.keys(Lt),ka=Re.reduce((t,e)=>(t[e]=Object.keys(Lt[e]),t),{});let Gt=null,je={},Be={},Ye={},Ue={},We={};function Ea(t){return~fa.indexOf(t)}function Pa(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Ea(r)?r:null}const $e=()=>{const t=a=>Ut(ot,(r,i,o)=>(r[o]=Ut(i,a,{}),r),{});je=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),Be=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),We=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});const e="far"in ot||p.autoFetchSvg,n=Ut(Oa,(a,r)=>{const i=r[0];let o=r[1];const s=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});Ye=n.names,Ue=n.unicodes,Gt=gt(p.styleDefault,{family:p.familyDefault})};ma(t=>{Gt=gt(t.styleDefault,{family:p.familyDefault})}),$e();function Xt(t,e){return(je[t]||{})[e]}function Ma(t,e){return(Be[t]||{})[e]}function H(t,e){return(We[t]||{})[e]}function Ge(t){return Ye[t]||{prefix:null,iconName:null}}function Ca(t){const e=Ue[t],n=Xt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function $(){return Gt}const Xe=()=>({prefix:null,iconName:null,rest:[]});function Ia(t){let e=C;const n=Re.reduce((a,r)=>(a[r]="".concat(p.cssPrefix,"-").concat(r),a),{});return ve.forEach(a=>{(t.includes(n[a])||t.some(r=>ka[a].includes(r)))&&(e=a)}),e}function gt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=C}=e,a=ia[n][t];if(n===ut&&!t)return"fad";const r=Me[n][t]||Me[n][a],i=t in L.styles?t:null;return r||i||null}function _a(t){let e=[],n=null;return t.forEach(a=>{const r=Pa(p.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function He(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function ht(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Ct.concat(Hn),i=He(t.filter(b=>r.includes(b))),o=He(t.filter(b=>!Ct.includes(b))),s=i.filter(b=>(a=b,!be.includes(b))),[d=null]=s,u=Ia(i),g=l(l({},_a(o)),{},{prefix:gt(d,{family:u})});return l(l(l({},g),Da({values:t,family:u,styles:ot,config:p,canonical:g,givenPrefix:a})),Ta(n,a,g))}function Ta(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?Ge(r):{},o=H(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!ot.far&&ot.fas&&!p.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Na=ve.filter(t=>t!==C||t!==ut),Fa=Object.keys(Mt).filter(t=>t!==C).map(t=>Object.keys(Mt[t])).flat();function Da(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=t,s=n===ut,d=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",g=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(d||u||g)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Na.includes(n)&&(Object.keys(i).find(y=>Fa.includes(y))||o.autoFetchSvg)){const y=jn.get(n).defaultShortPrefixId;a.prefix=y,a.iconName=H(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=$()||"fas"),a}class La{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=l(l({},this.definitions[i]||{}),r[i]),$t(i,r[i]);const o=Lt[C][i];o&&$t(o,r[i]),$e()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:s}=a[r],d=s[2];e[i]||(e[i]={}),d.length>0&&d.forEach(u=>{typeof u=="string"&&(e[i][u]=s)}),e[i][o]=s}),e}}let Ve=[],Z={};const J={},za=Object.keys(J);function Ra(t,e){let{mixoutsTo:n}=e;return Ve=t,Z={},Object.keys(J).forEach(a=>{za.indexOf(a)===-1&&delete J[a]}),Ve.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{Z[o]||(Z[o]=[]),Z[o].push(i[o])})}a.provides&&a.provides(J)}),n}function Ht(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(Z[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function V(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(Z[t]||[]).forEach(i=>{i.apply(null,n)})}function G(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return J[t]?J[t].apply(null,e):void 0}function Vt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||$();if(e)return e=H(n,e)||e,Le(Ke.definitions,n,e)||Le(L.styles,n,e)}const Ke=new La,T={noAuto:()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,V("noAuto")},config:p,dom:{i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(V("beforeI2svg",t),G("pseudoElements2svg",t),G("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Aa(()=>{ja({autoReplaceSvgRoot:e}),V("watch",t)})}},parse:{icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:H(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=gt(t[0]);return{prefix:n,iconName:H(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(oa))){const e=ht(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||$(),iconName:H(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=$();return{prefix:e,iconName:H(e,t)||t}}}},library:Ke,findIconDefinition:Vt,toHtml:it},ja=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=A}=t;(Object.keys(L.styles).length>0||p.autoFetchSvg)&&R&&p.autoReplaceSvg&&T.dom.i2svg({node:e})};function yt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>it(n))}}),Object.defineProperty(t,"node",{get:function(){if(!R)return;const n=A.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Ba(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:o}=t;if(Bt(o)&&n.found&&!a.found){const{width:s,height:d}=n,u={x:s/d/2,y:.5};r.style=mt(l(l({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ya(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(p.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:o}),children:a}]}]}function Kt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:d,titleId:u,extra:g,watchable:b=!1}=t,{width:y,height:P}=n.found?n:e,M=$n.includes(a),w=[p.replacementClass,r?"".concat(p.cssPrefix,"-").concat(r):""].filter(S=>g.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(g.classes).join(" ");let v={children:[],attributes:l(l({},g.attributes),{},{"data-prefix":a,"data-icon":r,class:w,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(P)})};const f=M&&!~g.classes.indexOf("fa-fw")?{width:"".concat(y/P*16*.0625,"em")}:{};b&&(v.attributes[X]=""),s&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(u||rt())},children:[s]}),delete v.attributes.title);const h=l(l({},v),{},{prefix:a,iconName:r,main:e,mask:n,maskId:d,transform:i,symbol:o,styles:l(l({},f),g.styles)}),{children:x,attributes:k}=n.found&&e.found?G("generateAbstractMask",h)||{children:[],attributes:{}}:G("generateAbstractIcon",h)||{children:[],attributes:{}};return h.children=x,h.attributes=k,o?Ya(h):Ba(h)}function qe(t){const{content:e,width:n,height:a,transform:r,title:i,extra:o,watchable:s=!1}=t,d=l(l(l({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(d[X]="");const u=l({},o.styles);Bt(r)&&(u.transform=ba({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);const g=mt(u);g.length>0&&(d.style=g);const b=[];return b.push({tag:"span",attributes:d,children:[e]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function Ua(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=mt(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:qt}=L;function Qt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(Rt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Rt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Rt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Wa={found:!1,width:512,height:512};function $a(t,e){!Ee&&!p.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Zt(t,e){let n=e;return e==="fa"&&p.styleDefault!==null&&(e=$()),new Promise((a,r)=>{if(n==="fa"){const i=Ge(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&qt[e]&&qt[e][t]){const i=qt[e][t];return a(Qt(i))}$a(t,e),a(l(l({},Wa),{},{icon:p.showMissingIcons&&t?G("missingIconAbstract")||{}:{}}))})}const Qe=()=>{},Jt=p.measurePerformance&&ft&&ft.mark&&ft.measure?ft:{mark:Qe,measure:Qe},st='FA "6.7.2"',Ga=t=>(Jt.mark("".concat(st," ").concat(t," begins")),()=>Ze(t)),Ze=t=>{Jt.mark("".concat(st," ").concat(t," ends")),Jt.measure("".concat(st," ").concat(t),"".concat(st," ").concat(t," begins"),"".concat(st," ").concat(t," ends"))};var te={begin:Ga,end:Ze};const bt=()=>{};function Je(t){return typeof(t.getAttribute?t.getAttribute(X):null)=="string"}function Xa(t){const e=t.getAttribute?t.getAttribute(Tt):null,n=t.getAttribute?t.getAttribute(Nt):null;return e&&n}function Ha(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(p.replacementClass)}function Va(){return p.autoReplaceSvg===!0?vt.replace:vt[p.autoReplaceSvg]||vt.replace}function Ka(t){return A.createElementNS("http://www.w3.org/2000/svg",t)}function qa(t){return A.createElement(t)}function tn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ka:qa}=e;if(typeof t=="string")return A.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(tn(i,{ceFn:n}))}),a}function Qa(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const vt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(tn(n),e)}),e.getAttribute(X)===null&&p.keepOriginalSource){let n=A.createComment(Qa(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~jt(e).indexOf(p.replacementClass))return vt.replace(t);const a=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===p.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>it(i)).join(`
`);e.setAttribute(X,""),e.innerHTML=r}};function en(t){t()}function nn(t,e){const n=typeof e=="function"?e:bt;if(t.length===0)n();else{let a=en;p.mutateApproach===aa&&(a=U.requestAnimationFrame||en),a(()=>{const r=Va(),i=te.begin("mutate");t.map(r),i(),n()})}}let ee=!1;function an(){ee=!0}function ne(){ee=!1}let xt=null;function rn(t){if(!ge||!p.observeMutations)return;const{treeCallback:e=bt,nodeCallback:n=bt,pseudoElementsCallback:a=bt,observeMutationsRoot:r=A}=t;xt=new ge(i=>{if(ee)return;const o=$();Q(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Je(s.addedNodes[0])&&(p.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&p.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&Je(s.target)&&~ca.indexOf(s.attributeName))if(s.attributeName==="class"&&Xa(s.target)){const{prefix:d,iconName:u}=ht(jt(s.target));s.target.setAttribute(Tt,d||o),u&&s.target.setAttribute(Nt,u)}else Ha(s.target)&&n(s.target)})}),R&&xt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Za(){xt&&xt.disconnect()}function Ja(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function tr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=ht(jt(t));return r.prefix||(r.prefix=$()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ma(r.prefix,t.innerText)||Xt(r.prefix,Wt(t.innerText))),!r.iconName&&p.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function er(t){const e=Q(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return p.autoA11y&&(n?e["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(a||rt()):(e["aria-hidden"]="true",e.focusable="false")),e}function nr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function on(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=tr(t),i=er(t),o=Ht("parseNodeAttributes",{},t);let s=e.styleParser?Ja(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i}},o)}const{styles:ar}=L;function sn(t){const e=p.autoReplaceSvg==="nest"?on(t,{styleParser:!1}):on(t);return~e.extra.classes.indexOf(Ce)?G("generateLayersText",t,e):G("generateSvgReplacementMutation",t,e)}function rr(){return[...Yn,...Ct]}function ln(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();const n=A.documentElement.classList,a=g=>n.add("".concat(ke,"-").concat(g)),r=g=>n.remove("".concat(ke,"-").concat(g)),i=p.autoFetchSvg?rr():be.concat(Object.keys(ar));i.includes("fa")||i.push("fa");const o=[".".concat(Ce,":not([").concat(X,"])")].concat(i.map(g=>".".concat(g,":not([").concat(X,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=Q(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const d=te.begin("onTree"),u=s.reduce((g,b)=>{try{const y=sn(b);y&&g.push(y)}catch(y){Ee||y.name==="MissingIcon"&&console.error(y)}return g},[]);return new Promise((g,b)=>{Promise.all(u).then(y=>{nn(y,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),d(),g()})}).catch(y=>{d(),b(y)})})}function ir(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;sn(t).then(n=>{n&&nn([n],e)})}function or(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Vt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Vt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const sr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=D,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:d=[],attributes:u={},styles:g={}}=e;if(!t)return;const{prefix:b,iconName:y,icon:P}=t;return yt(l({type:"icon"},t),()=>(V("beforeDOMElementCreation",{iconDefinition:t,params:e}),p.autoA11y&&(o?u["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(s||rt()):(u["aria-hidden"]="true",u.focusable="false")),Kt({icons:{main:Qt(P),mask:r?Qt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:y,transform:l(l({},D),n),symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:u,styles:g,classes:d}})))};var lr={mixout(){return{icon:or(sr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=ln,t.nodeCallback=ir,t}}},provides(t){t.i2svg=function(e){const{node:n=A,callback:a=()=>{}}=e;return ln(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:s,symbol:d,mask:u,maskId:g,extra:b}=n;return new Promise((y,P)=>{Promise.all([Zt(a,o),u.iconName?Zt(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(M=>{let[w,v]=M;y([e,Kt({icons:{main:w,mask:v},prefix:o,iconName:a,transform:s,symbol:d,maskId:g,title:r,titleId:i,extra:b,watchable:!0})])}).catch(P)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:o}=e;const s=mt(o);s.length>0&&(a.style=s);let d;return Bt(i)&&(d=G("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(d||r.icon),{children:n,attributes:a}}}},cr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return yt({type:"layer"},()=>{V("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},fr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return yt({type:"counter",content:t},()=>(V("beforeDOMElementCreation",{content:t,params:e}),Ua({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(p.cssPrefix,"-layers-counter"),...a]}})))}}}},ur={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=D,title:a=null,classes:r=[],attributes:i={},styles:o={}}=e;return yt({type:"text",content:t},()=>(V("beforeDOMElementCreation",{content:t,params:e}),qe({content:t,transform:l(l({},D),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(p.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let o=null,s=null;if(he){const d=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/d,s=u.height/d}return p.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,qe({content:e.innerHTML,width:o,height:s,transform:r,title:a,extra:i,watchable:!0})])}}};const dr=new RegExp('"',"ug"),cn=[1105920,1112319],fn=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Rn),ea),Vn),ae=Object.keys(fn).reduce((t,e)=>(t[e.toLowerCase()]=fn[e],t),{}),mr=Object.keys(ae).reduce((t,e)=>{const n=ae[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function pr(t){const e=t.replace(dr,""),n=Sa(e,0),a=n>=cn[0]&&n<=cn[1],r=e.length===2?e[0]===e[1]:!1;return{value:Wt(r?e[0]:e),isSecondary:a||r}}function gr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(ae[n]||{})[r]||mr[n]}function un(t,e){const n="".concat(na).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const o=Q(t.children).filter(y=>y.getAttribute(_t)===e)[0],s=U.getComputedStyle(t,e),d=s.getPropertyValue("font-family"),u=d.match(sa),g=s.getPropertyValue("font-weight"),b=s.getPropertyValue("content");if(o&&!u)return t.removeChild(o),a();if(u&&b!=="none"&&b!==""){const y=s.getPropertyValue("content");let P=gr(d,g);const{value:M,isSecondary:w}=pr(y),v=u[0].startsWith("FontAwesome");let f=Xt(P,M),h=f;if(v){const x=Ca(M);x.iconName&&x.prefix&&(f=x.iconName,P=x.prefix)}if(f&&!w&&(!o||o.getAttribute(Tt)!==P||o.getAttribute(Nt)!==h)){t.setAttribute(n,h),o&&t.removeChild(o);const x=nr(),{extra:k}=x;k.attributes[_t]=e,Zt(f,P).then(S=>{const tt=Kt(l(l({},x),{},{icons:{main:S,mask:Xe()},prefix:P,iconName:h,extra:k,watchable:!0})),z=A.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(z,t.firstChild):t.appendChild(z),z.outerHTML=tt.map(St=>it(St)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function hr(t){return Promise.all([un(t,"::before"),un(t,"::after")])}function yr(t){return t.parentNode!==document.head&&!~ra.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(_t)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function dn(t){if(R)return new Promise((e,n)=>{const a=Q(t.querySelectorAll("*")).filter(yr).map(hr),r=te.begin("searchPseudoElements");an(),Promise.all(a).then(()=>{r(),ne(),e()}).catch(()=>{r(),ne(),n()})})}var br={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=dn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=A}=e;p.searchPseudoElements&&dn(n)}}};let mn=!1;var vr={mixout(){return{dom:{unwatch(){an(),mn=!0}}}},hooks(){return{bootstrap(){rn(Ht("mutationObserverCallbacks",{}))},noAuto(){Za()},watch(t){const{observeMutationsRoot:e}=t;mn?ne():rn(Ht("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const pn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var xr={mixout(){return{parse:{transform:t=>pn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=pn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),d="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),g={transform:"".concat(s," ").concat(d," ").concat(u)},b={transform:"translate(".concat(i/2*-1," -256)")},y={outer:o,inner:g,path:b};return{tag:"g",attributes:l({},y.outer),children:[{tag:"g",attributes:l({},y.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),y.path)}]}]}}}};const re={x:0,y:0,width:"100%",height:"100%"};function gn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ar(t){return t.tag==="g"?t.children:[t]}var wr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?ht(n.split(" ").map(r=>r.trim())):Xe();return a.prefix||(a.prefix=$()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:s}=e;const{width:d,icon:u}=r,{width:g,icon:b}=i,y=ya({transform:s,containerWidth:g,iconWidth:d}),P={tag:"rect",attributes:l(l({},re),{},{fill:"white"})},M=u.children?{children:u.children.map(gn)}:{},w={tag:"g",attributes:l({},y.inner),children:[gn(l({tag:u.tag,attributes:l(l({},u.attributes),y.path)},M))]},v={tag:"g",attributes:l({},y.outer),children:[w]},f="mask-".concat(o||rt()),h="clip-".concat(o||rt()),x={tag:"mask",attributes:l(l({},re),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,v]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:Ar(b)},x]};return n.push(k,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(f,")")},re)}),{children:n,attributes:a}}}},Sr={provides(t){let e=!1;U.matchMedia&&(e=U.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=l(l({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Or={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},kr=[xa,lr,cr,fr,ur,br,vr,xr,wr,Sr,Or];Ra(kr,{mixoutsTo:T}),T.noAuto;const hn=T.config,Er=T.library;T.dom;const At=T.parse;T.findIconDefinition,T.toHtml;const Pr=T.icon;T.layer;const Mr=T.text;T.counter;function yn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function F(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?yn(Object(n),!0).forEach(function(a){I(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Cr(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ir(t){var e=Cr(t,"string");return typeof e=="symbol"?e:e+""}function wt(t){"@babel/helpers - typeof";return wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wt(t)}function I(t,e,n){return e=Ir(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _r(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function Tr(t,e){if(t==null)return{};var n=_r(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function ie(t){return Nr(t)||Fr(t)||Dr(t)||Lr()}function Nr(t){if(Array.isArray(t))return oe(t)}function Fr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Dr(t,e){if(t){if(typeof t=="string")return oe(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oe(t,e)}}function oe(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Lr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bn={exports:{}};(function(t){(function(e){var n=function(f,h,x){if(!u(h)||b(h)||y(h)||P(h)||d(h))return h;var k,S=0,tt=0;if(g(h))for(k=[],tt=h.length;S<tt;S++)k.push(n(f,h[S],x));else{k={};for(var z in h)Object.prototype.hasOwnProperty.call(h,z)&&(k[f(z,x)]=n(f,h[z],x))}return k},a=function(f,h){h=h||{};var x=h.separator||"_",k=h.split||/(?=[A-Z])/;return f.split(k).join(x)},r=function(f){return M(f)?f:(f=f.replace(/[\-_\s]+(.)?/g,function(h,x){return x?x.toUpperCase():""}),f.substr(0,1).toLowerCase()+f.substr(1))},i=function(f){var h=r(f);return h.substr(0,1).toUpperCase()+h.substr(1)},o=function(f,h){return a(f,h).toLowerCase()},s=Object.prototype.toString,d=function(f){return typeof f=="function"},u=function(f){return f===Object(f)},g=function(f){return s.call(f)=="[object Array]"},b=function(f){return s.call(f)=="[object Date]"},y=function(f){return s.call(f)=="[object RegExp]"},P=function(f){return s.call(f)=="[object Boolean]"},M=function(f){return f=f-0,f===f},w=function(f,h){var x=h&&"process"in h?h.process:h;return typeof x!="function"?f:function(k,S){return x(k,f,S)}},v={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(f,h){return n(w(r,h),f)},decamelizeKeys:function(f,h){return n(w(o,h),f,h)},pascalizeKeys:function(f,h){return n(w(i,h),f)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=v:e.humps=v})(zr)})(bn);var Rr=bn.exports,jr=["class","style"];function Br(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Rr.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function Yr(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function se(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(d){return se(d)}),r=Object.keys(t.attributes||{}).reduce(function(d,u){var g=t.attributes[u];switch(u){case"class":d.class=Yr(g);break;case"style":d.style=Br(g);break;default:d.attrs[u]=g}return d},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Tr(n,jr);return c.h(t.tag,F(F(F({},e),{},{class:r.class,style:F(F({},r.style),o)},r.attrs),s),a)}var vn=!1;try{vn=process.env.NODE_ENV==="production"}catch{}function Ur(){if(!vn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function lt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?I({},t,e):{}}function Wr(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},I(I(I(I(I(I(I(I(I(I(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),I(I(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function xn(t){if(t&&wt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(At.icon)return At.icon(t);if(t===null)return null;if(wt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var An=c.defineComponent({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=c.computed(function(){return xn(e.icon)}),i=c.computed(function(){return lt("classes",Wr(e))}),o=c.computed(function(){return lt("transform",typeof e.transform=="string"?At.transform(e.transform):e.transform)}),s=c.computed(function(){return lt("mask",xn(e.mask))}),d=c.computed(function(){return Pr(r.value,F(F(F(F({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});c.watch(d,function(g){if(!g)return Ur("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var u=c.computed(function(){return d.value?se(d.value.abstract[0],{},a):null});return function(){return u.value}}});c.defineComponent({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var a=n.slots,r=hn.familyPrefix,i=c.computed(function(){return["".concat(r,"-layers")].concat(ie(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return c.h("div",{class:i.value},a.default?a.default():[])}}}),c.defineComponent({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var a=n.attrs,r=hn.familyPrefix,i=c.computed(function(){return lt("classes",[].concat(ie(e.counter?["".concat(r,"-layers-counter")]:[]),ie(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=c.computed(function(){return lt("transform",typeof e.transform=="string"?At.transform(e.transform):e.transform)}),s=c.computed(function(){var u=Mr(e.value.toString(),F(F({},o.value),i.value)),g=u.abstract;return e.counter&&(g[0].attributes.class=g[0].attributes.class.replace("fa-layers-text","")),g[0]}),d=c.computed(function(){return se(s.value,{},a)});return function(){return d.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const $r={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Gr={prefix:"far",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"]};var _=(t=>(t.OnOff="onoff",t.Dimm="dimm",t.DimmTemp="dimm.temp",t))(_||{});const Xr={class:"dimmer-widget"},Hr={class:"name"},Vr={key:0,class:"status"},Kr={key:1,class:"status"},K=2200,le=6e3,qr=200,Qr=500,Zr=c.defineComponent({__name:"DimmLight",props:{id:{},props:{},state:{}},setup(t){Er.add($r,Gr);const e=le-K,n=t,a=c.computed(()=>{const m={...n.props};return typeof m.brightnessMin=="string"&&(m.brightnessMin=parseInt(m.brightnessMin)),typeof m.brightnessMax=="string"&&(m.brightnessMax=parseInt(m.brightnessMax)),typeof m.order=="string"&&(m.order=parseInt(m.order)),typeof m.width=="string"&&(m.width=parseInt(m.width)),typeof m.height=="string"&&(m.height=parseInt(m.height)),m}),r=m=>{const O="touches"in m?m.touches[0].clientX:m.clientX,E="touches"in m?m.touches[0].clientY:m.clientY,N=f.value.begin.start.x-O,Et=f.value.begin.start.y-E;return{x:N,y:Et}},i=()=>({state:!0,level:50,temp:K}),o=()=>({direction:"none",begin:{start:{x:0,y:0},rect:{width:0,height:0},ballast:i()}}),s=()=>{d(),h.value=setTimeout(Jr,Qr)},d=()=>{h.value&&clearTimeout(h.value),h.value=void 0},u=m=>{const O=a.value.brightnessMax-a.value.brightnessMin,N=(m-a.value.brightnessMin)/O;return Math.min(100,Math.max(0,Math.round(N*100)))},g=m=>m?"ON":"OFF",b=Mn.useStore(),y=c.inject("$dataTracker"),P=c.inject("$socket");y(n.id);const M=c.ref(void 0);c.watch(b.state.data,()=>{M.value=b.state.data.messages[n.id]});const w=c.ref(i()),v=c.ref(i()),f=c.ref(o()),h=c.ref(void 0),x=c.ref(new Date),k=c.ref(null),S=c.computed(()=>f.value.direction==="none"&&!h.value?c.reactive(w.value):c.reactive(v.value)),tt=c.computed(()=>S.value.state?"0%":"calc(60% - 16px)"),z=c.computed(()=>S.value.state?["fas","lightbulb"]:["far","lightbulb"]),St=c.ref("#ffffff"),wn=()=>{let m=(2700-K)/e;if(a.value.wtype===_.DimmTemp){const ct=(Math.min(le,Math.max(S.value.temp,K))-K)/e;m=Math.max(0,Math.min(1,ct))}const O=Math.min(255,Math.max(173,Math.round(255*(1-m)+173*m))),E=Math.min(216,Math.max(193,Math.round(193*(1-m)+216*m))),N=Math.min(255,Math.max(67,Math.round(67*(1-m)+255*m)));St.value=`rgb(${O},${E},${N})`};c.watch(()=>S.value.temp,wn),wn();const Sn=c.ref("0");c.watch([()=>S.value.level,()=>S.value.state],()=>{let m=0;return(a.value.wtype===_.Dimm||a.value.wtype===_.DimmTemp)&&(m=S.value.state?u(S.value.level):0),Sn.value=m.toString()}),c.watch(()=>M.value,()=>{M.value&&M.value.payload&&(w.value={state:!!M.value.payload.state,level:M.value.payload.level||a.value.brightnessMin,temp:M.value.payload.temp||K})});const On=m=>{if(!k.value)return;d();const O=k.value.getBoundingClientRect();f.value={direction:"notDecided",begin:{start:{x:"touches"in m?m.touches[0].clientX:m.clientX,y:"touches"in m?m.touches[0].clientY:m.clientY},rect:O,ballast:{state:w.value.state,level:w.value.level,temp:w.value.temp}}},v.value={state:w.value.state,level:w.value.level,temp:w.value.temp},document.addEventListener("mousemove",Ot),document.addEventListener("mouseup",kt),document.addEventListener("touchmove",Ot),document.addEventListener("touchend",kt)},Ot=m=>{switch(f.value.direction){case"none":return;case"notDecided":ti(m);case"horizontal":ei(m);break;case"vertical":ni(m);break;case"invalid":En();break}},kt=m=>{var O;if(f.value.direction==="notDecided")if(a.value.wtype===_.OnOff)v.value.state=!w.value.state,v.value.level=v.value.state?a.value.brightnessMax:0;else{const E="touches"in m?m.touches[0].clientY:m.clientY,N=(O=k.value)==null?void 0:O.getBoundingClientRect();let Et=E-((N==null?void 0:N.top)||0),ct=1-Math.abs(Et)/((N==null?void 0:N.height)||1),Pn=a.value.brightnessMin+Math.round((a.value.brightnessMax-a.value.brightnessMin)*ct);v.value.state=ct>.1,ct>.9&&(Pn=a.value.brightnessMax),v.value.level=v.value.state?Pn:a.value.brightnessMin}kn(!0),s(),En()},kn=m=>{const O=new Date;if(O.getTime()-x.value.getTime()>qr||m){const E={event:"set",value:{level:v.value.state?a.value.brightnessMax:0,state:v.value.state,temp:0}};(a.value.wtype===_.Dimm||a.value.wtype===_.DimmTemp)&&(E.value.level=v.value.level),a.value.wtype===_.DimmTemp&&(E.value.temp=v.value.temp),(E.value.state!==w.value.state||E.value.level!==w.value.level||E.value.temp!==w.value.temp)&&P.emit("widget-change",n.id,{payload:E}),x.value=O}};c.watch(v.value,()=>{kn()});const Jr=()=>{d()},ti=m=>{const O=r(m);if(a.value.wtype===_.OnOff){f.value.direction="invalid";return}O.y===0&&O.x===0||(a.value.wtype===_.DimmTemp?f.value.direction=Math.abs(O.x)>Math.abs(O.y)?"horizontal":"vertical":f.value.direction="vertical")},ei=m=>{const E=r(m).x/f.value.begin.rect.width;v.value.temp=Math.max(K,Math.min(le,f.value.begin.ballast.temp-Math.round(E*e)))},ni=m=>{const O=r(m),E=f.value.begin.ballast.level+Math.round(O.y/f.value.begin.rect.height*(a.value.brightnessMax-a.value.brightnessMin)+a.value.brightnessMin);v.value.level=Math.max(a.value.brightnessMin,Math.min(a.value.brightnessMax,E)),v.value.state=!(!E||E<a.value.brightnessMin)},En=()=>{f.value=o(),document.removeEventListener("mousemove",Ot),document.removeEventListener("mouseup",kt),document.removeEventListener("touchmove",Ot),document.removeEventListener("touchend",kt)};return(m,O)=>(c.openBlock(),c.createElementBlock("div",Xr,[c.createElementVNode("div",Hr,c.toDisplayString(a.value.label),1),a.value.wtype!==c.unref(_).OnOff?(c.openBlock(),c.createElementBlock("div",Vr,c.toDisplayString(S.value.state?u(S.value.level)+"%":"OFF"),1)):(c.openBlock(),c.createElementBlock("div",Kr,c.toDisplayString(g(S.value.state)),1)),c.createElementVNode("div",{class:"dimmer-bar",ref_key:"dimmerBarElt",ref:k,onMousedown:On,onTouchstart:On},[a.value.wtype!==c.unref(_).OnOff?(c.openBlock(),c.createElementBlock("div",{key:0,class:"dimmer-fill",style:c.normalizeStyle({height:Sn.value+"%",backgroundColor:St.value})},null,4)):c.createCommentVNode("",!0),a.value.wtype!==c.unref(_).OnOff?(c.openBlock(),c.createBlock(c.unref(An),{key:1,icon:z.value,class:"lightbulb-icon"},null,8,["icon"])):c.createCommentVNode("",!0),a.value.wtype===c.unref(_).OnOff?(c.openBlock(),c.createElementBlock("div",{key:2,class:"dimmer-switch",style:c.normalizeStyle({top:tt.value})},[c.createVNode(c.unref(An),{icon:z.value,class:"lightbulb-icon"},null,8,["icon"])],4)):c.createCommentVNode("",!0)],544)]))}});Y.DimmLight=Zr,Object.defineProperty(Y,Symbol.toStringTag,{value:"Module"})});
