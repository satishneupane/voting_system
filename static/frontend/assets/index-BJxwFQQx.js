(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function u(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(d){if(d.ep)return;d.ep=!0;const f=u(d);fetch(d.href,f)}})();function Og(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Fc={exports:{}},Ur={};var _m;function Eg(){if(_m)return Ur;_m=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(c,d,f){var h=null;if(f!==void 0&&(h=""+f),d.key!==void 0&&(h=""+d.key),"key"in d){f={};for(var g in d)g!=="key"&&(f[g]=d[g])}else f=d;return d=f.ref,{$$typeof:l,type:c,key:h,ref:d!==void 0?d:null,props:f}}return Ur.Fragment=o,Ur.jsx=u,Ur.jsxs=u,Ur}var wm;function zg(){return wm||(wm=1,Fc.exports=Eg()),Fc.exports}var E=zg(),Pc={exports:{}},ge={};var Dm;function Ag(){if(Dm)return ge;Dm=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),H=Symbol.iterator;function V(S){return S===null||typeof S!="object"?null:(S=H&&S[H]||S["@@iterator"],typeof S=="function"?S:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,Y={};function F(S,B,Z){this.props=S,this.context=B,this.refs=Y,this.updater=Z||X}F.prototype.isReactComponent={},F.prototype.setState=function(S,B){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,B,"setState")},F.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function N(){}N.prototype=F.prototype;function $(S,B,Z){this.props=S,this.context=B,this.refs=Y,this.updater=Z||X}var fe=$.prototype=new N;fe.constructor=$,A(fe,F.prototype),fe.isPureReactComponent=!0;var ee=Array.isArray;function pe(){}var ne={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function be(S,B,Z){var W=Z.ref;return{$$typeof:l,type:S,key:B,ref:W!==void 0?W:null,props:Z}}function Ve(S,B){return be(S.type,B,S.props)}function mt(S){return typeof S=="object"&&S!==null&&S.$$typeof===l}function ce(S){var B={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(Z){return B[Z]})}var xe=/\/+/g;function ke(S,B){return typeof S=="object"&&S!==null&&S.key!=null?ce(""+S.key):B.toString(36)}function De(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(pe,pe):(S.status="pending",S.then(function(B){S.status==="pending"&&(S.status="fulfilled",S.value=B)},function(B){S.status==="pending"&&(S.status="rejected",S.reason=B)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function C(S,B,Z,W,me){var ve=typeof S;(ve==="undefined"||ve==="boolean")&&(S=null);var de=!1;if(S===null)de=!0;else switch(ve){case"bigint":case"string":case"number":de=!0;break;case"object":switch(S.$$typeof){case l:case o:de=!0;break;case T:return de=S._init,C(de(S._payload),B,Z,W,me)}}if(de)return me=me(S),de=W===""?"."+ke(S,0):W,ee(me)?(Z="",de!=null&&(Z=de.replace(xe,"$&/")+"/"),C(me,B,Z,"",function(wt){return wt})):me!=null&&(mt(me)&&(me=Ve(me,Z+(me.key==null||S&&S.key===me.key?"":(""+me.key).replace(xe,"$&/")+"/")+de)),B.push(me)),1;de=0;var Ie=W===""?".":W+":";if(ee(S))for(var qe=0;qe<S.length;qe++)W=S[qe],ve=Ie+ke(W,qe),de+=C(W,B,Z,ve,me);else if(qe=V(S),typeof qe=="function")for(S=qe.call(S),qe=0;!(W=S.next()).done;)W=W.value,ve=Ie+ke(W,qe++),de+=C(W,B,Z,ve,me);else if(ve==="object"){if(typeof S.then=="function")return C(De(S),B,Z,W,me);throw B=String(S),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return de}function Q(S,B,Z){if(S==null)return S;var W=[],me=0;return C(S,W,"","",function(ve){return B.call(Z,ve,me++)}),W}function G(S){if(S._status===-1){var B=S._result;B=B(),B.then(function(Z){(S._status===0||S._status===-1)&&(S._status=1,S._result=Z)},function(Z){(S._status===0||S._status===-1)&&(S._status=2,S._result=Z)}),S._status===-1&&(S._status=0,S._result=B)}if(S._status===1)return S._result.default;throw S._result}var Ee=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},Te={map:Q,forEach:function(S,B,Z){Q(S,function(){B.apply(this,arguments)},Z)},count:function(S){var B=0;return Q(S,function(){B++}),B},toArray:function(S){return Q(S,function(B){return B})||[]},only:function(S){if(!mt(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return ge.Activity=O,ge.Children=Te,ge.Component=F,ge.Fragment=u,ge.Profiler=d,ge.PureComponent=$,ge.StrictMode=c,ge.Suspense=p,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ne,ge.__COMPILER_RUNTIME={__proto__:null,c:function(S){return ne.H.useMemoCache(S)}},ge.cache=function(S){return function(){return S.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(S,B,Z){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var W=A({},S.props),me=S.key;if(B!=null)for(ve in B.key!==void 0&&(me=""+B.key),B)!I.call(B,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&B.ref===void 0||(W[ve]=B[ve]);var ve=arguments.length-2;if(ve===1)W.children=Z;else if(1<ve){for(var de=Array(ve),Ie=0;Ie<ve;Ie++)de[Ie]=arguments[Ie+2];W.children=de}return be(S.type,me,W)},ge.createContext=function(S){return S={$$typeof:h,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:f,_context:S},S},ge.createElement=function(S,B,Z){var W,me={},ve=null;if(B!=null)for(W in B.key!==void 0&&(ve=""+B.key),B)I.call(B,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(me[W]=B[W]);var de=arguments.length-2;if(de===1)me.children=Z;else if(1<de){for(var Ie=Array(de),qe=0;qe<de;qe++)Ie[qe]=arguments[qe+2];me.children=Ie}if(S&&S.defaultProps)for(W in de=S.defaultProps,de)me[W]===void 0&&(me[W]=de[W]);return be(S,ve,me)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(S){return{$$typeof:g,render:S}},ge.isValidElement=mt,ge.lazy=function(S){return{$$typeof:T,_payload:{_status:-1,_result:S},_init:G}},ge.memo=function(S,B){return{$$typeof:b,type:S,compare:B===void 0?null:B}},ge.startTransition=function(S){var B=ne.T,Z={};ne.T=Z;try{var W=S(),me=ne.S;me!==null&&me(Z,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(pe,Ee)}catch(ve){Ee(ve)}finally{B!==null&&Z.types!==null&&(B.types=Z.types),ne.T=B}},ge.unstable_useCacheRefresh=function(){return ne.H.useCacheRefresh()},ge.use=function(S){return ne.H.use(S)},ge.useActionState=function(S,B,Z){return ne.H.useActionState(S,B,Z)},ge.useCallback=function(S,B){return ne.H.useCallback(S,B)},ge.useContext=function(S){return ne.H.useContext(S)},ge.useDebugValue=function(){},ge.useDeferredValue=function(S,B){return ne.H.useDeferredValue(S,B)},ge.useEffect=function(S,B){return ne.H.useEffect(S,B)},ge.useEffectEvent=function(S){return ne.H.useEffectEvent(S)},ge.useId=function(){return ne.H.useId()},ge.useImperativeHandle=function(S,B,Z){return ne.H.useImperativeHandle(S,B,Z)},ge.useInsertionEffect=function(S,B){return ne.H.useInsertionEffect(S,B)},ge.useLayoutEffect=function(S,B){return ne.H.useLayoutEffect(S,B)},ge.useMemo=function(S,B){return ne.H.useMemo(S,B)},ge.useOptimistic=function(S,B){return ne.H.useOptimistic(S,B)},ge.useReducer=function(S,B,Z){return ne.H.useReducer(S,B,Z)},ge.useRef=function(S){return ne.H.useRef(S)},ge.useState=function(S){return ne.H.useState(S)},ge.useSyncExternalStore=function(S,B,Z){return ne.H.useSyncExternalStore(S,B,Z)},ge.useTransition=function(){return ne.H.useTransition()},ge.version="19.2.3",ge}var Mm;function ms(){return Mm||(Mm=1,Pc.exports=Ag()),Pc.exports}var R=ms();const He=Og(R);var $c={exports:{}},Hr={},Wc={exports:{}},Ic={};var Cm;function Tg(){return Cm||(Cm=1,(function(l){function o(C,Q){var G=C.length;C.push(Q);e:for(;0<G;){var Ee=G-1>>>1,Te=C[Ee];if(0<d(Te,Q))C[Ee]=Q,C[G]=Te,G=Ee;else break e}}function u(C){return C.length===0?null:C[0]}function c(C){if(C.length===0)return null;var Q=C[0],G=C.pop();if(G!==Q){C[0]=G;e:for(var Ee=0,Te=C.length,S=Te>>>1;Ee<S;){var B=2*(Ee+1)-1,Z=C[B],W=B+1,me=C[W];if(0>d(Z,G))W<Te&&0>d(me,Z)?(C[Ee]=me,C[W]=G,Ee=W):(C[Ee]=Z,C[B]=G,Ee=B);else if(W<Te&&0>d(me,G))C[Ee]=me,C[W]=G,Ee=W;else break e}}return Q}function d(C,Q){var G=C.sortIndex-Q.sortIndex;return G!==0?G:C.id-Q.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var h=Date,g=h.now();l.unstable_now=function(){return h.now()-g}}var p=[],b=[],T=1,O=null,H=3,V=!1,X=!1,A=!1,Y=!1,F=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function fe(C){for(var Q=u(b);Q!==null;){if(Q.callback===null)c(b);else if(Q.startTime<=C)c(b),Q.sortIndex=Q.expirationTime,o(p,Q);else break;Q=u(b)}}function ee(C){if(A=!1,fe(C),!X)if(u(p)!==null)X=!0,pe||(pe=!0,ce());else{var Q=u(b);Q!==null&&De(ee,Q.startTime-C)}}var pe=!1,ne=-1,I=5,be=-1;function Ve(){return Y?!0:!(l.unstable_now()-be<I)}function mt(){if(Y=!1,pe){var C=l.unstable_now();be=C;var Q=!0;try{e:{X=!1,A&&(A=!1,N(ne),ne=-1),V=!0;var G=H;try{t:{for(fe(C),O=u(p);O!==null&&!(O.expirationTime>C&&Ve());){var Ee=O.callback;if(typeof Ee=="function"){O.callback=null,H=O.priorityLevel;var Te=Ee(O.expirationTime<=C);if(C=l.unstable_now(),typeof Te=="function"){O.callback=Te,fe(C),Q=!0;break t}O===u(p)&&c(p),fe(C)}else c(p);O=u(p)}if(O!==null)Q=!0;else{var S=u(b);S!==null&&De(ee,S.startTime-C),Q=!1}}break e}finally{O=null,H=G,V=!1}Q=void 0}}finally{Q?ce():pe=!1}}}var ce;if(typeof $=="function")ce=function(){$(mt)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,ke=xe.port2;xe.port1.onmessage=mt,ce=function(){ke.postMessage(null)}}else ce=function(){F(mt,0)};function De(C,Q){ne=F(function(){C(l.unstable_now())},Q)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(C){C.callback=null},l.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<C?Math.floor(1e3/C):5},l.unstable_getCurrentPriorityLevel=function(){return H},l.unstable_next=function(C){switch(H){case 1:case 2:case 3:var Q=3;break;default:Q=H}var G=H;H=Q;try{return C()}finally{H=G}},l.unstable_requestPaint=function(){Y=!0},l.unstable_runWithPriority=function(C,Q){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var G=H;H=C;try{return Q()}finally{H=G}},l.unstable_scheduleCallback=function(C,Q,G){var Ee=l.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?Ee+G:Ee):G=Ee,C){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=G+Te,C={id:T++,callback:Q,priorityLevel:C,startTime:G,expirationTime:Te,sortIndex:-1},G>Ee?(C.sortIndex=G,o(b,C),u(p)===null&&C===u(b)&&(A?(N(ne),ne=-1):A=!0,De(ee,G-Ee))):(C.sortIndex=Te,o(p,C),X||V||(X=!0,pe||(pe=!0,ce()))),C},l.unstable_shouldYield=Ve,l.unstable_wrapCallback=function(C){var Q=H;return function(){var G=H;H=Q;try{return C.apply(this,arguments)}finally{H=G}}}})(Ic)),Ic}var km;function _g(){return km||(km=1,Wc.exports=Tg()),Wc.exports}var es={exports:{}},zt={};var Rm;function wg(){if(Rm)return zt;Rm=1;var l=ms();function o(p){var b="https://react.dev/errors/"+p;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)b+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+p+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(p,b,T){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:O==null?null:""+O,children:p,containerInfo:b,implementation:T}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,b){if(p==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,zt.createPortal=function(p,b){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(o(299));return f(p,b,null,T)},zt.flushSync=function(p){var b=h.T,T=c.p;try{if(h.T=null,c.p=2,p)return p()}finally{h.T=b,c.p=T,c.d.f()}},zt.preconnect=function(p,b){typeof p=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,c.d.C(p,b))},zt.prefetchDNS=function(p){typeof p=="string"&&c.d.D(p)},zt.preinit=function(p,b){if(typeof p=="string"&&b&&typeof b.as=="string"){var T=b.as,O=g(T,b.crossOrigin),H=typeof b.integrity=="string"?b.integrity:void 0,V=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;T==="style"?c.d.S(p,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:O,integrity:H,fetchPriority:V}):T==="script"&&c.d.X(p,{crossOrigin:O,integrity:H,fetchPriority:V,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},zt.preinitModule=function(p,b){if(typeof p=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var T=g(b.as,b.crossOrigin);c.d.M(p,{crossOrigin:T,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&c.d.M(p)},zt.preload=function(p,b){if(typeof p=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var T=b.as,O=g(T,b.crossOrigin);c.d.L(p,T,{crossOrigin:O,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},zt.preloadModule=function(p,b){if(typeof p=="string")if(b){var T=g(b.as,b.crossOrigin);c.d.m(p,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:T,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else c.d.m(p)},zt.requestFormReset=function(p){c.d.r(p)},zt.unstable_batchedUpdates=function(p,b){return p(b)},zt.useFormState=function(p,b,T){return h.H.useFormState(p,b,T)},zt.useFormStatus=function(){return h.H.useHostTransitionStatus()},zt.version="19.2.3",zt}var Nm;function Dg(){if(Nm)return es.exports;Nm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),es.exports=wg(),es.exports}var jm;function Mg(){if(jm)return Hr;jm=1;var l=_g(),o=ms(),u=Dg();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(f(e)!==e)throw Error(c(188))}function b(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return p(r),e;if(i===a)return p(r),t;i=i.sibling}throw Error(c(188))}if(n.return!==a.return)n=r,a=i;else{for(var s=!1,m=r.child;m;){if(m===n){s=!0,n=r,a=i;break}if(m===a){s=!0,a=r,n=i;break}m=m.sibling}if(!s){for(m=i.child;m;){if(m===n){s=!0,n=i,a=r;break}if(m===a){s=!0,a=i,n=r;break}m=m.sibling}if(!s)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var O=Object.assign,H=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),$=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),Ve=Symbol.for("react.memo_cache_sentinel"),mt=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=mt&&e[mt]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Symbol.for("react.client.reference");function ke(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case F:return"Profiler";case Y:return"StrictMode";case ee:return"Suspense";case pe:return"SuspenseList";case be:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case X:return"Portal";case $:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case fe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ne:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case I:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}var De=Array.isArray,C=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},Ee=[],Te=-1;function S(e){return{current:e}}function B(e){0>Te||(e.current=Ee[Te],Ee[Te]=null,Te--)}function Z(e,t){Te++,Ee[Te]=e.current,e.current=t}var W=S(null),me=S(null),ve=S(null),de=S(null);function Ie(e,t){switch(Z(ve,t),Z(me,e),Z(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ph(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ph(t),e=$h(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(W),Z(W,e)}function qe(){B(W),B(me),B(ve)}function wt(e){e.memoizedState!==null&&Z(de,e);var t=W.current,n=$h(t,e.type);t!==n&&(Z(me,e),Z(W,n))}function Jt(e){me.current===e&&(B(W),B(me)),de.current===e&&(B(de),kr._currentValue=G)}var vn,Gl;function _n(e){if(vn===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vn=t&&t[1]||"",Gl=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vn+e+Gl}var Ka=!1;function Ja(e,t){if(!e||Ka)return"";Ka=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(k){var M=k}Reflect.construct(e,[],L)}else{try{L.call()}catch(k){M=k}e.call(L.prototype)}}else{try{throw Error()}catch(k){M=k}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(k){if(k&&M&&typeof k.stack=="string")return[k.stack,M.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),s=i[0],m=i[1];if(s&&m){var v=s.split(`
`),w=m.split(`
`);for(r=a=0;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;for(;r<w.length&&!w[r].includes("DetermineComponentFrameRoot");)r++;if(a===v.length||r===w.length)for(a=v.length-1,r=w.length-1;1<=a&&0<=r&&v[a]!==w[r];)r--;for(;1<=a&&0<=r;a--,r--)if(v[a]!==w[r]){if(a!==1||r!==1)do if(a--,r--,0>r||v[a]!==w[r]){var U=`
`+v[a].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=a&&0<=r);break}}}finally{Ka=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?_n(n):""}function jo(e,t){switch(e.tag){case 26:case 27:case 5:return _n(e.type);case 16:return _n("Lazy");case 13:return e.child!==t&&t!==null?_n("Suspense Fallback"):_n("Suspense");case 19:return _n("SuspenseList");case 0:case 15:return Ja(e.type,!1);case 11:return Ja(e.type.render,!1);case 1:return Ja(e.type,!0);case 31:return _n("Activity");default:return""}}function Fr(e){try{var t="",n=null;do t+=jo(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Pr=Object.prototype.hasOwnProperty,Fa=l.unstable_scheduleCallback,y=l.unstable_cancelCallback,D=l.unstable_shouldYield,j=l.unstable_requestPaint,J=l.unstable_now,P=l.unstable_getCurrentPriorityLevel,K=l.unstable_ImmediatePriority,oe=l.unstable_UserBlockingPriority,Ce=l.unstable_NormalPriority,je=l.unstable_LowPriority,pt=l.unstable_IdlePriority,wn=l.log,yn=l.unstable_setDisableYieldValue,Ta=null,vt=null;function Ft(e){if(typeof wn=="function"&&yn(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(Ta,e)}catch{}}var At=Math.clz32?Math.clz32:Wr,$r=Math.log,Uo=Math.LN2;function Wr(e){return e>>>=0,e===0?32:31-($r(e)/Uo|0)|0}var Ir=256,ei=262144,ti=4194304;function _a(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ni(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var m=a&134217727;return m!==0?(a=m&~i,a!==0?r=_a(a):(s&=m,s!==0?r=_a(s):n||(n=m&~e,n!==0&&(r=_a(n))))):(m=a&~i,m!==0?r=_a(m):s!==0?r=_a(s):n||(n=a&~e,n!==0&&(r=_a(n)))),r===0?0:t!==0&&t!==r&&(t&i)===0&&(i=r&-r,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:r}function Ql(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function cp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ms(){var e=ti;return ti<<=1,(ti&62914560)===0&&(ti=4194304),e}function Ho(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sp(e,t,n,a,r,i){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,v=e.expirationTimes,w=e.hiddenUpdates;for(n=s&~n;0<n;){var U=31-At(n),L=1<<U;m[U]=0,v[U]=-1;var M=w[U];if(M!==null)for(w[U]=null,U=0;U<M.length;U++){var k=M[U];k!==null&&(k.lane&=-536870913)}n&=~L}a!==0&&Cs(e,a,0),i!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~t))}function Cs(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-At(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function ks(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-At(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function Rs(e,t){var n=t&-t;return n=(n&42)!==0?1:qo(n),(n&(e.suspendedLanes|t))!==0?0:n}function qo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ns(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:xm(e.type))}function js(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var Wn=Math.random().toString(36).slice(2),yt="__reactFiber$"+Wn,Dt="__reactProps$"+Wn,Pa="__reactContainer$"+Wn,Lo="__reactEvents$"+Wn,fp="__reactListeners$"+Wn,dp="__reactHandles$"+Wn,Us="__reactResources$"+Wn,Kl="__reactMarker$"+Wn;function Vo(e){delete e[yt],delete e[Dt],delete e[Lo],delete e[fp],delete e[dp]}function $a(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pa]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lm(e);e!==null;){if(n=e[yt])return n;e=lm(e)}return t}e=n,n=e.parentNode}return null}function Wa(e){if(e=e[yt]||e[Pa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Jl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Ia(e){var t=e[Us];return t||(t=e[Us]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function bt(e){e[Kl]=!0}var Hs=new Set,qs={};function wa(e,t){el(e,t),el(e+"Capture",t)}function el(e,t){for(qs[e]=t,e=0;e<t.length;e++)Hs.add(t[e])}var hp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bs={},Ls={};function mp(e){return Pr.call(Ls,e)?!0:Pr.call(Bs,e)?!1:hp.test(e)?Ls[e]=!0:(Bs[e]=!0,!1)}function ai(e,t,n){if(mp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function li(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Dn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Pt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pp(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yo(e){if(!e._valueTracker){var t=Vs(e)?"checked":"value";e._valueTracker=pp(e,t,""+e[t])}}function Ys(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Vs(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var bp=/[\n"\\]/g;function $t(e){return e.replace(bp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Xo(e,t,n,a,r,i,s,m){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Pt(t)):e.value!==""+Pt(t)&&(e.value=""+Pt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Go(e,s,Pt(t)):n!=null?Go(e,s,Pt(n)):a!=null&&e.removeAttribute("value"),r==null&&i!=null&&(e.defaultChecked=!!i),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Pt(m):e.removeAttribute("name")}function Xs(e,t,n,a,r,i,s,m){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Yo(e);return}n=n!=null?""+Pt(n):"",t=t!=null?""+Pt(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=m?e.checked:!!a,e.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Yo(e)}function Go(e,t,n){t==="number"&&ri(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function tl(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Pt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Gs(e,t,n){if(t!=null&&(t=""+Pt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Pt(n):""}function Qs(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(De(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Pt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Yo(e)}function nl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zs(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||gp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ks(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&Zs(e,r,a)}else for(var i in t)t.hasOwnProperty(i)&&Zs(e,i,t[i])}function Qo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ii(e){return yp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Mn(){}var Zo=null;function Ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,ll=null;function Js(e){var t=Wa(e);if(t&&(e=t.stateNode)){var n=e[Dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Xo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+$t(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[Dt]||null;if(!r)throw Error(c(90));Xo(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Ys(a)}break e;case"textarea":Gs(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&tl(e,!!n.multiple,t,!1)}}}var Jo=!1;function Fs(e,t,n){if(Jo)return e(t,n);Jo=!0;try{var a=e(t);return a}finally{if(Jo=!1,(al!==null||ll!==null)&&(Ki(),al&&(t=al,e=ll,ll=al=null,Js(t),e)))for(t=0;t<e.length;t++)Js(e[t])}}function Fl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Dt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fo=!1;if(Cn)try{var Pl={};Object.defineProperty(Pl,"passive",{get:function(){Fo=!0}}),window.addEventListener("test",Pl,Pl),window.removeEventListener("test",Pl,Pl)}catch{Fo=!1}var In=null,Po=null,oi=null;function Ps(){if(oi)return oi;var e,t=Po,n=t.length,a,r="value"in In?In.value:In.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var s=n-e;for(a=1;a<=s&&t[n-a]===r[i-a];a++);return oi=r.slice(e,1<a?1-a:void 0)}function ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ci(){return!0}function $s(){return!1}function Mt(e){function t(n,a,r,i,s){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(i):i[m]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ci:$s,this.isPropagationStopped=$s,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),t}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},si=Mt(Da),$l=O({},Da,{view:0,detail:0}),xp=Mt($l),$o,Wo,Wl,fi=O({},$l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wl&&(Wl&&e.type==="mousemove"?($o=e.screenX-Wl.screenX,Wo=e.screenY-Wl.screenY):Wo=$o=0,Wl=e),$o)},movementY:function(e){return"movementY"in e?e.movementY:Wo}}),Ws=Mt(fi),Sp=O({},fi,{dataTransfer:0}),Op=Mt(Sp),Ep=O({},$l,{relatedTarget:0}),Io=Mt(Ep),zp=O({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),Ap=Mt(zp),Tp=O({},Da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_p=Mt(Tp),wp=O({},Da,{data:0}),Is=Mt(wp),Dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cp[e])?!!t[e]:!1}function eu(){return kp}var Rp=O({},$l,{key:function(e){if(e.key){var t=Dp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(e){return e.type==="keypress"?ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Np=Mt(Rp),jp=O({},fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ef=Mt(jp),Up=O({},$l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),Hp=Mt(Up),qp=O({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bp=Mt(qp),Lp=O({},fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vp=Mt(Lp),Yp=O({},Da,{newState:0,oldState:0}),Xp=Mt(Yp),Gp=[9,13,27,32],tu=Cn&&"CompositionEvent"in window,Il=null;Cn&&"documentMode"in document&&(Il=document.documentMode);var Qp=Cn&&"TextEvent"in window&&!Il,tf=Cn&&(!tu||Il&&8<Il&&11>=Il),nf=" ",af=!1;function lf(e,t){switch(e){case"keyup":return Gp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rl=!1;function Zp(e,t){switch(e){case"compositionend":return rf(t);case"keypress":return t.which!==32?null:(af=!0,nf);case"textInput":return e=t.data,e===nf&&af?null:e;default:return null}}function Kp(e,t){if(rl)return e==="compositionend"||!tu&&lf(e,t)?(e=Ps(),oi=Po=In=null,rl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return tf&&t.locale!=="ko"?null:t.data;default:return null}}var Jp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function of(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jp[e.type]:t==="textarea"}function uf(e,t,n,a){al?ll?ll.push(a):ll=[a]:al=a,t=eo(t,"onChange"),0<t.length&&(n=new si("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var er=null,tr=null;function Fp(e){Gh(e,0)}function di(e){var t=Jl(e);if(Ys(t))return e}function cf(e,t){if(e==="change")return t}var sf=!1;if(Cn){var nu;if(Cn){var au="oninput"in document;if(!au){var ff=document.createElement("div");ff.setAttribute("oninput","return;"),au=typeof ff.oninput=="function"}nu=au}else nu=!1;sf=nu&&(!document.documentMode||9<document.documentMode)}function df(){er&&(er.detachEvent("onpropertychange",hf),tr=er=null)}function hf(e){if(e.propertyName==="value"&&di(tr)){var t=[];uf(t,tr,e,Ko(e)),Fs(Fp,t)}}function Pp(e,t,n){e==="focusin"?(df(),er=t,tr=n,er.attachEvent("onpropertychange",hf)):e==="focusout"&&df()}function $p(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return di(tr)}function Wp(e,t){if(e==="click")return di(t)}function Ip(e,t){if(e==="input"||e==="change")return di(t)}function eb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qt=typeof Object.is=="function"?Object.is:eb;function nr(e,t){if(qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!Pr.call(t,r)||!qt(e[r],t[r]))return!1}return!0}function mf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pf(e,t){var n=mf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mf(n)}}function bf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ri(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ri(e.document)}return t}function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var tb=Cn&&"documentMode"in document&&11>=document.documentMode,il=null,ru=null,ar=null,iu=!1;function vf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;iu||il==null||il!==ri(a)||(a=il,"selectionStart"in a&&lu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ar&&nr(ar,a)||(ar=a,a=eo(ru,"onSelect"),0<a.length&&(t=new si("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=il)))}function Ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ol={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},ou={},yf={};Cn&&(yf=document.createElement("div").style,"AnimationEvent"in window||(delete ol.animationend.animation,delete ol.animationiteration.animation,delete ol.animationstart.animation),"TransitionEvent"in window||delete ol.transitionend.transition);function Ca(e){if(ou[e])return ou[e];if(!ol[e])return e;var t=ol[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yf)return ou[e]=t[n];return e}var xf=Ca("animationend"),Sf=Ca("animationiteration"),Of=Ca("animationstart"),nb=Ca("transitionrun"),ab=Ca("transitionstart"),lb=Ca("transitioncancel"),Ef=Ca("transitionend"),zf=new Map,uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uu.push("scrollEnd");function un(e,t){zf.set(e,t),wa(t,[e])}var hi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wt=[],ul=0,cu=0;function mi(){for(var e=ul,t=cu=ul=0;t<e;){var n=Wt[t];Wt[t++]=null;var a=Wt[t];Wt[t++]=null;var r=Wt[t];Wt[t++]=null;var i=Wt[t];if(Wt[t++]=null,a!==null&&r!==null){var s=a.pending;s===null?r.next=r:(r.next=s.next,s.next=r),a.pending=r}i!==0&&Af(n,r,i)}}function pi(e,t,n,a){Wt[ul++]=e,Wt[ul++]=t,Wt[ul++]=n,Wt[ul++]=a,cu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function su(e,t,n,a){return pi(e,t,n,a),bi(e)}function ka(e,t){return pi(e,null,null,t),bi(e)}function Af(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(r=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,r&&t!==null&&(r=31-At(n),e=i.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),i):null}function bi(e){if(50<Ar)throw Ar=0,yc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var cl={};function rb(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(e,t,n,a){return new rb(e,t,n,a)}function fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kn(e,t){var n=e.alternate;return n===null?(n=Bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Tf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function gi(e,t,n,a,r,i){var s=0;if(a=e,typeof e=="function")fu(e)&&(s=1);else if(typeof e=="string")s=sg(e,n,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case be:return e=Bt(31,n,t,r),e.elementType=be,e.lanes=i,e;case A:return Ra(n.children,r,i,t);case Y:s=8,r|=24;break;case F:return e=Bt(12,n,t,r|2),e.elementType=F,e.lanes=i,e;case ee:return e=Bt(13,n,t,r),e.elementType=ee,e.lanes=i,e;case pe:return e=Bt(19,n,t,r),e.elementType=pe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $:s=10;break e;case N:s=9;break e;case fe:s=11;break e;case ne:s=14;break e;case I:s=16,a=null;break e}s=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=Bt(s,n,t,r),t.elementType=e,t.type=a,t.lanes=i,t}function Ra(e,t,n,a){return e=Bt(7,e,a,t),e.lanes=n,e}function du(e,t,n){return e=Bt(6,e,null,t),e.lanes=n,e}function _f(e){var t=Bt(18,null,null,0);return t.stateNode=e,t}function hu(e,t,n){return t=Bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wf=new WeakMap;function It(e,t){if(typeof e=="object"&&e!==null){var n=wf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Fr(t)},wf.set(e,t),t)}return{value:e,source:t,stack:Fr(t)}}var sl=[],fl=0,vi=null,lr=0,en=[],tn=0,ea=null,xn=1,Sn="";function Rn(e,t){sl[fl++]=lr,sl[fl++]=vi,vi=e,lr=t}function Df(e,t,n){en[tn++]=xn,en[tn++]=Sn,en[tn++]=ea,ea=e;var a=xn;e=Sn;var r=32-At(a)-1;a&=~(1<<r),n+=1;var i=32-At(t)+r;if(30<i){var s=r-r%5;i=(a&(1<<s)-1).toString(32),a>>=s,r-=s,xn=1<<32-At(t)+r|n<<r|a,Sn=i+e}else xn=1<<i|n<<r|a,Sn=e}function mu(e){e.return!==null&&(Rn(e,1),Df(e,1,0))}function pu(e){for(;e===vi;)vi=sl[--fl],sl[fl]=null,lr=sl[--fl],sl[fl]=null;for(;e===ea;)ea=en[--tn],en[tn]=null,Sn=en[--tn],en[tn]=null,xn=en[--tn],en[tn]=null}function Mf(e,t){en[tn++]=xn,en[tn++]=Sn,en[tn++]=ea,xn=t.id,Sn=t.overflow,ea=e}var xt=null,Ze=null,Me=!1,ta=null,nn=!1,bu=Error(c(519));function na(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rr(It(t,e)),bu}function Cf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[yt]=e,t[Dt]=a,n){case"dialog":Ae("cancel",t),Ae("close",t);break;case"iframe":case"object":case"embed":Ae("load",t);break;case"video":case"audio":for(n=0;n<_r.length;n++)Ae(_r[n],t);break;case"source":Ae("error",t);break;case"img":case"image":case"link":Ae("error",t),Ae("load",t);break;case"details":Ae("toggle",t);break;case"input":Ae("invalid",t),Xs(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ae("invalid",t);break;case"textarea":Ae("invalid",t),Qs(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Jh(t.textContent,n)?(a.popover!=null&&(Ae("beforetoggle",t),Ae("toggle",t)),a.onScroll!=null&&Ae("scroll",t),a.onScrollEnd!=null&&Ae("scrollend",t),a.onClick!=null&&(t.onclick=Mn),t=!0):t=!1,t||na(e,!0)}function kf(e){for(xt=e.return;xt;)switch(xt.tag){case 5:case 31:case 13:nn=!1;return;case 27:case 3:nn=!0;return;default:xt=xt.return}}function dl(e){if(e!==xt)return!1;if(!Me)return kf(e),Me=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Nc(e.type,e.memoizedProps)),n=!n),n&&Ze&&na(e),kf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ze=am(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ze=am(e)}else t===27?(t=Ze,ba(e.type)?(e=Bc,Bc=null,Ze=e):Ze=t):Ze=xt?ln(e.stateNode.nextSibling):null;return!0}function Na(){Ze=xt=null,Me=!1}function gu(){var e=ta;return e!==null&&(Nt===null?Nt=e:Nt.push.apply(Nt,e),ta=null),e}function rr(e){ta===null?ta=[e]:ta.push(e)}var vu=S(null),ja=null,Nn=null;function aa(e,t,n){Z(vu,t._currentValue),t._currentValue=n}function jn(e){e._currentValue=vu.current,B(vu)}function yu(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function xu(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var i=r.dependencies;if(i!==null){var s=r.child;i=i.firstContext;e:for(;i!==null;){var m=i;i=r;for(var v=0;v<t.length;v++)if(m.context===t[v]){i.lanes|=n,m=i.alternate,m!==null&&(m.lanes|=n),yu(i.return,n,e),a||(s=null);break e}i=m.next}}else if(r.tag===18){if(s=r.return,s===null)throw Error(c(341));s.lanes|=n,i=s.alternate,i!==null&&(i.lanes|=n),yu(s,n,e),s=null}else s=r.child;if(s!==null)s.return=r;else for(s=r;s!==null;){if(s===e){s=null;break}if(r=s.sibling,r!==null){r.return=s.return,s=r;break}s=s.return}r=s}}function hl(e,t,n,a){e=null;for(var r=t,i=!1;r!==null;){if(!i){if((r.flags&524288)!==0)i=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var s=r.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var m=r.type;qt(r.pendingProps.value,s.value)||(e!==null?e.push(m):e=[m])}}else if(r===de.current){if(s=r.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(kr):e=[kr])}r=r.return}e!==null&&xu(t,e,n,a),t.flags|=262144}function yi(e){for(e=e.firstContext;e!==null;){if(!qt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ua(e){ja=e,Nn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function St(e){return Rf(ja,e)}function xi(e,t){return ja===null&&Ua(e),Rf(e,t)}function Rf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Nn===null){if(e===null)throw Error(c(308));Nn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Nn=Nn.next=t;return n}var ib=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},ob=l.unstable_scheduleCallback,ub=l.unstable_NormalPriority,lt={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Su(){return{controller:new ib,data:new Map,refCount:0}}function ir(e){e.refCount--,e.refCount===0&&ob(ub,function(){e.controller.abort()})}var or=null,Ou=0,ml=0,pl=null;function cb(e,t){if(or===null){var n=or=[];Ou=0,ml=Ac(),pl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Ou++,t.then(Nf,Nf),t}function Nf(){if(--Ou===0&&or!==null){pl!==null&&(pl.status="fulfilled");var e=or;or=null,ml=0,pl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function sb(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var jf=C.S;C.S=function(e,t){vh=J(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&cb(e,t),jf!==null&&jf(e,t)};var Ha=S(null);function Eu(){var e=Ha.current;return e!==null?e:Qe.pooledCache}function Si(e,t){t===null?Z(Ha,Ha.current):Z(Ha,t.pool)}function Uf(){var e=Eu();return e===null?null:{parent:lt._currentValue,pool:e}}var bl=Error(c(460)),zu=Error(c(474)),Oi=Error(c(542)),Ei={then:function(){}};function Hf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function qf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Mn,Mn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Lf(e),e;default:if(typeof t.status=="string")t.then(Mn,Mn);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Lf(e),e}throw Ba=t,bl}}function qa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ba=n,bl):n}}var Ba=null;function Bf(){if(Ba===null)throw Error(c(459));var e=Ba;return Ba=null,e}function Lf(e){if(e===bl||e===Oi)throw Error(c(483))}var gl=null,ur=0;function zi(e){var t=ur;return ur+=1,gl===null&&(gl=[]),qf(gl,e,t)}function cr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ai(e,t){throw t.$$typeof===H?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Vf(e){function t(z,x){if(e){var _=z.deletions;_===null?(z.deletions=[x],z.flags|=16):_.push(x)}}function n(z,x){if(!e)return null;for(;x!==null;)t(z,x),x=x.sibling;return null}function a(z){for(var x=new Map;z!==null;)z.key!==null?x.set(z.key,z):x.set(z.index,z),z=z.sibling;return x}function r(z,x){return z=kn(z,x),z.index=0,z.sibling=null,z}function i(z,x,_){return z.index=_,e?(_=z.alternate,_!==null?(_=_.index,_<x?(z.flags|=67108866,x):_):(z.flags|=67108866,x)):(z.flags|=1048576,x)}function s(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function m(z,x,_,q){return x===null||x.tag!==6?(x=du(_,z.mode,q),x.return=z,x):(x=r(x,_),x.return=z,x)}function v(z,x,_,q){var se=_.type;return se===A?U(z,x,_.props.children,q,_.key):x!==null&&(x.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===I&&qa(se)===x.type)?(x=r(x,_.props),cr(x,_),x.return=z,x):(x=gi(_.type,_.key,_.props,null,z.mode,q),cr(x,_),x.return=z,x)}function w(z,x,_,q){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=hu(_,z.mode,q),x.return=z,x):(x=r(x,_.children||[]),x.return=z,x)}function U(z,x,_,q,se){return x===null||x.tag!==7?(x=Ra(_,z.mode,q,se),x.return=z,x):(x=r(x,_),x.return=z,x)}function L(z,x,_){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=du(""+x,z.mode,_),x.return=z,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case V:return _=gi(x.type,x.key,x.props,null,z.mode,_),cr(_,x),_.return=z,_;case X:return x=hu(x,z.mode,_),x.return=z,x;case I:return x=qa(x),L(z,x,_)}if(De(x)||ce(x))return x=Ra(x,z.mode,_,null),x.return=z,x;if(typeof x.then=="function")return L(z,zi(x),_);if(x.$$typeof===$)return L(z,xi(z,x),_);Ai(z,x)}return null}function M(z,x,_,q){var se=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return se!==null?null:m(z,x,""+_,q);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case V:return _.key===se?v(z,x,_,q):null;case X:return _.key===se?w(z,x,_,q):null;case I:return _=qa(_),M(z,x,_,q)}if(De(_)||ce(_))return se!==null?null:U(z,x,_,q,null);if(typeof _.then=="function")return M(z,x,zi(_),q);if(_.$$typeof===$)return M(z,x,xi(z,_),q);Ai(z,_)}return null}function k(z,x,_,q,se){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return z=z.get(_)||null,m(x,z,""+q,se);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case V:return z=z.get(q.key===null?_:q.key)||null,v(x,z,q,se);case X:return z=z.get(q.key===null?_:q.key)||null,w(x,z,q,se);case I:return q=qa(q),k(z,x,_,q,se)}if(De(q)||ce(q))return z=z.get(_)||null,U(x,z,q,se,null);if(typeof q.then=="function")return k(z,x,_,zi(q),se);if(q.$$typeof===$)return k(z,x,_,xi(x,q),se);Ai(x,q)}return null}function te(z,x,_,q){for(var se=null,Re=null,re=x,Se=x=0,we=null;re!==null&&Se<_.length;Se++){re.index>Se?(we=re,re=null):we=re.sibling;var Ne=M(z,re,_[Se],q);if(Ne===null){re===null&&(re=we);break}e&&re&&Ne.alternate===null&&t(z,re),x=i(Ne,x,Se),Re===null?se=Ne:Re.sibling=Ne,Re=Ne,re=we}if(Se===_.length)return n(z,re),Me&&Rn(z,Se),se;if(re===null){for(;Se<_.length;Se++)re=L(z,_[Se],q),re!==null&&(x=i(re,x,Se),Re===null?se=re:Re.sibling=re,Re=re);return Me&&Rn(z,Se),se}for(re=a(re);Se<_.length;Se++)we=k(re,z,Se,_[Se],q),we!==null&&(e&&we.alternate!==null&&re.delete(we.key===null?Se:we.key),x=i(we,x,Se),Re===null?se=we:Re.sibling=we,Re=we);return e&&re.forEach(function(Sa){return t(z,Sa)}),Me&&Rn(z,Se),se}function he(z,x,_,q){if(_==null)throw Error(c(151));for(var se=null,Re=null,re=x,Se=x=0,we=null,Ne=_.next();re!==null&&!Ne.done;Se++,Ne=_.next()){re.index>Se?(we=re,re=null):we=re.sibling;var Sa=M(z,re,Ne.value,q);if(Sa===null){re===null&&(re=we);break}e&&re&&Sa.alternate===null&&t(z,re),x=i(Sa,x,Se),Re===null?se=Sa:Re.sibling=Sa,Re=Sa,re=we}if(Ne.done)return n(z,re),Me&&Rn(z,Se),se;if(re===null){for(;!Ne.done;Se++,Ne=_.next())Ne=L(z,Ne.value,q),Ne!==null&&(x=i(Ne,x,Se),Re===null?se=Ne:Re.sibling=Ne,Re=Ne);return Me&&Rn(z,Se),se}for(re=a(re);!Ne.done;Se++,Ne=_.next())Ne=k(re,z,Se,Ne.value,q),Ne!==null&&(e&&Ne.alternate!==null&&re.delete(Ne.key===null?Se:Ne.key),x=i(Ne,x,Se),Re===null?se=Ne:Re.sibling=Ne,Re=Ne);return e&&re.forEach(function(Sg){return t(z,Sg)}),Me&&Rn(z,Se),se}function Ge(z,x,_,q){if(typeof _=="object"&&_!==null&&_.type===A&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case V:e:{for(var se=_.key;x!==null;){if(x.key===se){if(se=_.type,se===A){if(x.tag===7){n(z,x.sibling),q=r(x,_.props.children),q.return=z,z=q;break e}}else if(x.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===I&&qa(se)===x.type){n(z,x.sibling),q=r(x,_.props),cr(q,_),q.return=z,z=q;break e}n(z,x);break}else t(z,x);x=x.sibling}_.type===A?(q=Ra(_.props.children,z.mode,q,_.key),q.return=z,z=q):(q=gi(_.type,_.key,_.props,null,z.mode,q),cr(q,_),q.return=z,z=q)}return s(z);case X:e:{for(se=_.key;x!==null;){if(x.key===se)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){n(z,x.sibling),q=r(x,_.children||[]),q.return=z,z=q;break e}else{n(z,x);break}else t(z,x);x=x.sibling}q=hu(_,z.mode,q),q.return=z,z=q}return s(z);case I:return _=qa(_),Ge(z,x,_,q)}if(De(_))return te(z,x,_,q);if(ce(_)){if(se=ce(_),typeof se!="function")throw Error(c(150));return _=se.call(_),he(z,x,_,q)}if(typeof _.then=="function")return Ge(z,x,zi(_),q);if(_.$$typeof===$)return Ge(z,x,xi(z,_),q);Ai(z,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,x!==null&&x.tag===6?(n(z,x.sibling),q=r(x,_),q.return=z,z=q):(n(z,x),q=du(_,z.mode,q),q.return=z,z=q),s(z)):n(z,x)}return function(z,x,_,q){try{ur=0;var se=Ge(z,x,_,q);return gl=null,se}catch(re){if(re===bl||re===Oi)throw re;var Re=Bt(29,re,null,z.mode);return Re.lanes=q,Re.return=z,Re}}}var La=Vf(!0),Yf=Vf(!1),la=!1;function Au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ue&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=bi(e),Af(e,null,n),t}return pi(e,a,t,n),bi(e)}function sr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ks(e,n)}}function _u(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?r=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var wu=!1;function fr(){if(wu){var e=pl;if(e!==null)throw e}}function dr(e,t,n,a){wu=!1;var r=e.updateQueue;la=!1;var i=r.firstBaseUpdate,s=r.lastBaseUpdate,m=r.shared.pending;if(m!==null){r.shared.pending=null;var v=m,w=v.next;v.next=null,s===null?i=w:s.next=w,s=v;var U=e.alternate;U!==null&&(U=U.updateQueue,m=U.lastBaseUpdate,m!==s&&(m===null?U.firstBaseUpdate=w:m.next=w,U.lastBaseUpdate=v))}if(i!==null){var L=r.baseState;s=0,U=w=v=null,m=i;do{var M=m.lane&-536870913,k=M!==m.lane;if(k?(_e&M)===M:(a&M)===M){M!==0&&M===ml&&(wu=!0),U!==null&&(U=U.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var te=e,he=m;M=t;var Ge=n;switch(he.tag){case 1:if(te=he.payload,typeof te=="function"){L=te.call(Ge,L,M);break e}L=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=he.payload,M=typeof te=="function"?te.call(Ge,L,M):te,M==null)break e;L=O({},L,M);break e;case 2:la=!0}}M=m.callback,M!==null&&(e.flags|=64,k&&(e.flags|=8192),k=r.callbacks,k===null?r.callbacks=[M]:k.push(M))}else k={lane:M,tag:m.tag,payload:m.payload,callback:m.callback,next:null},U===null?(w=U=k,v=L):U=U.next=k,s|=M;if(m=m.next,m===null){if(m=r.shared.pending,m===null)break;k=m,m=k.next,k.next=null,r.lastBaseUpdate=k,r.shared.pending=null}}while(!0);U===null&&(v=L),r.baseState=v,r.firstBaseUpdate=w,r.lastBaseUpdate=U,i===null&&(r.shared.lanes=0),fa|=s,e.lanes=s,e.memoizedState=L}}function Xf(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Gf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xf(n[e],t)}var vl=S(null),Ti=S(0);function Qf(e,t){e=Gn,Z(Ti,e),Z(vl,t),Gn=e|t.baseLanes}function Du(){Z(Ti,Gn),Z(vl,vl.current)}function Mu(){Gn=Ti.current,B(vl),B(Ti)}var Lt=S(null),an=null;function oa(e){var t=e.alternate;Z(nt,nt.current&1),Z(Lt,e),an===null&&(t===null||vl.current!==null||t.memoizedState!==null)&&(an=e)}function Cu(e){Z(nt,nt.current),Z(Lt,e),an===null&&(an=e)}function Zf(e){e.tag===22?(Z(nt,nt.current),Z(Lt,e),an===null&&(an=e)):ua()}function ua(){Z(nt,nt.current),Z(Lt,Lt.current)}function Vt(e){B(Lt),an===e&&(an=null),B(nt)}var nt=S(0);function _i(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Hc(n)||qc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Un=0,ye=null,Ye=null,rt=null,wi=!1,yl=!1,Va=!1,Di=0,hr=0,xl=null,fb=0;function et(){throw Error(c(321))}function ku(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qt(e[n],t[n]))return!1;return!0}function Ru(e,t,n,a,r,i){return Un=i,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?Dd:Ju,Va=!1,i=n(a,r),Va=!1,yl&&(i=Jf(t,n,a,r)),Kf(e),i}function Kf(e){C.H=br;var t=Ye!==null&&Ye.next!==null;if(Un=0,rt=Ye=ye=null,wi=!1,hr=0,xl=null,t)throw Error(c(300));e===null||it||(e=e.dependencies,e!==null&&yi(e)&&(it=!0))}function Jf(e,t,n,a){ye=e;var r=0;do{if(yl&&(xl=null),hr=0,yl=!1,25<=r)throw Error(c(301));if(r+=1,rt=Ye=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}C.H=Md,i=t(n,a)}while(yl);return i}function db(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?mr(t):t,e=e.useState()[0],(Ye!==null?Ye.memoizedState:null)!==e&&(ye.flags|=1024),t}function Nu(){var e=Di!==0;return Di=0,e}function ju(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Uu(e){if(wi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}wi=!1}Un=0,rt=Ye=ye=null,yl=!1,hr=Di=0,xl=null}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?ye.memoizedState=rt=e:rt=rt.next=e,rt}function at(){if(Ye===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=rt===null?ye.memoizedState:rt.next;if(t!==null)rt=t,Ye=e;else{if(e===null)throw ye.alternate===null?Error(c(467)):Error(c(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},rt===null?ye.memoizedState=rt=e:rt=rt.next=e}return rt}function Mi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mr(e){var t=hr;return hr+=1,xl===null&&(xl=[]),e=qf(xl,e,t),t=ye,(rt===null?t.memoizedState:rt.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?Dd:Ju),e}function Ci(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mr(e);if(e.$$typeof===$)return St(e)}throw Error(c(438,String(e)))}function Hu(e){var t=null,n=ye.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ye.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Mi(),ye.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Ve;return t.index++,n}function Hn(e,t){return typeof t=="function"?t(e):t}function ki(e){var t=at();return qu(t,Ye,e)}function qu(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var r=e.baseQueue,i=a.pending;if(i!==null){if(r!==null){var s=r.next;r.next=i.next,i.next=s}t.baseQueue=r=i,a.pending=null}if(i=e.baseState,r===null)e.memoizedState=i;else{t=r.next;var m=s=null,v=null,w=t,U=!1;do{var L=w.lane&-536870913;if(L!==w.lane?(_e&L)===L:(Un&L)===L){var M=w.revertLane;if(M===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),L===ml&&(U=!0);else if((Un&M)===M){w=w.next,M===ml&&(U=!0);continue}else L={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(m=v=L,s=i):v=v.next=L,ye.lanes|=M,fa|=M;L=w.action,Va&&n(i,L),i=w.hasEagerState?w.eagerState:n(i,L)}else M={lane:L,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(m=v=M,s=i):v=v.next=M,ye.lanes|=L,fa|=L;w=w.next}while(w!==null&&w!==t);if(v===null?s=i:v.next=m,!qt(i,e.memoizedState)&&(it=!0,U&&(n=pl,n!==null)))throw n;e.memoizedState=i,e.baseState=s,e.baseQueue=v,a.lastRenderedState=i}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Bu(e){var t=at(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do i=e(i,s.action),s=s.next;while(s!==r);qt(i,t.memoizedState)||(it=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Ff(e,t,n){var a=ye,r=at(),i=Me;if(i){if(n===void 0)throw Error(c(407));n=n()}else n=t();var s=!qt((Ye||r).memoizedState,n);if(s&&(r.memoizedState=n,it=!0),r=r.queue,Yu(Wf.bind(null,a,r,e),[e]),r.getSnapshot!==t||s||rt!==null&&rt.memoizedState.tag&1){if(a.flags|=2048,Sl(9,{destroy:void 0},$f.bind(null,a,r,n,t),null),Qe===null)throw Error(c(349));i||(Un&127)!==0||Pf(a,t,n)}return n}function Pf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t=Mi(),ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $f(e,t,n,a){t.value=n,t.getSnapshot=a,If(t)&&ed(e)}function Wf(e,t,n){return n(function(){If(t)&&ed(e)})}function If(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qt(e,n)}catch{return!0}}function ed(e){var t=ka(e,2);t!==null&&jt(t,e,2)}function Lu(e){var t=Tt();if(typeof e=="function"){var n=e;if(e=n(),Va){Ft(!0);try{n()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:e},t}function td(e,t,n,a){return e.baseState=n,qu(e,Ye,typeof a=="function"?a:Hn)}function hb(e,t,n,a,r){if(ji(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};C.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,nd(t,i)):(i.next=n.next,t.pending=n.next=i)}}function nd(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var i=C.T,s={};C.T=s;try{var m=n(r,a),v=C.S;v!==null&&v(s,m),ad(e,t,m)}catch(w){Vu(e,t,w)}finally{i!==null&&s.types!==null&&(i.types=s.types),C.T=i}}else try{i=n(r,a),ad(e,t,i)}catch(w){Vu(e,t,w)}}function ad(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){ld(e,t,a)},function(a){return Vu(e,t,a)}):ld(e,t,n)}function ld(e,t,n){t.status="fulfilled",t.value=n,rd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,nd(e,n)))}function Vu(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,rd(t),t=t.next;while(t!==a)}e.action=null}function rd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function id(e,t){return t}function od(e,t){if(Me){var n=Qe.formState;if(n!==null){e:{var a=ye;if(Me){if(Ze){t:{for(var r=Ze,i=nn;r.nodeType!==8;){if(!i){r=null;break t}if(r=ln(r.nextSibling),r===null){r=null;break t}}i=r.data,r=i==="F!"||i==="F"?r:null}if(r){Ze=ln(r.nextSibling),a=r.data==="F!";break e}}na(a)}a=!1}a&&(t=n[0])}}return n=Tt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:id,lastRenderedState:t},n.queue=a,n=Td.bind(null,ye,a),a.dispatch=n,a=Lu(!1),i=Ku.bind(null,ye,!1,a.queue),a=Tt(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=hb.bind(null,ye,r,i,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function ud(e){var t=at();return cd(t,Ye,e)}function cd(e,t,n){if(t=qu(e,t,id)[0],e=ki(Hn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=mr(t)}catch(s){throw s===bl?Oi:s}else a=t;t=at();var r=t.queue,i=r.dispatch;return n!==t.memoizedState&&(ye.flags|=2048,Sl(9,{destroy:void 0},mb.bind(null,r,n),null)),[a,i,e]}function mb(e,t){e.action=t}function sd(e){var t=at(),n=Ye;if(n!==null)return cd(t,n,e);at(),t=t.memoizedState,n=at();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Sl(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ye.updateQueue,t===null&&(t=Mi(),ye.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function fd(){return at().memoizedState}function Ri(e,t,n,a){var r=Tt();ye.flags|=e,r.memoizedState=Sl(1|t,{destroy:void 0},n,a===void 0?null:a)}function Ni(e,t,n,a){var r=at();a=a===void 0?null:a;var i=r.memoizedState.inst;Ye!==null&&a!==null&&ku(a,Ye.memoizedState.deps)?r.memoizedState=Sl(t,i,n,a):(ye.flags|=e,r.memoizedState=Sl(1|t,i,n,a))}function dd(e,t){Ri(8390656,8,e,t)}function Yu(e,t){Ni(2048,8,e,t)}function pb(e){ye.flags|=4;var t=ye.updateQueue;if(t===null)t=Mi(),ye.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hd(e){var t=at().memoizedState;return pb({ref:t,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function md(e,t){return Ni(4,2,e,t)}function pd(e,t){return Ni(4,4,e,t)}function bd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gd(e,t,n){n=n!=null?n.concat([e]):null,Ni(4,4,bd.bind(null,t,e),n)}function Xu(){}function vd(e,t){var n=at();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&ku(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function yd(e,t){var n=at();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&ku(t,a[1]))return a[0];if(a=e(),Va){Ft(!0);try{e()}finally{Ft(!1)}}return n.memoizedState=[a,t],a}function Gu(e,t,n){return n===void 0||(Un&1073741824)!==0&&(_e&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=xh(),ye.lanes|=e,fa|=e,n)}function xd(e,t,n,a){return qt(n,t)?n:vl.current!==null?(e=Gu(e,n,a),qt(e,t)||(it=!0),e):(Un&42)===0||(Un&1073741824)!==0&&(_e&261930)===0?(it=!0,e.memoizedState=n):(e=xh(),ye.lanes|=e,fa|=e,t)}function Sd(e,t,n,a,r){var i=Q.p;Q.p=i!==0&&8>i?i:8;var s=C.T,m={};C.T=m,Ku(e,!1,t,n);try{var v=r(),w=C.S;if(w!==null&&w(m,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var U=sb(v,a);pr(e,t,U,Gt(e))}else pr(e,t,a,Gt(e))}catch(L){pr(e,t,{then:function(){},status:"rejected",reason:L},Gt())}finally{Q.p=i,s!==null&&m.types!==null&&(s.types=m.types),C.T=s}}function bb(){}function Qu(e,t,n,a){if(e.tag!==5)throw Error(c(476));var r=Od(e).queue;Sd(e,r,t,G,n===null?bb:function(){return Ed(e),n(a)})}function Od(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:G},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ed(e){var t=Od(e);t.next===null&&(t=e.alternate.memoizedState),pr(e,t.next.queue,{},Gt())}function Zu(){return St(kr)}function zd(){return at().memoizedState}function Ad(){return at().memoizedState}function gb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Gt();e=ra(n);var a=ia(t,e,n);a!==null&&(jt(a,t,n),sr(a,t,n)),t={cache:Su()},e.payload=t;return}t=t.return}}function vb(e,t,n){var a=Gt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ji(e)?_d(t,n):(n=su(e,t,n,a),n!==null&&(jt(n,e,a),wd(n,t,a)))}function Td(e,t,n){var a=Gt();pr(e,t,n,a)}function pr(e,t,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ji(e))_d(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,m=i(s,n);if(r.hasEagerState=!0,r.eagerState=m,qt(m,s))return pi(e,t,r,0),Qe===null&&mi(),!1}catch{}if(n=su(e,t,r,a),n!==null)return jt(n,e,a),wd(n,t,a),!0}return!1}function Ku(e,t,n,a){if(a={lane:2,revertLane:Ac(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ji(e)){if(t)throw Error(c(479))}else t=su(e,n,a,2),t!==null&&jt(t,e,2)}function ji(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function _d(e,t){yl=wi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ks(e,n)}}var br={readContext:St,use:Ci,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useInsertionEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useSyncExternalStore:et,useId:et,useHostTransitionStatus:et,useFormState:et,useActionState:et,useOptimistic:et,useMemoCache:et,useCacheRefresh:et};br.useEffectEvent=et;var Dd={readContext:St,use:Ci,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:dd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ri(4194308,4,bd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){Ri(4,2,e,t)},useMemo:function(e,t){var n=Tt();t=t===void 0?null:t;var a=e();if(Va){Ft(!0);try{e()}finally{Ft(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Tt();if(n!==void 0){var r=n(t);if(Va){Ft(!0);try{n(t)}finally{Ft(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=vb.bind(null,ye,e),[a.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:function(e){e=Lu(e);var t=e.queue,n=Td.bind(null,ye,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Xu,useDeferredValue:function(e,t){var n=Tt();return Gu(n,e,t)},useTransition:function(){var e=Lu(!1);return e=Sd.bind(null,ye,e.queue,!0,!1),Tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ye,r=Tt();if(Me){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Qe===null)throw Error(c(349));(_e&127)!==0||Pf(a,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,dd(Wf.bind(null,a,i,e),[e]),a.flags|=2048,Sl(9,{destroy:void 0},$f.bind(null,a,i,n,t),null),n},useId:function(){var e=Tt(),t=Qe.identifierPrefix;if(Me){var n=Sn,a=xn;n=(a&~(1<<32-At(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Di++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=fb++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Zu,useFormState:od,useActionState:od,useOptimistic:function(e){var t=Tt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ku.bind(null,ye,!0,n),n.dispatch=t,[e,t]},useMemoCache:Hu,useCacheRefresh:function(){return Tt().memoizedState=gb.bind(null,ye)},useEffectEvent:function(e){var t=Tt(),n={impl:e};return t.memoizedState=n,function(){if((Ue&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Ju={readContext:St,use:Ci,useCallback:vd,useContext:St,useEffect:Yu,useImperativeHandle:gd,useInsertionEffect:md,useLayoutEffect:pd,useMemo:yd,useReducer:ki,useRef:fd,useState:function(){return ki(Hn)},useDebugValue:Xu,useDeferredValue:function(e,t){var n=at();return xd(n,Ye.memoizedState,e,t)},useTransition:function(){var e=ki(Hn)[0],t=at().memoizedState;return[typeof e=="boolean"?e:mr(e),t]},useSyncExternalStore:Ff,useId:zd,useHostTransitionStatus:Zu,useFormState:ud,useActionState:ud,useOptimistic:function(e,t){var n=at();return td(n,Ye,e,t)},useMemoCache:Hu,useCacheRefresh:Ad};Ju.useEffectEvent=hd;var Md={readContext:St,use:Ci,useCallback:vd,useContext:St,useEffect:Yu,useImperativeHandle:gd,useInsertionEffect:md,useLayoutEffect:pd,useMemo:yd,useReducer:Bu,useRef:fd,useState:function(){return Bu(Hn)},useDebugValue:Xu,useDeferredValue:function(e,t){var n=at();return Ye===null?Gu(n,e,t):xd(n,Ye.memoizedState,e,t)},useTransition:function(){var e=Bu(Hn)[0],t=at().memoizedState;return[typeof e=="boolean"?e:mr(e),t]},useSyncExternalStore:Ff,useId:zd,useHostTransitionStatus:Zu,useFormState:sd,useActionState:sd,useOptimistic:function(e,t){var n=at();return Ye!==null?td(n,Ye,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Hu,useCacheRefresh:Ad};Md.useEffectEvent=hd;function Fu(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:O({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pu={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Gt(),r=ra(a);r.payload=t,n!=null&&(r.callback=n),t=ia(e,r,a),t!==null&&(jt(t,e,a),sr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Gt(),r=ra(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=ia(e,r,a),t!==null&&(jt(t,e,a),sr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Gt(),a=ra(n);a.tag=2,t!=null&&(a.callback=t),t=ia(e,a,n),t!==null&&(jt(t,e,n),sr(t,e,n))}};function Cd(e,t,n,a,r,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,s):t.prototype&&t.prototype.isPureReactComponent?!nr(n,a)||!nr(r,i):!0}function kd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Pu.enqueueReplaceState(t,t.state,null)}function Ya(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=O({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Rd(e){hi(e)}function Nd(e){console.error(e)}function jd(e){hi(e)}function Ui(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Ud(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function $u(e,t,n){return n=ra(n),n.tag=3,n.payload={element:null},n.callback=function(){Ui(e,t)},n}function Hd(e){return e=ra(e),e.tag=3,e}function qd(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=a.value;e.payload=function(){return r(i)},e.callback=function(){Ud(t,n,a)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Ud(t,n,a),typeof r!="function"&&(da===null?da=new Set([this]):da.add(this));var m=a.stack;this.componentDidCatch(a.value,{componentStack:m!==null?m:""})})}function yb(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&hl(t,n,r,!0),n=Lt.current,n!==null){switch(n.tag){case 31:case 13:return an===null?Ji():n.alternate===null&&tt===0&&(tt=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===Ei?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Oc(e,a,r)),!1;case 22:return n.flags|=65536,a===Ei?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Oc(e,a,r)),!1}throw Error(c(435,n.tag))}return Oc(e,a,r),Ji(),!1}if(Me)return t=Lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==bu&&(e=Error(c(422),{cause:a}),rr(It(e,n)))):(a!==bu&&(t=Error(c(423),{cause:a}),rr(It(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=It(a,n),r=$u(e.stateNode,a,r),_u(e,r),tt!==4&&(tt=2)),!1;var i=Error(c(520),{cause:a});if(i=It(i,n),zr===null?zr=[i]:zr.push(i),tt!==4&&(tt=2),t===null)return!0;a=It(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=$u(n.stateNode,a,e),_u(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(da===null||!da.has(i))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Hd(r),qd(r,e,n,a),_u(n,r),!1}n=n.return}while(n!==null);return!1}var Wu=Error(c(461)),it=!1;function Ot(e,t,n,a){t.child=e===null?Yf(t,null,n,a):La(t,e.child,n,a)}function Bd(e,t,n,a,r){n=n.render;var i=t.ref;if("ref"in a){var s={};for(var m in a)m!=="ref"&&(s[m]=a[m])}else s=a;return Ua(t),a=Ru(e,t,n,s,i,r),m=Nu(),e!==null&&!it?(ju(e,t,r),qn(e,t,r)):(Me&&m&&mu(t),t.flags|=1,Ot(e,t,a,r),t.child)}function Ld(e,t,n,a,r){if(e===null){var i=n.type;return typeof i=="function"&&!fu(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Vd(e,t,i,a,r)):(e=gi(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!ic(e,r)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:nr,n(s,a)&&e.ref===t.ref)return qn(e,t,r)}return t.flags|=1,e=kn(i,a),e.ref=t.ref,e.return=t,t.child=e}function Vd(e,t,n,a,r){if(e!==null){var i=e.memoizedProps;if(nr(i,a)&&e.ref===t.ref)if(it=!1,t.pendingProps=a=i,ic(e,r))(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,qn(e,t,r)}return Iu(e,t,n,a,r)}function Yd(e,t,n,a){var r=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~i}else a=0,t.child=null;return Xd(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Si(t,i!==null?i.cachePool:null),i!==null?Qf(t,i):Du(),Zf(t);else return a=t.lanes=536870912,Xd(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(Si(t,i.cachePool),Qf(t,i),ua(),t.memoizedState=null):(e!==null&&Si(t,null),Du(),ua());return Ot(e,t,r,n),t.child}function gr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Xd(e,t,n,a,r){var i=Eu();return i=i===null?null:{parent:lt._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Si(t,null),Du(),Zf(t),e!==null&&hl(e,t,a,!0),t.childLanes=r,null}function Hi(e,t){return t=Bi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Gd(e,t,n){return La(t,e.child,null,n),e=Hi(t,t.pendingProps),e.flags|=2,Vt(t),t.memoizedState=null,e}function xb(e,t,n){var a=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Me){if(a.mode==="hidden")return e=Hi(t,a),t.lanes=536870912,gr(null,e);if(Cu(t),(e=Ze)?(e=nm(e,nn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ea!==null?{id:xn,overflow:Sn}:null,retryLane:536870912,hydrationErrors:null},n=_f(e),n.return=t,t.child=n,xt=t,Ze=null)):e=null,e===null)throw na(t);return t.lanes=536870912,null}return Hi(t,a)}var i=e.memoizedState;if(i!==null){var s=i.dehydrated;if(Cu(t),r)if(t.flags&256)t.flags&=-257,t=Gd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(it||hl(e,t,n,!1),r=(n&e.childLanes)!==0,it||r){if(a=Qe,a!==null&&(s=Rs(a,n),s!==0&&s!==i.retryLane))throw i.retryLane=s,ka(e,s),jt(a,e,s),Wu;Ji(),t=Gd(e,t,n)}else e=i.treeContext,Ze=ln(s.nextSibling),xt=t,Me=!0,ta=null,nn=!1,e!==null&&Mf(t,e),t=Hi(t,a),t.flags|=4096;return t}return e=kn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function qi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Iu(e,t,n,a,r){return Ua(t),n=Ru(e,t,n,a,void 0,r),a=Nu(),e!==null&&!it?(ju(e,t,r),qn(e,t,r)):(Me&&a&&mu(t),t.flags|=1,Ot(e,t,n,r),t.child)}function Qd(e,t,n,a,r,i){return Ua(t),t.updateQueue=null,n=Jf(t,a,n,r),Kf(e),a=Nu(),e!==null&&!it?(ju(e,t,i),qn(e,t,i)):(Me&&a&&mu(t),t.flags|=1,Ot(e,t,n,i),t.child)}function Zd(e,t,n,a,r){if(Ua(t),t.stateNode===null){var i=cl,s=n.contextType;typeof s=="object"&&s!==null&&(i=St(s)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Pu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Au(t),s=n.contextType,i.context=typeof s=="object"&&s!==null?St(s):cl,i.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Fu(t,n,s,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&Pu.enqueueReplaceState(i,i.state,null),dr(t,a,i,r),fr(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var m=t.memoizedProps,v=Ya(n,m);i.props=v;var w=i.context,U=n.contextType;s=cl,typeof U=="object"&&U!==null&&(s=St(U));var L=n.getDerivedStateFromProps;U=typeof L=="function"||typeof i.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,U||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(m||w!==s)&&kd(t,i,a,s),la=!1;var M=t.memoizedState;i.state=M,dr(t,a,i,r),fr(),w=t.memoizedState,m||M!==w||la?(typeof L=="function"&&(Fu(t,n,L,a),w=t.memoizedState),(v=la||Cd(t,n,v,a,M,w,s))?(U||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=w),i.props=a,i.state=w,i.context=s,a=v):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Tu(e,t),s=t.memoizedProps,U=Ya(n,s),i.props=U,L=t.pendingProps,M=i.context,w=n.contextType,v=cl,typeof w=="object"&&w!==null&&(v=St(w)),m=n.getDerivedStateFromProps,(w=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==L||M!==v)&&kd(t,i,a,v),la=!1,M=t.memoizedState,i.state=M,dr(t,a,i,r),fr();var k=t.memoizedState;s!==L||M!==k||la||e!==null&&e.dependencies!==null&&yi(e.dependencies)?(typeof m=="function"&&(Fu(t,n,m,a),k=t.memoizedState),(U=la||Cd(t,n,U,a,M,k,v)||e!==null&&e.dependencies!==null&&yi(e.dependencies))?(w||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,k,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,k,v)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=k),i.props=a,i.state=k,i.context=v,a=U):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,qi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=La(t,e.child,null,r),t.child=La(t,null,n,r)):Ot(e,t,n,r),t.memoizedState=i.state,e=t.child):e=qn(e,t,r),e}function Kd(e,t,n,a){return Na(),t.flags|=256,Ot(e,t,n,a),t.child}var ec={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tc(e){return{baseLanes:e,cachePool:Uf()}}function nc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Xt),e}function Jd(e,t,n){var a=t.pendingProps,r=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(nt.current&2)!==0),s&&(r=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(Me){if(r?oa(t):ua(),(e=Ze)?(e=nm(e,nn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ea!==null?{id:xn,overflow:Sn}:null,retryLane:536870912,hydrationErrors:null},n=_f(e),n.return=t,t.child=n,xt=t,Ze=null)):e=null,e===null)throw na(t);return qc(e)?t.lanes=32:t.lanes=536870912,null}var m=a.children;return a=a.fallback,r?(ua(),r=t.mode,m=Bi({mode:"hidden",children:m},r),a=Ra(a,r,n,null),m.return=t,a.return=t,m.sibling=a,t.child=m,a=t.child,a.memoizedState=tc(n),a.childLanes=nc(e,s,n),t.memoizedState=ec,gr(null,a)):(oa(t),ac(t,m))}var v=e.memoizedState;if(v!==null&&(m=v.dehydrated,m!==null)){if(i)t.flags&256?(oa(t),t.flags&=-257,t=lc(e,t,n)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),m=a.fallback,r=t.mode,a=Bi({mode:"visible",children:a.children},r),m=Ra(m,r,n,null),m.flags|=2,a.return=t,m.return=t,a.sibling=m,t.child=a,La(t,e.child,null,n),a=t.child,a.memoizedState=tc(n),a.childLanes=nc(e,s,n),t.memoizedState=ec,t=gr(null,a));else if(oa(t),qc(m)){if(s=m.nextSibling&&m.nextSibling.dataset,s)var w=s.dgst;s=w,a=Error(c(419)),a.stack="",a.digest=s,rr({value:a,source:null,stack:null}),t=lc(e,t,n)}else if(it||hl(e,t,n,!1),s=(n&e.childLanes)!==0,it||s){if(s=Qe,s!==null&&(a=Rs(s,n),a!==0&&a!==v.retryLane))throw v.retryLane=a,ka(e,a),jt(s,e,a),Wu;Hc(m)||Ji(),t=lc(e,t,n)}else Hc(m)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Ze=ln(m.nextSibling),xt=t,Me=!0,ta=null,nn=!1,e!==null&&Mf(t,e),t=ac(t,a.children),t.flags|=4096);return t}return r?(ua(),m=a.fallback,r=t.mode,v=e.child,w=v.sibling,a=kn(v,{mode:"hidden",children:a.children}),a.subtreeFlags=v.subtreeFlags&65011712,w!==null?m=kn(w,m):(m=Ra(m,r,n,null),m.flags|=2),m.return=t,a.return=t,a.sibling=m,t.child=a,gr(null,a),a=t.child,m=e.child.memoizedState,m===null?m=tc(n):(r=m.cachePool,r!==null?(v=lt._currentValue,r=r.parent!==v?{parent:v,pool:v}:r):r=Uf(),m={baseLanes:m.baseLanes|n,cachePool:r}),a.memoizedState=m,a.childLanes=nc(e,s,n),t.memoizedState=ec,gr(e.child,a)):(oa(t),n=e.child,e=n.sibling,n=kn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function ac(e,t){return t=Bi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Bi(e,t){return e=Bt(22,e,null,t),e.lanes=0,e}function lc(e,t,n){return La(t,e.child,null,n),e=ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fd(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),yu(e.return,t,n)}function rc(e,t,n,a,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=r,s.treeForkCount=i)}function Pd(e,t,n){var a=t.pendingProps,r=a.revealOrder,i=a.tail;a=a.children;var s=nt.current,m=(s&2)!==0;if(m?(s=s&1|2,t.flags|=128):s&=1,Z(nt,s),Ot(e,t,a,n),a=Me?lr:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fd(e,n,t);else if(e.tag===19)Fd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&_i(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),rc(t,!1,r,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&_i(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}rc(t,!0,n,null,i,a);break;case"together":rc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(hl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ic(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&yi(e)))}function Sb(e,t,n){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),aa(t,lt,e.memoizedState.cache),Na();break;case 27:case 5:wt(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:aa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Cu(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(oa(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Jd(e,t,n):(oa(t),e=qn(e,t,n),e!==null?e.sibling:null);oa(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(hl(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return Pd(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Z(nt,nt.current),a)break;return null;case 22:return t.lanes=0,Yd(e,t,n,t.pendingProps);case 24:aa(t,lt,e.memoizedState.cache)}return qn(e,t,n)}function $d(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)it=!0;else{if(!ic(e,n)&&(t.flags&128)===0)return it=!1,Sb(e,t,n);it=(e.flags&131072)!==0}else it=!1,Me&&(t.flags&1048576)!==0&&Df(t,lr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=qa(t.elementType),t.type=e,typeof e=="function")fu(e)?(a=Ya(e,a),t.tag=1,t=Zd(null,t,e,a,n)):(t.tag=0,t=Iu(null,t,e,a,n));else{if(e!=null){var r=e.$$typeof;if(r===fe){t.tag=11,t=Bd(null,t,e,a,n);break e}else if(r===ne){t.tag=14,t=Ld(null,t,e,a,n);break e}}throw t=ke(e)||e,Error(c(306,t,""))}}return t;case 0:return Iu(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=Ya(a,t.pendingProps),Zd(e,t,a,r,n);case 3:e:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var i=t.memoizedState;r=i.element,Tu(e,t),dr(t,a,null,n);var s=t.memoizedState;if(a=s.cache,aa(t,lt,a),a!==i.cache&&xu(t,[lt],n,!0),fr(),a=s.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Kd(e,t,a,n);break e}else if(a!==r){r=It(Error(c(424)),t),rr(r),t=Kd(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=ln(e.firstChild),xt=t,Me=!0,ta=null,nn=!0,n=Yf(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Na(),a===r){t=qn(e,t,n);break e}Ot(e,t,a,n)}t=t.child}return t;case 26:return qi(e,t),e===null?(n=um(t.type,null,t.pendingProps,null))?t.memoizedState=n:Me||(n=t.type,e=t.pendingProps,a=to(ve.current).createElement(n),a[yt]=t,a[Dt]=e,Et(a,n,e),bt(a),t.stateNode=a):t.memoizedState=um(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return wt(t),e===null&&Me&&(a=t.stateNode=rm(t.type,t.pendingProps,ve.current),xt=t,nn=!0,r=Ze,ba(t.type)?(Bc=r,Ze=ln(a.firstChild)):Ze=r),Ot(e,t,t.pendingProps.children,n),qi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Me&&((r=a=Ze)&&(a=$b(a,t.type,t.pendingProps,nn),a!==null?(t.stateNode=a,xt=t,Ze=ln(a.firstChild),nn=!1,r=!0):r=!1),r||na(t)),wt(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,Nc(r,i)?a=null:s!==null&&Nc(r,s)&&(t.flags|=32),t.memoizedState!==null&&(r=Ru(e,t,db,null,null,n),kr._currentValue=r),qi(e,t),Ot(e,t,a,n),t.child;case 6:return e===null&&Me&&((e=n=Ze)&&(n=Wb(n,t.pendingProps,nn),n!==null?(t.stateNode=n,xt=t,Ze=null,e=!0):e=!1),e||na(t)),null;case 13:return Jd(e,t,n);case 4:return Ie(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=La(t,null,a,n):Ot(e,t,a,n),t.child;case 11:return Bd(e,t,t.type,t.pendingProps,n);case 7:return Ot(e,t,t.pendingProps,n),t.child;case 8:return Ot(e,t,t.pendingProps.children,n),t.child;case 12:return Ot(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,aa(t,t.type,a.value),Ot(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,Ua(t),r=St(r),a=a(r),t.flags|=1,Ot(e,t,a,n),t.child;case 14:return Ld(e,t,t.type,t.pendingProps,n);case 15:return Vd(e,t,t.type,t.pendingProps,n);case 19:return Pd(e,t,n);case 31:return xb(e,t,n);case 22:return Yd(e,t,n,t.pendingProps);case 24:return Ua(t),a=St(lt),e===null?(r=Eu(),r===null&&(r=Qe,i=Su(),r.pooledCache=i,i.refCount++,i!==null&&(r.pooledCacheLanes|=n),r=i),t.memoizedState={parent:a,cache:r},Au(t),aa(t,lt,r)):((e.lanes&n)!==0&&(Tu(e,t),dr(t,null,null,n),fr()),r=e.memoizedState,i=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),aa(t,lt,a)):(a=i.cache,aa(t,lt,a),a!==r.cache&&xu(t,[lt],n,!0))),Ot(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Bn(e){e.flags|=4}function oc(e,t,n,a,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(zh())e.flags|=8192;else throw Ba=Ei,zu}else e.flags&=-16777217}function Wd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hm(t))if(zh())e.flags|=8192;else throw Ba=Ei,zu}function Li(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ms():536870912,e.lanes|=t,Al|=t)}function vr(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Ob(e,t,n){var a=t.pendingProps;switch(pu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return Ke(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),jn(lt),qe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(dl(t)?Bn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,gu())),Ke(t),null;case 26:var r=t.type,i=t.memoizedState;return e===null?(Bn(t),i!==null?(Ke(t),Wd(t,i)):(Ke(t),oc(t,r,null,a,n))):i?i!==e.memoizedState?(Bn(t),Ke(t),Wd(t,i)):(Ke(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Bn(t),Ke(t),oc(t,r,e,a,n)),null;case 27:if(Jt(t),n=ve.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Bn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Ke(t),null}e=W.current,dl(t)?Cf(t):(e=rm(r,a,n),t.stateNode=e,Bn(t))}return Ke(t),null;case 5:if(Jt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Bn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Ke(t),null}if(i=W.current,dl(t))Cf(t);else{var s=to(ve.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?s.createElement(r,{is:a.is}):s.createElement(r)}}i[yt]=t,i[Dt]=a;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=i;e:switch(Et(i,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Bn(t)}}return Ke(t),oc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Bn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=ve.current,dl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=xt,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[yt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Jh(e.nodeValue,n)),e||na(t,!0)}else e=to(e).createTextNode(a),e[yt]=t,t.stateNode=e}return Ke(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=dl(t),n!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[yt]=t}else Na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),e=!1}else n=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Vt(t),t):(Vt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Ke(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=dl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[yt]=t}else Na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),r=!1}else r=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Vt(t),t):(Vt(t),null)}return Vt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==r&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Li(t,t.updateQueue),Ke(t),null);case 4:return qe(),e===null&&Dc(t.stateNode.containerInfo),Ke(t),null;case 10:return jn(t.type),Ke(t),null;case 19:if(B(nt),a=t.memoizedState,a===null)return Ke(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)vr(a,!1);else{if(tt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=_i(e),i!==null){for(t.flags|=128,vr(a,!1),e=i.updateQueue,t.updateQueue=e,Li(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Tf(n,e),n=n.sibling;return Z(nt,nt.current&1|2),Me&&Rn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&J()>Qi&&(t.flags|=128,r=!0,vr(a,!1),t.lanes=4194304)}else{if(!r)if(e=_i(i),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Li(t,e),vr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Me)return Ke(t),null}else 2*J()-a.renderingStartTime>Qi&&n!==536870912&&(t.flags|=128,r=!0,vr(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=J(),e.sibling=null,n=nt.current,Z(nt,r?n&1|2:n&1),Me&&Rn(t,a.treeForkCount),e):(Ke(t),null);case 22:case 23:return Vt(t),Mu(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),n=t.updateQueue,n!==null&&Li(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&B(Ha),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),jn(lt),Ke(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Eb(e,t){switch(pu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jn(lt),qe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Jt(t),null;case 31:if(t.memoizedState!==null){if(Vt(t),t.alternate===null)throw Error(c(340));Na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Vt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(nt),null;case 4:return qe(),null;case 10:return jn(t.type),null;case 22:case 23:return Vt(t),Mu(),e!==null&&B(Ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return jn(lt),null;case 25:return null;default:return null}}function Id(e,t){switch(pu(t),t.tag){case 3:jn(lt),qe();break;case 26:case 27:case 5:Jt(t);break;case 4:qe();break;case 31:t.memoizedState!==null&&Vt(t);break;case 13:Vt(t);break;case 19:B(nt);break;case 10:jn(t.type);break;case 22:case 23:Vt(t),Mu(),e!==null&&B(Ha);break;case 24:jn(lt)}}function yr(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var i=n.create,s=n.inst;a=i(),s.destroy=a}n=n.next}while(n!==r)}}catch(m){Le(t,t.return,m)}}function ca(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var i=r.next;a=i;do{if((a.tag&e)===e){var s=a.inst,m=s.destroy;if(m!==void 0){s.destroy=void 0,r=t;var v=n,w=m;try{w()}catch(U){Le(r,v,U)}}}a=a.next}while(a!==i)}}catch(U){Le(t,t.return,U)}}function eh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Gf(t,n)}catch(a){Le(e,e.return,a)}}}function th(e,t,n){n.props=Ya(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Le(e,t,a)}}function xr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){Le(e,t,r)}}function On(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){Le(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Le(e,t,r)}else n.current=null}function nh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){Le(e,e.return,r)}}function uc(e,t,n){try{var a=e.stateNode;Qb(a,e.type,n,t),a[Dt]=t}catch(r){Le(e,e.return,r)}}function ah(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ba(e.type)||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ah(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Mn));else if(a!==4&&(a===27&&ba(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(sc(e,t,n),e=e.sibling;e!==null;)sc(e,t,n),e=e.sibling}function Vi(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ba(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Vi(e,t,n),e=e.sibling;e!==null;)Vi(e,t,n),e=e.sibling}function lh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Et(t,a,n),t[yt]=e,t[Dt]=n}catch(i){Le(e,e.return,i)}}var Ln=!1,ot=!1,fc=!1,rh=typeof WeakSet=="function"?WeakSet:Set,gt=null;function zb(e,t){if(e=e.containerInfo,kc=uo,e=gf(e),lu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,m=-1,v=-1,w=0,U=0,L=e,M=null;t:for(;;){for(var k;L!==n||r!==0&&L.nodeType!==3||(m=s+r),L!==i||a!==0&&L.nodeType!==3||(v=s+a),L.nodeType===3&&(s+=L.nodeValue.length),(k=L.firstChild)!==null;)M=L,L=k;for(;;){if(L===e)break t;if(M===n&&++w===r&&(m=s),M===i&&++U===a&&(v=s),(k=L.nextSibling)!==null)break;L=M,M=L.parentNode}L=k}n=m===-1||v===-1?null:{start:m,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rc={focusedElem:e,selectionRange:n},uo=!1,gt=t;gt!==null;)if(t=gt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,gt=e;else for(;gt!==null;){switch(t=gt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,r=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var te=Ya(n.type,r);e=a.getSnapshotBeforeUpdate(te,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(he){Le(n,n.return,he)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Uc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Uc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,gt=e;break}gt=t.return}}function ih(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Yn(e,n),a&4&&yr(5,n);break;case 1:if(Yn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){Le(n,n.return,s)}else{var r=Ya(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Le(n,n.return,s)}}a&64&&eh(n),a&512&&xr(n,n.return);break;case 3:if(Yn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Gf(e,t)}catch(s){Le(n,n.return,s)}}break;case 27:t===null&&a&4&&lh(n);case 26:case 5:Yn(e,n),t===null&&a&4&&nh(n),a&512&&xr(n,n.return);break;case 12:Yn(e,n);break;case 31:Yn(e,n),a&4&&ch(e,n);break;case 13:Yn(e,n),a&4&&sh(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Rb.bind(null,n),Ib(e,n))));break;case 22:if(a=n.memoizedState!==null||Ln,!a){t=t!==null&&t.memoizedState!==null||ot,r=Ln;var i=ot;Ln=a,(ot=t)&&!i?Xn(e,n,(n.subtreeFlags&8772)!==0):Yn(e,n),Ln=r,ot=i}break;case 30:break;default:Yn(e,n)}}function oh(e){var t=e.alternate;t!==null&&(e.alternate=null,oh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Vo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Ct=!1;function Vn(e,t,n){for(n=n.child;n!==null;)uh(e,t,n),n=n.sibling}function uh(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Ta,n)}catch{}switch(n.tag){case 26:ot||On(n,t),Vn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ot||On(n,t);var a=Je,r=Ct;ba(n.type)&&(Je=n.stateNode,Ct=!1),Vn(e,t,n),Dr(n.stateNode),Je=a,Ct=r;break;case 5:ot||On(n,t);case 6:if(a=Je,r=Ct,Je=null,Vn(e,t,n),Je=a,Ct=r,Je!==null)if(Ct)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(n.stateNode)}catch(i){Le(n,t,i)}else try{Je.removeChild(n.stateNode)}catch(i){Le(n,t,i)}break;case 18:Je!==null&&(Ct?(e=Je,em(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Rl(e)):em(Je,n.stateNode));break;case 4:a=Je,r=Ct,Je=n.stateNode.containerInfo,Ct=!0,Vn(e,t,n),Je=a,Ct=r;break;case 0:case 11:case 14:case 15:ca(2,n,t),ot||ca(4,n,t),Vn(e,t,n);break;case 1:ot||(On(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&th(n,t,a)),Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:ot=(a=ot)||n.memoizedState!==null,Vn(e,t,n),ot=a;break;default:Vn(e,t,n)}}function ch(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Rl(e)}catch(n){Le(t,t.return,n)}}}function sh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rl(e)}catch(n){Le(t,t.return,n)}}function Ab(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rh),t;default:throw Error(c(435,e.tag))}}function Yi(e,t){var n=Ab(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var r=Nb.bind(null,e,a);a.then(r,r)}})}function kt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],i=e,s=t,m=s;e:for(;m!==null;){switch(m.tag){case 27:if(ba(m.type)){Je=m.stateNode,Ct=!1;break e}break;case 5:Je=m.stateNode,Ct=!1;break e;case 3:case 4:Je=m.stateNode.containerInfo,Ct=!0;break e}m=m.return}if(Je===null)throw Error(c(160));uh(i,s,r),Je=null,Ct=!1,i=r.alternate,i!==null&&(i.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)fh(t,e),t=t.sibling}var cn=null;function fh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kt(t,e),Rt(e),a&4&&(ca(3,e,e.return),yr(3,e),ca(5,e,e.return));break;case 1:kt(t,e),Rt(e),a&512&&(ot||n===null||On(n,n.return)),a&64&&Ln&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=cn;if(kt(t,e),Rt(e),a&512&&(ot||n===null||On(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":i=r.getElementsByTagName("title")[0],(!i||i[Kl]||i[yt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=r.createElement(a),r.head.insertBefore(i,r.querySelector("head > title"))),Et(i,a,n),i[yt]=e,bt(i),a=i;break e;case"link":var s=fm("link","href",r).get(a+(n.href||""));if(s){for(var m=0;m<s.length;m++)if(i=s[m],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(m,1);break t}}i=r.createElement(a),Et(i,a,n),r.head.appendChild(i);break;case"meta":if(s=fm("meta","content",r).get(a+(n.content||""))){for(m=0;m<s.length;m++)if(i=s[m],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(m,1);break t}}i=r.createElement(a),Et(i,a,n),r.head.appendChild(i);break;default:throw Error(c(468,a))}i[yt]=e,bt(i),a=i}e.stateNode=a}else dm(r,e.type,e.stateNode);else e.stateNode=sm(r,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?dm(r,e.type,e.stateNode):sm(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&uc(e,e.memoizedProps,n.memoizedProps)}break;case 27:kt(t,e),Rt(e),a&512&&(ot||n===null||On(n,n.return)),n!==null&&a&4&&uc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(kt(t,e),Rt(e),a&512&&(ot||n===null||On(n,n.return)),e.flags&32){r=e.stateNode;try{nl(r,"")}catch(te){Le(e,e.return,te)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,uc(e,r,n!==null?n.memoizedProps:r)),a&1024&&(fc=!0);break;case 6:if(kt(t,e),Rt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(te){Le(e,e.return,te)}}break;case 3:if(lo=null,r=cn,cn=no(t.containerInfo),kt(t,e),cn=r,Rt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Rl(t.containerInfo)}catch(te){Le(e,e.return,te)}fc&&(fc=!1,dh(e));break;case 4:a=cn,cn=no(e.stateNode.containerInfo),kt(t,e),Rt(e),cn=a;break;case 12:kt(t,e),Rt(e);break;case 31:kt(t,e),Rt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Yi(e,a)));break;case 13:kt(t,e),Rt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Gi=J()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Yi(e,a)));break;case 22:r=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,w=Ln,U=ot;if(Ln=w||r,ot=U||v,kt(t,e),ot=U,Ln=w,Rt(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||v||Ln||ot||Xa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(i=v.stateNode,r)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{m=v.stateNode;var L=v.memoizedProps.style,M=L!=null&&L.hasOwnProperty("display")?L.display:null;m.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(te){Le(v,v.return,te)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=r?"":v.memoizedProps}catch(te){Le(v,v.return,te)}}}else if(t.tag===18){if(n===null){v=t;try{var k=v.stateNode;r?tm(k,!0):tm(v.stateNode,!1)}catch(te){Le(v,v.return,te)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Yi(e,n))));break;case 19:kt(t,e),Rt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Yi(e,a)));break;case 30:break;case 21:break;default:kt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(ah(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var r=n.stateNode,i=cc(e);Vi(e,i,r);break;case 5:var s=n.stateNode;n.flags&32&&(nl(s,""),n.flags&=-33);var m=cc(e);Vi(e,m,s);break;case 3:case 4:var v=n.stateNode.containerInfo,w=cc(e);sc(e,w,v);break;default:throw Error(c(161))}}catch(U){Le(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;dh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Yn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ih(e,t.alternate,t),t=t.sibling}function Xa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),Xa(t);break;case 1:On(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&th(t,t.return,n),Xa(t);break;case 27:Dr(t.stateNode);case 26:case 5:On(t,t.return),Xa(t);break;case 22:t.memoizedState===null&&Xa(t);break;case 30:Xa(t);break;default:Xa(t)}e=e.sibling}}function Xn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:Xn(r,i,n),yr(4,i);break;case 1:if(Xn(r,i,n),a=i,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(w){Le(a,a.return,w)}if(a=i,r=a.updateQueue,r!==null){var m=a.stateNode;try{var v=r.shared.hiddenCallbacks;if(v!==null)for(r.shared.hiddenCallbacks=null,r=0;r<v.length;r++)Xf(v[r],m)}catch(w){Le(a,a.return,w)}}n&&s&64&&eh(i),xr(i,i.return);break;case 27:lh(i);case 26:case 5:Xn(r,i,n),n&&a===null&&s&4&&nh(i),xr(i,i.return);break;case 12:Xn(r,i,n);break;case 31:Xn(r,i,n),n&&s&4&&ch(r,i);break;case 13:Xn(r,i,n),n&&s&4&&sh(r,i);break;case 22:i.memoizedState===null&&Xn(r,i,n),xr(i,i.return);break;case 30:break;default:Xn(r,i,n)}t=t.sibling}}function dc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ir(n))}function hc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ir(e))}function sn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hh(e,t,n,a),t=t.sibling}function hh(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:sn(e,t,n,a),r&2048&&yr(9,t);break;case 1:sn(e,t,n,a);break;case 3:sn(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ir(e)));break;case 12:if(r&2048){sn(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,s=i.id,m=i.onPostCommit;typeof m=="function"&&m(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Le(t,t.return,v)}}else sn(e,t,n,a);break;case 31:sn(e,t,n,a);break;case 13:sn(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?sn(e,t,n,a):Sr(e,t):i._visibility&2?sn(e,t,n,a):(i._visibility|=2,Ol(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),r&2048&&dc(s,t);break;case 24:sn(e,t,n,a),r&2048&&hc(t.alternate,t);break;default:sn(e,t,n,a)}}function Ol(e,t,n,a,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,s=t,m=n,v=a,w=s.flags;switch(s.tag){case 0:case 11:case 15:Ol(i,s,m,v,r),yr(8,s);break;case 23:break;case 22:var U=s.stateNode;s.memoizedState!==null?U._visibility&2?Ol(i,s,m,v,r):Sr(i,s):(U._visibility|=2,Ol(i,s,m,v,r)),r&&w&2048&&dc(s.alternate,s);break;case 24:Ol(i,s,m,v,r),r&&w&2048&&hc(s.alternate,s);break;default:Ol(i,s,m,v,r)}t=t.sibling}}function Sr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:Sr(n,a),r&2048&&dc(a.alternate,a);break;case 24:Sr(n,a),r&2048&&hc(a.alternate,a);break;default:Sr(n,a)}t=t.sibling}}var Or=8192;function El(e,t,n){if(e.subtreeFlags&Or)for(e=e.child;e!==null;)mh(e,t,n),e=e.sibling}function mh(e,t,n){switch(e.tag){case 26:El(e,t,n),e.flags&Or&&e.memoizedState!==null&&fg(n,cn,e.memoizedState,e.memoizedProps);break;case 5:El(e,t,n);break;case 3:case 4:var a=cn;cn=no(e.stateNode.containerInfo),El(e,t,n),cn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Or,Or=16777216,El(e,t,n),Or=a):El(e,t,n));break;default:El(e,t,n)}}function ph(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Er(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];gt=a,gh(a,e)}ph(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bh(e),e=e.sibling}function bh(e){switch(e.tag){case 0:case 11:case 15:Er(e),e.flags&2048&&ca(9,e,e.return);break;case 3:Er(e);break;case 12:Er(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xi(e)):Er(e);break;default:Er(e)}}function Xi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];gt=a,gh(a,e)}ph(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ca(8,t,t.return),Xi(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Xi(t));break;default:Xi(t)}e=e.sibling}}function gh(e,t){for(;gt!==null;){var n=gt;switch(n.tag){case 0:case 11:case 15:ca(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ir(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,gt=a;else e:for(n=e;gt!==null;){a=gt;var r=a.sibling,i=a.return;if(oh(a),a===n){gt=null;break e}if(r!==null){r.return=i,gt=r;break e}gt=i}}}var Tb={getCacheForType:function(e){var t=St(lt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return St(lt).controller.signal}},_b=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Qe=null,ze=null,_e=0,Be=0,Yt=null,sa=!1,zl=!1,mc=!1,Gn=0,tt=0,fa=0,Ga=0,pc=0,Xt=0,Al=0,zr=null,Nt=null,bc=!1,Gi=0,vh=0,Qi=1/0,Zi=null,da=null,st=0,ha=null,Tl=null,Qn=0,gc=0,vc=null,yh=null,Ar=0,yc=null;function Gt(){return(Ue&2)!==0&&_e!==0?_e&-_e:C.T!==null?Ac():Ns()}function xh(){if(Xt===0)if((_e&536870912)===0||Me){var e=ei;ei<<=1,(ei&3932160)===0&&(ei=262144),Xt=e}else Xt=536870912;return e=Lt.current,e!==null&&(e.flags|=32),Xt}function jt(e,t,n){(e===Qe&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(_l(e,0),ma(e,_e,Xt,!1)),Zl(e,n),((Ue&2)===0||e!==Qe)&&(e===Qe&&((Ue&2)===0&&(Ga|=n),tt===4&&ma(e,_e,Xt,!1)),En(e))}function Sh(e,t,n){if((Ue&6)!==0)throw Error(c(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ql(e,t),r=a?Mb(e,t):Sc(e,t,!0),i=a;do{if(r===0){zl&&!a&&ma(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!wb(n)){r=Sc(e,t,!1),i=!1;continue}if(r===2){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var m=e;r=zr;var v=m.current.memoizedState.isDehydrated;if(v&&(_l(m,s).flags|=256),s=Sc(m,s,!1),s!==2){if(mc&&!v){m.errorRecoveryDisabledLanes|=i,Ga|=i,r=4;break e}i=Nt,Nt=r,i!==null&&(Nt===null?Nt=i:Nt.push.apply(Nt,i))}r=s}if(i=!1,r!==2)continue}}if(r===1){_l(e,0),ma(e,t,0,!0);break}e:{switch(a=e,i=r,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ma(a,t,Xt,!sa);break e;case 2:Nt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=Gi+300-J(),10<r)){if(ma(a,t,Xt,!sa),ni(a,0,!0)!==0)break e;Qn=t,a.timeoutHandle=Wh(Oh.bind(null,a,n,Nt,Zi,bc,t,Xt,Ga,Al,sa,i,"Throttled",-0,0),r);break e}Oh(a,n,Nt,Zi,bc,t,Xt,Ga,Al,sa,i,null,-0,0)}}break}while(!0);En(e)}function Oh(e,t,n,a,r,i,s,m,v,w,U,L,M,k){if(e.timeoutHandle=-1,L=t.subtreeFlags,L&8192||(L&16785408)===16785408){L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Mn},mh(t,i,L);var te=(i&62914560)===i?Gi-J():(i&4194048)===i?vh-J():0;if(te=dg(L,te),te!==null){Qn=i,e.cancelPendingCommit=te(Mh.bind(null,e,t,i,n,a,r,s,m,v,U,L,null,M,k)),ma(e,i,s,!w);return}}Mh(e,t,i,n,a,r,s,m,v)}function wb(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],i=r.getSnapshot;r=r.value;try{if(!qt(i(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(e,t,n,a){t&=~pc,t&=~Ga,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var i=31-At(r),s=1<<i;a[i]=-1,r&=~s}n!==0&&Cs(e,n,t)}function Ki(){return(Ue&6)===0?(Tr(0),!1):!0}function xc(){if(ze!==null){if(Be===0)var e=ze.return;else e=ze,Nn=ja=null,Uu(e),gl=null,ur=0,e=ze;for(;e!==null;)Id(e.alternate,e),e=e.return;ze=null}}function _l(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Qn=0,xc(),Qe=e,ze=n=kn(e.current,null),_e=t,Be=0,Yt=null,sa=!1,zl=Ql(e,t),mc=!1,Al=Xt=pc=Ga=fa=tt=0,Nt=zr=null,bc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-At(a),i=1<<r;t|=e[r],a&=~i}return Gn=t,mi(),n}function Eh(e,t){ye=null,C.H=br,t===bl||t===Oi?(t=Bf(),Be=3):t===zu?(t=Bf(),Be=4):Be=t===Wu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Yt=t,ze===null&&(tt=1,Ui(e,It(t,e.current)))}function zh(){var e=Lt.current;return e===null?!0:(_e&4194048)===_e?an===null:(_e&62914560)===_e||(_e&536870912)!==0?e===an:!1}function Ah(){var e=C.H;return C.H=br,e===null?br:e}function Th(){var e=C.A;return C.A=Tb,e}function Ji(){tt=4,sa||(_e&4194048)!==_e&&Lt.current!==null||(zl=!0),(fa&134217727)===0&&(Ga&134217727)===0||Qe===null||ma(Qe,_e,Xt,!1)}function Sc(e,t,n){var a=Ue;Ue|=2;var r=Ah(),i=Th();(Qe!==e||_e!==t)&&(Zi=null,_l(e,t)),t=!1;var s=tt;e:do try{if(Be!==0&&ze!==null){var m=ze,v=Yt;switch(Be){case 8:xc(),s=6;break e;case 3:case 2:case 9:case 6:Lt.current===null&&(t=!0);var w=Be;if(Be=0,Yt=null,wl(e,m,v,w),n&&zl){s=0;break e}break;default:w=Be,Be=0,Yt=null,wl(e,m,v,w)}}Db(),s=tt;break}catch(U){Eh(e,U)}while(!0);return t&&e.shellSuspendCounter++,Nn=ja=null,Ue=a,C.H=r,C.A=i,ze===null&&(Qe=null,_e=0,mi()),s}function Db(){for(;ze!==null;)_h(ze)}function Mb(e,t){var n=Ue;Ue|=2;var a=Ah(),r=Th();Qe!==e||_e!==t?(Zi=null,Qi=J()+500,_l(e,t)):zl=Ql(e,t);e:do try{if(Be!==0&&ze!==null){t=ze;var i=Yt;t:switch(Be){case 1:Be=0,Yt=null,wl(e,t,i,1);break;case 2:case 9:if(Hf(i)){Be=0,Yt=null,wh(t);break}t=function(){Be!==2&&Be!==9||Qe!==e||(Be=7),En(e)},i.then(t,t);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:Hf(i)?(Be=0,Yt=null,wh(t)):(Be=0,Yt=null,wl(e,t,i,7));break;case 5:var s=null;switch(ze.tag){case 26:s=ze.memoizedState;case 5:case 27:var m=ze;if(s?hm(s):m.stateNode.complete){Be=0,Yt=null;var v=m.sibling;if(v!==null)ze=v;else{var w=m.return;w!==null?(ze=w,Fi(w)):ze=null}break t}}Be=0,Yt=null,wl(e,t,i,5);break;case 6:Be=0,Yt=null,wl(e,t,i,6);break;case 8:xc(),tt=6;break e;default:throw Error(c(462))}}Cb();break}catch(U){Eh(e,U)}while(!0);return Nn=ja=null,C.H=a,C.A=r,Ue=n,ze!==null?0:(Qe=null,_e=0,mi(),tt)}function Cb(){for(;ze!==null&&!D();)_h(ze)}function _h(e){var t=$d(e.alternate,e,Gn);e.memoizedProps=e.pendingProps,t===null?Fi(e):ze=t}function wh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Qd(n,t,t.pendingProps,t.type,void 0,_e);break;case 11:t=Qd(n,t,t.pendingProps,t.type.render,t.ref,_e);break;case 5:Uu(t);default:Id(n,t),t=ze=Tf(t,Gn),t=$d(n,t,Gn)}e.memoizedProps=e.pendingProps,t===null?Fi(e):ze=t}function wl(e,t,n,a){Nn=ja=null,Uu(t),gl=null,ur=0;var r=t.return;try{if(yb(e,r,t,n,_e)){tt=1,Ui(e,It(n,e.current)),ze=null;return}}catch(i){if(r!==null)throw ze=r,i;tt=1,Ui(e,It(n,e.current)),ze=null;return}t.flags&32768?(Me||a===1?e=!0:zl||(_e&536870912)!==0?e=!1:(sa=e=!0,(a===2||a===9||a===3||a===6)&&(a=Lt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Dh(t,e)):Fi(t)}function Fi(e){var t=e;do{if((t.flags&32768)!==0){Dh(t,sa);return}e=t.return;var n=Ob(t.alternate,t,Gn);if(n!==null){ze=n;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);tt===0&&(tt=5)}function Dh(e,t){do{var n=Eb(e.alternate,e);if(n!==null){n.flags&=32767,ze=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ze=e;return}ze=e=n}while(e!==null);tt=6,ze=null}function Mh(e,t,n,a,r,i,s,m,v){e.cancelPendingCommit=null;do Pi();while(st!==0);if((Ue&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=cu,sp(e,n,i,s,m,v),e===Qe&&(ze=Qe=null,_e=0),Tl=t,ha=e,Qn=n,gc=i,vc=r,yh=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,jb(Ce,function(){return jh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null,r=Q.p,Q.p=2,s=Ue,Ue|=4;try{zb(e,t,n)}finally{Ue=s,Q.p=r,C.T=a}}st=1,Ch(),kh(),Rh()}}function Ch(){if(st===1){st=0;var e=ha,t=Tl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=C.T,C.T=null;var a=Q.p;Q.p=2;var r=Ue;Ue|=4;try{fh(t,e);var i=Rc,s=gf(e.containerInfo),m=i.focusedElem,v=i.selectionRange;if(s!==m&&m&&m.ownerDocument&&bf(m.ownerDocument.documentElement,m)){if(v!==null&&lu(m)){var w=v.start,U=v.end;if(U===void 0&&(U=w),"selectionStart"in m)m.selectionStart=w,m.selectionEnd=Math.min(U,m.value.length);else{var L=m.ownerDocument||document,M=L&&L.defaultView||window;if(M.getSelection){var k=M.getSelection(),te=m.textContent.length,he=Math.min(v.start,te),Ge=v.end===void 0?he:Math.min(v.end,te);!k.extend&&he>Ge&&(s=Ge,Ge=he,he=s);var z=pf(m,he),x=pf(m,Ge);if(z&&x&&(k.rangeCount!==1||k.anchorNode!==z.node||k.anchorOffset!==z.offset||k.focusNode!==x.node||k.focusOffset!==x.offset)){var _=L.createRange();_.setStart(z.node,z.offset),k.removeAllRanges(),he>Ge?(k.addRange(_),k.extend(x.node,x.offset)):(_.setEnd(x.node,x.offset),k.addRange(_))}}}}for(L=[],k=m;k=k.parentNode;)k.nodeType===1&&L.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<L.length;m++){var q=L[m];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}uo=!!kc,Rc=kc=null}finally{Ue=r,Q.p=a,C.T=n}}e.current=t,st=2}}function kh(){if(st===2){st=0;var e=ha,t=Tl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=C.T,C.T=null;var a=Q.p;Q.p=2;var r=Ue;Ue|=4;try{ih(e,t.alternate,t)}finally{Ue=r,Q.p=a,C.T=n}}st=3}}function Rh(){if(st===4||st===3){st=0,j();var e=ha,t=Tl,n=Qn,a=yh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?st=5:(st=0,Tl=ha=null,Nh(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(da=null),Bo(n),t=t.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Ta,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=C.T,r=Q.p,Q.p=2,C.T=null;try{for(var i=e.onRecoverableError,s=0;s<a.length;s++){var m=a[s];i(m.value,{componentStack:m.stack})}}finally{C.T=t,Q.p=r}}(Qn&3)!==0&&Pi(),En(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===yc?Ar++:(Ar=0,yc=e):Ar=0,Tr(0)}}function Nh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ir(t)))}function Pi(){return Ch(),kh(),Rh(),jh()}function jh(){if(st!==5)return!1;var e=ha,t=gc;gc=0;var n=Bo(Qn),a=C.T,r=Q.p;try{Q.p=32>n?32:n,C.T=null,n=vc,vc=null;var i=ha,s=Qn;if(st=0,Tl=ha=null,Qn=0,(Ue&6)!==0)throw Error(c(331));var m=Ue;if(Ue|=4,bh(i.current),hh(i,i.current,s,n),Ue=m,Tr(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Ta,i)}catch{}return!0}finally{Q.p=r,C.T=a,Nh(e,t)}}function Uh(e,t,n){t=It(n,t),t=$u(e.stateNode,t,2),e=ia(e,t,2),e!==null&&(Zl(e,2),En(e))}function Le(e,t,n){if(e.tag===3)Uh(e,e,n);else for(;t!==null;){if(t.tag===3){Uh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(da===null||!da.has(a))){e=It(n,e),n=Hd(2),a=ia(t,n,2),a!==null&&(qd(n,a,t,e),Zl(a,2),En(a));break}}t=t.return}}function Oc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new _b;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(mc=!0,r.add(n),e=kb.bind(null,e,t,n),t.then(e,e))}function kb(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Qe===e&&(_e&n)===n&&(tt===4||tt===3&&(_e&62914560)===_e&&300>J()-Gi?(Ue&2)===0&&_l(e,0):pc|=n,Al===_e&&(Al=0)),En(e)}function Hh(e,t){t===0&&(t=Ms()),e=ka(e,t),e!==null&&(Zl(e,t),En(e))}function Rb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hh(e,n)}function Nb(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),Hh(e,n)}function jb(e,t){return Fa(e,t)}var $i=null,Dl=null,Ec=!1,Wi=!1,zc=!1,pa=0;function En(e){e!==Dl&&e.next===null&&(Dl===null?$i=Dl=e:Dl=Dl.next=e),Wi=!0,Ec||(Ec=!0,Hb())}function Tr(e,t){if(!zc&&Wi){zc=!0;do for(var n=!1,a=$i;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var i=0;else{var s=a.suspendedLanes,m=a.pingedLanes;i=(1<<31-At(42|e)+1)-1,i&=r&~(s&~m),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Vh(a,i))}else i=_e,i=ni(a,a===Qe?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ql(a,i)||(n=!0,Vh(a,i));a=a.next}while(n);zc=!1}}function Ub(){qh()}function qh(){Wi=Ec=!1;var e=0;pa!==0&&Kb()&&(e=pa);for(var t=J(),n=null,a=$i;a!==null;){var r=a.next,i=Bh(a,t);i===0?(a.next=null,n===null?$i=r:n.next=r,r===null&&(Dl=n)):(n=a,(e!==0||(i&3)!==0)&&(Wi=!0)),a=r}st!==0&&st!==5||Tr(e),pa!==0&&(pa=0)}function Bh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-At(i),m=1<<s,v=r[s];v===-1?((m&n)===0||(m&a)!==0)&&(r[s]=cp(m,t)):v<=t&&(e.expiredLanes|=m),i&=~m}if(t=Qe,n=_e,n=ni(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&y(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ql(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&y(a),Bo(n)){case 2:case 8:n=oe;break;case 32:n=Ce;break;case 268435456:n=pt;break;default:n=Ce}return a=Lh.bind(null,e),n=Fa(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&y(a),e.callbackPriority=2,e.callbackNode=null,2}function Lh(e,t){if(st!==0&&st!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Pi()&&e.callbackNode!==n)return null;var a=_e;return a=ni(e,e===Qe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Sh(e,a,t),Bh(e,J()),e.callbackNode!=null&&e.callbackNode===n?Lh.bind(null,e):null)}function Vh(e,t){if(Pi())return null;Sh(e,t,!0)}function Hb(){Fb(function(){(Ue&6)!==0?Fa(K,Ub):qh()})}function Ac(){if(pa===0){var e=ml;e===0&&(e=Ir,Ir<<=1,(Ir&261888)===0&&(Ir=256)),pa=e}return pa}function Yh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ii(""+e)}function Xh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function qb(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var i=Yh((r[Dt]||null).action),s=a.submitter;s&&(t=(t=s[Dt]||null)?Yh(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var m=new si("action","action",null,a,r);e.push({event:m,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(pa!==0){var v=s?Xh(r,s):new FormData(r);Qu(n,{pending:!0,data:v,method:r.method,action:i},null,v)}}else typeof i=="function"&&(m.preventDefault(),v=s?Xh(r,s):new FormData(r),Qu(n,{pending:!0,data:v,method:r.method,action:i},i,v))},currentTarget:r}]})}}for(var Tc=0;Tc<uu.length;Tc++){var _c=uu[Tc],Bb=_c.toLowerCase(),Lb=_c[0].toUpperCase()+_c.slice(1);un(Bb,"on"+Lb)}un(xf,"onAnimationEnd"),un(Sf,"onAnimationIteration"),un(Of,"onAnimationStart"),un("dblclick","onDoubleClick"),un("focusin","onFocus"),un("focusout","onBlur"),un(nb,"onTransitionRun"),un(ab,"onTransitionStart"),un(lb,"onTransitionCancel"),un(Ef,"onTransitionEnd"),el("onMouseEnter",["mouseout","mouseover"]),el("onMouseLeave",["mouseout","mouseover"]),el("onPointerEnter",["pointerout","pointerover"]),el("onPointerLeave",["pointerout","pointerover"]),wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wa("onBeforeInput",["compositionend","keypress","textInput","paste"]),wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_r));function Gh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var s=a.length-1;0<=s;s--){var m=a[s],v=m.instance,w=m.currentTarget;if(m=m.listener,v!==i&&r.isPropagationStopped())break e;i=m,r.currentTarget=w;try{i(r)}catch(U){hi(U)}r.currentTarget=null,i=v}else for(s=0;s<a.length;s++){if(m=a[s],v=m.instance,w=m.currentTarget,m=m.listener,v!==i&&r.isPropagationStopped())break e;i=m,r.currentTarget=w;try{i(r)}catch(U){hi(U)}r.currentTarget=null,i=v}}}}function Ae(e,t){var n=t[Lo];n===void 0&&(n=t[Lo]=new Set);var a=e+"__bubble";n.has(a)||(Qh(t,e,2,!1),n.add(a))}function wc(e,t,n){var a=0;t&&(a|=4),Qh(n,e,a,t)}var Ii="_reactListening"+Math.random().toString(36).slice(2);function Dc(e){if(!e[Ii]){e[Ii]=!0,Hs.forEach(function(n){n!=="selectionchange"&&(Vb.has(n)||wc(n,!1,e),wc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ii]||(t[Ii]=!0,wc("selectionchange",!1,t))}}function Qh(e,t,n,a){switch(xm(t)){case 2:var r=pg;break;case 8:r=bg;break;default:r=Gc}n=r.bind(null,t,n,e),r=void 0,!Fo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Mc(e,t,n,a,r){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var m=a.stateNode.containerInfo;if(m===r)break;if(s===4)for(s=a.return;s!==null;){var v=s.tag;if((v===3||v===4)&&s.stateNode.containerInfo===r)return;s=s.return}for(;m!==null;){if(s=$a(m),s===null)return;if(v=s.tag,v===5||v===6||v===26||v===27){a=i=s;continue e}m=m.parentNode}}a=a.return}Fs(function(){var w=i,U=Ko(n),L=[];e:{var M=zf.get(e);if(M!==void 0){var k=si,te=e;switch(e){case"keypress":if(ui(n)===0)break e;case"keydown":case"keyup":k=Np;break;case"focusin":te="focus",k=Io;break;case"focusout":te="blur",k=Io;break;case"beforeblur":case"afterblur":k=Io;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Op;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Hp;break;case xf:case Sf:case Of:k=Ap;break;case Ef:k=Bp;break;case"scroll":case"scrollend":k=xp;break;case"wheel":k=Vp;break;case"copy":case"cut":case"paste":k=_p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ef;break;case"toggle":case"beforetoggle":k=Xp}var he=(t&4)!==0,Ge=!he&&(e==="scroll"||e==="scrollend"),z=he?M!==null?M+"Capture":null:M;he=[];for(var x=w,_;x!==null;){var q=x;if(_=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||_===null||z===null||(q=Fl(x,z),q!=null&&he.push(wr(x,q,_))),Ge)break;x=x.return}0<he.length&&(M=new k(M,te,null,n,U),L.push({event:M,listeners:he}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",M&&n!==Zo&&(te=n.relatedTarget||n.fromElement)&&($a(te)||te[Pa]))break e;if((k||M)&&(M=U.window===U?U:(M=U.ownerDocument)?M.defaultView||M.parentWindow:window,k?(te=n.relatedTarget||n.toElement,k=w,te=te?$a(te):null,te!==null&&(Ge=f(te),he=te.tag,te!==Ge||he!==5&&he!==27&&he!==6)&&(te=null)):(k=null,te=w),k!==te)){if(he=Ws,q="onMouseLeave",z="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(he=ef,q="onPointerLeave",z="onPointerEnter",x="pointer"),Ge=k==null?M:Jl(k),_=te==null?M:Jl(te),M=new he(q,x+"leave",k,n,U),M.target=Ge,M.relatedTarget=_,q=null,$a(U)===w&&(he=new he(z,x+"enter",te,n,U),he.target=_,he.relatedTarget=Ge,q=he),Ge=q,k&&te)t:{for(he=Yb,z=k,x=te,_=0,q=z;q;q=he(q))_++;q=0;for(var se=x;se;se=he(se))q++;for(;0<_-q;)z=he(z),_--;for(;0<q-_;)x=he(x),q--;for(;_--;){if(z===x||x!==null&&z===x.alternate){he=z;break t}z=he(z),x=he(x)}he=null}else he=null;k!==null&&Zh(L,M,k,he,!1),te!==null&&Ge!==null&&Zh(L,Ge,te,he,!0)}}e:{if(M=w?Jl(w):window,k=M.nodeName&&M.nodeName.toLowerCase(),k==="select"||k==="input"&&M.type==="file")var Re=cf;else if(of(M))if(sf)Re=Ip;else{Re=$p;var re=Pp}else k=M.nodeName,!k||k.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?w&&Qo(w.elementType)&&(Re=cf):Re=Wp;if(Re&&(Re=Re(e,w))){uf(L,Re,n,U);break e}re&&re(e,M,w),e==="focusout"&&w&&M.type==="number"&&w.memoizedProps.value!=null&&Go(M,"number",M.value)}switch(re=w?Jl(w):window,e){case"focusin":(of(re)||re.contentEditable==="true")&&(il=re,ru=w,ar=null);break;case"focusout":ar=ru=il=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,vf(L,n,U);break;case"selectionchange":if(tb)break;case"keydown":case"keyup":vf(L,n,U)}var Se;if(tu)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else rl?lf(e,n)&&(we="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(we="onCompositionStart");we&&(tf&&n.locale!=="ko"&&(rl||we!=="onCompositionStart"?we==="onCompositionEnd"&&rl&&(Se=Ps()):(In=U,Po="value"in In?In.value:In.textContent,rl=!0)),re=eo(w,we),0<re.length&&(we=new Is(we,e,null,n,U),L.push({event:we,listeners:re}),Se?we.data=Se:(Se=rf(n),Se!==null&&(we.data=Se)))),(Se=Qp?Zp(e,n):Kp(e,n))&&(we=eo(w,"onBeforeInput"),0<we.length&&(re=new Is("onBeforeInput","beforeinput",null,n,U),L.push({event:re,listeners:we}),re.data=Se)),qb(L,e,w,n,U)}Gh(L,t)})}function wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function eo(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,i=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||i===null||(r=Fl(e,n),r!=null&&a.unshift(wr(e,r,i)),r=Fl(e,t),r!=null&&a.push(wr(e,r,i))),e.tag===3)return a;e=e.return}return[]}function Yb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zh(e,t,n,a,r){for(var i=t._reactName,s=[];n!==null&&n!==a;){var m=n,v=m.alternate,w=m.stateNode;if(m=m.tag,v!==null&&v===a)break;m!==5&&m!==26&&m!==27||w===null||(v=w,r?(w=Fl(n,i),w!=null&&s.unshift(wr(n,w,v))):r||(w=Fl(n,i),w!=null&&s.push(wr(n,w,v)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Xb=/\r\n?/g,Gb=/\u0000|\uFFFD/g;function Kh(e){return(typeof e=="string"?e:""+e).replace(Xb,`
`).replace(Gb,"")}function Jh(e,t){return t=Kh(t),Kh(e)===t}function Xe(e,t,n,a,r,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||nl(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&nl(e,""+a);break;case"className":li(e,"class",a);break;case"tabIndex":li(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":li(e,n,a);break;case"style":Ks(e,a,i);break;case"data":if(t!=="object"){li(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ii(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Xe(e,t,"name",r.name,r,null),Xe(e,t,"formEncType",r.formEncType,r,null),Xe(e,t,"formMethod",r.formMethod,r,null),Xe(e,t,"formTarget",r.formTarget,r,null)):(Xe(e,t,"encType",r.encType,r,null),Xe(e,t,"method",r.method,r,null),Xe(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ii(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Mn);break;case"onScroll":a!=null&&Ae("scroll",e);break;case"onScrollEnd":a!=null&&Ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=ii(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ae("beforetoggle",e),Ae("toggle",e),ai(e,"popover",a);break;case"xlinkActuate":Dn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Dn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Dn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Dn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Dn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Dn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Dn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Dn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Dn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ai(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=vp.get(n)||n,ai(e,n,a))}}function Cc(e,t,n,a,r,i){switch(n){case"style":Ks(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?nl(e,a):(typeof a=="number"||typeof a=="bigint")&&nl(e,""+a);break;case"onScroll":a!=null&&Ae("scroll",e);break;case"onScrollEnd":a!=null&&Ae("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Mn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qs.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),i=e[Dt]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,r),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):ai(e,n,a)}}}function Et(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",e),Ae("load",e);var a=!1,r=!1,i;for(i in n)if(n.hasOwnProperty(i)){var s=n[i];if(s!=null)switch(i){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Xe(e,t,i,s,n,null)}}r&&Xe(e,t,"srcSet",n.srcSet,n,null),a&&Xe(e,t,"src",n.src,n,null);return;case"input":Ae("invalid",e);var m=i=s=r=null,v=null,w=null;for(a in n)if(n.hasOwnProperty(a)){var U=n[a];if(U!=null)switch(a){case"name":r=U;break;case"type":s=U;break;case"checked":v=U;break;case"defaultChecked":w=U;break;case"value":i=U;break;case"defaultValue":m=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(c(137,t));break;default:Xe(e,t,a,U,n,null)}}Xs(e,i,m,v,w,s,r,!1);return;case"select":Ae("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(m=n[r],m!=null))switch(r){case"value":i=m;break;case"defaultValue":s=m;break;case"multiple":a=m;default:Xe(e,t,r,m,n,null)}t=i,n=s,e.multiple=!!a,t!=null?tl(e,!!a,t,!1):n!=null&&tl(e,!!a,n,!0);return;case"textarea":Ae("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(m=n[s],m!=null))switch(s){case"value":a=m;break;case"defaultValue":r=m;break;case"children":i=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:Xe(e,t,s,m,n,null)}Qs(e,a,r,i);return;case"option":for(v in n)n.hasOwnProperty(v)&&(a=n[v],a!=null)&&(v==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Xe(e,t,v,a,n,null));return;case"dialog":Ae("beforetoggle",e),Ae("toggle",e),Ae("cancel",e),Ae("close",e);break;case"iframe":case"object":Ae("load",e);break;case"video":case"audio":for(a=0;a<_r.length;a++)Ae(_r[a],e);break;case"image":Ae("error",e),Ae("load",e);break;case"details":Ae("toggle",e);break;case"embed":case"source":case"link":Ae("error",e),Ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in n)if(n.hasOwnProperty(w)&&(a=n[w],a!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Xe(e,t,w,a,n,null)}return;default:if(Qo(t)){for(U in n)n.hasOwnProperty(U)&&(a=n[U],a!==void 0&&Cc(e,t,U,a,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(a=n[m],a!=null&&Xe(e,t,m,a,n,null))}function Qb(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,i=null,s=null,m=null,v=null,w=null,U=null;for(k in n){var L=n[k];if(n.hasOwnProperty(k)&&L!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":v=L;default:a.hasOwnProperty(k)||Xe(e,t,k,null,a,L)}}for(var M in a){var k=a[M];if(L=n[M],a.hasOwnProperty(M)&&(k!=null||L!=null))switch(M){case"type":i=k;break;case"name":r=k;break;case"checked":w=k;break;case"defaultChecked":U=k;break;case"value":s=k;break;case"defaultValue":m=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(c(137,t));break;default:k!==L&&Xe(e,t,M,k,a,L)}}Xo(e,s,m,v,w,U,i,r);return;case"select":k=s=m=M=null;for(i in n)if(v=n[i],n.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":k=v;default:a.hasOwnProperty(i)||Xe(e,t,i,null,a,v)}for(r in a)if(i=a[r],v=n[r],a.hasOwnProperty(r)&&(i!=null||v!=null))switch(r){case"value":M=i;break;case"defaultValue":m=i;break;case"multiple":s=i;default:i!==v&&Xe(e,t,r,i,a,v)}t=m,n=s,a=k,M!=null?tl(e,!!n,M,!1):!!a!=!!n&&(t!=null?tl(e,!!n,t,!0):tl(e,!!n,n?[]:"",!1));return;case"textarea":k=M=null;for(m in n)if(r=n[m],n.hasOwnProperty(m)&&r!=null&&!a.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Xe(e,t,m,null,a,r)}for(s in a)if(r=a[s],i=n[s],a.hasOwnProperty(s)&&(r!=null||i!=null))switch(s){case"value":M=r;break;case"defaultValue":k=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==i&&Xe(e,t,s,r,a,i)}Gs(e,M,k);return;case"option":for(var te in n)M=n[te],n.hasOwnProperty(te)&&M!=null&&!a.hasOwnProperty(te)&&(te==="selected"?e.selected=!1:Xe(e,t,te,null,a,M));for(v in a)M=a[v],k=n[v],a.hasOwnProperty(v)&&M!==k&&(M!=null||k!=null)&&(v==="selected"?e.selected=M&&typeof M!="function"&&typeof M!="symbol":Xe(e,t,v,M,a,k));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in n)M=n[he],n.hasOwnProperty(he)&&M!=null&&!a.hasOwnProperty(he)&&Xe(e,t,he,null,a,M);for(w in a)if(M=a[w],k=n[w],a.hasOwnProperty(w)&&M!==k&&(M!=null||k!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:Xe(e,t,w,M,a,k)}return;default:if(Qo(t)){for(var Ge in n)M=n[Ge],n.hasOwnProperty(Ge)&&M!==void 0&&!a.hasOwnProperty(Ge)&&Cc(e,t,Ge,void 0,a,M);for(U in a)M=a[U],k=n[U],!a.hasOwnProperty(U)||M===k||M===void 0&&k===void 0||Cc(e,t,U,M,a,k);return}}for(var z in n)M=n[z],n.hasOwnProperty(z)&&M!=null&&!a.hasOwnProperty(z)&&Xe(e,t,z,null,a,M);for(L in a)M=a[L],k=n[L],!a.hasOwnProperty(L)||M===k||M==null&&k==null||Xe(e,t,L,M,a,k)}function Fh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],i=r.transferSize,s=r.initiatorType,m=r.duration;if(i&&m&&Fh(s)){for(s=0,m=r.responseEnd,a+=1;a<n.length;a++){var v=n[a],w=v.startTime;if(w>m)break;var U=v.transferSize,L=v.initiatorType;U&&Fh(L)&&(v=v.responseEnd,s+=U*(v<m?1:(m-w)/(v-w)))}if(--a,t+=8*(i+s)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var kc=null,Rc=null;function to(e){return e.nodeType===9?e:e.ownerDocument}function Ph(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $h(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Nc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jc=null;function Kb(){var e=window.event;return e&&e.type==="popstate"?e===jc?!1:(jc=e,!0):(jc=null,!1)}var Wh=typeof setTimeout=="function"?setTimeout:void 0,Jb=typeof clearTimeout=="function"?clearTimeout:void 0,Ih=typeof Promise=="function"?Promise:void 0,Fb=typeof queueMicrotask=="function"?queueMicrotask:typeof Ih<"u"?function(e){return Ih.resolve(null).then(e).catch(Pb)}:Wh;function Pb(e){setTimeout(function(){throw e})}function ba(e){return e==="head"}function em(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(r),Rl(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Dr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Dr(n);for(var i=n.firstChild;i;){var s=i.nextSibling,m=i.nodeName;i[Kl]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=s}}else n==="body"&&Dr(e.ownerDocument.body);n=r}while(n);Rl(t)}function tm(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Uc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Uc(n),Vo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function $b(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Kl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=ln(e.nextSibling),e===null)break}return null}function Wb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ln(e.nextSibling),e===null))return null;return e}function nm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ln(e.nextSibling),e===null))return null;return e}function Hc(e){return e.data==="$?"||e.data==="$~"}function qc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ib(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Bc=null;function am(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ln(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function lm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function rm(e,t,n){switch(t=to(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Dr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Vo(e)}var rn=new Map,im=new Set;function no(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zn=Q.d;Q.d={f:eg,r:tg,D:ng,C:ag,L:lg,m:rg,X:og,S:ig,M:ug};function eg(){var e=Zn.f(),t=Ki();return e||t}function tg(e){var t=Wa(e);t!==null&&t.tag===5&&t.type==="form"?Ed(t):Zn.r(e)}var Ml=typeof document>"u"?null:document;function om(e,t,n){var a=Ml;if(a&&typeof t=="string"&&t){var r=$t(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),im.has(r)||(im.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),Et(t,"link",e),bt(t),a.head.appendChild(t)))}}function ng(e){Zn.D(e),om("dns-prefetch",e,null)}function ag(e,t){Zn.C(e,t),om("preconnect",e,t)}function lg(e,t,n){Zn.L(e,t,n);var a=Ml;if(a&&e&&t){var r='link[rel="preload"][as="'+$t(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+$t(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+$t(n.imageSizes)+'"]')):r+='[href="'+$t(e)+'"]';var i=r;switch(t){case"style":i=Cl(e);break;case"script":i=kl(e)}rn.has(i)||(e=O({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),rn.set(i,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(Mr(i))||t==="script"&&a.querySelector(Cr(i))||(t=a.createElement("link"),Et(t,"link",e),bt(t),a.head.appendChild(t)))}}function rg(e,t){Zn.m(e,t);var n=Ml;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+$t(a)+'"][href="'+$t(e)+'"]',i=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=kl(e)}if(!rn.has(i)&&(e=O({rel:"modulepreload",href:e},t),rn.set(i,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Cr(i)))return}a=n.createElement("link"),Et(a,"link",e),bt(a),n.head.appendChild(a)}}}function ig(e,t,n){Zn.S(e,t,n);var a=Ml;if(a&&e){var r=Ia(a).hoistableStyles,i=Cl(e);t=t||"default";var s=r.get(i);if(!s){var m={loading:0,preload:null};if(s=a.querySelector(Mr(i)))m.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":t},n),(n=rn.get(i))&&Lc(e,n);var v=s=a.createElement("link");bt(v),Et(v,"link",e),v._p=new Promise(function(w,U){v.onload=w,v.onerror=U}),v.addEventListener("load",function(){m.loading|=1}),v.addEventListener("error",function(){m.loading|=2}),m.loading|=4,ao(s,t,a)}s={type:"stylesheet",instance:s,count:1,state:m},r.set(i,s)}}}function og(e,t){Zn.X(e,t);var n=Ml;if(n&&e){var a=Ia(n).hoistableScripts,r=kl(e),i=a.get(r);i||(i=n.querySelector(Cr(r)),i||(e=O({src:e,async:!0},t),(t=rn.get(r))&&Vc(e,t),i=n.createElement("script"),bt(i),Et(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(r,i))}}function ug(e,t){Zn.M(e,t);var n=Ml;if(n&&e){var a=Ia(n).hoistableScripts,r=kl(e),i=a.get(r);i||(i=n.querySelector(Cr(r)),i||(e=O({src:e,async:!0,type:"module"},t),(t=rn.get(r))&&Vc(e,t),i=n.createElement("script"),bt(i),Et(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(r,i))}}function um(e,t,n,a){var r=(r=ve.current)?no(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Cl(n.href),n=Ia(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Cl(n.href);var i=Ia(r).hoistableStyles,s=i.get(e);if(s||(r=r.ownerDocument||r,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=r.querySelector(Mr(e)))&&!i._p&&(s.instance=i,s.state.loading=5),rn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},rn.set(e,n),i||cg(r,e,n,s.state))),t&&a===null)throw Error(c(528,""));return s}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=kl(n),n=Ia(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Cl(e){return'href="'+$t(e)+'"'}function Mr(e){return'link[rel="stylesheet"]['+e+"]"}function cm(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function cg(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Et(t,"link",n),bt(t),e.head.appendChild(t))}function kl(e){return'[src="'+$t(e)+'"]'}function Cr(e){return"script[async]"+e}function sm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+$t(n.href)+'"]');if(a)return t.instance=a,bt(a),a;var r=O({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),bt(a),Et(a,"style",r),ao(a,n.precedence,e),t.instance=a;case"stylesheet":r=Cl(n.href);var i=e.querySelector(Mr(r));if(i)return t.state.loading|=4,t.instance=i,bt(i),i;a=cm(n),(r=rn.get(r))&&Lc(a,r),i=(e.ownerDocument||e).createElement("link"),bt(i);var s=i;return s._p=new Promise(function(m,v){s.onload=m,s.onerror=v}),Et(i,"link",a),t.state.loading|=4,ao(i,n.precedence,e),t.instance=i;case"script":return i=kl(n.src),(r=e.querySelector(Cr(i)))?(t.instance=r,bt(r),r):(a=n,(r=rn.get(i))&&(a=O({},n),Vc(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),bt(r),Et(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,ao(a,n.precedence,e));return t.instance}function ao(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,i=r,s=0;s<a.length;s++){var m=a[s];if(m.dataset.precedence===t)i=m;else if(i!==r)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Lc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Vc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var lo=null;function fm(e,t,n){if(lo===null){var a=new Map,r=lo=new Map;r.set(n,a)}else r=lo,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var i=n[r];if(!(i[Kl]||i[yt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=e+s;var m=a.get(s);m?m.push(i):a.set(s,[i])}}return a}function dm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function sg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function hm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function fg(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Cl(a.href),i=t.querySelector(Mr(r));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ro.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,bt(i);return}i=t.ownerDocument||t,a=cm(a),(r=rn.get(r))&&Lc(a,r),i=i.createElement("link"),bt(i);var s=i;s._p=new Promise(function(m,v){s.onload=m,s.onerror=v}),Et(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ro.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Yc=0;function dg(e,t){return e.stylesheets&&e.count===0&&oo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&oo(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Yc===0&&(Yc=62500*Zb());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&oo(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Yc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function ro(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)oo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var io=null;function oo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,io=new Map,t.forEach(hg,e),io=null,ro.call(e))}function hg(e,t){if(!(t.state.loading&4)){var n=io.get(e);if(n)var a=n.get(null);else{n=new Map,io.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<r.length;i++){var s=r[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),a=s)}a&&n.set(null,a)}r=t.instance,s=r.getAttribute("data-precedence"),i=n.get(s)||a,i===a&&n.set(null,r),n.set(s,r),this.count++,a=ro.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),i?i.parentNode.insertBefore(r,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var kr={$$typeof:$,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function mg(e,t,n,a,r,i,s,m,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ho(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ho(0),this.hiddenUpdates=Ho(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function mm(e,t,n,a,r,i,s,m,v,w,U,L){return e=new mg(e,t,n,s,v,w,U,L,m),t=1,i===!0&&(t|=24),i=Bt(3,null,null,t),e.current=i,i.stateNode=e,t=Su(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},Au(i),e}function pm(e){return e?(e=cl,e):cl}function bm(e,t,n,a,r,i){r=pm(r),a.context===null?a.context=r:a.pendingContext=r,a=ra(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=ia(e,a,t),n!==null&&(jt(n,e,t),sr(n,e,t))}function gm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xc(e,t){gm(e,t),(e=e.alternate)&&gm(e,t)}function vm(e){if(e.tag===13||e.tag===31){var t=ka(e,67108864);t!==null&&jt(t,e,67108864),Xc(e,67108864)}}function ym(e){if(e.tag===13||e.tag===31){var t=Gt();t=qo(t);var n=ka(e,t);n!==null&&jt(n,e,t),Xc(e,t)}}var uo=!0;function pg(e,t,n,a){var r=C.T;C.T=null;var i=Q.p;try{Q.p=2,Gc(e,t,n,a)}finally{Q.p=i,C.T=r}}function bg(e,t,n,a){var r=C.T;C.T=null;var i=Q.p;try{Q.p=8,Gc(e,t,n,a)}finally{Q.p=i,C.T=r}}function Gc(e,t,n,a){if(uo){var r=Qc(a);if(r===null)Mc(e,t,a,co,n),Sm(e,a);else if(vg(r,e,t,n,a))a.stopPropagation();else if(Sm(e,a),t&4&&-1<gg.indexOf(e)){for(;r!==null;){var i=Wa(r);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=_a(i.pendingLanes);if(s!==0){var m=i;for(m.pendingLanes|=2,m.entangledLanes|=2;s;){var v=1<<31-At(s);m.entanglements[1]|=v,s&=~v}En(i),(Ue&6)===0&&(Qi=J()+500,Tr(0))}}break;case 31:case 13:m=ka(i,2),m!==null&&jt(m,i,2),Ki(),Xc(i,2)}if(i=Qc(a),i===null&&Mc(e,t,a,co,n),i===r)break;r=i}r!==null&&a.stopPropagation()}else Mc(e,t,a,null,n)}}function Qc(e){return e=Ko(e),Zc(e)}var co=null;function Zc(e){if(co=null,e=$a(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return co=e,null}function xm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(P()){case K:return 2;case oe:return 8;case Ce:case je:return 32;case pt:return 268435456;default:return 32}default:return 32}}var Kc=!1,ga=null,va=null,ya=null,Rr=new Map,Nr=new Map,xa=[],gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sm(e,t){switch(e){case"focusin":case"focusout":ga=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":Rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(t.pointerId)}}function jr(e,t,n,a,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[r]},t!==null&&(t=Wa(t),t!==null&&vm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function vg(e,t,n,a,r){switch(t){case"focusin":return ga=jr(ga,e,t,n,a,r),!0;case"dragenter":return va=jr(va,e,t,n,a,r),!0;case"mouseover":return ya=jr(ya,e,t,n,a,r),!0;case"pointerover":var i=r.pointerId;return Rr.set(i,jr(Rr.get(i)||null,e,t,n,a,r)),!0;case"gotpointercapture":return i=r.pointerId,Nr.set(i,jr(Nr.get(i)||null,e,t,n,a,r)),!0}return!1}function Om(e){var t=$a(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,js(e.priority,function(){ym(n)});return}}else if(t===31){if(t=g(n),t!==null){e.blockedOn=t,js(e.priority,function(){ym(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function so(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Zo=a,n.target.dispatchEvent(a),Zo=null}else return t=Wa(n),t!==null&&vm(t),e.blockedOn=n,!1;t.shift()}return!0}function Em(e,t,n){so(e)&&n.delete(t)}function yg(){Kc=!1,ga!==null&&so(ga)&&(ga=null),va!==null&&so(va)&&(va=null),ya!==null&&so(ya)&&(ya=null),Rr.forEach(Em),Nr.forEach(Em)}function fo(e,t){e.blockedOn===t&&(e.blockedOn=null,Kc||(Kc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,yg)))}var ho=null;function zm(e){ho!==e&&(ho=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){ho===e&&(ho=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(Zc(a||n)===null)continue;break}var i=Wa(n);i!==null&&(e.splice(t,3),t-=3,Qu(i,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function Rl(e){function t(v){return fo(v,e)}ga!==null&&fo(ga,e),va!==null&&fo(va,e),ya!==null&&fo(ya,e),Rr.forEach(t),Nr.forEach(t);for(var n=0;n<xa.length;n++){var a=xa[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<xa.length&&(n=xa[0],n.blockedOn===null);)Om(n),n.blockedOn===null&&xa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],i=n[a+1],s=r[Dt]||null;if(typeof i=="function")s||zm(n);else if(s){var m=null;if(i&&i.hasAttribute("formAction")){if(r=i,s=i[Dt]||null)m=s.formAction;else if(Zc(r)!==null)continue}else m=s.action;typeof m=="function"?n[a+1]=m:(n.splice(a,3),a-=3),zm(n)}}}function Am(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return r=s})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Jc(e){this._internalRoot=e}mo.prototype.render=Jc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=Gt();bm(n,a,e,t,null,null)},mo.prototype.unmount=Jc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bm(e.current,2,null,e,null,null),Ki(),t[Pa]=null}};function mo(e){this._internalRoot=e}mo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ns();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xa.length&&t!==0&&t<xa[n].priority;n++);xa.splice(n,0,e),n===0&&Om(e)}};var Tm=o.version;if(Tm!=="19.2.3")throw Error(c(527,Tm,"19.2.3"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=b(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var xg={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{Ta=po.inject(xg),vt=po}catch{}}return Hr.createRoot=function(e,t){if(!d(e))throw Error(c(299));var n=!1,a="",r=Rd,i=Nd,s=jd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=mm(e,1,!1,null,null,n,a,null,r,i,s,Am),e[Pa]=t.current,Dc(e),new Jc(t)},Hr.hydrateRoot=function(e,t,n){if(!d(e))throw Error(c(299));var a=!1,r="",i=Rd,s=Nd,m=jd,v=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.formState!==void 0&&(v=n.formState)),t=mm(e,1,!0,t,n??null,a,r,v,i,s,m,Am),t.context=pm(null),n=t.current,a=Gt(),a=qo(a),r=ra(a),r.callback=null,ia(n,r,a),n=a,t.current.lanes=n,Zl(t,n),En(t),e[Pa]=t.current,Dc(e),new mo(t)},Hr.version="19.2.3",Hr}var Um;function Cg(){if(Um)return $c.exports;Um=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),$c.exports=Mg(),$c.exports}var kg=Cg();var Hm="popstate";function Rg(l={}){function o(c,d){let{pathname:f,search:h,hash:g}=c.location;return us("",{pathname:f,search:h,hash:g},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function u(c,d){return typeof d=="string"?d:Gr(d)}return jg(o,u,null,l)}function $e(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function on(l,o){if(!l){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Ng(){return Math.random().toString(36).substring(2,10)}function qm(l,o){return{usr:l.state,key:l.key,idx:o}}function us(l,o,u=null,c){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof o=="string"?ql(o):o,state:u,key:o&&o.key||c||Ng()}}function Gr({pathname:l="/",search:o="",hash:u=""}){return o&&o!=="?"&&(l+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function ql(l){let o={};if(l){let u=l.indexOf("#");u>=0&&(o.hash=l.substring(u),l=l.substring(0,u));let c=l.indexOf("?");c>=0&&(o.search=l.substring(c),l=l.substring(0,c)),l&&(o.pathname=l)}return o}function jg(l,o,u,c={}){let{window:d=document.defaultView,v5Compat:f=!1}=c,h=d.history,g="POP",p=null,b=T();b==null&&(b=0,h.replaceState({...h.state,idx:b},""));function T(){return(h.state||{idx:null}).idx}function O(){g="POP";let Y=T(),F=Y==null?null:Y-b;b=Y,p&&p({action:g,location:A.location,delta:F})}function H(Y,F){g="PUSH";let N=us(A.location,Y,F);b=T()+1;let $=qm(N,b),fe=A.createHref(N);try{h.pushState($,"",fe)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;d.location.assign(fe)}f&&p&&p({action:g,location:A.location,delta:1})}function V(Y,F){g="REPLACE";let N=us(A.location,Y,F);b=T();let $=qm(N,b),fe=A.createHref(N);h.replaceState($,"",fe),f&&p&&p({action:g,location:A.location,delta:0})}function X(Y){return Ug(Y)}let A={get action(){return g},get location(){return l(d,h)},listen(Y){if(p)throw new Error("A history only accepts one active listener");return d.addEventListener(Hm,O),p=Y,()=>{d.removeEventListener(Hm,O),p=null}},createHref(Y){return o(d,Y)},createURL:X,encodeLocation(Y){let F=X(Y);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:H,replace:V,go(Y){return h.go(Y)}};return A}function Ug(l,o=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),$e(u,"No window.location.(origin|href) available to create URL");let c=typeof l=="string"?l:Gr(l);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function g0(l,o,u="/"){return Hg(l,o,u,!1)}function Hg(l,o,u,c){let d=typeof o=="string"?ql(o):o,f=$n(d.pathname||"/",u);if(f==null)return null;let h=v0(l);qg(h);let g=null;for(let p=0;g==null&&p<h.length;++p){let b=Fg(f);g=Kg(h[p],b,c)}return g}function v0(l,o=[],u=[],c="",d=!1){let f=(h,g,p=d,b)=>{let T={relativePath:b===void 0?h.path||"":b,caseSensitive:h.caseSensitive===!0,childrenIndex:g,route:h};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(c)&&p)return;$e(T.relativePath.startsWith(c),`Absolute route path "${T.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(c.length)}let O=Pn([c,T.relativePath]),H=u.concat(T);h.children&&h.children.length>0&&($e(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${O}".`),v0(h.children,o,H,O,p)),!(h.path==null&&!h.index)&&o.push({path:O,score:Qg(O,h.index),routesMeta:H})};return l.forEach((h,g)=>{if(h.path===""||!h.path?.includes("?"))f(h,g);else for(let p of y0(h.path))f(h,g,!0,p)}),o}function y0(l){let o=l.split("/");if(o.length===0)return[];let[u,...c]=o,d=u.endsWith("?"),f=u.replace(/\?$/,"");if(c.length===0)return d?[f,""]:[f];let h=y0(c.join("/")),g=[];return g.push(...h.map(p=>p===""?f:[f,p].join("/"))),d&&g.push(...h),g.map(p=>l.startsWith("/")&&p===""?"/":p)}function qg(l){l.sort((o,u)=>o.score!==u.score?u.score-o.score:Zg(o.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var Bg=/^:[\w-]+$/,Lg=3,Vg=2,Yg=1,Xg=10,Gg=-2,Bm=l=>l==="*";function Qg(l,o){let u=l.split("/"),c=u.length;return u.some(Bm)&&(c+=Gg),o&&(c+=Vg),u.filter(d=>!Bm(d)).reduce((d,f)=>d+(Bg.test(f)?Lg:f===""?Yg:Xg),c)}function Zg(l,o){return l.length===o.length&&l.slice(0,-1).every((c,d)=>c===o[d])?l[l.length-1]-o[o.length-1]:0}function Kg(l,o,u=!1){let{routesMeta:c}=l,d={},f="/",h=[];for(let g=0;g<c.length;++g){let p=c[g],b=g===c.length-1,T=f==="/"?o:o.slice(f.length)||"/",O=zo({path:p.relativePath,caseSensitive:p.caseSensitive,end:b},T),H=p.route;if(!O&&b&&u&&!c[c.length-1].route.index&&(O=zo({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},T)),!O)return null;Object.assign(d,O.params),h.push({params:d,pathname:Pn([f,O.pathname]),pathnameBase:Ig(Pn([f,O.pathnameBase])),route:H}),O.pathnameBase!=="/"&&(f=Pn([f,O.pathnameBase]))}return h}function zo(l,o){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,c]=Jg(l.path,l.caseSensitive,l.end),d=o.match(u);if(!d)return null;let f=d[0],h=f.replace(/(.)\/+$/,"$1"),g=d.slice(1);return{params:c.reduce((b,{paramName:T,isOptional:O},H)=>{if(T==="*"){let X=g[H]||"";h=f.slice(0,f.length-X.length).replace(/(.)\/+$/,"$1")}const V=g[H];return O&&!V?b[T]=void 0:b[T]=(V||"").replace(/%2F/g,"/"),b},{}),pathname:f,pathnameBase:h,pattern:l}}function Jg(l,o=!1,u=!0){on(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let c=[],d="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,g,p)=>(c.push({paramName:g,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(c.push({paramName:"*"}),d+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?d+="\\/*$":l!==""&&l!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,o?void 0:"i"),c]}function Fg(l){try{return l.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return on(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),l}}function $n(l,o){if(o==="/")return l;if(!l.toLowerCase().startsWith(o.toLowerCase()))return null;let u=o.endsWith("/")?o.length-1:o.length,c=l.charAt(u);return c&&c!=="/"?null:l.slice(u)||"/"}var x0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pg=l=>x0.test(l);function $g(l,o="/"){let{pathname:u,search:c="",hash:d=""}=typeof l=="string"?ql(l):l,f;if(u)if(Pg(u))f=u;else{if(u.includes("//")){let h=u;u=u.replace(/\/\/+/g,"/"),on(!1,`Pathnames cannot have embedded double slashes - normalizing ${h} -> ${u}`)}u.startsWith("/")?f=Lm(u.substring(1),"/"):f=Lm(u,o)}else f=o;return{pathname:f,search:ev(c),hash:tv(d)}}function Lm(l,o){let u=o.replace(/\/+$/,"").split("/");return l.split("/").forEach(d=>{d===".."?u.length>1&&u.pop():d!=="."&&u.push(d)}),u.length>1?u.join("/"):"/"}function ts(l,o,u,c){return`Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Wg(l){return l.filter((o,u)=>u===0||o.route.path&&o.route.path.length>0)}function ps(l){let o=Wg(l);return o.map((u,c)=>c===o.length-1?u.pathname:u.pathnameBase)}function bs(l,o,u,c=!1){let d;typeof l=="string"?d=ql(l):(d={...l},$e(!d.pathname||!d.pathname.includes("?"),ts("?","pathname","search",d)),$e(!d.pathname||!d.pathname.includes("#"),ts("#","pathname","hash",d)),$e(!d.search||!d.search.includes("#"),ts("#","search","hash",d)));let f=l===""||d.pathname==="",h=f?"/":d.pathname,g;if(h==null)g=u;else{let O=o.length-1;if(!c&&h.startsWith("..")){let H=h.split("/");for(;H[0]==="..";)H.shift(),O-=1;d.pathname=H.join("/")}g=O>=0?o[O]:"/"}let p=$g(d,g),b=h&&h!=="/"&&h.endsWith("/"),T=(f||h===".")&&u.endsWith("/");return!p.pathname.endsWith("/")&&(b||T)&&(p.pathname+="/"),p}var Pn=l=>l.join("/").replace(/\/\/+/g,"/"),Ig=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),ev=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,tv=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,nv=class{constructor(l,o,u,c=!1){this.status=l,this.statusText=o||"",this.internal=c,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function av(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function lv(l){return l.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var S0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function O0(l,o){let u=l;if(typeof u!="string"||!x0.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let c=u,d=!1;if(S0)try{let f=new URL(window.location.href),h=u.startsWith("//")?new URL(f.protocol+u):new URL(u),g=$n(h.pathname,o);h.origin===f.origin&&g!=null?u=g+h.search+h.hash:d=!0}catch{on(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:d,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var E0=["POST","PUT","PATCH","DELETE"];new Set(E0);var rv=["GET",...E0];new Set(rv);var Bl=R.createContext(null);Bl.displayName="DataRouter";var Co=R.createContext(null);Co.displayName="DataRouterState";var iv=R.createContext(!1),z0=R.createContext({isTransitioning:!1});z0.displayName="ViewTransition";var ov=R.createContext(new Map);ov.displayName="Fetchers";var uv=R.createContext(null);uv.displayName="Await";var Kt=R.createContext(null);Kt.displayName="Navigation";var Qr=R.createContext(null);Qr.displayName="Location";var bn=R.createContext({outlet:null,matches:[],isDataRoute:!1});bn.displayName="Route";var gs=R.createContext(null);gs.displayName="RouteError";var A0="REACT_ROUTER_ERROR",cv="REDIRECT",sv="ROUTE_ERROR_RESPONSE";function fv(l){if(l.startsWith(`${A0}:${cv}:{`))try{let o=JSON.parse(l.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function dv(l){if(l.startsWith(`${A0}:${sv}:{`))try{let o=JSON.parse(l.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new nv(o.status,o.statusText,o.data)}catch{}}function hv(l,{relative:o}={}){$e(Ll(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=R.useContext(Kt),{hash:d,pathname:f,search:h}=Kr(l,{relative:o}),g=f;return u!=="/"&&(g=f==="/"?u:Pn([u,f])),c.createHref({pathname:g,search:h,hash:d})}function Ll(){return R.useContext(Qr)!=null}function Aa(){return $e(Ll(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Qr).location}var T0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _0(l){R.useContext(Kt).static||R.useLayoutEffect(l)}function Zr(){let{isDataRoute:l}=R.useContext(bn);return l?wv():mv()}function mv(){$e(Ll(),"useNavigate() may be used only in the context of a <Router> component.");let l=R.useContext(Bl),{basename:o,navigator:u}=R.useContext(Kt),{matches:c}=R.useContext(bn),{pathname:d}=Aa(),f=JSON.stringify(ps(c)),h=R.useRef(!1);return _0(()=>{h.current=!0}),R.useCallback((p,b={})=>{if(on(h.current,T0),!h.current)return;if(typeof p=="number"){u.go(p);return}let T=bs(p,JSON.parse(f),d,b.relative==="path");l==null&&o!=="/"&&(T.pathname=T.pathname==="/"?o:Pn([o,T.pathname])),(b.replace?u.replace:u.push)(T,b.state,b)},[o,u,f,d,l])}var pv=R.createContext(null);function bv(l){let o=R.useContext(bn).outlet;return R.useMemo(()=>o&&R.createElement(pv.Provider,{value:l},o),[o,l])}function Kr(l,{relative:o}={}){let{matches:u}=R.useContext(bn),{pathname:c}=Aa(),d=JSON.stringify(ps(u));return R.useMemo(()=>bs(l,JSON.parse(d),c,o==="path"),[l,d,c,o])}function gv(l,o){return w0(l,o)}function w0(l,o,u,c,d){$e(Ll(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=R.useContext(Kt),{matches:h}=R.useContext(bn),g=h[h.length-1],p=g?g.params:{},b=g?g.pathname:"/",T=g?g.pathnameBase:"/",O=g&&g.route;{let N=O&&O.path||"";M0(b,!O||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let H=Aa(),V;if(o){let N=typeof o=="string"?ql(o):o;$e(T==="/"||N.pathname?.startsWith(T),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${N.pathname}" was given in the \`location\` prop.`),V=N}else V=H;let X=V.pathname||"/",A=X;if(T!=="/"){let N=T.replace(/^\//,"").split("/");A="/"+X.replace(/^\//,"").split("/").slice(N.length).join("/")}let Y=g0(l,{pathname:A});on(O||Y!=null,`No routes matched location "${V.pathname}${V.search}${V.hash}" `),on(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${V.pathname}${V.search}${V.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let F=Ov(Y&&Y.map(N=>Object.assign({},N,{params:Object.assign({},p,N.params),pathname:Pn([T,f.encodeLocation?f.encodeLocation(N.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?T:Pn([T,f.encodeLocation?f.encodeLocation(N.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathnameBase])})),h,u,c,d);return o&&F?R.createElement(Qr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...V},navigationType:"POP"}},F):F}function vv(){let l=_v(),o=av(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},f={padding:"2px 4px",backgroundColor:c},h=null;return console.error("Error handled by React Router default ErrorBoundary:",l),h=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:f},"ErrorBoundary")," or"," ",R.createElement("code",{style:f},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},o),u?R.createElement("pre",{style:d},u):null,h)}var yv=R.createElement(vv,null),D0=class extends R.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,o){return o.location!==l.location||o.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:o.error,location:o.location,revalidation:l.revalidation||o.revalidation}}componentDidCatch(l,o){this.props.onError?this.props.onError(l,o):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const u=dv(l.digest);u&&(l=u)}let o=l!==void 0?R.createElement(bn.Provider,{value:this.props.routeContext},R.createElement(gs.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?R.createElement(xv,{error:l},o):o}};D0.contextType=iv;var ns=new WeakMap;function xv({children:l,error:o}){let{basename:u}=R.useContext(Kt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let c=fv(o.digest);if(c){let d=ns.get(o);if(d)throw d;let f=O0(c.location,u);if(S0&&!ns.get(o))if(f.isExternal||c.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:c.replace}));throw ns.set(o,h),h}return R.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return l}function Sv({routeContext:l,match:o,children:u}){let c=R.useContext(Bl);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),R.createElement(bn.Provider,{value:l},u)}function Ov(l,o=[],u=null,c=null,d=null){if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let f=l,h=u?.errors;if(h!=null){let T=f.findIndex(O=>O.route.id&&h?.[O.route.id]!==void 0);$e(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,T+1))}let g=!1,p=-1;if(u)for(let T=0;T<f.length;T++){let O=f[T];if((O.route.HydrateFallback||O.route.hydrateFallbackElement)&&(p=T),O.route.id){let{loaderData:H,errors:V}=u,X=O.route.loader&&!H.hasOwnProperty(O.route.id)&&(!V||V[O.route.id]===void 0);if(O.route.lazy||X){g=!0,p>=0?f=f.slice(0,p+1):f=[f[0]];break}}}let b=u&&c?(T,O)=>{c(T,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:lv(u.matches),errorInfo:O})}:void 0;return f.reduceRight((T,O,H)=>{let V,X=!1,A=null,Y=null;u&&(V=h&&O.route.id?h[O.route.id]:void 0,A=O.route.errorElement||yv,g&&(p<0&&H===0?(M0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),X=!0,Y=null):p===H&&(X=!0,Y=O.route.hydrateFallbackElement||null)));let F=o.concat(f.slice(0,H+1)),N=()=>{let $;return V?$=A:X?$=Y:O.route.Component?$=R.createElement(O.route.Component,null):O.route.element?$=O.route.element:$=T,R.createElement(Sv,{match:O,routeContext:{outlet:T,matches:F,isDataRoute:u!=null},children:$})};return u&&(O.route.ErrorBoundary||O.route.errorElement||H===0)?R.createElement(D0,{location:u.location,revalidation:u.revalidation,component:A,error:V,children:N(),routeContext:{outlet:null,matches:F,isDataRoute:!0},onError:b}):N()},null)}function vs(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ev(l){let o=R.useContext(Bl);return $e(o,vs(l)),o}function zv(l){let o=R.useContext(Co);return $e(o,vs(l)),o}function Av(l){let o=R.useContext(bn);return $e(o,vs(l)),o}function ys(l){let o=Av(l),u=o.matches[o.matches.length-1];return $e(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function Tv(){return ys("useRouteId")}function _v(){let l=R.useContext(gs),o=zv("useRouteError"),u=ys("useRouteError");return l!==void 0?l:o.errors?.[u]}function wv(){let{router:l}=Ev("useNavigate"),o=ys("useNavigate"),u=R.useRef(!1);return _0(()=>{u.current=!0}),R.useCallback(async(d,f={})=>{on(u.current,T0),u.current&&(typeof d=="number"?await l.navigate(d):await l.navigate(d,{fromRouteId:o,...f}))},[l,o])}var Vm={};function M0(l,o,u){!o&&!Vm[l]&&(Vm[l]=!0,on(!1,u))}R.memo(Dv);function Dv({routes:l,future:o,state:u,onError:c}){return w0(l,void 0,u,c,o)}function C0({to:l,replace:o,state:u,relative:c}){$e(Ll(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=R.useContext(Kt);on(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=R.useContext(bn),{pathname:h}=Aa(),g=Zr(),p=bs(l,ps(f),h,c==="path"),b=JSON.stringify(p);return R.useEffect(()=>{g(JSON.parse(b),{replace:o,state:u,relative:c})},[g,b,c,o,u]),null}function Mv(l){return bv(l.context)}function Ut(l){$e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Cv({basename:l="/",children:o=null,location:u,navigationType:c="POP",navigator:d,static:f=!1,unstable_useTransitions:h}){$e(!Ll(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=l.replace(/^\/*/,"/"),p=R.useMemo(()=>({basename:g,navigator:d,static:f,unstable_useTransitions:h,future:{}}),[g,d,f,h]);typeof u=="string"&&(u=ql(u));let{pathname:b="/",search:T="",hash:O="",state:H=null,key:V="default"}=u,X=R.useMemo(()=>{let A=$n(b,g);return A==null?null:{location:{pathname:A,search:T,hash:O,state:H,key:V},navigationType:c}},[g,b,T,O,H,V,c]);return on(X!=null,`<Router basename="${g}"> is not able to match the URL "${b}${T}${O}" because it does not start with the basename, so the <Router> won't render anything.`),X==null?null:R.createElement(Kt.Provider,{value:p},R.createElement(Qr.Provider,{children:o,value:X}))}function kv({children:l,location:o}){return gv(cs(l),o)}function cs(l,o=[]){let u=[];return R.Children.forEach(l,(c,d)=>{if(!R.isValidElement(c))return;let f=[...o,d];if(c.type===R.Fragment){u.push.apply(u,cs(c.props.children,f));return}$e(c.type===Ut,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$e(!c.props.index||!c.props.children,"An index route cannot have child routes.");let h={id:c.props.id||f.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(h.children=cs(c.props.children,f)),u.push(h)}),u}var Oo="get",Eo="application/x-www-form-urlencoded";function ko(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function Rv(l){return ko(l)&&l.tagName.toLowerCase()==="button"}function Nv(l){return ko(l)&&l.tagName.toLowerCase()==="form"}function jv(l){return ko(l)&&l.tagName.toLowerCase()==="input"}function Uv(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function Hv(l,o){return l.button===0&&(!o||o==="_self")&&!Uv(l)}var bo=null;function qv(){if(bo===null)try{new FormData(document.createElement("form"),0),bo=!1}catch{bo=!0}return bo}var Bv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function as(l){return l!=null&&!Bv.has(l)?(on(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Eo}"`),null):l}function Lv(l,o){let u,c,d,f,h;if(Nv(l)){let g=l.getAttribute("action");c=g?$n(g,o):null,u=l.getAttribute("method")||Oo,d=as(l.getAttribute("enctype"))||Eo,f=new FormData(l)}else if(Rv(l)||jv(l)&&(l.type==="submit"||l.type==="image")){let g=l.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=l.getAttribute("formaction")||g.getAttribute("action");if(c=p?$n(p,o):null,u=l.getAttribute("formmethod")||g.getAttribute("method")||Oo,d=as(l.getAttribute("formenctype"))||as(g.getAttribute("enctype"))||Eo,f=new FormData(g,l),!qv()){let{name:b,type:T,value:O}=l;if(T==="image"){let H=b?`${b}.`:"";f.append(`${H}x`,"0"),f.append(`${H}y`,"0")}else b&&f.append(b,O)}}else{if(ko(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Oo,c=null,d=Eo,h=l}return f&&d==="text/plain"&&(h=f,f=void 0),{action:c,method:u.toLowerCase(),encType:d,formData:f,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function xs(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function Vv(l,o,u,c){let d=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return u?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${c}`:d.pathname=`${d.pathname}.${c}`:d.pathname==="/"?d.pathname=`_root.${c}`:o&&$n(d.pathname,o)==="/"?d.pathname=`${o.replace(/\/$/,"")}/_root.${c}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${c}`,d}async function Yv(l,o){if(l.id in o)return o[l.id];try{let u=await import(l.module);return o[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xv(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function Gv(l,o,u){let c=await Promise.all(l.map(async d=>{let f=o.routes[d.route.id];if(f){let h=await Yv(f,u);return h.links?h.links():[]}return[]}));return Jv(c.flat(1).filter(Xv).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Ym(l,o,u,c,d,f){let h=(p,b)=>u[b]?p.route.id!==u[b].route.id:!0,g=(p,b)=>u[b].pathname!==p.pathname||u[b].route.path?.endsWith("*")&&u[b].params["*"]!==p.params["*"];return f==="assets"?o.filter((p,b)=>h(p,b)||g(p,b)):f==="data"?o.filter((p,b)=>{let T=c.routes[p.route.id];if(!T||!T.hasLoader)return!1;if(h(p,b)||g(p,b))return!0;if(p.route.shouldRevalidate){let O=p.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function Qv(l,o,{includeHydrateFallback:u}={}){return Zv(l.map(c=>{let d=o.routes[c.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),u&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function Zv(l){return[...new Set(l)]}function Kv(l){let o={},u=Object.keys(l).sort();for(let c of u)o[c]=l[c];return o}function Jv(l,o){let u=new Set;return new Set(o),l.reduce((c,d)=>{let f=JSON.stringify(Kv(d));return u.has(f)||(u.add(f),c.push({key:f,link:d})),c},[])}function k0(){let l=R.useContext(Bl);return xs(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function Fv(){let l=R.useContext(Co);return xs(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Ss=R.createContext(void 0);Ss.displayName="FrameworkContext";function R0(){let l=R.useContext(Ss);return xs(l,"You must render this element inside a <HydratedRouter> element"),l}function Pv(l,o){let u=R.useContext(Ss),[c,d]=R.useState(!1),[f,h]=R.useState(!1),{onFocus:g,onBlur:p,onMouseEnter:b,onMouseLeave:T,onTouchStart:O}=o,H=R.useRef(null);R.useEffect(()=>{if(l==="render"&&h(!0),l==="viewport"){let A=F=>{F.forEach(N=>{h(N.isIntersecting)})},Y=new IntersectionObserver(A,{threshold:.5});return H.current&&Y.observe(H.current),()=>{Y.disconnect()}}},[l]),R.useEffect(()=>{if(c){let A=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(A)}}},[c]);let V=()=>{d(!0)},X=()=>{d(!1),h(!1)};return u?l!=="intent"?[f,H,{}]:[f,H,{onFocus:qr(g,V),onBlur:qr(p,X),onMouseEnter:qr(b,V),onMouseLeave:qr(T,X),onTouchStart:qr(O,V)}]:[!1,H,{}]}function qr(l,o){return u=>{l&&l(u),u.defaultPrevented||o(u)}}function $v({page:l,...o}){let{router:u}=k0(),c=R.useMemo(()=>g0(u.routes,l,u.basename),[u.routes,l,u.basename]);return c?R.createElement(Iv,{page:l,matches:c,...o}):null}function Wv(l){let{manifest:o,routeModules:u}=R0(),[c,d]=R.useState([]);return R.useEffect(()=>{let f=!1;return Gv(l,o,u).then(h=>{f||d(h)}),()=>{f=!0}},[l,o,u]),c}function Iv({page:l,matches:o,...u}){let c=Aa(),{future:d,manifest:f,routeModules:h}=R0(),{basename:g}=k0(),{loaderData:p,matches:b}=Fv(),T=R.useMemo(()=>Ym(l,o,b,f,c,"data"),[l,o,b,f,c]),O=R.useMemo(()=>Ym(l,o,b,f,c,"assets"),[l,o,b,f,c]),H=R.useMemo(()=>{if(l===c.pathname+c.search+c.hash)return[];let A=new Set,Y=!1;if(o.forEach(N=>{let $=f.routes[N.route.id];!$||!$.hasLoader||(!T.some(fe=>fe.route.id===N.route.id)&&N.route.id in p&&h[N.route.id]?.shouldRevalidate||$.hasClientLoader?Y=!0:A.add(N.route.id))}),A.size===0)return[];let F=Vv(l,g,d.unstable_trailingSlashAwareDataRequests,"data");return Y&&A.size>0&&F.searchParams.set("_routes",o.filter(N=>A.has(N.route.id)).map(N=>N.route.id).join(",")),[F.pathname+F.search]},[g,d.unstable_trailingSlashAwareDataRequests,p,c,f,T,o,l,h]),V=R.useMemo(()=>Qv(O,f),[O,f]),X=Wv(O);return R.createElement(R.Fragment,null,H.map(A=>R.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...u})),V.map(A=>R.createElement("link",{key:A,rel:"modulepreload",href:A,...u})),X.map(({key:A,link:Y})=>R.createElement("link",{key:A,nonce:u.nonce,...Y})))}function e1(...l){return o=>{l.forEach(u=>{typeof u=="function"?u(o):u!=null&&(u.current=o)})}}var t1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{t1&&(window.__reactRouterVersion="7.12.0")}catch{}function n1({basename:l,children:o,unstable_useTransitions:u,window:c}){let d=R.useRef();d.current==null&&(d.current=Rg({window:c,v5Compat:!0}));let f=d.current,[h,g]=R.useState({action:f.action,location:f.location}),p=R.useCallback(b=>{u===!1?g(b):R.startTransition(()=>g(b))},[u]);return R.useLayoutEffect(()=>f.listen(p),[f,p]),R.createElement(Cv,{basename:l,children:o,location:h.location,navigationType:h.action,navigator:f,unstable_useTransitions:u})}var N0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mn=R.forwardRef(function({onClick:o,discover:u="render",prefetch:c="none",relative:d,reloadDocument:f,replace:h,state:g,target:p,to:b,preventScrollReset:T,viewTransition:O,unstable_defaultShouldRevalidate:H,...V},X){let{basename:A,unstable_useTransitions:Y}=R.useContext(Kt),F=typeof b=="string"&&N0.test(b),N=O0(b,A);b=N.to;let $=hv(b,{relative:d}),[fe,ee,pe]=Pv(c,V),ne=i1(b,{replace:h,state:g,target:p,preventScrollReset:T,relative:d,viewTransition:O,unstable_defaultShouldRevalidate:H,unstable_useTransitions:Y});function I(Ve){o&&o(Ve),Ve.defaultPrevented||ne(Ve)}let be=R.createElement("a",{...V,...pe,href:N.absoluteURL||$,onClick:N.isExternal||f?o:I,ref:e1(X,ee),target:p,"data-discover":!F&&u==="render"?"true":void 0});return fe&&!F?R.createElement(R.Fragment,null,be,R.createElement($v,{page:$})):be});mn.displayName="Link";var a1=R.forwardRef(function({"aria-current":o="page",caseSensitive:u=!1,className:c="",end:d=!1,style:f,to:h,viewTransition:g,children:p,...b},T){let O=Kr(h,{relative:b.relative}),H=Aa(),V=R.useContext(Co),{navigator:X,basename:A}=R.useContext(Kt),Y=V!=null&&f1(O)&&g===!0,F=X.encodeLocation?X.encodeLocation(O).pathname:O.pathname,N=H.pathname,$=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;u||(N=N.toLowerCase(),$=$?$.toLowerCase():null,F=F.toLowerCase()),$&&A&&($=$n($,A)||$);const fe=F!=="/"&&F.endsWith("/")?F.length-1:F.length;let ee=N===F||!d&&N.startsWith(F)&&N.charAt(fe)==="/",pe=$!=null&&($===F||!d&&$.startsWith(F)&&$.charAt(F.length)==="/"),ne={isActive:ee,isPending:pe,isTransitioning:Y},I=ee?o:void 0,be;typeof c=="function"?be=c(ne):be=[c,ee?"active":null,pe?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let Ve=typeof f=="function"?f(ne):f;return R.createElement(mn,{...b,"aria-current":I,className:be,ref:T,style:Ve,to:h,viewTransition:g},typeof p=="function"?p(ne):p)});a1.displayName="NavLink";var l1=R.forwardRef(({discover:l="render",fetcherKey:o,navigate:u,reloadDocument:c,replace:d,state:f,method:h=Oo,action:g,onSubmit:p,relative:b,preventScrollReset:T,viewTransition:O,unstable_defaultShouldRevalidate:H,...V},X)=>{let{unstable_useTransitions:A}=R.useContext(Kt),Y=c1(),F=s1(g,{relative:b}),N=h.toLowerCase()==="get"?"get":"post",$=typeof g=="string"&&N0.test(g),fe=ee=>{if(p&&p(ee),ee.defaultPrevented)return;ee.preventDefault();let pe=ee.nativeEvent.submitter,ne=pe?.getAttribute("formmethod")||h,I=()=>Y(pe||ee.currentTarget,{fetcherKey:o,method:ne,navigate:u,replace:d,state:f,relative:b,preventScrollReset:T,viewTransition:O,unstable_defaultShouldRevalidate:H});A&&u!==!1?R.startTransition(()=>I()):I()};return R.createElement("form",{ref:X,method:N,action:F,onSubmit:c?p:fe,...V,"data-discover":!$&&l==="render"?"true":void 0})});l1.displayName="Form";function r1(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function j0(l){let o=R.useContext(Bl);return $e(o,r1(l)),o}function i1(l,{target:o,replace:u,state:c,preventScrollReset:d,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:g,unstable_useTransitions:p}={}){let b=Zr(),T=Aa(),O=Kr(l,{relative:f});return R.useCallback(H=>{if(Hv(H,o)){H.preventDefault();let V=u!==void 0?u:Gr(T)===Gr(O),X=()=>b(l,{replace:V,state:c,preventScrollReset:d,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:g});p?R.startTransition(()=>X()):X()}},[T,b,O,u,c,o,l,d,f,h,g,p])}var o1=0,u1=()=>`__${String(++o1)}__`;function c1(){let{router:l}=j0("useSubmit"),{basename:o}=R.useContext(Kt),u=Tv(),c=l.fetch,d=l.navigate;return R.useCallback(async(f,h={})=>{let{action:g,method:p,encType:b,formData:T,body:O}=Lv(f,o);if(h.navigate===!1){let H=h.fetcherKey||u1();await c(H,u,h.action||g,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:T,body:O,formMethod:h.method||p,formEncType:h.encType||b,flushSync:h.flushSync})}else await d(h.action||g,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:T,body:O,formMethod:h.method||p,formEncType:h.encType||b,replace:h.replace,state:h.state,fromRouteId:u,flushSync:h.flushSync,viewTransition:h.viewTransition})},[c,d,o,u])}function s1(l,{relative:o}={}){let{basename:u}=R.useContext(Kt),c=R.useContext(bn);$e(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),f={...Kr(l||".",{relative:o})},h=Aa();if(l==null){f.search=h.search;let g=new URLSearchParams(f.search),p=g.getAll("index");if(p.some(T=>T==="")){g.delete("index"),p.filter(O=>O).forEach(O=>g.append("index",O));let T=g.toString();f.search=T?`?${T}`:""}}return(!l||l===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(f.pathname=f.pathname==="/"?u:Pn([u,f.pathname])),Gr(f)}function f1(l,{relative:o}={}){let u=R.useContext(z0);$e(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=j0("useViewTransitionState"),d=Kr(l,{relative:o});if(!u.isTransitioning)return!1;let f=$n(u.currentLocation.pathname,c)||u.currentLocation.pathname,h=$n(u.nextLocation.pathname,c)||u.nextLocation.pathname;return zo(d.pathname,h)!=null||zo(d.pathname,f)!=null}const Os="http://localhost:5000",d1=async(l,o)=>{const u=await fetch(`${Os}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({voterId:l,password:o})}),c=await u.json();if(!u.ok)throw new Error(c.message||"Login failed");return c},h1=async()=>{const l=await fetch(`${Os}/api/voter/profile`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),o=await l.json();if(!l.ok)throw new Error(o.message||"Not logged in");return o},m1=async()=>{const l=await fetch(`${Os}/api/auth/logout`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"}),o=await l.json();if(!l.ok)throw new Error(o.message||"Logout failed");return o};function ht(l,o){o===void 0&&(o={});var u=o.insertAt;if(l&&typeof document<"u"){var c=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css",u==="top"&&c.firstChild?c.insertBefore(d,c.firstChild):c.appendChild(d),d.styleSheet?d.styleSheet.cssText=l:d.appendChild(document.createTextNode(l))}}ht(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var Tn=function(){return Tn=Object.assign||function(l){for(var o,u=1,c=arguments.length;u<c;u++)for(var d in o=arguments[u])Object.prototype.hasOwnProperty.call(o,d)&&(l[d]=o[d]);return l},Tn.apply(this,arguments)};function Ao(l){return Ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Ao(l)}var p1=/^\s+/,b1=/\s+$/;function ue(l,o){if(o=o||{},(l=l||"")instanceof ue)return l;if(!(this instanceof ue))return new ue(l,o);var u=(function(c){var d={r:0,g:0,b:0},f=1,h=null,g=null,p=null,b=!1,T=!1;typeof c=="string"&&(c=(function(X){X=X.replace(p1,"").replace(b1,"").toLowerCase();var A,Y=!1;if(ss[X])X=ss[X],Y=!0;else if(X=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(A=fn.rgb.exec(X))?{r:A[1],g:A[2],b:A[3]}:(A=fn.rgba.exec(X))?{r:A[1],g:A[2],b:A[3],a:A[4]}:(A=fn.hsl.exec(X))?{h:A[1],s:A[2],l:A[3]}:(A=fn.hsla.exec(X))?{h:A[1],s:A[2],l:A[3],a:A[4]}:(A=fn.hsv.exec(X))?{h:A[1],s:A[2],v:A[3]}:(A=fn.hsva.exec(X))?{h:A[1],s:A[2],v:A[3],a:A[4]}:(A=fn.hex8.exec(X))?{r:Qt(A[1]),g:Qt(A[2]),b:Qt(A[3]),a:Jm(A[4]),format:Y?"name":"hex8"}:(A=fn.hex6.exec(X))?{r:Qt(A[1]),g:Qt(A[2]),b:Qt(A[3]),format:Y?"name":"hex"}:(A=fn.hex4.exec(X))?{r:Qt(A[1]+""+A[1]),g:Qt(A[2]+""+A[2]),b:Qt(A[3]+""+A[3]),a:Jm(A[4]+""+A[4]),format:Y?"name":"hex8"}:(A=fn.hex3.exec(X))?{r:Qt(A[1]+""+A[1]),g:Qt(A[2]+""+A[2]),b:Qt(A[3]+""+A[3]),format:Y?"name":"hex"}:!1})(c)),Ao(c)=="object"&&(Kn(c.r)&&Kn(c.g)&&Kn(c.b)?(O=c.r,H=c.g,V=c.b,d={r:255*Pe(O,255),g:255*Pe(H,255),b:255*Pe(V,255)},b=!0,T=String(c.r).substr(-1)==="%"?"prgb":"rgb"):Kn(c.h)&&Kn(c.s)&&Kn(c.v)?(h=Vr(c.s),g=Vr(c.v),d=(function(X,A,Y){X=6*Pe(X,360),A=Pe(A,100),Y=Pe(Y,100);var F=Math.floor(X),N=X-F,$=Y*(1-A),fe=Y*(1-N*A),ee=Y*(1-(1-N)*A),pe=F%6,ne=[Y,fe,$,$,ee,Y][pe],I=[ee,Y,Y,fe,$,$][pe],be=[$,$,ee,Y,Y,fe][pe];return{r:255*ne,g:255*I,b:255*be}})(c.h,h,g),b=!0,T="hsv"):Kn(c.h)&&Kn(c.s)&&Kn(c.l)&&(h=Vr(c.s),p=Vr(c.l),d=(function(X,A,Y){var F,N,$;function fe(ne,I,be){return be<0&&(be+=1),be>1&&(be-=1),be<1/6?ne+6*(I-ne)*be:be<.5?I:be<2/3?ne+(I-ne)*(2/3-be)*6:ne}if(X=Pe(X,360),A=Pe(A,100),Y=Pe(Y,100),A===0)F=N=$=Y;else{var ee=Y<.5?Y*(1+A):Y+A-Y*A,pe=2*Y-ee;F=fe(pe,ee,X+1/3),N=fe(pe,ee,X),$=fe(pe,ee,X-1/3)}return{r:255*F,g:255*N,b:255*$}})(c.h,h,p),b=!0,T="hsl"),c.hasOwnProperty("a")&&(f=c.a));var O,H,V;return f=U0(f),{ok:b,format:c.format||T,r:Math.min(255,Math.max(d.r,0)),g:Math.min(255,Math.max(d.g,0)),b:Math.min(255,Math.max(d.b,0)),a:f}})(l);this._originalInput=l,this._r=u.r,this._g=u.g,this._b=u.b,this._a=u.a,this._roundA=Math.round(100*this._a)/100,this._format=o.format||u.format,this._gradientType=o.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=u.ok}function Xm(l,o,u){l=Pe(l,255),o=Pe(o,255),u=Pe(u,255);var c,d,f=Math.max(l,o,u),h=Math.min(l,o,u),g=(f+h)/2;if(f==h)c=d=0;else{var p=f-h;switch(d=g>.5?p/(2-f-h):p/(f+h),f){case l:c=(o-u)/p+(o<u?6:0);break;case o:c=(u-l)/p+2;break;case u:c=(l-o)/p+4}c/=6}return{h:c,s:d,l:g}}function Gm(l,o,u){l=Pe(l,255),o=Pe(o,255),u=Pe(u,255);var c,d,f=Math.max(l,o,u),h=Math.min(l,o,u),g=f,p=f-h;if(d=f===0?0:p/f,f==h)c=0;else{switch(f){case l:c=(o-u)/p+(o<u?6:0);break;case o:c=(u-l)/p+2;break;case u:c=(l-o)/p+4}c/=6}return{h:c,s:d,v:g}}function Qm(l,o,u,c){var d=[pn(Math.round(l).toString(16)),pn(Math.round(o).toString(16)),pn(Math.round(u).toString(16))];return c&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0):d.join("")}function Zm(l,o,u,c){return[pn(H0(c)),pn(Math.round(l).toString(16)),pn(Math.round(o).toString(16)),pn(Math.round(u).toString(16))].join("")}function g1(l,o){o=o===0?0:o||10;var u=ue(l).toHsl();return u.s-=o/100,u.s=Ro(u.s),ue(u)}function v1(l,o){o=o===0?0:o||10;var u=ue(l).toHsl();return u.s+=o/100,u.s=Ro(u.s),ue(u)}function y1(l){return ue(l).desaturate(100)}function x1(l,o){o=o===0?0:o||10;var u=ue(l).toHsl();return u.l+=o/100,u.l=Ro(u.l),ue(u)}function S1(l,o){o=o===0?0:o||10;var u=ue(l).toRgb();return u.r=Math.max(0,Math.min(255,u.r-Math.round(-o/100*255))),u.g=Math.max(0,Math.min(255,u.g-Math.round(-o/100*255))),u.b=Math.max(0,Math.min(255,u.b-Math.round(-o/100*255))),ue(u)}function O1(l,o){o=o===0?0:o||10;var u=ue(l).toHsl();return u.l-=o/100,u.l=Ro(u.l),ue(u)}function E1(l,o){var u=ue(l).toHsl(),c=(u.h+o)%360;return u.h=c<0?360+c:c,ue(u)}function z1(l){var o=ue(l).toHsl();return o.h=(o.h+180)%360,ue(o)}function Km(l,o){if(isNaN(o)||o<=0)throw new Error("Argument to polyad must be a positive number");for(var u=ue(l).toHsl(),c=[ue(l)],d=360/o,f=1;f<o;f++)c.push(ue({h:(u.h+f*d)%360,s:u.s,l:u.l}));return c}function A1(l){var o=ue(l).toHsl(),u=o.h;return[ue(l),ue({h:(u+72)%360,s:o.s,l:o.l}),ue({h:(u+216)%360,s:o.s,l:o.l})]}function T1(l,o,u){o=o||6,u=u||30;var c=ue(l).toHsl(),d=360/u,f=[ue(l)];for(c.h=(c.h-(d*o>>1)+720)%360;--o;)c.h=(c.h+d)%360,f.push(ue(c));return f}function _1(l,o){o=o||6;for(var u=ue(l).toHsv(),c=u.h,d=u.s,f=u.v,h=[],g=1/o;o--;)h.push(ue({h:c,s:d,v:f})),f=(f+g)%1;return h}ue.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var l=this.toRgb();return(299*l.r+587*l.g+114*l.b)/1e3},getLuminance:function(){var l,o,u,c=this.toRgb();return l=c.r/255,o=c.g/255,u=c.b/255,.2126*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))+.7152*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.0722*(u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4))},setAlpha:function(l){return this._a=U0(l),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var l=Gm(this._r,this._g,this._b);return{h:360*l.h,s:l.s,v:l.v,a:this._a}},toHsvString:function(){var l=Gm(this._r,this._g,this._b),o=Math.round(360*l.h),u=Math.round(100*l.s),c=Math.round(100*l.v);return this._a==1?"hsv("+o+", "+u+"%, "+c+"%)":"hsva("+o+", "+u+"%, "+c+"%, "+this._roundA+")"},toHsl:function(){var l=Xm(this._r,this._g,this._b);return{h:360*l.h,s:l.s,l:l.l,a:this._a}},toHslString:function(){var l=Xm(this._r,this._g,this._b),o=Math.round(360*l.h),u=Math.round(100*l.s),c=Math.round(100*l.l);return this._a==1?"hsl("+o+", "+u+"%, "+c+"%)":"hsla("+o+", "+u+"%, "+c+"%, "+this._roundA+")"},toHex:function(l){return Qm(this._r,this._g,this._b,l)},toHexString:function(l){return"#"+this.toHex(l)},toHex8:function(l){return(function(o,u,c,d,f){var h=[pn(Math.round(o).toString(16)),pn(Math.round(u).toString(16)),pn(Math.round(c).toString(16)),pn(H0(d))];return f&&h[0].charAt(0)==h[0].charAt(1)&&h[1].charAt(0)==h[1].charAt(1)&&h[2].charAt(0)==h[2].charAt(1)&&h[3].charAt(0)==h[3].charAt(1)?h[0].charAt(0)+h[1].charAt(0)+h[2].charAt(0)+h[3].charAt(0):h.join("")})(this._r,this._g,this._b,this._a,l)},toHex8String:function(l){return"#"+this.toHex8(l)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Pe(this._r,255))+"%",g:Math.round(100*Pe(this._g,255))+"%",b:Math.round(100*Pe(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Pe(this._r,255))+"%, "+Math.round(100*Pe(this._g,255))+"%, "+Math.round(100*Pe(this._b,255))+"%)":"rgba("+Math.round(100*Pe(this._r,255))+"%, "+Math.round(100*Pe(this._g,255))+"%, "+Math.round(100*Pe(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(w1[Qm(this._r,this._g,this._b,!0)]||!1)},toFilter:function(l){var o="#"+Zm(this._r,this._g,this._b,this._a),u=o,c=this._gradientType?"GradientType = 1, ":"";if(l){var d=ue(l);u="#"+Zm(d._r,d._g,d._b,d._a)}return"progid:DXImageTransform.Microsoft.gradient("+c+"startColorstr="+o+",endColorstr="+u+")"},toString:function(l){var o=!!l;l=l||this._format;var u=!1,c=this._a<1&&this._a>=0;return o||!c||l!=="hex"&&l!=="hex6"&&l!=="hex3"&&l!=="hex4"&&l!=="hex8"&&l!=="name"?(l==="rgb"&&(u=this.toRgbString()),l==="prgb"&&(u=this.toPercentageRgbString()),l!=="hex"&&l!=="hex6"||(u=this.toHexString()),l==="hex3"&&(u=this.toHexString(!0)),l==="hex4"&&(u=this.toHex8String(!0)),l==="hex8"&&(u=this.toHex8String()),l==="name"&&(u=this.toName()),l==="hsl"&&(u=this.toHslString()),l==="hsv"&&(u=this.toHsvString()),u||this.toHexString()):l==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ue(this.toString())},_applyModification:function(l,o){var u=l.apply(null,[this].concat([].slice.call(o)));return this._r=u._r,this._g=u._g,this._b=u._b,this.setAlpha(u._a),this},lighten:function(){return this._applyModification(x1,arguments)},brighten:function(){return this._applyModification(S1,arguments)},darken:function(){return this._applyModification(O1,arguments)},desaturate:function(){return this._applyModification(g1,arguments)},saturate:function(){return this._applyModification(v1,arguments)},greyscale:function(){return this._applyModification(y1,arguments)},spin:function(){return this._applyModification(E1,arguments)},_applyCombination:function(l,o){return l.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(T1,arguments)},complement:function(){return this._applyCombination(z1,arguments)},monochromatic:function(){return this._applyCombination(_1,arguments)},splitcomplement:function(){return this._applyCombination(A1,arguments)},triad:function(){return this._applyCombination(Km,[3])},tetrad:function(){return this._applyCombination(Km,[4])}},ue.fromRatio=function(l,o){if(Ao(l)=="object"){var u={};for(var c in l)l.hasOwnProperty(c)&&(u[c]=c==="a"?l[c]:Vr(l[c]));l=u}return ue(l,o)},ue.equals=function(l,o){return!(!l||!o)&&ue(l).toRgbString()==ue(o).toRgbString()},ue.random=function(){return ue.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ue.mix=function(l,o,u){u=u===0?0:u||50;var c=ue(l).toRgb(),d=ue(o).toRgb(),f=u/100;return ue({r:(d.r-c.r)*f+c.r,g:(d.g-c.g)*f+c.g,b:(d.b-c.b)*f+c.b,a:(d.a-c.a)*f+c.a})},ue.readability=function(l,o){var u=ue(l),c=ue(o);return(Math.max(u.getLuminance(),c.getLuminance())+.05)/(Math.min(u.getLuminance(),c.getLuminance())+.05)},ue.isReadable=function(l,o,u){var c,d,f=ue.readability(l,o);switch(d=!1,(c=(function(h){var g,p;return g=((h=h||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(h.size||"small").toLowerCase(),g!=="AA"&&g!=="AAA"&&(g="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:g,size:p}})(u)).level+c.size){case"AAsmall":case"AAAlarge":d=f>=4.5;break;case"AAlarge":d=f>=3;break;case"AAAsmall":d=f>=7}return d},ue.mostReadable=function(l,o,u){var c,d,f,h,g=null,p=0;d=(u=u||{}).includeFallbackColors,f=u.level,h=u.size;for(var b=0;b<o.length;b++)(c=ue.readability(l,o[b]))>p&&(p=c,g=ue(o[b]));return ue.isReadable(l,g,{level:f,size:h})||!d?g:(u.includeFallbackColors=!1,ue.mostReadable(l,["#fff","#000"],u))};var ss=ue.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},w1=ue.hexNames=(function(l){var o={};for(var u in l)l.hasOwnProperty(u)&&(o[l[u]]=u);return o})(ss);function U0(l){return l=parseFloat(l),(isNaN(l)||l<0||l>1)&&(l=1),l}function Pe(l,o){(function(c){return typeof c=="string"&&c.indexOf(".")!=-1&&parseFloat(c)===1})(l)&&(l="100%");var u=(function(c){return typeof c=="string"&&c.indexOf("%")!=-1})(l);return l=Math.min(o,Math.max(0,parseFloat(l))),u&&(l=parseInt(l*o,10)/100),Math.abs(l-o)<1e-6?1:l%o/parseFloat(o)}function Ro(l){return Math.min(1,Math.max(0,l))}function Qt(l){return parseInt(l,16)}function pn(l){return l.length==1?"0"+l:""+l}function Vr(l){return l<=1&&(l=100*l+"%"),l}function H0(l){return Math.round(255*parseFloat(l)).toString(16)}function Jm(l){return Qt(l)/255}var Oa,go,vo,fn=(go="[\\s|\\(]+("+(Oa="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Oa+")[,|\\s]+("+Oa+")\\s*\\)?",vo="[\\s|\\(]+("+Oa+")[,|\\s]+("+Oa+")[,|\\s]+("+Oa+")[,|\\s]+("+Oa+")\\s*\\)?",{CSS_UNIT:new RegExp(Oa),rgb:new RegExp("rgb"+go),rgba:new RegExp("rgba"+vo),hsl:new RegExp("hsl"+go),hsla:new RegExp("hsla"+vo),hsv:new RegExp("hsv"+go),hsva:new RegExp("hsva"+vo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Kn(l){return!!fn.CSS_UNIT.exec(l)}var D1=function(l,o){var u=(typeof l=="string"?parseInt(l):l)||0;if(u>=-5&&u<=5){var c=u,d=parseFloat(o),f=d+c*(d/5)*-1;return(f==0||f<=Number.EPSILON)&&(f=.1),{animationPeriod:f+"s"}}return{animationPeriod:o}},M1=function(l,o){var u=l||{},c="";switch(o){case"small":c="12px";break;case"medium":c="16px";break;case"large":c="20px";break;default:c=void 0}var d={};if(u.fontSize){var f=u.fontSize;d=(function(h,g){var p={};for(var b in h)Object.prototype.hasOwnProperty.call(h,b)&&g.indexOf(b)<0&&(p[b]=h[b]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function"){var T=0;for(b=Object.getOwnPropertySymbols(h);T<b.length;T++)g.indexOf(b[T])<0&&Object.prototype.propertyIsEnumerable.call(h,b[T])&&(p[b[T]]=h[b[T]])}return p})(u,["fontSize"]),c=f}return{fontSize:c,styles:d}},C1={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},k1=function(l){var o=l.className,u=l.text,c=l.textColor,d=l.staticText,f=l.style;return u?He.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(o||"").trim(),style:Tn(Tn(Tn({},d&&C1),c&&{color:c,mixBlendMode:"unset"}),f&&f)},typeof u=="string"&&u.length?u:"loading"):null},q0="rgb(50, 205, 50)";function R1(l,o){if(o===void 0&&(o=0),l.length===0)throw new Error("Input array cannot be empty!");var u=[];return(function c(d,f){return f===void 0&&(f=0),u.push.apply(u,d),u.length<f&&c(u,f),u.slice(0,f)})(l,o)}ht(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);ue(q0).toRgb();Array.from({length:4},(function(l,o){return"--atom-phase".concat(o+1,"-rgb")}));ht(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--commet-phase".concat(o+1,"-color")}));ht(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--OP-annulus-phase".concat(o+1,"-color")}));function ls(l){return l&&l.Math===Math&&l}ht(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);ls(typeof window=="object"&&window)||ls(typeof self=="object"&&self)||ls(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();Array.from({length:4},(function(l,o){return"--OP-dotted-phase".concat(o+1,"-color")}));ht(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--OP-spokes-phase".concat(o+1,"-color")}));ht(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},(function(l,o){return"--OP-annulus-dual-sectors-phase".concat(o+1,"-color")}));ht(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return["--OP-annulus-track-phase".concat(o+1,"-color"),"--OP-annulus-sector-phase".concat(o+1,"-color")]}));ht(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);var Nl=Array.from({length:4},(function(l,o){return"--four-square-phase".concat(o+1,"-color")})),N1=function(l){var o,u=M1(l?.style,l?.size),c=u.styles,d=u.fontSize,f=l?.easing,h=D1(l?.speedPlus,"1s").animationPeriod,g=(function(p){var b={};if(p instanceof Array){for(var T=R1(p,Nl.length),O=0;O<T.length&&!(O>=4);O++)b[Nl[O]]=T[O];return b}try{if(typeof p!="string")throw new Error("Color String expected");for(var H=0;H<Nl.length;H++)b[Nl[H]]=p}catch(V){for(V instanceof Error?console.warn("[".concat(V.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p)," received in <FourSquare /> indicator cannot be processed. Using default instead!")),H=0;H<Nl.length;H++)b[Nl[H]]=q0}return b})((o=l?.color)!==null&&o!==void 0?o:"");return He.createElement("span",{className:"rli-d-i-b foursquare-rli-bounding-box",style:Tn(Tn(Tn(Tn(Tn({},d&&{fontSize:d}),h&&{"--rli-animation-duration":h}),f&&{"--rli-animation-function":f}),g),c),role:"status","aria-live":"polite","aria-label":"Loading"},He.createElement("span",{className:"rli-d-i-b foursquare-indicator"},He.createElement("span",{className:"squares-container"},He.createElement("span",{className:"square square1"}),He.createElement("span",{className:"square square2"}),He.createElement("span",{className:"square square3"}),He.createElement("span",{className:"square square4"}))),He.createElement(k1,{text:l?.text,textColor:l?.textColor,staticText:!0}))};ht(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--mosaic-phase".concat(o+1,"-color")}));ht(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--riple-phase".concat(o+1,"-color")}));ht(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--TD-pulsate-phase".concat(o+1,"-color")}));ht(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--TD-brick-stack-phase".concat(o+1,"-color")}));ht(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--TD-bob-phase".concat(o+1,"-color")}));ht(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--TD-bounce-phase".concat(o+1,"-color")}));ht(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--shape-phase".concat(o+1,"-color")}));ht(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--trophySpin-phase".concat(o+1,"-color")}));ht(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--slab-phase".concat(o+1,"-color")}));ht(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},(function(l,o){return"--life-line-phase".concat(o+1,"-color")}));const Vl=R.createContext({user:null,error:null,loading:null,login:async(l,o)=>Promise.resolve(),logout:async()=>Promise.resolve()}),j1=({children:l})=>{const[o,u]=R.useState(null),[c,d]=R.useState(null),[f,h]=R.useState(!0),g=async(b,T)=>{try{h(!0);const O=await d1(b,T);console.log("login successful",O),u(O),d(null)}catch(O){throw u(null),d(O.message||"Login failed"),O}finally{h(!1)}};R.useEffect(()=>{(async()=>{try{const T=await h1();u(T),d(null)}catch(T){u(null),d(T.message||"Failed to fetch User")}finally{h(!1)}})()},[]);const p=async()=>{try{h(!0),await m1(),u(null),d(null)}catch(b){throw d(b.message||"Failed to Logout"),b}finally{h(!1)}};return E.jsx(Vl.Provider,{value:{user:o,login:g,logout:p,error:c,loading:f},children:f?E.jsx("div",{className:"flex h-screen w-full items-center justify-center",children:E.jsx(N1,{color:"#afaeff",size:"medium",text:"loading",textColor:""})}):l})};var Jr=l=>l.type==="checkbox",Za=l=>l instanceof Date,Ht=l=>l==null;const B0=l=>typeof l=="object";var ct=l=>!Ht(l)&&!Array.isArray(l)&&B0(l)&&!Za(l),U1=l=>ct(l)&&l.target?Jr(l.target)?l.target.checked:l.target.value:l,H1=l=>l.substring(0,l.search(/\.\d+(\.|$)/))||l,q1=(l,o)=>l.has(H1(o)),B1=l=>{const o=l.constructor&&l.constructor.prototype;return ct(o)&&o.hasOwnProperty("isPrototypeOf")},Es=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function dt(l){if(l instanceof Date)return new Date(l);const o=typeof FileList<"u"&&l instanceof FileList;if(Es&&(l instanceof Blob||o))return l;const u=Array.isArray(l);if(!u&&!(ct(l)&&B1(l)))return l;const c=u?[]:Object.create(Object.getPrototypeOf(l));for(const d in l)Object.prototype.hasOwnProperty.call(l,d)&&(c[d]=dt(l[d]));return c}var No=l=>/^\w*$/.test(l),We=l=>l===void 0,zs=l=>Array.isArray(l)?l.filter(Boolean):[],As=l=>zs(l.replace(/["|']|\]/g,"").split(/\.|\[/)),ie=(l,o,u)=>{if(!o||!ct(l))return u;const c=(No(o)?[o]:As(o)).reduce((d,f)=>Ht(d)?d:d[f],l);return We(c)||c===l?We(l[o])?u:l[o]:c},An=l=>typeof l=="boolean",dn=l=>typeof l=="function",Fe=(l,o,u)=>{let c=-1;const d=No(o)?[o]:As(o),f=d.length,h=f-1;for(;++c<f;){const g=d[c];let p=u;if(c!==h){const b=l[g];p=ct(b)||Array.isArray(b)?b:isNaN(+d[c+1])?{}:[]}if(g==="__proto__"||g==="constructor"||g==="prototype")return;l[g]=p,l=l[g]}};const Fm={BLUR:"blur",FOCUS_OUT:"focusout"},hn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Jn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},L1=He.createContext(null);L1.displayName="HookFormControlContext";var V1=(l,o,u,c=!0)=>{const d={defaultValues:o._defaultValues};for(const f in l)Object.defineProperty(d,f,{get:()=>{const h=f;return o._proxyFormState[h]!==hn.all&&(o._proxyFormState[h]=!c||hn.all),l[h]}});return d};const Y1=typeof window<"u"?He.useLayoutEffect:He.useEffect;var Zt=l=>typeof l=="string",X1=(l,o,u,c,d)=>Zt(l)?(c&&o.watch.add(l),ie(u,l,d)):Array.isArray(l)?l.map(f=>(c&&o.watch.add(f),ie(u,f))):(c&&(o.watchAll=!0),u),fs=l=>Ht(l)||!B0(l);function za(l,o,u=new WeakSet){if(fs(l)||fs(o))return Object.is(l,o);if(Za(l)&&Za(o))return Object.is(l.getTime(),o.getTime());const c=Object.keys(l),d=Object.keys(o);if(c.length!==d.length)return!1;if(u.has(l)||u.has(o))return!0;u.add(l),u.add(o);for(const f of c){const h=l[f];if(!d.includes(f))return!1;if(f!=="ref"){const g=o[f];if(Za(h)&&Za(g)||ct(h)&&ct(g)||Array.isArray(h)&&Array.isArray(g)?!za(h,g,u):!Object.is(h,g))return!1}}return!0}const G1=He.createContext(null);G1.displayName="HookFormContext";var Q1=(l,o,u,c,d)=>o?{...u[l],types:{...u[l]&&u[l].types?u[l].types:{},[c]:d||!0}}:{},Yr=l=>Array.isArray(l)?l:[l],Pm=()=>{let l=[];return{get observers(){return l},next:d=>{for(const f of l)f.next&&f.next(d)},subscribe:d=>(l.push(d),{unsubscribe:()=>{l=l.filter(f=>f!==d)}}),unsubscribe:()=>{l=[]}}};function L0(l,o){const u={};for(const c in l)if(l.hasOwnProperty(c)){const d=l[c],f=o[c];if(d&&ct(d)&&f){const h=L0(d,f);ct(h)&&(u[c]=h)}else l[c]&&(u[c]=f)}return u}var _t=l=>ct(l)&&!Object.keys(l).length,Ts=l=>l.type==="file",To=l=>{if(!Es)return!1;const o=l?l.ownerDocument:0;return l instanceof(o&&o.defaultView?o.defaultView.HTMLElement:HTMLElement)},V0=l=>l.type==="select-multiple",_s=l=>l.type==="radio",Z1=l=>_s(l)||Jr(l),rs=l=>To(l)&&l.isConnected;function K1(l,o){const u=o.slice(0,-1).length;let c=0;for(;c<u;)l=We(l)?c++:l[o[c++]];return l}function J1(l){for(const o in l)if(l.hasOwnProperty(o)&&!We(l[o]))return!1;return!0}function ut(l,o){const u=Array.isArray(o)?o:No(o)?[o]:As(o),c=u.length===1?l:K1(l,u),d=u.length-1,f=u[d];return c&&delete c[f],d!==0&&(ct(c)&&_t(c)||Array.isArray(c)&&J1(c))&&ut(l,u.slice(0,-1)),l}var F1=l=>{for(const o in l)if(dn(l[o]))return!0;return!1};function Y0(l){return Array.isArray(l)||ct(l)&&!F1(l)}function ds(l,o={}){for(const u in l){const c=l[u];Y0(c)?(o[u]=Array.isArray(c)?[]:{},ds(c,o[u])):We(c)||(o[u]=!0)}return o}function Hl(l,o,u){u||(u=ds(o));for(const c in l){const d=l[c];if(Y0(d))We(o)||fs(u[c])?u[c]=ds(d,Array.isArray(d)?[]:{}):Hl(d,Ht(o)?{}:o[c],u[c]);else{const f=o[c];u[c]=!za(d,f)}}return u}const $m={value:!1,isValid:!1},Wm={value:!0,isValid:!0};var X0=l=>{if(Array.isArray(l)){if(l.length>1){const o=l.filter(u=>u&&u.checked&&!u.disabled).map(u=>u.value);return{value:o,isValid:!!o.length}}return l[0].checked&&!l[0].disabled?l[0].attributes&&!We(l[0].attributes.value)?We(l[0].value)||l[0].value===""?Wm:{value:l[0].value,isValid:!0}:Wm:$m}return $m},G0=(l,{valueAsNumber:o,valueAsDate:u,setValueAs:c})=>We(l)?l:o?l===""?NaN:l&&+l:u&&Zt(l)?new Date(l):c?c(l):l;const Im={isValid:!1,value:null};var Q0=l=>Array.isArray(l)?l.reduce((o,u)=>u&&u.checked&&!u.disabled?{isValid:!0,value:u.value}:o,Im):Im;function e0(l){const o=l.ref;return Ts(o)?o.files:_s(o)?Q0(l.refs).value:V0(o)?[...o.selectedOptions].map(({value:u})=>u):Jr(o)?X0(l.refs).value:G0(We(o.value)?l.ref.value:o.value,l)}var P1=(l,o,u,c)=>{const d={};for(const f of l){const h=ie(o,f);h&&Fe(d,f,h._f)}return{criteriaMode:u,names:[...l],fields:d,shouldUseNativeValidation:c}},_o=l=>l instanceof RegExp,Br=l=>We(l)?l:_o(l)?l.source:ct(l)?_o(l.value)?l.value.source:l.value:l,t0=l=>({isOnSubmit:!l||l===hn.onSubmit,isOnBlur:l===hn.onBlur,isOnChange:l===hn.onChange,isOnAll:l===hn.all,isOnTouch:l===hn.onTouched});const n0="AsyncFunction";var $1=l=>!!l&&!!l.validate&&!!(dn(l.validate)&&l.validate.constructor.name===n0||ct(l.validate)&&Object.values(l.validate).find(o=>o.constructor.name===n0)),W1=l=>l.mount&&(l.required||l.min||l.max||l.maxLength||l.minLength||l.pattern||l.validate),a0=(l,o,u)=>!u&&(o.watchAll||o.watch.has(l)||[...o.watch].some(c=>l.startsWith(c)&&/^\.\w+/.test(l.slice(c.length))));const Xr=(l,o,u,c)=>{for(const d of u||Object.keys(l)){const f=ie(l,d);if(f){const{_f:h,...g}=f;if(h){if(h.refs&&h.refs[0]&&o(h.refs[0],d)&&!c)return!0;if(h.ref&&o(h.ref,h.name)&&!c)return!0;if(Xr(g,o))break}else if(ct(g)&&Xr(g,o))break}}};function l0(l,o,u){const c=ie(l,u);if(c||No(u))return{error:c,name:u};const d=u.split(".");for(;d.length;){const f=d.join("."),h=ie(o,f),g=ie(l,f);if(h&&!Array.isArray(h)&&u!==f)return{name:u};if(g&&g.type)return{name:f,error:g};if(g&&g.root&&g.root.type)return{name:`${f}.root`,error:g.root};d.pop()}return{name:u}}var I1=(l,o,u,c)=>{u(l);const{name:d,...f}=l;return _t(f)||Object.keys(f).length>=Object.keys(o).length||Object.keys(f).find(h=>o[h]===(!c||hn.all))},ey=(l,o,u)=>!l||!o||l===o||Yr(l).some(c=>c&&(u?c===o:c.startsWith(o)||o.startsWith(c))),ty=(l,o,u,c,d)=>d.isOnAll?!1:!u&&d.isOnTouch?!(o||l):(u?c.isOnBlur:d.isOnBlur)?!l:(u?c.isOnChange:d.isOnChange)?l:!0,ny=(l,o)=>!zs(ie(l,o)).length&&ut(l,o),ay=(l,o,u)=>{const c=Yr(ie(l,u));return Fe(c,"root",o[u]),Fe(l,u,c),l};function r0(l,o,u="validate"){if(Zt(l)||Array.isArray(l)&&l.every(Zt)||An(l)&&!l)return{type:u,message:Zt(l)?l:"",ref:o}}var jl=l=>ct(l)&&!_o(l)?l:{value:l,message:""},i0=async(l,o,u,c,d,f)=>{const{ref:h,refs:g,required:p,maxLength:b,minLength:T,min:O,max:H,pattern:V,validate:X,name:A,valueAsNumber:Y,mount:F}=l._f,N=ie(u,A);if(!F||o.has(A))return{};const $=g?g[0]:h,fe=ce=>{d&&$.reportValidity&&($.setCustomValidity(An(ce)?"":ce||""),$.reportValidity())},ee={},pe=_s(h),ne=Jr(h),I=pe||ne,be=(Y||Ts(h))&&We(h.value)&&We(N)||To(h)&&h.value===""||N===""||Array.isArray(N)&&!N.length,Ve=Q1.bind(null,A,c,ee),mt=(ce,xe,ke,De=Jn.maxLength,C=Jn.minLength)=>{const Q=ce?xe:ke;ee[A]={type:ce?De:C,message:Q,ref:h,...Ve(ce?De:C,Q)}};if(f?!Array.isArray(N)||!N.length:p&&(!I&&(be||Ht(N))||An(N)&&!N||ne&&!X0(g).isValid||pe&&!Q0(g).isValid)){const{value:ce,message:xe}=Zt(p)?{value:!!p,message:p}:jl(p);if(ce&&(ee[A]={type:Jn.required,message:xe,ref:$,...Ve(Jn.required,xe)},!c))return fe(xe),ee}if(!be&&(!Ht(O)||!Ht(H))){let ce,xe;const ke=jl(H),De=jl(O);if(!Ht(N)&&!isNaN(N)){const C=h.valueAsNumber||N&&+N;Ht(ke.value)||(ce=C>ke.value),Ht(De.value)||(xe=C<De.value)}else{const C=h.valueAsDate||new Date(N),Q=Te=>new Date(new Date().toDateString()+" "+Te),G=h.type=="time",Ee=h.type=="week";Zt(ke.value)&&N&&(ce=G?Q(N)>Q(ke.value):Ee?N>ke.value:C>new Date(ke.value)),Zt(De.value)&&N&&(xe=G?Q(N)<Q(De.value):Ee?N<De.value:C<new Date(De.value))}if((ce||xe)&&(mt(!!ce,ke.message,De.message,Jn.max,Jn.min),!c))return fe(ee[A].message),ee}if((b||T)&&!be&&(Zt(N)||f&&Array.isArray(N))){const ce=jl(b),xe=jl(T),ke=!Ht(ce.value)&&N.length>+ce.value,De=!Ht(xe.value)&&N.length<+xe.value;if((ke||De)&&(mt(ke,ce.message,xe.message),!c))return fe(ee[A].message),ee}if(V&&!be&&Zt(N)){const{value:ce,message:xe}=jl(V);if(_o(ce)&&!N.match(ce)&&(ee[A]={type:Jn.pattern,message:xe,ref:h,...Ve(Jn.pattern,xe)},!c))return fe(xe),ee}if(X){if(dn(X)){const ce=await X(N,u),xe=r0(ce,$);if(xe&&(ee[A]={...xe,...Ve(Jn.validate,xe.message)},!c))return fe(xe.message),ee}else if(ct(X)){let ce={};for(const xe in X){if(!_t(ce)&&!c)break;const ke=r0(await X[xe](N,u),$,xe);ke&&(ce={...ke,...Ve(xe,ke.message)},fe(ke.message),c&&(ee[A]=ce))}if(!_t(ce)&&(ee[A]={ref:$,...ce},!c))return ee}}return fe(!0),ee};const ly={mode:hn.onSubmit,reValidateMode:hn.onChange,shouldFocusError:!0};function ry(l={}){let o={...ly,...l},u={submitCount:0,isDirty:!1,isReady:!1,isLoading:dn(o.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:o.errors||{},disabled:o.disabled||!1},c={},d=ct(o.defaultValues)||ct(o.values)?dt(o.defaultValues||o.values)||{}:{},f=o.shouldUnregister?{}:dt(d),h={action:!1,mount:!1,watch:!1,keepIsValid:!1},g={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},p,b=0;const T={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},O={...T};let H={...O};const V={array:Pm(),state:Pm()},X=o.criteriaMode===hn.all,A=y=>D=>{clearTimeout(b),b=setTimeout(y,D)},Y=async y=>{if(!h.keepIsValid&&!o.disabled&&(O.isValid||H.isValid||y)){let D;o.resolver?(D=_t((await I()).errors),F()):D=await Ve(c,!0),D!==u.isValid&&V.state.next({isValid:D})}},F=(y,D)=>{!o.disabled&&(O.isValidating||O.validatingFields||H.isValidating||H.validatingFields)&&((y||Array.from(g.mount)).forEach(j=>{j&&(D?Fe(u.validatingFields,j,D):ut(u.validatingFields,j))}),V.state.next({validatingFields:u.validatingFields,isValidating:!_t(u.validatingFields)}))},N=(y,D=[],j,J,P=!0,K=!0)=>{if(J&&j&&!o.disabled){if(h.action=!0,K&&Array.isArray(ie(c,y))){const oe=j(ie(c,y),J.argA,J.argB);P&&Fe(c,y,oe)}if(K&&Array.isArray(ie(u.errors,y))){const oe=j(ie(u.errors,y),J.argA,J.argB);P&&Fe(u.errors,y,oe),ny(u.errors,y)}if((O.touchedFields||H.touchedFields)&&K&&Array.isArray(ie(u.touchedFields,y))){const oe=j(ie(u.touchedFields,y),J.argA,J.argB);P&&Fe(u.touchedFields,y,oe)}(O.dirtyFields||H.dirtyFields)&&(u.dirtyFields=Hl(d,f)),V.state.next({name:y,isDirty:ce(y,D),dirtyFields:u.dirtyFields,errors:u.errors,isValid:u.isValid})}else Fe(f,y,D)},$=(y,D)=>{Fe(u.errors,y,D),V.state.next({errors:u.errors})},fe=y=>{u.errors=y,V.state.next({errors:u.errors,isValid:!1})},ee=(y,D,j,J)=>{const P=ie(c,y);if(P){const K=ie(f,y,We(j)?ie(d,y):j);We(K)||J&&J.defaultChecked||D?Fe(f,y,D?K:e0(P._f)):De(y,K),h.mount&&!h.action&&Y()}},pe=(y,D,j,J,P)=>{let K=!1,oe=!1;const Ce={name:y};if(!o.disabled){if(!j||J){(O.isDirty||H.isDirty)&&(oe=u.isDirty,u.isDirty=Ce.isDirty=ce(),K=oe!==Ce.isDirty);const je=za(ie(d,y),D);oe=!!ie(u.dirtyFields,y),je?ut(u.dirtyFields,y):Fe(u.dirtyFields,y,!0),Ce.dirtyFields=u.dirtyFields,K=K||(O.dirtyFields||H.dirtyFields)&&oe!==!je}if(j){const je=ie(u.touchedFields,y);je||(Fe(u.touchedFields,y,j),Ce.touchedFields=u.touchedFields,K=K||(O.touchedFields||H.touchedFields)&&je!==j)}K&&P&&V.state.next(Ce)}return K?Ce:{}},ne=(y,D,j,J)=>{const P=ie(u.errors,y),K=(O.isValid||H.isValid)&&An(D)&&u.isValid!==D;if(o.delayError&&j?(p=A(()=>$(y,j)),p(o.delayError)):(clearTimeout(b),p=null,j?Fe(u.errors,y,j):ut(u.errors,y)),(j?!za(P,j):P)||!_t(J)||K){const oe={...J,...K&&An(D)?{isValid:D}:{},errors:u.errors,name:y};u={...u,...oe},V.state.next(oe)}},I=async y=>(F(y,!0),await o.resolver(f,o.context,P1(y||g.mount,c,o.criteriaMode,o.shouldUseNativeValidation))),be=async y=>{const{errors:D}=await I(y);if(F(y),y)for(const j of y){const J=ie(D,j);J?Fe(u.errors,j,J):ut(u.errors,j)}else u.errors=D;return D},Ve=async(y,D,j={valid:!0})=>{for(const J in y){const P=y[J];if(P){const{_f:K,...oe}=P;if(K){const Ce=g.array.has(K.name),je=P._f&&$1(P._f);je&&O.validatingFields&&F([K.name],!0);const pt=await i0(P,g.disabled,f,X,o.shouldUseNativeValidation&&!D,Ce);if(je&&O.validatingFields&&F([K.name]),pt[K.name]&&(j.valid=!1,D||l.shouldUseNativeValidation))break;!D&&(ie(pt,K.name)?Ce?ay(u.errors,pt,K.name):Fe(u.errors,K.name,pt[K.name]):ut(u.errors,K.name))}!_t(oe)&&await Ve(oe,D,j)}}return j.valid},mt=()=>{for(const y of g.unMount){const D=ie(c,y);D&&(D._f.refs?D._f.refs.every(j=>!rs(j)):!rs(D._f.ref))&&Ie(y)}g.unMount=new Set},ce=(y,D)=>!o.disabled&&(y&&D&&Fe(f,y,D),!za(S(),d)),xe=(y,D,j)=>X1(y,g,{...h.mount?f:We(D)?d:Zt(y)?{[y]:D}:D},j,D),ke=y=>zs(ie(h.mount?f:d,y,o.shouldUnregister?ie(d,y,[]):[])),De=(y,D,j={})=>{const J=ie(c,y);let P=D;if(J){const K=J._f;K&&(!K.disabled&&Fe(f,y,G0(D,K)),P=To(K.ref)&&Ht(D)?"":D,V0(K.ref)?[...K.ref.options].forEach(oe=>oe.selected=P.includes(oe.value)):K.refs?Jr(K.ref)?K.refs.forEach(oe=>{(!oe.defaultChecked||!oe.disabled)&&(Array.isArray(P)?oe.checked=!!P.find(Ce=>Ce===oe.value):oe.checked=P===oe.value||!!P)}):K.refs.forEach(oe=>oe.checked=oe.value===P):Ts(K.ref)?K.ref.value="":(K.ref.value=P,K.ref.type||V.state.next({name:y,values:dt(f)})))}(j.shouldDirty||j.shouldTouch)&&pe(y,P,j.shouldTouch,j.shouldDirty,!0),j.shouldValidate&&Te(y)},C=(y,D,j)=>{for(const J in D){if(!D.hasOwnProperty(J))return;const P=D[J],K=y+"."+J,oe=ie(c,K);(g.array.has(y)||ct(P)||oe&&!oe._f)&&!Za(P)?C(K,P,j):De(K,P,j)}},Q=(y,D,j={})=>{const J=ie(c,y),P=g.array.has(y),K=dt(D);Fe(f,y,K),P?(V.array.next({name:y,values:dt(f)}),(O.isDirty||O.dirtyFields||H.isDirty||H.dirtyFields)&&j.shouldDirty&&V.state.next({name:y,dirtyFields:Hl(d,f),isDirty:ce(y,K)})):J&&!J._f&&!Ht(K)?C(y,K,j):De(y,K,j),a0(y,g)?V.state.next({...u,name:y,values:dt(f)}):V.state.next({name:h.mount?y:void 0,values:dt(f)})},G=async y=>{h.mount=!0;const D=y.target;let j=D.name,J=!0;const P=ie(c,j),K=je=>{J=Number.isNaN(je)||Za(je)&&isNaN(je.getTime())||za(je,ie(f,j,je))},oe=t0(o.mode),Ce=t0(o.reValidateMode);if(P){let je,pt;const wn=D.type?e0(P._f):U1(y),yn=y.type===Fm.BLUR||y.type===Fm.FOCUS_OUT,Ta=!W1(P._f)&&!o.resolver&&!ie(u.errors,j)&&!P._f.deps||ty(yn,ie(u.touchedFields,j),u.isSubmitted,Ce,oe),vt=a0(j,g,yn);Fe(f,j,wn),yn?(!D||!D.readOnly)&&(P._f.onBlur&&P._f.onBlur(y),p&&p(0)):P._f.onChange&&P._f.onChange(y);const Ft=pe(j,wn,yn),At=!_t(Ft)||vt;if(!yn&&V.state.next({name:j,type:y.type,values:dt(f)}),Ta)return(O.isValid||H.isValid)&&(o.mode==="onBlur"?yn&&Y():yn||Y()),At&&V.state.next({name:j,...vt?{}:Ft});if(!yn&&vt&&V.state.next({...u}),o.resolver){const{errors:$r}=await I([j]);if(F([j]),K(wn),J){const Uo=l0(u.errors,c,j),Wr=l0($r,c,Uo.name||j);je=Wr.error,j=Wr.name,pt=_t($r)}}else F([j],!0),je=(await i0(P,g.disabled,f,X,o.shouldUseNativeValidation))[j],F([j]),K(wn),J&&(je?pt=!1:(O.isValid||H.isValid)&&(pt=await Ve(c,!0)));J&&(P._f.deps&&(!Array.isArray(P._f.deps)||P._f.deps.length>0)&&Te(P._f.deps),ne(j,pt,je,Ft))}},Ee=(y,D)=>{if(ie(u.errors,D)&&y.focus)return y.focus(),1},Te=async(y,D={})=>{let j,J;const P=Yr(y);if(o.resolver){const K=await be(We(y)?y:P);j=_t(K),J=y?!P.some(oe=>ie(K,oe)):j}else y?(J=(await Promise.all(P.map(async K=>{const oe=ie(c,K);return await Ve(oe&&oe._f?{[K]:oe}:oe)}))).every(Boolean),!(!J&&!u.isValid)&&Y()):J=j=await Ve(c);return V.state.next({...!Zt(y)||(O.isValid||H.isValid)&&j!==u.isValid?{}:{name:y},...o.resolver||!y?{isValid:j}:{},errors:u.errors}),D.shouldFocus&&!J&&Xr(c,Ee,y?P:g.mount),J},S=(y,D)=>{let j={...h.mount?f:d};return D&&(j=L0(D.dirtyFields?u.dirtyFields:u.touchedFields,j)),We(y)?j:Zt(y)?ie(j,y):y.map(J=>ie(j,J))},B=(y,D)=>({invalid:!!ie((D||u).errors,y),isDirty:!!ie((D||u).dirtyFields,y),error:ie((D||u).errors,y),isValidating:!!ie(u.validatingFields,y),isTouched:!!ie((D||u).touchedFields,y)}),Z=y=>{y&&Yr(y).forEach(D=>ut(u.errors,D)),V.state.next({errors:y?u.errors:{}})},W=(y,D,j)=>{const J=(ie(c,y,{_f:{}})._f||{}).ref,P=ie(u.errors,y)||{},{ref:K,message:oe,type:Ce,...je}=P;Fe(u.errors,y,{...je,...D,ref:J}),V.state.next({name:y,errors:u.errors,isValid:!1}),j&&j.shouldFocus&&J&&J.focus&&J.focus()},me=(y,D)=>dn(y)?V.state.subscribe({next:j=>"values"in j&&y(xe(void 0,D),j)}):xe(y,D,!0),ve=y=>V.state.subscribe({next:D=>{ey(y.name,D.name,y.exact)&&I1(D,y.formState||O,Fr,y.reRenderRoot)&&y.callback({values:{...f},...u,...D,defaultValues:d})}}).unsubscribe,de=y=>(h.mount=!0,H={...H,...y.formState},ve({...y,formState:{...T,...y.formState}})),Ie=(y,D={})=>{for(const j of y?Yr(y):g.mount)g.mount.delete(j),g.array.delete(j),D.keepValue||(ut(c,j),ut(f,j)),!D.keepError&&ut(u.errors,j),!D.keepDirty&&ut(u.dirtyFields,j),!D.keepTouched&&ut(u.touchedFields,j),!D.keepIsValidating&&ut(u.validatingFields,j),!o.shouldUnregister&&!D.keepDefaultValue&&ut(d,j);V.state.next({values:dt(f)}),V.state.next({...u,...D.keepDirty?{isDirty:ce()}:{}}),!D.keepIsValid&&Y()},qe=({disabled:y,name:D})=>{if(An(y)&&h.mount||y||g.disabled.has(D)){const P=g.disabled.has(D)!==!!y;y?g.disabled.add(D):g.disabled.delete(D),P&&h.mount&&!h.action&&Y()}},wt=(y,D={})=>{let j=ie(c,y);const J=An(D.disabled)||An(o.disabled);return Fe(c,y,{...j||{},_f:{...j&&j._f?j._f:{ref:{name:y}},name:y,mount:!0,...D}}),g.mount.add(y),j?qe({disabled:An(D.disabled)?D.disabled:o.disabled,name:y}):ee(y,!0,D.value),{...J?{disabled:D.disabled||o.disabled}:{},...o.progressive?{required:!!D.required,min:Br(D.min),max:Br(D.max),minLength:Br(D.minLength),maxLength:Br(D.maxLength),pattern:Br(D.pattern)}:{},name:y,onChange:G,onBlur:G,ref:P=>{if(P){wt(y,D),j=ie(c,y);const K=We(P.value)&&P.querySelectorAll&&P.querySelectorAll("input,select,textarea")[0]||P,oe=Z1(K),Ce=j._f.refs||[];if(oe?Ce.find(je=>je===K):K===j._f.ref)return;Fe(c,y,{_f:{...j._f,...oe?{refs:[...Ce.filter(rs),K,...Array.isArray(ie(d,y))?[{}]:[]],ref:{type:K.type,name:y}}:{ref:K}}}),ee(y,!1,void 0,K)}else j=ie(c,y,{}),j._f&&(j._f.mount=!1),(o.shouldUnregister||D.shouldUnregister)&&!(q1(g.array,y)&&h.action)&&g.unMount.add(y)}}},Jt=()=>o.shouldFocusError&&Xr(c,Ee,g.mount),vn=y=>{An(y)&&(V.state.next({disabled:y}),Xr(c,(D,j)=>{const J=ie(c,j);J&&(D.disabled=J._f.disabled||y,Array.isArray(J._f.refs)&&J._f.refs.forEach(P=>{P.disabled=J._f.disabled||y}))},0,!1))},Gl=(y,D)=>async j=>{let J;j&&(j.preventDefault&&j.preventDefault(),j.persist&&j.persist());let P=dt(f);if(V.state.next({isSubmitting:!0}),o.resolver){const{errors:K,values:oe}=await I();F(),u.errors=K,P=dt(oe)}else await Ve(c);if(g.disabled.size)for(const K of g.disabled)ut(P,K);if(ut(u.errors,"root"),_t(u.errors)){V.state.next({errors:{}});try{await y(P,j)}catch(K){J=K}}else D&&await D({...u.errors},j),Jt(),setTimeout(Jt);if(V.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:_t(u.errors)&&!J,submitCount:u.submitCount+1,errors:u.errors}),J)throw J},_n=(y,D={})=>{ie(c,y)&&(We(D.defaultValue)?Q(y,dt(ie(d,y))):(Q(y,D.defaultValue),Fe(d,y,dt(D.defaultValue))),D.keepTouched||ut(u.touchedFields,y),D.keepDirty||(ut(u.dirtyFields,y),u.isDirty=D.defaultValue?ce(y,dt(ie(d,y))):ce()),D.keepError||(ut(u.errors,y),O.isValid&&Y()),V.state.next({...u}))},Ka=(y,D={})=>{const j=y?dt(y):d,J=dt(j),P=_t(y),K=P?d:J;if(D.keepDefaultValues||(d=j),!D.keepValues){if(D.keepDirtyValues){const oe=new Set([...g.mount,...Object.keys(Hl(d,f))]);for(const Ce of Array.from(oe)){const je=ie(u.dirtyFields,Ce),pt=ie(f,Ce),wn=ie(K,Ce);je&&!We(pt)?Fe(K,Ce,pt):!je&&!We(wn)&&Q(Ce,wn)}}else{if(Es&&We(y))for(const oe of g.mount){const Ce=ie(c,oe);if(Ce&&Ce._f){const je=Array.isArray(Ce._f.refs)?Ce._f.refs[0]:Ce._f.ref;if(To(je)){const pt=je.closest("form");if(pt){pt.reset();break}}}}if(D.keepFieldsRef)for(const oe of g.mount)Q(oe,ie(K,oe));else c={}}f=o.shouldUnregister?D.keepDefaultValues?dt(d):{}:dt(K),V.array.next({values:{...K}}),V.state.next({values:{...K}})}g={mount:D.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!O.isValid||!!D.keepIsValid||!!D.keepDirtyValues||!o.shouldUnregister&&!_t(K),h.watch=!!o.shouldUnregister,h.keepIsValid=!!D.keepIsValid,h.action=!1,D.keepErrors||(u.errors={}),V.state.next({submitCount:D.keepSubmitCount?u.submitCount:0,isDirty:P?!1:D.keepDirty?u.isDirty:!!(D.keepDefaultValues&&!za(y,d)),isSubmitted:D.keepIsSubmitted?u.isSubmitted:!1,dirtyFields:P?{}:D.keepDirtyValues?D.keepDefaultValues&&f?Hl(d,f):u.dirtyFields:D.keepDefaultValues&&y?Hl(d,y):D.keepDirty?u.dirtyFields:{},touchedFields:D.keepTouched?u.touchedFields:{},errors:D.keepErrors?u.errors:{},isSubmitSuccessful:D.keepIsSubmitSuccessful?u.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:d})},Ja=(y,D)=>Ka(dn(y)?y(f):y,{...o.resetOptions,...D}),jo=(y,D={})=>{const j=ie(c,y),J=j&&j._f;if(J){const P=J.refs?J.refs[0]:J.ref;P.focus&&setTimeout(()=>{P.focus(),D.shouldSelect&&dn(P.select)&&P.select()})}},Fr=y=>{u={...u,...y}},Fa={control:{register:wt,unregister:Ie,getFieldState:B,handleSubmit:Gl,setError:W,_subscribe:ve,_runSchema:I,_updateIsValidating:F,_focusError:Jt,_getWatch:xe,_getDirty:ce,_setValid:Y,_setFieldArray:N,_setDisabledField:qe,_setErrors:fe,_getFieldArray:ke,_reset:Ka,_resetDefaultValues:()=>dn(o.defaultValues)&&o.defaultValues().then(y=>{Ja(y,o.resetOptions),V.state.next({isLoading:!1})}),_removeUnmounted:mt,_disableForm:vn,_subjects:V,_proxyFormState:O,get _fields(){return c},get _formValues(){return f},get _state(){return h},set _state(y){h=y},get _defaultValues(){return d},get _names(){return g},set _names(y){g=y},get _formState(){return u},get _options(){return o},set _options(y){o={...o,...y}}},subscribe:de,trigger:Te,register:wt,handleSubmit:Gl,watch:me,setValue:Q,getValues:S,reset:Ja,resetField:_n,clearErrors:Z,unregister:Ie,setError:W,setFocus:jo,getFieldState:B};return{...Fa,formControl:Fa}}function Z0(l={}){const o=He.useRef(void 0),u=He.useRef(void 0),[c,d]=He.useState({isDirty:!1,isValidating:!1,isLoading:dn(l.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:l.errors||{},disabled:l.disabled||!1,isReady:!1,defaultValues:dn(l.defaultValues)?void 0:l.defaultValues});if(!o.current)if(l.formControl)o.current={...l.formControl,formState:c},l.defaultValues&&!dn(l.defaultValues)&&l.formControl.reset(l.defaultValues,l.resetOptions);else{const{formControl:h,...g}=ry(l);o.current={...g,formState:c}}const f=o.current.control;return f._options=l,Y1(()=>{const h=f._subscribe({formState:f._proxyFormState,callback:()=>d({...f._formState}),reRenderRoot:!0});return d(g=>({...g,isReady:!0})),f._formState.isReady=!0,h},[f]),He.useEffect(()=>f._disableForm(l.disabled),[f,l.disabled]),He.useEffect(()=>{l.mode&&(f._options.mode=l.mode),l.reValidateMode&&(f._options.reValidateMode=l.reValidateMode)},[f,l.mode,l.reValidateMode]),He.useEffect(()=>{l.errors&&(f._setErrors(l.errors),f._focusError())},[f,l.errors]),He.useEffect(()=>{l.shouldUnregister&&f._subjects.state.next({values:f._getWatch()})},[f,l.shouldUnregister]),He.useEffect(()=>{if(f._proxyFormState.isDirty){const h=f._getDirty();h!==c.isDirty&&f._subjects.state.next({isDirty:h})}},[f,c.isDirty]),He.useEffect(()=>{var h;l.values&&!za(l.values,u.current)?(f._reset(l.values,{keepFieldsRef:!0,...f._options.resetOptions}),!((h=f._options.resetOptions)===null||h===void 0)&&h.keepIsValid||f._setValid(),u.current=l.values,d(g=>({...g}))):f._resetDefaultValues()},[f,l.values]),He.useEffect(()=>{f._state.mount||(f._setValid(),f._state.mount=!0),f._state.watch&&(f._state.watch=!1,f._subjects.state.next({...f._formState})),f._removeUnmounted()}),o.current.formState=He.useMemo(()=>V1(c,f),[f,c]),o.current}function K0(l){var o,u,c="";if(typeof l=="string"||typeof l=="number")c+=l;else if(typeof l=="object")if(Array.isArray(l)){var d=l.length;for(o=0;o<d;o++)l[o]&&(u=K0(l[o]))&&(c&&(c+=" "),c+=u)}else for(u in l)l[u]&&(c&&(c+=" "),c+=u);return c}function iy(){for(var l,o,u=0,c="",d=arguments.length;u<d;u++)(l=arguments[u])&&(o=K0(l))&&(c&&(c+=" "),c+=o);return c}const oy=(l,o)=>{const u=new Array(l.length+o.length);for(let c=0;c<l.length;c++)u[c]=l[c];for(let c=0;c<o.length;c++)u[l.length+c]=o[c];return u},uy=(l,o)=>({classGroupId:l,validator:o}),J0=(l=new Map,o=null,u)=>({nextPart:l,validators:o,classGroupId:u}),wo="-",o0=[],cy="arbitrary..",sy=l=>{const o=dy(l),{conflictingClassGroups:u,conflictingClassGroupModifiers:c}=l;return{getClassGroupId:h=>{if(h.startsWith("[")&&h.endsWith("]"))return fy(h);const g=h.split(wo),p=g[0]===""&&g.length>1?1:0;return F0(g,p,o)},getConflictingClassGroupIds:(h,g)=>{if(g){const p=c[h],b=u[h];return p?b?oy(b,p):p:b||o0}return u[h]||o0}}},F0=(l,o,u)=>{if(l.length-o===0)return u.classGroupId;const d=l[o],f=u.nextPart.get(d);if(f){const b=F0(l,o+1,f);if(b)return b}const h=u.validators;if(h===null)return;const g=o===0?l.join(wo):l.slice(o).join(wo),p=h.length;for(let b=0;b<p;b++){const T=h[b];if(T.validator(g))return T.classGroupId}},fy=l=>l.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const o=l.slice(1,-1),u=o.indexOf(":"),c=o.slice(0,u);return c?cy+c:void 0})(),dy=l=>{const{theme:o,classGroups:u}=l;return hy(u,o)},hy=(l,o)=>{const u=J0();for(const c in l){const d=l[c];ws(d,u,c,o)}return u},ws=(l,o,u,c)=>{const d=l.length;for(let f=0;f<d;f++){const h=l[f];my(h,o,u,c)}},my=(l,o,u,c)=>{if(typeof l=="string"){py(l,o,u);return}if(typeof l=="function"){by(l,o,u,c);return}gy(l,o,u,c)},py=(l,o,u)=>{const c=l===""?o:P0(o,l);c.classGroupId=u},by=(l,o,u,c)=>{if(vy(l)){ws(l(c),o,u,c);return}o.validators===null&&(o.validators=[]),o.validators.push(uy(u,l))},gy=(l,o,u,c)=>{const d=Object.entries(l),f=d.length;for(let h=0;h<f;h++){const[g,p]=d[h];ws(p,P0(o,g),u,c)}},P0=(l,o)=>{let u=l;const c=o.split(wo),d=c.length;for(let f=0;f<d;f++){const h=c[f];let g=u.nextPart.get(h);g||(g=J0(),u.nextPart.set(h,g)),u=g}return u},vy=l=>"isThemeGetter"in l&&l.isThemeGetter===!0,yy=l=>{if(l<1)return{get:()=>{},set:()=>{}};let o=0,u=Object.create(null),c=Object.create(null);const d=(f,h)=>{u[f]=h,o++,o>l&&(o=0,c=u,u=Object.create(null))};return{get(f){let h=u[f];if(h!==void 0)return h;if((h=c[f])!==void 0)return d(f,h),h},set(f,h){f in u?u[f]=h:d(f,h)}}},hs="!",u0=":",xy=[],c0=(l,o,u,c,d)=>({modifiers:l,hasImportantModifier:o,baseClassName:u,maybePostfixModifierPosition:c,isExternal:d}),Sy=l=>{const{prefix:o,experimentalParseClassName:u}=l;let c=d=>{const f=[];let h=0,g=0,p=0,b;const T=d.length;for(let A=0;A<T;A++){const Y=d[A];if(h===0&&g===0){if(Y===u0){f.push(d.slice(p,A)),p=A+1;continue}if(Y==="/"){b=A;continue}}Y==="["?h++:Y==="]"?h--:Y==="("?g++:Y===")"&&g--}const O=f.length===0?d:d.slice(p);let H=O,V=!1;O.endsWith(hs)?(H=O.slice(0,-1),V=!0):O.startsWith(hs)&&(H=O.slice(1),V=!0);const X=b&&b>p?b-p:void 0;return c0(f,V,H,X)};if(o){const d=o+u0,f=c;c=h=>h.startsWith(d)?f(h.slice(d.length)):c0(xy,!1,h,void 0,!0)}if(u){const d=c;c=f=>u({className:f,parseClassName:d})}return c},Oy=l=>{const o=new Map;return l.orderSensitiveModifiers.forEach((u,c)=>{o.set(u,1e6+c)}),u=>{const c=[];let d=[];for(let f=0;f<u.length;f++){const h=u[f],g=h[0]==="[",p=o.has(h);g||p?(d.length>0&&(d.sort(),c.push(...d),d=[]),c.push(h)):d.push(h)}return d.length>0&&(d.sort(),c.push(...d)),c}},Ey=l=>({cache:yy(l.cacheSize),parseClassName:Sy(l),sortModifiers:Oy(l),...sy(l)}),zy=/\s+/,Ay=(l,o)=>{const{parseClassName:u,getClassGroupId:c,getConflictingClassGroupIds:d,sortModifiers:f}=o,h=[],g=l.trim().split(zy);let p="";for(let b=g.length-1;b>=0;b-=1){const T=g[b],{isExternal:O,modifiers:H,hasImportantModifier:V,baseClassName:X,maybePostfixModifierPosition:A}=u(T);if(O){p=T+(p.length>0?" "+p:p);continue}let Y=!!A,F=c(Y?X.substring(0,A):X);if(!F){if(!Y){p=T+(p.length>0?" "+p:p);continue}if(F=c(X),!F){p=T+(p.length>0?" "+p:p);continue}Y=!1}const N=H.length===0?"":H.length===1?H[0]:f(H).join(":"),$=V?N+hs:N,fe=$+F;if(h.indexOf(fe)>-1)continue;h.push(fe);const ee=d(F,Y);for(let pe=0;pe<ee.length;++pe){const ne=ee[pe];h.push($+ne)}p=T+(p.length>0?" "+p:p)}return p},Ty=(...l)=>{let o=0,u,c,d="";for(;o<l.length;)(u=l[o++])&&(c=$0(u))&&(d&&(d+=" "),d+=c);return d},$0=l=>{if(typeof l=="string")return l;let o,u="";for(let c=0;c<l.length;c++)l[c]&&(o=$0(l[c]))&&(u&&(u+=" "),u+=o);return u},_y=(l,...o)=>{let u,c,d,f;const h=p=>{const b=o.reduce((T,O)=>O(T),l());return u=Ey(b),c=u.cache.get,d=u.cache.set,f=g,g(p)},g=p=>{const b=c(p);if(b)return b;const T=Ay(p,u);return d(p,T),T};return f=h,(...p)=>f(Ty(...p))},wy=[],ft=l=>{const o=u=>u[l]||wy;return o.isThemeGetter=!0,o},W0=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,I0=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Dy=/^\d+\/\d+$/,My=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Cy=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ky=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Ry=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ny=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ul=l=>Dy.test(l),Oe=l=>!!l&&!Number.isNaN(Number(l)),Ea=l=>!!l&&Number.isInteger(Number(l)),is=l=>l.endsWith("%")&&Oe(l.slice(0,-1)),Fn=l=>My.test(l),jy=()=>!0,Uy=l=>Cy.test(l)&&!ky.test(l),ep=()=>!1,Hy=l=>Ry.test(l),qy=l=>Ny.test(l),By=l=>!ae(l)&&!le(l),Ly=l=>Yl(l,ap,ep),ae=l=>W0.test(l),Qa=l=>Yl(l,lp,Uy),os=l=>Yl(l,Qy,Oe),s0=l=>Yl(l,tp,ep),Vy=l=>Yl(l,np,qy),yo=l=>Yl(l,rp,Hy),le=l=>I0.test(l),Lr=l=>Xl(l,lp),Yy=l=>Xl(l,Zy),f0=l=>Xl(l,tp),Xy=l=>Xl(l,ap),Gy=l=>Xl(l,np),xo=l=>Xl(l,rp,!0),Yl=(l,o,u)=>{const c=W0.exec(l);return c?c[1]?o(c[1]):u(c[2]):!1},Xl=(l,o,u=!1)=>{const c=I0.exec(l);return c?c[1]?o(c[1]):u:!1},tp=l=>l==="position"||l==="percentage",np=l=>l==="image"||l==="url",ap=l=>l==="length"||l==="size"||l==="bg-size",lp=l=>l==="length",Qy=l=>l==="number",Zy=l=>l==="family-name",rp=l=>l==="shadow",Ky=()=>{const l=ft("color"),o=ft("font"),u=ft("text"),c=ft("font-weight"),d=ft("tracking"),f=ft("leading"),h=ft("breakpoint"),g=ft("container"),p=ft("spacing"),b=ft("radius"),T=ft("shadow"),O=ft("inset-shadow"),H=ft("text-shadow"),V=ft("drop-shadow"),X=ft("blur"),A=ft("perspective"),Y=ft("aspect"),F=ft("ease"),N=ft("animate"),$=()=>["auto","avoid","all","avoid-page","page","left","right","column"],fe=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],ee=()=>[...fe(),le,ae],pe=()=>["auto","hidden","clip","visible","scroll"],ne=()=>["auto","contain","none"],I=()=>[le,ae,p],be=()=>[Ul,"full","auto",...I()],Ve=()=>[Ea,"none","subgrid",le,ae],mt=()=>["auto",{span:["full",Ea,le,ae]},Ea,le,ae],ce=()=>[Ea,"auto",le,ae],xe=()=>["auto","min","max","fr",le,ae],ke=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],De=()=>["start","end","center","stretch","center-safe","end-safe"],C=()=>["auto",...I()],Q=()=>[Ul,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...I()],G=()=>[l,le,ae],Ee=()=>[...fe(),f0,s0,{position:[le,ae]}],Te=()=>["no-repeat",{repeat:["","x","y","space","round"]}],S=()=>["auto","cover","contain",Xy,Ly,{size:[le,ae]}],B=()=>[is,Lr,Qa],Z=()=>["","none","full",b,le,ae],W=()=>["",Oe,Lr,Qa],me=()=>["solid","dashed","dotted","double"],ve=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],de=()=>[Oe,is,f0,s0],Ie=()=>["","none",X,le,ae],qe=()=>["none",Oe,le,ae],wt=()=>["none",Oe,le,ae],Jt=()=>[Oe,le,ae],vn=()=>[Ul,"full",...I()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Fn],breakpoint:[Fn],color:[jy],container:[Fn],"drop-shadow":[Fn],ease:["in","out","in-out"],font:[By],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Fn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Fn],shadow:[Fn],spacing:["px",Oe],text:[Fn],"text-shadow":[Fn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ul,ae,le,Y]}],container:["container"],columns:[{columns:[Oe,ae,le,g]}],"break-after":[{"break-after":$()}],"break-before":[{"break-before":$()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:ee()}],overflow:[{overflow:pe()}],"overflow-x":[{"overflow-x":pe()}],"overflow-y":[{"overflow-y":pe()}],overscroll:[{overscroll:ne()}],"overscroll-x":[{"overscroll-x":ne()}],"overscroll-y":[{"overscroll-y":ne()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:be()}],"inset-x":[{"inset-x":be()}],"inset-y":[{"inset-y":be()}],start:[{start:be()}],end:[{end:be()}],top:[{top:be()}],right:[{right:be()}],bottom:[{bottom:be()}],left:[{left:be()}],visibility:["visible","invisible","collapse"],z:[{z:[Ea,"auto",le,ae]}],basis:[{basis:[Ul,"full","auto",g,...I()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Oe,Ul,"auto","initial","none",ae]}],grow:[{grow:["",Oe,le,ae]}],shrink:[{shrink:["",Oe,le,ae]}],order:[{order:[Ea,"first","last","none",le,ae]}],"grid-cols":[{"grid-cols":Ve()}],"col-start-end":[{col:mt()}],"col-start":[{"col-start":ce()}],"col-end":[{"col-end":ce()}],"grid-rows":[{"grid-rows":Ve()}],"row-start-end":[{row:mt()}],"row-start":[{"row-start":ce()}],"row-end":[{"row-end":ce()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":xe()}],"auto-rows":[{"auto-rows":xe()}],gap:[{gap:I()}],"gap-x":[{"gap-x":I()}],"gap-y":[{"gap-y":I()}],"justify-content":[{justify:[...ke(),"normal"]}],"justify-items":[{"justify-items":[...De(),"normal"]}],"justify-self":[{"justify-self":["auto",...De()]}],"align-content":[{content:["normal",...ke()]}],"align-items":[{items:[...De(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...De(),{baseline:["","last"]}]}],"place-content":[{"place-content":ke()}],"place-items":[{"place-items":[...De(),"baseline"]}],"place-self":[{"place-self":["auto",...De()]}],p:[{p:I()}],px:[{px:I()}],py:[{py:I()}],ps:[{ps:I()}],pe:[{pe:I()}],pt:[{pt:I()}],pr:[{pr:I()}],pb:[{pb:I()}],pl:[{pl:I()}],m:[{m:C()}],mx:[{mx:C()}],my:[{my:C()}],ms:[{ms:C()}],me:[{me:C()}],mt:[{mt:C()}],mr:[{mr:C()}],mb:[{mb:C()}],ml:[{ml:C()}],"space-x":[{"space-x":I()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":I()}],"space-y-reverse":["space-y-reverse"],size:[{size:Q()}],w:[{w:[g,"screen",...Q()]}],"min-w":[{"min-w":[g,"screen","none",...Q()]}],"max-w":[{"max-w":[g,"screen","none","prose",{screen:[h]},...Q()]}],h:[{h:["screen","lh",...Q()]}],"min-h":[{"min-h":["screen","lh","none",...Q()]}],"max-h":[{"max-h":["screen","lh",...Q()]}],"font-size":[{text:["base",u,Lr,Qa]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[c,le,os]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",is,ae]}],"font-family":[{font:[Yy,ae,o]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[d,le,ae]}],"line-clamp":[{"line-clamp":[Oe,"none",le,os]}],leading:[{leading:[f,...I()]}],"list-image":[{"list-image":["none",le,ae]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",le,ae]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:G()}],"text-color":[{text:G()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...me(),"wavy"]}],"text-decoration-thickness":[{decoration:[Oe,"from-font","auto",le,Qa]}],"text-decoration-color":[{decoration:G()}],"underline-offset":[{"underline-offset":[Oe,"auto",le,ae]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",le,ae]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",le,ae]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Ee()}],"bg-repeat":[{bg:Te()}],"bg-size":[{bg:S()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Ea,le,ae],radial:["",le,ae],conic:[Ea,le,ae]},Gy,Vy]}],"bg-color":[{bg:G()}],"gradient-from-pos":[{from:B()}],"gradient-via-pos":[{via:B()}],"gradient-to-pos":[{to:B()}],"gradient-from":[{from:G()}],"gradient-via":[{via:G()}],"gradient-to":[{to:G()}],rounded:[{rounded:Z()}],"rounded-s":[{"rounded-s":Z()}],"rounded-e":[{"rounded-e":Z()}],"rounded-t":[{"rounded-t":Z()}],"rounded-r":[{"rounded-r":Z()}],"rounded-b":[{"rounded-b":Z()}],"rounded-l":[{"rounded-l":Z()}],"rounded-ss":[{"rounded-ss":Z()}],"rounded-se":[{"rounded-se":Z()}],"rounded-ee":[{"rounded-ee":Z()}],"rounded-es":[{"rounded-es":Z()}],"rounded-tl":[{"rounded-tl":Z()}],"rounded-tr":[{"rounded-tr":Z()}],"rounded-br":[{"rounded-br":Z()}],"rounded-bl":[{"rounded-bl":Z()}],"border-w":[{border:W()}],"border-w-x":[{"border-x":W()}],"border-w-y":[{"border-y":W()}],"border-w-s":[{"border-s":W()}],"border-w-e":[{"border-e":W()}],"border-w-t":[{"border-t":W()}],"border-w-r":[{"border-r":W()}],"border-w-b":[{"border-b":W()}],"border-w-l":[{"border-l":W()}],"divide-x":[{"divide-x":W()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":W()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...me(),"hidden","none"]}],"divide-style":[{divide:[...me(),"hidden","none"]}],"border-color":[{border:G()}],"border-color-x":[{"border-x":G()}],"border-color-y":[{"border-y":G()}],"border-color-s":[{"border-s":G()}],"border-color-e":[{"border-e":G()}],"border-color-t":[{"border-t":G()}],"border-color-r":[{"border-r":G()}],"border-color-b":[{"border-b":G()}],"border-color-l":[{"border-l":G()}],"divide-color":[{divide:G()}],"outline-style":[{outline:[...me(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Oe,le,ae]}],"outline-w":[{outline:["",Oe,Lr,Qa]}],"outline-color":[{outline:G()}],shadow:[{shadow:["","none",T,xo,yo]}],"shadow-color":[{shadow:G()}],"inset-shadow":[{"inset-shadow":["none",O,xo,yo]}],"inset-shadow-color":[{"inset-shadow":G()}],"ring-w":[{ring:W()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:G()}],"ring-offset-w":[{"ring-offset":[Oe,Qa]}],"ring-offset-color":[{"ring-offset":G()}],"inset-ring-w":[{"inset-ring":W()}],"inset-ring-color":[{"inset-ring":G()}],"text-shadow":[{"text-shadow":["none",H,xo,yo]}],"text-shadow-color":[{"text-shadow":G()}],opacity:[{opacity:[Oe,le,ae]}],"mix-blend":[{"mix-blend":[...ve(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ve()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Oe]}],"mask-image-linear-from-pos":[{"mask-linear-from":de()}],"mask-image-linear-to-pos":[{"mask-linear-to":de()}],"mask-image-linear-from-color":[{"mask-linear-from":G()}],"mask-image-linear-to-color":[{"mask-linear-to":G()}],"mask-image-t-from-pos":[{"mask-t-from":de()}],"mask-image-t-to-pos":[{"mask-t-to":de()}],"mask-image-t-from-color":[{"mask-t-from":G()}],"mask-image-t-to-color":[{"mask-t-to":G()}],"mask-image-r-from-pos":[{"mask-r-from":de()}],"mask-image-r-to-pos":[{"mask-r-to":de()}],"mask-image-r-from-color":[{"mask-r-from":G()}],"mask-image-r-to-color":[{"mask-r-to":G()}],"mask-image-b-from-pos":[{"mask-b-from":de()}],"mask-image-b-to-pos":[{"mask-b-to":de()}],"mask-image-b-from-color":[{"mask-b-from":G()}],"mask-image-b-to-color":[{"mask-b-to":G()}],"mask-image-l-from-pos":[{"mask-l-from":de()}],"mask-image-l-to-pos":[{"mask-l-to":de()}],"mask-image-l-from-color":[{"mask-l-from":G()}],"mask-image-l-to-color":[{"mask-l-to":G()}],"mask-image-x-from-pos":[{"mask-x-from":de()}],"mask-image-x-to-pos":[{"mask-x-to":de()}],"mask-image-x-from-color":[{"mask-x-from":G()}],"mask-image-x-to-color":[{"mask-x-to":G()}],"mask-image-y-from-pos":[{"mask-y-from":de()}],"mask-image-y-to-pos":[{"mask-y-to":de()}],"mask-image-y-from-color":[{"mask-y-from":G()}],"mask-image-y-to-color":[{"mask-y-to":G()}],"mask-image-radial":[{"mask-radial":[le,ae]}],"mask-image-radial-from-pos":[{"mask-radial-from":de()}],"mask-image-radial-to-pos":[{"mask-radial-to":de()}],"mask-image-radial-from-color":[{"mask-radial-from":G()}],"mask-image-radial-to-color":[{"mask-radial-to":G()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":fe()}],"mask-image-conic-pos":[{"mask-conic":[Oe]}],"mask-image-conic-from-pos":[{"mask-conic-from":de()}],"mask-image-conic-to-pos":[{"mask-conic-to":de()}],"mask-image-conic-from-color":[{"mask-conic-from":G()}],"mask-image-conic-to-color":[{"mask-conic-to":G()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Ee()}],"mask-repeat":[{mask:Te()}],"mask-size":[{mask:S()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",le,ae]}],filter:[{filter:["","none",le,ae]}],blur:[{blur:Ie()}],brightness:[{brightness:[Oe,le,ae]}],contrast:[{contrast:[Oe,le,ae]}],"drop-shadow":[{"drop-shadow":["","none",V,xo,yo]}],"drop-shadow-color":[{"drop-shadow":G()}],grayscale:[{grayscale:["",Oe,le,ae]}],"hue-rotate":[{"hue-rotate":[Oe,le,ae]}],invert:[{invert:["",Oe,le,ae]}],saturate:[{saturate:[Oe,le,ae]}],sepia:[{sepia:["",Oe,le,ae]}],"backdrop-filter":[{"backdrop-filter":["","none",le,ae]}],"backdrop-blur":[{"backdrop-blur":Ie()}],"backdrop-brightness":[{"backdrop-brightness":[Oe,le,ae]}],"backdrop-contrast":[{"backdrop-contrast":[Oe,le,ae]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Oe,le,ae]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Oe,le,ae]}],"backdrop-invert":[{"backdrop-invert":["",Oe,le,ae]}],"backdrop-opacity":[{"backdrop-opacity":[Oe,le,ae]}],"backdrop-saturate":[{"backdrop-saturate":[Oe,le,ae]}],"backdrop-sepia":[{"backdrop-sepia":["",Oe,le,ae]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":I()}],"border-spacing-x":[{"border-spacing-x":I()}],"border-spacing-y":[{"border-spacing-y":I()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",le,ae]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Oe,"initial",le,ae]}],ease:[{ease:["linear","initial",F,le,ae]}],delay:[{delay:[Oe,le,ae]}],animate:[{animate:["none",N,le,ae]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,le,ae]}],"perspective-origin":[{"perspective-origin":ee()}],rotate:[{rotate:qe()}],"rotate-x":[{"rotate-x":qe()}],"rotate-y":[{"rotate-y":qe()}],"rotate-z":[{"rotate-z":qe()}],scale:[{scale:wt()}],"scale-x":[{"scale-x":wt()}],"scale-y":[{"scale-y":wt()}],"scale-z":[{"scale-z":wt()}],"scale-3d":["scale-3d"],skew:[{skew:Jt()}],"skew-x":[{"skew-x":Jt()}],"skew-y":[{"skew-y":Jt()}],transform:[{transform:[le,ae,"","none","gpu","cpu"]}],"transform-origin":[{origin:ee()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:vn()}],"translate-x":[{"translate-x":vn()}],"translate-y":[{"translate-y":vn()}],"translate-z":[{"translate-z":vn()}],"translate-none":["translate-none"],accent:[{accent:G()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:G()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",le,ae]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",le,ae]}],fill:[{fill:["none",...G()]}],"stroke-w":[{stroke:[Oe,Lr,Qa,os]}],stroke:[{stroke:["none",...G()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Jy=_y(Ky);function ip(...l){return Jy(iy(...l))}function Ds({className:l,variant:o="primary",...u}){const c={primary:"bg-blue-600 text-white hover:bg-blue-700  hover:ring-blue-200 focus:ring-blue-300 shadow-md",secondary:"bg-[#FFFFFA] border  hover:bg-[#ffffe4] hover:ring-blue-200 focus:ring-blue-300 border-gray-500 text-gray-700 hover:bg-gray-150 shadow-sm",danger:"bg-red-600 text-white hover:bg-red-700 hover:ring-blue-200 focus:ring-blue-300"};return E.jsx("button",{className:ip(`
px-4 py-2 rounded-lg 
font-medium transition-all 
focus:ring-2 
hover:ring-1
cursor-pointer
hover:scale-105
`,c[o],l),...u})}function zn({className:l,variant:o="short",type:u="text",...c}){const d={short:"w-1/2",long:"w-full"};return E.jsx("input",{type:u,className:ip("border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",d[o],l),...c})}var op={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},d0=He.createContext&&He.createContext(op),Fy=["attr","size","title"];function Py(l,o){if(l==null)return{};var u=$y(l,o),c,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(l);for(d=0;d<f.length;d++)c=f[d],!(o.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(l,c)&&(u[c]=l[c])}return u}function $y(l,o){if(l==null)return{};var u={};for(var c in l)if(Object.prototype.hasOwnProperty.call(l,c)){if(o.indexOf(c)>=0)continue;u[c]=l[c]}return u}function Do(){return Do=Object.assign?Object.assign.bind():function(l){for(var o=1;o<arguments.length;o++){var u=arguments[o];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(l[c]=u[c])}return l},Do.apply(this,arguments)}function h0(l,o){var u=Object.keys(l);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);o&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(l,d).enumerable})),u.push.apply(u,c)}return u}function Mo(l){for(var o=1;o<arguments.length;o++){var u=arguments[o]!=null?arguments[o]:{};o%2?h0(Object(u),!0).forEach(function(c){Wy(l,c,u[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(u)):h0(Object(u)).forEach(function(c){Object.defineProperty(l,c,Object.getOwnPropertyDescriptor(u,c))})}return l}function Wy(l,o,u){return o=Iy(o),o in l?Object.defineProperty(l,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):l[o]=u,l}function Iy(l){var o=e2(l,"string");return typeof o=="symbol"?o:o+""}function e2(l,o){if(typeof l!="object"||!l)return l;var u=l[Symbol.toPrimitive];if(u!==void 0){var c=u.call(l,o);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(l)}function up(l){return l&&l.map((o,u)=>He.createElement(o.tag,Mo({key:u},o.attr),up(o.child)))}function gn(l){return o=>He.createElement(t2,Do({attr:Mo({},l.attr)},o),up(l.child))}function t2(l){var o=u=>{var{attr:c,size:d,title:f}=l,h=Py(l,Fy),g=d||u.size||"1em",p;return u.className&&(p=u.className),l.className&&(p=(p?p+" ":"")+l.className),He.createElement("svg",Do({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,c,h,{className:p,style:Mo(Mo({color:l.color||u.color},u.style),l.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),f&&He.createElement("title",null,f),l.children)};return d0!==void 0?He.createElement(d0.Consumer,null,u=>o(u)):o(op)}function n2(l){return gn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448zM248 315.85l-51.79-51.79a2 2 0 0 0-3.39 1.69 64.11 64.11 0 0 0 53.49 53.49 2 2 0 0 0 1.69-3.39zm16-119.7L315.87 248a2 2 0 0 0 3.4-1.69 64.13 64.13 0 0 0-53.55-53.55 2 2 0 0 0-1.72 3.39z"},child:[]},{tag:"path",attr:{d:"M491 273.36a32.2 32.2 0 0 0-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 0 0-71.82 11.79 4 4 0 0 0-1.56 6.63l47.24 47.24a4 4 0 0 0 3.82 1.05 96 96 0 0 1 116 116 4 4 0 0 0 1.05 3.81l67.95 68a4 4 0 0 0 5.4.24 343.81 343.81 0 0 0 67.24-77.4zM256 352a96 96 0 0 1-93.3-118.63 4 4 0 0 0-1.05-3.81l-66.84-66.87a4 4 0 0 0-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0 0 72.64-11.55 4 4 0 0 0 1.61-6.64l-47.47-47.46a4 4 0 0 0-3.81-1.05A96 96 0 0 1 256 352z"},child:[]}]})(l)}function a2(l){return gn({attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{cx:"256",cy:"256",r:"64"},child:[]},{tag:"path",attr:{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76zM256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96z"},child:[]}]})(l)}function l2(){const{register:l,handleSubmit:o,reset:u,formState:{errors:c}}=Z0(),{user:d,login:f,error:h}=R.useContext(Vl),g=Zr(),[p,b]=R.useState(null),[T,O]=R.useState(!1),H="text-sm text-red-600";R.useEffect(()=>{h&&b(h)},[h]),R.useEffect(()=>{p!="Not authenticated"&&b(null)},[]);const V=async X=>{try{console.log("form data:",X),await f(X.voterId,X.password),u()}catch(A){b(A.message||"Login Error. Please try again")}};return R.useEffect(()=>{d&&g("/dashboard")},[d,g]),E.jsx("div",{className:`grow flex items-center justify-center \r
            bg-[#fffffA]`,children:E.jsxs("form",{onSubmit:o(V),className:"w-full max-w-125 bg-white border border-gray-200 rounded-xl p-8 shadow-lg space-y-6 mt-2",children:[E.jsx("h2",{className:"text-2xl font-semibold text-center text-gray-800",children:"E-Voting Login"}),E.jsxs("div",{className:"space-y-1 flex flex-col ",children:[E.jsx("label",{htmlFor:"voterId",children:"Voter ID"}),E.jsx(zn,{placeholder:"12345XXXX",variant:"long",...l("voterId",{required:"Please enter your Voter ID"})}),c.voterId&&E.jsx("p",{className:H,children:c.voterId.message})]}),E.jsxs("div",{className:"space-y-1 flex flex-col",children:[E.jsx("label",{htmlFor:"password",children:"New Password"}),E.jsxs("div",{className:"relative",children:[E.jsx(zn,{type:T?"text":"password",id:"password",variant:"long",placeholder:"*********",className:"pr-10",...l("password",{required:"Please enter your password"})}),E.jsx("button",{type:"button",onClick:()=>O(!T),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800","aria-label":T?"Hide password":"Show password",children:T?E.jsx(n2,{size:20}):E.jsx(a2,{size:20})})]}),c.password&&E.jsx("p",{className:H,children:c.password.message})]}),E.jsxs("div",{className:"flex justify-between text-blue-700",children:[E.jsx(mn,{className:"cursor-pointer visited:text-blue-950",to:"/forgotpassword",children:"Forgot Password?"}),E.jsx(mn,{className:"cursor-pointer  visited:text-blue-950",to:"/register",children:"Voter Registration"})]}),p&&E.jsx("p",{className:H,children:p}),E.jsx("div",{className:"flex flex-row justify-center",children:E.jsx(Ds,{type:"submit",variant:"primary",className:"px-10",children:"Login"})})]})})}function r2(){return E.jsx(E.Fragment,{children:E.jsx("p",{children:"This is the Forgot password"})})}const So={"Province 1":{Kathmandu:{"Kathmandu-1":["PS-001","PS-002","PS-003"],"Kathmandu-2":["PS-004","PS-005"]},Bhaktapur:{"Bhaktapur-1":["PS-006","PS-007"],"Bhaktapur-2":["PS-008"]},Lalitpur:{"Lalitpur-1":["PS-009","PS-010"],"Lalitpur-2":["PS-011"]}},"Province 2":{Pokhara:{"Pokhara-1":["PS-101","PS-102"],"Pokhara-2":["PS-103"]},Baglung:{"Baglung-1":["PS-104","PS-105","PS-106"],"Baglung-2":["PS-107"]},Mustang:{"Mustang-1":["PS-108"],"Mustang-2":["PS-109","PS-110"]}},"Province 3":{Biratnagar:{"Biratnagar-1":["PS-201","PS-202"],"Biratnagar-2":["PS-203","PS-204"]},Dharan:{"Dharan-1":["PS-205","PS-206"],"Dharan-2":["PS-207"]},Jhapa:{"Jhapa-1":["PS-208","PS-209","PS-210"]}},"Province 4":{Butwal:{"Butwal-1":["PS-301","PS-302"],"Butwal-2":["PS-303"]},Tansen:{"Tansen-1":["PS-304","PS-305"],"Tansen-2":["PS-306"]},Rolpa:{"Rolpa-1":["PS-307"],"Rolpa-2":["PS-308","PS-309"]}},"Province 5":{Nepalgunj:{"Nepalgunj-1":["PS-401","PS-402"],"Nepalgunj-2":["PS-403"]},Butwal:{"Butwal-3":["PS-404","PS-405"]}},"Province 6":{Surkhet:{"Surkhet-1":["PS-501","PS-502"],"Surkhet-2":["PS-503","PS-504"]},Dailekh:{"Dailekh-1":["PS-505","PS-506"]}},"Province 7":{Dhangadhi:{"Dhangadhi-1":["PS-601","PS-602"],"Dhangadhi-2":["PS-603"]},Tikapur:{"Tikapur-1":["PS-604"],"Tikapur-2":["PS-605","PS-606"]}}};function i2(l){return gn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12h-2.7c0 5.128-4.172 9.3-9.3 9.3-5.128 0-9.3-4.172-9.3-9.3 0-5.128 4.172-9.3 9.3-9.3V0Zm7.4 2.583-7.505 9.371L8.388 9.08l-2.002 2.436 4.741 3.888a1.573 1.573 0 0 0 2.231-.233l8.504-10.617L19.4 2.583Z"},child:[]}]})(l)}function o2({status:l,setStatus:o}){const u=()=>o("processing");return E.jsx(E.Fragment,{children:E.jsx("div",{className:`grow flex items-center justify-center \r
            bg-[#78CDD7]`,children:E.jsxs("div",{className:"w-full max-w-125 bg-white border border-gray-200 rounded-xl p-8 shadow-lg space-y-6 mt-2",children:[E.jsxs("p",{className:"flex items-center gap-2",children:[" ",E.jsx(i2,{className:"text-green-700"})," Registration ",`${l}`]}),E.jsxs("div",{className:"text-blue-700 flex gap-6",children:[E.jsx(mn,{onClick:()=>u(),to:"/login",children:"Go to Login"}),E.jsx(mn,{onClick:()=>u(),to:"/register",children:"Go to Registration"})]})]})})})}function u2(){const{register:l,watch:o,handleSubmit:u,setValue:c,reset:d,formState:{errors:f}}=Z0(),{user:h}=R.useContext(Vl),g=Zr(),[p,b]=R.useState("processing"),T=o("password"),O=o("province"),H=o("district"),V=o("constituency"),X="space-y-1 w-full flex flex-col border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",A="text-sm text-red-600";function Y(N){const $=new Date(N),fe=new Date;let ee=fe.getFullYear()-$.getFullYear();const pe=fe.getMonth()-$.getMonth(),ne=fe.getDate()-$.getDate();return(pe<0||pe===0&&ne<0)&&ee--,ee>=18||"You must be at least 18 years old."}if(h&&g("/dashboard"),p==="successful"||p==="failed")return E.jsx(o2,{status:p,setStatus:b});const F=N=>{console.log("form data:",N),b("successful"),d()};return E.jsx("div",{className:`grow flex items-center justify-center \r
            bg-[#78CDD7] p-6`,children:E.jsxs("form",{onSubmit:u(F),className:`w-full max-w-125 lg:max-w-full bg-white\r
                    border border-gray-200 rounded-xl p-8\r
                    shadow-lg space-y-6 my-5\r
                    `,children:[E.jsx("h2",{className:"text-2xl font-semibold text-center text-gray-800",children:"Register for Voting"}),E.jsxs("div",{className:"grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-4 items-center",children:[E.jsxs("div",{className:"space-y-1 flex flex-col",children:[E.jsx("label",{htmlFor:"name",children:"Name"}),E.jsx(zn,{id:"name",variant:"long",placeholder:"Ram Prasad Pariyar",...l("name",{required:"Name field is required"})}),f.name&&E.jsx("p",{className:A,children:f.name.message})]}),E.jsxs("div",{className:"space-y-1 flex flex-col",children:[E.jsx("label",{htmlFor:"fatherName",children:"Father's Name"}),E.jsx(zn,{id:"fatherName",variant:"long",placeholder:"Shyam Prasad Pariyar",...l("fatherName",{required:"Father Name field is required"})}),f.fatherName&&E.jsx("p",{className:A,children:f.fatherName.message})]}),E.jsxs("div",{className:"space-y-1 flex flex-col",children:[E.jsx("label",{htmlFor:"ctznNo",children:"Citizenship Number"}),E.jsx(zn,{id:"ctznNo",variant:"long",placeholder:"46-03-74-XXXXX",...l("citizenshipNo",{required:"Citizenship No. field is required"})}),f.fatherName&&E.jsx("p",{className:A,children:f.fatherName.message})]}),E.jsxs("div",{className:"flex w-full flex-row justify-between items-center gap-4",children:[E.jsxs("div",{className:"w-1/2 flex flex-col ",children:[E.jsx("label",{htmlFor:"voterId",children:"Voter ID"}),E.jsx(zn,{placeholder:"12345XXXX",variant:"long",...l("voterId",{required:"VoterId is required"})}),f.voterId&&E.jsx("p",{className:A,children:f.voterId.message})]}),E.jsxs("div",{className:"w-1/2 flex flex-col",children:[E.jsx("label",{htmlFor:"dob",children:"Date of Birth"}),E.jsx(zn,{variant:"long",type:"date",...l("dob",{valueAsDate:!0,required:"Date of birth is required",validate:N=>Y(N)})}),f.dob&&E.jsx("p",{className:A,children:f.dob.message})]})]}),E.jsxs("div",{className:"space-y-1 flex flex-col",children:[E.jsx("label",{htmlFor:"phoneNo",children:"Phone Number"}),E.jsx(zn,{id:"phoneNo",variant:"long",placeholder:"98XXXXXXXXXX",...l("phoneNo",{required:"Phone Number field is required",minLength:{value:10,message:"Please enter valid number."}})}),f.phoneNo&&E.jsx("p",{className:A,children:f.phoneNo.message})]}),E.jsxs("div",{className:"flex flex-row justify-between w-full gap-3",children:[E.jsxs("div",{className:"flex flex-col w-1/2",children:[E.jsx("label",{htmlFor:"selectedProvince",children:"Province"}),E.jsxs("div",{className:X,children:[E.jsxs("select",{id:"selectedProvince",...l("province",{required:"Province is required"}),onChange:N=>{c("province",N.target.value),c("district",""),c("constituency",""),c("pollingStation","")},children:[E.jsx("option",{value:"",children:"Select Province"}),Object.keys(So).map(N=>E.jsx("option",{value:N,children:N},N))]}),f.province&&E.jsx("p",{className:A,children:f.province.message})]})]}),E.jsxs("div",{className:"flex flex-col w-1/2",children:[E.jsx("label",{htmlFor:"selectedDistrict",children:"District"}),E.jsxs("div",{className:X,children:[E.jsxs("select",{id:"selectedDistrict",...l("district",{required:"District is required"}),onChange:N=>{c("district",N.target.value),c("constituency",""),c("pollingStation","")},children:[E.jsx("option",{value:"",children:"Select a district"}),O&&Object.keys(So[O]).map(N=>E.jsx("option",{value:N,children:N},N))]}),f.district&&E.jsx("p",{className:A,children:f.district.message})]})]})]}),E.jsxs("div",{className:"flex flex-row justify-between w-full gap-3",children:[E.jsxs("div",{className:"flex flex-col w-1/2",children:[E.jsx("label",{htmlFor:"selectedConstituency",children:"Constituency"}),E.jsxs("div",{className:X,children:[E.jsxs("select",{id:"selectedConstituency",...l("constituency",{required:"Constituency is required"}),onChange:N=>{c("constituency",N.target.value),c("pollingStation","")},children:[E.jsx("option",{value:"",children:"Select Constituency"}),O&&H&&Object.keys(So[O][H]).map(N=>E.jsx("option",{value:N,children:N},N))]}),f.constituency&&E.jsx("p",{className:A,children:f.constituency.message})]})]}),E.jsxs("div",{className:"flex flex-col w-1/2",children:[E.jsx("label",{htmlFor:"selectedStation",children:"Polling Station"}),E.jsxs("div",{className:X,children:[E.jsxs("select",{id:"selectedStation",...l("pollingStation",{required:"Polling station is required"}),children:[E.jsx("option",{value:"",children:"Select a Polling Station"}),O&&H&&V&&So[O][H][V].map(N=>E.jsx("option",{value:N,children:N},N))]}),f.pollingStation&&E.jsx("p",{className:A,children:f.pollingStation.message})]})]})]}),E.jsx("div",{className:"hidden lg:block"}),E.jsxs("div",{className:"space-y-1 flex flex-col",children:[E.jsx("label",{htmlFor:"password",children:"New Password"}),E.jsx(zn,{type:"password",id:"password",variant:"long",placeholder:"*********",...l("password",{required:"New Password field is required.",minLength:{value:8,message:"Please type at least 8 characters"},pattern:{value:/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,message:"Password must contain atleast one uppercase, alphanumeric, and symbol."}})}),f.password&&E.jsx("p",{className:A,children:f.password.message})]}),E.jsxs("div",{className:"space-y-1 flex flex-col",children:[E.jsx("label",{htmlFor:"repassword",children:"Confirm Password"}),E.jsx(zn,{type:"password",id:"repassword",variant:"long",placeholder:"*********",...l("repassword",{required:"Please re-confirm the new password.",validate:N=>N===T||"Passwords donot match"})}),f.repassword&&E.jsx("p",{className:A,children:f.repassword.message})]})]}),E.jsx("div",{className:"flex flex-row justify-center",children:E.jsx(Ds,{type:"submit",variant:"primary",className:"px-10",children:"Register"})})]})})}function c2(l){return gn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(l)}function s2(l){return gn({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M608 320h-64v64h22.4c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8H96v-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h576c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32zm-96 64V64.3c0-17.9-14.5-32.3-32.3-32.3H160.4C142.5 32 128 46.5 128 64.3V384h384zM211.2 202l25.5-25.3c4.2-4.2 11-4.2 15.2.1l41.3 41.6 95.2-94.4c4.2-4.2 11-4.2 15.2.1l25.3 25.5c4.2 4.2 4.2 11-.1 15.2L300.5 292c-4.2 4.2-11 4.2-15.2-.1l-74.1-74.7c-4.3-4.2-4.2-11 0-15.2z"},child:[]}]})(l)}function f2(l){return gn({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"},child:[]}]})(l)}function d2(l){return gn({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M18 13h-.68l-2 2h1.91L19 17H5l1.78-2h2.05l-2-2H6l-3 3v4c0 1.1.89 2 1.99 2H19a2 2 0 0 0 2-2v-4l-3-3zm-1-5.05-4.95 4.95-3.54-3.54 4.95-4.95L17 7.95zm-4.24-5.66L6.39 8.66a.996.996 0 0 0 0 1.41l4.95 4.95c.39.39 1.02.39 1.41 0l6.36-6.36a.996.996 0 0 0 0-1.41L14.16 2.3a.975.975 0 0 0-1.4-.01z"},child:[]}]})(l)}function h2(l){return gn({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M13 7.5h5v2h-5zm0 7h5v2h-5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM11 6H6v5h5V6zm-1 4H7V7h3v3zm1 3H6v5h5v-5zm-1 4H7v-3h3v3z"},child:[]}]})(l)}function m2(){const{user:l,logout:o}=R.useContext(Vl),u="flex justify-center gap-2 items-center";async function c(){try{await o()}catch(d){console.log("Logout error: ",d)}}return E.jsx("section",{className:"bg-[#FFFFFA]",children:E.jsxs("div",{className:`w-full md:h-15 \r
            flex flex-col \r
            justify-between \r
            items-center\r
            text-center\r
            bg-[#0D5C63]\r
            sm:flex-row sm:mx-0\r
\r
            rounded-b-3xl px-10 py-2\r
            `,children:[E.jsx("div",{className:"text-2xl font-bold text-[#FFFFFA] ",children:E.jsx(mn,{to:"/dashboard",children:E.jsxs("h1",{className:"flex items-center gap-2 w-32.5",children:[E.jsx(s2,{}),"E-Voting"]})})}),E.jsxs("div",{className:`\r
                flex  justify-center  mt-2\r
                flex-row flex-wrap text-[#FFFFFA]\r
                gap-4\r
                items-center\r
                sm:mt-0\r
                `,children:[l===null&&E.jsxs(E.Fragment,{children:[E.jsx(mn,{to:"/about",children:"About Us"}),E.jsx(mn,{to:"/Contact",children:"Contact"}),E.jsx(mn,{to:"/manual",children:"Voting Manual"})]}),l&&E.jsxs(E.Fragment,{children:[E.jsxs("p",{className:u,children:["Welcome, ",E.jsx("span",{className:"font-bold",children:l?.name})]}),E.jsxs("p",{className:u,children:["Voter ID: ",E.jsx("span",{className:"font-bold",children:l?.voterId})]}),E.jsxs("div",{className:"flex justify-center gap-2 items-center",children:[E.jsxs("p",{className:u,children:["Verfied ",E.jsx("span",{children:E.jsx(f2,{className:"text-green-500"})})]}),E.jsx(Ds,{onClick:async()=>{c()},variant:"secondary",children:"Logout"})]})]})]})]})})}function p2(){return E.jsxs("div",{className:"flex flex-col h-screen",children:[E.jsx(m2,{}),E.jsx(Mv,{})]})}function b2({children:l}){return E.jsx("div",{className:"rounded-4xl shadow-lg size-35 sm:size-50 flex justify-center items-center",children:E.jsx("div",{className:`\r
            flex flex-col\r
                size-34\r
                sm:size-49\r
            items-center justify-center  border\r
            border-gray-100 rounded-t-full rounded-b-full shadow-lg p-6 \r
            aspect-square hover:shadow-xl transsition\r
            hover:scale-105\r
            hover:ring-1 hover:ring-blue-100\r
            hover:bg-gray-100\r
            hover:cursor-pointer\r
            text-[#0D5C63]\r
            \r
            `,role:"button",children:l})})}function g2(l){return gn({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M304 240l0-223.4c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16L304 240zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4L256 288 412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288l238.4 0z"},child:[]}]})(l)}function v2(l){return gn({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z"},child:[]}]})(l)}function y2(l){return gn({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304l91.4 0c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7l0 .9c0 9.2 2.7 18.5 7.9 26.3L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8l0 30.6c7.9 3.4 15.4 7.7 22.3 12.8l24.9-14.3c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-25 14.4c.4 4 .7 8.1 .7 12.3s-.2 8.2-.7 12.3l25 14.4c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4l-24.9-14.3c-6.9 5.1-14.3 9.4-22.3 12.8l0 30.6c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8l0-30.5c-8-3.4-15.6-7.7-22.5-12.9l-24.7 14.3c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l24.8-14.3c-.4-4.1-.7-8.2-.7-12.4s.2-8.3 .7-12.4L343.8 325c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l24.8 14.3c6.9-5.1 14.5-9.4 22.5-12.9l0-30.5zm92.1 133.5a48.1 48.1 0 1 0 -96.1 0 48.1 48.1 0 1 0 96.1 0z"},child:[]}]})(l)}function x2(){const{user:l,loading:o}=R.useContext(Vl),u=Zr();R.useEffect(()=>{o||l||u("/login")},[l,u,o]);const c="block rounded-4xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:scale-105 transition-transform",f=[{to:"vote",label:"Vote",icon:d2},{to:"/ballot-info",label:"E-Ballot Information",icon:h2},{to:"/candidates-info",label:"Candidates Information",icon:v2},{to:"/election-results",label:"Election Results",icon:g2},{to:"/election-info",label:"Election Info",icon:c2},{to:"voter-info",label:"Voter Information",icon:y2}].map((h,g)=>{const p=h.icon;return E.jsx(mn,{className:c,...g===0&&{tabIndex:0},to:h.to,children:E.jsxs(b2,{children:[E.jsx(p,{className:"text-[50px] sm:text-[80px]"}),E.jsx("p",{className:"text-sm font-bold sm:text-lg text-center mt-2 w-full text-wrap truncate",children:h.label})]})})});return E.jsx("div",{className:`flex flex-wrap\r
        w-full h-full p-5 pt-10 \\\r
        gap-10 border border-red-600 \r
        justify-center items-start content-start\r
        bg-[#FFFFFA]`,children:f})}function m0(){return E.jsx("div",{className:`w-full max-w-125 bg-gray-400 border\r
         border-gray-200\r
        rounded-xl p-8 shadow-lg space-y-6 mt-2`})}function p0(){return E.jsx("p",{children:"Ballot Information"})}function S2(){return E.jsx("p",{children:"Election Information page"})}function O2(){return E.jsx("p",{children:"Demo Booth Page"})}function E2(){return E.jsx("p",{children:"Candidates Information Page"})}function b0({children:l}){const{user:o,loading:u}=R.useContext(Vl);return u?E.jsx("p",{children:"Loading..."}):o?l:E.jsx(C0,{to:"/login",replace:!0})}function z2(){return E.jsx(E.Fragment,{children:E.jsx(kv,{children:E.jsxs(Ut,{element:E.jsx(p2,{}),children:[E.jsx(Ut,{index:!0,element:E.jsx(C0,{to:"/login",replace:!0})}),E.jsx(Ut,{path:"/login",element:E.jsx(l2,{})}),E.jsx(Ut,{path:"/forgotpassword",element:E.jsx(r2,{})}),E.jsx(Ut,{path:"/register",element:E.jsx(u2,{})}),E.jsx(Ut,{path:"/dashboard",element:E.jsx(b0,{children:E.jsx(x2,{})})}),E.jsx(Ut,{path:"/dashboard/vote",element:E.jsx(b0,{children:E.jsx(m0,{})})}),E.jsx(Ut,{path:"/dashboard/voter-info",element:E.jsx(m0,{})}),E.jsx(Ut,{path:"/candidates-info",element:E.jsx(E2,{})}),E.jsx(Ut,{path:"/election-info",element:E.jsx(S2,{})}),E.jsx(Ut,{path:"/demo-booth",element:E.jsx(O2,{})}),E.jsx(Ut,{path:"/ballot-info",element:E.jsx(p0,{})}),E.jsx(Ut,{path:"/ballot-info",element:E.jsx(p0,{})})]})})})}kg.createRoot(document.getElementById("root")).render(E.jsx(R.StrictMode,{children:E.jsx(n1,{children:E.jsx(j1,{children:E.jsx(z2,{})})})}));
