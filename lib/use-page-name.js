"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePageName = void 0;

var _react = require("react");

var usePageName = function usePageName() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  (0, _react.useEffect)(function () {
    // Change the page name if provided
    if (name) {
      document.title = name;
    }
  }, [name]);
};

exports.usePageName = usePageName;