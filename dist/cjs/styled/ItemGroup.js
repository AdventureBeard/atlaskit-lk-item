"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupTitleText = exports.GroupTitleAfter = exports.GroupTitle = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _theme = require("../util/theme");

var getPadding = function getPadding(_ref) {
  var isCompact = _ref.isCompact,
      theme = _ref.theme;
  var paddingType = isCompact ? 'compact' : 'default';

  var _getThemeStyle = (0, _theme.getThemeStyle)(theme[_theme.themeNamespace], paddingType, 'padding'),
      _getThemeStyle$bottom = _getThemeStyle.bottom,
      bottom = _getThemeStyle$bottom === void 0 ? 0 : _getThemeStyle$bottom,
      _getThemeStyle$left = _getThemeStyle.left,
      left = _getThemeStyle$left === void 0 ? 0 : _getThemeStyle$left,
      _getThemeStyle$right = _getThemeStyle.right,
      right = _getThemeStyle$right === void 0 ? 0 : _getThemeStyle$right,
      _getThemeStyle$top = _getThemeStyle.top,
      top = _getThemeStyle$top === void 0 ? 0 : _getThemeStyle$top;

  return (0, _styledComponents.css)(["\n    padding: ", "px ", "px ", "px ", "px;\n  "], top, right, bottom, left);
}; // eslint-disable-next-line import/prefer-default-export


var GroupTitle = _styledComponents.default.div.withConfig({
  displayName: "ItemGroup__GroupTitle",
  componentId: "ofbfv9-0"
})(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex: 1 1 auto;\n  ", ";\n"], function (_ref2) {
  var theme = _ref2.theme;
  return (0, _theme.getThemeStyle)(theme[_theme.themeNamespace], 'secondaryText', 'default');
}, getPadding);

exports.GroupTitle = GroupTitle;
GroupTitle.displayName = 'ItemGroupTitle';

var GroupTitleAfter = _styledComponents.default.div.withConfig({
  displayName: "ItemGroup__GroupTitleAfter",
  componentId: "ofbfv9-1"
})(["\n  flex: 0 0 auto;\n  margin-right: -", "px;\n"], _theme.gridSize / 2);

exports.GroupTitleAfter = GroupTitleAfter;
GroupTitleAfter.displayName = 'ItemGroupTitleAfter';

var GroupTitleText = _styledComponents.default.div.withConfig({
  displayName: "ItemGroup__GroupTitleText",
  componentId: "ofbfv9-2"
})(["\n  flex: 1 1 auto;\n  font-size: ", "px;\n  line-height: 1;\n  text-transform: uppercase;\n  /* Required for children to truncate */\n  min-width: 0;\n"], _constants.fontSizeSmall);

exports.GroupTitleText = GroupTitleText;
GroupTitleText.displayName = 'ItemGroupTitleText';