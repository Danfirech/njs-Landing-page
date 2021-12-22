webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/drawer.js":
/*!**********************************!*\
  !*** ./src/components/drawer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Drawer; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-drawer */ \"./node_modules/rc-drawer/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/danielpossehl/Desktop/Projects/NEXT.js projects/njs-landingpage/njs-Landing-page/src/components/drawer.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nfunction Drawer(_ref) {\n  var className = _ref.className,\n      children = _ref.children,\n      closeButton = _ref.closeButton,\n      closeButtonStyle = _ref.closeButtonStyle,\n      drawerHandler = _ref.drawerHandler,\n      toggleHandler = _ref.toggleHandler,\n      open = _ref.open,\n      width = _ref.width,\n      placement = _ref.placement,\n      drawerStyle = _ref.drawerStyle,\n      closeBtnStyle = _ref.closeBtnStyle,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"className\", \"children\", \"closeButton\", \"closeButtonStyle\", \"drawerHandler\", \"toggleHandler\", \"open\", \"width\", \"placement\", \"drawerStyle\", \"closeBtnStyle\"]);\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(rc_drawer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    open: open,\n    onClose: toggleHandler,\n    className: \"drawer \".concat(className || \"\").trim(),\n    width: width,\n    placement: placement,\n    handler: false,\n    lelve: null,\n    duration: \"0.4s\"\n  }, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }), closeButton && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    as: \"div\",\n    onClick: toggleHandler,\n    sx: closeBtnStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, closeButton), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    sx: drawerStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, children)), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    className: \"drawer__handler\",\n    style: {\n      display: \"inline-block\"\n    },\n    onClick: toggleHandler,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, drawerHandler));\n}\n_c = Drawer;\nDrawer.defaultProps = {\n  width: \"320px\",\n  placement: \"left\"\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Drawer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZHJhd2VyLmpzPzI4NzAiXSwibmFtZXMiOlsiRHJhd2VyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJjbG9zZUJ1dHRvbiIsImNsb3NlQnV0dG9uU3R5bGUiLCJkcmF3ZXJIYW5kbGVyIiwidG9nZ2xlSGFuZGxlciIsIm9wZW4iLCJ3aWR0aCIsInBsYWNlbWVudCIsImRyYXdlclN0eWxlIiwiY2xvc2VCdG5TdHlsZSIsInByb3BzIiwidHJpbSIsImRpc3BsYXkiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsT0FhWjtBQUFBLE1BWkRDLFNBWUMsUUFaREEsU0FZQztBQUFBLE1BWERDLFFBV0MsUUFYREEsUUFXQztBQUFBLE1BVkRDLFdBVUMsUUFWREEsV0FVQztBQUFBLE1BVERDLGdCQVNDLFFBVERBLGdCQVNDO0FBQUEsTUFSREMsYUFRQyxRQVJEQSxhQVFDO0FBQUEsTUFQREMsYUFPQyxRQVBEQSxhQU9DO0FBQUEsTUFOREMsSUFNQyxRQU5EQSxJQU1DO0FBQUEsTUFMREMsS0FLQyxRQUxEQSxLQUtDO0FBQUEsTUFKREMsU0FJQyxRQUpEQSxTQUlDO0FBQUEsTUFIREMsV0FHQyxRQUhEQSxXQUdDO0FBQUEsTUFGREMsYUFFQyxRQUZEQSxhQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaURBQUQ7QUFDRSxRQUFJLEVBQUVMLElBRFI7QUFFRSxXQUFPLEVBQUVELGFBRlg7QUFHRSxhQUFTLEVBQUUsaUJBQVVMLFNBQVMsSUFBSSxFQUF2QixFQUE0QlksSUFBNUIsRUFIYjtBQUlFLFNBQUssRUFBRUwsS0FKVDtBQUtFLGFBQVMsRUFBRUMsU0FMYjtBQU1FLFdBQU8sRUFBRSxLQU5YO0FBT0UsU0FBSyxFQUFFLElBUFQ7QUFRRSxZQUFRLEVBQUU7QUFSWixLQVNNRyxLQVROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFXR1QsV0FBVyxJQUNWLE1BQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUMsS0FBUjtBQUFjLFdBQU8sRUFBRUcsYUFBdkI7QUFBc0MsTUFBRSxFQUFFSyxhQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dSLFdBREgsQ0FaSixFQWdCRSxNQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFTyxXQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUJSLFFBQXZCLENBaEJGLENBREYsRUFtQkUsTUFBQyw0Q0FBRDtBQUNFLGFBQVMsRUFBQyxpQkFEWjtBQUVFLFNBQUssRUFBRTtBQUFFWSxhQUFPLEVBQUU7QUFBWCxLQUZUO0FBR0UsV0FBTyxFQUFFUixhQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR0QsYUFMSCxDQW5CRixDQURGO0FBNkJEO0tBM0N1QkwsTTtBQTZDeEJBLE1BQU0sQ0FBQ2UsWUFBUCxHQUFzQjtBQUNwQlAsT0FBSyxFQUFFLE9BRGE7QUFFcEJDLFdBQVMsRUFBRTtBQUZTLENBQXRCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvZHJhd2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCBSY0RyYXdlciBmcm9tIFwicmMtZHJhd2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyYXdlcih7XG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG4gIGNsb3NlQnV0dG9uLFxuICBjbG9zZUJ1dHRvblN0eWxlLFxuICBkcmF3ZXJIYW5kbGVyLFxuICB0b2dnbGVIYW5kbGVyLFxuICBvcGVuLFxuICB3aWR0aCxcbiAgcGxhY2VtZW50LFxuICBkcmF3ZXJTdHlsZSxcbiAgY2xvc2VCdG5TdHlsZSxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8UmNEcmF3ZXJcbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgb25DbG9zZT17dG9nZ2xlSGFuZGxlcn1cbiAgICAgICAgY2xhc3NOYW1lPXtgZHJhd2VyICR7Y2xhc3NOYW1lIHx8IFwiXCJ9YC50cmltKCl9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgICAgIGhhbmRsZXI9e2ZhbHNlfVxuICAgICAgICBsZWx2ZT17bnVsbH1cbiAgICAgICAgZHVyYXRpb249e1wiMC40c1wifVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjbG9zZUJ1dHRvbiAmJiAoXG4gICAgICAgICAgPEJveCBhcz1cImRpdlwiIG9uQ2xpY2s9e3RvZ2dsZUhhbmRsZXJ9IHN4PXtjbG9zZUJ0blN0eWxlfT5cbiAgICAgICAgICAgIHtjbG9zZUJ1dHRvbn1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgICAgPEJveCBzeD17ZHJhd2VyU3R5bGV9PntjaGlsZHJlbn08L0JveD5cbiAgICAgIDwvUmNEcmF3ZXI+XG4gICAgICA8Qm94XG4gICAgICAgIGNsYXNzTmFtZT1cImRyYXdlcl9faGFuZGxlclwiXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX1cbiAgICAgICAgb25DbGljaz17dG9nZ2xlSGFuZGxlcn1cbiAgICAgID5cbiAgICAgICAge2RyYXdlckhhbmRsZXJ9XG4gICAgICA8L0JveD5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuXG5EcmF3ZXIuZGVmYXVsdFByb3BzID0ge1xuICB3aWR0aDogXCIzMjBweFwiLFxuICBwbGFjZW1lbnQ6IFwibGVmdFwiLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/drawer.js\n");

/***/ })

})