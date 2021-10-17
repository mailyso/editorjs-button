!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.AnyButton=n():t.AnyButton=n()}(window,(function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(o,i,function(n){return t[n]}.bind(null,i));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s=0)}([function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return s}));e(1);function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function r(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}var s=function(){function t(n){var e=n.data,o=n.config,i=n.api,r=n.readOnly;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=i,this.readOnly=r,this.nodes={wrapper:null,container:null,inputHolder:null,toggleHolder:null,anyButtonHolder:null,textInput:null,linkInput:null,registButton:null,anyButton:null};var a={baseClass:this.api.styles.block,hide:"hide",btn:"btn",container:"anyButtonContainer",input:"anyButtonContainer__input",inputHolder:"anyButtonContainer__inputHolder",inputText:"anyButtonContainer__input--text",inputLink:"anyButtonContainer__input--link",registButton:"anyButtonContainer__registerButton",anyButtonHolder:"anyButtonContainer__anyButtonHolder",btnColor:"btn--default",toggleSwitch:"toggle-switch",editButton:"edit-button",toggleLabel:"toggle-label"};this.CSS=Object.assign(a,o.css),this.data={link:"",text:""},this.data=e}return a(t,[{key:"validate",value:function(t){return""!==this._data.link&&""!==this._data.text}},{key:"save",value:function(t){return this._data}},{key:"data",set:function(n){this._data=Object.assign({},{link:this.api.sanitizer.clean(n.link||"",t.sanitize),text:this.api.sanitizer.clean(n.text||"",t.sanitize)})},get:function(){return this._data}}],[{key:"toolbox",get:function(){return{title:"Button",icon:'<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 512 512" height="20" viewBox="0 0 512 512" width="20"><path d="m237.102 366v-90.018h-90c-11.046 0-20-8.954-20-20s8.954-20 20-20h90v-90.982c0-11.046 8.954-20 20-20s20 8.954 20 20v90.982h90c11.046 0 20 8.954 20 20s-8.954 20-20 20h-90v90.018c0 11.046-8.954 20-20 20s-20-8.954-20-20zm254.898-15c11.046 0 20-8.954 20-20v-251c0-44.112-35.888-80-80-80h-352c-44.112 0-80 35.888-80 80v352c0 44.112 35.888 80 80 80h352c44.112 0 80-35.888 80-80 0-11.046-8.954-20-20-20s-20 8.954-20 20c0 22.056-17.944 40-40 40h-352c-22.056 0-40-17.944-40-40v-352c0-22.056 17.944-40 40-40h352c22.056 0 40 17.944 40 40v251c0 11.046 8.954 20 20 20z"/></svg>'}}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"enableLineBreaks",get:function(){return!1}},{key:"STATE",get:function(){return{EDIT:0,VIEW:1}}},{key:"sanitize",get:function(){return{text:!1,link:!1}}}]),a(t,[{key:"render",value:function(){return this.nodes.wrapper=this.make("div",this.CSS.baseClass),this.nodes.container=this.make("div",this.CSS.container),this.nodes.inputHolder=this.makeInputHolder(),this.nodes.toggleHolder=this.makeToggle(),this.nodes.anyButtonHolder=this.makeAnyButtonHolder(),this.nodes.container.appendChild(this.nodes.toggleHolder),this.nodes.container.appendChild(this.nodes.inputHolder),this.nodes.container.appendChild(this.nodes.anyButtonHolder),""!==this._data.link&&(this.init(),this.show(t.STATE.VIEW)),this.nodes.wrapper.appendChild(this.nodes.container),this.nodes.wrapper}},{key:"makeInputHolder",value:function(){var n=this,e=this.make("div",[this.CSS.inputHolder]);return this.nodes.textInput=this.make("div",[this.api.styles.input,this.CSS.input,this.CSS.inputText],{contentEditable:!this.readOnly}),this.nodes.textInput.dataset.placeholder=this.api.i18n.t("Button Text"),this.nodes.linkInput=this.make("div",[this.api.styles.input,this.CSS.input,this.CSS.inputLink],{contentEditable:!this.readOnly}),this.nodes.linkInput.dataset.placeholder=this.api.i18n.t("Link Url"),this.nodes.registButton=this.make("button",[this.api.styles.button,this.CSS.registButton]),this.nodes.registButton.type="button",this.nodes.registButton.textContent=this.api.i18n.t("Set"),this.nodes.registButton.addEventListener("click",(function(e){n.data={link:n.nodes.linkInput.textContent,text:n.nodes.textInput.textContent},n.show(t.STATE.VIEW)})),e.appendChild(this.nodes.textInput),e.appendChild(this.nodes.linkInput),e.appendChild(this.nodes.registButton),e}},{key:"init",value:function(){this.nodes.textInput.textContent=this._data.text,this.nodes.linkInput.textContent=this._data.link}},{key:"show",value:function(t){this.nodes.anyButton.textContent=this._data.text,this.nodes.anyButton.setAttribute("href",this._data.link),this.changeState(t)}},{key:"makeAnyButtonHolder",value:function(){var t=this.make("div",[this.CSS.hide,this.CSS.anyButtonHolder]);return this.nodes.anyButton=this.make("a",[this.CSS.btnColor],{target:"_blank",rel:"nofollow noindex noreferrer"}),this.nodes.anyButton.textContent=this.api.i18n.t("Default Button"),t.appendChild(this.nodes.anyButton),t}},{key:"changeState",value:function(n){switch(n){case t.STATE.EDIT:this.nodes.inputHolder.classList.remove(this.CSS.hide),this.nodes.anyButtonHolder.classList.add(this.CSS.hide),this.nodes.toggleHolder.classList.add(this.CSS.hide);break;case t.STATE.VIEW:this.nodes.inputHolder.classList.add(this.CSS.hide),this.nodes.anyButtonHolder.classList.remove(this.CSS.hide),this.nodes.toggleHolder.classList.remove(this.CSS.hide)}}},{key:"makeToggle",value:function(){var n=this,e=this.make("div",[this.CSS.toggleSwitch]);this.nodes.editButton=this.make("button",[this.CSS.editButton],{type:"button"}),this.nodes.editButton.innerHTML="".concat(this.api.i18n.t("Edit Button Text"),' <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">\n          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n          <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />\n          <circle cx="12" cy="12" r="3" />\n        </svg>');this.make("label",[this.CSS.toggleLabel],{for:"toggle"});return this.nodes.editButton.addEventListener("change",(function(e){n.data={link:n.nodes.linkInput.textContent,text:n.nodes.textInput.textContent},n.show(t.STATE.EDIT)})),e.appendChild(this.nodes.editButton),e}},{key:"make",value:function(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=document.createElement(t);Array.isArray(e)?(n=r.classList).add.apply(n,o(e)):e&&r.classList.add(e);for(var a in i)r[a]=i[a];return r}}]),t}()},function(t,n,e){var o=e(2),i=e(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);t.exports=i.locals||{}},function(t,n,e){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),a=[];function s(t){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===t){n=e;break}return n}function c(t,n){for(var e={},o=[],i=0;i<t.length;i++){var r=t[i],c=n.base?r[0]+n.base:r[0],l=e[c]||0,u="".concat(c," ").concat(l);e[c]=l+1;var d=s(u),h={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(a[d].references++,a[d].updater(h)):a.push({identifier:u,updater:v(h,n),references:1}),o.push(u)}return o}function l(t){var n=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){n.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(n);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,d=(u=[],function(t,n){return u[t]=n,u.filter(Boolean).join("\n")});function h(t,n,e,o){var i=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=d(n,i);else{var r=document.createTextNode(i),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(r,a[n]):t.appendChild(r)}}function p(t,n,e){var o=e.css,i=e.media,r=e.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var f=null,g=0;function v(t,n){var e,o,i;if(n.singleton){var r=g++;e=f||(f=l(n)),o=h.bind(null,e,r,!1),i=h.bind(null,e,r,!0)}else e=l(n),o=p.bind(null,e,n),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else i()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var e=c(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<e.length;o++){var i=s(e[o]);a[i].references--}for(var r=c(t,n),l=0;l<e.length;l++){var u=s(e[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}e=r}}}},function(t,n,e){(n=e(4)(!1)).push([t.i,'.hide{\n    display: none !important;\n}\n\n.anyButtonContainer{\n    position: relative;\n}\n\n.anyButtonContainer__registerButton{\n    display: block;\n    margin: auto;\n}\n\n.anyButtonContainer__inputHolder{}\n\n.anyButtonContainer__inputHolder > * {\n    margin-bottom: 10px;\n}\n\n.anyButtonContainer__input {\n    padding-left: 38px;\n    background-repeat: no-repeat;\n    background-position: 10px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n\n.anyButtonContainer__input--link{\n    background-image: url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 277.279 277.279" height="20" width="20" style="enable-background:new 0 0 277.279 277.279;" xml:space="preserve"> <g id="XMLID_105_"> <path id="XMLID_106_" d="M149.245,191.671l-42.425,42.426c0,0,0,0.001-0.001,0.001c0,0,0,0.001-0.001,0.001   c-17.544,17.545-46.092,17.546-63.638,0c-8.5-8.5-13.18-19.801-13.18-31.82c0-12.018,4.68-23.317,13.177-31.817   c0.001-0.001,0.002-0.002,0.003-0.003l42.425-42.426c5.857-5.858,5.857-15.356-0.001-21.213c-5.857-5.857-15.355-5.857-21.213,0   l-42.425,42.426c-0.003,0.003-0.006,0.007-0.009,0.01C7.798,163.42,0,182.251,0,202.279c0,20.033,7.801,38.867,21.967,53.033   C36.589,269.933,55.794,277.244,75,277.244c19.206,0,38.412-7.311,53.032-21.932c0,0,0-0.001,0-0.001   c0.001,0,0.001-0.001,0.001-0.001l42.425-42.426c5.857-5.857,5.857-15.355-0.001-21.213   C164.601,185.814,155.104,185.814,149.245,191.671z"/> <path id="XMLID_107_" d="M277.279,75c0-20.033-7.802-38.867-21.968-53.033c-29.243-29.242-76.824-29.241-106.065,0   c-0.001,0.002-0.003,0.003-0.004,0.005l-42.424,42.423c-5.858,5.857-5.858,15.356,0,21.213c2.93,2.93,6.768,4.394,10.607,4.394   c3.838,0,7.678-1.465,10.606-4.394l42.424-42.423c0.001-0.002,0.003-0.003,0.005-0.005c17.544-17.544,46.092-17.545,63.638,0   c8.499,8.5,13.181,19.801,13.181,31.82c0,12.018-4.68,23.317-13.178,31.817c-0.001,0.001-0.002,0.002-0.003,0.003l-42.425,42.426   c-5.857,5.857-5.857,15.355,0.001,21.213c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394l42.425-42.426   c0.003-0.003,0.006-0.007,0.009-0.01C269.48,113.859,277.279,95.028,277.279,75z"/> <path id="XMLID_108_" d="M85.607,191.671c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394l84.852-84.852   c5.858-5.857,5.858-15.355,0-21.213c-5.857-5.857-15.355-5.857-21.213,0l-84.852,84.851   C79.749,176.316,79.749,185.814,85.607,191.671z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>\');\n}\n.anyButtonContainer__input--text{\n    background-image: url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 512 512" height="20" viewBox="0 0 512 512" width="20"><g><path d="m15 114.235c8.284 0 15-6.716 15-15v-69.235h69.235c8.284 0 15-6.716 15-15s-6.716-15-15-15h-84.235c-8.284 0-15 6.716-15 15v84.235c0 8.285 6.716 15 15 15z"/><path d="m497 0h-84.235c-8.284 0-15 6.716-15 15s6.716 15 15 15h69.235v69.235c0 8.284 6.716 15 15 15s15-6.716 15-15v-84.235c0-8.284-6.716-15-15-15z"/><path d="m497 397.765c-8.284 0-15 6.716-15 15v69.235h-69.235c-8.284 0-15 6.716-15 15s6.716 15 15 15h84.235c8.284 0 15-6.716 15-15v-84.235c0-8.285-6.716-15-15-15z"/><path d="m99.235 482h-69.235v-69.235c0-8.284-6.716-15-15-15s-15 6.716-15 15v84.235c0 8.284 6.716 15 15 15h84.235c8.284 0 15-6.716 15-15s-6.715-15-15-15z"/><path d="m419.66 191.38v-94.73c0-4.7-3.81-8.51-8.52-8.51h-155.14-155.14c-4.71 0-8.52 3.81-8.52 8.51v94.73c0 4.71 3.81 8.52 8.52 8.52h45.24c4.7 0 8.51-3.81 8.51-8.52v-32.45c0-4.71 3.82-8.52 8.52-8.52h53.21c4.71 0 8.52 3.81 8.52 8.52v234.14c0 4.71-3.81 8.52-8.52 8.52h-23.27c-4.71 0-8.52 3.81-8.52 8.52v45.24c0 4.7 3.81 8.51 8.52 8.51h62.93 62.93c4.71 0 8.52-3.81 8.52-8.51v-45.24c0-4.71-3.81-8.52-8.52-8.52h-23.27c-4.71 0-8.52-3.81-8.52-8.52v-234.14c0-4.71 3.81-8.52 8.52-8.52h53.21c4.7 0 8.52 3.81 8.52 8.52v32.45c0 4.71 3.81 8.52 8.51 8.52h45.24c4.71 0 8.52-3.81 8.52-8.52z"/></g></svg>\');\n}\n.anyButtonContainer__input[contentEditable=true][data-placeholder]::before {\n     position: absolute;\n     content: attr(data-placeholder);\n     color: #707684;\n     font-weight: normal;\n     opacity: 0;\n}\n\n.anyButtonContainer__input[contentEditable=true][data-placeholder]:empty::before {\n     opacity: 1;\n}\n\n.anyButtonContainer__input[contentEditable=true][data-placeholder]:empty:focus::before {\n     opacity: 0;\n}\n\n\n.cdx-button{\n    white-space: nowrap;\n}\n\n.anyButtonContainer__anyButtonHolder{\n    text-align: center;\n}\n\n\n\n.btn{\n    display: inline-block;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #212529;\n    text-align: center;\n    text-decoration: none !important;\n    vertical-align: middle;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n    background-color: transparent;\n    border: 1px solid transparent;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    border-radius: .25rem;\n    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}\n\n.btn--default{\n    color: #fff;\n    background-color: #0d6efd;\n    border-color: #0d6efd;\n}\n\n.btn--gray{\n    color: #fff;\n    background-color: #7c7c7c;\n    border-color: #7c7c7c;\n}\n\n\n.toggle-input {\n    position: absolute;\n    z-index: 5;\n    opacity: 0;\n    cursor: pointer;\n    width: 40px;\n    height: 20px;\n    margin: 0;\n}\n\n.toggle-label {\n    width: 40px;\n    height: 20px;\n    background: #ccc;\n    position: relative;\n    display: inline-block;\n    border-radius: 46px;\n    transition: 0.4s;\n    box-sizing: border-box;\n}\n.toggle-label:after {\n    content: "";\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    left: 0;\n    top: 0;\n    z-index: 2;\n    background: #fff;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n    transition: 0.4s;\n}\n\n.toggle-input:checked + .toggle-label {\n    background-color: #4BD865;\n}\n.toggle-input:checked + .toggle-label:after {\n    left: 20px;\n}\n\n.toggle-switch {\n    width: 40px;\n    margin-left: auto;\n    padding: 10px 0;\n}',""]),t.exports=n},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var i=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[e].concat(r).concat([i]).join("\n")}var a,s,c;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,o){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);o&&i[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}}]).default}));