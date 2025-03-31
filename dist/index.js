"use strict";var o=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var c=o(function(O,u){
var s=require('@stdlib/array-base-arraylike2object/dist');function f(r,t){return typeof r[t]=="function"}function v(r,t,e){var i;for(i=e;i<r.length;i++)if(t===r[i])return i;return-1}function g(r,t,e){var i,a,n;for(i=r.data,a=r.accessors[0],n=e;n<i.length;n++)if(t===a(i,n))return n;return-1}function l(r,t,e){var i;return f(r,"indexOf")?r.indexOf(t,e):(e<0&&(e+=r.length,e<0&&(e=0)),i=s(r),i.accessorProtocol?g(i,t,e):v(r,t,e))}u.exports=l
});var h=c();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
