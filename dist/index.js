"use strict";var f=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var s=f(function(q,u){
var a=require('@stdlib/assert-is-accessor-array/dist'),c=require('@stdlib/array-base-resolve-getter/dist');function o(r,t){return typeof r[t]=="function"}function v(r,t,i){var e;for(e=i;e<r.length;e++)if(t===r[e])return e;return-1}function g(r,t,i){var e,n;for(e=c(r),n=i;n<r.length;n++)if(t===e(r,n))return n;return-1}function h(r,t,i){return o(r,"indexOf")?r.indexOf(t,i):(i<0&&(i+=r.length,i<0&&(i=0)),a(r)?g(r,t,i):v(r,t,i))}u.exports=h
});var l=s();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
