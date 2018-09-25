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

var _Fetcher = require('./Fetcher');

var _Fetcher2 = _interopRequireDefault(_Fetcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function Item(props) {
    return _react2.default.createElement(
        'li',
        null,
        props.i
    );
};
Item.propTypes = {
    i: _propTypes2.default.number.isRequired
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
                item.key = item.i;
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

var FetchError = function FetchError(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            null,
            'Error ',
            props.error.status,
            ' :('
        )
    );
};
FetchError.propTypes = {
    error: _propTypes2.default.string.isRequired
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

var host = 'https://postgrest-test.chessindex.org';
var href = host + '/testing?limit=5';
var bad_href = host + '/not_exist';

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
                        { href: 'react-postgrest/App.js' },
                        'app source'
                    )
                ),
                _react2.default.createElement(
                    FetchTest,
                    { title: 'normal' },
                    _react2.default.createElement(_Fetcher2.default, {
                        component: FetchData,
                        href: href,
                        timeout: 3000,
                        loading: FetchLoad,
                        timed_out: FetchTimedOut,
                        errored_out: FetchError
                    })
                ),
                _react2.default.createElement(
                    FetchTest,
                    { title: 'bad url' },
                    _react2.default.createElement(_Fetcher2.default, {
                        component: FetchData,
                        href: bad_href,
                        loading: FetchLoad,
                        timed_out: FetchTimedOut,
                        errored_out: FetchError
                    })
                ),
                _react2.default.createElement(
                    FetchTest,
                    { title: 'time out in 3 secs' },
                    _react2.default.createElement(_Fetcher2.default, {
                        component: FetchData,
                        href: href,
                        timeout: 3000,
                        loading: FetchLoad,
                        timed_out: FetchTimedOut,
                        errored_out: FetchError,
                        _simulate_lag: 10000
                    })
                ),
                _react2.default.createElement(
                    FetchTest,
                    { title: 'empty optional components' },
                    _react2.default.createElement(_Fetcher2.default, {
                        component: FetchData,
                        href: href,
                        _simulate_lag: 1000
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


},{"./Fetcher":3}],2:[function(require,module,exports){
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
            console.log(this.props.loading_component);

            if (this.state.has_error) return _react2.default.createElement(this.props.errored_out_component, { error: this.state.error });
            if (this.state.timed_out) return _react2.default.createElement(this.props.timed_out_component);
            if (!this.state.fetched) return _react2.default.createElement(this.props.loading_component);

            return _react2.default.createElement(this.props.component, { data: this.state.data });
        }
    }]);

    return Fetcher;
}(_react2.default.Component);

Fetcher.propTypes = {
    component: _propTypes2.default.element.isRequired,
    href: _propTypes2.default.string.isRequired,

    timeout: _propTypes2.default.number.isRequired,
    _debug: _propTypes2.default.bool.isRequired,

    loading_component: _propTypes2.default.element,
    timed_out_component: _propTypes2.default.element,
    errored_out_component: _propTypes2.default.element,
    _simulate_lag: _propTypes2.default.number
};
Fetcher.defaultProps = {
    timeout: 0,
    _debug: false,
    loading_component: _react2.default.createElement('div', { className: 'postgrest-loading-wrapper' }),
    errored_out_component: _react2.default.createElement('div', { className: 'postgrest-error-wrapper' }),
    timed_out_component: _react2.default.createElement('div', { className: 'postgrest-timed-out-wrapper' })
};
exports.default = Fetcher;


},{"./Postgrest":4}],3:[function(require,module,exports){
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

            if (this.state.has_error) return this.props.errored_out ? _react2.default.createElement(this.props.errored_out, { error: this.state.error }) : null;
            if (this.state.timed_out) return this.props.timed_out ? _react2.default.createElement(this.props.timed_out) : null;
            if (!this.state.fetched) return this.props.loading ? _react2.default.createElement(this.props.loading) : null;
            return _react2.default.createElement(this.props.component, { data: this.state.data });
        }
    }]);

    return Fetcher;
}(_react2.default.Component);

Fetcher.propTypes = {
    component: _propTypes2.default.element.isRequired,
    href: _propTypes2.default.string.isRequired,

    timeout: _propTypes2.default.number.isRequired,
    _debug: _propTypes2.default.bool.isRequired,

    loading: _propTypes2.default.element,
    timed_out: _propTypes2.default.element,
    errored_out: _propTypes2.default.element,
    _simulate_lag: _propTypes2.default.number
};
Fetcher.defaultProps = {
    timeout: 0,
    _debug: false
};
exports.default = Fetcher;


},{"./Postgrest":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Response = exports.Fetcher = exports.Query = undefined;

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
    }, {
        key: 'toHeaders',
        value: function toHeaders() {
            return {};
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
    }, {
        key: 'toHeaders',
        value: function toHeaders() {
            return {};
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
    }, {
        key: 'toHeaders',
        value: function toHeaders() {
            return {};
        }
    }]);

    return OrderParam;
}();

var PaginationParam = function () {
    function PaginationParam(page, limit) {
        _classCallCheck(this, PaginationParam);

        this.limit = Math.floor(Number(limit));
        this.page = Math.floor(Number(page));

        if (this.limit < 1) throw 'Pagination: limit must be greater than 0';
        if (this.page < 1) throw 'Pagination: page must be greater than 0';
    }

    _createClass(PaginationParam, [{
        key: 'toString',
        value: function toString() {
            return '';
        }
    }, {
        key: 'toHeaders',
        value: function toHeaders() {
            var first = this.limit * (this.page - 1);
            var last = this.limit * this.page - 1;
            var headers = {};
            headers.Range = first + '-' + last;
            headers.ResultPageSize = this.limit;
            return headers;
        }
    }]);

    return PaginationParam;
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
    }, {
        key: 'toHeaders',
        value: function toHeaders() {
            return {};
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
        key: 'toSearch',
        value: function toSearch() {
            if (!this.params) return '';
            return '?' + this.params.map(function (x) {
                return x.toString();
            }).join('&');
        }
    }, {
        key: 'toHeaders',
        value: function toHeaders() {
            var headers = {};
            this.params.map(function (x) {
                return Object.assign(headers, x.toHeaders());
            });
            return headers;
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
        key: 'paginate',
        value: function paginate() {
            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

            this.params.push(new PaginationParam(page, limit));
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
        var debug = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        _classCallCheck(this, Fetcher);

        this.debug = debug;
    }

    _createClass(Fetcher, [{
        key: 'get',
        value: function get(href) {
            var _this = this;

            var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


            var config = {};
            var params = { headers: {} };

            Object.assign(params.headers, headers);
            if (count) {
                params.headers.Prefer = 'count=exact';
            }

            //console.log(href, params)

            //this.debug && console.log('Fetcher.get', href, params)
            return _axios2.default.get(href, params, config).then(function (response) {
                return new Response(response, headers.ResultPageSize);
            }).catch(function (error) {
                return _this.onError(error);
            });
        }
    }, {
        key: 'onError',
        value: function onError(error) {
            var new_error = {
                status: error.response && error.response.status || error.errno,
                statusMsg: error.response && error.response.data && error.response.data.message || error.response && error.response.statusText || error.code,
                statusDetails: error.response && error.response.data && error.response.data.details,
                statusHint: error.response && error.response.data && error.response.data.hint
            };
            throw new_error;
        }
    }]);

    return Fetcher;
}();

/*
count(page, response) {
    //FIXME
    if (response) {
        this.page_count = Math.floor(response.count / this.per_page)
        if (response.count % this.per_page)
            this.page_count += 1
    }
}
*/

var Response = exports.Response = function Response(response, page_size) {
    _classCallCheck(this, Response);

    //console.log('page size', page_size)
    this.status = parseInt(response.status);
    if (this.status == 206) {
        this.pagination = true;
    } else if (this.status != 200) console.warn("non 200 response: " + this.status + response.headers['content-location']);

    this.headers = response.headers;
    //console.log(this.headers)
    if (this.headers['content-range']) {
        var res = this.headers['content-range'].split('/');
        this.count = res[1] != '*' ? parseInt(res[1]) : null;
        res = res[0].split('-');
        this.first = parseInt(res[0]);
        this.last = parseInt(res[1]);

        if (page_size && this.count) {
            this.page_count = Math.floor(this.count / page_size);
            //if (this.count % page_size)
            //   this.page_count += 1
        } else this.page_count = null;
    }
    //console.log('page count', this.page_count)
    this.data = response.data;
};


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


},{}]},{},[4,5,1,3,2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImxpYi9BcHAuanMiLCJsaWIvRmV0Y2hPbmUuanMiLCJsaWIvRmV0Y2hlci5qcyIsImxpYi9Qb3N0Z3Jlc3QuanMiLCJsaWIvY29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gKHdpbmRvdy5SZWFjdCk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gKHdpbmRvdy5SZWFjdERPTSk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3Byb3BUeXBlcyA9ICh3aW5kb3cuUHJvcFR5cGVzKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9GZXRjaGVyID0gcmVxdWlyZSgnLi9GZXRjaGVyJyk7XG5cbnZhciBfRmV0Y2hlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GZXRjaGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgSXRlbSA9IGZ1bmN0aW9uIEl0ZW0ocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdsaScsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHByb3BzLmlcbiAgICApO1xufTtcbkl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIGk6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5cbnZhciBGZXRjaERhdGEgPSBmdW5jdGlvbiBGZXRjaERhdGEocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBudWxsLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdoMycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgJ2xvYWRlZCAuLi4uIDopJ1xuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICd1bCcsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgcHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLmtleSA9IGl0ZW0uaTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSXRlbSwgaXRlbSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbkZldGNoRGF0YS5wcm9wVHlwZXMgPSB7IGRhdGE6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQgfTtcblxudmFyIEZldGNoTG9hZCA9IGZ1bmN0aW9uIEZldGNoTG9hZCgpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBudWxsLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdoMycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgJ2xvYWRpbmcgLi4uLiA6fCdcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG52YXIgRmV0Y2hUaW1lZE91dCA9IGZ1bmN0aW9uIEZldGNoVGltZWRPdXQoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnaDMnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICdkYXRhIHNlcnZlciB0aW1lZCBvdXQgOi8nXG4gICAgICAgIClcbiAgICApO1xufTtcblxudmFyIEZldGNoRXJyb3IgPSBmdW5jdGlvbiBGZXRjaEVycm9yKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnaDMnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICdFcnJvciAnLFxuICAgICAgICAgICAgcHJvcHMuZXJyb3Iuc3RhdHVzLFxuICAgICAgICAgICAgJyA6KCdcbiAgICAgICAgKVxuICAgICk7XG59O1xuRmV0Y2hFcnJvci5wcm9wVHlwZXMgPSB7XG4gICAgZXJyb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbnZhciBGZXRjaFRlc3QgPSBmdW5jdGlvbiBGZXRjaFRlc3QocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmZXRjaC10ZXN0JyxcbiAgICAgICAgICAgIHN0eWxlOiB7IGJvcmRlcjogJzJweCBzb2xpZCBibHVlJywgcGFkZGluZzogJzFlbScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBtYXJnaW46ICcxZW0nLCB2ZXJ0aWNhbEFsaWduOiAndG9wJyB9XG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2gyJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogJ2JsdWUnLCBwYWRkaW5nOiAnMWVtJyB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvcHMudGl0bGVcbiAgICAgICAgKSxcbiAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICApO1xufTtcbkZldGNoVGVzdC5wcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXkuaXNSZXF1aXJlZFxufTtcblxudmFyIGhvc3QgPSAnaHR0cHM6Ly9wb3N0Z3Jlc3QtdGVzdC5jaGVzc2luZGV4Lm9yZyc7XG52YXIgaHJlZiA9IGhvc3QgKyAnL3Rlc3Rpbmc/bGltaXQ9NSc7XG52YXIgYmFkX2hyZWYgPSBob3N0ICsgJy9ub3RfZXhpc3QnO1xuXG52YXIgQXBwID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQXBwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEFwcCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFwcCk7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBcHAuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBcHApKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQXBwLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnZmV0Y2gtcGFnZScgfSxcbiAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2gyJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGhyZWY6ICdyZWFjdC1wb3N0Z3Jlc3QvQXBwLmpzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FwcCBzb3VyY2UnXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBGZXRjaFRlc3QsXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6ICdub3JtYWwnIH0sXG4gICAgICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9GZXRjaGVyMi5kZWZhdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IEZldGNoRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAzMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogRmV0Y2hMb2FkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZWRfb3V0OiBGZXRjaFRpbWVkT3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JlZF9vdXQ6IEZldGNoRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBGZXRjaFRlc3QsXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6ICdiYWQgdXJsJyB9LFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRmV0Y2hlcjIuZGVmYXVsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBGZXRjaERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBiYWRfaHJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IEZldGNoTG9hZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVkX291dDogRmV0Y2hUaW1lZE91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yZWRfb3V0OiBGZXRjaEVycm9yXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgRmV0Y2hUZXN0LFxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiAndGltZSBvdXQgaW4gMyBzZWNzJyB9LFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRmV0Y2hlcjIuZGVmYXVsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBGZXRjaERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMzAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IEZldGNoTG9hZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVkX291dDogRmV0Y2hUaW1lZE91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yZWRfb3V0OiBGZXRjaEVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3NpbXVsYXRlX2xhZzogMTAwMDBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBGZXRjaFRlc3QsXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6ICdlbXB0eSBvcHRpb25hbCBjb21wb25lbnRzJyB9LFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRmV0Y2hlcjIuZGVmYXVsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBGZXRjaERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3NpbXVsYXRlX2xhZzogMTAwMFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQXBwO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuXG5cbl9yZWFjdERvbTIuZGVmYXVsdC5yZW5kZXIoX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgbnVsbCxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChBcHAsIG51bGwpXG4pLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1BcHAuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSAod2luZG93LlJlYWN0KTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gKHdpbmRvdy5Qcm9wVHlwZXMpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX1Bvc3RncmVzdCA9IHJlcXVpcmUoJy4vUG9zdGdyZXN0Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEZldGNoZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhGZXRjaGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIF9jcmVhdGVDbGFzcyhGZXRjaGVyLCBbe1xuICAgICAgICBrZXk6ICdfaW5pdGlhbFN0YXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9pbml0aWFsU3RhdGUoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICAgICAgZmV0Y2hlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdGltZWRfb3V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBoYXNfZXJyb3I6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgZnVuY3Rpb24gRmV0Y2hlcihwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmV0Y2hlcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEZldGNoZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihGZXRjaGVyKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0gX3RoaXMuX2luaXRpYWxTdGF0ZSgpO1xuICAgICAgICBfdGhpcy5mZXRjaGVyID0gbmV3IF9Qb3N0Z3Jlc3QuRmV0Y2hlcigpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEZldGNoZXIsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5fZGVidWcgJiYgY29uc29sZS5sb2coJ0ZldGNoT25lOiBtb3VudGVkJyk7XG4gICAgICAgICAgICB0aGlzLl9mZXRjaCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKG5ld3Byb3BzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLl9kZWJ1ZyAmJiBjb25zb2xlLmxvZygnRmV0Y2hPbmU6IGRpZCB1cGRhdGUnKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5ocmVmID09PSBuZXdwcm9wcy5ocmVmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9pbml0aWFsU3RhdGUoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmV0Y2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnX2ZldGNoJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9mZXRjaCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLnByb3BzLl9kZWJ1ZyAmJiBjb25zb2xlLmxvZygnRmV0Y2hPbmU6IGZldGNoJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy50aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBjbG9jayB0byB0aW1lb3V0XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi5wcm9wcy5fZGVidWcgJiYgY29uc29sZS5sb2coJ0ZldGNoT25lOiB0aW1lZCBvdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpczIuc3RhdGUuZmV0Y2hlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgdGltZWRfb3V0OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5wcm9wcy50aW1lb3V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHggPSBmdW5jdGlvbiB4KCkge1xuICAgICAgICAgICAgICAgIF90aGlzMi5mZXRjaGVyLmdldChfdGhpczIucHJvcHMuaHJlZikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5fb25GZXRjaGVkKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnByb3BzLl9kZWJ1ZyAmJiBjb25zb2xlLmxvZygnRmV0Y2hPbmU6IGNhdWdodCBlcnJvcicpLCBfdGhpczIuc2V0U3RhdGUoeyBoYXNfZXJyb3I6IHRydWUsIGVycm9yOiBlcnJvciB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLl9zaW11bGF0ZV9sYWcpIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHgoKTtcbiAgICAgICAgICAgIH0sIHRoaXMucHJvcHMuX3NpbXVsYXRlX2xhZyk7ZWxzZSB4KCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbkZldGNoZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uRmV0Y2hlZChyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5fZGVidWcgJiYgY29uc29sZS5sb2coJ0ZldGNoT25lOiBvbkZldGNoZWQnKTtcblxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmZXRjaGVkOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgICAgICAgZmV0Y2hlZDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLl9kZWJ1ZyAmJiBjb25zb2xlLmxvZygnRmV0Y2hPbmU6IHJlbmRlcicsICdmZXRjaGVkOicsIHRoaXMuc3RhdGUuZmV0Y2hlZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmxvYWRpbmdfY29tcG9uZW50KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGFzX2Vycm9yKSByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5lcnJvcmVkX291dF9jb21wb25lbnQsIHsgZXJyb3I6IHRoaXMuc3RhdGUuZXJyb3IgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50aW1lZF9vdXQpIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLnRpbWVkX291dF9jb21wb25lbnQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmZldGNoZWQpIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmxvYWRpbmdfY29tcG9uZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMuY29tcG9uZW50LCB7IGRhdGE6IHRoaXMuc3RhdGUuZGF0YSB9KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBGZXRjaGVyO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuRmV0Y2hlci5wcm9wVHlwZXMgPSB7XG4gICAgY29tcG9uZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQuaXNSZXF1aXJlZCxcbiAgICBocmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgdGltZW91dDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBfZGVidWc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbC5pc1JlcXVpcmVkLFxuXG4gICAgbG9hZGluZ19jb21wb25lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgICB0aW1lZF9vdXRfY29tcG9uZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gICAgZXJyb3JlZF9vdXRfY29tcG9uZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gICAgX3NpbXVsYXRlX2xhZzogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJcbn07XG5GZXRjaGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aW1lb3V0OiAwLFxuICAgIF9kZWJ1ZzogZmFsc2UsXG4gICAgbG9hZGluZ19jb21wb25lbnQ6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ3Bvc3RncmVzdC1sb2FkaW5nLXdyYXBwZXInIH0pLFxuICAgIGVycm9yZWRfb3V0X2NvbXBvbmVudDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAncG9zdGdyZXN0LWVycm9yLXdyYXBwZXInIH0pLFxuICAgIHRpbWVkX291dF9jb21wb25lbnQ6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ3Bvc3RncmVzdC10aW1lZC1vdXQtd3JhcHBlcicgfSlcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBGZXRjaGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1GZXRjaE9uZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9ICh3aW5kb3cuUmVhY3QpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSAod2luZG93LlByb3BUeXBlcyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfUG9zdGdyZXN0ID0gcmVxdWlyZSgnLi9Qb3N0Z3Jlc3QnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgRmV0Y2hlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKEZldGNoZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgX2NyZWF0ZUNsYXNzKEZldGNoZXIsIFt7XG4gICAgICAgIGtleTogJ19pbml0aWFsU3RhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2luaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICAgICAgICBmZXRjaGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0aW1lZF9vdXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGhhc19lcnJvcjogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICBmdW5jdGlvbiBGZXRjaGVyKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGZXRjaGVyKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRmV0Y2hlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEZldGNoZXIpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSBfdGhpcy5faW5pdGlhbFN0YXRlKCk7XG4gICAgICAgIF90aGlzLmZldGNoZXIgPSBuZXcgX1Bvc3RncmVzdC5GZXRjaGVyKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRmV0Y2hlciwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLl9kZWJ1ZyAmJiBjb25zb2xlLmxvZygnRmV0Y2hPbmU6IG1vdW50ZWQnKTtcbiAgICAgICAgICAgIHRoaXMuX2ZldGNoKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUobmV3cHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuX2RlYnVnICYmIGNvbnNvbGUubG9nKCdGZXRjaE9uZTogZGlkIHVwZGF0ZScpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLmhyZWYgPT09IG5ld3Byb3BzLmhyZWYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuX2luaXRpYWxTdGF0ZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9mZXRjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfZmV0Y2gnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2ZldGNoKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMuX2RlYnVnICYmIGNvbnNvbGUubG9nKCdGZXRjaE9uZTogZmV0Y2gnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIGNsb2NrIHRvIHRpbWVvdXRcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnByb3BzLl9kZWJ1ZyAmJiBjb25zb2xlLmxvZygnRmV0Y2hPbmU6IHRpbWVkIG91dCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzMi5zdGF0ZS5mZXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoeyB0aW1lZF9vdXQ6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB0aGlzLnByb3BzLnRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgeCA9IGZ1bmN0aW9uIHgoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLmZldGNoZXIuZ2V0KF90aGlzMi5wcm9wcy5ocmVmKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLl9vbkZldGNoZWQocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIucHJvcHMuX2RlYnVnICYmIGNvbnNvbGUubG9nKCdGZXRjaE9uZTogY2F1Z2h0IGVycm9yJyksIF90aGlzMi5zZXRTdGF0ZSh7IGhhc19lcnJvcjogdHJ1ZSwgZXJyb3I6IGVycm9yIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuX3NpbXVsYXRlX2xhZykgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgeCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5wcm9wcy5fc2ltdWxhdGVfbGFnKTtlbHNlIHgoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uRmV0Y2hlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25GZXRjaGVkKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLl9kZWJ1ZyAmJiBjb25zb2xlLmxvZygnRmV0Y2hPbmU6IG9uRmV0Y2hlZCcpO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZldGNoZWQ6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgICAgICBmZXRjaGVkOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuX2RlYnVnICYmIGNvbnNvbGUubG9nKCdGZXRjaE9uZTogcmVuZGVyJywgJ2ZldGNoZWQ6JywgdGhpcy5zdGF0ZS5mZXRjaGVkKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGFzX2Vycm9yKSByZXR1cm4gdGhpcy5wcm9wcy5lcnJvcmVkX291dCA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMuZXJyb3JlZF9vdXQsIHsgZXJyb3I6IHRoaXMuc3RhdGUuZXJyb3IgfSkgOiBudWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudGltZWRfb3V0KSByZXR1cm4gdGhpcy5wcm9wcy50aW1lZF9vdXQgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLnRpbWVkX291dCkgOiBudWxsO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmZldGNoZWQpIHJldHVybiB0aGlzLnByb3BzLmxvYWRpbmcgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmxvYWRpbmcpIDogbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmNvbXBvbmVudCwgeyBkYXRhOiB0aGlzLnN0YXRlLmRhdGEgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRmV0Y2hlcjtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkZldGNoZXIucHJvcFR5cGVzID0ge1xuICAgIGNvbXBvbmVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50LmlzUmVxdWlyZWQsXG4gICAgaHJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIHRpbWVvdXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgX2RlYnVnOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCxcblxuICAgIGxvYWRpbmc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgICB0aW1lZF9vdXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgICBlcnJvcmVkX291dDogX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50LFxuICAgIF9zaW11bGF0ZV9sYWc6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXG59O1xuRmV0Y2hlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGltZW91dDogMCxcbiAgICBfZGVidWc6IGZhbHNlXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gRmV0Y2hlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmV0Y2hlci5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuUmVzcG9uc2UgPSBleHBvcnRzLkZldGNoZXIgPSBleHBvcnRzLlF1ZXJ5ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2F4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxudmFyIF9heGlvczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9heGlvcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBQYXJhbSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQYXJhbShvcCwgY29sdW1uLCB2YWwpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhcmFtKTtcblxuICAgICAgICB0aGlzLm9wID0gU3RyaW5nKG9wKTtcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBTdHJpbmcoY29sdW1uKTtcbiAgICAgICAgdGhpcy52YWwgPSBTdHJpbmcodmFsKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUGFyYW0sIFt7XG4gICAgICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uICsgJz0nICsgdGhpcy5vcCArICcuJyArIHRoaXMudmFsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd0b0hlYWRlcnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9IZWFkZXJzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFBhcmFtO1xufSgpO1xuXG52YXIgVmFsdWVQYXJhbSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBWYWx1ZVBhcmFtKG9wLCB2YWwpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZhbHVlUGFyYW0pO1xuXG4gICAgICAgIHRoaXMub3AgPSBTdHJpbmcob3ApO1xuICAgICAgICB0aGlzLnZhbCA9IFN0cmluZyh2YWwpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhWYWx1ZVBhcmFtLCBbe1xuICAgICAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wICsgJz0nICsgdGhpcy52YWw7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3RvSGVhZGVycycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b0hlYWRlcnMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVmFsdWVQYXJhbTtcbn0oKTtcblxudmFyIE9yZGVyUGFyYW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT3JkZXJQYXJhbShjb2x1bW4sIGFzYywgbnVsbHNfbGFzdCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgT3JkZXJQYXJhbSk7XG5cbiAgICAgICAgdGhpcy5jb2x1bW4gPSBTdHJpbmcoY29sdW1uKTtcbiAgICAgICAgdGhpcy5hc2MgPSBhc2MgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHRoaXMubnVsbHNfbGFzdCA9IG51bGxzX2xhc3QgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE9yZGVyUGFyYW0sIFt7XG4gICAgICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuICdvcmRlcj0nICsgdGhpcy5jb2x1bW4gKyAodGhpcy5hc2MgPyAnJyA6ICcuZGVzYycpICsgKHRoaXMubnVsbHNfbGFzdCA/ICcnIDogJy5udWxsc2xhc3QnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndG9IZWFkZXJzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvSGVhZGVycygpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBPcmRlclBhcmFtO1xufSgpO1xuXG52YXIgUGFnaW5hdGlvblBhcmFtID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBhZ2luYXRpb25QYXJhbShwYWdlLCBsaW1pdCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFnaW5hdGlvblBhcmFtKTtcblxuICAgICAgICB0aGlzLmxpbWl0ID0gTWF0aC5mbG9vcihOdW1iZXIobGltaXQpKTtcbiAgICAgICAgdGhpcy5wYWdlID0gTWF0aC5mbG9vcihOdW1iZXIocGFnZSkpO1xuXG4gICAgICAgIGlmICh0aGlzLmxpbWl0IDwgMSkgdGhyb3cgJ1BhZ2luYXRpb246IGxpbWl0IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAnO1xuICAgICAgICBpZiAodGhpcy5wYWdlIDwgMSkgdGhyb3cgJ1BhZ2luYXRpb246IHBhZ2UgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCc7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFBhZ2luYXRpb25QYXJhbSwgW3tcbiAgICAgICAga2V5OiAndG9TdHJpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3RvSGVhZGVycycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b0hlYWRlcnMoKSB7XG4gICAgICAgICAgICB2YXIgZmlyc3QgPSB0aGlzLmxpbWl0ICogKHRoaXMucGFnZSAtIDEpO1xuICAgICAgICAgICAgdmFyIGxhc3QgPSB0aGlzLmxpbWl0ICogdGhpcy5wYWdlIC0gMTtcbiAgICAgICAgICAgIHZhciBoZWFkZXJzID0ge307XG4gICAgICAgICAgICBoZWFkZXJzLlJhbmdlID0gZmlyc3QgKyAnLScgKyBsYXN0O1xuICAgICAgICAgICAgaGVhZGVycy5SZXN1bHRQYWdlU2l6ZSA9IHRoaXMubGltaXQ7XG4gICAgICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBQYWdpbmF0aW9uUGFyYW07XG59KCk7XG5cbnZhciBSYXdQYXJhbSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSYXdQYXJhbSh2YWx1ZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmF3UGFyYW0pO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSYXdQYXJhbSwgW3tcbiAgICAgICAga2V5OiAndG9TdHJpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndG9IZWFkZXJzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvSGVhZGVycygpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSYXdQYXJhbTtcbn0oKTtcblxudmFyIFF1ZXJ5ID0gZXhwb3J0cy5RdWVyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRdWVyeSgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFF1ZXJ5KTtcblxuICAgICAgICB0aGlzLnBhcmFtcyA9IFtdO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhRdWVyeSwgW3tcbiAgICAgICAga2V5OiAndG9TZWFyY2gnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9TZWFyY2goKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGFyYW1zKSByZXR1cm4gJyc7XG4gICAgICAgICAgICByZXR1cm4gJz8nICsgdGhpcy5wYXJhbXMubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJyYnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndG9IZWFkZXJzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvSGVhZGVycygpIHtcbiAgICAgICAgICAgIHZhciBoZWFkZXJzID0ge307XG4gICAgICAgICAgICB0aGlzLnBhcmFtcy5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihoZWFkZXJzLCB4LnRvSGVhZGVycygpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NsZWFyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICAgICAgdGhpcy5wYXJhbXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb3JkZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb3JkZXIoY29sdW1uKSB7XG4gICAgICAgICAgICB2YXIgYXNjID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuICAgICAgICAgICAgdmFyIG51bGxzX2xhc3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMucGFyYW1zLnB1c2gobmV3IE9yZGVyUGFyYW0oY29sdW1uLCBhc2MsIG51bGxzX2xhc3QpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwYWdpbmF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYWdpbmF0ZSgpIHtcbiAgICAgICAgICAgIHZhciBwYWdlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAxO1xuICAgICAgICAgICAgdmFyIGxpbWl0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAyMDtcblxuICAgICAgICAgICAgdGhpcy5wYXJhbXMucHVzaChuZXcgUGFnaW5hdGlvblBhcmFtKHBhZ2UsIGxpbWl0KSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmF3JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJhdyh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5wYXJhbXMucHVzaChuZXcgUmF3UGFyYW0odmFsdWUpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21iaW5lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbWJpbmUob3RoZXIpIHtcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLnB1c2gob3RoZXIucGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBRdWVyeTtcbn0oKTtcblxudmFyIG9wcyA9IFsnZXEnLCAnZ3QnLCAnbHQnLCAnZ3RlJywgJ2x0ZScsICdsaWtlJywgJ2lsaWtlJywgJ2lzJywgJ2luJywgJ25vdCcsICdmdHMnLCAncGxmdHMnLCAncGZodHMnXTtcblxub3BzLmZvckVhY2goZnVuY3Rpb24gKGZpbHRlcikge1xuICAgIHJldHVybiBRdWVyeS5wcm90b3R5cGVbZmlsdGVyXSA9IGZ1bmN0aW9uIGZpbHRlclZhbHVlKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMucGFyYW1zLnB1c2gobmV3IFBhcmFtKGZpbHRlciwgbmFtZSwgdmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn0pO1xuXG52YXIgdmFsdWVfb3BzID0gWydsaW1pdCcsICdvZmZzZXQnXTtcblxudmFsdWVfb3BzLmZvckVhY2goZnVuY3Rpb24gKGZpbHRlcikge1xuICAgIHJldHVybiBRdWVyeS5wcm90b3R5cGVbZmlsdGVyXSA9IGZ1bmN0aW9uIGZpbHRlclZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucGFyYW1zLnB1c2gobmV3IFZhbHVlUGFyYW0oZmlsdGVyLCB2YWx1ZSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xufSk7XG5cbnZhciBGZXRjaGVyID0gZXhwb3J0cy5GZXRjaGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZldGNoZXIoKSB7XG4gICAgICAgIHZhciBkZWJ1ZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZldGNoZXIpO1xuXG4gICAgICAgIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRmV0Y2hlciwgW3tcbiAgICAgICAga2V5OiAnZ2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldChocmVmKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgaGVhZGVycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICAgICAgICB2YXIgY291bnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG5cbiAgICAgICAgICAgIHZhciBjb25maWcgPSB7fTtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7IGhlYWRlcnM6IHt9IH07XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLmhlYWRlcnMsIGhlYWRlcnMpO1xuICAgICAgICAgICAgaWYgKGNvdW50KSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmhlYWRlcnMuUHJlZmVyID0gJ2NvdW50PWV4YWN0JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhocmVmLCBwYXJhbXMpXG5cbiAgICAgICAgICAgIC8vdGhpcy5kZWJ1ZyAmJiBjb25zb2xlLmxvZygnRmV0Y2hlci5nZXQnLCBocmVmLCBwYXJhbXMpXG4gICAgICAgICAgICByZXR1cm4gX2F4aW9zMi5kZWZhdWx0LmdldChocmVmLCBwYXJhbXMsIGNvbmZpZykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHJlc3BvbnNlLCBoZWFkZXJzLlJlc3VsdFBhZ2VTaXplKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbkVycm9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBuZXdfZXJyb3IgPSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiBlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5zdGF0dXMgfHwgZXJyb3IuZXJybm8sXG4gICAgICAgICAgICAgICAgc3RhdHVzTXNnOiBlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhICYmIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSB8fCBlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5zdGF0dXNUZXh0IHx8IGVycm9yLmNvZGUsXG4gICAgICAgICAgICAgICAgc3RhdHVzRGV0YWlsczogZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSAmJiBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbHMsXG4gICAgICAgICAgICAgICAgc3RhdHVzSGludDogZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSAmJiBlcnJvci5yZXNwb25zZS5kYXRhLmhpbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aHJvdyBuZXdfZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRmV0Y2hlcjtcbn0oKTtcblxuLypcbmNvdW50KHBhZ2UsIHJlc3BvbnNlKSB7XG4gICAgLy9GSVhNRVxuICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICB0aGlzLnBhZ2VfY291bnQgPSBNYXRoLmZsb29yKHJlc3BvbnNlLmNvdW50IC8gdGhpcy5wZXJfcGFnZSlcbiAgICAgICAgaWYgKHJlc3BvbnNlLmNvdW50ICUgdGhpcy5wZXJfcGFnZSlcbiAgICAgICAgICAgIHRoaXMucGFnZV9jb3VudCArPSAxXG4gICAgfVxufVxuKi9cblxudmFyIFJlc3BvbnNlID0gZXhwb3J0cy5SZXNwb25zZSA9IGZ1bmN0aW9uIFJlc3BvbnNlKHJlc3BvbnNlLCBwYWdlX3NpemUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVzcG9uc2UpO1xuXG4gICAgLy9jb25zb2xlLmxvZygncGFnZSBzaXplJywgcGFnZV9zaXplKVxuICAgIHRoaXMuc3RhdHVzID0gcGFyc2VJbnQocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjA2KSB7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyAhPSAyMDApIGNvbnNvbGUud2FybihcIm5vbiAyMDAgcmVzcG9uc2U6IFwiICsgdGhpcy5zdGF0dXMgKyByZXNwb25zZS5oZWFkZXJzWydjb250ZW50LWxvY2F0aW9uJ10pO1xuXG4gICAgdGhpcy5oZWFkZXJzID0gcmVzcG9uc2UuaGVhZGVycztcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuaGVhZGVycylcbiAgICBpZiAodGhpcy5oZWFkZXJzWydjb250ZW50LXJhbmdlJ10pIHtcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMuaGVhZGVyc1snY29udGVudC1yYW5nZSddLnNwbGl0KCcvJyk7XG4gICAgICAgIHRoaXMuY291bnQgPSByZXNbMV0gIT0gJyonID8gcGFyc2VJbnQocmVzWzFdKSA6IG51bGw7XG4gICAgICAgIHJlcyA9IHJlc1swXS5zcGxpdCgnLScpO1xuICAgICAgICB0aGlzLmZpcnN0ID0gcGFyc2VJbnQocmVzWzBdKTtcbiAgICAgICAgdGhpcy5sYXN0ID0gcGFyc2VJbnQocmVzWzFdKTtcblxuICAgICAgICBpZiAocGFnZV9zaXplICYmIHRoaXMuY291bnQpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZV9jb3VudCA9IE1hdGguZmxvb3IodGhpcy5jb3VudCAvIHBhZ2Vfc2l6ZSk7XG4gICAgICAgICAgICAvL2lmICh0aGlzLmNvdW50ICUgcGFnZV9zaXplKVxuICAgICAgICAgICAgLy8gICB0aGlzLnBhZ2VfY291bnQgKz0gMVxuICAgICAgICB9IGVsc2UgdGhpcy5wYWdlX2NvdW50ID0gbnVsbDtcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZygncGFnZSBjb3VudCcsIHRoaXMucGFnZV9jb3VudClcbiAgICB0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhO1xufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UG9zdGdyZXN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBDb25maWcgPSB7XG4gICAgbG9nOiBteWxvZyxcbiAgICB3YXJuOiBmdW5jdGlvbiB3YXJuKCkge1xuICAgICAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGJsYWNrbGlzdDogW11cbn07XG5cbmZ1bmN0aW9uIG15bG9nKG1zZykge1xuICAgIHZhciBvayA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBDb25maWcuYmxhY2tsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChtc2cudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKENvbmZpZy5ibGFja2xpc3RbaV0udG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIG9rID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAob2spIHtcbiAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICB9XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENvbmZpZztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uZmlnLmpzLm1hcCJdfQ==
