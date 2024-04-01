"use strict";var s=function(t,i){return function(){return i||t((i={exports:{}}).exports,i),i.exports}};var c=s(function(j,o){
var v=require('@stdlib/array-base-arraylike2object/dist'),f=require('@stdlib/math-base-assert-is-nan/dist');function g(t,i){return typeof t[i]=="function"}function h(t,i,n,e){var r;if(e&&f(i)){for(r=n;r<t.length;r++)if(f(t[r]))return r;return-1}for(r=n;r<t.length;r++)if(i===t[r])return r;return-1}function l(t,i,n,e){var r,a,u;if(r=t.data,a=t.accessors[0],e&&f(i)){for(u=n;u<r.length;u++)if(f(a(r,u)))return u;return-1}for(u=n;u<r.length;u++)if(i===a(r,u))return u;return-1}function p(t,i,n,e){var r;return g(t,"indexOf")&&e===!1?t.indexOf(i,n):(n<0&&(n+=t.length,n<0&&(n=0)),r=v(t),r.accessorProtocol?l(r,i,n,e):h(t,i,n,e))}o.exports=p
});var O=c();module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
