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
    padding: 16px;
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
}

.add-task-date {
    color: green;
    padding: 0 16px;
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

div .high-priority-icon {
    border: 2px solid #E71313;
    background-color: #ffbbbb;
}

div .medium-priority-icon {
    border: 2px solid #F5D215;
    background-color: #FEF8DC;
}

div .low-priority-icon {
    border: 2px solid #319B46;
    background-color: #EBF5ED;
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
    background-color: #fff;
    padding: 0 16px 0 40px;
    width: 100%;
    font-size: 0.9rem;
    border-left: solid 1px #B0B1B2;
    border-right: solid 1px #B0B1B2;
}

.select-priority-btn:focus {
    outline: none;
    box-shadow: none;
  }

.add-task-date:focus {
    outline: none;
    box-shadow: none;
  }

.priority-icon {
    width: 14px;
    height: 14px;
    border: solid 1.5px #B0B1B2;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%) translateX(-50%);
    pointer-events: none;
}

.form-task-bottom-right {
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 8px;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,gCAAgC;IAChC,eAAe;AACnB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,kCAAkC;IAClC,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,6BAA6B;IAC7B,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,YAAY;IACZ,kBAAkB;;AAEtB;;AAEA;IACI,6BAA6B;IAC7B,WAAW;IACX,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,cAAc;IACd,WAAW;IACX,iBAAiB;AACrB;;AAEA,iBAAiB;;AAEjB;IACI,iBAAiB;IACjB,yBAAyB;;AAE7B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,QAAQ;IACR,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,aAAa;IACb,SAAS;IACT,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA,kBAAkB;;AAElB;IACI,WAAW;IACX,cAAc;IACd,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA,oBAAoB;;AAEpB;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,sBAAsB;IACtB,sBAAsB;IACtB,WAAW;IACX,iBAAiB;IACjB,8BAA8B;IAC9B,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,gBAAgB;EAClB;;AAEF;IACI,aAAa;IACb,gBAAgB;EAClB;;AAEF;IACI,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,mBAAmB;IACnB,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,4CAA4C;IAC5C,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;IACnB,YAAY;AAChB;;;AAGA,qBAAqB;AACrB;IACI,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Gideon+Roman&family=Inter:wght@400;500;600;700;800;900&display=swap');\n\nbody, div, h1, h2, h3, h4, p {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Inter', sans-serif;\n    font-size: 16px;\n}\n\n.hello {\n    color: red;\n}\n\n.task{\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-template-rows: repeat(3, 1fr);\n    row-gap: 8px;\n    column-gap: 16px;\n    padding: 24px 48px;\n    border-top: solid 1px #D6D7D9;\n    border-bottom: solid 1px #D6D7D9;\n    align-items: center;\n}\n\n.task-title{\n    grid-row: 1;\n    grid-column: 2;\n    font-size: 1rem;\n    color: #222222;\n}\n\n.task-description{\n    grid-row: 2;\n    grid-column: 2;\n    color: #797979;\n}\n\n.task-due-date{\n    grid-row: 3;\n    grid-column: 2;\n    color: green;\n    font-size: 0.85rem;\n\n}\n\n.task-done-btn{\n    background-color: transparent;\n    grid-row: 2;\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    border: 2px solid #C5C8CC;\n}\n\n.task-edit-btn {\n    cursor: pointer;\n    grid-column: 3;\n    grid-row: 1;\n    justify-self: end;\n}\n\n/* Add new task */\n\n.add-task-container {\n    /*padding: 16px;*/\n    border: 1px solid #797979;\n\n}\n\n.add-task-form {\n    height: 100%;\n    display: grid;\n    grid-template-rows: 1fr auto;\n}\n\n.add-task-form-top {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 8px;\n    align-items: start;\n    padding: 16px;\n}\n\n#title-input {\n    font-size: 1rem;\n    color: #808080;\n    font-weight: 600;\n    border: none;\n}\n\n#description-textarea {\n    align-self: stretch;\n    resize: none;\n    font-size: 0.75rem;\n    color: #808080;\n    font-weight: 400;\n    border: none;\n}\n\n.add-task-form input {\n    background-color: #fff;\n    border: none;\n}\n\n.add-task-bottom {\n    border-top: #797979 solid 1px;\n    display: flex;\n    gap: 40px;\n    justify-content: space-between;\n}\n\n.add-task-bottom-left {\n    display: flex;\n}\n\n.add-task-date {\n    color: green;\n    padding: 0 16px;\n}\n\n/* Task Priority */\n\n.task-priority {\n    grid-row: 2;\n    grid-column: 3;\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.task-priority-icon{\n    width: 12px;\n    height: 12px;\n    border-radius: 100%;\n}\n\ndiv .high-priority-icon {\n    border: 2px solid #E71313;\n    background-color: #ffbbbb;\n}\n\ndiv .medium-priority-icon {\n    border: 2px solid #F5D215;\n    background-color: #FEF8DC;\n}\n\ndiv .low-priority-icon {\n    border: 2px solid #319B46;\n    background-color: #EBF5ED;\n}\n\n/* Select priority */\n\n.select-priority-container{\n    display: flex;\n    justify-content: center;\n    position: relative;\n    min-width: 152px;\n    height: 48px;\n}\n\n.select-priority-btn {\n    border: none;\n    appearance: none;\n    background-color: #fff;\n    padding: 0 16px 0 40px;\n    width: 100%;\n    font-size: 0.9rem;\n    border-left: solid 1px #B0B1B2;\n    border-right: solid 1px #B0B1B2;\n}\n\n.select-priority-btn:focus {\n    outline: none;\n    box-shadow: none;\n  }\n\n.add-task-date:focus {\n    outline: none;\n    box-shadow: none;\n  }\n\n.priority-icon {\n    width: 14px;\n    height: 14px;\n    border: solid 1.5px #B0B1B2;\n    border-radius: 100%;\n    position: absolute;\n    top: 50%;\n    left: 24px;\n    transform: translateY(-50%) translateX(-50%);\n    pointer-events: none;\n}\n\n.form-task-bottom-right {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n    padding: 8px;\n}\n\n\n/* Create Task Btns */\n.cancel-btn, .save-btn {\n    padding: 8px 24px;\n    border-radius: 4px;\n    border: none;\n    font-weight: 700;\n}\n\n.cancel-btn {\n    color: #383A40;\n    background: #E8E9EA;\n}\n\n.save-btn {\n    background-color: red;\n    color: white;\n}"],"sourceRoot":""}]);
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
    const icon = new _create_dom_element__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'priority-icon').htmlElement;

    optionHigh.value = 'High';
    optionHigh.textContent = 'High Priority'

    optionMid.value = 'Medium';
    optionMid.textContent = 'Medium Priority';

    optionLow.value = 'Low';
    optionLow.textContent = 'Low Priority';

    optionMid.selected = true;

    icon.classList.add(`${currentPriority}-priority-icon`);

    selectBtn.append(optionHigh,optionMid,optionLow);
    selectContainer.append(icon, selectBtn);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysa0lBQWtJLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLGdEQUFnRCxJQUFJLElBQUksSUFBSSxJQUFJLGtCQUFrQjtBQUN4UDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFP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ZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdW5pcWlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGUtZG9tLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS10YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvcm1vcmFudCtHYXJhbW9uZDppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDAmZmFtaWx5PUdpZGVvbitSb21hbiZmYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHksIGRpdiwgaDEsIGgyLCBoMywgaDQsIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5oZWxsbyB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLnRhc2t7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICByb3ctZ2FwOiA4cHg7XG4gICAgY29sdW1uLWdhcDogMTZweDtcbiAgICBwYWRkaW5nOiAyNHB4IDQ4cHg7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNENkQ3RDk7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNENkQ3RDk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2stdGl0bGV7XG4gICAgZ3JpZC1yb3c6IDE7XG4gICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4udGFzay1kZXNjcmlwdGlvbntcbiAgICBncmlkLXJvdzogMjtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICBjb2xvcjogIzc5Nzk3OTtcbn1cblxuLnRhc2stZHVlLWRhdGV7XG4gICAgZ3JpZC1yb3c6IDM7XG4gICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcblxufVxuXG4udGFzay1kb25lLWJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBncmlkLXJvdzogMjtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQzVDOENDO1xufVxuXG4udGFzay1lZGl0LWJ0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGdyaWQtY29sdW1uOiAzO1xuICAgIGdyaWQtcm93OiAxO1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4vKiBBZGQgbmV3IHRhc2sgKi9cblxuLmFkZC10YXNrLWNvbnRhaW5lciB7XG4gICAgLypwYWRkaW5nOiAxNnB4OyovXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzc5Nzk3OTtcblxufVxuXG4uYWRkLXRhc2stZm9ybSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcbn1cblxuLmFkZC10YXNrLWZvcm0tdG9wIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgZ2FwOiA4cHg7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG5cbiN0aXRsZS1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4jZGVzY3JpcHRpb24tdGV4dGFyZWEge1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgcmVzaXplOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmFkZC10YXNrLWZvcm0gaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uYWRkLXRhc2stYm90dG9tIHtcbiAgICBib3JkZXItdG9wOiAjNzk3OTc5IHNvbGlkIDFweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5hZGQtdGFzay1ib3R0b20tbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmFkZC10YXNrLWRhdGUge1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG59XG5cbi8qIFRhc2sgUHJpb3JpdHkgKi9cblxuLnRhc2stcHJpb3JpdHkge1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGdyaWQtY29sdW1uOiAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA4cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2stcHJpb3JpdHktaWNvbntcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuZGl2IC5oaWdoLXByaW9yaXR5LWljb24ge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFNzEzMTM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmJiYjtcbn1cblxuZGl2IC5tZWRpdW0tcHJpb3JpdHktaWNvbiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0Y1RDIxNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVGOERDO1xufVxuXG5kaXYgLmxvdy1wcmlvcml0eS1pY29uIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzE5QjQ2O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUQ7XG59XG5cbi8qIFNlbGVjdCBwcmlvcml0eSAqL1xuXG4uc2VsZWN0LXByaW9yaXR5LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4td2lkdGg6IDE1MnB4O1xuICAgIGhlaWdodDogNDhweDtcbn1cblxuLnNlbGVjdC1wcmlvcml0eS1idG4ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMCAxNnB4IDAgNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4ICNCMEIxQjI7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI0IwQjFCMjtcbn1cblxuLnNlbGVjdC1wcmlvcml0eS1idG46Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4uYWRkLXRhc2stZGF0ZTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbi5wcmlvcml0eS1pY29uIHtcbiAgICB3aWR0aDogMTRweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxLjVweCAjQjBCMUIyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDI0cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5mb3JtLXRhc2stYm90dG9tLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4O1xufVxuXG5cbi8qIENyZWF0ZSBUYXNrIEJ0bnMgKi9cbi5jYW5jZWwtYnRuLCAuc2F2ZS1idG4ge1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNhbmNlbC1idG4ge1xuICAgIGNvbG9yOiAjMzgzQTQwO1xuICAgIGJhY2tncm91bmQ6ICNFOEU5RUE7XG59XG5cbi5zYXZlLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUEsaUJBQWlCOztBQUVqQjtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsU0FBUztJQUNULDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxhQUFhO0lBQ2IsUUFBUTtJQUNSLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztBQUVGO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7QUFFRjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDViw0Q0FBNEM7SUFDNUMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7O0FBR0EscUJBQXFCO0FBQ3JCO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvcm1vcmFudCtHYXJhbW9uZDppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDAmZmFtaWx5PUdpZGVvbitSb21hbiZmYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5LCBkaXYsIGgxLCBoMiwgaDMsIGg0LCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmhlbGxvIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnRhc2t7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gICAgcm93LWdhcDogOHB4O1xcbiAgICBjb2x1bW4tZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAyNHB4IDQ4cHg7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjRDZEN0Q5O1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI0Q2RDdEOTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stdGl0bGV7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogIzIyMjIyMjtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb257XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgY29sb3I6ICM3OTc5Nzk7XFxufVxcblxcbi50YXNrLWR1ZS1kYXRle1xcbiAgICBncmlkLXJvdzogMztcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGNvbG9yOiBncmVlbjtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcblxcbn1cXG5cXG4udGFzay1kb25lLWJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQzVDOENDO1xcbn1cXG5cXG4udGFzay1lZGl0LWJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLyogQWRkIG5ldyB0YXNrICovXFxuXFxuLmFkZC10YXNrLWNvbnRhaW5lciB7XFxuICAgIC8qcGFkZGluZzogMTZweDsqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzk3OTc5O1xcblxcbn1cXG5cXG4uYWRkLXRhc2stZm9ybSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG59XFxuXFxuLmFkZC10YXNrLWZvcm0tdG9wIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuI3RpdGxlLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogIzgwODA4MDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24tdGV4dGFyZWEge1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgY29sb3I6ICM4MDgwODA7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmFkZC10YXNrLWZvcm0gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5hZGQtdGFzay1ib3R0b20ge1xcbiAgICBib3JkZXItdG9wOiAjNzk3OTc5IHNvbGlkIDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5hZGQtdGFzay1ib3R0b20tbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5hZGQtdGFzay1kYXRlIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBwYWRkaW5nOiAwIDE2cHg7XFxufVxcblxcbi8qIFRhc2sgUHJpb3JpdHkgKi9cXG5cXG4udGFzay1wcmlvcml0eSB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLXByaW9yaXR5LWljb257XFxuICAgIHdpZHRoOiAxMnB4O1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcbmRpdiAuaGlnaC1wcmlvcml0eS1pY29uIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0U3MTMxMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmJiYjtcXG59XFxuXFxuZGl2IC5tZWRpdW0tcHJpb3JpdHktaWNvbiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGNUQyMTU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRUY4REM7XFxufVxcblxcbmRpdiAubG93LXByaW9yaXR5LWljb24ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzE5QjQ2O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUVEO1xcbn1cXG5cXG4vKiBTZWxlY3QgcHJpb3JpdHkgKi9cXG5cXG4uc2VsZWN0LXByaW9yaXR5LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLXdpZHRoOiAxNTJweDtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbn1cXG5cXG4uc2VsZWN0LXByaW9yaXR5LWJ0biB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMCAxNnB4IDAgNDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4ICNCMEIxQjI7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNCMEIxQjI7XFxufVxcblxcbi5zZWxlY3QtcHJpb3JpdHktYnRuOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIH1cXG5cXG4uYWRkLXRhc2stZGF0ZTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICB9XFxuXFxuLnByaW9yaXR5LWljb24ge1xcbiAgICB3aWR0aDogMTRweDtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDEuNXB4ICNCMEIxQjI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDI0cHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmZvcm0tdGFzay1ib3R0b20tcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG5cXG4vKiBDcmVhdGUgVGFzayBCdG5zICovXFxuLmNhbmNlbC1idG4sIC5zYXZlLWJ0biB7XFxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmNhbmNlbC1idG4ge1xcbiAgICBjb2xvcjogIzM4M0E0MDtcXG4gICAgYmFja2dyb3VuZDogI0U4RTlFQTtcXG59XFxuXFxuLnNhdmUtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBcbihUaGUgTUlUIExpY2Vuc2UpXG5Db3B5cmlnaHQgKGMpIDIwMTQtMjAyMSBIYWzDoXN6IMOBZMOhbSA8YWRhbUBhaW1mb3JtLmNvbT5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gIFVuaXF1ZSBIZXhhdHJpZGVjaW1hbCBJRCBHZW5lcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAgRGVwZW5kZW5jaWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBwaWQgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5waWQgPyBwcm9jZXNzLnBpZC50b1N0cmluZygzNikgOiAnJyA7XG52YXIgYWRkcmVzcyA9ICcnO1xuaWYodHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHJlcXVpcmUgIT09ICd1bmRlZmluZWQnKXtcbiAgICB2YXIgbWFjID0gJycsIG9zID0gcmVxdWlyZSgnb3MnKTsgXG4gICAgaWYob3MubmV0d29ya0ludGVyZmFjZXMpIHZhciBuZXR3b3JrSW50ZXJmYWNlcyA9IG9zLm5ldHdvcmtJbnRlcmZhY2VzKCk7XG4gICAgaWYobmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICBsb29wOlxuICAgICAgICBmb3IobGV0IGludGVyZmFjZV9rZXkgaW4gbmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICAgICAgY29uc3QgbmV0d29ya0ludGVyZmFjZSA9IG5ldHdvcmtJbnRlcmZhY2VzW2ludGVyZmFjZV9rZXldO1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gbmV0d29ya0ludGVyZmFjZS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VbaV0gIT09IHVuZGVmaW5lZCAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAhPSAnMDA6MDA6MDA6MDA6MDA6MDAnKXtcbiAgICAgICAgICAgICAgICAgICAgbWFjID0gbmV0d29ya0ludGVyZmFjZVtpXS5tYWM7IGJyZWFrIGxvb3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFkZHJlc3MgPSBtYWMgPyBwYXJzZUludChtYWMucmVwbGFjZSgvXFw6fFxcRCsvZ2ksICcnKSkudG9TdHJpbmcoMzYpIDogJycgO1xuICAgIH1cbn0gXG5cbi8vICBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBhZGRyZXNzICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy50aW1lICAgID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cblxuLy8gIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gbm93KCl7XG4gICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBsYXN0ID0gbm93Lmxhc3QgfHwgdGltZTtcbiAgICByZXR1cm4gbm93Lmxhc3QgPSB0aW1lID4gbGFzdCA/IHRpbWUgOiBsYXN0ICsgMTtcbn1cbiIsIi8vIFRoaXMgbW9kdWxlIHJlc3BvbnNhYmlsaXR5IGlzIHRvIHByb3ZpZGUgYSB3YXkgdG8gY3JlYXRlIEhUTUwgRWxlbWVudHMgbW9yZSBlYXNpbHlcbmNsYXNzIEVsZW1lbnR7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudFRhZywgZWxlbWVudENsYXNzLCBlbGVtZW50SWQpe1xuICAgICAgICB0aGlzLmVsZW1lbnRUYWcgPSBlbGVtZW50VGFnO1xuICAgICAgICB0aGlzLmVsZW1lbnRDbGFzcyA9IGVsZW1lbnRDbGFzcztcbiAgICAgICAgdGhpcy5lbGVtZW50SWQgPSBlbGVtZW50SWQ7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtlbGVtZW50VGFnfWApO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHt0aGlzLmVsZW1lbnRDbGFzc31gKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudElkKSB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsYCR7ZWxlbWVudElkfWApO1xuICAgIH1cblxuICAgIGdldCBodG1sRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnQ7IiwiaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9jcmVhdGUtZG9tLWVsZW1lbnQnO1xuaW1wb3J0IHtUYXNrLCBmaW5kVGFzaywgdGFza3N9IGZyb20gJy4vdGFza3MnO1xuXG5cbmZ1bmN0aW9uIGdldEZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IG5ldyBFbGVtZW50KCdmb3JtJywnYWRkLXRhc2stZm9ybScpLmh0bWxFbGVtZW50O1xuXG4gICAgY29uc3QgZm9ybVRvcCA9IGdldEZvcm1Ub3AoKTtcbiAgICBjb25zdCBmb3JtQm90dG9tID0gZ2V0Rm9ybUJvdHRvbSgpO1xuXG4gICAgZm9ybS5hcHBlbmQoZm9ybVRvcCwgZm9ybUJvdHRvbSk7XG5cbiAgICByZXR1cm4gZm9ybTtcbn1cblxuZnVuY3Rpb24gZ2V0Rm9ybVRvcCgpIHtcbiAgICBjb25zdCBmb3JtVG9wID0gbmV3IEVsZW1lbnQoJ2RpdicsICdhZGQtdGFzay1mb3JtLXRvcCcpLmh0bWxFbGVtZW50O1xuICAgIGNvbnN0IHRpdGxlID0gbmV3IEVsZW1lbnQoJ2lucHV0JywgJ2FkZC10YXNrLWlucHV0JywgJ3RpdGxlLWlucHV0JykuaHRtbEVsZW1lbnQ7O1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbmV3IEVsZW1lbnQoJ3RleHRhcmVhJywgJ2FkZC10YXNrLWRlc2NyaXB0aW9uLWxhYmVsJywgJ2Rlc2NyaXB0aW9uLXRleHRhcmVhJykuaHRtbEVsZW1lbnQ7XG5cbiAgICB0aXRsZS52YWx1ZSA9ICd0ZXN0ZSc7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSAndGVzdGUnO1xuXG4gICAgZm9ybVRvcC5hcHBlbmQodGl0bGUsIGRlc2NyaXB0aW9uKTtcblxuICAgIHJldHVybiBmb3JtVG9wO1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtQm90dG9tKCkge1xuICAgIGNvbnN0IGZvcm1Cb3R0b20gPSBuZXcgRWxlbWVudCgnZGl2JywgJ2FkZC10YXNrLWJvdHRvbScpLmh0bWxFbGVtZW50O1xuXG4gICAgY29uc3QgZm9ybUJvdHRvbUxlZnQgPSBnZXRGb3JtQm90dG9tTGVmdCgpO1xuICAgIGNvbnN0IGZvcm1Cb3R0b21SaWdodCA9IGdldEZvcm1Cb3R0b21SaWdodCgpO1xuXG4gICAgZm9ybUJvdHRvbS5hcHBlbmQoZm9ybUJvdHRvbUxlZnQsIGZvcm1Cb3R0b21SaWdodCk7XG5cbiAgICByZXR1cm4gZm9ybUJvdHRvbTtcbn1cblxuZnVuY3Rpb24gZ2V0Rm9ybUJvdHRvbUxlZnQoKSB7XG4gICAgY29uc3QgZm9ybUJvdHRvbUxlZnQgPSBuZXcgRWxlbWVudCgnZGl2JywgJ2FkZC10YXNrLWJvdHRvbS1sZWZ0JykuaHRtbEVsZW1lbnQ7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZ2V0UHJpb3JpdHkoKTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGdldERhdGUoKTtcblxuICAgIGZvcm1Cb3R0b21MZWZ0LmFwcGVuZCh0YXNrRGF0ZSwgdGFza1ByaW9yaXR5KTtcblxuICAgIHJldHVybiBmb3JtQm90dG9tTGVmdDtcbn1cblxuZnVuY3Rpb24gZ2V0Rm9ybUJvdHRvbVJpZ2h0KCkge1xuICAgIGNvbnN0IGZvcm1Cb3R0b21SaWdodCA9IG5ldyBFbGVtZW50KCdkaXYnLCAnZm9ybS10YXNrLWJvdHRvbS1yaWdodCcpLmh0bWxFbGVtZW50O1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IG5ldyBFbGVtZW50ICgnYnV0dG9uJywgJ2NhbmNlbC1idG4nKS5odG1sRWxlbWVudDtcbiAgICBjb25zdCBzYXZlQnRuID0gbmV3IEVsZW1lbnQgKCdidXR0b24nLCAnc2F2ZS1idG4nKS5odG1sRWxlbWVudDtcblxuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG5cbiAgICBmb3JtQm90dG9tUmlnaHQuYXBwZW5kKGNhbmNlbEJ0biwgc2F2ZUJ0bik7XG5cbiAgICByZXR1cm4gZm9ybUJvdHRvbVJpZ2h0XG59XG5cbmZ1bmN0aW9uIGdldERhdGUoKSB7XG4gICAgY29uc3QgdG9kYXlEYXRlID0gbmV3IERhdGUoKS50b0pTT04oKS5zbGljZSgwLDEwKTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBFbGVtZW50KCdpbnB1dCcsICdhZGQtdGFzay1kYXRlJykuaHRtbEVsZW1lbnQ7XG5cbiAgICB0YXNrRGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgIHRhc2tEYXRlLm1pbiA9IHRvZGF5RGF0ZTtcblxuICAgIHJldHVybiB0YXNrRGF0ZTtcbn1cblxuXG5mdW5jdGlvbiBnZXRQcmlvcml0eShjdXJyZW50UHJpb3JpdHkpIHtcbiAgICBjb25zdCBzZWxlY3RDb250YWluZXIgPSBuZXcgRWxlbWVudCgnZGl2JywgJ3NlbGVjdC1wcmlvcml0eS1jb250YWluZXInKS5odG1sRWxlbWVudDtcbiAgICBjb25zdCBzZWxlY3RCdG4gPSBuZXcgRWxlbWVudCgnc2VsZWN0JywgJ3NlbGVjdC1wcmlvcml0eS1idG4nKS5odG1sRWxlbWVudDtcbiAgICBjb25zdCBvcHRpb25IaWdoID0gbmV3IEVsZW1lbnQoJ29wdGlvbicpLmh0bWxFbGVtZW50O1xuICAgIGNvbnN0IG9wdGlvbk1pZCA9IG5ldyBFbGVtZW50KCdvcHRpb24nKS5odG1sRWxlbWVudDtcbiAgICBjb25zdCBvcHRpb25Mb3cgPSBuZXcgRWxlbWVudCgnb3B0aW9uJykuaHRtbEVsZW1lbnQ7XG4gICAgY29uc3QgaWNvbiA9IG5ldyBFbGVtZW50KCdkaXYnLCAncHJpb3JpdHktaWNvbicpLmh0bWxFbGVtZW50O1xuXG4gICAgb3B0aW9uSGlnaC52YWx1ZSA9ICdIaWdoJztcbiAgICBvcHRpb25IaWdoLnRleHRDb250ZW50ID0gJ0hpZ2ggUHJpb3JpdHknXG5cbiAgICBvcHRpb25NaWQudmFsdWUgPSAnTWVkaXVtJztcbiAgICBvcHRpb25NaWQudGV4dENvbnRlbnQgPSAnTWVkaXVtIFByaW9yaXR5JztcblxuICAgIG9wdGlvbkxvdy52YWx1ZSA9ICdMb3cnO1xuICAgIG9wdGlvbkxvdy50ZXh0Q29udGVudCA9ICdMb3cgUHJpb3JpdHknO1xuXG4gICAgb3B0aW9uTWlkLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIGljb24uY2xhc3NMaXN0LmFkZChgJHtjdXJyZW50UHJpb3JpdHl9LXByaW9yaXR5LWljb25gKTtcblxuICAgIHNlbGVjdEJ0bi5hcHBlbmQob3B0aW9uSGlnaCxvcHRpb25NaWQsb3B0aW9uTG93KTtcbiAgICBzZWxlY3RDb250YWluZXIuYXBwZW5kKGljb24sIHNlbGVjdEJ0bik7XG5cbiAgICByZXR1cm4gc2VsZWN0Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBFbGVtZW50KCdkaXYnLCAnYWRkLXRhc2stY29udGFpbmVyJykuaHRtbEVsZW1lbnQ7XG5cbiAgICBjb25zdCBmb3JtID0gZ2V0Rm9ybSgpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChmb3JtKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrOyIsImltcG9ydCBFbGVtZW50IGZyb20gJy4vY3JlYXRlLWRvbS1lbGVtZW50JztcbmltcG9ydCB7VGFzaywgZmluZFRhc2ssIHRhc2tzfSBmcm9tICcuL3Rhc2tzJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmZ1bmN0aW9uIGdldFRhc2tQcmlvcml0eSh0YXNrKXtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBuZXcgVGFza1ByaW9yaXR5KGAke3Rhc2sucHJpb3JpdHl9YCk7XG5cbiAgICByZXR1cm4gdGFza1ByaW9yaXR5LnByaW9yaXR5O1xufVxuXG5jbGFzcyBUYXNrUHJpb3JpdHkge1xuICAgIGNvbnN0cnVjdG9yKHByaW9yaXR5TGV2ZWwpe1xuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBuZXcgRWxlbWVudCgnZGl2JywgJ3Rhc2stcHJpb3JpdHknKS5odG1sRWxlbWVudDtcbiAgICAgICAgdGhpcy5fdGV4dCA9IG5ldyBFbGVtZW50KCdwJywgJ3Rhc2stcHJpb3JpdHktdGV4dCcpLmh0bWxFbGVtZW50O1xuICAgICAgICB0aGlzLl9pY29uID0gbmV3IEVsZW1lbnQoJ2RpdicsICd0YXNrLXByaW9yaXR5LWljb24nKS5odG1sRWxlbWVudDtcblxuICAgICAgICB0aGlzLl90ZXh0LnRleHRDb250ZW50ID0gYCR7cHJpb3JpdHlMZXZlbH0gcHJpb3JpdHlgO1xuICAgICAgICB0aGlzLl9pY29uLmNsYXNzTGlzdC5hZGQoYCR7cHJpb3JpdHlMZXZlbH0tcHJpb3JpdHktaWNvbmApO1xuXG4gICAgICAgIHRoaXMuX3RleHQudGV4dENvbnRlbnQgPSB0aGlzLl90ZXh0LnRleHRDb250ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5fdGV4dC50ZXh0Q29udGVudC5zbGljZSgxKTtcblxuICAgICAgICB0aGlzLl9jb250YWluZXIuYXBwZW5kKHRoaXMuX3RleHQsIHRoaXMuX2ljb24pO1xuICAgIH1cblxuICAgIGdldCBwcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKHRhc2spIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBuZXcgRWxlbWVudCgnZGl2JywndGFzaycpLmh0bWxFbGVtZW50O1xuICAgIGNvbnN0IHRpdGxlID0gbmV3IEVsZW1lbnQoJ3AnLCd0YXNrLXRpdGxlJykuaHRtbEVsZW1lbnQ7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBuZXcgRWxlbWVudCgncCcsICd0YXNrLWRlc2NyaXB0aW9uJykuaHRtbEVsZW1lbnQ7XG4gICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBFbGVtZW50KCdwJywgJ3Rhc2stZHVlLWRhdGUnKS5odG1sRWxlbWVudDtcbiAgICBjb25zdCBkb25lQnRuID0gbmV3IEVsZW1lbnQoJ2J1dHRvbicsICd0YXNrLWRvbmUtYnRuJykuaHRtbEVsZW1lbnQ7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZ2V0VGFza1ByaW9yaXR5KHRhc2spO1xuICAgIGNvbnN0IGVkaXRCdG4gPSBuZXcgRWxlbWVudCgncCcsICd0YXNrLWVkaXQtYnRuJykuaHRtbEVsZW1lbnQ7XG5cbiAgICBjb250YWluZXIuZGF0YXNldC5pZCA9IHRhc2suaWQ7IC8vIFNldCB0aGUgc2FtZSB0YXNrIG9iamVjdCBpZGVudGlmaWVyIGludG8gdGhlIGh0bWxcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcblxuICAgIGNvbnRhaW5lci5hcHBlbmQoZG9uZUJ0biwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCB0YXNrUHJpb3JpdHksIGVkaXRCdG4pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4vLyBIb3cgZG8gd2UgZGlzcGxheSB0aGUgVGFzayBVcGRhdGU/XG5cblxuLyogRmlyc3QgZG8gdGhlIGFkZCBuZXcgdGFza1xuZnVuY3Rpb24gZWRpdFRhc2tFbGVtZW50KHRhc2tJZCkge1xuICAgIGNvbnN0IHRhc2sgPSBmaW5kVGFzayh0YXNrSWQpO1xuICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihbYGRhdGEtaWQ9JHt0YXNrSWR9YF0pO1xuICAgIGNvbnN0XG59XG4qL1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVRhc2s7IiwiLy8gVGhpcyBtb2R1bGUgd2lsbCBjb250YWluIGFsbCB0aGUgdGFza3NcbmltcG9ydCB1bmlxaWQgZnJvbSAndW5pcWlkJzsgLy8gVXNlZCB0aGlzIHBhY2thZ2UgdG8gZ2VuZXJhdGUgdW5pcXVlIElkJ3M7XG5cbi8vIENyZWF0ZSBuZXcgVGFza3NcbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLl9pZCA9IHVuaXFpZCgpO1xuICAgIH1cblxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBcbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICAgIC8vIHZhbGlkYXRpb24gaGVyZSwgcHJvYi5cbiAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgICAgIC8vIHZhbGlkYXRpb24gaGVyZSwgcHJvYi5cbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuICAgIHNldCBkdWVEYXRlKHZhbHVlKSB7XG4gICAgICAgIC8vIHZhbGlkYXRpb24gaGVyZSwgcHJvYi5cbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgICB9XG4gICAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XG4gICAgICAgIC8vIHZhbGlkYXRpb24gaGVyZSwgcHJvYi5cbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IHByb2plY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzXy5wcm9qZWN0O1xuICAgIH1cbiAgICBzZXQgcHJvamVjdCh2YWx1ZSkge1xuICAgICAgICAvLyB2YWxpZGF0aW9uIGhlcmUsIHByb2IuXG4gICAgICAgIHRoaXMuX3Byb2plY3QgPSB2YWx1ZTtcbiAgICB9XG59XG5cbi8vIEVkaXQgVGFzayAvLyBTdGlsbCB0aGlua2luZyBhYm91dCB0aGlzIEZlYXR1cmUsIGl0IG1heSBiZSBiZXR0ZXIgaWYgd2UgY2hhbmdlIGRpcmVjdGx5IHdpdGggZmluZHRhc2ssIHdpdGggRE9NLCB0aGF0IHdheSB3ZSBjYW4gc2V0IGVhY2ggaW5mbyBlcXVhbCB0byB0aGUgdGV4dENvbnRlbnQ7XG5cbi8vIEZpbmQgVGFza1xuZnVuY3Rpb24gZmluZFRhc2sodGFza0lkKXtcbiAgICBjb25zdCBmb3VuZFRhc2sgPSB0YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcbiAgICByZXR1cm4gZm91bmRUYXNrO1xufVxuXG4vLyBUYXNrc1xuY29uc3QgdGFza3MgPSBbXTtcblxuXG5leHBvcnQge1Rhc2ssIGZpbmRUYXNrLCB0YXNrc30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBFbGVtZW50IGZyb20gJy4vY3JlYXRlLWRvbS1lbGVtZW50JztcbmltcG9ydCBkaXNwbGF5VGFzayBmcm9tICcuL2Rpc3BsYXktdGFzayc7XG5pbXBvcnQge1Rhc2ssIGZpbmRUYXNrLCB0YXNrc30gZnJvbSAnLi90YXNrcyc7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL2NyZWF0ZS10YXNrJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmNvbnN0IHRhc2sgPSBuZXcgVGFzaygnQnV5IG15IFAuTyAzMyBLLk8nLCdCdXkgYXMgc29vbiBhcyBwb3NzaWJsZSB0byBtYWtlIHRoZSBiZWF0cyEnLCcxMi80JywnaGlnaCcpOyAvL3RoaXMgd2lsbCB3b3JrIHRocm91Z2ggZXZlbnQgbGlzdGVubmVyO1xuXG5jb25zdCB0YXNrMiA9IG5ldyBUYXNrKCdMZWFybiBESiBTVFVGIScsJ0xlYXJuIHRvIG1ha2UgdGhlIGJlYXRzIScsJzEwLzQnLCdoaWdoJyk7IC8vdGhpcyB3aWxsIHdvcmsgdGhyb3VnaCBldmVudCBsaXN0ZW5uZXI7XG5cbnRhc2tzLnB1c2godGFzayk7IC8vIGRlbGV0ZSBsYXRlclxudGFza3MucHVzaCh0YXNrMik7IC8vIGRlbGV0ZSBsYXRlclxuY29uc29sZS5sb2codGFza3MpOyAvLyBkZWxldGUgbGF0ZXJcblxuLy8gTW92ZSB0aGlzIHRvIHNlcGFyYXRlIG1vZHVsZSBsYXRlclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGlmKCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stZWRpdC1idG4nKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnd29ya3MnKTtcbiAgICB9XG59KVxuLy9cbmNvbnN0IHRlc3QgPSBkaXNwbGF5VGFzayh0YXNrKTtcbmNvbnN0IHRlc3QyID0gY3JlYXRlVGFzaygpO1xuXG5cbmNvbnRlbnQuYXBwZW5kKHRlc3QsdGVzdDIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==