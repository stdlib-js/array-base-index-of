// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-accessor-array@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.2-esm/index.mjs";function t(t,n,s){return"function"==typeof t["indexOf"]?t.indexOf(n,s):(s<0&&(s+=t.length)<0&&(s=0),r(t)?function(r,t,n){var s,i;for(s=e(r),i=n;i<r.length;i++)if(t===s(r,i))return i;return-1}(t,n,s):function(r,e,t){var n;for(n=t;n<r.length;n++)if(e===r[n])return n;return-1}(t,n,s))}export{t as default};
//# sourceMappingURL=index.mjs.map
