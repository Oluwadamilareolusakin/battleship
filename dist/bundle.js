/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/main.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/main.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0; }\n\n.block {\n  height: 3vw;\n  width: 3vw;\n  background-color: rgba(0, 0, 0, 0.8);\n  border: 0.1vw solid black;\n  display: inline-block; }\n\n.first {\n  clear: left; }\n\n.white {\n  background-color: white; }\n\n.player-ship {\n  background-color: grey; }\n\n.red {\n  background-color: red; }\n\n.board {\n  display: inline-block;\n  clear: both;\n  margin-top: 5vw;\n  margin-left: 32vw;\n  border: 0.6vw solid white; }\n\n.game-status-text {\n  display: inline-block;\n  width: 25vw;\n  height: 5vw;\n  font-size: 2vw;\n  font-weight: bold;\n  color: white;\n  background-color: green;\n  border: 0.3vw solid white;\n  clear: left;\n  margin-left: 36vw;\n  margin-top: 4vw;\n  padding-top: 2.5vw;\n  text-align: center; }\n\n.reset-btn {\n  display: inline-block;\n  width: 20vw;\n  height: 10vw;\n  color: white;\n  background-color: green;\n  border: 0.6vw solid white;\n  font-size: 3vw;\n  font-weight: bold;\n  float: right;\n  margin-top: 2vw;\n  margin-right: 10vw; }\n\n@media only screen and (max-width: 600px) {\n  .square {\n    height: 7vw;\n    width: 7vw;\n    border: 0.1vw solid black; }\n  .board {\n    margin-top: 5vw;\n    margin-left: 13.5vw;\n    border: 0.6vw solid white; }\n  .top-board {\n    margin-top: 2vw; }\n  .bottom-board {\n    margin-bottom: 2vw; }\n  .game-status-text {\n    font-family: sans-serif;\n    display: inline-block;\n    width: 40vw;\n    height: 8vw;\n    font-size: 3.5vw;\n    border: 0.5vw solid white;\n    float: none;\n    clear: none;\n    margin-left: 13vw;\n    margin-top: 3vw;\n    margin-bottom: -6vw;\n    padding-top: 2.5vw;\n    margin-right: 2vw; }\n  .reset-btn {\n    display: inline-block;\n    width: 30vw;\n    height: 11.5vw;\n    border: 0.5vw solid white;\n    float: none;\n    clear: none;\n    font-size: 4vw;\n    margin: 0;\n    transform: translateY(1.5vw); } }\n\n@media only screen and (min-width: 1000px) {\n  .square {\n    height: 30px;\n    width: 30px;\n    border: 1px solid black; }\n  .board {\n    margin-top: 50px;\n    margin-left: 32vw;\n    border: 6px solid white; }\n  .game-status-text {\n    width: 250px;\n    height: 50px;\n    font-size: 20px;\n    border: 3px solid white;\n    float: none;\n    clear: none;\n    margin-left: 36vw;\n    margin-top: 45px;\n    margin-bottom: -20px;\n    padding-top: 25px; }\n  .reset-btn {\n    width: 200px;\n    height: 100px;\n    border: 6px solid white;\n    float: none;\n    clear: none;\n    font-size: 30px;\n    transform: translateY(-10px);\n    margin-left: 10vw; } }\n\n@media only screen and (min-width: 1500px) {\n  .square {\n    height: 30px;\n    width: 30px;\n    border: 1px solid black; }\n  .board {\n    margin-top: 50px;\n    margin-left: 40vw;\n    border: 6px solid white; }\n  .game-status-text {\n    display: inline-block;\n    width: 250px;\n    height: 50px;\n    font-size: 20px;\n    border: 3px solid white;\n    float: none;\n    clear: none;\n    margin-left: 42vw;\n    margin-top: 45px;\n    margin-bottom: -20px;\n    padding-top: 25px;\n    padding-bottom: -25px; }\n  .reset-btn {\n    width: 200px;\n    height: 100px;\n    border: 6px solid white;\n    float: none;\n    clear: none;\n    font-size: 30px;\n    transform: translateY(-10px);\n    margin-left: 10vw; } }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ship = __webpack_require__(/*! ./ship */ "./src/ship.js");
const generateCoordinates = __webpack_require__(/*! ./generateCoordinates */ "./src/generateCoordinates.js"); 
const setStatusMessage = __webpack_require__(/*! ./prompts */ "./src/prompts.js");
const isWinningMove = __webpack_require__(/*! ./gameOver */ "./src/gameOver.js");

class Gameboard {
  constructor() {
    let self = this;
    this.sunkenShips = 0;
    this.ships = [];
    this.board = [];
    let gameStatusText = document.querySelector('.game-status-text');
    for (let i = 0; i < 10; i++) {
      this.board.push(new Array(10).fill(0));
    }

    const randomPlacement = (shipLength) => {
        let x = -5;
        let y = -5;
        while (x + shipLength < 0 || x + shipLength > 9 || y + shipLength < 0 || y + shipLength > 9) {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
        }

        let shipDirection = Math.random() < 0.5 ? "horizontal" : "vertical";
        let newShip;
        if (shipDirection == "vertical") {
          newShip = ship(`ship${shipLength+1}`, {x, y}, {x, y: y+shipLength});
        } else {
          newShip = ship(`ship${shipLength+1}`, {x, y}, {x: x+shipLength, y});
        }

        let positionisValid = true
        newShip.positions.forEach(position => {
          if (self.board[position.x][position.y] != 0) {
            positionisValid = false;
          }
        });

        if (positionisValid) {
          self.ships.push(newShip);
          newShip.positions.forEach(position => {
            self.board[position.x][position.y] = 1;
          });
        }

        return positionisValid;
    }

    let shipLengths = [4,3,3,2,1];
    shipLengths.forEach(shipLength => {
      let placed;
      do {
        placed = randomPlacement(shipLength);
      } while (!placed)

    });
    let count = 0;
    this.board.forEach(row => row.forEach((coordinate) => {
      if (coordinate == 1) { count++; }
    }));

    this.lastShotSucceeded = false;
    this.lastShotXY = null;
    this.shotsSinceLastHit = 0;
  }

  attack(event){  
    let targetBlock = this.gameboard.board[this.x][this.y];
    let gameStatusText = document.querySelector('.game-status-text');
    gameStatusText.innerHTML = '';

    this.gameboard.findAndHitShip(this.gameboard, this, 'player');

    if (targetBlock == 1) {
      event.target.classList.add('red');
    } else {
      targetBlock = 2;
      event.target.classList.add('white');
    }

    this.removeEventListener('click', this.gameboard.attack);
  }

  aiAttack(){
    this.removeEventListener('click', this.enemyboard.aiAttack);
    let board = document.querySelectorAll('.board')[0];
    let shotTarget;

    if (this.enemyboard.lastShotSucceeded) {
      shotTarget = this.enemyboard.shootTargetedShot(this);
    } else {
      shotTarget = this.enemyboard.shootRandomShot(this);
    }

    let computerTarget = document.getElementById(`X${shotTarget.x}-Y${shotTarget.y}`);

    if (this.enemyboard.board[shotTarget.x][shotTarget.y] == 1) {
      computerTarget.classList.toggle('red');
      this.enemyboard.lastShotSucceeded = true;
      this.enemyboard.shotsSinceLastHit = 0;
      this.enemyboard.lastShotXY = { x: shotTarget.x, y: shotTarget.y };
      this.enemyboard.findAndHitShip(this.enemyboard, shotTarget, 'Computer')

    } else {
      computerTarget.classList.toggle('white');
      this.enemyboard.shotsSinceLastHit++;
      if (this.enemyboard.shotsSinceLastHit >= 4) {
        this.enemyboard.lastShotSucceeded = false;
      }
    }
    this.enemyboard.board[shotTarget.x][shotTarget.y] = 2;
  }

  shootTargetedShot(target){
    let count = 1;
    let shotTarget = generateCoordinates(target.enemyboard.lastShotXY);
    while (target.enemyboard.board[shotTarget.x][shotTarget.y] == 2 && count < 5) {
      shotTarget = generateCoordinates(target.enemyboard.lastShotXY);
      count++;
    }

    if (count == 5) {
      shotTarget = target.enemyboard.shootRandomShot(target);
    }

    return shotTarget;
  }

  shootRandomShot(target){
    let shotTarget = generateCoordinates();
    while (target.enemyboard.board[shotTarget.x][shotTarget.y] == 2) {
      shotTarget = generateCoordinates();
    }
    return shotTarget;
  }

  findAndHitShip(targetBoard, target, player){
      for (let ship of targetBoard.ships) {
        for (let position of ship.positions) {
          if (position.x == target.x && position.y == target.y) {
              ship.hit({x: target.x, y: target.y});
              if (ship.sunk) {
                targetBoard.sunkenShips++;
                console.log(targetBoard.sunkenShips)
                setStatusMessage(player);
                isWinningMove(targetBoard, player);
              }
              break;
          }
        }
      }
    }
  
}

module.exports = Gameboard;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const board = __webpack_require__(/*! ./board */ "./src/board.js");

const initializeBoard = (playerBoard, aiBoard = null) => {
  let boardHolder = document.createElement('div');
  boardHolder.classList.add('board');
  if (aiBoard !== null) {
    boardHolder.classList.add("top-board");
  } else {
    boardHolder.classList.add("bottom-board");
  }
  document.body.appendChild(boardHolder);
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      let block = document.createElement('div');
      block.classList.add('block');

      if (aiBoard === null) {
        block.id = `X${x}-Y${y}`
      }


      if (y == 0) {
        block.classList.toggle('first');
      }
      
      block.x = x;
      block.y = y;

      block.gameboard = playerBoard;
      block.enemyboard = aiBoard;
      if (aiBoard !== null) {
        block.addEventListener('click', aiBoard.aiAttack);
        block.addEventListener('click', playerBoard.attack);
      } else if (playerBoard.board[x][y] == 1) {
        block.classList.toggle('player-ship');
      }
      boardHolder.appendChild(block);
    }
  }
}

const setup = () => {
  let playerBoard = new board();
  let aiBoard = new board();

  initializeBoard(aiBoard, playerBoard);

  let gameStatusText = document.createElement('div');
  gameStatusText.classList.add('game-status-text');
  document.body.appendChild(gameStatusText);


  let resetButton = document.createElement('input');
  resetButton.type = "button";

  resetButton.classList.add('reset-btn');
  resetButton.value = "New Game";
  resetButton.addEventListener('click', () => window.location.reload());
  document.body.appendChild(resetButton);


  initializeBoard(playerBoard);
}

module.exports = setup;


/***/ }),

/***/ "./src/gameOver.js":
/*!*************************!*\
  !*** ./src/gameOver.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

const isWinningMove = (player, currentBoard) => {
  let board = document.querySelectorAll('.board')[0];
  let gameStatusDiv = document.querySelector('.game-status-text');

  if (currentBoard.sunkenShips >= 5) {
    board.style.pointerEvents = 'none';
    if (player == 'player') {
      gameStatusDiv.innerHTML = 'You Win!';
    } else {
      gameStatusDiv.innerHTML = 'You Lose!';
    }
  }
}

module.exports = isWinningMove;

/***/ }),

/***/ "./src/generateCoordinates.js":
/*!************************************!*\
  !*** ./src/generateCoordinates.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {


const generateCoordinates = (givenCoordinates = null) => {
  let coordinates = { x: 0, y: 0 };

  if (givenCoordinates == null) {
    coordinates.x = Math.floor(Math.random() * 10);
    coordinates.y = Math.floor(Math.random() * 10);
  
    return coordinates;
  }

  while (coordinates.x < 0 || coordinates.x > 9 || coordinates.y < 0 || coordinates.y > 9) {
    switch(Math.floor(Math.random() * 4)){
      case 0:
        coordinates.x = lastshot.x + 1
        coordinates.y = lastshot.y
        break;
      case 1:
        coordinates.x = lastshot.x - 1
        coordinates.y = lastshot.y
        break;
      case 2:
        coordinates.x = lastshot.x
        coordinates.y = lastshot.y + 1
        break;
      case 3:
        coordinates.x = lastshot.x
        coordinates.y = lastshot.y - 1
        break;
    };
  }

  return coordinates;
}

module.exports = generateCoordinates;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/main.scss */ "./src/stylesheets/main.scss");
/* harmony import */ var _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0__);

const setup = __webpack_require__(/*! ./game */ "./src/game.js");

setup();


/***/ }),

/***/ "./src/prompts.js":
/*!************************!*\
  !*** ./src/prompts.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

const setStatusMessage = (player) => {
  const gameStatusDiv = document.querySelector('.game-status-text');
  if (player == 'player') {
    gameStatusDiv.innerHTML = "Congrats you're a sinker of ships, officially!"
  } else {
    gameStatusDiv.innerHTML = "Computer got you man!"
  }
}

module.exports = setStatusMessage;


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

 
const ship = (name, start, end) => {
  let positions = [];
  let sunk = false;

    if (start.y == end.y) {
      for (let i = start.x; i <= end.x; i++) {
        positions.push({x: i, y: start.y, hit: false});
      }
    } else {
      for (let i = start.y; i <= end.y; i++) {
        positions.push({x: start.x, y: i, hit: false})
      }
    }
  
  const hit = (target) => {
    let index = positions.indexOf(positions.find((position) => position.x == target.x && position.y == target.y))
    positions[index].hit = true;

    if (positions.every(position => position.hit == true)) {
      sunk = true;
    }
  }

  return {hit, positions, sunk}
}

module.exports =  ship; 

/***/ }),

/***/ "./src/stylesheets/main.scss":
/*!***********************************!*\
  !*** ./src/stylesheets/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/main.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVPdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW5lcmF0ZUNvb3JkaW5hdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvbXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvbWFpbi5zY3NzPzdkYTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFB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Q0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0I7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQWlDO0FBQ2pDLGNBQWMsbUJBQU8sQ0FBQyw2QkFBUTs7QUFFOUI7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDLHdCQUF3Qiw2QkFBNkI7QUFDckQ7QUFDQSxLQUFLO0FBQ0wsMkJBQTJCLFlBQVk7QUFDdkMsd0JBQXdCLDZCQUE2QjtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUEsdUI7Ozs7Ozs7Ozs7O0FDM0JBLGNBQWMsbUJBQU8sQ0FBQyxtTkFBb0c7O0FBRTFIO0FBQ0EsY0FBYyxRQUFTO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNKQUEyRTs7QUFFaEc7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uYmxvY2sge1xcbiAgaGVpZ2h0OiAzdnc7XFxuICB3aWR0aDogM3Z3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgYm9yZGVyOiAwLjF2dyBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5maXJzdCB7XFxuICBjbGVhcjogbGVmdDsgfVxcblxcbi53aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcblxcbi5wbGF5ZXItc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5OyB9XFxuXFxuLnJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IH1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY2xlYXI6IGJvdGg7XFxuICBtYXJnaW4tdG9wOiA1dnc7XFxuICBtYXJnaW4tbGVmdDogMzJ2dztcXG4gIGJvcmRlcjogMC42dncgc29saWQgd2hpdGU7IH1cXG5cXG4uZ2FtZS1zdGF0dXMtdGV4dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMjV2dztcXG4gIGhlaWdodDogNXZ3O1xcbiAgZm9udC1zaXplOiAydnc7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgYm9yZGVyOiAwLjN2dyBzb2xpZCB3aGl0ZTtcXG4gIGNsZWFyOiBsZWZ0O1xcbiAgbWFyZ2luLWxlZnQ6IDM2dnc7XFxuICBtYXJnaW4tdG9wOiA0dnc7XFxuICBwYWRkaW5nLXRvcDogMi41dnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ucmVzZXQtYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgaGVpZ2h0OiAxMHZ3O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBib3JkZXI6IDAuNnZ3IHNvbGlkIHdoaXRlO1xcbiAgZm9udC1zaXplOiAzdnc7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZsb2F0OiByaWdodDtcXG4gIG1hcmdpbi10b3A6IDJ2dztcXG4gIG1hcmdpbi1yaWdodDogMTB2dzsgfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5zcXVhcmUge1xcbiAgICBoZWlnaHQ6IDd2dztcXG4gICAgd2lkdGg6IDd2dztcXG4gICAgYm9yZGVyOiAwLjF2dyBzb2xpZCBibGFjazsgfVxcbiAgLmJvYXJkIHtcXG4gICAgbWFyZ2luLXRvcDogNXZ3O1xcbiAgICBtYXJnaW4tbGVmdDogMTMuNXZ3O1xcbiAgICBib3JkZXI6IDAuNnZ3IHNvbGlkIHdoaXRlOyB9XFxuICAudG9wLWJvYXJkIHtcXG4gICAgbWFyZ2luLXRvcDogMnZ3OyB9XFxuICAuYm90dG9tLWJvYXJkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnZ3OyB9XFxuICAuZ2FtZS1zdGF0dXMtdGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICBoZWlnaHQ6IDh2dztcXG4gICAgZm9udC1zaXplOiAzLjV2dztcXG4gICAgYm9yZGVyOiAwLjV2dyBzb2xpZCB3aGl0ZTtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIGNsZWFyOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogMTN2dztcXG4gICAgbWFyZ2luLXRvcDogM3Z3O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNnZ3O1xcbiAgICBwYWRkaW5nLXRvcDogMi41dnc7XFxuICAgIG1hcmdpbi1yaWdodDogMnZ3OyB9XFxuICAucmVzZXQtYnRuIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgaGVpZ2h0OiAxMS41dnc7XFxuICAgIGJvcmRlcjogMC41dncgc29saWQgd2hpdGU7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICBjbGVhcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiA0dnc7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEuNXZ3KTsgfSB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5zcXVhcmUge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgfVxcbiAgLmJvYXJkIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMydnc7XFxuICAgIGJvcmRlcjogNnB4IHNvbGlkIHdoaXRlOyB9XFxuICAuZ2FtZS1zdGF0dXMtdGV4dCB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgY2xlYXI6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNnZ3O1xcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDI1cHg7IH1cXG4gIC5yZXNldC1idG4ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlcjogNnB4IHNvbGlkIHdoaXRlO1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgY2xlYXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7IH0gfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUwMHB4KSB7XFxuICAuc3F1YXJlIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IH1cXG4gIC5ib2FyZCB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHZ3O1xcbiAgICBib3JkZXI6IDZweCBzb2xpZCB3aGl0ZTsgfVxcbiAgLmdhbWUtc3RhdHVzLXRleHQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgY2xlYXI6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MnZ3O1xcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAtMjVweDsgfVxcbiAgLnJlc2V0LWJ0biB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICBjbGVhcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiAgICBtYXJnaW4tbGVmdDogMTB2dzsgfSB9XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07IiwiY29uc3Qgc2hpcCA9IHJlcXVpcmUoJy4vc2hpcCcpO1xuY29uc3QgZ2VuZXJhdGVDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4vZ2VuZXJhdGVDb29yZGluYXRlcycpOyBcbmNvbnN0IHNldFN0YXR1c01lc3NhZ2UgPSByZXF1aXJlKCcuL3Byb21wdHMnKTtcbmNvbnN0IGlzV2lubmluZ01vdmUgPSByZXF1aXJlKCcuL2dhbWVPdmVyJyk7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICB0aGlzLnN1bmtlblNoaXBzID0gMDtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgIGxldCBnYW1lU3RhdHVzVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXN0YXR1cy10ZXh0Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICB0aGlzLmJvYXJkLnB1c2gobmV3IEFycmF5KDEwKS5maWxsKDApKTtcbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21QbGFjZW1lbnQgPSAoc2hpcExlbmd0aCkgPT4ge1xuICAgICAgICBsZXQgeCA9IC01O1xuICAgICAgICBsZXQgeSA9IC01O1xuICAgICAgICB3aGlsZSAoeCArIHNoaXBMZW5ndGggPCAwIHx8IHggKyBzaGlwTGVuZ3RoID4gOSB8fCB5ICsgc2hpcExlbmd0aCA8IDAgfHwgeSArIHNoaXBMZW5ndGggPiA5KSB7XG4gICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNoaXBEaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsXCI7XG4gICAgICAgIGxldCBuZXdTaGlwO1xuICAgICAgICBpZiAoc2hpcERpcmVjdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICBuZXdTaGlwID0gc2hpcChgc2hpcCR7c2hpcExlbmd0aCsxfWAsIHt4LCB5fSwge3gsIHk6IHkrc2hpcExlbmd0aH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1NoaXAgPSBzaGlwKGBzaGlwJHtzaGlwTGVuZ3RoKzF9YCwge3gsIHl9LCB7eDogeCtzaGlwTGVuZ3RoLCB5fSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcG9zaXRpb25pc1ZhbGlkID0gdHJ1ZVxuICAgICAgICBuZXdTaGlwLnBvc2l0aW9ucy5mb3JFYWNoKHBvc2l0aW9uID0+IHtcbiAgICAgICAgICBpZiAoc2VsZi5ib2FyZFtwb3NpdGlvbi54XVtwb3NpdGlvbi55XSAhPSAwKSB7XG4gICAgICAgICAgICBwb3NpdGlvbmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbmlzVmFsaWQpIHtcbiAgICAgICAgICBzZWxmLnNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgICAgbmV3U2hpcC5wb3NpdGlvbnMuZm9yRWFjaChwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgICBzZWxmLmJvYXJkW3Bvc2l0aW9uLnhdW3Bvc2l0aW9uLnldID0gMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb3NpdGlvbmlzVmFsaWQ7XG4gICAgfVxuXG4gICAgbGV0IHNoaXBMZW5ndGhzID0gWzQsMywzLDIsMV07XG4gICAgc2hpcExlbmd0aHMuZm9yRWFjaChzaGlwTGVuZ3RoID0+IHtcbiAgICAgIGxldCBwbGFjZWQ7XG4gICAgICBkbyB7XG4gICAgICAgIHBsYWNlZCA9IHJhbmRvbVBsYWNlbWVudChzaGlwTGVuZ3RoKTtcbiAgICAgIH0gd2hpbGUgKCFwbGFjZWQpXG5cbiAgICB9KTtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHRoaXMuYm9hcmQuZm9yRWFjaChyb3cgPT4gcm93LmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGlmIChjb29yZGluYXRlID09IDEpIHsgY291bnQrKzsgfVxuICAgIH0pKTtcblxuICAgIHRoaXMubGFzdFNob3RTdWNjZWVkZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxhc3RTaG90WFkgPSBudWxsO1xuICAgIHRoaXMuc2hvdHNTaW5jZUxhc3RIaXQgPSAwO1xuICB9XG5cbiAgYXR0YWNrKGV2ZW50KXsgIFxuICAgIGxldCB0YXJnZXRCbG9jayA9IHRoaXMuZ2FtZWJvYXJkLmJvYXJkW3RoaXMueF1bdGhpcy55XTtcbiAgICBsZXQgZ2FtZVN0YXR1c1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zdGF0dXMtdGV4dCcpO1xuICAgIGdhbWVTdGF0dXNUZXh0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgdGhpcy5nYW1lYm9hcmQuZmluZEFuZEhpdFNoaXAodGhpcy5nYW1lYm9hcmQsIHRoaXMsICdwbGF5ZXInKTtcblxuICAgIGlmICh0YXJnZXRCbG9jayA9PSAxKSB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgncmVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldEJsb2NrID0gMjtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCd3aGl0ZScpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdhbWVib2FyZC5hdHRhY2spO1xuICB9XG5cbiAgYWlBdHRhY2soKXtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5lbmVteWJvYXJkLmFpQXR0YWNrKTtcbiAgICBsZXQgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQnKVswXTtcbiAgICBsZXQgc2hvdFRhcmdldDtcblxuICAgIGlmICh0aGlzLmVuZW15Ym9hcmQubGFzdFNob3RTdWNjZWVkZWQpIHtcbiAgICAgIHNob3RUYXJnZXQgPSB0aGlzLmVuZW15Ym9hcmQuc2hvb3RUYXJnZXRlZFNob3QodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3RUYXJnZXQgPSB0aGlzLmVuZW15Ym9hcmQuc2hvb3RSYW5kb21TaG90KHRoaXMpO1xuICAgIH1cblxuICAgIGxldCBjb21wdXRlclRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBYJHtzaG90VGFyZ2V0Lnh9LVkke3Nob3RUYXJnZXQueX1gKTtcblxuICAgIGlmICh0aGlzLmVuZW15Ym9hcmQuYm9hcmRbc2hvdFRhcmdldC54XVtzaG90VGFyZ2V0LnldID09IDEpIHtcbiAgICAgIGNvbXB1dGVyVGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3JlZCcpO1xuICAgICAgdGhpcy5lbmVteWJvYXJkLmxhc3RTaG90U3VjY2VlZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZW5lbXlib2FyZC5zaG90c1NpbmNlTGFzdEhpdCA9IDA7XG4gICAgICB0aGlzLmVuZW15Ym9hcmQubGFzdFNob3RYWSA9IHsgeDogc2hvdFRhcmdldC54LCB5OiBzaG90VGFyZ2V0LnkgfTtcbiAgICAgIHRoaXMuZW5lbXlib2FyZC5maW5kQW5kSGl0U2hpcCh0aGlzLmVuZW15Ym9hcmQsIHNob3RUYXJnZXQsICdDb21wdXRlcicpXG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29tcHV0ZXJUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnd2hpdGUnKTtcbiAgICAgIHRoaXMuZW5lbXlib2FyZC5zaG90c1NpbmNlTGFzdEhpdCsrO1xuICAgICAgaWYgKHRoaXMuZW5lbXlib2FyZC5zaG90c1NpbmNlTGFzdEhpdCA+PSA0KSB7XG4gICAgICAgIHRoaXMuZW5lbXlib2FyZC5sYXN0U2hvdFN1Y2NlZWRlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmVuZW15Ym9hcmQuYm9hcmRbc2hvdFRhcmdldC54XVtzaG90VGFyZ2V0LnldID0gMjtcbiAgfVxuXG4gIHNob290VGFyZ2V0ZWRTaG90KHRhcmdldCl7XG4gICAgbGV0IGNvdW50ID0gMTtcbiAgICBsZXQgc2hvdFRhcmdldCA9IGdlbmVyYXRlQ29vcmRpbmF0ZXModGFyZ2V0LmVuZW15Ym9hcmQubGFzdFNob3RYWSk7XG4gICAgd2hpbGUgKHRhcmdldC5lbmVteWJvYXJkLmJvYXJkW3Nob3RUYXJnZXQueF1bc2hvdFRhcmdldC55XSA9PSAyICYmIGNvdW50IDwgNSkge1xuICAgICAgc2hvdFRhcmdldCA9IGdlbmVyYXRlQ29vcmRpbmF0ZXModGFyZ2V0LmVuZW15Ym9hcmQubGFzdFNob3RYWSk7XG4gICAgICBjb3VudCsrO1xuICAgIH1cblxuICAgIGlmIChjb3VudCA9PSA1KSB7XG4gICAgICBzaG90VGFyZ2V0ID0gdGFyZ2V0LmVuZW15Ym9hcmQuc2hvb3RSYW5kb21TaG90KHRhcmdldCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNob3RUYXJnZXQ7XG4gIH1cblxuICBzaG9vdFJhbmRvbVNob3QodGFyZ2V0KXtcbiAgICBsZXQgc2hvdFRhcmdldCA9IGdlbmVyYXRlQ29vcmRpbmF0ZXMoKTtcbiAgICB3aGlsZSAodGFyZ2V0LmVuZW15Ym9hcmQuYm9hcmRbc2hvdFRhcmdldC54XVtzaG90VGFyZ2V0LnldID09IDIpIHtcbiAgICAgIHNob3RUYXJnZXQgPSBnZW5lcmF0ZUNvb3JkaW5hdGVzKCk7XG4gICAgfVxuICAgIHJldHVybiBzaG90VGFyZ2V0O1xuICB9XG5cbiAgZmluZEFuZEhpdFNoaXAodGFyZ2V0Qm9hcmQsIHRhcmdldCwgcGxheWVyKXtcbiAgICAgIGZvciAobGV0IHNoaXAgb2YgdGFyZ2V0Qm9hcmQuc2hpcHMpIHtcbiAgICAgICAgZm9yIChsZXQgcG9zaXRpb24gb2Ygc2hpcC5wb3NpdGlvbnMpIHtcbiAgICAgICAgICBpZiAocG9zaXRpb24ueCA9PSB0YXJnZXQueCAmJiBwb3NpdGlvbi55ID09IHRhcmdldC55KSB7XG4gICAgICAgICAgICAgIHNoaXAuaGl0KHt4OiB0YXJnZXQueCwgeTogdGFyZ2V0Lnl9KTtcbiAgICAgICAgICAgICAgaWYgKHNoaXAuc3Vuaykge1xuICAgICAgICAgICAgICAgIHRhcmdldEJvYXJkLnN1bmtlblNoaXBzKys7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0Qm9hcmQuc3Vua2VuU2hpcHMpXG4gICAgICAgICAgICAgICAgc2V0U3RhdHVzTWVzc2FnZShwbGF5ZXIpO1xuICAgICAgICAgICAgICAgIGlzV2lubmluZ01vdmUodGFyZ2V0Qm9hcmQsIHBsYXllcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7IiwiY29uc3QgYm9hcmQgPSByZXF1aXJlKCcuL2JvYXJkJyk7XG5cbmNvbnN0IGluaXRpYWxpemVCb2FyZCA9IChwbGF5ZXJCb2FyZCwgYWlCb2FyZCA9IG51bGwpID0+IHtcbiAgbGV0IGJvYXJkSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvYXJkSG9sZGVyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gIGlmIChhaUJvYXJkICE9PSBudWxsKSB7XG4gICAgYm9hcmRIb2xkZXIuY2xhc3NMaXN0LmFkZChcInRvcC1ib2FyZFwiKTtcbiAgfSBlbHNlIHtcbiAgICBib2FyZEhvbGRlci5jbGFzc0xpc3QuYWRkKFwiYm90dG9tLWJvYXJkXCIpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYm9hcmRIb2xkZXIpO1xuICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5KyspIHtcbiAgICAgIGxldCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcblxuICAgICAgaWYgKGFpQm9hcmQgPT09IG51bGwpIHtcbiAgICAgICAgYmxvY2suaWQgPSBgWCR7eH0tWSR7eX1gXG4gICAgICB9XG5cblxuICAgICAgaWYgKHkgPT0gMCkge1xuICAgICAgICBibG9jay5jbGFzc0xpc3QudG9nZ2xlKCdmaXJzdCcpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBibG9jay54ID0geDtcbiAgICAgIGJsb2NrLnkgPSB5O1xuXG4gICAgICBibG9jay5nYW1lYm9hcmQgPSBwbGF5ZXJCb2FyZDtcbiAgICAgIGJsb2NrLmVuZW15Ym9hcmQgPSBhaUJvYXJkO1xuICAgICAgaWYgKGFpQm9hcmQgIT09IG51bGwpIHtcbiAgICAgICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhaUJvYXJkLmFpQXR0YWNrKTtcbiAgICAgICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5ZXJCb2FyZC5hdHRhY2spO1xuICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZC5ib2FyZFt4XVt5XSA9PSAxKSB7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ3BsYXllci1zaGlwJyk7XG4gICAgICB9XG4gICAgICBib2FyZEhvbGRlci5hcHBlbmRDaGlsZChibG9jayk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHNldHVwID0gKCkgPT4ge1xuICBsZXQgcGxheWVyQm9hcmQgPSBuZXcgYm9hcmQoKTtcbiAgbGV0IGFpQm9hcmQgPSBuZXcgYm9hcmQoKTtcblxuICBpbml0aWFsaXplQm9hcmQoYWlCb2FyZCwgcGxheWVyQm9hcmQpO1xuXG4gIGxldCBnYW1lU3RhdHVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBnYW1lU3RhdHVzVGV4dC5jbGFzc0xpc3QuYWRkKCdnYW1lLXN0YXR1cy10ZXh0Jyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZVN0YXR1c1RleHQpO1xuXG5cbiAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcmVzZXRCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG5cbiAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVzZXQtYnRuJyk7XG4gIHJlc2V0QnV0dG9uLnZhbHVlID0gXCJOZXcgR2FtZVwiO1xuICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuXG5cbiAgaW5pdGlhbGl6ZUJvYXJkKHBsYXllckJvYXJkKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXR1cDtcbiIsImNvbnN0IGlzV2lubmluZ01vdmUgPSAocGxheWVyLCBjdXJyZW50Qm9hcmQpID0+IHtcbiAgbGV0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkJylbMF07XG4gIGxldCBnYW1lU3RhdHVzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtc3RhdHVzLXRleHQnKTtcblxuICBpZiAoY3VycmVudEJvYXJkLnN1bmtlblNoaXBzID49IDUpIHtcbiAgICBib2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIGlmIChwbGF5ZXIgPT0gJ3BsYXllcicpIHtcbiAgICAgIGdhbWVTdGF0dXNEaXYuaW5uZXJIVE1MID0gJ1lvdSBXaW4hJztcbiAgICB9IGVsc2Uge1xuICAgICAgZ2FtZVN0YXR1c0Rpdi5pbm5lckhUTUwgPSAnWW91IExvc2UhJztcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1dpbm5pbmdNb3ZlOyIsIlxuY29uc3QgZ2VuZXJhdGVDb29yZGluYXRlcyA9IChnaXZlbkNvb3JkaW5hdGVzID0gbnVsbCkgPT4ge1xuICBsZXQgY29vcmRpbmF0ZXMgPSB7IHg6IDAsIHk6IDAgfTtcblxuICBpZiAoZ2l2ZW5Db29yZGluYXRlcyA9PSBudWxsKSB7XG4gICAgY29vcmRpbmF0ZXMueCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb29yZGluYXRlcy55ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBcbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH1cblxuICB3aGlsZSAoY29vcmRpbmF0ZXMueCA8IDAgfHwgY29vcmRpbmF0ZXMueCA+IDkgfHwgY29vcmRpbmF0ZXMueSA8IDAgfHwgY29vcmRpbmF0ZXMueSA+IDkpIHtcbiAgICBzd2l0Y2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkpe1xuICAgICAgY2FzZSAwOlxuICAgICAgICBjb29yZGluYXRlcy54ID0gbGFzdHNob3QueCArIDFcbiAgICAgICAgY29vcmRpbmF0ZXMueSA9IGxhc3RzaG90LnlcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGNvb3JkaW5hdGVzLnggPSBsYXN0c2hvdC54IC0gMVxuICAgICAgICBjb29yZGluYXRlcy55ID0gbGFzdHNob3QueVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgY29vcmRpbmF0ZXMueCA9IGxhc3RzaG90LnhcbiAgICAgICAgY29vcmRpbmF0ZXMueSA9IGxhc3RzaG90LnkgKyAxXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBjb29yZGluYXRlcy54ID0gbGFzdHNob3QueFxuICAgICAgICBjb29yZGluYXRlcy55ID0gbGFzdHNob3QueSAtIDFcbiAgICAgICAgYnJlYWs7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBjb29yZGluYXRlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZUNvb3JkaW5hdGVzO1xuIiwiaW1wb3J0ICcuL3N0eWxlc2hlZXRzL21haW4uc2Nzcyc7XG5jb25zdCBzZXR1cCA9IHJlcXVpcmUoJy4vZ2FtZScpO1xuXG5zZXR1cCgpO1xuIiwiY29uc3Qgc2V0U3RhdHVzTWVzc2FnZSA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3QgZ2FtZVN0YXR1c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXN0YXR1cy10ZXh0Jyk7XG4gIGlmIChwbGF5ZXIgPT0gJ3BsYXllcicpIHtcbiAgICBnYW1lU3RhdHVzRGl2LmlubmVySFRNTCA9IFwiQ29uZ3JhdHMgeW91J3JlIGEgc2lua2VyIG9mIHNoaXBzLCBvZmZpY2lhbGx5IVwiXG4gIH0gZWxzZSB7XG4gICAgZ2FtZVN0YXR1c0Rpdi5pbm5lckhUTUwgPSBcIkNvbXB1dGVyIGdvdCB5b3UgbWFuIVwiXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRTdGF0dXNNZXNzYWdlO1xuIiwiIFxuY29uc3Qgc2hpcCA9IChuYW1lLCBzdGFydCwgZW5kKSA9PiB7XG4gIGxldCBwb3NpdGlvbnMgPSBbXTtcbiAgbGV0IHN1bmsgPSBmYWxzZTtcblxuICAgIGlmIChzdGFydC55ID09IGVuZC55KSB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnQueDsgaSA8PSBlbmQueDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKHt4OiBpLCB5OiBzdGFydC55LCBoaXQ6IGZhbHNlfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydC55OyBpIDw9IGVuZC55OyBpKyspIHtcbiAgICAgICAgcG9zaXRpb25zLnB1c2goe3g6IHN0YXJ0LngsIHk6IGksIGhpdDogZmFsc2V9KVxuICAgICAgfVxuICAgIH1cbiAgXG4gIGNvbnN0IGhpdCA9ICh0YXJnZXQpID0+IHtcbiAgICBsZXQgaW5kZXggPSBwb3NpdGlvbnMuaW5kZXhPZihwb3NpdGlvbnMuZmluZCgocG9zaXRpb24pID0+IHBvc2l0aW9uLnggPT0gdGFyZ2V0LnggJiYgcG9zaXRpb24ueSA9PSB0YXJnZXQueSkpXG4gICAgcG9zaXRpb25zW2luZGV4XS5oaXQgPSB0cnVlO1xuXG4gICAgaWYgKHBvc2l0aW9ucy5ldmVyeShwb3NpdGlvbiA9PiBwb3NpdGlvbi5oaXQgPT0gdHJ1ZSkpIHtcbiAgICAgIHN1bmsgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7aGl0LCBwb3NpdGlvbnMsIHN1bmt9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gIHNoaXA7ICIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=