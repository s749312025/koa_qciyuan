require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

var mysql = __webpack_require__(18);

var pool = mysql.createPool({
    host: '23.105.202.137',
    user: 'koa_test',
    password: 's88557339',
    database: 'koa_test'
});

var query = function query(sql, values) {
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            } else {
                connection.query(sql, values, function (err, rows) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                    connection.release();
                });
            }
        });
    });
};

module.exports = {
    query: query
};

/***/ },
/* 2 */
/***/ function(module, exports) {

var dateFormat = function dateFormat(date, fmt) {
    // author: meizz
    var o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
    }
    return fmt;
};

module.exports = {
    dateFormat: dateFormat
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var initTable = __webpack_require__(14);
var schedule = __webpack_require__(19);

var _require = __webpack_require__(13),
    feed = _require.feed,
    api = _require.api;

var _require2 = __webpack_require__(1),
    query = _require2.query;

var rule = new schedule.RecurrenceRule();
rule.minute = 40;

var feedTime = function feedTime() {
    // const j = schedule.scheduleJob(rule, () => {
    schedule.scheduleJob(rule, function () {
        feed();
        api();
    });
};
var init = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log('初始化表开始');
                        _context.next = 3;
                        return initTable();

                    case 3:
                        console.log('初始化表结束');
                        console.log('feed开始');
                        feed();
                        console.log('feed结束');
                        console.log('api开始');
                        api();
                        console.log('api结束');
                        feedTime();

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function init() {
        return _ref.apply(this, arguments);
    };
}();
init();

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'starter',
        meta: [{
            charset: 'utf-8'
        }, {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        }, {
            hid: 'description',
            name: 'description',
            content: 'Nuxt.js project'
        }],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },
    /*
     ** Global CSS
     */
    css: ['~assets/css/main.css', { src: '~assets/styles/scss/index.scss', lang: 'scss' }],
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#3B8070'
    },
    /*
     ** Build configuration
     */
    // modules: [
    //     '@nuxtjs/axios'
    // ],
    build: {
        vendor: ['axios'],
        /*
         ** Run ESLINT on save
         */
        extend: function extend(config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
        }
    }
};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mysql_query_index__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_plugins_api_js__ = __webpack_require__(9);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var router = __webpack_require__(17)();

var pixiv = [];
var pixivTime = new Date().getTime();
var music = [];
var musicTime = new Date().getTime();

router.post('/ceshi', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
        return __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        ctx.body = {
                            name: 'Q次元'
                        };

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

router.post('/api/info', function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
        var info;
        return __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__mysql_query_index__["a" /* searchArticel */])();

                    case 2:
                        info = _context2.sent;

                        ctx.body = {
                            info: info
                        };

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, _this);
    }));

    return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}());

router.post('/api/pixiv', function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
        var now, _ref5, image;

        return __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        now = new Date().getTime();

                        if (!(pixiv.length > 0)) {
                            _context3.next = 5;
                            break;
                        }

                        if (now - pixivTime > 12 * 60 * 60 * 1000) {
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__client_plugins_api_js__["a" /* default */])('https://cloud.mokeyjay.com/pixiv/pixiv.json', {}, 'get').then(function (_ref4) {
                                var image = _ref4.image;

                                pixiv = image;
                                pixivTime = new Date().getTime();
                            });
                        }
                        ctx.body = {
                            image: pixiv
                        };
                        return _context3.abrupt('return');

                    case 5:
                        _context3.next = 7;
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__client_plugins_api_js__["a" /* default */])('https://cloud.mokeyjay.com/pixiv/pixiv.json', {}, 'get');

                    case 7:
                        _ref5 = _context3.sent;
                        image = _ref5.image;

                        pixiv = image;
                        pixivTime = new Date().getTime();
                        ctx.body = {
                            image: image
                        };

                    case 12:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, _this);
    }));

    return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}());

router.post('/api/music', function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
        var now, _ref8, playlist;

        return __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        now = new Date().getTime();

                        console.log(music.length, now - musicTime > 12 * 60 * 60 * 1000);

                        if (!(music.length > 0)) {
                            _context4.next = 6;
                            break;
                        }

                        if (now - musicTime > 12 * 60 * 60 * 1000) {
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__client_plugins_api_js__["a" /* default */])('https://api.imjad.cn/cloudmusic/?type=playlist&id=71385702', {}, 'get').then(function (_ref7) {
                                var playlist = _ref7.playlist;

                                music = playlist.tracks;
                                musicTime = new Date().getTime();
                            });
                        }
                        ctx.body = {
                            playlist: music
                        };
                        return _context4.abrupt('return');

                    case 6:
                        _context4.next = 8;
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__client_plugins_api_js__["a" /* default */])('https://api.imjad.cn/cloudmusic/?type=playlist&id=71385702', {}, 'get');

                    case 8:
                        _ref8 = _context4.sent;
                        playlist = _ref8.playlist;

                        music = playlist.tracks;
                        musicTime = new Date().getTime();
                        ctx.body = {
                            playlist: music
                        };

                    case 13:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, _this);
    }));

    return function (_x7, _x8) {
        return _ref6.apply(this, arguments);
    };
}());

module.exports = router;

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("koa-server-http-proxy");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qs__);
/* unused harmony export fetch */


// axios 配置
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.timeout = 100000;
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.baseURL = 'http://localhost:3000';
// gank.io  科技资讯 https://gank.io/api/xiandu/data/id/qdaily/count/10/page/1

// POST传参序列化
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.interceptors.request.use(function (config) {
    if (config.method === 'post') {
        config.data = __WEBPACK_IMPORTED_MODULE_1_qs___default.a.stringify(config.data);
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
// 返回状态判断
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.interceptors.response.use(function (res) {
    if (res.status === 200) {
        return res;
    } else {
        return Promise.reject(res);
    }
}, function (error) {
    return Promise.reject(error);
});

function fetch(url) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var methods = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'post';

    return new Promise(function (resolve, reject) {
        console.time(url);
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a[methods](url, params).then(function (res) {
            console.timeEnd(url);
            resolve(res.data);
        }).catch(function (error) {
            reject(error);
        });
    });
}

/* harmony default export */ exports["a"] = fetch;
// export default {
//     /**
//      * 获取广告信息
//      */
//     getAds(params) {
//         return fetch('/api/ad/queryADs', params)
//     },
//     getAreas(params) {
//         return fetch('/api/area/getAll', params)
//     }
// }

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_db__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_db___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__util_db__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return searchArticel; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// const {query} = require('../util/db')


// articel

var searchArticel = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
        var sql, a;
        return __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        sql = 'select * from `article` order by `pubDate` desc limit 10';
                        _context.next = 3;
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_db__["query"])(sql);

                    case 3:
                        a = _context.sent;
                        return _context.abrupt('return', a);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function searchArticel() {
        return _ref.apply(this, arguments);
    };
}();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var rp = __webpack_require__(22);

var _require = __webpack_require__(1),
    query = _require.query;

var _require2 = __webpack_require__(2),
    dateFormat = _require2.dateFormat;

// 过滤重复的数据


var removeSameData = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(items, params) {
        var sql, newest, filterItems;
        return __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        sql = "SELECT `pubDate` FROM `koa_test`.`article` WHERE `siteName` = '" + params.siteName + "' ORDER BY `pubDate` DESC LIMIT 1";
                        _context.next = 3;
                        return query(sql);

                    case 3:
                        newest = _context.sent;

                        if (!(newest.length === 0)) {
                            _context.next = 7;
                            break;
                        }

                        console.log(params.siteName + ': 所有的');
                        return _context.abrupt('return', items);

                    case 7:
                        filterItems = [];

                        items.forEach(function (item, index) {
                            if (new Date(item.published_at).getTime() > new Date(newest[0].pubDate).getTime()) {
                                filterItems.push(item);
                            }
                        });
                        console.log(params.siteName + ': ' + filterItems.length);
                        return _context.abrupt('return', filterItems);

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function removeSameData(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var apiInsert = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var url, options, data, params, nextData;
        return __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        url = 'https://gank.io/api/xiandu/data/id/ifanr/count/10/page/1';
                        options = {
                            method: 'GET',
                            url: url,
                            json: true,
                            headers: {
                                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
                                Cookie: ''
                            }
                        };
                        _context3.next = 4;
                        return rp(options);

                    case 4:
                        data = _context3.sent;
                        params = {
                            siteName: '爱范儿(ifanr)',
                            icon: 'http://ww3.sinaimg.cn/large/0066P23Wjw1f9rylijz6rj3030030gle.jpg'
                        };
                        _context3.next = 8;
                        return removeSameData(data.results, params);

                    case 8:
                        nextData = _context3.sent;

                        if (!(nextData.length === 0)) {
                            _context3.next = 11;
                            break;
                        }

                        return _context3.abrupt('return');

                    case 11:
                        nextData.forEach(function () {
                            var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(item) {
                                var sql, defaultData, data, val;
                                return __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                                    while (1) {
                                        switch (_context2.prev = _context2.next) {
                                            case 0:
                                                sql = 'insert into article set title=?, link=?, pubDate=?, content=?, icon=?, siteName=?';
                                                defaultData = {
                                                    title: item.title,
                                                    link: item.url,
                                                    pubDate: dateFormat(new Date(item.published_at), 'yyyy-MM-dd hh:mm:ss'),
                                                    content: item.content,
                                                    icon: params.icon,
                                                    siteName: params.siteName
                                                };
                                                data = Object.assign({}, defaultData, params);
                                                val = [data.title, data.link, data.pubDate, data.content, data.icon, data.siteName];
                                                _context2.next = 6;
                                                return query(sql, val);

                                            case 6:
                                            case 'end':
                                                return _context2.stop();
                                        }
                                    }
                                }, _callee2, _this);
                            }));

                            return function (_x3) {
                                return _ref3.apply(this, arguments);
                            };
                        }());

                    case 12:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, _this);
    }));

    return function apiInsert() {
        return _ref2.apply(this, arguments);
    };
}();

module.exports = apiInsert;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Parser = __webpack_require__(23);
var parser = new Parser();

var _require = __webpack_require__(1),
    query = _require.query;

var _require2 = __webpack_require__(2),
    dateFormat = _require2.dateFormat;

// 过滤重复的数据


var removeSameData = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(items, params) {
        var sql, newest, filterItems;
        return __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        sql = "SELECT `pubDate` FROM `koa_test`.`article` WHERE `siteName` = '" + params.siteName + "' ORDER BY `pubDate` DESC LIMIT 1";
                        _context.next = 3;
                        return query(sql);

                    case 3:
                        newest = _context.sent;

                        if (!(newest.length === 0)) {
                            _context.next = 6;
                            break;
                        }

                        return _context.abrupt('return', items);

                    case 6:
                        filterItems = [];

                        items.forEach(function (item, index) {
                            if (new Date(item.pubDate).getTime() > new Date(newest[0].pubDate).getTime()) {
                                filterItems.push(item);
                            }
                        });
                        console.log(params.siteName + ': ' + filterItems.length);
                        return _context.abrupt('return', filterItems);

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function removeSameData(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var feedInsert = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(url, params) {
        var feed, newItems;
        return __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return parser.parseURL(url);

                    case 2:
                        feed = _context3.sent;
                        _context3.next = 5;
                        return removeSameData(feed.items, params);

                    case 5:
                        newItems = _context3.sent;

                        if (!(newItems.length === 0)) {
                            _context3.next = 8;
                            break;
                        }

                        return _context3.abrupt('return');

                    case 8:
                        console.log(newItems);
                        newItems.forEach(function () {
                            var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(item) {
                                var sql, defaultData, data, val;
                                return __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                                    while (1) {
                                        switch (_context2.prev = _context2.next) {
                                            case 0:
                                                sql = 'insert into article set title=?, link=?, pubDate=?, content=?, icon=?, siteName=?';
                                                defaultData = {
                                                    title: item.title,
                                                    link: item.link,
                                                    pubDate: dateFormat(new Date(item.pubDate), 'yyyy-MM-dd hh:mm:ss'),
                                                    content: item['content:encoded'],
                                                    icon: 'http://ww1.sinaimg.cn/large/eb8c259egy1fvo4776ulbj200g00g0jv.jpg',
                                                    siteName: 'ACG'
                                                };
                                                data = Object.assign({}, defaultData, params);
                                                val = [data.title, data.link, data.pubDate, data.content, data.icon, data.siteName];
                                                _context2.next = 6;
                                                return query(sql, val);

                                            case 6:
                                            case 'end':
                                                return _context2.stop();
                                        }
                                    }
                                }, _callee2, _this);
                            }));

                            return function (_x5) {
                                return _ref3.apply(this, arguments);
                            };
                        }());

                    case 10:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, _this);
    }));

    return function feedInsert(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var sites = [{
    url: 'https://www.acgdoge.net/feed',
    params: {
        icon: 'http://ww1.sinaimg.cn/large/eb8c259egy1fvntn17g41j201c01c745.jpg',
        siteName: 'ACGdoge'
    }
}, {
    url: 'http://www.c3acg.com/feed',
    params: {
        icon: 'http://ww1.sinaimg.cn/large/eb8c259egy1fvo57zkof1j201c01ct8k.jpg',
        siteName: 'C3acg'
    }
},
// {
//     url: 'http://acg17.com/feed/?s=2',
//     params: {
//         icon: 'http://ww1.sinaimg.cn/large/eb8c259egy1fw05293xhmj203c037jr7.jpg',
//         siteName: 'ACG17'
//     }
// },
{
    url: 'http://likeacg.com/?feed=rss2',
    params: {
        icon: 'http://ww1.sinaimg.cn/large/eb8c259egy1fvo4ykzo8nj200g00g04k.jpg',
        siteName: 'likeACG'
    }
}];

var allInsert = function allInsert() {
    sites.forEach(function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(item) {
            return __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            console.log(item.params.siteName + '开始');
                            _context4.next = 3;
                            return feedInsert(item.url, item.params);

                        case 3:
                            console.log(item.params.siteName + '结束');

                        case 4:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, _this);
        }));

        return function (_x6) {
            return _ref4.apply(this, arguments);
        };
    }());
};

module.exports = allInsert;

// const search = async () => {
//     let sql = 'select * from `article` order by `pubDate` desc'
//     let a = await query(sql)
//     console.log(a)
// }

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

var allInsert = __webpack_require__(12);
var apiInsert = __webpack_require__(11);

var feed = function feed() {
    allInsert();
};
var api = function api() {
    apiInsert();
};

module.exports = {
    feed: feed,
    api: api
};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fs = __webpack_require__(16);

var _require = __webpack_require__(1),
    query = _require.query;

// 获取所有sql文件夹下的初始化表


function getAllSql() {
    var sqlContentMap = {};
    var basePath = __dirname;
    var pathArr = basePath.split('/');
    pathArr = pathArr.splice(0, pathArr.length - 1);
    basePath = pathArr.join('/') + '/sql/';

    var files = fs.readdirSync(basePath);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            sqlContentMap[item] = fs.readFileSync(basePath + item, 'utf8');
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return sqlContentMap;
}

// 初始化表

var initTable = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
        var allSql, sql;
        return __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        allSql = getAllSql();
                        _context.t0 = __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.keys(allSql);

                    case 2:
                        if ((_context.t1 = _context.t0()).done) {
                            _context.next = 8;
                            break;
                        }

                        sql = _context.t1.value;
                        _context.next = 6;
                        return query(allSql[sql], []);

                    case 6:
                        _context.next = 2;
                        break;

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function initTable() {
        return _ref.apply(this, arguments);
    };
}();

module.exports = initTable;
/* WEBPACK VAR INJECTION */}.call(exports, "mysql/util"))

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("axios");

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("mysql");

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("node-schedule");

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("qs");

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = require("request-promise");

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("rss-parser");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_server_http_proxy__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_server_http_proxy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_server_http_proxy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nuxt__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mysql_index__ = __webpack_require__(3);


var start = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
        var app, host, port, config, nuxt, builder, router;
        return __WEBPACK_IMPORTED_MODULE_0__Users_double_nuxt_project_koa_qciyan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
                        host = process.env.HOST || '0.0.0.0';
                        port = process.env.PORT || 3000;

                        // Import and Set Nuxt.js options

                        config = __webpack_require__(4);

                        config.dev = !(app.env === 'production');

                        // Instantiate nuxt.js
                        nuxt = new __WEBPACK_IMPORTED_MODULE_3_nuxt__["Nuxt"](config);

                        // Build in development

                        if (!config.dev) {
                            _context.next = 10;
                            break;
                        }

                        builder = new __WEBPACK_IMPORTED_MODULE_3_nuxt__["Builder"](nuxt);
                        _context.next = 10;
                        return builder.build();

                    case 10:

                        // proxy
                        // const proxyTable = {
                        //     '/api/xiandu': { target: 'https://gank.io', changeOrigin: true },
                        //     '/pixiv': { target: 'https://cloud.mokeyjay.com', changeOrigin: true },
                        //     '/cloudmusic': { target: 'https://api.imjad.cn', changeOrigin: true }
                        // }
                        // Object.keys(proxyTable).forEach(context => {
                        //     var options = proxyTable[context]
                        //     app.use(proxy(context, options))
                        // })

                        router = __webpack_require__(5);


                        app.use(router.routes()).use(router.allowedMethods());

                        app.use(function (ctx) {
                            ctx.status = 200;
                            ctx.respond = false; // Mark request as handled for Koa
                            ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
                            nuxt.render(ctx.req, ctx.res);
                        });

                        app.listen(port, host);
                        console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

                    case 15:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function start() {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map