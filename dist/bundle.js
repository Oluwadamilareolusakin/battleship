/* eslint-disable */

/** *** */ (function (modules) { // webpackBootstrap
/** *** */ 	// The module cache
/** *** */ 	const installedModules = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */
    /** *** */ 		// Check if module is in cache
    /** *** */ 		if (installedModules[moduleId]) {
      /** *** */ 			return installedModules[moduleId].exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = installedModules[moduleId] = {
      /** *** */ 			i: moduleId,
      /** *** */ 			l: false,
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Flag the module as loaded
    /** *** */ 		module.l = true;
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** *** */
  /** *** */ 	// expose the modules object (__webpack_modules__)
  /** *** */ 	__webpack_require__.m = modules;
  /** *** */
  /** *** */ 	// expose the module cache
  /** *** */ 	__webpack_require__.c = installedModules;
  /** *** */
  /** *** */ 	// define getter function for harmony exports
  /** *** */ 	__webpack_require__.d = function (exports, name, getter) {
    /** *** */ 		if (!__webpack_require__.o(exports, name)) {
      /** *** */ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /** *** */ 		}
    /** *** */ 	};
  /** *** */
  /** *** */ 	// define __esModule on exports
  /** *** */ 	__webpack_require__.r = function (exports) {
    /** *** */ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /** *** */ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /** *** */ 		}
    /** *** */ 		Object.defineProperty(exports, '__esModule', { value: true });
    /** *** */ 	};
  /** *** */
  /** *** */ 	// create a fake namespace object
  /** *** */ 	// mode & 1: value is a module id, require it
  /** *** */ 	// mode & 2: merge all properties of value into the ns
  /** *** */ 	// mode & 4: return value when already ns object
  /** *** */ 	// mode & 8|1: behave like require
  /** *** */ 	__webpack_require__.t = function (value, mode) {
    /** *** */ 		if (mode & 1) value = __webpack_require__(value);
    /** *** */ 		if (mode & 8) return value;
    /** *** */ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /** *** */ 		const ns = Object.create(null);
    /** *** */ 		__webpack_require__.r(ns);
    /** *** */ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
    /** *** */ 		if (mode & 2 && typeof value !== 'string') for (const key in value) __webpack_require__.d(ns, key, ((key) => value[key]).bind(null, key));
    /** *** */ 		return ns;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
  /** *** */ 	__webpack_require__.n = function (module) {
    /** *** */ 		const getter = module && module.__esModule
    /** *** */ 			? function getDefault() { return module.default; }
    /** *** */ 			: function getModuleExports() { return module; };
    /** *** */ 		__webpack_require__.d(getter, 'a', getter);
    /** *** */ 		return getter;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// Object.prototype.hasOwnProperty.call
  /** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /** *** */
  /** *** */ 	// __webpack_public_path__
  /** *** */ 	__webpack_require__.p = '';
  /** *** */
  /** *** */
  /** *** */ 	// Load entry module and return exports
  /** *** */ 	return __webpack_require__(__webpack_require__.s = './src/index.js');
/** *** */ }({

  /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/main.scss':
  /*! ****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/main.scss ***!
  \*************************************************************************************************************** */
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js')(false);
    // Module
    exports.push([module.i, '* {\n  margin: 0;\n  padding: 0; }\n\n.block {\n  height: 3vw;\n  width: 3vw;\n  background-color: rgba(0, 0, 0, 0.8);\n  border: 0.1vw solid black;\n  display: inline-block; }\n\n.white {\n  background-color: white; }\n\n.player-ship {\n  background-color: grey; }\n\n.red {\n  background-color: red; }\n\n.row {\n  display: flex;\n  flex-flow: row nowrap; }\n\n.column {\n  display: flex;\n  flex-flow: column nowrap; }\n\nmain {\n  justify-content: center;\n  align-items: center;\n  height: 100vh; }\n\n.game-status-text {\n  border: .5px solid black; }\n\n.reset-btn {\n  background-color: teal;\n  color: white; }\n\n.board {\n  width: 80vw;\n  margin: 2em 0; }\n', '']);
    /***/ }),

  /***/ './node_modules/css-loader/dist/runtime/api.js':
  /*! *****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \**************************************************** */
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {
    /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
    // css base code, injected by the css-loader
    // eslint-disable-next-line func-names
    module.exports = function (useSourceMap) {
      const list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map((item) => {
          const content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return '@media '.concat(item[2], '{').concat(content, '}');
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

        const alreadyImportedModules = {};

        for (let i = 0; i < this.length; i++) {
          // eslint-disable-next-line prefer-destructuring
          const id = this[i][0];

          if (id != null) {
            alreadyImportedModules[id] = true;
          }
        }

        for (let _i = 0; _i < modules.length; _i++) {
          const item = modules[_i]; // skip already imported module
          // this implementation is not 100% perfect for weird media query combinations
          // when a module is imported multiple times with different media queries.
          // I hope this will never occur (Hey this way we have smaller bundles)

          if (item[0] == null || !alreadyImportedModules[item[0]]) {
            if (mediaQuery && !item[2]) {
              item[2] = mediaQuery;
            } else if (mediaQuery) {
              item[2] = '('.concat(item[2], ') and (').concat(mediaQuery, ')');
            }

            list.push(item);
          }
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      const content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

      const cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        const sourceMapping = toComment(cssMapping);
        const sourceURLs = cssMapping.sources.map((source) => '/*# sourceURL='.concat(cssMapping.sourceRoot).concat(source, ' */'));
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      const base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      const data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(base64);
      return '/*# '.concat(data, ' */');
    }
    /***/ }),

  /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
  /*! ****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************** */
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {
    const stylesInDom = {};

    const isOldIE = (function isOldIE() {
      let memo;
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
    }());

    const getTarget = (function getTarget() {
      const memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          let styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
    }());

    function listToStyles(list, options) {
      const styles = [];
      const newStyles = {};

      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        const id = options.base ? item[0] + options.base : item[0];
        const css = item[1];
        const media = item[2];
        const sourceMap = item[3];
        const part = {
          css,
          media,
          sourceMap,
        };

        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id,
            parts: [part],
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }

      return styles;
    }

    function addStylesToDom(styles, options) {
      for (let i = 0; i < styles.length; i++) {
        const item = styles[i];
        const domStyle = stylesInDom[item.id];
        let j = 0;

        if (domStyle) {
          domStyle.refs++;

          for (; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          const parts = [];

          for (; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts,
          };
        }
      }
    }

    function insertStyleElement(options) {
      const style = document.createElement('style');

      if (typeof options.attributes.nonce === 'undefined') {
        const nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          options.attributes.nonce = nonce;
        }
      }

      Object.keys(options.attributes).forEach((key) => {
        style.setAttribute(key, options.attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        const target = getTarget(options.insert || 'head');

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


    const replaceText = (function replaceText() {
      const textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }());

    function applyToSingletonTag(style, index, remove, obj) {
      const css = remove ? '' : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        const cssNode = document.createTextNode(css);
        const { childNodes } = style;

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
      let { css } = obj;
      const { media } = obj;
      const { sourceMap } = obj;

      if (media) {
        style.setAttribute('media', media);
      }

      if (sourceMap && btoa) {
        css += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), ' */');
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

    let singleton = null;
    let singletonCounter = 0;

    function addStyle(obj, options) {
      let style;
      let update;
      let remove;

      if (options.singleton) {
        const styleIndex = singletonCounter++;
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

      const styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        const mayRemove = [];

        for (let i = 0; i < styles.length; i++) {
          const item = styles[i];
          const domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
        }

        if (newList) {
          const newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (let _i = 0; _i < mayRemove.length; _i++) {
          const _domStyle = mayRemove[_i];

          if (_domStyle.refs === 0) {
            for (let j = 0; j < _domStyle.parts.length; j++) {
              _domStyle.parts[j]();
            }

            delete stylesInDom[_domStyle.id];
          }
        }
      };
    };
    /***/ }),

  /***/ './src/board.js':
  /*! **********************!*\
  !*** ./src/board.js ***!
  \********************* */
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {
    const ship = __webpack_require__(/*! ./ship */ './src/ship.js');
    const generateCoordinates = __webpack_require__(/*! ./generateCoordinates */ './src/generateCoordinates.js');
    const setStatusMessage = __webpack_require__(/*! ./prompts */ './src/prompts.js');
    const isGameOver = __webpack_require__(/*! ./gameOver */ './src/gameOver.js');

    class Gameboard {
      constructor() {
        const self = this;
        this.sunkenShips = 0;
        this.ships = [];
        this.board = [];
        for (let i = 0; i < 10; i += 1) {
          this.board.push(new Array(10).fill(0));
        }

        const randomPlacement = (shipLength) => {
          let x = -5;
          let y = -5;
          while (x + shipLength < 0 || x + shipLength > 9 || y + shipLength < 0 || y + shipLength > 9) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
          }

          const shipDirection = Math.random() < 0.5 ? 'horizontal' : 'vertical';
          let newShip;
          if (shipDirection === 'vertical') {
            newShip = ship(`ship${shipLength + 1}`, { x, y }, { x, y: y + shipLength });
          } else {
            newShip = ship(`ship${shipLength + 1}`, { x, y }, { x: x + shipLength, y });
          }

          let positionisValid = true;
          newShip.positions.forEach((position) => {
            if (self.board[position.x][position.y] !== 0) {
              positionisValid = false;
            }
          });

          if (positionisValid) {
            self.ships.push(newShip);
            newShip.positions.forEach((position) => {
              self.board[position.x][position.y] = 1;
            });
          }

          return positionisValid;
        };

        const shipLengths = [4, 3, 3, 2, 1];
        shipLengths.forEach((shipLength) => {
          let placed;
          do {
            placed = randomPlacement(shipLength);
          } while (!placed);
        });

        this.lastShotSucceeded = false;
        this.lastShotXY = null;
        this.shotsSinceLastHit = 0;
      }

      attack(event) {
        let targetBlock = this.gameboard.board[this.x][this.y];
        const gameStatusText = document.querySelector('.game-status-text');
        gameStatusText.innerHTML = '';

        this.gameboard.findAndHitShip(this.gameboard, event.target, 'player');

        if (targetBlock === 1) {
          event.target.classList.toggle('red');
        } else {
          targetBlock = 2;
          event.target.classList.toggle('white');
        }

        this.removeEventListener('click', this.gameboard.attack);
      }

      aiAttack() {
        this.removeEventListener('click', this.enemyboard.aiAttack);
        let shotTarget;

        if (this.enemyboard.lastShotSucceeded) {
          shotTarget = this.enemyboard.shootTargetedShot(this);
        } else {
          shotTarget = this.enemyboard.shootRandomShot(this);
        }

        const computerTarget = document.getElementById(`X${shotTarget.x}-Y${shotTarget.y}`);

        if (this.enemyboard.board[shotTarget.x][shotTarget.y] === 1) {
          computerTarget.classList.toggle('red');
          this.enemyboard.lastShotSucceeded = true;
          this.enemyboard.shotsSinceLastHit = 0;
          this.enemyboard.lastShotXY = { x: shotTarget.x, y: shotTarget.y };
          this.enemyboard.findAndHitShip(this.enemyboard, shotTarget, 'Computer');
        } else {
          computerTarget.classList.toggle('white');
          this.enemyboard.shotsSinceLastHit += 1;
          if (this.enemyboard.shotsSinceLastHit >= 4) {
            this.enemyboard.lastShotSucceeded = false;
          }
        }
        this.enemyboard.board[shotTarget.x][shotTarget.y] = 2;
      }

      shootTargetedShot(target) {
        let count = 1;
        let shotTarget = generateCoordinates(target.enemyboard.lastShotXY);
        while (target.enemyboard.board[shotTarget.x][shotTarget.y] === 2 && count < 5) {
          shotTarget = generateCoordinates(target.enemyboard.lastShotXY);
          count += 1;
        }

        if (count === 5) {
          shotTarget = target.enemyboard.shootRandomShot(target);
        }

        return shotTarget;
      }

      shootRandomShot(target) {
        let shotTarget = generateCoordinates();
        while (target.enemyboard.board[shotTarget.x][shotTarget.y] === 2) {
          shotTarget = generateCoordinates();
        }
        return shotTarget;
      }

      findAndHitShip(targetBoard, target, player) {
        for (const ship of targetBoard.ships) {
          for (const position of ship.positions) {
            if (position.x === target.x && position.y === target.y) {
              ship.hit();


              if (ship.sunk) {
                targetBoard.sunkenShips += 1;
              }

              if (isGameOver(targetBoard)) {
                this.displayWinner(player);
                setStatusMessage(player);
              }
              break;
            }
          }
        }
      }

      displayWinner(player) {
        const gameStatusText = document.querySelector('.game-status-text');
        if (player === 'player') {
          gameStatusText.innerHTML = 'You won!';
          return;
        }
        gameStatusText.innerHTML = 'You got your ass kicked by AI';
      }
    }

    module.exports = Gameboard;
    /***/ }),

  /***/ './src/game.js':
  /*! *********************!*\
  !*** ./src/game.js ***!
  \******************** */
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {
    const board = __webpack_require__(/*! ./board */ './src/board.js');

    const initializeBoard = (playerBoard, aiBoard = null) => {
      const boardHolder = document.createElement('div');
      boardHolder.classList.add('board');
      if (aiBoard !== null) {
        boardHolder.classList.add('top-board');
      } else {
        boardHolder.classList.add('bottom-board');
      }
      document.querySelector('main').appendChild(boardHolder);
      for (let x = 0; x < 10; x += 1) {
        for (let y = 0; y < 10; y += 1) {
          const block = document.createElement('div');
          block.classList.add('block');

          if (aiBoard === null) {
            block.id = `X${x}-Y${y}`;
          }


          if (y === 0) {
            block.classList.toggle('first');
          }

          block.x = x;
          block.y = y;

          block.gameboard = playerBoard;
          block.enemyboard = aiBoard;
          if (aiBoard !== null) {
            block.addEventListener('click', aiBoard.aiAttack);
            block.addEventListener('click', playerBoard.attack);
          } else if (playerBoard.board[x][y] === 1) {
            block.classList.toggle('player-ship');
          }
          boardHolder.appendChild(block);
        }
      }
    };

    const setup = () => {
      const playerBoard = new board();
      const aiBoard = new board();


      const gameStatusText = document.createElement('p');
      const gameControlsHolder = document.createElement('div');
      const resetButton = document.createElement('input');
      resetButton.value = 'Reset Game';
      resetButton.addEventListener('click', () => window.location.reload());
      resetButton.type = 'button';
      resetButton.classList.add('reset-btn');
      gameStatusText.classList.add('game-status-text');
      gameControlsHolder.classList.add('game-control-holder');
      gameControlsHolder.classList.add('row');

      document.querySelector('main').appendChild(gameControlsHolder);
      gameControlsHolder.appendChild(gameStatusText);
      gameControlsHolder.appendChild(resetButton);
      initializeBoard(aiBoard, playerBoard);
      initializeBoard(playerBoard);
    };

    module.exports = setup;
    /***/ }),

  /***/ './src/gameOver.js':
  /*! *************************!*\
  !*** ./src/gameOver.js ***!
  \************************ */
  /*! no static exports found */
  /***/ (function (module, exports) {
    const isGameOver = (currentBoard) => currentBoard.sunkenShips === currentBoard.ships.length;

    module.exports = isGameOver;
    /***/ }),

  /***/ './src/generateCoordinates.js':
  /*! ************************************!*\
  !*** ./src/generateCoordinates.js ***!
  \*********************************** */
  /*! no static exports found */
  /***/ (function (module, exports) {
    const generateCoordinates = (lastshot = null) => {
      const coordinates = { x: 0, y: 0 };

      if (lastshot === null) {
        coordinates.x = Math.floor(Math.random() * 10);
        coordinates.y = Math.floor(Math.random() * 10);

        return coordinates;
      }

      while (coordinates.x < 0 || coordinates.x > 9 || coordinates.y < 0 || coordinates.y > 9) {
        switch (Math.floor(Math.random() * 4)) {
          case 0:
            coordinates.x = lastshot.x + 1;
            coordinates.y = lastshot.y;
            break;
          case 1:
            coordinates.x = lastshot.x - 1;
            coordinates.y = lastshot.y;
            break;
          case 2:
            coordinates.x = lastshot.x;
            coordinates.y = lastshot.y + 1;
            break;
          case 3:
            coordinates.x = lastshot.x;
            coordinates.y = lastshot.y - 1;
            break;
        }
      }

      return coordinates;
    };

    module.exports = generateCoordinates;
    /***/ }),

  /***/ './src/index.js':
  /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
  /*! no exports provided */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ const _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/main.scss */ './src/stylesheets/main.scss');
    /* harmony import */ const _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0__);


    const setup = __webpack_require__(/*! ./game */ './src/game.js');

    setup();
    /***/ }),

  /***/ './src/prompts.js':
  /*! ************************!*\
  !*** ./src/prompts.js ***!
  \*********************** */
  /*! no static exports found */
  /***/ (function (module, exports) {
    const setStatusMessage = (player) => {
      const gameStatusDiv = document.querySelector('.game-status-text');
      if (player === 'player') {
        gameStatusDiv.innerHTML = "Congrats you're a sinker of ships, officially!";
      } else {
        gameStatusDiv.innerHTML = 'Computer got you man!';
      }
    };

    module.exports = setStatusMessage;
    /***/ }),

  /***/ './src/ship.js':
  /*! *********************!*\
  !*** ./src/ship.js ***!
  \******************** */
  /*! no static exports found */
  /***/ (function (module, exports) {
    const ship = (name, start, end) => {
      const positions = [];
      let hits = 0;
      let sunk = false;

      if (start.y === end.y) {
        for (let i = start.x; i <= end.x; i += 1) {
          positions.push({ x: i, y: start.y, hit: false });
        }
      } else {
        for (let i = start.y; i <= end.y; i += 1) {
          positions.push({ x: start.x, y: i, hit: false });
        }
      }

      const hit = () => {
        hits += 1;

        if (hits === positions.length) {
          sunk = true;
        }
      };

      return { hit, positions, sunk };
    };

    module.exports = ship;
    /***/ }),

  /***/ './src/stylesheets/main.scss':
  /*! ***********************************!*\
  !*** ./src/stylesheets/main.scss ***!
  \********************************** */
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {
    let content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/main.scss');

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    const options = {};

    options.insert = 'head';
    options.singleton = false;

    const update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js')(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/ }),

/** *** */ }));
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVPdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW5lcmF0ZUNvb3JkaW5hdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvbXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvbWFpbi5zY3NzPzdkYTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2hFQTs7QUFFQSw0Qjs7Ozs7Ozs7Ozs7O0FDREE7QUFDQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBaUM7O0FBRWpDLGNBQWMsbUJBQU8sQ0FBQyw2QkFBUTs7QUFFOUI7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLFlBQVk7QUFDckMsc0JBQXNCLCtCQUErQjtBQUNyRDtBQUNBLEdBQUc7QUFDSCx5QkFBeUIsWUFBWTtBQUNyQyxzQkFBc0IsK0JBQStCO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUEsc0I7Ozs7Ozs7Ozs7O0FDM0JBLGNBQWMsbUJBQU8sQ0FBQyxtTkFBb0c7O0FBRTFIO0FBQ0EsY0FBYyxRQUFTO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNKQUEyRTs7QUFFaEc7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uYmxvY2sge1xcbiAgaGVpZ2h0OiAzdnc7XFxuICB3aWR0aDogM3Z3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgYm9yZGVyOiAwLjF2dyBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi53aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcblxcbi5wbGF5ZXItc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5OyB9XFxuXFxuLnJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IH1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7IH1cXG5cXG4uY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7IH1cXG5cXG5tYWluIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7IH1cXG5cXG4uZ2FtZS1zdGF0dXMtdGV4dCB7XFxuICBib3JkZXI6IC41cHggc29saWQgYmxhY2s7IH1cXG5cXG4ucmVzZXQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG4uYm9hcmQge1xcbiAgd2lkdGg6IDgwdnc7XFxuICBtYXJnaW46IDJlbSAwOyB9XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07IiwiY29uc3Qgc2hpcCA9IHJlcXVpcmUoJy4vc2hpcCcpO1xuY29uc3QgZ2VuZXJhdGVDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4vZ2VuZXJhdGVDb29yZGluYXRlcycpO1xuY29uc3Qgc2V0U3RhdHVzTWVzc2FnZSA9IHJlcXVpcmUoJy4vcHJvbXB0cycpO1xuY29uc3QgaXNHYW1lT3ZlciA9IHJlcXVpcmUoJy4vZ2FtZU92ZXInKTtcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5zdW5rZW5TaGlwcyA9IDA7XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIHRoaXMuYm9hcmQucHVzaChuZXcgQXJyYXkoMTApLmZpbGwoMCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbVBsYWNlbWVudCA9IChzaGlwTGVuZ3RoKSA9PiB7XG4gICAgICBsZXQgeCA9IC01O1xuICAgICAgbGV0IHkgPSAtNTtcbiAgICAgIHdoaWxlICh4ICsgc2hpcExlbmd0aCA8IDAgfHwgeCArIHNoaXBMZW5ndGggPiA5IHx8IHkgKyBzaGlwTGVuZ3RoIDwgMCB8fCB5ICsgc2hpcExlbmd0aCA+IDkpIHtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2hpcERpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgICAgbGV0IG5ld1NoaXA7XG4gICAgICBpZiAoc2hpcERpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBuZXdTaGlwID0gc2hpcChgc2hpcCR7c2hpcExlbmd0aCArIDF9YCwgeyB4LCB5IH0sIHsgeCwgeTogeSArIHNoaXBMZW5ndGggfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdTaGlwID0gc2hpcChgc2hpcCR7c2hpcExlbmd0aCArIDF9YCwgeyB4LCB5IH0sIHsgeDogeCArIHNoaXBMZW5ndGgsIHkgfSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBwb3NpdGlvbmlzVmFsaWQgPSB0cnVlO1xuICAgICAgbmV3U2hpcC5wb3NpdGlvbnMuZm9yRWFjaCgocG9zaXRpb24pID0+IHtcbiAgICAgICAgaWYgKHNlbGYuYm9hcmRbcG9zaXRpb24ueF1bcG9zaXRpb24ueV0gIT09IDApIHtcbiAgICAgICAgICBwb3NpdGlvbmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChwb3NpdGlvbmlzVmFsaWQpIHtcbiAgICAgICAgc2VsZi5zaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICBuZXdTaGlwLnBvc2l0aW9ucy5mb3JFYWNoKChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgIHNlbGYuYm9hcmRbcG9zaXRpb24ueF1bcG9zaXRpb24ueV0gPSAxO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBvc2l0aW9uaXNWYWxpZDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hpcExlbmd0aHMgPSBbNCwgMywgMywgMiwgMV07XG4gICAgc2hpcExlbmd0aHMuZm9yRWFjaCgoc2hpcExlbmd0aCkgPT4ge1xuICAgICAgbGV0IHBsYWNlZDtcbiAgICAgIGRvIHtcbiAgICAgICAgcGxhY2VkID0gcmFuZG9tUGxhY2VtZW50KHNoaXBMZW5ndGgpO1xuICAgICAgfSB3aGlsZSAoIXBsYWNlZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxhc3RTaG90U3VjY2VlZGVkID0gZmFsc2U7XG4gICAgdGhpcy5sYXN0U2hvdFhZID0gbnVsbDtcbiAgICB0aGlzLnNob3RzU2luY2VMYXN0SGl0ID0gMDtcbiAgfVxuXG4gIGF0dGFjayhldmVudCkge1xuICAgIGxldCB0YXJnZXRCbG9jayA9IHRoaXMuZ2FtZWJvYXJkLmJvYXJkW3RoaXMueF1bdGhpcy55XTtcbiAgICBjb25zdCBnYW1lU3RhdHVzVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXN0YXR1cy10ZXh0Jyk7XG4gICAgZ2FtZVN0YXR1c1RleHQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICB0aGlzLmdhbWVib2FyZC5maW5kQW5kSGl0U2hpcCh0aGlzLmdhbWVib2FyZCwgZXZlbnQudGFyZ2V0LCAncGxheWVyJyk7XG5cbiAgICBpZiAodGFyZ2V0QmxvY2sgPT09IDEpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdyZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0QmxvY2sgPSAyO1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3doaXRlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ2FtZWJvYXJkLmF0dGFjayk7XG4gIH1cblxuICBhaUF0dGFjaygpIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5lbmVteWJvYXJkLmFpQXR0YWNrKTtcbiAgICBsZXQgc2hvdFRhcmdldDtcblxuICAgIGlmICh0aGlzLmVuZW15Ym9hcmQubGFzdFNob3RTdWNjZWVkZWQpIHtcbiAgICAgIHNob3RUYXJnZXQgPSB0aGlzLmVuZW15Ym9hcmQuc2hvb3RUYXJnZXRlZFNob3QodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3RUYXJnZXQgPSB0aGlzLmVuZW15Ym9hcmQuc2hvb3RSYW5kb21TaG90KHRoaXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXB1dGVyVGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFgke3Nob3RUYXJnZXQueH0tWSR7c2hvdFRhcmdldC55fWApO1xuXG4gICAgaWYgKHRoaXMuZW5lbXlib2FyZC5ib2FyZFtzaG90VGFyZ2V0LnhdW3Nob3RUYXJnZXQueV0gPT09IDEpIHtcbiAgICAgIGNvbXB1dGVyVGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3JlZCcpO1xuICAgICAgdGhpcy5lbmVteWJvYXJkLmxhc3RTaG90U3VjY2VlZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZW5lbXlib2FyZC5zaG90c1NpbmNlTGFzdEhpdCA9IDA7XG4gICAgICB0aGlzLmVuZW15Ym9hcmQubGFzdFNob3RYWSA9IHsgeDogc2hvdFRhcmdldC54LCB5OiBzaG90VGFyZ2V0LnkgfTtcbiAgICAgIHRoaXMuZW5lbXlib2FyZC5maW5kQW5kSGl0U2hpcCh0aGlzLmVuZW15Ym9hcmQsIHNob3RUYXJnZXQsICdDb21wdXRlcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wdXRlclRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCd3aGl0ZScpO1xuICAgICAgdGhpcy5lbmVteWJvYXJkLnNob3RzU2luY2VMYXN0SGl0ICs9IDE7XG4gICAgICBpZiAodGhpcy5lbmVteWJvYXJkLnNob3RzU2luY2VMYXN0SGl0ID49IDQpIHtcbiAgICAgICAgdGhpcy5lbmVteWJvYXJkLmxhc3RTaG90U3VjY2VlZGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZW5lbXlib2FyZC5ib2FyZFtzaG90VGFyZ2V0LnhdW3Nob3RUYXJnZXQueV0gPSAyO1xuICB9XG5cbiAgc2hvb3RUYXJnZXRlZFNob3QodGFyZ2V0KSB7XG4gICAgbGV0IGNvdW50ID0gMTtcbiAgICBsZXQgc2hvdFRhcmdldCA9IGdlbmVyYXRlQ29vcmRpbmF0ZXModGFyZ2V0LmVuZW15Ym9hcmQubGFzdFNob3RYWSk7XG4gICAgd2hpbGUgKHRhcmdldC5lbmVteWJvYXJkLmJvYXJkW3Nob3RUYXJnZXQueF1bc2hvdFRhcmdldC55XSA9PT0gMiAmJiBjb3VudCA8IDUpIHtcbiAgICAgIHNob3RUYXJnZXQgPSBnZW5lcmF0ZUNvb3JkaW5hdGVzKHRhcmdldC5lbmVteWJvYXJkLmxhc3RTaG90WFkpO1xuICAgICAgY291bnQgKz0gMTtcbiAgICB9XG5cbiAgICBpZiAoY291bnQgPT09IDUpIHtcbiAgICAgIHNob3RUYXJnZXQgPSB0YXJnZXQuZW5lbXlib2FyZC5zaG9vdFJhbmRvbVNob3QodGFyZ2V0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hvdFRhcmdldDtcbiAgfVxuXG4gIHNob290UmFuZG9tU2hvdCh0YXJnZXQpIHtcbiAgICBsZXQgc2hvdFRhcmdldCA9IGdlbmVyYXRlQ29vcmRpbmF0ZXMoKTtcbiAgICB3aGlsZSAodGFyZ2V0LmVuZW15Ym9hcmQuYm9hcmRbc2hvdFRhcmdldC54XVtzaG90VGFyZ2V0LnldID09PSAyKSB7XG4gICAgICBzaG90VGFyZ2V0ID0gZ2VuZXJhdGVDb29yZGluYXRlcygpO1xuICAgIH1cbiAgICByZXR1cm4gc2hvdFRhcmdldDtcbiAgfVxuXG4gIGZpbmRBbmRIaXRTaGlwKHRhcmdldEJvYXJkLCB0YXJnZXQsIHBsYXllcikge1xuICAgIGZvciAoY29uc3Qgc2hpcCBvZiB0YXJnZXRCb2FyZC5zaGlwcykge1xuICAgICAgZm9yIChjb25zdCBwb3NpdGlvbiBvZiBzaGlwLnBvc2l0aW9ucykge1xuICAgICAgICBpZiAocG9zaXRpb24ueCA9PT0gdGFyZ2V0LnggJiYgcG9zaXRpb24ueSA9PT0gdGFyZ2V0LnkpIHtcbiAgICAgICAgICBzaGlwLmhpdCgpO1xuXG5cbiAgICAgICAgICBpZiAoc2hpcC5zdW5rKSB7XG4gICAgICAgICAgICB0YXJnZXRCb2FyZC5zdW5rZW5TaGlwcyArPSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc0dhbWVPdmVyKHRhcmdldEJvYXJkKSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5V2lubmVyKHBsYXllcik7XG4gICAgICAgICAgICBzZXRTdGF0dXNNZXNzYWdlKHBsYXllcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheVdpbm5lcihwbGF5ZXIpIHtcbiAgICBjb25zdCBnYW1lU3RhdHVzVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXN0YXR1cy10ZXh0Jyk7XG4gICAgaWYgKHBsYXllciA9PT0gJ3BsYXllcicpIHtcbiAgICAgIGdhbWVTdGF0dXNUZXh0LmlubmVySFRNTCA9ICdZb3Ugd29uISc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdhbWVTdGF0dXNUZXh0LmlubmVySFRNTCA9ICdZb3UgZ290IHlvdXIgYXNzIGtpY2tlZCBieSBBSSc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7IiwiY29uc3QgYm9hcmQgPSByZXF1aXJlKCcuL2JvYXJkJyk7XG5cbmNvbnN0IGluaXRpYWxpemVCb2FyZCA9IChwbGF5ZXJCb2FyZCwgYWlCb2FyZCA9IG51bGwpID0+IHtcbiAgY29uc3QgYm9hcmRIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9hcmRIb2xkZXIuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcbiAgaWYgKGFpQm9hcmQgIT09IG51bGwpIHtcbiAgICBib2FyZEhvbGRlci5jbGFzc0xpc3QuYWRkKCd0b3AtYm9hcmQnKTtcbiAgfSBlbHNlIHtcbiAgICBib2FyZEhvbGRlci5jbGFzc0xpc3QuYWRkKCdib3R0b20tYm9hcmQnKTtcbiAgfVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuYXBwZW5kQ2hpbGQoYm9hcmRIb2xkZXIpO1xuICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4ICs9IDEpIHtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5ICs9IDEpIHtcbiAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBibG9jay5jbGFzc0xpc3QuYWRkKCdibG9jaycpO1xuXG4gICAgICBpZiAoYWlCb2FyZCA9PT0gbnVsbCkge1xuICAgICAgICBibG9jay5pZCA9IGBYJHt4fS1ZJHt5fWA7XG4gICAgICB9XG5cblxuICAgICAgaWYgKHkgPT09IDApIHtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnZmlyc3QnKTtcbiAgICAgIH1cblxuICAgICAgYmxvY2sueCA9IHg7XG4gICAgICBibG9jay55ID0geTtcblxuICAgICAgYmxvY2suZ2FtZWJvYXJkID0gcGxheWVyQm9hcmQ7XG4gICAgICBibG9jay5lbmVteWJvYXJkID0gYWlCb2FyZDtcbiAgICAgIGlmIChhaUJvYXJkICE9PSBudWxsKSB7XG4gICAgICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWlCb2FyZC5haUF0dGFjayk7XG4gICAgICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheWVyQm9hcmQuYXR0YWNrKTtcbiAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuYm9hcmRbeF1beV0gPT09IDEpIHtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgncGxheWVyLXNoaXAnKTtcbiAgICAgIH1cbiAgICAgIGJvYXJkSG9sZGVyLmFwcGVuZENoaWxkKGJsb2NrKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHNldHVwID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IG5ldyBib2FyZCgpO1xuICBjb25zdCBhaUJvYXJkID0gbmV3IGJvYXJkKCk7XG5cblxuICBjb25zdCBnYW1lU3RhdHVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgZ2FtZUNvbnRyb2xzSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcmVzZXRCdXR0b24udmFsdWUgPSAnUmVzZXQgR2FtZSc7XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgcmVzZXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZXNldC1idG4nKTtcbiAgZ2FtZVN0YXR1c1RleHQuY2xhc3NMaXN0LmFkZCgnZ2FtZS1zdGF0dXMtdGV4dCcpO1xuICBnYW1lQ29udHJvbHNIb2xkZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZS1jb250cm9sLWhvbGRlcicpO1xuICBnYW1lQ29udHJvbHNIb2xkZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZENoaWxkKGdhbWVDb250cm9sc0hvbGRlcik7XG4gIGdhbWVDb250cm9sc0hvbGRlci5hcHBlbmRDaGlsZChnYW1lU3RhdHVzVGV4dCk7XG4gIGdhbWVDb250cm9sc0hvbGRlci5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG4gIGluaXRpYWxpemVCb2FyZChhaUJvYXJkLCBwbGF5ZXJCb2FyZCk7XG4gIGluaXRpYWxpemVCb2FyZChwbGF5ZXJCb2FyZCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xuIiwiY29uc3QgaXNHYW1lT3ZlciA9IChjdXJyZW50Qm9hcmQpID0+IGN1cnJlbnRCb2FyZC5zdW5rZW5TaGlwcyA9PT0gY3VycmVudEJvYXJkLnNoaXBzLmxlbmd0aDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0dhbWVPdmVyOyIsIlxuY29uc3QgZ2VuZXJhdGVDb29yZGluYXRlcyA9IChsYXN0c2hvdCA9IG51bGwpID0+IHtcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSB7IHg6IDAsIHk6IDAgfTtcblxuICBpZiAobGFzdHNob3QgPT09IG51bGwpIHtcbiAgICBjb29yZGluYXRlcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvb3JkaW5hdGVzLnkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH1cblxuICB3aGlsZSAoY29vcmRpbmF0ZXMueCA8IDAgfHwgY29vcmRpbmF0ZXMueCA+IDkgfHwgY29vcmRpbmF0ZXMueSA8IDAgfHwgY29vcmRpbmF0ZXMueSA+IDkpIHtcbiAgICBzd2l0Y2ggKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGNvb3JkaW5hdGVzLnggPSBsYXN0c2hvdC54ICsgMTtcbiAgICAgICAgY29vcmRpbmF0ZXMueSA9IGxhc3RzaG90Lnk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBjb29yZGluYXRlcy54ID0gbGFzdHNob3QueCAtIDE7XG4gICAgICAgIGNvb3JkaW5hdGVzLnkgPSBsYXN0c2hvdC55O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgY29vcmRpbmF0ZXMueCA9IGxhc3RzaG90Lng7XG4gICAgICAgIGNvb3JkaW5hdGVzLnkgPSBsYXN0c2hvdC55ICsgMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGNvb3JkaW5hdGVzLnggPSBsYXN0c2hvdC54O1xuICAgICAgICBjb29yZGluYXRlcy55ID0gbGFzdHNob3QueSAtIDE7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb29yZGluYXRlcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGVDb29yZGluYXRlcztcbiIsImltcG9ydCAnLi9zdHlsZXNoZWV0cy9tYWluLnNjc3MnO1xuXG5jb25zdCBzZXR1cCA9IHJlcXVpcmUoJy4vZ2FtZScpO1xuXG5zZXR1cCgpO1xuIiwiY29uc3Qgc2V0U3RhdHVzTWVzc2FnZSA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3QgZ2FtZVN0YXR1c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXN0YXR1cy10ZXh0Jyk7XG4gIGlmIChwbGF5ZXIgPT09ICdwbGF5ZXInKSB7XG4gICAgZ2FtZVN0YXR1c0Rpdi5pbm5lckhUTUwgPSBcIkNvbmdyYXRzIHlvdSdyZSBhIHNpbmtlciBvZiBzaGlwcywgb2ZmaWNpYWxseSFcIjtcbiAgfSBlbHNlIHtcbiAgICBnYW1lU3RhdHVzRGl2LmlubmVySFRNTCA9ICdDb21wdXRlciBnb3QgeW91IG1hbiEnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFN0YXR1c01lc3NhZ2U7XG4iLCJcbmNvbnN0IHNoaXAgPSAobmFtZSwgc3RhcnQsIGVuZCkgPT4ge1xuICBjb25zdCBwb3NpdGlvbnMgPSBbXTtcbiAgbGV0IGhpdHMgPSAwO1xuICBsZXQgc3VuayA9IGZhbHNlO1xuXG4gIGlmIChzdGFydC55ID09PSBlbmQueSkge1xuICAgIGZvciAobGV0IGkgPSBzdGFydC54OyBpIDw9IGVuZC54OyBpICs9IDEpIHtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHsgeDogaSwgeTogc3RhcnQueSwgaGl0OiBmYWxzZSB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0Lnk7IGkgPD0gZW5kLnk7IGkgKz0gMSkge1xuICAgICAgcG9zaXRpb25zLnB1c2goeyB4OiBzdGFydC54LCB5OiBpLCBoaXQ6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRzICs9IDE7XG5cbiAgICBpZiAoaGl0cyA9PT0gcG9zaXRpb25zLmxlbmd0aCkge1xuICAgICAgc3VuayA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGhpdCwgcG9zaXRpb25zLCBzdW5rIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaXA7IiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==