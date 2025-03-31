// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";function t(t,n,e){var o;return function(r,t){return"function"==typeof r[t]}(t,"indexOf")?t.indexOf(n,e):(e<0&&(e+=t.length)<0&&(e=0),(o=r(t)).accessorProtocol?function(r,t,n){var e,o,a;for(e=r.data,o=r.accessors[0],a=n;a<e.length;a++)if(t===o(e,a))return a;return-1}(o,n,e):function(r,t,n){var e;for(e=n;e<r.length;e++)if(t===r[e])return e;return-1}(t,n,e))}export{t as default};
//# sourceMappingURL=index.mjs.map
