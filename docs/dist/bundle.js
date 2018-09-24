(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = (window.React);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (window.ReactDOM);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = (window.PropTypes);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FetchOne = require('./FetchOne');

var _FetchOne2 = _interopRequireDefault(_FetchOne);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Location from './Location'

var Item = function Item(props) {
    return _react2.default.createElement(
        'li',
        null,
        props.name
    );
};
Item.propTypes = {
    name: _propTypes2.default.string.isRequired
};

var FetchData = function FetchData(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            null,
            'loaded .... :)'
        ),
        _react2.default.createElement(
            'ul',
            null,
            props.data.map(function (item) {
                item.key = item.id;
                return _react2.default.createElement(Item, item);
            })
        )
    );
};

FetchData.propTypes = { data: _propTypes2.default.object.isRequired };

var FetchLoad = function FetchLoad() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            null,
            'loading .... :|'
        )
    );
};

var FetchTimedOut = function FetchTimedOut() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            null,
            'data server timed out :/'
        )
    );
};

var FetchError = function FetchError() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            null,
            'Error :('
        )
    );
};

var FetchTest = function FetchTest(props) {
    return _react2.default.createElement(
        'div',
        {
            className: 'fetch-test',
            style: { border: '2px solid blue', padding: '1em', display: 'inline-block', margin: '1em', verticalAlign: 'top' }
        },
        _react2.default.createElement(
            'h2',
            {
                style: { color: 'blue', padding: '1em' }
            },
            props.title
        ),
        props.children
    );
};
FetchTest.propTypes = {
    title: _propTypes2.default.string.isRequired,
    children: _propTypes2.default.array.isRequired
};

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'fetch-page' },
                _react2.default.createElement(
                    'h2',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '/App.js' },
                        'app source'
                    )
                ),
                _react2.default.createElement(
                    FetchTest,
                    { title: 'normal' },
                    _react2.default.createElement(_FetchOne2.default, {
                        component: FetchData,
                        href: 'https://api.chessindex.org/v_opening_name_agg?limit=10',
                        timeout: 3000,
                        loaded_component: FetchLoad,
                        timed_out_component: FetchTimedOut,
                        errored_out_component: FetchError
                    })
                ),
                _react2.default.createElement(
                    FetchTest,
                    { title: 'bad url' },
                    _react2.default.createElement(_FetchOne2.default, {
                        component: FetchData,
                        href: 'https://chessindex.org/v_opening_name_agg?limit=10',
                        loaded_component: FetchLoad,
                        timed_out_component: FetchTimedOut,
                        errored_out_component: FetchError
                    })
                ),
                _react2.default.createElement(
                    FetchTest,
                    { title: 'time out in 3 secs' },
                    _react2.default.createElement(_FetchOne2.default, {
                        component: FetchData,
                        href: 'https://api.chessindex.org/v_opening_name_agg?limit=10',
                        timeout: 3000,
                        loaded_component: FetchLoad,
                        timed_out_component: FetchTimedOut,
                        errored_out_component: FetchError,
                        _simulate_lag: 10000
                    })
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;


_reactDom2.default.render(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(App, null)
), document.querySelector('#app'));


},{"./FetchOne":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = (window.React);

var _react2 = _interopRequireDefault(_react);

var _propTypes = (window.PropTypes);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Postgrest = require('./Postgrest');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fetcher = function (_React$Component) {
    _inherits(Fetcher, _React$Component);

    _createClass(Fetcher, [{
        key: '_initialState',
        value: function _initialState() {
            return {
                data: null,
                fetched: false,
                timed_out: false,
                has_error: false
            };
        }
    }]);

    function Fetcher(props) {
        _classCallCheck(this, Fetcher);

        var _this = _possibleConstructorReturn(this, (Fetcher.__proto__ || Object.getPrototypeOf(Fetcher)).call(this, props));

        _this.state = _this._initialState();
        _this.fetcher = new _Postgrest.Fetcher();
        return _this;
    }

    _createClass(Fetcher, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props._debug && console.log('FetchOne: mounted');
            this._fetch();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(newprops) {
            this.props._debug && console.log('FetchOne: did update');
            if (!this.props.href === newprops.href) {
                this.setState(this._initialState());
                this._fetch();
            }
        }
    }, {
        key: '_fetch',
        value: function _fetch() {
            var _this2 = this;

            this.props._debug && console.log('FetchOne: fetch');
            if (this.props.timeout) {
                // set the clock to timeout
                setTimeout(function () {
                    _this2.props._debug && console.log('FetchOne: timed out');
                    if (!_this2.state.fetched) {
                        _this2.setState({ timed_out: true });
                    }
                }, this.props.timeout);
            }

            var x = function x() {
                _this2.fetcher.get(_this2.props.href).then(function (response) {
                    return _this2._onFetched(response);
                }).catch(function (error) {
                    _this2.props._debug && console.log('FetchOne: caught error'), _this2.setState({ has_error: true, error: error });
                });
            };

            if (this.props._simulate_lag) setTimeout(function () {
                x();
            }, this.props._simulate_lag);else x();
        }
    }, {
        key: '_onFetched',
        value: function _onFetched(response) {
            this.props._debug && console.log('FetchOne: onFetched');

            if (!response || !response.data) {
                this.setState({ fetched: true });
                return;
            }
            this.setState({
                data: response.data,
                fetched: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            this.props._debug && console.log('FetchOne: render', 'fetched:', this.state.fetched);

            if (this.state.has_error) return _react2.default.createElement(this.props.errored_out_component, { error: this.state.error }) || null;
            if (this.state.timed_out) return _react2.default.createElement(this.props.timed_out_component) || null;
            if (!this.state.fetched) return _react2.default.createElement(this.props.loaded_component) || null;

            return _react2.default.createElement(
                'div',
                { className: 'fetcher-wrapper' },
                _react2.default.createElement(this.props.component, { data: this.state.data })
            );
        }
    }]);

    return Fetcher;
}(_react2.default.Component);

Fetcher.propTypes = {
    component: _propTypes2.default.element.isRequired,
    href: _propTypes2.default.string.isRequired,

    timeout: _propTypes2.default.number.isRequired,
    _debug: _propTypes2.default.bool.isRequired,

    loaded_component: _propTypes2.default.element,
    timed_out_component: _propTypes2.default.element,
    errored_out_component: _propTypes2.default.element,
    _simulate_lag: _propTypes2.default.number
};
Fetcher.defaultProps = {
    timeout: 0,
    _debug: false
};
exports.default = Fetcher;


},{"./Postgrest":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Location = exports.QueryEnumParam = exports.QueryParam = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _urijs = require('urijs');

var _urijs2 = _interopRequireDefault(_urijs);

var _routeParser = require('route-parser');

var _routeParser2 = _interopRequireDefault(_routeParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 *
* Route = require('route-parser');
* var route = new Route('/my/fancy/route/page/:page');
* route.match('/my/fancy/route/page/7') // { page: 7 }
* route.reverse({page: 3}) // -> '/my/fancy/route/page/3'
 */

/*****************************************************************************
 *  Params
/****************************************************************************/

var QueryParam = exports.QueryParam = function () {
    function QueryParam(match_func, validate_func, display) {
        _classCallCheck(this, QueryParam);

        this.match_func = match_func;
        this.validate_func = validate_func;
        this.display = display;
    }

    _createClass(QueryParam, [{
        key: 'match',
        value: function match(value) {
            return this.match_func && this.match_func(value);
        }
    }, {
        key: 'validate',
        value: function validate(value) {
            if (!this.validate_func) return true;else return this.validate_func(value);
        }
    }]);

    return QueryParam;
}();

var QueryEnumParam = exports.QueryEnumParam = function (_QueryParam) {
    _inherits(QueryEnumParam, _QueryParam);

    function QueryEnumParam(key, match_func, validate_func, display) {
        _classCallCheck(this, QueryEnumParam);

        var _this = _possibleConstructorReturn(this, (QueryEnumParam.__proto__ || Object.getPrototypeOf(QueryEnumParam)).call(this, match_func, validate_func, display));

        _this.key = key;
        return _this;
    }

    return QueryEnumParam;
}(QueryParam);

/*****************************************************************************
 *  location
/****************************************************************************/

var Location = exports.Location = function () {
    _createClass(Location, null, [{
        key: 'href',
        value: function href(obj) {
            return Location.route && (0, _routeParser2.default)(Location.route).reverse(obj);
        }
    }]);

    function Location(href) {
        _classCallCheck(this, Location);

        this._api = [];
        var uri = new _urijs2.default(href).normalize();
        var search = uri.search(true);
        var match = this.constructor.route && (0, _routeParser2.default)(this.constructor.route).match(uri.toString());
        var new_search = this._setParams(search);
        this._setParams(match);
        this._uri = uri.search(new_search).normalize();
    }

    _createClass(Location, [{
        key: 'hrefFromSearch',
        value: function hrefFromSearch(search) {

            var old_search = this._uri.search(true);
            Object.assign(old_search, search);
            var href = this._uri.clone().search(old_search).normalize().toString();
            return href;
        }
    }, {
        key: '_setParams',
        value: function _setParams(search) {
            var _this2 = this;

            var params = this.constructor.params;
            var new_search = {};

            Object.keys(search).forEach(function (key) {
                var p = params[key];
                if (!p) return; // if unrecogonized param

                var val = search[key];
                // if search has same key more than twice take last value
                if (Array.isArray(val)) {
                    val = val.slice(-1)[0];
                }

                if (Array.isArray(p)) {
                    // if param is enum
                    p.forEach(function (pp) {
                        if (val === pp.key) {
                            // if this param matches enum
                            new_search[key] = val;
                            _this2._api.push(pp.match(val));
                        }
                    });
                } else {
                    // else
                    if (!p.validate(val)) // if it does not pass validation
                        return;
                    new_search[key] = val;
                    _this2._api.push(p.match(val));
                }
            });
            return new_search;
        }
    }, {
        key: 'equal',
        value: function equal(other) {
            return this._uri.toString() === other._uri.toString();
        }
    }, {
        key: 'apiParams',
        value: function apiParams() {
            return this._api;
        }
    }, {
        key: 'url',
        value: function url() {
            return this._uri.toString();
        }
    }, {
        key: 'pathname',
        value: function pathname() {
            return this._uri.pathname();
        }
    }, {
        key: 'search',
        value: function search() {
            return this._uri.search(true);
        }
    }]);

    return Location;
}();

Location.route = null;
Location.params = [];


},{"route-parser":"route-parser","urijs":"urijs"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pagination = exports.Response = exports.Fetcher = exports.Query = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Param = function () {
    function Param(op, column, val) {
        _classCallCheck(this, Param);

        this.op = String(op);
        this.column = String(column);
        this.val = String(val);
    }

    _createClass(Param, [{
        key: 'toString',
        value: function toString() {
            return this.column + '=' + this.op + '.' + this.val;
        }
    }]);

    return Param;
}();

var ValueParam = function () {
    function ValueParam(op, val) {
        _classCallCheck(this, ValueParam);

        this.op = String(op);
        this.val = String(val);
    }

    _createClass(ValueParam, [{
        key: 'toString',
        value: function toString() {
            return this.op + '=' + this.val;
        }
    }]);

    return ValueParam;
}();

var OrderParam = function () {
    function OrderParam(column, asc, nulls_last) {
        _classCallCheck(this, OrderParam);

        this.column = String(column);
        this.asc = asc ? true : false;
        this.nulls_last = nulls_last ? true : false;
    }

    _createClass(OrderParam, [{
        key: 'toString',
        value: function toString() {
            return 'order=' + this.column + (this.asc ? '' : '.desc') + (this.nulls_last ? '' : '.nullslast');
        }
    }]);

    return OrderParam;
}();

var RawParam = function () {
    function RawParam(value) {
        _classCallCheck(this, RawParam);

        this.value = String(value);
    }

    _createClass(RawParam, [{
        key: 'toString',
        value: function toString() {
            return this.value;
        }
    }]);

    return RawParam;
}();

var Query = exports.Query = function () {
    function Query() {
        _classCallCheck(this, Query);

        this.params = [];
    }

    _createClass(Query, [{
        key: 'toString',
        value: function toString() {
            if (!this.params) return '';
            return '?' + this.params.map(function (x) {
                return x.toString();
            }).join('&');
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.params = [];
        }
    }, {
        key: 'order',
        value: function order(column) {
            var asc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var nulls_last = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            this.params.push(new OrderParam(column, asc, nulls_last));
            return this;
        }
    }, {
        key: 'raw',
        value: function raw(value) {
            this.params.push(new RawParam(value));
            return this;
        }
    }, {
        key: 'combine',
        value: function combine(other) {
            this.params.push(other.params);
        }
    }]);

    return Query;
}();

var ops = ['eq', 'gt', 'lt', 'gte', 'lte', 'like', 'ilike', 'is', 'in', 'not', 'fts', 'plfts', 'pfhts'];

ops.forEach(function (filter) {
    return Query.prototype[filter] = function filterValue(name, value) {
        this.params.push(new Param(filter, name, value));
        return this;
    };
});

var value_ops = ['limit', 'offset'];

value_ops.forEach(function (filter) {
    return Query.prototype[filter] = function filterValue(value) {
        this.params.push(new ValueParam(filter, value));
        return this;
    };
});

var Fetcher = exports.Fetcher = function () {
    function Fetcher() {
        var exact_count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _classCallCheck(this, Fetcher);

        this.exact_count = exact_count;
        this.debug = debug;
    }

    _createClass(Fetcher, [{
        key: 'get',
        value: function get(href) {
            var _this = this;

            var first = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var last = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            var params = this.exact_count ? { headers: { Prefer: 'count=exact' } } : { headers: {} };
            var config = {};
            if (first !== null || last !== null) {
                params.headers.Range = first + '-' + last;
            }

            this.debug && console.log('Fetcher.get', href, params);
            return _axios2.default.get(href, params, config).then(function (response) {
                return new Response(response);
            }).catch(function (error) {
                return _this.on_error(error);
            });
        }
    }, {
        key: 'on_error',
        value: function on_error(error) {
            //console.log(Object.getOwnPropertyNames(error.request.socket))
            var path = null;
            if (error.request.socket) path = error.request.method + ' ' + error.request.socket._host + ' ' + error.request.path + ' ';else path = '';

            console.error('Fetcher: ' + path + error.message);
            if (error.response && error.response.data && error.response.data.message) {
                console.error("Fetcher:" + error.response.data.message);
                if (error.response.data.details) console.error("Fetcher:" + error.response.data.details);
            }
            throw "Fetcher: request failed", error;
        }
    }]);

    return Fetcher;
}();

var Response = exports.Response = function Response(response) {
    _classCallCheck(this, Response);

    this.status = parseInt(response.status);
    this.pagination = false;
    if (this.status == 206) {
        this.pagination = true;
    } else if (this.status != 200) console.warn("non 200 response: " + this.status + response.headers['content-location']);

    this.headers = response.headers;
    var res = this.headers['content-range'].split('/');
    this.count = res[1] != '*' ? parseInt(res[1]) : null;
    res = res[0].split('-');
    this.first = parseInt(res[0]);
    this.last = parseInt(res[1]);
    this.data = response.data;
};

var Pagination = exports.Pagination = function () {
    function Pagination(view, limit) {
        _classCallCheck(this, Pagination);

        if (!view) throw 'view var should be non-empty string';
        this.adapter = new Fetcher();
        this.view = view.charAt(0) == '/' ? view : '/' + view;
        this.limit = limit;
        this.reset();
    }

    _createClass(Pagination, [{
        key: 'reset',
        value: function reset() {
            this.query = null;
            this.page_count = null;
            this.pages = null;
            this.count = null;
        }
    }, {
        key: 'set_query',
        value: function set_query(query) {
            if (this.query != query) this.reset();
            this.query = query;
        }
    }, {
        key: 'get',
        value: function get() {
            var _this2 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            if (this.query === null) {
                throw 'Pagination: set_query(q) has to be called before get()';
            }
            if (page < 1) throw 'Pagination: page must be greater than 0';

            var range = this.get_range(page);
            return this.adapter.get(this.view + this.query, range[0], range[1]).then(function (response) {
                return _this2.pages === null ? _this2.init_pages(page, response) : _this2.on_response(page, response);
            });
        }
    }, {
        key: 'init_pages',
        value: function init_pages(page, response) {
            if (response) {
                this.page_count = Math.floor(response.count / this.limit);
                if (response.count % this.limit) this.page_count += 1;
                this.pages = Array.apply(null, Array(this.page_count));
                return this.on_response(page, response);
            }
        }
    }, {
        key: 'on_response',
        value: function on_response(page, response) {
            this.pages[page] = response;
            this.count = response.count;
            response.pagenum = page;
            response.page_count = this.page_count;
            return response;
        }
    }, {
        key: 'get_range',
        value: function get_range(page) {
            var n = (page - 1) * this.limit;
            return [n, n + this.limit - 1];
        }
    }]);

    return Pagination;
}();


},{"axios":"axios"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var Config = {
    log: mylog,
    warn: function warn() {
        console.warn.apply(console, arguments);
    },
    blacklist: []
};

function mylog(msg) {
    var ok = true;
    for (var i = 0; i < Config.blacklist.length; i++) {
        if (msg.toLowerCase().startsWith(Config.blacklist[i].toLowerCase())) {
            ok = false;
            break;
        }
    }
    if (ok) {
        console.log.apply(console, arguments);
    }
}

exports.default = Config;


},{}]},{},[4,5,3,1,2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImxpYi9BcHAuanMiLCJsaWIvRmV0Y2hPbmUuanMiLCJsaWIvTG9jYXRpb24uanMiLCJsaWIvUG9zdGdyZXN0LmpzIiwibGliL2NvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gKHdpbmRvdy5SZWFjdCk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gKHdpbmRvdy5SZWFjdERPTSk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3Byb3BUeXBlcyA9ICh3aW5kb3cuUHJvcFR5cGVzKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9GZXRjaE9uZSA9IHJlcXVpcmUoJy4vRmV0Y2hPbmUnKTtcblxudmFyIF9GZXRjaE9uZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GZXRjaE9uZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLy9pbXBvcnQgTG9jYXRpb24gZnJvbSAnLi9Mb2NhdGlvbidcblxudmFyIEl0ZW0gPSBmdW5jdGlvbiBJdGVtKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnbGknLFxuICAgICAgICBudWxsLFxuICAgICAgICBwcm9wcy5uYW1lXG4gICAgKTtcbn07XG5JdGVtLnByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG52YXIgRmV0Y2hEYXRhID0gZnVuY3Rpb24gRmV0Y2hEYXRhKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnaDMnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICdsb2FkZWQgLi4uLiA6KSdcbiAgICAgICAgKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAndWwnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHByb3BzLmRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5rZXkgPSBpdGVtLmlkO1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChJdGVtLCBpdGVtKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuRmV0Y2hEYXRhLnByb3BUeXBlcyA9IHsgZGF0YTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCB9O1xuXG52YXIgRmV0Y2hMb2FkID0gZnVuY3Rpb24gRmV0Y2hMb2FkKCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIG51bGwsXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2gzJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAnbG9hZGluZyAuLi4uIDp8J1xuICAgICAgICApXG4gICAgKTtcbn07XG5cbnZhciBGZXRjaFRpbWVkT3V0ID0gZnVuY3Rpb24gRmV0Y2hUaW1lZE91dCgpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBudWxsLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdoMycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgJ2RhdGEgc2VydmVyIHRpbWVkIG91dCA6LydcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG52YXIgRmV0Y2hFcnJvciA9IGZ1bmN0aW9uIEZldGNoRXJyb3IoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnaDMnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICdFcnJvciA6KCdcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG52YXIgRmV0Y2hUZXN0ID0gZnVuY3Rpb24gRmV0Y2hUZXN0KHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZmV0Y2gtdGVzdCcsXG4gICAgICAgICAgICBzdHlsZTogeyBib3JkZXI6ICcycHggc29saWQgYmx1ZScsIHBhZGRpbmc6ICcxZW0nLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgbWFyZ2luOiAnMWVtJywgdmVydGljYWxBbGlnbjogJ3RvcCcgfVxuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdoMicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHsgY29sb3I6ICdibHVlJywgcGFkZGluZzogJzFlbScgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb3BzLnRpdGxlXG4gICAgICAgICksXG4gICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgKTtcbn07XG5GZXRjaFRlc3QucHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5LmlzUmVxdWlyZWRcbn07XG5cbnZhciBBcHAgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhBcHAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQXBwKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXBwKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEFwcC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFwcCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhBcHAsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdmZXRjaC1wYWdlJyB9LFxuICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnaDInLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgaHJlZjogJy9BcHAuanMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnYXBwIHNvdXJjZSdcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIEZldGNoVGVzdCxcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogJ25vcm1hbCcgfSxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0ZldGNoT25lMi5kZWZhdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IEZldGNoRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwczovL2FwaS5jaGVzc2luZGV4Lm9yZy92X29wZW5pbmdfbmFtZV9hZ2c/bGltaXQ9MTAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMzAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlZF9jb21wb25lbnQ6IEZldGNoTG9hZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVkX291dF9jb21wb25lbnQ6IEZldGNoVGltZWRPdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcmVkX291dF9jb21wb25lbnQ6IEZldGNoRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBGZXRjaFRlc3QsXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6ICdiYWQgdXJsJyB9LFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRmV0Y2hPbmUyLmRlZmF1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogRmV0Y2hEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vY2hlc3NpbmRleC5vcmcvdl9vcGVuaW5nX25hbWVfYWdnP2xpbWl0PTEwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlZF9jb21wb25lbnQ6IEZldGNoTG9hZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVkX291dF9jb21wb25lbnQ6IEZldGNoVGltZWRPdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcmVkX291dF9jb21wb25lbnQ6IEZldGNoRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBGZXRjaFRlc3QsXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6ICd0aW1lIG91dCBpbiAzIHNlY3MnIH0sXG4gICAgICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9GZXRjaE9uZTIuZGVmYXVsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBGZXRjaERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9hcGkuY2hlc3NpbmRleC5vcmcvdl9vcGVuaW5nX25hbWVfYWdnP2xpbWl0PTEwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkZWRfY29tcG9uZW50OiBGZXRjaExvYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lZF9vdXRfY29tcG9uZW50OiBGZXRjaFRpbWVkT3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JlZF9vdXRfY29tcG9uZW50OiBGZXRjaEVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3NpbXVsYXRlX2xhZzogMTAwMDBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEFwcDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcblxuXG5fcmVhY3REb20yLmRlZmF1bHQucmVuZGVyKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIG51bGwsXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQXBwLCBudWxsKVxuKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXBwLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gKHdpbmRvdy5SZWFjdCk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9ICh3aW5kb3cuUHJvcFR5cGVzKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9Qb3N0Z3Jlc3QgPSByZXF1aXJlKCcuL1Bvc3RncmVzdCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBGZXRjaGVyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoRmV0Y2hlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBfY3JlYXRlQ2xhc3MoRmV0Y2hlciwgW3tcbiAgICAgICAga2V5OiAnX2luaXRpYWxTdGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaW5pdGlhbFN0YXRlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgICAgIGZldGNoZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRpbWVkX291dDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaGFzX2Vycm9yOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIGZ1bmN0aW9uIEZldGNoZXIocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZldGNoZXIpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChGZXRjaGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRmV0Y2hlcikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IF90aGlzLl9pbml0aWFsU3RhdGUoKTtcbiAgICAgICAgX3RoaXMuZmV0Y2hlciA9IG5ldyBfUG9zdGdyZXN0LkZldGNoZXIoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhGZXRjaGVyLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuX2RlYnVnICYmIGNvbnNvbGUubG9nKCdGZXRjaE9uZTogbW91bnRlZCcpO1xuICAgICAgICAgICAgdGhpcy5fZmV0Y2goKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShuZXdwcm9wcykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5fZGVidWcgJiYgY29uc29sZS5sb2coJ0ZldGNoT25lOiBkaWQgdXBkYXRlJyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMuaHJlZiA9PT0gbmV3cHJvcHMuaHJlZikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5faW5pdGlhbFN0YXRlKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZldGNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ19mZXRjaCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZmV0Y2goKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5wcm9wcy5fZGVidWcgJiYgY29uc29sZS5sb2coJ0ZldGNoT25lOiBmZXRjaCcpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudGltZW91dCkge1xuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgY2xvY2sgdG8gdGltZW91dFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIucHJvcHMuX2RlYnVnICYmIGNvbnNvbGUubG9nKCdGZXRjaE9uZTogdGltZWQgb3V0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMyLnN0YXRlLmZldGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IHRpbWVkX291dDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRoaXMucHJvcHMudGltZW91dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB4ID0gZnVuY3Rpb24geCgpIHtcbiAgICAgICAgICAgICAgICBfdGhpczIuZmV0Y2hlci5nZXQoX3RoaXMyLnByb3BzLmhyZWYpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIuX29uRmV0Y2hlZChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi5wcm9wcy5fZGVidWcgJiYgY29uc29sZS5sb2coJ0ZldGNoT25lOiBjYXVnaHQgZXJyb3InKSwgX3RoaXMyLnNldFN0YXRlKHsgaGFzX2Vycm9yOiB0cnVlLCBlcnJvcjogZXJyb3IgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5fc2ltdWxhdGVfbGFnKSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB4KCk7XG4gICAgICAgICAgICB9LCB0aGlzLnByb3BzLl9zaW11bGF0ZV9sYWcpO2Vsc2UgeCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfb25GZXRjaGVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkZldGNoZWQocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuX2RlYnVnICYmIGNvbnNvbGUubG9nKCdGZXRjaE9uZTogb25GZXRjaGVkJyk7XG5cbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmV0Y2hlZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxuICAgICAgICAgICAgICAgIGZldGNoZWQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5fZGVidWcgJiYgY29uc29sZS5sb2coJ0ZldGNoT25lOiByZW5kZXInLCAnZmV0Y2hlZDonLCB0aGlzLnN0YXRlLmZldGNoZWQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5oYXNfZXJyb3IpIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmVycm9yZWRfb3V0X2NvbXBvbmVudCwgeyBlcnJvcjogdGhpcy5zdGF0ZS5lcnJvciB9KSB8fCBudWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudGltZWRfb3V0KSByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy50aW1lZF9vdXRfY29tcG9uZW50KSB8fCBudWxsO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmZldGNoZWQpIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmxvYWRlZF9jb21wb25lbnQpIHx8IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2ZldGNoZXItd3JhcHBlcicgfSxcbiAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmNvbXBvbmVudCwgeyBkYXRhOiB0aGlzLnN0YXRlLmRhdGEgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRmV0Y2hlcjtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkZldGNoZXIucHJvcFR5cGVzID0ge1xuICAgIGNvbXBvbmVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50LmlzUmVxdWlyZWQsXG4gICAgaHJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIHRpbWVvdXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgX2RlYnVnOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCxcblxuICAgIGxvYWRlZF9jb21wb25lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgICB0aW1lZF9vdXRfY29tcG9uZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gICAgZXJyb3JlZF9vdXRfY29tcG9uZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gICAgX3NpbXVsYXRlX2xhZzogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJcbn07XG5GZXRjaGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aW1lb3V0OiAwLFxuICAgIF9kZWJ1ZzogZmFsc2Vcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBGZXRjaGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1GZXRjaE9uZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTG9jYXRpb24gPSBleHBvcnRzLlF1ZXJ5RW51bVBhcmFtID0gZXhwb3J0cy5RdWVyeVBhcmFtID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3VyaWpzID0gcmVxdWlyZSgndXJpanMnKTtcblxudmFyIF91cmlqczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91cmlqcyk7XG5cbnZhciBfcm91dGVQYXJzZXIgPSByZXF1aXJlKCdyb3V0ZS1wYXJzZXInKTtcblxudmFyIF9yb3V0ZVBhcnNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZVBhcnNlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLypcbiAqXG4qIFJvdXRlID0gcmVxdWlyZSgncm91dGUtcGFyc2VyJyk7XG4qIHZhciByb3V0ZSA9IG5ldyBSb3V0ZSgnL215L2ZhbmN5L3JvdXRlL3BhZ2UvOnBhZ2UnKTtcbiogcm91dGUubWF0Y2goJy9teS9mYW5jeS9yb3V0ZS9wYWdlLzcnKSAvLyB7IHBhZ2U6IDcgfVxuKiByb3V0ZS5yZXZlcnNlKHtwYWdlOiAzfSkgLy8gLT4gJy9teS9mYW5jeS9yb3V0ZS9wYWdlLzMnXG4gKi9cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiAgUGFyYW1zXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxudmFyIFF1ZXJ5UGFyYW0gPSBleHBvcnRzLlF1ZXJ5UGFyYW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUXVlcnlQYXJhbShtYXRjaF9mdW5jLCB2YWxpZGF0ZV9mdW5jLCBkaXNwbGF5KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBRdWVyeVBhcmFtKTtcblxuICAgICAgICB0aGlzLm1hdGNoX2Z1bmMgPSBtYXRjaF9mdW5jO1xuICAgICAgICB0aGlzLnZhbGlkYXRlX2Z1bmMgPSB2YWxpZGF0ZV9mdW5jO1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSBkaXNwbGF5O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhRdWVyeVBhcmFtLCBbe1xuICAgICAgICBrZXk6ICdtYXRjaCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBtYXRjaCh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF0Y2hfZnVuYyAmJiB0aGlzLm1hdGNoX2Z1bmModmFsdWUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd2YWxpZGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlX2Z1bmMpIHJldHVybiB0cnVlO2Vsc2UgcmV0dXJuIHRoaXMudmFsaWRhdGVfZnVuYyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUXVlcnlQYXJhbTtcbn0oKTtcblxudmFyIFF1ZXJ5RW51bVBhcmFtID0gZXhwb3J0cy5RdWVyeUVudW1QYXJhbSA9IGZ1bmN0aW9uIChfUXVlcnlQYXJhbSkge1xuICAgIF9pbmhlcml0cyhRdWVyeUVudW1QYXJhbSwgX1F1ZXJ5UGFyYW0pO1xuXG4gICAgZnVuY3Rpb24gUXVlcnlFbnVtUGFyYW0oa2V5LCBtYXRjaF9mdW5jLCB2YWxpZGF0ZV9mdW5jLCBkaXNwbGF5KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBRdWVyeUVudW1QYXJhbSk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFF1ZXJ5RW51bVBhcmFtLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUXVlcnlFbnVtUGFyYW0pKS5jYWxsKHRoaXMsIG1hdGNoX2Z1bmMsIHZhbGlkYXRlX2Z1bmMsIGRpc3BsYXkpKTtcblxuICAgICAgICBfdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gUXVlcnlFbnVtUGFyYW07XG59KFF1ZXJ5UGFyYW0pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqICBsb2NhdGlvblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciBMb2NhdGlvbiA9IGV4cG9ydHMuTG9jYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgX2NyZWF0ZUNsYXNzKExvY2F0aW9uLCBudWxsLCBbe1xuICAgICAgICBrZXk6ICdocmVmJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhyZWYob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gTG9jYXRpb24ucm91dGUgJiYgKDAsIF9yb3V0ZVBhcnNlcjIuZGVmYXVsdCkoTG9jYXRpb24ucm91dGUpLnJldmVyc2Uob2JqKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIGZ1bmN0aW9uIExvY2F0aW9uKGhyZWYpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvY2F0aW9uKTtcblxuICAgICAgICB0aGlzLl9hcGkgPSBbXTtcbiAgICAgICAgdmFyIHVyaSA9IG5ldyBfdXJpanMyLmRlZmF1bHQoaHJlZikubm9ybWFsaXplKCk7XG4gICAgICAgIHZhciBzZWFyY2ggPSB1cmkuc2VhcmNoKHRydWUpO1xuICAgICAgICB2YXIgbWF0Y2ggPSB0aGlzLmNvbnN0cnVjdG9yLnJvdXRlICYmICgwLCBfcm91dGVQYXJzZXIyLmRlZmF1bHQpKHRoaXMuY29uc3RydWN0b3Iucm91dGUpLm1hdGNoKHVyaS50b1N0cmluZygpKTtcbiAgICAgICAgdmFyIG5ld19zZWFyY2ggPSB0aGlzLl9zZXRQYXJhbXMoc2VhcmNoKTtcbiAgICAgICAgdGhpcy5fc2V0UGFyYW1zKG1hdGNoKTtcbiAgICAgICAgdGhpcy5fdXJpID0gdXJpLnNlYXJjaChuZXdfc2VhcmNoKS5ub3JtYWxpemUoKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTG9jYXRpb24sIFt7XG4gICAgICAgIGtleTogJ2hyZWZGcm9tU2VhcmNoJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhyZWZGcm9tU2VhcmNoKHNlYXJjaCkge1xuXG4gICAgICAgICAgICB2YXIgb2xkX3NlYXJjaCA9IHRoaXMuX3VyaS5zZWFyY2godHJ1ZSk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKG9sZF9zZWFyY2gsIHNlYXJjaCk7XG4gICAgICAgICAgICB2YXIgaHJlZiA9IHRoaXMuX3VyaS5jbG9uZSgpLnNlYXJjaChvbGRfc2VhcmNoKS5ub3JtYWxpemUoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIGhyZWY7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ19zZXRQYXJhbXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFBhcmFtcyhzZWFyY2gpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJhbXM7XG4gICAgICAgICAgICB2YXIgbmV3X3NlYXJjaCA9IHt9O1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzZWFyY2gpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHZhciBwID0gcGFyYW1zW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKCFwKSByZXR1cm47IC8vIGlmIHVucmVjb2dvbml6ZWQgcGFyYW1cblxuICAgICAgICAgICAgICAgIHZhciB2YWwgPSBzZWFyY2hba2V5XTtcbiAgICAgICAgICAgICAgICAvLyBpZiBzZWFyY2ggaGFzIHNhbWUga2V5IG1vcmUgdGhhbiB0d2ljZSB0YWtlIGxhc3QgdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IHZhbC5zbGljZSgtMSlbMF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgcGFyYW0gaXMgZW51bVxuICAgICAgICAgICAgICAgICAgICBwLmZvckVhY2goZnVuY3Rpb24gKHBwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSBwcC5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIHBhcmFtIG1hdGNoZXMgZW51bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld19zZWFyY2hba2V5XSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuX2FwaS5wdXNoKHBwLm1hdGNoKHZhbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGlmICghcC52YWxpZGF0ZSh2YWwpKSAvLyBpZiBpdCBkb2VzIG5vdCBwYXNzIHZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgbmV3X3NlYXJjaFtrZXldID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIuX2FwaS5wdXNoKHAubWF0Y2godmFsKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3X3NlYXJjaDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZXF1YWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXF1YWwob3RoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91cmkudG9TdHJpbmcoKSA9PT0gb3RoZXIuX3VyaS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdhcGlQYXJhbXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYXBpUGFyYW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FwaTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndXJsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVybCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91cmkudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncGF0aG5hbWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF0aG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJpLnBhdGhuYW1lKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NlYXJjaCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWFyY2goKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJpLnNlYXJjaCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBMb2NhdGlvbjtcbn0oKTtcblxuTG9jYXRpb24ucm91dGUgPSBudWxsO1xuTG9jYXRpb24ucGFyYW1zID0gW107XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxvY2F0aW9uLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5QYWdpbmF0aW9uID0gZXhwb3J0cy5SZXNwb25zZSA9IGV4cG9ydHMuRmV0Y2hlciA9IGV4cG9ydHMuUXVlcnkgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG52YXIgX2F4aW9zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F4aW9zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFBhcmFtID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBhcmFtKG9wLCBjb2x1bW4sIHZhbCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFyYW0pO1xuXG4gICAgICAgIHRoaXMub3AgPSBTdHJpbmcob3ApO1xuICAgICAgICB0aGlzLmNvbHVtbiA9IFN0cmluZyhjb2x1bW4pO1xuICAgICAgICB0aGlzLnZhbCA9IFN0cmluZyh2YWwpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhQYXJhbSwgW3tcbiAgICAgICAga2V5OiAndG9TdHJpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4gKyAnPScgKyB0aGlzLm9wICsgJy4nICsgdGhpcy52YWw7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUGFyYW07XG59KCk7XG5cbnZhciBWYWx1ZVBhcmFtID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFZhbHVlUGFyYW0ob3AsIHZhbCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmFsdWVQYXJhbSk7XG5cbiAgICAgICAgdGhpcy5vcCA9IFN0cmluZyhvcCk7XG4gICAgICAgIHRoaXMudmFsID0gU3RyaW5nKHZhbCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFZhbHVlUGFyYW0sIFt7XG4gICAgICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3AgKyAnPScgKyB0aGlzLnZhbDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBWYWx1ZVBhcmFtO1xufSgpO1xuXG52YXIgT3JkZXJQYXJhbSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPcmRlclBhcmFtKGNvbHVtbiwgYXNjLCBudWxsc19sYXN0KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPcmRlclBhcmFtKTtcblxuICAgICAgICB0aGlzLmNvbHVtbiA9IFN0cmluZyhjb2x1bW4pO1xuICAgICAgICB0aGlzLmFzYyA9IGFzYyA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5udWxsc19sYXN0ID0gbnVsbHNfbGFzdCA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoT3JkZXJQYXJhbSwgW3tcbiAgICAgICAga2V5OiAndG9TdHJpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ29yZGVyPScgKyB0aGlzLmNvbHVtbiArICh0aGlzLmFzYyA/ICcnIDogJy5kZXNjJykgKyAodGhpcy5udWxsc19sYXN0ID8gJycgOiAnLm51bGxzbGFzdCcpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE9yZGVyUGFyYW07XG59KCk7XG5cbnZhciBSYXdQYXJhbSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSYXdQYXJhbSh2YWx1ZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmF3UGFyYW0pO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSYXdQYXJhbSwgW3tcbiAgICAgICAga2V5OiAndG9TdHJpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSYXdQYXJhbTtcbn0oKTtcblxudmFyIFF1ZXJ5ID0gZXhwb3J0cy5RdWVyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRdWVyeSgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFF1ZXJ5KTtcblxuICAgICAgICB0aGlzLnBhcmFtcyA9IFtdO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhRdWVyeSwgW3tcbiAgICAgICAga2V5OiAndG9TdHJpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGFyYW1zKSByZXR1cm4gJyc7XG4gICAgICAgICAgICByZXR1cm4gJz8nICsgdGhpcy5wYXJhbXMubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJyYnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2xlYXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmFtcyA9IFtdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvcmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvcmRlcihjb2x1bW4pIHtcbiAgICAgICAgICAgIHZhciBhc2MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG4gICAgICAgICAgICB2YXIgbnVsbHNfbGFzdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5wYXJhbXMucHVzaChuZXcgT3JkZXJQYXJhbShjb2x1bW4sIGFzYywgbnVsbHNfbGFzdCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JhdycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByYXcodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLnB1c2gobmV3IFJhd1BhcmFtKHZhbHVlKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tYmluZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21iaW5lKG90aGVyKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmFtcy5wdXNoKG90aGVyLnBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUXVlcnk7XG59KCk7XG5cbnZhciBvcHMgPSBbJ2VxJywgJ2d0JywgJ2x0JywgJ2d0ZScsICdsdGUnLCAnbGlrZScsICdpbGlrZScsICdpcycsICdpbicsICdub3QnLCAnZnRzJywgJ3BsZnRzJywgJ3BmaHRzJ107XG5cbm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWx0ZXIpIHtcbiAgICByZXR1cm4gUXVlcnkucHJvdG90eXBlW2ZpbHRlcl0gPSBmdW5jdGlvbiBmaWx0ZXJWYWx1ZShuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnBhcmFtcy5wdXNoKG5ldyBQYXJhbShmaWx0ZXIsIG5hbWUsIHZhbHVlKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG59KTtcblxudmFyIHZhbHVlX29wcyA9IFsnbGltaXQnLCAnb2Zmc2V0J107XG5cbnZhbHVlX29wcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWx0ZXIpIHtcbiAgICByZXR1cm4gUXVlcnkucHJvdG90eXBlW2ZpbHRlcl0gPSBmdW5jdGlvbiBmaWx0ZXJWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnBhcmFtcy5wdXNoKG5ldyBWYWx1ZVBhcmFtKGZpbHRlciwgdmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn0pO1xuXG52YXIgRmV0Y2hlciA9IGV4cG9ydHMuRmV0Y2hlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGZXRjaGVyKCkge1xuICAgICAgICB2YXIgZXhhY3RfY291bnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRydWU7XG4gICAgICAgIHZhciBkZWJ1ZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZldGNoZXIpO1xuXG4gICAgICAgIHRoaXMuZXhhY3RfY291bnQgPSBleGFjdF9jb3VudDtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhGZXRjaGVyLCBbe1xuICAgICAgICBrZXk6ICdnZXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGhyZWYpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBmaXJzdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgICAgICAgICAgIHZhciBsYXN0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gdGhpcy5leGFjdF9jb3VudCA/IHsgaGVhZGVyczogeyBQcmVmZXI6ICdjb3VudD1leGFjdCcgfSB9IDogeyBoZWFkZXJzOiB7fSB9O1xuICAgICAgICAgICAgdmFyIGNvbmZpZyA9IHt9O1xuICAgICAgICAgICAgaWYgKGZpcnN0ICE9PSBudWxsIHx8IGxhc3QgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuaGVhZGVycy5SYW5nZSA9IGZpcnN0ICsgJy0nICsgbGFzdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kZWJ1ZyAmJiBjb25zb2xlLmxvZygnRmV0Y2hlci5nZXQnLCBocmVmLCBwYXJhbXMpO1xuICAgICAgICAgICAgcmV0dXJuIF9heGlvczIuZGVmYXVsdC5nZXQoaHJlZiwgcGFyYW1zLCBjb25maWcpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMub25fZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uX2Vycm9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uX2Vycm9yKGVycm9yKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGVycm9yLnJlcXVlc3Quc29ja2V0KSlcbiAgICAgICAgICAgIHZhciBwYXRoID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXF1ZXN0LnNvY2tldCkgcGF0aCA9IGVycm9yLnJlcXVlc3QubWV0aG9kICsgJyAnICsgZXJyb3IucmVxdWVzdC5zb2NrZXQuX2hvc3QgKyAnICcgKyBlcnJvci5yZXF1ZXN0LnBhdGggKyAnICc7ZWxzZSBwYXRoID0gJyc7XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZldGNoZXI6ICcgKyBwYXRoICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSAmJiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmV0Y2hlcjpcIiArIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlscykgY29uc29sZS5lcnJvcihcIkZldGNoZXI6XCIgKyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgXCJGZXRjaGVyOiByZXF1ZXN0IGZhaWxlZFwiLCBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBGZXRjaGVyO1xufSgpO1xuXG52YXIgUmVzcG9uc2UgPSBleHBvcnRzLlJlc3BvbnNlID0gZnVuY3Rpb24gUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVzcG9uc2UpO1xuXG4gICAgdGhpcy5zdGF0dXMgPSBwYXJzZUludChyZXNwb25zZS5zdGF0dXMpO1xuICAgIHRoaXMucGFnaW5hdGlvbiA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDYpIHtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzICE9IDIwMCkgY29uc29sZS53YXJuKFwibm9uIDIwMCByZXNwb25zZTogXCIgKyB0aGlzLnN0YXR1cyArIHJlc3BvbnNlLmhlYWRlcnNbJ2NvbnRlbnQtbG9jYXRpb24nXSk7XG5cbiAgICB0aGlzLmhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xuICAgIHZhciByZXMgPSB0aGlzLmhlYWRlcnNbJ2NvbnRlbnQtcmFuZ2UnXS5zcGxpdCgnLycpO1xuICAgIHRoaXMuY291bnQgPSByZXNbMV0gIT0gJyonID8gcGFyc2VJbnQocmVzWzFdKSA6IG51bGw7XG4gICAgcmVzID0gcmVzWzBdLnNwbGl0KCctJyk7XG4gICAgdGhpcy5maXJzdCA9IHBhcnNlSW50KHJlc1swXSk7XG4gICAgdGhpcy5sYXN0ID0gcGFyc2VJbnQocmVzWzFdKTtcbiAgICB0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhO1xufTtcblxudmFyIFBhZ2luYXRpb24gPSBleHBvcnRzLlBhZ2luYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGFnaW5hdGlvbih2aWV3LCBsaW1pdCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFnaW5hdGlvbik7XG5cbiAgICAgICAgaWYgKCF2aWV3KSB0aHJvdyAndmlldyB2YXIgc2hvdWxkIGJlIG5vbi1lbXB0eSBzdHJpbmcnO1xuICAgICAgICB0aGlzLmFkYXB0ZXIgPSBuZXcgRmV0Y2hlcigpO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3LmNoYXJBdCgwKSA9PSAnLycgPyB2aWV3IDogJy8nICsgdmlldztcbiAgICAgICAgdGhpcy5saW1pdCA9IGxpbWl0O1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFBhZ2luYXRpb24sIFt7XG4gICAgICAgIGtleTogJ3Jlc2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICAgICAgdGhpcy5xdWVyeSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnBhZ2VfY291bnQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wYWdlcyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0X3F1ZXJ5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldF9xdWVyeShxdWVyeSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucXVlcnkgIT0gcXVlcnkpIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgcGFnZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucXVlcnkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnUGFnaW5hdGlvbjogc2V0X3F1ZXJ5KHEpIGhhcyB0byBiZSBjYWxsZWQgYmVmb3JlIGdldCgpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYWdlIDwgMSkgdGhyb3cgJ1BhZ2luYXRpb246IHBhZ2UgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCc7XG5cbiAgICAgICAgICAgIHZhciByYW5nZSA9IHRoaXMuZ2V0X3JhbmdlKHBhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5nZXQodGhpcy52aWV3ICsgdGhpcy5xdWVyeSwgcmFuZ2VbMF0sIHJhbmdlWzFdKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIucGFnZXMgPT09IG51bGwgPyBfdGhpczIuaW5pdF9wYWdlcyhwYWdlLCByZXNwb25zZSkgOiBfdGhpczIub25fcmVzcG9uc2UocGFnZSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2luaXRfcGFnZXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdF9wYWdlcyhwYWdlLCByZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlX2NvdW50ID0gTWF0aC5mbG9vcihyZXNwb25zZS5jb3VudCAvIHRoaXMubGltaXQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb3VudCAlIHRoaXMubGltaXQpIHRoaXMucGFnZV9jb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZXMgPSBBcnJheS5hcHBseShudWxsLCBBcnJheSh0aGlzLnBhZ2VfY291bnQpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vbl9yZXNwb25zZShwYWdlLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uX3Jlc3BvbnNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uX3Jlc3BvbnNlKHBhZ2UsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VzW3BhZ2VdID0gcmVzcG9uc2U7XG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gcmVzcG9uc2UuY291bnQ7XG4gICAgICAgICAgICByZXNwb25zZS5wYWdlbnVtID0gcGFnZTtcbiAgICAgICAgICAgIHJlc3BvbnNlLnBhZ2VfY291bnQgPSB0aGlzLnBhZ2VfY291bnQ7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldF9yYW5nZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRfcmFuZ2UocGFnZSkge1xuICAgICAgICAgICAgdmFyIG4gPSAocGFnZSAtIDEpICogdGhpcy5saW1pdDtcbiAgICAgICAgICAgIHJldHVybiBbbiwgbiArIHRoaXMubGltaXQgLSAxXTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBQYWdpbmF0aW9uO1xufSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qb3N0Z3Jlc3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIENvbmZpZyA9IHtcbiAgICBsb2c6IG15bG9nLFxuICAgIHdhcm46IGZ1bmN0aW9uIHdhcm4oKSB7XG4gICAgICAgIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgYmxhY2tsaXN0OiBbXVxufTtcblxuZnVuY3Rpb24gbXlsb2cobXNnKSB7XG4gICAgdmFyIG9rID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IENvbmZpZy5ibGFja2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG1zZy50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoQ29uZmlnLmJsYWNrbGlzdFtpXS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgb2sgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvaykge1xuICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgIH1cbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gQ29uZmlnO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25maWcuanMubWFwIl19
