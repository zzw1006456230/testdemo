import{G as We}from"./api-DgRWLGle.js";import{s as Y,y as Z}from"./yanmai-Dq-DmbnI.js";import{E as A}from"./linq-BSqhCn6e.js";import{X as P,J as qe,o as $e,n as Je,Y as Xe,Z as Ye,y as h,_ as ye,K as D,a as $,w as me,d as Oe,c as b,e as M,f as _,g as Ze,t as Ce,u as je,x as U,j as Q,G as I,V as Qe,W as et,I as tt}from"./index-CBqIot1I.js";import{_ as we}from"./_plugin-vue_export-helper-DlAUqK2U.js";function rt(){this.__data__=[],this.size=0}var at=rt;function nt(e,t){return e===t||e!==e&&t!==t}var B=nt,ot=B;function st(e,t){for(var r=e.length;r--;)if(ot(e[r][0],t))return r;return-1}var F=st,it=F,ct=Array.prototype,lt=ct.splice;function ut(e){var t=this.__data__,r=it(t,e);if(r<0)return!1;var a=t.length-1;return r==a?t.pop():lt.call(t,r,1),--this.size,!0}var ft=ut,vt=F;function pt(e){var t=this.__data__,r=vt(t,e);return r<0?void 0:t[r][1]}var dt=pt,ht=F;function _t(e){return ht(this.__data__,e)>-1}var gt=_t,bt=F;function $t(e,t){var r=this.__data__,a=bt(r,e);return a<0?(++this.size,r.push([e,t])):r[a][1]=t,this}var yt=$t,mt=at,Ot=ft,Ct=dt,jt=gt,wt=yt;function O(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}O.prototype.clear=mt;O.prototype.delete=Ot;O.prototype.get=Ct;O.prototype.has=jt;O.prototype.set=wt;var k=O,St=k;function Tt(){this.__data__=new St,this.size=0}var xt=Tt;function At(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var Pt=At;function It(e){return this.__data__.get(e)}var Mt=It;function Lt(e){return this.__data__.has(e)}var Gt=Lt,Et=typeof P=="object"&&P&&P.Object===Object&&P,Se=Et,Dt=Se,Bt=typeof self=="object"&&self&&self.Object===Object&&self,Ft=Dt||Bt||Function("return this")(),C=Ft,kt=C,zt=kt.Symbol,Te=zt,ee=Te,xe=Object.prototype,Nt=xe.hasOwnProperty,Rt=xe.toString,T=ee?ee.toStringTag:void 0;function Ht(e){var t=Nt.call(e,T),r=e[T];try{e[T]=void 0;var a=!0}catch{}var n=Rt.call(e);return a&&(t?e[T]=r:delete e[T]),n}var Ut=Ht,Vt=Object.prototype,Kt=Vt.toString;function Wt(e){return Kt.call(e)}var qt=Wt,te=Te,Jt=Ut,Xt=qt,Yt="[object Null]",Zt="[object Undefined]",re=te?te.toStringTag:void 0;function Qt(e){return e==null?e===void 0?Zt:Yt:re&&re in Object(e)?Jt(e):Xt(e)}var z=Qt;function er(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var y=er,tr=z,rr=y,ar="[object AsyncFunction]",nr="[object Function]",or="[object GeneratorFunction]",sr="[object Proxy]";function ir(e){if(!rr(e))return!1;var t=tr(e);return t==nr||t==or||t==ar||t==sr}var K=ir,cr=C,lr=cr["__core-js_shared__"],ur=lr,V=ur,ae=function(){var e=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function fr(e){return!!ae&&ae in e}var vr=fr,pr=Function.prototype,dr=pr.toString;function hr(e){if(e!=null){try{return dr.call(e)}catch{}try{return e+""}catch{}}return""}var _r=hr,gr=K,br=vr,$r=y,yr=_r,mr=/[\\^$.*+?()[\]{}|]/g,Or=/^\[object .+?Constructor\]$/,Cr=Function.prototype,jr=Object.prototype,wr=Cr.toString,Sr=jr.hasOwnProperty,Tr=RegExp("^"+wr.call(Sr).replace(mr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function xr(e){if(!$r(e)||br(e))return!1;var t=gr(e)?Tr:Or;return t.test(yr(e))}var Ar=xr;function Pr(e,t){return e==null?void 0:e[t]}var Ir=Pr,Mr=Ar,Lr=Ir;function Gr(e,t){var r=Lr(e,t);return Mr(r)?r:void 0}var W=Gr,Er=W,Dr=C,Br=Er(Dr,"Map"),Ae=Br,Fr=W,kr=Fr(Object,"create"),N=kr,ne=N;function zr(){this.__data__=ne?ne(null):{},this.size=0}var Nr=zr;function Rr(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Hr=Rr,Ur=N,Vr="__lodash_hash_undefined__",Kr=Object.prototype,Wr=Kr.hasOwnProperty;function qr(e){var t=this.__data__;if(Ur){var r=t[e];return r===Vr?void 0:r}return Wr.call(t,e)?t[e]:void 0}var Jr=qr,Xr=N,Yr=Object.prototype,Zr=Yr.hasOwnProperty;function Qr(e){var t=this.__data__;return Xr?t[e]!==void 0:Zr.call(t,e)}var ea=Qr,ta=N,ra="__lodash_hash_undefined__";function aa(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ta&&t===void 0?ra:t,this}var na=aa,oa=Nr,sa=Hr,ia=Jr,ca=ea,la=na;function j(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}j.prototype.clear=oa;j.prototype.delete=sa;j.prototype.get=ia;j.prototype.has=ca;j.prototype.set=la;var ua=j,oe=ua,fa=k,va=Ae;function pa(){this.size=0,this.__data__={hash:new oe,map:new(va||fa),string:new oe}}var da=pa;function ha(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var _a=ha,ga=_a;function ba(e,t){var r=e.__data__;return ga(t)?r[typeof t=="string"?"string":"hash"]:r.map}var R=ba,$a=R;function ya(e){var t=$a(this,e).delete(e);return this.size-=t?1:0,t}var ma=ya,Oa=R;function Ca(e){return Oa(this,e).get(e)}var ja=Ca,wa=R;function Sa(e){return wa(this,e).has(e)}var Ta=Sa,xa=R;function Aa(e,t){var r=xa(this,e),a=r.size;return r.set(e,t),this.size+=r.size==a?0:1,this}var Pa=Aa,Ia=da,Ma=ma,La=ja,Ga=Ta,Ea=Pa;function w(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}w.prototype.clear=Ia;w.prototype.delete=Ma;w.prototype.get=La;w.prototype.has=Ga;w.prototype.set=Ea;var Da=w,Ba=k,Fa=Ae,ka=Da,za=200;function Na(e,t){var r=this.__data__;if(r instanceof Ba){var a=r.__data__;if(!Fa||a.length<za-1)return a.push([e,t]),this.size=++r.size,this;r=this.__data__=new ka(a)}return r.set(e,t),this.size=r.size,this}var Ra=Na,Ha=k,Ua=xt,Va=Pt,Ka=Mt,Wa=Gt,qa=Ra;function S(e){var t=this.__data__=new Ha(e);this.size=t.size}S.prototype.clear=Ua;S.prototype.delete=Va;S.prototype.get=Ka;S.prototype.has=Wa;S.prototype.set=qa;var Ja=S,Xa=W,Ya=function(){try{var e=Xa(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Pe=Ya,se=Pe;function Za(e,t,r){t=="__proto__"&&se?se(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var q=Za,Qa=q,en=B;function tn(e,t,r){(r!==void 0&&!en(e[t],r)||r===void 0&&!(t in e))&&Qa(e,t,r)}var Ie=tn;function rn(e){return function(t,r,a){for(var n=-1,s=Object(t),i=a(t),o=i.length;o--;){var u=i[e?o:++n];if(r(s[u],u,s)===!1)break}return t}}var an=rn,nn=an,on=nn(),sn=on,L={exports:{}};L.exports;(function(e,t){var r=C,a=t&&!t.nodeType&&t,n=a&&!0&&e&&!e.nodeType&&e,s=n&&n.exports===a,i=s?r.Buffer:void 0,o=i?i.allocUnsafe:void 0;function u(l,f){if(f)return l.slice();var c=l.length,p=o?o(c):new l.constructor(c);return l.copy(p),p}e.exports=u})(L,L.exports);var cn=L.exports,ln=C,un=ln.Uint8Array,fn=un,ie=fn;function vn(e){var t=new e.constructor(e.byteLength);return new ie(t).set(new ie(e)),t}var pn=vn,dn=pn;function hn(e,t){var r=t?dn(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var _n=hn;function gn(e,t){var r=-1,a=e.length;for(t||(t=Array(a));++r<a;)t[r]=e[r];return t}var bn=gn,$n=y,ce=Object.create,yn=function(){function e(){}return function(t){if(!$n(t))return{};if(ce)return ce(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),mn=yn;function On(e,t){return function(r){return e(t(r))}}var Cn=On,jn=Cn,wn=jn(Object.getPrototypeOf,Object),Me=wn,Sn=Object.prototype;function Tn(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Sn;return e===r}var Le=Tn,xn=mn,An=Me,Pn=Le;function In(e){return typeof e.constructor=="function"&&!Pn(e)?xn(An(e)):{}}var Mn=In;function Ln(e){return e!=null&&typeof e=="object"}var x=Ln,Gn=z,En=x,Dn="[object Arguments]";function Bn(e){return En(e)&&Gn(e)==Dn}var Fn=Bn,le=Fn,kn=x,Ge=Object.prototype,zn=Ge.hasOwnProperty,Nn=Ge.propertyIsEnumerable,Rn=le(function(){return arguments}())?le:function(e){return kn(e)&&zn.call(e,"callee")&&!Nn.call(e,"callee")},Ee=Rn,Hn=Array.isArray,De=Hn,Un=9007199254740991;function Vn(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Un}var Be=Vn,Kn=K,Wn=Be;function qn(e){return e!=null&&Wn(e.length)&&!Kn(e)}var J=qn,Jn=J,Xn=x;function Yn(e){return Xn(e)&&Jn(e)}var Zn=Yn,G={exports:{}};function Qn(){return!1}var eo=Qn;G.exports;(function(e,t){var r=C,a=eo,n=t&&!t.nodeType&&t,s=n&&!0&&e&&!e.nodeType&&e,i=s&&s.exports===n,o=i?r.Buffer:void 0,u=o?o.isBuffer:void 0,l=u||a;e.exports=l})(G,G.exports);var Fe=G.exports,to=z,ro=Me,ao=x,no="[object Object]",oo=Function.prototype,so=Object.prototype,ke=oo.toString,io=so.hasOwnProperty,co=ke.call(Object);function lo(e){if(!ao(e)||to(e)!=no)return!1;var t=ro(e);if(t===null)return!0;var r=io.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&ke.call(r)==co}var uo=lo,fo=z,vo=Be,po=x,ho="[object Arguments]",_o="[object Array]",go="[object Boolean]",bo="[object Date]",$o="[object Error]",yo="[object Function]",mo="[object Map]",Oo="[object Number]",Co="[object Object]",jo="[object RegExp]",wo="[object Set]",So="[object String]",To="[object WeakMap]",xo="[object ArrayBuffer]",Ao="[object DataView]",Po="[object Float32Array]",Io="[object Float64Array]",Mo="[object Int8Array]",Lo="[object Int16Array]",Go="[object Int32Array]",Eo="[object Uint8Array]",Do="[object Uint8ClampedArray]",Bo="[object Uint16Array]",Fo="[object Uint32Array]",d={};d[Po]=d[Io]=d[Mo]=d[Lo]=d[Go]=d[Eo]=d[Do]=d[Bo]=d[Fo]=!0;d[ho]=d[_o]=d[xo]=d[go]=d[Ao]=d[bo]=d[$o]=d[yo]=d[mo]=d[Oo]=d[Co]=d[jo]=d[wo]=d[So]=d[To]=!1;function ko(e){return po(e)&&vo(e.length)&&!!d[fo(e)]}var zo=ko;function No(e){return function(t){return e(t)}}var Ro=No,E={exports:{}};E.exports;(function(e,t){var r=Se,a=t&&!t.nodeType&&t,n=a&&!0&&e&&!e.nodeType&&e,s=n&&n.exports===a,i=s&&r.process,o=function(){try{var u=n&&n.require&&n.require("util").types;return u||i&&i.binding&&i.binding("util")}catch{}}();e.exports=o})(E,E.exports);var Ho=E.exports,Uo=zo,Vo=Ro,ue=Ho,fe=ue&&ue.isTypedArray,Ko=fe?Vo(fe):Uo,ze=Ko;function Wo(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var Ne=Wo,qo=q,Jo=B,Xo=Object.prototype,Yo=Xo.hasOwnProperty;function Zo(e,t,r){var a=e[t];(!(Yo.call(e,t)&&Jo(a,r))||r===void 0&&!(t in e))&&qo(e,t,r)}var Qo=Zo,es=Qo,ts=q;function rs(e,t,r,a){var n=!r;r||(r={});for(var s=-1,i=t.length;++s<i;){var o=t[s],u=a?a(r[o],e[o],o,r,e):void 0;u===void 0&&(u=e[o]),n?ts(r,o,u):es(r,o,u)}return r}var as=rs;function ns(e,t){for(var r=-1,a=Array(e);++r<e;)a[r]=t(r);return a}var os=ns,ss=9007199254740991,is=/^(?:0|[1-9]\d*)$/;function cs(e,t){var r=typeof e;return t=t??ss,!!t&&(r=="number"||r!="symbol"&&is.test(e))&&e>-1&&e%1==0&&e<t}var Re=cs,ls=os,us=Ee,fs=De,vs=Fe,ps=Re,ds=ze,hs=Object.prototype,_s=hs.hasOwnProperty;function gs(e,t){var r=fs(e),a=!r&&us(e),n=!r&&!a&&vs(e),s=!r&&!a&&!n&&ds(e),i=r||a||n||s,o=i?ls(e.length,String):[],u=o.length;for(var l in e)(t||_s.call(e,l))&&!(i&&(l=="length"||n&&(l=="offset"||l=="parent")||s&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||ps(l,u)))&&o.push(l);return o}var bs=gs;function $s(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var ys=$s,ms=y,Os=Le,Cs=ys,js=Object.prototype,ws=js.hasOwnProperty;function Ss(e){if(!ms(e))return Cs(e);var t=Os(e),r=[];for(var a in e)a=="constructor"&&(t||!ws.call(e,a))||r.push(a);return r}var Ts=Ss,xs=bs,As=Ts,Ps=J;function Is(e){return Ps(e)?xs(e,!0):As(e)}var He=Is,Ms=as,Ls=He;function Gs(e){return Ms(e,Ls(e))}var Es=Gs,ve=Ie,Ds=cn,Bs=_n,Fs=bn,ks=Mn,pe=Ee,de=De,zs=Zn,Ns=Fe,Rs=K,Hs=y,Us=uo,Vs=ze,he=Ne,Ks=Es;function Ws(e,t,r,a,n,s,i){var o=he(e,r),u=he(t,r),l=i.get(u);if(l){ve(e,r,l);return}var f=s?s(o,u,r+"",e,t,i):void 0,c=f===void 0;if(c){var p=de(u),g=!p&&Ns(u),v=!p&&!g&&Vs(u);f=u,p||g||v?de(o)?f=o:zs(o)?f=Fs(o):g?(c=!1,f=Ds(u,!0)):v?(c=!1,f=Bs(u,!0)):f=[]:Us(u)||pe(u)?(f=o,pe(o)?f=Ks(o):(!Hs(o)||Rs(o))&&(f=ks(u))):c=!1}c&&(i.set(u,f),n(f,u,a,s,i),i.delete(u)),ve(e,r,f)}var qs=Ws,Js=Ja,Xs=Ie,Ys=sn,Zs=qs,Qs=y,ei=He,ti=Ne;function Ue(e,t,r,a,n){e!==t&&Ys(t,function(s,i){if(n||(n=new Js),Qs(s))Zs(e,t,i,r,Ue,a,n);else{var o=a?a(ti(e,i),s,i+"",e,t,n):void 0;o===void 0&&(o=s),Xs(e,i,o)}},ei)}var ri=Ue;function ai(e){return e}var Ve=ai;function ni(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}var oi=ni,si=oi,_e=Math.max;function ii(e,t,r){return t=_e(t===void 0?e.length-1:t,0),function(){for(var a=arguments,n=-1,s=_e(a.length-t,0),i=Array(s);++n<s;)i[n]=a[t+n];n=-1;for(var o=Array(t+1);++n<t;)o[n]=a[n];return o[t]=r(i),si(e,this,o)}}var ci=ii;function li(e){return function(){return e}}var ui=li,fi=ui,ge=Pe,vi=Ve,pi=ge?function(e,t){return ge(e,"toString",{configurable:!0,enumerable:!1,value:fi(t),writable:!0})}:vi,di=pi,hi=800,_i=16,gi=Date.now;function bi(e){var t=0,r=0;return function(){var a=gi(),n=_i-(a-r);if(r=a,n>0){if(++t>=hi)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var $i=bi,yi=di,mi=$i,Oi=mi(yi),Ci=Oi,ji=Ve,wi=ci,Si=Ci;function Ti(e,t){return Si(wi(e,t,ji),e+"")}var xi=Ti,Ai=B,Pi=J,Ii=Re,Mi=y;function Li(e,t,r){if(!Mi(r))return!1;var a=typeof t;return(a=="number"?Pi(r)&&Ii(t,r.length):a=="string"&&t in r)?Ai(r[t],e):!1}var Gi=Li,Ei=xi,Di=Gi;function Bi(e){return Ei(function(t,r){var a=-1,n=r.length,s=n>1?r[n-1]:void 0,i=n>2?r[2]:void 0;for(s=e.length>3&&typeof s=="function"?(n--,s):void 0,i&&Di(r[0],r[1],i)&&(s=n<3?void 0:s,n=1),t=Object(t);++a<n;){var o=r[a];o&&e(t,o,a,s)}return t})}var Fi=Bi,ki=ri,zi=Fi,Ni=zi(function(e,t,r){ki(e,t,r)}),Ri=Ni;const Hi=qe(Ri);function Ui(e){return Xe()?(Ye(e),!0):!1}function Vi(e){return typeof e=="function"?e():h(e)}const Ki=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function Wi(e){return e||ye()}function qi(e,t=!0,r){Wi()?$e(e,r):t?e():Je(e)}function m(e){var t;const r=Vi(e);return(t=r==null?void 0:r.$el)!=null?t:r}const Ke=Ki?window:void 0;function Ji(){const e=$(!1),t=ye();return t&&$e(()=>{e.value=!0},t),e}function Xi(e){const t=Ji();return D(()=>(t.value,!!e()))}function Yi(e,t,r={}){const{window:a=Ke,...n}=r;let s;const i=Xi(()=>a&&"ResizeObserver"in a),o=()=>{s&&(s.disconnect(),s=void 0)},u=D(()=>Array.isArray(e)?e.map(c=>m(c)):[m(e)]),l=me(u,c=>{if(o(),i.value&&a){s=new ResizeObserver(t);for(const p of c)p&&s.observe(p,n)}},{immediate:!0,flush:"post"}),f=()=>{o(),l()};return Ui(f),{isSupported:i,stop:f}}function Zi(e,t={width:0,height:0},r={}){const{window:a=Ke,box:n="content-box"}=r,s=D(()=>{var c,p;return(p=(c=m(e))==null?void 0:c.namespaceURI)==null?void 0:p.includes("svg")}),i=$(t.width),o=$(t.height),{stop:u}=Yi(e,([c])=>{const p=n==="border-box"?c.borderBoxSize:n==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(a&&s.value){const g=m(e);if(g){const v=a.getComputedStyle(g);i.value=Number.parseFloat(v.width),o.value=Number.parseFloat(v.height)}}else if(p){const g=Array.isArray(p)?p:[p];i.value=g.reduce((v,{inlineSize:H})=>v+H,0),o.value=g.reduce((v,{blockSize:H})=>v+H,0)}else i.value=c.contentRect.width,o.value=c.contentRect.height},r);qi(()=>{const c=m(e);c&&(i.value="offsetWidth"in c?c.offsetWidth:t.width,o.value="offsetHeight"in c?c.offsetHeight:t.height)});const l=me(()=>m(e),c=>{i.value=c?t.width:0,o.value=c?t.height:0});function f(){u(),l()}return{width:i,height:o,stop:f}}const Qi=e=>(Ce("data-v-461bd178"),e=e(),je(),e),ec=["width","height"],tc=["fill","stroke","d"],rc=["stroke"],ac=Qi(()=>_("path",{fill:"transparent",stroke:"{mergedColor[1]}",d:"M 5 20 L 5 10 L 12 3  L 60 3 L 68 10"},null,-1)),nc=["stroke","d"],oc={class:"dv-border-box-content"},sc=Oe({__name:"border-box-13",props:{color:{type:Array,default:()=>[]},backgroundColor:{type:String,default:"transparent"}},setup(e){const t=e,r=["#6586ec","#2cf7fe"],a=$(null),{width:n,height:s}=Zi(a,{width:0,height:0},{box:"border-box"}),i=D(()=>Hi(r,t.color));return(o,u)=>(b(),M("div",{class:"dv-border-box-13 dv-border-box",ref_key:"domRef",ref:a},[(b(),M("svg",{width:h(n),height:h(s),class:"dv-border-svg-container"},[_("path",{fill:e.backgroundColor,stroke:i.value[0],d:`
            M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
            L ${h(n)-20} 10 L ${h(n)-5} 25
            L ${h(n)-5} ${h(s)-5} L 20 ${h(s)-5}
            L 5 ${h(s)-20} L 5 20
        `},null,8,tc),_("path",{fill:"transparent","stroke-width":"3","stroke-linecap":"round","stroke-dasharray":"10, 5",stroke:i.value[0],d:"M 16 9 L 61 9"},null,8,rc),ac,_("path",{fill:"transparent",stroke:i.value[1],d:`M ${h(n)-5} ${h(s)-30} L ${h(n)-5} ${h(s)-5} L ${h(n)-30} ${h(s)-5}`},null,8,nc)],8,ec)),_("div",oc,[Ze(o.$slots,"default",{},void 0,!0)])],512))}}),be=we(sc,[["__scopeId","data-v-461bd178"]]),ic="/assets/yanshi-kFcuhs80.mp4",cc=(e,t,r)=>{let a=45,n=1.1,s=0,i=0,o="",u,l,f="";r=="stcpjz"?(s=A.from(t).min(v=>v.value),i=A.from(t).max(v=>v.value),o="亿元",u=["rgba(255,255,128,.8)","rgba(175,245,83,.9)","rgba(90,230,34,.9)","rgba(62,201,72,.9)","rgba(52,168,132,.9)","rgba(31,126,163,0.9)","rgba(31,67,143,.9)","rgba(12,16,120,.9)"]):r=="st"&&(s=A.from(t).min(v=>v.value),i=A.from(t).max(v=>v.value),f="碳中和指标",o="%",u=["rgba(220,245,233,.8)","rgba(189,222,201,.9)","rgba(130,179,142,.9)","rgba(78,138,91,.9)","rgba(56,120,81,.9)","rgba(34,102,57,0.9)"]);const c={seriesIndex:0,left:30,bottom:20,itemWidth:10,itemHeight:450,min:s,max:i,text:["高("+i+o+")","低("+s+o+")"],orient:"horizontal",inRange:{color:u},textStyle:{color:"#fff"}},p={type:"piecewise",left:45,bottom:40,itemWidth:30,itemHeight:30,categories:["昭乌达羊","燕麦"],itemSymbol:[`image://${Y}`,`image://${Z}`],inRange:{symbolSize:{昭乌达羊:30,燕麦:30},symbol:{昭乌达羊:`image://${Y}`,燕麦:`image://${Z}`}},textStyle:{color:"#fff"}};let g;return r=="stcpjz"||r=="st"?l=c:r=="ncpsy"&&(l=p,g={type:"scatter",coordinateSystem:"geo",data:lc}),{backgroundColor:"rgba(0,0,0,0)",tooltip:{show:!1},visualMap:l,geo:{map:e,roam:"move",top:a,show:!1},series:[{name:"MAP",type:"map",map:e,data:t,selectedMode:!1,zoom:n,geoIndex:1,top:a,tooltip:{show:!0,formatter:function(v){return v.data&&v.data.value!=""?v.name+"："+f+v.data.value+o:v.name},backgroundColor:"rgba(0,0,0,.6)",borderColor:"rgba(147, 235, 248, .8)",textStyle:{color:"#FFF"}},label:{show:!0,color:"#fff",formatter:function(v){return v.data!==void 0,v.name.slice(0,2)},rich:{}},emphasis:{label:{show:!1},itemStyle:{areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(147, 235, 248, 0)"},{offset:1,color:"rgba(56,155,183, .8)"}],globalCoord:!1},borderWidth:1}},itemStyle:{borderColor:"rgba(147, 235, 248, .8)",borderWidth:3,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(147, 235, 248, 0)"},{offset:1,color:"rgba(147, 235, 248, .2)"}],globalCoord:!1},shadowColor:"rgba(128, 217, 248, .3)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10}},g]}},lc=[[117.242465,43.056233,"昭乌达羊"],[117.542465,43.256233,"燕麦"],[119.022619,42.937128,"昭乌达羊"],[119.422619,42.937128,"燕麦"],[120.094969,43.87877,"昭乌达羊"],[120.094969,44.17877,"燕麦"],[118.678347,43.528963,"昭乌达羊"]],X=e=>(Ce("data-v-9ef53fb1"),e=e(),je(),e),uc={class:"centermap"},fc={class:"maptitle"},vc=X(()=>_("div",{class:"zuo"},null,-1)),pc={class:"top_menu"},dc=X(()=>_("div",{class:"you"},null,-1)),hc={class:"mapwrap"},_c=X(()=>_("video",{width:"650px",autoplay:"",controls:"",src:ic},null,-1)),gc={data(){return{}}},bc=Oe({...gc,__name:"center-map",props:{title:{default:"地图"}},setup(e){const t=$({}),r=$("chifeng"),a=$("st"),n={stcpjz:[{name:"红山",value:7.03},{name:"元宝山",value:33.4},{name:"松山",value:284.61},{name:"阿旗",value:710.86},{name:"左旗",value:408.03},{name:"右旗",value:565.94},{name:"林西",value:219.3},{name:"克旗",value:1578.99},{name:"翁旗",value:495.19},{name:"喀旗",value:181.36},{name:"宁城",value:204.65},{name:"敖汉",value:345.52}],st:[{name:"红山",value:1.55},{name:"元宝山",value:2.59},{name:"松山",value:12.87},{name:"阿旗",value:71.2},{name:"左旗",value:46.38},{name:"右旗",value:46.92},{name:"林西",value:39.5},{name:"克旗",value:95.66},{name:"翁旗",value:56.38},{name:"喀旗",value:16.65},{name:"宁城",value:19.38},{name:"敖汉",value:27.82}],ncpsy:[{name:"红山",value:""},{name:"元宝山",value:""},{name:"松山",value:""},{name:"阿旗",value:"昭乌达羊, 燕麦"},{name:"左旗",value:""},{name:"右旗",value:"昭乌达羊"},{name:"林西",value:""},{name:"克旗",value:"昭乌达羊, 燕麦"},{name:"翁旗",value:"昭乌达羊, 燕麦"},{name:"喀旗",value:""},{name:"宁城",value:""},{name:"敖汉",value:""}]},s=async(l,f,c)=>{const p=await o(l);let g={};p.features.forEach(v=>{g[v.properties.name]=v.properties.centroid||v.properties.center}),t.value=cc(l,f,c)},i=async(l,f,c)=>{s(l,f,c)},o=l=>new Promise(async f=>{let c=Qe(l);c?(c=c.geoJSON,f(c)):(c=await We(`./map-geojson/${l}.json`).then(p=>p),r.value=l,et(l,{geoJSON:c,specialAreas:{}}),f(c))}),u=l=>{if(a.value=l,l=="video"){console.log(a);return}else i("chifeng",n[l],l)};return i(r.value,n.stcpjz,"stcpjz"),(l,f)=>{const c=tt("v-chart");return b(),M("div",uc,[_("div",fc,[vc,_("span",pc,[_("button",{onClick:f[0]||(f[0]=p=>u("stcpjz"))},"生态产品"),_("button",{onClick:f[1]||(f[1]=p=>u("st"))},"双碳"),_("button",{onClick:f[2]||(f[2]=p=>u("ncpsy"))},"农产品追溯"),_("button",{onClick:f[3]||(f[3]=p=>u("video"))},"数据资产(待建设中...)")]),dc]),_("div",hc,[a.value!=="video"?(b(),U(h(be),{key:0},{default:Q(()=>[r.value!=="chifeng"?(b(),M("div",{key:0,class:"quanguo",onClick:f[4]||(f[4]=p=>i("chifeng"))},"赤峰")):I("",!0),JSON.stringify(t.value)!="{}"?(b(),U(c,{key:1,class:"chart",option:t.value,ref:"centerMapRef",onClick:l.mapClick},null,8,["option","onClick"])):I("",!0)]),_:1})):I("",!0),a.value=="video"?(b(),U(h(be),{key:1,style:{"padding-top":"130px","padding-left":"25px"}},{default:Q(()=>[_c]),_:1})):I("",!0)])])}}}),$c=we(bc,[["__scopeId","data-v-9ef53fb1"]]),wc=Object.freeze(Object.defineProperty({__proto__:null,default:$c},Symbol.toStringTag,{value:"Module"}));export{be as B,$c as C,C as _,z as a,y as b,wc as c,x as i};
