(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//import SyntaxHighlighter from 'react-syntax-highlighter';
//import { docco } from 'react-syntax-highlighter/styles/hljs';


var _react = (window.React);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (window.ReactDOM);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = (window.PropTypes);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = require('reactstrap');

var _reactHighlight = require('react-highlight');

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _reactDemo = require('react-demo');

var _reactDemo2 = _interopRequireDefault(_reactDemo);

var _withFetcher = require('./withFetcher');

var _withFetcher2 = _interopRequireDefault(_withFetcher);

var _PostgrestFetcher = require('./PostgrestFetcher');

var _PostgrestFetcher2 = _interopRequireDefault(_PostgrestFetcher);

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

var FetchSuccess = function FetchSuccess(props) {
    return _react2.default.createElement(
        'div',
        { className: 'fetch-wrapper' },
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
FetchSuccess.propTypes = {
    data: _propTypes2.default.object.isRequired,
    response: _propTypes2.default.object.isRequired
};

var FetchLoading = function FetchLoading() {
    return _react2.default.createElement(
        'div',
        { className: 'fetch-wrapper' },
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
        { className: 'fetch-wrapper' },
        _react2.default.createElement(
            'h3',
            null,
            'data server timed out :/'
        )
    );
};

var FetchFailed = function FetchFailed(props) {
    return _react2.default.createElement(
        'div',
        { className: 'fetch-wrapper' },
        _react2.default.createElement(
            'h3',
            null,
            'failed! ',
            props.error && props.error.status,
            ' :('
        )
    );
};
FetchFailed.propTypes = {
    error: _propTypes2.default.object.isRequired
};

var Fetcher = (0, _withFetcher2.default)(FetchSuccess, FetchLoading, FetchFailed, FetchTimedOut);
var EmptyFetcher = (0, _withFetcher2.default)(FetchSuccess);
var get = new _PostgrestFetcher2.default().get;

var host = 'https://postgrest-test.chessindex.org';
var href = host + '/testing?limit=5';
var bad_href = host + '/not_exist';

var DemoFetcher = function DemoFetcher(props) {
    return _react2.default.createElement(Fetcher, _extends({
        get: get
    }, props));
};

var DemoEmptyFetcher = function DemoEmptyFetcher(props) {
    return _react2.default.createElement(EmptyFetcher, _extends({
        get: get
    }, props));
};

var MyDemo = function (_React$Component) {
    _inherits(MyDemo, _React$Component);

    function MyDemo(props) {
        _classCallCheck(this, MyDemo);

        var _this = _possibleConstructorReturn(this, (MyDemo.__proto__ || Object.getPrototypeOf(MyDemo)).call(this, props));

        _this.toggle = _this.toggle.bind(_this);
        _this.state = { collapse: false };
        return _this;
    }

    _createClass(MyDemo, [{
        key: 'toggle',
        value: function toggle() {
            this.setState({ collapse: !this.state.collapse });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'mydemo=wrapper' },
                _react2.default.createElement(
                    _reactstrap.Card,
                    null,
                    _react2.default.createElement(
                        _reactstrap.CardBody,
                        null,
                        _react2.default.createElement(
                            _reactstrap.CardTitle,
                            null,
                            this.props.title
                        ),
                        _react2.default.createElement(_reactDemo2.default, {
                            target: this.props.target,
                            props: this.props.props
                        })
                    )
                )
            );
        }
    }]);

    return MyDemo;
}(_react2.default.Component);

var source = '\n\nimport React from \'react\';\nimport ReactDOM from \'react-dom\';\nimport PropTypes from \'prop-types\'\nimport { Card, CardBody, CardTitle} from \'reactstrap\';\n\nimport Demo, {props as P} from \'react-demo\'\n\nimport withFetcher from \'./withFetcher\'\nimport PGFetcher from \'./PostgrestFetcher\'\n\n\nconst Item = (props) => {return(\n    <li>{props.i}</li>\n)}\nItem.propTypes = {\n        i: PropTypes.number.isRequired,\n}\n\nconst FetchSuccess = (props) => {return(\n    <div className=\'fetch-wrapper\'>\n        <h3>loaded .... :)</h3>\n        <ul>\n            { props.data.map(item => {\n                item.key=item.i; \n                return React.createElement(Item, item)}\n            )}\n        </ul>\n    </div>\n)}\n\nFetchSuccess.propTypes = { data: PropTypes.object.isRequired, }\n\nconst FetchLoading = () => {return(\n    <div className=\'fetch-wrapper\'>\n        <h3>loading .... :|</h3>\n    </div>\n)}\n\nconst FetchTimedOut = () => {return(\n    <div className=\'fetch-wrapper\'>\n        <h3>data server timed out :/</h3>\n    </div>\n)}\n\nconst FetchFailed = (props) => {return(\n    <div className=\'fetch-wrapper\'>\n        <h3>failed! {props.error && props.error.status} :(</h3>\n    </div>\n)}\nFetchFailed.propTypes = { \n    error: PropTypes.object.isRequired,\n}\n\nconst Fetcher = withFetcher(FetchSuccess, FetchLoading, FetchFailed, FetchTimedOut)\nconst EmptyFetcher = withFetcher(FetchSuccess)\nconst get = new PGFetcher().get\n\nconst DemoFetcher = (props) => {return(\n    <Fetcher\n        get={get}\n        {...props}\n    />\n)}\n\nconst DemoEmptyFetcher = (props) => {return(\n    <EmptyFetcher\n        get={get}\n        {...props}\n    />\n)}\n';

_reactDom2.default.render(_react2.default.createElement(
    'div',
    { className: 'demo-page' },
    _react2.default.createElement(MyDemo, {
        title: 'Normal',
        target: DemoFetcher,
        props: {
            url: _reactDemo.props.string(href),
            onFetched: _reactDemo.props.callback.log(),
            _simulate_lag: _reactDemo.props.number(1000)
        }
    }),
    _react2.default.createElement(MyDemo, {
        title: 'Timed Out',
        target: DemoFetcher,
        props: {
            url: _reactDemo.props.string(href),
            timeout: _reactDemo.props.number(3000),
            _simulate_lag: _reactDemo.props.number(10000)
        }
    }),
    _react2.default.createElement(MyDemo, {
        title: 'Empty Optional Components',
        target: DemoEmptyFetcher,
        props: {
            url: _reactDemo.props.string(href),
            onFetched: _reactDemo.props.callback.log(),
            _simulate_lag: _reactDemo.props.number(1000)
        }
    }),
    _react2.default.createElement(MyDemo, {
        title: 'Fails',
        target: DemoFetcher,
        props: {
            url: _reactDemo.props.string(bad_href),
            onError: _reactDemo.props.callback.log(),
            _always_fail: _reactDemo.props.bool(true)
        }
    }),
    _react2.default.createElement(
        _reactHighlight2.default,
        { className: 'javascript' },
        source
    )
), document.querySelector('#app'));


},{"./PostgrestFetcher":2,"./withFetcher":5,"react-demo":"react-demo","react-highlight":"react-highlight","reactstrap":"reactstrap"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PostgrestResponse = function PostgrestResponse(response, page_size) {
    _classCallCheck(this, PostgrestResponse);

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

var PostgrestFetcher = function () {
    function PostgrestFetcher() {
        var debug = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        _classCallCheck(this, PostgrestFetcher);

        this.debug = debug;
    }

    _createClass(PostgrestFetcher, [{
        key: 'get',
        value: function get(url) {
            var _this = this;

            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


            /*
            if (count) {
                params.headers.Prefer = 'count=exact'
            }
            */
            //console.log(href, params)
            //this.debug && console.log('Fetcher.get', href, params)

            return _axios2.default.get(url, config).then(function (response) {
                return new PostgrestResponse(response, config.ResultPageSize);
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

    return PostgrestFetcher;
}();

exports.default = PostgrestFetcher;


},{"axios":"axios"}],3:[function(require,module,exports){
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


},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TestEmpty = exports.TestTimeOut = exports.TestFail = exports.TestNormal = undefined;

var _react = (window.React);

var _react2 = _interopRequireDefault(_react);

var _propTypes = (window.PropTypes);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withFetcher = require('./withFetcher');

var _withFetcher2 = _interopRequireDefault(_withFetcher);

var _PostgrestFetcher = require('./PostgrestFetcher');

var _PostgrestFetcher2 = _interopRequireDefault(_PostgrestFetcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var FetchSuccess = function FetchSuccess(props) {
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

FetchSuccess.propTypes = { data: _propTypes2.default.object.isRequired };

var FetchLoading = function FetchLoading() {
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

var FetchFailed = function FetchFailed(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            null,
            'failed! ',
            props.error.status,
            ' :('
        )
    );
};
FetchFailed.propTypes = {
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

var Fetcher = (0, _withFetcher2.default)(FetchSuccess, FetchLoading, FetchFailed, FetchTimedOut);
var FetchEmpty = (0, _withFetcher2.default)(FetchSuccess);
var get = new _PostgrestFetcher2.default().get;

var host = 'https://postgrest-test.chessindex.org';
var href = host + '/testing?limit=5';
var bad_href = host + '/not_exist';

var TestNormal = exports.TestNormal = function TestNormal() {
    return _react2.default.createElement(
        FetchTest,
        { title: 'normal' },
        _react2.default.createElement(Fetcher, {
            url: href,
            get: get,
            timeout: 3000,
            _simulate_lag: 1000
        })
    );
};

var TestFail = exports.TestFail = function TestFail() {
    return _react2.default.createElement(
        FetchTest,
        { title: 'bad url' },
        _react2.default.createElement(Fetcher, {
            url: bad_href,
            get: get,
            _simulate_lag: 1000
        })
    );
};

var TestTimeOut = exports.TestTimeOut = function TestTimeOut() {
    return _react2.default.createElement(
        FetchTest,
        { title: 'time out in 3 secs' },
        _react2.default.createElement(Fetcher, {
            url: href,
            get: get,
            timeout: 3000,
            _simulate_lag: 10000
        })
    );
};

var TestEmpty = exports.TestEmpty = function TestEmpty() {
    return _react2.default.createElement(
        FetchTest,
        { title: 'empty optional components' },
        _react2.default.createElement(FetchEmpty, {
            url: href,
            get: get,
            _simulate_lag: 1000
        })
    );
};


},{"./PostgrestFetcher":2,"./withFetcher":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = (window.React);

var _react2 = _interopRequireDefault(_react);

var _propTypes = (window.PropTypes);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fastDeepEqual = require('fast-deep-equal');

var _fastDeepEqual2 = _interopRequireDefault(_fastDeepEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withFetcher = function withFetcher(Success, Loading, Failed, TimedOut) {
    var WithFetcher = function (_React$Component) {
        _inherits(WithFetcher, _React$Component);

        _createClass(WithFetcher, [{
            key: '_initialState',
            value: function _initialState() {
                return {
                    data: null,
                    response: null,
                    fetched: false,
                    timed_out: false,
                    has_error: this.props._always_fail || false
                };
            }
        }]);

        function WithFetcher(props) {
            _classCallCheck(this, WithFetcher);

            var _this = _possibleConstructorReturn(this, (WithFetcher.__proto__ || Object.getPrototypeOf(WithFetcher)).call(this, props));

            _this.state = _this._initialState();
            console.debug('state eq', _this.state == _this._initialState(), _this.state === _this._initialState());
            return _this;
        }

        _createClass(WithFetcher, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.props._debug && console.log('withFetcher: mounted');
                this._fetch();
            }
        }, {
            key: 'componentDidUpdate',
            value: function componentDidUpdate(newprops) {
                this.props._debug && console.log('withFetcher: did update');
                if (!this.props.url === newprops.url || !(0, _fastDeepEqual2.default)(this.props.url_config, newprops.url_config)) {
                    this.setState(this._initialState());
                    this._fetch();
                }
            }
        }, {
            key: '_fetch',
            value: function _fetch() {
                var _this2 = this;

                this.props._debug && console.log('withFetcher: fetch');
                if (this.props.timeout) {
                    // set the clock to timeout
                    setTimeout(function () {
                        _this2.props._debug && console.log('withFetcher: timed out');
                        if (!_this2.state.fetched) {
                            _this2.setState({ timed_out: true });
                        }
                    }, this.props.timeout);
                }

                var x = function x() {
                    var config = _this2.props.url_config || {};
                    _this2.props.get(_this2.props.url, config).then(function (response) {
                        return _this2._onFetched(response);
                    }).catch(function (error) {
                        _this2.props._debug && console.log('withFetcher: caught error'), _this2.setState({ has_error: true, error: error });
                        _this2.props.onError & _this2.props.onError(error);
                    });
                };

                if (this.props._simulate_lag) setTimeout(function () {
                    x();
                }, this.props._simulate_lag);else x();
            }
        }, {
            key: '_onFetched',
            value: function _onFetched(response) {
                this.props._debug && console.log('withFetcher: onFetched');

                if (!response || !response.data) {
                    this.setState({ fetched: true });
                    return;
                }
                this.setState({
                    data: response.data,
                    fetched: true
                });
                this.props.onFetched && this.props.onFetched(response.data);
            }
        }, {
            key: 'render',
            value: function render() {
                this.props._debug && console.log('withFetcher: render', 'fetched:', this.state.fetched);

                if (this.state.has_error) return Failed ? _react2.default.createElement(Failed, { error: this.state.error }) : null;else if (this.state.timed_out) return TimedOut ? _react2.default.createElement(TimedOut, null) : null;else if (!this.state.fetched) return Loading ? _react2.default.createElement(Loading, null) : null;else return _react2.default.createElement(Success, { response: this.state.response, data: this.state.data });
            }
        }]);

        return WithFetcher;
    }(_react2.default.Component);

    WithFetcher.propTypes = {

        //req
        url: _propTypes2.default.string.isRequired,
        get: _propTypes2.default.func.isRequired,

        //default reqs
        timeout: _propTypes2.default.number.isRequired,
        _debug: _propTypes2.default.bool.isRequired,
        _always_fail: _propTypes2.default.bool.isRequired,

        //optional
        onFetched: _propTypes2.default.function,
        onFail: _propTypes2.default.function,
        url_config: _propTypes2.default.object,
        _simulate_lag: _propTypes2.default.number

    };
    WithFetcher.defaultProps = {
        timeout: 0,
        _debug: false,
        _always_fail: false
    };


    return WithFetcher;
};

exports.default = withFetcher;


},{"fast-deep-equal":"fast-deep-equal"}]},{},[5,3,2,4,1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImxpYi9BcHAuanMiLCJsaWIvUG9zdGdyZXN0RmV0Y2hlci5qcyIsImxpYi9jb25maWcuanMiLCJsaWIvdGVzdC5qcyIsImxpYi93aXRoRmV0Y2hlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuLy9pbXBvcnQgU3ludGF4SGlnaGxpZ2h0ZXIgZnJvbSAncmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyJztcbi8vaW1wb3J0IHsgZG9jY28gfSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvc3R5bGVzL2hsanMnO1xuXG5cbnZhciBfcmVhY3QgPSAod2luZG93LlJlYWN0KTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSAod2luZG93LlJlYWN0RE9NKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfcHJvcFR5cGVzID0gKHdpbmRvdy5Qcm9wVHlwZXMpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0c3RyYXAgPSByZXF1aXJlKCdyZWFjdHN0cmFwJyk7XG5cbnZhciBfcmVhY3RIaWdobGlnaHQgPSByZXF1aXJlKCdyZWFjdC1oaWdobGlnaHQnKTtcblxudmFyIF9yZWFjdEhpZ2hsaWdodDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEhpZ2hsaWdodCk7XG5cbnZhciBfcmVhY3REZW1vID0gcmVxdWlyZSgncmVhY3QtZGVtbycpO1xuXG52YXIgX3JlYWN0RGVtbzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERlbW8pO1xuXG52YXIgX3dpdGhGZXRjaGVyID0gcmVxdWlyZSgnLi93aXRoRmV0Y2hlcicpO1xuXG52YXIgX3dpdGhGZXRjaGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhGZXRjaGVyKTtcblxudmFyIF9Qb3N0Z3Jlc3RGZXRjaGVyID0gcmVxdWlyZSgnLi9Qb3N0Z3Jlc3RGZXRjaGVyJyk7XG5cbnZhciBfUG9zdGdyZXN0RmV0Y2hlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb3N0Z3Jlc3RGZXRjaGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgSXRlbSA9IGZ1bmN0aW9uIEl0ZW0ocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdsaScsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHByb3BzLmlcbiAgICApO1xufTtcbkl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIGk6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5cbnZhciBGZXRjaFN1Y2Nlc3MgPSBmdW5jdGlvbiBGZXRjaFN1Y2Nlc3MocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2ZldGNoLXdyYXBwZXInIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2gzJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAnbG9hZGVkIC4uLi4gOiknXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3VsJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBwcm9wcy5kYXRhLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0ua2V5ID0gaXRlbS5pO1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChJdGVtLCBpdGVtKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcbkZldGNoU3VjY2Vzcy5wcm9wVHlwZXMgPSB7XG4gICAgZGF0YTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICByZXNwb25zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxudmFyIEZldGNoTG9hZGluZyA9IGZ1bmN0aW9uIEZldGNoTG9hZGluZygpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2ZldGNoLXdyYXBwZXInIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2gzJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAnbG9hZGluZyAuLi4uIDp8J1xuICAgICAgICApXG4gICAgKTtcbn07XG5cbnZhciBGZXRjaFRpbWVkT3V0ID0gZnVuY3Rpb24gRmV0Y2hUaW1lZE91dCgpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2ZldGNoLXdyYXBwZXInIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2gzJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAnZGF0YSBzZXJ2ZXIgdGltZWQgb3V0IDovJ1xuICAgICAgICApXG4gICAgKTtcbn07XG5cbnZhciBGZXRjaEZhaWxlZCA9IGZ1bmN0aW9uIEZldGNoRmFpbGVkKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdmZXRjaC13cmFwcGVyJyB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdoMycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgJ2ZhaWxlZCEgJyxcbiAgICAgICAgICAgIHByb3BzLmVycm9yICYmIHByb3BzLmVycm9yLnN0YXR1cyxcbiAgICAgICAgICAgICcgOignXG4gICAgICAgIClcbiAgICApO1xufTtcbkZldGNoRmFpbGVkLnByb3BUeXBlcyA9IHtcbiAgICBlcnJvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxudmFyIEZldGNoZXIgPSAoMCwgX3dpdGhGZXRjaGVyMi5kZWZhdWx0KShGZXRjaFN1Y2Nlc3MsIEZldGNoTG9hZGluZywgRmV0Y2hGYWlsZWQsIEZldGNoVGltZWRPdXQpO1xudmFyIEVtcHR5RmV0Y2hlciA9ICgwLCBfd2l0aEZldGNoZXIyLmRlZmF1bHQpKEZldGNoU3VjY2Vzcyk7XG52YXIgZ2V0ID0gbmV3IF9Qb3N0Z3Jlc3RGZXRjaGVyMi5kZWZhdWx0KCkuZ2V0O1xuXG52YXIgaG9zdCA9ICdodHRwczovL3Bvc3RncmVzdC10ZXN0LmNoZXNzaW5kZXgub3JnJztcbnZhciBocmVmID0gaG9zdCArICcvdGVzdGluZz9saW1pdD01JztcbnZhciBiYWRfaHJlZiA9IGhvc3QgKyAnL25vdF9leGlzdCc7XG5cbnZhciBEZW1vRmV0Y2hlciA9IGZ1bmN0aW9uIERlbW9GZXRjaGVyKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEZldGNoZXIsIF9leHRlbmRzKHtcbiAgICAgICAgZ2V0OiBnZXRcbiAgICB9LCBwcm9wcykpO1xufTtcblxudmFyIERlbW9FbXB0eUZldGNoZXIgPSBmdW5jdGlvbiBEZW1vRW1wdHlGZXRjaGVyKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEVtcHR5RmV0Y2hlciwgX2V4dGVuZHMoe1xuICAgICAgICBnZXQ6IGdldFxuICAgIH0sIHByb3BzKSk7XG59O1xuXG52YXIgTXlEZW1vID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoTXlEZW1vLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIE15RGVtbyhwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTXlEZW1vKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTXlEZW1vLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTXlEZW1vKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLnRvZ2dsZSA9IF90aGlzLnRvZ2dsZS5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7IGNvbGxhcHNlOiBmYWxzZSB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE15RGVtbywgW3tcbiAgICAgICAga2V5OiAndG9nZ2xlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xsYXBzZTogIXRoaXMuc3RhdGUuY29sbGFwc2UgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdteWRlbW89d3JhcHBlcicgfSxcbiAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0c3RyYXAuQ2FyZCxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3RzdHJhcC5DYXJkQm9keSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVhY3RzdHJhcC5DYXJkVGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0RGVtbzIuZGVmYXVsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5wcm9wcy50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMucHJvcHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE15RGVtbztcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbnZhciBzb3VyY2UgPSAnXFxuXFxuaW1wb3J0IFJlYWN0IGZyb20gXFwncmVhY3RcXCc7XFxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXFwncmVhY3QtZG9tXFwnO1xcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcXCdwcm9wLXR5cGVzXFwnXFxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENhcmRUaXRsZX0gZnJvbSBcXCdyZWFjdHN0cmFwXFwnO1xcblxcbmltcG9ydCBEZW1vLCB7cHJvcHMgYXMgUH0gZnJvbSBcXCdyZWFjdC1kZW1vXFwnXFxuXFxuaW1wb3J0IHdpdGhGZXRjaGVyIGZyb20gXFwnLi93aXRoRmV0Y2hlclxcJ1xcbmltcG9ydCBQR0ZldGNoZXIgZnJvbSBcXCcuL1Bvc3RncmVzdEZldGNoZXJcXCdcXG5cXG5cXG5jb25zdCBJdGVtID0gKHByb3BzKSA9PiB7cmV0dXJuKFxcbiAgICA8bGk+e3Byb3BzLml9PC9saT5cXG4pfVxcbkl0ZW0ucHJvcFR5cGVzID0ge1xcbiAgICAgICAgaTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxcbn1cXG5cXG5jb25zdCBGZXRjaFN1Y2Nlc3MgPSAocHJvcHMpID0+IHtyZXR1cm4oXFxuICAgIDxkaXYgY2xhc3NOYW1lPVxcJ2ZldGNoLXdyYXBwZXJcXCc+XFxuICAgICAgICA8aDM+bG9hZGVkIC4uLi4gOik8L2gzPlxcbiAgICAgICAgPHVsPlxcbiAgICAgICAgICAgIHsgcHJvcHMuZGF0YS5tYXAoaXRlbSA9PiB7XFxuICAgICAgICAgICAgICAgIGl0ZW0ua2V5PWl0ZW0uaTsgXFxuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEl0ZW0sIGl0ZW0pfVxcbiAgICAgICAgICAgICl9XFxuICAgICAgICA8L3VsPlxcbiAgICA8L2Rpdj5cXG4pfVxcblxcbkZldGNoU3VjY2Vzcy5wcm9wVHlwZXMgPSB7IGRhdGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgfVxcblxcbmNvbnN0IEZldGNoTG9hZGluZyA9ICgpID0+IHtyZXR1cm4oXFxuICAgIDxkaXYgY2xhc3NOYW1lPVxcJ2ZldGNoLXdyYXBwZXJcXCc+XFxuICAgICAgICA8aDM+bG9hZGluZyAuLi4uIDp8PC9oMz5cXG4gICAgPC9kaXY+XFxuKX1cXG5cXG5jb25zdCBGZXRjaFRpbWVkT3V0ID0gKCkgPT4ge3JldHVybihcXG4gICAgPGRpdiBjbGFzc05hbWU9XFwnZmV0Y2gtd3JhcHBlclxcJz5cXG4gICAgICAgIDxoMz5kYXRhIHNlcnZlciB0aW1lZCBvdXQgOi88L2gzPlxcbiAgICA8L2Rpdj5cXG4pfVxcblxcbmNvbnN0IEZldGNoRmFpbGVkID0gKHByb3BzKSA9PiB7cmV0dXJuKFxcbiAgICA8ZGl2IGNsYXNzTmFtZT1cXCdmZXRjaC13cmFwcGVyXFwnPlxcbiAgICAgICAgPGgzPmZhaWxlZCEge3Byb3BzLmVycm9yICYmIHByb3BzLmVycm9yLnN0YXR1c30gOig8L2gzPlxcbiAgICA8L2Rpdj5cXG4pfVxcbkZldGNoRmFpbGVkLnByb3BUeXBlcyA9IHsgXFxuICAgIGVycm9yOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXFxufVxcblxcbmNvbnN0IEZldGNoZXIgPSB3aXRoRmV0Y2hlcihGZXRjaFN1Y2Nlc3MsIEZldGNoTG9hZGluZywgRmV0Y2hGYWlsZWQsIEZldGNoVGltZWRPdXQpXFxuY29uc3QgRW1wdHlGZXRjaGVyID0gd2l0aEZldGNoZXIoRmV0Y2hTdWNjZXNzKVxcbmNvbnN0IGdldCA9IG5ldyBQR0ZldGNoZXIoKS5nZXRcXG5cXG5jb25zdCBEZW1vRmV0Y2hlciA9IChwcm9wcykgPT4ge3JldHVybihcXG4gICAgPEZldGNoZXJcXG4gICAgICAgIGdldD17Z2V0fVxcbiAgICAgICAgey4uLnByb3BzfVxcbiAgICAvPlxcbil9XFxuXFxuY29uc3QgRGVtb0VtcHR5RmV0Y2hlciA9IChwcm9wcykgPT4ge3JldHVybihcXG4gICAgPEVtcHR5RmV0Y2hlclxcbiAgICAgICAgZ2V0PXtnZXR9XFxuICAgICAgICB7Li4ucHJvcHN9XFxuICAgIC8+XFxuKX1cXG4nO1xuXG5fcmVhY3REb20yLmRlZmF1bHQucmVuZGVyKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHsgY2xhc3NOYW1lOiAnZGVtby1wYWdlJyB9LFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE15RGVtbywge1xuICAgICAgICB0aXRsZTogJ05vcm1hbCcsXG4gICAgICAgIHRhcmdldDogRGVtb0ZldGNoZXIsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB1cmw6IF9yZWFjdERlbW8ucHJvcHMuc3RyaW5nKGhyZWYpLFxuICAgICAgICAgICAgb25GZXRjaGVkOiBfcmVhY3REZW1vLnByb3BzLmNhbGxiYWNrLmxvZygpLFxuICAgICAgICAgICAgX3NpbXVsYXRlX2xhZzogX3JlYWN0RGVtby5wcm9wcy5udW1iZXIoMTAwMClcbiAgICAgICAgfVxuICAgIH0pLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE15RGVtbywge1xuICAgICAgICB0aXRsZTogJ1RpbWVkIE91dCcsXG4gICAgICAgIHRhcmdldDogRGVtb0ZldGNoZXIsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB1cmw6IF9yZWFjdERlbW8ucHJvcHMuc3RyaW5nKGhyZWYpLFxuICAgICAgICAgICAgdGltZW91dDogX3JlYWN0RGVtby5wcm9wcy5udW1iZXIoMzAwMCksXG4gICAgICAgICAgICBfc2ltdWxhdGVfbGFnOiBfcmVhY3REZW1vLnByb3BzLm51bWJlcigxMDAwMClcbiAgICAgICAgfVxuICAgIH0pLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE15RGVtbywge1xuICAgICAgICB0aXRsZTogJ0VtcHR5IE9wdGlvbmFsIENvbXBvbmVudHMnLFxuICAgICAgICB0YXJnZXQ6IERlbW9FbXB0eUZldGNoZXIsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB1cmw6IF9yZWFjdERlbW8ucHJvcHMuc3RyaW5nKGhyZWYpLFxuICAgICAgICAgICAgb25GZXRjaGVkOiBfcmVhY3REZW1vLnByb3BzLmNhbGxiYWNrLmxvZygpLFxuICAgICAgICAgICAgX3NpbXVsYXRlX2xhZzogX3JlYWN0RGVtby5wcm9wcy5udW1iZXIoMTAwMClcbiAgICAgICAgfVxuICAgIH0pLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE15RGVtbywge1xuICAgICAgICB0aXRsZTogJ0ZhaWxzJyxcbiAgICAgICAgdGFyZ2V0OiBEZW1vRmV0Y2hlcixcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHVybDogX3JlYWN0RGVtby5wcm9wcy5zdHJpbmcoYmFkX2hyZWYpLFxuICAgICAgICAgICAgb25FcnJvcjogX3JlYWN0RGVtby5wcm9wcy5jYWxsYmFjay5sb2coKSxcbiAgICAgICAgICAgIF9hbHdheXNfZmFpbDogX3JlYWN0RGVtby5wcm9wcy5ib29sKHRydWUpXG4gICAgICAgIH1cbiAgICB9KSxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SGlnaGxpZ2h0Mi5kZWZhdWx0LFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2phdmFzY3JpcHQnIH0sXG4gICAgICAgIHNvdXJjZVxuICAgIClcbiksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFwcC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbnZhciBfYXhpb3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXhpb3MpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUG9zdGdyZXN0UmVzcG9uc2UgPSBmdW5jdGlvbiBQb3N0Z3Jlc3RSZXNwb25zZShyZXNwb25zZSwgcGFnZV9zaXplKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvc3RncmVzdFJlc3BvbnNlKTtcblxuICAgIC8vY29uc29sZS5sb2coJ3BhZ2Ugc2l6ZScsIHBhZ2Vfc2l6ZSlcbiAgICB0aGlzLnN0YXR1cyA9IHBhcnNlSW50KHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgaWYgKHRoaXMuc3RhdHVzID09IDIwNikge1xuICAgICAgICB0aGlzLnBhZ2luYXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgIT0gMjAwKSBjb25zb2xlLndhcm4oXCJub24gMjAwIHJlc3BvbnNlOiBcIiArIHRoaXMuc3RhdHVzICsgcmVzcG9uc2UuaGVhZGVyc1snY29udGVudC1sb2NhdGlvbiddKTtcblxuICAgIHRoaXMuaGVhZGVycyA9IHJlc3BvbnNlLmhlYWRlcnM7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmhlYWRlcnMpXG4gICAgaWYgKHRoaXMuaGVhZGVyc1snY29udGVudC1yYW5nZSddKSB7XG4gICAgICAgIHZhciByZXMgPSB0aGlzLmhlYWRlcnNbJ2NvbnRlbnQtcmFuZ2UnXS5zcGxpdCgnLycpO1xuICAgICAgICB0aGlzLmNvdW50ID0gcmVzWzFdICE9ICcqJyA/IHBhcnNlSW50KHJlc1sxXSkgOiBudWxsO1xuICAgICAgICByZXMgPSByZXNbMF0uc3BsaXQoJy0nKTtcbiAgICAgICAgdGhpcy5maXJzdCA9IHBhcnNlSW50KHJlc1swXSk7XG4gICAgICAgIHRoaXMubGFzdCA9IHBhcnNlSW50KHJlc1sxXSk7XG5cbiAgICAgICAgaWYgKHBhZ2Vfc2l6ZSAmJiB0aGlzLmNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VfY291bnQgPSBNYXRoLmZsb29yKHRoaXMuY291bnQgLyBwYWdlX3NpemUpO1xuICAgICAgICAgICAgLy9pZiAodGhpcy5jb3VudCAlIHBhZ2Vfc2l6ZSlcbiAgICAgICAgICAgIC8vICAgdGhpcy5wYWdlX2NvdW50ICs9IDFcbiAgICAgICAgfSBlbHNlIHRoaXMucGFnZV9jb3VudCA9IG51bGw7XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coJ3BhZ2UgY291bnQnLCB0aGlzLnBhZ2VfY291bnQpXG4gICAgdGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YTtcbn07XG5cbnZhciBQb3N0Z3Jlc3RGZXRjaGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBvc3RncmVzdEZldGNoZXIoKSB7XG4gICAgICAgIHZhciBkZWJ1ZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvc3RncmVzdEZldGNoZXIpO1xuXG4gICAgICAgIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUG9zdGdyZXN0RmV0Y2hlciwgW3tcbiAgICAgICAga2V5OiAnZ2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldCh1cmwpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBpZiAoY291bnQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuaGVhZGVycy5QcmVmZXIgPSAnY291bnQ9ZXhhY3QnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhocmVmLCBwYXJhbXMpXG4gICAgICAgICAgICAvL3RoaXMuZGVidWcgJiYgY29uc29sZS5sb2coJ0ZldGNoZXIuZ2V0JywgaHJlZiwgcGFyYW1zKVxuXG4gICAgICAgICAgICByZXR1cm4gX2F4aW9zMi5kZWZhdWx0LmdldCh1cmwsIGNvbmZpZykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFBvc3RncmVzdFJlc3BvbnNlKHJlc3BvbnNlLCBjb25maWcuUmVzdWx0UGFnZVNpemUpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uRXJyb3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xuICAgICAgICAgICAgdmFyIG5ld19lcnJvciA9IHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1cyB8fCBlcnJvci5lcnJubyxcbiAgICAgICAgICAgICAgICBzdGF0dXNNc2c6IGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlIHx8IGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1c1RleHQgfHwgZXJyb3IuY29kZSxcbiAgICAgICAgICAgICAgICBzdGF0dXNEZXRhaWxzOiBlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhICYmIGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlscyxcbiAgICAgICAgICAgICAgICBzdGF0dXNIaW50OiBlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhICYmIGVycm9yLnJlc3BvbnNlLmRhdGEuaGludFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRocm93IG5ld19lcnJvcjtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBQb3N0Z3Jlc3RGZXRjaGVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQb3N0Z3Jlc3RGZXRjaGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qb3N0Z3Jlc3RGZXRjaGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBDb25maWcgPSB7XG4gICAgbG9nOiBteWxvZyxcbiAgICB3YXJuOiBmdW5jdGlvbiB3YXJuKCkge1xuICAgICAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGJsYWNrbGlzdDogW11cbn07XG5cbmZ1bmN0aW9uIG15bG9nKG1zZykge1xuICAgIHZhciBvayA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBDb25maWcuYmxhY2tsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChtc2cudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKENvbmZpZy5ibGFja2xpc3RbaV0udG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIG9rID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAob2spIHtcbiAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICB9XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENvbmZpZztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uZmlnLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5UZXN0RW1wdHkgPSBleHBvcnRzLlRlc3RUaW1lT3V0ID0gZXhwb3J0cy5UZXN0RmFpbCA9IGV4cG9ydHMuVGVzdE5vcm1hbCA9IHVuZGVmaW5lZDtcblxudmFyIF9yZWFjdCA9ICh3aW5kb3cuUmVhY3QpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSAod2luZG93LlByb3BUeXBlcyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfd2l0aEZldGNoZXIgPSByZXF1aXJlKCcuL3dpdGhGZXRjaGVyJyk7XG5cbnZhciBfd2l0aEZldGNoZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aEZldGNoZXIpO1xuXG52YXIgX1Bvc3RncmVzdEZldGNoZXIgPSByZXF1aXJlKCcuL1Bvc3RncmVzdEZldGNoZXInKTtcblxudmFyIF9Qb3N0Z3Jlc3RGZXRjaGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Bvc3RncmVzdEZldGNoZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgSXRlbSA9IGZ1bmN0aW9uIEl0ZW0ocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdsaScsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHByb3BzLmlcbiAgICApO1xufTtcbkl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIGk6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5cbnZhciBGZXRjaFN1Y2Nlc3MgPSBmdW5jdGlvbiBGZXRjaFN1Y2Nlc3MocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBudWxsLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdoMycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgJ2xvYWRlZCAuLi4uIDopJ1xuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICd1bCcsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgcHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLmtleSA9IGl0ZW0uaTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSXRlbSwgaXRlbSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbkZldGNoU3VjY2Vzcy5wcm9wVHlwZXMgPSB7IGRhdGE6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQgfTtcblxudmFyIEZldGNoTG9hZGluZyA9IGZ1bmN0aW9uIEZldGNoTG9hZGluZygpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBudWxsLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdoMycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgJ2xvYWRpbmcgLi4uLiA6fCdcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG52YXIgRmV0Y2hUaW1lZE91dCA9IGZ1bmN0aW9uIEZldGNoVGltZWRPdXQoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnaDMnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICdkYXRhIHNlcnZlciB0aW1lZCBvdXQgOi8nXG4gICAgICAgIClcbiAgICApO1xufTtcblxudmFyIEZldGNoRmFpbGVkID0gZnVuY3Rpb24gRmV0Y2hGYWlsZWQocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBudWxsLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdoMycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgJ2ZhaWxlZCEgJyxcbiAgICAgICAgICAgIHByb3BzLmVycm9yLnN0YXR1cyxcbiAgICAgICAgICAgICcgOignXG4gICAgICAgIClcbiAgICApO1xufTtcbkZldGNoRmFpbGVkLnByb3BUeXBlcyA9IHtcbiAgICBlcnJvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxudmFyIEZldGNoVGVzdCA9IGZ1bmN0aW9uIEZldGNoVGVzdChwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2ZldGNoLXRlc3QnLFxuICAgICAgICAgICAgc3R5bGU6IHsgYm9yZGVyOiAnMnB4IHNvbGlkIGJsdWUnLCBwYWRkaW5nOiAnMWVtJywgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIG1hcmdpbjogJzFlbScsIHZlcnRpY2FsQWxpZ246ICd0b3AnIH1cbiAgICAgICAgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnaDInLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiAnYmx1ZScsIHBhZGRpbmc6ICcxZW0nIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9wcy50aXRsZVxuICAgICAgICApLFxuICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICk7XG59O1xuRmV0Y2hUZXN0LnByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheS5pc1JlcXVpcmVkXG59O1xuXG52YXIgRmV0Y2hlciA9ICgwLCBfd2l0aEZldGNoZXIyLmRlZmF1bHQpKEZldGNoU3VjY2VzcywgRmV0Y2hMb2FkaW5nLCBGZXRjaEZhaWxlZCwgRmV0Y2hUaW1lZE91dCk7XG52YXIgRmV0Y2hFbXB0eSA9ICgwLCBfd2l0aEZldGNoZXIyLmRlZmF1bHQpKEZldGNoU3VjY2Vzcyk7XG52YXIgZ2V0ID0gbmV3IF9Qb3N0Z3Jlc3RGZXRjaGVyMi5kZWZhdWx0KCkuZ2V0O1xuXG52YXIgaG9zdCA9ICdodHRwczovL3Bvc3RncmVzdC10ZXN0LmNoZXNzaW5kZXgub3JnJztcbnZhciBocmVmID0gaG9zdCArICcvdGVzdGluZz9saW1pdD01JztcbnZhciBiYWRfaHJlZiA9IGhvc3QgKyAnL25vdF9leGlzdCc7XG5cbnZhciBUZXN0Tm9ybWFsID0gZXhwb3J0cy5UZXN0Tm9ybWFsID0gZnVuY3Rpb24gVGVzdE5vcm1hbCgpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEZldGNoVGVzdCxcbiAgICAgICAgeyB0aXRsZTogJ25vcm1hbCcgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRmV0Y2hlciwge1xuICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgZ2V0OiBnZXQsXG4gICAgICAgICAgICB0aW1lb3V0OiAzMDAwLFxuICAgICAgICAgICAgX3NpbXVsYXRlX2xhZzogMTAwMFxuICAgICAgICB9KVxuICAgICk7XG59O1xuXG52YXIgVGVzdEZhaWwgPSBleHBvcnRzLlRlc3RGYWlsID0gZnVuY3Rpb24gVGVzdEZhaWwoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBGZXRjaFRlc3QsXG4gICAgICAgIHsgdGl0bGU6ICdiYWQgdXJsJyB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChGZXRjaGVyLCB7XG4gICAgICAgICAgICB1cmw6IGJhZF9ocmVmLFxuICAgICAgICAgICAgZ2V0OiBnZXQsXG4gICAgICAgICAgICBfc2ltdWxhdGVfbGFnOiAxMDAwXG4gICAgICAgIH0pXG4gICAgKTtcbn07XG5cbnZhciBUZXN0VGltZU91dCA9IGV4cG9ydHMuVGVzdFRpbWVPdXQgPSBmdW5jdGlvbiBUZXN0VGltZU91dCgpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEZldGNoVGVzdCxcbiAgICAgICAgeyB0aXRsZTogJ3RpbWUgb3V0IGluIDMgc2VjcycgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRmV0Y2hlciwge1xuICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgZ2V0OiBnZXQsXG4gICAgICAgICAgICB0aW1lb3V0OiAzMDAwLFxuICAgICAgICAgICAgX3NpbXVsYXRlX2xhZzogMTAwMDBcbiAgICAgICAgfSlcbiAgICApO1xufTtcblxudmFyIFRlc3RFbXB0eSA9IGV4cG9ydHMuVGVzdEVtcHR5ID0gZnVuY3Rpb24gVGVzdEVtcHR5KCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgRmV0Y2hUZXN0LFxuICAgICAgICB7IHRpdGxlOiAnZW1wdHkgb3B0aW9uYWwgY29tcG9uZW50cycgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRmV0Y2hFbXB0eSwge1xuICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgZ2V0OiBnZXQsXG4gICAgICAgICAgICBfc2ltdWxhdGVfbGFnOiAxMDAwXG4gICAgICAgIH0pXG4gICAgKTtcbn07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlc3QuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSAod2luZG93LlJlYWN0KTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gKHdpbmRvdy5Qcm9wVHlwZXMpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2Zhc3REZWVwRXF1YWwgPSByZXF1aXJlKCdmYXN0LWRlZXAtZXF1YWwnKTtcblxudmFyIF9mYXN0RGVlcEVxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zhc3REZWVwRXF1YWwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciB3aXRoRmV0Y2hlciA9IGZ1bmN0aW9uIHdpdGhGZXRjaGVyKFN1Y2Nlc3MsIExvYWRpbmcsIEZhaWxlZCwgVGltZWRPdXQpIHtcbiAgICB2YXIgV2l0aEZldGNoZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgICAgICBfaW5oZXJpdHMoV2l0aEZldGNoZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhXaXRoRmV0Y2hlciwgW3tcbiAgICAgICAgICAgIGtleTogJ19pbml0aWFsU3RhdGUnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9pbml0aWFsU3RhdGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGZldGNoZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB0aW1lZF9vdXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBoYXNfZXJyb3I6IHRoaXMucHJvcHMuX2Fsd2F5c19mYWlsIHx8IGZhbHNlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIFdpdGhGZXRjaGVyKHByb3BzKSB7XG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2l0aEZldGNoZXIpO1xuXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoV2l0aEZldGNoZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihXaXRoRmV0Y2hlcikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICAgICAgX3RoaXMuc3RhdGUgPSBfdGhpcy5faW5pdGlhbFN0YXRlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdzdGF0ZSBlcScsIF90aGlzLnN0YXRlID09IF90aGlzLl9pbml0aWFsU3RhdGUoKSwgX3RoaXMuc3RhdGUgPT09IF90aGlzLl9pbml0aWFsU3RhdGUoKSk7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBfY3JlYXRlQ2xhc3MoV2l0aEZldGNoZXIsIFt7XG4gICAgICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5fZGVidWcgJiYgY29uc29sZS5sb2coJ3dpdGhGZXRjaGVyOiBtb3VudGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmV0Y2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUobmV3cHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLl9kZWJ1ZyAmJiBjb25zb2xlLmxvZygnd2l0aEZldGNoZXI6IGRpZCB1cGRhdGUnKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMudXJsID09PSBuZXdwcm9wcy51cmwgfHwgISgwLCBfZmFzdERlZXBFcXVhbDIuZGVmYXVsdCkodGhpcy5wcm9wcy51cmxfY29uZmlnLCBuZXdwcm9wcy51cmxfY29uZmlnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuX2luaXRpYWxTdGF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmV0Y2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ19mZXRjaCcsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2ZldGNoKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5fZGVidWcgJiYgY29uc29sZS5sb2coJ3dpdGhGZXRjaGVyOiBmZXRjaCcpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBjbG9jayB0byB0aW1lb3V0XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnByb3BzLl9kZWJ1ZyAmJiBjb25zb2xlLmxvZygnd2l0aEZldGNoZXI6IHRpbWVkIG91dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpczIuc3RhdGUuZmV0Y2hlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IHRpbWVkX291dDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5wcm9wcy50aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgeCA9IGZ1bmN0aW9uIHgoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maWcgPSBfdGhpczIucHJvcHMudXJsX2NvbmZpZyB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnByb3BzLmdldChfdGhpczIucHJvcHMudXJsLCBjb25maWcpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLl9vbkZldGNoZWQocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5wcm9wcy5fZGVidWcgJiYgY29uc29sZS5sb2coJ3dpdGhGZXRjaGVyOiBjYXVnaHQgZXJyb3InKSwgX3RoaXMyLnNldFN0YXRlKHsgaGFzX2Vycm9yOiB0cnVlLCBlcnJvcjogZXJyb3IgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIucHJvcHMub25FcnJvciAmIF90aGlzMi5wcm9wcy5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLl9zaW11bGF0ZV9sYWcpIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB4KCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5wcm9wcy5fc2ltdWxhdGVfbGFnKTtlbHNlIHgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnX29uRmV0Y2hlZCcsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uRmV0Y2hlZChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuX2RlYnVnICYmIGNvbnNvbGUubG9nKCd3aXRoRmV0Y2hlcjogb25GZXRjaGVkJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmZXRjaGVkOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBmZXRjaGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZldGNoZWQgJiYgdGhpcy5wcm9wcy5vbkZldGNoZWQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuX2RlYnVnICYmIGNvbnNvbGUubG9nKCd3aXRoRmV0Y2hlcjogcmVuZGVyJywgJ2ZldGNoZWQ6JywgdGhpcy5zdGF0ZS5mZXRjaGVkKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmhhc19lcnJvcikgcmV0dXJuIEZhaWxlZCA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEZhaWxlZCwgeyBlcnJvcjogdGhpcy5zdGF0ZS5lcnJvciB9KSA6IG51bGw7ZWxzZSBpZiAodGhpcy5zdGF0ZS50aW1lZF9vdXQpIHJldHVybiBUaW1lZE91dCA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFRpbWVkT3V0LCBudWxsKSA6IG51bGw7ZWxzZSBpZiAoIXRoaXMuc3RhdGUuZmV0Y2hlZCkgcmV0dXJuIExvYWRpbmcgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChMb2FkaW5nLCBudWxsKSA6IG51bGw7ZWxzZSByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3VjY2VzcywgeyByZXNwb25zZTogdGhpcy5zdGF0ZS5yZXNwb25zZSwgZGF0YTogdGhpcy5zdGF0ZS5kYXRhIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIFdpdGhGZXRjaGVyO1xuICAgIH0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbiAgICBXaXRoRmV0Y2hlci5wcm9wVHlwZXMgPSB7XG5cbiAgICAgICAgLy9yZXFcbiAgICAgICAgdXJsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBnZXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgICAgIC8vZGVmYXVsdCByZXFzXG4gICAgICAgIHRpbWVvdXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgIF9kZWJ1ZzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gICAgICAgIF9hbHdheXNfZmFpbDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG5cbiAgICAgICAgLy9vcHRpb25hbFxuICAgICAgICBvbkZldGNoZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY3Rpb24sXG4gICAgICAgIG9uRmFpbDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jdGlvbixcbiAgICAgICAgdXJsX2NvbmZpZzogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgICAgIF9zaW11bGF0ZV9sYWc6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXG5cbiAgICB9O1xuICAgIFdpdGhGZXRjaGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgdGltZW91dDogMCxcbiAgICAgICAgX2RlYnVnOiBmYWxzZSxcbiAgICAgICAgX2Fsd2F5c19mYWlsOiBmYWxzZVxuICAgIH07XG5cblxuICAgIHJldHVybiBXaXRoRmV0Y2hlcjtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhGZXRjaGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoRmV0Y2hlci5qcy5tYXAiXX0=
