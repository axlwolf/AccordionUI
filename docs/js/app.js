!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(e){return t[e]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./",e(e.s=0)}([function(t,e,r){"use strict";var n=r(1);r(2),r(3),r(4),window.onload=function(){console.log("window.onload"),n.Accordion.init()}},function(t,e){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.includes(n))continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function o(){function t(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}function e(t,e,r,n){var o=e&&e.prototype instanceof i?e:i,c=Object.create(o.prototype),a=new p(n||[]);return b(c,"_invoke",{value:l(t,r,a)}),c}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function i(){}function c(){}function a(){}function u(e){["next","throw","return"].forEach((function(r){t(e,r,(function(t){return this._invoke(r,t)}))}))}function s(t,e){function o(i,c,a,u){var s=n(t[i],t,c);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==r(f)&&w.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,u)}))}u(s.arg)}var i;b(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function l(t,e,r){var o=j;return function(i,c){if(o===_)throw Error("Generator is already running");if(o===P){if("throw"===i)throw c;return{value:v,done:!0}}for(r.method=i,r.arg=c;;){var a=r.delegate;if(a){var u=f(a,r);if(u){if(u===k)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===j)throw o=P,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=_;var s=n(t,e,r);if("normal"===s.type){if(o=r.done?P:S,s.arg===k)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=P,r.method="throw",r.arg=s.arg)}}}function f(t,e){var r=e.method,o=t.iterator[r];if(o===v)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=v,f(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),k;var i=n(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,k;var c=i.arg;return c?c.done?(e[t.resultName]=c.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=v),e.delegate=null,k):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,k)}function h(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function d(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(h,this),this.reset(!0)}function y(t){if(t||""===t){var e=t[x];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(w.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=v,e.done=!0,e};return o.next=o}}throw new TypeError(r(t)+" is not iterable")}o=function(){return g};var v,g={},m=Object.prototype,w=m.hasOwnProperty,b=Object.defineProperty||function(t,e,r){t[e]=r.value},L="function"==typeof Symbol?Symbol:{},x=L.iterator||"@@iterator",E=L.asyncIterator||"@@asyncIterator",O=L.toStringTag||"@@toStringTag";try{t({},"")}catch(E){t=function(t,e,r){return t[e]=r}}g.wrap=e;var j="suspendedStart",S="suspendedYield",_="executing",P="completed",k={},T={};t(T,x,(function(){return this}));var A=Object.getPrototypeOf,q=A&&A(A(y([])));q&&q!==m&&w.call(q,x)&&(T=q);var G=a.prototype=i.prototype=Object.create(T);return c.prototype=a,b(G,"constructor",{value:a,configurable:!0}),b(a,"constructor",{value:c,configurable:!0}),c.displayName=t(a,O,"GeneratorFunction"),g.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===c||"GeneratorFunction"===(e.displayName||e.name))},g.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,a):(e.__proto__=a,t(e,O,"GeneratorFunction")),e.prototype=Object.create(G),e},g.awrap=function(t){return{__await:t}},u(s.prototype),t(s.prototype,E,(function(){return this})),g.AsyncIterator=s,g.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var c=new s(e(t,r,n,o),i);return g.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},u(G),t(G,O,"Generator"),t(G,x,(function(){return this})),t(G,"toString",(function(){return"[object Generator]"})),g.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},g.values=y,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(d),!t)for(var e in this)"t"===e.charAt(0)&&w.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=v)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=v),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;0<=n;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var c=w.call(o,"catchLoc"),a=w.call(o,"finallyLoc");if(c&&a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!a)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r,n=this.tryEntries.length-1;0<=n;--n)if((r=this.tryEntries[n]).tryLoc<=this.prev&&w.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,k):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),k},finish:function(t){for(var e,r=this.tryEntries.length-1;0<=r;--r)if((e=this.tryEntries[r]).finallyLoc===t)return this.complete(e.completion,e.afterLoc),d(e),k},catch:function(t){for(var e,r=this.tryEntries.length-1;0<=r;--r)if((e=this.tryEntries[r]).tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;d(e)}return o}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:y(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=v),k}},g}function i(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(c){return void r(c)}a.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){function c(t){i(u,n,o,c,a,"next",t)}function a(t){i(u,n,o,c,a,"throw",t)}var u=t.apply(e,r);c(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.Accordion=void 0;var a=function(){console.log("Accordion");var t,e=document.querySelector(".accordion"),r=document.querySelector(".headers"),i=r.querySelector(".title"),a=r.querySelector(".subtitle"),u=function(){var t=c(o().mark((function t(r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n="",r.forEach((function(t,e){n+='\n                <section class="accordion-section" data-index="'.concat(e,'">\n                    <h2 class="accordion-header">\n                        ').concat(t.question,'\n                        <i class="fas fa-chevron-down"></i>\n                    </h2>\n                    <div class="accordion-content hidden">').concat(t.answer,"</div>\n                </section>\n            ")})),e.innerHTML=n,s();case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),s=function(){e.addEventListener("click",(function(t){var e=t.target.closest(".accordion-header");if(e){var r=e.closest(".accordion-section").getAttribute("data-index");f(r)}}))},l=function(){var e=c(o().mark((function e(){var r,c,s,l,f,h;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("./js/accordion.json");case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,console.log(c),s=c.items,l=n(c,["items"]),f=l.title,h=l.subtitle,t=s,console.log({items:s}),console.log({$headerTitle:i,$headerSubtitle:a}),i.innerHTML=f,a.innerHTML=h,e.next=17,u(t);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.error("Error fetching the FAQs:",e.t0);case 22:case"end":return e.stop()}}),e,this,[[0,19]])})));return function(){return e.apply(this,arguments)}}(),f=function(t){e.querySelectorAll(".accordion-section").forEach((function(e,r){var n=e.querySelector(".accordion-content"),o=e.querySelector(".fas");r===+t?(n.classList.toggle("hidden"),n.classList.contains("hidden")?(o.classList.remove("fa-chevron-up"),o.classList.add("fa-chevron-down")):(o.classList.remove("fa-chevron-down"),o.classList.add("fa-chevron-up"))):(n.classList.add("hidden"),o.classList.remove("fa-chevron-up"),o.classList.add("fa-chevron-down"))}))};return{init:function(){console.log("Init app"),l()}}}();e.Accordion=a},function(){},function(){},function(){}]);
//# sourceMappingURL=app.js.map