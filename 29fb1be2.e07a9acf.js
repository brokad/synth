(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(98)),i={},c={unversionedId:"content/array",id:"content/array",isDocsHomePage:!1,title:"array",description:"Synth's array type mirrors JSON's arrays. An array type requires the following fields:",source:"@site/docs/content/array.md",slug:"/content/array",permalink:"/synth/content/array",editUrl:"https://github.com/openquery-io/synth/edit/master/docs/docs/content/array.md",version:"current",sidebar:"docsSidebar",previous:{title:"object",permalink:"/synth/content/object"},next:{title:"one_of",permalink:"/synth/content/one-of"}},l=[],p={toc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Synth's ",Object(o.b)("inlineCode",{parentName:"p"},"array")," type mirrors JSON's arrays. An ",Object(o.b)("inlineCode",{parentName:"p"},"array")," type requires the following fields:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"content"'),": specifies the elements of the generated array. Allowed value is any of Synth's generator type."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"length"'),": specifies the length of the generated array. Allowed value is any of\nSynth's ",Object(o.b)("a",{parentName:"li",href:"/synth/content/number"},Object(o.b)("inlineCode",{parentName:"a"},"number"))," type with ",Object(o.b)("inlineCode",{parentName:"li"},'"subtype": "u64"'),".")),Object(o.b)("p",null,"The example below generates arrays of credit card numbers with ",Object(o.b)("inlineCode",{parentName:"p"},"3")," to ",Object(o.b)("inlineCode",{parentName:"p"},"10")," elements."),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n  "type": "array",\n  "length": {\n    "type": "number",\n    "subtype": "u64",\n    "range": {\n      "high": 10,\n      "low": 3,\n      "step": 1\n    }\n  },\n  "content": {\n    "type": "string",\n    "faker": {\n        "generator": "credit_card_number"\n    }\n  }\n}\n')))}s.isMDXComponent=!0},98:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},y=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),y=r,f=u["".concat(i,".").concat(y)]||u[y]||b[y]||o;return t?a.a.createElement(f,c(c({ref:n},p),{},{components:t})):a.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=y;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"}}]);