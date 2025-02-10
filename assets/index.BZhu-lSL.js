(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function MV(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var SA={exports:{}},nw={},IA={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ti=Symbol.for("react.element"),xV=Symbol.for("react.portal"),wV=Symbol.for("react.fragment"),LV=Symbol.for("react.strict_mode"),CV=Symbol.for("react.profiler"),SV=Symbol.for("react.provider"),IV=Symbol.for("react.context"),PV=Symbol.for("react.forward_ref"),AV=Symbol.for("react.suspense"),bV=Symbol.for("react.memo"),zV=Symbol.for("react.lazy"),YS=Symbol.iterator;function jV(e){return e===null||typeof e!="object"?null:(e=YS&&e[YS]||e["@@iterator"],typeof e=="function"?e:null)}var PA={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},AA=Object.assign,bA={};function xa(e,t,n){this.props=e,this.context=t,this.refs=bA,this.updater=n||PA}xa.prototype.isReactComponent={};xa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zA(){}zA.prototype=xa.prototype;function xC(e,t,n){this.props=e,this.context=t,this.refs=bA,this.updater=n||PA}var wC=xC.prototype=new zA;wC.constructor=xC;AA(wC,xa.prototype);wC.isPureReactComponent=!0;var JS=Array.isArray,jA=Object.prototype.hasOwnProperty,LC={current:null},VA={key:!0,ref:!0,__self:!0,__source:!0};function qA(e,t,n){var a,r={},o=null,c=null;if(t!=null)for(a in t.ref!==void 0&&(c=t.ref),t.key!==void 0&&(o=""+t.key),t)jA.call(t,a)&&!VA.hasOwnProperty(a)&&(r[a]=t[a]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+2];r.children=l}if(e&&e.defaultProps)for(a in s=e.defaultProps,s)r[a]===void 0&&(r[a]=s[a]);return{$$typeof:Ti,type:e,key:o,ref:c,props:r,_owner:LC.current}}function VV(e,t){return{$$typeof:Ti,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function CC(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ti}function qV(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var eI=/\/+/g;function Iw(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qV(""+e.key):t.toString(36)}function kr(e,t,n,a,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case Ti:case xV:c=!0}}if(c)return c=e,r=r(c),e=a===""?"."+Iw(c,0):a,JS(r)?(n="",e!=null&&(n=e.replace(eI,"$&/")+"/"),kr(r,t,n,"",function(d){return d})):r!=null&&(CC(r)&&(r=VV(r,n+(!r.key||c&&c.key===r.key?"":(""+r.key).replace(eI,"$&/")+"/")+e)),t.push(r)),1;if(c=0,a=a===""?".":a+":",JS(e))for(var s=0;s<e.length;s++){o=e[s];var l=a+Iw(o,s);c+=kr(o,t,n,l,r)}else if(l=jV(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=a+Iw(o,s++),c+=kr(o,t,n,l,r);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function Gi(e,t,n){if(e==null)return e;var a=[],r=0;return kr(e,a,"","",function(o){return t.call(n,o,r++)}),a}function TV(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},fr={transition:null},HV={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:fr,ReactCurrentOwner:LC};function TA(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Gi,forEach:function(e,t,n){Gi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Gi(e,function(){t++}),t},toArray:function(e){return Gi(e,function(t){return t})||[]},only:function(e){if(!CC(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=xa;D.Fragment=wV;D.Profiler=CV;D.PureComponent=xC;D.StrictMode=LV;D.Suspense=AV;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HV;D.act=TA;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=AA({},e.props),r=e.key,o=e.ref,c=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,c=LC.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)jA.call(t,l)&&!VA.hasOwnProperty(l)&&(a[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){s=Array(l);for(var d=0;d<l;d++)s[d]=arguments[d+2];a.children=s}return{$$typeof:Ti,type:e.type,key:r,ref:o,props:a,_owner:c}};D.createContext=function(e){return e={$$typeof:IV,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:SV,_context:e},e.Consumer=e};D.createElement=qA;D.createFactory=function(e){var t=qA.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:PV,render:e}};D.isValidElement=CC;D.lazy=function(e){return{$$typeof:zV,_payload:{_status:-1,_result:e},_init:TV}};D.memo=function(e,t){return{$$typeof:bV,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=fr.transition;fr.transition={};try{e()}finally{fr.transition=t}};D.unstable_act=TA;D.useCallback=function(e,t){return xe.current.useCallback(e,t)};D.useContext=function(e){return xe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};D.useEffect=function(e,t){return xe.current.useEffect(e,t)};D.useId=function(){return xe.current.useId()};D.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return xe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};D.useRef=function(e){return xe.current.useRef(e)};D.useState=function(e){return xe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return xe.current.useTransition()};D.version="18.3.1";IA.exports=D;var P=IA.exports;const SC=MV(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DV=P,FV=Symbol.for("react.element"),RV=Symbol.for("react.fragment"),BV=Object.prototype.hasOwnProperty,EV=DV.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,OV={key:!0,ref:!0,__self:!0,__source:!0};function HA(e,t,n){var a,r={},o=null,c=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(c=t.ref);for(a in t)BV.call(t,a)&&!OV.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)r[a]===void 0&&(r[a]=t[a]);return{$$typeof:FV,type:e,key:o,ref:c,props:r,_owner:EV.current}}nw.Fragment=RV;nw.jsx=HA;nw.jsxs=HA;SA.exports=nw;var v=SA.exports,DA={exports:{}},He={},FA={exports:{}},RA={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,q){var T=b.length;b.push(q);e:for(;0<T;){var X=T-1>>>1,re=b[X];if(0<r(re,q))b[X]=q,b[T]=re,T=X;else break e}}function n(b){return b.length===0?null:b[0]}function a(b){if(b.length===0)return null;var q=b[0],T=b.pop();if(T!==q){b[0]=T;e:for(var X=0,re=b.length,Zi=re>>>1;X<Zi;){var Kt=2*(X+1)-1,Sw=b[Kt],$t=Kt+1,Wi=b[$t];if(0>r(Sw,T))$t<re&&0>r(Wi,Sw)?(b[X]=Wi,b[$t]=T,X=$t):(b[X]=Sw,b[Kt]=T,X=Kt);else if($t<re&&0>r(Wi,T))b[X]=Wi,b[$t]=T,X=$t;else break e}}return q}function r(b,q){var T=b.sortIndex-q.sortIndex;return T!==0?T:b.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var c=Date,s=c.now();e.unstable_now=function(){return c.now()-s}}var l=[],d=[],h=1,u=null,y=3,m=!1,g=!1,M=!1,L=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(b){for(var q=n(d);q!==null;){if(q.callback===null)a(d);else if(q.startTime<=b)a(d),q.sortIndex=q.expirationTime,t(l,q);else break;q=n(d)}}function x(b){if(M=!1,f(b),!g)if(n(l)!==null)g=!0,_i(w);else{var q=n(d);q!==null&&te(x,q.startTime-b)}}function w(b,q){g=!1,M&&(M=!1,k(C),C=-1),m=!0;var T=y;try{for(f(q),u=n(l);u!==null&&(!(u.expirationTime>q)||b&&!ie());){var X=u.callback;if(typeof X=="function"){u.callback=null,y=u.priorityLevel;var re=X(u.expirationTime<=q);q=e.unstable_now(),typeof re=="function"?u.callback=re:u===n(l)&&a(l),f(q)}else a(l);u=n(l)}if(u!==null)var Zi=!0;else{var Kt=n(d);Kt!==null&&te(x,Kt.startTime-q),Zi=!1}return Zi}finally{u=null,y=T,m=!1}}var I=!1,A=null,C=-1,H=5,V=-1;function ie(){return!(e.unstable_now()-V<H)}function wt(){if(A!==null){var b=e.unstable_now();V=b;var q=!0;try{q=A(!0,b)}finally{q?Gt():(I=!1,A=null)}}else I=!1}var Gt;if(typeof p=="function")Gt=function(){p(wt)};else if(typeof MessageChannel<"u"){var Ia=new MessageChannel,QS=Ia.port2;Ia.port1.onmessage=wt,Gt=function(){QS.postMessage(null)}}else Gt=function(){L(wt,0)};function _i(b){A=b,I||(I=!0,Gt())}function te(b,q){C=L(function(){b(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){g||m||(g=!0,_i(w))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(b){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var T=y;y=q;try{return b()}finally{y=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,q){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var T=y;y=b;try{return q()}finally{y=T}},e.unstable_scheduleCallback=function(b,q,T){var X=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?X+T:X):T=X,b){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=T+re,b={id:h++,callback:q,priorityLevel:b,startTime:T,expirationTime:re,sortIndex:-1},T>X?(b.sortIndex=T,t(d,b),n(l)===null&&b===n(d)&&(M?(k(C),C=-1):M=!0,te(x,T-X))):(b.sortIndex=re,t(l,b),g||m||(g=!0,_i(w))),b},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(b){var q=y;return function(){var T=y;y=q;try{return b.apply(this,arguments)}finally{y=T}}}})(RA);FA.exports=RA;var UV=FA.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NV=P,qe=UV;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var BA=new Set,ui={};function zn(e,t){ha(e,t),ha(e+"Capture",t)}function ha(e,t){for(ui[e]=t,e=0;e<t.length;e++)BA.add(t[e])}var ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hL=Object.prototype.hasOwnProperty,_V=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tI={},nI={};function ZV(e){return hL.call(nI,e)?!0:hL.call(tI,e)?!1:_V.test(e)?nI[e]=!0:(tI[e]=!0,!1)}function WV(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function GV(e,t,n,a){if(t===null||typeof t>"u"||WV(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,a,r,o,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=c}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var IC=/[\-:]([a-z])/g;function PC(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(IC,PC);ue[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(IC,PC);ue[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(IC,PC);ue[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function AC(e,t,n,a){var r=ue.hasOwnProperty(t)?ue[t]:null;(r!==null?r.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(GV(t,n,r,a)&&(n=null),a||r===null?ZV(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,a=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var xt=NV.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ki=Symbol.for("react.element"),Tn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),bC=Symbol.for("react.strict_mode"),uL=Symbol.for("react.profiler"),EA=Symbol.for("react.provider"),OA=Symbol.for("react.context"),zC=Symbol.for("react.forward_ref"),yL=Symbol.for("react.suspense"),pL=Symbol.for("react.suspense_list"),jC=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),UA=Symbol.for("react.offscreen"),aI=Symbol.iterator;function Pa(e){return e===null||typeof e!="object"?null:(e=aI&&e[aI]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Pw;function Da(e){if(Pw===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pw=t&&t[1]||""}return`
`+Pw+e}var Aw=!1;function bw(e,t){if(!e||Aw)return"";Aw=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var a=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){a=d}e.call(t.prototype)}else{try{throw Error()}catch(d){a=d}e()}}catch(d){if(d&&a&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),o=a.stack.split(`
`),c=r.length-1,s=o.length-1;1<=c&&0<=s&&r[c]!==o[s];)s--;for(;1<=c&&0<=s;c--,s--)if(r[c]!==o[s]){if(c!==1||s!==1)do if(c--,s--,0>s||r[c]!==o[s]){var l=`
`+r[c].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=c&&0<=s);break}}}finally{Aw=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Da(e):""}function KV(e){switch(e.tag){case 5:return Da(e.type);case 16:return Da("Lazy");case 13:return Da("Suspense");case 19:return Da("SuspenseList");case 0:case 2:case 15:return e=bw(e.type,!1),e;case 11:return e=bw(e.type.render,!1),e;case 1:return e=bw(e.type,!0),e;default:return""}}function kL(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Tn:return"Portal";case uL:return"Profiler";case bC:return"StrictMode";case yL:return"Suspense";case pL:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case OA:return(e.displayName||"Context")+".Consumer";case EA:return(e._context.displayName||"Context")+".Provider";case zC:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jC:return t=e.displayName||null,t!==null?t:kL(e.type)||"Memo";case St:t=e._payload,e=e._init;try{return kL(e(t))}catch{}}return null}function $V(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kL(t);case 8:return t===bC?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function NA(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function XV(e){var t=NA(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(c){a=""+c,o.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $i(e){e._valueTracker||(e._valueTracker=XV(e))}function _A(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=NA(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Sx(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fL(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function iI(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ZA(e,t){t=t.checked,t!=null&&AC(e,"checked",t,!1)}function mL(e,t){ZA(e,t);var n=Bt(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vL(e,t.type,n):t.hasOwnProperty("defaultValue")&&vL(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rI(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vL(e,t,n){(t!=="number"||Sx(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fa=Array.isArray;function Qn(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function gL(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oI(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Fa(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function WA(e,t){var n=Bt(t.value),a=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function cI(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function GA(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ML(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?GA(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xi,KA=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xi=Xi||document.createElement("div"),Xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QV=["Webkit","ms","Moz","O"];Object.keys(Na).forEach(function(e){QV.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Na[t]=Na[e]})});function $A(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Na.hasOwnProperty(e)&&Na[e]?(""+t).trim():t+"px"}function XA(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,r=$A(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,r):e[n]=r}}var YV=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xL(e,t){if(t){if(YV[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function wL(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var LL=null;function VC(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var CL=null,Yn=null,Jn=null;function sI(e){if(e=Fi(e)){if(typeof CL!="function")throw Error(S(280));var t=e.stateNode;t&&(t=cw(t),CL(e.stateNode,e.type,t))}}function QA(e){Yn?Jn?Jn.push(e):Jn=[e]:Yn=e}function YA(){if(Yn){var e=Yn,t=Jn;if(Jn=Yn=null,sI(e),t)for(e=0;e<t.length;e++)sI(t[e])}}function JA(e,t){return e(t)}function eb(){}var zw=!1;function tb(e,t,n){if(zw)return e(t,n);zw=!0;try{return JA(e,t,n)}finally{zw=!1,(Yn!==null||Jn!==null)&&(eb(),YA())}}function pi(e,t){var n=e.stateNode;if(n===null)return null;var a=cw(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var SL=!1;if(ft)try{var Aa={};Object.defineProperty(Aa,"passive",{get:function(){SL=!0}}),window.addEventListener("test",Aa,Aa),window.removeEventListener("test",Aa,Aa)}catch{SL=!1}function JV(e,t,n,a,r,o,c,s,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var _a=!1,Ix=null,Px=!1,IL=null,eq={onError:function(e){_a=!0,Ix=e}};function tq(e,t,n,a,r,o,c,s,l){_a=!1,Ix=null,JV.apply(eq,arguments)}function nq(e,t,n,a,r,o,c,s,l){if(tq.apply(this,arguments),_a){if(_a){var d=Ix;_a=!1,Ix=null}else throw Error(S(198));Px||(Px=!0,IL=d)}}function jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nb(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lI(e){if(jn(e)!==e)throw Error(S(188))}function aq(e){var t=e.alternate;if(!t){if(t=jn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return lI(r),e;if(o===a)return lI(r),t;o=o.sibling}throw Error(S(188))}if(n.return!==a.return)n=r,a=o;else{for(var c=!1,s=r.child;s;){if(s===n){c=!0,n=r,a=o;break}if(s===a){c=!0,a=r,n=o;break}s=s.sibling}if(!c){for(s=o.child;s;){if(s===n){c=!0,n=o,a=r;break}if(s===a){c=!0,a=o,n=r;break}s=s.sibling}if(!c)throw Error(S(189))}}if(n.alternate!==a)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function ab(e){return e=aq(e),e!==null?ib(e):null}function ib(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ib(e);if(t!==null)return t;e=e.sibling}return null}var rb=qe.unstable_scheduleCallback,dI=qe.unstable_cancelCallback,iq=qe.unstable_shouldYield,rq=qe.unstable_requestPaint,Y=qe.unstable_now,oq=qe.unstable_getCurrentPriorityLevel,qC=qe.unstable_ImmediatePriority,ob=qe.unstable_UserBlockingPriority,Ax=qe.unstable_NormalPriority,cq=qe.unstable_LowPriority,cb=qe.unstable_IdlePriority,aw=null,it=null;function sq(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(aw,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:hq,lq=Math.log,dq=Math.LN2;function hq(e){return e>>>=0,e===0?32:31-(lq(e)/dq|0)|0}var Qi=64,Yi=4194304;function Ra(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bx(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,r=e.suspendedLanes,o=e.pingedLanes,c=n&268435455;if(c!==0){var s=c&~r;s!==0?a=Ra(s):(o&=c,o!==0&&(a=Ra(o)))}else c=n&~r,c!==0?a=Ra(c):o!==0&&(a=Ra(o));if(a===0)return 0;if(t!==0&&t!==a&&!(t&r)&&(r=a&-a,o=t&-t,r>=o||r===16&&(o&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-Xe(t),r=1<<n,a|=e[n],t&=~r;return a}function uq(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yq(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes;0<o;){var c=31-Xe(o),s=1<<c,l=r[c];l===-1?(!(s&n)||s&a)&&(r[c]=uq(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function PL(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sb(){var e=Qi;return Qi<<=1,!(Qi&4194240)&&(Qi=64),e}function jw(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function pq(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-Xe(n),o=1<<r;t[r]=0,a[r]=-1,e[r]=-1,n&=~o}}function TC(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Xe(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}var R=0;function lb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var db,HC,hb,ub,yb,AL=!1,Ji=[],jt=null,Vt=null,qt=null,ki=new Map,fi=new Map,Pt=[],kq="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hI(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fi.delete(t.pointerId)}}function ba(e,t,n,a,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[r]},t!==null&&(t=Fi(t),t!==null&&HC(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function fq(e,t,n,a,r){switch(t){case"focusin":return jt=ba(jt,e,t,n,a,r),!0;case"dragenter":return Vt=ba(Vt,e,t,n,a,r),!0;case"mouseover":return qt=ba(qt,e,t,n,a,r),!0;case"pointerover":var o=r.pointerId;return ki.set(o,ba(ki.get(o)||null,e,t,n,a,r)),!0;case"gotpointercapture":return o=r.pointerId,fi.set(o,ba(fi.get(o)||null,e,t,n,a,r)),!0}return!1}function pb(e){var t=vn(e.target);if(t!==null){var n=jn(t);if(n!==null){if(t=n.tag,t===13){if(t=nb(n),t!==null){e.blockedOn=t,yb(e.priority,function(){hb(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bL(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);LL=a,n.target.dispatchEvent(a),LL=null}else return t=Fi(n),t!==null&&HC(t),e.blockedOn=n,!1;t.shift()}return!0}function uI(e,t,n){mr(e)&&n.delete(t)}function mq(){AL=!1,jt!==null&&mr(jt)&&(jt=null),Vt!==null&&mr(Vt)&&(Vt=null),qt!==null&&mr(qt)&&(qt=null),ki.forEach(uI),fi.forEach(uI)}function za(e,t){e.blockedOn===t&&(e.blockedOn=null,AL||(AL=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,mq)))}function mi(e){function t(r){return za(r,e)}if(0<Ji.length){za(Ji[0],e);for(var n=1;n<Ji.length;n++){var a=Ji[n];a.blockedOn===e&&(a.blockedOn=null)}}for(jt!==null&&za(jt,e),Vt!==null&&za(Vt,e),qt!==null&&za(qt,e),ki.forEach(t),fi.forEach(t),n=0;n<Pt.length;n++)a=Pt[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)pb(n),n.blockedOn===null&&Pt.shift()}var ea=xt.ReactCurrentBatchConfig,zx=!0;function vq(e,t,n,a){var r=R,o=ea.transition;ea.transition=null;try{R=1,DC(e,t,n,a)}finally{R=r,ea.transition=o}}function gq(e,t,n,a){var r=R,o=ea.transition;ea.transition=null;try{R=4,DC(e,t,n,a)}finally{R=r,ea.transition=o}}function DC(e,t,n,a){if(zx){var r=bL(e,t,n,a);if(r===null)Ow(e,t,a,jx,n),hI(e,a);else if(fq(r,e,t,n,a))a.stopPropagation();else if(hI(e,a),t&4&&-1<kq.indexOf(e)){for(;r!==null;){var o=Fi(r);if(o!==null&&db(o),o=bL(e,t,n,a),o===null&&Ow(e,t,a,jx,n),o===r)break;r=o}r!==null&&a.stopPropagation()}else Ow(e,t,a,null,n)}}var jx=null;function bL(e,t,n,a){if(jx=null,e=VC(a),e=vn(e),e!==null)if(t=jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nb(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return jx=e,null}function kb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oq()){case qC:return 1;case ob:return 4;case Ax:case cq:return 16;case cb:return 536870912;default:return 16}default:return 16}}var bt=null,FC=null,vr=null;function fb(){if(vr)return vr;var e,t=FC,n=t.length,a,r="value"in bt?bt.value:bt.textContent,o=r.length;for(e=0;e<n&&t[e]===r[e];e++);var c=n-e;for(a=1;a<=c&&t[n-a]===r[o-a];a++);return vr=r.slice(e,1<a?1-a:void 0)}function gr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function er(){return!0}function yI(){return!1}function De(e){function t(n,a,r,o,c){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=o,this.target=c,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?er:yI,this.isPropagationStopped=yI,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=er)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=er)},persist:function(){},isPersistent:er}),t}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},RC=De(wa),Di=G({},wa,{view:0,detail:0}),Mq=De(Di),Vw,qw,ja,iw=G({},Di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:BC,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ja&&(ja&&e.type==="mousemove"?(Vw=e.screenX-ja.screenX,qw=e.screenY-ja.screenY):qw=Vw=0,ja=e),Vw)},movementY:function(e){return"movementY"in e?e.movementY:qw}}),pI=De(iw),xq=G({},iw,{dataTransfer:0}),wq=De(xq),Lq=G({},Di,{relatedTarget:0}),Tw=De(Lq),Cq=G({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Sq=De(Cq),Iq=G({},wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pq=De(Iq),Aq=G({},wa,{data:0}),kI=De(Aq),bq={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zq={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jq={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vq(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jq[e])?!!t[e]:!1}function BC(){return Vq}var qq=G({},Di,{key:function(e){if(e.key){var t=bq[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zq[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:BC,charCode:function(e){return e.type==="keypress"?gr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tq=De(qq),Hq=G({},iw,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fI=De(Hq),Dq=G({},Di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:BC}),Fq=De(Dq),Rq=G({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bq=De(Rq),Eq=G({},iw,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Oq=De(Eq),Uq=[9,13,27,32],EC=ft&&"CompositionEvent"in window,Za=null;ft&&"documentMode"in document&&(Za=document.documentMode);var Nq=ft&&"TextEvent"in window&&!Za,mb=ft&&(!EC||Za&&8<Za&&11>=Za),mI=" ",vI=!1;function vb(e,t){switch(e){case"keyup":return Uq.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function _q(e,t){switch(e){case"compositionend":return gb(t);case"keypress":return t.which!==32?null:(vI=!0,mI);case"textInput":return e=t.data,e===mI&&vI?null:e;default:return null}}function Zq(e,t){if(Dn)return e==="compositionend"||!EC&&vb(e,t)?(e=fb(),vr=FC=bt=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mb&&t.locale!=="ko"?null:t.data;default:return null}}var Wq={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gI(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wq[e.type]:t==="textarea"}function Mb(e,t,n,a){QA(a),t=Vx(t,"onChange"),0<t.length&&(n=new RC("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Wa=null,vi=null;function Gq(e){jb(e,0)}function rw(e){var t=Bn(e);if(_A(t))return e}function Kq(e,t){if(e==="change")return t}var xb=!1;if(ft){var Hw;if(ft){var Dw="oninput"in document;if(!Dw){var MI=document.createElement("div");MI.setAttribute("oninput","return;"),Dw=typeof MI.oninput=="function"}Hw=Dw}else Hw=!1;xb=Hw&&(!document.documentMode||9<document.documentMode)}function xI(){Wa&&(Wa.detachEvent("onpropertychange",wb),vi=Wa=null)}function wb(e){if(e.propertyName==="value"&&rw(vi)){var t=[];Mb(t,vi,e,VC(e)),tb(Gq,t)}}function $q(e,t,n){e==="focusin"?(xI(),Wa=t,vi=n,Wa.attachEvent("onpropertychange",wb)):e==="focusout"&&xI()}function Xq(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rw(vi)}function Qq(e,t){if(e==="click")return rw(t)}function Yq(e,t){if(e==="input"||e==="change")return rw(t)}function Jq(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:Jq;function gi(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!hL.call(t,r)||!Ye(e[r],t[r]))return!1}return!0}function wI(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function LI(e,t){var n=wI(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wI(n)}}function Lb(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lb(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cb(){for(var e=window,t=Sx();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sx(e.document)}return t}function OC(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function eT(e){var t=Cb(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lb(n.ownerDocument.documentElement,n)){if(a!==null&&OC(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,o=Math.min(a.start,r);a=a.end===void 0?o:Math.min(a.end,r),!e.extend&&o>a&&(r=a,a=o,o=r),r=LI(n,o);var c=LI(n,a);r&&c&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),o>a?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tT=ft&&"documentMode"in document&&11>=document.documentMode,Fn=null,zL=null,Ga=null,jL=!1;function CI(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jL||Fn==null||Fn!==Sx(a)||(a=Fn,"selectionStart"in a&&OC(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ga&&gi(Ga,a)||(Ga=a,a=Vx(zL,"onSelect"),0<a.length&&(t=new RC("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Fn)))}function tr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rn={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionend:tr("Transition","TransitionEnd")},Fw={},Sb={};ft&&(Sb=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function ow(e){if(Fw[e])return Fw[e];if(!Rn[e])return e;var t=Rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sb)return Fw[e]=t[n];return e}var Ib=ow("animationend"),Pb=ow("animationiteration"),Ab=ow("animationstart"),bb=ow("transitionend"),zb=new Map,SI="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nt(e,t){zb.set(e,t),zn(t,[e])}for(var Rw=0;Rw<SI.length;Rw++){var Bw=SI[Rw],nT=Bw.toLowerCase(),aT=Bw[0].toUpperCase()+Bw.slice(1);Nt(nT,"on"+aT)}Nt(Ib,"onAnimationEnd");Nt(Pb,"onAnimationIteration");Nt(Ab,"onAnimationStart");Nt("dblclick","onDoubleClick");Nt("focusin","onFocus");Nt("focusout","onBlur");Nt(bb,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);ha("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ba));function II(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,nq(a,t,void 0,e),e.currentTarget=null}function jb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var o=void 0;if(t)for(var c=a.length-1;0<=c;c--){var s=a[c],l=s.instance,d=s.currentTarget;if(s=s.listener,l!==o&&r.isPropagationStopped())break e;II(r,s,d),o=l}else for(c=0;c<a.length;c++){if(s=a[c],l=s.instance,d=s.currentTarget,s=s.listener,l!==o&&r.isPropagationStopped())break e;II(r,s,d),o=l}}}if(Px)throw e=IL,Px=!1,IL=null,e}function E(e,t){var n=t[DL];n===void 0&&(n=t[DL]=new Set);var a=e+"__bubble";n.has(a)||(Vb(t,e,2,!1),n.add(a))}function Ew(e,t,n){var a=0;t&&(a|=4),Vb(n,e,a,t)}var nr="_reactListening"+Math.random().toString(36).slice(2);function Mi(e){if(!e[nr]){e[nr]=!0,BA.forEach(function(n){n!=="selectionchange"&&(iT.has(n)||Ew(n,!1,e),Ew(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[nr]||(t[nr]=!0,Ew("selectionchange",!1,t))}}function Vb(e,t,n,a){switch(kb(t)){case 1:var r=vq;break;case 4:r=gq;break;default:r=DC}n=r.bind(null,t,n,e),r=void 0,!SL||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Ow(e,t,n,a,r){var o=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var s=a.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(c===4)for(c=a.return;c!==null;){var l=c.tag;if((l===3||l===4)&&(l=c.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;c=c.return}for(;s!==null;){if(c=vn(s),c===null)return;if(l=c.tag,l===5||l===6){a=o=c;continue e}s=s.parentNode}}a=a.return}tb(function(){var d=o,h=VC(n),u=[];e:{var y=zb.get(e);if(y!==void 0){var m=RC,g=e;switch(e){case"keypress":if(gr(n)===0)break e;case"keydown":case"keyup":m=Tq;break;case"focusin":g="focus",m=Tw;break;case"focusout":g="blur",m=Tw;break;case"beforeblur":case"afterblur":m=Tw;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=pI;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=wq;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Fq;break;case Ib:case Pb:case Ab:m=Sq;break;case bb:m=Bq;break;case"scroll":m=Mq;break;case"wheel":m=Oq;break;case"copy":case"cut":case"paste":m=Pq;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=fI}var M=(t&4)!==0,L=!M&&e==="scroll",k=M?y!==null?y+"Capture":null:y;M=[];for(var p=d,f;p!==null;){f=p;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,k!==null&&(x=pi(p,k),x!=null&&M.push(xi(p,x,f)))),L)break;p=p.return}0<M.length&&(y=new m(y,g,null,n,h),u.push({event:y,listeners:M}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",y&&n!==LL&&(g=n.relatedTarget||n.fromElement)&&(vn(g)||g[mt]))break e;if((m||y)&&(y=h.window===h?h:(y=h.ownerDocument)?y.defaultView||y.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=d,g=g?vn(g):null,g!==null&&(L=jn(g),g!==L||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=d),m!==g)){if(M=pI,x="onMouseLeave",k="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(M=fI,x="onPointerLeave",k="onPointerEnter",p="pointer"),L=m==null?y:Bn(m),f=g==null?y:Bn(g),y=new M(x,p+"leave",m,n,h),y.target=L,y.relatedTarget=f,x=null,vn(h)===d&&(M=new M(k,p+"enter",g,n,h),M.target=f,M.relatedTarget=L,x=M),L=x,m&&g)t:{for(M=m,k=g,p=0,f=M;f;f=qn(f))p++;for(f=0,x=k;x;x=qn(x))f++;for(;0<p-f;)M=qn(M),p--;for(;0<f-p;)k=qn(k),f--;for(;p--;){if(M===k||k!==null&&M===k.alternate)break t;M=qn(M),k=qn(k)}M=null}else M=null;m!==null&&PI(u,y,m,M,!1),g!==null&&L!==null&&PI(u,L,g,M,!0)}}e:{if(y=d?Bn(d):window,m=y.nodeName&&y.nodeName.toLowerCase(),m==="select"||m==="input"&&y.type==="file")var w=Kq;else if(gI(y))if(xb)w=Yq;else{w=Xq;var I=$q}else(m=y.nodeName)&&m.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(w=Qq);if(w&&(w=w(e,d))){Mb(u,w,n,h);break e}I&&I(e,y,d),e==="focusout"&&(I=y._wrapperState)&&I.controlled&&y.type==="number"&&vL(y,"number",y.value)}switch(I=d?Bn(d):window,e){case"focusin":(gI(I)||I.contentEditable==="true")&&(Fn=I,zL=d,Ga=null);break;case"focusout":Ga=zL=Fn=null;break;case"mousedown":jL=!0;break;case"contextmenu":case"mouseup":case"dragend":jL=!1,CI(u,n,h);break;case"selectionchange":if(tT)break;case"keydown":case"keyup":CI(u,n,h)}var A;if(EC)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Dn?vb(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(mb&&n.locale!=="ko"&&(Dn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Dn&&(A=fb()):(bt=h,FC="value"in bt?bt.value:bt.textContent,Dn=!0)),I=Vx(d,C),0<I.length&&(C=new kI(C,e,null,n,h),u.push({event:C,listeners:I}),A?C.data=A:(A=gb(n),A!==null&&(C.data=A)))),(A=Nq?_q(e,n):Zq(e,n))&&(d=Vx(d,"onBeforeInput"),0<d.length&&(h=new kI("onBeforeInput","beforeinput",null,n,h),u.push({event:h,listeners:d}),h.data=A))}jb(u,t)})}function xi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vx(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=pi(e,n),o!=null&&a.unshift(xi(e,o,r)),o=pi(e,t),o!=null&&a.push(xi(e,o,r))),e=e.return}return a}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function PI(e,t,n,a,r){for(var o=t._reactName,c=[];n!==null&&n!==a;){var s=n,l=s.alternate,d=s.stateNode;if(l!==null&&l===a)break;s.tag===5&&d!==null&&(s=d,r?(l=pi(n,o),l!=null&&c.unshift(xi(n,l,s))):r||(l=pi(n,o),l!=null&&c.push(xi(n,l,s)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var rT=/\r\n?/g,oT=/\u0000|\uFFFD/g;function AI(e){return(typeof e=="string"?e:""+e).replace(rT,`
`).replace(oT,"")}function ar(e,t,n){if(t=AI(t),AI(e)!==t&&n)throw Error(S(425))}function qx(){}var VL=null,qL=null;function TL(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var HL=typeof setTimeout=="function"?setTimeout:void 0,cT=typeof clearTimeout=="function"?clearTimeout:void 0,bI=typeof Promise=="function"?Promise:void 0,sT=typeof queueMicrotask=="function"?queueMicrotask:typeof bI<"u"?function(e){return bI.resolve(null).then(e).catch(lT)}:HL;function lT(e){setTimeout(function(){throw e})}function Uw(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(a===0){e.removeChild(r),mi(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=r}while(n);mi(t)}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zI(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var La=Math.random().toString(36).slice(2),at="__reactFiber$"+La,wi="__reactProps$"+La,mt="__reactContainer$"+La,DL="__reactEvents$"+La,dT="__reactListeners$"+La,hT="__reactHandles$"+La;function vn(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zI(e);e!==null;){if(n=e[at])return n;e=zI(e)}return t}e=n,n=e.parentNode}return null}function Fi(e){return e=e[at]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function cw(e){return e[wi]||null}var FL=[],En=-1;function _t(e){return{current:e}}function O(e){0>En||(e.current=FL[En],FL[En]=null,En--)}function B(e,t){En++,FL[En]=e.current,e.current=t}var Et={},ve=_t(Et),Se=_t(!1),Sn=Et;function ua(e,t){var n=e.type.contextTypes;if(!n)return Et;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=t[o];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function Ie(e){return e=e.childContextTypes,e!=null}function Tx(){O(Se),O(ve)}function jI(e,t,n){if(ve.current!==Et)throw Error(S(168));B(ve,t),B(Se,n)}function qb(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var r in a)if(!(r in t))throw Error(S(108,$V(e)||"Unknown",r));return G({},n,a)}function Hx(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Et,Sn=ve.current,B(ve,e),B(Se,Se.current),!0}function VI(e,t,n){var a=e.stateNode;if(!a)throw Error(S(169));n?(e=qb(e,t,Sn),a.__reactInternalMemoizedMergedChildContext=e,O(Se),O(ve),B(ve,e)):O(Se),B(Se,n)}var lt=null,sw=!1,Nw=!1;function Tb(e){lt===null?lt=[e]:lt.push(e)}function uT(e){sw=!0,Tb(e)}function Zt(){if(!Nw&&lt!==null){Nw=!0;var e=0,t=R;try{var n=lt;for(R=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}lt=null,sw=!1}catch(r){throw lt!==null&&(lt=lt.slice(e+1)),rb(qC,Zt),r}finally{R=t,Nw=!1}}return null}var On=[],Un=0,Dx=null,Fx=0,Be=[],Ee=0,In=null,dt=1,ht="";function Qt(e,t){On[Un++]=Fx,On[Un++]=Dx,Dx=e,Fx=t}function Hb(e,t,n){Be[Ee++]=dt,Be[Ee++]=ht,Be[Ee++]=In,In=e;var a=dt;e=ht;var r=32-Xe(a)-1;a&=~(1<<r),n+=1;var o=32-Xe(t)+r;if(30<o){var c=r-r%5;o=(a&(1<<c)-1).toString(32),a>>=c,r-=c,dt=1<<32-Xe(t)+r|n<<r|a,ht=o+e}else dt=1<<o|n<<r|a,ht=e}function UC(e){e.return!==null&&(Qt(e,1),Hb(e,1,0))}function NC(e){for(;e===Dx;)Dx=On[--Un],On[Un]=null,Fx=On[--Un],On[Un]=null;for(;e===In;)In=Be[--Ee],Be[Ee]=null,ht=Be[--Ee],Be[Ee]=null,dt=Be[--Ee],Be[Ee]=null}var je=null,ze=null,N=!1,$e=null;function Db(e,t){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qI(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,ze=Tt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:dt,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,ze=null,!0):!1;default:return!1}}function RL(e){return(e.mode&1)!==0&&(e.flags&128)===0}function BL(e){if(N){var t=ze;if(t){var n=t;if(!qI(e,t)){if(RL(e))throw Error(S(418));t=Tt(n.nextSibling);var a=je;t&&qI(e,t)?Db(a,n):(e.flags=e.flags&-4097|2,N=!1,je=e)}}else{if(RL(e))throw Error(S(418));e.flags=e.flags&-4097|2,N=!1,je=e}}}function TI(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function ir(e){if(e!==je)return!1;if(!N)return TI(e),N=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!TL(e.type,e.memoizedProps)),t&&(t=ze)){if(RL(e))throw Fb(),Error(S(418));for(;t;)Db(e,t),t=Tt(t.nextSibling)}if(TI(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Tt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=je?Tt(e.stateNode.nextSibling):null;return!0}function Fb(){for(var e=ze;e;)e=Tt(e.nextSibling)}function ya(){ze=je=null,N=!1}function _C(e){$e===null?$e=[e]:$e.push(e)}var yT=xt.ReactCurrentBatchConfig;function Va(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var a=n.stateNode}if(!a)throw Error(S(147,e));var r=a,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(c){var s=r.refs;c===null?delete s[o]:s[o]=c},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function rr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function HI(e){var t=e._init;return t(e._payload)}function Rb(e){function t(k,p){if(e){var f=k.deletions;f===null?(k.deletions=[p],k.flags|=16):f.push(p)}}function n(k,p){if(!e)return null;for(;p!==null;)t(k,p),p=p.sibling;return null}function a(k,p){for(k=new Map;p!==null;)p.key!==null?k.set(p.key,p):k.set(p.index,p),p=p.sibling;return k}function r(k,p){return k=Rt(k,p),k.index=0,k.sibling=null,k}function o(k,p,f){return k.index=f,e?(f=k.alternate,f!==null?(f=f.index,f<p?(k.flags|=2,p):f):(k.flags|=2,p)):(k.flags|=1048576,p)}function c(k){return e&&k.alternate===null&&(k.flags|=2),k}function s(k,p,f,x){return p===null||p.tag!==6?(p=Xw(f,k.mode,x),p.return=k,p):(p=r(p,f),p.return=k,p)}function l(k,p,f,x){var w=f.type;return w===Hn?h(k,p,f.props.children,x,f.key):p!==null&&(p.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===St&&HI(w)===p.type)?(x=r(p,f.props),x.ref=Va(k,p,f),x.return=k,x):(x=Ir(f.type,f.key,f.props,null,k.mode,x),x.ref=Va(k,p,f),x.return=k,x)}function d(k,p,f,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==f.containerInfo||p.stateNode.implementation!==f.implementation?(p=Qw(f,k.mode,x),p.return=k,p):(p=r(p,f.children||[]),p.return=k,p)}function h(k,p,f,x,w){return p===null||p.tag!==7?(p=Ln(f,k.mode,x,w),p.return=k,p):(p=r(p,f),p.return=k,p)}function u(k,p,f){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Xw(""+p,k.mode,f),p.return=k,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ki:return f=Ir(p.type,p.key,p.props,null,k.mode,f),f.ref=Va(k,null,p),f.return=k,f;case Tn:return p=Qw(p,k.mode,f),p.return=k,p;case St:var x=p._init;return u(k,x(p._payload),f)}if(Fa(p)||Pa(p))return p=Ln(p,k.mode,f,null),p.return=k,p;rr(k,p)}return null}function y(k,p,f,x){var w=p!==null?p.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return w!==null?null:s(k,p,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ki:return f.key===w?l(k,p,f,x):null;case Tn:return f.key===w?d(k,p,f,x):null;case St:return w=f._init,y(k,p,w(f._payload),x)}if(Fa(f)||Pa(f))return w!==null?null:h(k,p,f,x,null);rr(k,f)}return null}function m(k,p,f,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return k=k.get(f)||null,s(p,k,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ki:return k=k.get(x.key===null?f:x.key)||null,l(p,k,x,w);case Tn:return k=k.get(x.key===null?f:x.key)||null,d(p,k,x,w);case St:var I=x._init;return m(k,p,f,I(x._payload),w)}if(Fa(x)||Pa(x))return k=k.get(f)||null,h(p,k,x,w,null);rr(p,x)}return null}function g(k,p,f,x){for(var w=null,I=null,A=p,C=p=0,H=null;A!==null&&C<f.length;C++){A.index>C?(H=A,A=null):H=A.sibling;var V=y(k,A,f[C],x);if(V===null){A===null&&(A=H);break}e&&A&&V.alternate===null&&t(k,A),p=o(V,p,C),I===null?w=V:I.sibling=V,I=V,A=H}if(C===f.length)return n(k,A),N&&Qt(k,C),w;if(A===null){for(;C<f.length;C++)A=u(k,f[C],x),A!==null&&(p=o(A,p,C),I===null?w=A:I.sibling=A,I=A);return N&&Qt(k,C),w}for(A=a(k,A);C<f.length;C++)H=m(A,k,C,f[C],x),H!==null&&(e&&H.alternate!==null&&A.delete(H.key===null?C:H.key),p=o(H,p,C),I===null?w=H:I.sibling=H,I=H);return e&&A.forEach(function(ie){return t(k,ie)}),N&&Qt(k,C),w}function M(k,p,f,x){var w=Pa(f);if(typeof w!="function")throw Error(S(150));if(f=w.call(f),f==null)throw Error(S(151));for(var I=w=null,A=p,C=p=0,H=null,V=f.next();A!==null&&!V.done;C++,V=f.next()){A.index>C?(H=A,A=null):H=A.sibling;var ie=y(k,A,V.value,x);if(ie===null){A===null&&(A=H);break}e&&A&&ie.alternate===null&&t(k,A),p=o(ie,p,C),I===null?w=ie:I.sibling=ie,I=ie,A=H}if(V.done)return n(k,A),N&&Qt(k,C),w;if(A===null){for(;!V.done;C++,V=f.next())V=u(k,V.value,x),V!==null&&(p=o(V,p,C),I===null?w=V:I.sibling=V,I=V);return N&&Qt(k,C),w}for(A=a(k,A);!V.done;C++,V=f.next())V=m(A,k,C,V.value,x),V!==null&&(e&&V.alternate!==null&&A.delete(V.key===null?C:V.key),p=o(V,p,C),I===null?w=V:I.sibling=V,I=V);return e&&A.forEach(function(wt){return t(k,wt)}),N&&Qt(k,C),w}function L(k,p,f,x){if(typeof f=="object"&&f!==null&&f.type===Hn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Ki:e:{for(var w=f.key,I=p;I!==null;){if(I.key===w){if(w=f.type,w===Hn){if(I.tag===7){n(k,I.sibling),p=r(I,f.props.children),p.return=k,k=p;break e}}else if(I.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===St&&HI(w)===I.type){n(k,I.sibling),p=r(I,f.props),p.ref=Va(k,I,f),p.return=k,k=p;break e}n(k,I);break}else t(k,I);I=I.sibling}f.type===Hn?(p=Ln(f.props.children,k.mode,x,f.key),p.return=k,k=p):(x=Ir(f.type,f.key,f.props,null,k.mode,x),x.ref=Va(k,p,f),x.return=k,k=x)}return c(k);case Tn:e:{for(I=f.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===f.containerInfo&&p.stateNode.implementation===f.implementation){n(k,p.sibling),p=r(p,f.children||[]),p.return=k,k=p;break e}else{n(k,p);break}else t(k,p);p=p.sibling}p=Qw(f,k.mode,x),p.return=k,k=p}return c(k);case St:return I=f._init,L(k,p,I(f._payload),x)}if(Fa(f))return g(k,p,f,x);if(Pa(f))return M(k,p,f,x);rr(k,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,p!==null&&p.tag===6?(n(k,p.sibling),p=r(p,f),p.return=k,k=p):(n(k,p),p=Xw(f,k.mode,x),p.return=k,k=p),c(k)):n(k,p)}return L}var pa=Rb(!0),Bb=Rb(!1),Rx=_t(null),Bx=null,Nn=null,ZC=null;function WC(){ZC=Nn=Bx=null}function GC(e){var t=Rx.current;O(Rx),e._currentValue=t}function EL(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function ta(e,t){Bx=e,ZC=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ne(e){var t=e._currentValue;if(ZC!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(Bx===null)throw Error(S(308));Nn=e,Bx.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var gn=null;function KC(e){gn===null?gn=[e]:gn.push(e)}function Eb(e,t,n,a){var r=t.interleaved;return r===null?(n.next=n,KC(t)):(n.next=r.next,r.next=n),t.interleaved=n,vt(e,a)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function $C(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ob(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ht(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,F&2){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,vt(e,n)}return r=a.interleaved,r===null?(t.next=t,KC(a)):(t.next=r.next,r.next=t),a.interleaved=t,vt(e,n)}function Mr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,TC(e,n)}}function DI(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=c:o=o.next=c,n=n.next}while(n!==null);o===null?r=o=t:o=o.next=t}else r=o=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ex(e,t,n,a){var r=e.updateQueue;It=!1;var o=r.firstBaseUpdate,c=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,d=l.next;l.next=null,c===null?o=d:c.next=d,c=l;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==c&&(s===null?h.firstBaseUpdate=d:s.next=d,h.lastBaseUpdate=l))}if(o!==null){var u=r.baseState;c=0,h=d=l=null,s=o;do{var y=s.lane,m=s.eventTime;if((a&y)===y){h!==null&&(h=h.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,M=s;switch(y=t,m=n,M.tag){case 1:if(g=M.payload,typeof g=="function"){u=g.call(m,u,y);break e}u=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=M.payload,y=typeof g=="function"?g.call(m,u,y):g,y==null)break e;u=G({},u,y);break e;case 2:It=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=r.effects,y===null?r.effects=[s]:y.push(s))}else m={eventTime:m,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(d=h=m,l=u):h=h.next=m,c|=y;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;y=s,s=y.next,y.next=null,r.lastBaseUpdate=y,r.shared.pending=null}}while(!0);if(h===null&&(l=u),r.baseState=l,r.firstBaseUpdate=d,r.lastBaseUpdate=h,t=r.shared.interleaved,t!==null){r=t;do c|=r.lane,r=r.next;while(r!==t)}else o===null&&(r.shared.lanes=0);An|=c,e.lanes=c,e.memoizedState=u}}function FI(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],r=a.callback;if(r!==null){if(a.callback=null,a=n,typeof r!="function")throw Error(S(191,r));r.call(a)}}}var Ri={},rt=_t(Ri),Li=_t(Ri),Ci=_t(Ri);function Mn(e){if(e===Ri)throw Error(S(174));return e}function XC(e,t){switch(B(Ci,t),B(Li,e),B(rt,Ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ML(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ML(t,e)}O(rt),B(rt,t)}function ka(){O(rt),O(Li),O(Ci)}function Ub(e){Mn(Ci.current);var t=Mn(rt.current),n=ML(t,e.type);t!==n&&(B(Li,e),B(rt,n))}function QC(e){Li.current===e&&(O(rt),O(Li))}var _=_t(0);function Ox(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _w=[];function YC(){for(var e=0;e<_w.length;e++)_w[e]._workInProgressVersionPrimary=null;_w.length=0}var xr=xt.ReactCurrentDispatcher,Zw=xt.ReactCurrentBatchConfig,Pn=0,W=null,ne=null,oe=null,Ux=!1,Ka=!1,Si=0,pT=0;function ye(){throw Error(S(321))}function JC(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function eS(e,t,n,a,r,o){if(Pn=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xr.current=e===null||e.memoizedState===null?vT:gT,e=n(a,r),Ka){o=0;do{if(Ka=!1,Si=0,25<=o)throw Error(S(301));o+=1,oe=ne=null,t.updateQueue=null,xr.current=MT,e=n(a,r)}while(Ka)}if(xr.current=Nx,t=ne!==null&&ne.next!==null,Pn=0,oe=ne=W=null,Ux=!1,t)throw Error(S(300));return e}function tS(){var e=Si!==0;return Si=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?W.memoizedState=oe=e:oe=oe.next=e,oe}function _e(){if(ne===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=oe===null?W.memoizedState:oe.next;if(t!==null)oe=t,ne=e;else{if(e===null)throw Error(S(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},oe===null?W.memoizedState=oe=e:oe=oe.next=e}return oe}function Ii(e,t){return typeof t=="function"?t(e):t}function Ww(e){var t=_e(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var a=ne,r=a.baseQueue,o=n.pending;if(o!==null){if(r!==null){var c=r.next;r.next=o.next,o.next=c}a.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,a=a.baseState;var s=c=null,l=null,d=o;do{var h=d.lane;if((Pn&h)===h)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),a=d.hasEagerState?d.eagerState:e(a,d.action);else{var u={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(s=l=u,c=a):l=l.next=u,W.lanes|=h,An|=h}d=d.next}while(d!==null&&d!==o);l===null?c=a:l.next=s,Ye(a,t.memoizedState)||(Ce=!0),t.memoizedState=a,t.baseState=c,t.baseQueue=l,n.lastRenderedState=a}if(e=n.interleaved,e!==null){r=e;do o=r.lane,W.lanes|=o,An|=o,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gw(e){var t=_e(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,o=t.memoizedState;if(r!==null){n.pending=null;var c=r=r.next;do o=e(o,c.action),c=c.next;while(c!==r);Ye(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,a]}function Nb(){}function _b(e,t){var n=W,a=_e(),r=t(),o=!Ye(a.memoizedState,r);if(o&&(a.memoizedState=r,Ce=!0),a=a.queue,nS(Gb.bind(null,n,a,e),[e]),a.getSnapshot!==t||o||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,Pi(9,Wb.bind(null,n,a,r,t),void 0,null),ce===null)throw Error(S(349));Pn&30||Zb(n,t,r)}return r}function Zb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wb(e,t,n,a){t.value=n,t.getSnapshot=a,Kb(t)&&$b(e)}function Gb(e,t,n){return n(function(){Kb(t)&&$b(e)})}function Kb(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function $b(e){var t=vt(e,1);t!==null&&Qe(t,e,1,-1)}function RI(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},t.queue=e,e=e.dispatch=mT.bind(null,W,e),[t.memoizedState,e]}function Pi(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Xb(){return _e().memoizedState}function wr(e,t,n,a){var r=nt();W.flags|=e,r.memoizedState=Pi(1|t,n,void 0,a===void 0?null:a)}function lw(e,t,n,a){var r=_e();a=a===void 0?null:a;var o=void 0;if(ne!==null){var c=ne.memoizedState;if(o=c.destroy,a!==null&&JC(a,c.deps)){r.memoizedState=Pi(t,n,o,a);return}}W.flags|=e,r.memoizedState=Pi(1|t,n,o,a)}function BI(e,t){return wr(8390656,8,e,t)}function nS(e,t){return lw(2048,8,e,t)}function Qb(e,t){return lw(4,2,e,t)}function Yb(e,t){return lw(4,4,e,t)}function Jb(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ez(e,t,n){return n=n!=null?n.concat([e]):null,lw(4,4,Jb.bind(null,t,e),n)}function aS(){}function tz(e,t){var n=_e();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&JC(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function nz(e,t){var n=_e();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&JC(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function az(e,t,n){return Pn&21?(Ye(n,t)||(n=sb(),W.lanes|=n,An|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function kT(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var a=Zw.transition;Zw.transition={};try{e(!1),t()}finally{R=n,Zw.transition=a}}function iz(){return _e().memoizedState}function fT(e,t,n){var a=Ft(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},rz(e))oz(t,n);else if(n=Eb(e,t,n,a),n!==null){var r=Me();Qe(n,e,a,r),cz(n,t,a)}}function mT(e,t,n){var a=Ft(e),r={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(rz(e))oz(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var c=t.lastRenderedState,s=o(c,n);if(r.hasEagerState=!0,r.eagerState=s,Ye(s,c)){var l=t.interleaved;l===null?(r.next=r,KC(t)):(r.next=l.next,l.next=r),t.interleaved=r;return}}catch{}finally{}n=Eb(e,t,r,a),n!==null&&(r=Me(),Qe(n,e,a,r),cz(n,t,a))}}function rz(e){var t=e.alternate;return e===W||t!==null&&t===W}function oz(e,t){Ka=Ux=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cz(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,TC(e,n)}}var Nx={readContext:Ne,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},vT={readContext:Ne,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:BI,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wr(4194308,4,Jb.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wr(4194308,4,e,t)},useInsertionEffect:function(e,t){return wr(4,2,e,t)},useMemo:function(e,t){var n=nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=nt();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=fT.bind(null,W,e),[a.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:RI,useDebugValue:aS,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=RI(!1),t=e[0];return e=kT.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=W,r=nt();if(N){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ce===null)throw Error(S(349));Pn&30||Zb(a,t,n)}r.memoizedState=n;var o={value:n,getSnapshot:t};return r.queue=o,BI(Gb.bind(null,a,o,e),[e]),a.flags|=2048,Pi(9,Wb.bind(null,a,o,n,t),void 0,null),n},useId:function(){var e=nt(),t=ce.identifierPrefix;if(N){var n=ht,a=dt;n=(a&~(1<<32-Xe(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=Si++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pT++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gT={readContext:Ne,useCallback:tz,useContext:Ne,useEffect:nS,useImperativeHandle:ez,useInsertionEffect:Qb,useLayoutEffect:Yb,useMemo:nz,useReducer:Ww,useRef:Xb,useState:function(){return Ww(Ii)},useDebugValue:aS,useDeferredValue:function(e){var t=_e();return az(t,ne.memoizedState,e)},useTransition:function(){var e=Ww(Ii)[0],t=_e().memoizedState;return[e,t]},useMutableSource:Nb,useSyncExternalStore:_b,useId:iz,unstable_isNewReconciler:!1},MT={readContext:Ne,useCallback:tz,useContext:Ne,useEffect:nS,useImperativeHandle:ez,useInsertionEffect:Qb,useLayoutEffect:Yb,useMemo:nz,useReducer:Gw,useRef:Xb,useState:function(){return Gw(Ii)},useDebugValue:aS,useDeferredValue:function(e){var t=_e();return ne===null?t.memoizedState=e:az(t,ne.memoizedState,e)},useTransition:function(){var e=Gw(Ii)[0],t=_e().memoizedState;return[e,t]},useMutableSource:Nb,useSyncExternalStore:_b,useId:iz,unstable_isNewReconciler:!1};function Ge(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function OL(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dw={isMounted:function(e){return(e=e._reactInternals)?jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Me(),r=Ft(e),o=ut(a,r);o.payload=t,n!=null&&(o.callback=n),t=Ht(e,o,r),t!==null&&(Qe(t,e,r,a),Mr(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Me(),r=Ft(e),o=ut(a,r);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ht(e,o,r),t!==null&&(Qe(t,e,r,a),Mr(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),a=Ft(e),r=ut(n,a);r.tag=2,t!=null&&(r.callback=t),t=Ht(e,r,a),t!==null&&(Qe(t,e,a,n),Mr(t,e,a))}};function EI(e,t,n,a,r,o,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,c):t.prototype&&t.prototype.isPureReactComponent?!gi(n,a)||!gi(r,o):!0}function sz(e,t,n){var a=!1,r=Et,o=t.contextType;return typeof o=="object"&&o!==null?o=Ne(o):(r=Ie(t)?Sn:ve.current,a=t.contextTypes,o=(a=a!=null)?ua(e,r):Et),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dw,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),t}function OI(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&dw.enqueueReplaceState(t,t.state,null)}function UL(e,t,n,a){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},$C(e);var o=t.contextType;typeof o=="object"&&o!==null?r.context=Ne(o):(o=Ie(t)?Sn:ve.current,r.context=ua(e,o)),r.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(OL(e,t,o,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&dw.enqueueReplaceState(r,r.state,null),Ex(e,n,r,a),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function fa(e,t){try{var n="",a=t;do n+=KV(a),a=a.return;while(a);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:r,digest:null}}function Kw(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function NL(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xT=typeof WeakMap=="function"?WeakMap:Map;function lz(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){Zx||(Zx=!0,JL=a),NL(e,t)},n}function dz(e,t,n){n=ut(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var r=t.value;n.payload=function(){return a(r)},n.callback=function(){NL(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){NL(e,t),typeof a!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}function UI(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new xT;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(r.add(n),e=HT.bind(null,e,t,n),t.then(e,e))}function NI(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _I(e,t,n,a,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Ht(n,t,1))),n.lanes|=1),e)}var wT=xt.ReactCurrentOwner,Ce=!1;function ge(e,t,n,a){t.child=e===null?Bb(t,null,n,a):pa(t,e.child,n,a)}function ZI(e,t,n,a,r){n=n.render;var o=t.ref;return ta(t,r),a=eS(e,t,n,a,o,r),n=tS(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,gt(e,t,r)):(N&&n&&UC(t),t.flags|=1,ge(e,t,a,r),t.child)}function WI(e,t,n,a,r){if(e===null){var o=n.type;return typeof o=="function"&&!hS(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,hz(e,t,o,a,r)):(e=Ir(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&r)){var c=o.memoizedProps;if(n=n.compare,n=n!==null?n:gi,n(c,a)&&e.ref===t.ref)return gt(e,t,r)}return t.flags|=1,e=Rt(o,a),e.ref=t.ref,e.return=t,t.child=e}function hz(e,t,n,a,r){if(e!==null){var o=e.memoizedProps;if(gi(o,a)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=a=o,(e.lanes&r)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,gt(e,t,r)}return _L(e,t,n,a,r)}function uz(e,t,n){var a=t.pendingProps,r=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Zn,be),be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Zn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=o!==null?o.baseLanes:n,B(Zn,be),be|=a}else o!==null?(a=o.baseLanes|n,t.memoizedState=null):a=n,B(Zn,be),be|=a;return ge(e,t,r,n),t.child}function yz(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _L(e,t,n,a,r){var o=Ie(n)?Sn:ve.current;return o=ua(t,o),ta(t,r),n=eS(e,t,n,a,o,r),a=tS(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,gt(e,t,r)):(N&&a&&UC(t),t.flags|=1,ge(e,t,n,r),t.child)}function GI(e,t,n,a,r){if(Ie(n)){var o=!0;Hx(t)}else o=!1;if(ta(t,r),t.stateNode===null)Lr(e,t),sz(t,n,a),UL(t,n,a,r),a=!0;else if(e===null){var c=t.stateNode,s=t.memoizedProps;c.props=s;var l=c.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ne(d):(d=Ie(n)?Sn:ve.current,d=ua(t,d));var h=n.getDerivedStateFromProps,u=typeof h=="function"||typeof c.getSnapshotBeforeUpdate=="function";u||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(s!==a||l!==d)&&OI(t,c,a,d),It=!1;var y=t.memoizedState;c.state=y,Ex(t,a,c,r),l=t.memoizedState,s!==a||y!==l||Se.current||It?(typeof h=="function"&&(OL(t,n,h,a),l=t.memoizedState),(s=It||EI(t,n,s,a,y,l,d))?(u||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=l),c.props=a,c.state=l,c.context=d,a=s):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{c=t.stateNode,Ob(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Ge(t.type,s),c.props=d,u=t.pendingProps,y=c.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ne(l):(l=Ie(n)?Sn:ve.current,l=ua(t,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(s!==u||y!==l)&&OI(t,c,a,l),It=!1,y=t.memoizedState,c.state=y,Ex(t,a,c,r);var g=t.memoizedState;s!==u||y!==g||Se.current||It?(typeof m=="function"&&(OL(t,n,m,a),g=t.memoizedState),(d=It||EI(t,n,d,a,y,g,l)||!1)?(h||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,g,l),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,g,l)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=g),c.props=a,c.state=g,c.context=l,a=d):(typeof c.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),a=!1)}return ZL(e,t,n,a,o,r)}function ZL(e,t,n,a,r,o){yz(e,t);var c=(t.flags&128)!==0;if(!a&&!c)return r&&VI(t,n,!1),gt(e,t,o);a=t.stateNode,wT.current=t;var s=c&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&c?(t.child=pa(t,e.child,null,o),t.child=pa(t,null,s,o)):ge(e,t,s,o),t.memoizedState=a.state,r&&VI(t,n,!0),t.child}function pz(e){var t=e.stateNode;t.pendingContext?jI(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jI(e,t.context,!1),XC(e,t.containerInfo)}function KI(e,t,n,a,r){return ya(),_C(r),t.flags|=256,ge(e,t,n,a),t.child}var WL={dehydrated:null,treeContext:null,retryLane:0};function GL(e){return{baseLanes:e,cachePool:null,transitions:null}}function kz(e,t,n){var a=t.pendingProps,r=_.current,o=!1,c=(t.flags&128)!==0,s;if((s=c)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),B(_,r&1),e===null)return BL(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(c=a.children,e=a.fallback,o?(a=t.mode,o=t.child,c={mode:"hidden",children:c},!(a&1)&&o!==null?(o.childLanes=0,o.pendingProps=c):o=yw(c,a,0,null),e=Ln(e,a,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=GL(n),t.memoizedState=WL,e):iS(t,c));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return LT(e,t,c,a,s,r,n);if(o){o=a.fallback,c=t.mode,r=e.child,s=r.sibling;var l={mode:"hidden",children:a.children};return!(c&1)&&t.child!==r?(a=t.child,a.childLanes=0,a.pendingProps=l,t.deletions=null):(a=Rt(r,l),a.subtreeFlags=r.subtreeFlags&14680064),s!==null?o=Rt(s,o):(o=Ln(o,c,n,null),o.flags|=2),o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,c=e.child.memoizedState,c=c===null?GL(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},o.memoizedState=c,o.childLanes=e.childLanes&~n,t.memoizedState=WL,a}return o=e.child,e=o.sibling,a=Rt(o,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function iS(e,t){return t=yw({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function or(e,t,n,a){return a!==null&&_C(a),pa(t,e.child,null,n),e=iS(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function LT(e,t,n,a,r,o,c){if(n)return t.flags&256?(t.flags&=-257,a=Kw(Error(S(422))),or(e,t,c,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=a.fallback,r=t.mode,a=yw({mode:"visible",children:a.children},r,0,null),o=Ln(o,r,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,t.mode&1&&pa(t,e.child,null,c),t.child.memoizedState=GL(c),t.memoizedState=WL,o);if(!(t.mode&1))return or(e,t,c,null);if(r.data==="$!"){if(a=r.nextSibling&&r.nextSibling.dataset,a)var s=a.dgst;return a=s,o=Error(S(419)),a=Kw(o,a,void 0),or(e,t,c,a)}if(s=(c&e.childLanes)!==0,Ce||s){if(a=ce,a!==null){switch(c&-c){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(a.suspendedLanes|c)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,vt(e,r),Qe(a,e,r,-1))}return dS(),a=Kw(Error(S(421))),or(e,t,c,a)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=DT.bind(null,e),r._reactRetry=t,null):(e=o.treeContext,ze=Tt(r.nextSibling),je=t,N=!0,$e=null,e!==null&&(Be[Ee++]=dt,Be[Ee++]=ht,Be[Ee++]=In,dt=e.id,ht=e.overflow,In=t),t=iS(t,a.children),t.flags|=4096,t)}function $I(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),EL(e.return,t,n)}function $w(e,t,n,a,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=r)}function fz(e,t,n){var a=t.pendingProps,r=a.revealOrder,o=a.tail;if(ge(e,t,a.children,n),a=_.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$I(e,n,t);else if(e.tag===19)$I(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(B(_,a),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Ox(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),$w(t,!1,r,n,o);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Ox(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}$w(t,!0,n,null,o);break;case"together":$w(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Rt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function CT(e,t,n){switch(t.tag){case 3:pz(t),ya();break;case 5:Ub(t);break;case 1:Ie(t.type)&&Hx(t);break;case 4:XC(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,r=t.memoizedProps.value;B(Rx,a._currentValue),a._currentValue=r;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(B(_,_.current&1),t.flags|=128,null):n&t.child.childLanes?kz(e,t,n):(B(_,_.current&1),e=gt(e,t,n),e!==null?e.sibling:null);B(_,_.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return fz(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),B(_,_.current),a)break;return null;case 22:case 23:return t.lanes=0,uz(e,t,n)}return gt(e,t,n)}var mz,KL,vz,gz;mz=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};KL=function(){};vz=function(e,t,n,a){var r=e.memoizedProps;if(r!==a){e=t.stateNode,Mn(rt.current);var o=null;switch(n){case"input":r=fL(e,r),a=fL(e,a),o=[];break;case"select":r=G({},r,{value:void 0}),a=G({},a,{value:void 0}),o=[];break;case"textarea":r=gL(e,r),a=gL(e,a),o=[];break;default:typeof r.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=qx)}xL(n,a);var c;n=null;for(d in r)if(!a.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var s=r[d];for(c in s)s.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ui.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in a){var l=a[d];if(s=r!=null?r[d]:void 0,a.hasOwnProperty(d)&&l!==s&&(l!=null||s!=null))if(d==="style")if(s){for(c in s)!s.hasOwnProperty(c)||l&&l.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in l)l.hasOwnProperty(c)&&s[c]!==l[c]&&(n||(n={}),n[c]=l[c])}else n||(o||(o=[]),o.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ui.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&E("scroll",e),o||s===l||(o=[])):(o=o||[]).push(d,l))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};gz=function(e,t,n,a){n!==a&&(t.flags|=4)};function qa(e,t){if(!N)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&14680064,a|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function ST(e,t,n){var a=t.pendingProps;switch(NC(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ie(t.type)&&Tx(),pe(t),null;case 3:return a=t.stateNode,ka(),O(Se),O(ve),YC(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ir(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(nC($e),$e=null))),KL(e,t),pe(t),null;case 5:QC(t);var r=Mn(Ci.current);if(n=t.type,e!==null&&t.stateNode!=null)vz(e,t,n,a,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(S(166));return pe(t),null}if(e=Mn(rt.current),ir(t)){a=t.stateNode,n=t.type;var o=t.memoizedProps;switch(a[at]=t,a[wi]=o,e=(t.mode&1)!==0,n){case"dialog":E("cancel",a),E("close",a);break;case"iframe":case"object":case"embed":E("load",a);break;case"video":case"audio":for(r=0;r<Ba.length;r++)E(Ba[r],a);break;case"source":E("error",a);break;case"img":case"image":case"link":E("error",a),E("load",a);break;case"details":E("toggle",a);break;case"input":iI(a,o),E("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!o.multiple},E("invalid",a);break;case"textarea":oI(a,o),E("invalid",a)}xL(n,o),r=null;for(var c in o)if(o.hasOwnProperty(c)){var s=o[c];c==="children"?typeof s=="string"?a.textContent!==s&&(o.suppressHydrationWarning!==!0&&ar(a.textContent,s,e),r=["children",s]):typeof s=="number"&&a.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ar(a.textContent,s,e),r=["children",""+s]):ui.hasOwnProperty(c)&&s!=null&&c==="onScroll"&&E("scroll",a)}switch(n){case"input":$i(a),rI(a,o,!0);break;case"textarea":$i(a),cI(a);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(a.onclick=qx)}a=r,t.updateQueue=a,a!==null&&(t.flags|=4)}else{c=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=GA(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=c.createElement(n,{is:a.is}):(e=c.createElement(n),n==="select"&&(c=e,a.multiple?c.multiple=!0:a.size&&(c.size=a.size))):e=c.createElementNS(e,n),e[at]=t,e[wi]=a,mz(e,t,!1,!1),t.stateNode=e;e:{switch(c=wL(n,a),n){case"dialog":E("cancel",e),E("close",e),r=a;break;case"iframe":case"object":case"embed":E("load",e),r=a;break;case"video":case"audio":for(r=0;r<Ba.length;r++)E(Ba[r],e);r=a;break;case"source":E("error",e),r=a;break;case"img":case"image":case"link":E("error",e),E("load",e),r=a;break;case"details":E("toggle",e),r=a;break;case"input":iI(e,a),r=fL(e,a),E("invalid",e);break;case"option":r=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},r=G({},a,{value:void 0}),E("invalid",e);break;case"textarea":oI(e,a),r=gL(e,a),E("invalid",e);break;default:r=a}xL(n,r),s=r;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?XA(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&KA(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&yi(e,l):typeof l=="number"&&yi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ui.hasOwnProperty(o)?l!=null&&o==="onScroll"&&E("scroll",e):l!=null&&AC(e,o,l,c))}switch(n){case"input":$i(e),rI(e,a,!1);break;case"textarea":$i(e),cI(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Bt(a.value));break;case"select":e.multiple=!!a.multiple,o=a.value,o!=null?Qn(e,!!a.multiple,o,!1):a.defaultValue!=null&&Qn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=qx)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)gz(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(S(166));if(n=Mn(Ci.current),Mn(rt.current),ir(t)){if(a=t.stateNode,n=t.memoizedProps,a[at]=t,(o=a.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:ar(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ar(a.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[at]=t,t.stateNode=a}return pe(t),null;case 13:if(O(_),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(N&&ze!==null&&t.mode&1&&!(t.flags&128))Fb(),ya(),t.flags|=98560,o=!1;else if(o=ir(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[at]=t}else ya(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),o=!1}else $e!==null&&(nC($e),$e=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||_.current&1?ae===0&&(ae=3):dS())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return ka(),KL(e,t),e===null&&Mi(t.stateNode.containerInfo),pe(t),null;case 10:return GC(t.type._context),pe(t),null;case 17:return Ie(t.type)&&Tx(),pe(t),null;case 19:if(O(_),o=t.memoizedState,o===null)return pe(t),null;if(a=(t.flags&128)!==0,c=o.rendering,c===null)if(a)qa(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=Ox(e),c!==null){for(t.flags|=128,qa(o,!1),a=c.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)o=n,e=a,o.flags&=14680066,c=o.alternate,c===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=c.childLanes,o.lanes=c.lanes,o.child=c.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=c.memoizedProps,o.memoizedState=c.memoizedState,o.updateQueue=c.updateQueue,o.type=c.type,e=c.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(_,_.current&1|2),t.child}e=e.sibling}o.tail!==null&&Y()>ma&&(t.flags|=128,a=!0,qa(o,!1),t.lanes=4194304)}else{if(!a)if(e=Ox(c),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qa(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!N)return pe(t),null}else 2*Y()-o.renderingStartTime>ma&&n!==1073741824&&(t.flags|=128,a=!0,qa(o,!1),t.lanes=4194304);o.isBackwards?(c.sibling=t.child,t.child=c):(n=o.last,n!==null?n.sibling=c:t.child=c,o.last=c)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Y(),t.sibling=null,n=_.current,B(_,a?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return lS(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?be&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function IT(e,t){switch(NC(t),t.tag){case 1:return Ie(t.type)&&Tx(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ka(),O(Se),O(ve),YC(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return QC(t),null;case 13:if(O(_),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(_),null;case 4:return ka(),null;case 10:return GC(t.type._context),null;case 22:case 23:return lS(),null;case 24:return null;default:return null}}var cr=!1,fe=!1,PT=typeof WeakSet=="function"?WeakSet:Set,z=null;function _n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){$(e,t,a)}else n.current=null}function $L(e,t,n){try{n()}catch(a){$(e,t,a)}}var XI=!1;function AT(e,t){if(VL=zx,e=Cb(),OC(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var c=0,s=-1,l=-1,d=0,h=0,u=e,y=null;t:for(;;){for(var m;u!==n||r!==0&&u.nodeType!==3||(s=c+r),u!==o||a!==0&&u.nodeType!==3||(l=c+a),u.nodeType===3&&(c+=u.nodeValue.length),(m=u.firstChild)!==null;)y=u,u=m;for(;;){if(u===e)break t;if(y===n&&++d===r&&(s=c),y===o&&++h===a&&(l=c),(m=u.nextSibling)!==null)break;u=y,y=u.parentNode}u=m}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qL={focusedElem:e,selectionRange:n},zx=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var M=g.memoizedProps,L=g.memoizedState,k=t.stateNode,p=k.getSnapshotBeforeUpdate(t.elementType===t.type?M:Ge(t.type,M),L);k.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){$(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return g=XI,XI=!1,g}function $a(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&e)===e){var o=r.destroy;r.destroy=void 0,o!==void 0&&$L(t,n,o)}r=r.next}while(r!==a)}}function hw(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function XL(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mz(e){var t=e.alternate;t!==null&&(e.alternate=null,Mz(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[wi],delete t[DL],delete t[dT],delete t[hT])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xz(e){return e.tag===5||e.tag===3||e.tag===4}function QI(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xz(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function QL(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qx));else if(a!==4&&(e=e.child,e!==null))for(QL(e,t,n),e=e.sibling;e!==null;)QL(e,t,n),e=e.sibling}function YL(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(YL(e,t,n),e=e.sibling;e!==null;)YL(e,t,n),e=e.sibling}var se=null,Ke=!1;function Lt(e,t,n){for(n=n.child;n!==null;)wz(e,t,n),n=n.sibling}function wz(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(aw,n)}catch{}switch(n.tag){case 5:fe||_n(n,t);case 6:var a=se,r=Ke;se=null,Lt(e,t,n),se=a,Ke=r,se!==null&&(Ke?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Ke?(e=se,n=n.stateNode,e.nodeType===8?Uw(e.parentNode,n):e.nodeType===1&&Uw(e,n),mi(e)):Uw(se,n.stateNode));break;case 4:a=se,r=Ke,se=n.stateNode.containerInfo,Ke=!0,Lt(e,t,n),se=a,Ke=r;break;case 0:case 11:case 14:case 15:if(!fe&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){r=a=a.next;do{var o=r,c=o.destroy;o=o.tag,c!==void 0&&(o&2||o&4)&&$L(n,t,c),r=r.next}while(r!==a)}Lt(e,t,n);break;case 1:if(!fe&&(_n(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(s){$(n,t,s)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(fe=(a=fe)||n.memoizedState!==null,Lt(e,t,n),fe=a):Lt(e,t,n);break;default:Lt(e,t,n)}}function YI(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new PT),t.forEach(function(a){var r=FT.bind(null,e,a);n.has(a)||(n.add(a),a.then(r,r))})}}function Ze(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];try{var o=e,c=t,s=c;e:for(;s!==null;){switch(s.tag){case 5:se=s.stateNode,Ke=!1;break e;case 3:se=s.stateNode.containerInfo,Ke=!0;break e;case 4:se=s.stateNode.containerInfo,Ke=!0;break e}s=s.return}if(se===null)throw Error(S(160));wz(o,c,r),se=null,Ke=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(d){$(r,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lz(t,e),t=t.sibling}function Lz(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),Je(e),a&4){try{$a(3,e,e.return),hw(3,e)}catch(M){$(e,e.return,M)}try{$a(5,e,e.return)}catch(M){$(e,e.return,M)}}break;case 1:Ze(t,e),Je(e),a&512&&n!==null&&_n(n,n.return);break;case 5:if(Ze(t,e),Je(e),a&512&&n!==null&&_n(n,n.return),e.flags&32){var r=e.stateNode;try{yi(r,"")}catch(M){$(e,e.return,M)}}if(a&4&&(r=e.stateNode,r!=null)){var o=e.memoizedProps,c=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&ZA(r,o),wL(s,c);var d=wL(s,o);for(c=0;c<l.length;c+=2){var h=l[c],u=l[c+1];h==="style"?XA(r,u):h==="dangerouslySetInnerHTML"?KA(r,u):h==="children"?yi(r,u):AC(r,h,u,d)}switch(s){case"input":mL(r,o);break;case"textarea":WA(r,o);break;case"select":var y=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Qn(r,!!o.multiple,m,!1):y!==!!o.multiple&&(o.defaultValue!=null?Qn(r,!!o.multiple,o.defaultValue,!0):Qn(r,!!o.multiple,o.multiple?[]:"",!1))}r[wi]=o}catch(M){$(e,e.return,M)}}break;case 6:if(Ze(t,e),Je(e),a&4){if(e.stateNode===null)throw Error(S(162));r=e.stateNode,o=e.memoizedProps;try{r.nodeValue=o}catch(M){$(e,e.return,M)}}break;case 3:if(Ze(t,e),Je(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{mi(t.containerInfo)}catch(M){$(e,e.return,M)}break;case 4:Ze(t,e),Je(e);break;case 13:Ze(t,e),Je(e),r=e.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(cS=Y())),a&4&&YI(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(d=fe)||h,Ze(t,e),fe=d):Ze(t,e),Je(e),a&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(z=e,h=e.child;h!==null;){for(u=z=h;z!==null;){switch(y=z,m=y.child,y.tag){case 0:case 11:case 14:case 15:$a(4,y,y.return);break;case 1:_n(y,y.return);var g=y.stateNode;if(typeof g.componentWillUnmount=="function"){a=y,n=y.return;try{t=a,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(M){$(a,n,M)}}break;case 5:_n(y,y.return);break;case 22:if(y.memoizedState!==null){eP(u);continue}}m!==null?(m.return=y,z=m):eP(u)}h=h.sibling}e:for(h=null,u=e;;){if(u.tag===5){if(h===null){h=u;try{r=u.stateNode,d?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=u.stateNode,l=u.memoizedProps.style,c=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=$A("display",c))}catch(M){$(e,e.return,M)}}}else if(u.tag===6){if(h===null)try{u.stateNode.nodeValue=d?"":u.memoizedProps}catch(M){$(e,e.return,M)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;h===u&&(h=null),u=u.return}h===u&&(h=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Ze(t,e),Je(e),a&4&&YI(e);break;case 21:break;default:Ze(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xz(n)){var a=n;break e}n=n.return}throw Error(S(160))}switch(a.tag){case 5:var r=a.stateNode;a.flags&32&&(yi(r,""),a.flags&=-33);var o=QI(e);YL(e,o,r);break;case 3:case 4:var c=a.stateNode.containerInfo,s=QI(e);QL(e,s,c);break;default:throw Error(S(161))}}catch(l){$(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bT(e,t,n){z=e,Cz(e)}function Cz(e,t,n){for(var a=(e.mode&1)!==0;z!==null;){var r=z,o=r.child;if(r.tag===22&&a){var c=r.memoizedState!==null||cr;if(!c){var s=r.alternate,l=s!==null&&s.memoizedState!==null||fe;s=cr;var d=fe;if(cr=c,(fe=l)&&!d)for(z=r;z!==null;)c=z,l=c.child,c.tag===22&&c.memoizedState!==null?tP(r):l!==null?(l.return=c,z=l):tP(r);for(;o!==null;)z=o,Cz(o),o=o.sibling;z=r,cr=s,fe=d}JI(e)}else r.subtreeFlags&8772&&o!==null?(o.return=r,z=o):JI(e)}}function JI(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||hw(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!fe)if(n===null)a.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:Ge(t.type,n.memoizedProps);a.componentDidUpdate(r,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&FI(t,o,a);break;case 3:var c=t.updateQueue;if(c!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}FI(t,c,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var u=h.dehydrated;u!==null&&mi(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}fe||t.flags&512&&XL(t)}catch(y){$(t,t.return,y)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function eP(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function tP(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hw(4,t)}catch(l){$(t,n,l)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var r=t.return;try{a.componentDidMount()}catch(l){$(t,r,l)}}var o=t.return;try{XL(t)}catch(l){$(t,o,l)}break;case 5:var c=t.return;try{XL(t)}catch(l){$(t,c,l)}}}catch(l){$(t,t.return,l)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var zT=Math.ceil,_x=xt.ReactCurrentDispatcher,rS=xt.ReactCurrentOwner,Ue=xt.ReactCurrentBatchConfig,F=0,ce=null,ee=null,he=0,be=0,Zn=_t(0),ae=0,Ai=null,An=0,uw=0,oS=0,Xa=null,Le=null,cS=0,ma=1/0,st=null,Zx=!1,JL=null,Dt=null,sr=!1,zt=null,Wx=0,Qa=0,eC=null,Cr=-1,Sr=0;function Me(){return F&6?Y():Cr!==-1?Cr:Cr=Y()}function Ft(e){return e.mode&1?F&2&&he!==0?he&-he:yT.transition!==null?(Sr===0&&(Sr=sb()),Sr):(e=R,e!==0||(e=window.event,e=e===void 0?16:kb(e.type)),e):1}function Qe(e,t,n,a){if(50<Qa)throw Qa=0,eC=null,Error(S(185));Hi(e,n,a),(!(F&2)||e!==ce)&&(e===ce&&(!(F&2)&&(uw|=n),ae===4&&At(e,he)),Pe(e,a),n===1&&F===0&&!(t.mode&1)&&(ma=Y()+500,sw&&Zt()))}function Pe(e,t){var n=e.callbackNode;yq(e,t);var a=bx(e,e===ce?he:0);if(a===0)n!==null&&dI(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&dI(n),t===1)e.tag===0?uT(nP.bind(null,e)):Tb(nP.bind(null,e)),sT(function(){!(F&6)&&Zt()}),n=null;else{switch(lb(a)){case 1:n=qC;break;case 4:n=ob;break;case 16:n=Ax;break;case 536870912:n=cb;break;default:n=Ax}n=Vz(n,Sz.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sz(e,t){if(Cr=-1,Sr=0,F&6)throw Error(S(327));var n=e.callbackNode;if(na()&&e.callbackNode!==n)return null;var a=bx(e,e===ce?he:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=Gx(e,a);else{t=a;var r=F;F|=2;var o=Pz();(ce!==e||he!==t)&&(st=null,ma=Y()+500,wn(e,t));do try{qT();break}catch(s){Iz(e,s)}while(!0);WC(),_x.current=o,F=r,ee!==null?t=0:(ce=null,he=0,t=ae)}if(t!==0){if(t===2&&(r=PL(e),r!==0&&(a=r,t=tC(e,r))),t===1)throw n=Ai,wn(e,0),At(e,a),Pe(e,Y()),n;if(t===6)At(e,a);else{if(r=e.current.alternate,!(a&30)&&!jT(r)&&(t=Gx(e,a),t===2&&(o=PL(e),o!==0&&(a=o,t=tC(e,o))),t===1))throw n=Ai,wn(e,0),At(e,a),Pe(e,Y()),n;switch(e.finishedWork=r,e.finishedLanes=a,t){case 0:case 1:throw Error(S(345));case 2:Yt(e,Le,st);break;case 3:if(At(e,a),(a&130023424)===a&&(t=cS+500-Y(),10<t)){if(bx(e,0)!==0)break;if(r=e.suspendedLanes,(r&a)!==a){Me(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=HL(Yt.bind(null,e,Le,st),t);break}Yt(e,Le,st);break;case 4:if(At(e,a),(a&4194240)===a)break;for(t=e.eventTimes,r=-1;0<a;){var c=31-Xe(a);o=1<<c,c=t[c],c>r&&(r=c),a&=~o}if(a=r,a=Y()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*zT(a/1960))-a,10<a){e.timeoutHandle=HL(Yt.bind(null,e,Le,st),a);break}Yt(e,Le,st);break;case 5:Yt(e,Le,st);break;default:throw Error(S(329))}}}return Pe(e,Y()),e.callbackNode===n?Sz.bind(null,e):null}function tC(e,t){var n=Xa;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=Gx(e,t),e!==2&&(t=Le,Le=n,t!==null&&nC(t)),e}function nC(e){Le===null?Le=e:Le.push.apply(Le,e)}function jT(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var r=n[a],o=r.getSnapshot;r=r.value;try{if(!Ye(o(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~oS,t&=~uw,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),a=1<<n;e[n]=-1,t&=~a}}function nP(e){if(F&6)throw Error(S(327));na();var t=bx(e,0);if(!(t&1))return Pe(e,Y()),null;var n=Gx(e,t);if(e.tag!==0&&n===2){var a=PL(e);a!==0&&(t=a,n=tC(e,a))}if(n===1)throw n=Ai,wn(e,0),At(e,t),Pe(e,Y()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yt(e,Le,st),Pe(e,Y()),null}function sS(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(ma=Y()+500,sw&&Zt())}}function bn(e){zt!==null&&zt.tag===0&&!(F&6)&&na();var t=F;F|=1;var n=Ue.transition,a=R;try{if(Ue.transition=null,R=1,e)return e()}finally{R=a,Ue.transition=n,F=t,!(F&6)&&Zt()}}function lS(){be=Zn.current,O(Zn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cT(n)),ee!==null)for(n=ee.return;n!==null;){var a=n;switch(NC(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Tx();break;case 3:ka(),O(Se),O(ve),YC();break;case 5:QC(a);break;case 4:ka();break;case 13:O(_);break;case 19:O(_);break;case 10:GC(a.type._context);break;case 22:case 23:lS()}n=n.return}if(ce=e,ee=e=Rt(e.current,null),he=be=t,ae=0,Ai=null,oS=uw=An=0,Le=Xa=null,gn!==null){for(t=0;t<gn.length;t++)if(n=gn[t],a=n.interleaved,a!==null){n.interleaved=null;var r=a.next,o=n.pending;if(o!==null){var c=o.next;o.next=r,a.next=c}n.pending=a}gn=null}return e}function Iz(e,t){do{var n=ee;try{if(WC(),xr.current=Nx,Ux){for(var a=W.memoizedState;a!==null;){var r=a.queue;r!==null&&(r.pending=null),a=a.next}Ux=!1}if(Pn=0,oe=ne=W=null,Ka=!1,Si=0,rS.current=null,n===null||n.return===null){ae=1,Ai=t,ee=null;break}e:{var o=e,c=n.return,s=n,l=t;if(t=he,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,h=s,u=h.tag;if(!(h.mode&1)&&(u===0||u===11||u===15)){var y=h.alternate;y?(h.updateQueue=y.updateQueue,h.memoizedState=y.memoizedState,h.lanes=y.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=NI(c);if(m!==null){m.flags&=-257,_I(m,c,s,o,t),m.mode&1&&UI(o,d,t),t=m,l=d;var g=t.updateQueue;if(g===null){var M=new Set;M.add(l),t.updateQueue=M}else g.add(l);break e}else{if(!(t&1)){UI(o,d,t),dS();break e}l=Error(S(426))}}else if(N&&s.mode&1){var L=NI(c);if(L!==null){!(L.flags&65536)&&(L.flags|=256),_I(L,c,s,o,t),_C(fa(l,s));break e}}o=l=fa(l,s),ae!==4&&(ae=2),Xa===null?Xa=[o]:Xa.push(o),o=c;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var k=lz(o,l,t);DI(o,k);break e;case 1:s=l;var p=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Dt===null||!Dt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=dz(o,s,t);DI(o,x);break e}}o=o.return}while(o!==null)}bz(n)}catch(w){t=w,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function Pz(){var e=_x.current;return _x.current=Nx,e===null?Nx:e}function dS(){(ae===0||ae===3||ae===2)&&(ae=4),ce===null||!(An&268435455)&&!(uw&268435455)||At(ce,he)}function Gx(e,t){var n=F;F|=2;var a=Pz();(ce!==e||he!==t)&&(st=null,wn(e,t));do try{VT();break}catch(r){Iz(e,r)}while(!0);if(WC(),F=n,_x.current=a,ee!==null)throw Error(S(261));return ce=null,he=0,ae}function VT(){for(;ee!==null;)Az(ee)}function qT(){for(;ee!==null&&!iq();)Az(ee)}function Az(e){var t=jz(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?bz(e):ee=t,rS.current=null}function bz(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=IT(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,ee=null;return}}else if(n=ST(n,t,be),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ae===0&&(ae=5)}function Yt(e,t,n){var a=R,r=Ue.transition;try{Ue.transition=null,R=1,TT(e,t,n,a)}finally{Ue.transition=r,R=a}return null}function TT(e,t,n,a){do na();while(zt!==null);if(F&6)throw Error(S(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(pq(e,o),e===ce&&(ee=ce=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sr||(sr=!0,Vz(Ax,function(){return na(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ue.transition,Ue.transition=null;var c=R;R=1;var s=F;F|=4,rS.current=null,AT(e,n),Lz(n,e),eT(qL),zx=!!VL,qL=VL=null,e.current=n,bT(n),rq(),F=s,R=c,Ue.transition=o}else e.current=n;if(sr&&(sr=!1,zt=e,Wx=r),o=e.pendingLanes,o===0&&(Dt=null),sq(n.stateNode),Pe(e,Y()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],a(r.value,{componentStack:r.stack,digest:r.digest});if(Zx)throw Zx=!1,e=JL,JL=null,e;return Wx&1&&e.tag!==0&&na(),o=e.pendingLanes,o&1?e===eC?Qa++:(Qa=0,eC=e):Qa=0,Zt(),null}function na(){if(zt!==null){var e=lb(Wx),t=Ue.transition,n=R;try{if(Ue.transition=null,R=16>e?16:e,zt===null)var a=!1;else{if(e=zt,zt=null,Wx=0,F&6)throw Error(S(331));var r=F;for(F|=4,z=e.current;z!==null;){var o=z,c=o.child;if(z.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var d=s[l];for(z=d;z!==null;){var h=z;switch(h.tag){case 0:case 11:case 15:$a(8,h,o)}var u=h.child;if(u!==null)u.return=h,z=u;else for(;z!==null;){h=z;var y=h.sibling,m=h.return;if(Mz(h),h===d){z=null;break}if(y!==null){y.return=m,z=y;break}z=m}}}var g=o.alternate;if(g!==null){var M=g.child;if(M!==null){g.child=null;do{var L=M.sibling;M.sibling=null,M=L}while(M!==null)}}z=o}}if(o.subtreeFlags&2064&&c!==null)c.return=o,z=c;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:$a(9,o,o.return)}var k=o.sibling;if(k!==null){k.return=o.return,z=k;break e}z=o.return}}var p=e.current;for(z=p;z!==null;){c=z;var f=c.child;if(c.subtreeFlags&2064&&f!==null)f.return=c,z=f;else e:for(c=p;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:hw(9,s)}}catch(w){$(s,s.return,w)}if(s===c){z=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,z=x;break e}z=s.return}}if(F=r,Zt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(aw,e)}catch{}a=!0}return a}finally{R=n,Ue.transition=t}}return!1}function aP(e,t,n){t=fa(n,t),t=lz(e,t,1),e=Ht(e,t,1),t=Me(),e!==null&&(Hi(e,1,t),Pe(e,t))}function $(e,t,n){if(e.tag===3)aP(e,e,n);else for(;t!==null;){if(t.tag===3){aP(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Dt===null||!Dt.has(a))){e=fa(n,e),e=dz(t,e,1),t=Ht(t,e,1),e=Me(),t!==null&&(Hi(t,1,e),Pe(t,e));break}}t=t.return}}function HT(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(he&n)===n&&(ae===4||ae===3&&(he&130023424)===he&&500>Y()-cS?wn(e,0):oS|=n),Pe(e,t)}function zz(e,t){t===0&&(e.mode&1?(t=Yi,Yi<<=1,!(Yi&130023424)&&(Yi=4194304)):t=1);var n=Me();e=vt(e,t),e!==null&&(Hi(e,t,n),Pe(e,n))}function DT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zz(e,n)}function FT(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(S(314))}a!==null&&a.delete(t),zz(e,n)}var jz;jz=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,CT(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,N&&t.flags&1048576&&Hb(t,Fx,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Lr(e,t),e=t.pendingProps;var r=ua(t,ve.current);ta(t,n),r=eS(null,t,a,e,r,n);var o=tS();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(a)?(o=!0,Hx(t)):o=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,$C(t),r.updater=dw,t.stateNode=r,r._reactInternals=t,UL(t,a,e,n),t=ZL(null,t,a,!0,o,n)):(t.tag=0,N&&o&&UC(t),ge(null,t,r,n),t=t.child),t;case 16:a=t.elementType;e:{switch(Lr(e,t),e=t.pendingProps,r=a._init,a=r(a._payload),t.type=a,r=t.tag=BT(a),e=Ge(a,e),r){case 0:t=_L(null,t,a,e,n);break e;case 1:t=GI(null,t,a,e,n);break e;case 11:t=ZI(null,t,a,e,n);break e;case 14:t=WI(null,t,a,Ge(a.type,e),n);break e}throw Error(S(306,a,""))}return t;case 0:return a=t.type,r=t.pendingProps,r=t.elementType===a?r:Ge(a,r),_L(e,t,a,r,n);case 1:return a=t.type,r=t.pendingProps,r=t.elementType===a?r:Ge(a,r),GI(e,t,a,r,n);case 3:e:{if(pz(t),e===null)throw Error(S(387));a=t.pendingProps,o=t.memoizedState,r=o.element,Ob(e,t),Ex(t,a,null,n);var c=t.memoizedState;if(a=c.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){r=fa(Error(S(423)),t),t=KI(e,t,a,n,r);break e}else if(a!==r){r=fa(Error(S(424)),t),t=KI(e,t,a,n,r);break e}else for(ze=Tt(t.stateNode.containerInfo.firstChild),je=t,N=!0,$e=null,n=Bb(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ya(),a===r){t=gt(e,t,n);break e}ge(e,t,a,n)}t=t.child}return t;case 5:return Ub(t),e===null&&BL(t),a=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,c=r.children,TL(a,r)?c=null:o!==null&&TL(a,o)&&(t.flags|=32),yz(e,t),ge(e,t,c,n),t.child;case 6:return e===null&&BL(t),null;case 13:return kz(e,t,n);case 4:return XC(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=pa(t,null,a,n):ge(e,t,a,n),t.child;case 11:return a=t.type,r=t.pendingProps,r=t.elementType===a?r:Ge(a,r),ZI(e,t,a,r,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,r=t.pendingProps,o=t.memoizedProps,c=r.value,B(Rx,a._currentValue),a._currentValue=c,o!==null)if(Ye(o.value,c)){if(o.children===r.children&&!Se.current){t=gt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){c=o.child;for(var l=s.firstContext;l!==null;){if(l.context===a){if(o.tag===1){l=ut(-1,n&-n),l.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?l.next=l:(l.next=h.next,h.next=l),d.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),EL(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)c=o.type===t.type?null:o.child;else if(o.tag===18){if(c=o.return,c===null)throw Error(S(341));c.lanes|=n,s=c.alternate,s!==null&&(s.lanes|=n),EL(c,n,t),c=o.sibling}else c=o.child;if(c!==null)c.return=o;else for(c=o;c!==null;){if(c===t){c=null;break}if(o=c.sibling,o!==null){o.return=c.return,c=o;break}c=c.return}o=c}ge(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,a=t.pendingProps.children,ta(t,n),r=Ne(r),a=a(r),t.flags|=1,ge(e,t,a,n),t.child;case 14:return a=t.type,r=Ge(a,t.pendingProps),r=Ge(a.type,r),WI(e,t,a,r,n);case 15:return hz(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,r=t.pendingProps,r=t.elementType===a?r:Ge(a,r),Lr(e,t),t.tag=1,Ie(a)?(e=!0,Hx(t)):e=!1,ta(t,n),sz(t,a,r),UL(t,a,r,n),ZL(null,t,a,!0,e,n);case 19:return fz(e,t,n);case 22:return uz(e,t,n)}throw Error(S(156,t.tag))};function Vz(e,t){return rb(e,t)}function RT(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,n,a){return new RT(e,t,n,a)}function hS(e){return e=e.prototype,!(!e||!e.isReactComponent)}function BT(e){if(typeof e=="function")return hS(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zC)return 11;if(e===jC)return 14}return 2}function Rt(e,t){var n=e.alternate;return n===null?(n=Oe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ir(e,t,n,a,r,o){var c=2;if(a=e,typeof e=="function")hS(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case Hn:return Ln(n.children,r,o,t);case bC:c=8,r|=8;break;case uL:return e=Oe(12,n,t,r|2),e.elementType=uL,e.lanes=o,e;case yL:return e=Oe(13,n,t,r),e.elementType=yL,e.lanes=o,e;case pL:return e=Oe(19,n,t,r),e.elementType=pL,e.lanes=o,e;case UA:return yw(n,r,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case EA:c=10;break e;case OA:c=9;break e;case zC:c=11;break e;case jC:c=14;break e;case St:c=16,a=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Oe(c,n,t,r),t.elementType=e,t.type=a,t.lanes=o,t}function Ln(e,t,n,a){return e=Oe(7,e,a,t),e.lanes=n,e}function yw(e,t,n,a){return e=Oe(22,e,a,t),e.elementType=UA,e.lanes=n,e.stateNode={isHidden:!1},e}function Xw(e,t,n){return e=Oe(6,e,null,t),e.lanes=n,e}function Qw(e,t,n){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ET(e,t,n,a,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jw(0),this.expirationTimes=jw(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jw(0),this.identifierPrefix=a,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function uS(e,t,n,a,r,o,c,s,l){return e=new ET(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Oe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$C(o),e}function OT(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tn,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function qz(e){if(!e)return Et;e=e._reactInternals;e:{if(jn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ie(n))return qb(e,n,t)}return t}function Tz(e,t,n,a,r,o,c,s,l){return e=uS(n,a,!0,e,r,o,c,s,l),e.context=qz(null),n=e.current,a=Me(),r=Ft(n),o=ut(a,r),o.callback=t??null,Ht(n,o,r),e.current.lanes=r,Hi(e,r,a),Pe(e,a),e}function pw(e,t,n,a){var r=t.current,o=Me(),c=Ft(r);return n=qz(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(o,c),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Ht(r,t,c),e!==null&&(Qe(e,r,c,o),Mr(e,r,c)),c}function Kx(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function iP(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yS(e,t){iP(e,t),(e=e.alternate)&&iP(e,t)}function UT(){return null}var Hz=typeof reportError=="function"?reportError:function(e){console.error(e)};function pS(e){this._internalRoot=e}kw.prototype.render=pS.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));pw(e,t,null,null)};kw.prototype.unmount=pS.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bn(function(){pw(null,e,null,null)}),t[mt]=null}};function kw(e){this._internalRoot=e}kw.prototype.unstable_scheduleHydration=function(e){if(e){var t=ub();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&pb(e)}};function kS(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fw(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rP(){}function NT(e,t,n,a,r){if(r){if(typeof a=="function"){var o=a;a=function(){var d=Kx(c);o.call(d)}}var c=Tz(t,a,e,0,null,!1,!1,"",rP);return e._reactRootContainer=c,e[mt]=c.current,Mi(e.nodeType===8?e.parentNode:e),bn(),c}for(;r=e.lastChild;)e.removeChild(r);if(typeof a=="function"){var s=a;a=function(){var d=Kx(l);s.call(d)}}var l=uS(e,0,!1,null,null,!1,!1,"",rP);return e._reactRootContainer=l,e[mt]=l.current,Mi(e.nodeType===8?e.parentNode:e),bn(function(){pw(t,l,n,a)}),l}function mw(e,t,n,a,r){var o=n._reactRootContainer;if(o){var c=o;if(typeof r=="function"){var s=r;r=function(){var l=Kx(c);s.call(l)}}pw(t,c,e,r)}else c=NT(n,t,e,r,a);return Kx(c)}db=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ra(t.pendingLanes);n!==0&&(TC(t,n|1),Pe(t,Y()),!(F&6)&&(ma=Y()+500,Zt()))}break;case 13:bn(function(){var a=vt(e,1);if(a!==null){var r=Me();Qe(a,e,1,r)}}),yS(e,1)}};HC=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=Me();Qe(t,e,134217728,n)}yS(e,134217728)}};hb=function(e){if(e.tag===13){var t=Ft(e),n=vt(e,t);if(n!==null){var a=Me();Qe(n,e,t,a)}yS(e,t)}};ub=function(){return R};yb=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};CL=function(e,t,n){switch(t){case"input":if(mL(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=cw(a);if(!r)throw Error(S(90));_A(a),mL(a,r)}}}break;case"textarea":WA(e,n);break;case"select":t=n.value,t!=null&&Qn(e,!!n.multiple,t,!1)}};JA=sS;eb=bn;var _T={usingClientEntryPoint:!1,Events:[Fi,Bn,cw,QA,YA,sS]},Ta={findFiberByHostInstance:vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ZT={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ab(e),e===null?null:e.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||UT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lr.isDisabled&&lr.supportsFiber)try{aw=lr.inject(ZT),it=lr}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_T;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kS(t))throw Error(S(200));return OT(e,t,null,n)};He.createRoot=function(e,t){if(!kS(e))throw Error(S(299));var n=!1,a="",r=Hz;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=uS(e,1,!1,null,null,n,!1,a,r),e[mt]=t.current,Mi(e.nodeType===8?e.parentNode:e),new pS(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ab(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return bn(e)};He.hydrate=function(e,t,n){if(!fw(t))throw Error(S(200));return mw(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!kS(e))throw Error(S(405));var a=n!=null&&n.hydratedSources||null,r=!1,o="",c=Hz;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),t=Tz(t,null,e,1,n??null,r,!1,o,c),e[mt]=t.current,Mi(e),a)for(e=0;e<a.length;e++)n=a[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new kw(t)};He.render=function(e,t,n){if(!fw(t))throw Error(S(200));return mw(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!fw(e))throw Error(S(40));return e._reactRootContainer?(bn(function(){mw(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};He.unstable_batchedUpdates=sS;He.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!fw(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return mw(e,t,n,!1,a)};He.version="18.3.1-next-f1338f8080-20240426";function Dz(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dz)}catch(e){console.error(e)}}Dz(),DA.exports=He;var WT=DA.exports,Fz,oP=WT;Fz=oP.createRoot,oP.hydrateRoot;const fS=P.createContext({});function mS(e){const t=P.useRef(null);return t.current===null&&(t.current=e()),t.current}const vw=P.createContext(null),vS=P.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class GT extends P.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const a=this.props.sizeRef.current;a.height=n.offsetHeight||0,a.width=n.offsetWidth||0,a.top=n.offsetTop,a.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function KT({children:e,isPresent:t}){const n=P.useId(),a=P.useRef(null),r=P.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=P.useContext(vS);return P.useInsertionEffect(()=>{const{width:c,height:s,top:l,left:d}=r.current;if(t||!a.current||!c||!s)return;a.current.dataset.motionPopId=n;const h=document.createElement("style");return o&&(h.nonce=o),document.head.appendChild(h),h.sheet&&h.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(h)}},[t]),v.jsx(GT,{isPresent:t,childRef:a,sizeRef:r,children:P.cloneElement(e,{ref:a})})}const $T=({children:e,initial:t,isPresent:n,onExitComplete:a,custom:r,presenceAffectsLayout:o,mode:c})=>{const s=mS(XT),l=P.useId(),d=P.useCallback(u=>{s.set(u,!0);for(const y of s.values())if(!y)return;a&&a()},[s,a]),h=P.useMemo(()=>({id:l,initial:t,isPresent:n,custom:r,onExitComplete:d,register:u=>(s.set(u,!1),()=>s.delete(u))}),o?[Math.random(),d]:[n,d]);return P.useMemo(()=>{s.forEach((u,y)=>s.set(y,!1))},[n]),P.useEffect(()=>{!n&&!s.size&&a&&a()},[n]),c==="popLayout"&&(e=v.jsx(KT,{isPresent:n,children:e})),v.jsx(vw.Provider,{value:h,children:e})};function XT(){return new Map}function Rz(e=!0){const t=P.useContext(vw);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:a,register:r}=t,o=P.useId();P.useEffect(()=>{e&&r(o)},[e]);const c=P.useCallback(()=>e&&a&&a(o),[o,a,e]);return!n&&a?[!1,c]:[!0]}const dr=e=>e.key||"";function cP(e){const t=[];return P.Children.forEach(e,n=>{P.isValidElement(n)&&t.push(n)}),t}const gS=typeof window<"u",Bz=gS?P.useLayoutEffect:P.useEffect,gw=({children:e,custom:t,initial:n=!0,onExitComplete:a,presenceAffectsLayout:r=!0,mode:o="sync",propagate:c=!1})=>{const[s,l]=Rz(c),d=P.useMemo(()=>cP(e),[e]),h=c&&!s?[]:d.map(dr),u=P.useRef(!0),y=P.useRef(d),m=mS(()=>new Map),[g,M]=P.useState(d),[L,k]=P.useState(d);Bz(()=>{u.current=!1,y.current=d;for(let x=0;x<L.length;x++){const w=dr(L[x]);h.includes(w)?m.delete(w):m.get(w)!==!0&&m.set(w,!1)}},[L,h.length,h.join("-")]);const p=[];if(d!==g){let x=[...d];for(let w=0;w<L.length;w++){const I=L[w],A=dr(I);h.includes(A)||(x.splice(w,0,I),p.push(I))}o==="wait"&&p.length&&(x=p),k(cP(x)),M(d);return}const{forceRender:f}=P.useContext(fS);return v.jsx(v.Fragment,{children:L.map(x=>{const w=dr(x),I=c&&!s?!1:d===L||h.includes(w),A=()=>{if(m.has(w))m.set(w,!0);else return;let C=!0;m.forEach(H=>{H||(C=!1)}),C&&(f==null||f(),k(y.current),c&&(l==null||l()),a&&a())};return v.jsx($T,{isPresent:I,initial:!u.current||n?void 0:!1,custom:I?void 0:t,presenceAffectsLayout:r,mode:o,onExitComplete:I?void 0:A,children:x},w)})})},Ve=e=>e;let aC=Ve;function MS(e){let t;return()=>(t===void 0&&(t=e()),t)}const va=(e,t,n)=>{const a=t-e;return a===0?1:(n-e)/a},yt=e=>e*1e3,pt=e=>e/1e3,QT={skipAnimations:!1,useManualTiming:!1};function YT(e){let t=new Set,n=new Set,a=!1,r=!1;const o=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function s(d){o.has(d)&&(l.schedule(d),e()),d(c)}const l={schedule:(d,h=!1,u=!1)=>{const m=u&&a?t:n;return h&&o.add(d),m.has(d)||m.add(d),d},cancel:d=>{n.delete(d),o.delete(d)},process:d=>{if(c=d,a){r=!0;return}a=!0,[t,n]=[n,t],t.forEach(s),t.clear(),a=!1,r&&(r=!1,l.process(d))}};return l}const hr=["read","resolveKeyframes","update","preRender","render","postRender"],JT=40;function Ez(e,t){let n=!1,a=!0;const r={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,c=hr.reduce((k,p)=>(k[p]=YT(o),k),{}),{read:s,resolveKeyframes:l,update:d,preRender:h,render:u,postRender:y}=c,m=()=>{const k=performance.now();n=!1,r.delta=a?1e3/60:Math.max(Math.min(k-r.timestamp,JT),1),r.timestamp=k,r.isProcessing=!0,s.process(r),l.process(r),d.process(r),h.process(r),u.process(r),y.process(r),r.isProcessing=!1,n&&t&&(a=!1,e(m))},g=()=>{n=!0,a=!0,r.isProcessing||e(m)};return{schedule:hr.reduce((k,p)=>{const f=c[p];return k[p]=(x,w=!1,I=!1)=>(n||g(),f.schedule(x,w,I)),k},{}),cancel:k=>{for(let p=0;p<hr.length;p++)c[hr[p]].cancel(k)},state:r,steps:c}}const{schedule:U,cancel:Ot,state:le,steps:Yw}=Ez(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ve,!0),Oz=P.createContext({strict:!1}),sP={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ga={};for(const e in sP)ga[e]={isEnabled:t=>sP[e].some(n=>!!t[n])};function eH(e){for(const t in e)ga[t]={...ga[t],...e[t]}}const tH=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function $x(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||tH.has(e)}let Uz=e=>!$x(e);function nH(e){e&&(Uz=t=>t.startsWith("on")?!$x(t):e(t))}try{nH(require("@emotion/is-prop-valid").default)}catch{}function aH(e,t,n){const a={};for(const r in e)r==="values"&&typeof e.values=="object"||(Uz(r)||n===!0&&$x(r)||!t&&!$x(r)||e.draggable&&r.startsWith("onDrag"))&&(a[r]=e[r]);return a}function iH(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...a)=>e(...a);return new Proxy(n,{get:(a,r)=>r==="create"?e:(t.has(r)||t.set(r,e(r)),t.get(r))})}const Mw=P.createContext({});function bi(e){return typeof e=="string"||Array.isArray(e)}function xw(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const xS=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],wS=["initial",...xS];function ww(e){return xw(e.animate)||wS.some(t=>bi(e[t]))}function Nz(e){return!!(ww(e)||e.variants)}function rH(e,t){if(ww(e)){const{initial:n,animate:a}=e;return{initial:n===!1||bi(n)?n:void 0,animate:bi(a)?a:void 0}}return e.inherit!==!1?t:{}}function oH(e){const{initial:t,animate:n}=rH(e,P.useContext(Mw));return P.useMemo(()=>({initial:t,animate:n}),[lP(t),lP(n)])}function lP(e){return Array.isArray(e)?e.join(" "):e}const cH=Symbol.for("motionComponentSymbol");function Wn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function sH(e,t,n){return P.useCallback(a=>{a&&e.onMount&&e.onMount(a),t&&(a?t.mount(a):t.unmount()),n&&(typeof n=="function"?n(a):Wn(n)&&(n.current=a))},[t])}const LS=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),lH="framerAppearId",_z="data-"+LS(lH),{schedule:CS,cancel:eE}=Ez(queueMicrotask,!1),Zz=P.createContext({});function dH(e,t,n,a,r){var o,c;const{visualElement:s}=P.useContext(Mw),l=P.useContext(Oz),d=P.useContext(vw),h=P.useContext(vS).reducedMotion,u=P.useRef(null);a=a||l.renderer,!u.current&&a&&(u.current=a(e,{visualState:t,parent:s,props:n,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:h}));const y=u.current,m=P.useContext(Zz);y&&!y.projection&&r&&(y.type==="html"||y.type==="svg")&&hH(u.current,n,r,m);const g=P.useRef(!1);P.useInsertionEffect(()=>{y&&g.current&&y.update(n,d)});const M=n[_z],L=P.useRef(!!M&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,M))&&((c=window.MotionHasOptimisedAnimation)===null||c===void 0?void 0:c.call(window,M)));return Bz(()=>{y&&(g.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),CS.render(y.render),L.current&&y.animationState&&y.animationState.animateChanges())}),P.useEffect(()=>{y&&(!L.current&&y.animationState&&y.animationState.animateChanges(),L.current&&(queueMicrotask(()=>{var k;(k=window.MotionHandoffMarkAsComplete)===null||k===void 0||k.call(window,M)}),L.current=!1))}),y}function hH(e,t,n,a){const{layoutId:r,layout:o,drag:c,dragConstraints:s,layoutScroll:l,layoutRoot:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Wz(e.parent)),e.projection.setOptions({layoutId:r,layout:o,alwaysMeasureLayout:!!c||s&&Wn(s),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:a,layoutScroll:l,layoutRoot:d})}function Wz(e){if(e)return e.options.allowProjection!==!1?e.projection:Wz(e.parent)}function uH({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:a,Component:r}){var o,c;e&&eH(e);function s(d,h){let u;const y={...P.useContext(vS),...d,layoutId:yH(d)},{isStatic:m}=y,g=oH(d),M=a(d,m);if(!m&&gS){pH();const L=kH(y);u=L.MeasureLayout,g.visualElement=dH(r,M,y,t,L.ProjectionNode)}return v.jsxs(Mw.Provider,{value:g,children:[u&&g.visualElement?v.jsx(u,{visualElement:g.visualElement,...y}):null,n(r,d,sH(M,g.visualElement,h),M,m,g.visualElement)]})}s.displayName=`motion.${typeof r=="string"?r:`create(${(c=(o=r.displayName)!==null&&o!==void 0?o:r.name)!==null&&c!==void 0?c:""})`}`;const l=P.forwardRef(s);return l[cH]=r,l}function yH({layoutId:e}){const t=P.useContext(fS).id;return t&&e!==void 0?t+"-"+e:e}function pH(e,t){P.useContext(Oz).strict}function kH(e){const{drag:t,layout:n}=ga;if(!t&&!n)return{};const a={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}const fH=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function SS(e){return typeof e!="string"||e.includes("-")?!1:!!(fH.indexOf(e)>-1||/[A-Z]/u.test(e))}function dP(e){const t=[{},{}];return e==null||e.values.forEach((n,a)=>{t[0][a]=n.get(),t[1][a]=n.getVelocity()}),t}function IS(e,t,n,a){if(typeof t=="function"){const[r,o]=dP(a);t=t(n!==void 0?n:e.custom,r,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[r,o]=dP(a);t=t(n!==void 0?n:e.custom,r,o)}return t}const iC=e=>Array.isArray(e),mH=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),vH=e=>iC(e)?e[e.length-1]||0:e,me=e=>!!(e&&e.getVelocity);function Pr(e){const t=me(e)?e.get():e;return mH(t)?t.toValue():t}function gH({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},a,r,o){const c={latestValues:MH(a,r,o,e),renderState:t()};return n&&(c.onMount=s=>n({props:a,current:s,...c}),c.onUpdate=s=>n(s)),c}const Gz=e=>(t,n)=>{const a=P.useContext(Mw),r=P.useContext(vw),o=()=>gH(e,t,a,r);return n?o():mS(o)};function MH(e,t,n,a){const r={},o=a(e,{});for(const y in o)r[y]=Pr(o[y]);let{initial:c,animate:s}=e;const l=ww(e),d=Nz(e);t&&d&&!l&&e.inherit!==!1&&(c===void 0&&(c=t.initial),s===void 0&&(s=t.animate));let h=n?n.initial===!1:!1;h=h||c===!1;const u=h?s:c;if(u&&typeof u!="boolean"&&!xw(u)){const y=Array.isArray(u)?u:[u];for(let m=0;m<y.length;m++){const g=IS(e,y[m]);if(g){const{transitionEnd:M,transition:L,...k}=g;for(const p in k){let f=k[p];if(Array.isArray(f)){const x=h?f.length-1:0;f=f[x]}f!==null&&(r[p]=f)}for(const p in M)r[p]=M[p]}}}return r}const Ca=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Vn=new Set(Ca),Kz=e=>t=>typeof t=="string"&&t.startsWith(e),$z=Kz("--"),xH=Kz("var(--"),PS=e=>xH(e)?wH.test(e.split("/*")[0].trim()):!1,wH=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Xz=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Mt=(e,t,n)=>n>t?t:n<e?e:n,Sa={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},zi={...Sa,transform:e=>Mt(0,1,e)},ur={...Sa,default:1},Bi=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Ct=Bi("deg"),ot=Bi("%"),j=Bi("px"),LH=Bi("vh"),CH=Bi("vw"),hP={...ot,parse:e=>ot.parse(e)/100,transform:e=>ot.transform(e*100)},SH={borderWidth:j,borderTopWidth:j,borderRightWidth:j,borderBottomWidth:j,borderLeftWidth:j,borderRadius:j,radius:j,borderTopLeftRadius:j,borderTopRightRadius:j,borderBottomRightRadius:j,borderBottomLeftRadius:j,width:j,maxWidth:j,height:j,maxHeight:j,top:j,right:j,bottom:j,left:j,padding:j,paddingTop:j,paddingRight:j,paddingBottom:j,paddingLeft:j,margin:j,marginTop:j,marginRight:j,marginBottom:j,marginLeft:j,backgroundPositionX:j,backgroundPositionY:j},IH={rotate:Ct,rotateX:Ct,rotateY:Ct,rotateZ:Ct,scale:ur,scaleX:ur,scaleY:ur,scaleZ:ur,skew:Ct,skewX:Ct,skewY:Ct,distance:j,translateX:j,translateY:j,translateZ:j,x:j,y:j,z:j,perspective:j,transformPerspective:j,opacity:zi,originX:hP,originY:hP,originZ:j},uP={...Sa,transform:Math.round},AS={...SH,...IH,zIndex:uP,size:j,fillOpacity:zi,strokeOpacity:zi,numOctaves:uP},PH={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},AH=Ca.length;function bH(e,t,n){let a="",r=!0;for(let o=0;o<AH;o++){const c=Ca[o],s=e[c];if(s===void 0)continue;let l=!0;if(typeof s=="number"?l=s===(c.startsWith("scale")?1:0):l=parseFloat(s)===0,!l||n){const d=Xz(s,AS[c]);if(!l){r=!1;const h=PH[c]||c;a+=`${h}(${d}) `}n&&(t[c]=d)}}return a=a.trim(),n?a=n(t,r?"":a):r&&(a="none"),a}function bS(e,t,n){const{style:a,vars:r,transformOrigin:o}=e;let c=!1,s=!1;for(const l in t){const d=t[l];if(Vn.has(l)){c=!0;continue}else if($z(l)){r[l]=d;continue}else{const h=Xz(d,AS[l]);l.startsWith("origin")?(s=!0,o[l]=h):a[l]=h}}if(t.transform||(c||n?a.transform=bH(t,e.transform,n):a.transform&&(a.transform="none")),s){const{originX:l="50%",originY:d="50%",originZ:h=0}=o;a.transformOrigin=`${l} ${d} ${h}`}}const zH={offset:"stroke-dashoffset",array:"stroke-dasharray"},jH={offset:"strokeDashoffset",array:"strokeDasharray"};function VH(e,t,n=1,a=0,r=!0){e.pathLength=1;const o=r?zH:jH;e[o.offset]=j.transform(-a);const c=j.transform(t),s=j.transform(n);e[o.array]=`${c} ${s}`}function yP(e,t,n){return typeof e=="string"?e:j.transform(t+n*e)}function qH(e,t,n){const a=yP(t,e.x,e.width),r=yP(n,e.y,e.height);return`${a} ${r}`}function zS(e,{attrX:t,attrY:n,attrScale:a,originX:r,originY:o,pathLength:c,pathSpacing:s=1,pathOffset:l=0,...d},h,u){if(bS(e,d,u),h){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:m,dimensions:g}=e;y.transform&&(g&&(m.transform=y.transform),delete y.transform),g&&(r!==void 0||o!==void 0||m.transform)&&(m.transformOrigin=qH(g,r!==void 0?r:.5,o!==void 0?o:.5)),t!==void 0&&(y.x=t),n!==void 0&&(y.y=n),a!==void 0&&(y.scale=a),c!==void 0&&VH(y,c,s,l,!1)}const jS=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Qz=()=>({...jS(),attrs:{}}),VS=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Yz(e,{style:t,vars:n},a,r){Object.assign(e.style,t,r&&r.getProjectionStyles(a));for(const o in n)e.style.setProperty(o,n[o])}const Jz=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ej(e,t,n,a){Yz(e,t,void 0,a);for(const r in t.attrs)e.setAttribute(Jz.has(r)?r:LS(r),t.attrs[r])}const Xx={};function TH(e){Object.assign(Xx,e)}function tj(e,{layout:t,layoutId:n}){return Vn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Xx[e]||e==="opacity")}function qS(e,t,n){var a;const{style:r}=e,o={};for(const c in r)(me(r[c])||t.style&&me(t.style[c])||tj(c,e)||((a=n==null?void 0:n.getValue(c))===null||a===void 0?void 0:a.liveStyle)!==void 0)&&(o[c]=r[c]);return o}function nj(e,t,n){const a=qS(e,t,n);for(const r in e)if(me(e[r])||me(t[r])){const o=Ca.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;a[o]=e[r]}return a}function HH(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const pP=["x","y","width","height","cx","cy","r"],DH={useVisualState:Gz({scrapeMotionValuesFromProps:nj,createRenderState:Qz,onUpdate:({props:e,prevProps:t,current:n,renderState:a,latestValues:r})=>{if(!n)return;let o=!!e.drag;if(!o){for(const s in r)if(Vn.has(s)){o=!0;break}}if(!o)return;let c=!t;if(t)for(let s=0;s<pP.length;s++){const l=pP[s];e[l]!==t[l]&&(c=!0)}c&&U.read(()=>{HH(n,a),U.render(()=>{zS(a,r,VS(n.tagName),e.transformTemplate),ej(n,a)})})}})},FH={useVisualState:Gz({scrapeMotionValuesFromProps:qS,createRenderState:jS})};function aj(e,t,n){for(const a in t)!me(t[a])&&!tj(a,n)&&(e[a]=t[a])}function RH({transformTemplate:e},t){return P.useMemo(()=>{const n=jS();return bS(n,t,e),Object.assign({},n.vars,n.style)},[t])}function BH(e,t){const n=e.style||{},a={};return aj(a,n,e),Object.assign(a,RH(e,t)),a}function EH(e,t){const n={},a=BH(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=a,n}function OH(e,t,n,a){const r=P.useMemo(()=>{const o=Qz();return zS(o,t,VS(a),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};aj(o,e.style,e),r.style={...o,...r.style}}return r}function UH(e=!1){return(n,a,r,{latestValues:o},c)=>{const l=(SS(n)?OH:EH)(a,o,c,n),d=aH(a,typeof n=="string",e),h=n!==P.Fragment?{...d,...l,ref:r}:{},{children:u}=a,y=P.useMemo(()=>me(u)?u.get():u,[u]);return P.createElement(n,{...h,children:y})}}function NH(e,t){return function(a,{forwardMotionProps:r}={forwardMotionProps:!1}){const c={...SS(a)?DH:FH,preloadedFeatures:e,useRender:UH(r),createVisualElement:t,Component:a};return uH(c)}}function ij(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let a=0;a<n;a++)if(t[a]!==e[a])return!1;return!0}function Lw(e,t,n){const a=e.getProps();return IS(a,t,n!==void 0?n:a.custom,e)}const _H=MS(()=>window.ScrollTimeline!==void 0);class ZH{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let a=0;a<this.animations.length;a++)this.animations[a][t]=n}attachTimeline(t,n){const a=this.animations.map(r=>{if(_H()&&r.attachTimeline)return r.attachTimeline(t);if(typeof n=="function")return n(r)});return()=>{a.forEach((r,o)=>{r&&r(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class WH extends ZH{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function TS(e,t){return e?e[t]||e.default||e:void 0}const rC=2e4;function rj(e){let t=0;const n=50;let a=e.next(t);for(;!a.done&&t<rC;)t+=n,a=e.next(t);return t>=rC?1/0:t}function HS(e){return typeof e=="function"}function kP(e,t){e.timeline=t,e.onfinish=null}const DS=e=>Array.isArray(e)&&typeof e[0]=="number",GH={linearEasing:void 0};function KH(e,t){const n=MS(e);return()=>{var a;return(a=GH[t])!==null&&a!==void 0?a:n()}}const Qx=KH(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),oj=(e,t,n=10)=>{let a="";const r=Math.max(Math.round(t/n),2);for(let o=0;o<r;o++)a+=e(va(0,r-1,o))+", ";return`linear(${a.substring(0,a.length-2)})`};function cj(e){return!!(typeof e=="function"&&Qx()||!e||typeof e=="string"&&(e in oC||Qx())||DS(e)||Array.isArray(e)&&e.every(cj))}const Ea=([e,t,n,a])=>`cubic-bezier(${e}, ${t}, ${n}, ${a})`,oC={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ea([0,.65,.55,1]),circOut:Ea([.55,0,1,.45]),backIn:Ea([.31,.01,.66,-.59]),backOut:Ea([.33,1.53,.69,.99])};function sj(e,t){if(e)return typeof e=="function"&&Qx()?oj(e,t):DS(e)?Ea(e):Array.isArray(e)?e.map(n=>sj(n,t)||oC.easeOut):oC[e]}const We={x:!1,y:!1};function lj(){return We.x||We.y}function $H(e,t,n){var a;if(e instanceof Element)return[e];if(typeof e=="string"){let r=document;const o=(a=void 0)!==null&&a!==void 0?a:r.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}function dj(e,t){const n=$H(e),a=new AbortController,r={passive:!0,...t,signal:a.signal};return[n,r,()=>a.abort()]}function fP(e){return t=>{t.pointerType==="touch"||lj()||e(t)}}function XH(e,t,n={}){const[a,r,o]=dj(e,n),c=fP(s=>{const{target:l}=s,d=t(s);if(typeof d!="function"||!l)return;const h=fP(u=>{d(u),l.removeEventListener("pointerleave",h)});l.addEventListener("pointerleave",h,r)});return a.forEach(s=>{s.addEventListener("pointerenter",c,r)}),o}const hj=(e,t)=>t?e===t?!0:hj(e,t.parentElement):!1,FS=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,QH=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function YH(e){return QH.has(e.tagName)||e.tabIndex!==-1}const Oa=new WeakSet;function mP(e){return t=>{t.key==="Enter"&&e(t)}}function Jw(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const JH=(e,t)=>{const n=e.currentTarget;if(!n)return;const a=mP(()=>{if(Oa.has(n))return;Jw(n,"down");const r=mP(()=>{Jw(n,"up")}),o=()=>Jw(n,"cancel");n.addEventListener("keyup",r,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",a,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",a),t)};function vP(e){return FS(e)&&!lj()}function eD(e,t,n={}){const[a,r,o]=dj(e,n),c=s=>{const l=s.currentTarget;if(!vP(s)||Oa.has(l))return;Oa.add(l);const d=t(s),h=(m,g)=>{window.removeEventListener("pointerup",u),window.removeEventListener("pointercancel",y),!(!vP(m)||!Oa.has(l))&&(Oa.delete(l),typeof d=="function"&&d(m,{success:g}))},u=m=>{h(m,n.useGlobalTarget||hj(l,m.target))},y=m=>{h(m,!1)};window.addEventListener("pointerup",u,r),window.addEventListener("pointercancel",y,r)};return a.forEach(s=>{!YH(s)&&s.getAttribute("tabindex")===null&&(s.tabIndex=0),(n.useGlobalTarget?window:s).addEventListener("pointerdown",c,r),s.addEventListener("focus",d=>JH(d,r),r)}),o}function tD(e){return e==="x"||e==="y"?We[e]?null:(We[e]=!0,()=>{We[e]=!1}):We.x||We.y?null:(We.x=We.y=!0,()=>{We.x=We.y=!1})}const uj=new Set(["width","height","top","left","right","bottom",...Ca]);let Ar;function nD(){Ar=void 0}const ct={now:()=>(Ar===void 0&&ct.set(le.isProcessing||QT.useManualTiming?le.timestamp:performance.now()),Ar),set:e=>{Ar=e,queueMicrotask(nD)}};function RS(e,t){e.indexOf(t)===-1&&e.push(t)}function BS(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class ES{constructor(){this.subscriptions=[]}add(t){return RS(this.subscriptions,t),()=>BS(this.subscriptions,t)}notify(t,n,a){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](t,n,a);else for(let o=0;o<r;o++){const c=this.subscriptions[o];c&&c(t,n,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function yj(e,t){return t?e*(1e3/t):0}const gP=30,aD=e=>!isNaN(parseFloat(e));class iD{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(a,r=!0)=>{const o=ct.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=ct.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=aD(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new ES);const a=this.events[t].add(n);return t==="change"?()=>{a(),U.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,a){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-a}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=ct.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>gP)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,gP);return yj(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ji(e,t){return new iD(e,t)}function rD(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ji(n))}function oD(e,t){const n=Lw(e,t);let{transitionEnd:a={},transition:r={},...o}=n||{};o={...o,...a};for(const c in o){const s=vH(o[c]);rD(e,c,s)}}function cD(e){return!!(me(e)&&e.add)}function cC(e,t){const n=e.getValue("willChange");if(cD(n))return n.add(t)}function pj(e){return e.props[_z]}const kj=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,sD=1e-7,lD=12;function dD(e,t,n,a,r){let o,c,s=0;do c=t+(n-t)/2,o=kj(c,a,r)-e,o>0?n=c:t=c;while(Math.abs(o)>sD&&++s<lD);return c}function Ei(e,t,n,a){if(e===t&&n===a)return Ve;const r=o=>dD(o,0,1,e,n);return o=>o===0||o===1?o:kj(r(o),t,a)}const fj=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,mj=e=>t=>1-e(1-t),vj=Ei(.33,1.53,.69,.99),OS=mj(vj),gj=fj(OS),Mj=e=>(e*=2)<1?.5*OS(e):.5*(2-Math.pow(2,-10*(e-1))),US=e=>1-Math.sin(Math.acos(e)),xj=mj(US),wj=fj(US),Lj=e=>/^0[^.\s]+$/u.test(e);function hD(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Lj(e):!0}const Ya=e=>Math.round(e*1e5)/1e5,NS=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function uD(e){return e==null}const yD=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,_S=(e,t)=>n=>!!(typeof n=="string"&&yD.test(n)&&n.startsWith(e)||t&&!uD(n)&&Object.prototype.hasOwnProperty.call(n,t)),Cj=(e,t,n)=>a=>{if(typeof a!="string")return a;const[r,o,c,s]=a.match(NS);return{[e]:parseFloat(r),[t]:parseFloat(o),[n]:parseFloat(c),alpha:s!==void 0?parseFloat(s):1}},pD=e=>Mt(0,255,e),eL={...Sa,transform:e=>Math.round(pD(e))},xn={test:_S("rgb","red"),parse:Cj("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:a=1})=>"rgba("+eL.transform(e)+", "+eL.transform(t)+", "+eL.transform(n)+", "+Ya(zi.transform(a))+")"};function kD(e){let t="",n="",a="",r="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),a=e.substring(5,7),r=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),a=e.substring(3,4),r=e.substring(4,5),t+=t,n+=n,a+=a,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(a,16),alpha:r?parseInt(r,16)/255:1}}const sC={test:_S("#"),parse:kD,transform:xn.transform},Gn={test:_S("hsl","hue"),parse:Cj("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:a=1})=>"hsla("+Math.round(e)+", "+ot.transform(Ya(t))+", "+ot.transform(Ya(n))+", "+Ya(zi.transform(a))+")"},ke={test:e=>xn.test(e)||sC.test(e)||Gn.test(e),parse:e=>xn.test(e)?xn.parse(e):Gn.test(e)?Gn.parse(e):sC.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?xn.transform(e):Gn.transform(e)},fD=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function mD(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(NS))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(fD))===null||n===void 0?void 0:n.length)||0)>0}const Sj="number",Ij="color",vD="var",gD="var(",MP="${}",MD=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Vi(e){const t=e.toString(),n=[],a={color:[],number:[],var:[]},r=[];let o=0;const s=t.replace(MD,l=>(ke.test(l)?(a.color.push(o),r.push(Ij),n.push(ke.parse(l))):l.startsWith(gD)?(a.var.push(o),r.push(vD),n.push(l)):(a.number.push(o),r.push(Sj),n.push(parseFloat(l))),++o,MP)).split(MP);return{values:n,split:s,indexes:a,types:r}}function Pj(e){return Vi(e).values}function Aj(e){const{split:t,types:n}=Vi(e),a=t.length;return r=>{let o="";for(let c=0;c<a;c++)if(o+=t[c],r[c]!==void 0){const s=n[c];s===Sj?o+=Ya(r[c]):s===Ij?o+=ke.transform(r[c]):o+=r[c]}return o}}const xD=e=>typeof e=="number"?0:e;function wD(e){const t=Pj(e);return Aj(e)(t.map(xD))}const Ut={test:mD,parse:Pj,createTransformer:Aj,getAnimatableNone:wD},LD=new Set(["brightness","contrast","saturate","opacity"]);function CD(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[a]=n.match(NS)||[];if(!a)return e;const r=n.replace(a,"");let o=LD.has(t)?1:0;return a!==n&&(o*=100),t+"("+o+r+")"}const SD=/\b([a-z-]*)\(.*?\)/gu,lC={...Ut,getAnimatableNone:e=>{const t=e.match(SD);return t?t.map(CD).join(" "):e}},ID={...AS,color:ke,backgroundColor:ke,outlineColor:ke,fill:ke,stroke:ke,borderColor:ke,borderTopColor:ke,borderRightColor:ke,borderBottomColor:ke,borderLeftColor:ke,filter:lC,WebkitFilter:lC},ZS=e=>ID[e];function bj(e,t){let n=ZS(e);return n!==lC&&(n=Ut),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const PD=new Set(["auto","none","0"]);function AD(e,t,n){let a=0,r;for(;a<e.length&&!r;){const o=e[a];typeof o=="string"&&!PD.has(o)&&Vi(o).values.length&&(r=e[a]),a++}if(r&&n)for(const o of t)e[o]=bj(n,r)}const xP=e=>e===Sa||e===j,wP=(e,t)=>parseFloat(e.split(", ")[t]),LP=(e,t)=>(n,{transform:a})=>{if(a==="none"||!a)return 0;const r=a.match(/^matrix3d\((.+)\)$/u);if(r)return wP(r[1],t);{const o=a.match(/^matrix\((.+)\)$/u);return o?wP(o[1],e):0}},bD=new Set(["x","y","z"]),zD=Ca.filter(e=>!bD.has(e));function jD(e){const t=[];return zD.forEach(n=>{const a=e.getValue(n);a!==void 0&&(t.push([n,a.get()]),a.set(n.startsWith("scale")?1:0))}),t}const Ma={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:LP(4,13),y:LP(5,14)};Ma.translateX=Ma.x;Ma.translateY=Ma.y;const Cn=new Set;let dC=!1,hC=!1;function zj(){if(hC){const e=Array.from(Cn).filter(a=>a.needsMeasurement),t=new Set(e.map(a=>a.element)),n=new Map;t.forEach(a=>{const r=jD(a);r.length&&(n.set(a,r),a.render())}),e.forEach(a=>a.measureInitialState()),t.forEach(a=>{a.render();const r=n.get(a);r&&r.forEach(([o,c])=>{var s;(s=a.getValue(o))===null||s===void 0||s.set(c)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}hC=!1,dC=!1,Cn.forEach(e=>e.complete()),Cn.clear()}function jj(){Cn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(hC=!0)})}function VD(){jj(),zj()}class WS{constructor(t,n,a,r,o,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=a,this.motionValue=r,this.element=o,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Cn.add(this),dC||(dC=!0,U.read(jj),U.resolveKeyframes(zj))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:a,motionValue:r}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const c=r==null?void 0:r.get(),s=t[t.length-1];if(c!==void 0)t[0]=c;else if(a&&n){const l=a.readValue(n,s);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=s),r&&c===void 0&&r.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Cn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Cn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Vj=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),qD=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function TD(e){const t=qD.exec(e);if(!t)return[,];const[,n,a,r]=t;return[`--${n??a}`,r]}function qj(e,t,n=1){const[a,r]=TD(e);if(!a)return;const o=window.getComputedStyle(t).getPropertyValue(a);if(o){const c=o.trim();return Vj(c)?parseFloat(c):c}return PS(r)?qj(r,t,n+1):r}const Tj=e=>t=>t.test(e),HD={test:e=>e==="auto",parse:e=>e},Hj=[Sa,j,ot,Ct,CH,LH,HD],CP=e=>Hj.find(Tj(e));class Dj extends WS{constructor(t,n,a,r,o){super(t,n,a,r,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:a}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let d=t[l];if(typeof d=="string"&&(d=d.trim(),PS(d))){const h=qj(d,n.current);h!==void 0&&(t[l]=h),l===t.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!uj.has(a)||t.length!==2)return;const[r,o]=t,c=CP(r),s=CP(o);if(c!==s)if(xP(c)&&xP(s))for(let l=0;l<t.length;l++){const d=t[l];typeof d=="string"&&(t[l]=parseFloat(d))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,a=[];for(let r=0;r<t.length;r++)hD(t[r])&&a.push(r);a.length&&AD(t,a,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:a}=this;if(!t||!t.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ma[a](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&t.getValue(a,r).jump(r,!1)}measureEndState(){var t;const{element:n,name:a,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const o=n.getValue(a);o&&o.jump(this.measuredOrigin,!1);const c=r.length-1,s=r[c];r[c]=Ma[a](n.measureViewportBox(),window.getComputedStyle(n.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,d])=>{n.getValue(l).set(d)}),this.resolveNoneKeyframes()}}const SP=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Ut.test(e)||e==="0")&&!e.startsWith("url("));function DD(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function FD(e,t,n,a){const r=e[0];if(r===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],c=SP(r,t),s=SP(o,t);return!c||!s?!1:DD(e)||(n==="spring"||HS(n))&&a}const RD=e=>e!==null;function Cw(e,{repeat:t,repeatType:n="loop"},a){const r=e.filter(RD),o=t&&n!=="loop"&&t%2===1?0:r.length-1;return!o||a===void 0?r[o]:a}const BD=40;class Fj{constructor({autoplay:t=!0,delay:n=0,type:a="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:c="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ct.now(),this.options={autoplay:t,delay:n,type:a,repeat:r,repeatDelay:o,repeatType:c,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>BD?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&VD(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=ct.now(),this.hasAttemptedResolve=!0;const{name:a,type:r,velocity:o,delay:c,onComplete:s,onUpdate:l,isGenerator:d}=this.options;if(!d&&!FD(t,a,r,o))if(c)this.options.duration=0;else{l&&l(Cw(t,this.options,n)),s&&s(),this.resolveFinishedPromise();return}const h=this.initPlayback(t,n);h!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...h},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const Z=(e,t,n)=>e+(t-e)*n;function tL(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ED({hue:e,saturation:t,lightness:n,alpha:a}){e/=360,t/=100,n/=100;let r=0,o=0,c=0;if(!t)r=o=c=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;r=tL(l,s,e+1/3),o=tL(l,s,e),c=tL(l,s,e-1/3)}return{red:Math.round(r*255),green:Math.round(o*255),blue:Math.round(c*255),alpha:a}}function Yx(e,t){return n=>n>0?t:e}const nL=(e,t,n)=>{const a=e*e,r=n*(t*t-a)+a;return r<0?0:Math.sqrt(r)},OD=[sC,xn,Gn],UD=e=>OD.find(t=>t.test(e));function IP(e){const t=UD(e);if(!t)return!1;let n=t.parse(e);return t===Gn&&(n=ED(n)),n}const PP=(e,t)=>{const n=IP(e),a=IP(t);if(!n||!a)return Yx(e,t);const r={...n};return o=>(r.red=nL(n.red,a.red,o),r.green=nL(n.green,a.green,o),r.blue=nL(n.blue,a.blue,o),r.alpha=Z(n.alpha,a.alpha,o),xn.transform(r))},ND=(e,t)=>n=>t(e(n)),Oi=(...e)=>e.reduce(ND),uC=new Set(["none","hidden"]);function _D(e,t){return uC.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function ZD(e,t){return n=>Z(e,t,n)}function GS(e){return typeof e=="number"?ZD:typeof e=="string"?PS(e)?Yx:ke.test(e)?PP:KD:Array.isArray(e)?Rj:typeof e=="object"?ke.test(e)?PP:WD:Yx}function Rj(e,t){const n=[...e],a=n.length,r=e.map((o,c)=>GS(o)(o,t[c]));return o=>{for(let c=0;c<a;c++)n[c]=r[c](o);return n}}function WD(e,t){const n={...e,...t},a={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(a[r]=GS(e[r])(e[r],t[r]));return r=>{for(const o in a)n[o]=a[o](r);return n}}function GD(e,t){var n;const a=[],r={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const c=t.types[o],s=e.indexes[c][r[c]],l=(n=e.values[s])!==null&&n!==void 0?n:0;a[o]=l,r[c]++}return a}const KD=(e,t)=>{const n=Ut.createTransformer(t),a=Vi(e),r=Vi(t);return a.indexes.var.length===r.indexes.var.length&&a.indexes.color.length===r.indexes.color.length&&a.indexes.number.length>=r.indexes.number.length?uC.has(e)&&!r.values.length||uC.has(t)&&!a.values.length?_D(e,t):Oi(Rj(GD(a,r),r.values),n):Yx(e,t)};function Bj(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Z(e,t,n):GS(e)(e,t)}const $D=5;function Ej(e,t,n){const a=Math.max(t-$D,0);return yj(n-e(a),t-a)}const K={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},aL=.001;function XD({duration:e=K.duration,bounce:t=K.bounce,velocity:n=K.velocity,mass:a=K.mass}){let r,o,c=1-t;c=Mt(K.minDamping,K.maxDamping,c),e=Mt(K.minDuration,K.maxDuration,pt(e)),c<1?(r=d=>{const h=d*c,u=h*e,y=h-n,m=yC(d,c),g=Math.exp(-u);return aL-y/m*g},o=d=>{const u=d*c*e,y=u*n+n,m=Math.pow(c,2)*Math.pow(d,2)*e,g=Math.exp(-u),M=yC(Math.pow(d,2),c);return(-r(d)+aL>0?-1:1)*((y-m)*g)/M}):(r=d=>{const h=Math.exp(-d*e),u=(d-n)*e+1;return-aL+h*u},o=d=>{const h=Math.exp(-d*e),u=(n-d)*(e*e);return h*u});const s=5/e,l=YD(r,o,s);if(e=yt(e),isNaN(l))return{stiffness:K.stiffness,damping:K.damping,duration:e};{const d=Math.pow(l,2)*a;return{stiffness:d,damping:c*2*Math.sqrt(a*d),duration:e}}}const QD=12;function YD(e,t,n){let a=n;for(let r=1;r<QD;r++)a=a-e(a)/t(a);return a}function yC(e,t){return e*Math.sqrt(1-t*t)}const JD=["duration","bounce"],eF=["stiffness","damping","mass"];function AP(e,t){return t.some(n=>e[n]!==void 0)}function tF(e){let t={velocity:K.velocity,stiffness:K.stiffness,damping:K.damping,mass:K.mass,isResolvedFromDuration:!1,...e};if(!AP(e,eF)&&AP(e,JD))if(e.visualDuration){const n=e.visualDuration,a=2*Math.PI/(n*1.2),r=a*a,o=2*Mt(.05,1,1-(e.bounce||0))*Math.sqrt(r);t={...t,mass:K.mass,stiffness:r,damping:o}}else{const n=XD(e);t={...t,...n,mass:K.mass},t.isResolvedFromDuration=!0}return t}function Oj(e=K.visualDuration,t=K.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:a,restDelta:r}=n;const o=n.keyframes[0],c=n.keyframes[n.keyframes.length-1],s={done:!1,value:o},{stiffness:l,damping:d,mass:h,duration:u,velocity:y,isResolvedFromDuration:m}=tF({...n,velocity:-pt(n.velocity||0)}),g=y||0,M=d/(2*Math.sqrt(l*h)),L=c-o,k=pt(Math.sqrt(l/h)),p=Math.abs(L)<5;a||(a=p?K.restSpeed.granular:K.restSpeed.default),r||(r=p?K.restDelta.granular:K.restDelta.default);let f;if(M<1){const w=yC(k,M);f=I=>{const A=Math.exp(-M*k*I);return c-A*((g+M*k*L)/w*Math.sin(w*I)+L*Math.cos(w*I))}}else if(M===1)f=w=>c-Math.exp(-k*w)*(L+(g+k*L)*w);else{const w=k*Math.sqrt(M*M-1);f=I=>{const A=Math.exp(-M*k*I),C=Math.min(w*I,300);return c-A*((g+M*k*L)*Math.sinh(C)+w*L*Math.cosh(C))/w}}const x={calculatedDuration:m&&u||null,next:w=>{const I=f(w);if(m)s.done=w>=u;else{let A=0;M<1&&(A=w===0?yt(g):Ej(f,w,I));const C=Math.abs(A)<=a,H=Math.abs(c-I)<=r;s.done=C&&H}return s.value=s.done?c:I,s},toString:()=>{const w=Math.min(rj(x),rC),I=oj(A=>x.next(w*A).value,w,30);return w+"ms "+I}};return x}function bP({keyframes:e,velocity:t=0,power:n=.8,timeConstant:a=325,bounceDamping:r=10,bounceStiffness:o=500,modifyTarget:c,min:s,max:l,restDelta:d=.5,restSpeed:h}){const u=e[0],y={done:!1,value:u},m=C=>s!==void 0&&C<s||l!==void 0&&C>l,g=C=>s===void 0?l:l===void 0||Math.abs(s-C)<Math.abs(l-C)?s:l;let M=n*t;const L=u+M,k=c===void 0?L:c(L);k!==L&&(M=k-u);const p=C=>-M*Math.exp(-C/a),f=C=>k+p(C),x=C=>{const H=p(C),V=f(C);y.done=Math.abs(H)<=d,y.value=y.done?k:V};let w,I;const A=C=>{m(y.value)&&(w=C,I=Oj({keyframes:[y.value,g(y.value)],velocity:Ej(f,C,y.value),damping:r,stiffness:o,restDelta:d,restSpeed:h}))};return A(0),{calculatedDuration:null,next:C=>{let H=!1;return!I&&w===void 0&&(H=!0,x(C),A(C)),w!==void 0&&C>=w?I.next(C-w):(!H&&x(C),y)}}}const nF=Ei(.42,0,1,1),aF=Ei(0,0,.58,1),Uj=Ei(.42,0,.58,1),iF=e=>Array.isArray(e)&&typeof e[0]!="number",zP={linear:Ve,easeIn:nF,easeInOut:Uj,easeOut:aF,circIn:US,circInOut:wj,circOut:xj,backIn:OS,backInOut:gj,backOut:vj,anticipate:Mj},jP=e=>{if(DS(e)){aC(e.length===4);const[t,n,a,r]=e;return Ei(t,n,a,r)}else if(typeof e=="string")return aC(zP[e]!==void 0),zP[e];return e};function rF(e,t,n){const a=[],r=n||Bj,o=e.length-1;for(let c=0;c<o;c++){let s=r(e[c],e[c+1]);if(t){const l=Array.isArray(t)?t[c]||Ve:t;s=Oi(l,s)}a.push(s)}return a}function oF(e,t,{clamp:n=!0,ease:a,mixer:r}={}){const o=e.length;if(aC(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const c=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=rF(t,a,r),l=s.length,d=h=>{if(c&&h<e[0])return t[0];let u=0;if(l>1)for(;u<e.length-2&&!(h<e[u+1]);u++);const y=va(e[u],e[u+1],h);return s[u](y)};return n?h=>d(Mt(e[0],e[o-1],h)):d}function cF(e,t){const n=e[e.length-1];for(let a=1;a<=t;a++){const r=va(0,t,a);e.push(Z(n,1,r))}}function sF(e){const t=[0];return cF(t,e.length-1),t}function lF(e,t){return e.map(n=>n*t)}function dF(e,t){return e.map(()=>t||Uj).splice(0,e.length-1)}function Jx({duration:e=300,keyframes:t,times:n,ease:a="easeInOut"}){const r=iF(a)?a.map(jP):jP(a),o={done:!1,value:t[0]},c=lF(n&&n.length===t.length?n:sF(t),e),s=oF(c,t,{ease:Array.isArray(r)?r:dF(t,r)});return{calculatedDuration:e,next:l=>(o.value=s(l),o.done=l>=e,o)}}const hF=e=>{const t=({timestamp:n})=>e(n);return{start:()=>U.update(t,!0),stop:()=>Ot(t),now:()=>le.isProcessing?le.timestamp:ct.now()}},uF={decay:bP,inertia:bP,tween:Jx,keyframes:Jx,spring:Oj},yF=e=>e/100;class KS extends Fj{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:a,element:r,keyframes:o}=this.options,c=(r==null?void 0:r.KeyframeResolver)||WS,s=(l,d)=>this.onKeyframesResolved(l,d);this.resolver=new c(o,s,n,a,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:a=0,repeatDelay:r=0,repeatType:o,velocity:c=0}=this.options,s=HS(n)?n:uF[n]||Jx;let l,d;s!==Jx&&typeof t[0]!="number"&&(l=Oi(yF,Bj(t[0],t[1])),t=[0,100]);const h=s({...this.options,keyframes:t});o==="mirror"&&(d=s({...this.options,keyframes:[...t].reverse(),velocity:-c})),h.calculatedDuration===null&&(h.calculatedDuration=rj(h));const{calculatedDuration:u}=h,y=u+r,m=y*(a+1)-r;return{generator:h,mirroredGenerator:d,mapPercentToKeyframes:l,calculatedDuration:u,resolvedDuration:y,totalDuration:m}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:a}=this;if(!a){const{keyframes:C}=this.options;return{done:!0,value:C[C.length-1]}}const{finalKeyframe:r,generator:o,mirroredGenerator:c,mapPercentToKeyframes:s,keyframes:l,calculatedDuration:d,totalDuration:h,resolvedDuration:u}=a;if(this.startTime===null)return o.next(0);const{delay:y,repeat:m,repeatType:g,repeatDelay:M,onUpdate:L}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-h/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const k=this.currentTime-y*(this.speed>=0?1:-1),p=this.speed>=0?k<0:k>h;this.currentTime=Math.max(k,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=h);let f=this.currentTime,x=o;if(m){const C=Math.min(this.currentTime,h)/u;let H=Math.floor(C),V=C%1;!V&&C>=1&&(V=1),V===1&&H--,H=Math.min(H,m+1),!!(H%2)&&(g==="reverse"?(V=1-V,M&&(V-=M/u)):g==="mirror"&&(x=c)),f=Mt(0,1,V)*u}const w=p?{done:!1,value:l[0]}:x.next(f);s&&(w.value=s(w.value));let{done:I}=w;!p&&d!==null&&(I=this.speed>=0?this.currentTime>=h:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return A&&r!==void 0&&(w.value=Cw(l,this.options,r)),L&&L(w.value),A&&this.finish(),w}get duration(){const{resolved:t}=this;return t?pt(t.calculatedDuration):0}get time(){return pt(this.currentTime)}set time(t){t=yt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=pt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=hF,onPlay:n,startTime:a}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=a??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const pF=new Set(["opacity","clipPath","filter","transform"]);function kF(e,t,n,{delay:a=0,duration:r=300,repeat:o=0,repeatType:c="loop",ease:s="easeInOut",times:l}={}){const d={[t]:n};l&&(d.offset=l);const h=sj(s,r);return Array.isArray(h)&&(d.easing=h),e.animate(d,{delay:a,duration:r,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:o+1,direction:c==="reverse"?"alternate":"normal"})}const fF=MS(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ew=10,mF=2e4;function vF(e){return HS(e.type)||e.type==="spring"||!cj(e.ease)}function gF(e,t){const n=new KS({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let a={done:!1,value:e[0]};const r=[];let o=0;for(;!a.done&&o<mF;)a=n.sample(o),r.push(a.value),o+=ew;return{times:void 0,keyframes:r,duration:o-ew,ease:"linear"}}const Nj={anticipate:Mj,backInOut:gj,circInOut:wj};function MF(e){return e in Nj}class VP extends Fj{constructor(t){super(t);const{name:n,motionValue:a,element:r,keyframes:o}=this.options;this.resolver=new Dj(o,(c,s)=>this.onKeyframesResolved(c,s),n,a,r),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:a=300,times:r,ease:o,type:c,motionValue:s,name:l,startTime:d}=this.options;if(!s.owner||!s.owner.current)return!1;if(typeof o=="string"&&Qx()&&MF(o)&&(o=Nj[o]),vF(this.options)){const{onComplete:u,onUpdate:y,motionValue:m,element:g,...M}=this.options,L=gF(t,M);t=L.keyframes,t.length===1&&(t[1]=t[0]),a=L.duration,r=L.times,o=L.ease,c="keyframes"}const h=kF(s.owner.current,l,t,{...this.options,duration:a,times:r,ease:o});return h.startTime=d??this.calcStartTime(),this.pendingTimeline?(kP(h,this.pendingTimeline),this.pendingTimeline=void 0):h.onfinish=()=>{const{onComplete:u}=this.options;s.set(Cw(t,this.options,n)),u&&u(),this.cancel(),this.resolveFinishedPromise()},{animation:h,duration:a,times:r,type:c,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return pt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return pt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:a}=n;a.currentTime=yt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:a}=n;a.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Ve;const{animation:a}=n;kP(a,t)}return Ve}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:a,duration:r,type:o,ease:c,times:s}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:d,onUpdate:h,onComplete:u,element:y,...m}=this.options,g=new KS({...m,keyframes:a,duration:r,type:o,ease:c,times:s,isGenerator:!0}),M=yt(this.time);d.setWithVelocity(g.sample(M-ew).value,g.sample(M).value,ew)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:a,repeatDelay:r,repeatType:o,damping:c,type:s}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:d}=n.owner.getProps();return fF()&&a&&pF.has(a)&&!l&&!d&&!r&&o!=="mirror"&&c!==0&&s!=="inertia"}}const xF={type:"spring",stiffness:500,damping:25,restSpeed:10},wF=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),LF={type:"keyframes",duration:.8},CF={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},SF=(e,{keyframes:t})=>t.length>2?LF:Vn.has(e)?e.startsWith("scale")?wF(t[1]):xF:CF;function IF({when:e,delay:t,delayChildren:n,staggerChildren:a,staggerDirection:r,repeat:o,repeatType:c,repeatDelay:s,from:l,elapsed:d,...h}){return!!Object.keys(h).length}const $S=(e,t,n,a={},r,o)=>c=>{const s=TS(a,e)||{},l=s.delay||a.delay||0;let{elapsed:d=0}=a;d=d-yt(l);let h={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-d,onUpdate:y=>{t.set(y),s.onUpdate&&s.onUpdate(y)},onComplete:()=>{c(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:o?void 0:r};IF(s)||(h={...h,...SF(e,h)}),h.duration&&(h.duration=yt(h.duration)),h.repeatDelay&&(h.repeatDelay=yt(h.repeatDelay)),h.from!==void 0&&(h.keyframes[0]=h.from);let u=!1;if((h.type===!1||h.duration===0&&!h.repeatDelay)&&(h.duration=0,h.delay===0&&(u=!0)),u&&!o&&t.get()!==void 0){const y=Cw(h.keyframes,s);if(y!==void 0)return U.update(()=>{h.onUpdate(y),h.onComplete()}),new WH([])}return!o&&VP.supports(h)?new VP(h):new KS(h)};function PF({protectedKeys:e,needsAnimating:t},n){const a=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,a}function _j(e,t,{delay:n=0,transitionOverride:a,type:r}={}){var o;let{transition:c=e.getDefaultTransition(),transitionEnd:s,...l}=t;a&&(c=a);const d=[],h=r&&e.animationState&&e.animationState.getState()[r];for(const u in l){const y=e.getValue(u,(o=e.latestValues[u])!==null&&o!==void 0?o:null),m=l[u];if(m===void 0||h&&PF(h,u))continue;const g={delay:n,...TS(c||{},u)};let M=!1;if(window.MotionHandoffAnimation){const k=pj(e);if(k){const p=window.MotionHandoffAnimation(k,u,U);p!==null&&(g.startTime=p,M=!0)}}cC(e,u),y.start($S(u,y,m,e.shouldReduceMotion&&uj.has(u)?{type:!1}:g,e,M));const L=y.animation;L&&d.push(L)}return s&&Promise.all(d).then(()=>{U.update(()=>{s&&oD(e,s)})}),d}function pC(e,t,n={}){var a;const r=Lw(e,t,n.type==="exit"?(a=e.presenceContext)===null||a===void 0?void 0:a.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(o=n.transitionOverride);const c=r?()=>Promise.all(_j(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:h=0,staggerChildren:u,staggerDirection:y}=o;return AF(e,t,h+d,u,y,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[d,h]=l==="beforeChildren"?[c,s]:[s,c];return d().then(()=>h())}else return Promise.all([c(),s(n.delay)])}function AF(e,t,n=0,a=0,r=1,o){const c=[],s=(e.variantChildren.size-1)*a,l=r===1?(d=0)=>d*a:(d=0)=>s-d*a;return Array.from(e.variantChildren).sort(bF).forEach((d,h)=>{d.notify("AnimationStart",t),c.push(pC(d,t,{...o,delay:n+l(h)}).then(()=>d.notify("AnimationComplete",t)))}),Promise.all(c)}function bF(e,t){return e.sortNodePosition(t)}function zF(e,t,n={}){e.notify("AnimationStart",t);let a;if(Array.isArray(t)){const r=t.map(o=>pC(e,o,n));a=Promise.all(r)}else if(typeof t=="string")a=pC(e,t,n);else{const r=typeof t=="function"?Lw(e,t,n.custom):t;a=Promise.all(_j(e,r,n))}return a.then(()=>{e.notify("AnimationComplete",t)})}const jF=wS.length;function Zj(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Zj(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<jF;n++){const a=wS[n],r=e.props[a];(bi(r)||r===!1)&&(t[a]=r)}return t}const VF=[...xS].reverse(),qF=xS.length;function TF(e){return t=>Promise.all(t.map(({animation:n,options:a})=>zF(e,n,a)))}function HF(e){let t=TF(e),n=qP(),a=!0;const r=l=>(d,h)=>{var u;const y=Lw(e,h,l==="exit"?(u=e.presenceContext)===null||u===void 0?void 0:u.custom:void 0);if(y){const{transition:m,transitionEnd:g,...M}=y;d={...d,...M,...g}}return d};function o(l){t=l(e)}function c(l){const{props:d}=e,h=Zj(e.parent)||{},u=[],y=new Set;let m={},g=1/0;for(let L=0;L<qF;L++){const k=VF[L],p=n[k],f=d[k]!==void 0?d[k]:h[k],x=bi(f),w=k===l?p.isActive:null;w===!1&&(g=L);let I=f===h[k]&&f!==d[k]&&x;if(I&&a&&e.manuallyAnimateOnMount&&(I=!1),p.protectedKeys={...m},!p.isActive&&w===null||!f&&!p.prevProp||xw(f)||typeof f=="boolean")continue;const A=DF(p.prevProp,f);let C=A||k===l&&p.isActive&&!I&&x||L>g&&x,H=!1;const V=Array.isArray(f)?f:[f];let ie=V.reduce(r(k),{});w===!1&&(ie={});const{prevResolvedValues:wt={}}=p,Gt={...wt,...ie},Ia=te=>{C=!0,y.has(te)&&(H=!0,y.delete(te)),p.needsAnimating[te]=!0;const b=e.getValue(te);b&&(b.liveStyle=!1)};for(const te in Gt){const b=ie[te],q=wt[te];if(m.hasOwnProperty(te))continue;let T=!1;iC(b)&&iC(q)?T=!ij(b,q):T=b!==q,T?b!=null?Ia(te):y.add(te):b!==void 0&&y.has(te)?Ia(te):p.protectedKeys[te]=!0}p.prevProp=f,p.prevResolvedValues=ie,p.isActive&&(m={...m,...ie}),a&&e.blockInitialAnimation&&(C=!1),C&&(!(I&&A)||H)&&u.push(...V.map(te=>({animation:te,options:{type:k}})))}if(y.size){const L={};y.forEach(k=>{const p=e.getBaseTarget(k),f=e.getValue(k);f&&(f.liveStyle=!0),L[k]=p??null}),u.push({animation:L})}let M=!!u.length;return a&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(M=!1),a=!1,M?t(u):Promise.resolve()}function s(l,d){var h;if(n[l].isActive===d)return Promise.resolve();(h=e.variantChildren)===null||h===void 0||h.forEach(y=>{var m;return(m=y.animationState)===null||m===void 0?void 0:m.setActive(l,d)}),n[l].isActive=d;const u=c(l);for(const y in n)n[y].protectedKeys={};return u}return{animateChanges:c,setActive:s,setAnimateFunction:o,getState:()=>n,reset:()=>{n=qP(),a=!0}}}function DF(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!ij(t,e):!1}function Xt(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function qP(){return{animate:Xt(!0),whileInView:Xt(),whileHover:Xt(),whileTap:Xt(),whileDrag:Xt(),whileFocus:Xt(),exit:Xt()}}class Wt{constructor(t){this.isMounted=!1,this.node=t}update(){}}class FF extends Wt{constructor(t){super(t),t.animationState||(t.animationState=HF(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();xw(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let RF=0;class BF extends Wt{constructor(){super(...arguments),this.id=RF++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const r=this.node.animationState.setActive("exit",!t);n&&!t&&r.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const EF={animation:{Feature:FF},exit:{Feature:BF}};function qi(e,t,n,a={passive:!0}){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n)}function Ui(e){return{point:{x:e.pageX,y:e.pageY}}}const OF=e=>t=>FS(t)&&e(t,Ui(t));function Ja(e,t,n,a){return qi(e,t,OF(n),a)}const TP=(e,t)=>Math.abs(e-t);function UF(e,t){const n=TP(e.x,t.x),a=TP(e.y,t.y);return Math.sqrt(n**2+a**2)}class Wj{constructor(t,n,{transformPagePoint:a,contextWindow:r,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=rL(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,m=UF(u.offset,{x:0,y:0})>=3;if(!y&&!m)return;const{point:g}=u,{timestamp:M}=le;this.history.push({...g,timestamp:M});const{onStart:L,onMove:k}=this.handlers;y||(L&&L(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),k&&k(this.lastMoveEvent,u)},this.handlePointerMove=(u,y)=>{this.lastMoveEvent=u,this.lastMoveEventInfo=iL(y,this.transformPagePoint),U.update(this.updatePoint,!0)},this.handlePointerUp=(u,y)=>{this.end();const{onEnd:m,onSessionEnd:g,resumeAnimation:M}=this.handlers;if(this.dragSnapToOrigin&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const L=rL(u.type==="pointercancel"?this.lastMoveEventInfo:iL(y,this.transformPagePoint),this.history);this.startEvent&&m&&m(u,L),g&&g(u,L)},!FS(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=a,this.contextWindow=r||window;const c=Ui(t),s=iL(c,this.transformPagePoint),{point:l}=s,{timestamp:d}=le;this.history=[{...l,timestamp:d}];const{onSessionStart:h}=n;h&&h(t,rL(s,this.history)),this.removeListeners=Oi(Ja(this.contextWindow,"pointermove",this.handlePointerMove),Ja(this.contextWindow,"pointerup",this.handlePointerUp),Ja(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Ot(this.updatePoint)}}function iL(e,t){return t?{point:t(e.point)}:e}function HP(e,t){return{x:e.x-t.x,y:e.y-t.y}}function rL({point:e},t){return{point:e,delta:HP(e,Gj(t)),offset:HP(e,NF(t)),velocity:_F(t,.1)}}function NF(e){return e[0]}function Gj(e){return e[e.length-1]}function _F(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,a=null;const r=Gj(e);for(;n>=0&&(a=e[n],!(r.timestamp-a.timestamp>yt(t)));)n--;if(!a)return{x:0,y:0};const o=pt(r.timestamp-a.timestamp);if(o===0)return{x:0,y:0};const c={x:(r.x-a.x)/o,y:(r.y-a.y)/o};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}const Kj=1e-4,ZF=1-Kj,WF=1+Kj,$j=.01,GF=0-$j,KF=0+$j;function Te(e){return e.max-e.min}function $F(e,t,n){return Math.abs(e-t)<=n}function DP(e,t,n,a=.5){e.origin=a,e.originPoint=Z(t.min,t.max,e.origin),e.scale=Te(n)/Te(t),e.translate=Z(n.min,n.max,e.origin)-e.originPoint,(e.scale>=ZF&&e.scale<=WF||isNaN(e.scale))&&(e.scale=1),(e.translate>=GF&&e.translate<=KF||isNaN(e.translate))&&(e.translate=0)}function ei(e,t,n,a){DP(e.x,t.x,n.x,a?a.originX:void 0),DP(e.y,t.y,n.y,a?a.originY:void 0)}function FP(e,t,n){e.min=n.min+t.min,e.max=e.min+Te(t)}function XF(e,t,n){FP(e.x,t.x,n.x),FP(e.y,t.y,n.y)}function RP(e,t,n){e.min=t.min-n.min,e.max=e.min+Te(t)}function ti(e,t,n){RP(e.x,t.x,n.x),RP(e.y,t.y,n.y)}function QF(e,{min:t,max:n},a){return t!==void 0&&e<t?e=a?Z(t,e,a.min):Math.max(e,t):n!==void 0&&e>n&&(e=a?Z(n,e,a.max):Math.min(e,n)),e}function BP(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function YF(e,{top:t,left:n,bottom:a,right:r}){return{x:BP(e.x,n,r),y:BP(e.y,t,a)}}function EP(e,t){let n=t.min-e.min,a=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,a]=[a,n]),{min:n,max:a}}function JF(e,t){return{x:EP(e.x,t.x),y:EP(e.y,t.y)}}function eR(e,t){let n=.5;const a=Te(e),r=Te(t);return r>a?n=va(t.min,t.max-a,e.min):a>r&&(n=va(e.min,e.max-r,t.min)),Mt(0,1,n)}function tR(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const kC=.35;function nR(e=kC){return e===!1?e=0:e===!0&&(e=kC),{x:OP(e,"left","right"),y:OP(e,"top","bottom")}}function OP(e,t,n){return{min:UP(e,t),max:UP(e,n)}}function UP(e,t){return typeof e=="number"?e:e[t]||0}const NP=()=>({translate:0,scale:1,origin:0,originPoint:0}),Kn=()=>({x:NP(),y:NP()}),_P=()=>({min:0,max:0}),Q=()=>({x:_P(),y:_P()});function Re(e){return[e("x"),e("y")]}function Xj({top:e,left:t,right:n,bottom:a}){return{x:{min:t,max:n},y:{min:e,max:a}}}function aR({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function iR(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),a=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:a.y,right:a.x}}function oL(e){return e===void 0||e===1}function fC({scale:e,scaleX:t,scaleY:n}){return!oL(e)||!oL(t)||!oL(n)}function Jt(e){return fC(e)||Qj(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Qj(e){return ZP(e.x)||ZP(e.y)}function ZP(e){return e&&e!=="0%"}function tw(e,t,n){const a=e-n,r=t*a;return n+r}function WP(e,t,n,a,r){return r!==void 0&&(e=tw(e,r,a)),tw(e,n,a)+t}function mC(e,t=0,n=1,a,r){e.min=WP(e.min,t,n,a,r),e.max=WP(e.max,t,n,a,r)}function Yj(e,{x:t,y:n}){mC(e.x,t.translate,t.scale,t.originPoint),mC(e.y,n.translate,n.scale,n.originPoint)}const GP=.999999999999,KP=1.0000000000001;function rR(e,t,n,a=!1){const r=n.length;if(!r)return;t.x=t.y=1;let o,c;for(let s=0;s<r;s++){o=n[s],c=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(a&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Xn(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),c&&(t.x*=c.x.scale,t.y*=c.y.scale,Yj(e,c)),a&&Jt(o.latestValues)&&Xn(e,o.latestValues))}t.x<KP&&t.x>GP&&(t.x=1),t.y<KP&&t.y>GP&&(t.y=1)}function $n(e,t){e.min=e.min+t,e.max=e.max+t}function $P(e,t,n,a,r=.5){const o=Z(e.min,e.max,r);mC(e,t,n,o,a)}function Xn(e,t){$P(e.x,t.x,t.scaleX,t.scale,t.originX),$P(e.y,t.y,t.scaleY,t.scale,t.originY)}function Jj(e,t){return Xj(iR(e.getBoundingClientRect(),t))}function oR(e,t,n){const a=Jj(e,n),{scroll:r}=t;return r&&($n(a.x,r.offset.x),$n(a.y,r.offset.y)),a}const eV=({current:e})=>e?e.ownerDocument.defaultView:null,cR=new WeakMap;class sR{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Q(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const r=h=>{const{dragSnapToOrigin:u}=this.getProps();u?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ui(h).point)},o=(h,u)=>{const{drag:y,dragPropagation:m,onDragStart:g}=this.getProps();if(y&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=tD(y),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Re(L=>{let k=this.getAxisMotionValue(L).get()||0;if(ot.test(k)){const{projection:p}=this.visualElement;if(p&&p.layout){const f=p.layout.layoutBox[L];f&&(k=Te(f)*(parseFloat(k)/100))}}this.originPoint[L]=k}),g&&U.postRender(()=>g(h,u)),cC(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},c=(h,u)=>{const{dragPropagation:y,dragDirectionLock:m,onDirectionLock:g,onDrag:M}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:L}=u;if(m&&this.currentDirection===null){this.currentDirection=lR(L),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",u.point,L),this.updateAxis("y",u.point,L),this.visualElement.render(),M&&M(h,u)},s=(h,u)=>this.stop(h,u),l=()=>Re(h=>{var u;return this.getAnimationState(h)==="paused"&&((u=this.getAxisMotionValue(h).animation)===null||u===void 0?void 0:u.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new Wj(t,{onSessionStart:r,onStart:o,onMove:c,onSessionEnd:s,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,contextWindow:eV(this.visualElement)})}stop(t,n){const a=this.isDragging;if(this.cancel(),!a)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:o}=this.getProps();o&&U.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,a){const{drag:r}=this.getProps();if(!a||!yr(t,r,this.currentDirection))return;const o=this.getAxisMotionValue(t);let c=this.originPoint[t]+a[t];this.constraints&&this.constraints[t]&&(c=QF(c,this.constraints[t],this.elastic[t])),o.set(c)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:a}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&Wn(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=YF(r.layoutBox,n):this.constraints=!1,this.elastic=nR(a),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Re(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=tR(r.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Wn(t))return!1;const a=t.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const o=oR(a,r.root,this.visualElement.getTransformPagePoint());let c=JF(r.layout.layoutBox,o);if(n){const s=n(aR(c));this.hasMutatedConstraints=!!s,s&&(c=Xj(s))}return c}startAnimation(t){const{drag:n,dragMomentum:a,dragElastic:r,dragTransition:o,dragSnapToOrigin:c,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},d=Re(h=>{if(!yr(h,n,this.currentDirection))return;let u=l&&l[h]||{};c&&(u={min:0,max:0});const y=r?200:1e6,m=r?40:1e7,g={type:"inertia",velocity:a?t[h]:0,bounceStiffness:y,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...o,...u};return this.startAxisValueAnimation(h,g)});return Promise.all(d).then(s)}startAxisValueAnimation(t,n){const a=this.getAxisMotionValue(t);return cC(this.visualElement,t),a.start($S(t,a,0,n,this.visualElement,!1))}stopAnimation(){Re(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Re(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,a=this.visualElement.getProps(),r=a[n];return r||this.visualElement.getValue(t,(a.initial?a.initial[t]:void 0)||0)}snapToCursor(t){Re(n=>{const{drag:a}=this.getProps();if(!yr(n,a,this.currentDirection))return;const{projection:r}=this.visualElement,o=this.getAxisMotionValue(n);if(r&&r.layout){const{min:c,max:s}=r.layout.layoutBox[n];o.set(t[n]-Z(c,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:a}=this.visualElement;if(!Wn(n)||!a||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Re(c=>{const s=this.getAxisMotionValue(c);if(s&&this.constraints!==!1){const l=s.get();r[c]=eR({min:l,max:l},this.constraints[c])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),Re(c=>{if(!yr(c,t,null))return;const s=this.getAxisMotionValue(c),{min:l,max:d}=this.constraints[c];s.set(Z(l,d,r[c]))})}addListeners(){if(!this.visualElement.current)return;cR.set(this.visualElement,this);const t=this.visualElement.current,n=Ja(t,"pointerdown",l=>{const{drag:d,dragListener:h=!0}=this.getProps();d&&h&&this.start(l)}),a=()=>{const{dragConstraints:l}=this.getProps();Wn(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,o=r.addEventListener("measure",a);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),U.read(a);const c=qi(window,"resize",()=>this.scalePositionWithinConstraints()),s=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:d})=>{this.isDragging&&d&&(Re(h=>{const u=this.getAxisMotionValue(h);u&&(this.originPoint[h]+=l[h].translate,u.set(u.get()+l[h].translate))}),this.visualElement.render())});return()=>{c(),n(),o(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:a=!1,dragPropagation:r=!1,dragConstraints:o=!1,dragElastic:c=kC,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:a,dragPropagation:r,dragConstraints:o,dragElastic:c,dragMomentum:s}}}function yr(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function lR(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class dR extends Wt{constructor(t){super(t),this.removeGroupControls=Ve,this.removeListeners=Ve,this.controls=new sR(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ve}unmount(){this.removeGroupControls(),this.removeListeners()}}const XP=e=>(t,n)=>{e&&U.postRender(()=>e(t,n))};class hR extends Wt{constructor(){super(...arguments),this.removePointerDownListener=Ve}onPointerDown(t){this.session=new Wj(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:eV(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:a,onPanEnd:r}=this.node.getProps();return{onSessionStart:XP(t),onStart:XP(n),onMove:a,onEnd:(o,c)=>{delete this.session,r&&U.postRender(()=>r(o,c))}}}mount(){this.removePointerDownListener=Ja(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const br={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function QP(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ha={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(j.test(e))e=parseFloat(e);else return e;const n=QP(e,t.target.x),a=QP(e,t.target.y);return`${n}% ${a}%`}},uR={correct:(e,{treeScale:t,projectionDelta:n})=>{const a=e,r=Ut.parse(e);if(r.length>5)return a;const o=Ut.createTransformer(e),c=typeof r[0]!="number"?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;r[0+c]/=s,r[1+c]/=l;const d=Z(s,l,.5);return typeof r[2+c]=="number"&&(r[2+c]/=d),typeof r[3+c]=="number"&&(r[3+c]/=d),o(r)}};class yR extends P.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:a,layoutId:r}=this.props,{projection:o}=t;TH(pR),o&&(n.group&&n.group.add(o),a&&a.register&&r&&a.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),br.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:a,drag:r,isPresent:o}=this.props,c=a.projection;return c&&(c.isPresent=o,r||t.layoutDependency!==n||n===void 0?c.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?c.promote():c.relegate()||U.postRender(()=>{const s=c.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),CS.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:a}=this.props,{projection:r}=t;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),a&&a.deregister&&a.deregister(r))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function tV(e){const[t,n]=Rz(),a=P.useContext(fS);return v.jsx(yR,{...e,layoutGroup:a,switchLayoutGroup:P.useContext(Zz),isPresent:t,safeToRemove:n})}const pR={borderRadius:{...Ha,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ha,borderTopRightRadius:Ha,borderBottomLeftRadius:Ha,borderBottomRightRadius:Ha,boxShadow:uR};function kR(e,t,n){const a=me(e)?e:ji(e);return a.start($S("",a,t,n)),a.animation}function fR(e){return e instanceof SVGElement&&e.tagName!=="svg"}const mR=(e,t)=>e.depth-t.depth;class vR{constructor(){this.children=[],this.isDirty=!1}add(t){RS(this.children,t),this.isDirty=!0}remove(t){BS(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(mR),this.isDirty=!1,this.children.forEach(t)}}function gR(e,t){const n=ct.now(),a=({timestamp:r})=>{const o=r-n;o>=t&&(Ot(a),e(o-t))};return U.read(a,!0),()=>Ot(a)}const nV=["TopLeft","TopRight","BottomLeft","BottomRight"],MR=nV.length,YP=e=>typeof e=="string"?parseFloat(e):e,JP=e=>typeof e=="number"||j.test(e);function xR(e,t,n,a,r,o){r?(e.opacity=Z(0,n.opacity!==void 0?n.opacity:1,wR(a)),e.opacityExit=Z(t.opacity!==void 0?t.opacity:1,0,LR(a))):o&&(e.opacity=Z(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,a));for(let c=0;c<MR;c++){const s=`border${nV[c]}Radius`;let l=eA(t,s),d=eA(n,s);if(l===void 0&&d===void 0)continue;l||(l=0),d||(d=0),l===0||d===0||JP(l)===JP(d)?(e[s]=Math.max(Z(YP(l),YP(d),a),0),(ot.test(d)||ot.test(l))&&(e[s]+="%")):e[s]=d}(t.rotate||n.rotate)&&(e.rotate=Z(t.rotate||0,n.rotate||0,a))}function eA(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const wR=aV(0,.5,xj),LR=aV(.5,.95,Ve);function aV(e,t,n){return a=>a<e?0:a>t?1:n(va(e,t,a))}function tA(e,t){e.min=t.min,e.max=t.max}function Fe(e,t){tA(e.x,t.x),tA(e.y,t.y)}function nA(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function aA(e,t,n,a,r){return e-=t,e=tw(e,1/n,a),r!==void 0&&(e=tw(e,1/r,a)),e}function CR(e,t=0,n=1,a=.5,r,o=e,c=e){if(ot.test(t)&&(t=parseFloat(t),t=Z(c.min,c.max,t/100)-c.min),typeof t!="number")return;let s=Z(o.min,o.max,a);e===o&&(s-=t),e.min=aA(e.min,t,n,s,r),e.max=aA(e.max,t,n,s,r)}function iA(e,t,[n,a,r],o,c){CR(e,t[n],t[a],t[r],t.scale,o,c)}const SR=["x","scaleX","originX"],IR=["y","scaleY","originY"];function rA(e,t,n,a){iA(e.x,t,SR,n?n.x:void 0,a?a.x:void 0),iA(e.y,t,IR,n?n.y:void 0,a?a.y:void 0)}function oA(e){return e.translate===0&&e.scale===1}function iV(e){return oA(e.x)&&oA(e.y)}function cA(e,t){return e.min===t.min&&e.max===t.max}function PR(e,t){return cA(e.x,t.x)&&cA(e.y,t.y)}function sA(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function rV(e,t){return sA(e.x,t.x)&&sA(e.y,t.y)}function lA(e){return Te(e.x)/Te(e.y)}function dA(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class AR{constructor(){this.members=[]}add(t){RS(this.members,t),t.scheduleRender()}remove(t){if(BS(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(r=>t===r);if(n===0)return!1;let a;for(let r=n;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1){a=o;break}}return a?(this.promote(a),!0):!1}promote(t,n){const a=this.lead;if(t!==a&&(this.prevLead=a,this.lead=t,t.show(),a)){a.instance&&a.scheduleRender(),t.scheduleRender(),t.resumeFrom=a,n&&(t.resumeFrom.preserveOpacity=!0),a.snapshot&&(t.snapshot=a.snapshot,t.snapshot.latestValues=a.animationValues||a.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:r}=t.options;r===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:a}=t;n.onExitComplete&&n.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function bR(e,t,n){let a="";const r=e.x.translate/t.x,o=e.y.translate/t.y,c=(n==null?void 0:n.z)||0;if((r||o||c)&&(a=`translate3d(${r}px, ${o}px, ${c}px) `),(t.x!==1||t.y!==1)&&(a+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:d,rotate:h,rotateX:u,rotateY:y,skewX:m,skewY:g}=n;d&&(a=`perspective(${d}px) ${a}`),h&&(a+=`rotate(${h}deg) `),u&&(a+=`rotateX(${u}deg) `),y&&(a+=`rotateY(${y}deg) `),m&&(a+=`skewX(${m}deg) `),g&&(a+=`skewY(${g}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return(s!==1||l!==1)&&(a+=`scale(${s}, ${l})`),a||"none"}const e1={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ua=typeof window<"u"&&window.MotionDebug!==void 0,cL=["","X","Y","Z"],zR={visibility:"hidden"},hA=1e3;let jR=0;function sL(e,t,n,a){const{latestValues:r}=t;r[e]&&(n[e]=r[e],t.setStaticValue(e,0),a&&(a[e]=0))}function oV(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=pj(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",U,!(r||o))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&oV(a)}function cV({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:a,resetTransform:r}){return class{constructor(c={},s=t==null?void 0:t()){this.id=jR++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ua&&(e1.totalNodes=e1.resolvedTargetDeltas=e1.recalculatedProjection=0),this.nodes.forEach(TR),this.nodes.forEach(BR),this.nodes.forEach(ER),this.nodes.forEach(HR),Ua&&window.MotionDebug.record(e1)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new vR)}addEventListener(c,s){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new ES),this.eventHandlers.get(c).add(s)}notifyListeners(c,...s){const l=this.eventHandlers.get(c);l&&l.notify(...s)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=fR(c),this.instance=c;const{layoutId:l,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(d||l)&&(this.isLayoutDirty=!0),e){let u;const y=()=>this.root.updateBlockedByResize=!1;e(c,()=>{this.root.updateBlockedByResize=!0,u&&u(),u=gR(y,250),br.hasAnimatedSinceResize&&(br.hasAnimatedSinceResize=!1,this.nodes.forEach(yA))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&h&&(l||d)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:y,hasRelativeTargetChanged:m,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||ZR,{onLayoutAnimationStart:L,onLayoutAnimationComplete:k}=h.getProps(),p=!this.targetLayout||!rV(this.targetLayout,g)||m,f=!y&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||f||y&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(u,f);const x={...TS(M,"layout"),onPlay:L,onComplete:k};(h.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x)}else y||yA(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ot(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(OR),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&oV(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const u=this.path[h];u.shouldResetTransform=!0,u.updateScroll("snapshot"),u.options.layoutRoot&&u.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(uA);return}this.isUpdating||this.nodes.forEach(FR),this.isUpdating=!1,this.nodes.forEach(RR),this.nodes.forEach(VR),this.nodes.forEach(qR),this.clearAllSnapshots();const s=ct.now();le.delta=Mt(0,1e3/60,s-le.timestamp),le.timestamp=s,le.isProcessing=!0,Yw.update.process(le),Yw.preRender.process(le),Yw.render.process(le),le.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,CS.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(DR),this.sharedNodes.forEach(UR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,U.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){U.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Q(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(s=!1),s){const l=a(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!iV(this.projectionDelta),l=this.getTransformTemplate(),d=l?l(this.latestValues,""):void 0,h=d!==this.prevTransformTemplateValue;c&&(s||Jt(this.latestValues)||h)&&(r(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return c&&(l=this.removeTransform(l)),WR(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:s}=this.options;if(!s)return Q();const l=s.measureViewportBox();if(!(((c=this.scroll)===null||c===void 0?void 0:c.wasRoot)||this.path.some(GR))){const{scroll:h}=this.root;h&&($n(l.x,h.offset.x),$n(l.y,h.offset.y))}return l}removeElementScroll(c){var s;const l=Q();if(Fe(l,c),!((s=this.scroll)===null||s===void 0)&&s.wasRoot)return l;for(let d=0;d<this.path.length;d++){const h=this.path[d],{scroll:u,options:y}=h;h!==this.root&&u&&y.layoutScroll&&(u.wasRoot&&Fe(l,c),$n(l.x,u.offset.x),$n(l.y,u.offset.y))}return l}applyTransform(c,s=!1){const l=Q();Fe(l,c);for(let d=0;d<this.path.length;d++){const h=this.path[d];!s&&h.options.layoutScroll&&h.scroll&&h!==h.root&&Xn(l,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),Jt(h.latestValues)&&Xn(l,h.latestValues)}return Jt(this.latestValues)&&Xn(l,this.latestValues),l}removeTransform(c){const s=Q();Fe(s,c);for(let l=0;l<this.path.length;l++){const d=this.path[l];if(!d.instance||!Jt(d.latestValues))continue;fC(d.latestValues)&&d.updateSnapshot();const h=Q(),u=d.measurePageBox();Fe(h,u),rA(s,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,h)}return Jt(this.latestValues)&&rA(s,this.latestValues),s}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==le.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var s;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==l;if(!(c||d&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:y}=this.options;if(!(!this.layout||!(u||y))){if(this.resolvedRelativeTargetAt=le.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Q(),this.relativeTargetOrigin=Q(),ti(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),Fe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Q(),this.targetWithTransforms=Q()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),XF(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Fe(this.target,this.layout.layoutBox),Yj(this.target,this.targetDelta)):Fe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Q(),this.relativeTargetOrigin=Q(),ti(this.relativeTargetOrigin,this.target,m.target),Fe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ua&&e1.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||fC(this.parent.latestValues)||Qj(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var c;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let d=!0;if((this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty)&&(d=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===le.timestamp&&(d=!1),d)return;const{layout:h,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||u))return;Fe(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,m=this.treeScale.y;rR(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=Q());const{target:g}=s;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(nA(this.prevProjectionDelta.x,this.projectionDelta.x),nA(this.prevProjectionDelta.y,this.projectionDelta.y)),ei(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==m||!dA(this.projectionDelta.x,this.prevProjectionDelta.x)||!dA(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),Ua&&e1.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var s;if((s=this.options.visualElement)===null||s===void 0||s.scheduleRender(),c){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Kn(),this.projectionDelta=Kn(),this.projectionDeltaWithTransform=Kn()}setAnimationOrigin(c,s=!1){const l=this.snapshot,d=l?l.latestValues:{},h={...this.latestValues},u=Kn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const y=Q(),m=l?l.source:void 0,g=this.layout?this.layout.source:void 0,M=m!==g,L=this.getStack(),k=!L||L.members.length<=1,p=!!(M&&!k&&this.options.crossfade===!0&&!this.path.some(_R));this.animationProgress=0;let f;this.mixTargetDelta=x=>{const w=x/1e3;pA(u.x,c.x,w),pA(u.y,c.y,w),this.setTargetDelta(u),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ti(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),NR(this.relativeTarget,this.relativeTargetOrigin,y,w),f&&PR(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||(f=Q()),Fe(f,this.relativeTarget)),M&&(this.animationValues=h,xR(h,d,this.latestValues,w,p,k)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ot(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=U.update(()=>{br.hasAnimatedSinceResize=!0,this.currentAnimation=kR(0,hA,{...c,onUpdate:s=>{this.mixTargetDelta(s),c.onUpdate&&c.onUpdate(s)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(hA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:s,target:l,layout:d,latestValues:h}=c;if(!(!s||!l||!d)){if(this!==c&&this.layout&&d&&sV(this.options.animationType,this.layout.layoutBox,d.layoutBox)){l=this.target||Q();const u=Te(this.layout.layoutBox.x);l.x.min=c.target.x.min,l.x.max=l.x.min+u;const y=Te(this.layout.layoutBox.y);l.y.min=c.target.y.min,l.y.max=l.y.min+y}Fe(s,l),Xn(s,h),ei(this.projectionDeltaWithTransform,this.layoutCorrected,s,h)}}registerSharedNode(c,s){this.sharedNodes.has(c)||this.sharedNodes.set(c,new AR),this.sharedNodes.get(c).add(s);const d=s.options.initialPromotionConfig;s.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(s):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var c;const{layoutId:s}=this.options;return s?((c=this.getStack())===null||c===void 0?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:s}=this.options;return s?(c=this.getStack())===null||c===void 0?void 0:c.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:s,preserveFollowOpacity:l}={}){const d=this.getStack();d&&d.promote(this,l),c&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let s=!1;const{latestValues:l}=c;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(s=!0),!s)return;const d={};l.z&&sL("z",c,d,this.animationValues);for(let h=0;h<cL.length;h++)sL(`rotate${cL[h]}`,c,d,this.animationValues),sL(`skew${cL[h]}`,c,d,this.animationValues);c.render();for(const h in d)c.setStaticValue(h,d[h]),this.animationValues&&(this.animationValues[h]=d[h]);c.scheduleRender()}getProjectionStyles(c){var s,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return zR;const d={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,d.opacity="",d.pointerEvents=Pr(c==null?void 0:c.pointerEvents)||"",d.transform=h?h(this.latestValues,""):"none",d;const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){const M={};return this.options.layoutId&&(M.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,M.pointerEvents=Pr(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!Jt(this.latestValues)&&(M.transform=h?h({},""):"none",this.hasProjected=!1),M}const y=u.animationValues||u.latestValues;this.applyTransformsToTarget(),d.transform=bR(this.projectionDeltaWithTransform,this.treeScale,y),h&&(d.transform=h(y,d.transform));const{x:m,y:g}=this.projectionDelta;d.transformOrigin=`${m.origin*100}% ${g.origin*100}% 0`,u.animationValues?d.opacity=u===this?(l=(s=y.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:d.opacity=u===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const M in Xx){if(y[M]===void 0)continue;const{correct:L,applyTo:k}=Xx[M],p=d.transform==="none"?y[M]:L(y[M],u);if(k){const f=k.length;for(let x=0;x<f;x++)d[k[x]]=p}else d[M]=p}return this.options.layoutId&&(d.pointerEvents=u===this?Pr(c==null?void 0:c.pointerEvents)||"":"none"),d}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var s;return(s=c.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(uA),this.root.sharedNodes.clear()}}}function VR(e){e.updateLayout()}function qR(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:r}=e.layout,{animationType:o}=e.options,c=n.source!==e.layout.source;o==="size"?Re(u=>{const y=c?n.measuredBox[u]:n.layoutBox[u],m=Te(y);y.min=a[u].min,y.max=y.min+m}):sV(o,n.layoutBox,a)&&Re(u=>{const y=c?n.measuredBox[u]:n.layoutBox[u],m=Te(a[u]);y.max=y.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[u].max=e.relativeTarget[u].min+m)});const s=Kn();ei(s,a,n.layoutBox);const l=Kn();c?ei(l,e.applyTransform(r,!0),n.measuredBox):ei(l,a,n.layoutBox);const d=!iV(s);let h=!1;if(!e.resumeFrom){const u=e.getClosestProjectingParent();if(u&&!u.resumeFrom){const{snapshot:y,layout:m}=u;if(y&&m){const g=Q();ti(g,n.layoutBox,y.layoutBox);const M=Q();ti(M,a,m.layoutBox),rV(g,M)||(h=!0),u.options.layoutRoot&&(e.relativeTarget=M,e.relativeTargetOrigin=g,e.relativeParent=u)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:l,layoutDelta:s,hasLayoutChanged:d,hasRelativeTargetChanged:h})}else if(e.isLead()){const{onExitComplete:a}=e.options;a&&a()}e.options.transition=void 0}function TR(e){Ua&&e1.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function HR(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function DR(e){e.clearSnapshot()}function uA(e){e.clearMeasurements()}function FR(e){e.isLayoutDirty=!1}function RR(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function yA(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function BR(e){e.resolveTargetDelta()}function ER(e){e.calcProjection()}function OR(e){e.resetSkewAndRotation()}function UR(e){e.removeLeadSnapshot()}function pA(e,t,n){e.translate=Z(t.translate,0,n),e.scale=Z(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function kA(e,t,n,a){e.min=Z(t.min,n.min,a),e.max=Z(t.max,n.max,a)}function NR(e,t,n,a){kA(e.x,t.x,n.x,a),kA(e.y,t.y,n.y,a)}function _R(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const ZR={duration:.45,ease:[.4,0,.1,1]},fA=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),mA=fA("applewebkit/")&&!fA("chrome/")?Math.round:Ve;function vA(e){e.min=mA(e.min),e.max=mA(e.max)}function WR(e){vA(e.x),vA(e.y)}function sV(e,t,n){return e==="position"||e==="preserve-aspect"&&!$F(lA(t),lA(n),.2)}function GR(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const KR=cV({attachResizeListener:(e,t)=>qi(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),lL={current:void 0},lV=cV({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!lL.current){const e=new KR({});e.mount(window),e.setOptions({layoutScroll:!0}),lL.current=e}return lL.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),$R={pan:{Feature:hR},drag:{Feature:dR,ProjectionNode:lV,MeasureLayout:tV}};function gA(e,t,n){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,o=a[r];o&&U.postRender(()=>o(t,Ui(t)))}class XR extends Wt{mount(){const{current:t}=this.node;t&&(this.unmount=XH(t,n=>(gA(this.node,n,"Start"),a=>gA(this.node,a,"End"))))}unmount(){}}class QR extends Wt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Oi(qi(this.node.current,"focus",()=>this.onFocus()),qi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function MA(e,t,n){const{props:a}=e;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),o=a[r];o&&U.postRender(()=>o(t,Ui(t)))}class YR extends Wt{mount(){const{current:t}=this.node;t&&(this.unmount=eD(t,n=>(MA(this.node,n,"Start"),(a,{success:r})=>MA(this.node,a,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const vC=new WeakMap,dL=new WeakMap,JR=e=>{const t=vC.get(e.target);t&&t(e)},eB=e=>{e.forEach(JR)};function tB({root:e,...t}){const n=e||document;dL.has(n)||dL.set(n,{});const a=dL.get(n),r=JSON.stringify(t);return a[r]||(a[r]=new IntersectionObserver(eB,{root:e,...t})),a[r]}function nB(e,t,n){const a=tB(t);return vC.set(e,n),a.observe(e),()=>{vC.delete(e),a.unobserve(e)}}const aB={some:0,all:1};class iB extends Wt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:a,amount:r="some",once:o}=t,c={root:n?n.current:void 0,rootMargin:a,threshold:typeof r=="number"?r:aB[r]},s=l=>{const{isIntersecting:d}=l;if(this.isInView===d||(this.isInView=d,o&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:h,onViewportLeave:u}=this.node.getProps(),y=d?h:u;y&&y(l)};return nB(this.node.current,c,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(rB(t,n))&&this.startObserver()}unmount(){}}function rB({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const oB={inView:{Feature:iB},tap:{Feature:YR},focus:{Feature:QR},hover:{Feature:XR}},cB={layout:{ProjectionNode:lV,MeasureLayout:tV}},gC={current:null},dV={current:!1};function sB(){if(dV.current=!0,!!gS)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>gC.current=e.matches;e.addListener(t),t()}else gC.current=!1}const lB=[...Hj,ke,Ut],dB=e=>lB.find(Tj(e)),xA=new WeakMap;function hB(e,t,n){for(const a in t){const r=t[a],o=n[a];if(me(r))e.addValue(a,r);else if(me(o))e.addValue(a,ji(r,{owner:e}));else if(o!==r)if(e.hasValue(a)){const c=e.getValue(a);c.liveStyle===!0?c.jump(r):c.hasAnimated||c.set(r)}else{const c=e.getStaticValue(a);e.addValue(a,ji(c!==void 0?c:r,{owner:e}))}}for(const a in n)t[a]===void 0&&e.removeValue(a);return t}const wA=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class uB{scrapeMotionValuesFromProps(t,n,a){return{}}constructor({parent:t,props:n,presenceContext:a,reducedMotionConfig:r,blockInitialAnimation:o,visualState:c},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=WS,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=ct.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,U.render(this.render,!1,!0))};const{latestValues:l,renderState:d,onUpdate:h}=c;this.onUpdate=h,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=a,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=s,this.blockInitialAnimation=!!o,this.isControllingVariants=ww(n),this.isVariantNode=Nz(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...y}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in y){const g=y[m];l[m]!==void 0&&me(g)&&g.set(l[m],!1)}}mount(t){this.current=t,xA.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,a)=>this.bindToMotionValue(a,n)),dV.current||sB(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:gC.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){xA.delete(this.current),this.projection&&this.projection.unmount(),Ot(this.notifyUpdate),Ot(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const a=Vn.has(t),r=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&U.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{r(),o(),c&&c(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ga){const n=ga[t];if(!n)continue;const{isEnabled:a,Feature:r}=n;if(!this.features[t]&&r&&a(this.props)&&(this.features[t]=new r(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Q()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let a=0;a<wA.length;a++){const r=wA[a];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const o="on"+r,c=t[o];c&&(this.propEventSubscriptions[r]=this.on(r,c))}this.prevMotionValues=hB(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const a=this.values.get(t);n!==a&&(a&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let a=this.values.get(t);return a===void 0&&n!==void 0&&(a=ji(n===null?void 0:n,{owner:this}),this.addValue(t,a)),a}readValue(t,n){var a;let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(a=this.getBaseTargetFromProps(this.props,t))!==null&&a!==void 0?a:this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(Vj(r)||Lj(r))?r=parseFloat(r):!dB(r)&&Ut.test(n)&&(r=bj(t,n)),this.setBaseTarget(t,me(r)?r.get():r)),me(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:a}=this.props;let r;if(typeof a=="string"||typeof a=="object"){const c=IS(this.props,a,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);c&&(r=c[t])}if(a&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!me(o)?o:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new ES),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class hV extends uB{constructor(){super(...arguments),this.KeyframeResolver=Dj}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:a}){delete n[t],delete a[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;me(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function yB(e){return window.getComputedStyle(e)}class pB extends hV{constructor(){super(...arguments),this.type="html",this.renderInstance=Yz}readValueFromInstance(t,n){if(Vn.has(n)){const a=ZS(n);return a&&a.default||0}else{const a=yB(t),r=($z(n)?a.getPropertyValue(n):a[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Jj(t,n)}build(t,n,a){bS(t,n,a.transformTemplate)}scrapeMotionValuesFromProps(t,n,a){return qS(t,n,a)}}class kB extends hV{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Q}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Vn.has(n)){const a=ZS(n);return a&&a.default||0}return n=Jz.has(n)?n:LS(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,a){return nj(t,n,a)}build(t,n,a){zS(t,n,this.isSVGTag,a.transformTemplate)}renderInstance(t,n,a,r){ej(t,n,a,r)}mount(t){this.isSVGTag=VS(t.tagName),super.mount(t)}}const fB=(e,t)=>SS(e)?new kB(t):new pB(t,{allowProjection:e!==P.Fragment}),mB=NH({...EF,...oB,...$R,...cB},fB),J=iH(mB);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vB={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gB=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),i=(e,t)=>{const n=P.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:c,className:s="",children:l,...d},h)=>P.createElement("svg",{ref:h,...vB,width:r,height:r,stroke:a,strokeWidth:c?Number(o)*24/Number(r):o,className:["lucide",`lucide-${gB(e)}`,s].join(" "),...d},[...t.map(([u,y])=>P.createElement(u,y)),...Array.isArray(l)?l:[l]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=i("AArrowDown",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 7v9",key:"pknjwm"}],["path",{d:"m14 12 4 4 4-4",key:"buelq4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=i("AArrowUp",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 16V7",key:"ty0viw"}],["path",{d:"m14 11 4-4 4 4",key:"1pu57t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=i("ALargeSmall",[["path",{d:"M21 14h-5",key:"1vh23k"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16",key:"1wh10o"}],["path",{d:"M4.5 13h6",key:"dfilno"}],["path",{d:"m3 16 4.5-9 4.5 9",key:"2dxa0e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=i("Accessibility",[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=i("ActivitySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7",key:"15hlnc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=i("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=i("AirVent",[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"larmp2"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12",key:"1bo8pg"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5",key:"t9h90c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=i("Airplay",[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["polygon",{points:"12 15 17 21 7 21 12 15",key:"1sy95i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=i("AlarmClockCheck",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=i("AlarmClockMinus",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=i("AlarmClockOff",[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26",key:"3on8tj"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15",key:"15ghsc"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.26 18.67 4 21",key:"yzmioq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M4 4 2 6",key:"1ycko6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=i("AlarmClockPlus",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=i("AlarmClock",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M12 9v4l2 2",key:"1c63tq"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=i("AlarmSmoke",[["path",{d:"M4 8a2 2 0 0 1-2-2V3h20v3a2 2 0 0 1-2 2Z",key:"2c4fvq"}],["path",{d:"m19 8-.8 3c-.1.6-.6 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L5 8",key:"1vrndv"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5",key:"1o3eny"}],["path",{d:"M11 21c0-2.5 2-2.5 2-5",key:"1sicvv"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5",key:"i3w1gp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=i("Album",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3",key:"1wcwz3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=i("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=i("AlertOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=i("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=i("AlignCenterHorizontal",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",key:"11f1s0"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",key:"t14dx9"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",key:"1w07xs"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1",key:"1apec2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=i("AlignCenterVertical",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4",key:"14d6g8"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4",key:"1e2lrw"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1",key:"1fkdwx"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1",key:"1euafb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=i("AlignCenter",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"17",x2:"7",y1:"12",y2:"12",key:"rsh8ii"}],["line",{x1:"19",x2:"5",y1:"18",y2:"18",key:"1t0tuv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=i("AlignEndHorizontal",[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2",key:"z5wdxg"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2",key:"um7a8w"}],["path",{d:"M22 22H2",key:"19qnx5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=i("AlignEndVertical",[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2",key:"10wcwx"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2",key:"4p5bwg"}],["path",{d:"M22 22V2",key:"12ipfv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=i("AlignHorizontalDistributeCenter",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M17 22v-5",key:"4b6g73"}],["path",{d:"M17 7V2",key:"hnrr36"}],["path",{d:"M7 22v-3",key:"1r4jpn"}],["path",{d:"M7 5V2",key:"liy1u9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=i("AlignHorizontalDistributeEnd",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M10 2v20",key:"uyc634"}],["path",{d:"M20 2v20",key:"1tx262"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=i("AlignHorizontalDistributeStart",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M4 2v20",key:"gtpd5x"}],["path",{d:"M14 2v20",key:"tg6bpw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=i("AlignHorizontalJustifyCenter",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=i("AlignHorizontalJustifyEnd",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2",key:"1ht384"}],["path",{d:"M22 2v20",key:"40qfg1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=i("AlignHorizontalJustifyStart",[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2",key:"hsirpf"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=i("AlignHorizontalSpaceAround",[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2",key:"yn7j0q"}],["path",{d:"M4 22V2",key:"tsjzd3"}],["path",{d:"M20 22V2",key:"1bnhr8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=i("AlignHorizontalSpaceBetween",[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2",key:"j77dae"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2",key:"bq30hj"}],["path",{d:"M3 2v20",key:"1d2pfg"}],["path",{d:"M21 2v20",key:"p059bm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=i("AlignJustify",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["line",{x1:"3",x2:"21",y1:"18",y2:"18",key:"kwyyxn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=i("AlignLeft",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18",key:"1awlsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=i("AlignRight",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}],["line",{x1:"21",x2:"7",y1:"18",y2:"18",key:"1g9eri"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=i("AlignStartHorizontal",[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2",key:"1n4dg1"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2",key:"17khns"}],["path",{d:"M22 2H2",key:"fhrpnj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=i("AlignStartVertical",[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2",key:"lpm2y7"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2",key:"rdj6ps"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=i("AlignVerticalDistributeCenter",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M22 7h-5",key:"o2endc"}],["path",{d:"M7 7H1",key:"105l6j"}],["path",{d:"M22 17h-3",key:"1lwga1"}],["path",{d:"M5 17H2",key:"1gx9xc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=i("AlignVerticalDistributeEnd",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=i("AlignVerticalDistributeStart",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M2 4h20",key:"mda7wb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=i("AlignVerticalJustifyCenter",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=i("AlignVerticalJustifyEnd",[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2",key:"4l4tp2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 22h20",key:"272qi7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=i("AlignVerticalJustifyStart",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2",key:"13squh"}],["path",{d:"M2 2h20",key:"1ennik"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=i("AlignVerticalSpaceAround",[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2",key:"b1zbii"}],["path",{d:"M22 20H2",key:"1p1f7z"}],["path",{d:"M22 4H2",key:"1b7qnq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=i("AlignVerticalSpaceBetween",[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2",key:"1w91an"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2",key:"17wqzy"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M2 3h20",key:"91anmk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=i("Ambulance",[["path",{d:"M10 10H6",key:"1bsnug"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",key:"lrkjwd"}],["path",{d:"M8 8v4",key:"1fwk8c"}],["path",{d:"M9 18h6",key:"x1upvd"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=i("Ampersand",[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",key:"1o9ehi"}],["path",{d:"M16 12h3",key:"4uvgyw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=i("Ampersands",[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"12lh1k"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"173c68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=i("Anchor",[["path",{d:"M12 22V8",key:"qkxhtm"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}],["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=i("Angry",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["path",{d:"M7.5 8 10 9",key:"olxxln"}],["path",{d:"m14 9 2.5-1",key:"1j6cij"}],["path",{d:"M9 10h0",key:"1vxvly"}],["path",{d:"M15 10h0",key:"1j6oav"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=i("Annoyed",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M14 9h2",key:"116p9w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=i("Antenna",[["path",{d:"M2 12 7 2",key:"117k30"}],["path",{d:"m7 12 5-10",key:"1tvx22"}],["path",{d:"m12 12 5-10",key:"ev1o1a"}],["path",{d:"m17 12 5-10",key:"1e4ti3"}],["path",{d:"M4.5 7h15",key:"vlsxkz"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=i("Anvil",[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4",key:"1hjpb6"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z",key:"1qn45f"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1",key:"1fi4x8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=i("Aperture",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=i("AppWindow",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=i("Apple",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=i("ArchiveRestore",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=i("ArchiveX",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"m9.5 17 5-5",key:"nakeu6"}],["path",{d:"m9.5 12 5 5",key:"1hccrj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=i("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=i("AreaChart",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M7 12v5h12V8l-5 5-4-4Z",key:"zxz28u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=i("Armchair",[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",key:"1e01m0"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=i("ArrowBigDownDash",[["path",{d:"M15 5H9",key:"1tp3ed"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z",key:"ncdc4b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=i("ArrowBigDown",[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z",key:"1thax2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=i("ArrowBigLeftDash",[["path",{d:"M19 15V9",key:"1hci5f"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z",key:"16tjna"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=i("ArrowBigLeft",[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z",key:"lbrdak"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=i("ArrowBigRightDash",[["path",{d:"M5 9v6",key:"158jrl"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z",key:"1sg2xn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=i("ArrowBigRight",[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z",key:"7fvt9c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=i("ArrowBigUpDash",[["path",{d:"M9 19h6",key:"456am0"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z",key:"1r2uve"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=i("ArrowBigUp",[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z",key:"1x06kx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=i("ArrowDown01",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=i("ArrowDown10",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=i("ArrowDownAZ",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=i("ArrowDownCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=i("ArrowDownFromLine",[["path",{d:"M19 3H5",key:"1236rx"}],["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m6 15 6 6 6-6",key:"h15q88"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=i("ArrowDownLeftFromCircle",[["path",{d:"M2 12a10 10 0 1 1 10 10",key:"1yn6ov"}],["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"M8 22H2v-6",key:"sulq54"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=i("ArrowDownLeftFromSquare",[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6",key:"14qz4y"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=i("ArrowDownLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 8-8 8",key:"166keh"}],["path",{d:"M16 16H8V8",key:"1w2ppm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=i("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=i("ArrowDownNarrowWide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=i("ArrowDownRightFromCircle",[["path",{d:"M12 22a10 10 0 1 1 10-10",key:"130bv5"}],["path",{d:"M22 22 12 12",key:"131aw7"}],["path",{d:"M22 16v6h-6",key:"1gvm70"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=i("ArrowDownRightFromSquare",[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m21 21-9-9",key:"1et2py"}],["path",{d:"M21 15v6h-6",key:"1jko0i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=i("ArrowDownRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"M16 8v8H8",key:"1lbpgo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=i("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=i("ArrowDownSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=i("ArrowDownToDot",[["path",{d:"M12 2v14",key:"jyx4ut"}],["path",{d:"m19 9-7 7-7-7",key:"1oe3oy"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=i("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=i("ArrowDownUp",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=i("ArrowDownWideNarrow",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=i("ArrowDownZA",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=i("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=i("ArrowLeftCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=i("ArrowLeftFromLine",[["path",{d:"m9 6-6 6 6 6",key:"7v63n9"}],["path",{d:"M3 12h14",key:"13k4hi"}],["path",{d:"M21 19V5",key:"b4bplr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=i("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=i("ArrowLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}],["path",{d:"M16 12H8",key:"1fr5h0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=i("ArrowLeftToLine",[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=i("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=i("ArrowRightCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=i("ArrowRightFromLine",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M21 12H7",key:"13ipq5"}],["path",{d:"m15 18 6-6-6-6",key:"6tx3qv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=i("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=i("ArrowRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=i("ArrowRightToLine",[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=i("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=i("ArrowUp01",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=i("ArrowUp10",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=i("ArrowUpAZ",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=i("ArrowUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=i("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=i("ArrowUpFromDot",[["path",{d:"m5 9 7-7 7 7",key:"1hw5ic"}],["path",{d:"M12 16V2",key:"ywoabb"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=i("ArrowUpFromLine",[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=i("ArrowUpLeftFromCircle",[["path",{d:"M2 8V2h6",key:"hiwtdz"}],["path",{d:"m2 2 10 10",key:"1oh8rs"}],["path",{d:"M12 2A10 10 0 1 1 2 12",key:"rrk4fa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=i("ArrowUpLeftFromSquare",[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6",key:"14mv1t"}],["path",{d:"m3 3 9 9",key:"rks13r"}],["path",{d:"M3 9V3h6",key:"ira0h2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=i("ArrowUpLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8h8",key:"19xb1h"}],["path",{d:"M16 16 8 8",key:"1qdy8n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=i("ArrowUpLeft",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=i("ArrowUpNarrowWide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=i("ArrowUpRightFromCircle",[["path",{d:"M22 12A10 10 0 1 1 12 2",key:"1fm58d"}],["path",{d:"M22 2 12 12",key:"yg2myt"}],["path",{d:"M16 2h6v6",key:"zan5cs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=i("ArrowUpRightFromSquare",[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",key:"y09zxi"}],["path",{d:"m21 3-9 9",key:"mpx6sq"}],["path",{d:"M15 3h6v6",key:"1q9fwt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=i("ArrowUpRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 8h8v8",key:"b65dnt"}],["path",{d:"m8 16 8-8",key:"13b9ih"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=i("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=i("ArrowUpSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=i("ArrowUpToLine",[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=i("ArrowUpWideNarrow",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h4",key:"1krc32"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=i("ArrowUpZA",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=i("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=i("ArrowsUpFromLine",[["path",{d:"m4 6 3-3 3 3",key:"9aidw8"}],["path",{d:"M7 17V3",key:"19qxw1"}],["path",{d:"m14 6 3-3 3 3",key:"6iy689"}],["path",{d:"M17 17V3",key:"o0fmgi"}],["path",{d:"M4 21h16",key:"1h09gz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=i("AsteriskSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8.5 14 7-4",key:"12hpby"}],["path",{d:"m8.5 10 7 4",key:"wwy2dy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=i("Asterisk",[["path",{d:"M12 6v12",key:"1vza4d"}],["path",{d:"M17.196 9 6.804 15",key:"1ah31z"}],["path",{d:"m6.804 9 10.392 6",key:"1b6pxd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=i("AtSign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=i("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=i("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=i("AudioWaveform",[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=i("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=i("Axe",[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9",key:"csbz4o"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z",key:"113wfo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=i("Axis3d",[["path",{d:"M4 4v16h16",key:"1s015l"}],["path",{d:"m4 20 7-7",key:"17qe9y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=i("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=i("Backpack",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",key:"wvr1b5"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5",key:"xk3gvk"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=i("BadgeAlert",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=i("BadgeCent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4",key:"2eqtx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=i("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=i("BadgeDollarSign",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=i("BadgeEuro",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M7 12h5",key:"gblrwe"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=i("BadgeHelp",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17",key:"io3f8k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=i("BadgeIndianRupee",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 8h8",key:"1bis0t"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8",key:"nu2bwa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=i("BadgeInfo",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12",key:"1y1yb1"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8",key:"110wyk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=i("BadgeJapaneseYen",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 8 3 3v7",key:"17yadx"}],["path",{d:"m12 11 3-3",key:"p4cfq1"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M9 16h6",key:"8wimt3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=i("BadgeMinus",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=i("BadgePercent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=i("BadgePlus",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16",key:"10p56q"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=i("BadgePoundSterling",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 12h4",key:"qz6y1c"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0",key:"3mlbjk"}],["path",{d:"M8 16h7",key:"sbedsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=i("BadgeRussianRuble",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9 16h5",key:"1syiyw"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9",key:"1ge9c1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=i("BadgeSwissFranc",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M11 17V8h4",key:"1bfq6y"}],["path",{d:"M11 12h3",key:"2eqnfz"}],["path",{d:"M9 16h4",key:"1skf3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=i("BadgeX",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=i("Badge",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=i("BaggageClaim",[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",key:"4irg2o"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",key:"14fcyx"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1",key:"o6oiis"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"9",cy:"20",r:"2",key:"e5v82j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=i("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=i("Banana",[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",key:"1cscit"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",key:"1y1nbv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=i("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=i("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=i("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=i("BarChart4",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17V5",key:"sfb6ij"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=i("BarChartBig",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["rect",{width:"4",height:"7",x:"7",y:"10",rx:"1",key:"14u6mf"}],["rect",{width:"4",height:"12",x:"15",y:"5",rx:"1",key:"b3pek6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=i("BarChartHorizontalBig",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["rect",{width:"12",height:"4",x:"7",y:"5",rx:"1",key:"936jl1"}],["rect",{width:"7",height:"4",x:"7",y:"13",rx:"1",key:"jqfkpy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=i("BarChartHorizontal",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M7 16h8",key:"srdodz"}],["path",{d:"M7 11h12",key:"127s9w"}],["path",{d:"M7 6h3",key:"w9rmul"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=i("BarChart",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=i("Barcode",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=i("Baseline",[["path",{d:"M4 20h16",key:"14thso"}],["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=i("Bath",[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"1r8yf5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7",key:"h5g8z4"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21",key:"16jp00"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21",key:"1pxrnk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=i("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=i("BatteryFull",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13",key:"c6fn6x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=i("BatteryLow",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=i("BatteryMedium",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=i("BatteryWarning",[["path",{d:"M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2",key:"1if82c"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2",key:"2pdlyl"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"10",x2:"10",y1:"7",y2:"13",key:"1uzyus"}],["line",{x1:"10",x2:"10",y1:"17",y2:"17.01",key:"1y8k4g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=i("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=i("Beaker",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=i("BeanOff",[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",key:"bq3udt"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66",key:"17ccse"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",key:"18zqgq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=i("Bean",[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",key:"1tvzk7"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28",key:"2cyri2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=i("BedDouble",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=i("BedSingle",[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",key:"1wm6mi"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",key:"4k93s5"}],["path",{d:"M3 18h18",key:"1h113x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=i("Bed",[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=i("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=i("Beer",[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1",key:"1yp76v"}],["path",{d:"M9 12v6",key:"1u1cab"}],["path",{d:"M13 12v6",key:"1sugkk"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",key:"1510fo"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"19jb7n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=i("BellDot",[["path",{d:"M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3",key:"xcehk"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["circle",{cx:"18",cy:"8",r:"3",key:"1g0gzu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=i("BellElectric",[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9",key:"xve1fh"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2",key:"17f3te"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6",key:"n7odp6"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=i("BellMinus",[["path",{d:"M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2",key:"eck70s"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M15 8h6",key:"8ybuxh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=i("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=i("BellPlus",[["path",{d:"M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7",key:"guizqy"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M18 5v6",key:"g5ayrv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=i("BellRing",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=i("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=i("BetweenHorizontalEnd",[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1",key:"11xb64"}],["path",{d:"m22 15-3-3 3-3",key:"26chmm"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1",key:"k6ky7n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=i("BetweenHorizontalStart",[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1",key:"pkso9a"}],["path",{d:"m2 9 3 3-3 3",key:"1agib5"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1",key:"1q5fc1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=i("BetweenVerticalEnd",[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1",key:"1fdu0f"}],["path",{d:"m9 22 3-3 3 3",key:"17z65a"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1",key:"1squn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=i("BetweenVerticalStart",[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1",key:"1fjrkv"}],["path",{d:"m15 2-3 3-3-3",key:"1uh6eb"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1",key:"w3fjg8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=i("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=i("Binary",[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=i("Biohazard",[["circle",{cx:"12",cy:"11.9",r:"2",key:"e8h31w"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6",key:"17bolr"}],["path",{d:"m8.9 10.1 1.4.8",key:"15ezny"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",key:"wtwa5u"}],["path",{d:"m15.1 10.1-1.4.8",key:"1r0b28"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",key:"m7qszh"}],["path",{d:"M12 13.9v1.6",key:"zfyyim"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0",key:"1bi9q0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5",key:"1rhjqw"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5",key:"8gsud3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=i("Bird",[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=i("Bitcoin",[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=i("Blend",[["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["circle",{cx:"15",cy:"15",r:"7",key:"19ennj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=i("Blinds",[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=i("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=i("BluetoothConnected",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12",key:"1rsjjs"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12",key:"11yl8c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=i("BluetoothOff",[["path",{d:"m17 17-5 5V12l-5 5",key:"v5aci6"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5",key:"1kddfz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=i("BluetoothSearching",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66",key:"k8tn1j"}],["path",{d:"M18 12h.01",key:"yjnet6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=i("Bluetooth",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=i("Bold",[["path",{d:"M14 12a4 4 0 0 0 0-8H6v8",key:"v2sylx"}],["path",{d:"M15 20a4 4 0 0 0 0-8H6v8Z",key:"1ef5ya"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=i("Bolt",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=i("Bomb",[["circle",{cx:"11",cy:"13",r:"9",key:"hd149"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",key:"jp4j1b"}],["path",{d:"m22 2-1.5 1.5",key:"ay92ug"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=i("Bone",[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",key:"w610uw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=i("BookA",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m8 13 4-7 4 7",key:"4rari8"}],["path",{d:"M9.1 11h5.7",key:"1gkovt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=i("BookAudio",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M8 8v3",key:"1qzp49"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8v3",key:"gejaml"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=i("BookCheck",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m9 9.5 2 2 4-4",key:"1dth82"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=i("BookCopy",[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11",key:"spzkk5"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1",key:"16gqf9"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12",key:"1owzki"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=i("BookDashed",[["path",{d:"M20 22h-2",key:"1rpnb6"}],["path",{d:"M20 15v2h-2",key:"fph276"}],["path",{d:"M4 19.5V15",key:"6gr39e"}],["path",{d:"M20 8v3",key:"deu0bs"}],["path",{d:"M18 2h2v2",key:"180o53"}],["path",{d:"M4 11V9",key:"v3xsx8"}],["path",{d:"M12 2h2",key:"cvn524"}],["path",{d:"M12 22h2",key:"kn7ki6"}],["path",{d:"M12 17h2",key:"13u4lk"}],["path",{d:"M8 22H6.5a2.5 2.5 0 0 1 0-5H8",key:"fiseg2"}],["path",{d:"M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8",key:"wywhs9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=i("BookDown",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3 3 3-3",key:"zt5b4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=i("BookHeadphones",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2",key:"1vsqkj"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=i("BookHeart",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z",key:"1dlbw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=i("BookImage",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"10",cy:"8",r:"2",key:"2qkj4p"}],["path",{d:"m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17",key:"160say"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=i("BookKey",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14",key:"1gfsgw"}],["path",{d:"M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20",key:"zb0ngp"}],["circle",{cx:"14",cy:"8",r:"2",key:"u49eql"}],["path",{d:"m20 2-4.5 4.5",key:"1sppr8"}],["path",{d:"m19 3 1 1",key:"ze14oc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=i("BookLock",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10",key:"18wgow"}],["path",{d:"M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20",key:"dpch1j"}],["rect",{width:"8",height:"5",x:"12",y:"6",rx:"1",key:"9nqwug"}],["path",{d:"M18 6V4a2 2 0 1 0-4 0v2",key:"1aquzs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=i("BookMarked",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["polyline",{points:"10 2 10 10 13 7 16 10 16 2",key:"13o6vz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=i("BookMinus",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=i("BookOpenCheck",[["path",{d:"M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z",key:"1i8u0n"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3",key:"jb5l51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=i("BookOpenText",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}],["path",{d:"M6 8h2",key:"30oboj"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M16 12h2",key:"7q9ll5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=i("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=i("BookPlus",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=i("BookText",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M8 7h6",key:"1f0q6e"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=i("BookType",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M16 8V6H8v2",key:"x8j6u4"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M10 13h4",key:"ytezjc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=i("BookUp2",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2",key:"1lorq7"}],["path",{d:"M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"1nfm9i"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=i("BookUp",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=i("BookUser",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=i("BookX",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m14.5 7-5 5",key:"dy991v"}],["path",{d:"m9.5 7 5 5",key:"s45iea"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=i("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=i("BookmarkCheck",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=i("BookmarkMinus",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=i("BookmarkPlus",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=i("BookmarkX",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=i("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=i("BoomBox",[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"vvzvr1"}],["path",{d:"M8 8v1",key:"xcqmfk"}],["path",{d:"M12 8v1",key:"1rj8u4"}],["path",{d:"M16 8v1",key:"1q12zr"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2",key:"igpb89"}],["circle",{cx:"8",cy:"15",r:"2",key:"fa4a8s"}],["circle",{cx:"16",cy:"15",r:"2",key:"14c3ya"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=i("BotMessageSquare",[["path",{d:"M12 6V2H8",key:"1155em"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",key:"w2lp3e"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M9 11v2",key:"1ueba0"}],["path",{d:"M15 11v2",key:"i11awn"}],["path",{d:"M20 12h2",key:"1q8mjw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=i("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=i("BoxSelect",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=i("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=i("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=i("Braces",[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=i("Brackets",[["path",{d:"M16 3h3v18h-3",key:"1yor1f"}],["path",{d:"M8 21H5V3h3",key:"1qrfwo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=i("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=i("BrainCog",[["path",{d:"M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5",key:"1kgmhc"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m15.7 10.4-.9.4",key:"ayzo6p"}],["path",{d:"m9.2 13.2-.9.4",key:"1uzb3g"}],["path",{d:"m13.6 15.7-.4-.9",key:"11ifqf"}],["path",{d:"m10.8 9.2-.4-.9",key:"1pmk2v"}],["path",{d:"m15.7 13.5-.9-.4",key:"7ng02m"}],["path",{d:"m9.2 10.9-.9-.4",key:"1x66zd"}],["path",{d:"m10.5 15.7.4-.9",key:"3js94g"}],["path",{d:"m13.1 9.2.4-.9",key:"18n7mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=i("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=i("BrickWall",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 9v6",key:"199k2o"}],["path",{d:"M16 15v6",key:"8rj2es"}],["path",{d:"M16 3v6",key:"1j6rpj"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 15v6",key:"1stoo3"}],["path",{d:"M8 3v6",key:"vlvjmk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=i("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=i("BringToFront",[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2",key:"yj20xf"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2",key:"1ltk23"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2",key:"1q24h9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=i("Brush",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=i("BugOff",[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2",key:"vl8zik"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3",key:"1ou0bd"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13",key:"1njkjs"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=i("BugPlay",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5",key:"1tjixy"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m12 12 8 5-8 5Z",key:"1ydf81"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=i("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=i("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=i("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=i("BusFront",[["path",{d:"M4 6 2 7",key:"1mqr15"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"m22 7-2-1",key:"1umjhc"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 21v-2",key:"sqyl04"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=i("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=i("CableCar",[["path",{d:"M10 3h.01",key:"lbucoy"}],["path",{d:"M14 2h.01",key:"1k8aa1"}],["path",{d:"m2 9 20-5",key:"1kz0j5"}],["path",{d:"M12 12V6.5",key:"1vbrij"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3",key:"if91er"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=i("Cable",[["path",{d:"M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z",key:"1s6oa5"}],["path",{d:"M3 5V3",key:"1k5hjh"}],["path",{d:"M7 5V3",key:"1t1388"}],["path",{d:"M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9",key:"1ytv72"}],["path",{d:"M17 21v-2",key:"ds4u3f"}],["path",{d:"M21 21v-2",key:"eo0ou"}],["path",{d:"M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z",key:"sdz6o8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=i("CakeSlice",[["circle",{cx:"9",cy:"7",r:"2",key:"1305pl"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6",key:"xle13f"}],["path",{d:"M16 13H3",key:"1wpj08"}],["path",{d:"M16 17H3",key:"3lvfcd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=i("Cake",[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h0.01",key:"hsw7lv"}],["path",{d:"M12 4h0.01",key:"1e3d8f"}],["path",{d:"M17 4h0.01",key:"p7cxgy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=i("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=i("CalendarCheck2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"bce9hv"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=i("CalendarCheck",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=i("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=i("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=i("CalendarFold",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z",key:"kg77oy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4",key:"1gnbqr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=i("CalendarHeart",[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7",key:"136lmk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1t7hil"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=i("CalendarMinus2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=i("CalendarMinus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=i("CalendarOff",[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",key:"16swn3"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5",key:"yhw86o"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h7",key:"1wap6i"}],["path",{d:"M21 10h-5.5",key:"quycpq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=i("CalendarPlus2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}],["path",{d:"M12 14v4",key:"1thi36"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=i("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=i("CalendarRange",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=i("CalendarSearch",[["path",{d:"M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.5",key:"1e09qw"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h18",key:"8toen8"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=i("CalendarX2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m17 22 5-5",key:"1k6ppv"}],["path",{d:"m17 17 5 5",key:"p7ous7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=i("CalendarX",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m14 14-4 4",key:"rymu2i"}],["path",{d:"m10 14 4 4",key:"3sz06r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=i("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=i("CameraOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",key:"qmtpty"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",key:"1ufyfc"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88",key:"11zox6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=i("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=i("CandlestickChart",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v18h18",key:"1s2lah"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=i("CandyCane",[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",key:"isaq8g"}],["path",{d:"M17.75 7 15 2.1",key:"12x7e8"}],["path",{d:"M10.9 4.8 13 9",key:"100a87"}],["path",{d:"m7.9 9.7 2 4.4",key:"ntfhaj"}],["path",{d:"M4.9 14.7 7 18.9",key:"1x43jy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=i("CandyOff",[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1",key:"1ff4ui"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657",key:"1sbrv4"}],["path",{d:"M14 16.5V14",key:"1maf8j"}],["path",{d:"M14 6.5v1.843",key:"1a6u6t"}],["path",{d:"M10 10v7.5",key:"80pj65"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1",key:"11a9mt"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1",key:"3mjmon"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=i("Candy",[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z",key:"ue6khb"}],["path",{d:"M14 6.5v10",key:"5xnk7c"}],["path",{d:"M10 7.5v10",key:"1uew51"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1",key:"b9cp6k"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1",key:"5lney8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=i("CaptionsOff",[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5",key:"jqtk4d"}],["path",{d:"M17 11h-.5",key:"1961ue"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2",key:"1keqsi"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7 11h4",key:"1o1z6v"}],["path",{d:"M7 15h2.5",key:"1ina1g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=i("Captions",[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2",key:"12ruh7"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4",key:"1ueiar"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=i("CarFront",[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=i("CarTaxiFront",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=i("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=i("Caravan",[["rect",{width:"4",height:"4",x:"2",y:"9",key:"1vcvhd"}],["rect",{width:"4",height:"10",x:"10",y:"9",key:"1b7ev2"}],["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",key:"19jm3t"}],["circle",{cx:"8",cy:"19",r:"2",key:"t8fc5s"}],["path",{d:"M10 19h12v-2",key:"1yu2qx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=i("Carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=i("CaseLower",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=i("CaseSensitive",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["circle",{cx:"18",cy:"12",r:"3",key:"1kchzo"}],["path",{d:"M21 9v6",key:"anns31"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=i("CaseUpper",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4",key:"1sqfas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=i("CassetteTape",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["circle",{cx:"8",cy:"10",r:"2",key:"1xl4ub"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"10",r:"2",key:"r14t7q"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",key:"l01ucn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=i("Cast",[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",key:"3zrzxg"}],["path",{d:"M2 12a9 9 0 0 1 8 8",key:"g6cvee"}],["path",{d:"M2 16a5 5 0 0 1 4 4",key:"1y1dii"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20",key:"xu2jvo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=i("Castle",[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"109fe4"}],["path",{d:"M18 11V4H6v7",key:"mon5oj"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4",key:"jdggr9"}],["path",{d:"M22 11V9",key:"3zbp94"}],["path",{d:"M2 11V9",key:"1x5rnq"}],["path",{d:"M6 4V2",key:"1rsq15"}],["path",{d:"M18 4V2",key:"1jsdo1"}],["path",{d:"M10 4V2",key:"75d9ly"}],["path",{d:"M14 4V2",key:"8nj3z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=i("Cat",[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=i("Cctv",[["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M16.75 12H22l-3.5 7-3.09-4.32",key:"1h9vqe"}],["path",{d:"M18 9.5l-4 8-10.39-5.2a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3Z",key:"q5d122"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15",key:"19bib8"}],["path",{d:"M2 21v-4",key:"l40lih"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=i("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=i("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=i("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=i("CheckSquare2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=i("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=i("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=i("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=i("Cherry",[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"cvxqlc"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"1ostrc"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",key:"hqx58h"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",key:"eykp1o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=i("ChevronDownCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=i("ChevronDownSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=i("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=i("ChevronFirst",[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=i("ChevronLast",[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=i("ChevronLeftCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=i("ChevronLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=i("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=i("ChevronRightCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=i("ChevronRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=i("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=i("ChevronUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=i("ChevronUpSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=i("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=i("ChevronsDownUp",[["path",{d:"m7 20 5-5 5 5",key:"13a0gw"}],["path",{d:"m7 4 5 5 5-5",key:"1kwcof"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=i("ChevronsDown",[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=i("ChevronsLeftRight",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=i("ChevronsLeft",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=i("ChevronsRightLeft",[["path",{d:"m20 17-5-5 5-5",key:"30x0n2"}],["path",{d:"m4 17 5-5-5-5",key:"16spf4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=i("ChevronsRight",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=i("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=i("ChevronsUp",[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=i("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=i("Church",[["path",{d:"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2",key:"gy5gyo"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 22V5l-6-3-6 3v17",key:"1hsnhq"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M10 9h4",key:"u4k05v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=i("CigaretteOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M12 12H2v4h14",key:"91gsaq"}],["path",{d:"M22 12v4",key:"142cbu"}],["path",{d:"M18 12h-.5",key:"12ymji"}],["path",{d:"M7 12v4",key:"jqww69"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=i("Cigarette",[["path",{d:"M18 12H2v4h16",key:"2rt1hm"}],["path",{d:"M22 12v4",key:"142cbu"}],["path",{d:"M7 12v4",key:"jqww69"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=i("CircleDashed",[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=i("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=i("CircleDotDashed",[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0",key:"1qdqn0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7",key:"1bq7p6"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8",key:"1rlaqf"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69",key:"1xk03u"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0",key:"l7re25"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7",key:"1v18p6"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8",key:"xdo6bj"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69",key:"1jjmaz"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=i("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=i("CircleEllipsis",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=i("CircleEqual",[["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=i("CircleFadingPlus",[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=i("CircleOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65",key:"1pfsoa"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92",key:"1ablyi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=i("CircleSlash2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=i("CircleSlash",[["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=i("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=i("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=i("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=i("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=i("Citrus",[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",key:"4ite01"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34",key:"1gxipu"}],["path",{d:"m14 10-5.5 5.5",key:"92pfem"}],["path",{d:"M14 17.85V10H6.15",key:"xqmtsk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=i("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=i("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=i("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=i("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=i("ClipboardMinus",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=i("ClipboardPaste",[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z",key:"1pp7kr"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",key:"2ik1ml"}],["path",{d:"m17 10 4 4-4 4",key:"vp2hj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=i("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z",key:"yg2pdb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=i("ClipboardPen",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M10.4 12.6a2 2 0 0 1 3 3L8 21l-4 1 1-4Z",key:"hnx206"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5",key:"cereej"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2",key:"5ua5vh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=i("ClipboardPlus",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}],["path",{d:"M12 17v-6",key:"1y8rbf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=i("ClipboardType",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 12v-1h6v1",key:"iehl6m"}],["path",{d:"M11 17h2",key:"12w5me"}],["path",{d:"M12 11v6",key:"1bwqyc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=i("ClipboardX",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m15 11-6 6",key:"1toa9n"}],["path",{d:"m9 11 6 6",key:"wlibny"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=i("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=i("Clock1",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 8",key:"12zbmj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=i("Clock10",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 10",key:"atfzqc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=i("Clock11",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 8",key:"l5bg6f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=i("Clock12",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12",key:"1fub01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=i("Clock2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 10",key:"1g230d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=i("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=i("Clock4",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=i("Clock5",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 16",key:"1pcbox"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=i("Clock6",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 12 16.5",key:"hb2qv6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=i("Clock7",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 16",key:"ka3394"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=i("Clock8",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 14",key:"tmc9b4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=i("Clock9",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 7.5 12",key:"1k60p0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=i("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=i("CloudCog",[["circle",{cx:"12",cy:"17",r:"3",key:"1spfwm"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",key:"zaobp"}],["path",{d:"m15.7 18.4-.9-.3",key:"4qxpbn"}],["path",{d:"m9.2 15.9-.9-.3",key:"17q7o2"}],["path",{d:"m10.6 20.7.3-.9",key:"1pf4s2"}],["path",{d:"m13.1 14.2.3-.9",key:"1mnuqm"}],["path",{d:"m13.6 20.7-.4-1",key:"1jpd1m"}],["path",{d:"m10.8 14.3-.4-1",key:"17ugyy"}],["path",{d:"m8.3 18.6 1-.4",key:"s42vdx"}],["path",{d:"m14.7 15.8 1-.4",key:"2wizun"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=i("CloudDrizzle",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 19v1",key:"1dk2by"}],["path",{d:"M8 14v1",key:"84yxot"}],["path",{d:"M16 19v1",key:"v220m7"}],["path",{d:"M16 14v1",key:"g12gj6"}],["path",{d:"M12 21v1",key:"q8vafk"}],["path",{d:"M12 16v1",key:"1mx6rx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=i("CloudFog",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=i("CloudHail",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v2",key:"a1is7l"}],["path",{d:"M8 14v2",key:"1e9m6t"}],["path",{d:"M16 20h.01",key:"xwek51"}],["path",{d:"M8 20h.01",key:"1vjney"}],["path",{d:"M12 16v2",key:"z66u1j"}],["path",{d:"M12 22h.01",key:"1urd7a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=i("CloudLightning",[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=i("CloudMoonRain",[["path",{d:"M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197",key:"u82z8m"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=i("CloudMoon",[["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z",key:"p44pc9"}],["path",{d:"M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197",key:"16nha0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=i("CloudOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",key:"yfwify"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",key:"jlfiyv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=i("CloudRainWind",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m9.2 22 3-7",key:"sb5f6j"}],["path",{d:"m9 13-3 7",key:"500co5"}],["path",{d:"m17 13-3 7",key:"8t2fiy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=i("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=i("CloudSnow",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M8 19h.01",key:"puxtts"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M12 21h.01",key:"h35vbk"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M16 19h.01",key:"1vcnzz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=i("CloudSunRain",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=i("CloudSun",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=i("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=i("Cloudy",[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"gqqjvc"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5",key:"1p2s76"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=i("Clover",[["path",{d:"M16.17 7.83 2 22",key:"t58vo8"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12",key:"17k36q"}],["path",{d:"m7.83 7.83 8.34 8.34",key:"1d7sxk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=i("Club",[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",key:"27yuqz"}],["path",{d:"M12 17.66L12 22",key:"ogfahf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=i("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=i("CodeSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 14 2-2-2-2",key:"m075q2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=i("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=i("Codepen",[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",key:"srzb37"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5",key:"1t73f2"}],["polyline",{points:"22 8.5 12 15.5 2 8.5",key:"ajlxae"}],["polyline",{points:"2 15.5 12 8.5 22 15.5",key:"susrui"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5",key:"2cldga"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=i("Codesandbox",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21",key:"fabo96"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12",key:"z377f1"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79",key:"9nrev1"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96",key:"1180pa"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12",key:"3z3uq6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=i("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=i("Cog",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=i("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=i("Columns2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=i("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=i("Columns4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7.5 3v18",key:"w0wo6v"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M16.5 3v18",key:"10tjh1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=i("Combine",[["rect",{width:"8",height:"8",x:"2",y:"2",rx:"2",key:"z1hh3n"}],["path",{d:"M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"83orz6"}],["path",{d:"M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"k86dmt"}],["path",{d:"M10 18H5c-1.7 0-3-1.3-3-3v-1",key:"6vokjl"}],["polyline",{points:"7 21 10 18 7 15",key:"1k02g0"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=i("Command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=i("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=i("Component",[["path",{d:"M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z",key:"1kciei"}],["path",{d:"m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z",key:"1ome0g"}],["path",{d:"M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z",key:"vbupec"}],["path",{d:"m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z",key:"16csic"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=i("Computer",[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=i("ConciergeBell",[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z",key:"1pvr1r"}],["path",{d:"M20 16a8 8 0 1 0-16 0",key:"1pa543"}],["path",{d:"M12 4v4",key:"1bq03y"}],["path",{d:"M10 4h4",key:"1xpv9s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=i("Cone",[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",key:"53pte7"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3",key:"1ji25f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=i("Construction",[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=i("Contact2",[["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=i("Contact",[["path",{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2",key:"1mghuy"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["circle",{cx:"12",cy:"10",r:"2",key:"1yojzk"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=i("Container",[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=i("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=i("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=i("CookingPot",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"u0tga0"}],["path",{d:"m4 8 16-4",key:"16g0ng"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",key:"12cejc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=i("CopyCheck",[["path",{d:"m12 15 2 2 4-4",key:"2c609p"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=i("CopyMinus",[["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=i("CopyPlus",[["line",{x1:"15",x2:"15",y1:"12",y2:"18",key:"1p7wdc"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=i("CopySlash",[["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=i("CopyX",[["line",{x1:"12",x2:"18",y1:"12",y2:"18",key:"1rg63v"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=i("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=i("Copyleft",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66",key:"1sveal"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=i("Copyright",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66",key:"1i56pz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=i("CornerDownLeft",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=i("CornerDownRight",[["polyline",{points:"15 10 20 15 15 20",key:"1q7qjw"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=i("CornerLeftDown",[["polyline",{points:"14 15 9 20 4 15",key:"nkc4i"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12",key:"nbpdq2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=i("CornerLeftUp",[["polyline",{points:"14 9 9 4 4 9",key:"m9oyvo"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4",key:"1blwi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=i("CornerRightDown",[["polyline",{points:"10 15 15 20 20 15",key:"axus6l"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12",key:"wcbgct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=i("CornerRightUp",[["polyline",{points:"10 9 15 4 20 9",key:"1lr6px"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4",key:"1plgdj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=i("CornerUpLeft",[["polyline",{points:"9 14 4 9 9 4",key:"881910"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=i("CornerUpRight",[["polyline",{points:"15 14 20 9 15 4",key:"1tbx3s"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12",key:"1lu4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=i("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=i("CreativeCommons",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1ss3eq"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1od56t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=i("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=i("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=i("Crop",[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=i("Cross",[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",key:"1t5g7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=i("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=i("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=i("Cuboid",[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",key:"1u2ovd"}],["path",{d:"M10 22v-8L2.25 9.15",key:"11pn4q"}],["path",{d:"m10 14 11.77-6.87",key:"1kt1wh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=i("CupSoda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=i("Currency",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6",key:"1jkytn"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6",key:"14zfjt"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18",key:"iusuec"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18",key:"yj2dd7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=i("Cylinder",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=i("DatabaseBackup",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69",key:"1ui2ym"}],["path",{d:"M21 9.3V5",key:"6k6cib"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88",key:"i62tjy"}],["path",{d:"M12 12v4h4",key:"1bxaet"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",key:"1f4ei9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=i("DatabaseZap",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84",key:"14ibmq"}],["path",{d:"M21 5V8",key:"1marbg"}],["path",{d:"M21 12L18 17H22L19 22",key:"zafso"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87",key:"1y4wr8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=i("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=i("Delete",[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",key:"1oy587"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15",key:"1olkx5"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15",key:"1n50pc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=i("Dessert",[["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",key:"lfo06j"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0",key:"12xarc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=i("Diameter",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86",key:"xr8kdq"}],["path",{d:"m6.41 6.41 11.18 11.18",key:"uhpjw7"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86",key:"cldpwv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=i("Diamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=i("Dice1",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=i("Dice2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M9 15h.01",key:"fzyn71"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=i("Dice3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=i("Dice4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=i("Dice5",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=i("Dice6",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=i("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=i("Diff",[["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=i("Disc2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=i("Disc3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=i("DiscAlbum",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"5",key:"nd82uf"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=i("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=i("DivideCircle",[["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=i("DivideSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=i("Divide",[["circle",{cx:"12",cy:"6",r:"1",key:"1bh7o1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["circle",{cx:"12",cy:"18",r:"1",key:"lqb9t5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=i("DnaOff",[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5",key:"sxiaad"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5",key:"yn4bs1"}],["path",{d:"m17 6-2.5-2.5",key:"5cdfhj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"m7 18 2.5 2.5",key:"16tu1a"}],["path",{d:"m3.5 14.5.5.5",key:"hapbhd"}],["path",{d:"m20 9 .5.5",key:"1n7z02"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=i("Dna",[["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m17 6-2.5-2.5",key:"5cdfhj"}],["path",{d:"m14 8-1-1",key:"15nbz5"}],["path",{d:"m7 18 2.5 2.5",key:"16tu1a"}],["path",{d:"m3.5 14.5.5.5",key:"hapbhd"}],["path",{d:"m20 9 .5.5",key:"1n7z02"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m10 16 1.5 1.5",key:"11lckj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=i("Dog",[["path",{d:"M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5",key:"19br0u"}],["path",{d:"M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"11n1an"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306",key:"wsu29d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=i("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=i("Donut",[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",key:"19sr3x"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=i("DoorClosed",[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",key:"36qu9e"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M14 12v.01",key:"xfcn54"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=i("DoorOpen",[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14",key:"hrm0s9"}],["path",{d:"M2 20h3",key:"1gaodv"}],["path",{d:"M13 20h9",key:"s90cdi"}],["path",{d:"M10 12v.01",key:"vx6srw"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",key:"199qr4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=i("DotSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=i("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=i("DownloadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m8 17 4 4 4-4",key:"1ul180"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=i("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=i("DraftingCompass",[["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}],["path",{d:"m3 21 8.02-14.26",key:"1ssaw4"}],["path",{d:"m12.99 6.74 1.93 3.44",key:"iwagvd"}],["path",{d:"M19 12c-3.87 4-10.13 4-14 0",key:"1tsu18"}],["path",{d:"m21 21-2.16-3.84",key:"vylbct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=i("Drama",[["path",{d:"M10 11h.01",key:"d2at3l"}],["path",{d:"M14 6h.01",key:"k028ub"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6.5 13.1h.01",key:"1748ia"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3",key:"172yzv"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0",key:"1obv0w"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",key:"rqjl8i"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4",key:"1mr6wy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=i("Dribbble",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=i("Drill",[["path",{d:"M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z",key:"b6nnkj"}],["path",{d:"M18 6h4",key:"66u95g"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3",key:"105ega"}],["path",{d:"m5 10-2 8",key:"xt2lic"}],["path",{d:"M12 10v3c0 .6-.4 1-1 1H8",key:"mwpjnk"}],["path",{d:"m7 18 2-8",key:"1bzku2"}],["path",{d:"M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z",key:"117add"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=i("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=i("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=i("Drum",[["path",{d:"m2 2 8 8",key:"1v6059"}],["path",{d:"m22 2-8 8",key:"173r8a"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5",key:"liohsx"}],["path",{d:"M7 13.4v7.9",key:"1yi6u9"}],["path",{d:"M12 14v8",key:"1tn2tj"}],["path",{d:"M17 13.4v7.9",key:"eqz2v3"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9",key:"1750ul"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=i("Drumstick",[["path",{d:"M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z",key:"1o96s0"}],["path",{d:"m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16",key:"14vv5h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=i("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=i("EarOff",[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",key:"1qngmn"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14",key:"b06bma"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",key:"g10hsz"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",key:"ygzou7"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=i("Ear",[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",key:"1dfaln"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",key:"1qnva7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=i("EarthLock",[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3",key:"w732o8"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"f02343"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13",key:"zjsr6q"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=i("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=i("Eclipse",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a7 7 0 1 0 10 10",key:"1yuj32"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=i("EggFried",[["circle",{cx:"11.5",cy:"12.5",r:"3.5",key:"1cl1mi"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",key:"165ef9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=i("EggOff",[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",key:"6et380"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",key:"gcdc3f"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=i("Egg",[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",key:"1c39pg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=i("EqualNot",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=i("EqualSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=i("Equal",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=i("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=i("Euro",[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=i("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=i("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=i("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=i("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=i("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=i("Factory",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=i("Fan",[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=i("FastForward",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=i("Feather",[["path",{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z",key:"u4sw5n"}],["line",{x1:"16",x2:"2",y1:"8",y2:"22",key:"1c47m2"}],["line",{x1:"17.5",x2:"9",y1:"15",y2:"15",key:"2fj3pr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=i("Fence",[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"1n2rgs"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M6 18h4",key:"12yh4b"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"3ha7mj"}],["path",{d:"M14 8h4",key:"1r8wg2"}],["path",{d:"M14 18h4",key:"1t3kbu"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"dfd4e2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=i("FerrisWheel",[["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m6.8 15-3.5 2",key:"hjy98k"}],["path",{d:"m20.7 7-3.5 2",key:"f08gto"}],["path",{d:"M6.8 9 3.3 7",key:"1aevh4"}],["path",{d:"m20.7 17-3.5-2",key:"1liqo3"}],["path",{d:"m9 22 3-8 3 8",key:"wees03"}],["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0",key:"dhzg4g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=i("Figma",[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=i("FileArchive",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v18",key:"1oywqq"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"20",r:"2",key:"1xzdoj"}],["path",{d:"M10 7V6",key:"dljcrl"}],["path",{d:"M10 12v-1",key:"v7bkov"}],["path",{d:"M10 18v-2",key:"1cjy8d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=i("FileAudio2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"3",cy:"17",r:"1",key:"vo6nti"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3",key:"1ggdre"}],["circle",{cx:"9",cy:"17",r:"1",key:"bc1fq4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=i("FileAudio",[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"rslqgf"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",key:"9f7x3i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=i("FileAxis3d",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 18 4-4",key:"12zab0"}],["path",{d:"M8 10v8h8",key:"tlaukw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=i("FileBadge2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5",key:"14xlky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=i("FileBadge",[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"12ixgl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"u0c8gj"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5",key:"5gm2nr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=i("FileBarChart2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-1",key:"zg0ygc"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"M16 18v-3",key:"j5jt4h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=i("FileBarChart",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M12 18v-4",key:"q1q25u"}],["path",{d:"M16 18v-6",key:"15y0np"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=i("FileBox",[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"16lz6z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z",key:"99pj1s"}],["path",{d:"M7 17v5",key:"1yj1jh"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8",key:"1yk8tc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=i("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=i("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=i("FileClock",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=i("FileCode2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=i("FileCode",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=i("FileCog",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"6",cy:"14",r:"3",key:"a1xfv6"}],["path",{d:"M6 10v1",key:"xs0f9j"}],["path",{d:"M6 17v1",key:"idyhc0"}],["path",{d:"M10 14H9",key:"m5fm2q"}],["path",{d:"M3 14H2",key:"19ot09"}],["path",{d:"m9 11-.88.88",key:"lhul2b"}],["path",{d:"M3.88 16.12 3 17",key:"169z9n"}],["path",{d:"m9 17-.88-.88",key:"5io96w"}],["path",{d:"M3.88 11.88 3 11",key:"1ynhy1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=i("FileDiff",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=i("FileDigit",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2",key:"jm304g"}],["path",{d:"M10 12h2v6",key:"12zw74"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=i("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=i("FileHeart",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1c1fso"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=i("FileImage",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=i("FileInput",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 15h10",key:"jfw4w8"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=i("FileJson2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"fq0c9t"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"4gibmv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=i("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=i("FileKey2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6",key:"rc0qvx"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"m10 10-4.5 4.5",key:"7fwrp6"}],["path",{d:"m9 11 1 1",key:"wa6s5q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=i("FileKey",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"10",cy:"16",r:"2",key:"4ckbqe"}],["path",{d:"m16 10-4.5 4.5",key:"7p3ebg"}],["path",{d:"m15 11 1 1",key:"1bsyx3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=i("FileLineChart",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17",key:"zz7yod"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=i("FileLock2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1",key:"jmtmu2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1",key:"10y5wo"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2",key:"1pdxzg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=i("FileLock",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1",key:"3yr8at"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2",key:"j4i8d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=i("FileMinus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=i("FileMinus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=i("FileMusic",[["circle",{cx:"14",cy:"16",r:"2",key:"1bzzi3"}],["circle",{cx:"6",cy:"18",r:"2",key:"1fncim"}],["path",{d:"M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5",key:"skc018"}],["path",{d:"M8 18v-7.7L16 9v7",key:"1oie6o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=i("FileOutput",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=i("FilePenLine",[["path",{d:"m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",key:"h0fsxq"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z",key:"dyo8mm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=i("FilePen",[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10",key:"x7tsz2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z",key:"o3xyfb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=i("FilePieChart",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 11.5a6.02 6.02 0 1 0 8.5 8.5",key:"unkkko"}],["path",{d:"M14 16c0-3.3-2.7-6-6-6v6Z",key:"bym002"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=i("FilePlus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=i("FilePlus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=i("FileQuestion",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"1umxtm"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=i("FileScan",[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4",key:"1rdf37"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 14a2 2 0 0 0-2 2",key:"ceaadl"}],["path",{d:"M20 14a2 2 0 0 1 2 2",key:"1ny6zw"}],["path",{d:"M20 22a2 2 0 0 0 2-2",key:"1l9q4k"}],["path",{d:"M16 22a2 2 0 0 1-2-2",key:"1wqh5n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=i("FileSearch2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=i("FileSearch",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"1vg67v"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=i("FileSliders",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M10 11v2",key:"1s651w"}],["path",{d:"M8 17h8",key:"wh5c61"}],["path",{d:"M14 16v2",key:"12fp5e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=i("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=i("FileStack",[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2",key:"9rb54x"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z",key:"1059l0"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15",key:"16874u"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11",key:"k2ox98"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=i("FileSymlink",[["path",{d:"m10 18 3-3-3-3",key:"18f6ys"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"50q2rw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=i("FileTerminal",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 16 2-2-2-2",key:"10vzyd"}],["path",{d:"M12 18h4",key:"1wd2n7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=i("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=i("FileType2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 13v-1h6v1",key:"1dh9dg"}],["path",{d:"M5 12v6",key:"150t9c"}],["path",{d:"M4 18h2",key:"1xrofg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=i("FileType",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M11 18h2",key:"12mj7e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=i("FileUp",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=i("FileVideo2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1",key:"1a6c1e"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5",key:"t7cp39"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=i("FileVideo",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 11 5 3-5 3v-6Z",key:"7ntvm4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=i("FileVolume2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3",key:"1fccat"}],["path",{d:"M15 12a5 5 0 0 1 0 6",key:"ps46cm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=i("FileVolume",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"1vg67v"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m7 10-3 2H2v4h2l3 2Z",key:"fiq8l4"}],["path",{d:"M11 11a5 5 0 0 1 0 6",key:"193qb2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=i("FileWarning",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=i("FileX2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 12.5-5 5",key:"b853mi"}],["path",{d:"m3 12.5 5 5",key:"1qls4r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=i("FileX",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=i("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=i("Files",[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2",key:"x099mo"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",key:"18t6ie"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8",key:"1nja0z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=i("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=i("FilterX",[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055",key:"1fi1da"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=i("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=i("Fingerprint",[["path",{d:"M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",key:"1jc9o5"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",key:"1mxgy1"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",key:"1fgabc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=i("FireExtinguisher",[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5",key:"sqyvz"}],["path",{d:"M9 18h8",key:"i7pszb"}],["path",{d:"M18 3h-3",key:"7idoqj"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11",key:"1v5je3"}],["path",{d:"M5 13h4",key:"svpcxo"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z",key:"vsjego"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=i("FishOff",[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",key:"1j1hse"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",key:"1q46z8"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",key:"1407gh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=i("FishSymbol",[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8",key:"h4oh4o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=i("Fish",[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=i("FlagOff",[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11",key:"9rwyz9"}],["path",{d:"M4 22V4",key:"1plyxx"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2",key:"1myooe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=i("FlagTriangleLeft",[["path",{d:"M17 22V2L7 7l10 5",key:"1rmf0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=i("FlagTriangleRight",[["path",{d:"M7 22V2l10 5-10 5",key:"17n18y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=i("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=i("FlameKindling",[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",key:"1ir223"}],["path",{d:"m5 22 14-4",key:"1brv4h"}],["path",{d:"m5 18 14 4",key:"lgyyje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=i("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=i("FlashlightOff",[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4",key:"1r120k"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1",key:"dz1920"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6",key:"bi1vpe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=i("Flashlight",[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",key:"1orkel"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6",key:"1z11jq"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12",key:"1f4yc1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=i("FlaskConicalOff",[["path",{d:"M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542",key:"59ek9y"}],["path",{d:"M10 2v2.343",key:"15t272"}],["path",{d:"M14 2v6.343",key:"sxr80q"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h9",key:"t5njau"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=i("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=i("FlaskRound",[["path",{d:"M10 2v7.31",key:"5d1hyh"}],["path",{d:"M14 9.3V1.99",key:"14k4l0"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14 9.3a6.5 6.5 0 1 1-4 0",key:"1r8fvy"}],["path",{d:"M5.52 16h12.96",key:"46hh1i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=i("FlipHorizontal2",[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=i("FlipHorizontal",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",key:"1i73f7"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=i("FlipVertical2",[["path",{d:"m17 3-5 5-5-5h10",key:"1ftt6x"}],["path",{d:"m17 21-5-5-5 5h10",key:"1m0wmu"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=i("FlipVertical",[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",key:"14bfxa"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",key:"14rx03"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=i("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=i("Flower",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",key:"14wa3c"}],["path",{d:"M12 7.5V9",key:"1oy5b0"}],["path",{d:"M7.5 12H9",key:"eltsq1"}],["path",{d:"M16.5 12H15",key:"vk5kw4"}],["path",{d:"M12 16.5V15",key:"k7eayi"}],["path",{d:"m8 8 1.88 1.88",key:"nxy4qf"}],["path",{d:"M14.12 9.88 16 8",key:"1lst6k"}],["path",{d:"m8 16 1.88-1.88",key:"h2eex1"}],["path",{d:"M14.12 14.12 16 16",key:"uqkrx3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=i("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=i("FoldHorizontal",[["path",{d:"M2 12h6",key:"1wqiqv"}],["path",{d:"M22 12h-6",key:"1eg9hc"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 9-3 3 3 3",key:"12ol22"}],["path",{d:"m5 15 3-3-3-3",key:"1kdhjc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=i("FoldVertical",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3-3-3 3",key:"e37ymu"}],["path",{d:"m15 5-3 3-3-3",key:"19d6lf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=i("FolderArchive",[["circle",{cx:"15",cy:"19",r:"2",key:"u2pros"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",key:"1jj40k"}],["path",{d:"M15 11v-1",key:"cntcp"}],["path",{d:"M15 17v-2",key:"1279jj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=i("FolderCheck",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=i("FolderClock",[["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",key:"1urifu"}],["path",{d:"M16 14v2l1 1",key:"xth2jh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=i("FolderClosed",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=i("FolderCog",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3",key:"1k8050"}],["path",{d:"m21.7 19.4-.9-.3",key:"1qgwi9"}],["path",{d:"m15.2 16.9-.9-.3",key:"1t7mvx"}],["path",{d:"m16.6 21.7.3-.9",key:"1j67ps"}],["path",{d:"m19.1 15.2.3-.9",key:"18r7jp"}],["path",{d:"m19.6 21.7-.4-1",key:"z2vh2"}],["path",{d:"m16.8 15.3-.4-1",key:"1ei7r6"}],["path",{d:"m14.3 19.6 1-.4",key:"11sv9r"}],["path",{d:"m20.7 16.8 1-.4",key:"19m87a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=i("FolderDot",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"1",key:"49l61u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=i("FolderDown",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=i("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=i("FolderGit",[["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M14 13h3",key:"1dgedf"}],["path",{d:"M7 13h3",key:"1pygq7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=i("FolderHeart",[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",key:"6hud8k"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z",key:"vgq86i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=i("FolderInput",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=i("FolderKanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=i("FolderKey",[["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",key:"3hgo9p"}],["path",{d:"m22 14-4.5 4.5",key:"1ef6z8"}],["path",{d:"m21 15 1 1",key:"1ejcpy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=i("FolderLock",[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1",key:"19aais"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",key:"1w6v7t"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2",key:"pwaxnr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=i("FolderMinus",[["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=i("FolderOpenDot",[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",key:"1nmvlm"}],["circle",{cx:"14",cy:"15",r:"1",key:"1gm4qj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=i("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=i("FolderOutput",[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",key:"1yk7aj"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m5 10-3 3 3 3",key:"1r8ie0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=i("FolderPen",[["path",{d:"M8.4 10.6a2 2 0 0 1 3 3L6 19l-4 1 1-4Z",key:"dakro8"}],["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",key:"a8xqs0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=i("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=i("FolderRoot",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M12 15v5",key:"11xva1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=i("FolderSearch2",[["circle",{cx:"11.5",cy:"12.5",r:"2.5",key:"1ea5ju"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M13.3 14.3 15 16",key:"1y4v1n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=i("FolderSearch",[["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",key:"1bw5m7"}],["path",{d:"m21 21-1.5-1.5",key:"3sg1j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=i("FolderSymlink",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"x1c07l"}],["path",{d:"m8 16 3-3-3-3",key:"rlqrt1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=i("FolderSync",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",key:"1dkoa9"}],["path",{d:"M12 10v4h4",key:"1czhmt"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"lvuxfi"}],["path",{d:"M22 22v-4h-4",key:"1ewp4q"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"14ync0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=i("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=i("FolderUp",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m9 13 3-3 3 3",key:"1pxg3c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=i("FolderX",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9.5 10.5 5 5",key:"ra9qjz"}],["path",{d:"m14.5 10.5-5 5",key:"l2rkpq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=i("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=i("Folders",[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",key:"4u7rpt"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14",key:"1eicx1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=i("Footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=i("Forklift",[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5",key:"7zsz91"}],["circle",{cx:"13",cy:"19",r:"2",key:"wjnkru"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5",key:"13bk1p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=i("FormInput",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=i("Forward",[["polyline",{points:"15 17 20 12 15 7",key:"1w3sku"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12",key:"jmiej9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=i("Frame",[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=i("Framer",[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7",key:"1a2nng"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=i("Frown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=i("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=i("Fullscreen",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1",key:"vys8me"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=i("FunctionSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=i("GalleryHorizontalEnd",[["path",{d:"M2 7v10",key:"a2pl2d"}],["path",{d:"M6 5v14",key:"1kq3d7"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2",key:"13i7bc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=i("GalleryHorizontal",[["path",{d:"M2 3v18",key:"pzttux"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2",key:"btr8bg"}],["path",{d:"M22 3v18",key:"6jf3v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=i("GalleryThumbnails",[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2",key:"74y24f"}],["path",{d:"M4 21h1",key:"16zlid"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M19 21h1",key:"edywat"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=i("GalleryVerticalEnd",[["path",{d:"M7 2h10",key:"nczekb"}],["path",{d:"M5 6h14",key:"u2x4p"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=i("GalleryVertical",[["path",{d:"M3 2h18",key:"15qxfx"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2",key:"1439r6"}],["path",{d:"M3 22h18",key:"8prr45"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=i("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=i("Gamepad",[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=i("GanttChartSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 8h7",key:"kbo1nt"}],["path",{d:"M8 12h6",key:"ikassy"}],["path",{d:"M11 16h5",key:"oq65wt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=i("GanttChart",[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=i("GaugeCircle",[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7",key:"1e0p6d"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M13.4 10.6 19 5",key:"1kr7tw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=i("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=i("Gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=i("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=i("Ghost",[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=i("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=i("GitBranchPlus",[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=i("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=i("GitCommitHorizontal",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=i("GitCommitVertical",[["path",{d:"M12 3v6",key:"1holv5"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 15v6",key:"a9ows0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=i("GitCompareArrows",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=i("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=i("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=i("GitGraph",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=i("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=i("GitPullRequestArrow",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=i("GitPullRequestClosed",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"m21 3-6 6",key:"16nqsk"}],["path",{d:"m21 9-6-6",key:"9j17rh"}],["path",{d:"M18 11.5V15",key:"65xf6f"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=i("GitPullRequestCreateArrow",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3",key:"1rbwk6"}],["path",{d:"M19 15v6",key:"10aioa"}],["path",{d:"M22 18h-6",key:"1d5gi5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=i("GitPullRequestCreate",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3",key:"1jb6z3"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=i("GitPullRequestDraft",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M18 6V5",key:"1oao2s"}],["path",{d:"M18 11v-1",key:"11c8tz"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=i("GitPullRequest",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=i("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=i("Gitlab",[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",key:"148pdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=i("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=i("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=i("GlobeLock",[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",key:"qkt0x6"}],["path",{d:"M2 12h8.5",key:"ovaggd"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=i("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=i("Goal",[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=i("Grab",[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"n5nng"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"185i9d"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",key:"11pz95"}],["path",{d:"M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"16yk7l"}],["path",{d:"M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",key:"nzvb1c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=i("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=i("Grape",[["path",{d:"M22 5V2l-5.89 5.89",key:"1eenpo"}],["circle",{cx:"16.6",cy:"15.89",r:"3",key:"xjtalx"}],["circle",{cx:"8.11",cy:"7.4",r:"3",key:"u2fv6i"}],["circle",{cx:"12.35",cy:"11.65",r:"3",key:"i6i8g7"}],["circle",{cx:"13.91",cy:"5.85",r:"3",key:"6ye0dv"}],["circle",{cx:"18.15",cy:"10.09",r:"3",key:"snx9no"}],["circle",{cx:"6.56",cy:"13.2",r:"3",key:"17x4xg"}],["circle",{cx:"10.8",cy:"17.44",r:"3",key:"1hogw9"}],["circle",{cx:"5",cy:"19",r:"3",key:"1sn6vo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=i("Grid2x2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=i("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=i("GripHorizontal",[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=i("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=i("Grip",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=i("Group",[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2",key:"adw53z"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2",key:"an4l38"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2",key:"144t0e"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2",key:"rtnfgi"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1",key:"1eyiv7"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1",key:"1qlmkx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=i("Guitar",[["path",{d:"m20 7 1.7-1.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L17 4v3Z",key:"15ixgv"}],["path",{d:"m17 7-5.1 5.1",key:"l9guh7"}],["circle",{cx:"11.5",cy:"12.5",r:".5",fill:"currentColor",key:"16onso"}],["path",{d:"M6 12a2 2 0 0 0 1.8-1.2l.4-.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4",key:"x9fguj"}],["path",{d:"m6 16 2 2",key:"16qmzd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=i("Hammer",[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=i("HandCoins",[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",key:"geh8rc"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"1fto5m"}],["path",{d:"m2 16 6 6",key:"1pfhp9"}],["circle",{cx:"16",cy:"9",r:"2.9",key:"1n0dlu"}],["circle",{cx:"6",cy:"5",r:"3",key:"151irh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=i("HandHeart",[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1ifwr1"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"17abbs"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",key:"1h3036"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=i("HandHelping",[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14",key:"1j4xps"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"uospg8"}],["path",{d:"m2 13 6 6",key:"16e5sb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=i("HandMetal",[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"7eki13"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2",key:"94qvcw"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9",key:"m1ah89"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",key:"t1skq1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=i("HandPlatter",[["path",{d:"M12 3V2",key:"ar7q03"}],["path",{d:"M5 10a7.1 7.1 0 0 1 14 0",key:"1t9y3n"}],["path",{d:"M4 10h16",key:"img6z1"}],["path",{d:"M2 14h12a2 2 0 1 1 0 4h-2",key:"loyjft"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18",key:"1rixiy"}],["path",{d:"M5 14v7H2",key:"3mujks"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=i("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"aigmz7"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"1n6bmn"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8",key:"a9iiix"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=i("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=i("HardDriveDownload",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=i("HardDriveUpload",[["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M12 2v8",key:"1q4o3n"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=i("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=i("HardHat",[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",key:"1dej2m"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6h0",key:"1uc279"}],["path",{d:"M14 6h0a6 6 0 0 1 6 6v3",key:"1j9mnm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=i("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=i("Haze",[["path",{d:"m5.2 6.2 1.4 1.4",key:"17imol"}],["path",{d:"M2 13h2",key:"13gyu8"}],["path",{d:"M20 13h2",key:"16rner"}],["path",{d:"m17.4 7.6 1.4-1.4",key:"t4xlah"}],["path",{d:"M22 17H2",key:"1gtaj3"}],["path",{d:"M22 21H2",key:"1gy6en"}],["path",{d:"M16 13a4 4 0 0 0-8 0",key:"1dyczq"}],["path",{d:"M12 5V2.5",key:"1vytko"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=i("HdmiPort",[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",key:"2128wb"}],["path",{d:"M7.5 12h9",key:"1t0ckc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=i("Heading1",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"m17 12 3-2v8",key:"1hhhft"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=i("Heading2",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=i("Heading3",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",key:"68ncm8"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",key:"1ejuhz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=i("Heading4",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 10v4h4",key:"13sv97"}],["path",{d:"M21 10v8",key:"1kdml4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=i("Heading5",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 13v-3h4",key:"1nvgqp"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",key:"2nebdn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=i("Heading6",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["circle",{cx:"19",cy:"16",r:"2",key:"15mx69"}],["path",{d:"M20 10c-2 2-3 3.5-3 6",key:"f35dl0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=i("Heading",[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=i("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=i("Headset",[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=i("HeartCrack",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2",key:"xjdxli"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=i("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=i("HeartOff",[["line",{x1:"2",y1:"2",x2:"22",y2:"22",key:"1w4vcy"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35",key:"3mpagl"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",key:"1gh3v3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=i("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=i("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=i("Heater",[["path",{d:"M11 8c2-3-2-3 0-6",key:"1ldv5m"}],["path",{d:"M15.5 8c2-3-2-3 0-6",key:"1otqoz"}],["path",{d:"M6 10h.01",key:"1lbq93"}],["path",{d:"M6 14h.01",key:"zudwn7"}],["path",{d:"M10 16v-4",key:"1c25yv"}],["path",{d:"M14 16v-4",key:"1dkbt8"}],["path",{d:"M18 16v-4",key:"1yg9me"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3",key:"1ubg90"}],["path",{d:"M5 20v2",key:"1abpe8"}],["path",{d:"M19 20v2",key:"kqn6ft"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=i("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=i("Hexagon",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=i("Highlighter",[["path",{d:"m9 11-6 6v3h9l3-3",key:"1a3l36"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",key:"14a9rk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=i("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=i("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=i("HopOff",[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27",key:"qyzcap"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28",key:"y078lb"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26",key:"1utre3"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25",key:"17o9hm"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75",key:"1d1n4p"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24",key:"9uv3tt"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28",key:"1292wz"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05",key:"7ozu9p"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=i("Hop",[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18",key:"18lxf1"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88",key:"vtfxrw"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36",key:"13hl71"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87",key:"1sl8oj"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08",key:"19c6kt"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57",key:"85ghs3"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1",key:"x087yj"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15",key:"11xdqo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=i("Hotel",[["path",{d:"M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z",key:"p9z69c"}],["path",{d:"m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16",key:"1bvcvh"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M10 22v-6.5m4 0V22",key:"16gs4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=i("Hourglass",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=i("IceCream2",[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",key:"g86ewz"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0",key:"4k3m1s"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0",key:"zmuahr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=i("IceCream",[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",key:"1v6356"}],["path",{d:"M17 7A5 5 0 0 0 7 7",key:"151p3v"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",key:"1sdaij"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=i("ImageDown",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19 3 3v-5.5",key:"9ldu5r"}],["path",{d:"m17 22 3-3",key:"1nkfve"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=i("ImageMinus",[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"m87ecr"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=i("ImageOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=i("ImagePlus",[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"31hg93"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8",key:"1gkr8c"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=i("ImageUp",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19.5 3-3 3 3",key:"9vmjn0"}],["path",{d:"M17 22v-5.5",key:"1aa6fl"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=i("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=i("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=i("Import",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m8 11 4 4 4-4",key:"1dohi6"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",key:"1ywtjm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=i("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=i("Indent",[["polyline",{points:"3 8 7 12 3 16",key:"f3rxhf"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=i("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=i("Infinity",[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",key:"1z0uae"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=i("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=i("InspectionPanel",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h.01",key:"7u93v4"}],["path",{d:"M17 7h.01",key:"14a9sn"}],["path",{d:"M7 17h.01",key:"19xn7k"}],["path",{d:"M17 17h.01",key:"1sd3ek"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=i("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=i("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=i("IterationCcw",[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8",key:"4znkd0"}],["polyline",{points:"16 14 20 18 16 22",key:"11njsm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=i("IterationCw",[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4",key:"tuf4su"}],["polyline",{points:"8 22 4 18 8 14",key:"evkj9s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=i("JapaneseYen",[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3",key:"2ej80x"}],["path",{d:"M6 15h12",key:"1hwgt5"}],["path",{d:"M6 11h12",key:"wf4gp6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=i("Joystick",[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=i("KanbanSquareDashed",[["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M21 14v1",key:"169vum"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M3 9v1",key:"1r0deq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=i("KanbanSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=i("Kanban",[["path",{d:"M6 5v11",key:"mdvv1e"}],["path",{d:"M12 5v6",key:"14ar3b"}],["path",{d:"M18 5v14",key:"7ji314"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=i("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=i("KeySquare",[["path",{d:"M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z",key:"9li5bk"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4",key:"1ym3zm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=i("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=i("KeyboardMusic",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M6 12v4",key:"dy92yo"}],["path",{d:"M10 12v4",key:"1fxnav"}],["path",{d:"M14 12v4",key:"1hft58"}],["path",{d:"M18 12v4",key:"tjjnbz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=i("Keyboard",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=i("LampCeiling",[["path",{d:"M12 2v5",key:"nd4vlx"}],["path",{d:"M6 7h12l4 9H2l4-9Z",key:"123d64"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0",key:"1061mw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=i("LampDesk",[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z",key:"1b0msb"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z",key:"1uemms"}],["path",{d:"M9.5 6.5 4 12l3 6",key:"1bx08v"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z",key:"wap775"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=i("LampFloor",[["path",{d:"M9 2h6l3 7H6l3-7Z",key:"wcx6mj"}],["path",{d:"M12 9v13",key:"3n1su1"}],["path",{d:"M9 22h6",key:"1rlq3v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=i("LampWallDown",[["path",{d:"M11 13h6l3 7H8l3-7Z",key:"9n3qlo"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8",key:"1hu4hb"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z",key:"s053bc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=i("LampWallUp",[["path",{d:"M11 4h6l3 7H8l3-7Z",key:"11x1ee"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8",key:"eutp5o"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z",key:"1iuthr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=i("Lamp",[["path",{d:"M8 2h8l4 10H4L8 2Z",key:"9dma5w"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z",key:"mwf4oh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=i("LandPlot",[["path",{d:"m12 8 6-3-6-3v10",key:"mvpnpy"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",key:"ek95tt"}],["path",{d:"m6.49 12.85 11.02 6.3",key:"1kt42w"}],["path",{d:"M17.51 12.85 6.5 19.15",key:"v55bdg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=i("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=i("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=i("Laptop2",[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2",key:"1qhy41"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20",key:"ni3hll"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=i("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=i("LassoSelect",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91",key:"ybbtv3"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",key:"gt5e1w"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z",key:"1bawls"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=i("Lasso",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",key:"146dds"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=i("Laugh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",key:"b2q4dd"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=i("Layers2",[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12",key:"1cuww1"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z",key:"pdlvxu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=i("Layers3",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1e5n1m"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1iwflc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=i("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=i("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=i("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=i("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=i("LayoutPanelLeft",[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1",key:"2obqm"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=i("LayoutPanelTop",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=i("LayoutTemplate",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=i("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=i("LeafyGreen",[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",key:"1134nt"}],["path",{d:"M2 22 17 7",key:"1q7jp2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=i("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=i("LibrarySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7v10",key:"d5nglc"}],["path",{d:"M11 7v10",key:"pptsnr"}],["path",{d:"m15 7 2 10",key:"1m7qm5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=i("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=i("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=i("Ligature",[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2",key:"1rtphz"}],["path",{d:"M6 12h4",key:"a4o3ry"}],["path",{d:"M14 12h2v8",key:"c1fccl"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 20h4",key:"lzx1xo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=i("LightbulbOff",[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=i("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=i("LineChart",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=i("Link2Off",[["path",{d:"M9 17H7A5 5 0 0 1 7 7",key:"10o201"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8",key:"1d3206"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12",key:"rvw6j4"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=i("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=i("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=i("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=i("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=i("ListCollapse",[["path",{d:"m3 10 2.5-2.5L3 5",key:"i6eama"}],["path",{d:"m3 19 2.5-2.5L3 14",key:"w2gmor"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=i("ListEnd",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M10 18H3",key:"13769t"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5",key:"ilrcs8"}],["path",{d:"m16 16-2 2 2 2",key:"kkc6pm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=i("ListFilter",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=i("ListMinus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=i("ListMusic",[["path",{d:"M21 15V6",key:"h1cx4g"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",key:"8saifv"}],["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=i("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=i("ListPlus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=i("ListRestart",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M7 12H3",key:"13ou7f"}],["path",{d:"M7 18H3",key:"1sijw9"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",key:"qth677"}],["path",{d:"M11 10v4h4",key:"172dkj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=i("ListStart",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M10 6H3",key:"lf8lx7"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5",key:"1hghli"}],["path",{d:"m16 8-2-2 2-2",key:"160uvd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=i("ListTodo",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=i("ListTree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=i("ListVideo",[["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}],["path",{d:"m16 12 5 3-5 3v-6Z",key:"zpskkp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=i("ListX",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"m19 10-4 4",key:"1tz659"}],["path",{d:"m15 10 4 4",key:"1n7nei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=i("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=i("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=i("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=i("LocateFixed",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=i("LocateOff",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",key:"1oh7ia"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",key:"3qdecy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=i("Locate",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=i("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=i("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=i("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=i("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=i("Lollipop",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0",key:"107gwy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=i("Luggage",[["path",{d:"M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0",key:"1h5fkc"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",key:"1l99gc"}],["path",{d:"M10 20h4",key:"ni2waw"}],["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=i("MSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8l4 4 4-4v8",key:"141u4e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=i("Magnet",[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",key:"1i3lhw"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}],["path",{d:"m12 15 4 4",key:"lnac28"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=i("MailCheck",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=i("MailMinus",[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"fuxbkv"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=i("MailOpen",[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=i("MailPlus",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=i("MailQuestion",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"7z9rxb"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=i("MailSearch",[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",key:"w80f2v"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z",key:"mgbru4"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=i("MailWarning",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M20 14v4",key:"1hm744"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=i("MailX",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9",key:"1j9vog"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m17 17 4 4",key:"1b3523"}],["path",{d:"m21 17-4 4",key:"uinynz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=i("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=i("Mailbox",[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",key:"1lbycx"}],["polyline",{points:"15,9 18,9 18,11",key:"1pm9c0"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0",key:"n6nfvi"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10",key:"1e2scm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=i("Mails",[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2",key:"1drq3f"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7",key:"xn252p"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14",key:"n13cji"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=i("MapPinOff",[["path",{d:"M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5",key:"12a8pk"}],["path",{d:"M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82",key:"1r9f6y"}],["path",{d:"M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13",key:"erynq7"}],["path",{d:"M14.9 9.25a3 3 0 0 0-2.15-2.16",key:"1hwwmx"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=i("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=i("MapPinned",[["path",{d:"M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0",key:"yrbn30"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835",key:"112zkj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=i("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=i("Martini",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M12 11v11",key:"ur9y6a"}],["path",{d:"m19 3-7 8-7-8Z",key:"1sgpiw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=i("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=i("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=i("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=i("MegaphoneOff",[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14",key:"3429n"}],["path",{d:"M21 15.34V6l-7.31 2.03",key:"4o1dh8"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=i("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=i("Meh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15",key:"1xb1d9"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=i("MemoryStick",[["path",{d:"M6 19v-3",key:"1nvgqn"}],["path",{d:"M10 19v-3",key:"iu8nkm"}],["path",{d:"M14 19v-3",key:"kcehxu"}],["path",{d:"M18 19v-3",key:"1vh91z"}],["path",{d:"M8 11V9",key:"63erz4"}],["path",{d:"M16 11V9",key:"fru6f3"}],["path",{d:"M12 11V9",key:"ha00sb"}],["path",{d:"M2 15h20",key:"16ne18"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",key:"lhddv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=i("MenuSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 8h10",key:"1jw688"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=i("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=i("Merge",[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=i("MessageCircleCode",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 10 2 2-2 2",key:"1kkmpt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=i("MessageCircleDashed",[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1",key:"16ll65"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1",key:"1nq77a"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5",key:"1sf7wn"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1",key:"x1hs5g"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1",key:"19m18z"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5",key:"1f36qi"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5",key:"1vz3ju"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1",key:"19f9do"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=i("MessageCircleHeart",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7",key:"43lnbm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=i("MessageCircleMore",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=i("MessageCircleOff",[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5",key:"1iebmn"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7",key:"1ov8ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=i("MessageCirclePlus",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=i("MessageCircleQuestion",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=i("MessageCircleReply",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1",key:"1gheu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=i("MessageCircleWarning",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=i("MessageCircleX",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=i("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=i("MessageSquareCode",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 8-2 2 2 2",key:"19bv1o"}],["path",{d:"m14 8 2 2-2 2",key:"1whylv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=i("MessageSquareDashed",[["path",{d:"M3 6V5c0-1.1.9-2 2-2h2",key:"9usibi"}],["path",{d:"M11 3h3",key:"1c3ji7"}],["path",{d:"M18 3h1c1.1 0 2 .9 2 2",key:"19esxn"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M21 15c0 1.1-.9 2-2 2h-1",key:"1fo1j8"}],["path",{d:"M14 17h-3",key:"1w4p2m"}],["path",{d:"m7 17-4 4v-5",key:"ph9x1h"}],["path",{d:"M3 12v-2",key:"856n1q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=i("MessageSquareDiff",[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",key:"1xuzuj"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=i("MessageSquareDot",[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7",key:"uodpkb"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=i("MessageSquareHeart",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8",key:"1blaws"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=i("MessageSquareMore",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M16 10h.01",key:"1m94wz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=i("MessageSquareOff",[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10",key:"pwpm4a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=i("MessageSquarePlus",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=i("MessageSquareQuote",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=i("MessageSquareReply",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 7-3 3 3 3",key:"1eugdv"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7",key:"ernfh3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=i("MessageSquareShare",[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7",key:"tqtdkg"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m16 8 5-5",key:"15mbrl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=i("MessageSquareText",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=i("MessageSquareWarning",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v2",key:"stiyo7"}],["path",{d:"M12 13h.01",key:"y0uutt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=i("MessageSquareX",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=i("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=i("MessagesSquare",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z",key:"16vlm8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=i("Mic2",[["path",{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12",key:"zoua8r"}],["circle",{cx:"17",cy:"7",r:"5",key:"1fomce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=i("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=i("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=i("Microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=i("Microwave",[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2",key:"2no95f"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1",key:"zh9wx"}],["path",{d:"M18 8v7",key:"o5zi4n"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 19v2",key:"1dawf0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=i("Milestone",[["path",{d:"M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z",key:"1mp5s7"}],["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=i("MilkOff",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",key:"y0ejgx"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435",key:"iaxqsy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=i("Milk",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=i("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=i("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=i("MinusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=i("MinusSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=i("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=i("MonitorCheck",[["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=i("MonitorDot",[["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",key:"1fet9y"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=i("MonitorDown",[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m15 10-3 3-3-3",key:"lzhmyn"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=i("MonitorOff",[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2",key:"k0q8oc"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9",key:"cp1ac0"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=i("MonitorPause",[["path",{d:"M10 13V7",key:"1u13u9"}],["path",{d:"M14 13V7",key:"1vj9om"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=i("MonitorPlay",[["path",{d:"m10 7 5 3-5 3Z",key:"29ljg6"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=i("MonitorSmartphone",[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=i("MonitorSpeaker",[["path",{d:"M5.5 20H8",key:"1k40s5"}],["path",{d:"M17 9h.01",key:"1j24nn"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2",key:"ixliua"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",key:"1mp6e1"}],["circle",{cx:"17",cy:"15",r:"1",key:"tqvash"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=i("MonitorStop",[["rect",{x:"9",y:"7",width:"6",height:"6",key:"4xvc6r"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=i("MonitorUp",[["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"M12 13V7",key:"h0r20n"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=i("MonitorX",[["path",{d:"m14.5 12.5-5-5",key:"1jahn5"}],["path",{d:"m9.5 12.5 5-5",key:"1k2t7b"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=i("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=i("MoonStar",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}],["path",{d:"M19 3v4",key:"vgv24u"}],["path",{d:"M21 5h-4",key:"1wcg1f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=i("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=i("MoreHorizontal",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=i("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=i("MountainSnow",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19",key:"1pvmmp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=i("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=i("MousePointer2",[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z",key:"1vqm48"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=i("MousePointerClick",[["path",{d:"m9 9 5 12 1.8-5.2L21 14Z",key:"1b76lo"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=i("MousePointerSquareDashed",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z",key:"64ilsv"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h2",key:"1qve2z"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M3 14v1",key:"vnatye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=i("MousePointerSquare",[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z",key:"64ilsv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=i("MousePointer",[["path",{d:"m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z",key:"y2ucgo"}],["path",{d:"m13 13 6 6",key:"1nhxnf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=i("Mouse",[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=i("Move3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=i("MoveDiagonal2",[["polyline",{points:"5 11 5 5 11 5",key:"ncfzxk"}],["polyline",{points:"19 13 19 19 13 19",key:"1mk7hk"}],["line",{x1:"5",x2:"19",y1:"5",y2:"19",key:"mcyte3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=i("MoveDiagonal",[["polyline",{points:"13 5 19 5 19 11",key:"11219e"}],["polyline",{points:"11 19 5 19 5 13",key:"sfq3wq"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=i("MoveDownLeft",[["path",{d:"M11 19H5V13",key:"1akmht"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=i("MoveDownRight",[["path",{d:"M19 13V19H13",key:"10vkzq"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=i("MoveDown",[["path",{d:"M8 18L12 22L16 18",key:"cskvfv"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=i("MoveHorizontal",[["polyline",{points:"18 8 22 12 18 16",key:"1hqrds"}],["polyline",{points:"6 8 2 12 6 16",key:"f0ernq"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=i("MoveLeft",[["path",{d:"M6 8L2 12L6 16",key:"kyvwex"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=i("MoveRight",[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=i("MoveUpLeft",[["path",{d:"M5 11V5H11",key:"3q78g9"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=i("MoveUpRight",[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=i("MoveUp",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=i("MoveVertical",[["polyline",{points:"8 18 12 22 16 18",key:"1uutw3"}],["polyline",{points:"8 6 12 2 16 6",key:"d60sxy"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=i("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=i("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=i("Music3",[["circle",{cx:"12",cy:"18",r:"4",key:"m3r9ws"}],["path",{d:"M16 18V2",key:"40x2m5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=i("Music4",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["path",{d:"m9 9 12-2",key:"1e64n2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=i("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=i("Navigation2Off",[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17",key:"qoq2o2"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17",key:"k3sjzy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=i("Navigation2",[["polygon",{points:"12 2 19 21 12 17 5 21 12 2",key:"x8c0qg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=i("NavigationOff",[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43",key:"1vdtb7"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61",key:"tya3r6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=i("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=i("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=i("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=i("Nfc",[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36",key:"9iaqei"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"1yha7l"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"4iu2gk"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20",key:"sap9u2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=i("NotebookPen",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z",key:"1dba1m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=i("NotebookTabs",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M15 2v20",key:"dcj49h"}],["path",{d:"M15 7h5",key:"1xj5lc"}],["path",{d:"M15 12h5",key:"w5shd9"}],["path",{d:"M15 17h5",key:"1qaofu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=i("NotebookText",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=i("Notebook",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=i("NotepadTextDashed",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2",key:"j91f56"}],["path",{d:"M20 12v2",key:"w8o0tu"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1",key:"1c9ggx"}],["path",{d:"M13 22h-2",key:"191ugt"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2",key:"1rt9px"}],["path",{d:"M4 14v-2",key:"1v0sqh"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2",key:"1mwabg"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=i("NotepadText",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2",key:"1u9h20"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=i("NutOff",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",key:"1xcvy9"}],["path",{d:"M19 10v3.343",key:"163tfc"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",key:"17914v"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=i("Nut",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",key:"1tgyif"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",key:"tnsqj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=i("Octagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=i("Option",[["path",{d:"M3 3h6l6 18h6",key:"ph9rgk"}],["path",{d:"M14 3h7",key:"16f0ms"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=i("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=i("Outdent",[["polyline",{points:"7 8 3 12 7 16",key:"2j60jr"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=i("Package2",[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z",key:"1ront0"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",key:"19h2x1"}],["path",{d:"M12 3v6",key:"1holv5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=i("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=i("PackageMinus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=i("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=i("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=i("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=i("PackageX",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["path",{d:"m17 13 5 5m-5 0 5-5",key:"im3w4b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=i("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=i("PaintBucket",[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",key:"irua1i"}],["path",{d:"m5 2 5 5",key:"1lls2c"}],["path",{d:"M2 13h15",key:"1hkzvu"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",key:"xk76lq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=i("PaintRoller",[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2",key:"jcyz7m"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1b9h7c"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1",key:"d6e7yl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=i("Paintbrush2",[["path",{d:"M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z",key:"1c8kta"}],["path",{d:"M6 12V2h12v10",key:"1esbnf"}],["path",{d:"M14 2v4",key:"qmzblu"}],["path",{d:"M10 2v2",key:"7u0qdc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=i("Paintbrush",[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",key:"m6k5sh"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",key:"arzq70"}],["path",{d:"M14.5 17.5 4.5 15",key:"s7fvrz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=i("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=i("Palmtree",[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",key:"foxbe7"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",key:"18arnh"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z",key:"epoumf"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",key:"ft0feo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=i("PanelBottomClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m15 8-3 3-3-3",key:"1oxy1z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=i("PanelBottomDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 15h1",key:"171nev"}],["path",{d:"M19 15h2",key:"1vnucp"}],["path",{d:"M3 15h2",key:"8bym0q"}],["path",{d:"M9 15h1",key:"1tg3ks"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=i("PanelBottomOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=i("PanelBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=i("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=i("PanelLeftDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 14v1",key:"askpd8"}],["path",{d:"M9 19v2",key:"16tejx"}],["path",{d:"M9 3v2",key:"1noubl"}],["path",{d:"M9 9v1",key:"19ebxg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=i("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=i("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=i("PanelRightClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=i("PanelRightDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 14v1",key:"ilsfch"}],["path",{d:"M15 19v2",key:"1fst2f"}],["path",{d:"M15 3v2",key:"z204g4"}],["path",{d:"M15 9v1",key:"z2a8b1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=i("PanelRightOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=i("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=i("PanelTopClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m9 16 3-3 3 3",key:"1idcnm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=i("PanelTopDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 9h1",key:"l0svgy"}],["path",{d:"M19 9h2",key:"te2zfg"}],["path",{d:"M3 9h2",key:"1h4ldw"}],["path",{d:"M9 9h1",key:"15jzuz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=i("PanelTopOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=i("PanelTop",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=i("PanelsLeftBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M9 15h12",key:"5ijen5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=i("PanelsRightBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h12",key:"1wkqb3"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=i("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=i("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=i("Parentheses",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=i("ParkingCircleOff",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m5 5 14 14",key:"11anup"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.34",key:"a9qo08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=i("ParkingCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=i("ParkingMeter",[["path",{d:"M9 9a3 3 0 1 1 6 0",key:"jdoeu8"}],["path",{d:"M12 12v3",key:"158kv8"}],["path",{d:"M11 15h2",key:"199qp6"}],["path",{d:"M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3",key:"1l50wn"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=i("ParkingSquareOff",[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41",key:"9l1ft6"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3",key:"17knke"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.3",key:"1jxgo2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=i("ParkingSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=i("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"bpx1uq"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17",key:"1pd0s7"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7",key:"zq5xbz"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=i("PauseCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=i("PauseOctagon",[["path",{d:"M10 15V9",key:"1lckn7"}],["path",{d:"M14 15V9",key:"1muqhk"}],["path",{d:"M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z",key:"1m7qra"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=i("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=i("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=i("PcCase",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",key:"1uq1d7"}],["path",{d:"M15 14h.01",key:"1kp3bh"}],["path",{d:"M9 6h6",key:"dgm16u"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=i("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=i("PenTool",[["path",{d:"m12 19 7-7 3 3-7 7-3-3z",key:"rklqx2"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",key:"1et58u"}],["path",{d:"m2 2 7.586 7.586",key:"etlp93"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=i("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=i("PencilLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}],["path",{d:"m15 5 3 3",key:"1w25hb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=i("PencilRuler",[["path",{d:"m15 5 4 4",key:"1mk7zo"}],["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",key:"orapub"}],["path",{d:"m8 6 2-2",key:"115y1s"}],["path",{d:"m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z",key:"hes763"}],["path",{d:"m18 16 2-2",key:"ee94s4"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",key:"cfq27r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=i("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=i("Pentagon",[["path",{d:"M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z",key:"hsj90r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=i("PercentCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=i("PercentDiamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",key:"1tpxz2"}],["path",{d:"M9.2 9.2h.01",key:"1b7bvt"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"M14.7 14.8h.01",key:"17nsh4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=i("PercentSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=i("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=i("PersonStanding",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=i("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=i("PhoneForwarded",[["polyline",{points:"18 2 22 6 18 10",key:"6vjanh"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6",key:"1jsywh"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=i("PhoneIncoming",[["polyline",{points:"16 2 16 8 22 8",key:"1ygljm"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=i("PhoneMissed",[["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8",key:"13zxdn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=i("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=i("PhoneOutgoing",[["polyline",{points:"22 8 22 2 16 2",key:"1g204g"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2",key:"1ggias"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=i("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=i("PiSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h10",key:"udp07y"}],["path",{d:"M10 7v10",key:"i1d9ee"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7",key:"ftwdc7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=i("Pi",[["line",{x1:"9",x2:"9",y1:"4",y2:"20",key:"ovs5a5"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13",key:"10pag4"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4",key:"1gaosr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=i("Piano",[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",key:"lag0yf"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M6 14v4",key:"9ng0ue"}],["path",{d:"M10 14v4",key:"1v8uk5"}],["path",{d:"M14 14v4",key:"1tqops"}],["path",{d:"M18 14v4",key:"18uqwm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=i("Pickaxe",[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912",key:"we99rg"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",key:"1w6hck"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",key:"15hgfx"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",key:"452b4h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=i("PictureInPicture2",[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",key:"daa4of"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2",key:"1nb8gs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=i("PictureInPicture",[["path",{d:"M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3",key:"bcd8fb"}],["rect",{width:"10",height:"7",x:"12",y:"13.5",ry:"2",key:"136fx3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=i("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=i("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z",key:"uf6l00"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h0",key:"k2aug8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=i("PilcrowSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17",key:"1l9586"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M16 7v10",key:"lavkr4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=i("Pilcrow",[["path",{d:"M13 4v16",key:"8vvj80"}],["path",{d:"M17 4v16",key:"7dpous"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13",key:"sh4n9v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=i("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=i("PinOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12",key:"13x2n8"}],["path",{d:"M15 9.34V6h1a2 2 0 0 0 0-4H7.89",key:"reo3ki"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=i("Pin",[["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",key:"13yl11"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=i("Pipette",[["path",{d:"m2 22 1-1h3l9-9",key:"1sre89"}],["path",{d:"M3 21v-3l9-9",key:"hpe2y6"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",key:"196du1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=i("Pizza",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=i("PlaneLanding",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",key:"1ma21e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=i("PlaneTakeoff",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",key:"fkigj9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=i("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=i("PlayCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=i("PlaySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 8 6 4-6 4Z",key:"f1r3lt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=i("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=i("Plug2",[["path",{d:"M9 2v6",key:"17ngun"}],["path",{d:"M15 2v6",key:"s7yy2p"}],["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0v0Z",key:"nd4hoy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=i("PlugZap2",[["path",{d:"m13 2-2 2.5h3L12 7",key:"1me98u"}],["path",{d:"M10 14v-3",key:"1mllf3"}],["path",{d:"M14 14v-3",key:"1l3fkq"}],["path",{d:"M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z",key:"jd5pat"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=i("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=i("Plug",[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=i("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=i("PlusSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=i("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=i("PocketKnife",[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2",key:"19w3oe"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z",key:"6fykxj"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6",key:"1utzek"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=i("Pocket",[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",key:"1mz881"}],["polyline",{points:"8 10 12 14 16 10",key:"w4mbv5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=i("Podcast",[["circle",{cx:"12",cy:"11",r:"1",key:"1gvufo"}],["path",{d:"M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z",key:"1n5fvv"}],["path",{d:"M8 14a5 5 0 1 1 8 0",key:"fc81rn"}],["path",{d:"M17 18.5a9 9 0 1 0-10 0",key:"jqtxkf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=i("PointerOff",[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957",key:"jsi14n"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295",key:"hirc7f"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158",key:"1jxb2e"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",key:"10r7hm"}],["path",{d:"M6 6v8",key:"tv5xkp"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=i("Pointer",[["path",{d:"M22 14a8 8 0 0 1-8 8",key:"56vcr3"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"1pp0yd"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1",key:"u654g"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10",key:"1e2dtv"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"g6ys72"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=i("Popcorn",[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",key:"10td1f"}],["path",{d:"M10 22 9 8",key:"yjptiv"}],["path",{d:"m14 22 1-14",key:"8jwc8b"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",key:"1qo33t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=i("Popsicle",[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",key:"1o68ps"}],["path",{d:"m22 22-5.5-5.5",key:"17o70y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=i("PoundSterling",[["path",{d:"M18 7c0-5.333-8-5.333-8 0",key:"1prm2n"}],["path",{d:"M10 7v14",key:"18tmcs"}],["path",{d:"M6 21h12",key:"4dkmi1"}],["path",{d:"M6 13h10",key:"ybwr4a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=i("PowerCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 12V6",key:"30zewn"}],["path",{d:"M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5",key:"1r0tk2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=i("PowerOff",[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=i("PowerSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8",key:"15eubv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=i("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=i("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=i("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=i("Projector",[["path",{d:"M5 7 3 5",key:"1yys58"}],["path",{d:"M9 6V3",key:"1ptz9u"}],["path",{d:"m13 7 2-2",key:"1w3vmq"}],["circle",{cx:"9",cy:"13",r:"3",key:"1mma13"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",key:"2frwzc"}],["path",{d:"M16 16h2",key:"dnq2od"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=i("Puzzle",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=i("Pyramid",[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=i("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=i("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=i("Rabbit",[["path",{d:"M13 16a3 3 0 0 1 2.24 5",key:"1epib5"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",key:"ue9ozu"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3",key:"49iql8"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3",key:"1e33i0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=i("Radar",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=i("Radiation",[["path",{d:"M12 12h0.01",key:"6ztbls"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",key:"wy49g3"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",key:"vklnvr"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",key:"wkdf1o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=i("Radical",[["path",{d:"M3 12h4l3 9 4-17h7",key:"bpxjrx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=i("RadioReceiver",[["path",{d:"M5 16v2",key:"g5qcv5"}],["path",{d:"M19 16v2",key:"1gbaio"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2",key:"vjsjur"}],["path",{d:"M18 12h0",key:"1ucjzd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=i("RadioTower",[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=i("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=i("Radius",[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82",key:"fydyku"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["path",{d:"m13.41 13.41 4.18 4.18",key:"1gqbwc"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=i("RailSymbol",[["path",{d:"M5 15h14",key:"m0yey3"}],["path",{d:"M5 9h14",key:"7tsvo6"}],["path",{d:"m14 20-5-5 6-6-5-5",key:"1jo42i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8=i("Rainbow",[["path",{d:"M22 17a10 10 0 0 0-20 0",key:"ozegv"}],["path",{d:"M6 17a6 6 0 0 1 12 0",key:"5giftw"}],["path",{d:"M10 17a2 2 0 0 1 4 0",key:"gnsikk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=i("Rat",[["path",{d:"M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4",key:"16aj0u"}],["path",{d:"M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3",key:"1crdmb"}],["path",{d:"M13.2 18a3 3 0 0 0-2.2-5",key:"1ol3lk"}],["path",{d:"M13 22H4a2 2 0 0 1 0-4h12",key:"bt3f23"}],["path",{d:"M16 9h.01",key:"1bdo4e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=i("Ratio",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=i("ReceiptCent",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M12 6.5v11",key:"ecfhkf"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=i("ReceiptEuro",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 12h5",key:"1g6qi8"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2",key:"b2px4r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=i("ReceiptIndianRupee",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 7h8",key:"i86dvs"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8",key:"grpkl4"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=i("ReceiptJapaneseYen",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"m12 10 3-3",key:"1mc12w"}],["path",{d:"m9 7 3 3v7.5",key:"39i0xv"}],["path",{d:"M9 11h6",key:"1fldmi"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=i("ReceiptPoundSterling",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 13h5",key:"1k9z8w"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0",key:"1dzgp0"}],["path",{d:"M8 17h7",key:"8mjdqu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=i("ReceiptRussianRuble",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 15h5",key:"vxg57a"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10",key:"1usi5u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=i("ReceiptSwissFranc",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M10 17V7h5",key:"k7jq18"}],["path",{d:"M10 11h4",key:"1i0mka"}],["path",{d:"M8 15h5",key:"vxg57a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=i("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=i("Receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=i("RectangleHorizontal",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=i("RectangleVertical",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=i("Recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=i("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13",key:"19mnr4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=i("RedoDot",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=i("Redo",[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=i("RefreshCcwDot",[["path",{d:"M3 2v6h6",key:"18ldww"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8",key:"1pbrqz"}],["path",{d:"M21 22v-6h-6",key:"usdfbe"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7",key:"1hosoe"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=i("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=i("RefreshCwOff",[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47",key:"1krf6h"}],["path",{d:"M8 16H3v5",key:"1cv678"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64",key:"ruvoct"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64",key:"19q130"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87",key:"4w8emr"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=i("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=i("Refrigerator",[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=i("Regex",[["path",{d:"M17 3v10",key:"15fgeh"}],["path",{d:"m12.67 5.5 8.66 5",key:"1gpheq"}],["path",{d:"m12.67 10.5 8.66-5",key:"1dkfa6"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",key:"swwfx4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=i("RemoveFormatting",[["path",{d:"M4 7V4h16v3",key:"9msm58"}],["path",{d:"M5 20h6",key:"1h6pxn"}],["path",{d:"M13 4 8 20",key:"kqq6aj"}],["path",{d:"m15 15 5 5",key:"me55sn"}],["path",{d:"m20 15-5 5",key:"11p7ol"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=i("Repeat1",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}],["path",{d:"M11 10h1v4",key:"70cz1p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=i("Repeat2",[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=i("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=i("ReplaceAll",[["path",{d:"M14 4c0-1.1.9-2 2-2",key:"1mvvbw"}],["path",{d:"M20 2c1.1 0 2 .9 2 2",key:"1mj6oe"}],["path",{d:"M22 8c0 1.1-.9 2-2 2",key:"v1wql3"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2",key:"821ux0"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1",key:"13af7h"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2",key:"17ihk4"}],["path",{d:"M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"1w9p8c"}],["path",{d:"M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"m45eaa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=i("Replace",[["path",{d:"M14 4c0-1.1.9-2 2-2",key:"1mvvbw"}],["path",{d:"M20 2c1.1 0 2 .9 2 2",key:"1mj6oe"}],["path",{d:"M22 8c0 1.1-.9 2-2 2",key:"v1wql3"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2",key:"821ux0"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1",key:"13af7h"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2",key:"17ihk4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=i("ReplyAll",[["polyline",{points:"7 17 2 12 7 7",key:"t83bqg"}],["polyline",{points:"12 17 7 12 12 7",key:"1g4ajm"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7",key:"1fcyog"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=i("Reply",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=i("Rewind",[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=i("Ribbon",[["path",{d:"M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44",key:"1njedg"}],["path",{d:"M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z",key:"10len7"}],["path",{d:"m9.35 14.53 2.64-3.31",key:"1wfi09"}],["path",{d:"m11.97 18.04 2.99 4 3.54-2.54-3.93-5",key:"1ezyge"}],["path",{d:"M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0",key:"aw0zq5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=i("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=i("RockingChair",[["polyline",{points:"3.5 2 6.5 12.5 18 12.5",key:"y3iy52"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20",key:"19vg5i"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20",key:"1inpmv"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0",key:"1nquas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=i("RollerCoaster",[["path",{d:"M6 19V5",key:"1r845m"}],["path",{d:"M10 19V6.8",key:"9j2tfs"}],["path",{d:"M14 19v-7.8",key:"10s8qv"}],["path",{d:"M18 5v4",key:"1tajlv"}],["path",{d:"M18 19v-6",key:"ielfq3"}],["path",{d:"M22 19V9",key:"158nzp"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65",key:"1930oh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=i("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=i("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=i("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=i("RouteOff",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2",key:"1effex"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12",key:"k9y2ds"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3",key:"11nlu2"}],["path",{d:"M15 5h-4.3",key:"6537je"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=i("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=i("Router",[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=i("Rows2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=i("Rows3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=i("Rows4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 7.5H3",key:"1hm9pq"}],["path",{d:"M21 12H3",key:"2avoz0"}],["path",{d:"M21 16.5H3",key:"n7jzkj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=i("Rss",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=i("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=i("RussianRuble",[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18",key:"18ai8t"}],["path",{d:"M6 15h8",key:"1y8f6l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=i("Sailboat",[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z",key:"1404fh"}],["path",{d:"M21 14 10 2 3 14h18Z",key:"1nzg7v"}],["path",{d:"M10 2v16",key:"1labyt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=i("Salad",[["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",key:"10xrj0"}],["path",{d:"m13 12 4-4",key:"1hckqy"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2",key:"1p4srx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=i("Sandwich",[["path",{d:"M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3",key:"34v9d7"}],["path",{d:"M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83",key:"1k5vfb"}],["path",{d:"m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z",key:"1oe7l6"}],["path",{d:"M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z",key:"1ts2ri"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=i("SatelliteDish",[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=i("Satellite",[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=i("SaveAll",[["path",{d:"M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z",key:"1unput"}],["path",{d:"M10 2v4h6",key:"1p5sg6"}],["path",{d:"M18 18v-7h-8v7",key:"1oniuk"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=i("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=i("Scale3d",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M5 7v12h12",key:"vtaa4r"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=i("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=i("Scaling",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M14 15H9v-5",key:"pi4jk9"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M21 3 9 15",key:"15kdhq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=i("ScanBarcode",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 7v10",key:"23sfjj"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M17 7v10",key:"578dap"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=i("ScanEye",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5",key:"nhuolu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=i("ScanFace",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 9h.01",key:"x1ddxp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=i("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=i("ScanSearch",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=i("ScanText",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 8h8",key:"1jbsf9"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h6",key:"1vyc9m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=i("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=i("ScatterChart",[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor",key:"lysivs"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor",key:"byv1b8"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor",key:"1gjh6j"}],["path",{d:"M3 3v18h18",key:"1s2lah"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=i("School2",[["circle",{cx:"12",cy:"10",r:"1",key:"1gnqs8"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"8z0lq4"}],["path",{d:"M6 17v.01",key:"roodi6"}],["path",{d:"M6 13v.01",key:"67c122"}],["path",{d:"M18 17v.01",key:"12ktxm"}],["path",{d:"M18 13v.01",key:"tn1rt1"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",key:"jfgdp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=i("School",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=i("ScissorsLineDashed",[["path",{d:"M5.42 9.42 8 12",key:"12pkuq"}],["circle",{cx:"4",cy:"8",r:"2",key:"107mxr"}],["path",{d:"m14 6-8.58 8.58",key:"gvzu5l"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"M10.8 14.8 14 18",key:"ax7m9r"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=i("ScissorsSquareDashedBottom",[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2",key:"1vzg26"}],["path",{d:"M10 22H8",key:"euku7a"}],["path",{d:"M16 22h-2",key:"18d249"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=i("ScissorsSquare",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2",key:"1btzen"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=i("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=i("ScreenShareOff",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=i("ScreenShare",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m17 8 5-5",key:"fqif7o"}],["path",{d:"M17 3h5v5",key:"1o3tu8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=i("ScrollText",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M15 12h-5",key:"r7krc0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=i("Scroll",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=i("SearchCheck",[["path",{d:"m8 11 2 2 4-4",key:"1sed1v"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=i("SearchCode",[["path",{d:"m9 9-2 2 2 2",key:"17gsfh"}],["path",{d:"m13 13 2-2-2-2",key:"186z8k"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=i("SearchSlash",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=i("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=i("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=i("SendHorizontal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=i("SendToBack",[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1",key:"pao6x6"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1",key:"19tdru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=i("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=i("SeparatorHorizontal",[["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["polyline",{points:"8 8 12 4 16 8",key:"zo8t4w"}],["polyline",{points:"16 16 12 20 8 16",key:"1oyrid"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=i("SeparatorVertical",[["line",{x1:"12",x2:"12",y1:"3",y2:"21",key:"1efggb"}],["polyline",{points:"8 8 4 12 8 16",key:"bnfmv4"}],["polyline",{points:"16 16 20 12 16 8",key:"u90052"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=i("ServerCog",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",key:"tn8das"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",key:"1g2pve"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m15.7 13.4-.9-.3",key:"1jwmzr"}],["path",{d:"m9.2 10.9-.9-.3",key:"qapnim"}],["path",{d:"m10.6 15.7.3-.9",key:"quwk0k"}],["path",{d:"m13.6 15.7-.4-1",key:"cb9xp7"}],["path",{d:"m10.8 9.3-.4-1",key:"1uaiz5"}],["path",{d:"m8.3 13.6 1-.4",key:"s6srou"}],["path",{d:"m14.7 10.8 1-.4",key:"4d31cq"}],["path",{d:"m13.4 8.3-.3.9",key:"1bm987"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=i("ServerCrash",[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",key:"4b9dqc"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",key:"22nnkd"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m13 6-4 6h6l-4 6",key:"14hqih"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=i("ServerOff",[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5",key:"bt2siv"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z",key:"1hjrv1"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1",key:"1iynyr"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z",key:"161ggg"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=i("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=i("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=i("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=i("Shapes",[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=i("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=i("Share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=i("Sheet",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21",key:"1ib60c"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21",key:"1n26ft"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=i("Shell",[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=i("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=i("ShieldBan",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m4.243 5.21 14.39 12.472",key:"1c9a7c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=i("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=i("ShieldEllipsis",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=i("ShieldHalf",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 22V2",key:"zs6s6o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=i("ShieldMinus",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=i("ShieldOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",key:"1jlk70"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",key:"18rp1v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=i("ShieldPlus",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=i("ShieldQuestion",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=i("ShieldX",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=i("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=i("ShipWheel",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["path",{d:"M12 2v7.5",key:"1e5rl5"}],["path",{d:"m19 5-5.23 5.23",key:"1ezxxf"}],["path",{d:"M22 12h-7.5",key:"le1719"}],["path",{d:"m19 19-5.23-5.23",key:"p3fmgn"}],["path",{d:"M12 14.5V22",key:"dgcmos"}],["path",{d:"M10.23 13.77 5 19",key:"qwopd4"}],["path",{d:"M9.5 12H2",key:"r7bup8"}],["path",{d:"M10.23 10.23 5 5",key:"k2y7lj"}],["circle",{cx:"12",cy:"12",r:"2.5",key:"ix0uyj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=i("Ship",[["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"iegodh"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76",key:"fp8vka"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M12 10v4",key:"1kjpxc"}],["path",{d:"M12 2v3",key:"qbqxhf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=i("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=i("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=i("ShoppingBasket",[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=i("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=i("Shovel",[["path",{d:"M2 22v-5l5-5 5 5-5 5z",key:"1fh25c"}],["path",{d:"M9.5 14.5 16 8",key:"1smz5x"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2",key:"1q8uv5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=i("ShowerHead",[["path",{d:"m4 4 2.5 2.5",key:"uv2vmf"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7",key:"frdkwv"}],["path",{d:"M15 5 5 15",key:"1ag8rq"}],["path",{d:"M14 17v.01",key:"eokfpp"}],["path",{d:"M10 16v.01",key:"14uyyl"}],["path",{d:"M13 13v.01",key:"1v1k97"}],["path",{d:"M16 10v.01",key:"5169yg"}],["path",{d:"M11 20v.01",key:"cj92p8"}],["path",{d:"M17 14v.01",key:"11cswd"}],["path",{d:"M20 11v.01",key:"19e0od"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=i("Shrink",[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8",key:"17vawe"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6",key:"chjx8e"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6",key:"lav6yq"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3",key:"1pxi2q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=i("Shrub",[["path",{d:"M12 22v-7l-2-2",key:"eqv9mc"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z",key:"12jcau"}],["path",{d:"m14 14-2 2",key:"847xa2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=i("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=i("SigmaSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9",key:"9nih0i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=i("Sigma",[["path",{d:"M18 7V4H6l6 8-6 8h12v-3",key:"zis8ev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=i("SignalHigh",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=i("SignalLow",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=i("SignalMedium",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=i("SignalZero",[["path",{d:"M2 20h.01",key:"4haj6o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=i("Signal",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=i("SignpostBig",[["path",{d:"M10 9H4L2 7l2-2h6",key:"1hq7x2"}],["path",{d:"M14 5h6l2 2-2 2h-6",key:"bv62ej"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18",key:"eqpcf2"}],["path",{d:"M8 22h8",key:"rmew8v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=i("Signpost",[["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z",key:"27os56"}],["path",{d:"M12 13v8",key:"1l5pq0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=i("Siren",[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6",key:"pcx96s"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",key:"1b4s83"}],["path",{d:"M21 12h1",key:"jtio3y"}],["path",{d:"M18.5 4.5 18 5",key:"g5sp9y"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"m4.929 4.929.707.707",key:"1i51kw"}],["path",{d:"M12 12v6",key:"3ahymv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=i("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=i("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=i("Skull",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["path",{d:"M8 20v2h8v-2",key:"ded4og"}],["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20",key:"xq9p5u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=i("Slack",[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5",key:"diqz80"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",key:"183iwg"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5",key:"hqg7r1"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",key:"76g71w"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5",key:"1kmz0a"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",key:"jc4sz0"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5",key:"1omvl4"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",key:"16f3cl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=i("SlashSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=i("Slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=i("Slice",[["path",{d:"m8 14-6 6h9v-3",key:"zo3j9a"}],["path",{d:"M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z",key:"1dzx0j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=i("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=i("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=i("SmartphoneCharging",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12.667 8 10 12h4l-2.667 4",key:"h9lk2d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=i("SmartphoneNfc",[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1",key:"5nje8w"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36",key:"1g306n"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"uqvjvo"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"ujntz3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=i("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=i("SmilePlus",[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=i("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=i("Snail",[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0",key:"hneq2s"}],["circle",{cx:"10",cy:"13",r:"8",key:"194lz3"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6",key:"ixqyt7"}],["path",{d:"M18 3 19.1 5.2",key:"9tjm43"}],["path",{d:"M22 3 20.9 5.2",key:"j3odrs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=i("Snowflake",[["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"m20 16-4-4 4-4",key:"rquw4f"}],["path",{d:"m4 8 4 4-4 4",key:"12s3z9"}],["path",{d:"m16 4-4 4-4-4",key:"1tumq1"}],["path",{d:"m8 20 4-4 4 4",key:"9p200w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=i("Sofa",[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z",key:"u5qfb7"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=i("Soup",[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=i("Space",[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=i("Spade",[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",key:"40bo9n"}],["path",{d:"M12 18v4",key:"jadmvz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=i("Sparkle",[["path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z",key:"nraa5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=i("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=i("Speaker",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["circle",{cx:"12",cy:"14",r:"4",key:"1jruaj"}],["path",{d:"M12 14h.01",key:"1etili"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=i("Speech",[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",key:"11atix"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603",key:"yol142"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975",key:"ssbmkc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=i("SpellCheck2",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",key:"8mdmtu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=i("SpellCheck",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=i("Spline",[["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M5 17A12 12 0 0 1 17 5",key:"1okkup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=i("SplitSquareHorizontal",[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",key:"lubmu8"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",key:"1ag34g"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=i("SplitSquareVertical",[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=i("Split",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=i("SprayCan",[["path",{d:"M3 3h.01",key:"159qn6"}],["path",{d:"M7 5h.01",key:"1hq22a"}],["path",{d:"M11 7h.01",key:"1osv80"}],["path",{d:"M3 7h.01",key:"1xzrh3"}],["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{width:"4",height:"4",x:"15",y:"5",key:"mri9e4"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",key:"aib6hk"}],["path",{d:"m13 14 8-2",key:"1d7bmk"}],["path",{d:"m13 19 8-2",key:"1y2vml"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=i("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=i("SquareDashedBottomCode",[["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 14 2-2-2-2",key:"m075q2"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=i("SquareDashedBottom",[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=i("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=i("SquareRadical",[["path",{d:"M7 12h2l2 5 2-10h4",key:"1fxv6h"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=i("SquareStack",[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"4i38lg"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"mlte4a"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=i("SquareUserRound",[["path",{d:"M18 21a6 6 0 0 0-12 0",key:"kaz2du"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=i("SquareUser",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1m6ac2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=i("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=i("Squircle",[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9",key:"garfkc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=i("Squirrel",[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5",key:"21bitc"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4",key:"oh0fg0"}],["path",{d:"M18 13h.01",key:"9veqaj"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",key:"980v8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=i("Stamp",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",key:"1sy9ra"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13",key:"cnxgux"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=i("StarHalf",[["path",{d:"M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2",key:"nare05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=i("StarOff",[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",key:"16m0ql"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",key:"1vt8nq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=i("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=i("StepBack",[["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["polygon",{points:"14,20 4,12 14,4",key:"ypakod"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=i("StepForward",[["line",{x1:"6",x2:"6",y1:"4",y2:"20",key:"fy8qot"}],["polygon",{points:"10,4 20,12 10,20",key:"1mc1pf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=i("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=i("Sticker",[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",key:"1wis1t"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4",key:"36rjfy"}],["path",{d:"M8 13h0",key:"jdup5h"}],["path",{d:"M16 13h0",key:"l4i2ga"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1",key:"1vvgv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=i("StickyNote",[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=i("StopCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{width:"6",height:"6",x:"9",y:"9",key:"1wrtvo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=i("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=i("StretchHorizontal",[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2",key:"qdearl"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2",key:"1xrn6j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=i("StretchVertical",[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2",key:"19qu7m"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2",key:"24v0nk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=i("Strikethrough",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=i("Subscript",[["path",{d:"m4 5 8 8",key:"1eunvl"}],["path",{d:"m12 5-8 8",key:"1ah0jp"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",key:"e8ta8j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=i("SunDim",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M20 12h.01",key:"1ykeid"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M4 12h.01",key:"158zrr"}],["path",{d:"M17.657 6.343h.01",key:"31pqzk"}],["path",{d:"M17.657 17.657h.01",key:"jehnf4"}],["path",{d:"M6.343 17.657h.01",key:"gdk6ow"}],["path",{d:"M6.343 6.343h.01",key:"1uurf0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=i("SunMedium",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=i("SunMoon",[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=i("SunSnow",[["path",{d:"M10 9a3 3 0 1 0 0 6",key:"6zmtdl"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M14 21V3",key:"1llu3z"}],["path",{d:"M10 4V3",key:"pkzwkn"}],["path",{d:"M10 21v-1",key:"1u8rkd"}],["path",{d:"m3.64 18.36.7-.7",key:"105rm9"}],["path",{d:"m4.34 6.34-.7-.7",key:"d3unjp"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 4-3 3",key:"15jcng"}],["path",{d:"m14 17 3 3",key:"6tlq38"}],["path",{d:"m21 15-3-3 3-3",key:"1nlnje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=i("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=i("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=i("Sunset",[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=i("Superscript",[["path",{d:"m4 19 8-8",key:"hr47gm"}],["path",{d:"m12 19-8-8",key:"1dhhmo"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",key:"1dfcux"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=i("SwatchBook",[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z",key:"1ldrpk"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7",key:"11i5po"}],["path",{d:"M 7 17h0.01",key:"10821z"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",key:"o2gii7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=i("SwissFranc",[["path",{d:"M10 21V3h8",key:"br2l0g"}],["path",{d:"M6 16h9",key:"2py0wn"}],["path",{d:"M10 9.5h7",key:"13dmhz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=i("SwitchCamera",[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",key:"mtk2lu"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",key:"120jsl"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m18 22-3-3 3-3",key:"kgdoj7"}],["path",{d:"m6 2 3 3-3 3",key:"1fnbkv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=i("Sword",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=i("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=i("Syringe",[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=i("Table2",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=i("TableCellsMerge",[["path",{d:"M12 21v-6",key:"lihzve"}],["path",{d:"M12 9V3",key:"da5inc"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=i("TableCellsSplit",[["path",{d:"M12 15V9",key:"8c7uyn"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=i("TableColumnsSplit",[["path",{d:"M14 14v2",key:"w2a1xv"}],["path",{d:"M14 20v2",key:"1lq872"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M14 8v2",key:"i67w9a"}],["path",{d:"M2 15h8",key:"82wtch"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2",key:"up0l64"}],["path",{d:"M2 9h8",key:"yelfik"}],["path",{d:"M22 15h-4",key:"1es58f"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2",key:"pdjoqf"}],["path",{d:"M22 9h-4",key:"1luja7"}],["path",{d:"M5 3v18",key:"14hmio"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=i("TableProperties",[["path",{d:"M15 3v18",key:"14nvp0"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=i("TableRowsSplit",[["path",{d:"M14 10h2",key:"1lstlu"}],["path",{d:"M15 22v-8",key:"1fwwgm"}],["path",{d:"M15 2v4",key:"1044rn"}],["path",{d:"M2 10h2",key:"1r8dkt"}],["path",{d:"M20 10h2",key:"1ug425"}],["path",{d:"M3 19h18",key:"awlh7x"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6",key:"ibqhof"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2",key:"1uenja"}],["path",{d:"M8 10h2",key:"66od0"}],["path",{d:"M9 22v-8",key:"fmnu31"}],["path",{d:"M9 2v4",key:"j1yeou"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=i("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=i("TabletSmartphone",[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2",key:"1vrsiq"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4",key:"1j4zmg"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=i("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=i("Tablets",[["circle",{cx:"7",cy:"7",r:"5",key:"x29byf"}],["circle",{cx:"17",cy:"17",r:"5",key:"1op1d2"}],["path",{d:"M12 17h10",key:"ls21zv"}],["path",{d:"m3.46 10.54 7.08-7.08",key:"1rehiu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=i("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=i("Tags",[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=i("Tally1",[["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=i("Tally2",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=i("Tally3",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=i("Tally4",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=i("Tally5",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}],["path",{d:"M22 6 2 18",key:"h9moai"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=i("Tangent",[["circle",{cx:"17",cy:"4",r:"2",key:"y5j2s2"}],["path",{d:"M15.59 5.41 5.41 15.59",key:"l0vprr"}],["circle",{cx:"4",cy:"17",r:"2",key:"9p4efm"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12",key:"1twk4o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=i("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=i("Telescope",[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=i("TentTree",[["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}],["path",{d:"m14 5 3-3 3 3",key:"1sorif"}],["path",{d:"m14 10 3-3 3 3",key:"1jyi9h"}],["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M17 14H7l-5 8h20Z",key:"13ar7p"}],["path",{d:"M8 14v8",key:"1ghmqk"}],["path",{d:"m9 14 5 8",key:"13pgi6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=i("Tent",[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=i("TerminalSquare",[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=i("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=i("TestTube2",[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3",key:"dg8b2p"}],["path",{d:"m16 2 6 6",key:"1gw87d"}],["path",{d:"M12 16H4",key:"1cjfip"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=i("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=i("TestTubes",[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2",key:"12z67u"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2",key:"1q2nfy"}],["path",{d:"M3 2h7",key:"7s29d5"}],["path",{d:"M14 2h7",key:"7sicin"}],["path",{d:"M9 16H4",key:"1bfye3"}],["path",{d:"M20 16h-5",key:"ddnjpe"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=i("TextCursorInput",[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1",key:"18xjzo"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5",key:"fj48gi"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1",key:"1n9rhb"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7",key:"13ksps"}],["path",{d:"M9 7v10",key:"1vc8ob"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=i("TextCursor",[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1",key:"uvaxm9"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1",key:"11xy8d"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1",key:"1uw06m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=i("TextQuote",[["path",{d:"M17 6H3",key:"16j9eg"}],["path",{d:"M21 12H8",key:"scolzb"}],["path",{d:"M21 18H8",key:"1wfozv"}],["path",{d:"M3 12v6",key:"fv4c87"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=i("TextSearch",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M10 12H3",key:"1ulcyk"}],["path",{d:"M10 18H3",key:"13769t"}],["circle",{cx:"17",cy:"15",r:"3",key:"1upz2a"}],["path",{d:"m21 19-1.9-1.9",key:"dwi7p8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=i("TextSelect",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8",key:"1758g8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12",key:"197423"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16",key:"37cgm6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=i("Text",[["path",{d:"M17 6.1H3",key:"wptmhv"}],["path",{d:"M21 12.1H3",key:"1j38uz"}],["path",{d:"M15.1 18H3",key:"1nb16a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=i("Theater",[["path",{d:"M2 10s3-3 3-8",key:"3xiif0"}],["path",{d:"M22 10s-3-3-3-8",key:"ioaa5q"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8",key:"16fkpi"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8",key:"b9eulq"}],["path",{d:"M2 10s2 2 2 5",key:"1au1lb"}],["path",{d:"M22 10s-2 2-2 5",key:"qi2y5e"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"1vsc2m"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"hrha4u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=i("ThermometerSnowflake",[["path",{d:"M2 12h10",key:"19562f"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"m3 9 3 3-3 3",key:"1sas0l"}],["path",{d:"M12 6 9 9 6 6",key:"pfrgxu"}],["path",{d:"m6 18 3-3 1.5 1.5",key:"1e277p"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=i("ThermometerSun",[["path",{d:"M12 9a4 4 0 0 0-2 7.5",key:"1jvsq6"}],["path",{d:"M12 3v2",key:"1w22ol"}],["path",{d:"m6.6 18.4-1.4 1.4",key:"w2yidj"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}],["path",{d:"M4 13H2",key:"118le4"}],["path",{d:"M6.34 7.34 4.93 5.93",key:"1brd51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=i("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=i("ThumbsDown",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",key:"s6e0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=i("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=i("TicketCheck",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=i("TicketMinus",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=i("TicketPercent",[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"1l48ns"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=i("TicketPlus",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=i("TicketSlash",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=i("TicketX",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=i("Ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=i("TimerOff",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=i("TimerReset",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=i("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=i("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=i("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=i("Tornado",[["path",{d:"M21 4H3",key:"1hwok0"}],["path",{d:"M18 8H6",key:"41n648"}],["path",{d:"M19 12H9",key:"1g4lpz"}],["path",{d:"M16 16h-6",key:"1j5d54"}],["path",{d:"M11 20H9",key:"39obr8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=i("Torus",[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2",key:"1b2qxu"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5",key:"h8emeu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=i("TouchpadOff",[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16",key:"lnt0bk"}],["path",{d:"M2 14h12",key:"d8icqz"}],["path",{d:"M22 14h-2",key:"jrx26d"}],["path",{d:"M12 20v-6",key:"1rm09r"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10",key:"11y8e4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=i("Touchpad",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M12 20v-6",key:"1rm09r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=i("TowerControl",[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",key:"1pledb"}],["path",{d:"M8 13v9",key:"hmv0ci"}],["path",{d:"M16 22v-9",key:"ylnf1u"}],["path",{d:"m9 6 1 7",key:"dpdgam"}],["path",{d:"m15 6-1 7",key:"ls7zgu"}],["path",{d:"M12 6V2",key:"1pj48d"}],["path",{d:"M13 2h-2",key:"mj6ths"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=i("ToyBrick",[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1",key:"158fvp"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",key:"s0042v"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",key:"9wmeh2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=i("Tractor",[["path",{d:"m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1",key:"2w242w"}],["path",{d:"M16 18h-5",key:"bq60fd"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573",key:"1kv8ia"}],["path",{d:"M3 4h9l1 7.246",key:"d639it"}],["path",{d:"M4 11V4",key:"9ft8pt"}],["path",{d:"M7 15h.01",key:"k5ht0j"}],["path",{d:"M8 10.1V4",key:"1jgyzo"}],["circle",{cx:"18",cy:"18",r:"2",key:"1emm8v"}],["circle",{cx:"7",cy:"15",r:"5",key:"ddtuc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=i("TrafficCone",[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0",key:"flyxqv"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3",key:"1nlxxg"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",key:"vz7x1l"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",key:"1xfzlw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=i("TrainFrontTunnel",[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10",key:"o0fyp0"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8",key:"m8q3n9"}],["path",{d:"M10 15h.01",key:"44in9x"}],["path",{d:"M14 15h.01",key:"5mohn5"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z",key:"hckbmu"}],["path",{d:"m9 19-2 3",key:"iij7hm"}],["path",{d:"m15 19 2 3",key:"npx8sa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=i("TrainFront",[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1",key:"1v71zp"}],["path",{d:"m9 15-1-1",key:"1yrq24"}],["path",{d:"m15 15 1-1",key:"1t0d6s"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",key:"1p0hjs"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m16 19 2 3",key:"xo31yx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=i("TrainTrack",[["path",{d:"M2 17 17 2",key:"18b09t"}],["path",{d:"m2 14 8 8",key:"1gv9hu"}],["path",{d:"m5 11 8 8",key:"189pqp"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"m11 5 8 8",key:"ummqn6"}],["path",{d:"m14 2 8 8",key:"1vk7dn"}],["path",{d:"M7 22 22 7",key:"15mb1i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=i("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h0",key:"q9eq1f"}],["path",{d:"M16 15h0",key:"pzrbjg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=i("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=i("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=i("TreeDeciduous",[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=i("TreePine",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=i("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"yh07w9"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=i("Trello",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["rect",{width:"3",height:"9",x:"7",y:"7",key:"14n3xi"}],["rect",{width:"3",height:"5",x:"14",y:"7",key:"s4azjd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=i("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=i("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=i("TriangleRight",[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",key:"183wce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=i("Triangle",[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=i("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=i("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=i("Turtle",[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",key:"1lbbv7"}],["path",{d:"M4.82 7.9 8 10",key:"m9wose"}],["path",{d:"M15.18 7.9 12 10",key:"p8dp2u"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2",key:"12nsm7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=i("Tv2",[["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=i("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=i("Twitch",[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",key:"c0yzno"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=i("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=i("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=i("UmbrellaOff",[["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575",key:"eki10q"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455",key:"n2ayka"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=i("Umbrella",[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z",key:"1teyop"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0",key:"ulpmoc"}],["path",{d:"M12 2v1",key:"11qlp1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=i("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=i("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11",key:"llx8ln"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=i("UndoDot",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=i("Undo",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=i("UnfoldHorizontal",[["path",{d:"M16 12h6",key:"15xry1"}],["path",{d:"M8 12H2",key:"1jqql6"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 15 3-3-3-3",key:"wjy7rq"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=i("UnfoldVertical",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m15 5-3-3-3 3",key:"itvq4r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=i("Ungroup",[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1",key:"nzclkv"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1",key:"4tytwb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=i("Unlink2",[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",key:"1re2ne"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=i("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=i("UnlockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5",key:"car5b7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=i("Unlock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=i("Unplug",[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=i("UploadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=i("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=i("Usb",[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=i("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=i("UserCog",[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=i("UserMinus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=i("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=i("UserRoundCheck",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=i("UserRoundCog",[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m19.5 14.3-.4.9",key:"1eb35c"}],["path",{d:"m16.9 20.8-.4.9",key:"dfjc4z"}],["path",{d:"m21.7 19.5-.9-.4",key:"q4dx6b"}],["path",{d:"m15.2 16.9-.9-.4",key:"1r0w5f"}],["path",{d:"m21.7 16.5-.9.4",key:"1knoei"}],["path",{d:"m15.2 19.1-.9.4",key:"j188fs"}],["path",{d:"m19.5 21.7-.4-.9",key:"1tonu5"}],["path",{d:"m16.9 15.2-.4-.9",key:"699xu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=i("UserRoundMinus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=i("UserRoundPlus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=i("UserRoundSearch",[["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.9-1.9",key:"1e5ubv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=i("UserRoundX",[["path",{d:"M2 21a8 8 0 0 1 11.873-7",key:"74fkxq"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m17 17 5 5",key:"p7ous7"}],["path",{d:"m22 17-5 5",key:"gqnmv0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=i("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w9=i("UserSearch",[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=i("UserX",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=i("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=i("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=i("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=i("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=i("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=i("UtilityPole",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M3 3v2",key:"9imdir"}],["path",{d:"M7 3v2",key:"n0os7"}],["path",{d:"M17 3v2",key:"1l2re6"}],["path",{d:"M21 3v2",key:"1duuac"}],["path",{d:"m19 5-7 7-7-7",key:"133zxf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=i("Variable",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=i("Vault",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["path",{d:"m7.9 7.9 2.7 2.7",key:"hpeyl3"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}],["path",{d:"m13.4 10.6 2.7-2.7",key:"264c1n"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["path",{d:"m7.9 16.1 2.7-2.7",key:"p81g5e"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor",key:"fubopw"}],["path",{d:"m13.4 13.4 2.7 2.7",key:"abhel3"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=i("Vegan",[["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14",key:"qiv7li"}],["path",{d:"M16 8c4 0 6-2 6-6-4 0-6 2-6 6",key:"n7eohy"}],["path",{d:"M17.41 3.6a10 10 0 1 0 3 3",key:"1dion0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=i("VenetianMask",[["path",{d:"M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z",key:"1g6z3j"}],["path",{d:"M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z",key:"c2lwnf"}],["path",{d:"M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z",key:"njd9zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=i("VibrateOff",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",key:"1hbad5"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34",key:"1x5tf0"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=i("Vibrate",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1",key:"1oyrl4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=i("VideoOff",[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8",key:"ubwiq0"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z",key:"1l10zd"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=i("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=i("Videotape",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 8h20",key:"d11cs7"}],["circle",{cx:"8",cy:"14",r:"2",key:"1k2qr5"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"14",r:"2",key:"14k7lr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=i("View",[["path",{d:"M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z",key:"vptub8"}],["path",{d:"M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",key:"10lhjs"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2",key:"mrq65r"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2",key:"be3xqs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=i("Voicemail",[["circle",{cx:"6",cy:"12",r:"4",key:"1ehtga"}],["circle",{cx:"18",cy:"12",r:"4",key:"4vafl8"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16",key:"pmt8us"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=i("Volume1",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O9=i("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U9=i("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=i("Volume",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=i("Vote",[["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",key:"1ezoue"}],["path",{d:"M22 19H2",key:"nuriw5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z9=i("Wallet2",[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W9=i("WalletCards",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G9=i("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=i("Wallpaper",[["circle",{cx:"8",cy:"9",r:"2",key:"gjzl9d"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"69xh40"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=i("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=i("Wand",[["path",{d:"M15 4V2",key:"z1p9b7"}],["path",{d:"M15 16v-2",key:"px0unx"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M17.8 11.8 19 13",key:"yihg8r"}],["path",{d:"M15 9h0",key:"kg5t1u"}],["path",{d:"M17.8 6.2 19 5",key:"fd4us0"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M12.2 6.2 11 5",key:"i3da3b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q9=i("Warehouse",[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=i("WashingMachine",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=i("Watch",[["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["polyline",{points:"12 10 12 12 13 13",key:"19dquz"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",key:"18k57s"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",key:"16ny36"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=i("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=i("Waypoints",[["circle",{cx:"12",cy:"4.5",r:"2.5",key:"r5ysbb"}],["path",{d:"m10.2 6.3-3.9 3.9",key:"1nzqf6"}],["circle",{cx:"4.5",cy:"12",r:"2.5",key:"jydg6v"}],["path",{d:"M7 12h10",key:"b7w52i"}],["circle",{cx:"19.5",cy:"12",r:"2.5",key:"1piiel"}],["path",{d:"m13.8 17.7 3.9-3.9",key:"1wyg1y"}],["circle",{cx:"12",cy:"19.5",r:"2.5",key:"13o1pw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=i("Webcam",[["circle",{cx:"12",cy:"10",r:"8",key:"1gshiw"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 22h10",key:"10w4w3"}],["path",{d:"M12 22v-4",key:"1utk9m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=i("WebhookOff",[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15",key:"1tvl6x"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66",key:"q04jfq"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05",key:"azowf0"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7",key:"5joiws"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414",key:"cangb8"}],["path",{d:"m12 6 .6 1",key:"tpjl1n"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=i("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=i("Weight",[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",key:"56o5sh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=i("WheatOff",[["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"m16 8-1.17 1.17",key:"1qqm82"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97",key:"4wz8re"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62",key:"rves66"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",key:"ak46r"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",key:"1tw520"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=i("Wheat",[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=i("WholeWord",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=i("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=i("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=i("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=i("WineOff",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h3m7 0h-1.343",key:"v48bem"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",key:"1ymjlu"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=i("Wine",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=i("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=i("WrapText",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4",key:"1cl7v7"}],["polyline",{points:"16 16 14 18 16 20",key:"1jznyi"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18",key:"1h33wv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=i("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=i("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=i("XOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=i("XSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=i("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=i("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=i("ZapOff",[["polyline",{points:"12.41 6.75 13 2 10.57 4.92",key:"122m05"}],["polyline",{points:"18.57 12.91 21 10 15.66 10",key:"16r43o"}],["polyline",{points:"8 8 3 14 12 14 11 22 16 16",key:"tmh4bc"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=i("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=i("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=i("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MB=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:zr,AArrowUp:jr,ALargeSmall:Vr,Accessibility:qr,Activity:Hr,ActivitySquare:Tr,AirVent:Dr,Airplay:Fr,AlarmClock:Br,AlarmClockCheck:t1,AlarmClockMinus:n1,AlarmClockOff:Rr,AlarmClockPlus:a1,AlarmSmoke:Er,Album:Or,AlertCircle:ni,AlertOctagon:Ur,AlertTriangle:Nr,AlignCenter:Wr,AlignCenterHorizontal:_r,AlignCenterVertical:Zr,AlignEndHorizontal:Gr,AlignEndVertical:Kr,AlignHorizontalDistributeCenter:$r,AlignHorizontalDistributeEnd:Xr,AlignHorizontalDistributeStart:Qr,AlignHorizontalJustifyCenter:Yr,AlignHorizontalJustifyEnd:Jr,AlignHorizontalJustifyStart:eo,AlignHorizontalSpaceAround:to,AlignHorizontalSpaceBetween:no,AlignJustify:ao,AlignLeft:io,AlignRight:ro,AlignStartHorizontal:oo,AlignStartVertical:co,AlignVerticalDistributeCenter:so,AlignVerticalDistributeEnd:lo,AlignVerticalDistributeStart:ho,AlignVerticalJustifyCenter:uo,AlignVerticalJustifyEnd:yo,AlignVerticalJustifyStart:po,AlignVerticalSpaceAround:ko,AlignVerticalSpaceBetween:fo,Ambulance:mo,Ampersand:vo,Ampersands:go,Anchor:Mo,Angry:xo,Annoyed:wo,Antenna:Lo,Anvil:Co,Aperture:So,AppWindow:Io,Apple:Po,Archive:zo,ArchiveRestore:Ao,ArchiveX:bo,AreaChart:jo,Armchair:Vo,ArrowBigDown:To,ArrowBigDownDash:qo,ArrowBigLeft:Do,ArrowBigLeftDash:Ho,ArrowBigRight:Ro,ArrowBigRightDash:Fo,ArrowBigUp:Eo,ArrowBigUpDash:Bo,ArrowDown:i2,ArrowDown01:Oo,ArrowDown10:Uo,ArrowDownAZ:i1,ArrowDownCircle:No,ArrowDownFromLine:_o,ArrowDownLeft:Ko,ArrowDownLeftFromCircle:Zo,ArrowDownLeftFromSquare:Wo,ArrowDownLeftSquare:Go,ArrowDownNarrowWide:$o,ArrowDownRight:Jo,ArrowDownRightFromCircle:Xo,ArrowDownRightFromSquare:Qo,ArrowDownRightSquare:Yo,ArrowDownSquare:e2,ArrowDownToDot:t2,ArrowDownToLine:n2,ArrowDownUp:a2,ArrowDownWideNarrow:r1,ArrowDownZA:o1,ArrowLeft:d2,ArrowLeftCircle:r2,ArrowLeftFromLine:o2,ArrowLeftRight:c2,ArrowLeftSquare:s2,ArrowLeftToLine:l2,ArrowRight:f2,ArrowRightCircle:h2,ArrowRightFromLine:u2,ArrowRightLeft:y2,ArrowRightSquare:p2,ArrowRightToLine:k2,ArrowUp:T2,ArrowUp01:m2,ArrowUp10:v2,ArrowUpAZ:c1,ArrowUpCircle:g2,ArrowUpDown:M2,ArrowUpFromDot:x2,ArrowUpFromLine:w2,ArrowUpLeft:I2,ArrowUpLeftFromCircle:L2,ArrowUpLeftFromSquare:C2,ArrowUpLeftSquare:S2,ArrowUpNarrowWide:s1,ArrowUpRight:z2,ArrowUpRightFromCircle:P2,ArrowUpRightFromSquare:A2,ArrowUpRightSquare:b2,ArrowUpSquare:j2,ArrowUpToLine:V2,ArrowUpWideNarrow:q2,ArrowUpZA:l1,ArrowsUpFromLine:H2,Asterisk:D2,AsteriskSquare:d1,AtSign:F2,Atom:R2,AudioLines:B2,AudioWaveform:E2,Award:aa,Axe:O2,Axis3d:h1,Baby:U2,Backpack:N2,Badge:rc,BadgeAlert:_2,BadgeCent:Z2,BadgeCheck:u1,BadgeDollarSign:W2,BadgeEuro:G2,BadgeHelp:K2,BadgeIndianRupee:$2,BadgeInfo:X2,BadgeJapaneseYen:Q2,BadgeMinus:Y2,BadgePercent:J2,BadgePlus:ec,BadgePoundSterling:tc,BadgeRussianRuble:nc,BadgeSwissFranc:ac,BadgeX:ic,BaggageClaim:oc,Ban:cc,Banana:sc,Banknote:lc,BarChart:fc,BarChart2:dc,BarChart3:hc,BarChart4:uc,BarChartBig:yc,BarChartHorizontal:kc,BarChartHorizontalBig:pc,Barcode:mc,Baseline:vc,Bath:gc,Battery:Sc,BatteryCharging:Mc,BatteryFull:xc,BatteryLow:wc,BatteryMedium:Lc,BatteryWarning:Cc,Beaker:Ic,Bean:Ac,BeanOff:Pc,Bed:jc,BedDouble:bc,BedSingle:zc,Beef:Vc,Beer:qc,Bell:Ec,BellDot:Tc,BellElectric:Hc,BellMinus:Dc,BellOff:Fc,BellPlus:Rc,BellRing:Bc,BetweenHorizontalEnd:y1,BetweenHorizontalStart:p1,BetweenVerticalEnd:Oc,BetweenVerticalStart:Uc,Bike:Nc,Binary:ia,Biohazard:_c,Bird:Zc,Bitcoin:Wc,Blend:Gc,Blinds:Kc,Blocks:$c,Bluetooth:Jc,BluetoothConnected:Xc,BluetoothOff:Qc,BluetoothSearching:Yc,Bold:es,Bolt:ts,Bomb:ns,Bone:as,Book:Is,BookA:is,BookAudio:rs,BookCheck:os,BookCopy:cs,BookDashed:k1,BookDown:ss,BookHeadphones:ls,BookHeart:ds,BookImage:hs,BookKey:us,BookLock:ys,BookMarked:ps,BookMinus:ks,BookOpen:vs,BookOpenCheck:fs,BookOpenText:ms,BookPlus:gs,BookText:Ms,BookType:xs,BookUp:Ls,BookUp2:ws,BookUser:Cs,BookX:Ss,Bookmark:js,BookmarkCheck:Ps,BookmarkMinus:As,BookmarkPlus:bs,BookmarkX:zs,BoomBox:Vs,Bot:kt,BotMessageSquare:qs,Box:Hs,BoxSelect:Ts,Boxes:Ds,Braces:f1,Brackets:Fs,Brain:Es,BrainCircuit:Rs,BrainCog:Bs,BrickWall:Os,Briefcase:Us,BringToFront:Ns,Brush:_s,Bug:Gs,BugOff:Zs,BugPlay:Ws,Building:$s,Building2:Ks,Bus:Qs,BusFront:Xs,Cable:Js,CableCar:Ys,Cake:tl,CakeSlice:el,Calculator:nl,Calendar:vl,CalendarCheck:il,CalendarCheck2:al,CalendarClock:rl,CalendarDays:ol,CalendarFold:cl,CalendarHeart:sl,CalendarMinus:dl,CalendarMinus2:ll,CalendarOff:hl,CalendarPlus:yl,CalendarPlus2:ul,CalendarRange:pl,CalendarSearch:kl,CalendarX:ml,CalendarX2:fl,Camera:Ml,CameraOff:gl,CandlestickChart:xl,Candy:Cl,CandyCane:wl,CandyOff:Ll,Captions:m1,CaptionsOff:Sl,Car:Al,CarFront:Il,CarTaxiFront:Pl,Caravan:bl,Carrot:zl,CaseLower:jl,CaseSensitive:Vl,CaseUpper:ql,CassetteTape:Tl,Cast:Hl,Castle:Dl,Cat:Fl,Cctv:Rl,Check:Nl,CheckCheck:Bl,CheckCircle:El,CheckCircle2:ai,CheckSquare:Ul,CheckSquare2:Ol,ChefHat:_l,Cherry:Zl,ChevronDown:ii,ChevronDownCircle:Wl,ChevronDownSquare:Gl,ChevronFirst:Kl,ChevronLast:$l,ChevronLeft:ri,ChevronLeftCircle:Xl,ChevronLeftSquare:Ql,ChevronRight:oi,ChevronRightCircle:Yl,ChevronRightSquare:Jl,ChevronUp:n0,ChevronUpCircle:e0,ChevronUpSquare:t0,ChevronsDown:i0,ChevronsDownUp:a0,ChevronsLeft:o0,ChevronsLeftRight:r0,ChevronsRight:s0,ChevronsRightLeft:c0,ChevronsUp:d0,ChevronsUpDown:l0,Chrome:h0,Church:u0,Cigarette:p0,CigaretteOff:y0,Circle:C0,CircleDashed:k0,CircleDollarSign:f0,CircleDot:v0,CircleDotDashed:m0,CircleEllipsis:g0,CircleEqual:M0,CircleFadingPlus:x0,CircleOff:w0,CircleSlash:L0,CircleSlash2:v1,CircleUser:M1,CircleUserRound:g1,CircuitBoard:S0,Citrus:I0,Clapperboard:P0,Clipboard:D0,ClipboardCheck:A0,ClipboardCopy:b0,ClipboardList:z0,ClipboardMinus:j0,ClipboardPaste:V0,ClipboardPen:w1,ClipboardPenLine:x1,ClipboardPlus:q0,ClipboardType:T0,ClipboardX:H0,Clock:$0,Clock1:F0,Clock10:R0,Clock11:B0,Clock12:E0,Clock2:O0,Clock3:U0,Clock4:N0,Clock5:_0,Clock6:Z0,Clock7:W0,Clock8:G0,Clock9:K0,Cloud:ld,CloudCog:X0,CloudDrizzle:Q0,CloudFog:Y0,CloudHail:J0,CloudLightning:ed,CloudMoon:nd,CloudMoonRain:td,CloudOff:ad,CloudRain:rd,CloudRainWind:id,CloudSnow:od,CloudSun:sd,CloudSunRain:cd,Cloudy:dd,Clover:hd,Club:ud,Code:pd,Code2:yd,CodeSquare:L1,Codepen:kd,Codesandbox:fd,Coffee:md,Cog:vd,Coins:gd,Columns2:C1,Columns3:S1,Columns4:Md,Combine:xd,Command:wd,Compass:Ld,Component:Cd,Computer:Sd,ConciergeBell:Id,Cone:Pd,Construction:Ad,Contact:zd,Contact2:bd,Container:jd,Contrast:Vd,Cookie:qd,CookingPot:Td,Copy:Ed,CopyCheck:Hd,CopyMinus:Dd,CopyPlus:Fd,CopySlash:Rd,CopyX:Bd,Copyleft:Od,Copyright:Ud,CornerDownLeft:Nd,CornerDownRight:_d,CornerLeftDown:Zd,CornerLeftUp:Wd,CornerRightDown:Gd,CornerRightUp:Kd,CornerUpLeft:$d,CornerUpRight:Xd,Cpu:Qd,CreativeCommons:Yd,CreditCard:Jd,Croissant:eh,Crop:th,Cross:nh,Crosshair:ah,Crown:ih,Cuboid:rh,CupSoda:oh,Currency:ch,Cylinder:sh,Database:hh,DatabaseBackup:lh,DatabaseZap:dh,Delete:uh,Dessert:yh,Diameter:ph,Diamond:kh,Dice1:fh,Dice2:mh,Dice3:vh,Dice4:gh,Dice5:Mh,Dice6:xh,Dices:wh,Diff:Lh,Disc:Ph,Disc2:Ch,Disc3:Sh,DiscAlbum:Ih,Divide:zh,DivideCircle:Ah,DivideSquare:bh,Dna:Vh,DnaOff:jh,Dog:qh,DollarSign:Th,Donut:Hh,DoorClosed:Dh,DoorOpen:Fh,Dot:Rh,DotSquare:I1,Download:Eh,DownloadCloud:Bh,DraftingCompass:Oh,Drama:Uh,Dribbble:Nh,Drill:_h,Droplet:Zh,Droplets:Wh,Drum:Gh,Drumstick:Kh,Dumbbell:$h,Ear:Qh,EarOff:Xh,Earth:P1,EarthLock:Yh,Eclipse:Jh,Egg:nu,EggFried:eu,EggOff:tu,Equal:iu,EqualNot:au,EqualSquare:A1,Eraser:ru,Euro:ou,Expand:cu,ExternalLink:su,Eye:du,EyeOff:lu,Facebook:hu,Factory:uu,Fan:yu,FastForward:pu,Feather:ku,Fence:fu,FerrisWheel:mu,Figma:vu,File:vy,FileArchive:gu,FileAudio:xu,FileAudio2:Mu,FileAxis3d:b1,FileBadge:Lu,FileBadge2:wu,FileBarChart:Su,FileBarChart2:Cu,FileBox:Iu,FileCheck:Au,FileCheck2:Pu,FileClock:bu,FileCode:ju,FileCode2:zu,FileCog:z1,FileDiff:Vu,FileDigit:qu,FileDown:Tu,FileHeart:Hu,FileImage:Du,FileInput:Fu,FileJson:Bu,FileJson2:Ru,FileKey:Ou,FileKey2:Eu,FileLineChart:Uu,FileLock:_u,FileLock2:Nu,FileMinus:Wu,FileMinus2:Zu,FileMusic:Gu,FileOutput:Ku,FilePen:V1,FilePenLine:j1,FilePieChart:$u,FilePlus:Qu,FilePlus2:Xu,FileQuestion:Yu,FileScan:Ju,FileSearch:ty,FileSearch2:ey,FileSliders:ny,FileSpreadsheet:ay,FileStack:iy,FileSymlink:ry,FileTerminal:oy,FileText:cy,FileType:ly,FileType2:sy,FileUp:dy,FileVideo:uy,FileVideo2:hy,FileVolume:py,FileVolume2:yy,FileWarning:ky,FileX:my,FileX2:fy,Files:gy,Film:My,Filter:wy,FilterX:xy,Fingerprint:Ly,FireExtinguisher:Cy,Fish:Py,FishOff:Sy,FishSymbol:Iy,Flag:jy,FlagOff:Ay,FlagTriangleLeft:by,FlagTriangleRight:zy,Flame:qy,FlameKindling:Vy,Flashlight:Hy,FlashlightOff:Ty,FlaskConical:Fy,FlaskConicalOff:Dy,FlaskRound:Ry,FlipHorizontal:Ey,FlipHorizontal2:By,FlipVertical:Uy,FlipVertical2:Oy,Flower:_y,Flower2:Ny,Focus:Zy,FoldHorizontal:Wy,FoldVertical:Gy,Folder:Mp,FolderArchive:Ky,FolderCheck:$y,FolderClock:Xy,FolderClosed:Qy,FolderCog:q1,FolderDot:Yy,FolderDown:Jy,FolderGit:tp,FolderGit2:ep,FolderHeart:np,FolderInput:ap,FolderKanban:ip,FolderKey:rp,FolderLock:op,FolderMinus:cp,FolderOpen:lp,FolderOpenDot:sp,FolderOutput:dp,FolderPen:T1,FolderPlus:hp,FolderRoot:up,FolderSearch:pp,FolderSearch2:yp,FolderSymlink:kp,FolderSync:fp,FolderTree:mp,FolderUp:vp,FolderX:gp,Folders:xp,Footprints:wp,Forklift:Lp,FormInput:Cp,Forward:Sp,Frame:Ip,Framer:Pp,Frown:Ap,Fuel:bp,Fullscreen:zp,FunctionSquare:jp,GalleryHorizontal:qp,GalleryHorizontalEnd:Vp,GalleryThumbnails:Tp,GalleryVertical:Dp,GalleryVerticalEnd:Hp,Gamepad:Rp,Gamepad2:Fp,GanttChart:Bp,GanttChartSquare:et,Gauge:Op,GaugeCircle:Ep,Gavel:Up,Gem:Np,Ghost:_p,Gift:Zp,GitBranch:Gp,GitBranchPlus:Wp,GitCommitHorizontal:H1,GitCommitVertical:Kp,GitCompare:Xp,GitCompareArrows:$p,GitFork:Qp,GitGraph:Yp,GitMerge:Jp,GitPullRequest:rk,GitPullRequestArrow:ek,GitPullRequestClosed:tk,GitPullRequestCreate:ak,GitPullRequestCreateArrow:nk,GitPullRequestDraft:ik,Github:ci,Gitlab:ok,GlassWater:ck,Glasses:sk,Globe:dk,GlobeLock:lk,Goal:hk,Grab:uk,GraduationCap:ra,Grape:yk,Grid2x2:D1,Grid3x3:tt,Grip:fk,GripHorizontal:pk,GripVertical:kk,Group:mk,Guitar:vk,Hammer:gk,Hand:Ck,HandCoins:Mk,HandHeart:xk,HandHelping:F1,HandMetal:wk,HandPlatter:Lk,Handshake:Sk,HardDrive:Ak,HardDriveDownload:Ik,HardDriveUpload:Pk,HardHat:bk,Hash:zk,Haze:jk,HdmiPort:Vk,Heading:Bk,Heading1:qk,Heading2:Tk,Heading3:Hk,Heading4:Dk,Heading5:Fk,Heading6:Rk,Headphones:Ek,Headset:Ok,Heart:Wk,HeartCrack:Uk,HeartHandshake:Nk,HeartOff:_k,HeartPulse:Zk,Heater:Gk,HelpCircle:Kk,Hexagon:$k,Highlighter:Xk,History:Qk,Home:Yk,Hop:e4,HopOff:Jk,Hotel:t4,Hourglass:n4,IceCream:i4,IceCream2:a4,Image:d4,ImageDown:r4,ImageMinus:o4,ImageOff:c4,ImagePlus:s4,ImageUp:l4,Images:h4,Import:u4,Inbox:y4,Indent:p4,IndianRupee:k4,Infinity:f4,Info:m4,InspectionPanel:v4,Instagram:g4,Italic:M4,IterationCcw:x4,IterationCw:w4,JapaneseYen:L4,Joystick:C4,Kanban:S4,KanbanSquare:B1,KanbanSquareDashed:R1,Key:A4,KeyRound:I4,KeySquare:P4,Keyboard:z4,KeyboardMusic:b4,Lamp:D4,LampCeiling:j4,LampDesk:V4,LampFloor:q4,LampWallDown:T4,LampWallUp:H4,LandPlot:F4,Landmark:R4,Languages:B4,Laptop:O4,Laptop2:E4,Lasso:N4,LassoSelect:U4,Laugh:_4,Layers:G4,Layers2:Z4,Layers3:W4,LayoutDashboard:K4,LayoutGrid:$4,LayoutList:X4,LayoutPanelLeft:Q4,LayoutPanelTop:Y4,LayoutTemplate:J4,Leaf:e5,LeafyGreen:t5,Library:i5,LibraryBig:n5,LibrarySquare:a5,LifeBuoy:r5,Ligature:o5,Lightbulb:s5,LightbulbOff:c5,LineChart:l5,Link:u5,Link2:h5,Link2Off:d5,Linkedin:si,List:P5,ListChecks:y5,ListCollapse:p5,ListEnd:k5,ListFilter:f5,ListMinus:m5,ListMusic:v5,ListOrdered:g5,ListPlus:M5,ListRestart:x5,ListStart:w5,ListTodo:L5,ListTree:C5,ListVideo:S5,ListX:I5,Loader:b5,Loader2:A5,Locate:V5,LocateFixed:z5,LocateOff:j5,Lock:T5,LockKeyhole:q5,LogIn:H5,LogOut:D5,Lollipop:F5,Luggage:R5,MSquare:B5,Magnet:E5,Mail:li,MailCheck:O5,MailMinus:U5,MailOpen:N5,MailPlus:_5,MailQuestion:Z5,MailSearch:W5,MailWarning:G5,MailX:K5,Mailbox:$5,Mails:X5,Map:e3,MapPin:Y5,MapPinOff:Q5,MapPinned:J5,Martini:t3,Maximize:a3,Maximize2:n3,Medal:i3,Megaphone:o3,MegaphoneOff:r3,Meh:c3,MemoryStick:s3,Menu:d3,MenuSquare:l3,Merge:h3,MessageCircle:w3,MessageCircleCode:u3,MessageCircleDashed:y3,MessageCircleHeart:p3,MessageCircleMore:k3,MessageCircleOff:f3,MessageCirclePlus:m3,MessageCircleQuestion:v3,MessageCircleReply:g3,MessageCircleWarning:M3,MessageCircleX:x3,MessageSquare:di,MessageSquareCode:L3,MessageSquareDashed:C3,MessageSquareDiff:S3,MessageSquareDot:I3,MessageSquareHeart:P3,MessageSquareMore:A3,MessageSquareOff:b3,MessageSquarePlus:z3,MessageSquareQuote:j3,MessageSquareReply:V3,MessageSquareShare:q3,MessageSquareText:T3,MessageSquareWarning:H3,MessageSquareX:D3,MessagesSquare:F3,Mic:E3,Mic2:R3,MicOff:B3,Microscope:O3,Microwave:U3,Milestone:N3,Milk:Z3,MilkOff:_3,Minimize:G3,Minimize2:W3,Minus:X3,MinusCircle:K3,MinusSquare:$3,Monitor:lf,MonitorCheck:Q3,MonitorDot:Y3,MonitorDown:J3,MonitorOff:ef,MonitorPause:tf,MonitorPlay:nf,MonitorSmartphone:af,MonitorSpeaker:rf,MonitorStop:of,MonitorUp:cf,MonitorX:sf,Moon:hf,MoonStar:df,MoreHorizontal:uf,MoreVertical:yf,Mountain:kf,MountainSnow:pf,Mouse:Mf,MousePointer:gf,MousePointer2:ff,MousePointerClick:mf,MousePointerSquare:E1,MousePointerSquareDashed:vf,Move:qf,Move3d:O1,MoveDiagonal:wf,MoveDiagonal2:xf,MoveDown:Sf,MoveDownLeft:Lf,MoveDownRight:Cf,MoveHorizontal:If,MoveLeft:Pf,MoveRight:Af,MoveUp:jf,MoveUpLeft:bf,MoveUpRight:zf,MoveVertical:Vf,Music:Ff,Music2:Tf,Music3:Hf,Music4:Df,Navigation:Of,Navigation2:Bf,Navigation2Off:Rf,NavigationOff:Ef,Network:Uf,Newspaper:oa,Nfc:Nf,Notebook:Gf,NotebookPen:_f,NotebookTabs:Zf,NotebookText:Wf,NotepadText:$f,NotepadTextDashed:Kf,Nut:Qf,NutOff:Xf,Octagon:Yf,Option:Jf,Orbit:e6,Outdent:t6,Package:l6,Package2:n6,PackageCheck:a6,PackageMinus:i6,PackageOpen:r6,PackagePlus:o6,PackageSearch:c6,PackageX:s6,PaintBucket:d6,PaintRoller:h6,Paintbrush:y6,Paintbrush2:u6,Palette:p6,Palmtree:k6,PanelBottom:v6,PanelBottomClose:f6,PanelBottomDashed:U1,PanelBottomOpen:m6,PanelLeft:W1,PanelLeftClose:N1,PanelLeftDashed:_1,PanelLeftOpen:Z1,PanelRight:x6,PanelRightClose:g6,PanelRightDashed:G1,PanelRightOpen:M6,PanelTop:C6,PanelTopClose:w6,PanelTopDashed:K1,PanelTopOpen:L6,PanelsLeftBottom:S6,PanelsRightBottom:I6,PanelsTopLeft:$1,Paperclip:P6,Parentheses:A6,ParkingCircle:z6,ParkingCircleOff:b6,ParkingMeter:j6,ParkingSquare:q6,ParkingSquareOff:V6,PartyPopper:T6,Pause:F6,PauseCircle:H6,PauseOctagon:D6,PawPrint:R6,PcCase:B6,Pen:Q1,PenLine:X1,PenTool:E6,Pencil:N6,PencilLine:O6,PencilRuler:U6,Pentagon:_6,Percent:K6,PercentCircle:Z6,PercentDiamond:W6,PercentSquare:G6,PersonStanding:$6,Phone:nm,PhoneCall:X6,PhoneForwarded:Q6,PhoneIncoming:Y6,PhoneMissed:J6,PhoneOff:em,PhoneOutgoing:tm,Pi:im,PiSquare:am,Piano:rm,Pickaxe:om,PictureInPicture:sm,PictureInPicture2:cm,PieChart:lm,PiggyBank:dm,Pilcrow:um,PilcrowSquare:hm,Pill:ym,Pin:km,PinOff:pm,Pipette:fm,Pizza:mm,Plane:Mm,PlaneLanding:vm,PlaneTakeoff:gm,Play:Lm,PlayCircle:xm,PlaySquare:wm,Plug:Pm,Plug2:Cm,PlugZap:Im,PlugZap2:Sm,Plus:zm,PlusCircle:Am,PlusSquare:bm,Pocket:Vm,PocketKnife:jm,Podcast:qm,Pointer:Hm,PointerOff:Tm,Popcorn:Dm,Popsicle:Fm,PoundSterling:Rm,Power:Um,PowerCircle:Bm,PowerOff:Em,PowerSquare:Om,Presentation:Nm,Printer:_m,Projector:Zm,Puzzle:Wm,Pyramid:Gm,QrCode:Km,Quote:$m,Rabbit:Xm,Radar:Qm,Radiation:Ym,Radical:Jm,Radio:n8,RadioReceiver:e8,RadioTower:t8,Radius:a8,RailSymbol:i8,Rainbow:r8,Rat:o8,Ratio:c8,Receipt:f8,ReceiptCent:s8,ReceiptEuro:l8,ReceiptIndianRupee:d8,ReceiptJapaneseYen:h8,ReceiptPoundSterling:u8,ReceiptRussianRuble:y8,ReceiptSwissFranc:p8,ReceiptText:k8,RectangleHorizontal:m8,RectangleVertical:v8,Recycle:g8,Redo:w8,Redo2:M8,RedoDot:x8,RefreshCcw:C8,RefreshCcwDot:L8,RefreshCw:I8,RefreshCwOff:S8,Refrigerator:P8,Regex:A8,RemoveFormatting:b8,Repeat:V8,Repeat1:z8,Repeat2:j8,Replace:T8,ReplaceAll:q8,Reply:D8,ReplyAll:H8,Rewind:F8,Ribbon:R8,Rocket:ca,RockingChair:B8,RollerCoaster:E8,Rotate3d:Y1,RotateCcw:O8,RotateCw:U8,Route:_8,RouteOff:N8,Router:Z8,Rows2:J1,Rows3:en,Rows4:W8,Rss:G8,Ruler:K8,RussianRuble:$8,Sailboat:X8,Salad:Q8,Sandwich:Y8,Satellite:e7,SatelliteDish:J8,Save:n7,SaveAll:t7,Scale:a7,Scale3d:tn,Scaling:i7,Scan:h7,ScanBarcode:r7,ScanEye:o7,ScanFace:c7,ScanLine:s7,ScanSearch:l7,ScanText:d7,ScatterChart:u7,School:p7,School2:y7,Scissors:v7,ScissorsLineDashed:k7,ScissorsSquare:m7,ScissorsSquareDashedBottom:f7,ScreenShare:M7,ScreenShareOff:g7,Scroll:w7,ScrollText:x7,Search:P7,SearchCheck:L7,SearchCode:C7,SearchSlash:S7,SearchX:I7,Send:hi,SendHorizontal:nn,SendToBack:A7,SeparatorHorizontal:b7,SeparatorVertical:z7,Server:T7,ServerCog:j7,ServerCrash:V7,ServerOff:q7,Settings:D7,Settings2:H7,Shapes:F7,Share:B7,Share2:R7,Sheet:E7,Shell:O7,Shield:Q7,ShieldAlert:U7,ShieldBan:N7,ShieldCheck:_7,ShieldEllipsis:Z7,ShieldHalf:W7,ShieldMinus:G7,ShieldOff:K7,ShieldPlus:$7,ShieldQuestion:X7,ShieldX:an,Ship:J7,ShipWheel:Y7,Shirt:ev,ShoppingBag:tv,ShoppingBasket:nv,ShoppingCart:av,Shovel:iv,ShowerHead:rv,Shrink:ov,Shrub:cv,Shuffle:sv,Sigma:dv,SigmaSquare:lv,Signal:kv,SignalHigh:hv,SignalLow:uv,SignalMedium:yv,SignalZero:pv,Signpost:mv,SignpostBig:fv,Siren:vv,SkipBack:gv,SkipForward:Mv,Skull:xv,Slack:wv,Slash:Lv,SlashSquare:rn,Slice:Cv,Sliders:Iv,SlidersHorizontal:Sv,Smartphone:bv,SmartphoneCharging:Pv,SmartphoneNfc:Av,Smile:jv,SmilePlus:zv,Snail:Vv,Snowflake:qv,Sofa:Tv,Soup:Hv,Space:Dv,Spade:Fv,Sparkle:Rv,Sparkles:on,Speaker:Bv,Speech:Ev,SpellCheck:Uv,SpellCheck2:Ov,Spline:Nv,Split:Wv,SplitSquareHorizontal:_v,SplitSquareVertical:Zv,SprayCan:Gv,Sprout:Kv,Square:Jv,SquareDashedBottom:Xv,SquareDashedBottomCode:$v,SquarePen:Ae,SquareRadical:Qv,SquareStack:Yv,SquareUser:sn,SquareUserRound:cn,Squircle:eg,Squirrel:tg,Stamp:ng,Star:rg,StarHalf:ag,StarOff:ig,StepBack:og,StepForward:cg,Stethoscope:sg,Sticker:lg,StickyNote:dg,StopCircle:hg,Store:ug,StretchHorizontal:yg,StretchVertical:pg,Strikethrough:kg,Subscript:fg,Sun:xg,SunDim:mg,SunMedium:vg,SunMoon:gg,SunSnow:Mg,Sunrise:wg,Sunset:Lg,Superscript:Cg,SwatchBook:Sg,SwissFranc:Ig,SwitchCamera:Pg,Sword:Ag,Swords:bg,Syringe:zg,Table:Fg,Table2:jg,TableCellsMerge:Vg,TableCellsSplit:qg,TableColumnsSplit:Tg,TableProperties:Hg,TableRowsSplit:Dg,Tablet:Bg,TabletSmartphone:Rg,Tablets:Eg,Tag:Og,Tags:Ug,Tally1:Ng,Tally2:_g,Tally3:Zg,Tally4:Wg,Tally5:Gg,Tangent:Kg,Target:$g,Telescope:Xg,Tent:Yg,TentTree:Qg,Terminal:eM,TerminalSquare:Jg,TestTube:nM,TestTube2:tM,TestTubes:aM,Text:sM,TextCursor:rM,TextCursorInput:iM,TextQuote:oM,TextSearch:cM,TextSelect:ln,Theater:lM,Thermometer:uM,ThermometerSnowflake:dM,ThermometerSun:hM,ThumbsDown:yM,ThumbsUp:pM,Ticket:xM,TicketCheck:kM,TicketMinus:fM,TicketPercent:mM,TicketPlus:vM,TicketSlash:gM,TicketX:MM,Timer:CM,TimerOff:wM,TimerReset:LM,ToggleLeft:SM,ToggleRight:IM,Tornado:PM,Torus:AM,Touchpad:zM,TouchpadOff:bM,TowerControl:jM,ToyBrick:VM,Tractor:qM,TrafficCone:TM,TrainFront:DM,TrainFrontTunnel:HM,TrainTrack:FM,TramFront:dn,Trash:BM,Trash2:RM,TreeDeciduous:EM,TreePine:OM,Trees:UM,Trello:NM,TrendingDown:_M,TrendingUp:ZM,Triangle:GM,TriangleRight:WM,Trophy:sa,Truck:KM,Turtle:$M,Tv:la,Tv2:XM,Twitch:QM,Twitter:YM,Type:JM,Umbrella:t9,UmbrellaOff:e9,Underline:n9,Undo:r9,Undo2:a9,UndoDot:i9,UnfoldHorizontal:o9,UnfoldVertical:c9,Ungroup:s9,Unlink:d9,Unlink2:l9,Unlock:u9,UnlockKeyhole:h9,Unplug:y9,Upload:k9,UploadCloud:p9,Usb:f9,User:C9,UserCheck:m9,UserCog:v9,UserMinus:g9,UserPlus:M9,UserRound:fn,UserRoundCheck:hn,UserRoundCog:un,UserRoundMinus:yn,UserRoundPlus:pn,UserRoundSearch:x9,UserRoundX:kn,UserSearch:w9,UserX:L9,Users:S9,UsersRound:mn,Utensils:P9,UtensilsCrossed:I9,UtilityPole:A9,Variable:b9,Vault:z9,Vegan:j9,VenetianMask:V9,Vibrate:T9,VibrateOff:q9,Video:D9,VideoOff:H9,Videotape:F9,View:R9,Voicemail:B9,Volume:N9,Volume1:E9,Volume2:O9,VolumeX:U9,Vote:_9,Wallet:G9,Wallet2:Z9,WalletCards:W9,Wallpaper:K9,Wand:X9,Wand2:$9,Warehouse:Q9,WashingMachine:Y9,Watch:J9,Waves:ex,Waypoints:tx,Webcam:nx,Webhook:ix,WebhookOff:ax,Weight:rx,Wheat:cx,WheatOff:ox,WholeWord:sx,Wifi:dx,WifiOff:lx,Wind:hx,Wine:yx,WineOff:ux,Workflow:px,WrapText:kx,Wrench:fx,X:da,XCircle:mx,XOctagon:vx,XSquare:gx,Youtube:Mx,Zap:wx,ZapOff:xx,ZoomIn:Lx,ZoomOut:Cx},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xB=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:zr,AArrowDownIcon:zr,AArrowUp:jr,AArrowUpIcon:jr,ALargeSmall:Vr,ALargeSmallIcon:Vr,Accessibility:qr,AccessibilityIcon:qr,Activity:Hr,ActivityIcon:Hr,ActivitySquare:Tr,ActivitySquareIcon:Tr,AirVent:Dr,AirVentIcon:Dr,Airplay:Fr,AirplayIcon:Fr,AlarmCheck:t1,AlarmCheckIcon:t1,AlarmClock:Br,AlarmClockCheck:t1,AlarmClockCheckIcon:t1,AlarmClockIcon:Br,AlarmClockMinus:n1,AlarmClockMinusIcon:n1,AlarmClockOff:Rr,AlarmClockOffIcon:Rr,AlarmClockPlus:a1,AlarmClockPlusIcon:a1,AlarmMinus:n1,AlarmMinusIcon:n1,AlarmPlus:a1,AlarmPlusIcon:a1,AlarmSmoke:Er,AlarmSmokeIcon:Er,Album:Or,AlbumIcon:Or,AlertCircle:ni,AlertCircleIcon:ni,AlertOctagon:Ur,AlertOctagonIcon:Ur,AlertTriangle:Nr,AlertTriangleIcon:Nr,AlignCenter:Wr,AlignCenterHorizontal:_r,AlignCenterHorizontalIcon:_r,AlignCenterIcon:Wr,AlignCenterVertical:Zr,AlignCenterVerticalIcon:Zr,AlignEndHorizontal:Gr,AlignEndHorizontalIcon:Gr,AlignEndVertical:Kr,AlignEndVerticalIcon:Kr,AlignHorizontalDistributeCenter:$r,AlignHorizontalDistributeCenterIcon:$r,AlignHorizontalDistributeEnd:Xr,AlignHorizontalDistributeEndIcon:Xr,AlignHorizontalDistributeStart:Qr,AlignHorizontalDistributeStartIcon:Qr,AlignHorizontalJustifyCenter:Yr,AlignHorizontalJustifyCenterIcon:Yr,AlignHorizontalJustifyEnd:Jr,AlignHorizontalJustifyEndIcon:Jr,AlignHorizontalJustifyStart:eo,AlignHorizontalJustifyStartIcon:eo,AlignHorizontalSpaceAround:to,AlignHorizontalSpaceAroundIcon:to,AlignHorizontalSpaceBetween:no,AlignHorizontalSpaceBetweenIcon:no,AlignJustify:ao,AlignJustifyIcon:ao,AlignLeft:io,AlignLeftIcon:io,AlignRight:ro,AlignRightIcon:ro,AlignStartHorizontal:oo,AlignStartHorizontalIcon:oo,AlignStartVertical:co,AlignStartVerticalIcon:co,AlignVerticalDistributeCenter:so,AlignVerticalDistributeCenterIcon:so,AlignVerticalDistributeEnd:lo,AlignVerticalDistributeEndIcon:lo,AlignVerticalDistributeStart:ho,AlignVerticalDistributeStartIcon:ho,AlignVerticalJustifyCenter:uo,AlignVerticalJustifyCenterIcon:uo,AlignVerticalJustifyEnd:yo,AlignVerticalJustifyEndIcon:yo,AlignVerticalJustifyStart:po,AlignVerticalJustifyStartIcon:po,AlignVerticalSpaceAround:ko,AlignVerticalSpaceAroundIcon:ko,AlignVerticalSpaceBetween:fo,AlignVerticalSpaceBetweenIcon:fo,Ambulance:mo,AmbulanceIcon:mo,Ampersand:vo,AmpersandIcon:vo,Ampersands:go,AmpersandsIcon:go,Anchor:Mo,AnchorIcon:Mo,Angry:xo,AngryIcon:xo,Annoyed:wo,AnnoyedIcon:wo,Antenna:Lo,AntennaIcon:Lo,Anvil:Co,AnvilIcon:Co,Aperture:So,ApertureIcon:So,AppWindow:Io,AppWindowIcon:Io,Apple:Po,AppleIcon:Po,Archive:zo,ArchiveIcon:zo,ArchiveRestore:Ao,ArchiveRestoreIcon:Ao,ArchiveX:bo,ArchiveXIcon:bo,AreaChart:jo,AreaChartIcon:jo,Armchair:Vo,ArmchairIcon:Vo,ArrowBigDown:To,ArrowBigDownDash:qo,ArrowBigDownDashIcon:qo,ArrowBigDownIcon:To,ArrowBigLeft:Do,ArrowBigLeftDash:Ho,ArrowBigLeftDashIcon:Ho,ArrowBigLeftIcon:Do,ArrowBigRight:Ro,ArrowBigRightDash:Fo,ArrowBigRightDashIcon:Fo,ArrowBigRightIcon:Ro,ArrowBigUp:Eo,ArrowBigUpDash:Bo,ArrowBigUpDashIcon:Bo,ArrowBigUpIcon:Eo,ArrowDown:i2,ArrowDown01:Oo,ArrowDown01Icon:Oo,ArrowDown10:Uo,ArrowDown10Icon:Uo,ArrowDownAZ:i1,ArrowDownAZIcon:i1,ArrowDownAz:i1,ArrowDownAzIcon:i1,ArrowDownCircle:No,ArrowDownCircleIcon:No,ArrowDownFromLine:_o,ArrowDownFromLineIcon:_o,ArrowDownIcon:i2,ArrowDownLeft:Ko,ArrowDownLeftFromCircle:Zo,ArrowDownLeftFromCircleIcon:Zo,ArrowDownLeftFromSquare:Wo,ArrowDownLeftFromSquareIcon:Wo,ArrowDownLeftIcon:Ko,ArrowDownLeftSquare:Go,ArrowDownLeftSquareIcon:Go,ArrowDownNarrowWide:$o,ArrowDownNarrowWideIcon:$o,ArrowDownRight:Jo,ArrowDownRightFromCircle:Xo,ArrowDownRightFromCircleIcon:Xo,ArrowDownRightFromSquare:Qo,ArrowDownRightFromSquareIcon:Qo,ArrowDownRightIcon:Jo,ArrowDownRightSquare:Yo,ArrowDownRightSquareIcon:Yo,ArrowDownSquare:e2,ArrowDownSquareIcon:e2,ArrowDownToDot:t2,ArrowDownToDotIcon:t2,ArrowDownToLine:n2,ArrowDownToLineIcon:n2,ArrowDownUp:a2,ArrowDownUpIcon:a2,ArrowDownWideNarrow:r1,ArrowDownWideNarrowIcon:r1,ArrowDownZA:o1,ArrowDownZAIcon:o1,ArrowDownZa:o1,ArrowDownZaIcon:o1,ArrowLeft:d2,ArrowLeftCircle:r2,ArrowLeftCircleIcon:r2,ArrowLeftFromLine:o2,ArrowLeftFromLineIcon:o2,ArrowLeftIcon:d2,ArrowLeftRight:c2,ArrowLeftRightIcon:c2,ArrowLeftSquare:s2,ArrowLeftSquareIcon:s2,ArrowLeftToLine:l2,ArrowLeftToLineIcon:l2,ArrowRight:f2,ArrowRightCircle:h2,ArrowRightCircleIcon:h2,ArrowRightFromLine:u2,ArrowRightFromLineIcon:u2,ArrowRightIcon:f2,ArrowRightLeft:y2,ArrowRightLeftIcon:y2,ArrowRightSquare:p2,ArrowRightSquareIcon:p2,ArrowRightToLine:k2,ArrowRightToLineIcon:k2,ArrowUp:T2,ArrowUp01:m2,ArrowUp01Icon:m2,ArrowUp10:v2,ArrowUp10Icon:v2,ArrowUpAZ:c1,ArrowUpAZIcon:c1,ArrowUpAz:c1,ArrowUpAzIcon:c1,ArrowUpCircle:g2,ArrowUpCircleIcon:g2,ArrowUpDown:M2,ArrowUpDownIcon:M2,ArrowUpFromDot:x2,ArrowUpFromDotIcon:x2,ArrowUpFromLine:w2,ArrowUpFromLineIcon:w2,ArrowUpIcon:T2,ArrowUpLeft:I2,ArrowUpLeftFromCircle:L2,ArrowUpLeftFromCircleIcon:L2,ArrowUpLeftFromSquare:C2,ArrowUpLeftFromSquareIcon:C2,ArrowUpLeftIcon:I2,ArrowUpLeftSquare:S2,ArrowUpLeftSquareIcon:S2,ArrowUpNarrowWide:s1,ArrowUpNarrowWideIcon:s1,ArrowUpRight:z2,ArrowUpRightFromCircle:P2,ArrowUpRightFromCircleIcon:P2,ArrowUpRightFromSquare:A2,ArrowUpRightFromSquareIcon:A2,ArrowUpRightIcon:z2,ArrowUpRightSquare:b2,ArrowUpRightSquareIcon:b2,ArrowUpSquare:j2,ArrowUpSquareIcon:j2,ArrowUpToLine:V2,ArrowUpToLineIcon:V2,ArrowUpWideNarrow:q2,ArrowUpWideNarrowIcon:q2,ArrowUpZA:l1,ArrowUpZAIcon:l1,ArrowUpZa:l1,ArrowUpZaIcon:l1,ArrowsUpFromLine:H2,ArrowsUpFromLineIcon:H2,Asterisk:D2,AsteriskIcon:D2,AsteriskSquare:d1,AsteriskSquareIcon:d1,AtSign:F2,AtSignIcon:F2,Atom:R2,AtomIcon:R2,AudioLines:B2,AudioLinesIcon:B2,AudioWaveform:E2,AudioWaveformIcon:E2,Award:aa,AwardIcon:aa,Axe:O2,AxeIcon:O2,Axis3D:h1,Axis3DIcon:h1,Axis3d:h1,Axis3dIcon:h1,Baby:U2,BabyIcon:U2,Backpack:N2,BackpackIcon:N2,Badge:rc,BadgeAlert:_2,BadgeAlertIcon:_2,BadgeCent:Z2,BadgeCentIcon:Z2,BadgeCheck:u1,BadgeCheckIcon:u1,BadgeDollarSign:W2,BadgeDollarSignIcon:W2,BadgeEuro:G2,BadgeEuroIcon:G2,BadgeHelp:K2,BadgeHelpIcon:K2,BadgeIcon:rc,BadgeIndianRupee:$2,BadgeIndianRupeeIcon:$2,BadgeInfo:X2,BadgeInfoIcon:X2,BadgeJapaneseYen:Q2,BadgeJapaneseYenIcon:Q2,BadgeMinus:Y2,BadgeMinusIcon:Y2,BadgePercent:J2,BadgePercentIcon:J2,BadgePlus:ec,BadgePlusIcon:ec,BadgePoundSterling:tc,BadgePoundSterlingIcon:tc,BadgeRussianRuble:nc,BadgeRussianRubleIcon:nc,BadgeSwissFranc:ac,BadgeSwissFrancIcon:ac,BadgeX:ic,BadgeXIcon:ic,BaggageClaim:oc,BaggageClaimIcon:oc,Ban:cc,BanIcon:cc,Banana:sc,BananaIcon:sc,Banknote:lc,BanknoteIcon:lc,BarChart:fc,BarChart2:dc,BarChart2Icon:dc,BarChart3:hc,BarChart3Icon:hc,BarChart4:uc,BarChart4Icon:uc,BarChartBig:yc,BarChartBigIcon:yc,BarChartHorizontal:kc,BarChartHorizontalBig:pc,BarChartHorizontalBigIcon:pc,BarChartHorizontalIcon:kc,BarChartIcon:fc,Barcode:mc,BarcodeIcon:mc,Baseline:vc,BaselineIcon:vc,Bath:gc,BathIcon:gc,Battery:Sc,BatteryCharging:Mc,BatteryChargingIcon:Mc,BatteryFull:xc,BatteryFullIcon:xc,BatteryIcon:Sc,BatteryLow:wc,BatteryLowIcon:wc,BatteryMedium:Lc,BatteryMediumIcon:Lc,BatteryWarning:Cc,BatteryWarningIcon:Cc,Beaker:Ic,BeakerIcon:Ic,Bean:Ac,BeanIcon:Ac,BeanOff:Pc,BeanOffIcon:Pc,Bed:jc,BedDouble:bc,BedDoubleIcon:bc,BedIcon:jc,BedSingle:zc,BedSingleIcon:zc,Beef:Vc,BeefIcon:Vc,Beer:qc,BeerIcon:qc,Bell:Ec,BellDot:Tc,BellDotIcon:Tc,BellElectric:Hc,BellElectricIcon:Hc,BellIcon:Ec,BellMinus:Dc,BellMinusIcon:Dc,BellOff:Fc,BellOffIcon:Fc,BellPlus:Rc,BellPlusIcon:Rc,BellRing:Bc,BellRingIcon:Bc,BetweenHorizonalEnd:y1,BetweenHorizonalEndIcon:y1,BetweenHorizonalStart:p1,BetweenHorizonalStartIcon:p1,BetweenHorizontalEnd:y1,BetweenHorizontalEndIcon:y1,BetweenHorizontalStart:p1,BetweenHorizontalStartIcon:p1,BetweenVerticalEnd:Oc,BetweenVerticalEndIcon:Oc,BetweenVerticalStart:Uc,BetweenVerticalStartIcon:Uc,Bike:Nc,BikeIcon:Nc,Binary:ia,BinaryIcon:ia,Biohazard:_c,BiohazardIcon:_c,Bird:Zc,BirdIcon:Zc,Bitcoin:Wc,BitcoinIcon:Wc,Blend:Gc,BlendIcon:Gc,Blinds:Kc,BlindsIcon:Kc,Blocks:$c,BlocksIcon:$c,Bluetooth:Jc,BluetoothConnected:Xc,BluetoothConnectedIcon:Xc,BluetoothIcon:Jc,BluetoothOff:Qc,BluetoothOffIcon:Qc,BluetoothSearching:Yc,BluetoothSearchingIcon:Yc,Bold:es,BoldIcon:es,Bolt:ts,BoltIcon:ts,Bomb:ns,BombIcon:ns,Bone:as,BoneIcon:as,Book:Is,BookA:is,BookAIcon:is,BookAudio:rs,BookAudioIcon:rs,BookCheck:os,BookCheckIcon:os,BookCopy:cs,BookCopyIcon:cs,BookDashed:k1,BookDashedIcon:k1,BookDown:ss,BookDownIcon:ss,BookHeadphones:ls,BookHeadphonesIcon:ls,BookHeart:ds,BookHeartIcon:ds,BookIcon:Is,BookImage:hs,BookImageIcon:hs,BookKey:us,BookKeyIcon:us,BookLock:ys,BookLockIcon:ys,BookMarked:ps,BookMarkedIcon:ps,BookMinus:ks,BookMinusIcon:ks,BookOpen:vs,BookOpenCheck:fs,BookOpenCheckIcon:fs,BookOpenIcon:vs,BookOpenText:ms,BookOpenTextIcon:ms,BookPlus:gs,BookPlusIcon:gs,BookTemplate:k1,BookTemplateIcon:k1,BookText:Ms,BookTextIcon:Ms,BookType:xs,BookTypeIcon:xs,BookUp:Ls,BookUp2:ws,BookUp2Icon:ws,BookUpIcon:Ls,BookUser:Cs,BookUserIcon:Cs,BookX:Ss,BookXIcon:Ss,Bookmark:js,BookmarkCheck:Ps,BookmarkCheckIcon:Ps,BookmarkIcon:js,BookmarkMinus:As,BookmarkMinusIcon:As,BookmarkPlus:bs,BookmarkPlusIcon:bs,BookmarkX:zs,BookmarkXIcon:zs,BoomBox:Vs,BoomBoxIcon:Vs,Bot:kt,BotIcon:kt,BotMessageSquare:qs,BotMessageSquareIcon:qs,Box:Hs,BoxIcon:Hs,BoxSelect:Ts,BoxSelectIcon:Ts,Boxes:Ds,BoxesIcon:Ds,Braces:f1,BracesIcon:f1,Brackets:Fs,BracketsIcon:Fs,Brain:Es,BrainCircuit:Rs,BrainCircuitIcon:Rs,BrainCog:Bs,BrainCogIcon:Bs,BrainIcon:Es,BrickWall:Os,BrickWallIcon:Os,Briefcase:Us,BriefcaseIcon:Us,BringToFront:Ns,BringToFrontIcon:Ns,Brush:_s,BrushIcon:_s,Bug:Gs,BugIcon:Gs,BugOff:Zs,BugOffIcon:Zs,BugPlay:Ws,BugPlayIcon:Ws,Building:$s,Building2:Ks,Building2Icon:Ks,BuildingIcon:$s,Bus:Qs,BusFront:Xs,BusFrontIcon:Xs,BusIcon:Qs,Cable:Js,CableCar:Ys,CableCarIcon:Ys,CableIcon:Js,Cake:tl,CakeIcon:tl,CakeSlice:el,CakeSliceIcon:el,Calculator:nl,CalculatorIcon:nl,Calendar:vl,CalendarCheck:il,CalendarCheck2:al,CalendarCheck2Icon:al,CalendarCheckIcon:il,CalendarClock:rl,CalendarClockIcon:rl,CalendarDays:ol,CalendarDaysIcon:ol,CalendarFold:cl,CalendarFoldIcon:cl,CalendarHeart:sl,CalendarHeartIcon:sl,CalendarIcon:vl,CalendarMinus:dl,CalendarMinus2:ll,CalendarMinus2Icon:ll,CalendarMinusIcon:dl,CalendarOff:hl,CalendarOffIcon:hl,CalendarPlus:yl,CalendarPlus2:ul,CalendarPlus2Icon:ul,CalendarPlusIcon:yl,CalendarRange:pl,CalendarRangeIcon:pl,CalendarSearch:kl,CalendarSearchIcon:kl,CalendarX:ml,CalendarX2:fl,CalendarX2Icon:fl,CalendarXIcon:ml,Camera:Ml,CameraIcon:Ml,CameraOff:gl,CameraOffIcon:gl,CandlestickChart:xl,CandlestickChartIcon:xl,Candy:Cl,CandyCane:wl,CandyCaneIcon:wl,CandyIcon:Cl,CandyOff:Ll,CandyOffIcon:Ll,Captions:m1,CaptionsIcon:m1,CaptionsOff:Sl,CaptionsOffIcon:Sl,Car:Al,CarFront:Il,CarFrontIcon:Il,CarIcon:Al,CarTaxiFront:Pl,CarTaxiFrontIcon:Pl,Caravan:bl,CaravanIcon:bl,Carrot:zl,CarrotIcon:zl,CaseLower:jl,CaseLowerIcon:jl,CaseSensitive:Vl,CaseSensitiveIcon:Vl,CaseUpper:ql,CaseUpperIcon:ql,CassetteTape:Tl,CassetteTapeIcon:Tl,Cast:Hl,CastIcon:Hl,Castle:Dl,CastleIcon:Dl,Cat:Fl,CatIcon:Fl,Cctv:Rl,CctvIcon:Rl,Check:Nl,CheckCheck:Bl,CheckCheckIcon:Bl,CheckCircle:El,CheckCircle2:ai,CheckCircle2Icon:ai,CheckCircleIcon:El,CheckIcon:Nl,CheckSquare:Ul,CheckSquare2:Ol,CheckSquare2Icon:Ol,CheckSquareIcon:Ul,ChefHat:_l,ChefHatIcon:_l,Cherry:Zl,CherryIcon:Zl,ChevronDown:ii,ChevronDownCircle:Wl,ChevronDownCircleIcon:Wl,ChevronDownIcon:ii,ChevronDownSquare:Gl,ChevronDownSquareIcon:Gl,ChevronFirst:Kl,ChevronFirstIcon:Kl,ChevronLast:$l,ChevronLastIcon:$l,ChevronLeft:ri,ChevronLeftCircle:Xl,ChevronLeftCircleIcon:Xl,ChevronLeftIcon:ri,ChevronLeftSquare:Ql,ChevronLeftSquareIcon:Ql,ChevronRight:oi,ChevronRightCircle:Yl,ChevronRightCircleIcon:Yl,ChevronRightIcon:oi,ChevronRightSquare:Jl,ChevronRightSquareIcon:Jl,ChevronUp:n0,ChevronUpCircle:e0,ChevronUpCircleIcon:e0,ChevronUpIcon:n0,ChevronUpSquare:t0,ChevronUpSquareIcon:t0,ChevronsDown:i0,ChevronsDownIcon:i0,ChevronsDownUp:a0,ChevronsDownUpIcon:a0,ChevronsLeft:o0,ChevronsLeftIcon:o0,ChevronsLeftRight:r0,ChevronsLeftRightIcon:r0,ChevronsRight:s0,ChevronsRightIcon:s0,ChevronsRightLeft:c0,ChevronsRightLeftIcon:c0,ChevronsUp:d0,ChevronsUpDown:l0,ChevronsUpDownIcon:l0,ChevronsUpIcon:d0,Chrome:h0,ChromeIcon:h0,Church:u0,ChurchIcon:u0,Cigarette:p0,CigaretteIcon:p0,CigaretteOff:y0,CigaretteOffIcon:y0,Circle:C0,CircleDashed:k0,CircleDashedIcon:k0,CircleDollarSign:f0,CircleDollarSignIcon:f0,CircleDot:v0,CircleDotDashed:m0,CircleDotDashedIcon:m0,CircleDotIcon:v0,CircleEllipsis:g0,CircleEllipsisIcon:g0,CircleEqual:M0,CircleEqualIcon:M0,CircleFadingPlus:x0,CircleFadingPlusIcon:x0,CircleIcon:C0,CircleOff:w0,CircleOffIcon:w0,CircleSlash:L0,CircleSlash2:v1,CircleSlash2Icon:v1,CircleSlashIcon:L0,CircleSlashed:v1,CircleSlashedIcon:v1,CircleUser:M1,CircleUserIcon:M1,CircleUserRound:g1,CircleUserRoundIcon:g1,CircuitBoard:S0,CircuitBoardIcon:S0,Citrus:I0,CitrusIcon:I0,Clapperboard:P0,ClapperboardIcon:P0,Clipboard:D0,ClipboardCheck:A0,ClipboardCheckIcon:A0,ClipboardCopy:b0,ClipboardCopyIcon:b0,ClipboardEdit:w1,ClipboardEditIcon:w1,ClipboardIcon:D0,ClipboardList:z0,ClipboardListIcon:z0,ClipboardMinus:j0,ClipboardMinusIcon:j0,ClipboardPaste:V0,ClipboardPasteIcon:V0,ClipboardPen:w1,ClipboardPenIcon:w1,ClipboardPenLine:x1,ClipboardPenLineIcon:x1,ClipboardPlus:q0,ClipboardPlusIcon:q0,ClipboardSignature:x1,ClipboardSignatureIcon:x1,ClipboardType:T0,ClipboardTypeIcon:T0,ClipboardX:H0,ClipboardXIcon:H0,Clock:$0,Clock1:F0,Clock10:R0,Clock10Icon:R0,Clock11:B0,Clock11Icon:B0,Clock12:E0,Clock12Icon:E0,Clock1Icon:F0,Clock2:O0,Clock2Icon:O0,Clock3:U0,Clock3Icon:U0,Clock4:N0,Clock4Icon:N0,Clock5:_0,Clock5Icon:_0,Clock6:Z0,Clock6Icon:Z0,Clock7:W0,Clock7Icon:W0,Clock8:G0,Clock8Icon:G0,Clock9:K0,Clock9Icon:K0,ClockIcon:$0,Cloud:ld,CloudCog:X0,CloudCogIcon:X0,CloudDrizzle:Q0,CloudDrizzleIcon:Q0,CloudFog:Y0,CloudFogIcon:Y0,CloudHail:J0,CloudHailIcon:J0,CloudIcon:ld,CloudLightning:ed,CloudLightningIcon:ed,CloudMoon:nd,CloudMoonIcon:nd,CloudMoonRain:td,CloudMoonRainIcon:td,CloudOff:ad,CloudOffIcon:ad,CloudRain:rd,CloudRainIcon:rd,CloudRainWind:id,CloudRainWindIcon:id,CloudSnow:od,CloudSnowIcon:od,CloudSun:sd,CloudSunIcon:sd,CloudSunRain:cd,CloudSunRainIcon:cd,Cloudy:dd,CloudyIcon:dd,Clover:hd,CloverIcon:hd,Club:ud,ClubIcon:ud,Code:pd,Code2:yd,Code2Icon:yd,CodeIcon:pd,CodeSquare:L1,CodeSquareIcon:L1,Codepen:kd,CodepenIcon:kd,Codesandbox:fd,CodesandboxIcon:fd,Coffee:md,CoffeeIcon:md,Cog:vd,CogIcon:vd,Coins:gd,CoinsIcon:gd,Columns:C1,Columns2:C1,Columns2Icon:C1,Columns3:S1,Columns3Icon:S1,Columns4:Md,Columns4Icon:Md,ColumnsIcon:C1,Combine:xd,CombineIcon:xd,Command:wd,CommandIcon:wd,Compass:Ld,CompassIcon:Ld,Component:Cd,ComponentIcon:Cd,Computer:Sd,ComputerIcon:Sd,ConciergeBell:Id,ConciergeBellIcon:Id,Cone:Pd,ConeIcon:Pd,Construction:Ad,ConstructionIcon:Ad,Contact:zd,Contact2:bd,Contact2Icon:bd,ContactIcon:zd,Container:jd,ContainerIcon:jd,Contrast:Vd,ContrastIcon:Vd,Cookie:qd,CookieIcon:qd,CookingPot:Td,CookingPotIcon:Td,Copy:Ed,CopyCheck:Hd,CopyCheckIcon:Hd,CopyIcon:Ed,CopyMinus:Dd,CopyMinusIcon:Dd,CopyPlus:Fd,CopyPlusIcon:Fd,CopySlash:Rd,CopySlashIcon:Rd,CopyX:Bd,CopyXIcon:Bd,Copyleft:Od,CopyleftIcon:Od,Copyright:Ud,CopyrightIcon:Ud,CornerDownLeft:Nd,CornerDownLeftIcon:Nd,CornerDownRight:_d,CornerDownRightIcon:_d,CornerLeftDown:Zd,CornerLeftDownIcon:Zd,CornerLeftUp:Wd,CornerLeftUpIcon:Wd,CornerRightDown:Gd,CornerRightDownIcon:Gd,CornerRightUp:Kd,CornerRightUpIcon:Kd,CornerUpLeft:$d,CornerUpLeftIcon:$d,CornerUpRight:Xd,CornerUpRightIcon:Xd,Cpu:Qd,CpuIcon:Qd,CreativeCommons:Yd,CreativeCommonsIcon:Yd,CreditCard:Jd,CreditCardIcon:Jd,Croissant:eh,CroissantIcon:eh,Crop:th,CropIcon:th,Cross:nh,CrossIcon:nh,Crosshair:ah,CrosshairIcon:ah,Crown:ih,CrownIcon:ih,Cuboid:rh,CuboidIcon:rh,CupSoda:oh,CupSodaIcon:oh,CurlyBraces:f1,CurlyBracesIcon:f1,Currency:ch,CurrencyIcon:ch,Cylinder:sh,CylinderIcon:sh,Database:hh,DatabaseBackup:lh,DatabaseBackupIcon:lh,DatabaseIcon:hh,DatabaseZap:dh,DatabaseZapIcon:dh,Delete:uh,DeleteIcon:uh,Dessert:yh,DessertIcon:yh,Diameter:ph,DiameterIcon:ph,Diamond:kh,DiamondIcon:kh,Dice1:fh,Dice1Icon:fh,Dice2:mh,Dice2Icon:mh,Dice3:vh,Dice3Icon:vh,Dice4:gh,Dice4Icon:gh,Dice5:Mh,Dice5Icon:Mh,Dice6:xh,Dice6Icon:xh,Dices:wh,DicesIcon:wh,Diff:Lh,DiffIcon:Lh,Disc:Ph,Disc2:Ch,Disc2Icon:Ch,Disc3:Sh,Disc3Icon:Sh,DiscAlbum:Ih,DiscAlbumIcon:Ih,DiscIcon:Ph,Divide:zh,DivideCircle:Ah,DivideCircleIcon:Ah,DivideIcon:zh,DivideSquare:bh,DivideSquareIcon:bh,Dna:Vh,DnaIcon:Vh,DnaOff:jh,DnaOffIcon:jh,Dog:qh,DogIcon:qh,DollarSign:Th,DollarSignIcon:Th,Donut:Hh,DonutIcon:Hh,DoorClosed:Dh,DoorClosedIcon:Dh,DoorOpen:Fh,DoorOpenIcon:Fh,Dot:Rh,DotIcon:Rh,DotSquare:I1,DotSquareIcon:I1,Download:Eh,DownloadCloud:Bh,DownloadCloudIcon:Bh,DownloadIcon:Eh,DraftingCompass:Oh,DraftingCompassIcon:Oh,Drama:Uh,DramaIcon:Uh,Dribbble:Nh,DribbbleIcon:Nh,Drill:_h,DrillIcon:_h,Droplet:Zh,DropletIcon:Zh,Droplets:Wh,DropletsIcon:Wh,Drum:Gh,DrumIcon:Gh,Drumstick:Kh,DrumstickIcon:Kh,Dumbbell:$h,DumbbellIcon:$h,Ear:Qh,EarIcon:Qh,EarOff:Xh,EarOffIcon:Xh,Earth:P1,EarthIcon:P1,EarthLock:Yh,EarthLockIcon:Yh,Eclipse:Jh,EclipseIcon:Jh,Edit:Ae,Edit2:Q1,Edit2Icon:Q1,Edit3:X1,Edit3Icon:X1,EditIcon:Ae,Egg:nu,EggFried:eu,EggFriedIcon:eu,EggIcon:nu,EggOff:tu,EggOffIcon:tu,Equal:iu,EqualIcon:iu,EqualNot:au,EqualNotIcon:au,EqualSquare:A1,EqualSquareIcon:A1,Eraser:ru,EraserIcon:ru,Euro:ou,EuroIcon:ou,Expand:cu,ExpandIcon:cu,ExternalLink:su,ExternalLinkIcon:su,Eye:du,EyeIcon:du,EyeOff:lu,EyeOffIcon:lu,Facebook:hu,FacebookIcon:hu,Factory:uu,FactoryIcon:uu,Fan:yu,FanIcon:yu,FastForward:pu,FastForwardIcon:pu,Feather:ku,FeatherIcon:ku,Fence:fu,FenceIcon:fu,FerrisWheel:mu,FerrisWheelIcon:mu,Figma:vu,FigmaIcon:vu,File:vy,FileArchive:gu,FileArchiveIcon:gu,FileAudio:xu,FileAudio2:Mu,FileAudio2Icon:Mu,FileAudioIcon:xu,FileAxis3D:b1,FileAxis3DIcon:b1,FileAxis3d:b1,FileAxis3dIcon:b1,FileBadge:Lu,FileBadge2:wu,FileBadge2Icon:wu,FileBadgeIcon:Lu,FileBarChart:Su,FileBarChart2:Cu,FileBarChart2Icon:Cu,FileBarChartIcon:Su,FileBox:Iu,FileBoxIcon:Iu,FileCheck:Au,FileCheck2:Pu,FileCheck2Icon:Pu,FileCheckIcon:Au,FileClock:bu,FileClockIcon:bu,FileCode:ju,FileCode2:zu,FileCode2Icon:zu,FileCodeIcon:ju,FileCog:z1,FileCog2:z1,FileCog2Icon:z1,FileCogIcon:z1,FileDiff:Vu,FileDiffIcon:Vu,FileDigit:qu,FileDigitIcon:qu,FileDown:Tu,FileDownIcon:Tu,FileEdit:V1,FileEditIcon:V1,FileHeart:Hu,FileHeartIcon:Hu,FileIcon:vy,FileImage:Du,FileImageIcon:Du,FileInput:Fu,FileInputIcon:Fu,FileJson:Bu,FileJson2:Ru,FileJson2Icon:Ru,FileJsonIcon:Bu,FileKey:Ou,FileKey2:Eu,FileKey2Icon:Eu,FileKeyIcon:Ou,FileLineChart:Uu,FileLineChartIcon:Uu,FileLock:_u,FileLock2:Nu,FileLock2Icon:Nu,FileLockIcon:_u,FileMinus:Wu,FileMinus2:Zu,FileMinus2Icon:Zu,FileMinusIcon:Wu,FileMusic:Gu,FileMusicIcon:Gu,FileOutput:Ku,FileOutputIcon:Ku,FilePen:V1,FilePenIcon:V1,FilePenLine:j1,FilePenLineIcon:j1,FilePieChart:$u,FilePieChartIcon:$u,FilePlus:Qu,FilePlus2:Xu,FilePlus2Icon:Xu,FilePlusIcon:Qu,FileQuestion:Yu,FileQuestionIcon:Yu,FileScan:Ju,FileScanIcon:Ju,FileSearch:ty,FileSearch2:ey,FileSearch2Icon:ey,FileSearchIcon:ty,FileSignature:j1,FileSignatureIcon:j1,FileSliders:ny,FileSlidersIcon:ny,FileSpreadsheet:ay,FileSpreadsheetIcon:ay,FileStack:iy,FileStackIcon:iy,FileSymlink:ry,FileSymlinkIcon:ry,FileTerminal:oy,FileTerminalIcon:oy,FileText:cy,FileTextIcon:cy,FileType:ly,FileType2:sy,FileType2Icon:sy,FileTypeIcon:ly,FileUp:dy,FileUpIcon:dy,FileVideo:uy,FileVideo2:hy,FileVideo2Icon:hy,FileVideoIcon:uy,FileVolume:py,FileVolume2:yy,FileVolume2Icon:yy,FileVolumeIcon:py,FileWarning:ky,FileWarningIcon:ky,FileX:my,FileX2:fy,FileX2Icon:fy,FileXIcon:my,Files:gy,FilesIcon:gy,Film:My,FilmIcon:My,Filter:wy,FilterIcon:wy,FilterX:xy,FilterXIcon:xy,Fingerprint:Ly,FingerprintIcon:Ly,FireExtinguisher:Cy,FireExtinguisherIcon:Cy,Fish:Py,FishIcon:Py,FishOff:Sy,FishOffIcon:Sy,FishSymbol:Iy,FishSymbolIcon:Iy,Flag:jy,FlagIcon:jy,FlagOff:Ay,FlagOffIcon:Ay,FlagTriangleLeft:by,FlagTriangleLeftIcon:by,FlagTriangleRight:zy,FlagTriangleRightIcon:zy,Flame:qy,FlameIcon:qy,FlameKindling:Vy,FlameKindlingIcon:Vy,Flashlight:Hy,FlashlightIcon:Hy,FlashlightOff:Ty,FlashlightOffIcon:Ty,FlaskConical:Fy,FlaskConicalIcon:Fy,FlaskConicalOff:Dy,FlaskConicalOffIcon:Dy,FlaskRound:Ry,FlaskRoundIcon:Ry,FlipHorizontal:Ey,FlipHorizontal2:By,FlipHorizontal2Icon:By,FlipHorizontalIcon:Ey,FlipVertical:Uy,FlipVertical2:Oy,FlipVertical2Icon:Oy,FlipVerticalIcon:Uy,Flower:_y,Flower2:Ny,Flower2Icon:Ny,FlowerIcon:_y,Focus:Zy,FocusIcon:Zy,FoldHorizontal:Wy,FoldHorizontalIcon:Wy,FoldVertical:Gy,FoldVerticalIcon:Gy,Folder:Mp,FolderArchive:Ky,FolderArchiveIcon:Ky,FolderCheck:$y,FolderCheckIcon:$y,FolderClock:Xy,FolderClockIcon:Xy,FolderClosed:Qy,FolderClosedIcon:Qy,FolderCog:q1,FolderCog2:q1,FolderCog2Icon:q1,FolderCogIcon:q1,FolderDot:Yy,FolderDotIcon:Yy,FolderDown:Jy,FolderDownIcon:Jy,FolderEdit:T1,FolderEditIcon:T1,FolderGit:tp,FolderGit2:ep,FolderGit2Icon:ep,FolderGitIcon:tp,FolderHeart:np,FolderHeartIcon:np,FolderIcon:Mp,FolderInput:ap,FolderInputIcon:ap,FolderKanban:ip,FolderKanbanIcon:ip,FolderKey:rp,FolderKeyIcon:rp,FolderLock:op,FolderLockIcon:op,FolderMinus:cp,FolderMinusIcon:cp,FolderOpen:lp,FolderOpenDot:sp,FolderOpenDotIcon:sp,FolderOpenIcon:lp,FolderOutput:dp,FolderOutputIcon:dp,FolderPen:T1,FolderPenIcon:T1,FolderPlus:hp,FolderPlusIcon:hp,FolderRoot:up,FolderRootIcon:up,FolderSearch:pp,FolderSearch2:yp,FolderSearch2Icon:yp,FolderSearchIcon:pp,FolderSymlink:kp,FolderSymlinkIcon:kp,FolderSync:fp,FolderSyncIcon:fp,FolderTree:mp,FolderTreeIcon:mp,FolderUp:vp,FolderUpIcon:vp,FolderX:gp,FolderXIcon:gp,Folders:xp,FoldersIcon:xp,Footprints:wp,FootprintsIcon:wp,Forklift:Lp,ForkliftIcon:Lp,FormInput:Cp,FormInputIcon:Cp,Forward:Sp,ForwardIcon:Sp,Frame:Ip,FrameIcon:Ip,Framer:Pp,FramerIcon:Pp,Frown:Ap,FrownIcon:Ap,Fuel:bp,FuelIcon:bp,Fullscreen:zp,FullscreenIcon:zp,FunctionSquare:jp,FunctionSquareIcon:jp,GalleryHorizontal:qp,GalleryHorizontalEnd:Vp,GalleryHorizontalEndIcon:Vp,GalleryHorizontalIcon:qp,GalleryThumbnails:Tp,GalleryThumbnailsIcon:Tp,GalleryVertical:Dp,GalleryVerticalEnd:Hp,GalleryVerticalEndIcon:Hp,GalleryVerticalIcon:Dp,Gamepad:Rp,Gamepad2:Fp,Gamepad2Icon:Fp,GamepadIcon:Rp,GanttChart:Bp,GanttChartIcon:Bp,GanttChartSquare:et,GanttChartSquareIcon:et,GanttSquare:et,GanttSquareIcon:et,Gauge:Op,GaugeCircle:Ep,GaugeCircleIcon:Ep,GaugeIcon:Op,Gavel:Up,GavelIcon:Up,Gem:Np,GemIcon:Np,Ghost:_p,GhostIcon:_p,Gift:Zp,GiftIcon:Zp,GitBranch:Gp,GitBranchIcon:Gp,GitBranchPlus:Wp,GitBranchPlusIcon:Wp,GitCommit:H1,GitCommitHorizontal:H1,GitCommitHorizontalIcon:H1,GitCommitIcon:H1,GitCommitVertical:Kp,GitCommitVerticalIcon:Kp,GitCompare:Xp,GitCompareArrows:$p,GitCompareArrowsIcon:$p,GitCompareIcon:Xp,GitFork:Qp,GitForkIcon:Qp,GitGraph:Yp,GitGraphIcon:Yp,GitMerge:Jp,GitMergeIcon:Jp,GitPullRequest:rk,GitPullRequestArrow:ek,GitPullRequestArrowIcon:ek,GitPullRequestClosed:tk,GitPullRequestClosedIcon:tk,GitPullRequestCreate:ak,GitPullRequestCreateArrow:nk,GitPullRequestCreateArrowIcon:nk,GitPullRequestCreateIcon:ak,GitPullRequestDraft:ik,GitPullRequestDraftIcon:ik,GitPullRequestIcon:rk,Github:ci,GithubIcon:ci,Gitlab:ok,GitlabIcon:ok,GlassWater:ck,GlassWaterIcon:ck,Glasses:sk,GlassesIcon:sk,Globe:dk,Globe2:P1,Globe2Icon:P1,GlobeIcon:dk,GlobeLock:lk,GlobeLockIcon:lk,Goal:hk,GoalIcon:hk,Grab:uk,GrabIcon:uk,GraduationCap:ra,GraduationCapIcon:ra,Grape:yk,GrapeIcon:yk,Grid:tt,Grid2X2:D1,Grid2X2Icon:D1,Grid2x2:D1,Grid2x2Icon:D1,Grid3X3:tt,Grid3X3Icon:tt,Grid3x3:tt,Grid3x3Icon:tt,GridIcon:tt,Grip:fk,GripHorizontal:pk,GripHorizontalIcon:pk,GripIcon:fk,GripVertical:kk,GripVerticalIcon:kk,Group:mk,GroupIcon:mk,Guitar:vk,GuitarIcon:vk,Hammer:gk,HammerIcon:gk,Hand:Ck,HandCoins:Mk,HandCoinsIcon:Mk,HandHeart:xk,HandHeartIcon:xk,HandHelping:F1,HandHelpingIcon:F1,HandIcon:Ck,HandMetal:wk,HandMetalIcon:wk,HandPlatter:Lk,HandPlatterIcon:Lk,Handshake:Sk,HandshakeIcon:Sk,HardDrive:Ak,HardDriveDownload:Ik,HardDriveDownloadIcon:Ik,HardDriveIcon:Ak,HardDriveUpload:Pk,HardDriveUploadIcon:Pk,HardHat:bk,HardHatIcon:bk,Hash:zk,HashIcon:zk,Haze:jk,HazeIcon:jk,HdmiPort:Vk,HdmiPortIcon:Vk,Heading:Bk,Heading1:qk,Heading1Icon:qk,Heading2:Tk,Heading2Icon:Tk,Heading3:Hk,Heading3Icon:Hk,Heading4:Dk,Heading4Icon:Dk,Heading5:Fk,Heading5Icon:Fk,Heading6:Rk,Heading6Icon:Rk,HeadingIcon:Bk,Headphones:Ek,HeadphonesIcon:Ek,Headset:Ok,HeadsetIcon:Ok,Heart:Wk,HeartCrack:Uk,HeartCrackIcon:Uk,HeartHandshake:Nk,HeartHandshakeIcon:Nk,HeartIcon:Wk,HeartOff:_k,HeartOffIcon:_k,HeartPulse:Zk,HeartPulseIcon:Zk,Heater:Gk,HeaterIcon:Gk,HelpCircle:Kk,HelpCircleIcon:Kk,HelpingHand:F1,HelpingHandIcon:F1,Hexagon:$k,HexagonIcon:$k,Highlighter:Xk,HighlighterIcon:Xk,History:Qk,HistoryIcon:Qk,Home:Yk,HomeIcon:Yk,Hop:e4,HopIcon:e4,HopOff:Jk,HopOffIcon:Jk,Hotel:t4,HotelIcon:t4,Hourglass:n4,HourglassIcon:n4,IceCream:i4,IceCream2:a4,IceCream2Icon:a4,IceCreamIcon:i4,Image:d4,ImageDown:r4,ImageDownIcon:r4,ImageIcon:d4,ImageMinus:o4,ImageMinusIcon:o4,ImageOff:c4,ImageOffIcon:c4,ImagePlus:s4,ImagePlusIcon:s4,ImageUp:l4,ImageUpIcon:l4,Images:h4,ImagesIcon:h4,Import:u4,ImportIcon:u4,Inbox:y4,InboxIcon:y4,Indent:p4,IndentIcon:p4,IndianRupee:k4,IndianRupeeIcon:k4,Infinity:f4,InfinityIcon:f4,Info:m4,InfoIcon:m4,Inspect:E1,InspectIcon:E1,InspectionPanel:v4,InspectionPanelIcon:v4,Instagram:g4,InstagramIcon:g4,Italic:M4,ItalicIcon:M4,IterationCcw:x4,IterationCcwIcon:x4,IterationCw:w4,IterationCwIcon:w4,JapaneseYen:L4,JapaneseYenIcon:L4,Joystick:C4,JoystickIcon:C4,Kanban:S4,KanbanIcon:S4,KanbanSquare:B1,KanbanSquareDashed:R1,KanbanSquareDashedIcon:R1,KanbanSquareIcon:B1,Key:A4,KeyIcon:A4,KeyRound:I4,KeyRoundIcon:I4,KeySquare:P4,KeySquareIcon:P4,Keyboard:z4,KeyboardIcon:z4,KeyboardMusic:b4,KeyboardMusicIcon:b4,Lamp:D4,LampCeiling:j4,LampCeilingIcon:j4,LampDesk:V4,LampDeskIcon:V4,LampFloor:q4,LampFloorIcon:q4,LampIcon:D4,LampWallDown:T4,LampWallDownIcon:T4,LampWallUp:H4,LampWallUpIcon:H4,LandPlot:F4,LandPlotIcon:F4,Landmark:R4,LandmarkIcon:R4,Languages:B4,LanguagesIcon:B4,Laptop:O4,Laptop2:E4,Laptop2Icon:E4,LaptopIcon:O4,Lasso:N4,LassoIcon:N4,LassoSelect:U4,LassoSelectIcon:U4,Laugh:_4,LaughIcon:_4,Layers:G4,Layers2:Z4,Layers2Icon:Z4,Layers3:W4,Layers3Icon:W4,LayersIcon:G4,Layout:$1,LayoutDashboard:K4,LayoutDashboardIcon:K4,LayoutGrid:$4,LayoutGridIcon:$4,LayoutIcon:$1,LayoutList:X4,LayoutListIcon:X4,LayoutPanelLeft:Q4,LayoutPanelLeftIcon:Q4,LayoutPanelTop:Y4,LayoutPanelTopIcon:Y4,LayoutTemplate:J4,LayoutTemplateIcon:J4,Leaf:e5,LeafIcon:e5,LeafyGreen:t5,LeafyGreenIcon:t5,Library:i5,LibraryBig:n5,LibraryBigIcon:n5,LibraryIcon:i5,LibrarySquare:a5,LibrarySquareIcon:a5,LifeBuoy:r5,LifeBuoyIcon:r5,Ligature:o5,LigatureIcon:o5,Lightbulb:s5,LightbulbIcon:s5,LightbulbOff:c5,LightbulbOffIcon:c5,LineChart:l5,LineChartIcon:l5,Link:u5,Link2:h5,Link2Icon:h5,Link2Off:d5,Link2OffIcon:d5,LinkIcon:u5,Linkedin:si,LinkedinIcon:si,List:P5,ListChecks:y5,ListChecksIcon:y5,ListCollapse:p5,ListCollapseIcon:p5,ListEnd:k5,ListEndIcon:k5,ListFilter:f5,ListFilterIcon:f5,ListIcon:P5,ListMinus:m5,ListMinusIcon:m5,ListMusic:v5,ListMusicIcon:v5,ListOrdered:g5,ListOrderedIcon:g5,ListPlus:M5,ListPlusIcon:M5,ListRestart:x5,ListRestartIcon:x5,ListStart:w5,ListStartIcon:w5,ListTodo:L5,ListTodoIcon:L5,ListTree:C5,ListTreeIcon:C5,ListVideo:S5,ListVideoIcon:S5,ListX:I5,ListXIcon:I5,Loader:b5,Loader2:A5,Loader2Icon:A5,LoaderIcon:b5,Locate:V5,LocateFixed:z5,LocateFixedIcon:z5,LocateIcon:V5,LocateOff:j5,LocateOffIcon:j5,Lock:T5,LockIcon:T5,LockKeyhole:q5,LockKeyholeIcon:q5,LogIn:H5,LogInIcon:H5,LogOut:D5,LogOutIcon:D5,Lollipop:F5,LollipopIcon:F5,LucideAArrowDown:zr,LucideAArrowUp:jr,LucideALargeSmall:Vr,LucideAccessibility:qr,LucideActivity:Hr,LucideActivitySquare:Tr,LucideAirVent:Dr,LucideAirplay:Fr,LucideAlarmCheck:t1,LucideAlarmClock:Br,LucideAlarmClockCheck:t1,LucideAlarmClockMinus:n1,LucideAlarmClockOff:Rr,LucideAlarmClockPlus:a1,LucideAlarmMinus:n1,LucideAlarmPlus:a1,LucideAlarmSmoke:Er,LucideAlbum:Or,LucideAlertCircle:ni,LucideAlertOctagon:Ur,LucideAlertTriangle:Nr,LucideAlignCenter:Wr,LucideAlignCenterHorizontal:_r,LucideAlignCenterVertical:Zr,LucideAlignEndHorizontal:Gr,LucideAlignEndVertical:Kr,LucideAlignHorizontalDistributeCenter:$r,LucideAlignHorizontalDistributeEnd:Xr,LucideAlignHorizontalDistributeStart:Qr,LucideAlignHorizontalJustifyCenter:Yr,LucideAlignHorizontalJustifyEnd:Jr,LucideAlignHorizontalJustifyStart:eo,LucideAlignHorizontalSpaceAround:to,LucideAlignHorizontalSpaceBetween:no,LucideAlignJustify:ao,LucideAlignLeft:io,LucideAlignRight:ro,LucideAlignStartHorizontal:oo,LucideAlignStartVertical:co,LucideAlignVerticalDistributeCenter:so,LucideAlignVerticalDistributeEnd:lo,LucideAlignVerticalDistributeStart:ho,LucideAlignVerticalJustifyCenter:uo,LucideAlignVerticalJustifyEnd:yo,LucideAlignVerticalJustifyStart:po,LucideAlignVerticalSpaceAround:ko,LucideAlignVerticalSpaceBetween:fo,LucideAmbulance:mo,LucideAmpersand:vo,LucideAmpersands:go,LucideAnchor:Mo,LucideAngry:xo,LucideAnnoyed:wo,LucideAntenna:Lo,LucideAnvil:Co,LucideAperture:So,LucideAppWindow:Io,LucideApple:Po,LucideArchive:zo,LucideArchiveRestore:Ao,LucideArchiveX:bo,LucideAreaChart:jo,LucideArmchair:Vo,LucideArrowBigDown:To,LucideArrowBigDownDash:qo,LucideArrowBigLeft:Do,LucideArrowBigLeftDash:Ho,LucideArrowBigRight:Ro,LucideArrowBigRightDash:Fo,LucideArrowBigUp:Eo,LucideArrowBigUpDash:Bo,LucideArrowDown:i2,LucideArrowDown01:Oo,LucideArrowDown10:Uo,LucideArrowDownAZ:i1,LucideArrowDownAz:i1,LucideArrowDownCircle:No,LucideArrowDownFromLine:_o,LucideArrowDownLeft:Ko,LucideArrowDownLeftFromCircle:Zo,LucideArrowDownLeftFromSquare:Wo,LucideArrowDownLeftSquare:Go,LucideArrowDownNarrowWide:$o,LucideArrowDownRight:Jo,LucideArrowDownRightFromCircle:Xo,LucideArrowDownRightFromSquare:Qo,LucideArrowDownRightSquare:Yo,LucideArrowDownSquare:e2,LucideArrowDownToDot:t2,LucideArrowDownToLine:n2,LucideArrowDownUp:a2,LucideArrowDownWideNarrow:r1,LucideArrowDownZA:o1,LucideArrowDownZa:o1,LucideArrowLeft:d2,LucideArrowLeftCircle:r2,LucideArrowLeftFromLine:o2,LucideArrowLeftRight:c2,LucideArrowLeftSquare:s2,LucideArrowLeftToLine:l2,LucideArrowRight:f2,LucideArrowRightCircle:h2,LucideArrowRightFromLine:u2,LucideArrowRightLeft:y2,LucideArrowRightSquare:p2,LucideArrowRightToLine:k2,LucideArrowUp:T2,LucideArrowUp01:m2,LucideArrowUp10:v2,LucideArrowUpAZ:c1,LucideArrowUpAz:c1,LucideArrowUpCircle:g2,LucideArrowUpDown:M2,LucideArrowUpFromDot:x2,LucideArrowUpFromLine:w2,LucideArrowUpLeft:I2,LucideArrowUpLeftFromCircle:L2,LucideArrowUpLeftFromSquare:C2,LucideArrowUpLeftSquare:S2,LucideArrowUpNarrowWide:s1,LucideArrowUpRight:z2,LucideArrowUpRightFromCircle:P2,LucideArrowUpRightFromSquare:A2,LucideArrowUpRightSquare:b2,LucideArrowUpSquare:j2,LucideArrowUpToLine:V2,LucideArrowUpWideNarrow:q2,LucideArrowUpZA:l1,LucideArrowUpZa:l1,LucideArrowsUpFromLine:H2,LucideAsterisk:D2,LucideAsteriskSquare:d1,LucideAtSign:F2,LucideAtom:R2,LucideAudioLines:B2,LucideAudioWaveform:E2,LucideAward:aa,LucideAxe:O2,LucideAxis3D:h1,LucideAxis3d:h1,LucideBaby:U2,LucideBackpack:N2,LucideBadge:rc,LucideBadgeAlert:_2,LucideBadgeCent:Z2,LucideBadgeCheck:u1,LucideBadgeDollarSign:W2,LucideBadgeEuro:G2,LucideBadgeHelp:K2,LucideBadgeIndianRupee:$2,LucideBadgeInfo:X2,LucideBadgeJapaneseYen:Q2,LucideBadgeMinus:Y2,LucideBadgePercent:J2,LucideBadgePlus:ec,LucideBadgePoundSterling:tc,LucideBadgeRussianRuble:nc,LucideBadgeSwissFranc:ac,LucideBadgeX:ic,LucideBaggageClaim:oc,LucideBan:cc,LucideBanana:sc,LucideBanknote:lc,LucideBarChart:fc,LucideBarChart2:dc,LucideBarChart3:hc,LucideBarChart4:uc,LucideBarChartBig:yc,LucideBarChartHorizontal:kc,LucideBarChartHorizontalBig:pc,LucideBarcode:mc,LucideBaseline:vc,LucideBath:gc,LucideBattery:Sc,LucideBatteryCharging:Mc,LucideBatteryFull:xc,LucideBatteryLow:wc,LucideBatteryMedium:Lc,LucideBatteryWarning:Cc,LucideBeaker:Ic,LucideBean:Ac,LucideBeanOff:Pc,LucideBed:jc,LucideBedDouble:bc,LucideBedSingle:zc,LucideBeef:Vc,LucideBeer:qc,LucideBell:Ec,LucideBellDot:Tc,LucideBellElectric:Hc,LucideBellMinus:Dc,LucideBellOff:Fc,LucideBellPlus:Rc,LucideBellRing:Bc,LucideBetweenHorizonalEnd:y1,LucideBetweenHorizonalStart:p1,LucideBetweenHorizontalEnd:y1,LucideBetweenHorizontalStart:p1,LucideBetweenVerticalEnd:Oc,LucideBetweenVerticalStart:Uc,LucideBike:Nc,LucideBinary:ia,LucideBiohazard:_c,LucideBird:Zc,LucideBitcoin:Wc,LucideBlend:Gc,LucideBlinds:Kc,LucideBlocks:$c,LucideBluetooth:Jc,LucideBluetoothConnected:Xc,LucideBluetoothOff:Qc,LucideBluetoothSearching:Yc,LucideBold:es,LucideBolt:ts,LucideBomb:ns,LucideBone:as,LucideBook:Is,LucideBookA:is,LucideBookAudio:rs,LucideBookCheck:os,LucideBookCopy:cs,LucideBookDashed:k1,LucideBookDown:ss,LucideBookHeadphones:ls,LucideBookHeart:ds,LucideBookImage:hs,LucideBookKey:us,LucideBookLock:ys,LucideBookMarked:ps,LucideBookMinus:ks,LucideBookOpen:vs,LucideBookOpenCheck:fs,LucideBookOpenText:ms,LucideBookPlus:gs,LucideBookTemplate:k1,LucideBookText:Ms,LucideBookType:xs,LucideBookUp:Ls,LucideBookUp2:ws,LucideBookUser:Cs,LucideBookX:Ss,LucideBookmark:js,LucideBookmarkCheck:Ps,LucideBookmarkMinus:As,LucideBookmarkPlus:bs,LucideBookmarkX:zs,LucideBoomBox:Vs,LucideBot:kt,LucideBotMessageSquare:qs,LucideBox:Hs,LucideBoxSelect:Ts,LucideBoxes:Ds,LucideBraces:f1,LucideBrackets:Fs,LucideBrain:Es,LucideBrainCircuit:Rs,LucideBrainCog:Bs,LucideBrickWall:Os,LucideBriefcase:Us,LucideBringToFront:Ns,LucideBrush:_s,LucideBug:Gs,LucideBugOff:Zs,LucideBugPlay:Ws,LucideBuilding:$s,LucideBuilding2:Ks,LucideBus:Qs,LucideBusFront:Xs,LucideCable:Js,LucideCableCar:Ys,LucideCake:tl,LucideCakeSlice:el,LucideCalculator:nl,LucideCalendar:vl,LucideCalendarCheck:il,LucideCalendarCheck2:al,LucideCalendarClock:rl,LucideCalendarDays:ol,LucideCalendarFold:cl,LucideCalendarHeart:sl,LucideCalendarMinus:dl,LucideCalendarMinus2:ll,LucideCalendarOff:hl,LucideCalendarPlus:yl,LucideCalendarPlus2:ul,LucideCalendarRange:pl,LucideCalendarSearch:kl,LucideCalendarX:ml,LucideCalendarX2:fl,LucideCamera:Ml,LucideCameraOff:gl,LucideCandlestickChart:xl,LucideCandy:Cl,LucideCandyCane:wl,LucideCandyOff:Ll,LucideCaptions:m1,LucideCaptionsOff:Sl,LucideCar:Al,LucideCarFront:Il,LucideCarTaxiFront:Pl,LucideCaravan:bl,LucideCarrot:zl,LucideCaseLower:jl,LucideCaseSensitive:Vl,LucideCaseUpper:ql,LucideCassetteTape:Tl,LucideCast:Hl,LucideCastle:Dl,LucideCat:Fl,LucideCctv:Rl,LucideCheck:Nl,LucideCheckCheck:Bl,LucideCheckCircle:El,LucideCheckCircle2:ai,LucideCheckSquare:Ul,LucideCheckSquare2:Ol,LucideChefHat:_l,LucideCherry:Zl,LucideChevronDown:ii,LucideChevronDownCircle:Wl,LucideChevronDownSquare:Gl,LucideChevronFirst:Kl,LucideChevronLast:$l,LucideChevronLeft:ri,LucideChevronLeftCircle:Xl,LucideChevronLeftSquare:Ql,LucideChevronRight:oi,LucideChevronRightCircle:Yl,LucideChevronRightSquare:Jl,LucideChevronUp:n0,LucideChevronUpCircle:e0,LucideChevronUpSquare:t0,LucideChevronsDown:i0,LucideChevronsDownUp:a0,LucideChevronsLeft:o0,LucideChevronsLeftRight:r0,LucideChevronsRight:s0,LucideChevronsRightLeft:c0,LucideChevronsUp:d0,LucideChevronsUpDown:l0,LucideChrome:h0,LucideChurch:u0,LucideCigarette:p0,LucideCigaretteOff:y0,LucideCircle:C0,LucideCircleDashed:k0,LucideCircleDollarSign:f0,LucideCircleDot:v0,LucideCircleDotDashed:m0,LucideCircleEllipsis:g0,LucideCircleEqual:M0,LucideCircleFadingPlus:x0,LucideCircleOff:w0,LucideCircleSlash:L0,LucideCircleSlash2:v1,LucideCircleSlashed:v1,LucideCircleUser:M1,LucideCircleUserRound:g1,LucideCircuitBoard:S0,LucideCitrus:I0,LucideClapperboard:P0,LucideClipboard:D0,LucideClipboardCheck:A0,LucideClipboardCopy:b0,LucideClipboardEdit:w1,LucideClipboardList:z0,LucideClipboardMinus:j0,LucideClipboardPaste:V0,LucideClipboardPen:w1,LucideClipboardPenLine:x1,LucideClipboardPlus:q0,LucideClipboardSignature:x1,LucideClipboardType:T0,LucideClipboardX:H0,LucideClock:$0,LucideClock1:F0,LucideClock10:R0,LucideClock11:B0,LucideClock12:E0,LucideClock2:O0,LucideClock3:U0,LucideClock4:N0,LucideClock5:_0,LucideClock6:Z0,LucideClock7:W0,LucideClock8:G0,LucideClock9:K0,LucideCloud:ld,LucideCloudCog:X0,LucideCloudDrizzle:Q0,LucideCloudFog:Y0,LucideCloudHail:J0,LucideCloudLightning:ed,LucideCloudMoon:nd,LucideCloudMoonRain:td,LucideCloudOff:ad,LucideCloudRain:rd,LucideCloudRainWind:id,LucideCloudSnow:od,LucideCloudSun:sd,LucideCloudSunRain:cd,LucideCloudy:dd,LucideClover:hd,LucideClub:ud,LucideCode:pd,LucideCode2:yd,LucideCodeSquare:L1,LucideCodepen:kd,LucideCodesandbox:fd,LucideCoffee:md,LucideCog:vd,LucideCoins:gd,LucideColumns:C1,LucideColumns2:C1,LucideColumns3:S1,LucideColumns4:Md,LucideCombine:xd,LucideCommand:wd,LucideCompass:Ld,LucideComponent:Cd,LucideComputer:Sd,LucideConciergeBell:Id,LucideCone:Pd,LucideConstruction:Ad,LucideContact:zd,LucideContact2:bd,LucideContainer:jd,LucideContrast:Vd,LucideCookie:qd,LucideCookingPot:Td,LucideCopy:Ed,LucideCopyCheck:Hd,LucideCopyMinus:Dd,LucideCopyPlus:Fd,LucideCopySlash:Rd,LucideCopyX:Bd,LucideCopyleft:Od,LucideCopyright:Ud,LucideCornerDownLeft:Nd,LucideCornerDownRight:_d,LucideCornerLeftDown:Zd,LucideCornerLeftUp:Wd,LucideCornerRightDown:Gd,LucideCornerRightUp:Kd,LucideCornerUpLeft:$d,LucideCornerUpRight:Xd,LucideCpu:Qd,LucideCreativeCommons:Yd,LucideCreditCard:Jd,LucideCroissant:eh,LucideCrop:th,LucideCross:nh,LucideCrosshair:ah,LucideCrown:ih,LucideCuboid:rh,LucideCupSoda:oh,LucideCurlyBraces:f1,LucideCurrency:ch,LucideCylinder:sh,LucideDatabase:hh,LucideDatabaseBackup:lh,LucideDatabaseZap:dh,LucideDelete:uh,LucideDessert:yh,LucideDiameter:ph,LucideDiamond:kh,LucideDice1:fh,LucideDice2:mh,LucideDice3:vh,LucideDice4:gh,LucideDice5:Mh,LucideDice6:xh,LucideDices:wh,LucideDiff:Lh,LucideDisc:Ph,LucideDisc2:Ch,LucideDisc3:Sh,LucideDiscAlbum:Ih,LucideDivide:zh,LucideDivideCircle:Ah,LucideDivideSquare:bh,LucideDna:Vh,LucideDnaOff:jh,LucideDog:qh,LucideDollarSign:Th,LucideDonut:Hh,LucideDoorClosed:Dh,LucideDoorOpen:Fh,LucideDot:Rh,LucideDotSquare:I1,LucideDownload:Eh,LucideDownloadCloud:Bh,LucideDraftingCompass:Oh,LucideDrama:Uh,LucideDribbble:Nh,LucideDrill:_h,LucideDroplet:Zh,LucideDroplets:Wh,LucideDrum:Gh,LucideDrumstick:Kh,LucideDumbbell:$h,LucideEar:Qh,LucideEarOff:Xh,LucideEarth:P1,LucideEarthLock:Yh,LucideEclipse:Jh,LucideEdit:Ae,LucideEdit2:Q1,LucideEdit3:X1,LucideEgg:nu,LucideEggFried:eu,LucideEggOff:tu,LucideEqual:iu,LucideEqualNot:au,LucideEqualSquare:A1,LucideEraser:ru,LucideEuro:ou,LucideExpand:cu,LucideExternalLink:su,LucideEye:du,LucideEyeOff:lu,LucideFacebook:hu,LucideFactory:uu,LucideFan:yu,LucideFastForward:pu,LucideFeather:ku,LucideFence:fu,LucideFerrisWheel:mu,LucideFigma:vu,LucideFile:vy,LucideFileArchive:gu,LucideFileAudio:xu,LucideFileAudio2:Mu,LucideFileAxis3D:b1,LucideFileAxis3d:b1,LucideFileBadge:Lu,LucideFileBadge2:wu,LucideFileBarChart:Su,LucideFileBarChart2:Cu,LucideFileBox:Iu,LucideFileCheck:Au,LucideFileCheck2:Pu,LucideFileClock:bu,LucideFileCode:ju,LucideFileCode2:zu,LucideFileCog:z1,LucideFileCog2:z1,LucideFileDiff:Vu,LucideFileDigit:qu,LucideFileDown:Tu,LucideFileEdit:V1,LucideFileHeart:Hu,LucideFileImage:Du,LucideFileInput:Fu,LucideFileJson:Bu,LucideFileJson2:Ru,LucideFileKey:Ou,LucideFileKey2:Eu,LucideFileLineChart:Uu,LucideFileLock:_u,LucideFileLock2:Nu,LucideFileMinus:Wu,LucideFileMinus2:Zu,LucideFileMusic:Gu,LucideFileOutput:Ku,LucideFilePen:V1,LucideFilePenLine:j1,LucideFilePieChart:$u,LucideFilePlus:Qu,LucideFilePlus2:Xu,LucideFileQuestion:Yu,LucideFileScan:Ju,LucideFileSearch:ty,LucideFileSearch2:ey,LucideFileSignature:j1,LucideFileSliders:ny,LucideFileSpreadsheet:ay,LucideFileStack:iy,LucideFileSymlink:ry,LucideFileTerminal:oy,LucideFileText:cy,LucideFileType:ly,LucideFileType2:sy,LucideFileUp:dy,LucideFileVideo:uy,LucideFileVideo2:hy,LucideFileVolume:py,LucideFileVolume2:yy,LucideFileWarning:ky,LucideFileX:my,LucideFileX2:fy,LucideFiles:gy,LucideFilm:My,LucideFilter:wy,LucideFilterX:xy,LucideFingerprint:Ly,LucideFireExtinguisher:Cy,LucideFish:Py,LucideFishOff:Sy,LucideFishSymbol:Iy,LucideFlag:jy,LucideFlagOff:Ay,LucideFlagTriangleLeft:by,LucideFlagTriangleRight:zy,LucideFlame:qy,LucideFlameKindling:Vy,LucideFlashlight:Hy,LucideFlashlightOff:Ty,LucideFlaskConical:Fy,LucideFlaskConicalOff:Dy,LucideFlaskRound:Ry,LucideFlipHorizontal:Ey,LucideFlipHorizontal2:By,LucideFlipVertical:Uy,LucideFlipVertical2:Oy,LucideFlower:_y,LucideFlower2:Ny,LucideFocus:Zy,LucideFoldHorizontal:Wy,LucideFoldVertical:Gy,LucideFolder:Mp,LucideFolderArchive:Ky,LucideFolderCheck:$y,LucideFolderClock:Xy,LucideFolderClosed:Qy,LucideFolderCog:q1,LucideFolderCog2:q1,LucideFolderDot:Yy,LucideFolderDown:Jy,LucideFolderEdit:T1,LucideFolderGit:tp,LucideFolderGit2:ep,LucideFolderHeart:np,LucideFolderInput:ap,LucideFolderKanban:ip,LucideFolderKey:rp,LucideFolderLock:op,LucideFolderMinus:cp,LucideFolderOpen:lp,LucideFolderOpenDot:sp,LucideFolderOutput:dp,LucideFolderPen:T1,LucideFolderPlus:hp,LucideFolderRoot:up,LucideFolderSearch:pp,LucideFolderSearch2:yp,LucideFolderSymlink:kp,LucideFolderSync:fp,LucideFolderTree:mp,LucideFolderUp:vp,LucideFolderX:gp,LucideFolders:xp,LucideFootprints:wp,LucideForklift:Lp,LucideFormInput:Cp,LucideForward:Sp,LucideFrame:Ip,LucideFramer:Pp,LucideFrown:Ap,LucideFuel:bp,LucideFullscreen:zp,LucideFunctionSquare:jp,LucideGalleryHorizontal:qp,LucideGalleryHorizontalEnd:Vp,LucideGalleryThumbnails:Tp,LucideGalleryVertical:Dp,LucideGalleryVerticalEnd:Hp,LucideGamepad:Rp,LucideGamepad2:Fp,LucideGanttChart:Bp,LucideGanttChartSquare:et,LucideGanttSquare:et,LucideGauge:Op,LucideGaugeCircle:Ep,LucideGavel:Up,LucideGem:Np,LucideGhost:_p,LucideGift:Zp,LucideGitBranch:Gp,LucideGitBranchPlus:Wp,LucideGitCommit:H1,LucideGitCommitHorizontal:H1,LucideGitCommitVertical:Kp,LucideGitCompare:Xp,LucideGitCompareArrows:$p,LucideGitFork:Qp,LucideGitGraph:Yp,LucideGitMerge:Jp,LucideGitPullRequest:rk,LucideGitPullRequestArrow:ek,LucideGitPullRequestClosed:tk,LucideGitPullRequestCreate:ak,LucideGitPullRequestCreateArrow:nk,LucideGitPullRequestDraft:ik,LucideGithub:ci,LucideGitlab:ok,LucideGlassWater:ck,LucideGlasses:sk,LucideGlobe:dk,LucideGlobe2:P1,LucideGlobeLock:lk,LucideGoal:hk,LucideGrab:uk,LucideGraduationCap:ra,LucideGrape:yk,LucideGrid:tt,LucideGrid2X2:D1,LucideGrid2x2:D1,LucideGrid3X3:tt,LucideGrid3x3:tt,LucideGrip:fk,LucideGripHorizontal:pk,LucideGripVertical:kk,LucideGroup:mk,LucideGuitar:vk,LucideHammer:gk,LucideHand:Ck,LucideHandCoins:Mk,LucideHandHeart:xk,LucideHandHelping:F1,LucideHandMetal:wk,LucideHandPlatter:Lk,LucideHandshake:Sk,LucideHardDrive:Ak,LucideHardDriveDownload:Ik,LucideHardDriveUpload:Pk,LucideHardHat:bk,LucideHash:zk,LucideHaze:jk,LucideHdmiPort:Vk,LucideHeading:Bk,LucideHeading1:qk,LucideHeading2:Tk,LucideHeading3:Hk,LucideHeading4:Dk,LucideHeading5:Fk,LucideHeading6:Rk,LucideHeadphones:Ek,LucideHeadset:Ok,LucideHeart:Wk,LucideHeartCrack:Uk,LucideHeartHandshake:Nk,LucideHeartOff:_k,LucideHeartPulse:Zk,LucideHeater:Gk,LucideHelpCircle:Kk,LucideHelpingHand:F1,LucideHexagon:$k,LucideHighlighter:Xk,LucideHistory:Qk,LucideHome:Yk,LucideHop:e4,LucideHopOff:Jk,LucideHotel:t4,LucideHourglass:n4,LucideIceCream:i4,LucideIceCream2:a4,LucideImage:d4,LucideImageDown:r4,LucideImageMinus:o4,LucideImageOff:c4,LucideImagePlus:s4,LucideImageUp:l4,LucideImages:h4,LucideImport:u4,LucideInbox:y4,LucideIndent:p4,LucideIndianRupee:k4,LucideInfinity:f4,LucideInfo:m4,LucideInspect:E1,LucideInspectionPanel:v4,LucideInstagram:g4,LucideItalic:M4,LucideIterationCcw:x4,LucideIterationCw:w4,LucideJapaneseYen:L4,LucideJoystick:C4,LucideKanban:S4,LucideKanbanSquare:B1,LucideKanbanSquareDashed:R1,LucideKey:A4,LucideKeyRound:I4,LucideKeySquare:P4,LucideKeyboard:z4,LucideKeyboardMusic:b4,LucideLamp:D4,LucideLampCeiling:j4,LucideLampDesk:V4,LucideLampFloor:q4,LucideLampWallDown:T4,LucideLampWallUp:H4,LucideLandPlot:F4,LucideLandmark:R4,LucideLanguages:B4,LucideLaptop:O4,LucideLaptop2:E4,LucideLasso:N4,LucideLassoSelect:U4,LucideLaugh:_4,LucideLayers:G4,LucideLayers2:Z4,LucideLayers3:W4,LucideLayout:$1,LucideLayoutDashboard:K4,LucideLayoutGrid:$4,LucideLayoutList:X4,LucideLayoutPanelLeft:Q4,LucideLayoutPanelTop:Y4,LucideLayoutTemplate:J4,LucideLeaf:e5,LucideLeafyGreen:t5,LucideLibrary:i5,LucideLibraryBig:n5,LucideLibrarySquare:a5,LucideLifeBuoy:r5,LucideLigature:o5,LucideLightbulb:s5,LucideLightbulbOff:c5,LucideLineChart:l5,LucideLink:u5,LucideLink2:h5,LucideLink2Off:d5,LucideLinkedin:si,LucideList:P5,LucideListChecks:y5,LucideListCollapse:p5,LucideListEnd:k5,LucideListFilter:f5,LucideListMinus:m5,LucideListMusic:v5,LucideListOrdered:g5,LucideListPlus:M5,LucideListRestart:x5,LucideListStart:w5,LucideListTodo:L5,LucideListTree:C5,LucideListVideo:S5,LucideListX:I5,LucideLoader:b5,LucideLoader2:A5,LucideLocate:V5,LucideLocateFixed:z5,LucideLocateOff:j5,LucideLock:T5,LucideLockKeyhole:q5,LucideLogIn:H5,LucideLogOut:D5,LucideLollipop:F5,LucideLuggage:R5,LucideMSquare:B5,LucideMagnet:E5,LucideMail:li,LucideMailCheck:O5,LucideMailMinus:U5,LucideMailOpen:N5,LucideMailPlus:_5,LucideMailQuestion:Z5,LucideMailSearch:W5,LucideMailWarning:G5,LucideMailX:K5,LucideMailbox:$5,LucideMails:X5,LucideMap:e3,LucideMapPin:Y5,LucideMapPinOff:Q5,LucideMapPinned:J5,LucideMartini:t3,LucideMaximize:a3,LucideMaximize2:n3,LucideMedal:i3,LucideMegaphone:o3,LucideMegaphoneOff:r3,LucideMeh:c3,LucideMemoryStick:s3,LucideMenu:d3,LucideMenuSquare:l3,LucideMerge:h3,LucideMessageCircle:w3,LucideMessageCircleCode:u3,LucideMessageCircleDashed:y3,LucideMessageCircleHeart:p3,LucideMessageCircleMore:k3,LucideMessageCircleOff:f3,LucideMessageCirclePlus:m3,LucideMessageCircleQuestion:v3,LucideMessageCircleReply:g3,LucideMessageCircleWarning:M3,LucideMessageCircleX:x3,LucideMessageSquare:di,LucideMessageSquareCode:L3,LucideMessageSquareDashed:C3,LucideMessageSquareDiff:S3,LucideMessageSquareDot:I3,LucideMessageSquareHeart:P3,LucideMessageSquareMore:A3,LucideMessageSquareOff:b3,LucideMessageSquarePlus:z3,LucideMessageSquareQuote:j3,LucideMessageSquareReply:V3,LucideMessageSquareShare:q3,LucideMessageSquareText:T3,LucideMessageSquareWarning:H3,LucideMessageSquareX:D3,LucideMessagesSquare:F3,LucideMic:E3,LucideMic2:R3,LucideMicOff:B3,LucideMicroscope:O3,LucideMicrowave:U3,LucideMilestone:N3,LucideMilk:Z3,LucideMilkOff:_3,LucideMinimize:G3,LucideMinimize2:W3,LucideMinus:X3,LucideMinusCircle:K3,LucideMinusSquare:$3,LucideMonitor:lf,LucideMonitorCheck:Q3,LucideMonitorDot:Y3,LucideMonitorDown:J3,LucideMonitorOff:ef,LucideMonitorPause:tf,LucideMonitorPlay:nf,LucideMonitorSmartphone:af,LucideMonitorSpeaker:rf,LucideMonitorStop:of,LucideMonitorUp:cf,LucideMonitorX:sf,LucideMoon:hf,LucideMoonStar:df,LucideMoreHorizontal:uf,LucideMoreVertical:yf,LucideMountain:kf,LucideMountainSnow:pf,LucideMouse:Mf,LucideMousePointer:gf,LucideMousePointer2:ff,LucideMousePointerClick:mf,LucideMousePointerSquare:E1,LucideMousePointerSquareDashed:vf,LucideMove:qf,LucideMove3D:O1,LucideMove3d:O1,LucideMoveDiagonal:wf,LucideMoveDiagonal2:xf,LucideMoveDown:Sf,LucideMoveDownLeft:Lf,LucideMoveDownRight:Cf,LucideMoveHorizontal:If,LucideMoveLeft:Pf,LucideMoveRight:Af,LucideMoveUp:jf,LucideMoveUpLeft:bf,LucideMoveUpRight:zf,LucideMoveVertical:Vf,LucideMusic:Ff,LucideMusic2:Tf,LucideMusic3:Hf,LucideMusic4:Df,LucideNavigation:Of,LucideNavigation2:Bf,LucideNavigation2Off:Rf,LucideNavigationOff:Ef,LucideNetwork:Uf,LucideNewspaper:oa,LucideNfc:Nf,LucideNotebook:Gf,LucideNotebookPen:_f,LucideNotebookTabs:Zf,LucideNotebookText:Wf,LucideNotepadText:$f,LucideNotepadTextDashed:Kf,LucideNut:Qf,LucideNutOff:Xf,LucideOctagon:Yf,LucideOption:Jf,LucideOrbit:e6,LucideOutdent:t6,LucidePackage:l6,LucidePackage2:n6,LucidePackageCheck:a6,LucidePackageMinus:i6,LucidePackageOpen:r6,LucidePackagePlus:o6,LucidePackageSearch:c6,LucidePackageX:s6,LucidePaintBucket:d6,LucidePaintRoller:h6,LucidePaintbrush:y6,LucidePaintbrush2:u6,LucidePalette:p6,LucidePalmtree:k6,LucidePanelBottom:v6,LucidePanelBottomClose:f6,LucidePanelBottomDashed:U1,LucidePanelBottomInactive:U1,LucidePanelBottomOpen:m6,LucidePanelLeft:W1,LucidePanelLeftClose:N1,LucidePanelLeftDashed:_1,LucidePanelLeftInactive:_1,LucidePanelLeftOpen:Z1,LucidePanelRight:x6,LucidePanelRightClose:g6,LucidePanelRightDashed:G1,LucidePanelRightInactive:G1,LucidePanelRightOpen:M6,LucidePanelTop:C6,LucidePanelTopClose:w6,LucidePanelTopDashed:K1,LucidePanelTopInactive:K1,LucidePanelTopOpen:L6,LucidePanelsLeftBottom:S6,LucidePanelsLeftRight:S1,LucidePanelsRightBottom:I6,LucidePanelsTopBottom:en,LucidePanelsTopLeft:$1,LucidePaperclip:P6,LucideParentheses:A6,LucideParkingCircle:z6,LucideParkingCircleOff:b6,LucideParkingMeter:j6,LucideParkingSquare:q6,LucideParkingSquareOff:V6,LucidePartyPopper:T6,LucidePause:F6,LucidePauseCircle:H6,LucidePauseOctagon:D6,LucidePawPrint:R6,LucidePcCase:B6,LucidePen:Q1,LucidePenBox:Ae,LucidePenLine:X1,LucidePenSquare:Ae,LucidePenTool:E6,LucidePencil:N6,LucidePencilLine:O6,LucidePencilRuler:U6,LucidePentagon:_6,LucidePercent:K6,LucidePercentCircle:Z6,LucidePercentDiamond:W6,LucidePercentSquare:G6,LucidePersonStanding:$6,LucidePhone:nm,LucidePhoneCall:X6,LucidePhoneForwarded:Q6,LucidePhoneIncoming:Y6,LucidePhoneMissed:J6,LucidePhoneOff:em,LucidePhoneOutgoing:tm,LucidePi:im,LucidePiSquare:am,LucidePiano:rm,LucidePickaxe:om,LucidePictureInPicture:sm,LucidePictureInPicture2:cm,LucidePieChart:lm,LucidePiggyBank:dm,LucidePilcrow:um,LucidePilcrowSquare:hm,LucidePill:ym,LucidePin:km,LucidePinOff:pm,LucidePipette:fm,LucidePizza:mm,LucidePlane:Mm,LucidePlaneLanding:vm,LucidePlaneTakeoff:gm,LucidePlay:Lm,LucidePlayCircle:xm,LucidePlaySquare:wm,LucidePlug:Pm,LucidePlug2:Cm,LucidePlugZap:Im,LucidePlugZap2:Sm,LucidePlus:zm,LucidePlusCircle:Am,LucidePlusSquare:bm,LucidePocket:Vm,LucidePocketKnife:jm,LucidePodcast:qm,LucidePointer:Hm,LucidePointerOff:Tm,LucidePopcorn:Dm,LucidePopsicle:Fm,LucidePoundSterling:Rm,LucidePower:Um,LucidePowerCircle:Bm,LucidePowerOff:Em,LucidePowerSquare:Om,LucidePresentation:Nm,LucidePrinter:_m,LucideProjector:Zm,LucidePuzzle:Wm,LucidePyramid:Gm,LucideQrCode:Km,LucideQuote:$m,LucideRabbit:Xm,LucideRadar:Qm,LucideRadiation:Ym,LucideRadical:Jm,LucideRadio:n8,LucideRadioReceiver:e8,LucideRadioTower:t8,LucideRadius:a8,LucideRailSymbol:i8,LucideRainbow:r8,LucideRat:o8,LucideRatio:c8,LucideReceipt:f8,LucideReceiptCent:s8,LucideReceiptEuro:l8,LucideReceiptIndianRupee:d8,LucideReceiptJapaneseYen:h8,LucideReceiptPoundSterling:u8,LucideReceiptRussianRuble:y8,LucideReceiptSwissFranc:p8,LucideReceiptText:k8,LucideRectangleHorizontal:m8,LucideRectangleVertical:v8,LucideRecycle:g8,LucideRedo:w8,LucideRedo2:M8,LucideRedoDot:x8,LucideRefreshCcw:C8,LucideRefreshCcwDot:L8,LucideRefreshCw:I8,LucideRefreshCwOff:S8,LucideRefrigerator:P8,LucideRegex:A8,LucideRemoveFormatting:b8,LucideRepeat:V8,LucideRepeat1:z8,LucideRepeat2:j8,LucideReplace:T8,LucideReplaceAll:q8,LucideReply:D8,LucideReplyAll:H8,LucideRewind:F8,LucideRibbon:R8,LucideRocket:ca,LucideRockingChair:B8,LucideRollerCoaster:E8,LucideRotate3D:Y1,LucideRotate3d:Y1,LucideRotateCcw:O8,LucideRotateCw:U8,LucideRoute:_8,LucideRouteOff:N8,LucideRouter:Z8,LucideRows:J1,LucideRows2:J1,LucideRows3:en,LucideRows4:W8,LucideRss:G8,LucideRuler:K8,LucideRussianRuble:$8,LucideSailboat:X8,LucideSalad:Q8,LucideSandwich:Y8,LucideSatellite:e7,LucideSatelliteDish:J8,LucideSave:n7,LucideSaveAll:t7,LucideScale:a7,LucideScale3D:tn,LucideScale3d:tn,LucideScaling:i7,LucideScan:h7,LucideScanBarcode:r7,LucideScanEye:o7,LucideScanFace:c7,LucideScanLine:s7,LucideScanSearch:l7,LucideScanText:d7,LucideScatterChart:u7,LucideSchool:p7,LucideSchool2:y7,LucideScissors:v7,LucideScissorsLineDashed:k7,LucideScissorsSquare:m7,LucideScissorsSquareDashedBottom:f7,LucideScreenShare:M7,LucideScreenShareOff:g7,LucideScroll:w7,LucideScrollText:x7,LucideSearch:P7,LucideSearchCheck:L7,LucideSearchCode:C7,LucideSearchSlash:S7,LucideSearchX:I7,LucideSend:hi,LucideSendHorizonal:nn,LucideSendHorizontal:nn,LucideSendToBack:A7,LucideSeparatorHorizontal:b7,LucideSeparatorVertical:z7,LucideServer:T7,LucideServerCog:j7,LucideServerCrash:V7,LucideServerOff:q7,LucideSettings:D7,LucideSettings2:H7,LucideShapes:F7,LucideShare:B7,LucideShare2:R7,LucideSheet:E7,LucideShell:O7,LucideShield:Q7,LucideShieldAlert:U7,LucideShieldBan:N7,LucideShieldCheck:_7,LucideShieldClose:an,LucideShieldEllipsis:Z7,LucideShieldHalf:W7,LucideShieldMinus:G7,LucideShieldOff:K7,LucideShieldPlus:$7,LucideShieldQuestion:X7,LucideShieldX:an,LucideShip:J7,LucideShipWheel:Y7,LucideShirt:ev,LucideShoppingBag:tv,LucideShoppingBasket:nv,LucideShoppingCart:av,LucideShovel:iv,LucideShowerHead:rv,LucideShrink:ov,LucideShrub:cv,LucideShuffle:sv,LucideSidebar:W1,LucideSidebarClose:N1,LucideSidebarOpen:Z1,LucideSigma:dv,LucideSigmaSquare:lv,LucideSignal:kv,LucideSignalHigh:hv,LucideSignalLow:uv,LucideSignalMedium:yv,LucideSignalZero:pv,LucideSignpost:mv,LucideSignpostBig:fv,LucideSiren:vv,LucideSkipBack:gv,LucideSkipForward:Mv,LucideSkull:xv,LucideSlack:wv,LucideSlash:Lv,LucideSlashSquare:rn,LucideSlice:Cv,LucideSliders:Iv,LucideSlidersHorizontal:Sv,LucideSmartphone:bv,LucideSmartphoneCharging:Pv,LucideSmartphoneNfc:Av,LucideSmile:jv,LucideSmilePlus:zv,LucideSnail:Vv,LucideSnowflake:qv,LucideSofa:Tv,LucideSortAsc:s1,LucideSortDesc:r1,LucideSoup:Hv,LucideSpace:Dv,LucideSpade:Fv,LucideSparkle:Rv,LucideSparkles:on,LucideSpeaker:Bv,LucideSpeech:Ev,LucideSpellCheck:Uv,LucideSpellCheck2:Ov,LucideSpline:Nv,LucideSplit:Wv,LucideSplitSquareHorizontal:_v,LucideSplitSquareVertical:Zv,LucideSprayCan:Gv,LucideSprout:Kv,LucideSquare:Jv,LucideSquareAsterisk:d1,LucideSquareCode:L1,LucideSquareDashedBottom:Xv,LucideSquareDashedBottomCode:$v,LucideSquareDot:I1,LucideSquareEqual:A1,LucideSquareGantt:et,LucideSquareKanban:B1,LucideSquareKanbanDashed:R1,LucideSquarePen:Ae,LucideSquareRadical:Qv,LucideSquareSlash:rn,LucideSquareStack:Yv,LucideSquareUser:sn,LucideSquareUserRound:cn,LucideSquircle:eg,LucideSquirrel:tg,LucideStamp:ng,LucideStar:rg,LucideStarHalf:ag,LucideStarOff:ig,LucideStars:on,LucideStepBack:og,LucideStepForward:cg,LucideStethoscope:sg,LucideSticker:lg,LucideStickyNote:dg,LucideStopCircle:hg,LucideStore:ug,LucideStretchHorizontal:yg,LucideStretchVertical:pg,LucideStrikethrough:kg,LucideSubscript:fg,LucideSubtitles:m1,LucideSun:xg,LucideSunDim:mg,LucideSunMedium:vg,LucideSunMoon:gg,LucideSunSnow:Mg,LucideSunrise:wg,LucideSunset:Lg,LucideSuperscript:Cg,LucideSwatchBook:Sg,LucideSwissFranc:Ig,LucideSwitchCamera:Pg,LucideSword:Ag,LucideSwords:bg,LucideSyringe:zg,LucideTable:Fg,LucideTable2:jg,LucideTableCellsMerge:Vg,LucideTableCellsSplit:qg,LucideTableColumnsSplit:Tg,LucideTableProperties:Hg,LucideTableRowsSplit:Dg,LucideTablet:Bg,LucideTabletSmartphone:Rg,LucideTablets:Eg,LucideTag:Og,LucideTags:Ug,LucideTally1:Ng,LucideTally2:_g,LucideTally3:Zg,LucideTally4:Wg,LucideTally5:Gg,LucideTangent:Kg,LucideTarget:$g,LucideTelescope:Xg,LucideTent:Yg,LucideTentTree:Qg,LucideTerminal:eM,LucideTerminalSquare:Jg,LucideTestTube:nM,LucideTestTube2:tM,LucideTestTubes:aM,LucideText:sM,LucideTextCursor:rM,LucideTextCursorInput:iM,LucideTextQuote:oM,LucideTextSearch:cM,LucideTextSelect:ln,LucideTextSelection:ln,LucideTheater:lM,LucideThermometer:uM,LucideThermometerSnowflake:dM,LucideThermometerSun:hM,LucideThumbsDown:yM,LucideThumbsUp:pM,LucideTicket:xM,LucideTicketCheck:kM,LucideTicketMinus:fM,LucideTicketPercent:mM,LucideTicketPlus:vM,LucideTicketSlash:gM,LucideTicketX:MM,LucideTimer:CM,LucideTimerOff:wM,LucideTimerReset:LM,LucideToggleLeft:SM,LucideToggleRight:IM,LucideTornado:PM,LucideTorus:AM,LucideTouchpad:zM,LucideTouchpadOff:bM,LucideTowerControl:jM,LucideToyBrick:VM,LucideTractor:qM,LucideTrafficCone:TM,LucideTrain:dn,LucideTrainFront:DM,LucideTrainFrontTunnel:HM,LucideTrainTrack:FM,LucideTramFront:dn,LucideTrash:BM,LucideTrash2:RM,LucideTreeDeciduous:EM,LucideTreePine:OM,LucideTrees:UM,LucideTrello:NM,LucideTrendingDown:_M,LucideTrendingUp:ZM,LucideTriangle:GM,LucideTriangleRight:WM,LucideTrophy:sa,LucideTruck:KM,LucideTurtle:$M,LucideTv:la,LucideTv2:XM,LucideTwitch:QM,LucideTwitter:YM,LucideType:JM,LucideUmbrella:t9,LucideUmbrellaOff:e9,LucideUnderline:n9,LucideUndo:r9,LucideUndo2:a9,LucideUndoDot:i9,LucideUnfoldHorizontal:o9,LucideUnfoldVertical:c9,LucideUngroup:s9,LucideUnlink:d9,LucideUnlink2:l9,LucideUnlock:u9,LucideUnlockKeyhole:h9,LucideUnplug:y9,LucideUpload:k9,LucideUploadCloud:p9,LucideUsb:f9,LucideUser:C9,LucideUser2:fn,LucideUserCheck:m9,LucideUserCheck2:hn,LucideUserCircle:M1,LucideUserCircle2:g1,LucideUserCog:v9,LucideUserCog2:un,LucideUserMinus:g9,LucideUserMinus2:yn,LucideUserPlus:M9,LucideUserPlus2:pn,LucideUserRound:fn,LucideUserRoundCheck:hn,LucideUserRoundCog:un,LucideUserRoundMinus:yn,LucideUserRoundPlus:pn,LucideUserRoundSearch:x9,LucideUserRoundX:kn,LucideUserSearch:w9,LucideUserSquare:sn,LucideUserSquare2:cn,LucideUserX:L9,LucideUserX2:kn,LucideUsers:S9,LucideUsers2:mn,LucideUsersRound:mn,LucideUtensils:P9,LucideUtensilsCrossed:I9,LucideUtilityPole:A9,LucideVariable:b9,LucideVault:z9,LucideVegan:j9,LucideVenetianMask:V9,LucideVerified:u1,LucideVibrate:T9,LucideVibrateOff:q9,LucideVideo:D9,LucideVideoOff:H9,LucideVideotape:F9,LucideView:R9,LucideVoicemail:B9,LucideVolume:N9,LucideVolume1:E9,LucideVolume2:O9,LucideVolumeX:U9,LucideVote:_9,LucideWallet:G9,LucideWallet2:Z9,LucideWalletCards:W9,LucideWallpaper:K9,LucideWand:X9,LucideWand2:$9,LucideWarehouse:Q9,LucideWashingMachine:Y9,LucideWatch:J9,LucideWaves:ex,LucideWaypoints:tx,LucideWebcam:nx,LucideWebhook:ix,LucideWebhookOff:ax,LucideWeight:rx,LucideWheat:cx,LucideWheatOff:ox,LucideWholeWord:sx,LucideWifi:dx,LucideWifiOff:lx,LucideWind:hx,LucideWine:yx,LucideWineOff:ux,LucideWorkflow:px,LucideWrapText:kx,LucideWrench:fx,LucideX:da,LucideXCircle:mx,LucideXOctagon:vx,LucideXSquare:gx,LucideYoutube:Mx,LucideZap:wx,LucideZapOff:xx,LucideZoomIn:Lx,LucideZoomOut:Cx,Luggage:R5,LuggageIcon:R5,MSquare:B5,MSquareIcon:B5,Magnet:E5,MagnetIcon:E5,Mail:li,MailCheck:O5,MailCheckIcon:O5,MailIcon:li,MailMinus:U5,MailMinusIcon:U5,MailOpen:N5,MailOpenIcon:N5,MailPlus:_5,MailPlusIcon:_5,MailQuestion:Z5,MailQuestionIcon:Z5,MailSearch:W5,MailSearchIcon:W5,MailWarning:G5,MailWarningIcon:G5,MailX:K5,MailXIcon:K5,Mailbox:$5,MailboxIcon:$5,Mails:X5,MailsIcon:X5,Map:e3,MapIcon:e3,MapPin:Y5,MapPinIcon:Y5,MapPinOff:Q5,MapPinOffIcon:Q5,MapPinned:J5,MapPinnedIcon:J5,Martini:t3,MartiniIcon:t3,Maximize:a3,Maximize2:n3,Maximize2Icon:n3,MaximizeIcon:a3,Medal:i3,MedalIcon:i3,Megaphone:o3,MegaphoneIcon:o3,MegaphoneOff:r3,MegaphoneOffIcon:r3,Meh:c3,MehIcon:c3,MemoryStick:s3,MemoryStickIcon:s3,Menu:d3,MenuIcon:d3,MenuSquare:l3,MenuSquareIcon:l3,Merge:h3,MergeIcon:h3,MessageCircle:w3,MessageCircleCode:u3,MessageCircleCodeIcon:u3,MessageCircleDashed:y3,MessageCircleDashedIcon:y3,MessageCircleHeart:p3,MessageCircleHeartIcon:p3,MessageCircleIcon:w3,MessageCircleMore:k3,MessageCircleMoreIcon:k3,MessageCircleOff:f3,MessageCircleOffIcon:f3,MessageCirclePlus:m3,MessageCirclePlusIcon:m3,MessageCircleQuestion:v3,MessageCircleQuestionIcon:v3,MessageCircleReply:g3,MessageCircleReplyIcon:g3,MessageCircleWarning:M3,MessageCircleWarningIcon:M3,MessageCircleX:x3,MessageCircleXIcon:x3,MessageSquare:di,MessageSquareCode:L3,MessageSquareCodeIcon:L3,MessageSquareDashed:C3,MessageSquareDashedIcon:C3,MessageSquareDiff:S3,MessageSquareDiffIcon:S3,MessageSquareDot:I3,MessageSquareDotIcon:I3,MessageSquareHeart:P3,MessageSquareHeartIcon:P3,MessageSquareIcon:di,MessageSquareMore:A3,MessageSquareMoreIcon:A3,MessageSquareOff:b3,MessageSquareOffIcon:b3,MessageSquarePlus:z3,MessageSquarePlusIcon:z3,MessageSquareQuote:j3,MessageSquareQuoteIcon:j3,MessageSquareReply:V3,MessageSquareReplyIcon:V3,MessageSquareShare:q3,MessageSquareShareIcon:q3,MessageSquareText:T3,MessageSquareTextIcon:T3,MessageSquareWarning:H3,MessageSquareWarningIcon:H3,MessageSquareX:D3,MessageSquareXIcon:D3,MessagesSquare:F3,MessagesSquareIcon:F3,Mic:E3,Mic2:R3,Mic2Icon:R3,MicIcon:E3,MicOff:B3,MicOffIcon:B3,Microscope:O3,MicroscopeIcon:O3,Microwave:U3,MicrowaveIcon:U3,Milestone:N3,MilestoneIcon:N3,Milk:Z3,MilkIcon:Z3,MilkOff:_3,MilkOffIcon:_3,Minimize:G3,Minimize2:W3,Minimize2Icon:W3,MinimizeIcon:G3,Minus:X3,MinusCircle:K3,MinusCircleIcon:K3,MinusIcon:X3,MinusSquare:$3,MinusSquareIcon:$3,Monitor:lf,MonitorCheck:Q3,MonitorCheckIcon:Q3,MonitorDot:Y3,MonitorDotIcon:Y3,MonitorDown:J3,MonitorDownIcon:J3,MonitorIcon:lf,MonitorOff:ef,MonitorOffIcon:ef,MonitorPause:tf,MonitorPauseIcon:tf,MonitorPlay:nf,MonitorPlayIcon:nf,MonitorSmartphone:af,MonitorSmartphoneIcon:af,MonitorSpeaker:rf,MonitorSpeakerIcon:rf,MonitorStop:of,MonitorStopIcon:of,MonitorUp:cf,MonitorUpIcon:cf,MonitorX:sf,MonitorXIcon:sf,Moon:hf,MoonIcon:hf,MoonStar:df,MoonStarIcon:df,MoreHorizontal:uf,MoreHorizontalIcon:uf,MoreVertical:yf,MoreVerticalIcon:yf,Mountain:kf,MountainIcon:kf,MountainSnow:pf,MountainSnowIcon:pf,Mouse:Mf,MouseIcon:Mf,MousePointer:gf,MousePointer2:ff,MousePointer2Icon:ff,MousePointerClick:mf,MousePointerClickIcon:mf,MousePointerIcon:gf,MousePointerSquare:E1,MousePointerSquareDashed:vf,MousePointerSquareDashedIcon:vf,MousePointerSquareIcon:E1,Move:qf,Move3D:O1,Move3DIcon:O1,Move3d:O1,Move3dIcon:O1,MoveDiagonal:wf,MoveDiagonal2:xf,MoveDiagonal2Icon:xf,MoveDiagonalIcon:wf,MoveDown:Sf,MoveDownIcon:Sf,MoveDownLeft:Lf,MoveDownLeftIcon:Lf,MoveDownRight:Cf,MoveDownRightIcon:Cf,MoveHorizontal:If,MoveHorizontalIcon:If,MoveIcon:qf,MoveLeft:Pf,MoveLeftIcon:Pf,MoveRight:Af,MoveRightIcon:Af,MoveUp:jf,MoveUpIcon:jf,MoveUpLeft:bf,MoveUpLeftIcon:bf,MoveUpRight:zf,MoveUpRightIcon:zf,MoveVertical:Vf,MoveVerticalIcon:Vf,Music:Ff,Music2:Tf,Music2Icon:Tf,Music3:Hf,Music3Icon:Hf,Music4:Df,Music4Icon:Df,MusicIcon:Ff,Navigation:Of,Navigation2:Bf,Navigation2Icon:Bf,Navigation2Off:Rf,Navigation2OffIcon:Rf,NavigationIcon:Of,NavigationOff:Ef,NavigationOffIcon:Ef,Network:Uf,NetworkIcon:Uf,Newspaper:oa,NewspaperIcon:oa,Nfc:Nf,NfcIcon:Nf,Notebook:Gf,NotebookIcon:Gf,NotebookPen:_f,NotebookPenIcon:_f,NotebookTabs:Zf,NotebookTabsIcon:Zf,NotebookText:Wf,NotebookTextIcon:Wf,NotepadText:$f,NotepadTextDashed:Kf,NotepadTextDashedIcon:Kf,NotepadTextIcon:$f,Nut:Qf,NutIcon:Qf,NutOff:Xf,NutOffIcon:Xf,Octagon:Yf,OctagonIcon:Yf,Option:Jf,OptionIcon:Jf,Orbit:e6,OrbitIcon:e6,Outdent:t6,OutdentIcon:t6,Package:l6,Package2:n6,Package2Icon:n6,PackageCheck:a6,PackageCheckIcon:a6,PackageIcon:l6,PackageMinus:i6,PackageMinusIcon:i6,PackageOpen:r6,PackageOpenIcon:r6,PackagePlus:o6,PackagePlusIcon:o6,PackageSearch:c6,PackageSearchIcon:c6,PackageX:s6,PackageXIcon:s6,PaintBucket:d6,PaintBucketIcon:d6,PaintRoller:h6,PaintRollerIcon:h6,Paintbrush:y6,Paintbrush2:u6,Paintbrush2Icon:u6,PaintbrushIcon:y6,Palette:p6,PaletteIcon:p6,Palmtree:k6,PalmtreeIcon:k6,PanelBottom:v6,PanelBottomClose:f6,PanelBottomCloseIcon:f6,PanelBottomDashed:U1,PanelBottomDashedIcon:U1,PanelBottomIcon:v6,PanelBottomInactive:U1,PanelBottomInactiveIcon:U1,PanelBottomOpen:m6,PanelBottomOpenIcon:m6,PanelLeft:W1,PanelLeftClose:N1,PanelLeftCloseIcon:N1,PanelLeftDashed:_1,PanelLeftDashedIcon:_1,PanelLeftIcon:W1,PanelLeftInactive:_1,PanelLeftInactiveIcon:_1,PanelLeftOpen:Z1,PanelLeftOpenIcon:Z1,PanelRight:x6,PanelRightClose:g6,PanelRightCloseIcon:g6,PanelRightDashed:G1,PanelRightDashedIcon:G1,PanelRightIcon:x6,PanelRightInactive:G1,PanelRightInactiveIcon:G1,PanelRightOpen:M6,PanelRightOpenIcon:M6,PanelTop:C6,PanelTopClose:w6,PanelTopCloseIcon:w6,PanelTopDashed:K1,PanelTopDashedIcon:K1,PanelTopIcon:C6,PanelTopInactive:K1,PanelTopInactiveIcon:K1,PanelTopOpen:L6,PanelTopOpenIcon:L6,PanelsLeftBottom:S6,PanelsLeftBottomIcon:S6,PanelsLeftRight:S1,PanelsLeftRightIcon:S1,PanelsRightBottom:I6,PanelsRightBottomIcon:I6,PanelsTopBottom:en,PanelsTopBottomIcon:en,PanelsTopLeft:$1,PanelsTopLeftIcon:$1,Paperclip:P6,PaperclipIcon:P6,Parentheses:A6,ParenthesesIcon:A6,ParkingCircle:z6,ParkingCircleIcon:z6,ParkingCircleOff:b6,ParkingCircleOffIcon:b6,ParkingMeter:j6,ParkingMeterIcon:j6,ParkingSquare:q6,ParkingSquareIcon:q6,ParkingSquareOff:V6,ParkingSquareOffIcon:V6,PartyPopper:T6,PartyPopperIcon:T6,Pause:F6,PauseCircle:H6,PauseCircleIcon:H6,PauseIcon:F6,PauseOctagon:D6,PauseOctagonIcon:D6,PawPrint:R6,PawPrintIcon:R6,PcCase:B6,PcCaseIcon:B6,Pen:Q1,PenBox:Ae,PenBoxIcon:Ae,PenIcon:Q1,PenLine:X1,PenLineIcon:X1,PenSquare:Ae,PenSquareIcon:Ae,PenTool:E6,PenToolIcon:E6,Pencil:N6,PencilIcon:N6,PencilLine:O6,PencilLineIcon:O6,PencilRuler:U6,PencilRulerIcon:U6,Pentagon:_6,PentagonIcon:_6,Percent:K6,PercentCircle:Z6,PercentCircleIcon:Z6,PercentDiamond:W6,PercentDiamondIcon:W6,PercentIcon:K6,PercentSquare:G6,PercentSquareIcon:G6,PersonStanding:$6,PersonStandingIcon:$6,Phone:nm,PhoneCall:X6,PhoneCallIcon:X6,PhoneForwarded:Q6,PhoneForwardedIcon:Q6,PhoneIcon:nm,PhoneIncoming:Y6,PhoneIncomingIcon:Y6,PhoneMissed:J6,PhoneMissedIcon:J6,PhoneOff:em,PhoneOffIcon:em,PhoneOutgoing:tm,PhoneOutgoingIcon:tm,Pi:im,PiIcon:im,PiSquare:am,PiSquareIcon:am,Piano:rm,PianoIcon:rm,Pickaxe:om,PickaxeIcon:om,PictureInPicture:sm,PictureInPicture2:cm,PictureInPicture2Icon:cm,PictureInPictureIcon:sm,PieChart:lm,PieChartIcon:lm,PiggyBank:dm,PiggyBankIcon:dm,Pilcrow:um,PilcrowIcon:um,PilcrowSquare:hm,PilcrowSquareIcon:hm,Pill:ym,PillIcon:ym,Pin:km,PinIcon:km,PinOff:pm,PinOffIcon:pm,Pipette:fm,PipetteIcon:fm,Pizza:mm,PizzaIcon:mm,Plane:Mm,PlaneIcon:Mm,PlaneLanding:vm,PlaneLandingIcon:vm,PlaneTakeoff:gm,PlaneTakeoffIcon:gm,Play:Lm,PlayCircle:xm,PlayCircleIcon:xm,PlayIcon:Lm,PlaySquare:wm,PlaySquareIcon:wm,Plug:Pm,Plug2:Cm,Plug2Icon:Cm,PlugIcon:Pm,PlugZap:Im,PlugZap2:Sm,PlugZap2Icon:Sm,PlugZapIcon:Im,Plus:zm,PlusCircle:Am,PlusCircleIcon:Am,PlusIcon:zm,PlusSquare:bm,PlusSquareIcon:bm,Pocket:Vm,PocketIcon:Vm,PocketKnife:jm,PocketKnifeIcon:jm,Podcast:qm,PodcastIcon:qm,Pointer:Hm,PointerIcon:Hm,PointerOff:Tm,PointerOffIcon:Tm,Popcorn:Dm,PopcornIcon:Dm,Popsicle:Fm,PopsicleIcon:Fm,PoundSterling:Rm,PoundSterlingIcon:Rm,Power:Um,PowerCircle:Bm,PowerCircleIcon:Bm,PowerIcon:Um,PowerOff:Em,PowerOffIcon:Em,PowerSquare:Om,PowerSquareIcon:Om,Presentation:Nm,PresentationIcon:Nm,Printer:_m,PrinterIcon:_m,Projector:Zm,ProjectorIcon:Zm,Puzzle:Wm,PuzzleIcon:Wm,Pyramid:Gm,PyramidIcon:Gm,QrCode:Km,QrCodeIcon:Km,Quote:$m,QuoteIcon:$m,Rabbit:Xm,RabbitIcon:Xm,Radar:Qm,RadarIcon:Qm,Radiation:Ym,RadiationIcon:Ym,Radical:Jm,RadicalIcon:Jm,Radio:n8,RadioIcon:n8,RadioReceiver:e8,RadioReceiverIcon:e8,RadioTower:t8,RadioTowerIcon:t8,Radius:a8,RadiusIcon:a8,RailSymbol:i8,RailSymbolIcon:i8,Rainbow:r8,RainbowIcon:r8,Rat:o8,RatIcon:o8,Ratio:c8,RatioIcon:c8,Receipt:f8,ReceiptCent:s8,ReceiptCentIcon:s8,ReceiptEuro:l8,ReceiptEuroIcon:l8,ReceiptIcon:f8,ReceiptIndianRupee:d8,ReceiptIndianRupeeIcon:d8,ReceiptJapaneseYen:h8,ReceiptJapaneseYenIcon:h8,ReceiptPoundSterling:u8,ReceiptPoundSterlingIcon:u8,ReceiptRussianRuble:y8,ReceiptRussianRubleIcon:y8,ReceiptSwissFranc:p8,ReceiptSwissFrancIcon:p8,ReceiptText:k8,ReceiptTextIcon:k8,RectangleHorizontal:m8,RectangleHorizontalIcon:m8,RectangleVertical:v8,RectangleVerticalIcon:v8,Recycle:g8,RecycleIcon:g8,Redo:w8,Redo2:M8,Redo2Icon:M8,RedoDot:x8,RedoDotIcon:x8,RedoIcon:w8,RefreshCcw:C8,RefreshCcwDot:L8,RefreshCcwDotIcon:L8,RefreshCcwIcon:C8,RefreshCw:I8,RefreshCwIcon:I8,RefreshCwOff:S8,RefreshCwOffIcon:S8,Refrigerator:P8,RefrigeratorIcon:P8,Regex:A8,RegexIcon:A8,RemoveFormatting:b8,RemoveFormattingIcon:b8,Repeat:V8,Repeat1:z8,Repeat1Icon:z8,Repeat2:j8,Repeat2Icon:j8,RepeatIcon:V8,Replace:T8,ReplaceAll:q8,ReplaceAllIcon:q8,ReplaceIcon:T8,Reply:D8,ReplyAll:H8,ReplyAllIcon:H8,ReplyIcon:D8,Rewind:F8,RewindIcon:F8,Ribbon:R8,RibbonIcon:R8,Rocket:ca,RocketIcon:ca,RockingChair:B8,RockingChairIcon:B8,RollerCoaster:E8,RollerCoasterIcon:E8,Rotate3D:Y1,Rotate3DIcon:Y1,Rotate3d:Y1,Rotate3dIcon:Y1,RotateCcw:O8,RotateCcwIcon:O8,RotateCw:U8,RotateCwIcon:U8,Route:_8,RouteIcon:_8,RouteOff:N8,RouteOffIcon:N8,Router:Z8,RouterIcon:Z8,Rows:J1,Rows2:J1,Rows2Icon:J1,Rows3:en,Rows3Icon:en,Rows4:W8,Rows4Icon:W8,RowsIcon:J1,Rss:G8,RssIcon:G8,Ruler:K8,RulerIcon:K8,RussianRuble:$8,RussianRubleIcon:$8,Sailboat:X8,SailboatIcon:X8,Salad:Q8,SaladIcon:Q8,Sandwich:Y8,SandwichIcon:Y8,Satellite:e7,SatelliteDish:J8,SatelliteDishIcon:J8,SatelliteIcon:e7,Save:n7,SaveAll:t7,SaveAllIcon:t7,SaveIcon:n7,Scale:a7,Scale3D:tn,Scale3DIcon:tn,Scale3d:tn,Scale3dIcon:tn,ScaleIcon:a7,Scaling:i7,ScalingIcon:i7,Scan:h7,ScanBarcode:r7,ScanBarcodeIcon:r7,ScanEye:o7,ScanEyeIcon:o7,ScanFace:c7,ScanFaceIcon:c7,ScanIcon:h7,ScanLine:s7,ScanLineIcon:s7,ScanSearch:l7,ScanSearchIcon:l7,ScanText:d7,ScanTextIcon:d7,ScatterChart:u7,ScatterChartIcon:u7,School:p7,School2:y7,School2Icon:y7,SchoolIcon:p7,Scissors:v7,ScissorsIcon:v7,ScissorsLineDashed:k7,ScissorsLineDashedIcon:k7,ScissorsSquare:m7,ScissorsSquareDashedBottom:f7,ScissorsSquareDashedBottomIcon:f7,ScissorsSquareIcon:m7,ScreenShare:M7,ScreenShareIcon:M7,ScreenShareOff:g7,ScreenShareOffIcon:g7,Scroll:w7,ScrollIcon:w7,ScrollText:x7,ScrollTextIcon:x7,Search:P7,SearchCheck:L7,SearchCheckIcon:L7,SearchCode:C7,SearchCodeIcon:C7,SearchIcon:P7,SearchSlash:S7,SearchSlashIcon:S7,SearchX:I7,SearchXIcon:I7,Send:hi,SendHorizonal:nn,SendHorizonalIcon:nn,SendHorizontal:nn,SendHorizontalIcon:nn,SendIcon:hi,SendToBack:A7,SendToBackIcon:A7,SeparatorHorizontal:b7,SeparatorHorizontalIcon:b7,SeparatorVertical:z7,SeparatorVerticalIcon:z7,Server:T7,ServerCog:j7,ServerCogIcon:j7,ServerCrash:V7,ServerCrashIcon:V7,ServerIcon:T7,ServerOff:q7,ServerOffIcon:q7,Settings:D7,Settings2:H7,Settings2Icon:H7,SettingsIcon:D7,Shapes:F7,ShapesIcon:F7,Share:B7,Share2:R7,Share2Icon:R7,ShareIcon:B7,Sheet:E7,SheetIcon:E7,Shell:O7,ShellIcon:O7,Shield:Q7,ShieldAlert:U7,ShieldAlertIcon:U7,ShieldBan:N7,ShieldBanIcon:N7,ShieldCheck:_7,ShieldCheckIcon:_7,ShieldClose:an,ShieldCloseIcon:an,ShieldEllipsis:Z7,ShieldEllipsisIcon:Z7,ShieldHalf:W7,ShieldHalfIcon:W7,ShieldIcon:Q7,ShieldMinus:G7,ShieldMinusIcon:G7,ShieldOff:K7,ShieldOffIcon:K7,ShieldPlus:$7,ShieldPlusIcon:$7,ShieldQuestion:X7,ShieldQuestionIcon:X7,ShieldX:an,ShieldXIcon:an,Ship:J7,ShipIcon:J7,ShipWheel:Y7,ShipWheelIcon:Y7,Shirt:ev,ShirtIcon:ev,ShoppingBag:tv,ShoppingBagIcon:tv,ShoppingBasket:nv,ShoppingBasketIcon:nv,ShoppingCart:av,ShoppingCartIcon:av,Shovel:iv,ShovelIcon:iv,ShowerHead:rv,ShowerHeadIcon:rv,Shrink:ov,ShrinkIcon:ov,Shrub:cv,ShrubIcon:cv,Shuffle:sv,ShuffleIcon:sv,Sidebar:W1,SidebarClose:N1,SidebarCloseIcon:N1,SidebarIcon:W1,SidebarOpen:Z1,SidebarOpenIcon:Z1,Sigma:dv,SigmaIcon:dv,SigmaSquare:lv,SigmaSquareIcon:lv,Signal:kv,SignalHigh:hv,SignalHighIcon:hv,SignalIcon:kv,SignalLow:uv,SignalLowIcon:uv,SignalMedium:yv,SignalMediumIcon:yv,SignalZero:pv,SignalZeroIcon:pv,Signpost:mv,SignpostBig:fv,SignpostBigIcon:fv,SignpostIcon:mv,Siren:vv,SirenIcon:vv,SkipBack:gv,SkipBackIcon:gv,SkipForward:Mv,SkipForwardIcon:Mv,Skull:xv,SkullIcon:xv,Slack:wv,SlackIcon:wv,Slash:Lv,SlashIcon:Lv,SlashSquare:rn,SlashSquareIcon:rn,Slice:Cv,SliceIcon:Cv,Sliders:Iv,SlidersHorizontal:Sv,SlidersHorizontalIcon:Sv,SlidersIcon:Iv,Smartphone:bv,SmartphoneCharging:Pv,SmartphoneChargingIcon:Pv,SmartphoneIcon:bv,SmartphoneNfc:Av,SmartphoneNfcIcon:Av,Smile:jv,SmileIcon:jv,SmilePlus:zv,SmilePlusIcon:zv,Snail:Vv,SnailIcon:Vv,Snowflake:qv,SnowflakeIcon:qv,Sofa:Tv,SofaIcon:Tv,SortAsc:s1,SortAscIcon:s1,SortDesc:r1,SortDescIcon:r1,Soup:Hv,SoupIcon:Hv,Space:Dv,SpaceIcon:Dv,Spade:Fv,SpadeIcon:Fv,Sparkle:Rv,SparkleIcon:Rv,Sparkles:on,SparklesIcon:on,Speaker:Bv,SpeakerIcon:Bv,Speech:Ev,SpeechIcon:Ev,SpellCheck:Uv,SpellCheck2:Ov,SpellCheck2Icon:Ov,SpellCheckIcon:Uv,Spline:Nv,SplineIcon:Nv,Split:Wv,SplitIcon:Wv,SplitSquareHorizontal:_v,SplitSquareHorizontalIcon:_v,SplitSquareVertical:Zv,SplitSquareVerticalIcon:Zv,SprayCan:Gv,SprayCanIcon:Gv,Sprout:Kv,SproutIcon:Kv,Square:Jv,SquareAsterisk:d1,SquareAsteriskIcon:d1,SquareCode:L1,SquareCodeIcon:L1,SquareDashedBottom:Xv,SquareDashedBottomCode:$v,SquareDashedBottomCodeIcon:$v,SquareDashedBottomIcon:Xv,SquareDot:I1,SquareDotIcon:I1,SquareEqual:A1,SquareEqualIcon:A1,SquareGantt:et,SquareGanttIcon:et,SquareIcon:Jv,SquareKanban:B1,SquareKanbanDashed:R1,SquareKanbanDashedIcon:R1,SquareKanbanIcon:B1,SquarePen:Ae,SquarePenIcon:Ae,SquareRadical:Qv,SquareRadicalIcon:Qv,SquareSlash:rn,SquareSlashIcon:rn,SquareStack:Yv,SquareStackIcon:Yv,SquareUser:sn,SquareUserIcon:sn,SquareUserRound:cn,SquareUserRoundIcon:cn,Squircle:eg,SquircleIcon:eg,Squirrel:tg,SquirrelIcon:tg,Stamp:ng,StampIcon:ng,Star:rg,StarHalf:ag,StarHalfIcon:ag,StarIcon:rg,StarOff:ig,StarOffIcon:ig,Stars:on,StarsIcon:on,StepBack:og,StepBackIcon:og,StepForward:cg,StepForwardIcon:cg,Stethoscope:sg,StethoscopeIcon:sg,Sticker:lg,StickerIcon:lg,StickyNote:dg,StickyNoteIcon:dg,StopCircle:hg,StopCircleIcon:hg,Store:ug,StoreIcon:ug,StretchHorizontal:yg,StretchHorizontalIcon:yg,StretchVertical:pg,StretchVerticalIcon:pg,Strikethrough:kg,StrikethroughIcon:kg,Subscript:fg,SubscriptIcon:fg,Subtitles:m1,SubtitlesIcon:m1,Sun:xg,SunDim:mg,SunDimIcon:mg,SunIcon:xg,SunMedium:vg,SunMediumIcon:vg,SunMoon:gg,SunMoonIcon:gg,SunSnow:Mg,SunSnowIcon:Mg,Sunrise:wg,SunriseIcon:wg,Sunset:Lg,SunsetIcon:Lg,Superscript:Cg,SuperscriptIcon:Cg,SwatchBook:Sg,SwatchBookIcon:Sg,SwissFranc:Ig,SwissFrancIcon:Ig,SwitchCamera:Pg,SwitchCameraIcon:Pg,Sword:Ag,SwordIcon:Ag,Swords:bg,SwordsIcon:bg,Syringe:zg,SyringeIcon:zg,Table:Fg,Table2:jg,Table2Icon:jg,TableCellsMerge:Vg,TableCellsMergeIcon:Vg,TableCellsSplit:qg,TableCellsSplitIcon:qg,TableColumnsSplit:Tg,TableColumnsSplitIcon:Tg,TableIcon:Fg,TableProperties:Hg,TablePropertiesIcon:Hg,TableRowsSplit:Dg,TableRowsSplitIcon:Dg,Tablet:Bg,TabletIcon:Bg,TabletSmartphone:Rg,TabletSmartphoneIcon:Rg,Tablets:Eg,TabletsIcon:Eg,Tag:Og,TagIcon:Og,Tags:Ug,TagsIcon:Ug,Tally1:Ng,Tally1Icon:Ng,Tally2:_g,Tally2Icon:_g,Tally3:Zg,Tally3Icon:Zg,Tally4:Wg,Tally4Icon:Wg,Tally5:Gg,Tally5Icon:Gg,Tangent:Kg,TangentIcon:Kg,Target:$g,TargetIcon:$g,Telescope:Xg,TelescopeIcon:Xg,Tent:Yg,TentIcon:Yg,TentTree:Qg,TentTreeIcon:Qg,Terminal:eM,TerminalIcon:eM,TerminalSquare:Jg,TerminalSquareIcon:Jg,TestTube:nM,TestTube2:tM,TestTube2Icon:tM,TestTubeIcon:nM,TestTubes:aM,TestTubesIcon:aM,Text:sM,TextCursor:rM,TextCursorIcon:rM,TextCursorInput:iM,TextCursorInputIcon:iM,TextIcon:sM,TextQuote:oM,TextQuoteIcon:oM,TextSearch:cM,TextSearchIcon:cM,TextSelect:ln,TextSelectIcon:ln,TextSelection:ln,TextSelectionIcon:ln,Theater:lM,TheaterIcon:lM,Thermometer:uM,ThermometerIcon:uM,ThermometerSnowflake:dM,ThermometerSnowflakeIcon:dM,ThermometerSun:hM,ThermometerSunIcon:hM,ThumbsDown:yM,ThumbsDownIcon:yM,ThumbsUp:pM,ThumbsUpIcon:pM,Ticket:xM,TicketCheck:kM,TicketCheckIcon:kM,TicketIcon:xM,TicketMinus:fM,TicketMinusIcon:fM,TicketPercent:mM,TicketPercentIcon:mM,TicketPlus:vM,TicketPlusIcon:vM,TicketSlash:gM,TicketSlashIcon:gM,TicketX:MM,TicketXIcon:MM,Timer:CM,TimerIcon:CM,TimerOff:wM,TimerOffIcon:wM,TimerReset:LM,TimerResetIcon:LM,ToggleLeft:SM,ToggleLeftIcon:SM,ToggleRight:IM,ToggleRightIcon:IM,Tornado:PM,TornadoIcon:PM,Torus:AM,TorusIcon:AM,Touchpad:zM,TouchpadIcon:zM,TouchpadOff:bM,TouchpadOffIcon:bM,TowerControl:jM,TowerControlIcon:jM,ToyBrick:VM,ToyBrickIcon:VM,Tractor:qM,TractorIcon:qM,TrafficCone:TM,TrafficConeIcon:TM,Train:dn,TrainFront:DM,TrainFrontIcon:DM,TrainFrontTunnel:HM,TrainFrontTunnelIcon:HM,TrainIcon:dn,TrainTrack:FM,TrainTrackIcon:FM,TramFront:dn,TramFrontIcon:dn,Trash:BM,Trash2:RM,Trash2Icon:RM,TrashIcon:BM,TreeDeciduous:EM,TreeDeciduousIcon:EM,TreePine:OM,TreePineIcon:OM,Trees:UM,TreesIcon:UM,Trello:NM,TrelloIcon:NM,TrendingDown:_M,TrendingDownIcon:_M,TrendingUp:ZM,TrendingUpIcon:ZM,Triangle:GM,TriangleIcon:GM,TriangleRight:WM,TriangleRightIcon:WM,Trophy:sa,TrophyIcon:sa,Truck:KM,TruckIcon:KM,Turtle:$M,TurtleIcon:$M,Tv:la,Tv2:XM,Tv2Icon:XM,TvIcon:la,Twitch:QM,TwitchIcon:QM,Twitter:YM,TwitterIcon:YM,Type:JM,TypeIcon:JM,Umbrella:t9,UmbrellaIcon:t9,UmbrellaOff:e9,UmbrellaOffIcon:e9,Underline:n9,UnderlineIcon:n9,Undo:r9,Undo2:a9,Undo2Icon:a9,UndoDot:i9,UndoDotIcon:i9,UndoIcon:r9,UnfoldHorizontal:o9,UnfoldHorizontalIcon:o9,UnfoldVertical:c9,UnfoldVerticalIcon:c9,Ungroup:s9,UngroupIcon:s9,Unlink:d9,Unlink2:l9,Unlink2Icon:l9,UnlinkIcon:d9,Unlock:u9,UnlockIcon:u9,UnlockKeyhole:h9,UnlockKeyholeIcon:h9,Unplug:y9,UnplugIcon:y9,Upload:k9,UploadCloud:p9,UploadCloudIcon:p9,UploadIcon:k9,Usb:f9,UsbIcon:f9,User:C9,User2:fn,User2Icon:fn,UserCheck:m9,UserCheck2:hn,UserCheck2Icon:hn,UserCheckIcon:m9,UserCircle:M1,UserCircle2:g1,UserCircle2Icon:g1,UserCircleIcon:M1,UserCog:v9,UserCog2:un,UserCog2Icon:un,UserCogIcon:v9,UserIcon:C9,UserMinus:g9,UserMinus2:yn,UserMinus2Icon:yn,UserMinusIcon:g9,UserPlus:M9,UserPlus2:pn,UserPlus2Icon:pn,UserPlusIcon:M9,UserRound:fn,UserRoundCheck:hn,UserRoundCheckIcon:hn,UserRoundCog:un,UserRoundCogIcon:un,UserRoundIcon:fn,UserRoundMinus:yn,UserRoundMinusIcon:yn,UserRoundPlus:pn,UserRoundPlusIcon:pn,UserRoundSearch:x9,UserRoundSearchIcon:x9,UserRoundX:kn,UserRoundXIcon:kn,UserSearch:w9,UserSearchIcon:w9,UserSquare:sn,UserSquare2:cn,UserSquare2Icon:cn,UserSquareIcon:sn,UserX:L9,UserX2:kn,UserX2Icon:kn,UserXIcon:L9,Users:S9,Users2:mn,Users2Icon:mn,UsersIcon:S9,UsersRound:mn,UsersRoundIcon:mn,Utensils:P9,UtensilsCrossed:I9,UtensilsCrossedIcon:I9,UtensilsIcon:P9,UtilityPole:A9,UtilityPoleIcon:A9,Variable:b9,VariableIcon:b9,Vault:z9,VaultIcon:z9,Vegan:j9,VeganIcon:j9,VenetianMask:V9,VenetianMaskIcon:V9,Verified:u1,VerifiedIcon:u1,Vibrate:T9,VibrateIcon:T9,VibrateOff:q9,VibrateOffIcon:q9,Video:D9,VideoIcon:D9,VideoOff:H9,VideoOffIcon:H9,Videotape:F9,VideotapeIcon:F9,View:R9,ViewIcon:R9,Voicemail:B9,VoicemailIcon:B9,Volume:N9,Volume1:E9,Volume1Icon:E9,Volume2:O9,Volume2Icon:O9,VolumeIcon:N9,VolumeX:U9,VolumeXIcon:U9,Vote:_9,VoteIcon:_9,Wallet:G9,Wallet2:Z9,Wallet2Icon:Z9,WalletCards:W9,WalletCardsIcon:W9,WalletIcon:G9,Wallpaper:K9,WallpaperIcon:K9,Wand:X9,Wand2:$9,Wand2Icon:$9,WandIcon:X9,Warehouse:Q9,WarehouseIcon:Q9,WashingMachine:Y9,WashingMachineIcon:Y9,Watch:J9,WatchIcon:J9,Waves:ex,WavesIcon:ex,Waypoints:tx,WaypointsIcon:tx,Webcam:nx,WebcamIcon:nx,Webhook:ix,WebhookIcon:ix,WebhookOff:ax,WebhookOffIcon:ax,Weight:rx,WeightIcon:rx,Wheat:cx,WheatIcon:cx,WheatOff:ox,WheatOffIcon:ox,WholeWord:sx,WholeWordIcon:sx,Wifi:dx,WifiIcon:dx,WifiOff:lx,WifiOffIcon:lx,Wind:hx,WindIcon:hx,Wine:yx,WineIcon:yx,WineOff:ux,WineOffIcon:ux,Workflow:px,WorkflowIcon:px,WrapText:kx,WrapTextIcon:kx,Wrench:fx,WrenchIcon:fx,X:da,XCircle:mx,XCircleIcon:mx,XIcon:da,XOctagon:vx,XOctagonIcon:vx,XSquare:gx,XSquareIcon:gx,Youtube:Mx,YoutubeIcon:Mx,Zap:wx,ZapIcon:wx,ZapOff:xx,ZapOffIcon:xx,ZoomIn:Lx,ZoomInIcon:Lx,ZoomOut:Cx,ZoomOutIcon:Cx,createLucideIcon:i,icons:MB},Symbol.toStringTag,{value:"Module"})),wB=({content:e})=>{const[t,n]=P.useState(!1),a=()=>{window.scrollTo({top:window.innerHeight*.85,behavior:"smooth"})},r=()=>{n(!0),setTimeout(()=>n(!1),5e3)},o=c=>c.split(`
`).map((s,l)=>v.jsxs(SC.Fragment,{children:[s,v.jsx("br",{})]},l));return v.jsxs("section",{className:"min-h-screen relative bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden",children:[v.jsx("div",{className:"absolute inset-0 opacity-5",children:v.jsx("div",{className:"grid grid-cols-12 gap-4 h-full",children:Array.from({length:48}).map((c,s)=>v.jsx("div",{className:"border border-gray-400"},s))})}),v.jsx("div",{className:"container mx-auto px-4 relative z-10",children:v.jsxs(J.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-center",children:[v.jsx("h1",{className:"text-5xl md:text-7xl font-bold text-white mb-6",children:v.jsx("span",{onClick:r,className:"cursor-default hover:text-blue-400 transition-colors",children:e.personal.name})}),v.jsx(gw,{children:t&&v.jsxs(J.p,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"text-blue-400 italic my-2 text-lg",children:['"',e.personal.easterEgg,'"']})}),v.jsx("h2",{className:"text-xl md:text-2xl text-blue-400 mb-8",children:e.personal.title}),v.jsx("div",{className:"flex flex-wrap justify-center gap-4 md:gap-8 mb-12 px-4",children:e.personal.expertise.map(c=>{const s=xB[c.icon];return v.jsxs(J.div,{whileHover:{scale:1.05},className:"flex flex-col items-center w-[80px] md:w-auto",children:[v.jsx(s,{className:"w-8 h-8 md:w-12 md:h-12 text-blue-400 mb-2"}),v.jsx("span",{className:"text-gray-300 text-sm md:text-base text-center",children:c.name})]},c.name)})}),v.jsx("p",{className:"text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed text-justify px-4",children:o(e.personal.summary)})]})}),v.jsx(J.div,{animate:{y:[0,10,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},whileHover:{scale:1.1},whileTap:{scale:.9},onClick:a,className:"absolute bottom-8 inset-x-0 mx-auto w-fit cursor-pointer hover:text-blue-300 transition-colors",children:v.jsx(ii,{className:"w-8 h-8 text-blue-400"})})]})};var MC=new Map,pr=new WeakMap,LA=0,LB=void 0;function CB(e){return e?(pr.has(e)||(LA+=1,pr.set(e,LA.toString())),pr.get(e)):"0"}function SB(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?CB(e.root):e[t]}`).toString()}function IB(e){const t=SB(e);let n=MC.get(t);if(!n){const a=new Map;let r;const o=new IntersectionObserver(c=>{c.forEach(s=>{var l;const d=s.isIntersecting&&r.some(h=>s.intersectionRatio>=h);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=d),(l=a.get(s.target))==null||l.forEach(h=>{h(d,s)})})},e);r=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:a},MC.set(t,n)}return n}function PB(e,t,n={},a=LB){if(typeof window.IntersectionObserver>"u"&&a!==void 0){const l=e.getBoundingClientRect();return t(a,{isIntersecting:a,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:r,observer:o,elements:c}=IB(n),s=c.get(e)||[];return c.has(e)||c.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(c.delete(e),o.unobserve(e)),c.size===0&&(o.disconnect(),MC.delete(r))}}function AB({threshold:e,delay:t,trackVisibility:n,rootMargin:a,root:r,triggerOnce:o,skip:c,initialInView:s,fallbackInView:l,onChange:d}={}){var h;const[u,y]=P.useState(null),m=P.useRef(d),[g,M]=P.useState({inView:!!s,entry:void 0});m.current=d,P.useEffect(()=>{if(c||!u)return;let f;return f=PB(u,(x,w)=>{M({inView:x,entry:w}),m.current&&m.current(x,w),w.isIntersecting&&o&&f&&(f(),f=void 0)},{root:r,rootMargin:a,threshold:e,trackVisibility:n,delay:t},l),()=>{f&&f()}},[Array.isArray(e)?e.toString():e,u,r,a,o,c,n,l,t]);const L=(h=g.entry)==null?void 0:h.target,k=P.useRef(void 0);!u&&L&&!o&&!c&&k.current!==L&&(k.current=L,M({inView:!!s,entry:void 0}));const p=[y,g.inView,g.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}const bB=({project:e,isOpen:t,onClose:n,content:a})=>{var h;const[r,o]=P.useState(0),c=()=>{o(u=>u>0?u-1:u)},s=()=>{o(u=>u<e.architecture.url.length-1?u+1:u)};if(P.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]),!t||!e)return null;const l=u=>u.split(`
`).map((y,m)=>v.jsxs(SC.Fragment,{children:[y,v.jsx("br",{})]},m)),d=u=>u.endsWith(".png");return v.jsx(gw,{children:v.jsx(J.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black bg-opacity-75 z-50 flex items-start justify-center overflow-hidden",onClick:n,children:v.jsxs(J.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-gray-800 rounded-lg w-full max-w-4xl my-12 mx-4 flex flex-col max-h-[90vh] relative",onClick:u=>u.stopPropagation(),children:[v.jsxs("div",{className:"sticky top-0 bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center z-10",children:[v.jsx("h2",{className:"text-xl md:text-2xl font-bold text-white",children:e.title}),v.jsx("button",{onClick:n,className:"text-gray-400 hover:text-white transition-colors","aria-label":"Close modal",children:v.jsx(da,{className:"w-6 h-6"})})]}),v.jsxs("div",{className:"p-4 md:p-6 space-y-8 overflow-y-auto",children:[e.video&&v.jsx("div",{className:"aspect-video",children:v.jsx("iframe",{src:e.video,title:`${e.title} video`,className:"w-full h-full rounded-lg",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),v.jsxs("div",{children:[v.jsx("h3",{className:"text-2xl font-semibold text-white mb-4",children:a.sections.overview}),v.jsx("p",{className:"text-gray-300 text-justify leading-relaxed text-lg",children:l(e.detailedOverview)})]}),((h=e.architecture)==null?void 0:h.url)&&v.jsxs("div",{children:[v.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:a.sections.architecture}),v.jsx("div",{className:"image-container relative",children:Array.isArray(e.architecture.url)?v.jsxs(v.Fragment,{children:[v.jsx("div",{className:`image-wrapper ${d(e.architecture.url[r])?"bg-white":""}`,children:v.jsx("img",{src:e.architecture.url[r],alt:e.architecture.description,className:"w-full rounded-lg"})}),r>0&&v.jsx("button",{className:"absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full",onClick:c,children:v.jsx(ri,{className:"w-6 h-6"})}),r<e.architecture.url.length-1&&v.jsx("button",{className:"absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full",onClick:s,children:v.jsx(oi,{className:"w-6 h-6"})})]}):v.jsx("div",{className:`image-wrapper ${d(e.architecture.url)?"bg-white":""}`,children:v.jsx("img",{src:e.architecture.url,alt:e.architecture.description,className:"w-full rounded-lg"})})}),e.architecture.description&&v.jsx("p",{className:"text-sm text-gray-400 mt-2",children:e.architecture.description})]}),v.jsxs("div",{children:[v.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:a.sections.technologies}),v.jsx("div",{className:"flex flex-wrap gap-2",children:e.tech.map((u,y)=>v.jsx("span",{className:"px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm",children:u},y))})]})]})]})})})},zB=e=>({bot:v.jsx(kt,{className:"w-8 h-8 text-white"}),rocket:v.jsx(ca,{className:"w-8 h-8 text-white"}),"graduation-cap":v.jsx(ra,{className:"w-8 h-8 text-white"}),award:v.jsx(aa,{className:"w-8 h-8 text-white"}),newspaper:v.jsx(oa,{className:"w-8 h-8 text-white"}),tv:v.jsx(la,{className:"w-8 h-8 text-white"}),trophy:v.jsx(sa,{className:"w-8 h-8 text-white"}),binary:v.jsx(ia,{className:"w-8 h-8 text-white"}),briefcase:v.jsx(kt,{className:"w-8 h-8 text-white"}),send:v.jsx(hi,{className:"w-8 h-8 text-white"})})[e.toLowerCase()]||v.jsx(kt,{className:"w-8 h-8 text-white"}),jB=e=>e.includes("youtube.com/embed/"),VB=({src:e,title:t})=>jB(e)?v.jsxs("div",{className:"relative w-full pt-[56.25%]",children:[" ",v.jsx("iframe",{src:e,title:t,className:"absolute top-0 left-0 w-full h-full rounded-lg",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}):v.jsx("img",{src:e,alt:t,className:"w-full rounded-lg"}),qB=({milestone:e,isOpen:t,onClose:n})=>(P.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]),!t||!e?null:v.jsx(gw,{children:v.jsx(J.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black bg-opacity-75 z-50 flex items-start justify-center overflow-y-auto",onClick:n,children:v.jsxs(J.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-gray-800 rounded-lg w-full max-w-2xl my-12 mx-4 relative",onClick:a=>a.stopPropagation(),children:[v.jsxs("div",{className:"p-4 border-b border-gray-700 flex justify-between items-center",children:[v.jsx("h2",{className:"text-xl font-bold text-white",children:e.year}),v.jsx("button",{onClick:n,className:"text-gray-400 hover:text-white transition-colors","aria-label":"Close modal",children:v.jsx(da,{className:"w-6 h-6"})})]}),v.jsxs("div",{className:"p-6 space-y-4",children:[v.jsxs("div",{className:"flex items-center space-x-4 mb-4",children:[v.jsx("div",{className:"bg-blue-900 p-3 rounded-full flex items-center justify-center",children:zB(e.icon)}),v.jsx("h3",{className:"text-lg font-semibold text-white",children:e.title})]}),(e.image||e.video)&&v.jsx(VB,{src:e.video||e.image,title:e.title}),v.jsx("p",{className:"text-gray-300 text-justify",children:e.description})]})]})})})),TB=e=>({bot:v.jsx(kt,{className:"w-6 h-6 text-white"}),rocket:v.jsx(ca,{className:"w-6 h-6 text-white"}),"graduation-cap":v.jsx(ra,{className:"w-6 h-6 text-white"}),award:v.jsx(aa,{className:"w-6 h-6 text-white"}),newspaper:v.jsx(oa,{className:"w-6 h-6 text-white"}),tv:v.jsx(la,{className:"w-6 h-6 text-white"}),trophy:v.jsx(sa,{className:"w-6 h-6 text-white"}),binary:v.jsx(ia,{className:"w-6 h-6 text-white"})})[e]||v.jsx(kt,{className:"w-6 h-6 text-white"}),HB=({item:e,index:t,onProjectClick:n,onMilestoneClick:a})=>{const[r,o]=AB({triggerOnce:!0,threshold:.2});if(e.type==="milestone")return v.jsx(J.div,{ref:r,initial:{opacity:0,x:t%2===0?-50:50},animate:o?{opacity:1,x:0}:{},transition:{duration:.8},className:`flex md:flex-row flex-col ${t%2===0?"":"md:flex-row-reverse"} mb-8 relative`,children:v.jsx("div",{className:"md:w-1/2 w-full px-4",children:v.jsx(J.div,{whileHover:{scale:1.02},className:"bg-gray-800 rounded-lg overflow-hidden shadow-xl cursor-pointer p-4",onClick:()=>a(e),children:v.jsxs("div",{className:"flex items-center space-x-3",children:[v.jsx("div",{className:"bg-blue-900 p-2 rounded-full flex items-center justify-center",children:TB(e.icon)}),v.jsxs("div",{children:[v.jsx("h3",{className:"text-xl font-bold text-white",children:e.title}),v.jsx("p",{className:"text-blue-400",children:e.year})]})]})})})});const c=s=>s.split(`
`).map((l,d)=>v.jsxs(SC.Fragment,{children:[l,v.jsx("br",{})]},d));return v.jsxs(J.div,{ref:r,initial:{opacity:0,x:t%2===0?-50:50},animate:o?{opacity:1,x:0}:{},transition:{duration:.8},className:`flex md:flex-row flex-col ${t%2===0?"":"md:flex-row-reverse"} mb-8 relative`,children:[v.jsx(J.div,{initial:{opacity:0,x:t%2===0?"100%":"-100%"},animate:o?{opacity:1,x:0}:{},transition:{duration:.8,delay:.2,type:"spring",stiffness:100},className:`absolute md:top-1/2 top-[10px] transform ${t%2===0?"right-[calc(42%+1rem)] md:translate-x-1/2 md:-translate-y-1/2":"left-[calc(42%+1rem)] md:-translate-x-1/2 md:-translate-y-1/2"} bg-gray-900 px-4 py-2 rounded-full z-10`,children:v.jsx("span",{className:"text-blue-400 font-bold whitespace-nowrap",children:e.year})}),v.jsx("div",{className:"md:w-1/2 w-full px-4",children:v.jsxs(J.div,{whileHover:{scale:1.02},className:"bg-gray-800 rounded-lg overflow-hidden shadow-xl cursor-pointer",onClick:()=>n(e),children:[v.jsx("img",{src:e.image,alt:e.title,className:"w-full h-48 object-cover",loading:"lazy"}),v.jsxs("div",{className:"p-6",children:[v.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:e.title}),v.jsx("p",{className:"text-gray-300 mb-4 text-justify",children:c(e.description)}),v.jsx("div",{className:"flex flex-wrap gap-2",children:e.tech.map((s,l)=>v.jsx("span",{className:"px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm",children:s},l))})]})]})})]})},DB=({content:e})=>{const[t,n]=P.useState(null),[a,r]=P.useState(null),o=(e==null?void 0:e.timeline)||(e==null?void 0:e.projects)||[];return v.jsxs("section",{className:"py-20 bg-gray-900",children:[v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx("h2",{className:"text-4xl font-bold text-white text-center mb-16",children:e.sections.projectTimeline}),v.jsxs("div",{className:"relative",children:[v.jsx("div",{className:"absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-900 z-0"}),v.jsxs("div",{className:"relative z-10",children:[" ",o.map((c,s)=>v.jsx(HB,{item:c,index:s,onProjectClick:n,onMilestoneClick:r},c.id))]})]})]}),v.jsx(bB,{project:t,isOpen:!!t,onClose:()=>n(null),content:e}),v.jsx(qB,{milestone:a,isOpen:!!a,onClose:()=>r(null)})]})};class Ni{constructor(t=0,n="Network Error"){this.status=t,this.text=n}}const FB=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},de={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:FB()},XS=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},RB=(e,t="https://api.emailjs.com")=>{if(!e)return;const n=XS(e);de.publicKey=n.publicKey,de.blockHeadless=n.blockHeadless,de.storageProvider=n.storageProvider,de.blockList=n.blockList,de.limitRate=n.limitRate,de.origin=n.origin||t},uV=async(e,t,n={})=>{const a=await fetch(de.origin+e,{method:"POST",headers:n,body:t}),r=await a.text(),o=new Ni(a.status,r);if(a.ok)return o;throw o},yV=(e,t,n)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},BB=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},pV=e=>e.webdriver||!e.languages||e.languages.length===0,kV=()=>new Ni(451,"Unavailable For Headless Browser"),EB=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},OB=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},UB=(e,t)=>e instanceof FormData?e.get(t):e[t],fV=(e,t)=>{if(OB(e))return!1;EB(e.list,e.watchVariable);const n=UB(t,e.watchVariable);return typeof n!="string"?!1:e.list.includes(n)},mV=()=>new Ni(403,"Forbidden"),NB=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},_B=async(e,t,n)=>{const a=Number(await n.get(e)||0);return t-Date.now()+a},vV=async(e,t,n)=>{if(!t.throttle||!n)return!1;NB(t.throttle,t.id);const a=t.id||e;return await _B(a,t.throttle,n)>0?!0:(await n.set(a,Date.now().toString()),!1)},gV=()=>new Ni(429,"Too Many Requests"),ZB=async(e,t,n,a)=>{const r=XS(a),o=r.publicKey||de.publicKey,c=r.blockHeadless||de.blockHeadless,s=r.storageProvider||de.storageProvider,l={...de.blockList,...r.blockList},d={...de.limitRate,...r.limitRate};return c&&pV(navigator)?Promise.reject(kV()):(yV(o,e,t),BB(n),n&&fV(l,n)?Promise.reject(mV()):await vV(location.pathname,d,s)?Promise.reject(gV()):uV("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:o,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"}))},WB=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},GB=e=>typeof e=="string"?document.querySelector(e):e,KB=async(e,t,n,a)=>{const r=XS(a),o=r.publicKey||de.publicKey,c=r.blockHeadless||de.blockHeadless,s=de.storageProvider||r.storageProvider,l={...de.blockList,...r.blockList},d={...de.limitRate,...r.limitRate};if(c&&pV(navigator))return Promise.reject(kV());const h=GB(n);yV(o,e,t),WB(h);const u=new FormData(h);return fV(l,u)?Promise.reject(mV()):await vV(location.pathname,d,s)?Promise.reject(gV()):(u.append("lib_version","4.4.1"),u.append("service_id",e),u.append("template_id",t),u.append("user_id",o),uV("/api/v1.0/email/send-form",u))},$B={init:RB,send:ZB,sendForm:KB,EmailJSResponseStatus:Ni},XB=({content:e})=>{const t=P.useRef(null),[n,a]=P.useState({from_name:"",from_email:"",message:""}),[r,o]=P.useState({type:null,message:""}),[c,s]=P.useState(!1),l=async h=>{h.preventDefault(),s(!0),o({type:null,message:""});try{(await $B.sendForm("service_1gzobdz","template_dli8jka",t.current,"Lf-vhr43aOcdKMx15")).text==="OK"&&(o({type:"success",message:e.contact.success}),a({from_name:"",from_email:"",message:""}))}catch{o({type:"error",message:e.contact.error})}finally{s(!1)}},d=h=>{a(u=>({...u,[h.target.name]:h.target.value}))};return v.jsx("section",{className:"py-20 bg-gray-800",children:v.jsx("div",{className:"container mx-auto px-4",children:v.jsxs(J.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.8},className:"max-w-4xl mx-auto",children:[v.jsx("h2",{className:"text-4xl font-bold text-white text-center mb-16",children:e.sections.getInTouch}),v.jsxs("div",{className:"grid md:grid-cols-2 gap-12",children:[v.jsxs("div",{children:[v.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:e.sections.getInTouch}),v.jsxs("div",{className:"space-y-6",children:[v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsx(li,{className:"w-6 h-6 text-blue-400"}),v.jsx("a",{href:`mailto:${e.personal.contact.email}`,className:"text-gray-300 hover:text-blue-400",children:e.personal.contact.email})]}),v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsx(ci,{className:"w-6 h-6 text-blue-400"}),v.jsx("a",{href:`https://${e.personal.contact.github}`,target:"_blank",rel:"noopener noreferrer",className:"text-gray-300 hover:text-blue-400",children:e.personal.contact.github})]}),v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsx(si,{className:"w-6 h-6 text-blue-400"}),v.jsx("a",{href:`https://${e.personal.contact.linkedin}`,target:"_blank",rel:"noopener noreferrer",className:"text-gray-300 hover:text-blue-400",children:e.personal.contact.linkedin})]})]})]}),v.jsx("div",{children:v.jsxs("form",{ref:t,onSubmit:l,className:"space-y-6",children:[r.type&&v.jsxs(J.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:`p-4 rounded-lg flex items-center space-x-2 ${r.type==="success"?"bg-green-900/50 text-green-200":"bg-red-900/50 text-red-200"}`,children:[r.type==="success"?v.jsx(ai,{className:"w-5 h-5 flex-shrink-0"}):v.jsx(ni,{className:"w-5 h-5 flex-shrink-0"}),v.jsx("span",{children:r.message})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"from_name",className:"block text-gray-300 mb-2",children:e.contact.name}),v.jsx("input",{type:"text",id:"from_name",name:"from_name",value:n.from_name,onChange:d,required:!0,className:"w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400"})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"from_email",className:"block text-gray-300 mb-2",children:e.contact.email}),v.jsx("input",{type:"email",id:"from_email",name:"from_email",value:n.from_email,onChange:d,required:!0,className:"w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400"})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"message",className:"block text-gray-300 mb-2",children:e.contact.message}),v.jsx("textarea",{id:"message",name:"message",value:n.message,onChange:d,required:!0,rows:4,className:"w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400"})]}),v.jsx("input",{type:"hidden",name:"to_email",value:e.personal.contact.email}),v.jsxs(J.button,{whileHover:{scale:1.02},whileTap:{scale:.98},type:"submit",disabled:c,className:`w-full py-3 bg-blue-600 text-white rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${c?"opacity-75 cursor-not-allowed":"hover:bg-blue-700"}`,children:[v.jsx(di,{className:"w-5 h-5"}),v.jsx("span",{children:c?e.contact.sending:e.contact.sendMessage})]})]})})]})]})})})},CA=[{code:"en",name:"English",flag:"https://flagcdn.com/w40/gb.png"},{code:"da",name:"Dansk",flag:"https://flagcdn.com/w40/dk.png"},{code:"de",name:"Deutsch",flag:"https://flagcdn.com/w40/de.png"},{code:"sv",name:"Svenska",flag:"https://flagcdn.com/w40/se.png"}],QB=({currentLanguage:e,onLanguageChange:t})=>{const[n,a]=P.useState(!1),r=CA.find(o=>o.code===e);return v.jsx("div",{className:"fixed top-4 right-4 z-50",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:v.jsxs(J.div,{className:"relative",initial:!1,animate:n?"open":"closed",children:[v.jsxs(J.button,{className:"relative px-2 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors",whileHover:{scale:1.05},whileTap:{scale:.95},children:[v.jsx("img",{src:r.flag,alt:`${r.name} flag`,className:"w-6 h-4 object-cover rounded",loading:"lazy"}),v.jsx("span",{className:"absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",children:r.name})]}),v.jsx(gw,{children:n&&v.jsx(J.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"absolute top-full right-0 mt-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden",children:CA.filter(o=>o.code!==e).map(o=>v.jsxs(J.button,{onClick:()=>{t(o.code),a(!1)},className:"relative group w-full px-2 py-1 hover:bg-gray-700 transition-colors flex items-center justify-center",whileHover:{scale:1.05},whileTap:{scale:.95},children:[v.jsx("img",{src:o.flag,alt:`${o.name} flag`,className:"w-6 h-4 object-cover rounded",loading:"lazy"}),v.jsx("span",{className:"absolute -right-24 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",children:o.name})]},o.code))})})]})})},YB=({content:e})=>v.jsx(J.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:1,delay:.5},className:"w-full bg-gradient-to-r from-gray-900 to-gray-800 py-16",children:v.jsx("div",{className:"container mx-auto px-4",children:v.jsx("blockquote",{className:"text-center",children:v.jsxs("p",{className:"font-serif text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto",children:["“",e.personal.quote,"”"]})})})});function JB(){const[e,t]=P.useState("en"),[n,a]=P.useState(null);return P.useEffect(()=>{(async()=>{try{const o=await fetch("/content/translation_lookup.json");if(!o.ok)throw new Error(`Failed to fetch translation lookup: ${o.status}`);const s=(await o.json()).languages[e],l=await fetch(`/content/${s}`);if(!l.ok)throw new Error(`Failed to fetch content: ${l.status}`);const d=await l.json();a(d)}catch(o){console.error("Error loading content:",o)}})()},[e]),n?v.jsxs("div",{className:"bg-gray-900",children:[v.jsx(QB,{currentLanguage:e,onLanguageChange:t}),v.jsx(YB,{content:n}),v.jsx(wB,{content:n}),v.jsx(DB,{content:n}),v.jsx(XB,{content:n})]}):v.jsx("div",{className:"min-h-screen bg-gray-900 flex items-center justify-center",children:v.jsx("div",{className:"text-white text-xl",children:"Loading..."})})}Fz(document.getElementById("root")).render(v.jsx(P.StrictMode,{children:v.jsx(JB,{})}));
