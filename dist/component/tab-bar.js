/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(92)
	var __weex_template__ = __webpack_require__(96)
	var __weex_style__ = __webpack_require__(97)
	var __weex_script__ = __webpack_require__(98)

	__weex_define__('@weex-component/3e657950cc961d4713883de1a51eadc9', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/3e657950cc961d4713883de1a51eadc9',undefined,undefined)

/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(93)
	var __weex_style__ = __webpack_require__(94)
	var __weex_script__ = __webpack_require__(95)

	__weex_define__('@weex-component/tab-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },

/***/ 93:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "tab-item-container"
	  ],
	  "events": {
	    "click": "onclickitem"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "tab-icon"
	      ],
	      "attr": {
	        "src": function () {return this.icon}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "tab-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },

/***/ 94:
/***/ function(module, exports) {

	module.exports = {
	  "tab-item-container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "tab-icon": {
	    "width": 43,
	    "height": 43
	  },
	  "tab-text": {
	    "fontSize": 20,
	    "marginTop": 4
	  }
	}

/***/ },

/***/ 95:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        index: 0,
	        title: '',
	        titleColor: '',
	        icon: ''
	    }},
	    methods: {
	        onclickitem: function onclickitem(e) {
	            var vm = this;

	            var params = {
	                index: vm.index
	            };
	            this.$dispatch("tabItem.OnClick", params);
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 96:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wraper"
	  ],
	  "children": [
	    {
	      "type": "embed",
	      "classList": [
	        "content"
	      ],
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      },
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "shown": function () {return this.showTabBar}
	    },
	    {
	      "type": "embed",
	      "classList": [
	        "content-no-tabbar"
	      ],
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      },
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "shown": function () {return !this.showTabBar}
	    },
	    {
	      "type": "div",
	      "classList": [
	        "tab-bar-container"
	      ],
	      "shown": function () {return this.showTabBar},
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "tab-line"
	          ],
	          "shown": function () {return this.lineVisibilty}
	        },
	        {
	          "type": "div",
	          "classList": [
	            "tab-bar"
	          ],
	          "children": [
	            {
	              "type": "tab-item",
	              "repeat": function () {return this.tabItems},
	              "attr": {
	                "title": function () {return this.title},
	                "index": function () {return this.index},
	                "titleColor": function () {return this.titleColor},
	                "icon": function () {return this.icon}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 97:
/***/ function(module, exports) {

	module.exports = {
	  "wraper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 101
	  },
	  "content-no-tabbar": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "tab-bar-container": {
	    "position": "absolute",
	    "bottom": 0,
	    "height": 101
	  },
	  "tab-line": {
	    "width": 750,
	    "height": 1,
	    "backgroundColor": "#808080"
	  },
	  "tab-bar": {
	    "flexDirection": "row",
	    "width": 750,
	    "height": 100,
	    "backgroundColor": "#f7f7f7"
	  }
	}

/***/ },

/***/ 98:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        tabItems: [],
	        selectIndex: 0,
	        lineVisibilty: true,
	        selectedColor: '#00cfc7',
	        unselectedColor: '#888888',
	        showTabBar: true
	    }},
	    created: function created() {
	        this.selected(this.selectIndex);
	        this.$on("tabItem.OnClick", function (e) {
	            var detail = e.detail;
	            this.selectIndex = detail.index;
	            this.selected(this.selectIndex);
	            var params = {
	                index: detail.index
	            };
	            this.$dispatch('tabBar.onClick', params);
	        });
	    },
	    methods: {
	        selected: function selected(index) {
	            for (var i = 0; i < this.tabItems.length; i++) {
	                var tabItem = this.tabItems[i];
	                if (i == index) {
	                    tabItem.icon = tabItem.selectedImage;
	                    tabItem.titleColor = this.selectedColor;
	                    tabItem.visibility = 'visible';
	                } else {
	                    tabItem.icon = tabItem.image;
	                    tabItem.titleColor = this.unselectedColor;
	                    tabItem.visibility = 'hidden';
	                }
	            }
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });