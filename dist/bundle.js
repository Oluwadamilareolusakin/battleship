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
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0; }\n\n.block {\n  height: 3vw;\n  width: 3vw;\n  background-color: rgba(0, 0, 0, 0.8);\n  border: 0.1vw solid black;\n  display: inline-block; }\n\n.white {\n  background-color: white; }\n\n.player-ship {\n  background-color: grey; }\n\n.red {\n  background-color: red; }\n\n.row {\n  display: flex;\n  flex-flow: row nowrap; }\n\n.column {\n  display: flex;\n  flex-flow: column nowrap; }\n\nmain {\n  justify-content: center;\n  align-items: center;\n  height: 100vh; }\n\n.game-status-text {\n  border: .5px solid black; }\n\n.reset-btn {\n  background-color: teal;\n  color: white; }\n\n.board {\n  width: 80vw;\n  margin: 2em 0; }\n", ""]);


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
const isGameOver = __webpack_require__(/*! ./gameOver */ "./src/gameOver.js");

class Gameboard {
  constructor() {
    let self = this;
    this.sunkenShips = 0;
    this.ships = [];
    this.board = [];
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
    
    this.gameboard.findAndHitShip(this.gameboard, event.target, 'player');
    
    if (targetBlock == 1) {
      event.target.classList.toggle('red');
    } else {
      targetBlock = 2;
      event.target.classList.toggle('white');
    }

    this.removeEventListener('click', this.gameboard.attack);
  }
  
  aiAttack(){
    this.removeEventListener('click', this.enemyboard.aiAttack);
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
            if (isGameOver(targetBoard)){
              targetBoard.displayWinner(player)
              setStatusMessage(player);
            };

            
            if (ship.sunk) {
              targetBoard.sunkenShips++;
              }
              break;
          }
        }
      }
    }

    displayWinner(player){
      let gameStatusText = document.querySelector('.game-status-text');
      if(player === 'player'){
        gameStatusText.innerHTML = 'You won!'
        return
      }
      gamestatusText.innerHTML = 'You got your ass kicked by AI'
      return
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
  document.querySelector('main').appendChild(boardHolder);
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

  
  let gameStatusText = document.createElement('p');
  let gameControlsHolder = document.createElement('div');
  let resetButton = document.createElement('input');
  resetButton.value = "Reset Game";
  resetButton.addEventListener('click', () => window.location.reload());
  resetButton.type = "button";
  resetButton.classList.add('reset-btn');
  gameStatusText.classList.add('game-status-text');
  gameControlsHolder.classList.add('game-control-holder');
  gameControlsHolder.classList.add('row');

  document.querySelector('main').appendChild(gameControlsHolder);
  gameControlsHolder.appendChild(gameStatusText);
  gameControlsHolder.appendChild(resetButton);
  initializeBoard(aiBoard, playerBoard);
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

const isGameOver = (currentBoard) => {
  console.log(currentBoard.sunkenShips, currentBoard.ships.length)
  return currentBoard.sunkenShips == currentBoard.ships.length;
}

module.exports = isGameOver;

/***/ }),

/***/ "./src/generateCoordinates.js":
/*!************************************!*\
  !*** ./src/generateCoordinates.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {


const generateCoordinates = (lastshot = null) => {
  let coordinates = { x: 0, y: 0 };

  if (lastshot == null) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVPdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW5lcmF0ZUNvb3JkaW5hdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvbXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvbWFpbi5zY3NzPzdkYTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFB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aGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLmJsb2NrIHtcXG4gIGhlaWdodDogM3Z3O1xcbiAgd2lkdGg6IDN2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGJvcmRlcjogMC4xdncgc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4ud2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG5cXG4ucGxheWVyLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgfVxcblxcbi5yZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyB9XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgbm93cmFwOyB9XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwOyB9XFxuXFxubWFpbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoOyB9XFxuXFxuLmdhbWUtc3RhdHVzLXRleHQge1xcbiAgYm9yZGVyOiAuNXB4IHNvbGlkIGJsYWNrOyB9XFxuXFxuLnJlc2V0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLmJvYXJkIHtcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgbWFyZ2luOiAyZW0gMDsgfVxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsImNvbnN0IHNoaXAgPSByZXF1aXJlKCcuL3NoaXAnKTtcbmNvbnN0IGdlbmVyYXRlQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuL2dlbmVyYXRlQ29vcmRpbmF0ZXMnKTsgXG5jb25zdCBzZXRTdGF0dXNNZXNzYWdlID0gcmVxdWlyZSgnLi9wcm9tcHRzJyk7XG5jb25zdCBpc0dhbWVPdmVyID0gcmVxdWlyZSgnLi9nYW1lT3ZlcicpO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5zdW5rZW5TaGlwcyA9IDA7XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIHRoaXMuYm9hcmQucHVzaChuZXcgQXJyYXkoMTApLmZpbGwoMCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbVBsYWNlbWVudCA9IChzaGlwTGVuZ3RoKSA9PiB7XG4gICAgICAgIGxldCB4ID0gLTU7XG4gICAgICAgIGxldCB5ID0gLTU7XG4gICAgICAgIHdoaWxlICh4ICsgc2hpcExlbmd0aCA8IDAgfHwgeCArIHNoaXBMZW5ndGggPiA5IHx8IHkgKyBzaGlwTGVuZ3RoIDwgMCB8fCB5ICsgc2hpcExlbmd0aCA+IDkpIHtcbiAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBzaGlwRGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbFwiO1xuICAgICAgICBsZXQgbmV3U2hpcDtcbiAgICAgICAgaWYgKHNoaXBEaXJlY3Rpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgbmV3U2hpcCA9IHNoaXAoYHNoaXAke3NoaXBMZW5ndGgrMX1gLCB7eCwgeX0sIHt4LCB5OiB5K3NoaXBMZW5ndGh9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdTaGlwID0gc2hpcChgc2hpcCR7c2hpcExlbmd0aCsxfWAsIHt4LCB5fSwge3g6IHgrc2hpcExlbmd0aCwgeX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBvc2l0aW9uaXNWYWxpZCA9IHRydWVcbiAgICAgICAgbmV3U2hpcC5wb3NpdGlvbnMuZm9yRWFjaChwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgaWYgKHNlbGYuYm9hcmRbcG9zaXRpb24ueF1bcG9zaXRpb24ueV0gIT0gMCkge1xuICAgICAgICAgICAgcG9zaXRpb25pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGlmIChwb3NpdGlvbmlzVmFsaWQpIHtcbiAgICAgICAgICBzZWxmLnNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgICAgbmV3U2hpcC5wb3NpdGlvbnMuZm9yRWFjaChwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgICBzZWxmLmJvYXJkW3Bvc2l0aW9uLnhdW3Bvc2l0aW9uLnldID0gMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uaXNWYWxpZDtcbiAgICB9XG5cbiAgICBsZXQgc2hpcExlbmd0aHMgPSBbNCwzLDMsMiwxXTtcbiAgICBzaGlwTGVuZ3Rocy5mb3JFYWNoKHNoaXBMZW5ndGggPT4ge1xuICAgICAgbGV0IHBsYWNlZDtcbiAgICAgIGRvIHtcbiAgICAgICAgcGxhY2VkID0gcmFuZG9tUGxhY2VtZW50KHNoaXBMZW5ndGgpO1xuICAgICAgfSB3aGlsZSAoIXBsYWNlZClcblxuICAgIH0pO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgdGhpcy5ib2FyZC5mb3JFYWNoKHJvdyA9PiByb3cuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgaWYgKGNvb3JkaW5hdGUgPT0gMSkgeyBjb3VudCsrOyB9XG4gICAgfSkpO1xuICAgIFxuICAgIHRoaXMubGFzdFNob3RTdWNjZWVkZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxhc3RTaG90WFkgPSBudWxsO1xuICAgIHRoaXMuc2hvdHNTaW5jZUxhc3RIaXQgPSAwO1xuICB9XG4gIFxuICBhdHRhY2soZXZlbnQpeyAgXG4gICAgbGV0IHRhcmdldEJsb2NrID0gdGhpcy5nYW1lYm9hcmQuYm9hcmRbdGhpcy54XVt0aGlzLnldO1xuICAgIGxldCBnYW1lU3RhdHVzVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXN0YXR1cy10ZXh0Jyk7XG4gICAgZ2FtZVN0YXR1c1RleHQuaW5uZXJIVE1MID0gJyc7XG4gICAgXG4gICAgdGhpcy5nYW1lYm9hcmQuZmluZEFuZEhpdFNoaXAodGhpcy5nYW1lYm9hcmQsIGV2ZW50LnRhcmdldCwgJ3BsYXllcicpO1xuICAgIFxuICAgIGlmICh0YXJnZXRCbG9jayA9PSAxKSB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgncmVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldEJsb2NrID0gMjtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCd3aGl0ZScpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdhbWVib2FyZC5hdHRhY2spO1xuICB9XG4gIFxuICBhaUF0dGFjaygpe1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmVuZW15Ym9hcmQuYWlBdHRhY2spO1xuICAgIGxldCBzaG90VGFyZ2V0O1xuICAgIFxuICAgIGlmICh0aGlzLmVuZW15Ym9hcmQubGFzdFNob3RTdWNjZWVkZWQpIHtcbiAgICAgIHNob3RUYXJnZXQgPSB0aGlzLmVuZW15Ym9hcmQuc2hvb3RUYXJnZXRlZFNob3QodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3RUYXJnZXQgPSB0aGlzLmVuZW15Ym9hcmQuc2hvb3RSYW5kb21TaG90KHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICBsZXQgY29tcHV0ZXJUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgWCR7c2hvdFRhcmdldC54fS1ZJHtzaG90VGFyZ2V0Lnl9YCk7XG4gICAgXG4gICAgaWYgKHRoaXMuZW5lbXlib2FyZC5ib2FyZFtzaG90VGFyZ2V0LnhdW3Nob3RUYXJnZXQueV0gPT0gMSkge1xuICAgICAgY29tcHV0ZXJUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgncmVkJyk7XG4gICAgICB0aGlzLmVuZW15Ym9hcmQubGFzdFNob3RTdWNjZWVkZWQgPSB0cnVlO1xuICAgICAgdGhpcy5lbmVteWJvYXJkLnNob3RzU2luY2VMYXN0SGl0ID0gMDtcbiAgICAgIHRoaXMuZW5lbXlib2FyZC5sYXN0U2hvdFhZID0geyB4OiBzaG90VGFyZ2V0LngsIHk6IHNob3RUYXJnZXQueSB9O1xuICAgICAgdGhpcy5lbmVteWJvYXJkLmZpbmRBbmRIaXRTaGlwKHRoaXMuZW5lbXlib2FyZCwgc2hvdFRhcmdldCwgJ0NvbXB1dGVyJylcbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wdXRlclRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCd3aGl0ZScpO1xuICAgICAgdGhpcy5lbmVteWJvYXJkLnNob3RzU2luY2VMYXN0SGl0Kys7XG4gICAgICBpZiAodGhpcy5lbmVteWJvYXJkLnNob3RzU2luY2VMYXN0SGl0ID49IDQpIHtcbiAgICAgICAgdGhpcy5lbmVteWJvYXJkLmxhc3RTaG90U3VjY2VlZGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZW5lbXlib2FyZC5ib2FyZFtzaG90VGFyZ2V0LnhdW3Nob3RUYXJnZXQueV0gPSAyO1xuICB9XG4gIFxuICBzaG9vdFRhcmdldGVkU2hvdCh0YXJnZXQpe1xuICAgIGxldCBjb3VudCA9IDE7XG4gICAgbGV0IHNob3RUYXJnZXQgPSBnZW5lcmF0ZUNvb3JkaW5hdGVzKHRhcmdldC5lbmVteWJvYXJkLmxhc3RTaG90WFkpO1xuICAgIHdoaWxlICh0YXJnZXQuZW5lbXlib2FyZC5ib2FyZFtzaG90VGFyZ2V0LnhdW3Nob3RUYXJnZXQueV0gPT0gMiAmJiBjb3VudCA8IDUpIHtcbiAgICAgIHNob3RUYXJnZXQgPSBnZW5lcmF0ZUNvb3JkaW5hdGVzKHRhcmdldC5lbmVteWJvYXJkLmxhc3RTaG90WFkpO1xuICAgICAgY291bnQrKztcbiAgICB9XG5cbiAgICBpZiAoY291bnQgPT0gNSkge1xuICAgICAgc2hvdFRhcmdldCA9IHRhcmdldC5lbmVteWJvYXJkLnNob290UmFuZG9tU2hvdCh0YXJnZXQpO1xuICAgIH1cblxuICAgIHJldHVybiBzaG90VGFyZ2V0O1xuICB9XG5cbiAgc2hvb3RSYW5kb21TaG90KHRhcmdldCl7XG4gICAgbGV0IHNob3RUYXJnZXQgPSBnZW5lcmF0ZUNvb3JkaW5hdGVzKCk7XG4gICAgd2hpbGUgKHRhcmdldC5lbmVteWJvYXJkLmJvYXJkW3Nob3RUYXJnZXQueF1bc2hvdFRhcmdldC55XSA9PSAyKSB7XG4gICAgICBzaG90VGFyZ2V0ID0gZ2VuZXJhdGVDb29yZGluYXRlcygpO1xuICAgIH1cbiAgICByZXR1cm4gc2hvdFRhcmdldDtcbiAgfVxuXG4gIGZpbmRBbmRIaXRTaGlwKHRhcmdldEJvYXJkLCB0YXJnZXQsIHBsYXllcil7XG4gICAgICBmb3IgKGxldCBzaGlwIG9mIHRhcmdldEJvYXJkLnNoaXBzKSB7XG4gICAgICAgIGZvciAobGV0IHBvc2l0aW9uIG9mIHNoaXAucG9zaXRpb25zKSB7XG4gICAgICAgICAgaWYgKHBvc2l0aW9uLnggPT0gdGFyZ2V0LnggJiYgcG9zaXRpb24ueSA9PSB0YXJnZXQueSkge1xuICAgICAgICAgICAgc2hpcC5oaXQoe3g6IHRhcmdldC54LCB5OiB0YXJnZXQueX0pO1xuICAgICAgICAgICAgaWYgKGlzR2FtZU92ZXIodGFyZ2V0Qm9hcmQpKXtcbiAgICAgICAgICAgICAgdGFyZ2V0Qm9hcmQuZGlzcGxheVdpbm5lcihwbGF5ZXIpXG4gICAgICAgICAgICAgIHNldFN0YXR1c01lc3NhZ2UocGxheWVyKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHNoaXAuc3Vuaykge1xuICAgICAgICAgICAgICB0YXJnZXRCb2FyZC5zdW5rZW5TaGlwcysrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXlXaW5uZXIocGxheWVyKXtcbiAgICAgIGxldCBnYW1lU3RhdHVzVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXN0YXR1cy10ZXh0Jyk7XG4gICAgICBpZihwbGF5ZXIgPT09ICdwbGF5ZXInKXtcbiAgICAgICAgZ2FtZVN0YXR1c1RleHQuaW5uZXJIVE1MID0gJ1lvdSB3b24hJ1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGdhbWVzdGF0dXNUZXh0LmlubmVySFRNTCA9ICdZb3UgZ290IHlvdXIgYXNzIGtpY2tlZCBieSBBSSdcbiAgICAgIHJldHVyblxuICAgIH1cbiAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkOyIsImNvbnN0IGJvYXJkID0gcmVxdWlyZSgnLi9ib2FyZCcpO1xuXG5jb25zdCBpbml0aWFsaXplQm9hcmQgPSAocGxheWVyQm9hcmQsIGFpQm9hcmQgPSBudWxsKSA9PiB7XG4gIGxldCBib2FyZEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZEhvbGRlci5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICBpZiAoYWlCb2FyZCAhPT0gbnVsbCkge1xuICAgIGJvYXJkSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJ0b3AtYm9hcmRcIik7XG4gIH0gZWxzZSB7XG4gICAgYm9hcmRIb2xkZXIuY2xhc3NMaXN0LmFkZChcImJvdHRvbS1ib2FyZFwiKTtcbiAgfVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuYXBwZW5kQ2hpbGQoYm9hcmRIb2xkZXIpO1xuICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5KyspIHtcbiAgICAgIGxldCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcblxuICAgICAgaWYgKGFpQm9hcmQgPT09IG51bGwpIHtcbiAgICAgICAgYmxvY2suaWQgPSBgWCR7eH0tWSR7eX1gXG4gICAgICB9XG5cblxuICAgICAgaWYgKHkgPT0gMCkge1xuICAgICAgICBibG9jay5jbGFzc0xpc3QudG9nZ2xlKCdmaXJzdCcpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBibG9jay54ID0geDtcbiAgICAgIGJsb2NrLnkgPSB5O1xuXG4gICAgICBibG9jay5nYW1lYm9hcmQgPSBwbGF5ZXJCb2FyZDtcbiAgICAgIGJsb2NrLmVuZW15Ym9hcmQgPSBhaUJvYXJkO1xuICAgICAgaWYgKGFpQm9hcmQgIT09IG51bGwpIHtcbiAgICAgICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhaUJvYXJkLmFpQXR0YWNrKTtcbiAgICAgICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5ZXJCb2FyZC5hdHRhY2spO1xuICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZC5ib2FyZFt4XVt5XSA9PSAxKSB7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ3BsYXllci1zaGlwJyk7XG4gICAgICB9XG4gICAgICBib2FyZEhvbGRlci5hcHBlbmRDaGlsZChibG9jayk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHNldHVwID0gKCkgPT4ge1xuICBsZXQgcGxheWVyQm9hcmQgPSBuZXcgYm9hcmQoKTtcbiAgbGV0IGFpQm9hcmQgPSBuZXcgYm9hcmQoKTtcblxuICBcbiAgbGV0IGdhbWVTdGF0dXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsZXQgZ2FtZUNvbnRyb2xzSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHJlc2V0QnV0dG9uLnZhbHVlID0gXCJSZXNldCBHYW1lXCI7XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgcmVzZXRCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Jlc2V0LWJ0bicpO1xuICBnYW1lU3RhdHVzVGV4dC5jbGFzc0xpc3QuYWRkKCdnYW1lLXN0YXR1cy10ZXh0Jyk7XG4gIGdhbWVDb250cm9sc0hvbGRlci5jbGFzc0xpc3QuYWRkKCdnYW1lLWNvbnRyb2wtaG9sZGVyJyk7XG4gIGdhbWVDb250cm9sc0hvbGRlci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuYXBwZW5kQ2hpbGQoZ2FtZUNvbnRyb2xzSG9sZGVyKTtcbiAgZ2FtZUNvbnRyb2xzSG9sZGVyLmFwcGVuZENoaWxkKGdhbWVTdGF0dXNUZXh0KTtcbiAgZ2FtZUNvbnRyb2xzSG9sZGVyLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbiAgaW5pdGlhbGl6ZUJvYXJkKGFpQm9hcmQsIHBsYXllckJvYXJkKTtcbiAgaW5pdGlhbGl6ZUJvYXJkKHBsYXllckJvYXJkKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXR1cDtcbiIsImNvbnN0IGlzR2FtZU92ZXIgPSAoY3VycmVudEJvYXJkKSA9PiB7XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRCb2FyZC5zdW5rZW5TaGlwcywgY3VycmVudEJvYXJkLnNoaXBzLmxlbmd0aClcbiAgcmV0dXJuIGN1cnJlbnRCb2FyZC5zdW5rZW5TaGlwcyA9PSBjdXJyZW50Qm9hcmQuc2hpcHMubGVuZ3RoO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzR2FtZU92ZXI7IiwiXG5jb25zdCBnZW5lcmF0ZUNvb3JkaW5hdGVzID0gKGxhc3RzaG90ID0gbnVsbCkgPT4ge1xuICBsZXQgY29vcmRpbmF0ZXMgPSB7IHg6IDAsIHk6IDAgfTtcblxuICBpZiAobGFzdHNob3QgPT0gbnVsbCkge1xuICAgIGNvb3JkaW5hdGVzLnggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29vcmRpbmF0ZXMueSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICB9XG5cbiAgd2hpbGUgKGNvb3JkaW5hdGVzLnggPCAwIHx8IGNvb3JkaW5hdGVzLnggPiA5IHx8IGNvb3JkaW5hdGVzLnkgPCAwIHx8IGNvb3JkaW5hdGVzLnkgPiA5KSB7XG4gICAgc3dpdGNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpKXtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgY29vcmRpbmF0ZXMueCA9IGxhc3RzaG90LnggKyAxXG4gICAgICAgIGNvb3JkaW5hdGVzLnkgPSBsYXN0c2hvdC55XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBjb29yZGluYXRlcy54ID0gbGFzdHNob3QueCAtIDFcbiAgICAgICAgY29vcmRpbmF0ZXMueSA9IGxhc3RzaG90LnlcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGNvb3JkaW5hdGVzLnggPSBsYXN0c2hvdC54XG4gICAgICAgIGNvb3JkaW5hdGVzLnkgPSBsYXN0c2hvdC55ICsgMVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgY29vcmRpbmF0ZXMueCA9IGxhc3RzaG90LnhcbiAgICAgICAgY29vcmRpbmF0ZXMueSA9IGxhc3RzaG90LnkgLSAxXG4gICAgICAgIGJyZWFrO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gY29vcmRpbmF0ZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGVDb29yZGluYXRlcztcbiIsImltcG9ydCAnLi9zdHlsZXNoZWV0cy9tYWluLnNjc3MnO1xuY29uc3Qgc2V0dXAgPSByZXF1aXJlKCcuL2dhbWUnKTtcblxuc2V0dXAoKTtcbiIsImNvbnN0IHNldFN0YXR1c01lc3NhZ2UgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IGdhbWVTdGF0dXNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zdGF0dXMtdGV4dCcpO1xuICBpZiAocGxheWVyID09ICdwbGF5ZXInKSB7XG4gICAgZ2FtZVN0YXR1c0Rpdi5pbm5lckhUTUwgPSBcIkNvbmdyYXRzIHlvdSdyZSBhIHNpbmtlciBvZiBzaGlwcywgb2ZmaWNpYWxseSFcIlxuICB9IGVsc2Uge1xuICAgIGdhbWVTdGF0dXNEaXYuaW5uZXJIVE1MID0gXCJDb21wdXRlciBnb3QgeW91IG1hbiFcIlxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0U3RhdHVzTWVzc2FnZTtcbiIsIiBcbmNvbnN0IHNoaXAgPSAobmFtZSwgc3RhcnQsIGVuZCkgPT4ge1xuICBsZXQgcG9zaXRpb25zID0gW107XG4gIGxldCBzdW5rID0gZmFsc2U7XG5cbiAgICBpZiAoc3RhcnQueSA9PSBlbmQueSkge1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Lng7IGkgPD0gZW5kLng7IGkrKykge1xuICAgICAgICBwb3NpdGlvbnMucHVzaCh7eDogaSwgeTogc3RhcnQueSwgaGl0OiBmYWxzZX0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnQueTsgaSA8PSBlbmQueTsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKHt4OiBzdGFydC54LCB5OiBpLCBoaXQ6IGZhbHNlfSlcbiAgICAgIH1cbiAgICB9XG4gIFxuICBjb25zdCBoaXQgPSAodGFyZ2V0KSA9PiB7XG4gICAgbGV0IGluZGV4ID0gcG9zaXRpb25zLmluZGV4T2YocG9zaXRpb25zLmZpbmQoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbi54ID09IHRhcmdldC54ICYmIHBvc2l0aW9uLnkgPT0gdGFyZ2V0LnkpKVxuICAgIHBvc2l0aW9uc1tpbmRleF0uaGl0ID0gdHJ1ZTtcblxuICAgIGlmIChwb3NpdGlvbnMuZXZlcnkocG9zaXRpb24gPT4gcG9zaXRpb24uaGl0ID09IHRydWUpKSB7XG4gICAgICBzdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge2hpdCwgcG9zaXRpb25zLCBzdW5rfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9ICBzaGlwOyAiLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9