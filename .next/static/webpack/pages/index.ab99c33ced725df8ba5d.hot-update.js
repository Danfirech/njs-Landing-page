webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Banner; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/banner-thumb.png */ \"./src/assets/banner-thumb.png\");\n/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/shape-left.png */ \"./src/assets/shape-left.png\");\n/* harmony import */ var assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/shape-right.png */ \"./src/assets/shape-right.png\");\n/* harmony import */ var assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/danielpossehl/Desktop/Projects/NEXT.js projects/njs-landingpage/njs-Landing-page/src/sections/banner.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\nfunction Banner() {\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"section\", {\n    sx: styles.banner,\n    id: \"home\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    sx: styles.banner.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.banner.contentBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n    as: \"h1\",\n    variant: \"heroPrimary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 11\n    }\n  }))));\n}\n_c = Banner;\nvar styles = {\n  banner: {\n    pt: [\"140px\", \"145px\", \"155px\", \"170px\", null, null, \"180px\", \"215px\"],\n    pb: [2, null, 0, null, 2, 0, null, 5],\n    position: \"relative\",\n    zIndex: 2,\n    \"&::before\": {\n      position: \"absolute\",\n      content: '\"\"',\n      bottom: 6,\n      left: 0,\n      height: \"100%\",\n      width: \"100%\",\n      zIndex: -1,\n      backgroundImage: \"url(\".concat(assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3___default.a, \")\"),\n      backgroundRepeat: \"no-repeat\",\n      backgroundPosition: \"bottom left\",\n      backgroundSize: \"36%\"\n    },\n    \"&::after\": {\n      position: \"absolute\",\n      content: '\"\"',\n      bottom: \"40px\",\n      right: 0,\n      height: \"100%\",\n      width: \"100%\",\n      zIndex: -1,\n      backgroundImage: \"url(\".concat(assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4___default.a, \")\"),\n      backgroundRepeat: \"no-repeat\",\n      backgroundPosition: \"bottom right\",\n      backgroundSize: \"32%\"\n    },\n    container: {\n      minHeight: \"inherit\",\n      display: \"flex\",\n      flexDirection: \"column\",\n      justifyContent: \"center\"\n    },\n    contentBox: {\n      width: [\"100%\", \"90%\", \"535px\", null, \"57%\", \"60%\", \"68%\", \"60%\"],\n      mx: \"auto\",\n      textAlign: \"center\",\n      mb: [\"40px\", null, null, null, null, 7]\n    },\n    imageBox: {\n      justifyContent: \"center\",\n      textAlign: \"center\",\n      display: \"inline-flex\",\n      mb: [0, null, -6, null, null, \"-40px\", null, -3],\n      img: {\n        position: \"relative\",\n        height: [245, \"auto\"]\n      }\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Banner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcz80ODZiIl0sIm5hbWVzIjpbIkJhbm5lciIsInN0eWxlcyIsImJhbm5lciIsImNvbnRhaW5lciIsImNvbnRlbnRCb3giLCJwdCIsInBiIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjb250ZW50IiwiYm90dG9tIiwibGVmdCIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZEltYWdlIiwiU2hhcGVMZWZ0IiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwicmlnaHQiLCJTaGFwZVJpZ2h0IiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsIm14IiwidGV4dEFsaWduIiwibWIiLCJpbWFnZUJveCIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUMvQixTQUNFO0FBQVMsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQXBCO0FBQTRCLE1BQUUsRUFBQyxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0RBQUQ7QUFBVyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVGLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRSxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsZ0RBQUQ7QUFBUyxNQUFFLEVBQUMsSUFBWjtBQUFpQixXQUFPLEVBQUMsYUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixDQURGO0FBU0Q7S0FWdUJKLE07QUFZeEIsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLFFBQU0sRUFBRTtBQUNORyxNQUFFLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixFQUFxQyxJQUFyQyxFQUEyQyxJQUEzQyxFQUFpRCxPQUFqRCxFQUEwRCxPQUExRCxDQURFO0FBRU5DLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLElBQWIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsSUFBekIsRUFBK0IsQ0FBL0IsQ0FGRTtBQUdOQyxZQUFRLEVBQUUsVUFISjtBQUlOQyxVQUFNLEVBQUUsQ0FKRjtBQUtOLGlCQUFhO0FBQ1hELGNBQVEsRUFBRSxVQURDO0FBRVhFLGFBQU8sRUFBRSxJQUZFO0FBR1hDLFlBQU0sRUFBRSxDQUhHO0FBSVhDLFVBQUksRUFBRSxDQUpLO0FBS1hDLFlBQU0sRUFBRSxNQUxHO0FBTVhDLFdBQUssRUFBRSxNQU5JO0FBT1hMLFlBQU0sRUFBRSxDQUFDLENBUEU7QUFRWE0scUJBQWUsZ0JBQVNDLDREQUFULE1BUko7QUFTWEMsc0JBQWdCLGFBVEw7QUFVWEMsd0JBQWtCLEVBQUUsYUFWVDtBQVdYQyxvQkFBYyxFQUFFO0FBWEwsS0FMUDtBQWtCTixnQkFBWTtBQUNWWCxjQUFRLEVBQUUsVUFEQTtBQUVWRSxhQUFPLEVBQUUsSUFGQztBQUdWQyxZQUFNLEVBQUUsTUFIRTtBQUlWUyxXQUFLLEVBQUUsQ0FKRztBQUtWUCxZQUFNLEVBQUUsTUFMRTtBQU1WQyxXQUFLLEVBQUUsTUFORztBQU9WTCxZQUFNLEVBQUUsQ0FBQyxDQVBDO0FBUVZNLHFCQUFlLGdCQUFTTSw2REFBVCxNQVJMO0FBU1ZKLHNCQUFnQixhQVROO0FBVVZDLHdCQUFrQixFQUFFLGNBVlY7QUFXVkMsb0JBQWMsRUFBRTtBQVhOLEtBbEJOO0FBK0JOZixhQUFTLEVBQUU7QUFDVGtCLGVBQVMsRUFBRSxTQURGO0FBRVRDLGFBQU8sRUFBRSxNQUZBO0FBR1RDLG1CQUFhLEVBQUUsUUFITjtBQUlUQyxvQkFBYyxFQUFFO0FBSlAsS0EvQkw7QUFxQ05wQixjQUFVLEVBQUU7QUFDVlMsV0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsT0FBaEIsRUFBeUIsSUFBekIsRUFBK0IsS0FBL0IsRUFBc0MsS0FBdEMsRUFBNkMsS0FBN0MsRUFBb0QsS0FBcEQsQ0FERztBQUVWWSxRQUFFLEVBQUUsTUFGTTtBQUdWQyxlQUFTLEVBQUUsUUFIRDtBQUlWQyxRQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUMsQ0FBakM7QUFKTSxLQXJDTjtBQTJDTkMsWUFBUSxFQUFFO0FBQ1JKLG9CQUFjLEVBQUUsUUFEUjtBQUVSRSxlQUFTLEVBQUUsUUFGSDtBQUdSSixhQUFPLEVBQUUsYUFIRDtBQUlSSyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQUMsQ0FBWCxFQUFjLElBQWQsRUFBb0IsSUFBcEIsRUFBMEIsT0FBMUIsRUFBbUMsSUFBbkMsRUFBeUMsQ0FBQyxDQUExQyxDQUpJO0FBS1JFLFNBQUcsRUFBRTtBQUNIdEIsZ0JBQVEsRUFBRSxVQURQO0FBRUhLLGNBQU0sRUFBRSxDQUFDLEdBQUQsRUFBTSxNQUFOO0FBRkw7QUFMRztBQTNDSjtBQURLLENBQWYiLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvYmFubmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBIZWFkaW5nLCBUZXh0LCBJbWFnZSwgQnV0dG9uIH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgQmFubmVySW1nIGZyb20gXCJhc3NldHMvYmFubmVyLXRodW1iLnBuZ1wiO1xuaW1wb3J0IFNoYXBlTGVmdCBmcm9tIFwiYXNzZXRzL3NoYXBlLWxlZnQucG5nXCI7XG5pbXBvcnQgU2hhcGVSaWdodCBmcm9tIFwiYXNzZXRzL3NoYXBlLXJpZ2h0LnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gc3g9e3N0eWxlcy5iYW5uZXJ9IGlkPVwiaG9tZVwiPlxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmJhbm5lci5jb250YWluZXJ9PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYmFubmVyLmNvbnRlbnRCb3h9PlxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiB2YXJpYW50PVwiaGVyb1ByaW1hcnlcIj48L0hlYWRpbmc+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGJhbm5lcjoge1xuICAgIHB0OiBbXCIxNDBweFwiLCBcIjE0NXB4XCIsIFwiMTU1cHhcIiwgXCIxNzBweFwiLCBudWxsLCBudWxsLCBcIjE4MHB4XCIsIFwiMjE1cHhcIl0sXG4gICAgcGI6IFsyLCBudWxsLCAwLCBudWxsLCAyLCAwLCBudWxsLCA1XSxcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIHpJbmRleDogMixcbiAgICBcIiY6OmJlZm9yZVwiOiB7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgYm90dG9tOiA2LFxuICAgICAgbGVmdDogMCxcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7U2hhcGVMZWZ0fSlgLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiYm90dG9tIGxlZnRcIixcbiAgICAgIGJhY2tncm91bmRTaXplOiBcIjM2JVwiLFxuICAgIH0sXG4gICAgXCImOjphZnRlclwiOiB7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgYm90dG9tOiBcIjQwcHhcIixcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIHpJbmRleDogLTEsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtTaGFwZVJpZ2h0fSlgLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogXCIzMiVcIixcbiAgICB9LFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgbWluSGVpZ2h0OiBcImluaGVyaXRcIixcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIH0sXG4gICAgY29udGVudEJveDoge1xuICAgICAgd2lkdGg6IFtcIjEwMCVcIiwgXCI5MCVcIiwgXCI1MzVweFwiLCBudWxsLCBcIjU3JVwiLCBcIjYwJVwiLCBcIjY4JVwiLCBcIjYwJVwiXSxcbiAgICAgIG14OiBcImF1dG9cIixcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIG1iOiBbXCI0MHB4XCIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDddLFxuICAgIH0sXG4gICAgaW1hZ2VCb3g6IHtcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxuICAgICAgbWI6IFswLCBudWxsLCAtNiwgbnVsbCwgbnVsbCwgXCItNDBweFwiLCBudWxsLCAtM10sXG4gICAgICBpbWc6IHtcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgaGVpZ2h0OiBbMjQ1LCBcImF1dG9cIl0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/banner.js\n");

/***/ })

})