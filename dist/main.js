/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  font-family:'Courier New', Courier, monospace;\n  box-sizing: border-box;\n}\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n  margin-bottom: 10px;\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #eee;\n}\n\n.main-content {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  padding: 4px;\n  flex: 1 1 auto;\n}\n\n.user-area, .computer-area, .user-name, .computer-name {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-family: inherit;\n  padding: 4px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.user-board, .computer-board, .start-board {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  background: white;\n  margin: 10px;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 auto;\n}\n\n.cell {\n  display: flex;\n  flex: 1 1 auto;\n  height: 32px;\n  width: 32px;\n  margin: 2px;\n  background-color: blue;\n}\n\n.ship {\n  display: inline;\n  height: 32px;\n  width: 32px;\n  margin: 2px;\n  background-color: rgb(240, 221, 116);\n  box-shadow: 2px 3px 5px #999;\n}\n\n.hit {\n  display: inline;\n  display: flex;\n  height: 32px;\n  width: 32px;\n  margin: 2px;\n  background-color: red;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 5px 5px -5px inset,\n  rgba(0, 0, 0, 0.3) 0px 5px 5px -5px inset;\n}\n\n.missed {\n  display: inline;\n  display: flex;\n  height: 32px;\n  width: 32px;\n  margin: 2px;\n  background-color: #4CAF50;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 5px 5px -5px inset,\n  rgba(0, 0, 0, 0.3) 0px 5px 5px -5px inset;\n}\n\n.clickable {\n  cursor: crosshair;\n}\n\n.clickable:hover {\n  background-color: #fff;\n}\n\n.placable {\n  cursor: pointer;\n}\n\n.target-zone {\n  background-color: #fff;\n  box-shadow: 5px 5px 5px #999;\n}\n\n.nonplacable {\n  cursor: no-drop;\n}\n\n.game-over {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  text-align: center;\n  margin: auto;\n  width: 50vw;\n}\n\n.battle-log {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  text-align: left;\n  margin: auto;\n  width: 600px;\n  height: 200px;\n  max-width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  overflow: auto;\n  border-radius: 4px;\n  border: none;\n}\n\nli {\n  font-family: inherit;\n  font-size: 18px;\n}\n\n.modal-container {\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.2);\n  padding: 20px;\n  pointer-events: none;\n  opacity: 0;\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  width: 600px;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center;\n}\n\n.modal-container.visible {\n  opacity: 1;\n  pointer-events: auto;\n}\n\nbutton {\n  background-color: #4CAF50;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  padding: 8px 15px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n\nbutton:hover {\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,\n  rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\n}\n\ninput {\n  -webkit-appearance: none;\n  appearance: none;\n  border: 1px solid #333;\n  margin: auto;\n  font-family: inherit;\n  font-size: 90%;\n  padding: 6px 15px;\n  font-size: 16px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,6CAA6C;EAC7C,sBAAsB;AACxB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,oCAAoC;EACpC,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,uBAAuB;EACvB,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,YAAY;EACZ,WAAW;EACX,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,WAAW;EACX,oCAAoC;EACpC,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,aAAa;EACb,YAAY;EACZ,WAAW;EACX,WAAW;EACX,qBAAqB;EACrB,mBAAmB;EACnB,uBAAuB;EACvB;2CACyC;AAC3C;;AAEA;EACE,eAAe;EACf,aAAa;EACb,YAAY;EACZ,WAAW;EACX,WAAW;EACX,yBAAyB;EACzB,mBAAmB;EACnB,uBAAuB;EACvB;2CACyC;AAC3C;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,eAAe;EACf,oCAAoC;EACpC,cAAc;EACd,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,MAAM;EACN,OAAO;EACP,aAAa;EACb,YAAY;EACZ,oCAAoC;EACpC,aAAa;EACb,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE;8CAC4C;AAC9C;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;EACZ,oBAAoB;EACpB,cAAc;EACd,iBAAiB;EACjB,eAAe;AACjB","sourcesContent":["html {\n  font-family:'Courier New', Courier, monospace;\n  box-sizing: border-box;\n}\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n  margin-bottom: 10px;\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #eee;\n}\n\n.main-content {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  padding: 4px;\n  flex: 1 1 auto;\n}\n\n.user-area, .computer-area, .user-name, .computer-name {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-family: inherit;\n  padding: 4px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.user-board, .computer-board, .start-board {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  background: white;\n  margin: 10px;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 auto;\n}\n\n.cell {\n  display: flex;\n  flex: 1 1 auto;\n  height: 32px;\n  width: 32px;\n  margin: 2px;\n  background-color: blue;\n}\n\n.ship {\n  display: inline;\n  height: 32px;\n  width: 32px;\n  margin: 2px;\n  background-color: rgb(240, 221, 116);\n  box-shadow: 2px 3px 5px #999;\n}\n\n.hit {\n  display: inline;\n  display: flex;\n  height: 32px;\n  width: 32px;\n  margin: 2px;\n  background-color: red;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 5px 5px -5px inset,\n  rgba(0, 0, 0, 0.3) 0px 5px 5px -5px inset;\n}\n\n.missed {\n  display: inline;\n  display: flex;\n  height: 32px;\n  width: 32px;\n  margin: 2px;\n  background-color: #4CAF50;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 5px 5px -5px inset,\n  rgba(0, 0, 0, 0.3) 0px 5px 5px -5px inset;\n}\n\n.clickable {\n  cursor: crosshair;\n}\n\n.clickable:hover {\n  background-color: #fff;\n}\n\n.placable {\n  cursor: pointer;\n}\n\n.target-zone {\n  background-color: #fff;\n  box-shadow: 5px 5px 5px #999;\n}\n\n.nonplacable {\n  cursor: no-drop;\n}\n\n.game-over {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  text-align: center;\n  margin: auto;\n  width: 50vw;\n}\n\n.battle-log {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  text-align: left;\n  margin: auto;\n  width: 600px;\n  height: 200px;\n  max-width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  overflow: auto;\n  border-radius: 4px;\n  border: none;\n}\n\nli {\n  font-family: inherit;\n  font-size: 18px;\n}\n\n.modal-container {\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.2);\n  padding: 20px;\n  pointer-events: none;\n  opacity: 0;\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  width: 600px;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center;\n}\n\n.modal-container.visible {\n  opacity: 1;\n  pointer-events: auto;\n}\n\nbutton {\n  background-color: #4CAF50;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  padding: 8px 15px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n\nbutton:hover {\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,\n  rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\n}\n\ninput {\n  -webkit-appearance: none;\n  appearance: none;\n  border: 1px solid #333;\n  margin: auto;\n  font-family: inherit;\n  font-size: 90%;\n  padding: 6px 15px;\n  font-size: 16px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderUserBoard": () => (/* binding */ renderUserBoard),
/* harmony export */   "renderComputerBoard": () => (/* binding */ renderComputerBoard),
/* harmony export */   "resetDisplay": () => (/* binding */ resetDisplay),
/* harmony export */   "updateLog": () => (/* binding */ updateLog),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "renderStartBoard": () => (/* binding */ renderStartBoard),
/* harmony export */   "displayGameOver": () => (/* binding */ displayGameOver),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");








const init = () => {
  const newBtn = document.querySelector('#newGame');
  newBtn.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_0__.newGame);
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.newGame)();
}

const renderUserBoard = (user) => {
  const userBoard = document.querySelector('#userBoard');
  userBoard.innerHTML = '';
  user.board.array.forEach((element, i) => {
    let row = document.createElement('div')
    row.classList.add('row')
    row.setAttribute('id', `${i}`)
    element.forEach((element, j) => {
      let cell = document.createElement('div')
      if (!element.isHit && !element.isMissed) {
        cell.classList.add('cell')
      }
      if (element.hasShip) {
        cell.classList.add('ship')
      }
      if (element.isHit) {
        cell.classList.add('hit')
        cell.innerHTML = '&#9673'
      }
      if (element.isMissed) {
        cell.classList.add('missed')
        cell.innerHTML = '&#9673'
      }
      cell.setAttribute('id', `${j}`)
      row.appendChild(cell)
    })
    userBoard.appendChild(row)
  })

  const userName = document.querySelector('#userName')
  userName.textContent = user.name;
}

const renderComputerBoard = (computer) => {
  const computerBoard = document.querySelector('#computerBoard');
  computerBoard.innerHTML = '';
  computer.board.array.forEach((element, i) => {
    let row = document.createElement('div')
    row.classList.add('row')
    row.setAttribute('id', `${i}`)
    element.forEach((element, j) => {
      let cell = document.createElement('div')
      if (!element.isHit && !element.isMissed) {
        cell.classList.add('cell')
      }
      if (element.isHit) {
        cell.classList.add('hit')
        cell.innerHTML = '&#9673'
      }
      if (element.isMissed) {
        cell.classList.add('missed')
        cell.innerHTML = '&#9673'
      }
      cell.classList.add('clickable')
      cell.setAttribute('id', `${j}`)
      cell.setAttribute('data-cell', `${i}-${j}`)
      row.appendChild(cell)
    })
    computerBoard.appendChild(row)
  })

  const computerName = document.querySelector('#computerName')
  computerName.textContent = computer.name;

  const cells = document.querySelectorAll('[data-cell]')
  cells.forEach((cell) => {
    cell.addEventListener('click', cellClick, false)
  })
}

const resetDisplay = () => {
  const userBoard = document.querySelector('#userBoard')
  const userName = document. querySelector('#userName')
  const computerBoard = document.querySelector('#computerBoard')
  const computerName = document.querySelector('#computerName')
  const gameOver = document.querySelector('#gameOver');

  userBoard.innerHTML = ''
  userName.textContent = ''
  computerBoard.innerHTML = ''
  computerName.textContent = ''
  gameOver.innerHTML = ''
}

const openModal = () => {
  const modal = document.querySelector('.modal-container');
  modal.classList.toggle('visible');
  const directionBtn = document.querySelector('#direction');
  directionBtn.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_0__.toggleDirection);
  directionBtn.addEventListener('click', () => {
    directionBtn.textContent = (_index_js__WEBPACK_IMPORTED_MODULE_0__.direction === 'horizontal') ? 'Horizontal' : 'Vertical';
  })
  const start = document.getElementById('startGame');
  start.addEventListener('submit', handleStart);
}

const closeModal = () => {
  const modal = document.querySelector('.modal-container');
  modal.classList.toggle('visible'); 
}

const handleStart = (e) => {
  e.stopPropagation();
  e.preventDefault();
  const dataForm = new FormData(e.target)
  const name = dataForm.get('name')
  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.shipsPlaced === 5 && name != '') {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.startGame)(name);
  }
}

const renderStartBoard = (user) => {
  const startBoard = document.querySelector('#startBoard')
  startBoard.innerHTML = '';
  user.board.array.forEach((element, i) => {
    let row = document.createElement('div')
    row.classList.add('row')
    row.setAttribute('id', `${i}`)
    element.forEach((element, j) => {
      let cell = document.createElement('div')
      cell.classList.add('cell')
      cell.classList.add('placable')
      if (element.hasShip) {
        cell.classList.add('ship')
      }
      cell.setAttribute('id', `${j}`)
      cell.setAttribute('data-id', `${i}-${j}`)
      row.appendChild(cell)
    })
    startBoard.appendChild(row)
  })

  const cells = document.querySelectorAll('[data-id]');
  cells.forEach((cell) => {
    cell.addEventListener('mouseenter', hoverOn)
    cell.addEventListener('mouseleave', hoverOff)
    cell.addEventListener('click', handlePlacement, false)
  })
}

const hoverOn = (e) => {
  e.preventDefault();
  e.stopPropagation();

  let target = e.target;
  let x = parseInt(target.id);
  let y = parseInt(target.parentElement.id);
  let length;

  switch (_index_js__WEBPACK_IMPORTED_MODULE_0__.shipsPlaced) {
    case 0:
      length = 5;
      break;
    case 1:
      length = 4;
      break;
    case 2:
      length = 3;
      break;
    case 3:
      length = 3;
      break;
    case 4:
      length = 2;
      break;
  }

  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.direction === 'horizontal') {
    for (let i = x; i < x + length; i++) {
      let cell = document.querySelector(`[data-id="${y}-${i}"]`);
      if (cell === null) return;
      cell.classList.add('target-zone');
    }
  }
  
  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.direction === 'vertical') {
    for (let i = y; i < y + length; i++) {
      let cell = document.querySelector(`[data-id="${i}-${x}"]`);
      if (cell === null) return;
      cell.classList.add('target-zone');
    }
  }
}

const hoverOff = (e) => {
  e.preventDefault();
  e.stopPropagation();

  let target = e.target;
  let x = parseInt(target.id);
  let y = parseInt(target.parentElement.id);
  let length;

  switch (_index_js__WEBPACK_IMPORTED_MODULE_0__.shipsPlaced) {
    case 0:
      length = 5;
      break;
    case 1:
      length = 4;
      break;
    case 2:
      length = 3;
      break;
    case 3:
      length = 3;
      break;
    case 4:
      length = 2;
      break;
  }

  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.direction === 'horizontal') {
    for (let i = x; i < x + length; i++) {
      let cell = document.querySelector(`[data-id="${y}-${i}"]`);
      if (cell === null) return;
      cell.classList.remove('target-zone');
    }
  }
  
  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.direction === 'vertical') {
    for (let i = y; i < y + length; i++) {
      let cell = document.querySelector(`[data-id="${i}-${x}"]`);
      if (cell === null) return;
      cell.classList.remove('target-zone');
    }
  }
}

const handlePlacement = (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.shipsPlaced === 5) return;

  let target = e.target;
  let x = parseInt(target.id); 
  let y = parseInt(target.parentElement.id);

  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.placeShips)([y, x])
}

const cellClick = (e) => {
  e.preventDefault();
  e.stopPropagation();

  let target = e.target;
  let x = parseInt(target.id); 
  let y = parseInt(target.parentElement.id);
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.userTurn)([y, x]);
}

const updateLog = (battleLog) => {
  let ul = document.querySelector('.battle-log ul');
  ul.innerHTML = '';
  let df = document.createDocumentFragment();
  battleLog.forEach((entry) => {
    let li = document.createElement('li');
    li.innerText = entry;
    df.appendChild(li);
  })
  ul.appendChild(df);
}

const displayGameOver = () => {
  const gameOver = document.querySelector('#gameOver');
  gameOver.innerHTML = `
  <iframe src="https://giphy.com/embed/5xzjWHwBea0LK" width="480" height="359" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  <p>
    <a href="https://giphy.com/gifs/5xzjWHwBea0LK">via GIPHY</a>
  </p>
  `
}



/***/ }),

/***/ "./src/factories/gameBoard.js":
/*!************************************!*\
  !*** ./src/factories/gameBoard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/factories/ship.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers.js */ "./src/helpers/helpers.js");



const createBoard = () => {
  const board = {}

  //create 10x10 2D array
  board.array = [];
  for (let i = 0; i <= 9; i++) {
    board.array.push(new Array)
    for (let j = 0; j <= 9; j++) {
      board.array[i].push({
        hasShip: false,
        isHit: false,
        isMissed: false,
        shipType: undefined,
      })
    }
  };

  board.fleet = [];

  board.placeShip = function(y, x, direction, ship) {
    //check if placement obeys board rules
    if (!this.isPlacementValid(y, x, direction, ship.length)) return false;

    //push ship object to fleet array
    this.fleet.push((0,_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ship.length, ship.type))
    
    //mark board spaces
    if (direction === 'horizontal') {
      for (let i = x; i < x + ship.length; i++) {
        this.array[y][i].hasShip = true;
        this.array[y][i].shipType = ship.type;
      }
    }

    if (direction === 'vertical') {
      for (let i = y; i < y + ship.length; i++) {
        this.array[i][x].hasShip = true;
        this.array[i][x].shipType = ship.type;
      }
    }

    return true;
  };

  board.receiveAttack = function(y, x) {
    //check if space has ship
    if (this.array[y][x].hasShip == true) {
      //record hit on ship object
      let type = this.array[y][x].shipType;
      let index = this.findShip(type);
      this.fleet[index].hit();
      let sunk = this.fleet[index].isSunk();

      //record hit on board array
      this.array[y][x].isHit = true;

      if (sunk) return `sunk ${this.fleet[index].type} at ${[y, x]}`
      return `hit at ${[y, x]}`;
    } else {
      this.array[y][x].isMissed = true;
      return `miss at ${[y, x]}`;
    }
  };

  board.findShip = function(type) {
    return this.fleet.indexOf(this.fleet.find((ship) => ship.type == type))
  };

  board.isFleetSunk = function() {
    return this.fleet.every((ship) => ship.status == 'sunk')
  };

  board.isPlacementValid = function(y, x, direction, length) {
    const a = isNaN(y);
    const b = isNaN(x);
    if (a || b ) return false;
    if (y < 0 || y > 9 || x < 0 || x > 9) return false;

    if (direction === 'horizontal') {
      if (x + length - 1 > 9) return false;
      for (let i = x; i < x + length; i++) {
        if (this.array[y][i].hasShip === true) return false;
      }
    } 
    
    if (direction === 'vertical') {
      if (y + length - 1 > 9) return false;
      for (let i = y; i < y + length; i++) {
        if (this.array[i][x].hasShip === true) return false;
      }
    }
    
    return true;
  };

  board.populateBoard = function() {
    const ships = [
      { length: 5, type: 'carrier' },
      { length: 4, type: 'battleship' },
      { length: 3, type: 'submarine' },
      { length: 3, type: 'destroyer' },
      { length: 2, type: 'patrol boat' },
    ]

    let coords = (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    let direction = 'horizontal'

    ships.forEach((ship) => {
      while (!this.placeShip(coords[0], coords[1], direction, ship)) {
        coords = (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        direction = Math.floor(Math.random() * 2) === 1 ? 'vertical' : 'horizontal';
      }
    })
  };

  return board;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBoard);

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard.js */ "./src/factories/gameBoard.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers.js */ "./src/helpers/helpers.js");



const createPlayer = (type, name) => {
  const player = {}
  player.type = type;
  player.name = name;
  player.isActive = false;
  player.board = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  player.moves = [];

  player.attack = function(board, y, x) {
    //check for reapeat moves
    if (this.isRepeatMove([y, x])) return false;

    //attack enemy board
    const result = board.receiveAttack(y, x);
    this.moves.push([y, x]);

    return result;
  }

  player.randomAttack = function(board) {
    let coords = (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

    //check for repeat moves
    while (this.isRepeatMove(coords)) {
      coords = (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }

    //attack enemy board
    const result = this.attack(board, coords[0], coords[1]);
    this.moves.push([coords[0], coords[1]]);

    return result;
  }

  player.isRepeatMove = function(coords) {
    for (let i = 0; i < this.moves.length; i++) {
      if (
        this.moves[i][0] === coords[0] &&
        this.moves[i][1] === coords[1]
      ) {
        return true;
      }
    }
    return false;
  }

  return player;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayer);

/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createShip = (length, type) => {
  const ship = {}
  ship.status = 'afloat'
  ship.type = type;

  //add ship hit points based on length
  ship.hits = [];
  for (let i = 1; i <= length; i++) {
    ship.hits.push(i);
  }

  ship.hit = function() {
    this.hits.pop();
    this.status = this.hits.length === 0 ? 'sunk' : 'afloat';
  }

  ship.isSunk = function() {
    if (this.status === 'sunk') return true;
    if (this.status === 'afloat') return false;
  }

  return ship;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);


/***/ }),

/***/ "./src/helpers/helpers.js":
/*!********************************!*\
  !*** ./src/helpers/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomCoords = () => {
  let y = Math.floor(Math.random() * 10)
  let x = Math.floor(Math.random() * 10)

  return [y, x]
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (randomCoords);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userTurn": () => (/* binding */ userTurn),
/* harmony export */   "newGame": () => (/* binding */ newGame),
/* harmony export */   "startGame": () => (/* binding */ startGame),
/* harmony export */   "toggleDirection": () => (/* binding */ toggleDirection),
/* harmony export */   "placeShips": () => (/* binding */ placeShips),
/* harmony export */   "direction": () => (/* binding */ direction),
/* harmony export */   "shipsPlaced": () => (/* binding */ shipsPlaced)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _factories_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/player.js */ "./src/factories/player.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ "./src/display.js");












let user;
let computer;
let direction = 'horizontal';
let battleLog = [];
let shipsPlaced = 0;

const newGame = () => {
  resetGame();
  //create user player and prompt ship placement
  user = (0,_factories_player_js__WEBPACK_IMPORTED_MODULE_1__["default"])('user')
  ;(0,_display_js__WEBPACK_IMPORTED_MODULE_2__.renderStartBoard)(user);
  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.openModal)();
}

const startGame = (input) => {
  ;(0,_display_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.updateLog)(battleLog);
  //change user name and set to active
  user.name = input;
  user.isActive = true;

  //create computer player and populate board
  computer = (0,_factories_player_js__WEBPACK_IMPORTED_MODULE_1__["default"])('computer', getRandomName())
  computer.board.populateBoard()
  
  //render DOM boards
  ;(0,_display_js__WEBPACK_IMPORTED_MODULE_2__.renderUserBoard)(user);
  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.renderComputerBoard)(computer);
};

const resetGame = () => {
  user = undefined;
  computer = undefined;
  battleLog.splice(0, battleLog.length);
  direction = 'horizontal';
  shipsPlaced = 0;
  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.resetDisplay)();
}

const userTurn = (coords) => {
  let result = user.attack(computer.board, coords[0], coords[1])
  if (!result) {
    user.isActive = true;
    computer.isActive = false;
    nextTurn();
  } else {
    user.isActive = false;
    computer.isActive = true;
    battleLog.unshift(`${user.name}: ${result}!`)
    nextTurn();
  }
}

const computerTurn = () => {
  //generate random attack and store result
  let result = computer.randomAttack(user.board)
  battleLog.unshift(`${computer.name}: ${result}!`)
  user.isActive = true;
  computer.isActive = false;
  nextTurn();
}

const nextTurn = () => {
  //render DOM and check for win
  ;(0,_display_js__WEBPACK_IMPORTED_MODULE_2__.renderUserBoard)(user);
  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.renderComputerBoard)(computer);
  const gameOver = checkWin();
  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.updateLog)(battleLog);
  if (gameOver) {
    resetGame();
    (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayGameOver)();
    return;
  }

  //check active user
  if (user.isActive) return;
  if (computer.isActive) computerTurn();
}

const checkWin = () => {
  if (user.board.isFleetSunk()) {
    battleLog.unshift(`${computer.name} wins! ${user.name} sleeps with the fishies!`)
    return true;
  }
  if (computer.board.isFleetSunk()) {
    battleLog.unshift(`${user.name} wins! ${computer.name} sleeps with the fishies!`)
    return true;
  }
  return false;
}

const getRandomName = () => {
  const names = [
    'Lie Bot',
    'Vlad',
    'Chucklebot',
    'Doraemon',
    'Android 16',
    'Android 17',
    'Android 18',
    'Johnny 5',
    'HAL 9000',
    'Bender Bending Rodriguez'
  ];

  let index = Math.floor(Math.random() * 10);
  return names[index]
};

const placeShips = (coords) => {
  const ships = [
    { length: 5, type: 'carrier' },
    { length: 4, type: 'battleship' },
    { length: 3, type: 'submarine' },
    { length: 3, type: 'destroyer' },
    { length: 2, type: 'patrol boat' },
  ]

  let index = shipsPlaced;
  let orientation = direction;
  let result = user.board.placeShip(coords[0], coords[1], orientation, ships[index])

  if (result) {
    shipsPlaced++;
    (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.renderStartBoard)(user);
  }
}

const toggleDirection = () => {
  direction = (direction === 'horizontal') ? 'vertical' : 'horizontal';
}

;(0,_display_js__WEBPACK_IMPORTED_MODULE_2__.init)();



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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGtEQUFrRCwyQkFBMkIsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsaUJBQWlCLHdCQUF3QixrQkFBa0IseUNBQXlDLGdCQUFnQixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLGtDQUFrQyw0QkFBNEIsaUJBQWlCLG1CQUFtQixHQUFHLDREQUE0RCxrQkFBa0IsMkJBQTJCLGlCQUFpQiw0QkFBNEIsd0JBQXdCLHVCQUF1Qix5QkFBeUIsaUJBQWlCLG9CQUFvQixzQkFBc0IsR0FBRyxnREFBZ0Qsa0JBQWtCLDJCQUEyQixtQkFBbUIsc0JBQXNCLGlCQUFpQixHQUFHLFVBQVUsa0JBQWtCLHdCQUF3QixtQkFBbUIsR0FBRyxXQUFXLGtCQUFrQixtQkFBbUIsaUJBQWlCLGdCQUFnQixnQkFBZ0IsMkJBQTJCLEdBQUcsV0FBVyxvQkFBb0IsaUJBQWlCLGdCQUFnQixnQkFBZ0IseUNBQXlDLGlDQUFpQyxHQUFHLFVBQVUsb0JBQW9CLGtCQUFrQixpQkFBaUIsZ0JBQWdCLGdCQUFnQiwwQkFBMEIsd0JBQXdCLDRCQUE0Qiw0R0FBNEcsR0FBRyxhQUFhLG9CQUFvQixrQkFBa0IsaUJBQWlCLGdCQUFnQixnQkFBZ0IsOEJBQThCLHdCQUF3Qiw0QkFBNEIsNEdBQTRHLEdBQUcsZ0JBQWdCLHNCQUFzQixHQUFHLHNCQUFzQiwyQkFBMkIsR0FBRyxlQUFlLG9CQUFvQixHQUFHLGtCQUFrQiwyQkFBMkIsaUNBQWlDLEdBQUcsa0JBQWtCLG9CQUFvQixHQUFHLGdCQUFnQixrQkFBa0IsMkJBQTJCLDBCQUEwQix3QkFBd0IsdUJBQXVCLGlCQUFpQixnQkFBZ0IsR0FBRyxpQkFBaUIsa0JBQWtCLDJCQUEyQiwwQkFBMEIsd0JBQXdCLHFCQUFxQixpQkFBaUIsaUJBQWlCLGtCQUFrQixvQkFBb0IseUNBQXlDLG1CQUFtQix1QkFBdUIsaUJBQWlCLEdBQUcsUUFBUSx5QkFBeUIsb0JBQW9CLEdBQUcsc0JBQXNCLG9CQUFvQixrQkFBa0Isd0JBQXdCLDRCQUE0QixXQUFXLFlBQVksa0JBQWtCLGlCQUFpQix5Q0FBeUMsa0JBQWtCLHlCQUF5QixlQUFlLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsMkJBQTJCLGlCQUFpQixrQkFBa0IsdUJBQXVCLHVCQUF1QixHQUFHLDhCQUE4QixlQUFlLHlCQUF5QixHQUFHLFlBQVksOEJBQThCLGlCQUFpQix1QkFBdUIsaUJBQWlCLHNCQUFzQix1QkFBdUIsMEJBQTBCLDBCQUEwQixvQkFBb0IsR0FBRyxrQkFBa0Isa0hBQWtILEdBQUcsV0FBVyw2QkFBNkIscUJBQXFCLDJCQUEyQixpQkFBaUIseUJBQXlCLG1CQUFtQixzQkFBc0Isb0JBQW9CLEdBQUcsU0FBUyxpRkFBaUYsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsZ0NBQWdDLGtEQUFrRCwyQkFBMkIsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsaUJBQWlCLHdCQUF3QixrQkFBa0IseUNBQXlDLGdCQUFnQixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLGtDQUFrQyw0QkFBNEIsaUJBQWlCLG1CQUFtQixHQUFHLDREQUE0RCxrQkFBa0IsMkJBQTJCLGlCQUFpQiw0QkFBNEIsd0JBQXdCLHVCQUF1Qix5QkFBeUIsaUJBQWlCLG9CQUFvQixzQkFBc0IsR0FBRyxnREFBZ0Qsa0JBQWtCLDJCQUEyQixtQkFBbUIsc0JBQXNCLGlCQUFpQixHQUFHLFVBQVUsa0JBQWtCLHdCQUF3QixtQkFBbUIsR0FBRyxXQUFXLGtCQUFrQixtQkFBbUIsaUJBQWlCLGdCQUFnQixnQkFBZ0IsMkJBQTJCLEdBQUcsV0FBVyxvQkFBb0IsaUJBQWlCLGdCQUFnQixnQkFBZ0IseUNBQXlDLGlDQUFpQyxHQUFHLFVBQVUsb0JBQW9CLGtCQUFrQixpQkFBaUIsZ0JBQWdCLGdCQUFnQiwwQkFBMEIsd0JBQXdCLDRCQUE0Qiw0R0FBNEcsR0FBRyxhQUFhLG9CQUFvQixrQkFBa0IsaUJBQWlCLGdCQUFnQixnQkFBZ0IsOEJBQThCLHdCQUF3Qiw0QkFBNEIsNEdBQTRHLEdBQUcsZ0JBQWdCLHNCQUFzQixHQUFHLHNCQUFzQiwyQkFBMkIsR0FBRyxlQUFlLG9CQUFvQixHQUFHLGtCQUFrQiwyQkFBMkIsaUNBQWlDLEdBQUcsa0JBQWtCLG9CQUFvQixHQUFHLGdCQUFnQixrQkFBa0IsMkJBQTJCLDBCQUEwQix3QkFBd0IsdUJBQXVCLGlCQUFpQixnQkFBZ0IsR0FBRyxpQkFBaUIsa0JBQWtCLDJCQUEyQiwwQkFBMEIsd0JBQXdCLHFCQUFxQixpQkFBaUIsaUJBQWlCLGtCQUFrQixvQkFBb0IseUNBQXlDLG1CQUFtQix1QkFBdUIsaUJBQWlCLEdBQUcsUUFBUSx5QkFBeUIsb0JBQW9CLEdBQUcsc0JBQXNCLG9CQUFvQixrQkFBa0Isd0JBQXdCLDRCQUE0QixXQUFXLFlBQVksa0JBQWtCLGlCQUFpQix5Q0FBeUMsa0JBQWtCLHlCQUF5QixlQUFlLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsMkJBQTJCLGlCQUFpQixrQkFBa0IsdUJBQXVCLHVCQUF1QixHQUFHLDhCQUE4QixlQUFlLHlCQUF5QixHQUFHLFlBQVksOEJBQThCLGlCQUFpQix1QkFBdUIsaUJBQWlCLHNCQUFzQix1QkFBdUIsMEJBQTBCLDBCQUEwQixvQkFBb0IsR0FBRyxrQkFBa0Isa0hBQWtILEdBQUcsV0FBVyw2QkFBNkIscUJBQXFCLDJCQUEyQixpQkFBaUIseUJBQXlCLG1CQUFtQixzQkFBc0Isb0JBQW9CLEdBQUcscUJBQXFCO0FBQzc0UztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZzQztBQUNEO0FBQ0U7QUFDTTtBQUNMO0FBQ0Q7QUFDRTs7QUFFekM7QUFDQTtBQUNBLG1DQUFtQyw4Q0FBTztBQUMxQyxFQUFFLGtEQUFPO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLEVBQUU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixFQUFFO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQyx3Q0FBd0MsRUFBRSxHQUFHLEVBQUU7QUFDL0M7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsc0RBQWU7QUFDeEQ7QUFDQSxnQ0FBZ0MsZ0RBQVM7QUFDekMsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxrREFBVztBQUNqQixJQUFJLG9EQUFTO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxFQUFFO0FBQ25DLHNDQUFzQyxFQUFFLEdBQUcsRUFBRTtBQUM3QztBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxrREFBVztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLGdEQUFTO0FBQ2Ysb0JBQW9CLGdCQUFnQjtBQUNwQyxxREFBcUQsRUFBRSxHQUFHLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0RBQVM7QUFDZixvQkFBb0IsZ0JBQWdCO0FBQ3BDLHFEQUFxRCxFQUFFLEdBQUcsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLGtEQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sZ0RBQVM7QUFDZixvQkFBb0IsZ0JBQWdCO0FBQ3BDLHFEQUFxRCxFQUFFLEdBQUcsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxnREFBUztBQUNmLG9CQUFvQixnQkFBZ0I7QUFDcEMscURBQXFELEVBQUUsR0FBRyxFQUFFO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU0sa0RBQVc7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHFEQUFVO0FBQ1o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbURBQVE7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Um1DO0FBQ2M7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixvREFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQkFBK0Isd0JBQXdCLEtBQUssT0FBTztBQUNuRSx1QkFBdUIsT0FBTztBQUM5QixNQUFNO0FBQ047QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSwrQkFBK0I7QUFDdkMsUUFBUSw4QkFBOEI7QUFDdEMsUUFBUSw4QkFBOEI7QUFDdEMsUUFBUSxnQ0FBZ0M7QUFDeEM7O0FBRUEsaUJBQWlCLCtEQUFZO0FBQzdCOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsK0RBQVk7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SGU7QUFDUTs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5REFBVztBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsK0RBQVk7O0FBRTdCO0FBQ0E7QUFDQSxlQUFlLCtEQUFZO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7OztBQ3BEM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixhQUFhO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hCMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQTjtBQUMyQjtBQUNiO0FBQ1c7QUFDSTtBQUNYO0FBQ0c7QUFDSDtBQUNDO0FBQ007QUFDRDs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGdFQUFZO0FBQ3JCLEVBQUUsOERBQWdCO0FBQ2xCLEVBQUUsc0RBQVM7QUFDWDs7QUFFQTtBQUNBLEVBQUUsd0RBQVU7QUFDWixFQUFFLHNEQUFTO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxnRUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFlO0FBQ2pCLEVBQUUsZ0VBQW1CO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQVk7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLHlCQUF5QixVQUFVLElBQUksT0FBTztBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWMsSUFBSSxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDZEQUFlO0FBQ2pCLEVBQUUsZ0VBQW1CO0FBQ3JCO0FBQ0EsRUFBRSxzREFBUztBQUNYO0FBQ0E7QUFDQSxJQUFJLDREQUFlO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixlQUFlLFFBQVEsV0FBVztBQUMzRDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsV0FBVyxRQUFRLGVBQWU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLDRCQUE0QjtBQUNsQyxNQUFNLCtCQUErQjtBQUNyQyxNQUFNLDhCQUE4QjtBQUNwQyxNQUFNLDhCQUE4QjtBQUNwQyxNQUFNLGdDQUFnQztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksNkRBQWdCO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtEQUFJOzs7Ozs7OztVQ2hKSjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9mYWN0b3JpZXMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9mYWN0b3JpZXMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBmb250LWZhbWlseTonQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgY29sb3I6ICNlZWU7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgZmxleDogMSAxIGF1dG87XFxufVxcblxcbi51c2VyLWFyZWEsIC5jb21wdXRlci1hcmVhLCAudXNlci1uYW1lLCAuY29tcHV0ZXItbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi51c2VyLWJvYXJkLCAuY29tcHV0ZXItYm9hcmQsIC5zdGFydC1ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxuXFxuLmNlbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICBtYXJnaW46IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5zaGlwIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGhlaWdodDogMzJweDtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgbWFyZ2luOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMjEsIDExNik7XFxuICBib3gtc2hhZG93OiAycHggM3B4IDVweCAjOTk5O1xcbn1cXG5cXG4uaGl0IHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICB3aWR0aDogMzJweDtcXG4gIG1hcmdpbjogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggNXB4IDVweCAtNXB4IGluc2V0LFxcbiAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA1cHggNXB4IC01cHggaW5zZXQ7XFxufVxcblxcbi5taXNzZWQge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMzJweDtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgbWFyZ2luOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggNXB4IDVweCAtNXB4IGluc2V0LFxcbiAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA1cHggNXB4IC01cHggaW5zZXQ7XFxufVxcblxcbi5jbGlja2FibGUge1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5jbGlja2FibGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLnBsYWNhYmxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhcmdldC16b25lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAjOTk5O1xcbn1cXG5cXG4ubm9ucGxhY2FibGUge1xcbiAgY3Vyc29yOiBuby1kcm9wO1xcbn1cXG5cXG4uZ2FtZS1vdmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA1MHZ3O1xcbn1cXG5cXG4uYmF0dGxlLWxvZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5saSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lci52aXNpYmxlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA4cHggMTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDMwcHggNjBweCAtMTJweCBpbnNldCxcXG4gIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMThweCAzNnB4IC0xOHB4IGluc2V0O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiA5MCU7XFxuICBwYWRkaW5nOiA2cHggMTVweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw2Q0FBNkM7RUFDN0Msc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QjsyQ0FDeUM7QUFDM0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCOzJDQUN5QztBQUMzQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRTs4Q0FDNEM7QUFDOUM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIGZvbnQtZmFtaWx5OidDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBjb2xvcjogI2VlZTtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxuXFxuLnVzZXItYXJlYSwgLmNvbXB1dGVyLWFyZWEsIC51c2VyLW5hbWUsIC5jb21wdXRlci1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnVzZXItYm9hcmQsIC5jb21wdXRlci1ib2FyZCwgLnN0YXJ0LWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBoZWlnaHQ6IDMycHg7XFxuICB3aWR0aDogMzJweDtcXG4gIG1hcmdpbjogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnNoaXAge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICBtYXJnaW46IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIyMSwgMTE2KTtcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggNXB4ICM5OTk7XFxufVxcblxcbi5oaXQge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMzJweDtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgbWFyZ2luOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCA1cHggNXB4IC01cHggaW5zZXQsXFxuICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDVweCA1cHggLTVweCBpbnNldDtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICBtYXJnaW46IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCA1cHggNXB4IC01cHggaW5zZXQsXFxuICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDVweCA1cHggLTVweCBpbnNldDtcXG59XFxuXFxuLmNsaWNrYWJsZSB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmNsaWNrYWJsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ucGxhY2FibGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFyZ2V0LXpvbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4ICM5OTk7XFxufVxcblxcbi5ub25wbGFjYWJsZSB7XFxuICBjdXJzb3I6IG5vLWRyb3A7XFxufVxcblxcbi5nYW1lLW92ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDUwdnc7XFxufVxcblxcbi5iYXR0bGUtbG9nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmxpIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB3aWR0aDogNjAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyLnZpc2libGUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMzBweCA2MHB4IC0xMnB4IGluc2V0LFxcbiAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxOHB4IDM2cHggLTE4cHggaW5zZXQ7XFxufVxcblxcbmlucHV0IHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDkwJTtcXG4gIHBhZGRpbmc6IDZweCAxNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdXNlclR1cm4gfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgbmV3R2FtZSB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgdG9nZ2xlRGlyZWN0aW9uIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IHBsYWNlU2hpcHMgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZGlyZWN0aW9uIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IHNoaXBzUGxhY2VkIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgY29uc3QgbmV3QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld0dhbWUnKTtcbiAgbmV3QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3R2FtZSk7XG4gIG5ld0dhbWUoKTtcbn1cblxuY29uc3QgcmVuZGVyVXNlckJvYXJkID0gKHVzZXIpID0+IHtcbiAgY29uc3QgdXNlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJCb2FyZCcpO1xuICB1c2VyQm9hcmQuaW5uZXJIVE1MID0gJyc7XG4gIHVzZXIuYm9hcmQuYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKVxuICAgIGVsZW1lbnQuZm9yRWFjaCgoZWxlbWVudCwgaikgPT4ge1xuICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgaWYgKCFlbGVtZW50LmlzSGl0ICYmICFlbGVtZW50LmlzTWlzc2VkKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpXG4gICAgICB9XG4gICAgICBpZiAoZWxlbWVudC5oYXNTaGlwKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpXG4gICAgICB9XG4gICAgICBpZiAoZWxlbWVudC5pc0hpdCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgICAgIGNlbGwuaW5uZXJIVE1MID0gJyYjOTY3MydcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50LmlzTWlzc2VkKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzc2VkJylcbiAgICAgICAgY2VsbC5pbm5lckhUTUwgPSAnJiM5NjczJ1xuICAgICAgfVxuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7an1gKVxuICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpXG4gICAgfSlcbiAgICB1c2VyQm9hcmQuYXBwZW5kQ2hpbGQocm93KVxuICB9KVxuXG4gIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJOYW1lJylcbiAgdXNlck5hbWUudGV4dENvbnRlbnQgPSB1c2VyLm5hbWU7XG59XG5cbmNvbnN0IHJlbmRlckNvbXB1dGVyQm9hcmQgPSAoY29tcHV0ZXIpID0+IHtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wdXRlckJvYXJkJyk7XG4gIGNvbXB1dGVyQm9hcmQuaW5uZXJIVE1MID0gJyc7XG4gIGNvbXB1dGVyLmJvYXJkLmFycmF5LmZvckVhY2goKGVsZW1lbnQsIGkpID0+IHtcbiAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByb3cuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YClcbiAgICBlbGVtZW50LmZvckVhY2goKGVsZW1lbnQsIGopID0+IHtcbiAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGlmICghZWxlbWVudC5pc0hpdCAmJiAhZWxlbWVudC5pc01pc3NlZCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKVxuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQuaXNIaXQpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgICAgICBjZWxsLmlubmVySFRNTCA9ICcmIzk2NzMnXG4gICAgICB9XG4gICAgICBpZiAoZWxlbWVudC5pc01pc3NlZCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpXG4gICAgICAgIGNlbGwuaW5uZXJIVE1MID0gJyYjOTY3MydcbiAgICAgIH1cbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJylcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGAke2p9YClcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLWNlbGwnLCBgJHtpfS0ke2p9YClcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKVxuICAgIH0pXG4gICAgY29tcHV0ZXJCb2FyZC5hcHBlbmRDaGlsZChyb3cpXG4gIH0pXG5cbiAgY29uc3QgY29tcHV0ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXB1dGVyTmFtZScpXG4gIGNvbXB1dGVyTmFtZS50ZXh0Q29udGVudCA9IGNvbXB1dGVyLm5hbWU7XG5cbiAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jZWxsXScpXG4gIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2VsbENsaWNrLCBmYWxzZSlcbiAgfSlcbn1cblxuY29uc3QgcmVzZXREaXNwbGF5ID0gKCkgPT4ge1xuICBjb25zdCB1c2VyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlckJvYXJkJylcbiAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC4gcXVlcnlTZWxlY3RvcignI3VzZXJOYW1lJylcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wdXRlckJvYXJkJylcbiAgY29uc3QgY29tcHV0ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXB1dGVyTmFtZScpXG4gIGNvbnN0IGdhbWVPdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVPdmVyJyk7XG5cbiAgdXNlckJvYXJkLmlubmVySFRNTCA9ICcnXG4gIHVzZXJOYW1lLnRleHRDb250ZW50ID0gJydcbiAgY29tcHV0ZXJCb2FyZC5pbm5lckhUTUwgPSAnJ1xuICBjb21wdXRlck5hbWUudGV4dENvbnRlbnQgPSAnJ1xuICBnYW1lT3Zlci5pbm5lckhUTUwgPSAnJ1xufVxuXG5jb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRhaW5lcicpO1xuICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XG4gIGNvbnN0IGRpcmVjdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXJlY3Rpb24nKTtcbiAgZGlyZWN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlRGlyZWN0aW9uKTtcbiAgZGlyZWN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpcmVjdGlvbkJ0bi50ZXh0Q29udGVudCA9IChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykgPyAnSG9yaXpvbnRhbCcgOiAnVmVydGljYWwnO1xuICB9KVxuICBjb25zdCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEdhbWUnKTtcbiAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlU3RhcnQpO1xufVxuXG5jb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250YWluZXInKTtcbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpOyBcbn1cblxuY29uc3QgaGFuZGxlU3RhcnQgPSAoZSkgPT4ge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGRhdGFGb3JtID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KVxuICBjb25zdCBuYW1lID0gZGF0YUZvcm0uZ2V0KCduYW1lJylcbiAgaWYgKHNoaXBzUGxhY2VkID09PSA1ICYmIG5hbWUgIT0gJycpIHtcbiAgICBzdGFydEdhbWUobmFtZSk7XG4gIH1cbn1cblxuY29uc3QgcmVuZGVyU3RhcnRCb2FyZCA9ICh1c2VyKSA9PiB7XG4gIGNvbnN0IHN0YXJ0Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnRCb2FyZCcpXG4gIHN0YXJ0Qm9hcmQuaW5uZXJIVE1MID0gJyc7XG4gIHVzZXIuYm9hcmQuYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKVxuICAgIGVsZW1lbnQuZm9yRWFjaCgoZWxlbWVudCwgaikgPT4ge1xuICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJylcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2FibGUnKVxuICAgICAgaWYgKGVsZW1lbnQuaGFzU2hpcCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKVxuICAgICAgfVxuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7an1gKVxuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBgJHtpfS0ke2p9YClcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKVxuICAgIH0pXG4gICAgc3RhcnRCb2FyZC5hcHBlbmRDaGlsZChyb3cpXG4gIH0pXG5cbiAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pZF0nKTtcbiAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGhvdmVyT24pXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaG92ZXJPZmYpXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYWNlbWVudCwgZmFsc2UpXG4gIH0pXG59XG5cbmNvbnN0IGhvdmVyT24gPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICBsZXQgeCA9IHBhcnNlSW50KHRhcmdldC5pZCk7XG4gIGxldCB5ID0gcGFyc2VJbnQodGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpO1xuICBsZXQgbGVuZ3RoO1xuXG4gIHN3aXRjaCAoc2hpcHNQbGFjZWQpIHtcbiAgICBjYXNlIDA6XG4gICAgICBsZW5ndGggPSA1O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOlxuICAgICAgbGVuZ3RoID0gNDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIGxlbmd0aCA9IDM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBsZW5ndGggPSAzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0OlxuICAgICAgbGVuZ3RoID0gMjtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3l9LSR7aX1cIl1gKTtcbiAgICAgIGlmIChjZWxsID09PSBudWxsKSByZXR1cm47XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3RhcmdldC16b25lJyk7XG4gICAgfVxuICB9XG4gIFxuICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2l9LSR7eH1cIl1gKTtcbiAgICAgIGlmIChjZWxsID09PSBudWxsKSByZXR1cm47XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3RhcmdldC16b25lJyk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGhvdmVyT2ZmID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgbGV0IHggPSBwYXJzZUludCh0YXJnZXQuaWQpO1xuICBsZXQgeSA9IHBhcnNlSW50KHRhcmdldC5wYXJlbnRFbGVtZW50LmlkKTtcbiAgbGV0IGxlbmd0aDtcblxuICBzd2l0Y2ggKHNoaXBzUGxhY2VkKSB7XG4gICAgY2FzZSAwOlxuICAgICAgbGVuZ3RoID0gNTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIGxlbmd0aCA9IDQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBsZW5ndGggPSAzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgbGVuZ3RoID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIGxlbmd0aCA9IDI7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIGxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHt5fS0ke2l9XCJdYCk7XG4gICAgICBpZiAoY2VsbCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd0YXJnZXQtem9uZScpO1xuICAgIH1cbiAgfVxuICBcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIGxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtpfS0ke3h9XCJdYCk7XG4gICAgICBpZiAoY2VsbCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd0YXJnZXQtem9uZScpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBoYW5kbGVQbGFjZW1lbnQgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgaWYgKHNoaXBzUGxhY2VkID09PSA1KSByZXR1cm47XG5cbiAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICBsZXQgeCA9IHBhcnNlSW50KHRhcmdldC5pZCk7IFxuICBsZXQgeSA9IHBhcnNlSW50KHRhcmdldC5wYXJlbnRFbGVtZW50LmlkKTtcblxuICBwbGFjZVNoaXBzKFt5LCB4XSlcbn1cblxuY29uc3QgY2VsbENsaWNrID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgbGV0IHggPSBwYXJzZUludCh0YXJnZXQuaWQpOyBcbiAgbGV0IHkgPSBwYXJzZUludCh0YXJnZXQucGFyZW50RWxlbWVudC5pZCk7XG4gIHVzZXJUdXJuKFt5LCB4XSk7XG59XG5cbmNvbnN0IHVwZGF0ZUxvZyA9IChiYXR0bGVMb2cpID0+IHtcbiAgbGV0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZS1sb2cgdWwnKTtcbiAgdWwuaW5uZXJIVE1MID0gJyc7XG4gIGxldCBkZiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgYmF0dGxlTG9nLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5pbm5lclRleHQgPSBlbnRyeTtcbiAgICBkZi5hcHBlbmRDaGlsZChsaSk7XG4gIH0pXG4gIHVsLmFwcGVuZENoaWxkKGRmKTtcbn1cblxuY29uc3QgZGlzcGxheUdhbWVPdmVyID0gKCkgPT4ge1xuICBjb25zdCBnYW1lT3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lT3ZlcicpO1xuICBnYW1lT3Zlci5pbm5lckhUTUwgPSBgXG4gIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9naXBoeS5jb20vZW1iZWQvNXh6aldId0JlYTBMS1wiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzU5XCIgZnJhbWVCb3JkZXI9XCIwXCIgY2xhc3M9XCJnaXBoeS1lbWJlZFwiIGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cbiAgPHA+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vZ2lwaHkuY29tL2dpZnMvNXh6aldId0JlYTBMS1wiPnZpYSBHSVBIWTwvYT5cbiAgPC9wPlxuICBgXG59XG5cbmV4cG9ydCB7IFxuICByZW5kZXJVc2VyQm9hcmQsIFxuICByZW5kZXJDb21wdXRlckJvYXJkLFxuICByZXNldERpc3BsYXksIFxuICB1cGRhdGVMb2csXG4gIG9wZW5Nb2RhbCxcbiAgY2xvc2VNb2RhbCxcbiAgcmVuZGVyU3RhcnRCb2FyZCxcbiAgZGlzcGxheUdhbWVPdmVyLFxuICBpbml0IFxufTsiLCJpbXBvcnQgY3JlYXRlU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IHJhbmRvbUNvb3JkcyBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMuanMnO1xuXG5jb25zdCBjcmVhdGVCb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSB7fVxuXG4gIC8vY3JlYXRlIDEweDEwIDJEIGFycmF5XG4gIGJvYXJkLmFycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDk7IGkrKykge1xuICAgIGJvYXJkLmFycmF5LnB1c2gobmV3IEFycmF5KVxuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IDk7IGorKykge1xuICAgICAgYm9hcmQuYXJyYXlbaV0ucHVzaCh7XG4gICAgICAgIGhhc1NoaXA6IGZhbHNlLFxuICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICAgIGlzTWlzc2VkOiBmYWxzZSxcbiAgICAgICAgc2hpcFR5cGU6IHVuZGVmaW5lZCxcbiAgICAgIH0pXG4gICAgfVxuICB9O1xuXG4gIGJvYXJkLmZsZWV0ID0gW107XG5cbiAgYm9hcmQucGxhY2VTaGlwID0gZnVuY3Rpb24oeSwgeCwgZGlyZWN0aW9uLCBzaGlwKSB7XG4gICAgLy9jaGVjayBpZiBwbGFjZW1lbnQgb2JleXMgYm9hcmQgcnVsZXNcbiAgICBpZiAoIXRoaXMuaXNQbGFjZW1lbnRWYWxpZCh5LCB4LCBkaXJlY3Rpb24sIHNoaXAubGVuZ3RoKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy9wdXNoIHNoaXAgb2JqZWN0IHRvIGZsZWV0IGFycmF5XG4gICAgdGhpcy5mbGVldC5wdXNoKGNyZWF0ZVNoaXAoc2hpcC5sZW5ndGgsIHNoaXAudHlwZSkpXG4gICAgXG4gICAgLy9tYXJrIGJvYXJkIHNwYWNlc1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmFycmF5W3ldW2ldLmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICB0aGlzLmFycmF5W3ldW2ldLnNoaXBUeXBlID0gc2hpcC50eXBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5hcnJheVtpXVt4XS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hcnJheVtpXVt4XS5zaGlwVHlwZSA9IHNoaXAudHlwZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBib2FyZC5yZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24oeSwgeCkge1xuICAgIC8vY2hlY2sgaWYgc3BhY2UgaGFzIHNoaXBcbiAgICBpZiAodGhpcy5hcnJheVt5XVt4XS5oYXNTaGlwID09IHRydWUpIHtcbiAgICAgIC8vcmVjb3JkIGhpdCBvbiBzaGlwIG9iamVjdFxuICAgICAgbGV0IHR5cGUgPSB0aGlzLmFycmF5W3ldW3hdLnNoaXBUeXBlO1xuICAgICAgbGV0IGluZGV4ID0gdGhpcy5maW5kU2hpcCh0eXBlKTtcbiAgICAgIHRoaXMuZmxlZXRbaW5kZXhdLmhpdCgpO1xuICAgICAgbGV0IHN1bmsgPSB0aGlzLmZsZWV0W2luZGV4XS5pc1N1bmsoKTtcblxuICAgICAgLy9yZWNvcmQgaGl0IG9uIGJvYXJkIGFycmF5XG4gICAgICB0aGlzLmFycmF5W3ldW3hdLmlzSGl0ID0gdHJ1ZTtcblxuICAgICAgaWYgKHN1bmspIHJldHVybiBgc3VuayAke3RoaXMuZmxlZXRbaW5kZXhdLnR5cGV9IGF0ICR7W3ksIHhdfWBcbiAgICAgIHJldHVybiBgaGl0IGF0ICR7W3ksIHhdfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXJyYXlbeV1beF0uaXNNaXNzZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGBtaXNzIGF0ICR7W3ksIHhdfWA7XG4gICAgfVxuICB9O1xuXG4gIGJvYXJkLmZpbmRTaGlwID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHJldHVybiB0aGlzLmZsZWV0LmluZGV4T2YodGhpcy5mbGVldC5maW5kKChzaGlwKSA9PiBzaGlwLnR5cGUgPT0gdHlwZSkpXG4gIH07XG5cbiAgYm9hcmQuaXNGbGVldFN1bmsgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mbGVldC5ldmVyeSgoc2hpcCkgPT4gc2hpcC5zdGF0dXMgPT0gJ3N1bmsnKVxuICB9O1xuXG4gIGJvYXJkLmlzUGxhY2VtZW50VmFsaWQgPSBmdW5jdGlvbih5LCB4LCBkaXJlY3Rpb24sIGxlbmd0aCkge1xuICAgIGNvbnN0IGEgPSBpc05hTih5KTtcbiAgICBjb25zdCBiID0gaXNOYU4oeCk7XG4gICAgaWYgKGEgfHwgYiApIHJldHVybiBmYWxzZTtcbiAgICBpZiAoeSA8IDAgfHwgeSA+IDkgfHwgeCA8IDAgfHwgeCA+IDkpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgaWYgKHggKyBsZW5ndGggLSAxID4gOSkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuYXJyYXlbeV1baV0uaGFzU2hpcCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gXG4gICAgXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKHkgKyBsZW5ndGggLSAxID4gOSkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuYXJyYXlbaV1beF0uaGFzU2hpcCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBib2FyZC5wb3B1bGF0ZUJvYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXG4gICAgICB7IGxlbmd0aDogNSwgdHlwZTogJ2NhcnJpZXInIH0sXG4gICAgICB7IGxlbmd0aDogNCwgdHlwZTogJ2JhdHRsZXNoaXAnIH0sXG4gICAgICB7IGxlbmd0aDogMywgdHlwZTogJ3N1Ym1hcmluZScgfSxcbiAgICAgIHsgbGVuZ3RoOiAzLCB0eXBlOiAnZGVzdHJveWVyJyB9LFxuICAgICAgeyBsZW5ndGg6IDIsIHR5cGU6ICdwYXRyb2wgYm9hdCcgfSxcbiAgICBdXG5cbiAgICBsZXQgY29vcmRzID0gcmFuZG9tQ29vcmRzKCk7XG4gICAgbGV0IGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJ1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgd2hpbGUgKCF0aGlzLnBsYWNlU2hpcChjb29yZHNbMF0sIGNvb3Jkc1sxXSwgZGlyZWN0aW9uLCBzaGlwKSkge1xuICAgICAgICBjb29yZHMgPSByYW5kb21Db29yZHMoKTtcbiAgICAgICAgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDEgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgICAgfVxuICAgIH0pXG4gIH07XG5cbiAgcmV0dXJuIGJvYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQm9hcmQ7IiwiaW1wb3J0IGNyZWF0ZUJvYXJkIGZyb20gJy4vZ2FtZUJvYXJkLmpzJztcbmltcG9ydCByYW5kb21Db29yZHMgZnJvbSAnLi4vaGVscGVycy9oZWxwZXJzLmpzJztcblxuY29uc3QgY3JlYXRlUGxheWVyID0gKHR5cGUsIG5hbWUpID0+IHtcbiAgY29uc3QgcGxheWVyID0ge31cbiAgcGxheWVyLnR5cGUgPSB0eXBlO1xuICBwbGF5ZXIubmFtZSA9IG5hbWU7XG4gIHBsYXllci5pc0FjdGl2ZSA9IGZhbHNlO1xuICBwbGF5ZXIuYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuICBwbGF5ZXIubW92ZXMgPSBbXTtcblxuICBwbGF5ZXIuYXR0YWNrID0gZnVuY3Rpb24oYm9hcmQsIHksIHgpIHtcbiAgICAvL2NoZWNrIGZvciByZWFwZWF0IG1vdmVzXG4gICAgaWYgKHRoaXMuaXNSZXBlYXRNb3ZlKFt5LCB4XSkpIHJldHVybiBmYWxzZTtcblxuICAgIC8vYXR0YWNrIGVuZW15IGJvYXJkXG4gICAgY29uc3QgcmVzdWx0ID0gYm9hcmQucmVjZWl2ZUF0dGFjayh5LCB4KTtcbiAgICB0aGlzLm1vdmVzLnB1c2goW3ksIHhdKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwbGF5ZXIucmFuZG9tQXR0YWNrID0gZnVuY3Rpb24oYm9hcmQpIHtcbiAgICBsZXQgY29vcmRzID0gcmFuZG9tQ29vcmRzKCk7XG5cbiAgICAvL2NoZWNrIGZvciByZXBlYXQgbW92ZXNcbiAgICB3aGlsZSAodGhpcy5pc1JlcGVhdE1vdmUoY29vcmRzKSkge1xuICAgICAgY29vcmRzID0gcmFuZG9tQ29vcmRzKCk7XG4gICAgfVxuXG4gICAgLy9hdHRhY2sgZW5lbXkgYm9hcmRcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmF0dGFjayhib2FyZCwgY29vcmRzWzBdLCBjb29yZHNbMV0pO1xuICAgIHRoaXMubW92ZXMucHVzaChbY29vcmRzWzBdLCBjb29yZHNbMV1dKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwbGF5ZXIuaXNSZXBlYXRNb3ZlID0gZnVuY3Rpb24oY29vcmRzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMubW92ZXNbaV1bMF0gPT09IGNvb3Jkc1swXSAmJlxuICAgICAgICB0aGlzLm1vdmVzW2ldWzFdID09PSBjb29yZHNbMV1cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHBsYXllcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsYXllcjsiLCJjb25zdCBjcmVhdGVTaGlwID0gKGxlbmd0aCwgdHlwZSkgPT4ge1xuICBjb25zdCBzaGlwID0ge31cbiAgc2hpcC5zdGF0dXMgPSAnYWZsb2F0J1xuICBzaGlwLnR5cGUgPSB0eXBlO1xuXG4gIC8vYWRkIHNoaXAgaGl0IHBvaW50cyBiYXNlZCBvbiBsZW5ndGhcbiAgc2hpcC5oaXRzID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGxlbmd0aDsgaSsrKSB7XG4gICAgc2hpcC5oaXRzLnB1c2goaSk7XG4gIH1cblxuICBzaGlwLmhpdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaGl0cy5wb3AoKTtcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuaGl0cy5sZW5ndGggPT09IDAgPyAnc3VuaycgOiAnYWZsb2F0JztcbiAgfVxuXG4gIHNoaXAuaXNTdW5rID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSAnc3VuaycpIHJldHVybiB0cnVlO1xuICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gJ2FmbG9hdCcpIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBzaGlwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hpcDtcbiIsImNvbnN0IHJhbmRvbUNvb3JkcyA9ICgpID0+IHtcbiAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcblxuICByZXR1cm4gW3ksIHhdXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbUNvb3JkcztcbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSAnLi9mYWN0b3JpZXMvcGxheWVyLmpzJztcbmltcG9ydCB7IGluaXQgfSBmcm9tICcuL2Rpc3BsYXkuanMnO1xuaW1wb3J0IHsgcmVuZGVyVXNlckJvYXJkIH0gZnJvbSAnLi9kaXNwbGF5LmpzJztcbmltcG9ydCB7IHJlbmRlckNvbXB1dGVyQm9hcmQgfSBmcm9tICcuL2Rpc3BsYXkuanMnO1xuaW1wb3J0IHsgdXBkYXRlTG9nIH0gZnJvbSAnLi9kaXNwbGF5LmpzJ1xuaW1wb3J0IHsgcmVzZXREaXNwbGF5IH0gZnJvbSAnLi9kaXNwbGF5LmpzJ1xuaW1wb3J0IHsgb3Blbk1vZGFsIH0gZnJvbSAnLi9kaXNwbGF5LmpzJ1xuaW1wb3J0IHsgY2xvc2VNb2RhbCB9IGZyb20gJy4vZGlzcGxheS5qcydcbmltcG9ydCB7IHJlbmRlclN0YXJ0Qm9hcmQgfSBmcm9tICcuL2Rpc3BsYXkuanMnXG5pbXBvcnQgeyBkaXNwbGF5R2FtZU92ZXIgfSBmcm9tICcuL2Rpc3BsYXkuanMnXG5cbmxldCB1c2VyO1xubGV0IGNvbXB1dGVyO1xubGV0IGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbmxldCBiYXR0bGVMb2cgPSBbXTtcbmxldCBzaGlwc1BsYWNlZCA9IDA7XG5cbmNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XG4gIHJlc2V0R2FtZSgpO1xuICAvL2NyZWF0ZSB1c2VyIHBsYXllciBhbmQgcHJvbXB0IHNoaXAgcGxhY2VtZW50XG4gIHVzZXIgPSBjcmVhdGVQbGF5ZXIoJ3VzZXInKVxuICByZW5kZXJTdGFydEJvYXJkKHVzZXIpO1xuICBvcGVuTW9kYWwoKTtcbn1cblxuY29uc3Qgc3RhcnRHYW1lID0gKGlucHV0KSA9PiB7XG4gIGNsb3NlTW9kYWwoKTtcbiAgdXBkYXRlTG9nKGJhdHRsZUxvZyk7XG4gIC8vY2hhbmdlIHVzZXIgbmFtZSBhbmQgc2V0IHRvIGFjdGl2ZVxuICB1c2VyLm5hbWUgPSBpbnB1dDtcbiAgdXNlci5pc0FjdGl2ZSA9IHRydWU7XG5cbiAgLy9jcmVhdGUgY29tcHV0ZXIgcGxheWVyIGFuZCBwb3B1bGF0ZSBib2FyZFxuICBjb21wdXRlciA9IGNyZWF0ZVBsYXllcignY29tcHV0ZXInLCBnZXRSYW5kb21OYW1lKCkpXG4gIGNvbXB1dGVyLmJvYXJkLnBvcHVsYXRlQm9hcmQoKVxuICBcbiAgLy9yZW5kZXIgRE9NIGJvYXJkc1xuICByZW5kZXJVc2VyQm9hcmQodXNlcik7XG4gIHJlbmRlckNvbXB1dGVyQm9hcmQoY29tcHV0ZXIpO1xufTtcblxuY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICB1c2VyID0gdW5kZWZpbmVkO1xuICBjb21wdXRlciA9IHVuZGVmaW5lZDtcbiAgYmF0dGxlTG9nLnNwbGljZSgwLCBiYXR0bGVMb2cubGVuZ3RoKTtcbiAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuICBzaGlwc1BsYWNlZCA9IDA7XG4gIHJlc2V0RGlzcGxheSgpO1xufVxuXG5jb25zdCB1c2VyVHVybiA9IChjb29yZHMpID0+IHtcbiAgbGV0IHJlc3VsdCA9IHVzZXIuYXR0YWNrKGNvbXB1dGVyLmJvYXJkLCBjb29yZHNbMF0sIGNvb3Jkc1sxXSlcbiAgaWYgKCFyZXN1bHQpIHtcbiAgICB1c2VyLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICBjb21wdXRlci5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIG5leHRUdXJuKCk7XG4gIH0gZWxzZSB7XG4gICAgdXNlci5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIGNvbXB1dGVyLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICBiYXR0bGVMb2cudW5zaGlmdChgJHt1c2VyLm5hbWV9OiAke3Jlc3VsdH0hYClcbiAgICBuZXh0VHVybigpO1xuICB9XG59XG5cbmNvbnN0IGNvbXB1dGVyVHVybiA9ICgpID0+IHtcbiAgLy9nZW5lcmF0ZSByYW5kb20gYXR0YWNrIGFuZCBzdG9yZSByZXN1bHRcbiAgbGV0IHJlc3VsdCA9IGNvbXB1dGVyLnJhbmRvbUF0dGFjayh1c2VyLmJvYXJkKVxuICBiYXR0bGVMb2cudW5zaGlmdChgJHtjb21wdXRlci5uYW1lfTogJHtyZXN1bHR9IWApXG4gIHVzZXIuaXNBY3RpdmUgPSB0cnVlO1xuICBjb21wdXRlci5pc0FjdGl2ZSA9IGZhbHNlO1xuICBuZXh0VHVybigpO1xufVxuXG5jb25zdCBuZXh0VHVybiA9ICgpID0+IHtcbiAgLy9yZW5kZXIgRE9NIGFuZCBjaGVjayBmb3Igd2luXG4gIHJlbmRlclVzZXJCb2FyZCh1c2VyKTtcbiAgcmVuZGVyQ29tcHV0ZXJCb2FyZChjb21wdXRlcik7XG4gIGNvbnN0IGdhbWVPdmVyID0gY2hlY2tXaW4oKTtcbiAgdXBkYXRlTG9nKGJhdHRsZUxvZyk7XG4gIGlmIChnYW1lT3Zlcikge1xuICAgIHJlc2V0R2FtZSgpO1xuICAgIGRpc3BsYXlHYW1lT3ZlcigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vY2hlY2sgYWN0aXZlIHVzZXJcbiAgaWYgKHVzZXIuaXNBY3RpdmUpIHJldHVybjtcbiAgaWYgKGNvbXB1dGVyLmlzQWN0aXZlKSBjb21wdXRlclR1cm4oKTtcbn1cblxuY29uc3QgY2hlY2tXaW4gPSAoKSA9PiB7XG4gIGlmICh1c2VyLmJvYXJkLmlzRmxlZXRTdW5rKCkpIHtcbiAgICBiYXR0bGVMb2cudW5zaGlmdChgJHtjb21wdXRlci5uYW1lfSB3aW5zISAke3VzZXIubmFtZX0gc2xlZXBzIHdpdGggdGhlIGZpc2hpZXMhYClcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoY29tcHV0ZXIuYm9hcmQuaXNGbGVldFN1bmsoKSkge1xuICAgIGJhdHRsZUxvZy51bnNoaWZ0KGAke3VzZXIubmFtZX0gd2lucyEgJHtjb21wdXRlci5uYW1lfSBzbGVlcHMgd2l0aCB0aGUgZmlzaGllcyFgKVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuY29uc3QgZ2V0UmFuZG9tTmFtZSA9ICgpID0+IHtcbiAgY29uc3QgbmFtZXMgPSBbXG4gICAgJ0xpZSBCb3QnLFxuICAgICdWbGFkJyxcbiAgICAnQ2h1Y2tsZWJvdCcsXG4gICAgJ0RvcmFlbW9uJyxcbiAgICAnQW5kcm9pZCAxNicsXG4gICAgJ0FuZHJvaWQgMTcnLFxuICAgICdBbmRyb2lkIDE4JyxcbiAgICAnSm9obm55IDUnLFxuICAgICdIQUwgOTAwMCcsXG4gICAgJ0JlbmRlciBCZW5kaW5nIFJvZHJpZ3VleidcbiAgXTtcblxuICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIHJldHVybiBuYW1lc1tpbmRleF1cbn07XG5cbmNvbnN0IHBsYWNlU2hpcHMgPSAoY29vcmRzKSA9PiB7XG4gIGNvbnN0IHNoaXBzID0gW1xuICAgIHsgbGVuZ3RoOiA1LCB0eXBlOiAnY2FycmllcicgfSxcbiAgICB7IGxlbmd0aDogNCwgdHlwZTogJ2JhdHRsZXNoaXAnIH0sXG4gICAgeyBsZW5ndGg6IDMsIHR5cGU6ICdzdWJtYXJpbmUnIH0sXG4gICAgeyBsZW5ndGg6IDMsIHR5cGU6ICdkZXN0cm95ZXInIH0sXG4gICAgeyBsZW5ndGg6IDIsIHR5cGU6ICdwYXRyb2wgYm9hdCcgfSxcbiAgXVxuXG4gIGxldCBpbmRleCA9IHNoaXBzUGxhY2VkO1xuICBsZXQgb3JpZW50YXRpb24gPSBkaXJlY3Rpb247XG4gIGxldCByZXN1bHQgPSB1c2VyLmJvYXJkLnBsYWNlU2hpcChjb29yZHNbMF0sIGNvb3Jkc1sxXSwgb3JpZW50YXRpb24sIHNoaXBzW2luZGV4XSlcblxuICBpZiAocmVzdWx0KSB7XG4gICAgc2hpcHNQbGFjZWQrKztcbiAgICByZW5kZXJTdGFydEJvYXJkKHVzZXIpO1xuICB9XG59XG5cbmNvbnN0IHRvZ2dsZURpcmVjdGlvbiA9ICgpID0+IHtcbiAgZGlyZWN0aW9uID0gKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG59XG5cbmluaXQoKTtcblxuZXhwb3J0IHsgXG4gIHVzZXJUdXJuLCBcbiAgbmV3R2FtZSxcbiAgc3RhcnRHYW1lLCBcbiAgdG9nZ2xlRGlyZWN0aW9uLCBcbiAgcGxhY2VTaGlwcyxcbiAgZGlyZWN0aW9uLFxuICBzaGlwc1BsYWNlZFxuIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9