(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{5058:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return r(6011)}])},8433:function(e,n,r){"use strict";r.d(n,{I8:function(){return b},pg:function(){return h}});var t=r(8100),u=r(9669),o=r.n(u),c=r(2286),i=function(e){return Promise.reject(e)},a=r(3454);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var l=o().create({baseURL:a.env.NEXT_PUBLIC_AXIOS_BASEURL,withCredentials:!1,headers:{"Access-Control-Allow-Origin":"*"}});l.interceptors.request.use((function(e){var n=(0,c.parseCookies)().auth_token;return n&&(e.headers.Authorization="bearer ".concat(n)),e}),i),l.interceptors.response.use((function(e){if(200===(null===e||void 0===e?void 0:e.status)||201===(null===e||void 0===e?void 0:e.status))return e;throw new Error(e.message)}),i);var f=function(e){var n=o().CancelToken.source(),r=l(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){s(e,n,r[n])}))}return e}({},e,{cancelToken:n.token})).then((function(e){return e.data}));return r.cancel=function(){n.cancel("Query was cancelled by React Query")},r};function d(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function v(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){d(e,n,r[n])}))}return e}var b=function(e){return f({url:"/auth",method:"post",data:e})},h=function(e,n){var r,u=(n||{}).swr,o=!!e,c=null!==(r=null===u||void 0===u?void 0:u.swrKey)&&void 0!==r?r:function(){return o?function(e){return["/user/detail/".concat(e)]}(e):null};return v({swrKey:c},(0,t.ZP)(c,(function(){return function(e){return f({url:"/user/detail/".concat(e),method:"get"})}(e)}),u))}},1719:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var t=r(5893),u=r(912),o=r(1768);function c(e){var n=e.children;return(0,t.jsx)(o.R,{children:(0,t.jsx)(u.H,{children:n})})}},912:function(e,n,r){"use strict";r.d(n,{H:function(){return s},a:function(){return l}});var t=r(5893),u=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var c={authenticated:!1,user:void 0};function i(e,n){return function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},e,n)}var a=(0,u.createContext)(void 0);function s(e){var n=e.children,r=(0,u.useReducer)(i,c),o=r[0],s=r[1];return(0,t.jsx)(a.Provider,{value:{state:o,dispatch:s},children:n})}function l(){var e=(0,u.useContext)(a);if(!e)throw new Error("useAuth must be used inside a `AuthProvider`");return e}},1768:function(e,n,r){"use strict";r.d(n,{R:function(){return s},O:function(){return l}});var t=r(5893),u=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var c={alertMsg:"",loading:!1,showAlert:!1,alertType:void 0};function i(e,n){return function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},e,n)}var a=(0,u.createContext)(void 0);function s(e){var n=e.children,r=(0,u.useReducer)(i,c),o=r[0],s=r[1];return(0,t.jsx)(a.Provider,{value:{state:o,dispatch:s},children:n})}function l(){var e=(0,u.useContext)(a);if(!e)throw new Error("useGlobal must be used inside a `GlobalProvider`");return e}},6011:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var t=r(5893),u=r(1719);function o(e){var n=e.children;return(0,t.jsx)(u.Z,{children:(0,t.jsxs)("div",{className:"w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0",children:["admin layout",n]})})}var c=r(5932),i=r(912),a=r(1163),s=function(){var e=(0,i.a)();return(0,t.jsx)("div",{children:(0,t.jsxs)("h1",{className:"text-3xl font-bold underline",children:["Dashboard",(0,t.jsx)("button",{type:"button",className:"rounded-md",onClick:function(){(0,c.k)(),e.dispatch({authenticated:!1,user:null}),a.default.replace("/")},children:"Logout Press Here"})]})})};s.requireAuth=!0,s.getLayout=function(e){return(0,t.jsx)(o,{children:e})};var l=s},5932:function(e,n,r){"use strict";r.d(n,{x:function(){return f},k:function(){return d}});var t=r(4051),u=r.n(t),o=r(8433),c=r(2286),i="auth_token",a="auth_user",s={maxAge:864e5,path:"/"};function l(e,n,r,t,u,o,c){try{var i=e[o](c),a=i.value}catch(s){return void r(s)}i.done?n(a):Promise.resolve(a).then(t,u)}var f=function(){var e,n=(e=u().mark((function e(n){var r,t,l;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.I8)(n);case 2:return r=e.sent,t=r.token,l=r.user,t&&l&&((0,c.setCookie)(null,i,t,s),(0,c.setCookie)(null,a,l.id,s)),e.abrupt("return",{token:t,user:l});case 7:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,u){var o=e.apply(n,r);function c(e){l(o,t,u,c,i,"next",e)}function i(e){l(o,t,u,c,i,"throw",e)}c(void 0)}))});return function(e){return n.apply(this,arguments)}}(),d=function(){(0,c.destroyCookie)(null,i),(0,c.destroyCookie)(null,a)}}},function(e){e.O(0,[145,774,888,179],(function(){return n=5058,e(e.s=n);var n}));var n=e.O();_N_E=n}]);