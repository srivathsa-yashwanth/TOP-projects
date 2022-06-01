"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    font-family: 'Poppins', sans-serif;\n}\n\n\nbody{\n    margin:0px;\n}\n\n#whole{\n    display: grid;\n    grid-template: 1fr 6fr / 1fr 5fr;\n    height:100vh;\n    width:100vw;\n}\n\n#header{\n\n    grid-row: 1/2;\n    grid-column: 1/-1;\n    background-color: cornflowerblue;\n    padding: 2%;\n\n    box-sizing: border-box;\n    font-size:40px;\n    font-weight: 700;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\n#sidebar{\n    grid-row:2/-1;\n    grid-column: 1/2;\n    background-color: lightslategray;\n    padding: 10%;\n}\n\n#projects{\n    background-color:lightgrey;\n    display: flex;\n    flex-direction: column;\n    padding: 5%;\n    gap: 40px;\n}\n\n#add_new_project_form{\n    position: fixed;\n    background-color: rgb(151, 58, 58);\n    padding:40px;\n    display: none;\n    flex-direction: column;\n    gap:20px;\n    top:30%;\n    left:45%;\n    border-radius: 10%;\n    border: 1px solid black;\n    \n}\n\n#add_new_task_form{\n    background-color: steelblue;\n    position: fixed;\n    display: none;\n    flex-direction: column;\n    padding:30px;\n    border-radius: 10%;\n    border: 1px solid black;\n    gap:20px;\n    top: 30%;\n    left:40%;\n}\n\n.project{\n    background-color: rgb(99, 180, 231);\n    padding: 30px;\n    border-radius: 30px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.task_box{\n    background-color:rgb(99, 180, 231) ;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding: 20px;\n    border-radius: 30px;\n    border: 2px dashed white;\n\n}\n\n.task{\n    background-color: rgba(144, 238, 144, 0.795);\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    gap: 30px;\n    border-radius: 20px;\n}\n\n#add_new_project{\n    background-color: rgb(84, 214, 208);\n    box-sizing: border-box;\n    padding:15px;\n    width: 80%;\n    font-size: 20px;\n    font-weight: 600;\n    border-radius: 15px;\n    border:1px solid black;\n    box-shadow: 1px 1px ;\n     \n}\n\n.project_title{\n    font-size: 28px;\n    font-weight: 600;\n    justify-self: center;\n    align-self: center;\n}\n\n.project_descr{\n    padding-left: 40px;\n    font-size: 18px;\n}\n\n.project_deadline{\n    align-self: flex-end;\n}\n\n.buttons{\n    display:flex;\n}\n\n.task_add_button{\n    background-color: transparent;\n    font-size: 18px;\n    font-weight: 600;\n    padding: 6px;\n    border-radius: 10px;\n    border: 1px solid black;\n    width: 40%;\n}\n\n.task_add_button:hover{\n    background-color: rgb(48, 112, 11);\n    color:white;\n}\n\n.remove_project_button{\n    background-color: transparent;\n    color:black;\n    font-size: 18px;\n    font-weight: 600;\n    padding: 6px;\n    border-radius: 10px;\n    border: 2px solid red;\n    width: 40%;\n}\n\n.remove_project_button:hover{\n    background-color: red;\n    color:white;\n    \n}\n\n.buttons{\n    display: flex;\n    justify-content: space-around;\n}\n\n.task_title{\n    flex:1;\n    max-width: 20%;\n    font-size: 20px;\n    font-weight: 600;\n    /* border: 1px solid white; */\n\n}\n\n.task_descr{\n    flex:1;\n    max-width: 40%;\n    font-size: 18px;\n    /* border: 1px solid white; */\n\n}\n\n\n\n\n.task_starred{\n    flex:1;\n    max-width: 5%;\n    /* border: 1px solid white; */\n    text-align: center;\n}\n\n\n\n.remove_task_button{\n    font-size: 15px;\n    padding: 6px;\n    border-radius: 10px;\n    border: 1px solid black;\n    margin-right:20px;\n    width: 20%;\n    height: 40px;\n    background-color: rgb(144, 238, 144);\n    color:black;\n    font-weight:600;\n    border: 2px dotted red;\n}\n\n.remove_task_button:hover{\n    background-color: red;\n    color:white;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,kCAAkC;AACtC;;;AAGA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,YAAY;IACZ,WAAW;AACf;;AAEA;;IAEI,aAAa;IACb,iBAAiB;IACjB,gCAAgC;IAChC,WAAW;;IAEX,sBAAsB;IACtB,cAAc;IACd,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,0BAA0B;IAC1B,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,SAAS;AACb;;AAEA;IACI,eAAe;IACf,kCAAkC;IAClC,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,OAAO;IACP,QAAQ;IACR,kBAAkB;IAClB,uBAAuB;;AAE3B;;AAEA;IACI,2BAA2B;IAC3B,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,QAAQ;IACR,QAAQ;IACR,QAAQ;AACZ;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,wBAAwB;;AAE5B;;AAEA;IACI,4CAA4C;IAC5C,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,mCAAmC;IACnC,sBAAsB;IACtB,YAAY;IACZ,UAAU;IACV,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,sBAAsB;IACtB,oBAAoB;;AAExB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,kCAAkC;IAClC,WAAW;AACf;;AAEA;IACI,6BAA6B;IAC7B,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,qBAAqB;IACrB,WAAW;;AAEf;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,MAAM;IACN,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,6BAA6B;;AAEjC;;AAEA;IACI,MAAM;IACN,cAAc;IACd,eAAe;IACf,6BAA6B;;AAEjC;;;;;AAKA;IACI,MAAM;IACN,aAAa;IACb,6BAA6B;IAC7B,kBAAkB;AACtB;;;;AAIA;IACI,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,UAAU;IACV,YAAY;IACZ,oCAAoC;IACpC,WAAW;IACX,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,WAAW;AACf","sourcesContent":["*{\n    font-family: 'Poppins', sans-serif;\n}\n\n\nbody{\n    margin:0px;\n}\n\n#whole{\n    display: grid;\n    grid-template: 1fr 6fr / 1fr 5fr;\n    height:100vh;\n    width:100vw;\n}\n\n#header{\n\n    grid-row: 1/2;\n    grid-column: 1/-1;\n    background-color: cornflowerblue;\n    padding: 2%;\n\n    box-sizing: border-box;\n    font-size:40px;\n    font-weight: 700;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\n#sidebar{\n    grid-row:2/-1;\n    grid-column: 1/2;\n    background-color: lightslategray;\n    padding: 10%;\n}\n\n#projects{\n    background-color:lightgrey;\n    display: flex;\n    flex-direction: column;\n    padding: 5%;\n    gap: 40px;\n}\n\n#add_new_project_form{\n    position: fixed;\n    background-color: rgb(151, 58, 58);\n    padding:40px;\n    display: none;\n    flex-direction: column;\n    gap:20px;\n    top:30%;\n    left:45%;\n    border-radius: 10%;\n    border: 1px solid black;\n    \n}\n\n#add_new_task_form{\n    background-color: steelblue;\n    position: fixed;\n    display: none;\n    flex-direction: column;\n    padding:30px;\n    border-radius: 10%;\n    border: 1px solid black;\n    gap:20px;\n    top: 30%;\n    left:40%;\n}\n\n.project{\n    background-color: rgb(99, 180, 231);\n    padding: 30px;\n    border-radius: 30px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.task_box{\n    background-color:rgb(99, 180, 231) ;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding: 20px;\n    border-radius: 30px;\n    border: 2px dashed white;\n\n}\n\n.task{\n    background-color: rgba(144, 238, 144, 0.795);\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    gap: 30px;\n    border-radius: 20px;\n}\n\n#add_new_project{\n    background-color: rgb(84, 214, 208);\n    box-sizing: border-box;\n    padding:15px;\n    width: 80%;\n    font-size: 20px;\n    font-weight: 600;\n    border-radius: 15px;\n    border:1px solid black;\n    box-shadow: 1px 1px ;\n     \n}\n\n.project_title{\n    font-size: 28px;\n    font-weight: 600;\n    justify-self: center;\n    align-self: center;\n}\n\n.project_descr{\n    padding-left: 40px;\n    font-size: 18px;\n}\n\n.project_deadline{\n    align-self: flex-end;\n}\n\n.buttons{\n    display:flex;\n}\n\n.task_add_button{\n    background-color: transparent;\n    font-size: 18px;\n    font-weight: 600;\n    padding: 6px;\n    border-radius: 10px;\n    border: 1px solid black;\n    width: 40%;\n}\n\n.task_add_button:hover{\n    background-color: rgb(48, 112, 11);\n    color:white;\n}\n\n.remove_project_button{\n    background-color: transparent;\n    color:black;\n    font-size: 18px;\n    font-weight: 600;\n    padding: 6px;\n    border-radius: 10px;\n    border: 2px solid red;\n    width: 40%;\n}\n\n.remove_project_button:hover{\n    background-color: red;\n    color:white;\n    \n}\n\n.buttons{\n    display: flex;\n    justify-content: space-around;\n}\n\n.task_title{\n    flex:1;\n    max-width: 20%;\n    font-size: 20px;\n    font-weight: 600;\n    /* border: 1px solid white; */\n\n}\n\n.task_descr{\n    flex:1;\n    max-width: 40%;\n    font-size: 18px;\n    /* border: 1px solid white; */\n\n}\n\n\n\n\n.task_starred{\n    flex:1;\n    max-width: 5%;\n    /* border: 1px solid white; */\n    text-align: center;\n}\n\n\n\n.remove_task_button{\n    font-size: 15px;\n    padding: 6px;\n    border-radius: 10px;\n    border: 1px solid black;\n    margin-right:20px;\n    width: 20%;\n    height: 40px;\n    background-color: rgb(144, 238, 144);\n    color:black;\n    font-weight:600;\n    border: 2px dotted red;\n}\n\n.remove_task_button:hover{\n    background-color: red;\n    color:white;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectElement": () => (/* binding */ projectElement),
/* harmony export */   "taskElement": () => (/* binding */ taskElement)
/* harmony export */ });


let projectElement = (project)=>{

    // console.log(project);

    let box = document.createElement('div');
    box.classList.add('project');
    box.setAttribute('data-id',project.info.id);

    let project_title = document.createElement('div');
    project_title.classList.add('project_title');
    project_title.textContent = project.info.title;

    let project_descr = document.createElement('div');
    project_descr.classList.add('project_descr');
    project_descr.textContent = project.info.descr;

    let project_deadline = document.createElement('div');
    project_deadline.classList.add('project_deadline');
    project_deadline.textContent = project.info.deadline;

    let taskbox = document.createElement('div');
    taskbox.classList.add('task_box');

    let buttons = document.createElement('div');
    buttons.classList.add('buttons') ;

    let addTaskButton = document.createElement('button');
    addTaskButton.classList.add('task_add_button');
    addTaskButton.textContent = "Add Task"

    let removeButton = document.createElement('button');
    removeButton.classList.add('remove_project_button');
    removeButton.textContent = "Remove Project";

    buttons.appendChild(addTaskButton);
    buttons.appendChild(removeButton);
    

    box.appendChild(project_title);
    box.appendChild(project_descr);
    box.appendChild(project_deadline);
    box.appendChild(taskbox);
    box.appendChild(buttons);

    return box
}

let taskElement = (task)=>{

    let box = document.createElement('div');
    box.classList.add('task');
    box.setAttribute('data-id', task.info.id)

    let task_title = document.createElement('div');
    task_title.textContent = task.info.title;
    task_title.classList.add('task_title');

    let task_descr = document.createElement('div');
    task_descr.textContent = task.info.descr;
    task_descr.classList.add('task_descr');

    let task_status = document.createElement('input');
    task_status.type = 'checkbox';
    task_status.textContent = task.info.status;
    task_status.classList.add('task_status');

    let task_starred = document.createElement('div');
    task_starred.textContent = task.info.starred;
    task_starred.classList.add('task_starred');


    let removeButton = document.createElement('button');
    removeButton.classList.add('remove_task_button');
    removeButton.textContent = 'Remove Task';


    
    box.appendChild(task_status);
    box.appendChild(task_title);
    box.appendChild(task_descr);
    box.appendChild(task_starred);
    box.appendChild(removeButton);

    return box;

}






/***/ }),

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });

let Task = ()=> {
    
    let title = '';
    let descr = '';
    let status = '';
    let starred = '';
    let id = 0;
    let info = {title, descr, id, status, starred};

    const setTask = function(p_title, p_descr,p_id, p_status = false, p_starred = false){
        info.title = p_title;
        info.descr = p_descr;
        info.id = p_id;
        info.status = p_status;
        info.starred = p_starred;
    }

    const printTask = ()=>{
        console.log(`${info.title}, ${info.descr} ,${info.status},${info.starred},${info.id}`)
    }


    return {setTask, printTask, info};
}


let Project = () => {
    let tasks = [];
    let id = Date.now();
    let title = '';
    let descr = '';
    let deadline = '';
    let info = {title, descr, id, deadline}
    
    let addTask = (task)=>{
        task.info.id = tasks.length;
        tasks.push(task);
    }

    let setProject = (p_title, p_descr, p_deadline)=>{
        info.title = p_title;
        info.descr = p_descr;
        info.deadline = p_deadline;
        // console.log('in setproject',info.title, info.descr, info.deadline )
    }

    return {setProject, addTask, info, tasks};
    
}

// let t1 = Task();
// t1.setTask('one','one desctiptin', '3', true, true);
// t1.printTask();




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory.js */ "./src/factory.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");




let projects = [];

let addButton = document.querySelector('#add_new_project');
addButton.onclick = showProjectForm;

let project_submit = document.querySelector('#project_form_submit');
project_submit.onclick = newProject;


let project_close = document.querySelector('#project_form_close');
project_close.onclick = closeProject;


let task_close = document.querySelector('#task_form_close');
task_close.onclick = closeTask;

let project_container = document.querySelector('#projects');



// localStorage.removeItem('previous')

 if (localStorage.getItem('previous') != false){
     project_container.innerHTML = localStorage.getItem('previous')
 }

function showProjectForm(){

    let projectForm = document.querySelector('#add_new_project_form');
    projectForm.style.display = 'flex';
    // console.log('in showform')
}

function closeProject(event){
    event.preventDefault();
    // console.log('in closeProject');

    document.querySelector('#project_input_title').value = '';
    document.querySelector('#project_input_descr').value = '';
    document.querySelector("#project_input_deadline").value = '';

    let projectForm = document.querySelector('#add_new_project_form');
    projectForm.style.display = 'none';
}



function newProject(){
    
    // console.log('entering newProject')
    let elementTitle = document.querySelector('#project_input_title');
    let elementDescr = document.querySelector('#project_input_descr');
    let elementDeadline = document.querySelector("#project_input_deadline");

    let title = elementTitle.value;
    let descr = elementDescr.value;
    let deadline = elementDeadline.value;

    let project = (0,_factory_js__WEBPACK_IMPORTED_MODULE_1__.Project)();
    project.setProject(title, descr, deadline);
    // console.log('created project', project)

    projects.push(project);

    // console.log('exiting newProject')

    drawProjects();

};

function drawProjects(){
    // console.log('enter drawprojecs', projects)
    let project_container = document.querySelector('#projects');
    let project_element = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.projectElement)(projects[projects.length-1]);
    project_container.appendChild(project_element);
    // console.log('exit drawprojects')

    let removeButton = document.querySelectorAll('.remove_project_button')
    // console.log(removeButton)
    for (let i of removeButton){
        i.textContent = 'Delete Project';
        i.onclick = removeProject;
    }

    let addTaskButton = document.querySelectorAll('.task_add_button');
    // console.log(addTaskButton)
    for (let j of addTaskButton){

        j.textContent = 'Add Task';
        j.onclick = showTaskForm;
    }

     localStorage.setItem('previous', project_container.innerHTML);
   
}


function removeProject(event){
    let target = event.target.parentElement.parentElement;
    // console.log(target)
    let target_id = target.getAttribute('data-id');

    for (let i in projects){
        if (projects[i].info.id == target_id){
            projects = projects.splice(i,1);
            break;
        };
    };

    target.remove();

     localStorage.setItem('previous', project_container.innerHTML);

}



function showTaskForm(event){
    let taskForm = document.querySelector('#add_new_task_form');
    taskForm.style.display = 'flex';
    let task_submit = document.querySelector('#task_form_submit');
    task_submit.onclick = newTask.bind(null,event);
    // console.log(task_submit);

}


function newTask(event_old,event_new){

    console.log(1,event_old)
     console.log(2, event_new)
    // event_new.preventDefault();

    let project = event_old.target.parentElement.parentElement;
    let project_id = project.getAttribute('data-id');
    let projectObj = getProjectObj(project_id);

    let elementTitle = document.querySelector('#task_input_title');
    let elementDescr = document.querySelector('#task_input_descr');
    let elementStatus = document.querySelector("#task_input_status");
    let elementStarred = document.querySelector("#task_input_starred");


    let title = elementTitle.value;
    let descr = elementDescr.value;
    let status_val = elementStatus.value;
    let starred = elementStarred.value;

    let task = (0,_factory_js__WEBPACK_IMPORTED_MODULE_1__.Task)();
    task.setTask(title, descr, 0, status_val, starred);
    console.log('new task', task);

    projectObj.addTask(task);

    drawTasks(projectObj);

    
};

function drawTasks(project){
    let project_id = project.info.id;
    let project_element = document.querySelector(`[data-id="${project_id}"]`);
    let taskbox_element = project_element.children[3];

    // console.log('task element', taskbox_element, project, project.tasks);

    let task_element = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.taskElement)(project.tasks[project.tasks.length-1]);
    // console.log(task_element);
    taskbox_element.appendChild(task_element);

    let task_remove_btn = document.querySelectorAll('.remove_task_button');
    for (let p of task_remove_btn){
    p.onclick = removeTask;
    p.textContent = "Delete Task"
    }

    let task_checkbox = document.querySelectorAll('.task_status');
    for (let q of task_checkbox){
        q.onclick = changeStatus;

    }

     localStorage.setItem('previous', project_container.innerHTML);

}

function closeTask(event){
    event.preventDefault();

    document.querySelector('#task_input_title').value = '';
    document.querySelector('#task_input_descr').value = '';
    document.querySelector("#task_input_status").value = '';
    document.querySelector("#task_input_starred").value = '';

    let taskForm = document.querySelector('#add_new_task_form');
    taskForm.style.display = 'none';

}

function removeTask(event){
    let task = event.target.parentElement;
    let project_element = task.parentElement.parentElement;
    let project_obj = getProjectObj(project_element.getAttribute('data-id'))
    let task_id = task.getAttribute('data-id');
    console.log(task,project_element, project_obj)
    project_obj = project_obj.tasks.splice(task_id,1);

    task.remove();

     localStorage.setItem('previous', project_container.innerHTML);

}

function changeStatus(event){
    let checkbox = event.target;
    let task = checkbox.parentElement;
    if (checkbox.checked == true){
        task.style.textDecoration = 'line-through';
    }
    else{
        task.style.textDecoration = 'none';
    }
}


function getProjectObj(project_id){
    for (let i of projects){
        if (i.info.id == project_id){
            return i;
        }
    }
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuYm9keXtcXG4gICAgbWFyZ2luOjBweDtcXG59XFxuXFxuI3dob2xle1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgNmZyIC8gMWZyIDVmcjtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbiAgICB3aWR0aDoxMDB2dztcXG59XFxuXFxuI2hlYWRlcntcXG5cXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOjQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbiNzaWRlYmFye1xcbiAgICBncmlkLXJvdzoyLy0xO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXG4gICAgcGFkZGluZzogMTAlO1xcbn1cXG5cXG4jcHJvamVjdHN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4jYWRkX25ld19wcm9qZWN0X2Zvcm17XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MSwgNTgsIDU4KTtcXG4gICAgcGFkZGluZzo0MHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MjBweDtcXG4gICAgdG9wOjMwJTtcXG4gICAgbGVmdDo0NSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIFxcbn1cXG5cXG4jYWRkX25ld190YXNrX2Zvcm17XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOjMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGdhcDoyMHB4O1xcbiAgICB0b3A6IDMwJTtcXG4gICAgbGVmdDo0MCU7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDE4MCwgMjMxKTtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4udGFza19ib3h7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDk5LCAxODAsIDIzMSkgO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCB3aGl0ZTtcXG5cXG59XFxuXFxuLnRhc2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ0LCAyMzgsIDE0NCwgMC43OTUpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbiNhZGRfbmV3X3Byb2plY3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgMjE0LCAyMDgpO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOjE1cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA7XFxuICAgICBcXG59XFxuXFxuLnByb2plY3RfdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RfZGVzY3J7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ucHJvamVjdF9kZWFkbGluZXtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5idXR0b25ze1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcbi50YXNrX2FkZF9idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA0MCU7XFxufVxcblxcbi50YXNrX2FkZF9idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgMTEyLCAxMSk7XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4ucmVtb3ZlX3Byb2plY3RfYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICAgIHdpZHRoOiA0MCU7XFxufVxcblxcbi5yZW1vdmVfcHJvamVjdF9idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIFxcbn1cXG5cXG4uYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi50YXNrX3RpdGxle1xcbiAgICBmbGV4OjE7XFxuICAgIG1heC13aWR0aDogMjAlO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xcblxcbn1cXG5cXG4udGFza19kZXNjcntcXG4gICAgZmxleDoxO1xcbiAgICBtYXgtd2lkdGg6IDQwJTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgKi9cXG5cXG59XFxuXFxuXFxuXFxuXFxuLnRhc2tfc3RhcnJlZHtcXG4gICAgZmxleDoxO1xcbiAgICBtYXgtd2lkdGg6IDUlO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG4ucmVtb3ZlX3Rhc2tfYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDQsIDIzOCwgMTQ0KTtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcXG4gICAgYm9yZGVyOiAycHggZG90dGVkIHJlZDtcXG59XFxuXFxuLnJlbW92ZV90YXNrX2J1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtDQUFrQztBQUN0Qzs7O0FBR0E7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsV0FBVzs7SUFFWCxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixPQUFPO0lBQ1AsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix3QkFBd0I7O0FBRTVCOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXOztBQUVmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLE1BQU07SUFDTixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw2QkFBNkI7O0FBRWpDOztBQUVBO0lBQ0ksTUFBTTtJQUNOLGNBQWM7SUFDZCxlQUFlO0lBQ2YsNkJBQTZCOztBQUVqQzs7Ozs7QUFLQTtJQUNJLE1BQU07SUFDTixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0Qjs7OztBQUlBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuYm9keXtcXG4gICAgbWFyZ2luOjBweDtcXG59XFxuXFxuI3dob2xle1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgNmZyIC8gMWZyIDVmcjtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbiAgICB3aWR0aDoxMDB2dztcXG59XFxuXFxuI2hlYWRlcntcXG5cXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOjQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbiNzaWRlYmFye1xcbiAgICBncmlkLXJvdzoyLy0xO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXG4gICAgcGFkZGluZzogMTAlO1xcbn1cXG5cXG4jcHJvamVjdHN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4jYWRkX25ld19wcm9qZWN0X2Zvcm17XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MSwgNTgsIDU4KTtcXG4gICAgcGFkZGluZzo0MHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MjBweDtcXG4gICAgdG9wOjMwJTtcXG4gICAgbGVmdDo0NSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIFxcbn1cXG5cXG4jYWRkX25ld190YXNrX2Zvcm17XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOjMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGdhcDoyMHB4O1xcbiAgICB0b3A6IDMwJTtcXG4gICAgbGVmdDo0MCU7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDE4MCwgMjMxKTtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4udGFza19ib3h7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDk5LCAxODAsIDIzMSkgO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCB3aGl0ZTtcXG5cXG59XFxuXFxuLnRhc2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ0LCAyMzgsIDE0NCwgMC43OTUpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbiNhZGRfbmV3X3Byb2plY3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgMjE0LCAyMDgpO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOjE1cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA7XFxuICAgICBcXG59XFxuXFxuLnByb2plY3RfdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RfZGVzY3J7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ucHJvamVjdF9kZWFkbGluZXtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5idXR0b25ze1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcbi50YXNrX2FkZF9idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA0MCU7XFxufVxcblxcbi50YXNrX2FkZF9idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgMTEyLCAxMSk7XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4ucmVtb3ZlX3Byb2plY3RfYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICAgIHdpZHRoOiA0MCU7XFxufVxcblxcbi5yZW1vdmVfcHJvamVjdF9idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIFxcbn1cXG5cXG4uYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi50YXNrX3RpdGxle1xcbiAgICBmbGV4OjE7XFxuICAgIG1heC13aWR0aDogMjAlO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xcblxcbn1cXG5cXG4udGFza19kZXNjcntcXG4gICAgZmxleDoxO1xcbiAgICBtYXgtd2lkdGg6IDQwJTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgKi9cXG5cXG59XFxuXFxuXFxuXFxuXFxuLnRhc2tfc3RhcnJlZHtcXG4gICAgZmxleDoxO1xcbiAgICBtYXgtd2lkdGg6IDUlO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG4ucmVtb3ZlX3Rhc2tfYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDQsIDIzOCwgMTQ0KTtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcXG4gICAgYm9yZGVyOiAycHggZG90dGVkIHJlZDtcXG59XFxuXFxuLnJlbW92ZV90YXNrX2J1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcblxubGV0IHByb2plY3RFbGVtZW50ID0gKHByb2plY3QpPT57XG5cbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0KTtcblxuICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3guY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLHByb2plY3QuaW5mby5pZCk7XG5cbiAgICBsZXQgcHJvamVjdF90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RfdGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdF90aXRsZScpO1xuICAgIHByb2plY3RfdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmluZm8udGl0bGU7XG5cbiAgICBsZXQgcHJvamVjdF9kZXNjciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RfZGVzY3IuY2xhc3NMaXN0LmFkZCgncHJvamVjdF9kZXNjcicpO1xuICAgIHByb2plY3RfZGVzY3IudGV4dENvbnRlbnQgPSBwcm9qZWN0LmluZm8uZGVzY3I7XG5cbiAgICBsZXQgcHJvamVjdF9kZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RfZGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgncHJvamVjdF9kZWFkbGluZScpO1xuICAgIHByb2plY3RfZGVhZGxpbmUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmluZm8uZGVhZGxpbmU7XG5cbiAgICBsZXQgdGFza2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tib3guY2xhc3NMaXN0LmFkZCgndGFza19ib3gnKTtcblxuICAgIGxldCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdidXR0b25zJykgO1xuXG4gICAgbGV0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tfYWRkX2J1dHRvbicpO1xuICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCJcblxuICAgIGxldCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVtb3ZlX3Byb2plY3RfYnV0dG9uJyk7XG4gICAgcmVtb3ZlQnV0dG9uLnRleHRDb250ZW50ID0gXCJSZW1vdmUgUHJvamVjdFwiO1xuXG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XG4gICAgXG5cbiAgICBib3guYXBwZW5kQ2hpbGQocHJvamVjdF90aXRsZSk7XG4gICAgYm94LmFwcGVuZENoaWxkKHByb2plY3RfZGVzY3IpO1xuICAgIGJveC5hcHBlbmRDaGlsZChwcm9qZWN0X2RlYWRsaW5lKTtcbiAgICBib3guYXBwZW5kQ2hpbGQodGFza2JveCk7XG4gICAgYm94LmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuXG4gICAgcmV0dXJuIGJveFxufVxuXG5sZXQgdGFza0VsZW1lbnQgPSAodGFzayk9PntcblxuICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3guY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCB0YXNrLmluZm8uaWQpXG5cbiAgICBsZXQgdGFza190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tfdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLmluZm8udGl0bGU7XG4gICAgdGFza190aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrX3RpdGxlJyk7XG5cbiAgICBsZXQgdGFza19kZXNjciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tfZGVzY3IudGV4dENvbnRlbnQgPSB0YXNrLmluZm8uZGVzY3I7XG4gICAgdGFza19kZXNjci5jbGFzc0xpc3QuYWRkKCd0YXNrX2Rlc2NyJyk7XG5cbiAgICBsZXQgdGFza19zdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tfc3RhdHVzLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIHRhc2tfc3RhdHVzLnRleHRDb250ZW50ID0gdGFzay5pbmZvLnN0YXR1cztcbiAgICB0YXNrX3N0YXR1cy5jbGFzc0xpc3QuYWRkKCd0YXNrX3N0YXR1cycpO1xuXG4gICAgbGV0IHRhc2tfc3RhcnJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tfc3RhcnJlZC50ZXh0Q29udGVudCA9IHRhc2suaW5mby5zdGFycmVkO1xuICAgIHRhc2tfc3RhcnJlZC5jbGFzc0xpc3QuYWRkKCd0YXNrX3N0YXJyZWQnKTtcblxuXG4gICAgbGV0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmVfdGFza19idXR0b24nKTtcbiAgICByZW1vdmVCdXR0b24udGV4dENvbnRlbnQgPSAnUmVtb3ZlIFRhc2snO1xuXG5cbiAgICBcbiAgICBib3guYXBwZW5kQ2hpbGQodGFza19zdGF0dXMpO1xuICAgIGJveC5hcHBlbmRDaGlsZCh0YXNrX3RpdGxlKTtcbiAgICBib3guYXBwZW5kQ2hpbGQodGFza19kZXNjcik7XG4gICAgYm94LmFwcGVuZENoaWxkKHRhc2tfc3RhcnJlZCk7XG4gICAgYm94LmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gYm94O1xuXG59XG5cbmV4cG9ydCB7cHJvamVjdEVsZW1lbnQsIHRhc2tFbGVtZW50fTtcblxuXG4iLCJcbmxldCBUYXNrID0gKCk9PiB7XG4gICAgXG4gICAgbGV0IHRpdGxlID0gJyc7XG4gICAgbGV0IGRlc2NyID0gJyc7XG4gICAgbGV0IHN0YXR1cyA9ICcnO1xuICAgIGxldCBzdGFycmVkID0gJyc7XG4gICAgbGV0IGlkID0gMDtcbiAgICBsZXQgaW5mbyA9IHt0aXRsZSwgZGVzY3IsIGlkLCBzdGF0dXMsIHN0YXJyZWR9O1xuXG4gICAgY29uc3Qgc2V0VGFzayA9IGZ1bmN0aW9uKHBfdGl0bGUsIHBfZGVzY3IscF9pZCwgcF9zdGF0dXMgPSBmYWxzZSwgcF9zdGFycmVkID0gZmFsc2Upe1xuICAgICAgICBpbmZvLnRpdGxlID0gcF90aXRsZTtcbiAgICAgICAgaW5mby5kZXNjciA9IHBfZGVzY3I7XG4gICAgICAgIGluZm8uaWQgPSBwX2lkO1xuICAgICAgICBpbmZvLnN0YXR1cyA9IHBfc3RhdHVzO1xuICAgICAgICBpbmZvLnN0YXJyZWQgPSBwX3N0YXJyZWQ7XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbnRUYXNrID0gKCk9PntcbiAgICAgICAgY29uc29sZS5sb2coYCR7aW5mby50aXRsZX0sICR7aW5mby5kZXNjcn0gLCR7aW5mby5zdGF0dXN9LCR7aW5mby5zdGFycmVkfSwke2luZm8uaWR9YClcbiAgICB9XG5cblxuICAgIHJldHVybiB7c2V0VGFzaywgcHJpbnRUYXNrLCBpbmZvfTtcbn1cblxuXG5sZXQgUHJvamVjdCA9ICgpID0+IHtcbiAgICBsZXQgdGFza3MgPSBbXTtcbiAgICBsZXQgaWQgPSBEYXRlLm5vdygpO1xuICAgIGxldCB0aXRsZSA9ICcnO1xuICAgIGxldCBkZXNjciA9ICcnO1xuICAgIGxldCBkZWFkbGluZSA9ICcnO1xuICAgIGxldCBpbmZvID0ge3RpdGxlLCBkZXNjciwgaWQsIGRlYWRsaW5lfVxuICAgIFxuICAgIGxldCBhZGRUYXNrID0gKHRhc2spPT57XG4gICAgICAgIHRhc2suaW5mby5pZCA9IHRhc2tzLmxlbmd0aDtcbiAgICAgICAgdGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICBsZXQgc2V0UHJvamVjdCA9IChwX3RpdGxlLCBwX2Rlc2NyLCBwX2RlYWRsaW5lKT0+e1xuICAgICAgICBpbmZvLnRpdGxlID0gcF90aXRsZTtcbiAgICAgICAgaW5mby5kZXNjciA9IHBfZGVzY3I7XG4gICAgICAgIGluZm8uZGVhZGxpbmUgPSBwX2RlYWRsaW5lO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW4gc2V0cHJvamVjdCcsaW5mby50aXRsZSwgaW5mby5kZXNjciwgaW5mby5kZWFkbGluZSApXG4gICAgfVxuXG4gICAgcmV0dXJuIHtzZXRQcm9qZWN0LCBhZGRUYXNrLCBpbmZvLCB0YXNrc307XG4gICAgXG59XG5cbi8vIGxldCB0MSA9IFRhc2soKTtcbi8vIHQxLnNldFRhc2soJ29uZScsJ29uZSBkZXNjdGlwdGluJywgJzMnLCB0cnVlLCB0cnVlKTtcbi8vIHQxLnByaW50VGFzaygpO1xuXG5cbmV4cG9ydCB7VGFzaywgUHJvamVjdH07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7VGFzaywgUHJvamVjdH0gZnJvbSAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCB7IHByb2plY3RFbGVtZW50LCB0YXNrRWxlbWVudCB9IGZyb20gXCIuL2RvbS5qc1wiO1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcblxubGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRfbmV3X3Byb2plY3QnKTtcbmFkZEJ1dHRvbi5vbmNsaWNrID0gc2hvd1Byb2plY3RGb3JtO1xuXG5sZXQgcHJvamVjdF9zdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdF9mb3JtX3N1Ym1pdCcpO1xucHJvamVjdF9zdWJtaXQub25jbGljayA9IG5ld1Byb2plY3Q7XG5cblxubGV0IHByb2plY3RfY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdF9mb3JtX2Nsb3NlJyk7XG5wcm9qZWN0X2Nsb3NlLm9uY2xpY2sgPSBjbG9zZVByb2plY3Q7XG5cblxubGV0IHRhc2tfY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19mb3JtX2Nsb3NlJyk7XG50YXNrX2Nsb3NlLm9uY2xpY2sgPSBjbG9zZVRhc2s7XG5cbmxldCBwcm9qZWN0X2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xuXG5cblxuLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3ByZXZpb3VzJylcblxuIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJldmlvdXMnKSAhPSBmYWxzZSl7XG4gICAgIHByb2plY3RfY29udGFpbmVyLmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmV2aW91cycpXG4gfVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdEZvcm0oKXtcblxuICAgIGxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRfbmV3X3Byb2plY3RfZm9ybScpO1xuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgLy8gY29uc29sZS5sb2coJ2luIHNob3dmb3JtJylcbn1cblxuZnVuY3Rpb24gY2xvc2VQcm9qZWN0KGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbiBjbG9zZVByb2plY3QnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0X2lucHV0X3RpdGxlJykudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdF9pbnB1dF9kZXNjcicpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0X2lucHV0X2RlYWRsaW5lXCIpLnZhbHVlID0gJyc7XG5cbiAgICBsZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkX25ld19wcm9qZWN0X2Zvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5cblxuZnVuY3Rpb24gbmV3UHJvamVjdCgpe1xuICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKCdlbnRlcmluZyBuZXdQcm9qZWN0JylcbiAgICBsZXQgZWxlbWVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RfaW5wdXRfdGl0bGUnKTtcbiAgICBsZXQgZWxlbWVudERlc2NyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RfaW5wdXRfZGVzY3InKTtcbiAgICBsZXQgZWxlbWVudERlYWRsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0X2lucHV0X2RlYWRsaW5lXCIpO1xuXG4gICAgbGV0IHRpdGxlID0gZWxlbWVudFRpdGxlLnZhbHVlO1xuICAgIGxldCBkZXNjciA9IGVsZW1lbnREZXNjci52YWx1ZTtcbiAgICBsZXQgZGVhZGxpbmUgPSBlbGVtZW50RGVhZGxpbmUudmFsdWU7XG5cbiAgICBsZXQgcHJvamVjdCA9IFByb2plY3QoKTtcbiAgICBwcm9qZWN0LnNldFByb2plY3QodGl0bGUsIGRlc2NyLCBkZWFkbGluZSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0ZWQgcHJvamVjdCcsIHByb2plY3QpXG5cbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2V4aXRpbmcgbmV3UHJvamVjdCcpXG5cbiAgICBkcmF3UHJvamVjdHMoKTtcblxufTtcblxuZnVuY3Rpb24gZHJhd1Byb2plY3RzKCl7XG4gICAgLy8gY29uc29sZS5sb2coJ2VudGVyIGRyYXdwcm9qZWNzJywgcHJvamVjdHMpXG4gICAgbGV0IHByb2plY3RfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG4gICAgbGV0IHByb2plY3RfZWxlbWVudCA9IHByb2plY3RFbGVtZW50KHByb2plY3RzW3Byb2plY3RzLmxlbmd0aC0xXSk7XG4gICAgcHJvamVjdF9jb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdF9lbGVtZW50KTtcbiAgICAvLyBjb25zb2xlLmxvZygnZXhpdCBkcmF3cHJvamVjdHMnKVxuXG4gICAgbGV0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmVfcHJvamVjdF9idXR0b24nKVxuICAgIC8vIGNvbnNvbGUubG9nKHJlbW92ZUJ1dHRvbilcbiAgICBmb3IgKGxldCBpIG9mIHJlbW92ZUJ1dHRvbil7XG4gICAgICAgIGkudGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xuICAgICAgICBpLm9uY2xpY2sgPSByZW1vdmVQcm9qZWN0O1xuICAgIH1cblxuICAgIGxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tfYWRkX2J1dHRvbicpO1xuICAgIC8vIGNvbnNvbGUubG9nKGFkZFRhc2tCdXR0b24pXG4gICAgZm9yIChsZXQgaiBvZiBhZGRUYXNrQnV0dG9uKXtcblxuICAgICAgICBqLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgICAgICAgai5vbmNsaWNrID0gc2hvd1Rhc2tGb3JtO1xuICAgIH1cblxuICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJldmlvdXMnLCBwcm9qZWN0X2NvbnRhaW5lci5pbm5lckhUTUwpO1xuICAgXG59XG5cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChldmVudCl7XG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgLy8gY29uc29sZS5sb2codGFyZ2V0KVxuICAgIGxldCB0YXJnZXRfaWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICBmb3IgKGxldCBpIGluIHByb2plY3RzKXtcbiAgICAgICAgaWYgKHByb2plY3RzW2ldLmluZm8uaWQgPT0gdGFyZ2V0X2lkKXtcbiAgICAgICAgICAgIHByb2plY3RzID0gcHJvamVjdHMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgdGFyZ2V0LnJlbW92ZSgpO1xuXG4gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmV2aW91cycsIHByb2plY3RfY29udGFpbmVyLmlubmVySFRNTCk7XG5cbn1cblxuXG5cbmZ1bmN0aW9uIHNob3dUYXNrRm9ybShldmVudCl7XG4gICAgbGV0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZF9uZXdfdGFza19mb3JtJyk7XG4gICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBsZXQgdGFza19zdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19mb3JtX3N1Ym1pdCcpO1xuICAgIHRhc2tfc3VibWl0Lm9uY2xpY2sgPSBuZXdUYXNrLmJpbmQobnVsbCxldmVudCk7XG4gICAgLy8gY29uc29sZS5sb2codGFza19zdWJtaXQpO1xuXG59XG5cblxuZnVuY3Rpb24gbmV3VGFzayhldmVudF9vbGQsZXZlbnRfbmV3KXtcblxuICAgIGNvbnNvbGUubG9nKDEsZXZlbnRfb2xkKVxuICAgICBjb25zb2xlLmxvZygyLCBldmVudF9uZXcpXG4gICAgLy8gZXZlbnRfbmV3LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgcHJvamVjdCA9IGV2ZW50X29sZC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGxldCBwcm9qZWN0X2lkID0gcHJvamVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBsZXQgcHJvamVjdE9iaiA9IGdldFByb2plY3RPYmoocHJvamVjdF9pZCk7XG5cbiAgICBsZXQgZWxlbWVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfaW5wdXRfdGl0bGUnKTtcbiAgICBsZXQgZWxlbWVudERlc2NyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfaW5wdXRfZGVzY3InKTtcbiAgICBsZXQgZWxlbWVudFN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza19pbnB1dF9zdGF0dXNcIik7XG4gICAgbGV0IGVsZW1lbnRTdGFycmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrX2lucHV0X3N0YXJyZWRcIik7XG5cblxuICAgIGxldCB0aXRsZSA9IGVsZW1lbnRUaXRsZS52YWx1ZTtcbiAgICBsZXQgZGVzY3IgPSBlbGVtZW50RGVzY3IudmFsdWU7XG4gICAgbGV0IHN0YXR1c192YWwgPSBlbGVtZW50U3RhdHVzLnZhbHVlO1xuICAgIGxldCBzdGFycmVkID0gZWxlbWVudFN0YXJyZWQudmFsdWU7XG5cbiAgICBsZXQgdGFzayA9IFRhc2soKTtcbiAgICB0YXNrLnNldFRhc2sodGl0bGUsIGRlc2NyLCAwLCBzdGF0dXNfdmFsLCBzdGFycmVkKTtcbiAgICBjb25zb2xlLmxvZygnbmV3IHRhc2snLCB0YXNrKTtcblxuICAgIHByb2plY3RPYmouYWRkVGFzayh0YXNrKTtcblxuICAgIGRyYXdUYXNrcyhwcm9qZWN0T2JqKTtcblxuICAgIFxufTtcblxuZnVuY3Rpb24gZHJhd1Rhc2tzKHByb2plY3Qpe1xuICAgIGxldCBwcm9qZWN0X2lkID0gcHJvamVjdC5pbmZvLmlkO1xuICAgIGxldCBwcm9qZWN0X2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7cHJvamVjdF9pZH1cIl1gKTtcbiAgICBsZXQgdGFza2JveF9lbGVtZW50ID0gcHJvamVjdF9lbGVtZW50LmNoaWxkcmVuWzNdO1xuXG4gICAgLy8gY29uc29sZS5sb2coJ3Rhc2sgZWxlbWVudCcsIHRhc2tib3hfZWxlbWVudCwgcHJvamVjdCwgcHJvamVjdC50YXNrcyk7XG5cbiAgICBsZXQgdGFza19lbGVtZW50ID0gdGFza0VsZW1lbnQocHJvamVjdC50YXNrc1twcm9qZWN0LnRhc2tzLmxlbmd0aC0xXSk7XG4gICAgLy8gY29uc29sZS5sb2codGFza19lbGVtZW50KTtcbiAgICB0YXNrYm94X2VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza19lbGVtZW50KTtcblxuICAgIGxldCB0YXNrX3JlbW92ZV9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlX3Rhc2tfYnV0dG9uJyk7XG4gICAgZm9yIChsZXQgcCBvZiB0YXNrX3JlbW92ZV9idG4pe1xuICAgIHAub25jbGljayA9IHJlbW92ZVRhc2s7XG4gICAgcC50ZXh0Q29udGVudCA9IFwiRGVsZXRlIFRhc2tcIlxuICAgIH1cblxuICAgIGxldCB0YXNrX2NoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tfc3RhdHVzJyk7XG4gICAgZm9yIChsZXQgcSBvZiB0YXNrX2NoZWNrYm94KXtcbiAgICAgICAgcS5vbmNsaWNrID0gY2hhbmdlU3RhdHVzO1xuXG4gICAgfVxuXG4gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmV2aW91cycsIHByb2plY3RfY29udGFpbmVyLmlubmVySFRNTCk7XG5cbn1cblxuZnVuY3Rpb24gY2xvc2VUYXNrKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfaW5wdXRfdGl0bGUnKS52YWx1ZSA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrX2lucHV0X2Rlc2NyJykudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tfaW5wdXRfc3RhdHVzXCIpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrX2lucHV0X3N0YXJyZWRcIikudmFsdWUgPSAnJztcblxuICAgIGxldCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRfbmV3X3Rhc2tfZm9ybScpO1xuICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFzayhldmVudCl7XG4gICAgbGV0IHRhc2sgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBsZXQgcHJvamVjdF9lbGVtZW50ID0gdGFzay5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IHByb2plY3Rfb2JqID0gZ2V0UHJvamVjdE9iaihwcm9qZWN0X2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpXG4gICAgbGV0IHRhc2tfaWQgPSB0YXNrLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIGNvbnNvbGUubG9nKHRhc2sscHJvamVjdF9lbGVtZW50LCBwcm9qZWN0X29iailcbiAgICBwcm9qZWN0X29iaiA9IHByb2plY3Rfb2JqLnRhc2tzLnNwbGljZSh0YXNrX2lkLDEpO1xuXG4gICAgdGFzay5yZW1vdmUoKTtcblxuICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJldmlvdXMnLCBwcm9qZWN0X2NvbnRhaW5lci5pbm5lckhUTUwpO1xuXG59XG5cbmZ1bmN0aW9uIGNoYW5nZVN0YXR1cyhldmVudCl7XG4gICAgbGV0IGNoZWNrYm94ID0gZXZlbnQudGFyZ2V0O1xuICAgIGxldCB0YXNrID0gY2hlY2tib3gucGFyZW50RWxlbWVudDtcbiAgICBpZiAoY2hlY2tib3guY2hlY2tlZCA9PSB0cnVlKXtcbiAgICAgICAgdGFzay5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICB0YXNrLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0T2JqKHByb2plY3RfaWQpe1xuICAgIGZvciAobGV0IGkgb2YgcHJvamVjdHMpe1xuICAgICAgICBpZiAoaS5pbmZvLmlkID09IHByb2plY3RfaWQpe1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==