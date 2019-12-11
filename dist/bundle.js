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
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0; }\n\n.block {\n  height: 3vw;\n  width: 3vw;\n  background-color: rgba(0, 255, 255, 0.8);\n  border: 0.1vw solid black;\n  display: inline-block; }\n\n.first {\n  clear: left; }\n\n.white {\n  background-color: white; }\n\n.player-ship {\n  background-color: grey; }\n\n.red {\n  background-color: red; }\n\n.board {\n  display: inline-block;\n  clear: both;\n  margin-top: 5vw;\n  margin-left: 32vw;\n  border: 0.6vw solid white; }\n\n.game-status-text {\n  display: inline-block;\n  width: 25vw;\n  height: 5vw;\n  font-size: 2vw;\n  font-weight: bold;\n  color: white;\n  background-color: green;\n  border: 0.3vw solid white;\n  clear: left;\n  margin-left: 36vw;\n  margin-top: 4vw;\n  padding-top: 2.5vw;\n  text-align: center; }\n\n.reset-btn {\n  display: inline-block;\n  width: 20vw;\n  height: 10vw;\n  color: white;\n  background-color: green;\n  border: 0.6vw solid white;\n  font-size: 3vw;\n  font-weight: bold;\n  float: right;\n  margin-top: 2vw;\n  margin-right: 10vw; }\n\n@media only screen and (max-width: 600px) {\n  .square {\n    height: 7vw;\n    width: 7vw;\n    border: 0.1vw solid black; }\n  .board {\n    margin-top: 5vw;\n    margin-left: 13.5vw;\n    border: 0.6vw solid white; }\n  .top-board {\n    margin-top: 2vw; }\n  .bottom-board {\n    margin-bottom: 2vw; }\n  .game-status-text {\n    font-family: sans-serif;\n    display: inline-block;\n    width: 40vw;\n    height: 8vw;\n    font-size: 3.5vw;\n    border: 0.5vw solid white;\n    float: none;\n    clear: none;\n    margin-left: 13vw;\n    margin-top: 3vw;\n    margin-bottom: -6vw;\n    padding-top: 2.5vw;\n    margin-right: 2vw; }\n  .reset-btn {\n    display: inline-block;\n    width: 30vw;\n    height: 11.5vw;\n    border: 0.5vw solid white;\n    float: none;\n    clear: none;\n    font-size: 4vw;\n    margin: 0;\n    transform: translateY(1.5vw); } }\n\n@media only screen and (min-width: 1000px) {\n  .square {\n    height: 30px;\n    width: 30px;\n    border: 1px solid black; }\n  .board {\n    margin-top: 50px;\n    margin-left: 32vw;\n    border: 6px solid white; }\n  .game-status-text {\n    width: 250px;\n    height: 50px;\n    font-size: 20px;\n    border: 3px solid white;\n    float: none;\n    clear: none;\n    margin-left: 36vw;\n    margin-top: 45px;\n    margin-bottom: -20px;\n    padding-top: 25px; }\n  .reset-btn {\n    width: 200px;\n    height: 100px;\n    border: 6px solid white;\n    float: none;\n    clear: none;\n    font-size: 30px;\n    transform: translateY(-10px);\n    margin-left: 10vw; } }\n\n@media only screen and (min-width: 1500px) {\n  .square {\n    height: 30px;\n    width: 30px;\n    border: 1px solid black; }\n  .board {\n    margin-top: 50px;\n    margin-left: 40vw;\n    border: 6px solid white; }\n  .game-status-text {\n    display: inline-block;\n    width: 250px;\n    height: 50px;\n    font-size: 20px;\n    border: 3px solid white;\n    float: none;\n    clear: none;\n    margin-left: 42vw;\n    margin-top: 45px;\n    margin-bottom: -20px;\n    padding-top: 25px;\n    padding-bottom: -25px; }\n  .reset-btn {\n    width: 200px;\n    height: 100px;\n    border: 6px solid white;\n    float: none;\n    clear: none;\n    font-size: 30px;\n    transform: translateY(-10px);\n    margin-left: 10vw; } }\n", ""]);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVPdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW5lcmF0ZUNvb3JkaW5hdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvbXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvbWFpbi5zY3NzPzdkYTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFB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Q0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0I7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQWlDO0FBQ2pDLGNBQWMsbUJBQU8sQ0FBQyw2QkFBUTs7QUFFOUI7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDLHdCQUF3Qiw2QkFBNkI7QUFDckQ7QUFDQSxLQUFLO0FBQ0wsMkJBQTJCLFlBQVk7QUFDdkMsd0JBQXdCLDZCQUE2QjtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUEsdUI7Ozs7Ozs7Ozs7O0FDM0JBLGNBQWMsbUJBQU8sQ0FBQyxtTkFBb0c7O0FBRTFIO0FBQ0EsY0FBYyxRQUFTO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNKQUEyRTs7QUFFaEc7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uYmxvY2sge1xcbiAgaGVpZ2h0OiAzdnc7XFxuICB3aWR0aDogM3Z3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlcjogMC4xdncgc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4uZmlyc3Qge1xcbiAgY2xlYXI6IGxlZnQ7IH1cXG5cXG4ud2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG5cXG4ucGxheWVyLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgfVxcblxcbi5yZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyB9XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNsZWFyOiBib3RoO1xcbiAgbWFyZ2luLXRvcDogNXZ3O1xcbiAgbWFyZ2luLWxlZnQ6IDMydnc7XFxuICBib3JkZXI6IDAuNnZ3IHNvbGlkIHdoaXRlOyB9XFxuXFxuLmdhbWUtc3RhdHVzLXRleHQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDI1dnc7XFxuICBoZWlnaHQ6IDV2dztcXG4gIGZvbnQtc2l6ZTogMnZ3O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGJvcmRlcjogMC4zdncgc29saWQgd2hpdGU7XFxuICBjbGVhcjogbGVmdDtcXG4gIG1hcmdpbi1sZWZ0OiAzNnZ3O1xcbiAgbWFyZ2luLXRvcDogNHZ3O1xcbiAgcGFkZGluZy10b3A6IDIuNXZ3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnJlc2V0LWJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMjB2dztcXG4gIGhlaWdodDogMTB2dztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgYm9yZGVyOiAwLjZ2dyBzb2xpZCB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogM3Z3O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW4tdG9wOiAydnc7XFxuICBtYXJnaW4tcmlnaHQ6IDEwdnc7IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuc3F1YXJlIHtcXG4gICAgaGVpZ2h0OiA3dnc7XFxuICAgIHdpZHRoOiA3dnc7XFxuICAgIGJvcmRlcjogMC4xdncgc29saWQgYmxhY2s7IH1cXG4gIC5ib2FyZCB7XFxuICAgIG1hcmdpbi10b3A6IDV2dztcXG4gICAgbWFyZ2luLWxlZnQ6IDEzLjV2dztcXG4gICAgYm9yZGVyOiAwLjZ2dyBzb2xpZCB3aGl0ZTsgfVxcbiAgLnRvcC1ib2FyZCB7XFxuICAgIG1hcmdpbi10b3A6IDJ2dzsgfVxcbiAgLmJvdHRvbS1ib2FyZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJ2dzsgfVxcbiAgLmdhbWUtc3RhdHVzLXRleHQge1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNDB2dztcXG4gICAgaGVpZ2h0OiA4dnc7XFxuICAgIGZvbnQtc2l6ZTogMy41dnc7XFxuICAgIGJvcmRlcjogMC41dncgc29saWQgd2hpdGU7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICBjbGVhcjogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEzdnc7XFxuICAgIG1hcmdpbi10b3A6IDN2dztcXG4gICAgbWFyZ2luLWJvdHRvbTogLTZ2dztcXG4gICAgcGFkZGluZy10b3A6IDIuNXZ3O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJ2dzsgfVxcbiAgLnJlc2V0LWJ0biB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGhlaWdodDogMTEuNXZ3O1xcbiAgICBib3JkZXI6IDAuNXZ3IHNvbGlkIHdoaXRlO1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgY2xlYXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogNHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxLjV2dyk7IH0gfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAuc3F1YXJlIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IH1cXG4gIC5ib2FyZCB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMnZ3O1xcbiAgICBib3JkZXI6IDZweCBzb2xpZCB3aGl0ZTsgfVxcbiAgLmdhbWUtc3RhdHVzLXRleHQge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIGNsZWFyOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogMzZ2dztcXG4gICAgbWFyZ2luLXRvcDogNDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyNXB4OyB9XFxuICAucmVzZXQtYnRuIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBib3JkZXI6IDZweCBzb2xpZCB3aGl0ZTtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIGNsZWFyOiBub25lO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHZ3OyB9IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MDBweCkge1xcbiAgLnNxdWFyZSB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyB9XFxuICAuYm9hcmQge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNDB2dztcXG4gICAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7IH1cXG4gIC5nYW1lLXN0YXR1cy10ZXh0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIGNsZWFyOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogNDJ2dztcXG4gICAgbWFyZ2luLXRvcDogNDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogLTI1cHg7IH1cXG4gIC5yZXNldC1idG4ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlcjogNnB4IHNvbGlkIHdoaXRlO1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgY2xlYXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7IH0gfVxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsImNvbnN0IHNoaXAgPSByZXF1aXJlKCcuL3NoaXAnKTtcbmNvbnN0IGdlbmVyYXRlQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuL2dlbmVyYXRlQ29vcmRpbmF0ZXMnKTsgXG5jb25zdCBzZXRTdGF0dXNNZXNzYWdlID0gcmVxdWlyZSgnLi9wcm9tcHRzJyk7XG5jb25zdCBpc1dpbm5pbmdNb3ZlID0gcmVxdWlyZSgnLi9nYW1lT3ZlcicpO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5zdW5rZW5TaGlwcyA9IDA7XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICBsZXQgZ2FtZVN0YXR1c1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zdGF0dXMtdGV4dCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgdGhpcy5ib2FyZC5wdXNoKG5ldyBBcnJheSgxMCkuZmlsbCgwKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9tUGxhY2VtZW50ID0gKHNoaXBMZW5ndGgpID0+IHtcbiAgICAgICAgbGV0IHggPSAtNTtcbiAgICAgICAgbGV0IHkgPSAtNTtcbiAgICAgICAgd2hpbGUgKHggKyBzaGlwTGVuZ3RoIDwgMCB8fCB4ICsgc2hpcExlbmd0aCA+IDkgfHwgeSArIHNoaXBMZW5ndGggPCAwIHx8IHkgKyBzaGlwTGVuZ3RoID4gOSkge1xuICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzaGlwRGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbFwiO1xuICAgICAgICBsZXQgbmV3U2hpcDtcbiAgICAgICAgaWYgKHNoaXBEaXJlY3Rpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgbmV3U2hpcCA9IHNoaXAoYHNoaXAke3NoaXBMZW5ndGgrMX1gLCB7eCwgeX0sIHt4LCB5OiB5K3NoaXBMZW5ndGh9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdTaGlwID0gc2hpcChgc2hpcCR7c2hpcExlbmd0aCsxfWAsIHt4LCB5fSwge3g6IHgrc2hpcExlbmd0aCwgeX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBvc2l0aW9uaXNWYWxpZCA9IHRydWVcbiAgICAgICAgbmV3U2hpcC5wb3NpdGlvbnMuZm9yRWFjaChwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgaWYgKHNlbGYuYm9hcmRbcG9zaXRpb24ueF1bcG9zaXRpb24ueV0gIT0gMCkge1xuICAgICAgICAgICAgcG9zaXRpb25pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocG9zaXRpb25pc1ZhbGlkKSB7XG4gICAgICAgICAgc2VsZi5zaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICAgIG5ld1NoaXAucG9zaXRpb25zLmZvckVhY2gocG9zaXRpb24gPT4ge1xuICAgICAgICAgICAgc2VsZi5ib2FyZFtwb3NpdGlvbi54XVtwb3NpdGlvbi55XSA9IDE7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG9zaXRpb25pc1ZhbGlkO1xuICAgIH1cblxuICAgIGxldCBzaGlwTGVuZ3RocyA9IFs0LDMsMywyLDFdO1xuICAgIHNoaXBMZW5ndGhzLmZvckVhY2goc2hpcExlbmd0aCA9PiB7XG4gICAgICBsZXQgcGxhY2VkO1xuICAgICAgZG8ge1xuICAgICAgICBwbGFjZWQgPSByYW5kb21QbGFjZW1lbnQoc2hpcExlbmd0aCk7XG4gICAgICB9IHdoaWxlICghcGxhY2VkKVxuXG4gICAgfSk7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICB0aGlzLmJvYXJkLmZvckVhY2gocm93ID0+IHJvdy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBpZiAoY29vcmRpbmF0ZSA9PSAxKSB7IGNvdW50Kys7IH1cbiAgICB9KSk7XG5cbiAgICB0aGlzLmxhc3RTaG90U3VjY2VlZGVkID0gZmFsc2U7XG4gICAgdGhpcy5sYXN0U2hvdFhZID0gbnVsbDtcbiAgICB0aGlzLnNob3RzU2luY2VMYXN0SGl0ID0gMDtcbiAgfVxuXG4gIGF0dGFjayhldmVudCl7ICBcbiAgICBsZXQgdGFyZ2V0QmxvY2sgPSB0aGlzLmdhbWVib2FyZC5ib2FyZFt0aGlzLnhdW3RoaXMueV07XG4gICAgbGV0IGdhbWVTdGF0dXNUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtc3RhdHVzLXRleHQnKTtcbiAgICBnYW1lU3RhdHVzVGV4dC5pbm5lckhUTUwgPSAnJztcblxuICAgIHRoaXMuZ2FtZWJvYXJkLmZpbmRBbmRIaXRTaGlwKHRoaXMuZ2FtZWJvYXJkLCB0aGlzLCAncGxheWVyJyk7XG5cbiAgICBpZiAodGFyZ2V0QmxvY2sgPT0gMSkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3JlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRCbG9jayA9IDI7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnd2hpdGUnKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5nYW1lYm9hcmQuYXR0YWNrKTtcbiAgfVxuXG4gIGFpQXR0YWNrKCl7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZW5lbXlib2FyZC5haUF0dGFjayk7XG4gICAgbGV0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkJylbMF07XG4gICAgbGV0IHNob3RUYXJnZXQ7XG5cbiAgICBpZiAodGhpcy5lbmVteWJvYXJkLmxhc3RTaG90U3VjY2VlZGVkKSB7XG4gICAgICBzaG90VGFyZ2V0ID0gdGhpcy5lbmVteWJvYXJkLnNob290VGFyZ2V0ZWRTaG90KHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG90VGFyZ2V0ID0gdGhpcy5lbmVteWJvYXJkLnNob290UmFuZG9tU2hvdCh0aGlzKTtcbiAgICB9XG5cbiAgICBsZXQgY29tcHV0ZXJUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgWCR7c2hvdFRhcmdldC54fS1ZJHtzaG90VGFyZ2V0Lnl9YCk7XG5cbiAgICBpZiAodGhpcy5lbmVteWJvYXJkLmJvYXJkW3Nob3RUYXJnZXQueF1bc2hvdFRhcmdldC55XSA9PSAxKSB7XG4gICAgICBjb21wdXRlclRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdyZWQnKTtcbiAgICAgIHRoaXMuZW5lbXlib2FyZC5sYXN0U2hvdFN1Y2NlZWRlZCA9IHRydWU7XG4gICAgICB0aGlzLmVuZW15Ym9hcmQuc2hvdHNTaW5jZUxhc3RIaXQgPSAwO1xuICAgICAgdGhpcy5lbmVteWJvYXJkLmxhc3RTaG90WFkgPSB7IHg6IHNob3RUYXJnZXQueCwgeTogc2hvdFRhcmdldC55IH07XG4gICAgICB0aGlzLmVuZW15Ym9hcmQuZmluZEFuZEhpdFNoaXAodGhpcy5lbmVteWJvYXJkLCBzaG90VGFyZ2V0LCAnQ29tcHV0ZXInKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXB1dGVyVGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3doaXRlJyk7XG4gICAgICB0aGlzLmVuZW15Ym9hcmQuc2hvdHNTaW5jZUxhc3RIaXQrKztcbiAgICAgIGlmICh0aGlzLmVuZW15Ym9hcmQuc2hvdHNTaW5jZUxhc3RIaXQgPj0gNCkge1xuICAgICAgICB0aGlzLmVuZW15Ym9hcmQubGFzdFNob3RTdWNjZWVkZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lbmVteWJvYXJkLmJvYXJkW3Nob3RUYXJnZXQueF1bc2hvdFRhcmdldC55XSA9IDI7XG4gIH1cblxuICBzaG9vdFRhcmdldGVkU2hvdCh0YXJnZXQpe1xuICAgIGxldCBjb3VudCA9IDE7XG4gICAgbGV0IHNob3RUYXJnZXQgPSBnZW5lcmF0ZUNvb3JkaW5hdGVzKHRhcmdldC5lbmVteWJvYXJkLmxhc3RTaG90WFkpO1xuICAgIHdoaWxlICh0YXJnZXQuZW5lbXlib2FyZC5ib2FyZFtzaG90VGFyZ2V0LnhdW3Nob3RUYXJnZXQueV0gPT0gMiAmJiBjb3VudCA8IDUpIHtcbiAgICAgIHNob3RUYXJnZXQgPSBnZW5lcmF0ZUNvb3JkaW5hdGVzKHRhcmdldC5lbmVteWJvYXJkLmxhc3RTaG90WFkpO1xuICAgICAgY291bnQrKztcbiAgICB9XG5cbiAgICBpZiAoY291bnQgPT0gNSkge1xuICAgICAgc2hvdFRhcmdldCA9IHRhcmdldC5lbmVteWJvYXJkLnNob290UmFuZG9tU2hvdCh0YXJnZXQpO1xuICAgIH1cblxuICAgIHJldHVybiBzaG90VGFyZ2V0O1xuICB9XG5cbiAgc2hvb3RSYW5kb21TaG90KHRhcmdldCl7XG4gICAgbGV0IHNob3RUYXJnZXQgPSBnZW5lcmF0ZUNvb3JkaW5hdGVzKCk7XG4gICAgd2hpbGUgKHRhcmdldC5lbmVteWJvYXJkLmJvYXJkW3Nob3RUYXJnZXQueF1bc2hvdFRhcmdldC55XSA9PSAyKSB7XG4gICAgICBzaG90VGFyZ2V0ID0gZ2VuZXJhdGVDb29yZGluYXRlcygpO1xuICAgIH1cbiAgICByZXR1cm4gc2hvdFRhcmdldDtcbiAgfVxuXG4gIGZpbmRBbmRIaXRTaGlwKHRhcmdldEJvYXJkLCB0YXJnZXQsIHBsYXllcil7XG4gICAgICBmb3IgKGxldCBzaGlwIG9mIHRhcmdldEJvYXJkLnNoaXBzKSB7XG4gICAgICAgIGZvciAobGV0IHBvc2l0aW9uIG9mIHNoaXAucG9zaXRpb25zKSB7XG4gICAgICAgICAgaWYgKHBvc2l0aW9uLnggPT0gdGFyZ2V0LnggJiYgcG9zaXRpb24ueSA9PSB0YXJnZXQueSkge1xuICAgICAgICAgICAgICBzaGlwLmhpdCh7eDogdGFyZ2V0LngsIHk6IHRhcmdldC55fSk7XG4gICAgICAgICAgICAgIGlmIChzaGlwLnN1bmspIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRCb2FyZC5zdW5rZW5TaGlwcysrO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldEJvYXJkLnN1bmtlblNoaXBzKVxuICAgICAgICAgICAgICAgIHNldFN0YXR1c01lc3NhZ2UocGxheWVyKTtcbiAgICAgICAgICAgICAgICBpc1dpbm5pbmdNb3ZlKHRhcmdldEJvYXJkLCBwbGF5ZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkOyIsImNvbnN0IGJvYXJkID0gcmVxdWlyZSgnLi9ib2FyZCcpO1xuXG5jb25zdCBpbml0aWFsaXplQm9hcmQgPSAocGxheWVyQm9hcmQsIGFpQm9hcmQgPSBudWxsKSA9PiB7XG4gIGxldCBib2FyZEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZEhvbGRlci5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICBpZiAoYWlCb2FyZCAhPT0gbnVsbCkge1xuICAgIGJvYXJkSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJ0b3AtYm9hcmRcIik7XG4gIH0gZWxzZSB7XG4gICAgYm9hcmRIb2xkZXIuY2xhc3NMaXN0LmFkZChcImJvdHRvbS1ib2FyZFwiKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJvYXJkSG9sZGVyKTtcbiAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgICBsZXQgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJyk7XG5cbiAgICAgIGlmIChhaUJvYXJkID09PSBudWxsKSB7XG4gICAgICAgIGJsb2NrLmlkID0gYFgke3h9LVkke3l9YFxuICAgICAgfVxuXG5cbiAgICAgIGlmICh5ID09IDApIHtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnZmlyc3QnKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgYmxvY2sueCA9IHg7XG4gICAgICBibG9jay55ID0geTtcblxuICAgICAgYmxvY2suZ2FtZWJvYXJkID0gcGxheWVyQm9hcmQ7XG4gICAgICBibG9jay5lbmVteWJvYXJkID0gYWlCb2FyZDtcbiAgICAgIGlmIChhaUJvYXJkICE9PSBudWxsKSB7XG4gICAgICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWlCb2FyZC5haUF0dGFjayk7XG4gICAgICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheWVyQm9hcmQuYXR0YWNrKTtcbiAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuYm9hcmRbeF1beV0gPT0gMSkge1xuICAgICAgICBibG9jay5jbGFzc0xpc3QudG9nZ2xlKCdwbGF5ZXItc2hpcCcpO1xuICAgICAgfVxuICAgICAgYm9hcmRIb2xkZXIuYXBwZW5kQ2hpbGQoYmxvY2spO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBzZXR1cCA9ICgpID0+IHtcbiAgbGV0IHBsYXllckJvYXJkID0gbmV3IGJvYXJkKCk7XG4gIGxldCBhaUJvYXJkID0gbmV3IGJvYXJkKCk7XG5cbiAgaW5pdGlhbGl6ZUJvYXJkKGFpQm9hcmQsIHBsYXllckJvYXJkKTtcblxuICBsZXQgZ2FtZVN0YXR1c1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZ2FtZVN0YXR1c1RleHQuY2xhc3NMaXN0LmFkZCgnZ2FtZS1zdGF0dXMtdGV4dCcpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdhbWVTdGF0dXNUZXh0KTtcblxuXG4gIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHJlc2V0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuXG4gIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Jlc2V0LWJ0bicpO1xuICByZXNldEJ1dHRvbi52YWx1ZSA9IFwiTmV3IEdhbWVcIjtcbiAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcblxuXG4gIGluaXRpYWxpemVCb2FyZChwbGF5ZXJCb2FyZCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG4iLCJjb25zdCBpc1dpbm5pbmdNb3ZlID0gKHBsYXllciwgY3VycmVudEJvYXJkKSA9PiB7XG4gIGxldCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZCcpWzBdO1xuICBsZXQgZ2FtZVN0YXR1c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXN0YXR1cy10ZXh0Jyk7XG5cbiAgaWYgKGN1cnJlbnRCb2FyZC5zdW5rZW5TaGlwcyA+PSA1KSB7XG4gICAgYm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICBpZiAocGxheWVyID09ICdwbGF5ZXInKSB7XG4gICAgICBnYW1lU3RhdHVzRGl2LmlubmVySFRNTCA9ICdZb3UgV2luISc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdhbWVTdGF0dXNEaXYuaW5uZXJIVE1MID0gJ1lvdSBMb3NlISc7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNXaW5uaW5nTW92ZTsiLCJcbmNvbnN0IGdlbmVyYXRlQ29vcmRpbmF0ZXMgPSAoZ2l2ZW5Db29yZGluYXRlcyA9IG51bGwpID0+IHtcbiAgbGV0IGNvb3JkaW5hdGVzID0geyB4OiAwLCB5OiAwIH07XG5cbiAgaWYgKGdpdmVuQ29vcmRpbmF0ZXMgPT0gbnVsbCkge1xuICAgIGNvb3JkaW5hdGVzLnggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29vcmRpbmF0ZXMueSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICB9XG5cbiAgd2hpbGUgKGNvb3JkaW5hdGVzLnggPCAwIHx8IGNvb3JkaW5hdGVzLnggPiA5IHx8IGNvb3JkaW5hdGVzLnkgPCAwIHx8IGNvb3JkaW5hdGVzLnkgPiA5KSB7XG4gICAgc3dpdGNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpKXtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgY29vcmRpbmF0ZXMueCA9IGxhc3RzaG90LnggKyAxXG4gICAgICAgIGNvb3JkaW5hdGVzLnkgPSBsYXN0c2hvdC55XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBjb29yZGluYXRlcy54ID0gbGFzdHNob3QueCAtIDFcbiAgICAgICAgY29vcmRpbmF0ZXMueSA9IGxhc3RzaG90LnlcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGNvb3JkaW5hdGVzLnggPSBsYXN0c2hvdC54XG4gICAgICAgIGNvb3JkaW5hdGVzLnkgPSBsYXN0c2hvdC55ICsgMVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgY29vcmRpbmF0ZXMueCA9IGxhc3RzaG90LnhcbiAgICAgICAgY29vcmRpbmF0ZXMueSA9IGxhc3RzaG90LnkgLSAxXG4gICAgICAgIGJyZWFrO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gY29vcmRpbmF0ZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGVDb29yZGluYXRlcztcbiIsImltcG9ydCAnLi9zdHlsZXNoZWV0cy9tYWluLnNjc3MnO1xuY29uc3Qgc2V0dXAgPSByZXF1aXJlKCcuL2dhbWUnKTtcblxuc2V0dXAoKTtcbiIsImNvbnN0IHNldFN0YXR1c01lc3NhZ2UgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IGdhbWVTdGF0dXNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zdGF0dXMtdGV4dCcpO1xuICBpZiAocGxheWVyID09ICdwbGF5ZXInKSB7XG4gICAgZ2FtZVN0YXR1c0Rpdi5pbm5lckhUTUwgPSBcIkNvbmdyYXRzIHlvdSdyZSBhIHNpbmtlciBvZiBzaGlwcywgb2ZmaWNpYWxseSFcIlxuICB9IGVsc2Uge1xuICAgIGdhbWVTdGF0dXNEaXYuaW5uZXJIVE1MID0gXCJDb21wdXRlciBnb3QgeW91IG1hbiFcIlxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0U3RhdHVzTWVzc2FnZTtcbiIsIiBcbmNvbnN0IHNoaXAgPSAobmFtZSwgc3RhcnQsIGVuZCkgPT4ge1xuICBsZXQgcG9zaXRpb25zID0gW107XG4gIGxldCBzdW5rID0gZmFsc2U7XG5cbiAgICBpZiAoc3RhcnQueSA9PSBlbmQueSkge1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Lng7IGkgPD0gZW5kLng7IGkrKykge1xuICAgICAgICBwb3NpdGlvbnMucHVzaCh7eDogaSwgeTogc3RhcnQueSwgaGl0OiBmYWxzZX0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnQueTsgaSA8PSBlbmQueTsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKHt4OiBzdGFydC54LCB5OiBpLCBoaXQ6IGZhbHNlfSlcbiAgICAgIH1cbiAgICB9XG4gIFxuICBjb25zdCBoaXQgPSAodGFyZ2V0KSA9PiB7XG4gICAgbGV0IGluZGV4ID0gcG9zaXRpb25zLmluZGV4T2YocG9zaXRpb25zLmZpbmQoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbi54ID09IHRhcmdldC54ICYmIHBvc2l0aW9uLnkgPT0gdGFyZ2V0LnkpKVxuICAgIHBvc2l0aW9uc1tpbmRleF0uaGl0ID0gdHJ1ZTtcblxuICAgIGlmIChwb3NpdGlvbnMuZXZlcnkocG9zaXRpb24gPT4gcG9zaXRpb24uaGl0ID09IHRydWUpKSB7XG4gICAgICBzdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge2hpdCwgcG9zaXRpb25zLCBzdW5rfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9ICBzaGlwOyAiLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9