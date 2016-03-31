webpackJsonp([2],{

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jsygFulleditor = __webpack_require__(473);
	
	var _jsygFulleditor2 = _interopRequireDefault(_jsygFulleditor);
	
	var _jsygPath = __webpack_require__(479);
	
	var _jsygPath2 = _interopRequireDefault(_jsygPath);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _paper = __webpack_require__(293);
	
	var _paper2 = _interopRequireDefault(_paper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Mockup = function (_React$Component) {
	  _inherits(Mockup, _React$Component);
	
	  function Mockup() {
	    _classCallCheck(this, Mockup);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Mockup).apply(this, arguments));
	  }
	
	  _createClass(Mockup, [{
	    key: "createPath",
	    value: function createPath() {
	
	      return new _jsygPath2.default().moveTo(300, 0).lineTo(600, 300).lineTo(300, 600).lineTo(0, 300).lineTo(300, 0).fill("violet");
	    }
	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {
	
	      this.svgEditor = new _jsygFulleditor2.default(this.refs.svg);
	
	      this.svgEditor.editableShapes = "> *";
	
	      this.svgEditor.enable();
	
	      this.svgEditor.enableMouseWheelZoom();
	
	      this.svgEditor.load("https://upload.wikimedia.org/wikipedia/commons/5/57/React.js_logo.svg?uselang=fr").then(function () {});
	      /*
	          this.svgEditor.newDocument(600,600)
	      
	          this.svgEditor.insertElement( this.createPath() )
	      
	          */
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	
	      this.svgEditor.disable();
	    }
	  }, {
	    key: "render",
	    value: function render() {
	
	      var styles = {
	        div: {
	          height: "85vh",
	          width: "100%"
	        },
	        svg: {
	          backgroundColor: "#eee"
	        }
	      };
	
	      return _react2.default.createElement(
	        _paper2.default,
	        { zDepth: 2 },
	        _react2.default.createElement(
	          "div",
	          { style: styles.div },
	          _react2.default.createElement("svg", { id: "svgEditor", width: "100%", height: "100%", ref: "svg", style: styles.svg })
	        )
	      );
	    }
	  }]);
	
	  return Mockup;
	}(_react2.default.Component);
	
	module.exports = Mockup;
	
	exports.default = Mockup;

/***/ },

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(474);
	__webpack_require__(542);

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*jshint forin:false, eqnull:true*/
	/* globals JSYG*/
	
	(function (factory) {
	
	    if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(481), __webpack_require__(477), __webpack_require__(507), __webpack_require__(513), __webpack_require__(521), __webpack_require__(540), __webpack_require__(523), __webpack_require__(525), __webpack_require__(533), __webpack_require__(493)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof JSYG != "undefined") {
	
	        var deps = ["Editor", "TextEditor", "ZoomAndPan", "PathDrawer", "PolylineDrawer", "ShapeDrawer", "UndoRedo", "fetch"];
	
	        deps = deps.map(function (dep) {
	            if (!JSYG[dep]) throw new Error("JSYG." + dep + " is missing");
	            return JSYG[dep];
	        });
	
	        deps.unshift(JSYG);
	
	        factory.apply(null, deps);
	    } else throw new Error("JSYG is needed");
	})(function (JSYG, Editor, TextEditor, ZoomAndPan, PathDrawer, PolylineDrawer, ShapeDrawer, UndoRedo, jfetch) {
	
	    "use strict";
	
	    var slice = Array.prototype.slice;
	
	    function FullEditor(node, opt) {
	
	        this._bindFunctions();
	
	        this._init();
	
	        this._keyShortCuts = {};
	
	        if (node) this.setNode(node);
	
	        if (opt) this.enable(opt);
	    }
	
	    FullEditor._plugins = [];
	
	    FullEditor.prototype = Object.create(JSYG.StdConstruct.prototype);
	
	    FullEditor.prototype.constructor = FullEditor;
	
	    //events
	    ['onload', 'ondrag', 'ondraw', 'oninsert', 'onremove', 'onchange', 'onzoom', 'onchangetarget', 'ondisableedition'].forEach(function (event) {
	        FullEditor.prototype[event] = null;
	    });
	
	    FullEditor.prototype.idContainer = "containerDoc";
	
	    FullEditor.prototype._initPlugins = function () {
	
	        FullEditor._plugins.forEach(this._createPlugin.bind(this));
	
	        this._applyMethodPlugins("init");
	
	        return this;
	    };
	
	    FullEditor.prototype._init = function () {
	
	        this._initUndoRedo();
	
	        this._initShapeEditor();
	
	        this._initZoomAndPan();
	
	        this._initTextEditor();
	
	        this._initShapeDrawer();
	
	        this._initPlugins();
	
	        return this;
	    };
	
	    FullEditor.prototype._bindFunctions = function () {
	
	        for (var n in this) {
	
	            if (typeof this[n] == "function" && n.charAt(0) != '_') this[n] = this[n].bind(this);
	        }
	
	        return this;
	    };
	
	    FullEditor.prototype.registerKeyShortCut = function (key, fct) {
	
	        if (JSYG.isPlainObject(key)) {
	            for (var n in key) {
	                this.registerKeyShortCut(n, key[n]);
	            }return this;
	        }
	
	        if (this._keyShortCuts[key]) this._disableKeyShortCut(key);
	
	        this._keyShortCuts[key] = fct;
	
	        if (this.enabled) this._enableKeyShortCut(key, fct);
	
	        return this;
	    };
	
	    FullEditor.prototype.unregisterKeyShortCut = function (key) {
	
	        var that = this;
	
	        if (Array.isArray(key) || arguments.length > 1 && (key = [].slice.call(arguments))) {
	            key.forEach(that.unregisterKeyShortCut);
	            return this;
	        }
	
	        this._disableKeyShortCut(key, this._keyShortCuts[key]);
	
	        delete this._keyShortCuts[key];
	
	        return this;
	    };
	
	    FullEditor.prototype.selectAll = function () {
	
	        this.disableEdition();
	        this.enableSelection();
	        this.shapeEditor.selection.selectAll();
	
	        return this;
	    };
	
	    FullEditor.prototype.deselectAll = function () {
	
	        var isEnabled = this.shapeEditor.enabled;
	
	        if (!isEnabled) this.shapeEditor.enable();
	
	        this.shapeEditor.selection.deselectAll();
	
	        if (!isEnabled) this.shapeEditor.disable();
	
	        return this;
	    };
	
	    FullEditor.prototype._enableKeyShortCut = function (key, fct) {
	
	        if (typeof fct != 'function') throw new Error((typeof fct === "undefined" ? "undefined" : _typeof(fct)) + " instead of function expected");
	
	        new JSYG(document).on('keydown', null, key, fct);
	
	        return this;
	    };
	
	    FullEditor.prototype._disableKeyShortCut = function (key, fct) {
	
	        if (typeof fct != 'function') throw new Error((typeof fct === "undefined" ? "undefined" : _typeof(fct)) + " instead of function expected");
	
	        new JSYG(document).off('keydown', fct);
	
	        return this;
	    };
	
	    FullEditor.prototype.enableKeyShortCuts = function () {
	
	        var keys = this._keyShortCuts;
	
	        for (var n in keys) {
	            this._enableKeyShortCut(n, keys[n]);
	        }return this;
	    };
	
	    FullEditor.prototype.disableKeyShortCuts = function () {
	
	        var keys = this._keyShortCuts;
	
	        for (var n in keys) {
	            this._disableKeyShortCut(n, keys[n]);
	        }return this;
	    };
	
	    FullEditor.prototype._editText = true;
	
	    Object.defineProperty(FullEditor.prototype, 'editText', {
	        get: function get() {
	            return this._editText;
	        },
	        set: function set(value) {
	            this._editText = !!value;
	            if (!value) this.textEditor.hide();
	        }
	    });
	
	    Object.defineProperty(FullEditor.prototype, 'editPosition', {
	        get: function get() {
	            return this.shapeEditor.ctrlsDrag.enabled;
	        },
	        set: function set(value) {
	            this.shapeEditor.ctrlsDrag[(value ? 'en' : 'dis') + 'able']();
	        }
	    });
	
	    Object.defineProperty(FullEditor.prototype, 'editSize', {
	        get: function get() {
	            return this.shapeEditor.ctrlsResize.enabled;
	        },
	        set: function set(value) {
	            this.shapeEditor.ctrlsResize[(value ? 'en' : 'dis') + 'able']();
	        }
	    });
	
	    Object.defineProperty(FullEditor.prototype, 'editRotation', {
	        get: function get() {
	            return this.shapeEditor.ctrlsRotate.enabled;
	        },
	        set: function set(value) {
	            this.shapeEditor.ctrlsRotate[(value ? 'en' : 'dis') + 'able']();
	        }
	    });
	
	    Object.defineProperty(FullEditor.prototype, 'editPathMainPoints', {
	        get: function get() {
	            return this.shapeEditor.ctrlsMainPoints.enabled;
	        },
	        set: function set(value) {
	            this.shapeEditor.ctrlsMainPoints[(value ? 'en' : 'dis') + 'able']();
	        }
	    });
	
	    Object.defineProperty(FullEditor.prototype, 'editPathCtrlPoints', {
	        get: function get() {
	            return this.shapeEditor.ctrlsCtrlPoints.enabled;
	        },
	        set: function set(value) {
	            this.shapeEditor.ctrlsCtrlPoints[(value ? 'en' : 'dis') + 'able']();
	        }
	    });
	
	    Object.defineProperty(FullEditor.prototype, 'canvasResizable', {
	        get: function get() {
	            return this.zoomAndPan.resizable.enabled;
	        },
	        set: function set(value) {
	            this.zoomAndPan.resizable[(value ? 'en' : 'dis') + 'able']();
	        }
	    });
	
	    Object.defineProperty(FullEditor.prototype, 'keepShapesRatio', {
	        get: function get() {
	            return this.shapeEditor.ctrlsResize.keepRatio;
	        },
	        set: function set(value) {
	            value = !!value;
	            this.shapeEditor.ctrlsResize.keepRatio = value;
	            this._keepShapesRatio = value;
	            if (this.shapeEditor.display) this.shapeEditor.update();
	        }
	    });
	
	    Object.defineProperty(FullEditor.prototype, 'drawingPathMethod', {
	        get: function get() {
	            return this.pathDrawer.type;
	        },
	        set: function set(value) {
	
	            if (value != 'freehand' && value != 'point2point') throw new Error("Only 'freehand' and 'point2point' are allowed");
	
	            this.pathDrawer.type = value;
	        }
	    });
	
	    Object.defineProperty(FullEditor.prototype, 'autoSmoothPaths', {
	        get: function get() {
	            return this.shapeEditor.ctrlsMainPoints.autoSmooth;
	        },
	        set: function set(value) {
	
	            this.shapeEditor.ctrlsMainPoints.autoSmooth = value;
	        }
	    });
	
	    Object.defineProperty(FullEditor.prototype, 'useTransformAttr', {
	
	        get: function get() {
	
	            var dragType = this.shapeEditor.ctrlsDrag.type;
	            var resizeType = this.shapeEditor.ctrlsResize.type;
	
	            if (dragType != resizeType) throw new Error("dragType and resizeType are not the same");
	
	            return dragType;
	        },
	
	        set: function set(value) {
	
	            var oldValue = this.useTransformAttr;
	
	            if (value != oldValue) {
	
	                this.shapeEditor.ctrlsDrag.type = value ? 'transform' : 'attributes';
	                if (this.shapeEditor.ctrlsDrag.enabled) this.shapeEditor.ctrlsDrag.disable().enable();
	
	                this.shapeEditor.ctrlsResize.type = value ? 'transform' : 'attributes';
	                if (this.shapeEditor.ctrlsResize.enabled) this.shapeEditor.ctrlsResize.disable().enable();
	            }
	        }
	    });
	
	    FullEditor.prototype._nbLayers = 0;
	
	    FullEditor.prototype._currentLayer = null;
	
	    Object.defineProperty(FullEditor.prototype, 'currentLayer', {
	
	        get: function get() {
	            return this._currentLayer;
	        },
	
	        set: function set(value) {
	
	            var $node;
	
	            if (value != null) {
	
	                $node = new JSYG(this._getDocumentSelector() + ' #layer' + value);
	
	                if (!$node.length) throw new Error("Invalid value for currentLayer. No node found.");
	            }
	
	            this._currentLayer = value;
	
	            this.hideEditors();
	
	            this.editableShapes = this.editableShapes; //on force la valeur pour l'actualiser
	        }
	    });
	
	    FullEditor.prototype.getLayers = function () {
	
	        return new JSYG(this._getDocumentSelector()).find(".layer");
	    };
	
	    FullEditor.prototype.addLayer = function () {
	
	        var nb = ++this._nbLayers,
	            id = "layer" + nb,
	            g = new JSYG('<g>').addClass("layer").attr("id", id).appendTo(this._getDocumentSelector());
	
	        this.currentLayer = nb;
	
	        this.triggerChange();
	
	        return this;
	    };
	
	    FullEditor.prototype.removeLayer = function () {
	
	        if (!this.currentLayer) throw new Error("No layer selected");
	
	        new JSYG(this._getLayerSelector()).remove();
	
	        this._actuLayers();
	
	        this.currentLayer = null;
	
	        this.triggerChange();
	
	        return this;
	    };
	
	    FullEditor.prototype._getLayerSelector = function () {
	
	        return this._getDocumentSelector() + (this.currentLayer ? ' #layer' + this.currentLayer : '') + ' ';
	    };
	
	    FullEditor.prototype.getDocument = function () {
	
	        return document.querySelector(this._getDocumentSelector());
	    };
	
	    FullEditor.prototype._initUndoRedo = function () {
	
	        var that = this;
	
	        this.undoRedo = new UndoRedo();
	
	        this.undoRedo.on("change", function () {
	            //that.hideEditors();
	            that.trigger("change", that, that.getDocument());
	        });
	    };
	
	    FullEditor.prototype.hideEditors = function () {
	
	        this.shapeEditor.hide();
	        this.textEditor.hide();
	
	        return this;
	    };
	
	    FullEditor.prototype.enableSelection = function () {
	
	        this.disableEdition();
	        this.shapeEditor.enable();
	        return this;
	    };
	
	    FullEditor.prototype.disableSelection = function () {
	
	        this.hideEditors();
	
	        if (this.shapeEditor.enabled) this.shapeEditor.disable();
	
	        return this;
	    };
	
	    FullEditor.prototype.disableInsertion = function () {
	
	        this.disableInsertElement();
	
	        this.disableShapeDrawer();
	
	        return this;
	    };
	
	    FullEditor.registerPlugin = function (plugin) {
	
	        if (!plugin.name) throw new Error("Plugin must have a name property");
	
	        if (this._plugins.some(function (otherPlugin) {
	            return otherPlugin.name == plugin.name;
	        })) throw new Error(plugin.name + " plugin already exists");
	
	        this._plugins.push(plugin);
	
	        return this;
	    };
	
	    function isPrivate(name) {
	
	        return name.charAt(0) == '_';
	    }
	
	    FullEditor.prototype._createPlugin = function (plugin) {
	
	        plugin = Object.create(plugin);
	
	        plugin.set = JSYG.StdConstruct.prototype.set;
	
	        plugin.editor = this;
	
	        this[plugin.name] = function (method) {
	
	            var args = slice.call(arguments, 1);
	            var returnValue;
	            var prop;
	
	            if (!method || JSYG.isPlainObject(method)) {
	                args = [method];
	                method = "enable";
	            }
	
	            if (method == "get") {
	
	                prop = args[0];
	
	                if (isPrivate(prop)) throw new Error("property " + prop + " is private");
	
	                return plugin[args[0]];
	            }
	
	            if (!plugin[method]) throw new Error("method " + method + " does not exist");
	
	            if (isPrivate(method)) throw new Error("method " + method + " is private");
	
	            returnValue = plugin[method].apply(plugin, args);
	
	            return returnValue || this;
	        };
	    };
	
	    FullEditor.prototype._applyMethodPlugins = function (method) {
	
	        var that = this;
	
	        FullEditor._plugins.forEach(function (plugin) {
	
	            try {
	                that[plugin.name](method);
	            } catch (e) {}
	        });
	    };
	
	    FullEditor.prototype.disableEdition = function () {
	
	        this.disableInsertion();
	
	        this.disableMousePan();
	
	        this.disableSelection();
	
	        this.trigger("disableedition", this);
	
	        return this;
	    };
	
	    ["copy", "cut", "paste"].forEach(function (action) {
	
	        FullEditor.prototype[action] = function () {
	
	            if (action !== "paste" && !this.shapeEditor.display) return;
	
	            this.shapeEditor.clipBoard[action]();
	
	            return this;
	        };
	    });
	
	    FullEditor.prototype.duplicate = function () {
	
	        var cb = this.shapeEditor.clipBoard,
	            buffer = cb.buffer;
	
	        cb.copy();
	        cb.paste();
	        cb.buffer = buffer;
	
	        return this;
	    };
	
	    ["undo", "redo"].forEach(function (action) {
	
	        FullEditor.prototype[action] = function () {
	
	            this.hideEditors();
	
	            this.undoRedo[action]();
	
	            return this;
	        };
	    });
	
	    ["Front", "Backwards", "Forwards", "Back"].forEach(function (type) {
	
	        var methode = "move" + type;
	
	        FullEditor.prototype[methode] = function () {
	
	            var target = this.shapeEditor._target;
	
	            if (target) {
	                new JSYG(target)[methode]();
	                this.triggerChange();
	            }
	
	            return this;
	        };
	    });
	
	    ["Horiz", "Verti"].forEach(function (type) {
	
	        var methode = "move" + type;
	
	        FullEditor.prototype[methode] = function (value) {
	
	            var target = this.shapeEditor.target();
	            var dim;
	
	            if (target && target.length) {
	
	                dim = target.getDim();
	
	                target.setDim(type == "Horiz" ? { x: dim.x + value } : { y: dim.y + value });
	                this.shapeEditor.update();
	
	                this.triggerChange();
	            }
	
	            return this;
	        };
	    });
	
	    var regOperator = /^\s*(\+|-|\*|\/)=(\d+)\s*$/;
	
	    function parseValue(newValue, oldValue) {
	
	        var matches = regOperator.exec(newValue);
	
	        if (!matches) return newValue;
	
	        switch (matches[1]) {
	            case '+':
	                return oldValue + Number(matches[2]);
	            case '-':
	                return oldValue - Number(matches[2]);
	            case '*':
	                return oldValue * Number(matches[2]);
	            case '/':
	                return oldValue / Number(matches[2]);
	        }
	    }
	
	    FullEditor.prototype.dim = function (prop, value) {
	
	        if (JSYG.isPlainObject(prop) || value != null) return this._setDim(prop, value);else return this._getDim(prop, value);
	    };
	
	    FullEditor.prototype._getDim = function (prop) {
	
	        var target = this.shapeEditor.target();
	        var doc = this.getDocument();
	        var dim;
	
	        if (!target || !target.length) return null;
	
	        dim = target.getDim(doc);
	
	        return prop == null ? dim : dim[prop];
	    };
	
	    FullEditor.prototype._setDim = function (prop, value) {
	
	        var target = this.shapeEditor.target();
	        var change = false;
	        var doc = this.getDocument();
	        var n, newDim, oldDim;
	
	        if (!target || !target.length) return this;
	
	        if (JSYG.isPlainObject(prop)) newDim = JSYG.extend({}, prop);else {
	            newDim = {};
	            newDim[prop] = value;
	        }
	
	        oldDim = target.getDim(doc);
	
	        for (n in newDim) {
	
	            newDim[n] = parseValue(newDim[n], oldDim[n]);
	
	            if (newDim[n] != oldDim[n]) change = true;
	        }
	
	        if (change) {
	
	            newDim.from = doc;
	            newDim.keepRatio = this.keepShapesRatio;
	
	            target.setDim(newDim);
	            this.shapeEditor.update();
	            this.triggerChange();
	        }
	
	        return this;
	    };
	
	    FullEditor.prototype.rotate = function (value) {
	
	        var target = this.target(),
	            oldValue = target && target.rotate();
	
	        if (!target) return value == null ? null : this;
	
	        if (value == null) return oldValue;
	
	        value = parseValue(value, oldValue) - oldValue;
	
	        if (oldValue != value) {
	
	            target.rotate(value);
	            this.shapeEditor.update();
	            this.triggerChange();
	        }
	
	        return this;
	    };
	
	    FullEditor.prototype.css = function (prop, value) {
	
	        if (JSYG.isPlainObject(prop)) {
	            for (var n in prop) {
	                this.css(n, prop[n]);
	            }return this;
	        }
	
	        var target = this.target(),
	            oldValue = target && target.css(prop);
	
	        if (!target) return value == null ? null : this;
	
	        if (value == null) return oldValue;
	
	        value = parseValue(value, oldValue);
	
	        if (oldValue != value) {
	
	            target.css(prop, value);
	            this.shapeEditor.update();
	            this.triggerChange();
	        }
	
	        return this;
	    };
	
	    FullEditor.prototype.triggerChange = function () {
	
	        this.undoRedo.saveState();
	
	        this.trigger("change", this, this.getDocument());
	
	        return this;
	    };
	
	    FullEditor.prototype._insertFrame = function () {
	
	        var mainFrame = this.zoomAndPan.innerFrame,
	            content = new JSYG(mainFrame).children().detach();
	
	        this._frameShadow = new JSYG("<rect>").attr({ x: 2, y: 2 }).addClass("jsyg-doc-shadow").appendTo(mainFrame)[0];
	
	        this._frame = new JSYG("<rect>").attr({ x: 0, y: 0 }).addClass("jsyg-doc-frame").appendTo(mainFrame)[0];
	
	        this.containerDoc = new JSYG("<g>").attr("id", this.idContainer).append(content).appendTo(mainFrame)[0];
	
	        this._adjustSize();
	
	        return this;
	    };
	
	    FullEditor.prototype.cursorDrawing = "copy";
	
	    FullEditor.prototype._removeFrame = function () {
	
	        var container = new JSYG(this.containerDoc),
	            content = container.children();
	
	        new JSYG(this._frame).remove();
	        new JSYG(this._frameShadow).remove();
	        container.remove();
	
	        content.appendTo(this.zoomAndPan.innerFrame);
	
	        return this;
	    };
	
	    FullEditor.prototype._initShapeDrawer = function () {
	
	        this.pathDrawer = this._initDrawer(new PathDrawer());
	        this.polylineDrawer = this._initDrawer(new PolylineDrawer());
	        this.shapeDrawer = this._initDrawer(new ShapeDrawer());
	
	        return this;
	    };
	
	    FullEditor.prototype._initDrawer = function (drawer) {
	
	        var that = this;
	
	        drawer.on({
	
	            draw: function draw(e) {
	                that.trigger("draw", that, e, this);
	            },
	
	            end: function end(e) {
	
	                if (!this.parentNode) return;
	
	                that.trigger("insert", that, e, this);
	
	                that.triggerChange();
	
	                if (that.autoEnableSelection) that.shapeEditor.target(this).show();
	            }
	        });
	
	        return drawer;
	    };
	
	    FullEditor.prototype._setCursorDrawing = function () {
	
	        if (this.cursorDrawing) this.zoomAndPan.node.style.cursor = this.cursorDrawing;
	    };
	
	    FullEditor.prototype._removeCursorDrawing = function () {
	
	        if (this.cursorDrawing) this.zoomAndPan.node.style.cursor = null;
	    };
	
	    Object.defineProperty(FullEditor.prototype, "shapeDrawerModel", {
	
	        get: function get() {
	            return this._shapeDrawerModel;
	        },
	
	        set: function set(value) {
	
	            var jNode = new JSYG(value);
	
	            if (jNode.length != 1) throw new Error("Shape model incorrect");
	
	            if (JSYG.svgShapes.indexOf(jNode.getTag()) == -1) throw new Error(jNode.getTag() + " is not a svg shape");
	
	            this._shapeDrawerModel = jNode[0];
	        }
	    });
	
	    FullEditor.prototype.drawShape = function (modele) {
	
	        var that = this;
	
	        return new Promise(function (resolve, reject) {
	
	            that.enableShapeDrawer(modele, function () {
	
	                var target = that.target();
	
	                that.disableShapeDrawer();
	
	                if (target) resolve(target[0]);else reject(new Error("No shape was drawn"));
	            });
	        });
	    };
	
	    FullEditor.prototype.enableShapeDrawer = function (modele, _callback) {
	
	        var frame = new JSYG(this.zoomAndPan.innerFrame),
	            that = this;
	
	        this.disableEdition();
	
	        if (modele) this.shapeDrawerModel = modele;
	
	        function onmousedown(e) {
	
	            if (that.pathDrawer.inProgress || that.polylineDrawer.inProgress || that.shapeDrawer.inProgress || e.which != 1) return;
	
	            e.preventDefault();
	
	            var modele = that.shapeDrawerModel;
	            if (!modele) throw new Error("You must define a model");
	
	            var shape = new JSYG(modele).clone().appendTo(that._getLayerSelector());
	            var tag = shape.getTag();
	            var drawer;
	
	            switch (tag) {
	
	                case "polyline":case "polygon":
	                    drawer = that.polylineDrawer;break;
	
	                case "path":
	                    drawer = that.pathDrawer;break;
	
	                default:
	                    drawer = that.shapeDrawer;break;
	            }
	
	            drawer.area = frame;
	            drawer.draw(shape, e);
	
	            if (_callback) drawer.one("end", _callback);
	        }
	
	        frame.on("mousedown", onmousedown).data("enableDrawingShape", onmousedown);
	
	        this._setCursorDrawing();
	
	        return this;
	    };
	
	    FullEditor.prototype.disableShapeDrawer = function () {
	
	        var frame = new JSYG(this.zoomAndPan.innerFrame),
	            fct = frame.data("enableDrawingShape");
	
	        if (!fct) return this;
	
	        frame.off("mousedown", fct);
	
	        this._removeCursorDrawing();
	
	        return this;
	    };
	
	    FullEditor.prototype.autoEnableSelection = true;
	
	    Object.defineProperty(FullEditor.prototype, "insertElementModel", {
	
	        get: function get() {
	            return this._insertElementModel;
	        },
	
	        set: function set(value) {
	
	            var jNode = new JSYG(value);
	
	            if (jNode.length != 1) throw new Error("element model incorrect");
	
	            if (JSYG.svgGraphics.indexOf(jNode.getTag()) == -1) throw new Error(jNode.getTag() + " is not a svg graphic element");
	
	            this._insertElementModel = jNode[0];
	        }
	    });
	
	    FullEditor.prototype.is = function (type, _elmt) {
	
	        _elmt = _elmt || this.target();
	
	        var list = "svg" + JSYG.ucfirst(type) + "s";
	        var types = ["container", "graphic", "shape", "text"];
	
	        if (types.indexOf(type) == -1) throw new Error(type + " : type incorrect (" + types + " required)");
	
	        return JSYG[list].indexOf(JSYG(_elmt).getTag()) != -1;
	    };
	
	    FullEditor.prototype.mouseInsertElement = function (modele) {
	
	        var that = this;
	
	        return new Promise(function (resolve) {
	
	            that.enableInsertElement(modele, function () {
	
	                var target = that.target();
	
	                that.disableInsertElement();
	
	                if (target) resolve(target[0]);else reject(new Error("No element inserted"));
	            });
	        });
	    };
	
	    FullEditor.prototype.enableInsertElement = function (modele, _callback) {
	
	        var frame = new JSYG(this.zoomAndPan.innerFrame),
	            that = this;
	
	        this.disableEdition();
	
	        if (modele) this.insertElementModel = modele;
	
	        function onmousedown(e) {
	
	            if (e.which != 1) return;
	
	            e.preventDefault();
	
	            var modele = that.insertElementModel;
	            if (!modele) throw new Error("You must define a model");
	
	            var shape = new JSYG(modele).clone(),
	                isText = that.is("text", shape);
	
	            that.insertElement(shape, e, isText);
	
	            if (that.autoEnableSelection) {
	
	                new JSYG(that.node).one('mouseup', function () {
	
	                    that.shapeEditor.target(shape);
	
	                    if (that.editText && isText) {
	                        that.textEditor.target(shape).show();
	                        that.textEditor.one("validate", _callback);
	                    } else {
	                        that.shapeEditor.show();
	                        if (_callback) _callback();
	                    }
	                });
	            }
	        }
	
	        frame.on("mousedown", onmousedown).data("enableInsertElement", onmousedown);
	
	        this._setCursorDrawing();
	
	        return this;
	    };
	
	    FullEditor.prototype.disableInsertElement = function () {
	
	        var frame = new JSYG(this.zoomAndPan.innerFrame),
	            fct = frame.data("enableInsertElement");
	
	        if (!fct) return this;
	
	        frame.off("mousedown", fct);
	
	        this._removeCursorDrawing();
	
	        return this;
	    };
	
	    FullEditor.prototype.marqueeZoom = function (opt) {
	
	        var that = this;
	
	        return new Promise(function (resolve) {
	
	            that.enableMarqueeZoom(opt, function () {
	                that.disableMarqueeZoom();
	                resolve();
	            });
	        });
	    };
	
	    FullEditor.prototype.disableMarqueeZoom = function () {
	
	        this.zoomAndPan.marqueeZoom.disable();
	
	        return this;
	    };
	
	    FullEditor.prototype.enableMarqueeZoom = function (opt, _callback) {
	
	        if (this.zoomAndPan.marqueeZoom.enabled && !opt) return this;
	
	        this.disableEdition();
	
	        this.zoomAndPan.marqueeZoom.enable(opt);
	
	        if (_callback) this.zoomAndPan.marqueeZoom.one("end", _callback);
	
	        return this;
	    };
	
	    FullEditor.prototype.zoom = function (percent) {
	
	        this.zoomAndPan.scale(1 + percent / 100);
	
	        this.trigger("zoom", this, this.getDocument());
	
	        return this;
	    };
	
	    FullEditor.prototype.zoomTo = function (percentage) {
	
	        if (percentage == "canvas") this.zoomAndPan.fitToCanvas().scale(0.95);else if (JSYG.isNumeric(percentage)) this.zoomAndPan.scaleTo(percentage / 100);else throw new Error("argument must be numeric or 'canvas' string");
	
	        this.trigger("zoom", this, this.getDocument());
	
	        return this;
	    };
	
	    FullEditor.prototype.fitToDoc = function () {
	
	        var dim = new JSYG(this.getDocument()).getDim("screen"),
	            overflow = this.zoomAndPan.overflow;
	
	        this.zoomAndPan.size({
	            width: dim.width + (overflow != "hidden" ? 10 : 0),
	            height: dim.height + (overflow != "hidden" ? 10 : 0)
	        });
	
	        return this;
	    };
	
	    FullEditor.prototype._initZoomAndPan = function () {
	
	        var that = this;
	
	        this.zoomAndPan = new ZoomAndPan();
	        this.zoomAndPan.overflow = "auto";
	        this.zoomAndPan.scaleMin = 0;
	
	        this.zoomAndPan.resizable.keepViewBox = false;
	        this.zoomAndPan.resizable.keepRatio = false;
	
	        this.zoomAndPan.mouseWheelZoom.key = "ctrl";
	
	        this.zoomAndPan.on("change", function () {
	            that._updateBoundingBoxes();
	            that.shapeEditor.update();
	            that.textEditor.update();
	        });
	
	        return this;
	    };
	
	    FullEditor.prototype._initShapeEditor = function () {
	
	        var editor = new Editor();
	        var that = this;
	
	        editor.selection.multiple = true;
	
	        new JSYG(editor.container).on("dblclick", function (e) {
	
	            var target = editor.target();
	
	            if (!that.editText || JSYG.svgTexts.indexOf(target.getTag()) == -1) return;
	
	            that.textEditor.target(target).show();
	            that.textEditor.cursor.setFromPos(e);
	        });
	
	        editor.selection.on("beforedeselect beforedrag", function (e) {
	
	            if (e.target == that.textEditor.container || new JSYG(e.target).isChildOf(that.textEditor.container)) return false;
	        });
	
	        editor.on({
	
	            show: function show() {
	                that.textEditor.hide();
	            },
	
	            change: this.triggerChange,
	
	            drag: function drag(e) {
	                that.trigger("drag", that, e, editor._target);
	            },
	
	            changetarget: function changetarget() {
	                that.trigger("changetarget", that, editor._target);
	            }
	        });
	
	        //editor.ctrlsDrag.bounds = 0;
	        //editor.ctrlsResize.bounds = 0;
	
	        this.shapeEditor = editor;
	
	        return this;
	    };
	
	    FullEditor.prototype._initTextEditor = function () {
	
	        var that = this;
	
	        this.textEditor = new TextEditor();
	
	        this.textEditor.on({
	            show: function show() {
	                that.shapeEditor.hide();
	            },
	            hide: function hide() {
	                var target = that.textEditor.target();
	                if (!target.text()) target.remove();else that.shapeEditor.target(target).show();
	            },
	            validate: function validate() {
	                that.triggerChange();
	            }
	        });
	
	        return this;
	    };
	
	    FullEditor.prototype.setNode = function () {
	
	        JSYG.StdConstruct.prototype.setNode.apply(this, arguments);
	
	        this.zoomAndPan.setNode(this.node);
	
	        this.shapeEditor.setNode(this.node);
	
	        this.textEditor.setNode(this.node);
	
	        return this;
	    };
	
	    FullEditor.prototype._getDocumentSelector = function () {
	
	        return "#" + this.idContainer + " > svg ";
	    };
	
	    FullEditor.prototype._editableShapes = "*";
	
	    Object.defineProperty(FullEditor.prototype, 'editableShapes', {
	
	        get: function get() {
	            return this._editableShapes;
	        },
	
	        set: function set(value) {
	
	            this._editableShapes = value;
	            this.shapeEditor.list = this._getLayerSelector() + value;
	        }
	    });
	
	    FullEditor.prototype.enableMousePan = function (opt) {
	
	        if (!this.zoomAndPan.mousePan.enabled) {
	
	            this.disableEdition();
	
	            this.zoomAndPan.mousePan.enable(opt);
	        }
	
	        return this;
	    };
	
	    FullEditor.prototype.disableMousePan = function () {
	
	        if (this.zoomAndPan.mousePan.enabled) {
	
	            this.zoomAndPan.mousePan.disable();
	        }
	
	        return this;
	    };
	
	    FullEditor.prototype.enableMouseWheelZoom = function (opt) {
	
	        if (!this.zoomAndPan.mouseWheelZoom.enabled) {
	
	            this.zoomAndPan.mouseWheelZoom.enable(opt);
	        }
	
	        return this;
	    };
	
	    FullEditor.prototype.disableMouseWheelZoom = function () {
	
	        if (this.zoomAndPan.mouseWheelZoom.enabled) {
	
	            this.zoomAndPan.mouseWheelZoom.disable();
	        }
	
	        return this;
	    };
	
	    FullEditor.prototype.canMoveBackwards = function () {
	
	        var shapes = new JSYG(this.shapeEditor.list),
	            target = this.shapeEditor.target();
	
	        return shapes.index(target) > 0 && shapes.length > 1;
	    };
	
	    FullEditor.prototype.canMoveForwards = function () {
	
	        var shapes = new JSYG(this.shapeEditor.list),
	            target = this.shapeEditor.target();
	
	        return shapes.index(target) < shapes.length - 1 && shapes.length > 1;
	    };
	
	    FullEditor.prototype.isGroup = function () {
	
	        return this.shapeEditor.isGroup();
	    };
	
	    Object.defineProperty(FullEditor.prototype, 'overflow', {
	
	        get: function get() {
	            return this.zoomAndPan.overflow;
	        },
	
	        set: function set(value) {
	
	            var displayShapeEditor = this.shapeEditor.display,
	                displaytextEditor = this.textEditor.display;
	
	            if (displayShapeEditor) this.shapeEditor.hide();
	            if (displaytextEditor) this.textEditor.hide();
	
	            this.zoomAndPan.overflow = value;
	
	            if (displayShapeEditor) this.shapeEditor.show();
	            if (displaytextEditor) this.textEditor.show();
	        }
	    });
	
	    FullEditor.prototype.enable = function (opt) {
	
	        this.disable();
	
	        if (opt) this.set(opt);
	
	        if (!this.node) throw new Error("node is not defined");
	
	        this.zoomAndPan.enable();
	
	        this._insertFrame();
	
	        //on force les valeurs pour exécuter les fonctions définies dans Object.defineProperty
	        if (this._editPathCtrlPoints) this._editPathCtrlPoints = true;
	        if (this._resizable) this._resizable = true;
	        this.editableShapes = this.editableShapes;
	
	        this.shapeEditor.enableCtrls('drag', 'resize', 'rotate', 'mainPoints');
	
	        if (this.autoEnableSelection) this.shapeEditor.enable();
	
	        this.enableKeyShortCuts();
	
	        this.enabled = true;
	
	        return this;
	    };
	
	    FullEditor.prototype.disable = function () {
	
	        this.disableEdition();
	
	        this._removeFrame();
	
	        this.zoomAndPan.disable();
	
	        this.undoRedo.disable();
	
	        this.disableKeyShortCuts();
	
	        this.enabled = false;
	
	        return this;
	    };
	
	    /**
	     * Aligne les éléments sélectionnés
	     * @param {String} type (top,middle,bottom,left,center,right)
	     * @returns {undefined}
	     */
	    FullEditor.prototype.align = function (type) {
	
	        this.shapeEditor.align(type);
	
	        return this;
	    };
	
	    FullEditor.prototype.target = function (value) {
	
	        if (value == null) {
	
	            if (this.textEditor.display) return this.textEditor.target();else return this.shapeEditor.target();
	        } else {
	
	            this.shapeEditor.target(new JSYG(this.getDocument()).find(value)).show();
	        }
	
	        return this;
	    };
	
	    FullEditor.prototype.editTextElmt = function (elmt) {
	
	        if (elmt == null) elmt = this.target();
	
	        this.textEditor.target(elmt).show();
	
	        return this;
	    };
	
	    FullEditor.prototype.dimDocument = function (dim) {
	
	        var doc = new JSYG(this.getDocument());
	        var oldDim = doc.getDim();
	
	        if (dim == null) return oldDim;
	
	        if (dim.width && dim.width != oldDim.width || dim.height && dim.height != oldDim.height) {
	
	            doc.setDim(dim);
	
	            this.triggerChange();
	
	            this._adjustSize();
	        }
	
	        return this;
	    };
	
	    FullEditor.prototype.isMultiSelection = function () {
	
	        return this.shapeEditor.isMultiSelection();
	    };
	
	    FullEditor.prototype._adjustSize = function () {
	
	        var contenu = new JSYG(this.getDocument()),
	            dim = contenu.length && contenu.getDim() || { width: 0, height: 0 };
	
	        new JSYG(this._frameShadow).add(this._frame).attr({
	            width: dim.width,
	            height: dim.height
	        });
	
	        if (dim.width && dim.height) this.zoomTo('canvas');
	
	        if (!this.shapeEditor.ctrlsDrag.options) this.shapeEditor.ctrlsDrag.options = {};
	        if (!this.shapeEditor.ctrlsResize.options) this.shapeEditor.ctrlsResize.options = {};
	
	        this.shapeEditor.ctrlsDrag.options.guides = {
	            list: [{ x: 0 }, { x: dim.width }, { y: 0 }, { y: dim.height }]
	        };
	
	        this.shapeEditor.ctrlsResize.options.stepsX = {
	            list: [0, dim.width]
	        };
	
	        this.shapeEditor.ctrlsResize.options.stepsY = {
	            list: [0, dim.height]
	        };
	
	        return this;
	    };
	
	    FullEditor.prototype.createImage = function (src) {
	
	        var image = new JSYG('<image>').attr('href', src),
	            that = this;
	
	        return new Promise(function (resolve, reject) {
	
	            var img = new Image();
	
	            img.onload = function () {
	
	                var dimDoc = JSYG(that.getDocument()).viewBox(),
	                    height = this.height,
	                    width = this.width;
	
	                if (width > dimDoc.width) {
	                    height = height * dimDoc.width / width;
	                    width = dimDoc.width;
	                }
	
	                if (height > dimDoc.height) {
	                    width = width * dimDoc.height / height;
	                    height = dimDoc.height;
	                }
	
	                image.attr({ width: width, height: height });
	
	                resolve(image[0]);
	            };
	
	            img.onerror = reject;
	
	            img.src = src;
	        });
	    };
	
	    FullEditor.prototype.insertElement = function (elmt, pos, _preventEvent) {
	
	        var textNode;
	
	        elmt = new JSYG(elmt);
	
	        elmt.appendTo(this._getLayerSelector());
	
	        if (JSYG.svgTexts.indexOf(elmt.getTag()) != -1 && !elmt.text()) {
	            textNode = document.createTextNode("I");
	            elmt.append(textNode);
	        }
	
	        if (pos instanceof JSYG.Event) elmt.setCenter(elmt.getCursorPos(pos));else {
	
	            elmt.setDim({
	                x: pos && pos.x || 0,
	                y: pos && pos.y || 0
	            });
	        }
	
	        if (textNode) new JSYG(textNode).remove();
	
	        if (!_preventEvent) {
	
	            this.trigger("insert", this, this.getDocument(), elmt);
	            this.triggerChange();
	        }
	
	        return this;
	    };
	
	    function stopEvents(e) {
	        e.stopPropagation();
	        e.preventDefault();
	    }
	
	    FullEditor.prototype.lang = "en";
	
	    FullEditor.prototype.importSVGAs = "image";
	
	    FullEditor.prototype.enableDropFiles = function () {
	
	        var that = this;
	
	        var fcts = {
	
	            dragenter: stopEvents,
	            dragover: stopEvents,
	
	            drop: function drop(e) {
	
	                stopEvents(e);
	
	                var dt = e.originalEvent.dataTransfer;
	
	                if (!dt || !dt.files || !dt.files.length) return;
	
	                var file = dt.files[0];
	
	                if (/svg/i.test(file.type) && that.importSVGAs.toLowerCase() == "svg") that.insertSVGFile(file, e);else that.insertImageFile(file, e);
	            }
	        };
	
	        JSYG(this.zoomAndPan.innerFrame).on(fcts);
	
	        this.disableDropFiles = function () {
	
	            JSYG(this.zoomAndPan.innerFrame).off(fcts);
	        };
	
	        return this;
	    };
	
	    FullEditor.prototype.disableDropFiles = function () {
	        return this;
	    };
	
	    FullEditor.prototype.insertImageFile = function (file, e) {
	
	        var that = this;
	
	        return this.importImage(file).then(function (img) {
	            that.insertElement(img, e);
	            that.shapeEditor.target(img).show();
	        });
	    };
	
	    FullEditor.prototype.insertSVGFile = function (file, e) {
	
	        var that = this;
	
	        return this.readFile(file, "text").then(JSYG.parseSVG).then(function (svg) {
	            that.insertElement(svg, e);
	            that.shapeEditor.target(svg).show();
	        });
	    };
	
	    FullEditor.prototype.importImage = function (arg) {
	
	        var promise;
	
	        if (arg instanceof File) {
	
	            if (!arg.type.match(/image/)) return Promise.reject(new TypeError(arg.name + " is not an image file"));
	
	            promise = this.readFile(arg, 'dataURL');
	        } else {
	
	            if (arg.src) arg = arg.src; //DOMElement
	            else if (arg instanceof jQuery) {
	
	                    arg = JSYG(arg);
	                    arg = arg.attr(arg.isSVG() ? 'href' : 'src');
	
	                    if (!arg) throw new TypeError("no src/href attribute found");
	                } else if (typeof arg != "string") throw new TypeError("argument incorrect"); //URL or dataURL
	
	            promise = Promise.resolve(arg);
	        }
	
	        return promise.then(this.createImage);
	    };
	
	    FullEditor.prototype.chooseFile = function () {
	
	        var that = this;
	
	        return new Promise(function (resolve, reject) {
	
	            JSYG("<input>").attr("type", "file").on("change", function () {
	
	                resolve(this.files[0]);
	            }).trigger("click");
	        });
	    };
	
	    FullEditor.prototype.loadImageAsDoc = function (arg) {
	
	        var that = this;
	
	        return this.importImage(arg).then(function (img) {
	
	            var dim;
	
	            that.insertElement(img);
	
	            dim = JSYG(img).getDim();
	
	            that.newDocument(dim.width, dim.height);
	            that.insertElement(img);
	            that.addLayer();
	
	            that.undoRedo.clear();
	
	            return img;
	        });
	    };
	
	    FullEditor.prototype.load = function (arg) {
	
	        if (arg instanceof File) return this.loadFile(arg);else if (typeof arg == "string") {
	            if (arg.indexOf("<?xml") == 0 || arg.indexOf("<svg") == 0) return this.loadString(arg);else return this.loadURL(arg);
	        } else return this.loadXML();
	    };
	
	    FullEditor.prototype.loadString = function (str) {
	
	        return this.loadXML(JSYG.parseSVG(str));
	    };
	
	    FullEditor.prototype.readFile = function (file, readAs) {
	
	        return new Promise(function (resolve, reject) {
	
	            if (!window.FileReader) throw new Error("your navigator doesn't implement FileReader");
	
	            if (!(file instanceof File)) throw new Error("file argument incorrect");
	
	            var reader = new FileReader();
	
	            readAs = JSYG.ucfirst(readAs || 'text');
	
	            if (['DataURL', 'Text'].indexOf(readAs) == -1) throw new Error("format incorrect");
	
	            reader.onload = function (e) {
	                resolve(e.target.result);
	            };
	
	            reader.onerror = function (e) {
	                reject(new Error("Impossible de charger le fichier"));
	            };
	
	            reader['readAs' + readAs](file);
	        });
	    };
	
	    FullEditor.prototype.loadFile = function (file) {
	
	        if (!file.type || !file.type.match(/svg/)) throw new Error("file format incorrect. SVG file is required.");
	
	        return this.readFile(file).then(this.loadString.bind(this));
	    };
	
	    FullEditor.prototype.loadURL = function (url) {
	
	        return jfetch(url).then(function (response) {
	            return response.text();
	        }).then(this.loadString.bind(this));
	    };
	
	    FullEditor.prototype._actuLayers = function (svg) {
	
	        var layers = this.getLayers();
	
	        layers.each(function (i) {
	
	            this.id = "layer" + (i + 1);
	        });
	
	        this._nbLayers = layers.length;
	    };
	
	    FullEditor.prototype.loadXML = function (svg) {
	
	        var container;
	
	        this.shapeEditor.hide();
	        this.textEditor.hide();
	        this._clearBoundingBoxes();
	
	        container = new JSYG('#' + this.idContainer);
	
	        container.empty().append(svg);
	
	        this._adjustSize();
	
	        this.currentLayer = null;
	        this._actuLayers();
	
	        this.undoRedo.disable().setNode(svg).enable();
	
	        this.trigger("load", this, svg);
	
	        return this;
	    };
	
	    FullEditor.prototype.newDocument = function (width, height) {
	
	        var dim;
	
	        if (!width || !height) {
	
	            dim = this.dimDocument();
	
	            if (dim) {
	                if (!width) width = dim.width;
	                if (!height) height = dim.height;
	            } else throw new Error("You need to specify width and height");
	        }
	
	        var svg = new JSYG('<svg>').setDim({ width: width, height: height });
	
	        return this.loadXML(svg);
	    };
	
	    FullEditor.prototype._updateBoundingBoxes = function () {
	
	        new JSYG(this.shapeEditor.list).each(function () {
	            var $this = new JSYG(this);
	            if ($this.boundingBox("get", "display")) $this.boundingBox("update");
	        });
	    };
	
	    FullEditor.prototype._clearBoundingBoxes = function () {
	
	        new JSYG(this.shapeEditor.list).boundingBox("hide");
	    };
	
	    FullEditor.prototype.toCanvas = function () {
	
	        return new JSYG(this.getDocument()).toCanvas();
	    };
	
	    FullEditor.prototype.toSVGString = function () {
	
	        return new JSYG(this.getDocument()).toSVGString(true);
	    };
	
	    FullEditor.prototype.toSVGDataURL = function () {
	
	        return new JSYG(this.getDocument()).toDataURL(true);
	    };
	
	    FullEditor.prototype.toPNGDataURL = function (format) {
	
	        return this.toCanvas().then(function (canvas) {
	
	            return canvas.toDataURL();
	        });
	    };
	
	    FullEditor.prototype._checkExportFormat = function (format) {
	
	        var exportFormats = ['svg', 'png'];
	
	        if (exportFormats.indexOf(format) == -1) throw new Error(format + " : incorrect format (" + exportFormats.join(' or ') + " required)");
	    };
	
	    FullEditor.prototype.toDataURL = function (format) {
	
	        if (!format) format = 'svg';
	
	        this._checkExportFormat(format);
	
	        var method = "to" + format.toUpperCase() + "DataURL";
	
	        return this[method]();
	    };
	
	    FullEditor.prototype.print = function () {
	
	        return this.toSVGDataURL().then(function (url) {
	            var win = window.open(url);
	            win.onload = function () {
	                win.print();
	            };
	        });
	    };
	
	    FullEditor.prototype.downloadPNG = function () {
	
	        return this.download("png");
	    };
	
	    FullEditor.prototype.downloadSVG = function () {
	
	        return this.download("svg");
	    };
	
	    FullEditor.prototype.download = function (format) {
	
	        if (!format) format = 'svg';
	
	        return this.toDataURL(format).then(function (url) {
	
	            var a = new JSYG('<a>').attr({
	                href: url,
	                download: "file." + format
	            }).appendTo('body');
	
	            a[0].click();
	            a.remove();
	        });
	    };
	
	    FullEditor.prototype.remove = function () {
	
	        if (!this.shapeEditor.display) return;
	
	        var target = this.shapeEditor.target();
	
	        this.shapeEditor.hide();
	
	        this._clearBoundingBoxes();
	
	        target.remove();
	
	        this.trigger("remove", this, this.getDocument(), target);
	
	        this.triggerChange();
	
	        return this;
	    };
	
	    FullEditor.prototype.group = function () {
	
	        this.shapeEditor.group();
	
	        this.triggerChange();
	
	        return this;
	    };
	
	    FullEditor.prototype.ungroup = function () {
	
	        this.shapeEditor.ungroup();
	
	        this.triggerChange();
	
	        return this;
	    };
	
	    FullEditor.prototype.center = function (orientation) {
	
	        var doc = this.getDocument(),
	            dimDoc = new JSYG(doc).getDim(),
	            target = this.target(),
	            dim = target.getDim(doc),
	            isVerti = orientation.toLowerCase().indexOf("verti") == 0,
	            newX = (dimDoc.width - dim.width) / 2,
	            newY = (dimDoc.height - dim.height) / 2;
	
	        if (isVerti && dim.x != newX) target.setDim({ x: newX });else if (!isVerti && dim.y != newY) target.setDim({ y: newY });else return this;
	
	        if (this.shapeEditor.display) this.shapeEditor.update();else if (this.textEditor.display) this.textEditor.update();
	
	        this.triggerChange();
	
	        return this;
	    };
	
	    FullEditor.prototype.centerVertically = function () {
	
	        return this.center("vertically");
	    };
	
	    FullEditor.prototype.centerHorizontally = function () {
	
	        return this.center("horizontally");
	    };
	
	    JSYG.FullEditor = FullEditor;
	
	    return FullEditor;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(475)))

/***/ },

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(476);

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;}; /*!
	 * jQuery JavaScript Library v2.2.2
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-03-17T17:51Z
	 */(function(global,factory){if(( false?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){ // For CommonJS and CommonJS-like environments where a proper `window`
	// is present, execute the factory and get jQuery.
	// For environments that do not have a `window` with a `document`
	// (such as Node.js), expose a factory as module.exports.
	// This accentuates the need for the creation of a real `window`.
	// e.g. var jQuery = require("jquery")(window);
	// See ticket #14549 for more info.
	module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else {factory(global);} // Pass this if window is not defined yet
	})(typeof window!=="undefined"?window:undefined,function(window,noGlobal){ // Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr=[];var document=window.document;var _slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var version="2.2.2", // Define a local copy of jQuery
	jQuery=function jQuery(selector,context){ // The jQuery object is actually just the init constructor 'enhanced'
	// Need init if jQuery is called (just allow error to be thrown if not included)
	return new jQuery.fn.init(selector,context);}, // Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, // Matches dashed string for camelizing
	rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi, // Used by jQuery.camelCase as callback to replace()
	fcamelCase=function fcamelCase(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={ // The current version of jQuery being used
	jquery:version,constructor:jQuery, // Start with an empty selector
	selector:"", // The default length of a jQuery object is 0
	length:0,toArray:function toArray(){return _slice.call(this);}, // Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get:function get(num){return num!=null? // Return just the one element from the set
	num<0?this[num+this.length]:this[num]: // Return all the elements in a clean array
	_slice.call(this);}, // Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack:function pushStack(elems){ // Build a new jQuery matched element set
	var ret=jQuery.merge(this.constructor(),elems); // Add the old object onto the stack (as a reference)
	ret.prevObject=this;ret.context=this.context; // Return the newly-formed element set
	return ret;}, // Execute a callback for every element in the matched set.
	each:function each(callback){return jQuery.each(this,callback);},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function slice(){return this.pushStack(_slice.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function end(){return this.prevObject||this.constructor();}, // For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false; // Handle a deep copy situation
	if(typeof target==="boolean"){deep=target; // Skip the boolean and the target
	target=arguments[i]||{};i++;} // Handle case when target is a string or something (possible in deep copy)
	if((typeof target==="undefined"?"undefined":_typeof(target))!=="object"&&!jQuery.isFunction(target)){target={};} // Extend jQuery itself if only one argument is passed
	if(i===length){target=this;i--;}for(;i<length;i++){ // Only deal with non-null/undefined values
	if((options=arguments[i])!=null){ // Extend the base object
	for(name in options){src=target[name];copy=options[name]; // Prevent never-ending loop
	if(target===copy){continue;} // Recurse if we're merging plain objects or arrays
	if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else {clone=src&&jQuery.isPlainObject(src)?src:{};} // Never move original objects, clone them
	target[name]=jQuery.extend(deep,clone,copy); // Don't bring in undefined values
	}else if(copy!==undefined){target[name]=copy;}}}} // Return the modified object
	return target;};jQuery.extend({ // Unique for each copy of jQuery on the page
	expando:"jQuery"+(version+Math.random()).replace(/\D/g,""), // Assume jQuery is ready without the ready module
	isReady:true,error:function error(msg){throw new Error(msg);},noop:function noop(){},isFunction:function isFunction(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray,isWindow:function isWindow(obj){return obj!=null&&obj===obj.window;},isNumeric:function isNumeric(obj){ // parseFloat NaNs numeric-cast false positives (null|true|false|"")
	// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	// subtraction forces infinities to NaN
	// adding 1 corrects loss of precision from parseFloat (#15100)
	var realStringObj=obj&&obj.toString();return !jQuery.isArray(obj)&&realStringObj-parseFloat(realStringObj)+1>=0;},isPlainObject:function isPlainObject(obj){var key; // Not plain objects:
	// - Any object or value whose internal [[Class]] property is not "[object Object]"
	// - DOM nodes
	// - window
	if(jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;} // Not own constructor property must be Object
	if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype||{},"isPrototypeOf")){return false;} // Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own
	for(key in obj){}return key===undefined||hasOwn.call(obj,key);},isEmptyObject:function isEmptyObject(obj){var name;for(name in obj){return false;}return true;},type:function type(obj){if(obj==null){return obj+"";} // Support: Android<4.0, iOS<6 (functionish RegExp)
	return (typeof obj==="undefined"?"undefined":_typeof(obj))==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj==="undefined"?"undefined":_typeof(obj);}, // Evaluates a script in a global context
	globalEval:function globalEval(code){var script,indirect=eval;code=jQuery.trim(code);if(code){ // If the code includes a valid, prologue position
	// strict mode pragma, execute code by injecting a
	// script tag into the document.
	if(code.indexOf("use strict")===1){script=document.createElement("script");script.text=code;document.head.appendChild(script).parentNode.removeChild(script);}else { // Otherwise, avoid the DOM node creation, insertion
	// and removal by using an indirect global eval
	indirect(code);}}}, // Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase:function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function each(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else {for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}return obj;}, // Support: Android<4.1
	trim:function trim(text){return text==null?"":(text+"").replace(rtrim,"");}, // results is for internal usage only
	makeArray:function makeArray(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else {push.call(ret,arr);}}return ret;},inArray:function inArray(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},merge:function merge(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}first.length=i;return first;},grep:function grep(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert; // Go through the array, only saving the items
	// that pass the validator function
	for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}return matches;}, // arg is for internal usage only
	map:function map(elems,callback,arg){var length,value,i=0,ret=[]; // Go through the array, translating each of the items to their new values
	if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}} // Go through every key on the object,
	}else {for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}} // Flatten any nested arrays
	return concat.apply([],ret);}, // A global GUID counter for objects
	guid:1, // Bind a function to a context, optionally partially applying any
	// arguments.
	proxy:function proxy(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;} // Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if(!jQuery.isFunction(fn)){return undefined;} // Simulated bind
	args=_slice.call(arguments,2);proxy=function proxy(){return fn.apply(context||this,args.concat(_slice.call(arguments)));}; // Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now, // jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support:support}); // JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];} /* jshint ignore: end */ // Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){ // Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length=!!obj&&"length" in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj;}var Sizzle= /*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate, // Local document vars
	setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains, // Instance-specific data
	expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function sortOrder(a,b){if(a===b){hasDuplicate=true;}return 0;}, // General-purpose constants
	MAX_NEGATIVE=1<<31, // Instance methods
	hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice, // Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf=function indexOf(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}return -1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace="[\\x20\\t\\r\\n\\f]", // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+ // Operator (capture 2)
	"*([*^$|!~]?=)"+whitespace+ // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
	"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+ // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
	// 1. quoted (capture 3; capture 4 or capture 5)
	"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+ // 2. simple (capture 6)
	"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+ // 3. anything else (capture 2)
	".*"+")\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"), // For use in libraries implementing .is()
	// We use this for POS matching in `select`
	"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/, // Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g, // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function funescape(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000; // NaN means non-codepoint
	// Support: Firefox<24
	// Workaround erroneous numeric interpretation of +"0x"
	return high!==high||escapedWhitespace?escaped:high<0? // BMP codepoint
	String.fromCharCode(high+0x10000): // Supplemental Plane codepoint (surrogate pair)
	String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);}, // Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler=function unloadHandler(){setDocument();}; // Optimize for push.apply( _, NodeList )
	try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes); // Support: Android<4.0
	// Detect silently failing push.apply
	arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length? // Leverage slice if possible
	function(target,els){push_native.apply(target,slice.call(els));}: // Support: IE<9
	// Otherwise append directly
	function(target,els){var j=target.length,i=0; // Can't trust NodeList.length
	while(target[j++]=els[i++]){}target.length=j-1;}};}function Sizzle(selector,context,results,seed){var m,i,elem,nid,nidselect,match,groups,newSelector,newContext=context&&context.ownerDocument, // nodeType defaults to 9, since context defaults to document
	nodeType=context?context.nodeType:9;results=results||[]; // Return early from calls with invalid selector or context
	if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;} // Try to shortcut find operations (as opposed to filters) in HTML documents
	if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}context=context||document;if(documentIsHTML){ // If the selector is sufficiently simple, try using a "get*By*" DOM method
	// (excepting DocumentFragment context, where the methods don't exist)
	if(nodeType!==11&&(match=rquickExpr.exec(selector))){ // ID selector
	if(m=match[1]){ // Document context
	if(nodeType===9){if(elem=context.getElementById(m)){ // Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(elem.id===m){results.push(elem);return results;}}else {return results;} // Element context
	}else { // Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}} // Type selector
	}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results; // Class selector
	}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}} // Take advantage of querySelectorAll
	if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector; // qSA looks outside Element context, which is not what we want
	// Thanks to Andrew Dupont for this workaround technique
	// Support: IE <=8
	// Exclude object elements
	}else if(context.nodeName.toLowerCase()!=="object"){ // Capture the context ID, setting it first if necessary
	if(nid=context.getAttribute("id")){nid=nid.replace(rescape,"\\$&");}else {context.setAttribute("id",nid=expando);} // Prefix every selector in the list
	groups=tokenize(selector);i=groups.length;nidselect=ridentifier.test(nid)?"#"+nid:"[id='"+nid+"']";while(i--){groups[i]=nidselect+" "+toSelector(groups[i]);}newSelector=groups.join(","); // Expand context for sibling selectors
	newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally {if(nid===expando){context.removeAttribute("id");}}}}}} // All others
	return select(selector.replace(rtrim,"$1"),context,results,seed);} /**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */function createCache(){var keys=[];function cache(key,value){ // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
	if(keys.push(key+" ")>Expr.cacheLength){ // Only keep the most recent entries
	delete cache[keys.shift()];}return cache[key+" "]=value;}return cache;} /**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */function markFunction(fn){fn[expando]=true;return fn;} /**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */function assert(fn){var div=document.createElement("div");try{return !!fn(div);}catch(e){return false;}finally { // Remove from its parent by default
	if(div.parentNode){div.parentNode.removeChild(div);} // release memory in IE
	div=null;}} /**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}} /**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-(~a.sourceIndex||MAX_NEGATIVE); // Use IE sourceIndex if available on both nodes
	if(diff){return diff;} // Check if b follows a
	if(cur){while(cur=cur.nextSibling){if(cur===b){return -1;}}}return a?1:-1;} /**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};} /**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return (name==="input"||name==="button")&&elem.type===type;};} /**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length; // Match elements found at the specified indexes
	while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j]);}}});});} /**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;} // Expose support vars for convenience
	support=Sizzle.support={}; /**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */isXML=Sizzle.isXML=function(elem){ // documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;}; /**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */setDocument=Sizzle.setDocument=function(node){var hasCompare,parent,doc=node?node.ownerDocument||node:preferredDoc; // Return early if doc is invalid or already selected
	if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;} // Update global variables
	document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document); // Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if((parent=document.defaultView)&&parent.top!==parent){ // Support: IE 11
	if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,false); // Support: IE 9 - 10 only
	}else if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler);}} /* Attributes
		---------------------------------------------------------------------- */ // Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes=assert(function(div){div.className="i";return !div.getAttribute("className");}); /* getElement(s)By*
		---------------------------------------------------------------------- */ // Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName=assert(function(div){div.appendChild(document.createComment(""));return !div.getElementsByTagName("*").length;}); // Support: IE<9
	support.getElementsByClassName=rnative.test(document.getElementsByClassName); // Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById=assert(function(div){docElem.appendChild(div).id=expando;return !document.getElementsByName||!document.getElementsByName(expando).length;}); // ID find and filter
	if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var m=context.getElementById(id);return m?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else { // Support: IE6/7
	// getElementById is not reliable as a find shortcut
	delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};} // Tag
	Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
	}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0, // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
	results=context.getElementsByTagName(tag); // Filter out possible comments
	if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem);}}return tmp;}return results;}; // Class
	Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}}; /* QSA/matchesSelector
		---------------------------------------------------------------------- */ // QSA and matchesSelector support
	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches=[]; // qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA=[];if(support.qsa=rnative.test(document.querySelectorAll)){ // Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert(function(div){ // Select is set to empty string on purpose
	// This is to test IE's treatment of not explicitly
	// setting a boolean content attribute,
	// since its presence should be enough
	// http://bugs.jquery.com/ticket/12359
	docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
	// Nothing should be selected when empty strings follow ^= or $= or *=
	// The test attribute must be unknown in Opera but "safe" for WinRT
	// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
	if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");} // Support: IE8
	// Boolean attributes and "value" are not treated correctly
	if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");} // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
	if(!div.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");} // Webkit/Opera - :checked should return selected option elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");} // Support: Safari 8+, iOS 8+
	// https://bugs.webkit.org/show_bug.cgi?id=136851
	// In-page `selector#id sibing-combinator selector` fails
	if(!div.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(div){ // Support: Windows 8 Native Apps
	// The type and name attributes are restricted during .innerHTML assignment
	var input=document.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D"); // Support: IE8
	// Enforce case-sensitivity of name attribute
	if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");} // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");} // Opera 10-11 does not throw on post-comma invalid pseudos
	div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(div){ // Check to see if it's possible to do matchesSelector
	// on a disconnected node (IE 9)
	support.disconnectedMatch=matches.call(div,"div"); // This should fail with an exception
	// Gecko does not error, returns false instead
	matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|")); /* Contains
		---------------------------------------------------------------------- */hasCompare=rnative.test(docElem.compareDocumentPosition); // Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true;}}}return false;}; /* Sorting
		---------------------------------------------------------------------- */ // Document order sorting
	sortOrder=hasCompare?function(a,b){ // Flag for duplicate removal
	if(a===b){hasDuplicate=true;return 0;} // Sort on method existence if only one input has compareDocumentPosition
	var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;} // Calculate position if both inputs belong to the same document
	compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b): // Otherwise we know they are disconnected
	1; // Disconnected nodes
	if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){ // Choose the first element that is related to our preferred document
	if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return -1;}if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;} // Maintain original order
	return sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;}return compare&4?-1:1;}:function(a,b){ // Exit early if the nodes are identical
	if(a===b){hasDuplicate=true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b]; // Parentless nodes are either documents or disconnected
	if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0; // If the nodes are siblings, we can do a quick check
	}else if(aup===bup){return siblingCheck(a,b);} // Otherwise we need full lists of their ancestors for comparison
	cur=a;while(cur=cur.parentNode){ap.unshift(cur);}cur=b;while(cur=cur.parentNode){bp.unshift(cur);} // Walk down the tree looking for a discrepancy
	while(ap[i]===bp[i]){i++;}return i? // Do a sibling check if the nodes have a common ancestor
	siblingCheck(ap[i],bp[i]): // Otherwise nodes in our document sort first
	ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){ // Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);} // Make sure that attribute selectors are quoted
	expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr); // IE 9's matchesSelector returns false on disconnected nodes
	if(ret||support.disconnectedMatch|| // As well, disconnected nodes are said to be in a document
	// fragment in IE 9
	elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){ // Set document vars if needed
	if((context.ownerDocument||context)!==document){setDocument(context);}return contains(context,elem);};Sizzle.attr=function(elem,name){ // Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (jQuery #13807)
	val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);}; /**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0; // Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i);}}while(j--){results.splice(duplicates[j],1);}} // Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput=null;return results;}; /**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){ // If no nodeType, this is expected to be an array
	while(node=elem[i++]){ // Do not traverse comment nodes
	ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){ // Use textContent for elements
	// innerText usage removed for consistency of new lines (jQuery #11153)
	if(typeof elem.textContent==="string"){return elem.textContent;}else { // Traverse its children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;} // Do not include comment or processing instruction nodes
	return ret;};Expr=Sizzle.selectors={ // Can be adjusted by the user
	cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function ATTR(match){match[1]=match[1].replace(runescape,funescape); // Move the given value to match[3] whether quoted or unquoted
	match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}return match.slice(0,4);},"CHILD":function CHILD(match){ /* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){ // nth-* requires argument
	if(!match[3]){Sizzle.error(match[0]);} // numeric x and y parameters for Expr.filter.CHILD
	// remember that false/true cast respectively to 0/1
	match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd"); // other types prohibit arguments
	}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function PSEUDO(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;} // Accept quoted arguments as-is
	if(match[3]){match[2]=match[4]||match[5]||""; // Strip excess characters from unquoted arguments
	}else if(unquoted&&rpseudo.test(unquoted)&&( // Get excess from tokenize (recursively)
	excess=tokenize(unquoted,true))&&( // advance to the next closing parenthesis
	excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){ // excess is a negative index
	match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);} // Return only captures needed by the pseudo filter method (type and argument)
	return match.slice(0,3);}},filter:{"TAG":function TAG(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function CLASS(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function ATTR(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}if(!operator){return true;}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function CHILD(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0? // Shortcut for :nth-*(n)
	function(elem){return !!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){ // :(first|last|only)-(child|of-type)
	if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}} // Reverse direction for :only-* (if we haven't yet done so)
	start=dir=type==="only"&&!start&&"nextSibling";}return true;}start=[forward?parent.firstChild:parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`
	if(forward&&useCache){ // Seek `elem` from a previously-cached index
	// ...in a gzip-friendly way
	node=parent;outerCache=node[expando]||(node[expando]={}); // Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||( // Fallback to seeking `elem` from the start
	diff=nodeIndex=0)||start.pop()){ // When found, cache indexes on `parent` and break
	if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else { // Use previously-cached element index if available
	if(useCache){ // ...in a gzip-friendly way
	node=elem;outerCache=node[expando]||(node[expando]={}); // Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;} // xml :nth-child(...)
	// or :nth-last-child(...) or :nth(-last)?-of-type(...)
	if(diff===false){ // Use the same loop as above to seek `elem` from the start
	while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){ // Cache the index of each encountered element
	if(useCache){outerCache=node[expando]||(node[expando]={}); // Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}if(node===elem){break;}}}}} // Incorporate the offset, then check against cycle size
	diff-=last;return diff===first||diff%first===0&&diff/first>=0;}};},"PSEUDO":function PSEUDO(pseudo,argument){ // pseudo-class names are case-insensitive
	// http://www.w3.org/TR/selectors/#pseudo-classes
	// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
	// Remember that setFilters inherits from pseudos
	var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo); // The user may use createPseudo to indicate that
	// arguments are needed to create the filter function
	// just as Sizzle does
	if(fn[expando]){return fn(argument);} // But maintain support for old signatures
	if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{ // Potentially complex pseudos
	"not":markFunction(function(selector){ // Trim the selector passed to compile
	// to avoid treating leading and trailing
	// spaces as combinators
	var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length; // Match elements unmatched by `matcher`
	while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results); // Don't keep the element (issue #299)
	input[0]=null;return !results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return (elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}), // "Whether an element is represented by a :lang() selector
	// is based solely on the element's language value
	// being equal to the identifier C,
	// or beginning with the identifier C immediately followed by "-".
	// The matching of C against the element's language value is performed case-insensitively.
	// The identifier C does not have to be a valid language name."
	// http://www.w3.org/TR/selectors/#lang-pseudo
	"lang":markFunction(function(lang){ // lang value must be a valid identifier
	if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do {if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}), // Miscellaneous
	"target":function target(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function root(elem){return elem===docElem;},"focus":function focus(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);}, // Boolean properties
	"enabled":function enabled(elem){return elem.disabled===false;},"disabled":function disabled(elem){return elem.disabled===true;},"checked":function checked(elem){ // In CSS3, :checked should return both checked and selected elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected;},"selected":function selected(elem){ // Accessing this property makes selected-by-default
	// options in Safari work properly
	if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected===true;}, // Contents
	"empty":function empty(elem){ // http://www.w3.org/TR/selectors/#empty-pseudo
	// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
	//   but not by others (comment: 8; processing instruction: 7; etc.)
	// nodeType < 6 works because attributes (2) do not appear as children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}return true;},"parent":function parent(elem){return !Expr.pseudos["empty"](elem);}, // Element/input types
	"header":function header(elem){return rheader.test(elem.nodeName);},"input":function input(elem){return rinputs.test(elem.nodeName);},"button":function button(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function text(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&( // Support: IE<8
	// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
	(attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");}, // Position-in-collection
	"first":createPositionalPseudo(function(){return [0];}),"last":createPositionalPseudo(function(matchIndexes,length){return [length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return [argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"]; // Add button/input type pseudos
	for(i in {radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}for(i in {submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);} // Easy API for creating new setFilters
	function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){ // Comma and first run
	if(!matched||(match=rcomma.exec(soFar))){if(match){ // Don't consume trailing commas as valid
	soFar=soFar.slice(match[0].length)||soFar;}groups.push(tokens=[]);}matched=false; // Combinators
	if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched, // Cast descendant combinators to space
	type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);} // Filters
	for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}if(!matched){break;}} // Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly?soFar.length:soFar?Sizzle.error(selector): // Cache the tokens
	tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first? // Check against closest ancestor/preceding element
	function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}: // Check against all ancestor/preceding elements
	function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
	if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else {while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={}); // Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if((oldCache=uniqueCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){ // Assign to newCache so results back-propagate to previous elements
	return newCache[2]=oldCache[2];}else { // Reuse newcache so results back-propagate to previous elements
	uniqueCache[dir]=newCache; // A match means we're done; a fail means we have to keep checking
	if(newCache[2]=matcher(elem,context,xml)){return true;}}}}}};}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length, // Get initial elements from seed or context
	elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]), // Prefilter to get matcher input, preserving a map for seed-results synchronization
	matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
	postFinder||(seed?preFilter:preexisting||postFilter)? // ...intermediate processing is necessary
	[]: // ...otherwise use results directly
	results:matcherIn; // Find primary matches
	if(matcher){matcher(matcherIn,matcherOut,context,xml);} // Apply postFilter
	if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml); // Un-match failing elements by moving them back to matcherIn
	i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}if(seed){if(postFinder||preFilter){if(postFinder){ // Get the final matcherOut by condensing this intermediate into postFinder contexts
	temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){ // Restore matcherIn since elem is not yet a final match
	temp.push(matcherIn[i]=elem);}}postFinder(null,matcherOut=[],temp,xml);} // Move matched elements from seed to results to keep them synchronized
	i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}} // Add elements to results, through postFinder if defined
	}else {matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else {push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0, // The foundational matcher ensures that elements are reachable from top-level context(s)
	matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml)); // Avoid hanging onto element (issue #299)
	checkContext=null;return ret;}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else {matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches); // Return special upon seeing a positional matcher
	if(matcher[expando]){ // Find the next relative operator (if any) for proper handling
	j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
	tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function superMatcher(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext, // We must always have either seed elements or outermost context
	elems=seed||byElement&&Expr.find["TAG"]("*",outermost), // Use integer dirruns iff this is the outermost matcher
	dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||0.1,len=elems.length;if(outermost){outermostContext=context===document||context||outermost;} // Add elements passing elementMatchers directly to results
	// Support: IE<9, Safari
	// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
	for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}while(matcher=elementMatchers[j++]){if(matcher(elem,context||document,xml)){results.push(elem);break;}}if(outermost){dirruns=dirrunsUnique;}} // Track unmatched elements for set filters
	if(bySet){ // They will have gone through all possible matchers
	if(elem=!matcher&&elem){matchedCount--;} // Lengthen the array for every element, matched or not
	if(seed){unmatched.push(elem);}}} // `i` is now the count of elements visited above, and adding it to `matchedCount`
	// makes the latter nonnegative.
	matchedCount+=i; // Apply set filters to unmatched elements
	// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
	// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
	// no element matchers and no seed.
	// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
	// case, which will result in a "00" `matchedCount` that differs from `i` but is also
	// numerically zero.
	if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml);}if(seed){ // Reintegrate element matches to eliminate the need for sorting
	if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}} // Discard index placeholder values to get only actual matches
	setMatched=condense(setMatched);} // Add matches to results
	push.apply(results,setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting
	if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results);}} // Override manipulation of globals by nested matchers
	if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile=Sizzle.compile=function(selector,match /* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){ // Generate a function of recursive functions that can be used to check each element
	if(!match){match=tokenize(selector);}i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else {elementMatchers.push(cached);}} // Cache the compiled function
	cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers)); // Save selector and tokenization
	cached.selector=selector;}return cached;}; /**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);results=results||[]; // Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if(match.length===1){ // Reduce context if the leading compound selector is an ID
	tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results; // Precompiled matchers will still verify ancestry, so step up a level
	}else if(compiled){context=context.parentNode;}selector=selector.slice(tokens.shift().value.length);} // Fetch a seed set for right-to-left matching
	i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i]; // Abort if we hit a combinator
	if(Expr.relative[type=token.type]){break;}if(find=Expr.find[type]){ // Search, expanding context for leading sibling combinators
	if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){ // If seed is empty or no tokens remain, we can return early
	tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}} // Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;}; // One-time assignments
	// Sort stability
	support.sortStable=expando.split("").sort(sortOrder).join("")===expando; // Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates=!!hasDuplicate; // Initialize against the default document
	setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached=assert(function(div1){ // Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition(document.createElement("div"))&1;}); // Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});} // Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});} // Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if(!assert(function(div){return div.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}return Sizzle;}(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;var dir=function dir(elem,_dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[_dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;};var _siblings=function _siblings(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}return matched;};var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;var risSimple=/^.[^:#\[\.,]*$/; // Implement the identical functionality for filter and not
	function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){ /* jshint -W018 */return !!qualifier.call(elem,i,elem)!==not;});}if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not;});}if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}qualifier=jQuery.filter(qualifier,elements);}return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not;});}jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function find(selector){var i,len=this.length,ret=[],self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);} // Needed because $( selector, context ) becomes $( context ).find( selector )
	ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret;},filter:function filter(selector){return this.pushStack(winnow(this,selector||[],false));},not:function not(selector){return this.pushStack(winnow(this,selector||[],true));},is:function is(selector){return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
	// so $("p:first").is("p:last") won't return true for a doc with two "p".
	typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}}); // Initialize a jQuery object
	// A central reference to the root jQuery(document)
	var rootjQuery, // A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem; // HANDLE: $(""), $(null), $(undefined), $(false)
	if(!selector){return this;} // Method init() accepts an alternate rootjQuery
	// so migrate can support jQuery.sub (gh-2101)
	root=root||rootjQuery; // Handle HTML strings
	if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){ // Assume that strings that start and end with <> are HTML and skip the regex check
	match=[null,selector,null];}else {match=rquickExpr.exec(selector);} // Match html or make sure no context is specified for #id
	if(match&&(match[1]||!context)){ // HANDLE: $(html) -> $(array)
	if(match[1]){context=context instanceof jQuery?context[0]:context; // Option to run scripts is true for back-compat
	// Intentionally let the error be thrown if parseHTML is not present
	jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true)); // HANDLE: $(html, props)
	if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){ // Properties of context are called as methods if possible
	if(jQuery.isFunction(this[match])){this[match](context[match]); // ...and otherwise set as attributes
	}else {this.attr(match,context[match]);}}}return this; // HANDLE: $(#id)
	}else {elem=document.getElementById(match[2]); // Support: Blackberry 4.6
	// gEBID returns nodes no longer in the document (#6963)
	if(elem&&elem.parentNode){ // Inject the element directly into the jQuery object
	this.length=1;this[0]=elem;}this.context=document;this.selector=selector;return this;} // HANDLE: $(expr, $(...))
	}else if(!context||context.jquery){return (context||root).find(selector); // HANDLE: $(expr, context)
	// (which is just equivalent to: $(context).find(expr)
	}else {return this.constructor(context).find(selector);} // HANDLE: $(DOMElement)
	}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this; // HANDLE: $(function)
	// Shortcut for document ready
	}else if(jQuery.isFunction(selector)){return root.ready!==undefined?root.ready(selector): // Execute immediately if ready is not present
	selector(jQuery);}if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}return jQuery.makeArray(selector,this);}; // Give the init function the jQuery prototype for later instantiation
	init.prototype=jQuery.fn; // Initialize central reference
	rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/, // Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function has(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function closest(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){ // Always skip document fragments
	if(cur.nodeType<11&&(pos?pos.index(cur)>-1: // Don't pass non-elements to Sizzle
	cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);}, // Determine the position of an element within the set
	index:function index(elem){ // No argument, return index in parent
	if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;} // Index in selector
	if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);} // Locate the position of the desired element
	return indexOf.call(this, // If it receives a jQuery object, the first element is used
	elem.jquery?elem[0]:elem);},add:function add(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function addBack(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function parents(elem){return dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return dir(elem,"parentNode",until);},next:function next(elem){return sibling(elem,"nextSibling");},prev:function prev(elem){return sibling(elem,"previousSibling");},nextAll:function nextAll(elem){return dir(elem,"nextSibling");},prevAll:function prevAll(elem){return dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function siblings(elem){return _siblings((elem.parentNode||{}).firstChild,elem);},children:function children(elem){return _siblings(elem.firstChild);},contents:function contents(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}if(this.length>1){ // Remove duplicates
	if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);} // Reverse order for parents* and prev-derivatives
	if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnotwhite=/\S+/g; // Convert String-formatted options into Object-formatted ones
	function createOptions(options){var object={};jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true;});return object;} /*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */jQuery.Callbacks=function(options){ // Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var  // Flag to know if list is currently firing
	firing, // Last fire value for non-forgettable lists
	memory, // Flag to know if list was already fired
	_fired, // Flag to prevent firing
	_locked, // Actual callback list
	list=[], // Queue of execution data for repeatable lists
	queue=[], // Index of currently firing callback (modified by add/remove as needed)
	firingIndex=-1, // Fire callbacks
	fire=function fire(){ // Enforce single-firing
	_locked=options.once; // Execute callbacks for all pending executions,
	// respecting firingIndex overrides and runtime changes
	_fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){ // Run callback and check for early termination
	if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){ // Jump to end and forget the data so .add doesn't re-fire
	firingIndex=list.length;memory=false;}}} // Forget the data if we're done with it
	if(!options.memory){memory=false;}firing=false; // Clean up if we're done firing for good
	if(_locked){ // Keep an empty list if we have data for future add calls
	if(memory){list=[]; // Otherwise, this object is spent
	}else {list="";}}}, // Actual Callbacks object
	self={ // Add a callback or a collection of callbacks to the list
	add:function add(){if(list){ // If we have memory from a past run, we should fire after adding
	if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}(function add(args){jQuery.each(args,function(_,arg){if(jQuery.isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){ // Inspect recursively
	add(arg);}});})(arguments);if(memory&&!firing){fire();}}return this;}, // Remove a callback from the list
	remove:function remove(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1); // Handle firing indexes
	if(index<=firingIndex){firingIndex--;}}});return this;}, // Check if a given callback is in the list.
	// If no argument is given, return whether or not list has callbacks attached.
	has:function has(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;}, // Remove all callbacks from the list
	empty:function empty(){if(list){list=[];}return this;}, // Disable .fire and .add
	// Abort any current/pending executions
	// Clear all callbacks and values
	disable:function disable(){_locked=queue=[];list=memory="";return this;},disabled:function disabled(){return !list;}, // Disable .fire
	// Also disable .add unless we have memory (since it would have no effect)
	// Abort any pending executions
	lock:function lock(){_locked=queue=[];if(!memory){list=memory="";}return this;},locked:function locked(){return !!_locked;}, // Call all callbacks with the given context and arguments
	fireWith:function fireWith(context,args){if(!_locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}return this;}, // Call all the callbacks with the given arguments
	fire:function fire(){self.fireWith(this,arguments);return this;}, // To know if the callbacks have already been called at least once
	fired:function fired(){return !!_fired;}};return self;};jQuery.extend({Deferred:function Deferred(func){var tuples=[ // action, add listener, listener list, final state
	["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],_state="pending",_promise={state:function state(){return _state;},always:function always(){deferred.done(arguments).fail(arguments);return this;},then:function then() /* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i]; // deferred[ done | fail | progress ] for forwarding actions to newDefer
	deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else {newDefer[tuple[0]+"With"](this===_promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();}, // Get a promise for this deferred
	// If obj is provided, the promise aspect is added to the object
	promise:function promise(obj){return obj!=null?jQuery.extend(obj,_promise):_promise;}},deferred={}; // Keep pipe for back-compat
	_promise.pipe=_promise.then; // Add list-specific methods
	jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3]; // promise[ done | fail | progress ] = list.add
	_promise[tuple[1]]=list.add; // Handle state
	if(stateString){list.add(function(){ // state = [ resolved | rejected ]
	_state=stateString; // [ reject_list | resolve_list ].disable; progress_list.lock
	},tuples[i^1][2].disable,tuples[2][2].lock);} // deferred[ resolve | reject | notify ]
	deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?_promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;}); // Make the deferred a promise
	_promise.promise(deferred); // Call given func if any
	if(func){func.call(deferred,deferred);} // All done!
	return deferred;}, // Deferred helper
	when:function when(subordinate /* , ..., subordinateN */){var i=0,resolveValues=_slice.call(arguments),length=resolveValues.length, // the count of uncompleted subordinates
	remaining=length!==1||subordinate&&jQuery.isFunction(subordinate.promise)?length:0, // the master Deferred.
	// If resolveValues consist of only a single Deferred, just use that.
	deferred=remaining===1?subordinate:jQuery.Deferred(), // Update function for both resolve and progress values
	updateFunc=function updateFunc(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?_slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(! --remaining){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts; // Add listeners to Deferred subordinates; treat others as resolved
	if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().progress(updateFunc(i,progressContexts,progressValues)).done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject);}else {--remaining;}}} // If we're not waiting on anything, resolve the master
	if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}return deferred.promise();}}); // The deferred used on DOM ready
	var readyList;jQuery.fn.ready=function(fn){ // Add the callback
	jQuery.ready.promise().done(fn);return this;};jQuery.extend({ // Is the DOM ready to be used? Set to true once it occurs.
	isReady:false, // A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait:1, // Hold (or release) the ready event
	holdReady:function holdReady(hold){if(hold){jQuery.readyWait++;}else {jQuery.ready(true);}}, // Handle when the DOM is ready
	ready:function ready(wait){ // Abort if there are pending holds or we're already ready
	if(wait===true?--jQuery.readyWait:jQuery.isReady){return;} // Remember that the DOM is ready
	jQuery.isReady=true; // If a normal DOM Ready event fired, decrement, and wait if need be
	if(wait!==true&&--jQuery.readyWait>0){return;} // If there are functions bound, to execute
	readyList.resolveWith(document,[jQuery]); // Trigger any bound ready events
	if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready");}}}); /**
	 * The ready event handler and self cleanup method
	 */function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred(); // Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE9-10 only
	// Older IE sometimes signals "interactive" too soon
	if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){ // Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout(jQuery.ready);}else { // Use the handy event callback
	document.addEventListener("DOMContentLoaded",completed); // A fallback to window.onload, that will always work
	window.addEventListener("load",completed);}}return readyList.promise(obj);}; // Kick off the DOM ready check even if the user does not
	jQuery.ready.promise(); // Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access=function access(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null; // Sets many values
	if(jQuery.type(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);} // Sets one value
	}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}if(bulk){ // Bulk operations run against the entire set
	if(raw){fn.call(elems,value);fn=null; // ...except when executing function values
	}else {bulk=fn;fn=function fn(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}return chainable?elems: // Gets
	bulk?fn.call(elems):len?fn(elems[0],key):emptyGet;};var acceptData=function acceptData(owner){ // Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */return owner.nodeType===1||owner.nodeType===9||! +owner.nodeType;};function Data(){this.expando=jQuery.expando+Data.uid++;}Data.uid=1;Data.prototype={register:function register(owner,initial){var value=initial||{}; // If it is a node unlikely to be stringify-ed or looped over
	// use plain assignment
	if(owner.nodeType){owner[this.expando]=value; // Otherwise secure it in a non-enumerable, non-writable property
	// configurability must be true to allow the property to be
	// deleted with the delete operator
	}else {Object.defineProperty(owner,this.expando,{value:value,writable:true,configurable:true});}return owner[this.expando];},cache:function cache(owner){ // We can accept data for non-element nodes in modern browsers,
	// but we should not, see #8335.
	// Always return an empty object.
	if(!acceptData(owner)){return {};} // Check if the owner object already has a cache
	var value=owner[this.expando]; // If not, create one
	if(!value){value={}; // We can accept data for non-element nodes in modern browsers,
	// but we should not, see #8335.
	// Always return an empty object.
	if(acceptData(owner)){ // If it is a node unlikely to be stringify-ed or looped over
	// use plain assignment
	if(owner.nodeType){owner[this.expando]=value; // Otherwise secure it in a non-enumerable property
	// configurable must be true to allow the property to be
	// deleted when data is removed
	}else {Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}return value;},set:function set(owner,data,value){var prop,cache=this.cache(owner); // Handle: [ owner, key, value ] args
	if(typeof data==="string"){cache[data]=value; // Handle: [ owner, { properties } ] args
	}else { // Copy the properties one-by-one to the cache object
	for(prop in data){cache[prop]=data[prop];}}return cache;},get:function get(owner,key){return key===undefined?this.cache(owner):owner[this.expando]&&owner[this.expando][key];},access:function access(owner,key,value){var stored; // In cases where either:
	//
	//   1. No key was specified
	//   2. A string key was specified, but no value provided
	//
	// Take the "read" path and allow the get method to determine
	// which value to return, respectively either:
	//
	//   1. The entire cache object
	//   2. The data stored at the key
	//
	if(key===undefined||key&&typeof key==="string"&&value===undefined){stored=this.get(owner,key);return stored!==undefined?stored:this.get(owner,jQuery.camelCase(key));} // When the key is not a string, or both a key and value
	// are specified, set or extend (existing objects) with either:
	//
	//   1. An object of properties
	//   2. A key and value
	//
	this.set(owner,key,value); // Since the "set" path can have two possible entry points
	// return the expected data based on which path was taken[*]
	return value!==undefined?value:key;},remove:function remove(owner,key){var i,name,camel,cache=owner[this.expando];if(cache===undefined){return;}if(key===undefined){this.register(owner);}else { // Support array or space separated string of keys
	if(jQuery.isArray(key)){ // If "name" is an array of keys...
	// When data is initially created, via ("key", "val") signature,
	// keys will be converted to camelCase.
	// Since there is no way to tell _how_ a key was added, remove
	// both plain key and camelCase key. #12786
	// This will only penalize the array argument path.
	name=key.concat(key.map(jQuery.camelCase));}else {camel=jQuery.camelCase(key); // Try the string as a key before any manipulation
	if(key in cache){name=[key,camel];}else { // If a key with the spaces exists, use it.
	// Otherwise, create an array by matching non-whitespace
	name=camel;name=name in cache?[name]:name.match(rnotwhite)||[];}}i=name.length;while(i--){delete cache[name[i]];}} // Remove the expando if there's no more data
	if(key===undefined||jQuery.isEmptyObject(cache)){ // Support: Chrome <= 35-45+
	// Webkit & Blink performance suffers when deleting properties
	// from DOM nodes, so set to undefined instead
	// https://code.google.com/p/chromium/issues/detail?id=378607
	if(owner.nodeType){owner[this.expando]=undefined;}else {delete owner[this.expando];}}},hasData:function hasData(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data(); //	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function dataAttr(elem,key,data){var name; // If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null: // Only convert to a number if it doesn't change the string
	+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){} // Make sure we set the data so it isn't changed later
	dataUser.set(elem,key,data);}else {data=undefined;}}return data;}jQuery.extend({hasData:function hasData(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function data(elem,name,_data){return dataUser.access(elem,name,_data);},removeData:function removeData(elem,name){dataUser.remove(elem,name);}, // TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data:function _data(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function _removeData(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function data(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes; // Gets all values
	if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){ // Support: IE11+
	// The attrs elements can be null (#14894)
	if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}dataPriv.set(elem,"hasDataAttrs",true);}}return data;} // Sets multiple values
	if((typeof key==="undefined"?"undefined":_typeof(key))==="object"){return this.each(function(){dataUser.set(this,key);});}return access(this,function(value){var data,camelKey; // The calling jQuery object (element matches) is not empty
	// (and therefore has an element appears at this[ 0 ]) and the
	// `value` parameter was not undefined. An empty jQuery object
	// will result in `undefined` for elem = this[ 0 ] which will
	// throw an exception if an attempt to read a data cache is made.
	if(elem&&value===undefined){ // Attempt to get data from the cache
	// with the key as-is
	data=dataUser.get(elem,key)|| // Try to find dashed key if it exists (gh-2779)
	// This is for 2.2.x only
	dataUser.get(elem,key.replace(rmultiDash,"-$&").toLowerCase());if(data!==undefined){return data;}camelKey=jQuery.camelCase(key); // Attempt to get data from the cache
	// with the key camelized
	data=dataUser.get(elem,camelKey);if(data!==undefined){return data;} // Attempt to "discover" the data in
	// HTML5 custom data-* attrs
	data=dataAttr(elem,camelKey,undefined);if(data!==undefined){return data;} // We tried really hard, but the data doesn't exist.
	return;} // Set the data...
	camelKey=jQuery.camelCase(key);this.each(function(){ // First, attempt to store a copy or reference of any
	// data that might've been store with a camelCased key.
	var data=dataUser.get(this,camelKey); // For HTML5 data-* attribute interop, we have to
	// store property names with dashes in a camelCase form.
	// This might not apply to all properties...*
	dataUser.set(this,camelKey,value); // *... In the case of properties that might _actually_
	// have dashes, we need to also store a copy of that
	// unchanged property.
	if(key.indexOf("-")>-1&&data!==undefined){dataUser.set(this,key,value);}});},null,value,arguments.length>1,null,true);},removeData:function removeData(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function queue(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type); // Speed up dequeue by getting out quickly if this is just a lookup
	if(data){if(!queue||jQuery.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else {queue.push(data);}}return queue||[];}},dequeue:function dequeue(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function next(){jQuery.dequeue(elem,type);}; // If the fx queue is dequeued, always remove the progress sentinel
	if(fn==="inprogress"){fn=queue.shift();startLength--;}if(fn){ // Add a progress sentinel to prevent the fx queue from being
	// automatically dequeued
	if(type==="fx"){queue.unshift("inprogress");} // Clear up the last queue stop function
	delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength&&hooks){hooks.empty.fire();}}, // Not public - generate a queueHooks object, or return the current one
	_queueHooks:function _queueHooks(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data); // Ensure a hooks for this queue
	jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function clearQueue(type){return this.queue(type||"fx",[]);}, // Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise:function promise(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function isHidden(elem,el){ // isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"), // Starting value computation is required for potential unit mismatches
	initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){ // Trust units reported by jQuery.css
	unit=unit||initialInUnit[3]; // Make sure we update the tween properties later on
	valueParts=valueParts||[]; // Iteratively approximate from a nonzero starting point
	initialInUnit=+initial||1;do { // If previous iteration zeroed out, double until we get *something*.
	// Use string for doubling so we don't accidentally see scale as unchanged below
	scale=scale||".5"; // Adjust and apply
	initialInUnit=initialInUnit/scale;jQuery.style(elem,prop,initialInUnit+unit); // Update scale, tolerating zero or NaN from tween.cur()
	// Break the loop if scale is unchanged or perfect, or if we've just had enough.
	}while(scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations);}if(valueParts){initialInUnit=+initialInUnit||+initial||0; // Apply relative offset (+=/-=) if specified
	adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}return adjusted;}var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([\w:-]+)/;var rscriptType=/^$|\/(?:java|ecma)script/i; // We have to close these tags to support XHTML (#13200)
	var wrapMap={ // Support: IE9
	option:[1,"<select multiple='multiple'>","</select>"], // XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}; // Support: IE9
	wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){ // Support: IE9-11+
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret=typeof context.getElementsByTagName!=="undefined"?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!=="undefined"?context.querySelectorAll(tag||"*"):[];return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret;} // Mark scripts as having already been evaluated
	function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){ // Add nodes directly
	if(jQuery.type(elem)==="object"){ // Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,elem.nodeType?[elem]:elem); // Convert non-html into a text node
	}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
	}else {tmp=tmp||fragment.appendChild(context.createElement("div")); // Deserialize a standard representation
	tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2]; // Descend through wrappers to the right content
	j=wrap[0];while(j--){tmp=tmp.lastChild;} // Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,tmp.childNodes); // Remember the top-level container
	tmp=fragment.firstChild; // Ensure the created nodes are orphaned (#12392)
	tmp.textContent="";}}} // Remove wrapper from fragment
	fragment.textContent="";i=0;while(elem=nodes[i++]){ // Skip elements already in the context collection (trac-4087)
	if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}continue;}contains=jQuery.contains(elem.ownerDocument,elem); // Append to fragment
	tmp=getAll(fragment.appendChild(elem),"script"); // Preserve script evaluation history
	if(contains){setGlobalEval(tmp);} // Capture executables
	if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}return fragment;}(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input"); // Support: Android 4.0-4.3, Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input); // Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}function returnFalse(){return false;} // Support: IE9
	// See #13393 for more info
	function safeActiveElement(){try{return document.activeElement;}catch(err){}}function _on(elem,types,selector,data,fn,one){var origFn,type; // Types can be a map of types/handlers
	if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){ // ( types-Object, selector, data )
	if(typeof selector!=="string"){ // ( types-Object, data )
	data=data||selector;selector=undefined;}for(type in types){_on(elem,type,selector,data,types[type],one);}return elem;}if(data==null&&fn==null){ // ( types, fn )
	fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){ // ( types, selector, fn )
	fn=data;data=undefined;}else { // ( types, data, fn )
	fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return elem;}if(one===1){origFn=fn;fn=function fn(event){ // Can use an empty set, since event contains the info
	jQuery().off(event);return origFn.apply(this,arguments);}; // Use same guid so caller can remove using origFn
	fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});} /*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */jQuery.event={global:{},add:function add(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)
	if(!elemData){return;} // Caller can pass in an object of custom data in lieu of the handler
	if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;} // Make sure that the handler has a unique ID, used to find/remove it later
	if(!handler.guid){handler.guid=jQuery.guid++;} // Init the element's event structure and main handler, if this is the first
	if(!(events=elemData.events)){events=elemData.events={};}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){ // Discard the second event of a jQuery.event.trigger() and
	// when an event is called after a page has unloaded
	return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};} // Handle multiple events separated by a space
	types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers
	if(!type){continue;} // If event changes its type, use the special event handlers for the changed type
	special=jQuery.event.special[type]||{}; // If selector defined, determine special event api type, otherwise given type
	type=(selector?special.delegateType:special.bindType)||type; // Update special based on newly reset type
	special=jQuery.event.special[type]||{}; // handleObj is passed to all event handlers
	handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn); // Init the event handler queue if we're the first
	if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0; // Only use addEventListener if the special events handler returns false
	if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}} // Add to the element's handler list, delegates in front
	if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else {handlers.push(handleObj);} // Keep track of which events have ever been used, for event optimization
	jQuery.event.global[type]=true;}}, // Detach an event or set of events from an element
	remove:function remove(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;} // Once for each type.namespace in types; type may be omitted
	types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element
	if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"); // Remove matching events
	origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}} // Remove generic event handler if we removed something and no more handlers exist
	// (avoids potential for endless recursion during removal of special event handlers)
	if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}} // Remove data and the expando if it's no longer used
	if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function dispatch(event){ // Make a writable jQuery.Event from the native event object
	event=jQuery.event.fix(event);var i,j,ret,matched,handleObj,handlerQueue=[],args=_slice.call(arguments),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{}; // Use the fix-ed jQuery.Event rather than the (read-only) native event
	args[0]=event;event.delegateTarget=this; // Call the preDispatch hook for the mapped type, and let it bail if desired
	if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;} // Determine handlers
	handlerQueue=jQuery.event.handlers.call(this,event,handlers); // Run delegates first; they may want to stop propagation beneath us
	i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){ // Triggered event must either 1) have no namespace, or 2) have namespace(s)
	// a subset or equal to those in the bound event (both can have no namespace).
	if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}} // Call the postDispatch hook for the mapped type
	if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function handlers(event,_handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=_handlers.delegateCount,cur=event.target; // Support (at least): Chrome, IE9
	// Find delegate handlers
	// Black-hole SVG <use> instance trees (#13180)
	//
	// Support: Firefox<=42+
	// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
	if(delegateCount&&cur.nodeType&&(event.type!=="click"||isNaN(event.button)||event.button<1)){for(;cur!==this;cur=cur.parentNode||this){ // Don't check non-elements (#13208)
	// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
	if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=_handlers[i]; // Don't conflict with Object.prototype properties (#13203)
	sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}if(matches[sel]){matches.push(handleObj);}}if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}} // Add the remaining (directly-bound) handlers
	if(delegateCount<_handlers.length){handlerQueue.push({elem:this,handlers:_handlers.slice(delegateCount)});}return handlerQueue;}, // Includes some event props shared by KeyEvent and MouseEvent
	props:("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase "+"metaKey relatedTarget shiftKey target timeStamp view which").split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function filter(event,original){ // Add which for key events
	if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}return event;}},mouseHooks:{props:("button buttons clientX clientY offsetX offsetY pageX pageY "+"screenX screenY toElement").split(" "),filter:function filter(event,original){var eventDoc,doc,body,button=original.button; // Calculate pageX/Y if missing and clientX/Y available
	if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);} // Add which for click: 1 === left; 2 === middle; 3 === right
	// Note: button is not normalized, so don't use it
	if(!event.which&&button!==undefined){event.which=button&1?1:button&2?3:button&4?2:0;}return event;}},fix:function fix(event){if(event[jQuery.expando]){return event;} // Create a writable copy of the event object and normalize some properties
	var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];} // Support: Cordova 2.5 (WebKit) (#13255)
	// All events should have a target; Cordova deviceready doesn't
	if(!event.target){event.target=document;} // Support: Safari 6.0+, Chrome<28
	// Target should not be a text node (#504, #13143)
	if(event.target.nodeType===3){event.target=event.target.parentNode;}return fixHook.filter?fixHook.filter(event,originalEvent):event;},special:{load:{ // Prevent triggered image.load events from bubbling to window.load
	noBubble:true},focus:{ // Fire native event if possible so blur/focus sequence is correct
	trigger:function trigger(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function trigger(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{ // For checkbox, fire native event so checked state will be right
	trigger:function trigger(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();return false;}}, // For cross-browser consistency, don't fire native .click() on links
	_default:function _default(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function postDispatch(event){ // Support: Firefox 20+
	// Firefox doesn't alert if the returnValue field is not set.
	if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){ // This "if" is needed for plain objects
	if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){ // Allow instantiation without the 'new' keyword
	if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);} // Event object
	if(src&&src.type){this.originalEvent=src;this.type=src.type; // Events bubbling up the document may have been marked as prevented
	// by a handler lower down the tree; reflect the correct value.
	this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&& // Support: Android<4.0
	src.returnValue===false?returnTrue:returnFalse; // Event type
	}else {this.type=src;} // Put explicitly provided properties onto the event object
	if(props){jQuery.extend(this,props);} // Create a timestamp if incoming event doesn't have one
	this.timeStamp=src&&src.timeStamp||jQuery.now(); // Mark it as fixed
	this[jQuery.expando]=true;}; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e){e.preventDefault();}},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e){e.stopPropagation();}},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e){e.stopImmediatePropagation();}this.stopPropagation();}}; // Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function handle(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
	// NB: No relatedTarget if the mouse left/entered the browser window
	if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};});jQuery.fn.extend({on:function on(types,selector,data,fn){return _on(this,types,selector,data,fn);},one:function one(types,selector,data,fn){return _on(this,types,selector,data,fn,1);},off:function off(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){ // ( event )  dispatched jQuery.Event
	handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){ // ( types-object [, selector] )
	for(type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){ // ( types [, fn] )
	fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, // Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml=/<script|<style|<link/i, // checked="checked" or checked
	rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Manipulating tables requires a tbody
	function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;} // Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else {elem.removeAttribute("type");}return elem;}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;} // 1. Copy private data: events, handlers, etc.
	if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}} // 2. Copy user data
	if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}} // Fix IE bugs, see support tests
	function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.
	if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked; // Fails to return the selected option to the default selected state when cloning options
	}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}function domManip(collection,args,callback,ignored){ // Flatten any nested arrays
	args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit
	if(isFunction||l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value)){return collection.each(function(index){var self=collection.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}domManip(self,args,callback,ignored);});}if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;} // Require either new content or an interest in ignored elements to invoke the callback
	if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length; // Use the original fragment for the last item
	// instead of the first because it can end up
	// being emptied incorrectly in certain situations (#8070).
	for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true); // Keep references to cloned scripts for later restoration
	if(hasScripts){ // Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(scripts,getAll(node,"script"));}}callback.call(collection[i],node,i);}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument; // Reenable scripts
	jQuery.map(scripts,restoreScript); // Evaluate executable scripts on first document insertion
	for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){ // Optional AJAX dependency, but won't run scripts if not present
	if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else {jQuery.globalEval(node.textContent.replace(rcleanScript,""));}}}}}}return collection;}function _remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}node.parentNode.removeChild(node);}}return elem;}jQuery.extend({htmlPrefilter:function htmlPrefilter(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function clone(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem); // Fix IE cloning issues
	if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){ // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
	destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}} // Copy the events from the original to the clone
	if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else {cloneCopyEvent(elem,clone);}} // Preserve script evaluation history
	destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));} // Return the cloned set
	return clone;},cleanData:function cleanData(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type); // This is a shortcut to avoid jQuery.event.remove's overhead
	}else {jQuery.removeEvent(elem,type,data.handle);}}} // Support: Chrome <= 35-45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataPriv.expando]=undefined;}if(elem[dataUser.expando]){ // Support: Chrome <= 35-45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({ // Keep domManip exposed until 3.0 (gh-2225)
	domManip:domManip,detach:function detach(selector){return _remove(this,selector,true);},remove:function remove(selector){return _remove(this,selector);},text:function text(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function append(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function prepend(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function before(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function after(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function empty(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){ // Prevent memory leaks
	jQuery.cleanData(getAll(elem,false)); // Remove any remaining nodes
	elem.textContent="";}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;} // See if we can take a shortcut and just use innerHTML
	if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{}; // Remove element nodes and prevent memory leaks
	if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}elem=0; // If using innerHTML throws an exception, use the fallback method
	}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(){var ignored=[]; // Make the changes, replacing each non-ignored context element with the new content
	return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}} // Force callback invocation
	},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems); // Support: QtWebKit
	// .get() because push.apply(_, arraylike) throws
	push.apply(ret,elems.get());}return this.pushStack(ret);};});var iframe,elemdisplay={ // Support: Firefox
	// We have to pre-define these values for FF (#10227)
	HTML:"block",BODY:"block"}; /**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */ // Called only from within defaultDisplay
	function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.css(elem[0],"display"); // We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();return display;} /**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc); // If the simple way fails, read from inside an iframe
	if(display==="none"||!display){ // Use the already-created iframe if possible
	iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement); // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
	doc=iframe[0].contentDocument; // Support: IE
	doc.write();doc.close();display=actualDisplay(nodeName,doc);iframe.detach();} // Store the correct default display
	elemdisplay[nodeName]=display;}return display;}var rmargin=/^margin/;var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function getStyles(elem){ // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
	// IE throws on elements created in popups
	// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
	var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}return view.getComputedStyle(elem);};var swap=function swap(elem,options,callback,args){var ret,name,old={}; // Remember the old values, and insert the new ones
	for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.apply(elem,args||[]); // Revert the old values
	for(name in options){elem.style[name]=old[name];}return ret;};var documentElement=document.documentElement;(function(){var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div"); // Finish early in limited (non-browser) environments
	if(!div.style){return;} // Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+"padding:0;margin-top:1px;position:absolute";container.appendChild(div); // Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests(){div.style.cssText= // Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;"+"position:relative;display:block;"+"margin:auto;border:1px;padding:1px;"+"top:1%;width:50%";div.innerHTML="";documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";reliableMarginLeftVal=divStyle.marginLeft==="2px";boxSizingReliableVal=divStyle.width==="4px"; // Support: Android 4.0 - 4.3 only
	// Some styles come back with percentage values, even though they shouldn't
	div.style.marginRight="50%";pixelMarginRightVal=divStyle.marginRight==="4px";documentElement.removeChild(container);}jQuery.extend(support,{pixelPosition:function pixelPosition(){ // This test is executed only once but we still do memoizing
	// since we can use the boxSizingReliable pre-computing.
	// No need to check if the test was already performed, though.
	computeStyleTests();return pixelPositionVal;},boxSizingReliable:function boxSizingReliable(){if(boxSizingReliableVal==null){computeStyleTests();}return boxSizingReliableVal;},pixelMarginRight:function pixelMarginRight(){ // Support: Android 4.0-4.3
	// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
	// since that compresses better and they're computed together anyway.
	if(boxSizingReliableVal==null){computeStyleTests();}return pixelMarginRightVal;},reliableMarginLeft:function reliableMarginLeft(){ // Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
	if(boxSizingReliableVal==null){computeStyleTests();}return reliableMarginLeftVal;},reliableMarginRight:function reliableMarginRight(){ // Support: Android 2.3
	// Check if div with explicit width and no margin-right incorrectly
	// gets computed margin-right based on width of container. (#3333)
	// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	// This support function is only executed once so no memoizing is needed.
	var ret,marginDiv=div.appendChild(document.createElement("div")); // Reset CSS: box-sizing; display; margin; border; padding
	marginDiv.style.cssText=div.style.cssText= // Support: Android 2.3
	// Vendor-prefix box-sizing
	"-webkit-box-sizing:content-box;box-sizing:content-box;"+"display:block;margin:0;border:0;padding:0";marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";documentElement.appendChild(container);ret=!parseFloat(window.getComputedStyle(marginDiv).marginRight);documentElement.removeChild(container);div.removeChild(marginDiv);return ret;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);ret=computed?computed.getPropertyValue(name)||computed[name]:undefined; // Support: Opera 12.1x only
	// Fall back to style even without computed
	// computed is undefined for elems on document fragments
	if((ret===""||ret===undefined)&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);} // Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if(computed){ // A tribute to the "awesome hack by Dean Edwards"
	// Android Browser returns percentage for some values,
	// but width seems to be reliably pixels.
	// This is against the CSSOM draft spec:
	// http://dev.w3.org/csswg/cssom/#resolved-values
	if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){ // Remember the original values
	width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth; // Put in the new values to get a computed value out
	style.minWidth=style.maxWidth=style.width=ret;ret=computed.width; // Revert the changed values
	style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}return ret!==undefined? // Support: IE9-11+
	// IE returns zIndex value as an integer.
	ret+"":ret;}function addGetHookIf(conditionFn,hookFn){ // Define the hook, we'll check on the first run if it's really needed.
	return {get:function get(){if(conditionFn()){ // Hook not needed (or it's not possible to use it due
	// to missing dependency), remove it.
	delete this.get;return;} // Hook needed; redefine it so that the support test is not executed again.
	return (this.get=hookFn).apply(this,arguments);}};}var  // Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"],emptyStyle=document.createElement("div").style; // Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name){ // Shortcut for names that are not vendor prefixed
	if(name in emptyStyle){return name;} // Check for vendor prefixed names
	var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}function setPositiveNumber(elem,value,subtract){ // Any relative (+/-) values have already been
	// normalized at this point
	var matches=rcssNum.exec(value);return matches? // Guard against undefined "subtract", e.g., when used as in cssHooks
	Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")? // If we already have the right measurement, avoid augmentation
	4: // Otherwise initialize for horizontal or vertical properties
	name==="width"?1:0,val=0;for(;i<4;i+=2){ // Both box models exclude margin, so add it if we want it
	if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}if(isBorderBox){ // border-box includes padding, so remove it if we want content
	if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);} // At this point, extra isn't border nor margin, so remove border
	if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else { // At this point, extra isn't content, so add padding
	val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles); // At this point, extra isn't content nor padding, so add border
	if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}return val;}function getWidthOrHeight(elem,name,extra){ // Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box"; // Support: IE11 only
	// In IE 11 fullscreen elements inside of an iframe have
	// 100x too small dimensions (gh-1764).
	if(document.msFullscreenElement&&window.top!==window){ // Support: IE11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if(elem.getClientRects().length){val=Math.round(elem.getBoundingClientRect()[name]*100);}} // Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if(val<=0||val==null){ // Fall back to computed then uncomputed css if necessary
	val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];} // Computed unit is not pixels. Stop here and return.
	if(rnumnonpx.test(val)){return val;} // Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]); // Normalize "", auto, and prepare for extra
	val=parseFloat(val)||0;} // Use the active box-sizing model to add/subtract irrelevant styles
	return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)+"px";}function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}values[index]=dataPriv.get(elem,"olddisplay");display=elem.style.display;if(show){ // Reset the inline display of this element to learn if it is
	// being hidden by cascaded rules or not
	if(!values[index]&&display==="none"){elem.style.display="";} // Set elements which have been overridden with display: none
	// in a stylesheet to whatever the default browser style is
	// for such an element
	if(elem.style.display===""&&isHidden(elem)){values[index]=dataPriv.access(elem,"olddisplay",defaultDisplay(elem.nodeName));}}else {hidden=isHidden(elem);if(display!=="none"||!hidden){dataPriv.set(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}} // Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}return elements;}jQuery.extend({ // Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks:{opacity:{get:function get(elem,computed){if(computed){ // We should always get a number back from opacity
	var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}}, // Don't automatically add "px" to these possibly-unitless properties
	cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true}, // Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps:{"float":"cssFloat"}, // Get and set the style property on a DOM Node
	style:function style(elem,name,value,extra){ // Don't set styles on text and comment nodes
	if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;} // Make sure that we're working with the right name
	var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName); // Gets hook for the prefixed version, then unprefixed version
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName]; // Check if we're setting a value
	if(value!==undefined){type=typeof value==="undefined"?"undefined":_typeof(value); // Convert "+=" or "-=" to relative numbers (#7345)
	if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret); // Fixes bug #9237
	type="number";} // Make sure that null and NaN values aren't set (#7116)
	if(value==null||value!==value){return;} // If a number was passed in, add the unit (except for certain CSS properties)
	if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");} // Support: IE9-11+
	// background-* props affect original clone's values
	if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";} // If a hook was provided, use that value, otherwise just set the specified value
	if(!hooks||!("set" in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value;}}else { // If a hook was provided get the non-computed value from there
	if(hooks&&"get" in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;} // Otherwise just get the value from the style object
	return style[name];}},css:function css(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name); // Make sure that we're working with the right name
	name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName); // Try prefixed name followed by the unprefixed name
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there
	if(hooks&&"get" in hooks){val=hooks.get(elem,true,extra);} // Otherwise, if a way to get the computed value exists, use that
	if(val===undefined){val=curCSS(elem,name,styles);} // Convert "normal" to computed value
	if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];} // Make numeric if forced or a qualifier was provided and val looks numeric
	if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function get(elem,computed,extra){if(computed){ // Certain elements can have dimension info if we invisibly show them
	// but it must have a current display style that would benefit
	return rdisplayswap.test(jQuery.css(elem,"display"))&&elem.offsetWidth===0?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function set(elem,value,extra){var matches,styles=extra&&getStyles(elem),subtract=extra&&augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles); // Convert to pixels if value adjustment is needed
	if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[name]=value;value=jQuery.css(elem,name);}return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return (parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}}); // Support: Android 2.3
	jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}}); // These hooks are used by animate to expand properties
	jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function expand(value){var i=0,expanded={}, // Assumes a single number if not a string
	parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function css(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}return map;}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function show(){return showHide(this,true);},hide:function hide(){return showHide(this);},toggle:function toggle(state){if(typeof state==="boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHidden(this)){jQuery(this).show();}else {jQuery(this).hide();}});}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function init(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function run(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else {this.pos=eased=percent;}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks&&hooks.set){hooks.set(this);}else {Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function get(tween){var result; // Use a property on the element directly when it is not a DOM element,
	// or when there is no matching style property that exists.
	if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];} // Passing an empty string as a 3rd parameter to .css will automatically
	// attempt a parseFloat and fallback to a string if the parse fails.
	// Simple values such as "10px" are parsed to Float;
	// complex values such as "rotate(1rad)" are returned as-is.
	result=jQuery.css(tween.elem,tween.prop,""); // Empty strings, null, undefined and "auto" are converted to 0.
	return !result||result==="auto"?0:result;},set:function set(tween){ // Use step hook for back compat.
	// Use cssHook if its there.
	// Use .style if available and use plain properties where available.
	if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else {tween.elem[tween.prop]=tween.now;}}}}; // Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function set(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function linear(p){return p;},swing:function swing(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init; // Back Compat <1.8 extension point
	jQuery.fx.step={};var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/; // Animations created synchronously will run synchronously
	function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return fxNow=jQuery.now();} // Generate parameters to create a standard animation
	function genFx(type,includeWidth){var which,i=0,attrs={height:type}; // If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}if(includeWidth){attrs.opacity=attrs.width=type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){ // We're done with this property
	return tween;}}}function defaultPrefilter(elem,props,opts){ /* jshint validthis: true */var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=dataPriv.get(elem,"fxshow"); // Handle queue: false promises
	if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){ // Ensure the complete handler is called before this completes
	anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});} // Height/width overflow pass
	if(elem.nodeType===1&&("height" in props||"width" in props)){ // Make sure that nothing sneaks out
	// Record all 3 overflow attributes because IE9-10 do not
	// change the overflow attribute when overflowX and
	// overflowY are set to the same value
	opts.overflow=[style.overflow,style.overflowX,style.overflowY]; // Set display property to inline-block for height/width
	// animations on inline elements that are having width/height animated
	display=jQuery.css(elem,"display"); // Test default display if display is currently "none"
	checkDisplay=display==="none"?dataPriv.get(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){style.display="inline-block";}}if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});} // show/hide pass
	for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){ // If there is dataShow left over from a stopped hide or show
	// and we are going to proceed with show, we should pretend to be hidden
	if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else {continue;}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop); // Any non-fx value stops us from restoring the original display value
	}else {display=undefined;}}if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden" in dataShow){hidden=dataShow.hidden;}}else {dataShow=dataPriv.access(elem,"fxshow",{});} // Store state if its toggle - enables .stop().toggle() to "reverse"
	if(toggle){dataShow.hidden=!hidden;}if(hidden){jQuery(elem).show();}else {anim.done(function(){jQuery(elem).hide();});}anim.done(function(){var prop;dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}} // If this is a noop like .hide().hide(), restore an overwritten display value
	}else if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){style.display=display;}}function propFilter(props,specialEasing){var index,name,easing,value,hooks; // camelCase, specialEasing and expand cssHook pass
	for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}if(index!==name){props[name]=value;delete props[index];}hooks=jQuery.cssHooks[name];if(hooks&&"expand" in hooks){value=hooks.expand(value);delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
	// Reusing 'index' because we have the correct "name"
	for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else {specialEasing[name]=easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){ // Don't match elem in the :animated selector
	delete tick.elem;}),tick=function tick(){if(stopped){return false;}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime), // Support: Android 2.3
	// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
	temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else {deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function createTween(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function stop(gotoEnd){var index=0, // If we are going to the end, we want to run all the tweens
	// otherwise we skip this part
	length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped=true;for(;index<length;index++){animation.tweens[index].run(1);} // Resolve when we played the last frame; otherwise, reject
	if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else {deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(jQuery.isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result);}return result;}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue})); // attach callbacks from options
	return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function tweener(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else {props=props.match(rnotwhite);}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function prefilter(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else {Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&(typeof speed==="undefined"?"undefined":_typeof(speed))==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default; // Normalize opt.queue - true/undefined/null -> "fx"
	if(opt.queue==null||opt.queue===true){opt.queue="fx";} // Queueing
	opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function fadeTo(speed,to,easing,callback){ // Show any hidden elements after setting opacity to 0
	return this.filter(isHidden).css("opacity",0).show() // Animate to the value specified
	.end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function doAnimation(){ // Operate on a copy of prop so per-property easing won't be lost
	var anim=Animation(this,jQuery.extend({},prop),optall); // Empty animations, or finishing resolves immediately
	if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue&&type!==false){this.queue(type||"fx",[]);}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else {for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}} // Start the next in the queue if the last step wasn't forced.
	// Timers currently will call their complete callbacks, which
	// will dequeue but only if they were gotoEnd.
	if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function finish(type){if(type!==false){type=type||"fx";}return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0; // Enable finishing flag on private data
	data.finish=true; // Empty the queue first
	jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);} // Look for any active animations, and finish them
	for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}} // Look for any animations in the old queue and finish them
	for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}} // Turn off finishing flag
	delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};}); // Generate shortcuts for custom animations
	jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i]; // Checks the timer has not already been removed
	if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else {jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=window.setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){window.clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200, // Default speed
	_default:400}; // Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox"; // Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn=input.value!==""; // Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected=opt.selected; // Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled=true;support.optDisabled=!opt.disabled; // Support: IE<=11+
	// An input loses its value after becoming a radio
	input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function attr(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function attr(elem,name,value){var ret,hooks,nType=elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;} // Fallback to prop when attributes are not supported
	if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);} // All attributes are lowercase
	// Grab necessary hook if one is defined
	if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}if(hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}elem.setAttribute(name,value+"");return value;}if(hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}ret=jQuery.find.attr(elem,name); // Non-existent attributes return null, we normalize to undefined
	return ret==null?undefined:ret;},attrHooks:{type:{set:function set(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}},removeAttr:function removeAttr(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){propName=jQuery.propFix[name]||name; // Boolean attributes get special treatment (#10870)
	if(jQuery.expr.match.bool.test(name)){ // Set corresponding property to false
	elem[propName]=false;}elem.removeAttribute(name);}}}}); // Hooks for boolean attributes
	boolHook={set:function set(elem,value,name){if(value===false){ // Remove boolean attributes when set to false
	jQuery.removeAttr(elem,name);}else {elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle;if(!isXML){ // Avoid an infinite loop by temporarily removing this function from the getter
	handle=attrHandle[name];attrHandle[name]=ret;ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;attrHandle[name]=handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function prop(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function removeProp(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function prop(elem,name,value){var ret,hooks,nType=elem.nodeType; // Don't get/set properties on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;}if(nType!==1||!jQuery.isXMLDoc(elem)){ // Fix name and attach hooks
	name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}return elem[name]=value;}if(hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}return elem[name];},propHooks:{tabIndex:{get:function get(elem){ // elem.tabIndex doesn't always return the
	// correct value when it hasn't been explicitly set
	// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	// Use proper attribute retrieval(#12072)
	var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1;}}},propFix:{"for":"htmlFor","class":"className"}}); // Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if(!support.optSelected){jQuery.propHooks.selected={get:function get(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}return null;},set:function set(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});var rclass=/[\t\r\n\f]/g;function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}jQuery.fn.extend({addClass:function addClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while(elem=this[i++]){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}} // Only assign if different to avoid unneeded rendering.
	finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},removeClass:function removeClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}if(!arguments.length){return this.attr("class","");}if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while(elem=this[i++]){curValue=getClass(elem); // This expression is here for better compressibility (see addClass)
	cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while(clazz=classes[j++]){ // Remove *all* instances
	while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}} // Only assign if different to avoid unneeded rendering.
	finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=typeof value==="undefined"?"undefined":_typeof(value);if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}return this.each(function(){var className,i,self,classNames;if(type==="string"){ // Toggle individual class names
	i=0;self=jQuery(this);classNames=value.match(rnotwhite)||[];while(className=classNames[i++]){ // Check each className given, space separated list
	if(self.hasClass(className)){self.removeClass(className);}else {self.addClass(className);}} // Toggle whole class name
	}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){ // Store className if set
	dataPriv.set(this,"__className__",className);} // If the element has a class name or if we're passed `false`,
	// then remove the whole classname (if there was one, the above saved it).
	// Otherwise bring back whatever was previously saved (if anything),
	// falling back to the empty string if nothing was stored.
	if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function hasClass(selector){var className,elem,i=0;className=" "+selector+" ";while(elem=this[i++]){if(elem.nodeType===1&&(" "+getClass(elem)+" ").replace(rclass," ").indexOf(className)>-1){return true;}}return false;}});var rreturn=/\r/g,rspaces=/[\x20\t\r\n\f]+/g;jQuery.fn.extend({val:function val(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get" in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;return typeof ret==="string"? // Handle most common string cases
	ret.replace(rreturn,""): // Handle cases where value is null/undef or number
	ret==null?"":ret;}return;}isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}if(isFunction){val=value.call(this,i,jQuery(this).val());}else {val=value;} // Treat null/undefined as ""; convert numbers to string
	if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting
	if(!hooks||!("set" in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val: // Support: IE10-11+
	// option.text throws exceptions (#14686, #14858)
	// Strip and collapse whitespace
	// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
	jQuery.trim(jQuery.text(elem)).replace(rspaces," ");}},select:{get:function get(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0; // Loop through all the selected options
	for(;i<max;i++){option=options[i]; // IE8-9 doesn't update selected after form reset (#2551)
	if((option.selected||i===index)&&( // Don't return options that are disabled or in a disabled optgroup
	support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){ // Get the specific value for the option
	value=jQuery(option).val(); // We don't need an array for one selects
	if(one){return value;} // Multi-Selects return an array
	values.push(value);}}return values;},set:function set(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}} // Force browsers to behave consistently when non-matching value is set
	if(!optionSet){elem.selectedIndex=-1;}return values;}}}}); // Radios and checkboxes getter/setter
	jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function set(elem,value){if(jQuery.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1;}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}}); // Return jQuery for attributes-only inclusion
	var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function trigger(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document; // Don't do events on text and comment nodes
	if(elem.nodeType===3||elem.nodeType===8){return;} // focus/blur morphs to focusin/out; ensure we're not firing them right now
	if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf(".")>-1){ // Namespaced trigger; create a regexp to match event type in handle()
	namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}ontype=type.indexOf(":")<0&&"on"+type; // Caller can pass in a jQuery.Event object, Object, or just an event type string
	event=event[jQuery.expando]?event:new jQuery.Event(type,(typeof event==="undefined"?"undefined":_typeof(event))==="object"&&event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
	event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null; // Clean up the event in case it is being reused
	event.result=undefined;if(!event.target){event.target=elem;} // Clone any incoming data and prepend the event, creating the handler arg list
	data=data==null?[event]:jQuery.makeArray(data,[event]); // Allow special events to draw outside the lines
	special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;} // Determine event propagation path in advance, per W3C events spec (#9951)
	// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
	if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;} // Only add window if we got to document (e.g., not plain obj or detached DOM)
	if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}} // Fire handlers on the event path
	i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type; // jQuery handler
	handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);} // Native handler
	handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}event.type=type; // If nobody prevented the default action, do it now
	if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){ // Call a native DOM method on the target with the same name name as the event.
	// Don't do default actions on window, that's where global variables be (#6170)
	if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){ // Don't re-trigger an onFOO event when we call its FOO() method
	tmp=elem[ontype];if(tmp){elem[ontype]=null;} // Prevent re-triggering of the same event, since we already bubbled it above
	jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}return event.result;}, // Piggyback on a donor event to simulate a different one
	simulate:function simulate(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true // Previously, `originalEvent: {}` was set here, so stopPropagation call
	// would not be triggered on donor event, since in our own
	// jQuery.event.stopPropagation function we had a check for existence of
	// originalEvent.stopPropagation method, so, consequently it would be a noop.
	//
	// But now, this "simulate" function is used only for events
	// for which stopPropagation() is noop, so there is no need for that anymore.
	//
	// For the 1.x branch though, guard for "click" and "submit"
	// events is still used, but was moved to jQuery.event.stopPropagation function
	// because `originalEvent` should point to the original event for the constancy
	// with other events and for more focused logic
	});jQuery.event.trigger(e,null,elem);if(e.isDefaultPrevented()){event.preventDefault();}}});jQuery.fn.extend({trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){ // Handle event binding
	jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function hover(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});support.focusin="onfocusin" in window; // Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){ // Attach a single capturing handler on the document while someone wants focusin/focusout
	var handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function setup(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function teardown(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else {dataPriv.access(doc,fix,attaches);}}};});}var location=window.location;var nonce=jQuery.now();var rquery=/\?/; // Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON=function(data){return JSON.parse(data+"");}; // Cross-browser xml parsing
	jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;} // Support: IE9
	try{xml=new window.DOMParser().parseFromString(data,"text/xml");}catch(e){xml=undefined;}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}return xml;};var rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg, // #7653, #8125, #8152: local protocol detection
	rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//, /* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */prefilters={}, /* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */transports={}, // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes="*/".concat("*"), // Anchor tag for parsing the document origin
	originAnchor=document.createElement("a");originAnchor.href=location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure){ // dataTypeExpression is optional and defaults to "*"
	return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func)){ // For each dataType in the dataTypeExpression
	while(dataType=dataTypes[i++]){ // Prepend if requested
	if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func); // Otherwise append
	}else {(structure[dataType]=structure[dataType]||[]).push(func);}}}};} // Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return !(selected=dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");} // A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;} /* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes; // Remove auto dataType and get content-type in the process
	while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}} // Check if we're dealing with a known content-type
	if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}} // Check to see if we have a response for the expected dataType
	if(dataTypes[0] in responses){finalDataType=dataTypes[0];}else { // Try convertible dataTypes
	for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}} // Or just use first one
	finalDataType=finalDataType||firstDataType;} // If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}} /* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={}, // Work with a copy of dataTypes in case we need to modify it for conversion
	dataTypes=s.dataTypes.slice(); // Create converters map with lowercased keys
	if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}current=dataTypes.shift(); // Convert to each sequential dataType
	while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;} // Apply the dataFilter if provided
	if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}prev=current;current=dataTypes.shift();if(current){ // There's only work to do if current dataType is non-auto
	if(current==="*"){current=prev; // Convert response if prev dataType is non-auto and differs from current
	}else if(prev!=="*"&&prev!==current){ // Seek a direct converter
	conv=converters[prev+" "+current]||converters["* "+current]; // If none found, seek a pair
	if(!conv){for(conv2 in converters){ // If conv2 outputs current
	tmp=conv2.split(" ");if(tmp[1]===current){ // If prev can be converted to accepted input
	conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){ // Condense equivalence converters
	if(conv===true){conv=converters[conv2]; // Otherwise, insert the intermediate dataType
	}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}break;}}}} // Apply converter (if not an equivalence)
	if(conv!==true){ // Unless errors are allowed to bubble, catch and return them
	if(conv&&s.throws){response=conv(response);}else {try{response=conv(response);}catch(e){return {state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}return {state:"success",data:response};}jQuery.extend({ // Counter for holding the number of active queries
	active:0, // Last-Modified header cache for next request
	lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8", /*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"}, // Data converters
	// Keys separate source (or catchall "*") and destination types with a single space
	converters:{ // Convert anything to text
	"* text":String, // Text to html (true = no transformation)
	"text html":true, // Evaluate text as a json expression
	"text json":jQuery.parseJSON, // Parse text as xml
	"text xml":jQuery.parseXML}, // For options that shouldn't be deep extended:
	// you can add your own custom options here if
	// and when you create one that shouldn't be
	// deep extended (see ajaxExtend)
	flatOptions:{url:true,context:true}}, // Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup:function ajaxSetup(target,settings){return settings? // Building a settings object
	ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings): // Extending ajaxSettings
	ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports), // Main method
	ajax:function ajax(url,options){ // If url is an object, simulate pre-1.5 signature
	if((typeof url==="undefined"?"undefined":_typeof(url))==="object"){options=url;url=undefined;} // Force options to be an object
	options=options||{};var transport, // URL without anti-cache param
	cacheURL, // Response headers
	responseHeadersString,responseHeaders, // timeout handle
	timeoutTimer, // Url cleanup var
	urlAnchor, // To know if global events are to be dispatched
	fireGlobals, // Loop variable
	i, // Create the final options object
	s=jQuery.ajaxSetup({},options), // Callbacks context
	callbackContext=s.context||s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
	globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event, // Deferreds
	deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"), // Status-dependent callbacks
	_statusCode=s.statusCode||{}, // Headers (they are sent all at once)
	requestHeaders={},requestHeadersNames={}, // The jqXHR state
	state=0, // Default abort message
	strAbort="canceled", // Fake xhr
	jqXHR={readyState:0, // Builds headers hashtable if needed
	getResponseHeader:function getResponseHeader(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2];}}match=responseHeaders[key.toLowerCase()];}return match==null?null:match;}, // Raw string
	getAllResponseHeaders:function getAllResponseHeaders(){return state===2?responseHeadersString:null;}, // Caches the header
	setRequestHeader:function setRequestHeader(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}return this;}, // Overrides response content-type header
	overrideMimeType:function overrideMimeType(type){if(!state){s.mimeType=type;}return this;}, // Status-dependent callbacks
	statusCode:function statusCode(map){var code;if(map){if(state<2){for(code in map){ // Lazy-add the new callback in a way that preserves old ones
	_statusCode[code]=[_statusCode[code],map[code]];}}else { // Execute the appropriate callbacks
	jqXHR.always(map[jqXHR.status]);}}return this;}, // Cancel the request
	abort:function abort(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}}; // Attach deferreds
	deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail; // Remove hash character (#7531: and string promotion)
	// Add protocol if not provided (prefilters might expect it)
	// Handle falsy url in the settings object (#10093: consistency with old signature)
	// We also use the url parameter if available
	s.url=((url||s.url||location.href)+"").replace(rhash,"").replace(rprotocol,location.protocol+"//"); // Alias method option to type as per ticket #12004
	s.type=options.method||options.type||s.method||s.type; // Extract dataTypes list
	s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""]; // A cross-domain request is in order when the origin doesn't match the current origin.
	if(s.crossDomain==null){urlAnchor=document.createElement("a"); // Support: IE8-11+
	// IE throws exception if url is malformed, e.g. http://example.com:80x/
	try{urlAnchor.href=s.url; // Support: IE8-11+
	// Anchor's host property isn't correctly set when s.url is relative
	urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){ // If there is an error parsing the URL, assume it is crossDomain,
	// it can be rejected by the transport if it is invalid
	s.crossDomain=true;}} // Convert data if not already a string
	if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);} // Apply prefilters
	inspectPrefiltersOrTransports(prefilters,s,options,jqXHR); // If request was aborted inside a prefilter, stop there
	if(state===2){return jqXHR;} // We can fire global events as of now if asked to
	// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
	fireGlobals=jQuery.event&&s.global; // Watch for a new set of requests
	if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");} // Uppercase the type
	s.type=s.type.toUpperCase(); // Determine if request has content
	s.hasContent=!rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
	// and/or If-None-Match header later on
	cacheURL=s.url; // More options handling for requests with no content
	if(!s.hasContent){ // If data is available, append data to url
	if(s.data){cacheURL=s.url+=(rquery.test(cacheURL)?"&":"?")+s.data; // #9682: remove data so that it's not used in an eventual retry
	delete s.data;} // Add anti-cache in url if needed
	if(s.cache===false){s.url=rts.test(cacheURL)? // If there is already a '_' parameter, set its value
	cacheURL.replace(rts,"$1_="+nonce++): // Otherwise add one to the end
	cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++;}} // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}} // Set the correct header, if data is being sent
	if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);} // Set the Accepts header for the server, depending on the dataType
	jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]); // Check for headers option
	for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);} // Allow custom headers/mimetypes and early abort
	if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){ // Abort if not done already and return
	return jqXHR.abort();} // Aborting is no longer a cancellation
	strAbort="abort"; // Install callbacks on deferreds
	for(i in {success:1,error:1,complete:1}){jqXHR[i](s[i]);} // Get transport
	transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR); // If no transport, we auto-abort
	if(!transport){done(-1,"No Transport");}else {jqXHR.readyState=1; // Send global event
	if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);} // If request was aborted inside ajaxSend, stop there
	if(state===2){return jqXHR;} // Timeout
	if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{state=1;transport.send(requestHeaders,done);}catch(e){ // Propagate exception as error if not done
	if(state<2){done(-1,e); // Simply rethrow otherwise
	}else {throw e;}}} // Callback for when everything is done
	function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText; // Called once
	if(state===2){return;} // State is "done" now
	state=2; // Clear timeout if it exists
	if(timeoutTimer){window.clearTimeout(timeoutTimer);} // Dereference transport for early garbage collection
	// (no matter how long the jqXHR object will be used)
	transport=undefined; // Cache response headers
	responseHeadersString=headers||""; // Set readyState
	jqXHR.readyState=status>0?4:0; // Determine if successful
	isSuccess=status>=200&&status<300||status===304; // Get response data
	if(responses){response=ajaxHandleResponses(s,jqXHR,responses);} // Convert no matter what (that way responseXXX fields are always set)
	response=ajaxConvert(s,response,jqXHR,isSuccess); // If successful, handle type chaining
	if(isSuccess){ // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}} // if no content
	if(status===204||s.type==="HEAD"){statusText="nocontent"; // if not modified
	}else if(status===304){statusText="notmodified"; // If we have data, let's convert it
	}else {statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else { // Extract error from statusText and normalize for non-aborts
	error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}} // Set data for the fake xhr object
	jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+""; // Success/Error
	if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else {deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);} // Status-dependent callbacks
	jqXHR.statusCode(_statusCode);_statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);} // Complete
	completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]); // Handle the global AJAX counter
	if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){ // Shift arguments if data argument was omitted
	if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;} // The url can be an options object (which then must have .url)
	return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url, // Make this explicit, since user can override this through ajaxSetup (#11264)
	type:"GET",dataType:"script",async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function wrapAll(html){var wrap;if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}if(this[0]){ // The elements to wrap the target around
	wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else {self.append(html);}});},wrap:function wrap(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function unwrap(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});jQuery.expr.filters.hidden=function(elem){return !jQuery.expr.filters.visible(elem);};jQuery.expr.filters.visible=function(elem){ // Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	// Use OR instead of AND as the element is not visible if either is true
	// See tickets #10406 and #13132
	return elem.offsetWidth>0||elem.offsetHeight>0||elem.getClientRects().length>0;};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){ // Serialize array item.
	jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){ // Treat each array item as a scalar.
	add(prefix,v);}else { // Item is non-scalar (array or object), encode its numeric index.
	buildParams(prefix+"["+((typeof v==="undefined"?"undefined":_typeof(v))==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){ // Serialize object item.
	for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else { // Serialize scalar item.
	add(prefix,obj);}} // Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param=function(a,traditional){var prefix,s=[],add=function add(key,value){ // If value is a function, invoke it and return its value
	value=jQuery.isFunction(value)?value():value==null?"":value;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);}; // Set traditional to true for jQuery <= 1.3.2 behavior.
	if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;} // If an array was passed in, assume that it is an array of form elements.
	if(jQuery.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){ // Serialize the form elements
	jQuery.each(a,function(){add(this.name,this.value);});}else { // If traditional, encode the "old" way (the way 1.3.2 or older
	// did it), otherwise encode params recursively.
	for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}} // Return the resulting serialization
	return s.join("&").replace(r20,"+");};jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){ // Can add propHook for "elements" to filter or add form elements
	var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works
	return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return {name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={ // File protocol always yields status code 0, assume 200
	0:200, // Support: IE9
	// #1450: sometimes IE returns 1223 when it should be 204
	1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials" in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var _callback,errorCallback; // Cross domain only allowed if supported through XMLHttpRequest
	if(support.cors||xhrSupported&&!options.crossDomain){return {send:function send(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password); // Apply custom fields if provided
	if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}} // Override mime type if needed
	if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);} // X-Requested-With header
	// For cross-domain requests, seeing as conditions for a preflight are
	// akin to a jigsaw puzzle, we simply never set it to be sure.
	// (it can always be set on a per-request basis or even using ajaxSetup)
	// For same-domain requests, won't change header if already provided.
	if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";} // Set headers
	for(i in headers){xhr.setRequestHeader(i,headers[i]);} // Callback
	_callback=function callback(type){return function(){if(_callback){_callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){ // Support: IE9
	// On a manual native abort, IE9 throws
	// errors on any property access that is not readyState
	if(typeof xhr.status!=="number"){complete(0,"error");}else {complete( // File: protocol always yields status 0; see #8605, #14207
	xhr.status,xhr.statusText);}}else {complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText, // Support: IE9 only
	// IE9 has no XHR2 but throws on binary (trac-11426)
	// For XHR2 non-text, let the caller handle it (gh-2498)
	(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};}; // Listen to events
	xhr.onload=_callback();errorCallback=xhr.onerror=_callback("error"); // Support: IE9
	// Use onreadystatechange to replace onabort
	// to handle uncaught aborts
	if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else {xhr.onreadystatechange=function(){ // Check readyState before timeout as it changes
	if(xhr.readyState===4){ // Allow onerror to be called first,
	// but that will not handle a native abort
	// Also, save errorCallback to a variable
	// as xhr.onerror cannot be accessed
	window.setTimeout(function(){if(_callback){errorCallback();}});}};} // Create the abort callback
	_callback=_callback("abort");try{ // Do send the request (this may raise an exception)
	xhr.send(options.hasContent&&options.data||null);}catch(e){ // #14683: Only rethrow if this hasn't been notified as an error yet
	if(_callback){throw e;}}},abort:function abort(){if(_callback){_callback();}}};}}); // Install script dataType
	jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}}); // Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";}}); // Bind script tag hack transport
	jQuery.ajaxTransport("script",function(s){ // This transport only deals with cross domain requests
	if(s.crossDomain){var script,_callback2;return {send:function send(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",_callback2=function callback(evt){script.remove();_callback2=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}}); // Use native DOM manipulation to avoid our domManip AJAX trickery
	document.head.appendChild(script[0]);},abort:function abort(){if(_callback2){_callback2();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/; // Default jsonp settings
	jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;this[callback]=true;return callback;}}); // Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set
	if(jsonProp||s.dataTypes[0]==="jsonp"){ // Get callback name, remembering preexisting value associated with it
	callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback; // Insert callback into url or form data
	if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;} // Use data converter to retrieve json after script execution
	s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}return responseContainer[0];}; // Force json dataType
	s.dataTypes[0]="json"; // Install callback
	overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;}; // Clean-up function (fires after converters)
	jqXHR.always(function(){ // If previous value didn't exist - remove it
	if(overwritten===undefined){jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
	}else {window[callbackName]=overwritten;} // Save back as free
	if(s[callbackName]){ // Make sure that re-using the options doesn't screw things around
	s.jsonpCallback=originalSettings.jsonpCallback; // Save the callback name for future use
	oldCallbacks.push(callbackName);} // Call if it was a function and we have a response
	if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer=overwritten=undefined;}); // Delegate to script
	return "script";}}); // Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}if(typeof context==="boolean"){keepScripts=context;context=false;}context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[]; // Single tag
	if(parsed){return [context.createElement(parsed[1])];}parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);}; // Keep a copy of the old load method
	var _load=jQuery.fn.load; /**
	 * Load a url into a page
	 */jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=jQuery.trim(url.slice(off));url=url.slice(0,off);} // If it's a function
	if(jQuery.isFunction(params)){ // We assume that it's the callback
	callback=params;params=undefined; // Otherwise, build a param string
	}else if(params&&(typeof params==="undefined"?"undefined":_typeof(params))==="object"){type="POST";} // If we have elements to modify, make the request
	if(self.length>0){jQuery.ajax({url:url, // If "type" variable is undefined, then "GET" method will be used.
	// Make value of this field explicit since
	// user can override it through ajaxSetup method
	type:type||"GET",dataType:"html",data:params}).done(function(responseText){ // Save response for use in complete callback
	response=arguments;self.html(selector? // If a selector was specified, locate the right elements in a dummy div
	// Exclude scripts to avoid IE 'Permission Denied' errors
	jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector): // Otherwise use the full result
	responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
	// but they are ignored because response was set above.
	// If it fails, this function gets "jqXHR", "status", "error"
	}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(self,response||[jqXHR.responseText,status,jqXHR]);});});}return this;}; // Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;}; /**
	 * Gets a window from an element
	 */function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView;}jQuery.offset={setOffset:function setOffset(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={}; // Set position first, in-case top/left are set even on static elem
	if(position==="static"){elem.style.position="relative";}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1; // Need to be able to calculate position if either
	// top or left is auto and position is either absolute or fixed
	if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else {curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(jQuery.isFunction(options)){ // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
	options=options.call(elem,i,jQuery.extend({},curOffset));}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using" in options){options.using.call(elem,props);}else {curElem.css(props);}}};jQuery.fn.extend({offset:function offset(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var docElem,win,elem=this[0],box={top:0,left:0},doc=elem&&elem.ownerDocument;if(!doc){return;}docElem=doc.documentElement; // Make sure it's not a disconnected DOM node
	if(!jQuery.contains(docElem,elem)){return box;}box=elem.getBoundingClientRect();win=getWindow(doc);return {top:box.top+win.pageYOffset-docElem.clientTop,left:box.left+win.pageXOffset-docElem.clientLeft};},position:function position(){if(!this[0]){return;}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0}; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
	// because it is its only offset parent
	if(jQuery.css(elem,"position")==="fixed"){ // Assume getBoundingClientRect is there when computed position is fixed
	offset=elem.getBoundingClientRect();}else { // Get *real* offsetParent
	offsetParent=this.offsetParent(); // Get correct offsets
	offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();} // Add offsetParent borders
	parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);} // Subtract parent offsets and element margins
	return {top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};}, // This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent||documentElement;});}}); // Create scrollLeft and scrollTop methods
	jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else {elem[method]=val;}},method,val,arguments.length);};}); // Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop); // If curCSS returns percentage, fallback to offset
	return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});}); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){ // Margin is only for outerHeight, outerWidth
	jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){ // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
	// isn't a whole lot we can do. See pull request at this URL for discussion:
	// https://github.com/jquery/jquery/pull/764
	return elem.document.documentElement["client"+name];} // Get document width or height
	if(elem.nodeType===9){doc=elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
	// whichever is greatest
	return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}return value===undefined? // Get width or height on the element, requesting but not forcing parseFloat
	jQuery.css(elem,type,extra): // Set width or height on the element
	jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});jQuery.fn.extend({bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){ // ( namespace ) or ( selector, types [, fn] )
	return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},size:function size(){return this.length;}});jQuery.fn.andSelf=jQuery.fn.addBack; // Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return jQuery;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}var  // Map over jQuery in case of overwrite
	_jQuery=window.jQuery, // Map over the $ in case of overwrite
	_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}return jQuery;}; // Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if(!noGlobal){window.jQuery=window.$=jQuery;}return jQuery;});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(241)(module)))

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(478);
	__webpack_require__(505);

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	/*jshint forin:false, eqnull:true*/
	/* globals JSYG*/
	
	(function (factory) {
	
	    if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(481), __webpack_require__(479), __webpack_require__(485), __webpack_require__(489), __webpack_require__(503), __webpack_require__(497), __webpack_require__(499), __webpack_require__(491), __webpack_require__(501)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof JSYG != "undefined") {
	        if (JSYG.Path && JSYG.Vect && JSYG.BoundingBox && JSYG.Selection && JSYG.Container && JSYG.Draggable && JSYG.Resizable && JSYG.Rotatable && JSYG.Alignment) factory(JSYG, JSYG.Path, JSYG.BoundingBox, JSYG.Selection, JSYG.Container, JSYG.Rotatable);else throw new Error("Dependency is missing");
	    } else throw new Error("JSYG is needed");
	})(function (JSYG, Path, BoundingBox, Selection, Container, Rotatable) {
	
	    "use strict";
	
	    var ctrls = ['Drag', 'Resize', 'Rotate', 'CtrlPoints', 'MainPoints'],
	        plugins = ['box', 'selection', 'clipBoard'];
	
	    /**
	     * <strong>nécessite le module Editor</strong>
	     * Edition d'éléments (positionnement, dimensions, rotation, et édition des formes pour les éléments SVG).
	     * @param arg argument JSYG canvas des éléments à éditer
	     * @param opt optionnel, objet définissant les options.
	     * @returns {Editor}
	     */
	    function Editor(arg, opt) {
	
	        this.ctrlsMainPoints = new MainPoints(this);
	        this.ctrlsCtrlPoints = new CtrlPoints(this);
	        this.ctrlsResize = new Resize(this);
	        this.ctrlsRotate = new Rotate(this);
	        this.ctrlsDrag = new Drag(this);
	
	        this.selection = new Selection();
	        this.selection.multiple = false;
	
	        this.clipBoard = new ClipBoard(this);
	
	        this.box = new BoundingBox();
	        this.box.className = 'fillBox';
	
	        this.container = this.box.container;
	
	        this.node = null;
	        this.display = false;
	
	        this._list = null;
	        this._target = null;
	
	        this._tempoContainer = new JSYG('<g>').addClass('tempoContainer')[0];
	
	        if (arg) this.setNode(arg);
	        if (opt) this.enable(opt);
	    }
	
	    Editor.prototype = new JSYG.StdConstruct();
	
	    Editor.prototype.constructor = Editor;
	
	    /**
	     * Fonctions à exécuter quand on définit une autre cible
	     */
	    Editor.prototype.onchangetarget = null;
	    /**
	     * Fonctions à exécuter avant l'affichage de la boite d'édition (renvoyer false pour empecher l'événement)
	     */
	    Editor.prototype.onbeforeshow = null;
	    /**
	     * Fonctions à exécuter à l'affichage de la boite d'édition
	     */
	    Editor.prototype.onshow = null;
	    /**
	     * Fonctions à exécuter avant la suppression de la boite d'édition (renvoyer false pour empecher l'événement)
	     */
	    Editor.prototype.onbeforehide = null;
	    /**
	     * Fonctions à exécuter à la suppression de la boite d'édition
	     */
	    Editor.prototype.onhide = null;
	    /**
	     * Fonctions à exécuter à la mise à jour de la boite d'édition
	     */
	    Editor.prototype.onupdate = null;
	    /**
	     * Fonctions à exécuter à chaque fois qu'une action d'édition se prépare, qu'elle est lieu ou non (mousedown sur un contrôle)
	     */
	    Editor.prototype.onstart = null;
	    /**
	     * Fonctions à exécuter à chaque fois qu'une action d'édition débute
	     */
	    Editor.prototype.ondragstart = null;
	    /**
	     * Fonctions à exécuter pendant une action d'édition
	     */
	    Editor.prototype.ondrag = null;
	    /**
	     * Fonctions à exécuter à la fin d'une action d'édition
	     */
	    Editor.prototype.ondragend = null;
	    /**
	     * Fonctions à exécuter au relachement du bouton de souris, qu'il y ait eu modification ou non
	     */
	    Editor.prototype.onend = null;
	
	    /**
	     * Fonctions à exécuter à tout changement
	     */
	    Editor.prototype.onchange = null;
	
	    Editor.prototype.set = function (options) {
	
	        for (var n in options) {
	            if (options.hasOwnProperty(n) && n in this) {
	                if (ctrls.indexOf(n) !== -1 || plugins.indexOf(n) !== -1) this[n].set(options[n]);else if (n == 'target' || n == 'list') this[n](options[n]);else this[n] = options[n];
	            }
	        }
	
	        return this;
	    };
	
	    /**
	     * définit le canvas d'édition
	     * @param arg argument JSYG
	     * @returns {Editor}
	     */
	    Editor.prototype.setNode = function (arg) {
	
	        JSYG.StdConstruct.prototype.setNode.call(this, arg);
	        this.selection.setNode(arg);
	
	        return this;
	    };
	
	    /**
	     * définit ou renvoie l'élément à éditer
	     * @param arg argument JSYG optionnel, si renseigné définit la cible à éditer
	     * @returns {Editor,JSYG}
	     */
	    Editor.prototype.target = function (arg, _preventEvent) {
	
	        var target, display, container;
	
	        if (arg == null) {
	            if (!this._target) return null;
	            target = new JSYG(this._target);
	            return this.isMultiSelection() ? target.children() : target;
	        }
	
	        display = this.display;
	
	        if (display) this.hide(null, true);
	
	        target = new JSYG(arg);
	
	        if (target.length > 1) {
	
	            container = new Container(this._tempoContainer).freeItems();
	
	            container.insertBefore(target[0]);
	
	            container.addItems(target);
	
	            this._target = this._tempoContainer;
	            this._oldTargets = container.children();
	        } else {
	            this._target = target[0];
	            this._oldTargets = null;
	        }
	
	        this.box.setNode(this._target);
	
	        if (display) this.show(null, true);
	
	        if (!_preventEvent) this.trigger('changetarget', this.node, this._target);
	
	        return this;
	    };
	
	    /**
	     * Réinitialise la cible
	     */
	    Editor.prototype.targetRemove = function () {
	
	        this._target = null;
	    };
	
	    /**
	     * Indique si plusieurs éléments sont édités à la fois
	     * @returns {Boolean}
	     */
	    Editor.prototype.isMultiSelection = function () {
	
	        return this._target == this._tempoContainer;
	    };
	
	    /**
	     * définit ou renvoie la liste des éléments éditables dans le canvas.
	     */
	    Editor.prototype.list = null;
	
	    if (Object.defineProperty) {
	
	        try {
	
	            Object.defineProperty(Editor.prototype, "list", {
	                "get": function get() {
	                    return this._list;
	                },
	                "set": function set(list) {
	                    this._list = list;
	                    this.selection.list = this._list;
	                }
	            });
	        } catch (e) {}
	    }
	
	    /**
	     * Masque le conteneur d'édition
	     */
	    Editor.prototype.hide = function (e, _preventEvent) {
	
	        if (!_preventEvent && this.trigger("beforehide", this.node, e, this._target) === false) return this;
	
	        this.box.hide();
	
	        var ctrl, i, N, container;
	
	        for (i = 0, N = ctrls.length; i < N; i++) {
	            ctrl = this['ctrls' + ctrls[i]];
	            if (ctrl && ctrl.enabled) ctrl.hide(_preventEvent);
	        }
	
	        if (this.isMultiSelection()) {
	
	            container = new Container(this._tempoContainer);
	            container.freeItems().remove();
	        }
	
	        this.display = false;
	
	        if (!_preventEvent) this.trigger('hide', this.node, e, this._target);
	
	        return this;
	    };
	
	    /**
	     * Affiche le conteneur d'édition
	     * @param e optionnel, objet Event afin de commencer tout de suite le déplacement de l'élément
	     * (ainsi sur un meme événement mousedown on peut afficher le conteneur et commencer le déplacement)
	     * @returns {Editor}
	     */
	    Editor.prototype.show = function (e, _preventEvent) {
	
	        if (!_preventEvent && this.trigger("beforeshow", this.node, e, this._target) === false) return this;
	
	        if (this.isMultiSelection()) this.target(this._oldTargets, _preventEvent);
	
	        this.display = true;
	
	        this.box.show();
	
	        var ctrl, i, N;
	
	        for (i = 0, N = ctrls.length; i < N; i++) {
	            ctrl = this['ctrls' + ctrls[i]];
	            if (ctrl && ctrl.enabled) ctrl.show(_preventEvent);
	        }
	
	        if (!_preventEvent) this.trigger('show', this.node, e, this._target);
	
	        if (e && e.type == "mousedown" && this.ctrlsDrag.enabled) this.ctrlsDrag.start(e);
	
	        return this;
	    };
	
	    /**
	     * Mise à jour du conteneur d'édition. (Si l'élément est modifié par un autre moyen que les contrôles du conteneur,
	     * il peut s'avérer utile de mettre à jour le conteneur)
	     * @returns {Editor}
	     */
	    Editor.prototype.update = function (e, _preventEvent) {
	
	        if (!this.display) return this;
	
	        this.box.update();
	
	        var ctrl, i, N;
	
	        for (i = 0, N = ctrls.length; i < N; i++) {
	            ctrl = this['ctrls' + ctrls[i]];
	            if (ctrl && ctrl.display) ctrl.update();
	        }
	
	        if (!_preventEvent) this.trigger('update', this.node, e, this._target);
	
	        return this;
	    };
	
	    /**
	     * Activation des contrôles.<br/>
	     * appelée sans argument, tous les contrôles sont activés. Sinon, en arguments (nombre variable) les noms des contrôles à activer
	     * ('Drag','Resize','Rotate','CtrlPoints','MainPoints').
	     */
	    Editor.prototype.enableCtrls = function () {
	
	        if (arguments.length === 0) {
	            for (var i = 0, N = ctrls.length; i < N; i++) {
	                this['ctrls' + ctrls[i]].enable();
	            }
	        } else {
	
	            var that = this;
	
	            JSYG.makeArray(arguments).forEach(function (arg) {
	                var ctrl = that['ctrls' + JSYG.ucfirst(arg)];
	                if (ctrl) ctrl.enable();
	            });
	        }
	
	        return this;
	    };
	
	    /**
	     * Désactivation des contrôles.<br/>
	     * appelée sans argument, tous les contrôles sont desactivés. Sinon, en arguments (nombre variable) les noms des contrôles à desactiver
	     * ('Drag','Resize','Rotate','CtrlPoints','MainPoints').
	     */
	    Editor.prototype.disableCtrls = function () {
	
	        if (arguments.length === 0) {
	            for (var i = 0, N = ctrls.length; i < N; i++) {
	                this['ctrls' + ctrls[i]].disable();
	            }
	        } else {
	
	            var that = this;
	
	            JSYG.makeArray(arguments).forEach(function (arg) {
	                var ctrl = that['ctrls' + JSYG.ucfirst(arg)];
	                if (ctrl) ctrl.disable();
	            });
	        }
	
	        return this;
	    };
	
	    /**
	     * Aligne les éléments sélectionnés
	     * @param {String} type (top,middle,bottom,left,center,right)
	     * @returns {Editor}
	     */
	    Editor.prototype.align = function (type) {
	
	        if (!this.isMultiSelection()) return this;
	
	        this.target().align(type);
	
	        this.update();
	
	        this.trigger("change", this.node, this._target);
	
	        return this;
	    };
	
	    Editor.prototype.group = function () {
	
	        var target = this.target(),
	            g,
	            parent;
	
	        if (target.length == 1) return this;
	
	        g = new JSYG('<g>');
	
	        parent = target.parent();
	
	        this.target(g.appendTo(parent).append(target)).update();
	
	        this.trigger("change", this.node, this._target);
	
	        return this;
	    };
	
	    Editor.prototype.ungroup = function () {
	
	        var g = this.target();
	
	        if (!this.isGroup()) return this;
	
	        new Container(g).freeItems();
	
	        this.hide();
	
	        this.trigger("change", this.node, this._target);
	
	        return this;
	    };
	
	    Editor.prototype.isGroup = function () {
	
	        var g = this.target();
	
	        return g.getTag() == "g" && g.length == 1;
	    };
	
	    Editor.prototype.enable = function (opt) {
	
	        var selectFcts,
	            n,
	            that = this;
	
	        this.disable();
	
	        if (opt) this.set(opt);
	
	        if (!this._list) this.list = '*';
	
	        selectFcts = {
	
	            "beforedeselect beforedrag": function beforedeselectBeforedrag(e) {
	                if (e.target == that.container || new JSYG(e.target).isChildOf(that.container)) return false;
	            },
	
	            "selectover": function selectover(e, elmt) {
	                new JSYG(elmt).boundingBox('show');
	            },
	
	            "selectout": function selectout(e, elmt) {
	                new JSYG(elmt).boundingBox('hide');
	            },
	
	            "selectedlist": function selectedlist(e, list) {
	
	                new JSYG(list).boundingBox("hide");
	
	                that.target(list).show(e);
	            },
	
	            "deselectedlist": function deselectedlist(e) {
	                that.hide(e);
	            }
	        };
	
	        this.enabled = true;
	
	        if (opt) {
	            for (n in opt) {
	                if (ctrls.indexOf(n) !== -1 || n == "clipBoard") this[n].enable();
	            }
	        }
	
	        this.selection.on(selectFcts).enable();
	
	        this.disable = function () {
	
	            this.hide();
	
	            this.targetRemove();
	
	            this.selection.off(selectFcts).disable();
	
	            this.enabled = false;
	
	            return this;
	        };
	
	        return this;
	    };
	
	    Editor.prototype.disable = function () {
	
	        this.hide();
	
	        this.targetRemove();
	
	        this.enabled = false;
	
	        return this;
	    };
	
	    function ClipBoard(editorObject) {
	        /**
	         * référence vers l'objet Editor parent
	         */
	        this.editor = editorObject;
	    }
	
	    ClipBoard.prototype = new JSYG.StdConstruct();
	
	    ClipBoard.prototype.pasteOffset = 10;
	
	    ClipBoard.prototype.oncopy = null;
	    ClipBoard.prototype.oncut = null;
	    ClipBoard.prototype.onpaste = null;
	
	    ClipBoard.prototype.keyShortCutCopy = "ctrl+c";
	    ClipBoard.prototype.keyShortCutCut = "ctrl+x";
	    ClipBoard.prototype.keyShortCutPaste = "ctrl+v";
	
	    ClipBoard.prototype.enabled = false;
	
	    ClipBoard.prototype.buffer = null;
	
	    ClipBoard.prototype._parent = null;
	    ClipBoard.prototype._multiSelection = null;
	
	    ClipBoard.prototype.copy = function () {
	
	        var target = new JSYG(this.editor._target);
	
	        this._multiSelection = this.editor.isMultiSelection();
	
	        if (!target.length) return this;
	
	        this.buffer = target.clone()[0];
	        this._parent = target.parent()[0];
	
	        this.trigger('copy', this.editor.node, target[0], this.buffer);
	        return this;
	    };
	
	    ClipBoard.prototype.cut = function () {
	
	        var target = new JSYG(this.editor._target);
	
	        this._multiSelection = this.editor.isMultiSelection();
	
	        if (!target.length) return this;
	
	        this.buffer = target.clone()[0];
	        this._parent = target.parent()[0];
	
	        this.editor.hide();
	        this.editor.target().remove();
	        this.editor.targetRemove();
	
	        this.trigger('cut', this.editor.node, this.buffer);
	        this.editor.trigger('change', this.editor.node, this.buffer);
	
	        return this;
	    };
	
	    ClipBoard.prototype.paste = function (parent) {
	
	        if (!this.buffer) return this;
	
	        var clone = new JSYG(this.buffer),
	            children,
	            dim;
	
	        parent = new JSYG(parent || this._parent);
	
	        clone.appendTo(parent);
	
	        dim = clone.getDim(parent);
	
	        clone.setDim({
	            x: dim.x + this.pasteOffset,
	            y: dim.y + this.pasteOffset,
	            from: parent
	        });
	
	        this.buffer = clone.clone()[0];
	
	        if (this._multiSelection) {
	
	            children = clone.children();
	            new Container(clone).freeItems().remove();
	            this.editor.target(children).show(true);
	        } else this.editor.target(clone).show(true);
	
	        this.trigger('paste', this.editor.node, clone[0]);
	        this.editor.trigger('change', this.editor.node, clone[0]);
	
	        return this;
	    };
	
	    ClipBoard.prototype.enableKeyShortCuts = function (opt) {
	
	        this.disable();
	
	        if (opt) this.set(opt);
	
	        var that = this,
	            $doc = new JSYG(document);
	
	        function copy(e) {
	            if (!that.editor.display) return;
	            e.preventDefault();
	            that.copy();
	        }
	
	        function cut(e) {
	            if (!that.editor.display) return;
	            e.preventDefault();
	            that.cut();
	        }
	
	        function paste(e) {
	            if (!that.buffer) return;
	            e.preventDefault();
	            that.paste();
	        }
	
	        if (this.keyShortCutCopy) $doc.on("keydown", null, this.keyShortCutCopy, copy);
	        if (this.keyShortCutCut) $doc.on("keydown", null, this.keyShortCutCut, cut);
	        if (this.keyShortCutPaste) $doc.on("keydown", null, this.keyShortCutPaste, paste);
	
	        this.disableKeyShortCuts = function () {
	
	            if (this.keyShortCutCopy) $doc.off("keydown", null, this.keyShortCutCopy, copy);
	            if (this.keyShortCutCut) $doc.off("keydown", null, this.keyShortCutCut, cut);
	            if (this.keyShortCutPaste) $doc.off("keydown", null, this.keyShortCutPaste, paste);
	
	            this.enabled = false;
	
	            return this;
	        };
	
	        this.enabled = true;
	        return this;
	    };
	
	    ClipBoard.prototype.disableKeyShortCuts = function () {
	        return this;
	    };
	
	    /**
	     * Edition des points de contrôle des chemins SVG
	     */
	    function CtrlPoints(editorObject) {
	        /**
	         * référence vers l'objet Editor parent
	         */
	        this.editor = editorObject;
	        /**
	         * liste des contrôles
	         */
	        this.list = [];
	        /**
	         * Conteneur des contrôles
	         */
	        this.container = new JSYG('<g>')[0];
	    }
	
	    CtrlPoints.prototype = {
	
	        constructor: CtrlPoints,
	
	        container: null,
	        /**
	         * Classe appliquée au conteneur des contrôles
	         */
	        className: 'ctrlPoints',
	        /**
	         * Forme utilisée pour les contrôles
	         */
	        shape: 'circle',
	        /**
	         * lien utilisé si shape est défini à "use"
	         */
	        xlink: null,
	        /**
	         * largeur du contrôle
	         */
	        width: 10,
	        /**
	         * hauteur du contrôle
	         */
	        height: 10,
	        /**
	         * Points de contrôle liés ou non (si on en déplace un, l'autre se déplace en miroir)
	         */
	        linked: true,
	        /**
	         * Options supplémentaires pour le drag&drop
	         * @see {Draggable}
	         */
	        draggableOptions: null,
	        /**
	         * Fonction(s) à exécuter à l'affichage des contrôles
	         */
	        onshow: null,
	        /**
	         * Fonction(s) à exécuter à la suppression des contrôles
	         */
	        onhide: null,
	        /**
	         * Fonction(s) à exécuter quand on prépare un déplacement (mousedown sur le contrôle)
	         */
	        onstart: null,
	        /**
	         * Fonction(s) à exécuter quand on commence un déplacement
	         */
	        ondragstart: null,
	        /**
	         * Fonction(s) à exécuter pendant le déplacement
	         */
	        ondrag: null,
	        /**
	         * Fonction(s) à exécuter en fin de déplacement
	         */
	        ondragend: null,
	        /**
	         * Fonction(s) à exécuter au relâchement de la souris, qu'il y ait eu modification ou non
	         */
	        onend: null,
	        /**
	         * Indique si les contrôles sont activés ou non
	         */
	        enabled: false,
	        /**
	         * Indique si les contrôles sont affichés ou non
	         */
	        display: false,
	
	        set: JSYG.StdConstruct.prototype.set,
	        /**
	         * Ajout d'écouteurs d'événements customisés
	         * @see JSYG.StdConstruct.prototype.on
	         * @returns {CtrlPoints}
	         */
	        on: JSYG.StdConstruct.prototype.on,
	        /**
	         * Retrait d'écouteurs d'événements customisés
	         * @see JSYG.StdConstruct.prototype.on
	         * @returns {CtrlPoints}
	         */
	        off: JSYG.StdConstruct.prototype.off,
	        /**
	         * Déclenche un événement customisé
	         * @see JSYG.StdConstruct.prototype.trigger
	         */
	        trigger: JSYG.StdConstruct.prototype.trigger,
	
	        _remove: function _remove(i) {
	
	            if (!this.list[i]) return;
	
	            var elmts = ['pt1', 'path1', 'pt2', 'path2'],
	                that = this;
	
	            elmts.forEach(function (elmt) {
	                if (that.list[i][elmt]) new JSYG(that.list[i][elmt]).remove();
	            });
	
	            this.list.splice(i, 1);
	
	            return this;
	        },
	
	        /**
	         * Activation des contrôles
	         * @param opt optionnel, objet définissant les options
	         * @returns {CtrlPoints}
	         */
	        enable: function enable(opt) {
	
	            this.hide(true);
	
	            if (opt) this.set(opt);
	
	            var container = this.editor.box.container;
	
	            if (container && container.parentNode) this.show();
	
	            this.enabled = true;
	
	            return this;
	        },
	
	        /**
	         * Désactivation des contrôles
	         *  @returns {CtrlPoints}
	         */
	        disable: function disable() {
	
	            this.hide();
	            this.enabled = false;
	            return this;
	        },
	
	        /**
	         * Affichage des contrôles
	         * @param opt optionnel, objet définissant les options
	         * @returns {CtrlPoints}
	         */
	        show: function show(opt, _preventEvent) {
	
	            if (opt) this.set(opt);
	
	            var node = this.editor._target;
	
	            if (!node) return this.hide();
	
	            this.node = node;
	
	            var jNode = new JSYG(node);
	
	            if (!jNode.isSVG()) return this;
	
	            var svg = jNode.offsetParent('farthest'),
	                CTM = jNode.getMtx(svg),
	                tag = jNode.getTag(),
	                needReplace = JSYG.support.needReplaceSeg,
	                list = [],
	                N,
	                that = this,
	                start = function start(e) {
	                new JSYG(that.container).appendTo(that.editor.box.container);
	                that.editor.trigger('start', node, e);
	                that.trigger('start', node, e);
	            },
	                dragstart = function dragstart(e) {
	                that.editor.trigger('dragstart', node, e);
	                that.trigger('dragstart', node, e);
	            },
	                dragend = function dragend(e) {
	                that.editor.update();
	                that.editor.trigger('dragend', node, e);
	                that.editor.trigger('change', node, e);
	                that.trigger('dragend', node, e);
	            },
	                end = function end(e) {
	                that.editor.trigger('end', node, e);
	                that.trigger('end', node, e);
	            };
	
	            if (!this.container.parentNode) {
	                new JSYG(this.container).appendTo(this.editor.box.container).addClass(this.className);
	            }
	
	            if (tag === 'path') {
	
	                var jPath = new Path(node);
	
	                jPath.rel2abs();
	
	                list = jPath.getSegList();
	
	                list.forEach(function (seg, i) {
	
	                    if (!that.list[i]) {
	                        that.list[i] = {};
	                    }
	
	                    var pt1,
	                        pt2,
	                        jShape,
	                        path,
	                        drag,
	                        test1 = seg.x1 != null && seg.y1 != null,
	                        test2 = seg.x2 != null && seg.y2 != null;
	
	                    if (test1 || test2) {
	
	                        if (test1) {
	
	                            pt1 = new JSYG.Vect(seg.x1, seg.y1).mtx(CTM);
	                            pt2 = jPath.getCurPt(i).mtx(CTM);
	
	                            if (that.list[i].path1) path = new Path(that.list[i].path1);else {
	                                path = new Path();
	                                path.appendTo(that.container);
	                            }
	
	                            path.clear().moveTo(pt1.x, pt1.y).lineTo(pt2.x, pt2.y);
	
	                            that.list[i].path1 = path[0];
	
	                            drag = function drag(e) {
	
	                                var path1 = new Path(that.list[i].path1),
	                                    CTM = jPath.getMtx(svg),
	
	                                //oldX = seg.x1,
	                                //oldY = seg.y1,
	                                jShape = new JSYG(this),
	                                    center = jShape.getCenter(),
	                                    pt = new JSYG.Vect(center.x, center.y).mtx(jShape.getMtx(svg));
	
	                                path1.replaceSeg(0, 'M', pt.x, pt.y);
	                                pt = pt.mtx(CTM.inverse());
	
	                                seg.x1 = pt.x;
	                                seg.y1 = pt.y;
	
	                                if (i > 0 && that.linked) {
	
	                                    var prevSeg = list[i - 1];
	
	                                    if (prevSeg.x2 != null && prevSeg.y2 != null) {
	
	                                        //var angleTest1 = Math.atan2(oldY-prevSeg.y,oldX-prevSeg.x),
	                                        //angleTest2 = Math.atan2(oldY-prevSeg.y2,oldX-prevSeg.x2);
	
	                                        //if ( ((angleTest1%Math.PI)*180/Math.PI).toFixed(1) === ((angleTest2%Math.PI)*180/Math.PI).toFixed(1) )
	                                        //{
	                                        var angle = Math.atan2(seg.y1 - prevSeg.y, seg.x1 - prevSeg.x) + Math.PI,
	                                            path2 = new Path(that.list[i - 1].path2),
	                                            dist = Math.sqrt(Math.pow(prevSeg.x2 - prevSeg.x, 2) + Math.pow(prevSeg.y2 - prevSeg.y, 2));
	                                        prevSeg.x2 = prevSeg.x + dist * Math.cos(angle);
	                                        prevSeg.y2 = prevSeg.y + dist * Math.sin(angle);
	
	                                        pt = new JSYG.Vect(prevSeg.x2, prevSeg.y2).mtx(CTM);
	                                        new JSYG(that.list[i - 1].pt2).setCenter(pt.x, pt.y);
	                                        path2.replaceSeg(0, 'M', pt.x, pt.y);
	                                        //}
	                                    }
	                                }
	
	                                if (needReplace) jPath.replaceSeg(i, seg);
	
	                                that.editor.trigger('drag', node, e);
	                                that.trigger('drag', node, e);
	                            };
	
	                            if (that.list[i].pt1) {
	
	                                jShape = new JSYG(that.list[i].pt1);
	                                jShape.draggable('set', {
	                                    event: 'mousedown',
	                                    eventWhich: 1,
	                                    onstart: start,
	                                    ondragstart: dragstart,
	                                    ondrag: drag,
	                                    ondragend: dragend,
	                                    onend: end
	                                });
	                            } else {
	
	                                jShape = new JSYG('<' + that.shape + '>').appendTo(that.container);
	
	                                if (that.xlink) jShape.xlink = that.xlink;
	
	                                jShape.setDim({ x: 0, y: 0, width: that.width, height: that.height });
	
	                                jShape.draggable('set', {
	                                    event: 'mousedown',
	                                    eventWhich: 1,
	                                    onstart: start,
	                                    ondragstart: dragstart,
	                                    ondrag: drag,
	                                    ondragend: dragend,
	                                    onend: end
	                                });
	
	                                if (that.draggableOptions) jShape.draggable('set', that.draggableOptions);
	
	                                jShape.draggable('enable');
	
	                                that.list[i].pt1 = jShape[0];
	                            }
	
	                            jShape.setCenter(pt1.x, pt1.y);
	                        } else {
	                            if (that.list[i].pt1) {
	                                new JSYG(that.list[i].pt1).remove();that.list[i].pt1 = null;
	                            }
	                            if (that.list[i].path1) {
	                                new JSYG(that.list[i].path1).remove();that.list[i].path1 = null;
	                            }
	                        }
	
	                        if (test2) {
	
	                            pt1 = new JSYG.Vect(seg.x2, seg.y2).mtx(CTM);
	                            pt2 = new JSYG.Vect(seg.x, seg.y).mtx(CTM);
	
	                            if (that.list[i].path2) path = new Path(that.list[i].path2);else {
	                                path = new Path();
	                                path.appendTo(that.container);
	                            }
	
	                            path.clear().moveTo(pt1.x, pt1.y).lineTo(pt2.x, pt2.y);
	
	                            that.list[i].path2 = path[0];
	
	                            drag = function drag(e) {
	
	                                var path2 = new Path(that.list[i].path2),
	                                    CTM = jPath.getMtx(svg),
	                                    jShape = new JSYG(this),
	
	                                //oldX = seg.x2,
	                                //oldY = seg.y2,
	                                center = jShape.getCenter(),
	                                    pt = new JSYG.Vect(center.x, center.y).mtx(jShape.getMtx(svg));
	
	                                path2.replaceSeg(0, 'M', pt.x, pt.y);
	
	                                pt = pt.mtx(CTM.inverse());
	                                seg.x2 = pt.x;
	                                seg.y2 = pt.y;
	
	                                if (i + 1 < list.length && that.linked) {
	
	                                    var nextSeg = list[i + 1];
	
	                                    if (nextSeg.x1 != null && nextSeg.y1 != null) {
	
	                                        //var angleTest1 = Math.atan2(oldY-seg.y,oldX-seg.x),
	                                        //angleTest2 = Math.atan2(oldY-nextSeg.y1,oldX-nextSeg.x1);
	
	                                        //if ( ((angleTest1%Math.PI)*180/Math.PI).toFixed(1) === ((angleTest2%Math.PI)*180/Math.PI).toFixed(1) )
	                                        //{
	                                        var angle = Math.atan2(seg.y2 - seg.y, seg.x2 - seg.x) + Math.PI,
	                                            path1 = new Path(that.list[i + 1].path1),
	                                            dist = Math.sqrt(Math.pow(nextSeg.x1 - seg.x, 2) + Math.pow(nextSeg.y1 - seg.y, 2));
	                                        nextSeg.x1 = seg.x + dist * Math.cos(angle);
	                                        nextSeg.y1 = seg.y + dist * Math.sin(angle);
	
	                                        pt = new JSYG.Vect(nextSeg.x1, nextSeg.y1).mtx(CTM);
	                                        new JSYG(that.list[i + 1].pt1).setCenter(pt.x, pt.y);
	                                        path1.replaceSeg(0, 'M', pt.x, pt.y);
	                                        //}
	                                    }
	                                }
	
	                                if (needReplace) jPath.replaceSeg(i, seg);
	
	                                that.editor.trigger('drag', node, e);
	                                that.trigger('drag', node, e);
	                            };
	
	                            if (that.list[i].pt2) {
	                                jShape = new JSYG(that.list[i].pt2);
	                                jShape.draggable('set', {
	                                    event: 'mousedown',
	                                    eventWhich: 1,
	                                    onstart: start,
	                                    ondragstart: dragstart,
	                                    ondrag: drag,
	                                    ondragend: dragend,
	                                    onend: end
	                                });
	                            } else {
	
	                                jShape = new JSYG('<' + that.shape + '>').appendTo(that.container);
	                                if (that.xlink) {
	                                    jShape.xlink = that.xlink;
	                                }
	                                jShape.setDim({ x: 0, y: 0, width: that.width, height: that.height });
	
	                                jShape.draggable('set', {
	                                    event: 'mousedown',
	                                    eventWhich: 1,
	                                    onstart: start,
	                                    ondragstart: dragstart,
	                                    ondrag: drag,
	                                    ondragend: dragend,
	                                    onend: end
	                                });
	                                if (that.draggableOptions) {
	                                    jShape.draggable('set', that.draggableOptions);
	                                }
	                                jShape.draggable('enable');
	                                that.list[i].pt2 = jShape[0];
	                            }
	
	                            jShape.setCenter(pt1.x, pt1.y);
	                        } else {
	                            if (that.list[i].pt2) {
	                                new JSYG(that.list[i].pt2).remove();that.list[i].pt2 = null;
	                            }
	                            if (that.list[i].path2) {
	                                new JSYG(that.list[i].path2).remove();that.list[i].path2 = null;
	                            }
	                        }
	                    } else {
	                        that._remove(i);
	                        that.list.splice(i, 0, null);
	                    }
	                });
	            }
	            /*else if (tag === 'rect') {
	            var drag,
	            pt,pt1,pt2,
	            l = jNode.getDim();
	            l.rx = parseFloat(jNode.attr('rx') || 0);
	            l.ry = parseFloat(jNode.attr('ry') || 0);
	            list = [0,1,2,3];
	            list.forEach(function(i) {
	            if (!that.list[i]) { that.list[i] = {}; };
	            if (!that.list[i].path) {
	            var path = new Path();
	                                                path.appendTo(that.container);
	            path.addClass(that.className);
	            that.list[i].path = path[0];
	            }
	            if (!that.list[i].pt) {
	            var point = new JSYG('<'+that.shape+'>').appendTo(that.container);
	            point.addClass(that.className);
	            that.list[i].pt = point[0];
	            drag = function(e) {
	            var center = point.getCenter().mtx(point.getMtx()),
	            pt1 = new JSYG.Vect(center.x,center.y).mtx(jNode.getMtx('ctm').inverse()),
	            rx, ry,
	            path = new Path(that.list[i].path),
	            l = jNode.getDim();
	            path.clear();
	            switch(i) {
	            case 0 :
	            rx = Math.max(0,pt1.x - l.x);
	            ry = Math.max(0,pt1.y - l.y);
	            path.moveTo(l.x,l.y+ry).lineTo(pt1.x,pt1.y).lineTo(l.x+rx,l.y);
	            break;
	            case 1 :
	            rx = Math.max(0,l.x+l.width-pt1.x);
	            ry = Math.max(0,pt1.y - l.y);
	            path.moveTo(l.x+l.width-rx,l.y).lineTo(pt1.x,pt1.y).lineTo(l.x+l.width,l.y+ry);
	            break;
	            case 2 :
	            rx = Math.max(0,l.x+l.width - pt1.x);
	            ry = Math.max(0,l.y+l.height - pt1.y);
	            path.moveTo(l.x+l.width,l.y+l.height-ry).lineTo(pt1.x,pt1.y).lineTo(l.x+l.width-rx,l.y+l.height);
	            break;
	            case 3 :
	            rx = Math.max(0,pt1.x - l.x);
	            ry = Math.max(0,l.y+l.height - pt1.y);
	            path.moveTo(l.x+rx,l.y+l.height).lineTo(pt1.x,pt1.y).lineTo(l.x,l.y+l.height-ry);
	            break;
	            }
	            jNode.attr({'rx':rx,'ry':ry});
	            that.editor.trigger('drag',node,e);
	            that.trigger('drag',node,e);
	            };
	            point.draggable({
	            type:'attributes',
	            ondrag:drag,
	            onend:end
	            });
	            }
	            });
	            pt = new JSYG.Vect(l.x+l.rx,l.y+l.ry).mtx(CTM);
	            pt1 = new JSYG.Vect(l.x,l.y+l.ry).mtx(CTM);
	            pt2 = new JSYG.Vect(l.x+l.rx,l.y).mtx(CTM);
	            new JSYG(this.list[0].pt).setDim({x:0,y:0,width:this.width,height:this.height}).setCenter(pt.x,pt.y);
	            new Path(this.list[0].path).clear().moveTo(pt1.x,pt1.y).lineTo(pt.x,pt.y).lineTo(pt2.x,pt2.y);
	            pt = new JSYG.Vect(l.x+l.width-l.rx,l.y+l.ry).mtx(CTM);
	            pt1 = new JSYG.Vect(l.x+l.width-l.rx,l.y).mtx(CTM);
	            pt2 = new JSYG.Vect(l.x+l.width,l.y+l.ry).mtx(CTM);
	            new JSYG(this.list[1].pt).setDim({x:0,y:0,width:this.width,height:this.height}).setCenter(pt.x,pt.y);
	            new Path(this.list[1].path).clear().moveTo(pt1.x,pt1.y).lineTo(pt.x,pt.y).lineTo(pt2.x,pt2.y);
	            pt = new JSYG.Vect(l.x+l.width-l.rx,l.y+l.height-l.ry).mtx(CTM);
	            pt1 = new JSYG.Vect(l.x+l.width-l.rx,l.y+l.height).mtx(CTM);
	            pt2 = new JSYG.Vect(l.x+l.width,l.y+l.height-l.ry).mtx(CTM);
	            new JSYG(this.list[2].pt).setDim({x:0,y:0,width:this.width,height:this.height}).setCenter(pt.x,pt.y);
	            new Path(this.list[2].path).clear().moveTo(pt1.x,pt1.y).lineTo(pt.x,pt.y).lineTo(pt2.x,pt2.y);
	            pt = new JSYG.Vect(l.x+l.rx,l.y+l.height-l.ry).mtx(CTM);
	            pt1 = new JSYG.Vect(l.x,l.y+l.height-l.ry).mtx(CTM);
	            pt2 = new JSYG.Vect(l.x+l.rx,l.y+l.height).mtx(CTM);
	            new JSYG(this.list[3].pt).setDim({x:0,y:0,width:this.width,height:this.height}).setCenter(pt.x,pt.y);
	            new Path(this.list[3].path).clear().moveTo(pt1.x,pt1.y).lineTo(pt.x,pt.y).lineTo(pt2.x,pt2.y);
	            }*/
	
	            N = list.length;
	            while (this.list.length > N) {
	                this._remove(this.list.length - 1);
	            }this.display = true;
	
	            if (!_preventEvent) this.trigger('show', node);
	
	            return this;
	        },
	
	        /**
	         * Masque les contrôles
	         * @returns {CtrlPoints}
	         */
	        hide: function hide(_preventEvent) {
	
	            new JSYG(this.container).empty().remove();
	            this.list.splice(0, this.list.length);
	            this.display = false;
	            if (!_preventEvent) this.trigger('hide', this.node);
	            return this;
	        },
	        /**
	         * Met à jour les contrôles
	         * @returns {CtrlPoints}
	         */
	        update: function update() {
	            return this.display ? this.show() : this;
	        }
	    };
	
	    /**
	     * Edition des points principaux des chemins SVG
	     */
	    function MainPoints(editorObject) {
	        /**
	         * référence vers l'objet Editor parent
	         */
	        this.editor = editorObject;
	        /**
	         * liste des contrôles
	         */
	        this.list = [];
	        /**
	         * Conteneur des contrôles
	         */
	        this.container = new JSYG('<g>')[0];
	    }
	
	    MainPoints.prototype = {
	
	        constructor: MainPoints,
	        /**
	         * Classe appliquée au conteneur des contrôles
	         */
	        className: 'mainPoints',
	        /**
	         * Forme utilisée pour les contrôles
	         */
	        shape: 'circle',
	        /**
	         * largeur des contrôles
	         */
	        width: 10,
	        /**
	         * hauteur des contrôles
	         */
	        height: 10,
	        /**
	         * classe appliquée au dernier point d'un chemin si le chemin est fermé
	         */
	        classNameClosing: 'closingPoint',
	        /**
	         * Force de la magnétisation entre les points extremes pour fermer le chemin
	         */
	        strengthClosingMagnet: 10,
	        /**
	         * Lisse automatiquement les chemins
	         */
	        autoSmooth: false,
	        /**
	         * Fonction(s) à exécuter à l'affichage des contrôles
	         */
	        onshow: null,
	        /**
	         * Fonction(s) à exécuter à la suppression des contrôles
	         */
	        onhide: null,
	        /**
	         * Fonction(s) à exécuter quand on prepare un déplacement (mousedown sur le contrôle)
	         */
	        onstart: null,
	        /**
	         * Fonction(s) à exécuter quand on commence un déplacement
	         */
	        ondragstart: null,
	        /**
	         * Fonction(s) à exécuter pendant le déplacement
	         */
	        ondrag: null,
	        /**
	         * Fonction(s) à exécuter en fin de déplacement
	         */
	        ondragend: null,
	        /**
	         * Fonction(s) à exécuter au relachement de la souris, qu'il y ait eu modification ou non
	         */
	        onend: null,
	
	        /**
	         * Options supplémentaires pour le drag&drop
	         * @see {Draggable}
	         */
	        draggableOptions: null,
	
	        set: JSYG.StdConstruct.prototype.set,
	        /**
	         * Ajout d'écouteurs d'événements customisés
	         * @see JSYG.StdConstruct.prototype.on
	         * @returns {MainPoints}
	         */
	        on: JSYG.StdConstruct.prototype.on,
	        /**
	         * Retrait d'écouteurs d'événements customisés
	         * @see JSYG.StdConstruct.prototype.on
	         * @returns {MainPoints}
	         */
	        off: JSYG.StdConstruct.prototype.off,
	        /**
	         * Déclenche un événement customisé
	         * @see JSYG.StdConstruct.prototype.trigger
	         */
	        trigger: JSYG.StdConstruct.prototype.trigger,
	
	        /**
	         * Indique si les contrôles sont activés ou non
	         */
	        enabled: false,
	        /**
	         * Indique si les contrôles sont affichés ou non
	         */
	        display: false,
	
	        _remove: function _remove(i) {
	
	            if (!this.list[i]) return;
	            new JSYG(this.list[i]).remove();
	            this.list.splice(i, 1);
	            return this;
	        },
	
	        /**
	         * Activation des contrôles
	         * @param opt optionnel, objet définissant les options
	         * @returns {MainPoints}
	         */
	        enable: function enable(opt) {
	
	            this.hide(true);
	
	            if (opt) this.set(opt);
	
	            var container = this.editor.box.container;
	
	            if (container && container.parentNode) this.show();
	
	            this.enabled = true;
	
	            return this;
	        },
	
	        /**
	         * Désactivation des contrôles
	         *  @returns {MainPoints}
	         */
	        disable: function disable() {
	
	            this.hide();
	
	            this.enabled = false;
	
	            return this;
	        },
	
	        /**
	         * Affichage des contrôles
	         * @param opt optionnel, objet définissant les options
	         * @returns {MainPoints}
	         */
	        show: function show(opt, _preventEvent) {
	
	            if (opt) this.set(opt);
	
	            var node = this.editor._target;
	
	            if (!node || this.editor.isMultiSelection() && !this.multiple) return this.hide();
	
	            this.node = node;
	
	            var jNode = new JSYG(node);
	
	            if (!jNode.isSVG()) return;
	
	            var svg = jNode.offsetParent('farthest'),
	                CTM = jNode.getMtx(svg),
	                tag = jNode.getTag(),
	                list = [],
	                N,
	                that = this,
	                needReplace = JSYG.support.needReplaceSeg,
	                start = function start(e) {
	                new JSYG(that.container).appendTo(that.editor.box.container);
	                that.editor.trigger('start', node, e);
	                that.trigger('start', node, e);
	            },
	                dragstart = function dragstart(e) {
	                that.editor.trigger('dragstart', node, e);
	                that.trigger('dragstart', node, e);
	            },
	                dragend = function dragend(e) {
	                that.editor.update();
	                that.editor.trigger('dragend', node, e);
	                that.editor.trigger('change', node, e);
	                that.trigger('dragend', node, e);
	            },
	                end = function end(e) {
	                that.editor.trigger('end', node, e);
	                that.trigger('end', node, e);
	            };
	
	            if (!this.container.parentNode) {
	                new JSYG(this.container).appendTo(this.editor.box.container).addClass(this.className);
	            }
	
	            if (tag === 'path') {
	
	                jNode = new Path(node);
	
	                jNode.rel2abs();
	
	                list = jNode.getSegList();
	
	                var isClosed = jNode.isClosed(),
	                    mtxScreen,
	                    ctrlPoints = this.editor.ctrlsCtrlPoints.list;
	
	                //on écrase la fonction start
	                start = function start(e) {
	                    new JSYG(that.container).appendTo(that.editor.box.container);
	                    isClosed = jNode.isClosed();
	                    mtxScreen = jNode.getMtx('screen');
	                    that.editor.trigger('start', node, e);
	                    that.trigger('start', node, e);
	                };
	
	                jNode.rel2abs();
	
	                list.forEach(function (seg, i) {
	
	                    if (seg.x != null && seg.y != null) {
	
	                        var pt = new JSYG.Vect(seg.x, seg.y).mtx(CTM),
	                            shape,
	                            drag;
	
	                        if (that.list[i]) shape = new JSYG(that.list[i]);else {
	
	                            drag = function drag(e) {
	
	                                var seg = jNode.getSeg(i),
	                                    //we must redefine seg if pathSegList has been modified
	                                jPoint = new JSYG(this),
	                                    selfCTM = jNode.getMtx(svg),
	                                    center = jPoint.getCenter(),
	                                    posPt = new JSYG.Vect(center.x, center.y).mtx(jPoint.getMtx()),
	                                    //position dans le repère d'édition
	                                pt = posPt.mtx(selfCTM.inverse()),
	                                    //position dans le repère de l'élément édité
	                                decX = pt.x - seg.x,
	                                    decY = pt.y - seg.y,
	                                    item,
	                                    pt1,
	                                    pt2,
	                                    firstSeg = jNode.getSeg(0),
	                                    lastSeg = jNode.getLastSeg();
	
	                                if (seg === lastSeg && isClosed) {
	                                    firstSeg.x = pt.x;
	                                    firstSeg.y = pt.y;
	                                    new JSYG(that.list[0]).setCenter(posPt.x, posPt.y);
	                                    if (needReplace) jNode.replaceSeg(0, jNode.getSeg(firstSeg));
	                                }
	
	                                if (that.strengthClosingMagnet != null && (seg === lastSeg || seg === firstSeg)) {
	
	                                    var segRef = seg === lastSeg ? firstSeg : lastSeg;
	                                    var ref = new JSYG.Vect(segRef.x, segRef.y).mtx(mtxScreen);
	
	                                    if (Math.sqrt(Math.pow(ref.x - e.clientX, 2) + Math.pow(ref.y - e.clientY, 2)) < that.strengthClosingMagnet) {
	                                        pt.x = segRef.x;
	                                        pt.y = segRef.y;
	                                        var mtx = jNode.getMtx(jPoint);
	                                        jPoint.setCenter(new JSYG.Vect(pt.x, pt.y).mtx(mtx));
	                                    }
	                                }
	
	                                seg.x = pt.x;
	                                seg.y = pt.y;
	
	                                if (that.autoSmooth && !that.editor.ctrlsCtrlPoints.enabled) jNode.autoSmooth(i);else {
	
	                                    if (seg.x2 != null && seg.y2 != null) {
	
	                                        seg.x2 += decX;
	                                        seg.y2 += decY;
	                                        pt1 = new JSYG.Vect(seg.x2, seg.y2).mtx(selfCTM);
	                                        pt2 = new JSYG.Vect(seg.x, seg.y).mtx(selfCTM);
	
	                                        if (that.editor.ctrlsCtrlPoints.enabled && (item = ctrlPoints[i])) {
	
	                                            new Path(item.path2).replaceSeg(0, 'M', pt1.x, pt1.y).replaceSeg(1, 'L', pt2.x, pt2.y);
	
	                                            new JSYG(item.pt2).setCenter(pt1.x, pt1.y);
	                                        }
	                                    }
	
	                                    if (i < jNode.nbSegs() - 1) {
	
	                                        var next = jNode.getSeg(i + 1);
	
	                                        if (next.x1 != null && next.y1 != null) {
	
	                                            next.x1 += decX;
	                                            next.y1 += decY;
	                                            pt1 = new JSYG.Vect(next.x1, next.y1).mtx(selfCTM);
	                                            pt2 = new JSYG.Vect(seg.x, seg.y).mtx(selfCTM);
	
	                                            if (that.editor.ctrlsCtrlPoints.enabled && (item = ctrlPoints[i + 1])) {
	
	                                                new Path(item.path1).replaceSeg(0, 'M', pt1.x, pt1.y).replaceSeg(1, 'L', pt2.x, pt2.y);
	
	                                                new JSYG(item.pt1).setCenter(pt1.x, pt1.y);
	                                            }
	                                        }
	                                    }
	
	                                    if (needReplace) jNode.replaceSeg(i, seg);
	                                }
	
	                                that.editor.trigger('drag', node, e);
	                                that.trigger('drag', node, e);
	                            };
	
	                            shape = new JSYG('<' + that.shape + '>').appendTo(that.container);
	
	                            if (that.xlink) shape.xlink = that.xlink;
	
	                            shape.setDim({ x: 0, y: 0, width: that.width, height: that.height });
	
	                            shape.draggable('set', {
	                                event: 'mousedown',
	                                eventWhich: 1,
	                                onstart: start,
	                                ondragstart: dragstart,
	                                ondrag: drag,
	                                ondragend: dragend,
	                                onend: end
	                            });
	
	                            if (that.draggableOptions) shape.draggable('set', that.draggableOptions);
	
	                            shape.draggable('enable');
	
	                            that.list[i] = shape[0];
	                        }
	
	                        shape.setCenter(pt.x, pt.y);
	                    } else if (that.list[i]) that._remove(i);
	                });
	
	                //adaptation des points extremes pour courbes fermées/ouvertes
	                var first = new JSYG(that.list[0]),
	                    last = new JSYG(that.list[that.list.length - 1]),
	                    center = first.getCenter();
	
	                first.setDim({
	                    width: that.width * (isClosed ? 1.2 : 1),
	                    height: that.height * (isClosed ? 1.2 : 1)
	                });
	
	                first.setCenter(center.x, center.y);
	
	                center = last.getCenter();
	
	                last.setDim({
	                    width: that.width * (isClosed ? 0.6 : 1),
	                    height: that.height * (isClosed ? 0.6 : 1)
	                });
	
	                last.setCenter(center.x, center.y);
	
	                last[(isClosed ? 'add' : 'remove') + "Class"](this.classNameClosing);
	            } else if (tag === 'polyline' || tag === 'polygon') {
	
	                list = JSYG.makeArray(node.points);
	
	                list.forEach(function (point, i) {
	
	                    point = new JSYG.Vect(point).mtx(CTM);
	                    var shape, drag;
	
	                    if (that.list[i]) shape = new JSYG(that.list[i]);else {
	
	                        drag = function drag(e) {
	
	                            var point = node.points.getItem(i),
	                                //we must redefine point if points has been modified
	                            jPoint = new JSYG(this),
	                                selfCTM = jNode.getMtx(svg),
	                                center = jPoint.getCenter(),
	                                pt = new JSYG.Vect(center.x, center.y).mtx(jPoint.getMtx());
	                            pt = pt.mtx(selfCTM.inverse());
	
	                            point.x = pt.x;
	                            point.y = pt.y;
	
	                            that.editor.trigger('drag', node, e);
	                            that.trigger('drag', node, e);
	                        };
	
	                        shape = new JSYG('<' + that.shape + '>').appendTo(that.container);
	                        shape.setDim({ x: 0, y: 0, width: that.width, height: that.height });
	                        shape.draggable('set', {
	                            event: 'mousedown',
	                            eventWhich: 1,
	                            onstart: start,
	                            ondragstart: dragstart,
	                            ondrag: drag,
	                            ondragend: dragend,
	                            onend: end
	                        });
	
	                        if (that.draggableOptions) shape.draggable('set', that.draggableOptions);
	
	                        shape.draggable('enable');
	                        that.list[i] = shape[0];
	                    }
	
	                    shape.setCenter(point.x, point.y);
	                });
	            } else if (tag === 'line') {
	
	                list = [1, 2];
	
	                list.forEach(function (attr, i) {
	
	                    var point = new JSYG.Vect(jNode.attr('x' + attr), jNode.attr('y' + attr)).mtx(CTM),
	                        shape,
	                        drag;
	
	                    if (that.list[i]) shape = new JSYG(that.list[i]);else {
	
	                        drag = function drag(e) {
	
	                            var jPoint = new JSYG(this),
	                                selfCTM = jNode.getMtx(svg),
	                                center = jPoint.getCenter(),
	                                pt = new JSYG.Vect(center.x, center.y).mtx(jPoint.getMtx());
	                            pt = pt.mtx(selfCTM.inverse());
	
	                            jNode.attr("x" + attr, pt.x).attr("y" + attr, pt.y);
	
	                            that.editor.trigger('drag', node, e);
	                            that.trigger('drag', node, e);
	                        };
	
	                        shape = new JSYG('<' + that.shape + '>').appendTo(that.container);
	                        shape.setDim({ x: 0, y: 0, width: that.width, height: that.height });
	
	                        shape.draggable('set', {
	                            event: 'mousedown',
	                            eventWhich: 1,
	                            onstart: start,
	                            ondragstart: dragstart,
	                            ondrag: drag,
	                            ondragend: dragend,
	                            onend: end
	                        });
	
	                        if (that.draggableOptions) shape.draggable('set', that.draggableOptions);
	
	                        shape.draggable('enable');
	                        that.list[i] = shape[0];
	                    }
	
	                    shape.setCenter(point.x, point.y);
	                });
	            }
	
	            N = list.length;
	            while (this.list.length > N) {
	                this._remove(this.list.length - 1);
	            }this.display = true;
	
	            if (_preventEvent) this.trigger('show', node);
	
	            return this;
	        },
	
	        /**
	         * Masque les contrôles
	         * @returns {MainPoints}
	         */
	        hide: function hide(_preventEvent) {
	
	            if (this.container) new JSYG(this.container).empty().remove();
	            this.list.splice(0, this.list.length);
	            this.display = false;
	            if (!_preventEvent) this.trigger('hide', this.node);
	            return this;
	        },
	
	        /**
	         * Met à jour les contrôles
	         * @returns {MainPoints}
	         */
	        update: function update() {
	            return this.display ? this.show() : this;
	        }
	    };
	
	    /**
	     * déplacement de l'élément
	     */
	    var Drag = function Drag(editorObject) {
	        /**
	         * référence vers l'objet Editor parent
	         */
	        this.editor = editorObject;
	    };
	
	    Drag.prototype = {
	
	        constructor: Drag,
	        /**
	         * Type de déplacement ("attributes" ou "transform" pour agir sur les attributs de mise en page ou sur la matrice de transformation)
	         */
	        type: 'attributes',
	        /**
	         * Permet de limiter le déplacement à l'intérieur de l'offsetParent (null pour annuler, valeur numérique négative pour aller au delà de l'offsetParent)
	         */
	        bounds: null,
	        /**
	         * Options supplémentaires pour le drag&drop
	         * @see {Draggable}
	         */
	        options: null,
	        /**
	         * Indique si ce contrôle est actif dans le cas d'une sélection multiple
	         */
	        multiple: true,
	        /**
	         * Fonction(s) à exécuter quand on prépare un déplacement (mousedown sur le contrôle)
	         */
	        onstart: null,
	        /**
	         * Fonction(s) à exécuter quand on commence un déplacement
	         */
	        ondragstart: null,
	        /**
	         * Fonction(s) à exécuter pendant le déplacement
	         */
	        ondrag: null,
	        /**
	         * Fonction(s) à exécuter en fin de déplacement
	         */
	        ondragend: null,
	        /**
	         * Fonction(s) à exécuter au relachement de la souris, qu'il y ait eu déplacement ou non
	         */
	        onend: null,
	
	        set: JSYG.StdConstruct.prototype.set, //function(opt) { return JSYG.StdConstruct.prototype.set.apply(this,arguments); },
	        /**
	         * Ajout d'écouteurs d'événements customisés
	         * @see JSYG.StdConstruct.prototype.on
	         * @returns {Drag}
	         */
	        on: JSYG.StdConstruct.prototype.on,
	        /**
	         * Retrait d'écouteurs d'événements customisés
	         * @see JSYG.StdConstruct.prototype.on
	         * @returns {Drag}
	         */
	        off: JSYG.StdConstruct.prototype.off,
	        /**
	         * Déclenche un événement customisé
	         * @see JSYG.StdConstruct.prototype.trigger
	         */
	        trigger: JSYG.StdConstruct.prototype.trigger,
	
	        /**
	         * Indique si le controle est activé ou non
	         */
	        enabled: false,
	        /**
	         * Indique si le contrôle est affiché ou non
	         */
	        display: false,
	
	        /**
	         * Activation du contrôle
	         * @param opt optionnel, objet définissant les options
	         */
	        enable: function enable(opt) {
	
	            this.hide();
	
	            if (opt) this.set(opt);
	
	            var container = this.editor.box.container;
	
	            if (container && container.parentNode) this.show();
	
	            this.enabled = true;
	
	            return this;
	        },
	        /**
	         * Désactivation du contrôle
	         * @returns {Drag}
	         */
	        disable: function disable() {
	            this.hide();
	            this.enabled = false;
	            return this;
	        },
	        /**
	         * commence le drag&drop
	         * @param e objet Event
	         * @returns {Drag}
	         */
	        start: function start(e) {
	            if (!this.display) return this;
	            new JSYG(this.node).draggable('start', e);
	            return this;
	        },
	        /**
	         * Affiche le contrôle
	         * @param opt optionnel, objet définissant les options
	         * @returns
	         */
	        show: function show(opt) {
	
	            this.hide();
	
	            if (opt) this.set(opt);
	
	            var node = this.editor._target;
	            if (!node || this.editor.isMultiSelection() && !this.multiple) return;
	
	            this.node = node;
	
	            var jNode = new JSYG(node),
	                field = new JSYG(jNode.isSVG() ? this.editor.box.pathBox : this.editor.box.container),
	                backup,
	                displayShadow = this.editor.box.displayShadow,
	                that = this;
	
	            jNode.draggable('set', {
	                event: 'mousedown',
	                eventWhich: 1,
	                onstart: function onstart(e) {
	                    backup = {
	                        ctrlsMainPoints: that.editor.ctrlsMainPoints.enabled,
	                        ctrlsCtrlPoints: that.editor.ctrlsCtrlPoints.enabled
	                    };
	                    that.editor.trigger('start', node, e);
	                    that.trigger('start', node, e);
	                },
	                ondragstart: function ondragstart(e) {
	                    for (var n in backup) {
	                        if (!backup[n]) continue;
	                        new JSYG(that.editor[n].container).hide();
	                        that.editor[n].display = false;
	                    }
	                    that.editor.box.displayShadow = false;
	                    that.editor.trigger('dragstart', node, e);
	                    that.trigger('dragstart', node, e);
	                },
	                ondrag: function ondrag(e) {
	                    that.editor.update();
	                    that.editor.trigger('drag', node, e);
	                    that.trigger('drag', node, e);
	                },
	                ondragend: function ondragend(e) {
	                    if (that.editor.isMultiSelection()) new Container(that.editor._target).applyTransform();
	                    that.editor.displayShadow = displayShadow;
	                    for (var n in backup) {
	                        if (!backup[n]) continue;
	                        new JSYG(that.editor[n].container).show();
	                        that.editor[n].display = true;
	                    }
	                    that.editor.update();
	                    that.editor.trigger('dragend', node, e);
	                    that.editor.trigger('change', node, e);
	                    that.trigger('dragend', node, e);
	                },
	                onend: function onend(e) {
	                    that.editor.trigger('end', node, e);
	                    that.trigger('end', node, e);
	                },
	                type: this.type,
	                bounds: this.bounds,
	                field: field,
	                click: 'left',
	                keepRotation: true,
	                key: false
	            });
	
	            if (this.options) jNode.draggable('set', this.options);
	
	            jNode.draggable('enable');
	
	            field.css('cursor', 'move');
	
	            this.display = true;
	
	            return this;
	        },
	        /**
	         * Masque le contrôle
	         * @returns {Drag}
	         */
	        hide: function hide() {
	
	            if (this.node) new JSYG(this.node).draggable('disable');
	            this.display = false;
	            return this;
	        },
	        /**
	         * Met à jour le contrôle
	         * @returns {Drag}
	         */
	        update: function update() {
	
	            if (!this.display) return this;
	
	            var node = this.editor._target;
	            if (!node) return this.hide();
	
	            this.node = node;
	
	            return this;
	        }
	    };
	
	    /**
	     * Edition des dimensions
	     */
	    function Resize(editorObject) {
	        /**
	         * référence vers l'objet Editor parent
	         */
	        this.editor = editorObject;
	        /**
	         * liste des contrôles
	         */
	        this.list = [];
	        /**
	         * liste des paliers horizontaux (largeurs en px)
	         */
	        this.stepsX = [];
	        /**
	         * liste des paliers verticaux (hauteurs en px)
	         */
	        this.stepsY = [];
	        /**
	         * Conteneur des contrôles
	         */
	        this.container = new JSYG('<g>')[0];
	    }
	
	    /**
	     * Pour les lignes simples, les poignées de controle masquent les extrémités à déplacer
	     * @param {type} node
	     * @returns {Boolean}
	     */
	    function canHideMainPoints(node) {
	
	        var tag = new JSYG(node).getTag();
	
	        if (tag == "line") return false;else if ((tag == "polyline" || tag == "polygon") && node.points.length < 3) return false;else if (tag == "path" && node.pathSegList.numberOfItems < 3) return false;
	
	        return true;
	    }
	
	    Resize.prototype = {
	
	        constructor: Resize,
	
	        container: null,
	
	        /**
	         * Classe appliquée au conteneur des contrôles
	         */
	        className: 'resize',
	        /**
	         * Forme utilisée pour les contrôles
	         */
	        shape: 'circle',
	        /**
	         * lien utilisé si shape est défini à "use"
	         */
	        xlink: null,
	        /**
	         * largeur des contrôles
	         */
	        width: 10,
	        /**
	         * hauteur des contrôles
	         */
	        height: 10,
	        /**
	         * Type de déplacement ("attributes" ou "transform" pour agir sur les attributs de mise en page ou sur la matrice de transformation)
	         */
	        type: 'attributes',
	        /**
	         * Indique si ce contrôle est actif dans le cas d'une sélection multiple
	         */
	        multiple: false,
	        /**
	         * Fonction(s) à exécuter à l'affichage des contrôles
	         */
	        onshow: null,
	        /**
	         * Fonction(s) à exécuter à la suppression des contrôles
	         */
	        onhide: null,
	        /**
	         * Fonction(s) à exécuter quand on prépare un déplacement (mousedown sur le contrôle)
	         */
	        onstart: null,
	        /**
	         * Fonction(s) à exécuter quand on commence un déplacement
	         */
	        ondragstart: null,
	        /**
	         * Fonction(s) à exécuter pendant le déplacement
	         */
	        ondrag: null,
	        /**
	         * Fonction(s) à exécuter en fin de déplacement
	         */
	        ondragend: null,
	        /**
	         * Fonction(s) à exécuter au relaéchement de la souris, qu'il y ait eu modification ou non
	         */
	        onend: null,
	        /**
	         * définit si l'élément est redimensionnable horizontalement
	         */
	        horizontal: true,
	        /**
	         * définit si l'élément est redimensionnable verticalement
	         */
	        vertical: true,
	        /**
	         * définit si le ratio doit etre conservé
	         */
	        keepRatio: false,
	        /**
	         * Permet de limiter le redimensionnement à l'intérieur de l'offsetParent (null pour annuler, valeur numérique négative pour aller au delà de l'offsetParent)
	         */
	        bounds: null,
	        /**
	         * Options supplémentaires pour le redimensionnement
	         * @see {Resizable}
	         */
	        options: null,
	
	        set: JSYG.StdConstruct.prototype.set,
	        /**
	         * Ajout d'écouteurs d'événements customisés
	         * @see JSYG.StdConstruct.prototype.on
	         * @returns {Resize}
	         */
	        on: JSYG.StdConstruct.prototype.on,
	        /**
	         * Retrait d'écouteurs d'événements customisés
	         * @see JSYG.StdConstruct.prototype.on
	         * @returns {Resize}
	         */
	        off: JSYG.StdConstruct.prototype.off,
	        /**
	         * Déclenche un événement customisé
	         * @see JSYG.StdConstruct.prototype.trigger
	         */
	        trigger: JSYG.StdConstruct.prototype.trigger,
	        /**
	         * Indique si les contrôles sont activés ou non
	         */
	        enabled: false,
	        /**
	         * Indique si les contrôles sont affichés ou non
	         */
	        display: false,
	        /**
	         * Activation des contrôles
	         * @param opt optionnel, objet définissant les options
	         * @returns {Resize}
	         */
	        enable: function enable(opt) {
	            this.hide(true);
	            if (opt) this.set(opt);
	            var container = this.editor.box.container;
	            if (container && container.parentNode) this.show();
	            this.enabled = true;
	            return this;
	        },
	        /**
	         * Désactivation des contrôles
	         *  @returns {Resize}
	         */
	        disable: function disable() {
	            this.hide();
	            this.enabled = false;
	            return this;
	        },
	        /**
	         * Affichage des contrôles
	         * @param opt optionnel, objet définissant les options
	         * @returns {Resize}
	         */
	        show: function show(opt, _preventEvent) {
	
	            this.hide(true);
	
	            if (opt) this.set(opt);
	
	            var node = this.editor._target;
	            if (!node || this.editor.isMultiSelection() && !this.multiple) return this.hide();
	            this.node = node;
	
	            var jNode = new JSYG(node),
	                isSVG = jNode.isSVG(),
	                tag = jNode.getTag(),
	                parent = isSVG ? this.editor.box.container : document.body;
	
	            if (isSVG && this.container.tagName == 'DIV') {
	                this.container = new JSYG('<g>')[0];
	                this.shape = 'circle';
	            } else if (!isSVG && this.container.tagName == 'g') {
	                this.container = new JSYG('<div>')[0];
	                this.shape = 'div';
	            }
	
	            new JSYG(this.container).appendTo(parent).addClass(this.className);
	
	            var list = [],
	                that = this,
	                displayShadow = this.editor.box.displayShadow,
	                backup,
	                createShape = function createShape() {
	                var shape = new JSYG('<' + that.shape + '>').appendTo(that.container);
	                if (that.xlink) shape.href(that.xlink);
	                shape.setDim({ x: 0, y: 0, width: that.width, height: that.height });
	                return shape;
	            },
	                start = function start(e) {
	
	                new JSYG(that.container).appendTo(isSVG ? that.editor.box.container : document.body);
	                backup = {
	                    ctrlsMainPoints: that.editor.ctrlsMainPoints.enabled,
	                    ctrlsCtrlPoints: that.editor.ctrlsCtrlPoints.enabled
	                };
	                that.editor.trigger('start', node, e);
	                that.trigger('start', node, e);
	            },
	                dragstart = function dragstart(e) {
	                for (var n in backup) {
	                    if (!backup[n]) continue;
	                    new JSYG(that.editor[n].container).hide();
	                    that.editor[n].display = false;
	                }
	                that.editor.box.displayShadow = false;
	                that.editor.trigger('dragstart', node, e);
	                that.trigger('dragstart', node, e);
	            },
	                drag = function drag(e) {
	                that.editor.update();
	                that.editor.trigger('drag', node, e);
	                that.trigger('drag', node, e);
	            },
	                dragend = function dragend(e) {
	                if (that.editor.isMultiSelection()) new Container(that.editor._target).applyTransform();
	                that.editor.box.displayShadow = displayShadow;
	                for (var n in backup) {
	                    if (!backup[n]) continue;
	                    new JSYG(that.editor[n].container).show();
	                    that.editor[n].display = true;
	                }
	                if (canHideMainPoints(node)) new JSYG(that.container).appendTo(parent);else new JSYG(that.container).insertAfter(parent.querySelector("path"));
	
	                that.editor.update();
	                that.editor.trigger('dragend', node, e);
	                that.editor.trigger('change', node, e);
	                that.trigger('dragend', node, e);
	            },
	                end = function end(e) {
	                that.editor.trigger('end', node, e);
	                that.trigger('end', node, e);
	            };
	
	            jNode.resizable('set', { //default options
	                event: 'mousedown',
	                eventWhich: 1,
	                onstart: start,
	                ondragstart: dragstart,
	                ondrag: drag,
	                ondragend: dragend,
	                onend: end,
	                keepRatio: this.keepRatio || false,
	                keepRotation: true,
	                type: this.type,
	                bounds: this.bounds,
	                inverse: false,
	                method: isSVG ? 'fixedPoint' : 'normal',
	                originX: 'auto',
	                originY: 'auto'
	            });
	
	            if (this.stepsX) jNode.resizable('set', { stepsX: { list: this.stepsX } });
	            if (this.stepsY) jNode.resizable('set', { stepsY: { list: this.stepsY } });
	
	            if (this.options) jNode.resizable('set', this.options);
	
	            if (this.horizontal && this.vertical) {
	
	                var resizeFromCorner = function resizeFromCorner(e) {
	                    jNode.resizable('enable', { horizontal: true, vertical: true, field: this, evt: e });
	                };
	
	                [0, 1, 2, 3].forEach(function (i) {
	                    list[i] = createShape().on('mousedown', resizeFromCorner)[0];
	                });
	            }
	
	            if (!this.keepRatio) {
	
	                if (this.horizontal) {
	
	                    var horizontalResize = function horizontalResize(e) {
	                        jNode.resizable('enable', { horizontal: true, vertical: false, field: this, evt: e });
	                    };
	
	                    [4, 5].forEach(function (i) {
	                        list[i] = createShape().on('mousedown', horizontalResize)[0];
	                    });
	                }
	
	                if (this.vertical) {
	
	                    var verticalResize = function verticalResize(e) {
	                        jNode.resizable('enable', { horizontal: false, vertical: true, field: this, evt: e });
	                    };
	
	                    [6, 7].forEach(function (i) {
	                        list[i] = createShape().on('mousedown', verticalResize)[0];
	                    });
	                }
	
	                var jDoc = new JSYG(document);
	
	                var documentFct = {
	                    keydown: function keydown(e) {
	                        if (e.keyCode === 17) {
	                            jNode.resizable('set', { keepRatio: true });
	                        }
	                    },
	                    keyup: function keyup(e) {
	                        if (e.keyCode === 17) {
	                            jNode.resizable('set', { keepRatio: false });
	                        }
	                    }
	                };
	
	                jDoc.data('svgeditor', documentFct);
	                jDoc.on(documentFct);
	            }
	
	            this.list = list;
	
	            this.display = true;
	
	            this.update();
	
	            if (!_preventEvent) this.trigger('show', node);
	
	            return this;
	        },
	        /**
	         * Masque les contrôles
	         * @returns {Resize}
	         */
	        hide: function hide(_preventEvent) {
	
	            if (this.container) new JSYG(this.container).empty().remove();
	
	            this.list.splice(0, this.list.length);
	
	            var jDoc = new JSYG(document);
	            var documentFct = jDoc.data('svgeditor');
	            if (documentFct) jDoc.off(documentFct);
	
	            if (this.node) new JSYG(this.node).resizable('destroy');
	
	            this.display = false;
	
	            if (!_preventEvent) this.trigger('hide', this.node);
	
	            return this;
	        },
	        /**
	         * Met à jour les contrôles
	         * @returns {Resize}
	         */
	        update: function update() {
	
	            if (!this.display) return this;
	
	            var node = this.editor._target;
	            if (!node) return this.hide();
	
	            //il y a changemet des options, il faut réafficher tout
	            if (!this.keepRatio && !this.list[4] || this.keepRatio && this.list[4]) {
	                return this.show();
	            }
	
	            var jNode = new JSYG(node),
	                isSVG = jNode.isSVG(),
	                b = jNode.getDim(),
	                CTM = function () {
	                if (isSVG) return jNode.getMtx(jNode.offsetParent("farthest"));else {
	                    var dimParent = jNode.offsetParent().getDim('page');
	                    return new JSYG.Matrix().translate(dimParent.x, dimParent.y).multiply(jNode.getMtx());
	                }
	            }(),
	                topleft = new JSYG.Vect(b.x, b.y).mtx(CTM),
	                topright = new JSYG.Vect(b.x + b.width, b.y).mtx(CTM),
	                bottomleft = new JSYG.Vect(b.x, b.y + b.height).mtx(CTM),
	                bottomright = new JSYG.Vect(b.x + b.width, b.y + b.height).mtx(CTM),
	                angle = Math.atan2((topright.y - topleft.y) / 2, (topright.x - topleft.x) / 2),
	                angleTest = Math.abs(angle % Math.PI),
	                inverse = angleTest > Math.PI / 4 && angleTest < Math.PI * 3 / 4;
	
	            new JSYG(this.list[0]).setCenter(topleft.x, topleft.y).css('cursor', (inverse ? 'n' : 's') + 'e-resize');
	            new JSYG(this.list[1]).setCenter(topright.x, topright.y).css('cursor', (inverse ? 's' : 'n') + 'e-resize');
	            new JSYG(this.list[2]).setCenter(bottomleft.x, bottomleft.y).css('cursor', (inverse ? 's' : 'n') + 'e-resize');
	            new JSYG(this.list[3]).setCenter(bottomright.x, bottomright.y).css('cursor', (inverse ? 'n' : 's') + 'e-resize');
	
	            if (!this.keepRatio) {
	
	                new JSYG(this.list[4]).setCenter((topright.x + bottomright.x) / 2, (topright.y + bottomright.y) / 2).css('cursor', (inverse ? 'n' : 'e') + '-resize');
	                new JSYG(this.list[5]).setCenter((topleft.x + bottomleft.x) / 2, (topleft.y + bottomleft.y) / 2).css('cursor', (inverse ? 'n' : 'e') + '-resize');
	                new JSYG(this.list[6]).setCenter((topleft.x + topright.x) / 2, (topleft.y + topright.y) / 2).css('cursor', (inverse ? 'e' : 'n') + '-resize');
	                new JSYG(this.list[7]).setCenter((bottomleft.x + bottomright.x) / 2, (bottomleft.y + bottomright.y) / 2).css('cursor', (inverse ? 'e' : 'n') + '-resize');
	            }
	
	            return this;
	        }
	    };
	
	    /**
	     * Edition de la rotation
	     */
	    function Rotate(editorObject) {
	        /**
	         * référence vers l'objet Editor parent
	         */
	        this.editor = editorObject;
	        /**
	         * liste des contrôles
	         */
	        this.list = [];
	        /**
	         * liste des paliers
	         */
	        this.steps = [0, 90, 180, 270];
	        /**
	         * Conteneur des contrôles
	         */
	        this.container = new JSYG('<g>')[0];
	    }
	
	    Rotate.prototype = {
	
	        constructor: Rotate,
	        /**
	         * Classe appliquée au conteneur des contrôles
	         */
	        className: 'rotate',
	        /**
	         * Forme utilisée pour les contrôles
	         */
	        shape: 'circle',
	        /**
	         * lien utilisé si shape est défini à "use"
	         */
	        xlink: null,
	        /**
	         * largeur des contrôles
	         */
	        width: 10,
	        /**
	         * hauteur des contrôles
	         */
	        height: 10,
	        /**
	         * Indique si ce contrôle est actif dans le cas d'une sélection multiple
	         */
	        multiple: false,
	        /**
	         * Curseur à appliquer à l'élément de contrôle
	         */
	        cursor: Rotatable.prototype.cursor,
	        /**
	         * Fonction(s) à exécuter à l'affichage des contrôles
	         */
	        onshow: null,
	        /**
	         * Fonction(s) à exécuter à la suppression des contrôles
	         */
	        onhide: null,
	        /**
	         * Fonction(s) à exécuter quand on prépare un déplacement (mousedown sur le contrôle)
	         */
	        onstart: null,
	        /**
	         * Fonction(s) à exécuter quand on commence un déplacement
	         */
	        ondragstart: null,
	        /**
	         * Fonction(s) à exécuter pendant le déplacement
	         */
	        ondrag: null,
	        /**
	         * Fonction(s) à exécuter en fin de déplacement
	         */
	        ondragend: null,
	        /**
	         * Fonction(s) à exécuter au relachement de la souris, qu'il y ait eu modification ou non
	         */
	        onend: null,
	        /**
	         * Options supplémentaires pour la rotation
	         * @see {Rotatable}
	         */
	        options: null,
	
	        set: JSYG.StdConstruct.prototype.set,
	        /**
	         * Ajout d'écouteurs d'événements customisés
	         * @see JSYG.StdConstruct.prototype.on
	         * @returns {Rotate}
	         */
	        on: JSYG.StdConstruct.prototype.on,
	        /**
	         * Retrait d'écouteurs d'événements customisés
	         * @see JSYG.StdConstruct.prototype.on
	         * @returns {Rotate}
	         */
	        off: JSYG.StdConstruct.prototype.off,
	        /**
	         * Déclenche un événement customisé
	         * @see JSYG.StdConstruct.prototype.trigger
	         */
	        trigger: JSYG.StdConstruct.prototype.trigger,
	        /**
	         * Indique si les contrôles sont activés ou non
	         */
	        enabled: false,
	        /**
	         * Indique si les contrôles sont affichés ou non
	         */
	        display: false,
	        /**
	         * Activation des contrôles
	         * @param opt optionnel, objet définissant les options
	         * @returns {Rotate}
	         */
	        enable: function enable(opt) {
	            this.hide(true);
	            if (opt) this.set(opt);
	            var container = this.editor.box.container;
	            if (container && container.parentNode) this.show();
	            this.enabled = true;
	        },
	        /**
	         * Désactivation des contrôles
	         *  @returns {Rotate}
	         */
	        disable: function disable() {
	            this.hide();
	            this.enabled = false;
	        },
	        /**
	         * Affichage des contrôles
	         * @param opt optionnel, objet définissant les options
	         * @returns {Rotate}
	         */
	        show: function show(opt, _preventEvent) {
	
	            this.hide(true);
	
	            if (opt) this.set(opt);
	
	            var node = this.editor._target;
	
	            if (!node || this.editor.isMultiSelection() && !this.multiple) return this.hide();
	
	            this.node = node;
	
	            var jNode = new JSYG(node),
	                isSVG = jNode.isSVG(),
	                parent = isSVG ? this.editor.box.container : document.body,
	                that = this;
	
	            if (!isSVG) return this;
	
	            if (isSVG && this.container.tagName == 'DIV') {
	                this.container = new JSYG('<g>')[0];
	                this.shape = 'circle';
	            } else if (!isSVG && this.container.tagName == 'g') {
	                this.container = new JSYG('<div>')[0];
	                this.shape = 'div';
	            }
	
	            new JSYG(this.container).appendTo(parent).addClass(this.className);
	
	            var shape = new JSYG('<' + this.shape + '>').appendTo(this.container);
	            if (this.xlink) shape.href(this.xlink);
	            shape.setDim({ x: 0, y: 0, width: this.width, height: this.height });
	            shape.css('cursor', this.cursor);
	
	            this.list[0] = shape[0];
	
	            var displayShadow = this.editor.box.displayShadow;
	
	            var backup;
	
	            var start = function start(e) {
	                backup = {
	                    ctrlsMainPoints: that.editor.ctrlsMainPoints.enabled,
	                    ctrlsCtrlPoints: that.editor.ctrlsCtrlPoints.enabled
	                };
	                that.editor.trigger('start', node, e);
	                that.trigger('start', node, e);
	            },
	                dragstart = function dragstart(e) {
	                for (var n in backup) {
	                    if (!backup[n]) continue;
	                    new JSYG(that.editor[n].container).hide();
	                    that.editor[n].display = false;
	                }
	                that.editor.box.displayShadow = false;
	                that.editor.trigger('dragstart', node, e);
	                that.trigger('dragstart', node, e);
	            },
	                drag = function drag(e) {
	                that.editor.update();
	                that.editor.trigger('drag', node, e);
	                that.trigger('drag', node, e);
	            },
	                dragend = function dragend(e) {
	                if (that.editor.isMultiSelection()) new Container(that.editor._target).applyTransform();
	                that.editor.box.displayShadow = displayShadow;
	                for (var n in backup) {
	                    if (!backup[n]) continue;
	                    new JSYG(that.editor[n].container).show();
	                    that.editor[n].display = true;
	                }
	                new JSYG(that.container).appendTo(parent); //pour remettre les controles au 1er plan
	                that.editor.update();
	                that.editor.trigger('dragend', node, e);
	                that.editor.trigger('change', node, e);
	                that.trigger('dragend', node, e);
	            },
	                end = function end(e) {
	                that.editor.trigger('end', node, e);
	                that.trigger('end', node, e);
	            };
	
	            jNode.rotatable('set', {
	                event: 'mousedown',
	                eventWhich: 1,
	                field: this.list[0],
	                onstart: start,
	                ondragstart: dragstart,
	                ondrag: drag,
	                ondragend: dragend,
	                onend: end,
	                key: false,
	                click: "left",
	                cursor: this.cursor
	            });
	
	            if (this.steps) jNode.rotatable('set', { steps: { list: this.steps } });
	            if (this.options) jNode.rotatable('set', this.options);
	
	            jNode.rotatable('enable');
	
	            this.display = true;
	
	            this.update();
	
	            if (!_preventEvent) this.trigger('show', node);
	
	            return this;
	        },
	        /**
	         * Masque les contrôles
	         * @returns {Rotate}
	         */
	        hide: function hide(_preventEvent) {
	
	            if (this.container) new JSYG(this.container).empty().remove();
	            if (this.node) new JSYG(this.node).rotatable('destroy');
	            this.list.splice(0, this.list.length);
	            this.display = false;
	            if (!_preventEvent) this.trigger('hide', this.node);
	            return this;
	        },
	        /**
	         * Met à jour les contrôles
	         * @returns {Rotate}
	         */
	        update: function update() {
	
	            if (!this.display) return this;
	
	            var node = this.editor._target;
	
	            if (!node) return this.hide();
	            this.node = node;
	
	            var jNode = new JSYG(node),
	                b = jNode.getDim(),
	                CTM = function () {
	                if (jNode.isSVG()) return jNode.getMtx(jNode.offsetParent("farthest"));else {
	                    var dimParent = jNode.offsetParent().getDim('page');
	                    return new JSYG.Matrix().translate(dimParent.x, dimParent.y).multiply(jNode.getMtx());
	                }
	            }(),
	                topleft = new JSYG.Vect(b.x, b.y).mtx(CTM),
	                topright = new JSYG.Vect(b.x + b.width, b.y).mtx(CTM),
	                angle = Math.atan2((topright.y - topleft.y) / 2, (topright.x - topleft.x) / 2);
	
	            new JSYG(this.list[0]).setCenter((topleft.x + topright.x) / 2 + 15 * Math.sin(angle), (topleft.y + topright.y) / 2 - 15 * Math.cos(angle));
	
	            return this;
	        }
	    };
	
	    JSYG.Editor = Editor;
	
	    return Editor;
	});

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(480);

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	/*jshint forin:false, eqnull:true*/
	/* globals JSYG*/
	
	(function (factory) {
	
	    if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(481), __webpack_require__(483)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof JSYG != "undefined") factory(JSYG);else throw new Error("JSYG is needed");
	})(function (JSYG) {
	
	    "use strict";
	
	    (function () {
	
	        var path = new JSYG('<path>').attr('d', 'M0,0 L10,10')[0];
	
	        JSYG.support.needReplaceSeg = function () {
	
	            var seg = path.pathSegList.getItem(1);
	            seg.x = 20;
	
	            return path.pathSegList.getItem(1).x !== 20;
	        }();
	
	        JSYG.support.needCloneSeg = function () {
	
	            var path2 = new JSYG('<path>').attr('d', 'M0,0 L10,10')[0];
	            var seg = path.pathSegList.getItem(1);
	
	            path2.pathSegList.appendItem(seg);
	
	            return path.pathSegList.numberOfItems === 1;
	        }();
	    })();
	
	    function distance(pt1, pt2) {
	        return Math.sqrt(Math.pow(pt1.x - pt2.x, 2) + Math.pow(pt1.y - pt2.y, 2));
	    }
	
	    /**
	     * Chemins SVG
	     * @param arg optionnel, argument JSYG faisant référence à un chemin svg (balise &lt;path&gt;). Si non défini, un nouvel élément sera créé.
	     * @returns {Path}
	     */
	    function Path(arg) {
	
	        if (!(this instanceof Path)) return new Path(arg);
	
	        if (!arg) arg = '<path>';
	
	        JSYG.call(this, arg);
	    }
	
	    Path.prototype = new JSYG();
	
	    Path.prototype.constructor = Path;
	
	    /**
	     * Renvoie la longueur totale du chemin
	     * @returns {Number}
	     */
	    Path.prototype.getLength = function () {
	        return this[0].getTotalLength();
	    };
	
	    /**
	     * Clone le chemin
	     * @returns {Path}
	     */
	    Path.prototype.clone = function () {
	        return new Path(new JSYG(this[0]).clone());
	    };
	
	    /**
	     * Crée un objet segment.
	     * Le premier argument est la lettre correspondant au segment, les arguments suivants sont les mêmes que les méthodes natives décrites dans la <a href="http://www.w3.org/TR/SVG/paths.html#InterfaceSVGPathElement">norme SVG</a>
	     * @param type {String} lettre correspondant au segment ('M','L','C','Z', etc)
	     * @returns {SVGPathSeg}
	     * @link http://www.w3.org/TR/SVG/paths.html#DOMInterfaces
	     * @example <pre>var path = new Path();
	     * var seg = path.createSeg('M',0,0);
	     * var seg2 = path.createSeg('L',50,50);
	     * var seg3 = path.createSeg('C',50,50,30,10,10,30);
	     */
	    Path.prototype.createSeg = function (type) {
	
	        var method = 'createSVGPathSeg',
	            args = Array.prototype.slice.call(arguments, 1),
	            low = type.toLowerCase();
	
	        switch (low) {
	            case 'z':
	                method += 'ClosePath';break;
	            case 'm':
	                method += 'Moveto';break;
	            case 'l':
	                method += 'Lineto';break;
	            case 'c':
	                method += 'CurvetoCubic';break;
	            case 'q':
	                method += 'CurvetoQuadratic';break;
	            case 'a':
	                method += 'Arc';break;
	            case 'h':
	                method += 'LinetoHorizontal';break;
	            case 'v':
	                method += 'LinetoVertical';break;
	            case 's':
	                method += 'CurvetoCubicSmooth';break;
	            case 't':
	                method += 'CurvetoQuadraticSmooth';break;
	            default:
	                throw type + ' is not a correct letter for drawing paths !';
	        }
	
	        if (low !== 'z') method += low === type ? 'Rel' : 'Abs';
	
	        return this[0][method].apply(this[0], args);
	    };
	    /**
	     * Clone un segment
	     * @param seg segment ou indice du segment à cloner.
	     * @returns {SVGPathSeg}
	     */
	    Path.prototype.cloneSeg = function (seg) {
	
	        if (typeof seg == 'number') seg = this.getSeg(seg);
	
	        var letter = seg.pathSegTypeAsLetter,
	            args = [letter];
	
	        letter = letter.toLowerCase();
	
	        if (letter === 'h') args.push(seg.x);else if (letter === 'v') args.push(seg.y);else {
	
	            args.push(seg.x, seg.y);
	
	            switch (letter) {
	                case 'c':
	                    args.push(seg.x1, seg.y1, seg.x2, seg.y2);break;
	                case 'q':
	                    args.push(seg.x1, seg.y1);break;
	                case 'a':
	                    args.push(seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag);break;
	                case 's':
	                    args.push(seg.x2, seg.y2);break;
	            }
	        }
	
	        return this.createSeg.apply(this, args);
	    };
	    /**
	     * Ajoute un segment à la liste
	     * @returns {Path}
	     * @example <pre>var path = new Path();
	     * path.addSeg('M',0,0);
	     * path.addSeg('C',50,50,10,30,30,10);
	     * 
	     * // éuivalent à
	     * var seg = path.createSeg('M',0,0);
	     * path.appendSeg(seg);
	     * 
	     * seg = path.createSeg('C',50,50,10,30,30,10);
	     * path.appendSeg(seg);
	     */
	    Path.prototype.addSeg = function () {
	        this.appendSeg(this.createSeg.apply(this, arguments));
	        return this;
	    };
	
	    /**
	     * Réinitialise la liste des segments
	     * @returns {Path}
	     */
	    Path.prototype.clear = function () {
	        this[0].pathSegList.clear();
	        return this;
	    };
	
	    /**
	     * récupère un segment
	     * @param i indice du segment
	     * @returns {SVGPathSeg}
	     */
	    Path.prototype.getSeg = function (i) {
	        return this[0].pathSegList.getItem(i);
	    };
	
	    /**
	     * récupère la liste des segments sous forme de tableau
	     * @returns {Array}
	     */
	    Path.prototype.getSegList = function () {
	        return JSYG.makeArray(this[0].pathSegList);
	    };
	
	    /**
	     * Trace le chemin à partir d'une liste de segments
	     * @param segList tableau de segments
	     * @returns {Path}
	     */
	    Path.prototype.setSegList = function (segList) {
	
	        var path = new Path();
	        segList.forEach(function (seg) {
	            path.appendSeg(seg);
	        });
	        this.applyPath(path);
	        return this;
	    };
	
	    /**
	     * récupère le dernier segment
	     * @returns {SVGPathSeg}
	     */
	    Path.prototype.getLastSeg = function () {
	        return this.getSeg(this.nbSegs() - 1);
	    };
	
	    /**
	     * Ajoute un objet segment à la liste
	     * @param seg objet segment
	     * @returns {Path}
	     * @example <pre>var path = new Path();
	     * var seg = path.createSeg('M',0,0);
	     * path.appendSeg(seg);
	     * 
	     * //equivalent à
	     * path.addSeg('M',0,0);
	     */
	    Path.prototype.appendSeg = function (seg) {
	        this[0].pathSegList.appendItem(JSYG.support.needCloneSeg ? this.cloneSeg(seg) : seg);
	        return this;
	    };
	
	    /**
	     * Insert un segment à l'indice donné
	     * @param seg objet segment
	     * @param i indice ou insérer le segment
	     * @returns {Path}
	     */
	    Path.prototype.insertSeg = function (seg, i) {
	        this[0].pathSegList.insertItemBefore(JSYG.support.needCloneSeg ? this.cloneSeg(seg) : seg, i);
	        return this;
	    };
	
	    /**
	     * Remplace un segment
	     * @param i indice du segment à remplacer
	     * @param seg nouveau segment
	     * @returns {Path}
	     */
	    Path.prototype.replaceSeg = function (i, seg) {
	
	        if (typeof seg == 'string') {
	            var args = Array.prototype.slice.call(arguments, 1);
	            seg = this.createSeg.apply(this, args);
	        } else if (JSYG.support.needCloneSeg) seg = this.cloneSeg(seg);
	
	        this[0].pathSegList.replaceItem(seg, i);
	        return this;
	    };
	
	    /**
	     * Supprime un segment
	     * @param i indice du segment à supprimer
	     * @returns {Path}
	     */
	    Path.prototype.removeSeg = function (i) {
	        this[0].pathSegList.removeItem(i);
	        return this;
	    };
	
	    /**
	     * Ajoute un segment de déplacement
	     * @param x abcisse
	     * @param y ordonnée
	     * @returns {Path}
	     * @example <pre>var path = new Path();
	     * path.moveTo(40,40);
	     * 
	     * //équivalent à
	     * path.addSeg('M',40,40);
	     * 
	     * //ou encore à
	     * var seg = path.createSeg('M',40,40);
	     * path.appendSeg(seg);
	     */
	    Path.prototype.moveTo = function (x, y) {
	        this.addSeg('M', x, y);
	        return this;
	    };
	
	    /**
	     * Ajout un segment de droite
	     * @param x abcisse
	     * @param y ordonnée
	     * @returns {Path}
	     * @example <pre>var path = new Path();
	     * path.lineTo(40,40);
	     * 
	     * //équivalent à
	     * path.addSeg('L',40,40);
	     * 
	     * //ou encore à
	     * var seg = path.createSeg('L',40,40);
	     * path.appendSeg(seg);
	     */
	    Path.prototype.lineTo = function (x, y) {
	        this.addSeg('L', x, y);
	        return this;
	    };
	
	    /**
	     * Ajoute un segment de Bézier (cubique)
	     * @param x1 abcisse du 1er point de contrôle
	     * @param y1 ordonnée du 1er point de contrôle
	     * @param x2 abcisse du 2ème point de contrôle
	     * @param y2 ordonnée du 2ème point de contrôle
	     * @param x abcisse du point d'arrivée
	     * @param y ordonnée du point d'arrivée
	     * @returns {Path}
	     * @example <pre>var path = new Path();
	     * path.curveTo(40,40,10,30,30,10);
	     * 
	     * //équivalent à
	     * path.addSeg('C',40,40,10,30,30,10);
	     * 
	     * //ou encore à
	     * var seg = path.createSeg('C',40,40,10,30,30,10);
	     * path.appendSeg(seg);
	     */
	    Path.prototype.curveTo = function (x1, y1, x2, y2, x, y) {
	        this.addSeg('C', x, y, x1, y1, x2, y2);
	        return this;
	    };
	
	    /**
	     * Ferme le chemin (ajout d'un segment "Z")
	     * @returns {Path}
	     * <pre>var path = new Path();
	     * path.curveTo(40,40,10,30,30,10);
	     * path.close();
	     * 
	     * //équivalent à
	     * path.addSeg('Z');
	     * 
	     * //ou encore à
	     * var seg = path.createSeg('Z');
	     * path.appendSeg(seg);
	     */
	    Path.prototype.close = function () {
	        this.addSeg('Z');
	        return this;
	    };
	
	    /**
	     * Récupère le point courant.
	     * Un segment donné ne renseigne que du point d'arrivée et non du point de départ dont on a souvent besoin.<br/>
	     * <strong>Attention</strong>, cela ne marche qu'avec des segments définis en absolu et non en relatif. Utilisez
	     * si besoin la méthode rel2abs.
	     * @param i indice du segment
	     * @returns {Vect}
	     * @see Path.prototype.rel2abs
	     * @example <pre>var path = new Path();
	     * path.attr('d','M0,0 h50
	     * 
	     * path.getCurPt(0); // {x:20,y:20}
	     * path.getCurPt(1); // {x:20,y:20}
	     * path.getCurPt(2); // {x:20,y:20}
	     */
	    Path.prototype.getCurPt = function (i) {
	
	        var j = i,
	            x = null,
	            y = null,
	            seg;
	
	        if (i === 0) {
	            seg = this.getSeg(0);
	            return new JSYG.Vect(seg.x, seg.y);
	        }
	
	        while (x == null || y == null) {
	            j--;
	            if (j < 0) {
	                if (x == null) {
	                    x = 0;
	                }
	                if (y == null) {
	                    y = 0;
	                }
	            } else {
	                seg = this.getSeg(j);
	                if (seg.x != null && x == null) {
	                    x = seg.x;
	                }
	                if (seg.y != null && y == null) {
	                    y = seg.y;
	                }
	            }
	        }
	
	        return new JSYG.Vect(x, y);
	    };
	
	    /**
	     * Remplace un segment relatif par son équivalent en absolu.
	     */
	    function rel2absSeg(jPath, ind) {
	
	        var seg = jPath.getSeg(ind),
	            letter = seg.pathSegTypeAsLetter.toLowerCase(),
	            args,
	            ref;
	
	        if (seg.pathSegTypeAsLetter !== letter) return; //déjà en absolu
	
	        args = [ind, letter.toUpperCase()];
	        ref = jPath.getCurPt(ind);
	
	        if (letter === 'h') args.push(ref.x + seg.x);else if (letter === 'v') args.push(ref.y + seg.y);else if (letter === "m") args.push(seg.x, seg.y);else if (letter !== "z") {
	
	            args.push(ref.x + seg.x, ref.y + seg.y);
	
	            switch (letter) {
	                case 'c':
	                    args.push(ref.x + seg.x1, ref.y + seg.y1, ref.x + seg.x2, ref.y + seg.y2);break;
	                case 'q':
	                    args.push(ref.x + seg.x1, ref.y + seg.y1);break;
	                case 'a':
	                    args.push(seg.r1, seg.r2, seg.angle, seg.largArcFlag, seg.sweepFlag);break;
	                case 's':
	                    args.push(ref.x + seg.x2, ref.y + seg.y2);break;
	            }
	        }
	
	        jPath.replaceSeg.apply(jPath, args);
	    }
	
	    /**
	     * Applique le tracé d'un autre chemin
	     * @param path argument JSYG faisant référence à un chemin
	     * @returns {Path}
	     */
	    Path.prototype.applyPath = function (path) {
	
	        this.attr('d', path.attr('d'));
	
	        return this;
	    };
	
	    /**
	     * Remplace les segments relatifs en segments absolus
	     * @returns {Path}
	     */
	    Path.prototype.rel2abs = function () {
	
	        var jPath = this.clone(),
	            i = 0,
	            N = this.nbSegs();
	
	        for (; i < N; i++) {
	            rel2absSeg(jPath, i);
	        }this.applyPath(jPath);
	        return this;
	    };
	
	    /**
	     * Teste si le chemin contient des arcs ou non (segments a ou A)
	     * @returns {Boolean}
	     */
	    Path.prototype.hasArcs = function () {
	        return (/a/i.test(this.attr('d'))
	        );
	    };
	
	    /**
	     * Teste si le chemin contient des segments relatifs ou non
	     * @returns
	     */
	    Path.prototype.hasRelSeg = function () {
	        return (/(m|l|h|v|c|s|q|t|a)/.test(this.attr('d'))
	        );
	    };
	
	    /**
	     * Teste si le chemin est normalisé ou non. Normalisé signifie que tous ces segments sont absolus et uniquement de type M, L, C ou Z (z).
	     * @returns {Boolean}
	     */
	    Path.prototype.isNormalized = function () {
	        return !/([a-y]|[A-BD-KN-Y])/.test(this.attr('d'));
	    };
	
	    /**
	     * Renvoie le nombre de segments
	     * @returns
	     */
	    Path.prototype.nbSegs = function () {
	        return this[0].pathSegList.numberOfItems;
	    };
	
	    /**
	     * Scinde le segment en deux et renvoie un objet Path contenant les deux nouveaux segments.
	     * @param ind indice du segment à diviser en 2.
	     * @returns {Path}
	     */
	    Path.prototype.splitSeg = function (ind) {
	
	        var seg = this.getSeg(ind),
	            current = this.getCurPt(ind),
	            letter = seg.pathSegTypeAsLetter,
	            jPath = new Path(),
	            m,
	            m1,
	            m2,
	            m3,
	            mm1,
	            mm2,
	            mmm;
	
	        switch (letter) {
	
	            case 'C':
	
	                m1 = {
	                    x: (current.x + seg.x1) / 2,
	                    y: (current.y + seg.y1) / 2
	                };
	                m2 = {
	                    x: (seg.x1 + seg.x2) / 2,
	                    y: (seg.y1 + seg.y2) / 2
	                };
	                m3 = {
	                    x: (seg.x2 + seg.x) / 2,
	                    y: (seg.y2 + seg.y) / 2
	                };
	                mm1 = {
	                    x: (m1.x + m2.x) / 2,
	                    y: (m1.y + m2.y) / 2
	                };
	                mm2 = {
	                    x: (m2.x + m3.x) / 2,
	                    y: (m2.y + m3.y) / 2
	                };
	                mmm = {
	                    x: (mm1.x + mm2.x) / 2,
	                    y: (mm1.y + mm2.y) / 2
	                };
	
	                jPath.addSeg('C', mmm.x, mmm.y, m1.x, m1.y, mm1.x, mm1.y);
	                jPath.addSeg('C', seg.x, seg.y, mm2.x, mm2.y, m3.x, m3.y);
	
	                break;
	
	            case 'L':
	
	                m = { x: (current.x + seg.x) / 2, y: (current.y + seg.y) / 2 };
	                jPath.addSeg('L', m.x, m.y);
	                jPath.addSeg('L', seg.x, seg.y);
	                break;
	
	            case 'Z':
	
	                seg = this.getSeg(0);
	                m = { x: (current.x + seg.x) / 2, y: (current.y + seg.y) / 2 };
	                jPath.addSeg('L', m.x, m.y);
	                jPath.addSeg('Z');
	                break;
	
	            case 'M':
	
	                jPath.addSeg('M', seg.x, seg.y);
	                break;
	
	            default:
	                throw "You must normalize the jPath";
	        }
	
	        return jPath;
	    };
	
	    /**
	     * Scinde chaque segment du chemin en 2.
	     * @returns {Path}
	     */
	    Path.prototype.split = function () {
	
	        if (!this.isNormalized()) throw new Error("You must normalize the path");
	
	        var list,
	            jPath = new Path(),
	            i,
	            N,
	            j,
	            M;
	
	        for (i = 0, N = this.nbSegs(); i < N; i++) {
	
	            list = this.splitSeg(i);
	
	            for (j = 0, M = list.nbSegs(); j < M; j++) {
	                jPath.appendSeg(list.getSeg(j));
	            }
	        }
	
	        this.applyPath(jPath);
	        return this;
	    };
	
	    /**
	     * Extrait une portion du chemin et renvoie un objet Path contenant les segments de cette portion.
	     * @param begin indice du premier segment. Si négatif, on part de la fin.
	     * @param end indice du dernier segment. Si négatif, on part de la fin. Si non précisé, dernier segment.
	     * @returns {Path}
	     */
	    Path.prototype.slice = function (begin, end) {
	
	        var nbseg = this.nbSegs(),
	            jPath = new Path(),
	            i,
	            pt;
	
	        if (begin < 0) begin = nbseg - begin;
	        if (end == null) end = nbseg - 1;else if (end < 0) end = nbseg - end;
	
	        begin = Math.max(0, begin);
	        end = Math.min(nbseg - 1, end);
	
	        pt = this.getCurPt(begin);
	        jPath.addSeg('M', pt.x, pt.y);
	
	        for (i = begin; i <= end; i++) {
	            jPath.appendSeg(this.getSeg(i));
	        }return jPath;
	    };
	
	    /**
	     * Inverse l'ordre des points. Pas de différence visuelle.
	     * @returns {Path}
	     */
	    Path.prototype.reverse = function () {
	
	        if (!this.isNormalized()) throw new Error("il faut normaliser le chemin");
	
	        var jPath = new Path(),
	            N = this.nbSegs(),
	            item,
	            current,
	            i;
	
	        for (i = N - 1; i >= 0; i--) {
	
	            item = this.getSeg(i);
	
	            if (i === N - 1) jPath.addSeg('M', item.x, item.y);
	
	            current = this.getCurPt(i);
	
	            switch (item.pathSegTypeAsLetter) {
	
	                case 'L':
	                    if (i === N - 1) break;
	                    jPath.addSeg("L", current.x, current.y);
	                    break;
	
	                case 'C':
	                    jPath.addSeg("C", current.x, current.y, item.x2, item.y2, item.x1, item.y1);
	                    break;
	
	                case 'Z':
	                case 'z':
	                    current = this.getSeg(N - 1);
	                    jPath.addSeg("L", current.x, current.y);
	                    break;
	            }
	        }
	
	        this.applyPath(jPath);
	        return this;
	    };
	
	    /**
	     * Transforme un segment quelconque en une série de segments de droites.
	     * nécessite un segment normalisé (M,L,C,Z,z).
	     * @param ind indice du segment
	     * @param nbsegs nombre de segments de droite pour approximer le segment initial (dans le cas d'un segment C).
	     * @returns {Path}
	     */
	    Path.prototype.seg2Polyline = function (ind, nbsegs) {
	
	        nbsegs = nbsegs || 10;
	
	        var seg = this.getSeg(ind),
	            letter = seg.pathSegTypeAsLetter.toUpperCase(),
	            current = this.getCurPt(ind),
	            jPath = new Path(),
	            t,
	            a,
	            b,
	            c,
	            d,
	            x,
	            y,
	            i;
	
	        switch (letter) {
	
	            case 'M':
	                jPath.addSeg('M', current.x, current.y);
	                break;
	
	            case 'L':
	                jPath.addSeg('L', seg.x, seg.y);
	                break;
	
	            case 'C':
	
	                for (i = 0; i <= nbsegs; i++) {
	
	                    t = i / nbsegs;
	
	                    a = Math.pow(1 - t, 3);
	                    b = 3 * t * Math.pow(1 - t, 2);
	                    c = 3 * Math.pow(t, 2) * (1 - t);
	                    d = Math.pow(t, 3);
	
	                    x = a * current.x + b * seg.x1 + c * seg.x2 + d * seg.x;
	                    y = a * current.y + b * seg.y1 + c * seg.y2 + d * seg.y;
	
	                    jPath.addSeg('L', x, y);
	                }
	
	                break;
	
	            case 'Z':
	
	                seg = this.getSeg(0);
	                jPath.addSeg('L', seg.x, seg.y);
	                break;
	
	            default:
	                throw new Error("Vous devez normaliser le chemin pour applique la mÃ©thode seg2Polyline");
	        }
	
	        return jPath;
	    };
	
	    /**
	     * Transforme le chemin en une série de segments de droite.
	     * Le chemin doit être normalisé. 
	     * @param nbsegs nombre de segments pour approximer les courbes.
	     * @returns {Path}
	     */
	    Path.prototype.toPolyline = function (nbsegs) {
	
	        var list,
	            jPath = new Path(),
	            i,
	            N,
	            j,
	            M;
	
	        if (!this.isNormalized()) throw new Error("Il faut normaliser le chemin pour la mÃ©thode toPolyLine");
	
	        for (i = 0, N = this.nbSegs(); i < N; i++) {
	
	            list = this.seg2Polyline(i, nbsegs);
	
	            for (j = 0, M = list.nbSegs(); j < M; j++) {
	                jPath.appendSeg(list.getSeg(j));
	            }
	        }
	
	        this.applyPath(jPath);
	        return this;
	    };
	
	    /**
	     * réduit le nombre de points du chemin en précisant une distance minimale entre 2 points. 
	     * @param minDistance distance minimale en pixels entre 2 points en dessous de laquelle l'un des 2 sera supprimé. 
	     * @param screen si true, cette distance est la distance en pixels visible à  l'écran (donc plus faible si le chemin est zoomé), sinon
	     * c'est la distance absolue entre 2 points du chemin.
	     * @returns {Path}
	    
	    Path.prototype.slim = function(minDistance,screen) {
	    
	    var i = 0,
	    ctm = screen ? this.parent().getMtx('screen') : new JSYG.Matrix(),
	    seg,next;
	    
	    while (i < this.nbSegs()-2) { //pas le dernier point
	    
	    seg = new JSYG.Point(this.getSeg(i)).mtx(ctm);
	    next = new JSYG.Point(this.getSeg(i+1)).mtx(ctm);
	    
	    if (distance(seg,next) < minDistance) {
	    
	    if (i < this.nbSegs()-2) this.removeSeg(i+1);
	    else this.removeSeg(i);
	    }
	    else i++;
	    }
	    
	    return this; 
	    };
	     */
	
	    function getSegDist(p, p1, p2) {
	
	        var x = p1.x,
	            y = p1.y,
	            dx = p2.x - x,
	            dy = p2.y - y;
	
	        if (dx !== 0 || dy !== 0) {
	
	            var t = ((p.x - x) * dx + (p.y - y) * dy) / (dx * dx + dy * dy);
	
	            if (t > 1) {
	                x = p2.x;
	                y = p2.y;
	            } else if (t > 0) {
	                x += dx * t;
	                y += dy * t;
	            }
	        }
	
	        dx = p.x - x;
	        dy = p.y - y;
	
	        return Math.sqrt(dx * dx + dy * dy);
	    }
	
	    /* Tiré de Simplify.js
	    (c) 2013, Vladimir Agafonkin
	    Simplify.js, a high-performance JS polyline simplification library
	    mourner.github.io/simplify-js
	     */
	    /**
	     * Simplification du chemin par l'algorithme de Douglas-Peucker
	     * @param tolerance
	     * @returns {Path}
	     * 
	     */
	    Path.prototype.simplify = function (tolerance, screen) {
	
	        var segs = this.getSegList(),
	            len = segs.length,
	            sqTolerance = tolerance ? tolerance * tolerance : 1,
	            ctm = screen ? this.parent().getMtx('screen') : new JSYG.Matrix(),
	            markers = new Array(len),
	            first = 0,
	            last = len - 1,
	            stack = [],
	            jPath = new Path(),
	            i,
	            maxDist,
	            dist,
	            index = null,
	            p,
	            p1,
	            p2;
	
	        if (len <= 1) return this;
	
	        markers[first] = markers[last] = 1;
	
	        while (last) {
	
	            maxDist = 0;
	
	            for (i = first + 1; i < last; i++) {
	
	                p = new JSYG.Point(segs[i]).mtx(ctm);
	                p1 = new JSYG.Point(segs[first]).mtx(ctm);
	                p2 = new JSYG.Point(segs[last]).mtx(ctm);
	
	                dist = getSegDist(p, p1, p2);
	
	                if (dist > maxDist) {
	                    index = i;
	                    maxDist = dist;
	                }
	            }
	
	            if (maxDist > sqTolerance) {
	                markers[index] = 1;
	                stack.push(first, index, index, last);
	            }
	
	            last = stack.pop();
	            first = stack.pop();
	        }
	
	        for (i = 0; i < len; i++) {
	            if (markers[i]) jPath.appendSeg(segs[i]);
	        }
	
	        this.applyPath(jPath);
	
	        return this;
	    };
	
	    /**
	     * Teste si le chemin est fermé ou non
	     * @returns {Boolean}
	     */
	    Path.prototype.isClosed = function () {
	
	        var seg1 = this.getSeg(0),
	            seg2 = this.getLastSeg();
	
	        return seg2.pathSegTypeAsLetter.toLowerCase() == 'z' || seg1.x == seg2.x && seg1.y == seg2.y;
	    };
	
	    /**
	     * Lisse le chemin de manière automatique, sans avoir à définir de points de contrôles.
	     * @param ind optionnel, indice du segment. Si précisé, le chemin ne sera lissé qu'autour de ce point.
	     * @returns {Path}
	     */
	    Path.prototype.autoSmooth = function (ind) {
	
	        var i,
	            N = this.nbSegs(),
	            closed = this.isClosed(),
	            dontloop = arguments[1] || null,
	            min,
	            max,
	            seg,
	            nm1,
	            n0,
	            np1,
	            np2,
	            x0,
	            y0,
	            x1,
	            y1,
	            x2,
	            y2,
	            x3,
	            y3,
	            tgx0,
	            tgy0,
	            tgx3,
	            tgy3,
	            dx,
	            dy,
	            d,
	            dt0,
	            dt3,
	            ft0,
	            ft3;
	
	        if (ind == null) {
	            min = 0;max = N - 1;
	        } else {
	            if (ind === 0 && !dontloop) this.autoSmooth(N - 1, true);
	            if (ind >= N - 2 && !dontloop) this.autoSmooth(0, true);
	
	            min = Math.max(0, ind - 2);
	            max = Math.min(N - 1, ind + 2);
	        }
	
	        if (this.getLastSeg().pathSegTypeAsLetter.toLowerCase() === 'z') {
	            seg = this.getSeg(0);
	            this.replaceSeg(this.nbSegs() - 1, 'L', seg.x, seg.y);
	        }
	
	        if (N < 3) return;
	
	        for (i = min; i < max; i++) {
	
	            nm1 = i === 0 ? closed ? this.getSeg(N - 2) : this.getSeg(i) : this.getSeg(i - 1);
	            n0 = this.getSeg(i);
	            np1 = this.getSeg(i + 1);
	            np2 = i === N - 2 ? closed ? this.getSeg(1) : this.getSeg(i + 1) : this.getSeg(i + 2);
	
	            x0 = n0.x;y0 = n0.y;
	            x3 = np1.x;y3 = np1.y;
	
	            tgx3 = x0 - np2.x;
	            tgy3 = y0 - np2.y;
	            tgx0 = nm1.x - np1.x;
	            tgy0 = nm1.y - np1.y;
	            dx = Math.abs(x0 - x3);
	            dy = Math.abs(y0 - y3);
	            d = Math.sqrt(dx * dx + dy * dy);
	            dt3 = Math.sqrt(tgx3 * tgx3 + tgy3 * tgy3);
	            dt0 = Math.sqrt(tgx0 * tgx0 + tgy0 * tgy0);
	
	            if (d !== 0) {
	
	                ft3 = dt3 / d * 3;
	                ft0 = dt0 / d * 3;
	
	                x1 = x0 - tgx0 / ft0;
	                y1 = y0 - tgy0 / ft0;
	                x2 = x3 + tgx3 / ft3;
	                y2 = y3 + tgy3 / ft3;
	
	                this.replaceSeg(i + 1, 'C', np1.x, np1.y, x1, y1, x2, y2);
	            }
	        }
	
	        return this;
	    };
	
	    /**
	     * Teste si le point passé en paramètre est à l'intérieur du polygone défini par le chemin ou non.
	     * Le chemin doit donc être fermé pour éventuellement renvoyer true.
	     * @param pt objet Vect ou objet quelconque ayant les propriétés x et y.
	     * @returns {Boolean}
	     */
	    Path.prototype.isPointInside = function (pt) {
	
	        if (!this.isClosed()) return false;
	
	        var counter = 0,
	            x_inter,
	            mtx = this.getMtx(),
	            p1 = this.getSeg(0),
	            N = this.nbSegs(),
	            i,
	            p2;
	
	        p1 = new JSYG.Vect(p1.x, p1.y).mtx(mtx);
	
	        for (i = 1; i <= N; i++) {
	
	            p2 = this.getSeg(i % N);
	            p2 = new JSYG.Vect(p2.x, p2.y).mtx(mtx);
	
	            if (pt.y > Math.min(p1.y, p2.y)) {
	                if (pt.y <= Math.max(p1.y, p2.y)) {
	                    if (pt.x <= Math.max(p1.x, p2.x)) {
	                        if (p1.y != p2.y) {
	                            x_inter = (pt.y - p1.y) * (p2.x - p1.x) / (p2.y - p1.y) + p1.x;
	                            if (p1.x == p2.x || pt.x <= x_inter) {
	                                counter++;
	                            }
	                        }
	                    }
	                }
	            }
	            p1 = p2;
	        }
	
	        return counter % 2 == 1;
	    };
	
	    /**
	     * Normalise le chemin (segments M,L,C,Z,z uniquement).
	     * @returns {Path}
	     */
	    Path.prototype.normalize = function () {
	
	        this.rel2abs();
	
	        var seg,
	            letter,
	            currentPoint,
	            jPath = new Path(),
	            x,
	            y,
	            i = 0,
	            N = this.nbSegs(),
	            j,
	            M,
	            bezier;
	
	        for (; i < N; i++) {
	
	            seg = this.getSeg(i);
	            letter = seg.pathSegTypeAsLetter;
	            currentPoint = this.getCurPt(i);
	
	            if (letter === 'H') {
	                jPath.addSeg('L', seg.x, currentPoint.y);
	            } else if (letter === 'V') {
	                jPath.addSeg('L', currentPoint.x, seg.y);
	            } else if (letter === 'S') {
	                //transform S to C
	                if (i === 0 || this.getSeg(i - 1).pathSegTypeAsLetter !== 'C') {
	                    x = currentPoint.x;
	                    y = currentPoint.y;
	                } else {
	                    x = currentPoint.x * 2 - this.getSeg(i - 1).x2;
	                    y = currentPoint.y * 2 - this.getSeg(i - 1).y2;
	                }
	                this.replaceSeg(i, 'C', seg.x, seg.y, x, y, seg.x2, seg.y2);
	                i--;continue;
	            } else if (letter === 'Q') {
	                jPath.addSeg('C', seg.x, seg.y, 1 / 3 * currentPoint.x + 2 / 3 * seg.x1, currentPoint.y / 3 + 2 / 3 * seg.y1, 2 / 3 * seg.x1 + 1 / 3 * seg.x, 2 / 3 * seg.y1 + 1 / 3 * seg.y);
	            } else if (letter === 'T') {
	                //transform T to Q
	                if (i === 0 || this.getSeg(i - 1).pathSegTypeAsLetter !== 'Q') {
	                    x = currentPoint.x;
	                    y = currentPoint.y;
	                } else {
	                    x = currentPoint.x * 2 - this.getSeg(i - 1).x1;
	                    y = currentPoint.y * 2 - this.getSeg(i - 1).y1;
	                }
	                this.replaceSeg(i, 'Q', seg.x, seg.y, x, y, seg.x2, seg.y2);
	                i--;continue;
	            } else if (letter === 'A') {
	                bezier = this.arc2bez(i);
	                for (j = 0, M = bezier.nbSegs(); j < M; j++) {
	                    jPath.appendSeg(bezier.getSeg(j));
	                }
	            } else jPath.appendSeg(seg);
	        }
	
	        this.applyPath(jPath);
	        return this;
	    };
	
	    /**
	     * Renvoie la longueur d'un segment
	     * @param i indice du segment
	     * @returns {Number}
	     */
	    Path.prototype.getSegLength = function (i) {
	        return this.slice(0, i).getLength() - this.slice(0, i - 1).getLength();
	    };
	
	    /**
	     * Renvoie la longueur du chemin au niveau du segment précisé
	     * @param i indice du segment
	     * @returns
	     */
	    Path.prototype.getLengthAtSeg = function (i) {
	        return this.slice(0, i).getLength();
	    };
	
	    /**
	     * Renvoie l'indice du segment situé à la distance précisée
	     * @param distance
	     * @returns {Number}
	     */
	    Path.prototype.getSegAtLength = function (distance) {
	        return this[0].getPathSegAtLength(distance);
	    };
	
	    /**
	     * Renvoie le point du chemin à la distance précisée
	     * @param distance
	     * @returns {Vect}
	     */
	    Path.prototype.getPointAtLength = function (distance) {
	        var pt = this[0].getPointAtLength(distance);
	        return new JSYG.Vect(pt.x, pt.y);
	    };
	
	    /**
	     * Renvoie l'angle du chemin à la distance précisée
	     * @param distance
	     * @returns {Number}
	     */
	    Path.prototype.getRotateAtLength = function (distance) {
	        var pt = this.getTangentAtLength(distance);
	        return Math.atan2(pt.y, pt.x) * 180 / Math.PI;
	    };
	
	    /**
	     * Renvoie la tangente du chemin à la distance précisée
	     * @param distance
	     * @returns {Vect}
	     */
	    Path.prototype.getTangentAtLength = function (distance) {
	
	        if (!this.isNormalized()) throw new Error("Il faut normaliser le chemin");
	
	        var ind = this[0].getPathSegAtLength(distance);
	
	        if (ind === -1) return null;
	
	        var letter, seg, current, l1, l2, t, a, b, c, e, f, g, x, y;
	
	        do {
	            seg = this.getSeg(ind);
	            if (!seg) {
	                return null;
	            }
	            letter = seg.pathSegTypeAsLetter;
	        } while (letter === 'M' && ++ind);
	
	        current = this.getCurPt(ind);
	        //var jPath = new Path();
	
	        switch (letter) {
	
	            case 'C':
	
	                l1 = this.getLengthAtSeg(ind - 1);
	                l2 = this.getLengthAtSeg(ind);
	                t = (distance - l1) / (l2 - l1);
	
	                //inspiré de http://www.planetclegg.com/projects/WarpingTextToSplines.html
	
	                a = seg.x - 3 * seg.x2 + 3 * seg.x1 - current.x;
	                b = 3 * seg.x2 - 6 * seg.x1 + 3 * current.x;
	                c = 3 * seg.x1 - 3 * current.x;
	                //d = current.x,
	                e = seg.y - 3 * seg.y2 + 3 * seg.y1 - current.y;
	                f = 3 * seg.y2 - 6 * seg.y1 + 3 * current.y;
	                g = 3 * seg.y1 - 3 * current.y;
	                //h = current.y,
	
	                //point de la courbe de bézier (equivalent à getPointAtLength)
	                //x = a * Math.pow(t,3) + b * Math.pow(t,2) + c * t + d,
	                //y = e * Math.pow(t,3) + f * Math.pow(t,2) + g * t + h,
	
	                x = 3 * a * Math.pow(t, 2) + 2 * b * t + c;
	                y = 3 * e * Math.pow(t, 2) + 2 * f * t + g;
	
	                return new JSYG.Vect(x, y).normalize();
	
	            case 'L':
	
	                return new JSYG.Vect(seg.x - current.x, seg.y - current.y).normalize();
	
	            case 'M':
	            case 'Z':
	
	                return null;
	
	            default:
	                throw new Error("You must normalize the Path");
	        }
	    };
	
	    /**
	     * Trouve le segment le plus proche du point donné en paramètre
	     * @param point objet avec les propriÃ©tÃ©s x et y.
	     * @param precision nombre de pixels maximal sï¿½parant le point du chemin
	     * @returns {Number} indice du segment trouvï¿½, ou -1
	     */
	    Path.prototype.findSeg = function (point, precision) {
	
	        precision = precision || 1;
	
	        var pt,
	            i,
	            N = this[0].getTotalLength();
	        for (i = 0; i <= N; i++) {
	            pt = this[0].getPointAtLength(i);
	            if (distance(pt, point) < precision) return this[0].getPathSegAtLength(i);
	        }
	
	        return -1;
	    };
	
	    function getFromPoint(node, point, result, precision, borneMin, borneMax) {
	
	        var pt,
	            i,
	            N = node.getTotalLength(),
	            distance,
	            ptmin = null,
	            length = null,
	            min = Infinity;
	
	        precision = Math.ceil(precision || 50);
	        borneMin = Math.max(borneMin || 0, 0);
	        borneMax = Math.min(borneMax || N, N);
	
	        for (i = borneMin; i <= borneMax; i += precision) {
	            pt = node.getPointAtLength(i);
	            distance = distance(pt, point);
	            if (distance < min) {
	                ptmin = pt;
	                min = distance;
	                length = i;
	                if (distance < 1) break;
	            }
	        }
	
	        if (precision > 1) {
	            return getFromPoint(node, point, result, precision / 10, length - precision, length + precision);
	        }
	
	        return result === 'point' ? new JSYG.Vect(ptmin.x, ptmin.y) : length;
	    }
	
	    /**
	     * Trouve le point de la courbe le plus proche du point passé en paramètre
	     * @param point objet avec les propriétés x et y
	     * @returns {Vect}
	     */
	    Path.prototype.getNearestPoint = function (point) {
	        return getFromPoint(this[0], point, 'point');
	    };
	
	    /**
	     * Trouve la longueur de la courbe au point le plus proche du point passé en paramètre
	     * @param point
	     * @returns
	     */
	    Path.prototype.getLengthAtPoint = function (point) {
	        return getFromPoint(this[0], point, 'length');
	    };
	
	    /*
	    Path.prototype.getArea = function() {
	    
	    var area = 0,
	    segs = this.getSegList(),
	    i,N = segs.length;
	    
	    if (segs[N-1].pathSegTypeAsLetter.toLowerCase() == 'z') {
	    segs[N-1] = null;
	    N--;
	    }
	    
	    for (i=0;i<N-1;i++) {
	    area += segs[i].x * segs[i+1].y - segs[i+1].x * segs[i].y;   
	    }
	    
	    return area/2;
	    };
	    
	    Path.prototype.getCentroid = function() {
	    
	    var area = this.getArea(),
	    segs = this.getSegList(),
	    i,N = segs.length,
	    x=0,y=0;
	    
	    for (i=0;i<N-1;i++) {
	    x += (segs[i].x + segs[i+1].x) * (segs[i].x * segs[i+1].y - segs[i+1].x * segs[i].y);
	    y += (segs[i].y + segs[i+1].y) * (segs[i].x * segs[i+1].y - segs[i+1].x * segs[i].y);
	    }
	    
	    return { x : x/(6*area) , y : y/(6*area) };
	    };*/
	
	    //codé à partir de http://www.w3.org/TR/2003/REC-SVG11-20030114/implnote.html#ArcConversionEndpointToCenter
	    function computeCenterAndAngles(startPoint, seg) {
	
	        var rad = seg.angle * Math.PI / 180,
	            x1 = startPoint.x,
	            y1 = startPoint.y,
	            xp1 = Math.cos(rad) * (x1 - seg.x) / 2 + Math.sin(rad) * (y1 - seg.y) / 2,
	            yp1 = -Math.sin(rad) * (x1 - seg.x) / 2 + Math.cos(rad) * (y1 - seg.y) / 2,
	            r1c = Math.pow(seg.r1, 2),
	            r2c = Math.pow(seg.r2, 2),
	            xp1c = Math.pow(xp1, 2),
	            yp1c = Math.pow(yp1, 2),
	            lambda = xp1c / r1c + yp1c / r2c; //Ensure radii are large enough
	
	        if (lambda > 1) {
	            seg.r1 *= Math.sqrt(lambda);
	            seg.r2 *= Math.sqrt(lambda);
	            r1c = Math.pow(seg.r1, 2);
	            r2c = Math.pow(seg.r2, 2);
	        }
	
	        var coef = (seg.largeArcFlag === seg.sweepFlag ? -1 : 1) * Math.sqrt(Math.max(0, (r1c * r2c - r1c * yp1c - r2c * xp1c) / (r1c * yp1c + r2c * xp1c))),
	            cpx = coef * (seg.r1 * yp1) / seg.r2,
	            cpy = coef * (-seg.r2 * xp1) / seg.r1,
	            cx = Math.cos(rad) * cpx - Math.sin(rad) * cpy + (x1 + seg.x) / 2,
	            cy = Math.sin(rad) * cpx + Math.cos(rad) * cpy + (y1 + seg.y) / 2,
	            cosTheta = (xp1 - cpx) / seg.r1 / Math.sqrt(Math.pow((xp1 - cpx) / seg.r1, 2) + Math.pow((yp1 - cpy) / seg.r2, 2)),
	            theta = ((yp1 - cpy) / seg.r2 > 0 ? 1 : -1) * Math.acos(cosTheta),
	            u = { x: (xp1 - cpx) / seg.r1, y: (yp1 - cpy) / seg.r2 },
	            v = { x: (-xp1 - cpx) / seg.r1, y: (-yp1 - cpy) / seg.r2 },
	            cosDeltaTheta = (u.x * v.x + u.y * v.y) / (Math.sqrt(Math.pow(u.x, 2) + Math.pow(u.y, 2)) * Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2))),
	            deltaTheta = (u.x * v.y - u.y * v.x > 0 ? 1 : -1) * Math.acos(Math.max(-1, Math.min(1, cosDeltaTheta))) % (Math.PI * 2);
	
	        if (seg.sweepFlag === false && deltaTheta > 0) {
	            deltaTheta -= Math.PI * 2;
	        } else if (seg.sweepFlag === true && deltaTheta < 0) {
	            deltaTheta += Math.PI * 2;
	        }
	
	        seg.cx = cx;
	        seg.cy = cy;
	        seg.eta1 = theta;
	        seg.eta2 = theta + deltaTheta;
	
	        return seg;
	    }
	
	    function rationalFunction(x, c) {
	        return (x * (x * c[0] + c[1]) + c[2]) / (x + c[3]);
	    }
	
	    function estimateError(seg, etaA, etaB, bezierDegree) {
	
	        var coefs = {
	
	            degree2: {
	
	                low: [[[3.92478, -13.5822, -0.233377, 0.0128206], [-1.08814, 0.859987, 0.000362265, 0.000229036], [-0.942512, 0.390456, 0.0080909, 0.00723895], [-0.736228, 0.20998, 0.0129867, 0.0103456]], [[-0.395018, 6.82464, 0.0995293, 0.0122198], [-0.545608, 0.0774863, 0.0267327, 0.0132482], [0.0534754, -0.0884167, 0.012595, 0.0343396], [0.209052, -0.0599987, -0.00723897, 0.00789976]]],
	
	                high: [[[0.0863805, -11.5595, -2.68765, 0.181224], [0.242856, -1.81073, 1.56876, 1.68544], [0.233337, -0.455621, 0.222856, 0.403469], [0.0612978, -0.104879, 0.0446799, 0.00867312]], [[0.028973, 6.68407, 0.171472, 0.0211706], [0.0307674, -0.0517815, 0.0216803, -0.0749348], [-0.0471179, 0.1288, -0.0781702, 2.0], [-0.0309683, 0.0531557, -0.0227191, 0.0434511]]],
	
	                safety: [0.001, 4.98, 0.207, 0.0067]
	            },
	
	            degree3: {
	
	                low: [[[3.85268, -21.229, -0.330434, 0.0127842], [-1.61486, 0.706564, 0.225945, 0.263682], [-0.910164, 0.388383, 0.00551445, 0.00671814], [-0.630184, 0.192402, 0.0098871, 0.0102527]], [[-0.162211, 9.94329, 0.13723, 0.0124084], [-0.253135, 0.00187735, 0.0230286, 0.01264], [-0.0695069, -0.0437594, 0.0120636, 0.0163087], [-0.0328856, -0.00926032, -0.00173573, 0.00527385]]],
	
	                high: [[[0.0899116, -19.2349, -4.11711, 0.183362], [0.138148, -1.45804, 1.32044, 1.38474], [0.230903, -0.450262, 0.219963, 0.414038], [0.0590565, -0.101062, 0.0430592, 0.0204699]], [[0.0164649, 9.89394, 0.0919496, 0.00760802], [0.0191603, -0.0322058, 0.0134667, -0.0825018], [0.0156192, -0.017535, 0.00326508, -0.228157], [-0.0236752, 0.0405821, -0.0173086, 0.176187]]],
	
	                safety: [0.001, 4.98, 0.207, 0.0067]
	            }
	        };
	
	        var eta = 0.5 * (etaA + etaB);
	        var aCosEtaA, bSinEtaA, xA, yA, aCosEtaB, bSinEtaB, xB, yB, aCosEta, bSinEta, x, y, dx, dy;
	        var dEta, cos2, cos4, cos6, coeffs, c0, c1;
	
	        if (bezierDegree < 2) {
	
	            // start point
	            aCosEtaA = seg.r1 * Math.cos(etaA);
	            bSinEtaA = seg.r2 * Math.sin(etaA);
	            xA = seg.cx + aCosEtaA * Math.cos(seg.angleRad) - bSinEtaA * Math.sin(seg.angleRad);
	            yA = seg.cy + aCosEtaA * Math.sin(seg.angleRad) + Math.sin(seg.angleRad) * Math.cos(seg.angleRad);
	
	            // end point
	            aCosEtaB = seg.r1 * Math.cos(etaB);
	            bSinEtaB = seg.r2 * Math.sin(etaB);
	            xB = seg.cx + aCosEtaB * Math.cos(seg.angleRad) - bSinEtaB * Math.sin(seg.angleRad);
	            yB = seg.cy + aCosEtaB * Math.sin(seg.angleRad) + bSinEtaB * Math.cos(seg.angleRad);
	
	            // maximal error point
	            aCosEta = seg.r1 * Math.cos(eta);
	            bSinEta = seg.r2 * Math.sin(eta);
	            x = seg.cx + aCosEta * Math.cos(seg.angleRad) - bSinEta * Math.sin(seg.angleRad);
	            y = seg.cy + aCosEta * Math.sin(seg.angleRad) + bSinEta * Math.cos(seg.angleRad);
	
	            dx = xB - xA;
	            dy = yB - yA;
	
	            return Math.abs(x * dy - y * dx + xB * yA - xA * yB) / Math.sqrt(dx * dx + dy * dy);
	        } else {
	
	            x = seg.r2 / seg.r1;
	            dEta = etaB - etaA;
	            cos2 = Math.cos(2 * eta);
	            cos4 = Math.cos(4 * eta);
	            cos6 = Math.cos(6 * eta);
	            coeffs = x < 0.25 ? coefs['degree' + bezierDegree].low : coefs['degree' + bezierDegree].high; // select the right coeficients set according to degree and b/a
	            c0 = rationalFunction(x, coeffs[0][0]) + cos2 * rationalFunction(x, coeffs[0][1]) + cos4 * rationalFunction(x, coeffs[0][2]) + cos6 * rationalFunction(x, coeffs[0][3]);
	            c1 = rationalFunction(x, coeffs[1][0]) + cos2 * rationalFunction(x, coeffs[1][1]) + cos4 * rationalFunction(x, coeffs[1][2]) + cos6 * rationalFunction(x, coeffs[1][3]);
	
	            return rationalFunction(x, coefs['degree' + bezierDegree].safety) * seg.r1 * Math.exp(c0 + c1 * dEta);
	        }
	    }
	
	    /**
	     * Convertit un arc en courbe de bézier
	     * @param ind indice du segment arc ("A")
	     * @param bezierDegree optionnel, degré de la courbe de bézier à utiliser (3 par défaut)
	     * @param defaultFlatness optionnel, 0.5 (valeur par défaut) semble être la valeur adaptée.
	     * @returns {Path}
	     */
	    Path.prototype.arc2bez = function (ind, bezierDegree, defaultFlatness) {
	
	        defaultFlatness = defaultFlatness || 0.5;
	        bezierDegree = bezierDegree || 3;
	
	        var seg = this.getSeg(ind);
	        if (seg.pathSegTypeAsLetter !== 'A') {
	            throw "You can only comput center and angles on 'A' segments";
	        }
	
	        var startPoint = this.getCurPt(ind);
	
	        //from Luc Maisonobe www.spaceroots.org
	        seg.angleRad = seg.angle * Math.PI / 180;
	        seg.r1 = Math.abs(seg.r1);
	        seg.r2 = Math.abs(seg.r2);
	
	        // find the number of Bï¿½zier curves needed
	        var found = false,
	            i,
	            n = 1,
	            dEta,
	            etaA,
	            etaB,
	            jPath = new Path();
	
	        computeCenterAndAngles(startPoint, seg);
	
	        while (!found && n < 1024) {
	            dEta = (seg.eta2 - seg.eta1) / n;
	            if (dEta <= 0.5 * Math.PI) {
	                etaB = seg.eta1;
	                found = true;
	                for (i = 0; found && i < n; ++i) {
	                    etaA = etaB;
	                    etaB += dEta;
	                    found = estimateError(seg, etaA, etaB, bezierDegree) <= defaultFlatness;
	                }
	            }
	            n = n << 1;
	        }
	
	        dEta = (seg.eta2 - seg.eta1) / n;
	        etaB = seg.eta1;
	
	        var aCosEtaB = seg.r1 * Math.cos(etaB),
	            bSinEtaB = seg.r2 * Math.sin(etaB),
	            aSinEtaB = seg.r1 * Math.sin(etaB),
	            bCosEtaB = seg.r2 * Math.cos(etaB),
	            xB = seg.cx + aCosEtaB * Math.cos(seg.angleRad) - bSinEtaB * Math.sin(seg.angleRad),
	            yB = seg.cy + aCosEtaB * Math.sin(seg.angleRad) + bSinEtaB * Math.cos(seg.angleRad),
	            xADot,
	            yADot,
	            xBDot = -aSinEtaB * Math.cos(seg.angleRad) - bCosEtaB * Math.sin(seg.angleRad),
	            yBDot = -aSinEtaB * Math.sin(seg.angleRad) + bCosEtaB * Math.cos(seg.angleRad);
	
	        //jPath.addSeg('M',xB,yB);
	
	        var t = Math.tan(0.5 * dEta),
	            alpha = Math.sin(dEta) * (Math.sqrt(4 + 3 * t * t) - 1) / 3,
	            xA,
	            yA,
	            k;
	
	        for (i = 0; i < n; ++i) {
	
	            etaA = etaB;
	            xA = xB;
	            yA = yB;
	            xADot = xBDot;
	            yADot = yBDot;
	
	            etaB += dEta;
	            aCosEtaB = seg.r1 * Math.cos(etaB);
	            bSinEtaB = seg.r2 * Math.sin(etaB);
	            aSinEtaB = seg.r1 * Math.sin(etaB);
	            bCosEtaB = seg.r2 * Math.cos(etaB);
	            xB = seg.cx + aCosEtaB * Math.cos(seg.angleRad) - bSinEtaB * Math.sin(seg.angleRad);
	            yB = seg.cy + aCosEtaB * Math.sin(seg.angleRad) + bSinEtaB * Math.cos(seg.angleRad);
	            xBDot = -aSinEtaB * Math.cos(seg.angleRad) - bCosEtaB * Math.sin(seg.angleRad);
	            yBDot = -aSinEtaB * Math.sin(seg.angleRad) + bCosEtaB * Math.cos(seg.angleRad);
	
	            if (bezierDegree == 1) {
	                jPath.addSeg('L', xB, yB);
	            } else if (bezierDegree == 2) {
	                k = (yBDot * (xB - xA) - xBDot * (yB - yA)) / (xADot * yBDot - yADot * xBDot);
	                jPath.addSeg('Q', xB, yB, xA + k * xADot, yA + k * yADot);
	            } else {
	                jPath.addSeg('C', xB, yB, xA + alpha * xADot, yA + alpha * yADot, xB - alpha * xBDot, yB - alpha * yBDot);
	            }
	        }
	
	        return jPath;
	    };
	
	    /**
	     * Constante pour approximer les arcs
	     */
	    JSYG.kappa = 4 * (Math.sqrt(2) - 1) / 3;
	    // JSYG.kappa = 0.551915;
	
	    /**
	     * récupère les propriétés de mise en page
	     */
	    function getLayoutAttrs(elmt) {
	
	        var tab,
	            i = 0,
	            N,
	            l = {};
	
	        switch (elmt.tagName) {
	            case 'circle':
	                tab = ['cx', 'cy', 'r'];break;
	            case 'ellipse':
	                tab = ['cx', 'cy', 'rx', 'ry'];break;
	            case 'rect':
	                tab = ['x', 'y', 'rx', 'ry', 'width', 'height'];break;
	            case 'line':
	                tab = ['x1', 'y1', 'x2', 'y2'];break;
	            case 'polygon':case 'polyline':
	                tab = ['points'];break;
	            case 'path':
	                tab = ['d'];break;
	            default:
	                tab = ['x', 'y', 'width', 'height'];break;
	        }
	
	        for (N = tab.length; i < N; i++) {
	            l[tab[i]] = parseFloat(elmt.getAttribute(tab[i]) || 0);
	        }return l;
	    }
	
	    /**
	     * Convertit une forme svg en chemin
	     * @param opt optionnel, objet pouvant avoir les propriétés suivantes :
	     * <ul>
	     * 	<li>normalize : booleen, normalise ou non le chemin</li>
	     * <li>style : booleen, clone ou non les attributs de style de la forme au chemin</li>
	     * <li>transform : booleen, clone ou non l'attribut de trasnformation de la forme au chemin</li>
	     * </ul>
	     * @returns {Path}
	     */
	    JSYG.prototype.clonePath = function (opt) {
	
	        opt = opt || {};
	
	        var normalize = opt.normalize,
	            style = opt.style,
	            transform = opt.transform,
	            jPath = new Path(),
	            l = getLayoutAttrs(this[0]),
	            tag = this.getTag(),
	            kx = 0,
	            ky = 0,
	            points,
	            thisPath,
	            i,
	            N,
	            pt;
	
	        if (JSYG.svgShapes.indexOf(this.getTag()) == -1) return null;
	
	        switch (tag) {
	
	            case 'circle':
	            case 'ellipse':
	
	                if (tag === 'circle') {
	                    l.rx = l.ry = l.r;
	                }
	
	                jPath.moveTo(l.cx + l.rx, l.cy);
	
	                if (!normalize) {
	
	                    jPath.addSeg('A', l.cx - l.rx, l.cy, l.rx, l.ry, 0, 0, 1);
	                    jPath.addSeg('A', l.cx + l.rx, l.cy, l.rx, l.ry, 0, 0, 1);
	                } else {
	
	                    kx = JSYG.kappa * l.rx;
	                    ky = JSYG.kappa * l.ry;
	
	                    jPath.curveTo(l.cx + l.rx, l.cy + ky, l.cx + kx, l.cy + l.ry, l.cx, l.cy + l.ry);
	                    jPath.curveTo(l.cx - kx, l.cy + l.ry, l.cx - l.rx, l.cy + ky, l.cx - l.rx, l.cy);
	                    jPath.curveTo(l.cx - l.rx, l.cy - ky, l.cx - kx, l.cy - l.ry, l.cx, l.cy - l.ry);
	                    jPath.curveTo(l.cx + kx, l.cy - l.ry, l.cx + l.rx, l.cy - ky, l.cx + l.rx, l.cy);
	                }
	
	                jPath.close();
	
	                break;
	
	            case 'rect':
	
	                jPath.moveTo(l.x + l.rx, l.y);
	
	                if (normalize) {
	
	                    if (l.rx || l.ry) {
	                        kx = JSYG.kappa * (l.rx || 0);
	                        ky = JSYG.kappa * (l.ry || 0);
	                    }
	
	                    jPath.lineTo(l.x + l.width - l.rx, l.y);
	                    if (l.rx || l.ry) {
	                        jPath.curveTo(l.x + l.width - l.rx + kx, l.y, l.x + l.width, l.y + l.ry - ky, l.x + l.width, l.y + l.ry);
	                    }
	                    jPath.lineTo(l.x + l.width, l.y + l.height - l.ry);
	                    if (l.rx || l.ry) {
	                        jPath.curveTo(l.x + l.width, l.y + l.height - l.ry + ky, l.x + l.width - l.rx + kx, l.y + l.height, l.x + l.width - l.rx, l.y + l.height);
	                    }
	                    jPath.lineTo(l.x + l.rx, l.y + l.height);
	                    if (l.rx || l.ry) {
	                        jPath.curveTo(l.x + l.rx - kx, l.y + l.height, l.x, l.y + l.height - l.ry + ky, l.x, l.y + l.height - l.ry);
	                    }
	                    jPath.lineTo(l.x, l.y + l.ry);
	                    if (l.rx || l.ry) {
	                        jPath.curveTo(l.x, l.y + l.ry - ky, l.x + l.rx - kx, l.y, l.x + l.rx, l.y);
	                    }
	                } else {
	
	                    jPath.addSeg('H', l.x + l.width - l.rx);
	                    if (l.rx || l.ry) {
	                        jPath.addSeg('A', l.x + l.width, l.y + l.ry, l.rx, l.ry, 0, 0, 1);
	                    }
	                    jPath.addSeg('V', l.y + l.height - l.ry);
	                    if (l.rx || l.ry) {
	                        jPath.addSeg('A', l.x + l.width - l.rx, l.y + l.height, l.rx, l.ry, 0, 0, 1);
	                    }
	                    jPath.addSeg('H', l.x + l.rx);
	                    if (l.rx || l.ry) {
	                        jPath.addSeg('A', l.x, l.y + l.height - l.ry, l.rx, l.ry, 0, 0, 1);
	                    }
	                    jPath.addSeg('V', l.y + l.ry);
	                    if (l.rx || l.ry) {
	                        jPath.addSeg('A', l.x + l.rx, l.y, l.rx, l.ry, 0, 0, 1);
	                    }
	                }
	
	                jPath.addSeg('Z');
	
	                break;
	
	            case 'line':
	
	                jPath.moveTo(l.x1, l.y1).lineTo(l.x2, l.y2);
	                break;
	
	            case 'polyline':
	            case 'polygon':
	
	                points = this[0].points;
	
	                pt = points.getItem(0);
	                jPath.moveTo(pt.x, pt.y);
	
	                for (i = 1, N = points.numberOfItems; i < N; i++) {
	                    pt = points.getItem(i);
	                    jPath.lineTo(pt.x, pt.y);
	                }
	
	                if (tag === 'polygon') jPath.close();
	
	                break;
	
	            case 'path':
	
	                thisPath = new Path(this[0]);
	
	                thisPath.getSegList().forEach(function (seg) {
	                    jPath.appendSeg(seg);
	                });
	
	                if (normalize) jPath.normalize();
	
	                break;
	        }
	        /*
	        default :
	        
	        jPath.moveTo(l.x,l.y);
	        jPath.lineTo(l.x+l.width,l.y);
	        jPath.lineTo(l.x+l.width,l.y+l.height);
	        jPath.lineTo(l.x,l.y+l.height);
	        jPath.lineTo(l.x,l.y);
	        jPath.close();
	        
	        break;
	         */
	
	        if (transform) jPath.setMtx(this.getMtx());
	
	        if (style) jPath.styleClone(this[0]);
	
	        return jPath;
	    };
	
	    /**
	     * Teste si la forme passée en paramètre est à l'intérieur de l'élément.
	     * méthode de calcul un peu bourrin, gagnerait à être amélioriée.
	     * @param shape argument JSYG faisant référence à une forme SVG
	     * @returns {Boolean}
	     */
	    JSYG.prototype.isShapeInside = function (shape) {
	
	        if (!this.isClosed()) {
	            return false;
	        }
	
	        var jShape = new JSYG(shape).clonePath({ normalize: true, transform: true }).css('visibility', 'hidden').appendTo(this.parent()).mtx2attrs().toPolyline();
	        var clone = this.clonePath({ normalize: true, transform: true }).css('visibility', 'hidden').appendTo(this.parent()).mtx2attrs().toPolyline();
	
	        var test = true;
	
	        for (var i = 0, N = jShape.getLength(); i < N; i++) {
	            if (!clone.isPointInside(jShape.getPointAtLength(i))) {
	                test = false;
	                break;
	            }
	        }
	
	        jShape.remove();
	        clone.remove();
	        return test;
	    };
	
	    /**
	     * Transforme une courbe quelconque en segments de type C
	     * @returns {Path}
	     */
	    Path.prototype.toCubicCurve = function () {
	
	        this.normalize();
	
	        var segList = this.getSegList(),
	            that = this;
	
	        segList.forEach(function (seg, i) {
	
	            if (seg.pathSegTypeAsLetter != 'L') return;
	
	            var prec = segList[i - 1],
	                newseg = that.createSeg('C', seg.x, seg.y, prec.x, prec.y, seg.x, seg.y);
	
	            that.replaceSeg(i, newseg);
	        });
	
	        return this;
	    };
	
	    JSYG.Path = Path;
	
	    return Path;
	});

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(482);

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_1__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_2__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_3__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_4__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_5__;var __WEBPACK_LOCAL_MODULE_6__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_7__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_8__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_9__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;}; /*jshint forin:false, eqnull:true */(function(root,factory){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(475)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__));else if(!root.jQuery)throw new Error("jQuery is needed");else root.JSYG=factory(root.jQuery);})(undefined,function($){"use strict";var NS={html:'http://www.w3.org/1999/xhtml',svg:'http://www.w3.org/2000/svg',xlink:'http://www.w3.org/1999/xlink'},rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,rsvgLink=/^<(svg:a)\s*\/?>(?:<\/\1>|)$/,svg=window.document&&window.document.createElementNS&&window.document.createElementNS(NS.svg,'svg');function JSYG(arg,context){if(!(this instanceof JSYG))return new JSYG(arg,context);else { //pour les appels à this.constructor() dans jQuery sans mettre le merdier
	for(var n in this){if(this.hasOwnProperty(n))return new JSYG(arg,context);}}var array=null,ret;this.length=0;if(arg instanceof JSYG)array=arg;if(typeof arg==='string'){arg=arg.trim();if(arg.charAt(0)==="<"&&arg.charAt(arg.length-1)===">"&&arg.length>=3){ //cas spécial pour créer un lien svg
	if(rsvgLink.test(arg))array=[document.createElementNS(NS.svg,'a')];else {ret=rsingleTag.exec(arg);if(ret&&JSYG.svgTags.indexOf(ret[1])!==-1)array=[document.createElementNS(NS.svg,ret[1])];}}}$.merge(this,array?array:$(arg,context));return this;}JSYG.fn=JSYG.prototype=new $();JSYG.prototype.constructor=JSYG; /**
	     * Liste des propriétés SVG stylables en css
	     */JSYG.svgCssProperties=['font','font-family','font-size','font-size-adjust','font-stretch','font-style','font-variant','font-weight','direction','letter-spacing','text-decoration','unicode-bidi','word-spacing','clip','color','cursor','display','overflow','visibility','clip-path','clip-rule','mask','opacity','enable-background','filter','flood-color','flood-opacity','lighting-color','stop-color','stop-opacity','pointer-events','color-interpolation','color-interpolation-filters','color-profile','color-rendering','fill','fill-opacity','fill-rule','image-rendering','marker','marker-end','marker-mid','marker-start','shape-rendering','stroke','stroke-dasharray','stroke-dashoffset','stroke-linecap','stroke-linejoin','stroke-miterlimit','stroke-opacity','stroke-width','text-rendering','alignment-baseline','baseline-shift','dominant-baseline','glyph-orientation-horizontal','glyph-orientation-vertical','kerning','text-anchor','writing-mode']; /**
	     * Liste des balises SVG
	     */JSYG.svgTags=['altGlyph','altGlyphDef','altGlyphItem','animate','animateColor','animateMotion','animateTransform','circle','clipPath','color-profile','cursor','definition-src','defs','desc','ellipse','feBlend','feColorMatrix','feComponentTransfer','feComposite','feConvolveMatrix','feDiffuseLighting','feDisplacementMap','feDistantLight','feFlood','feFuncA','feFuncB','feFuncG','feFuncR','feGaussianBlur','feImage','feMerge','feMergeNode','feMorphology','feOffset','fePointLight','feSpecularLighting','feSpotLight','feTile','feTurbulence','filter','font','font-face','font-face-format','font-face-name','font-face-src','font-face-uri','foreignObject','g','glyph','glyphRef','hkern','image','line','linearGradient','marker','mask','metadata','missing-glyph','mpath','path','pattern','polygon','polyline','radialGradient','rect','set','stop','style','svg','switch','symbol','text','textPath','title','tref','tspan','use','view','vkern']; /**
	     * Liste des elements SVG pouvant utiliser l'attribut viewBox
	     */JSYG.svgViewBoxTags=['svg','symbol','image','marker','pattern','view']; /**
	     * Liste des balises des formes svg
	     */JSYG.svgShapes=['circle','ellipse','line','polygon','polyline','path','rect']; /**
	     * Liste des balises des conteneurs svg
	     */JSYG.svgContainers=['a','defs','glyphs','g','marker','mask','missing-glyph','pattern','svg','switch','symbol']; /**
	     * Liste des balises des éléments graphiques svg
	     */JSYG.svgGraphics=['circle','ellipse','line','polygon','polyline','path','rect','use','image','text']; /**
	     * Liste des balises des éléments textes svg
	     */JSYG.svgTexts=['altGlyph','textPath','text','tref','tspan'];JSYG.ns=NS;function isSVG(elmt){return !!elmt&&elmt.namespaceURI===NS.svg;}JSYG.prototype.isSVG=function(){return isSVG(this[0]);};JSYG.prototype.isSVGroot=function(){if(this[0].tagName!='svg')return false;var parent=new JSYG(this[0]).parent();return !!parent.length&&!parent.isSVG();}; /**
	     * récupère le nom de la balise en minuscule du premier élément de la collection (sinon html renvoie majuscules et svg minuscules)
	     * @returns {String}
	     */JSYG.prototype.getTag=function(){return this[0]&&this[0].tagName&&this[0].tagName.toLowerCase();};function xlinkHref(val){if(val==null){return (this.isSVG()?this[0].getAttributeNS(NS.xlink,'href'):this[0].href)||"";}this.each(function(){if(isSVG(this)){this.removeAttributeNS(NS.xlink,'href'); //sinon ajoute un nouvel attribut
	this.setAttributeNS(NS.xlink,'href',val);}else this.href=val;});return this;}function xlinkHrefRemove(){this.each(function(){if(isSVG(this))this.removeAttributeNS(NS.xlink,'href');else this.removeAttribute("href");});return this;}JSYG.prototype.attr=function(name,value){if(!name)return this;if((typeof name==="undefined"?"undefined":_typeof(name))=="object"){for(var n in name){this.attr(n,name[n]);}return this;}else if($.isFunction(value)){return this.each(function(j){var $this=new JSYG(this);$this.attr(name,value.call(this,j,$this.attr('href')));});}else if(name=="href")return xlinkHref.call(this,value); /*else if (name == "viewBox" || name== "viewbox"){
				
	            if (value === undefined) return this[0].getAttribute("viewBox");
				
	            return this.each(function() {
	                if (JSYG.svgViewBoxTags.indexOf(this.tagName) !=-1)
	                    this.setAttribute("viewBox",value);					
	            });
	        }*/else {if(value===undefined){if(isSVG(this[0]))return this[0].getAttribute(name);else return $.fn.attr.apply(this,arguments);}return this.each(function(){ //jQuery passe tous les attributs en minuscule, ce qui n'est pas le cas des attributs SVG
	if(isSVG(this))this.setAttribute(name,value);else $.attr(this,name,value);});}};JSYG.prototype.removeAttr=function(name){if(name=="href")return xlinkHrefRemove.call(this);else return this.each(function(){ //jQuery passe tous les attributs en minuscule, ce qui n'est pas le cas des attributs SVG
	if(isSVG(this))this.removeAttribute(name);else $.removeAttr(this,name);});};JSYG.each=function(list,callback){if((typeof list==="undefined"?"undefined":_typeof(list))=='object'&&typeof list.numberOfItems=="number"){ //SVGList
	var item;for(var i=0,N=list.numberOfItems;i<N;i++){item=list.getItem(i);if(callback.call(item,i,item)===false)return list;}return list;}else return $.each(list,callback);};JSYG.makeArray=function(list){if((typeof list==="undefined"?"undefined":_typeof(list))=='object'&&typeof list.numberOfItems=="number"){ //SVGList
	var tab=[];for(var i=0,N=list.numberOfItems;i<N;i++){tab.push(list.getItem(i));}return tab;}else return $.makeArray(list);};JSYG.prototype.offsetParent=function(arg){var tab=[];this.each(function(){var elmt,farthest=null,$this=new JSYG(this);if($this.isSVG()){if(!$this.isSVGroot()){if(arg==='farthest')elmt=this.farthestViewportElement;else elmt=this.nearestViewportElement;if(!elmt){ //les éléments non tracés (dans une balise defs) ne renvoient rien, par simplicité on renvoit la balise svg parente
	elmt=this.parentNode;while(elmt&&(arg=="farthest"||JSYG.svgViewBoxTags.indexOf(elmt.tagName)==-1)){elmt=elmt.parentNode;if(elmt.tagName=="svg")farthest=elmt;}if(farthest)elmt=farthest;}}else {elmt=this.parentNode;if(elmt.nodeName!="html"&&new JSYG(elmt).css("position")=="static")elmt=$.fn.offsetParent.call($this)[0];}}else {if(arg==='farthest')elmt=document.body;else elmt=$.fn.offsetParent.call($this)[0];}if(elmt)tab.push(elmt);});return new JSYG(tab);};var rCamelCase=/[A-Z]/g,rDash=/-([a-z])/ig,rNumNunit=/^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))([a-z%]{0,8})$/i,rNumNonPx=/^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;function dasherize(str){return str.replace(rCamelCase,function(str){return '-'+str.toLowerCase();});}function camelize(str){return str.replace(rDash,function(p,p1){return p1.toUpperCase();});}function testVal(val){return val!=null&&val!=""&&val!="auto"&&!rNumNonPx.test(val);}JSYG.prototype.css=function(prop,val){var n=null,obj,cssProp,jsProp,style;if($.isPlainObject(prop)){for(n in prop){this.css(n,prop[n]);}return this;}else if(Array.isArray(prop)){obj={};for(n=0;n<prop.length;n++){obj[prop[n]]=this.css(prop[n]);}return obj;}else if($.isFunction(val)){return this.each(function(i){var $this=new JSYG(this);$this.css(val.call(this,i,$this.css(prop)));});}cssProp=dasherize(prop);jsProp=camelize(prop);if(val==null){if(this.isSVG()){if(this[0].style){style=this[0].style;val=style[jsProp];if(!testVal(val)&&this[0].getAttribute){val=this[0].getAttribute(cssProp);if(!testVal(val)){val=$.fn.css.call(this,prop);if(!testVal(val)&&["width","height","x","y"].indexOf(cssProp)!=-1&&this[0].getBBox){val=this[0].getBBox();val=val[cssProp]+"px";}}}}}else val=$.fn.css.call(this,prop);return val;}return this.each(function(){var $this=new JSYG(this);if($this.isSVG()&&JSYG.svgCssProperties.indexOf(cssProp)!=-1)this.setAttribute(cssProp,val);$.fn.css.call($this,prop,val);});};JSYG.support={svg:svg,classList:{html:function(){var el=document.createElement('div');return el.classList&&typeof el.classList.add==='function';}(), //classList peut exister sur les éléments SVG mais etre sans effet...
	svg:function(){var el=new JSYG('<ellipse>')[0];if(!el||!el.classList||!el.classList.add)return false;el.classList.add('toto');return el.getAttribute('class')==='toto';}()}};JSYG.prototype.position=function(){if(!this.isSVG()||this.isSVGroot())return $.fn.position.call(this);var tag=this[0].tagName,box=this[0].getBBox(),dim={ //box est en lecture seule
	left:box.x,top:box.y};if(tag==='use'&&!JSYG.support.svgUseBBox){ //bbox fait alors référence à l'élément source donc il faut ajouter les attributs de l'élément lui-meme
	dim.left+=parseFloat(this.css('x'))||0;dim.top+=parseFloat(this.css('y'))||0;}return dim;};JSYG.prototype.offset=function(){var x,y,box,mtx,point,offset;if(!this.isSVG())return $.fn.offset.call(this);if(arguments[0])throw new Error("Sorry, this is not implemented");if(this[0].tagName=="svg"){if(this.isSVGroot()){x=0;y=0;}else {x=parseFloat(this.css('x'))||0;y=parseFloat(this.css('y'))||0;}box=this.attr("viewBox");if(box)this.removeAttr("viewBox");mtx=this[0].getScreenCTM();if(box)this.attr("viewBox",box);point=svg.createSVGPoint();point.x=x;point.y=y;point=point.matrixTransform(mtx);offset={left:point.x,top:point.y};}else offset=this[0].getBoundingClientRect();offset={left:Math.round(offset.left+window.pageXOffset-document.documentElement.clientLeft),top:Math.round(offset.top+window.pageYOffset-document.documentElement.clientTop)};return offset;};JSYG.prototype.addClass=function(name){var a=arguments,i,N=a.length;this.each(function(j){var $this=new JSYG(this),isSVG=$this.isSVG(),natif=JSYG.support.classList[isSVG?"svg":"html"],oldClasse,newClasse,className;oldClasse=(isSVG?this.getAttribute('class'):this.className)||'';newClasse=oldClasse;for(i=0;i<N;i++){className=a[i];if($.isFunction(className)){$this.addClass(className.call(this,j,oldClasse));continue;}else if(typeof className=='string'){className=className.trim();if(className.indexOf(' ')==-1){if(natif)this.classList.add(className);else {if(!$this.hasClass(className))newClasse=(newClasse?newClasse+' ':'')+className;}}else $this.addClass.apply($this,className.split(/\s+/));}}if(!natif&&oldClasse!=newClasse){if(isSVG)this.setAttribute('class',newClasse);else this.className=newClasse;}});return this;};JSYG.prototype.removeClass=function(name){var a=arguments,i,N=a.length;this.each(function(){var $this=new JSYG(this),isSVG=$this.isSVG(),natif=JSYG.support.classList[isSVG?"svg":"html"],oldClasse,newClasse,className,reg;oldClasse=(isSVG?this.getAttribute('class'):this.className)||'';newClasse=oldClasse;for(i=0;i<N;i++){className=a[i];if($.isFunction(className)){$this.removeClass(className.call(this,i,oldClasse));continue;}else if(typeof className=='string'){className=className.trim();if(className.indexOf(' ')==-1){if(natif)this.classList.remove(className);else {reg=new RegExp('(^|\\s+)'+className);newClasse=newClasse.replace(reg,'');}}else $this.removeClass.apply($this,className.split(/\s+/));}}if(!natif&&newClasse!=oldClasse){if(isSVG)this.setAttribute('class',newClasse);else this.className=newClasse;}return null;});return this;};JSYG.prototype.hasClass=function(name){var a=arguments,i,N=a.length,test=false;this.each(function(){var $this=new JSYG(this),isSVG=$this.isSVG(),natif=JSYG.support.classList[isSVG?"svg":"html"],classe="",className,reg;if(!natif)classe=(isSVG?this.getAttribute('class'):this.className)||'';for(i=0;i<N;i++){className=a[i];if(typeof className!=='string')continue;className=className.trim();if(className.indexOf(' ')==-1){if(natif){if(this.classList.contains(className)){test=true;return false;}}else {reg=new RegExp('(^|\\s+)'+className);if(reg.test(classe)){test=true;return false;}}}else {if($this.hasClass.apply($this,className.split(/ +/))){test=true;return false;}}}});return test;};JSYG.prototype.toggleClass=function(name){var a=arguments,i,N=a.length;this.each(function(){var $this=new JSYG(this),isSVG=$this.isSVG(),natif=JSYG.support.classList[isSVG?"svg":"html"],className;for(i=0;i<N;i++){className=a[i];if(typeof className!=='string')continue;className=className.trim();if(className.indexOf(' ')===-1){if(natif)this.classList.toggle(className);else {if($this.hasClass(className))$this.removeClass(className);else $this.addClass(className);}}else {return $this.toggleClass.apply($this,className.split(/\s+/));}}});return this;};(function(){var hookWidthOri=$.cssHooks.width,hookHeightOri=$.cssHooks.height;$.cssHooks.width={get:function get(elem,computed,extra){if(!isSVG(elem)||elem.tagName=='svg'&&elem.parentNode&&!isSVG(elem.parentNode))return hookWidthOri.get.apply(null,arguments);else try{return elem.getBBox&&elem.getBBox().width+"px";}catch(e){return null;}},set:function set(elem,value){var $elem=new JSYG(elem),width=hookWidthOri.set.apply(null,arguments),matches,i;if(!$elem.isSVG())return width;width=typeof value=="function"?value.call(elem,i,$elem.width()):value;switch(elem.tagName){case 'circle':matches=rNumNunit.exec(width);elem.setAttribute('r',matches[1]/2+matches[2]);break;case 'ellipse':matches=rNumNunit.exec(width);elem.setAttribute('rx',matches[1]/2+matches[2]);break;default:elem.setAttribute("width",width);if($elem.isSVGroot())elem.style.width=width;}return width+"px";}};$.cssHooks.height={get:function get(elem,computed,extra){if(!isSVG(elem)||elem.tagName=='svg'&&elem.parentNode&&!isSVG(elem.parentNode))return hookHeightOri.get.apply(null,arguments);else try{return elem.getBBox&&elem.getBBox().height+"px";}catch(e){return null;}},set:function set(elem,value){var $elem=new JSYG(elem),height=hookHeightOri.set.apply(null,arguments),matches,i;if(!$elem.isSVG())return height;height=typeof value=="function"?value.call(elem,i,$elem.height()):value;switch(this.tagName){case 'circle':matches=rNumNunit.exec(height);elem.setAttribute('r',matches[1]/2+matches[2]);break;case 'ellipse':matches=rNumNunit.exec(height);elem.setAttribute('ry',matches[1]/2+matches[2]);break;default:elem.setAttribute("height",height);if($elem.isSVGroot())elem.style.height=height;}return height+"px";}};})(); ////////////////////////////////////////////////////////////
	//Ces fonctions font appel dans jQuery à this.constructor, ce qui peut
	//mettre le bazar quand on surcharge les constructeurs
	JSYG.prototype.pushStack=function(elems){var ret=$.merge(new JSYG(),elems);ret.prevObject=this;ret.context=this.context;return ret;};JSYG.prototype.end=function(){return this.prevObject||new JSYG(null);}; //////////////////////////////////////////////////////////
	/**
	     * Arrondi d'un nombre avec nombre de décimales précisé
	     * @param number
	     * @param precision nombre de décimales
	     * @returns {Number}
	     */JSYG.round=function(number,precision){return Math.round(number*Math.pow(10,precision))/Math.pow(10,precision);}; /*
		JSYG.isXMLDoc = function(elem) {
			
			var $elem = new JSYG(elem);
			
			return $.isXMLDoc($elem[0]) || $elem.isSVG();
		};*/(function(){ //Récupère toutes les fonctions statiques
	for(var n in $){if($.hasOwnProperty(n)&&!JSYG.hasOwnProperty(n))JSYG[n]=$[n];} //garde une référence vers jQuery
	JSYG.$=$;})();return JSYG;});(function(root,factory){if(true)!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_LOCAL_MODULE_1__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__));else if(typeof JSYG!="undefined")factory();else root.Point=factory();})(undefined,function(){"use strict";var svg=typeof document!="undefined"&&document.createElementNS&&document.createElementNS('http://www.w3.org/2000/svg','svg');function Point(x,y){if((typeof x==="undefined"?"undefined":_typeof(x))=='object'&&y==null){y=x.y;x=x.x;}this.x=typeof x=="number"?x:parseFloat(x);this.y=typeof y=="number"?y:parseFloat(y);}Point.prototype={constructor:Point, /**
	         * Applique une matrice de transformation 
	         * @param mtx instance de JSYG.Matrix (ou SVGMatrix)
	         * @returns nouvelle instance
	         */mtx:function mtx(_mtx){if(_mtx&&(typeof _mtx==="undefined"?"undefined":_typeof(_mtx))=="object"&&_mtx.mtx)_mtx=_mtx.mtx;if(!_mtx)return new Point(this.x,this.y);var point=svg.createSVGPoint();point.x=this.x;point.y=this.y;point=point.matrixTransform(_mtx);return new this.constructor(point.x,point.y);}, /**
	         * Renvoie un objet natif SVGPoint équivalent (utile pour certaines méthodes native comme getCharNumAtPosition).
	         */toSVGPoint:function toSVGPoint(){var point=svg.createSVGPoint();point.x=this.x;point.y=this.y;return point;},toString:function toString(){return '{"x":'+this.x+',"y":'+this.y+"}";},toJSON:function toJSON(){return this.toString();}};if(typeof JSYG!="undefined")JSYG.Point=Point;return Point;});(function(root,factory){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_LOCAL_MODULE_2__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__));else {if(typeof JSYG!="undefined"){if(!JSYG.Point)throw new Error("You need JSYG.Point module");factory(JSYG.Point);}else if(typeof Point!="undefined")root.Vect=factory(Point);else throw new Error("You need JSYG.Point module");}})(undefined,function(Point){"use strict"; /**
	     * Constructeur de vecteurs.
	     * On peut passer en argument un objet avec les propriétés x et y.
	     * @param x abcisse
	     * @param y ordonnée
	     * @returns {Vect}
	     * @link http://www.w3.org/TR/SVG/coords.html#InterfaceSVGPoint
	     */function Vect(x,y){Point.apply(this,arguments);}Vect.prototype=new Point(0,0);Vect.prototype.constructor=Vect; /**
	     * Longueur du vecteur
	     * @returns {Number}
	     */Vect.prototype.length=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));}; /**
	     * Normalise le vecteur
	     * @returns {Vect} nouvelle instance de Vect
	     */Vect.prototype.normalize=function(){var length=this.length();return new Vect(this.x/length,this.y/length);}; /**
	     * Combine deux vecteurs
	     * @returns {Vect} nouvelle instance de Vect
	     */Vect.prototype.combine=function(pt,ascl,bscl){return new Vect(ascl*this.x+bscl*pt.x,ascl*this.y+bscl*pt.y);}; /**
	     * Renvoie le produit scalaire de deux vecteurs
	     * @param vect instance de Vect ou tout objet avec les propriétés x et y.
	     * @returns {Number}
	     */Vect.prototype.dot=function(vect){return this.x*vect.x+this.y*vect.y;};if(typeof JSYG!="undefined")JSYG.Vect=Vect;return Vect;});;(function(root,factory){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_2__], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_LOCAL_MODULE_3__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__));else {if(typeof JSYG!="undefined"){if(JSYG.Vect)factory(JSYG.Vect);else throw new Error("You need JSYG.Vect module");}else if(typeof Vect!="undefined")root.Matrix=factory(Vect);else throw new Error("You need Vect module");}})(undefined,function(Vect){"use strict";var svg=typeof document!="undefined"&&document.createElementNS&&document.createElementNS('http://www.w3.org/2000/svg','svg');function round(number,precision){return Math.round(number*Math.pow(10,precision))/Math.pow(10,precision);} /**
	     * Constructeur de matrices
	     * @param arg optionnel, si défini reprend les coefficients de l'argument. arg peut être
	     * une instance de SVGMatrix (DOM SVG) ou de Matrix.
	     * On peut également passer 6 arguments numériques pour définir chacun des coefficients.
	     * @returns {Matrix}
	     */function Matrix(arg){if(arg&&arguments.length===1){if(arg instanceof window.SVGMatrix)this.mtx=arg.scale(1);else if(arg instanceof Matrix)this.mtx=arg.mtx.scale(1);else if(typeof arg=="string")return Matrix.parse(arg);else throw new Error(arg+" : argument incorrect pour Matrix.");}else {this.mtx=svg&&svg.createSVGMatrix();if(arguments.length===6){var a=arguments,that=this;['a','b','c','d','e','f'].forEach(function(prop,ind){that[prop]=a[ind];});}}}Matrix.prototype={constructor:Matrix, /**
	         * Coefficients de la matrice
	         */a:null,b:null,c:null,d:null,e:null,f:null, /**
	         * Objet SVGMatrix original
	         */mtx:null, /**
	         * Transforme un point par cette matrice.
	         * On peut passer en argument un objet avec les propriétés x et y.
	         * @param x abcisse
	         * @param y ordonnée
	         * @returns {Vect}
	         */transformPoint:function transformPoint(x,y){return new Vect(x,y).mtx(this.mtx);}, /**
	         * Crée une matrice identique
	         * @returns {Matrix}
	         */clone:function clone(){return new Matrix(this.mtx);}, /**
	         * Teste si la matrice est la matrice identité (pas de transformation)
	         * @returns {Boolean}
	         */isIdentity:function isIdentity(){if(!this.mtx)return true;return this.mtx.a===1&&this.mtx.b===0&&this.mtx.c===0&&this.mtx.d===1&&this.mtx.e===0&&this.mtx.f===0;}, /**
	         * Multiplie la matrice par celle passée en argument
	         * @param mtx instance de Matrix (ou SVGMatrix) 
	         * @returns {Matrix} nouvelle instance
	         */multiply:function multiply(mtx){mtx=mtx instanceof Matrix?mtx.mtx:mtx;return new Matrix(this.mtx&&this.mtx.multiply(mtx));}, /**
	         * Inverse la matrice
	         * @returns {Matrix} nouvelle instance
	         */inverse:function inverse(){return new Matrix(this.mtx&&this.mtx.inverse());}, /**
	         * Applique un coefficient d'échelle
	         * @param scale
	         * @param originX optionnel, abcisse du point fixe lors du changement d'échelle
	         * @param originY optionnel, ordonnée du point fixe lors du changement d'échelle
	         * @returns {Matrix} nouvelle instance
	         */scale:function scale(_scale,originX,originY){originX=originX||0;originY=originY||0;return new Matrix(this.mtx&&this.mtx.translate(originX,originY).scale(_scale).translate(-originX,-originY));}, /**
	         * Applique un coefficient d'échelle horizontale / Renvoie l'échelle horizontale (appel sans argument). 
	         * @param scale
	         * @param originX optionnel, abcisse du point fixe lors du changement d'échelle
	         * @param originY optionnel, ordonnée du point fixe lors du changement d'échelle
	         * @returns {Matrix} nouvelle instance
	         */scaleX:function scaleX(scale,originX,originY){if(scale==null)return this.decompose(this.mtx).scaleX;originX=originX||0;originY=originY||0;return new Matrix(this.mtx&&this.mtx.translate(originX,originY).scaleNonUniform(scale,1).translate(-originX,-originY));}, /**
	         * Applique un coefficient d'échelle verticale / Renvoie l'échelle verticale (appel sans argument). 
	         * @param scale
	         * @param originX optionnel, abcisse du point fixe lors du changement d'échelle
	         * @param originY optionnel, ordonnée du point fixe lors du changement d'échelle
	         * @returns {Matrix} nouvelle instance
	         */scaleY:function scaleY(scale,originX,originY){if(scale==null)return this.decompose(this.mtx).scaleY;originX=originX||0;originY=originY||0;return new Matrix(this.mtx&&this.mtx.translate(originX,originY).scaleNonUniform(1,scale).translate(-originX,-originY));}, /**
	         * Applique un coefficient d'échelle non uniforme en x et en y
	         * @param scaleX échelle horizontale
	         * @param scaleY échelle verticale
	         * @param originX optionnel, abcisse du point fixe lors du changement d'échelle
	         * @param originY optionnel, ordonnée du point fixe lors du changement d'échelle
	         * @returns {Matrix} nouvelle instance
	         */scaleNonUniform:function scaleNonUniform(scaleX,scaleY,originX,originY){originX=originX||0;originY=originY||0;return new Matrix(this.mtx&&this.mtx.translate(originX,originY).scaleNonUniform(scaleX,scaleY).translate(-originX,-originY));}, /**
	         * Translation
	         * @param x translation horizontale 
	         * @param y translation verticale
	         * @returns {Matrix} nouvelle instance
	         */translate:function translate(x,y){return new Matrix(this.mtx&&this.mtx.translate(x,y));}, /**
	         * Translation horizontale / Renvoie la translation horizontale (appel sans argument). 
	         * @param x translation horizontale 
	         * @returns {Matrix} nouvelle instance
	         */translateX:function translateX(x){if(x==null)return this.decompose(this.mtx).translateX;return new Matrix(this.mtx&&this.mtx.translate(x,0));}, /**
	         * Translation verticale / Renvoie la translation verticale (appel sans argument). 
	         * @param y translation verticale
	         * @returns {Matrix} nouvelle instance
	         */translateY:function translateY(y){if(y==null)return this.decompose(this.mtx).translateY;return new Matrix(this.mtx&&this.mtx.translate(0,y));}, /**
	         * Rotation / Renvoie la rotation
	         * @param angle en degrés
	         * @param originX optionnel, abcisse du point fixe lors de la rotation
	         * @param originY optionnel, ordonnée du point fixe lors de la rotation
	         * @returns {Matrix} nouvelle instance
	         */rotate:function rotate(angle,originX,originY){if(angle==null)return this.decompose(this.mtx).rotate;originX=originX||0;originY=originY||0;var mtx=this.decompose();return new Matrix(this.mtx&&this.mtx.translate(originX,originY).scaleNonUniform(1/mtx.scaleX,1/mtx.scaleY).rotate(angle).scaleNonUniform(mtx.scaleX,mtx.scaleY).translate(-originX,-originY));},skewX:function skewX(angle,originX,originY){if(angle==null)return this.decompose(this.mtx).skew;originX=originX||0;originY=originY||0;var mtx=this.decompose();return new Matrix(this.mtx&&this.mtx.translate(originX,originY).scaleNonUniform(1/mtx.scaleX,1/mtx.scaleY).skewX(angle).scaleNonUniform(mtx.scaleX,mtx.scaleY).translate(-originX,-originY));},skewY:function skewY(angle,originX,originY){if(angle==null)return this.decompose(this.mtx).skew;originX=originX||0;originY=originY||0;var mtx=this.decompose();return new Matrix(this.mtx&&this.mtx.translate(originX,originY).scaleNonUniform(1/mtx.scaleX,1/mtx.scaleY).skewY(angle).scaleNonUniform(mtx.scaleX,mtx.scaleY).translate(-originX,-originY));}, /**
	         * Décomposition de la matrice
	         * @param originX optionnel, abcisse du point fixe lors des transformations
	         * @param originY optionnel, ordonnée du point fixe lors des transformations
	         * @returns {Object} avec les propriétés translateX,translateY,rotate,skew,scaleX,scaleY
	         * @link http://www.w3.org/TR/css3-2d-transforms/#matrix-decomposition
	         */decompose:function decompose(originX,originY){if(!this.mtx){return {translateX:0,translateY:0,rotate:0,skew:0,scaleX:1,scaleY:1};}var mtx=this.mtx;if(mtx.a*mtx.d-mtx.b*mtx.c===0)return false;var rowx=new Vect(mtx.a,mtx.b);var scaleX=rowx.length();rowx=rowx.normalize();var rowy=new Vect(mtx.c,mtx.d);var skew=rowx.dot(rowy);rowy=rowy.combine(rowx,1.0,-skew);var scaleY=rowy.length();rowy=rowy.normalize();skew/=scaleY;var rotate=Math.atan2(mtx.b,mtx.a)*180/Math.PI;var decompose={translateX:mtx.e,translateY:mtx.f,rotate:rotate,skew:skew,scaleX:scaleX,scaleY:scaleY};if(originX!=null&&originY!=null){ //pour obtenir les translations réelles (non liées aux rotations et échelles)
	mtx=mtx.translate(originX,originY).rotate(-decompose.rotate).scaleNonUniform(1/decompose.scaleX,1/decompose.scaleY).translate(-originX,-originY);decompose.translateX=mtx.e;decompose.translateY=mtx.f;}return decompose;}, /**
	         * Renvoie une matrice à partir d'un objet décrivant les transformations.
	         * @param transf objet contenant les propriétés possibles suivantes :
	         * translateX,translateY,rotate,skew,scaleX,scaleY.
	         * @param originX optionnel, abcisse du point fixe lors des transformations
	         * @param originY optionnel, ordonnée du point fixe lors des transformations
	         * @returns {Matrix}
	         * @link http://www.w3.org/TR/css3-2d-transforms/#recomposing-the-matrix
	         */recompose:function recompose(transf,originX,originY){return new Matrix(svg&&svg.createSVGMatrix().translate(transf.translateX||0,transf.translateY||0).translate(originX||0,originY||0).rotate(transf.rotate||0).skewX(transf.skew||0).scaleNonUniform(transf.scaleX||1,transf.scaleY||1).translate(-originX||0,-originY||0));}, /**
	         * Convertit la matrice en chaîne de caractères (de type attribut transform : matrix(a,b,c,d,e,f) )
	         * @param precision nombre de décimales pour les coefficients (5 par défaut)
	         * @returns {String}
	         */toString:function toString(precision){if(precision==null)precision=5;return 'matrix('+round(this.mtx.a,precision)+','+round(this.mtx.b,precision)+','+round(this.mtx.c,precision)+','+round(this.mtx.d,precision)+','+round(this.mtx.e,precision)+','+round(this.mtx.f,precision)+')';}};var regParseMtx=function(){var regNbSc="[-+]?[0-9]*\\.?[0-9]+(?:[e][-+]?[0-9]+)?",regCoef="\\s*("+regNbSc+")\\s*",regexp="matrix\\s*\\("+regCoef+','+regCoef+','+regCoef+','+regCoef+','+regCoef+','+regCoef+"\\)";return new RegExp(regexp,'i');}();Matrix.parse=function(str){var coefs=regParseMtx.exec(str);if(!coefs)throw new Error(str+" n'est pas une chaîne valide pour représenter une matrice");return new Matrix(coefs[1],coefs[2],coefs[3],coefs[4],coefs[5],coefs[6]);};if(Object.defineProperty){try{['a','b','c','d','e','f'].forEach(function(coef){Object.defineProperty(Matrix.prototype,coef,{get:function get(){return this.mtx[coef];},set:function set(val){this.mtx[coef]=val;}});});}catch(e){}}if(typeof JSYG!="undefined")JSYG.Matrix=Matrix;return Matrix;});(function(root,factory){if(true)!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_LOCAL_MODULE_4__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__));else if(typeof JSYG!="undefined")factory();else root.strUtils=factory();})(undefined,function(){function regexpTag(tag){return new RegExp("<("+tag+")\\b[^>]*>([\\s\\S]*?)<\\/\\1>","gi");};var rTags=/<\/?([a-z]\w*)\b[^>]*>/gi;var strUtils={ /**
	        * Encode une chaîne en base 64.
	        * @param input chaîne à encoder
	        * @returns {String}
	        */base64encode:function base64encode(input){return window.btoa(this.utf8encode(input));}, /**
	         * Décode une chaîne codée en base 64.
	         * @param input chaîne à décoder
	         * @returns {String}
	         */base64decode:function base64decode(input){return this.utf8decode(window.atob(input));}, /**
	         * Formate une chaîne pour transmission par chaîne de requête
	         * @param str chaîne à formater
	         * @returns {String}
	         */urlencode:function urlencode(str){return window.encodeURIComponent(str);}, /**
	         * Decode une chaîne après transmission par chaîne de requête
	         * @param str chaîne à décoder
	         * @returns {String}
	         */urldecode:function urldecode(str){return window.decodeURIComponent(str);}, /**
	         * Encodage d'une chaîne au format UTF8
	         * @param string
	         * @returns {String}
	         */utf8encode:function utf8encode(string){ //Johan Sundstr�m
	return window.unescape(this.urlencode(string));}, /**
	         * Décodage d'une chaîne UTF8 en ISO-8859-1
	         * @param string
	         * @returns {String}
	         */utf8decode:function utf8decode(string){ //Johan Sundstr�m
	return this.urldecode(window.escape(string));}, /**
	         * Détecte si la chaîne est encodée en UTF8 ou non
	         * @param string
	         * @returns {Boolean}
	         * @link https://github.com/wayfind/is-utf8
	         */isUtf8:function isUtf8(string){var i=0;while(i<string.length){if( // ASCII
	string[i]==0x09||string[i]==0x0A||string[i]==0x0D||0x20<=string[i]&&string[i]<=0x7E){i+=1;continue;}if( // non-overlong 2-byte
	0xC2<=string[i]&&string[i]<=0xDF&&0x80<=string[i+1]&&string[i+1]<=0xBF){i+=2;continue;}if( // excluding overlongs
	string[i]==0xE0&&0xA0<=string[i+1]&&string[i+1]<=0xBF&&0x80<=string[i+2]&&string[i+2]<=0xBF|| // straight 3-byte
	(0xE1<=string[i]&&string[i]<=0xEC||string[i]==0xEE||string[i]==0xEF)&&0x80<=string[i+1]&&string[i+1]<=0xBF&&0x80<=string[i+2]&&string[i+2]<=0xBF|| // excluding surrogates
	string[i]==0xED&&0x80<=string[i+1]&&string[i+1]<=0x9F&&0x80<=string[i+2]&&string[i+2]<=0xBF){i+=3;continue;}if( // planes 1-3
	string[i]==0xF0&&0x90<=string[i+1]&&string[i+1]<=0xBF&&0x80<=string[i+2]&&string[i+2]<=0xBF&&0x80<=string[i+3]&&string[i+3]<=0xBF|| // planes 4-15
	0xF1<=string[i]&&string[i]<=0xF3&&0x80<=string[i+1]&&string[i+1]<=0xBF&&0x80<=string[i+2]&&string[i+2]<=0xBF&&0x80<=string[i+3]&&string[i+3]<=0xBF|| // plane 16
	string[i]==0xF4&&0x80<=string[i+1]&&string[i+1]<=0x8F&&0x80<=string[i+2]&&string[i+2]<=0xBF&&0x80<=string[i+3]&&string[i+3]<=0xBF){i+=4;continue;}return false;}return true;}, /**
	         * Met la première lettre de la chaîne en majuscule
	         * @param str chaîne à analyser
	         * @returns {String}
	         */ucfirst:function ucfirst(str){return str.charAt(0).toUpperCase()+str.substr(1);}, /**
	         * Met la première lettre de la chaîne en minuscule
	         * @param str chaîne à analyser
	         * @returns {String}
	         */lcfirst:function lcfirst(str){return str.charAt(0).toLowerCase()+str.substr(1);}, /**
	         * Met la première lettre de chaque mot en majuscule
	         * @param str chaîne à analyser
	         * @returns {String}
	         */ucwords:function ucwords(str){return str.replace(/\b[a-z]/g,function(s){return s.toUpperCase();});}, /**
	         * Retire les accents de la chaîne
	         * @param str chaîne à analyser
	         * @returns {String}
	         */stripAccents:function stripAccents(str){var accent=[/[\300-\306]/g,/[\340-\346]/g, // A, a
	/[\310-\313]/g,/[\350-\353]/g, // E, e
	/[\314-\317]/g,/[\354-\357]/g, // I, i
	/[\322-\330]/g,/[\362-\370]/g, // O, o
	/[\331-\334]/g,/[\371-\374]/g, // U, u
	/[\321]/g,/[\361]/g, // N, n
	/[\307]/g,/[\347]/g // C, c
	];var noaccent=['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];for(var i=0;i<accent.length;i++){str=str.replace(accent[i],noaccent[i]);}return str;}, /**
	         * Retire les balises de la chaîne
	         * @param str chaîne à analyser
	         * @param allowed balise autorisée. Le nombre d'arguments n'est pas limité.
	         * @returns {String}
	         * @example JSYG.stripTags('&lt;tata&gt;toto&lt;/tata&gt;','br','span') == 'toto';
	         * @see stripTagsR
	         */stripTags:function stripTags(str,allowed){allowed=slice.call(arguments,1);return str.replace(rTags,function(s,s1){return allowed.indexOf(s1.toLowerCase())!==-1?s:'';});}, /**
	         * Retire les balises de la chaîne.
	         * A la différence de stripTags, cette méthode fonction avec une liste noire plutôt qu'une liste blanche.
	         * @param str chaîne à analyser
	         * @param forbidden balise à retirer. Le nombre d'arguments n'est pas limité.
	         * @returns {String}
	         * @see stripTags
	         */stripTagsR:function stripTagsR(str,forbidden){forbidden=slice.call(arguments,1);return str.replace(rTags,function(s,s1){return forbidden.indexOf(s1.toLowerCase())!==-1?'':s;});}, /**
	         * Retire les attributs des balises
	         * @param str chaîne à analyser 
	         * @returns {String}
	         */stripAttributes:function stripAttributes(str){return str.replace('/<([a-z]\w*)\b[^>]*>/i',function(s){return '<'+s+'>';});}, /**
	         * Récupère le(s) contenu(s) d'une balise donnée sous forme de tableau de chaînes
	         * @param str chaîne à analyser 
	         * @param tag nom de la balise dont on veut récupèrer le contenu
	         * @returns {Array} chaque élément du tableau est le contenu d'une balise tag
	         */getTagContent:function getTagContent(str,tag){var regexp=regexpTag(tag),occ=str.match(regexp),i,N;if(occ===null)return null;for(i=0,N=occ.length;i<N;i++){occ[i]=occ[i].replace(regexp,function(str,p1){return p1;});}return occ;}, /**
	         * Retire les balises et leur contenu
	         * @param {String} str chaîne à analyser 
	         * @param {String} tag nom de la balise à supprimer
	         * @param {Array} content tableau qui sera rempli par le contenu des balises trouvées (les tableaux passent par référence)
	         * @@returns {String}
	         */stripTagAndContent:function stripTagAndContent(str,tag,content){return str.replace(regexpTag(tag),function(str,p1,p2){content&&content.push(p2);return '';});}, /**
	         * Transforme la chaîne en chaîne de type camelCase (style javascript, les majuscules remplacent les espaces/tirets/underscores)
	         * @param str chaîne à analyser 
	         * @returns {String}
	         */camelize:function camelize(str){return str.replace(/(-|_|\s+)([a-z])/ig,function(str,p1,p2){return p2.toUpperCase();});}, /**
	         * Remplace les majuscules d'une chaîne camelCase par un tiret
	         * @param str chaîne à analyser 
	         * @returns {String}
	         */dasherize:function dasherize(str){return str.replace(/[A-Z]/g,function(str){return '-'+str.toLowerCase();});}};if(typeof JSYG!="undefined"){for(var n in strUtils){JSYG[n]=strUtils[n];}}return strUtils;}); /*jshint forin:false, eqnull:true*/ /* globals JSYG,$,Promise*/(function(root,factory){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(475),__WEBPACK_LOCAL_MODULE_0__,__WEBPACK_LOCAL_MODULE_3__,__WEBPACK_LOCAL_MODULE_2__,__WEBPACK_LOCAL_MODULE_1__,__WEBPACK_LOCAL_MODULE_4__], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_LOCAL_MODULE_5__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__));else if(root.JSYG&&root.jQuery){if(JSYG.Matrix&&JSYG.Vect&&JSYG.Point&&JSYG.utf8encode)factory(jQuery,JSYG,JSYG.Matrix,JSYG.Vect,JSYG.Point,JSYG);else throw new Error("Missing dependency");}else throw new Error("JSYG is needed");})(undefined,function($,JSYG,Matrix,Vect,Point,strUtils){"use strict";var svg=JSYG.support.svg; /**
	     * récupère ou fixe la valeur d'un attribut (au sens xml) dans un espace de noms donné.<br/><br/>
	     * Pour définir rapidement plusieurs attributs, on peut passer en paramêtre un objet dont les clés sont les noms des attributs et les valeurs les valeurs à affecter.<br/> <br/>
	     * @param ns espace de nom.
	     * @param attr nom de l'attribut.
	     * @param val si définie, fixe la valeur de l'attribut.
	     * <br/><br/>
	     * @example :<ul>
	     * <li><strong>jsynObjet.attrNS('http://www.w3.org/2000/svg','name')</strong> : renvoie l'attribut name de l'élément.</li>
	     * <li><strong>jsynObjet.attr('name','toto')</strong> : définit l'attribut name de l'élément.</li> 
	     * </ul>
	     * @returns {String,JSYG} valeur de l'attribut si val est indéfini, l'objet JSYG lui même si la méthode est appelée pour définir des valeurs.
	     */JSYG.prototype.attrNS=function(ns,attr,val){if(ns==null||attr==null)return this;if((typeof attr==="undefined"?"undefined":_typeof(attr))=='object'){for(var n in attr){this.attrNS(ns,n,attr[n]);}return this;}if(val==null)return this[0].getAttributeNS(ns,attr);else {this.each(function(){this.setAttributeNS(ns,attr,val);});}return this;}; /**
	     * Suppression d'un ou plusieurs attributs des éléments de la collection dans un espace de noms donné.
	     * @param ns espace de nom.
	     * @param attr nom de l'attribut. Le nombre d'arguments n'est pas limité.
	     * @returns {JSYG}
	     */JSYG.prototype.removeAttrNS=function(ns,attr){var a=arguments,i,N=a.length;this.each(function(){for(i=1;i<N;i++){this.removeAttributeNS(ns,a[i]);}});return this;}; /**
	     * Récupère ou définit le lien de l'élément DOM. Cette méthode est utile pour harmoniser le html et le svg.
	     * Cette méthode permet de ce fait de définir l'attribut src des balises img.
	     * @param val si défini, fixe la valeur du lien.
	     * @returns {String,JSYG} valeur du lien si val est indéfini, l'objet JSYG lui-même sinon.
	     */JSYG.prototype.href=function(val){var srcTags=['img','iframe','video','audio'],tag=this.getTag(),attr=!this.isSVG()&&srcTags.indexOf(tag)!=-1?"src":"href";return arguments.length>=1?this.attr(attr,val):this.attr(attr);}; /**
	     * Calcule la distance entre deux points
	     * @param pt1 Point ou objet quelconque avec les propriétés x et y
	     * @param pt2 Point ou objet quelconque avec les propriétés x et y
	     * @return {Number} distance en pixels (non arrondi) 
	     */JSYG.distance=function(pt1,pt2){return Math.sqrt(Math.pow(pt1.x-pt2.x,2)+Math.pow(pt1.y-pt2.y,2));}; /**
	     * Renvoie un nombre borné aux limites spécifiées
	     * @param nb nombre
	     * @param min limite inférieure
	     * @param max limite supérieure
	     * @returns {Number}
	     * @example
	     * JSYG.clip(5,0,10) === 5;
	     * JSYG.clip(50,0,10) === 10;
	     * JSYG.clip(-50,0,10) === 0;
	     */JSYG.clip=function(nb,min,max){return nb<min?min:nb>max?max:nb;}; /**
	     * Execute une fonction sur le noeud et récursivement sur tous les descendants (nodeType==1 uniquement)
	     * @param fct le mot clé this fait référence au noeud courant. Si la fonction renvoie false, on sort de la boucle
	     * @param node noeud parent
	     */JSYG.walkTheDom=function(fct,node){if(fct.call(node)===false)return false;node=node.firstChild;while(node){if(node.nodeType==1){if(JSYG.walkTheDom(fct,node)===false)return false;}node=node.nextSibling;}}; /**
	     * exécute une fonction sur la collection et récursivement sur tous les descendants
	     * @param fct le mot clé this fait référence au noeud courant. Si la fonction renvoie false, on sort de la boucle
	     * @returns {JSYG}
	     */JSYG.prototype.walkTheDom=function(fct){this.each(function(){return JSYG.walkTheDom(fct,this);});return this;}; /**
	     * Teste si le premier élément de la collection est enfant de l'élément passé en argument
	     * @param arg argument JSYG
	     * @returns {Boolean}
	     */JSYG.prototype.isChildOf=function(arg){var node=new JSYG(arg)[0],parent=this[0].parentNode;while(parent){if(parent===node)return true;parent=parent.parentNode;}return false;}; /**
	     * récupère les coordonnées du centre de l'élément.
	     * @param arg optionnel, 'screen','page' ou élément référent (voir JSYG.prototype.getDim pour les détails)
	     * @returns {Vect}
	     * @see JSYG.prototype.getDim
	     */JSYG.prototype.getCenter=function(arg){var rect=this.getDim(arg);return new Vect(rect.x+rect.width/2,rect.y+rect.height/2);}; /**
	     * définit les coordonnées du centre de l'élément par rapport au parent positionné, avant transformation.
	     * On peut aussi passer en argument un objet contenant les propriétés x et y.
	     * Il est possible de ne passer qu'une valeur sur les deux (ou null) pour centrer horizontalement ou verticalement uniquement.
	     * @param x abcisse
	     * @param y ordonnée
	     * @returns {JSYG}
	     */JSYG.prototype.setCenter=function(x,y){if(x!=null&&(typeof x==="undefined"?"undefined":_typeof(x))==='object'&&y==null){y=x.y;x=x.x;}this.each(function(){var $this=new JSYG(this),rect=$this.getDim(),dim={};if(x!=null)dim.x=x-rect.width/2;if(y!=null)dim.y=y-rect.height/2;$this.setDim(dim);});return this;}; /**
	     * récupère ou fixe les attributs de la viewBox d'un élément SVG (qui dispose de cet attribut, essentiellement les balise &lt;svg&gt;)
	     * @param dim optionnel, objet, si défini fixe les attributs
	     * @returns {JSYG} si dim est défini, objet avec propriétés x,y,width,height
	     */JSYG.prototype.viewBox=function(dim){var viewBoxElmts=["svg","symbol","image","marker","pattern","view"],val;this.each(function(){if(viewBoxElmts.indexOf(this.tagName)==-1)throw new Error(this.tagName+" is not a valid element.");var viewBoxInit=this.viewBox.baseVal,viewBox=viewBoxInit||{},$this=new JSYG(this);if(dim==null){val={x:viewBox.x||0,y:viewBox.y||0,width:viewBox.width||parseFloat($this.css('width')),height:viewBox.height||parseFloat($this.css('height'))};return false;}else {for(var n in dim){if(["x","y","width","height"].indexOf(n)!=-1)viewBox[n]=dim[n];}}if(!viewBoxInit)this.setAttribute('viewBox',viewBox.x+" "+viewBox.y+" "+viewBox.width+" "+viewBox.height);});return val?val:this;}; /**
	     * Style par défaut des éléments html
	     */var defaultStyles={}; /**
	     * Renvoie les propriétés de style par défaut du 1er élément de la collection
	     * @returns {Object}
	     */JSYG.prototype.getDefaultStyle=function(){var tag=this.getTag(),elmt,style,i,N,prop;if(tag=='a'&&this.isSVG())tag='svg:a';if(!defaultStyles[tag]){defaultStyles[tag]={};elmt=new JSYG('<'+tag+'>');style=getComputedStyle(elmt[0]);for(i=0,N=style.length;i<N;i++){prop=style.item(i);defaultStyles[tag][prop]=style.getPropertyValue(prop);}}return defaultStyles[tag];}; /**
	     * Ajoute tous les éléments de style possiblement définis en css comme attributs.<br/>
	     * Cela est utile en cas d'export SVG, afin d'avoir le style dans les balises et non dans un fichier à part.<br/>
	     * @param recursive si true applique la méthode à tous les enfants.
	     * @returns {JSYG}
	     */JSYG.prototype.style2attr=function(recursive){var href=window.location.href.replace('#'+window.location.hash,'');function fct(){var jThis=new JSYG(this),isSVG=jThis.isSVG();if(isSVG&&JSYG.svgGraphics.indexOf(this.tagName)==-1)return;var style=getComputedStyle(this),defaultStyle=jThis.getDefaultStyle(),styleAttr='',name,value,i=0,N=style.length;for(;i<N;i++){name=style.item(i);if(isSVG&&JSYG.svgCssProperties.indexOf(name)===-1)continue;value=style.getPropertyValue(name);if(defaultStyle[name]!=value){ //la fonction getPropertyValue renvoie url("http://monsite.fr/toto/#anchor") au lieu de url(#anchor)
	if(value.indexOf(href)!=-1)value=value.replace(href,'').replace(/"|'/g,'');if(isSVG)this.setAttribute(name,value);else styleAttr+=name+':'+value+';';}}if(!isSVG)this.setAttribute('style',styleAttr);}if(recursive)this.walkTheDom(fct);else fct.call(this[0]);return this;}; /**
	     * Ajoute une règle de style css
	     * @param str chaîne css
	     * @example
	     * JSYG.addStyle(".maClass { font-style:italic }");
	     */JSYG.addStyle=function(str){var head=document.getElementsByTagName('head').item(0),style=document.createElement('style'),rules=document.createTextNode(str);style.type='text/css';if(style.styleSheet)style.styleSheet.cssText=rules.nodeValue;else style.appendChild(rules);head.appendChild(style);};JSYG.getStyleRules=function(){var css='';function addStyle(rule){css+=rule.cssText;}JSYG.makeArray(document.styleSheets).forEach(function(styleSheet){JSYG.makeArray(styleSheet.cssRules||styleSheet.rules).forEach(addStyle);});return css;}; /**
	     * Donne la valeur calculée finale de toutes les propriétés CSS sur le premier élément de la collection.
	     * @returns {Object} objet CSSStyleDeclaration
	     */function getComputedStyle(node){return window.getComputedStyle&&window.getComputedStyle(node)||node.currentStyle;} /**
	     * Retire l'attribut de style "style" + tous les attributs svg concernant le style.
	     */JSYG.prototype.styleRemove=function(){this.each(function(){var $this=new JSYG(this);$this.removeAttr('style');if($this.isSVG())JSYG.svgCssProperties.forEach(function(attr){$this.removeAttr(attr);});});return this;}; /**
	     * Sauvegarde le style pour être rétabli plus tard par la méthode styleRestore
	     * @param id identifiant de la sauvegarde du style (pour ne pas interférer avec d'autres styleSave)
	     * @returns {JSYG}
	     */JSYG.prototype.styleSave=function(id){var prop="styleSaved";if(id)prop+=id;this.each(function(){var $this=new JSYG(this),attrs={},style;if($this.isSVG()){JSYG.svgCssProperties.forEach(function(attr){var val=$this.attr(attr);if(val!=null)attrs[attr]=val;});}style=$this.attr('style');if((typeof style==="undefined"?"undefined":_typeof(style))=='object')style=JSON.stringify(style); //IE
	attrs.style=style;$this.data(prop,attrs);});return this;}; /**
	     * Restaure le style préalablement sauvé par la méthode styleSave.
	     * Attention avec des éléments html et Google Chrome la méthode est asynchrone.
	     * @param id identifiant de la sauvegarde du style (pour ne pas interférer avec d'autres styleSave)
	     * @returns {JSYG}
	     */JSYG.prototype.styleRestore=function(id){var prop="styleSaved";if(id)prop+=id;this.each(function(){var $this=new JSYG(this),attrs=$this.data(prop),style;if(!attrs)return;$this.styleRemove();if($this.isSVG())$this.attr(attrs);else {try{style=JSON.parse(attrs.style);for(var n in style){if(style[n])this.style[n]=style[n];}}catch(e){$this.attr('style',attrs.style);}}$this.removeData(prop);});return this;}; /**
	     * Applique aux éléments de la collection tous les éléments de style de l'élément passé en argument.
	     * @param elmt argument JSYG
	     * @returns {JSYG}
	     */JSYG.prototype.styleClone=function(elmt){elmt=new JSYG(elmt);var foreignStyle=getComputedStyle(elmt[0]),name,value,i=0,N=foreignStyle.length;this.styleRemove();this.each(function(){var $this=new JSYG(this),ownStyle=getComputedStyle(this),isSVG=$this.isSVG();for(i=0;i<N;i++){name=foreignStyle.item(i);if(isSVG&&JSYG.svgCssProperties.indexOf(name)===-1)continue;value=foreignStyle.getPropertyValue(name); //priority = foreignStyle.getPropertyPriority(name);
	if(ownStyle.getPropertyValue(name)!==value){ //ownStyle.setProperty(name,value,priority); //-> Modifications are not allowed for this document (?)
	$this.css(name,value);}}});return this;};function addTransform(rect,mtx){if(!mtx.isIdentity()){var hg=new Vect(0,0).mtx(mtx),hd=new Vect(rect.width,0).mtx(mtx),bg=new Vect(0,rect.height).mtx(mtx),bd=new Vect(rect.width,rect.height).mtx(mtx),xmin=Math.min(hg.x,hd.x,bg.x,bd.x),ymin=Math.min(hg.y,hd.y,bg.y,bd.y),xmax=Math.max(hg.x,hd.x,bg.x,bd.x),ymax=Math.max(hg.y,hd.y,bg.y,bd.y);return {x:Math.round(xmin+rect.x),y:Math.round(ymin+rect.y),width:Math.round(xmax-xmin),height:Math.round(ymax-ymin)};}else return rect;}function getPos(type,node,ref){var cpt=0,obj=node;do {cpt+=obj['offset'+type];}while((obj=obj.offsetParent)&&obj!==ref);return cpt;}function swapDisplay(jNode,callback){var returnValue;jNode.styleSave('swapDisplay');jNode.css({"visibility":"hidden","position":"absolute","display":jNode.originalDisplay()});try{returnValue=callback.call(jNode);}catch(e){jNode.styleRestore('swapDisplay');throw new Error(e);}jNode.styleRestore('swapDisplay');return returnValue;} /**
	     * Display par défaut des éléments
	     */var elementDisplay={}; /**
	     * Renvoie le display par défaut de l'élément. Tir� de zepto.js. Peut mieux faire.
	     */function defaultDisplay(obj){var element,display,nodeName=obj.getTag(),isSVG=obj.isSVG(),parent;if(!elementDisplay[nodeName]){parent=isSVG?new JSYG('<svg>').appendTo('body'):'body';element=new JSYG('<'+nodeName+'>').appendTo(parent);display=element.css('display');if(isSVG)parent.remove();else element.remove();if(display=="none")display="block";elementDisplay[nodeName]=display;}return elementDisplay[nodeName];}JSYG.prototype.originalDisplay=function(_value){var prop="originalDisplay";if(_value==null)return this.data(prop)||defaultDisplay(this);else {this.data(prop,_value);return this;}}; /**
	     * Récupération des dimensions de l'élément sous forme d'objet avec les propriétés x,y,width,height.
	     * Pour les éléments HTML, Les dimensions prennent en compte padding, border mais pas margin.<br/><br/>
	     * Pour les éléments SVG (balises &lt;svg&gt; comprises), ce sont les dimensions sans tenir compte de l'épaisseur du tracé (stroke-width)
	     * @param type
	     * <ul>
	     * <li>null : dimensions avant toute transformation par rapport au parent positionné (viewport pour les éléments svg)</li>
	     * <li>"page" : dimensions dans la page</li>
	     * <li>"screen" : dimensions à l'écran</li>
	     * <li>objet DOM : dimensions relativement à cet objet</li>
	     * @returns {Object} objet avec les propriétés x,y,width,height
	     */JSYG.prototype.getDim=function(type){var node=this[0],dim=null,parent,box,boundingRect,hg,hd,bg,bd,x,y,width,height,viewBox,jWin,ref,dimRef,mtx,tag=this[0].tagName;if(node.nodeType==1&&this.css("display")=="none"){return swapDisplay(this,function(){return this.getDim();});}if($.isWindow(node)){dim={x:node.pageXOffset||document.documentElement.scrollLeft,y:node.pageYOffset||document.documentElement.scrollTop,width:node.document.documentElement.clientWidth,height:node.document.documentElement.clientHeight};}else if(node.nodeType===9){dim={x:0,y:0,width:Math.max(node.documentElement.scrollWidth,node.documentElement.clientWidth,node.body&&node.body.scrollWidth||0),height:Math.max(node.documentElement.scrollHeight,node.documentElement.clientHeight,node.body&&node.body.scrollHeight||0)};}else if(!node.parentNode)throw new Error(node+" : Il faut d'abord attacher l'élément au DOM.");else if(!type){if(this.isSVG()){if(tag=='svg'){parent=this.parent();if(parent.isSVG()){dim={x:parseFloat(this.attr('x'))||0,y:parseFloat(this.attr('y'))||0,width:parseFloat(this.attr('width')),height:parseFloat(this.attr('height'))};}else {if(parent.css('position')=='static')parent=parent.offsetParent();dim=this.getDim(parent);}}else {try{box=this[0].getBBox();}catch(e){return null;}dim={ //box est en lecture seule
	x:box.x,y:box.y,width:box.width,height:box.height};if(tag==='use'&&!JSYG.support.svgUseBBox){ //bbox fait alors référence à l'élément source donc il faut ajouter les attributs de l'élément lui-même
	dim.x+=parseFloat(this.attr('x'))||0;dim.y+=parseFloat(this.attr('y'))||0;} //}
	}}else {dim=this.getDim(this.offsetParent());}}else if(type==='page'){if(tag==='svg'){x=parseFloat(this.css("left")||this.attr('x'))||0;y=parseFloat(this.css("top")||this.attr('y'))||0;width=parseFloat(this.css("width"));height=parseFloat(this.css("height"));viewBox=this.attr("viewBox");if(viewBox)this.removeAttr("viewBox");mtx=this.getMtx('screen');if(viewBox)this.attr("viewBox",viewBox);hg=new Vect(x,y).mtx(mtx);bd=new Vect(x+width,y+height).mtx(mtx);boundingRect={left:hg.x,top:hg.y,width:bd.x-hg.x,height:bd.y-hg.y};}else {if(this.isSVG()&&this.rotate()===0){ //sans rotation, cette méthode est meilleure car getBoundingClientRect
	//tient compte de l'épaisseur de tracé (stroke-width)
	mtx=this[0].getScreenCTM();box=this.getDim();hg=new Vect(box.x,box.y).mtx(mtx);bd=new Vect(box.x+box.width,box.y+box.height).mtx(mtx);boundingRect={left:hg.x,right:bd.x,top:hg.y,bottom:bd.y};}else boundingRect=node.getBoundingClientRect();}jWin=new JSYG(window);x=boundingRect.left+jWin.scrollLeft()-document.documentElement.clientLeft;y=boundingRect.top+jWin.scrollTop()-document.documentElement.clientTop;width=boundingRect.width!=null?boundingRect.width:boundingRect.right-boundingRect.left;height=boundingRect.height!=null?boundingRect.height:boundingRect.bottom-boundingRect.top;dim={x:x,y:y,width:width,height:height};if(!this.isSVG()&&JSYG.support.addTransfForBoundingRect){dim=addTransform(dim,this.getMtx());} //FF
	}else if(type==='screen'||$.isWindow(type)||type instanceof $&&$.isWindow(type[0])){jWin=new JSYG(window);dim=this.getDim('page');dim.x-=jWin.scrollLeft();dim.y-=jWin.scrollTop();}else if(type.nodeType!=null||type instanceof $){ref=type.nodeType!=null?type:type[0];if(this.isSVG()){if(this.isSVGroot()){dimRef=new JSYG(ref).getDim('page');dim=this.getDim('page');dim.x-=dimRef.x;dim.y-=dimRef.y;}else {box=this.getDim();mtx=this.getMtx(ref);if(!mtx.isIdentity()){hg=new Vect(box.x,box.y).mtx(mtx);hd=new Vect(box.x+box.width,box.y).mtx(mtx);bg=new Vect(box.x,box.y+box.height).mtx(mtx);bd=new Vect(box.x+box.width,box.y+box.height).mtx(mtx);x=Math.min(hg.x,hd.x,bg.x,bd.x);y=Math.min(hg.y,hd.y,bg.y,bd.y);width=Math.max(hg.x,hd.x,bg.x,bd.x)-x;height=Math.max(hg.y,hd.y,bg.y,bd.y)-y;dim={x:x,y:y,width:width,height:height};}else {dim=box;}}}else {width=node.offsetWidth;height=node.offsetHeight;if(!width&&!height){width=parseFloat(this.css('border-left-width')||0)+parseFloat(this.css('border-right-width')||0);height=parseFloat(this.css('border-top-width')||0)+parseFloat(this.css('border-top-width')||0);if(node.clientWidth||node.clientHeight){width+=node.clientWidth;height+=node.clientHeight;}else if(node.width||node.height){width+=parseFloat(this.css('padding-left')||0)+parseFloat(this.css('padding-right')||0)+node.width;height+=parseFloat(this.css('padding-top')||0)+parseFloat(this.css('padding-bottom')||0)+node.height;height+=node.clientHeight;}}dim={x:getPos('Left',node,ref),y:getPos('Top',node,ref),width:width,height:height};}}else throw new Error(type+' : argument incorrect');return dim;}; /**
	     * Permet de savoir s'il s'agit d'une balise &lt;image&gt; faisant référence à  du contenu svg, car auquel cas elle
	     * se comporte plus comme un conteneur (du moins avec firefox). 
	     */function isSVGImage(elmt){return elmt[0].tagName=='image'&&/(image\/svg\+xml|\.svg$)/.test(elmt.href());}function parseDimArgs(args,opt){['x','y','width','height'].forEach(function(prop,i){if(args[i]!=null){opt[prop]=args[i];}});}function getPropNum(elmt,prop){var val=elmt.css(prop);if(!val)return 0;else if(val!="auto")return parseFloat(val);else if(prop=="left"||prop=="top")return elmt.position()[prop];else return 0;} /**
	     * définit les dimensions de la collection par rapport au parent positionné, avant transformation.
	     * Pour les éléments HTML, Les dimensions prennent en compte padding, border mais pas margin.<br/><br/>
	     * Pour les éléments SVG (balises &lt;svg&gt; comprises), ce sont les dimensions sans tenir compte de l'épaisseur du tracé (stroke-width).<br/><br/>
	     * En argument, au choix :
	     * <ul>
	     * <li>1 argument : objet avec les propriétés parmi x,y,width,height.</li>
	     * <li>2 arguments : nom de la propriété parmi x,y,width,height et valeur.</li>
	     * <li>4 arguments : valeurs de x,y,width et height. On peut passer null pour ignorer une valeur.</li>
	     * </ul>
	     * @returns {JSYG}
	     * @example <pre> new JSYG('#monElement').setDim({x:50,y:50,width:250,height:300});
	     * 
	     * //équivalent à :
	     * new JSYG('#monElement').setDim("x",50).setDim("y",50).setDim("width",250).setDim("height",300);
	     * 
	     * //équivalent à :
	     * new JSYG('#monElement').setDim(50,50,250,300);
	     */JSYG.prototype.setDim=function(){var opt={},n=null,a=arguments,ref;switch(_typeof(a[0])){case 'string':opt[a[0]]=a[1];break;case 'number':parseDimArgs(a,opt);break;case 'object':if(a[0]==null)parseDimArgs(a,opt);else {for(n in a[0]){opt[n]=a[0][n];}}break;default:throw new Error("argument(s) incorrect(s) pour la méthode setDim");}ref=opt.from&&new JSYG(opt.from);this.each(function(){var tag,dim,mtx,box,dec,decx,decy,position,$this=new JSYG(this),node=this;if('keepRatio' in opt&&('width' in opt||'height' in opt)){dim=$this.getDim();if(!('width' in opt))opt.width=dim.width*opt.height/dim.height;else if(!('height' in opt))opt.height=dim.height*opt.width/dim.width;}if($.isWindow(node)||node.nodeType===9){$this.getWindow().resizeTo(parseFloat(opt.width)||0,parseFloat(opt.height)||0);return;}tag=this.tagName;if('from' in opt){mtx=$this.getMtx(ref).inverse();dim=$this.getDim();var dimRef=$this.getDim(ref),x=opt.x==null?0:opt.x,y=opt.y==null?0:opt.y,xRef=opt.x==null?0:dimRef.x,yRef=opt.y==null?0:dimRef.y,width=opt.width==null?0:opt.width,height=opt.height==null?0:opt.height,widthRef=opt.width==null?0:dimRef.width,heightRef=opt.height==null?0:dimRef.height,pt1=new Vect(xRef,yRef).mtx(mtx),pt2=new Vect(x,y).mtx(mtx),pt3=new Vect(widthRef,heightRef).mtx(mtx),pt4=new Vect(width,height).mtx(mtx),newDim={};if(tag=="g")mtx=$this.getMtx();if(opt.x!=null||opt.y!=null){newDim.x=dim.x+pt2.x-pt1.x;newDim.y=dim.y+pt2.y-pt1.y;}if(opt.width!=null||opt.height!=null){newDim.width=dim.width+pt4.x-pt3.x;newDim.height=dim.height+pt4.y-pt3.y;}$this.setDim(newDim);if(tag=="g")$this.setMtx(mtx.multiply($this.getMtx()));return;}switch(tag){case 'circle':if("width" in opt){node.setAttribute('cx',(node.getAttribute('cx')||0)-(node.getAttribute('r')||0)+opt.width/2);node.setAttribute('r',opt.width/2);}if("height" in opt){node.setAttribute('cy',(node.getAttribute('cy')||0)-(node.getAttribute('r')||0)+opt.height/2);node.setAttribute('r',opt.height/2);}if("x" in opt)node.setAttribute('cx',opt.x+parseFloat(node.getAttribute('r')||0));if("y" in opt)node.setAttribute('cy',opt.y+parseFloat(node.getAttribute('r')||0));break;case 'ellipse':if("width" in opt){node.setAttribute('cx',(node.getAttribute('cx')||0)-(node.getAttribute('rx')||0)+opt.width/2);node.setAttribute('rx',opt.width/2);}if("height" in opt){node.setAttribute('cy',(node.getAttribute('cy')||0)-(node.getAttribute('ry')||0)+opt.height/2);node.setAttribute('ry',opt.height/2);}if("x" in opt)node.setAttribute('cx',opt.x+parseFloat(node.getAttribute('rx')||0));if("y" in opt)node.setAttribute('cy',opt.y+parseFloat(node.getAttribute('ry')||0));break;case 'line':case 'polyline':case 'polygon':case 'path':if(!node.parentNode)throw new Error("Pour fixer les dimensions d'un élément \""+tag+"\", il faut d'abord l'attacher à l'arbre DOM");mtx=new Matrix();box=node.getBBox();if("x" in opt)mtx=mtx.translate(opt.x-box.x,0);if("y" in opt)mtx=mtx.translate(0,opt.y-box.y);if("width" in opt&&box.width!=0)mtx=mtx.scaleX(opt.width/box.width,box.x,box.y);if("height" in opt&&box.height!=0)mtx=mtx.scaleY(opt.height/box.height,box.x,box.y);$this.mtx2attrs({mtx:mtx});break;case 'text':case 'use': //on peut répercuter x et y mais pas width ni height
	if(('x' in opt||'y' in opt)&&!this.parentNode)throw new Error("Pour fixer la position d'un élément \""+tag+"\", il faut d'abord l'attacher à l'arbre DOM");dim=node.getBBox();mtx=$this.getMtx();if('x' in opt){if(tag=='text')dec=(parseFloat($this.attr("x"))||0)-dim.x;else {dec=-dim.x;if(JSYG.support.svgUseBBox)dec+=parseFloat($this.attr('x'))||0;}$this.attr('x',opt.x+dec);}if('y' in opt){if(tag=='text')dec=(parseFloat($this.attr("y"))||0)-dim.y;else {dec=-dim.y;if(JSYG.support.svgUseBBox)dec+=parseFloat($this.attr('y'))||0;}$this.attr('y',opt.y+dec);}if('width' in opt&&dim.width!=0||'height' in opt&&dim.height!=0){mtx=new Matrix();if('width' in opt&&dim.width!=0){mtx=mtx.scaleNonUniform(opt.width/dim.width,1,dim.x,dim.y);}if('height' in opt&&dim.height!=0){mtx=mtx.scaleNonUniform(1,opt.height/dim.height,dim.x,dim.y);}$this.mtx2attrs({mtx:mtx});}break;case 'g': //on ne peut rien répercuter
	if(!node.parentNode)throw new Error("Pour fixer les dimensions d'un élément \""+tag+"\", il faut d'abord l'attacher à l'arbre DOM");dim=$this.getDim();mtx=$this.getMtx();var dimP=$this.getDim(node.parentNode);if("x" in opt)mtx=new Matrix().translateX(opt.x-dimP.x).multiply(mtx);if("y" in opt)mtx=new Matrix().translateY(opt.y-dimP.y).multiply(mtx);if("width" in opt)mtx=mtx.scaleX(opt.width/dimP.width,dim.x,dim.y);if("height" in opt)mtx=mtx.scaleY(opt.height/dimP.height,dim.x,dim.y);$this.setMtx(mtx);break;case 'iframe':case 'canvas':if("x" in opt)$this.css('left',opt.x+'px');if("y" in opt)$this.css('top',opt.y+'px');if("width" in opt)$this.attr('width',opt.width);if("height" in opt)$this.attr('height',opt.height);break;default:if($this.isSVG()&&!$this.isSVGroot()){ //les images dont l'url est un fichier svg se comportent plus comme des conteneurs (du moins avec ff)
	if(isSVGImage($this)){if('x' in opt)$this.attr('x',opt.x);if('y' in opt)$this.attr('y',opt.y);if('width' in opt||'height' in opt){if(!node.parentNode)throw new Error("Pour fixer la position d'une image svg, il faut d'abord l'attacher à l'arbre DOM");dim=node.getBBox();mtx=new Matrix();if('width' in opt&&dim.width!=0)mtx=mtx.scaleNonUniform(opt.width/dim.width,1,dim.x,dim.y);if('height' in opt&&dim.height!=0)mtx=mtx.scaleNonUniform(1,opt.height/dim.height,dim.x,dim.y);$this.mtx2attrs({mtx:mtx});}}else $this.attr(opt);}else {position=$this.css('position');decx=getPropNum($this,'marginLeft');decy=getPropNum($this,'marginTop');if('x' in opt||'y' in opt){if(!position||position==='static'){if(node.parentNode){$this.css('position','relative');position='relative';}else $this.css('position','absolute');}if(position=='relative'){dim=$this.getDim();if('x' in opt)decx=dim.x-getPropNum($this,'left');if('y' in opt)decy=dim.y-getPropNum($this,'top');}}if("x" in opt)node.style.left=opt.x-decx+'px';if("y" in opt)node.style.top=opt.y-decy+'px';if("width" in opt){if(tag=='svg')$this.css('width',opt.width);else {node.style.width=Math.max(0,opt.width-getPropNum($this,'border-left-width')-getPropNum($this,'padding-left')-getPropNum($this,'border-right-width')-getPropNum($this,'padding-right'))+'px';}}if("height" in opt){if(tag=='svg')$this.css('height',opt.height);else {node.style.height=Math.max(0,opt.height-getPropNum($this,'border-top-width')-getPropNum($this,'padding-top')-getPropNum($this,'border-bottom-width')-getPropNum($this,'padding-bottom'))+'px';}}}break;}});return this;};JSYG.fit=function(dim,dimContainer){var ratio={x:dim.width/dimContainer.width,y:dim.height/dimContainer.height},width,height;if(ratio.x>ratio.y){height=dim.height*dimContainer.width/dim.width;width=dimContainer.width;}else {width=dim.width*dimContainer.height/dim.height;height=dimContainer.height;}return {width:width,height:height};}; /**
	     * Adapte la taille des éléments au mieux sans déformation
	     * @param {Object} dimContainer doit contenir les propriétés width et height. Si omis, prend les dimensions du premier parent positionné.
	     * @returns {JSYG}
	     */JSYG.prototype.fit=function(dimContainer){return this.each(function(){var $this=JSYG(this),dim;if(!dimContainer)dimContainer=$this.offsetParent().getDim();if(dimContainer.keepRatio===false)dim=dimContainer;else dim=JSYG.fit($this.getDim(),dimContainer);dim.x=0;dim.y=0;$this.setDim(dim);});}; /**
	     * Utile plutot en interne ou pour la création de plugins.
	     * récupère le décalage (pour les transformations) en pixels à partir d'arguments de types différents.
	     * @param pivotX 'left','right','center', nombre ou pourcentage. Si non renseigné, l'origine par défaut de l'élément ("center")
	     * @param pivotY 'top','bottom','center', nombre ou pourcentage. Si non renseigné, l'origine par défaut de l'élément ("center")
	     * @returns {Vect}
	     * @see JSYG.prototype.transfOrigin
	     */JSYG.prototype.getShift=function(pivotX,pivotY){var transfOrigin=null;if(pivotX==null||pivotY==null)transfOrigin=this.transfOrigin().split(/ +/);pivotX=pivotX!=null?pivotX:transfOrigin[0];pivotY=pivotY!=null?pivotY:transfOrigin[1];if(JSYG.isNumeric(pivotX)&&JSYG.isNumeric(pivotY))return new Vect(parseFloat(pivotX),parseFloat(pivotY));var box=this.getDim(), // dimensions réelles de l'élément (avant transformation(s))
	translX,translY,pourcent=/^([0-9]+)%$/,execX=pourcent.exec(pivotX),execY=pourcent.exec(pivotY);if(execX)translX=box.width*execX[1]/100;else {switch(pivotX){case 'left':translX=0;break;case 'right':translX=box.width;break;default:translX=box.width/2;break;}}if(execY)translY=box.height*execY[1]/100;else {switch(pivotY){case 'top':translY=0;break;case 'bottom':translY=box.height;break;default:translY=box.height/2;break;}}if(!this.isSVG())return new Vect(translX,translY);else return new Vect(box.x+translX,box.y+translY);}; /**
	     * récupère ou définit l'origine pour les transformations 2D (html et svg). On peut passer un seul argument avec l'origine en x et en y séparées
	     * par des espaces ou deux arguments séparés. Pour les valeurs possibles, voir le lien ci-dessous.
	     * @param x chaÃ®ne, origine horizontale
	     * @param y chaÃ®ne, origine verticale
	     * @link https://developer.mozilla.org/en/CSS/transform-origin
	     * @returns {JSYG} si passé avec un ou des arguments, sinon renvoie une chaÃ®ne représentant l'origine en x et y.
	     */JSYG.prototype.transfOrigin=function(x,y){var value=null,a=arguments;this.each(function(){var $this=new JSYG(this),val,originX="50%",originY="50%";if(a[0]==null){value=$this.data('transfOrigin')||originX+' '+originY;return false;}if(a.length===1){val=a[0].split(/ +/);}else if(a.length===2){val=[a[0],a[1]];}else throw new Error("nombre d'arguments incorrect");if(['top','bottom'].indexOf(val[0])!==-1||val[1]!=null&&['left','right'].indexOf(val[1])!==-1){if(val[1]!=null){originX=val[1];}if(val[0]!=null){originY=val[0];}}else {if(val[1]!=null){originY=val[1];}if(val[0]!=null){originX=val[0];}}$this.data('transfOrigin',originX+' '+originY);return null;});return a[0]==null?value:this;}; /**
	     * Annule toutes les transformations 2D de la collection.
	     * @returns {JSYG}
	     */JSYG.prototype.resetTransf=function(){if(!svg)return this;this.each(function(){if(new JSYG(this).isSVG())this.transform.baseVal.clear();else if(JSYG.support.twoDimTransf)this.style[JSYG.support.twoDimTransf]='';});return this;}; /**
	     * Ajoute une transformation à la collection selon l'échelle spécifiée, ou récupère l'échelle en x du premier élément de la collection
	     * @param scale si définie, transforme la collection
	     * @returns {JSYG} si scale est définie, la valeur de l'échelle sinon
	     */JSYG.prototype.scale=function(scale){if(!svg)return scale==null?null:this;if(scale==null)return this[0]&&this.getMtx().scaleX();this.each(function(){var $this=new JSYG(this),dec=$this.getShift();$this.addMtx(new Matrix().scale(scale,dec.x,dec.y));});return this;}; /**
	     * Ajoute une transformation à la collection selon l'échelle en x spécifiée, ou récupère l'échelle en x du premier élément de la collection.
	     * @param scale si définie, transforme la collection
	     * @returns {JSYG} si scale est définie, la valeur de l'échelle en x sinon
	     */JSYG.prototype.scaleX=function(scale){if(!svg)return scale==null?null:this;if(scale==null)return this[0]&&this.getMtx().scaleX();this.scaleNonUniform(scale,1);return this;}; /**
	     * Ajoute une transformation à la collection selon l'échelle en y spécifiée, ou récupère l'échelle en y du premier élément de la collection.
	     * @param scale si définie, transforme la collection
	     * @returns {JSYG} si scale est définie, la valeur de l'échelle en y sinon
	     */JSYG.prototype.scaleY=function(scale){if(!svg)return scale==null?null:this;if(scale==null)return this[0]&&this.getMtx().scaleY();this.scaleNonUniform(1,scale);return this;}; /**
	     * Ajoute une transformation à la collection selon l'échelle non uniforme spécifiée, ou récupère l'échelle du premier élément de la collection.
	     * @param scaleX
	     * @param scaleY
	     * @returns {JSYG} si scaleX et scaleY sont définis, sinon objet avec les propriétés scaleX et scaleY
	     */JSYG.prototype.scaleNonUniform=function(scaleX,scaleY){if(!svg)return scaleX==null&&scaleY==null?null:this;var mtx;if(scaleX==null&&scaleY==null){mtx=this.getMtx();return {scaleX:mtx.scaleX(),scaleY:mtx.scaleY()};}this.each(function(){var $this=new JSYG(this),dec=$this.getShift();$this.addMtx(new Matrix().scaleNonUniform(scaleX,scaleY,dec.x,dec.y));});return this;}; /**
	     * Ajoute une transformation à la collection selon la translation spécifiée, ou récupère la translation du premier élément de la collection.
	     * @param x
	     * @param y
	     * @returns {JSYG} si x et y sont définis, sinon objet Vect
	     */JSYG.prototype.translate=function(x,y){if(!svg)return x==null&&y==null?null:this;var mtx;if(x==null&&y==null){mtx=this.getMtx();return new Vect(mtx.translateX(),mtx.translateY());}this.addMtx(new Matrix().translate(x,y));return this;}; /**
	     * Ajoute une transformation à la collection selon la translation horizontale spécifiée, ou récupère la translation horizontale du premier élément de la collection.
	     * @param x
	     * @returns {JSYG} si x est défini, valeur de la translation horizontale sinon
	     */JSYG.prototype.translateX=function(x){if(!svg)return x==null?null:this;if(x==null)return this.getMtx().translateX();this.translate(x,0);return this;}; /**
	     * Ajoute une transformation à la collection selon la translation verticale spécifiée, ou récupère la translation verticale du premier élément de la collection.
	     * @param y
	     * @returns {JSYG} si y est défini, valeur de la translation verticale sinon
	     */JSYG.prototype.translateY=function(y){if(!svg)return y==null?null:this;if(y==null)return this.getMtx().translateY();this.translate(0,y);return this;}; /**
	     * Ajoute une transformation à la collection selon la rotation spécifiée, ou récupère la rotation du premier élément de la collection.
	     * @param angle (degrés)
	     * @returns {JSYG} si angle est défini, valeur de la rotation sinon
	     */JSYG.prototype.rotate=function(angle){if(!svg)return angle==null?null:this;if(angle==null)return this.getMtx().rotate();this.each(function(){var $this=new JSYG(this),dec=$this.getShift(),mtx=$this.getMtx().decompose();$this.addMtx(new Matrix().translate(dec.x,dec.y).scaleNonUniform(1/mtx.scaleX,1/mtx.scaleY).rotate(angle).scaleNonUniform(mtx.scaleX,mtx.scaleY).translate(-dec.x,-dec.y));});return this;}; /**
	     * Récupération de l'objet matrice du 1er élément de la collection, instance de Matrix.
	     * Pour les éléments HTML, seule la transformation de l'élément lui-même est supporté
	     * @param arg (éléments svg seulement)
	     * <ul>
	     * 		<li>null : transformation de l'élément lui-même</li>
	     * 		<li>'ctm' : transformation de l'élément par rapport à son viewport (balise &lt;svg&gt;)</li>
	     * 		<li>'screen' : transformation de l'élément par rapport à l'écran</li>
	     * 		<li>'page' : transformation de l'élément par rapport ) la page (screen + scroll)</li>
	     * 		<li>objet DOM SVG : transformation de l'élément par rapport ) cet objet</li>
	     * </ul>
	     * @returns {Matrix}
	     * @see Matrix
	     */JSYG.prototype.getMtx=function(arg){var mtx=null,transf,regexp,coefs;if(!this[0])return null;if(JSYG.isWindow(this[0])||this[0].nodeType===9)return new Matrix();if(this.isSVG()){if(arg==null){transf=this[0].transform&&this[0].transform.baseVal.consolidate();mtx=transf&&transf.matrix||svg.createSVGMatrix();}else if(JSYG.support.svgUseTransform&&this.getTag()=="use"){ //les matrices de transformation tiennent compte des attributs x et y 
	//getCTM, getScreenCTM, getTransformToElement, mais ne modifie pas l'attribut transform de l'élément 
	//(bug de firefox avant la version 12 ou 13)
	//donc on prend la matrice de l'élément parent et on multiplie par la matrice de l'attribut transform
	return this.parent().getMtx(arg).multiply(this.getMtx());}else if(typeof arg==='string'){arg=arg.toLowerCase();if(arg==='ctm')mtx=this[0].getCTM();else if(arg==='screen')mtx=this[0].getScreenCTM();else if(arg==='page'){mtx=this[0].getScreenCTM();mtx=svg.createSVGMatrix().translate(window.pageXOffset,window.pageYOffset).multiply(mtx);}}else if(arg.nodeType!=null||arg instanceof JSYG){if(arg instanceof JSYG)arg=arg[0]; //mtx = this[0].getTransformToElement(arg[0] || arg); //bug avec chrome
	mtx=arg.getScreenCTM()||svg.createSVGMatrix();mtx=mtx.inverse().multiply(this[0].getScreenCTM());if(this.getTag()=='svg')mtx=mtx.translate(-this.attr('x')||0,-this.attr('y')||0); //la matrice tient compte des attributs x et y dans ce cas...
	}}else {if(JSYG.support.twoDimTransf){transf=this[0].style[JSYG.support.twoDimTransf];regexp=/matrix\((-?\d*\.?\d+) *, *(-?\d*\.?\d+) *, *(-?\d*\.?\d+) *, *(-?\d*\.?\d+) *, *(-?\d*\.?\d+) *, *(-?\d*\.?\d+) *\)/;coefs=regexp.exec(transf);mtx=svg.createSVGMatrix();if(coefs){mtx.a=coefs[1];mtx.b=coefs[2];mtx.c=coefs[3];mtx.d=coefs[4];mtx.e=coefs[5];mtx.f=coefs[6];}}}return new Matrix(mtx);}; /**
	     * définit la matrice de transformation de l'élément
	     * @param mtx instance de Matrix (ou SVGMatrix natif)
	     * @returns {JSYG}
	     */JSYG.prototype.setMtx=function(mtx){var attr=JSYG.support.twoDimTransf;if(mtx instanceof Matrix)mtx=mtx.mtx;this.each(function(){var $this=new JSYG(this),list;if($this.isSVG()){list=this.transform.baseVal;list.initialize(list.createSVGTransformFromMatrix(mtx));}else if(attr){this.style[attr+'Origin']='0 0';this.style[attr]=new Matrix(mtx).toString();}});return this;}; /**
	     * Ajoute une transformation sous forme d'objet matrice (multiplication de la matrice avec la matrice courante)
	     * @param mtx instance de Matrix (ou SVGMatrix natif)
	     * @returns {JSYG}
	     */JSYG.prototype.addMtx=function(mtx){if(mtx instanceof Matrix)mtx=mtx.mtx;var attr=JSYG.support.twoDimTransf;this.each(function(){var $this=new JSYG(this),list;if($this.isSVG()){list=this.transform.baseVal;list.appendItem(list.createSVGTransformFromMatrix(mtx));list.consolidate();}else if(attr){mtx=$this.getMtx().multiply(mtx);$this.setMtx(mtx);}});return this;}; /**
	     * répercute les transformations sur les attributs (autant que possible).<br/>
	     * Le type de transformations répercutable est variable selon les éléments.
	     * La rotation ne l'est pas sauf pour les chemins (path,line,polyline,polygone).
	     * Pour les conteneurs (&lt;g&gt;), aucune ne l'est. etc.
	     * @param opt si indéfini, répercute la matrice de transformation propre à l'élément.
	     * Si défini, il est un objet contenant les propriétés possibles suivantes :
	     * <ul>
	     * <li>mtx : instance Matrix pour répercuter les transformations de celle-ci plutot que de la matrice propre à l'élément</li>
	     * <li>keepRotation : pour les éléments permettant de répercuter la rotation sur les attributs ('circle','line','polyline','polygon','path'),
	     * le choix est donné de le faire ou non</li>
	     * </ul>
	     * @returns {JSYG}
	     * @example new JSYG('&lt;rect&gt;').attr({x:0,y:0,width:100,height:100}).translate(50,50).mtx2attrs().attr("x") === 50
	     */JSYG.prototype.mtx2attrs=function(opt){if(opt instanceof Matrix)opt={mtx:opt};else opt=$.extend({},opt);this.each(function(){var $this=new JSYG(this),mtx=opt.mtx||$this.getMtx(),keepRotation=opt.keepRotation||false,shift=$this.getShift(),d=mtx.decompose(shift.x,shift.y),dim=$this.getDim(),tag=$this.getTag(),tagsChoixRotation=['circle','line','polyline','polygon','path'],pt,pt1,pt2,hg,bg,bd,list,jPath,seg,letter,x,y,i,N;if(!dim)return;if(keepRotation&&tagsChoixRotation.indexOf(tag)!==-1){mtx=mtx.rotate(-d.rotate,shift.x,shift.y);} //les images dont l'url est un fichier svg se comportent plus comme des conteneurs (du moins avec ff)
	if(isSVGImage($this))tag="use";switch(tag){case 'circle':pt=new Vect($this.attr('cx'),$this.attr('cy')).mtx(mtx);$this.attr({'cx':pt.x,'cy':pt.y,'r':$this.attr('r')*d.scaleX});if(!opt.mtx)$this.resetTransf();break;case 'ellipse':pt=new Vect($this.attr('cx'),$this.attr('cy')).mtx(mtx);$this.attr({'cx':pt.x,'cy':pt.y,'rx':$this.attr('rx')*d.scaleX,'ry':$this.attr('ry')*d.scaleY});if(!opt.mtx)$this.resetTransf();$this.setMtx($this.getMtx().rotate(d.rotate,pt.x,pt.y));break;case 'line':pt1=new Vect($this.attr('x1'),$this.attr('y1')).mtx(mtx),pt2=new Vect($this.attr('x2'),$this.attr('y2')).mtx(mtx);$this.attr({'x1':pt1.x,'y1':pt1.y,'x2':pt2.x,'y2':pt2.y});if(!opt.mtx)$this.resetTransf();break;case 'polyline':case 'polygon':list=$this[0].points;i=0;N=list.numberOfItems;for(;i<N;i++){list.replaceItem(list.getItem(i).matrixTransform(mtx.mtx),i);}if(!opt.mtx)$this.resetTransf();break;case 'path':if(!JSYG.Path)throw new Error("Il faut inclure le module JSYG.Path pour pouvoir utiliser la méthode mtx2attrs sur les chemins");jPath=new JSYG.Path(this).rel2abs();list=this.pathSegList;i=0,N=list.numberOfItems;for(;i<N;i++){seg=list.getItem(i);letter=seg.pathSegTypeAsLetter;['','1','2'].forEach(function(ind){if(seg['x'+ind]==null&&seg['y'+ind]==null)return;if(seg['x'+ind]!=null)x=seg['x'+ind];if(seg['y'+ind]!=null)y=seg['y'+ind];if(x!=null&&y!=null){var point=new Vect(x,y).mtx(mtx);seg['x'+ind]=point.x;seg['y'+ind]=point.y;}});if(keepRotation&&letter==='A'){seg.r1*=mtx.scaleX();seg.r2*=mtx.scaleY();}jPath.replaceSeg(i,seg);}if(!opt.mtx)$this.resetTransf();break;case 'g':opt.mtx&&$this.addMtx(mtx);break;case 'use':hg=new Vect($this.attr('x')||0,$this.attr('y')||0).mtx(mtx);$this.attr({'x':hg.x,'y':hg.y});if(!opt.mtx)$this.resetTransf();$this.setMtx($this.getMtx().translate(hg.x,hg.y).scaleNonUniform(d.scaleX,d.scaleY).rotate(d.rotate).translate(-hg.x,-hg.y));break;case 'text':x=parseFloat($this.attr("x")||0);y=parseFloat($this.attr("y"))||0;pt=new Vect(x,y).mtx(mtx);$this.attr({'x':pt.x,'y':pt.y});if(!opt.mtx)$this.resetTransf();$this.setMtx($this.getMtx().translate(pt.x,pt.y).scaleNonUniform(d.scaleX,d.scaleY).rotate(d.rotate).translate(-pt.x,-pt.y));break;case 'rect':hg=new Vect(dim.x,dim.y).mtx(mtx),bg=new Vect(dim.x,dim.y+dim.height).mtx(mtx),bd=new Vect(dim.x+dim.width,dim.y+dim.height).mtx(mtx);$this.attr({'x':hg.x,'y':hg.y,'width':JSYG.distance(bd,bg),'height':JSYG.distance(bg,hg),'rx':$this.attr('rx')*d.scaleX,'ry':$this.attr('ry')*d.scaleY});if(!opt.mtx)$this.resetTransf();$this.setMtx($this.getMtx().rotate(d.rotate,hg.x,hg.y));break;default:if(!$this.isSVG()){hg=new Vect(0,0).mtx(mtx),bg=new Vect(0,dim.height).mtx(mtx),bd=new Vect(dim.width,dim.height).mtx(mtx);$this.setDim({'x':dim.x+hg.x,'y':dim.y+hg.y,'width':JSYG.distance(bd,bg),'height':JSYG.distance(bg,hg)});if(!opt.mtx)$this.resetTransf();$this.setMtx($this.getMtx().rotate(d.rotate));}else {hg=new Vect(dim.x,dim.y).mtx(mtx),bg=new Vect(dim.x,dim.y+dim.height).mtx(mtx),bd=new Vect(dim.x+dim.width,dim.y+dim.height).mtx(mtx);$this.attr({'x':hg.x,'y':hg.y,'width':JSYG.distance(bd,bg),'height':JSYG.distance(bg,hg)});if(!opt.mtx)$this.resetTransf();$this.setMtx($this.getMtx().rotate(d.rotate,hg.x,hg.y));}}if(keepRotation&&tagsChoixRotation.indexOf(tag)!==-1){shift=$this.getShift();$this.setMtx($this.getMtx().rotate(d.rotate,shift.x,shift.y));}});return this;}; /**
	     * Renvoie les transformations du 1er élément de la collection
	     * @returns objet avec les propriétés "scaleX","scaleY","rotate","translateX","translateY"
	     */JSYG.prototype.getTransf=function(){var shift=this.getShift(),transf=this.getMtx().decompose(shift.x,shift.y);delete transf.skew;return transf;}; /**
	     * Renvoie la position du pointeur de la souris relativement à l'élément, sous forme d'objet point Point
	     * @param evt objet Event
	     * @param ref argument JSYG (noeud DOM, chaîne css, etc) 
	     * @returns {Point}
	     * @see Point
	     */JSYG.getCursorPos=function(evt,ref){var mtx,rect;if(evt instanceof JSYG.Event)evt=evt.originalEvent;if(ref&&!(ref instanceof JSYG))ref=new JSYG(ref);if(ref.isSVG()){mtx=ref.getMtx('screen').inverse();return new Point(evt.clientX,evt.clientY).mtx(mtx);}else {rect=ref&&ref.getDim('page')||{x:0,y:0};return new Point(evt.pageX-rect.x,evt.pageY-rect.y);}};JSYG.isOver=function(dim1,dim2,typeOver){var test={x:false,y:false};typeOver=typeOver||'full';if(typeOver==='full'){if(dim1.width<dim2.width){test.x=dim1.x>dim2.x&&dim1.x+dim1.width<=dim2.x+dim2.width;}else {test.x=dim1.x<=dim2.x&&dim1.x+dim1.width>=dim2.x+dim2.width;}if(dim1.height<dim2.height){test.y=dim1.y>dim2.y&&dim1.y+dim1.height<=dim2.y+dim2.height;}else {test.y=dim1.y<=dim2.y&&dim1.y+dim1.height>=dim2.y+dim2.height;}}else if(typeOver==='partial'){test.x=dim1.x>dim2.x&&dim1.x<=dim2.x+dim2.width||dim1.x+dim1.width>dim2.x&&dim1.x+dim1.width<=dim2.x+dim2.width;if(dim1.width>dim2.width&&test.x===false){test.x=dim1.x<=dim2.x&&dim1.x+dim1.width>=dim2.x+dim2.width;}test.y=dim1.y>dim2.y&&dim1.y<=dim2.y+dim2.height||dim1.y+dim1.height>dim2.y&&dim1.y+dim1.height<=dim2.y+dim2.height;if(dim1.height>dim2.height&&test.y===false){test.y=dim1.y<=dim2.y&&dim1.y+dim1.height>=dim2.y+dim2.height;}}else if(typeOver==='center'){var center={x:dim2.x+dim2.width/2,y:dim2.y+dim2.height/2};test.x=center.x>dim1.x&&center.x<dim1.x+dim1.width;test.y=center.y>dim1.y&&center.y<dim1.y+dim1.height;}return test.x&&test.y;}; /**
	     * Teste si le premier element de la collection est au dessus de l'élément passé en argument
	     * @param node argument JSYG
	     * @param type 'full','partial','center'
	     * <ul>
	     * 	<li>full : l'élément est entièrement au dessus de l'autre</li>
	     *  <li>partial : les deux éléments se chevauchent</li>
	     *  <li>center : l'élément recouvre le centre de l'élément argument</li>
	     * </ul>
	     * @returns {Boolean}
	     */JSYG.prototype.isOver=function(node,type){var dim1=this.getDim('screen'),dim2=new JSYG(node).getDim('screen');return JSYG.isOver(dim1,dim2,type);}; /**
	     * Renvoie la position du pointeur de la souris relativement à l'élément, sous forme d'objet vecteur Point
	     * @param e objet Event
	     * @returns {Point}
	     */JSYG.prototype.getCursorPos=function(e){return JSYG.getCursorPos(e,this);}; /**
	     * Remplit la collection de la couleur spécifiée, ou récupère la couleur du premier élément. Cette méthode est plutot réservée aux tests, il est préférable de jouer sur les classes, pour laisser les styles à part.
	     * @param color couleur html (ou objet JSYG.Color). Si non définie, renvoie la couleur du premier élément.
	     * @returns {String,JSYG} l'objet JSYG si color est définie, la valeur sinon
	     */JSYG.prototype.fill=function(color){if(color==null)return this.css(this.isSVG()?'fill':'background-color');this.each(function(){var $this=new JSYG(this);if($this.isSVG()){$this.css('fill',color=='transparent'?'none':color);}else {$this.css('background-color',color=='none'?'transparent':color);}});return this;}; /**
	     * Borde la collection selon la valeur spécifiée. Cette méthode est plutot réservée aux tests, il est préférable de jouer sur les classes, pour laisser les styles à part.
	     * Elle permet de définir rapidement, comme en html (attribut css border) la bordure des éléments SVG.
	     * @param val définition de la bordure ("1px solid black", "2px dashed gray", etc) ou objet JSYG.Color
	     * @returns {String,JSYG} l'objet JSYG si color est définie, la valeur sinon
	     */JSYG.prototype.stroke=function(val){var onlyColor=null;if(val==null)return this.css(this.isSVG()?'stroke':'border');try{new JSYG.Color(val);onlyColor=true;}catch(e){}this.each(function(){var props,$this=new JSYG(this),px;if(!$this.isSVG()){onlyColor&&$this.css('border-color',val)||$this.css('border',val);}else {if(onlyColor)$this.css('stroke',val);else {props=val.split(/ +/);props[0]&&$this.css('stroke-width',props[0]);px=parseInt(props[0],10);switch(props[1]){case 'dotted':$this.css('stroke-dasharray',px+','+px);break;case 'dashed':$this.css('stroke-dasharray',px*4+','+px*4);break;case 'none':$this.css('stroke','none');break;}props[2]&&$this.css('stroke',props[2]);}}});return this;};function createFakeDragFunction($nodes){return function(e){var hasMoved=false,posInit={x:e.clientX,y:e.clientY};function mousemoveFct(e){if(hasMoved===false){var pos={x:e.clientX,y:e.clientY};if(JSYG.distance(posInit,pos)>0){e.type="drag:start";$nodes.trigger(e);hasMoved=true;}}else {e.type="drag:drag";$nodes.trigger(e);}}function mouseupFct(e){if(hasMoved===true){e.type="drag:end";$nodes.trigger(e);}$nodes.off("mousemove",mousemoveFct);new JSYG(document).off("mouseup",mouseupFct);}e.preventDefault();$nodes.on("mousemove",mousemoveFct);new JSYG(document).on("mouseup",mouseupFct);};} /**
	     * Active/désactive les évènements drag:start, drag:drag et drag:end
	     * @param {undefined|String} method sans argument, active les évènements, si "destroy" désactive les évènements
	     * @example <pre>var jDiv = new JSYG('#maDiv');
	     * jDiv.dragEvents().on("drag:start",function() { console.log("start dragging !"); });
	     */JSYG.prototype.dragEvents=function(method){var fct=this.data("fakedrag");if(!fct&&(!method||method=="enable")){fct=createFakeDragFunction(this);this.on("mousedown",fct).data("fakedrag",fct);}else if(fct&&(method=="destroy"||method=="disable")){this.off("mousedown",fct).removeData("fakedrag",fct);}return this;}; /**
	     * Renvoie un nombre entier aléatoire entre min et max, ou une valeur aléatoire d'un tableau
	     * @param min valeur plancher, ou tableau de données
	     * @param max valeur plafond
	     * @returns {Number} entier, ou valeur du tableau
	     */JSYG.rand=function(min,max){if(Array.isArray(min))return min[JSYG.rand(0,min.length-1)];else if(typeof min==='string')return min.charAt(JSYG.rand(0,min.length-1)); // min[ind] ne fonctionne pas avec IE7
	return Math.floor(Math.random()*(max-min+1))+min;};JSYG.support.twoDimTransf=function(){var node=document.createElement('div'),attr,attributs=['','Moz','Webkit','O','ms'];for(var i=0;i<attributs.length;i++){attr=attributs[i]+'Transform';if(node.style&&node.style[attr]!=null)return attr;}return false;}(); //http://jointjs.com/blog/get-transform-to-element-polyfill.html
	SVGElement.prototype.getTransformToElement=SVGElement.prototype.getTransformToElement||function(toElement){return toElement.getScreenCTM().inverse().multiply(this.getScreenCTM());};JSYG(function(){if(!svg||typeof document==="undefined")return false;var defs,use,id='rect'+Math.random().toString().replace(/\D/g,"");defs=new JSYG('<defs>');defs.appendTo(svg);new JSYG('<rect>').attr({"id":id,x:10,y:10,width:10,height:10}).appendTo(defs);use=new JSYG('<use>').attr({id:"use",x:10,y:10,href:'#'+id}).appendTo(svg);document.body.appendChild(svg);JSYG.support.svgUseBBox=use[0].getBBox().x===20;JSYG.support.svgUseTransform=use[0].getTransformToElement(svg).e!==0;use.remove();defs.remove();document.body.removeChild(svg); //firefox ne répercute pas les transformations 2D d'éléments HTML sur la méthode getBoundingClientRect
	JSYG.support.addTransfForBoundingRect=function(){if(!JSYG.support.twoDimTransf)return false;var jDiv=new JSYG('<div>').text('toto').css('visibility','hidden').appendTo(document.body),node=jDiv[0],rect1,rect2;rect1=node.getBoundingClientRect();jDiv.rotate(30);rect2=node.getBoundingClientRect();if(rect1.left===rect2.left)return true;jDiv.remove();return false;}();});var cptPlugin=0; /**
	     * Permet d'attacher un plugin aux instances JSYG, qui fonctionne ensuite selon la philosophie jQuery.
	     * @param Construct constructeur
	     * @link http://docs.jquery.com/Plugins/Authoring#Plugin_Methods
	     * @returns {Function}
	     */JSYG.bindPlugin=function(Construct){var name='dataPlugin'+cptPlugin,slice=Array.prototype.slice;cptPlugin++;return function(method){var args=arguments,value;this.each(function(){var $this=new JSYG(this),plugin=$this.data(name);if(!plugin){plugin=new Construct(this);$this.data(name,plugin);}if(method=='get'){value=plugin[args[1]];if(typeof value=="function")value=plugin[args[1]]();return false;}else if(method==='destroy'){plugin.disable();$this.removeData(name);}else if((typeof method==="undefined"?"undefined":_typeof(method))==='object'||!method){if(plugin.enable)plugin.enable.apply(plugin,args);else {throw new Error("Ce plugin n'a pas de méthode enable,'"+"il faut donc préciser en premier argument la méthode désirée");}}else if(typeof method==='string'&&plugin[method]){if(method.substr(0,1)==='_')throw new Error("La méthode "+method+" est privée.");else plugin[method].apply(plugin,slice.call(args,1));}else throw new Error("La méthode "+method+" n'existe pas ");return null;});return method=='get'?value:this;};}; /**
	     * Renvoit la matrice de transformation équivalente à la viewbox
	     */function viewBox2mtx(svgElmt){var viewBox=svgElmt.viewBox.baseVal,mtx=new Matrix(),scaleX,scaleY,ratio;if(!viewBox)return mtx;if(viewBox.width&&viewBox.height){scaleX=svgElmt.getAttribute('width')/viewBox.width;scaleY=svgElmt.getAttribute('height')/viewBox.height;ratio=svgElmt.getAttribute("preserveAspectRatio");if(ratio&&ratio!="none")throw new Error(ratio+" : désolé, la méthode ne fonctionne pas avec une valeur de preserveAspectRatio différente de 'none'.");mtx=mtx.scaleNonUniform(scaleX,scaleY);}mtx=mtx.translate(-viewBox.x,-viewBox.y);return mtx;} /**
	     * Transforme les éléments &lt;svg&gt; de la collection en conteneurs &lt;g&gt;.
	     * Cela peut être utile pour insérer un document svg dans un autre et éviter d'avoir des balises svg imbriquées.
	     * @returns {JSYG} objet JSYG contenant la collection des éléments g.
	     */JSYG.prototype.svg2g=function(){var list=[];this.each(function(){var $this=new JSYG(this);if($this.getTag()!="svg")throw new Error($this.getTag()+" : la méthode ne concerne que les balises svg");var g=new JSYG('<g>'),mtx=new Matrix();while(this.firstChild){g.append(this.firstChild);}mtx=mtx.translate($this.attr("x")||0,$this.attr("y")||0);mtx=mtx.multiply(viewBox2mtx(this));g.setMtx(mtx).replace(this);list.push(g[0]);});return new JSYG(list);}; /**
	     * Parse une chaîne svg en renvoit l'objet JSYG correspondant
	     * @param svgString chaîne svg
	     * @returns {JSYG}
	     */JSYG.parseSVG=function(svgString){var parser=new DOMParser(),doc=parser.parseFromString(svgString,"image/svg+xml"),node=doc.documentElement;return new JSYG(node);}; /**
	     * Sérialise le noeud sous forme de chaîne de caractère svg 
	     * @param node noeud a représenter
	     * @returns {String}
	     * Le résultat représente un fichier svg complet
	     */JSYG.serializeSVG=function(node,_dim){var serializer=new XMLSerializer(),jNode=new JSYG(node),tag=jNode.getTag(),isSVG=jNode.isSVG(),str,entete;if(tag=="svg")jNode.attr("xmlns",'http://www.w3.org/2000/svg'); //chrome
	str=serializer.serializeToString(jNode[0]),entete='<?xml version="1.0" encoding="UTF-8"?>'+"\n"+'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'+"\n"; //sans ça, la conversion en pdf avec rsvg pose parfois des problèmes
	str=str.replace(/ \w+:href=/g,' xlink:href=');str=str.replace(/ xmlns:\w+="http:\/\/www\.w3\.org\/1999\/xlink"/g,'');if(tag==='svg'){if(!/xmlns:xlink="http:\/\/www\.w3\.org\/1999\/xlink"/.test(str)){ //rsvg toujours
	str=str.replace(/^<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ');}str=entete+str;}else {if(!_dim)_dim=jNode.getDim();entete+='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"';if(_dim)entete+=' width="'+_dim.width+'" height="'+_dim.height+'"';entete+='>\n';if(!isSVG){str="<foreignObject width='100%' height='100%'>"+ //+ "<style>"+JSYG.getStyleRules()+"</style>"
	str+"</foreignObject>";}str=entete+str+"\n"+"</svg>";}return str;}; /**
	     * Convertit le 1er élément de la collection en chaîne de caractères correspondant directement à un fichier SVG.
	     * L'élément lui-même n'est pas impacté.
	     * @param {Boolean} standalone si true, copiera en temps qu'attribut les propriétés de style définies en css,
	     * et les images seront intégrées au document (plutôt que liées).
	     * @param imagesQuality optionnel, qualité de 0 à 100 pour les images. Utile uniquement si standalone est à true.
	     * @returns {Promise}
	     */JSYG.prototype.toSVGString=function(standalone,imagesQuality){var jNode=this.clone(),dim=this.getTag()!='svg'&&this.getDim(),promise;jNode.find('script').remove();if(standalone&&this.isSVG()){jNode.walkTheDom(function(){var $this=new JSYG(this);$this.style2attr();if(JSYG.svgGraphics.indexOf($this.getTag())!=-1)$this.removeAttr("style");});}if(standalone)promise=jNode.url2data(true,null,imagesQuality);else promise=Promise.resolve();return promise.then(function(){return JSYG.serializeSVG(jNode,dim);});}; /**
	     * Convertit la collection en images sous forme d'url.
	     * L'élément lui-même n'est pas impacté.
	     * @param {Boolean} standalone si true, copiera en temps qu'attribut les propriétés de style définies en css,
	     * et les images seront intégrées au document (plutôt que liées).
	     * @param imagesQuality optionnel, qualité de 0 à 100 pour les images. Utile uniquement si standalone est à true.
	     * @returns {Promise}  
	     * @example <pre>new JSYG('#monSVG").toDataURL().then(function(src) {
	     * 
	     *     new JSYG("<img>").href(src).appendTo('body');
	     *     
	     *     //ou en javascript pur :
	     *     var img = new Image();
	     *     img.src = src;
	     *     document.body.appendChild(img);
	     * 
	     *     //afficher le résultat dans une nouvelle fenêtre :
	     *     window.open(src);
	     * });
	     *  
	     */JSYG.prototype.toDataURL=function(standalone,imagesQuality){return this.toSVGString(standalone,imagesQuality).then(function(svg){return "data:image/svg+xml;base64,"+strUtils.base64encode(svg);});}; /**
	     * Transforme les liens des images de la collection par le contenu de celles-ci.
	     * Utile pour exporter du svg en intégrant les images (sinon le svg reste dépendant des fichiers images).
	     * @param {Boolean} recursive si true cherche dans les descendants de la collection
	     * @param format optionnel, "png", "jpeg" ("png" par défaut)
	     * @param quality optionnel, qualité de 0 à 100
	     * @returns {Promise}
	     * @example <pre>//envoi du contenu svg cété serveur :
	     * new JSYG("svg image").url2data().then(function() {
	     *   fetch("sauve_image.php",{
	     *   	method:"post",
	     *   	body:"img="+new JSYG('svg').toSVGString()
	     *   });
	     * });
	     */JSYG.prototype.url2data=function(recursive,format,quality){var regURL=/^url\("(.*?)"\)/,promises=[];format=format||'png';if(quality!=null)quality/=100;function url2data(){var node=this,jNode=new JSYG(this),tag=jNode.getTag(),isImage=['image','img'].indexOf(tag)!=-1,matches=null,href;if(!isImage){matches=jNode.css("background-image").match(regURL);href=matches&&matches[1];}else href=jNode.href();if(!href||/^data:/.test(href))return;promises.push(new Promise(function(resolve,reject){var img=new Image(),canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');img.crossOrigin='';img.onload=function(){var data;canvas.width=this.width;canvas.height=this.height;ctx.drawImage(this,0,0);try{data=canvas.toDataURL("image/"+format,quality);if(isImage)jNode.href(data);else jNode.css("background-image",'url("'+data+'")');resolve(node);}catch(e){ /*security error for cross domain */reject(e);}};img.onerror=reject;img.src=href;}));}if(recursive)this.each(function(){JSYG.walkTheDom(url2data,this);});else this.each(url2data);return Promise.all(promises);}; /**
	     * Convertit le 1er élément de la collection en élément canvas.
	     * L'élément lui-même n'est pas impacté.
	     * @return {Promise}
	     * @example <pre>new JSYG('#monSVG").toCanvas().then(function(canvas) {
	     *   new JSYG(canvas).appendTo("body");
	     * });
	     */JSYG.prototype.toCanvas=function(){var dim=this.getDim(this.offsetParent()),canvas=document.createElement("canvas"),node=this[0],ctx=canvas.getContext('2d'),tag=this.getTag(),promise;canvas.width=dim.width;canvas.height=dim.height;if(tag=="img"||tag=="image")promise=Promise.resolve(this.href());else promise=this.toDataURL(true);return promise.then(function(src){return new Promise(function(resolve,reject){function onload(){try{ctx.drawImage(this,0,0,dim.width,dim.height);resolve(canvas);}catch(e){reject(new Error("Impossible de dessiner le noeud "+tag));}}if(tag=='canvas')return onload.call(node);var img=new Image();img.onload=onload;img.onerror=function(){reject(new Error("Impossible de charger l'image "+src));};img.src=src;});});}; /**
	     * Move back each element before his previous sibling
	     * @returns {JSYG}
	     */JSYG.prototype.moveBackwards=function(){return this.each(function(){var $this=new JSYG(this);$this.insertBefore($this.prev());});}; /**
	     * Move back each element before his parent first child
	     * @returns {JSYG}
	     */JSYG.prototype.moveBack=function(){return this.each(function(){new JSYG(this).parent().prepend(this);});}; /**
	     * Move each element after his next sibling
	     * @returns {JSYG}
	     */JSYG.prototype.moveForwards=function(){return this.each(function(){var $this=new JSYG(this);$this.insertAfter($this.next());});}; /**
	     * Move each element after his parent last child
	     * @returns {JSYG}
	     */JSYG.prototype.moveFront=function(){return this.each(function(){new JSYG(this).parent().append(this);});};JSYG.prototype.getUniqueSelector=function(){var path;var $node=this; /*Include only names and IDs since you can always programmatically add/remove classes*/var uniqueTags=['name','id'];while($node.length){var realNode=$node[0],name=realNode.localName,parent,uniqueIdentifierFound,i,tag,tagValue,sameTagSiblings,allSiblings,index;if(!name)break;name=name.toLowerCase();parent=$node.parent();uniqueIdentifierFound=false;for(i=uniqueTags.length-1;i>=0;i--){tag=uniqueTags[i];tagValue=$node.attr(tag);if(tagValue&&tagValue.trim!==''){name='['+tag+'=\"'+tagValue+'\"]';uniqueIdentifierFound=true;break;}}if(!uniqueIdentifierFound){sameTagSiblings=parent.children(name);if(sameTagSiblings.length>1){allSiblings=parent.children();index=allSiblings.index(realNode)+1;name+=':nth-child('+index+')';}path=name+(path?'>'+path:'');$node=parent;}else {path=name+(path?'>'+path:'');break; //exit while loop
	}}return path;};(function add2JSYG(){for(var n in strUtils){JSYG[n]=strUtils[n];}JSYG.Matrix=Matrix;JSYG.Vect=Vect;JSYG.Point=Point;})();return JSYG;});;(function(){"use strict";var slice=Array.prototype.slice;function isPlainObject(obj){if((typeof obj==="undefined"?"undefined":_typeof(obj))!=="object"||obj.nodeType||obj!=null&&obj===obj.window)return false;if(obj.constructor&&!obj.constructor.prototype.hasOwnProperty("isPrototypeOf"))return false;return true;} /**
	     * Constructeur standard définissant une liste de fonctions utiles pour les plugins
	     * @returns {Events}
	     */function Events(){}Events.prototype={constructor:Events, /**
	         * Ajout d'un écouteur d'événement.<br/>
	         * Cela permet d'ajouter plusieurs fonctions, elles seront conservées dans un tableau.<br/>
	         * Les doublons sont ignorés (même événement même fonction).<br/>
	         * On peut passer en argument un objet avec les événements en clés et les fonctions en valeur.<br/>
	         * @param {String} events type(s) d'événement (propre à chaque module, 'click', 'start', 'end', etc) séparés par des espaces.
	         * @param {Function} fct fonction à exécuter lors du déclenchement de l'événement
	         * @returns {Events}
	         */on:function on(events,fct){var p,i,n,N;if(isPlainObject(events)&&fct==null){for(n in events){this.on(n,events[n]);}return this;}if(typeof fct!=='function')return this;events=events.split(/\s+/);for(i=0,N=events.length;i<N;i++){p=this['on'+events[i]];if(p===undefined)throw new Error(events[i]+" n'est pas un événement connu");else if(p===false||p===null)p=[fct];else if(typeof p=="function"){if(p!==fct)p=[p,fct];}else if(Array.isArray(p)){if(p.indexOf(fct)===-1)p.push(fct);}else throw new Error((typeof p==="undefined"?"undefined":_typeof(p))+"Type incorrect pour la propriété on"+events[i]);this['on'+events[i]]=p;}return this;}, /**
	         * Suppression d'un ou plusieurs écouteur d'événement (Event Listener) de la liste.<br/>
	         * On peut passer en argument un objet avec les événements en clés et les fonctions en valeur.
	         * @param {String} events type(s) d'événement (propre à chaque module, 'click', 'start', 'end', etc) séparés par des espaces.
	         * @param {Function} fct fonction à supprimer. Si pas de fonction, tous les écouteurs liés à l'événement sont supprimés.
	         * @returns {Events}
	         */off:function off(events,fct){var p,i,n,N;if(isPlainObject(events)&&fct==null){for(n in events){this.off(n,events[n]);}return this;}if(fct&&typeof fct!=='function')return this;events=events.split(/\s+/);for(i=0,N=events.length;i<N;i++){p=this['on'+events[i]];if(fct==null){this['on'+events[i]]=null;continue;}if(p===undefined)throw new Error(events[i]+" n'est pas un événement connu");else if(typeof p=="function"&&p===fct)p=null;else if(Array.isArray(p))p.splice(p.indexOf(fct),1);else if(p!==null)throw new Error((typeof p==="undefined"?"undefined":_typeof(p))+"Type incorrect pour la propriété on"+events[i]);}return this;}, /**
	         * Ajout d'un écouteur d'événement pour une fonction qui ne sera exécutée qu'une seule fois
	         * @param {type} events
	         * @param {type} fct
	         * @returns {JSYG.Events_L1.Events.prototype}
	         */one:function one(events,fct){var that=this;function offFct(){that.off(events,fct);that.off(events,offFct);}this.on(events,fct);this.on(events,offFct);return this;}, /**
	         * Execution d'un événement donné
	         * @memberOf Events
	         * @param {String} event nom de l'événement
	         * @param {Object} context optionnel, objet référencé par le mot clef "this" dans la fonction.
	         * Les arguments suivants sont les arguments passés à la fonction (nombre non défini)
	         * @returns {Events}
	         */trigger:function trigger(event,context){context=context||this.node||this;var p=this['on'+event],returnValue=true,i,N;if(!('on'+event in this))throw new Error(event+" is not a existing event");else if(p instanceof Function)returnValue=p.apply(context,slice.call(arguments,2));else if(Array.isArray(p)){for(i=0,N=p.length;i<N;i++){if(p[i].apply(context,slice.call(arguments,2))===false)returnValue=false;}}else if(p!==null&&p!==false)throw new Error((typeof p==="undefined"?"undefined":_typeof(p))+"Type incorrect pour la propriété on"+event);return returnValue;}};if(typeof JSYG!="undefined")JSYG.Events=Events;if(true)!(__WEBPACK_LOCAL_MODULE_6__ = function(){return Events;}.call(exports, __webpack_require__, exports, module));else this.Events=Events;}).call(undefined);(function(root,factory){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(475),__WEBPACK_LOCAL_MODULE_6__], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_LOCAL_MODULE_7__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__));else {if(typeof jQuery=="undefined")throw new Error("jQuery is needed");if(typeof JSYG!="undefined"){if(JSYG.Events)factory(jQuery,JSYG.Events);else throw new Error("You need JSYG.Events module");}else if(typeof Events!="undefined")root.StdConstruct=factory(jQuery,Events);else throw new Error("You need Events module");}})(undefined,function($,Events){"use strict"; /**
	     * Constructeur standard définissant une liste de fonctions utiles pour les plugins
	     * @returns {StdConstruct}
	     */function StdConstruct(){};StdConstruct.prototype=new Events();StdConstruct.prototype.constructor=StdConstruct; /**
	     * Permet de définir les propriétés de l'objet et des sous-objets de manière récursive, sans écraser les objets existants
	     * (seules les propriétés précisées sont mises à jour)
	     * @param opt objet contenant les propriétés à modifier
	     * @param _cible en interne seulement pour appel r�cursif
	     * @returns {Events}
	     */StdConstruct.prototype.set=function(opt,_cible){var cible=_cible||this;if(!$.isPlainObject(opt))return cible;for(var n in opt){if(n in cible){if($.isPlainObject(opt[n])&&cible[n])this.set(opt[n],cible[n]);else if(opt[n]!==undefined)cible[n]=opt[n];}}return cible;}; /**
	     * Changement du noeud sur lequel s'applique le plugin
	     * @param arg argument JSYG
	     * @returns {StdConstruct}
	     */StdConstruct.prototype.setNode=function(arg){var node=$(arg)[0];if(!node)throw new Error(arg+" n'est pas un argument correct pour la méthode setNode : aucun élément DOM renvoyé.");var enabled=this.enabled===true;if(enabled)this.disable();this.node=node;if(enabled)this.enable();return this;}; /**
	     * réinitialisation de toutes les propriétés du plugin
	     * @returns {StdConstruct}
	     */StdConstruct.prototype.reset=function(){var ref=Object.getPrototypeOf?Object.getPrototypeOf(this):this.__proto__?this.__proto__:this.constructor.prototype;for(var n in ref){if(typeof ref[n]!=='function')this[n]=ref[n];}return this;}; /**
	     * Indique si le plugin est actif ou non
	     */StdConstruct.prototype.enabled=false; /**
	     * Active le plugin
	     */StdConstruct.prototype.enable=function(){this.enabled=true;return this;}; /**
	     * Désactive le plugin
	     */StdConstruct.prototype.disable=function(){this.enabled=false;return this;}; /**
	     * Active ou désactive le plugin 
	     * @param opt
	     */StdConstruct.prototype.toggle=function(opt){if(this.enabled)this.disable();else this.enable(opt);return this;}, /**
	     * Désactive le plugin et réinitialise les propriétés.
	     */StdConstruct.prototype.destroy=function(){this.disable();this.reset();return this;};if(typeof JSYG!="undefined")JSYG.StdConstruct=StdConstruct;return StdConstruct;}); /*
	* jQuery Mobile v1.4.5
	* http://jquerymobile.com
	*
	* Copyright 2010, 2014 jQuery Foundation, Inc. and other contributors
	* Released under the MIT license.
	* http://jquery.org/license
	*
	*/(function(root,doc,factory){if(true){ // AMD. Register as an anonymous module.
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(475)], __WEBPACK_LOCAL_MODULE_8__ = (function($){factory($,root,doc);return $.mobile;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));}else { // Browser globals
	factory(root.jQuery,root,doc);}})(undefined,document,function(jQuery,window,document,undefined){ // This plugin is an experiment for abstracting away the touch and mouse
	// events so that developers don't have to worry about which method of input
	// the device their document is loaded on supports.
	//
	// The idea here is to allow the developer to register listeners for the
	// basic mouse events, such as mousedown, mousemove, mouseup, and click,
	// and the plugin will take care of registering the correct listeners
	// behind the scenes to invoke the listener at the fastest possible time
	// for that device, while still retaining the order of event firing in
	// the traditional mouse environment, should multiple handlers be registered
	// on the same element for different events.
	//
	// The current version exposes the following virtual events to jQuery bind methods:
	// "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel"
	(function($,window,document,undefined){if($.vmouse)return;var dataPropertyName="virtualMouseBindings",touchTargetPropertyName="virtualTouchID",virtualEventNames="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),touchEventProps="clientX clientY pageX pageY screenX screenY".split(" "),mouseHookProps=$.event.mouseHooks?$.event.mouseHooks.props:[],mouseEventProps=$.event.props.concat(mouseHookProps),activeDocHandlers={},resetTimerID=0,startX=0,startY=0,didScroll=false,clickBlockList=[],blockMouseTriggers=false,blockTouchTriggers=false,eventCaptureSupported="addEventListener" in document,$document=$(document),nextTouchID=1,lastTouchID=0,threshold,i;$.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};function getNativeEvent(event){while(event&&typeof event.originalEvent!=="undefined"){event=event.originalEvent;}return event;}function createVirtualEvent(event,eventType){var t=event.type,oe,props,ne,prop,ct,touch,i,j,len;event=$.Event(event);event.type=eventType;oe=event.originalEvent;props=$.event.props; // addresses separation of $.event.props in to $.event.mouseHook.props and Issue 3280
	// https://github.com/jquery/jquery-mobile/issues/3280
	if(t.search(/^(mouse|click)/)>-1){props=mouseEventProps;} // copy original event properties over to the new event
	// this would happen if we could call $.event.fix instead of $.Event
	// but we don't have a way to force an event to be fixed multiple times
	if(oe){for(i=props.length,prop;i;){prop=props[--i];event[prop]=oe[prop];}} // make sure that if the mouse and click virtual events are generated
	// without a .which one is defined
	if(t.search(/mouse(down|up)|click/)>-1&&!event.which){event.which=1;}if(t.search(/^touch/)!==-1){ne=getNativeEvent(oe);t=ne.touches;ct=ne.changedTouches;touch=t&&t.length?t[0]:ct&&ct.length?ct[0]:undefined;if(touch){for(j=0,len=touchEventProps.length;j<len;j++){prop=touchEventProps[j];event[prop]=touch[prop];}}}return event;}function getVirtualBindingFlags(element){var flags={},b,k;while(element){b=$.data(element,dataPropertyName);for(k in b){if(b[k]){flags[k]=flags.hasVirtualBinding=true;}}element=element.parentNode;}return flags;}function getClosestElementWithVirtualBinding(element,eventType){var b;while(element){b=$.data(element,dataPropertyName);if(b&&(!eventType||b[eventType])){return element;}element=element.parentNode;}return null;}function enableTouchBindings(){blockTouchTriggers=false;}function disableTouchBindings(){blockTouchTriggers=true;}function enableMouseBindings(){lastTouchID=0;clickBlockList.length=0;blockMouseTriggers=false; // When mouse bindings are enabled, our
	// touch bindings are disabled.
	disableTouchBindings();}function disableMouseBindings(){ // When mouse bindings are disabled, our
	// touch bindings are enabled.
	enableTouchBindings();}function startResetTimer(){clearResetTimer();resetTimerID=setTimeout(function(){resetTimerID=0;enableMouseBindings();},$.vmouse.resetTimerDuration);}function clearResetTimer(){if(resetTimerID){clearTimeout(resetTimerID);resetTimerID=0;}}function triggerVirtualEvent(eventType,event,flags){var ve;if(flags&&flags[eventType]||!flags&&getClosestElementWithVirtualBinding(event.target,eventType)){ve=createVirtualEvent(event,eventType);$(event.target).trigger(ve);}return ve;}function mouseEventCallback(event){var touchID=$.data(event.target,touchTargetPropertyName),ve;if(!blockMouseTriggers&&(!lastTouchID||lastTouchID!==touchID)){ve=triggerVirtualEvent("v"+event.type,event);if(ve){if(ve.isDefaultPrevented()){event.preventDefault();}if(ve.isPropagationStopped()){event.stopPropagation();}if(ve.isImmediatePropagationStopped()){event.stopImmediatePropagation();}}}}function handleTouchStart(event){var touches=getNativeEvent(event).touches,target,flags,t;if(touches&&touches.length===1){target=event.target;flags=getVirtualBindingFlags(target);if(flags.hasVirtualBinding){lastTouchID=nextTouchID++;$.data(target,touchTargetPropertyName,lastTouchID);clearResetTimer();disableMouseBindings();didScroll=false;t=getNativeEvent(event).touches[0];startX=t.pageX;startY=t.pageY;triggerVirtualEvent("vmouseover",event,flags);triggerVirtualEvent("vmousedown",event,flags);}}}function handleScroll(event){if(blockTouchTriggers){return;}if(!didScroll){triggerVirtualEvent("vmousecancel",event,getVirtualBindingFlags(event.target));}didScroll=true;startResetTimer();}function handleTouchMove(event){if(blockTouchTriggers){return;}var t=getNativeEvent(event).touches[0],didCancel=didScroll,moveThreshold=$.vmouse.moveDistanceThreshold,flags=getVirtualBindingFlags(event.target);didScroll=didScroll||Math.abs(t.pageX-startX)>moveThreshold||Math.abs(t.pageY-startY)>moveThreshold;if(didScroll&&!didCancel){triggerVirtualEvent("vmousecancel",event,flags);}triggerVirtualEvent("vmousemove",event,flags);startResetTimer();}function handleTouchEnd(event){if(blockTouchTriggers){return;}disableTouchBindings();var flags=getVirtualBindingFlags(event.target),ve,t;triggerVirtualEvent("vmouseup",event,flags);if(!didScroll){ve=triggerVirtualEvent("vclick",event,flags);if(ve&&ve.isDefaultPrevented()){ // The target of the mouse events that follow the touchend
	// event don't necessarily match the target used during the
	// touch. This means we need to rely on coordinates for blocking
	// any click that is generated.
	t=getNativeEvent(event).changedTouches[0];clickBlockList.push({touchID:lastTouchID,x:t.clientX,y:t.clientY}); // Prevent any mouse events that follow from triggering
	// virtual event notifications.
	blockMouseTriggers=true;}}triggerVirtualEvent("vmouseout",event,flags);didScroll=false;startResetTimer();}function hasVirtualBindings(ele){var bindings=$.data(ele,dataPropertyName),k;if(bindings){for(k in bindings){if(bindings[k]){return true;}}}return false;}function dummyMouseHandler(){}function getSpecialEventObject(eventType){var realType=eventType.substr(1);return {setup:function setup() /* data, namespace */{ // If this is the first virtual mouse binding for this element,
	// add a bindings object to its data.
	if(!hasVirtualBindings(this)){$.data(this,dataPropertyName,{});} // If setup is called, we know it is the first binding for this
	// eventType, so initialize the count for the eventType to zero.
	var bindings=$.data(this,dataPropertyName);bindings[eventType]=true; // If this is the first virtual mouse event for this type,
	// register a global handler on the document.
	activeDocHandlers[eventType]=(activeDocHandlers[eventType]||0)+1;if(activeDocHandlers[eventType]===1){$document.bind(realType,mouseEventCallback);} // Some browsers, like Opera Mini, won't dispatch mouse/click events
	// for elements unless they actually have handlers registered on them.
	// To get around this, we register dummy handlers on the elements.
	$(this).bind(realType,dummyMouseHandler); // For now, if event capture is not supported, we rely on mouse handlers.
	if(eventCaptureSupported){ // If this is the first virtual mouse binding for the document,
	// register our touchstart handler on the document.
	activeDocHandlers["touchstart"]=(activeDocHandlers["touchstart"]||0)+1;if(activeDocHandlers["touchstart"]===1){$document.bind("touchstart",handleTouchStart).bind("touchend",handleTouchEnd) // On touch platforms, touching the screen and then dragging your finger
	// causes the window content to scroll after some distance threshold is
	// exceeded. On these platforms, a scroll prevents a click event from being
	// dispatched, and on some platforms, even the touchend is suppressed. To
	// mimic the suppression of the click event, we need to watch for a scroll
	// event. Unfortunately, some platforms like iOS don't dispatch scroll
	// events until *AFTER* the user lifts their finger (touchend). This means
	// we need to watch both scroll and touchmove events to figure out whether
	// or not a scroll happenens before the touchend event is fired.
	.bind("touchmove",handleTouchMove).bind("scroll",handleScroll);}}},teardown:function teardown() /* data, namespace */{ // If this is the last virtual binding for this eventType,
	// remove its global handler from the document.
	--activeDocHandlers[eventType];if(!activeDocHandlers[eventType]){$document.unbind(realType,mouseEventCallback);}if(eventCaptureSupported){ // If this is the last virtual mouse binding in existence,
	// remove our document touchstart listener.
	--activeDocHandlers["touchstart"];if(!activeDocHandlers["touchstart"]){$document.unbind("touchstart",handleTouchStart).unbind("touchmove",handleTouchMove).unbind("touchend",handleTouchEnd).unbind("scroll",handleScroll);}}var $this=$(this),bindings=$.data(this,dataPropertyName); // teardown may be called when an element was
	// removed from the DOM. If this is the case,
	// jQuery core may have already stripped the element
	// of any data bindings so we need to check it before
	// using it.
	if(bindings){bindings[eventType]=false;} // Unregister the dummy event handler.
	$this.unbind(realType,dummyMouseHandler); // If this is the last virtual mouse binding on the
	// element, remove the binding data from the element.
	if(!hasVirtualBindings(this)){$this.removeData(dataPropertyName);}}};} // Expose our custom events to the jQuery bind/unbind mechanism.
	for(i=0;i<virtualEventNames.length;i++){$.event.special[virtualEventNames[i]]=getSpecialEventObject(virtualEventNames[i]);} // Add a capture click handler to block clicks.
	// Note that we require event capture support for this so if the device
	// doesn't support it, we punt for now and rely solely on mouse events.
	if(eventCaptureSupported){document.addEventListener("click",function(e){var cnt=clickBlockList.length,target=e.target,x,y,ele,i,o,touchID;if(cnt){x=e.clientX;y=e.clientY;threshold=$.vmouse.clickDistanceThreshold; // The idea here is to run through the clickBlockList to see if
	// the current click event is in the proximity of one of our
	// vclick events that had preventDefault() called on it. If we find
	// one, then we block the click.
	//
	// Why do we have to rely on proximity?
	//
	// Because the target of the touch event that triggered the vclick
	// can be different from the target of the click event synthesized
	// by the browser. The target of a mouse/click event that is synthesized
	// from a touch event seems to be implementation specific. For example,
	// some browsers will fire mouse/click events for a link that is near
	// a touch event, even though the target of the touchstart/touchend event
	// says the user touched outside the link. Also, it seems that with most
	// browsers, the target of the mouse/click event is not calculated until the
	// time it is dispatched, so if you replace an element that you touched
	// with another element, the target of the mouse/click will be the new
	// element underneath that point.
	//
	// Aside from proximity, we also check to see if the target and any
	// of its ancestors were the ones that blocked a click. This is necessary
	// because of the strange mouse/click target calculation done in the
	// Android 2.1 browser, where if you click on an element, and there is a
	// mouse/click handler on one of its ancestors, the target will be the
	// innermost child of the touched element, even if that child is no where
	// near the point of touch.
	ele=target;while(ele){for(i=0;i<cnt;i++){o=clickBlockList[i];touchID=0;if(ele===target&&Math.abs(o.x-x)<threshold&&Math.abs(o.y-y)<threshold||$.data(ele,touchTargetPropertyName)===o.touchID){ // XXX: We may want to consider removing matches from the block list
	//      instead of waiting for the reset timer to fire.
	e.preventDefault();e.stopPropagation();return;}}ele=ele.parentNode;}}},true);}})(jQuery,window,document);}); /**
	 * isMobile.js v0.4.0
	 *
	 * A simple library to detect Apple phones and tablets,
	 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
	 * and any kind of seven inch device, via user agent sniffing.
	 *
	 * @author: Kai Mallea (kmallea@gmail.com)
	 *
	 * @license: http://creativecommons.org/publicdomain/zero/1.0/
	 */(function(global){var apple_phone=/iPhone/i,apple_ipod=/iPod/i,apple_tablet=/iPad/i,android_phone=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, // Match 'Android' AND 'Mobile'
	android_tablet=/Android/i,amazon_phone=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,amazon_tablet=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,windows_phone=/IEMobile/i,windows_tablet=/(?=.*\bWindows\b)(?=.*\bARM\b)/i, // Match 'Windows' AND 'ARM'
	other_blackberry=/BlackBerry/i,other_blackberry_10=/BB10/i,other_opera=/Opera Mini/i,other_chrome=/(CriOS|Chrome)(?=.*\bMobile\b)/i,other_firefox=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, // Match 'Firefox' AND 'Mobile'
	seven_inch=new RegExp('(?:'+ // Non-capturing group
	'Nexus 7'+ // Nexus 7
	'|'+ // OR
	'BNTV250'+ // B&N Nook Tablet 7 inch
	'|'+ // OR
	'Kindle Fire'+ // Kindle Fire
	'|'+ // OR
	'Silk'+ // Kindle Fire, Silk Accelerated
	'|'+ // OR
	'GT-P1000'+ // Galaxy Tab 7 inch
	')', // End non-capturing group
	'i'); // Case-insensitive matching
	var match=function match(regex,userAgent){return regex.test(userAgent);};var IsMobileClass=function IsMobileClass(userAgent){var ua=userAgent||navigator.userAgent; // Facebook mobile app's integrated browser adds a bunch of strings that
	// match everything. Strip it out if it exists.
	var tmp=ua.split('[FBAN');if(typeof tmp[1]!=='undefined'){ua=tmp[0];} // Twitter mobile app's integrated browser on iPad adds a "Twitter for
	// iPhone" string. Same probable happens on other tablet platforms.
	// This will confuse detection so strip it out if it exists.
	tmp=ua.split('Twitter');if(typeof tmp[1]!=='undefined'){ua=tmp[0];}this.apple={phone:match(apple_phone,ua),ipod:match(apple_ipod,ua),tablet:!match(apple_phone,ua)&&match(apple_tablet,ua),device:match(apple_phone,ua)||match(apple_ipod,ua)||match(apple_tablet,ua)};this.amazon={phone:match(amazon_phone,ua),tablet:!match(amazon_phone,ua)&&match(amazon_tablet,ua),device:match(amazon_phone,ua)||match(amazon_tablet,ua)};this.android={phone:match(amazon_phone,ua)||match(android_phone,ua),tablet:!match(amazon_phone,ua)&&!match(android_phone,ua)&&(match(amazon_tablet,ua)||match(android_tablet,ua)),device:match(amazon_phone,ua)||match(amazon_tablet,ua)||match(android_phone,ua)||match(android_tablet,ua)};this.windows={phone:match(windows_phone,ua),tablet:match(windows_tablet,ua),device:match(windows_phone,ua)||match(windows_tablet,ua)};this.other={blackberry:match(other_blackberry,ua),blackberry10:match(other_blackberry_10,ua),opera:match(other_opera,ua),firefox:match(other_firefox,ua),chrome:match(other_chrome,ua),device:match(other_blackberry,ua)||match(other_blackberry_10,ua)||match(other_opera,ua)||match(other_firefox,ua)||match(other_chrome,ua)};this.seven_inch=match(seven_inch,ua);this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch; // excludes 'other' devices and ipods, targeting touchscreen phones
	this.phone=this.apple.phone||this.android.phone||this.windows.phone; // excludes 7 inch devices, classifying as phone or tablet is left to the user
	this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet;if(typeof window==='undefined'){return this;}};var instantiate=function instantiate(){var IM=new IsMobileClass();IM.Class=IsMobileClass;return IM;};if(typeof module!=='undefined'&&module.exports&&typeof window==='undefined'){ //node
	module.exports=IsMobileClass;}else if(typeof module!=='undefined'&&module.exports&&typeof window!=='undefined'){ //browserify
	module.exports=instantiate();}else if(true){ //AMD
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (global.isMobile=instantiate()), __WEBPACK_LOCAL_MODULE_9__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__));}else {global.isMobile=instantiate();}})(undefined);if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_5__,__WEBPACK_LOCAL_MODULE_6__,__WEBPACK_LOCAL_MODULE_7__,__WEBPACK_LOCAL_MODULE_9__,__WEBPACK_LOCAL_MODULE_8__], __WEBPACK_AMD_DEFINE_RESULT__ = function(JSYG,Events,StdConstruct,isMobile){JSYG.Events=Events;JSYG.StdConstruct=StdConstruct;JSYG.isMobile=isMobile;return JSYG;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else if(typeof JSYG!="undefined"&&typeof isMobile!="undefined")JSYG.isMobile=isMobile;

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(484);

/***/ },

/***/ 484:
/***/ function(module, exports) {

	"use strict";
	
	// SVGPathSeg API polyfill
	// https://github.com/progers/pathseg
	//
	// This is a drop-in replacement for the SVGPathSeg and SVGPathSegList APIs that were removed from
	// SVG2 (https://lists.w3.org/Archives/Public/www-svg/2015Jun/0044.html), including the latest spec
	// changes which were implemented in Firefox 43 and Chrome 46.
	
	(function () {
	    "use strict";
	
	    if (!("SVGPathSeg" in window)) {
	        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathSeg
	        window.SVGPathSeg = function (type, typeAsLetter, owningPathSegList) {
	            this.pathSegType = type;
	            this.pathSegTypeAsLetter = typeAsLetter;
	            this._owningPathSegList = owningPathSegList;
	        };
	
	        SVGPathSeg.prototype.classname = "SVGPathSeg";
	
	        SVGPathSeg.PATHSEG_UNKNOWN = 0;
	        SVGPathSeg.PATHSEG_CLOSEPATH = 1;
	        SVGPathSeg.PATHSEG_MOVETO_ABS = 2;
	        SVGPathSeg.PATHSEG_MOVETO_REL = 3;
	        SVGPathSeg.PATHSEG_LINETO_ABS = 4;
	        SVGPathSeg.PATHSEG_LINETO_REL = 5;
	        SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6;
	        SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7;
	        SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8;
	        SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9;
	        SVGPathSeg.PATHSEG_ARC_ABS = 10;
	        SVGPathSeg.PATHSEG_ARC_REL = 11;
	        SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12;
	        SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13;
	        SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14;
	        SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15;
	        SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16;
	        SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17;
	        SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18;
	        SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19;
	
	        // Notify owning PathSegList on any changes so they can be synchronized back to the path element.
	        SVGPathSeg.prototype._segmentChanged = function () {
	            if (this._owningPathSegList) this._owningPathSegList.segmentChanged(this);
	        };
	
	        window.SVGPathSegClosePath = function (owningPathSegList) {
	            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CLOSEPATH, "z", owningPathSegList);
	        };
	        SVGPathSegClosePath.prototype = Object.create(SVGPathSeg.prototype);
	        SVGPathSegClosePath.prototype.toString = function () {
	            return "[object SVGPathSegClosePath]";
	        };
	        SVGPathSegClosePath.prototype._asPathString = function () {
	            return this.pathSegTypeAsLetter;
	        };
	        SVGPathSegClosePath.prototype.clone = function () {
	            return new SVGPathSegClosePath(undefined);
	        };
	
	        window.SVGPathSegMovetoAbs = function (owningPathSegList, x, y) {
	            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_MOVETO_ABS, "M", owningPathSegList);
	            this._x = x;
	            this._y = y;
	        };
	        SVGPathSegMovetoAbs.prototype = Object.create(SVGPathSeg.prototype);
	        SVGPathSegMovetoAbs.prototype.toString = function () {
	            return "[object SVGPathSegMovetoAbs]";
	        };
	        SVGPathSegMovetoAbs.prototype._asPathString = function () {
	            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
	        };
	        SVGPathSegMovetoAbs.prototype.clone = function () {
	            return new SVGPathSegMovetoAbs(undefined, this._x, this._y);
	        };
	        Object.defineProperty(SVGPathSegMovetoAbs.prototype, "x", { get: function get() {
	                return this._x;
	            }, set: function set(x) {
	                this._x = x;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegMovetoAbs.prototype, "y", { get: function get() {
	                return this._y;
	            }, set: function set(y) {
	                this._y = y;this._segmentChanged();
	            }, enumerable: true });
	
	        window.SVGPathSegMovetoRel = function (owningPathSegList, x, y) {
	            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_MOVETO_REL, "m", owningPathSegList);
	            this._x = x;
	            this._y = y;
	        };
	        SVGPathSegMovetoRel.prototype = Object.create(SVGPathSeg.prototype);
	        SVGPathSegMovetoRel.prototype.toString = function () {
	            return "[object SVGPathSegMovetoRel]";
	        };
	        SVGPathSegMovetoRel.prototype._asPathString = function () {
	            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
	        };
	        SVGPathSegMovetoRel.prototype.clone = function () {
	            return new SVGPathSegMovetoRel(undefined, this._x, this._y);
	        };
	        Object.defineProperty(SVGPathSegMovetoRel.prototype, "x", { get: function get() {
	                return this._x;
	            }, set: function set(x) {
	                this._x = x;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegMovetoRel.prototype, "y", { get: function get() {
	                return this._y;
	            }, set: function set(y) {
	                this._y = y;this._segmentChanged();
	            }, enumerable: true });
	
	        window.SVGPathSegLinetoAbs = function (owningPathSegList, x, y) {
	            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_ABS, "L", owningPathSegList);
	            this._x = x;
	            this._y = y;
	        };
	        SVGPathSegLinetoAbs.prototype = Object.create(SVGPathSeg.prototype);
	        SVGPathSegLinetoAbs.prototype.toString = function () {
	            return "[object SVGPathSegLinetoAbs]";
	        };
	        SVGPathSegLinetoAbs.prototype._asPathString = function () {
	            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
	        };
	        SVGPathSegLinetoAbs.prototype.clone = function () {
	            return new SVGPathSegLinetoAbs(undefined, this._x, this._y);
	        };
	        Object.defineProperty(SVGPathSegLinetoAbs.prototype, "x", { get: function get() {
	                return this._x;
	            }, set: function set(x) {
	                this._x = x;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegLinetoAbs.prototype, "y", { get: function get() {
	                return this._y;
	            }, set: function set(y) {
	                this._y = y;this._segmentChanged();
	            }, enumerable: true });
	
	        window.SVGPathSegLinetoRel = function (owningPathSegList, x, y) {
	            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_REL, "l", owningPathSegList);
	            this._x = x;
	            this._y = y;
	        };
	        SVGPathSegLinetoRel.prototype = Object.create(SVGPathSeg.prototype);
	        SVGPathSegLinetoRel.prototype.toString = function () {
	            return "[object SVGPathSegLinetoRel]";
	        };
	        SVGPathSegLinetoRel.prototype._asPathString = function () {
	            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
	        };
	        SVGPathSegLinetoRel.prototype.clone = function () {
	            return new SVGPathSegLinetoRel(undefined, this._x, this._y);
	        };
	        Object.defineProperty(SVGPathSegLinetoRel.prototype, "x", { get: function get() {
	                return this._x;
	            }, set: function set(x) {
	                this._x = x;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegLinetoRel.prototype, "y", { get: function get() {
	                return this._y;
	            }, set: function set(y) {
	                this._y = y;this._segmentChanged();
	            }, enumerable: true });
	
	        window.SVGPathSegCurvetoCubicAbs = function (owningPathSegList, x, y, x1, y1, x2, y2) {
	            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", owningPathSegList);
	            this._x = x;
	            this._y = y;
	            this._x1 = x1;
	            this._y1 = y1;
	            this._x2 = x2;
	            this._y2 = y2;
	        };
	        SVGPathSegCurvetoCubicAbs.prototype = Object.create(SVGPathSeg.prototype);
	        SVGPathSegCurvetoCubicAbs.prototype.toString = function () {
	            return "[object SVGPathSegCurvetoCubicAbs]";
	        };
	        SVGPathSegCurvetoCubicAbs.prototype._asPathString = function () {
	            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
	        };
	        SVGPathSegCurvetoCubicAbs.prototype.clone = function () {
	            return new SVGPathSegCurvetoCubicAbs(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
	        };
	        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "x", { get: function get() {
	                return this._x;
	            }, set: function set(x) {
	                this._x = x;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "y", { get: function get() {
	                return this._y;
	            }, set: function set(y) {
	                this._y = y;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "x1", { get: function get() {
	                return this._x1;
	            }, set: function set(x1) {
	                this._x1 = x1;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "y1", { get: function get() {
	                return this._y1;
	            }, set: function set(y1) {
	                this._y1 = y1;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "x2", { get: function get() {
	                return this._x2;
	            }, set: function set(x2) {
	                this._x2 = x2;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "y2", { get: function get() {
	                return this._y2;
	            }, set: function set(y2) {
	                this._y2 = y2;this._segmentChanged();
	            }, enumerable: true });
	
	        window.SVGPathSegCurvetoCubicRel = function (owningPathSegList, x, y, x1, y1, x2, y2) {
	            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", owningPathSegList);
	            this._x = x;
	            this._y = y;
	            this._x1 = x1;
	            this._y1 = y1;
	            this._x2 = x2;
	            this._y2 = y2;
	        };
	        SVGPathSegCurvetoCubicRel.prototype = Object.create(SVGPathSeg.prototype);
	        SVGPathSegCurvetoCubicRel.prototype.toString = function () {
	            return "[object SVGPathSegCurvetoCubicRel]";
	        };
	        SVGPathSegCurvetoCubicRel.prototype._asPathString = function () {
	            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
	        };
	        SVGPathSegCurvetoCubicRel.prototype.clone = function () {
	            return new SVGPathSegCurvetoCubicRel(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
	        };
	        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "x", { get: function get() {
	                return this._x;
	            }, set: function set(x) {
	                this._x = x;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "y", { get: function get() {
	                return this._y;
	            }, set: function set(y) {
	                this._y = y;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "x1", { get: function get() {
	                return this._x1;
	            }, set: function set(x1) {
	                this._x1 = x1;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "y1", { get: function get() {
	                return this._y1;
	            }, set: function set(y1) {
	                this._y1 = y1;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "x2", { get: function get() {
	                return this._x2;
	            }, set: function set(x2) {
	                this._x2 = x2;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "y2", { get: function get() {
	                return this._y2;
	            }, set: function set(y2) {
	                this._y2 = y2;this._segmentChanged();
	            }, enumerable: true });
	
	        window.SVGPathSegCurvetoQuadraticAbs = function (owningPathSegList, x, y, x1, y1) {
	            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", owningPathSegList);
	            this._x = x;
	            this._y = y;
	            this._x1 = x1;
	            this._y1 = y1;
	        };
	        SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(SVGPathSeg.prototype);
	        SVGPathSegCurvetoQuadraticAbs.prototype.toString = function () {
	            return "[object SVGPathSegCurvetoQuadraticAbs]";
	        };
	        SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function () {
	            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
	        };
	        SVGPathSegCurvetoQuadraticAbs.prototype.clone = function () {
	            return new SVGPathSegCurvetoQuadraticAbs(undefined, this._x, this._y, this._x1, this._y1);
	        };
	        Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype, "x", { get: function get() {
	                return this._x;
	            }, set: function set(x) {
	                this._x = x;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype, "y", { get: function get() {
	                return this._y;
	            }, set: function set(y) {
	                this._y = y;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype, "x1", { get: function get() {
	                return this._x1;
	            }, set: function set(x1) {
	                this._x1 = x1;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype, "y1", { get: function get() {
	                return this._y1;
	            }, set: function set(y1) {
	                this._y1 = y1;this._segmentChanged();
	            }, enumerable: true });
	
	        window.SVGPathSegCurvetoQuadraticRel = function (owningPathSegList, x, y, x1, y1) {
	            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", owningPathSegList);
	            this._x = x;
	            this._y = y;
	            this._x1 = x1;
	            this._y1 = y1;
	        };
	        SVGPathSegCurvetoQuadraticRel.prototype = Object.create(SVGPathSeg.prototype);
	        SVGPathSegCurvetoQuadraticRel.prototype.toString = function () {
	            return "[object SVGPathSegCurvetoQuadraticRel]";
	        };
	        SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function () {
	            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
	        };
	        SVGPathSegCurvetoQuadraticRel.prototype.clone = function () {
	            return new SVGPathSegCurvetoQuadraticRel(undefined, this._x, this._y, this._x1, this._y1);
	        };
	        Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype, "x", { get: function get() {
	                return this._x;
	            }, set: function set(x) {
	                this._x = x;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype, "y", { get: function get() {
	                return this._y;
	            }, set: function set(y) {
	                this._y = y;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype, "x1", { get: function get() {
	                return this._x1;
	            }, set: function set(x1) {
	                this._x1 = x1;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype, "y1", { get: function get() {
	                return this._y1;
	            }, set: function set(y1) {
	                this._y1 = y1;this._segmentChanged();
	            }, enumerable: true });
	
	        window.SVGPathSegArcAbs = function (owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
	            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_ARC_ABS, "A", owningPathSegList);
	            this._x = x;
	            this._y = y;
	            this._r1 = r1;
	            this._r2 = r2;
	            this._angle = angle;
	            this._largeArcFlag = largeArcFlag;
	            this._sweepFlag = sweepFlag;
	        };
	        SVGPathSegArcAbs.prototype = Object.create(SVGPathSeg.prototype);
	        SVGPathSegArcAbs.prototype.toString = function () {
	            return "[object SVGPathSegArcAbs]";
	        };
	        SVGPathSegArcAbs.prototype._asPathString = function () {
	            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
	        };
	        SVGPathSegArcAbs.prototype.clone = function () {
	            return new SVGPathSegArcAbs(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
	        };
	        Object.defineProperty(SVGPathSegArcAbs.prototype, "x", { get: function get() {
	                return this._x;
	            }, set: function set(x) {
	                this._x = x;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegArcAbs.prototype, "y", { get: function get() {
	                return this._y;
	            }, set: function set(y) {
	                this._y = y;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegArcAbs.prototype, "r1", { get: function get() {
	                return this._r1;
	            }, set: function set(r1) {
	                this._r1 = r1;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegArcAbs.prototype, "r2", { get: function get() {
	                return this._r2;
	            }, set: function set(r2) {
	                this._r2 = r2;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegArcAbs.prototype, "angle", { get: function get() {
	                return this._angle;
	            }, set: function set(angle) {
	                this._angle = angle;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegArcAbs.prototype, "largeArcFlag", { get: function get() {
	                return this._largeArcFlag;
	            }, set: function set(largeArcFlag) {
	                this._largeArcFlag = largeArcFlag;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegArcAbs.prototype, "sweepFlag", { get: function get() {
	                return this._sweepFlag;
	            }, set: function set(sweepFlag) {
	                this._sweepFlag = sweepFlag;this._segmentChanged();
	            }, enumerable: true });
	
	        window.SVGPathSegArcRel = function (owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
	            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_ARC_REL, "a", owningPathSegList);
	            this._x = x;
	            this._y = y;
	            this._r1 = r1;
	            this._r2 = r2;
	            this._angle = angle;
	            this._largeArcFlag = largeArcFlag;
	            this._sweepFlag = sweepFlag;
	        };
	        SVGPathSegArcRel.prototype = Object.create(SVGPathSeg.prototype);
	        SVGPathSegArcRel.prototype.toString = function () {
	            return "[object SVGPathSegArcRel]";
	        };
	        SVGPathSegArcRel.prototype._asPathString = function () {
	            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
	        };
	        SVGPathSegArcRel.prototype.clone = function () {
	            return new SVGPathSegArcRel(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
	        };
	        Object.defineProperty(SVGPathSegArcRel.prototype, "x", { get: function get() {
	                return this._x;
	            }, set: function set(x) {
	                this._x = x;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegArcRel.prototype, "y", { get: function get() {
	                return this._y;
	            }, set: function set(y) {
	                this._y = y;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegArcRel.prototype, "r1", { get: function get() {
	                return this._r1;
	            }, set: function set(r1) {
	                this._r1 = r1;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegArcRel.prototype, "r2", { get: function get() {
	                return this._r2;
	            }, set: function set(r2) {
	                this._r2 = r2;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegArcRel.prototype, "angle", { get: function get() {
	                return this._angle;
	            }, set: function set(angle) {
	                this._angle = angle;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegArcRel.prototype, "largeArcFlag", { get: function get() {
	                return this._largeArcFlag;
	            }, set: function set(largeArcFlag) {
	                this._largeArcFlag = largeArcFlag;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegArcRel.prototype, "sweepFlag", { get: function get() {
	                return this._sweepFlag;
	            }, set: function set(sweepFlag) {
	                this._sweepFlag = sweepFlag;this._segmentChanged();
	            }, enumerable: true });
	
	        window.SVGPathSegLinetoHorizontalAbs = function (owningPathSegList, x) {
	            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", owningPathSegList);
	            this._x = x;
	        };
	        SVGPathSegLinetoHorizontalAbs.prototype = Object.create(SVGPathSeg.prototype);
	        SVGPathSegLinetoHorizontalAbs.prototype.toString = function () {
	            return "[object SVGPathSegLinetoHorizontalAbs]";
	        };
	        SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function () {
	            return this.pathSegTypeAsLetter + " " + this._x;
	        };
	        SVGPathSegLinetoHorizontalAbs.prototype.clone = function () {
	            return new SVGPathSegLinetoHorizontalAbs(undefined, this._x);
	        };
	        Object.defineProperty(SVGPathSegLinetoHorizontalAbs.prototype, "x", { get: function get() {
	                return this._x;
	            }, set: function set(x) {
	                this._x = x;this._segmentChanged();
	            }, enumerable: true });
	
	        window.SVGPathSegLinetoHorizontalRel = function (owningPathSegList, x) {
	            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", owningPathSegList);
	            this._x = x;
	        };
	        SVGPathSegLinetoHorizontalRel.prototype = Object.create(SVGPathSeg.prototype);
	        SVGPathSegLinetoHorizontalRel.prototype.toString = function () {
	            return "[object SVGPathSegLinetoHorizontalRel]";
	        };
	        SVGPathSegLinetoHorizontalRel.prototype._asPathString = function () {
	            return this.pathSegTypeAsLetter + " " + this._x;
	        };
	        SVGPathSegLinetoHorizontalRel.prototype.clone = function () {
	            return new SVGPathSegLinetoHorizontalRel(undefined, this._x);
	        };
	        Object.defineProperty(SVGPathSegLinetoHorizontalRel.prototype, "x", { get: function get() {
	                return this._x;
	            }, set: function set(x) {
	                this._x = x;this._segmentChanged();
	            }, enumerable: true });
	
	        window.SVGPathSegLinetoVerticalAbs = function (owningPathSegList, y) {
	            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", owningPathSegList);
	            this._y = y;
	        };
	        SVGPathSegLinetoVerticalAbs.prototype = Object.create(SVGPathSeg.prototype);
	        SVGPathSegLinetoVerticalAbs.prototype.toString = function () {
	            return "[object SVGPathSegLinetoVerticalAbs]";
	        };
	        SVGPathSegLinetoVerticalAbs.prototype._asPathString = function () {
	            return this.pathSegTypeAsLetter + " " + this._y;
	        };
	        SVGPathSegLinetoVerticalAbs.prototype.clone = function () {
	            return new SVGPathSegLinetoVerticalAbs(undefined, this._y);
	        };
	        Object.defineProperty(SVGPathSegLinetoVerticalAbs.prototype, "y", { get: function get() {
	                return this._y;
	            }, set: function set(y) {
	                this._y = y;this._segmentChanged();
	            }, enumerable: true });
	
	        window.SVGPathSegLinetoVerticalRel = function (owningPathSegList, y) {
	            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", owningPathSegList);
	            this._y = y;
	        };
	        SVGPathSegLinetoVerticalRel.prototype = Object.create(SVGPathSeg.prototype);
	        SVGPathSegLinetoVerticalRel.prototype.toString = function () {
	            return "[object SVGPathSegLinetoVerticalRel]";
	        };
	        SVGPathSegLinetoVerticalRel.prototype._asPathString = function () {
	            return this.pathSegTypeAsLetter + " " + this._y;
	        };
	        SVGPathSegLinetoVerticalRel.prototype.clone = function () {
	            return new SVGPathSegLinetoVerticalRel(undefined, this._y);
	        };
	        Object.defineProperty(SVGPathSegLinetoVerticalRel.prototype, "y", { get: function get() {
	                return this._y;
	            }, set: function set(y) {
	                this._y = y;this._segmentChanged();
	            }, enumerable: true });
	
	        window.SVGPathSegCurvetoCubicSmoothAbs = function (owningPathSegList, x, y, x2, y2) {
	            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", owningPathSegList);
	            this._x = x;
	            this._y = y;
	            this._x2 = x2;
	            this._y2 = y2;
	        };
	        SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(SVGPathSeg.prototype);
	        SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function () {
	            return "[object SVGPathSegCurvetoCubicSmoothAbs]";
	        };
	        SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function () {
	            return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
	        };
	        SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function () {
	            return new SVGPathSegCurvetoCubicSmoothAbs(undefined, this._x, this._y, this._x2, this._y2);
	        };
	        Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", { get: function get() {
	                return this._x;
	            }, set: function set(x) {
	                this._x = x;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", { get: function get() {
	                return this._y;
	            }, set: function set(y) {
	                this._y = y;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", { get: function get() {
	                return this._x2;
	            }, set: function set(x2) {
	                this._x2 = x2;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", { get: function get() {
	                return this._y2;
	            }, set: function set(y2) {
	                this._y2 = y2;this._segmentChanged();
	            }, enumerable: true });
	
	        window.SVGPathSegCurvetoCubicSmoothRel = function (owningPathSegList, x, y, x2, y2) {
	            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", owningPathSegList);
	            this._x = x;
	            this._y = y;
	            this._x2 = x2;
	            this._y2 = y2;
	        };
	        SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(SVGPathSeg.prototype);
	        SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function () {
	            return "[object SVGPathSegCurvetoCubicSmoothRel]";
	        };
	        SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function () {
	            return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
	        };
	        SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function () {
	            return new SVGPathSegCurvetoCubicSmoothRel(undefined, this._x, this._y, this._x2, this._y2);
	        };
	        Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype, "x", { get: function get() {
	                return this._x;
	            }, set: function set(x) {
	                this._x = x;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype, "y", { get: function get() {
	                return this._y;
	            }, set: function set(y) {
	                this._y = y;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", { get: function get() {
	                return this._x2;
	            }, set: function set(x2) {
	                this._x2 = x2;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", { get: function get() {
	                return this._y2;
	            }, set: function set(y2) {
	                this._y2 = y2;this._segmentChanged();
	            }, enumerable: true });
	
	        window.SVGPathSegCurvetoQuadraticSmoothAbs = function (owningPathSegList, x, y) {
	            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", owningPathSegList);
	            this._x = x;
	            this._y = y;
	        };
	        SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(SVGPathSeg.prototype);
	        SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function () {
	            return "[object SVGPathSegCurvetoQuadraticSmoothAbs]";
	        };
	        SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function () {
	            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
	        };
	        SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function () {
	            return new SVGPathSegCurvetoQuadraticSmoothAbs(undefined, this._x, this._y);
	        };
	        Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", { get: function get() {
	                return this._x;
	            }, set: function set(x) {
	                this._x = x;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", { get: function get() {
	                return this._y;
	            }, set: function set(y) {
	                this._y = y;this._segmentChanged();
	            }, enumerable: true });
	
	        window.SVGPathSegCurvetoQuadraticSmoothRel = function (owningPathSegList, x, y) {
	            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", owningPathSegList);
	            this._x = x;
	            this._y = y;
	        };
	        SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(SVGPathSeg.prototype);
	        SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function () {
	            return "[object SVGPathSegCurvetoQuadraticSmoothRel]";
	        };
	        SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function () {
	            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
	        };
	        SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function () {
	            return new SVGPathSegCurvetoQuadraticSmoothRel(undefined, this._x, this._y);
	        };
	        Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", { get: function get() {
	                return this._x;
	            }, set: function set(x) {
	                this._x = x;this._segmentChanged();
	            }, enumerable: true });
	        Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", { get: function get() {
	                return this._y;
	            }, set: function set(y) {
	                this._y = y;this._segmentChanged();
	            }, enumerable: true });
	
	        // Add createSVGPathSeg* functions to SVGPathElement.
	        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathElement.
	        SVGPathElement.prototype.createSVGPathSegClosePath = function () {
	            return new SVGPathSegClosePath(undefined);
	        };
	        SVGPathElement.prototype.createSVGPathSegMovetoAbs = function (x, y) {
	            return new SVGPathSegMovetoAbs(undefined, x, y);
	        };
	        SVGPathElement.prototype.createSVGPathSegMovetoRel = function (x, y) {
	            return new SVGPathSegMovetoRel(undefined, x, y);
	        };
	        SVGPathElement.prototype.createSVGPathSegLinetoAbs = function (x, y) {
	            return new SVGPathSegLinetoAbs(undefined, x, y);
	        };
	        SVGPathElement.prototype.createSVGPathSegLinetoRel = function (x, y) {
	            return new SVGPathSegLinetoRel(undefined, x, y);
	        };
	        SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function (x, y, x1, y1, x2, y2) {
	            return new SVGPathSegCurvetoCubicAbs(undefined, x, y, x1, y1, x2, y2);
	        };
	        SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function (x, y, x1, y1, x2, y2) {
	            return new SVGPathSegCurvetoCubicRel(undefined, x, y, x1, y1, x2, y2);
	        };
	        SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function (x, y, x1, y1) {
	            return new SVGPathSegCurvetoQuadraticAbs(undefined, x, y, x1, y1);
	        };
	        SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function (x, y, x1, y1) {
	            return new SVGPathSegCurvetoQuadraticRel(undefined, x, y, x1, y1);
	        };
	        SVGPathElement.prototype.createSVGPathSegArcAbs = function (x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
	            return new SVGPathSegArcAbs(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag);
	        };
	        SVGPathElement.prototype.createSVGPathSegArcRel = function (x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
	            return new SVGPathSegArcRel(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag);
	        };
	        SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function (x) {
	            return new SVGPathSegLinetoHorizontalAbs(undefined, x);
	        };
	        SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function (x) {
	            return new SVGPathSegLinetoHorizontalRel(undefined, x);
	        };
	        SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function (y) {
	            return new SVGPathSegLinetoVerticalAbs(undefined, y);
	        };
	        SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function (y) {
	            return new SVGPathSegLinetoVerticalRel(undefined, y);
	        };
	        SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function (x, y, x2, y2) {
	            return new SVGPathSegCurvetoCubicSmoothAbs(undefined, x, y, x2, y2);
	        };
	        SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function (x, y, x2, y2) {
	            return new SVGPathSegCurvetoCubicSmoothRel(undefined, x, y, x2, y2);
	        };
	        SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function (x, y) {
	            return new SVGPathSegCurvetoQuadraticSmoothAbs(undefined, x, y);
	        };
	        SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function (x, y) {
	            return new SVGPathSegCurvetoQuadraticSmoothRel(undefined, x, y);
	        };
	    }
	
	    if (!("SVGPathSegList" in window)) {
	        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathSegList
	        window.SVGPathSegList = function (pathElement) {
	            this._pathElement = pathElement;
	            this._list = this._parsePath(this._pathElement.getAttribute("d"));
	
	            // Use a MutationObserver to catch changes to the path's "d" attribute.
	            this._mutationObserverConfig = { "attributes": true, "attributeFilter": ["d"] };
	            this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this));
	            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
	        };
	
	        SVGPathSegList.prototype.classname = "SVGPathSegList";
	
	        Object.defineProperty(SVGPathSegList.prototype, "numberOfItems", {
	            get: function get() {
	                this._checkPathSynchronizedToList();
	                return this._list.length;
	            },
	            enumerable: true
	        });
	
	        // Add the pathSegList accessors to SVGPathElement.
	        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGAnimatedPathData
	        Object.defineProperty(SVGPathElement.prototype, "pathSegList", {
	            get: function get() {
	                if (!this._pathSegList) this._pathSegList = new SVGPathSegList(this);
	                return this._pathSegList;
	            },
	            enumerable: true
	        });
	        // FIXME: The following are not implemented and simply return SVGPathElement.pathSegList.
	        Object.defineProperty(SVGPathElement.prototype, "normalizedPathSegList", { get: function get() {
	                return this.pathSegList;
	            }, enumerable: true });
	        Object.defineProperty(SVGPathElement.prototype, "animatedPathSegList", { get: function get() {
	                return this.pathSegList;
	            }, enumerable: true });
	        Object.defineProperty(SVGPathElement.prototype, "animatedNormalizedPathSegList", { get: function get() {
	                return this.pathSegList;
	            }, enumerable: true });
	
	        // Process any pending mutations to the path element and update the list as needed.
	        // This should be the first call of all public functions and is needed because
	        // MutationObservers are not synchronous so we can have pending asynchronous mutations.
	        SVGPathSegList.prototype._checkPathSynchronizedToList = function () {
	            this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords());
	        };
	
	        SVGPathSegList.prototype._updateListFromPathMutations = function (mutationRecords) {
	            if (!this._pathElement) return;
	            var hasPathMutations = false;
	            mutationRecords.forEach(function (record) {
	                if (record.attributeName == "d") hasPathMutations = true;
	            });
	            if (hasPathMutations) this._list = this._parsePath(this._pathElement.getAttribute("d"));
	        };
	
	        // Serialize the list and update the path's 'd' attribute.
	        SVGPathSegList.prototype._writeListToPath = function () {
	            this._pathElementMutationObserver.disconnect();
	            this._pathElement.setAttribute("d", SVGPathSegList._pathSegArrayAsString(this._list));
	            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
	        };
	
	        // When a path segment changes the list needs to be synchronized back to the path element.
	        SVGPathSegList.prototype.segmentChanged = function (pathSeg) {
	            this._writeListToPath();
	        };
	
	        SVGPathSegList.prototype.clear = function () {
	            this._checkPathSynchronizedToList();
	
	            this._list.forEach(function (pathSeg) {
	                pathSeg._owningPathSegList = null;
	            });
	            this._list = [];
	            this._writeListToPath();
	        };
	
	        SVGPathSegList.prototype.initialize = function (newItem) {
	            this._checkPathSynchronizedToList();
	
	            this._list = [newItem];
	            newItem._owningPathSegList = this;
	            this._writeListToPath();
	            return newItem;
	        };
	
	        SVGPathSegList.prototype._checkValidIndex = function (index) {
	            if (isNaN(index) || index < 0 || index >= this.numberOfItems) throw "INDEX_SIZE_ERR";
	        };
	
	        SVGPathSegList.prototype.getItem = function (index) {
	            this._checkPathSynchronizedToList();
	
	            this._checkValidIndex(index);
	            return this._list[index];
	        };
	
	        SVGPathSegList.prototype.insertItemBefore = function (newItem, index) {
	            this._checkPathSynchronizedToList();
	
	            // Spec: If the index is greater than or equal to numberOfItems, then the new item is appended to the end of the list.
	            if (index > this.numberOfItems) index = this.numberOfItems;
	            if (newItem._owningPathSegList) {
	                // SVG2 spec says to make a copy.
	                newItem = newItem.clone();
	            }
	            this._list.splice(index, 0, newItem);
	            newItem._owningPathSegList = this;
	            this._writeListToPath();
	            return newItem;
	        };
	
	        SVGPathSegList.prototype.replaceItem = function (newItem, index) {
	            this._checkPathSynchronizedToList();
	
	            if (newItem._owningPathSegList) {
	                // SVG2 spec says to make a copy.
	                newItem = newItem.clone();
	            }
	            this._checkValidIndex(index);
	            this._list[index] = newItem;
	            newItem._owningPathSegList = this;
	            this._writeListToPath();
	            return newItem;
	        };
	
	        SVGPathSegList.prototype.removeItem = function (index) {
	            this._checkPathSynchronizedToList();
	
	            this._checkValidIndex(index);
	            var item = this._list[index];
	            this._list.splice(index, 1);
	            this._writeListToPath();
	            return item;
	        };
	
	        SVGPathSegList.prototype.appendItem = function (newItem) {
	            this._checkPathSynchronizedToList();
	
	            if (newItem._owningPathSegList) {
	                // SVG2 spec says to make a copy.
	                newItem = newItem.clone();
	            }
	            this._list.push(newItem);
	            newItem._owningPathSegList = this;
	            // TODO: Optimize this to just append to the existing attribute.
	            this._writeListToPath();
	            return newItem;
	        };
	
	        SVGPathSegList._pathSegArrayAsString = function (pathSegArray) {
	            var string = "";
	            var first = true;
	            pathSegArray.forEach(function (pathSeg) {
	                if (first) {
	                    first = false;
	                    string += pathSeg._asPathString();
	                } else {
	                    string += " " + pathSeg._asPathString();
	                }
	            });
	            return string;
	        };
	
	        // This closely follows SVGPathParser::parsePath from Source/core/svg/SVGPathParser.cpp.
	        SVGPathSegList.prototype._parsePath = function (string) {
	            if (!string || string.length == 0) return [];
	
	            var owningPathSegList = this;
	
	            var Builder = function Builder() {
	                this.pathSegList = [];
	            };
	
	            Builder.prototype.appendSegment = function (pathSeg) {
	                this.pathSegList.push(pathSeg);
	            };
	
	            var Source = function Source(string) {
	                this._string = string;
	                this._currentIndex = 0;
	                this._endIndex = this._string.length;
	                this._previousCommand = SVGPathSeg.PATHSEG_UNKNOWN;
	
	                this._skipOptionalSpaces();
	            };
	
	            Source.prototype._isCurrentSpace = function () {
	                var character = this._string[this._currentIndex];
	                return character <= " " && (character == " " || character == "\n" || character == "\t" || character == "\r" || character == "\f");
	            };
	
	            Source.prototype._skipOptionalSpaces = function () {
	                while (this._currentIndex < this._endIndex && this._isCurrentSpace()) {
	                    this._currentIndex++;
	                }return this._currentIndex < this._endIndex;
	            };
	
	            Source.prototype._skipOptionalSpacesOrDelimiter = function () {
	                if (this._currentIndex < this._endIndex && !this._isCurrentSpace() && this._string.charAt(this._currentIndex) != ",") return false;
	                if (this._skipOptionalSpaces()) {
	                    if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ",") {
	                        this._currentIndex++;
	                        this._skipOptionalSpaces();
	                    }
	                }
	                return this._currentIndex < this._endIndex;
	            };
	
	            Source.prototype.hasMoreData = function () {
	                return this._currentIndex < this._endIndex;
	            };
	
	            Source.prototype.peekSegmentType = function () {
	                var lookahead = this._string[this._currentIndex];
	                return this._pathSegTypeFromChar(lookahead);
	            };
	
	            Source.prototype._pathSegTypeFromChar = function (lookahead) {
	                switch (lookahead) {
	                    case "Z":
	                    case "z":
	                        return SVGPathSeg.PATHSEG_CLOSEPATH;
	                    case "M":
	                        return SVGPathSeg.PATHSEG_MOVETO_ABS;
	                    case "m":
	                        return SVGPathSeg.PATHSEG_MOVETO_REL;
	                    case "L":
	                        return SVGPathSeg.PATHSEG_LINETO_ABS;
	                    case "l":
	                        return SVGPathSeg.PATHSEG_LINETO_REL;
	                    case "C":
	                        return SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
	                    case "c":
	                        return SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
	                    case "Q":
	                        return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
	                    case "q":
	                        return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
	                    case "A":
	                        return SVGPathSeg.PATHSEG_ARC_ABS;
	                    case "a":
	                        return SVGPathSeg.PATHSEG_ARC_REL;
	                    case "H":
	                        return SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
	                    case "h":
	                        return SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
	                    case "V":
	                        return SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
	                    case "v":
	                        return SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
	                    case "S":
	                        return SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
	                    case "s":
	                        return SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
	                    case "T":
	                        return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
	                    case "t":
	                        return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
	                    default:
	                        return SVGPathSeg.PATHSEG_UNKNOWN;
	                }
	            };
	
	            Source.prototype._nextCommandHelper = function (lookahead, previousCommand) {
	                // Check for remaining coordinates in the current command.
	                if ((lookahead == "+" || lookahead == "-" || lookahead == "." || lookahead >= "0" && lookahead <= "9") && previousCommand != SVGPathSeg.PATHSEG_CLOSEPATH) {
	                    if (previousCommand == SVGPathSeg.PATHSEG_MOVETO_ABS) return SVGPathSeg.PATHSEG_LINETO_ABS;
	                    if (previousCommand == SVGPathSeg.PATHSEG_MOVETO_REL) return SVGPathSeg.PATHSEG_LINETO_REL;
	                    return previousCommand;
	                }
	                return SVGPathSeg.PATHSEG_UNKNOWN;
	            };
	
	            Source.prototype.initialCommandIsMoveTo = function () {
	                // If the path is empty it is still valid, so return true.
	                if (!this.hasMoreData()) return true;
	                var command = this.peekSegmentType();
	                // Path must start with moveTo.
	                return command == SVGPathSeg.PATHSEG_MOVETO_ABS || command == SVGPathSeg.PATHSEG_MOVETO_REL;
	            };
	
	            // Parse a number from an SVG path. This very closely follows genericParseNumber(...) from Source/core/svg/SVGParserUtilities.cpp.
	            // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-PathDataBNF
	            Source.prototype._parseNumber = function () {
	                var exponent = 0;
	                var integer = 0;
	                var frac = 1;
	                var decimal = 0;
	                var sign = 1;
	                var expsign = 1;
	
	                var startIndex = this._currentIndex;
	
	                this._skipOptionalSpaces();
	
	                // Read the sign.
	                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "+") this._currentIndex++;else if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "-") {
	                    this._currentIndex++;
	                    sign = -1;
	                }
	
	                if (this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && this._string.charAt(this._currentIndex) != ".")
	                    // The first character of a number must be one of [0-9+-.].
	                    return undefined;
	
	                // Read the integer part, build right-to-left.
	                var startIntPartIndex = this._currentIndex;
	                while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
	                    this._currentIndex++;
	                } // Advance to first non-digit.
	
	                if (this._currentIndex != startIntPartIndex) {
	                    var scanIntPartIndex = this._currentIndex - 1;
	                    var multiplier = 1;
	                    while (scanIntPartIndex >= startIntPartIndex) {
	                        integer += multiplier * (this._string.charAt(scanIntPartIndex--) - "0");
	                        multiplier *= 10;
	                    }
	                }
	
	                // Read the decimals.
	                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ".") {
	                    this._currentIndex++;
	
	                    // There must be a least one digit following the .
	                    if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return undefined;
	                    while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
	                        decimal += (this._string.charAt(this._currentIndex++) - "0") * (frac *= 0.1);
	                    }
	                }
	
	                // Read the exponent part.
	                if (this._currentIndex != startIndex && this._currentIndex + 1 < this._endIndex && (this._string.charAt(this._currentIndex) == "e" || this._string.charAt(this._currentIndex) == "E") && this._string.charAt(this._currentIndex + 1) != "x" && this._string.charAt(this._currentIndex + 1) != "m") {
	                    this._currentIndex++;
	
	                    // Read the sign of the exponent.
	                    if (this._string.charAt(this._currentIndex) == "+") {
	                        this._currentIndex++;
	                    } else if (this._string.charAt(this._currentIndex) == "-") {
	                        this._currentIndex++;
	                        expsign = -1;
	                    }
	
	                    // There must be an exponent.
	                    if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return undefined;
	
	                    while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
	                        exponent *= 10;
	                        exponent += this._string.charAt(this._currentIndex) - "0";
	                        this._currentIndex++;
	                    }
	                }
	
	                var number = integer + decimal;
	                number *= sign;
	
	                if (exponent) number *= Math.pow(10, expsign * exponent);
	
	                if (startIndex == this._currentIndex) return undefined;
	
	                this._skipOptionalSpacesOrDelimiter();
	
	                return number;
	            };
	
	            Source.prototype._parseArcFlag = function () {
	                if (this._currentIndex >= this._endIndex) return undefined;
	                var flag = false;
	                var flagChar = this._string.charAt(this._currentIndex++);
	                if (flagChar == "0") flag = false;else if (flagChar == "1") flag = true;else return undefined;
	
	                this._skipOptionalSpacesOrDelimiter();
	                return flag;
	            };
	
	            Source.prototype.parseSegment = function () {
	                var lookahead = this._string[this._currentIndex];
	                var command = this._pathSegTypeFromChar(lookahead);
	                if (command == SVGPathSeg.PATHSEG_UNKNOWN) {
	                    // Possibly an implicit command. Not allowed if this is the first command.
	                    if (this._previousCommand == SVGPathSeg.PATHSEG_UNKNOWN) return null;
	                    command = this._nextCommandHelper(lookahead, this._previousCommand);
	                    if (command == SVGPathSeg.PATHSEG_UNKNOWN) return null;
	                } else {
	                    this._currentIndex++;
	                }
	
	                this._previousCommand = command;
	
	                switch (command) {
	                    case SVGPathSeg.PATHSEG_MOVETO_REL:
	                        return new SVGPathSegMovetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
	                    case SVGPathSeg.PATHSEG_MOVETO_ABS:
	                        return new SVGPathSegMovetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
	                    case SVGPathSeg.PATHSEG_LINETO_REL:
	                        return new SVGPathSegLinetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
	                    case SVGPathSeg.PATHSEG_LINETO_ABS:
	                        return new SVGPathSegLinetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
	                    case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
	                        return new SVGPathSegLinetoHorizontalRel(owningPathSegList, this._parseNumber());
	                    case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
	                        return new SVGPathSegLinetoHorizontalAbs(owningPathSegList, this._parseNumber());
	                    case SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
	                        return new SVGPathSegLinetoVerticalRel(owningPathSegList, this._parseNumber());
	                    case SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
	                        return new SVGPathSegLinetoVerticalAbs(owningPathSegList, this._parseNumber());
	                    case SVGPathSeg.PATHSEG_CLOSEPATH:
	                        this._skipOptionalSpaces();
	                        return new SVGPathSegClosePath(owningPathSegList);
	                    case SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
	                        var points = { x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
	                        return new SVGPathSegCurvetoCubicRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
	                    case SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
	                        var points = { x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
	                        return new SVGPathSegCurvetoCubicAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
	                    case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
	                        var points = { x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
	                        return new SVGPathSegCurvetoCubicSmoothRel(owningPathSegList, points.x, points.y, points.x2, points.y2);
	                    case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
	                        var points = { x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
	                        return new SVGPathSegCurvetoCubicSmoothAbs(owningPathSegList, points.x, points.y, points.x2, points.y2);
	                    case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
	                        var points = { x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
	                        return new SVGPathSegCurvetoQuadraticRel(owningPathSegList, points.x, points.y, points.x1, points.y1);
	                    case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
	                        var points = { x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
	                        return new SVGPathSegCurvetoQuadraticAbs(owningPathSegList, points.x, points.y, points.x1, points.y1);
	                    case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
	                        return new SVGPathSegCurvetoQuadraticSmoothRel(owningPathSegList, this._parseNumber(), this._parseNumber());
	                    case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
	                        return new SVGPathSegCurvetoQuadraticSmoothAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
	                    case SVGPathSeg.PATHSEG_ARC_REL:
	                        var points = { x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber() };
	                        return new SVGPathSegArcRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
	                    case SVGPathSeg.PATHSEG_ARC_ABS:
	                        var points = { x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber() };
	                        return new SVGPathSegArcAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
	                    default:
	                        throw "Unknown path seg type.";
	                }
	            };
	
	            var builder = new Builder();
	            var source = new Source(string);
	
	            if (!source.initialCommandIsMoveTo()) return [];
	            while (source.hasMoreData()) {
	                var pathSeg = source.parseSegment();
	                if (!pathSeg) return [];
	                builder.appendSegment(pathSeg);
	            }
	
	            return builder.pathSegList;
	        };
	    }
	})();

/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(486);
	__webpack_require__(487);

/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	/*jshint forin:false, eqnull:true*/
	/* globals JSYG*/
	
	(function (factory) {
	
	  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(481), __webpack_require__(479)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof JSYG != "undefined") {
	    if (JSYG.Path) factory(JSYG, JSYG.Path);else throw new Error("JSYG.Resizable is needed");
	  } else throw new Error("JSYG is needed");
	})(function (JSYG) {
	
	  "use strict";
	  /**
	   * <strong>nécessite le module BoundingBox</strong><br/><br/>
	   * Affichage d'un rectangle aux dimensions de l'élément
	   * @param arg argument JSYG faisant référence à l'élément
	   * @param {Object} opt optionnel, objet définissant les options. Si défini, la bounding box est affichée implicitement
	   */
	
	  function BoundingBox(arg, opt) {
	
	    if (arg) this.setNode(arg);else this._setType(this._type);
	
	    if (opt) this.show(opt);
	  }
	
	  BoundingBox.prototype = new JSYG.StdConstruct();
	
	  BoundingBox.prototype.constructor = BoundingBox;
	
	  /**
	   * conteneur (&lt;div&gt; pour éléments html, &lt;g&gt; pour éléments svg)
	   * @type {Object} objet DOM
	   */
	  BoundingBox.prototype.container = null;
	  /**
	   * pour les éléments svg, chemin traçant le contour de la boîte (élement &lt;path&gt;)
	   */
	  BoundingBox.prototype.pathBox = null;
	  /**
	   * pour les éléments svg, chemin traçant le contour de l'élément (élement &lt;path&gt;)
	   */
	  BoundingBox.prototype.pathShadow = null;
	  /**
	   * Classe appliquée au conteneur
	   */
	  BoundingBox.prototype.className = 'strokeBox';
	  /**
	   * Classe appliquée au chemin traçant le contour de l'élément (svg uniquement)
	   */
	  BoundingBox.prototype.classNameShadow = 'shadow';
	  /**
	   * Booléen pour afficher ou non le contour de l'élément (svg uniquement)
	   */
	  BoundingBox.prototype.displayShadow = false;
	  /**
	   * Booléen pour garder ou non la rotation (si false, le rectangle sera toujours un rectangle droit,
	   * si true il aura la même rotation que l'élément)
	   */
	  BoundingBox.prototype.keepRotation = true;
	  /**
	   * Fonctions à exécuter à l'affichage de la boîte
	   */
	  BoundingBox.prototype.onshow = null;
	  /**
	   * Fonctions à exécuter à la suppression de la boîte
	   */
	  BoundingBox.prototype.onhide = null;
	  /**
	   * Fonctions à exécuter à la mise à jour de la boîte
	   */
	  BoundingBox.prototype.onupdate = null;
	  /**
	   * Type de l'élément (svg ou html)
	   */
	  BoundingBox.prototype._type = 'svg';
	  /**
	   * Indique si la boîte est affichée ou non
	   */
	  BoundingBox.prototype.display = false;
	  /**
	   * Met à jour les dimensions de la boîte pour les éléments svg
	   */
	  BoundingBox.prototype._updatesvg = function (opt) {
	
	    if (opt) {
	      this.set(opt);
	    }
	
	    var jNode = new JSYG(this.node),
	        ref = new JSYG(this.container).offsetParent(),
	        CTM = jNode.getMtx(ref),
	        rect,
	        b,
	        d,
	        topleft,
	        topright,
	        bottomleft,
	        bottomright;
	
	    if (this.keepRotation === false) {
	      rect = jNode.getDim(ref);
	      new JSYG(this.pathBox).attr('d', 'M' + rect.x + ',' + rect.y + 'L' + (rect.x + rect.width) + ',' + rect.y + 'L' + (rect.x + rect.width) + ',' + (rect.y + rect.height) + 'L' + rect.x + ',' + (rect.y + rect.height) + 'L' + rect.x + ',' + rect.y);
	    } else {
	
	      b = jNode.getDim();
	      topleft = new JSYG.Vect(b.x, b.y).mtx(CTM);
	      topright = new JSYG.Vect(b.x + b.width, b.y).mtx(CTM);
	      bottomleft = new JSYG.Vect(b.x, b.y + b.height).mtx(CTM);
	      bottomright = new JSYG.Vect(b.x + b.width, b.y + b.height).mtx(CTM);
	
	      new JSYG(this.pathBox).attr('d', 'M' + topleft.x + ',' + topleft.y + 'L' + topright.x + ',' + topright.y + 'L' + bottomright.x + ',' + bottomright.y + 'L' + bottomleft.x + ',' + bottomleft.y + 'L' + topleft.x + ',' + topleft.y);
	    }
	
	    new JSYG(this.container).addClass(this.className);
	
	    if (this.displayShadow) {
	
	      d = jNode.clonePath({ normalize: true }).attr('d');
	
	      if (!this.pathShadow) this.pathShadow = new JSYG('<path>').addClass(this.classNameShadow).appendTo(this.container)[0];
	
	      new JSYG(this.pathShadow).attr('d', d).setMtx(CTM).mtx2attrs();
	    } else if (this.pathShadow) {
	
	      new JSYG(this.pathShadow).remove();
	      this.pathShadow = null;
	    }
	
	    return this;
	  };
	
	  /**
	   * Met à jour les dimensions de la boîte pour les éléments html
	   */
	  BoundingBox.prototype._updatehtml = function (opt) {
	
	    if (opt) this.set(opt);
	
	    var jNode = new JSYG(this.node),
	        rect = jNode.getDim('page');
	
	    new JSYG(this.container).addClass(this.className).css('position', 'absolute').setDim(rect);
	
	    return this;
	  };
	
	  /**
	   * Met à jour les dimensions de la boîte
	   * @param {Object} opt optionnel, objet définissant les options
	   * @returns {BoundingBox}
	   */
	  BoundingBox.prototype.update = function (opt) {
	
	    if (!this.node || !this.display) return this;
	    this['_update' + this._type](opt);
	    this.trigger('update');
	    return this;
	  };
	
	  /**
	   * Affiche la boîte
	   * @param {Object} opt optionnel, objet définissant les options
	   * @returns {BoundingBox}
	   */
	  BoundingBox.prototype.show = function (opt) {
	
	    if (!this.node) return this;
	    new JSYG(this.container).appendTo(new JSYG(this.node).offsetParent('farthest'));
	    this.display = true;
	    this.update(opt);
	    this.trigger('show');
	    return this;
	  };
	
	  /**
	   * Suppression de la boîte du DOM
	   * @returns {BoundingBox}
	   */
	  BoundingBox.prototype.hide = function () {
	    new JSYG(this.container).detach();
	    this.display = false;
	    this.trigger('hide');
	    return this;
	  };
	
	  /**
	   * Affiche ou masque la box
	   * @returns {BoundingBox}
	   */
	  BoundingBox.prototype.toggle = function () {
	
	    this[this.display ? "hide" : "show"]();
	    return this;
	  };
	
	  /**
	   * définit les conteneurs en fonction du type de l'élément
	   * @param {String} type type de l'élément (svg ou html)
	   * @returns {BoundingBox}
	   */
	  BoundingBox.prototype._setType = function (type) {
	
	    if (type === 'svg' && (this._type !== 'svg' || !this.container || !this.hasOwnProperty('container') /*obligatoire pour les constructeurs qui héritent de boundingBox (Editable)*/)) {
	
	        this.container = new JSYG('<g>')[0];
	        this.pathBox = new JSYG('<path>').appendTo(this.container)[0];
	        this.pathShadow = null;
	      } else if (type === 'html' && (this._type !== 'html' || !this.container || !this.hasOwnProperty('container'))) {
	
	      this.container = new JSYG('<div>')[0];
	      this.pathBox = null;
	      this.pathShadow = null;
	    }
	
	    this._type = type;
	
	    return this;
	  };
	
	  /**
	   * définition de l'élément cible
	   * @param arg argument JSYG
	   * @returns {BoundingBox}
	   */
	  BoundingBox.prototype.setNode = function (arg) {
	
	    var display = this.display;
	
	    if (display) this.hide();
	
	    this.node = new JSYG(arg)[0];
	
	    this._setType(new JSYG(this.node).isSVG() ? "svg" : "html");
	
	    if (display) this.show();
	
	    return this;
	  };
	
	  var boundingBox = JSYG.bindPlugin(BoundingBox);
	  /**
	   * Affichage d'une boîte aux dimensions de l'élément. 1er argument obligatoire ('show','hide' ou 'update' en général).<br/><br/>
	   * @returns {JSYG}
	   * @see JSYGBoundingBox pour une utilisation détaillée.
	   * @example new JSYG('#maDiv').boundingBox('show');
	   */
	  JSYG.prototype.boundingBox = function () {
	    return boundingBox.apply(this, arguments);
	  };
	
	  JSYG.BoundingBox = BoundingBox;
	
	  return BoundingBox;
	});

/***/ },

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(488);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(449)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./JSYG.BoundingBox.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./JSYG.BoundingBox.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(388)();
	// imports
	
	
	// module
	exports.push([module.id, "svg g.fillBox path {\n\tfill:black;\n\tfill-opacity:0.1;\n\tstroke:black;\n\tstroke-width:0.5;\n\tstroke-dasharray:4,4;\n}\nsvg g.fillBox path.shadow,svg g.strokeBox path.shadow {\n\tfill:none;\n\tstroke:white;\n\tstroke-width:1;\n}\n\ndiv.fillBox {\n\topacity:0.5;\n\tfilter:alpha(opacity = 50);\n\tborder:1px dashed gray;\n\tposition:absolute;\n\tbackground-color:#CCC;\n}\n\nsvg g.strokeBox path {\n\tfill:none;\n\tstroke:mediumvioletred;\n\tstroke-width:1;\n\tstroke-dasharray:4,4;\n}\ndiv.strokeBox {\n\tborder:2px dashed mediumvioletred;\n\tbackground-color:transparent;\n\tposition:absolute;\n}", ""]);
	
	// exports


/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(490);
	__webpack_require__(495);

/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	/*jshint forin:false, eqnull:true*/
	/* globals JSYG*/
	
	(function (factory) {
	
	    if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(481), __webpack_require__(491), __webpack_require__(493)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof JSYG != "undefined") {
	        if (JSYG.Resizable) factory(JSYG, JSYG.Resizable);else throw new Error("JSYG.Resizable is needed");
	    } else throw new Error("JSYG is needed");
	})(function (JSYG, Resizable) {
	
	    "use strict";
	
	    /**
	     * Sélection d'éléments par tracé d'un cadre avec la souris<br/><br/>
	     * @param arg optionnel, argument JSYG, conteneur sur lequel s'applique la selection (si non défini, ce sera window.document)
	     * @param opt optionnel, objet définissant les options. Si défini, le tracé de sélection est activé implicitement
	     * @returns {Selection}
	     * @example <pre>var select = new Selection();
	     * select.list = ".selectable"; //liste des éléments sélectionnables
	     * select.on("selectedlist",function(e,liste) {
	     * 	alert("j'ai sélectionné "+liste.length+" éléments");
	     * });
	     * select.enable();
	     */
	
	    function Selection(arg, opt) {
	        /**
	         * Liste des éléments sélectionnés
	         */
	        this.selected = [];
	        /**
	         * Liste des éléments survolés
	         */
	        this.selectedOver = [];
	        /**
	         * élément div de tracé de sélection
	         */
	        this.container = document.createElement('div');
	
	        if (arg) this.setNode(arg);
	        if (opt) this.enable(opt);
	    }
	
	    Selection.prototype = new JSYG.StdConstruct();
	
	    Selection.prototype.constructor = Selection;
	
	    /**
	     * id appliqué à l'élément de tracé de sélection (this.container)
	     */
	    Selection.prototype.id = 'Selection';
	    /**
	     * argument JSYG définissant les objets sélectionnables
	     */
	    Selection.prototype.list = null;
	    /**
	     * Autorise ou non la sélection multiple (par tracé ou ctrl+clic)
	     */
	    Selection.prototype.multiple = true;
	    /**
	     * Type de recouvrement pour considéré l'élément comme sélectionné.
	     * 'full' : la sélection doit recouvrir entièrement l'élément,
	     * 'partial' : la sélection doit chevaucher l'élément
	     * 'center' : la sélection doit chevaucher le centre de l'élément
	     * @see JSYG.isOver
	     */
	    Selection.prototype.typeOver = 'full';
	
	    /**
	     * Raccourci clavier pour tout sélectionner
	     */
	    Selection.prototype.shortCutSelectAll = 'ctrl+a';
	
	    /**
	     * Activation automatique des raccourcis clavier
	     */
	    Selection.prototype.autoEnableShortCuts = false;
	    /**
	     * Fonction(s) à exécuter avant le début du tracé (renvoyer false pour l'empêcher)
	     */
	    Selection.prototype.onbeforedrag = null;
	
	    Selection.prototype.onbeforeselect = null;
	    Selection.prototype.onbeforedeselect = null;
	    /**
	     * Fonction(s) à exécuter au début du tracé
	     */
	    Selection.prototype.ondragstart = null;
	    /**
	     * Fonction(s) à exécuter pendant tracé
	     */
	    Selection.prototype.ondrag = null;
	    /**
	     * Fonction(s) à exécuter à la fin du tracé
	     */
	    Selection.prototype.ondragend = null;
	    /**
	     * Fonction(s) à exécuter sur chaque élément nouvellement recouvert par la sélection
	     * this fait référence au conteneur sur lequel s'applique la selection (ou undefined si non défini)
	     * 1er argument : l'élément survolé
	     * 2ème argument : évènement Event
	     */
	    Selection.prototype.onselectover = null;
	    /**
	     * Fonction(s) à exécuter sur chaque élément recouvert pendant le tracé de la sélection
	     * this fait référence au conteneur sur lequel s'applique la selection (ou undefined si non défini)
	     * 1er argument : l'élément survolé
	     * 2ème argument : évènement Event
	     */
	    Selection.prototype.onselectmove = null;
	    /**
	     * Fonction(s) à exécuter sur chaque élément qui sort du tracé de la sélection
	     * this fait référence au conteneur sur lequel s'applique la selection (ou undefined si non défini)
	     * 1er argument : l'élément survolé
	     * 2ème argument : évènement Event
	     */
	    Selection.prototype.onselectout = null;
	    /**
	     * Fonction(s) à exécuter sur chaque élément sélectionné (au relachement de la souris)
	     * this fait référence au conteneur sur lequel s'applique la selection (ou undefined si non défini)
	     * 1er argument : l'élément survolé
	     * 2ème argument : évènement Event
	     */
	    Selection.prototype.onselect = null;
	    /**
	     * Fonction(s) à exécuter sur chaque élément désélectionné (début d'une nouvelle sélection)
	     * this fait référence au conteneur sur lequel s'applique la selection (ou undefined si non défini)
	     * 1er argument : l'élément survolé
	     * 2ème argument : évènement Event
	     */
	    Selection.prototype.ondeselect = null;
	    /**
	     * Fonction(s) à exécuter sur la liste des éléments sélectionnés (au relachement de la souris)
	     * this fait référence au conteneur sur lequel s'applique la selection (ou undefined si non défini)
	     * 1er argument : tableau des éléments sélectionnés
	     * 2ème argument : évènement Event
	     */
	    Selection.prototype.onselectedlist = null;
	    /**
	     * Fonction(s) à exécuter sur la liste des éléments désélectionnés (début d'une nouvelle sélection)
	     * this fait référence au conteneur sur lequel s'applique la selection (ou undefined si non défini)
	     * 1er argument : tableau des éléments sélectionnés
	     * 2ème argument : évènement Event
	     */
	    Selection.prototype.ondeselectedlist = null;
	    /**
	     * Indique si la sélection est active ou non
	     */
	    Selection.prototype.enabled = false;
	    /**
	     * Classe à appliquer aux éléments sélectionnés
	     */
	    Selection.prototype.classSelected = 'selected';
	    /**
	     * Classe à appliquer aux éléments sélectionnables survolés
	     */
	    Selection.prototype.classOver = 'selectOver';
	
	    /**
	     * Options du plugin Resizable à ajouter (pour le tracé souris)
	     */
	    Selection.prototype.resizableOptions = null;
	
	    /**
	     * sélectionne un élément
	     * @param item argument JSYG à ajouter à la sélection
	     * @param e Event (dans le cas à la méthode est appelée depuis un évènement)
	     */
	    Selection.prototype.addElmt = function (elmt, e) {
	
	        var node = new JSYG(elmt).addClass(this.classSelected)[0];
	
	        if (new JSYG(this.list).index(elmt) == -1) throw new Error("L'élément n'est pas sélectionnable");
	
	        if (this.selected.indexOf(node) != -1) throw new Error("L'élément est déjà dans la liste");
	
	        if (!node.parentNode) throw new Error("L'élément n'est pas attaché au DOM");
	
	        this.selected.push(node);
	
	        this.trigger('select', this.node, e, node);
	    };
	
	    /**
	     * Supprime un élément de la sélection
	     * @param item argument JSYG à ajouter à la sélection
	     * @param e Event (dans le cas à la méthode est appelée depuis un évènement)
	     */
	    Selection.prototype.removeElmt = function (elmt, e) {
	
	        var node = new JSYG(elmt).removeClass(this.classSelected)[0];
	
	        var ind = this.selected.indexOf(node);
	
	        if (ind == -1) throw new Error("L'élément n'est pas dans la liste");
	
	        this.selected.splice(ind, 1);
	
	        this.trigger('deselect', this.node, e, node);
	    };
	
	    /**
	     * définit la sélection
	     * @param arg argument JSYG faisant référence à la sélection
	     * @param e Event (dans le cas à la méthode est appelée depuis un évènement)
	     * @returns {Selection}
	     */
	    Selection.prototype.setSelection = function (arg, e) {
	
	        var that = this;
	
	        this.deselectAll(e);
	
	        new JSYG(arg).each(function () {
	            that.addElmt(this, e);
	        });
	
	        if (this.selected.length > 0) this.trigger('selectedlist', this.node, e, this.selected);
	
	        return this;
	    };
	
	    Selection.prototype.selectAll = function () {
	
	        this.setSelection(this.list);
	
	        return this;
	    };
	
	    /**
	     * Supprime la sélection
	     * @param e Event (dans le cas à la méthode est appelée depuis un évènement)
	     * @returns {Selection}
	     */
	    Selection.prototype.deselectAll = function (e) {
	
	        var that = this,
	            selected = this.selected.slice();
	
	        new JSYG(this.list).removeClass(this.classSelected, this.classOver); //par précaution
	
	        while (this.selected.length > 0) {
	            this.removeElmt(this.selected[0], e);
	        }this.trigger('deselectedlist', this.node, e, selected);
	
	        this.selectedOver.forEach(function (elmt) {
	            elmt = new JSYG(elmt).removeClass(that.classSelected);
	            that.trigger('selectout', that.node, e, elmt[0]);
	        });
	
	        this.selected = [];
	        this.selectedOver = [];
	
	        return this;
	    };
	
	    Selection.prototype._draw = function (e) {
	
	        var list = new JSYG(this.list),
	            container = new JSYG(this.container),
	            resize = new Resizable(container),
	            that = this;
	
	        container.attr('id', this.id).appendTo(document.body).setDim({
	            x: e.pageX,
	            y: e.pageY,
	            width: 1,
	            height: 1
	        });
	
	        resize.set({
	            keepRatio: false,
	            type: 'attributes',
	            originY: 'top',
	            originX: 'left',
	            cursor: false,
	            inverse: true
	        });
	
	        if (this.resizableOptions) resize.set(this.resizableOptions);
	
	        resize.on('dragstart', function (e) {
	
	            list.each(function () {
	
	                var dim,
	                    $this = new JSYG(this);
	                try {
	                    dim = $this.getDim('screen');
	                    $this.data("dimSelection", dim);
	                } catch (e) {
	                    //éléments n'ayant pas de dimensions (exemple balise defs)
	                }
	            });
	
	            that.trigger('dragstart', that.node, e);
	        });
	
	        resize.on('drag', function (e) {
	
	            var div = new JSYG(this),
	                dimDiv = div.getDim('screen');
	
	            list.each(function () {
	
	                var elmt = new JSYG(this),
	                    dimElmt = elmt.data("dimSelection"),
	                    indOver = dimElmt && that.selectedOver.indexOf(this),
	                    isNewElmt = indOver === -1;
	
	                if (!dimElmt) return;
	
	                if (JSYG.isOver(dimDiv, dimElmt, that.typeOver)) {
	
	                    if (isNewElmt) {
	
	                        elmt.addClass(that.classOver);
	                        that.trigger('selectover', that.node, e, this);
	                        that.selectedOver.push(this);
	                    } else that.trigger('selectmove', that.node, e, this);
	                } else {
	
	                    if (!isNewElmt) {
	                        elmt.removeClass(that.classOver);
	                        that.trigger('selectout', that.node, e, this);
	                        that.selectedOver.splice(indOver, 1);
	                    }
	                }
	            });
	
	            that.trigger('drag', that.node, e, this);
	        });
	
	        resize.on('dragend', function (e) {
	
	            var elmts = [];
	
	            list.each(function () {
	
	                var indOver = that.selectedOver.indexOf(this);
	
	                if (indOver !== -1) {
	
	                    that.trigger('selectout', that.node, e, this);
	
	                    if (that.trigger("beforeselect", that.node, e, this)) elmts.push(this);
	                }
	            });
	
	            that.setSelection(elmts, e);
	
	            that.trigger('dragend', that.node, e, this);
	
	            new JSYG(this).remove();
	        });
	
	        resize.on('end', function () {
	            new JSYG(this).remove();
	        });
	
	        resize.start(e);
	
	        return this;
	    };
	
	    Selection.prototype._getTarget = function (e) {
	
	        var list = new JSYG(this.list);
	
	        if (list.index(e.target) !== -1) return e.target;
	
	        var child = new JSYG(e.target),
	            target = null;
	
	        list.each(function () {
	            if (child.isChildOf(this)) {
	                target = this;return false;
	            }
	        });
	
	        return target;
	    };
	
	    Selection.prototype._isIn = function (e) {
	
	        return e.target == this.node || new JSYG(e.target).isChildOf(this.node);
	    };
	
	    Selection.prototype.enableShortCutSelectAll = function () {
	
	        if (!this.enabled || !this.shortCutSelectAll) return this;
	
	        var that = this;
	
	        function selectAll(e) {
	            e.preventDefault();
	            that.selectAll();
	        }
	
	        this.disableShortCutSelectAll();
	
	        $(document).on("keydown", null, this.shortCutSelectAll, selectAll);
	
	        this.disableShortCutSelectAll = function () {
	
	            $(document).off("keydown", selectAll);
	            return this;
	        };
	
	        return this;
	    };
	
	    Selection.prototype.disableShortCutSelectAll = function () {
	
	        return this;
	    };
	
	    Selection.prototype.clearNativeSelection = function () {
	        if (window.getSelection) window.getSelection().removeAllRanges();else if (document.selection) document.selection.empty();
	
	        return this;
	    };
	
	    /**
	     * Activation du tracé de sélection
	     * @param opt optionnel, objet définissant les options
	     * @returns {Selection}
	     */
	    Selection.prototype.enable = function (opt) {
	
	        this.disable();
	
	        if (opt) this.set(opt);
	
	        var that = this,
	            drawing = false,
	            $doc = new JSYG(document),
	            $canvas = this.node && new JSYG(this.node) || $doc,
	            fcts = {
	
	            "mousedown": function mousedown(e) {
	
	                if (e.which != 1) return;
	
	                if ((!e.ctrlKey || !that.multiple) && that.trigger("beforedeselect", that.node, e) !== false) that.deselectAll(e);
	
	                that.clearNativeSelection();
	
	                var cible = that._getTarget(e);
	
	                if (cible) {
	
	                    if (that.trigger("beforeselect", that.node, e, cible) !== false) {
	                        that.setSelection(that.selected.concat(cible), e);
	                    }
	                } else if (!that.node || that._isIn(e)) drawing = true;
	            },
	
	            "drag:start": function dragStart(e) {
	
	                if (that.multiple && that.trigger("beforedrag", that.node, e) !== false) that._draw(e);else drawing = false;
	            },
	
	            "mousemove": function mousemove(e) {
	
	                if (drawing) return;
	
	                var lastOver = that.selectedOver[0] || null,
	                    cible = that._getTarget(e);
	
	                if (lastOver && lastOver !== cible) {
	
	                    new JSYG(lastOver).removeClass(that.classOver);
	                    that.trigger('selectout', that.node, e, lastOver);
	                    that.selectedOver = [];
	                }
	
	                if (cible) {
	
	                    if (lastOver === cible) that.trigger('selectmove', that.node, e, lastOver);else {
	                        that.trigger('selectover', that.node, e, cible);
	                        new JSYG(cible).addClass(that.classOver);
	                    }
	                    that.selectedOver = [cible];
	                }
	            },
	
	            "mouseout": function mouseout(e) {
	
	                if (drawing) return;
	
	                var lastOver = that.selectedOver[0];
	
	                if (lastOver) {
	
	                    new JSYG(lastOver).removeClass(that.classOver);
	                    that.trigger('selectout', that.node, e, lastOver);
	                    that.selectedOver = [];
	                }
	            }
	        };
	
	        function mouseup() {
	            drawing = false;
	        }
	
	        $doc.on("mouseup", mouseup);
	
	        $canvas.dragEvents().on(fcts);
	
	        this.enabled = true;
	
	        if (this.autoEnableShortCuts) this.enableShortCutSelectAll();
	
	        this.disable = function () {
	
	            $canvas.off(fcts).dragEvents("destroy");
	
	            this.deselectAll();
	
	            this.enabled = false;
	
	            this.disableShortCutSelectAll();
	
	            return this;
	        };
	
	        return this;
	    };
	
	    /**
	     * Désactivation du tracé de sélection
	     * @returns {Selection}
	     */
	    Selection.prototype.disable = function () {
	        return this;
	    };
	
	    JSYG.Selection = Selection;
	
	    return Selection;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(475)))

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(492);

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	(function (root, factory) {
	
	    if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(481)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof JSYG != "undefined") {
	        if (JSYG.Matrix && JSYG.StdConstruct && JSYG.Vect) factory(JSYG);else throw new Error("Dependency is missing");
	    } else throw new Error("JSYG is needed");
	})(undefined, function (JSYG) {
	
	    "use strict";
	
	    /**
	     * Permet de savoir s'il s'agit d'une balise &lt;image&gt; faisant référence à  du contenu svg, car auquel cas elle
	     * se comporte plus comme un conteneur (du moins avec firefox).
	     */
	
	    function isSVGImage(elmt) {
	        return elmt[0].tagName == 'image' && /(image\/svg\+xml|\.svg$)/.test(elmt.attr("href"));
	    }
	
	    /**
	     * Paliers vers lesquels l'objet sera attiré
	     * @returns {Steps}
	     */
	    function Steps(list, strength) {
	        /**
	         * liste des paliers
	         */
	        this.list = list || [];
	        /**
	         * force de l'aimantation
	         */
	        this.strength = JSYG.isNumeric(strength) ? strength : 10;
	        /**
	         * type de données ("scale" pour liste d'échelles ou "dim" pour liste de dimensions)
	         */
	        this.type = 'dim';
	    };
	
	    /**
	     * <strong>nécessite le plugin Resizable</strong><br/><br/>
	     * Element redimensionnable
	     * @param arg argument JSYG faisant référence à l'élément à redimensionner
	     * @param opt optionnel, objet définissant les options. Si défini, le redimensionnement est activé.
	     * @returns {Resizable}
	     * @example <pre>var resizable = new Resizable('#monElement');
	     * resizable.keepRatio = false;
	     * resizable.type = "transform";
	     * resizable.enable();
	     * 
	     * //Equivalent à 
	     * new Resizable('#monElement',{
	     * 	keepRatio:false,
	     * 	type:"transform"
	     * });
	     */
	    function Resizable(arg, opt) {
	
	        /**
	         * Paliers horizontaux
	         */
	        this.stepsX = new Steps();
	        /**
	         * Paliers verticaux
	         */
	        this.stepsY = new Steps();
	
	        /**
	         * Element DOM
	         */
	        if (arg) {
	
	            this.setNode(arg);
	            this.field = this.node;
	
	            if (opt) this.enable(opt);
	        } else if (opt) this.set(opt);
	    };
	
	    function shape(node) {
	        if (['path', 'polyline', 'polygon', 'g', 'text', 'use'].indexOf(node.tagName) !== -1 || isSVGImage(JSYG(node))) return 'noAttribute';else return 'shape';
	    }
	
	    Resizable.prototype = new JSYG.StdConstruct();
	
	    Resizable.prototype.constructor = Resizable;
	
	    /**
	     * Restriction à un bouton de la souris (1 bouton gauche, 2 bouton du milieu, 3 bouton droit)
	     */
	    Resizable.prototype.eventWhich = 1;
	    /**
	     * Classe appliquée à l'élément pendant le redimensionnement
	     */
	    Resizable.prototype.className = false;
	    /**
	     * Cursor à utiliser pendant le redimensionnement.
	     * La valeur spéciale "auto" permet un curseur adapté aux options.
	     */
	    Resizable.prototype.cursor = 'auto';
	    /**
	     * Redimensionnement vertical
	     */
	    Resizable.prototype.vertical = true;
	    /**
	     * Redimensionnement horizontal
	     */
	    Resizable.prototype.horizontal = true;
	    /**
	     * Maintien du ratio
	     */
	    Resizable.prototype.keepRatio = true;
	    /**
	     * Type de redimensionnement (éléments SVG uniquement)
	     * - "attributes" : action sur les attributs de mise en page
	     * - "transform" : action sur la matrice de transformation 
	     */
	    Resizable.prototype.type = 'attributes';
	    /**
	     * méthode de redimensionnement (éléments SVG uniquement):
	     * - "normal" : l'élément est agrandi du déplacement de la souris
	     * - "fixedPoint" : l'élément est agrandi de façon à ce que le point sous la souris y reste 
	     */
	    Resizable.prototype.method = 'normal';
	    /**
	     * Si le type est "attributes", indique si la rotation doit etre conservée
	     * lors de la conversion de la matrice en attributs (éléments SVG uniquement)
	     */
	    Resizable.prototype.keepRotation = false;
	    /**
	     * largeur minimale
	     */
	    Resizable.prototype.minWidth = 1;
	    /**
	     * hauteur minimale
	     */
	    Resizable.prototype.minHeight = 1;
	    /**
	     * largeur maximale
	     */
	    Resizable.prototype.maxWidth = 3000;
	    /**
	     * hauteur maximale
	     */
	    Resizable.prototype.maxHeight = 3000;
	    /**
	     * Permet de fixer automatiquement les valeurs minLeft,maxRight,minTop,maxBottom par rapport au offsetParent
	     * (valeur positive ou nulle pour brider à l'intérieur du offsetParent, valeur négative pour brider au dela du offsetParent
	     **/
	    Resizable.prototype.bounds = null;
	    /**
	     * abcisse minimale
	     */
	    Resizable.prototype.minLeft = null;
	    /**
	     * ordonnée minimale
	     */
	    Resizable.prototype.minTop = null;
	    /**
	     * abcisse maximale
	     */
	    Resizable.prototype.maxRight = null;
	    /**
	     * ordonnée maximale
	     */
	    Resizable.prototype.maxBottom = null;
	    /**
	     * Abcisse du point fixe lors du redimensionnement
	     * La valeur "auto" définit le point fixe en fonction de la position du curseur par rapport à l'élément
	     */
	    Resizable.prototype.originX = 'auto';
	    /**
	     * Ordonnée du point fixe lors du redimensionnement
	     * La valeur "auto" définit le point fixe en fonction de la position du curseur par rapport à l'élément
	     */
	    Resizable.prototype.originY = 'auto';
	    /**
	     * Permet ou non de "retourner" l'élément
	     */
	    Resizable.prototype.inverse = false;
	    /**
	     * fonction(s) à exécuter à la préparation d'un redimensionnement (événement vmousedown)
	     */
	    Resizable.prototype.onstart = null;
	    /**
	     * fonction(s) à exécuter au début du redimensionnement
	     */
	    Resizable.prototype.ondragstart = null;
	    /**
	     * fonction(s) à exécuter pendant le redimensionnement
	     */
	    Resizable.prototype.ondrag = null;
	    /**
	     * fonction(s) à exécuter à la fin du redimensionnement
	     */
	    Resizable.prototype.ondragend = null;
	    /**
	     * fonction(s) à exécuter au reléchement de la souris qu'il y ait eu redimensionnement ou non
	     */
	    Resizable.prototype.onend = null;
	    /**
	     * Indique si le redimensionnement est actif ou non
	     */
	    Resizable.prototype.enabled = false;
	
	    function getRect(box, mtx) {
	
	        var hg = new JSYG.Vect(box.x, box.y).mtx(mtx);
	        var hd = new JSYG.Vect(box.x + box.width, box.y).mtx(mtx);
	        var bg = new JSYG.Vect(box.x, box.y + box.height).mtx(mtx);
	        var bd = new JSYG.Vect(box.x + box.width, box.y + box.height).mtx(mtx);
	
	        return {
	            left: Math.min(hg.x, hd.x, bg.x, bd.x),
	            right: Math.max(hg.x, hd.x, bg.x, bd.x),
	            top: Math.min(hg.y, hd.y, bg.y, bd.y),
	            bottom: Math.max(hg.y, hd.y, bg.y, bd.y)
	        };
	    }
	
	    function eventName(event) {
	        return (JSYG.isMobile && JSYG.isMobile.any ? 'v' : '') + event;
	    }
	
	    /**
	     * Déclenche le redimensionnement (évènement vmousedown)
	     * @param e objet Event
	     * @returns {Resizable}
	     */
	    Resizable.prototype.start = function (e) {
	
	        e.preventDefault();
	
	        var jNode = new JSYG(this.node),
	            parent = jNode.offsetParent();
	
	        if (JSYG.isNumeric(this.bounds)) {
	            var dimParent = parent.getDim();
	            this.minLeft = -this.bounds;
	            this.minTop = -this.bounds;
	            this.maxRight = dimParent.width + this.bounds;
	            this.maxBottom = dimParent.height + this.bounds;
	        }
	
	        var that = this,
	            mtxScreenInit = function () {
	            if (jNode.isSVG()) return jNode.getMtx('screen').inverse();else {
	                var dimParent = parent.getDim('screen');
	                return new JSYG.Matrix().translate(dimParent.x, dimParent.y).inverse();
	            }
	        }(),
	            mtxInit = jNode.getMtx(),
	            transfInit = mtxInit.decompose(),
	            xInit = e.clientX,
	            yInit = e.clientY,
	            mouseInit = new JSYG.Vect(e.clientX, e.clientY).mtx(mtxScreenInit),
	            dimInit = jNode.getDim(),
	            boundsInit = jNode.getDim('screen'),
	            scaleParent = function () {
	
	            var mtxScreenParent;
	
	            if (jNode.isSVG()) mtxScreenParent = parent.getMtx('screen');else {
	                var dimParent = parent.getDim('screen');
	                mtxScreenParent = new JSYG.Matrix().translate(dimParent.x, dimParent.y);
	            }
	
	            var decomposeParent = mtxScreenParent.decompose();
	
	            return { x: decomposeParent.scaleX, y: decomposeParent.scaleY };
	        }(),
	            originX = that.originX !== 'auto' ? that.originX : mouseInit.x < dimInit.x + dimInit.width / 2 ? 'right' : 'left',
	            originY = that.originY !== 'auto' ? that.originY : mouseInit.y < dimInit.y + dimInit.height / 2 ? 'bottom' : 'top',
	            bornes = this.minLeft != null || this.maxRight != null || this.minTop != null || this.maxBottom != null,
	            dec = function () {
	            var dec = jNode.getShift(originX, originY);
	            if (that.horizontal === false) {
	                dec.x = 0;
	            } else if (that.vertical === false) {
	                dec.y = 0;
	            }
	            return dec;
	        }(),
	            hasChanged = false,
	            triggerDragStart = false,
	            fcts = {},
	            stepsX,
	            stepsY;
	
	        if (this.type !== 'transform' && this.shape !== 'noAttribute') {
	
	            stepsX = this.stepsX.type == 'scale' ? this.stepsX.list.map(function (scale) {
	                return dimInit.width * scale;
	            }) : this.stepsX.list;
	            stepsY = this.stepsY.type == 'scale' ? this.stepsY.list.map(function (scale) {
	                return dimInit.height * scale;
	            }) : this.stepsY.list;
	        } else {
	            stepsX = this.stepsX.type != 'scale' ? this.stepsX.list.map(function (width) {
	                return width / dimInit.width;
	            }) : this.stepsX.list;
	            stepsY = this.stepsY.type != 'scale' ? this.stepsY.list.map(function (height) {
	                return height / dimInit.height;
	            }) : this.stepsY.list;
	        }
	
	        var mousemoveFct = function mousemoveFct(e) {
	
	            if (!triggerDragStart) {
	                that.trigger('dragstart', that.node, e);
	                triggerDragStart = true;
	            }
	
	            var scaleX,
	                scaleY,
	                mtx = mtxInit,
	                mouse;
	
	            if (that.method === 'fixedPoint') {
	                mouse = new JSYG.Vect(e.clientX, e.clientY).mtx(mtxScreenInit);
	                scaleX = (mouse.x - dec.x) / (mouseInit.x - dec.x);
	                scaleY = (mouse.y - dec.y) / (mouseInit.y - dec.y);
	            } else {
	                scaleX = 1 + (originX == 'center' ? 2 : 1) * (e.clientX - xInit) / boundsInit.width * (originX == 'right' ? -1 : 1);
	                scaleY = 1 + (originY == 'center' ? 2 : 1) * (e.clientY - yInit) / boundsInit.height * (originY == 'bottom' ? -1 : 1);
	            }
	
	            if (Math.abs(scaleX) === Infinity || Math.abs(scaleY) === Infinity) {
	                return;
	            }
	
	            if (that.horizontal === false) {
	                scaleX = 1;
	            } else if (that.vertical === false) {
	                scaleY = 1;
	            } else if (that.keepRatio) {
	                scaleX = scaleY;
	            }
	
	            if (that.type !== 'transform' && that.shape !== 'noAttribute') {
	
	                var coefX, coefY;
	
	                if (originX === 'left') coefX = that.inverse === false || scaleX > 0 ? 0 : -1;else if (originX === 'center') coefX = 0.5;else coefX = that.inverse === false || scaleX > 1 ? 1 : 0;
	
	                if (originY === 'top') coefY = that.inverse === false || scaleY > 0 ? 0 : -1;else if (originY === 'center') coefY = 0.5;else coefY = that.inverse === false || scaleY > 1 ? 1 : 0;
	
	                var newDim = {
	                    width: dimInit.width * (that.inverse === false || scaleX > 0 ? 1 : -1) * scaleX,
	                    height: dimInit.height * (that.inverse === false || scaleY > 0 ? 1 : -1) * scaleY,
	                    x: dimInit.x + (1 - scaleX) * dimInit.width * coefX,
	                    y: dimInit.y + (1 - scaleY) * dimInit.height * coefY
	                },
	                    newWidth = newDim.width * transfInit.scaleX,
	                    newHeight = newDim.height * transfInit.scaleY,
	                    overflowX = newWidth < that.minWidth || newWidth > that.maxWidth,
	                    overflowY = newHeight < that.minHeight || newHeight > that.maxHeight,
	                    magnetX,
	                    magnetY,
	                    i,
	                    N,
	                    step,
	                    width = Infinity,
	                    height = Infinity;
	
	                for (i = 0, N = stepsX.length; i < N; i++) {
	                    step = stepsX[i];
	                    if (Math.abs(step - newWidth) * scaleParent.x < that.stepsX.strength) {
	                        magnetX = step;break;
	                    }
	                }
	
	                for (i = 0, N = that.stepsY.list.length; i < N; i++) {
	                    step = stepsY[i];
	                    if (Math.abs(step - newHeight) * scaleParent.y < that.stepsY.strength) {
	                        magnetY = step;break;
	                    }
	                }
	
	                if (bornes) {
	
	                    var rect = getRect(newDim, mtxInit);
	                    var x = 0,
	                        y = 0;
	
	                    if (that.minLeft != null && rect.left < that.minLeft) {
	                        x = rect.left - that.minLeft;
	                    } else if (that.maxRight != null && rect.right > that.maxRight) {
	                        x = that.maxRight - rect.right;
	                    }
	
	                    if (that.minTop != null && rect.top < that.minTop) {
	                        y = rect.top - that.minTop;
	                    } else if (that.maxBottom != null && rect.bottom > that.maxBottom) {
	                        y = that.maxBottom - rect.bottom;
	                    }
	
	                    if (x !== 0 || y !== 0) {
	
	                        if (that.keepRatio) {
	
	                            if (x) {
	                                width = scaleX * dimInit.width + x;
	                                height = dimInit.height * width / dimInit.width;
	                            }
	
	                            if (y) {
	                                height = scaleY * dimInit.height + y < height ? scaleY * dimInit.height + y : height;
	                                width = dimInit.width * height / dimInit.height;
	                            }
	
	                            newDim = {
	                                width: width,
	                                height: height,
	                                x: dimInit.x + (dimInit.width - width) * coefX,
	                                y: dimInit.y + (dimInit.height - height) * coefY
	                            };
	                        } else {
	
	                            newDim = {
	                                width: scaleX * dimInit.width + x,
	                                height: scaleY * dimInit.height + y,
	                                x: dimInit.x + (dimInit.width - scaleX * dimInit.width - x) * coefX,
	                                y: dimInit.y + (dimInit.height - scaleY * dimInit.height - y) * coefY
	                            };
	                        }
	                    }
	                }
	
	                if (overflowX || overflowY) {
	
	                    if (that.keepRatio) {
	                        return;
	                    } else {
	                        width = overflowX ? (newWidth < that.minWidth ? that.minWidth : that.maxWidth) / transfInit.scaleX : dimInit.width * scaleX;
	                        height = overflowY ? (newHeight < that.minHeight ? that.minHeight : that.maxHeight) / transfInit.scaleY : dimInit.height * scaleY;
	                        newDim = {
	                            width: width,
	                            height: height,
	                            x: dimInit.x + (dimInit.width - width) * coefX,
	                            y: dimInit.y + (dimInit.height - height) * coefY
	                        };
	                    }
	                } else if (magnetX || magnetY) {
	
	                    if (magnetX) {
	                        scaleX = magnetX / (transfInit.scaleX * dimInit.width);
	                        if (that.keepRatio) {
	                            scaleY = scaleX;
	                        }
	                    }
	                    if (magnetY) {
	                        scaleY = magnetY / (transfInit.scaleY * dimInit.height);
	                        if (that.keepRatio) {
	                            scaleX = scaleY;
	                        }
	                    }
	
	                    newDim = {
	                        width: dimInit.width * scaleX,
	                        height: dimInit.height * scaleY,
	                        x: dimInit.x + dimInit.width * (1 - scaleX) * coefX,
	                        y: dimInit.y + dimInit.height * (1 - scaleY) * coefY
	                    };
	                }
	
	                jNode.setDim(newDim);
	            } else {
	
	                mtx = mtxInit.translate(dec.x, dec.y).scaleNonUniform(scaleX, scaleY);
	
	                //pour ne pas retourner l'élément, sauf si inverse=true
	                if (!that.inverse && (mtx.a / Math.abs(mtx.a) != mtxInit.a / Math.abs(mtxInit.a) || mtx.d / Math.abs(mtx.d) != mtxInit.d / Math.abs(mtxInit.d))) {
	                    return;
	                }
	
	                var newScaleX = mtx.scaleX(),
	                    newScaleY = mtx.scaleY(),
	                    overflowX = newScaleX * dimInit.width < that.minWidth || newScaleX * dimInit.width > that.maxWidth,
	                    overflowY = newScaleY * dimInit.height < that.minHeight || newScaleY * dimInit.height > that.maxHeight,
	                    magnetX,
	                    magnetY,
	                    i,
	                    N,
	                    step;
	
	                for (i = 0, N = stepsX.length; i < N; i++) {
	                    step = stepsX[i];
	                    if (Math.abs(step - newScaleX) * dimInit.width * scaleParent.x < that.stepsX.strength) {
	                        magnetX = step;break;
	                    }
	                }
	                for (i = 0, N = stepsY.length; i < N; i++) {
	                    step = that.stepsY[i];
	                    if (Math.abs(step - newScaleY) * dimInit.height * scaleParent.y < that.stepsY.strength) {
	                        magnetY = step;break;
	                    }
	                }
	
	                if (bornes) {
	
	                    var rect = getRect(dimInit, mtx.translate(-dec.x, -dec.y));
	                    var x = 0,
	                        y = 0;
	
	                    if (that.minLeft != null && rect.left < that.minLeft) {
	                        x = rect.left - that.minLeft;
	                    } else if (that.maxRight != null && rect.right > that.maxRight) {
	                        x = that.maxRight - rect.right;
	                    }
	
	                    if (that.minTop != null && rect.top < that.minTop) {
	                        y = rect.top - that.minTop;
	                    } else if (that.maxBottom != null && rect.bottom > that.maxBottom) {
	                        y = that.maxBottom - rect.bottom;
	                    }
	
	                    if (x !== 0 || y !== 0) {
	
	                        if (that.keepRatio) {
	                            if (x) {
	                                mtx = mtx.scale(1 + x / (dimInit.width * mtx.scaleX()));
	                            } else if (y) {
	                                mtx = mtx.scale(1 + y / (dimInit.height * mtx.scaleY()));
	                            }
	                        } else {
	
	                            mtx = mtx.scaleNonUniform(1 + x / (dimInit.width * mtx.scaleX()), 1 + y / (dimInit.height * mtx.scaleY()));
	                        }
	                    }
	                }
	
	                if (overflowX || overflowY) {
	
	                    if (that.keepRatio) {
	                        return;
	                    } else {
	                        mtx = mtxInit.translate(dec.x, dec.y).scaleNonUniform(overflowX ? (newScaleX * dimInit.width < that.minWidth ? that.minWidth : that.maxWidth) / (dimInit.width * transfInit.scaleX) : scaleX, overflowY ? (newScaleY * dimInit.height < that.minHeight ? that.minHeight : that.maxHeight) / (dimInit.height * transfInit.scaleY) : scaleY);
	                    }
	                } else if (magnetX || magnetY) {
	                    mtx = mtxInit.translate(dec.x, dec.y);
	                    if (that.keepRatio) {
	                        if (magnetX) {
	                            mtx = mtx.scale(magnetX / transfInit.scaleX);
	                        } else if (magnetY) {
	                            mtx = mtx.scale(magnetY / transfInit.scaleY);
	                        }
	                    } else {
	                        mtx = mtx.scaleNonUniform(magnetX ? magnetX / transfInit.scaleX : scaleX, magnetY ? magnetY / transfInit.scaleY : scaleY);
	                    }
	                }
	
	                mtx = mtx.translate(-dec.x, -dec.y);
	
	                jNode.setMtx(mtx);
	            }
	
	            hasChanged = true;
	            that.trigger('drag', that.node, e);
	        },
	            cursor = that.cursor !== 'auto' ? that.cursor : function () {
	
	            var cursor,
	                rotate = jNode.getMtx('screen').rotate(),
	                angle = Math.abs(rotate * Math.PI / 180 % Math.PI),
	                test = angle > Math.PI / 4 && angle < Math.PI * 3 / 4;
	
	            if (that.horizontal === false) {
	                cursor = test ? 'e' : 'n';
	            } else if (that.vertical === false) {
	                cursor = test ? 'n' : 'e';
	            } else {
	                if (originX == 'left') {
	                    if (originY == 'top') {
	                        cursor = test ? 'ne' : 'se';
	                    } else {
	                        cursor = test ? 'se' : 'ne';
	                    }
	                } else {
	                    if (originY == 'top') {
	                        cursor = test ? 'se' : 'ne';
	                    } else {
	                        cursor = test ? 'ne' : 'se';
	                    }
	                }
	            }
	            return cursor + '-resize';
	        }(),
	            remove = function remove(e) {
	
	            if (that.className) {
	                jNode.classRemove(that.className);
	            }
	
	            if (cursor) {
	
	                new JSYG(that.field).each(function () {
	                    var field = new JSYG(this);
	                    field.css('cursor', field.data('cursorInit'));
	                });
	            }
	
	            new JSYG(document).off(fcts);
	
	            if (hasChanged) {
	                if (that.type !== 'transform' && that.shape === 'noAttribute') {
	                    jNode.mtx2attrs({ keepRotation: that.keepRotation });
	                }
	                that.trigger('dragend', that.node, e);
	            }
	
	            that.trigger('end', that.node, e);
	        };
	
	        if (cursor) {
	
	            new JSYG(this.field).each(function () {
	                var field = new JSYG(this);
	                field.data('cursorInit', field.css('cursor'));
	                field.css('cursor', cursor);
	            });
	        }
	
	        if (that.className) {
	            jNode.classAdd(that.className);
	        }
	
	        fcts[eventName("mousemove")] = mousemoveFct;
	        fcts[eventName("mouseup")] = remove;
	
	        new JSYG(document).on(fcts);
	
	        this.trigger('start', that.node, e);
	
	        return this;
	    };
	
	    /**
	     * Active le redimensionnement
	     * @param opt optionnel, objet définissant les options
	     * @returns {Resizable}
	     */
	    Resizable.prototype.enable = function (opt) {
	
	        this.disable();
	
	        if (opt) this.set(opt);
	
	        var that = this,
	            evt = opt && opt.evt,
	            attachEvent = eventName("mousedown");
	
	        function start(e) {
	            if (that.eventWhich && e.which != null && e.which != that.eventWhich) return;
	            that.start(e);
	        }
	
	        this.shape = shape(this.node);
	
	        if (!this.field) this.field = this.node;
	
	        new JSYG(this.field).each(function () {
	            var field = new JSYG(this);
	            field.data('resizableUnselect', this.unselectable);
	            this.unselectable = 'on'; //IE
	            field.on(attachEvent, start);
	        });
	
	        this.disable = function () {
	            new JSYG(this.field).each(function () {
	                var field = new JSYG(this);
	                field.off(attachEvent, start);
	                this.unselectable = field.data('resizableUnselect');
	            });
	            this.enabled = false;
	            return this;
	        };
	
	        if (this.node.tagName.toUpperCase() === 'IMAGE' && this.keepRatio === false) {
	            this.node.setAttribute('preserveAspectRatio', 'none');
	        }
	
	        this.enabled = true;
	
	        if (evt) this.start(evt);
	
	        return this;
	    };
	    /**
	     * Désactive le redimensionnement
	     * @returns {Resizable}
	     */
	    Resizable.prototype.disable = function () {
	        return this;
	    };
	
	    JSYG.Resizable = Resizable;
	
	    var plugin = JSYG.bindPlugin(Resizable);
	    /**
	     * <strong>nécessite le module Resizable</strong><br/><br/>
	     * Elément redimensionnable
	     * @returns {JSYG}
	     * @see Resizable pour une utilisation détaillée
	     * @example <pre>new JSYG('#maDiv").resizable();
	     * 
	     * //utilisation avancée
	     * new JSYG('#maDiv").resizable({
	     * 	minLeft:0,
	     * 	maxRight:500,
	     * 	minWidth:10,
	     * 	maxWidth:200,
	     *  vertical:false,
	     *  ondragend:function() {
	     *  	alert("nouvelle échelle horizontale : "+new JSYG(this).scaleX());
	     *  }
	     * });
	     */
	    JSYG.prototype.resizable = function () {
	        return plugin.apply(this, arguments);
	    };
	
	    return Resizable;
	});

/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(494);

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery, __webpack_provided_window_dot_jQuery) {"use strict";
	
	/*jslint browser: true*/
	/*jslint jquery: true*/
	
	/*
	 * jQuery Hotkeys Plugin
	 * Copyright 2010, John Resig
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 *
	 * Based upon the plugin by Tzury Bar Yochay:
	 * http://github.com/tzuryby/hotkeys
	 *
	 * Original idea by:
	 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
	 */
	
	/*
	 * One small change is: now keys are passed by object { keys: '...' }
	 * Might be useful, when you want to pass some other data to your handler
	 */
	
	(function (jQuery) {
	
	  jQuery.hotkeys = {
	    version: "0.8",
	
	    specialKeys: {
	      8: "backspace",
	      9: "tab",
	      10: "return",
	      13: "return",
	      16: "shift",
	      17: "ctrl",
	      18: "alt",
	      19: "pause",
	      20: "capslock",
	      27: "esc",
	      32: "space",
	      33: "pageup",
	      34: "pagedown",
	      35: "end",
	      36: "home",
	      37: "left",
	      38: "up",
	      39: "right",
	      40: "down",
	      45: "insert",
	      46: "del",
	      59: ";",
	      61: "=",
	      96: "0",
	      97: "1",
	      98: "2",
	      99: "3",
	      100: "4",
	      101: "5",
	      102: "6",
	      103: "7",
	      104: "8",
	      105: "9",
	      106: "*",
	      107: "+",
	      109: "-",
	      110: ".",
	      111: "/",
	      112: "f1",
	      113: "f2",
	      114: "f3",
	      115: "f4",
	      116: "f5",
	      117: "f6",
	      118: "f7",
	      119: "f8",
	      120: "f9",
	      121: "f10",
	      122: "f11",
	      123: "f12",
	      144: "numlock",
	      145: "scroll",
	      173: "-",
	      186: ";",
	      187: "=",
	      188: ",",
	      189: "-",
	      190: ".",
	      191: "/",
	      192: "`",
	      219: "[",
	      220: "\\",
	      221: "]",
	      222: "'"
	    },
	
	    shiftNums: {
	      "`": "~",
	      "1": "!",
	      "2": "@",
	      "3": "#",
	      "4": "$",
	      "5": "%",
	      "6": "^",
	      "7": "&",
	      "8": "*",
	      "9": "(",
	      "0": ")",
	      "-": "_",
	      "=": "+",
	      ";": ": ",
	      "'": "\"",
	      ",": "<",
	      ".": ">",
	      "/": "?",
	      "\\": "|"
	    },
	
	    // excludes: button, checkbox, file, hidden, image, password, radio, reset, search, submit, url
	    textAcceptingInputTypes: ["text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime", "datetime-local", "search", "color", "tel"],
	
	    options: {
	      filterTextInputs: true
	    }
	  };
	
	  function keyHandler(handleObj) {
	    if (typeof handleObj.data === "string") {
	      handleObj.data = {
	        keys: handleObj.data
	      };
	    }
	
	    // Only care when a possible input has been specified
	    if (!handleObj.data || !handleObj.data.keys || typeof handleObj.data.keys !== "string") {
	      return;
	    }
	
	    var origHandler = handleObj.handler,
	        keys = handleObj.data.keys.toLowerCase().split(" ");
	
	    handleObj.handler = function (event) {
	      //      Don't fire in text-accepting inputs that we didn't directly bind to
	      if (this !== event.target && (/textarea|select/i.test(event.target.nodeName) || jQuery.hotkeys.options.filterTextInputs && jQuery.inArray(event.target.type, jQuery.hotkeys.textAcceptingInputTypes) > -1)) {
	        return;
	      }
	
	      var special = event.type !== "keypress" && jQuery.hotkeys.specialKeys[event.which],
	          character = String.fromCharCode(event.which).toLowerCase(),
	          modif = "",
	          possible = {};
	
	      jQuery.each(["alt", "ctrl", "shift"], function (index, specialKey) {
	
	        if (event[specialKey + 'Key'] && special !== specialKey) {
	          modif += specialKey + '+';
	        }
	      });
	
	      // metaKey is triggered off ctrlKey erronously
	      if (event.metaKey && !event.ctrlKey && special !== "meta") {
	        modif += "meta+";
	      }
	
	      if (event.metaKey && special !== "meta" && modif.indexOf("alt+ctrl+shift+") > -1) {
	        modif = modif.replace("alt+ctrl+shift+", "hyper+");
	      }
	
	      if (special) {
	        possible[modif + special] = true;
	      } else {
	        possible[modif + character] = true;
	        possible[modif + jQuery.hotkeys.shiftNums[character]] = true;
	
	        // "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
	        if (modif === "shift+") {
	          possible[jQuery.hotkeys.shiftNums[character]] = true;
	        }
	      }
	
	      for (var i = 0, l = keys.length; i < l; i++) {
	        if (possible[keys[i]]) {
	          return origHandler.apply(this, arguments);
	        }
	      }
	    };
	  }
	
	  jQuery.each(["keydown", "keyup", "keypress"], function () {
	    jQuery.event.special[this] = {
	      add: keyHandler
	    };
	  });
	})(jQuery || undefined.jQuery || __webpack_provided_window_dot_jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(475), __webpack_require__(475)))

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(496);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(449)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./JSYG.Selection.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./JSYG.Selection.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(388)();
	// imports
	
	
	// module
	exports.push([module.id, "div#Selection {\n    position:absolute;\n    opacity:0.2;\n    filter:alpha(opacity=20);\n    border:1px dashed black;\n    position:absolute;\n    background-color:#CCC;\n    z-index:100;\n}", ""]);
	
	// exports


/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(498);

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	(function (root, factory) {
	
	    if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(481)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof JSYG != "undefined") {
	        if (JSYG.Matrix && JSYG.StdConstruct) factory(JSYG);else throw new Error("Dependency is missing");
	    } else throw new Error("JSYG is needed");
	})(undefined, function (JSYG) {
	
	    "use strict";
	
	    /**
	     * paliers pour "aimanter" la rotation
	     */
	
	    function Steps(list, strength) {
	        /**
	         * Tableau des paliers en degrés
	         */
	        this.list = list || [];
	        /**
	         * Force de l'aimantation en degrés
	         */
	        this.strength = JSYG.isNumeric(strength) ? strength : 3;
	    };
	
	    /**
	     * <strong>nécessite le module Rotatable</strong>
	     * Rotation de l'élément. Fonctionne bien avec les éléments SVG. Les r�actions sont un peu bizarres avec les éléments HTML, à �viter.<br/><br/>
	     * @param arg argument JSYG faisant référénce à l'élément
	     * @param opt optionnel, objet définissant les options. Si défini, la rotation est activ�e
	     * @returns {Rotatable}
	     */
	    function Rotatable(arg, opt) {
	
	        /**
	         * Paliers "aimantés" lors de la rotation, en degrés
	         */
	        this.steps = new Steps();
	
	        if (arg) {
	
	            this.setNode(arg);
	            this.field = this.node;
	
	            if (opt) this.enable(opt);
	        } else if (opt) this.set(opt);
	    };
	
	    Rotatable.prototype = new JSYG.StdConstruct();
	
	    Rotatable.prototype.constructor = Rotatable;
	    /**
	     * Champ(s) sur le(s)quel(s) on clique pour déclencher la rotation. Par défaut l'élément lui-même.
	     */
	    Rotatable.prototype.field = null;
	    /**
	     * Evenement pour déclencher la rotation 
	     */
	    Rotatable.prototype.event = 'mousedown';
	    /**
	     * Restriction à un bouton de la souris (1 bouton gauche, 2 bouton du milieu, 3 bouton droit)
	     */
	    Rotatable.prototype.eventWhich = 1;
	    /**
	     * Classe appliquée à l'élément pendant la rotation
	     */
	    Rotatable.prototype.className = false;
	    /**
	     * Fonction(s) à exécuter quand on pr�pare un d�placement (mousedown sur le contr�le)
	     */
	    Rotatable.prototype.onstart = null;
	    /**
	     * Fonction(s) à exécuter quand on commence la rotation
	     */
	    Rotatable.prototype.ondragstart = null;
	    /**
	     * Fonction(s) à exécuter pendant la rotation
	     */
	    Rotatable.prototype.ondrag = null;
	    /**
	     * Fonction(s) à exécuter à la fin de la rotation
	     */
	    Rotatable.prototype.ondragend = null;
	    /**
	     * Fonction(s) à exécuter au relâchement du bouton souris (qu'il y ait eu rotation ou non)
	     */
	    Rotatable.prototype.onend = null;
	    /**
	     * Indique si la rotation est activ�e ou non
	     */
	    Rotatable.prototype.enabled = false;
	    /**
	     * Curseur à utiliser pendant la rotation
	     */
	    Rotatable.prototype.cursor = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACqUlEQVRIia2UsU8UQRTGZ97su73dvWOzu3d73Ibl+AOgxEZ7Q6UklhYWlMaGioLEyguFoTJYEQuNsSFiJ0b+ACxsjZAYqcAEK/E4IPfZ7Oi6uwd7hJdMtfO933zzvR0hShSS8jxvZnd39zYAlNGVKt08juNZwzAObduO8K+619K80+nM12q1vmEYmJqa2rQsa2VnZ+ddCnQ1R4kQRNQnIkgp/1umafbGxsZWS4OyGwEgDMP7RNQXQqBoEREcxzlg5huXQpKPjEzV6/V5y7L6zAxmfub7/pbjOCfM/BdUrVZ/hWF4M5G4Q09v2/bnIAgeZiEAkA3Z87wnSqkBEWknP4e6AADXdZcMwwAzo16vP09vBIBKpTLjeZ6bBZumOdDX1el0NnKA1OkPiAhKKTQajddZQFGYSU7LSikQESqVylnOBQDMzc3dk1JCKQVmPr00sAzYNM19pZQ+3GIO0Gw2uzqwIAg+lWme1tdqtTUighACYRhu5ABEtKIBzPx0VMDk5OQjKaWequ0LAUKIlVEBvu8vpPR5gGVZXSEEpJRwXXcrudr8PBc0B4Dx8fE17aDdbr/PAeI4vqufAMuyTkYJWQghHcf5pp8Tz/OWcoAkqJ7+aTzP65YFTExMLBiGgWSKznq93tfCf8H3/VWlFKSUYOZBdu7Pz8/fHB8fvwXwKq2TUm6mRvRDIrlVeJeO4xwIIaCUgmmag0ajsZwGTU9PnyJTURTZrVbrY7Va/b2+vn5nqHMAYOZZpdSRnmkiAjPvB0HwYm9v74tt233DMA6FEDNZUKq+DwUk9FnLso6klNDB6SdEPwlE9KPsIBRCAKDdbr9k5jPtJr2klAO9fSRAESgMw8VWq7UhpdyWUvaZeRBF0eMrObgIBADNZrMXx/GDa2leBEszy2j+AL5S5bW3LnfHAAAAAElFTkSuQmCC) 12 12, auto';
	
	    /**
	     * Débute la rotation (fonction déclenché sur mousedown) 
	     * @param e évènement Event
	     * @returns {Rotatable}
	     */
	    Rotatable.prototype.start = function (e) {
	
	        e.preventDefault();
	
	        var that = this,
	            jNode = new JSYG(this.node),
	            cursor = this.cursor;
	
	        if (cursor) {
	            new JSYG(this.field).each(function () {
	                var field = new JSYG(this);
	                field.data('cursorInit', field.css('cursor'));
	                field.css('cursor', cursor);
	            });
	        }
	
	        if (that.className) jNode.classAdd(that.className);
	
	        var mtxInit = jNode.getMtx(),
	            mtxScreenInit = function () {
	            var mtx = jNode.getMtx('screen');
	            if (!jNode.isSVG()) {
	                var dim = jNode.getDim('page');
	                mtx = new JSYG.Matrix().translate(dim.x, dim.y).multiply(mtx);
	            }
	            return mtx;
	        }(),
	            scaleX = mtxInit.scaleX(),
	            scaleY = mtxInit.scaleY(),
	            dec = jNode.getShift(),
	            screenDec = dec.mtx(mtxScreenInit),
	            angleInit = mtxScreenInit.rotate(),
	            angleMouseInit = Math.atan2(e.clientX - screenDec.x, e.clientY - screenDec.y) * 180 / Math.PI,
	            hasChanged = false,
	            triggerDragStart = false;
	
	        function mousemoveFct(e) {
	
	            if (!triggerDragStart) {
	                that.trigger('dragstart', that.node, e);
	                triggerDragStart = true;
	            }
	
	            var newAngle = angleInit + angleMouseInit - Math.atan2(e.clientX - screenDec.x, e.clientY - screenDec.y) * 180 / Math.PI;
	
	            if (that.steps.list.length > 0) {
	                that.steps.list.forEach(function (step) {
	                    if (Math.abs(newAngle - step) < that.steps.strength || Math.abs(Math.abs(newAngle - step) - 360) < that.steps.strength) {
	                        newAngle = step;
	                    }
	                });
	            }
	
	            var mtx = mtxInit.translate(dec.x, dec.y).scaleNonUniform(1 / scaleX, 1 / scaleY).rotate(-angleInit).rotate(newAngle).scaleNonUniform(scaleX, scaleY).translate(-dec.x, -dec.y);
	
	            jNode.setMtx(mtx);
	
	            hasChanged = true;
	            that.trigger('drag', that.node, e);
	        }
	
	        function remove(e) {
	
	            if (that.className) jNode.classRemove(that.className);
	
	            new JSYG(that.field).each(function () {
	                var field = new JSYG(this);
	                field.css('cursor', field.data('cursorInit'));
	            });
	
	            new JSYG(this).off({
	                'mousemove': mousemoveFct,
	                'mouseup': remove
	            });
	
	            if (hasChanged) {
	                if (that.type !== 'transform' && that.shape === 'noAttribute') jNode.mtx2attrs();
	                that.trigger('dragend', that.node, e);
	            }
	            that.trigger('end', that.node, e);
	        };
	
	        new JSYG(document).on({
	            'mousemove': mousemoveFct,
	            'mouseup': remove
	        });
	
	        this.trigger('start', that.node, e);
	
	        return this;
	    };
	
	    /**
	     * Activation de la rotation
	     * @param opt optionnel, objet définissant les options
	     * @returns {Rotatable}
	     */
	    Rotatable.prototype.enable = function (opt) {
	
	        this.disable();
	
	        if (opt) this.set(opt);
	
	        var that = this,
	            evt = opt && opt.evt;
	
	        function start(e) {
	            if (that.eventWhich && e.which != that.eventWhich) return;
	            that.start(e);
	        }
	
	        new JSYG(this.field).each(function () {
	            var field = new JSYG(this);
	            field.on(that.event, start);
	        });
	
	        this.disable = function () {
	            new JSYG(this.field).each(function () {
	                var field = new JSYG(this);
	                field.off(that.event, start);
	            });
	            this.enabled = false;
	            return this;
	        };
	
	        this.enabled = true;
	
	        if (evt) {
	            this.start(evt);
	        }
	
	        return this;
	    };
	
	    /**
	     * D�sactivation de la rotation
	     * @returns {Rotatable}
	     */
	    Rotatable.prototype.disable = function () {
	        return this;
	    };
	
	    JSYG.Rotatable = Rotatable;
	
	    var plugin = JSYG.bindPlugin(Rotatable);
	    /**
	     * <strong>nécessite le module Rotatable</strong><br/><br/>
	     * Rotation de l'élément par drag&drop souris.<br/>
	     * Fonctionne bien avec les éléments SVG. Les réactions sont un peu bizarres avec les éléments HTML, à éviter.<br/><br/>
	     * @returns {JSYG}
	     * @see Rotatable pour une utilisation détaillée
	     * @example <pre>new JSYG('#myShape').draggable();
	     * 
	     * //utilisation avancée
	     * new JSYG('#myShape').draggable({
	     * 	steps : {
	     * 		list : [0,90,180,270]
	     *	},
	     *	event:'ctrl-left-mousedown',
	     *	ondragend:function() {
	     *		alert("Rotation de l'élément : "+ new JSYG(this).rotate() + "�");
	     *	}
	     *});
	     */
	    JSYG.prototype.rotatable = function () {
	        return plugin.apply(this, arguments);
	    };
	
	    return Rotatable;
	});

/***/ },

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(500);

/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	(function (root, factory) {
	
	    if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(481)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof JSYG != "undefined") {
	        if (JSYG.Matrix && JSYG.StdConstruct && JSYG.Vect) factory(JSYG);else throw new Error("Dependency is missing");
	    } else throw new Error("JSYG is needed");
	})(undefined, function (JSYG) {
	
	    "use strict";
	
	    /**
	     * Aimants vers lesquels l'objet sera attiré
	     * @returns {Guides}
	     */
	
	    function Guides() {};
	
	    Guides.prototype = new JSYG.StdConstruct();
	
	    Guides.prototype.constructor = Guides;
	    /**
	     * Liste des aimants : liste d'objets de coordonnées (propriété(s) <strong>x</strong> et/ou <strong>y</strong>)
	     */
	    Guides.prototype.list = null;
	    /**
	     * Nombre de pixels pour lesquels l'élément DOM sera attiré vers l'aimant
	     */
	    Guides.prototype.strength = 10;
	    /**
	     * Abcisses(s) de référence de l'élément séparés par un espace
	     */
	    Guides.prototype.originX = 'left center right';
	    /**
	     * Ordonnées(s) de référence de l'élément séparés par un espace
	     */
	    Guides.prototype.originY = 'top center bottom';
	    /**
	     * Exige que l'élément soit déposé sur un guide (sinon il retournera à sa place)
	     * @type {Boolean}
	     */
	    Guides.prototype.require = false;
	    /**
	     * Classe à appliquer à l'élément lorsqu'il est en contact avec un aimant
	     */
	    Guides.prototype.className = 'aimant';
	    /**
	     * Fonction(s) à exécuter lorsque l'élément entre en intéraction avec un aimant.
	     */
	    Guides.prototype.onreach = null;
	    /**
	     * Fonction(s) à exécuter lorsque l'élément quitte un aimant.
	     */
	    Guides.prototype.onleave = null;
	    /**
	     * Fonction(s) à exécuter lorsque l'élément est relaché sur un aimant.
	     */
	    Guides.prototype.onsuccess = null;
	    /**
	     * Fonction(s) à exécuter lorsque l'élément est relaché hors de portée d'un aimant.
	     */
	    Guides.prototype.onfail = null;
	
	    /**
	     * <strong>nécessite le module Draggable</strong><br/><br/>
	     * Drag&drop d'un élément DOM 
	     * @param arg argument JSYG faisant référence à l'élément
	     * @param opt optionnel, objet définissant les options. Si défini le drag&drop est activé implicitement. 
	     * @returns {Draggable}
	     */
	    function Draggable(arg, opt) {
	
	        /**
	         * Aimants vers lesquels l'objet sera attiré
	         */
	        this.guides = new Guides();
	
	        if (arg) {
	
	            this.setNode(arg);
	            this.field = this.node;
	
	            if (opt) this.enable(opt);
	        } else if (opt) this.set(opt);
	    };
	
	    function shape(node) {
	        return ['path', 'polyline', 'polygon', 'g', 'text'].indexOf(node.tagName) !== -1 ? 'noAttribute' : 'shape';
	    };
	
	    function rap(dec) {
	        if (dec == null || dec === 'center') return 0.5;else if (dec === 'top' || dec === 'left') return 0;else if (dec === 'bottom' || dec === "right") return 1;
	    };
	
	    Draggable.prototype = new JSYG.StdConstruct();
	
	    Draggable.prototype.constructor = Draggable;
	
	    /**
	     * Champ(s) sur le(s)quel(s) on clique pour déclencher le drag&drop. Par défaut l'élément lui-même.
	     */
	    Draggable.prototype.field = null;
	    /**
	     * Restriction à un bouton de la souris (1 bouton gauche, 2 bouton du milieu, 3 bouton droit)
	     */
	    Draggable.prototype.eventWhich = 1;
	    /**
	     * Classe à appliquer pendant le drag&drop
	     */
	    Draggable.prototype.className = null;
	    /**
	     * Déplacement horizontal
	     */
	    Draggable.prototype.horizontal = true;
	    /**
	     * Déplacement vertical
	     */
	    Draggable.prototype.vertical = true;
	    /**
	     * 'attributes' ou 'transform'. Agit sur les attrobuts de mise en page
	     * ou sur la matrice de transformation
	     */
	    Draggable.prototype.type = 'attributes';
	    /**
	     * Garde ou non la rotation à la conversion de la matrice en attributs
	     * de mise en page (si type=="attributes")
	     */
	    Draggable.prototype.keepRotation = false;
	    /**
	     * Permet de fixer automatiquement les valeurs minLeft,maxRight,minTop,maxBottom par rapport au offsetParent
	     * (valeur positive ou nulle pour brider à l'intérieur du offsetParent, valeur négative pour brider au delà du offsetParent
	     **/
	    Draggable.prototype.bounds = null;
	    /**
	     * abcisse minimale
	     */
	    Draggable.prototype.minLeft = null;
	    /**
	     * ordonnée minimale
	     */
	    Draggable.prototype.minTop = null;
	    /**
	     * abcisse maximale
	     */
	    Draggable.prototype.maxRight = null;
	    /**
	     * ordonnée maximale
	     */
	    Draggable.prototype.maxBottom = null;
	
	    /**
	     * Scrolle ou non automatiquement si on sort de la fenêtre
	     */
	    Draggable.prototype.autoScroll = false;
	    /**
	     * type de curseur à appliquer pendant le drag& drop.
	     * La valeur 'auto' permet un curseur adapté aux options définies.
	     */
	    Draggable.prototype.cursor = 'auto';
	    /**
	     * fonction(s) à exécuter à la préparation d'un déplacement (événement mousedown)
	     */
	    Draggable.prototype.onstart = null;
	    /**
	     * fonction(s) à exécuter au début du déplacement
	     */
	    Draggable.prototype.ondragstart = null;
	    /**
	     * fonction(s) à exécuter pendant le déplacement
	     */
	    Draggable.prototype.ondrag = null;
	    /**
	     * fonction(s) à exécuter à la fin du déplacement
	     */
	    Draggable.prototype.ondragend = null;
	    /**
	     * fonction(s) à exécuter au relachement de la souris qu'il y ait eu déplacement ou non
	     */
	    Draggable.prototype.onend = null;
	    /**
	     * Indique si le drag&drop est actif ou non
	     */
	    Draggable.prototype.enabled = false;
	
	    function eventName(event) {
	        return (JSYG.isMobile && JSYG.isMobile.any ? 'v' : '') + event;
	    }
	    /**
	     * Démarrage du drag&drop. méthode exécutée sur l'événement "mousedown".
	     * @param {Object} e : objet Event.
	     */
	    Draggable.prototype.start = function (e) {
	
	        e.preventDefault();
	
	        var jNode = new JSYG(this.node),
	            parent = jNode.offsetParent();
	
	        if (JSYG.isNumeric(this.bounds)) {
	
	            var dimParent = parent.getDim();
	            this.minLeft = -this.bounds;
	            this.minTop = -this.bounds;
	            this.maxRight = dimParent.width + this.bounds;
	            this.maxBottom = dimParent.height + this.bounds;
	        }
	
	        var that = this,
	            isSvg = jNode.isSVG(),
	            mtxScreenInitInv = jNode.getMtx("screen").inverse(),
	            mtxInit = jNode.getMtx(),
	            mouseInit = new JSYG.Vect(e.clientX, e.clientY).mtx(mtxScreenInitInv),
	            dimInit = jNode.getDim(),
	            mtxScreenParent = parent.getMtx('screen'),
	            bornes = this.minLeft != null || this.minTop != null || this.maxRight != null || this.maxBottom != null ? true : false,
	            guides = this.guides,
	            hasChanged = false,
	            triggerDragStart = false,
	            dimWin = new JSYG(window).getDim(),
	            cursor,
	            fcts = {};
	
	        if (this.cursor === 'auto') {
	
	            if (this.horizontal && this.vertical) cursor = 'move';else if (this.horizontal) cursor = 'e-resize';else cursor = 'n-resize';
	        } else cursor = this.cursor;
	
	        if (cursor) {
	
	            new JSYG(this.field).each(function () {
	                var field = new JSYG(this);
	                field.data('cursorInit', field.css('cursor'));
	                field.css('cursor', cursor);
	            });
	        }
	
	        if (this.className) jNode.addClass(this.className);
	
	        if (guides.list && guides.list.length > 0) {
	
	            guides.offsetX = function () {
	                var tab = guides.originX.trim().split(/ +/),
	                    dec = [];
	                tab.forEach(function (origin) {
	                    dec.push(rap(origin));
	                });
	                return dec;
	            }();
	
	            guides.offsetY = function () {
	                var tab = guides.originY.trim().split(/ +/),
	                    dec = [];
	                tab.forEach(function (origin) {
	                    dec.push(rap(origin));
	                });
	                return dec;
	            }();
	        }
	
	        function mousemoveFct(e) {
	
	            if (!triggerDragStart) {
	                that.trigger('dragstart', that.node, e);
	                triggerDragStart = true;
	            }
	
	            var oldOk = false,
	                mtxScreenInv,
	                mtxScreenParentInv,
	                magnet,
	                guide,
	                ref,
	                i,
	                j,
	                k,
	                N,
	                M,
	                P,
	                mtx,
	                dim,
	                rect,
	                x,
	                y,
	                pt1,
	                pt2,
	                mouse,
	                reachedX = false,
	                reachedY = false,
	                dimFromWin,
	                scrollX = 0,
	                scrollY = 0;
	
	            function applyMagnet(pt1, pt2) {
	
	                mtx = mtx.translate(pt2.x - pt1.x, pt2.y - pt1.y);
	
	                if (that.type !== 'transform' && that._shape !== 'noAttribute') {
	                    dim.x += pt2.x - pt1.x;
	                    dim.y += pt2.y - pt1.y;
	                    jNode.setDim(dim);
	                } else {
	                    jNode.setMtx(mtx);
	                }
	
	                jNode.addClass(guides.className);
	
	                guides.ok = true;
	
	                if (!oldOk) guides.trigger('reach', that.node, e);
	            }
	
	            mouse = new JSYG.Vect(e.clientX, e.clientY).mtx(mtxScreenInitInv);
	
	            mtx = mtxInit.translate(that.horizontal ? mouse.x - mouseInit.x : 0, that.vertical ? mouse.y - mouseInit.y : 0);
	
	            dim = {
	                x: !that.horizontal ? dimInit.x : dimInit.x + mouse.x - mouseInit.x,
	                y: !that.vertical ? dimInit.y : dimInit.y + mouse.y - mouseInit.y
	            };
	
	            if (guides) {
	                oldOk = guides.ok;
	                guides.ok = false;
	                if (guides.className) {
	                    jNode.removeClass(guides.className);
	                }
	            }
	
	            if (that.type !== 'transform' && that._shape !== 'noAttribute') jNode.setDim(dim);else jNode.setMtx(mtx);
	
	            if (bornes) {
	
	                rect = jNode.getDim(isSvg ? 'screen' : null);
	                mtxScreenParentInv = mtxScreenParent.inverse();
	                pt1 = new JSYG.Vect(rect.x, rect.y).mtx(mtxScreenParentInv);
	                pt2 = new JSYG.Vect(rect.x + rect.width, rect.y + rect.height).mtx(mtxScreenParentInv);
	
	                x = 0;y = 0;
	
	                if (that.horizontal) {
	                    if (that.minLeft != null && pt1.x < that.minLeft) {
	                        x = that.minLeft - pt1.x;
	                    } else if (that.maxRight != null && pt2.x > that.maxRight) {
	                        x = that.maxRight - pt2.x;
	                    }
	                }
	
	                if (that.vertical) {
	                    if (that.minTop != null && pt1.y < that.minTop) {
	                        y = that.minTop - pt1.y;
	                    } else if (that.maxBottom != null && pt2.y > that.maxBottom) {
	                        y = that.maxBottom - pt2.y;
	                    }
	                }
	
	                if (x !== 0 || y !== 0) {
	
	                    mtx = new JSYG.Matrix().translate(x, y).multiply(mtx);
	
	                    if (that.type !== 'transform' && that._shape !== 'noAttribute') {
	                        pt1 = new JSYG.Vect(0, 0).mtx(mtxInit.inverse());
	                        pt2 = new JSYG.Vect(x, y).mtx(mtxInit.inverse());
	                        dim.x += pt2.x - pt1.x;
	                        dim.y += pt2.y - pt1.y;
	                        jNode.setDim(dim);
	                    } else jNode.setMtx(mtx);
	                }
	            }
	
	            if (guides.list && guides.list.length > 0) {
	
	                rect = jNode.getDim(isSvg ? 'screen' : null);
	                mtxScreenInv = jNode.getMtx("screen").inverse();
	
	                for (i = 0, N = guides.list.length; i < N; i++) {
	
	                    guide = guides.list[i];
	
	                    magnet = new JSYG.Vect(guide.x != null ? guide.x : 0, guide.y != null ? guide.y : 0).mtx(mtxScreenParent);
	
	                    if (guide.x != null && guide.y != null && !reachedX && !reachedY) {
	
	                        loop: for (j = 0, M = guides.offsetX.length; j < M; j++) {
	
	                            ref = {};
	                            ref.x = rect.x + rect.width * guides.offsetX[j];
	
	                            for (k = 0, P = guides.offsetY.length; k < P; k++) {
	
	                                ref.y = rect.y + rect.height * guides.offsetY[k];
	
	                                if (JSYG.distance(magnet, ref) < guides.strength) {
	                                    pt1 = new JSYG.Vect(ref).mtx(mtxScreenInv);
	                                    pt2 = new JSYG.Vect(magnet).mtx(mtxScreenInv);
	                                    applyMagnet(pt1, pt2);
	                                    reachedX = reachedY = true;
	                                    break loop;
	                                }
	                            }
	                        }
	                    } else if (guide.x != null && !reachedX) {
	
	                        for (j = 0, M = guides.offsetX.length; j < M; j++) {
	
	                            ref = rect.x + rect.width * guides.offsetX[j];
	
	                            if (Math.abs(magnet.x - ref) < guides.strength) {
	                                pt1 = new JSYG.Vect(ref, 0).mtx(mtxScreenInv);
	                                pt2 = new JSYG.Vect(magnet.x, 0).mtx(mtxScreenInv);
	                                applyMagnet(pt1, pt2);
	                                reachedX = true;
	                                break;
	                            }
	                        }
	                    } else if (guide.y != null && !reachedY) {
	
	                        for (j = 0, M = guides.offsetY.length; j < M; j++) {
	
	                            ref = rect.y + rect.height * guides.offsetY[j];
	
	                            if (Math.abs(magnet.y - ref) < guides.strength) {
	                                pt1 = new JSYG.Vect(0, ref).mtx(mtxScreenInv);
	                                pt2 = new JSYG.Vect(0, magnet.y).mtx(mtxScreenInv);
	                                applyMagnet(pt1, pt2);
	                                reachedY = true;
	                                break;
	                            }
	                        }
	                    }
	
	                    if (reachedX && reachedY) break;
	                }
	
	                if (oldOk && !guides.ok) guides.trigger('leave', that.node, e);
	            }
	
	            if (that.autoScroll) {
	
	                dimFromWin = jNode.getDim(window);
	
	                if (dimFromWin.x < 0) scrollX = dimFromWin.x;else if (dimFromWin.x + dimFromWin.width > dimWin.width) {
	                    scrollX = dimFromWin.x + dimFromWin.width - dimWin.width;
	                }
	
	                if (dimFromWin.y < 0) scrollY = dimFromWin.y;else if (dimFromWin.y + dimFromWin.height > dimWin.height) {
	                    scrollY = dimFromWin.y + dimFromWin.height - dimWin.height;
	                }
	
	                window.scrollBy(scrollX, scrollY);
	            }
	
	            hasChanged = true;
	            that.trigger('drag', that.node, e);
	        };
	
	        function remove(e) {
	
	            if (cursor) {
	                new JSYG(that.field).each(function () {
	                    var field = new JSYG(this);
	                    field.css('cursor', field.data('cursorInit'));
	                });
	            }
	
	            if (guides) {
	
	                if (guides.className) jNode.removeClass(guides.className);
	                if (that.className) jNode.removeClass(that.className);
	                if (guides.ok) guides.trigger('success', that.node, e);else if (guides.require) {
	
	                    var to;
	                    //var backupTransf = null;
	
	                    if (that.type !== 'transform') {
	
	                        if (that._shape === 'noAttribute') jNode.mtx2attrs({ keepRotation: that.keepRotation });
	                        to = jNode.isSVG() ? { x: dimInit.x, y: dimInit.y } : { 'left': dimInit.x + 'px', 'top': dimInit.y + 'px' };
	                    } else {
	                        to = mtxInit;
	                        /*backupTransf = jNode.transfOrigin();
	                        jNode.transfOrigin(0,0);*/
	                    }
	
	                    if (!JSYG.Animation) {
	
	                        if (that.type !== 'transform') jNode.setDim({ x: dimInit.x, y: dimInit.y });else jNode.setMtx(mtxInit);
	                    } else {
	
	                        jNode.animate({
	                            to: to,
	                            easing: 'swing',
	                            callback: function callback() {
	                                /*if (backupTransf) {
	                                jNode.transfOrigin(backupTransf);
	                                }*/
	                                guides.trigger('fail', that.node, e);
	                            }
	                        });
	                    }
	                }
	            }
	
	            if (hasChanged && that.type !== 'transform' && that._shape === 'noAttribute') jNode.mtx2attrs({ keepRotation: that.keepRotation });
	
	            new JSYG(document).off(fcts);
	
	            if (hasChanged) that.trigger('dragend', that.node, e);
	
	            that.trigger('end', that.node, e);
	        }
	
	        fcts[eventName("mousemove")] = mousemoveFct;
	        fcts[eventName("mouseup")] = remove;
	
	        new JSYG(document).on(fcts);
	
	        this.trigger('start', this.node, e);
	    };
	
	    /**
	     * Activation de la mobilité
	     * @param opt optionnel, objet définissant les options
	     */
	    Draggable.prototype.enable = function (opt) {
	
	        this.disable(); //si plusieurs appels
	
	        if (opt) this.set(opt);
	
	        var evt = opt && opt.evt,
	            jNode = new JSYG(this.node),
	            event = eventName("mousedown"),
	            that = this;
	
	        function start(e) {
	            if (that.eventWhich && e.which && e.which != that.eventWhich) return;
	            that.start(e);
	        }
	
	        if (!this.field) this.field = this.node;
	
	        this._shape = shape(this.node);
	
	        new JSYG(this.field).each(function () {
	            var field = new JSYG(this);
	            field.data('draggableUnselect', this.unselectable);
	            this.unselectable = 'on'; //IE
	            field.on(event, start);
	        });
	
	        this.disable = function () {
	            new JSYG(this.field).each(function () {
	                var field = new JSYG(this);
	                field.off(event, start);
	                this.unselectable = field.data('draggableUnselect');
	            });
	            jNode.removeData('draggable');
	            this.enabled = false;
	            return this;
	        };
	
	        this.enabled = true;
	
	        // pour commencer tout de suite
	        if (evt) this.start(evt);
	
	        return this;
	    };
	
	    /**
	     * Désactivation de la mobilité
	     */
	    Draggable.prototype.disable = function () {
	        return this;
	    }; //définie lors de l'appel de la méthode on() car on a besoin du contexte
	
	    JSYG.Draggable = Draggable;
	
	    var plugin = JSYG.bindPlugin(Draggable);
	    /**
	     * Elément déplaçable
	     * @returns {JSYG}
	     * @see Draggable pour une utilisation détaillée
	     * @example <pre>new JSYG('#maDiv').draggable();
	     * 
	     * //utilisation avancée
	     * new JSYG('#maDiv').draggable({
	     * 	minLeft:0,
	     * 	maxRight:500,
	     * 	vertical:false,
	     * 	type:'transform',
	     * 	ondragend:function() { alert('translation horizontale : '+new JSYG(this).translateX(); }
	     * });
	     */
	    JSYG.prototype.draggable = function () {
	        return plugin.apply(this, arguments);
	    };
	
	    return Draggable;
	});

/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(502);

/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	/*jshint forin:false, eqnull:true*/
	/* globals JSYG*/
	
	(function (factory) {
	
	    if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(481), __webpack_require__(479)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof JSYG != "undefined") {
	        if (JSYG.Path) factory(JSYG);else throw new Error("JSYG.Path is needed");
	    } else throw new Error("JSYG is needed");
	})(function (JSYG) {
	
	    "use strict";
	
	    function Alignment(arg) {
	
	        this.list = arg;
	    }
	
	    Alignment.prototype = new JSYG.StdConstruct();
	
	    Alignment.prototype.onalign = null;
	
	    Alignment.prototype.onalignleft = null;
	    Alignment.prototype.onaligncenter = null;
	    Alignment.prototype.onalignright = null;
	
	    Alignment.prototype.onaligntop = null;
	    Alignment.prototype.onalignmiddle = null;
	    Alignment.prototype.onalignbottom = null;
	
	    Alignment.prototype.list = null;
	
	    Alignment.prototype.getGlobalDim = function () {
	
	        var globalDim = {
	            left: Infinity,
	            top: Infinity,
	            bottom: -Infinity,
	            right: -Infinity
	        };
	
	        var list = new JSYG(this.list);
	        var parent = list[0].parentNode;
	
	        list.each(function () {
	
	            if (this.parentNode != parent) throw new Error("Les éléments de la collection doivent partager le même parent");
	
	            var dim = new JSYG(this).getDim(parent);
	
	            if (dim.x < globalDim.left) globalDim.left = dim.x;
	            if (dim.y < globalDim.top) globalDim.top = dim.y;
	            if (dim.x + dim.width > globalDim.right) globalDim.right = dim.x + dim.width;
	            if (dim.y + dim.height > globalDim.bottom) globalDim.bottom = dim.y + dim.height;
	        });
	
	        return {
	            x: globalDim.left,
	            y: globalDim.top,
	            width: globalDim.right - globalDim.left,
	            height: globalDim.bottom - globalDim.top
	        };
	    };
	
	    Alignment.prototype.getCenter = function () {
	
	        var globalDim = this.getGlobalDim();
	        return new JSYG.Vect(globalDim.x + globalDim.width / 2, globalDim.y + globalDim.height / 2);
	    };
	
	    Alignment.prototype.alignLeft = function () {
	
	        var globalDim = this.getGlobalDim(),
	            left = globalDim.x,
	            list = new JSYG(this.list),
	            parent = list[0].parentNode;
	
	        list.setDim({ x: left, from: parent });
	
	        this.trigger("align");
	        this.trigger("alignleft", null, left);
	
	        return this;
	    };
	
	    Alignment.prototype.alignCenter = function () {
	
	        var center = this.getCenter(),
	            list = new JSYG(this.list),
	            parent = list[0].parentNode;
	
	        list.each(function () {
	
	            var $this = new JSYG(this),
	                mtx = $this.getMtx().inverse(),
	                dim = $this.getDim(),
	                dimP = $this.getDim(parent),
	                pt1 = new JSYG.Vect(dimP.x + dimP.width / 2, 0).mtx(mtx),
	                pt2 = new JSYG.Vect(center.x, 0).mtx(mtx);
	
	            $this.setDim({
	                x: dim.x + pt2.x - pt1.x,
	                y: dim.y + pt2.y - pt1.y
	            });
	        });
	
	        this.trigger("align");
	        this.trigger("aligncenter", null, center.x);
	
	        return this;
	    };
	
	    Alignment.prototype.alignRight = function () {
	
	        var globalDim = this.getGlobalDim(),
	            right = globalDim.x + globalDim.width,
	            list = new JSYG(this.list),
	            parent = list[0].parentNode;
	
	        list.each(function () {
	
	            var $this = new JSYG(this),
	                mtx = $this.getMtx().inverse(),
	                dim = $this.getDim(),
	                dimP = $this.getDim(parent),
	                pt1 = new JSYG.Vect(dimP.x, 0).mtx(mtx),
	                pt2 = new JSYG.Vect(right - dimP.width, 0).mtx(mtx);
	
	            $this.setDim({
	                x: dim.x + pt2.x - pt1.x,
	                y: dim.y + pt2.y - pt1.y
	            });
	        });
	
	        this.trigger("align");
	        this.trigger("alignright", null, right);
	
	        return this;
	    };
	
	    Alignment.prototype.alignTop = function () {
	
	        var top = this.getGlobalDim().y,
	            list = new JSYG(this.list),
	            parent = list[0].parentNode;
	
	        list.each(function () {
	
	            var $this = new JSYG(this),
	                mtx = $this.getMtx().inverse(),
	                dim = $this.getDim(),
	                dimP = $this.getDim(parent),
	                pt1 = new JSYG.Vect(0, dimP.y).mtx(mtx),
	                pt2 = new JSYG.Vect(0, top).mtx(mtx);
	
	            $this.setDim({
	                x: dim.x + pt2.x - pt1.x,
	                y: dim.y + pt2.y - pt1.y
	            });
	        });
	
	        this.trigger("align");
	        this.trigger("aligntop", null, top);
	
	        return this;
	    };
	
	    Alignment.prototype.alignMiddle = function () {
	
	        var center = this.getCenter(),
	            list = new JSYG(this.list),
	            parent = list[0].parentNode;
	
	        list.each(function () {
	
	            var $this = new JSYG(this),
	                mtx = $this.getMtx().inverse(),
	                dim = $this.getDim(),
	                dimP = $this.getDim(parent),
	                pt1 = new JSYG.Vect(0, dimP.y + dimP.height / 2).mtx(mtx),
	                pt2 = new JSYG.Vect(0, center.y).mtx(mtx);
	
	            $this.setDim({
	                x: dim.x + pt2.x - pt1.x,
	                y: dim.y + pt2.y - pt1.y
	            });
	        });
	
	        this.trigger("align");
	        this.trigger("alignmiddle", null, center.y);
	
	        return this;
	    };
	
	    Alignment.prototype.alignBottom = function () {
	
	        var dim = this.getGlobalDim(),
	            bottom = dim.y + dim.height,
	            list = new JSYG(this.list),
	            parent = list[0].parentNode;
	
	        list.each(function () {
	
	            var $this = new JSYG(this),
	                mtx = $this.getMtx().inverse(),
	                dim = $this.getDim(),
	                dimP = $this.getDim(parent),
	                pt1 = new JSYG.Vect(0, dimP.y).mtx(mtx),
	                pt2 = new JSYG.Vect(0, bottom - dimP.height).mtx(mtx);
	
	            $this.setDim({
	                x: dim.x + pt2.x - pt1.x,
	                y: dim.y + pt2.y - pt1.y
	            });
	        });
	
	        this.trigger("align");
	        this.trigger("alignbottom", null, bottom);
	
	        return this;
	    };
	
	    var aligns = ['top', 'bottom', 'left', 'right', 'center', 'middle'];
	
	    JSYG.prototype.align = function (alignment) {
	
	        if (aligns.indexOf(alignment.toLowerCase()) == -1) throw new Error(alignment + " : argument incorrect (" + aligns.join() + " requis)");
	
	        var method = "align" + alignment.charAt(0).toUpperCase() + alignment.substr(1);
	
	        new Alignment(this)[method]();
	    };
	
	    JSYG.Alignment = Alignment;
	
	    return Alignment;
	});

/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(504);

/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	/*jshint forin:false, eqnull:true*/
	/* globals JSYG*/
	
	(function (factory) {
	
	    if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(481), __webpack_require__(479)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof JSYG != "undefined") {
	
	        if (JSYG.Path) factory(JSYG);else throw new Error("JSYG.Path is needed");
	    } else throw new Error("JSYG is needed");
	})(function (JSYG) {
	
	    "use strict";
	
	    function Container(arg) {
	
	        if (!(this instanceof Container)) return new Container(arg);
	
	        if (!arg) arg = '<g>';
	
	        JSYG.call(this, arg);
	
	        if (this.getTag() != "g") throw new Error("L'argument ne fait pas référence à un conteneur g.");
	    }
	
	    Container.prototype = Object.create(JSYG.prototype);
	
	    Container.prototype.constructor = Container;
	
	    Container.prototype.onadditem = null;
	    Container.prototype.onfreeitem = null;
	    Container.prototype.onchange = null;
	
	    Container.prototype.addItems = function (elmt) {
	
	        var that = this,
	            mtx = this.getMtx().inverse();
	
	        JSYG.makeArray(arguments).forEach(function (elmt) {
	
	            new JSYG(elmt).each(function () {
	
	                var $this = new JSYG(this);
	
	                try {
	                    $this.addMtx(mtx);
	                } //éléments non tracés
	                catch (e) {}
	
	                $this.appendTo(that[0]);
	
	                that.trigger('additem', that[0], this);
	                that.trigger('change');
	            });
	        });
	
	        return this;
	    };
	
	    Container.prototype.applyTransform = function () {
	
	        var mtx = this.getMtx(),
	            that = this;
	
	        this.children().each(function () {
	            var $this = new JSYG(this);
	            $this.setMtx(mtx.multiply($this.getMtx(that)));
	        });
	
	        this.resetTransf();
	
	        return this;
	    };
	
	    Container.prototype.freeItems = function (elmt) {
	
	        var parent = this.parent()[0],
	            mtx = this.getMtx(),
	            that = this,
	            args = JSYG.makeArray(arguments.length === 0 ? this.children() : arguments);
	
	        args.reverse().forEach(function (elmt) {
	
	            new JSYG(elmt).each(function () {
	
	                var $this = new JSYG(this);
	
	                if (!$this.isChildOf(that)) return;
	
	                try {
	                    $this.setMtx(mtx.multiply($this.getMtx(that)));
	                } catch (e) {}
	
	                $this.insertAfter(that[0]);
	
	                that.trigger('freeitem', that[0], this);
	                that.trigger('change');
	            });
	        });
	
	        return this;
	    };
	
	    JSYG.Container = Container;
	
	    return Container;
	});

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(506);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(449)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./JSYG.Editor.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./JSYG.Editor.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(388)();
	// imports
	
	
	// module
	exports.push([module.id, "svg g.fillBox circle{\n\tfill:white;\n\tstroke:black;\n\tstroke-width:0.2;\n}\nsvg g.fillBox .mainPoints circle{\n\tfill:brown;\n\tstroke:none;\n\tcursor:default;\n}\nsvg g.fillBox .mainPoints circle.closingPoint{\n\tfill:green;\n}\nsvg g.fillBox .ctrlPoints circle{\n\tfill:gold;\n\tstroke:none;\n\tcursor:default;\n}\ndiv.resize div {\n\tborder-radius:5px;\n\tbackground-color:white;\n\tborder:1px solid black;\n\tposition:absolute;\n}\ndiv.rotate div {\n\tborder-radius:5px;\n\tbackground-color:white;\n\tborder:1px solid black;\n\tposition:absolute;\n}", ""]);
	
	// exports


/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(508);
	__webpack_require__(511);

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	/*jshint forin:false, eqnull:true*/
	/* globals JSYG*/
	
	(function (factory) {
	
	  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(481), __webpack_require__(509), __webpack_require__(485)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof JSYG != "undefined") {
	    if (JSYG.BoundingBox && JSYG.Color) factory(JSYG, JSYG.Color, JSYG.BoundingBox);else throw new Error("Dependency is missing");
	  } else throw new Error("JSYG is needed");
	})(function (JSYG, Color, BoundingBox) {
	
	  "use strict";
	
	  function TextEditor(arg, opt) {
	
	    this.box = new BoundingBox();
	    this.box.className = 'textBox';
	
	    this.container = this.box.container;
	
	    this.selection = new Selection(this);
	    this.cursor = new Cursor(this);
	    this.keyboard = new Keyboard(this);
	
	    if (arg) this.setNode(arg);
	    if (opt) this.enable(opt);
	  }
	
	  TextEditor.prototype = new JSYG.StdConstruct();
	
	  TextEditor.prototype._target = null;
	
	  /**     * Fonctions à exécuter quand on définit une autre cible     */
	  TextEditor.prototype.onchangetarget = null;
	  /**     * Fonctions à exécuter à l'affichage de la boîte d'édition     */
	  TextEditor.prototype.onshow = null;
	  /**     * Fonctions à exécuter à la suppression de la boîte d'édition     */
	  TextEditor.prototype.onhide = null;
	  /**     * Fonctions à exécuter à la suppression de caractères     */
	  TextEditor.prototype.ondeletechars = null;
	  /**     * Fonctions à exécuter à l'ajout de caractères     */
	  TextEditor.prototype.oninsertchars = null;
	  /**     * Fonctions à exécuter à la mise à jour de la boîte d'édition     */
	  TextEditor.prototype.onupdate = null;
	  /**     * Fonctions à exécuter à l'ajout ou suppression de caractères     */
	  TextEditor.prototype.onchange = null;
	  /**     * Fonctions à exécuter à la validation de la boîte d'édition (seulement si le texte a changé)     */
	  TextEditor.prototype.onvalidate = null;
	
	  TextEditor.prototype.className = "textEditor";
	
	  TextEditor.prototype._content = null;
	
	  TextEditor.prototype.enabled = false;
	
	  TextEditor.prototype.target = function (arg) {
	
	    if (arg == null) return this._target ? new JSYG(this._target) : null;
	
	    var target = new JSYG(arg)[0];
	
	    if (target.tagName != 'text') throw new Error("La cible n'est pas un élément texte");
	
	    var display = this.display;
	
	    if (display) this.hide(true);
	
	    this._target = target;
	    this.box.setNode(target);
	
	    if (display) this.show(true);
	
	    this.trigger('changetarget', this.node, target);
	
	    return this;
	  };
	
	  TextEditor.prototype.targetRemove = function () {
	
	    this._target = null;
	  };
	
	  TextEditor.prototype.insertChars = function (chars, indChar) {
	
	    if (indChar < 0 || indChar > this._target.getNumberOfChars()) return false;
	
	    chars = chars.replace(/ /g, " ");
	
	    var content = this._target.textContent;
	
	    this._target.textContent = content.substr(0, indChar) + chars + content.substr(indChar);
	
	    this.box.update();
	
	    this.trigger('insertchars', this.node, this._target);
	    this.trigger('change', this.node, this._target);
	
	    return this;
	  };
	
	  TextEditor.prototype.deleteChars = function (indChar, nbChars) {
	
	    nbChars = nbChars || 1;
	
	    if (indChar < 0 || indChar > this._target.getNumberOfChars()) return false;
	
	    var content = this._target.textContent;
	
	    this._target.textContent = content.substr(0, indChar) + content.substr(indChar + nbChars);
	
	    this.box.update();
	
	    this.trigger('deletechars', this.node, this._target);
	    this.trigger('change', this.node, this._target);
	
	    return this;
	  };
	
	  TextEditor.prototype.getCharFromPos = function (e) {
	
	    var pt = new JSYG(this._target).getCursorPos(e);
	    return this._target.getCharNumAtPosition(pt.toSVGPoint());
	  };
	
	  TextEditor.prototype.show = function (_preventEvent) {
	
	    if (!this._target) return this;
	
	    if (this.display) return this.update();
	
	    this.box.show();
	
	    this.selection.enable();
	    this.keyboard.enable();
	
	    this.cursor.enable().show(this._target.getNumberOfChars());
	
	    this.display = true;
	
	    this._content = this._target.textContent;
	
	    if (!_preventEvent) this.trigger('show', this.node, this._target);
	
	    return this;
	  };
	
	  TextEditor.prototype.hide = function (_preventEvent) {
	
	    if (!this.display) return this;
	
	    this.selection.disable();
	    this.cursor.disable();
	    this.keyboard.disable();
	
	    new JSYG(this.container).removeClass(this.className).resetTransf().detach();
	
	    this.display = false;
	
	    if (this._target.textContent != this._content) this.trigger('validate', this.node, this._target);
	
	    if (!_preventEvent) this.trigger('hide', this.node, this._target);
	
	    return this;
	  };
	
	  TextEditor.prototype.update = function () {
	
	    if (!this.display) return this;
	
	    this.box.update();
	
	    if (this.selection.display) this.selection.select(this.selection.from, this.selection.to);
	    if (this.cursor.display) this.cursor.show(this.cursor.currentChar);
	
	    this.trigger('update', this.node, this._target);
	
	    return this;
	  };
	
	  function Selection(textObject) {
	    /**         * référence vers l'objet TextEditor parent         */
	    this.textEditor = textObject;
	    /**         * Conteneur des controles         */
	    this.container = new JSYG('<rect>')[0];
	  }
	
	  Selection.prototype = new JSYG.StdConstruct();
	
	  Selection.prototype.className = "textSelection";
	
	  Selection.prototype.display = false;
	
	  Selection.prototype.from = null;
	
	  Selection.prototype.to = null;
	
	  Selection.prototype.enabled = false;
	
	  Selection.prototype.hide = function () {
	
	    this.from = null;
	    this.to = null;
	
	    new JSYG(this.container).detach();
	
	    this.display = false;
	
	    return this;
	  };
	
	  Selection.prototype.deleteChars = function () {
	
	    if (this.from === this.to) {
	      return;
	    }
	
	    this.textEditor.deleteChars(this.from, this.to - this.from);
	
	    this.to = this.from;
	
	    this.textEditor.cursor.goTo(this.to);
	
	    this.hide();
	
	    return this;
	  };
	
	  function getFontSize(node) {
	
	    var size = new JSYG(node).css("font-size");
	
	    if (/px/.test(size)) return parseFloat(size);else if (/pt/.test(size)) return parseFloat(size) * 1.33;else throw new Error(size + " : valeur incorrecte");
	  }
	
	  Selection.prototype.select = function (from, to) {
	
	    if (from === to) return this.hide();
	
	    this.textEditor.cursor.hide();
	
	    var node = this.textEditor._target;
	    var nbchars = node.getNumberOfChars();
	
	    from = JSYG.clip(from, 0, nbchars);
	    to = JSYG.clip(to, 0, nbchars);
	
	    var jCont = new JSYG(this.container).addClass(this.className);
	
	    if (!this.container.parentNode) jCont.appendTo(this.textEditor.container);
	
	    jCont.fill(new Color(new JSYG(node).css("fill")).complementary().toString());
	
	    jCont.setMtx(new JSYG(node).getMtx(this.textEditor.node));
	
	    var fontsize = getFontSize(node);
	    var start, end;
	
	    if (from === nbchars) {
	      //positionnement tout à la fin
	      start = node.getEndPositionOfChar(from - 1);
	    } else {
	      start = node.getStartPositionOfChar(from);
	    }
	
	    if (to === nbchars) {
	      //positionnement tout à la fin
	      end = node.getEndPositionOfChar(to - 1);
	    } else {
	      end = node.getStartPositionOfChar(to);
	    }
	
	    jCont.setDim({
	      x: start.x < end.x ? start.x : end.x,
	      y: start.y - fontsize + 3,
	      width: Math.abs(end.x - start.x),
	      height: fontsize
	    });
	
	    this.from = Math.min(from, to);
	    this.to = Math.max(from, to);
	
	    this.textEditor.cursor.currentChar = this.to;
	
	    this.display = true;
	
	    return this;
	  };
	
	  Selection.prototype.start = function (e) {
	
	    var node = this.textEditor._target;
	
	    if (!node || node.tagName != "text") return this.hide();
	
	    var pt = new JSYG(node).getCursorPos(e),
	        ind = this.textEditor.getCharFromPos(e),
	        pt1,
	        pt2,
	        that = this,
	        from,
	        to;
	
	    if (ind == -1) return this.textEditor.hide();
	
	    this.hide();
	
	    pt1 = node.getStartPositionOfChar(ind);
	    pt2 = node.getEndPositionOfChar(ind);
	
	    if (pt2.x - pt.x < pt.x - pt1.x) ind++;
	
	    from = ind;
	    to = ind;
	
	    function mousemove(e) {
	
	      var pt = new JSYG(node).getCursorPos(e),
	          ind = that.textEditor.getCharFromPos(e),
	          pt1,
	          pt2;
	
	      if (ind === -1) return;
	
	      pt1 = node.getStartPositionOfChar(ind);
	      pt2 = node.getEndPositionOfChar(ind);
	
	      if (pt2.x - pt.x < pt.x - pt1.x) ind++;
	
	      to = ind;
	
	      that.select(from, to);
	    }
	
	    function remove() {
	      new JSYG(that.textEditor.node).off({
	        "mousemove": mousemove,
	        "mouseup": remove
	      });
	    }
	
	    new JSYG(this.textEditor.node).on({
	      "mousemove": mousemove,
	      "mouseup": remove
	    });
	
	    return this;
	  };
	
	  Selection.prototype.selectWord = function (ind) {
	
	    this.textEditor.cursor.goTo(ind);
	    var word = this.textEditor.cursor.getCurrentWord();
	    this.select(word.start, word.end);
	  };
	
	  Selection.prototype.dblclick = function (e) {
	
	    var node = this.textEditor._target;
	    if (!node || node.tagName != 'text') return this.hide();
	
	    e.preventDefault();
	
	    var ind = this.textEditor.getCharFromPos(e);
	
	    this.selectWord(ind);
	  };
	
	  Selection.prototype.enable = function (opt) {
	
	    this.disable();
	
	    if (opt) {
	      this.set(opt);
	    }
	
	    var that = this;
	
	    function start(e) {
	
	      if (e.which != 1) return;
	
	      e.preventDefault();
	
	      that.start(e);
	    }
	
	    function dblclick(e) {
	
	      if (e.which != 1) return;
	
	      e.preventDefault();
	
	      that.dblclick(e);
	    }
	
	    new JSYG(this.textEditor.node).on("mousedown", start);
	    new JSYG(this.textEditor.container).on("dblclick", dblclick);
	
	    this.disable = function () {
	      this.hide();
	      new JSYG(this.textEditor.node).off("mousedown", start);
	      new JSYG(this.textEditor.container).off("dblclick", dblclick);
	      this.enabled = false;
	      return this;
	    };
	
	    this.enabled = true;
	
	    return this;
	  };
	
	  Selection.prototype.disable = function () {
	    return this;
	  };
	
	  function Cursor(textObject) {
	    /**         * référence vers l'objet TextEditor parent         */
	    this.textEditor = textObject;
	
	    this.container = new JSYG('<line>')[0];
	  }
	
	  Cursor.prototype = new JSYG.StdConstruct();
	
	  Cursor.prototype.enabled = false;
	
	  Cursor.prototype.display = false;
	
	  Cursor.prototype.currentChar = -1;
	
	  Cursor.prototype.className = 'cursor';
	
	  Cursor.prototype._interval = false;
	
	  Cursor.prototype.goTo = function (indice) {
	    return this.show(indice);
	  };
	
	  Cursor.prototype.setFromPos = function (e) {
	    return this.show(this.textEditor.getCharFromPos(e));
	  };
	
	  Cursor.prototype.firstChar = function () {
	    return this.goTo(0);
	  };
	
	  Cursor.prototype.lastChar = function () {
	    return this.goTo(this.textEditor._target.getNumberOfChars());
	  };
	
	  Cursor.prototype.nextChar = function () {
	    return this.goTo(this.currentChar + 1);
	  };
	
	  Cursor.prototype.prevChar = function () {
	    return this.goTo(this.currentChar - 1);
	  };
	
	  Cursor.prototype.insertChar = function (letter) {
	    this.textEditor.insertChars(letter, this.currentChar);
	    this.nextChar();
	  };
	
	  Cursor.prototype.deleteChar = function () {
	    this.textEditor.deleteChars(this.currentChar);
	    this.goTo(this.currentChar);
	  };
	
	  Cursor.prototype.getCurrentWord = function () {
	
	    if (this.currentChar === -1) {
	      return;
	    }
	
	    var str = this.textEditor._target.textContent,
	        start = str.substr(0, this.currentChar).replace(/\w+$/, '').length,
	        match = str.substr(this.currentChar).match(/^\w+/) || [[]],
	        end = match[0].length + this.currentChar;
	
	    return { start: start, end: end, content: str.substring(start, end) };
	  };
	
	  Cursor.prototype.show = function (indice) {
	
	    var node = this.textEditor._target;
	
	    if (indice < 0 || indice > node.getNumberOfChars()) {
	      return false;
	    }
	
	    var pt,
	        jNode = new JSYG(node),
	        nbchars = node.getNumberOfChars(),
	        fontsize = getFontSize(node),
	        color = jNode.fill(),
	        jCont = new JSYG(this.container);
	
	    if (color == "none") color = "black";
	
	    if (nbchars === 0) {
	      pt = new JSYG.Vect(jNode.attr("x"), jNode.attr("y"));
	    } else if (indice === nbchars) {
	      //positionnement tout à la fin
	      pt = node.getEndPositionOfChar(indice - 1);
	    } else pt = node.getStartPositionOfChar(indice);
	
	    this.hide();
	
	    jCont.attr({
	      x1: pt.x, y1: pt.y + 3,
	      x2: pt.x, y2: pt.y + 3 - fontsize
	    }).css('visibility', 'visible').css('stroke', color).addClass(this.className).setMtx(new JSYG(node).getMtx(this.textEditor.node)).appendTo(this.textEditor.container);
	
	    this.interval = window.setInterval(function () {
	      jCont.css('visibility', jCont.css('visibility') === 'visible' ? 'hidden' : 'visible');
	    }, 600);
	
	    this.currentChar = indice;
	    this.textEditor.selection.from = indice;
	    this.textEditor.selection.to = indice;
	
	    this.display = true;
	
	    return this;
	  };
	
	  Cursor.prototype.hide = function () {
	
	    window.clearInterval(this.interval);
	
	    new JSYG(this.container).detach();
	
	    this.display = false;
	
	    return this;
	  };
	
	  Cursor.prototype._mousedown = function (e) {
	
	    if (e.which != 1) return this;
	
	    var node = this.textEditor._target,
	        pt = new JSYG(node).getCursorPos(e),
	        ind = this.textEditor.getCharFromPos(e),
	        pt1,
	        pt2;
	
	    if (ind === -1) return this;
	
	    pt1 = node.getStartPositionOfChar(ind);
	    pt2 = node.getEndPositionOfChar(ind);
	
	    if (pt2.x - pt.x < pt.x - pt1.x) ind++;
	
	    this.goTo(ind);
	
	    return this;
	  };
	
	  Cursor.prototype.enable = function (opt) {
	
	    this.disable();
	
	    if (opt) {
	      this.set(opt);
	    }
	
	    var mousedown = this._mousedown.bind(this);
	
	    new JSYG(this.textEditor.node).on("mousedown", mousedown);
	
	    this.disable = function () {
	      this.hide();
	      new JSYG(this.textEditor.node).off('mousedown', mousedown);
	      this.enabled = false;
	      return this;
	    };
	
	    this.enabled = true;
	    return this;
	  };
	
	  Cursor.prototype.disable = function () {
	    return this;
	  };
	
	  function Keyboard(textObject) {
	    /**         * référence vers l'objet TextEditor parent         */
	    this.textEditor = textObject;
	  }
	
	  Keyboard.prototype = {
	
	    enabled: false,
	
	    keys: ['ArrowLeft', 'ArrowRight', 'Home', 'End', 'Backspace', 'Delete', 'Escape', 'Return', 'Enter'],
	
	    _firstPos: null,
	
	    _keypress: function _keypress(e) {
	
	      if (!/^[\w\W]$/.test(e.key) || e.ctrlKey || this.textEditor.cursor.display === false && this.textEditor.display === false) return;
	
	      e.preventDefault();
	
	      this.textEditor.selection.deleteChars();
	      this.textEditor.cursor.insertChar(e.key);
	    },
	
	    _keydown: function _keydown(e) {
	
	      if (this.textEditor.cursor.display === false && this.textEditor.selection.from === false) return;
	
	      if (this.keys.indexOf(e.key) == -1) return;
	
	      e.preventDefault();
	
	      var cursor = this.textEditor.cursor,
	          select = this.textEditor.selection,
	          target = this.textEditor._target,
	
	      //nbchars = target.getNumberOfChars(),
	      inverse;
	
	      //début d'une sélection au clavier
	      if (e.shiftKey && e.key != 'Home' && e.key != 'End' && select.from === select.to) {
	        this._firstPos = cursor.currentChar;
	      }
	
	      inverse = this._firstPos >= cursor.currentChar;
	
	      switch (e.key) {
	
	        case "ArrowLeft":
	          if (e.shiftKey) {
	            if (select.display) {
	              if (inverse) select.select(select.from - 1, select.to);else select.select(select.from, select.to - 1);
	            } else select.select(cursor.currentChar - 1, cursor.currentChar);
	          } else {
	            select.hide();cursor.prevChar();
	          }
	          break;
	
	        case "ArrowRight":
	          if (e.shiftKey) {
	            if (select.display) {
	              if (inverse) select.select(select.from + 1, select.to);else select.select(select.from, select.to + 1);
	            } else select.select(cursor.currentChar, cursor.currentChar + 1);
	          } else {
	            select.hide();cursor.nextChar();
	          }
	          break;
	
	        case "Home":
	          if (e.shiftKey) select.select(0, select.from);else {
	            select.hide();cursor.firstChar();
	          }
	          break;
	
	        case "End":
	          if (e.shiftKey) select.select(select.from, target.getNumberOfChars());else {
	            select.hide();cursor.lastChar();
	          }
	          break;
	
	        case "Backspace":
	          if (select.display) select.deleteChars();else if (cursor.currentChar > 0) {
	            cursor.prevChar();cursor.deleteChar();
	          }
	          break;
	
	        case "Delete":
	          if (select.display) select.deleteChars();else if (cursor.currentChar >= 0) cursor.deleteChar();
	          break;
	
	        case "Escape":
	        case "Return":
	        case "Enter":
	          this.textEditor.hide();
	          break;
	      }
	    },
	
	    enable: function enable() {
	
	      this.disable();
	
	      var fcts = {
	        "keydown": this._keydown.bind(this),
	        "keypress": this._keypress.bind(this)
	      };
	
	      new JSYG(document).on(fcts);
	
	      this.disable = function () {
	        new JSYG(document).off(fcts);
	        this.enabled = false;
	        return this;
	      };
	
	      this.enabled = true;
	
	      return this;
	    },
	
	    disable: function disable() {
	      return this;
	    }
	
	  };
	
	  JSYG.TextEditor = TextEditor;
	
	  return TextEditor;
	});

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(510);

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	;(function () {
	
	    "use strict";
	
	    /**
	     * Constructeur de couleurs
	     * @param arg types possibles
	     * <ul>
	     * 	<li> chaîne
	     * 		<ul>
	     * 			<li>hexa sur 3 caractères : "#333" </li>
	     * 			<li>hexa sur 6 caractères : "#3E3E3E" </li>
	     * 			<li>rgb : "rgb(15,15,15)" </li>
	     * 			<li>rgba : "rgba(15,15,15,1)" </li>
	     * 		</ul>
	     * </li>
	     * <li> objet
	     * 		<ul>
	     * 			<li>rgb : propriétés r,g,b de 0 à 255</li>
	     * 			<li>rgba : propriétés r,g,b de 0 à 255 et a de 0 à 1</li>
	     * 			<li>hsv : propriétés h de 0 à 360, s de 0 à 100, v de 0 à 100</li>
	     *			<li>hsl : propriétés h de 0 à 360, s de 0 à 100, l de 0 à 100</li>
	     * 			<li>cmyk : propriétés c, m, y, k de 0 à 100</li>
	     * 		</ul>
	     * </li>
	     * </ul>
	     * @returns {Color}
	     */
	
	    function Color(arg) {
	
	        if (typeof arg == 'string') this.parse(arg);else if (arguments.length >= 3) {
	            this.r = arguments[0];
	            this.g = arguments[1];
	            this.b = arguments[2];
	            if (arguments[3] != null) this.a = arguments[3];
	        } else if (arg) {
	
	            if ('r' in arg && 'g' in arg && 'b' in arg) {
	                this.r = arg.r;
	                this.g = arg.g;
	                this.b = arg.b;
	                if ('a' in arg) {
	                    this.a = arg.a;
	                }
	            } else if ('h' in arg && 's' in arg && 'v' in arg) {
	                return new Color(Color.hsv2rgb(arg.h, arg.s, arg.v));
	            } else if ('h' in arg && 's' in arg && 'l' in arg) {
	                return new Color(Color.hsl2rgb(arg.h, arg.s, arg.l));
	            } else if ('c' in arg && 'm' in arg && 'y' in arg && 'k' in arg) {
	                return new Color(Color.cmyk2rgb(arg.c, arg.m, arg.y, arg.k));
	            } else throw new Error(arg + " : argument incorrect");
	        }
	    }
	
	    //plus de méthodes disponibles sur https://github.com/harthur/color/blob/master/color.js
	
	    Color.prototype = {
	
	        constructor: Color,
	
	        /**
	         * composante rouge 0 à 255
	         */
	        r: null,
	        /**
	         * composante verte 0 à 255
	         */
	        g: null,
	        /**
	         * composante bleue 0 à 255
	         */
	        b: null,
	        /**
	         * composante opacité 0 à 1
	         */
	        a: 1,
	
	        /**
	         * définit les composantes r,g,b,a en fonction de la chaîne de caractères passée en argument
	         * @param {String} str chaînes autorisées :
	         * <ul>
	         * <li>rgba : "rgba(0,0,0,0.5)"</li>
	         * <li>rgb : "rgb(0,0,0)"</li>
	         * <li>hexa sur 3 ou 6 chiffres : "#000", "#000000"</li>
	         * <li>couleur html : "blue"</li>
	         * </ul>
	         * @returns {Color}
	         * @see Color.htmlCodes
	         */
	        parse: function parse(str) {
	
	            var string = str.replace(/\s/g, ''),
	                reg;
	
	            //RGBA
	            reg = /^rgba\(([0-9]{1,3}),([0-9]{1,3}),([0-9]{1,3}),([0-9]?\.?[0-9]?)\)$/.exec(string);
	
	            if (reg) {
	
	                this.r = reg[1];
	                this.g = reg[2];
	                this.b = reg[3];
	                this.a = reg[4];
	            } else {
	
	                //RGB
	                reg = /^rgb\(([0-9]{1,3}),([0-9]{1,3}),([0-9]{1,3})\)$/.exec(string);
	
	                if (reg) {
	
	                    this.r = reg[1];
	                    this.g = reg[2];
	                    this.b = reg[3];
	                } else {
	
	                    //hexa sur 3 caractères
	                    reg = /^#?([0-9A-F]{1})([0-9A-F]{1})([0-9A-F]{1})$/i.exec(string);
	
	                    if (reg) {
	
	                        this.r = parseInt(reg[1] + reg[1], 16);
	                        this.g = parseInt(reg[2] + reg[2], 16);
	                        this.b = parseInt(reg[3] + reg[3], 16);
	                    } else {
	
	                        //hexa sur 6 caractères
	                        reg = /^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i.exec(string);
	
	                        if (reg) {
	                            this.r = parseInt(reg[1], 16);
	                            this.g = parseInt(reg[2], 16);
	                            this.b = parseInt(reg[3], 16);
	                        } else {
	
	                            //nom de la couleur
	                            reg = /^\w{3,}$/.exec(string);
	
	                            if (reg) {
	
	                                string = Color.htmlCodes[string.toLowerCase()];
	
	                                if (string) {
	                                    string = string.split(',');
	                                    this.r = string[0];
	                                    this.g = string[1];
	                                    this.b = string[2];
	                                }
	                            }
	
	                            if (!reg || !string) throw new Error("Impossible de parser la chaîne : " + str);
	                        }
	                    }
	                }
	            }
	
	            return this;
	        },
	
	        /**
	         * Attribue des nombres aléatoires aux composantes r,g et b de la couleur.
	         * @returns {Color}
	         */
	        random: function random() {
	
	            this.r = rand(0, 255);
	            this.g = rand(0, 255);
	            this.b = rand(0, 255);
	
	            return this;
	        },
	
	        /**
	         * Renvoie un objet avec les propriétés r,g,b,a
	         * @returns {Object}
	         */
	        toRGBA: function toRGBA() {
	            return { r: this.r, g: this.g, b: this.b, a: this.a };
	        },
	
	        /**
	         * Renvoie un objet avec les propriétés r,g,b
	         * @returns {Object}
	         */
	        toRGB: function toRGB() {
	            return { r: this.r, g: this.g, b: this.b };
	        },
	
	        /**
	         * Renvoie un objet avec les propriétés h,s,v (teinte, saturation, valeur)
	         * @returns {Object}
	         */
	        toHSV: function toHSV() {
	            return Color.rgb2hsv(this.r, this.g, this.b);
	        },
	
	        /**
	         * Renvoie un objet avec les propriétés h,s,l (teinte, saturation, lumière)
	         * @returns {Object}
	         */
	        toHSL: function toHSL() {
	            var hsv = Color.rgb2hsv(this.r, this.g, this.b);
	            return Color.hsv2hsl(hsv.h, hsv.s, hsv.v);
	        },
	
	        /**
	         * Renvoie la chaîne hexadecimale sur 6 chiffres (sans le #)
	         * @returns {String}
	         */
	        toHEX: function toHEX() {
	            return Color.rgb2hex(this.r, this.g, this.b);
	        },
	
	        /**
	         * Renvoie un objet avec les composantes cyan,magenta,jaune,noir
	         * @returns {Object}
	         */
	        toCMYK: function toCMYK() {
	            return Color.rgb2cmyk(this.r, this.g, this.b);
	        },
	
	        /**
	         * Convertit la couleur en chaîne
	         * @param {String} format rgb,rgba,hex,name (rgb par défaut)
	         * @returns {String}
	         */
	        toString: function toString(format) {
	
	            if (this.r == null || this.g == null || this.b == null) {
	                return null;
	            }
	
	            this.r = Math.round(this.r);
	            this.g = Math.round(this.g);
	            this.b = Math.round(this.b);
	
	            format = format && format.toLowerCase();
	
	            if (!format || format === 'rgb') {
	                return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
	            } else if (format === 'rgba') {
	                return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')';
	            } else if (format && format === 'hex') {
	                return '#' + this.toHEX();
	            } else if (format && format === 'name') {
	
	                var codes = Color.htmlCodes,
	                    rgb;
	
	                for (var n in codes) {
	                    if (codes.hasOwnProperty(n)) {
	                        rgb = codes[n].split(/,/);
	                        if (this.r == rgb[0] && this.g == rgb[1] && this.b == rgb[2]) {
	                            return n;
	                        }
	                    }
	                }
	
	                return null;
	            }
	
	            return null;
	        },
	        /**
	         * Renvoie le brillant de la couleur (niveau de gris)
	         * @link http://www.w3.org/TR/AERT#color-contrast
	         * @returns {Number} 0 à 255
	         */
	        brightness: function brightness() {
	            return (this.r * 299 + this.g * 587 + this.b * 114) / 1000;
	        },
	
	        /**
	         * Renvoie la luminosité relative de la couleur
	         * @link http://www.w3.org/TR/WCAG20/#relativeluminancedef
	         */
	        luminosity: function luminosity() {
	
	            var lum = [],
	                composantes = ['r', 'g', 'b'],
	                i,
	                chan;
	
	            for (i = 0; i < 3; i++) {
	                chan = this[composantes[i]] / 255;
	                lum[i] = chan <= 0.03928 ? chan / 12.92 : Math.pow((chan + 0.055) / 1.055, 2.4);
	            }
	
	            return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	        },
	        /**
	         * Renvoie la couleur équivalente en niveau de gris
	         * @returns {Color} nouvelle instance
	         */
	        grayScale: function grayScale() {
	
	            var brightness = this.brightness();
	
	            return new Color({
	                r: brightness,
	                g: brightness,
	                b: brightness
	            });
	        },
	
	        /**
	         * Renvoie la couleur éclaircie d'une valeur donnée
	         * @param val valeur de l'éclaircissement à ajouter (négatif pour assombrir la couleur). La valeur de luminosité est comprise
	         * entre 0 et 100.
	         * @returns {Color}
	         */
	        lighten: function lighten(val) {
	
	            var hsl = this.toHSL();
	            hsl.l = clip(hsl.l + parseInt(val, 10), 0, 100);
	            return new Color(hsl);
	        },
	
	        rotate: function rotate(deg) {
	
	            var hsv = this.toHSV();
	            hsv.h = (hsv.h + deg) % 360;
	            if (hsv.h < 0) hsv.h += 360;
	            return new Color(hsv);
	        },
	
	        /**
	         * Renvoie la différence avec une autre couleur
	         * @param color objet Color ou chaîne à parser
	         * @returns {Number}
	         * @link http://www.w3.org/TR/AERT#color-contrast
	         */
	        difference: function difference(color) {
	            color = new Color(color);
	            return Math.max(this.r, color.r) - Math.min(this.r, color.r) + (Math.max(this.g, color.g) - Math.min(this.g, color.g)) + (Math.max(this.b, color.b) - Math.min(this.b, color.b));
	        },
	
	        /**
	         * Détermine si la couleur assure une bonne visibilité par rapport à la couleur passée en argument. 
	         * @param color objet Color ou chaîne à parser
	         * @returns {Number}
	         * @link http://www.w3.org/TR/AERT#color-contrast
	         */
	        isGoodVisibility: function isGoodVisibility(color) {
	            color = new Color(color);
	            return Math.abs(this.brightness() - color.brightness()) > 125 && this.difference(color) > 500;
	        },
	
	        /**
	         * Indique si la couleur est un niveau de gris
	         */
	        isGray: function isGray() {
	            return this.r == this.g == this.b;
	        },
	
	        /**
	         * Renvoie la couleur complémentaire
	         * @returns {Color} nouvelle instance
	         */
	        complementary: function complementary() {
	
	            var hsv = this.toHSV();
	            hsv.s /= 100;
	            hsv.v /= 100;
	
	            return new Color({
	                h: hsv.h + (hsv.h >= 180 ? -180 : 180),
	                s: hsv.v * hsv.s / (hsv.v * (hsv.s - 1) + 1) * 100,
	                v: (hsv.v * (hsv.s - 1) + 1) * 100
	            });
	        }
	    };
	
	    function rand(min, max) {
	        return Math.floor(Math.random() * (max - min + 1)) + min;
	    }
	
	    function clip(nb, min, max) {
	        return nb < min ? min : nb > max ? max : nb;
	    }
	
	    /**
	     * Liste des couleurs html prédéfinies
	     */
	    Color.htmlCodes = { 'aliceblue': '240,248,255', 'antiquewhite': '250,235,215', 'aqua': '0,255,255', 'aquamarine': '127,255,212', 'azure': '240,255,255', 'beige': '245,245,220', 'bisque': '255,228,196', 'black': '0,0,0', 'blanchedalmond': '255,235,205', 'blue': '0,0,255', 'blueviolet': '138,43,226', 'brown': '165,42,42', 'burlywood': '222,184,135', 'cadetblue': '95,158,160', 'chartreuse': '127,255,0', 'chocolate': '210,105,30', 'coral': '255,127,80', 'cornflowerblue': '100,149,237', 'cornsilk': '255,248,220', 'crimson': '220,20,60', 'cyan': '0,255,255', 'darkblue': '0,0,139', 'darkcyan': '0,139,139', 'darkgoldenrod': '184,134,11', 'darkgray': '169,169,169', 'darkgrey': '169,169,169', 'darkgreen': '0,100,0', 'darkkhaki': '189,183,107', 'darkmagenta': '139,0,139', 'darkolivegreen': '85,107,47', 'darkorange': '255,140,0', 'darkorchid': '153,50,204', 'darkred': '139,0,0', 'darksalmon': '233,150,122', 'darkseagreen': '143,188,143', 'darkslateblue': '72,61,139', 'darkslategray': '47,79,79', 'darkslategrey': '47,79,79', 'darkturquoise': '0,206,209', 'darkviolet': '148,0,211', 'deeppink': '255,20,147', 'deepskyblue': '0,191,255', 'dimgray': '105,105,105', 'dimgrey': '105,105,105', 'dodgerblue': '30,144,255', 'firebrick': '178,34,34', 'floralwhite': '255,250,240', 'forestgreen': '34,139,34', 'fuchsia': '255,0,255', 'gainsboro': '220,220,220', 'ghostwhite': '248,248,255', 'gold': '255,215,0', 'goldenrod': '218,165,32', 'gray': '128,128,128', 'grey': '128,128,128', 'green': '0,128,0', 'greenyellow': '173,255,47', 'honeydew': '240,255,240', 'hotpink': '255,105,180', 'indianred ': '205,92,92', 'indigo ': '75,0,130', 'ivory': '255,255,240', 'khaki': '240,230,140', 'lavender': '230,230,250', 'lavenderblush': '255,240,245', 'lawngreen': '124,252,0', 'lemonchiffon': '255,250,205', 'lightblue': '173,216,230', 'lightcoral': '240,128,128', 'lightcyan': '224,255,255', 'lightgoldenrodyellow': '250,250,210', 'lightgray': '211,211,211', 'lightgrey': '211,211,211', 'lightgreen': '144,238,144', 'lightpink': '255,182,193', 'lightsalmon': '255,160,122', 'lightseagreen': '32,178,170', 'lightskyblue': '135,206,250', 'lightslategray': '119,136,153', 'lightslategrey': '119,136,153', 'lightsteelblue': '176,196,222', 'lightyellow': '255,255,224', 'lime': '0,255,0', 'limegreen': '50,205,50', 'linen': '250,240,230', 'magenta': '255,0,255', 'maroon': '128,0,0', 'mediumaquamarine': '102,205,170', 'mediumblue': '0,0,205', 'mediumorchid': '186,85,211', 'mediumpurple': '147,112,219', 'mediumseagreen': '60,179,113', 'mediumslateblue': '123,104,238', 'mediumspringgreen': '0,250,154', 'mediumturquoise': '72,209,204', 'mediumvioletred': '199,21,133', 'midnightblue': '25,25,112', 'mintcream': '245,255,250', 'mistyrose': '255,228,225', 'moccasin': '255,228,181', 'navajowhite': '255,222,173', 'navy': '0,0,128', 'oldlace': '253,245,230', 'olive': '128,128,0', 'olivedrab': '107,142,35', 'orange': '255,165,0', 'orangered': '255,69,0', 'orchid': '218,112,214', 'palegoldenrod': '238,232,170', 'palegreen': '152,251,152', 'paleturquoise': '175,238,238', 'palevioletred': '219,112,147', 'papayawhip': '255,239,213', 'peachpuff': '255,218,185', 'peru': '205,133,63', 'pink': '255,192,203', 'plum': '221,160,221', 'powderblue': '176,224,230', 'purple': '128,0,128', 'red': '255,0,0', 'rosybrown': '188,143,143', 'royalblue': '65,105,225', 'saddlebrown': '139,69,19', 'salmon': '250,128,114', 'sandybrown': '244,164,96', 'seagreen': '46,139,87', 'seashell': '255,245,238', 'sienna': '160,82,45', 'silver': '192,192,192', 'skyblue': '135,206,235', 'slateblue': '106,90,205', 'slategray': '112,128,144', 'slategrey': '112,128,144', 'snow': '255,250,250', 'springgreen': '0,255,127', 'steelblue': '70,130,180', 'tan': '210,180,140', 'teal': '0,128,128', 'thistle': '216,191,216', 'tomato': '255,99,71', 'turquoise': '64,224,208', 'violet': '238,130,238', 'wheat': '245,222,179', 'white': '255,255,255', 'whitesmoke': '245,245,245', 'yellow': '255,255,0', 'yellowgreen': '154,205,50' };
	
	    /**
	     * Affiche la liste des couleurs html prédéfinies
	     */
	    Color.showHTMLColors = function () {
	
	        if (typeof document === "undefined") throw new Error("Cette méthode n'est valable que dans le contexte d'un navigateur");
	
	        var div;
	
	        for (var n in Color.htmlCodes) {
	
	            div = document.createElement('div');
	            div.style.backgroundColor = n;
	            div.textContent = n;
	            document.body.appendChild(div);
	        }
	    };
	
	    /**
	     * Conversion rvb en hexadecimal
	     * @param r rouge (0 à 255)
	     * @param g vert (0 à 255)
	     * @param b bleu (0 à 255)
	     * @returns {String}
	     */
	    Color.rgb2hex = function (r, g, b) {
	        return (0x1000000 | b | g << 8 | r << 16).toString(16).slice(1);
	    };
	
	    /**
	     * Conversion hexadecimal en rvb
	     * @param hex
	     * @returns {Object} avec les propriétés r,g,b (0 à 255)
	     */
	    Color.hex2rgb = function (hex) {
	        return { r: parseInt(hex.substr(0, 2), 16), g: parseInt(hex.substr(2, 2), 16), b: parseInt(hex.substr(4, 2), 16) };
	    };
	
	    /**
	     * Conversion hsv en rgb
	     * @param h teinte (0 à 360)
	     * @param s saturation (0 à 100)
	     * @param v valeur (0 à 100)
	     * @returns {Object} avec les propriétés r,g,b (0 à 255)
	     */
	    Color.hsv2rgb = function (h, s, v) {
	
	        var r, g, b, i, f, p, q;
	
	        h /= 360;
	        s /= 100;
	        v /= 100;
	
	        if (v === 0) r = g = b = 0;else {
	
	            i = Math.floor(h * 6);
	            f = h * 6 - i;
	            p = v * (1 - s);
	            q = v * (1 - s * f);
	            h = v * (1 - s * (1 - f));
	
	            switch (i) {
	                case 1:
	                    r = q;g = v;b = p;break;
	                case 2:
	                    r = p;g = v;b = h;break;
	                case 3:
	                    r = p;g = q;b = v;break;
	                case 4:
	                    r = h;g = p;b = v;break;
	                case 5:
	                    r = v;g = p;b = q;break;
	                case 6:case 0:
	                    r = v;g = h;b = p;break;
	            }
	        }
	
	        return {
	            'r': Math.round(r * 255),
	            'g': Math.round(g * 255),
	            'b': Math.round(b * 255)
	        };
	    };
	
	    /**
	     * Conversion rgb en hsv
	     * @param r rouge (0 à 255)
	     * @param g vert (0 à 255)
	     * @param b bleu (0 à 255)
	     * @returns {Object} avec les propriétés h (0 à 360), s (0 à 100), v  (0 à 100) 
	     */
	    Color.rgb2hsv = function (r, g, b) {
	
	        r /= 255;g /= 255;b /= 255;
	
	        var max = Math.max(r, g, b),
	            min = Math.min(r, g, b),
	            h,
	            s,
	            v = max,
	            delta = max - min;
	
	        if (max == min) h = s = 0;else {
	
	            s = delta / max;
	
	            if (r == max) h = (g - b) / delta;else if (g == max) h = 2 + (b - r) / delta;else h = 4 + (r - g) / delta;
	
	            h *= 60;
	            h = h % 360;
	            if (h < 0) h += 360;
	        }
	
	        return {
	            h: Math.round(h),
	            s: Math.round(s * 100),
	            v: Math.round(v * 100)
	        };
	    };
	
	    /**
	     * Conversion rgb en cmyk
	     * @param r rouge (0 à 255)
	     * @param g vert (0 à 255)
	     * @param b bleu (0 à 255)
	     * @returns {Object} avec les propriétés c, m ,y, k (de 0 à 100) 
	     */
	    Color.rgb2cmyk = function (r, g, b) {
	
	        var c = 1 - r / 255,
	            m = 1 - g / 255,
	            y = 1 - b / 255,
	            k = 1;
	
	        if (c < k) k = c;
	        if (m < k) k = m;
	        if (y < k) k = y;
	
	        //noir
	        if (k == 1) c = m = y = 0;else {
	            c = (c - k) / (1 - k);
	            m = (m - k) / (1 - k);
	            y = (y - k) / (1 - k);
	        }
	
	        return {
	            c: Math.round(c * 100),
	            m: Math.round(m * 100),
	            y: Math.round(y * 100),
	            k: Math.round(k * 100)
	        };
	    };
	
	    /**
	     * Conversion cmyk en rgb
	     * @param c cyan (0 à 100)
	     * @param m magenta (0 à 100)
	     * @param y jaune (0 à 100)
	     * @param y noir (0 à 100)
	     * @returns {Object} avec les propriétés r, g, b (de 0 à 255) 
	     */
	    Color.cmyk2rgb = function (c, m, y, k) {
	
	        c /= 100;
	        m /= 100;
	        y /= 100;
	        k /= 100;
	
	        c = c * (1 - k) + k;
	        m = m * (1 - k) + k;
	        y = y * (1 - k) + k;
	
	        return {
	            r: Math.round((1 - c) * 255),
	            g: Math.round((1 - m) * 255),
	            b: Math.round((1 - y) * 255)
	        };
	    };
	
	    /**
	     * Conversion hsv en hsl
	     * @param h teinte (0 à 360)
	     * @param s saturation (0 à 100)
	     * @param v valeur (0 à 100)
	     * @returns {Object} avec les propriétés h (0 à 360), s (0 à 100), l  (0 à 100)
	     */
	    Color.hsv2hsl = function (h, s, v) {
	
	        s /= 100;
	        v /= 100;
	
	        var l = (2 - s) * v,
	            sl = s * v;
	
	        sl /= l <= 1 ? l : 2 - l;
	        l /= 2;
	
	        return { h: h, s: sl * 100, l: l * 100 };
	    };
	
	    /**
	     * Conversion hsl en rgb
	     * @param h teinte (0 à 360)
	     * @param s saturation (0 à 100)
	     * @param l lumière (0 à 100)
	     * @returns {Object} avec les propriétés r, g, b (de 0 à 255)
	     */
	    Color.hsl2rgb = function (h, s, l) {
	
	        var hsv = Color.hsl2hsv(h, s, l);
	        return Color.hsv2rgb(hsv.h, hsv.s, hsv.v);
	    };
	
	    /**
	     * Conversion hsl en hsv
	     * @param h teinte (0 à 360)
	     * @param s saturation (0 à 100)
	     * @param l lumière (0 à 100)
	     * @returns {Object} avec les propriétés h (0 à 360), s (0 à 100), v (0 à 100)
	     */
	    Color.hsl2hsv = function (h, s, l) {
	
	        s /= 100;
	        l /= 100;
	
	        var sv, v;
	
	        l *= 2;
	        s *= l <= 1 ? l : 2 - l;
	        v = (l + s) / 2;
	        sv = 2 * s / (l + s);
	
	        return { h: h, s: sv * 100, v: v * 100 };
	    };
	
	    /**
	     * Renvoie une couleur au hasard sous forme de chaîne de caractères
	     */
	    Color.random = function () {
	        return new Color().random().toString();
	    };
	
	    if (typeof JSYG != "undefined") JSYG.Color = Color;
	
	    if (( false ? 'undefined' : _typeof(module)) === "object" && _typeof(module.exports) === "object") module.exports = Color;else if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	        return Color;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof JSYG == "undefined") this.Color = Color;
	}).call(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(241)(module)))

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(512);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(449)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./JSYG.TextEditor.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./JSYG.TextEditor.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(388)();
	// imports
	
	
	// module
	exports.push([module.id, "svg g.textBox path {\r\tfill:#bbb;\r\tfill-opacity:0.1;\r\tstroke:black;\r\tstroke-width:0.5;\r\tstroke-dasharray:4,4;\r}\rsvg g.textBox rect.textSelection {\r\tfill:orange;\r\tfill-opacity:0.5;\r}\rsvg g.textBox line.cursor {\r\tfill:none;\r\tstroke:black;\r\tstroke-width:1;\r}", ""]);
	
	// exports


/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(514);
	__webpack_require__(519);

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	/*jshint forin:false, eqnull:true*/
	/* globals JSYG*/
	
	(function (factory) {
	
	    if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(481), __webpack_require__(491), __webpack_require__(515), __webpack_require__(517)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof JSYG != "undefined") {
	        if (JSYG.Resizable && typeof Cookies != "undefined" && typeof jQuery != "undefined" && jQuery.fn.mousewheel) factory(JSYG, JSYG.Resizable, Cookies);else throw new Error("Dependency is missing");
	    } else throw new Error("JSYG is needed");
	})(function (JSYG, Resizable, cookies) {
	
	    "use strict";
	
	    /**
	     * liste des plugins associés au zoomAndPan
	     */
	
	    var plugins = ['mouseWheelZoom', 'marqueeZoom', 'resizable', 'mousePan'];
	
	    /**
	     * <strong>nécessite le module ZoomAndPan</strong><br/><br/>
	     * Gestion du zoom et panoramique d'un canvas SVG.<br/><br/>
	     * @param arg argument JSYG référence au canvas SVG
	     * @param opt optionnel, objet définissant les propriétés. S'il est précisé, le module sera implicitement activé. Si les modules ("mouseWheelZoom",
	     * "marqueeZoom","resizable","mousePan") sont définis à true, il seront activés avec les options par défaut.
	     * @example <pre>var zap = new ZoomAndPan("svg");
	     * zap.overflow = "auto";
	     * zap.enable();
	     * zap.mouseWheelZoom.key = "ctrl";
	     * zap.mouseWheelZoom.enable();
	     * zap.mousePan.enable();
	     * 
	     * //Equivalent à
	     * new ZoomAndPan("svg",{
	     *    overflow:"auto",
	     *    mouseWheelZoom:{key:"ctrl"},
	     *    mousePan:true
	     * });
	     * </pre>
	     * @returns {ZoomAndPan}
	     */
	    function ZoomAndPan(arg, opt) {
	        /**
	         * Gestion du zoom par la molette de la souris
	         */
	        this.mouseWheelZoom = new MouseWheelZoom(this);
	        /**
	         * Gestion du zoom par tracé d'un cadre
	         */
	        this.marqueeZoom = new MarqueeZoom(this);
	        /**
	         * Gestion de la taille du canvas SVG
	         */
	        this.resizable = new ZapResizable(this);
	        /**
	         * déplacement dans le canvas avec la souris
	         */
	        this.mousePan = new MousePan(this);
	        /**
	         * gestion du cookie pour mémoriser zoom et position
	         */
	        this.cookie = new Cookie(this);
	        /**
	         * Element g permettant de gérer le zoom
	         */
	        this.innerFrame = new JSYG('<g>')[0];
	        /**
	         * Element div permettant de gérer les ascenceurs (si overflow!="hidden")
	         */
	        this.outerFrame = new JSYG('<div>')[0];
	
	        if (arg) this.setNode(arg);
	        if (opt) this.enable(opt);
	    }
	
	    ZoomAndPan.prototype = new JSYG.StdConstruct();
	
	    ZoomAndPan.prototype.constructor = ZoomAndPan;
	
	    /**
	     * définitions des options
	     * @param options
	     * @returns {ZoomAndPan}
	     */
	    ZoomAndPan.prototype.set = function (options) {
	
	        for (var n in options) {
	            if (options.hasOwnProperty(n) && n in this) {
	                if (plugins.indexOf(n) !== -1) {
	                    this[n].set(options[n]);
	                } else {
	                    this[n] = options[n];
	                }
	            }
	        }
	
	        return this;
	    };
	
	    /**
	     * définition du canvas SVG
	     * @param arg argument JSYG
	     */
	    ZoomAndPan.prototype.setNode = function (arg) {
	
	        var enabled = this.enabled,
	            jNode = new JSYG(arg);
	
	        if (enabled) this.disable();
	
	        if (this.node) new JSYG(this.node).removeData('zoomandpan');
	
	        this.node = jNode[0];
	
	        jNode.data('zoomandpan', {});
	
	        if (enabled) this.enable();
	    };
	
	    /**
	     * module actif ou non
	     */
	    ZoomAndPan.prototype.enabled = false;
	    /**
	     * Gestion du contenu dépassant du canvas de visualisation
	     * 'hidden' ou 'auto' ou 'scroll' (scroll-x,scroll-y)
	     */
	    ZoomAndPan.prototype.overflow = 'hidden';
	    /**
	     * conteneur (g) qui gère le zoom et la position du contenu
	     */
	    ZoomAndPan.prototype.innerFrame = null;
	    /**
	     * conteneur (div) auquel est attaché le canvas SVG (si overflow!='hidden').
	     * Cela permet de gérer des ascenceurs, qui n'existent pas en SVG.
	     */
	    ZoomAndPan.prototype.outerFrame = null;
	    /**
	     * effet d'animation ou non pour le zoom et le déplacement
	     * Attention, cela nécessite une bonne carte graphique
	     */
	    ZoomAndPan.prototype.animate = false;
	    /**
	     * Options supplémentaires d'animation
	     */
	    ZoomAndPan.prototype.animateOptions = null;
	    /**
	     * Echelle minimale. Si = "canvas", l'échelle minimale correspond à la taille du canvas (en tenant compte des bornes définies
	     * par la propriétés bounds ou les propriétés minLeft,maxRight,minTop,maxBottom).
	     */
	    ZoomAndPan.prototype.scaleMin = "canvas";
	    /**
	     * Echelle maximale. Si = "canvas", l'échelle minimale correspond à la taille du canvas (en tenant compte des bornes définies
	     * par la propriétés bounds ou les propriétés minLeft,maxRight,minTop,maxBottom).
	     */
	    ZoomAndPan.prototype.scaleMax = null;
	    /**
	     * Abcisse minimale au delà de laquelle on ne peut plus naviguer
	     */
	    ZoomAndPan.prototype.minLeft = null;
	    /**
	     * Abcisse maximale au delà de laquelle on ne peut plus naviguer
	     */
	    ZoomAndPan.prototype.maxRight = null;
	    /**
	     * Ordonnée minimale au delà de laquelle on ne peut plus naviguer
	     */
	    ZoomAndPan.prototype.minTop = null;
	    /**
	     * Ordonnée maximale au delà de laquelle on ne peut plus naviguer
	     */
	    ZoomAndPan.prototype.maxBottom = null;
	    /**
	     * permet de définir les abcisses et ordonnées extrêmes de navigation à x pixels du bord du contenu
	     * (si la valeur est positive, on peut aller au delà du contenu).
	     */
	    ZoomAndPan.prototype.bounds = null;
	    /**
	     * largeur minimale du canvas
	     */
	    ZoomAndPan.prototype.minWidth = 5;
	    /**
	     * hauteur minimale du canvas
	     */
	    ZoomAndPan.prototype.minHeight = 5;
	    /**
	     * largeur maximale du canvas
	     */
	    ZoomAndPan.prototype.maxWidth = 3000;
	    /**
	     * hauteur maximale du canvas
	     */
	    ZoomAndPan.prototype.maxHeight = 3000;
	    /**
	     * Fonction(s) à exécuter à tout changment de zoom
	     */
	    ZoomAndPan.prototype.onscale = null;
	    /**
	     * Fonction(s) à exécuter à tout changment de position
	     */
	    ZoomAndPan.prototype.ontranslate = null;
	    /**
	     * Fonction(s) à exécuter à tout changment de taille du canvas
	     */
	    ZoomAndPan.prototype.onresize = null;
	    /**
	     * Fonction(s) à exécuter à tout changement
	     */
	    ZoomAndPan.prototype.onchange = null;
	    /**
	     * Fonction(s) à exécuter pendant les animations
	     */
	    ZoomAndPan.prototype.onanimate = null;
	    /**
	     * Renvoie la taille du contenu de la navigation (contenu + bornes définies)
	     * @param ctm optionnel, si true renvoie la taille en tenant compte de la matrice de transformation
	     */
	    ZoomAndPan.prototype._getBounds = function (ctm) {
	
	        var initDim = new JSYG(this.innerFrame).getDim();
	
	        var bounds = {
	            left: this.minLeft == null ? initDim.x - this.bounds : this.minLeft,
	            right: this.maxRight == null ? initDim.x + initDim.width + this.bounds : this.maxRight,
	            top: this.minTop == null ? initDim.y - this.bounds : this.minTop,
	            bottom: this.maxBottom == null ? initDim.y + initDim.height + this.bounds : this.maxBottom
	        };
	
	        if (ctm) {
	
	            var mtx = new JSYG(this.innerFrame).getMtx(),
	                hg = new JSYG.Vect(bounds.left, bounds.top).mtx(mtx),
	                bd = new JSYG.Vect(bounds.right, bounds.bottom).mtx(mtx);
	
	            bounds.left = hg.x;
	            bounds.top = hg.y;
	            bounds.right = bd.x;
	            bounds.bottom = bd.y;
	        }
	
	        bounds.width = bounds.right - bounds.left;
	        bounds.height = bounds.bottom - bounds.top;
	
	        return bounds;
	    };
	
	    /**
	     * Active la gestion du zoom et panoramique.
	     * Cette méthode insère un conteneur (propriété innerFrame) à la racine du canvas
	     * et tout le contenu y est déplacé. Les éléments créés ensuite doivent donc etre
	     * attachés à "innerFrame" et non à l'élément svg lui-meme (sauf si cela est voulu),
	     * sinon ils ne suivront pas le zoom et panoramique avec le reste.
	     * Si la propriété "overflow" est différente de "hidden", un conteneur (propriété
	     * outerFrame) div est inséré et le canvas y est attaché afin de gérer le scroll
	     * (les ascenseurs n'existent pas en SVG). 
	     * @param opt optionnel, objet définissant les options
	     * @returns {ZoomAndPan}
	     */
	    ZoomAndPan.prototype.enable = function (opt) {
	
	        this.disable();
	
	        if (opt) this.set(opt);
	
	        if (['auto', 'hidden'].indexOf(this.overflow) === -1 && this.overflow.indexOf('scroll') === -1) {
	            throw new Error(this.overflow + ' : valeur incorrecte pour la propriété overflow');
	        }
	
	        if (!this.node) throw new Error("Il faut d'abord définir la propriété node par la méthode setNode");
	
	        var jSVG = new JSYG(this.node),
	            backup = jSVG.data('zoomandpan') || {},
	            hidden = this.overflow == "hidden",
	            dim = jSVG.getDim(),
	            width = jSVG.attr("width") || dim.width,
	            height = jSVG.attr("height") || dim.height,
	            that = this,
	            n;
	
	        backup.dimInit = {
	            width: width,
	            height: height
	        };
	
	        ///////////////////////////////////////////////////
	        //INNERFRAME			
	        var viewBox = this.node.viewBox.baseVal,
	            exclude = {
	            tags: ['switch', 'defs'],
	            list: []
	        },
	            child,
	            innerFrame = new JSYG(this.innerFrame).transfOrigin('left', 'top'),
	            mtx = new JSYG.Matrix();
	
	        while (this.node.firstChild) {
	            child = this.node.firstChild;
	            if (exclude.tags.indexOf(child.tagName) !== -1) {
	                this.node.removeChild(child);
	                exclude.list.push(child);
	            } else innerFrame.append(child);
	        }
	
	        jSVG.append(exclude.list).append(innerFrame);
	
	        if (viewBox && viewBox.width && viewBox.height) {
	
	            mtx = mtx.scaleNonUniform(dim.width / viewBox.width, dim.height / viewBox.height);
	        }
	
	        if (hidden && viewBox) mtx = mtx.translate(-viewBox.x, -viewBox.y);
	
	        jSVG.removeAttr('viewBox');
	        backup.viewBoxInit = viewBox;
	
	        innerFrame.setMtx(mtx);
	
	        //////////////////////////////////////////////
	        // OUTERFRAME
	
	        if (!hidden) {
	
	            var outerFrame = new JSYG(this.outerFrame),
	                position = jSVG.css('position'),
	                bounds = this._getBounds("ctm"),
	                origin,
	                left = jSVG.css('left'),
	                top = jSVG.css('top'),
	                margin = jSVG.css('margin');
	
	            outerFrame.css({
	                width: width,
	                height: height,
	                overflow: this.overflow,
	                padding: '0px',
	                margin: margin,
	                display: 'inline-block',
	                left: left,
	                top: top,
	                visibility: jSVG.css('visibility'),
	                position: position === "static" ? "relative" : position,
	                border: jSVG.css('border'),
	                backgroundColor: jSVG.css('backgroundColor')
	            });
	
	            backup.cssInit = {
	                left: left,
	                top: top,
	                margin: margin,
	                position: position
	            };
	
	            jSVG.css({
	                "left": 0,
	                "top": 0,
	                "margin": 0,
	                "position": "absolute",
	                "width": width,
	                "height": height
	            });
	
	            mtx = new JSYG.Matrix().translate(-bounds.left, -bounds.top).multiply(mtx);
	            innerFrame.setMtx(mtx);
	
	            origin = new JSYG.Vect(viewBox && viewBox.x || 0, viewBox && viewBox.y || 0).mtx(mtx);
	
	            outerFrame.replaceAll(this.node).append(this.node).scrollLeft(origin.x).scrollTop(origin.y);
	        }
	
	        function majCanvas() {
	            that.transform(that.transform());
	        }
	
	        if (/%/.test(width)) {
	
	            JSYG(window).on("resize", majCanvas);
	            backup.majCanvas = majCanvas;
	            majCanvas();
	        }
	
	        this.enabled = true;
	
	        if (backup.plugins) {
	            for (n in backup.plugins) {
	                this[n].enable();
	            }
	        }
	
	        if (opt) {
	            for (n in opt) {
	                if (plugins.indexOf(n) !== -1) this[n].enable(opt[n]);
	            }
	        }
	
	        jSVG.data('zoomandpan', backup);
	
	        return this;
	    };
	
	    /**
	     * Désactivation de la gestion du zoom et panoramique
	     * @returns {ZoomAndPan}
	     */
	    ZoomAndPan.prototype.disable = function () {
	
	        if (!this.enabled || !this.node) return this;
	
	        var jSVG = new JSYG(this.node),
	            plugins = {},
	            backup = jSVG.data('zoomandpan') || {},
	            viewBox = backup.viewBoxInit;
	
	        if (this.mouseWheelZoom.enabled) {
	            plugins.mouseWheelZoom = true;this.mouseWheelZoom.disable();
	        }
	        if (this.marqueeZoom.enabled) {
	            plugins.marqueeZoom = true;this.marqueeZoom.disable();
	        }
	        if (this.resizable.enabled) {
	            plugins.resizable = true;this.resizable.disable();
	        }
	        if (this.mousePan.enabled) {
	            plugins.mousePan = true;this.mousePan.disable();
	        }
	
	        backup.plugins = plugins;
	
	        while (this.innerFrame.firstChild) {
	            jSVG.append(this.innerFrame.firstChild);
	        }new JSYG(this.innerFrame).remove();
	
	        if (this.outerFrame.parentNode) {
	            jSVG.replaceAll(this.outerFrame);
	            new JSYG(this.outerFrame).remove();
	        }
	
	        if (viewBox && viewBox.width && viewBox.height) {
	            jSVG.attr('viewBox', viewBox.x + ' ' + viewBox.y + ' ' + viewBox.width + ' ' + viewBox.height);
	        }
	
	        delete backup.viewBoxInit;
	
	        if (backup.cssInit) {
	            jSVG.css(backup.cssInit);
	            delete backup.cssInit;
	        }
	
	        if (backup.dimInit) {
	            jSVG.css(backup.dimInit);
	            delete backup.dimInit;
	        }
	
	        if (backup.majCanvas) {
	            JSYG(window).off("resize", backup.majCanvas);
	        }
	
	        this.enabled = false;
	
	        return this;
	    };
	
	    /**
	     * Ajustement nécessaire du aux ascenceurs
	     * @returns {Number}
	     */
	    ZoomAndPan.prototype._getAdd = function () {
	        return this.overflow == "hidden" ? 0 : this.overflow == "auto" ? 2 : 20;
	    };
	
	    /**
	     * Renvoie (appel sans argument) ou définit la taille du canvas
	     * @param width optionnel, largeur du canvas. Si non défini, largeur proportionnelle à la hauteur définie
	     * @param height optionnel, hauteur du canvas. Si non défini, hauteur proportionnelle à la largeur définie
	     * @param keepViewBox booléen optionnel, si true garde le cadrage après redimensionnement.
	     * @returns {ZoomAndPan} si appelé avec arguments, objet avec les propriétés width et height sinon.
	     */
	    ZoomAndPan.prototype.size = function (width, height, keepViewBox) {
	
	        var hidden = this.overflow == "hidden",
	            canvas = new JSYG(hidden ? this.node : this.outerFrame),
	            innerWidth = canvas.innerWidth(),
	            innerHeight = canvas.innerHeight(),
	            mtx,
	            that = this,
	            keepRatio = width == null || height == null,
	            widthTest,
	            heightTest,
	            animate = this.animate,
	            opt,
	            pt;
	
	        if (width == null && height == null) return { width: innerWidth, height: innerHeight };
	
	        if (JSYG.isPlainObject(width)) {
	            opt = width;
	            keepViewBox = opt.keepViewBox || height;
	            height = opt.height;
	            width = opt.width;
	        }
	
	        if (width == null) width = innerWidth * height / innerHeight;else if (height == null) height = innerHeight * width / innerWidth;
	
	        widthTest = JSYG.clip(width, this.minWidth, this.maxWidth);
	        heightTest = JSYG.clip(height, this.minHeight, this.maxHeight);
	
	        if (keepRatio && widthTest != width) return this.size(widthTest, null, keepViewBox);else width = widthTest;
	
	        if (keepRatio && heightTest != height) return this.size(null, heightTest, keepViewBox);else height = heightTest;
	
	        canvas.setDim({ width: width, height: height });
	
	        mtx = this.transform();
	
	        if (keepViewBox) {
	
	            pt = new JSYG.Vect(0, 0).mtx(mtx.inverse());
	            mtx = mtx.scaleNonUniform(width / innerWidth, height / innerHeight, pt.x, pt.y);
	        }
	
	        this.animate = false;
	
	        this.transform(mtx, function () {
	            that.trigger('resize');
	            that.animate = animate;
	        });
	
	        return this;
	    };
	
	    /**
	     * Applique une transformation au contenu du canvas
	     * @param mtx objet JSYG.Matrix, matrice de transformation à appliquer
	     * @param callback fonction à exécuter à la fin (équivalent à l'évènement onchange)
	     * @returns
	     */
	    ZoomAndPan.prototype.transform = function (mtx, callback) {
	
	        var innerFrame = new JSYG(this.innerFrame),
	            hidden = this.overflow == "hidden",
	            outerFrame = !hidden && new JSYG(this.outerFrame),
	            scrollLeft = outerFrame && outerFrame.scrollLeft(),
	            scrollTop = outerFrame && outerFrame.scrollTop();
	
	        if (mtx == null) {
	            mtx = innerFrame.getMtx();
	            return hidden ? mtx : new JSYG.Matrix().translate(-scrollLeft, -scrollTop).multiply(mtx);
	        }
	
	        var transf = mtx.decompose(),
	            scaleX = transf.scaleX,
	            scaleY = transf.scaleY,
	            translX = transf.translateX,
	            translY = transf.translateY,
	            mtxInv = mtx.inverse(),
	            bounds = this._getBounds();
	
	        if (!hidden) {
	
	            mtx = mtx.translate(scrollLeft, scrollTop).translate(-bounds.left, -bounds.top);
	            mtxInv = mtx.inverse();
	        }
	
	        var options = Object.create(this.animateOptions),
	            that = this,
	            outerDim = this.size(),
	            add = this._getAdd(),
	            jSVG = new JSYG(this.node),
	            centerIn = innerFrame.getCenter(),
	            centerOut = new JSYG.Vect((outerDim.width - add) / 2, (outerDim.height - add) / 2).mtx(mtxInv),
	            hg = new JSYG.Vect(0, 0).mtx(mtxInv),
	            bd = new JSYG.Vect(outerDim.width - add, outerDim.height - add).mtx(mtxInv);
	
	        //le contenu est moins large que le cadre, on centre le contenu
	        if (bounds.width * scaleX + add < outerDim.width) {
	
	            mtx = mtx.translateX(centerOut.x - centerIn.x);
	
	            //on étend le canvas svg à la largeur exterieure
	            if (!hidden) jSVG.css("width", outerDim.width - add);
	        } else {
	
	            if (!hidden) {
	                jSVG.css("width", bounds.width * scaleX);
	                mtx = mtx.translateX(hg.x - bounds.left);
	            } else {
	                //on empêche de sortir du cadre
	                if (hg.x < bounds.left) mtx = mtx.translateX(hg.x - bounds.left);else if (bd.x > bounds.right) mtx = mtx.translateX(bd.x - bounds.right);
	            }
	        }
	
	        //le contenu est moins haut que le cadre, on centre le contenu
	        if (bounds.height * scaleY + add < outerDim.height) {
	
	            mtx = mtx.translateY(centerOut.y - centerIn.y);
	
	            //on étend le canvas svg à la hauteur exterieure
	            if (!hidden) jSVG.css("height", outerDim.height - add);
	        } else {
	
	            if (!hidden) {
	                jSVG.css("height", bounds.height * scaleY);
	                mtx = mtx.translateY(hg.y - bounds.top);
	            } else {
	                //on empeche de sortir du cadre
	                if (hg.y < bounds.top) mtx = mtx.translateY(hg.y - bounds.top);else if (bd.y > bounds.bottom) mtx = mtx.translateY(bd.y - bounds.bottom);
	            }
	        }
	
	        if (!hidden) {
	            transf = mtx.decompose();
	            outerFrame.scrollLeft(Math.round(transf.translateX - translX));
	            outerFrame.scrollTop(Math.round(transf.translateY - translY));
	        }
	
	        if (!this.animate || !hidden) {
	
	            innerFrame.setMtx(mtx);
	            this.trigger('change');
	            if (callback) callback.call(this.node);
	        } else {
	
	            innerFrame.animate(JSYG.extend(options, {
	                to: { mtx: mtx },
	                onanimate: function onanimate() {
	                    that.trigger('animate');
	                },
	                onend: function onend() {
	                    that.trigger('change');
	                    if (callback) callback.call(that.node);
	                }
	            }));
	        }
	
	        return this;
	    };
	
	    /**
	     * Renvoie ou applique l'échelle (si la méthode est appelée avec des arguments).
	     * @param scale optionnel, si défini facteur de l'échelle (multiplie l'échelle courante, ne la remplace pas).
	     * @param originX optionnel, abcisse du point fixe (centre du canvas par défaut)
	     * @param originY optionnel, ordonnee du point fixe (centre du canvas par défaut)
	     * @param callback optionnel, fonction à exécuter une fois le zoom effectué (équivalent à l'évènement onscale)
	     * @returns {Number,ZoomAndPan} l'échelle si la méthode est appelée sans argument, l'objet lui-meme sinon.
	     */
	    ZoomAndPan.prototype.scale = function (scale, originX, originY, callback) {
	
	        var mtx = this.transform(),
	            transf = mtx.decompose();
	
	        if (scale == null) return transf.scaleX;
	
	        var size = this.size(),
	            bounds = this._getBounds(),
	            add = this._getAdd(),
	            scaleTest = mtx.scale(scale).scaleX(),
	            scaleCanvas = Math.min((size.width - add) / bounds.width, (size.height - add) / bounds.height),
	            scaleMin = this.scaleMin == 'canvas' ? scaleCanvas : this.scaleMin,
	            scaleMax = this.scaleMax == 'canvas' ? scaleCanvas : this.scaleMax,
	            origin,
	            that = this;
	
	        if (scaleMin && scaleTest < scaleMin) scale = scaleMin / transf.scaleX;
	        if (scaleMax && scaleTest > scaleMax) scale = scaleMax / transf.scaleX;
	
	        originX = originX != null ? originX : size.width / 2;
	        originY = originY != null ? originY : size.height / 2;
	        origin = new JSYG.Vect(originX, originY).mtx(mtx.inverse());
	
	        mtx = mtx.scale(scale, origin.x, origin.y);
	
	        this.transform(mtx, function () {
	            that.trigger("scale");
	            if (callback) callback.call(that.node);
	        });
	
	        return this;
	    };
	
	    /**
	     * Renvoie ou applique le déplacement dans le canvas (unités initiales).
	     * @example Si l'échelle est de 2, un déplacement horizontal de 1 déplacera visuellement le contenu de 2 pixels.
	     * @param x déplacement horizontal
	     * @param y déplacement vertical
	     * @param callback, optionnel, fonction à exécuter une fois la translation effectuée (équivalent à l'évènement ontranslate)
	     * @returns {ZoomAndPan,JSYG.Vect} un vecteur si appelé sans argument, l'objet lui-meme sinon.
	     */
	    ZoomAndPan.prototype.translate = function (x, y, callback) {
	
	        var mtx = this.transform(),
	            that = this;
	
	        if (x == null && y == null) return new JSYG.Vect(0, 0).mtx(mtx.inverse());
	
	        x *= -1;
	        y *= -1;
	
	        mtx = mtx.translate(x, y);
	
	        this.transform(mtx, function () {
	            that.trigger('translate', that.node);
	            if (callback) callback.call(that.node);
	        });
	
	        return this;
	    };
	
	    /**
	     * déplacement dans le canvas (en pixels écran).
	     * @example Si l'échelle est de 2, un déplacement horizontal de 1 déplacera visuellement le contenu de 1 pixel.
	     * @param x déplacement horizontal
	     * @param y déplacement vertical
	     * @param callback optionnel, fonction à exécuter une fois la translation effectuée (équivalent à l'évènement ontranslate)
	     * @returns {ZoomAndPan}
	     */
	    ZoomAndPan.prototype.screenTranslate = function (x, y, callback) {
	
	        var transf = this.transform().decompose();
	
	        if (x == null && y == null) return new JSYG.Vect(transf.translateX, transf.translateY);
	
	        this.translate(x / transf.scaleX, y / transf.scaleY, callback);
	
	        return this;
	    };
	    /**
	     * Fixe la valeur de l'échelle
	     * @param scale valeur de l'échelle
	     * @param originX optionnel, abcisse du point fixe (centre par défaut)
	     * @param originY optionnel, ordonnée du point fixe (centre par défaut)
	     * @param callback optionnel, fonction à exécuter une fois le zoom effectué (équivalent à l'évènement onscale)
	     * @returns {ZoomAndPan}
	     */
	    ZoomAndPan.prototype.scaleTo = function (scale, originX, originY, callback) {
	
	        this.scale(scale / this.scale(), originX, originY, callback);
	
	        return this;
	    };
	
	    /**
	     * Adapte le contenu à la taille du canvas
	     * @returns {ZoomAndPan}
	     */
	    ZoomAndPan.prototype.fitToCanvas = function () {
	
	        var bounds = this._getBounds("ctm"),
	            outerDim = this.size(),
	            add = this._getAdd(),
	            rapX = (outerDim.width - add) / bounds.width,
	            rapY = (outerDim.height - add) / bounds.height;
	
	        this.scale(Math.min(rapX, rapY));
	
	        return this;
	    };
	
	    /**
	     * Fixe les valeurs de la translation (point supérieur gauche)
	     * @param x abcisse
	     * @param y ordoonée
	     * @param callback optionnel, fonction à exécuter une fois la translation effectuée (équivalent à l'évènement ontranslate)
	     * @returns {ZoomAndPan}
	     */
	    ZoomAndPan.prototype.translateTo = function (x, y, callback) {
	
	        var transl = this.translate();
	        this.translate(x - transl.x, y - transl.y, callback);
	        return this;
	    };
	
	    /**
	     * définit ou fixe la position du centre du canvas (si appelé avec arguments)
	     * @param x abcisse
	     * @param y ordoonée
	     * @param callback optionnel, fonction à exécuter une fois la translation effectuée (équivalent à l'évènement ontranslate)
	     * @returns {ZoomAndPan}
	     */
	    ZoomAndPan.prototype.center = function (x, y, callback) {
	
	        if (x == null && y == null) {
	
	            var size = this.size(),
	                mtx = this.transform();
	
	            return new JSYG.Vect(size.width / 2, size.height / 2).mtx(mtx.inverse());
	        } else {
	
	            var center = this.center();
	
	            this.translate(x - center.x, y - center.y, callback);
	            return this;
	        }
	    };
	
	    Object.defineProperty(ZoomAndPan.prototype, "overflow", {
	
	        get: function get() {
	            return this._overflow || "hidden";
	        },
	
	        set: function set(val) {
	
	            if (['hidden', 'auto', 'scroll'].indexOf(val) === -1) throw new Error(val + " : valeur incorrecte pour la propriété overflow");
	
	            if (val == this._overflow) return;
	
	            var enabled = this.enabled,
	                scale,
	                translate,
	                size;
	
	            if (enabled) {
	
	                scale = this.scale();
	                translate = this.translate();
	                size = this.size();
	                this.disable();
	            }
	
	            this._overflow = val;
	
	            if (enabled) {
	
	                this.enable().scale(scale).translateTo(translate.x, translate.y).size(size.width, size.height);
	            }
	        }
	    });
	
	    /**
	     * Gestion du cookie pour conservation de l'état
	     */
	    function Cookie(zoomAndPanObject) {
	        this.zap = zoomAndPanObject;
	    }
	
	    /**
	     * expiration du cookie:  nombre de jours à partir de la date courante, ou null pour session courante.
	     */
	    Cookie.prototype.expires = null;
	    /**
	     * Lit le cookie et positionne le canvas en conséquence
	     * @returns {Cookie}
	     */
	    Cookie.prototype.read = function () {
	
	        var zap = this.zap,
	            node = zap.node;
	
	        if (!node.id) throw new Error("Il faut définir un id pour la balise SVG pour pouvoir utiliser les cookies");
	
	        var cookie = cookies.get(node.id);
	
	        if (!cookie) return this;
	
	        cookie = cookie.split(';');
	
	        var css = { 'width': cookie[0], 'height': cookie[1] },
	            newmtx = cookie[2],
	            overflow = cookie[3];
	
	        if (overflow != zap.overflow) throw new Error("Overflow property is different than in cookie value.");
	
	        new JSYG(node).css(css);
	
	        new JSYG(zap.innerFrame).css(css).attr('transform', newmtx);
	
	        if (overflow != "hidden" && cookie[4] && cookie[5] && cookie[6] != null && cookie[7] != null) {
	
	            new JSYG(zap.outerFrame).css({ width: cookie[4], height: cookie[5] }).scrollLeft(cookie[6]).scrollTop(cookie[7]);
	        }
	
	        return this;
	    };
	
	    /**
	     * Ecrit un cookie pour mémoriser l'état du canvas SVG
	     * @returns {Cookie}
	     */
	    Cookie.prototype.write = function () {
	
	        var zap = this.zap,
	            node = zap.node;
	
	        if (!node.id) throw new Error("Il faut définir un id pour la balise SVG pour pouvoir utiliser les cookies");
	
	        var jSVG = new JSYG(node),
	            valcookie = "",
	            outerFrame;
	
	        valcookie += parseFloat(jSVG.css('width')) + ';' + parseFloat(jSVG.css('height')) + ';';
	        valcookie += new JSYG(zap.innerFrame).getMtx().toString();
	        valcookie += ';' + zap.overflow;
	
	        if (zap.overflow !== 'hidden') {
	
	            outerFrame = new JSYG(zap.outerFrame);
	            valcookie += ';' + outerFrame.css('width') + ';' + outerFrame.css('height') + ';';
	            valcookie += outerFrame.scrollLeft() + ';' + outerFrame.scrollTop();
	        }
	
	        cookies.set(node.id, valcookie, this.expires ? { expires: this.expires } : undefined);
	
	        return this;
	    };
	
	    /**
	     * Supprime le cookie
	     * @returns {Cookie}
	     */
	    Cookie.prototype.remove = function () {
	
	        cookies.remove(this.zap.node.id);
	        return this;
	    };
	
	    /**
	     * Active le cookie
	     * @returns {Cookie}
	     */
	    Cookie.prototype.enable = function () {
	
	        var zap = this.zap,
	            node = zap.node,
	            unloadFct;
	
	        if (!node.id) throw new Error("Il faut définir un id pour la balise SVG pour pouvoir utiliser les cookies");
	
	        this.disable();
	
	        unloadFct = this.write.bind(this);
	
	        new JSYG(window).on('unload', unloadFct);
	
	        this.disable = function () {
	
	            new JSYG(window).off("unload", unloadFct);
	
	            cookies.remove(node.id);
	
	            this.enabled = false;
	
	            return this;
	        };
	
	        //this.read();
	
	        this.enabled = true;
	
	        return this;
	    };
	
	    /**
	     * Désactive le cookie
	     * @returns {Cookie}
	     */
	    Cookie.prototype.disable = function () {
	        return this;
	    };
	
	    /**
	     * Gestion du zoom par molette de la souris (+ une touche spéciale éventuellement).
	     * Attention, google chrome ne permet pas d'annuler l'action par défaut pour ctrl+molette
	     * @link http://code.google.com/p/chromium/issues/detail?id=111059
	     */
	    function MouseWheelZoom(zoomAndPanObject) {
	        this.zap = zoomAndPanObject;
	    }
	
	    MouseWheelZoom.prototype = new JSYG.StdConstruct();
	
	    MouseWheelZoom.prototype.constructor = MouseWheelZoom;
	    /**
	     * Touche spéciale à maintenir enfoncée pour rendre le zoom actif ("ctrl","shift","alt")
	     */
	    MouseWheelZoom.prototype.key = null;
	    /**
	     * Pas du zoom à chaque coup de molette
	     */
	    MouseWheelZoom.prototype.step = 0.1;
	    /**
	     * Fonction(s) à exécuter avant de zoomer
	     */
	    MouseWheelZoom.prototype.onstart = null;
	    /**
	     * Fonction(s) à exécuter après avoir zoomé
	     */
	    MouseWheelZoom.prototype.onend = null;
	    /**
	     * Module actif ou non
	     */
	    MouseWheelZoom.prototype.enabled = false;
	    /**
	     * Fonction exécutée sur évènement mouseWheel
	     */
	    MouseWheelZoom.prototype.wheel = function (e) {
	
	        var innerFrame = new JSYG(this.zap.innerFrame),
	            scale = 1 + this.step * e.deltaY,
	            animate = this.zap.animate,
	            origin;
	
	        if (animate === true && innerFrame.animate("get", "inProgress")) return;
	
	        e.preventDefault();
	
	        this.trigger('start', this.zap.node, e);
	
	        origin = this.zap.overflow == 'hidden' ? innerFrame.getCursorPos(e).mtx(innerFrame.getMtx('ctm')) : new JSYG(this.zap.outerFrame).getCursorPos(e);
	
	        this.zap.animate = false;
	
	        this.zap.scale(scale, origin.x, origin.y);
	
	        this.zap.animate = animate;
	
	        this.trigger('end', this.zap.node, e);
	    };
	
	    /**
	     * Activation du module
	     * @param opt optionnel, objet définissant les options.
	     * @returns {MouseWheelZoom}
	     */
	    MouseWheelZoom.prototype.enable = function (opt) {
	
	        var that = this,
	            cible = new JSYG(this.zap.overflow === 'hidden' ? this.zap.node : this.zap.outerFrame);
	
	        if (!this.zap.enabled) this.zap.enable();
	
	        this.disable();
	
	        if (opt) this.set(opt);
	
	        this.disable(); //par précaution si plusieurs appels
	
	        function mousewheelFct(e) {
	            if (that.key && !e[that.key] && !e[that.key + 'Key']) return;
	            that.wheel(e);
	        }
	
	        cible.on('mousewheel', mousewheelFct);
	
	        this.disable = function () {
	            cible.off('mousewheel', mousewheelFct);
	            this.enabled = false;
	            return this;
	        };
	
	        this.enabled = true;
	
	        return this;
	    };
	
	    /**
	     * Désactivation du module
	     * @returns {MouseWheelZoom}
	     */
	    MouseWheelZoom.prototype.disable = function () {
	        return this;
	    };
	
	    /**
	     * définition du zoom par tracé d'un rectangle
	     */
	    function MarqueeZoom(zoomAndPanObject) {
	
	        this.zap = zoomAndPanObject;
	
	        /**
	         * Element SVG rect dessinant le tracé
	         */
	        this.container = new JSYG("<rect>")[0];
	    }
	
	    MarqueeZoom.prototype = new JSYG.StdConstruct();
	
	    MarqueeZoom.prototype.constructor = MarqueeZoom;
	    /**
	     * Evenement déclenchant le tracé
	     */
	    MarqueeZoom.prototype.event = 'mousedown';
	    /**
	     * Restriction à un bouton de la souris (1 bouton gauche, 2 bouton du milieu, 3 bouton droit)
	     */
	    MarqueeZoom.prototype.eventWhich = 1;
	    /**
	     * Fonction(s) à exécuter au début du tracé
	     */
	    MarqueeZoom.prototype.onstart = null;
	    /**
	     * Fonction(s) à exécuter pendant le tracé
	     */
	    MarqueeZoom.prototype.ondrag = null;
	    /**
	     * Fonction(s) à exécuter à la fin du tracé
	     */
	    MarqueeZoom.prototype.onend = null;
	    /**
	     * Classe à appliquer au conteneur
	     */
	    MarqueeZoom.prototype.className = 'marqueeZoom';
	    /**
	     * Module actif ou non
	     */
	    MarqueeZoom.prototype.enabled = false;
	
	    /**
	     * Fonction exécutée sur l'évènement event
	     */
	    MarqueeZoom.prototype.start = function (e) {
	
	        var node = this.zap.node,
	            jSVG = new JSYG(node),
	            pos = jSVG.getCursorPos(e),
	            that = this,
	            resize = new Resizable(this.container);
	
	        new JSYG(this.container).addClass(this.className).setDim({
	            x: Math.round(pos.x) - 1,
	            y: Math.round(pos.y) - 1,
	            width: 1,
	            height: 1
	        }).appendTo(node);
	
	        resize.set({
	            keepRatio: false,
	            type: 'attributes',
	            originY: 'top',
	            originX: 'left',
	            cursor: false,
	            inverse: true
	        });
	
	        if (this.onstart) {
	            resize.on('start', function (e) {
	                that.trigger('start', node, e);
	            });
	        }
	        if (this.ondrag) {
	            resize.on('drag', function (e) {
	                that.trigger('draw', node, e);
	            });
	        }
	
	        resize.on('end', function (e) {
	
	            var size = that.zap.size(),
	                dim = new JSYG(this).getDim(),
	                coef = Math.min(size.width / dim.width, size.height / dim.height),
	                mtx = new JSYG(that.zap.innerFrame).getMtx(),
	                pt1 = new JSYG.Vect(dim.x, dim.y).mtx(mtx.inverse()),
	                pt2;
	
	            if (coef < 20) {
	
	                mtx = mtx.scale(coef, pt1.x, pt1.y);
	                pt1 = new JSYG.Vect(0, 0).mtx(mtx.inverse());
	                pt2 = new JSYG.Vect(dim.x, dim.y).mtx(mtx.inverse());
	                mtx = mtx.translate(pt1.x - pt2.x, pt1.y - pt2.y);
	
	                that.zap.transform(mtx);
	                that.trigger("end", node, e);
	            }
	
	            new JSYG(this).remove();
	        });
	
	        resize.start(e);
	    };
	
	    /**
	     * Activation du module
	     * @param opt optionnel, objet définissant les options
	     * @returns {MarqueeZoom}
	     */
	    MarqueeZoom.prototype.enable = function (opt) {
	
	        this.disable(); //par précaution si plusieurs appels
	
	        if (opt) this.set(opt);
	
	        if (!this.zap.enabled) this.zap.enable();
	
	        var that = this;
	
	        function start(e) {
	            if (that.eventWhich && e.which != that.eventWhich) return;
	            that.start(e);
	        }
	
	        new JSYG(this.zap.node).on(this.event, start);
	
	        this.disable = function () {
	            new JSYG(this.zap.node).off(this.event, start);
	            this.enabled = false;
	            return this;
	        };
	
	        this.enabled = true;
	
	        return this;
	    };
	
	    /**
	     * Désactivation du module
	     * @returns {MarqueeZoom}
	     */
	    MarqueeZoom.prototype.disable = function () {
	        return this;
	    };
	
	    /**
	     * Gestion du panoramique (navigation façon googlemaps)
	     */
	    function MousePan(zoomAndPanObject) {
	        this.zap = zoomAndPanObject;
	    }
	
	    MousePan.prototype = new JSYG.StdConstruct();
	
	    MousePan.prototype.constructor = MousePan;
	
	    /**
	     * Evènement déclenchant le panoramique
	     */
	    MousePan.prototype.event = 'mousedown';
	    /**
	     * Restriction à un bouton de la souris (1 bouton gauche, 2 bouton du milieu, 3 bouton droit)
	     */
	    MousePan.prototype.eventWhich = 1;
	    /**
	     * Classe à appliquer quand le module est actif.
	     */
	    MousePan.prototype.className = 'MousePanOpenHand';
	    /**
	     * Classe à appliquer pendant le cliquer/glisser.
	     */
	    MousePan.prototype.classDrag = 'MousePanClosedHand';
	    /**
	     * déplacement horizontal
	     */
	    MousePan.prototype.horizontal = true;
	    /**
	     * déplacement vertical
	     */
	    MousePan.prototype.vertical = true;
	    /**
	     * Fonction(s) à exécuter au début du cliquer/glisser
	     */
	    MousePan.prototype.onstart = null;
	    /**
	     * Fonction(s) à exécuter pendant le cliquer/glisser
	     */
	    MousePan.prototype.ondrag = null;
	    /**
	     * Fonction(s) à exécuter à la fin du cliquer/glisser
	     */
	    MousePan.prototype.onend = null;
	    /**
	     * Module actif ou non
	     */
	    MousePan.prototype.enabled = false;
	    /**
	     * Teste si un déplacement est possible ou non (selon l'échelle)
	     */
	    MousePan.prototype._canMove = function () {
	
	        var bounds = this.zap._getBounds("ctm"),
	            size = this.zap.size();
	
	        return this.horizontal && Math.round(size.width) < Math.round(bounds.width) || this.vertical && Math.round(size.height) < Math.round(bounds.height);
	    };
	
	    /**
	     * Fonction exécutée sur l'évènement défini
	     * @param e Event
	     */
	    MousePan.prototype.start = function (e) {
	
	        if (!this._canMove()) return;
	
	        e.preventDefault();
	
	        var jSVG = new JSYG(this.zap.node),
	            lastX = e.clientX,
	            lastY = e.clientY,
	            animate = this.zap.animate,
	            that = this,
	            jDoc = new JSYG(document);
	
	        function mousemoveFct(e) {
	            that.zap.screenTranslate(that.horizontal && lastX - e.clientX, that.vertical && lastY - e.clientY);
	            lastX = e.clientX;
	            lastY = e.clientY;
	            that.trigger('drag', that.zap.node, e);
	        }
	
	        function remove(e) {
	            that.zap.animate = animate;
	            jSVG.off('mousemove', mousemoveFct).removeClass(that.classDrag).addClass(that.className);
	            jDoc.off('mouseup', remove);
	            that.trigger('end', e);
	        }
	
	        this.zap.animate = false;
	
	        jSVG.addClass(this.classDrag).removeClass(this.className);
	
	        jSVG.on('mousemove', mousemoveFct);
	        jDoc.on('mouseup', remove);
	
	        this.trigger('start', this.zap.node, e);
	    };
	
	    /**
	     * Activation du module
	     * @param opt optionnel, objet définissant les options
	     * @returns {MousePan}
	     */
	    MousePan.prototype.enable = function (opt) {
	
	        if (opt) this.set(opt);
	
	        this.disable();
	
	        if (!this.zap.enabled) this.zap.enable();
	
	        var jSVG = new JSYG(this.zap.node),
	            that = this;
	
	        function setClassName() {
	            if (that.className) jSVG[(that._canMove() ? 'add' : 'remove') + 'Class'](that.className);
	        }
	
	        function start(e) {
	            if (that.eventWhich && e.which != that.eventWhich) return;
	            that.start(e);
	        }
	
	        jSVG.on(this.event, start);
	
	        this.zap.on("scale", setClassName);
	        setClassName();
	
	        this.disable = function () {
	            jSVG.removeClass(this.className).off(this.event, start);
	            this.zap.off("scale", setClassName);
	            this.enabled = false;
	            return this;
	        };
	
	        this.enabled = true;
	
	        return this;
	    };
	
	    /**
	     * Désactivation du module
	     * @returns {MousePan}
	     */
	    MousePan.prototype.disable = function () {
	        return this;
	    };
	
	    /**
	     * Redimensionnement du canvas à la souris
	     */
	    function ZapResizable(zoomAndPanObject) {
	        this.zap = zoomAndPanObject;
	    }
	
	    ZapResizable.prototype = new JSYG.StdConstruct();
	
	    ZapResizable.prototype.constructor = ZapResizable;
	    /**
	     * Evènement déclenchant le redimensionnement
	     */
	    ZapResizable.prototype.event = 'mousedown';
	    /**
	     * Elément déclenchant le redimensionnement. La valeur "defaut" insère une image dans le coin inférieur droit.
	     */
	    ZapResizable.prototype.field = 'default';
	    /**
	     * Curseur à appliquer à l'élément pendant le cliquer/glisser
	     */
	    ZapResizable.prototype.cursor = 'auto';
	    /**
	     * Redimensionnement horizontal
	     */
	    ZapResizable.prototype.horizontal = true;
	    /**
	     * Redimensionnement vertical
	     */
	    ZapResizable.prototype.vertical = true;
	    /**
	     * Maintien des proportions
	     */
	    ZapResizable.prototype.keepRatio = true;
	    /**
	     * Maintien de la partie visible
	     */
	    ZapResizable.prototype.keepViewBox = true;
	    /**
	     * Fonction(s) à exécuter au début du cliquer/glisser
	     */
	    ZapResizable.prototype.onstart = null;
	    /**
	     * Fonction(s) à exécuter pendant cliquer/glisser
	     */
	    ZapResizable.prototype.onresize = null;
	    /**
	     * Fonction(s) à exécuter à la fin du cliquer/glisser
	     */
	    ZapResizable.prototype.onend = null;
	    /**
	     * Module actif ou non
	     */
	    ZapResizable.prototype.enabled = false;
	    /**
	     * Fonction exécutée sur l'évènement défini
	     */
	    ZapResizable.prototype.start = function (e) {
	
	        e.preventDefault();
	
	        var fields = this.field === 'default' ? this._field : new JSYG(this.field),
	            that = this,
	            cursor = null,
	            xInit = e.clientX,
	            yInit = e.clientY,
	            size = this.zap.size(),
	            fcts = {
	
	            "mousemove": function mousemove(e) {
	
	                var width = size.width + (that.horizontal ? e.clientX - xInit : 0),
	                    height = size.height + (that.vertical ? e.clientY - yInit : 0);
	
	                if (that.keepRatio) height = null;
	
	                that.zap.size(width, height, that.keepViewBox);
	                that.trigger('resize', that.zap.node, e);
	            },
	
	            "mouseup": function mouseup(e) {
	
	                new JSYG(window).off(fcts);
	
	                if (cursor) {
	                    fields.each(function () {
	                        var $this = new JSYG(this);
	                        $this.css('cursor', $this.data('svgresizable'));
	                    });
	                }
	
	                that.trigger('end', that.zap.node, e);
	            }
	        };
	
	        new JSYG(window).on(fcts);
	
	        if (this.cursor === 'auto') {
	            if (this.horizontal === false) cursor = 'n';else if (this.vertical === false) cursor = 'e';else cursor = 'se';
	            cursor += '-resize';
	        } else if (this.cursor) cursor = that.cursor;
	
	        if (cursor) {
	            fields.each(function () {
	                var $this = new JSYG(this);
	                $this.data('svgresizable', $this.css('cursor')).css('cursor', cursor);
	            });
	        }
	
	        this.trigger('start', this.zap.node, e);
	    };
	
	    /**
	     * Activation du module
	     * @param opt optionnel, objet définissant les options
	     * @returns {ZapResizable}
	     */
	    ZapResizable.prototype.enable = function (opt) {
	
	        var start = this.start.bind(this),
	            fields,
	            that = this;
	
	        this.disable();
	
	        if (opt) {
	            this.set(opt);
	        }
	
	        if (!this.zap.enabled) {
	            this.zap.enable();
	        }
	
	        if (this.horizontal === false || this.vertical === false) this.keepRatio = false;
	
	        if (this.field === 'default') {
	
	            this._field = new JSYG('<div>').addClass('SVGResize').insertAfter(this.zap.overflow == "hidden" ? this.zap.node : this.zap.outerFrame);
	
	            fields = this._field;
	        } else fields = new JSYG(this.field);
	
	        fields.each(function () {
	            new JSYG(this).on(that.event, start);
	        });
	
	        this.disable = function () {
	
	            fields.each(function () {
	                new JSYG(this).off(that.event, start);
	            });
	
	            if (this.field === 'default') this._field.remove();
	
	            this.enabled = false;
	            return this;
	        };
	
	        this.enabled = true;
	
	        return this;
	    };
	
	    /**
	     * Désactivation du module
	     */
	    ZapResizable.prototype.disable = function () {};
	
	    JSYG.ZoomAndPan = ZoomAndPan;
	
	    return ZoomAndPan;
	});

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(516);

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*!
	 * JavaScript Cookie v2.1.0
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
	(function (factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
			module.exports = factory();
		} else {
			var _OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = _OldCookies;
				return api;
			};
		}
	})(function () {
		function extend() {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[i];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}
	
		function init(converter) {
			function api(key, value, attributes) {
				var result;
	
				// Write
	
				if (arguments.length > 1) {
					attributes = extend({
						path: '/'
					}, api.defaults, attributes);
	
					if (typeof attributes.expires === 'number') {
						var expires = new Date();
						expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
						attributes.expires = expires;
					}
	
					try {
						result = JSON.stringify(value);
						if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}
	
					if (!converter.write) {
						value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
					} else {
						value = converter.write(value, key);
					}
	
					key = encodeURIComponent(String(key));
					key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
					key = key.replace(/[\(\)]/g, escape);
	
					return document.cookie = [key, '=', value, attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
					attributes.path && '; path=' + attributes.path, attributes.domain && '; domain=' + attributes.domain, attributes.secure ? '; secure' : ''].join('');
				}
	
				// Read
	
				if (!key) {
					result = {};
				}
	
				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling "get()"
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var rdecode = /(%[0-9A-Z]{2})+/g;
				var i = 0;
	
				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var name = parts[0].replace(rdecode, decodeURIComponent);
					var cookie = parts.slice(1).join('=');
	
					if (cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}
	
					try {
						cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);
	
						if (this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}
	
						if (key === name) {
							result = cookie;
							break;
						}
	
						if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}
	
				return result;
			}
	
			api.get = api.set = api;
			api.getJSON = function () {
				return api.apply({
					json: true
				}, [].slice.call(arguments));
			};
			api.defaults = {};
	
			api.remove = function (key, attributes) {
				api(key, '', extend(attributes, {
					expires: -1
				}));
			};
	
			api.withConverter = init;
	
			return api;
		}
	
		return init(function () {});
	});

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(518);

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*!
	 * jQuery Mousewheel 3.1.13
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 */
	
	(function (factory) {
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(475)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
	        // Node/CommonJS style for Browserify
	        module.exports = factory;
	    } else {
	        // Browser globals
	        factory(jQuery);
	    }
	})(function ($) {
	
	    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
	        toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
	        slice = Array.prototype.slice,
	        nullLowestDeltaTimeout,
	        lowestDelta;
	
	    if ($.event.fixHooks) {
	        for (var i = toFix.length; i;) {
	            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
	        }
	    }
	
	    var special = $.event.special.mousewheel = {
	        version: '3.1.12',
	
	        setup: function setup() {
	            if (this.addEventListener) {
	                for (var i = toBind.length; i;) {
	                    this.addEventListener(toBind[--i], handler, false);
	                }
	            } else {
	                this.onmousewheel = handler;
	            }
	            // Store the line height and page height for this particular element
	            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
	            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
	        },
	
	        teardown: function teardown() {
	            if (this.removeEventListener) {
	                for (var i = toBind.length; i;) {
	                    this.removeEventListener(toBind[--i], handler, false);
	                }
	            } else {
	                this.onmousewheel = null;
	            }
	            // Clean up the data we added to the element
	            $.removeData(this, 'mousewheel-line-height');
	            $.removeData(this, 'mousewheel-page-height');
	        },
	
	        getLineHeight: function getLineHeight(elem) {
	            var $elem = $(elem),
	                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
	            if (!$parent.length) {
	                $parent = $('body');
	            }
	            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
	        },
	
	        getPageHeight: function getPageHeight(elem) {
	            return $(elem).height();
	        },
	
	        settings: {
	            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
	            normalizeOffset: true // calls getBoundingClientRect for each event
	        }
	    };
	
	    $.fn.extend({
	        mousewheel: function mousewheel(fn) {
	            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
	        },
	
	        unmousewheel: function unmousewheel(fn) {
	            return this.unbind('mousewheel', fn);
	        }
	    });
	
	    function handler(event) {
	        var orgEvent = event || window.event,
	            args = slice.call(arguments, 1),
	            delta = 0,
	            deltaX = 0,
	            deltaY = 0,
	            absDelta = 0,
	            offsetX = 0,
	            offsetY = 0;
	        event = $.event.fix(orgEvent);
	        event.type = 'mousewheel';
	
	        // Old school scrollwheel delta
	        if ('detail' in orgEvent) {
	            deltaY = orgEvent.detail * -1;
	        }
	        if ('wheelDelta' in orgEvent) {
	            deltaY = orgEvent.wheelDelta;
	        }
	        if ('wheelDeltaY' in orgEvent) {
	            deltaY = orgEvent.wheelDeltaY;
	        }
	        if ('wheelDeltaX' in orgEvent) {
	            deltaX = orgEvent.wheelDeltaX * -1;
	        }
	
	        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
	        if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
	            deltaX = deltaY * -1;
	            deltaY = 0;
	        }
	
	        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
	        delta = deltaY === 0 ? deltaX : deltaY;
	
	        // New school wheel delta (wheel event)
	        if ('deltaY' in orgEvent) {
	            deltaY = orgEvent.deltaY * -1;
	            delta = deltaY;
	        }
	        if ('deltaX' in orgEvent) {
	            deltaX = orgEvent.deltaX;
	            if (deltaY === 0) {
	                delta = deltaX * -1;
	            }
	        }
	
	        // No change actually happened, no reason to go any further
	        if (deltaY === 0 && deltaX === 0) {
	            return;
	        }
	
	        // Need to convert lines and pages to pixels if we aren't already in pixels
	        // There are three delta modes:
	        //   * deltaMode 0 is by pixels, nothing to do
	        //   * deltaMode 1 is by lines
	        //   * deltaMode 2 is by pages
	        if (orgEvent.deltaMode === 1) {
	            var lineHeight = $.data(this, 'mousewheel-line-height');
	            delta *= lineHeight;
	            deltaY *= lineHeight;
	            deltaX *= lineHeight;
	        } else if (orgEvent.deltaMode === 2) {
	            var pageHeight = $.data(this, 'mousewheel-page-height');
	            delta *= pageHeight;
	            deltaY *= pageHeight;
	            deltaX *= pageHeight;
	        }
	
	        // Store lowest absolute delta to normalize the delta values
	        absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));
	
	        if (!lowestDelta || absDelta < lowestDelta) {
	            lowestDelta = absDelta;
	
	            // Adjust older deltas if necessary
	            if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
	                lowestDelta /= 40;
	            }
	        }
	
	        // Adjust older deltas if necessary
	        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
	            // Divide all the things by 40!
	            delta /= 40;
	            deltaX /= 40;
	            deltaY /= 40;
	        }
	
	        // Get a whole, normalized value for the deltas
	        delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / lowestDelta);
	        deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / lowestDelta);
	        deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / lowestDelta);
	
	        // Normalise offsetX and offsetY properties
	        if (special.settings.normalizeOffset && this.getBoundingClientRect) {
	            var boundingRect = this.getBoundingClientRect();
	            offsetX = event.clientX - boundingRect.left;
	            offsetY = event.clientY - boundingRect.top;
	        }
	
	        // Add information to the event object
	        event.deltaX = deltaX;
	        event.deltaY = deltaY;
	        event.deltaFactor = lowestDelta;
	        event.offsetX = offsetX;
	        event.offsetY = offsetY;
	        // Go ahead and set deltaMode to 0 since we converted to pixels
	        // Although this is a little odd since we overwrite the deltaX/Y
	        // properties with normalized deltas.
	        event.deltaMode = 0;
	
	        // Add event and delta to the front of the arguments
	        args.unshift(event, delta, deltaX, deltaY);
	
	        // Clearout lowestDelta after sometime to better
	        // handle multiple device types that give different
	        // a different lowestDelta
	        // Ex: trackpad = 3 and mouse wheel = 120
	        if (nullLowestDeltaTimeout) {
	            clearTimeout(nullLowestDeltaTimeout);
	        }
	        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);
	
	        return ($.event.dispatch || $.event.handle).apply(this, args);
	    }
	
	    function nullLowestDelta() {
	        lowestDelta = null;
	    }
	
	    function shouldAdjustOldDeltas(orgEvent, absDelta) {
	        // If this is an older event and the delta is divisable by 120,
	        // then we are assuming that the browser is treating this as an
	        // older mouse wheel event and that we should divide the deltas
	        // by 40 to try and get a more usable deltaFactor.
	        // Side note, this actually impacts the reported scroll distance
	        // in older browsers and can cause scrolling to be slower than native.
	        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
	        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
	    }
	});

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(520);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(449)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./JSYG.ZoomAndPan.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./JSYG.ZoomAndPan.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(388)();
	// imports
	
	
	// module
	exports.push([module.id, "rect.marqueeZoom {\r\n\tfill:black;\r\n\tfill-opacity:0.1;\r\n\tstroke:black;\r\n\tstroke-width:0.5;\r\n\tstroke-dasharray:4,4;\r\n}\r\ndiv.marqueeZoom {\r\n\topacity:0.2;\r\n\tfilter:alpha(opacity = 0.2);\r\n\tborder:1px dashed black;\r\n\tposition:absolute;\r\n\tbackground-color:#CCC;\r\n\tz-index:100;\r\n}\r\n.SVGResize {\r\n\tposition:relative;\r\n\tleft:-18px;\r\n\tcursor: nw-resize;\r\n\twidth:18px;\r\n\theight:18px;\r\n\tpadding:0;\r\n\tdisplay:inline-block;\r\n\tbackground-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABvklEQVQ4jaWTvW5TQRBGR0KIlyAVFU9gJCQaJDroDE4k0iA5FLaQEt0b9nf2emdmNy1p3KRJRREKKiok3iuQpVjf+BJEhON5gKNvvjkDsOUY1b5t2/bhVhDn9CSgL1ar5Z0hwen94N2V9+5iPp8/uCNEHQbvfyLar1skUYeIeIlovgMAJI7GGcUbQvR+TbKCEO3mJMVa+2ITyCR4d9Wvw7zYy4lL1/k3G0DMe0T/C9F+qZDY5CSbQlS76uQbAIAI+ZMsRWv9fAUVdOb0P5LgZfD2R4XEg5ykNE3zFABgEdwsJykxxse3QPSkrlOTpETjnLgEa18BAHTevstJSorx30X3svWd1CRcuq7bBQCgRfiYk5RM9PK2Tv6QTYR8TnKdJMZOcuIishgBACCas+Dt+V+QoWzMsTnJ605qEi4xxkcAAFarpTAVovDkxjpr2aon6+v0nfRJtD7+xEyFefH6GuJuyFaNXcvWX6fvxGq1ZKYiEg+IaMcpNQKtj/cC+uK9uwCovzOUjTnK8DqI5kxWSYhoJycuIbgZHB19eGat+TydTu8DADijePg76Mzp0JPg7XnfiVNqFIKbjcfje78BPPMvDAx+oqIAAAAASUVORK5CYII=);\r\n}\r\n.MousePanClosedHand {\r\n\tcursor:url(data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAATklEQVRYhe3QMQoAIAwEwfz/07ExhU2ixWnAHRAshFs0AxryebK7bjxkd2WIV+LN0whlwPLdtwO2hlsEKMaPIpQBZYR6vIz4JgAAAPxjAJ+/ZalaZD7tAAAAAElFTkSuQmCC) 4 4, auto\t\r\n}\r\n.MousePanOpenHand {\r\n\tcursor:url(data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAaklEQVRYhe3SQQrAIAxEUe9/6bhRCJoYBUcF50MXbRfzik1pnJTrWHpQauo5FNMN6vvm3RMACMQdtXAIxBQAcRzmz2eFALhnH7Ud0H7hiXETcQOwjLgKQIwvIZCAEIEeDxHfABhjjDH2TxnUVyH711vfkQAAAABJRU5ErkJggg==) 4 4, auto\r\n}", ""]);
	
	// exports


/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(522);

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	/*jshint forin:false, eqnull:true*/
	/* globals JSYG*/
	
	(function (factory) {
	
	    if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(481), __webpack_require__(479)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof JSYG != "undefined") {
	        if (JSYG.Path) factory(JSYG);else throw new Error("You need JSYG.Path");
	    } else throw new Error("JSYG is needed");
	})(function (JSYG) {
	
	    "use strict";
	
	    /**
	     * Tracé de chemins SVG à la souris
	     * @param opt optionnel, objet définissant les options.
	     * @returns {PathDrawer}
	     */
	
	    function PathDrawer(opt) {
	
	        if (opt) this.set(opt);
	    }
	
	    PathDrawer.prototype = new JSYG.StdConstruct();
	
	    PathDrawer.prototype.constructor = PathDrawer;
	
	    /**
	     * zone sur laquelle on affecte les écouteurs d'évènements (si null, prend le parent svg le plus éloigné)
	     */
	    PathDrawer.prototype.area = null;
	    /**
	     * Type de segment utilisés pour le tracé ("L","T", etc). La valeur spéciale "autosmooth" permet un lissage
	     * automatique sans se soucier des points de controle.
	     */
	    PathDrawer.prototype.segment = 'autosmooth';
	    /**
	     * Type de tracé "freehand" (à main levée) ou "point2point" (ou tout autre valeur) pour tracé point par point.
	     */
	    PathDrawer.prototype.type = 'freehand';
	    /**
	     * Indique si un tracé est en cours ou non
	     */
	    PathDrawer.prototype.inProgress = false;
	    /**
	     * Pour le tracé à main levée, indique le nombre d'évènement "mousemove" à ignorer entre chaque point
	     * (sinon on aurait trop de points)
	     */
	    //PathDrawer.prototype.skip = 4;
	    /**
	     * Pour le tracé à main levée, indique la tolérance (en pixels) pour la simplification de la courbe
	     * @link http://mourner.github.io/simplify-js/
	     */
	    PathDrawer.prototype.simplify = 1;
	    /**
	     * Indique la force de l'aimantation en pixels écran des points extremes entre eux.
	     * La valeur null permet d'annuler l'aimantation
	     */
	    PathDrawer.prototype.strengthClosingMagnet = 5;
	    /**
	     * Ferme systématiquement ou non le chemin (segment Z)
	     */
	    PathDrawer.prototype.closePath = false;
	    /**
	     * fonction(s) à éxécuter pendant le tracé
	     */
	    PathDrawer.prototype.ondraw = false;
	    /**
	     * fonction(s) à éxécuter avant la fin du tracé
	     */
	    PathDrawer.prototype.onbeforeend = false;
	    /**
	     * fonction(s) à éxécuter à la fin du tracé
	     */
	    PathDrawer.prototype.onend = false;
	    /**
	     * fonction(s) à éxécuter avant un nouveau point (type "point2point" uniquement)
	     */
	    PathDrawer.prototype.onbeforenewseg = false;
	    /**
	     * fonction(s) à éxécuter à la création d'un nouveau point
	     */
	    PathDrawer.prototype.onnewseg = false;
	
	    /**
	     * Commence le tracé point à point.
	     * @param e objet JSYG.Event
	     * @returns {PathDrawer}
	     */
	    PathDrawer.prototype.drawPoint2Point = function (path, e) {
	
	        path = new JSYG.Path(path);
	
	        if (!path.parent().length) throw new Error("Il faut attacher l'objet path à l'arbre DOM");
	
	        var node = path[0],
	            jSvg = this.area ? new JSYG(this.area) : path.offsetParent('farthest'),
	            autoSmooth = this.segment.toLowerCase() === 'autosmooth',
	            segment = autoSmooth ? 'L' : this.segment,
	            mtx = path.getMtx('screen').inverse(),
	            xy = new JSYG.Vect(e.clientX, e.clientY).mtx(mtx),
	            that = this;
	
	        function mousemove(e) {
	
	            var mtx = path.getMtx('screen').inverse(),
	                xy = new JSYG.Vect(e.clientX, e.clientY).mtx(mtx),
	                nbSegs = path.nbSegs(),
	                seg = path.getSeg(nbSegs - 1),
	                pos,
	                first,
	                ref;
	
	            if (that.strengthClosingMagnet != null) {
	
	                first = path.getSeg(0);
	                ref = new JSYG.Vect(first.x, first.y).mtx(mtx.inverse());
	                pos = new JSYG.Vect(e.clientX, e.clientY);
	
	                if (JSYG.distance(ref, pos) < that.strengthClosingMagnet) {
	                    xy.x = first.x;
	                    xy.y = first.y;
	                }
	            }
	
	            seg.x = xy.x;
	            seg.y = xy.y;
	
	            path.replaceSeg(nbSegs - 1, seg);
	
	            if (autoSmooth) path.autoSmooth(nbSegs - 1);
	
	            that.trigger('draw', node, e);
	        }
	
	        function mousedown(e) {
	
	            if (that.trigger('beforenewseg', node, e) === false) return;
	
	            //si la courbe est fermée, un clic suffit pour terminer.
	            if (path.nbSegs() > 3 && path.isClosed()) {
	
	                if (that.trigger('beforeend', node, e) === false) return;
	                return that.end();
	            }
	
	            if (e.detail === 2) return; //pas d'action au double-clic
	
	            var mtx = path.getMtx('screen').inverse(),
	                xy = new JSYG.Vect(e.clientX, e.clientY).mtx(mtx);
	
	            path.addSeg(segment, xy.x, xy.y, xy.x, xy.y, xy.x, xy.y);
	
	            if (autoSmooth) path.autoSmooth(path.nbSegs() - 1);
	
	            that.trigger('newseg', node, e);
	        }
	
	        function dblclick(e, keepLastSeg) {
	
	            path.removeSeg(path.nbSegs() - 1);
	
	            if (that.trigger('beforeend', node, e) === false) return;
	
	            //path.removeSeg(path.nbSegs()-1);
	
	            that.end();
	        }
	
	        this.end = function () {
	
	            var first;
	
	            if (that.closePath && !path.isClosed()) {
	                first = path.getSeg(0);
	                path.addSeg(segment, first.x, first.y, first.x, first.y, first.x, first.y);
	            }
	
	            if (autoSmooth) path.autoSmooth(path.nbSegs() - 1);
	
	            jSvg.off({
	                'mousemove': mousemove,
	                'mousedown': mousedown,
	                'dblclick': dblclick
	            });
	
	            that.inProgress = false;
	
	            that.trigger('end', node, e);
	
	            that.end = function () {
	                return this;
	            };
	        };
	
	        if (path.nbSegs() === 0) path.addSeg('M', xy.x, xy.y);
	
	        that.inProgress = true;
	
	        jSvg.on({
	            'mousemove': mousemove,
	            'mousedown': mousedown,
	            'dblclick': dblclick
	        });
	
	        mousedown(e);
	
	        return this;
	    };
	
	    /**
	     * Commence le tracé à main levée.
	     * @param e objet Event (évènement mousedown).
	     * @returns {PathDrawer}
	     */
	    PathDrawer.prototype.drawFreeHand = function (path, e) {
	
	        path = new JSYG.Path(path);
	
	        if (!path.parent().length) throw new Error("Il faut attacher l'objet path à l'arbre DOM");
	
	        var node = path[0],
	            autoSmooth = this.segment.toLowerCase() === 'autosmooth',
	            segment = autoSmooth ? 'L' : this.segment,
	            jSvg = this.area ? new JSYG(this.area) : path.offsetParent('farthest'),
	            mtx = path.getMtx('screen').inverse(),
	            xy = new JSYG.Vect(e.clientX, e.clientY).mtx(mtx),
	            that = this;
	
	        function mousemove(e) {
	
	            var xy = new JSYG.Vect(e.clientX, e.clientY).mtx(mtx);
	
	            path.addSeg(segment, xy.x, xy.y, xy.x, xy.y, xy.x, xy.y);
	            that.trigger('newseg', node, e);
	
	            that.trigger('draw', node, e);
	        }
	
	        function mouseup(e) {
	            that.end();
	            that.trigger('end', node, e);
	        }
	
	        this.end = function () {
	
	            var nbSegs = path.nbSegs(),
	                last,
	                first;
	
	            if (nbSegs == 1) path.remove();else {
	
	                last = path.getLastSeg();
	                first = path.getSeg(0);
	
	                if (that.strengthClosingMagnet != null) {
	
	                    if (JSYG.distance(first, last) < that.strengthClosingMagnet) {
	                        last.x = first.x;
	                        last.y = first.y;
	                    }
	
	                    path.replaceSeg(nbSegs - 1, last);
	                }
	
	                if (this.closePath && !path.isClosed()) {
	                    path.addSeg(segment, first.x, first.y, first.x, first.y, first.x, first.y);
	                }
	
	                if (this.simplify) path.simplify(this.simplify);
	
	                if (autoSmooth) path.autoSmooth();
	            }
	
	            that.inProgress = false;
	
	            jSvg.off('vmousemove', mousemove);
	
	            new JSYG(document).off('vmouseup', mouseup);
	
	            that.end = function () {
	                return this;
	            };
	        };
	
	        jSvg.on('vmousemove', mousemove);
	        new JSYG(document).on('vmouseup', mouseup);
	
	        e.preventDefault();
	
	        path.clear();
	        path.addSeg('M', xy.x, xy.y);
	
	        this.inProgress = true;
	
	        return this;
	    };
	
	    /**
	     * Commence le tracé selon le type défini ("freehand" ou "point2point") 
	     * @param e objet JSYG.Event (évènement mousedown).
	     * @returns
	     */
	    PathDrawer.prototype.draw = function (path, e) {
	
	        if (this.type.toLowerCase() === 'freehand') this.drawFreeHand(path, e);else this.drawPoint2Point(path, e);
	
	        return this;
	    };
	
	    /**
	     * Termine le tracé.
	     * @returns {PathDrawer}
	     */
	    PathDrawer.prototype.end = function () {
	        return this;
	    };
	
	    JSYG.PathDrawer = PathDrawer;
	
	    return PathDrawer;
	});

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(524);

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	/*jshint forin:false, eqnull:true*/
	/* globals JSYG*/
	
	(function (factory) {
	
	    if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(481), __webpack_require__(491)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof JSYG != "undefined") {
	        if (JSYG.Resizable) factory(JSYG, JSYG.Resizable);else throw new Error("You need JSYG.Resizable");
	    } else throw new Error("JSYG is needed");
	})(function (JSYG, Resizable) {
	
	    "use strict";
	
	    function ShapeDrawer(opt) {
	
	        if (opt) this.set(opt);
	    }
	
	    ShapeDrawer.prototype = new JSYG.StdConstruct();
	
	    ShapeDrawer.prototype.constructor = ShapeDrawer;
	
	    /**
	     * fonction(s) à éxécuter pendant le tracé
	     */
	    ShapeDrawer.prototype.ondraw = false;
	
	    /**
	     * fonction(s) à éxécuter à la fin du tracé
	     */
	    ShapeDrawer.prototype.onend = false;
	
	    /**
	     * Aire minimale en dessous de laquelle la forme ne sera pas conservée
	     */
	    ShapeDrawer.prototype.minArea = 2;
	
	    /**
	     * Options supplémentaires pour le redimensionnement de la forme
	     */
	    ShapeDrawer.prototype.options = null;
	
	    /**
	     * Indique si un tracé est en cours
	     */
	    ShapeDrawer.prototype.inProgress = false;
	
	    /**
	     * Tracé d'une ligne (cas particulier)
	     * @param {JSYG} line élément line à tracer
	     * @param {Event} e événement mousedown
	     * @returns {ShapeDrawer.prototype}
	     */
	    ShapeDrawer.prototype.drawLine = function (line, e) {
	
	        line = new JSYG(line);
	
	        var pos = line.getCursorPos(e),
	            that = this;
	
	        line.attr({ "x1": pos.x, "y1": pos.y, "x2": pos.x, "y2": pos.y });
	
	        function mousemoveFct(e) {
	
	            var pos = line.getCursorPos(e);
	
	            line.attr({ "x2": pos.x, "y2": pos.y });
	
	            that.trigger("draw", line[0], e, line[0]);
	        }
	
	        function mouseupFct(e) {
	
	            new JSYG(document).off({
	                'vmousemove': mousemoveFct,
	                'vmouseup': mouseupFct
	            });
	
	            var dim = line.getDim();
	
	            if (that.minArea != null && dim.width * dim.height < that.minArea) line.remove();
	
	            that.trigger("end", line[0], e, line[0]);
	
	            that.inProgress = false;
	        }
	
	        new JSYG(document).on({
	            'vmousemove': mousemoveFct,
	            'vmouseup': mouseupFct
	        });
	
	        this.inProgress = true;
	
	        return this;
	    };
	    /**
	     * Commence le tracé de la forme
	     * @param {SVGElement} élément à dessiner
	     * @param {Event} e objet Event (événement mousedown).
	     * @returns
	     */
	    ShapeDrawer.prototype.drawShape = function (shape, e) {
	
	        shape = new JSYG(shape);
	
	        var pos = shape.getCursorPos(e),
	            tag = shape.getTag(),
	            resizer = new JSYG.Resizable(shape),
	            that = this;
	
	        shape.setDim({
	            x: pos.x - 1,
	            y: pos.y - 1,
	            width: 1,
	            height: 1
	        });
	
	        resizer.set({
	
	            originX: tag == 'rect' ? 'left' : 'center',
	
	            originY: tag == 'rect' ? 'top' : 'center',
	
	            keepRatio: tag == 'circle' ? true : false,
	
	            cursor: false,
	
	            inverse: true,
	
	            ondrag: function ondrag(e) {
	                that.trigger("draw", shape[0], e, shape[0]);
	            }
	        });
	
	        if (this.options) resizer.set(this.options);
	
	        resizer.on("end", function (e) {
	
	            var dim = shape.getDim();
	
	            if (that.minArea != null && dim.width * dim.height < that.minArea) shape.remove();
	
	            that.trigger("end", shape[0], e, shape[0]);
	
	            that.inProgress = false;
	        });
	
	        this.inProgress = true;
	
	        resizer.start(e);
	
	        return this;
	    };
	
	    ShapeDrawer.prototype.draw = function (shape, e) {
	
	        shape = new JSYG(shape);
	
	        var tag = shape.getTag();
	
	        return tag == "line" ? this.drawLine(shape, e) : this.drawShape(shape, e);
	    };
	
	    JSYG.ShapeDrawer = ShapeDrawer;
	
	    return ShapeDrawer;
	});

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(526);
	__webpack_require__(531);

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	/*jshint forin:false, eqnull:true*/
	/* globals JSYG*/
	
	(function (root, factory) {
	
	  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(475), __webpack_require__(527), __webpack_require__(493)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof jQuery == "undefined") throw new Error("jQuery is needed");else if (typeof JSYG != "undefined" && JSYG.StdConstruct) factory(jQuery, JSYG.StdConstruct);else if (typeof StdConstruct != "undefined") root.UndoRedo = factory(jQuery, StdConstruct);else throw new Error("JSYG.StdConstruct is needed");
	})(undefined, function ($, StdConstruct) {
	
	  "use strict";
	
	  /**
	   * Constructeur permettant la gestion de fonctions annuler/refaire.<br/>
	   * A chaque fois que la méthode saveState est appelée, le noeud est cloné et stocké dans une pile.<br/>
	   * Quand on appelle les méthodes undo ou redo, le noeud est remplacé par le clone adéquat.<br/>
	   * Ailleurs dans le code il faut donc faire attention à ne pas faire référence directement à ce noeud, car celui-ci change.
	   * Il vaut mieux utiliser un selecteur css pour retrouver le bon élément à chaque fois.
	   */
	
	  function UndoRedo(arg, opt) {
	
	    /**
	     * Pile contenant les noeuds clonés
	     */
	    this.stack = [];
	
	    this.undo = this.undo.bind(this);
	    this.redo = this.redo.bind(this);
	
	    if (arg) this.setNode(arg);
	
	    if (opt) this.enable(opt);
	  };
	
	  UndoRedo.prototype = new StdConstruct();
	
	  UndoRedo.prototype.constructor = UndoRedo;
	
	  /**
	   * Activation automatique ou non des raccourcis clavier
	   */
	  UndoRedo.prototype.autoEnableKeyShortCuts = false;
	
	  /**
	   * Raccourci clavier pour annuler
	   * @type {String} touche ou combinaison de touches ou null pour pas de raccourci
	   */
	  UndoRedo.prototype.keyShortCutUndo = "ctrl+z";
	
	  /**
	   * Raccourci clavier pour refaire
	   * @type {String} touche ou combinaison de touches ou null pour pas de raccourci
	   */
	  UndoRedo.prototype.keyShortCutRedo = "ctrl+y";
	
	  /**
	   * Activation automatique ou non des champs
	   */
	  UndoRedo.prototype.autoEnableFields = false;
	
	  /**
	   * Champ annuler (optionnel, pour faciliter la création d'un bouton)
	   * @type argument JSYG
	   */
	  UndoRedo.prototype.fieldUndo = null;
	
	  /**
	   * Champ refaire (optionnel, pour faciliter la création d'un bouton)
	   * @type argument JSYG
	   */
	  UndoRedo.prototype.fieldRedo = null;
	
	  /**
	   * Classe à appliquer aux champs annuler ou refaire quand ils sont inactifs (en bout de pile)
	   */
	  UndoRedo.prototype.classInactive = 'disabled';
	
	  /**
	   * Nombre d'états que l'on conserve en mémoire
	   * @type {Number}
	   */
	  UndoRedo.prototype.depth = 10;
	
	  /**
	   * Indice de l'état courant
	   */
	  UndoRedo.prototype.current = 0;
	
	  /**
	   * Fonctions à exécuter à chaque fois qu'on annule une action
	   */
	  UndoRedo.prototype.onundo = null;
	
	  /**
	   * Fonctions à exécuter à chaque fois qu'on rétablit une action
	   */
	  UndoRedo.prototype.onredo = null;
	
	  /**
	   * Fonctions à exécuter à chaque fois qu'on annule ou refait une action
	   */
	  UndoRedo.prototype.onchange = null;
	
	  /**
	   * Fonctions à exécuter à chaque fois qu'on sauve l'état courant
	   */
	  UndoRedo.prototype.onsave = null;
	
	  /**
	   * Indique si le module est actif ou non
	   */
	  UndoRedo.prototype.enabled = null;
	
	  /**
	   * Change le noeud par le noeud situé dans la pile à l'indice passé en argument
	   */
	  UndoRedo.prototype.change = function (indice) {
	
	    if (this.stack[indice] == null) return;
	
	    var clone = $(this.stack[indice].node).clone();
	
	    clone.replaceAll(this.node);
	
	    this.node = clone[0];
	
	    this.current = indice;
	
	    if (this.fieldUndo) {
	      if (this.stack.length > 1 && this.current < this.stack.length - 1) $(this.fieldUndo).removeClass(this.classInactive);else $(this.fieldUndo).addClass(this.classInactive);
	    }
	
	    if (this.fieldRedo) {
	      if (this.stack.length > 1 && this.current > 0) $(this.fieldRedo).removeClass(this.classInactive);else $(this.fieldRedo).addClass(this.classInactive);
	    }
	
	    this.trigger('change', this.node);
	
	    return this;
	  };
	
	  /**
	   * Sauve l'état courant
	   * @param label optionnel, intitulé de l'action effectuée
	   * @returns {UndoRedo}
	   */
	  UndoRedo.prototype.saveState = function (label, _preventEvent) {
	
	    //on vide le début du tableau si on avait annulé quelque chose
	    while (this.current > 0) {
	      this.stack.shift();this.current--;
	    }
	
	    var clone = $(this.node).clone();
	
	    if (!clone.length) return this;
	
	    this.stack.unshift({ "label": label, "node": clone[0] });
	
	    if (this.stack.length > this.depth) this.stack.pop();
	
	    if (this.fieldRedo) $(this.fieldRedo).addClass(this.classInactive);
	    if (this.fieldUndo) $(this.fieldUndo).removeClass(this.classInactive);
	
	    if (!_preventEvent) this.trigger('save', this.node);
	
	    return this;
	  };
	
	  /**
	   * Définit si on peut annuler
	   */
	  UndoRedo.prototype.hasUndo = function () {
	    return this.current < this.stack.length - 1;
	  };
	
	  /**
	   * Définit si on peut refaire
	   */
	  UndoRedo.prototype.hasRedo = function () {
	    return this.current >= 1;
	  };
	  /**
	   * Annule l'action précédente (remplace le noeud par le dernier état sauvegardé)
	   * @returns {UndoRedo}
	   */
	  UndoRedo.prototype.undo = function () {
	
	    if (!this.hasUndo()) return;
	
	    this.change(++this.current);
	
	    this.trigger('undo', this.node);
	
	    return this;
	  };
	
	  /**
	   * Rétablit l'action précédente (remplace le noeud par l'état suivant dans la pile).
	   * @returns {UndoRedo}
	   */
	  UndoRedo.prototype.redo = function () {
	
	    if (!this.hasRedo()) return;
	
	    this.change(--this.current);
	
	    this.trigger('redo', this.node);
	
	    return this;
	  };
	
	  /**
	   * Vide la pile
	   * @returns {UndoRedo}
	   */
	  UndoRedo.prototype.clear = function (_preventEvent) {
	
	    this.current = 0;
	
	    this.stack.splice(0, this.stack.length);
	
	    this.fieldRedo && $(this.fieldRedo).addClass(this.classInactive);
	
	    this.saveState(null, _preventEvent);
	
	    this.fieldUndo && $(this.fieldUndo).addClass(this.classInactive);
	
	    return this;
	  };
	
	  UndoRedo.prototype.enableFields = function () {
	
	    if (!this.enabled) return this;
	
	    if (this.fieldUndo) new JSYG(this.fieldUndo).on('click', this.undo).addClass(this.classInactive);
	
	    if (this.fieldRedo) new JSYG(this.fieldRedo).on('click', this.redo).addClass(this.classInactive);
	
	    return this;
	  };
	
	  UndoRedo.prototype.disableFields = function () {
	
	    if (!this.enabled) return this;
	
	    if (this.fieldUndo) new JSYG(this.fieldUndo).off('click', this.undo).removeClass(this.classInactive);
	
	    if (this.fieldRedo) new JSYG(this.fieldRedo).off('click', this.redo).removeClass(this.classInactive);
	
	    return this;
	  };
	
	  UndoRedo.prototype.enableKeyShortCuts = function () {
	
	    if (!this.enabled) return this;
	
	    var $doc = $(document);
	
	    if (this.keyShortCutUndo) $doc.on("keydown", null, this.keyShortCutUndo, this.undo);
	    if (this.keyShortCutRedo) $doc.on("keydown", null, this.keyShortCutRedo, this.redo);
	
	    return this;
	  };
	
	  UndoRedo.prototype.disableKeyShortCuts = function () {
	
	    if (!this.enabled) return this;
	
	    var $doc = $(document);
	
	    if (this.keyShortCutUndo) $doc.off("keydown", this.undo);
	    if (this.keyShortCutRedo) $doc.off("keydown", this.redo);
	
	    return this;
	  };
	  /**
	   * Sauve l'état courant et active les fonctions si les propriétés fieldUndo et/ou fieldRedo ont été définies.
	   * @returns {UndoRedo}
	   */
	  UndoRedo.prototype.enable = function (opt) {
	
	    this.disable();
	
	    if (opt) this.set(opt);
	
	    this.saveState(null, true);
	
	    this.enabled = true;
	
	    if (this.autoEnableFields) this.enableFields();
	
	    if (this.autoEnableKeyShortCuts) this.enableKeyShortCuts();
	
	    return this;
	  };
	
	  /**
	   * Vide la pile et désactive les fonctions.
	   * @returns {UndoRedo}
	   */
	  UndoRedo.prototype.disable = function () {
	
	    this.clear(true);
	
	    this.stack.splice(0, this.stack.length);
	
	    this.disableFields();
	
	    this.disableKeyShortCuts();
	
	    this.enabled = false;
	
	    return this;
	  };
	
	  if (typeof JSYG != "undefined") JSYG.UndoRedo = UndoRedo;
	
	  return UndoRedo;
	});

/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(528);

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	(function (root, factory) {
	
	    if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(475), __webpack_require__(529)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
	
	        if (typeof jQuery == "undefined") throw new Error("jQuery is needed");
	
	        if (typeof JSYG != "undefined") {
	
	            if (JSYG.Events) factory(jQuery, JSYG.Events);else throw new Error("You need JSYG.Events module");
	        } else if (typeof Events != "undefined") root.StdConstruct = factory(jQuery, Events);else throw new Error("You need Events module");
	    }
	})(undefined, function ($, Events) {
	
	    "use strict";
	
	    /**
	     * Constructeur standard définissant une liste de fonctions utiles pour les plugins
	     * @returns {StdConstruct}
	     */
	
	    function StdConstruct() {};
	
	    StdConstruct.prototype = new Events();
	
	    StdConstruct.prototype.constructor = StdConstruct;
	
	    /**
	     * Permet de définir les propriétés de l'objet et des sous-objets de manière récursive, sans écraser les objets existants
	     * (seules les propriétés précisées sont mises à jour)
	     * @param opt objet contenant les propriétés à modifier
	     * @param _cible en interne seulement pour appel r�cursif
	     * @returns {Events}
	     */
	    StdConstruct.prototype.set = function (opt, _cible) {
	
	        var cible = _cible || this;
	
	        if (!$.isPlainObject(opt)) return cible;
	
	        for (var n in opt) {
	            if (n in cible) {
	                if ($.isPlainObject(opt[n]) && cible[n]) this.set(opt[n], cible[n]);else if (opt[n] !== undefined) cible[n] = opt[n];
	            }
	        }
	
	        return cible;
	    };
	
	    /**
	     * Changement du noeud sur lequel s'applique le plugin
	     * @param arg argument JSYG
	     * @returns {StdConstruct}
	     */
	    StdConstruct.prototype.setNode = function (arg) {
	
	        var node = $(arg)[0];
	        if (!node) throw new Error(arg + " n'est pas un argument correct pour la méthode setNode : aucun élément DOM renvoyé.");
	
	        var enabled = this.enabled === true;
	        if (enabled) this.disable();
	
	        this.node = node;
	
	        if (enabled) this.enable();
	
	        return this;
	    };
	
	    /**
	     * réinitialisation de toutes les propriétés du plugin
	     * @returns {StdConstruct}
	     */
	    StdConstruct.prototype.reset = function () {
	
	        var ref = Object.getPrototypeOf ? Object.getPrototypeOf(this) : this.__proto__ ? this.__proto__ : this.constructor.prototype;
	
	        for (var n in ref) {
	            if (typeof ref[n] !== 'function') this[n] = ref[n];
	        }
	
	        return this;
	    };
	
	    /**
	     * Indique si le plugin est actif ou non
	     */
	    StdConstruct.prototype.enabled = false;
	
	    /**
	     * Active le plugin
	     */
	    StdConstruct.prototype.enable = function () {
	
	        this.enabled = true;
	
	        return this;
	    };
	
	    /**
	     * Désactive le plugin
	     */
	    StdConstruct.prototype.disable = function () {
	
	        this.enabled = false;
	
	        return this;
	    };
	
	    /**
	     * Active ou désactive le plugin 
	     * @param opt
	     */
	    StdConstruct.prototype.toggle = function (opt) {
	        if (this.enabled) this.disable();else this.enable(opt);
	        return this;
	    },
	
	    /**
	     * Désactive le plugin et réinitialise les propriétés.
	     */
	    StdConstruct.prototype.destroy = function () {
	
	        this.disable();
	        this.reset();
	        return this;
	    };
	
	    if (typeof JSYG != "undefined") JSYG.StdConstruct = StdConstruct;
	
	    return StdConstruct;
	});

/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(530);

/***/ },

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	;(function () {
	
	    "use strict";
	
	    var slice = Array.prototype.slice;
	
	    function isPlainObject(obj) {
	        if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== "object" || obj.nodeType || obj != null && obj === obj.window) return false;
	        if (obj.constructor && !obj.constructor.prototype.hasOwnProperty("isPrototypeOf")) return false;
	        return true;
	    }
	    /**
	     * Constructeur standard définissant une liste de fonctions utiles pour les plugins
	     * @returns {Events}
	     */
	    function Events() {}
	
	    Events.prototype = {
	
	        constructor: Events,
	        /**
	         * Ajout d'un écouteur d'événement.<br/>
	         * Cela permet d'ajouter plusieurs fonctions, elles seront conservées dans un tableau.<br/>
	         * Les doublons sont ignorés (même événement même fonction).<br/>
	         * On peut passer en argument un objet avec les événements en clés et les fonctions en valeur.<br/>
	         * @param {String} events type(s) d'événement (propre à chaque module, 'click', 'start', 'end', etc) séparés par des espaces.
	         * @param {Function} fct fonction à exécuter lors du déclenchement de l'événement
	         * @returns {Events}
	         */
	        on: function on(events, fct) {
	
	            var p, i, n, N;
	
	            if (isPlainObject(events) && fct == null) {
	                for (n in events) {
	                    this.on(n, events[n]);
	                }return this;
	            }
	
	            if (typeof fct !== 'function') return this;
	
	            events = events.split(/\s+/);
	
	            for (i = 0, N = events.length; i < N; i++) {
	
	                p = this['on' + events[i]];
	
	                if (p === undefined) throw new Error(events[i] + " n'est pas un événement connu");else if (p === false || p === null) p = [fct];else if (typeof p == "function") {
	                    if (p !== fct) p = [p, fct];
	                } else if (Array.isArray(p)) {
	                    if (p.indexOf(fct) === -1) p.push(fct);
	                } else throw new Error((typeof p === "undefined" ? "undefined" : _typeof(p)) + "Type incorrect pour la propriété on" + events[i]);
	
	                this['on' + events[i]] = p;
	            }
	
	            return this;
	        },
	
	        /**
	         * Suppression d'un ou plusieurs écouteur d'événement (Event Listener) de la liste.<br/>
	         * On peut passer en argument un objet avec les événements en clés et les fonctions en valeur.
	         * @param {String} events type(s) d'événement (propre à chaque module, 'click', 'start', 'end', etc) séparés par des espaces.
	         * @param {Function} fct fonction à supprimer. Si pas de fonction, tous les écouteurs liés à l'événement sont supprimés.
	         * @returns {Events}
	         */
	        off: function off(events, fct) {
	
	            var p, i, n, N;
	
	            if (isPlainObject(events) && fct == null) {
	                for (n in events) {
	                    this.off(n, events[n]);
	                }return this;
	            }
	
	            if (fct && typeof fct !== 'function') return this;
	
	            events = events.split(/\s+/);
	
	            for (i = 0, N = events.length; i < N; i++) {
	
	                p = this['on' + events[i]];
	
	                if (fct == null) {
	                    this['on' + events[i]] = null;continue;
	                }
	
	                if (p === undefined) throw new Error(events[i] + " n'est pas un événement connu");else if (typeof p == "function" && p === fct) p = null;else if (Array.isArray(p)) p.splice(p.indexOf(fct), 1);else if (p !== null) throw new Error((typeof p === "undefined" ? "undefined" : _typeof(p)) + "Type incorrect pour la propriété on" + events[i]);
	            }
	
	            return this;
	        },
	
	        /**
	         * Ajout d'un écouteur d'événement pour une fonction qui ne sera exécutée qu'une seule fois
	         * @param {type} events
	         * @param {type} fct
	         * @returns {JSYG.Events_L1.Events.prototype}
	         */
	        one: function one(events, fct) {
	
	            var that = this;
	
	            function offFct() {
	                that.off(events, fct);
	                that.off(events, offFct);
	            }
	
	            this.on(events, fct);
	            this.on(events, offFct);
	
	            return this;
	        },
	
	        /**
	         * Execution d'un événement donné
	         * @memberOf Events
	         * @param {String} event nom de l'événement
	         * @param {Object} context optionnel, objet référencé par le mot clef "this" dans la fonction.
	         * Les arguments suivants sont les arguments passés à la fonction (nombre non défini)
	         * @returns {Events}
	         */
	        trigger: function trigger(event, context) {
	
	            context = context || this.node || this;
	
	            var p = this['on' + event],
	                returnValue = true,
	                i,
	                N;
	
	            if (!('on' + event in this)) throw new Error(event + " is not a existing event");else if (p instanceof Function) returnValue = p.apply(context, slice.call(arguments, 2));else if (Array.isArray(p)) {
	                for (i = 0, N = p.length; i < N; i++) {
	                    if (p[i].apply(context, slice.call(arguments, 2)) === false) returnValue = false;
	                }
	            } else if (p !== null && p !== false) throw new Error((typeof p === "undefined" ? "undefined" : _typeof(p)) + "Type incorrect pour la propriété on" + event);
	
	            return returnValue;
	        }
	
	    };
	
	    if (typeof JSYG != "undefined") JSYG.Events = Events;
	
	    if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	        return Events;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else this.Events = Events;
	}).call(undefined);

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(532);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(449)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./JSYG.UndoRedo.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./JSYG.UndoRedo.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(388)();
	// imports
	
	
	// module
	exports.push([module.id, ".disabled {\n\tcursor:not-allowed;\n\topacity:0.3;\n\tfilter:alpha(opacity=30);\t\n}", ""]);
	
	// exports


/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(534);

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*jshint forin:false, eqnull:true*/
	/* globals JSYG,define*/
	"use strict";
	
	(function (factory) {
	
	  var root = typeof window !== "undefined" ? window : global;
	  var Promise = root.Promise;
	  var fetch = root.fetch;
	
	  if (typeof module != "undefined" && module.exports) {
	
	    if (!Promise) Promise = __webpack_require__(535).Promise;
	
	    if (!fetch) {
	      __webpack_require__(538);
	      fetch = root.fetch;
	    }
	
	    module.exports = factory(Promise, fetch);
	  } else if (true) {
	
	    if (fetch) {
	
	      if (Promise) !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	        return factory(Promise, fetch);
	      }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(535)], __WEBPACK_AMD_DEFINE_RESULT__ = function (es6) {
	        return factory(es6.Promise, fetch);
	      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	
	      if (Promise) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(538)], __WEBPACK_AMD_DEFINE_RESULT__ = function (fetch) {
	        return factory(Promise, root.fetch);
	      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(535), __webpack_require__(538)], __WEBPACK_AMD_DEFINE_RESULT__ = function (es6, fetch) {
	        return factory(es6.Promise, root.fetch);
	      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	  } else if (Promise && fetch) root.jfetch = factory(Promise, fetch);else throw new Error("polyfill(s) missing");
	})(function (Promise, fetch) {
	
	  "use strict";
	
	  function checkStatus(response) {
	
	    var s = response.status;
	
	    if (s >= 200 && s < 300 || s === 304 || s === 0 /*file protocol*/) return response;
	
	    var error = new Error(response.statusText);
	
	    error.response = response;
	
	    throw error;
	  }
	
	  function jfetch() {
	
	    return fetch.apply(null, arguments).then(checkStatus);
	  }
	
	  if (typeof JSYG != "undefined") JSYG.fetch = jfetch;
	
	  return jfetch;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(536);

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, global, module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.0.2
	 */
	
	(function () {
	  "use strict";
	
	  function lib$es6$promise$utils$$objectOrFunction(x) {
	    return typeof x === 'function' || (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x !== null;
	  }
	
	  function lib$es6$promise$utils$$isFunction(x) {
	    return typeof x === 'function';
	  }
	
	  function lib$es6$promise$utils$$isMaybeThenable(x) {
	    return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x !== null;
	  }
	
	  var lib$es6$promise$utils$$_isArray;
	  if (!Array.isArray) {
	    lib$es6$promise$utils$$_isArray = function lib$es6$promise$utils$$_isArray(x) {
	      return Object.prototype.toString.call(x) === '[object Array]';
	    };
	  } else {
	    lib$es6$promise$utils$$_isArray = Array.isArray;
	  }
	
	  var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
	  var lib$es6$promise$asap$$len = 0;
	  var lib$es6$promise$asap$$toString = {}.toString;
	  var lib$es6$promise$asap$$vertxNext;
	  var lib$es6$promise$asap$$customSchedulerFn;
	
	  var lib$es6$promise$asap$$asap = function asap(callback, arg) {
	    lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
	    lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
	    lib$es6$promise$asap$$len += 2;
	    if (lib$es6$promise$asap$$len === 2) {
	      // If len is 2, that means that we need to schedule an async flush.
	      // If additional callbacks are queued before the queue is flushed, they
	      // will be processed by this flush that we are scheduling.
	      if (lib$es6$promise$asap$$customSchedulerFn) {
	        lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
	      } else {
	        lib$es6$promise$asap$$scheduleFlush();
	      }
	    }
	  };
	
	  function lib$es6$promise$asap$$setScheduler(scheduleFn) {
	    lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
	  }
	
	  function lib$es6$promise$asap$$setAsap(asapFn) {
	    lib$es6$promise$asap$$asap = asapFn;
	  }
	
	  var lib$es6$promise$asap$$browserWindow = typeof window !== 'undefined' ? window : undefined;
	  var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
	  var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
	  var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
	
	  // test for web worker but not in IE10
	  var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
	
	  // node
	  function lib$es6$promise$asap$$useNextTick() {
	    // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	    // see https://github.com/cujojs/when/issues/410 for details
	    return function () {
	      process.nextTick(lib$es6$promise$asap$$flush);
	    };
	  }
	
	  // vertx
	  function lib$es6$promise$asap$$useVertxTimer() {
	    return function () {
	      lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
	    };
	  }
	
	  function lib$es6$promise$asap$$useMutationObserver() {
	    var iterations = 0;
	    var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
	    var node = document.createTextNode('');
	    observer.observe(node, { characterData: true });
	
	    return function () {
	      node.data = iterations = ++iterations % 2;
	    };
	  }
	
	  // web worker
	  function lib$es6$promise$asap$$useMessageChannel() {
	    var channel = new MessageChannel();
	    channel.port1.onmessage = lib$es6$promise$asap$$flush;
	    return function () {
	      channel.port2.postMessage(0);
	    };
	  }
	
	  function lib$es6$promise$asap$$useSetTimeout() {
	    return function () {
	      setTimeout(lib$es6$promise$asap$$flush, 1);
	    };
	  }
	
	  var lib$es6$promise$asap$$queue = new Array(1000);
	  function lib$es6$promise$asap$$flush() {
	    for (var i = 0; i < lib$es6$promise$asap$$len; i += 2) {
	      var callback = lib$es6$promise$asap$$queue[i];
	      var arg = lib$es6$promise$asap$$queue[i + 1];
	
	      callback(arg);
	
	      lib$es6$promise$asap$$queue[i] = undefined;
	      lib$es6$promise$asap$$queue[i + 1] = undefined;
	    }
	
	    lib$es6$promise$asap$$len = 0;
	  }
	
	  function lib$es6$promise$asap$$attemptVertx() {
	    try {
	      var r = require;
	      var vertx = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"vertx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	      lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
	      return lib$es6$promise$asap$$useVertxTimer();
	    } catch (e) {
	      return lib$es6$promise$asap$$useSetTimeout();
	    }
	  }
	
	  var lib$es6$promise$asap$$scheduleFlush;
	  // Decide what async method to use to triggering processing of queued callbacks:
	  if (lib$es6$promise$asap$$isNode) {
	    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
	  } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
	    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
	  } else if (lib$es6$promise$asap$$isWorker) {
	    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
	  } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
	    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
	  } else {
	    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
	  }
	
	  function lib$es6$promise$$internal$$noop() {}
	
	  var lib$es6$promise$$internal$$PENDING = void 0;
	  var lib$es6$promise$$internal$$FULFILLED = 1;
	  var lib$es6$promise$$internal$$REJECTED = 2;
	
	  var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	  function lib$es6$promise$$internal$$selfFulfillment() {
	    return new TypeError("You cannot resolve a promise with itself");
	  }
	
	  function lib$es6$promise$$internal$$cannotReturnOwn() {
	    return new TypeError('A promises callback cannot return that same promise.');
	  }
	
	  function lib$es6$promise$$internal$$getThen(promise) {
	    try {
	      return promise.then;
	    } catch (error) {
	      lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
	      return lib$es6$promise$$internal$$GET_THEN_ERROR;
	    }
	  }
	
	  function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	    try {
	      then.call(value, fulfillmentHandler, rejectionHandler);
	    } catch (e) {
	      return e;
	    }
	  }
	
	  function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
	    lib$es6$promise$asap$$asap(function (promise) {
	      var sealed = false;
	      var error = lib$es6$promise$$internal$$tryThen(then, thenable, function (value) {
	        if (sealed) {
	          return;
	        }
	        sealed = true;
	        if (thenable !== value) {
	          lib$es6$promise$$internal$$resolve(promise, value);
	        } else {
	          lib$es6$promise$$internal$$fulfill(promise, value);
	        }
	      }, function (reason) {
	        if (sealed) {
	          return;
	        }
	        sealed = true;
	
	        lib$es6$promise$$internal$$reject(promise, reason);
	      }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	      if (!sealed && error) {
	        sealed = true;
	        lib$es6$promise$$internal$$reject(promise, error);
	      }
	    }, promise);
	  }
	
	  function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
	    if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
	      lib$es6$promise$$internal$$fulfill(promise, thenable._result);
	    } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
	      lib$es6$promise$$internal$$reject(promise, thenable._result);
	    } else {
	      lib$es6$promise$$internal$$subscribe(thenable, undefined, function (value) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      }, function (reason) {
	        lib$es6$promise$$internal$$reject(promise, reason);
	      });
	    }
	  }
	
	  function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
	    if (maybeThenable.constructor === promise.constructor) {
	      lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
	    } else {
	      var then = lib$es6$promise$$internal$$getThen(maybeThenable);
	
	      if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
	      } else if (then === undefined) {
	        lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	      } else if (lib$es6$promise$utils$$isFunction(then)) {
	        lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
	      } else {
	        lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	      }
	    }
	  }
	
	  function lib$es6$promise$$internal$$resolve(promise, value) {
	    if (promise === value) {
	      lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
	    } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
	      lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
	    } else {
	      lib$es6$promise$$internal$$fulfill(promise, value);
	    }
	  }
	
	  function lib$es6$promise$$internal$$publishRejection(promise) {
	    if (promise._onerror) {
	      promise._onerror(promise._result);
	    }
	
	    lib$es6$promise$$internal$$publish(promise);
	  }
	
	  function lib$es6$promise$$internal$$fulfill(promise, value) {
	    if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	      return;
	    }
	
	    promise._result = value;
	    promise._state = lib$es6$promise$$internal$$FULFILLED;
	
	    if (promise._subscribers.length !== 0) {
	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
	    }
	  }
	
	  function lib$es6$promise$$internal$$reject(promise, reason) {
	    if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	      return;
	    }
	    promise._state = lib$es6$promise$$internal$$REJECTED;
	    promise._result = reason;
	
	    lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
	  }
	
	  function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
	    var subscribers = parent._subscribers;
	    var length = subscribers.length;
	
	    parent._onerror = null;
	
	    subscribers[length] = child;
	    subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
	    subscribers[length + lib$es6$promise$$internal$$REJECTED] = onRejection;
	
	    if (length === 0 && parent._state) {
	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
	    }
	  }
	
	  function lib$es6$promise$$internal$$publish(promise) {
	    var subscribers = promise._subscribers;
	    var settled = promise._state;
	
	    if (subscribers.length === 0) {
	      return;
	    }
	
	    var child,
	        callback,
	        detail = promise._result;
	
	    for (var i = 0; i < subscribers.length; i += 3) {
	      child = subscribers[i];
	      callback = subscribers[i + settled];
	
	      if (child) {
	        lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
	      } else {
	        callback(detail);
	      }
	    }
	
	    promise._subscribers.length = 0;
	  }
	
	  function lib$es6$promise$$internal$$ErrorObject() {
	    this.error = null;
	  }
	
	  var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	  function lib$es6$promise$$internal$$tryCatch(callback, detail) {
	    try {
	      return callback(detail);
	    } catch (e) {
	      lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
	      return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
	    }
	  }
	
	  function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
	    var hasCallback = lib$es6$promise$utils$$isFunction(callback),
	        value,
	        error,
	        succeeded,
	        failed;
	
	    if (hasCallback) {
	      value = lib$es6$promise$$internal$$tryCatch(callback, detail);
	
	      if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
	        failed = true;
	        error = value.error;
	        value = null;
	      } else {
	        succeeded = true;
	      }
	
	      if (promise === value) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
	        return;
	      }
	    } else {
	      value = detail;
	      succeeded = true;
	    }
	
	    if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	      // noop
	    } else if (hasCallback && succeeded) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      } else if (failed) {
	        lib$es6$promise$$internal$$reject(promise, error);
	      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, value);
	      }
	  }
	
	  function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
	    try {
	      resolver(function resolvePromise(value) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      }, function rejectPromise(reason) {
	        lib$es6$promise$$internal$$reject(promise, reason);
	      });
	    } catch (e) {
	      lib$es6$promise$$internal$$reject(promise, e);
	    }
	  }
	
	  function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
	    var enumerator = this;
	
	    enumerator._instanceConstructor = Constructor;
	    enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);
	
	    if (enumerator._validateInput(input)) {
	      enumerator._input = input;
	      enumerator.length = input.length;
	      enumerator._remaining = input.length;
	
	      enumerator._init();
	
	      if (enumerator.length === 0) {
	        lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
	      } else {
	        enumerator.length = enumerator.length || 0;
	        enumerator._enumerate();
	        if (enumerator._remaining === 0) {
	          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
	        }
	      }
	    } else {
	      lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
	    }
	  }
	
	  lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function (input) {
	    return lib$es6$promise$utils$$isArray(input);
	  };
	
	  lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function () {
	    return new Error('Array Methods must be provided an Array');
	  };
	
	  lib$es6$promise$enumerator$$Enumerator.prototype._init = function () {
	    this._result = new Array(this.length);
	  };
	
	  var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
	
	  lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function () {
	    var enumerator = this;
	
	    var length = enumerator.length;
	    var promise = enumerator.promise;
	    var input = enumerator._input;
	
	    for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	      enumerator._eachEntry(input[i], i);
	    }
	  };
	
	  lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function (entry, i) {
	    var enumerator = this;
	    var c = enumerator._instanceConstructor;
	
	    if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
	      if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
	        entry._onerror = null;
	        enumerator._settledAt(entry._state, i, entry._result);
	      } else {
	        enumerator._willSettleAt(c.resolve(entry), i);
	      }
	    } else {
	      enumerator._remaining--;
	      enumerator._result[i] = entry;
	    }
	  };
	
	  lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function (state, i, value) {
	    var enumerator = this;
	    var promise = enumerator.promise;
	
	    if (promise._state === lib$es6$promise$$internal$$PENDING) {
	      enumerator._remaining--;
	
	      if (state === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, value);
	      } else {
	        enumerator._result[i] = value;
	      }
	    }
	
	    if (enumerator._remaining === 0) {
	      lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
	    }
	  };
	
	  lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function (promise, i) {
	    var enumerator = this;
	
	    lib$es6$promise$$internal$$subscribe(promise, undefined, function (value) {
	      enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
	    }, function (reason) {
	      enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
	    });
	  };
	  function lib$es6$promise$promise$all$$all(entries) {
	    return new lib$es6$promise$enumerator$$default(this, entries).promise;
	  }
	  var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
	  function lib$es6$promise$promise$race$$race(entries) {
	    /*jshint validthis:true */
	    var Constructor = this;
	
	    var promise = new Constructor(lib$es6$promise$$internal$$noop);
	
	    if (!lib$es6$promise$utils$$isArray(entries)) {
	      lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
	      return promise;
	    }
	
	    var length = entries.length;
	
	    function onFulfillment(value) {
	      lib$es6$promise$$internal$$resolve(promise, value);
	    }
	
	    function onRejection(reason) {
	      lib$es6$promise$$internal$$reject(promise, reason);
	    }
	
	    for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	      lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
	    }
	
	    return promise;
	  }
	  var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
	  function lib$es6$promise$promise$resolve$$resolve(object) {
	    /*jshint validthis:true */
	    var Constructor = this;
	
	    if (object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.constructor === Constructor) {
	      return object;
	    }
	
	    var promise = new Constructor(lib$es6$promise$$internal$$noop);
	    lib$es6$promise$$internal$$resolve(promise, object);
	    return promise;
	  }
	  var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
	  function lib$es6$promise$promise$reject$$reject(reason) {
	    /*jshint validthis:true */
	    var Constructor = this;
	    var promise = new Constructor(lib$es6$promise$$internal$$noop);
	    lib$es6$promise$$internal$$reject(promise, reason);
	    return promise;
	  }
	  var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;
	
	  var lib$es6$promise$promise$$counter = 0;
	
	  function lib$es6$promise$promise$$needsResolver() {
	    throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	  }
	
	  function lib$es6$promise$promise$$needsNew() {
	    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	  }
	
	  var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
	  /**
	    Promise objects represent the eventual result of an asynchronous operation. The
	    primary way of interacting with a promise is through its `then` method, which
	    registers callbacks to receive either a promise's eventual value or the reason
	    why the promise cannot be fulfilled.
	     Terminology
	    -----------
	     - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	    - `thenable` is an object or function that defines a `then` method.
	    - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	    - `exception` is a value that is thrown using the throw statement.
	    - `reason` is a value that indicates why a promise was rejected.
	    - `settled` the final resting state of a promise, fulfilled or rejected.
	     A promise can be in one of three states: pending, fulfilled, or rejected.
	     Promises that are fulfilled have a fulfillment value and are in the fulfilled
	    state.  Promises that are rejected have a rejection reason and are in the
	    rejected state.  A fulfillment value is never a thenable.
	     Promises can also be said to *resolve* a value.  If this value is also a
	    promise, then the original promise's settled state will match the value's
	    settled state.  So a promise that *resolves* a promise that rejects will
	    itself reject, and a promise that *resolves* a promise that fulfills will
	    itself fulfill.
	      Basic Usage:
	    ------------
	     ```js
	    var promise = new Promise(function(resolve, reject) {
	      // on success
	      resolve(value);
	       // on failure
	      reject(reason);
	    });
	     promise.then(function(value) {
	      // on fulfillment
	    }, function(reason) {
	      // on rejection
	    });
	    ```
	     Advanced Usage:
	    ---------------
	     Promises shine when abstracting away asynchronous interactions such as
	    `XMLHttpRequest`s.
	     ```js
	    function getJSON(url) {
	      return new Promise(function(resolve, reject){
	        var xhr = new XMLHttpRequest();
	         xhr.open('GET', url);
	        xhr.onreadystatechange = handler;
	        xhr.responseType = 'json';
	        xhr.setRequestHeader('Accept', 'application/json');
	        xhr.send();
	         function handler() {
	          if (this.readyState === this.DONE) {
	            if (this.status === 200) {
	              resolve(this.response);
	            } else {
	              reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	            }
	          }
	        };
	      });
	    }
	     getJSON('/posts.json').then(function(json) {
	      // on fulfillment
	    }, function(reason) {
	      // on rejection
	    });
	    ```
	     Unlike callbacks, promises are great composable primitives.
	     ```js
	    Promise.all([
	      getJSON('/posts'),
	      getJSON('/comments')
	    ]).then(function(values){
	      values[0] // => postsJSON
	      values[1] // => commentsJSON
	       return values;
	    });
	    ```
	     @class Promise
	    @param {function} resolver
	    Useful for tooling.
	    @constructor
	  */
	  function lib$es6$promise$promise$$Promise(resolver) {
	    this._id = lib$es6$promise$promise$$counter++;
	    this._state = undefined;
	    this._result = undefined;
	    this._subscribers = [];
	
	    if (lib$es6$promise$$internal$$noop !== resolver) {
	      if (!lib$es6$promise$utils$$isFunction(resolver)) {
	        lib$es6$promise$promise$$needsResolver();
	      }
	
	      if (!(this instanceof lib$es6$promise$promise$$Promise)) {
	        lib$es6$promise$promise$$needsNew();
	      }
	
	      lib$es6$promise$$internal$$initializePromise(this, resolver);
	    }
	  }
	
	  lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
	  lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
	  lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
	  lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
	  lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
	  lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
	  lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;
	
	  lib$es6$promise$promise$$Promise.prototype = {
	    constructor: lib$es6$promise$promise$$Promise,
	
	    /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.
	       ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```
	       Chaining
	      --------
	       The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.
	       ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });
	       findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	       ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```
	       Assimilation
	      ------------
	       Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.
	       ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```
	       If the assimliated promise rejects, then the downstream promise will also reject.
	       ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```
	       Simple Example
	      --------------
	       Synchronous Example
	       ```javascript
	      var result;
	       try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	       Errback Example
	       ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```
	       Promise Example;
	       ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```
	       Advanced Example
	      --------------
	       Synchronous Example
	       ```javascript
	      var author, books;
	       try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	       Errback Example
	       ```js
	       function foundBooks(books) {
	       }
	       function failure(reason) {
	       }
	       findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```
	       Promise Example;
	       ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```
	       @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	    */
	    then: function then(onFulfillment, onRejection) {
	      var parent = this;
	      var state = parent._state;
	
	      if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
	        return this;
	      }
	
	      var child = new this.constructor(lib$es6$promise$$internal$$noop);
	      var result = parent._result;
	
	      if (state) {
	        var callback = arguments[state - 1];
	        lib$es6$promise$asap$$asap(function () {
	          lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
	        });
	      } else {
	        lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
	      }
	
	      return child;
	    },
	
	    /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.
	       ```js
	      function findAuthor(){
	        throw new Error('couldn't find that author');
	      }
	       // synchronous
	      try {
	        findAuthor();
	      } catch(reason) {
	        // something went wrong
	      }
	       // async with promises
	      findAuthor().catch(function(reason){
	        // something went wrong
	      });
	      ```
	       @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	    */
	    'catch': function _catch(onRejection) {
	      return this.then(null, onRejection);
	    }
	  };
	  function lib$es6$promise$polyfill$$polyfill() {
	    var local;
	
	    if (typeof global !== 'undefined') {
	      local = global;
	    } else if (typeof self !== 'undefined') {
	      local = self;
	    } else {
	      try {
	        local = Function('return this')();
	      } catch (e) {
	        throw new Error('polyfill failed because global object is unavailable in this environment');
	      }
	    }
	
	    var P = local.Promise;
	
	    if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
	      return;
	    }
	
	    local.Promise = lib$es6$promise$promise$$default;
	  }
	  var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;
	
	  var lib$es6$promise$umd$$ES6Promise = {
	    'Promise': lib$es6$promise$promise$$default,
	    'polyfill': lib$es6$promise$polyfill$$default
	  };
	
	  /* global define:true module:true window: true */
	  if ("function" === 'function' && __webpack_require__(537)['amd']) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return lib$es6$promise$umd$$ES6Promise;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module !== 'undefined' && module['exports']) {
	    module['exports'] = lib$es6$promise$umd$$ES6Promise;
	  } else if (typeof this !== 'undefined') {
	    this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	  }
	
	  lib$es6$promise$polyfill$$default();
	}).call(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), (function() { return this; }()), __webpack_require__(241)(module)))

/***/ },

/***/ 537:
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(539);

/***/ },

/***/ 539:
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

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(541);

/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	/*jshint forin:false, eqnull:true*/
	/* globals JSYG*/
	
	(function (factory) {
	
	    if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(481), __webpack_require__(479)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof JSYG != "undefined") {
	        if (JSYG.Path) factory(JSYG);else throw new Error("You need JSYG.Path");
	    } else throw new Error("JSYG is needed");
	})(function (JSYG) {
	
	    "use strict";
	
	    /**
	     * Tracé de polylignes et polygones SVG à la souris
	     * @param opt optionnel, objet définissant les options.
	     * @returns {PolylineDrawer}
	     */
	
	    function PolylineDrawer(opt) {
	
	        if (opt) this.set(opt);
	    }
	
	    PolylineDrawer.prototype = new JSYG.StdConstruct();
	
	    PolylineDrawer.prototype.constructor = PolylineDrawer;
	    /**
	     * zone sur laquelle on affecte les écouteurs d'évènements (si null, prend le parent svg le plus éloigné)
	     */
	    PolylineDrawer.prototype.area = null;
	    /**
	     * Indique si un tracé est en cours ou non
	     */
	    PolylineDrawer.prototype.inProgress = false;
	    /**
	     * Indique la force de l'aimantation en pixels écran des points extremes entre eux.
	     * La valeur null permet d'annuler l'aimantation
	     */
	    PolylineDrawer.prototype.strengthClosingMagnet = 5;
	    /**
	     * fonction(s) à éxécuter pendant le tracé
	     */
	    PolylineDrawer.prototype.ondraw = false;
	    /**
	     * fonction(s) à éxécuter avant la fin du tracé
	     */
	    PolylineDrawer.prototype.onbeforeend = false;
	    /**
	     * fonction(s) à éxécuter à la fin du tracé
	     */
	    PolylineDrawer.prototype.onend = false;
	    /**
	     * fonction(s) à éxécuter avant un nouveau point
	     */
	    PolylineDrawer.prototype.onbeforenewseg = false;
	    /**
	     * fonction(s) à éxécuter à la création d'un nouveau point
	     */
	    PolylineDrawer.prototype.onnewseg = false;
	
	    function isClosed(points) {
	
	        var seg1 = points.getItem(0),
	            seg2 = points.getItem(points.numberOfItems - 1);
	
	        return seg1.x == seg2.x && seg1.y == seg2.y;
	    }
	    /**
	     * Commence le tracé point à point.
	     * @param shape {JSYG} élément SVG polyline ou polygon
	     * @param e {JSYG.Event}
	     * @returns {PolylineDrawer}
	     */
	    PolylineDrawer.prototype.draw = function (polyElmt, e) {
	
	        var poly = new JSYG(polyElmt);
	
	        if (!poly.parent().length) throw new Error("Il faut attacher l'élément à l'arbre DOM");
	
	        var jSvg = this.area ? new JSYG(this.area) : poly.offsetParent('farthest'),
	            mtx = poly.getMtx('screen').inverse(),
	            xy = new JSYG.Vect(e.clientX, e.clientY).mtx(mtx),
	            node = poly[0],
	            points = node.points,
	            that = this;
	
	        function mousemove(e) {
	
	            var mtx = poly.getMtx('screen').inverse(),
	                xy = new JSYG.Vect(e.clientX, e.clientY).mtx(mtx),
	                nbSegs = points.numberOfItems,
	                seg = points.getItem(nbSegs - 1),
	                pos,
	                first,
	                ref;
	
	            if (that.strengthClosingMagnet != null) {
	
	                first = points.getItem(0);
	                ref = new JSYG.Vect(first.x, first.y).mtx(mtx.inverse());
	                pos = new JSYG.Vect(e.clientX, e.clientY);
	
	                if (JSYG.distance(ref, pos) < that.strengthClosingMagnet) {
	                    xy.x = first.x;
	                    xy.y = first.y;
	                }
	            }
	
	            seg.x = xy.x;
	            seg.y = xy.y;
	
	            points.replaceItem(seg, nbSegs - 1);
	
	            that.trigger('draw', node, e);
	        }
	
	        function mousedown(e) {
	
	            if (that.trigger('beforenewseg', node, e) === false) return;
	
	            //si la courbe est fermée, un clic suffit pour terminer.
	            if (points.numberOfItems > 3 && isClosed(points)) {
	
	                if (that.trigger('beforeend', node, e) === false) return;
	                return that.end();
	            }
	
	            if (e.detail === 2) return; //pas d'action au double-clic
	
	            var mtx = poly.getMtx('screen').inverse(),
	                xy = new JSYG.Vect(e.clientX, e.clientY).mtx(mtx);
	
	            points.appendItem(xy.toSVGPoint());
	
	            that.trigger('newseg', node, e);
	        }
	
	        function dblclick(e, keepLastSeg) {
	
	            points.removeItem(points.numberOfItems - 1);
	
	            if (that.trigger('beforeend', node, e) === false) return;
	
	            //points.removeItem(points.numberOfItems-1);
	
	            that.end();
	        }
	
	        this.end = function () {
	
	            var first;
	
	            jSvg.off({
	                'mousemove': mousemove,
	                'mousedown': mousedown,
	                'dblclick': dblclick
	            });
	
	            this.inProgress = false;
	
	            this.trigger('end', node, e);
	
	            this.end = function () {
	                return this;
	            };
	        };
	
	        if (points.numberOfItems === 0) points.appendItem(xy.toSVGPoint());
	
	        this.inProgress = true;
	
	        jSvg.on({
	            'mousemove': mousemove,
	            'mousedown': mousedown,
	            'dblclick': dblclick
	        });
	
	        mousedown(e);
	
	        return this;
	    };
	
	    /**
	     * Termine le tracé.
	     * @returns {PolylineDrawer}
	     */
	    PolylineDrawer.prototype.end = function () {
	        return this;
	    };
	
	    JSYG.PolylineDrawer = PolylineDrawer;
	
	    return PolylineDrawer;
	});

/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(543);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(449)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./JSYG.FullEditor.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./JSYG.FullEditor.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(388)();
	// imports
	
	
	// module
	exports.push([module.id, ".jsyg-doc-frame {\n    fill: #FFF;\n    stroke: #000;\n    stroke-width: 0.2;\n}\n.jsyg-doc-shadow {\n    fill: #808080;\n    stroke: none;\n}", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=2.bundle.js.map