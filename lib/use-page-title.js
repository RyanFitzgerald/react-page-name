"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePageTitle = void 0;

var _react = require("react");

var usePageTitle = function usePageTitle() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  (0, _react.useEffect)(function () {
    // Change the page title if provided
    if (title) {
      document.title = title;
    }
  });
};

exports.usePageTitle = usePageTitle;