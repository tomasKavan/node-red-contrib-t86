(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".dimmer-widget{display:flex;flex-direction:column;align-items:center;width:80px;-webkit-user-select:none;user-select:none;font-family:sans-serif}.lightbulb-icon{font-size:32px;transition:color .3s ease-in-out;position:absolute;bottom:20px;left:50%;width:40px;height:40px;display:block;margin-left:-20px;color:#fff}.dimmer-bar{width:80px;height:200px;border-radius:15px;background:linear-gradient(to bottom,#444,#111);position:relative;overflow:hidden;touch-action:none;margin-top:30px}.dimmer-fill{position:absolute;bottom:0;width:100%;transition:height .1s ease-out;background-color:#fc0}.name{margin-top:10px;font-size:16px;color:#fff}.status{margin-top:4px;font-size:12px;color:#d3d3d3}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
(function(z,h){typeof exports=="object"&&typeof module<"u"?h(exports,require("vue"),require("vuex")):typeof define=="function"&&define.amd?define(["exports","vue","vuex"],h):(z=typeof globalThis<"u"?globalThis:z||self,h(z["ui-dimm-light"]={},z.Vue,z.vuex))})(this,function(z,h,gn){"use strict";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function pn(t,e,n){return(e=yn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Jt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Jt(Object(n),!0).forEach(function(a){pn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Jt(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function hn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function yn(t){var e=hn(t,"string");return typeof e=="symbol"?e:e+""}const te=()=>{};let ht={},ee={},ne=null,ae={mark:te,measure:te};try{typeof window<"u"&&(ht=window),typeof document<"u"&&(ee=document),typeof MutationObserver<"u"&&(ne=MutationObserver),typeof performance<"u"&&(ae=performance)}catch{}const{userAgent:re=""}=ht.navigator||{},R=ht,x=ee,ie=ne,at=ae;R.document;const M=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",oe=~re.indexOf("MSIE")||~re.indexOf("Trident/");var bn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,vn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,se={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},xn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},le=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],S="classic",rt="duotone",An="sharp",wn="sharp-duotone",fe=[S,rt,An,wn],Sn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},On={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},En=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Pn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},kn=["fak","fa-kit","fakd","fa-kit-duotone"],ce={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Cn=["kit"],In={kit:{"fa-kit":"fak"}},Nn=["fak","fakd"],_n={kit:{fak:"fa-kit"}},ue={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},it={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Tn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Fn=["fak","fa-kit","fakd","fa-kit-duotone"],Mn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ln={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Dn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},yt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},zn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],bt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Tn,...zn],Rn=["solid","regular","light","thin","duotone","brands"],de=[1,2,3,4,5,6,7,8,9,10],jn=de.concat([11,12,13,14,15,16,17,18,19,20]),Yn=[...Object.keys(Dn),...Rn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",it.GROUP,it.SWAP_OPACITY,it.PRIMARY,it.SECONDARY].concat(de.map(t=>"".concat(t,"x"))).concat(jn.map(t=>"w-".concat(t))),Bn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const L="___FONT_AWESOME___",vt=16,me="fa",ge="svg-inline--fa",U="data-fa-i2svg",xt="data-fa-pseudo-element",Un="data-fa-pseudo-element-pending",At="data-prefix",wt="data-icon",pe="fontawesome-i2svg",Wn="async",Xn=["HTML","HEAD","STYLE","SCRIPT"],he=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})();function K(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[S]}})}const ye=l({},se);ye[S]=l(l(l(l({},{"fa-duotone":"duotone"}),se[S]),ce.kit),ce["kit-duotone"]);const $n=K(ye),St=l({},Pn);St[S]=l(l(l(l({},{duotone:"fad"}),St[S]),ue.kit),ue["kit-duotone"]);const be=K(St),Ot=l({},yt);Ot[S]=l(l({},Ot[S]),_n.kit);const Et=K(Ot),Pt=l({},Ln);Pt[S]=l(l({},Pt[S]),In.kit),K(Pt);const Gn=bn,ve="fa-layers-text",Hn=vn,Vn=l({},Sn);K(Vn);const Kn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],kt=xn,qn=[...Cn,...Yn],q=R.FontAwesomeConfig||{};function Qn(t){var e=x.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Zn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}x&&typeof x.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Zn(Qn(n));r!=null&&(q[a]=r)});const xe={styleDefault:"solid",familyDefault:S,cssPrefix:me,replacementClass:ge,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};q.familyPrefix&&(q.cssPrefix=q.familyPrefix);const $=l(l({},xe),q);$.autoReplaceSvg||($.observeMutations=!1);const d={};Object.keys(xe).forEach(t=>{Object.defineProperty(d,t,{enumerable:!0,set:function(e){$[t]=e,Q.forEach(n=>n(d))},get:function(){return $[t]}})}),Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){$.cssPrefix=t,Q.forEach(e=>e(d))},get:function(){return $.cssPrefix}}),R.FontAwesomeConfig=d;const Q=[];function Jn(t){return Q.push(t),()=>{Q.splice(Q.indexOf(t),1)}}const j=vt,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ta(t){if(!t||!M)return;const e=x.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=x.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return x.head.insertBefore(e,a),t}const ea="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Z(){let t=12,e="";for(;t-- >0;)e+=ea[Math.random()*62|0];return e}function G(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ct(t){return t.classList?G(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ae(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function na(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ae(t[n]),'" '),"").trim()}function ot(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function It(t){return t.size!==T.size||t.x!==T.x||t.y!==T.y||t.rotate!==T.rotate||t.flipX||t.flipY}function aa(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:c}}function ra(t){let{transform:e,width:n=vt,height:a=vt,startCentered:r=!1}=t,i="";return r&&oe?i+="translate(".concat(e.x/j-n/2,"em, ").concat(e.y/j-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/j,"em), calc(-50% + ").concat(e.y/j,"em)) "):i+="translate(".concat(e.x/j,"em, ").concat(e.y/j,"em) "),i+="scale(".concat(e.size/j*(e.flipX?-1:1),", ").concat(e.size/j*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var ia=`:root, :host {
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
}`;function we(){const t=me,e=ge,n=d.cssPrefix,a=d.replacementClass;let r=ia;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let Se=!1;function Nt(){d.autoAddCss&&!Se&&(ta(we()),Se=!0)}var oa={mixout(){return{dom:{css:we,insertCss:Nt}}},hooks(){return{beforeDOMElementCreation(){Nt()},beforeI2svg(){Nt()}}}};const D=R||{};D[L]||(D[L]={}),D[L].styles||(D[L].styles={}),D[L].hooks||(D[L].hooks={}),D[L].shims||(D[L].shims=[]);var F=D[L];const Oe=[],Ee=function(){x.removeEventListener("DOMContentLoaded",Ee),st=1,Oe.map(t=>t())};let st=!1;M&&(st=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),st||x.addEventListener("DOMContentLoaded",Ee));function sa(t){M&&(st?setTimeout(t,0):Oe.push(t))}function J(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Ae(t):"<".concat(e," ").concat(na(n),">").concat(a.map(J).join(""),"</").concat(e,">")}function Pe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var _t=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=n,u,c,f;for(a===void 0?(u=1,f=e[i[0]]):(u=0,f=a);u<o;u++)c=i[u],f=s(f,e[c],c,e);return f};function la(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Tt(t){const e=la(t);return e.length===1?e[0].toString(16):null}function fa(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function ke(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Ft(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=ke(e);typeof F.hooks.addPack=="function"&&!a?F.hooks.addPack(t,ke(e)):F.styles[t]=l(l({},F.styles[t]||{}),r),t==="fas"&&Ft("fa",e)}const{styles:tt,shims:ca}=F,Ce=Object.keys(Et),ua=Ce.reduce((t,e)=>(t[e]=Object.keys(Et[e]),t),{});let Mt=null,Ie={},Ne={},_e={},Te={},Fe={};function da(t){return~qn.indexOf(t)}function ma(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!da(r)?r:null}const Me=()=>{const t=a=>_t(tt,(r,i,o)=>(r[o]=_t(i,a,{}),r),{});Ie=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),Ne=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),Fe=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});const e="far"in tt||d.autoFetchSvg,n=_t(ca,(a,r)=>{const i=r[0];let o=r[1];const s=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});_e=n.names,Te=n.unicodes,Mt=lt(d.styleDefault,{family:d.familyDefault})};Jn(t=>{Mt=lt(t.styleDefault,{family:d.familyDefault})}),Me();function Lt(t,e){return(Ie[t]||{})[e]}function ga(t,e){return(Ne[t]||{})[e]}function W(t,e){return(Fe[t]||{})[e]}function Le(t){return _e[t]||{prefix:null,iconName:null}}function pa(t){const e=Te[t],n=Lt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Y(){return Mt}const De=()=>({prefix:null,iconName:null,rest:[]});function ha(t){let e=S;const n=Ce.reduce((a,r)=>(a[r]="".concat(d.cssPrefix,"-").concat(r),a),{});return fe.forEach(a=>{(t.includes(n[a])||t.some(r=>ua[a].includes(r)))&&(e=a)}),e}function lt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=S}=e,a=$n[n][t];if(n===rt&&!t)return"fad";const r=be[n][t]||be[n][a],i=t in F.styles?t:null;return r||i||null}function ya(t){let e=[],n=null;return t.forEach(a=>{const r=ma(d.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function ze(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function ft(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=bt.concat(Fn),i=ze(t.filter(b=>r.includes(b))),o=ze(t.filter(b=>!bt.includes(b))),s=i.filter(b=>(a=b,!le.includes(b))),[u=null]=s,c=ha(i),f=l(l({},ya(o)),{},{prefix:lt(u,{family:c})});return l(l(l({},f),Aa({values:t,family:c,styles:tt,config:d,canonical:f,givenPrefix:a})),ba(n,a,f))}function ba(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?Le(r):{},o=W(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!tt.far&&tt.fas&&!d.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const va=fe.filter(t=>t!==S||t!==rt),xa=Object.keys(yt).filter(t=>t!==S).map(t=>Object.keys(yt[t])).flat();function Aa(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=t,s=n===rt,u=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",f=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(u||c||f)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&va.includes(n)&&(Object.keys(i).find(y=>xa.includes(y))||o.autoFetchSvg)){const y=En.get(n).defaultShortPrefixId;a.prefix=y,a.iconName=W(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=Y()||"fas"),a}class wa{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=l(l({},this.definitions[i]||{}),r[i]),Ft(i,r[i]);const o=Et[S][i];o&&Ft(o,r[i]),Me()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:s}=a[r],u=s[2];e[i]||(e[i]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[i][c]=s)}),e[i][o]=s}),e}}let Re=[],H={};const V={},Sa=Object.keys(V);function Oa(t,e){let{mixoutsTo:n}=e;return Re=t,H={},Object.keys(V).forEach(a=>{Sa.indexOf(a)===-1&&delete V[a]}),Re.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{H[o]||(H[o]=[]),H[o].push(i[o])})}a.provides&&a.provides(V)}),n}function Dt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(H[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function X(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(H[t]||[]).forEach(i=>{i.apply(null,n)})}function B(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return V[t]?V[t].apply(null,e):void 0}function zt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Y();if(e)return e=W(n,e)||e,Pe(je.definitions,n,e)||Pe(F.styles,n,e)}const je=new wa,C={noAuto:()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,X("noAuto")},config:d,dom:{i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(X("beforeI2svg",t),B("pseudoElements2svg",t),B("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,sa(()=>{Ea({autoReplaceSvgRoot:e}),X("watch",t)})}},parse:{icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:W(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=lt(t[0]);return{prefix:n,iconName:W(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(Gn))){const e=ft(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Y(),iconName:W(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Y();return{prefix:e,iconName:W(e,t)||t}}}},library:je,findIconDefinition:zt,toHtml:J},Ea=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=x}=t;(Object.keys(F.styles).length>0||d.autoFetchSvg)&&M&&d.autoReplaceSvg&&C.dom.i2svg({node:e})};function ct(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>J(n))}}),Object.defineProperty(t,"node",{get:function(){if(!M)return;const n=x.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Pa(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:o}=t;if(It(o)&&n.found&&!a.found){const{width:s,height:u}=n,c={x:s/u/2,y:.5};r.style=ot(l(l({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ka(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:o}),children:a}]}]}function Rt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:u,titleId:c,extra:f,watchable:b=!1}=t,{width:y,height:w}=n.found?n:e,E=Nn.includes(a),I=[d.replacementClass,r?"".concat(d.cssPrefix,"-").concat(r):""].filter(A=>f.classes.indexOf(A)===-1).filter(A=>A!==""||!!A).concat(f.classes).join(" ");let O={children:[],attributes:l(l({},f.attributes),{},{"data-prefix":a,"data-icon":r,class:I,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(w)})};const m=E&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/w*16*.0625,"em")}:{};b&&(O.attributes[U]=""),s&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(c||Z())},children:[s]}),delete O.attributes.title);const g=l(l({},O),{},{prefix:a,iconName:r,main:e,mask:n,maskId:u,transform:i,symbol:o,styles:l(l({},m),f.styles)}),{children:v,attributes:p}=n.found&&e.found?B("generateAbstractMask",g)||{children:[],attributes:{}}:B("generateAbstractIcon",g)||{children:[],attributes:{}};return g.children=v,g.attributes=p,o?ka(g):Pa(g)}function Ye(t){const{content:e,width:n,height:a,transform:r,title:i,extra:o,watchable:s=!1}=t,u=l(l(l({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[U]="");const c=l({},o.styles);It(r)&&(c.transform=ra({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const f=ot(c);f.length>0&&(u.style=f);const b=[];return b.push({tag:"span",attributes:u,children:[e]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function Ca(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ot(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:jt}=F;function Yt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(kt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(kt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(kt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Ia={found:!1,width:512,height:512};function Na(t,e){!he&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Bt(t,e){let n=e;return e==="fa"&&d.styleDefault!==null&&(e=Y()),new Promise((a,r)=>{if(n==="fa"){const i=Le(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&jt[e]&&jt[e][t]){const i=jt[e][t];return a(Yt(i))}Na(t,e),a(l(l({},Ia),{},{icon:d.showMissingIcons&&t?B("missingIconAbstract")||{}:{}}))})}const Be=()=>{},Ut=d.measurePerformance&&at&&at.mark&&at.measure?at:{mark:Be,measure:Be},et='FA "6.7.2"',_a=t=>(Ut.mark("".concat(et," ").concat(t," begins")),()=>Ue(t)),Ue=t=>{Ut.mark("".concat(et," ").concat(t," ends")),Ut.measure("".concat(et," ").concat(t),"".concat(et," ").concat(t," begins"),"".concat(et," ").concat(t," ends"))};var Wt={begin:_a,end:Ue};const ut=()=>{};function We(t){return typeof(t.getAttribute?t.getAttribute(U):null)=="string"}function Ta(t){const e=t.getAttribute?t.getAttribute(At):null,n=t.getAttribute?t.getAttribute(wt):null;return e&&n}function Fa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Ma(){return d.autoReplaceSvg===!0?dt.replace:dt[d.autoReplaceSvg]||dt.replace}function La(t){return x.createElementNS("http://www.w3.org/2000/svg",t)}function Da(t){return x.createElement(t)}function Xe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?La:Da}=e;if(typeof t=="string")return x.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(Xe(i,{ceFn:n}))}),a}function za(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const dt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Xe(n),e)}),e.getAttribute(U)===null&&d.keepOriginalSource){let n=x.createComment(za(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Ct(e).indexOf(d.replacementClass))return dt.replace(t);const a=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===d.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>J(i)).join(`
`);e.setAttribute(U,""),e.innerHTML=r}};function $e(t){t()}function Ge(t,e){const n=typeof e=="function"?e:ut;if(t.length===0)n();else{let a=$e;d.mutateApproach===Wn&&(a=R.requestAnimationFrame||$e),a(()=>{const r=Ma(),i=Wt.begin("mutate");t.map(r),i(),n()})}}let Xt=!1;function He(){Xt=!0}function $t(){Xt=!1}let mt=null;function Ve(t){if(!ie||!d.observeMutations)return;const{treeCallback:e=ut,nodeCallback:n=ut,pseudoElementsCallback:a=ut,observeMutationsRoot:r=x}=t;mt=new ie(i=>{if(Xt)return;const o=Y();G(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!We(s.addedNodes[0])&&(d.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&d.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&We(s.target)&&~Kn.indexOf(s.attributeName))if(s.attributeName==="class"&&Ta(s.target)){const{prefix:u,iconName:c}=ft(Ct(s.target));s.target.setAttribute(At,u||o),c&&s.target.setAttribute(wt,c)}else Fa(s.target)&&n(s.target)})}),M&&mt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ra(){mt&&mt.disconnect()}function ja(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Ya(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=ft(Ct(t));return r.prefix||(r.prefix=Y()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ga(r.prefix,t.innerText)||Lt(r.prefix,Tt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ba(t){const e=G(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||Z()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ua(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ke(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ya(t),i=Ba(t),o=Dt("parseNodeAttributes",{},t);let s=e.styleParser?ja(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i}},o)}const{styles:Wa}=F;function qe(t){const e=d.autoReplaceSvg==="nest"?Ke(t,{styleParser:!1}):Ke(t);return~e.extra.classes.indexOf(ve)?B("generateLayersText",t,e):B("generateSvgReplacementMutation",t,e)}function Xa(){return[...kn,...bt]}function Qe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();const n=x.documentElement.classList,a=f=>n.add("".concat(pe,"-").concat(f)),r=f=>n.remove("".concat(pe,"-").concat(f)),i=d.autoFetchSvg?Xa():le.concat(Object.keys(Wa));i.includes("fa")||i.push("fa");const o=[".".concat(ve,":not([").concat(U,"])")].concat(i.map(f=>".".concat(f,":not([").concat(U,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=G(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const u=Wt.begin("onTree"),c=s.reduce((f,b)=>{try{const y=qe(b);y&&f.push(y)}catch(y){he||y.name==="MissingIcon"&&console.error(y)}return f},[]);return new Promise((f,b)=>{Promise.all(c).then(y=>{Ge(y,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),u(),f()})}).catch(y=>{u(),b(y)})})}function $a(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qe(t).then(n=>{n&&Ge([n],e)})}function Ga(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:zt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:zt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const Ha=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=T,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:u=[],attributes:c={},styles:f={}}=e;if(!t)return;const{prefix:b,iconName:y,icon:w}=t;return ct(l({type:"icon"},t),()=>(X("beforeDOMElementCreation",{iconDefinition:t,params:e}),d.autoA11y&&(o?c["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(s||Z()):(c["aria-hidden"]="true",c.focusable="false")),Rt({icons:{main:Yt(w),mask:r?Yt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:y,transform:l(l({},T),n),symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:c,styles:f,classes:u}})))};var Va={mixout(){return{icon:Ga(Ha)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Qe,t.nodeCallback=$a,t}}},provides(t){t.i2svg=function(e){const{node:n=x,callback:a=()=>{}}=e;return Qe(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:s,symbol:u,mask:c,maskId:f,extra:b}=n;return new Promise((y,w)=>{Promise.all([Bt(a,o),c.iconName?Bt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(E=>{let[I,O]=E;y([e,Rt({icons:{main:I,mask:O},prefix:o,iconName:a,transform:s,symbol:u,maskId:f,title:r,titleId:i,extra:b,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:o}=e;const s=ot(o);s.length>0&&(a.style=s);let u;return It(i)&&(u=B("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},Ka={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ct({type:"layer"},()=>{X("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},qa={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return ct({type:"counter",content:t},()=>(X("beforeDOMElementCreation",{content:t,params:e}),Ca({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(d.cssPrefix,"-layers-counter"),...a]}})))}}}},Qa={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=T,title:a=null,classes:r=[],attributes:i={},styles:o={}}=e;return ct({type:"text",content:t},()=>(X("beforeDOMElementCreation",{content:t,params:e}),Ye({content:t,transform:l(l({},T),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(d.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let o=null,s=null;if(oe){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,s=c.height/u}return d.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Ye({content:e.innerHTML,width:o,height:s,transform:r,title:a,extra:i,watchable:!0})])}}};const Za=new RegExp('"',"ug"),Ze=[1105920,1112319],Je=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),On),Bn),Mn),Gt=Object.keys(Je).reduce((t,e)=>(t[e.toLowerCase()]=Je[e],t),{}),Ja=Object.keys(Gt).reduce((t,e)=>{const n=Gt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function tr(t){const e=t.replace(Za,""),n=fa(e,0),a=n>=Ze[0]&&n<=Ze[1],r=e.length===2?e[0]===e[1]:!1;return{value:Tt(r?e[0]:e),isSecondary:a||r}}function er(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Gt[n]||{})[r]||Ja[n]}function tn(t,e){const n="".concat(Un).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const o=G(t.children).filter(y=>y.getAttribute(xt)===e)[0],s=R.getComputedStyle(t,e),u=s.getPropertyValue("font-family"),c=u.match(Hn),f=s.getPropertyValue("font-weight"),b=s.getPropertyValue("content");if(o&&!c)return t.removeChild(o),a();if(c&&b!=="none"&&b!==""){const y=s.getPropertyValue("content");let w=er(u,f);const{value:E,isSecondary:I}=tr(y),O=c[0].startsWith("FontAwesome");let m=Lt(w,E),g=m;if(O){const v=pa(E);v.iconName&&v.prefix&&(m=v.iconName,w=v.prefix)}if(m&&!I&&(!o||o.getAttribute(At)!==w||o.getAttribute(wt)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);const v=Ua(),{extra:p}=v;p.attributes[xt]=e,Bt(m,w).then(A=>{const N=Rt(l(l({},v),{},{icons:{main:A,mask:De()},prefix:w,iconName:g,extra:p,watchable:!0})),P=x.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(P,t.firstChild):t.appendChild(P),P.outerHTML=N.map(Zt=>J(Zt)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function nr(t){return Promise.all([tn(t,"::before"),tn(t,"::after")])}function ar(t){return t.parentNode!==document.head&&!~Xn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(xt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function en(t){if(M)return new Promise((e,n)=>{const a=G(t.querySelectorAll("*")).filter(ar).map(nr),r=Wt.begin("searchPseudoElements");He(),Promise.all(a).then(()=>{r(),$t(),e()}).catch(()=>{r(),$t(),n()})})}var rr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=en,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=x}=e;d.searchPseudoElements&&en(n)}}};let nn=!1;var ir={mixout(){return{dom:{unwatch(){He(),nn=!0}}}},hooks(){return{bootstrap(){Ve(Dt("mutationObserverCallbacks",{}))},noAuto(){Ra()},watch(t){const{observeMutationsRoot:e}=t;nn?$t():Ve(Dt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const an=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var or={mixout(){return{parse:{transform:t=>an(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=an(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(s," ").concat(u," ").concat(c)},b={transform:"translate(".concat(i/2*-1," -256)")},y={outer:o,inner:f,path:b};return{tag:"g",attributes:l({},y.outer),children:[{tag:"g",attributes:l({},y.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),y.path)}]}]}}}};const Ht={x:0,y:0,width:"100%",height:"100%"};function rn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function sr(t){return t.tag==="g"?t.children:[t]}var lr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?ft(n.split(" ").map(r=>r.trim())):De();return a.prefix||(a.prefix=Y()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:s}=e;const{width:u,icon:c}=r,{width:f,icon:b}=i,y=aa({transform:s,containerWidth:f,iconWidth:u}),w={tag:"rect",attributes:l(l({},Ht),{},{fill:"white"})},E=c.children?{children:c.children.map(rn)}:{},I={tag:"g",attributes:l({},y.inner),children:[rn(l({tag:c.tag,attributes:l(l({},c.attributes),y.path)},E))]},O={tag:"g",attributes:l({},y.outer),children:[I]},m="mask-".concat(o||Z()),g="clip-".concat(o||Z()),v={tag:"mask",attributes:l(l({},Ht),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,O]},p={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:sr(b)},v]};return n.push(p,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(m,")")},Ht)}),{children:n,attributes:a}}}},fr={provides(t){let e=!1;R.matchMedia&&(e=R.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=l(l({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},cr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},ur=[oa,Va,Ka,qa,Qa,rr,ir,or,lr,fr,cr];Oa(ur,{mixoutsTo:C}),C.noAuto;const on=C.config,dr=C.library;C.dom;const gt=C.parse;C.findIconDefinition,C.toHtml;const mr=C.icon;C.layer;const gr=C.text;C.counter;function sn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?sn(Object(n),!0).forEach(function(a){k(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):sn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function pr(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function hr(t){var e=pr(t,"string");return typeof e=="symbol"?e:e+""}function pt(t){"@babel/helpers - typeof";return pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pt(t)}function k(t,e,n){return e=hr(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yr(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function br(t,e){if(t==null)return{};var n=yr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Vt(t){return vr(t)||xr(t)||Ar(t)||wr()}function vr(t){if(Array.isArray(t))return Kt(t)}function xr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ar(t,e){if(t){if(typeof t=="string")return Kt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kt(t,e)}}function Kt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function wr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ln={exports:{}};(function(t){(function(e){var n=function(m,g,v){if(!c(g)||b(g)||y(g)||w(g)||u(g))return g;var p,A=0,N=0;if(f(g))for(p=[],N=g.length;A<N;A++)p.push(n(m,g[A],v));else{p={};for(var P in g)Object.prototype.hasOwnProperty.call(g,P)&&(p[m(P,v)]=n(m,g[P],v))}return p},a=function(m,g){g=g||{};var v=g.separator||"_",p=g.split||/(?=[A-Z])/;return m.split(p).join(v)},r=function(m){return E(m)?m:(m=m.replace(/[\-_\s]+(.)?/g,function(g,v){return v?v.toUpperCase():""}),m.substr(0,1).toLowerCase()+m.substr(1))},i=function(m){var g=r(m);return g.substr(0,1).toUpperCase()+g.substr(1)},o=function(m,g){return a(m,g).toLowerCase()},s=Object.prototype.toString,u=function(m){return typeof m=="function"},c=function(m){return m===Object(m)},f=function(m){return s.call(m)=="[object Array]"},b=function(m){return s.call(m)=="[object Date]"},y=function(m){return s.call(m)=="[object RegExp]"},w=function(m){return s.call(m)=="[object Boolean]"},E=function(m){return m=m-0,m===m},I=function(m,g){var v=g&&"process"in g?g.process:g;return typeof v!="function"?m:function(p,A){return v(p,m,A)}},O={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(m,g){return n(I(r,g),m)},decamelizeKeys:function(m,g){return n(I(o,g),m,g)},pascalizeKeys:function(m,g){return n(I(i,g),m)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=O:e.humps=O})(Sr)})(ln);var Or=ln.exports,Er=["class","style"];function Pr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Or.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function kr(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function qt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(u){return qt(u)}),r=Object.keys(t.attributes||{}).reduce(function(u,c){var f=t.attributes[c];switch(c){case"class":u.class=kr(f);break;case"style":u.style=Pr(f);break;default:u.attrs[c]=f}return u},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=br(n,Er);return h.h(t.tag,_(_(_({},e),{},{class:r.class,style:_(_({},r.style),o)},r.attrs),s),a)}var fn=!1;try{fn=process.env.NODE_ENV==="production"}catch{}function Cr(){if(!fn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function nt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?k({},t,e):{}}function Ir(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},k(k(k(k(k(k(k(k(k(k(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),k(k(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function cn(t){if(t&&pt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(gt.icon)return gt.icon(t);if(t===null)return null;if(pt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Nr=h.defineComponent({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=h.computed(function(){return cn(e.icon)}),i=h.computed(function(){return nt("classes",Ir(e))}),o=h.computed(function(){return nt("transform",typeof e.transform=="string"?gt.transform(e.transform):e.transform)}),s=h.computed(function(){return nt("mask",cn(e.mask))}),u=h.computed(function(){return mr(r.value,_(_(_(_({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});h.watch(u,function(f){if(!f)return Cr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=h.computed(function(){return u.value?qt(u.value.abstract[0],{},a):null});return function(){return c.value}}});h.defineComponent({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var a=n.slots,r=on.familyPrefix,i=h.computed(function(){return["".concat(r,"-layers")].concat(Vt(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return h.h("div",{class:i.value},a.default?a.default():[])}}}),h.defineComponent({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var a=n.attrs,r=on.familyPrefix,i=h.computed(function(){return nt("classes",[].concat(Vt(e.counter?["".concat(r,"-layers-counter")]:[]),Vt(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=h.computed(function(){return nt("transform",typeof e.transform=="string"?gt.transform(e.transform):e.transform)}),s=h.computed(function(){var c=gr(e.value.toString(),_(_({},o.value),i.value)),f=c.abstract;return e.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),u=h.computed(function(){return qt(s.value,{},a)});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const _r={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Tr={prefix:"far",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"]},Fr={class:"dimmer-widget"},Mr={class:"status"},un=0,dn=100,Qt=2700,mn=4e3,Lr=h.defineComponent({__name:"DimmLight",props:{id:{},props:{},state:{}},setup(t){dr.add(_r,Tr);const e=dn-un,n=mn-Qt,a=t,r=gn.useStore(),i=h.computed(()=>r.state.data.messages);h.watch(i,()=>{console.log(i.value)});const o=h.inject("$dataTracker"),s=h.ref(50),u=h.ref(3e3),c=h.ref(0),f=h.ref(null),b=h.ref(null),y=h.computed(()=>s.value>0?["fas","lightbulb"]:["far","lightbulb"]),w=h.computed(()=>{const p=(u.value-Qt)/n,A=Math.round(255*(1-p)+173*p),N=Math.round(193*(1-p)+216*p),P=Math.round(67*(1-p)+255*p);return`rgb(${A},${N},${P})`});function E(p){switch(c.value){case 0:return;case 1:I(p);case 2:O(p);break;case 3:m(p);break}}function I(p){if(!f.value)return;const A="touches"in p?p.touches[0].clientX:p.clientX,N="touches"in p?p.touches[0].clientY:p.clientY,P=Math.abs(f.value.start.x-A),Zt=Math.abs(f.value.start.y-N);c.value=P>Zt?2:3}function O(p){if(!f.value)return;const A="touches"in p?p.touches[0].clientX:p.clientX,N=f.value.start.x-A,P=Math.max(Qt,Math.min(mn,f.value.temperature+N/f.value.rect.width*n));u.value=P}function m(p){if(!f.value)return;const A="touches"in p?p.touches[0].clientY:p.clientY,N=f.value.start.y-A,P=Math.max(un,Math.min(dn,f.value.brightness+N/f.value.rect.height*e));s.value=Math.round(P)}function g(p){if(!b.value)return;const A=b.value.getBoundingClientRect();f.value={start:{x:"touches"in p?p.touches[0].clientX:p.clientX,y:"touches"in p?p.touches[0].clientY:p.clientY},rect:A,brightness:s.value,temperature:u.value},c.value=1,document.addEventListener("mousemove",E),document.addEventListener("mouseup",v),document.addEventListener("touchmove",E),document.addEventListener("touchend",v)}function v(){c.value=0,f.value=null,document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",v),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",v)}return o(a.id),(p,A)=>(h.openBlock(),h.createElementBlock("div",Fr,[A[0]||(A[0]=h.createElementVNode("div",{class:"name"},"Test Light",-1)),h.createElementVNode("div",Mr,h.toDisplayString(s.value)+"%",1),h.createElementVNode("div",{class:"dimmer-bar",ref_key:"dimmerBarElt",ref:b,onMousedown:g,onTouchstart:g},[h.createElementVNode("div",{class:"dimmer-fill",style:h.normalizeStyle({height:s.value+"%",backgroundColor:w.value})},null,4),h.createVNode(h.unref(Nr),{icon:y.value,class:"lightbulb-icon"},null,8,["icon"])],544)]))}});z.DimmLight=Lr,Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});
