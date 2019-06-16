global.webpackJsonp([1],{

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_wxService__ = __webpack_require__(50);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */];

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.mixin({
  data: function data() {
    return {
      service: '',
      router: '/',
      imgSrc: '/'
    };
  },

  methods: {
    newroot: function newroot() {
      //
      return this.$root.$mp;
    },
    navigatePageTo: function navigatePageTo(url) {
      wx.navigateTo({ url: url });
    },
    reLaunchPageTo: function reLaunchPageTo(url) {
      wx.reLaunch({ url: url });
    },
    setStorageSync: function setStorageSync(name, data) {
      wx.setStorageSync(name, data);
    },
    getStorageSync: function getStorageSync(name) {
      return wx.getStorageSync(name);
    }
  },
  created: function created() {
    // console.log('wx')
    this.service = __WEBPACK_IMPORTED_MODULE_3__api_wxService__["a" /* default */];
  }
});

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'mpvue demo',
      navigationBarTextStyle: 'black'
    }
  }
});

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(46);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(45)
}
var normalizeComponent = __webpack_require__(6)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b93398f", Component.options)
  } else {
    hotAPI.reload("data-v-0b93398f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_test__ = __webpack_require__(47);



/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    // 调用API从本地缓存中获取数据
    var logs = this.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    this.setStorageSync('logs', logs);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_test__["a" /* default */])('Kaiser');
  }
});

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function greeter(person) {
    console.log("Hello " + person);
}
/* harmony default export */ __webpack_exports__["a"] = (greeter);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(49);


// import * as getters from './getters.js'

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/** 状态定义 */

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: {
    count: 0
  },
  mutations: {
    increment: function increment(state) {
      var obj = state;
      obj.count += 1;
    },
    decrement: function decrement(state) {
      var obj = state;
      obj.count -= 1;
    }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);




/* harmony default export */ __webpack_exports__["a"] = ({
  getUserInfo: function getUserInfo() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
      var data;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                wx.login({
                  success: function success() {
                    wx.getUserInfo({
                      success: resolve,
                      fail: reject
                    });
                  }
                });
              });

            case 2:
              data = _context.sent;
              return _context.abrupt('return', data);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  httpRequest: function httpRequest() {
    var _this2 = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var $options, data;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              $options = options;
              _context2.next = 3;
              return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                switch (options.type) {
                  case 0:
                    $options.url = 'https://stocks.liangplus.com' + $options.url.split('/liang')[1];
                    break;
                  case 1:
                    $options.url = 'http://www.liangplus.com' + $options.url.split('/api')[1];
                    break;
                  default:
                    break;
                }
                wx.request({
                  url: $options.url,
                  data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, $options.data),
                  method: $options.methods || 'GET',
                  header: {
                    'Content-Type': 'application/json'
                  },
                  success: resolve,
                  fail: reject
                });
              });

            case 3:
              data = _context2.sent;
              return _context2.abrupt('return', data);

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  }
});

/***/ })

},[42]);
//# sourceMappingURL=app.js.map