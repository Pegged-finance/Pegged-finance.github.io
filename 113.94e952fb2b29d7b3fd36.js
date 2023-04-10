"use strict";(self.webpackChunkpegged=self.webpackChunkpegged||[]).push([[113],{8104:function(t,e,r){r.d(e,{Q:function(){return c}});var n,o=r(7187);!function(t){t.Update="Web3ReactUpdate",t.Error="Web3ReactError",t.Deactivate="Web3ReactDeactivate"}(n||(n={}));var c=function(t){var e,r;function o(e){var r,n=(void 0===e?{}:e).supportedChainIds;return(r=t.call(this)||this).supportedChainIds=n,r}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var c=o.prototype;return c.emitUpdate=function(t){this.emit(n.Update,t)},c.emitError=function(t){this.emit(n.Error,t)},c.emitDeactivate=function(){this.emit(n.Deactivate)},o}(o.EventEmitter)},317:function(t,e,r){r.d(e,{Uu:function(){return R},Ht:function(){return w},Ge:function(){return I}});var n,o=r(7294),c=r(8776);!function(t){t.Update="Web3ReactUpdate",t.Error="Web3ReactError",t.Deactivate="Web3ReactDeactivate"}(n||(n={}));var i=r(3286),a=r(8197);function u(){return u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},u.apply(this,arguments)}function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,l(t,e)}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}function d(t,e,r){return d=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&l(o,r.prototype),o},d.apply(null,arguments)}function p(t){var e="function"==typeof Map?new Map:void 0;return p=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return d(t,arguments,f(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)},p(t)}function h(t,e){try{var r=t()}catch(t){return e(t)}return r&&r.then?r.then(void 0,e):r}function v(t){if("string"==typeof t){t=t.replace(/^Ox/,"0x");var e=Number.parseInt(t,"0x"===t.trim().substring(0,2)?16:10);return Number.isNaN(e)&&(0,c.Z)(!1),e}return Number.isInteger(t)||(0,c.Z)(!1),t}function y(t){"string"==typeof t&&t.match(/^(0x)?[0-9a-fA-F]{40}$/)||(0,c.Z)(!1);for(var e="0x"===t.substring(0,2)?t:"0x"+t,r=e.toLowerCase().substring(2).split(""),n=new Uint8Array(40),o=0;o<40;o++)n[o]=r[o].charCodeAt(0);for(var u=(0,i.arrayify)((0,a.keccak256)(n)),s=0;s<40;s+=2)u[s>>1]>>4>=8&&(r[s]=r[s].toUpperCase()),(15&u[s>>1])>=8&&(r[s+1]=r[s+1].toUpperCase());var f="0x"+r.join("");return e.match(/([A-F].*[a-f])|([a-f].*[A-F])/)&&e!==f&&(0,c.Z)(!1),f}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var m,C=function(t,e){try{var r=function(r){return Promise.resolve(Promise.all([void 0===e.chainId?t.getChainId():e.chainId,void 0===e.account?t.getAccount():e.account])).then((function(e){var n=e[0],o=e[1],c=v(n);if(t.supportedChainIds&&!t.supportedChainIds.includes(c))throw new R(c,t.supportedChainIds);var i=null===o?o:y(o);return{provider:r,chainId:c,account:i}}))},n=void 0===e.provider;return Promise.resolve(n?Promise.resolve(t.getProvider()).then(r):r(e.provider))}catch(t){return Promise.reject(t)}},b=function(t){function e(){var e;return(e=t.call(this)||this).name=e.constructor.name,e}return s(e,t),e}(p(Error)),R=function(t){function e(e,r){var n;return(n=t.call(this)||this).name=n.constructor.name,n.message="Unsupported chain id: "+e+". Supported chain ids are: "+r+".",n}return s(e,t),e}(p(Error));function O(t,e){var r=e.type,n=e.payload;switch(r){case m.ACTIVATE_CONNECTOR:return{connector:n.connector,provider:n.provider,chainId:n.chainId,account:n.account,onError:n.onError};case m.UPDATE:var o=n.provider,c=n.chainId,i=n.account;return u({},t,void 0===o?{}:{provider:o},void 0===c?{}:{chainId:c},void 0===i?{}:{account:i});case m.UPDATE_FROM_ERROR:var a=n.provider,s=n.chainId,f=n.account;return u({},t,void 0===a?{}:{provider:a},void 0===s?{}:{chainId:s},void 0===f?{}:{account:f},{error:void 0});case m.ERROR:var l=n.error;return{connector:t.connector,error:l,onError:t.onError};case m.ERROR_FROM_ACTIVATION:return{connector:n.connector,error:n.error};case m.DEACTIVATE_CONNECTOR:return{}}}!function(t){t[t.ACTIVATE_CONNECTOR=0]="ACTIVATE_CONNECTOR",t[t.UPDATE=1]="UPDATE",t[t.UPDATE_FROM_ERROR=2]="UPDATE_FROM_ERROR",t[t.ERROR=3]="ERROR",t[t.ERROR_FROM_ACTIVATION=4]="ERROR_FROM_ACTIVATION",t[t.DEACTIVATE_CONNECTOR=5]="DEACTIVATE_CONNECTOR"}(m||(m={}));var E="primary",P={};function g(t){P[t]&&(0,c.Z)(!1),P[t]=(0,o.createContext)({activate:function(){try{return(0,c.Z)(!1),Promise.resolve()}catch(t){return Promise.reject(t)}},setError:function(){(0,c.Z)(!1)},deactivate:function(){(0,c.Z)(!1)},active:!1}),P[t].displayName="Web3ReactContext - "+t;var e=P[t].Provider;return function(t){var r=t.getLibrary,c=t.children,i=function(){var t=(0,o.useReducer)(O,{}),e=t[0],r=t[1],c=e.connector,i=e.provider,a=e.chainId,s=e.account,f=e.onError,l=e.error,d=(0,o.useRef)(-1);d.current+=1;var p=(0,o.useCallback)((function(t,e,n){void 0===n&&(n=!1);try{var o=d.current,c=!1;return Promise.resolve(h((function(){return Promise.resolve(t.activate().then((function(t){return c=!0,t}))).then((function(n){return Promise.resolve(C(t,n)).then((function(n){if(d.current>o)throw new b;r({type:m.ACTIVATE_CONNECTOR,payload:u({connector:t},n,{onError:e})})}))}))}),(function(o){if(o instanceof b)c&&t.deactivate();else{if(n)throw c&&t.deactivate(),o;e?(c&&t.deactivate(),e(o)):r({type:m.ERROR_FROM_ACTIVATION,payload:{connector:t,error:o}})}})))}catch(t){return Promise.reject(t)}}),[]),E=(0,o.useCallback)((function(t){r({type:m.ERROR,payload:{error:t}})}),[]),P=(0,o.useCallback)((function(){r({type:m.DEACTIVATE_CONNECTOR})}),[]),g=(0,o.useCallback)((function(t){try{if(!c)throw Error("This should never happen, it's just so Typescript stops complaining");var e=d.current;return Promise.resolve(function(){if(l)return h((function(){return Promise.resolve(C(c,t)).then((function(t){if(d.current>e)throw new b;r({type:m.UPDATE_FROM_ERROR,payload:t})}))}),(function(t){t instanceof b||(f?f(t):r({type:m.ERROR,payload:{error:t}}))}));var n=void 0===t.chainId?void 0:v(t.chainId);if(void 0!==n&&c.supportedChainIds&&!c.supportedChainIds.includes(n)){var o=new R(n,c.supportedChainIds);f?f(o):r({type:m.ERROR,payload:{error:o}})}else{var i="string"==typeof t.account?y(t.account):t.account;r({type:m.UPDATE,payload:{provider:t.provider,chainId:n,account:i}})}}())}catch(t){return Promise.reject(t)}}),[c,l,f]),w=(0,o.useCallback)((function(t){f?f(t):r({type:m.ERROR,payload:{error:t}})}),[f]),I=(0,o.useCallback)((function(){r({type:m.DEACTIVATE_CONNECTOR})}),[]);return(0,o.useEffect)((function(){return function(){c&&c.deactivate()}}),[c]),(0,o.useEffect)((function(){return c&&c.on(n.Update,g).on(n.Error,w).on(n.Deactivate,I),function(){c&&c.off(n.Update,g).off(n.Error,w).off(n.Deactivate,I)}}),[c,g,w,I]),{connector:c,provider:i,chainId:a,account:s,activate:p,setError:E,deactivate:P,error:l}}(),a=i.connector,s=i.provider,f=i.chainId,l=i.account,d=i.activate,p=i.setError,E=i.deactivate,P=i.error,g=void 0!==a&&void 0!==f&&void 0!==l&&!P,w=(0,o.useMemo)((function(){return g&&void 0!==f&&Number.isInteger(f)&&a?r(s,a):void 0}),[g,r,s,a,f]),I={connector:a,library:w,chainId:f,account:l,activate:d,setError:p,deactivate:E,active:g,error:P};return o.createElement(e,{value:I},c)}}var w=g(E);function I(t){return(0,o.useContext)(function(t){return void 0===t&&(t=E),Object.keys(P).includes(t)||(0,c.Z)(!1),P[t]}(t))}},950:function(t,e,r){r.d(e,{A5:function(){return s},ab:function(){return f}});var n=r(8104);function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function i(t,e){return i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}function a(t,e,r){return a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&i(o,r.prototype),o},a.apply(null,arguments)}function u(t){var e="function"==typeof Map?new Map:void 0;return u=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return a(t,arguments,c(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)},u(t)}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var s=function(t){function e(){var e;return(e=t.call(this)||this).name=e.constructor.name,e.message="No Ethereum provider was found on window.ethereum.",e}return o(e,t),e}(u(Error)),f=function(t){function e(){var e;return(e=t.call(this)||this).name=e.constructor.name,e.message="The user rejected the request.",e}return o(e,t),e}(u(Error));n.Q},3929:function(t,e,r){r.d(e,{ab:function(){return f},zw:function(){return l}});var n=r(8104);function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function i(t,e){return i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}function a(t,e,r){return a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&i(o,r.prototype),o},a.apply(null,arguments)}function u(t){var e="function"==typeof Map?new Map:void 0;return u=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return a(t,arguments,c(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)},u(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var f=function(t){function e(){var e;return(e=t.call(this)||this).name=e.constructor.name,e.message="The user rejected the request.",e}return o(e,t),e}(u(Error)),l=function(t){function e(e){var r,n,o,c;return(r=t.call(this,{supportedChainIds:(n=e,o=n.supportedChainIds,c=n.rpc,o||(c?Object.keys(c).map((function(t){return Number(t)})):void 0))})||this).config=e,r.handleChainChanged=r.handleChainChanged.bind(s(r)),r.handleAccountsChanged=r.handleAccountsChanged.bind(s(r)),r.handleDisconnect=r.handleDisconnect.bind(s(r)),r}o(e,t);var n=e.prototype;return n.handleChainChanged=function(t){this.emitUpdate({chainId:t})},n.handleAccountsChanged=function(t){this.emitUpdate({account:t[0]})},n.handleDisconnect=function(){this.walletConnectProvider&&(this.walletConnectProvider.removeListener("chainChanged",this.handleChainChanged),this.walletConnectProvider.removeListener("accountsChanged",this.handleAccountsChanged),this.walletConnectProvider=void 0),this.emitDeactivate()},n.activate=function(){try{var t=this,e=function(){function e(){var e;return Promise.resolve(new Promise((function(r,n){var o=function(){t.walletConnectProvider=void 0,n(new f)};t.walletConnectProvider.connector.on("disconnect",(function(){e||o()})),t.walletConnectProvider.enable().then((function(t){return r(t[0])})).catch((function(t){"User closed modal"!==t.message?n(t):o()}))})).catch((function(t){throw t}))).then((function(r){return e=r,t.walletConnectProvider.on("disconnect",t.handleDisconnect),t.walletConnectProvider.on("chainChanged",t.handleChainChanged),t.walletConnectProvider.on("accountsChanged",t.handleAccountsChanged),{provider:t.walletConnectProvider,account:e}}))}var r=function(){if(!t.walletConnectProvider.connector.connected)return Promise.resolve(t.walletConnectProvider.connector.createSession(t.config.chainId?{chainId:t.config.chainId}:void 0)).then((function(){t.emit("URI_AVAILABLE",t.walletConnectProvider.connector.uri)}))}();return r&&r.then?r.then(e):e()},n=function(){if(!t.walletConnectProvider)return Promise.resolve(Promise.all([r.e(88),r.e(389),r.e(746),r.e(563)]).then(r.bind(r,1746)).then((function(t){var e;return null!=(e=null==t?void 0:t.default)?e:t}))).then((function(e){t.walletConnectProvider=new e(t.config)}))}();return Promise.resolve(n&&n.then?n.then(e):e())}catch(t){return Promise.reject(t)}},n.getProvider=function(){try{return Promise.resolve(this.walletConnectProvider)}catch(t){return Promise.reject(t)}},n.getChainId=function(){try{return Promise.resolve(this.walletConnectProvider.chainId)}catch(t){return Promise.reject(t)}},n.getAccount=function(){try{return Promise.resolve(this.walletConnectProvider.accounts).then((function(t){return t[0]}))}catch(t){return Promise.reject(t)}},n.deactivate=function(){this.walletConnectProvider&&(this.walletConnectProvider.removeListener("disconnect",this.handleDisconnect),this.walletConnectProvider.removeListener("chainChanged",this.handleChainChanged),this.walletConnectProvider.removeListener("accountsChanged",this.handleAccountsChanged),this.walletConnectProvider.disconnect())},n.close=function(){try{return this.emitDeactivate(),Promise.resolve()}catch(t){return Promise.reject(t)}},e}(n.Q)}}]);