"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getDisplayName = _interopRequireDefault(require("../../util/getDisplayName"));

var _safeContextCall = _interopRequireDefault(require("../../util/safeContextCall"));

var _contextNamespace = require("../../util/contextNamespace");

// We currently need to keep the dropdown open if an item with `href` is clicked, to avoid the
// analytics package to track the href value without the event target disappearing. Without this
// requirement, we could just use a native click event all the way up to DropdownMenuStateless,
// and could get rid of this HOC and DropdownItemClickManager.
// HOC that typically wraps @atlaskit/item
var withItemClick = function withItemClick(WrappedItem) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(WithItemClick, _Component);

    function WithItemClick() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, WithItemClick);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(WithItemClick)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "callContextFn", (0, _safeContextCall.default)((0, _assertThisInitialized2.default)(_this), _contextNamespace.clickManagerContext));
      (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "shouldCloseAfterClick", function () {
        return !_this.props.isDisabled && !_this.props.href;
      });
      (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function (event) {
        _this.props.onClick(event);

        if (_this.shouldCloseAfterClick()) {
          _this.callContextFn('itemClicked');
        }
      });
      (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "handleKeyDown", function (event) {
        if (_this.props.onKeyDown) {
          _this.props.onKeyDown(event);
        } else if (event.key === 'Space' || event.key === 'Enter') {
          _this.handleClick(event);
        }
      });
      return _this;
    }

    (0, _createClass2.default)(WithItemClick, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["children"]);
        return _react.default.createElement(WrappedItem, (0, _extends2.default)({}, otherProps, {
          onClick: this.handleClick,
          onKeyDown: this.handleKeyDown
        }), children);
      }
    }]);
    return WithItemClick;
  }(_react.Component), (0, _defineProperty3.default)(_class, "displayName", "WithItemClick(".concat((0, _getDisplayName.default)(WrappedItem), ")")), (0, _defineProperty3.default)(_class, "defaultProps", {
    onClick: function onClick() {}
  }), (0, _defineProperty3.default)(_class, "contextTypes", (0, _defineProperty3.default)({}, _contextNamespace.clickManagerContext, _propTypes.default.object)), _temp;
};

var _default = withItemClick;
exports.default = _default;