/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Gideon+Roman&family=Inter:wght@400;500;600;700;800;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body, div, h1, h2, h3, h4, p {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
}

.hello {
    color: red;
}

.task{
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: repeat(3, 1fr);
    row-gap: 8px;
    column-gap: 16px;
    padding: 24px 48px;
    border-top: solid 1px #D6D7D9;
    border-bottom: solid 1px #D6D7D9;
    align-items: center;
}

.task-title{
    grid-row: 1;
    grid-column: 2;
    font-size: 1rem;
    color: #222222;
}

.task-description{
    grid-row: 2;
    grid-column: 2;
    color: #797979;
}

.task-due-date{
    grid-row: 3;
    grid-column: 2;
    color: green;
    font-size: 0.85rem;

}

.task-done-btn{
    background-color: transparent;
    grid-row: 2;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 2px solid #C5C8CC;
}

.task-edit-btn {
    cursor: pointer;
    grid-column: 3;
    grid-row: 1;
    justify-self: end;
}

/* Add new task */

.add-task-container {
    /*padding: 16px;*/
    border: 1px solid #797979;
    height: 120px;
}

.add-task-form {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr auto;
}

.add-task-form-top {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 8px;
    align-items: start;
}

#title-input {
    font-size: 1rem;
    color: #808080;
    font-weight: 600;
    border: none;
}

#description-textarea {
    align-self: stretch;
    resize: none;
    font-size: 0.75rem;
    color: #808080;
    font-weight: 400;
    border: none;
}

.add-task-form input {
    background-color: #fff;
    border: none;
}

.add-task-bottom {
    border-top: #797979 solid 1px;
    display: flex;
    gap: 40px;
    justify-content: space-between;
}

.add-task-bottom-left {
    display: flex;
    gap: 32px;
}

.add-task-date {
    color: green;
}

/* Task Priority */

.task-priority {
    grid-row: 2;
    grid-column: 3;
    display: flex;
    gap: 8px;
    align-items: center;
}

.task-priority-icon{
    width: 12px;
    height: 12px;
    border-radius: 100%;
}

.high-priority-icon {
    background-color: red;
}

.medium-priority-icon {
    background-color: yellow;
}

.low-priority-icon {
    background-color: green;
}

/* Select priority */

.select-priority-container{
    display: flex;
    justify-content: center;
    position: relative;
    min-width: 152px;
    height: 48px;
}

.select-priority-btn {
    border: none;
    appearance: none;
    padding: 0 24px;
    width: 100%;
    font-size: 0.9rem;
}

.priority-icon-container {
    pointer-events: none;
    position: absolute;
    left: 0;
    width: 48px;
    height: 100%;
}

.priority-icon {
    width: 12px;
    height: 12px;
    border: solid 1px red;
    border-radius: 100%;
}


.form-task-bottom-right {
    display: flex;
    gap: 8px;
    align-items: center;
}


/* Create Task Btns */
.cancel-btn, .save-btn {
    padding: 8px 24px;
    border-radius: 4px;
    border: none;
    font-weight: 700;
}

.cancel-btn {
    color: #383A40;
    background: #E8E9EA;
}

.save-btn {
    background-color: red;
    color: white;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,gCAAgC;IAChC,eAAe;AACnB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,kCAAkC;IAClC,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,6BAA6B;IAC7B,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,YAAY;IACZ,kBAAkB;;AAEtB;;AAEA;IACI,6BAA6B;IAC7B,WAAW;IACX,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,cAAc;IACd,WAAW;IACX,iBAAiB;AACrB;;AAEA,iBAAiB;;AAEjB;IACI,iBAAiB;IACjB,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,QAAQ;IACR,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,aAAa;IACb,SAAS;IACT,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA,kBAAkB;;AAElB;IACI,WAAW;IACX,cAAc;IACd,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA,oBAAoB;;AAEpB;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,OAAO;IACP,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;;AAGA,qBAAqB;AACrB;IACI,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Gideon+Roman&family=Inter:wght@400;500;600;700;800;900&display=swap');\n\nbody, div, h1, h2, h3, h4, p {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Inter', sans-serif;\n    font-size: 16px;\n}\n\n.hello {\n    color: red;\n}\n\n.task{\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-template-rows: repeat(3, 1fr);\n    row-gap: 8px;\n    column-gap: 16px;\n    padding: 24px 48px;\n    border-top: solid 1px #D6D7D9;\n    border-bottom: solid 1px #D6D7D9;\n    align-items: center;\n}\n\n.task-title{\n    grid-row: 1;\n    grid-column: 2;\n    font-size: 1rem;\n    color: #222222;\n}\n\n.task-description{\n    grid-row: 2;\n    grid-column: 2;\n    color: #797979;\n}\n\n.task-due-date{\n    grid-row: 3;\n    grid-column: 2;\n    color: green;\n    font-size: 0.85rem;\n\n}\n\n.task-done-btn{\n    background-color: transparent;\n    grid-row: 2;\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    border: 2px solid #C5C8CC;\n}\n\n.task-edit-btn {\n    cursor: pointer;\n    grid-column: 3;\n    grid-row: 1;\n    justify-self: end;\n}\n\n/* Add new task */\n\n.add-task-container {\n    /*padding: 16px;*/\n    border: 1px solid #797979;\n    height: 120px;\n}\n\n.add-task-form {\n    height: 100%;\n    display: grid;\n    grid-template-rows: 1fr auto;\n}\n\n.add-task-form-top {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 8px;\n    align-items: start;\n}\n\n#title-input {\n    font-size: 1rem;\n    color: #808080;\n    font-weight: 600;\n    border: none;\n}\n\n#description-textarea {\n    align-self: stretch;\n    resize: none;\n    font-size: 0.75rem;\n    color: #808080;\n    font-weight: 400;\n    border: none;\n}\n\n.add-task-form input {\n    background-color: #fff;\n    border: none;\n}\n\n.add-task-bottom {\n    border-top: #797979 solid 1px;\n    display: flex;\n    gap: 40px;\n    justify-content: space-between;\n}\n\n.add-task-bottom-left {\n    display: flex;\n    gap: 32px;\n}\n\n.add-task-date {\n    color: green;\n}\n\n/* Task Priority */\n\n.task-priority {\n    grid-row: 2;\n    grid-column: 3;\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.task-priority-icon{\n    width: 12px;\n    height: 12px;\n    border-radius: 100%;\n}\n\n.high-priority-icon {\n    background-color: red;\n}\n\n.medium-priority-icon {\n    background-color: yellow;\n}\n\n.low-priority-icon {\n    background-color: green;\n}\n\n/* Select priority */\n\n.select-priority-container{\n    display: flex;\n    justify-content: center;\n    position: relative;\n    min-width: 152px;\n    height: 48px;\n}\n\n.select-priority-btn {\n    border: none;\n    appearance: none;\n    padding: 0 24px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.priority-icon-container {\n    pointer-events: none;\n    position: absolute;\n    left: 0;\n    width: 48px;\n    height: 100%;\n}\n\n.priority-icon {\n    width: 12px;\n    height: 12px;\n    border: solid 1px red;\n    border-radius: 100%;\n}\n\n\n.form-task-bottom-right {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n\n/* Create Task Btns */\n.cancel-btn, .save-btn {\n    padding: 8px 24px;\n    border-radius: 4px;\n    border: none;\n    font-weight: 700;\n}\n\n.cancel-btn {\n    color: #383A40;\n    background: #E8E9EA;\n}\n\n.save-btn {\n    background-color: red;\n    color: white;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, networkInterfaces, mac, os; } 

//  Exports
// ================================================
module.exports = module.exports["default"] = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}


/***/ }),

/***/ "./src/create-dom-element.js":
/*!***********************************!*\
  !*** ./src/create-dom-element.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// This module responsability is to provide a way to create HTML Elements more easily
class Element{
    constructor(elementTag, elementClass, elementId){
        this.elementTag = elementTag;
        this.elementClass = elementClass;
        this.elementId = elementId;

        this.element = document.createElement(`${elementTag}`);
        this.element.classList.add(`${this.elementClass}`);
        if (this.elementId) this.element.setAttribute('id',`${elementId}`);
    }

    get htmlElement() {
        return this.element;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Element);

/***/ }),

/***/ "./src/create-task.js":
/*!****************************!*\
  !*** ./src/create-task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_dom_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-dom-element */ "./src/create-dom-element.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");




function getForm() {
    const form = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('form','add-task-form').htmlElement;

    const formTop = getFormTop();
    const formBottom = getFormBottom();

    form.append(formTop, formBottom);

    return form;
}

function getFormTop() {
    const formTop = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'add-task-form-top').htmlElement;
    const title = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('input', 'add-task-input', 'title-input').htmlElement;;
    const description = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('textarea', 'add-task-description-label', 'description-textarea').htmlElement;

    title.value = 'teste';
    description.value = 'teste';

    formTop.append(title, description);

    return formTop;
}

function getFormBottom() {
    const formBottom = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'add-task-bottom').htmlElement;

    const formBottomLeft = getFormBottomLeft();
    const formBottomRight = getFormBottomRight();

    formBottom.append(formBottomLeft, formBottomRight);

    return formBottom;
}

function getFormBottomLeft() {
    const formBottomLeft = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'add-task-bottom-left').htmlElement;
    const taskPriority = getPriority();
    const taskDate = getDate();

    formBottomLeft.append(taskDate, taskPriority);

    return formBottomLeft;
}

function getFormBottomRight() {
    const formBottomRight = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'form-task-bottom-right').htmlElement;
    const cancelBtn = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"] ('button', 'cancel-btn').htmlElement;
    const saveBtn = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"] ('button', 'save-btn').htmlElement;

    cancelBtn.textContent = 'Cancel';
    saveBtn.textContent = 'Save';

    formBottomRight.append(cancelBtn, saveBtn);

    return formBottomRight
}

function getDate() {
    const todayDate = new Date().toJSON().slice(0,10);
    const taskDate = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('input', 'add-task-date').htmlElement;

    taskDate.type = 'date';
    taskDate.min = todayDate;

    return taskDate;
}


function getPriority(currentPriority) {
    const selectContainer = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'select-priority-container').htmlElement;
    const selectBtn = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('select', 'select-priority-btn').htmlElement;
    const optionHigh = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('option').htmlElement;
    const optionMid = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('option').htmlElement;
    const optionLow = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('option').htmlElement;
    const iconContainer = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'priority-icon-container').htmlElement;
    const icon = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'priority-icon').htmlElement;

    optionHigh.value = 'High';
    optionHigh.textContent = 'High Priority'

    optionMid.value = 'Medium';
    optionMid.textContent = 'Medium Priority';

    optionLow.value = 'Low';
    optionLow.textContent = 'Low Priority';

    optionMid.selected = true;

    iconContainer.appendChild(icon);
    selectBtn.append(optionHigh,optionMid,optionLow);
    selectContainer.append(iconContainer, selectBtn);

    return selectContainer;
}

function createTask() {
    const container = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'add-task-container').htmlElement;

    const form = getForm();

    container.append(form);
    return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);

/***/ }),

/***/ "./src/display-task.js":
/*!*****************************!*\
  !*** ./src/display-task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_dom_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-dom-element */ "./src/create-dom-element.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");



const content = document.getElementById('content');

function getTaskPriority(task){
    const taskPriority = new TaskPriority(`${task.priority}`);

    return taskPriority.priority;
}

class TaskPriority {
    constructor(priorityLevel){
        this._container = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'task-priority').htmlElement;
        this._text = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('p', 'task-priority-text').htmlElement;
        this._icon = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'task-priority-icon').htmlElement;

        this._text.textContent = `${priorityLevel} priority`;
        this._icon.classList.add(`${priorityLevel}-priority-icon`);

        this._text.textContent = this._text.textContent.charAt(0).toUpperCase() + this._text.textContent.slice(1);

        this._container.append(this._text, this._icon);
    }

    get priority() {
        return this._container;
    }
}

function displayTask(task) {
    const container = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('div','task').htmlElement;
    const title = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('p','task-title').htmlElement;
    const description = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('p', 'task-description').htmlElement;
    const dueDate = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('p', 'task-due-date').htmlElement;
    const doneBtn = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('button', 'task-done-btn').htmlElement;
    const taskPriority = getTaskPriority(task);
    const editBtn = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('p', 'task-edit-btn').htmlElement;

    container.dataset.id = task.id; // Set the same task object identifier into the html
    title.textContent = task.title;
    description.textContent = task.description;
    dueDate.textContent = task.dueDate;
    editBtn.textContent = 'Edit';

    container.append(doneBtn, title, description, dueDate, taskPriority, editBtn);
    content.appendChild(container);
    return container;
}

// How do we display the Task Update?


/* First do the add new task
function editTaskElement(taskId) {
    const task = findTask(taskId);
    const taskElement = document.querySelector([`data-id=${taskId}`]);
    const
}
*/



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTask);

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   findTask: () => (/* binding */ findTask),
/* harmony export */   tasks: () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);
// This module will contain all the tasks
 // Used this package to generate unique Id's;

// Create new Tasks
class Task {
    constructor(title, description, dueDate, priority, project) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._project = project;
        this._id = uniqid__WEBPACK_IMPORTED_MODULE_0___default()();
    }

    get id() {
        return this._id;
    }
    
    get title() {
        return this._title;
    }
    set title(value) {
        // validation here, prob.
        this._title = value;
    }

    get description() {
        return this._description;
    }
    set description(value) {
        // validation here, prob.
        this._description = value;
    }

    get dueDate() {
        return this._dueDate;
    }
    set dueDate(value) {
        // validation here, prob.
        this._dueDate = value;
    }
    
    get priority() {
        return this._priority;
    }
    set priority(value) {
        // validation here, prob.
        this._priority = value;
    }
    
    get project() {
        return this_.project;
    }
    set project(value) {
        // validation here, prob.
        this._project = value;
    }
}

// Edit Task // Still thinking about this Feature, it may be better if we change directly with findtask, with DOM, that way we can set each info equal to the textContent;

// Find Task
function findTask(taskId){
    const foundTask = tasks.find(task => task.id === taskId);
    return foundTask;
}

// Tasks
const tasks = [];




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _create_dom_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-dom-element */ "./src/create-dom-element.js");
/* harmony import */ var _display_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-task */ "./src/display-task.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-task */ "./src/create-task.js");






const content = document.getElementById('content');

const task = new _tasks__WEBPACK_IMPORTED_MODULE_3__.Task('Buy my P.O 33 K.O','Buy as soon as possible to make the beats!','12/4','high'); //this will work through event listenner;

const task2 = new _tasks__WEBPACK_IMPORTED_MODULE_3__.Task('Learn DJ STUF!','Learn to make the beats!','10/4','high'); //this will work through event listenner;

_tasks__WEBPACK_IMPORTED_MODULE_3__.tasks.push(task); // delete later
_tasks__WEBPACK_IMPORTED_MODULE_3__.tasks.push(task2); // delete later
console.log(_tasks__WEBPACK_IMPORTED_MODULE_3__.tasks); // delete later

// Move this to separate module later
document.body.addEventListener('click', e => {
    if( e.target.classList.contains('task-edit-btn')) {
        console.log('works');
    }
})
//
const test = (0,_display_task__WEBPACK_IMPORTED_MODULE_2__["default"])(task);
const test2 = (0,_create_task__WEBPACK_IMPORTED_MODULE_4__["default"])();


content.append(test,test2);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysa0lBQWtJLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLGdEQUFnRCxJQUFJLElBQUksSUFBSSxJQUFJLGtCQUFrQjtBQUN4UDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUss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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O1VDcEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNzQjtBQUNGO0FBQ0s7QUFDUDs7QUFFdkM7O0FBRUEsaUJBQWlCLHdDQUFJLGtGQUFrRjs7QUFFdkcsa0JBQWtCLHdDQUFJLDZEQUE2RDs7QUFFbkYseUNBQUssYUFBYTtBQUNsQix5Q0FBSyxjQUFjO0FBQ25CLFlBQVkseUNBQUssR0FBRzs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGFBQWEseURBQVc7QUFDeEIsY0FBYyx3REFBVTs7O0FBR3hCLDJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91bmlxaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS1kb20tZWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXktdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29ybW9yYW50K0dhcmFtb25kOml0YWwsd2dodEAwLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZmYW1pbHk9R2lkZW9uK1JvbWFuJmZhbWlseT1JbnRlcjp3Z2h0QDQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSwgZGl2LCBoMSwgaDIsIGgzLCBoNCwgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmhlbGxvIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4udGFza3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICAgIHJvdy1nYXA6IDhweDtcbiAgICBjb2x1bW4tZ2FwOiAxNnB4O1xuICAgIHBhZGRpbmc6IDI0cHggNDhweDtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI0Q2RDdEOTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI0Q2RDdEOTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFzay10aXRsZXtcbiAgICBncmlkLXJvdzogMTtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi50YXNrLWRlc2NyaXB0aW9ue1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGdyaWQtY29sdW1uOiAyO1xuICAgIGNvbG9yOiAjNzk3OTc5O1xufVxuXG4udGFzay1kdWUtZGF0ZXtcbiAgICBncmlkLXJvdzogMztcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuXG59XG5cbi50YXNrLWRvbmUtYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGdyaWQtcm93OiAyO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDNUM4Q0M7XG59XG5cbi50YXNrLWVkaXQtYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZ3JpZC1jb2x1bW46IDM7XG4gICAgZ3JpZC1yb3c6IDE7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi8qIEFkZCBuZXcgdGFzayAqL1xuXG4uYWRkLXRhc2stY29udGFpbmVyIHtcbiAgICAvKnBhZGRpbmc6IDE2cHg7Ki9cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzk3OTc5O1xuICAgIGhlaWdodDogMTIwcHg7XG59XG5cbi5hZGQtdGFzay1mb3JtIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xufVxuXG4uYWRkLXRhc2stZm9ybS10b3Age1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgICBnYXA6IDhweDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbiN0aXRsZS1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4jZGVzY3JpcHRpb24tdGV4dGFyZWEge1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgcmVzaXplOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmFkZC10YXNrLWZvcm0gaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uYWRkLXRhc2stYm90dG9tIHtcbiAgICBib3JkZXItdG9wOiAjNzk3OTc5IHNvbGlkIDFweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5hZGQtdGFzay1ib3R0b20tbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDMycHg7XG59XG5cbi5hZGQtdGFzay1kYXRlIHtcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbi8qIFRhc2sgUHJpb3JpdHkgKi9cblxuLnRhc2stcHJpb3JpdHkge1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGdyaWQtY29sdW1uOiAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA4cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2stcHJpb3JpdHktaWNvbntcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuLmhpZ2gtcHJpb3JpdHktaWNvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ubWVkaXVtLXByaW9yaXR5LWljb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuLmxvdy1wcmlvcml0eS1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLyogU2VsZWN0IHByaW9yaXR5ICovXG5cbi5zZWxlY3QtcHJpb3JpdHktY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi13aWR0aDogMTUycHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uc2VsZWN0LXByaW9yaXR5LWJ0biB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMCAyNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ucHJpb3JpdHktaWNvbi1jb250YWluZXIge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnByaW9yaXR5LWljb24ge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuXG4uZm9ybS10YXNrLWJvdHRvbS1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDhweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi8qIENyZWF0ZSBUYXNrIEJ0bnMgKi9cbi5jYW5jZWwtYnRuLCAuc2F2ZS1idG4ge1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNhbmNlbC1idG4ge1xuICAgIGNvbG9yOiAjMzgzQTQwO1xuICAgIGJhY2tncm91bmQ6ICNFOEU5RUE7XG59XG5cbi5zYXZlLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUEsaUJBQWlCOztBQUVqQjtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixTQUFTO0lBQ1QsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUEsa0JBQWtCOztBQUVsQjtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsYUFBYTtJQUNiLFFBQVE7SUFDUixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixtQkFBbUI7QUFDdkI7OztBQUdBLHFCQUFxQjtBQUNyQjtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3Jtb3JhbnQrR2FyYW1vbmQ6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmZhbWlseT1HaWRlb24rUm9tYW4mZmFtaWx5PUludGVyOndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSwgZGl2LCBoMSwgaDIsIGgzLCBoNCwgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5oZWxsbyB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNre1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIHJvdy1nYXA6IDhweDtcXG4gICAgY29sdW1uLWdhcDogMTZweDtcXG4gICAgcGFkZGluZzogMjRweCA0OHB4O1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI0Q2RDdEOTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNENkQ3RDk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLXRpdGxle1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6ICMyMjIyMjI7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9ue1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGNvbG9yOiAjNzk3OTc5O1xcbn1cXG5cXG4udGFzay1kdWUtZGF0ZXtcXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBjb2xvcjogZ3JlZW47XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG5cXG59XFxuXFxuLnRhc2stZG9uZS1idG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0M1QzhDQztcXG59XFxuXFxuLnRhc2stZWRpdC1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi8qIEFkZCBuZXcgdGFzayAqL1xcblxcbi5hZGQtdGFzay1jb250YWluZXIge1xcbiAgICAvKnBhZGRpbmc6IDE2cHg7Ki9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzc5Nzk3OTtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG59XFxuXFxuLmFkZC10YXNrLWZvcm0ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxufVxcblxcbi5hZGQtdGFzay1mb3JtLXRvcCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGdhcDogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbiN0aXRsZS1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6ICM4MDgwODA7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uLXRleHRhcmVhIHtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGNvbG9yOiAjODA4MDgwO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5hZGQtdGFzay1mb3JtIGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYWRkLXRhc2stYm90dG9tIHtcXG4gICAgYm9yZGVyLXRvcDogIzc5Nzk3OSBzb2xpZCAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWRkLXRhc2stYm90dG9tLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDMycHg7XFxufVxcblxcbi5hZGQtdGFzay1kYXRlIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4vKiBUYXNrIFByaW9yaXR5ICovXFxuXFxuLnRhc2stcHJpb3JpdHkge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1wcmlvcml0eS1pY29ue1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eS1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWVkaXVtLXByaW9yaXR5LWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5sb3ctcHJpb3JpdHktaWNvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4vKiBTZWxlY3QgcHJpb3JpdHkgKi9cXG5cXG4uc2VsZWN0LXByaW9yaXR5LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLXdpZHRoOiAxNTJweDtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbn1cXG5cXG4uc2VsZWN0LXByaW9yaXR5LWJ0biB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgcGFkZGluZzogMCAyNHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5wcmlvcml0eS1pY29uLWNvbnRhaW5lciB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiA0OHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wcmlvcml0eS1pY29uIHtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG5cXG4uZm9ybS10YXNrLWJvdHRvbS1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4vKiBDcmVhdGUgVGFzayBCdG5zICovXFxuLmNhbmNlbC1idG4sIC5zYXZlLWJ0biB7XFxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmNhbmNlbC1idG4ge1xcbiAgICBjb2xvcjogIzM4M0E0MDtcXG4gICAgYmFja2dyb3VuZDogI0U4RTlFQTtcXG59XFxuXFxuLnNhdmUtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBcbihUaGUgTUlUIExpY2Vuc2UpXG5Db3B5cmlnaHQgKGMpIDIwMTQtMjAyMSBIYWzDoXN6IMOBZMOhbSA8YWRhbUBhaW1mb3JtLmNvbT5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gIFVuaXF1ZSBIZXhhdHJpZGVjaW1hbCBJRCBHZW5lcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAgRGVwZW5kZW5jaWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBwaWQgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5waWQgPyBwcm9jZXNzLnBpZC50b1N0cmluZygzNikgOiAnJyA7XG52YXIgYWRkcmVzcyA9ICcnO1xuaWYodHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHJlcXVpcmUgIT09ICd1bmRlZmluZWQnKXtcbiAgICB2YXIgbWFjID0gJycsIG9zID0gcmVxdWlyZSgnb3MnKTsgXG4gICAgaWYob3MubmV0d29ya0ludGVyZmFjZXMpIHZhciBuZXR3b3JrSW50ZXJmYWNlcyA9IG9zLm5ldHdvcmtJbnRlcmZhY2VzKCk7XG4gICAgaWYobmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICBsb29wOlxuICAgICAgICBmb3IobGV0IGludGVyZmFjZV9rZXkgaW4gbmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICAgICAgY29uc3QgbmV0d29ya0ludGVyZmFjZSA9IG5ldHdvcmtJbnRlcmZhY2VzW2ludGVyZmFjZV9rZXldO1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gbmV0d29ya0ludGVyZmFjZS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VbaV0gIT09IHVuZGVmaW5lZCAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAhPSAnMDA6MDA6MDA6MDA6MDA6MDAnKXtcbiAgICAgICAgICAgICAgICAgICAgbWFjID0gbmV0d29ya0ludGVyZmFjZVtpXS5tYWM7IGJyZWFrIGxvb3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFkZHJlc3MgPSBtYWMgPyBwYXJzZUludChtYWMucmVwbGFjZSgvXFw6fFxcRCsvZ2ksICcnKSkudG9TdHJpbmcoMzYpIDogJycgO1xuICAgIH1cbn0gXG5cbi8vICBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBhZGRyZXNzICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy50aW1lICAgID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cblxuLy8gIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gbm93KCl7XG4gICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBsYXN0ID0gbm93Lmxhc3QgfHwgdGltZTtcbiAgICByZXR1cm4gbm93Lmxhc3QgPSB0aW1lID4gbGFzdCA/IHRpbWUgOiBsYXN0ICsgMTtcbn1cbiIsIi8vIFRoaXMgbW9kdWxlIHJlc3BvbnNhYmlsaXR5IGlzIHRvIHByb3ZpZGUgYSB3YXkgdG8gY3JlYXRlIEhUTUwgRWxlbWVudHMgbW9yZSBlYXNpbHlcbmNsYXNzIEVsZW1lbnR7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudFRhZywgZWxlbWVudENsYXNzLCBlbGVtZW50SWQpe1xuICAgICAgICB0aGlzLmVsZW1lbnRUYWcgPSBlbGVtZW50VGFnO1xuICAgICAgICB0aGlzLmVsZW1lbnRDbGFzcyA9IGVsZW1lbnRDbGFzcztcbiAgICAgICAgdGhpcy5lbGVtZW50SWQgPSBlbGVtZW50SWQ7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtlbGVtZW50VGFnfWApO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHt0aGlzLmVsZW1lbnRDbGFzc31gKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudElkKSB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsYCR7ZWxlbWVudElkfWApO1xuICAgIH1cblxuICAgIGdldCBodG1sRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnQ7IiwiaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9jcmVhdGUtZG9tLWVsZW1lbnQnO1xuaW1wb3J0IHtUYXNrLCBmaW5kVGFzaywgdGFza3N9IGZyb20gJy4vdGFza3MnO1xuXG5cbmZ1bmN0aW9uIGdldEZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IG5ldyBFbGVtZW50KCdmb3JtJywnYWRkLXRhc2stZm9ybScpLmh0bWxFbGVtZW50O1xuXG4gICAgY29uc3QgZm9ybVRvcCA9IGdldEZvcm1Ub3AoKTtcbiAgICBjb25zdCBmb3JtQm90dG9tID0gZ2V0Rm9ybUJvdHRvbSgpO1xuXG4gICAgZm9ybS5hcHBlbmQoZm9ybVRvcCwgZm9ybUJvdHRvbSk7XG5cbiAgICByZXR1cm4gZm9ybTtcbn1cblxuZnVuY3Rpb24gZ2V0Rm9ybVRvcCgpIHtcbiAgICBjb25zdCBmb3JtVG9wID0gbmV3IEVsZW1lbnQoJ2RpdicsICdhZGQtdGFzay1mb3JtLXRvcCcpLmh0bWxFbGVtZW50O1xuICAgIGNvbnN0IHRpdGxlID0gbmV3IEVsZW1lbnQoJ2lucHV0JywgJ2FkZC10YXNrLWlucHV0JywgJ3RpdGxlLWlucHV0JykuaHRtbEVsZW1lbnQ7O1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbmV3IEVsZW1lbnQoJ3RleHRhcmVhJywgJ2FkZC10YXNrLWRlc2NyaXB0aW9uLWxhYmVsJywgJ2Rlc2NyaXB0aW9uLXRleHRhcmVhJykuaHRtbEVsZW1lbnQ7XG5cbiAgICB0aXRsZS52YWx1ZSA9ICd0ZXN0ZSc7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSAndGVzdGUnO1xuXG4gICAgZm9ybVRvcC5hcHBlbmQodGl0bGUsIGRlc2NyaXB0aW9uKTtcblxuICAgIHJldHVybiBmb3JtVG9wO1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtQm90dG9tKCkge1xuICAgIGNvbnN0IGZvcm1Cb3R0b20gPSBuZXcgRWxlbWVudCgnZGl2JywgJ2FkZC10YXNrLWJvdHRvbScpLmh0bWxFbGVtZW50O1xuXG4gICAgY29uc3QgZm9ybUJvdHRvbUxlZnQgPSBnZXRGb3JtQm90dG9tTGVmdCgpO1xuICAgIGNvbnN0IGZvcm1Cb3R0b21SaWdodCA9IGdldEZvcm1Cb3R0b21SaWdodCgpO1xuXG4gICAgZm9ybUJvdHRvbS5hcHBlbmQoZm9ybUJvdHRvbUxlZnQsIGZvcm1Cb3R0b21SaWdodCk7XG5cbiAgICByZXR1cm4gZm9ybUJvdHRvbTtcbn1cblxuZnVuY3Rpb24gZ2V0Rm9ybUJvdHRvbUxlZnQoKSB7XG4gICAgY29uc3QgZm9ybUJvdHRvbUxlZnQgPSBuZXcgRWxlbWVudCgnZGl2JywgJ2FkZC10YXNrLWJvdHRvbS1sZWZ0JykuaHRtbEVsZW1lbnQ7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZ2V0UHJpb3JpdHkoKTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGdldERhdGUoKTtcblxuICAgIGZvcm1Cb3R0b21MZWZ0LmFwcGVuZCh0YXNrRGF0ZSwgdGFza1ByaW9yaXR5KTtcblxuICAgIHJldHVybiBmb3JtQm90dG9tTGVmdDtcbn1cblxuZnVuY3Rpb24gZ2V0Rm9ybUJvdHRvbVJpZ2h0KCkge1xuICAgIGNvbnN0IGZvcm1Cb3R0b21SaWdodCA9IG5ldyBFbGVtZW50KCdkaXYnLCAnZm9ybS10YXNrLWJvdHRvbS1yaWdodCcpLmh0bWxFbGVtZW50O1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IG5ldyBFbGVtZW50ICgnYnV0dG9uJywgJ2NhbmNlbC1idG4nKS5odG1sRWxlbWVudDtcbiAgICBjb25zdCBzYXZlQnRuID0gbmV3IEVsZW1lbnQgKCdidXR0b24nLCAnc2F2ZS1idG4nKS5odG1sRWxlbWVudDtcblxuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG5cbiAgICBmb3JtQm90dG9tUmlnaHQuYXBwZW5kKGNhbmNlbEJ0biwgc2F2ZUJ0bik7XG5cbiAgICByZXR1cm4gZm9ybUJvdHRvbVJpZ2h0XG59XG5cbmZ1bmN0aW9uIGdldERhdGUoKSB7XG4gICAgY29uc3QgdG9kYXlEYXRlID0gbmV3IERhdGUoKS50b0pTT04oKS5zbGljZSgwLDEwKTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBFbGVtZW50KCdpbnB1dCcsICdhZGQtdGFzay1kYXRlJykuaHRtbEVsZW1lbnQ7XG5cbiAgICB0YXNrRGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgIHRhc2tEYXRlLm1pbiA9IHRvZGF5RGF0ZTtcblxuICAgIHJldHVybiB0YXNrRGF0ZTtcbn1cblxuXG5mdW5jdGlvbiBnZXRQcmlvcml0eShjdXJyZW50UHJpb3JpdHkpIHtcbiAgICBjb25zdCBzZWxlY3RDb250YWluZXIgPSBuZXcgRWxlbWVudCgnZGl2JywgJ3NlbGVjdC1wcmlvcml0eS1jb250YWluZXInKS5odG1sRWxlbWVudDtcbiAgICBjb25zdCBzZWxlY3RCdG4gPSBuZXcgRWxlbWVudCgnc2VsZWN0JywgJ3NlbGVjdC1wcmlvcml0eS1idG4nKS5odG1sRWxlbWVudDtcbiAgICBjb25zdCBvcHRpb25IaWdoID0gbmV3IEVsZW1lbnQoJ29wdGlvbicpLmh0bWxFbGVtZW50O1xuICAgIGNvbnN0IG9wdGlvbk1pZCA9IG5ldyBFbGVtZW50KCdvcHRpb24nKS5odG1sRWxlbWVudDtcbiAgICBjb25zdCBvcHRpb25Mb3cgPSBuZXcgRWxlbWVudCgnb3B0aW9uJykuaHRtbEVsZW1lbnQ7XG4gICAgY29uc3QgaWNvbkNvbnRhaW5lciA9IG5ldyBFbGVtZW50KCdkaXYnLCAncHJpb3JpdHktaWNvbi1jb250YWluZXInKS5odG1sRWxlbWVudDtcbiAgICBjb25zdCBpY29uID0gbmV3IEVsZW1lbnQoJ2RpdicsICdwcmlvcml0eS1pY29uJykuaHRtbEVsZW1lbnQ7XG5cbiAgICBvcHRpb25IaWdoLnZhbHVlID0gJ0hpZ2gnO1xuICAgIG9wdGlvbkhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCBQcmlvcml0eSdcblxuICAgIG9wdGlvbk1pZC52YWx1ZSA9ICdNZWRpdW0nO1xuICAgIG9wdGlvbk1pZC50ZXh0Q29udGVudCA9ICdNZWRpdW0gUHJpb3JpdHknO1xuXG4gICAgb3B0aW9uTG93LnZhbHVlID0gJ0xvdyc7XG4gICAgb3B0aW9uTG93LnRleHRDb250ZW50ID0gJ0xvdyBQcmlvcml0eSc7XG5cbiAgICBvcHRpb25NaWQuc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBzZWxlY3RCdG4uYXBwZW5kKG9wdGlvbkhpZ2gsb3B0aW9uTWlkLG9wdGlvbkxvdyk7XG4gICAgc2VsZWN0Q29udGFpbmVyLmFwcGVuZChpY29uQ29udGFpbmVyLCBzZWxlY3RCdG4pO1xuXG4gICAgcmV0dXJuIHNlbGVjdENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBuZXcgRWxlbWVudCgnZGl2JywgJ2FkZC10YXNrLWNvbnRhaW5lcicpLmh0bWxFbGVtZW50O1xuXG4gICAgY29uc3QgZm9ybSA9IGdldEZvcm0oKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQoZm9ybSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFzazsiLCJpbXBvcnQgRWxlbWVudCBmcm9tICcuL2NyZWF0ZS1kb20tZWxlbWVudCc7XG5pbXBvcnQge1Rhc2ssIGZpbmRUYXNrLCB0YXNrc30gZnJvbSAnLi90YXNrcyc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBnZXRUYXNrUHJpb3JpdHkodGFzayl7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gbmV3IFRhc2tQcmlvcml0eShgJHt0YXNrLnByaW9yaXR5fWApO1xuXG4gICAgcmV0dXJuIHRhc2tQcmlvcml0eS5wcmlvcml0eTtcbn1cblxuY2xhc3MgVGFza1ByaW9yaXR5IHtcbiAgICBjb25zdHJ1Y3Rvcihwcmlvcml0eUxldmVsKXtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gbmV3IEVsZW1lbnQoJ2RpdicsICd0YXNrLXByaW9yaXR5JykuaHRtbEVsZW1lbnQ7XG4gICAgICAgIHRoaXMuX3RleHQgPSBuZXcgRWxlbWVudCgncCcsICd0YXNrLXByaW9yaXR5LXRleHQnKS5odG1sRWxlbWVudDtcbiAgICAgICAgdGhpcy5faWNvbiA9IG5ldyBFbGVtZW50KCdkaXYnLCAndGFzay1wcmlvcml0eS1pY29uJykuaHRtbEVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5fdGV4dC50ZXh0Q29udGVudCA9IGAke3ByaW9yaXR5TGV2ZWx9IHByaW9yaXR5YDtcbiAgICAgICAgdGhpcy5faWNvbi5jbGFzc0xpc3QuYWRkKGAke3ByaW9yaXR5TGV2ZWx9LXByaW9yaXR5LWljb25gKTtcblxuICAgICAgICB0aGlzLl90ZXh0LnRleHRDb250ZW50ID0gdGhpcy5fdGV4dC50ZXh0Q29udGVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuX3RleHQudGV4dENvbnRlbnQuc2xpY2UoMSk7XG5cbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmFwcGVuZCh0aGlzLl90ZXh0LCB0aGlzLl9pY29uKTtcbiAgICB9XG5cbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFzayh0YXNrKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gbmV3IEVsZW1lbnQoJ2RpdicsJ3Rhc2snKS5odG1sRWxlbWVudDtcbiAgICBjb25zdCB0aXRsZSA9IG5ldyBFbGVtZW50KCdwJywndGFzay10aXRsZScpLmh0bWxFbGVtZW50O1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbmV3IEVsZW1lbnQoJ3AnLCAndGFzay1kZXNjcmlwdGlvbicpLmh0bWxFbGVtZW50O1xuICAgIGNvbnN0IGR1ZURhdGUgPSBuZXcgRWxlbWVudCgncCcsICd0YXNrLWR1ZS1kYXRlJykuaHRtbEVsZW1lbnQ7XG4gICAgY29uc3QgZG9uZUJ0biA9IG5ldyBFbGVtZW50KCdidXR0b24nLCAndGFzay1kb25lLWJ0bicpLmh0bWxFbGVtZW50O1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGdldFRhc2tQcmlvcml0eSh0YXNrKTtcbiAgICBjb25zdCBlZGl0QnRuID0gbmV3IEVsZW1lbnQoJ3AnLCAndGFzay1lZGl0LWJ0bicpLmh0bWxFbGVtZW50O1xuXG4gICAgY29udGFpbmVyLmRhdGFzZXQuaWQgPSB0YXNrLmlkOyAvLyBTZXQgdGhlIHNhbWUgdGFzayBvYmplY3QgaWRlbnRpZmllciBpbnRvIHRoZSBodG1sXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGRvbmVCdG4sIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgdGFza1ByaW9yaXR5LCBlZGl0QnRuKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLy8gSG93IGRvIHdlIGRpc3BsYXkgdGhlIFRhc2sgVXBkYXRlP1xuXG5cbi8qIEZpcnN0IGRvIHRoZSBhZGQgbmV3IHRhc2tcbmZ1bmN0aW9uIGVkaXRUYXNrRWxlbWVudCh0YXNrSWQpIHtcbiAgICBjb25zdCB0YXNrID0gZmluZFRhc2sodGFza0lkKTtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoW2BkYXRhLWlkPSR7dGFza0lkfWBdKTtcbiAgICBjb25zdFxufVxuKi9cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlUYXNrOyIsIi8vIFRoaXMgbW9kdWxlIHdpbGwgY29udGFpbiBhbGwgdGhlIHRhc2tzXG5pbXBvcnQgdW5pcWlkIGZyb20gJ3VuaXFpZCc7IC8vIFVzZWQgdGhpcyBwYWNrYWdlIHRvIGdlbmVyYXRlIHVuaXF1ZSBJZCdzO1xuXG4vLyBDcmVhdGUgbmV3IFRhc2tzXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5faWQgPSB1bmlxaWQoKTtcbiAgICB9XG5cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG4gICAgXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuICAgIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgICAgICAvLyB2YWxpZGF0aW9uIGhlcmUsIHByb2IuXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgICAvLyB2YWxpZGF0aW9uIGhlcmUsIHByb2IuXG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICAgIH1cbiAgICBzZXQgZHVlRGF0ZSh2YWx1ZSkge1xuICAgICAgICAvLyB2YWxpZGF0aW9uIGhlcmUsIHByb2IuXG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gICAgfVxuICAgIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAgICAgICAvLyB2YWxpZGF0aW9uIGhlcmUsIHByb2IuXG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIGdldCBwcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpc18ucHJvamVjdDtcbiAgICB9XG4gICAgc2V0IHByb2plY3QodmFsdWUpIHtcbiAgICAgICAgLy8gdmFsaWRhdGlvbiBoZXJlLCBwcm9iLlxuICAgICAgICB0aGlzLl9wcm9qZWN0ID0gdmFsdWU7XG4gICAgfVxufVxuXG4vLyBFZGl0IFRhc2sgLy8gU3RpbGwgdGhpbmtpbmcgYWJvdXQgdGhpcyBGZWF0dXJlLCBpdCBtYXkgYmUgYmV0dGVyIGlmIHdlIGNoYW5nZSBkaXJlY3RseSB3aXRoIGZpbmR0YXNrLCB3aXRoIERPTSwgdGhhdCB3YXkgd2UgY2FuIHNldCBlYWNoIGluZm8gZXF1YWwgdG8gdGhlIHRleHRDb250ZW50O1xuXG4vLyBGaW5kIFRhc2tcbmZ1bmN0aW9uIGZpbmRUYXNrKHRhc2tJZCl7XG4gICAgY29uc3QgZm91bmRUYXNrID0gdGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG4gICAgcmV0dXJuIGZvdW5kVGFzaztcbn1cblxuLy8gVGFza3NcbmNvbnN0IHRhc2tzID0gW107XG5cblxuZXhwb3J0IHtUYXNrLCBmaW5kVGFzaywgdGFza3N9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgRWxlbWVudCBmcm9tICcuL2NyZWF0ZS1kb20tZWxlbWVudCc7XG5pbXBvcnQgZGlzcGxheVRhc2sgZnJvbSAnLi9kaXNwbGF5LXRhc2snO1xuaW1wb3J0IHtUYXNrLCBmaW5kVGFzaywgdGFza3N9IGZyb20gJy4vdGFza3MnO1xuaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi9jcmVhdGUtdGFzayc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb25zdCB0YXNrID0gbmV3IFRhc2soJ0J1eSBteSBQLk8gMzMgSy5PJywnQnV5IGFzIHNvb24gYXMgcG9zc2libGUgdG8gbWFrZSB0aGUgYmVhdHMhJywnMTIvNCcsJ2hpZ2gnKTsgLy90aGlzIHdpbGwgd29yayB0aHJvdWdoIGV2ZW50IGxpc3Rlbm5lcjtcblxuY29uc3QgdGFzazIgPSBuZXcgVGFzaygnTGVhcm4gREogU1RVRiEnLCdMZWFybiB0byBtYWtlIHRoZSBiZWF0cyEnLCcxMC80JywnaGlnaCcpOyAvL3RoaXMgd2lsbCB3b3JrIHRocm91Z2ggZXZlbnQgbGlzdGVubmVyO1xuXG50YXNrcy5wdXNoKHRhc2spOyAvLyBkZWxldGUgbGF0ZXJcbnRhc2tzLnB1c2godGFzazIpOyAvLyBkZWxldGUgbGF0ZXJcbmNvbnNvbGUubG9nKHRhc2tzKTsgLy8gZGVsZXRlIGxhdGVyXG5cbi8vIE1vdmUgdGhpcyB0byBzZXBhcmF0ZSBtb2R1bGUgbGF0ZXJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBpZiggZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWVkaXQtYnRuJykpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3dvcmtzJyk7XG4gICAgfVxufSlcbi8vXG5jb25zdCB0ZXN0ID0gZGlzcGxheVRhc2sodGFzayk7XG5jb25zdCB0ZXN0MiA9IGNyZWF0ZVRhc2soKTtcblxuXG5jb250ZW50LmFwcGVuZCh0ZXN0LHRlc3QyKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=