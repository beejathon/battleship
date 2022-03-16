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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  font-family:'Courier New', Courier, monospace;\n  box-sizing: border-box;\n}\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n  margin-bottom: 10px;\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #eee;\n}\n\n.main-content {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  padding: 4px;\n  flex: 1 1 auto;\n}\n\n.user-area, .computer-area, .user-name, .computer-name {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  width: 50vw;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-family: inherit;\n  padding: 4px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.user-board, .computer-board, .start-board {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  background: white;\n  margin: 10px;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 auto;\n}\n\n.cell {\n  display: flex;\n  flex: 1 1 auto;\n  height: 32px;\n  width: 32px;\n  margin: 2px;\n  background-color: blue;\n}\n\n.ship {\n  display: inline;\n  height: 32px;\n  width: 32px;\n  margin: 2px;\n  background-color: rgb(240, 221, 116);\n  box-shadow: 2px 3px 5px #999;\n}\n\n.hit {\n  display: inline;\n  display: flex;\n  height: 32px;\n  width: 32px;\n  margin: 2px;\n  background-color: red;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 5px 5px -5px inset,\n  rgba(0, 0, 0, 0.3) 0px 5px 5px -5px inset;\n}\n\n.missed {\n  display: inline;\n  display: flex;\n  height: 32px;\n  width: 32px;\n  margin: 2px;\n  background-color: #4CAF50;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 5px 5px -5px inset,\n  rgba(0, 0, 0, 0.3) 0px 5px 5px -5px inset;\n}\n\n.clickable {\n  cursor: crosshair;\n}\n\n.clickable:hover {\n  background-color: #fff;\n}\n\n.placable {\n  cursor: pointer;\n}\n\n.target-zone {\n  background-color: #fff;\n  box-shadow: 5px 5px 5px #999;\n}\n\n.nonplacable {\n  cursor: no-drop;\n}\n\n.game-over {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  text-align: center;\n  margin: auto;\n  width: 50vw;\n}\n\n.battle-log {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  text-align: left;\n  margin: auto;\n  width: 600px;\n  height: 200px;\n  max-width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  overflow: auto;\n  border-radius: 4px;\n  border: none;\n}\n\nli {\n  font-family: inherit;\n  font-size: 18px;\n}\n\n.modal-container {\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.2);\n  padding: 20px;\n  pointer-events: none;\n  opacity: 0;\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  width: 800px;\n  max-width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center;\n}\n\n.modal-container.visible {\n  opacity: 1;\n  pointer-events: auto;\n}\n\nbutton {\n  background-color: #4CAF50;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  padding: 8px 15px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n\nbutton:hover {\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,\n  rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\n}\n\ninput {\n  -webkit-appearance: none;\n  appearance: none;\n  border: 1px solid #333;\n  margin: auto;\n  font-family: inherit;\n  font-size: 90%;\n  padding: 6px 15px;\n  font-size: 16px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,6CAA6C;EAC7C,sBAAsB;AACxB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,oCAAoC;EACpC,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,YAAY;EACZ,WAAW;EACX,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,WAAW;EACX,oCAAoC;EACpC,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,aAAa;EACb,YAAY;EACZ,WAAW;EACX,WAAW;EACX,qBAAqB;EACrB,mBAAmB;EACnB,uBAAuB;EACvB;2CACyC;AAC3C;;AAEA;EACE,eAAe;EACf,aAAa;EACb,YAAY;EACZ,WAAW;EACX,WAAW;EACX,yBAAyB;EACzB,mBAAmB;EACnB,uBAAuB;EACvB;2CACyC;AAC3C;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,eAAe;EACf,oCAAoC;EACpC,cAAc;EACd,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,MAAM;EACN,OAAO;EACP,aAAa;EACb,YAAY;EACZ,oCAAoC;EACpC,aAAa;EACb,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,YAAY;EACZ,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE;8CAC4C;AAC9C;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;EACZ,oBAAoB;EACpB,cAAc;EACd,iBAAiB;EACjB,eAAe;AACjB","sourcesContent":["html {\n  font-family:'Courier New', Courier, monospace;\n  box-sizing: border-box;\n}\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n  margin-bottom: 10px;\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #eee;\n}\n\n.main-content {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  padding: 4px;\n  flex: 1 1 auto;\n}\n\n.user-area, .computer-area, .user-name, .computer-name {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  width: 50vw;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-family: inherit;\n  padding: 4px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.user-board, .computer-board, .start-board {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  background: white;\n  margin: 10px;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 auto;\n}\n\n.cell {\n  display: flex;\n  flex: 1 1 auto;\n  height: 32px;\n  width: 32px;\n  margin: 2px;\n  background-color: blue;\n}\n\n.ship {\n  display: inline;\n  height: 32px;\n  width: 32px;\n  margin: 2px;\n  background-color: rgb(240, 221, 116);\n  box-shadow: 2px 3px 5px #999;\n}\n\n.hit {\n  display: inline;\n  display: flex;\n  height: 32px;\n  width: 32px;\n  margin: 2px;\n  background-color: red;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 5px 5px -5px inset,\n  rgba(0, 0, 0, 0.3) 0px 5px 5px -5px inset;\n}\n\n.missed {\n  display: inline;\n  display: flex;\n  height: 32px;\n  width: 32px;\n  margin: 2px;\n  background-color: #4CAF50;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 5px 5px -5px inset,\n  rgba(0, 0, 0, 0.3) 0px 5px 5px -5px inset;\n}\n\n.clickable {\n  cursor: crosshair;\n}\n\n.clickable:hover {\n  background-color: #fff;\n}\n\n.placable {\n  cursor: pointer;\n}\n\n.target-zone {\n  background-color: #fff;\n  box-shadow: 5px 5px 5px #999;\n}\n\n.nonplacable {\n  cursor: no-drop;\n}\n\n.game-over {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  text-align: center;\n  margin: auto;\n  width: 50vw;\n}\n\n.battle-log {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  text-align: left;\n  margin: auto;\n  width: 600px;\n  height: 200px;\n  max-width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  overflow: auto;\n  border-radius: 4px;\n  border: none;\n}\n\nli {\n  font-family: inherit;\n  font-size: 18px;\n}\n\n.modal-container {\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.2);\n  padding: 20px;\n  pointer-events: none;\n  opacity: 0;\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  width: 800px;\n  max-width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center;\n}\n\n.modal-container.visible {\n  opacity: 1;\n  pointer-events: auto;\n}\n\nbutton {\n  background-color: #4CAF50;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  padding: 8px 15px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n\nbutton:hover {\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,\n  rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\n}\n\ninput {\n  -webkit-appearance: none;\n  appearance: none;\n  border: 1px solid #333;\n  margin: auto;\n  font-family: inherit;\n  font-size: 90%;\n  padding: 6px 15px;\n  font-size: 16px;\n}\n"],"sourceRoot":""}]);
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
    battleLog.unshift(`${computer.name} wins! Feed ${user.name} to the sharks.`)
    return true;
  }
  if (computer.board.isFleetSunk()) {
    battleLog.unshift(`${user.name} wins! Feed ${computer.name} to the sharks.`)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSwrQkFBK0I7QUFDckMsTUFBTSw4QkFBOEI7QUFDcEMsTUFBTSw4QkFBOEI7QUFDcEMsTUFBTSxnQ0FBZ0M7QUFDdEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDZEQUFnQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrREFBSTs7Ozs7Ozs7VUNoSko7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmFjdG9yaWVzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmFjdG9yaWVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmFjdG9yaWVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgZm9udC1mYW1pbHk6J0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGNvbG9yOiAjZWVlO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxuXFxuLnVzZXItYXJlYSwgLmNvbXB1dGVyLWFyZWEsIC51c2VyLW5hbWUsIC5jb21wdXRlci1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udXNlci1ib2FyZCwgLmNvbXB1dGVyLWJvYXJkLCAuc3RhcnQtYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleDogMSAxIGF1dG87XFxufVxcblxcbi5jZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGhlaWdodDogMzJweDtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgbWFyZ2luOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBoZWlnaHQ6IDMycHg7XFxuICB3aWR0aDogMzJweDtcXG4gIG1hcmdpbjogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjIxLCAxMTYpO1xcbiAgYm94LXNoYWRvdzogMnB4IDNweCA1cHggIzk5OTtcXG59XFxuXFxuLmhpdCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICBtYXJnaW46IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDVweCA1cHggLTVweCBpbnNldCxcXG4gIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggNXB4IDVweCAtNXB4IGluc2V0O1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICB3aWR0aDogMzJweDtcXG4gIG1hcmdpbjogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDVweCA1cHggLTVweCBpbnNldCxcXG4gIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggNXB4IDVweCAtNXB4IGluc2V0O1xcbn1cXG5cXG4uY2xpY2thYmxlIHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uY2xpY2thYmxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5wbGFjYWJsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXJnZXQtem9uZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggIzk5OTtcXG59XFxuXFxuLm5vbnBsYWNhYmxlIHtcXG4gIGN1cnNvcjogbm8tZHJvcDtcXG59XFxuXFxuLmdhbWUtb3ZlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogNTB2dztcXG59XFxuXFxuLmJhdHRsZS1sb2cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxubGkge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXIudmlzaWJsZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogOHB4IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAzMHB4IDYwcHggLTEycHggaW5zZXQsXFxuICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE4cHggMzZweCAtMThweCBpbnNldDtcXG59XFxuXFxuaW5wdXQge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbiAgcGFkZGluZzogNnB4IDE1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNkNBQTZDO0VBQzdDLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNC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dC1mYW1pbHk6J0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGNvbG9yOiAjZWVlO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxuXFxuLnVzZXItYXJlYSwgLmNvbXB1dGVyLWFyZWEsIC51c2VyLW5hbWUsIC5jb21wdXRlci1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udXNlci1ib2FyZCwgLmNvbXB1dGVyLWJvYXJkLCAuc3RhcnQtYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleDogMSAxIGF1dG87XFxufVxcblxcbi5jZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGhlaWdodDogMzJweDtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgbWFyZ2luOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBoZWlnaHQ6IDMycHg7XFxuICB3aWR0aDogMzJweDtcXG4gIG1hcmdpbjogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjIxLCAxMTYpO1xcbiAgYm94LXNoYWRvdzogMnB4IDNweCA1cHggIzk5OTtcXG59XFxuXFxuLmhpdCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICBtYXJnaW46IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDVweCA1cHggLTVweCBpbnNldCxcXG4gIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggNXB4IDVweCAtNXB4IGluc2V0O1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICB3aWR0aDogMzJweDtcXG4gIG1hcmdpbjogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDVweCA1cHggLTVweCBpbnNldCxcXG4gIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggNXB4IDVweCAtNXB4IGluc2V0O1xcbn1cXG5cXG4uY2xpY2thYmxlIHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uY2xpY2thYmxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5wbGFjYWJsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXJnZXQtem9uZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggIzk5OTtcXG59XFxuXFxuLm5vbnBsYWNhYmxlIHtcXG4gIGN1cnNvcjogbm8tZHJvcDtcXG59XFxuXFxuLmdhbWUtb3ZlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogNTB2dztcXG59XFxuXFxuLmJhdHRsZS1sb2cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxubGkge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXIudmlzaWJsZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogOHB4IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAzMHB4IDYwcHggLTEycHggaW5zZXQsXFxuICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE4cHggMzZweCAtMThweCBpbnNldDtcXG59XFxuXFxuaW5wdXQge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbiAgcGFkZGluZzogNnB4IDE1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB1c2VyVHVybiB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBuZXdHYW1lIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgeyB0b2dnbGVEaXJlY3Rpb24gfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgcGxhY2VTaGlwcyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBkaXJlY3Rpb24gfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgc2hpcHNQbGFjZWQgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBjb25zdCBuZXdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3R2FtZScpO1xuICBuZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdHYW1lKTtcbiAgbmV3R2FtZSgpO1xufVxuXG5jb25zdCByZW5kZXJVc2VyQm9hcmQgPSAodXNlcikgPT4ge1xuICBjb25zdCB1c2VyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlckJvYXJkJyk7XG4gIHVzZXJCb2FyZC5pbm5lckhUTUwgPSAnJztcbiAgdXNlci5ib2FyZC5hcnJheS5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XG4gICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpXG4gICAgcm93LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApXG4gICAgZWxlbWVudC5mb3JFYWNoKChlbGVtZW50LCBqKSA9PiB7XG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBpZiAoIWVsZW1lbnQuaXNIaXQgJiYgIWVsZW1lbnQuaXNNaXNzZWQpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJylcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50Lmhhc1NoaXApIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50LmlzSGl0KSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgICAgY2VsbC5pbm5lckhUTUwgPSAnJiM5NjczJ1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQuaXNNaXNzZWQpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKVxuICAgICAgICBjZWxsLmlubmVySFRNTCA9ICcmIzk2NzMnXG4gICAgICB9XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtqfWApXG4gICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbClcbiAgICB9KVxuICAgIHVzZXJCb2FyZC5hcHBlbmRDaGlsZChyb3cpXG4gIH0pXG5cbiAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlck5hbWUnKVxuICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IHVzZXIubmFtZTtcbn1cblxuY29uc3QgcmVuZGVyQ29tcHV0ZXJCb2FyZCA9IChjb21wdXRlcikgPT4ge1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXB1dGVyQm9hcmQnKTtcbiAgY29tcHV0ZXJCb2FyZC5pbm5lckhUTUwgPSAnJztcbiAgY29tcHV0ZXIuYm9hcmQuYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKVxuICAgIGVsZW1lbnQuZm9yRWFjaCgoZWxlbWVudCwgaikgPT4ge1xuICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgaWYgKCFlbGVtZW50LmlzSGl0ICYmICFlbGVtZW50LmlzTWlzc2VkKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpXG4gICAgICB9XG4gICAgICBpZiAoZWxlbWVudC5pc0hpdCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgICAgIGNlbGwuaW5uZXJIVE1MID0gJyYjOTY3MydcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50LmlzTWlzc2VkKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzc2VkJylcbiAgICAgICAgY2VsbC5pbm5lckhUTUwgPSAnJiM5NjczJ1xuICAgICAgfVxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjbGlja2FibGUnKVxuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7an1gKVxuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2VsbCcsIGAke2l9LSR7an1gKVxuICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpXG4gICAgfSlcbiAgICBjb21wdXRlckJvYXJkLmFwcGVuZENoaWxkKHJvdylcbiAgfSlcblxuICBjb25zdCBjb21wdXRlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcHV0ZXJOYW1lJylcbiAgY29tcHV0ZXJOYW1lLnRleHRDb250ZW50ID0gY29tcHV0ZXIubmFtZTtcblxuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNlbGxdJylcbiAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjZWxsQ2xpY2ssIGZhbHNlKVxuICB9KVxufVxuXG5jb25zdCByZXNldERpc3BsYXkgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyQm9hcmQnKVxuICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LiBxdWVyeVNlbGVjdG9yKCcjdXNlck5hbWUnKVxuICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXB1dGVyQm9hcmQnKVxuICBjb25zdCBjb21wdXRlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcHV0ZXJOYW1lJylcbiAgY29uc3QgZ2FtZU92ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZU92ZXInKTtcblxuICB1c2VyQm9hcmQuaW5uZXJIVE1MID0gJydcbiAgdXNlck5hbWUudGV4dENvbnRlbnQgPSAnJ1xuICBjb21wdXRlckJvYXJkLmlubmVySFRNTCA9ICcnXG4gIGNvbXB1dGVyTmFtZS50ZXh0Q29udGVudCA9ICcnXG4gIGdhbWVPdmVyLmlubmVySFRNTCA9ICcnXG59XG5cbmNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGFpbmVyJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcbiAgY29uc3QgZGlyZWN0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpcmVjdGlvbicpO1xuICBkaXJlY3Rpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVEaXJlY3Rpb24pO1xuICBkaXJlY3Rpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGlyZWN0aW9uQnRuLnRleHRDb250ZW50ID0gKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSA/ICdIb3Jpem9udGFsJyA6ICdWZXJ0aWNhbCc7XG4gIH0pXG4gIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0R2FtZScpO1xuICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVTdGFydCk7XG59XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRhaW5lcicpO1xuICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7IFxufVxuXG5jb25zdCBoYW5kbGVTdGFydCA9IChlKSA9PiB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZGF0YUZvcm0gPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpXG4gIGNvbnN0IG5hbWUgPSBkYXRhRm9ybS5nZXQoJ25hbWUnKVxuICBpZiAoc2hpcHNQbGFjZWQgPT09IDUgJiYgbmFtZSAhPSAnJykge1xuICAgIHN0YXJ0R2FtZShuYW1lKTtcbiAgfVxufVxuXG5jb25zdCByZW5kZXJTdGFydEJvYXJkID0gKHVzZXIpID0+IHtcbiAgY29uc3Qgc3RhcnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydEJvYXJkJylcbiAgc3RhcnRCb2FyZC5pbm5lckhUTUwgPSAnJztcbiAgdXNlci5ib2FyZC5hcnJheS5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XG4gICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpXG4gICAgcm93LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApXG4gICAgZWxlbWVudC5mb3JFYWNoKChlbGVtZW50LCBqKSA9PiB7XG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKVxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjYWJsZScpXG4gICAgICBpZiAoZWxlbWVudC5oYXNTaGlwKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpXG4gICAgICB9XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtqfWApXG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGAke2l9LSR7an1gKVxuICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpXG4gICAgfSlcbiAgICBzdGFydEJvYXJkLmFwcGVuZENoaWxkKHJvdylcbiAgfSlcblxuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWlkXScpO1xuICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaG92ZXJPbilcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBob3Zlck9mZilcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxhY2VtZW50LCBmYWxzZSlcbiAgfSlcbn1cblxuY29uc3QgaG92ZXJPbiA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gIGxldCB4ID0gcGFyc2VJbnQodGFyZ2V0LmlkKTtcbiAgbGV0IHkgPSBwYXJzZUludCh0YXJnZXQucGFyZW50RWxlbWVudC5pZCk7XG4gIGxldCBsZW5ndGg7XG5cbiAgc3dpdGNoIChzaGlwc1BsYWNlZCkge1xuICAgIGNhc2UgMDpcbiAgICAgIGxlbmd0aCA9IDU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDE6XG4gICAgICBsZW5ndGggPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgbGVuZ3RoID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIGxlbmd0aCA9IDM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICBsZW5ndGggPSAyO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBsZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7eX0tJHtpfVwiXWApO1xuICAgICAgaWYgKGNlbGwgPT09IG51bGwpIHJldHVybjtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgndGFyZ2V0LXpvbmUnKTtcbiAgICB9XG4gIH1cbiAgXG4gIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBsZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7aX0tJHt4fVwiXWApO1xuICAgICAgaWYgKGNlbGwgPT09IG51bGwpIHJldHVybjtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgndGFyZ2V0LXpvbmUnKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgaG92ZXJPZmYgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICBsZXQgeCA9IHBhcnNlSW50KHRhcmdldC5pZCk7XG4gIGxldCB5ID0gcGFyc2VJbnQodGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpO1xuICBsZXQgbGVuZ3RoO1xuXG4gIHN3aXRjaCAoc2hpcHNQbGFjZWQpIHtcbiAgICBjYXNlIDA6XG4gICAgICBsZW5ndGggPSA1O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOlxuICAgICAgbGVuZ3RoID0gNDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIGxlbmd0aCA9IDM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBsZW5ndGggPSAzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0OlxuICAgICAgbGVuZ3RoID0gMjtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3l9LSR7aX1cIl1gKTtcbiAgICAgIGlmIChjZWxsID09PSBudWxsKSByZXR1cm47XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmdldC16b25lJyk7XG4gICAgfVxuICB9XG4gIFxuICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2l9LSR7eH1cIl1gKTtcbiAgICAgIGlmIChjZWxsID09PSBudWxsKSByZXR1cm47XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmdldC16b25lJyk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZVBsYWNlbWVudCA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICBpZiAoc2hpcHNQbGFjZWQgPT09IDUpIHJldHVybjtcblxuICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gIGxldCB4ID0gcGFyc2VJbnQodGFyZ2V0LmlkKTsgXG4gIGxldCB5ID0gcGFyc2VJbnQodGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpO1xuXG4gIHBsYWNlU2hpcHMoW3ksIHhdKVxufVxuXG5jb25zdCBjZWxsQ2xpY2sgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICBsZXQgeCA9IHBhcnNlSW50KHRhcmdldC5pZCk7IFxuICBsZXQgeSA9IHBhcnNlSW50KHRhcmdldC5wYXJlbnRFbGVtZW50LmlkKTtcbiAgdXNlclR1cm4oW3ksIHhdKTtcbn1cblxuY29uc3QgdXBkYXRlTG9nID0gKGJhdHRsZUxvZykgPT4ge1xuICBsZXQgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlLWxvZyB1bCcpO1xuICB1bC5pbm5lckhUTUwgPSAnJztcbiAgbGV0IGRmID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBiYXR0bGVMb2cuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmlubmVyVGV4dCA9IGVudHJ5O1xuICAgIGRmLmFwcGVuZENoaWxkKGxpKTtcbiAgfSlcbiAgdWwuYXBwZW5kQ2hpbGQoZGYpO1xufVxuXG5jb25zdCBkaXNwbGF5R2FtZU92ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVPdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVPdmVyJyk7XG4gIGdhbWVPdmVyLmlubmVySFRNTCA9IGBcbiAgPGlmcmFtZSBzcmM9XCJodHRwczovL2dpcGh5LmNvbS9lbWJlZC81eHpqV0h3QmVhMExLXCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzNTlcIiBmcmFtZUJvcmRlcj1cIjBcIiBjbGFzcz1cImdpcGh5LWVtYmVkXCIgYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuICA8cD5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXBoeS5jb20vZ2lmcy81eHpqV0h3QmVhMExLXCI+dmlhIEdJUEhZPC9hPlxuICA8L3A+XG4gIGBcbn1cblxuZXhwb3J0IHsgXG4gIHJlbmRlclVzZXJCb2FyZCwgXG4gIHJlbmRlckNvbXB1dGVyQm9hcmQsXG4gIHJlc2V0RGlzcGxheSwgXG4gIHVwZGF0ZUxvZyxcbiAgb3Blbk1vZGFsLFxuICBjbG9zZU1vZGFsLFxuICByZW5kZXJTdGFydEJvYXJkLFxuICBkaXNwbGF5R2FtZU92ZXIsXG4gIGluaXQgXG59OyIsImltcG9ydCBjcmVhdGVTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5pbXBvcnQgcmFuZG9tQ29vcmRzIGZyb20gJy4uL2hlbHBlcnMvaGVscGVycy5qcyc7XG5cbmNvbnN0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IHt9XG5cbiAgLy9jcmVhdGUgMTB4MTAgMkQgYXJyYXlcbiAgYm9hcmQuYXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOTsgaSsrKSB7XG4gICAgYm9hcmQuYXJyYXkucHVzaChuZXcgQXJyYXkpXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gOTsgaisrKSB7XG4gICAgICBib2FyZC5hcnJheVtpXS5wdXNoKHtcbiAgICAgICAgaGFzU2hpcDogZmFsc2UsXG4gICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgaXNNaXNzZWQ6IGZhbHNlLFxuICAgICAgICBzaGlwVHlwZTogdW5kZWZpbmVkLFxuICAgICAgfSlcbiAgICB9XG4gIH07XG5cbiAgYm9hcmQuZmxlZXQgPSBbXTtcblxuICBib2FyZC5wbGFjZVNoaXAgPSBmdW5jdGlvbih5LCB4LCBkaXJlY3Rpb24sIHNoaXApIHtcbiAgICAvL2NoZWNrIGlmIHBsYWNlbWVudCBvYmV5cyBib2FyZCBydWxlc1xuICAgIGlmICghdGhpcy5pc1BsYWNlbWVudFZhbGlkKHksIHgsIGRpcmVjdGlvbiwgc2hpcC5sZW5ndGgpKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvL3B1c2ggc2hpcCBvYmplY3QgdG8gZmxlZXQgYXJyYXlcbiAgICB0aGlzLmZsZWV0LnB1c2goY3JlYXRlU2hpcChzaGlwLmxlbmd0aCwgc2hpcC50eXBlKSlcbiAgICBcbiAgICAvL21hcmsgYm9hcmQgc3BhY2VzXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYXJyYXlbeV1baV0uaGFzU2hpcCA9IHRydWU7XG4gICAgICAgIHRoaXMuYXJyYXlbeV1baV0uc2hpcFR5cGUgPSBzaGlwLnR5cGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmFycmF5W2ldW3hdLmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICB0aGlzLmFycmF5W2ldW3hdLnNoaXBUeXBlID0gc2hpcC50eXBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGJvYXJkLnJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbih5LCB4KSB7XG4gICAgLy9jaGVjayBpZiBzcGFjZSBoYXMgc2hpcFxuICAgIGlmICh0aGlzLmFycmF5W3ldW3hdLmhhc1NoaXAgPT0gdHJ1ZSkge1xuICAgICAgLy9yZWNvcmQgaGl0IG9uIHNoaXAgb2JqZWN0XG4gICAgICBsZXQgdHlwZSA9IHRoaXMuYXJyYXlbeV1beF0uc2hpcFR5cGU7XG4gICAgICBsZXQgaW5kZXggPSB0aGlzLmZpbmRTaGlwKHR5cGUpO1xuICAgICAgdGhpcy5mbGVldFtpbmRleF0uaGl0KCk7XG4gICAgICBsZXQgc3VuayA9IHRoaXMuZmxlZXRbaW5kZXhdLmlzU3VuaygpO1xuXG4gICAgICAvL3JlY29yZCBoaXQgb24gYm9hcmQgYXJyYXlcbiAgICAgIHRoaXMuYXJyYXlbeV1beF0uaXNIaXQgPSB0cnVlO1xuXG4gICAgICBpZiAoc3VuaykgcmV0dXJuIGBzdW5rICR7dGhpcy5mbGVldFtpbmRleF0udHlwZX0gYXQgJHtbeSwgeF19YFxuICAgICAgcmV0dXJuIGBoaXQgYXQgJHtbeSwgeF19YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hcnJheVt5XVt4XS5pc01pc3NlZCA9IHRydWU7XG4gICAgICByZXR1cm4gYG1pc3MgYXQgJHtbeSwgeF19YDtcbiAgICB9XG4gIH07XG5cbiAgYm9hcmQuZmluZFNoaXAgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmxlZXQuaW5kZXhPZih0aGlzLmZsZWV0LmZpbmQoKHNoaXApID0+IHNoaXAudHlwZSA9PSB0eXBlKSlcbiAgfTtcblxuICBib2FyZC5pc0ZsZWV0U3VuayA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZsZWV0LmV2ZXJ5KChzaGlwKSA9PiBzaGlwLnN0YXR1cyA9PSAnc3VuaycpXG4gIH07XG5cbiAgYm9hcmQuaXNQbGFjZW1lbnRWYWxpZCA9IGZ1bmN0aW9uKHksIHgsIGRpcmVjdGlvbiwgbGVuZ3RoKSB7XG4gICAgY29uc3QgYSA9IGlzTmFOKHkpO1xuICAgIGNvbnN0IGIgPSBpc05hTih4KTtcbiAgICBpZiAoYSB8fCBiICkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh5IDwgMCB8fCB5ID4gOSB8fCB4IDwgMCB8fCB4ID4gOSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAoeCArIGxlbmd0aCAtIDEgPiA5KSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5hcnJheVt5XVtpXS5oYXNTaGlwID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBcbiAgICBcbiAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBpZiAoeSArIGxlbmd0aCAtIDEgPiA5KSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5hcnJheVtpXVt4XS5oYXNTaGlwID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGJvYXJkLnBvcHVsYXRlQm9hcmQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgIHsgbGVuZ3RoOiA1LCB0eXBlOiAnY2FycmllcicgfSxcbiAgICAgIHsgbGVuZ3RoOiA0LCB0eXBlOiAnYmF0dGxlc2hpcCcgfSxcbiAgICAgIHsgbGVuZ3RoOiAzLCB0eXBlOiAnc3VibWFyaW5lJyB9LFxuICAgICAgeyBsZW5ndGg6IDMsIHR5cGU6ICdkZXN0cm95ZXInIH0sXG4gICAgICB7IGxlbmd0aDogMiwgdHlwZTogJ3BhdHJvbCBib2F0JyB9LFxuICAgIF1cblxuICAgIGxldCBjb29yZHMgPSByYW5kb21Db29yZHMoKTtcbiAgICBsZXQgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnXG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICB3aGlsZSAoIXRoaXMucGxhY2VTaGlwKGNvb3Jkc1swXSwgY29vcmRzWzFdLCBkaXJlY3Rpb24sIHNoaXApKSB7XG4gICAgICAgIGNvb3JkcyA9IHJhbmRvbUNvb3JkcygpO1xuICAgICAgICBkaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA9PT0gMSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgICB9XG4gICAgfSlcbiAgfTtcblxuICByZXR1cm4gYm9hcmQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCb2FyZDsiLCJpbXBvcnQgY3JlYXRlQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQuanMnO1xuaW1wb3J0IHJhbmRvbUNvb3JkcyBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMuanMnO1xuXG5jb25zdCBjcmVhdGVQbGF5ZXIgPSAodHlwZSwgbmFtZSkgPT4ge1xuICBjb25zdCBwbGF5ZXIgPSB7fVxuICBwbGF5ZXIudHlwZSA9IHR5cGU7XG4gIHBsYXllci5uYW1lID0gbmFtZTtcbiAgcGxheWVyLmlzQWN0aXZlID0gZmFsc2U7XG4gIHBsYXllci5ib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG4gIHBsYXllci5tb3ZlcyA9IFtdO1xuXG4gIHBsYXllci5hdHRhY2sgPSBmdW5jdGlvbihib2FyZCwgeSwgeCkge1xuICAgIC8vY2hlY2sgZm9yIHJlYXBlYXQgbW92ZXNcbiAgICBpZiAodGhpcy5pc1JlcGVhdE1vdmUoW3ksIHhdKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy9hdHRhY2sgZW5lbXkgYm9hcmRcbiAgICBjb25zdCByZXN1bHQgPSBib2FyZC5yZWNlaXZlQXR0YWNrKHksIHgpO1xuICAgIHRoaXMubW92ZXMucHVzaChbeSwgeF0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBsYXllci5yYW5kb21BdHRhY2sgPSBmdW5jdGlvbihib2FyZCkge1xuICAgIGxldCBjb29yZHMgPSByYW5kb21Db29yZHMoKTtcblxuICAgIC8vY2hlY2sgZm9yIHJlcGVhdCBtb3Zlc1xuICAgIHdoaWxlICh0aGlzLmlzUmVwZWF0TW92ZShjb29yZHMpKSB7XG4gICAgICBjb29yZHMgPSByYW5kb21Db29yZHMoKTtcbiAgICB9XG5cbiAgICAvL2F0dGFjayBlbmVteSBib2FyZFxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuYXR0YWNrKGJvYXJkLCBjb29yZHNbMF0sIGNvb3Jkc1sxXSk7XG4gICAgdGhpcy5tb3Zlcy5wdXNoKFtjb29yZHNbMF0sIGNvb3Jkc1sxXV0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBsYXllci5pc1JlcGVhdE1vdmUgPSBmdW5jdGlvbihjb29yZHMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5tb3Zlc1tpXVswXSA9PT0gY29vcmRzWzBdICYmXG4gICAgICAgIHRoaXMubW92ZXNbaV1bMV0gPT09IGNvb3Jkc1sxXVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gcGxheWVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGxheWVyOyIsImNvbnN0IGNyZWF0ZVNoaXAgPSAobGVuZ3RoLCB0eXBlKSA9PiB7XG4gIGNvbnN0IHNoaXAgPSB7fVxuICBzaGlwLnN0YXR1cyA9ICdhZmxvYXQnXG4gIHNoaXAudHlwZSA9IHR5cGU7XG5cbiAgLy9hZGQgc2hpcCBoaXQgcG9pbnRzIGJhc2VkIG9uIGxlbmd0aFxuICBzaGlwLmhpdHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbGVuZ3RoOyBpKyspIHtcbiAgICBzaGlwLmhpdHMucHVzaChpKTtcbiAgfVxuXG4gIHNoaXAuaGl0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5oaXRzLnBvcCgpO1xuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5oaXRzLmxlbmd0aCA9PT0gMCA/ICdzdW5rJyA6ICdhZmxvYXQnO1xuICB9XG5cbiAgc2hpcC5pc1N1bmsgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdzdW5rJykgcmV0dXJuIHRydWU7XG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSAnYWZsb2F0JykgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHNoaXA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaGlwO1xuIiwiY29uc3QgcmFuZG9tQ29vcmRzID0gKCkgPT4ge1xuICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuXG4gIHJldHVybiBbeSwgeF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tQ29vcmRzO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tICcuL2ZhY3Rvcmllcy9wbGF5ZXIuanMnO1xuaW1wb3J0IHsgaW5pdCB9IGZyb20gJy4vZGlzcGxheS5qcyc7XG5pbXBvcnQgeyByZW5kZXJVc2VyQm9hcmQgfSBmcm9tICcuL2Rpc3BsYXkuanMnO1xuaW1wb3J0IHsgcmVuZGVyQ29tcHV0ZXJCb2FyZCB9IGZyb20gJy4vZGlzcGxheS5qcyc7XG5pbXBvcnQgeyB1cGRhdGVMb2cgfSBmcm9tICcuL2Rpc3BsYXkuanMnXG5pbXBvcnQgeyByZXNldERpc3BsYXkgfSBmcm9tICcuL2Rpc3BsYXkuanMnXG5pbXBvcnQgeyBvcGVuTW9kYWwgfSBmcm9tICcuL2Rpc3BsYXkuanMnXG5pbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSAnLi9kaXNwbGF5LmpzJ1xuaW1wb3J0IHsgcmVuZGVyU3RhcnRCb2FyZCB9IGZyb20gJy4vZGlzcGxheS5qcydcbmltcG9ydCB7IGRpc3BsYXlHYW1lT3ZlciB9IGZyb20gJy4vZGlzcGxheS5qcydcblxubGV0IHVzZXI7XG5sZXQgY29tcHV0ZXI7XG5sZXQgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xubGV0IGJhdHRsZUxvZyA9IFtdO1xubGV0IHNoaXBzUGxhY2VkID0gMDtcblxuY29uc3QgbmV3R2FtZSA9ICgpID0+IHtcbiAgcmVzZXRHYW1lKCk7XG4gIC8vY3JlYXRlIHVzZXIgcGxheWVyIGFuZCBwcm9tcHQgc2hpcCBwbGFjZW1lbnRcbiAgdXNlciA9IGNyZWF0ZVBsYXllcigndXNlcicpXG4gIHJlbmRlclN0YXJ0Qm9hcmQodXNlcik7XG4gIG9wZW5Nb2RhbCgpO1xufVxuXG5jb25zdCBzdGFydEdhbWUgPSAoaW5wdXQpID0+IHtcbiAgY2xvc2VNb2RhbCgpO1xuICB1cGRhdGVMb2coYmF0dGxlTG9nKTtcbiAgLy9jaGFuZ2UgdXNlciBuYW1lIGFuZCBzZXQgdG8gYWN0aXZlXG4gIHVzZXIubmFtZSA9IGlucHV0O1xuICB1c2VyLmlzQWN0aXZlID0gdHJ1ZTtcblxuICAvL2NyZWF0ZSBjb21wdXRlciBwbGF5ZXIgYW5kIHBvcHVsYXRlIGJvYXJkXG4gIGNvbXB1dGVyID0gY3JlYXRlUGxheWVyKCdjb21wdXRlcicsIGdldFJhbmRvbU5hbWUoKSlcbiAgY29tcHV0ZXIuYm9hcmQucG9wdWxhdGVCb2FyZCgpXG4gIFxuICAvL3JlbmRlciBET00gYm9hcmRzXG4gIHJlbmRlclVzZXJCb2FyZCh1c2VyKTtcbiAgcmVuZGVyQ29tcHV0ZXJCb2FyZChjb21wdXRlcik7XG59O1xuXG5jb25zdCByZXNldEdhbWUgPSAoKSA9PiB7XG4gIHVzZXIgPSB1bmRlZmluZWQ7XG4gIGNvbXB1dGVyID0gdW5kZWZpbmVkO1xuICBiYXR0bGVMb2cuc3BsaWNlKDAsIGJhdHRsZUxvZy5sZW5ndGgpO1xuICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gIHNoaXBzUGxhY2VkID0gMDtcbiAgcmVzZXREaXNwbGF5KCk7XG59XG5cbmNvbnN0IHVzZXJUdXJuID0gKGNvb3JkcykgPT4ge1xuICBsZXQgcmVzdWx0ID0gdXNlci5hdHRhY2soY29tcHV0ZXIuYm9hcmQsIGNvb3Jkc1swXSwgY29vcmRzWzFdKVxuICBpZiAoIXJlc3VsdCkge1xuICAgIHVzZXIuaXNBY3RpdmUgPSB0cnVlO1xuICAgIGNvbXB1dGVyLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgbmV4dFR1cm4oKTtcbiAgfSBlbHNlIHtcbiAgICB1c2VyLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgY29tcHV0ZXIuaXNBY3RpdmUgPSB0cnVlO1xuICAgIGJhdHRsZUxvZy51bnNoaWZ0KGAke3VzZXIubmFtZX06ICR7cmVzdWx0fSFgKVxuICAgIG5leHRUdXJuKCk7XG4gIH1cbn1cblxuY29uc3QgY29tcHV0ZXJUdXJuID0gKCkgPT4ge1xuICAvL2dlbmVyYXRlIHJhbmRvbSBhdHRhY2sgYW5kIHN0b3JlIHJlc3VsdFxuICBsZXQgcmVzdWx0ID0gY29tcHV0ZXIucmFuZG9tQXR0YWNrKHVzZXIuYm9hcmQpXG4gIGJhdHRsZUxvZy51bnNoaWZ0KGAke2NvbXB1dGVyLm5hbWV9OiAke3Jlc3VsdH0hYClcbiAgdXNlci5pc0FjdGl2ZSA9IHRydWU7XG4gIGNvbXB1dGVyLmlzQWN0aXZlID0gZmFsc2U7XG4gIG5leHRUdXJuKCk7XG59XG5cbmNvbnN0IG5leHRUdXJuID0gKCkgPT4ge1xuICAvL3JlbmRlciBET00gYW5kIGNoZWNrIGZvciB3aW5cbiAgcmVuZGVyVXNlckJvYXJkKHVzZXIpO1xuICByZW5kZXJDb21wdXRlckJvYXJkKGNvbXB1dGVyKTtcbiAgY29uc3QgZ2FtZU92ZXIgPSBjaGVja1dpbigpO1xuICB1cGRhdGVMb2coYmF0dGxlTG9nKTtcbiAgaWYgKGdhbWVPdmVyKSB7XG4gICAgcmVzZXRHYW1lKCk7XG4gICAgZGlzcGxheUdhbWVPdmVyKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy9jaGVjayBhY3RpdmUgdXNlclxuICBpZiAodXNlci5pc0FjdGl2ZSkgcmV0dXJuO1xuICBpZiAoY29tcHV0ZXIuaXNBY3RpdmUpIGNvbXB1dGVyVHVybigpO1xufVxuXG5jb25zdCBjaGVja1dpbiA9ICgpID0+IHtcbiAgaWYgKHVzZXIuYm9hcmQuaXNGbGVldFN1bmsoKSkge1xuICAgIGJhdHRsZUxvZy51bnNoaWZ0KGAke2NvbXB1dGVyLm5hbWV9IHdpbnMhIEZlZWQgJHt1c2VyLm5hbWV9IHRvIHRoZSBzaGFya3MuYClcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoY29tcHV0ZXIuYm9hcmQuaXNGbGVldFN1bmsoKSkge1xuICAgIGJhdHRsZUxvZy51bnNoaWZ0KGAke3VzZXIubmFtZX0gd2lucyEgRmVlZCAke2NvbXB1dGVyLm5hbWV9IHRvIHRoZSBzaGFya3MuYClcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmNvbnN0IGdldFJhbmRvbU5hbWUgPSAoKSA9PiB7XG4gIGNvbnN0IG5hbWVzID0gW1xuICAgICdMaWUgQm90JyxcbiAgICAnVmxhZCcsXG4gICAgJ0NodWNrbGVib3QnLFxuICAgICdEb3JhZW1vbicsXG4gICAgJ0FuZHJvaWQgMTYnLFxuICAgICdBbmRyb2lkIDE3JyxcbiAgICAnQW5kcm9pZCAxOCcsXG4gICAgJ0pvaG5ueSA1JyxcbiAgICAnSEFMIDkwMDAnLFxuICAgICdCZW5kZXIgQmVuZGluZyBSb2RyaWd1ZXonXG4gIF07XG5cbiAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICByZXR1cm4gbmFtZXNbaW5kZXhdXG59O1xuXG5jb25zdCBwbGFjZVNoaXBzID0gKGNvb3JkcykgPT4ge1xuICBjb25zdCBzaGlwcyA9IFtcbiAgICB7IGxlbmd0aDogNSwgdHlwZTogJ2NhcnJpZXInIH0sXG4gICAgeyBsZW5ndGg6IDQsIHR5cGU6ICdiYXR0bGVzaGlwJyB9LFxuICAgIHsgbGVuZ3RoOiAzLCB0eXBlOiAnc3VibWFyaW5lJyB9LFxuICAgIHsgbGVuZ3RoOiAzLCB0eXBlOiAnZGVzdHJveWVyJyB9LFxuICAgIHsgbGVuZ3RoOiAyLCB0eXBlOiAncGF0cm9sIGJvYXQnIH0sXG4gIF1cblxuICBsZXQgaW5kZXggPSBzaGlwc1BsYWNlZDtcbiAgbGV0IG9yaWVudGF0aW9uID0gZGlyZWN0aW9uO1xuICBsZXQgcmVzdWx0ID0gdXNlci5ib2FyZC5wbGFjZVNoaXAoY29vcmRzWzBdLCBjb29yZHNbMV0sIG9yaWVudGF0aW9uLCBzaGlwc1tpbmRleF0pXG5cbiAgaWYgKHJlc3VsdCkge1xuICAgIHNoaXBzUGxhY2VkKys7XG4gICAgcmVuZGVyU3RhcnRCb2FyZCh1c2VyKTtcbiAgfVxufVxuXG5jb25zdCB0b2dnbGVEaXJlY3Rpb24gPSAoKSA9PiB7XG4gIGRpcmVjdGlvbiA9IChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xufVxuXG5pbml0KCk7XG5cbmV4cG9ydCB7IFxuICB1c2VyVHVybiwgXG4gIG5ld0dhbWUsXG4gIHN0YXJ0R2FtZSwgXG4gIHRvZ2dsZURpcmVjdGlvbiwgXG4gIHBsYWNlU2hpcHMsXG4gIGRpcmVjdGlvbixcbiAgc2hpcHNQbGFjZWRcbiB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==