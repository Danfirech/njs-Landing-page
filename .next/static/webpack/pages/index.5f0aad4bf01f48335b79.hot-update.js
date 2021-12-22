webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/text-feature.js":
/*!****************************************!*\
  !*** ./src/components/text-feature.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextFeature; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\nvar _jsxFileName = \"/Users/danielpossehl/Desktop/Projects/NEXT.js projects/njs-landingpage/njs-Landing-page/src/components/text-feature.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\nfunction TextFeature(_ref) {\n  var subTitle = _ref.subTitle,\n      title = _ref.title,\n      description = _ref.description,\n      btnName = _ref.btnName,\n      _ref$btnURL = _ref.btnURL,\n      btnURL = _ref$btnURL === void 0 ? \"#\" : _ref$btnURL;\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.wrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    as: \"P\",\n    sx: styles.wrapper.subTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, subTitle), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n    as: \"h2\",\n    sx: styles.wrapper.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, title)), description && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    as: \"p\",\n    className: \"description\",\n    sx: styles.description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, description), btnName && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    href: btnURL,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  })));\n}\n_c = TextFeature;\nvar styles = {\n  card: {\n    display: \"flex\",\n    alignItems: \"flex-start\",\n    flexDirection: \"column\",\n    flexShrink: 0,\n    a: {\n      m: [\"0 auto\", null, null, 0]\n    }\n  },\n  wrapper: {\n    width: \"100%\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    mt: -1,\n    subTitle: {\n      fontSize: [0, null, 1],\n      color: \"primary\",\n      textTransform: \"uppercase\",\n      fontWeight: \"700\",\n      mb: [2, 3],\n      lineHeight: 1.5,\n      letterSpacing: [\"1.5px\", null, \"2px\"]\n    },\n    title: {\n      fontSize: [\"24px\", null, \"28px\", \"30px\", \"36px\", \"42px\", null, \"48px\"],\n      color: \"heading_secondary\",\n      lineHeight: [1.3, null, null, null, 1.2],\n      fontWeight: \"700\",\n      letterSpacing: \"-.5px\",\n      mb: 5\n    }\n  },\n  description: {\n    fontSize: [\"15px\", 2, null, null, null, \"17px\", null, 3],\n    fontWeight: 400,\n    lineHeight: [1.85, null, null, 2, null, \"2.2\"],\n    color: \"text_secondary\",\n    mb: \"30px\"\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"TextFeature\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlLmpzPzQ2OTkiXSwibmFtZXMiOlsiVGV4dEZlYXR1cmUiLCJzdWJUaXRsZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJidG5OYW1lIiwiYnRuVVJMIiwic3R5bGVzIiwiY2FyZCIsIndyYXBwZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJmbGV4U2hyaW5rIiwiYSIsIm0iLCJ3aWR0aCIsIm10IiwiZm9udFNpemUiLCJjb2xvciIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwibWIiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFdBQVQsT0FNWjtBQUFBLE1BTERDLFFBS0MsUUFMREEsUUFLQztBQUFBLE1BSkRDLEtBSUMsUUFKREEsS0FJQztBQUFBLE1BSERDLFdBR0MsUUFIREEsV0FHQztBQUFBLE1BRkRDLE9BRUMsUUFGREEsT0FFQztBQUFBLHlCQUREQyxNQUNDO0FBQUEsTUFEREEsTUFDQyw0QkFEUSxHQUNSO0FBQ0QsU0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0UsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFDLEdBQVQ7QUFBYSxNQUFFLEVBQUVGLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlUCxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLFFBREgsQ0FERixFQUlFLHFEQUFDLGdEQUFEO0FBQVMsTUFBRSxFQUFDLElBQVo7QUFBaUIsTUFBRSxFQUFFSyxNQUFNLENBQUNFLE9BQVAsQ0FBZU4sS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxLQURILENBSkYsQ0FERixFQVNHQyxXQUFXLElBQ1YscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUMsR0FBVDtBQUFhLGFBQVMsRUFBQyxhQUF2QjtBQUFxQyxNQUFFLEVBQUVHLE1BQU0sQ0FBQ0gsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxXQURILENBVkosRUFjR0MsT0FBTyxJQUNOLHFEQUFDLDZDQUFEO0FBQU0sUUFBSSxFQUFFQyxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FmSixDQURGO0FBc0JEO0tBN0J1QkwsVztBQStCeEIsSUFBTU0sTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRTtBQUNKRSxXQUFPLEVBQUUsTUFETDtBQUVKQyxjQUFVLEVBQUUsWUFGUjtBQUdKQyxpQkFBYSxFQUFFLFFBSFg7QUFJSkMsY0FBVSxFQUFFLENBSlI7QUFLSkMsS0FBQyxFQUFFO0FBQ0RDLE9BQUMsRUFBRSxDQUFDLFFBQUQsRUFBVyxJQUFYLEVBQWlCLElBQWpCLEVBQXVCLENBQXZCO0FBREY7QUFMQyxHQURPO0FBVWJOLFNBQU8sRUFBRTtBQUNQTyxTQUFLLEVBQUUsTUFEQTtBQUVQTixXQUFPLEVBQUUsTUFGRjtBQUdQRSxpQkFBYSxFQUFFLFFBSFI7QUFJUEssTUFBRSxFQUFFLENBQUMsQ0FKRTtBQUtQZixZQUFRLEVBQUU7QUFDUmdCLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixDQURGO0FBRVJDLFdBQUssRUFBRSxTQUZDO0FBR1JDLG1CQUFhLEVBQUUsV0FIUDtBQUlSQyxnQkFBVSxFQUFFLEtBSko7QUFLUkMsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FMSTtBQU1SQyxnQkFBVSxFQUFFLEdBTko7QUFPUkMsbUJBQWEsRUFBRSxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLEtBQWhCO0FBUFAsS0FMSDtBQWNQckIsU0FBSyxFQUFFO0FBQ0xlLGNBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsTUFBZixFQUF1QixNQUF2QixFQUErQixNQUEvQixFQUF1QyxNQUF2QyxFQUErQyxJQUEvQyxFQUFxRCxNQUFyRCxDQURMO0FBRUxDLFdBQUssRUFBRSxtQkFGRjtBQUdMSSxnQkFBVSxFQUFFLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLEdBQXhCLENBSFA7QUFJTEYsZ0JBQVUsRUFBRSxLQUpQO0FBS0xHLG1CQUFhLEVBQUUsT0FMVjtBQU1MRixRQUFFLEVBQUU7QUFOQztBQWRBLEdBVkk7QUFpQ2JsQixhQUFXLEVBQUU7QUFDWGMsWUFBUSxFQUFFLENBQUMsTUFBRCxFQUFTLENBQVQsRUFBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLE1BQTlCLEVBQXNDLElBQXRDLEVBQTRDLENBQTVDLENBREM7QUFFWEcsY0FBVSxFQUFFLEdBRkQ7QUFHWEUsY0FBVSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLENBQW5CLEVBQXNCLElBQXRCLEVBQTRCLEtBQTVCLENBSEQ7QUFJWEosU0FBSyxFQUFFLGdCQUpJO0FBS1hHLE1BQUUsRUFBRTtBQUxPO0FBakNBLENBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90ZXh0LWZlYXR1cmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBIZWFkaW5nLCBUZXh0LCBCdXR0b24sIExpbmsgfSBmcm9tIFwidGhlbWUtdWlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dEZlYXR1cmUoe1xuICBzdWJUaXRsZSxcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBidG5OYW1lLFxuICBidG5VUkwgPSBcIiNcIixcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0+XG4gICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgIDxUZXh0IGFzPVwiUFwiIHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+XG4gICAgICAgICAge3N1YlRpdGxlfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgPC9Cb3g+XG4gICAgICB7ZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICA8VGV4dCBhcz1cInBcIiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiIHN4PXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKX1cbiAgICAgIHtidG5OYW1lICYmIChcbiAgICAgICAgPExpbmsgaHJlZj17YnRuVVJMfT5cbiAgICAgICAgICA8QnV0dG9uPjwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgYToge1xuICAgICAgbTogW1wiMCBhdXRvXCIsIG51bGwsIG51bGwsIDBdLFxuICAgIH0sXG4gIH0sXG4gIHdyYXBwZXI6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBtdDogLTEsXG4gICAgc3ViVGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbMCwgbnVsbCwgMV0sXG4gICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcbiAgICAgIG1iOiBbMiwgM10sXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiBbXCIxLjVweFwiLCBudWxsLCBcIjJweFwiXSxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogW1wiMjRweFwiLCBudWxsLCBcIjI4cHhcIiwgXCIzMHB4XCIsIFwiMzZweFwiLCBcIjQycHhcIiwgbnVsbCwgXCI0OHB4XCJdLFxuICAgICAgY29sb3I6IFwiaGVhZGluZ19zZWNvbmRhcnlcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjMsIG51bGwsIG51bGwsIG51bGwsIDEuMl0sXG4gICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICAgICAgbGV0dGVyU3BhY2luZzogXCItLjVweFwiLFxuICAgICAgbWI6IDUsXG4gICAgfSxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBmb250U2l6ZTogW1wiMTVweFwiLCAyLCBudWxsLCBudWxsLCBudWxsLCBcIjE3cHhcIiwgbnVsbCwgM10sXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAyLCBudWxsLCBcIjIuMlwiXSxcbiAgICBjb2xvcjogXCJ0ZXh0X3NlY29uZGFyeVwiLFxuICAgIG1iOiBcIjMwcHhcIixcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/text-feature.js\n");

/***/ })

})