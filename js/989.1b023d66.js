(self["webpackChunkvue3_tourguide"]=self["webpackChunkvue3_tourguide"]||[]).push([[989],{5787:function(t,e,r){var n=r(7854),o=r(7976),i=n.TypeError;t.exports=function(t,e){if(o(e,t))return t;throw i("Incorrect invocation")}},4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,r){"use strict";var n,o,i,s=r(4019),a=r(9781),u=r(7854),c=r(614),f=r(111),l=r(2597),h=r(648),p=r(6330),d=r(8880),m=r(1320),v=r(3070).f,y=r(7976),g=r(9518),E=r(7674),w=r(5112),A=r(9711),R=u.Int8Array,b=R&&R.prototype,T=u.Uint8ClampedArray,U=T&&T.prototype,x=R&&g(R),C=b&&g(b),_=Object.prototype,S=u.TypeError,O=w("toStringTag"),N=A("TYPED_ARRAY_TAG"),I=A("TYPED_ARRAY_CONSTRUCTOR"),L=s&&!!E&&"Opera"!==h(u.opera),k=!1,P={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},B={BigInt64Array:8,BigUint64Array:8},D=function(t){if(!f(t))return!1;var e=h(t);return"DataView"===e||l(P,e)||l(B,e)},j=function(t){if(!f(t))return!1;var e=h(t);return l(P,e)||l(B,e)},F=function(t){if(j(t))return t;throw S("Target is not a typed array")},M=function(t){if(c(t)&&(!E||y(x,t)))return t;throw S(p(t)+" is not a typed array constructor")},H=function(t,e,r,n){if(a){if(r)for(var o in P){var i=u[o];if(i&&l(i.prototype,t))try{delete i.prototype[t]}catch(s){try{i.prototype[t]=e}catch(c){}}}C[t]&&!r||m(C,t,r?e:L&&b[t]||e,n)}},Y=function(t,e,r){var n,o;if(a){if(E){if(r)for(n in P)if(o=u[n],o&&l(o,t))try{delete o[t]}catch(i){}if(x[t]&&!r)return;try{return m(x,t,r?e:L&&x[t]||e)}catch(i){}}for(n in P)o=u[n],!o||o[t]&&!r||m(o,t,e)}};for(n in P)o=u[n],i=o&&o.prototype,i?d(i,I,o):L=!1;for(n in B)o=u[n],i=o&&o.prototype,i&&d(i,I,o);if((!L||!c(x)||x===Function.prototype)&&(x=function(){throw S("Incorrect invocation")},L))for(n in P)u[n]&&E(u[n],x);if((!L||!C||C===_)&&(C=x.prototype,L))for(n in P)u[n]&&E(u[n].prototype,C);if(L&&g(U)!==C&&E(U,C),a&&!l(C,O))for(n in k=!0,v(C,O,{get:function(){return f(this)?this[N]:void 0}}),P)u[n]&&d(u[n],N,n);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_CONSTRUCTOR:I,TYPED_ARRAY_TAG:k&&N,aTypedArray:F,aTypedArrayConstructor:M,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:Y,isView:D,isTypedArray:j,TypedArray:x,TypedArrayPrototype:C}},8544:function(t,e,r){var n=r(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},9518:function(t,e,r){var n=r(7854),o=r(2597),i=r(614),s=r(7908),a=r(6200),u=r(8544),c=a("IE_PROTO"),f=n.Object,l=f.prototype;t.exports=u?f.getPrototypeOf:function(t){var e=s(t);if(o(e,c))return e[c];var r=e.constructor;return i(r)&&e instanceof r?r.prototype:e instanceof f?l:null}},4590:function(t,e,r){var n=r(7854),o=r(3002),i=n.RangeError;t.exports=function(t,e){var r=o(t);if(r%e)throw i("Wrong offset");return r}},3002:function(t,e,r){var n=r(7854),o=r(9303),i=n.RangeError;t.exports=function(t){var e=o(t);if(e<0)throw i("The argument can't be less than 0");return e}},8675:function(t,e,r){"use strict";var n=r(260),o=r(6244),i=r(9303),s=n.aTypedArray,a=n.exportTypedArrayMethod;a("at",(function(t){var e=s(this),r=o(e),n=i(t),a=n>=0?n:r+n;return a<0||a>=r?void 0:e[a]}))},3462:function(t,e,r){"use strict";var n=r(7854),o=r(6916),i=r(260),s=r(6244),a=r(4590),u=r(7908),c=r(7293),f=n.RangeError,l=n.Int8Array,h=l&&l.prototype,p=h&&h.set,d=i.aTypedArray,m=i.exportTypedArrayMethod,v=!c((function(){var t=new Uint8ClampedArray(2);return o(p,t,{length:1,0:3},1),3!==t[1]})),y=v&&i.NATIVE_ARRAY_BUFFER_VIEWS&&c((function(){var t=new l(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));m("set",(function(t){d(this);var e=a(arguments.length>1?arguments[1]:void 0,1),r=u(t);if(v)return o(p,this,r,e);var n=this.length,i=s(r),c=0;if(i+e>n)throw f("Wrong length");while(c<i)this[e+c]=r[c++]}),!v||y)},2801:function(t,e,r){"use strict";var n=r(2109),o=r(5005),i=r(9114),s=r(3070).f,a=r(2597),u=r(5787),c=r(9587),f=r(6277),l=r(3678),h=r(7741),p=r(1913),d="DOMException",m=o("Error"),v=o(d),y=function(){u(this,g);var t=arguments.length,e=f(t<1?void 0:arguments[0]),r=f(t<2?void 0:arguments[1],"Error"),n=new v(e,r),o=m(e);return o.name=d,s(n,"stack",i(1,h(o.stack,1))),c(n,this,y),n},g=y.prototype=v.prototype,E="stack"in m(d),w="stack"in new v(1,2),A=E&&!w;n({global:!0,forced:p||A},{DOMException:A?y:v});var R=o(d),b=R.prototype;if(b.constructor!==R)for(var T in p||s(b,"constructor",i(1,R)),l)if(a(l,T)){var U=l[T],x=U.s;a(R,x)||s(R,x,i(6,U.c))}},4150:function(t,e,r){"use strict";r.d(e,{mX:function(){return b},RA:function(){return x},Bv:function(){return U},qX:function(){return T}});var n=r(6265),o=r.n(n);r(1703),r(8675),r(3462);const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function s(t,e,r,n){let o,i,s;const a=e||[0],u=(r=r||0)>>>3,c=-1===n?3:0;for(o=0;o<t.length;o+=1)s=o+u,i=s>>>2,a.length<=i&&a.push(0),a[i]|=t[o]<<8*(c+n*(s%4));return{value:a,binLen:8*t.length+r}}function a(t,e,r){switch(e){case"UTF8":case"UTF16BE":case"UTF16LE":break;default:throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")}switch(t){case"HEX":return function(t,e,n){return function(t,e,r,n){let o,i,s,a;if(0!=t.length%2)throw new Error("String of HEX type must be in byte increments");const u=e||[0],c=(r=r||0)>>>3,f=-1===n?3:0;for(o=0;o<t.length;o+=2){if(i=parseInt(t.substr(o,2),16),isNaN(i))throw new Error("String of HEX type contains invalid characters");for(a=(o>>>1)+c,s=a>>>2;u.length<=s;)u.push(0);u[s]|=i<<8*(f+n*(a%4))}return{value:u,binLen:4*t.length+r}}(t,e,n,r)};case"TEXT":return function(t,n,o){return function(t,e,r,n,o){let i,s,a,u,c,f,l,h,p=0;const d=r||[0],m=(n=n||0)>>>3;if("UTF8"===e)for(l=-1===o?3:0,a=0;a<t.length;a+=1)for(i=t.charCodeAt(a),s=[],128>i?s.push(i):2048>i?(s.push(192|i>>>6),s.push(128|63&i)):55296>i||57344<=i?s.push(224|i>>>12,128|i>>>6&63,128|63&i):(a+=1,i=65536+((1023&i)<<10|1023&t.charCodeAt(a)),s.push(240|i>>>18,128|i>>>12&63,128|i>>>6&63,128|63&i)),u=0;u<s.length;u+=1){for(f=p+m,c=f>>>2;d.length<=c;)d.push(0);d[c]|=s[u]<<8*(l+o*(f%4)),p+=1}else for(l=-1===o?2:0,h="UTF16LE"===e&&1!==o||"UTF16LE"!==e&&1===o,a=0;a<t.length;a+=1){for(i=t.charCodeAt(a),!0===h&&(u=255&i,i=u<<8|i>>>8),f=p+m,c=f>>>2;d.length<=c;)d.push(0);d[c]|=i<<8*(l+o*(f%4)),p+=2}return{value:d,binLen:8*p+n}}(t,e,n,o,r)};case"B64":return function(t,e,n){return function(t,e,r,n){let o,s,a,u,c,f,l,h=0;const p=e||[0],d=(r=r||0)>>>3,m=-1===n?3:0,v=t.indexOf("=");if(-1===t.search(/^[a-zA-Z0-9=+/]+$/))throw new Error("Invalid character in base-64 string");if(t=t.replace(/=/g,""),-1!==v&&v<t.length)throw new Error("Invalid '=' found in base-64 string");for(s=0;s<t.length;s+=4){for(c=t.substr(s,4),u=0,a=0;a<c.length;a+=1)o=i.indexOf(c.charAt(a)),u|=o<<18-6*a;for(a=0;a<c.length-1;a+=1){for(l=h+d,f=l>>>2;p.length<=f;)p.push(0);p[f]|=(u>>>16-8*a&255)<<8*(m+n*(l%4)),h+=1}}return{value:p,binLen:8*h+r}}(t,e,n,r)};case"BYTES":return function(t,e,n){return function(t,e,r,n){let o,i,s,a;const u=e||[0],c=(r=r||0)>>>3,f=-1===n?3:0;for(i=0;i<t.length;i+=1)o=t.charCodeAt(i),a=i+c,s=a>>>2,u.length<=s&&u.push(0),u[s]|=o<<8*(f+n*(a%4));return{value:u,binLen:8*t.length+r}}(t,e,n,r)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch(i){throw new Error("ARRAYBUFFER not supported by this environment")}return function(t,e,n){return function(t,e,r,n){return s(new Uint8Array(t),e,r,n)}(t,e,n,r)};case"UINT8ARRAY":try{new Uint8Array(0)}catch(i){throw new Error("UINT8ARRAY not supported by this environment")}return function(t,e,n){return s(t,e,n,r)};default:throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function u(t,e,r,n){switch(t){case"HEX":return function(t){return function(t,e,r,n){let o,i,s="";const a=e/8,u=-1===r?3:0;for(o=0;o<a;o+=1)i=t[o>>>2]>>>8*(u+r*(o%4)),s+="0123456789abcdef".charAt(i>>>4&15)+"0123456789abcdef".charAt(15&i);return n.outputUpper?s.toUpperCase():s}(t,e,r,n)};case"B64":return function(t){return function(t,e,r,n){let o,s,a,u,c,f="";const l=e/8,h=-1===r?3:0;for(o=0;o<l;o+=3)for(u=o+1<l?t[o+1>>>2]:0,c=o+2<l?t[o+2>>>2]:0,a=(t[o>>>2]>>>8*(h+r*(o%4))&255)<<16|(u>>>8*(h+r*((o+1)%4))&255)<<8|c>>>8*(h+r*((o+2)%4))&255,s=0;s<4;s+=1)f+=8*o+6*s<=e?i.charAt(a>>>6*(3-s)&63):n.b64Pad;return f}(t,e,r,n)};case"BYTES":return function(t){return function(t,e,r){let n,o,i="";const s=e/8,a=-1===r?3:0;for(n=0;n<s;n+=1)o=t[n>>>2]>>>8*(a+r*(n%4))&255,i+=String.fromCharCode(o);return i}(t,e,r)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch(i){throw new Error("ARRAYBUFFER not supported by this environment")}return function(t){return function(t,e,r){let n;const o=e/8,i=new ArrayBuffer(o),s=new Uint8Array(i),a=-1===r?3:0;for(n=0;n<o;n+=1)s[n]=t[n>>>2]>>>8*(a+r*(n%4))&255;return i}(t,e,r)};case"UINT8ARRAY":try{new Uint8Array(0)}catch(i){throw new Error("UINT8ARRAY not supported by this environment")}return function(t){return function(t,e,r){let n;const o=e/8,i=-1===r?3:0,s=new Uint8Array(o);for(n=0;n<o;n+=1)s[n]=t[n>>>2]>>>8*(i+r*(n%4))&255;return s}(t,e,r)};default:throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function c(t){const e={outputUpper:!1,b64Pad:"=",outputLen:-1},r=t||{},n="Output length must be a multiple of 8";if(e.outputUpper=r.outputUpper||!1,r.b64Pad&&(e.b64Pad=r.b64Pad),r.outputLen){if(r.outputLen%8!=0)throw new Error(n);e.outputLen=r.outputLen}else if(r.shakeLen){if(r.shakeLen%8!=0)throw new Error(n);e.outputLen=r.shakeLen}if("boolean"!=typeof e.outputUpper)throw new Error("Invalid outputUpper formatting option");if("string"!=typeof e.b64Pad)throw new Error("Invalid b64Pad formatting option");return e}function f(t,e){return t<<e|t>>>32-e}function l(t,e,r){return t^e^r}function h(t,e,r){return t&e^t&r^e&r}function p(t,e){const r=(65535&t)+(65535&e);return(65535&(t>>>16)+(e>>>16)+(r>>>16))<<16|65535&r}function d(t,e,r,n,o){const i=(65535&t)+(65535&e)+(65535&r)+(65535&n)+(65535&o);return(65535&(t>>>16)+(e>>>16)+(r>>>16)+(n>>>16)+(o>>>16)+(i>>>16))<<16|65535&i}function m(t){return[1732584193,4023233417,2562383102,271733878,3285377520]}function v(t,e){let r,n,o,i,s,a,u;const c=[];for(r=e[0],n=e[1],o=e[2],i=e[3],s=e[4],u=0;u<80;u+=1)c[u]=u<16?t[u]:f(c[u-3]^c[u-8]^c[u-14]^c[u-16],1),a=u<20?d(f(r,5),(m=n)&o^~m&i,s,1518500249,c[u]):u<40?d(f(r,5),l(n,o,i),s,1859775393,c[u]):u<60?d(f(r,5),h(n,o,i),s,2400959708,c[u]):d(f(r,5),l(n,o,i),s,3395469782,c[u]),s=i,i=o,o=f(n,30),n=r,r=a;var m;return e[0]=p(r,e[0]),e[1]=p(n,e[1]),e[2]=p(o,e[2]),e[3]=p(i,e[3]),e[4]=p(s,e[4]),e}function y(t,e,r,n){let o;const i=15+(e+65>>>9<<4),s=e+r;for(;t.length<=i;)t.push(0);for(t[e>>>5]|=128<<24-e%32,t[i]=4294967295&s,t[i-1]=s/4294967296|0,o=0;o<t.length;o+=16)n=v(t.slice(o,o+16),n);return n}var g=class extends class{constructor(t,e,r){const n=r||{};if(this.t=e,this.i=n.encoding||"UTF8",this.numRounds=n.numRounds||1,isNaN(this.numRounds)||this.numRounds!==parseInt(this.numRounds,10)||1>this.numRounds)throw new Error("numRounds must a integer >= 1");this.s=t,this.o=[],this.h=0,this.u=!1,this.l=0,this.A=!1,this.p=[],this.R=[]}update(t){let e,r=0;const n=this.U>>>5,o=this.T(t,this.o,this.h),i=o.binLen,s=o.value,a=i>>>5;for(e=0;e<a;e+=n)r+this.U<=i&&(this.F=this.m(s.slice(e,e+n),this.F),r+=this.U);this.l+=r,this.o=s.slice(r>>>5),this.h=i%this.U,this.u=!0}getHash(t,e){let r,n,o=this.g;const i=c(e);if(this.B){if(-1===i.outputLen)throw new Error("Output length must be specified in options");o=i.outputLen}const s=u(t,o,this.v,i);if(this.A&&this.Y)return s(this.Y(i));for(n=this.H(this.o.slice(),this.h,this.l,this.C(this.F),o),r=1;r<this.numRounds;r+=1)this.B&&o%32!=0&&(n[n.length-1]&=16777215>>>24-o%32),n=this.H(n,o,0,this.I(this.s),o);return s(n)}setHMACKey(t,e,r){if(!this.L)throw new Error("Variant does not support HMAC");if(this.u)throw new Error("Cannot set MAC key after calling update");const n=a(e,(r||{}).encoding||"UTF8",this.v);this.M(n(t))}M(t){const e=this.U>>>3,r=e/4-1;let n;if(1!==this.numRounds)throw new Error("Cannot set numRounds with MAC");if(this.A)throw new Error("MAC key already set");for(e<t.binLen/8&&(t.value=this.H(t.value,t.binLen,0,this.I(this.s),this.g));t.value.length<=r;)t.value.push(0);for(n=0;n<=r;n+=1)this.p[n]=909522486^t.value[n],this.R[n]=1549556828^t.value[n];this.F=this.m(this.p,this.F),this.l=this.U,this.A=!0}getHMAC(t,e){const r=c(e);return u(t,this.g,this.v,r)(this.N())}N(){let t;if(!this.A)throw new Error("Cannot call getHMAC without first setting MAC key");const e=this.H(this.o.slice(),this.h,this.l,this.C(this.F),this.g);return t=this.m(this.R,this.I(this.s)),t=this.H(e,this.g,this.U,t,this.g),t}}{constructor(t,e,r){if("SHA-1"!==t)throw new Error("Chosen SHA variant is not supported");super(t,e,r);const n=r||{};this.L=!0,this.Y=this.N,this.v=-1,this.T=a(this.t,this.i,this.v),this.m=v,this.C=function(t){return t.slice()},this.I=m,this.H=y,this.F=[1732584193,4023233417,2562383102,271733878,3285377520],this.U=512,this.g=160,this.B=!1,n.hmacKey&&this.M(function(t,e,r,n){const o=t+" must include a value and format";if(!e){if(!n)throw new Error(o);return n}if(void 0===e.value||!e.format)throw new Error(o);return a(e.format,e.encoding||"UTF8",r)(e.value)}("hmacKey",n.hmacKey,this.v))}};const E="d5a6593d182e41f5a7a7ecf37394918a",w="VaIEYF4NnTH_OKWEunqEbz6sTgg",A=o().create({baseURL:"https://ptx.transportdata.tw/MOTC"}),R=o().create({baseURL:"https://gist.motc.gov.tw/gist_api"});A.interceptors.request.use((function(t){const e=(new Date).toUTCString(),r=new g("SHA-1","TEXT");r.setHMACKey(w,"TEXT"),r.update("x-date: "+e);const n=r.getHMAC("B64"),o='hmac username="'+E+'", algorithm="hmac-sha1", headers="x-date", signature="'+n+'"';return t.headers={Authorization:o,"X-Date":e},console.log(t.headers),t}),(function(t){return console.log("error:: ",t),Promise.reject(t)})),R.interceptors.request.use((function(t){const e=(new Date).toUTCString(),r=new g("SHA-1","TEXT");r.setHMACKey(w,"TEXT"),r.update("x-date: "+e);const n=r.getHMAC("B64"),o='hmac username="'+E+'", algorithm="hmac-sha1", headers="x-date", signature="'+n+'"';return t.headers={Authorization:o,"X-Date":e},console.log(t.headers),t}),(function(t){return console.log("error:: ",t),Promise.reject(t)})),A.interceptors.response.use((function(t){return console.log(t.config.url),console.log(t),t.data}),(function(t){if(t.response){switch(t.response.status){case 400:alert("400 發生錯誤"),console.error("400 發生錯誤");break;case 404:alert("404 你要找的頁面不存在"),console.error("404 你要找的頁面不存在");break;case 500:alert("500 程式發生錯誤，請聯絡管理員"),console.error("500 程式發生錯誤，請聯絡管理員");break;default:alert("系統發生非預期錯誤，請聯絡管理員"),console.error("系統發生非預期錯誤，請聯絡管理員")}console.log(t.response.status)}return window.navigator.onLine?Promise.reject(t.response):(alert("沒有網路連線"),void console.error("沒有網路連線"))})),R.interceptors.response.use((function(t){return console.log(t.config.url),console.log(t),t.data}),(function(t){if(t.response){switch(t.response.status){case 400:alert("400 發生錯誤"),console.error("400 發生錯誤");break;case 404:alert("404 你要找的頁面不存在"),console.error("404 你要找的頁面不存在");break;case 500:alert("500 程式發生錯誤，請聯絡管理員"),console.error("500 程式發生錯誤，請聯絡管理員");break;default:alert("系統發生非預期錯誤，請聯絡管理員"),console.error("系統發生非預期錯誤，請聯絡管理員")}console.log(t.response.status)}return window.navigator.onLine?Promise.reject(t.response):(alert("沒有網路連線"),void console.error("沒有網路連線"))}));const b=()=>R.get("/V3/Map/Basic/City"),T=async t=>A.get(`/v2/Tourism/ScenicSpot?${t}`),U=t=>A.get(`/v2/Tourism/Restaurant?${t}`),x=t=>A.get(`/v2/Tourism/Activity?${t}`)},6265:function(t,e,r){t.exports=r(9435)},4951:function(t,e,r){"use strict";r(2801);var n=r(6642),o=r(6806),i=r(3833),s=r(4360),a=r(5047),u=r(5976),c=r(9896),f=r(4393),l=r(8507),h=r(692);t.exports=function(t){return new Promise((function(e,r){var p,d=t.data,m=t.headers,v=t.responseType;function y(){t.cancelToken&&t.cancelToken.unsubscribe(p),t.signal&&t.signal.removeEventListener("abort",p)}n.isFormData(d)&&delete m["Content-Type"];var g=new XMLHttpRequest;if(t.auth){var E=t.auth.username||"",w=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";m.Authorization="Basic "+btoa(E+":"+w)}var A=a(t.baseURL,t.url);function R(){if(g){var n="getAllResponseHeaders"in g?u(g.getAllResponseHeaders()):null,i=v&&"text"!==v&&"json"!==v?g.response:g.responseText,s={data:i,status:g.status,statusText:g.statusText,headers:n,config:t,request:g};o((function(t){e(t),y()}),(function(t){r(t),y()}),s),g=null}}if(g.open(t.method.toUpperCase(),s(A,t.params,t.paramsSerializer),!0),g.timeout=t.timeout,"onloadend"in g?g.onloadend=R:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(R)},g.onabort=function(){g&&(r(f("Request aborted",t,"ECONNABORTED",g)),g=null)},g.onerror=function(){r(f("Network Error",t,null,g)),g=null},g.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||l;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(f(e,t,n.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",g)),g=null},n.isStandardBrowserEnv()){var b=(t.withCredentials||c(A))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;b&&(m[t.xsrfHeaderName]=b)}"setRequestHeader"in g&&n.forEach(m,(function(t,e){"undefined"===typeof d&&"content-type"===e.toLowerCase()?delete m[e]:g.setRequestHeader(e,t)})),n.isUndefined(t.withCredentials)||(g.withCredentials=!!t.withCredentials),v&&"json"!==v&&(g.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&g.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(p=function(t){g&&(r(!t||t&&t.type?new h("canceled"):t),g.abort(),g=null)},t.cancelToken&&t.cancelToken.subscribe(p),t.signal&&(t.signal.aborted?p():t.signal.addEventListener("abort",p))),d||(d=null),g.send(d)}))}},9435:function(t,e,r){"use strict";var n=r(6642),o=r(5955),i=r(7104),s=r(8186),a=r(7);function u(t){var e=new i(t),r=o(i.prototype.request,e);return n.extend(r,i.prototype,e),n.extend(r,e),r.create=function(e){return u(s(t,e))},r}var c=u(a);c.Axios=i,c.Cancel=r(692),c.CancelToken=r(6016),c.isCancel=r(5936),c.VERSION=r(4679).version,c.all=function(t){return Promise.all(t)},c.spread=r(5431),c.isAxiosError=r(786),t.exports=c,t.exports["default"]=c},692:function(t){"use strict";function e(t){this.message=t}e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,t.exports=e},6016:function(t,e,r){"use strict";r(1703);var n=r(692);function o(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var r=this;this.promise.then((function(t){if(r._listeners){var e,n=r._listeners.length;for(e=0;e<n;e++)r._listeners[e](t);r._listeners=null}})),this.promise.then=function(t){var e,n=new Promise((function(t){r.subscribe(t),e=t})).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t((function(t){r.reason||(r.reason=new n(t),e(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]},o.prototype.unsubscribe=function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}},o.source=function(){var t,e=new o((function(e){t=e}));return{token:e,cancel:t}},t.exports=o},5936:function(t){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},7104:function(t,e,r){"use strict";var n=r(6642),o=r(4360),i=r(999),s=r(6559),a=r(8186),u=r(6298),c=u.validators;function f(t){this.defaults=t,this.interceptors={request:new i,response:new i}}f.prototype.request=function(t,e){"string"===typeof t?(e=e||{},e.url=t):e=t||{},e=a(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var r=e.transitional;void 0!==r&&u.assertOptions(r,{silentJSONParsing:c.transitional(c.boolean),forcedJSONParsing:c.transitional(c.boolean),clarifyTimeoutError:c.transitional(c.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(o=o&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var i,f=[];if(this.interceptors.response.forEach((function(t){f.push(t.fulfilled,t.rejected)})),!o){var l=[s,void 0];Array.prototype.unshift.apply(l,n),l=l.concat(f),i=Promise.resolve(e);while(l.length)i=i.then(l.shift(),l.shift());return i}var h=e;while(n.length){var p=n.shift(),d=n.shift();try{h=p(h)}catch(m){d(m);break}}try{i=s(h)}catch(m){return Promise.reject(m)}while(f.length)i=i.then(f.shift(),f.shift());return i},f.prototype.getUri=function(t){return t=a(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(t){f.prototype[t]=function(e,r){return this.request(a(r||{},{method:t,url:e,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(t){f.prototype[t]=function(e,r,n){return this.request(a(n||{},{method:t,url:e,data:r}))}})),t.exports=f},999:function(t,e,r){"use strict";var n=r(6642);function o(){this.handlers=[]}o.prototype.use=function(t,e,r){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){n.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},5047:function(t,e,r){"use strict";var n=r(4777),o=r(2381);t.exports=function(t,e){return t&&!n(e)?o(t,e):e}},4393:function(t,e,r){"use strict";r(1703);var n=r(5891);t.exports=function(t,e,r,o,i){var s=new Error(t);return n(s,e,r,o,i)}},6559:function(t,e,r){"use strict";var n=r(6642),o=r(3756),i=r(5936),s=r(7),a=r(692);function u(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new a("canceled")}t.exports=function(t){u(t),t.headers=t.headers||{},t.data=o.call(t,t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||s.adapter;return e(t).then((function(e){return u(t),e.data=o.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(u(t),e&&e.response&&(e.response.data=o.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},5891:function(t){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},t}},8186:function(t,e,r){"use strict";var n=r(6642);t.exports=function(t,e){e=e||{};var r={};function o(t,e){return n.isPlainObject(t)&&n.isPlainObject(e)?n.merge(t,e):n.isPlainObject(e)?n.merge({},e):n.isArray(e)?e.slice():e}function i(r){return n.isUndefined(e[r])?n.isUndefined(t[r])?void 0:o(void 0,t[r]):o(t[r],e[r])}function s(t){if(!n.isUndefined(e[t]))return o(void 0,e[t])}function a(r){return n.isUndefined(e[r])?n.isUndefined(t[r])?void 0:o(void 0,t[r]):o(void 0,e[r])}function u(r){return r in e?o(t[r],e[r]):r in t?o(void 0,t[r]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return n.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=c[t]||i,o=e(t);n.isUndefined(o)&&e!==u||(r[t]=o)})),r}},6806:function(t,e,r){"use strict";var n=r(4393);t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(n("Request failed with status code "+r.status,r.config,null,r.request,r)):t(r)}},3756:function(t,e,r){"use strict";var n=r(6642),o=r(7);t.exports=function(t,e,r){var i=this||o;return n.forEach(r,(function(r){t=r.call(i,t,e)})),t}},7:function(t,e,r){"use strict";var n=r(6642),o=r(1446),i=r(5891),s=r(8507),a={"Content-Type":"application/x-www-form-urlencoded"};function u(t,e){!n.isUndefined(t)&&n.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function c(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(t=r(4951)),t}function f(t,e,r){if(n.isString(t))try{return(e||JSON.parse)(t),n.trim(t)}catch(o){if("SyntaxError"!==o.name)throw o}return(r||JSON.stringify)(t)}var l={transitional:s,adapter:c(),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t)?t:n.isArrayBufferView(t)?t.buffer:n.isURLSearchParams(t)?(u(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):n.isObject(t)||e&&"application/json"===e["Content-Type"]?(u(e,"application/json"),f(t)):t}],transformResponse:[function(t){var e=this.transitional||l.transitional,r=e&&e.silentJSONParsing,o=e&&e.forcedJSONParsing,s=!r&&"json"===this.responseType;if(s||o&&n.isString(t)&&t.length)try{return JSON.parse(t)}catch(a){if(s){if("SyntaxError"===a.name)throw i(a,this,"E_JSON_PARSE");throw a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(t){l.headers[t]={}})),n.forEach(["post","put","patch"],(function(t){l.headers[t]=n.merge(a)})),t.exports=l},8507:function(t){"use strict";t.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},4679:function(t){t.exports={version:"0.26.1"}},5955:function(t){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},4360:function(t,e,r){"use strict";var n=r(6642);function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,r){if(!e)return t;var i;if(r)i=r(e);else if(n.isURLSearchParams(e))i=e.toString();else{var s=[];n.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,(function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),s.push(o(e)+"="+o(t))})))})),i=s.join("&")}if(i){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},2381:function(t){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},3833:function(t,e,r){"use strict";var n=r(6642);t.exports=n.isStandardBrowserEnv()?function(){return{write:function(t,e,r,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},4777:function(t){"use strict";t.exports=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}},786:function(t,e,r){"use strict";var n=r(6642);t.exports=function(t){return n.isObject(t)&&!0===t.isAxiosError}},9896:function(t,e,r){"use strict";var n=r(6642);t.exports=n.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(t){var n=t;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=o(window.location.href),function(e){var r=n.isString(e)?o(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return function(){return!0}}()},1446:function(t,e,r){"use strict";var n=r(6642);t.exports=function(t,e){n.forEach(t,(function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])}))}},5976:function(t,e,r){"use strict";var n=r(6642),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,i,s={};return t?(n.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=n.trim(t.substr(0,i)).toLowerCase(),r=n.trim(t.substr(i+1)),e){if(s[e]&&o.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([r]):s[e]?s[e]+", "+r:r}})),s):s}},5431:function(t){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},6298:function(t,e,r){"use strict";r(1703);var n=r(4679).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){o[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}}));var i={};function s(t,e,r){if("object"!==typeof t)throw new TypeError("options must be an object");var n=Object.keys(t),o=n.length;while(o-- >0){var i=n[o],s=e[i];if(s){var a=t[i],u=void 0===a||s(a,i,t);if(!0!==u)throw new TypeError("option "+i+" must be "+u)}else if(!0!==r)throw Error("Unknown option "+i)}}o.transitional=function(t,e,r){function o(t,e){return"[Axios v"+n+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}return function(r,n,s){if(!1===t)throw new Error(o(n," has been removed"+(e?" in "+e:"")));return e&&!i[n]&&(i[n]=!0,console.warn(o(n," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,n,s)}},t.exports={assertOptions:s,validators:o}},6642:function(t,e,r){"use strict";var n=r(5955),o=Object.prototype.toString;function i(t){return Array.isArray(t)}function s(t){return"undefined"===typeof t}function a(t){return null!==t&&!s(t)&&null!==t.constructor&&!s(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function u(t){return"[object ArrayBuffer]"===o.call(t)}function c(t){return"[object FormData]"===o.call(t)}function f(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&u(t.buffer),e}function l(t){return"string"===typeof t}function h(t){return"number"===typeof t}function p(t){return null!==t&&"object"===typeof t}function d(t){if("[object Object]"!==o.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function m(t){return"[object Date]"===o.call(t)}function v(t){return"[object File]"===o.call(t)}function y(t){return"[object Blob]"===o.call(t)}function g(t){return"[object Function]"===o.call(t)}function E(t){return p(t)&&g(t.pipe)}function w(t){return"[object URLSearchParams]"===o.call(t)}function A(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function R(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function b(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),i(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function T(){var t={};function e(e,r){d(t[r])&&d(e)?t[r]=T(t[r],e):d(e)?t[r]=T({},e):i(e)?t[r]=e.slice():t[r]=e}for(var r=0,n=arguments.length;r<n;r++)b(arguments[r],e);return t}function U(t,e,r){return b(e,(function(e,o){t[o]=r&&"function"===typeof e?n(e,r):e})),t}function x(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}t.exports={isArray:i,isArrayBuffer:u,isBuffer:a,isFormData:c,isArrayBufferView:f,isString:l,isNumber:h,isObject:p,isPlainObject:d,isUndefined:s,isDate:m,isFile:v,isBlob:y,isFunction:g,isStream:E,isURLSearchParams:w,isStandardBrowserEnv:R,forEach:b,merge:T,extend:U,trim:A,stripBOM:x}},3564:function(t,e,r){"use strict";r.d(e,{Z:function(){return b}});var n=r(3396),o=r.p+"img/Logo-mobile.56aebecf.svg",i=r.p+"img/menu-mobile.eaeb7eaa.svg";const s=t=>((0,n.dD)("data-v-21a9eeca"),t=t(),(0,n.Cn)(),t),a={key:0,id:"APPHeader",class:"w-full flex justify-between items-center lg:px-10 px-5 border-gray-200 border-b border-solid"},u={class:"h-full md:flex hidden items-center font-bold",style:{color:"#646464"}},c=(0,n.Uk)("探索景點 "),f=(0,n.Uk)("節慶活動 "),l=(0,n.Uk)("品嘗美食 "),h={key:1,id:"APPHeaderPhone",class:"w-full flex justify-between items-center lg:px-10 px-5 border-gray-200 border-b border-solid"},p=s((()=>(0,n._)("img",{src:o,alt:""},null,-1))),d=(0,n.Uk)("探索景點"),m=(0,n.Uk)("節慶活動"),v=(0,n.Uk)("品嘗美食"),y=s((()=>(0,n._)("img",{src:i,alt:"",class:"cursor-pointer"},null,-1)));function g(t,e,r,o,i,s){const g=(0,n.up)("router-link"),E=(0,n.up)("a-menu-item"),w=(0,n.up)("a-menu"),A=(0,n.up)("a-dropdown");return t.innerWidth>576||t.offsetWidth>576?((0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(g,{to:"/home",class:"headerlogo h-full"}),(0,n._)("div",u,[(0,n.Wm)(g,{to:"/spot",class:"ml-3 hover:border-yellow-300 hover:border-b-2 hover:border-solid"},{default:(0,n.w5)((()=>[c])),_:1}),(0,n.Wm)(g,{to:"/event",class:"ml-3 hover:border-yellow-300 hover:border-b-2 hover:border-solid"},{default:(0,n.w5)((()=>[f])),_:1}),(0,n.Wm)(g,{to:"/food",class:"ml-3 hover:border-yellow-300 hover:border-b-2 hover:border-solid"},{default:(0,n.w5)((()=>[l])),_:1})])])):((0,n.wg)(),(0,n.iD)("div",h,[(0,n.Wm)(g,{to:"/home",class:"headerlogo h-full"},{default:(0,n.w5)((()=>[p])),_:1}),(0,n.Wm)(A,null,{overlay:(0,n.w5)((()=>[(0,n.Wm)(w,{onClick:t.handleMenuClick},{default:(0,n.w5)((()=>[(0,n.Wm)(E,{key:"1"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{to:"/spot",class:"hover:border-solid"},{default:(0,n.w5)((()=>[d])),_:1})])),_:1}),(0,n.Wm)(E,{key:"2"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{to:"/event",class:"hover:border-solid"},{default:(0,n.w5)((()=>[m])),_:1})])),_:1}),(0,n.Wm)(E,{key:"3"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{to:"/food",class:"hover:border-solid"},{default:(0,n.w5)((()=>[v])),_:1})])),_:1})])),_:1},8,["onClick"])])),default:(0,n.w5)((()=>[y])),_:1})]))}var E=r(4870),w=(0,n.aZ)({name:"APPHeader",components:{},setup(){const t=(0,E.iH)(0),e=(0,E.iH)(0),r=()=>{t.value=window.innerWidth},o=()=>{window.addEventListener("resize",r)},i=t=>{console.log("click",t)};return(0,n.bv)((()=>{e.value=document.body.offsetWidth,o()})),{innerWidth:t,handleMenuClick:i,offsetWidth:e}}}),A=r(89);const R=(0,A.Z)(w,[["render",g],["__scopeId","data-v-21a9eeca"]]);var b=R}}]);
//# sourceMappingURL=989.1b023d66.js.map