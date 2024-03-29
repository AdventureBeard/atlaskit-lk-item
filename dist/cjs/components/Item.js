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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Item = _interopRequireDefault(require("../styled/Item"));

var _ItemParts = require("../styled/ItemParts");

var Item =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Item, _Component);

  // eslint-disable-next-line react/sort-comp
  function Item(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Item);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Item).call(this, props)); // The type of element rendered at the root of render() can vary based on the `href`
    // and `linkComponent` props provided. We generate this component here to avoid re-
    // generating the component inside render(). This is for performance reasons, and also
    // allows us to avoid generating a new `ref` for the root element each render().

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "rootComponent", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "ref", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setRef", function (ref) {
      _this.ref = ref;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "href", function () {
      return _this.props.isDisabled ? null : _this.props.href;
    });
    _this.rootComponent = (0, _Item.default)({
      href: _this.href(),
      linkComponent: props.linkComponent
    });
    return _this;
  }

  (0, _createClass2.default)(Item, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.ref && this.props.autoFocus) {
        this.ref.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _onClick = _this$props.onClick,
          _onKeyDown = _this$props.onKeyDown,
          isCompact = _this$props.isCompact,
          isDisabled = _this$props.isDisabled,
          isDragging = _this$props.isDragging,
          isHidden = _this$props.isHidden,
          isSelected = _this$props.isSelected,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseLeave = _this$props.onMouseLeave,
          role = _this$props.role,
          dnd = _this$props.dnd,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["onClick", "onKeyDown", "isCompact", "isDisabled", "isDragging", "isHidden", "isSelected", "onMouseEnter", "onMouseLeave", "role", "dnd"]);
      var Root = this.rootComponent;
      var dragHandleProps = dnd && dnd.dragHandleProps || null;
      var patchedEventHandlers = {
        onClick: function onClick(event) {
          var original = function original() {
            if (!isDisabled && _onClick) {
              _onClick(event);
            }
          };

          if (!dragHandleProps || !dragHandleProps.onClick) {
            original();
            return;
          } // Drag and drop has its own disabled mechansim
          // So not checking for isDisabled


          dragHandleProps.onClick(event); // if default is prevent - do not fire the onClick prop

          if (event.defaultPrevented) {
            return;
          }

          original();
        },
        onMouseDown: function onMouseDown(event) {
          if (dragHandleProps && dragHandleProps.onMouseDown) {
            dragHandleProps.onMouseDown(event);
          } // We want to prevent the item from getting focus when clicked


          event.preventDefault();
        },
        onKeyDown: function onKeyDown(event) {
          var original = function original() {
            if (!isDisabled && _onKeyDown) {
              _onKeyDown(event);
            }
          };

          if (!dragHandleProps || !dragHandleProps.onKeyDown) {
            original();
            return;
          }

          dragHandleProps.onKeyDown(event); // if default is prevent - do not fire other handlers

          if (event.defaultPrevented) {
            return;
          } // not allowing keyboard events on the element while dragging


          if (isDragging) {
            return;
          }

          original();
        }
      };

      var patchedInnerRef = function patchedInnerRef(ref) {
        _this2.setRef(ref);

        if (dnd && dnd.innerRef) {
          dnd.innerRef(ref);
        }
      };

      return _react.default.createElement(Root, (0, _extends2.default)({
        "aria-disabled": isDisabled,
        href: this.href(),
        isCompact: isCompact,
        isDisabled: isDisabled,
        isDragging: isDragging,
        isHidden: isHidden,
        isSelected: isSelected,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        role: role,
        tabIndex: isDisabled || isHidden || this.props.href ? null : 0,
        target: this.props.target,
        title: this.props.title,
        innerRef: patchedInnerRef
      }, dnd && dnd.draggableProps, dragHandleProps, patchedEventHandlers, otherProps, {
        className: "ak-item"
      }), !!this.props.elemBefore && _react.default.createElement(_ItemParts.Before, {
        className: "ak-item-before",
        isCompact: isCompact
      }, this.props.elemBefore), _react.default.createElement(_ItemParts.ContentWrapper, {
        className: "ak-item-content-wrapper"
      }, _react.default.createElement(_ItemParts.Content, {
        allowMultiline: this.props.shouldAllowMultiline,
        className: "ak-item-content"
      }, this.props.children), !!this.props.description && _react.default.createElement(_ItemParts.Description, {
        isCompact: this.props.isCompact,
        isDisabled: this.props.isDisabled,
        className: "ak-item-description"
      }, this.props.description)), !!this.props.elemAfter && _react.default.createElement(_ItemParts.After, {
        className: "ak-item-after",
        isCompact: isCompact
      }, this.props.elemAfter));
    }
  }]);
  return Item;
}(_react.Component);

exports.default = Item;
(0, _defineProperty2.default)(Item, "defaultProps", {
  autoFocus: false,
  description: '',
  isCompact: false,
  isDisabled: false,
  isHidden: false,
  role: 'button',
  shouldAllowMultiline: false
});