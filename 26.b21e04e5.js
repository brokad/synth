(window.webpackJsonp=window.webpackJsonp||[]).push([[26,29],{119:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(113);t.default=function(){return a.a.createElement(o.a,{title:"Page Not Found"},a.a.createElement("main",{className:"container margin-vert--xl"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col col--6 col--offset-3"},a.a.createElement("h1",{className:"hero__title"},"Page Not Found"),a.a.createElement("p",null,"We could not find what you were looking for."),a.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},155:function(e,t,n){"use strict";const r=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch(c){}return n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus(),i};e.exports=r,e.exports.default=r},156:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},157:function(e,t,n){"use strict";function r(e,t,n,r,a,o,i){try{var c=e[o](i),l=c.value}catch(s){return void n(s)}c.done?t(l):Promise.resolve(l).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function c(e){r(i,a,o,c,l,"next",e)}function l(e){r(i,a,o,c,l,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return a}))},158:function(e,t,n){e.exports=n(159)},159:function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var a=t&&t.prototype instanceof y?t:y,o=Object.create(a.prototype),i=new _(r||[]);return o._invoke=function(e,t,n){var r=p;return function(a,o){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var l=u(e,t,n);if("normal"===l.type){if(r=n.done?d:f,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=d,n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var p="suspendedStart",f="suspendedYield",h="executing",d="completed",m={};function y(){}function v(){}function b(){}var g={};g[o]=function(){return this};var O=Object.getPrototypeOf,E=O&&O(O(C([])));E&&E!==n&&r.call(E,o)&&(g=E);var k=b.prototype=y.prototype=Object.create(g);function j(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function n(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==typeof p&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(p).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}var a;this._invoke=function(e,r){function o(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(o,o):o()}}function x(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,x(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=u(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,m;var o=a.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function C(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:L}}function L(){return{value:t,done:!0}}return v.prototype=k.constructor=b,b.constructor=v,v.displayName=l(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},j(w.prototype),w.prototype[i]=function(){return this},e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new w(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},j(k),l(k,c,"Generator"),k[o]=function(){return this},k.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=C,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return c.type="throw",c.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;P(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},174:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return c}));var a=n(25);function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function i(e,t,n){return(i=o()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&Object(a.a)(o,n.prototype),o}).apply(null,arguments)}function c(e){var t="function"==typeof Map?new Map:void 0;return(c=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return i(e,arguments,r(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),Object(a.a)(o,e)})(e)}},176:function(e,t,n){"use strict";var r={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},a=n(115),o=n(99);t.a=function(){var e=Object(o.useThemeConfig)().prism,t=Object(a.a)().isDarkTheme,n=e.theme||r,i=e.darkTheme||n;return t?i:n}},177:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(24),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(0),i={Prism:r.a,theme:a};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},f=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=l({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=l({},n,{backgroundColor:null}),a};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var d=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?f(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=l({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==a&&(o.style=void 0!==o.style?l({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),c(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var i=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(c))}})),c(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,i=l({},h(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?l({},i.style,a):a),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),c(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,i=0,c=[],l=[c];i>-1;){for(;(o=r[i]++)<a[i];){var f=void 0,h=t[i],d=n[i][o];if("string"==typeof d?(h=i>0?h:["plain"],f=d):(h=p(h,d.type),d.alias&&(h=p(h,d.alias)),f=d.content),"string"==typeof f){var m=f.split(s),y=m.length;c.push({types:h,content:m[0]});for(var v=1;v<y;v++)u(c),l.push(c=[]),c.push({types:h,content:m[v]})}else i++,t.push(h),n.push(f),r.push(0),a.push(f.length)}i--,t.pop(),n.pop(),r.pop(),a.pop()}return u(c),l}(void 0!==i?this.tokenize(t,r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=d},95:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(98),i=n(22),c=n(27),l=n(113),s=n(3),u=n(7),p=n(100),f=n(99),h=n(108),d=n(127),m=n(128),y=n(126),v=n(103),b=n(110),g=n(137),O=function(e){return a.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),a.a.createElement("g",{fill:"#7a7a7a"},a.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},E=n(129),k=n(68),j=n.n(k);var w=function e(t,n){return"link"===t.type?Object(f.isSamePath)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))};function x(e){var t,n,o,i=e.item,c=e.onItemClick,l=e.collapsible,f=e.activePath,h=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),d=i.items,m=i.label,y=w(i,f),v=(n=y,o=Object(r.useRef)(n),Object(r.useEffect)((function(){o.current=n}),[n]),o.current),b=Object(r.useState)((function(){return!!l&&(!y&&i.collapsed)})),g=b[0],O=b[1],E=Object(r.useRef)(null),k=Object(r.useState)(void 0),x=k[0],N=k[1],_=function(e){var t;void 0===e&&(e=!0),N(e?(null===(t=E.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(r.useEffect)((function(){y&&!v&&g&&O(!1)}),[y,v,g]);var C=Object(r.useCallback)((function(e){e.preventDefault(),x||_(),setTimeout((function(){return O((function(e){return!e}))}),100)}),[x]);return 0===d.length?null:a.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":g}),key:m},a.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":l,"menu__link--active":l&&y},t[j.a.menuLinkText]=!l,t)),onClick:l?C:void 0,href:l?"#!":void 0},h),m),a.a.createElement("ul",{className:"menu__list",ref:E,style:{height:x},onTransitionEnd:function(){g||_(!1)}},d.map((function(e){return a.a.createElement(P,{tabIndex:g?"-1":"0",key:e.label,item:e,onItemClick:c,collapsible:l,activePath:f})}))))}function N(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),i=t.href,c=t.label,l=w(t,r);return a.a.createElement("li",{className:"menu__list-item",key:c},a.a.createElement(v.a,Object(s.a)({className:Object(p.a)("menu__link",{"menu__link--active":l}),to:i},Object(b.a)(i)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),c))}function P(e){switch(e.item.type){case"category":return a.a.createElement(x,e);case"link":default:return a.a.createElement(N,e)}}var _=function(e){var t,n,o=e.path,i=e.sidebar,c=e.sidebarCollapsible,l=void 0===c||c,s=e.onCollapse,u=e.isHidden,v=Object(r.useState)(!1),b=v[0],k=v[1],w=Object(f.useThemeConfig)(),x=w.navbar.hideOnScroll,N=w.hideableSidebar,_=Object(h.a)().isAnnouncementBarClosed,C=Object(y.a)().scrollY;Object(d.a)(b);var L=Object(m.a)();return Object(r.useEffect)((function(){L===m.b.desktop&&k(!1)}),[L]),a.a.createElement("div",{className:Object(p.a)(j.a.sidebar,(t={},t[j.a.sidebarWithHideableNavbar]=x,t[j.a.sidebarHidden]=u,t))},x&&a.a.createElement(g.a,{tabIndex:-1,className:j.a.sidebarLogo}),a.a.createElement("div",{className:Object(p.a)("menu","menu--responsive","thin-scrollbar",j.a.menu,(n={"menu--show":b},n[j.a.menuWithAnnouncementBar]=!_&&0===C,n))},a.a.createElement("button",{"aria-label":b?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){k(!b)}},b?a.a.createElement("span",{className:Object(p.a)(j.a.sidebarMenuIcon,j.a.sidebarMenuCloseIcon)},"\xd7"):a.a.createElement(E.a,{className:j.a.sidebarMenuIcon,height:24,width:24})),a.a.createElement("ul",{className:"menu__list"},i.map((function(e){return a.a.createElement(P,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),k(!1)},collapsible:l,activePath:o})})))),N&&a.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(p.a)("button button--secondary button--outline",j.a.collapseSidebarButton),onClick:s},a.a.createElement(O,{className:j.a.collapseSidebarButtonIcon})))},C=n(175),L=(n(70),n(71)),S=n.n(L),T=function(e){return function(t){var n,r=t.id,o=Object(u.a)(t,["id"]),i=Object(f.useThemeConfig)().navbar.hideOnScroll;return r?a.a.createElement(e,o,a.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(p.a)("anchor",(n={},n[S.a.enhancedAnchor]=!i,n)),id:r}),o.children,a.a.createElement("a",{className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#")):a.a.createElement(e,o)}},I=n(72),D=n.n(I),R={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?a.a.createElement(C.a,e):a.a.createElement("code",e):t},a:function(e){return a.a.createElement(v.a,e)},pre:function(e){return a.a.createElement("div",Object(s.a)({className:D.a.mdxCodeBlock},e))},h1:T("h1"),h2:T("h2"),h3:T("h3"),h4:T("h4"),h5:T("h5"),h6:T("h6")},M=n(119),F=n(102),A=n(73),z=n.n(A);function G(e){var t,n,c,s,u=e.currentDocRoute,h=e.versionMetadata,d=e.children,m=Object(i.default)(),y=m.siteConfig,v=m.isClient,b=h.pluginId,g=h.permalinkToSidebar,E=h.docsSidebars,k=h.version,j=g[u.path],w=E[j],x=Object(r.useState)(!1),N=x[0],P=x[1],C=Object(r.useState)(!1),L=C[0],S=C[1],T=Object(r.useCallback)((function(){L&&S(!1),P(!N)}),[L]);return a.a.createElement(l.a,{key:v,searchMetadatas:{version:k,tag:Object(f.docVersionSearchTag)(b,k)}},a.a.createElement("div",{className:z.a.docPage},w&&a.a.createElement("div",{className:Object(p.a)(z.a.docSidebarContainer,(t={},t[z.a.docSidebarContainerHidden]=N,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(z.a.docSidebarContainer)&&N&&S(!0)},role:"complementary"},a.a.createElement(_,{key:j,sidebar:w,path:u.path,sidebarCollapsible:null===(n=null===(c=y.themeConfig)||void 0===c?void 0:c.sidebarCollapsible)||void 0===n||n,onCollapse:T,isHidden:L}),L&&a.a.createElement("div",{className:z.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:T,onClick:T},a.a.createElement(O,null))),a.a.createElement("main",{className:z.a.docMainContainer},a.a.createElement("div",{className:Object(p.a)("container padding-vert--lg",z.a.docItemWrapper,(s={},s[z.a.docItemWrapperEnhanced]=N,s))},a.a.createElement(o.a,{components:R},d)))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,o=t.find((function(e){return Object(F.matchPath)(r.pathname,e)}));return o?a.a.createElement(G,{currentDocRoute:o,versionMetadata:n},Object(c.a)(t)):a.a.createElement(M.default,e)}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,d=p["".concat(i,".").concat(h)]||p[h]||f[h]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);