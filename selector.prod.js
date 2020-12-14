"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _wrapNativeSuper(t){var n="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function _construct(t,e,n){return(_construct=isNativeReflectConstruct()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&_setPrototypeOf(r,n.prototype),r}).apply(null,arguments)}function _isNativeFunction(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Selector=function(){function y(){var t;_classCallCheck(this,y);var e=_assertThisInitialized(t=_possibleConstructorReturn(this,_getPrototypeOf(y).call(this))),n=t.attachShadow({mode:"closed"}),o=document.createElement("span");o.className="default";var r=t.innerHTML;o.textContent=t.querySelector("item[default], item:first-child").textContent;var i=document.createElement("div");e.setAttribute("value",t.querySelector("item[default], item:first-child").getAttribute("value")),i.className="option-list",i.innerHTML=r,t.innerHTML=null;var c=document.createElement("style");c.textContent="\n      :host {\n        display: flex;\n        font-family: 'Arial', sans-serif;\n        position: relative;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        background: #fff;\n        border-radius: 25px;\n        border: 1px solid #ccc;\n        padding: 6px 10px;\n        min-width: 200px;\n        width: 220px;\n        height: 30px;\n        cursor: pointer;\n        transition: border .5s;\n      }\n      :host(:hover), :host(:focus-within) {\n        border-color:#0A0C45;\n      }\n      \n      * {\n        box-sizing: border-box;\n        user-select: none;\n        -webkit-user-select: none;\n        cursor: pointer;\n      }\n      .option-list {\n        position: absolute;\n        display: flex;\n        width: calc(100% - 0px);\n        visibility: hidden;\n        flex-direction: column;\n        top: 33px;\n        background: rgba(255,255,255,0.05);\n        min-height: 30px;\n        border-radius: 6px;\n        z-index: 10;\n        border-top: 1px solid rgba(255,255,255, 0.2);\n        border-left: 1px solid rgba(255,255,255, 0.2);\n        backdrop-filter: blur(15px);\n        box-shadow: 5px 5px 30px rgba(0,0,0,0.2);\n        overflow-y: auto;\n      }\n\n      .option-list.show {\n        visibility: visible !important;\n      }\n\n      .option-list > item {\n        padding: 10px 10px;\n        border-bottom: 1px solid rgba(255,255,255, 0.3);\n      }\n      \n      .option-list > item:hover {\n        background-color: rgba(0,0,0,0.1);\n      }\n\n      .option-list > item[disabled] {\n        opacity: 0.5;\n        cursor: default;\n      }\n    ",n.appendChild(c),n.appendChild(o),n.appendChild(i);var u=n.querySelector(".option-list");t.addEventListener("click",function(t){u.classList.toggle("show")});var l=u.querySelectorAll("item:not([disabled])"),s=!0,a=!1,p=void 0;try{for(var f,d=l[Symbol.iterator]();!(s=(f=d.next()).done);s=!0){f.value.addEventListener("click",function(t){e.setAttribute("value",this.getAttribute("value")),n.querySelector("span.default").textContent=this.textContent})}}catch(t){a=!0,p=t}finally{try{s||null==d.return||d.return()}finally{if(a)throw p}}return t}return _inherits(y,_wrapNativeSuper(HTMLElement)),y}();customElements.define("custom-selector",Selector);