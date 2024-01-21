"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["index"],{

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
___CSS_LOADER_EXPORT___.push([module.id, `/** @format */

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
}

/* AFTER RESET */

.container {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 2rem;
  color: #fff;
}

.slideOne {
  background: linear-gradient(0deg, #4f4080, #9553ff);
}

.slideThree {
  background: linear-gradient(0deg, #ffffff, #4f4080);
}

.slideFour {
  color: black;
}

.icon {
  max-width: 100px;
}

.hello {
  font-size: 2rem;
}

.slides {
  flex: 1;
  width: 100%;
  min-height: 100vh;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s ease;
}

.message {
  position: absolute;
  overflow: visible;
  bottom: 0px;
  font-size: 1.5rem;
  animation: 1s bounce infinite alternate;
  transition: transform 0.3s ease;
}

.messageBox {
  font-size: 1rem;
}

@keyframes bounce {
  from {
    bottom: 30px;
  }
  to {
    bottom: 15px;
  }
}

.message:hover {
  cursor: pointer;

  /* use javascript to render a drag arrow beneath? */
}

.waving {
  align-items: center;
  width: 10rem;
  color: white;
  animation: 0.8s wave 4 alternate;
}

.waving:hover {
  cursor: pointer;
  animation: 0.8s wave infinite alternate;
}

@keyframes wave {
  from {
    rotate: 0deg;
  }
  to {
    rotate: 40deg;
  }
}

.nightSwitch {
  position: absolute;
  top: 0px;
  right: 20px;
  z-index: 100;
  margin-top: 10px;

  background: #e7e7ee;
  border-radius: 99px;
  box-shadow: black 0 10px 20px -10px;
  box-sizing: border-box;
  cursor: pointer;
  font-family: Inter, Helvetica;
  font-weight: 700;
  line-height: 24px;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
}

.nightSwitch {
  cursor: pointer;
}

.darkMode,
.default {
  background: linear-gradient(90deg, white, grey, black);
}

.lightMode {
  color: black;
  background: linear-gradient(90deg, black, orange, yellow);
}

.dark {
  background: black !important;
  color: white;
}

img {
  max-width: 60%;
}

.projectContainer {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: auto;
  max-width: 95%;
  max-height: 95vh;
  margin: auto;

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* On smaller screens, show one column */
    max-width: 70%;
    max-height: 30%;
  }

  @media (min-width: 601px) and (max-width: 900px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* On medium screens, show two columns */
  }

  @media (min-width: 901px) {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* On larger screens, show three columns */
  }
}

.projectCard {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  text-decoration: none;
  gap: 15px;
  font-size: 1.2rem;
  flex-direction: column;
  align-items: center;
  color: white;
  border-radius: 5px;
  padding: 8px;
  max-width: 100%;
  max-height: 100%;
  text-align: center;
}

.projectIcon:hover {
  max-width: 50%;
  cursor: pointer;
  filter: hue-rotate(90deg);
}

.projectCard:hover {
  cursor: pointer;
  background-color: rgba(13, 233, 182, 0.5);
}

.iconContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

a > .icon {
  max-width: 200px;
  padding-top: 30px;

  @media (max-width: 400px) {
    max-width: 70px;
  }

  @media (min-width: 401px) and (max-width: 600px) {
    max-width: 100px;
  }

  @media (min-width: 601px) {
    max-width: 150px;
  }
}

.darkIcon {
  filter: invert(100%);
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/** @format */\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* AFTER RESET */\n\n.container {\n  border: 1px solid green;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: \"Courier New\", Courier, monospace;\n  font-size: 2rem;\n  color: #fff;\n}\n\n.slideOne {\n  background: linear-gradient(0deg, #4f4080, #9553ff);\n}\n\n.slideThree {\n  background: linear-gradient(0deg, #ffffff, #4f4080);\n}\n\n.slideFour {\n  color: black;\n}\n\n.icon {\n  max-width: 100px;\n}\n\n.hello {\n  font-size: 2rem;\n}\n\n.slides {\n  flex: 1;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  gap: 2rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  transition: transform 0.3s ease;\n}\n\n.message {\n  position: absolute;\n  overflow: visible;\n  bottom: 0px;\n  font-size: 1.5rem;\n  animation: 1s bounce infinite alternate;\n  transition: transform 0.3s ease;\n}\n\n.messageBox {\n  font-size: 1rem;\n}\n\n@keyframes bounce {\n  from {\n    bottom: 30px;\n  }\n  to {\n    bottom: 15px;\n  }\n}\n\n.message:hover {\n  cursor: pointer;\n\n  /* use javascript to render a drag arrow beneath? */\n}\n\n.waving {\n  align-items: center;\n  width: 10rem;\n  color: white;\n  animation: 0.8s wave 4 alternate;\n}\n\n.waving:hover {\n  cursor: pointer;\n  animation: 0.8s wave infinite alternate;\n}\n\n@keyframes wave {\n  from {\n    rotate: 0deg;\n  }\n  to {\n    rotate: 40deg;\n  }\n}\n\n.nightSwitch {\n  position: absolute;\n  top: 0px;\n  right: 20px;\n  z-index: 100;\n  margin-top: 10px;\n\n  background: #e7e7ee;\n  border-radius: 99px;\n  box-shadow: black 0 10px 20px -10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  font-family: Inter, Helvetica;\n  font-weight: 700;\n  line-height: 24px;\n  padding: 8px 18px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: fit-content;\n  word-break: break-word;\n  border: 0;\n}\n\n.nightSwitch {\n  cursor: pointer;\n}\n\n.darkMode,\n.default {\n  background: linear-gradient(90deg, white, grey, black);\n}\n\n.lightMode {\n  color: black;\n  background: linear-gradient(90deg, black, orange, yellow);\n}\n\n.dark {\n  background: black !important;\n  color: white;\n}\n\nimg {\n  max-width: 60%;\n}\n\n.projectContainer {\n  display: grid;\n  align-items: center;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  margin: auto;\n  max-width: 95%;\n  max-height: 95vh;\n  margin: auto;\n\n  @media (max-width: 600px) {\n    grid-template-columns: 1fr; /* On smaller screens, show one column */\n    max-width: 70%;\n    max-height: 30%;\n  }\n\n  @media (min-width: 601px) and (max-width: 900px) {\n    grid-template-columns: repeat(\n      2,\n      1fr\n    ); /* On medium screens, show two columns */\n  }\n\n  @media (min-width: 901px) {\n    grid-template-columns: repeat(\n      3,\n      1fr\n    ); /* On larger screens, show three columns */\n  }\n}\n\n.projectCard {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  display: flex;\n  text-decoration: none;\n  gap: 15px;\n  font-size: 1.2rem;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  border-radius: 5px;\n  padding: 8px;\n  max-width: 100%;\n  max-height: 100%;\n  text-align: center;\n}\n\n.projectIcon:hover {\n  max-width: 50%;\n  cursor: pointer;\n  filter: hue-rotate(90deg);\n}\n\n.projectCard:hover {\n  cursor: pointer;\n  background-color: rgba(13, 233, 182, 0.5);\n}\n\n.iconContainer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 40px;\n}\n\na > .icon {\n  max-width: 200px;\n  padding-top: 30px;\n\n  @media (max-width: 400px) {\n    max-width: 70px;\n  }\n\n  @media (min-width: 401px) and (max-width: 600px) {\n    max-width: 100px;\n  }\n\n  @media (min-width: 601px) {\n    max-width: 150px;\n  }\n}\n\n.darkIcon {\n  filter: invert(100%);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _openHand_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openHand.svg */ "./src/openHand.svg");
/* harmony import */ var _marine_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marine.png */ "./src/marine.png");
/* harmony import */ var _landing_page_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page.png */ "./src/landing-page.png");
/* harmony import */ var _drawing_board_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawing-board.png */ "./src/drawing-board.png");
/* harmony import */ var _book_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book.png */ "./src/book.png");
/* harmony import */ var _task_list_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-list.png */ "./src/task-list.png");
/* harmony import */ var _weather_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./weather.png */ "./src/weather.png");
/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./github.png */ "./src/github.png");
/* harmony import */ var _linkedin_logo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./linkedin-logo.png */ "./src/linkedin-logo.png");
/* harmony import */ var _email_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./email.png */ "./src/email.png");
/** @format */












const main = document.querySelector(".main");

function RenderPage() {
  //create container
  const container = document.createElement("div");
  container.classList.add("container");

  //Slide 1 elements
  const slideOne = document.createElement("div");
  const slideOneHeader = document.createElement("h2");
  slideOneHeader.textContent = "Hi! I'm Tom";
  slideOneHeader.classList.add("hello");
  const messageContainer = document.createElement("div");
  slideOne.classList.add("slides");
  slideOne.classList.add("slideOne");

  //Hand icon
  const myHand = document.createElement("object");
  myHand.data = _openHand_svg__WEBPACK_IMPORTED_MODULE_1__;
  myHand.type = "image/svg+xml";
  myHand.classList.add("waving");

  //message box
  const messageBox = document.createElement("div");
  messageBox.textContent = "Nice to meet you!";
  messageBox.classList.add("messageBox");

  //Night mode button
  const nightSwitch = document.createElement("button");
  nightSwitch.classList.add("default");
  nightSwitch.classList.add("nightSwitch");
  nightSwitch.textContent = "Lights off";
  slideOne.appendChild(nightSwitch);

  //append elements
  slideOne.appendChild(slideOneHeader);
  slideOne.appendChild(myHand);
  slideOne.appendChild(messageBox);
  container.appendChild(slideOne);

  //content message
  const message = document.createElement("h1");
  message.textContent = "Check out my projects";
  message.classList.add("message");
  slideOne.appendChild(message);

  message.addEventListener("mouseenter", handleHover);
  message.addEventListener("mouseleave", handleHover);

  /* //slide 2 & elements
  const slideTwo = document.createElement("div");
  const slideTwoHeader = document.createElement("h2");
  const slideTwoImage = new Image();
  slideTwoImage.src = webDesign;
  slideTwoImage.classList.add("developerImage");
  slideTwoHeader.textContent = "I'm a developer";
  slideTwoHeader.classList.add("hello");
  slideTwo.classList.add("slides");
  slideTwo.classList.add("slideTwo"); */

  /* //append slide two
  slideTwo.appendChild(slideTwoHeader);
  slideTwo.appendChild(slideTwoImage);
  container.appendChild(slideTwo); */

  //slide 3 & elements
  const slideThree = document.createElement("div");
  slideThree.classList.add("slides");
  slideThree.classList.add("slideThree");
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("projectContainer");
  //card one
  const cardOne = document.createElement("a");
  cardOne.classList.add("projectCard");
  const cardOneHeader = document.createElement("h2");
  cardOneHeader.textContent = "Battleships";
  cardOne.href = "https://tomjs14.github.io/battleships/";
  cardOne.target = "_blank";
  const cardOneImage = new Image();
  cardOneImage.src = _marine_png__WEBPACK_IMPORTED_MODULE_2__;
  cardOneImage.classList.add("projectIcon");
  //card two
  const cardTwo = document.createElement("a");
  cardTwo.classList.add("projectCard");
  const cardTwoHeader = document.createElement("h2");
  cardTwoHeader.textContent = "Etch a Sketch";
  cardTwo.href = "https://tomjs14.github.io/etch-a-sketch/";
  cardTwo.target = "_blank";
  const cardTwoImage = new Image();
  cardTwoImage.src = _drawing_board_png__WEBPACK_IMPORTED_MODULE_4__;
  cardTwoImage.classList.add("projectIcon");
  //card three
  const cardThree = document.createElement("a");
  cardThree.classList.add("projectCard");
  const cardThreeHeader = document.createElement("h2");
  cardThreeHeader.textContent = "Landing Page";
  cardThree.href = "https://tomjs14.github.io/sign-up-form/";
  cardThree.target = "_blank";
  const cardThreeImage = new Image();
  cardThreeImage.src = _landing_page_png__WEBPACK_IMPORTED_MODULE_3__;
  cardThreeImage.classList.add("projectIcon");
  //card four
  const cardFour = document.createElement("a");
  cardFour.classList.add("projectCard");
  const cardFourHeader = document.createElement("h2");
  cardFourHeader.textContent = "Weather App";
  cardFour.href = "https://tomjs14.github.io/weather-app/";
  cardFour.target = "_blank";
  const cardFourImage = new Image();
  cardFourImage.src = _weather_png__WEBPACK_IMPORTED_MODULE_7__;
  cardFourImage.classList.add("projectIcon");
  //card five
  const cardFive = document.createElement("a");
  cardFive.classList.add("projectCard");
  const cardFiveHeader = document.createElement("h2");
  cardFiveHeader.textContent = "Library";
  cardFive.href = "https://tomjs14.github.io/library/";
  cardFive.target = "_https://tomjs14.github.io/library/";
  const cardFiveImage = new Image();
  cardFiveImage.src = _book_png__WEBPACK_IMPORTED_MODULE_5__;
  cardFiveImage.classList.add("projectIcon");
  //card six
  const cardSix = document.createElement("a");
  cardSix.classList.add("projectCard");
  const cardSixHeader = document.createElement("h2");
  cardSixHeader.textContent = "To Do App";
  cardSix.href = "https://tomjs14.github.io/to-do/";
  cardSix.target = "_blank";
  const cardSixImage = new Image();
  cardSixImage.src = _task_list_png__WEBPACK_IMPORTED_MODULE_6__;
  cardSixImage.classList.add("projectIcon");

  //append cards
  cardOne.appendChild(cardOneHeader);
  cardOne.appendChild(cardOneImage);
  cardTwo.appendChild(cardTwoHeader);
  cardTwo.appendChild(cardTwoImage);
  cardThree.appendChild(cardThreeHeader);
  cardThree.appendChild(cardThreeImage);
  cardFour.appendChild(cardFourHeader);
  cardFour.appendChild(cardFourImage);
  cardFive.appendChild(cardFiveHeader);
  cardFive.appendChild(cardFiveImage);
  cardSix.appendChild(cardSixHeader);
  cardSix.appendChild(cardSixImage);
  projectContainer.appendChild(cardOne);
  projectContainer.appendChild(cardTwo);
  projectContainer.appendChild(cardThree);
  projectContainer.appendChild(cardFour);
  projectContainer.appendChild(cardFive);
  projectContainer.appendChild(cardSix);

  slideThree.appendChild(projectContainer);
  container.appendChild(slideThree);

  //slide 4 & elements
  const slideFour = document.createElement("div");
  const slideFourHeader = document.createElement("h2");
  const iconContainer = document.createElement("div");
  iconContainer.classList.add("iconContainer");

  //links
  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/TomJS14";
  githubLink.target = "_blank"; // opens link in a new tab

  const linkedInLink = document.createElement("a");
  linkedInLink.href = "https://linkedin.com";
  linkedInLink.target = "_blank"; // opens link in a new tab

  const emailLink = document.createElement("a");
  emailLink.href = "https://gmail.com";
  emailLink.target = "_blank"; // opens link in a new tab

  //icons
  const linkedInImage = new Image();
  linkedInImage.src = _linkedin_logo_png__WEBPACK_IMPORTED_MODULE_9__;
  linkedInImage.classList.add("icon");
  const githubImage = new Image();
  githubImage.src = _github_png__WEBPACK_IMPORTED_MODULE_8__;
  githubImage.classList.add("icon");
  const emailImage = new Image();
  emailImage.src = _email_png__WEBPACK_IMPORTED_MODULE_10__;
  emailImage.classList.add("icon");
  slideFourHeader.textContent = "How to find me";
  slideFourHeader.classList.add("hello");
  slideFour.classList.add("slides");
  slideFour.classList.add("slideFour");

  //append slide 4
  githubLink.appendChild(githubImage);
  linkedInLink.appendChild(linkedInImage);
  emailLink.appendChild(emailImage);

  iconContainer.appendChild(linkedInLink);
  iconContainer.appendChild(githubLink);
  iconContainer.appendChild(emailLink);
  slideFour.appendChild(slideFourHeader);
  slideFour.appendChild(iconContainer);

  container.appendChild(slideFour);

  //append everything to main
  main.appendChild(container);

  return container;
}

const pageContainer = RenderPage();

function handleHover() {
  // Calculate the scroll position based on the message's hover state
  const scrollPosition = this.classList.contains("hovered")
    ? 0
    : this.clientHeight + 300; //Adjust the height value
  //set to scroll to the above position smoothly
  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });

  //toggle the hovered class to reverse the scroll??
  /* this.classList.toggle("hovered"); */
}

const nightSwitch = pageContainer.querySelector(".nightSwitch");
nightSwitch.addEventListener("click", DarkModeToggle);

function DarkModeToggle() {
  //switch to filters for background gradient?
  const objectElement = document.querySelector(".waving");
  const slideOne = document.querySelector(".slideOne");
  const slideThree = document.querySelector(".slideThree");
  const slideFour = document.querySelector(".slideFour");
  const icons = document.querySelectorAll(".icon");
  const svgDoc = objectElement.contentDocument; //access the svg document
  const pathElement = svgDoc.querySelector("path");
  if (nightSwitch.classList.contains("darkMode")) {
    nightSwitch.classList.remove("darkMode");
    nightSwitch.classList.add("lightMode");
    nightSwitch.textContent = "Lights On";
    slideOne.classList.add("dark");
    /* slideTwo.classList.add("dark"); */
    slideThree.classList.add("dark");
    slideFour.classList.add("dark");
    icons.forEach((icon) => {
      icon.classList.add("darkIcon");
    });

    pathElement.style.fill = "white"; //update the fill of the svg
  } else if (nightSwitch.classList.contains("default")) {
    nightSwitch.classList.remove("default");
    nightSwitch.classList.remove("darkMode");
    nightSwitch.classList.add("lightMode");
    nightSwitch.textContent = "Lights On";
    slideOne.classList.add("dark");
    icons.forEach((icon) => {
      icon.classList.add("darkIcon");
    });

    slideThree.classList.add("dark");
    slideFour.classList.add("dark");
    pathElement.style.fill = "white";
  } else {
    nightSwitch.classList.remove("lightMode");
    nightSwitch.classList.add("darkMode");
    nightSwitch.textContent = "Lights Off";
    slideOne.classList.remove("dark");
    icons.forEach((icon) => {
      icon.classList.remove("darkIcon");
    });

    slideThree.classList.remove("dark");
    slideFour.classList.remove("dark");
    pathElement.style.fill = "black"; //update the fill of the svg
  }
}


/***/ }),

/***/ "./src/book.png":
/*!**********************!*\
  !*** ./src/book.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc1843a86023d7d6ae1e.png";

/***/ }),

/***/ "./src/drawing-board.png":
/*!*******************************!*\
  !*** ./src/drawing-board.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc250224cb326891d081.png";

/***/ }),

/***/ "./src/email.png":
/*!***********************!*\
  !*** ./src/email.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3aa846ded39572a69df5.png";

/***/ }),

/***/ "./src/github.png":
/*!************************!*\
  !*** ./src/github.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f11021803f68852df283.png";

/***/ }),

/***/ "./src/landing-page.png":
/*!******************************!*\
  !*** ./src/landing-page.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "985813e3d821c7c875db.png";

/***/ }),

/***/ "./src/linkedin-logo.png":
/*!*******************************!*\
  !*** ./src/linkedin-logo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f00ba06e0ad6f3936c5b.png";

/***/ }),

/***/ "./src/marine.png":
/*!************************!*\
  !*** ./src/marine.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9262a561c5763cb522b.png";

/***/ }),

/***/ "./src/openHand.svg":
/*!**************************!*\
  !*** ./src/openHand.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c53239292eb772e8dae8.svg";

/***/ }),

/***/ "./src/task-list.png":
/*!***************************!*\
  !*** ./src/task-list.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8fad2f9ca7b843164cec.png";

/***/ }),

/***/ "./src/weather.png":
/*!*************************!*\
  !*** ./src/weather.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6417e166c775a59f6caa.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLHFGQUFxRixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksZ0JBQWdCLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxRQUFRLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksWUFBWSxLQUFLLHdCQUF3QixXQUFXLFVBQVUsT0FBTyxLQUFLLE9BQU8saUJBQWlCLE9BQU8sS0FBSyxPQUFPLGlCQUFpQixNQUFNLE1BQU0sS0FBSyxLQUFLLE9BQU8sV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZ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QUN0QztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiogQGZvcm1hdCAqL1xuXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBBRlRFUiBSRVNFVCAqL1xuXG4uY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNsaWRlT25lIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM0ZjQwODAsICM5NTUzZmYpO1xufVxuXG4uc2xpZGVUaHJlZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZmZmZmZmLCAjNGY0MDgwKTtcbn1cblxuLnNsaWRlRm91ciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmljb24ge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuXG4uaGVsbG8ge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5zbGlkZXMge1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuLm1lc3NhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGFuaW1hdGlvbjogMXMgYm91bmNlIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuLm1lc3NhZ2VCb3gge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlIHtcbiAgZnJvbSB7XG4gICAgYm90dG9tOiAzMHB4O1xuICB9XG4gIHRvIHtcbiAgICBib3R0b206IDE1cHg7XG4gIH1cbn1cblxuLm1lc3NhZ2U6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgLyogdXNlIGphdmFzY3JpcHQgdG8gcmVuZGVyIGEgZHJhZyBhcnJvdyBiZW5lYXRoPyAqL1xufVxuXG4ud2F2aW5nIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwcmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGFuaW1hdGlvbjogMC44cyB3YXZlIDQgYWx0ZXJuYXRlO1xufVxuXG4ud2F2aW5nOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbmltYXRpb246IDAuOHMgd2F2ZSBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgd2F2ZSB7XG4gIGZyb20ge1xuICAgIHJvdGF0ZTogMGRlZztcbiAgfVxuICB0byB7XG4gICAgcm90YXRlOiA0MGRlZztcbiAgfVxufVxuXG4ubmlnaHRTd2l0Y2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMjBweDtcbiAgei1pbmRleDogMTAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gIGJhY2tncm91bmQ6ICNlN2U3ZWU7XG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XG4gIGJveC1zaGFkb3c6IGJsYWNrIDAgMTBweCAyMHB4IC0xMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgSGVsdmV0aWNhO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgcGFkZGluZzogOHB4IDE4cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBib3JkZXI6IDA7XG59XG5cbi5uaWdodFN3aXRjaCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRhcmtNb2RlLFxuLmRlZmF1bHQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHdoaXRlLCBncmV5LCBibGFjayk7XG59XG5cbi5saWdodE1vZGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgYmxhY2ssIG9yYW5nZSwgeWVsbG93KTtcbn1cblxuLmRhcmsge1xuICBiYWNrZ3JvdW5kOiBibGFjayAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogNjAlO1xufVxuXG4ucHJvamVjdENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogOTUlO1xuICBtYXgtaGVpZ2h0OiA5NXZoO1xuICBtYXJnaW46IGF1dG87XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IC8qIE9uIHNtYWxsZXIgc2NyZWVucywgc2hvdyBvbmUgY29sdW1uICovXG4gICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgbWF4LWhlaWdodDogMzAlO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChcbiAgICAgIDIsXG4gICAgICAxZnJcbiAgICApOyAvKiBPbiBtZWRpdW0gc2NyZWVucywgc2hvdyB0d28gY29sdW1ucyAqL1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoXG4gICAgICAzLFxuICAgICAgMWZyXG4gICAgKTsgLyogT24gbGFyZ2VyIHNjcmVlbnMsIHNob3cgdGhyZWUgY29sdW1ucyAqL1xuICB9XG59XG5cbi5wcm9qZWN0Q2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGdhcDogMTVweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvamVjdEljb246aG92ZXIge1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmaWx0ZXI6IGh1ZS1yb3RhdGUoOTBkZWcpO1xufVxuXG4ucHJvamVjdENhcmQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMsIDIzMywgMTgyLCAwLjUpO1xufVxuXG4uaWNvbkNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDQwcHg7XG59XG5cbmEgPiAuaWNvbiB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAgIG1heC13aWR0aDogNzBweDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MDFweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDFweCkge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gIH1cbn1cblxuLmRhcmtJY29uIHtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGFBQWE7O0FBRWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtBQUNBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7RUFXRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7Ozs7RUFJRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsOENBQThDO0VBQzlDLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsT0FBTztFQUNQLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1Qjs7RUFFdkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHVDQUF1QztFQUN2QywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UsZUFBZTs7RUFFZixtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjs7RUFFaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLFlBQVk7RUFDWix5REFBeUQ7QUFDM0Q7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkRBQTJEO0VBQzNELFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7O0VBRVo7SUFDRSwwQkFBMEIsRUFBRSx3Q0FBd0M7SUFDcEUsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRTs7O0tBR0MsRUFBRSx3Q0FBd0M7RUFDN0M7O0VBRUE7SUFDRTs7O0tBR0MsRUFBRSwwQ0FBMEM7RUFDL0M7QUFDRjs7QUFFQTtFQUNFO3dFQUNzRTtFQUN0RSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7O0VBRWpCO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKiBAZm9ybWF0ICovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIEFGVEVSIFJFU0VUICovXFxuXFxuLmNvbnRhaW5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmllciBOZXdcXFwiLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnNsaWRlT25lIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjNGY0MDgwLCAjOTU1M2ZmKTtcXG59XFxuXFxuLnNsaWRlVGhyZWUge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNmZmZmZmYsICM0ZjQwODApO1xcbn1cXG5cXG4uc2xpZGVGb3VyIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmljb24ge1xcbiAgbWF4LXdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmhlbGxvIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnNsaWRlcyB7XFxuICBmbGV4OiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG59XFxuXFxuLm1lc3NhZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBib3R0b206IDBweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYW5pbWF0aW9uOiAxcyBib3VuY2UgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG59XFxuXFxuLm1lc3NhZ2VCb3gge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XFxuICBmcm9tIHtcXG4gICAgYm90dG9tOiAzMHB4O1xcbiAgfVxcbiAgdG8ge1xcbiAgICBib3R0b206IDE1cHg7XFxuICB9XFxufVxcblxcbi5tZXNzYWdlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIC8qIHVzZSBqYXZhc2NyaXB0IHRvIHJlbmRlciBhIGRyYWcgYXJyb3cgYmVuZWF0aD8gKi9cXG59XFxuXFxuLndhdmluZyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYW5pbWF0aW9uOiAwLjhzIHdhdmUgNCBhbHRlcm5hdGU7XFxufVxcblxcbi53YXZpbmc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYW5pbWF0aW9uOiAwLjhzIHdhdmUgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHdhdmUge1xcbiAgZnJvbSB7XFxuICAgIHJvdGF0ZTogMGRlZztcXG4gIH1cXG4gIHRvIHtcXG4gICAgcm90YXRlOiA0MGRlZztcXG4gIH1cXG59XFxuXFxuLm5pZ2h0U3dpdGNoIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICB6LWluZGV4OiAxMDA7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcblxcbiAgYmFja2dyb3VuZDogI2U3ZTdlZTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XFxuICBib3gtc2hhZG93OiBibGFjayAwIDEwcHggMjBweCAtMTBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogSW50ZXIsIEhlbHZldGljYTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHBhZGRpbmc6IDhweCAxOHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4ubmlnaHRTd2l0Y2gge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGFya01vZGUsXFxuLmRlZmF1bHQge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB3aGl0ZSwgZ3JleSwgYmxhY2spO1xcbn1cXG5cXG4ubGlnaHRNb2RlIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgYmxhY2ssIG9yYW5nZSwgeWVsbG93KTtcXG59XFxuXFxuLmRhcmsge1xcbiAgYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogNjAlO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA5NSU7XFxuICBtYXgtaGVpZ2h0OiA5NXZoO1xcbiAgbWFyZ2luOiBhdXRvO1xcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyAvKiBPbiBzbWFsbGVyIHNjcmVlbnMsIHNob3cgb25lIGNvbHVtbiAqL1xcbiAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgbWF4LWhlaWdodDogMzAlO1xcbiAgfVxcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoXFxuICAgICAgMixcXG4gICAgICAxZnJcXG4gICAgKTsgLyogT24gbWVkaXVtIHNjcmVlbnMsIHNob3cgdHdvIGNvbHVtbnMgKi9cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChcXG4gICAgICAzLFxcbiAgICAgIDFmclxcbiAgICApOyAvKiBPbiBsYXJnZXIgc2NyZWVucywgc2hvdyB0aHJlZSBjb2x1bW5zICovXFxuICB9XFxufVxcblxcbi5wcm9qZWN0Q2FyZCB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZ2FwOiAxNXB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0SWNvbjpob3ZlciB7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZpbHRlcjogaHVlLXJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5wcm9qZWN0Q2FyZDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAyMzMsIDE4MiwgMC41KTtcXG59XFxuXFxuLmljb25Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuYSA+IC5pY29uIHtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgICBtYXgtd2lkdGg6IDcwcHg7XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNDAxcHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xcbiAgfVxcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSB7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICB9XFxufVxcblxcbi5kYXJrSWNvbiB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgd2F2aW5nSGFuZCBmcm9tIFwiLi9vcGVuSGFuZC5zdmdcIjtcbmltcG9ydCBiYXR0bGVzaGlwSWNvbiBmcm9tIFwiLi9tYXJpbmUucG5nXCI7XG5pbXBvcnQgbGFuZGluZ1BhZ2VJY29uIGZyb20gXCIuL2xhbmRpbmctcGFnZS5wbmdcIjtcbmltcG9ydCBldGNoSWNvbiBmcm9tIFwiLi9kcmF3aW5nLWJvYXJkLnBuZ1wiO1xuaW1wb3J0IGxpYmFyeUljb24gZnJvbSBcIi4vYm9vay5wbmdcIjtcbmltcG9ydCB0b0RvSWNvbiBmcm9tIFwiLi90YXNrLWxpc3QucG5nXCI7XG5pbXBvcnQgd2VhdGhlckljb24gZnJvbSBcIi4vd2VhdGhlci5wbmdcIjtcbmltcG9ydCBnaXRodWJJY29uIGZyb20gXCIuL2dpdGh1Yi5wbmdcIjtcbmltcG9ydCBsaW5rZWRJbkljb24gZnJvbSBcIi4vbGlua2VkaW4tbG9nby5wbmdcIjtcbmltcG9ydCBlbWFpbEljb24gZnJvbSBcIi4vZW1haWwucG5nXCI7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuXG5mdW5jdGlvbiBSZW5kZXJQYWdlKCkge1xuICAvL2NyZWF0ZSBjb250YWluZXJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbiAgLy9TbGlkZSAxIGVsZW1lbnRzXG4gIGNvbnN0IHNsaWRlT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2xpZGVPbmVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHNsaWRlT25lSGVhZGVyLnRleHRDb250ZW50ID0gXCJIaSEgSSdtIFRvbVwiO1xuICBzbGlkZU9uZUhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVsbG9cIik7XG4gIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzbGlkZU9uZS5jbGFzc0xpc3QuYWRkKFwic2xpZGVzXCIpO1xuICBzbGlkZU9uZS5jbGFzc0xpc3QuYWRkKFwic2xpZGVPbmVcIik7XG5cbiAgLy9IYW5kIGljb25cbiAgY29uc3QgbXlIYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9iamVjdFwiKTtcbiAgbXlIYW5kLmRhdGEgPSB3YXZpbmdIYW5kO1xuICBteUhhbmQudHlwZSA9IFwiaW1hZ2Uvc3ZnK3htbFwiO1xuICBteUhhbmQuY2xhc3NMaXN0LmFkZChcIndhdmluZ1wiKTtcblxuICAvL21lc3NhZ2UgYm94XG4gIGNvbnN0IG1lc3NhZ2VCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZXNzYWdlQm94LnRleHRDb250ZW50ID0gXCJOaWNlIHRvIG1lZXQgeW91IVwiO1xuICBtZXNzYWdlQm94LmNsYXNzTGlzdC5hZGQoXCJtZXNzYWdlQm94XCIpO1xuXG4gIC8vTmlnaHQgbW9kZSBidXR0b25cbiAgY29uc3QgbmlnaHRTd2l0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuaWdodFN3aXRjaC5jbGFzc0xpc3QuYWRkKFwiZGVmYXVsdFwiKTtcbiAgbmlnaHRTd2l0Y2guY2xhc3NMaXN0LmFkZChcIm5pZ2h0U3dpdGNoXCIpO1xuICBuaWdodFN3aXRjaC50ZXh0Q29udGVudCA9IFwiTGlnaHRzIG9mZlwiO1xuICBzbGlkZU9uZS5hcHBlbmRDaGlsZChuaWdodFN3aXRjaCk7XG5cbiAgLy9hcHBlbmQgZWxlbWVudHNcbiAgc2xpZGVPbmUuYXBwZW5kQ2hpbGQoc2xpZGVPbmVIZWFkZXIpO1xuICBzbGlkZU9uZS5hcHBlbmRDaGlsZChteUhhbmQpO1xuICBzbGlkZU9uZS5hcHBlbmRDaGlsZChtZXNzYWdlQm94KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlT25lKTtcblxuICAvL2NvbnRlbnQgbWVzc2FnZVxuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJDaGVjayBvdXQgbXkgcHJvamVjdHNcIjtcbiAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwibWVzc2FnZVwiKTtcbiAgc2xpZGVPbmUuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG5cbiAgbWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBoYW5kbGVIb3Zlcik7XG4gIG1lc3NhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGFuZGxlSG92ZXIpO1xuXG4gIC8qIC8vc2xpZGUgMiAmIGVsZW1lbnRzXG4gIGNvbnN0IHNsaWRlVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2xpZGVUd29IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IHNsaWRlVHdvSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgc2xpZGVUd29JbWFnZS5zcmMgPSB3ZWJEZXNpZ247XG4gIHNsaWRlVHdvSW1hZ2UuY2xhc3NMaXN0LmFkZChcImRldmVsb3BlckltYWdlXCIpO1xuICBzbGlkZVR3b0hlYWRlci50ZXh0Q29udGVudCA9IFwiSSdtIGEgZGV2ZWxvcGVyXCI7XG4gIHNsaWRlVHdvSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWxsb1wiKTtcbiAgc2xpZGVUd28uY2xhc3NMaXN0LmFkZChcInNsaWRlc1wiKTtcbiAgc2xpZGVUd28uY2xhc3NMaXN0LmFkZChcInNsaWRlVHdvXCIpOyAqL1xuXG4gIC8qIC8vYXBwZW5kIHNsaWRlIHR3b1xuICBzbGlkZVR3by5hcHBlbmRDaGlsZChzbGlkZVR3b0hlYWRlcik7XG4gIHNsaWRlVHdvLmFwcGVuZENoaWxkKHNsaWRlVHdvSW1hZ2UpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2xpZGVUd28pOyAqL1xuXG4gIC8vc2xpZGUgMyAmIGVsZW1lbnRzXG4gIGNvbnN0IHNsaWRlVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzbGlkZVRocmVlLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXNcIik7XG4gIHNsaWRlVGhyZWUuY2xhc3NMaXN0LmFkZChcInNsaWRlVGhyZWVcIik7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Q29udGFpbmVyXCIpO1xuICAvL2NhcmQgb25lXG4gIGNvbnN0IGNhcmRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgY2FyZE9uZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdENhcmRcIik7XG4gIGNvbnN0IGNhcmRPbmVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNhcmRPbmVIZWFkZXIudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXBzXCI7XG4gIGNhcmRPbmUuaHJlZiA9IFwiaHR0cHM6Ly90b21qczE0LmdpdGh1Yi5pby9iYXR0bGVzaGlwcy9cIjtcbiAgY2FyZE9uZS50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBjb25zdCBjYXJkT25lSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgY2FyZE9uZUltYWdlLnNyYyA9IGJhdHRsZXNoaXBJY29uO1xuICBjYXJkT25lSW1hZ2UuY2xhc3NMaXN0LmFkZChcInByb2plY3RJY29uXCIpO1xuICAvL2NhcmQgdHdvXG4gIGNvbnN0IGNhcmRUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgY2FyZFR3by5jbGFzc0xpc3QuYWRkKFwicHJvamVjdENhcmRcIik7XG4gIGNvbnN0IGNhcmRUd29IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNhcmRUd29IZWFkZXIudGV4dENvbnRlbnQgPSBcIkV0Y2ggYSBTa2V0Y2hcIjtcbiAgY2FyZFR3by5ocmVmID0gXCJodHRwczovL3RvbWpzMTQuZ2l0aHViLmlvL2V0Y2gtYS1za2V0Y2gvXCI7XG4gIGNhcmRUd28udGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgY29uc3QgY2FyZFR3b0ltYWdlID0gbmV3IEltYWdlKCk7XG4gIGNhcmRUd29JbWFnZS5zcmMgPSBldGNoSWNvbjtcbiAgY2FyZFR3b0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0SWNvblwiKTtcbiAgLy9jYXJkIHRocmVlXG4gIGNvbnN0IGNhcmRUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjYXJkVGhyZWUuY2xhc3NMaXN0LmFkZChcInByb2plY3RDYXJkXCIpO1xuICBjb25zdCBjYXJkVGhyZWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNhcmRUaHJlZUhlYWRlci50ZXh0Q29udGVudCA9IFwiTGFuZGluZyBQYWdlXCI7XG4gIGNhcmRUaHJlZS5ocmVmID0gXCJodHRwczovL3RvbWpzMTQuZ2l0aHViLmlvL3NpZ24tdXAtZm9ybS9cIjtcbiAgY2FyZFRocmVlLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGNvbnN0IGNhcmRUaHJlZUltYWdlID0gbmV3IEltYWdlKCk7XG4gIGNhcmRUaHJlZUltYWdlLnNyYyA9IGxhbmRpbmdQYWdlSWNvbjtcbiAgY2FyZFRocmVlSW1hZ2UuY2xhc3NMaXN0LmFkZChcInByb2plY3RJY29uXCIpO1xuICAvL2NhcmQgZm91clxuICBjb25zdCBjYXJkRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjYXJkRm91ci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdENhcmRcIik7XG4gIGNvbnN0IGNhcmRGb3VySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjYXJkRm91ckhlYWRlci50ZXh0Q29udGVudCA9IFwiV2VhdGhlciBBcHBcIjtcbiAgY2FyZEZvdXIuaHJlZiA9IFwiaHR0cHM6Ly90b21qczE0LmdpdGh1Yi5pby93ZWF0aGVyLWFwcC9cIjtcbiAgY2FyZEZvdXIudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgY29uc3QgY2FyZEZvdXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBjYXJkRm91ckltYWdlLnNyYyA9IHdlYXRoZXJJY29uO1xuICBjYXJkRm91ckltYWdlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0SWNvblwiKTtcbiAgLy9jYXJkIGZpdmVcbiAgY29uc3QgY2FyZEZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgY2FyZEZpdmUuY2xhc3NMaXN0LmFkZChcInByb2plY3RDYXJkXCIpO1xuICBjb25zdCBjYXJkRml2ZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY2FyZEZpdmVIZWFkZXIudGV4dENvbnRlbnQgPSBcIkxpYnJhcnlcIjtcbiAgY2FyZEZpdmUuaHJlZiA9IFwiaHR0cHM6Ly90b21qczE0LmdpdGh1Yi5pby9saWJyYXJ5L1wiO1xuICBjYXJkRml2ZS50YXJnZXQgPSBcIl9odHRwczovL3RvbWpzMTQuZ2l0aHViLmlvL2xpYnJhcnkvXCI7XG4gIGNvbnN0IGNhcmRGaXZlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgY2FyZEZpdmVJbWFnZS5zcmMgPSBsaWJhcnlJY29uO1xuICBjYXJkRml2ZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0SWNvblwiKTtcbiAgLy9jYXJkIHNpeFxuICBjb25zdCBjYXJkU2l4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNhcmRTaXguY2xhc3NMaXN0LmFkZChcInByb2plY3RDYXJkXCIpO1xuICBjb25zdCBjYXJkU2l4SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjYXJkU2l4SGVhZGVyLnRleHRDb250ZW50ID0gXCJUbyBEbyBBcHBcIjtcbiAgY2FyZFNpeC5ocmVmID0gXCJodHRwczovL3RvbWpzMTQuZ2l0aHViLmlvL3RvLWRvL1wiO1xuICBjYXJkU2l4LnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGNvbnN0IGNhcmRTaXhJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBjYXJkU2l4SW1hZ2Uuc3JjID0gdG9Eb0ljb247XG4gIGNhcmRTaXhJbWFnZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEljb25cIik7XG5cbiAgLy9hcHBlbmQgY2FyZHNcbiAgY2FyZE9uZS5hcHBlbmRDaGlsZChjYXJkT25lSGVhZGVyKTtcbiAgY2FyZE9uZS5hcHBlbmRDaGlsZChjYXJkT25lSW1hZ2UpO1xuICBjYXJkVHdvLmFwcGVuZENoaWxkKGNhcmRUd29IZWFkZXIpO1xuICBjYXJkVHdvLmFwcGVuZENoaWxkKGNhcmRUd29JbWFnZSk7XG4gIGNhcmRUaHJlZS5hcHBlbmRDaGlsZChjYXJkVGhyZWVIZWFkZXIpO1xuICBjYXJkVGhyZWUuYXBwZW5kQ2hpbGQoY2FyZFRocmVlSW1hZ2UpO1xuICBjYXJkRm91ci5hcHBlbmRDaGlsZChjYXJkRm91ckhlYWRlcik7XG4gIGNhcmRGb3VyLmFwcGVuZENoaWxkKGNhcmRGb3VySW1hZ2UpO1xuICBjYXJkRml2ZS5hcHBlbmRDaGlsZChjYXJkRml2ZUhlYWRlcik7XG4gIGNhcmRGaXZlLmFwcGVuZENoaWxkKGNhcmRGaXZlSW1hZ2UpO1xuICBjYXJkU2l4LmFwcGVuZENoaWxkKGNhcmRTaXhIZWFkZXIpO1xuICBjYXJkU2l4LmFwcGVuZENoaWxkKGNhcmRTaXhJbWFnZSk7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZE9uZSk7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZFR3byk7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZFRocmVlKTtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRm91cik7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZEZpdmUpO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRTaXgpO1xuXG4gIHNsaWRlVGhyZWUuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZVRocmVlKTtcblxuICAvL3NsaWRlIDQgJiBlbGVtZW50c1xuICBjb25zdCBzbGlkZUZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzbGlkZUZvdXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpY29uQ29udGFpbmVyXCIpO1xuXG4gIC8vbGlua3NcbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9Ub21KUzE0XCI7XG4gIGdpdGh1YkxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjsgLy8gb3BlbnMgbGluayBpbiBhIG5ldyB0YWJcblxuICBjb25zdCBsaW5rZWRJbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbGlua2VkSW5MaW5rLmhyZWYgPSBcImh0dHBzOi8vbGlua2VkaW4uY29tXCI7XG4gIGxpbmtlZEluTGluay50YXJnZXQgPSBcIl9ibGFua1wiOyAvLyBvcGVucyBsaW5rIGluIGEgbmV3IHRhYlxuXG4gIGNvbnN0IGVtYWlsTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBlbWFpbExpbmsuaHJlZiA9IFwiaHR0cHM6Ly9nbWFpbC5jb21cIjtcbiAgZW1haWxMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7IC8vIG9wZW5zIGxpbmsgaW4gYSBuZXcgdGFiXG5cbiAgLy9pY29uc1xuICBjb25zdCBsaW5rZWRJbkltYWdlID0gbmV3IEltYWdlKCk7XG4gIGxpbmtlZEluSW1hZ2Uuc3JjID0gbGlua2VkSW5JY29uO1xuICBsaW5rZWRJbkltYWdlLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuICBjb25zdCBnaXRodWJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBnaXRodWJJbWFnZS5zcmMgPSBnaXRodWJJY29uO1xuICBnaXRodWJJbWFnZS5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgY29uc3QgZW1haWxJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBlbWFpbEltYWdlLnNyYyA9IGVtYWlsSWNvbjtcbiAgZW1haWxJbWFnZS5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgc2xpZGVGb3VySGVhZGVyLnRleHRDb250ZW50ID0gXCJIb3cgdG8gZmluZCBtZVwiO1xuICBzbGlkZUZvdXJIZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlbGxvXCIpO1xuICBzbGlkZUZvdXIuY2xhc3NMaXN0LmFkZChcInNsaWRlc1wiKTtcbiAgc2xpZGVGb3VyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZUZvdXJcIik7XG5cbiAgLy9hcHBlbmQgc2xpZGUgNFxuICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1YkltYWdlKTtcbiAgbGlua2VkSW5MaW5rLmFwcGVuZENoaWxkKGxpbmtlZEluSW1hZ2UpO1xuICBlbWFpbExpbmsuYXBwZW5kQ2hpbGQoZW1haWxJbWFnZSk7XG5cbiAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rZWRJbkxpbmspO1xuICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsTGluayk7XG4gIHNsaWRlRm91ci5hcHBlbmRDaGlsZChzbGlkZUZvdXJIZWFkZXIpO1xuICBzbGlkZUZvdXIuYXBwZW5kQ2hpbGQoaWNvbkNvbnRhaW5lcik7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlRm91cik7XG5cbiAgLy9hcHBlbmQgZXZlcnl0aGluZyB0byBtYWluXG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBwYWdlQ29udGFpbmVyID0gUmVuZGVyUGFnZSgpO1xuXG5mdW5jdGlvbiBoYW5kbGVIb3ZlcigpIHtcbiAgLy8gQ2FsY3VsYXRlIHRoZSBzY3JvbGwgcG9zaXRpb24gYmFzZWQgb24gdGhlIG1lc3NhZ2UncyBob3ZlciBzdGF0ZVxuICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaG92ZXJlZFwiKVxuICAgID8gMFxuICAgIDogdGhpcy5jbGllbnRIZWlnaHQgKyAzMDA7IC8vQWRqdXN0IHRoZSBoZWlnaHQgdmFsdWVcbiAgLy9zZXQgdG8gc2Nyb2xsIHRvIHRoZSBhYm92ZSBwb3NpdGlvbiBzbW9vdGhseVxuICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgIHRvcDogc2Nyb2xsUG9zaXRpb24sXG4gICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gIH0pO1xuXG4gIC8vdG9nZ2xlIHRoZSBob3ZlcmVkIGNsYXNzIHRvIHJldmVyc2UgdGhlIHNjcm9sbD8/XG4gIC8qIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImhvdmVyZWRcIik7ICovXG59XG5cbmNvbnN0IG5pZ2h0U3dpdGNoID0gcGFnZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm5pZ2h0U3dpdGNoXCIpO1xubmlnaHRTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERhcmtNb2RlVG9nZ2xlKTtcblxuZnVuY3Rpb24gRGFya01vZGVUb2dnbGUoKSB7XG4gIC8vc3dpdGNoIHRvIGZpbHRlcnMgZm9yIGJhY2tncm91bmQgZ3JhZGllbnQ/XG4gIGNvbnN0IG9iamVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndhdmluZ1wiKTtcbiAgY29uc3Qgc2xpZGVPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlT25lXCIpO1xuICBjb25zdCBzbGlkZVRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZVRocmVlXCIpO1xuICBjb25zdCBzbGlkZUZvdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlRm91clwiKTtcbiAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmljb25cIik7XG4gIGNvbnN0IHN2Z0RvYyA9IG9iamVjdEVsZW1lbnQuY29udGVudERvY3VtZW50OyAvL2FjY2VzcyB0aGUgc3ZnIGRvY3VtZW50XG4gIGNvbnN0IHBhdGhFbGVtZW50ID0gc3ZnRG9jLnF1ZXJ5U2VsZWN0b3IoXCJwYXRoXCIpO1xuICBpZiAobmlnaHRTd2l0Y2guY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya01vZGVcIikpIHtcbiAgICBuaWdodFN3aXRjaC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya01vZGVcIik7XG4gICAgbmlnaHRTd2l0Y2guY2xhc3NMaXN0LmFkZChcImxpZ2h0TW9kZVwiKTtcbiAgICBuaWdodFN3aXRjaC50ZXh0Q29udGVudCA9IFwiTGlnaHRzIE9uXCI7XG4gICAgc2xpZGVPbmUuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG4gICAgLyogc2xpZGVUd28uY2xhc3NMaXN0LmFkZChcImRhcmtcIik7ICovXG4gICAgc2xpZGVUaHJlZS5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcbiAgICBzbGlkZUZvdXIuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG4gICAgaWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZGFya0ljb25cIik7XG4gICAgfSk7XG5cbiAgICBwYXRoRWxlbWVudC5zdHlsZS5maWxsID0gXCJ3aGl0ZVwiOyAvL3VwZGF0ZSB0aGUgZmlsbCBvZiB0aGUgc3ZnXG4gIH0gZWxzZSBpZiAobmlnaHRTd2l0Y2guY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVmYXVsdFwiKSkge1xuICAgIG5pZ2h0U3dpdGNoLmNsYXNzTGlzdC5yZW1vdmUoXCJkZWZhdWx0XCIpO1xuICAgIG5pZ2h0U3dpdGNoLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrTW9kZVwiKTtcbiAgICBuaWdodFN3aXRjaC5jbGFzc0xpc3QuYWRkKFwibGlnaHRNb2RlXCIpO1xuICAgIG5pZ2h0U3dpdGNoLnRleHRDb250ZW50ID0gXCJMaWdodHMgT25cIjtcbiAgICBzbGlkZU9uZS5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcbiAgICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJkYXJrSWNvblwiKTtcbiAgICB9KTtcblxuICAgIHNsaWRlVGhyZWUuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG4gICAgc2xpZGVGb3VyLmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xuICAgIHBhdGhFbGVtZW50LnN0eWxlLmZpbGwgPSBcIndoaXRlXCI7XG4gIH0gZWxzZSB7XG4gICAgbmlnaHRTd2l0Y2guY2xhc3NMaXN0LnJlbW92ZShcImxpZ2h0TW9kZVwiKTtcbiAgICBuaWdodFN3aXRjaC5jbGFzc0xpc3QuYWRkKFwiZGFya01vZGVcIik7XG4gICAgbmlnaHRTd2l0Y2gudGV4dENvbnRlbnQgPSBcIkxpZ2h0cyBPZmZcIjtcbiAgICBzbGlkZU9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKTtcbiAgICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICBpY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrSWNvblwiKTtcbiAgICB9KTtcblxuICAgIHNsaWRlVGhyZWUuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XG4gICAgc2xpZGVGb3VyLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpO1xuICAgIHBhdGhFbGVtZW50LnN0eWxlLmZpbGwgPSBcImJsYWNrXCI7IC8vdXBkYXRlIHRoZSBmaWxsIG9mIHRoZSBzdmdcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9