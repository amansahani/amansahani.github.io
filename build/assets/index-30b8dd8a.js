import{h as R,r as T}from"./index-66dd5fa2.js";var _={};(function(f){Object.defineProperty(f,"__esModule",{value:!0}),f.default=void 0;var y=T;function b(e,r){return j(e)||m(e,r)||g(e,r)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(e,r){if(e){if(typeof e=="string")return v(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,r)}}function v(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,u=new Array(r);t<r;t++)u[t]=e[t];return u}function m(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var u=[],a=!0,l=!1,i,d;try{for(t=t.call(e);!(a=(i=t.next()).done)&&(u.push(i.value),!(r&&u.length===r));a=!0);}catch(o){l=!0,d=o}finally{try{!a&&t.return!=null&&t.return()}finally{if(l)throw d}}return u}}function j(e){if(Array.isArray(e))return e}function A(e){return typeof e=="function"?e():e}var n={pending:"pending",rejected:"rejected",resolved:"resolved"},p={error:void 0,result:void 0,state:n.pending};function S(e,r){switch(r.type){case n.pending:return p;case n.resolved:return{error:void 0,result:r.payload,state:n.resolved};case n.rejected:return{error:r.payload,result:void 0,state:n.rejected};default:return e}}function w(e,r){var t=(0,y.useReducer)(S,p),u=b(t,2),a=u[0],l=a.error,i=a.result,d=a.state,o=u[1];return(0,y.useEffect)(function(){if(e=A(e),!!e){var s=!1;return o({type:n.pending}),e.then(function(c){return!s&&o({payload:c,type:n.resolved})},function(c){return!s&&o({payload:c,type:n.rejected})}),function(){s=!0}}},r),[i,l,d]}var I=w;f.default=I})(_);const P=R(_);export{P as u};
