webpackJsonp([1],{

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(212);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CommentList = __webpack_require__(213);
	
	var _CommentList2 = _interopRequireDefault(_CommentList);
	
	var _CommentForm = __webpack_require__(221);
	
	var _CommentForm2 = _interopRequireDefault(_CommentForm);
	
	var _reactIntl = __webpack_require__(177);
	
	var _Article = __webpack_require__(165);
	
	var _Article2 = _interopRequireDefault(_Article);
	
	var _Header = __webpack_require__(203);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Section = __webpack_require__(204);
	
	var _Section2 = _interopRequireDefault(_Section);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Comments = function (_React$Component) {
	    _inherits(Comments, _React$Component);
	
	    function Comments(props) {
	        _classCallCheck(this, Comments);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Comments).call(this, props));
	
	        _this.state = {
	            data: []
	        };
	
	        _this.url = "./src/routes/Comments/data.json";
	        return _this;
	    }
	
	    _createClass(Comments, [{
	        key: "loadCommentsFromServer",
	        value: function loadCommentsFromServer() {
	
	            var that = this;
	
	            return fetch(this.url).then(function (response) {
	
	                return response.json();
	            }).then(function (data) {
	
	                that.setState({ data: data });
	            }).catch(function (e) {
	
	                console.error(that.props.url, e);
	            });
	        }
	    }, {
	        key: "handleCommentSubmit",
	        value: function handleCommentSubmit(comment) {
	
	            var comments = this.state.data;
	
	            comment.id = Date.now();
	
	            this.setState({ data: comments.concat([comment]) });
	
	            /*
	            //var that = this;
	            return fetch(this.url,{
	                method:"post",
	                body:JSON.stringify(comment)
	            })
	            .catch(function(e) {
	                console.error(that.props.url,e)
	            });
	            */
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	
	            this.loadCommentsFromServer();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                _Article2.default,
	                { pad: "medium" },
	                _react2.default.createElement(
	                    _Header2.default,
	                    null,
	                    _react2.default.createElement(_reactIntl.FormattedMessage, { id: "Comments" })
	                ),
	                _react2.default.createElement(
	                    _Section2.default,
	                    null,
	                    _react2.default.createElement(_CommentList2.default, { data: this.state.data }),
	                    _react2.default.createElement(_CommentForm2.default, { onCommentSubmit: this.handleCommentSubmit.bind(this) })
	                )
	            );
	        }
	    }]);
	
	    return Comments;
	}(_react2.default.Component);
	
	Comments.contextTypes = {
	    router: _react2.default.PropTypes.object
	};
	
	module.exports = Comments;
	
	exports.default = Comments;

/***/ },

/***/ 212:
/***/ function(module, exports) {

	'use strict';
	
	(function (self) {
	  'use strict';
	
	  if (self.fetch) {
	    return;
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name);
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name');
	    }
	    return name.toLowerCase();
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value);
	    }
	    return value;
	  }
	
	  function Headers(headers) {
	    this.map = {};
	
	    if (headers instanceof Headers) {
	      headers.forEach(function (value, name) {
	        this.append(name, value);
	      }, this);
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function (name) {
	        this.append(name, headers[name]);
	      }, this);
	    }
	  }
	
	  Headers.prototype.append = function (name, value) {
	    name = normalizeName(name);
	    value = normalizeValue(value);
	    var list = this.map[name];
	    if (!list) {
	      list = [];
	      this.map[name] = list;
	    }
	    list.push(value);
	  };
	
	  Headers.prototype['delete'] = function (name) {
	    delete this.map[normalizeName(name)];
	  };
	
	  Headers.prototype.get = function (name) {
	    var values = this.map[normalizeName(name)];
	    return values ? values[0] : null;
	  };
	
	  Headers.prototype.getAll = function (name) {
	    return this.map[normalizeName(name)] || [];
	  };
	
	  Headers.prototype.has = function (name) {
	    return this.map.hasOwnProperty(normalizeName(name));
	  };
	
	  Headers.prototype.set = function (name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)];
	  };
	
	  Headers.prototype.forEach = function (callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function (name) {
	      this.map[name].forEach(function (value) {
	        callback.call(thisArg, value, name, this);
	      }, this);
	    }, this);
	  };
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'));
	    }
	    body.bodyUsed = true;
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function (resolve, reject) {
	      reader.onload = function () {
	        resolve(reader.result);
	      };
	      reader.onerror = function () {
	        reject(reader.error);
	      };
	    });
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    reader.readAsArrayBuffer(blob);
	    return fileReaderReady(reader);
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    reader.readAsText(blob);
	    return fileReaderReady(reader);
	  }
	
	  var support = {
	    blob: 'FileReader' in self && 'Blob' in self && function () {
	      try {
	        new Blob();
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  };
	
	  function Body() {
	    this.bodyUsed = false;
	
	    this._initBody = function (body) {
	      this._bodyInit = body;
	      if (typeof body === 'string') {
	        this._bodyText = body;
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body;
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body;
	      } else if (!body) {
	        this._bodyText = '';
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	          throw new Error('unsupported BodyInit type');
	        }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8');
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type);
	        }
	      }
	    };
	
	    if (support.blob) {
	      this.blob = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob');
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]));
	        }
	      };
	
	      this.arrayBuffer = function () {
	        return this.blob().then(readBlobAsArrayBuffer);
	      };
	
	      this.text = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }
	
	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text');
	        } else {
	          return Promise.resolve(this._bodyText);
	        }
	      };
	    } else {
	      this.text = function () {
	        var rejected = consumed(this);
	        return rejected ? rejected : Promise.resolve(this._bodyText);
	      };
	    }
	
	    if (support.formData) {
	      this.formData = function () {
	        return this.text().then(decode);
	      };
	    }
	
	    this.json = function () {
	      return this.text().then(JSON.parse);
	    };
	
	    return this;
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method;
	  }
	
	  function Request(input, options) {
	    options = options || {};
	    var body = options.body;
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read');
	      }
	      this.url = input.url;
	      this.credentials = input.credentials;
	      if (!options.headers) {
	        this.headers = new Headers(input.headers);
	      }
	      this.method = input.method;
	      this.mode = input.mode;
	      if (!body) {
	        body = input._bodyInit;
	        input.bodyUsed = true;
	      }
	    } else {
	      this.url = input;
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit';
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers);
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET');
	    this.mode = options.mode || this.mode || null;
	    this.referrer = null;
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests');
	    }
	    this._initBody(body);
	  }
	
	  Request.prototype.clone = function () {
	    return new Request(this);
	  };
	
	  function decode(body) {
	    var form = new FormData();
	    body.trim().split('&').forEach(function (bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	    return form;
	  }
	
	  function headers(xhr) {
	    var head = new Headers();
	    var pairs = xhr.getAllResponseHeaders().trim().split('\n');
	    pairs.forEach(function (header) {
	      var split = header.trim().split(':');
	      var key = split.shift().trim();
	      var value = split.join(':').trim();
	      head.append(key, value);
	    });
	    return head;
	  }
	
	  Body.call(Request.prototype);
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }
	
	    this.type = 'default';
	    this.status = options.status;
	    this.ok = this.status >= 200 && this.status < 300;
	    this.statusText = options.statusText;
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
	    this.url = options.url || '';
	    this._initBody(bodyInit);
	  }
	
	  Body.call(Response.prototype);
	
	  Response.prototype.clone = function () {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    });
	  };
	
	  Response.error = function () {
	    var response = new Response(null, { status: 0, statusText: '' });
	    response.type = 'error';
	    return response;
	  };
	
	  var redirectStatuses = [301, 302, 303, 307, 308];
	
	  Response.redirect = function (url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code');
	    }
	
	    return new Response(null, { status: status, headers: { location: url } });
	  };
	
	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;
	
	  self.fetch = function (input, init) {
	    return new Promise(function (resolve, reject) {
	      var request;
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input;
	      } else {
	        request = new Request(input, init);
	      }
	
	      var xhr = new XMLHttpRequest();
	
	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL;
	        }
	
	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL');
	        }
	
	        return;
	      }
	
	      xhr.onload = function () {
	        var status = xhr.status === 1223 ? 204 : xhr.status;
	        if (status < 100 || status > 599) {
	          reject(new TypeError('Network request failed'));
	          return;
	        }
	        var options = {
	          status: status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        };
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };
	
	      xhr.onerror = function () {
	        reject(new TypeError('Network request failed'));
	      };
	
	      xhr.open(request.method, request.url, true);
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true;
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob';
	      }
	
	      request.headers.forEach(function (value, name) {
	        xhr.setRequestHeader(name, value);
	      });
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	    });
	  };
	  self.fetch.polyfill = true;
	})(typeof self !== 'undefined' ? self : undefined);

/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Comment = __webpack_require__(214);
	
	var _Comment2 = _interopRequireDefault(_Comment);
	
	var _Tiles = __webpack_require__(216);
	
	var _Tiles2 = _interopRequireDefault(_Tiles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CommentList = function (_React$Component) {
	  _inherits(CommentList, _React$Component);
	
	  function CommentList() {
	    _classCallCheck(this, CommentList);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CommentList).apply(this, arguments));
	  }
	
	  _createClass(CommentList, [{
	    key: "render",
	    value: function render() {
	
	      var commentNodes = this.props.data.map(function (comment) {
	
	        return _react2.default.createElement(_Comment2.default, { author: comment.author, key: comment.id, text: comment.text });
	      });
	
	      return _react2.default.createElement(
	        _Tiles2.default,
	        { pad: "large" },
	        commentNodes
	      );
	    }
	  }]);
	
	  return CommentList;
	}(_react2.default.Component);
	
	exports.default = CommentList;

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Tile = __webpack_require__(215);
	
	var _Tile2 = _interopRequireDefault(_Tile);
	
	var _Header = __webpack_require__(203);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CommentBox = function (_React$Component) {
	    _inherits(CommentBox, _React$Component);
	
	    function CommentBox() {
	        _classCallCheck(this, CommentBox);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CommentBox).apply(this, arguments));
	    }
	
	    _createClass(CommentBox, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                _Tile2.default,
	                { wide: true, colorIndex: "light-2", align: "start" },
	                _react2.default.createElement(
	                    _Header2.default,
	                    null,
	                    this.props.author
	                ),
	                this.props.text
	            );
	        }
	    }]);
	
	    return CommentBox;
	}(_react2.default.Component);
	
	exports.default = CommentBox;

/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Props = __webpack_require__(170);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	var _Box = __webpack_require__(166);
	
	var _Box2 = _interopRequireDefault(_Box);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = "tile";
	
	var Tile = function (_Component) {
	  _inherits(Tile, _Component);
	
	  function Tile() {
	    _classCallCheck(this, Tile);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tile).apply(this, arguments));
	  }
	
	  _createClass(Tile, [{
	    key: 'render',
	    value: function render() {
	      var classes = [CLASS_ROOT];
	      var boxProps = _Props2.default.pick(this.props, Object.keys(_Box2.default.propTypes));
	      if (this.props.status) {
	        classes.push(CLASS_ROOT + "--status-" + this.props.status.toLowerCase());
	      }
	      if (this.props.wide) {
	        classes.push(CLASS_ROOT + "--wide");
	      }
	      if (this.props.onClick) {
	        classes.push(CLASS_ROOT + "--selectable");
	      }
	      if (this.props.selected) {
	        classes.push(CLASS_ROOT + "--selected");
	      }
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }
	
	      return _react2.default.createElement(_Box2.default, _extends({}, boxProps, { className: classes.join(' ') }), this.props.children);
	    }
	  }]);
	
	  return Tile;
	}(_react.Component);
	
	exports.default = Tile;
	
	Tile.propTypes = _extends({
	  selected: _react.PropTypes.bool,
	  wide: _react.PropTypes.bool
	}, _Box2.default.propTypes);
	
	Tile.defaultProps = {
	  pad: 'none',
	  direction: 'column',
	  align: 'center'
	};
	module.exports = exports['default'];

/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(162);
	
	var _Props = __webpack_require__(170);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	var _Box = __webpack_require__(166);
	
	var _Box2 = _interopRequireDefault(_Box);
	
	var _Button = __webpack_require__(172);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Spinning = __webpack_require__(217);
	
	var _Spinning2 = _interopRequireDefault(_Spinning);
	
	var _Scroll = __webpack_require__(171);
	
	var _Scroll2 = _interopRequireDefault(_Scroll);
	
	var _InfiniteScroll = __webpack_require__(218);
	
	var _InfiniteScroll2 = _interopRequireDefault(_InfiniteScroll);
	
	var _Selection = __webpack_require__(220);
	
	var _Selection2 = _interopRequireDefault(_Selection);
	
	var _LinkPrevious = __webpack_require__(200);
	
	var _LinkPrevious2 = _interopRequireDefault(_LinkPrevious);
	
	var _LinkNext = __webpack_require__(175);
	
	var _LinkNext2 = _interopRequireDefault(_LinkNext);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = "tiles";
	var SELECTED_CLASS = "tile--selected";
	
	var Tiles = function (_Component) {
	  _inherits(Tiles, _Component);
	
	  function Tiles(props) {
	    _classCallCheck(this, Tiles);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tiles).call(this, props));
	
	    _this._onLeft = _this._onLeft.bind(_this);
	    _this._onRight = _this._onRight.bind(_this);
	    _this._onScrollHorizontal = _this._onScrollHorizontal.bind(_this);
	    _this._onWheel = _this._onWheel.bind(_this);
	    _this._onResize = _this._onResize.bind(_this);
	    _this._layout = _this._layout.bind(_this);
	    _this._onClick = _this._onClick.bind(_this);
	
	    _this.state = {
	      overflow: false,
	      selected: _Selection2.default.normalizeIndexes(props.selected)
	    };
	    return _this;
	  }
	
	  _createClass(Tiles, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._setSelection();
	      if (this.props.onMore) {
	        this._scroll = _InfiniteScroll2.default.startListeningForScroll(this.refs.more, this.props.onMore);
	      }
	      if ('row' === this.props.direction) {
	        window.addEventListener('resize', this._onResize);
	        document.addEventListener('wheel', this._onWheel);
	        this._trackHorizontalScroll();
	        // give browser a chance to stabilize
	        setTimeout(this._layout, 10);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.selected) {
	        this.setState({ selected: _Selection2.default.normalizeIndexes(nextProps.selected) });
	      }
	      if (this._scroll) {
	        _InfiniteScroll2.default.stopListeningForScroll(this._scroll);
	        this._scroll = null;
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (JSON.stringify(this.state.selected) !== JSON.stringify(prevState.selected)) {
	        this._setSelection();
	      }
	      if (this.props.onMore && !this._scroll) {
	        this._scroll = _InfiniteScroll2.default.startListeningForScroll(this.refs.more, this.props.onMore);
	      }
	      if ('row' === this.props.direction) {
	        this._trackHorizontalScroll();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this._scroll) {
	        _InfiniteScroll2.default.stopListeningForScroll(this._scroll);
	      }
	      if ('row' === this.props.direction) {
	        window.removeEventListener('resize', this._onResize);
	        document.removeEventListener('wheel', this._onWheel);
	        if (this._tracking) {
	          var tiles = (0, _reactDom.findDOMNode)(this.refs.tiles);
	          tiles.removeEventListener('scroll', this._onScrollHorizontal);
	        }
	      }
	    }
	  }, {
	    key: '_onLeft',
	    value: function _onLeft() {
	      var tiles = (0, _reactDom.findDOMNode)(this.refs.tiles);
	      _Scroll2.default.scrollBy(tiles, 'scrollLeft', -tiles.offsetWidth);
	    }
	  }, {
	    key: '_onRight',
	    value: function _onRight() {
	      var tiles = (0, _reactDom.findDOMNode)(this.refs.tiles);
	      _Scroll2.default.scrollBy(tiles, 'scrollLeft', tiles.offsetWidth);
	    }
	  }, {
	    key: '_onScrollHorizontal',
	    value: function _onScrollHorizontal() {
	      // debounce
	      clearTimeout(this._scrollTimer);
	      this._scrollTimer = setTimeout(this._layout, 50);
	    }
	  }, {
	    key: '_onWheel',
	    value: function _onWheel(event) {
	      if (Math.abs(event.deltaX) > 100) {
	        clearInterval(this._scrollTimer);
	      } else if (event.deltaX > 5) {
	        this._onRight();
	      } else if (event.deltaX < -5) {
	        this._onLeft();
	      }
	    }
	  }, {
	    key: '_layout',
	    value: function _layout() {
	      if ('row' === this.props.direction) {
	        // determine if we have more tiles than room to fit
	        var tiles = (0, _reactDom.findDOMNode)(this.refs.tiles);
	        // 20 is to allow some fuzziness as scrollbars come and go
	        this.setState({
	          overflow: tiles.scrollWidth > tiles.offsetWidth + 20,
	          overflowStart: tiles.scrollLeft <= 20,
	          overflowEnd: tiles.scrollLeft >= tiles.scrollWidth - tiles.offsetWidth
	        });
	
	        // mark any tiles that might be clipped
	        var rect = tiles.getBoundingClientRect();
	        var children = tiles.querySelectorAll('.tile');
	        for (var i = 0; i < children.length; i += 1) {
	          var child = children[i];
	          var childRect = child.getBoundingClientRect();
	          // 12 accounts for padding
	          if (childRect.left + 12 < rect.left || childRect.right - 12 > rect.right) {
	            child.classList.add('tile--eclipsed');
	          } else {
	            child.classList.remove('tile--eclipsed');
	          }
	        }
	      }
	    }
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	      // debounce
	      clearTimeout(this._resizeTimer);
	      this._resizeTimer = setTimeout(this._layout, 50);
	    }
	  }, {
	    key: '_trackHorizontalScroll',
	    value: function _trackHorizontalScroll() {
	      if (this.state.overflow && !this._tracking) {
	        var tiles = (0, _reactDom.findDOMNode)(this.refs.tiles);
	        tiles.addEventListener('scroll', this._onScrollHorizontal);
	        this._tracking = true;
	      }
	    }
	  }, {
	    key: '_setSelection',
	    value: function _setSelection() {
	      _Selection2.default.setClassFromIndexes({
	        containerElement: (0, _reactDom.findDOMNode)(this.refs.tiles),
	        childSelector: '.tile',
	        selectedClass: SELECTED_CLASS,
	        selectedIndexes: this.state.selected
	      });
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick(event) {
	      var selected = _Selection2.default.onClick(event, {
	        containerElement: (0, _reactDom.findDOMNode)(this.refs.tiles),
	        childSelector: '.tile',
	        selectedClass: SELECTED_CLASS,
	        multiSelect: 'multiple' === this.props.selectable,
	        priorSelectedIndexes: this.state.selected
	      });
	      // only set the selected state and classes if the caller isn't managing it.
	      if (!this.props.selected) {
	        this.setState({ selected: selected }, this._setSelection);
	      }
	
	      if (this.props.onSelect) {
	        // notify caller that the selection has changed
	        if (selected.length === 1) {
	          selected = selected[0];
	        }
	        this.props.onSelect(selected);
	      }
	    }
	
	    // children should be an array of Tile
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = [CLASS_ROOT];
	      if (this.props.fill) {
	        classes.push(CLASS_ROOT + "--fill");
	      }
	      if (this.props.flush) {
	        classes.push(CLASS_ROOT + "--flush");
	      }
	      if (this.props.size) {
	        classes.push(CLASS_ROOT + "--" + this.props.size);
	      }
	      if (this.props.selectable) {
	        classes.push(CLASS_ROOT + "--selectable");
	      }
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }
	
	      var other = _Props2.default.pick(this.props, Object.keys(_Box2.default.propTypes));
	
	      var more = null;
	      if (this.props.onMore) {
	        classes.push(CLASS_ROOT + "--moreable");
	        more = _react2.default.createElement('div', { ref: 'more', className: CLASS_ROOT + "__more" }, _react2.default.createElement(_Spinning2.default, null));
	      }
	
	      var onClickHandler = void 0;
	      if (this.props.selectable) {
	        onClickHandler = this._onClick;
	      }
	
	      var contents = _react2.default.createElement(_Box2.default, _extends({ ref: 'tiles' }, other, {
	        wrap: this.props.direction ? false : true,
	        direction: this.props.direction ? this.props.direction : 'row',
	        className: classes.join(' '),
	        onClick: onClickHandler,
	        focusable: false }), this.props.children, more);
	
	      if (this.state.overflow) {
	        classes.push(CLASS_ROOT + "--overflowed");
	        if (!this.state.overflowStart) {
	          var left = _react2.default.createElement(_Button2.default, { className: CLASS_ROOT + "__left", icon: _react2.default.createElement(_LinkPrevious2.default, null),
	            onClick: this._onLeft });
	        }
	        if (!this.state.overflowEnd) {
	          var right = _react2.default.createElement(_Button2.default, { className: CLASS_ROOT + "__right", icon: _react2.default.createElement(_LinkNext2.default, null),
	            onClick: this._onRight });
	        }
	
	        contents = _react2.default.createElement('div', { className: CLASS_ROOT + "__container" }, left, contents, right);
	      }
	
	      return contents;
	    }
	  }]);
	
	  return Tiles;
	}(_react.Component);
	
	exports.default = Tiles;
	
	Tiles.propTypes = _extends({
	  fill: _react.PropTypes.bool,
	  flush: _react.PropTypes.bool,
	  onMore: _react.PropTypes.func,
	  onSelect: _react.PropTypes.func,
	  selectable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['multiple'])]),
	  selected: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.number)]),
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large'])
	}, _Box2.default.propTypes);
	
	Tiles.defaultProps = {
	  flush: true,
	  justify: 'start'
	};
	module.exports = exports['default'];

/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = "icon-spinning";
	
	var Spinning = function (_Component) {
	  _inherits(Spinning, _Component);
	
	  function Spinning() {
	    _classCallCheck(this, Spinning);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Spinning).apply(this, arguments));
	  }
	
	  _createClass(Spinning, [{
	    key: "render",
	    value: function render() {
	      var classes = [CLASS_ROOT];
	      if (this.props.small) {
	        classes.push(CLASS_ROOT + "--small");
	      }
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }
	      return _react2.default.createElement("svg", { className: classes.join(' '), viewBox: "0 0 48 48", version: "1.1" }, _react2.default.createElement("circle", { stroke: "#ddd", strokeWidth: "4", strokeDasharray: "24px 8px", fill: "none", cx: "24", cy: "24", r: "20" }), _react2.default.createElement("circle", { stroke: "#333", strokeWidth: "4", strokeDasharray: "24px 104px", fill: "none", cx: "24", cy: "24", r: "20" }));
	    }
	  }]);
	
	  return Spinning;
	}(_react.Component);
	
	exports.default = Spinning;
	module.exports = exports['default'];

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DOM = __webpack_require__(219);
	
	var _DOM2 = _interopRequireDefault(_DOM);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var SCROLL_MORE_DELAY = 500; // when the user scrolls
	// (C) Copyright 2014 Hewlett Packard Enterprise Development LP
	
	var SCROLL_MORE_INITIAL_DELAY = 50; // when we start out at the bottom already
	
	function _evaluate(scrollState) {
	  if (scrollState.scrollParent) {
	    // are we at the bottom?
	    var bottom;
	    if (scrollState.scrollParent === document) {
	      bottom = window.innerHeight;
	    } else {
	      bottom = scrollState.scrollParent.getBoundingClientRect().bottom;
	    }
	    var indicatorRect = scrollState.indicatorElement.getBoundingClientRect();
	    // Only if bottom isn't zero. This can happen when content hasn't arrived yet.
	    if (bottom && indicatorRect.bottom <= bottom) {
	      scrollState.onEnd();
	    }
	  }
	}
	
	function _onScroll(scrollState) {
	  // delay a bit to ride out quick users
	  clearTimeout(scrollState.scrollTimer);
	  scrollState.scrollTimer = setTimeout(function () {
	    _evaluate(scrollState);
	  }, SCROLL_MORE_DELAY);
	}
	
	function _onResize(scrollState) {
	  clearTimeout(scrollState.scrollTimer);
	  scrollState.scrollTimer = setTimeout(function () {
	    _evaluate(scrollState);
	  }, SCROLL_MORE_DELAY);
	}
	
	exports.default = {
	  startListeningForScroll: function startListeningForScroll(indicatorElement, onEnd) {
	    var scrollState = {
	      onEnd: onEnd,
	      indicatorElement: indicatorElement,
	      scrollParent: _DOM2.default.findScrollParents(indicatorElement)[0]
	    };
	
	    scrollState._onResize = _onResize.bind(null, scrollState);
	    scrollState._onScroll = _onScroll.bind(null, scrollState);
	
	    scrollState.scrollParent.addEventListener("scroll", scrollState._onScroll);
	    window.addEventListener("resize", scrollState._onResize);
	    // check in case we're already at the bottom and the indicator is visible
	    if (scrollState.scrollParent === document) {
	      var rect = indicatorElement.getBoundingClientRect();
	      if (rect.top < window.innerHeight) {
	        scrollState.scrollTimer = setTimeout(onEnd, SCROLL_MORE_INITIAL_DELAY);
	      }
	    }
	    return scrollState;
	  },
	  stopListeningForScroll: function stopListeningForScroll(scrollState) {
	    if (scrollState.scrollParent) {
	      clearTimeout(scrollState.scrollTimer);
	      scrollState.scrollParent.removeEventListener("scroll", scrollState._onScroll);
	      window.removeEventListener("resize", scrollState._onResize);
	      scrollState.scrollParent = null;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },

/***/ 220:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// (C) Copyright 2015 Hewlett Packard Enterprise Development LP
	
	// Functions to manage selection via both child index and a specific class name.
	
	// Ensures it is an array.
	function normalizeIndexes(selectedIndexes) {
	  var result = void 0;
	  if (undefined === selectedIndexes || null === selectedIndexes) {
	    result = [];
	  } else if (typeof selectedIndexes === 'number') {
	    result = [selectedIndexes];
	  } else {
	    result = selectedIndexes;
	  }
	  return result;
	}
	
	// Clears any selected items
	// options: {containerElement: , selectedClass: }
	function clearClass(options) {
	  var items = options.containerElement.querySelectorAll("." + options.selectedClass);
	  for (var i = 0; i < items.length; i++) {
	    items[i].classList.remove(options.selectedClass);
	  }
	}
	
	// Sets the selectedClass on all children whose index is in selectedIndexes.
	// options: {containerElement: , childSelector: , selectedClass: , selectedIndexes: []}
	function setClassFromIndexes(options) {
	  clearClass(options);
	  if (options.selectedIndexes) {
	    (function () {
	      var items = options.containerElement.querySelectorAll(options.childSelector);
	      options.selectedIndexes.forEach(function (index) {
	        if (items[index]) {
	          items[index].classList.add(options.selectedClass);
	        }
	      });
	    })();
	  }
	}
	
	// Gets the selected selectedClass on all children whose index is in selectedIndexes.
	// options: {containerElement: , childSelector: , selectedClass: }
	function getIndexesFromClass(options) {
	  var items = options.containerElement.querySelectorAll(options.childSelector);
	  var selectedIndexes = [];
	  for (var i = 0; i < items.length; i++) {
	    if (items[i].classList.contains(options.selectedClass)) {
	      selectedIndexes.push(i);
	    }
	  }
	  return selectedIndexes;
	}
	
	// Returns a new selectedIndexes array with the latest selected indexes
	// options: {containerElement: , childSelector: , //selectedClass: ,
	//   multiSelect: true|false, priorSelectedIndexes: []}
	function onClick(event, options) {
	
	  // Go up the DOM tree until we match the childSelector
	  var item = event.target;
	  if (item.matches) {
	    while (item && !item.matches(options.childSelector)) {
	      item = item.parentNode;
	    }
	  } else if (item.matchesElement) {
	    while (item && !item.matchesElement(options.childSelector)) {
	      item = item.parentNode;
	    }
	  }
	
	  // determine the index of the clicked element
	  var indexInContainer = 0;
	  var previousItem = item.previousSibling;
	  while (previousItem != null) {
	    previousItem = previousItem.previousSibling;
	    indexInContainer += 1;
	  }
	
	  var selectedIndexes = void 0; // what will be returned
	
	  if (!event.ctrlKey && !event.metaKey && !event.shiftKey) {
	
	    selectedIndexes = [indexInContainer];
	  } else {
	    // was it selected?
	    var indexInPrior = options.priorSelectedIndexes.indexOf(indexInContainer);
	
	    if (!options.multiSelect) {
	
	      if (-1 !== indexInPrior && (event.ctrlKey || event.metaKey)) {
	        selectedIndexes = [];
	      } else {
	        selectedIndexes = options.priorSelectedIndexes;
	      }
	    } else {
	      // multi-select
	
	      // make a copy of the prior list so we can modify it
	      selectedIndexes = options.priorSelectedIndexes.slice(0);
	
	      if (event.shiftKey) {
	        var i;
	
	        (function () {
	
	          // select from nearest selected item to the currently selected item
	          var closestIndex = -1;
	          selectedIndexes.forEach(function (selectIndex, arrayIndex) {
	            if (-1 === closestIndex) {
	              closestIndex = selectIndex;
	            } else if (Math.abs(indexInContainer - selectIndex) < Math.abs(indexInContainer - closestIndex)) {
	              closestIndex = selectIndex;
	            }
	          });
	
	          for (i = indexInContainer; i !== closestIndex;) {
	            selectedIndexes.push(i);
	            if (closestIndex < indexInContainer) {
	              i -= 1;
	            } else {
	              i += 1;
	            }
	          }
	
	          // Remove text selection. This often happens when shift multi-selecting
	          window.getSelection().removeAllRanges();
	        })();
	      } else {
	        // toggle
	        if (-1 === indexInPrior) {
	          selectedIndexes.push(indexInContainer);
	        } else {
	          selectedIndexes.splice(indexInPrior, 1);
	        }
	      }
	    }
	  }
	
	  return selectedIndexes;
	}
	
	exports.default = {
	  normalizeIndexes: normalizeIndexes,
	  clearClass: clearClass,
	  getIndexesFromClass: getIndexesFromClass,
	  setClassFromIndexes: setClassFromIndexes,
	  onClick: onClick
	};
	module.exports = exports['default'];

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Form = __webpack_require__(222);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _FormField = __webpack_require__(223);
	
	var _FormField2 = _interopRequireDefault(_FormField);
	
	var _Button = __webpack_require__(172);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _reactIntl = __webpack_require__(177);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CommentForm = function (_React$Component) {
	  _inherits(CommentForm, _React$Component);
	
	  function CommentForm(props) {
	    _classCallCheck(this, CommentForm);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CommentForm).call(this, props));
	
	    _this.state = { author: "", text: "" };
	
	    _this.handleAuthorChange = _this.handleAuthorChange.bind(_this);
	    _this.handleTextChange = _this.handleTextChange.bind(_this);
	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    return _this;
	  }
	
	  _createClass(CommentForm, [{
	    key: "handleSomethingChange",
	    value: function handleSomethingChange() {
	
	      if (this.props.onCommentChange) this.props.onCommentChange(true);
	    }
	  }, {
	    key: "handleAuthorChange",
	    value: function handleAuthorChange(e) {
	
	      this.handleSomethingChange();
	      this.setState({ author: e.target.value });
	    }
	  }, {
	    key: "handleTextChange",
	    value: function handleTextChange(e) {
	
	      this.handleSomethingChange();
	      this.setState({ text: e.target.value });
	    }
	  }, {
	    key: "handleSubmit",
	    value: function handleSubmit(e) {
	
	      e.preventDefault();
	
	      var author = this.state.author.trim();
	      var text = this.state.text.trim();
	
	      if (!text || !author) return;
	
	      if (this.props.onCommentChange) this.props.onCommentChange(false);
	      if (this.props.onCommentSubmit) this.props.onCommentSubmit({ author: author, text: text });
	
	      this.setState({ author: "", text: "" });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	
	      return _react2.default.createElement(
	        _Form2.default,
	        { onSubmit: this.handleSubmit, pad: { vertical: "large", horizontal: "none" } },
	        _react2.default.createElement(
	          "fieldset",
	          null,
	          _react2.default.createElement(
	            "legend",
	            null,
	            _react2.default.createElement(_reactIntl.FormattedMessage, { id: "Leave a comment" })
	          ),
	          _react2.default.createElement(
	            _FormField2.default,
	            { label: "Name", htmlFor: "inputAuthor" },
	            _react2.default.createElement("input", { id: "inputAuthor", type: "text", onChange: this.handleAuthorChange, value: this.state.author })
	          ),
	          _react2.default.createElement(
	            _FormField2.default,
	            { label: "Say something...", htmlFor: "inputText" },
	            _react2.default.createElement("textarea", { id: "inputText", onChange: this.handleTextChange, value: this.state.text })
	          )
	        ),
	        _react2.default.createElement(_Button2.default, { label: "Valider", type: "submit", onClick: function onClick() {
	            return true;
	          } })
	      );
	    }
	  }]);
	
	  return CommentForm;
	}(_react2.default.Component);
	
	exports.default = CommentForm;

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(173);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = 'form';
	
	var Form = function (_Component) {
	  _inherits(Form, _Component);
	
	  function Form() {
	    _classCallCheck(this, Form);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Form).apply(this, arguments));
	  }
	
	  _createClass(Form, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var _props = this.props;
	      var className = _props.className;
	      var compact = _props.compact;
	      var fill = _props.fill;
	      var pad = _props.pad;
	
	      var classes = (0, _classnames3.default)(CLASS_ROOT, className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--compact', compact), _defineProperty(_classnames, CLASS_ROOT + '--fill', fill), _defineProperty(_classnames, CLASS_ROOT + '--pad-' + pad, typeof pad === 'string'), _defineProperty(_classnames, CLASS_ROOT + '--pad-horizontal-' + pad.horizontal, (typeof pad === 'undefined' ? 'undefined' : _typeof(pad)) === 'object' && 'horizontal' in pad), _defineProperty(_classnames, CLASS_ROOT + '--pad-vertical-' + pad.vertical, (typeof pad === 'undefined' ? 'undefined' : _typeof(pad)) === 'object' && 'vertical' in pad), _classnames));
	
	      return _react2.default.createElement('form', { className: classes, onSubmit: this.props.onSubmit }, this.props.children);
	    }
	  }]);
	
	  return Form;
	}(_react.Component);
	
	exports.default = Form;
	;
	
	Form.propTypes = {
	  compact: _react.PropTypes.bool,
	  fill: _react.PropTypes.bool,
	  onSubmit: _react.PropTypes.func,
	  pad: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['none', 'small', 'medium', 'large']), _react.PropTypes.shape({
	    horizontal: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large']),
	    vertical: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large'])
	  })])
	};
	
	Form.defaultProps = {
	  compact: false,
	  fill: false,
	  pad: 'none'
	};
	module.exports = exports['default'];

/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = "form-field";
	
	var FormField = function (_Component) {
	  _inherits(FormField, _Component);
	
	  function FormField() {
	    _classCallCheck(this, FormField);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FormField).call(this));
	
	    _this._onFocus = _this._onFocus.bind(_this);
	    _this._onBlur = _this._onBlur.bind(_this);
	    _this._onClick = _this._onClick.bind(_this);
	
	    _this.state = { focus: false };
	    return _this;
	  }
	
	  _createClass(FormField, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var contentsElement = this.refs.contents;
	      var inputElements = contentsElement.querySelectorAll('input, textarea, select');
	      if (inputElements.length === 1) {
	        this._inputElement = inputElements[0];
	        this._inputElement.addEventListener('focus', this._onFocus);
	        this._inputElement.addEventListener('blur', this._onBlur);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this._inputElement) {
	        this._inputElement.removeEventListener('focus', this._onFocus);
	        this._inputElement.removeEventListener('blur', this._onBlur);
	        delete this._inputElement;
	      }
	    }
	  }, {
	    key: '_onFocus',
	    value: function _onFocus() {
	      this.setState({ focus: true });
	    }
	  }, {
	    key: '_onBlur',
	    value: function _onBlur() {
	      this.setState({ focus: false });
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick() {
	      if (this._inputElement) {
	        this._inputElement.focus();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = [CLASS_ROOT];
	      if (this.state.focus) {
	        classes.push(CLASS_ROOT + "--focus");
	      }
	      if (this.props.required) {
	        classes.push(CLASS_ROOT + "--required");
	      }
	      if (this.props.hidden) {
	        classes.push(CLASS_ROOT + "--hidden");
	      }
	      if (this.props.htmlFor) {
	        classes.push(CLASS_ROOT + "--text");
	      }
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }
	
	      var error = void 0;
	      if (this.props.error) {
	        classes.push(CLASS_ROOT + "--error");
	        error = _react2.default.createElement('span', { className: CLASS_ROOT + "__error" }, this.props.error);
	      }
	      var help = void 0;
	      if (this.props.help !== null && this.props.help !== undefined) {
	        help = _react2.default.createElement('span', { className: CLASS_ROOT + "__help" }, this.props.help);
	      }
	
	      var labelNode = void 0;
	      if (this.props.label) {
	        labelNode = _react2.default.createElement('label', { className: CLASS_ROOT + "__label", htmlFor: this.props.htmlFor }, this.props.label);
	      }
	      return _react2.default.createElement('div', { className: classes.join(' '), onClick: this._onClick }, error, labelNode, help, _react2.default.createElement('span', { ref: 'contents', className: CLASS_ROOT + "__contents" }, this.props.children));
	    }
	  }]);
	
	  return FormField;
	}(_react.Component);
	
	exports.default = FormField;
	
	FormField.propTypes = {
	  error: _react.PropTypes.node,
	  help: _react.PropTypes.node,
	  hidden: _react.PropTypes.bool,
	  htmlFor: _react.PropTypes.string,
	  label: _react.PropTypes.node,
	  required: _react.PropTypes.bool
	};
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=1.bundle.js.map