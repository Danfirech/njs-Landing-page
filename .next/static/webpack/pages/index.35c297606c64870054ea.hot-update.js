webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Banner; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/banner-thumb.png */ \"./src/assets/banner-thumb.png\");\n/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/shape-left.png */ \"./src/assets/shape-left.png\");\n/* harmony import */ var assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/shape-right.png */ \"./src/assets/shape-right.png\");\n/* harmony import */ var assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/danielpossehl/Desktop/Projects/NEXT.js projects/njs-landingpage/njs-Landing-page/src/sections/banner.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\nfunction Banner() {\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"section\", {\n    sx: styles.banner,\n    id: \"home\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    sx: styles.banner.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.banner.contentBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n    as: \"h1\",\n    variant: \"heroPrimary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 11\n    }\n  }, \"Top Quality Digital Products To Explore\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    as: \"p\",\n    variant: \"heroSecondary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  }, \"Check out our website to find great software products and deals! If you need a website or a webapplication this is the place to go!\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    varriant: \"primary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }))));\n}\n_c = Banner;\nvar styles = {\n  banner: {\n    pt: [\"140px\", \"145px\", \"155px\", \"170px\", null, null, \"180px\", \"215px\"],\n    pb: [2, null, 0, null, 2, 0, null, 5],\n    position: \"relative\",\n    zIndex: 2,\n    \"&::before\": {\n      position: \"absolute\",\n      content: '\"\"',\n      bottom: 6,\n      left: 0,\n      height: \"100%\",\n      width: \"100%\",\n      zIndex: -1,\n      backgroundImage: \"url(\".concat(assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3___default.a, \")\"),\n      backgroundRepeat: \"no-repeat\",\n      backgroundPosition: \"bottom left\",\n      backgroundSize: \"36%\"\n    },\n    \"&::after\": {\n      position: \"absolute\",\n      content: '\"\"',\n      bottom: \"40px\",\n      right: 0,\n      height: \"100%\",\n      width: \"100%\",\n      zIndex: -1,\n      backgroundImage: \"url(\".concat(assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4___default.a, \")\"),\n      backgroundRepeat: \"no-repeat\",\n      backgroundPosition: \"bottom right\",\n      backgroundSize: \"32%\"\n    },\n    container: {\n      minHeight: \"inherit\",\n      display: \"flex\",\n      flexDirection: \"column\",\n      justifyContent: \"center\"\n    },\n    contentBox: {\n      width: [\"100%\", \"90%\", \"535px\", null, \"57%\", \"60%\", \"68%\", \"60%\"],\n      mx: \"auto\",\n      textAlign: \"center\",\n      mb: [\"40px\", null, null, null, null, 7]\n    },\n    imageBox: {\n      justifyContent: \"center\",\n      textAlign: \"center\",\n      display: \"inline-flex\",\n      mb: [0, null, -6, null, null, \"-40px\", null, -3],\n      img: {\n        position: \"relative\",\n        height: [245, \"auto\"]\n      }\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Banner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcz80ODZiIl0sIm5hbWVzIjpbIkJhbm5lciIsInN0eWxlcyIsImJhbm5lciIsImNvbnRhaW5lciIsImNvbnRlbnRCb3giLCJwdCIsInBiIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjb250ZW50IiwiYm90dG9tIiwibGVmdCIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZEltYWdlIiwiU2hhcGVMZWZ0IiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwicmlnaHQiLCJTaGFwZVJpZ2h0IiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsIm14IiwidGV4dEFsaWduIiwibWIiLCJpbWFnZUJveCIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUMvQixTQUNFO0FBQVMsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQXBCO0FBQTRCLE1BQUUsRUFBQyxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0RBQUQ7QUFBVyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVGLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRSxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsZ0RBQUQ7QUFBUyxNQUFFLEVBQUMsSUFBWjtBQUFpQixXQUFPLEVBQUMsYUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FERixFQUlFLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFDLEdBQVQ7QUFBYSxXQUFPLEVBQUMsZUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwySUFKRixFQVFFLHFEQUFDLCtDQUFEO0FBQVEsWUFBUSxFQUFDLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQURGLENBREYsQ0FERjtBQWdCRDtLQWpCdUJKLE07QUFtQnhCLElBQU1DLE1BQU0sR0FBRztBQUNiQyxRQUFNLEVBQUU7QUFDTkcsTUFBRSxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsT0FBNUIsRUFBcUMsSUFBckMsRUFBMkMsSUFBM0MsRUFBaUQsT0FBakQsRUFBMEQsT0FBMUQsQ0FERTtBQUVOQyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsRUFBYSxJQUFiLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLElBQXpCLEVBQStCLENBQS9CLENBRkU7QUFHTkMsWUFBUSxFQUFFLFVBSEo7QUFJTkMsVUFBTSxFQUFFLENBSkY7QUFLTixpQkFBYTtBQUNYRCxjQUFRLEVBQUUsVUFEQztBQUVYRSxhQUFPLEVBQUUsSUFGRTtBQUdYQyxZQUFNLEVBQUUsQ0FIRztBQUlYQyxVQUFJLEVBQUUsQ0FKSztBQUtYQyxZQUFNLEVBQUUsTUFMRztBQU1YQyxXQUFLLEVBQUUsTUFOSTtBQU9YTCxZQUFNLEVBQUUsQ0FBQyxDQVBFO0FBUVhNLHFCQUFlLGdCQUFTQyw0REFBVCxNQVJKO0FBU1hDLHNCQUFnQixhQVRMO0FBVVhDLHdCQUFrQixFQUFFLGFBVlQ7QUFXWEMsb0JBQWMsRUFBRTtBQVhMLEtBTFA7QUFrQk4sZ0JBQVk7QUFDVlgsY0FBUSxFQUFFLFVBREE7QUFFVkUsYUFBTyxFQUFFLElBRkM7QUFHVkMsWUFBTSxFQUFFLE1BSEU7QUFJVlMsV0FBSyxFQUFFLENBSkc7QUFLVlAsWUFBTSxFQUFFLE1BTEU7QUFNVkMsV0FBSyxFQUFFLE1BTkc7QUFPVkwsWUFBTSxFQUFFLENBQUMsQ0FQQztBQVFWTSxxQkFBZSxnQkFBU00sNkRBQVQsTUFSTDtBQVNWSixzQkFBZ0IsYUFUTjtBQVVWQyx3QkFBa0IsRUFBRSxjQVZWO0FBV1ZDLG9CQUFjLEVBQUU7QUFYTixLQWxCTjtBQStCTmYsYUFBUyxFQUFFO0FBQ1RrQixlQUFTLEVBQUUsU0FERjtBQUVUQyxhQUFPLEVBQUUsTUFGQTtBQUdUQyxtQkFBYSxFQUFFLFFBSE47QUFJVEMsb0JBQWMsRUFBRTtBQUpQLEtBL0JMO0FBcUNOcEIsY0FBVSxFQUFFO0FBQ1ZTLFdBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLE9BQWhCLEVBQXlCLElBQXpCLEVBQStCLEtBQS9CLEVBQXNDLEtBQXRDLEVBQTZDLEtBQTdDLEVBQW9ELEtBQXBELENBREc7QUFFVlksUUFBRSxFQUFFLE1BRk07QUFHVkMsZUFBUyxFQUFFLFFBSEQ7QUFJVkMsUUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLEVBQWlDLENBQWpDO0FBSk0sS0FyQ047QUEyQ05DLFlBQVEsRUFBRTtBQUNSSixvQkFBYyxFQUFFLFFBRFI7QUFFUkUsZUFBUyxFQUFFLFFBRkg7QUFHUkosYUFBTyxFQUFFLGFBSEQ7QUFJUkssUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFDLENBQVgsRUFBYyxJQUFkLEVBQW9CLElBQXBCLEVBQTBCLE9BQTFCLEVBQW1DLElBQW5DLEVBQXlDLENBQUMsQ0FBMUMsQ0FKSTtBQUtSRSxTQUFHLEVBQUU7QUFDSHRCLGdCQUFRLEVBQUUsVUFEUDtBQUVISyxjQUFNLEVBQUUsQ0FBQyxHQUFELEVBQU0sTUFBTjtBQUZMO0FBTEc7QUEzQ0o7QUFESyxDQUFmIiwiZmlsZSI6Ii4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgSGVhZGluZywgVGV4dCwgSW1hZ2UsIEJ1dHRvbiB9IGZyb20gXCJ0aGVtZS11aVwiO1xuaW1wb3J0IEJhbm5lckltZyBmcm9tIFwiYXNzZXRzL2Jhbm5lci10aHVtYi5wbmdcIjtcbmltcG9ydCBTaGFwZUxlZnQgZnJvbSBcImFzc2V0cy9zaGFwZS1sZWZ0LnBuZ1wiO1xuaW1wb3J0IFNoYXBlUmlnaHQgZnJvbSBcImFzc2V0cy9zaGFwZS1yaWdodC5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFubmVyKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMuYmFubmVyfSBpZD1cImhvbWVcIj5cbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5iYW5uZXIuY29udGFpbmVyfT5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5jb250ZW50Qm94fT5cbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgdmFyaWFudD1cImhlcm9QcmltYXJ5XCI+XG4gICAgICAgICAgICBUb3AgUXVhbGl0eSBEaWdpdGFsIFByb2R1Y3RzIFRvIEV4cGxvcmVcbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPFRleHQgYXM9XCJwXCIgdmFyaWFudD1cImhlcm9TZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIENoZWNrIG91dCBvdXIgd2Vic2l0ZSB0byBmaW5kIGdyZWF0IHNvZnR3YXJlIHByb2R1Y3RzIGFuZCBkZWFscyEgSWZcbiAgICAgICAgICAgIHlvdSBuZWVkIGEgd2Vic2l0ZSBvciBhIHdlYmFwcGxpY2F0aW9uIHRoaXMgaXMgdGhlIHBsYWNlIHRvIGdvIVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8QnV0dG9uIHZhcnJpYW50PVwicHJpbWFyeVwiPjwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBiYW5uZXI6IHtcbiAgICBwdDogW1wiMTQwcHhcIiwgXCIxNDVweFwiLCBcIjE1NXB4XCIsIFwiMTcwcHhcIiwgbnVsbCwgbnVsbCwgXCIxODBweFwiLCBcIjIxNXB4XCJdLFxuICAgIHBiOiBbMiwgbnVsbCwgMCwgbnVsbCwgMiwgMCwgbnVsbCwgNV0sXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB6SW5kZXg6IDIsXG4gICAgXCImOjpiZWZvcmVcIjoge1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGJvdHRvbTogNixcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgekluZGV4OiAtMSxcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1NoYXBlTGVmdH0pYCxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImJvdHRvbSBsZWZ0XCIsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogXCIzNiVcIixcbiAgICB9LFxuICAgIFwiJjo6YWZ0ZXJcIjoge1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGJvdHRvbTogXCI0MHB4XCIsXG4gICAgICByaWdodDogMCxcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7U2hhcGVSaWdodH0pYCxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxuICAgICAgYmFja2dyb3VuZFNpemU6IFwiMzIlXCIsXG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIG1pbkhlaWdodDogXCJpbmhlcml0XCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICB9LFxuICAgIGNvbnRlbnRCb3g6IHtcbiAgICAgIHdpZHRoOiBbXCIxMDAlXCIsIFwiOTAlXCIsIFwiNTM1cHhcIiwgbnVsbCwgXCI1NyVcIiwgXCI2MCVcIiwgXCI2OCVcIiwgXCI2MCVcIl0sXG4gICAgICBteDogXCJhdXRvXCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICBtYjogW1wiNDBweFwiLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3XSxcbiAgICB9LFxuICAgIGltYWdlQm94OiB7XG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcbiAgICAgIG1iOiBbMCwgbnVsbCwgLTYsIG51bGwsIG51bGwsIFwiLTQwcHhcIiwgbnVsbCwgLTNdLFxuICAgICAgaW1nOiB7XG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIGhlaWdodDogWzI0NSwgXCJhdXRvXCJdLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sections/banner.js\n");

/***/ })

})